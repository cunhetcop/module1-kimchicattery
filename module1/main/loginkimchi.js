const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function login() {
    let user = document.getElementById("email1").value;
    let pass = document.getElementById("pass1").value;
    if (user === "halinh@gmail.com" && pass === "halinh") {
        confirm("đăng nhập tài khoản quản trị thành công!")
        window.location.href = "indexkimchi_master_login.html";
    } else if (user == false && pass == false) {
        alert("xin vui lòng đăng nhập")
    } else if (user != "halinh@gmail.com" && pass != user) {
        alert("Đăng nhập thành công")
            window.location.href = "indexkimchi_normal_login.html";
        } else {
            alert("sai mật khẩu")
        }
    }


function showMessage(){
    let user2 = document.getElementById("email2").value;
    let pass2 = document.getElementById("pass2").value;
    if ( user2 != pass2){
        alert("Đăng ký thành công")
        confirm("Quay trở về trang chính?")
        window.location.href="indexkimchi_normal_login.html"
    } else {
        alert("Xin vui lòng thử lại")
    }
}

$('#pass1').keypress(function(e) {
    if (e.which == 13) {
        login();
        e.preventDefault();
    }
});

