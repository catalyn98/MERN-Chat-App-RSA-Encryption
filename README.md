<h1 align="center">
  MERN Chat App RSA Encryption
</h1>
<p align="center">
  ReactJS, NodeJS, ExpressJS, MongoDB, RSA Encryption
</p>

<img align="center" src="https://firebasestorage.googleapis.com/v0/b/licenseproject-c2773.appspot.com/o/mern.png?alt=media&token=3ec9ebdd-6476-4ae2-b172-7fcb635c072d" />

# Tech stack
MERN Chat App RSA Encryption uses a number of open source projects to work properly:
* [ReactJS](https://reactjs.org/) - a JavaScript library for building user interfaces.
* [NodeJS](https://nodejs.org/) - is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code on the server.
* [ExpressJS](https://expressjs.com/) - is a popular web application framework for Node.js. It provides a set of features and tools that simplify the process of building web applications and APIs.
* [MongoDB](https://www.mongodb.com/) - a document-oriented, No-SQL database used to store the application data.

# Installation
MERN Chat App RSA Encryption application requires [Node.js](https://nodejs.org/) to run.

### Clone the repositories
```sh
$ git clone https://github.com/catalyn98/MERN-Chat-App-RSA-Encryption.git
```

### Set environment variables 
To set up your project, follow these steps:
1. Create a *.env* file in the following directories: the *backend api* folder, the *frontend-user* folder, and the *frontend-admin* folder, this file will store your environment variables.
2. Create a MongoDB database and obtain the connection string provided by MongoDB for connecting to your database.
3. Create a Firebase project and obtain the Firebase connection string.

### Install the dependencies:
Start the server:
```sh
$ npm run build 
$ npm start 
```

Start the frontend:
```sh
$ cd frontend
$ npm run dev
```

# Web application screenshots 
| **Register screen** | **Login Screen** | **Start screen** |
| :-----------------: | :--------------: | :--------------: |
| ![Register Screen](https://github.com/catalyn98/MERN-Chat-App-RSA-Encryption/blob/main/screenshoots/2.Sign%20up%20RSA-2048.png) | ![Login Screen](https://github.com/catalyn98/MERN-Chat-App-RSA-Encryption/blob/main/screenshoots/1.Login%20RSA-2048.png) | ![Start Screen](https://github.com/catalyn98/MERN-Chat-App-RSA-Encryption/blob/main/screenshoots/3.Homepage%201.png) |
| **Conversation screen** | | |
| ![Conversation Screen](https://github.com/catalyn98/MERN-Chat-App-RSA-Encryption/blob/main/screenshoots/4.Homepage%202.png) | | |

# Rivest-Shamir-Adleman
RSA (Rivest-Shamir-Adleman) is a widely-used public-key cryptography algorithm that enables secure data transmission. 
Developed in 1977, RSA relies on the mathematical difficulty of factoring the product of two large prime numbers. 
The algorithm involves a pair of keys: a public key for encryption and a private key for decryption. 
The security of RSA comes from the challenge of breaking down a large composite number into its prime factors, a process that is computationally intensive for sufficiently large numbers.
RSA supports secure key exchange, digital signatures, and data encryption, making it versatile for various applications, including secure web browsing (HTTPS), email encryption, and digital signatures. 
Key lengths typically range from 2048 to 4096 bits to ensure robust security. 
While RSA is highly secure, it requires significant computational resources, which has led to the adoption of more efficient algorithms like ECC for certain applications, especially in resource-constrained environments.