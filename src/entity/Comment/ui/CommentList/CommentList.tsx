import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { Comment } from '../../model/types/commentSchema';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListComponentProps {
  className?: string;
  isLoading?: boolean;
  comments: Comment[];
}

const CommentListComponent: FC<CommentListComponentProps> = ({
  className,
  comments,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.commentsList, [className])}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            className={cls.comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Пока пусто')} />
      )}
    </div>
  );
};

export const CommentList = memo(CommentListComponent);
