import { useEffect, useState } from "react";

const useWords = (word) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [word]);

  return { words, loading, error };
};

export default useWords;
