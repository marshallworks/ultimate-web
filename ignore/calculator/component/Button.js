import { div, button } from '../../ignore.js';

export const Button = ({name, orange, wide, clickHandler}) => {

  const handleClick = () => {
    clickHandler(name);
  };

  const render = () => {
    const className = [
      'component-button',
      orange ? 'orange' : '',
      wide ? 'wide' : ''
    ];

    const clicker = button(name);
    clicker.addEventListener('click', handleClick);

    return div({class: className.join(' ').trim()}, [
      clicker
    ]);
  };

  return Object.freeze({render});
};

