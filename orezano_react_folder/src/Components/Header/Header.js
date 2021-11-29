import HCSS from './Header.module.css'
import accImg from '../Images/account.png';

const Header = () => {
    return (
        <div>
            <div className={HCSS.headerDiv}>
                <a className={HCSS.logoLink} href="#">
                    <img className={HCSS.logo} src={accImg} alt="" />
                </a>
                <div className={HCSS['input-field']}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search..." />
                </div>
                <img className={HCSS.menu} src={accImg} alt="" />
            </div>
        </div>
    )
}

export default Header
