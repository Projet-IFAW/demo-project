import React from "react";
import { Component } from "react";
import { MovieConsumer } from  "./Context.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Movie extends Component {
    render() {
        const { id, title, img, price, inOrder } = this.props.movie;
        return (
            <MovieConsumer>
                {(value) => (
                    <div className="container-fluid col-9 mx-auto col-md-6 col-lg-2 my-2">
                        <div className="img-container p-5" onClick={() =>
                            value.handleDetail(id)
                        }>
                            <Link to={{ pathname: "/details", state: { movieDetail: this.props.movie } }}>
                                <img src={img} alt={title} className="card-img-top" />
                            </Link>
                            <Button size="sm" variant="dark" disabled={inOrder ? true : false} onClick={() => {
                                value.addMovie(id);
                            }}>
                                {inOrder ? (
                                    <p className="mb-0" disabled>
                                        {" "}Produit ajouté au panier
                                    </p>) : (<span >Ajouter ce produit au panier</span>)}
                            </Button>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <Link to={"/details"}>
                                <p className="align-self-center mb-0">{title}</p>
                            </Link>
                            <h5>
                                {price}
                                <span className="mr-1">€</span>
                            </h5>
                        </div>
                    </div>
                )}
            </MovieConsumer>
        );
    }
}
