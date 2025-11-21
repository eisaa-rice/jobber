USE jobber;

CREATE TABLE IF NOT EXISTS users (
	id CHAR(36) PRIMARY KEY, -- uuid
    user_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
    password_hash CHAR(60) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jobs (
	id CHAR(36) PRIMARY KEY, -- uuid
    user_id CHAR(36) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)  ON DELETE CASCADE,
    company VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    job_type ENUM('internship', 'co-op', 'part-time', 'full-time', 'contract', 'other'),
    application_status ENUM('applied', 'online assessment', 'screen', 'interview', 'rejected', 'ghosted', 'offer'),
    job_link VARCHAR(100),
	notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);