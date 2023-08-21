# Backend_E-Commerce

## Thiết kế database

1.  User:
    Có 2 quyền sử dụng: Admin - Customer

- Customer: Order sản phẩm, review sản phẩm
- Admin: Thêm sản phẩm vào kho, kiểm tra tình hình của các đơn hàng.
- username
- email
- password
- adress
- phone number
- orders: [list order]

2. Product:

   - Khi Admin thêm một sản phẩm vào kho

   * Image : Array images
   * Description
   * Size : [{size, Q'ty}]
   * Colors: [{color, Q'ty}]
   * Brand
   * Category: Phân loại hàng
   * Sex: Man, Woman, unisex
   * Quantity:
   * reviews: []

3. Management:

Tạo một Schema:

- sexsual:

* Tạo 3 trường: Men, Women, Unisex - Số lượng tổng, name
* Products: [List name] - Khi thêm Product, thì kiểm tra xem name có trong list chưa, nếu chưa có thì thêm vào.

-

4. Order

- Xác minh người order
- Thông tinh về product
- Đã thanh toán chưa (isPaymented)
- Đã ship chưa này
- UserID
- Khi thêm order, kiểm tra xem

5. reviews

- user
- text
- product

## Package sử dụng
