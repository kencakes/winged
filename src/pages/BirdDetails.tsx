import PageTitle from "@/components/PageTitle";
import { columns } from "@/components/ui/columns";
import { DataTable } from "@/components/ui/data-table";
import { supabaseClient } from "@/config/supabase-client";
import { useLogbook } from "@/context/LogbookProvider";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BirdDetails() {
  // Gets the birds ID
  const { id } = useParams();
  const { logbook, getLogbookByBirdId } = useLogbook();

  useEffect(() => {
    if (id !== undefined) {
      const numericId = Number(id);
      getLogbookByBirdId(numericId);
    }

    console.log(logbook);
  }, [id]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <PageTitle title="Bird details" />

      <DataTable columns={columns} data={logbook} />
    </div>
  );
}
