import React, { useEffect, useState } from "react";
import logo from "../assets/ClipCraze.png";
import menuIcon from "../assets/menuIcon.png";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../constants";
import { useDispatch } from "react-redux";
import { loadData } from "../store/videoDataSlice";
import { useNavigate } from "react-router-dom";
import { titleSetter } from "../store/videoDataSlice";
import { YOUTUBE_SEARCH } from "../constants";
import searchIcon from "../assets/searchIcon.png";
import { YOUTUBE_AUTOCOMPLETE } from "../constants";
import { UseSelector } from "react-redux";

const Header = () => {
  const [searchResults, setSearchResults] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsFocus, setSuggestionsFocus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    searchHandler(searchResults);
    // const timer = setTimeout(() => searchHandler(searchResults), 200);
  }, [searchResults]);

  const searchHandler = async (keyword) => {
    const fetchData = await fetch(YOUTUBE_AUTOCOMPLETE(keyword));
    const res = await fetchData.json();
    console.log("search response from search handler-->", res);
    setSuggestions(res[1]);
  };

  const dropdownPick = async (item) => {
    console.log("dispatched!!!");
    const fetchData = await fetch(
      YOUTUBE_SEARCH(item) + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const res = await fetchData.json();
    dispatch(loadData(res.items));
    setSearchResults("");
    dispatch(titleSetter(searchResults ? `Search results for: ${item}` : ""));
    navigate("/");
  };

  const homeHandler = async () => {
    navigate("/");
    const res = await fetch(
      YOUTUBE_POPULAR_VIDEOS_API + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await res.json();
    dispatch(loadData(json.items));
    dispatch(titleSetter("Popular Videos"));
  };

  const inputHandler = (event) => {
    setSearchResults(event.target.value);
    setShowSuggestions(true);
  };

  return (
    <div className="sticky top-0 z-20 flex shadow-lg bg-slate-100">
      <div className="w-[5%] my-auto">
        <img
          className="w-full min-w-5 h-5 sm:h-10 p-1"
          src={menuIcon}
          alt="image"
        />
      </div>
      <div className="w-[15%]">
        <img
          className="w-full min-w-10 h-15 cursor-pointer"
          onClick={homeHandler}
          src={logo}
          alt="image"
        />
      </div>
      <div className="relative w-[80%] my-auto px-6">
        <div className="flex w-full">
          <input
            type="text"
            placeholder=" Search"
            className="border border-black w-[80%] h-7 p-2 rounded-l-md"
            onChange={inputHandler}
            value={searchResults}
            onFocus={() => {
              console.log("input in focus bro!");
              if (suggestions.length !== 0) {
                setShowSuggestions(true);
              }
            }}
            onBlur={() => {
              if (!suggestionsFocus) {
                console.log("dropdown closed!");
                setShowSuggestions(false);
              }
            }}
          />
          <button className="">
            <img
              src={searchIcon}
              className="h-7 p-1 border border-black rounded-r-md"
            />
          </button>
        </div>
        {showSuggestions && searchResults && (
          <div className="relative w-[80%]">
            <div className=" absolute  w-[100%] ">
              <ul
                className=" bg-slate-400  w-full rounded-md p-2"
                onFocus={() => {
                  console.log("li in focus bro!");
                  setSuggestionsFocus(true);
                }}
                onBlur={() => {
                  setSuggestionsFocus(false);
                }}
              >
                {suggestions.map((item) => (
                  <li
                    tabIndex="0"
                    key={item + "dummyID"}
                    onMouseDown={() => dropdownPick(item)}
                    className="cursor-pointer hover:bg-slate-600 p-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
