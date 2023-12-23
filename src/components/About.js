import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <div className="about-bx">
                        <h2>About Me</h2>
                        <Col>
                            <p>Hi, my name is Nancy Zhong, also known as "Nanz" to friends.
                                I am a junior at Carnegie Mellon University, majoring in
                                Computer Science with a minor in Business Analytics and Optimization.
                                Some of my interests include writing fast code and learning new things.
                                For example, I really enjoyed building my first web application in
                                late 2023, which motivated me to start exploring game development in C++
                                and web technologies like React (this website :))!</p>
                            <p>
                                Outside of class, I dance in <a href="https://www.youtube.com/@CMUKPDC" target="_blank">KPDC</a>,
                                drive for <a href="https://www.spiritracingsystems.com/" target="_blank">Spirit Racing Systems</a>,
                                and improve the campus dining experience in Dining Student Advisory Council.
                            </p>
                            <p>
                                Be sure to check out my other <a href="/projects"> Projects</a> and <a href="/experience"> Experiences</a>!
                            </p>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}