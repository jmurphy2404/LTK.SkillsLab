import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

import { TableContainer, TableHead, TableRow, 
  TableCell, Table, TableBody } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import { addItem, deleteItem } from '../toDoSlice';

const BasicForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const td_data = useSelector((state) => state.toDo.todos);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addItem(inputValue));
    setInputValue('');
    console.log(inputValue);
  }

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => { }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </Form>
      </Formik>
      <h2>Todo List</h2>
      <div>
        {td_data.map(item => {
          return (<h3>{item}</h3>)
        })}
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todo</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {td_data.map(item => {
              return (<TableRow>
                <TableCell>{item}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={(
                    () => {
                      dispatch(deleteItem(item));
                    }
                  )}>Delete</Button>
                </TableCell>
              </TableRow>)
            }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  );
}

export default BasicForm;
