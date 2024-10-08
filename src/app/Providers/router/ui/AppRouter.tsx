import { FC, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

export const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((routeProps: AppRoutesProps) => {
    return (
      <Route
        key={routeProps.path}
        path={routeProps.path}
        element={
          routeProps.authOnly ? (
            <RequireAuth roles={routeProps.roles}>{routeProps.element}</RequireAuth>
          ) : (
            routeProps.element
          )
        }
      />
    );
  }, []);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};
