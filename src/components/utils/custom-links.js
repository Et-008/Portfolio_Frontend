import React from 'react';
import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

//   children(match);

  return (
    <div>
      <Link
        style={props.style}
        to={to}
      >
      {children(match)}
      </Link>
    </div>
  );
}

export default CustomLink;
