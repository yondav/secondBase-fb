import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, setDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase.config';
import { con } from '../utils/console';

const storage = getStorage();

// fetch
export const fetchAll = async collName => {
  try {
    return await getDocs(collection(db, collName));
  } catch (err) {
    con.fail({ code: err.code, msg: err.message });
  }
};

// upload an image
export const uploadToStorage = async (file, path) => {
  // create reference to path (passed from higher level)
  const imgRef = ref(storage, `images/${path}`);

  try {
    // upload task
    const uploadTask = await uploadString(imgRef, file, 'data_url', {
      contentType: `image/webp`,
    });

    // if upload task is successful, get the url and return
    if (uploadTask) {
      const url = await getDownloadURL(imgRef);

      return url;
    }
  } catch (err) {
    con.fail({ code: err.code, msg: err.message });
  }
};

// delete an image - must update corresponding document as succeeding action
export const deleteFromStorage = async path => {
  const imgRef = ref(storage, `images/${path}`);

  try {
    // delete task
    await deleteObject(imgRef);
  } catch (err) {
    con.fail({ code: err.code, msg: err.message });
  }
};

export const post = async (collName, docName, data) => {
  try {
    return await setDoc(doc(db, collName, docName), data);
  } catch (err) {
    con.fail({ code: err.code, msg: err.message });
  }
};

export const put = async (collName, docName, data) => {
  try {
    const docRef = doc(db, collName, docName);
    await updateDoc(docRef, data);
  } catch (err) {
    con.fail({ code: err.code, msg: err.message });
  }
};
