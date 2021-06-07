import React, { Component } from 'react';
import {
  SprkInputContainer,
  SprkLabel,
  SprkIcon,
  SprkFieldError,
  SprkDatePicker,
  sprkIsValidDate,
  sprkFormatDate,
}
  from '@sparkdesignsystem/spark-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkDatePickerInputDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { date } = this.state;
    return (
      <React.Fragment>
        <ExampleContainer heading="Text">
          <SprkInputContainer>
            <div className="sprk-b-InputContainer__icon-container">
              <SprkLabel htmlFor="datepicker-1">Date</SprkLabel>
              <SprkIcon
                iconName="calendar"
                additionalClasses="
                  sprk-c-Icon--stroke-current-color
                  sprk-b-InputContainer__icon"
                aria-hidden="true"
              />
              <SprkDatePicker
                id="datepicker-1"
                placeholder="MM/DD/YYYY"
                isValid={sprkIsValidDate(date)}
                value={date}
                onChange={this.handleChange}
                name="date"
                formatter={sprkFormatDate}
              />
            </div>
            { !sprkIsValidDate(date) &&
              <SprkFieldError id="invalid-monetary">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
          </SprkInputContainer>

        </ExampleContainer>

      </React.Fragment>
    );
  }
}

export default SprkDatePickerInputDocs;
