import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PinLogin({ length = 4, correctPin = "1234" }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const backgroundImageUrl = "src/assets/images/bg.jpg";

  const focusIndex = (i) => inputsRef.current[i]?.focus();

  const handleChange = (e, i) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;
    const newVals = [...values];
    newVals[i] = val;
    setValues(newVals);
    if (i < length - 1) focusIndex(i + 1);
    if (newVals.every(Boolean)) triggerComplete(newVals.join(""));
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newVals = [...values];
      if (newVals[i]) {
        newVals[i] = "";
        setValues(newVals);
      } else if (i > 0) {
        newVals[i - 1] = "";
        setValues(newVals);
        focusIndex(i - 1);
      }
    }
  };

  const triggerComplete = (pin) => {
    if (pin === correctPin) {
      navigate("/dashboard/home"); // 👈 go to home page
    } else {
      setError("Incorrect PIN");
      setTimeout(() => {
        setValues(Array(length).fill(""));
        focusIndex(0);
      }, 800);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light"  style={{
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="p-4 bg-white rounded shadow-sm text-center">
        <h5 className="mb-3">Enter 4-Digit PIN</h5>
        <div className="d-flex gap-2 justify-content-center mb-3">
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="password"
              maxLength="1"
              inputMode="numeric"
              className="form-control text-center"
              style={{
                width: "60px",
                height: "60px",
                fontSize: "1.5rem",
                borderRadius: "12px",
              }}
              value={v}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>
        {error && <div className="text-danger mb-2">{error}</div>}
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setValues(Array(length).fill(""));
            setError("");
            focusIndex(0);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
