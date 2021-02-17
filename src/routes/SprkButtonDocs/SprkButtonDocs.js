import React from 'react';

import { SprkButton, SprkSpinner } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkButtonDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Primary Buttons">
        <SprkButton>Button Text</SprkButton>
        <SprkButton element="a" href="#nogo">
          Link Button
        </SprkButton>
        <SprkButton element="a" href="#nogo" target="_blank">
          Link Button w/ New Window
        </SprkButton>
        <SprkButton isDisabled>Disabled Button</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Secondary Buttons">
        <SprkButton variant="secondary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Tertiary Buttons">
        <SprkButton variant="tertiary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Loading Button">
        <SprkButton
          idString="button-9"
          analyticsString="button-9-analytics"
          isSpinning
        >
          <SprkSpinner />
        </SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Incoming Element">
        <SprkButton element="a" to="/link">
          React Router Link
        </SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="href provided">
        <SprkButton href="https://google.com" target="_blank">
          Google.com
        </SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkButtonDocs;
