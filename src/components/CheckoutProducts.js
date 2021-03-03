import React from 'react'
import '../styles.scss/checkoutproducts.scss'
import { useStateValue } from './stateProvider'
export function Checkoutproducts({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket=()=>{
dispatch({
    type: 'REMOVE_FROM_BASKET',
    id:id,
})
    }
    return (
        <>
            <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} alt='' />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className='checkoutProduct__price'>
                        <small>
                            $
                    </small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {
                            Array(rating).fill().map((_, i) => {
                                return <p>🌟</p>
                            })
                        }
                    </div>
                    {!hideButton && (
                        <button onClick={removeFromBasket}>Remove From Basket</button>
                    )}
                   
                </div>

            </div>
        </>
    )
}
