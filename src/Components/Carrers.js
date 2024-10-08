import React from 'react';
import Homepage from './Homepage';


const Career = ({ studentDetails = [], tutorDetails = [] }) => {
  return (
    <>
      <Homepage />
      <div>
        <h2>Student Details</h2>
        {Array.isArray(studentDetails) && studentDetails.length === 0 ? (
          <p>No student details available.</p>
        ) : (
          <ul>
            {studentDetails.map((formData, index) => (
              <li key={index}>
                <p>Name: {formData.name}</p>
                <p>Subject: {formData.subject}</p>
                <p>Mode of Teaching: {formData.modeOfTeaching}</p>
                <p>Location: {formData.location}</p>
                <p>Timing: {formData.timing}</p>
              </li>
            ))}
          </ul>
        )}

        <h2>Tutor Details</h2>
        {Array.isArray(tutorDetails) && tutorDetails.length === 0 ? (
          <p>No tutor details available.</p>
        ) : (
          <ul>
            {tutorDetails.map((data, index) => (
              <li key={index}>
                <p>Name: {data.name}</p>
                <p>Subject: {data.subject}</p>
                <p>Mode of Class: {data.modeOfClass}</p>
                <p>Location: {data.location}</p>
                <p>Timing: {data.timing}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Career;
