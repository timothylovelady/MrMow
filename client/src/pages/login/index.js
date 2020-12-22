// Packages
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faEnvelope, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// helpers
// import validate from "../utils/validate";
// import request from "../request";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberMe: "",
      errorMessage: "",
      loading: false,
      disabled: false,
    };
  }
  componentDidMount() {
    this.checkForSavedEmail();
  }
  // history = useHistory();
  componentWillUnmount() {
    this.setState({
      email: "",
      password: "",
      rememberMe: "",
      errorMessage: "",
      loading: false,
      submitting: false,
      cleanData: {},
    });
  }
  checkForSavedEmail = () => {
    return localStorage.getItem("email")
      ? this.setState({ ...this.state, email: localStorage.getItem("email") })
      : null;
  };
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    // const { email, password } = this.state;
    // console.log(`Email: ${email} \n Password: ${password}`);
    // this.setState({ ...this.state, errorMessage: "", loading: true });
    // validate
    //   .validateLogin({ email, password })
    //   .then((data) => {
    //     return request.userLogin(data);
    //   })
    //   .then((user) => {
    //     if (user.errorMessage) {
    //       return this.setState({
    //         ...this.state,
    //         loading: false,
    //         errorMessage: user.errorMessage,
    //       });
    //     }
    //     console.log(`USER: ${user}`);
    //     // context.signIn(user);
    //     // user.token && localStorage.setItem('token', user.token)
    //     // console.log(`USER LOGGED IN: ${JSON.stringify(user, null, 2)}`);
    //     // Router.push('/');
    //     // return;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return;
    //   });
  };
  render() {
    const { errorMessage } = this.state;

    return (
      <div className="container p-4 my-5 border shadow">
        <div className="container login-wrapper justify-content-center h-100 p-4">
          <div className="card-header bg-white">
            <p className="h4 text-center">Please sign in</p>
            <p className="h5 text-center">
              to access members area or to leave a comment
            </p>
            {errorMessage && (
              <div className="container-fluid text-center text-danger">
                {errorMessage}
              </div>
            )}
          </div>
          <div className="card-body container-fluid">
            <div className="form-group">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <div className="input-group-prepend m-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="custom-icon mt-1 mr-1"
                />
                &nbsp;
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  aria-describedby="email"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="password">
                Password
              </label>
              <div className="input-group-prepend m-2">
                <FontAwesomeIcon
                  className="custom-icon mt-1 mr-1"
                  icon={faUserSecret}
                />
                &nbsp;
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="row remember">
                <input
                  id="rememberMe"
                  type="checkbox"
                  value="rememberMe"
                  name="rememberMe"
                  onChange={(e) => this.handleChange(e)}
                />
                <span className="ml-2 text-white">Remember Me?</span>
              </div>
              <div className="p-2 mb-4">
                <button
                  type="submit"
                  value="submit"
                  disabled={this.state.disabled}
                  className="btn float-right register_btn bg-white border shadow"
                  onClick={() => {
                    this.handleSubmit();
                  }}
                >
                  Submit
                </button>
                <a
                  className="btn btn-danger float-right mr-4 text-white"
                  href="http://localhost:4000/public/auth/google"
                >
                  Sign in with Google{" "}
                  <FontAwesomeIcon icon={faGoogle} className="text-light" />
                </a>
              </div>
            </div>
          </div>
          <div className="links container-fluid card-footer bg-white text-center">
            <p className="h5">
              Don't have an account yet?
              <NavLink
                className="btn btn-link signup-submit-button"
                to="/register"
              >
                Register Here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
