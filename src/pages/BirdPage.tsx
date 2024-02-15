import AddBirdDialog from "@/components/AddBirdDialog";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { BirdContentProvider } from "@/context/BirdProvider";

const BirdPage = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <BirdContentProvider>
                <div className="flex items-center justify-between space-y-2">
                    <PageTitle title='Birds' />
                    <div className="flex items-center space-x-2">
                        {/* <SearchBar/> */}
                        <AddBirdDialog />
                    </div>
                </div>



                <Card />
            </BirdContentProvider>
        </div>
    )
}

export default BirdPage;
