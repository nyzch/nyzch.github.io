import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Skills = () => {
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <Col>
                            <ul>
                                <li>Assembly</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>R</li>
                                <li>Standard ML</li>

                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>AWS</li>
                                <li>Django</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Linux</li>
                                <li>macOS</li>
                                <li>React</li>
                                <li>Windows</li>
                            </ul>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}