# 🌱 Image Processing

GREENHACK is a project developed during a hackathon to leverage AI/ML and web technologies for solving real-world problems.
This repository contains:

* A **React frontend** (`src/`, `public/`)
* A **Machine Learning Notebook** (`ssn_complete(1).ipynb`)
* Supporting assets (icons, configs, etc.)

---

## 🚀 Features

* Upload and process images
* Run ML model for predictions (Notebook + planned backend integration)
* Interactive React UI with components:

  * `ImageDisplay.js`
  * `ImageProcessor.js`
  * `ImageUploader.js`

---

## 📂 Project Structure

```
GREENHACK/
│── public/
│   └── index.html
│── src/
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── ImageDisplay.js
│   │   ├── ImageProcessor.js
│   │   └── ImageUploader.js
│   └── index.js
│── ssn_complete(1).ipynb   # Jupyter Notebook (ML model code)
│── package.json
│── README.md
```

---

## 🛠️ Installation & Running

### 1. Clone the repo

```bash
git clone https://github.com/M-Nivetha7/GREENHACK.git
cd GREENHACK
```

### 2. Run the React app

Make sure Node.js is installed.

```bash
npm install
npm start
```

App will run at **[http://localhost:3000](http://localhost:3000)**.

### 3. Run the ML Notebook

Open in VS Code or Jupyter:

```bash
jupyter notebook ssn_complete(1).ipynb
```

---

## 👩‍💻 Tech Stack

* **Frontend:** React.js, HTML, CSS
* **ML Model:** Python, Pandas, NumPy, Matplotlib, Scikit-learn
* **Tools:** VS Code, Git, Node.js

---

## 📌 Future Improvements

* Integrate the ML model with the React frontend using a Flask/FastAPI backend.
* Deploy to cloud (Heroku, Vercel, or AWS).
* Add user authentication and more advanced visualization.

---



