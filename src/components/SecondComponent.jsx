import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {initForm as load} from './action'; 
import {injectIntl} from 'react-intl';


class SecondComponent extends React.PureComponent {

  render() {
   // load();
    const {handleSubmit, pristine, reset, submitting,initialValues} = this.props
    console.log("this.props.initialValues "+JSON.stringify(initialValues))
    return (
      <div>  
    <form onSubmit={handleSubmit}>
      <div>
        {/* <label>Name</label> */}
        <div>
          <Field
            name="firstName1"
            component="input"
           
          />
        </div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
          />
        </div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
    {/* <p>{JSON.stringify(initialValues)}</p> */}
    </div>
    )
  }

}

// const mapStateToProps = (state, props) => {
//     return {
//         initialValues: {firstName:state.first.formvalue}, // retrieve name from redux store 
//         }

// }

// SecondComponent = reduxForm({
//     form: 'initializeFromState',
//     enableReinitialize:true, // a unique identifier for this form
//   })(SecondComponent);

//   SecondComponent = connect(
//     state => ({
//       initialValues: state.first.formvalue, // pull initial values from account reducer
//     }),
//     { initForm: load }, // bind account loading action creator
//   )(SecondComponent);

  export default (
    reduxForm({
        form:'Initializeform',
    })(SecondComponent)
  );

// export default connect(
//   mapStateToProps
// )(reduxForm({
//    form: 'simple', // a unique identifier for this form
//   enableReinitialize: true
// })(SecondComponent))