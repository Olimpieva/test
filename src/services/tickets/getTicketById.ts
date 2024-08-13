const getTicketById = async (id: string) => {
  const response = await fetch(`http://127.0.0.1:3000/api/tickets/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ticket: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export default getTicketById;
