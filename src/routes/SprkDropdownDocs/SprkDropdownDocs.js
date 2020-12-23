import React from 'react';
import { SprkButton, SprkDropdown } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const informationalChoices = {
  choiceFunction: choiceText => {
    console.log(choiceText);
  },
  footer: (
    <SprkButton
      variant="tertiary"
      additionalClasses="sprk-c-Button--compact"
      onClick={() => {
        console.log('Clicked!');
      }}
    >
      Placeholder
    </SprkButton>
  ),
  items: [
    {
      content: {
        title: 'Choice Title 1',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information',
      },
      value: 'choice-title-1',
      isDefault: false,
    },
    {
      content: {
        title: 'Choice Title 2',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information',
      },
      to: '/button',
      value: 'choice-title-2',
      isDefault: true,
    },
  ],
};

const choices = {
  choiceFunction: choiceText => {
    console.log(choiceText);
  },
  items: [
    {
      text: 'Option 1',
      value: 'option-1',
      element: 'a',
      href: '/link',
      target: '_blank',
    },
    {
      text: 'Option 2',
      value: 'option-2',
      element: 'a',
      to: '/link',
    },
    {
      text: 'Option 3',
      value: 'option-3',
    },
  ],
};

const SprkDropdownDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer heading="Base">
      <SprkDropdown choices={choices} iconName="settings"
      additionalIconClasses="sprk-c-Icon--l"
      />
    </ExampleContainer>
    <ExampleContainer heading="Informational">
      <SprkDropdown
        variant="informational"
        additionalIconClasses="sprk-c-Icon--l"
        title="My Choices"
        choices={informationalChoices}
        defaultTriggerText="Make a selection..."
      />
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkDropdownDocs;
