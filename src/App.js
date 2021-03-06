import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>  */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
// my components 

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  // useEffect(() => { }, []) 
  // const myFunc = () => {}
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h3>Name: {props.name} </h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

// another one
function Counter() {
  const [count, setCount] = useState(30);

  const increaseCount = () => setCount(count + 1); 
  const decreaseCount = () => setCount(count - 1);
  
  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={increaseCount}>Increse</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}


/* 
const products = [
    {name: 'laptop', price: 60000},
    {name: 'mobile', price: 40000},
    {name: 'watch', price: 6000},
    {name: 'shoe', price: 2000},
  ];
*/

/* 
  {
    products.map(product => <Product name={product.name} price={product.price}></Product>)
  }
  <Product name="iPhone 12pro max" price="20000"></Product>
  <Product name="Samsung 12" price="30000"></Product>
  <Product name="shaomi note 55" price="10000"></Product>
*/

/* 
function Product(props) {
  return (
    <div className='product'>
      <h2>Product: { props.name}</h2>
      <h4>Price: { props.price}</h4>
    </div>
  );
} 
*/

export default App;
