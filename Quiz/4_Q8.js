const inventory = [
  {product:"감자칩", quantity: 10, price: 1500},
  {product:"아이스크림", quantity: 0, price: 3000},
  {product:"쿠키", quantity: 20, price: 2000},
  {product:"탄산음료", quantity: 5, price: 1000},
];

inventory.push({ product: "바나나킥", quantity: 50, price: 1000 });
console.log("새로운 제품 추가:", inventory);

inventory.forEach((item) => {
  if (item.quantity > 0) {
    item.product = `(재고있음) ${item.product}`;
  }
});
console.log("재고가 있는 제품:", inventory);

