export const pageLinks = [
  { name: 'about' },
  { name: 'gear' },
  { name: 'artists' },
  { name: 'booking' },
];

export const adminLinks = logout => [
  { name: 'portal', to: '/admin/portal' },
  { name: 'logout', to: '/admin/login', onClick: logout },
];
