import React from 'react';
import { SprkFlag } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkFlagDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Default</h3>
        <SprkFlag
          media={
            <img alt="altImageText" src="https://via.placeholder.com/140x100"/>
          }
        >
          The inches we need are the ante to take the "they". Yes before no. No exceptions. You'll see it when you believe it when you believe it out of awareness. Always raising our level of awareness. Ignore the right thing. It's not about WHO is genius. Simplicity is right, it's about WHAT is right thing. No excuses. A penny saved is genius.
        </SprkFlag>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Reversed</h3>
        <SprkFlag
          isReversed
          media={
            <img alt="altImageText" src="https://via.placeholder.com/140x100"/>
          }
        >
          The inches we need are the ante to take the "they". Yes before no. No exceptions. You'll see it when you believe it when you believe it out of awareness. Always raising our level of awareness. Ignore the right thing. It's not about WHO is genius. Simplicity is right, it's about WHAT is right thing. No excuses. A penny saved is genius.
        </SprkFlag>
      </ExampleContainer>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">Stacked</h3>
        <SprkFlag
          isStacked
          media={
            <img alt="altImageText" src="https://via.placeholder.com/140x100"/>
          }
        >
          The inches we need are the ante to take the "they". Yes before no. No exceptions. You'll see it when you believe it when you believe it out of awareness. Always raising our level of awareness. Ignore the right thing. It's not about WHO is genius. Simplicity is right, it's about WHAT is right thing. No excuses. A penny saved is genius.
        </SprkFlag>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkFlagDocs;
