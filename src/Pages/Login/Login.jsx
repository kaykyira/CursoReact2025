import BotãoPadrão from "../../Components/BotãoPadrão/BotãoPadrão";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    return (

        <div>
        ESSA É A PÁGINA LOGIN 
        <BotãoPadrão
         onClick={() => navigate("/")} 
        />
        </div>


    )

}

export default Login; 