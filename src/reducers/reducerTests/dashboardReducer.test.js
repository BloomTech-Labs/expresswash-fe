import dashboard from "../dashboard";
import { DASHBOARD_GET_DATA } from "../../actions/types";

test("returns initial state", () => {
  const res = dashboard(undefined, {});
  expect(res).toHaveProperty("secret");
});

test("returns initial state", () => {
  const res = dashboard({}, { type: DASHBOARD_GET_DATA, payload: "theSecret" });
  expect(res).toMatchObject({ secret: "theSecret" });
});
