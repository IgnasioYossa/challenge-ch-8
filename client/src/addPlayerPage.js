import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CreatePlayerPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show alert with form data
    alert(JSON.stringify(formData));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <h2 className="fonto">Create New Player</h2>
      <Form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <FormGroup>
          <Label className="fonto" for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label className="fonto" for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label className="fonto" for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
        </FormGroup>

        {/* Submit button */}
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default CreatePlayerPage;
