import React from 'react';
import { SprkBox } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkBoxDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkBox additionalClasses="sprk-u-BackgroundColor--gray-dark">
          SprkBox Content
        </SprkBox>
      </ExampleContainer>
      <ExampleContainer>
        <SprkBox spacing="huge" additionalClasses="sprk-u-BackgroundColor--gray-dark">
          SprkBox Content
        </SprkBox>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkBoxDocs;
