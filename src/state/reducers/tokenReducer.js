const tokenReducer = (state="invalid", action) => {
    if(action.type==='loginAddToken')
    {
        state = action.payload;
        return state;
    }
    else if(action.type==='logoutRemoveToken')
    {
        state = action.payload;
        return state;
    }
    else
    {
        return state;
    }
}

export default tokenReducer;