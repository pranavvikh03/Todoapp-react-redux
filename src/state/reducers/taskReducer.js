const taskReducer = (state=[],action) => {
    if(action.type === 'addTask')
    {
        state.push(action.payload)
        return state;
    }
    else if(action.type === 'clearTasks')
    {
        state.splice(0,state.length)
        return state;
    }
    else if(action.type === 'deleteTask')
    {
        state.splice((action.payload-1),1)
        return state;
    }
    else if(action.type === 'editTask')
    {
        state[action.payload.task_id - 1].Description = action.payload.Description;
        state[action.payload.task_id - 1].Due_Date = action.payload.Due_Date;
        return state;
    }
    else
    {
        return state;
    }
}

export default taskReducer;