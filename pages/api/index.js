import instance from "./instance";
import Alert from "../../Utils/alert-templates";

const REQUEST_HEADER = (access_token) => {
  return {
    headers: {
      "x-access-token": access_token,
    },
  };
};

const getWalletAddress = () => {
  return localStorage.getItem("waller_id");
};

// ERROR HANDLER
const handleError = (error) => {
  if (error && error.response && error.response.status) {
    console.error(error);

    switch (error.response.status) {
      case 400:
        Alert({
          title: error.response.data.error.message,
          buttonTextYes: "Ok",
        });
        break;
      case 401:
        Alert({
          title: error.response.data.error.message,
          buttonTextYes: "Ok",
          handleClickYes: logout(),
          afterClose: logout(),
        });
        break;
      case 403:
        Alert({
          title: error.response.data.error.message,
          buttonTextYes: "Ok",
        });
        break;
      case 404:
        Alert({
          title: error.response.data.error.message,
          buttonTextYes: "Ok",
        });
        break;
      case 500:
        Alert({
          title: error.response.data.error.message,
          buttonTextYes: "Ok",
        });
        break;
      case 502:
        Alert({
          title: "Server error",
          buttonTextYes: "Ok",
        });
        break;
      default:
        Alert({
          title: "Something went wrong. Please try again after some time.",
          buttonTextYes: "Ok",
        });
    }
  } else {
    Alert({
      title: "Something went wrong. Please try again after some time.",
      buttonTextYes: "Ok",
    });
  }
};

const logout = () => {
  localStorage.removeItem("waller_id");
};

/*
--------------------------------------------------------------
*/

// GET method API function
const getData = async (path) => {
  let header = REQUEST_HEADER(getWalletAddress());

  let response = await instance.get(path, header).catch(handleError);
  if (response && response.data && response.status && response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

// PUT method API function
const putData = async (path, data) => {
  let header = REQUEST_HEADER(getWalletAddress());

  let response = await instance.put(path, data, header).catch(handleError);
  if (response && response.data && response.status && response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

// POST method API function
const postData = async (path, data) => {
  let header = REQUEST_HEADER(getWalletAddress());

  let response = await instance.post(path, data, header).catch(handleError);

  if (response && response.data && response.status && response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

// DELETE method API function
const deleteData = async (path, data) => {
  let header = REQUEST_HEADER(getWalletAddress());

  let response = await instance
    .delete(path, header, { data: data })
    .catch(handleError);
  if (response && response.data && response.status && response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

export {
  getData,
  putData,
  postData,
  deleteData,
  logout,
  REQUEST_HEADER,
  getWalletAddress,
};
