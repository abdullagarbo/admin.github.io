$(".scrollTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    })
});
var hRe = $(".tasks").height(),
    aRe = $("aside.control-sidebar").height(),
    winHei = $(window).height();

function checkall(o, e) {
    var n = $("#" + o),
        r = $("." + e);
    n.click(function () {
        r.prop("checked", $(this).prop("checked"))
    })
}

function collapse(o) {
    "panel" === o ? $(".js-collapse").on("click", function (o) {
        o.preventDefault(), $(this).parent().parent().parent().parent().find(".panel-collapse").slideToggle("slow")
    }) : "card" === o && console.log("currently in progress")
}

function reload(o) {
    "panel" === o ? $(".js-refresh").on("click", function () {
        var o = $(".panel-collapse");
        $(o).block({
            message: '<i class="flaticon-reload-line spin"></i>',
            timeout: 2e3,
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .8,
                cursor: "wait"
            },
            css: {
                border: 0,
                color: "#fff",
                padding: 0,
                backgroundColor: "transparent"
            }
        })
    }) : "card" === o && $(".js-refresh").on("click", function () {
        var o = $(".reload-widget-area");
        $(o).block({
            message: '<i class="flaticon-reload-line spin"></i>',
            timeout: 2e3,
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .8,
                cursor: "wait"
            },
            css: {
                border: 0,
                color: "#fff",
                padding: 0,
                backgroundColor: "transparent"
            }
        })
    })
}

function multiCheck(o) {
    o.on("change", ".chk-parent", function () {
        var o = $(this).closest("table").find("td:first-child .child-chk"),
            e = $(this).is(":checked");
        $(o).each(function () {
            e ? ($(this).prop("checked", !0), $(this).closest("tr").addClass("active")) : ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
        })
    }), o.on("change", "tbody tr .new-control", function () {
        $(this).parents("tr").toggleClass("active")
    })
}

function checkall(o, e) {
    var n = $("#" + o),
        r = $("." + e);
    n.click(function () {
        r.prop("checked", $(this).prop("checked"))
    })
}

function sidebarCloser() {
    $(window).width() <= 991 ? ($("#container").addClass("sidebar-closed"), $(".overlay").removeClass("show")) : $(window).width() > 991 && ($("#container").removeClass("sidebar-closed"), $(".navbar").removeClass("expand-header"), $(".overlay").removeClass("show"), $("#container").removeClass("sbar-open"))
}

function sidebarMobCheck() {
    if ($(window).width() <= 991) {
        if ($(".main-container").hasClass("sbar-open")) return;
        sidebarCloser()
    } else $(window).width() > 991 && sidebarCloser()
}

function GetIEVersion() {
    var o = window.navigator.userAgent,
        e = o.indexOf("MSIE");
    return e > 0 ? parseInt(o.substring(e + 5, o.indexOf(".", e))) : navigator.userAgent.match(/Trident\/7\./) ? 11 : 0
}

function hideDropdown(o, e, n) {
    var r = o,
        i = e,
        t = n;
    "" != r && "" != i && "" != t ? $(document).on("click touchend", function () {
        $(r).removeClass(t), $(i).removeClass(t)
    }) : console.error("Fn hideDropdown requires three parameters")
}
$(".control-sidebar").mCustomScrollbar({
    advanced: {
        updateOnContentResize: !0
    },
    theme: "minimal"
}), $(".message-dropdown .message-scroll").mCustomScrollbar({
    advanced: {
        updateOnContentResize: !0
    },
    theme: "minimal"
}), $(function () {
    $(".js-cancel").on("click", function (o) {
        $(this).parents("#cancel-row").fadeOut("slow", function (o) {})
    })
}), $(".bs-tooltip").tooltip(), $(".bs-popover").popover(), $(".t-dot").tooltip({
    template: '<div class="tooltip status rounded-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
}), sidebarCloser(), $(window).resize(function (o) {
    sidebarMobCheck()
}), hideDropdown(".app-dropdown, .message-dropdown, .notification-dropdown", ".app-dropdown .dropdown-menu, .message-dropdown .dropdown-menu, .notification-dropdown .dropdown-menu", "show");