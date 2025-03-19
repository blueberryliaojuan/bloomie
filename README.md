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
  <!-- - classname: [classnames](https://www.npmjs.com/package/classnames) -->
  <!-- - JSON Server: [typicode/json-server](https://github.com/typicode/json-server) -->

### Techniques:

- 3D component [model-viewer](https://modelviewer.dev/)
- IonIcons used as components, like <IonIcon icon={heartOutline} className="text-lg" />
- use RouterProvider component in react-router-dom
- 404 page, animationed with GSAP
- useState, useEffect, useRef, useNavigate

### Installation Steps:

1. Install project dependencies: npm i
<!-- 2. Set up the JSON Server:
   npm db -->
2. Start the development server: npm run dev

---

## What I Learned:

1. So far, I have built four pages for this project: Home, Shop, About, and 404. Through this process, I had the opportunity to deepen my understanding of key React hooks and concepts, including useState, useEffect, useRef, useLocation, and useNavigate.
2. The project was tested on both Chrome and Firefox, and I observed a discrepancy in how screen height was rendered between the two browsers. Specifically, while the Apple and Google buttons displayed correctly in Chrome, the last line of text was partially clipped in Firefox. This issue stemmed from differences in how line-height was calculated. To address this, I explicitly set the line-height and adjusted the padding, ensuring consistent rendering across both browsers.
3. Through this practice, I learned that Tailwind CSS is mobile-first by design. Initially, I focused on styling for larger screens first, which led to incorrect styles and significant time spent on adjustments.
