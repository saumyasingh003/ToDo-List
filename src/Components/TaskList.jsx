import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../store/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className='text-center mt-10  p-2 '>
      {tasks.length === 0 ? (
        <div className='bg-white p-4 rounded-xl shadow-md'>No tasks available</div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed ' : 'mb-2 bg-white p-5  rounded-xl shadow-md'}> 
              <div className='flex justify-between items-center'>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
             
                />
                <span className='text-xl'>

                {task.text}
                </span>
                <button onClick={() => handleDelete(task.id)} className='bg-red-500 text-white hover:bg-red-600 hover:scale-[1.02]'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
