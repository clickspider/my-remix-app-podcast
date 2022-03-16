import { useLoaderData } from 'remix';
import MainLayout from '~/components/MainLayout';
import CardDetails from '~/components/CardDetails';
import { getData } from '~/api';

export const loader = async ({ params: { id } }) => {
    const data = await getData();
    return data.items.find(item => item.guid.split('/').pop() === id);
};
export default function EpisodeDetail() {
    const episode = useLoaderData();
    return (
        <MainLayout>
            <CardDetails episode={episode} />
        </MainLayout>
    );
}
