import React, { useState } from 'react'

const Todolist = () => {
    const [todolist, setToDolist] = useState([])
    const addTask = (e) => {
        if(e.code == "Enter"){
            console.log(e.target.value);
            setToDolist([ {text: e.target.value}, ...todolist ]);
            console.log([ {text: e.target.value}, ...todolist ]);

            e.target.value = "";
        }
    }

    const completedTask = (index) => {
        const temp = todolist;
        temp[index].completed = true;
        setToDolist([...temp]);
        console.log(temp);
    }

    const deleteTask = (index) => {
        const temp = todolist;
        temp.splice(index,1);
        setToDolist([...temp]);
    }
  return (
    <div>
        <h1 className="txt-center fw-bold">ToDo List</h1>
        <hr />
        <div className="card">
            <div className="card-header">
                <input type="text" className='form-control' onKeyDown={addTask}/>
            </div>
            <div className="card-body">
                {
                    todolist.map( (a,index) => {
                        return <div className='d-flex border border-2 p-2 justify-content-between'>
                            <p className={a.completed ? "text-success" : "fw-bold"}> {a.text} </p>
                        <div><button className="btn btn-primary" onClick={() => {completedTask(index)}}>completed</button> 
                        <button className="btn btn-warning"onClick={() => {deleteTask(index)}}>Delete</button></div>
                        </div>
                    } )
                }
            </div>
        </div>
    </div>
  )
}

export default Todolist