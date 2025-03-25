import { useState } from "react";
import viteLogo from "/vite.svg";
import { auth } from "./config/firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";
import "./App.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const autenticarFirebase = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert("Usuário autenticado com sucesso!");
    } catch (err) {
      alert(`Falha ao autenticar! ${err}`,);
    }
  };

  return (
    <main>
      <div className="login-container">
        <h1>Formulário de Login</h1>
      <form onSubmit={autenticarFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="e-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          name="senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      </div>
    </main>
  );
}
