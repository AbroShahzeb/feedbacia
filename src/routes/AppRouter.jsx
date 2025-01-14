import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddEditFeedback } from "../modules/private/feedback/components/addEditFeedback";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add-feedback" element={<AddEditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
};
