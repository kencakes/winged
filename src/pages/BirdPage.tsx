import NavigationBar from "@/components/NavigationBar";

const BirdPage = () => {
    return (<>
            <div className="hidden md:block">
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <NavigationBar className="h-screen"/>
                            <div className="col-span-3 lg:col-span-4 lg:border-l ">
                                <div className="h-full px-4 py-6 lg:px-8 ">
                                    <h1>Bird Page</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BirdPage;
