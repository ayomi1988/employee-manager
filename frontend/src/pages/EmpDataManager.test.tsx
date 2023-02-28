import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import EmpData from "./EmpDataManager";

beforeEach(() => {
  render (
    <Router>
    <Provider store={store}>
      <EmpData />
    </Provider>
  </Router> 
  );
   
});

describe("Display list of employees", () => {


  test("Add employee button", async () => {
    await waitFor(() => {
        const loadingText = screen.queryByText(/Add Employee/i);
      expect(loadingText).toBeInTheDocument();
    });
  });
 
});
