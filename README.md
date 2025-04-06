# 🏥 Hospital Management System

## 📖 Description
Hospital Management System is a comprehensive web-based application designed to streamline and manage hospital operations. This project is organized into three main parts:

- **Backend:**  
  Provides API endpoints, server-side logic, and database operations to handle appointments, patient records, authentication, and more.

- **Dashboard:**  
  An administrative interface that allows hospital staff to manage doctors, patients, and appointments. It includes dedicated views such as the doctor dashboard for adding and updating doctor profiles.

- **Frontend:**  
  A client-facing interface where patients can book appointments, view hospital information, and interact with the system seamlessly.

## 🚀 Features
- **Multi-User Role Support:**  
  Supports different roles (admin, doctor, patient) for tailored access and functionality.
- **Appointment Management:**  
  Users can book, reschedule, and cancel appointments easily.
- **Doctor Dashboard:**  
  A dedicated view for administrators to add, update, and manage doctor profiles.
- **Patient Management:**  
  CRUD operations for managing patient records.
- **Reporting & Analytics:**  
  View hospital statistics, performance metrics, and other key insights.
- **Responsive Design:**  
  Optimized for desktops, tablets, and mobile devices.

## 📦 Dependencies

### Backend
- **Node.js** and **Express:**  
  For creating the RESTful API and handling server-side logic.
- **Mongoose/Sequelize:**  
  To interact with a MongoDB or SQL database.
- **dotenv:**  
  To manage environment variables.
- **cors:**  
  To enable Cross-Origin Resource Sharing.
- **bcrypt:**  
  For secure password hashing.
- **jsonwebtoken:**  
  For user authentication with JWT.
- **Additional Middleware:**  
  Such as morgan for logging and helmet for security.

### Dashboard & Frontend
- **React:**  
  For building dynamic user interfaces.
- **Vite:**  
  As a fast and modern build tool.
- **Axios:**  
  For making HTTP requests.
- **React Router:**  
  For client-side routing.
- **ESLint:**  
  For maintaining code quality.
- **UI Libraries:**  
  Optionally, libraries like Material-UI, Bootstrap, or Tailwind CSS may be used for styling.

## ⚙️ Configuration

### General Setup
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/hospital-management-system.git
   cd hospital-management-system

### Backend Setup

1. **Navigate to the backend folder:**

   ```bash
   cd backend

2. **Install dependencies:**

    ```bash
    npm install

3.  **Create a `.env` file (or copy from `.env.example`) and configure variables:**

    ```ini
    PORT=5000
    DB_CONNECTION=your_database_connection_string
    JWT_SECRET=your_jwt_secret

4. **Start the backend server:**
    ```bash
    npm start

## 🖥️ Dashboard Setup

1. **Navigate to the Dashboard folder:**

   ```bash
   cd ../Dashboard
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the dashboard server:**
   ```bash
   npm start

## 🚀 Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd ../Frontend
   
2. **Install Dependencies:**
   ```bash
   npm install
   
3. **Start the Development Server:**
   ```bash
   npm run dev

## 📸 Screenshots

## 🧑‍⚕️ Patient View – Soham Medicare

### 🎨 CSS Theme
- **Dark Navy Background** for calmness and focus
- **Vivid Accent Colors** (sunset gradient: orange-pink) used in CTAs (buttons)
- **Clean, Rounded Input Fields** with consistent spacing and visual hierarchy
- **Responsive Layouts** for cross-device compatibility



#### 🔐 Login Page
Patients can log in to access their personal dashboard, manage appointments, and view medical information.  
![Patient Login](https://github.com/user-attachments/assets/6e392982-001c-43e4-b03a-55b1b1aafe08)


---

#### 🏥 About Us Page
This section communicates Soham Medicare’s mission, vision, and commitment to innovation and personalized healthcare.  
![About ](https://github.com/user-attachments/assets/f0237854-eb18-47eb-9234-2ec075b27763)


---

#### 📅 Appointment Booking
Patients can book appointments by filling in a detailed form including department, doctor, preferred date, and more.  
![Appointment](https://github.com/user-attachments/assets/cea02265-cc10-4c16-a289-a28793de0f7a)


---

#### 🏠 Home Page
The welcoming landing page showcases the hospital’s values, services, and friendly interface, guiding users through key offerings.  
![Home](https://github.com/user-attachments/assets/7a4a0994-994c-455a-9d42-e8ea13d7a906)


---

#### 📬 Contact / Message Form
A built-in contact form allows patients to reach out with questions or feedback, ensuring effective communication with hospital staff.  
![Message](https://github.com/user-attachments/assets/d00a82bf-11f5-42f3-a20b-35c70e2a9027)


---

> The patient interface is designed for simplicity and accessibility while ensuring a professional and elegant brand feel for **Soham Medicare**.

## 🧑‍💼 Admin Dashboard – Soham Medicare

### 🎨 CSS Theme – Admin Panel
- **Soft White Background** with light blue accents for clarity and focus.
- **Rounded Cards** and input fields for a clean, modern interface.
- **Consistent Font Styling** with bold headings and high-contrast text for readability.
- **Fixed Header Navigation** for quick access to different admin sections.
- **Light Gradient Backgrounds** that promote a professional, calm environment.

### 📸 Screenshots

#### 🔐 Admin Login
A secure login page that restricts access to admin functionalities.
![Admin Login](https://github.com/user-attachments/assets/4f23a1fa-9b42-4489-9e7f-982268ab3313)


---

#### 🏠 Admin Home
A personalized welcome panel showing appointment and doctor counts with motivational onboarding text for administrators.
![Admin Home](https://github.com/user-attachments/assets/44bab077-a639-4ee7-96a2-523591849e1b)


---

#### 👨‍⚕️ Doctor Management
A gallery view of all registered doctors with detailed profiles including name, email, specialty, and contact info.
![Doctor](https://github.com/user-attachments/assets/2fe5f190-1c51-4470-938f-b02902af8c5c)


---

#### 👤 Add New Admin
Form to register new administrators securely into the system.
![Add Admin](https://github.com/user-attachments/assets/c5a60797-7dbc-40a2-b5f3-e8dbb0e6abf8)


---

#### 🩺 Register a New Doctor
A form to add doctor details including image upload, department, and credentials.
![Add Doctor](https://github.com/user-attachments/assets/97025c35-f54e-4236-ae7a-c0c1315715b7)


---

#### 📥 Stored Messages
A neatly organized card layout for incoming patient messages, including contact details and message content.
![Message store](https://github.com/user-attachments/assets/51779e15-6c6f-4513-9699-474f9255e992)


---

> The **Admin Interface** is crafted for efficiency and simplicity, ensuring that even non-technical hospital staff can manage operations without hassle.


## 🤝 Contributors

Contributions are welcome! If you would like to contribute, please follow these steps:

1. **Fork** the repository. 🍴  
2. **Create a new branch** for your feature or bug fix. 🌿  
3. **Make your changes** and test them thoroughly. 🧪  
4. **Submit a pull request** with a detailed description of your changes. ✅  

> 🛠️ *Note: Contributors are encouraged to add new features, such as an enhanced doctor dashboard view, to further improve the administration of doctor profiles.*

---

## 📜 License

This project is licensed under the **MIT License**.  
For more details, see the [LICENSE](./LICENSE) file.
