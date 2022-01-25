export const loginAddToken = (token) =>{
    return(dispatch) => {
        dispatch({
            type:'loginAddToken',
            payload: token
        })
    }
}

export const logoutRemoveToken = () =>{
    return(dispatch) => {
        dispatch({
            type:'logoutRemoveToken',
            payload: 'invalid'
        })
    }
}

export const addTask = (task) => {
    return(dispatch) => {
        dispatch({
            type:'addTask',
            payload:task
        })
    }
}

export const deleteTask = (taskId) => {
    return(dispatch) => {
        dispatch({
            type:'deleteTask',
            payload:taskId
        })
    }
}

export const clearTasks = (tasks) => {
    return(dispatch) => {
        dispatch({
            type:'clearTasks',
            payload:tasks
        })
    }
}

export const editTask = (updated_task) => {
    return(dispatch) => {
        dispatch({
            type:'editTask',
            payload:updated_task
        })
    }
}