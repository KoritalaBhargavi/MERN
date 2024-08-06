import img from './logo.svg';
import video from './video.mp4';
import audio from './audio.wav';


import './App.css';

/*function App() {
  return (
    <div className="App">
      <h1>MongoDb</h1>
    </div>
  );
}

export default App;*/

import React, {Component} from 'react';
class Fruits extends React.Component {
  render(){
    return (
      <div class="container">
        <Apple/>
        <Banana/>
        <Pine/>
        <Grape/>
        </div>
    );
  }
}
class Apple extends React.Component{
  render(){
    return(
      <div>
      <img src={img} width="200px" height="100%"/>
      </div>
    );
  }
}

class Banana extends React.Component{
  render(){
    return(
      <div>
        <video src={video} controls width="200px"/>
      </div>
    );
  }
}

class Pine extends React.Component{
  render(){
    return(
      <div>
        <audio src={audio} controls width="100%"/>
      </div>
    );
  }
}

class Grape extends React.Component{
  render(){
    return(
      <div>
        <form>
        <h1>Login</h1>
        <label for="email" id="email">Email:</label>
        <input type="email" name="email" size="30" required /><br/>
        <label for="passid" id="passid">Password:</label>
        <input type="password" name="passid" size="12" required /><br/>
        <input type="submit" name="submit" value="Login" />
        </form>
      </div>
    );
  }
}
export default Fruits;