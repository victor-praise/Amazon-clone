import React, { useState, useEffect } from 'react';
import '../styles.scss/orders.scss';
import { useStateValue } from './stateProvider';
import { db } from '../firebase';
import { Order } from '../components/order'

export function Orders(props) {

    const [orders, setOrders] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection('users').doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()

                    })))
                })
        }
        else {
            setOrders([])
        }

    }, [user])
    return (
        <>
            <div className="orders">
                <h1>Your Orders</h1>
                <div className="orders__order">
                    {orders?.map(order => (
                        <Order order={order} />))}
                </div>
            </div>
        </>
    )
}
