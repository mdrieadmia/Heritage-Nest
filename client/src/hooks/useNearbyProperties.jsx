import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNearbyProperties = () => {
    const { data: nearbyProperties = [], isLoading } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/newlisted')
            return data;
        }
    })

    return [nearbyProperties, isLoading]
};

export default useNearbyProperties;