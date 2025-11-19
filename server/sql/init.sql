USE jobber;

CREATE TABLE IF NOT EXISTS users (
	id CHAR(36) PRIMARY KEY, -- uuid
	username CHAR(50) UNIQUE,
    password_hash CHAR(60),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jobs (
	id CHAR(36) PRIMARY KEY, -- uuid
    user_id CHAR(36),
    FOREIGN KEY (user_id) REFERENCES users(id),
    company VARCHAR(100),
    position VARCHAR(100),
    job_type ENUM('internship', 'co-op', 'part-time', 'full-time', 'contract', 'other'),
    application_status ENUM('applied', 'online assessment', 'screen', 'interview', 'rejected', 'ghosted', 'offer'),
    job_link VARCHAR(100),
	notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);