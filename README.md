-Đăng nhập Google, hiển thị thông tin đúng theo từng user(email,avatar khi họ đăng nhập), Validate email đúng định dạng, Password phải có ít nhất 6 kí tự, 1 viết hoa, 1 số, 1 kí tự đặc biệt. Tương tự như đăng nhập, đăng ký thông thường.

-Nếu là user thì ko thể truy cập vào trang admin.

-Khi đăng nhập thành công sẽ mã hoá thông tin user, cấp cho user mã token khi họ đăng nhập.

-Chức năng Logout.

-Thêm sản phẩm vào giỏ hàng và tăng giảm sản phẩm trong giỏ hàng, hiển thị tổng sản phẩm và giá tiền mỗi trạng thái giỏ hàng sẽ tương ứng với 1 user. Nếu đơn hàng trống thì ko đc đến trang thanh toán.

-Chức năng search sản phẩm theo tên sản phẩm.

-Ở trang checkout, validate fields name, phone, address. Khi submit sẽ lưu lại các thông tin Order và xoá trạng thái giỏ hàng của User đó. 

-Chat Facebook

-User có thể xem trạng thái đơn hàng của họ, pending, approved hay disapproved

-Quản lí product (thêm, sửa, xoá)

-Quan li order (kiểm tra approved, disapproved)

-Quản lí user.   (Xoá user)

Deploy server, liên tục tích hợp liên tục triển khai CICD



-Chưa làm đc phân quyền cho user khác ko vao đc trang admin,
-chưa lưu trữ DB trên firebase
-chưa chưa làm đc chức năng approve hay reject đơn hàng
-chưa gửi đc email.