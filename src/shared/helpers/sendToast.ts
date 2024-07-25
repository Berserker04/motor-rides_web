import { STATUS_CODE } from "@/shared/types/common/commonInit";
import toast from "react-hot-toast";

export const sendToastFromResponse = (response: IResponse) => {
  if (
    response.status === STATUS_CODE.CREATED ||
    response.status === STATUS_CODE.SUCCESS
  ) {
    toast.success(response.message);
  } else if (response.status === STATUS_CODE.CONFLICT) {
    toast(response.message, {
      icon: "⚠️",
    });
  } else {
    toast.error(response.message);
  }
};
