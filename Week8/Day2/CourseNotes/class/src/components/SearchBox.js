const SearchBox = (props) => {
  // console.log(props.searchItem);
  return (
    <>
      <h4>Search</h4>
      <div>
        <input type="text" onChange={props.searchItem} />
        <button onClick={props.search}>Search</button>
      </div>
    </>
  );
};
export default SearchBox;
