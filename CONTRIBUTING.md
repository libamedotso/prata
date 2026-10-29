# Contributing to PRaTa

 1. [Getting Involved](#getting-involved)
 2. [Code Contributions](#code-contributions)
 3. [Coding Standards and Architecture](#coding-standards-and-architecture)

## Getting Involved
First of all, Thank you for your time to contribute! PRaTa started as an
academic thesis project and is now open-source. While it is fully functional
and does not expect active feature expansions, community contributions
regarding bug fixes; edge-case validation, performance improvements and
documentation are highly welcome.

By participating in this project, you agree to abide by its rules, code style guidelines and it's licensing terms.

## Reporting Bugs
If you find anything inconsistent within the UI Interface or the utilities and algorithms we use:
 1. Check the [Issues](https://github.com/libamedotso/prata/issues) tab to
    ensure that the bug hasn't already been reported.
 2. If it is a new issue, open a new report and include:
    - A clear and descriptive title.
    - Specify the behavior you've performing.
    - The expected vs actual outcome or output.
    - Your environment setup (Browser version, OS version, etc.)

## Code Contributions
If you want to fix a bug or optimize code structures:
 1. Fork the repository and create your branch from `experiments` like so:
    ```sh
    git checkout -b feature/your-feature-name
    ```
 2. Set up your local development environment and verify everything
    compiles successfully:
    ```sh
    npm install
    npm run build
    ```
 3. Implement your changes. Ensure you adhere to the **Coding Standards**
    detailed below.
 4. Commit your changes with a clear yet descriptive commit message.
 5. Push to your fork and submit a Pull Request (PR) to our 
    `experiments` branch.

## Coding Standards and Architecture
To maintain the structural integrity of the system, all code modifications
must respect these core guidelines:
 * The code you are writing must be *downgradeable* or *is* in
   **ECMAScript 6** standard.
 * Keep everything modular.
 * AI-written code must be reviewed and tested by a human.
 * Keep the code simple and optimized, No bulky code allowed.

---

*2026, Amelia A. Corpin. Open-Source, MIT License. See [LICENSE](./LICENSE) for more information.*
