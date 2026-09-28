import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DonorSidebar from "../../components/Donor/DonorSidebar";
import DonorNavbar from "../../components/Donor/DonorNavbar";
import "./MakeDonation.css";

const MakeDonation = () => {
  const params = useParams();
  const navigate = useNavigate();

  // Get campaign ID from URL
  const id = params.id;

  const campaigns = {
    "1": {
      title: "Education for Children",
      ngo: "Helping Hands Foundation",
      category: "Education",
      raised: 65000,
      goal: 100000,
    },

    "2": {
      title: "Food Distribution Drive",
      ngo: "Helping Hands Foundation",
      category: "Food",
      raised: 48000,
      goal: 75000,
    },

    "3": {
      title: "School Supplies for Children",
      ngo: "Hope For Children",
      category: "Education",
      raised: 52000,
      goal: 80000,
    },

    "4": {
      title: "Medical Support Program",
      ngo: "Care & Support Foundation",
      category: "Healthcare",
      raised: 90000,
      goal: 150000,
    },

    "5": {
      title: "Plant 1000 Trees",
      ngo: "Green Earth Initiative",
      category: "Environment",
      raised: 35000,
      goal: 60000,
    },

    "6": {
      title: "Meals for Families",
      ngo: "Food For All",
      category: "Food",
      raised: 72000,
      goal: 90000,
    },
  };

  const campaign = campaigns[String(id)];

  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const predefinedAmounts = [500, 1000, 2000, 5000];

  const selectedAmount =
    amount === "custom"
      ? Number(customAmount)
      : Number(amount);

  const handleAmountChange = (value) => {
    setAmount(value);

    if (value !== "custom") {
      setCustomAmount("");
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!selectedAmount || selectedAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    if (selectedAmount < 100) {
      alert("Minimum donation amount is ₹100.");
      return;
    }

    setShowConfirmation(true);
  };

  const handleConfirmDonation = () => {
    navigate("/donor/donations", {
      state: {
        newDonation: {
          campaign: campaign.title,
          ngo: campaign.ngo,
          amount: selectedAmount,
          message,
          anonymous,
        },
      },
    });
  };

  /*
    Campaign not found
  */
  if (!campaign) {
    return (
      <div className="donor-layout">
        <DonorSidebar />

        <div className="donor-main">
          <DonorNavbar />

          <main className="make-donation-page">

            <div className="donation-not-found">

              <h2>Campaign Not Found</h2>

              <p>
                The campaign you are trying to donate to does not exist.
              </p>

              <p style={{ color: "red", marginTop: "10px" }}>
                Campaign ID received:{" "}
                <strong>{id || "undefined"}</strong>
              </p>

              <Link
                to="/donor/campaigns"
                className="back-button"
              >
                Back to Campaigns
              </Link>

            </div>

          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="donor-layout">

      <DonorSidebar />

      <div className="donor-main">

        <DonorNavbar />

        <main className="make-donation-page">

          <Link
            to={`/donor/campaigns/${id}`}
            className="back-link"
          >
            ← Back to Campaign
          </Link>

          <div className="donation-heading">

            <h1>Make a Donation</h1>

            <p>
              Your contribution can help make a meaningful difference.
            </p>

          </div>

          <div className="donation-layout">

            {/* Donation Form */}

            <section className="donation-form-card">

              <h2>Donation Details</h2>

              <form onSubmit={handleContinue}>

                <label>
                  Choose Donation Amount
                </label>

                <div className="amount-options">

                  {predefinedAmounts.map((value) => (

                    <button
                      type="button"
                      key={value}
                      className={
                        amount === String(value)
                          ? "amount-button selected"
                          : "amount-button"
                      }
                      onClick={() =>
                        handleAmountChange(String(value))
                      }
                    >
                      ₹{value.toLocaleString()}
                    </button>

                  ))}

                  <button
                    type="button"
                    className={
                      amount === "custom"
                        ? "amount-button selected"
                        : "amount-button"
                    }
                    onClick={() =>
                      handleAmountChange("custom")
                    }
                  >
                    Custom
                  </button>

                </div>

                {amount === "custom" && (

                  <div className="custom-amount">

                    <label>
                      Enter Amount
                    </label>

                    <div className="amount-input">

                      <span>₹</span>

                      <input
                        type="number"
                        min="100"
                        placeholder="Enter donation amount"
                        value={customAmount}
                        onChange={(e) =>
                          setCustomAmount(e.target.value)
                        }
                      />

                    </div>

                  </div>

                )}

                <div className="message-field">

                  <label>
                    Message (Optional)
                  </label>

                  <textarea
                    placeholder="Add a message or note..."
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    rows="4"
                  />

                </div>

                <label className="anonymous-option">

                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={(e) =>
                      setAnonymous(e.target.checked)
                    }
                  />

                  <span>
                    Make this donation anonymous
                  </span>

                </label>

                <button
                  type="submit"
                  className="continue-donation-button"
                >
                  Continue
                </button>

              </form>

            </section>

            {/* Campaign Preview */}

            <aside className="donation-campaign-card">

              <div className="campaign-preview-icon">

                {campaign.category === "Education" && "📚"}
                {campaign.category === "Food" && "🍲"}
                {campaign.category === "Healthcare" && "🏥"}
                {campaign.category === "Environment" && "🌱"}

              </div>

              <span className="campaign-category">
                {campaign.category}
              </span>

              <h2>
                {campaign.title}
              </h2>

              <p>
                Organized by{" "}
                <strong>{campaign.ngo}</strong>
              </p>

              <div className="mini-progress">

                <div
                  style={{
                    width: `${
                      (campaign.raised / campaign.goal) * 100
                    }%`,
                  }}
                ></div>

              </div>

              <div className="mini-progress-info">

                <span>
                  ₹{campaign.raised.toLocaleString()} raised
                </span>

                <span>
                  ₹{campaign.goal.toLocaleString()} goal
                </span>

              </div>

            </aside>

          </div>

          {/* Confirmation Modal */}

          {showConfirmation && (

            <div className="confirmation-overlay">

              <div className="confirmation-modal">

                <button
                  className="close-modal"
                  onClick={() =>
                    setShowConfirmation(false)
                  }
                >
                  ×
                </button>

                <div className="confirmation-icon">
                  ✓
                </div>

                <h2>
                  Confirm Your Donation
                </h2>

                <p>
                  You are about to donate
                </p>

                <div className="confirmation-amount">
                  ₹{selectedAmount.toLocaleString()}
                </div>

                <p>
                  to{" "}
                  <strong>
                    {campaign.title}
                  </strong>
                </p>

                <div className="confirmation-details">

                  <div>
                    <span>NGO</span>
                    <strong>
                      {campaign.ngo}
                    </strong>
                  </div>

                  <div>
                    <span>Donor</span>

                    <strong>
                      {anonymous
                        ? "Anonymous"
                        : "Sindhu"}
                    </strong>
                  </div>

                </div>

                <div className="blockchain-notice">
                  🔗 Your donation transaction will be
                  recorded on the blockchain after backend
                  integration.
                </div>

                <div className="confirmation-actions">

                  <button
                    className="cancel-button"
                    onClick={() =>
                      setShowConfirmation(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    className="confirm-button"
                    onClick={handleConfirmDonation}
                  >
                    Confirm Donation
                  </button>

                </div>

              </div>

            </div>

          )}

        </main>

      </div>

    </div>
  );
};

export default MakeDonation;    