import CheckoutSteps from './components/CheckOutProcess';
import React, { useEffect, useState } from 'react'
import FormContainer from './components/FormContainer';
import { Form, Button } from 'react-bootstrap'
import { Col, Row } from 'react-bootstrap';
import './App.css'
import TableRowsSharpIcon from '@mui/icons-material/TableRowsSharp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function App() {

  const [theme, setTheme] = useState("light_theme");
  const ToggleTheme = () => {
    if (theme === "light_theme") {
      setTheme("dark_theme");
    }
    else {
      setTheme("light_theme");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <div>

      <section className="mainbutton">
        <div align="right">
          <Button variant="primary" onClick={() => ToggleTheme()}>ToggleTheme</Button>
        </div>
      </section>

      <div >
        <section >
          <FormContainer >
            <div>
              <div className='mainn'>
                <div className="main">
                  <TableRowsSharpIcon className="chng_color"></TableRowsSharpIcon>
                </div>
                <div className="main">
                  <h3>Lookscout</h3>
                </div>
              </div>


              <Form className="formes">
                <CheckoutSteps step1 />

                <div className="formes1">
                  <Form.Group controlId='name'>
                    <Form.Label className="chng_color">
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                    >
                    </Form.Control>
                  </Form.Group>
                </div>

                <div className="formes1">
                  <Form.Group controlId='email'>
                    <Form.Label className="chng_color">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                    >
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Text id="passwordHelpBlock" muted >
                      <div className="chng_color">

                        Please Enter real Email Address
                      </div>
                    </Form.Text>
                  </Form.Group>


                </div>

                <div className="formes1">
                  <Row className="mb-3">
                    <Col lg={6} xs={12} className="formes1">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="chng_color">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                      </Form.Group>
                      <Form.Text id="passwordHelpBlock" className="def" muted >
                        <div className="chng_color">
                          Please enter your password
                        </div>
                      </Form.Text>
                    </Col>
                    <Col lg={6} xs={12} className="formes1">

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="chng_color">Confirm Pasword</Form.Label>
                        <Form.Control type="cpassword" placeholder="Confirm Password" />
                      </Form.Group>

                      <Form.Text id="passwordHelpBlock" className="def" muted >
                        <div className="chng_color">
                          password need to be match
                        </div>
                      </Form.Text>
                    </Col>
                  </Row>
                </div>


                <div className="formes1">
                  <Form.Group className="position-relative mb-3">
                    <Form.Check
                      required
                      name="terms"
                      className="chng_color"
                      label="I accept Agree the Terms and Privacy Policy"
                      feedbackType="invalid"
                      id="validationFormik106"
                      feedbackTooltip
                    />
                  </Form.Group>

                  <div className="mright">
                    <Button type="submit" align="right">Next <KeyboardArrowRightIcon></KeyboardArrowRightIcon></Button>
                  </div>
                </div>



              </Form>

            </div>


          </FormContainer>
        </section>
      </div>


      <section className="icons">
        <footer>
          copyright @ sankalp gupta
        </footer>
      </section>


    </div>
  )
}

export default App;
