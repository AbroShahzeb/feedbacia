import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddEditFeedback } from "../modules/private/suggestion/components/addEditFeedback";
import { Suggestion } from "../modules/private/suggestion";
import { FeedbackDetail } from "../modules/private/suggestion/components";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suggestion />} />
        <Route path="/details/:id" element={<FeedbackDetail />} />
        <Route
          path="/edit-feedback/:id"
          element={<AddEditFeedback isEdit={true} />}
        />
        <Route path="/add-feedback" element={<AddEditFeedback />} />
      </Routes>
    </BrowserRouter>
  );
};
