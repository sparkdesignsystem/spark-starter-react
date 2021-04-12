import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import { Route, Link } from 'react-router-dom';
import FormExamples from '../SprkInputDocs/FormExamples/FormExamples';
import SprkTextInputDocs from '../SprkInputDocs/SprkTextInputDocs/SprkTextInputDocs';
import SprkSelectionInputDocs from '../SprkInputDocs/SprkSelectionInputDocs/SprkSelectionInputDocs';
import SprkRevealInputDocs from '../SprkInputDocs/SprkRevealInputDocs/SprkRevealInputDocs';
import SprkDatePickerInputDocs from '../SprkInputDocs/SprkDatePickerInputDocs/SprkDatePickerInputDocs';

const Homepage = () => {
  return (
    <CentralColumnLayout>
      <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">What's New in Spark React version 5.0.0</h1>
      <h2 className="sprk-b-TypeDisplayThree sprk-u-mvl">Formatters and Validators</h2>
      <p className="sprk-u-mvl">Input formatters and validators have been added to the spark-react package. You can see examples of these utilities in action on the Inputs example pages.</p>
      <ul className="sprk-u-mbl">
        <li>
          <Link to="/input/text-input">
            Text Input
        </Link>
        </li>
        <li>
          <Link to="/input/selection-input">
            Selection Input
        </Link>
        </li>
        <li>
          <Link to="/input/reveal-input">
            Reveal Input
        </Link>
        </li>
        <li>
          <Link to="/input/datepicker">
            DatePicker
        </Link>
        </li>
        <li>
          <Link to="/input/forms">
            Form Examples
        </Link>
        </li>
      </ul>
      <Route path="/input/forms" component={FormExamples} />
      <Route path="/input/text-input" component={SprkTextInputDocs} />
      <Route path="/input/selection-input" component={SprkSelectionInputDocs} />
      <Route path="/input/reveal-input" component={SprkRevealInputDocs} />
      <Route path="/input/datepicker" component={SprkDatePickerInputDocs} />
    </CentralColumnLayout>
  );
};
export default Homepage;
