import React from "react";
import "./Navbar.css";
const Navbar = ({ data, buttonStyle }) => {
  const renderButton = (button) => {
    const buttonStyleObj = {
      "--order": button.order,
      ...buttonStyle,
      ...(button.style || {}),
    };
    if (button.type === "mainButton") {
      return (
        <a
          href={button.url}
          className="main-button"
          style={{ ...buttonStyle, otherStyle: "value" }}
        >
          {button.text}
        </a>
      );
    } else if (button.type === "parentButton") {
      return (
        <li className="parent-button" style={buttonStyle}>
          <a href={button.url}>{button.text}</a>
          {button.children && (
            <ul>
              {button.children.map((child, index) => (
                <li key={index}>{renderButton(child)}</li>
              ))}
            </ul>
          )}
        </li>
      );
    } else if (button.type === "childButton") {
      return (
        <li className="child-button" style={buttonStyle}>
          <a href={button.url}>{button.text}</a>
          {button.children && (
            <ul>
              {button.children.map((greatChild, index) => (
                <li key={index}>{renderButton(greatChild)}</li>
              ))}
            </ul>
          )}
        </li>
      );
    } else if (button.type === "greatChildButton") {
      return (
        <li className="great-child-button" style={buttonStyle}>
          <a href={button.url}>{button.text}</a>
        </li>
      );
    }
  };
  return (
    <nav>
      <ul className="navbar">
        {data.map((button, index) => (
          <li key={index}>{renderButton(button)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
