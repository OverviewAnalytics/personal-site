const routes = [
  {
    index: true,
    label: 'Overview Analytics',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  // {
  //   label: 'Resume',
  //   path: '/resume',
  // },
  {
    label: 'Services',
    path: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design',
      }]
  },
  // {
  //   label: 'Stats',
  //   path: '/stats',
  // },
  {
    label: 'Team',
    path: '/team',
  },
  {
    label: 'Insights',
    path: '/insights',
  },
  {
    label: 'Map',
    path: '/live',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
