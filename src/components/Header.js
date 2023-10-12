import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import '../i18n'

const Header = () => {

  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [i18n, language]);

  return (

    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Trans i18nKey="Heading">CRUD in Redux-ToolKit with Redux-Thunk!</Trans></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* <Button variant="primary" value={language} onChange={(e)=>{setLanguage(e.target.value)}}>Change Language</Button> */}
            <Form.Select
              label="Language"
              id="lang"
              value={language}
              onChange={(e) => { setLanguage(e.target.value);}}>

              <option value="en">English</option>
              <option value="hi">Hindi</option>

            </Form.Select>
          </Navbar.Text>
          <Navbar.Text>
            <Button variant="success" onClick={() => { navigate('/add') }}><Trans i18nKey="Addbtn">AddUser</Trans></Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header