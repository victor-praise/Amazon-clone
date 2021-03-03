import React from 'react'
import '../styles.scss/orders.scss';
import moment from 'moment';
import { Checkoutproducts } from './CheckoutProducts';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
import '../styles.scss/order.scss';

export function Order({order}) {
   // const [{ basket}] = useStateValue();
    

    return (
        <>
           <div className="order">
               
               <h2>Order</h2>
               <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
               <p className="order__id">
                   <small>{order.id}</small>
               </p>
               {order.data.basket?.map(item=>(
                   <Checkoutproducts
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       hideButton
                   />
               ))}
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3 className="order__total">Order Total: {value}</h3>
                        </>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}

                />
               </div> 
        </>
    )
}
