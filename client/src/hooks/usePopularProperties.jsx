import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularProperties = () => {

    const {data:popularProperties = [], isLoading} =  useQuery({
        queryKey:['popular'],
        queryFn : async ()=>{
            const {data} = await axios.get('http://localhost:5000/popular')
            return data;
        }
    })

    return [popularProperties, isLoading]
};

export default usePopularProperties;