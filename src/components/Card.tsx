import { useBirds } from '@/context/BirdProvider';
import { LucideIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';


export default function BirdCard() {
    const { birds, getBirdsByUserId, isLoading, deleteBird } = useBirds();
    // Also excutes every time the array of birds changes
    useEffect(() => {
        getBirdsByUserId();
    }, [birds]);

    const handleDelete = (id: string) => {
        deleteBird(id);
    }

    return (
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {birds.map((b) => (
                <Card className="flex flex-col justify-between">
                    <CardHeader className="">
                        <CardTitle>
                            {b.name}
                        </CardTitle>
                        <CardDescription>
                            {b.birth_date.toString()}
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                        <Button className='w-full' onClick={() => handleDelete(b.id)}>Delete</Button>
                    </CardFooter>
                </Card>
            ))}
        </section>
    )
}

