$(document).ready(function () {

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:8080/admin/getAllReports",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer fe5226b7-36ef-4daf-b931-3ea579fd0944",
      "cache-control": "no-cache",
    },
  }

  $.ajax(settings).done(function (response) {
    console.log(JSON.stringify(response));
    var userid,
      msgWrapper,
      dataObject,
      reportId,
      createdBy,
      createdDate,
      postId,
      falseNews,
      violenceThreat,
      userInfo,
      seen;
    
    var reportReason = new Array();


    userid = response.userId;
    msgWrapper = response.msgWrapper;
    dataObject = response.dataObject;
    
    $.each(dataObject, function (i, e) {
        
        //START VARIABLES SECTION
          reportId = e.reportId;
          createdBy = e.createdBy;
          createdDate = new Date(e.createdDate);
          postId = e.postId;
          falseNews = e.falseNews;
          violenceThreat = e.violenceThreat;          

          userInfo = e.userInfo;
          seen = e.seen;
        // END VARIABLES SECTION

        // START CREATE ELEMENTS SECTION
          var cardHeader = document.createElement("div");
          cardHeader.id = "headingOne" + i;
          cardHeader.className = "card-header";
          document.getElementById('cardParent').appendChild(cardHeader);

          var h5 = document.createElement("h5");
          h5.id = "h5" + i;
          h5.className = "mb-0 mt-0";
          cardHeader.appendChild(h5);

          var span = document.createElement("span");
          span.id = "span" + i;
          span.className = "alert alert-icon-left alert-light-danger mb-0";
          span.setAttribute("data-toggle", "collapse");
          span.setAttribute("data-target", "#collapseOne" + i);
          span.setAttribute("aria-expanded", "true");
          span.setAttribute("aria-controls", "collapseOne");
          span.setAttribute("role", "alert");
          h5.appendChild(span);

          var close = document.createElement("i");
          close.id = "close" + i;
          close.className = "flaticon-cancel-12 close";
          close.setAttribute("data-dismiss", "alert");
          span.appendChild(close);

          var warning = document.createElement("i");
          warning.id = "warning" + i;
          warning.className = "flaticon-danger-3";          
          span.appendChild(warning);

          var strong = document.createElement("strong");
          strong.id = "reportLabel" + i;
          strong.textContent = falseNews;
          span.appendChild(strong);

          var collapseOne = document.createElement("div");
          collapseOne.id = "collapseOne" + i;
          collapseOne.className = "collapse";
          collapseOne.setAttribute("aria-labelledby", "headingOne1");
          collapseOne.setAttribute("data-parent", "#accordion");
          document.getElementById('cardParent').appendChild(collapseOne);

          var cBodyOne = document.createElement("div");
          cBodyOne.id = "cBodyOne" + i;
          cBodyOne.className = "card-body";
          collapseOne.appendChild(cBodyOne);

          var rowMb5 = document.createElement("div");
          rowMb5.id = "rowMb5" + i;
          rowMb5.className = "row mb-5";
          cBodyOne.appendChild(rowMb5);

          var colLg12 = document.createElement("div");
          colLg12.id = "colLg12" + i;
          colLg12.className = "col-lg-12";
          rowMb5.appendChild(colLg12);

          var carouselInner = document.createElement("div");
          carouselInner.id = "carouselInner" + i;
          carouselInner.className = "carousel-inner";
          carouselInner.setAttribute("role", "listbox");
          colLg12.appendChild(carouselInner);

          var carouselItem = document.createElement("div");
          carouselItem.id = "carouselItem" + i;
          carouselItem.className = "carousel-item active";          
          carouselInner.appendChild(carouselItem);
          
          var rowOne = document.createElement("div");
          rowOne.id = "rowOne" + i;
          rowOne.className = "row";          
          carouselItem.appendChild(rowOne);

          var colLg4 = document.createElement("div");
          colLg4.id = "colLg4" + i;
          colLg4.className = "col-lg-4 col-md-4 col-sm-12 mb-md-0 mb-3";          
          rowOne.appendChild(colLg4);

          var h4Content = document.createElement("h4");
          h4Content.id = "h4Content" + i;                    
          h4Content.className = "mb-4";
          h4Content.textContent = "Reported content:";
          colLg4.appendChild(h4Content);

          var cardMb4 = document.createElement("div");
          cardMb4.id = "cardMb4" + i;                    
          cardMb4.className = "card mb-4";          
          colLg4.appendChild(cardMb4);

          var imgOne = document.createElement("img");
          imgOne.id = "imgOne" + i;
          imgOne.src =  "assets/img/card-3.jpg";
          imgOne.alt = "Card image cap";
          imgOne.className = "card-img-top";          
          cardMb4.appendChild(imgOne);

          var cBodyTwo = document.createElement("div");
          cBodyTwo.id = "cBodyTwo" + i;          
          cBodyTwo.className = "card-body";          
          cardMb4.appendChild(cBodyTwo);
          
          var cardTitle = document.createElement("h5");
          cardTitle.id = "cardTitle" + i;          
          cardTitle.className = "card-title mt-3 mb-4";          
          cardTitle.textContent = "Card title:";
          cBodyTwo.appendChild(cardTitle);

          var cardText = document.createElement("p");
          cardText.id = "cardText" + i;          
          cardText.className = "card-text mb-4";          
          cardText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
          cBodyTwo.appendChild(cardText);

          var viewProfile = document.createElement("a");
          viewProfile.id = "viewProfile" + i;
          viewProfile.href = "#0";          
          viewProfile.className = "btn btn-gradient-warning mb-4 br-left-30 br-right-30";
          viewProfile.textContent = "View profile";
          cBodyTwo.appendChild(viewProfile);

          var h4Todo = document.createElement("h4");
          h4Todo.id = "h4Todo" + i;                    
          h4Todo.className = "mb-4";
          h4Todo.textContent = "To do:";
          colLg4.appendChild(h4Todo);

          var delet = document.createElement("a");
          delet.id = "delet" + i;
          delet.href = "#0";          
          delet.className = "btn btn-gradient-danger mb-4 br-left-30 br-right-30";
          delet.textContent = "Delete post";
          colLg4.appendChild(delet);

          var hide = document.createElement("a");
          hide.id = "hide" + i;
          hide.href = "#0";          
          hide.className = "btn btn-gradient-danger mb-4 br-left-30 br-right-30";
          hide.textContent = "Hide post";
          colLg4.appendChild(hide);

          var contact = document.createElement("a");
          contact.id = "contact" + i;
          contact.href = "#0";          
          contact.className = "btn btn-gradient-danger mb-4 br-left-30 br-right-30";
          contact.textContent = "Contact user";
          colLg4.appendChild(contact);
          
          var colLg8 = document.createElement("div");
          colLg8.id = "colLg8" + i;
          colLg8.className = "col-lg-8 col-md-8 col-sm-12 mb-md-0 mb-3";          
          rowOne.appendChild(colLg8);

          var h4who = document.createElement("h4");
          h4who.id = "h4who" + i;                    
          h4who.className = "mb-4";
          h4who.textContent = "Who reported this content:";
          colLg8.appendChild(h4who);

          var tableMb4 = document.createElement("div");
          tableMb4.id = "tableMb4" + i;
          tableMb4.className = "table-responsive mb-4";          
          colLg8.appendChild(tableMb4);

          var customerInfo = document.createElement("table");
          customerInfo.id = "customerInfo" + i;
          customerInfo.className = "table style-3 table-bordered  table-hover";          
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
          thText.textContent = "Report text";
          trHead.appendChild(thText);

          var thAction = document.createElement("th");
          thAction.className = "text-center";
          thAction.textContent = "Action";
          trHead.appendChild(thAction);

          var tbody = document.createElement("tbody");
          customerInfo.appendChild(tbody);

          var trBody = document.createElement("tr");
          tbody.appendChild(trBody);

          var tdImg = document.createElement("td");
          tdImg.id = "tdImg" + i;
          tdImg.className = "align-center";
          trBody.appendChild(tdImg);

          var spanImg = document.createElement("img");
          spanImg.id = "spanImg" + i;
          spanImg.src = "assets/img/profile-17.jpg";
          spanImg.alt = "profile";
          tdImg.appendChild(spanImg);

          var tdName = document.createElement("td");
          tdName.id = "tdName" + i;
          tdName.className = "text-center";
          tdName.textContent = "Donna Roger";          
          trBody.appendChild(tdName);

          var tdText = document.createElement("td");
          tdText.id = "tdText" + i;
          tdText.className = "text-center";
          tdText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";          
          trBody.appendChild(tdText);

          var tdButton = document.createElement("td");
          tdButton.id = "tdButton" + i;
          tdButton.className = "text-center";                    
          trBody.appendChild(tdButton);

          var viewButton = document.createElement("button");
          viewButton.id = "viewButton" + i;
          viewButton.className = "btn btn-outline-primary";
          viewButton.textContent = "view";
          tdButton.appendChild(viewButton);

          var h4why = document.createElement("h4");
          h4why.id = "h4why" + i;                    
          h4why.className = "mb-4";
          h4why.textContent = "Why this content reported:";
          colLg8.appendChild(h4why);

          var listMb4 = document.createElement("div");
          listMb4.id = "listMb4" + i;                    
          listMb4.className = "list-group badge-list-group mb-4";          
          colLg8.appendChild(listMb4);


          var tempReportReason = new Array();
          tempReportReason = e.reportReason;
          $.each(tempReportReason, function (i, e) {
            reportReason[i] = e;

            var reason = document.createElement("a");
            reason.id = "reason" + i;                    
            reason.className = "list-group-item d-flex justify-content-between align-items-center";
            reason.textContent = reportReason[i];
            listMb4.appendChild(reason);

            var reasonCount = document.createElement("span");
            reasonCount.id = "reasonCount" + i;                    
            reasonCount.className = "badge badge-pill badge-warning";
            reasonCount.textContent = "8";
            reason.appendChild(reasonCount);
          });         

        // ENS CREATE ELEMENTS SECTION
        
        console.log("------------------------------------------- ");        
        console.log("report id " + reportId);
        console.log("createdBy " + createdBy);
        console.log("createdDate " + createdDate);
        console.log("postId " + postId);
        console.log("falseNews " + falseNews);
        console.log("violenceThreat " + violenceThreat);
        console.log("reportReason " + reportReason);
        console.log("userInfo " + userInfo);
        console.log("seen " + seen);
        console.log("------------------------------------------- ");
    });
  });
});