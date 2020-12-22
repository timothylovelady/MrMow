import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import {
  faEnvelope,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      loading: false,
      message: {},
      disabled: false,
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  validateData = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;
    // const data = await validateRegistration(email, password, confirmPassword);
    // if(data.errorMessage) {
    //     return this.setState({...this.state, errorMessage: data.errorMessage});
    // }
    // this.setState({...this.state, errorMessage: ''});
    return this.handleSubmit({ username, email, password });
  };

  handleSubmit = async () => {
    // this.setState({ ...this.state, errorMessage: "", loading: true });
    // const { username, email, password } = this.state;
    // validate
    //   .validateRegistration({ username, email, password })
    //   .then((response) => {
    //     console.log(`DATA: ${response}`);
    //     return response;
    //   })
    //   .then((data) => {
    //     if (data.errorMessage) {
    //       return this.setState({
    //         ...this.state,
    //         loading: false,
    //         errorMessage: data.errorMessage,
    //       });
    //     } else {
    //       return request.registerUser(data);
    //     }
    //   })
    //   .then((response) => {
    //     console.log(`RESPONSE: ${response}`);
    //     if (response.errorMessage) {
    //       return this.setState({
    //         ...this.state,
    //         loading: false,
    //         errorMessage: response.errorMessage,
    //       });
    //     }
    //     this.setState({
    //       ...this.state,
    //       loading: false,
    //       errorMessage: "",
    //     });
    //     return this.props.history.push("/Login");
    //   })
    //   .catch((error) => {
    //     return this.setState({
    //       ...this.state,
    //       loading: false,
    //       errorMessage: error.errorMessage,
    //     });
    //   });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="container p-4 my-5 border shadow">
        <div className="container register-wrapper justify-content-center h-100 p-4">
          <div className="card-header bg-white">
            <p className="h4 text-center">Please Register</p>
            <p className="h5 text-center">We do not share your email</p>
            {errorMessage && (
              <div className="container-fluid text-center text-danger">
                {errorMessage}
              </div>
            )}
          </div>
          <div className="card-body container-fluid">
            <div className="form-group">
              <label className="text-white" htmlFor="username">
                Username
              </label>
              <div className="input-group-prepend m-2">
                <FontAwesomeIcon
                  className="custom-icon mt-1 mr-1"
                  icon={faUser}
                />
                &nbsp;
                <input
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  type="text"
                  name="username"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
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
                  placeholder="Email"
                  required
                  name="email"
                  aria-describedby="email"
                  onChange={(e) => this.handleChange(e)}
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
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="input-group-prepend m-2">
                <FontAwesomeIcon
                  className="custom-icon mt-1 mr-1"
                  icon={faUserSecret}
                />
                &nbsp;
                <input
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  onChange={(e) => this.handleChange(e)}
                />
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
              Already a member?
              <NavLink
                className="btn btn-link signup-submit-button"
                to="/login"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
