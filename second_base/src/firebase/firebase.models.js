// user
export const userModel = user => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  address: {
    address: '',
    city: '',
    state: '',
    zip: '',
  },
  profile_img: '',
});
