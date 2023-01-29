import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PageWrapper from "./components/common/PageWrapper";

const App = () => {
  return (
    <PageWrapper>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
      </Routes>
    </PageWrapper>
  );
};

export default App;
