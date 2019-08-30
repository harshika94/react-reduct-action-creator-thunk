import React,{Component} from 'react';
import{connect} from 'react-redux';
import * as actionCreator from './actions/action';

class Hello extends Component{
  consructor(props){
    super(props);
  }
    render(){
      console.log('third',this.props);
      return(
        <div><h1>Reducers with Thunk</h1>
        Your age 
          <span>
            {this.props?this.props.age.age:''}
          </span>
          <div>
              <button onClick={this.props.onAgeUp}>Increment</button>
              <button onClick={this.props.onAgeDown}>Decrement</button>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state)=>{
  console.log('second',state);
  return{
    age:state
  }
}

const mapDispatchToProps=(dispatch)=>{
  console.log('fourth',dispatch);
  return{
    onAgeUp:()=>dispatch(actionCreator.ageUp(1)),
    onAgeDown:()=>dispatch(actionCreator.ageDown(1))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);