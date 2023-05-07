const initialState = {
    numberOfcake : 10
 }

 const secondReducer = (state = initialState,action) =>{

    switch(action.type){
        case 'BUY_CAKE1':
            return {
                
                numberOfcake:state.numberOfcake+1,
            };

         default: return state; 

    }

 }

 export default secondReducer;
