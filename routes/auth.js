import express from "express";

const router = express.Router();

//middleware
import { requireSignin } from "../middlewares";


//controllers
import {mike, register, login, logout, currentUser} from '../controllers/auth';


//route
router.post("/mike", mike);
router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/current-user", requireSignin, currentUser);

module.exports = router;
