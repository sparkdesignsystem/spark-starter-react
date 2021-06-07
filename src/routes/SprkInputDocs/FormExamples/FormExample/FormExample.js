import React, { Component } from 'react';
import {
  SprkButton,
  SprkInputContainer,
  SprkLabel,
  SprkInput,
  sprkIsValidPhone,
  sprkFormatPhone,
  SprkFieldError,
  SprkIcon,
} from '@sparkdesignsystem/spark-react';

class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      Phone: '',
      Name: '',
      Email: '',
    };
    this.testFormValidity = this.testFormValidity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    this.testFormValidity();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  testFormValidity() {
    const { isValid, Phone } = this.state;
    const newValidity = sprkIsValidPhone(Phone);

    if (isValid !== newValidity) {
      this.setState({
        isValid: newValidity,
      });
    }
  }

  render() {
    const {
      Name,
      Email,
      Phone,
      isValid,
    } = this.state;
    return (
      <form>
        <SprkInputContainer>
          <SprkLabel>Name</SprkLabel>
          <SprkInput
            type="text"
            placeholder="Enter your first name"
            name="Name"
            onChange={this.handleChange}
            value={Name}
            id="text1"
          />
        </SprkInputContainer>
        <SprkInputContainer>
          <SprkLabel htmlFor="phone-1">Phone Number</SprkLabel>
          <SprkInput
            id="phone-1"
            placeholder="(000) 000-0000"
            type="tel"
            name="Phone"
            isValid={sprkIsValidPhone(Phone)}
            value={Phone}
            onChange={this.handleChange}
            formatter={sprkFormatPhone}
          />
          { !sprkIsValidPhone(Phone) &&
            <SprkFieldError id="invalid-phone">
              <SprkIcon
                iconName="exclamation-filled"
                additionalClasses="sprk-b-ErrorIcon"
                aria-hidden="true"
              />
              <div className="sprk-b-ErrorText">There is an error on this field.</div>
            </SprkFieldError>
          }
        </SprkInputContainer>
        <SprkInputContainer>
          <SprkLabel>Email</SprkLabel>
          <SprkInput
            type="email"
            placeholder="email@example.com"
            name="Email"
            onChange={this.handleChange}
            value={Email}
            id="email"
          />
        </SprkInputContainer>

        <SprkButton type="button" isDisabled={!isValid}>
          Submit
        </SprkButton>
      </form>
    );
  }
}

export default FormExample;
