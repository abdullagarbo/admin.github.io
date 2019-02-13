var bar;
$(".message-scroll").mCustomScrollbar({
    scrollbarPosition: "outside",
    scrollInertia: 450,
    theme: "dark-thin"
}), $(".top-search-scroll").mCustomScrollbar({
    axis: "yx",
    scrollbarPosition: "outside",
    scrollInertia: 450,
    autoHideScrollbar: !0,
    theme: "dark-thin"
}), new Chartist.Pie(".s-r", {
    series: [25, 75]
}, {
    donut: !0,
    donutWidth: 40,
    donutSolid: !0,
    startAngle: 270,
    showLabel: !0
}), (bar = new ProgressBar.Circle("#daily", {
    color: "#1d1d1d",
    strokeWidth: 5,
    trailWidth: 3,
    trailColor: "#f3f3f3",
    easing: "easeInOut",
    duration: 1400,
    text: {
        autoStyleContainer: !1
    },
    from: {
        color: "#00d1c1",
        width: 5
    },
    to: {
        color: "#00d1c1",
        width: 5
    },
    step: function (t, e) {
        e.path.setAttribute("stroke", t.color), e.path.setAttribute("stroke-width", t.width);
        var o = Math.round(100 * e.value());
        0 === o ? e.setText("") : e.setText(o + "%")
    }
})).text.style.fontSize = "1rem", bar.animate(.56), (bar = new ProgressBar.Circle("#weekly", {
    color: "#1d1d1d",
    strokeWidth: 5,
    trailWidth: 3,
    trailColor: "#f3f3f3",
    easing: "easeInOut",
    duration: 1400,
    text: {
        autoStyleContainer: !1
    },
    from: {
        color: "#e95f2b",
        width: 5
    },
    to: {
        color: "#e95f2b",
        width: 5
    },
    step: function (t, e) {
        e.path.setAttribute("stroke", t.color), e.path.setAttribute("stroke-width", t.width);
        var o = Math.round(100 * e.value());
        0 === o ? e.setText("") : e.setText(o + "%")
    }
})).text.style.fontSize = "1rem", bar.animate(.6), (bar = new ProgressBar.Circle("#month", {
    color: "#1d1d1d",
    strokeWidth: 5,
    trailWidth: 3,
    trailColor: "#f3f3f3",
    easing: "easeInOut",
    duration: 1400,
    text: {
        autoStyleContainer: !1
    },
    from: {
        color: "#0081e6",
        width: 5
    },
    to: {
        color: "#0081e6",
        width: 5
    },
    step: function (t, e) {
        e.path.setAttribute("stroke", t.color), e.path.setAttribute("stroke-width", t.width);
        var o = Math.round(100 * e.value());
        0 === o ? e.setText("") : e.setText(o + "%")
    }
})).text.style.fontSize = "1rem", bar.animate(.77), checkall("checkAll", "chkbox"), checkall("invoiceAll", "invoicechk"), $("#world-map").vectorMap({
    map: "world_mill_en",
    backgroundColor: "#fff",
    borderColor: "#818181",
    borderOpacity: .25,
    borderWidth: 1,
    color: "#f4f3f0",
    regionStyle: {
        initial: {
            fill: "#f3f3f3"
        }
    },
    series: {
        regions: [{
            values: {
                US: "#38a9ff",
                AU: "#816cfd",
                ES: "#00d1c1",
                FR: "#f8538d",
                IN: "#ffb88e"
            }
        }]
    },
    markerStyle: {
        initial: {
            r: 9,
            fill: "#fff",
            "fill-opacity": 1,
            stroke: "#000",
            "stroke-width": 5,
            "stroke-opacity": .4
        }
    },
    enableZoom: !0,
    hoverColor: "#1f3892",
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: !0
});
var data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        series: [
            [2, 3, 4, 3, 4, 1, 2],
            [3, 2, 3, 2, 3, 4, 3]
        ]
    },
    options = {
        seriesBarDistance: 10,
        axisY: {
            labelInterpolationFnc: function (t) {
                return t + "k"
            },
            onlyInteger: !0
        }
    },
    responsiveOptions = [
        ["screen and (max-width: 575px)", {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (t) {
                    return t[0]
                }
            }
        }]
    ];
new Chartist.Bar(".v-pv-weekly", data, options, responsiveOptions), $(".monthly-chart-tab li a").on("shown.bs.tab", function (t) {
    new Chartist.Bar(".v-pv-weekly", data, options, responsiveOptions);
    new Chartist.Line(".v-pv-monthly", {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    }, {
        fullWidth: !0,
        axisY: {
            onlyInteger: !0,
            offset: 20,
            labelInterpolationFnc: function (t) {
                return t + "k"
            }
        }
    }, [
        ["screen and (max-width: 575px)", {
            axisX: {
                labelInterpolationFnc: function (t) {
                    return t[0]
                }
            }
        }]
    ]);
    new Chartist.Line(".v-pv-yearly", {
        labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4],
            [3, 6, 2, 4, 7, 8, 3, 9]
        ]
    }, {
        low: 0,
        showArea: !0,
        axisY: {
            onlyInteger: !0,
            offset: 20,
            labelInterpolationFnc: function (t) {
                return t + "k"
            }
        }
    }, [
        ["screen and (max-width: 575px)", {
            axisX: {
                labelInterpolationFnc: function (t) {
                    return t[2] + t[3]
                }
            }
        }]
    ])
}), $(".calendar").pignoseCalendar(), $(".latest-activities-scroll").mCustomScrollbar({
    axis: "yx",
    autoHideScrollbar: !0
});