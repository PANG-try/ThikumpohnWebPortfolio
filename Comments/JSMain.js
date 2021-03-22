var i = 0;

function postFunction(){
    let text = document.getElementById('text1').value
    if(i==0&&text!==''){
        document.getElementById('topic1').innerHTML=text;
        document.getElementById('text1').value='';
        // console.log(text);
        // console.log(i);
        i++
    }
    else if(i==1&&text!=''){
        document.getElementById('comment1').innerHTML=text;
        document.getElementById('text1').value='';
        i++
    }
    else if(i==2&&text!=''){
        document.getElementById('comment2').innerHTML=text;
        document.getElementById('text1').value='';
        i++
    }
    else if(i>2&&text!=''){
        console.log("can't comment more");
    }
    else{
        console.log("empty");
    }
}

function clearFunction(){
    document.getElementById('topic1').innerHTML="";
    document.getElementById('comment1').innerHTML="";
    document.getElementById('comment2').innerHTML="";
    document.getElementById('text1').value='';
    i=0;
}

