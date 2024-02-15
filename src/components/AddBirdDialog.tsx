import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useBirds } from '@/context/BirdProvider'
import { useToast } from './ui/use-toast'

export default function AddBirdDialog() {
    const { createBird } = useBirds();
    const { toast } = useToast();
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const addBird = (name: string, date: string) => {
        createBird(name, date);
        toast({
            title: `You have successfully added ${name}`
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircleIcon className="mr-2 h-4 w-4" />
                    Add Bird
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add your bird</DialogTitle>
                    <DialogDescription>
                        Add your new bird here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" defaultValue="Name" onChange={e => setName(e.target.value)} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="birth_date" className="text-right">
                            Birth date
                        </Label>
                        <Input id="birth_date" defaultValue="YYYY-MM-DD" onChange={e => setBirthdate(e.target.value)} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" onClick={() => addBird(name, birthdate)}>Save</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
