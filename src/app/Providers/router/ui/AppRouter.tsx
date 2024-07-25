import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => (
  <div className="page-wrapper">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((routeProps) => (
          <Route key={routeProps.path} path={routeProps.path} element={routeProps.element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
