#  Sizing an Image Application

##  Visual Preview
This animated example shows how the application allows users to adjust the displayed image size dynamically—reflecting width changes in real time:

![Sizing an Image App Preview](https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/sizing-an-image-v1.gif)

---

Live Preview: https://ramsizeimagedy.ccbp.tech/

##  Project Overview
The **Sizing an Image Application** enables users to resize an image dynamically using input controls like range sliders. It updates the displayed width live and provides feedback via a warning message if limits are reached.

Key HTML elements to note:
- A `<p>` element with class `warning-message` must have the `id="warningMessage"`.
- A `<span>` inside that `<p>` having class `image-width` must have the `id="imageWidth"`.

Built with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**, the app showcases real-time DOM updates, user input handling, and responsive UI.

---

##  Features
- Range slider or input field to adjust the **image width**.
- Live update of the width value displayed in the `<span id="imageWidth">` element.
- A warning paragraph (`<p id="warningMessage">`) that displays messages if the width is too low or too high.
- Responsive layout using **Bootstrap** for consistent behavior across devices.
- Smooth visual updates for a polished user experience.

---

##  Tech Stack
- **HTML5** – Markup structure with semantic IDs
- **CSS3 & Bootstrap** – Layout, styling, and responsiveness
- **JavaScript (ES6)** – Event handling and dynamic updates

---

##  How to Run the App
1. Clone or download the project repository.
2. Open `index.html` in your browser.
3. Use the input (e.g., slider) to change the image width.
4. Observe the real-time width display and any warning messages appearing as needed.
5. Resize the browser to test responsiveness.

---

##  Concepts Applied
- Semantic HTML structure with required `id` attributes
- Bootstrap grid and responsive utilities
- CSS for styling the image, inputs, and warning message
- JavaScript `input` event listeners, DOM manipulation, and conditional logic

---


