let modal = document.getElementById("myModal");
let create1 = document.getElementById("MyBtn");
let span = document.getElementsByClassName("close")[0];
class thongTin{
    id;
    img;
    name;
    price;
    constructor(id, img, name, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
    }
}
let meo1 =new thongTin(0,src="../image/sanpham-catvesinh.jpeg","Cát vệ sinh","800$")
let meo2 =new thongTin(1,src="../image/san%20pham-batan.jpeg","Bát ăn","700$")
let meo3 =new thongTin(2,src="../image/sanpham-cotcaomong.jpeg","Cột cào móng","600$")
let meo4 =new thongTin(3,src="../image/sanpham-hatcaninchomeo.jpeg","Hạt canin","500$")
let meo5 =new thongTin(4,src="../image/sanpham-chaudivesinh.jpeg","Chậu vệ sinh","400$")

let meo = [meo1,meo2,meo3,meo4,meo5];
function clickBtn () {
    let check = false
    let search = document.getElementById("timkiem").value;
    for (let i = 0; i < meo.length; i++) {
        if (meo[i].name === search) {
            check = true
            modal.style.display = "block";
            let str = "<div class=\"card\" style=\"width: 18rem;\">\n" +
                "                                <img class=\"card-img-top\"\n" +
                "                                     src= " + meo[i].img +
                "                                     alt=\"Card image cap\">\n" +
                "                                <div class=\"card-body\">\n" +
                "                                    <h5 class=\"card-title\"> " + meo[i].name + "</h5>\n" +
                "                                    <p class=\"card-text\">" + meo[i].price + "</p>\n" +
                "                                    <button>Thêm giỏ hàng</button>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>";

            document.getElementById("pTimKiem").innerHTML = str
            break;
        }
    }
    if (check === false) {
        alert("Mời nhập lại");
    }
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

let gioHang=[]

function hienThiGH(){
    let gh = ""
    for (let i = 0; i< gioHang.length; i++){
        gh += '  <tr>' +
            '                            <td><img class="class-img" sizes="100px" src="'+gioHang[i].img+'   " alt="">'+gioHang[i].name+'</td>\n' +
            '                            <td><p class="card-text">'+gioHang[i].price+'</p></td>\n' +
            '                            <td> <input style="width: 100px;outline: none" type="number" value="1"min="0"></td>\n' +
            '                            <td style="cursor: pointer" onclick="xoaGioHang('+i+')">Xóa</td>\n' +
            '\n' +
            '                        <tr>'
    }

    document.getElementById("gioHang").innerHTML = gh;
}
function themGioHang(id){

    gioHang.push(meo[id]);
    hienThiGH();

}
function xoaGioHang(id){
    gioHang.splice(id, 1);
    hienThiGH()

}

function close1(){
    document.getElementById("dangxuat").value
    confirm("Bạn có muốn đăng xuất không?")
    window.location.href="indexkimchi_home.html";
}

function showMK(){
    document.getElementById("otp").value;
    a = prompt("Vui lòng nhập mật khẩu cấp 2 của bạn")
    if (a === "halinh"){
        window.location.href="suasanpham.html";
    } else {
        alert("sai mật khẩu")
    }
    
    
}