import React, {useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../services/reducer/reducer';
import { Trans } from 'react-i18next';

const AddUser = () => {
  const [inputData, setInputData] = useState({
    id: '',
    name: '',
    username: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = (e,inputData) => {
    e.preventDefault();
    dispatch(addUser(inputData));

    navigate('/')
  }

  return (
    <Container className=''>
      <Form style={{ width: "50%" }}>
        <Form.Group >
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Id" value={inputData.id} onChange={e => setInputData({ ...inputData, id: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={inputData.name} onChange={e => setInputData({ ...inputData, name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" placeholder="Body" value={inputData.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} />
        </Form.Group>
      </Form>
      <Button onClick={() => { navigate('/') }} className='me-2' variant="outline-secondary"><Trans i18nKey={"backBtn"}>Back</Trans></Button>
      <Button onClick={() => { handleAddUser(inputData) }} variant="outline-warning"><Trans i18nKey={'Addbtn'}>Add</Trans></Button>
    </Container>
  )
}

export default AddUser