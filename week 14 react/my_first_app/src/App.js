import logo from './logo.svg';
import HelloClass from './HelloClass';
import HelloClass from './HelloClass.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import Hello from './Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <HelloClass name='John' text='Welcome Jhonny' mail='gmail@com'/>
          <h2><HelloClass name='Dan' text='Welcome DanDan' mail='gmail@com'/> </h2>
        </p>
      </header>
    </div>
  );
}

export default App;
