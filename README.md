# Spotify Clone

## Summary
This is a project to replicate the popular music streaming service spotify. The goal was to work with the spotify api and create a full stack application replicating common features of the official spotify application allowing for complete usability. Used common technologies and libraries with best practices in ensure code readability.

## Technologies
- `Typescript`
- `React`
- `Vite`
- `TailwindCss`
- `Redux Toolkit`
- `RTK Query`
- `Spotify Api`
- `Access & Refresh Tokens`
- `Node Express`
- `Prisma ORM`
- `MySQL`
- `JsonWebTokens`
- `Jest`
- `Supertest`

## Other 
- `MockDatabase`
- `Dependency Injection`

![Login Page](/imgs/login.png)
![Search Page](./imgs/search.png)
![Album Page](./imgs/album.png)

## Features
- Login and Registration
- Search for songs, albums, playlists and artists
- Create, delete, and update details of personal playlists
- Add and remove songs from personal playlists
- Add playlists or albums to library
- Play songs, albums or playlists with pause and resume feature
- Skip song or return to previous song
- Adjust the volume of the music and option to mute

## Functionality
- Developed with a React TypeScript front-end using Vite for efficient project building, TailwindCSS for clean and responsive UI design, Redux Toolkit for centralized state management, and RTK Query for seamless API integration with the back-end server.
- Integrated the Spotify API by utilizing documentation to secure authorization with access and refresh tokens, enabling users to play music, search tracks, and access essential features for seamless application usage.
- Implemented an Express Node TypeScript server with PrismaORM for MySQL operations. Designed schemas to hash and store user information, allowing users to save and manage custom music playlists in their library.
- Implemented full CRUD protected routes using access and refresh JWTs to secure against XSS and CSRF, prohibiting access for unauthenticated or unauthorized users.
- Incorporated Jest and Supertest for unit testing backend routes and functions. Utilized Prisma's MockDatabase feature with dependency injection to prevent test queries from affecting the main database, ensuring tests are performed on a mockdatabase.