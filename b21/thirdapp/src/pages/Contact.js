import { Form, Button, Container,Card,Map} from 'react-bootstrap';


const Contact= () => {
	return (
		<div className="container" style={{display: 'flex', gridTemplateColumns: '1fr 1fr',paddingLeft:'20px'}}>
  <div className="row">
    <div className="col-md-4"  style={{float:'left'}}>
      <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61249.442387994!2d80.3579253539762!3d16.369369498509695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b1f4c4f0ca5%3A0x3512417a63906027!2sLam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1723102536232!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div className="col-md-4" style={{float:'left',padding:'125px',backgroundColor:'skyblue'}}>
      <form>
  <div class="mb-3">
  <h1>Login</h1>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div className="form-text">We will never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  </div></div>


		);

};

export default Contact


