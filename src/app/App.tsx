import { AppRouter } from 'app/Providers/router';
import { userActions } from 'entity/User';
import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar';

import { useAppDispatch } from './Providers/StoreProvider';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')} id="app">
      <Navbar />

      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};
