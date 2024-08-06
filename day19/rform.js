import './rform.css';


import React, {Component} from 'react';
class Fruits extends React.Component {
  render(){
    return (
      <div className = "container">
        <Apple/>
        <Banana/>
        <Pine/>
        <Grape/>
        </div>
    );
  }
}
class Apple extends React.Component{
   showPage = (page) => {
    document.getElementById('login').style.display = page === 'login' ? 'block' : 'none';
    document.getElementById('registration').style.display = page === 'registration' ? 'block' : 'none';
    document.getElementById('pwdrst').style.display = page === 'pwdrst' ? 'block' : 'none';
  }
  render(){
    return(
      <div id="login" style={{display: 'block'}}>
    <form name="login" >
        <h1>Login</h1>
        <ul>
            <li><label htmlFor="email" id="email">Email:</label></li>
            <li><input type="email" name="email" size="30" required /></li>
            <li><label htmlFor="passid" id="passid">Password:</label></li>
            <li><input type="password" name="passid" size="12" required /></li>
            <li><input type="submit" name="submit" value="Login" /></li>
        </ul>
         <p><a href="#" onClick={() => this.showPage('registration')}>Don't have an account?</a></p>
          <p><a href="#" onClick={() => this.showPage('pwdrst')}>Forgot password?</a></p>
    
    </form>
</div>
    );
  }
}

class Banana extends React.Component{
   showPage = (page) => {
    document.getElementById('login').style.display = page === 'login' ? 'block' : 'none';
    document.getElementById('registration').style.display = page === 'registration' ? 'block' : 'none';
    document.getElementById('pwdrst').style.display = page === 'pwdrst' ? 'block' : 'none';
  }
  render(){
    return(
      <div id="registration" style={{display: 'none'}}>
    <form name="registration" >
        <h1>Registration</h1>
        <ul>
            <li><label htmlFor="email">Email:</label></li>
            <li><input type="email" name="email" size="30" required /></li>
            <li><label htmlFor="passid">Password:</label></li>
            <li><input type="password" name="passid" size="12" required /></li>
            <li><label htmlFor="country">Country:</label></li>
            <li><select name="country" required>
                <option selected value="Default" defaultValue>(Please select a country)</option>
                <option value="1">Australia</option>
                <option value="2">Canada</option>
                <option value="3">India</option>
                <option value="4">Russia</option>
                <option value="5">USA</option>
            </select></li>
            <li><label>Gender:</label></li>
            <li><input type="radio" name="gender" value="Male" defaultChecked/><span>Male</span></li>
            <li><input type="radio" name="gender" value="Female" /><span>Female</span></li>
            <li><label>Do You Have Passport?</label></li>
            <li><input type="radio" name="passport" value="Yes" defaultChecked/><span>Yes</span></li>
            <li><input type="radio" name="passport" value="No" /><span>No</span></li>
            <li><input type="submit" name="register" value="Register" /></li>
        </ul>
        <p><a href="#" onClick={() => this.showPage('login')}>Already have an account?</a></p>
    </form>
</div>
    );
  }
}

class Pine extends React.Component{
   showPage = (page) => {
    document.getElementById('login').style.display = page === 'login' ? 'block' : 'none';
    document.getElementById('registration').style.display = page === 'registration' ? 'block' : 'none';
    document.getElementById('pwdrst').style.display = page === 'pwdrst' ? 'block' : 'none';
  }
  render(){
    return(
      <div id="pwdrst" style={{display: 'none'}}>
    <form name="pwdrst" >
        <h1>Password Reset</h1>
        <ul>
            <li><label htmlFor="email">Email:</label></li>
            <li><input type="email" name="email" size="30" required /></li>
            <li><label htmlFor="passid">New Password:</label></li>
            <li><input type="password" name="passid" size="12" required /></li>
            <li><label htmlFor="cpassid">Confirm Password:</label></li>
            <li><input type="password" name="cpassid" size="12" required /></li>
            <li><input type="submit" name="submit" value="Reset" /></li>
        </ul>
        <p><a href="#" onClick={() => this.showPage('login')}>Want to login?</a></p>
    </form>
</div>

    );
  }
}

class Grape extends React.Component{
   showPage = (page) => {
    document.getElementById('login').style.display = page === 'login' ? 'block' : 'none';
    document.getElementById('registration').style.display = page === 'registration' ? 'block' : 'none';
    document.getElementById('pwdrst').style.display = page === 'pwdrst' ? 'block' : 'none';
  }
    render() {
    return (
      <div id="t" style={{ display: 'none' }}>
        <div className="row">
          <div className="col-md-3" style={{ float: 'right', paddingRight: '20px' }}>
            <button onClick={() => this.showPage('login')}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
          </div>
          <div className="col-md-3" style={{ float: 'right', paddingRight: '20px' }}>
            <div id="timer">start</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Fruits;