import React from 'react';

const Todo = () => {
    return (
        <ul className="tasks">
            <li className="task">
                <input type="checkbox" />
                <p>Task #1</p>
            </li>
            <li className="task">
                <input type="checkbox" />
                <p>Task #2</p>
            </li>
            <li className="task">
                <input type="checkbox" />
                <p>Task #3</p>
            </li>
            <li className="task">
                <input type="checkbox" />
                <p>Task #4</p>
            </li>
        </ul>
    );
};

export default Todo;
