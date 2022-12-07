import style from './style.module.scss';
export default function Companies() {
  const list = Array.from({ length: 5 }).map(
    (_, index) => `/first-block/companies/image ${index + 1}.png`,
  );

  return (
    <div className={style.companies}>
      {list.map((src) => (
        <img alt="logo" src={src} key={src} />
      ))}
    </div>
  );
}
