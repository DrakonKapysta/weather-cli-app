const getArgs = (args) => {
  const res = {};
  const [executor, file, ...otherArgs] = args;

  res.executor = executor;
  res.file = file;

  otherArgs.forEach((arg, index, arr) => {
    if (arg.charAt(0) === "-") {
      if (index == arr.length - 1) {
        res[arg.slice(1)] = true;
      } else if (arr[index + 1].charAt(0) !== "-") {
        res[arg.slice(1)] = arr[index + 1];
      } else {
        res[arg.slice(1)] = true;
      }
    }
  });

  return res;
};

export { getArgs };
