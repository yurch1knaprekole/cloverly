import { classNames } from '../../lib/tools';
import style from './style.module.scss';

export default function Button(props) {
  const { as, children, className, variant, ...rest } = props;
  const As = as || 'button';
  const variantStyle = variant || 'neutral';
  return (
    <As className={classNames(style.button, style[`button__${variantStyle}`], className)} {...rest}>
      {children}
    </As>
  );
}
