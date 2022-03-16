import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'laptop', price: 60000},
    {name: 'mobile', price: 40000},
    {name: 'watch', price: 6000},
    {name: 'shoe', price: 2000},
  ];
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="iPhone 12pro max" price="20000"></Product>
      <Product name="Samsung 12" price="30000"></Product>
      <Product name="shaomi note 55" price="10000"></Product> */}
    </div>
  );
}

// my components 
function Product(props) {
  return (
    <div className='product'>
      <h2>Product: { props.name}</h2>
      <h4>Price: { props.price}</h4>
    </div>
  );
}

export default App;
