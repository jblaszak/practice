try {
  try {
    console.log("trying stuff");
    throw new Error("text 1");
  } catch (err) {
    console.log(err.message);
    const error = { testCaseName: "stuff", errorMessage: err.message };
    throw new Error(JSON.stringify(error));
  }
} catch (arr) {
  console.error(arr);
}
