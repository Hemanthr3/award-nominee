import './App.css';
import Ballot from './Components/Ballot/Ballot';
import Header from './Components/Header/Header';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App bg-slate-600">
     <Header/>

     <div className="text-red-400 text-8xl">Hello</div>
      <Ballot />
    </div>
  );
}

export default App;
