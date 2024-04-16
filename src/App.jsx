import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import todoReducer from './store/reducers';

// Create Redux store
const store = createStore(todoReducer);

function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-screen'>
     
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen mx-10">
        <div className=" p-8 rounded-lg shadow-lg shadow-gray-500 w-full max-w-md bg-amber-300 ">
          <h1 className="text-3xl text-gray-700  font-bold mb-6 text-center">To-Do App</h1>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
    </div>
  );
}

export default App;

