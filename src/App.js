import './index.scss';
import React from 'react';


function App() {
  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const onClickPlus = () =>
  {
    setCount(count+1);
  }

  const onClickMinus = () =>
  {
    if (count <= 0)
    {
      setCount(0);
    }
    else
    {
      setCount(count-1);
    }
  }

  const onClickRefresh = () =>
  {
    setCount(0);
  }
 
  return (
    <div className="App">
      <div className = "DefaultCounter">
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
        <button onClick={onClickRefresh} className="refresh">Обновить</button>
        <button onClick={onClickMinus} className="minus">- Минус</button>
      </div>
    </div>
  );
}

export default App;

