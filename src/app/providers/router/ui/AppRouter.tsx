import React from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <React.Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default AppRouter;
