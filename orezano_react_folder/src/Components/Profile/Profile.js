import PCSS from './Profile.module.css'
import profileimage from '../Images/profileimage.jpg'; 
import NavBackButton from '../NavBackButton/NavBackButton.js'

const Profile = () => {
    return (
        <div className={PCSS.container}>
            <NavBackButton/>
            {/* <div className={PCSS.main}>
                <img className={PCSS.profImage} src={profileimage} alt="Profile image" />
                <div className={PCSS.details}>
                    <div className={PCSS.details1}>
                       Aditya Byju
                    </div>
                    <div className={PCSS.details2}>
                        adi@hotmail.com
                    </div>
                </div>
            </div>
            <div className={PCSS.phNoContainer}>
                <b>Phone No:</b> 1234567890
            </div>
            <div className={PCSS.addressContainer}>
                <b>Address:</b> H9, IIT Bombay, Powai, Mumbai
            </div>
            <div className={PCSS.editProfileContainer}>
                <a href="#">Edit profile</a>
            </div>
            <div className={PCSS.resetPassContainer}>
                <a href="#">Change password</a>
            </div>             */}
        </div>
    )
}

export default Profile
