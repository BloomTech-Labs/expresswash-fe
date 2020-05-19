import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("Renders without crashing", async () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );
});
