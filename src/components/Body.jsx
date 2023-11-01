import React, { useEffect, useState } from "react";
import "./Body.css";
import { AiOutlineSearch } from "react-icons/ai";
import WordDefinition from "./WordDefinition";

const Body = () => {
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not okay");
      }
      const jsonData = await response.json();
      setWordData(jsonData);
    } catch (e) {
      console.log("Error fetching data", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="input-ser">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
          />
          <div className="search-button">
            <button type="submit">
              <AiOutlineSearch style={{ paddingRight: "1rem", fontSize: "1.2rem" }} />
            </button>
          </div>
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {wordData.map((word, index) => (
        <WordDefinition key={index} wordData={word} />
      ))}
    </div>
  );
};

export default Body;
