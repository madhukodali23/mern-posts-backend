# Learning Prompts & Engineering Notes (Backend)

## Express and MongoDB

* How should an Express project be structured using models, routes, and configuration folders?
* How does Express handle incoming requests and send responses?
* What is the role of Mongoose models in data persistence?
* Why should CRUD operations be separated into routes?

## REST API Design

* How do GET, POST, and DELETE endpoints work internally?
* Why should APIs return meaningful HTTP status codes?
* What is the difference between 200, 201, 404, and 500 responses?
* How can API responses be designed to simplify frontend integration?

## CORS and Middleware

* What is a CORS error and why does it occur?
* How does the `cors` middleware resolve cross-origin issues?
* Why is `express.json()` required for parsing request bodies?

## Multipart Form Data

* Why can't images be directly stored in JSON requests?
* How does `multipart/form-data` differ from `application/json`?
* What is Multer and why is it used for file uploads?
* What is `memoryStorage()` and why was it selected?

## Cloudinary Integration

* How does Cloudinary store images in the cloud?
* Why is storing image URLs preferred over storing binary files in MongoDB?
* How does `upload.single("image")` process uploaded files?
* What information is available in `req.file` and `req.body`?
* Why is `streamifier` used when uploading buffers to Cloudinary?
* How does `cloudinary.uploader.upload_stream()` work internally?

## Database Persistence

* How should image URLs be modeled in MongoDB schemas?
* How can I verify that uploaded images are being persisted correctly?
* Why does refreshing the browser still show previously created posts?

## Debugging & Problem Solving

* How do I debug a 404 endpoint issue?
* How do I investigate a 500 Internal Server Error?
* How can I use console logging to inspect `req.body` and `req.file`?
* How do I verify that environment variables are loaded correctly?
* How do I trace the entire request flow from React to MongoDB?

## Deployment

* What environment variables are required for Render deployment?
* How do Cloudinary credentials differ between development and production?
* How should MongoDB and Cloudinary secrets be managed securely?
