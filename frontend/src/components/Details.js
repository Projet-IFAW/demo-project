import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MovieConsumer } from  "./Context.js";

export default class Details extends Component {
    render() {
        const movie = this.props.location.state.movieDetail;
        const { id } = this.props.location.state.movieDetail;
        return (
            <MovieConsumer>
                {(value) => (<div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-4">
                            <img className="img-responsive w-100" src={movie.img} alt="poster"></img>
                        </div>
                        <div className="col-md-6 mx-auto text-center my-3">
                            <h1>{movie.title + " : " + movie.price + "€"}</h1>
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-3">
                                    <h1>Résumé</h1>
                                    <p className=" text-justify text-time text-uppercase">{movie.plot}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto text-center my-5">
                            <Link to='/'><Button size="sm" variant="dark">Retour à la liste</Button></Link>
                            {" "}
                            <Button size="sm" variant="dark" onClick={() => {
                                value.addMovie(id)
                            }}> Ajouter au panier</Button>
                            {" "}
                            <Link to='./Order'><Button size="sm" variant="dark">Voir le panier</Button></Link>

                        </div>
                    </div>
                </div>
                )}
            </MovieConsumer>
        );
    }
}
