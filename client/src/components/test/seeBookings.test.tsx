import axios from "axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { AdminPage } from "../adminPage/adminPage";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;




test("Can log in to admin page", async () => {
  mockAxios.post.mockResolvedValue({ data:{} });
  render(<AdminPage />);
  const usernameInput = screen.getByPlaceholderText("username");
  const passwordInput = screen.getByPlaceholderText("password");
  fireEvent.change(usernameInput, { target: { value: "lorem" } });
  fireEvent.change(passwordInput, { target: { value: "ipsum" } });

  const SignInButton = document.querySelector("button");
  SignInButton?.click();

  await waitFor(() => {
      const signOutButton = screen.getByText(/Logga ut/i)
    expect(signOutButton).toBeInTheDocument();
  });
});

// jest.mock(”axios”),
// const mockAxios = axios as jest.Mocked<typeof axios>,
// const mockData: IMovie[] = [{…}, {…}, …],

// test(“Movies Should have correct number of movies”, () => {
// mockAxios.get.mockResolveValues({data: mockData});
// render(<Movies/>);
// await waitFor(() => {
// const movies = screen.getAllByRole(“heading”);
// expect(movies.length).toBe(mockData.length),
// });
// });
