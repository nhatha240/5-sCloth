import { toast } from 'vue3-toastify';
export function toastSuccess(message){
    toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    closeButton: false,
  });
}
export function toastError(message){
    toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
    closeButton: false,
    toastStyle: {background: '#DE2233', color: '#FFFFFF'},
  });
}