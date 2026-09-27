// Component Imports
import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  // State to store error messages (null means no error)
  const [errorMessage, setErrorMessage] = useState(null);

  // State to control Modal visibility
  const [showModal, setShowModal] = useState(false);

  // Single State object to manage all form inputs
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  // Handle form submission and input validation
  function handleFormSubmit(e) {
    e.preventDefault(); // Prevent default page refresh
    setErrorMessage(null); // Reset previous errors

    const { age, phoneNumber } = loanInputs;

    // Check age requirements (between 18 and 100)
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } 
    // Check phone number length (between 10 and 12 digits)
    else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format is Incorrect");
    }

    // Open the modal after validation
    setShowModal(true);
  }

  // Derived State: Check if required inputs are empty to disable button
  const isBtnDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  // Close modal when clicking outside on the background container
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  return (
    // Outer container with click handler for closing the modal
    <div className="form-Container" onClick={handleDivClick}>
      <form className="form">
        <h1>Requesting a Loan</h1>
        <hr />

        {/* Name Input Field */}
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        />

        {/* Phone Number Input Field */}
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        />

        {/* Age Input Field */}
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        {/* Employee Checkbox Field */}
        <label id="employee">Are You an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />

        {/* Salary Range Dropdown */}
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option>Less than 500$</option>
          <option>between 550$ and 2000 $</option>
          <option>above</option>
        </select>

        {/* Submit Button with conditional disabled styling */}
        <button
          className={isBtnDisabled ? "disabled" : ""}
          id="submit-loan-btn"
          disabled={isBtnDisabled}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>

      {/* Modal Popup Component */}
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}