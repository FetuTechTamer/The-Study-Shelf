
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);



  document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll(".course-item");
    const itemsPerPage = 3;
    let currentPage = 1;

    function updatePageButtons() {
      document.getElementById("page1Btn").classList.toggle("active", currentPage === 1);
      document.getElementById("page2Btn").classList.toggle("active", currentPage === 2);
    }

    function showPage(page) {
      currentPage = page;
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage;

      courses.forEach((course, index) => {
        course.style.display = (index >= start && index < end) ? "block" : "none";
      });

      updatePageButtons();
    }

    document.getElementById("page1Btn").addEventListener("click", function (e) {
      e.preventDefault();
      showPage(1);
    });

    document.getElementById("page2Btn").addEventListener("click", function (e) {
      e.preventDefault();
      showPage(2);
    });

    document.getElementById("prevBtn").addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) showPage(currentPage - 1);
    });

    document.getElementById("nextBtn").addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage < 2) showPage(currentPage + 1);
    });

    // Initialize first page
    showPage(1);
  });
