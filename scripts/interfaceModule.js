import students from "./dataModule.js";

class TemplatePage {
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
    displayStudents(){
      let listingHtml = "";  
      listingHtml += "<ol>";
      students.forEach((students, index) =>{
          let itemColor = "";
          if(index % 2 === 0){
            itemColor = "itemBlue"
          }else{
            itemColor = "itemLightBlue";
          }
          listingHtml += `<li class="${itemColor}"> 
                            | Name: ${students.name} ${students.surname} 
                            | Birth: ${students.birth}
                            | RG: ${students.rg}
                            | CPF: ${students.cpf}
                            | [${students.gender}]
                            | Income: ${students.income}
                            | Margin: ${this.calculateMargin(0.3, students.income).toFixed(2)}
                         </li>`
      });
      listingHtml += "</ol>"
      return listingHtml;
    }
    calculateMargin(rate, income ){
        return (rate * income);
    }
    calcula
    displayGender(){
        let opitionHtml = "";
        const gender = students.map((students)=> students.gender);
        const genderOption = [... new Set(gender)];
        genderOption.forEach((genderOption) => {
            opitionHtml += `<option value="${genderOption}">
            ${genderOption.toLocaleUpperCase()}</option>`; 
        });
        return opitionHtml;
    }
    filterStudents(name){
        let filterHtml = "<ol>"
        const filterStudents = students.filter((students)=> students.name === name);
        filterStudents.forEach((filterStudents, index) => {
            let itemColor = "";
            if(index % 2 === 0){
              itemColor = "itemBlue"
            }else{
              itemColor = "itemLightBlue";
            }
            filterHtml += `<li class="${itemColor}"> 
                                | Name: ${filterStudents.name} ${filterStudents.surname} 
                                | Birth: ${filterStudents.birth}
                                | RG: ${filterStudents.rg}
                                | CPF: ${filterStudents.cpf}
                                | [${filterStudents.gender}]
                                | Income: ${filterStudents.income}
                                | Margin: ${this.calculateMargin(0.3, filterStudents.income).toFixed(2)}
                             </li>`
        });
        filterHtml += "</ol>"
        return filterHtml;
    }
    addStudent(
        name,
        surname, 
        birth, 
        rg, 
        cpf, 
        gender, 
        income, 
        addGender
        ){
        console.log(gender);
        let addStudentHtml = "<ol>";
        if(addGender !== ""){
            gender = addGender;
        }
        console.log(gender);
        students.splice(students.length, 0, {
                id: students.length + 1,
                name: name,
                surname: surname,
                birth: birth,
                rg: rg,
                cpf: cpf,
                gender: gender,
                income: income
            });
           
        students.forEach((students, index) => {
            let itemColor = "";
            if(index % 2 === 0){
                itemColor = "itemBlue"
            }else{
                itemColor = "itemLightBlue";
            }
            addStudentHtml += `<li class="${itemColor}"> 
                                | Name: ${students.name} ${students.surname} 
                                | Birth: ${students.birth}
                                | RG: ${students.rg}
                                | CPF: ${students.cpf}
                                | [${students.gender}]
                                | Income: ${students.income}
                                | Margin: ${this.calculateMargin(0.3, students.income).toFixed(2)}
                            </li>`
        });
        addStudentHtml += "</ol>"
        return addStudentHtml;
    }
    displayRecoveringStudents(){  
       let listingHtml = "<ol>";
       students.forEach((students) =>{
        let count = 0; 
        let average = (students.notes[count] + students.notes[count+1])/2;  
        let itemColor = "";
        if( average < 7){
            itemColor = "itemRed"
            listingHtml += `<li class="${itemColor}"> 
                            | Name: ${students.name} ${students.surname} 
                            | [${students.gender}]
                            | Average: ${average}
                         </li>`
        }
      });
      listingHtml += "</ol>"
      return listingHtml;
    }
}
const homePage = new TemplatePage("Projeto Sala Invertida", "");
export default homePage;