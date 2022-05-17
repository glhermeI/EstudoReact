import Conteudo from "./Conteudo";
import Mensagens from "./Mensagens";
import {useState,useEffect} from "react";

export default function Container(){
    //Vamos usar o comando useState para iniciar o estado de dados 
    //dos produtos. Depois usaremos o comando useEffect para carregar os produtos que vem da api.
    //O comando useEffect é um comando de laço, portanto é necessario fazer ele parar o laço quando termina de carregar os dados.
    //Isso é feito usando um colchetes ao final das instruções. Para obter os dados iremops utilizar o comando fetch dentro do useEffect.

    const [produtos,setProdutos] = useState ([
        {
            id:"",
            nome:"",
            categoria:"",
            preco:"",
            msg:[],
        },

    ]);
    useEffect(()=>{
        fetch("http://10.26.44.32:5500/")
        .then((response)=>response.json())
        .then((dados)=>{
            setProdutos(dados.output);
    })
    },[])





    return(
        <div className="container">
            <Mensagens dados={produtos.msg}/>
            <Conteudo dados={produtos}/>
        </div>
    )
}