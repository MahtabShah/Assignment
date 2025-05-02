import React, { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef();
  const [validate, setValidate] = useState(false);

  const handelsubmit = (e) => {
    const form = formRef.current;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidate(true);
  };

  return (
    <>
      <form
        action=""
        ref={formRef}
        onSubmit={handelsubmit}
        className={`rounded-4 needs-validation ${
          validate ? "was-validated" : ""
        }`}
        id="formSection"
        noValidate
      >
        <h3 className="fs-4 text-dark fw-bold">
          Book 1 on 1 call counselling from MBA Expert.
        </h3>

        <ul className="d-grid gap-4">
          <div className="d-flex justify-content-between gap-4">
            <li>
              <label htmlFor="name" className="form-label">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your Name"
                required
              />
            </li>

            <li>
              <label htmlFor="number" className="form-label">
                NUMBER
              </label>
              <input
                type="text"
                id="number"
                className="form-control"
                placeholder="Enter your Number"
                required
              />
            </li>
          </div>

          <li>
            <label htmlFor="email" className="form-label">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </li>

          <div className="d-flex justify-content-between gap-4">
            <li>
              <label htmlFor="course" className="form-label">
                COURSE
              </label>
              <input
                type="text"
                id="course"
                className="form-control"
                placeholder="Select course"
                required
              />
            </li>

            <li>
              <label htmlFor="year" className="form-label">
                TARGET YEAR
              </label>
              <input
                type="text"
                id="year"
                className="form-control"
                placeholder="Select Target Year"
                required
              />
            </li>
          </div>

          <div className="d-flex justify-content-between gap-4 align-items-end form-btn">
            <li>
              <label htmlFor="time" className="form-label">
                TIME SLOT
              </label>
              <input
                type="time"
                id="time"
                className="form-control"
                placeholder="Select Time Slot"
                required
              />
            </li>
            <li>
              <button
                type="submit"
                className="btn btn-primary d-flex justify-content-between align-items-center"
              >
                <span>SUBMIT</span>
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </li>
          </div>
        </ul>
        <div
          className={`text-yellred d-block ${
            validate ? "invalid-feedback" : "opacity-0"
          }`}
        >
          Please enter a valid value in red colour box.
        </div>
      </form>
    </>
  );
};

export default Form;
