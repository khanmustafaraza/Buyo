const Register = require("../models/register-model");

const addAddress = async (req, res, next) => {
  try {
    const {fullName,
    mobile,
    email,
    houseNo,
    street,
    city,
    state,
    pincode } = req.body;
    
    const id = req.user._id
    // console.log(id)
   const user = await Register.findById(id);

if (!user) {
  return res.status(404).json({ success: false, message: "User not found" });
}

const isUpdate = await Register.updateOne(
  { _id: user._id },
  {
    $push: {
      addresses: req.body
    }
  }
);

return res.json({
  success: true,
  message: "Address added successfully",
  data: isUpdate
});

  
  } catch (error) {
    next({ message: "Error while creating account", statusCode: 500 });
  }
};
const deleteAddress = async (req, res) => {
  try {
    const { index } = req.body; // index sent from frontend
    const userId = req.user._id; // user id from auth middleware

    const user = await Register.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (index < 0 || index >= user.addresses.length) {
      return res.status(400).json({ success: false, message: "Invalid index" });
    }

    // Remove the address at given index
    user.addresses.splice(index, 1);

    // Save changes
    await user.save();

    res.json({ success: true, message: "Address deleted successfully", addresses: user.addresses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};




module.exports ={ addAddress,deleteAddress}