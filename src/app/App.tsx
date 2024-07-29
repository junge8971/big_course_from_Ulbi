import { AppRouter } from 'app/Providers/router';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { SideBar } from 'widgets/SideBar';

export const App: FC = () => {
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
