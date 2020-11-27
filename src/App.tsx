import React from 'react';
import { Formik } from 'formik';
import Switch from 'components/Switch';
import Button from 'components/Button';
import TextField from 'components/TextField';
import CheckBox from 'components/CheckBox';

const INITIAL = {
  text: '',
  switch: true,
  cbx: true
};

const App: React.FC = () => (
  <>
    <Formik
      initialValues={INITIAL}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="text" />
          <CheckBox name="cbx" />
          <Switch name="switch" />
          <Button type="submit">Test</Button>
        </form>
      )}
    </Formik>
  </>
);

export default App;