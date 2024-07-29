"use client";
import { useState, useEffect } from "react";

const ListSelect = ({ items, onSelect }) => {
  return (
    <div>
      <ul style={{ display: "flex", padding: 0, listStyleType: "none" }}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelect(item)}
            style={{
              marginRight: "10px",
              cursor: "pointer",
              border: "1px solid #ddd",
              padding: "5px 10px",
              borderRadius: "4px"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ["Car", "Copy", "Laptop", "App", "Application"];

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const searchFilteredItems = items.filter((item) =>
      item.toUpperCase().includes(searchInput.toUpperCase())
    );
    const selectionFilteredItems = selectedItem
      ? searchFilteredItems.filter((item) =>
          item.toUpperCase().includes(selectedItem.toUpperCase())
        )
      : searchFilteredItems;

    setFilteredItems(selectionFilteredItems);
    setStoredFilteredItems(selectionFilteredItems);
  }, [searchInput, selectedItem]);

  const handleDeselect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
      setFilteredItems([...filteredItems, item]);
    }
  };

  return (
    <div>
      <h1>Select an Item from the List</h1>
      <div>
        <input
          type="search"
          placeholder="Search Items"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <ListSelect items={filteredItems} onSelect={handleSelect} />
      {selectedItem && <p>Selected Item : {selectedItem}</p>}
      <div>
        <h2>Filtered Items : </h2>
        <ul style={{ display: "flex", padding: 0, listStyleType: "none" }}>
          {storedFilteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                marginRight: "10px",
                border: "1px solid #ddd",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

