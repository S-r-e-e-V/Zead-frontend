import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Alert = ({
  title = "",
  message = "",
  handleClickYes = () => {},
  isCloseButton = false,
  handleClickNo = () => {},
  afterClose = () => {},
  closeOnClickOutside = true,
  buttonTextYes = "Yes",
  buttonTextNo = "No",
}) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <span className="heading">{title}</span>
          <span className="message">{message}</span>
          <div className="buttons">
            {isCloseButton && (
              <button
                onClick={() => {
                  handleClickNo();
                  onClose();
                }}
              >
                {buttonTextNo}
              </button>
            )}
            <button
              onClick={() => {
                handleClickYes();
                onClose();
              }}
            >
              {buttonTextYes}
            </button>
          </div>
        </div>
      );
    },
    afterClose: afterClose,
    closeOnClickOutside: closeOnClickOutside,
  });
};
export default Alert;

// function SuccessAlert(
//   title = "Success",
//   afterClose = () => {},
//   message = "",
//   closeOnClickOutside = false
// ) {
//   confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="react-confirm-alert-body">
//           <img src="../assets/img/fire.gif" alt="green tick" />
//           <h1>{title}</h1>
//           <div className>{message}</div>
//           <div className="btn-group">
//             <button onClick={onClose}>Okay</button>
//           </div>
//         </div>
//       );
//     },
//     afterClose: afterClose,
//     closeOnClickOutside: closeOnClickOutside,
//   });
// }

// function FailureAlert(
//   title = "Action Failed",
//   message = "Something went wrong. Please try again later.",
//   afterClose = () => {},
//   closeOnClickOutside = false
// ) {
//   confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="react-confirm-alert-body">
//           <img src="../assets/img/fire.gif" alt="red cross" />
//           <h1>{title}</h1>
//           <div className>{message}</div>
//           <div className="btn-group">
//             <button onClick={onClose}>Okay</button>
//           </div>
//         </div>
//       );
//     },
//     afterClose: afterClose,
//     closeOnClickOutside: closeOnClickOutside,
//   });
// }

// function SimpleAlert(
//   title = "Action Failed",
//   message = "Something went wrong. Please try again later.",
//   afterClose = () => {},
//   closeOnClickOutside = true
// ) {
//   confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="react-confirm-alert-body">
//           <h1>{title}</h1>
//           <div className>{message}</div>
//           <div className="btn-group">
//             <button onClick={onClose}>Okay</button>
//           </div>
//         </div>
//       );
//     },
//     afterClose: afterClose,
//     closeOnClickOutside: closeOnClickOutside,
//   });
// }
// function ComplexAlert(
//   title = "Action failed",
//   message = "",
//   SuccessMessage = "",
//   onSuccess = () => {},
//   FailureMessage = "",
//   onFailure = () => {}
// ) {
//   confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="react-confirm-alert-body">
//           <h1>{title}</h1>
//           <div className>{message}</div>
//           <div className="btn-group">
//             <button
//               onClick={() => {
//                 onFailure();
//                 onClose();
//               }}
//             >
//               {FailureMessage}
//             </button>
//             <button
//               onClick={() => {
//                 onSuccess();
//                 onClose();
//               }}
//             >
//               {SuccessMessage}
//             </button>
//           </div>
//         </div>
//       );
//     },
//   });
// }
// export { SuccessAlert, FailureAlert, SimpleAlert, ComplexAlert };
