import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ defaultChecked = false, onChange }) => {
	const [isChecked, setIsChecked] = useState(defaultChecked);

	const handleToggle = () => {
		const newState = !isChecked;
		setIsChecked(newState);
		if (onChange) {
			onChange(newState);
		}
	};

	return (
		<label className="switch">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
			/>
			<span className="slider round"></span>
		</label>
	);
};

export default ToggleSwitch;