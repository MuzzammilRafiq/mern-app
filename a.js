function s(config = {}) {
  console.log(config.headers.token);
}
s({
  headers: {
    token: "access_token",
  },
});
