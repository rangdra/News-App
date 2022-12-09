import { NewsResponse } from '../../types';
import fetchNews from '../../utils/fetchNews';
import NewsList from '../NewsList';

interface IProps {
  searchParams?: { term: string };
}

async function SearchPage({ searchParams }: IProps) {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
