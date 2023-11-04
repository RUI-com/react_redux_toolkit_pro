import React from 'react'

// Hooks with redux
import {useSelector,useDispatch} from 'react-redux';
//actions
import {incrase,decrase} from '../store/counterSlice'
import {login,logout} from '../store/authSlice'
const Counter = () => {
 const globalState = useSelector(state => state);

 const dispatch = useDispatch();
const counterHandler = (type,value) =>{
if (type === 'incrase'){
  dispatch(incrase(value))
}
else{
  dispatch(decrase(value))
}
}
 const LoggedIn =  () =>{
return globalState.ath.isLoggedIn
 }
 const LoggedInHandler = (status) => {
  if(status) {
    dispatch(logout());

  }else{
    dispatch(login());
  }
 }

  return (
    <div className="App">
   <div className='backgrounddiv'>
   <h1>Hello ReduxToolkit</h1>
   {LoggedIn()&& <>
    <div className='counter'>Counter:{globalState.counter.value}</div>
      <div>
        <button className='btn swit' onClick={() => counterHandler('incrase',5)} >+</button>
        <button className='btn swit' onClick={() => counterHandler('decrase',2) } >-</button>
      </div>
    </>
    }
   
   
     
      <div>
      <button className='btn log' onClick={() =>LoggedInHandler(LoggedIn()) }>
      {LoggedIn()? 'LOGOUT' : 'LOGIN'}
      </button>
      </div>
   </div>
    </div>
  );
}
export default Counter;
