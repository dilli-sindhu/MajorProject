import "./Admin.css";

function AdminDashboard() {
  return (
    <div className="admin-page">

      <div className="admin-page-header">

        <h1>Welcome, Admin</h1>

        <p>
          Here's what's happening today.
        </p>

      </div>


      {/* STATISTICS */}

      <div className="admin-stat-grid">

        <div className="admin-stat-card">
          <span>Total NGOs</span>
          <h2>128</h2>
          <small>+12 This Month</small>
        </div>


        <div className="admin-stat-card">
          <span>Total Donations</span>
          <h2>₹24,58,760</h2>
          <small>+18.5% This Month</small>
        </div>


        <div className="admin-stat-card">
          <span>Total Expenditure</span>
          <h2>₹12,45,300</h2>
          <small>+8.2% This Month</small>
        </div>


        <div className="admin-stat-card">
          <span>Total Campaigns</span>
          <h2>156</h2>
          <small>+7 This Month</small>
        </div>

      </div>


      {/* DASHBOARD CONTENT */}

      <div className="admin-table-container">

        <table className="admin-table">

          <thead>
            <tr>
              <th>Recent Transaction</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Donation by Ramesh Kumar</td>
              <td>Donation</td>
              <td>₹5,000</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Helping Hands</td>
              <td>Expenditure</td>
              <td>₹12,000</td>
              <td>Verified</td>
            </tr>

            <tr>
              <td>Donation by Ankit</td>
              <td>Donation</td>
              <td>₹3,500</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;  