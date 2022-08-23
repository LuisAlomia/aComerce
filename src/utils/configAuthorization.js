const item = JSON.parse(localStorage.getItem("token")) || "";
const token = item.token;

export const configAuthorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
