import React from 'react'
import '../styles.scss/checkout.scss'
import { Subtotal } from './subTotal'
import { useStateValue } from './stateProvider'
import { Checkoutproducts } from './CheckoutProducts';
//import FlipMove from 'react-flip-move';
export function Checkout(props) {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <>
            <div className='checkout'>

                <div className='checkout__left'>
                    <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
                    <div >
                        <h3>hello {user?.email}</h3>
                        <h2 className='checkout__title'>
                            Your shopping basket
                       </h2>

                        {basket.map(
                            item => (
                                <Checkoutproducts 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className="checkout__right">

                    <Subtotal />

                </div>
            </div>
        </>
    )
}
