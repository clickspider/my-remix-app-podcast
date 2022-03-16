import { useLoaderData, redirect } from 'remix';
import { useState, useEffect } from 'react';
import MainLayout from '~/components/MainLayout';
import Card from '~/components/Card';
import { getData } from '~/api';
import SearchInput from '~/components/SearchInput';



export const action = async ({
  request,
}) => {
  const formData = await request.formData();
  const searchTerm = formData.get("Search");
  const data = await getData();
  const item = data.items.find(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const id = item.guid.split('/').pop();
  return redirect(`/episode/${id}`);
};

export const loader = async () => {
  const data = await getData();
  return data.items;
};

const Index = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!search && !data) return setFilteredData(data);
    const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filteredData);
  }, [search, data])


  return (
    <MainLayout>
      <SearchInput search={search} setSearch={setSearch} />
      <section className='grid-container'>
        {filteredData.length ?
          filteredData.map((item) => (<Card key={item.guid} episode={item} />))
          :
          <p>No results</p>
        }
      </section>
    </MainLayout>
  );
};

export default Index;
