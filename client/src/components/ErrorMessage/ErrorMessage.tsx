import React from "react";
import "./ErrorMessage.scss";

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => (
  <div className="error-message">
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
