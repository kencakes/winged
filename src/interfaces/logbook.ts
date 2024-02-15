import { ReactNode } from "react";

export interface ILogbook {
    id: string;
    date: Date;
    time: string;
    weight: number;
    weight_after: number;
    food_amount: number;
    food_type: string;
    vitamins: boolean;
    comments: string;
}

export type BirdContextType = {
    birds: ILogbook[];
    isLoading: boolean;
    getLogbookByUserId: () => void;
    getLogbookdById: (id: string) => void;
    createLogbook: (date: string, time: string, weight: number, weight_after: number, food_type: string, food_amount: number, vitamins: boolean, comments: string) => void;
    deleteLogbook: (id: string) => void;
    updateLogbook: (id: string, updateFields: Object) => void;
};

export interface Props {
    children?: ReactNode;
}