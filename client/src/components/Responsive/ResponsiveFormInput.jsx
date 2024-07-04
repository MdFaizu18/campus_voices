/* eslint-disable react/prop-types */
const ResponsiveFormInput = ({ type, name, labelText, placeholder }) => {
    return (
        <div
            style={{
                marginTop: "2%",
                display: "flex",
                gap: "20px",
                alignItems: "center",
            }}
        >
            <label htmlFor={name} style={{ fontSize: "18px", color: "black" }}>
                {labelText || name}
            </label>
            <input
                style={{
                    width: "200px",
                    height: "43px",
                    outline: "none",
                    marginTop: "10px",
                    padding: "5px",
                    fontSize: "16px",
                    border: "1px solid #666",
                    borderRadius: "5px",
                }}
                type={type}
                id={name}
                name={name}
                className="form-input"
                placeholder={placeholder}
                //    defaultValue={defaultValue || " "}
                //    onChange={onChange}
                required
            />
        </div>
    );
};

export default ResponsiveFormInput;