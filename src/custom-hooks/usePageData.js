import { useEffect, useState } from "react";
import firebase from '../utils/fb-config';

const usePageData = (fieldName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    firebase
      .database()
      .ref()
      .child(fieldName)
      .once('value')
      .then(data => setData(data.val()))
  }, []);

  return data;
}

export default usePageData;