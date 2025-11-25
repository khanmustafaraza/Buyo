const mongoose = require("mongoose");
const Cart = require("../models/cart-model");

const createCart = async (req, res) => {
  try {
    const { pid, quantity, price } = req.body;
    console.log(req.body);

    const id = req.user._id; // FIX 1

    if (!pid || !quantity || !price) {
      return res.status(404).json({
        success: false,
        msg: "All Filed Are Required",
      });
    }
    const isMatched = {
      $and: [
        {
          userId: id,
        },
        {
          pid: pid,
        },
      ],
    };
    const exsistCart = await Cart.findOne(isMatched);
    console.log(exsistCart);
    if (exsistCart) {
      // return res.status(404).json({
      //   success: false,
      //   msg: "Items Alredy Exisit",
      // });

      await Cart.updateOne(
        {
          _id: exsistCart._id,
        },
        {
          quantity: quantity,
        }
      );
      return res.status(200).json({
        success: true,
        msg: "Qunatity Updated successfully",
      });
    }

    const cart = new Cart({
      userId: id,
      pid: pid,
      quantity: quantity, // FIX 2
      price: Number(quantity) * Number(price),
    });

    const cartSaved = await cart.save();
    // console.log(cartSaved);

    if (cartSaved) {
      return res.status(201).json({
        success: true,
        msg: "Item Added in your cart",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message }); // FIX 3
  }
};

const getAllCartItems = async (req, res) => {
  const id = req.user._id;
  console.log("f");
  console.log("id", id);
  const cartItems = await Cart.aggregate([
    {
      $match: { userId: new mongoose.Types.ObjectId(id) },
    },

    {
      $lookup: {
        from: "products",
        localField: "pid",
        foreignField: "_id",
        as: "product",
      },
    },

    {
      $lookup: {
        from: "registers",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },

    { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },

    { $unwind: { path: "$product", preserveNullAndEmptyArrays: true } },
  ]);

  // console.log(cartItems);
  if (cartItems) {
    return res.status(200).json({
      success: true,
      msg: "Items Fectched Succesfully",
      carts: cartItems,
    });
  }
};

module.exports = { createCart, getAllCartItems };
