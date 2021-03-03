import React from 'react'
import '../styles.scss/products.scss'
import { useStateValue } from './stateProvider'
export function Products({ title, image, price, rating, id }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price
            }
        })
    }
    return (
        <>
            <div className="product">
                <div className="products__info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {
                            Array(rating).fill().map((_, i) => {
                                return <p>🌟</p>
                            })
                        }

                    </div>
                </div>
                <img src={image} alt='lean' />
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </>
    )
}
