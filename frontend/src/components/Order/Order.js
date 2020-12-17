import React from "react";
import { MovieConsumer } from  "../Context.js";
import OrderList from "./OrderList";
import OrderTotal from "./OrderTotal";

export default class Order extends React.Component {
    render() {
        return (
            
            <section>
                    <h1 className="text-center">Récapitulatif de votre panier</h1>
                <br></br><br></br>
                <MovieConsumer>
                    {value => {
                        const { order } = value;
                        if (order.length > 0) {
                            return (
                                <React.Fragment>
                                    <OrderList value={value}></OrderList>
                                    <OrderTotal value={value}></OrderTotal>
                                </React.Fragment>
                            );
                        }
                        else {
                            return <h1 className="text-center">Votre panier est vide</h1>;
                        }
                    }}
                </MovieConsumer>
            </section>


        );
    }
}
