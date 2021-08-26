import React from 'react';
import { SprkCard, SprkStack, SprkText, SprkStackItem, SprkHeading, SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkCardDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Base Card
        </h3>
        <SprkCard idString="default">
          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
            itemSpacing="medium"
          >
            <SprkStackItem>
              <SprkText variant="bodyTwo">Default Card</SprkText>
            </SprkStackItem>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Standout Card
        </h3>
        <SprkCard isStandout idString="standout">
          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
            itemSpacing="medium"
          >
            <SprkStackItem>
              <SprkText variant="bodyTwo">Standout Card</SprkText>
            </SprkStackItem>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card with Highlighted Header
        </h3>
        <SprkCard idString="highlighted-header" isStandout>
          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__header"
            itemSpacing="medium"
          >
            <SprkStackItem>
              <SprkHeading
                element="h3"
                variant="displaySeven"
                additionalClasses="sprk-c-Card__highlighted-heading"
              >
                Description
              </SprkHeading>
            </SprkStackItem>

            <SprkStackItem>
              <SprkHeading
                element="h4"
                variant="displayFive"
                additionalClasses="sprk-c-Card__highlighted-heading"
              >
                Card Title
              </SprkHeading>
            </SprkStackItem>
          </SprkStack>

          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
            itemSpacing="medium"
          >
            <SprkStackItem>
              <SprkText variant="bodyTwo">
                Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua
                an pri, errem commune mea at, mei prima tantas signiferumque at.
                Numquam.
              </SprkText>
            </SprkStackItem>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Teaser
        </h3>
        <SprkCard idString="teaser">
          <SprkStackItem>
            <SprkLink variant="unstyled" href="#nogo" analyticsString="teaser-media">
              <img
                className="sprk-c-Card__media"
                alt="Learn More"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </SprkLink>
          </SprkStackItem>

          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
            itemSpacing="medium"
          >
            <SprkStackItem>
              <SprkHeading element="h3" variant="displayFive">
                Title
              </SprkHeading>
            </SprkStackItem>

            <SprkStackItem>
              <SprkText variant="bodyTwo">
                Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.
              </SprkText>
            </SprkStackItem>

            <SprkStack
              additionalClasses="
                sprk-o-Stack__item
                sprk-o-Stack--end-column"
            >
              <SprkStackItem>
                <SprkLink
                  variant="unstyled"
                  additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                  href="#nogo"
                  analyticsString="teaser-cta"
                >
                  Learn More
                </SprkLink>
              </SprkStackItem>
            </SprkStack>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Teaser with Icon
        </h3>
        <SprkCard idString="teaser-icon">
          <SprkStack
            itemSpacing="large"
            additionalClasses="
              sprk-o-Stack__item
              sprk-c-Card__content
              sprk-b-Type--center
            "
          >
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="teaser-icon-media"
                additionalClasses="sprk-u-AbsoluteCenter"
                aria-label="Learn More"
              >
                <SprkIcon
                  iconName="call-team-member"
                  aria-hidden="true"
                  additionalClasses="sprk-c-Icon--xl"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStackItem>
              <SprkHeading element="h3" variant="displayFive">
                Title
              </SprkHeading>
            </SprkStackItem>

            <SprkStackItem>
              <SprkText variant="bodyTwo">
                Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua
                an pri, errem communemea at, mei prima tantas signiferumque at.
              </SprkText>
            </SprkStackItem>

            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                href="#nogo"
                analyticsString="teaser-icon-cta"
              >
                Learn More
              </SprkLink>
            </SprkStackItem>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Teaser With Different Element Order
        </h3>
        <SprkCard idString="teaser-diff-order">
          <SprkStackItem additionalClasses="sprk-c-Card__content">
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              href="#nogo"
              analyticsString="teaser-diff-order-media"
            >
              <img
                alt="Learn More"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </SprkLink>
          </SprkStackItem>

          <SprkStack
            additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
            itemSpacing="large"
          >
            <SprkStackItem>
              <SprkText variant="bodyTwo">
                Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.
              </SprkText>
            </SprkStackItem>

            <SprkStack
              additionalClasses="
                sprk-o-Stack__item
                sprk-o-Stack--end-column"
            >
              <SprkStackItem>
                <SprkLink
                  variant="unstyled"
                  additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                  href="#nogo"
                  analyticsString="teaser-diff-order-cta"
                >
                  Learn More
                </SprkLink>
              </SprkStackItem>
            </SprkStack>
          </SprkStack>
        </SprkCard>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Two Up
        </h3>
        <SprkStack
          itemSpacing="large"
          splitAt="large"
          additionalClasses="sprk-o-Stack--center-row"
        >
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="two-up-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="two-up-cta"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>

          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="two-up-media-2"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="two-up-cta-2"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
        </SprkStack>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Three Up
        </h3>
        <SprkStack
          itemSpacing="large"
          splitAt="large"
          additionalClasses="sprk-o-Stack--center-row"
        >
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="three-up-cta"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-media-2"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="three-up-cta-2"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="three-up-media-3"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="three-up-cta-3"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
        </SprkStack>
      </ExampleContainer>

      <ExampleContainer>
        <h3 className="sprk-b-TypeDisplayFour sprk-u-mbm">
          Card Layout - Four Up
        </h3>
        <SprkStack
          itemSpacing="large"
          splitAt="large"
          additionalClasses="sprk-o-Stack--center-row"
        >
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-media"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="four-up-cta"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-media-2"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="four-up-cta-2"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-media-3"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="four-up-cta-3"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
          <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
            <SprkStackItem>
              <SprkLink
                variant="unstyled"
                href="#nogo"
                analyticsString="four-up-media-4"
              >
                <img
                  className="sprk-c-Card__media"
                  alt="Learn More"
                  src="https://spark-assets.netlify.app/desktop.jpg"
                />
              </SprkLink>
            </SprkStackItem>

            <SprkStack
              additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
              itemSpacing="medium"
            >
              <SprkStackItem>
                <SprkHeading element="h3" variant="displayFive">
                  Title
                </SprkHeading>
              </SprkStackItem>

              <SprkStackItem>
                <SprkText variant="bodyTwo">
                  This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
                  perpetua an pri, errem commune mea at, mei prima tantas
                  signiferumque at. Numquam.
                </SprkText>
              </SprkStackItem>

              <SprkStack
                additionalClasses="
                  sprk-o-Stack__item
                  sprk-o-Stack--end-column"
              >
                <SprkStackItem>
                  <SprkLink
                    variant="unstyled"
                    additionalClasses="sprk-c-Button sprk-c-Button--secondary"
                    href="#nogo"
                    analyticsString="four-up-cta-4"
                  >
                    Learn More
                  </SprkLink>
                </SprkStackItem>
              </SprkStack>
            </SprkStack>
          </SprkCard>
        </SprkStack>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkCardDocs;
