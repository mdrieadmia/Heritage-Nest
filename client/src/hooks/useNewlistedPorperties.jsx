import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNewlistedPorperties = () => {
    const { data: newlistedProperties = [], isLoading } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/newlisted')
            return data;
        }
    })

    return [newlistedProperties, isLoading]
};

export default useNewlistedPorperties;