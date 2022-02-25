import data from '../utility/data';

export const loadAllResturants = () => {
  return data;
};

export const loadRestTags = () => {
  return data.brands
    .map(resturant => resturant.tags)
    .reduce((prevVal, currVal) => prevVal.concat(currVal), [])
    .reduce((prev, next) => {
      let item = prev.length > 0 ? prev.find(x => x.name === next.name) : null;
      if (!item) {
        return prev.concat(next);
      } else {
        return prev;
      }
    }, []);
};

export const filterByTag = name => {
  return data.brands.filter(b => b.tags.some(t => t.name == name));
};

export const filterByBrandNamme = name => {
  return name ? data.brands.filter(b => b.name.includes(name)) : data.brands;
};

export const addResturant = resturant => {
  let added = data.brands.push(resturant);
  return added;
};
