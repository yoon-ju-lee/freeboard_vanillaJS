let array=[];
let index;

init();

function init(){
    
    let list=localStorage.getItem('postingList1');
    let parsedList=JSON.parse(list);
    let newList=array.concat(parsedList);
    array=newList;
    //console.log(array);
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
  

    let item={};
    item.title=getTitle;
    item.content=getContent;
    array.push(item);
    let key=array.length-1;
    item.index=key;

    let stringfiedArray=JSON.stringify(array);
    localStorage.setItem('postingList1', stringfiedArray);
    

    showPosting();
}


function showPosting(){
    document.body.innerHTML='';
    let list=localStorage.getItem('postingList1');
    let parsedList=JSON.parse(list);
    let item=parsedList[parsedList.length-1]; 
    //console.log(item);  
    let showTitle=item.title;
    let showContent=item.content; 
    
    let container=document.createElement('div');
    document.body.appendChild(container);
    container.style.marginTop='30px';
    container.style.marginLeft='30px';
    container.style.width='600px';
    

    let titleArea=document.createElement('div');
    container.appendChild(titleArea);
    titleArea.textContent=showTitle;
    titleArea.style.border='1px solid black';
    titleArea.style.padding='5px';

    let contentArea=document.createElement('div');
    container.appendChild(contentArea);
    contentArea.textContent=showContent;
    contentArea.style.padding='5px';
    contentArea.style.border='1px solid black';

    let listButton=document.createElement('button');
    document.body.appendChild(listButton);
    let listText=document.createTextNode('목록');
    listButton.appendChild(listText);
    listButton.marginTop='500px';
    listButton.setAttribute('class','buttons');
    listButton.addEventListener('click', moveToList);

}

function moveToList(){
    location.href="board.html";
}
