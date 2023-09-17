import { useState } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  checked: boolean ;
  handleCheck : () => void;
}

export default function Checkbox({checked, handleCheck}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = () => {
    setIsChecked(!checked);
    handleCheck();
  };

  return (
    <>
      <div className="checkbox">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className={`mark ${checked ? "checked" : ""}`}>
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 5.375L2.20711 4.08211C1.81658 3.69158 1.18342 3.69158 0.792893 4.08211L0.707107 4.16789C0.316583 4.55842 0.316583 5.19158 0.707107 5.58211L2.79289 7.66789C3.18342 8.05842 3.81658 8.05842 4.20711 7.66789L9.29289 2.58211C9.68342 2.19158 9.68342 1.55842 9.29289 1.16789L9.20711 1.08211C8.81658 0.691583 8.18342 0.691583 7.79289 1.08211L3.5 5.375Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <label>
        </label>
      </div>
    </>
  );
}
