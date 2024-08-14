import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';
import './App.css';
import { Footer } from "react-bootstrap";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({ name: newItem });
    setItems([...items, response.data]);
    setNewItem('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: editingName });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
    setEditingName('');
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD Operations</h1>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          
        />
        <button  onClick={handleAddItem} >
          Add
        </button>
      </div>
      <table className="table">
        <th>
          
        </th>
        <td>
          {items.map((item) => (
            <tr key={item._id}>
              <td className="b">
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="edit-input"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="b">
                {editingItem === item._id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item)}>
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingItem(null);
                        setEditingName('');
                      }}
                      
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        setEditingItem(item._id);
                        setEditingName(item.name);
                      }}
                    
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteItem(item._id)}
                    
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </td>
      </table>


<footer style={{backgroundColor:'grey',display:'flex'}}>
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div style={{backgroundColor:'grey',display:'flex'}}>
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div style={{backgroundColor:'grey',display:'flex',padding:'10px'}}>
      <a href="" className="me-4 text-reset">
       <i className="fa fa-facebook-official" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
      <a href="" className="me-4 text-reset">
       <i className="fa fa-twitter" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-google" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-instagram" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-linkedin" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fa fa-github" aria-hidden="true" style={{padding:'10px'}}></i>
      </a>
    </div>

  </section>


  
  <section className="">
    <div className="container text-center text-md-start mt-5">
  
      <div className="row mt-3" style={{backgroundColor:'grey',display:'flex'}}>

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>



        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
 


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
      
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>



  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>






    </div>
  );
};

export default App;
