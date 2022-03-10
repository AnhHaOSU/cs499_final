import logo from './logo.svg';
import './App.css';
import ScatterPlot from './ScatterPlot'

function App() {
  return (
    <div className="App">
      <h2> Median Income vs Gender Ratio by Major </h2>
      <div className='row'>
        <ScatterPlot width={500} height={500} />
      </div>
    </div>
  );
}

export default App;
