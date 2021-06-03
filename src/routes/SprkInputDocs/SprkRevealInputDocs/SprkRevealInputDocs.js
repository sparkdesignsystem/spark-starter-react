import React, { Component } from 'react';
import {
  sprkIsValidSSN,
  sprkFormatSSN,
  SprkInputContainer,
  SprkLabel,
  SprkInput,
  SprkCheckboxItem,
  SprkFieldError,
  SprkIcon,
} from '@sparkdesignsystem/spark-react';

import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkRevealInputDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ssn: '',
      showPassword: false,
      showSSN: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.toggleSSN = this.toggleSSN.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  togglePassword() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }

  toggleSSN() {
    this.setState((prevState) => ({
      showSSN: !prevState.showSSN,
    }));
  }

  render() {
    const { ssn, showPassword, showSSN } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Password Entry">
          <SprkInputContainer>
            <SprkLabel>Password</SprkLabel>
            <SprkInput
              type={showPassword ? 'text' : 'password'}
            />
            <SprkCheckboxItem
              checked={showPassword}
              isVisibilityToggle
              onChange={this.togglePassword}
              name="showPassword"
            >
              Show Password
            </SprkCheckboxItem>
          </SprkInputContainer>

        </ExampleContainer>
        <ExampleContainer heading="SSN">
          {/* <SprkRevealInput
            errorMessage="There is an error in this field."
            formatter={sprkFormatSSN}
            valid={sprkIsValidSSN(ssn)}
            value={ssn}
            onChange={this.handleChange}
            label="Social Security Number"
            toggleLabel="Show SSN"
            name="ssn"
          /> */}
        </ExampleContainer>


        <SprkInputContainer>
          <SprkLabel>Social Security Number</SprkLabel>
          <SprkInput
            type={showSSN ? 'text' : 'password'}
            value={ssn}
            isValid={sprkIsValidSSN(ssn)}
            onChange={this.handleChange}
            name="ssn"
          />
          <SprkCheckboxItem
            checked={showSSN}
            isVisibilityToggle
            onChange={this.toggleSSN}
            name="showSSN"
          >
            Show SSN
            </SprkCheckboxItem>
            {/* formatting */}
            { !sprkIsValidSSN(ssn) &&
              <SprkFieldError id="invalid-date">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
        </SprkInputContainer>

      </React.Fragment>
    );
  }
}

export default SprkRevealInputDocs;
