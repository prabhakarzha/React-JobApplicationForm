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

  // Form field definitions

  const formFields = [
    { label: "First Name", name: "firstName", type: "text" },

    { label: "Last Name", name: "lastName", type: "text" },

    { label: "Email", name: "email", type: "email" },

    { label: "Address", name: "address", type: "text" },

    { label: "Salary", name: "salary", type: "text" },

    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female"],
    },

    { label: "Upload Resume", name: "resume", type: "file" },
  ];

  // Handle form input changes (update formData in real-time)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,

        [name]: files[0], // Store only the first file selected
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
    e.preventDefault();

    setSubmittedData(formData);
  };

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <h2>Job Application Form</h2>

      <br />

      <form className="row g-3" onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div
            key={field.name}
            className={`col-md-${field.type === "select" ? 4 : 6}`}
          >
            <label htmlFor={field.name} className="form-label">
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                id={field.name}
                className="form-select"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                <option value="">Select {field.label}</option>

                {field.options?.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                type="file"
                className="form-control"
                id={field.name}
                name={field.name}
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                className="form-control"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

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
              {Object.keys(submittedData).map((key) => (
                <tr key={key}>
                  <td>
                    <strong>
                      {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </strong>
                  </td>

                  <td>
                    {key === "resume"
                      ? submittedData[key]
                        ? submittedData[key].name
                        : "No file uploaded"
                      : submittedData[key] || "Not provided"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
