import React from "react";

import css from "./ErrorMessage.module.scss";

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return <div className={css.error}>{message}</div>;
};

export default ErrorMessage;
