import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("Mike");
  const [email, setEmail] = useState("mike@gmail.com");
  const [password, setPassword] = useState("1234565");
  const [confirmpassword, setConfirmPassword] = useState("1234565");

  const { state } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.table({ name, email, password });
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
        confirmpassword,
      });
      toast.success("Registration successful. Please login.");
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
            <h1>Register</h1>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text h-full" id="name">
                    <i className="fas fa-user-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  aria-label="name"
                  aria-describedby="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  aria-label="emailaddress"
                  aria-describedby="emailicon"
                  id="email"
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
                  aria-label="password"
                  aria-describedby="passwordicon"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  placeholder="confirm password"
                  aria-label="confirmpassword"
                  aria-describedby="passwordicon"
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <small>
                Already have an account?&nbsp;
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </small>
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <small>Register with:</small>
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
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
