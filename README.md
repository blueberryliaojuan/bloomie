# Bloomie Flower Store 🌸

**React + Vite Project**

Bloomie is a flower store offering both in-store and online shopping options.

---

## Resources

### Design:

- **Figma Project**: [Bloomie Design](https://www.figma.com/design/m24HAz42h3DNXgcbUf4PFJ/Bloomie?node-id=0-1&p=f&t=xv0EKzgGbUqhsPBj-0)
- **Prototype**: [Bloomie App Prototype](https://www.figma.com/proto/m24HAz42h3DNXgcbUf4PFJ/Bloomie?node-id=32-175&node-type=canvas&t=5SbDYwfoUMlI4P4f-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A128&show-proto-sidebar=1)

---

## Setup Instructions

### github: [Bloomie](https://github.com/blueberryliaojuan/bloomie.git)

### Dependencies:

- CSS: [tailwindcss](https://tailwindcss.com/)
<!-- - classname: [classnames](https://www.npmjs.com/package/classnames) -->
- Icons：[ionicons](https://ionic.io/ionicons)
- JSON Server: [typicode/json-server](https://github.com/typicode/json-server)

### Installation Steps:

1. Install project dependencies:
   npm i
2. Set up the JSON Server:
   npm db
3. Start the development server:
   npm run dev

---

## Challenges and what I Learned:

1. It took me some time to get used the tailwind, as I did not use it before. I tried to use customised css variables but failed to use className like "color-primary", then I used inline style instead
   (eg. {
   color: favorite ? "var(--primary-color)" : "var(--secondary-color)",
   })
2. I learned that the higher verion of react-router-dom uses RouterProvider, so I tried in this project
3. learned about the way to use ionIcons in the react, I made some mistakes on how to import css, finally found that I can use them as components, like <IonIcon icon={heartOutline} className="text-lg" />
4. the state management of react is very similar to Vue, so I got used to it quickly
5. I used JSON server to store my data
