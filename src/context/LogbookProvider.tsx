import { createContext, useContext, useState } from "react";
import { LogbookContextType, Props } from "@/interfaces/logbook";
import { supabaseClient } from "@/config/supabase-client";
import { useAuth } from "./AuthProvider";

export const LogbookContent = createContext<LogbookContextType | null>(null);

export const useLogbook = () => {
  const context = useContext(LogbookContent);
  if (!context)
    throw new Error("useLogbook must be used within a LogbookContext");
  return context;
};

export const LogbookContentProvider = ({ children }: Props) => {
  const [logbook, setLogbook] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLogbookByBirdId = async (id: string) => {
    setIsLoading(true);

    const { data: logbook, error } = await supabaseClient
      .from("logbook")
      .select("*")
      .eq("bird_id", id);
    if (error) throw error;

    setLogbook(logbook);
    setIsLoading(false);
  };

  const getLogbookById = async (id: string) => {
    setIsLoading(true);

    const { data: bird, error } = await supabaseClient
      .from("bird")
      .select("*")
      .eq("id", id);
    if (error) throw error;

    setLogbook(bird);
    setIsLoading(false);
  };

  const createLogbook = async (
    date: string,
    time: string,
    weight: number,
    weight_after: number,
    food_type: string,
    food_amount: number,
    vitamins: boolean,
    comments: string,
  ) => {
    setIsLoading(true);
    // YYYY-MM-DD
    const parsedDate = new Date(date).toISOString();

    const { data, error } = await supabaseClient.from("logbook").insert({
      date: parsedDate,
      time: time,
      weight: weight,
      weight_after: weight_after,
      food_type: food_type,
      food_amount: food_amount,
      vitamins: vitamins,
      comments: comments,
    });
    console.log(data);
    if (error) throw error;
    if (data) return data;
    setIsLoading(false);
  };

  const deleteLogbook = async (id: string) => {
    setIsLoading(true);
    const { error } = await supabaseClient
      .from("logbook")
      .delete()
      .eq("id", id);
    setIsLoading(false);
  };

  const updateLogbook = async (id: string, updateFields: any) => {
    setIsLoading(true);
    const { error, data } = await supabaseClient
      .from("lobgook")
      .update(updateFields)
      .eq("id", id)
      .select();

    if (error) throw error;
    setLogbook(logbook.filter((logbook) => logbook.id !== id));
    setIsLoading(false);
  };

  return (
    <LogbookContent.Provider
      value={{
        logbook,
        getLogbookByBirdId,
        getLogbookById,
        createLogbook,
        deleteLogbook,
        updateLogbook,
        isLoading,
      }}
    ></LogbookContent.Provider>
  );
};
