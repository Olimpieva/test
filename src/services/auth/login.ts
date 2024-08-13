type RequestData = {
  username: string;
  password: string;
};

const login = async ({ username, password }: RequestData) => {
  const response = await fetch("http://127.0.0.1:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(`Failed to login: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default login;
