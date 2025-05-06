import BotãoPadrão from "../../Components/BotãoPadrão/BotãoPadrão";

import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();
    return (

        <div>
        ESSA É A PÁGINA HOME
        <BotãoPadrão
         onClick={() => navigate("/login")} 
         >
         
       </BotãoPadrão>
        </div>


  )

}

export default Home; 