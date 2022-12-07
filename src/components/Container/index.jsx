import { classNames } from '@/lib/tools';
import style from './style.module.scss';
export default function Container({ children, ...props }) {
  return (
    <div className={classNames(style.container, props?.className)} style={props?.style}>
      <div className={style.container__wrapper}>{children}</div>
    </div>
  );
}
