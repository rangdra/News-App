import { NewsResponse } from '../types';

const sortNewsByImage = (news: NewsResponse) => {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  return {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };
};

export default sortNewsByImage;
