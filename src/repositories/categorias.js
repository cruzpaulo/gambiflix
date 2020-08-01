import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const resposta = await serverResponse.json();
        return resposta;
      }
      // throw new Error('Data not avaiable');
      throw new Error(serverResponse.Error);
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      // throw new Error('Data not avaiable');
      throw new Error(serverResponse.Error);
    });
}

export default {
  getAll,
  getAllWithVideos,
};
