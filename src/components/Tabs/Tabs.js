import { useState } from 'react';

import slide1 from '../../assets/images/projects/museum.jpg';
import slide2 from '../../assets/images/projects/vertical-slider.jpg';
import slide3 from '../../assets/images/projects/custom-video-player.jpg';

import './Tabs.css';

const Tabs = () => {
  const [state, setState] = useState(1);

  const action = (num) => {
    setState(num);
  };

  return (
    <div>
      <div className='box'>
        <div className='tabs'>
          <div
            onClick={() => action(1)}
            className={`${state === 1 ? 'tab active-tab' : 'tab tab-1'}`}
          >
            Project 1
          </div>
          <div
            onClick={() => action(2)}
            className={`${state === 2 ? 'tab active-tab' : 'tab tab-2'}`}
          >
            Project 2
          </div>
          <div
            onClick={() => action(3)}
            className={`${state === 3 ? 'tab active-tab' : 'tab tab-3'}`}
          >
            Project 3
          </div>
        </div>

        {/* content */}
        <div className='contents'>
          <div
            className={`${state === 1 ? 'content active-content' : 'content'}`}
          >
            <h2 className='tabs-title'>Museum</h2>
            <p>A task for RS School course</p>
            <p>Fixed pixel perfect layout</p>
            <p>Technologies: HTML, CSS, JavaScript</p>

            <a
              href='https://rolling-scopes-school.github.io/njul-JSFEPRESCHOOL/museum/'
              target='_blank'
            >
              <img className='tabs-img' src={slide1} alt='Museum' />
            </a>
          </div>
          <div
            className={`${state === 2 ? 'content active-content' : 'content'}`}
          >
            <h2 className='tabs-title'>Vertical slider</h2>
            <p>A task for RS School course</p>
            <p>Technologies: HTML, CSS, JavaScript</p>

            <a
              href='https://rolling-scopes-school.github.io/njul-JSFEPRESCHOOL/vertical-slider/'
              target='_blank'
            >
              <img className='tabs-img' src={slide2} alt='Vertical slider' />
            </a>
          </div>
          <div
            className={`${state === 3 ? 'content active-content' : 'content'}`}
          >
            <h2 className='tabs-title'>Custom video player</h2>
            <p>A task for RS School course</p>
            <p>Technologies: HTML, CSS, JavaScript</p>

            <a
              href='https://rolling-scopes-school.github.io/njul-JSFEPRESCHOOL/custom-video-player/'
              target='_blank'
            >
              <img
                className='tabs-img'
                src={slide3}
                alt='Custom video player'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
