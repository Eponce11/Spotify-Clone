# Spotify Clone

## Summary
The objective was to build a full-stack application utilizing the Spotify API, replicating key features of the official Spotify app to provide a seamless and functional user experience. Implemented modern technologies and libraries while adhering to best practices to ensure maintainable and readable code.

## Technologies
- `Typescript`
- `React`
- `Vite`
- `TailwindCss`
- `Redux Toolkit`
- `RTK Query`
- `Spotify Api`
- `Node Express`
- `Prisma ORM`
- `MySQL`
- `JsonWebTokens`
- `Jest`
- `Supertest`

## Other 
- `MockDatabase`
- `Dependency Injection`

![login](https://github.com/user-attachments/assets/9b2b7ea9-9446-495d-a70c-6513f31e8b25)
![search](https://github.com/user-attachments/assets/db93904e-8da5-4ae4-a2e9-ae668354bc42)
![album](https://github.com/user-attachments/assets/1d2826a2-a77a-4f29-ac15-b9735b396a1a)

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
- Developed with a `React` `TypeScript` front-end using `Vite` for efficient project building, `TailwindCSS` for clean and responsive UI design, `Redux Toolkit` for centralized state management, and `RTK Query` for seamless API integration with the back-end server.
- Integrated the `Spotify API` by utilizing documentation to secure authorization with access and refresh tokens, enabling users to play music, search tracks, and access essential features.
- Implemented an `Express` `TypeScript` server with `PrismaORM` for` MySQL` operations. Designed schemas to hash and store user information, allowing users to save and manage custom music playlists in their library.
- Implemented full CRUD protected routes using access and refresh `JWTs` to secure against XSS and CSRF, prohibiting access for unauthenticated and unauthorized users.
- Incorporated `Jest` and `Supertest` for unit testing backend routes and functions. Utilized `Prisma`'s `MockDatabase` feature with `dependency injection` to prevent test queries from affecting the main database, ensuring tests are performed on a `mockdatabase`.
