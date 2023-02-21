import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <body >
       
   
    <div className="login-box">
  <h2>Login</h2>
  <form
    // action="<%=request.getContextPath()%>/UserServlet?action=login"
    // method="post"
    // id="loginForm"
  >
    <div className="user-box">
      <input type="text" name="userName" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="password" required="" />
      <label>Password</label>
    </div>
    {/* <p style={{ color: "red" }}>
      <c:if test="${errorLogin!=null}">
        ${"{"}errorLogin{"}"}
      </c:if>
    </p> */}
    <a onclick="document.getElementById('loginForm').submit()">
      <span />
      <span />
      <span />
      <span />
      Login
    </a>
    <Link to="/user/register"
    >
      <span />
      <span />
      <span />
      <span />
      Register
    </Link>
    <Link to="/user/"
    >
      <span />
      <span />
      <span />
      <span />
      HOME PAGE
    </Link>
  </form>
</div>
</body>
  )
}
