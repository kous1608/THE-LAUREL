/* =========================================== */
/* =========================================== */
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password-field").value;
    //Đặt 1 Admin ảo để đăng nhập quản trị
    if (username == "kous1608" && password == "123456") {
        swal({
            title: "",
            text: "Xin chào Nguyễn Trường",
            icon: "success",
            close: true,
            button: false,
          });
        window.location = "admin/admin.html";
        return true;
       
    }
    if (username == "thanhchechou" && password == "123456") {
      swal({
          title: "",
          text: "Xin chào Thành",
          icon: "success",
          close: true,
          button: false,
        });
      window.location = "user/nguyenviethanh10a1";
      return true;
     
  }
  if (username == "suthatbimat" && password == "123456") {
    swal({
        title: "",
        text: "Xin chào Thành",
        icon: "success",
        close: true,
        button: false,
      });
    window.location = "user/nguyenviethanh";
    return true;
   
}
    //Nếu không nhập gì mà nhấn đăng nhập thì sẽ báo lỗi
    if (username == "" && password == "") {
        swal({
            title: "",
            text: "Bạn chưa điền đầy đủ thông tin đăng nhập...",
            icon: "error",
            close: true,
            button: "Thử lại",
          });
         
        return false;
       
    }
    //Nếu không nhập mật khẩu mà đúng tài khoản 
    if (username == "admin" && password == "") {
        swal({
            title: "",
            text: "Bạn chưa nhập mật khẩu...",
            icon: "warning",
            close: true,
            button: "Thử lại",
          });
        return false;
    }
    //Nếu không nhập tài khoản sẽ báo lỗi
    if (username == null || username == "") {
        swal({
            title: "",
            text: "Tài khoản đang để trống...",
            icon: "warning",
            close: true,
            button: "Thử lại",
          });
        return false;
    }
    //Nếu không nhập mật khẩu sẽ báo lỗi
    if (password == null || password == "") {
        swal({
            title: "",
            text: "Mật khẩu đang để trống...",
            icon: "warning",
            close: true,
            button: "Thử lại",
          });
        return false;
    }
    //Nếu trống toàn bộ thì báo lỗi
    else {
        swal({
            title: "",
            text: "Sai thông tin đăng nhập rồi nè :(...",
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        return true;
    };
}

/*  PHẦN NỘI DUNG KHÔI PHỤC MẬT KHẨU   */

/* =========================================== */
/* =========================================== */
//  function validate() {
//      var email = document.getElementById("email").value;
//     if (email == null || email == "") {
//        swal("Bạn Chưa Nhập Email", "Vui Lòng Kiểm Tra", "warning");
//        return false;
//    }
//}
function RegexEmail(emailInputBox) {
    var emailStr = document.getElementById(emailInputBox).value;
    var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var isvalid = emailRegexStr.test(emailStr);
    if (!isvalid) {
        swal({
            title: "",
            text: "Bạn vui lòng nhập đúng định dạng email...",
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        
        emailInputBox.focus;
    } else {
        swal({
            title: "",
            text: "Email của bạn chưa được đăng kí trên hệ thống !",
            icon: "error",
            close: true,
            button: "Thử lại",
          });
        emailInputBox.focus;
        window.location = "#";

    }
}
