import { routes as test_multiple_successRoutes } from './test-multiple-success/index.js';

export const test_multiple_success = test_multiple_successRoutes;

// Export a consolidated routes object that can be used as the SDK client
export const routes = {
  test_multiple_success: test_multiple_successRoutes,
};
