import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';

const TopTvCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

    return (
        <div className="carousel">
            <h2>Top Rated TV Shows</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 1*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/breaking.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Breaking Bad</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.4</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 2*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/chernobyl.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Chernobyl</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.3</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 3*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/sopranos.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>The Sopranos</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.2</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 4*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/wire.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>The Wire</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.2</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 5*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bob.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Band of Brothers</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.1</strong>
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
                                <Card.Img variant="top" src={require('./posters/got.jpg')} />
                            </div>
                            <Card.Body>
                                <div className="card-title-wrapper">
                                    <Card.Title>
                                        <Link to="/" style={{ textDecoration: 'none' }}>
                                            <strong>Game of Thrones</strong>
                                        </Link>
                                    </Card.Title>
                                </div>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.0</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 7*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/robot.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Mr. Robot</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.0</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 8*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/detective.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>True Detective</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.9</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 9*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/office.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>The Office</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 10*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bcs.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <strong>Better Call Saul</strong>
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
 
export default TopTvCarousel;