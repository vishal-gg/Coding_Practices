import React, { useState, useRef, useMemo } from "react";

function SearchFilter() {
  const [names, setNames] = useState<(string | undefined)[]>(["eren", "mikasa"]);
  const [query, setQuery] = useState("");

  const filteredNames = useMemo(() => {
    return names.filter((names) => {
      return names?.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, names]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddingItems = (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    setNames((prev) => {
      return [...prev, value];
    });
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: "5rem", textAlign: "center" }}>
      <label htmlFor="query">search:</label>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ backgroundColor: "skyblue" }}
        type="text"
        id="query"
      />
      <div style={{ margin: "1rem" }}>
        <form onSubmit={handleAddingItems}>
          <input
            style={{ backgroundColor: "yellow" }}
            ref={inputRef}
            type="text"
          />
          <button type="submit">Add Names</button>
        </form>
      </div>
      <h1 style={{ fontSize: "2rem" }}>Names:</h1>
      {filteredNames &&
        filteredNames.map((names, index) => <div key={index}>{names}</div>)}
    </div>
  );
}

export default SearchFilter;
