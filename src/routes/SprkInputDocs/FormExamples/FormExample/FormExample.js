import React, { Component } from 'react';
import {
  SprkButton, SprkTextInput, sprkIsValidPhone, sprkFormatPhone,
} from '@sparkdesignsystem/spark-react';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      Phone: '',
      formattedPhone: '',
    };
    this.testFormValidity = this.testFormValidity.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  componentDidUpdate() {
    this.testFormValidity();
  }

  handlePhoneChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
      [`formatted${name}`]: sprkFormatPhone(value, true),
      [`${name}Valid`]: sprkIsValidPhone(value),
      [`${name}ErrorMessage`]: 'You have entered the wrong phone number.',
    });
  }

  testFormValidity() {
    const { isValid, PhoneValid } = this.state;
    const newValidity = PhoneValid;
    if (isValid !== newValidity) {
      this.setState({
        isValid: newValidity,
      });
    }
  }

  render() {
    const {
      Name,
      NameValid,
      NameErrorMessage,
      Email,
      EmailValid,
      EmailErrorMessage,
      Phone,
      PhoneValid,
      PhoneErrorMessage,
      formattedPhone,
      isValid,
    } = this.state;
    return (
      <form>
        <SprkTextInput
          onChange={this.handleNameChange}
          label="Name"
          name="Name"
          valid={NameValid}
          value={Name}
          placeholder="Enter your first name"
          errorMessage={NameErrorMessage}
        />
        <SprkTextInput
          onChange={this.handlePhoneChange}
          label="Phone Number"
          name="Phone"
          valid={PhoneValid}
          value={formattedPhone || Phone}
          placeholder="(313) 333-1234"
          errorMessage={PhoneErrorMessage}
        />
        <SprkTextInput
          onChange={this.handleEmailChange}
          label="Email"
          type="email"
          name="Email"
          valid={EmailValid}
          value={Email}
          placeholder="email@example.com"
          errorMessage={EmailErrorMessage}
        />
        <SprkButton type="button" isDisabled={!isValid}>
          Submit
        </SprkButton>
      </form>
    );
  }
}

export default FormExample;
