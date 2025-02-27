import { debounce } from "lodash";

type SearchBarProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

export default function SearchBar({
  setSearchQuery,
  searchQuery,
}: SearchBarProps) {
  const handleChange = debounce((value: string) => {
    setSearchQuery(value);
  }, 100);

  return (
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
