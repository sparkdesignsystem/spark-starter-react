import React, { Component } from 'react';
import { SprkDatePickerInput, sprkIsValidDate, sprkFormatDate }
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
          <SprkDatePickerInput
            formatter={sprkFormatDate}
            label="Date"
            name="date"
            placeholder="01/01/2019"
            valid={sprkIsValidDate(date)}
            value={date}
            onChange={this.handleChange}
            errorMessage="Incorrect date."
          />
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default SprkDatePickerInputDocs;