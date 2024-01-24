import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const validateForm = (formData) => {
  if (!formData.from_name.trim()) {
    toast.error("Name is required");
    return false;
  }

  if (!formData.email.trim()) {
    toast.error("Email is required");
    return false;
  }

  return true;
};
