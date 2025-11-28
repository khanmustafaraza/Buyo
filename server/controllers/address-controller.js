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

module.exports ={ addAddress}