import React from 'react';

const AddTodoForm: React.FC = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">
                Add Task
            </button>
        </form>
    );
};

export default AddTodoForm;