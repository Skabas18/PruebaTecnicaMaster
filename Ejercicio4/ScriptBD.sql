CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    bio TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE videos (
    video_id SERIAL PRIMARY KEY,
    author_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    url VARCHAR(255) NOT NULL,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE collaborators (
    collaboration_id SERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES videos(video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    video_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES videos(video_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
