import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate,  useNavigate,  useParams } from 'react-router-dom';
import { deleteTask } from '../state/action-creators/index';

export default function Delete() {
    const navigate = useNavigate();
    const token = useSelector(state => state.token)
    if(token==="invalid")
    {
        navigate("/login",{replace:true})
    }
    const { id } = useParams();
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks)
    let temp2 = JSON.parse(localStorage.tasks);
    temp2.splice((id-1),1);
    console.log(temp2)
    localStorage.setItem("tasks",JSON.stringify(temp2))
    dispatch(deleteTask(id))
    console.log(tasks)
    return(
        <Navigate to="/" replace={true}/>
    );
}

