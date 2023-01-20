// // https://github.com/testing-library/jest-dom/issues/427
// // https://github.com/testing-library/jest-dom/issues/439
import { expect } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
