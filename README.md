<h1>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/aa3d010b-7820-407d-8918-7fa332838a67">
        <img width="26" src="https://github.com/user-attachments/assets/9b1783b7-e44a-41e1-a45e-a617de4746cf" />
    </picture>
    PRaTa <sup>(Philippines Rainwater Tank)</sup>
</h1>

<a href="https://libamedotso.github.io/prata"><kbd>Live Demo</kbd></a> |
<a href="https://github.com/libamedotso/prata/issues"><kbd>Report an issue</kbd></a>

An Euclidean-Accelerated Rainwater Tank Sizing Framework. It uses modified
versions of WRP12 and Rippl Method to get theoretical data, it feeds
the generated theoretical data into a reference dataset to locate the closest 
real-life data using the Euclidean Distance formula and compares them to
get approximate error rate. After the system gathers the error rate, it 
re-runs the modified methods with the error rate to get best-approximate
results. Implementation is written for Web in JavaScript (ECMAScript 6)

> [!WARNING]
> This is a highly experimental project, some things might break. Be careful!

---

### Development
This started as a thesis project, it's available to the public as an
open-source project for everyone to test and learn. This project does
not expect any improvements but if you (as a developer) still insist,
you can contribute to this project under the terms in
[CONTRIBUTING.md](./CONTRIBUTING.md)

---

### Building & Dependencies
You only need to install [Node.js](https://nodejs.org/) to your development
environment. Then run the command below inside the project directory to
install project dependencies:
```sh
npm install
```

After installing the project dependencies, run the command below to build
the web application:
```sh
npm run build
```

When the build is done, you will see your built files in `build` directory.

---

*2026, Amelia A. Corpin. Open-Source, MIT License. See [LICENSE](./LICENSE) for more information.*
