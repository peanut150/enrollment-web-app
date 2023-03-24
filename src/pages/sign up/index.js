import './signup.css';
import pic2 from'./pic2.svg';
import logo4 from './logo4.png';


export default function SignUp() {

  return (
    <div className="container">
        <div className="rectangle">
            <div className='header'>
                <div className='headerSchool'>
                    <img src={logo4} alt="logo4" className="logo4"/>
                    <span>INFOTECH UNIVERSITY</span>
                </div>
                <div className='headerButton'>
                    <button className="loginButtonSignup">Login</button>
                    <button className="signupButtonSignup">Sign Up</button>
                </div>
                
            </div>
          <div className='form'>
              <div className='formHeader'>
                <h1 className="headerSignin">SIGN UP</h1>
                <p className="text">Sign up to continue to our application</p>
              </div>
              <div className='inputs'>
                <input type="text" placeholder="Email" className="inputEmail"></input>
                <input type="password" placeholder="Password" className="inputPass"></input>
                <input type="password" placeholder="Confirm Password" className="inputConfirmPass"></input>
              </div>
              
              <button className="signinButton">Create Account</button>
          </div>

        </div>

      <div className="rectangleRight">

          <img src={pic2} alt="pic2" className="pic2" />

      </div>
    </div>
  );
}
