import { FC, memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TileIcon,
  },
];
interface ArticleViewSelectorComponentProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const ArticleViewSelectorComponent: FC<ArticleViewSelectorComponentProps> = ({
  className,
  view,
  onViewClick,
}) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.viewSelector)}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.clear}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', [], { [cls.notSelected]: view !== viewType.view })}
          />
        </Button>
      ))}
    </div>
  );
};

export const ArticleViewSelector = memo(ArticleViewSelectorComponent);
