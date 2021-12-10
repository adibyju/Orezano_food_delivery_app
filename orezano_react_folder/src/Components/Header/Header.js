import HCSS from './Header.module.css'
import accImg from '../Images/account.png';
import $ from 'jquery';

const Header = () => {

    return (
        <div>
            <div className={HCSS.headerDiv}>
                <div className={HCSS.logoContainer}>
                <a className={HCSS.logoLink} href="#">
                    <img className={HCSS.logo} src={accImg} alt="" />
                </a>
                </div>

                <div className={HCSS.searchContainer}>
                <div className={HCSS.inputField}>
                    <i className={`fas fa-search ${HCSS.searchIcon}`}></i>
                <input className={HCSS.searchBox} type="text" placeholder="Search your favourite dishes..." />
                </div>
                </div>                

                <div className={HCSS.menuContainer}>
                    <img className={HCSS.menu} src={accImg} alt="" />
                </div>                
            </div>
        </div>
    )
}

export default Header
