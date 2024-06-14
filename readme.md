<a name="readme-top"></a>

<br />
<div align="center">
  
 
<a href="https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL">
    <img src="./docs/nodemysql.avif" alt="Logo" width="450" height=180">
  </a>
  
<h3 align="center">Node + Express + Prisma + My SQL - Advance Auth System 💻 </h3>
  <p align="center">
    <br />
    <a href="https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL">Go Live</a>
    ·
    <a href="https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL">Report Bug</a>
    ·
    <a href="https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL">Request Feature</a>
  </p>
</div>


## Getting Started 🚀

### Prerequisites

Before you begin contributing to this project, make sure you have the following set up:

- [Node.js](https://nodejs.org/): A JavaScript runtime.
- [npm](https://www.npmjs.com/): The Node.js package manager.

### Run This ⌨️

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Puskar-Roy/2Fa-Auth-System-MySQL
   ```
2. **Install Dependencies:**
   ```bash
    npm install
   ```
3. **Add Environment Variables:**
   ```bash
   touch .env
   ```
4. **Add the necessary configuration:**

   ```bash
   
    #In apps/server Directory

    PORT = 5050
    DATABASE_URL="mysql://root:password@localhost:3306/mydb"
    JWT_SECRET="dbdbdbdbdbdbdbdbdb"
    JWT_COOKIE_EXPIRES_IN="3d"
    DEV_MODE=DEV 
    BACKENDURL=http://localhost:5050
    EMAIL=<YOUR-GMAIL>
    PASSWORD=<YOUR-PASSWORD>
   ```

5. **Run This Project:**

   ```bash
   npm run dev
   ```

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run This Using Docker 🐟

_Please add ENV in Dockerfile_

1. **Build the Docker Image:**
   ```bash
    docker build -t server .
   ```
3. **Run the Docker Image:**

   ```bash
    docker run -p 5050:5050 server
   ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section highlights the key frameworks and libraries that form the foundation of your project. Below are some notable examples:

- **[![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/):** A superset of JavaScript that adds static types.
- **[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** The programming language of
- **[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/):** The database for modern applications.
- **[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/):** Cloud platform for serverless deployment and hosting.
- **[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/):** Pluggable linting utility for identifying and fixing code issues.
- **[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/):** Opinionated code formatter to ensure consistent code styling the web.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing 🌟

### Making Contributions

We welcome and appreciate contributions from the community ❤️! Here's how you can contribute:

- **Open Issues:** Check for open issues or create a new one to start discussions.
- **Fork the Repository:** Fork the project to your own GitHub account.
- **Create Pull Request:** Make changes in your fork and submit a pull request.

### Welcome Contributors!

🚀 Thank you for considering contributing to this project! Your involvement makes this template even better. Feel free to explore the code, share your ideas, and make improvements ✌️.

🌟 Don't hesitate to reach out if you have any questions or need assistance. Together, let's make this project amazing!🟩

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Puskar Roy🖋️
