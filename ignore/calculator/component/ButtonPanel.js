import { div } from '../../ignore.js';
import { Button } from './Button.js';

export const ButtonPanel = ({clickHandler}) => {

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  const render = () => {
    return div({class: 'component-button-paner'}, [
      div([
        Button({name: 'AC', clickHandler: handleClick}).render(),
        Button({name: '+/-', clickHandler: handleClick}).render(),
        Button({name: '%', clickHandler: handleClick}).render(),
        Button({name: '÷', clickHandler: handleClick, orange: true}).render()
      ]),
      div([
        Button({name: '7', clickHandler: handleClick}).render(),
        Button({name: '8', clickHandler: handleClick}).render(),
        Button({name: '9', clickHandler: handleClick}).render(),
        Button({name: 'x', clickHandler: handleClick, orange: true}).render()
      ]),
      div([
        Button({name: '4', clickHandler: handleClick}).render(),
        Button({name: '5', clickHandler: handleClick}).render(),
        Button({name: '6', clickHandler: handleClick}).render(),
        Button({name: '-', clickHandler: handleClick, orange: true}).render()
      ]),
      div([
        Button({name: '1', clickHandler: handleClick}).render(),
        Button({name: '2', clickHandler: handleClick}).render(),
        Button({name: '3', clickHandler: handleClick}).render(),
        Button({name: '+', clickHandler: handleClick, orange: true}).render()
      ]),
      div([
        Button({name: '0', clickHandler: handleClick, wide: true}).render(),
        Button({name: '.', clickHandler: handleClick}).render(),
        Button({name: '=', clickHandler: handleClick, orange: true}).render()
      ])
    ]);
  };

  return Object.freeze({render});
};

