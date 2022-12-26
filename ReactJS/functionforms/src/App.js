import logo from './logo.svg';
import './App.css';
// import { User } from './Components/user';
import { Person } from './Components/person';
import { Form1, Form1fromserver } from './Components/Form1';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <Person/> */}
      {/* <Form1/> */}
      <Form1fromserver/>
    </div>
  );
}

export default App;
