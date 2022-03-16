import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  );
}

// my components 
function Product() {
  return (
    <div className='product'>
      <h2>Product: </h2>
      <h4>Price: </h4>
    </div>
  );
}

export default App;
