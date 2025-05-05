import "./App.css"
import {Button} from "antd";
import {DownloadOutlined} from "@ant-design/icons"
import { DivTest2 } from "./Style";

function App() {
  
  return (
      <div>   
        <div className="div-test">
        <button> botão 1 </button>
        <button> botão 2 </button>
        <button> botão 3 </button>
        </div>
        <input>
        </input>
        <div className="div-botão">
        <button
        className="botão-teste"
        onCliclk={() => alert=("Botão apertado com sucesso!")}
        >
          Botão teste
          </button>
        </div>
          <div>
          <Button type="primary" size="large" shape="round" icon={<DownloadOutlined />}className= "botão-antd">
          Baixar arquivo
          </Button>
          </div>
          <DivTest2>
            OLÁ, ESSE É O STYLED COMPONENTS 
          </DivTest2>
          </div>    
  )
}

export default App
