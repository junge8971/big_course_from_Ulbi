import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <PageWrapper className={classNames(cls.editPage, [className])}>
      <div className="" />
    </PageWrapper>
  );
};

export default memo(ArticleEditPage);
