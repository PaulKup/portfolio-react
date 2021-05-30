import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/"> Paul Kupiszewski
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${(currentCategory.name === 'About Me') && 'navActive'}`}>
            <a data-testid="about" href="#about" onClick={() => setCurrentCategory(categories[0])}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${(currentCategory.name === 'Contact') && 'navActive'}`}>
            <span onClick={() => setCurrentCategory(categories[3])}>Contact</span>
          </li>
          <li className={`mx-2 ${(currentCategory.name === 'Portfolio') && 'navActive'}`}>
            <span onClick={() => setCurrentCategory(categories[1])}>Portfolio</span>
          </li>
          <li className={`mx-2 ${(currentCategory.name === 'Resume') && 'navActive'}`}>
            <span onClick={() => setCurrentCategory(categories[2])}>Resume</span>
          </li>
          {/* {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
