import React, { useEffect, useState } from 'react';

const Dictionary = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState(null);
  const [suggestWord, setSuggestWord] = useState([]);

  const getWordMeaning = async () => {
    let response = await fetch('http://127.0.0.1:4000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word: text }),
    });
    let { word } = await response.json();
    setData(JSON.stringify(word));
  };

  useEffect(async () => {
    setSuggestWord([]);
    let response = await fetch('http://127.0.0.1:4000/suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word: text }),
    });

    let { suggest } = await response.json();
    if ((suggest != null || suggest != undefined) && suggest.length > 0)
      setSuggestWord(suggest);
  }, [text]);

  useEffect(() => {
    console.log({ suggestWord });
  }, [suggestWord]);

  return (
    <div className="h-full w-full">
      {/* Word input */}
      <div className="w-full relative  p-4">
        <div className="w-full relative ">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="block w-full p-4 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none focus:ring-1"
            type="text"
            placeholder="Search word"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getWordMeaning();
              }
            }}
          />
          <div
            className={`mt-2 w-full max-h-[200px] h-auto border border-gray-300 rounded-md bg-white absolute overflow-y-auto ${
              suggestWord.length > 0 ? '' : 'hidden'
            }`}
          >
            {suggestWord &&
              suggestWord.map((suggest) => {
                return (
                  <div
                    className="text-sm cursor-pointer active:bg-slate-200 p-4 hover:bg-gray-100 w-full bg-slate-50"
                    onClick={() => {
                      setText(suggest);
                      setSuggestWord([]);
                    }}
                  >
                    {suggest}
                  </div>
                );
              })}
          </div>
        </div>
        {/* Pop up when click */}
      </div>

      {/* Result */}
      {data && <h1 className="text-2xl">{data}</h1>}
    </div>
  );
};

export default Dictionary;
