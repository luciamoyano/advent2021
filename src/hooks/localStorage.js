export const useLocalStorage = () => {
  const setLocalStorage = (gifts) => {
    const key = JSON.stringify(gifts.name);
    const value = JSON.stringify(gifts);
    localStorage.setItem("gifts", value);
  };

  const getLocalStorage = () => {
    const dataStored = { ...localStorage };
    const listStringed = Object.values(dataStored);
    const list = listStringed.map((item) => {
      return JSON.parse(item);
    });
    return list;
  };
  return [getLocalStorage, setLocalStorage];
};
