const express=require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router=express.Router();



// this is working fare
router.post("/register", registerUser) 
// this is also working fare
router.post("/login",loginUser)
// after generating token it has been passed at postman and get request fetched
// successfully

router.get("/current", validateToken, currentUser)
 
module.exports=router;