import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/songassociation-main.jpg";
import projImg2 from "../assets/img/tentendata.jpg";
import projImg3 from "../assets/img/malloclab-case2.jpg";
import projImg4 from "../assets/img/gptreadingbuddy.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "ChatGPT Chrome Plugin",
            description: "Coming soon! A Chrome extension that uses OpenAI's API to define/explain user-selected text so users never have to leave the webpage to learn what something means.",
            imgUrl: projImg4,
            projUrl: "https://github.com/nyzch/gpt-reading-buddy"
        },
        {
            title: "Song Association",
            description: "An addictive Django web application made for 17-437 Web Application Development. Uses websockets for real-time interaction",
            imgUrl: projImg1,
            projUrl: "/projects/songassociation"
        },
        {
            title: "Multithreaded Command Line Tool",
            description: "My internship project at 1010data that reduced data querying times by 50%. An early step in the company's new direction of modernizing their tools",
            imgUrl: projImg2,
            projUrl: "/experience"
        },
        {
            title: "Dynamic Memory Allocator",
            description: "My own implementations of malloc, calloc, realloc, and free made for 15-213 Introduction to Computer Systems.",
            imgUrl: projImg3,
            projUrl: "/projects/memoryallocator"
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