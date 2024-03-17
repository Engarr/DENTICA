export const links = [
  { name: 'Strona główna', path: '/' },
  { name: 'Zabiegi', path: '/zabiegi/stomatologia zachowawcza' },
  // { name: 'Metamorfozy', path: '/metamorfozy' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Cennik', path: '/cennik' },
  { name: 'Kontakt', path: '/kontakt' },
] as const;

export const linksMobile = [
  {
    name: 'Strona główna',
    hash: '/',
  },
  {
    name: 'Zabiegi',
    hash: '/zabiegi/1',
  },
  // {
  //   name: 'Metamorfozy',
  //   hash: '/metamorfozy',
  // },
  {
    name: 'O nas',
    hash: '/o-nas',
  },
  {
    name: 'Cennik',
    hash: '/cennik',
  },
  {
    name: 'Kontakt',
    hash: '/kontakt',
  },
] as const;
