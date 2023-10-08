let datablog=[];
function addblog(event) {
    event.preventDefault();
    let Name = document.getElementById("nameproject").value;
    let StartDate = new Date(document.getElementById("sdate").value);
    let EndDate = new Date(document.getElementById("edate").value);
    let descripsion = document.getElementById("des").value;
    let teknologi1= document.getElementById("tekno1");
    let teknologi2= document.getElementById("tekno2");
    let teknologi3= document.getElementById("tekno3");
    let teknologi4= document.getElementById("tekno4");
    let Uplode = document.getElementById("uplod").files;



    if (Name === "") {
      return alert("Name must be filled!");
    } else if (StartDate === "") {
      return alert("stardate must be filled!");
    } else if (EndDate === "") {
      return alert("end date must be filled!");
    } else if (descripsion === "") {
      return alert("deskription must be selected!");
    } 
    else if (Uplode === "") {
      return alert("uplode must be filled!");
    }
//show image
    Uplode = URL.createObjectURL(Uplode[0]);


// show time
let diff=EndDate-StartDate;
let day=diff/(3600000*24);
let week=day/7;
let month=day/30;

let duration;

 if(day<=7){
  duration=`${day} hari`;
 }
 else if(day>7 && day<30){
  duration=`${Math.floor(week)} minggu`
 }
 else if(day>=30){
  duration=`${Math.floor(month)} bulan`
 }

// checkboox

    let jsicon="";
    let reacticon="";
    let nexticon="";
    let typeicon="";

    if(teknologi1.checked){
       jsicon= `<i class="fa-brands fa-square-js fa-xl" id="iconstate"></i>`;
    } else{ jsicon= "";

    }
    if(teknologi2.checked){
       reacticon= `<i class="fa-brands fa-react fa-xl"id="iconstate"></i>`;
    } else{reacticon="";

    }
    if(teknologi3.checked){
       nexticon= `<i class="fa-brands fa-node fa-xl" id="iconstate"></i>`;
    }else{ nexticon="";

    }
    if(teknologi4.checked){
       typeicon= `<i class="fa-brands fa-square-facebook fa-xl" id="iconstate"></i>`;

    }else{ typeicon="";

    }

    let blog= {
      Namanya: Name,
      StartDate:StartDate,
      EndDate:EndDate,
      descripsion:descripsion,
      duration:duration,
      jsicon,
      reacticon,
      nexticon,
      typeicon,
      Uplode:Uplode, 

    } 
    datablog.push(blog);
    console.log(datablog);
    renderblog();
}

  function renderblog(){
    document.getElementById("filblog").innerHTML =``;
    for( let i=0; i<datablog.length;i++){
      console.log(datablog[i])
   
    document.getElementById("filblog").innerHTML +=`
          

              <div class="fillblog">
               <div class="fill-blog">

                     <div class="image-display">
                        <img src="${datablog[i].Uplode}" alt="" class="imagesc"/>
                    </div>
                    <div class="textblog">
                        <div class="fit-text">
                            <div class="fit-text-blog"><p style="font-weight: bold; font-size: larger;">${datablog[i].Namanya}</p></div>
                            <div class="fit-text-blog"><p style="color: rgb(104, 104, 104); font-size: smaller;"><i>${datablog[i].duration}</i></p></div>
                            <div class="fit-text-blog"><p style="font-size: small;">${datablog[i].descripsion}</p></div>
                        </div> 
                        <div class="icon">
                           ${datablog[i].jsicon}
                           ${datablog[i].reacticon}
                           ${datablog[i].nexticon}
                           ${datablog[i].typeicon}
                            
                        </div>
                        <div class="submitblog">
                            <button class="submit">edit</button>
                            <button class="submit">delete</button>
                        </div>
                    </div>
                  </div>
                </div>`;
    }
  }
  setInterval(function () {
    renderBlog();
  }, 1000);
 /* function getFullTime(time){

  let monthname=[ "jan","feb","mar","apr","mei","jun","jul","aug","sep","oct","nov","dec",]
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  if(hours <= 9){
    hours="0"+hours;
  } else if(minutes<=9){
    minutes="0"+minutes

  }

  return `${date}${monthname[month]}${year}${hours}${minutes}`;//*

  }*/