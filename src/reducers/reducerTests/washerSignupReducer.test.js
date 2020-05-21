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

test("washer signup create waher start", () => {
  const res = washerSignupReducer({}, { type: CREATE_WASHER_START });
  expect(res.washerSignupLoading).toEqual(true);
});

test("washer signup create waher success", () => {
  const res = washerSignupReducer(
    {},
    { type: CREATE_WASHER_SUCCESS, payload: { hey: "hey" } }
  );
  expect(res.washerSignupLoading).toEqual(false);
  expect(res.washerSignupData).toMatchObject({ hey: "hey" });
});

test("washer signup create waher failure", () => {
  const res = washerSignupReducer(
    {},
    { type: CREATE_WASHER_FAILED, payload: { hey: "hey" } }
  );
  expect(res.washerSignupLoading).toEqual(false);
});
