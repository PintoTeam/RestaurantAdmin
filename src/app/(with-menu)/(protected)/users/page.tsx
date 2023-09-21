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
    headerName: "Status",
    sortable: true,
    width: 120,
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
    minWidth: 160,
    flex: 1,
  },
  {
    field: "userName",
    headerName: "Username",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 250,
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return <strong className="uppercase">{`${params.row.role}`}</strong>;
    },
  },
  {
    field: "dateOfBirth",
    headerName: "Date of Birth",
    type: "date",
    valueGetter: (params: GridValueGetterParams) => {
      return new Date(`${params.row.dateOfBirth}Z`);
    },
    minWidth: 200,
    flex: 1,
  },
  {
    field: "registrationDate",
    headerName: "Registration",
    type: "dateTime",
    valueGetter: (params: GridValueGetterParams) => {
      return new Date(`${params.row.registrationDate}Z`);
    },
    minWidth: 200,
    flex: 1,
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
      <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2 sm:justify-between sm:items-center w-full">
        <Title text="Users" className="w-fit" />
        <Input placeholder="Search..." className="lg:w-2/12" />
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
        autoHeight
      />
    </section>
  );
}
