import React from 'react';
import { text } from '@storybook/addon-knobs/dist';
import { Form, Formik } from 'formik';
import { AvatarList } from '..';

export default {
  title: 'components/AvatarList',
  component: AvatarList,
  argTypes: {},
};

export const Component = ({ ...props }) => (
  <Formik
    initialValues={{}}
    onSubmit={() => {}}
  >
    {() => (
      <Form>
        <AvatarList name="test" userName={text('username', 'username')} {...props} />
      </Form>
    )}
  </Formik>
  
);