import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNewlistedPorperties = () => {
    const { data: newlistedProperties = [], isLoading } = useQuery({
        queryKey: ['newlisted'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/properties')
            const newData = data.filter(item => item.category === 'newlisted')
            return newData;
        }
    })

    return [newlistedProperties, isLoading]
};

export default useNewlistedPorperties;