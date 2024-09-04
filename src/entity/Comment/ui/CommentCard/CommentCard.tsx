import { FC, memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { Comment } from '../../model/types/commentSchema';
import cls from './CommentCard.module.scss';

interface CommentCardComponentProps {
  className?: string;
  isLoading?: boolean;
  comment?: Comment;
}

const CommentCardComponent: FC<CommentCardComponentProps> = ({
  className,
  comment,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={30} />
        </div>
        <Skeleton width="100%" height={30} className={cls.text} />
      </div>
    );
  }
  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.commentCard, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  );
};

export const CommentCard = memo(CommentCardComponent);
