import { Form, Button, Container,Card } from 'react-bootstrap';
const Blocks= () => {
	return(
		<div className="card" style={{width: '500px',height:'100px',paddingLeft:'300px'}}>
  <img src="https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">React</h2>
    <p class="card-text"  style={{fontSize:'30px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button style={{padding:10,backgroundColor:'blue'}}><a href="#" >Go somewhere</a></button>
  </div>
</div>
		);
};

export default Blocks;