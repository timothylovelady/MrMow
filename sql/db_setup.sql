CREATE DATABASE mr_mow;

CREATE TABLE accounts
(
    _account_id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
googleId VARCHAR
    (255),
_first_name NOT NULL VARCHAR
    (60),
    _last_name NOT NULL VARCHAR
    (60),
    _address_first_line NOT NULL VARCHAR
    (255),
    _address_second_line VARCHAR
    (255),
    _city VARCHAR
    (125),
    _state VARCHAR NOT NULL
    (100),
    _zip_code INT NOT NULL
    (20),
_email VARCHAR
    (255) NOT NULL,
_password VARCHAR
    (255) NOT NULL,
_account_created DATETIME DEFAULT CURRENT_TIMESTAMP
);
    CREATE TABLE users
    (
        user_id INT PRIMARY KEY NOT NULL
        AUTO_INCREMENT,
username VARCHAR
        (100) NOT NULL,
password VARCHAR
        (255) NOT NULL,
token TEXT
);

        CREATE TABLE appointments
        (
            appointment_id INT PRIMARY KEY NOT NULL
            AUTO_INCREMENT,
    _account_id INT NOT NULL,
    topic VARCHAR
            (255) NOT NULL,
    topicBody TEXT NOT NULL,
    appointment_date DATETIME NOT_NULL,
    FOREIGN KEY
            (_account_id) REFERENCES accounts
            (_account_id)
);

            CREATE TABLE invoice
            (
                invoice_id INT PRIMARY KEY NOT NULL
                AUTO_INCREMENT,
                _account_id INT NOT NULL,
                invoice_created DATETIME NOT NULL,
                total_due INT,
                previous_balance INT,
                due_date DATETIME,
    FOREIGN KEY
                (_account_id) REFERENCES accounts
                (_account_id)
)
);

