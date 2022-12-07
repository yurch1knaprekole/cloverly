import Button from '../Button';
import style from './style.module.scss';

export default function Header() {
  const list = ['Product', 'Uses Cases', 'Developers', 'Pricing', 'About'];

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <nav className={style.navbar}>
          <img alt="logo" src="/logo.svg" />
          <ul>
            {list.map((value) => (
              <li>
                <Button variant="ghost">{value}</Button>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button variant="ghost">Login</Button>
          <Button>Get API keys</Button>
        </div>
      </div>
    </header>
  );
}
