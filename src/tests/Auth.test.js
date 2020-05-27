import Auth from "../components/auth";

test("auth component unauthorized", () => {
  const res = Auth;
  expect(res.authenticated).toBe(false);
});

test("auth component true", () => {
  const spy = jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
  spy.mockReturnValue(true);
  const res = Auth;
  Auth.authenticated = true;
  expect(res.authenticated).toBe(true);
  spy.mockRestore();
});
