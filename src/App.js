import './App.css';
import Ballot from './Components/Ballot/Ballot';
import Header from './Components/Header/Header';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <div className="App mx-4 md:mx-auto md:max-w-screen-lg flex flex-col items-center ">
     <Header/>
      <Ballot />
    </div>
  );
}

export default App;
