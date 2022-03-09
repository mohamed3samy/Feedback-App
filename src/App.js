import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<Router>
			<Header />
			<div className="container">
				<FeedbackStats feedback={feedback} />
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</Router>
	);
};

export default App;
