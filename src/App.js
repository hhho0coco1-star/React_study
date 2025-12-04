import logo from './logo.svg';
import './App.css';
import Basic01 from './components/Basic01';
import State01 from './components/State01';
import State02 from './components/State02';
import Export01 from './components/Export01';
import Quiz01 from './quiz/Quiz01';
import Quiz03 from './quiz/Quiz03';
import NewsBlog from './newsBlog/NewsBlog';

function App() {

    // return <Basic01 />
    // return <State01/>;
    // return <State02/>;
    // return <Export01/>;
    // return <Quiz01 />;
    // return <Quiz03 />;
    return <NewsBlog />;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
