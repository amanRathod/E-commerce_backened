<<<<<<< HEAD
const { validationResult } = require('express-validator');
=======
>>>>>>> e5d88a31e72f627f457e5674454730a6236524f5
const Order = require('../../../../model/order/order');

exports.getOneOrder = async(req, res, next) => {
  try {

<<<<<<< HEAD
    const error = validationResult(req);
    if (!error) {
      return res.status(422).json({
        success: false,
        message: error.array()[0].msg,
      });
    }
    const orderId = req.params.order_id;
    const order = await Order.findById(orderId);
=======
    const orderId = req.params.orderId;
    const order = await Order.findById({ _id: orderId});
>>>>>>> e5d88a31e72f627f457e5674454730a6236524f5
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
    });

  } catch (err) {
    next(err);
  }
};

exports.getAllOrder = async(req, res, next) => {
  try {

    const orders = await Order.find();
    return res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (err) {
    next(err);
  }
};
