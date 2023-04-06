import axios from 'axios';
export const POST = async (url: string, data?: any) => {
  try {
    const response = await axios(`${import.meta.env.VITE_API_URL}${url}`, {
      method: 'POST',
      data,
      withCredentials: true
    });
    return response;
  } catch (error) {
    return error;
  }
}

export const GET = async (url: string) => 
  await axios(`${import.meta.env.VITE_API_URL}${url}`, {
    method: 'GET',
    withCredentials: true
  });

export const PUT = async (url: string, data?: any) => {
  try {
    const response = await axios(`${import.meta.env.VITE_API_URL}${url}`, {
      method: 'PUT',
      data,
      withCredentials: true
    });
    return response;
  } catch (error) {
    return error;
  }
}

export const DELETE = async (url: string) => {
  try {
    const response = await axios(`${import.meta.env.VITE_API_URL}${url}`, {
      method: 'DELETE',
      withCredentials: true
    });
    return response;
  } catch (error) {
    return error;
  }
}

export const POSTFORM = async (url: string, data?: any) => {
  try {
    const response = await axios(`${import.meta.env.VITE_API_URL}${url}`, {
      method: 'POST',
      data,
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    })
    return response;
  } catch (error) {
    return error;
  }
}