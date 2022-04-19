import { FaFly } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className="task" onClick={() => onToggle(task.id)}>
			<h3>
				{task.text}
				<FaFly
					style={{ color: "#4d83db", cursor: "pointer" }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.day}</p>
		</div>
	);
};

export default Task;
