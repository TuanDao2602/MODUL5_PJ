import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="login-box">
  <h2>Register</h2>
  <form
    action="<%=request.getContextPath()%>/UserServlet?action=register"
    method="post"
    id="register"
  >
    <div className="user-box">
      <input type="text" name="userName" required="" placeholder=" " />
      <label> User Name </label>
    </div>
    <div className="user-box">
      <input type="password" name="passwood" required="" placeholder="" />
      <label>Password</label>
    </div>
    <div className="user-box">
      <input type="password" name="comfim" required="" placeholder="" />
      <label>Comfirm Password</label>
    </div>
    <div className="user-box">
      <input type="text" name="fullName" required="" placeholder="" />
      <label>Full Name</label>
    </div>
    <a onclick="document.getElementById('register').submit()">
      <span />
      <span />
      <span />
      <span />
      Register
    </a>
    <Link to="/user/Singin"  className="login2">
      <span />
      <span />
      <span />
      <span />
      Login
    </Link>
    <Link to="/user/"
      className="login2"
    >
      <span />
      <span />
      <span />
      <span />
      HOME PAGE
    </Link>
  </form>
</div>

  )
}
