import './App.css';
import SignInUp from './Components/SignInUp/SignInUp'
import OrderSum from './Components/OrderSum/OrderSum'
import YourCart from './Components/YourCart/YourCart'
import LandingPage from './Components/LandingPage/LandingPage'
import Profile from './Components/Profile/Profile'
import Header from './Components/Header/Header'
import ResetPass from './Components/ResetPass/ResetPass'
import MainScreen from './Components/MainScreen/MainScreen'

function App() {
  return (
    <div className="App">
      {/* <SignInUp />  */}
      {/* <MainScreen/> */}
      <OrderSum />
      {/* <Header/> */}
      {/* <Profile /> */}
      {/* <ResetPass /> */}
      {/* <YourCart />  */}
    </div>
  );
}

export default App;
