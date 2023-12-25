import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ExperienceCard } from './ExperienceCard';
import compImg1 from "../assets/img/tentendata.jpg";
import compImg2 from "../assets/img/imc-logo.jpg";
import compImg3 from "../assets/img/cmu.png";
import compImg4 from "../assets/img/regeneron.png";

export const Experience = () => {
    const experiences = [
        {
            title: "1010data - CoreDev Team Intern",
            subtitle: "June 2023 - August 2023, remote",
            description: "Worked in the Core Development Team to create a"
                + " multithreaded command line tool for running queries and"
                + " downloading data from the company's large-scale"
                + " database. Before my project, users' queries would be"
                + " run sequentially, resulting in hours of time spent"
                + " waiting. My project ran user queries concurrently,"
                + " improving wait times by 50%! In the future, this"
                + " tool will be widely used throughout the company"
                + " and by clients querying the company database.",
            imgUrl: compImg1,
            justify: "left"
        },
        {
            title: "IMC - Launchpad Software Engineering Program Participant",
            subtitle: "May 18-19, 2023, Chicago, IL",
            description: "Spent two days at IMC Chicago office learning about"
                + " market making and high frequency trading from IMC employees."
                + " I was 1 of 25 high-achieving sophomores selected for this "
                + " program and my team placed first in the market making "
                + " simulation game we played against each other. This was an "
                + " eye-opening experience for me because it made me realize the"
                + " sky is the limit when it comes to fast code.",
            imgUrl: compImg2,
            justify: "right"
        },
        {
            title: "Carnegie Mellon University - Emerging Leaders Mentor",
            subtitle: "October 2023 - present, Pittsburgh, PA",
            description: "Currently working with the CMU Student Leadership"
                + " Involvement, and Civic Engagement office to mentor a group"
                + " of first-year undergraduates in completing a civic-engaged"
                + " project.",
            imgUrl: compImg3,
            justify: "left"
        },
        {
            title: "Research under Dr. Anthony Szema",
            subtitle: "May 2020 - December 2020, New York",
            description: "Investigated how the COVID-19 pandemic lockdown"
                + " impacted the decisions medical practices made to protect"
                + " doctors' health while also serving patients' needs. Besides"
                + " using Excel to perform analysis on the data I collected,"
                + " I also wrote a neural net in Python to predict whether"
                + " medical practices were closed or not during the lockdown"
                + " based on the characteristics of the medical practice."
                + " I then wrote and submitted a paper about this work to the"
                + " Regeneron Science Talent Search.",
            imgUrl: compImg4,
            justify: "right"
        },
    ];
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Experiences</h2>
                        <br />
                    </Col>
                </Row>
                <Row className="experience-row">
                    {
                        experiences.map((experience, index) => {
                            return (
                                <ExperienceCard
                                    key={index}
                                    {...experience}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}