export function classNames(...params) {
  return params.filter((param) => typeof param === 'string').join(' ');
}
