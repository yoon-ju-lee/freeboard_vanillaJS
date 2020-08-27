init();

function init(){
    makeTable();
}

function makeTable(){
    let table=document.createElement('div');
    let list=localStorage.getItem('postingList1');
    let parsedList=JSON.parse(list);
    let number=parsedList.length;
    console.log(parsedList);

    for(let i=0; i<number; i++){
        let item=parsedList[i];
        let tr=document.createElement('tr');
        tr.style.border='1px dotted black';
        tr.style.height='25px';
        tr.style.marginLeft='150px'; 
        tr.style.textAlign='center';



            let td=document.createElement('td');
            td.style.border='1px dotted black';
            td.style.width='30px';
            td.textContent=item.index+1;
            tr.appendChild(td);

            let number=item.index+1;

            // for(let i=0; i<parsedList.length; i++){
            //     let file=
            // }    

            let td2=document.createElement('td');
            td2.style.border='1px dotted black';
            td2.style.width='250px';
            //td2.textContent=item.title;

            let alink=document.createElement('a');
            alink.href=`${item.index}.html`;
            alink.title='move';
            //alink.style.color='black';
            alink.style.textDecoration='none';
            alink.textContent=item.title;
            td2.appendChild(alink);

            tr.appendChild(td2);

            

            let td3=document.createElement('td');
            td3.style.border='1px dotted black';
            td3.style.width='250px';
            td3.textContent=item.content;
            tr.appendChild(td3);
            table.appendChild(tr);
    }
    document.body.appendChild(table);
}


function clickPosting(){

    //location.href=
}
