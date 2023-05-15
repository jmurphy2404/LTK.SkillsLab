import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          setData([...data, values]);
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BasicForm;
