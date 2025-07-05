import useStorage from "./hooks/useStorage";

const ThemeSelectDropdown = () => {
  const [storedValue, setStorageValue] = useStorage("theme", "light");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStorageValue(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option key="light" value="light">
          Light
        </option>
        <option key="dark" value="dark">
          Dark
        </option>
      </select>
      <h3>Value from local storage is {storedValue}</h3>
    </div>
  );
};

export default ThemeSelectDropdown;
