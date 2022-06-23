//HW_3 /*Task 3**

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 1,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 2,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 21,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  

 // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
 //Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
 const ending = function (number) {
  if (number == 1 || number == 21) return `сотрудник`
  else if (number>1 && number<5) return `сотрудника`
  else  return `сотрудников`
  };

const department = function (arr) {
let company = [];
 arr.forEach((el) => {
  company.push(el.name);
  let index = company.indexOf(el.name);
   let em_count = 0;
        el.departments.forEach((dep) => {            
          em_count += dep.employees_count;
                if (dep.employees_count == 0) {
                  dep.employees_count = 'нет';
                  em_count = 'нет';
                }; 
          company.push(`- ${dep.name} (${dep.employees_count} ${ending(dep.employees_count)})`);

        });
        company.splice(index,1,`${el.name} (${em_count} сотрудников)`) 
 });
 for (i = 0; i < company.length; i++) { console.log(company[i]); }
};
department(enterprises);

 /* **RESULT**
Предприятие 1 (24 сотрудников)
- Отдел тестирования (1 сотрудник)
- Отдел маркетинга (2 сотрудника)
- Администрация (21 сотрудник)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
  **RESULT**/
  
//2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
  
const getEnterpriseName = function (num) {
  let map = new Map();

  enterprises.forEach((el) => {
    //map.set(el.id,el.name);
    el.departments.forEach((dep) => {
      map.set(dep.id, el.name);
      map.set(dep.name, el.name);
    });
  });

  if (map.has(num)) {
    console.log(num + " - "+map.get(num));
  } else {
    console.log(num + ` - Дурачок`);
  }
};

getEnterpriseName("Администрация");

/* **RESULT**
Администрация - Предприятие 1
**RESULT** */

//____________________________________________________________________________

const getEnterpriseByDepartment = function(val) {
  let enterprise
  enterprises.forEach(ent=> {
    let department
    if(ent.departments) { // если есть в орг департаменты
      department = ent.departments.find(dept => { return dept.id == val || dept.name == val}) // ищем либо в названии либо в айди в каждом элементе(обьект) массива
    }
    if(department) { // если результат поиска есть
      enterprise = ent; // сокращаем массив до одного элемента(обьекта) где найдена переменная 
    }
  })
  return enterprise ?  enterprise :  'Нет организации с таким отделом'   
}
console.log('==============================================')
console.log(getEnterpriseByDepartment(7))

/* **RESULT**
{
  id: 5,
  name: 'Предприятие 2',
  departments: [
    { id: 6, name: 'Отдел разработки', employees_count: 50 },
    { id: 7, name: 'Отдел маркетинга', employees_count: 20 },
    { id: 8, name: 'Отдел охраны труда', employees_count: 5 }
  ]
}
**RESULT** */

 // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
 const addEnterprise = function(depName,arrayIn) {
  
  let id = arrayIn[arrayIn.length-1].departments[arrayIn[arrayIn.length-1].departments.length-1].id;

  let all_id = [];
 
  arrayIn.forEach((el) => {
    all_id.push(el.id);
    el.departments.forEach((dep) => {
      all_id.push(dep.id);
    });
  });
  console.log(arrayIn[arrayIn.length-1])
  arrayIn.push(
    { id: id+1,
      name: depName,
      department:[]
    });
    console.log(all_id);
}
addEnterprise('Popki 9000',enterprises);

  


 // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
 addDepartment

  
 // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
  Пример:
  editEnterprise(1, "Новое название предприятия")
  
  
 /* 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  
  Пример:
  editDepartment(7, "Новое название отдела")
  
  
  7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
  Пример:
  deleteEnterprise(1)
  
  
  8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
  Пример:
  deleteDepartment(3)
  
  
  9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
  Пример:
  moveEmployees(2, 3)
  */
  