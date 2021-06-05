/** Bài 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 *  B1: Input : 3 so nguyen
 *  B2: Handle
 *  - Đặt biến: soThuNhat, soThuHai, soThuBa, soTamThoi;
 *  - Dùng hàm If và biến tạm thời tìm số nhỏ nhất gán vào soThuNhat, 
 *  - So sánh 2 số còn lại và gán biến soThuHai và soThuBa
 *  - 
 *   * 
 * B3: Output: Xuất ra màn hình thứ tự 3 số tăng dần: soMin, soGiua, soMax
 */


var btnSapXep = document.getElementById('btnSapXep');
var ketQuaSapXep = document.getElementById('ketQuaSapXep');

btnSapXep.onclick = function(){
    var soTamThoi = 0 ;
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    
    if (Number.isInteger(+soThuNhat) == false || Number.isInteger(+soThuHai) == false|| Number.isInteger(+soThuBa) == false || soThuNhat == '' || soThuHai == '' || soThuBa == ''){
        ketQuaSapXep.innerHTML = '<h3 style = "color: red;" >Vui lòng nhập vào 3 số nguyên</h3>' 
        
    } else {
        if(soThuNhat >= soThuHai) {
            soTamThoi = soThuNhat;
            soThuNhat = soThuHai;
            soThuHai = soTamThoi;
        } 
        if (soThuNhat >= soThuBa) {
            soTamThoi = soThuNhat;
            soThuNhat = soThuBa;
            soThuBa = soTamThoi;
        }
        if (soThuHai >= soThuBa) {
            soTamThoi = soThuHai;
            soThuHai = soThuBa;
            soThuBa = soTamThoi;
        }
        ketQuaSapXep.style.color = "blue";
        ketQuaSapXep.style.fontSize = "18px";
        ketQuaSapXep.innerHTML = 'Thứ tự các số tăng dần là ' + soThuNhat + ' ' + soThuHai+ ' ' + soThuBa

         }

}

/**
 * Bài 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
 *  B1: Input : Người sử dụng lựa chọn các option đã xuất hiện
 *  B2: Handle
 *  - Đặt biến: boSuDung, meSuDung, anhSuDung,emSuDung, loiChao
 *  - Dùng hàm if duyệt qua các điều kiện biến nào được checked thì in ra màn hình kết quả lơi chào tương ứng
 *      
 * B3: Output: Xuất lời chào ra màn hình tương ứng
 */

var btnXinChao = document.getElementById('btnXinChao');
var xuatLoiChao = document.getElementById('xuatLoiChao');
var loiChao = '';

btnXinChao.onclick = function() {
    var boSuDung = document.getElementById('boSuDung');
    var meSuDung = document.getElementById('meSuDung');
    var anhSuDung = document.getElementById('anhSuDung');
    var emSuDung = document.getElementById('emSuDung');

    
    if (boSuDung.checked == true) {
        loiChao = 'Xin chào Bố';
    } else if(meSuDung.checked == true) {
        loiChao = 'Xin chào Mẹ'; 
    }else if(anhSuDung.checked == true) {
        loiChao = 'Xin chào Anh Trai'; 
    }else if(emSuDung.checked == true) {
        loiChao = 'Xin chào Em Gái'; 
    };
    xuatLoiChao.style.color = "blue";
    xuatLoiChao.style.fontSize = "18px";    
    xuatLoiChao.innerHTML = loiChao;
}   

/** Bài 3: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất có bao nhiêu số chẵn và lẻ 
 *  B1: Input : 3 số nguyên
 *  B2: Handle
 *  - Đặt biến: soThuNhatBai3, soThuHaibai3, soThuBaBai3, tongSoChan, tongSoLe
 *  - Xét duyệt điều kiện nhập của ngưởi dùng
 *  -  Dùng hàm if duyệt từng phần tử tìm chẵn lẽ. Nếu số chẳn thì tăng biến tongSoChan lên 1 ngược lại thì tăng biến tongSoLe lên 1.
 * 
 * B3: Output: Xuất ra màn hình kết quả
 */



var btnTimChanLe = document.getElementById('btnTimChanLe');
var ketQuaChanLe = document.getElementById('ketQuaChanLe');

btnTimChanLe.onclick = function() {
    var tongSoChan = 0, tongSoLe = 0;
    var soThuNhatBai3 = document.getElementById('soThuNhatBai3').value;
    var soThuHaiBai3 = document.getElementById('soThuHaiBai3').value;
    var soThuBaBai3 = document.getElementById('soThuBaBai3').value;
    

    
    if (Number.isInteger(+soThuNhatBai3) == false || Number.isInteger(+soThuHaiBai3) == false|| Number.isInteger(+soThuBaBai3) == false || soThuNhatBai3 == '' || soThuHaiBai3 == '' || soThuBaBai3 =='') {
        ketQuaChanLe.innerHTML= '<h3 style = "color: red;" >Vui lòng nhập vào 3 số nguyên</h3>' 
    } else {

        soThuNhatBai3 % 2 == 0 ? tongSoChan++ : tongSoLe++;
        soThuHaiBai3 % 2 == 0 ? tongSoChan++ : tongSoLe++;
        soThuBaBai3 % 2 == 0 ? tongSoChan++ : tongSoLe++;
        ketQuaChanLe.style.color = "blue";
        ketQuaChanLe.style.fontSize = "18px";    
        ketQuaChanLe.innerHTML = 'Có: '+tongSoChan +' số chẵn và ' + tongSoLe + ' số lẻ';
    }
      

}



/** Bài 4: Cho người dùng nhập vào 3 cạnh tam giác. Hãy cho biết đó là tam giác gì.
 *  B1: Input : 3 so nguyen
 *  B2: Handle
 *  - Đặt biến: canhThuNhat, canhThuHai, canhThu3, loaiTamGiac
 *  - Dùng hàm if duyệt từng điều kiện của các loại điều kiện và trả về kết quả.
 * 
 * B3: Output: Xuất ra màn hình kết quả
 */

var btnLoaiTamGiac = document.getElementById('btnLoaiTamGiac');
var ketQuaLoaiTamGiac = document.getElementById('ketQuaLoaiTamGiac');

btnLoaiTamGiac.onclick = function() {
    var loaiTamGiac= '';
    var canhThuNhat = Number(document.getElementById('canhThuNhat').value);
    var canhThuHai = Number(document.getElementById('canhThuHai').value);
    var canhThuBa = Number(document.getElementById('canhThuBa').value);
    
      
    if (canhThuNhat + canhThuHai < canhThuBa || canhThuHai + canhThuBa < canhThuNhat || canhThuBa + canhThuNhat < canhThuHai || isNaN(canhThuNhat) || isNaN(canhThuHai) || isNaN(canhThuBa) ||canhThuNhat <= 0 || canhThuHai <= 0 || canhThuBa<= 0 ){
        loaiTamGiac = '<h3 style = "color: red;" >Ba cạnh trên không phải là cạnh tam giác</h3>' 
        
    } else {
        if (canhThuNhat == canhThuHai && canhThuHai == canhThuBa) {
            loaiTamGiac = 'Tam giác đều';
        } else if(canhThuNhat == canhThuHai || canhThuHai == canhThuBa || canhThuBa == canhThuNhat) {
            loaiTamGiac = 'Tam giác cân';
        } else if(canhThuNhat**2 == (canhThuBa**2 + canhThuBa**2) ||canhThuHai**2 == (canhThuBa**2 + canhThuNhat**2) || canhThuBa**2 == (canhThuNhat**2 + canhThuHai**2) ) {
            loaiTamGiac = 'Tam giác vuông';
        } else {
            loaiTamGiac = 'Tam giác thường';
        }   
    }
    
    ketQuaLoaiTamGiac.innerHTML = ` <h3 style = "color:blue"> ${loaiTamGiac} </h3>   `    ;   
    
}


