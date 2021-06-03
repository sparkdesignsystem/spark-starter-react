import React, { Component } from 'react';
import {
  SprkRevealInput,
  sprkIsValidSSN,
  sprkFormatSSN,
  SprkInputContainer,
  SprkLabel,
  SprkInput,
  SprkCheckboxItem
} from '@sparkdesignsystem/spark-react';

import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkRevealInputDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssn: '',
      showPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log('saving ' + name + ': ' + value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { ssn, showPassword } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Password Entry">
          <SprkInputContainer>
            <SprkLabel htmlFor="password-1">Password</SprkLabel>
            <SprkInput id="password-1" type="password" />
            <SprkCheckboxItem
              value={showPassword}
              isVisibilityToggle
              onChange={this.handleChange}
              name="showPassword"
            >
              Show Password
            </SprkCheckboxItem>
          </SprkInputContainer>

        </ExampleContainer>
        <ExampleContainer heading="SSN">
          <SprkRevealInput
            errorMessage="There is an error in this field."
            formatter={sprkFormatSSN}
            valid={sprkIsValidSSN(ssn)}
            value={ssn}
            onChange={this.handleChange}
            label="Social Security Number"
            toggleLabel="Show SSN"
            name="ssn"
          />
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SprkRevealInputDocs;
