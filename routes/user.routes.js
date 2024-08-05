const { Router } = require("express");
const { getuser, postuser, updateuser, deleteuser } = require("../controller/user.controller");


const userRouter=Router()

userRouter.get("/",getuser)
userRouter.post("/",postuser)
userRouter.patch("/:id",updateuser)
userRouter.delete("/:id",deleteuser)

module.exports= userRouter