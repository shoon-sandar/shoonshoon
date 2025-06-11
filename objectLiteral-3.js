const correctStudentData = (studentData) => {

    console.log("wrong data", studentData)
    const { name, age, height } = studentData

    //to update wrong data
    const updatedData = {
        name,
        age: age + 7,
        height: height - 14
    }
    //corrected data
    console.log("Correct Data", updatedData)
}

const student1 = {
    name: "Shoon Shoon",
    age: 16,
    height: 72,
}
correctStudentData(student1)


//  🔖🔖🔖🔖🔖🔖🔖🔖🔖

// line နံပါတ် ၁ က correctStudentData ဆိုတဲ့ function ထဲကို လိုင်း နံပါတ် ၁၆
// မှာရှိတဲ့ student1ဆိုတဲ့ objectကို parameterပေးလိုက်ပီးတော့ လိုင်းနံပါတ်
// 22မှာ ခေါ်တယ်။

// student1 ဆိုတဲ့ object က correctStudentData ထဲကို ရောက်သွားပီ
// correctStudentData ဆိုတဲ့  function က studentData ဆိုတဲ့ variable name နဲ့
// parameter ပေးလိုက်တဲ့ student1ကို သိမ်းထားလိုက် တယ်

// ပီးရင် လိုင်းနံပါတ် ၇  မှာ parameter ပေးလိုက်တဲ့ data ထဲ က မှားနေတဲ့ဟာ ကို
// ပြင်ပီးတော့ updateData ဆိုတဲ့ object တစ်ခု ဆောက်လိုက်တယ်

// ပီးတော့ output ထုတ်လိုက်တယ်
// မှန်ကန်တဲ့ student Data ထွက်လာတယ်
