import { Input, Title } from "@/lib";
import React from "react";

export default function Users() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Title text="Users" />
        <Input placeholder="Search..." className="w-2/12" />
      </div>
      <table></table>
    </section>
  );
}
