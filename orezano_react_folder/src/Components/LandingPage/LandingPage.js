import LPCSS from './LandingPage.module.css'
import lpImg from '../Images/landingPageImg.png';
import orezanoWhite from '../Images/orezanowhite.png';
import $ from 'jquery';

const LandingPage = () => {
    $(function () {
        setTimeout(function () { $("#lp").fadeOut(1500); }, 1000)

    })

    return (
        <div id="lp" className={LPCSS.landingPage}>
            <div className={LPCSS.lpDiv1}>
                <img src={orezanoWhite} className={LPCSS.Orezano} alt="OrezanO" />
                <p>For College Students<br></br>Made in India</p>
            </div>
            <div className={LPCSS.lpDiv2}>
                <img className={LPCSS.lpimg} src={lpImg} alt="" />
            </div>
        </div>
    )
}

export default LandingPage
