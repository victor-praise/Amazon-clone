import React from 'react'
import '../styles.scss/subtotal.scss'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

export function Subtotal(props) {
    const [{ basket }] = useStateValue();
    const history = useHistory();
    

    return (
        <>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal {basket.length} items):
                       <strong> {value} </strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type='checkbox' /> This Order Contains a Gift
                 </small>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}

                />
                <button onClick={(e)=>{
                    history.push('/payment')
                }}>Proceed to checkout</button>
            </div>
        </>
    )
}
