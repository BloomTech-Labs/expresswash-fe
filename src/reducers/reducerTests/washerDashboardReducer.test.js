import washerDashboardReducer from "../washerDashboardReducer";
import {
  WASHER_SET_WORK_STATUS_START,
  WASHER_SET_WORK_STATUS_SUCCESS,
  WASHER_SET_WORK_STATUS_FAILED,
  WASHER_GET_WORK_STATUS_START,
  WASHER_GET_WORK_STATUS_SUCCESS,
  WASHER_GET_WORK_STATUS_FAILED,
  WASHER_GET_WASH_COUNT_START,
  WASHER_GET_WASH_COUNT_SUCCESS,
  WASHER_GET_WASH_COUNT_FAILED,
  WASHER_GET_RATING_START,
  WASHER_GET_RATING_SUCCESS,
  WASHER_GET_RATING_FAILED,
} from "../../actions/actionTypes.js";

test("returns initial state", () => {
  const res = washerDashboardReducer(undefined, {});
  expect(res).toHaveProperty("loading");
});

test("returns set work status start", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_SET_WORK_STATUS_START }
  );
  expect(res.loading).toEqual(true);
});

test("returns set work status success", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_SET_WORK_STATUS_SUCCESS, payload: "success" }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ washerDashWorkStatusData: "success" });
});

test("returns set work status failure", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_SET_WORK_STATUS_FAILED, payload: "fail" }
  );
  expect(res.loading).toEqual(false);
});

test("returns get wash count start", () => {
  const res = washerDashboardReducer({}, { type: WASHER_GET_WASH_COUNT_START });
  expect(res.loading).toEqual(true);
});

test("returns get wash count success", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_GET_WASH_COUNT_SUCCESS, payload: { data: "success" } }
  );
  expect(res.loading).toEqual(false);
  expect(res).toMatchObject({ washerDashWashCountData: "success" });
});

test("returns get wash count failure", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_GET_WASH_COUNT_FAILED, payload: { data: "fail" } }
  );
  expect(res.loading).toEqual(false);
});

test("returns get washer rating start", () => {
  const res = washerDashboardReducer({}, { type: WASHER_GET_RATING_START });
  expect(res.loading).toEqual(true);
});

test("returns get washer rating success", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_GET_RATING_SUCCESS, payload: { data: "success" } }
  );
  expect(res.loading).toEqual(false);
  expect(res.washerDashRatingData).toEqual("success");
});

test("returns get washer rating failure", () => {
  const res = washerDashboardReducer({}, { type: WASHER_GET_RATING_FAILED });
  expect(res.loading).toEqual(false);
});

test("returns get work status start", () => {
  const res = washerDashboardReducer(
    {},
    { type: WASHER_GET_WORK_STATUS_START }
  );
  expect(res.loading).toEqual(true);
});

test("returns get work status success", () => {
  const res = washerDashboardReducer(
    {},
    {
      type: WASHER_GET_WORK_STATUS_SUCCESS,
      payload: { data: [{ hey: "hey" }] },
    }
  );
  expect(res.loading).toEqual(false);
  expect(res.washerDashWorkStatusData).toMatchObject({ hey: "hey" });
});

test("returns get work status failed", () => {
  const res = washerDashboardReducer(
    {},
    {
      type: WASHER_GET_WORK_STATUS_FAILED,
      payload: { data: [{ hey: "hey" }] },
    }
  );
  expect(res.loading).toEqual(false);
});
