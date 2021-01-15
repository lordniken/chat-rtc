import React from 'react';
import { Form, Formik } from 'formik';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/global/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={lightTheme}>
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