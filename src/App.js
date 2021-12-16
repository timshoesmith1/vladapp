import gilmartins_main_logo from './images/gilmartins_main_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gilmartins_main_logo} className='main_logo'  alt="logo" />
        <p>
          Welcome to the Gilmartins Resident App
        </p>
        <p>Please Log in</p>
       <input placeholder="USER NAME" className='main_inputs'></input>
       <input placeholder="PASSWORD" className='main_inputs'></input>
       <button   className='login'>LOGIN</button>
      </header>
    </div>
  );
}

export default App;
