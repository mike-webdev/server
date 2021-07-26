import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import NavItem from "../items/NavItem";
import ChangeLanguage from "./ChangeLanguage";

export default function Nav() {
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };

  return (
    <section className="navigationbar">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">CRD</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavItem link="/" page="Home" />

              {user === null && (
                <>
                  <NavItem link="#featured" page="Featured Courses" />
                  <NavItem link="#learnerOutcome" page="Learner Outcomes" />
                  <NavItem link="#reviews" page="Reviews" />
                  <NavItem link="/login" page="Login" />
                  <NavItem link="/register" page="Register" />
                </>
              )}
              {user !== null && (
                <>
                  <NavItem link="/student" page="Dashboard" />
                  <NavItem link="#" page="My Courses" />
                  <NavItem link="#" page="Achievements" />
                  <NavItem link="#" page="Reviews" />
                  <li className="nav-item">
                    <div className="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        My Account
                      </a>

                      <ul
                        className="dropdown-menu text-center"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            {user && user.name}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="notif-count">1</div>Notifications
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            User Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            My Forums
                          </a>
                        </li>
                        <li>
                          <a onClick={logout} className="dropdown-item">
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </>
              )}
              <li>
                <ChangeLanguage/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
