import './button.css'
import './containers.css';
import './header.css';
import './input.css';
import './pics.css';
import './shapes.css';
import pic1 from'./pic1.svg';


export default function Login() {
  return (
    <div className="container">
      <div className="rectangle">

        <svg className="circle" >
          <circle cx="20" cy="20" r="10" className="circle1" />
        </svg>

        <h1 className='headerSchool'>INFOTECH UNIVERSITY</h1>

        <h1 className="headerSignin">SIGN IN</h1>

        <p className="text">Sign in to continue to our application</p>

        <input type="text" placeholder="Email" className="inputEmail"></input>
        <input type="text" placeholder="Password" className="inputPass"></input>

        <button className="loginButton">Login</button>

        <button className="signupButton">Sign Up</button>

        <button className="forgotpassButton">Forgot Password ?</button>

        <button className="signinButton">Sign In</button>

      </div>

      <div className="rectangleRight">

      <img src={pic1} alt="pic1" className="Pic" />

      </div>
    </div>
  );
}
