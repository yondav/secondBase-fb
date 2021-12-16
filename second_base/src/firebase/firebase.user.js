import { firestore } from './firebase.config';

// create new user in db
export const createUserDocument = async user => {
  // get a reference to the Firestore document
  const docRef = firestore.doc(`/users/${user.uid}`);

  // create the User object
  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address: {
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
    },
    profile_img: '',
  };

  // Write to Cloud Firestore
  return docRef.set(userProfile);
};
