import YCCCSS from './YourCartCard.module.css'
import nonVeg from '../Images/nonvegsymbol.png';

const YourCartCard = () => {
    return (
        <div className={YCCCSS.cartCard}>
            <div className={YCCCSS.container}>
                <div className={YCCCSS.dish}><img src={nonVeg} alt="" className={YCCCSS.type} />
                   <p className={YCCCSS.dishDesc}>Chicken Pepperoni Stuffed Garlic Bread</p></div>
                   <div className={YCCCSS.price}><i className="fa fa-inr" aria-hidden="true"></i>159.00</div>
            </div>
        </div>
        
    )
}

export default YourCartCard
