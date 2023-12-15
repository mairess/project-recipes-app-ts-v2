function Login() {
  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        name=""
        id=""
      />

      <input
        type="password"
        name=""
        id=""
        data-testid="password-input"
      />

      <button
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
