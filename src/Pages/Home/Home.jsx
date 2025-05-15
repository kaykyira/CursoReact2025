import BotãoPadrão from "../../Components/BotãoPadrão/BotãoPadrão";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Garante que o contêiner ocupe toda a altura da tela
        backgroundColor: "black", // Fundo preto
        color: "#ffd100", // Texto amarelo
        textAlign: "center",
      }}
    >
      <h1> HOME </h1>
     
    </div>
  );
}

export default Home;