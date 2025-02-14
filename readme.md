# User Information API

This is a simple Express.js and MongoDB API for user registration, authentication (JWT-based), and searching users by username or email.

## 🚀 Features

- User Registration with **server-side validation**

- Secure Password Hashing using **bcrypt**

- User Login with **JWT authentication**

- Search User by **Username or Email**

- API Testing using **Postman**

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js

- **Database:** MongoDB (Mongoose ODM)

- **Authentication:** JWT (JSON Web Tokens)

- **Validation:** Built-in Mongoose Schema Validation

## 🔧 Setup & Installation

1️⃣ Clone the repository:

```
git clone https://github.com/mishrabhi/user-info-api.git
cd user-information-api
```

2️⃣ Install dependencies:

```
npm install
```

3️⃣ Create a .env file in the root directory:

```
MONGODB_URI="your-mongodb-uri"
JWT_SECRET="your-secret-key"
PORT=8080
```

4️⃣ Run the server:

```
npm start
```

**Server will run on:** http://localhost:8080

## 📌 API Endpoints

**1️⃣ User Registration**

- **Endpoint:** POST /api/users/register

- **Description:** Registers a new user and stores their details securely.

- **Request Body (JSON):**

```
{
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "securepassword",
    "fullName": "John Doe",
    "gender": "Male",
    "dob": "1990-01-01",
    "country": "USA"
}
```

- **Response (201 - Created):**

```
{
    "message": "User registered successfully!",
}
```

**2️⃣ User Login**

- **Endpoint:** POST /api/users/login

- **Description:** Authenticates the user and returns a JWT token.

- **Request Body (JSON):**

```
{
    "email": "johndoe@example.com",
    "password": "securepassword"
}
```

- **Response (200 - OK):**

```
{
    "message": "Login successful!",
    "token": "your-jwt-token"
}
```

**3️⃣ Search User by Username or Email**

- **Endpoint:** GET /api/users/search?query=johndoe

- **Description:** Retrieves user details based on username or email.

- **Headers:**

```
{ "Authorization": "Bearer your-jwt-token" }
```

- **Response (200 - OK):**

```
{
    "_id": "user_id",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "fullName": "John Doe",
    "gender": "Male",
    "dob": "1990-01-01",
    "country": "USA"
}
```

**🔬 Testing with Postman**

1. **Register a User** (POST /api/users/register)

2. **Login & Get JWT Token** (POST /api/users/login)

3. **Search a User** (GET /api/users/search?query=username_or_email with Authorization Header)
