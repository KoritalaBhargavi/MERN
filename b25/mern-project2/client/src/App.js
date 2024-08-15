import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', age: '', company: '', address: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [editingFields, setEditingFields] = useState({ name: '', age: '', company: '', address: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem(newItem);
    setItems([...items, response.data]);
    setNewItem({ name: '', age: '', company: '', address: '' });
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, editingFields);
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
    setEditingFields({ name: '', age: '', company: '', address: '' });
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
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          value={newItem.age}
          onChange={(e) => setNewItem({ ...newItem, age: e.target.value })}
          placeholder="Age"
        />
        <input
          type="text"
          value={newItem.company}
          onChange={(e) => setNewItem({ ...newItem, company: e.target.value })}
          placeholder="Company"
        />
        <input
          type="text"
          value={newItem.address}
          onChange={(e) => setNewItem({ ...newItem, address: e.target.value })}
          placeholder="Address"
        />
        <button onClick={handleAddItem}>
          Add
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Company</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={editingFields.name}
                    onChange={(e) => setEditingFields({ ...editingFields, name: e.target.value })}
                    className="edit-input"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={editingFields.age}
                    onChange={(e) => setEditingFields({ ...editingFields, age: e.target.value })}
                    className="edit-input"
                  />
                ) : (
                  item.age
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={editingFields.company}
                    onChange={(e) => setEditingFields({ ...editingFields, company: e.target.value })}
                    className="edit-input"
                  />
                ) : (
                  item.company
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <input
                    type="text"
                    value={editingFields.address}
                    onChange={(e) => setEditingFields({ ...editingFields, address: e.target.value })}
                    className="edit-input"
                  />
                ) : (
                  item.address
                )}
              </td>
              <td>
                {editingItem === item._id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item)}>
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingItem(null);
                        setEditingFields({ name: '', age: '', company: '', address: '' });
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
                        setEditingFields({ name: item.name, age: item.age, company: item.company, address: item.address });
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDeleteItem(item._id)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer style={{ backgroundColor: 'grey', display: 'flex' }}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div style={{ backgroundColor: 'grey', display: 'flex' }}>
            <span>Get connected with us on social networks:</span>
          </div>
          <div style={{ backgroundColor: 'grey', display: 'flex', padding: '10px' }}>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-facebook-official" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-twitter" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-google" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-instagram" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-linkedin" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fa fa-github" aria-hidden="true" style={{ padding: '10px' }}></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3" style={{ backgroundColor: 'grey', display: 'flex' }}>
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
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
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
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase
