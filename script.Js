function calculate(){
    let personName = document.getElementById("name").value;
    let weightKg = parseFloat(document.getElementById("weight").value);
    let heightM =parseFloat(document.getElementById("height").value);
    let resultArea = document.getElementById("result")

    if(personName = "" || isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM<=0){
        resultArea.innerHTML = "please enter a valid name, weightkg, heightM";
        return;
    }

    console.log("personName",personName)

   let hightSqured = (heightM * heightM)

   let bmi = weightKg /  hightSqured 
     console.log("bmi", bmi.toFixed(2))

    let isUderweight = (bmi < 18.5)
   console.log("isUderweight",isUderweight);

    let isNormalWeight = (bmi >= 18.5 && bmi < 25)
    console.log("isNormalWeight",isNormalWeight);
    

    let isOverweight = (bmi >= 25)
   console.log("isOverweight",isOverweight);


    let isHighRisk = (isOverweight || weightKg > 90)
    console.log("High Risk Alert",isHighRisk)

    let result = `
    Name: ${personName} <br>
    bmi: ${bmi.toFixed(2)} <br>
    isUderweight: ${isUderweight} <br>
    isNormalWeight: ${isNormalWeight } <br>
    isOverweight: ${isOverweight} <br>
    isHighRisk: ${isHighRisk}<br>
    `;

    resultArea.innerHTML = result

}
