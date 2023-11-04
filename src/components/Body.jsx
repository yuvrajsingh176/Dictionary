import React, { useEffect, useState } from "react";
import "./Body.css";
import { AiOutlineSearch } from "react-icons/ai";
import WordDefinition from "./WordDefinition";

const Body = () => {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const startTyping = () => {
        setIsTyping(true);
    }
    const stopTyping = () => {
        setIsTyping(false); 
    }
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );
        if (!response.ok) {
            if (response.status === 404) {
                setError("Actually the problem was we could not find the word in the dictionary,if this word is added in the dictionary in the future we will show the response 🙅‍♂️🙅🙅‍♀️");          
            }
            else if (response.status === 500) {
                setError("Internal server error!!");          
                
            }
            else {
                setError("we could not figure out what the error was!!")
            }
            setLoading(false);
            return;
      }
      const jsonData = await response.json();
        setWordData(jsonData);
        setError(null)
    } catch (e) {
        setError("An error occurred while fetching data");
      console.log("Error fetching data", e);
    }
    setLoading(false);
  };



  const handleSearch = (e) => {
      e.preventDefault(); // Prevent the default form submission
      setWordData([])
      setError(null);
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="input-ser" >
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
                      className={`input ${isTyping?'glowing':" "}`}
                      onFocus={startTyping}
                      onBlur={stopTyping}
          />
          <div className="search-button">
            <button type="submit">
              <AiOutlineSearch style={{ paddingRight: "1rem", fontSize: "1.2rem" }} />
            </button>
          </div>
        </div>
      </form>
          {loading && <p>Loading...</p>}
          {error && <p style={{marginTop:"4rem"}}> {error}</p>}
      { wordData.map((word, index) => (
        <WordDefinition key={index} wordData={word} />
      ))}
    </div>
  );
};

export default Body;
