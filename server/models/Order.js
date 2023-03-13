const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  status: {
    type: String,
    default: 'submitted'
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
