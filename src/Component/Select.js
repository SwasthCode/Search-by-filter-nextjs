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
              borderRadius: "4px",
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
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const items = ["Apple", "Car", "Copy", "Laptop", "App", "Application"];

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setFilteredItems(filteredItems.filter((i) => i !== item));
    }
  };

  const handleDeselect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
      setFilteredItems([...filteredItems, item]);
    }
  };

  useEffect(() => {
    const searchFilteredItems = items.filter((item) =>
      item.toUpperCase().includes(searchInput.toUpperCase())
    );
    const finalFilteredItems = searchFilteredItems.filter(
      (item) => !selectedItems.includes(item)
    );
    setFilteredItems(finalFilteredItems);
  }, [searchInput, selectedItems]);

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        Select an Item from the List
      </h1>
      <div>
        <input
          type="search"
          placeholder="Search Items"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <ListSelect items={filteredItems} onSelect={handleSelect} />
      {selectedItems.length > 0 && (
        <div>
          <h2
            style={{
              fontWeight: "bold",
            }}
          >
            Selected Items :{" "}
          </h2>
          <ul style={{ display: "flex", padding: 0, listStyleType: "none" }}>
            {selectedItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleDeselect(item)}
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
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
      )}
      <div>
        <h2
          style={{
            fontWeight: "bold",
          }}
        >
          Filtered Items :{" "}
        </h2>
        <ul style={{ display: "flex", padding: 0, listStyleType: "none" }}>
          {filteredItems.map((item, index) => (
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
