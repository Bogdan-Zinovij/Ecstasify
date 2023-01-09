import { toast, TypeOptions } from 'react-toastify';

class ErrorHandler {
  handle(msg: string, type: TypeOptions) {
    toast(msg, { type, theme: 'colored' });
  }
}

export default new ErrorHandler();
