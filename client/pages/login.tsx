import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state
  const { state, dispatch } = useContext(Context);

  const { user } = state;

  //router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      //   console.log("LOGIN RESPONSE", data)
      dispatch({
        type: "LOGIN",
        payload: data,
      });

      //save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));

      //redirect
      router.push("/");

      toast.success("Logged In");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="box p-4 mt-4">
            <h1>Login</h1>
            <form className="mb-4 mt-4" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="emailicon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>

                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                  id="email"
                  aria-label="emailaddress"
                  aria-describedby="emailicon"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="passwordicon">
                    <i className="fas fa-unlock-alt"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small>
                <a href="#">Forgot password?</a>
              </small>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <small>Login with:</small>
            <div className="row">
              <div className="col-sm-6">
                <button type="submit" className="btn fb mb-2 w-100 text-light">
                  <i className="fab fa-facebook"></i>&emsp;Facebook
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-dark mb-2 w-100 text-light"
                >
                  <i className="fab fa-apple"></i>&emsp;Apple
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn google mb-2 w-100 text-light"
                >
                  <i className="fab fa-google"></i>&emsp;Google
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  type="submit"
                  className="btn btn-success w-100 text-light"
                >
                  <i className="fas fa-university"></i>&emsp;Naver
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-lg"></div>
      </div>
    </div>
  );
}
