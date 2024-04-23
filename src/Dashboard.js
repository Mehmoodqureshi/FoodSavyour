import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useParams, Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  console.log("Dashboard component mounted");
  const { section = "home" } = useParams();
  console.log("Current section:", section);
  const [unreadCounts, setUnreadCounts] = useState({
    vendors: 0,
    suggestions: 0,
    problems: 0,
  });
  const [data, setData] = useState({
    vendors: [],
    suggestions: [],
    problems: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from Firestore
        const vendorsSnapshot = await db.collection("Vendors").get();
        const suggestionsSnapshot = await db.collection("Suggestions").get();
        const problemsSnapshot = await db.collection("Problems").get();

        // Update state with fetched data
        setData({
          vendors: vendorsSnapshot.docs.map((doc) => doc.data()),
          suggestions: suggestionsSnapshot.docs.map((doc) => doc.data()),
          problems: problemsSnapshot.docs.map((doc) => doc.data()),
        });
        console.log("Data state updated:", data);

        setUnreadCounts({
          vendors: vendorsSnapshot.size,
          suggestions: suggestionsSnapshot.size,
          problems: problemsSnapshot.size,
        });
        console.log("Unread counts state updated:", unreadCounts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data, unreadCounts);
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h1>Admin Dashboard</h1>
        <div>
          <h2>
            <Link to="/dashboard/home">Home</Link>
          </h2>
          <h2>
            <Link to="/dashboard/vendors">Vendors: {unreadCounts.vendors}</Link>
          </h2>
          <h2>
            <Link to="/dashboard/suggestions">
              Suggestions: {unreadCounts.suggestions}
            </Link>
          </h2>
          <h2>
            <Link to="/dashboard/problems">
              Problems: {unreadCounts.problems}
            </Link>
          </h2>
        </div>
      </div>
      <div className="content">
      {section === "home" && (
         <div>
           <h4>Home Content</h4>
           <div>
             <h5>Vendors</h5>
             <table>
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Quantity</th>
                   <th>Items</th>
                   <th>Address</th>
                   <th>Phone Number</th>
                 </tr>
               </thead>
               <tbody>
                 {data.vendors.map((vendor, index) => (
                   <tr key={index}>
                     <td>{vendor.vendorName}</td>
                     <td>{vendor.quantity}</td>
                     <td>{vendor.items}</td>
                     <td>{vendor.address}</td>
                     <td>{vendor.phoneNumber}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div>
             <h5>Suggestions</h5>
             <table>
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Subject</th>
                   <th>Suggestions</th>
                 </tr>
               </thead>
               <tbody>
                 {data.suggestions.map((suggestion, index) => (
                   <tr key={index}>
                     <td>{suggestion.name}</td>
                     <td>{suggestion.email}</td>
                     <td>{suggestion.subject}</td>
                     <td>{suggestion.suggestion}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <div>
             <h5>Problems</h5>
             <table>
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone Number</th>
                   <th>Problems</th>
                 </tr>
               </thead>
               <tbody>
                 {data.problems.map((problem, index) => (
                   <tr key={index}>
                     <td>{problem.name}</td>
                     <td>{problem.email}</td>
                     <td>{problem.phoneNumber}</td>
                     <td>{problem.problemFaced}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       )}
        {section === "vendors" && (
          <div>
            <h4>Vendors</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Items</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data.vendors.map((vendor, index) => {
                  console.log(vendor);
                  return (
                    <tr key={index}>
                      <td>{vendor.vendorName}</td>
                      <td>{vendor.quantity}</td>
                      <td>{vendor.items}</td>
                      <td>{vendor.address}</td>
                      <td>{vendor.phoneNumber}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {section === "suggestions" && (
          <div>
            <h4>Suggestions</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Suggestions</th>
                </tr>
              </thead>
              <tbody>
                {data.suggestions.map((suggestion, index) => (
                  <tr key={index}>
                    <td>{suggestion.name}</td>
                    <td>{suggestion.email}</td>
                    <td>{suggestion.subject}</td>
                    <td>{suggestion.suggestion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section === "problems" && (
          <div>
            <h4>Problems</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Problems</th>
                </tr>
              </thead>
              <tbody>
                {data.problems.map((problem, index) => (
                  <tr key={index}>
                    <td>{problem.name}</td>
                    <td>{problem.email}</td>
                    <td>{problem.phoneNumber}</td>
                    <td>{problem.problemFaced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
