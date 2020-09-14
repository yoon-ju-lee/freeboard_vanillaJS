let array=[];
let index;

init();

function init(){
    
    let list=localStorage.getItem('postings');
    let parsedList=JSON.parse(list);
    if(parsedList!==null){
        let newList=array.concat(parsedList);
        array=newList;
    }
    
}


const form=document.querySelector('.formArea');
form.addEventListener("submit",submitForm);

function submitForm(event){
    event.preventDefault();
    let form=event.target;

    let title=form.querySelector('#title');
    let getTitle=title.value;
    
    let content=form.querySelector("#content");
    let getContent=content.value;
  
    let writingDate=new Date();
    let year=writingDate.getFullYear();
    let month=writingDate.getMonth()+1;
    let day=writingDate.getDate();
    let formattedDate=`${year}년 ${month}월 ${day}일`;

    let item={};
    item.title=getTitle;
    item.content=getContent;
    item.date=formattedDate;
    array.push(item);
    let key=array.length-1;
    item.index=key;

    let stringfiedArray=JSON.stringify(array);
    localStorage.setItem('postings', stringfiedArray);
    

    showPosting();
}


function showPosting(){
    document.body.innerHTML='';
    let list=localStorage.getItem('postings');
    let parsedList=JSON.parse(list);
    let item=parsedList[parsedList.length-1]; 
    let showTitle=item.title;
    let showContent=item.content; 
    
    let container=document.createElement('div');
    document.body.appendChild(container);
    container.style.marginTop='2vh';
    container.style.marginLeft='5vw';
    container.style.marginRight='5vw';
    container.style.width='90vw';
    

    let titleArea=document.createElement('div');
    container.appendChild(titleArea);
    titleArea.textContent=showTitle;
    titleArea.style.border='1px solid black';
    titleArea.style.padding='1vh';

    let contentArea=document.createElement('div');
    container.appendChild(contentArea);
    contentArea.textContent=showContent;
    contentArea.style.padding='1vh';
    contentArea.style.height='50vh';
    contentArea.style.border='1px solid black';

    let listButton=document.createElement('button');
    document.body.appendChild(listButton);
    let listText=document.createTextNode('목록');
    listButton.appendChild(listText);
    listButton.style.marginTop='5vh';
    listButton.style.marginLeft='5vw';
    listButton.setAttribute('class','btn');
    listButton.addEventListener('click', function(){
        location.href="board.html";
    });

}

