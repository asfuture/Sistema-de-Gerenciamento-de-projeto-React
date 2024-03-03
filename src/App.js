import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMayName from './components/sayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Luana"
  return (
    <div className="App">
        <SayMayName  nome="Alex Ferreira"/>
        <SayMayName  nome="João"/>
        <SayMayName  nome={nome}/>
        <Pessoa 
        nome="Alex Ferreira" 
        idade="34" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App;
