import { useEffect, useState } from 'react';

function useHandleChange() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearchTerm = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = target.value;
    setSearchTerm(newTerm);
  };

  return {
    email,
    isFormValid,
    handleEmailChange,
    handlePasswordChange,
    handleSearchTerm,
    searchTerm,
    form,
  };
}

export default useHandleChange;
