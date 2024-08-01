import { TbFidgetSpinner } from "react-icons/tb";
import useAllProperties from "../../hooks/useAllProperties";
import PropertiesCard from "../../components/PropertiesCard/PropertiesCard";

const AllProperties = () => {

    const [allProperties, isLoading] = useAllProperties();

    if (isLoading) {
        return <div className="h-[600px] w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin mr-3 mb-1 text-4xl text-orange-600" />
            <p>Please wait some moment...</p>
        </div>
    }

    console.log(allProperties);

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mt-7">All Properties</h1>
            <p className="text-center max-w-[550px] text-gray-500 mx-auto mt-3">Our all previous and running avaiable properties are avaiable in this page. You can easily choose any properties from here.</p>
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
                {
                    allProperties.map(data => <PropertiesCard data={data} key={data._id}></PropertiesCard>)
                }
            </div>
        </div>
    );
};

export default AllProperties;