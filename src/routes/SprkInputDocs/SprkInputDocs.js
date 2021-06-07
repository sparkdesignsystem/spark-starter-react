import React from 'react';
import { Route, Link } from 'react-router-dom';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import FormExamples from './FormExamples/FormExamples';
import SprkTextInputDocs from './SprkTextInputDocs/SprkTextInputDocs';
import SprkSelectionInputDocs from './SprkSelectionInputDocs/SprkSelectionInputDocs';
import SprkRevealInputDocs from './SprkRevealInputDocs/SprkRevealInputDocs';
import SprkDatePickerInputDocs from './SprkDatePickerInputDocs/SprkDatePickerInputDocs';
import RefExamples from './RefExamples/RefExamples';

const SprkInputDocs = () => (
  <CentralColumnLayout>
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
      <li>
        <Link to="/input/refs">
          Ref Examples
        </Link>
      </li>
    </ul>
    <Route path="/input/forms" component={FormExamples} />
    <Route path="/input/text-input" component={SprkTextInputDocs} />
    <Route path="/input/selection-input" component={SprkSelectionInputDocs} />
    <Route path="/input/reveal-input" component={SprkRevealInputDocs} />
    <Route path="/input/datepicker" component={SprkDatePickerInputDocs} />
    <Route path="/input/refs" component={RefExamples} />
  </CentralColumnLayout>
);

export default SprkInputDocs;
