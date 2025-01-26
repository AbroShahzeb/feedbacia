import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AddEditFeedback } from "../modules/private/suggestion/components/addEditFeedback";
import { Suggestion } from "../modules/private/suggestion";
import { FeedbackDetail } from "../modules/private/suggestion/components";
import { Roadmap } from "../modules/private/roadmap";
import { AuthLayout } from "../modules/public/auth";
import {
  ForgotPassword,
  Login,
  ResetPassword,
  Signup,
} from "../modules/public/auth/components";

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
        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
