import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAjQplpsqlztBuWqHC955nbABb0yXsJjSk",
  authDomain: "animal-sanctuary-9aad6.firebaseapp.com",
  projectId: "animal-sanctuary-9aad6",
  storageBucket: "animal-sanctuary-9aad6.appspot.com",
  messagingSenderId: "110123588509",
  appId: "1:110123588509:web:e1a420f7cb8273c7c32d74",
  measurementId: "G-5Q5WS11YCF",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   console.log("collectionKey: ", collectionKey);
//   console.log("objectsToAdd: ", objectsToAdd);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const registerNewPet = async (registerNewData) => {
  const collectionRef = firestore.collection("pets-collection");
  const newDocRef = collectionRef.doc();
  const batch = firestore.batch();

  batch.set(newDocRef, registerNewData);

  return await batch.commit();
};

// export const registerNewPet = (registerNewData) => {
//   const collectionRef = firestore.collection("pets-collection");
//   const newDocRef = collectionRef.doc();
//   const batch = firestore.batch();
//   batch.set(newDocRef, registerNewData);

//   return batch.commit();
// };

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {
      ownerName,
      ownerAddress,
      petName,
      breed,
      dateOfBirth,
      url,
      vaccinated,
      createdAt,
    } = doc.data();

    return {
      id: doc.id,
      ownerName,
      ownerAddress,
      petName,
      breed,
      dateOfBirth,
      url,
      vaccinated,
      createdAt,
    };
  });

  // * Code below transforms your mapped collections title to your desired title, e.g.,
  // * you have 0: {title: Hats, items: Array(6)}, etc.
  // * and with code below you can set it to for example,
  // * hats: {title: Hats, items: Array(6)}
  // ! Here I used document id as each collection's title because it's unique

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
