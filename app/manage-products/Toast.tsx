import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-md shadow-lg text-white ${
        type === "success" ? "bg-white text-red-700 " : "bg-red-600 text-white"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
