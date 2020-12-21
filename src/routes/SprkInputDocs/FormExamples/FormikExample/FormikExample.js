/* global alert */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { SprkButton, SprkTextInput } from '@sparkdesignsystem/spark-react';
import {
  sprkIsValidPhone,
  sprkFormatPhone,
} from '@sparkdesignsystem/spark-react/src/spark-exports-react';

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
            <SprkTextInput
              label="Name"
              value={values.name}
              placeholder="Enter your first name"
              {...field}
            />
          )}
        </Field>

        <Field
          name="phone"
          validate={value =>
            !sprkIsValidPhone(value) ? 'Enter the right phone.' : undefined
          }>
          {({ field /* _form */ }) => (
            <SprkTextInput
              formatter={sprkFormatPhone}
              label="Phone Number"
              valid={errors.phone && errors.phone.length === 0}
              value={values.phone}
              placeholder="(313) 333-1234"
              errorMessage={errors.phone}
              {...field}
            />
          )}
        </Field>

        <Field
          name="email"
        >{({ field /* _form */ }) => (
            <SprkTextInput
              label="Email"
              type="text"
              value={values.email}
              placeholder="email@example.com"
              {...field}
            />
          )}
        </Field>
        <SprkButton type="submit" disabled={isSubmitting || !isValid}>
          Submit
        </SprkButton>
      </Form>
    )}
  </Formik>
);

FormikExample.propTypes = {};

export default FormikExample;
