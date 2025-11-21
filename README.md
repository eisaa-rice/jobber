# 🤵🏻 jobber

job application tracker

- backend first

  - db connection

  - models

  - controllers

  - wire routes to controllers

  - test with Postman

- frontend second

  - login page

  - register page

  - jobs dashboard

  - edit/delete functionality

- frontend

  - login/register

  - view, create, edit, and remove jobs

    - html table or manual layout w/ flex box?

- backend

  - endpoints

    - auth

      - register (post)

      - login (post)

    - jobs

      - view jobs (get)

      - add job (post)

      - edit job (put /:id)

      - delete job (delete /:id)

  - db tables

    - users

      - user_id (primary key) | username | password

    - jobs

      - job_id (primary key) | user_id (foreign key) | company | position | job_type [internship, co-op, part-time, full-time, contract, other] | application_status [ applied, online assessment, screen, interview, rejected, ghosted, offer ] | notes (free text) | link_to_posting | created_at
