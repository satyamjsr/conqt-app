import { useEffect, useState } from "react";
import styles from "../../styles/Main.module.css";
import { getCity, getCountries, getState } from "../../services/apis";

const SupplierDetails = () => {
  const [countryList, setCountryList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [stateList, setStateList] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const [cityList, setCityList] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // Fetch Country List
  useEffect(() => {
    getCountries().then((res) => setCountryList(res.data.data.countyList));
  }, []);

  //   Fetching State List
  useEffect(() => {
    if (selectedCountry)
      getState(selectedCountry).then((res) =>
        setStateList(res.data.data.stateList)
      );
  }, [selectedCountry]);

  // Fetching City List
  useEffect(() => {
    if (selectedCountry && selectedState)
      getCity(selectedCountry, selectedState).then((res) =>
        setCityList(res.data.data.cityList)
      );
  }, [selectedCountry, selectedState]);

  return (
    <div className={styles.itemDetail}>
      <h3 className="tHeading">Supplier Details</h3>
      <div className={styles.itemSection}>
        <div className={styles.itemForm}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                id="supplierName"
                placeholder="Enter supplier name"
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter company name"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={selectedCountry || ""}
                onChange={(event) => setSelectedCountry(event.target.value)}
              >
                <option value={""}>-- Select Country --</option>
                {countryList &&
                  countryList.map((item) => (
                    <option key={item.countryId} value={item.countryId}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.col}>
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={selectedState || ""}
                onChange={(event) => setSelectedState(event.target.value)}
              >
                <option value={""}>-- Select State --</option>
                {stateList &&
                  stateList.map((item) => (
                    <option key={item.stateId} value={item.stateId}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="city">City</label>
              <select
                id="city"
                value={selectedCity || ""}
                onChange={(event) => setSelectedCity(event.target.value)}
              >
                <option value={""}>-- Select City --</option>
                {cityList &&
                  cityList.map((item) => (
                    <option key={item.cityId} value={item.cityId}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.col}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="email">Mobile Number</label>
              <input
                type="number"
                id="mobile"
                placeholder="Enter mobile number"
                maxLength={10}
                minLength={10}
              />
            </div>
          </div>
          <div className={styles.col}></div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
