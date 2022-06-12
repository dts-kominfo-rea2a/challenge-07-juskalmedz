const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    let arrHasil = [...theaterIXX, ...theaterVGC];
    const resultFilter = arrHasil.filter((obj) => obj.hasil === emosi);
    return resultFilter.length;
  } catch (error) {
    console.log("error");
  }
};

module.exports = {
  promiseOutput,
};
