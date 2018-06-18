# Bài tập Trainee Colombo 2018  
## Build Jquery plugin
- Một số chức năng yêu cầu:
    - Khi scroll, phần tử con trượt trong phần tử cha và không bị trượt đi mất 
    - Đến hết chiều dài phần tử cha, phần tử con biến mất cùng phần tử cha
    - [Chi tiết yêu cầu ](https://github.com/colombo-trainee/trainee_2018/blob/master/frontend/jquery_plugin.md)
- Thực hiện bởi: **Dương Minh Nam**  

## Liên kết
- [Demo- jsfiddle](https://jsfiddle.net/mogp9tjf/10/)
- [Github page](https://duongnam99.github.io/build-plugin-jquery/)

## Hướng dẫn sử dụng    
- Select element (phần tử con muốn có hiệu ứng), gọi hàm inner_float(), truyền object vào hàm  
vd: khoảng cách div con với lề trên của sổ trình duyệt là 10px:
```
$('.className').inner_float({
    'top': '10px'
})
```
## Kiến thức nắm được  
- khai báo hàm với prototype để xây dựng plugin
- ôn lại object trong js, hàm viết đè object này lên object khác: extend()
- sự kiện scroll, các hàm lấy vị trí, lấy chiều dài, rộng của phần tử
- hàm ép kiểu: String(), Number()...

## Credit
- phầm mềm hỗ trợ: thư viện jquery bản 3.3.1
