function App() {
  let Valor1 = Math.round(Math.random() *200);
  let Valor2 = Math.round(Math.random() *200);
  
  
  
  return (
    <div>
      <p>A Soma entre 50 e 10 é: {50+10}</p>
      <p>A Soma entre {Valor1} e {Valor2} é: {Valor1 + Valor2}</p>
      <p>O resultado acima é {(Valor1 + Valor2) %2 === 0 ? "Par" : "Impar"}</p>
    </div>
  );
}

export default App;
