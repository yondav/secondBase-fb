// user
export const userModel = user => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  bio: { draft: {}, html: '' },
  profile_img: { color: false, url: '', photographer: '' },
});
