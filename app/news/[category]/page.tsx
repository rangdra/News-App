import { categories } from '../../../constans';
import { Category, NewsResponse } from '../../../types';
import fetchNews from '../../../utils/fetchNews';
import NewsList from '../../NewsList';

interface IProps {
  params: { category: Category };
}

async function NewsCategoryPage({ params: { category } }: IProps) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

export default NewsCategoryPage;
