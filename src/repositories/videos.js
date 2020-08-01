import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(obj) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const resposta = await serverResponse.json();
        return resposta;
      }
      // throw new Error('Data not avaiable');
      throw new Error(serverResponse.Error);
    });
}

export default {
  create,
};
