import { getUserAuthData } from 'entity/User';
import { FC, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routes).map((routeProps) => (
            <Route key={routeProps.path} path={routeProps.path} element={routeProps.element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
