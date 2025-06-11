const add = (nums) => {
    console.log(...nums)
    const total = nums.reduce((x, y) => x + y);
    console.log("Total - ", total)

}
const outputFunction = (name) => console.log(`My name is ${name}`)

const array = [1, 2, 3, 4, 5]

add(array)

outputFunction("Shoon Shoon")

// Reduce function က array တွေမှာ သုံးပါတယ်
// သူ့ရဲ့ ရည်ရွယ်ချက် က total ပေါ့ ပေးလိုက်တဲ့ array ထဲက total value တခုခုကို လိုချင်တဲ့ အချိန်မှာ သုံးပါတယ်

// သူ့ရဲ့ syntax ကိုကြည့်မယ် ဆိုရင်
// const total = nums.reduce((x, y) => x + y);
// xထဲမှာ ဆိုရင် total value ကို သိမ်း y ထဲ မှာ လက်ရှိ looping ရောက်နေတဲ့ current value ကို သိမ်းထားပီး x value ထဲ ကသွားသွားပေါင်းပါတယ်။ ဒါကတော့ အလုပ်လုပ်တဲ့ ပုံစံပါ
