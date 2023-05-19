import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasksActions from './redux/actions/tasksAction'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  let {addTask, deleteTask} = tasksActions
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  console.log(tasks)
  const inputRef = useRef("");
  
  const crearTask = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length !== 0 && !tasks.includes(inputRef.current.value)) {
      dispatch(addTask(inputRef.current.value));
      inputRef.current.value = ""; // Limpiar el input después de agregar la tarea
      toast.success("Haz agregado la tarea correctamente");
    } else if (tasks.includes(inputRef.current.value)) {
      toast.error("¡La tarea ya existe!");
    } else if(inputRef.current.value == ""){
        
    }
  };

  const eliminarTask = (t) => {
    dispatch(deleteTask(t))
    toast.success("Haz eliminado la tarea correctamente");
  };
  
  return (
    <div className='bg-gray-500 w-full min-h-screen flex justify-center items-center'>
      <div className='bg-white w-1/2 min-h-1/2 shadow-lg rounded flex flex-col justify-center items-start p-28 gap-4'>
        <h2 className='font-bold text-[#1f1f1f] text-center text-4xl drop-shadow-sm'>To do List</h2>
        <input onChange={(e) => console.log(inputRef.current.value)} ref={inputRef} className="shadow rounded w-full p-4 border" type="text" placeholder='Inserte la tarea' />
        <button type="button" onClick={crearTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">Enviar</button>
        {tasks?.map((t) => (
            <div key={t} className='relative bg-green-500 border shadow-lg rounded flex flex-col justify-center items-start py-4 px-28 gap-4'>
              {t}
              <svg onClick={() => eliminarTask(t)} className="absolute -right-2 -top-2 w-6 h-6 bg-red-600 rounded-full text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          ))}

        <ToastContainer />
      </div>
    </div>
  );
}

export default TodoList;