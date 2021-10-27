import YCCSS from './YourCart.module.css'
import YourCartCard from './YourCartCard.js'

const YourCart = () => {
    return (
        <div>
            <div className={`justify-content-center ${YCCSS.title}`}>
                <h2 className={YCCSS.heading}>Your Cart</h2>
                <hr className={YCCSS.sep}/>
            </div>
            <div className={YCCSS.modOfOrd}>Mode of order : Delivery</div>
            <YourCartCard/>
            <YourCartCard/>
            <YourCartCard/>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={YCCSS.orderDiv}><button className={YCCSS.placeOrder}><div className={YCCSS.container}><div className={YCCSS.one}><i className="fa fa-inr" aria-hidden="true"></i>222.00</div><div className={YCCSS.two}>TOTAL</div><div className={YCCSS.three}><span className={YCCSS.placeOrd}>Place Order<i className={`fas fa-angle-right ${YCCSS.arrow}`}></i></span></div></div></button></div>
        </div>
    )
}

export default YourCart
