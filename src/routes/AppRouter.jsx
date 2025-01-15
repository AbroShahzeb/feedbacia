import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddEditFeedback } from "../modules/private/suggestion/components/addEditFeedback";
import { Suggestion } from "../modules/private/suggestion";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suggestion />} />
        <Route path="/add-feedback" element={<AddEditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
};
