import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularProperties = () => {

    const {data:popularProperties = [], isLoading} =  useQuery({
        queryKey:['popular'],
        queryFn : async ()=>{
            const { data } = await axios.get('https://heritagenest-tau.vercel.app/properties')
            const newData = data.filter(item => item.category === 'popular')
            return newData;
        }
    })

    return [popularProperties, isLoading]
};

export default usePopularProperties;