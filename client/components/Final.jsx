import React, { useState } from "react";
import Stepper from 'react-stepper-horizontal';

export default function Final() {
    const steps = [
        { title: 'Request submitted' },
        { title: 'Confirmation' },
        { title: 'Advance Payment' },
        { title: 'Planning' },
        { title: 'Organising' },
        { title: 'Follow up and insights' },
      ];
      const activeStep = 0;
    
      return (<>
        <h1 className="request">We are processing your request, Someone from our team will get back to you shortly</h1>
        <div className="step">
            
          <Stepper
            steps={steps}
            activeStep={activeStep}/>
        </div>
      </>);
}


