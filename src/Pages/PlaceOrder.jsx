import React, { useState } from 'react';
import "./Style/PlaceOrder.css";

function PlaceOrder() {
  const [orders, setOrders] = useState([
    { id: 1, item: '', quantity: '' }
  ]);

  const handleChange = (id, field, value) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, [field]: value };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const addOrderField = () => {
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    setOrders([...orders, { id: newId, item: '', quantity: '' }]);
  };

  const removeOrderField = (id) => {
    if (orders.length > 1) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if all fields are filled
    const isValid = orders.every(order => order.item && order.quantity);
    if (isValid) {
      console.log('Order submitted:', orders);
      // Add your API call here
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="order-container">
      <div className="order-box">
        <h2>Place Order</h2>
        <form onSubmit={handleSubmit}>
          {orders.map((order) => (
            <div className="form-row" key={order.id}>
              <div className="form-group">
                <label>Food Item</label>
                <input
                  type="text"
                  value={order.item}
                  onChange={(e) => handleChange(order.id, 'item', e.target.value)}
                  placeholder="Enter food item"
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  value={order.quantity}
                  onChange={(e) => handleChange(order.id, 'quantity', e.target.value)}
                  placeholder="Enter quantity"
                  min="1"
                  required
                />
              </div>
              <button 
                type="button" 
                className="remove-btn"
                onClick={() => removeOrderField(order.id)}
                disabled={orders.length === 1}
              >
                ×
              </button>
            </div>
          ))}
          
          <button type="button" onClick={addOrderField} className="add-btn">
            + Add More Items
          </button>
          <button type="submit" className="submit-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;