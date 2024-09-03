import { FC } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';

interface ArticlesPageProps {}

const ArticlesPage: FC<ArticlesPageProps> = () => {
  return (
    <div>
      <Loader />
    </div>
  );
};

export default ArticlesPage;
