import * as API from "./api";
import Cookies from "js-cookie";

class Auth {
  constructor() {
    this.authenticated = Cookies.get("authenticated");
    this.user = {
      userName: Cookies.get("userName"),
      passWord: Cookies.get("passWord"),
    };
  }

  //  return
  // - { "Data" = "ERR1" } // Wrong password
  // - { "Data" = "ERR2" }  // Connection error
  // - { "Data" = "ERR3" } // Fail to connect DB
  // - {
  //  "MANVG": "",
  //  "TENNVG" : ""
  // } // Successful
  async login(authObj) {
    const res = await API.loginAuth(authObj);

    if (res.MANVG !== undefined && res.TENNVG !== undefined) {
      this.authenticated = true;
      this.user = authObj;

      Cookies.set("authenticated", this.authenticated);
      Cookies.set("userName", this.user.userName);
      Cookies.set("passWord", this.user.passWord);
    }
    return res;
  }

  logout() {
    Cookies.remove("authenticated");
    Cookies.remove("user");

    localStorage.removeItem("resources");
    localStorage.removeItem("customerList");

    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
