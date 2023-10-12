import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {  removeUser,getAllUsers } from '../services/reducer/reducer';
//language detactor
import '../i18n'
import { Trans, useTranslation } from 'react-i18next';



const Home = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
   const Data = useSelector((state) =>state.users.allUsers);
console.log(Data)

  useEffect(()=>{
    dispatch(getAllUsers()) 
  },[dispatch])

  const handleDelete = async (userId) => {

    dispatch(removeUser(userId));
  
  };
  

  return (
       <Container>
        {/* {t('name')} */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((user,index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="info" onClick={() => navigate(`/edit/${user.id}`)}>
                    {t('editBtn')}
                  </Button>
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user.id)}>
                    <Trans i18nKey='delBtn'>Delete</Trans>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
   );
};

export default Home;
