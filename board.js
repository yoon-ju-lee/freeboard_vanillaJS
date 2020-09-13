let list=localStorage.getItem('postingList');
let parsedList=JSON.parse(list);
let number=parsedList.length-1;
let number2=Math.ceil(number/10);
let number3;
let pageArray=[];


init();


function init(){
    loadBoard();
}




function loadBoard(){  
 
    let variable=number;
    let variable2;
    if(variable>10){
        variable2=number-9;
    }else{
        variable2=0;
    }

    makeTable(variable, variable2);     
    makePageIndex();
}



function makePageIndex(){
    let div=document.createElement('div');
    div.style.textAlign='center';
    div.style.marginTop='2vh';
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
    div.style.marginTop='2vh';
    div.style.marginLeft='5vw';
    div.style.marginBottom='1vh';
    let writeButton=document.createElement('button');
    let writeButtonText=document.createTextNode('글쓰기');
    writeButton.appendChild(writeButtonText);
    writeButton.setAttribute('class','btn');
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
    table.style.marginLeft='5vw';
    table.style.width='90vw';
    let tr2=document.createElement('tr');
    tr2.textContent=title;
    tr2.style.border='1px solid black';   
    table.appendChild(tr2);

    let tr3=document.createElement('tr');
    tr3.textContent=content;
    tr3.style.border='1px solid black';
    tr3.style.height='30vh';
    table.appendChild(tr3);
    document.body.appendChild(table);


    let listButton=document.createElement('button');
    document.body.appendChild(listButton);
    let listText=document.createTextNode('목록');
    listButton.appendChild(listText);
    listButton.style.marginTop='3vh';
    listButton.style.marginLeft='5vw';
    listButton.setAttribute('class','btn');
    listButton.addEventListener('click', moveToList);

    let modifyButton=document.createElement('button');
    document.body.appendChild(modifyButton);
    let modifyText=document.createTextNode('수정');
    modifyButton.appendChild(modifyText);
    modifyButton.setAttribute('class','btn');
    modifyButton.addEventListener('click', modifyPosting);

    let deleteButton=document.createElement('button');
    document.body.appendChild(deleteButton);
    let deleteText=document.createTextNode('삭제');
    deleteButton.appendChild(deleteText);
    deleteButton.setAttribute('class','btn');
    deleteButton.addEventListener('click', erasePosting);


    replyInput(index);  
    reply(index);
    
    


    function modifyPosting(){
        document.body.innerHTML='';
        let form=document.createElement('form');
        form.style.marginTop='3vh';
        form.style.marginLeft='5vw';
        form.style.width='90vw';
        let titleInput=document.createElement('input');
        titleInput.type='text';
        titleInput.setAttribute('id','titleInput2');
        titleInput.setAttribute('value',title);  
        titleInput.style.width='90vw';      
        form.appendChild(titleInput);
        let br=document.createElement('br');
        form.appendChild(br);
        let contentInput=document.createElement('input');
        contentInput.type='text';
        contentInput.setAttribute('id','contentInput2');
        contentInput.setAttribute('value',content);
        contentInput.style.width='90vw';
        contentInput.style.height='50vh';
        form.appendChild(contentInput);
        let br2=document.createElement('br');
        form.appendChild(br2);
        let submitButton=document.createElement('input');
        submitButton.type='submit';
        submitButton.style.marginTop='3vh';
        submitButton.setAttribute('class','btn');
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
            
            parsedList[index].title=newTitle.value;
            parsedList[index].content=newContent.value;
            let stringfiedArray=JSON.stringify(parsedList);
            localStorage.setItem('postingList', stringfiedArray);
            location.href='board.html';
        }
    }


        function erasePosting(){        
            parsedList.splice(index,1);
            for(let i=0; i<parsedList.length; i++){
                temp=i;
                parsedList[i].index=temp;
            }
            let stringfiedArray=JSON.stringify(parsedList);
            localStorage.setItem('postingList', stringfiedArray);
            location.href="board.html";
        }
}





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
        
        nav.appendChild(ul);
        document.body.appendChild(nav);

    }else{
        let nav=document.createElement('nav');
        let ul=document.createElement('ul');
        let li=document.createElement('li');
        let liText=document.createTextNode('HOME');
        li.appendChild(liText);
        li.style.lineHeight='50px';
        li.style.width='100%';
        li.addEventListener('click', moveToHome);
        ul.appendChild(li);

        let li2=document.createElement('li');
        let li2Text=document.createTextNode('BOARD');
        li2.appendChild(li2Text);
        li2.style.lineHeight='50px';
        li2.addEventListener('click', moveToList);
        ul.appendChild(li2);

        nav.appendChild(ul);

        let a=document.createElement('a');
        a.setAttribute('id','trigger');
        a.textContent='MENU';
        a.style.color='white';
        nav.appendChild(a);
        document.body.appendChild(nav);


        $(function(){
            var trigger=$('#trigger');
            var menu=$('nav ul');
            $(trigger).on('click',function(e){
                e.preventDefault();
                menu.slideToggle();
            });
            $(window).resize(function(){
                var w=$(window).width();
                if(w>320 && menu.is(':hidden')){
                    menu.removeAttr('style');
                }
            })
        })
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
    table.style.marginTop='3vh';
    table.style.marginLeft='5vw';
    table.style.marginRight='5vw';

    let firstRow=document.createElement('tr');
    firstRow.style.textAlign='center';
    firstRow.style.backgroundColor='#e3e3e3';
    
    let index=document.createElement('td');
    let indexText=document.createTextNode('번호');
    index.appendChild(indexText);
    index.style.width='15vw';
    index.style.paddingTop='1.5vh';
    index.style.paddingBottom='1.5vh';
    index.style.border='1px #e3e3e3 solid';
    firstRow.appendChild(index);

    let title=document.createElement('td');
    let titleText=document.createTextNode('제목');
    title.appendChild(titleText);
    title.style.border='1px #e3e3e3 solid';
    title.style.width='60vw';
    firstRow.appendChild(title);

    let date=document.createElement('td');
    let dateText=document.createTextNode('작성일');
    date.appendChild(dateText);
    date.style.width='50vw';
    date.style.border='1px #e3e3e3 solid';
    firstRow.appendChild(date);
    
    table.appendChild(firstRow);


    for(let i=variable; i>=variable2; i--){
        let item=parsedList[i];
        let tr=document.createElement('tr');
        tr.style.textAlign='center';
        tr.style.paddiing='2vh';
        if(i%2===0){
            tr.style.backgroundColor='white';
        }else{
            tr.style.backgroundColor='#f7f5f5';
        }
            let td=document.createElement('td');
            td.style.width='15vw';
            td.textContent=item.index+1;
            td.style.paddingTop='1.5vh';
            td.style.paddingBottom='1.5vh';
            tr.appendChild(td); 

            let td2=document.createElement('td');
            td2.style.width='60vw';
            td2.textContent=item.title;
            td2.onclick=function(){clickPosting(item.index, item.title, item.content)};
            tr.appendChild(td2);            

            let td3=document.createElement('td');
            td3.style.width='50vw';
            td3.textContent=item.date;
            tr.appendChild(td3);
            table.appendChild(tr);
    }

    document.body.appendChild(table);
}






function reply(index){
    
    if(parsedList[index].replies!==undefined){
        let reply=parsedList[index].replies;
    

        for(let i=0; i<reply.length; i++){        
              
            let div=document.createElement('div');
            let data=localStorage.getItem('postingList');
            let parsedData=JSON.parse(data);
            div.innerHTML=parsedData[index].replies[i].content;
            div.style.marginLeft='5vw';
            div.style.marginTop='0.5vh';
            document.body.appendChild(div);  
                     
        } 
    }
} 





function replyInput(index){
    let replyArray=[];
    let replyForm=document.createElement('form');    
    let input=document.createElement('input');
    input.type='text';
    input.placeholder='댓글';
    input.style.marginTop='3vh';
    input.style.marginLeft='5vw';
    input.style.marginRight='2vw';
    input.style.width='30vw';
    replyForm.appendChild(input);
    let submitButton2=document.createElement('input');
    submitButton2.type='submit';
    submitButton2.setAttribute('class','replybtn');
    replyForm.appendChild(submitButton2);
    document.body.appendChild(replyForm);
    replyForm.addEventListener('submit',submitReply);


    function submitReply(e){
        e.preventDefault();
        let replyForm=e.target;
        let input2=replyForm.querySelector('input');
        let value=input2.value;
        console.log(value);

        let item={};
        item.content=value;
        replyArray.push(item);

        if(parsedList[index].replies!==undefined){
            let repliesArray=parsedList[index].replies;
            let temp=repliesArray.concat(replyArray);
            parsedList[index].replies=temp;
            let key=temp.length-1;
            item.key=key;
        }else{
            let key=replyArray.length-1;
            item.key=key;
            parsedList[index].replies=replyArray;
            
        }
        

        let stringifiedArray=JSON.stringify(parsedList);
        localStorage.setItem('postingList',stringifiedArray);

        
        input2.value='';
        
        let div=document.createElement('div');
        div.textContent=item.content;
        div.style.marginLeft='5vw';
        div.style.marginTop='0.5vh';
        document.body.appendChild(div);
    }

}

