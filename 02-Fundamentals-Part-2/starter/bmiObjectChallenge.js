let aragorn = {
    fullName: "King Elessar Telcontar",
    weight: 92,
    height: 1.95,
    calculateBodyMassIndex: function() {
        return this.weight / this.height ** 2
    }
  };
  let legolas = {
    fullName: "Legolas, son of Thranduil",
    weight: 78,
    height: 1.69,
    calculateBodyMassIndex: function() {
        return this.weight / this.height ** 2
    }
  };
  
  let aragornBmi = aragorn.calculateBodyMassIndex().toFixed(2)
  let legolasBmi = legolas.calculateBodyMassIndex().toFixed(2)

  console.log(`${aragorn.fullName}'s BMI (${aragornBmi}) is ${aragornBmi > legolasBmi ? "higher" : "lower"} than ${legolas.fullName}'s bmi (${legolasBmi})`);