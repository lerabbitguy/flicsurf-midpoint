import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';

const PopCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

    return (
        <div className="carousel">
            <h2>Popular This Week on FlicSurf</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 1*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/indiana.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Indiana Jones and the Dial of Destiny</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>6.8</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 2*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/mirror.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Black Mirror</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 3*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/asteroid.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Asteroid City</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.4</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 4*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/flash.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>The Flash</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.3</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 5*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/extraction.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Extraction 2</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.5</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 6*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/spider.jpg')} />
                            </div>
                            <Card.Body>
                                <div className="card-title-wrapper">
                                    <Card.Title>
                                        <Link to="/" style={{ textDecoration: 'none' }}>
                                            <strong>Spider-Man: Across the Spider-Verse</strong>
                                        </Link>
                                    </Card.Title>
                                </div>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 7*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/silo.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Silo</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.2</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 8*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/feelings.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>No Hard Feelings</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>6.9</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 9*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bear.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>The Bear</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.4</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 10*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/succession.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Succession</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}
 
export default PopCarousel;