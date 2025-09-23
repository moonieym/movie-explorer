function Login() {
  const login = () => {
    // Simulación: guardamos un token en localStorage
    localStorage.setItem("token", "123456");
    window.location.href = "/profile"; // redirigir al perfil
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
}

export default Login;