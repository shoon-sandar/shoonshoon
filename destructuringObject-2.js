const shoonsandarkyaw = {
    name: "Shoon Sandar Kyaw",
    age: 23,
    address: '120th street, 57A Pyi Gyi Ta Gon'
}
//ပုံမှန် output
console.log("name - ", shoonsandarkyaw.name)
console.log("age - ", shoonsandarkyaw.age)
console.log("age - ", shoonsandarkyaw.address)
console.log("------------------------------------------------")


// destructuring Object 🔥
// Desturcturing မှာ ဆိုရင် ညီမျှခြင်းရဲ့ ဘယ်ဘက်ရဲ့
// အတွန့်ကွင်းထဲမှာ destructure လုပ်ချင်တဲ့ key ကို ထည့်
//ညာဘက်မှာ object name ဒါမှမဟုတ် destructure လုပ်ခံရမဲ့ variable name
// တခုနဲ့ အထက်ဆ်ိုရင် ',' ခံပြီး ထည့်လို့ရတယ်။
// သတိထားရမဲ့ အချက် အဲ့ object ထဲမှာ မရှိတဲ့ key ကို //destructure လုပ်လို့ မရဘူး လုပ်ခဲ့ရင် error တက်မယ်
const { name, age, address } = shoonsandarkyaw //✅
// const { name, age, address, height } = shoonsandarkyaw //❌


console.log("name - ", name)
console.log("age - ", age)
console.log("age - ", address)



//               🔖🔖🔖🔖🔖🔖🔖🔖🔖
//Destructuring object ကို object ထဲ က value ကို object name.key နဲ့ ခေါ်သုံးရရင် ရေးရမှာ များနိုင်တဲ့ အတွက်ကြောင့် destructure လုပ်ရပါတယ်
