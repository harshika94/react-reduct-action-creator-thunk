const initialState = {
  age:20
}

const reducer = (state=initialState,action)=>{
      console.log("fitst","hi");
      const newState = {...state}
      switch(action.type){
        case 'age-up':
        newState.age=newState.age+action.value;
        break;
        case 'age-down':
        newState.age=newState.age-action.value;
        break;
        default:
        break;
      }
      return newState
}

export default reducer;