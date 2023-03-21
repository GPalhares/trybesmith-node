interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

interface Login {
  username: string;
  password: string;
}

interface ResponseLogin {
  id?: number;
  username?: string;
  password?: string;
}

interface Username {
  username: string;
}

export { User, Login, ResponseLogin, Username };
