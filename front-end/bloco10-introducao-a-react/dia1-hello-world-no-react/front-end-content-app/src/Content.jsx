import React from 'react';

const contents = [
  {
    content: 'High Order Functions',
    block: 8,
    status: 'Aprendido'
  },
  {
    content: 'Composicao de Componentes',
    block: 11,
    status: 'Aprendendo',
  },
  {
    content: 'Composicao de Estados',
    block: 12,
    status: 'Aprenderei'
  },
  {
    content: 'Redux',
    block: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
    <div className="content">
      {contents.map((el) => (
        <div key={el.content} className="card">
          <h4>{`O conteúdo é: ${el.content}`}</h4>
          <p>{`block: ${el.block}`}</p>
          <p>{`status: ${el.block}`}</p>
        </div>
      ))}
    </div>
   );
  }
}

export default Content;