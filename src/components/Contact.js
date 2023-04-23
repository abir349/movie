import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div style={{textAlign:"centre"}}>
<Form className='lili' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"white"}}>Name</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
        <Form.Label style={{color:"white"}} >Lastname</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
        <Form.Label  style={{color:"white"}}>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
        <Form.Text style={{color:"white"}}  className="text-muted">
          <Form.Label style={{color:"white"}} >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Check  type="checkbox" label="Check me out" />
         <Button  variant="primary" type="submit" style={{backgroundColor:"#FFD700"}}>
        Submit
      </Button>
        </Form.Text>
      
        
        
        
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicPassword">
        
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
     
    </Form>


      
    </div>
  )
}

export default Contact