import MNCSS from './MainNav.module.css'
import onlyo from '../Images/onlyo.png';
import profile from '../Images/accountblack.svg';

const MainNav = () => {
    return (
        <div className={MNCSS.navbar}>
            <div className={MNCSS.div1}>
                <img className={MNCSS.logo} src={onlyo} alt="O" />
            </div>

            <div className={MNCSS.div2}>
                <input className={MNCSS.personalisedText} type="text" placeholder='Good Morning!' disabled/>
            </div>      
          
            
            <div className={MNCSS.dropdown}>
                <img className={MNCSS.profileIcon} src={profile} alt="Profile" />
                <div className={MNCSS.dropdownContent}>
                <a href="#">My Account</a>
                <a href="#">My Orders</a>
                <a href="#">Log Out</a>
                <a href="#">About Us</a>
                <a href="#">Support</a>
                </div>
            </div>
        </div>
    )
}

export default MainNav
