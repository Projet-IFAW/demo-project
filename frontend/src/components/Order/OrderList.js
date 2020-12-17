import React from "react";
import OrderItem from "./OrderItem";

export default function OrderList({value}){
    const {order} = value

    return(
        <div className="container-fluid">
            {order.map(item => {
                return <OrderItem key={item.id} item={item} value={value} />

                })}
    </div>

    );
}