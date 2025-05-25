# 🍽️ Food Delivery Website (Demo)

A full-stack demo food delivery web application built using **React**, **Vite**, and a custom **Node.js backend**. This project showcases key features of a modern food ordering platform with admin panel functionality, order tracking, and Stripe payment integration.

---

## 🔥 Overview

This project simulates an online food delivery service with the following components:

- **Frontend**: Users can browse menus, add food to cart, place orders, and track order status.
- **Admin Panel**: Admins can add food items, view orders, and update order status (e.g., Processing, Out for Delivery, Delivered).
- **Backend**: All interactions are powered by a local Node.js/Express server.

> **Note:** The backend server **must be running** (`npm run server`) for full functionality, including admin operations and order status tracking.

---

## 🚀 Live Demo

<!-- Add your deployment link if available -->
<!-- FrontEnd page: [https://frontend-vk.netlify.app/](https://frontend-vk.netlify.app) -->
<!-- Admin page: [https://admin-vk.netlify.app] (https://admin-vk.netlify.app) -->

---

## ✨ Features

### 👨‍🍳 Admin Panel
- Manually accessible panel for:
  - Viewing food items
  - Adding new food items
  - Viewing user orders
  - Updating order status (Processing, Out for Delivery, Delivered)

### 🍕 User Frontend
- Home Page and Menu Page
- Add food items to cart
- Proceed to Stripe payment
- View real-time order status (updates based on admin actions)
- Dynamic cart management and order tracking

---

## 🧰 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js, Express (via local server)
- **Payment**: Stripe Payment Gateway
- **Styling**: CSS / Tailwind (if used)
- **Others**: ESLint for linting, Axios for HTTP requests

---

## 📦 Getting Started

### ⚙️ Prerequisites

- Node.js (v16+)
- npm or yarn

### 🔧 Installation

Clone the project and install dependencies:

```bash
git clone https://github.com/your-username/food-delivery-demo.git
cd food-delivery-demo
npm install

🟢** Running the Project Locally**
1. Start Backend Server
npm run server
Runs on: http://localhost:5000 (or your configured port)

Must be kept running in the terminal

2. Start Frontend (React + Vite)
Open a new terminal:
npm run dev
Runs on: http://localhost:5174 by default

3. Open Admin Panel
After starting the frontend, go to:
http://localhost:5173/admin
