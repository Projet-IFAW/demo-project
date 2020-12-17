import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function OrderTotal({value}){
    const{orderTotal,clearOrder} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <Button  size="sm" variant="dark" onClick={() => clearOrder}>
                                Vider le panier
                            </Button>
                        </Link>
                        <h5>
                            <span><strong>Total :</strong></span>
                            <strong>{orderTotal}€</strong>
                        </h5>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
        
}