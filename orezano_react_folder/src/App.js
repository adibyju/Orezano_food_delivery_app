import './App.css';
import SignInUp from './Components/SignInUp/SignInUp'
import OrderSum from './Components/OrderSum/OrderSum'
import YourCart from './Components/YourCart/YourCart'
import LandingPage from './Components/LandingPage/LandingPage'
import Profile from './Components/Profile/Profile.js'

function App() {
  return (
    <div className="App">
      <SignInUp /> 
      <OrderSum />
      <Profile />
      <YourCart /> 
    </div>
  );
}

export default App;
