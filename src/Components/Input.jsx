import React from "react";
import "./styles.css";

function Input(props) {
	const {
		variant = "default",
		label = "Input label",
		description = "",
		error = "",
		type = "text",
		id,
		placeholder = "",
		size = "md",
		borderRadius = "5px",
		withAsterisk = false,
		value,
		onChange,
		style = {},
		disabled = false,
		autoComplete,
		maxLength,
		minLength,
		required = false,
		prefix = false,
		icon = null,
	} = props;

	const [isFocused, setIsFocused] = React.useState(false);

	const sizes = {
		xs: {
			labelFontSize: "10px",
			descriptionFontSize: "8px",
			inputFontSize: "10px",
			marginBottom: "2px",
			padding: "4px 6px",
		},
		sm: {
			labelFontSize: "12px",
			descriptionFontSize: "10px",
			inputFontSize: "12px",
			marginBottom: "3px",
			padding: "6px 8px",
		},
		md: {
			labelFontSize: "14px",
			descriptionFontSize: "12px",
			inputFontSize: "14px",
			marginBottom: "4px",
			padding: "8px 10px",
		},
		lg: {
			labelFontSize: "16px",
			descriptionFontSize: "14px",
			inputFontSize: "16px",
			marginBottom: "6px",
			padding: "10px 12px",
		},
		xl: {
			labelFontSize: "18px",
			descriptionFontSize: "16px",
			inputFontSize: "18px",
			marginBottom: "8px",
			padding: "12px 14px",
		},
	};
	const currentSize = sizes[size] || sizes.md;

	const variantsStyles = {
		default: {
			border: "1px solid #ccc",
			backgroundColor: "#fff",
			fontSize: currentSize.labelFontSize,
			marginBottom: currentSize.marginBottom,
			borderRadius: borderRadius,
			padding: currentSize.padding,
			display: "flex",
			border: `1px solid ${isFocused ? "#228be6" : "#ccc"}`,
		},
		filled: {
			border: "1px solid #ccc",
			backgroundColor: "#f1f3f5",
			fontSize: currentSize.labelFontSize,
			marginBottom: currentSize.marginBottom,
			borderRadius: borderRadius,
			padding: currentSize.padding,
			display: "flex",
			border: `1px solid ${isFocused ? "#228be6" : "#ccc"}`,
		},
		unstyled: {
			border: "none",
			backgroundColor: "transparent",
			padding: 0,
			margin: 0,
			fontSize: currentSize.labelFontSize,
			marginBottom: currentSize.marginBottom,
			borderRadius: borderRadius,
			padding: currentSize.padding,
			display: "flex",
			border: `1px solid ${isFocused ? "#228be6" : "#ccc"}`,
		},
	};
	const combinedStyle = {
		...variantsStyles[variant],
		...style,
	};

	return (
		<div style={{ marginBottom: currentSize.marginBottom }}>
			<label
				disabled={true}
				htmlFor="id"
				style={{
					fontSize: "14px",
					marginBottom: "4px",
					display: "block",
					fontSize: currentSize.labelFontSize,
					marginBottom: currentSize.marginBottom,
					userSelect: "none",
				}}
			>
				{label}
				{withAsterisk && <span style={{ color: "#fa5252" }}>*</span>}
			</label>
			{description && (
				<p
					htmlFor={id}
					style={{
						color: "gray",
						fontSize: "12px",
						marginBottom: "4px",
						display: "block",
						fontSize: currentSize.labelFontSize,
						marginTop: 0,
						marginBottom: currentSize.marginBottom,
						userSelect: "none",
					}}
				>
					{description}
				</p>
			)}
			<div
				className="custom-input"
				style={combinedStyle}
				tabIndex={0}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				{icon ? (
					icon
				) : prefix ? (
					<div style={{ userSelect: "none" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="tabler-icon tabler-icon-at"
						>
							<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
							<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
						</svg>
					</div>
				) : null}
				<input
					className={"input-field"}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					style={{ fontSize: currentSize.labelFontSize }}
					disabled={disabled}
					id={id}
					autoComplete={autoComplete}
					maxLength={maxLength}
					minLength={minLength}
					required={required}
				/>
			</div>
			{error && (
				<div
					style={{
						color: "red",
						fontSize: currentSize.descriptionFontSize,
						marginTop: "4px",
					}}
				>
					{error}
				</div>
			)}
		</div>
	);
}

export default Input;
