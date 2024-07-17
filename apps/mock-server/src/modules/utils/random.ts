const Random = {
  number: (min: number, max: number) => {
    const _min = Math.floor(min);
    const _max = Math.ceil(max);

    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
  },
  float: (min: number, max: number, fixed: number = 1) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(fixed));
  },
};

export default Random;
