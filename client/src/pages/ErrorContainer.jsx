import React from "react";

function ErrorContainer({ err }) {
  return (
    <div
      className="p-2 mt-4 text-xl text-red-800 rounded-lg bg-red-50  dark:text-red-400"
      role="alert"
    >
      <span className="text-xl">{err}</span>
    </div>
  );
}

export default ErrorContainer;
