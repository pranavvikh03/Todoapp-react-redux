
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Components_CSS/Homepage.css";
import { addTask, clearTasks } from '../state/action-creators/index';

export default function Home() {
    const token = useSelector(state => state.token)
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)
    useEffect(() => { 
        if(localStorage.tasks!==undefined)
        {  
            dispatch(clearTasks(tasks))
            let temp = JSON.parse(localStorage.getItem("tasks"))
            temp.map((element)=>dispatch(addTask(element)))
        }
    }, [dispatch,tasks]);
    const navigate = useNavigate();
    if(token==="invalid")
    {
        navigate("/login",{replace:true})
    }
    const today = new Date();
    return(
        
        <div className="Homecontainer">
            <Link to="/create-todo-task" id="new_task_btn" replace={true}>+ New Task</Link>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((element) => {
                        let temp ="";
                        if( today.setHours(0,0,0,0) === new Date(element.Due_Date).setHours(0,0,0,0))
                        {
                            temp = "yellow";
                        }
                        else if( today.setHours(0,0,0,0) > new Date(element.Due_Date).setHours(0,0,0,0))
                        {
                            temp = "red";
                        }
                        else
                        {
                            temp = "white";
                        }
                        return(<tr  style={{backgroundColor: temp}} key={element.task_id}>
                            <td>{element.task_id}</td>
                            <td>{element.Title}</td>
                            <td>{element.Description}</td>
                            <td>{element.Due_Date}</td>
                            <td>{element.Priority}</td>
                            <td><Link to={"/edit/"+element.task_id} className="linkBtn" replace={true}>Edit</Link>
                            <Link to={"/delete/"+element.task_id}  className="linkBtn" replace={true}>Delete</Link></td>
                        </tr>)
                        }) 
                    }
                    
                </tbody>
            </table>
        </div> 
    );
}
