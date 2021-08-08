const mysql = require("mysql");
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});


export const register = async (req, res) => {
  try {
    // console.log(req.body);

    const { name, email, password, confirmpassword } = req.body;

    if (!name) {
      res.status(400).send("Name is required");
    }
    if (!password || password.length < 6) {
      res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }

    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          console.log(error);
        }

        if (results.length > 0) {
          return res.status(400).send("That email is already taken");
        } else if (password !== confirmpassword) {
          return res.status(400).send("Password do not match");
        }

        let hashedPassword = await bcrypt.hash(password, 8);

        db.query(
          "INSERT INTO users SET ?",
          { name: name, email: email, password: hashedPassword },
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              // console.log("registered");
              return res.json({ ok: true });
            }
          }
        );
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(400).send("Error. Try again");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please provide an email and password");
    }

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          res.status(400).send("Email not found");
        } else if (results.length == 0) {
          res.status(400).send("Email not found");
        } else {
          if ((await bcrypt.compare(password, results[0].password)) === false) {
            res.status(400).send("Password is incorrect");
          } else {
            const user = results[0];

            const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN,
            });

            //return user and token to client, exclude hashed password
            user.password = undefined;

            //send token in cookie
            res.cookie("token", token, {
              httpOnly: true,
              // secure: true,//only works on https
            });

            //send user as json response
            res.json(user);
          }
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.status(400).send("Error. Try again");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signed out" });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [req.user._id],
      async (error, results) => {
        const user = results[0];

        //return user and token to client, exclude hashed password
        user.password = undefined;
      }
    );

    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};


export const test = async (req, res) => {
  return res.json({ message: "Success" });
};
