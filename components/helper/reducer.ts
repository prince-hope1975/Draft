const reducer = (state: modalState, action: modalActions) => {
  switch (action.type) {
    case "alert" || "Alert" || "ALERT":
      console.log({
       state: state.alertModal
      })
      return {
        ...initialState,
        alertModal: {
          display: true,
          message: action.message || state.alertModal.message,
        },
      };
    case "form" || "Form" || "FORM":
      return {
        ...initialState,
        formModal: {
          display: true,
          message: action.message || state.formModal.message,
        },
      };
    default:
      return {
        errorModal: {
          display: false,
          message: state.errorModal.message,
        },
        alertModal: {
          display: false,
          message: state.alertModal.message,
        },
        formModal: {
          display: false,
          message: state.formModal.message,
        },
      };
  }
};
export interface modalActions {
  type: string;
  message?: string;
}
export interface modalState {
  errorModal: {
    display: boolean;
    message: string;
  };
  alertModal: {
    display: boolean;
    message: string;
  };
  formModal: {
    display: boolean;
    message: string;
  };
}
export const initialState = {
  errorModal: {
    display: false,
    message: "",
  },
  alertModal: {
    display: false,
    message: "",
  },
  formModal: {
    display: false,
    message: "",
  },
};

export default reducer;
