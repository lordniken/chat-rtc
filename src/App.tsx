import React from 'react';
import { Formik } from 'formik';
import Switch from 'components/Switch';
import Button from 'components/Button';
import TextField from 'components/TextField';
import CheckBox from 'components/CheckBox';
import Select from 'components/Select';

const INITIAL = {
  text: '',
  switch: true,
  cbx: true
};

const DOC_TYPE_OPTIONS = [
  {
    value: '1',
    label: 'option 1',
  },
  {
    value: '2',
    label: 'option 2',
  },
];

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
          <Select 
            name="select"
            options={DOC_TYPE_OPTIONS}
            placeholder="Text will be here"
          />
          <Button type="submit">Test</Button>
        </form>
      )}
    </Formik>
  </>
);

export default App;