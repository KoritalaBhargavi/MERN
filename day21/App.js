import React, { useState } from 'react'
import './App.css'

class App {
  render(){

  return (
    <>
      <form name="login" onSumit={formvalidation}>
        <h1>Login</h1>
        <ul style={{listStyleType:'none'}}>
            <li><label for="days" id="days">Enter Days:</label></li>
            <li><input type="number" name="days" size="30" required/></li>
            <li><label for="calls" id="calls">Enter Calls:</label></li>
            <li><input type="number" name="calls" size="12" required /></li>
            <li><label for="msg" id="msg">Enter msgs:</label></li>
            <li><input type="number" name="msg" size="12" required /></li>
            <li><label for="data" id="data">Enter data:</label></li>
            <li><input type="number" name="data" size="12" required /></li>
            <li><input type="submit" name="submit" value="Login" /></li>
        </ul>
    </form>
    </>
  );
}
const formvalidation = (event) => {
    event.preventDefault();

    const days = parseInt(event.target.days.value);
    const calls = parseInt(event.target.calls.value);
    const msg = parseInt(event.target.msg.value);
    const data = parseFloat(event.target.data.value);
  const rc = 3000 - calls;
    const rm = 300 - msg;
    const rd = 2.0 - data;
  const r=84-days;
    if (days > 84) {
      alert("your plan expired,please recharge");
      return;
    }
  else {
    alert(" $(r) days left " );
  }

    if (calls > 3000){
      alert('Your calls exceeded the limit');
    }
  else {
    alert("yet to calls $(rc)");
  }
     if(msg > 300 ){
      alert('Your sms exceeded');
     }
  else{
    alert("yet to messages $(rm)");
  }
     if(data > 2){
      alert('your data limit exceeded')
     }
  else {
    alert("yet to data usage $(rd)");
  }
  };
}

export default App;




