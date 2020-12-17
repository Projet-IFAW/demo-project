
import Movie from "./Movie"

import React, { Component } from 'react'

import {MovieConsumer} from "./Context.js";

export default class ListMovie extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                <MovieConsumer>
                    {value => {
                        return value.movies.map( movie => {
                            return <Movie key={movie.id} movie={movie}  />;
                        })
                        
                    }}
                </MovieConsumer>
                <MovieConsumer>
                    {value => {
                        return     <div className="col text-center">
                        <button className="btn btn-default" hidden={value['noMoreData'] ? true :false} onClick={() => value.getMoviesWithOffset(12)}> Montrer plus de films</button>
                      </div> ;
                    }}
                
                </MovieConsumer>
                </div>
            </React.Fragment>
        )
    }
}
