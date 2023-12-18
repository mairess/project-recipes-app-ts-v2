import { useState } from 'react';

function useHandleChange() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { email, password } = form;
  const [filter, setFilter] = useState('');

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

  const handleFilterChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = target.value;
    setFilter(newFilter);
  };

  return {
    email,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleFilterChange,
    filter,
  };
}

export default useHandleChange;
