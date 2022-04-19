import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useState } from "react";

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "ATS checklist",
			day: "April 19 at 8am",
			reminder: true,
		},
		{
			id: 2,
			text: "buy groceries",
			day: "April 19 at 10am",
			reminder: true,
		},
		{
			id: 3,
			text: "Do dishes",
			day: "April 19 at 4:30pm",
			reminder: true,
		},
	]);

	//Delete task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle reminder
	const toggleReminder = (id) => {
		console.log("reminder", id);
	};
	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
		</div>
	);
};

export default App;
