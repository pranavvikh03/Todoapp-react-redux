import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editTask } from '../state/action-creators/index';
import { useSelector,useDispatch } from 'react-redux';

export default function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)

    //States
    const [title, settitle] = useState(tasks[id-1].Title);
    const [description, setdescription] = useState(tasks[id-1].Description);
    const [date, setdate] = useState(tasks[id-1].Due_Date);
    const [priority, setpriority] = useState(tasks[id-1].Priority);
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
                task_id:tasks[id-1].task_id,
                Description:description,
                Due_Date:date
            }
            console.log("New Data");
            let t1 = JSON.parse(localStorage.getItem("tasks"))
            t1[id-1].Description=description;
            t1[id-1].Due_Date=date;
            localStorage.setItem("tasks",JSON.stringify(t1));
            dispatch(editTask(temp))
            navigate("/", {replace:true}    )
        }
        else{
            alert("Fields should not be Blank");
        }
    }

    return(
        <div className="formContainer">
            <h1 style={{ textAlign: "center" }}>Edit Your Task</h1>
            <form>
                <div>
                    <label>Title</label>
                    <input type='text' name="title" id="title" onChange={onChangeTitle} value={title} maxLength={20} pattern={"[a-zA-Z0-9]+[a-zA-Z0-9 ]+"} disabled required />
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
                    <select name="priority" id="priority" value={priority} onChange={onChangePriority} disabled required>
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
