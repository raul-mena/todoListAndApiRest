import React from 'react';
 
function TaskForm(props) {
  return (
    <div>
        <form onSubmit={props.handleSaveTask}>
            <input onChange={props.handleChange} name="name" value={props.name} placeholder="Task" required/>
            <input onChange={props.handleChange} name="description" value={props.description} placeholder="Description" required/>
            <input onChange={props.handleChange} name="date" value={props.date} type="date" placeholder="Date to do" required/>
            <button type="submit"> Save </button>
        </form>
    </div>
  );
}

export default TaskForm;