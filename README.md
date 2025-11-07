A simple **full-stack shopping cart app** . 

It demonstrates core e-commerce flows including **product listing, add/remove to cart, cart total calculation, and checkout receipt generation**, using mock data (no actual payments).

---

## 🚀 Features

### 🖥 Frontend (React + Vite)
- Product grid with “Add to Cart” buttons  
- Cart view showing items, quantity, subtotal, and total  
- Remove item from cart  
- Checkout page with mock receipt & timestamp  
- Responsive and clean UI  
- REST API integration with Axios  

### ⚙️ Backend (Node.js + Express)
- `/api/products` → Returns 5–10 mock products  
- `/api/cart` → Add, view, and remove cart items  
- `/api/checkout` → Mock checkout endpoint (generates receipt and clears cart)  
- Clean modular structure: `controllers`, `routes`, `config`  
- Uses **mock data** (no DB dependency)  
- Ready for REST API deployment  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React, Vite, Axios |
| Backend | Node.js, Express.js |
| Database | Mock data (in-memory array) |
| Dev Tools | Postman, Nodemon |
| Optional | Docker Compose (for full-stack container setup) |

---


## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/samia04s/mock-ecom.git
cd mock-ecom

2️⃣ Backend Setup

cd backend
npm install
npm run dev

Server runs on 👉 http://localhost:5000

3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on 👉 http://localhost:5173

🌐 API Endpoints

| Method | Endpoint        | Description                                         |
| ------ | --------------- | --------------------------------------------------- |
| GET    | `/api/products` | Fetch all mock products                             |
| POST   | `/api/cart`     | Add a product to cart                               |
| GET    | `/api/cart`     | View all cart items                                 |
| DELETE | `/api/cart/:id` | Remove product from cart                            |
| POST   | `/api/checkout` | Mock checkout (returns order summary & clears cart) |


🎬 Demo Flow

1. View products on /

2. Add items to cart 🛒

3. View cart → see quantity & total

4. Click “Proceed to Checkout” 💳

5. Checkout page shows payment success & clears cart


## 🖼️ Screenshots 

Please refer to the screenshots section in the repo
![Demo App](/screenshots/Transaction.png)

## 🎥 Demo Video
[Watch the Unlisted Demo on YouTube](https://youtu.be/4Ux__qc8V3k)

