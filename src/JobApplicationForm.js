import React, { useState } from "react";

const JobApplicationForm = () => {
  // Initial form data state

  const [formData, setFormData] = useState({
    firstName: "",

    lastName: "",

    email: "",

    address: "",

    gender: "",

    salary: "",

    resume: null,
  });

  // State for showing the form data after submission

  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input changes (update formData in real-time)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // If input is file, set the file value in the state

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,

        [name]: files[0], // For file input, we only save the first file
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,

        [name]: value,
      }));
    }
  };

  // Handle form submission (save the form data after submit)

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Update the state with the form data when the form is submitted

    setSubmittedData(formData);
  };

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <h2>Job Application Form</h2>

      <br />

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName1" className="form-label">
            First Name
          </label>

          <input
            type="text"
            className="form-control"
            id="inputName1"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputName2" className="form-label">
            Last Name
          </label>

          <input
            type="text"
            className="form-control"
            id="inputName2"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>

          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="fileUpload" className="form-label">
            Upload Resume
          </label>

          <input
            type="file"
            className="form-control"
            id="fileUpload"
            name="resume"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Gender
          </label>

          <select
            id="inputState"
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender Type</option>

            <option value="Male">Male</option>

            <option value="Female">Female</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>

          <input
            type="text"
            className="form-control"
            id="inputSalary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      {/* Display the submitted data after the form is submitted in a user-friendly format */}

      {submittedData && (
        <div className="mt-4">
          <h3>Submitted Data:</h3>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>First Name</strong>
                </td>

                <td>{submittedData.firstName}</td>
              </tr>

              <tr>
                <td>
                  <strong>Last Name</strong>
                </td>

                <td>{submittedData.lastName}</td>
              </tr>

              <tr>
                <td>
                  <strong>Email</strong>
                </td>

                <td>{submittedData.email}</td>
              </tr>

              <tr>
                <td>
                  <strong>Address</strong>
                </td>

                <td>{submittedData.address}</td>
              </tr>

              <tr>
                <td>
                  <strong>Gender</strong>
                </td>

                <td>{submittedData.gender}</td>
              </tr>

              <tr>
                <td>
                  <strong>Salary</strong>
                </td>

                <td>{submittedData.salary}</td>
              </tr>

              <tr>
                <td>
                  <strong>Resume</strong>
                </td>

                <td>
                  {submittedData.resume
                    ? submittedData.resume.name
                    : "No file uploaded"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
