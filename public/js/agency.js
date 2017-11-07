/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $("a.page-scroll").bind("click", function(a) {
    var b = $(this);
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(b.attr("href")).offset().top },
        1500,
        "easeInOutExpo"
      ),
      a.preventDefault();
  });
}),
  $("a.portfolio-link").bind("click", function(a) {
    var b = this;
    $.ajax({
      url: "/pictures/" + $(this).data("i18nkey"),
      success: function(a) {
        $("#imgportfoliomodal").attr("alt", a.alt),
          $("#imgtitlemodal").html(a.alt),
          $("#imagedescmodal").html(a.desc),
          $("#imgportfoliomodal").attr("src", $(b).data("imgsrc")),
          $("#imgportfoliomodal").attr("alt", $(b).data("imgalt")),
          $("#portfolioModal1").addClass("in"),
          $("#portfolioModal1").toggle(),
          $("body").addClass("modal-open");
      },
      dataType: "json"
    });
    a.preventDefault();
  }),
  $('*[data-dismiss="modal"]').bind("click", function(a) {
    $("#portfolioModal1").removeClass("in"),
      $("#portfolioModal1").toggle(),
      $("body").removeClass("modal-open");
  }),
  $("body").scrollspy({ target: ".navbar-fixed-top" }),
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
  });



var onloadCallback = function() {
    grecaptcha.render('g-recaptcha', {
      'sitekey' : $('.g-recaptcha').data('sitekey')
    });
};