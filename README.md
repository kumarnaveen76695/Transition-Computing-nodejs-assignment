# Checklist System
This project is a Checklist System built with Node.js. It evaluates specific conditions based on data fetched from an API and displays a dashboard with the results, showing whether each condition has passed or failed.

# Features
Fetches input data from an external API.
Evaluates predefined checklist rules:
Valuation Fee Paid: isValuationFeePaid must be true.
UK Resident: isUkResident must be true.
Risk Rating Medium: riskRating must be "Medium".
LTV Below 60%: Loan-to-Value ratio (calculated as (Loan Required / Purchase Price) * 100) must be less than 60%.
Displays results on a simple dashboard (Passed/Failed status for each rule).
Clean, modular, and future-proof code for easy addition or modification of rules.
# Technologies Used
Backend: Node.js, Express.js
HTTP Client: Axios
Development Tool: Nodemon (for local development)
Frontend: Simple HTML/CSS for dashboard display

# Start this project:

npm start

# Deployed url is :
https://transition-computing-nodejs-assignment-2.onrender.com

![image](https://github.com/user-attachments/assets/b3e1976b-6135-4e5d-a8f6-7cf0214edd61)

