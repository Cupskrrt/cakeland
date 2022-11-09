import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import { MOCK_DATA_CART } from "../utils/data";
import { COLUMNS_CART } from "../utils/columns";

export default function TableCart() {
  const columns = useMemo(() => COLUMNS_CART, []);
  const data = useMemo(() => MOCK_DATA_CART, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="max-h-[50vh] overflow-auto ml-48 scrollbar-hide no-scrollbar">
      <table {...getTableProps()} className="h-auto w-96 rounded-md m-6 mt-2">
        <thead className="bg-dark-turqoise text-silver">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-turqoise text-center h-10"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
