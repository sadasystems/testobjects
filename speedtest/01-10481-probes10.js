/*! Cedexis Inc */
cdxFeatures.probing.onProbeDataReceived({
    "privateProviders": [{
        "providers": [],
        "groupName": "private",
        "providerZoneId": "1",
        "providerCustomerId": "10481",
        "maxMeasurements": 4,
        "maxThroughputMeasurements": 2
    }],
    "publicProviders": [{
        "providers": [{
            "providerId": "14",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cloudfront.cedexis.com/r16/14/r16.js"
            }, {
                "tag": "script",
                "url": "http://cloudfront.cedexis.com/r16/14/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "17",
            "weight": {
                "default": 5000,
                "CN": 5000,
                "HK": 5000,
                "ID": 5000,
                "IN": 5000,
                "JP": 5000,
                "KR": 5000,
                "MY": 5000,
                "NZ": 5000,
                "SG": 5000,
                "TH": 5000,
                "TW": 5000,
                "VN": 5000,
                "AU": 5000,
                "PH": 5000,
                "KH": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://chinacache.cedexis.com/r16/17/r16.js"
            }, {
                "tag": "script",
                "url": "http://chinacache.cedexis.com/r16/17/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "18",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cds.z5t8n6p8.hwcdn.net/z5t8n6p8/cds/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://cds.z5t8n6p8.hwcdn.net/z5t8n6p8/cds/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "19",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.http.internapcdn.net/cedexis/r15/19/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.http.internapcdn.net/cedexis/r15/19b/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "20",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://limelight.cedexis.com/r16/20/r16.js"
            }, {
                "tag": "script",
                "url": "http://limelight.cedexis.com/r16/20/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "24",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cs600.wac.edgecastcdn.net/80B30D/cedexis/r16/24/r16.js"
            }, {
                "tag": "script",
                "url": "http://cs600.wac.edgecastcdn.net/80B30D/cedexis/r16/24/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "25",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.gccdn.net/r16/25/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.gccdn.net/r16/25/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "26",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://llnwop.cedexis.com/r15/26/dbench.html"
            }]
        }, {
            "providerId": "28",
            "weight": {
                "default": 0,
                "US": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://edge.cedexis-perf-ext.top.comcast.net/r16/28/r16.js"
            }, {
                "tag": "script",
                "url": "http://edge.cedexis-perf-ext.top.comcast.net/r16/28/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "32",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://level3.cedexis.com/r16/32/r16.js"
            }, {
                "tag": "script",
                "url": "http://level3.cedexis.com/r16/32/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "33",
            "weight": {
                "default": 0
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cotendo.cedexis.com/r16/33/r16.js"
            }, {
                "tag": "script",
                "url": "http://cotendo.cedexis.com/r16/33/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "35",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://bitgravity.cedexis.com/cedexis/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://bitgravity.cedexis.com/cedexis/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "36",
            "weight": {
                "default": 0,
                "CN": 5000,
                "HK": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cnc.cedexis.com.wscdns.com/r16/36a/r16.js"
            }, {
                "tag": "img",
                "url": "http://cnc.cedexis.com.wscdns.com/img/36a/r17xl-100KB.png",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "38",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ash1.phoenixnap.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "39",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://phx1.phoenixnap.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "41",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://lasvegas.cloudsigma.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "45",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ams.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "46",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://dfw.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "47",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://dca.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "48",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sjc.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "49",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sea.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "50",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sin.sl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "61",
            "weight": {
                "default": 0,
                "AS": 100,
                "AU": 100,
                "CK": 100,
                "FJ": 100,
                "FM": 100,
                "GU": 100,
                "KI": 100,
                "MH": 100,
                "MP": 100,
                "NC": 100,
                "NF": 100,
                "NR": 100,
                "NU": 100,
                "NZ": 100,
                "PF": 100,
                "PG": 100,
                "PW": 100,
                "SB": 100,
                "TL": 100,
                "TO": 100,
                "TV": 100,
                "VU": 100,
                "WF": 100,
                "WS": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.hostworks.com.au/r16/61/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.hostworks.com.au/r16/61/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "64",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://4063-testobjects.voxcdn.com/r16/64/r16.js"
            }, {
                "tag": "script",
                "url": "http://4063-testobjects.voxcdn.com/r16/64/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "65",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://eu-ams1.joyent.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "66",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://us-east1.joyent.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "67",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://us-sw1.joyent.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "68",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://us-west1.joyent.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "78",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://z5t8n6p8.ssl.hwcdn.net/z5t8n6p8/cds/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://z5t8n6p8.ssl.hwcdn.net/z5t8n6p8/cds/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "89",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.youtube.com/favicon.ico"
            }]
        }, {
            "providerId": "90",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://fastly.bench.cedexis.com/r16/90/r16.js"
            }, {
                "tag": "script",
                "url": "http://fastly.bench.cedexis.com/r16/90/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "92",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.qq.com/favicon.ico"
            }]
        }, {
            "providerId": "94",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.baidu.com/favicon.ico"
            }]
        }, {
            "providerId": "96",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://ebay.com/favicon.ico"
            }]
        }, {
            "providerId": "98",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://mail.live.com/favicon.ico"
            }]
        }, {
            "providerId": "102",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sfr.cedexis.com/r16/102/r16.js"
            }, {
                "tag": "script",
                "url": "http://sfr.cedexis.com/r16/102/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "103",
            "weight": {
                "default": 2500,
                "AF": 2500,
                "AM": 2500,
                "AZ": 2500,
                "BG": 2500,
                "BY": 2500,
                "EE": 2500,
                "GE": 2500,
                "KG": 2500,
                "KZ": 2500,
                "LT": 2500,
                "LV": 2500,
                "MD": 2500,
                "PL": 2500,
                "RU": 2500,
                "TJ": 2500,
                "TM": 2500,
                "UA": 2500,
                "UZ": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdn77.cedexis.com/r16/103/r16.js"
            }, {
                "tag": "script",
                "url": "http://cdn77.cedexis.com/r16/103/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "107",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://level3-vip.cedexis.com/r16/107/r16.js"
            }, {
                "tag": "script",
                "url": "http://level3-vip.cedexis.com/r16/107/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "108",
            "weight": {
                "default": 0,
                "CN": 100,
                "HK": 100,
                "ID": 100,
                "IN": 100,
                "JP": 100,
                "KR": 100,
                "MY": 100,
                "NZ": 100,
                "SG": 100,
                "TH": 100,
                "TW": 100,
                "VN": 100,
                "AU": 100,
                "PH": 100,
                "KH": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.com.cloudcdn.net/r15lgc.js"
            }]
        }, {
            "providerId": "109",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://pinterest.com/favicon.ico"
            }]
        }, {
            "providerId": "111",
            "weight": {
                "default": 2500,
                "AF": 2500,
                "AM": 2500,
                "AZ": 2500,
                "BG": 2500,
                "BY": 2500,
                "EE": 2500,
                "GE": 2500,
                "KG": 2500,
                "KZ": 2500,
                "LT": 2500,
                "LV": 2500,
                "MD": 2500,
                "PL": 2500,
                "RU": 2500,
                "TJ": 2500,
                "TM": 2500,
                "UA": 2500,
                "UZ": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://onapp.cedexis.com/r16/111/r16.js"
            }, {
                "tag": "script",
                "url": "http://onapp.cedexis.com/r16/111/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "112",
            "weight": {
                "default": 2500,
                "CN": 2500,
                "HK": 2500,
                "ID": 2500,
                "IN": 2500,
                "JP": 2500,
                "KR": 2500,
                "MY": 2500,
                "NZ": 2500,
                "SG": 2500,
                "TH": 2500,
                "TW": 2500,
                "VN": 2500,
                "AU": 2500,
                "PH": 2500,
                "KH": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://wac.799D.i1.cdndelivery.com/80799D/cedexis/r16/112/r16.js"
            }, {
                "tag": "script",
                "url": "http://wac.799D.i1.cdndelivery.com/80799D/cedexis/r16/112/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "113",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aws-ap-southeast-2a.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "115",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.distilnetworks.com/r16/501/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.distilnetworks.com/r16/501/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "116",
            "weight": {
                "default": 0,
                "BY": 200,
                "BG": 200,
                "CZ": 200,
                "HU": 200,
                "MD": 200,
                "PL": 200,
                "RO": 200,
                "SK": 200,
                "UA": 200
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://r-http-ff.dcs.redcdn.pl/http/o2/Cedexis/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://redir.redcdn.pl/http/o2/Cedexis/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "126",
            "weight": {
                "default": 0,
                "US": 100,
                "AS": 100,
                "AU": 100,
                "CK": 100,
                "FJ": 100,
                "FM": 100,
                "GU": 100,
                "KI": 100,
                "MH": 100,
                "MP": 100,
                "NC": 100,
                "NF": 100,
                "NR": 100,
                "NU": 100,
                "NZ": 100,
                "PF": 100,
                "PG": 100,
                "PW": 100,
                "SB": 100,
                "TL": 100,
                "TO": 100,
                "TV": 100,
                "VU": 100,
                "WF": 100,
                "WS": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.cdn.on.net/r16/126/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.cdn.on.net/r16/126/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "168",
            "weight": {
                "default": 0,
                "AF": 5000,
                "AM": 5000,
                "AZ": 5000,
                "BG": 5000,
                "BY": 5000,
                "EE": 5000,
                "GE": 5000,
                "KG": 5000,
                "KZ": 5000,
                "LT": 5000,
                "LV": 5000,
                "MD": 5000,
                "PL": 5000,
                "RU": 5000,
                "TJ": 5000,
                "TM": 5000,
                "UA": 5000,
                "UZ": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ngenix.cedexis.com/r16/168/r16.js"
            }, {
                "tag": "script",
                "url": "http://ngenix.cedexis.com/r16/168/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "181",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ams.cloudprovider.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "182",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdnify.cedexis.com/r15/r15lgc.js"
            }]
        }, {
            "providerId": "197",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aruba-it.bench.cedexis.com/r16/197/r16.js"
            }]
        }, {
            "providerId": "198",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aruba-cz.bench.cedexis.com/r16/198/r16.js"
            }]
        }, {
            "providerId": "208",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis-test01.insnw.net/r16/208/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis-test01.insnw.net/r16/208/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "213",
            "weight": {
                "default": 0,
                "AR": 100,
                "BO": 100,
                "BR": 100,
                "CL": 100,
                "CO": 100,
                "CW": 100,
                "EC": 100,
                "GF": 100,
                "GY": 100,
                "PE": 100,
                "PY": 100,
                "SR": 100,
                "UY": 100,
                "VE": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.anankecdn.net.br/r16/213/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.anankecdn.net.br/r16/213/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "215",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.sa.metacdn.com/r16/215/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.sa.metacdn.com/r16/215/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "217",
            "weight": {
                "default": 0,
                "US": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.vdms.tv/r15/217/r15lgc-1448B.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.vdms.tv/r15/217b/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "219",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://dfw.rackspace.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "221",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-eu-west-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "225",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.facebook.com/favicon.ico"
            }]
        }, {
            "providerId": "226",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.bing.com/favicon.ico"
            }]
        }, {
            "providerId": "227",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://m.www.yahoo.com/favicon.ico"
            }]
        }, {
            "providerId": "228",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://denver.viawest.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "229",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://twitter.com/favicon.ico"
            }]
        }, {
            "providerId": "230",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://slc.viawest.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "232",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.msn.com/favicon.ico"
            }]
        }, {
            "providerId": "239",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-us-east-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "243",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis-us-northcentral.cloudapp.net/r15lgc.js"
            }]
        }, {
            "providerId": "245",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis-asia-east.cloudapp.net/r15lgc.js"
            }]
        }, {
            "providerId": "246",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis-asia-southeast.cloudapp.net/r15lgc.js"
            }]
        }, {
            "providerId": "247",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis-eu-north.cloudapp.net/r15lgc.js"
            }]
        }, {
            "providerId": "249",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://az315059.vo.msecnd.net/r16/249/r16.js"
            }, {
                "tag": "script",
                "url": "http://az315059.vo.msecnd.net/r16/249/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "251",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ams2.voxcloud.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "254",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sjc2.voxcloud.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "255",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://os.enocloud.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "258",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ord.rackspace.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "259",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://lon.rackspace.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "260",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-us-west-2a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "262",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-sa-east-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "264",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://uk.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "265",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://canada.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "266",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://useast.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "267",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://uswest.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "268",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sin.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "269",
            "weight": {
                "default": 0,
                "AD": 500,
                "AL": 500,
                "AT": 500,
                "AX": 500,
                "BA": 500,
                "BE": 500,
                "BG": 500,
                "BY": 500,
                "CH": 500,
                "CY": 500,
                "CZ": 500,
                "DE": 500,
                "DK": 500,
                "EE": 500,
                "ES": 500,
                "EU": 500,
                "FI": 500,
                "FO": 500,
                "FR": 500,
                "GB": 500,
                "GE": 500,
                "GG": 500,
                "GI": 500,
                "GR": 500,
                "HR": 500,
                "HU": 500,
                "IE": 500,
                "IM": 500,
                "IS": 500,
                "IT": 500,
                "JE": 500,
                "LI": 500,
                "LT": 500,
                "LU": 500,
                "LV": 500,
                "MC": 500,
                "MD": 500,
                "ME": 500,
                "MK": 500,
                "MT": 500,
                "NL": 500,
                "NO": 500,
                "PL": 500,
                "PT": 500,
                "RO": 500,
                "RS": 500,
                "SE": 500,
                "SI": 500,
                "SK": 500,
                "SM": 500,
                "UA": 500,
                "VA": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aspserveur.bench.cedexis.com/r16/269/r16.js"
            }]
        }, {
            "providerId": "275",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://netdna.cedexis.com/r16/275/r16.js"
            }, {
                "tag": "script",
                "url": "http://netdna.cedexis.com/r16/275/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "276",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.cachefly.net/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.cachefly.net/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "279",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://123cloud-ams.bench.cedexis.com/r16/279/r16.js"
            }]
        }, {
            "providerId": "281",
            "weight": {
                "default": 0,
                "AF": 2500,
                "AM": 2500,
                "AZ": 2500,
                "BG": 2500,
                "BY": 2500,
                "CN": 2500,
                "DE": 2500,
                "EE": 2500,
                "EG": 2500,
                "IR": 2500,
                "IL": 2500,
                "GE": 2500,
                "KG": 2500,
                "KZ": 2500,
                "LT": 2500,
                "LV": 2500,
                "MD": 2500,
                "PL": 2500,
                "RU": 2500,
                "TJ": 2500,
                "TM": 2500,
                "TR": 2500,
                "UA": 2500,
                "UZ": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.cdnvideo.ru/r16/281/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.cdnvideo.ru/r16/281/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "282",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://www.amazon.com/favicon.ico"
            }]
        }, {
            "providerId": "284",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdxcf.info/r16/284/r16.js"
            }, {
                "tag": "script",
                "url": "http://cdxcf.info/r16/284/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "287",
            "weight": {
                "default": 10000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://probe.cedexis.org/r16/287/r16.js"
            }, {
                "tag": "script",
                "url": "http://probe.cedexis.org/r16/287/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "289",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-us-west-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "290",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-ap-southeast-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "291",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ec2-ap-northeast-1a.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "292",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://telefonica.cedexis.com/r16/292/r16.js"
            }, {
                "tag": "script",
                "url": "http://telefonica.cedexis.com/r16/292/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "298",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://opx.sa.metacdn.com/r16/297/r16.js"
            }, {
                "tag": "script",
                "url": "http://opx.sa.metacdn.com/r16/297/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "359",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cs600.wpc.edgecastcdn.net/80B30D/cedexis/r16/359/r16.js"
            }, {
                "tag": "script",
                "url": "http://cs600.wpc.edgecastcdn.net/80B30D/cedexis/r16/359/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "360",
            "weight": {
                "default": 0,
                "AR": 100,
                "BO": 100,
                "BR": 100,
                "CL": 100,
                "CO": 100,
                "CW": 100,
                "EC": 100,
                "GF": 100,
                "GY": 100,
                "PE": 100,
                "PY": 100,
                "SR": 100,
                "UY": 100,
                "VE": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://wynn.upx.net.br/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://wynn.upx.net.br/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "370",
            "weight": {
                "default": 0,
                "AR": 2500,
                "BO": 2500,
                "BR": 2500,
                "CL": 2500,
                "CO": 2500,
                "CW": 2500,
                "EC": 2500,
                "GF": 2500,
                "GY": 2500,
                "PE": 2500,
                "PY": 2500,
                "SR": 2500,
                "UY": 2500,
                "VE": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://azion.cedexis.com/r16/370/r16.js"
            }, {
                "tag": "script",
                "url": "http://azion.cedexis.com/r16/370/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "381",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdx.cedexis.com/r16/381/r16.js"
            }, {
                "tag": "script",
                "url": "http://cdx.cedexis.com/r16/381/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "405",
            "weight": {
                "default": 0
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://web.exceda.net/cedexis/r15/r15lgc.js"
            }]
        }, {
            "providerId": "406",
            "weight": {
                "default": 0,
                "AR": 0,
                "BO": 0,
                "BR": 0,
                "CL": 0,
                "CO": 0,
                "CW": 0,
                "EC": 0,
                "GF": 0,
                "GY": 0,
                "PE": 0,
                "PY": 0,
                "SR": 0,
                "UY": 0,
                "VE": 0
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://websa.exceda.net/cedexis/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://websa.exceda.net/cedexis/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "408",
            "weight": {
                "default": 0
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://webg.exceda.net/cedexis/r15/r15lgc.js"
            }]
        }, {
            "providerId": "409",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ak.sascdn.com/diff/1/1820086/r15lgc.js"
            }]
        }, {
            "providerId": "411",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdn.c.ooyala.com/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://cdn.c.ooyala.com/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "412",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sita-atl.bench.cedexis.com/r16/412/r16.js"
            }, {
                "tag": "script",
                "url": "http://sita-atl.bench.cedexis.com/r15/412b/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "413",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sita-sin.bench.cedexis.com/r16/413/r16.js"
            }, {
                "tag": "script",
                "url": "http://sita-sin.bench.cedexis.com/r15/413b/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "414",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sita-fra.bench.cedexis.com/r16/414/r16.js"
            }, {
                "tag": "script",
                "url": "http://sita-fra.bench.cedexis.com/r15/414b/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "415",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ovh-rbx.bench.cedexis.com/r16/415/r16.js"
            }]
        }, {
            "providerId": "416",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://dm.c.ooyala.com/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://dm.c.ooyala.com/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "417",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://azionusa.cedexis.com/r16/417/r16.js"
            }, {
                "tag": "script",
                "url": "http://azionusa.cedexis.com/r16/417/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "418",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ak.c.ooyala.com/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://ak.c.ooyala.com/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "419",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ak-w3.c.ooyala.com/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://ak-w3.c.ooyala.com/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "420",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ak-g-ssl.c.ooyala.com/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://ak-g-ssl.c.ooyala.com/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "427",
            "weight": {
                "default": 0,
                "AD": 500,
                "AL": 500,
                "AT": 500,
                "AX": 500,
                "BA": 500,
                "BE": 500,
                "BG": 500,
                "BY": 500,
                "CH": 500,
                "CY": 500,
                "CZ": 500,
                "DE": 500,
                "DK": 500,
                "EE": 500,
                "ES": 500,
                "EU": 500,
                "FI": 500,
                "FO": 500,
                "FR": 500,
                "GB": 500,
                "GE": 500,
                "GG": 500,
                "GI": 500,
                "GR": 500,
                "HR": 500,
                "HU": 500,
                "IE": 500,
                "IM": 500,
                "IS": 500,
                "IT": 500,
                "JE": 500,
                "LI": 500,
                "LT": 500,
                "LU": 500,
                "LV": 500,
                "MC": 500,
                "MD": 500,
                "ME": 500,
                "MK": 500,
                "MT": 500,
                "NL": 500,
                "NO": 500,
                "PL": 500,
                "PT": 500,
                "RO": 500,
                "RS": 500,
                "SE": 500,
                "SI": 500,
                "SK": 500,
                "SM": 500,
                "UA": 500,
                "VA": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aruba-fr.bench.cedexis.com/r16/427/r16.js"
            }]
        }, {
            "providerId": "428",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdnnet.cedexis.com/r16/428/r16.js"
            }, {
                "tag": "script",
                "url": "http://cdnnet.cedexis.com/r16/428/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "430",
            "weight": {
                "default": 0
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://webw3.exceda.net/cedexis/r15/r15lgc.js"
            }]
        }, {
            "providerId": "434",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://radar.cedexis.swiftserve.com/r16/434/r16.js"
            }, {
                "tag": "script",
                "url": "http://radar.cedexis.swiftserve.com/r16/434/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "435",
            "weight": {
                "default": 0,
                "DK": 500,
                "EE": 500,
                "FO": 500,
                "FI": 500,
                "GG": 500,
                "IS": 500,
                "IE": 500,
                "IM": 500,
                "JE": 500,
                "LV": 500,
                "LT": 500,
                "NO": 500,
                "SE": 500,
                "GB": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://wpc.AC29.teliasoneracdn.net/80AC29/testobjects.cedexis.com/r16/435/r16.js"
            }, {
                "tag": "script",
                "url": "http://wpc.AC29.teliasoneracdn.net/80AC29/testobjects.cedexis.com/r16/435/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "438",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://iad.virtacore.bench.cedexis.com/r16/438/r16.js"
            }]
        }, {
            "providerId": "439",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://lon.telefonica.bench.cedexis.com/r16/439/r16.js"
            }]
        }, {
            "providerId": "440",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://syd.rackspace.bench.cedexis.com/r16/440/r16.js"
            }]
        }, {
            "providerId": "442",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hopxtest.g.us.dca.cedexis.com/r15lgc.js"
            }]
        }, {
            "providerId": "443",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hopxtest.d.eu.lin.cedexis.com/r15lgc.js"
            }]
        }, {
            "providerId": "444",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hopxtest.d.eu.mad.cedexis.com/r15lgc.js"
            }]
        }, {
            "providerId": "445",
            "weight": {
                "default": 1
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hopxtest.a.us.sjc.cedexis.com/r15lgc.js"
            }]
        }, {
            "providerId": "447",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ovh-canada.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "450",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ovhcdn.cedexis.com/r16/450/r16.js"
            }, {
                "tag": "script",
                "url": "http://ovhcdn.cedexis.com/r16/450/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "451",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://limelightperf.cedexis.com/r16/451/r16.js"
            }, {
                "tag": "script",
                "url": "http://limelightperf.cedexis.com/r16/451/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "454",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://dsaorigin.cedexis.com/r15/454/dbench.html"
            }]
        }, {
            "providerId": "455",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://cloudfront-dsa.cedexis.com/r15/455/dbench.html"
            }]
        }, {
            "providerId": "456",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://akamai.cedexis.com/r15/456/dbench.html"
            }]
        }, {
            "providerId": "457",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://transact-can.cedexis.com/r15/457/dbench.html"
            }]
        }, {
            "providerId": "459",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://paris.veepee.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "460",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://aubervilliers.veepee.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "461",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://us-east-1.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "462",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://uk-central-1.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "463",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://de-central-1.savvis.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "467",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://sbg.ovh.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "468",
            "weight": {
                "default": 0,
                "DE": 500,
                "GB": 500,
                "FR": 500,
                "PL": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://de1.cedexis.swiftserve.com/r16/468/r16.js"
            }, {
                "tag": "script",
                "url": "http://de1.cedexis.swiftserve.com/r16/468/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "469",
            "weight": {
                "default": 0,
                "DE": 500,
                "GB": 500,
                "FR": 500,
                "PL": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://gb1.cedexis.swiftserve.com/r16/469/r16.js"
            }, {
                "tag": "script",
                "url": "http://gb1.cedexis.swiftserve.com/r16/469/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "470",
            "weight": {
                "default": 0,
                "DE": 500,
                "GB": 500,
                "FR": 500,
                "PL": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://gb2.cedexis.swiftserve.com/r16/470/r16.js"
            }, {
                "tag": "script",
                "url": "http://gb2.cedexis.swiftserve.com/r16/470/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "471",
            "weight": {
                "default": 1000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cdx1.ecritel.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "472",
            "weight": {
                "default": 1000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://br.ecritel.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "473",
            "weight": {
                "default": 200
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://z1.ikl.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "474",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.netplus.fr/r15lgc.js"
            }]
        }, {
            "providerId": "475",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://trp.numergy.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "476",
            "weight": {
                "default": 1000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cn.ecritel.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "477",
            "weight": {
                "default": 1000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://ca.ecritel.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "478",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://vnx.sfr.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "479",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cbv.sfr.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "480",
            "weight": {
                "default": 0,
                "US": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://edge.cedexis-perf.top.comcast.net/r15/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://edge.cedexis-perf.top.comcast.net/r15/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "481",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://playout.3qsdn.com/cedexis/r15/481/r15lgc.js"
            }, {
                "tag": "script",
                "url": "http://playout.3qsdn.com/cedexis/r15/481/r15lgc-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "482",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://iad.rackspace.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "483",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hkg.rackspace.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "484",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://edgecast-adn.cedexis.com/r15/484/dbench.html"
            }]
        }, {
            "providerId": "485",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexisedge.cdn.starhub.com/r16/485/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexisedge.cdn.starhub.com/r16/485/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "486",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://gce-us-central1-a.bench.cedexis.com/r16/486/r16.js"
            }]
        }, {
            "providerId": "487",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://gce-eu-west1-a.bench.cedexis.com/r16/487/r16.js"
            }]
        }, {
            "providerId": "489",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.leasewebcdn.com/r16/489/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.leasewebcdn.com/r16/489/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "490",
            "weight": {
                "default": 100
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://hkg2.fengqi.bench.cedexis.com/r16/490/r16.js"
            }]
        }, {
            "providerId": "492",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://zayo.cedexis.netdna-cdn.com/r16/492/r16.js"
            }, {
                "tag": "script",
                "url": "http://zayo.cedexis.netdna-cdn.com/r16/492/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "493",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://vnx.numergy.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "494",
            "weight": {
                "default": 5000
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://om.netdna.cedexis.com/r16/494/r16.js"
            }, {
                "tag": "script",
                "url": "http://om.netdna.cedexis.com/r16/494/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "495",
            "weight": {
                "default": 2500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://fastlydsa.bench.cedexis.com/r15/495/dbench.html"
            }]
        }, {
            "providerId": "496",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cloud.ger.leaseweb.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "497",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://vm.ger.leaseweb.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "498",
            "weight": {
                "default": 200
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.squixa.net/r16/498/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.squixa.net/r16/498/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "499",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://cedexis.telenorcdn.net/r16/499/r16.js"
            }, {
                "tag": "script",
                "url": "http://cedexis.telenorcdn.net/r16/499/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "500",
            "weight": {
                "default": 500
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://val.cloudwatt.bench.cedexis.com/r16/r16.js"
            }]
        }, {
            "providerId": "501",
            "weight": {
                "default": 0,
                "AD": 200,
                "AL": 200,
                "AT": 200,
                "AX": 200,
                "BA": 200,
                "BE": 200,
                "BG": 200,
                "BY": 200,
                "CH": 200,
                "CY": 200,
                "CZ": 200,
                "DE": 200,
                "DK": 200,
                "EE": 200,
                "ES": 200,
                "EU": 200,
                "FI": 200,
                "FO": 200,
                "FR": 200,
                "GB": 200,
                "GE": 200,
                "GG": 200,
                "GI": 200,
                "GR": 200,
                "HR": 200,
                "HU": 200,
                "IE": 200,
                "IM": 200,
                "IS": 200,
                "IT": 200,
                "JE": 200,
                "LI": 200,
                "LT": 200,
                "LU": 200,
                "LV": 200,
                "MC": 200,
                "MD": 200,
                "ME": 200,
                "MK": 200,
                "MT": 200,
                "NL": 200,
                "NO": 200,
                "PL": 200,
                "PT": 200,
                "RO": 200,
                "RS": 200,
                "SE": 200,
                "SI": 200,
                "SK": 200,
                "SM": 200,
                "UA": 200,
                "VA": 200
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://de.aruba.bench.cedexis.com/r15/r15lgc.js"
            }]
        }, {
            "providerId": "552",
            "weight": {
                "default": 0,
                "CN": 200,
                "HK": 200,
                "TW": 200
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD", "HTTP_RTT"],
                "url": "http://testobjects.cedexis.com.aqb.so/r16/552/r16.js"
            }, {
                "tag": "script",
                "url": "http://testobjects.cedexis.com.aqb.so/r16/552/r16xl-100KB.js",
                "timeout": 6000,
                "types": ["HTTP_KBPS"]
            }]
        }, {
            "providerId": "60090",
            "weight": {
                "default": 10
            },
            "omitQueryString": false,
            "probes": [{
                "tag": "script",
                "timeout": 6000,
                "types": ["HTTP_COLD"],
                "url": "http://anycast.cedexis.com/r16/60090/r16.js"
            }]
        }],
        "groupName": "public",
        "providerZoneId": "0",
        "providerCustomerId": "0",
        "maxMeasurements": 4,
        "maxThroughputMeasurements": 4
    }]
});
