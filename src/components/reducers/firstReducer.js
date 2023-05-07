const initialState = {
    formvalue:{
        firstName: "Jane",
        lastName: "Doe",
        email:"abc@gmail.com",
        
},

numberOfcake : 10,

 }


 const firstReducer = (state = initialState,action) =>{

    switch(action.type){
        case 'BUY_CAKE':
            return {
                
                numberOfcake:state.numberOfcake-1,
            };
        case 'BUY_CAKE1':
                return {
                    
                    numberOfcake:state.numberOfcake+1,
                };    

        case 'FORM INITIALIZE':
            return {

                formvalue:state.formvalue,
               // numberOfcake:state.numberOfcake-1,
            };  

         default: return state; 

    }

 }

 export default firstReducer;
