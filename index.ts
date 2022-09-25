// primitive value : giá trị cơ bản
let hoTen: string = "string";
let luong: number = 1000;
let valid: boolean = true;
let result10: undefined = undefined;
let userLogin: null = null;

// reference value (object)
// type là từ khoá khai báo kiểu dữ liệu

type NhanVien = {
  ma: number | string;
  hoTen: string;
  luongCB: number;
  moTa?: string; // ? optional properties
};

let nv: NhanVien = { ma: "1", hoTen: "jimmy", luongCB: 1000 };

type ReponseTypeResult = string | boolean | undefined | NhanVien | null;

let resultServer: ReponseTypeResult = null;

// interface Cũng tạo ra 1 định dạng như type

interface Product {
  id: number | string;
  name: string;
  price: number;
  img: string;
}

interface Product {
  desc?: string;
}

let prod: Product = {
  id: 1,
  name: "product 1",
  price: 1000,
  img: "https://picsum.photos/2000",
  desc: "abc",
};

interface Button {
  id: number | string;
  innerHTML: string;
  className: string;
}

interface ButtonGradient extends Button {
  css: string;
}

let btn: ButtonGradient = {
  id: "btn-1",
  innerHTML: "Button 1",
  className: "btn",
  css: "abc",
};

// interface định dạng dữ liệu cho prototype (class)
interface CRUD {
  create;
  update;
  delete;
  search;
}

class FoodList implements CRUD {
  create: any;
  update: any;
  delete: any;
  search: any;
}

// type của function

let tinhTong = (num1: number, num2: number): number => {
  return num1 + num2;
};

let showMess = (mess: string): void => {
  console.log("hello", mess);
};

function main(callback: (title: string) => void) {
  // render ra giao diện
  callback("hello world!");
}

const renderH1 = (title: string): void => {
  document.querySelector("body").innerHTML = `<h1>${title}</h1>`;
};

const renderDiv = (title: string): void => {
  document.querySelector(
    "body"
  ).innerHTML = `<div class="bg-dark text-white p-5 text-center"> ${title}</div>`;
};

main(renderDiv);

// kiểu dữ liệu của mảng

let arrNumber: number[] = [1, 2, 3, 4];
let arrProd: Product[] = [
  { id: 1, name: "product 1", price: 1000, img: "https://picsum.photos/2000" },
  { id: 2, name: "product 2", price: 2000, img: "https://picsum.photos/2000" },
  { id: 3, name: "product 3", price: 3000, img: "https://picsum.photos/2000" },
];

// tuple: thể hiện của dữ liệu dưới dạng mạng
let result: [number, (newNumber: number) => number] = [
  1,
  (newNumber): number => {
    return newNumber;
  },
];

let sv: [number, string] = [1, "jimmy245"];

// kiểu du lieu any , unknown: nhận tất cả giá trị, tuy nhiên unknown phải check kieu dữ liệu mới đc thực hiện operation

type ReponseServer = Product | number;
let result20: any | number = 1;

// any cho phép thực thi operation (+ - * / gọi hàm)
class ProductType {
  id: string = "";
  name: string = "";
  img: string = "";
  showInfo(): void {
    console.log("id", this.id);
    console.log("name", this.name);
    console.log("img", this.img);
  }
}

let prod1 = new ProductType();
prod1.id = "1";
prod1.name = "product 1";
prod1.img = "";

let result30: unknown = 1;
if (result30 instanceof ProductType) {
  result30.showInfo();
}
if (typeof result30 == "number") {
  result30++;
}

// access modifier:
// private: trong class sử dụng đc ,instance ( đổi tượng tạo từ class đó ) ko truy xuất đc. lớp con ko thể sử dụng đc
// protected : trong class đó su dung đc ,instance ko su dung dc, class con có thể sử dụng

class NhanVien2 {
  maNhanVien: string | number = "";
  tenNhanVien: string = "";
  private luongCoBan: number = 1000;
  heSoLuong: number = 1;
  tinhLuong(): number {
    return this.luongCoBan * this.heSoLuong;
  }
  tinhPhuCap(): number {
    return this.luongCoBan * this.heSoLuong + 2000;
  }
}

class NhanVienKeToan extends NhanVien2 {
  nghiepVuKeToan: string;
  keToan() {}
}

let nv1: NhanVien2 = new NhanVien2();
nv1.maNhanVien = 1;
nv1.tenNhanVien = "aaa";

let nv2: NhanVienKeToan = new NhanVienKeToan();
nv2.maNhanVien = 2;
nv2.tenNhanVien = "jim";
