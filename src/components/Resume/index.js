import React, { useState } from 'react';

const Resume = (props) => {
  const { currentCategory } = props;
if (currentCategory.name === 'Resume') {
  return (
    <div>
      <a href='../../assets/Resume.pdf' download>Resume</a>
    </div>
  );
} else {
  return null;
}
  
};

export default Resume;
