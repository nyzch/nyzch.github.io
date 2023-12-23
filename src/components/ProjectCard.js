import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
    const handleCardClick = () => {
        // Redirect to projUrl when the card is clicked
        window.location.href = projUrl;
    };
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleCardClick}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}