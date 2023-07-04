import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function SearchPlayerPage() {
  const [searchCriteria, setSearchCriteria] = useState('username');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Search criteria:', { searchCriteria, searchValue });
    // alert
    alert(JSON.stringify({ searchCriteria, searchValue }));
    // Reset
    setSearchValue('');
  };

  const handleSelectChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  return (
    <div>
      <h2 className="fonto">Search Player</h2>
      <Form onSubmit={handleSubmit}>
        {/* Search criteria dropdown */}
        <FormGroup>
          <Label className="fonto" for="searchCriteria">Criteria</Label>
          <Input
            type="select"
            name="searchCriteria"
            id="searchCriteria"
            value={searchCriteria}
            onChange={handleSelectChange}
          >
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="experience">Experience</option>
            <option value="lvl">Level</option>
          </Input>
        </FormGroup>

        {/* Search value input */}
        <FormGroup>
          <Label className="fonto" for="searchValue">Search Value</Label>
          <Input
            type="text"
            name="searchValue"
            id="searchValue"
            placeholder={`Enter ${searchCriteria}`}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </FormGroup>

        {/* Submit button */}
        <Button color="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default SearchPlayerPage;
