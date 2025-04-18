# Bloomie Flower Store 🌸

**React + Vite Project**

Bloomie Bloomie Bloomie is a flower store offering both in-store and online shopping options.

---

## Resources

### Design:

- **Figma Project**: [Bloomie Design](https://www.figma.com/design/m24HAz42h3DNXgcbUf4PFJ/Bloomie?node-id=0-1&p=f&t=xv0EKzgGbUqhsPBj-0)
- **Prototype**: [Bloomie App Prototype](https://www.figma.com/proto/m24HAz42h3DNXgcbUf4PFJ/Bloomie?node-id=32-175&node-type=canvas&t=5SbDYwfoUMlI4P4f-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A128&show-proto-sidebar=1)

---

## Setup Instructions

### github: [Bloomie](https://github.com/blueberryliaojuan/bloomie.git)

### Dependencies:

- Router:[react-router-dom](https://reactrouter.com/)
- CSS: [tailwindcss](https://tailwindcss.com/)
- Icons：[ionicons](https://ionic.io/ionicons)
- Animation: [GSAP](https://gsap.com/)
  - JSON Server: [typicode/json-server](https://github.com/typicode/json-server)

### Techniques:

- 3D component [model-viewer](https://modelviewer.dev/)
- IonIcons used as components, like <IonIcon icon={heartOutline} className="text-lg" />
- use RouterProvider component in react-router-dom
- 404 page, animationed with GSAP
- useState, useEffect, useRef, useNavigate

### Installation Steps:

1. Install project dependencies: npm i
2. Set up the JSON Server:
   npm run db
3. Start the development server: npm run dev

---

## What I Made

### Pages Built

I have created six pages for this project:

1. **Home**
2. **About**
3. **Shop**
4. **Product Detail**
5. **My Favorite**
6. **404 Error**

### API Integration

- The API is powered by a local JSON Server.
- API details are documented in the `API.md` file.
- JSON data is stored in the `db.json` file.

### Features Implemented

1. **Shop Page**

   - Retrieves a list of flowers from the server.
   - Provides access to the detail page by clicking on a flower image, with the ID passed through parameters.
   - Allows users to toggle the favorite status of a flower, updating the server accordingly.
   - Accesses the My Favorite page via the icon in the bottom-right corner.

2. **Detail Page**

   - Fetches detailed flower information from the server using the flower ID.

3. **My Favorite Page**

   - Displays a list of all favorite flowers retrieved from the server.
   - Allows users to remove items from the favorite list, with updates reflected on the server.
