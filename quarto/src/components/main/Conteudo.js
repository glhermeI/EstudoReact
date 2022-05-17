
export default function Conteudo(props){
    //Vamos iniciar o projeto lendo a url com os dados da api
    //neste caso temos os produtos para ler montar a tela de conteudo de
    
    return(
        <div className="conteudo">
            <h2>Produtos</h2>
            <div className="itens">
            {
                props.dados.map((itens,index) =>(
                    <div key={index}>
                      <h3>{itens.nome}</h3>
                      <p>{itens.nome}</p>
                      <p>{itens.categoria}</p>
                      <p>R$ {itens.preco}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}