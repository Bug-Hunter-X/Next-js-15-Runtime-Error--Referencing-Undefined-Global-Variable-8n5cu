# Next.js 15 Runtime Error: Referencing Undefined Global Variable

This repository demonstrates a common runtime error in Next.js 15 applications caused by referencing an undefined global variable.  The error occurs when the `about.js` page attempts to access a variable (`someGlobalVar`) that is not defined in its scope or globally accessible.

## Bug Description
The `about.js` component tries to use `someGlobalVar` which results in a runtime error because it's not defined. This highlights the importance of proper variable scoping and declaration in Next.js applications.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Observe the runtime error in your browser's console.

## Solution
The solution involves either defining `someGlobalVar` in the appropriate scope (e.g., within the `About` component) or removing the reference to the undefined variable.
