import React from 'react';

const WordDefinition = ({ wordData }) => {
  if (!wordData) {
    return null;
  }

  return (
    <div className="word-definition">
      <div className="word-phonetic">
        <h1>{wordData.word}</h1>
        <ul>
          {wordData.phonetics.map((phonetic, phoneticIndex) => (
            <li key={phoneticIndex}>{phonetic.text}</li>
          ))}
        </ul>
      </div>
      <div className="audio-icon">
        <audio controls>
          {wordData.phonetics.map((phonetic, phoneticIndex) => (
            <source key={phoneticIndex} src={phonetic.audio} type="audio/mpeg" />
          ))}
          Your browser does not support the audio element.
        </audio>
      </div>

      {wordData.meanings.map((meaning, meaningIndex) => (
        <div className="part-of-speech" key={meaningIndex}>
          <div className="part-of-speech-title">
            <h3>{meaning.partOfSpeech}</h3>
            <div className="line"></div>
          </div>
          <ul>
            {meaning.definitions.map((definition, definitionIndex) => (
              <li key={definitionIndex}>
                <p>{definition.definition}</p>
                {definition.example && <p className="example">{definition.example}</p>}
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (
            <div className="synonym" style={{ display: 'flex', width: '50%', fontSize: '1.5rem' }}>
              <p style={{ marginRight: '2rem', color: 'gray' }}>Synonyms</p>
              <p style={{ color: 'purple' }}>{meaning.synonyms.join(', ')}</p>
            </div>
          )}
          {meaning.antonyms.length > 0 && (
            <div className="antonym" style={{ display: 'flex', width: '50%', fontSize: '1.5rem' }}>
              <p style={{ marginRight: '2rem', color: 'gray' }}>Antonyms</p>
              <p style={{ color: 'red' }}>{meaning.antonyms.join(', ')}</p>
            </div>
          )}
        </div>
      ))}

      <div className="source-urls">
        {wordData.sourceUrls.map((sourceUrl, index) => (
          <a key={index} href={sourceUrl} target="_blank" rel="noopener noreferrer">
            Source {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default WordDefinition;
