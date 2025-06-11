const addTwoNumber = (num1 = 1, num2 = 1) => {
    let total = num1 + num2
    console.log(total)
    console.log(total + 10)
}
// addTwoNumber()

const reduce = (arr1 = [0]) => {
    console.log(typeof arr1)
    for (num of arr1) {
        console.log(num)
    }
    // console.log(arr1.reduce((x, y) => x + y))
}
const array1 = [1, 2, 3, 4, 5]

console.log(Array.isArray(array1))
reduce(array1)


//Default params ဆိုတာက function တခု မှာ သတ်မှတ်ထားတဲ့ parameterတခုက တန်ဖိုး မရှိရင်တောင် ဆက် မှန်မှန် ကန်ကန် အလုပ်လုပ်ဖို့လိုတာကြောင့် default value တခု parameter ကို သတ်မှတ်ပေးလိုက်ချင်းဖစ်တယ်
//const addTwoNumber = (num1 = 1, num2 = 1) => {
//  let total = num1 + num2
//  console.log(total)
//  console.log(total + 10)
//}ဒီမှာ ဆိုရင် အကယ်၍ default မပေးလိုက်ရင် totalမှာ NaN(not a number) ဆိုတဲ့ စာဘဲထွက်မယ်

//အဲ့တာဆိုရင် function တခုကို parameter ပေးလိုက်တယ် ဆိုရင် default valueက မယူတော့ဘဲ ပေးလိုက်တဲ့ ကောင်ကိုဘဲ ထည့်run သွားမှာပါ

//အကျဉ်းချုပ် ပြောရရင် default params ဆိုတာက parameters ပေးဖို့ လိုတဲ့ function တခုကို မပေးခဲ့ရင် အဲ့default value ကိုထည့်သုံးး ဆိုတဲ့ အဓိပ္ပါယ်ပါ
