import RPCSS from './ResetPass.module.css'

const ResetPass = () => {
    return (
        <div>
            <div className={RPCSS.mainDiv1}>
                <h1>OrezanO</h1>
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
