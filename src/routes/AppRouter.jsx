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
import ProtectedRoute from "./ProtectedRoute";
import { Profile } from "../modules/private/profile";
import { AppLayout } from "../layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="feedbacks"
          element={
            <ProtectedRoute>
              <Suggestion />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/feedbacks/details/:id"
          element={
            <ProtectedRoute>
              <FeedbackDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedbacks/edit/:id"
          element={
            <ProtectedRoute>
              <AddEditFeedback isEdit={true} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedbacks/add"
          element={
            <ProtectedRoute>
              <AddEditFeedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <Roadmap />
            </ProtectedRoute>
          }
        />

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
