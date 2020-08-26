init();

function init(){
    makeTable();
}

function makeTable(){
    let table=document.createElement('div');

    for(let i=0; i<2; i++){
        let tr=document.createElement('tr');
        tr.style.border='1px dotted black';
        tr.style.height='30px';
        tr.style.marginLeft='150px';
        table.appendChild(tr);

        for(let j=0; j<3; j++){
            let td=document.createElement('td');
            td.style.border='1px dotted black';
            td.style.width='200px';
            tr.appendChild(td);
        }
    }
    document.body.appendChild(table);

    getList(table);
}

function getList(table){
    let list=localStorage.getItem('postingList1');
    let parsedList=JSON.parse(list);
    let item=parsedList[0]; 
    //console.log(item);  

    //parsedList.map( )
    let xkey=item.index+1;
    let xtitle=item.title;
    let xcontent=item.content; 
    
    let firstColumn=table.firstChild.firstChild;
    let secondColumn=table.firstChild.firstChild.nextSibling;
    let thirdColumn= secondColumn.nextSibling;
    
    firstColumn.innerHTML=xkey;
    secondColumn.innerHTML=xtitle;
    thirdColumn.innerHTML=xcontent;

}