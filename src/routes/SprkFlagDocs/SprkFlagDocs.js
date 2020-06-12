import React from 'react';
import { SprkFlag } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkFlagDocs = () => (
  <CentralColumnLayout>
    <SprkFlag
      media={
        <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.app/spark-logo-mark.svg"
        />
      }
    >
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkFlag>

    <SprkFlag
      isReversed
      media={
        <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.app/spark-logo-mark.svg"
        />
      }
    >
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkFlag>

    <SprkFlag
      isStacked
      media={
        <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.app/spark-logo-mark.svg"
        />
      }
    >
      <p>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </SprkFlag>
  </CentralColumnLayout>
);

export default SprkFlagDocs;
