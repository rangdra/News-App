import { categories } from '../constans';
import { NewsResponse } from '../types';
import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';

async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(','));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
