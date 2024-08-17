import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruits from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruits/>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


/*const myElement = <h1>React is {15+5} times better with Jsx</h1>
const container = document.getElementById('root')
const root = reactDOM.createRoot(container);

root.render(myElement);*/
/*
const myElement = (
  <ul>
  <li>apples</li>
  <li>bananas</li>
  <li>cherries</li>
  </ul>
);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/

/*const myElement = <h1 className="myclass">welcome to salem cirt</h1>

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);*/

/*const x=50;

const myElement = <h1 className="myclass">{(x)<100?"google":"yahoo"}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement); */


/*const x=50;
let text="google";
if(x<100){
  text="yahoo";
}

const myElement = <h1 className="myclass">{text}</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

//const root=ReactDOM.createRoot(document.getElementById('root'))*/

/*function Mango(){
  return <h1>Welcome to mango city</h1>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Mango / >);*/



/*const MyElement = (
  <table id="customers">
  <tr>
  <th>Name</th>
  <th>Price</th>
  <th>Address</th>
  </tr>
  <tr id="pink">
  <td>Apple</td>
    <td>150</td>
  <td>shimla</td>
  </tr>
  <tr id="yellow">
  <td>mango</td>
    <td>180</td>
  <td>salem</td>
  </tr>
  <tr id="red">
  <td>pinapple</td>
  <td>150</td>
  <td>ooty</td>
  </tr>

  </table>
  );
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(MyElement);*/