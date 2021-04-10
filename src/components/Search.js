import React, { useState } from "react";

const Search = (props) => {
  const [SearchValue, setSearchValue] = useState("");

  // 获取输入框内searchValue的值
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  };
  //清空输入框searchValue的值
  const resetInputField=()=>{
    setSearchValue('')
  }
  //点击事件
  const callSearchFunction = (e) => {
    e.preventDefault()
    props.search(SearchValue)
    resetInputField()
  };

  return (
    <form action="" className="search">
      <input
        value={SearchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search