import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../../ui/pages/HomePage";
import HomePageLayout from "../../../ui/components/Layout/HomePageLayout";

export default function Router() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={<HomePageLayout />}
          children={[<Route key={"home"} index element={<HomePage />} />]}
        />
        <Route path="*" element={<Navigate to="/page-not-found" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
