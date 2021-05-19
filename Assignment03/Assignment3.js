var students = [];
const buttons = document.querySelectorAll(".filter");

class Student {
    constructor(name, mark, gender, subjects) {
        this.name = name;
        this.mark = mark;
        this.gender = gender;
        this.subjects = subjects;
    }

    showInfo() {
        console.log("Tên sinh viên: " + this.name);
        console.log("Điểm trung bình tích lũy: " + this.mark);
        console.log("Giới tính: " + this.gender);
        console.log("Các học phần đã học: " + this.subjects);
    }
}

var student1 = new Student("Nguyễn Văn An", 10.0, 1, [{title: "Lý", mark:10}, {title: "Toán", mark:10}]);
var student2 = new Student("Phạm Thị Bích Phượng", 9.3, 0, [{title: "Lý", mark:7}, {title: "Toán", mark:9}]);
var student3 = new Student("Bùi Công Nam", 7.8, 1, [{title: "Lý", mark:10}, {title: "Toán", mark:8}]);
var student4 = new Student("Lê Diệu", 7.5, 0, [{title: "Lý", mark:9}, {title: "Toán", mark:7}]);
var student5 = new Student("Lê Hoàng Xuân", 0.0, 0, [{title: "Lý", mark:0}, {title: "Toán", mark:0}]);
var student6 = new Student("Thiên Phú", 8.8, 1, [{title: "Lý", mark:6}, {title: "Toán", mark:9}]);
var student7 = new Student("Nguyễn Gia Bảo", 9.0, 1, [{title: "Lý", mark:5}, {title: "Toán", mark:9}]);
var student8 = new Student("Hoàng Châu Thịnh", 7.7, 1, [{title: "Lý", mark:7}, {title: "Toán", mark:3}]);
var student9 = new Student("Phùng Thái Linh", 9.4, 1, [{title: "Lý", mark:6}, {title: "Toán", mark:8}]);
var student10 = new Student("Lê Diệu Anh", 5.7, 0, [{title: "Lý", mark:8}, {title: "Toán", mark:4}]);

students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);
// studentsBackup = students;
var studentsBackup = [...students];

const render = document.querySelector(".render");
console.log(render);
function xemKetQua(arr) {
  render.innerHTML = "";
  html = arr.map(student => `
    <div class="student">
      <p>${student.name}</p>
      <p>Điểm trung bình : ${student.mark}</p>
      <p>Giới tính : ${student.gender == 1 ? "Nam" : "Nữ"}</p>
      <p>Điểm lý: ${student.subjects[0].mark}</p>
      <p>Điểm toán: ${student.subjects[1].mark}</p>
    </div>
  `).join('');
  render.innerHTML += html;
}
xemKetQua(students);

console.log(studentsBackup);
buttons[0].addEventListener("click", () => xemKetQua(studentsBackup));

// câu 2
function sapXepSVTheoDiemTichLuyDESC(arr) {
  function compareMarkDESC( a, b ) {
    if ( a.mark > b.mark ){
      return -1;
    }
    if ( a.mark > b.mark ){
      return 1;
    }
    return 0;
  }
  // console.log("Sắp xếp giảm dần theo GPA:");
  var sapXepSVGiamDanTheoGPA = students.sort(compareMarkDESC);
  xemKetQua(sapXepSVGiamDanTheoGPA);
}
buttons[1].addEventListener("click", () => {sapXepSVTheoDiemTichLuyDESC(students)});

// câu 3
function sapXepSVTheoDiemTichLuyASC(arr) {
  function compareMarkASC( a, b ) {
    if ( a.mark < b.mark ){
      return -1;
    }
    if ( a.mark > b.mark ){
      return 1;
    }
    return 0;
  }
  // console.log("Sắp xếp tăng dần theo GPA:");
  var sapXepSVTangDanTheoGPA = students.sort(compareMarkASC);
  xemKetQua(sapXepSVTangDanTheoGPA);
}
buttons[2].addEventListener("click", () => {sapXepSVTheoDiemTichLuyASC(students)});


//câu 4
function locSVNuCoDiemLyLonHon5(arr) {
  var locSVNuCoDiemLyLonHon5 = students.filter(student => student.gender===0 && student.mark > 5);
  // console.log(locSVNuCoDiemLyLonHon5);
  xemKetQua(locSVNuCoDiemLyLonHon5);
}
buttons[3].addEventListener("click", () => {locSVNuCoDiemLyLonHon5(students)});

//câu 5
function locSinhVienCoDiemToanHoacLyLonHon8(arr) {
  var locSinhVienCoDiemToanHoacLyLonHon8 = students.filter(student => student.subjects[0].mark > 8 || student.subjects[1].mark > 8);
  // console.log(locSinhVienCoDiemToanHoacLyLonHon8);
  xemKetQua(locSinhVienCoDiemToanHoacLyLonHon8);
}
buttons[4].addEventListener("click", () => {locSinhVienCoDiemToanHoacLyLonHon8(students)});


//Câu 6: Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất
function svCoDiemMonToanCaoNhatVaThapNhat(arr) {
  var svCoDiemMonToanCaoNhat = students.reduce((prep, current) => (prep.subjects[1].mark > current.subjects[1].mark) ? prep : current);
  var svCoDiemMonToanThapNhat = students.reduce((prep, current) => (prep.subjects[1].mark < current.subjects[1].mark) ? prep : current);
  var mangKetQua = [svCoDiemMonToanCaoNhat, svCoDiemMonToanThapNhat];
  xemKetQua(mangKetQua);
}
buttons[5].addEventListener("click", () => {svCoDiemMonToanCaoNhatVaThapNhat(students)});


// Câu 7: Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
function xoaSVCoDiemTichLuyLa0(arr) {
  var svCoDiemTichLuyKhac0 = students.filter(student => student.mark !== 0);
  xemKetQua(svCoDiemTichLuyKhac0);
}
buttons[6].addEventListener("click", () => {xoaSVCoDiemTichLuyLa0(students)});

// Câu 8: Thêm 03 sinh viên mới vào danh sách.
function them3SinhVien() {
    var newStudent1 = new Student("Pham Minh Tien", 8.4, 1, [{title: "Lý", mark:9}, {title: "Toán", mark:8}]);
    var newStudent2 = new Student("Trinh Thi Thai Thanh", 7.0, 0, [{title: "Lý", mark:7}, {title: "Toán", mark:7}]);
    var newStudent3 = new Student("Hoàng Hữu Thịnh", 6.8, 1, [{title: "Lý", mark:7}, {title: "Toán", mark:5}]);
    students.push(newStudent1, newStudent2, newStudent3);
    console.log(studentsBackup);
    xemKetQua(students);
}
buttons[7].addEventListener("click", () => {them3SinhVien(students)});