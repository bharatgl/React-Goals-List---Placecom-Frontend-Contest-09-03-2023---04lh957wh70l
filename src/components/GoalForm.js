import React, { useState } from "react";

const GoalForm = ({ addGoal }) => {
const [formData, setFormData] = useState({
goal: "",
by: ""
});

const handleSubmit = (event) => {
event.preventDefault();
addGoal(formData);
setFormData({
goal: "",
by: ""
});
};

const handleChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value
});
};

return (
<>
<h1>My Goals</h1>
<form onSubmit={handleSubmit}>
<input
       type="text"
       name="goal"
       placeholder="Goal..."
       value={formData.goal}
       onChange={handleChange}
     />
<input
       type="text"
       name="by"
       placeholder="By..."
       value={formData.by}
       onChange={handleChange}
     />
<button type="submit">Add</button>
</form>
</>
);
};

export default GoalForm;