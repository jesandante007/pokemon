export const getItems = () => {
  const items = JSON.parse(localStorage.getItem("pokemons")) || [];
  return items;
};

export const saveItem = (item) => {
  const savedItems = getItems();
  console.log(item);
  if (savedItems.length > 0) {
    const exist = savedItems.find((pk) => pk.id == item.id);
    if (!exist) {
      const newItems = [...savedItems, item];
      localStorage.setItem("pokemons", JSON.stringify(newItems));
    }
  } else {
    savedItems.push(item);
    localStorage.setItem("pokemons", JSON.stringify(savedItems));
  }
};

export const removeItem = (item) => {
  const savedItems = getItems();
  const remaining = savedItems.filter((pk) => pk.id != item.id);
  localStorage.setItem("pokemons", JSON.stringify(remaining));
};
