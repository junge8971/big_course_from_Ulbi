import { FC, memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { Notification } from '../../model/types/notificationSchema';

interface NotificationItemComponentProps {
  className?: string;
  notification: Notification;
}

const NotificationItemComponent: FC<NotificationItemComponentProps> = ({
  className,
  notification,
}) => {
  const content = (
    <Card className={className} theme={CardTheme.OUTLINE}>
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification?.href) {
    return <AppLink to={notification.href}>{content}</AppLink>;
  }

  return content;
};

export const NotificationItem = memo(NotificationItemComponent);
