// import { useRef } from 'react'
// import ReactDOM from 'react-dom';
import YCCCSS from './YourCartCard.module.css'
import nonVeg from '../Images/nonvegsymbol.png';

const YourCartCard = () => {

    // var countNum = 1;
    // const CountInput = useRef(null);
    // // const Count = ReactDOM.findDOMNode("count");
    // // var countEl = document.getElementById(YCCCSS.count);
    // // const signUp = () => {
    // //     Container.current.classList.add(SIUCSS['sign-up-mode']);
    // // }
    // const plus = () => {
    //     if (countNum < 20) {
    //         countNum = countNum + 1;
    //         CountInput.current.value = countNum;
    //         console.log(countNum);
    //     }
    // }

    // const minus = () => {
    //     if (countNum > 1) {
    //         countNum = countNum - 1;
    //         CountInput.current.value = countNum;
    //         console.log(countNum);
    //     }
    // }

    return (
        <div className={YCCCSS.cartCard}>
            <div className={YCCCSS.container}>
                <div className={YCCCSS.dish}>
                    <div className={YCCCSS.name}>
                        <img src={nonVeg} alt="" className={YCCCSS.type} />
                        <p className={YCCCSS.dishDesc}>Chicken Pepperoni Stuffed Garlic Bread</p>
                    </div>
                    <div className={YCCCSS.counterDiv}>
                        <div id={YCCCSS.counter}>
                            <input type="button" value="-" id={YCCCSS.minus} />
                            <input type="text" size="25" value="1" min="0" max="20" id={YCCCSS.count} />
                            <input type="button" value="+" id={YCCCSS.plus} />
                        </div>
                    </div>
                </div>
                <div className={YCCCSS.price}><i className="fa fa-inr" aria-hidden="true"></i>159.00</div>
            </div>
        </div>

    )
}

export default YourCartCard
