/*https://dzone.com/articles/how-to-use-bootstrap-carousel-in-reactjs*/

import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

/** Utilisation de React Bootstrap*/
export default function BootstrapSlider() {
    return (
        <div>
            <div className='container-fluid'>
                <div className="row title" style={{ marginBottom: "20px" }}>
                    <div className="col-sm-12 btn btn-warning">
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={'img/img1.png'} alt="img1" />
                        <Carousel.Caption>
                            <Button variant="outline-dark">Profitez-en, c'est Noël !</Button>{
                                <Link to="/promo"></Link>
                            }
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}
