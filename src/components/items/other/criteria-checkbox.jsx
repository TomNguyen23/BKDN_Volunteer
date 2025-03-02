import { useState } from "react";
import PropTypes from "prop-types";

const CriteriaCheckboxItem = ({ label, description, group, index, value, onCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = (e) => {
        const { checked } = e.target;
        setIsChecked(checked);
        onCheckboxChange(value, checked); // Truyền giá trị mới ra ngoài
    };

    return (
        <div className="flex items-center space-x-2 mb-4">
            <input
                type="checkbox"
                id={`checkbox${group}-${index}`}
                className="checkbox"
                value={value}
                checked={isChecked}
                onChange={handleRadioChange}
            />
            <label
                htmlFor={`checkbox${group}-${index}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
                {description && <p className="text-xs text-slate-600">{description}</p>}
            </label>
        </div>
    );
};

CriteriaCheckboxItem.propTypes = {
    index: PropTypes.number,
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
    group: PropTypes.string,
    onCheckboxChange: PropTypes.func,
};

export default CriteriaCheckboxItem;