/**
 * This hook is based on AmsBarros's code Login.tsx
 * at https://github.com/mairess/project-recipes-app-ts/commit/b7ee299c7496513e58b5eadc68c914b4f4f36bfb#diff-3061e501089702d5d89d85aa8ded9ce463fda33697bbf4183d1479b132fc04d0
*/

import { useEffect, useState } from 'react';

function useHandleChange() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const { email, password } = form;

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^[^\s]{7,}$/.test(password);
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = target.value;
    setForm((prevForm) => ({ ...prevForm, email: newMail }));
  };

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = target.value;
    setForm((prevForm) => ({ ...prevForm, password: newPassword }));
  };

  return {
    email,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    form,
  };
}

export default useHandleChange;
