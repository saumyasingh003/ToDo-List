import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [isFocused, setIsFocused] = useState(false)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), text: task }));
    setTask('');
  };

  return (
   <div className='flex  w-full justify-center items-center '>

    <form onSubmit={handleSubmit} className='flex md:flex-row flex-col justify-center items-center'>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onFocus={()=> setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Add a new task"
        className={`bg-gray-100 shadow-md h-12 rounded-lg p-3 mr-2 mb-2 ${isFocused ? 'w-64 transition-all ease-in-out duration-300 outline-none' : 'w-52'}`}
      />
      <button type="submit" className='bg-purple-600 text-white shadow-md hover:bg-purple-700 hover:scale-[1.02] h-12 w-32 mb-2'>Add Task</button>
    </form>
   </div>
  );
};

export default TaskInput;

