import { toast } from 'vue3-toastify';
export function toastSuccess(message){
    toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    hideProgressBar: true,
  });
}