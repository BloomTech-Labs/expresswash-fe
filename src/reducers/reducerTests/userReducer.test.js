import userReducer from "../userReducer";
import {
  GET_USER,
  GET_USERS,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  NEW_CLIENT_ERROR,
  NEW_CLIENT_SUCCESS,
  GET_CLIENT_INFO_SUCCESS,
  GET_CLIENT_INFO_ERROR,
  UPDATE_CLIENT_INFO_SUCCESS,
  UPDATE_CLIENT_INFO_ERROR,
  GET_CLIENT_RATING_SUCCESS,
  GET_CLIENT_RATING_ERROR,
} from "../../actions/actionTypes";

test("returns initial state", () => {
  const res = userReducer(undefined, {});
  expect(res).toHaveProperty("users");
});

test("returns undefined for unused action", () => {
  const res = userReducer({}, { type: GET_USER });
  expect(res).toEqual(undefined);
});

test("returns undefined for unused action", () => {
  const res = userReducer({}, { type: GET_USERS });
  expect(res).toEqual(undefined);
});

test("returns logging in user", () => {
  const res = userReducer({}, { type: LOGGING_IN });
  expect(res.loading).toEqual(true);
});

test("returns log in success user", () => {
  const res = userReducer(
    {},
    { type: LOGIN_SUCCESS, payload: { user: "user" } }
  );
  expect(res.loading).toEqual(false);
  expect(res).toHaveProperty("user");
});

test("returns log in failure user", () => {
  const res = userReducer({}, { type: LOGIN_FAILED, payload: "error" });
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ error: "error" });
});

test("returns new user success", () => {
  const res = userReducer({}, { type: NEW_CLIENT_SUCCESS });
  expect(res.loading).toEqual(false);
});

test("returns new user failure", () => {
  const res = userReducer({}, { type: NEW_CLIENT_ERROR, payload: "error" });
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ error: "error" });
});

test("returns client info success", () => {
  const res = userReducer(
    {},
    { type: GET_CLIENT_INFO_SUCCESS, payload: "info success" }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ info: "info success" });
});

test("returns client info failure", () => {
  const res = userReducer(
    {},
    { type: GET_CLIENT_INFO_ERROR, payload: "error" }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ error: "error" });
});

test("returns update client info success", () => {
  const res = userReducer(
    {},
    { type: UPDATE_CLIENT_INFO_SUCCESS, payload: "update success" }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ user: "update success" });
});

test("returns update client info failure", () => {
  const res = userReducer(
    {},
    { type: UPDATE_CLIENT_INFO_ERROR, payload: "error" }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ error: "error" });
});

test("returns update client info success", () => {
  const res = userReducer(
    {},
    { type: GET_CLIENT_RATING_SUCCESS, payload: "rating success" }
  );
  expect(res).toMatchObject({ rating: "rating success" });
});

test("returns update client info failure", () => {
  const res = userReducer({}, { type: GET_CLIENT_RATING_ERROR });
  expect(res).toEqual({});
});
