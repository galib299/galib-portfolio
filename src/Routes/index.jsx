import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import Layout from "../Layouts";

const Main = lazy(() => import("../Pages/Main"));

const Index = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Index;
