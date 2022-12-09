'use client';

import { useRouter } from 'next/navigation';
import { Article } from '../types';

interface IProps {
  article: Article;
}
function ReadMoreBtn({ article }: IProps) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="h-10 bg-orange-400 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </button>
  );
}

export default ReadMoreBtn;
