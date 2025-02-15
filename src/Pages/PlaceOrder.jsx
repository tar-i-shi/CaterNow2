import React, { useState } from 'react';
import "./Style/PlaceOrder.css";

function PlaceOrder() {
  const [orders, setOrders] = useState([
    { id: 1, item: '', quantity: '', error: false }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (id, field, value) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { 
          ...order, 
          [field]: value,
          error: false 
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const addOrderField = () => {
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    setOrders([...orders, { id: newId, item: '', quantity: '', error: false }]);
  };

  const removeOrderField = (id) => {
    if (orders.length > 1) {
      setOrders(orders.filter(order => order.id !== id));
    }
  };

  const validateOrders = () => {
    let hasErrors = false;
    const validatedOrders = orders.map(order => {
      const itemError = !order.item.trim();
      const quantityError = !order.quantity || order.quantity < 1;
      const error = itemError || quantityError;
      hasErrors = hasErrors || error;
      return { ...order, error };
    });
    setOrders(validatedOrders);
    return !hasErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOrders()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Order submitted:', orders);
      // Reset form after successful submission
      setOrders([{ id: 1, item: '', quantity: '', error: false }]);
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-container">
      <div className="order-box">
        <h2 className="order-title">Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          {orders.map((order) => (
            <div key={order.id} className="form-row">
              <div className="form-group">
                <label htmlFor={`item-${order.id}`}>Food Item</label>
                <input
                  id={`item-${order.id}`}
                  type="text"
                  value={order.item}
                  onChange={(e) => handleChange(order.id, 'item', e.target.value)}
                  placeholder="Enter food item"
                  className={order.error ? 'error' : ''}
                />
                {order.error && !order.item && (
                  <div className="error-message">Please enter a food item</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor={`quantity-${order.id}`}>Quantity</label>
                <input
                  id={`quantity-${order.id}`}
                  type="number"
                  value={order.quantity}
                  onChange={(e) => handleChange(order.id, 'quantity', e.target.value)}
                  placeholder="Enter quantity"
                  min="1"
                  className={order.error ? 'error' : ''}
                />
                {order.error && (!order.quantity || order.quantity < 1) && (
                  <div className="error-message">Please enter a valid quantity</div>
                )}
              </div>
              <button 
                type="button" 
                className="remove-btn"
                onClick={() => removeOrderField(order.id)}
                disabled={orders.length === 1}
                aria-label="Remove item"
              >
                ×
              </button>
            </div>
          ))}
          
          <button 
            type="button" 
            onClick={addOrderField} 
            className="add-btn"
          >
            + Add More Items
          </button>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder;
