import React from "react";
import { Button } from "react-bootstrap";

export default function OrderItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { add, substract, removeMovie } = value;

    return (

        <div className="row my-1">
            <div className="col-10  col-lg-2 justify-content-center">
                <img src={img} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="movie" />

            </div>
            <div className="col-10  col-lg-2 justify-content-center">
                {title}
            </div>
            <div className="col-10  col-lg-2 justify-content-center">
                {price}€
            </div>

            <div className="col-10  col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <Button className="btn btn-black mx-1">
                        <span onClick={() => substract(id)}>-</span>
                    </Button>
                    {" "}
                    <Button className="btn btn-black mx-1">
                        <span>{count}</span>
                    </Button>
                    {" "}
                    <Button className="btn btn-black mx-1">
                        <span onClick={() => add(id)}>+</span>
                    </Button>
                </div>
            </div>
            <div className="col-10  col-lg-2 cart-icon justify-content-center" onClick={() => removeMovie(id)}>
                <i className="fas fa-trash center"> Supprimer </i>
            </div>
            <div className="col-10  col-lg-2 justify-content-center">
                {total}€
            </div>
        </div>




    )
}