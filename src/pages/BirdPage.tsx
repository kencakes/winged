import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { BirdContent, BirdContentProvider } from "@/context/BirdProvider";

const BirdPage = () => {
    return (
        <div className="flex flex-col gap-4 w-full">

            <PageTitle title="Birds" />
            <BirdContentProvider>
                <Card />
            </BirdContentProvider>
        </div>
    )
}

export default BirdPage;
