import auth from "./auth";
import * as API from "./api";

export async function getResources(MAKYHD) {
  const resourcesObj = {
    userName: auth.user.userName,
    passWord: auth.user.passWord,
    MAKYHD: MAKYHD,
  };

  const res = await API.getResources(resourcesObj);
  return res;
}

export async function getCustomers(MAKYHD, MATUYEN) {
  const customersObj = {
    userName: auth.user.userName,
    passWord: auth.user.passWord,
    MAKYHD: MAKYHD,
    MATUYEN: MATUYEN,
  };

  const res = await API.getCustomers(customersObj);
  return res;
}

export async function updateCS(CSMOI, IDTT, MAKH, MAKYHD) {
  const CSObj = {
    userName: auth.user.userName,
    passWord: auth.user.passWord,
    CSMOI: CSMOI,
    IDTT: IDTT,
    MAKYHD: MAKYHD,
    MAKH: MAKH,
  };

  const res = await API.updateCS(CSObj);
  return res;
}
