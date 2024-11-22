# Portfolio Web

## TODO List

- [x] Initialize Git Repo
- [x] Setup Project Dir
- [x] Setup Additional Libs
- [x] Create DB Collections
- [x] Deploy Project to Vercel
- [x] Connect to DB
- [ ] Upload Images to Payload
- [ ] Navbar
- [ ] Hero Section
- [ ] Projects Section
- [ ] Technologies Section
- [ ] Footer
- [ ] Contact Page
- [ ] CV Download

## Project Structure

- src
  - payload-types.ts
  - payload.config.ts
  - components
    - Footer.tsx
    - Navbar.tsx
  - collections
    - Media.ts
    - Users.ts
    - Projects.ts
  - app
    - (app)
      - [slug]
        - page.tsx
      - contact
        - page.tsx
      - layout.tsx
      - page.tsx
    - (payload)
      - admin
        - [[...segments]]
          - page.tsx
          - not-found.tsx
        - importMap.js
      - api
        - [...slug]
          - route.ts
        - custom.scss
        - layout.tsx
