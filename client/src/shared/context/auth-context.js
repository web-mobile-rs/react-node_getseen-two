import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  accountId: null,
  isAdmin: false,
  groups: [],
  login: () => {},
  logout: () => {},
});
