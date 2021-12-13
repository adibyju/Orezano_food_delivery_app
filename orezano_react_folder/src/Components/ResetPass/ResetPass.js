import RPCSS from './ResetPass.module.css'
import NavBackButton from '../NavBackButton/NavBackButton.js'
import orezanoOrange from '../Images/orezanoorange.png';

const ResetPass = () => {
    return (
        <div>
            <NavBackButton/>

            <div className={RPCSS.mainDiv1}>
                <img className={RPCSS.orezanoLogo} src={orezanoOrange} alt="OrezanO" />
            </div>

            <div className={RPCSS.mainDiv2}>
                <p>Reset Password</p>
            </div>

            <div className={RPCSS.mainDiv3}>
                <div className={RPCSS.subDiv1}>
                    <input className={RPCSS.newPass} type="text" placeholder="New password"/>
                </div>
                <div className={RPCSS.subDiv2}>
                    <input className={RPCSS.retypePass} type="text" placeholder="Retype password"/>
                </div>
                <div className={RPCSS.subDiv3}>
                    <input type="submit" value="RESET" className={RPCSS.btn} />
                </div>
            </div>
        </div>
    )
}

export default ResetPass
