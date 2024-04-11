import { useState } from 'react'

const mario = {
  cliente : 'Mario',
  idade: 31,
  compras : [
    {nome:'Notebook', preco:'R$ 3000'},
    {nome:'Geladeira', preco:'R$ 3500'},
    {nome:'Smartphone', preco:'R$ 4000'},
    {nome:'Baixo', preco:'R$ 7000'}
  ],
  ativo: false,
}

const luana = {
  cliente : 'Luana',
  idade: 27,
  compras : [
    {nome:'Notebook', preco:'R$ 5000'},
    {nome:'Sofá', preco:'R$ 2500'},
    {nome:'Smartphone', preco:'R$ 7000'},
    {nome:'Violão', preco:'R$ 2000'}
  ],
  ativo: true,
}

function App() {
  const dados = luana;
  const total = dados.compras
  .map(item => Number(item.preco.replace('R$','')))
  .reduce((a,b) => a + b);
  console.log(total)
  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" id='nome'/>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação:
         <span style={{color: dados.ativo ? 'green':'red'}}> {dados.ativo ? 'Ativo':'Inativo'}</span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 16500 && <p>Você está gastando muito</p>}
    </>
  )
}

export default App
