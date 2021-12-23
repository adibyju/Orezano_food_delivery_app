import YCCSS from './YourCart.module.css'
import YourCartCard from '../YourCartCard/YourCartCard.js'

const YourCart = () => {
    return (
        <div>
            <div className={`justify-content-center ${YCCSS.title}`}>
                <h2 className={YCCSS.heading}>Your Cart</h2>
                <hr className={YCCSS.sep} />
            </div>

            <div className={YCCSS.modOfOrd}><span className={YCCSS.modOfOrdSpan}>Delivery</span></div>

            <YourCartCard />
            <YourCartCard />
            <YourCartCard />

            <div className={YCCSS.detailsDiv}>
                <h4>Your Details</h4>
                <div className={YCCSS.detailRowDiv}><input type="text" placeholder="Adi" className={YCCSS.detailRow} /></div>
                <div className={YCCSS.detailRowDiv}><input pattern="[0-9]{10}" placeholder="1234567890" className={YCCSS.detailRow} /></div>
                <div className={YCCSS.detailRowDiv}><input type="text" placeholder="H9, IIT Bombay" className={YCCSS.detailRow} /></div>

            </div>

            <div className={YCCSS.chargesContainer}>
                <div className={YCCSS.charges}>
                    <div className={YCCSS.chargesDiv}>
                        <div className={YCCSS.floatLeft}>Item Total</div>
                        <div className={YCCSS.floatRight}><i className="fa fa-inr" aria-hidden="true" />159.00</div>
                    </div>
                    <div className={YCCSS.chargesDiv}>
                        <div className={YCCSS.floatLeft}>Packaging charges</div>
                        <div className={YCCSS.floatRight}><i className="fa fa-inr" aria-hidden="true" />62.95</div>
                    </div>
                    <div className={YCCSS.chargesDiv}>
                        <div className={YCCSS.floatLeft}>Taxes and charges</div>
                        <div className={YCCSS.floatRight}><i className="fa fa-inr" aria-hidden="true" />0.00</div>
                    </div>
                    <div className={`${YCCSS.chargesDivBold} ${YCCSS.chargesDiv}`}>
                        <div className={YCCSS.floatLeft}>Grand Total</div>
                        <div className={YCCSS.floatRight}><i className="fa fa-inr" aria-hidden="true" />222.00</div>
                    </div>

                </div>
            </div>

            <div className={YCCSS.orderDiv}>
                <button className={YCCSS.placeOrder}>
                    <div className={YCCSS.container}>
                        <div className={YCCSS.one}><i className="fa fa-inr" aria-hidden="true"></i>222.00</div>
                        <div className={YCCSS.two}>TOTAL</div>
                        <div className={YCCSS.three}><span className={YCCSS.placeOrd}>Place Order<i className={`fas fa-angle-right ${YCCSS.arrow}`}></i></span></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default YourCart
