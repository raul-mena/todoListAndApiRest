import React from 'react';
 
function ListTask(props) {
  return (
    <div>
        {
            props.items.length ? <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(item => {
                        return <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.date}</td>
                            <th className="pointer"><a onClick={() => props.getTasksById(item)}>Edit</a></th>
                        </tr>
                    })}
                </tbody>
            </table> : ''
        }
        
    </div>
  );
}
 
export default ListTask;