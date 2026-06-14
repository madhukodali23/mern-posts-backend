# Sprint 10 – NoSQL Cloud Database Integration

## Overview

This project demonstrates the implementation of persistent cloud storage using MongoDB Atlas and Mongoose in an Express.js backend application.

The application replaces in-memory data storage with a production-style NoSQL database architecture and supports complete CRUD operations, relational data modeling, and aggregation queries.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman
* dotenv

---

## Features

### Phase 1: Cloud Provisioning & ODM Setup

* Configured MongoDB Atlas M0 Sandbox Cluster
* Connected Express Server to MongoDB Atlas
* Secured database credentials using Environment Variables
* Implemented Mongoose ODM
* Created Post Schema with validation

### Post Schema

```javascript
{
  title: String,
  content: String,
  createdAt: Date
}
```

---

### Phase 2: Live Database CRUD Operations

Implemented database-backed REST APIs:

#### Create Post

```http
POST /posts
```

Creates a new post and stores it in MongoDB Atlas.

#### Get All Posts

```http
GET /posts
```

Retrieves all posts from the database.

#### Delete Post

```http
DELETE /posts/:id
```

Deletes a specific post using its MongoDB ID.

---

### Phase 3: Relational Modeling & Aggregation

#### User Schema

```javascript
{
  name: String,
  email: String
}
```

#### Post Schema with Reference

```javascript
{
  title: String,
  content: String,
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}
```

#### Data Population

Used Mongoose `.populate()` to retrieve author information along with posts.

```javascript
Post.find().populate("authorId")
```

#### Top 3 Recent Posts

Implemented aggregation/sorting endpoint:

```http
GET /posts/recent
```

Returns the three most recently created posts.

---

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| POST   | /posts        | Create a post          |
| GET    | /posts        | Get all posts          |
| DELETE | /posts/:id    | Delete a post          |
| GET    | /posts/recent | Get top 3 recent posts |
| POST   | /users        | Create a user          |
| GET    | /users        | Get all users          |

---

## Testing

All API routes were tested using Postman.

Validation included:

* Post creation
* Data retrieval
* Data deletion
* MongoDB Atlas persistence
* User-Post relationship population
* Recent posts query

---

## Security

* MongoDB credentials stored in `.env`
* `.env` excluded using `.gitignore`
* No sensitive credentials pushed to GitHub

---

## Author

Madhu Kanth Kodali

B.Tech Computer Science & Engineering

Full Stack Developer
