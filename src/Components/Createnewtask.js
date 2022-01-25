import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Components_CSS/createnewtask.css';
import { addTask } from '../state/action-creators/index';
import { useNavigate } from "react-router-dom";

export default function Createnewtask() {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [date, setdate] = useState(new Date().toISOString().split('T')[0]);
    const [priority, setpriority] = useState("Medium");
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeTitle = (event) => {
        settitle(event.target.value.replace(/[^a-zA-Z\d]/ig, ""));
    }

    const onChangeDescription = (event) => {
        setdescription(event.target.value);
    }
    
    const onChangeDate = (event) => {
        setdate(event.target.value);
    }
    
    const onChangePriority = (event) => {
        setpriority(event.target.value);
    }

    const onSubmitData = () => {
        if(title!=="" && description!=="" && date!=="" && priority!=="")
        {
            let temp = {
                task_id:parseInt(tasks.length+1),
                Title:title,
                Description:description,
                Due_Date:date,
                Priority:priority
            }
            dispatch(addTask(temp));
            localStorage.setItem("tasks",JSON.stringify(tasks))
            alert("Task created successfully");
            navigate("/",{replace:true})
        }
        else{
            alert("Fields should not be Blank");
        }
    }
    return (
        <div className="formContainer">
            <h1 style={{ textAlign: "center" }}>Add New Task</h1>
            <form>
                <div>
                    <label>Title</label>
                    <input type='text' name="title" id="title" onChange={onChangeTitle} value={title} maxLength={20} pattern={"[a-zA-Z0-9]+[a-zA-Z0-9 ]+"} required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" id="description" value={description} onChange={onChangeDescription} maxLength={100} cols="30" rows="2" required></textarea>
                </div>
                <div>
                    <label>Due Date:</label>
                    <input type="date" id="duedate" value={date} onChange={onChangeDate} min={new Date().toISOString().split('T')[0]} name="duedate" required />
                </div>
                <div>
                    <label>Priority:</label>
                    <select name="priority" id="priority" value={priority} onChange={onChangePriority} required>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Low</option>
                    </select>
                </div>
                <div>
                    <input type="button" onClick={onSubmitData} name="submit" id="submit" value="Create / Add Task" />
                </div>
            </form>
        </div>
    );
}
