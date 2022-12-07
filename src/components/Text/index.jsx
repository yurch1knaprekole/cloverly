import { classNames } from '@/lib/tools';

import style from './style.module.scss';

export default function Text({ children, variant }) {
  let As = 'span';

  switch (variant) {
    case 'title':
      As = 'h1';
      break;
    case 'subtitle': {
      As = 'h2';
      break;
    }
    case 'h3': {
      As = 'h3';
      break;
    }
    case 'description':
    case 'text': {
      As = 'p';
      break;
    }
    default:
      break;
  }

  return <As className={classNames(style.text, style[`text__${variant}`])}>{children}</As>;
}
