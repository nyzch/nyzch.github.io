import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/songassociation-main.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Song Association",
            description: "An addictive Django web application made for 17-437 Web Application Development. Uses websockets for real-time interaction",
            imgUrl: projImg1,
            projUrl: "/projects/songassociation"
        },
        {
            title: "Dynamic Memory Allocator",
            description: "Second project",
            imgUrl: projImg2,
            projUrl: "/"
        },
        {
            title: "Linux Shell",
            description: "Third project",
            imgUrl: projImg3,
            projUrl: "/"
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Click on each card for more detail</p>
                    </Col>
                </Row>
                <Row className="project-row">
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="sharp2"></img>
        </section >
    )
}