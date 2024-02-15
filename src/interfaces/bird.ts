import { ReactNode } from "react";

export interface IBird {
    id: string;
    name: string;
    birth_date: Date;
    bird_id: string;
}

export type BirdContextType = {
    birds: IBird[];
    isLoading: boolean;
    getBirdsByUserId: () => void;
    getBirdById: (id: string) => void;
    createBird: (birdName: string, birthDate: string) => void;
    deleteBird: (id: string) => void;
    updateBird: (id: string, updateFields: Object) => void;
};

export interface Props {
    children?: ReactNode;
}