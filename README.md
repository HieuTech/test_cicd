-Đăng nhập Google, hiển thị thông tin đúng theo từng user(email,avatar khi họ đăng nhập), Validate email đúng định dạng, Password phải có ít nhất 6 kí tự, 1 viết hoa, 1 số, 1 kí tự đặc biệt. Tương tự như đăng nhập, đăng ký thông thường.

-Khi đăng nhập thành công sẽ mã hoá thông tin user, cấp cho user mã token khi họ đăng nhập.

-reset password

-Thêm sản phẩm vào giỏ hàng và tăng giảm sản phẩm trong giỏ hàng, hiển thị tổng sản phẩm và giá tiền mỗi trạng thái giỏ hàng sẽ tương ứng với 1 user. Nếu đơn hàng trống thì ko đc đến trang thanh toán.

-Chức năng search sản phẩm theo tên sản phẩm.

-Ở trang checkout, validate fields name, phone, address. Khi submit sẽ lưu lại các thông tin Order và xoá trạng thái giỏ hàng của User đó. Gửi email khi user order thành công.

-Chat Facebook

-User có thể xem trạng thái đơn hàng của họ, pending, approved hay disapproved

-Quản lí product (thêm, sửa, xoá)

-Quan li order (kiểm tra approved, disapproved, xoá đơn )

-Quản lí user.   (Xoá user)

Deploy server và CICD



-- Định hướng phát triển
-thêm trang chi tiết sản phẩm.
-khi user đăng nhập sẽ có email gửi đến để check email có tồn tại ko.
-cho user chỉnh sửa thông tin cá nhân.
-phân quyền cho user khác ko vao đc trang admin,
-sort theo tên, giá.
-lưu trữ image trên firebase
-chức năng approve hay reject đơn hàng
-show more sản phẩm.
-responsive





** hoisting (declared function)
tự động đẩy giá trị lên đầu, ap dụng cho var.
callback function là gọi 1 hàm dưới dạng tham số và thực thi hàm đó trong 1 hàm.

speard operatior và rest operator, rest cho phép biểu diển tham số function dưới dạng array, 
vd function sum(...number){

}

Dấu + sẽ convert string to number.
Dấu "" convert number to string
sum(1,2,3,4,5)