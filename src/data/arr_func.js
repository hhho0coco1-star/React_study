console.log("js_arr");

let arr = [10, 20, 30, 40];

// js function
// 1) map

arr.map(()=> { // arr 의 요소들 접근 반복실행하면서 return 가능
    console.log("arr map"); 
});

arr.forEach((value)=> {
    // console.log(value);
    console.log("arr forEach"); 
});

arr.map((item, index)=> {
    console.log("arr map item : " + item + " index : " + index); 
})

let result01 = arr.map(()=> {
    return 99; // 배열 99 대입
});
console.log(result01);

let result02 = arr.map((item)=> {
    return item + 100;
});
console.log(result02);

let menuArr = ["우동", "라면", "김밥"];

// ()=> { return data; }
// 특징 : ()=> data
let result05 = menuArr.map((menu)=> "<p>" + menu + "</p>");
console.log(result05);

// filter
// 실행결과가 참만 return
arr = [10, 20, 30, 40];

let result07 = arr.filter((value)=> {
    return true;
})
console.log(result07);

let result08 = arr.filter((value)=> {
    return value > 10;
})
console.log(result08);

let result09 = arr.filter((value)=> {
    return value != 30;
})
console.log(result09);

// find
// findIndex

let result10 = arr.find((value) => value==20);
console.log(result10);

let result11 = arr.findIndex((value)=> {
    return value == 30;
});
console.log(result11);

let arr2 = [10, 20, 30];
console.log(arr[2]);

let [n1, n2, n3] = [77, 88, 99];
console.log(n1, n2, n3);

let [num, setNum] = [77, 88];

let obj01 = {
    num01: 30,
    num02: 50
};

let obj2 = obj01;
console.log(obj2.num01);

let {num01, num02} = obj01;
console.log(num01, num02);


