//let table=document.createElement('table');
//table.style.border='1px solid black';
let list=localStorage.getItem('postingList1');
let parsedList=JSON.parse(list);
let number=parsedList.length-1;
let number2=Math.ceil(number/10);
let number3;
let arr=[];


init();

function init(){
    makeTable();
}


function makeTable(){
    let table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.marginLeft='5vw';
    table.style.marginRight='5vw';
    console.log(parsedList);

    makeFirstRow();
   
        for(let i=number; i>number-10; i--){
            let item=parsedList[i];
            let tr=document.createElement('tr');
            tr.style.border='1px solid black';
            //tr.style.height='25px';
            //tr.style.marginLeft='150px'; 
            tr.style.textAlign='center';
    
                let td=document.createElement('td');
                td.style.border='1px solid black';
                td.style.width='10vw';
                td.textContent=item.index+1;
                tr.appendChild(td); 
    
                let td2=document.createElement('td');
                td2.style.border='1px solid black';
                td2.style.width='60vw';
                td2.textContent=item.title;
                td2.onclick=function(){clickPosting(item.index, item.title, item.content)};
                tr.appendChild(td2);            
    
                let td3=document.createElement('td');
                td3.style.border='1px solid black';
                td3.style.width='40vw';
                td3.textContent=item.date;
                tr.appendChild(td3);
                table.appendChild(tr);
        }
    
    document.body.appendChild(table);

    
    for(let i=0; i<number2; i++){
        let span=document.createElement('span');
        arr.push(i);
        span.innerHTML=` ${arr[i]+1} `;
        span.style.textAlign='center';
        document.body.appendChild(span);
        span.onclick=function(){goToPage(i)};
    } 
    

}





function goToPage(pageNumber){
    document.body.innerHTML='';

    makeMenu();
    makeFirstRow();

    let table2=document.createElement('table');

    number3=number-10*pageNumber;

    if(number3>10){
        for(let i=number3; i>number3-10; i--){
            let list=localStorage.getItem('postingList1');
            let parsedList=JSON.parse(list);
            let item=parsedList[i];
            let tr=document.createElement('tr');
            tr.style.border='1px solid black';
            tr.style.height='25px';
            tr.style.marginLeft='150px'; 
            tr.style.textAlign='center';
    
                let td=document.createElement('td');
                td.style.border='1px solid black';
                td.style.width='40px';
                td.textContent=item.index+1;
                tr.appendChild(td); 
    
                let td2=document.createElement('td');
                td2.style.border='1px solid black';
                td2.style.width='250px';
                td2.textContent=item.title;
                td2.onclick=function(){clickPosting(item.index, item.title, item.content)};
                tr.appendChild(td2);            
    
                let td3=document.createElement('td');
                td3.style.border='1px solid black';
                td3.style.width='200px';
                td3.textContent=item.date;
                tr.appendChild(td3);
                table2.appendChild(tr);
        }
    
        document.body.appendChild(table2);
    }else{
        for(let i=number3; i>=0; i--){
            let list=localStorage.getItem('postingList1');
            let parsedList=JSON.parse(list);
            let item=parsedList[i];
            let tr=document.createElement('tr');
            tr.style.border='1px solid black';
            tr.style.height='25px';
            tr.style.marginLeft='150px'; 
            tr.style.textAlign='center';
    
                let td=document.createElement('td');
                td.style.border='1px solid black';
                td.style.width='40px';
                td.textContent=item.index+1;
                tr.appendChild(td); 
    
                let td2=document.createElement('td');
                td2.style.border='1px solid black';
                td2.style.width='250px';
                td2.textContent=item.title;
                td2.onclick=function(){clickPosting(item.index, item.title, item.content)};
                tr.appendChild(td2);            
    
                let td3=document.createElement('td');
                td3.style.border='1px solid black';
                td3.style.width='200px';
                td3.textContent=item.date;
                tr.appendChild(td3);
                table2.appendChild(tr);
        }
    
        document.body.appendChild(table2); 
    }

    
    for(let i=0; i<number2; i++){
        let span=document.createElement('span');
        arr.push(i);
        span.innerHTML=` ${arr[i]+1} `;
        span.style.textAlign='center';
        document.body.appendChild(span);
        span.onclick=function(){goToPage(i)};
    } 
        
}




function clickPosting(index, title, content){
    document.body.innerHTML='';
    let table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.width='350px';
    let tr2=document.createElement('tr');
    tr2.textContent=title;
    tr2.style.border='1px solid black';    
    table.appendChild(tr2);

    let tr3=document.createElement('tr');
    tr3.textContent=content;
    tr3.style.border='1px solid black';
    table.appendChild(tr3);
    document.body.appendChild(table);


    let listButton=document.createElement('button');
    document.body.appendChild(listButton);
    let listText=document.createTextNode('목록');
    listButton.appendChild(listText);
    listButton.style.marginTop='100px';
    listButton.setAttribute('class','buttons');
    listButton.addEventListener('click', moveToList);

    let modifyButton=document.createElement('button');
    document.body.appendChild(modifyButton);
    let modifyText=document.createTextNode('수정');
    modifyButton.appendChild(modifyText);
    modifyButton.setAttribute('class','buttons');
    modifyButton.addEventListener('click', modifyPosting);

    let deleteButton=document.createElement('button');
    document.body.appendChild(deleteButton);
    let deleteText=document.createTextNode('삭제');
    deleteButton.appendChild(deleteText);
    deleteButton.setAttribute('class','buttons');
    deleteButton.addEventListener('click', erasePosting);




    function modifyPosting(){
        document.body.innerHTML='';
        let form=document.createElement('form');
        let titleInput=document.createElement('input');
        titleInput.type='text';
        titleInput.setAttribute('id','titleInput2');
        titleInput.setAttribute('value',title);        
        form.appendChild(titleInput);

        let contentInput=document.createElement('input');
        contentInput.type='text';
        contentInput.setAttribute('id','contentInput2');
        contentInput.setAttribute('value',content);
        form.appendChild(contentInput);

        let submitButton=document.createElement('input');
        submitButton.type='submit';
        form.appendChild(submitButton);
        document.body.appendChild(form);
        form.addEventListener('submit', editPosting);


        function editPosting(e){
            let newTitle=form.querySelector('#titleInput2');
            let newContent=form.querySelector('#contentInput2');
            if(title!==e.target.value && content===e.target.value){
                newTitle.setAttribute('value', title);
                newContent.setAttribute('value', e.target.value);
            }else if(title===e.target.value && content!==e.target.value){
                newTitle.setAttribute('value', e.target.value);
                newContent.setAttribute('value', content);
            }else if(title!==e.target.value && content!==e.target.value){
                newTitle.setAttribute('value',title);
                newContent.setAttribute('value',content);
            }else if(title===e.target.value && content===e.target.value){
                newTitle.setAttribute('value', e.target.value);
                newContent.setAttribute('value', e.target.value);
            }
            
            //let list=localStorage.getItem('postingList1');
            //let parsedList=JSON.parse(list);
            parsedList[index].title=newTitle.value;
            parsedList[index].content=newContent.value;
            let stringfiedArray=JSON.stringify(parsedList);
            localStorage.setItem('postingList1', stringfiedArray);
            location.href='board.html';
        }
    }


    function erasePosting(){        
        //let list=localStorage.getItem('postingList1');
        //let parsedList=JSON.parse(list);
        parsedList.splice(index,1);
        for(let i=0; i<parsedList.length; i++){
            temp=i;
            parsedList[i].index=temp;
        }
        let stringfiedArray=JSON.stringify(parsedList);
        localStorage.setItem('postingList1', stringfiedArray);
        location.href="board.html";
    }
}



////////



function makeMenu(){
    let nav=document.createElement('nav');
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    let liText=document.createTextNode('HOME');
    li.appendChild(liText);
    li.addEventListener('click', moveToHome);
    ul.appendChild(li);


    let li2=document.createElement('li');
    let li2Text=document.createTextNode('BOARD');
    li2.appendChild(li2Text);
    li2.addEventListener('click', moveToList);
    ul.appendChild(li2);

    let li3=document.createElement('li');
    let li3Text=document.createTextNode('GUESTBOOK');
    li3.appendChild(li3Text);
    let link3=document.createElement('a');
    link3.setAttribute('href', '#');
    link3.setAttribute('title','#');
    li3.appendChild(link3);
    ul.appendChild(li3);
    
    nav.appendChild(ul);
    document.body.appendChild(nav);

}


function makeFirstRow(){
    let table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.marginLeft='5vw';
    table.style.marginRight='5vw';
    let firstRow=document.createElement('tr');
    firstRow.style.textAlign='center';
    firstRow.style.border='1px solid black';

    let index=document.createElement('td');
    let indexText=document.createTextNode('번호');
    index.style.border='1px solid black';
    index.style.width='10vw';
    index.appendChild(indexText);
    firstRow.appendChild(index);

    let title=document.createElement('td');
    let titleText=document.createTextNode('제목');
    title.style.border='1px solid black';
    title.style.width='60vw';
    title.appendChild(titleText);
    firstRow.appendChild(title);

    let date=document.createElement('td');
    let dateText=document.createTextNode('작성일');
    date.style.border='1px solid black';
    date.style.width='40vw';
    date.appendChild(dateText);
    firstRow.appendChild(date);
    
    table.appendChild(firstRow);
    document.body.appendChild(table);
}





function moveToList(){
    location.href="board.html";
}



function moveToHome(){
    location.href='index.html';
}