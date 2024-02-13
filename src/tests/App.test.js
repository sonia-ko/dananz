import { render, screen, waitFor } from "@testing-library/react";
import App from "@/pages/_app";
import Home from "@/pages";
import { useRouter } from "next/router";

// Mock useRouter hook with custom implementation

// Define a mock AppProps object
const mockAppProps = {
  Component: jest.fn(),
  pageProps: {}, // You can customize this to match your specific test scenario
  router: jest.mock("next/router", () => ({
    useRouter: jest.fn(() => ({
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(),
      prefetch: jest.fn(),
    })),
  })),
};

describe("App", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<App {...mockAppProps} />);
    console.log(container);
    expect(container).toMatchSnapshot();
  });
});

// describe("Page", () => {
//   it("renders an h1 element with the text 'Design your interior with high quality.'", () => {
//     // Define a mock router object
//     const mockRouter = {
//       pathname: "/",
//       push: jest.fn(),
//       prefetch: () => Promise.resolve(),
//       query: {},
//       asPath: "",
//     };

//     render(
//       <Router router={mockRouter}>
//         <Home {...mockAppProps} />
//       </Router>
//     );

//     // Check if an h1 element exists in the document
//     const heading = screen.getByRole("heading", {
//       name: /design your interior with high quality/i,
//     });

//     // Assert that the h1 element is present in the document
//     expect(heading).toBeInTheDocument();
//     // Assert that the h1 element has the correct text content
//     expect(heading).toHaveTextContent(
//       "Design your interior with high quality."
//     );
//   });
// });
