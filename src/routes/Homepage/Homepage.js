import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import {
  SprkCheckboxGroup,
  SprkCheckboxItem,
  SprkRadioGroup,
  SprkRadioItem,
  SprkFieldset,
  SprkLegend,
  SprkHelperText,
  SprkErrorContainer,
  SprkStack,
  SprkStackItem,
  SprkSelectionInput,
  SprkTooltip,
} from '@sparkdesignsystem/spark-react';

const Homepage = () => {
  return (
    <CentralColumnLayout>
      <h1 className="sprk-b-TypeDisplayTwo sprk-b-PageTitle">What's New in Spark React version 2.1.0</h1>
      <h2 className="sprk-b-TypeDisplayThree sprk-u-mvl">Huge Checkboxes and Radios</h2>
      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">Radios and Checkboxes have a new Huge variant.</p>
      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Huge Checkbox Group</SprkLegend>
          <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Huge Radio Group</SprkLegend>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 1
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 2
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 3
          </SprkRadioItem>
        </SprkFieldset>
      </SprkRadioGroup>

      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">Fieldset and Legend can be omitted and it will still work.</p>
      <SprkCheckboxGroup variant="huge">
        <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
        <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
        <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
      </SprkCheckboxGroup>

      <SprkRadioGroup variant="huge">
        <SprkRadioItem name="radio" variant="huge">
          Radio Item 1
          </SprkRadioItem>
        <SprkRadioItem name="radio" variant="huge">
          Radio Item 2
          </SprkRadioItem>
        <SprkRadioItem name="radio" variant="huge">
          Radio Item 3
          </SprkRadioItem>
      </SprkRadioGroup>

      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">These components can be disabled and can have helper and error text.</p>

      <SprkCheckboxGroup variant="huge" isDisabled>
        <SprkFieldset>
          <SprkLegend isDisabled>Disabled Checkbox Group</SprkLegend>
          <SprkCheckboxItem
            variant="huge"
            isDisabled
          >
            Checkbox Item 1
          </SprkCheckboxItem>
          <SprkCheckboxItem
            variant="huge"
            isDisabled
          >
            Checkbox Item 2
          </SprkCheckboxItem>
          <SprkCheckboxItem
            variant="huge"
            isDisabled
          >
            Checkbox Item 3
          </SprkCheckboxItem>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Helper Text Group</SprkLegend>
          <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkHelperText>
          Optional helper text, used to clarify the field&#x27;s intent
        </SprkHelperText>
      </SprkCheckboxGroup>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
          <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
        </SprkFieldset>
        <SprkErrorContainer
          id="checkbox-huge-error-container"
          message="There is an error on this field"
        />
      </SprkCheckboxGroup>


      <SprkRadioGroup variant="huge" isDisabled>
        <SprkFieldset>
          <SprkLegend>Disabled Huge Radio</SprkLegend>
          <SprkRadioItem
            name="radio"
            variant="huge"
            isDisabled
          >
            Radio Item 1
          </SprkRadioItem>
          <SprkRadioItem
            name="radio"
            variant="huge"
            isDisabled
          >
            Radio Item 2
          </SprkRadioItem>
          <SprkRadioItem
            name="radio"
            variant="huge"
            isDisabled
          >
            Radio Item 3
          </SprkRadioItem>
        </SprkFieldset>
      </SprkRadioGroup>

      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Helper Huge Radio</SprkLegend>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 1
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 2
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 3
          </SprkRadioItem>
        </SprkFieldset>
        <SprkHelperText>
          Optional helper text, used to clarify the field&#x27;s intent.
        </SprkHelperText>
      </SprkRadioGroup>

      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 1
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 2
          </SprkRadioItem>
          <SprkRadioItem name="radio" variant="huge">
            Radio Item 3
          </SprkRadioItem>
        </SprkFieldset>
        <SprkErrorContainer
          id="radio-huge-error-container"
          message="There is an error on this field"
        />
      </SprkRadioGroup>

      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">These components can be rendered in various stacked configurations.</p>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 1
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 2
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 1
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 2
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 3
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 4
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 1
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 2
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 3
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 4
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack
                splitAt="small"
                itemSpacing="medium"
                additionalClasses="sprk-o-Stack--center-row "
              >
                <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 5
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkCheckboxGroup>

      <SprkCheckboxGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 1
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 2
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 3
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 4
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 5
                  </SprkCheckboxItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkCheckboxItem variant="huge">
                    Checkbox Item 6
                  </SprkCheckboxItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkCheckboxGroup>


      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 1
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 2
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkRadioGroup>


      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 1
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 2
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 3
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 4
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkRadioGroup>


      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 1
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 2
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 3
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 4
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack
                splitAt="small"
                itemSpacing="medium"
                additionalClasses="sprk-o-Stack--center-row"
              >
                <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 5
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkRadioGroup>

      <SprkRadioGroup variant="huge">
        <SprkFieldset>
          <SprkLegend>Group Label Name</SprkLegend>
          <SprkStack itemSpacing="medium">
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 1
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 2
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 3
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 4
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
            <SprkStackItem>
              <SprkStack splitAt="small" itemSpacing="medium">
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 5
                  </SprkRadioItem>
                </SprkStackItem>
                <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
                  <SprkRadioItem name="radio" variant="huge">
                    Radio Item 6
                  </SprkRadioItem>
                </SprkStackItem>
              </SprkStack>
            </SprkStackItem>
          </SprkStack>
        </SprkFieldset>
      </SprkRadioGroup>

      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">The old versions of checkboxes and radios have been deprecated, but they still work (for now).</p>

      <SprkSelectionInput
        groupLabel="Checkbox Input"
        choices={[
          {
            label: 'Checkbox Item 1',
            name: 'check[]',
            value: 'item-1',
          },
          {
            label: 'Checkbox Item 2',
            name: 'check[]',
            value: 'item-2',
          },
          {
            label: 'Checkbox Item 3',
            name: 'check[]',
            value: 'item-2',
          },
        ]}
        variant="checkbox"
      />

      <SprkSelectionInput
        groupLabel="Checkbox Input"
        choices={[
          {
            label: 'Checkbox Item 1',
            name: 'check[]',
            value: 'item-1',
          },
          {
            label: 'Checkbox Item 2',
            name: 'check[]',
            value: 'item-2',
          },
          {
            label: 'Checkbox Item 3',
            name: 'check[]',
            value: 'item-3',
          },
        ]}
        variant="checkbox"
        valid={false}
        errorMessage="There is an error on this field"
      />

      <SprkSelectionInput
        groupLabel="Checkbox Input"
        choices={[
          {
            label: 'Checkbox Item 1',
            name: 'check[]',
            value: 'item-1',
          },
          {
            label: 'Checkbox Item 2',
            name: 'check[]',
            value: 'item-2',
          },
          {
            label: 'Checkbox Item 3',
            name: 'check[]',
            value: 'item-3',
          },
        ]}
        variant="checkbox"
        disabled
      />

      <SprkSelectionInput
        groupLabel="Radio Group Label"
        choices={[
          {
            label: 'Radio Item 1',
            name: 'radio[]',
            value: 'item-1',
          },
          {
            label: 'Radio Item 2',
            name: 'radio[]',
            value: 'item-2',
          },
          {
            label: 'Radio Item 3',
            name: 'radio[]',
            value: 'item-3',
          },
        ]}
        variant="radio"
      />

      <SprkSelectionInput
        groupLabel="Radio Group Label"
        choices={[
          {
            label: 'Radio Item 1',
            name: 'radio[]',
            value: 'item-1',
          },
          {
            label: 'Radio Item 2',
            name: 'radio[]',
            value: 'item-2',
          },
          {
            label: 'Radio Item 3',
            name: 'radio[]',
            value: 'item-3',
          },
        ]}
        variant="radio"
        valid={false}
        errorMessage="There is an error on this field."
      />

      <SprkSelectionInput
        groupLabel="Radio Group Label"
        choices={[
          {
            label: 'Radio Item 1',
            name: 'radio[]',
            value: 'item-1',
          },
          {
            label: 'Radio Item 2',
            name: 'radio[]',
            value: 'item-2',
          },
          {
            label: 'Radio Item 3',
            name: 'radio[]',
            value: 'item-3',
          },
        ]}
        variant="radio"
        disabled
      />

      <h2 className="sprk-b-TypeDisplayThree sprk-u-mvl">Tooltip Component</h2>
      <p className="sprk-b-TypeDisplaySix sprk-u-mvl">
        Tooltips can be placed on a spark icon. Tooltips render differently
        based on which corner of the viewport they are in. This is testable
        by growing/shrinking the text size/window size to wrap the text.
      <SprkTooltip iconAdditionalClasses="sprk-c-Icon--filled">
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id dee doo da fauxet la gigman roo.
      </SprkTooltip>
      </p>
      <div style={{ 'marginTop': '750px' }}></div>
    </CentralColumnLayout>
  );
};
export default Homepage;
