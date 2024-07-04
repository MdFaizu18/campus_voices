import { CustomInput } from "../assets/wrappers/AdminAddStaffWrapper";

/* eslint-disable react/prop-types */
const FormInput = ({ type, name, labelText, placeholder ,defaultValue}) => {
    return (
        <div style={{ marginTop: "-2%" }}>
            <label htmlFor={name} style={{ fontSize: "20px", color: "black" }}>
                {labelText || name}
            </label>
            <CustomInput
                type={type}
                id={name}
                name={name}
                className="form-input"
                placeholder={placeholder}
                   defaultValue={defaultValue || " "}
                //    onChange={onChange}
                required
            />
        </div>
    );
};

export default FormInput;