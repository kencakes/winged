"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Logbook = {
  id: string;
  date: Date;
  time: string;
  weight: number;
  weight_after: number;
  food_amount: number;
  food_type: string;
  vitamins: boolean;
  comments: string;
};

export const columns: ColumnDef<Logbook>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "weight_after",
    header: "Weight after",
  },
  {
    accessorKey: "food_amount",
    header: "Amount",
  },
  {
    accessorKey: "food_type",
    header: "Food",
  },
  {
    accessorKey: "vitamins",
    header: "Vitamins",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
];
