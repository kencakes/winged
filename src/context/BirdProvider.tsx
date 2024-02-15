import { createContext, useContext, useState } from "react";
import { BirdContextType, IBird, Props } from "@/interfaces/bird";
import { supabaseClient } from "@/config/supabase-client";
import { useAuth } from "./AuthProvider";

export const BirdContent = createContext<BirdContextType | null>(null);

export const useBirds = () => {
    const context = useContext(BirdContent);
    if (!context) throw new Error("useBirds must be used within a BirdContext");
    return context;
};

export const BirdContentProvider = ({ children }: Props) => {
    const [birds, setBirds] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();

    const getBirdsByUserId = async () => {
        setIsLoading(true);

        const { data: bird, error } = await supabaseClient
            .from("bird")
            .select("*")
            .eq("bird_id", user?.id);
        if (error) throw error;

        setBirds(bird);
        setIsLoading(false);
    };

    const getBirdById = async (id: string) => {
        setIsLoading(true);

        const { data: bird, error } = await supabaseClient
            .from("bird")
            .select("*")
            .eq("id", id);
        if (error) throw error;

        setBirds(bird);
        setIsLoading(false);
    };

    const createBird = async (birdName: string, birthDate: string) => {
        setIsLoading(true);
        const parsedBirthDate = new Date(birthDate);
        if (user) {
            const formattedBirthDate = parsedBirthDate.toISOString();
            const { data, error } = await supabaseClient.from("bird").insert({
                name: birdName,
                bird_id: user.id,
                birth_date: formattedBirthDate,
            });
            console.log(data);
            if (error) throw error;
            if (data) return data;
        }

        setIsLoading(false);
    };

    const deleteBird = async (id: string) => {
        const { error } = await supabaseClient
            .from("bird")
            .delete()
            .eq("id", id)
            .eq("bird_id", user?.id);
    };

    const updateBird = async (id: string, updateFields: any) => {
        const { error, data } = await supabaseClient
            .from("bird")
            .update(updateFields)
            .eq("id", id)
            .eq("bird_id", user?.id)
            .select();

        if (error) throw error;
        setBirds(birds.filter((bird) => bird.id !== id));
    };

    return (
        <BirdContent.Provider
            value={{
                birds,
                getBirdById,
                getBirdsByUserId,
                createBird,
                deleteBird,
                updateBird,
                isLoading,
            }}
        >
            {children}
        </BirdContent.Provider>
    );
};
