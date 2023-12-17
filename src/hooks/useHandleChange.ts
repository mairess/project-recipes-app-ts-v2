import { useState } from 'react';

function useHandleChange() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { email, password } = form;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^[^\s]{7,}$/.test(password);
  const isFormValid = isEmailValid && isPasswordValid;

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newMail = target.value;
    setForm({ ...form, email: newMail });
  };

  const handlePasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = target.value;
    setForm({ ...form, password: newPassword });
  };

  return {
    email,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
  };
}

export default useHandleChange;
