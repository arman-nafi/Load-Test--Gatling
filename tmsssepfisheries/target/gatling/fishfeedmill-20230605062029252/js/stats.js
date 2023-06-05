var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "3",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "17060",
        "ok": "55959",
        "ko": "17060"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "56994",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "55845",
        "ok": "56556",
        "ko": "55823"
    },
    "standardDeviation": {
        "total": "11476",
        "ok": "437",
        "ko": "11651"
    },
    "percentiles1": {
        "total": "60008",
        "ok": "56714",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "56854",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "56966",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "56988",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "0.037",
        "ko": "1.212"
    }
},
contents: {
"req_fish-feed-mill--8da03": {
        type: "REQUEST",
        name: "Fish Feed Mill Request",
path: "Fish Feed Mill Request",
pathFormatted: "req_fish-feed-mill--8da03",
stats: {
    "name": "Fish Feed Mill Request",
    "numberOfRequests": {
        "total": "100",
        "ok": "3",
        "ko": "97"
    },
    "minResponseTime": {
        "total": "17060",
        "ok": "55959",
        "ko": "17060"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "56994",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "55845",
        "ok": "56556",
        "ko": "55823"
    },
    "standardDeviation": {
        "total": "11476",
        "ok": "437",
        "ko": "11651"
    },
    "percentiles1": {
        "total": "60008",
        "ok": "56714",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "60011",
        "ok": "56854",
        "ko": "60011"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "56966",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "56988",
        "ko": "60016"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 97,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "0.037",
        "ko": "1.212"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
