import { AppRouter } from 'app/Providers/router';
import { getUserInited, userActions } from 'entity/User';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app')} id="app">
      <Navbar />

      <div className="content-page">
        <SideBar />
        {inited && <AppRouter />}
      </div>
    </div>
  );
};
