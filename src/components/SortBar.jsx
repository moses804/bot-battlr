function SortBar({ onSort, onFilter, classes }) {
  return (
    <div className="sort-bar flex gap-4 mb-4">
      {/* Filter by class */}
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">All Classes</option>
        {classes.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Sort by stat */}
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">Sort By</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
