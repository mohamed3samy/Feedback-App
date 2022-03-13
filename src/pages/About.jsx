import { Link } from "react-router-dom";
import Card from "../components/UI/Card";

const About = () => {
	return (
		<Card>
			<div className="about">
				<h1>About This Project</h1>
				<p>
					This a React app to leave feedback for a product or
					services
				</p>
				<p>
					<Link to="/">Back To Home</Link>
				</p>
			</div>
		</Card>
	);
};

export default About;
