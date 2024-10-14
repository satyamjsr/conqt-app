import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import ItemDetails from "./forms/Item";
import SupplierDetails from "./forms/Supplier";
import { getAllItems, saveData } from "../services/apis";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllItems().then((res) => setData(res.data.data.items));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const t = event.target;

    const formData = {
      itemDetails: {
        itemName: t.itemName.value,
        quantity: t.quantity.value,
        unitPrice: t.unitPrice.value,
        currency: "$",
        submissionDate: t.doSubmission.value,
      },
      supplier: {
        supplierName: t.supplierName.value,
        companyName: t.companyName.value,
        email: t.email.value,
        phoneCode: "+91",
        phoneNumber: t.mobile.value,
        countryId: t.country.value,
        stateId: t.state.value,
        cityId: t.city.value,
      },
    };

    saveData(formData).then(() =>
      alert("Data Saved").catch((err) => console.log(err))
    );
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.toggleSection}>
          <div>
            <input
              type="checkbox"
              id="item"
              name="item"
              onChange={(event) => console.log(event)}
            />
            <label>Item</label>
          </div>
          <div>
            <input type="checkbox" id="supplier" name="supplier" />
            <label>Supplier</label>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <ItemDetails />
          <SupplierDetails />
          <div className={styles.formSubmit}>
            <h3 className="tHeading">Submitted Data</h3>
            <p style={{ fontSize: "12px" }}>
              The data submitted by users will be displayed below
            </p>
            <button className={styles.submitBtn}>Save Changes</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <td>{item.Supplier.supplierName}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.Supplier.cityName}</td>
                  <td>{item.Supplier.countryName}</td>
                  <td>{item.Supplier.email}</td>
                  <td>
                    +{item.Supplier.phoneCode}-{item.Supplier.phoneNumber}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Main;
