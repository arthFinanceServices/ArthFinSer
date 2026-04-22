import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PartnerPage from "./partners/PartnerPage";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    // <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/partner" element={<PartnerPage />}></Route>
      </Routes>
    // </ErrorBoundary>
  );
}
