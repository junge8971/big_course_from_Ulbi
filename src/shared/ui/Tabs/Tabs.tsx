import {
  FC, ReactNode, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsComponentProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

const TabsComponent: FC<TabsComponentProps> = ({
  className,
  onTabClick,
  tabs,
  value,
}) => {
  const onClickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );
  return (
    <div className={classNames(cls.tabs)}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tabItem}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          onClick={onClickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent);
