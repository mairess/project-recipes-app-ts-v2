const getTheMail = () => {
  const stored = localStorage.getItem('user');
  const parsed = stored ? JSON.parse(stored) : [];
  const { email } = parsed;
  return email;
};

export default getTheMail;
