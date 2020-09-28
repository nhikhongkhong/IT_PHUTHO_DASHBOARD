const LOGIN_URL = "http://ptw.itphutho.vn/Login";

const GET_RESOURCES_URL = "http://ptw.itphutho.vn/GetResourceCode";

const GET_CUSTOMER_URL = "http://ptw.itphutho.vn/GetListCus";

const UPDATE_CS_URL = "http://ptw.itphutho.vn/UpdateCSMoi";

export async function loginAuth(authObj) {
  const requestOptions = {
    mode: "cors",
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(authObj),
  };

  return fetch(LOGIN_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

export async function getResources(resourcesObj) {
  const requestOptions = {
    mode: "cors",
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(resourcesObj),
  };

  return fetch(GET_RESOURCES_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

export async function getCustomers(customerObj) {
  const requestOptions = {
    mode: "cors",
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(customerObj),
  };

  return fetch(GET_CUSTOMER_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

export async function updateCS(CSObj) {
  const requestOptions = {
    mode: "cors",
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(CSObj),
  };

  return fetch(UPDATE_CS_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
