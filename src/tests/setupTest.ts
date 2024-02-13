// setupTest.ts

// Import necessary testing utilities from testing library
import "@testing-library/jest-dom/extend-expect";

// Optionally, you can configure Jest here
// For example, setting up global mocks or configuring Enzyme

// Example: Setup global mocks for fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({}),
});

// You can add more setup configurations here
