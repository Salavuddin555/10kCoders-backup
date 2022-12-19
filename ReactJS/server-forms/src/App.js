
// import Form3 from '../../classforms/src/ClassForm1/Form3';
import './App.css';
import Form1Server from './Component/form1-server';
// import Form2Server from './Component/form2-server';
import { Form3Server } from './Component/form3-server';
import { Form4Server } from './Component/form4-server';
import Form5Server from './Component/form5-server';
// import Form2Server from './Component/form2-server';

function App() {
  return (
    <div className="App">
      <Form1Server/>
      {/* <Form2Server/> */}
      <Form3Server/>
      <Form4Server/>
      <Form5Server/>
    </div>
  );
}

export default App;
