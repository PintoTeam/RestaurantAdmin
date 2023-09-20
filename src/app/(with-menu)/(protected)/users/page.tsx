"use client";

import React, { useEffect, useState } from "react";
import { Input, StatusChip, Title } from "@/lib";
import { DataGrid } from "@mui/x-data-grid";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid/models";
import { User } from "@/global.types";
import { getAllUsersByRestaurant } from "@/services/user";
import { useStore } from "@/store";

const columns: GridColDef<User>[] = [
  {
    field: "state",
    headerName: "State",
    sortable: true,
    width: 100,
    renderCell: (params: GridRenderCellParams) => {
      return <StatusChip active={params.row.isActive} />;
    },
  },
  {
    field: "fullName",
    headerName: "Full Name",
    renderCell: (params: GridRenderCellParams) => {
      return <p>{`${params.row.name} ${params.row.lastName}`}</p>;
    },
    width: 150,
  },
  {
    field: "userName",
    headerName: "Username",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 250,
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 250,
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    type: "date",
    valueGetter: (params: GridValueGetterParams) => {
      return new Date(`${params.row.dateOfBirth}Z`);
    },
    width: 200,
  },
  {
    field: "registrationDate",
    headerName: "Registration",
    type: "dateTime",
    valueGetter: (params: GridValueGetterParams) => {
      return new Date(`${params.row.registrationDate}Z`);
    },
    width: 200,
  },
];

export default function Users() {
  const { token } = useStore();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    if (token) {
      getAllUsersByRestaurant(token)
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <section className="flex flex-col space-y-5">
      <div className="flex flex-row justify-between w-full">
        <Title text="Users" className="w-6/12" />
        <Input placeholder="Search..." className="w-2/12" />
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        rowSelection={false}
        pageSizeOptions={[10, 20, 40, 100]}
        disableRowSelectionOnClick
      />
    </section>
  );
}
