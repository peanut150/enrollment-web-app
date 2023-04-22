import axios from "axios";
// Note APIs

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

export function GetSchedules() {
  return instance
    .get("/api/v1/schedules/")
    .then((response) => {
      return response.data;
    });
}

export function GetFirstYearSchedules() {
    return instance
      .get("/api/v1/first_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }
  
  export function GetSecondYearSchedules() {
    return instance
      .get("/api/v1/second_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }
  
  export function GetThirdYearSchedules() {
    return instance
      .get("/api/v1/third_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }

  export function GetFourthYearSchedules() {
    return instance
      .get("/api/v1/fourth_year_schedules/")
      .then((response) => {
        return response.data;
      });
  }

export function GetPublicNotes() {
  return instance.get("/api/v1/public_notes/").then((response) => {
    return response.data;
  });
}


// User APIs

export function UserRegister(register) {
  return instance
    .post("/api/v1/accounts/users/", register)
    .then(async (response) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
}

export function UserLogin(user) {
  return instance
    .post("/api/v1/accounts/token/login/", user)
    .then(async (response) => {
      localStorage.setItem("token", JSON.stringify(response.data.auth_token));
      return true;
    })
    .catch((error) => {
      return false;
    });
}
