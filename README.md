# 📸 PicSphere

**PicSphere** is a full-stack Pinterest-inspired social media application where users can discover, upload, and share images. The application provides features such as user authentication, image posts, captions, likes, comments, and user interactions through a clean and responsive interface.

Built using the **MERN Stack** with **Cloudinary** for image storage and management.

---

## 🚀 Features

* 🔐 User Registration and Login
* 🔑 JWT-based Authentication
* 👤 User Profiles
* 🖼️ Create and Upload Image Posts
* ☁️ Cloudinary Image Storage
* 📝 Add Image Titles and Captions
* ❤️ Like Posts
* 💬 Comment on Posts
* 📰 Browse and Discover Posts
* 📱 Responsive User Interface
* 🔒 Password Hashing using bcrypt
* 🌐 RESTful API Architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Multer

### Cloud & Tools

* Cloudinary
* Git
* GitHub
* REST APIs
* npm

---

## 🏗️ Project Structure

```text
PicSphere/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 Application Flow

```text
User
  │
  ▼
React Frontend
  │
  │ REST API
  ▼
Node.js + Express Backend
  │
  ├──────────────► MongoDB
  │
  └──────────────► Cloudinary
                       │
                       ▼
                  Image Storage
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nizamuddin8053/PicSphere.git
```

```bash
cd PicSphere
```

### 2. Install Dependencies

Install the backend/root dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Then return to the project root:

```bash
cd ..
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend/root configuration according to your project setup.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> **Important:** Never commit your `.env` file, MongoDB credentials, JWT secrets, or Cloudinary credentials to GitHub.

---

## ▶️ Run the Application

### Development Mode

From the project root:

```bash
npm run dev
```

This starts the backend using Nodemon.

For the frontend, open another terminal:

```bash
cd frontend
npm run dev
```

The Vite development server will provide the local frontend URL.

---

## 🖥️ Screenshots

### Login Page

![alt text](<Screenshot 2026-10-07 140547.png>)

### Register Page

![alt text](<Screenshot 2026-10-07 140840.png>)


### Explore / Posts

![PicSphere Explore](./screenshots/explore.png)

### Create Post

![PicSphere Create Post](./screenshots/create-post.png)

### User Profile

![PicSphere Profile](./screenshots/profile.png)

### Post Details

![PicSphere Post Details](./screenshots/post-details.png)

---

## 📂 Adding Screenshots

Create a folder named:

```text
screenshots/
```

Your project structure should look like:

```text
PicSphere/
│
├── backend/
├── frontend/
├── screenshots/
│   ├── home.png
│   ├── login.png
│   ├── register.png
│   ├── explore.png
│   ├── create-post.png
│   ├── profile.png
│   └── post-details.png
│
├── package.json
└── README.md
```

Then add the screenshots to the `screenshots` folder and push them to GitHub.

The README will automatically display them using:

```markdown
![Home Page](./screenshots/home.png)
```

---

## 🔑 Authentication

PicSphere uses **JWT-based authentication** to protect user-specific operations.

The authentication flow is:

```text
Register / Login
       ↓
Backend validates user
       ↓
JWT Token generated
       ↓
Authenticated requests
       ↓
Protected API Routes
```

Passwords are securely hashed using **bcrypt** before being stored.

---

## ☁️ Image Upload

Images uploaded by users are processed through the backend and stored using **Cloudinary**.

```text
User selects image
       ↓
React Frontend
       ↓
Backend API
       ↓
Multer
       ↓
Cloudinary
       ↓
Image URL
       ↓
MongoDB
```

MongoDB stores the relevant post information and the Cloudinary URL rather than storing the image directly in the database.

---

## 🗄️ Database

MongoDB is used as the primary database with Mongoose for data modeling and interaction.

The application stores information such as:

* User accounts
* User profiles
* Posts
* Image URLs
* Titles
* Captions
* Likes
* Comments

---

## 🔌 API Architecture

The application follows a REST API architecture where the React frontend communicates with the Node.js/Express backend.

```text
React
  │
  ├── Authentication APIs
  ├── User APIs
  ├── Post APIs
  ├── Like APIs
  └── Comment APIs
          │
          ▼
   Express Backend
          │
          ▼
       MongoDB
```

---

## 📌 Future Enhancements

* 🔔 Real-time notifications
* 👥 Follow / Unfollow users
* 🔍 Advanced search
* 🏷️ Post categories and tags
* 📱 Progressive Web App support
* ❤️ Improved recommendation system
* 🌙 Dark mode
* 🚀 Production deployment with CI/CD

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Full-stack MERN development
* REST API development
* JWT authentication
* MongoDB database management
* Image upload handling
* Cloudinary integration
* Password hashing and security
* React frontend development
* Backend API integration
* Git and GitHub workflow

---

## 👨‍💻 Author

**Nizamuddin**

MCA Final Year Student
NIT Bhopal (MANIT)

### Connect With Me

* GitHub: [Nizamuddin8053](https://github.com/Nizamuddin8053)
* LinkedIn: [Nizamuddin Khan](https://www.linkedin.com/in/nizamuddin-khan-720183218/)

---

## ⭐ Show Your Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

**Made with ❤️ using the MERN Stack**
