import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAllProperties = () => {
    const { data: allProperties = [], isLoading } = useQuery({
        queryKey: ['All'],
        queryFn: async () => {
            const { data } = await axios.get('https://heritagenest-tau.vercel.app/properties')
            return data;
        }

    })

    return [allProperties, isLoading]
};

export default useAllProperties;