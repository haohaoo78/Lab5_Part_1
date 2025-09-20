# Supplier & Product Management

## 📌 Giới thiệu
Ứng dụng CRUD quản lý **Nhà cung cấp** và **Sản phẩm**, xây dựng bằng:
- Node.js + Express
- MongoDB + Mongoose
- EJS + Bootstrap
- Kiến trúc MVC

---

## 🚀 Chức năng
- Quản lý Nhà cung cấp (thêm / sửa / xóa / xem)
- Quản lý Sản phẩm (thêm / sửa / xóa / xem, liên kết nhà cung cấp)
- Giao diện CRUD đơn giản với Bootstrap
- Kết nối MongoDB

---

## ⚙️ Cài đặt

### 1. Clone dự án
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Cài đặt thư viện
npm install


3. Cấu hình môi trường
Tạo file .env ở thư mục gốc:
env


PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/mvcApp
SESSION_SECRET=your_secret_key
⚠️ .env đã được ignore trong .gitignore, không push lên GitHub.

▶️ Chạy ứng dụng

npm start
Truy cập tại: http://localhost:3000

📂 Cấu trúc thư mục

project/
│-- app.js
│-- package.json
│-- .gitignore
│-- .env (bỏ qua, không commit)
│-- /controllers
│-- /models
│-- /routes
│-- /views
│-- /public
👨‍💻 Tác giả
YouTube: Nam Media

