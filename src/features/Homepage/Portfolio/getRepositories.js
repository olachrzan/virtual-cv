export const getRepositories = async () => {
  const response = await fetch("https://api.github.com/users/olachrzan/repos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};