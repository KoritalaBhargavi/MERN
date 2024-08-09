import React from 'react';
import './App.css';

function App() {
  const Formvalidation = (event) => {
    event.preventDefault();

    const days = event.target.days.value;
    const calls = event.target.calls.value;
    const msg = event.target.msg.value;
    const data = event.target.data.value;

    const rc = 3000 - calls;
    const rm = 300 - msg;
    const rd = 2.0 - data;
    const r = 84 - days;

    if (days > 84) {
      alert("Your plan has expired, please recharge.");
      return;
    } else {
      alert(`${r} days left.`);
    }

    if (calls > 3000) {
      alert('Your calls exceeded the limit.');
    } else {
      alert(`Yet to calls: ${rc}`);
    }

    if (msg > 300) {
      alert('Your SMS exceeded the limit.');
    } else {
      alert(`Yet to messages: ${rm}`);
    }

    if (data > 2.0) {
      alert('Your data limit exceeded.');
    } else {
      alert(`Yet to data usage: ${rd}`);
    }
  };

  return (
    <>
      <form name="login" onSubmit={Formvalidation}>
        <h1>Login</h1>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <label htmlFor="days">Enter Days:</label>
          </li>
          <li>
            <input type="number" name="days" size="30" required />
          </li>
          <li>
            <label htmlFor="calls">Enter Calls:</label>
          </li>
          <li>
            <input type="number" name="calls" size="12" required />
          </li>
          <li>
            <label htmlFor="msg">Enter Messages:</label>
          </li>
          <li>
            <input type="number" name="msg" size="12" required />
          </li>
          <li>
            <label htmlFor="data">Enter Data:</label>
          </li>
          <li>
            <input type="double" name="data" size="12" required />
          </li>
          <li>
            <input type="submit" name="submit" value="Login" />
          </li>
        </ul>
      </form>
    </>
  );
}

export default App;
