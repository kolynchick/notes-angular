

# NotesAngular

Web page: https://d0m2tqifnk.execute-api.us-east-2.amazonaws.com/

# Project description

The application serves for managing projects in a small teams. 

## Primary goal

We have some kind of objectives or tasks. We're creating notes with a small information about it (title and description).
After it we're moving to the board with tasks and move it to the board for further work.

## At the moment

I have the CRUD operations for notes with sorting, filter and pagination.


# Technology stack:

## Frontend

Angular 11+, Material UI, RxJS, NgXS, Karma + Jasmine (Unit tests), Nrwl NX (CLI)

## Backend
NestJS, Jest (Unit tests)

## E2E
Cypress

## CI/CD
Github Actions with several workflows:
1) Pull Request - lint the code (ESLint), running Unit tests
2) Merge to master - frontend deploys to the AWS S3. Backend deploys to AWS EC2, running E2E tests

# Future

- Support i18n
- Authoriation, registration, Admin page for managing users (solutions: custom auth microservice with roles and admin page; WSO2; AWS SSO)
- The page with transforming notes to task should implement. It should work on the Scrum process (To Do, In Progress, Done)
- The page for managing task boards should implement
- Board collaboration in real-time
- Chat rooms for discussing
- Create meetings for voice discussing
