import React from "react";

const ListOfGoals = ({ goals }) => {
return (
<ul>
{goals.map((goal, index) => (
<li key={index}>
<p>
My goal is to {goal.goal}, by {goal.by}.
</p>
</li>
))}
</ul>
);
};

export default ListOfGoals;