import React from 'react';
import { SprkPromo, SprkStack, SprkStackItem, SprkHeading, SprkText, SprkLink } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkPromoDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Promo">
        <div className="sprk-u-mbm">
        <SprkPromo idString="default-promo" hasBorder>
          <SprkStackItem additionalClasses="sprk-c-Promo__content">
            <SprkStack itemSpacing="large">
              <SprkStackItem>
                <SprkHeading
                  element="h3"
                  variant="displayFive"
                  additionalClasses="sprk-c-Promo__title"
                >
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText
                  variant="bodyOne"
                  additionalClasses="sprk-c-Promo__subtitle"
                >
                  Subtitle
                </SprkText>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                  inventore integer eum non enim diam habitant. Maecenas nunc per
                  lacus neque egestas. Diam quod curabitur.
                </SprkText>
              </SprkStackItem>

              <SprkStackItem additionalClasses="sprk-o-Stack__item--end-column">
                <SprkLink
                  variant="unstyled"
                  href="#nogo"
                  className="sprk-c-Button"
                  analyticsString="default-promo-cta"
                >
                  Learn More
                </SprkLink>
              </SprkStackItem>
            </SprkStack>
          </SprkStackItem>
        </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo">
        <div className="sprk-u-mbm">
        <SprkPromo
          idString="flag-promo"
          hasBorder
          isFlag
          additionalClasses="sprk-o-Stack--split@s"
        >
          <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@s">
            <SprkLink variant="unstyled" href="#nogo">
              <img
                className="sprk-c-Promo__image sprk-c-Promo__image--flag"
                alt="Learn more about Spark Design System."
                src="https://spark-assets.netlify.app/spark-logo-updated.svg"
              />
            </SprkLink>
          </SprkStackItem>

          <SprkStackItem
            additionalClasses="
              sprk-c-Promo__content
              sprk-o-Stack__item--three-fourths@s
            "
          >
            <SprkStack itemSpacing="large">
              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                  inventore integer eum non enim diam habitant. Maecenas nunc per
                  lacus neque egestas. Diam quod curabitur.
                </SprkText>
              </SprkStackItem>
            </SprkStack>
          </SprkStackItem>
        </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo (Reversed)">
        <div className="sprk-u-mbm">
        <SprkPromo
          idString="flag-promo"
          hasBorder
          isFlag
          additionalClasses="sprk-o-Stack--split@s"
        >
          <SprkStackItem               
            additionalClasses="
              sprk-c-Promo__content
              sprk-o-Stack__item--three-fourths@s"
          >
            <SprkStack itemSpacing="large">
                <SprkStackItem>
                  <SprkText variant="bodyTwo">
                    Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                    inventore integer eum non enim diam habitant. Maecenas nunc per
                    lacus neque egestas. Diam quod curabitur.
                  </SprkText>
                </SprkStackItem>
              </SprkStack>
          </SprkStackItem>
          <SprkStackItem
           additionalClasses="sprk-o-Stack__item--fourth@s"
          >
            <SprkLink variant="unstyled" href="#nogo">
              <img
                className="sprk-c-Promo__image sprk-c-Promo__image--flag"
                alt="Learn more about Spark Design System."
                src="https://spark-assets.netlify.app/spark-logo-updated.svg"
              />
            </SprkLink>
          </SprkStackItem>
        </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image">
        <div className="sprk-u-mbm">
        <SprkPromo
          idString="image-promo"
          hasBorder
          additionalClasses="sprk-o-Stack--split@s"
        >
          <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
            <SprkLink variant="unstyled" href="#nogo">
              <img
                className="sprk-c-Promo__image"
                alt="Additional insights about this property."
                src="https://spark-assets.netlify.app/house.jpg"
              />
            </SprkLink>
          </SprkStackItem>

          <SprkStackItem
            additionalClasses="
              sprk-c-Promo__content
              sprk-o-Stack__item--half@s
            "
          >
            <SprkStack itemSpacing="large">
              <SprkStackItem>
                <SprkHeading
                  element="h3"
                  variant="displayFive"
                  additionalClasses="sprk-c-Promo__title"
                >
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText
                  variant="bodyOne"
                  additionalClasses="sprk-c-Promo__subtitle"
                >
                  Subtitle
                </SprkText>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                  inventore integer eum non enim diam habitant. Maecenas nunc per
                  lacus neque egestas. Diam quod curabitur.
                </SprkText>
              </SprkStackItem>

              <SprkStackItem>
                <SprkLink
                  variant="unstyled"
                  href="#nogo"
                  className="sprk-c-Button"
                  analyticsString="image-promo-cta"
                >
                  Learn More
                </SprkLink>
              </SprkStackItem>
            </SprkStack>
          </SprkStackItem>
        </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image (Reversed)">
        <div className="sprk-u-mbm">
        <SprkPromo
          idString="rev-image-promo"
          hasBorder
          additionalClasses="sprk-o-Stack--split@s"
        >
          <SprkStackItem
            additionalClasses="
              sprk-c-Promo__content
              sprk-o-Stack__item--half@s
            "
          >
            <SprkStack itemSpacing="large">
              <SprkStackItem>
                <SprkHeading
                  element="h3"
                  variant="displayFive"
                  additionalClasses="sprk-c-Promo__title"
                >
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText
                  variant="bodyOne"
                  additionalClasses="sprk-c-Promo__subtitle"
                >
                  Subtitle
                </SprkText>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                  inventore integer eum non enim diam habitant. Maecenas nunc per
                  lacus neque egestas. Diam quod curabitur.
                </SprkText>
              </SprkStackItem>

              <SprkStackItem>
                <SprkLink
                  variant="unstyled"
                  href="#nogo"
                  className="sprk-c-Button"
                  analyticsString="rev-image-promo-cta"
                >
                  Learn More
                </SprkLink>
              </SprkStackItem>
            </SprkStack>
          </SprkStackItem>

          <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
            <SprkLink variant="unstyled" href="#nogo">
              <img
                className="sprk-c-Promo__image"
                alt="Additional insights about this property."
                src="https://spark-assets.netlify.app/house.jpg"
              />
            </SprkLink>
          </SprkStackItem>
        </SprkPromo>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
