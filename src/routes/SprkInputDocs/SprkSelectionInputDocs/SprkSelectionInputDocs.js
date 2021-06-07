import React from 'react';
import {
  SprkSelectionInput,
  SprkFieldset,
  SprkLegend,
  SprkCheckboxItem,
  SprkCheckboxGroup,
  SprkRadioGroup,
  SprkRadioItem,
  SprkInputContainer,
  SprkLabel,
  SprkSelect,
  SprkIcon,
  SprkFieldError,
  SprkHelperText,
} from '@sparkdesignsystem/spark-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

function SprkSelectionInputDocs() {
  const radioChoices = [
    {
      label: 'Radio Item 1',
      name: 'radio-input',
      value: 'item-1',
      defaultChecked: true,
    },
    {
      label: 'Radio Item 2',
      name: 'radio-input',
      value: 'item-2',
    },
  ];

  const radioChoices1 = [
    {
      label: 'Radio Item 1',
      name: 'radio-input-1',
      value: 'item-1',
      defaultChecked: true,
    },
    {
      label: 'Radio Item 2',
      name: 'radio-input-1',
      value: 'item-2',
    },
  ];

  const checkBoxChoices = [
    {
      label: 'Checkbox Item 1',
      name: 'checkbox-input',
      value: 'item-1',
    },
    {
      label: 'Checkbox Item 2',
      name: 'checkbox-input',
      value: 'item-2',
      defaultChecked: true,
    },
  ];

  const checkBoxChoicesOnChange = [
    {
      label: 'Checkbox Item 1',
      name: 'checkbox-input',
      value: 'item-1',
      onChange: () => {
        console.log('item 1 onChange handler');
      },
    },
    {
      label: 'Checkbox Item 2',
      name: 'checkbox-input',
      value: 'item-2',
      defaultChecked: true,
    },
  ];

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

  const selectNotRequired = [
    {
      label: 'Please select...',
      value: '',
    },
    {
      label: 'Item 2',
      value: 'item-2',
    },
    {
      label: 'Item 3',
      value: 'item-3',
    },
  ];

  return (
    <>
      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Checkbox</h1>

      <ExampleContainer heading="Checkbox">
        <SprkCheckboxGroup>
          <SprkFieldset>
            <SprkLegend>Group Label Name</SprkLegend>
            <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
            <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
            <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
          </SprkFieldset>
        </SprkCheckboxGroup>
      </ExampleContainer>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Huge Group Label Name</SprkLegend>
          <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Checkbox (Deprecated)</h1>

      <ExampleContainer heading="Checkbox">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox With onChange">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoicesOnChange}
          variant="checkbox"
          name="checkbox-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox - Error">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
          valid={false}
          errorMessage="There is an error on this field."
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox - Disabled">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
          disabled
        />
      </ExampleContainer>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Radio</h1>

      <SprkRadioGroup>
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkRadioItem name="radio">Radio Item 1</SprkRadioItem>
          <SprkRadioItem name="radio">Radio Item 2</SprkRadioItem>
          <SprkRadioItem name="radio">Radio Item 3</SprkRadioItem>
        </SprkFieldset>
      </SprkRadioGroup>

      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 1
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 2
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 3
          </SprkRadioItem>
        </SprkFieldset>
      </SprkRadioGroup>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Radio (Deprecated)</h1>

      <ExampleContainer>
        <SprkSelectionInput
          groupLabel="Legend Label"
          choices={radioChoices1}
          variant="radio"
          name="radio-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Radio - Disabled">
        <SprkSelectionInput
          groupLabel="Radio Input Disabled"
          choices={radioChoices}
          variant="radio"
          name="radio-input"
          disabled
        />
      </ExampleContainer>

      <ExampleContainer heading="Radio - Error">
        <SprkSelectionInput
          groupLabel="Radio Error"
          choices={radioChoices}
          variant="radio"
          name="radio-input"
          valid={false}
          errorMessage="There is an error on this field."
        />
      </ExampleContainer>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Select Box</h1>

      <ExampleContainer>
        <SprkInputContainer>
          <SprkLabel htmlFor="default-select">Select Box Label</SprkLabel>
          <SprkSelect
            id="default-select"
            choices={selectChoices}
            name="select"
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
        </SprkInputContainer>
      </ExampleContainer>

      <ExampleContainer heading="Select - Error ">
        <SprkInputContainer>
          <SprkLabel htmlFor="invalid-select">Select Box Label</SprkLabel>
          <SprkSelect
            id="invalid-select"
            choices={selectChoices}
            name="select"
            isValid={false}
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
          <SprkFieldError>
            <SprkIcon
              iconName="exclamation-filled"
              additionalClasses="sprk-b-ErrorIcon"
              aria-hidden="true"
            />
            <div className="sprk-b-ErrorText">There is an error on this field.</div>
          </SprkFieldError>
        </SprkInputContainer>
      </ExampleContainer>

      <ExampleContainer heading="Select - Disabled ">
        <SprkInputContainer>
          <SprkLabel isDisabled htmlFor="disabled-select">Select Box Label</SprkLabel>
          <SprkSelect
            id="disabled-select"
            choices={selectNotRequired}
            name="disabled-select"
            isDisabled
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
        </SprkInputContainer>
      </ExampleContainer>

      <ExampleContainer heading="Select With Helper And Default Option Of Item 2">
        <SprkInputContainer>
          <SprkLabel htmlFor="select-with-helper">Select Box Label</SprkLabel>
          <SprkSelect
            id="select-with-helper"
            choices={selectChoices}
            name="select-with-helper"
            defaultValue="item-2"
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
          <SprkHelperText>
            Optional helper text.
          </SprkHelperText>
        </SprkInputContainer>
      </ExampleContainer>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Select Huge</h1>

      <ExampleContainer>
        <SprkInputContainer variant="huge">
          <SprkSelect
            id="huge-select"
            choices={selectChoices}
            variant="huge"
            name="select-huge"
          />
          <SprkLabel htmlFor="huge-select">Huge Select Box Label</SprkLabel>
          <SprkIcon
            iconName="chevron-down"
            aria-hidden="true"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
              sprk-b-SelectContainer__icon
            "
          />
          <SprkHelperText>Optional helper text.</SprkHelperText>
        </SprkInputContainer>
      </ExampleContainer>

      <ExampleContainer heading="Select Huge Error">
        <SprkInputContainer variant="huge">
          <SprkSelect
            id="select-huge-invalid"
            choices={selectChoices}
            variant="huge"
            name="select-huge-invalid"
            isValid={false}
          />
          <SprkLabel htmlFor="select-huge-invalid">Huge Select Box Label</SprkLabel>
          <SprkIcon
            iconName="chevron-down"
            aria-hidden="true"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
              sprk-b-SelectContainer__icon
            "
          />
          <SprkFieldError id="select-huge-invalid">
            <SprkIcon
              aria-hidden="true"
              iconName="exclamation-filled"
              additionalClasses="sprk-b-ErrorIcon"
            />
            <div className="sprk-b-ErrorText">There is an error on this field.</div>
          </SprkFieldError>
        </SprkInputContainer>
      </ExampleContainer>

      <ExampleContainer heading="Select Huge With Default Value Of Item 3">
        <SprkInputContainer variant="huge">
          <SprkSelect
            id="select-huge-default-value"
            choices={selectChoices}
            variant="huge"
            name="select-huge"
            defaultValue="item-3"
          />
          <SprkLabel htmlFor="select-huge-default-value">Huge Select Box Label</SprkLabel>
          <SprkIcon
            iconName="chevron-down"
            aria-hidden="true"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
              sprk-b-SelectContainer__icon
            "
          />
          <SprkHelperText>Optional helper text.</SprkHelperText>
        </SprkInputContainer>

      </ExampleContainer>

      <ExampleContainer heading="Select Huge Disabled">
        <SprkInputContainer variant="huge">
          <SprkSelect
            id="huge-disabled-select"
            choices={[]}
            variant="huge"
            name="huge-disabled-select"
            isDisabled
            defaultValue=""
          />
          <SprkLabel htmlFor="huge-disabled-select" isDisabled>
            Select Box Label
          </SprkLabel>
          <SprkIcon
            iconName="chevron-down"
            aria-hidden="true"
            additionalClasses="
              sprk-c-Icon--filled-current-color
              sprk-c-Icon--stroke-current-color
              sprk-b-SelectContainer__icon
            "
          />
        </SprkInputContainer>
      </ExampleContainer>
    </>
  );
}

export default SprkSelectionInputDocs;
