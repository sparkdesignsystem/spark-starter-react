import React from 'react';
import { SprkTextInput } from '@sparkdesignsystem/spark-react';
import {
  sprkIsValidPhone,
  sprkIsValidDate,
  sprkFormatDate,
  sprkFormatPhone,
  sprkIsValidMonetary,
  sprkFormatMonetary,
} from '@sparkdesignsystem/spark-react/src/spark-exports-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

// const isValidPhone = () => {};
// const isValidDate = () => {};
// const formatDate = () => {};
// const formatPhone = () => {};
// const isValidMonetary = () => {};
// const formatMonetary = () => {};

class SprkTextInputDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      phone: '',
      monetary: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMonetaryBlur = this.handleMonetaryBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleMonetaryBlur({ target }) {
    const { value } = target;
    this.setState({
      monetary: sprkIsValidMonetary(value) ? sprkFormatMonetary(value) : value,
    });
  }

  render() {
    const { date, phone, monetary } = this.state;
    return (
      <>
        <ExampleContainer heading="Text">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text With Default Value">
          <SprkTextInput
            label="Name"
            name="Name"
            defaultValue="default value"
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Input Disabled">
          <SprkTextInput
            label="Name"
            name="Name"
            disabled
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Input - Error">
          <SprkTextInput
            label="Name"
            name="Name"
            valid={false}
            placeholder="Enter your first name"
            errorMessage="There is an error on this field."
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
            type="hugeTextInput"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge - Error">
          <SprkTextInput
            label="Name"
            name="Name"
            type="hugeTextInput"
            valid={false}
            placeholder="Enter your first name"
            errorMessage="There is an error on this field."
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge - Disabled">
          <SprkTextInput
            type="hugeTextInput"
            label="Text Input Label"
            name="text-input-label"
            valid={true}
            disabled
            errorMessage="There is an error on this field."
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge With Default Value">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
            type="hugeTextInput"
            defaultValue="Default Value"
          />
        </ExampleContainer>
        <ExampleContainer heading="Text Huge Hidden Label">
          <SprkTextInput
            label="Name"
            name="Name"
            placeholder="Enter your first name"
            type="hugeTextInput"
            hiddenLabel
          />
        </ExampleContainer>
        <ExampleContainer heading="Text with Helper">
          <SprkTextInput
            label="Name"
            name="Name"
            helperText="Optional helper text."
            placeholder="Enter your first name"
          />
        </ExampleContainer>
        <ExampleContainer heading="Textarea">
          <SprkTextInput
            label="Message"
            name="Message"
            type="textarea"
            placeholder="Enter your message..."
          />
        </ExampleContainer>
        <ExampleContainer heading="Search">
          <SprkTextInput label="Search" name="Search" placeholder="Search" />
        </ExampleContainer>
        <ExampleContainer heading="Inline Search">
          <SprkTextInput
            leadingIcon="search"
            hiddenLabel
            name="InlineSearch"
            placeholder="Search"
          />
        </ExampleContainer>
        <ExampleContainer heading="Monetary">
          <SprkTextInput
            label="Money Amount"
            textIcon
            name="monetary"
            valid={sprkIsValidMonetary(monetary)}
            value={monetary}
            onChange={this.handleChange}
            onBlur={this.handleMonetaryBlur}
            placeholder="0.00"
            errorMessage="Enter valid monetary amount."
          />
        </ExampleContainer>
        <ExampleContainer heading="Percentage">
          <SprkTextInput
            label="Percentage"
            iconRight
            leadingIcon="percent"
            narrowWidth
            name="percentage"
            type="tel"
          />
        </ExampleContainer>
        <ExampleContainer heading="Phone Number">
          <SprkTextInput
            label="Phone Number"
            name="phone"
            placeholder="(000) 000-0000"
            valid={sprkIsValidPhone(phone)}
            value={
              sprkIsValidPhone(phone) && sprkFormatPhone(phone)
                ? sprkFormatPhone(phone)
                : phone
            }
            onChange={this.handleChange}
            errorMessage="Incorrect phone number."
          />
        </ExampleContainer>
        <ExampleContainer heading="Date (no picker)">
          <SprkTextInput
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
      </>
    );
  }
}

export default SprkTextInputDocs;
