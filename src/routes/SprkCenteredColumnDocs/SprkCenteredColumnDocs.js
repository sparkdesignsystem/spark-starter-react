import React from 'react';
import { SprkCenteredColumn } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkCenteredColumnDocs = () => (
  <CentralColumnLayout>
    <SprkCenteredColumn idString="test">
      <p className="sprk-b-TypeDisplayTwo">
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkCenteredColumn>
  </CentralColumnLayout>
);

export default SprkCenteredColumnDocs;
