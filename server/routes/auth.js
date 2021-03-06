import express from "express";

const router = express.Router();

//middleware
import { requireSignin } from "../middlewares";


//controllers
import {register, login, logout, currentUser, test} from '../controllers/auth';


//route
router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/current-user", requireSignin, currentUser);

router.get("/test", test);

module.exports = router;
