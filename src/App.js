//import logo from './logo.svg';
import './App.css';
import {useState, useTransition} from 'react';

import NAMES from './components/data.json';

//import {PostForm} from './components/PostForm';

function App() {
  const [filter, setFilter] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    const val = e.target.value;
    
    setInputValue(val);
    startTransition(() => {
      setFilter(val);
    });
  }

  const filteredNames = NAMES.filter((name) => {
    return name.first_name.includes(filter) || name.last_name.includes(filter);
  })
  
  return (
    <div className="App">
      <div>
        <input type="text" value={inputValue} onChange={changeHandler} placeholder="filter by first_name"></input>
      </div>
      {isPending && <p>Updating List...</p>}
      {filteredNames.map((item) =>  {
          return <p key={item.id}>{`${item.first_name}, ${item.last_name}`}</p>
        })}

    </div>
  );
}

export default App;
