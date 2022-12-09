import { Category } from '../types';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  let url = `http://api.mediastack.com/v1/news?access_key=${
    process.env.MEDIASTACK_API_KEY
  }&categories=${category}&countries=gb&sort=published_desc&keywords=${
    keywords ? keywords : ''
  }`;

  const res = await fetch(url, {
    cache: isDynamic ? 'no-cache' : 'default',
    next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
  });

  const newsResponse = await res.json();

  const news =
    newsResponse.data.length > 0 ? sortNewsByImage(newsResponse) : newsResponse;
  return news;
};

export default fetchNews;
