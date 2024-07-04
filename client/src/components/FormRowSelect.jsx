/* eslint-disable react/prop-types */

const FormRowSelect = ({ name, labelText, list }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <select
                name={name}
                id={name}
                style={{
                    width: "310px",
                    height: "43px",
                    outline: "none",
                    marginTop: "10px",
                    padding: "5px",
                    fontSize: "16px",
                    border: "1px solid #666",
                    borderRadius: "5px",
                }}
            >
                {list.map((itemValue) => {
                    return (
                        <option key={itemValue} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormRowSelect;