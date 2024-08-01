import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNearbyProperties = () => {
    const { data: nearbyProperties = [], isLoading } = useQuery({
        queryKey: ['nearby'],
        queryFn: async () => {
            const { data } = await axios.get('https://heritagenest-tau.vercel.app/properties')
            const newData = data.filter(item => item.category === 'nearby')
            return newData;
        }

    })

    return [nearbyProperties, isLoading]
};

export default useNearbyProperties;