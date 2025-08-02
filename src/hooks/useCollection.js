import { useState, useEffect } from 'react';
import { collection, onSnapshot} from 'firebase/firestore';
import { db } from '../firebase/config';

export const useCollection = (collectionName, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, collectionName),
            (querySnapshot) => {
                const dataFromCollection = [];
                console.log(querySnapshot)
                querySnapshot.forEach((doc) => {    
                    dataFromCollection.push({id:doc.id, ...doc.data()});
                });

                console.log(dataFromCollection);
                setData(dataFromCollection);
            }
        );
        setLoading(false);
        setError(null);


        return () => unsubscribe();
    }, []);

    return { data, loading, error};
};

export default useCollection;