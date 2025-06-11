const studentList = [
    "Shoon Sandar Kyaw",
    "Thuya Myint",
    "Nay Zaw",
    "Kyaw Thura"
]
const salaries = [
    300000,
    400000,
    500000,
    600000
]


// for (const student of studentList) {
//     console.log(student + "@summit")
// }

//declare total variable to store total value for salary
let total = 0;
console.log(salaries)
console.log("when we want to give bonus 50000")
for (const salary of salaries) {
    console.log(salary + 50000)
    total += (salary + 50000)//add each salary to total and calculate total salaries
}
console.log("total salary - ", total)

// ---------------------------------------------------------------
// Console.log(arrayName) က arrayNameထဲမှာ ရှိတဲ့ ဒေတာ တွေ ကို output
// ထုတ်လို့ရတယ်
// ဒါပေမဲ့ အတွင်းက ဒေတာ တွေ ပြင်ပီး output ထုတ်ချင်တဲ့ အချိန် မှာ
// console.log နဲ့မရတော့ဘူးး
// For loop သုံးမှရတော့မယ်
// ဉပမာ။  လစာ array ရှိတယ် သူ့ထဲ က လစာတွေ ကို
// ဘောနပ် ၅၀၀၀၀ပေါင်းပေးပီး ထုတ်ပြချင်တယ်
// အဲ့ အတွက် for loop တကြိမ် run တိုင်း လစာ ကို ၅၀၀၀၀
// ပေါင်းပေးပီး ထုတ်မှ //အဆင်ပြေမယ်

// for loop syntax ------------------------------------------------
// for(const salary of salaries)
// salary ဆိုတဲ့ ထဲမှာ salaries ဆိုတဲ့ array တခါ looping ပတ်တိုင်း value
// တခုချင်းစီ store လုပ်တယ်

///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
///----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                 🔖🔖🔖🔖🔖🔖🔖🔖🔖

// For loop ကို ဘလိုနေရာ မှာသုံးလဲ ဆိုရင် ရှိတဲ့ array ကို
// output ထုတ်ချင်ရုံ သက်သက် မဟုတ်ဘဲနဲ့ တွက်ချက်မူ လုပ်ချင်တဲ့ အချိန်မှာ သုံးးတယ်
