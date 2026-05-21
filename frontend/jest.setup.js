import '@testing-library/jest-dom';

// Mock Next.js router if needed
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
}));

// Suppress console errors in tests (optional)
// global.console.error = jest.fn();
// global.console.warn = jest.fn();

// Set test timeout (optional)
jest.setTimeout(10000);