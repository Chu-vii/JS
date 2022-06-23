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
    return (num + " - "+map.get(num));
  } else {
    return (num + ` - Дурачок`);
  }
};
console.log('==============================================')
console.log(getEnterpriseName("Администрация"));

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
  
 const idCount = function (arrayIn) {

  let all_id = [];
    arrayIn.forEach((el) => {
    all_id.push(el.id);
    el.departments.forEach((dep) => {
      all_id.push(dep.id);
    });
  });
return all_id
};

 const addEnterprise = function (entName, arrayIn) {
  // let id = arrayIn[arrayIn.length - 1].departments[arrayIn[arrayIn.length - 1].departments.length - 1].id;

   arrayIn.push({ 
     id: Math.max(...idCount(arrayIn)) + 1, 
     name: entName, 
     departments: [] });
 
   return (arrayIn[arrayIn.length - 1]);
 };
 console.log('==============================================')
 console.log(addEnterprise("BEST", enterprises));

 /* **RESULT**
 { id: 11, name: 'BEST', departments: [] }
**RESULT** */

 // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
 
 const addDepartment = function (id,depName,arrayIn) {

  let ent_id = new Map();
    for (let a = 0; a < arrayIn.length; a++){
      ent_id.set(arrayIn[a].id,a);
     }
    
    if (!ent_id.has(id)) return 'Wrong Enterprise id';
    else {

    
      arrayIn[ent_id.get(id)].departments.push(
        {
          id: Math.max(...idCount(arrayIn)) + 1,
          name: depName,
          employees_count: '',
        })}
    
    return arrayIn[ent_id.get(id)];
};
console.log('==============================================')
console.log(addDepartment(5,"Dep new",enterprises));

/* **RESULT**
{
  id: 5,
  name: 'Предприятие 2',
  departments: [
    { id: 6, name: 'Отдел разработки', employees_count: 50 },
    { id: 7, name: 'Отдел маркетинга', employees_count: 20 },
    { id: 8, name: 'Отдел охраны труда', employees_count: 5 },
    { id: 12, name: 'Dep new', employees_count: '' }
  ]
}
**RESULT** */

 // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
 const editEnterprise = function (id,EntNewName,arrayIn) {

  let ent_id = new Map();
  for (let a = 0; a < arrayIn.length; a++){
    ent_id.set(arrayIn[a].id,a); };
    
  if (!ent_id.has(id)) { 
    return 'Wrong Enterprise id'; }
  else {
      arrayIn[ent_id.get(id)].name = EntNewName ;

    return arrayIn[ent_id.get(id)];
  }
 }
 console.log('==============================================')
 console.log(editEnterprise(5,'NEW NAME Ent',enterprises));

/* **RESULT**
 {
  id: 5,
  name: 'NEW NAME Ent',
  departments: [
    { id: 6, name: 'Отдел разработки', employees_count: 50 },
    { id: 7, name: 'Отдел маркетинга', employees_count: 20 },
    { id: 8, name: 'Отдел охраны труда', employees_count: 5 },
    { id: 12, name: 'Dep new', employees_count: '' }
  ]
}
**RESULT** */ 

 //6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

 const editDepartment = function (id,depNewName,arrayIn) {

  let dep_id = new Map();
  let dep_id_s = new Map();

  for (let b = 0; b < arrayIn.length; b++) {

    for (let a = 0; a < arrayIn[b].departments.length; a++){ 
       dep_id.set(arrayIn[b].departments[a].id, b); 
       dep_id_s.set(arrayIn[b].departments[a].id, a);     
     };
  }

  if (!dep_id.has(id)) { 
    return 'Wrong Department id'; }
  else {
   arrayIn[dep_id.get(id)].departments[dep_id_s.get(id)].name = depNewName;
  }
  return arrayIn[dep_id.get(id)].departments[dep_id_s.get(id)]
 }
 console.log('==============================================')
 console.log(editDepartment(8,'NEW NAME',enterprises));
  
  
 //7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
 const deleteEnterprise = function (id,EntNewName,arrayIn) {

  let ent_id = new Map();
  for (let a = 0; a < arrayIn.length; a++){
    ent_id.set(arrayIn[a].id,a); };
    
  if (!ent_id.has(id)) { 
    return 'Wrong Enterprise id'; }
  else {
    //console.log(ent_id.get(id));

     arrayIn.splice([ent_id.get(id)],1);

    return arrayIn;
  }
 }
 console.log('==============================================')
 console.log(deleteEnterprise(9,'NEW NAME Ent',enterprises));

 /* **RESULT**
 [
  {
    id: 1,
    name: 'Предприятие 1',
    departments: [ [Object], [Object], [Object] ]
  },
  {
    id: 5,
    name: 'NEW NAME Ent',
    departments: [ [Object], [Object], [Object], [Object] ]
  },
  { id: 11, name: 'BEST', departments: [] }
]
**RESULT** */
  
  
   /*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
  Пример:
  deleteDepartment(3)
  
  
  9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  
  Пример:
  moveEmployees(2, 3)
  */
  