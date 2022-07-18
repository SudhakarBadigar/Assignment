let employees=[{id:101,ename:"Ram", esal:100000},
               {id:102,ename:"krishna",esal:200000},
               {id:103,ename:"hanuman",esal:75000}]

function display_emp(){
    let rows="";
    for(emp of employees){
        rows+=`<tr>
                    <td>${emp.id}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.esal}</td>
               </tr>`
    }
    document.getElementById('tab_body').innerHTML= rows
}