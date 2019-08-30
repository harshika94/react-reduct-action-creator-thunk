export const ageUpAsync = (val)=>{
  return{
    type:"age-up",value:val
  }
}

export const ageUp = (val)=>{
  return dispach =>{
    console.log('harshika',dispach);
    setTimeout(()=>{
        dispach(ageUpAsync(val));
    },5000)
  }
}

export const ageDown = (val)=>{
  return{
    type:"age-down",value:val
  }
}