import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import runBuddy from '../../assets/images/run-buddy-img.png';
import novid from '../../assets/images/NovidTitleImage.png';
import loveMonster from '../../assets/images/love-monster.png';
import budgetTracker from '../../assets/images/budgetTracker.png';
import pizzaHunt from '../../assets/images/pizzaHunt.png';
import noteTaker from '../../assets/images/noteTaker.png';

function Portfolio(props) {
  const { currentCategory } = props;
  if (currentCategory.name === 'Portfolio') {
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
        <div class="projects-grid-wrapper">
            <div class="projects-grid">
                <div class="run-buddy projects-grid-item">
                    <a href="https://paulkup.github.io/run-buddy/" target="blank">Run Buddy</a>
                    <a href="https://github.com/PaulKup/run-buddy" target="blank">github</a>
                    <img src={runBuddy} alt='run buddy' />
                </div>
                <div class="project2 projects-grid-item">
                    <a href="https://prestongeyer713.github.io/novid/" target="blank">Novid</a>
                    <a href="https://prestongeyer713.github.io/novid/" target="blank">github</a>
                    <img src={novid} alt='novid' />
                </div>
                <div class="project3 projects-grid-item">
                    <a href="https://nameless-fortress-88124.herokuapp.com/" target="blank">Love Monster</a>
                    <a href="https://github.com/FlipFlaptheTraitor/Love_Monster/" target="blank">github</a>
                    <img src={loveMonster} alt='loveMonster' />
                </div>
                <div class="project4 projects-grid-item">
                    <a href="https://agile-bastion-64700.herokuapp.com/" target="blank">Budget Tracker</a>
                    <a href="https://github.com/PaulKup/budget-tracker" target="blank">github</a>
                    <img src={budgetTracker} alt='proj4' />
                </div>
                <div class="project5 projects-grid-item">
                    <a href="https://desolate-savannah-03152.herokuapp.com/" target="blank">Pizza Hunt</a>
                    <a href="https://github.com/PaulKup/pizza-hunt" target="blank">github</a>
                    <img src={pizzaHunt} alt='proj5' />
                </div>
                <div class="project5 projects-grid-item">
                    <a href="https://boiling-hollows-19999.herokuapp.com/" target="blank">Note Taker</a>
                    <a href="https://github.com/PaulKup/Note-Taker" target="blank">github</a>
                    <img src={noteTaker} alt='proj6' />
                </div>
            </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
  
}
export default Portfolio;
