var firebaseConfig = {
   ....apiKey...
   ...databaseURL...
    .
    .
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  firebase.auth.Auth.Persistence.LOCAL;



  database=firebase.database();
  firedata=new Array();
  //temp=new Array();
  i=0;  
     var leadsRef =database.ref("UART/");
     leadsRef.limitToLast(1).on('value', function(snapshot) {
     snapshot.forEach(function(childSnapshot) {
     var childData = childSnapshot.val();
     firedata.push(childData);
     data=firedata[firedata.length- 1];
     data1=JSON.stringify(data);
     data2=JSON.parse(data1);
     console.log(data2.temp);
     document.getElementById("temp1").innerHTML =data2.temp;
   /* for(i=0;i<firedata.length;i++){
          console.log(firedata[i]); 
          temp1=JSON.parse(firedata[i]);
          console.log(temp1.temp)
          strData = "&label=" + label +
         "&value=" +(temp1.temp); 
    }*/
 
     });
 });

 database1=firebase.database();
 firedata1=new Array();
 //temp=new Array();
 i=0;  
    var leadsRef1 =database1.ref("UART/");
    leadsRef1.limitToLast(1).on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childData1 = childSnapshot.val();
    firedata1.push(childData1);
    data01=firedata1[firedata1.length- 1];
    data02=JSON.stringify(data01);
    data03=JSON.parse(data02);
    console.log(data03.temp);
    document.getElementById("vibe1").innerHTML =data03.temp;
  /* for(i=0;i<firedata.length;i++){
         console.log(firedata[i]); 
         temp1=JSON.parse(firedata[i]);
         console.log(temp1.temp)
         strData = "&label=" + label +
        "&value=" +(temp1.temp); 
   }*/

    });
});


database2=firebase.database();
firedata2=new Array();
//temp=new Array();
i=0;  
   var leadsRef2 =database2.ref("UART/");
   leadsRef2.limitToLast(1).on('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
   var childData2 = childSnapshot.val();
   firedata2.push(childData2);
   data001=firedata2[firedata2.length- 1];
   data002=JSON.stringify(data001);
   data003=JSON.parse(data002);
   console.log(data003.temp);
   document.getElementById("curr1").innerHTML =data003.temp;
 /* for(i=0;i<firedata.length;i++){
        console.log(firedata[i]); 
        temp1=JSON.parse(firedata[i]);
        console.log(temp1.temp)
        strData = "&label=" + label +
       "&value=" +(temp1.temp); 
  }*/

   });
});


database3=firebase.database();
firedata3=new Array();
//temp=new Array();
i=0;  
   var leadsRef3 =database3.ref("UART/");
   leadsRef3.limitToLast(1).on('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
   var childData3 = childSnapshot.val();
   firedata3.push(childData3);
   data0001=firedata3[firedata3.length- 1];
   data0002=JSON.stringify(data0001);
   data0003=JSON.parse(data0002);
   console.log(data0003.volt);
   document.getElementById("volt1").innerHTML =data0003.volt;
 /* for(i=0;i<firedata.length;i++){
        console.log(firedata[i]); 
        temp1=JSON.parse(firedata[i]);
        console.log(temp1.temp)
        strData = "&label=" + label +
       "&value=" +(temp1.temp); 
  }*/

   });
});


database4=firebase.database();
firedata4=new Array();
//temp=new Array();
i=0;  
   var leadsRef4 =database4.ref("UART/");
   leadsRef4.limitToLast(1).on('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
   var childData4 = childSnapshot.val();
   firedata4.push(childData4);
   data00001=firedata4[firedata4.length- 1];
   data00002=JSON.stringify(data0001);
   data00003=JSON.parse(data00002);
   console.log(data00003.temp);
   document.getElementById("load1").innerHTML =data00003.temp;
 /* for(i=0;i<firedata.length;i++){
        console.log(firedata[i]); 
        temp1=JSON.parse(firedata[i]);
        console.log(temp1.temp)
        strData = "&label=" + label +
       "&value=" +(temp1.temp); 
  }*/

   });
});


database5=firebase.database();
firedata5=new Array();
//temp=new Array();
i=0;  
   var leadsRef5 =database5.ref("UART/");
   leadsRef5.limitToLast(1).on('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {
   var childData5 = childSnapshot.val();
   firedata5.push(childData5);
   data000001=firedata5[firedata5.length- 1];
   data000002=JSON.stringify(data000001);
   data000003=JSON.parse(data000002);
   console.log(data000003.temp);
   document.getElementById("rpm1").innerHTML =data000003.temp;
 /* for(i=0;i<firedata.length;i++){
        console.log(firedata[i]); 
        temp1=JSON.parse(firedata[i]);
        console.log(temp1.temp)
        strData = "&label=" + label +
       "&value=" +(temp1.temp); 
  }*/

   });
});
