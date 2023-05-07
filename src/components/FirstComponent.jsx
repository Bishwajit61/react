import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch} 
        from "react-router-dom";   
        import { Button } from '@material-ui/core'; 
import {buycake, value,buycake1,initForm} from './action';                       
import { getValue } from '@testing-library/user-event/dist/utils';
import CamundaModelor from './CamundaModelor';
import SecondComponent from '../components/SecondComponent';

class FirstComponent extends React.Component{


  state = {
    visible:false,
  }

    btnclick = () =>{
       this.props.buycake();
       //this.props.initForm();
    }

    btnclick1 = () =>{
        this.props.buycake1();
     }


     handleSubmit = (values) =>{
     // event.preventDefault();
      alert("wert")
   console.log(JSON.stringify(values))
     }

     componentDidMount(){
      this.props.initForm();
      this.setState({visible:true})
     
     }

     initValues(){
      const {firstName,lastName,email} = this.props.formvalue;
      const firstName1=firstName
     return{
      firstName1,
      lastName,
      email
     };

    }

    render(){
      console.log("hiii"+JSON.stringify(this.props.first))
        return (
            <div className ="class1">
              
               {/* <li><Link to ="/second">Second</Link></li> */}
               {/* <h1>Number of cake is {this.props.first.numberOfcake}</h1>
               <h1>Number of cake is {this.props.second.numberOfcake}</h1> */}
               <Button class = 'primary' onClick={this.btnclick}>Button+ </Button>
               <Button onClick={this.btnclick1}>Button-</Button>
              {this.state.visible &&<SecondComponent onSubmit={this.handleSubmit} initialValues={this.initValues()}/>}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        // first:state,
        // second:state.second,
        formvalue:state.first.formvalue,
    }
}

const mapDispatchToProps = (dispatch) =>{
     return{
        // buycake: () => dispatch(buycake()),
        // buycake1:() => dispatch(buycake1()),
        initForm:()=> dispatch(initForm())
     };
}
// export default connect(mapStateToProps) (FirstComponent);

// FirstComponent = reduxForm({
//     // a unique name for the form
//     form: 'contact'
//   })(FirstComponent)
  
export default connect(mapStateToProps,mapDispatchToProps)(FirstComponent);