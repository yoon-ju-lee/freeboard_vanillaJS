let list=localStorage.getItem('postingList1');
let parsedList=JSON.parse(list);
let number=parsedList.length-1;
let number2=Math.ceil(number/10);
let number3;
let pageArray=[];
let replyArray=[];

init();

function init(){
    loadBoard();
    
    let replies=localStorage.getItem('replies');
    let parsedReplies=JSON.parse(replies);
    let temp=replyArray.concat(parsedReplies);
    replyArray=temp;
}


function loadBoard(){
    console.log(parsedList);
     
    let variable=number;
    let variable2=number-9;
    makeTable(variable, variable2);     
    makePageIndex();
}


function goToPage(pageNumber){
    document.body.innerHTML='';
    makeMenu();
   

    number3=number-10*pageNumber;  

    if(number3>9){
        let variable=number3;
        let variable2=number3-9;
        makeTable(variable,variable2);
        makePageIndex();
    }else{
        let variable=number3;
        let variable2=0;
        makeTable(variable,variable2);
        makePageIndex();
    }

    let div=document.createElement('div');
    div.style.marginTop='3vh';
    div.style.marginLeft='3vw';
    div.style.marginBottom='1vh';
    let writeButton=document.createElement('button');
    let writeButtonText=document.createTextNode('글쓰기');
    writeButton.appendChild(writeButtonText);
    writeButton.addEventListener('click', function(){
        location.href='write.html';
    });    
    div.appendChild(writeButton);
    document.body.appendChild(div);    

}




function clickPosting(index, title, content){
    document.body.innerHTML='';
    let table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.marginTop='3vh';
    table.style.marginLeft='2vw';
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

    reply();

    function reply(){
        replyInput();
    }




    function modifyPosting(){
        document.body.innerHTML='';
        let form=document.createElement('form');
        form.style.marginTop='3vh';
        form.style.marginLeft='2vw';
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
    if(window.innerWidth>600){
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

    }else{
        let div=document.createElement('div');
        div.setAttribute('id','trigger');
        div.textContent='MENU';
        document.body.appendChild(div);
    }
    
}



function moveToList(){
    location.href="board.html";
}



function moveToHome(){
    location.href='index.html';
}



function makeTable(variable, variable2){

    let table=document.createElement('table');
    table.style.border='1px solid black';
    table.style.marginTop='3vh';
    table.style.marginLeft='3vw';
    table.style.marginRight='3vw';
    let firstRow=document.createElement('tr');
    firstRow.style.textAlign='center';

    let index=document.createElement('td');
    let indexText=document.createTextNode('번호');
    index.style.border='1px solid black';
    index.appendChild(indexText);
    firstRow.appendChild(index);

    let title=document.createElement('td');
    let titleText=document.createTextNode('제목');
    title.style.border='1px solid black';
    title.appendChild(titleText);
    firstRow.appendChild(title);

    let date=document.createElement('td');
    let dateText=document.createTextNode('작성일');
    date.style.border='1px solid black';
    date.appendChild(dateText);
    firstRow.appendChild(date);
    
    table.appendChild(firstRow);


    for(let i=variable; i>=variable2; i--){
        let item=parsedList[i];
        let tr=document.createElement('tr');
        tr.style.border='1px solid black';
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
}



function makePageIndex(){
    let div=document.createElement('div');
    div.style.textAlign='center';
    div.style.marginTop='3vh';
    for(let i=0; i<number2; i++){
        let span=document.createElement('span');
        pageArray.push(i);
        span.innerHTML=` ${pageArray[i]+1} `;
        document.body.appendChild(span);
        span.onclick=function(){goToPage(i)};
        div.appendChild(span);
    } 
    document.body.appendChild(div);
}


function replyInput(){
    let replyForm=document.createElement('form');    
    let input=document.createElement('input');
    input.type='text';
    input.placeholder='댓글';
    replyForm.appendChild(input);

    let submitButton2=document.createElement('input');
    submitButton2.type='submit';
    replyForm.appendChild(submitButton2);
    document.body.appendChild(replyForm);
    replyForm.addEventListener('submit',submitReply);



}

function submitReply(e){
    e.preventDefault();
    let replyForm=e.target;
    let input2=replyForm.querySelector('input');
    let value=input2.value;
    console.log(value);
    let item={};
    item.content=value;
    replyArray.push(item);
    let key=replyArray.length-1;
    item.index=key;

    let stringifiedReplyArray=JSON.stringify(replyArray);
    localStorage.setItem('replies',stringifiedReplyArray);
    
    
    let div=document.createElement('div');
    let data=localStorage.getItem('replies');
    let parsedData=JSON.parse(data);
    div.innerHTML=parsedData[0].content;
    document.body.appendChild(div);

    input2.value='';
    
}