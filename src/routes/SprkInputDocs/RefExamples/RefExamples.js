import React, { Component } from 'react';
import {
  SprkInputContainer,
  SprkLabel,
  SprkInput,
  SprkIcon,
  SprkFieldError,
  SprkHelperText,
  SprkDatePicker,
  sprkIsValidMonetary,
  sprkFormatMonetary,
  SprkTextareaContainer,
  SprkTextarea,
  SprkSelect,
  sprkIsValidDate,
}
  from '@sparkdesignsystem/spark-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class RefExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textControlled: '',
      textUncontrolled: '',
      monetaryControlled: '',
      monetaryUncontrolled: '',
      textareaUncontrolled: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.uncontrolledTextChanged = this.uncontrolledTextChanged.bind(this);
    this.uncontrolledMonetaryChanged = this.uncontrolledMonetaryChanged.bind(this);
    this.uncontrolledTextareaChanged = this.uncontrolledTextareaChanged.bind(this);
    this.uncontrolledSelectChanged = this.uncontrolledSelectChanged.bind(this);
    this.uncontrolledDatepickerChanged = this.uncontrolledDatepickerChanged.bind(this);
    this.uncontrolledTextRef = React.createRef();
    this.uncontrolledMonetaryRef = React.createRef();
    this.uncontrolledTextareaRef = React.createRef();
    this.uncontrolledSelectRef = React.createRef();
    this.uncontrolledDatepickerRef = React.createRef();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  uncontrolledTextChanged() {
    const value = this.uncontrolledTextRef.current.value;
    this.setState({ textUncontrolled: value });
  }

  uncontrolledMonetaryChanged() {
    const value = this.uncontrolledMonetaryRef.current.value;
    this.setState({ monetaryUncontrolled: value });
  }

  uncontrolledTextareaChanged() {
    const value = this.uncontrolledTextareaRef.current.value;
    this.setState({ textareaUncontrolled: value });
  }

  uncontrolledSelectChanged() {
    const value = this.uncontrolledSelectRef.current.value;
    this.setState({ selectUncontrolled: value });
  }

  uncontrolledDatepickerChanged() {
    const value = this.uncontrolledDatepickerRef.current.value;
    this.setState({ dateUncontrolled: value });
  }

  render() {
    const {
      textControlled,
      textUncontrolled,
      monetaryControlled,
      monetaryUncontrolled,
      textareaUncontrolled,
      selectUncontrolled,
      dateUncontrolled,
    } = this.state;

    return (
      <React.Fragment>
        <ExampleContainer heading="Controlled">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput
              type="text"
              name="textControlled"
              value={textControlled}
              onChange={this.handleChange}
            />
            <SprkHelperText>This value is stored in state in a React component and is updated using props and callbacks on the input.</SprkHelperText>
            <SprkHelperText>The current value is: {textControlled}</SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Uncontrolled">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput type="text" forwardedRef={this.uncontrolledTextRef} onKeyUp={this.uncontrolledTextChanged} />
            <SprkHelperText>This value is stored in state internal to the DOM input and is updated using a ref on the input.</SprkHelperText>
            <SprkHelperText>The current value is: <>{textUncontrolled}</></SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Monetary Controlled">
          <SprkInputContainer>
            <div
              className="
                sprk-b-InputContainer__icon-container
                sprk-b-TextInputIconContainer--has-text-icon"
            >
              <SprkLabel isMonetary htmlFor="monetary-1">
                Payment
              </SprkLabel>
              <SprkInput
                additionalClasses="sprk-b-TextInput--has-text-icon"
                id="monetary-1"
                name="monetaryControlled"
                placeholder="0.00"
                isValid={sprkIsValidMonetary(monetaryControlled)}
                value={monetaryControlled}
                onChange={this.handleChange}
                // TODO This currently does not work because the formatter updates the
                // value internally in the component but does not trigger onChange, so that
                // new value is never bubbled up to the parent. Can be fixed by adding a new callback
                // prop or maybe by calling onChange directly from SprkInput.
                formatter={sprkFormatMonetary}
              />
            </div>
            <SprkHelperText>The current value is: <>{monetaryControlled}</></SprkHelperText>
            {!sprkIsValidMonetary(monetaryControlled) &&
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
        <ExampleContainer heading="Monetary Uncontrolled">
          <SprkInputContainer>
            <div
              className="
                sprk-b-InputContainer__icon-container
                sprk-b-TextInputIconContainer--has-text-icon"
            >
              <SprkLabel isMonetary>
                Payment
              </SprkLabel>
              <SprkInput
                additionalClasses="sprk-b-TextInput--has-text-icon"
                name="monetaryUncontrolled"
                placeholder="0.00"
                isValid={sprkIsValidMonetary(monetaryUncontrolled)}
                onKeyUp={this.uncontrolledMonetaryChanged}
                forwardedRef={this.uncontrolledMonetaryRef}
                // TODO This is currently not working. Formatters are set up to look at
                // props.value, which is undefined in an uncontrolled component.
                // A workaround for both is to not use the `formatter` prop and instead
                // use the util function in your own onBlur. This is how this file was set up
                // previously, but it's not "the spark way".
                formatter={sprkFormatMonetary}
              />
            </div>
            {!sprkIsValidMonetary(monetaryUncontrolled) &&
              <SprkFieldError>
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
            <SprkHelperText>The current value is: <>{monetaryUncontrolled}</></SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Textarea">
          <SprkTextareaContainer>
            <SprkLabel>Message</SprkLabel>
            <SprkTextarea
              onKeyUp={this.uncontrolledTextareaChanged}
              forwardedRef={this.uncontrolledTextareaRef}
            />
            <SprkHelperText>The current value is: <>{textareaUncontrolled}</></SprkHelperText>
          </SprkTextareaContainer>
        </ExampleContainer>
        <ExampleContainer heading="Select">
          <SprkInputContainer>
            <SprkLabel>Select Label</SprkLabel>
            <SprkSelect
              choices={selectChoices}
              onChange={this.uncontrolledSelectChanged}
              // This is not currently working because SprkSelect does not have a forwardedRef
              // prop. Internally it uses its own ref in that spot to do Huge logic.
              // forwardedRef={this.uncontrolledSelectRef}
            />
            <SprkIcon
              iconName="chevron-down"
              aria-hidden="true"
              additionalClasses="
                sprk-c-Icon--filled-current-color
                sprk-c-Icon--stroke-current-color
                sprk-b-SelectContainer__icon
              "
            />
            <SprkHelperText>The current value is: <>{selectUncontrolled}</></SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Date Picker">
        <SprkInputContainer>
            <div className="sprk-b-InputContainer__icon-container">
              <SprkLabel>Date</SprkLabel>
              <SprkIcon
                iconName="calendar"
                additionalClasses="
                  sprk-c-Icon--stroke-current-color
                  sprk-b-InputContainer__icon"
                aria-hidden="true"
              />
              <SprkDatePicker
                isValid={sprkIsValidDate(dateUncontrolled)}
                onChange={this.handleChange}
                // This is not currently working because SprkSelect does not have a forwardedRef
                // prop. Internally it uses its own ref in that spot for tiny datepicker config.
                // forwardedRef={this.uncontrolledDatepickerRef}
              />
            </div>
            { !sprkIsValidDate(dateUncontrolled) &&
              <SprkFieldError id="invalid-monetary">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
            <SprkHelperText>The current value is: <>{dateUncontrolled}</></SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
      </React.Fragment>
    );
  }
}

export default RefExamples;

const selectChoices = [
  {
    label: 'Item 1',
    value: 'item-1',
  },
  {
    label: 'Item 2',
    value: 'item-2',
  },
  {
    label: 'Grouped Options',
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2 With A Longer Label',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
    ],
  },
  {
    label: 'Item 3',
    value: 'item-3',
  },
];