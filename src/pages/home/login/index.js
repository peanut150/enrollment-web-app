
import './styles.css';
import pic1 from'./pic1.svg';
import logo from './logouni.png';


export default function Login() {
  return (
    <div className="container">
        <div className="rectangle">
            <div className='header'>
                <div className='headerSchool'>
                    <img src={logo} alt="logo" className="logo" />
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButton">Login</button>
                    <button className="signupButton">Sign Up</button>
                </div>
                
            </div>
          <div className='form'>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN IN</h1>
                <p className="text">Sign in to continue to our application</p>
              </div>
              <div className='inputs'>
                <input type="text" placeholder="Email" className="inputEmail"></input>
                <input type="password" placeholder="Password" className="inputPass"></input>
              </div>
              
              <button className="forgotpassButton">Forgot Password ?</button>
              <button className="signinButton">Sign In</button>
          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic1} alt="pic1" className="Pic" />

      </div>
    </div>
  );
}
