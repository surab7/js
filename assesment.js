class Post {
    constructor(username, imageURL, caption, likes, comments) {
        this.username = username;
        this.imageURL = imageURL;
        this.caption = caption;
        this.likes = likes;
        this.comments = comments;
    }
}

class Instagram {
    constructor() {
        this.posts = [];
    }

    createPost(username, imageURL, caption, likes = 0, comments = []) {
        if (typeof username !== 'string' || username.length === 0) {
            console.error("Invalid username.");
            return;
        }
        if (typeof imageURL !== 'string' || imageURL.length === 0) {
            console.error("Invalid imageURL.");
            return;
        }
        const newPost = new Post(username, imageURL, caption, likes, comments);
        this.posts.push(newPost);
        console.log("Post created by: " + username);
    }

    listPosts() {
        this.posts.forEach((post, index) => {
            console.log(Post ${index + 1}:);
            console.table(post);
        });
    }

    likePost(postIndex) {
        if (postIndex >= 0 && postIndex < this.posts.length) {
            this.posts[postIndex].likes++;
            console.log(Post ${postIndex + 1} has been liked.);
        } else {
            console.error("Invalid post index.");
        }
    }

    commentOnPost(postIndex, comment) {
        if (postIndex >= 0 && postIndex < this.posts.length && typeof comment === 'string') {
            this.posts[postIndex].comments.push(comment);
            console.log(Comment added to Post ${postIndex + 1}.);
        } else {
            console.error("Invalid post index or comment.");
        }
    }

    deletePost(postIndex) {
        if (postIndex >= 0 && postIndex < this.posts.length) {
            this.posts.splice(postIndex, 1);
            console.log(Post ${postIndex + 1} has been deleted.);
        } else {
            console.error("Invalid post index.");
        }
    }

    getTotalPosts() {
        console.log("Total posts: " + this.posts.length);
    }
}

// Create an instance of Instagram
const instagram = new Instagram();

// Creating posts with new sample data
instagram.createPost("user_alex", "http://example.com/image1.png", "Exploring the mountains!", 120, ["Wow, amazing!", "Looks beautiful!"]);
instagram.createPost("user_jessica", "http://example.com/image2.png", "My new painting.", 200, ["Incredible work!", "So talented!"]);
instagram.createPost("user_michael", "http://example.com/image3.png", "At the concert.", 150, ["Wish I was there!", "Awesome!"]);
instagram.createPost("user_emily", "http://example.com/image4.png", "Delicious homemade pizza.", 220, ["Recipe please?", "Yummy!"]);
instagram.createPost("user_chris", "http://example.com/image5.png", "Sunset at the beach.", 300, ["Stunning view!", "I love this!"]);
instagram.createPost("user_samantha", "http://example.com/image6.png", "Weekend getaway.", 180, ["Looks so relaxing!", "Enjoy!"]);

// List all posts
instagram.listPosts();
// Get the total number of posts
instagram.getTotalPosts();

// Interacting with posts
instagram.likePost(0); // Likes the first post
instagram.commentOnPost(1, "This is so cool!"); // Comments on the second post
instagram.deletePost(2); // Deletes the third post
Explain the whole code in brief
