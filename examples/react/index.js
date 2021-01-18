import React from "react";
import { isIOSGreaterThanEqual14 } from "../is-ios-gte-14";

export const PasswordField = props => {
    const inputType = isIOSGreaterThanEqual14() ? "text" : "password";
    // without classnames lib
    const className = inputType === "text" ? "conceal" : "";
    // with classnames lib
    const classNameAlternative = classnames({conceal: inputType === "text"});

    return (
        <input type={inputType} value={props.value} placeholder={props.placeholder} autoComplete="off" className={className} />
    )
}
