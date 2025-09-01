# React UI Components Library

A lightweight and reusable React Components Library including:

 **Buttons** (Primary, Secondary, Danger, Success, Warning, Info)  
 **Cards** (Expandable, Clickable, Image background, Custom styles)  
 **Modals** (Alert, Confirm, Form, Image)  
 **ThemeProvider** (Light/Dark mode support)  

---

##  Features
- Reusable and customizable components  
- Light/Dark theme support using CSS variables  
- Expandable and clickable cards with image support  
- Multiple modal types (alert, confirm, form, image)  
- Easy to integrate into any React project  

---

##  Installation
Clone this repository and install dependencies:

```bash
git clone https://github.com/NimraAsmat/react-ui-library.git
cd react-ui-library
npm install
npm start
```

---

##  Usage

### Import Components
```javascript
import { Button, Card, Modal, ThemeProvider } from "your-library-path";
```

### Example: Button
```jsx
<Button variant="primary">Primary Button</Button>
<Button variant="danger">Delete</Button>
<Button variant="success">Save</Button>
```

### Example: Card
```jsx
<Card title="Card Title" expandable>
  <p>This is an expandable card.</p>
</Card>
```

### Example: Modal
```jsx
<Modal type="alert" isOpen={true} onClose={() => setOpen(false)}>
  <p>This is an alert modal</p>
</Modal>
```

### Example: ThemeProvider
```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

---

##  Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/NimraAsmat/react-ui-library/issues).  

---

##  License
This project is licensed under the MIT License.
