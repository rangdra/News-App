import { NewsResponse } from '../types';
import Article from './Article';

interface IProps {
  news: NewsResponse;
}
function NewsList({ news }: IProps) {
  return (
    <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
