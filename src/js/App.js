import React from "react";
import ReactDOM from "react-dom/client";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase-config"; // Ajusta la ruta según tu estructura

const LoginForm = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario autenticado:", user);
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleGoogleLogin}
        >
          Iniciar sesión con Google
        </button>
      </form>
    </div>
  );
};

// Renderiza el componente dentro del elemento con ID "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginForm />);

