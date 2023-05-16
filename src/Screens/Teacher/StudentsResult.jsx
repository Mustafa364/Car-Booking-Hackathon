import React, { useState } from 'react';
import BAScreenHeader from '../../Component/BAScreenHeader';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const StudentsResult = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log(file);
    }
  };

  return (
    <>
    <BAScreenHeader screenTitle="Result"/>
    <form onSubmit={handleSubmit} >
      <div>
      <Card>
      <Card.Header className='fw-bold'><label htmlFor="file">Upload Result PDF</label></Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Upload Result for Student's of DOW Institute</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Earum perferendis amet ipsa architecto adipisci quam,<br />
            quisquam fugiat deleniti corrupti esse et quae veniam
             laboriosam aspernatur dignissimos debitis, <br /> consequuntur quibusdam consectetur.
        </Card.Text>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}        
        />
      </Card.Body>
    </Card>
    <div className='py-3'>
    <Card>
      <Card.Header className='fw-bold'><label htmlFor="file">Upload Result PDF</label></Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Upload Result for Student's of KU University</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Earum perferendis amet ipsa architecto adipisci quam,<br />
            quisquam fugiat deleniti corrupti esse et quae veniam
             laboriosam aspernatur dignissimos debitis, <br /> consequuntur quibusdam consectetur.
        </Card.Text>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}        
        />
      </Card.Body>
    </Card>
    </div>
    <div className='py-3'>
    <Card>
      <Card.Header className='fw-bold'><label htmlFor="file">Upload Result PDF</label></Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Upload Result for Student's of SMIT Institute</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Earum perferendis amet ipsa architecto adipisci quam,<br />
            quisquam fugiat deleniti corrupti esse et quae veniam
             laboriosam aspernatur dignissimos debitis, <br /> consequuntur quibusdam consectetur.
        </Card.Text>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}        
        />
      </Card.Body>
    </Card>
    </div>
    <div className='py-3'>
    <Card>
      <Card.Header className='fw-bold'><label htmlFor="file">Upload Result PDF</label></Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Upload Result for Student's of SAIMS Institute</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Earum perferendis amet ipsa architecto adipisci quam,<br />
            quisquam fugiat deleniti corrupti esse et quae veniam
             laboriosam aspernatur dignissimos debitis, <br /> consequuntur quibusdam consectetur.
        </Card.Text>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}        
        />
      </Card.Body>
    </Card>
    </div>
    <div className='py-3'>
    <Card>
      <Card.Header className='fw-bold'><label htmlFor="file">Upload Result PDF</label></Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold'>Upload Result for Student's of NED University</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Earum perferendis amet ipsa architecto adipisci quam,<br />
            quisquam fugiat deleniti corrupti esse et quae veniam
             laboriosam aspernatur dignissimos debitis, <br /> consequuntur quibusdam consectetur.
        </Card.Text>
        <input
          type="file"
          name="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}        
        />
      </Card.Body>
    </Card>
    </div>
        
      </div>     
    </form>
    </>
  );
};

const App = () => {
  return (
    <div>
      <StudentsResult />
    </div>
  );
};

export default App;
