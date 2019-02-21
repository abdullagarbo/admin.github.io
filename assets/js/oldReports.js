$(document).ready(function () {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:10000/api/v1/admin-service/admin/getOldReports",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer 667d5732-21db-4b08-a936-0b643a95ae21",
      "cache-control": "no-cache",
    },
  }

  $.ajax(settings).done(function (response) {
    console.log(JSON.stringify(response));

    if (response.dataObject != "No reports found..."){

    var userId,
      msgWrapper,
      dataObject,
      reportId,
      createdBy,
      createdDate,
      postId,
      priorety,      
      falseNews,
      violenceThreat,
      reportReason,
      userInfo,
      postUserInfo,
      seen;

    var postCreatedBy,
      postCreatedDate,
      postDescription,
      postImageLink = "./assets/img/No_image.png";

    var reportUserFirstName,
      reportUserLastName,
      profileImage = "./assets/img/No_image.png";

    var postUserFirstName,
        postUserLastName;

    userId = response.userId;
    msgWrapper = response.msgWrapper;
    dataObject = response.dataObject;
    
    $.each(dataObject, function (i, e) {
        
        //START VARIABLES SECTION
          reportId = e.reportId;
          createdBy = e.createdBy;
          createdDate = new Date(e.createdDate);

          postId = e.postId;

          if (e.postInfo.dataObject != null){
            
            postCreatedBy = e.postInfo.dataObject.createdBy;
            postCreatedDate = e.postInfo.dataObject.createdDate;
            postDescription = e.postInfo.dataObject.description;

            if ((e.postInfo.dataObject.imageLink != null) && (e.postInfo.dataObject.imageLink != "")){
              postImageLink = e.postInfo.dataObject.imageLink;}
          }         

          reportUserFirstName = e.reportUserInfo.dataObject.firstName;
          reportUserLastName = e.reportUserInfo.dataObject.lastName;

          if (e.postUserInfo != null){

            postUserFirstName = e.postUserInfo.dataObject.firstName;
            postUserLastName = e.postUserInfo.dataObject.lastName;
          }

          priorety = e.priorety;
          falseNews = e.falseNews;
          violenceThreat = e.violenceThreat;      
          reportReason = e.reportReason;
          userInfo = e.reportUserInfo;
          postUserInfo = e.postUserInfo;
          seen = e.seen;
        // END VARIABLES SECTION

        // START CREATE ELEMENTS SECTION
          var cardHeader = document.createElement("div");
          cardHeader.id = reportId;
          cardHeader.className = "card-header";
          document.getElementById("cardParent-2").appendChild(cardHeader);

          var h5 = document.createElement("h5");
          h5.id = "h5" + i + 1;
          h5.className = "mb-0 mt-0";
          cardHeader.appendChild(h5);

          var span = document.createElement("span");
          span.id = "span" + i + 1;

          switch(priorety) {
            case 3:
              span.className = "alert alert-icon-left alert-light-danger mb-0";
              break;
            case 2:
              span.className = "alert alert-icon-left alert-light-warning mb-0";
              break;
            case 1:
              span.className = "alert alert-icon-left alert-light-info mb-0";
              break;
            case 0:
              span.className = "alert alert-icon-left alert-light-success mb-0";
              break;            
          }      

          span.setAttribute("data-toggle", "collapse");
          span.setAttribute("data-target", "#collapseOne" + i + 1);
          span.setAttribute("aria-expanded", "true");
          span.setAttribute("aria-controls", "collapseOne");
          span.setAttribute("role", "alert");
          h5.appendChild(span);

          var warning = document.createElement("i");
          warning.id = "warning" + i + 1;

          switch(priorety) {
            case 3:
              warning.className = "flaticon-bell-13";
              break;
            case 2:
              warning.className = "flaticon-warning";
              break;
            case 1:
              warning.className = "flaticon-danger-2";
              break;
            case 0:
              warning.className = "flaticon-bell-23";
              break;            
          }          
          
          span.appendChild(warning);

          var strong = document.createElement("strong");
          strong.id = "reportLabel" + i + 1;
          strong.textContent = reportReason;
          span.appendChild(strong);

          var collapseOne = document.createElement("div");
          collapseOne.id = "collapseOne" + i + 1;
          collapseOne.className = "collapse";
          collapseOne.setAttribute("aria-labelledby", "headingOne1");
          collapseOne.setAttribute("data-parent", "#card-2");
          document.getElementById("cardParent-2").appendChild(collapseOne);

          var cBodyOne = document.createElement("div");
          cBodyOne.id = "cBodyOne" + i + 1;
          cBodyOne.className = "card-body";
          collapseOne.appendChild(cBodyOne);

          var rowMb5 = document.createElement("div");
          rowMb5.id = "rowMb5" + i + 1;
          rowMb5.className = "row mb-5";
          cBodyOne.appendChild(rowMb5);

          var colLg12 = document.createElement("div");
          colLg12.id = "colLg12" + i + 1;
          colLg12.className = "col-lg-12";
          rowMb5.appendChild(colLg12);

          var carouselInner = document.createElement("div");
          carouselInner.id = "carouselInner" + i + 1;
          carouselInner.className = "carousel-inner";
          carouselInner.setAttribute("role", "listbox");
          colLg12.appendChild(carouselInner);

          var carouselItem = document.createElement("div");
          carouselItem.id = "carouselItem" + i + 1;
          carouselItem.className = "carousel-item active";          
          carouselInner.appendChild(carouselItem);
          
          var rowOne = document.createElement("div");
          rowOne.id = "rowOne" + i + 1;
          rowOne.className = "row";          
          carouselItem.appendChild(rowOne);

          var colLg4 = document.createElement("div");
          colLg4.id = "colLg4" + i + 1;
          colLg4.className = "col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-3";          
          rowOne.appendChild(colLg4);

          var h4Content = document.createElement("h4");
          h4Content.id = "h4Content" + i + 1;
          h4Content.style.color = "green";
          h4Content.className = "mb-4";
          h4Content.textContent = "Post content:";
          colLg4.appendChild(h4Content);

          var cardMb4 = document.createElement("div");
          cardMb4.id = "cardMb4" + i + 1;                    
          cardMb4.className = "card mb-4";          
          colLg4.appendChild(cardMb4);

          var imgOne = document.createElement("img");
          imgOne.id = "imgOne" + i + 1;
          imgOne.src =  postImageLink;
          imgOne.alt = "Card image cap";
          imgOne.className = "card-img-top";          
          cardMb4.appendChild(imgOne);

          var cBodyTwo = document.createElement("div");
          cBodyTwo.id = "cBodyTwo" + i + 1;          
          cBodyTwo.className = "card-body";          
          cardMb4.appendChild(cBodyTwo);

          var cardText = document.createElement("p");
          cardText.id = "cardText" + i + 1;          
          cardText.className = "card-text mb-4";          
          cardText.textContent = postDescription;
          cBodyTwo.appendChild(cardText);
          
          var colLg8 = document.createElement("div");
          colLg8.id = "colLg8" + i + 1;
          colLg8.className = "col-lg-8 col-md-8 col-sm-12 mb-md-0 mb-3";          
          rowOne.appendChild(colLg8);


          var h4who = document.createElement("h4");
          h4who.id = "h4who" + i + 1;
          h4who.style.color = "red";
          h4who.className = "mb-4";
          h4who.textContent = "Who posted this content:";
          colLg8.appendChild(h4who);

          var tableMb4 = document.createElement("div");
          tableMb4.id = "tableMb4" + i +1;
          tableMb4.className = "table-responsive mb-4";          
          colLg8.appendChild(tableMb4);

          var customerInfo = document.createElement("table");
          customerInfo.id = "customerInfo" + i +1;
          customerInfo.className = "table style-3 table-bordered";          
          tableMb4.appendChild(customerInfo);
          
          var thead = document.createElement("thead");
          customerInfo.appendChild(thead);
          
          var trHead = document.createElement("tr");
          thead.appendChild(trHead);

          var thId = document.createElement("th");
          thId.className = "align-center";
          thId.textContent = "#";          
          trHead.appendChild(thId);

          var thName = document.createElement("th");
          thName.className = "text-center";
          thName.textContent = "Full Name";
          trHead.appendChild(thName);

          var thText = document.createElement("th");
          thText.className = "text-center";
          thText.textContent = "E-post";
          trHead.appendChild(thText);

          var tbody = document.createElement("tbody");
          customerInfo.appendChild(tbody);

          var trBody = document.createElement("tr");
          tbody.appendChild(trBody);

          var tdImg = document.createElement("td");
          tdImg.id = "tdImg" + i + 1;
          tdImg.className = "align-center";
          trBody.appendChild(tdImg);

          var spanImg = document.createElement("img");
          spanImg.id = "spanImg" + i;

          $.get("http://localhost:10000/api/v1/gallery-service/images/profilepicture/" + postCreatedBy + "/profile.jpg")
            .done(function() { 
              
              profileImage = "http://localhost:10000/api/v1/gallery-service/images/profilepicture/" + postCreatedBy + "/profile.jpg";
          });

          spanImg.src = profileImage;
          spanImg.alt = "profile";
          tdImg.appendChild(spanImg);

          var tdName = document.createElement("td");
          tdName.id = "tdName" + i + 1;
          tdName.className = "text-center";
          tdName.textContent = postUserFirstName + " " + postUserLastName;          
          trBody.appendChild(tdName);

          var tdText = document.createElement("td");
          tdText.id = "tdText" + i + 1;
          tdText.className = "text-center";
          tdText.textContent = "abdulla.garbo@gmail.com";
          trBody.appendChild(tdText);

          var h4who = document.createElement("h4");
          h4who.id = "h4who" + i + 1;                    
          h4who.className = "mb-4";
          h4who.textContent = "Who reported this content:";
          colLg8.appendChild(h4who);

          var tableMb4 = document.createElement("div");
          tableMb4.id = "tableMb4" + i + 1;
          tableMb4.className = "table-responsive mb-4";          
          colLg8.appendChild(tableMb4);

          var customerInfo = document.createElement("table");
          customerInfo.id = "customerInfo" + i + 1;
          customerInfo.className = "table style-3 table-bordered";          
          tableMb4.appendChild(customerInfo);
          
          var thead = document.createElement("thead");
          customerInfo.appendChild(thead);
          
          var trHead = document.createElement("tr");
          thead.appendChild(trHead);

          var thId = document.createElement("th");
          thId.className = "align-center";
          thId.textContent = "#";          
          trHead.appendChild(thId);

          var thName = document.createElement("th");
          thName.className = "text-center";
          thName.textContent = "Full Name";
          trHead.appendChild(thName);

          var thText = document.createElement("th");
          thText.className = "text-center";
          thText.textContent = "Why this content reported";
          trHead.appendChild(thText);

          var tbody = document.createElement("tbody");
          customerInfo.appendChild(tbody);

          var trBody = document.createElement("tr");
          tbody.appendChild(trBody);

          var tdImg = document.createElement("td");
          tdImg.id = "tdImg" + i + 1;
          tdImg.className = "align-center";
          trBody.appendChild(tdImg);

          var spanImg = document.createElement("img");
          spanImg.id = "spanImg" + i + 1;
          
          $.get("http://localhost:10000/api/v1/gallery-service/images/profilepicture/" + createdBy + "/profile.jpg")
            .done(function() { 
              
              profileImage = "http://localhost:10000/api/v1/gallery-service/images/profilepicture/" + createdBy + "/profile.jpg";
          });
          
          spanImg.src = profileImage;
          spanImg.alt = "profile";
          tdImg.appendChild(spanImg);

          var tdName = document.createElement("td");
          tdName.id = "tdName" + i + 1;
          tdName.className = "text-center";
          tdName.textContent = reportUserFirstName + " " + reportUserLastName;          
          trBody.appendChild(tdName);

          var tdText = document.createElement("td");
          tdText.id = "tdText" + i + 1;
          tdText.className = "text-center";
          tdText.textContent = reportReason;          
          trBody.appendChild(tdText);              

        // ENS CREATE ELEMENTS SECTION
        
        console.log("------------------------------------------- ");        
        console.log("report id " + reportId);
        console.log("createdBy " + createdBy);
        console.log("createdDate " + createdDate);
        console.log("-----------------------------------");
        console.log("post Id " + postId);
        console.log("post user Id " + postCreatedBy);
        console.log("post user first name " + postUserFirstName);
        console.log("post user last name " + postUserLastName);
        console.log("post createdDate " + postCreatedDate);
        console.log("post description " + postDescription);
        console.log("post image " + postImageLink);
        console.log("-----------------------------------");
        console.log("falseNews " + falseNews);
        console.log("violenceThreat " + violenceThreat);
        console.log("reportReason " + reportReason);
        console.log("-----------------------------------");
        console.log("report user first name " + reportUserFirstName);
        console.log("report user last name " + reportUserLastName);
        console.log("-----------------------------------");
        console.log("seen " + seen);
        console.log("------------------------------------------- ");
    });
    }
  });
});