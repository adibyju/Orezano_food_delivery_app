import { useRef } from 'react'
// import ReactDOM from 'react-dom';
import YCCCSS from './YourCartCard.module.css'
import nonVeg from '../Images/nonvegsymbol.png';

const YourCartCard = () => {

    var countNum = 1;
    const CountInput = useRef(null);

    function plus() {
        if (countNum < 20) {
            countNum = countNum + 1;
            CountInput.current.value = countNum;
        }
    }

    function minus() {
        if (countNum > 0) {
            countNum = countNum - 1;
            CountInput.current.value = countNum;
        }
    }

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
                            <input type="button" value="-" id={YCCCSS.minus} onClick={minus} />
                            <input type="text" size="25" value="1" min="0" max="20" id={YCCCSS.count} ref={CountInput} />
                            <input type="button" value="+" id={YCCCSS.plus} onClick={plus} />
                        </div>
                    </div>
                </div>
                <div className={YCCCSS.price}><i className="fa fa-inr" aria-hidden="true"></i>159.00</div>
            </div>
        </div>

    )
}

export default YourCartCard
