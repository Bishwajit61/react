import React from 'react';
import {
    BpmnModeler,
    CustomBpmnJsModeler,
    Event,
    isContentSavedEvent
 } from "@miragon/camunda-web-modeler";

class CamundaModelor extends React.Component{

    xml = "xncdn";
render(){
    
    return(

    <div>
        <h2>Camunda modelor</h2>
        <div style={{
         height: "100vh"
      }}>
         <BpmnModeler
            xml={this.xml}
         />
      </div>
    </div>
    );
}

}
export default CamundaModelor;