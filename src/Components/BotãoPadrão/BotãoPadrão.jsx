import {StyleBotãoPadrão} from "./Styles";

function BotãoPadrão (props){
    return (
        <div>
            <StyleBotãoPadrão onClick={props.onClick}>
                Redirecionar
            </StyleBotãoPadrão>
        </div>
    )
}
export default BotãoPadrão;