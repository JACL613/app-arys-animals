import { login } from "../services/user.services";
import { useState } from "react";
import { setToken } from "../services/adopcion.services";
import { BsKeyFill, BsFillPersonFill } from "react-icons/bs";
export function FormLoginUser({ handelSetUser }) {
  const [nameuser, setNameuser] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handelLoginUser = async (event) => {
    event.preventDefault();
    console.log(remember);

    if (nameuser && password) {
      const user = await login({ nameuser, password });
      if (remember) {
        window.localStorage.setItem("loggedAppUser", JSON.stringify(user.data));
      }

      if (user) {
        setToken(user.data.token);
        handelSetUser(user);
      }
    }
    setNameuser("");
    setPassword("");
    setRemember(false);
  };
  return (
    <div className="container-fluid vh-100 auto-my">
      <div className="container">
        <div className="rounded d-flex justify-content-center">
          <div className="col-md-4 col-sm-12 shadow p-5 bg-light">
            <div className="text-center">
              <h3 className="text-primary">Sign In</h3>
            </div>
            <form onSubmit={handelLoginUser}>
              <div className="p-4">
                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary">
                    <BsFillPersonFill />
                  </span>
                  <input
                    onChange={({ target }) => setNameuser(target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary">
                    <BsKeyFill />
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={({ target }) => setRemember(target.value)}
                    value="true"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Recordarme
                  </label>
                </div>
                <button
                  className="btn btn-primary text-center mt-2"
                  type="submit">
                  Login
                </button>
                {/* <p className="text-center mt-5">
                  Don't have an account?
                  <span className="text-primary">Sign Up</span>
                </p>
                <p className="text-center text-primary">
                  Forgot your password?
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
