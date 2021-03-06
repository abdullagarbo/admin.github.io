var App = function () {
    var e = 991,
        o = "input-focused",
        n = ".main-container",
        s = ".search-full",
        l = {
            sidebar: ".overlay",
            cs: ".cs-overlay",
            search: ".search-overlay"
        },
        t = function () {
            $(".menu-categories li > .collapse").on("shown.bs.collapse", function (e) {
                e.preventDefault(), e.stopPropagation();
                var o = $(this).parent().offset(),
                    n = $("#topbar").offset(),
                    s = o.top - n.top;
                o.left, n.left;
                $("#topbar").mCustomScrollbar("scrollTo", "-=" + s)
            })
        },
        a = function () {
            $(".sidebarCollapse").on("click", function (e) {
                e.preventDefault(), $(n).toggleClass("sidebar-closed"), $(n).toggleClass("sbar-open"), $(".overlay").toggleClass("show"), $("html,body").toggleClass("sidebar-noneoverflow"), $("footer .footer-section-1").toggleClass("f-close")
            })
        },
        i = function () {
            $(".toggle-control-sidebar").click(function (e) {
                e.preventDefault(), $(".control-sidebar").toggleClass("control-sidebar-open"), $(".cs-overlay").toggleClass("show"), $("html,body").toggleClass("cs-noneoverflow")
            })
        },
        r = function () {
            $("#dismiss, .overlay, cs-overlay").on("click", function () {
                $(n).addClass("sidebar-closed"), $(n).removeClass("sbar-open"), $(".overlay").removeClass("show"), $("html,body").removeClass("sidebar-noneoverflow")
            })
        },
        c = function () {
            $(".cs-overlay").on("click", function () {
                $(this).removeClass("show"), $("html,body").removeClass("cs-noneoverflow"), $(".control-sidebar").removeClass("control-sidebar-open")
            })
        },
        u = function () {
            $("#topbar").mCustomScrollbar("destroy")
        },
        f = function () {
            $("#topbar").mCustomScrollbar({
                theme: "minimal",
                scrollInertia: 1e3
            })
        },
        m = function () {
            $(s).click(function (e) {
                $(this).addClass(o), $(l.search).addClass("show")
            }), $(l.search).click(function (e) {
                $(this).removeClass("show"), $(s).removeClass(o)
            })
        },
        d = function () {
            $(".menu-categories li.menu .submenu").mCustomScrollbar({
                theme: "minimal",
                scrollInertia: 1e3
            })
        },
        p = function () {
            $(document).on("click", function (e) {
                $(".menu-categories li.menu > .submenu").is(e.target) || $(".menu-categories li.menu > .submenu").has(e.target).length || $(".menu-categories li.menu > .submenu").collapse("hide")
            })
        },
        h = function () {
            $(".chb").change(function () {
                $(".chb").prop("checked", !1), $(this).prop("checked", !0)
            })
        },
        g = function () {
            window.innerWidth <= e && (console.log("On Mobile Refresh"), $(".menu-categories li > .collapse").removeClass("eq-animated eq-fadeInUp"), t(), m(), f())
        },
        b = function () {
            $(window).on("resize", function (o) {
                o.preventDefault(), window.innerWidth <= e && ($(".menu-categories li > .collapse").removeClass("eq-animated eq-fadeInUp"), m(), f(), console.log("On Mobile Resize"))
            })
        },
        v = function () {
            window.innerWidth > e && (u(), p(), d(), $(".menu-categories li > .collapse").addClass("eq-animated eq-fadeInUp"), console.log("On Desktop Refresh"))
        },
        C = function () {
            $(window).on("resize", function (o) {
                o.preventDefault(), window.innerWidth > e && ($("footer .footer-section-1").removeClass("f-close"), $(".menu-categories li > .collapse").addClass("eq-animated eq-fadeInUp"), d(), u(), console.log("On Desktop Resize"))
            })
        };
    return {
        init: function () {
            h(), a(), i(), r(), c(), v(), C(), g(), b()
        }
    }
}();