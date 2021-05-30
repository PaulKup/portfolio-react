import React from 'react';
import coverImage from '../../assets/images/Paul.jpeg';
function About(props) {
  const { currentCategory } = props;
  if (currentCategory.name === 'About Me') {
  return (
    <section className="my-5">
      <h1 id="about">Paul Kupiszewski</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hi! My name is Paul Kupiszewski and I am currently a student in the UCF Coding Bootcamp. I am an
                aspiring
                developer seeking work which offers valuable experience and learnign opportunities. Besides coding my
                hobbies include spending time with my dog Barney, visiting state and national parks, and skydiving. I
                look foward to expanding my professional horizions and advancing my career as a developer.

        </p>
      </div>
    </section>
  );} else {
    return null;
}
}

export default About;
