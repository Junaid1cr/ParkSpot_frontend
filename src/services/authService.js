import api from "./api";

export const login = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  console.log(data);
  return data;
};

export const register = async (userData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export const refreshToken = async () => {
  const { data } = await api.get("/auth/refresh");
  return data;
};
