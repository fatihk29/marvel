import axiosClient, {QUERY} from './api';

const endPoints = {
  characters: 'characters',
  characterId: 'characters',
  comics: 'comics',
  comicId: 'comics',
};

// /v1/public/characters
export const getCharaterList = async (load: string): Promise<any> => {
  console.log('getCharaterList :>> ', load);
  try {
    const response = await axiosClient.get(
      `/characters?offset=0&${load ? `nameStartsWith=${load}` : ''}&limit=6&${QUERY}`,
    );
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/characters/{characterId}
export const getCharaterById = async (characterId: string): Promise<any> => {
  try {
    const response = await axiosClient.get(`/characters/${characterId}?&${QUERY}`);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/characters/{characterId}/comics
export const getCharaterByIdWithComics = async (characterId: string): Promise<any> => {
  try {
    const response = await axiosClient.get(`${endPoints.characterId}/${characterId}/comics`);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/comics
export const getComicList = async (load: string): Promise<any> => {
  try {
    const response = await axiosClient.get(
      `/comics?offset=0&${load ? `titleStartsWith=${load}` : ''}&limit=6&${QUERY}`,
    );
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/comics/{comicId}
export const getComicById = async (comicId: string): Promise<any> => {
  try {
    const response = await axiosClient.get(`/comics/${comicId}?&${QUERY}`);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/comics/{comicId}/characters
export const getComicByIdWithCharacters = async (comicId: string): Promise<any> => {
  try {
    const response = await axiosClient.get(`${endPoints.comicId}/${comicId}/characters`);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// /v1/public/comics/{comicId}/creators
export const getComicByIdWithCreators = async (comicId: string): Promise<any> => {
  try {
    const response = await axiosClient.get(`${endPoints.comicId}/${comicId}/creators`);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
