import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function EditPlayerPage() {
  const [playerId, setPlayerId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState(0);
  const [lvl, setLvl] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform logic to submit the edited player data
    console.log('Edited Player data submitted:', {
      playerId,
      username,
      email,
      experience,
      lvl
    });
    // Show alert with form data
    alert(JSON.stringify({
      playerId,
      username,
      email,
      experience,
      lvl
    }));
  };

  return (
    <div>
      <h2 class="fonto">Edit Player</h2>
      <Form onSubmit={handleSubmit}>
        {/* Player ID input */}
        <FormGroup>
          <Label className="fonto" for="playerId">Player ID</Label>
          <Input
            type="text"
            name="playerId"
            id="playerId"
            placeholder="Player ID"
            value={playerId}
            onChange={(event) => setPlayerId(event.target.value)}
          />
        </FormGroup>

        {/* Form inputs */}
        <FormGroup>
          <Label className="fonto" for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="fonto" for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="fonto" for="experience">Experience</Label>
          <Input
            type="number"
            name="experience"
            id="experience"
            placeholder="Experience"
            value={experience}
            onChange={(event) => setExperience(Number(event.target.value))}
          />
        </FormGroup>
        <FormGroup>
          <Label className="fonto" for="lvl">Level</Label>
          <Input
            type="number"
            name="lvl"
            id="lvl"
            placeholder="Level"
            value={lvl}
            onChange={(event) => setLvl(Number(event.target.value))}
          />
        </FormGroup>

        {/* Submit button */}
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default EditPlayerPage;
