import React from 'react';
import { Link } from 'react-router-dom';

function Webbtn({ text, to, styleClass, Icon }) {
  return (
    <Link
      to={to}
      className={`font-semibold tracking-wide bg-blue text-white rounded-md inline-flex items-center ${styleClass}`}
    >
      {text}
      {Icon && <Icon className="ml-2 text-sm" />}
    </Link>
  );
}

export default Webbtn;
