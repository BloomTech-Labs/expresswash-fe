import auth from "../auth";
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  AUTH_ERROR,
} from "../../actions/types";

test("render initial state", () => {
  const res = auth(undefined, {});
  expect(res).toHaveProperty("token");
});

test("return auth sign up", () => {
  const res = auth({}, { type: AUTH_SIGN_UP, payload: "token" });
  expect(res.isAuthenticated).toEqual(true);
});

test("return auth sign in", () => {
  const res = auth({}, { type: AUTH_SIGN_IN, payload: "token2" });
  expect(res.isAuthenticated).toEqual(true);
});

test("return auth sign out", () => {
  const res = auth({}, { type: AUTH_SIGN_OUT, payload: "" });
  expect(res.isAuthenticated).toEqual(false);
});

test("return auth error", () => {
  const res = auth({}, { type: AUTH_ERROR, payload: "error" });
  expect(res.errorMessage).toEqual("error");
});
