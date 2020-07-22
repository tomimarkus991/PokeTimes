import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["blue", "red", "green", "yellow", "orange", "pink", "purple", "indigo", "teal", "gray"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const className = "text-" + randomColor + "-500";

  return (props) => {
    return (
      <div className={className}>
        <p>{className}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;