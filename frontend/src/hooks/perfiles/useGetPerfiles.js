import { useState, useEffect } from "react";
import axios from "axios";

const useGetPerfiles = () => {
  const [perfiles, setPerfiles] = useState([]);

  useEffect(() => {
    const unsuscribe = axios
      .get(`${process.env.REACT_APP_URL_BASE}/perfiles`)
      .then((perfiles) => setPerfiles(perfiles.data.perfiles));

    return unsuscribe;
  }, []);

  return [perfiles];
};

export default useGetPerfiles;
