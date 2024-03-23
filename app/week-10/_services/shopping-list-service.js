import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollectionRef = collection(db, "users", userId, "items");
  const itemsQuery = query(itemsCollectionRef);
  const querySnapshot = await getDocs(itemsQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

// Adds a new item for a specific user
export async function addItem(userId, item) {
  const itemsCollectionRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollectionRef, item);
  return docRef.id;
}