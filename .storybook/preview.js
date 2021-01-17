import React from 'react';
import { Form, Formik } from 'formik';
import { ThemeProvider } from 'styled-components';
import themes from '../src/global/themes';

export const decorators = [
  Story => (
    <ThemeProvider theme={themes.light}>
      <Formik
        initialValues={{}}
        onSubmit={() => {}}
      >
      {() => (
        <Form>
          <Story />
        </Form>
      )}
      </Formik>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}