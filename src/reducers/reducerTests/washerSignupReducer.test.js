import washerSignupReducer from "../washerSignupReducer";
import {
  CREATE_WASHER_START,
  CREATE_WASHER_SUCCESS,
  CREATE_WASHER_FAILED,
} from "../../actions/actionTypes.js";

test("washer signup returns initial state", () => {
  const res = washerSignupReducer(undefined, {});
  expect(res.washerSignupData).toEqual([]);
});

test("washer signup create washer start", () => {
  const res = washerSignupReducer({}, { type: CREATE_WASHER_START });
  expect(res.loading).toEqual(true);
});

test("washer signup create washer success", () => {
  const res = washerSignupReducer(
    {},
    { type: CREATE_WASHER_SUCCESS, payload: { hey: "hey" } }
  );
  expect(res.loading).toEqual(false);
  expect(res.washerSignupData).toMatchObject({ hey: "hey" });
});

test("washer signup create washer failure", () => {
  const res = washerSignupReducer(
    {},
    { type: CREATE_WASHER_FAILED, payload: { hey: "hey" } }
  );
  expect(res.loading).toEqual(false);
});
