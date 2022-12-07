import Separator from '../Separator';
import Button from '../Button';
import style from './style.module.scss';

export default function Footer() {
  const links = {
    product: [
      'Seamless Access',
      'Diverse Portfolio',
      'Verified Carbon Credits',
      'Flexible API Integration',
      'Built-in Transparency',
    ],
    'use cases': [
      'ESG & Carbon Accounting',
      'Fintech',
      'Ecommerce',
      'Rideshare',
      'Flights',
      'Enterprise Resource Planning',
      'Energy',
      'Supply Chain',
      'Fleet',
    ],
    developers: ['API Docs', 'Ask Cloverly'],
    about: [
      'How It Works',
      'Offset Projects',
      'Partners',
      'About Us',
      'Blog',
      'News & Press',
      'Contact',
    ],
    ' ': ['FAQ', 'Careers', 'Terms of Service', 'Privacy Policy'],
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className={style.footer__header}>
          <img src="/logo-alt.svg" />
          <div>
            <Button variant="ghost">Login</Button>
            <Button variant="primary">Get API keys</Button>
          </div>
        </div>
        <Separator />
        <div className={style.footer__links}>
          {Object.entries(links).map(([link, list]) => (
            <div key={link}>
              <h4>{link}</h4>
              <ul>
                {list.map((li) => (
                  <li key={li}>
                    <a href="#">{li}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <h4>© 2020 Cloverly</h4>
      </div>
    </footer>
  );
}
