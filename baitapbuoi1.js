// Bài tập 1 
// + Đầu vào
//lương 1 ngày làm
    var b = 100000;
    var a = "nhập sô ngày làm";
// + Xử lý
//số ngày làm * lương 1 ngày làm 
    var tienLuong = a * b;

// + Đầu ra 
    console.log(tienLuong);
document.getElementById("btnLuong").onclick = function() {
    var songaylam = document.getElementById("soNgayLam").value*1;
    var luong1Ngay = 100000;
    var tienLuong = songaylam * luong1Ngay;
    console.log("Tiền lương là: " + tienLuong); 
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienLuong = currentFormat.format(tienLuong);
    document.getElementById("thongbao1").innerHTML = "Số tiền lương là "+ tienLuong;

}

// Bài tập 2 
// + Đầu vào
// Giả sử có 5 số thực là
    var a = "nhập số thực 1";
    var b = "nhập số thực 2";
    var c = "nhập số thực 3";
    var d = "nhập số thực 4";
    var e = "nhập số thực 5";
// + Xử lý
// Cộng tất cả lại rồi chia 5
    var trungBinhCong=(a + b + c + d + e)/5

// + Đầu ra 
    console.log(trungBinhCong);
document.getElementById("tinhTB").onclick = function() {
    var soThuc_1 = document.getElementById("soThuc1").value*1;
    var soThuc_2 = document.getElementById("soThuc2").value*1;
    var soThuc_3 = document.getElementById("soThuc3").value*1;
    var soThuc_4 = document.getElementById("soThuc4").value*1;
    var soThuc_5 = document.getElementById("soThuc5").value*1;
    var number_1 = parseInt(soThuc_1);
    var number_2 = parseInt(soThuc_2);
    var number_3 = parseInt(soThuc_3);
    var number_4 = parseInt(soThuc_4);
    var number_5 = parseInt(soThuc_5);
    var tinhTB = (number_1+number_2+number_3+number_4+number_5)/5;
    console.log("Trung bình cộng của 5 số là"+tinhTB);
    document.getElementById("thongbao2").innerHTML = "Trung bình cộng là " + tinhTB; 
}

// Bài tập 3
// + Đầu vào
// 1 USD = 23500 VND
    var a = 23500;
// Giả sử nhập vào 10 USD
// + Xử lý
    var tong = 10 * a;
// + Đầu ra 
    console.log(tong);
document.getElementById("soTien").onclick = function() {
    var soTienUSD = document.getElementById("soTienUSD").value*1;
    var a = 23500;
    var tienQuyDoi = soTienUSD * a;
    console.log("Số tiền quy đổi là "+tienQuyDoi);
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienQuyDoi = currentFormat.format(tienQuyDoi);
    document.getElementById("thongbao3").innerHTML = "Số tiền quy đổi là " + tienQuyDoi;
}

// Bài tập 4
// + Đầu vào
// Giả sử nhập chiêu dài là 4
    var a = 4;
// Giả sử nhập chiêu rộng là 5
    var b = 5;
// + Xử lý
    var chuVi = (a + b)*2;
    var dienTich = a * b;
// + Đầu ra 
    console.log(chuVi);
    console.log(dienTich);
document.getElementById("chuVi").onclick = function() {
    var dai = document.getElementById("chieuDai").value*1;
    var rong = document.getElementById("chieuRong").value*1;
    var chuvi = (dai*rong)/2;
    console.log("Chu vi là: " + chuvi);
    document.getElementById("thongbao4").innerHTML = "Chu vi là: " + chuvi;
}
document.getElementById("dienTich").onclick = function() {
    var dai = document.getElementById("chieuDai").value*1;
    var rong = document.getElementById("chieuRong").value*1;
    var dientich = dai*rong;
    console.log("Diện tích là: " + dientich);
    document.getElementById("thongbao5").innerHTML = "Diện tích là: " + dientich;
}
    
// Bài tập 5
// Gia sử
// n = 25 => 2 + 5 => ?
// + Đầu vào
    var n = 25;
//   Xử lý
// Tách lấy hàng chục: int so_hang_chuc=(n/10)
    var hangChuc = Math.floor(n%100/10);
// Tách lấy hàng đơn vị n%10
    var hangDv = n%10;
// hàng trăm + hàng chục + hàng đơn vị
    var tongKySo =hangChuc + hangDv;
//   Đầu ra
    console.log("tong:" + tongKySo);
document.getElementById("tinhTong").onclick = function() {
    var soNhap = document.getElementById("soNguyen").value*1;
    var hangChuc = Math.floor(soNhap%100/10)
    var hangDv = soNhap%10;
    console.log("Số được nhập là: " + soNhap);
    console.log("Số hàng chục là: " + hangChuc);
    console.log("Số hàng đơn vị là: " + hangDv);
    var tong = hangChuc + hangDv;
    document.getElementById("thongbao6").innerHTML= "Tổng là: " + tong;
}
