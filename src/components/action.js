 const redux = require('redux');
 const createStore = redux.createStore;
 const BUY_CAKE = 'BUY_CAKE';
 const BUY_CAKE1 = 'BUY_CAKE1';

 export const buycake = () => {
    return {
        type : BUY_CAKE,
        info : 'first redux action',
    }
 }

 export const buycake1 = () => {
    return {
        type : BUY_CAKE1,
        info : 'first redux action',
    }
 }


 const initialState = {
    numberOfcake : 10
 }
 
 export const initForm = () =>{
  
      return {
         type : 'FORM INITIALIZE',
         info : 'FORM Init'
      }

 }
 export function value(){
  //const store = createStore(reducer1);
//  console.log("Initial state "+store.getState().numberOfcake)
//  store.dispatch(buycake())
//  store.dispatch(buycake())
//  store.dispatch(buycake())
//  console.log("Initial state "+store.getState().numberOfcake);
//  return store.getState().numberOfcake;
 }