import React from 'react';
import { SprkAward } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkAwardDocs = () => (
  <CentralColumnLayout>
    <SprkAward
      heading="Award Component Heading"
      idString="award-1"
      disclaimerText="
        This is an example of disclaimer content.
        The aria-expanded='true' attribute will be
        viewable in the DOM on the toggle link when
        this content is shown. When this content is
        hidden the aria-expanded attribute will have
        the value of false. This helps accessibilty
        devices in understanding that the link is a
        control for expandable content.
      "
      disclaimerTitle="My Disclaimer"
      images={[
        {
          href: 'https://www.sparkdesignsystem.com',
          src:
            'https://spark-assets.netlify.app/desktop.jpg',
          alt: 'Spark Placeholder Logo',
          analyticsString: 'award-1',
          element: 'a',
          to: '/link',
        },
        {
          href: 'https://www.sparkdesignsystem.com',
          src:
            'https://spark-assets.netlify.app/desktop.jpg',
          alt: 'Spark Placeholder Logo',
          analyticsString: 'award-2',
          element: 'a',
        },
      ]}
    />
  </CentralColumnLayout>
);

export default SprkAwardDocs;
