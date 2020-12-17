import React, { Component } from 'react';
import axios from "axios";

const MovieContext  = React.createContext();
//Provider
//Consumer

//https://reactjs.org/docs/context.html

class MovieProvider extends Component {
    state = {
        movies:[],
        offset:0,
        noMoreData: false,
        order: [],
        orderTotal: 0
    }

    getMoviesWithOffset = (offs) => {
        console.log(this.state.noMoreData);
        this.setState({offset:this.state.offset+offs});
        console.log(this.state.offset)
        var offsetUtilise = this.state.offset+offs;
        axios.get('http://localhost:8081/api/movies',{params: {offset: offsetUtilise}})
        .then((res) =>{
            console.log(res.data)
            if(res.data.length <offs) {
                this.setState({noMoreData:true})
            }
         this.setState({
             movies: this.state.movies.concat(res.data)
         })
        });
    };

    componentDidMount(){
        this.getMoviesWithOffset(0);
    }


    handleDetail = (id) => {
        const movie = this.getItem(id);
        this.setState(() => {
            return { detailMovie: movie }
        });
    }

    addMovie = (id) => {
        let tempMovies = [...this.state.movies];
        const index = tempMovies.indexOf(this.getItem(id));
        const movie = tempMovies[index]
        movie.inOrder = true;
        const price = movie.price;
        movie.total = price;
        movie.count = 1;
        this.setState(() => {
            return { movies: tempMovies, order: [...this.state.order, movie] };
        },
            () => {
                this.addTotal()
            }
        );

    };
    add = id => {
        let tOrder = [...this.state.order];
        const selectMovie = tOrder.find(item => item.id === id)
        const index = tOrder.indexOf(selectMovie);
        const movie = tOrder[index];

        movie.count = movie.count + 1;
        movie.total = movie.count * movie.price;
        this.setState(
            () => {
                return { order: [...tOrder] };
            },
            () => {
                this.addTotal();
            }
        );

    };
    substract = id => {
        let tOrder = [...this.state.order];
        const selectMovie = tOrder.find(item => item.id === id)
        const index = tOrder.indexOf(selectMovie);
        const movie = tOrder[index]
        movie.count = movie.count - 1;
        if (movie.count === 0) {
            this.removeMovie(id)
        }
        else {
            movie.total = movie.count * movie.price;
            this.setState(
                () => {
                    return { order: [...tOrder] };
                },
                () => {
                    this.addTotal();
                }
            );
        }

    }
    removeMovie = id => {
        let tMovies = [...this.state.movies];
        let tOrder = [...this.state.order];

        tOrder = tOrder.filter(item => item.id !== id);
        const index = tMovies.indexOf(this.getItem(id));
        let removedMovie = tMovies[index]
        removedMovie.inOrder = false;
        removedMovie.count = 0;
        removedMovie.total = 0;
        this.setState(() => {
            return {
                order: [...tOrder],
                movies: [...tMovies]
            };
        },
            () => {
                this.addTotal();
            })
    }
    clearOrder = () => {
        this.setState(() => {
            return { order:[]}
        }
        )


    }
    addTotal = () => {
        let mytotal = 0;
        this.state.order.map(item => (mytotal += item.total))
        this.setState(() => {
            return {
                orderTotal: mytotal,
            }
        })
    }

    getItem = (id) => {
        const movie = this.state.movies.find(item => item.id ===id);
        return movie;
    }


    render() {
        return (
            <MovieContext.Provider value={{...this.state,
                getMoviesWithOffset:this.getMoviesWithOffset, 
                noMoreData: this.state.noMoreData,    
                handleDetail: this.handleDetail,            
                addMovie: this.addMovie,
                add: this.add,
                substract: this.substract,
                removeMovie: this.removeMovie,
                clearOrder: this.clearOrder}}> 
                {this.props.children}
            </MovieContext.Provider>
        )
    }
}


const MovieConsumer = MovieContext.Consumer;

export {MovieProvider, MovieConsumer};