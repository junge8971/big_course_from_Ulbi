import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { Text } from 'shared/ui/Text/Text';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListComponentProps {
  className?: string;
}

const NotificationListComponent: FC<NotificationListComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  const { data: notifications, isLoading } = useNotifications(null);

  if (isLoading) {
    return (
      <VStack max gap="8" className={className}>
        <Card>
          <Loader />
        </Card>
      </VStack>
    );
  }

  if (!isLoading && !notifications.length) {
    return (
      <VStack max className={className}>
        <Text text={t('Пока пусто')} />
      </VStack>
    );
  }

  return (
    <VStack gap="8" max className={className}>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
};

export const NotificationList = memo(NotificationListComponent);
