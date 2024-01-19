import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirebase = (collectionName) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const ref = collection(db, collectionName);
  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onSnapshot(ref, (snapshot) => {
        if(snapshot.empty){
            setErr('no data to collect')
            setIsLoading(false)
        }else{
            setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // Extract data from snapshot
            setIsLoading(false); // Set loading to false after data is received
        }
    })

    return () => unsubscribe(); // Cleanup function to unsubscribe from snapshot listener
  }, []);

  return { data, err, isLoading };
};
