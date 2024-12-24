const getData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
export default getData;