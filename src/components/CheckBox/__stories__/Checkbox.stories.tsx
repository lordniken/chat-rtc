import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { Formik } from 'formik';
import { CheckBox } from '..';

export default {
  title: 'components/CheckBox',
  component: CheckBox,
};

export const Component = () => (
  <div>
    <Formik
      initialValues={{}}
      onSubmit={() => {}}
    >
      {() => (
        <form>
          <CheckBox name="test">{text('test', 'test')}</CheckBox>
        </form>
      )}
    </Formik>
  </div>
);
