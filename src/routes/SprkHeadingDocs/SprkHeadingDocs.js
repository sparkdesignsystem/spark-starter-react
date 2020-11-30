import React from 'react';
import { SprkHeading } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkHeadingDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkHeading
          element="h1"
          isPageTitle
          variant="displayOne"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h2"
          variant="displayTwo"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h3"
          variant="displayThree"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h4"
          variant="displayFour"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h5"
          variant="displayFive"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h6"
          variant="displaySix"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
      <ExampleContainer>
        <SprkHeading
          element="h6"
          variant="displaySeven"
          idString="heading-page-title"
        >
          The Quick Brown Fox Jumps Over the Lazy Dog
        </SprkHeading>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkHeadingDocs;
