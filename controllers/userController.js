const {User} = require('../models');

const getAllUsers = async (req, res,) =>{
const users = await User.findAll();
return res.status(200).json({users});
}


module.exports ={getAllUsers}