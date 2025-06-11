const array1to5 = [1, 2, 3, 4, 5]
const array6to10 = [6, 7, 8, 9, 10]

// (spread operator represented by ...)
// console.log(...array1to5 )=> 1,2,3,4,5
// console.log(array1to5)=> [1,2,3,4,5]
const array1to10 = [...array1to5, ...array6to10]
const array1to10new = [array1to5, array6to10]

// အပေါ်က code စာကြောင်းက ဘာအဓိပ္ပါယ် လဲ ဆိုတော့ array1to10 ထဲကို array1to5 ထဲက data နဲ့ array6to10 ထဲက data ကို ထည့်လိုက်တဲ့ သဘော ပါ
// အဲ့တော့ တခု သတိထားစရာ ရှိတာက array1to10 ထဲ က်ို
// ဘာလို့ ဒီလို
// const array1to10new = [array1to5, array6to10]
// တန်းထည့်လို့ မရတာလဲ ဆိုတော့ array1to10new ဆိုတာ က နဂို array ကြီးဖစ်နေပီးသား ကျန်တဲ့ array1to5 နဲ့ array6to10 ကလည်း array တွေ ဖစ်နေပီးသားမလို့ အဲ့လိုသာ ထည့်လိုက်မယ် ဆိုရင် မလို ချင် array ပုံစံ တွေ ထွက်လာလိမ့်မယ်။
console.log("without spread", array1to10new)
// ဘယ်လို ပုံစံလည်း ဆိုတော့
// [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]] ဒီလို နှစ်ထပ် array ကြီးထွက်လာ ပါလိမ့်မယ်။


// 🔖🔖🔖🔖🔖🔖🔖🔖🔖
// Spread operator ... နဲ့ သာ ရေးပီးထည့်မယ်ဆိုရင် လိုချင်တဲ့ array ပုံစံ ရပါလိမ့်မယ်။
console.log("with spread", array1to10)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//အဲ့တာက spread operator ရဲ့ ထူးခြားချက်ပါ


let arrayEven = [2, 4, 6, 8]
arrayEven = [...arrayEven, 10] // 2,4,6,8,10

console.log("array even - ", arrayEven)


//spread Object
console.log(`--------------------- Spread Operator ---------------------`)
const userData = {
    name: "Shoon Shoon",
    age: 23
}
const addressData = {
    address: "120th street, 57A"
}

const userAndAddressData = {
    ...userData,
    ...addressData
}

console.log("user and address data - ", userAndAddressData)
