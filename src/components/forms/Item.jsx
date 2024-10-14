import styles from "../../styles/Main.module.css";

const ItemDetails = () => {
  return (
    <div className={styles.itemDetail}>
      <h3 className="tHeading">Item Details</h3>
      <div className={styles.itemSection}>
        <div className={styles.itemForm}>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="itemName">Item Name</label>
              <input
                type="text"
                id="itemName"
                placeholder="Enter item name"
                maxLength={225}
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                placeholder="Enter quantity"
                max={10}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <label htmlFor="unitPrice">Unit Price</label>
              <input
                type="number"
                id="unitPrice"
                placeholder="Enter unit price"
                max={10}
              />
            </div>
            <div className={styles.col}>
              <label htmlFor="doSubmission">Date of Submission</label>
              <input type="date" id="doSubmission" placeholder="Select date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
