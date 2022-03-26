// user
export const userModel = user => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  bio: { draft: {}, html: '' },
  profile_img: { color: false, url: '', photographer: '' },
});

// studio
export const studioModel = studio => ({
  name: 'secondBase',
  address: {
    street: '4306 Third Ave',
    neighborhood: 'Sunset Park',
    city: 'Brooklyn',
    state: 'New York',
    zip_code: 11232,
  },
  services: [],
});
