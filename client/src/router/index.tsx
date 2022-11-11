import SignInPage from '@/pages/sign-in';
import SignUpPage from '@/pages/sign-up';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/auth/sign-in" element={<SignInPage />} />
      <Route path="/auth/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default Router;
