var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "1",
        "ko": "99"
    },
    "minResponseTime": {
        "total": "9906",
        "ok": "58987",
        "ko": "9906"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "58987",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "54223",
        "ok": "58987",
        "ko": "54174"
    },
    "standardDeviation": {
        "total": "13730",
        "ok": "0",
        "ko": "13791"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "58987",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60012",
        "ok": "58987",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "58987",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "58987",
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
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 99,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "0.013",
        "ko": "1.238"
    }
},
contents: {
"req_fish-hatchery-r-b48bb": {
        type: "REQUEST",
        name: "Fish Hatchery Request",
path: "Fish Hatchery Request",
pathFormatted: "req_fish-hatchery-r-b48bb",
stats: {
    "name": "Fish Hatchery Request",
    "numberOfRequests": {
        "total": "100",
        "ok": "1",
        "ko": "99"
    },
    "minResponseTime": {
        "total": "9906",
        "ok": "58987",
        "ko": "9906"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "58987",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "54223",
        "ok": "58987",
        "ko": "54174"
    },
    "standardDeviation": {
        "total": "13730",
        "ok": "0",
        "ko": "13791"
    },
    "percentiles1": {
        "total": "60005",
        "ok": "58987",
        "ko": "60005"
    },
    "percentiles2": {
        "total": "60012",
        "ok": "58987",
        "ko": "60012"
    },
    "percentiles3": {
        "total": "60015",
        "ok": "58987",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60016",
        "ok": "58987",
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
    "count": 1,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 99,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "0.013",
        "ko": "1.238"
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
