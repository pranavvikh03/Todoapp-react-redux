import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { logoutRemoveToken } from '../state/action-creators/index';

export default function Logout() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        localStorage.setItem("isLiveToken",false)
        localStorage.setItem("token","invalid")
        dispatch(logoutRemoveToken())         
    }, [dispatch]);

    return(
        <Navigate to="/login" replace={true}/>
    );
}
