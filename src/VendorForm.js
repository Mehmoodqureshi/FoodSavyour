import "./VendorForm.css"; 
import React, { useState, useEffect } from "react";
import { db } from './firebase';

function VendorForm() {
 const [vendorData, setVendorData] = useState({
      vendorName: "",
      quantity: "",
      items: "",
      address: "",
      phoneNumber: "",
 });

 // State to control the display of the submission message
 const [submissionMessage, setSubmissionMessage] = useState("");

 const handleChange = (e) => {
      setVendorData({ ...vendorData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

      await db.collection('Vendors').add({
        ...vendorData,
        isRead: false,
      });
      console.log('Submitting vendor data:', vendorData);
      console.log('Document successfully added!');

      // Reset the form state
      setVendorData({
        vendorName: "",
        quantity: "",
        items: "",
        address: "",
        phoneNumber: "",
      });
      // Display the submission message
      setSubmissionMessage("Form Submitted");
 };

 return (
    <div className="vendor-form-container">
      <h2 className="form-heading">Vendor Information</h2>
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      <form onSubmit={handleSubmit} className="vendor-form">
        <label htmlFor="vendorName">Vendor Name</label>
        <input
          type="text"
          id="vendorName"
          name="vendorName"
          value={vendorData.vendorName}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={vendorData.quantity}
          onChange={handleChange}
          required
        />

        <label htmlFor="items">Items</label>
        <input
          type="text"
          id="items"
          name="items"
          value={vendorData.items}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={vendorData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={vendorData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
 );
}

export default VendorForm;