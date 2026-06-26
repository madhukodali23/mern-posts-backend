const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const cloudinary =
  require("../config/cloudinary");

const streamifier =
  require("streamifier");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

// Create Post
router.post(
  "/posts",
  upload.single("image"),
  async (req, res) => {
    try {
      let imageUrl = "";

      if (req.file) {
        imageUrl =
          await new Promise(
            (
              resolve,
              reject
            ) => {
              const stream =
                cloudinary.uploader.upload_stream(
                  {
                    folder:
                      "posts",
                  },
                  (
                    error,
                    result
                  ) => {
                    if (
                      error
                    ) {
                      reject(
                        error
                      );
                    } else {
                      resolve(
                        result.secure_url
                      );
                    }
                  }
                );

              streamifier
                .createReadStream(
                  req.file
                    .buffer
                )
                .pipe(
                  stream
                );
            }
          );
      }

      const post =
        await Post.create({
          title:
            req.body.title,
          content:
            req.body.content,
          image:
            imageUrl,
          authorId:
            req.body
              .authorId,
        });

      res.status(201).json(
        post
      );
    } catch (error) {
       console.log(error);
      res.status(500).json({
        message:
          error.message,
      });
    }
  }
);

// Get All Posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("authorId");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/posts/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Post
router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Post Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get Top 3 Recent Posts
router.get("/posts/recent/top3", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(3);

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


module.exports = router;