/* global */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  SprkButton,
  SprkFieldError,
  SprkIcon,
  sprkIsValidPhone,
  sprkFormatPhone,
  SprkInputContainer,
  SprkLabel,
  SprkInput,
}
  from '@sparkdesignsystem/spark-react';

const FormikExample = () => (
  <Formik
    initialValues={{ name: '', email: '', phone: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >

    {({ values, errors, isSubmitting, isValid }) => (
      <Form>
        <Field
          name="name">
          {({ field /* _form */ }) => (
            <SprkInputContainer>
              <SprkLabel>Name</SprkLabel>
              <SprkInput
                id="text2"
                type="text"
                placeholder="Enter your first name"
                name="Name"
                value={values.name}
                {...field}
              />
            </SprkInputContainer>
          )}
        </Field>

        <Field
          name="phone"
          validate={value =>
            !sprkIsValidPhone(value) ? 'Enter the right phone.' : undefined
          }>
          {({ field /* _form */ }) => (
            <SprkInputContainer>
              <SprkLabel>Phone Number</SprkLabel>
              <SprkInput
                placeholder="(000) 000-0000"
                type="tel"
                isValid={sprkIsValidPhone(values.phone)}
                id="phone"
                value={values.phone}
                formatter={sprkFormatPhone}
                {...field}
              />
              { !sprkIsValidPhone(values.phone) &&
                  <SprkFieldError id="invalid-phone">
                    <SprkIcon
                      iconName="exclamation-filled"
                      additionalClasses="sprk-b-ErrorIcon"
                      aria-hidden="true"
                    />
                    <div className="sprk-b-ErrorText">There is an error on this field.</div>
                  </SprkFieldError>
                }
            </SprkInputContainer>
          )}
        </Field>

        <Field
          name="email"
        >{({ field /* _form */ }) => (
          <SprkInputContainer>
            <SprkLabel>Email</SprkLabel>
            <SprkInput
              type="email"
              placeholder="email@example.com"
              value={values.email}
              id="email2"
              {...field}
            />
          </SprkInputContainer>
        )}
        </Field>
        <SprkButton type="submit" isDisabled={isSubmitting || !isValid}>
          Submit
        </SprkButton>
      </Form>
    )}
  </Formik>
);

FormikExample.propTypes = {};

export default FormikExample;
