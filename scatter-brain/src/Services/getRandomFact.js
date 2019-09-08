import {randomApiRoot} from '../Constants/RandomApi'

export const getRandomFact = () => {
  return new Promise((resolve, reject) => {
    let endpoint = `${randomApiRoot}`;
    fetch(endpoint, {
      method: "GET",
    })
      .then(e => {
        if (e.ok) {
          // console.log(e)
          resolve(e);
        } else {
          // console.log(e)
          reject(e);
        }
      })
      .catch(e => console.log("error::", e));
  });
};