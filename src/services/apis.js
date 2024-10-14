import instance from "./instance";

export const saveData = (data) => {
  return instance.post(`Api/Item-Supplier/Save-Items-Suppliers`, data);
};

export const getAllItems = () => {
  return instance.get(`Api/Item-Supplier/Get-All-Items`);
};

export const getCountries = () => {
  return instance.get(`Api/countrystatecity/Get-All-CountryList`);
};

export const getState = (countryId) => {
  return instance.get(
    `Api/countrystatecity/Get-All-SateList-By-Country?countryId=${countryId}`
  );
};

export const getCity = (countryId, stateId) => {
  return instance.get(
    `Api/countrystatecity/Get-All-CityList-By-Country-State?countryId=${countryId}&stateId=${stateId}`
  );
};
