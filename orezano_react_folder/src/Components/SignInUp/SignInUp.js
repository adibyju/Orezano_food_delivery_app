import { useRef } from 'react'
import SIUCSS from './SignInUp.module.css' // SignInUp CSS
// import logo from '../logo.svg';
// import register from '../register.svg';
import logo from '../Images/logo.png';
import LandingPage from '../LandingPage/LandingPage.js'

const SignInUp = () => {
  const Container = useRef(null);

  const signUp = () => {
    Container.current.classList.add(SIUCSS['sign-up-mode']);
  }

  const signIn = () => {
    Container.current.classList.remove(SIUCSS['sign-up-mode']);
  }

  return (
    <>
      <LandingPage />
      <div className={SIUCSS.container} ref={Container}>
        <div className={SIUCSS['forms-container']}>
          <div className={SIUCSS['signin-signup']}>
            <form action="#" className={SIUCSS['sign-in-form']}>
              <h1 className={SIUCSS.appName}>OrezanO</h1>
              {/* <img src={logo} class={SIUCSS.logo1} alt="" /> */}
              <h2 className={SIUCSS.title}>Sign in</h2>
              <div className={SIUCSS['input-field']}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email-id" />
              </div>
              <div className={SIUCSS['input-field']}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className={SIUCSS['right-align']}><a href="#" className={SIUCSS.aGoogle}>Forgot password?</a></div>
              <input type="submit" value="Submit" className={`${SIUCSS.btn} ${SIUCSS.solid}`} />
              <p className={SIUCSS['social-text']}>Or sign in with <a href="#" className={SIUCSS.aGoogle}>Google</a></p>
              {/* <div className={SIUCSS.restDel}>
              <button className={`${SIUCSS.btn} ${SIUCSS['btn-left']}`}>Restaurateur?</button>
              <button className={`${SIUCSS.btn} ${SIUCSS['btn-right']}`}>Delivery person?</button>
              </div> */}
            </form>
            <form action="#" className={SIUCSS['sign-up-form']}>
            <h1 className={SIUCSS.appName}>OrezanO</h1>
              {/* <img src={logo} class={SIUCSS.logo2} alt="" /> */}
              <h2 className={SIUCSS.title}>Sign up</h2>
              {/* <div className={SIUCSS['input-field']}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" />
              </div> */}
              <div className={SIUCSS['input-field']}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              {/* <div className={SIUCSS['input-field']}>
              <i className="fas fa-phone"></i>
              <input type="int" placeholder="Phone No." maxlength="10"/>
              </div> */}
              {/* <div className={SIUCSS['input-field']}>
              <i className="fas fa-home"></i>
              <input type="text" placeholder="Address" />
              </div> */}
              <div className={SIUCSS['input-field']}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className={SIUCSS.btn} value="Submit" />
              <p className={SIUCSS['social-text']}>Or Sign up with <a href="#" className={SIUCSS.aGoogle}>Google</a></p>
            </form>
          </div>
        </div>

        <div class={SIUCSS['panels-container']}>
          <div class={`${SIUCSS.panel} ${SIUCSS['left-panel']}`}>
            <div class={SIUCSS.content}>
              <h3>New here ?</h3>
              <p>
                {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid! */}
                Sign Up now! Satisfy your cravings by placing orders, or expand your services if you are a restaurateur or a delivery person
              </p>
              <button class={`${SIUCSS.btn} ${SIUCSS.transparent}`} id={SIUCSS['sign-up-btn']} onClick={signUp}>
                Sign up
              </button>
            </div>
            {/* <img src={logo} class="image" alt="" /> */}
          </div>
          <div class={`${SIUCSS.panel} ${SIUCSS['right-panel']}`}>
            <div class={SIUCSS.content}>
              <h3>One of us ?</h3>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti. */}
                Watchu waiting for? Sign In and place some orders to enjoy some yummy dishes
              </p>
              <button class={`${SIUCSS.btn} ${SIUCSS.transparent}`} id={SIUCSS['sign-in-btn']} onClick={signIn}>
                Sign in
              </button>
            </div>
            {/* <img src={register} class="image" alt="" /> */}
          </div>
        </div>
      </div></>
  )
}

export default SignInUp
