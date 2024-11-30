module.exports = [
    {
      name: "Valuation Fee Paid",
      description: "isValuationFeePaid should be true.",
      condition: (data) => data.isValuationFeePaid === true,
    },
    {
      name: "UK Resident",
      description: "isUkResident should be true.",
      condition: (data) => data.isUkResident === true,
    },
    {
      name: "Risk Rating Medium",
      description: 'riskRating should be "Medium".',
      condition: (data) => data.riskRating === "Medium",
    },
    {
      name: "LTV Below 60%",
      description:
        "Loan-to-Value should be less than 60%. Formula: (Loan Required / Purchase Price) * 100",
      condition: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];

  