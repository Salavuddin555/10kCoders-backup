import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './Components/Auth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <h1>Hello</h1>
      </AuthProvider>
    </div>
  );
}

export default App;
