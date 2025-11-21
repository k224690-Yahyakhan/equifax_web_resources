//15.154.4-es2019 2025-11-20T16:23:14.160Z (456b5266da601)
var CS_CONF = {
    "collectionEnabled": true,
    "useSentry": false,
    "projectId": 77136,
    "status": 1,
    "hostnames": ["www.equifax.com", "equifax.com", "uat-my.equifax.com", "webcoe-liferay.npe.apps.us-usw1.gcp.efx"],
    "crossDomainTracking": 0,
    "crossDomainSingleIframeTracking": 0,
    "consentRequired": 0,
    "allowSubdomains": 1,
    "visitorCookieTimeout": 34164000000,
    "sampleRate": 100,
    "replayRecordingRate": 50,
    "validationRate": 10,
    "lastTrackingDraw": 1718724886,
    "trackerDomain": "c.az.contentsquare.net",
    "recordingDomain": "r.contentsquare.net",
    "useMalkaPipeline": 1,
    "ed": "l.contentsquare.net/log/web",
    "eMerchandisingEnabled": 0,
    "mouseMoveHeatmapEnabled": 1,
    "autoInsightsEnabled": 0,
    "jsErrorsEnabled": 1,
    "customErrorsEnabled": 0,
    "jsCustomErrorsEnabled": 0,
    "apiErrorsEnabled": 0,
    "customHashIdEnabled": 0,
    "recordingEncryptionEnabled": 0,
    "recordingEncryptionPublicKey": null,
    "recordingEncryptionPublicKeyId": 0,
    "secureCookiesEnabled": 0,
    "triggerSessionReplayEnabled": 0,
    "triggerSessionReplayRegex": null,
    "dynamicIdRegex": null,
    "whitelistedAttributes": null,
    "replayRecordingUnmaskedUrlRegex": "",
    "replayRecordingUnmaskedUrlRegexRules": [],
    "replayRecordingMaskedUrlRegexRules": [],
    "replayRecordingMaskedUrlRegex": "",
    "anonymisationMethod": null,
    "tagDeploymentMode": "CONTENTSQUARE",
    "experimental": null,
    "iframesTracking": 0,
    "textVisibilityEnabled": 0,
    "cookielessTrackingEnabled": 0,
    "malkaUrlEnabled": 0,
    "malkaEtrEnabled": 0,
    "pathComputationRules": {
        "reliableSelectors": [],
        "uniqueAttributes": [],
        "uniqueCssSelectors": []
    },
    "asyncSerializerEnabled": 1,
    "pendingInactivityTimeout": 5000,
    "accessibilityEnabled": 0,
    "uxaDomain": "app.contentsquare.com",
    "webviewsTrackingEnabled": 0,
    "useStaticResourceManager": 1,
    "performanceTimingOptions": {
        "withResource": false,
        "withNavigation": false
    },
    "replayConsentRequiredForSession": 0,
    "eventsApiEnabled": 0,
    "clickedElementTextEnabled": 0,
    "collectHierarchy": 0,
    "collectSubmit": 0,
    "collectTargetText": 0,
    "displayAdOptions": null,
    "taskSchedulerOptions": {
        "enabled": 1
    },
    "malkaQuotaServiceDomain": "q-us1.az.contentsquare.net",
    "malkaRecordingDomain": "k-us1.az.contentsquare.net",
    "staticResourceManagerDomain": "srm.af.contentsquare.net",
    "voc": {
        "siteId": null,
        "enabled": 0
    }
};
var CS_INTEGRATIONS_CONF = {
    "youtube": {
        "settings": ["enableVideoStarted", "enableVideoPaused", "enableVideoCompleted", "enableVideoPlayDuration", "enableVideoQuality", "enableVideoMuted", "enableVolumeChanged"]
    },
    "usertesting": {
        "settings": ["setReplayLinkToFirstPV", "sendArtificialPageviews"]
    },
    "optimizely": {},
    "qualtrics": {
        "settings": ["sendArtificialPageviews", "setReplayLinkToFirstPV"]
    },
    "blue-triangle": {
        "settings": [],
        "vendorSettings": {
            "siteID": "3208"
        }
    }
};
/* integration-youtube 2.6.1 */
! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) t.d(o, i, function(n) {
                return e[n]
            }.bind(null, i));
        return o
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 2)
}([function(e) {
    e.exports = JSON.parse('{"displayName":"Youtube","dvarPrefix":"VA_YT_"}')
}, function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-youtube-contentsquare","version":"2.6.1","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function o(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], window._uxa.push(["logSnippetError", n, e.message]), (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && console.log(`%cCSQ INTEGRATION ERROR: [${n}] : ${e.message}`, "color:rgb(228, 25, 45); font-weight: bold")
        }
    }

    function i(e, n) {
        function t(e) {
            return "object" == typeof e && null !== e
        }
        if (t(window.CS_INTEGRATIONS_CONF) && t(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e][n]
    }
    t.r(n);

    function u(e, n) {
        !!(window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color: #2a9d8f; font-weight: bold")
    }
    var r = t(0);
    const a = function(e) {
            let n, t, i, u;
            if (o((function() {
                    const o = e.name;
                    n = e.version;
                    const r = o.replace("@contentsquare/integration-", "");
                    t = r + "-" + n;
                    let a = "-contentsquare";
                    u = new RegExp(a + "$").test(r), i = r.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), u || (a = "-cap", u = new RegExp(a + "$").test(r), i = r.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), u) return {
                snippetBuildName: t,
                parameterName: i,
                snippetVersion: n
            }
        }(t(1)),
        c = a.parameterName,
        d = a.snippetBuildName,
        l = a.snippetVersion;
    o((function() {
        const e = r.displayName,
            n = r.dvarPrefix;
        var t, a;
        t = e, a = l, CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push(t + " - v" + a);
        const s = i(c, "settings"),
            f = (p = s, Array.isArray(p) ? s : []);
        var p;
        const m = f.includes("enableVideoStarted"),
            w = f.includes("enableVideoPaused"),
            b = f.includes("enableVideoCompleted"),
            g = f.includes("enableVideoPlayDuration"),
            y = f.includes("enableVideoQuality"),
            v = f.includes("enableVolumeChanged"),
            h = f.includes("enableVideoMuted");

        function _(e, t) {
            (function(e, n) {
                window._uxa = window._uxa || [], window._uxa.push(["trackDynamicVariable", {
                    key: e,
                    value: n
                }])
            })(e = n + e, t), u(d, `Dynamic variable with ${e} and value ${t} sent`)
        }
        const O = 'iframe[src^="https://www.youtube.com/embed/"]',
            S = 'iframe[src^="https://www.youtube-nocookie.com/embed/"]';
        let N = !1,
            x = document.querySelectorAll(O);

        function V() {
            o((function() {
                const e = [];
                let n = "",
                    t = 0,
                    i = "",
                    u = 0,
                    r = 0,
                    a = 0;
                window.addEventListener("message", (function(c) {
                    const l = c.data;
                    "https://www.youtube.com" !== c.origin && "https://www.youtube-nocookie.com" !== c.origin || !l || o((function() {
                        const o = function(e) {
                            let n;
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                return !1
                            }
                            return n
                        }(l);
                        if (o && o.info && (o.info.videoData && o.info.videoData.video_id && (n = o.info.videoData.video_id), o.info.duration && (t = o.info.duration), t && n)) {
                            if (void 0 !== o.info.playerState && (i = o.info.playerState, !isNaN(i))) {
                                let t = "",
                                    o = "";
                                if (b && 0 === i ? (t = "complete_", o = "Video completed") : m && 1 === i ? (t = "play_", o = "Video started") : w && 2 === i && (t = "pause_", o = "Video paused"), t && o) {
                                    const i = t + n; - 1 === e.indexOf(i) && (e.push(i), _(o, "Video ID : " + n))
                                }
                            }
                            if ("infoDelivery" == o.event) {
                                if (y && o.info.playbackQuality && !o.info.duration) {
                                    const e = o.info.playbackQuality;
                                    e && _("Video quality", "Video ID : " + n + " - Quality : " + e)
                                }
                                if (h && o.info.muted) {
                                    const t = "muted_" + n; - 1 === e.indexOf(t) && (e.push(t), _("Video muted", "Video ID : " + n))
                                }
                                if (v && void 0 !== o.info.volume) {
                                    const t = "initialvolume_" + n;
                                    if (-1 === e.indexOf(t) && (e.push(t), r = o.info.volume), a = o.info.volume, a != r) {
                                        const t = "volumechanged_" + n; - 1 === e.indexOf(t) && (e.push(t), a = r, _("Video volume changed", "Video ID : " + n))
                                    }
                                }
                                if (g && o.info.currentTime && (u = o.info.currentTime, !isNaN(u))) {
                                    u = Math.round(u);
                                    const o = Math.round(u / t * 100);
                                    let i = "";
                                    if (o >= 25 && (i = "25"), o >= 50 && (i = "50"), o >= 75 && (i = "75"), 100 === o && (i = "100"), i) {
                                        const t = "videoduration_" + i + "_" + n; - 1 === e.indexOf(t) && (e.push(t), _("Video play view duration", "Video ID : " + n + " : " + i + "%"))
                                    }
                                }
                            }
                        }
                    }), d)
                }));
                for (let e = 0; e < x.length; e++) {
                    const n = x[e];
                    n.contentWindow && "function" == typeof n.contentWindow.postMessage && (N ? n.contentWindow.postMessage('{"event":"listening"}', "https://www.youtube-nocookie.com") : n.contentWindow.postMessage('{"event":"listening"}', "https://www.youtube.com"))
                }
            }), d)
        }
        if (0 === x.length && (x = document.querySelectorAll(S), x.length > 0 && (N = !0)), 0 === x.length) {
            const e = new MutationObserver((function() {
                o((function() {
                    if (document.querySelector(O) || document.querySelector(S)) {
                        x = document.querySelectorAll(O), 0 === x.length && (x = document.querySelectorAll(S), x.length > 0 && (N = !0)), e.disconnect();
                        for (let e = 0; e < x.length; e++) x[e].addEventListener("load", (function(e) {
                            V()
                        }))
                    }
                }), d)
            }));
            e.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            })
        } else setTimeout((function() {
            V()
        }), 500)
    }), d)
}]);
/* integration-usertesting 3.2.0 */
! function(e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: i
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (t.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(i, r, function(n) {
                return e[n]
            }.bind(null, r));
        return i
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 2)
}([function(e) {
    e.exports = JSON.parse('{"displayName":"UserTesting","dvarPrefix":"UGC_UT_","apvPrefix":"cs_usertesting","replayKey":"ut"}')
}, function(e) {
    e.exports = JSON.parse('{"name":"@contentsquare/integration-usertesting-contentsquare","version":"3.2.0","scripts":{"build:snippet":"webpack"}}')
}, function(e, n, t) {
    "use strict";

    function i(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], window._uxa.push(["logSnippetError", n, e.message]), (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && console.log(`%cCSQ INTEGRATION ERROR: [${n}] : ${e.message}`, "color:rgb(228, 25, 45); font-weight: bold")
        }
    }

    function r(e, n) {
        function t(e) {
            return "object" == typeof e && null !== e
        }
        if (t(window.CS_INTEGRATIONS_CONF) && t(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e][n]
    }

    function o(e, n) {
        n || (n = "="), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&=]" + e + n + "([^&#]*)").exec(location.search);
        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    }
    t.r(n);

    function a(e, n) {
        !!(window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color: #2a9d8f; font-weight: bold")
    }
    var u = t(0);
    const c = function(e) {
            let n, t, r, o;
            if (i((function() {
                    const i = e.name;
                    n = e.version;
                    const a = i.replace("@contentsquare/integration-", "");
                    t = a + "-" + n;
                    let u = "-contentsquare";
                    o = new RegExp(u + "$").test(a), r = a.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), o || (u = "-cap", o = new RegExp(u + "$").test(a), r = a.replace(/-cap([^-cap]*)$/, "$1"))
                }), "Shared-Function-readPackageJSON"), o) return {
                snippetBuildName: t,
                parameterName: r,
                snippetVersion: n
            }
        }(t(1)),
        s = c.parameterName,
        p = c.snippetBuildName,
        d = c.snippetVersion;
    i((function() {
        const e = u.displayName,
            n = u.dvarPrefix,
            t = (u.apvPrefix, u.replayKey);
        var c, l;
        c = e, l = d, CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push(c + " - v" + l);
        const f = r(s, "settings"),
            w = (g = f, Array.isArray(g) ? f : []);
        var g;
        const _ = w.includes("sendArtificialPageviews"),
            m = w.includes("setReplayLinkToCurrentPV");
        let x = !1;
        const y = document.location.search;
        if (y.indexOf("utm_source=UserTesting") > -1 && y.indexOf("utm_campaign=") > -1 && y.indexOf("utm_content=") > -1) {
            const e = o("utm_campaign"),
                r = o("utm_content");
            r && function(e, n, t, i) {
                return new Promise((function(r, o) {
                    function a() {
                        window._uxa.push(["replay:link:generate", {
                            withTimestamp: t
                        }, u])
                    }

                    function u(i) {
                        if (i && i.replayLink && i.isRecording) {
                            let o = "https://" + i.replayLink + "&vd=" + e;
                            if (!n && !t) {
                                const e = new URLSearchParams(o);
                                e.set("pvid", 1);
                                const n = e.toString();
                                o = decodeURIComponent(n)
                            }
                            r(o)
                        }
                    }
                    e || (e = "missingFromDynamicSnippet"), t || (t = !1), i ? a() : (window._uxa = window._uxa || [], window._uxa.push(["onRecordingStateChange", function(e) {
                        e && e.isRecording && a()
                    }]))
                }))
            }(t, m).then((function(e) {
                i((function() {
                    if (x = !0, e) {
                        ! function(e, n) {
                            const t = new XMLHttpRequest;
                            t.open("POST", e), t.setRequestHeader("Content-Type", "application/json"), t.send(n)
                        }("https://cloudhub-prod.usertesting.com/usertesting/api/v1/partner-analytics", JSON.stringify({
                            usertesting_eid: r,
                            external_link: e,
                            partner_name: "Contentsquare"
                        }))
                    }
                }), p)
            })), e && (O = "etr", S = "cs_usertesting=study_id_" + e, function(e, n) {
                window._uxa = window._uxa || [], window._uxa.push(["trackDynamicVariable", {
                    key: e,
                    value: n
                }])
            }(b = n + (b = "Study ID"), v = e), x && "etr" === O && function(e) {
                window._uxa = window._uxa || [], window._uxa.push(["trackEventTriggerRecording", "@ETS@" + e])
            }(b), S && _ && function(e) {
                window._uxa = window._uxa || [], window._uxa.push(["trackPageview", e])
            }(window.location.pathname + "?" + S), a(p, `Dynamic variable with ${b} and value ${v} sent`))
        }
        var b, v, O, S
    }), p)
}]);
/* integration-optimizely 2.9.2 */
(() => {
    "use strict";

    function e(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], window._uxa.push(["logSnippetError", n, e]), (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (console.log(`%cCSQ INTEGRATION ERROR: [${n}] : ${e.message}`, "color:rgb(228, 25, 45); font-weight: bold"), console.log(e))
        }
    }

    function n(e) {
        window._uxa = window._uxa || [], window._uxa.push(["event", e])
    }

    function t(e, n, t) {
        if ((t = t || window) && n && e) {
            let i = !1,
                o = t[e];
            o ? n() : Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    o = e, i || (i = !0, n())
                }
            })
        }
    }

    function i(e) {
        return e && "string" == typeof e ? e.replace(/[\W_]+/g, "-") : ""
    }
    const o = JSON.parse('{"QC":"Optimizely","Mz":"AB_OP_","be":"OP_"}'),
        a = function(n) {
            let t, i, o, a;
            if (e(function() {
                    const e = n.name;
                    t = n.version;
                    const c = e.replace("@contentsquare/integration-", "");
                    i = c + "-" + t;
                    let r = "-contentsquare";
                    a = new RegExp(r + "$").test(c), o = c.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), a || (r = "-cap", a = new RegExp(r + "$").test(c), o = c.replace(/-cap([^-cap]*)$/, "$1"))
                }, "Shared-Function-readPackageJSON"), a) return {
                snippetBuildName: i,
                parameterName: o,
                snippetVersion: t
            }
        }(JSON.parse('{"name":"@contentsquare/integration-optimizely-contentsquare","version":"2.9.2","scripts":{"build:snippet":"npx webpack"}}')),
        c = (a.parameterName, a.snippetBuildName),
        r = a.snippetVersion;
    e(function() {
        const a = o.QC,
            s = o.Mz,
            l = o.be;
        var u, p;

        function d(e, t) {
            ! function(e, n) {
                window._uxa = window._uxa || [], window._uxa.push(["trackDynamicVariable", {
                    key: e,
                    value: n
                }])
            }(e = s + e, t);
            const o = t.endsWith(" [Holdback]");
            var a, r;
            n(`${o?"HB_":""}${i(e.replace(s,""))}/${o?t.replace(" [Holdback]",""):i(t)}`), n(`${l}${i(e.replace(s,""))}-${i(t)}`),
                function(e, n, t) {
                    (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (t ? "warn" === t && console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color:rgb(255, 86, 2); font-weight: bold") : console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color: #2a9d8f; font-weight: bold"))
                }(c, (a = e, r = t, document.getElementById("csKey") && document.getElementById("csValue") && (document.getElementById("csKey").textContent = a, document.getElementById("csValue").textContent = r), `Dynamic variable with ${a} and value ${r} sent`))
        }
        u = a, p = r, CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push(u + " - v" + p);
        let m = !1;
        const g = [];
        ! function(e, n, i) {
            i = i || window;
            const o = e.split(".");
            if (1 == o.length) t(e, n, i);
            else {
                let e = i,
                    a = 0;
                const c = function() {
                    e = a > 0 ? e[o[a - 1]] : window, a++, a >= o.length ? t(o[a - 1], n, e) : t(o[a - 1], c, e)
                };
                c()
            }
        }("optimizely", function() {
            setTimeout(function() {
                e(function() {
                    function n() {
                        e(function() {
                            const e = optimizely.get && optimizely.get("state");
                            if (e && e.getCampaignStates && "function" == typeof e.getCampaignStates && "object" == typeof e.getCampaignStates()) {
                                const t = e.getCampaignStates({
                                        isActive: !0
                                    }),
                                    i = Object.keys(t);
                                if (n = i, Array.isArray(n))
                                    for (let e = 0; e < i.length; e++)
                                        if (-1 === g.indexOf(i[e])) {
                                            g.push(i[e]);
                                            const n = t[i[e]];
                                            if (n.experiment) {
                                                let e, t;
                                                e = n.experiment.name ? n.campaignName : n.experiment.id, t = n.experiment.campaignName && n.experiment.name ? n.experiment.name + " - " + n.variation.name : n.variation.name ? n.variation.name : n.variation.id, n.isInCampaignHoldback && (t += " [Holdback]"), e && t && d(e, t)
                                            }
                                        }
                            }
                            var n
                        }, c)
                    }
                    n(), m || (m = !0, window.optimizely = window.optimizely || [], "function" == typeof optimizely.push && optimizely.push({
                        type: "addListener",
                        filter: {
                            type: "lifecycle",
                            name: "campaignDecided"
                        },
                        handler: n
                    }))
                }, c)
            }, 500)
        })
    }, c)
})();
/* integration-qualtrics 3.2.2 */
(() => {
    "use strict";

    function e(e, t) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], window._uxa.push(["logSnippetError", t, e]), (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (console.log(`%cCSQ INTEGRATION ERROR: [${t}] : ${e.message}`, "color:rgb(228, 25, 45); font-weight: bold"), console.log(e))
        }
    }

    function t(e, t) {
        let n = !1;
        window._uxa = window._uxa || [], window._uxa.push(["afterPageView", function(i) {
            t ? n || (e(i), n = !0) : e(i)
        }])
    }

    function n(e) {
        const t = e + "=",
            n = document.cookie.split(";");
        for (let e = 0; e < n.length; e++) {
            let i = n[e];
            for (;
                " " == i.charAt(0);) i = i.substring(1, i.length);
            if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }

    function i() {
        let e = 0,
            t = document.location.host;
        const n = t.split("."),
            i = "_cs_tld" + (new Date).getTime();
        for (; e < n.length - 1 && -1 == document.cookie.indexOf(i + "=" + i);) t = n.slice(-1 - ++e).join("."), document.cookie = i + "=" + i + ";domain=" + t + ";SameSite=None;Secure";
        return document.cookie = i + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + t + ";Secure", t
    }

    function o(e) {
        return e.toString().replace(/[^\w. ]/gi, function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        })
    }

    function c(e) {
        return Array.isArray(e)
    }

    function a(e, t) {
        t || (t = "="), e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = new RegExp("[\\?&=]" + e + t + "([^&#]*)").exec(location.search);
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }
    const s = JSON.parse('{"QC":"Qualtrics","Mz":"FB_QT_","ir":"cs_qualtrics","X3":"qt"}'),
        u = function(t) {
            let n, i, o, c;
            if (e(function() {
                    const e = t.name;
                    n = t.version;
                    const a = e.replace("@contentsquare/integration-", "");
                    i = a + "-" + n;
                    let s = "-contentsquare";
                    c = new RegExp(s + "$").test(a), o = a.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), c || (s = "-cap", c = new RegExp(s + "$").test(a), o = a.replace(/-cap([^-cap]*)$/, "$1"))
                }, "Shared-Function-readPackageJSON"), c) return {
                snippetBuildName: i,
                parameterName: o,
                snippetVersion: n
            }
        }(JSON.parse('{"name":"@contentsquare/integration-qualtrics-contentsquare","version":"3.2.2","scripts":{"build:snippet":"npx webpack"}}')),
        r = u.parameterName,
        d = u.snippetBuildName,
        l = u.snippetVersion;
    e(function() {
        const u = s.QC,
            p = s.Mz,
            f = s.ir,
            g = s.X3;
        var _, S;
        _ = u, S = l, CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push(_ + " - v" + S);
        let w = !1;
        window.self != window.top && (w = CS_CONF.iframesTracking);
        const m = function(e) {
                function t(e) {
                    return "object" == typeof e && null !== e
                }
                if (t(window.CS_INTEGRATIONS_CONF) && t(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e].settings
            }(r),
            C = c(m) ? m : [],
            I = C.includes("sendArtificialPageviews"),
            h = C.includes("setReplayLinkToCurrentPV");
        let y = !1;

        function D(e, t, n, i) {
            var o, c, a;
            (function(e, t) {
                window._uxa = window._uxa || [], window._uxa.push(["trackDynamicVariable", {
                    key: e,
                    value: t
                }])
            })(e = p + ((a = e) ? ((new DOMParser).parseFromString(a, "text/html").body.textContent || "").trim() : ""), t), y && "etr" === n && function(e) {
                    window._uxa = window._uxa || [], window._uxa.push(["trackEventTriggerRecording", "@ETS@" + e])
                }(e), i && I && function(e) {
                    window._uxa = window._uxa || [], window._uxa.push(["trackPageview", e])
                }(window.location.pathname + "?" + i),
                function(e, t, n) {
                    (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (n ? "warn" === n && console.log(`%cCSQ INTEGRATION: [${e}] : ${t}`, "color:rgb(255, 86, 2); font-weight: bold") : console.log(`%cCSQ INTEGRATION: [${e}] : ${t}`, "color: #2a9d8f; font-weight: bold"))
                }(d, (o = e, c = t, document.getElementById("csKey") && document.getElementById("csValue") && (document.getElementById("csKey").textContent = o, document.getElementById("csValue").textContent = c), `Dynamic variable with ${o} and value ${c} sent`))
        }

        function b() {
            const e = {
                contentsquare_integration: n("_cs_s"),
                vendor: "qualtrics"
            };
            window.opener ? window.opener.postMessage(e, "*") : window.self != window.top && window.top.postMessage(e, "*")
        }
        if (window.Qualtrics && Qualtrics.SurveyEngine && "function" == typeof Qualtrics.SurveyEngine.addOnPageSubmit) {
            if (!w) {
                let v;
                if (window._cs_integration_qualtrics_postmessage_csid || window.ClickTaleSettings && ClickTaleSettings.PTC && ClickTaleSettings.PTC.IntegrationHandler && ClickTaleSettings.PTC.IntegrationHandler.UserValues) window._cs_integration_qualtrics_postmessage_csid ? v = _cs_integration_qualtrics_postmessage_csid : ClickTaleSettings.PTC.IntegrationHandler.UserValues && (v = ClickTaleSettings.PTC.IntegrationHandler.UserValues);
                else {
                    const x = document.location.search;
                    x.indexOf("CSID=") > -1 ? v = a("CSID") : CS_CONF.ptcDomain && x.indexOf("CT_UID=") > -1 ? v = a("CT_UID") : window._cs_integration_qualtrics_csid && (v = decodeURIComponent(_cs_integration_qualtrics_csid))
                }
                if (v && "null" != v) {
                    const E = v.split("~"),
                        N = E[0],
                        O = E[1],
                        q = E[2],
                        R = E[3],
                        P = i();
                    N && O && q && (R ? document.cookie = "_cs_optout=" + R + ";domain=" + P + ";path=/;SameSite=None;Secure" : (document.cookie = "_cs_optout=;domain=" + P + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure", document.cookie = "_cs_optout=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure", document.cookie = "_cs_optout=;domain=." + document.location.host + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;SameSite=None;Secure"), document.cookie = "_cs_id=" + N + ";domain=" + P + ";path=/;SameSite=None;Secure", document.cookie = "_cs_s=" + O + ";domain=" + P + ";path=/;SameSite=None;Secure", document.cookie = "_cs_c=" + q + ";domain=" + P + ";path=/;SameSite=None;Secure")
                }
            }
            let T;

            function k() {
                if (!w) {
                    let t = n("_cs_s");
                    if (t && t.indexOf(".T.") > -1) {
                        const i = setInterval(function() {
                            e(function() {
                                t = n("_cs_s"), t && -1 === t.indexOf(".T.") && (clearInterval(i), b())
                            }, d)
                        }, 500)
                    } else b()
                }
            }
            if (window.Page ? T = !1 : window.q && (T = !0), setTimeout(function() {
                    (function(e, t, n, i) {
                        return new Promise(function(o, c) {
                            function a() {
                                window._uxa.push(["replay:link:generate", {
                                    withTimestamp: n
                                }, s])
                            }

                            function s(i) {
                                if (i && i.replayLink && i.isRecording) {
                                    let c = "https://" + i.replayLink + "&vd=" + e;
                                    if (!t && !n) {
                                        const e = new URLSearchParams(c);
                                        e.set("pvid", 1);
                                        const t = e.toString();
                                        c = decodeURIComponent(t)
                                    }
                                    o(c)
                                }
                            }
                            e || (e = "missingFromDynamicSnippet"), n || (n = !1), i ? a() : (window._uxa = window._uxa || [], window._uxa.push(["onRecordingStateChange", function(e) {
                                e && e.isRecording && a()
                            }]))
                        })
                    })(g, h, !1, w).then(function(t) {
                        e(function() {
                            if (y = !0, t && Qualtrics.SurveyEngine) {
                                const e = Qualtrics.SurveyEngine;
                                let n;
                                CS_CONF.ptcDomain && (n = "ClicktaleSpecificRecording", !0 === T && "function" == typeof e.setJSEmbeddedData ? e.setJSEmbeddedData(n, t) : !1 === T && "function" == typeof e.setEmbeddedData && e.setEmbeddedData(n, t)), n = "ContentsquareReplayLink", !0 === T && "function" == typeof e.setJSEmbeddedData ? e.setJSEmbeddedData(n, t) : !1 === T && "function" == typeof e.setEmbeddedData && e.setEmbeddedData(n, t)
                            }
                        }, d)
                    })
                }, 500), t(k, !1), window.addEventListener("Contentsquare_QT_Integration_Dispatcher", function(t) {
                    e(function() {
                        if (t && "object" == typeof t.detail && "string" == typeof t.detail.key && "string" == typeof t.detail.value) {
                            let e = t.detail.key;
                            const n = t.detail.value;
                            "FB_QT_" === e.slice(0, 6) && (e = e.slice(6)), D(e, n)
                        }
                    }, d)
                }), !1 === T && "function" == typeof Page.getSessionId && Page.runtime && Page.runtime.ED && Page.runtime.ED.SurveyID && Page._questionRenderers && Qualtrics.SurveyEngine.QuestionInfo) {
                const F = Page.runtime.ED.SurveyID,
                    Q = Page.getSessionId().replace("FS_", "R_");
                D("Feedback Displayed", "Survey ID : " + F);
                let A = !1,
                    V = !1,
                    $ = !1;
                const B = [];

                function U() {
                    const e = Qualtrics.SurveyEngine.QuestionInfo,
                        t = Object.keys(e);
                    if (c(t))
                        for (let e = 0; e < t.length; e++) {
                            const n = Qualtrics.SurveyEngine.QuestionInfo[t[e]].Selector;
                            if (n && "TB" != n) {
                                V = !0;
                                break
                            }
                        }
                }

                function J() {
                    e(function() {
                        U(), A || (A = !0, D("Feedback Accepted", "Survey ID : " + F, 0, f + "=feedback_accepted_" + F)), setTimeout(function() {
                            e(function() {
                                V && !$ && !1 === Page.runtime.FailedValidation && ($ = !0, D("Feedback Submitted", "Survey ID : " + F, "etr", f + "=feedback_submitted_" + F), D("Feedback Response ID", Q))
                            }, d)
                        }, 2e3);
                        const t = Page._questionRenderers,
                            n = Object.keys(t);
                        if (c(n))
                            for (let e = 0; e < n.length; e++) {
                                const i = t[n[e]].runtime;
                                if (i && i.Selector && i.QuestionText && i.Displayed) {
                                    const t = i.QuestionText;
                                    if ("NPS" === i.Selector && i.Selected) {
                                        const o = parseInt(i.Selected);
                                        B.includes(n[e] + "~~~" + o) || (B.push(n[e] + "~~~" + o), D("NPS Rating - " + n[e] + " - " + F + " - " + t, o), D("NPS Rating - " + n[e] + " - " + F, o))
                                    }
                                    if ("STAR" === i.Selector) {
                                        const t = i.Choices,
                                            o = Object.keys(t);
                                        if (c(o))
                                            for (let i = 0; i < o.length; i++) {
                                                const c = t[o[i]].Display;
                                                if (t[o[i]].Value) {
                                                    const a = parseInt(t[o[i]].Value);
                                                    B.includes(n[e] + " (" + (i + 1) + ")~~~" + a) || (B.push(n[e] + " (" + (i + 1) + ")~~~" + a), D("Star Rating - " + n[e] + " (" + (i + 1) + ") - " + F + " - " + c, a), D("Star Rating - " + n[e] + " (" + (i + 1) + ") - " + F, a))
                                                }
                                            }
                                    }
                                    if ("SAVR" === i.Selector || "SAHR" === i.Selector) {
                                        const t = i.Selected;
                                        if (t && i.Choices) {
                                            const o = i.Choices[t].ID;
                                            o && (B.includes(n[e] + "~~~AID" + o) || (B.push(n[e] + "~~~AID" + o), D(n[e] + " - " + F, "AID" + o)))
                                        }
                                    }
                                    if ("MAVR" === i.Selector && i.Choices) {
                                        const t = i.Choices,
                                            o = Object.keys(t);
                                        if (c(o))
                                            for (let i = 0; i < o.length; i++)
                                                if (t[o[i]].Selected) {
                                                    const c = t[o[i]].ID;
                                                    c && (B.includes(n[e] + "~~~AID" + c) || (B.push(n[e] + "~~~AID" + c), D(n[e] + " - " + F, "AID" + c)))
                                                }
                                    }
                                    if ("Likert" === i.Selector && i.Choices) {
                                        const t = i.Choices,
                                            o = Object.keys(t);
                                        if (c(o))
                                            for (let i = 0; i < o.length; i++) {
                                                const c = t[o[i]].Selected;
                                                if (c && !B.includes(n[e] + "~~~" + c)) {
                                                    const a = t[o[i]].ID;
                                                    a && (B.push(n[e] + "~~~" + c), D(n[e] + " - " + F + " - AID" + a, c))
                                                }
                                            }
                                    }
                                }
                            }
                        setTimeout(function() {
                            document.getElementById("NextButton") || D("Feedback Completed", "Survey ID : " + F, 0, f + "=feedback_completed_" + F)
                        }, 2e3), Qualtrics.SurveyEngine.addOnPageSubmit(J)
                    }, d)
                }
                U(), Qualtrics.SurveyEngine.addOnPageSubmit(J)
            } else if (!0 === T && window.q.init && window.q.init.appData && window.q.init.appData.setup && window.q.init.appData.setup.survey && window.q.init.appData.setup.survey.id && window.q.init.appData.session && window.q.init.appData.session.id) {
                const M = window.q.init.appData.setup.survey.id,
                    G = window.q.init.appData.session.id.replace("FS_", "R_");
                D("Feedback Displayed", "Survey ID : " + M);
                let L = !1;

                function j() {
                    e(function() {
                        L || (L = !0, D("Feedback Submitted", "Survey ID : " + M, "etr", f + "=feedback_submitted_" + M), D("Feedback Response ID", G)), setTimeout(function() {
                            e(function() {
                                document.getElementById("next-button") || D("Feedback Completed", "Survey ID : " + M, 0, f + "=feedback_completed_" + M)
                            }, d)
                        }, 2e3), Qualtrics.SurveyEngine.addOnPageSubmit(j)
                    }, d)
                }
                Qualtrics.SurveyEngine.addOnPageSubmit(j)
            }
        } else if (!w) {
            function H(t) {
                const n = t.data;
                n && (n.contentsquare_integration && "qualtrics" === n.vendor && e(function() {
                    const e = n.contentsquare_integration,
                        t = e.split("."),
                        c = Number(t[t.length - 1]),
                        a = new Date(c).toUTCString();
                    if (window.CS_CONF && CS_CONF.allowSubdomains) {
                        const t = i();
                        document.cookie = "_cs_s=" + o(e) + ";expires=" + a + ";domain=" + t + ";path=/;Secure"
                    } else document.cookie = "_cs_s=" + o(e) + ";expires=" + a + ";path=/;Secure";
                    X()
                }, d), n.message && "Contentsquare_QT_Integration_Ready" === n.message && e(function() {
                    const e = {
                        message: "Contentsquare_QT_Integration_Launch",
                        user_values: z()
                    };
                    t.source.postMessage(e, "*")
                }, d))
            }

            function z() {
                const e = n("_cs_id"),
                    t = n("_cs_c"),
                    i = n("_cs_optout");
                return e + "~" + K + "~" + t + "~" + i
            }
            let K;

            function X() {
                function t() {
                    const e = z();
                    localStorage.setItem("CSID", e), CS_CONF.ptcDomain && (localStorage.setItem("CT_UID", e), sessionStorage.setItem("CT_UID", e)), sessionStorage.setItem("CSID", e)
                }
                if (K = n("_cs_s"), K && K.indexOf(".T.") > -1) {
                    const i = setInterval(function() {
                        e(function() {
                            K = n("_cs_s"), K && -1 === K.indexOf(".T.") && (clearInterval(i), t())
                        }, d)
                    }, 500)
                } else t()
            }
            window.addEventListener("message", H), t(X, !1)
        }
    }, d)
})();
/* integration-blue-triangle 3.2.2 */
(() => {
    "use strict";

    function e(e, n) {
        try {
            e()
        } catch (e) {
            window._uxa = window._uxa || [], window._uxa.push(["logSnippetError", n, e]), (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (console.log(`%cCSQ INTEGRATION ERROR: [${n}] : ${e.message}`, "color:rgb(228, 25, 45); font-weight: bold"), console.log(e))
        }
    }

    function n(e, n) {
        function t(e) {
            return "object" == typeof e && null !== e
        }
        if (t(window.CS_INTEGRATIONS_CONF) && t(window.CS_INTEGRATIONS_CONF[e])) return window.CS_INTEGRATIONS_CONF[e][n]
    }

    function t(e, n, t) {
        if ((t = t || window) && n && e) {
            let o = !1,
                i = t[e];
            i ? n() : Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(e) {
                    i = e, o || (o = !0, n())
                }
            })
        }
    }
    const o = JSON.parse('{"QC":"Blue Triangle","Mz":"APM_BT_","X3":"bt"}'),
        i = function(n) {
            let t, o, i, s;
            if (e(function() {
                    const e = n.name;
                    t = n.version;
                    const r = e.replace("@contentsquare/integration-", "");
                    o = r + "-" + t;
                    let c = "-contentsquare";
                    s = new RegExp(c + "$").test(r), i = r.replace(/-contentsquare([^-contentsquare]*)$/, "$1"), s || (c = "-cap", s = new RegExp(c + "$").test(r), i = r.replace(/-cap([^-cap]*)$/, "$1"))
                }, "Shared-Function-readPackageJSON"), s) return {
                snippetBuildName: o,
                parameterName: i,
                snippetVersion: t
            }
        }(JSON.parse('{"name":"@contentsquare/integration-blue-triangle-contentsquare","version":"3.2.2","scripts":{"build:snippet":"npx webpack"}}')),
        s = i.parameterName,
        r = i.snippetBuildName,
        c = i.snippetVersion;
    e(function() {
        const i = o.QC,
            a = o.Mz,
            u = o.X3;
        var l, d;
        l = i, d = c, CS_CONF.integrations = CS_CONF.integrations || [], CS_CONF.integrations.push(l + " - v" + d);
        const p = n(s, "settings");
        var g;
        const w = (g = p, Array.isArray(g) ? p : []).includes("setReplayLinkToCurrentPV");

        function f(e, n) {
            var t, o;
            (function(e, n) {
                window._uxa = window._uxa || [], window._uxa.push(["trackDynamicVariable", {
                    key: e,
                    value: n
                }])
            })(e = a + e, n),
            function(e, n, t) {
                (window.csqDebuggerEnabled || document.location.href.indexOf("csqDebuggerEnabled=true") > -1) && (t ? "warn" === t && console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color:rgb(255, 86, 2); font-weight: bold") : console.log(`%cCSQ INTEGRATION: [${e}] : ${n}`, "color: #2a9d8f; font-weight: bold"))
            }(r, (t = e, o = n, document.getElementById("csKey") && document.getElementById("csValue") && (document.getElementById("csKey").textContent = t, document.getElementById("csValue").textContent = o), `Dynamic variable with ${t} and value ${o} sent`))
        }! function(e, n, o) {
            o = o || window;
            const i = e.split(".");
            if (1 == i.length) t(e, n, o);
            else {
                let e = o,
                    s = 0;
                const r = function() {
                    e = s > 0 ? e[i[s - 1]] : window, s++, s >= i.length ? t(i[s - 1], n, e) : t(i[s - 1], r, e)
                };
                r()
            }
        }("bttUT", function() {
            setTimeout(function() {
                e(function() {
                    if (bttUT.sessionID) {
                        const e = bttUT.sessionID,
                            o = n(s, "vendorSettings"),
                            i = ("object" == typeof(t = o) && null !== t ? o : {}).siteID;
                        if (!isNaN(i)) {
                            let n = new Date;
                            n.setHours(n.getHours() - 2), n = Date.parse(n);
                            let t = new Date;
                            t.setHours(t.getHours() + 1), t = Date.parse(t), f("Session Link", "https://portal.bluetriangle.com/btportal/web/index.php?r=real-user-monitoring%2Fperformance-detail&sid=" + i + "&startEpochTime=" + n + "&endEpochTime=" + t + "&sessionID=" + e)
                        }
                        f("SessionID", e)
                    }
                    var t;
                    (function(e, n, t) {
                        return new Promise(function(o, i) {
                            function s() {
                                window._uxa.push(["replay:link:generate", {
                                    withTimestamp: t
                                }, r])
                            }

                            function r(i) {
                                if (i && i.replayLink && i.isRecording) {
                                    let s = "https://" + i.replayLink + "&vd=" + e;
                                    if (!n && !t) {
                                        const e = new URLSearchParams(s);
                                        e.set("pvid", 1);
                                        const n = e.toString();
                                        s = decodeURIComponent(n)
                                    }
                                    o(s)
                                }
                            }
                            e || (e = "missingFromDynamicSnippet"), t || (t = !1), window._uxa = window._uxa || [], window._uxa.push(["onRecordingStateChange", function(e) {
                                e && e.isRecording && s()
                            }])
                        })
                    })(u, w).then(function(n) {
                        e(function() {
                            const e = CS_CONF.projectId;
                            e && n && bttUT.ctGif && bttUT.ctGif({
                                csPID: e,
                                csReplayURL: n
                            })
                        }, r)
                    })
                }, r)
            }, 6e3)
        })
    }, r)
})();
(() => {
    var Wh = Object.defineProperty;
    var Yh = (s, r, t) => r in s ? Wh(s, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : s[r] = t;
    var ge = (s, r, t) => Yh(s, typeof r != "symbol" ? r + "" : r, t);
    var le = {};
    le.d = (s, r) => {
        for (var t in r) le.o(r, t) && !le.o(s, t) && Object.defineProperty(s, t, {
            enumerable: !0,
            get: r[t]
        })
    };
    le.g = function() {
        if (typeof globalThis == "object") return globalThis;
        try {
            return this || new Function("return this")()
        } catch {
            if (typeof window == "object") return window
        }
    }();
    le.o = (s, r) => Object.prototype.hasOwnProperty.call(s, r);
    le.r = s => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(s, "__esModule", {
            value: !0
        })
    };
    var $n = {};
    le.r($n);
    le.d($n, {
        getRequestParameters: () => op
    });

    function ws(s, r) {
        let t;
        return window.Zone && typeof window.Zone.__symbol__ == "function" && (t = s[window.Zone.__symbol__(r)]), t != null ? t : s[r]
    }
    var at = (() => {
        let s;
        return function(r) {
            r.debug = "debug", r.warn = "warn", r.implementation = "implementation", r.error = "error", r.critical = "critical"
        }(s || (s = {})), s
    })();

    function Jt(s) {
        return Z(s) && (typeof s == "number" || s instanceof Number) && !isNaN(s)
    }

    function ms(s) {
        return s === parseInt(s, 10)
    }

    function q(s) {
        return Z(s) && (typeof s == "string" || s instanceof csString)
    }

    function or(s) {
        return typeof s == "boolean"
    }

    function pi(s) {
        return typeof s == "object"
    }

    function Z(s) {
        return typeof s != "undefined"
    }

    function Mt(s) {
        return Z(s) && s !== null
    }

    function tc(s) {
        return typeof s == "object" && s !== null
    }

    function Xh(s, r, t) {
        return ms(s) && s >= r && s <= t
    }

    function mn(s) {
        for (let r in s) return !1;
        return !0
    }

    function Ze(s) {
        return typeof s == "function"
    }

    function wi(s) {
        return s instanceof Element
    }

    function Te(s) {
        return s instanceof Error
    }

    function zn(s) {
        let r = s.length;
        for (let t = 0; t < r; t++) switch (csString.prototype.charCodeAt.call(s, t)) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
                continue;
            default:
                return !1
        }
        return !0
    }
    var xr = {
            [at.debug]: 0,
            [at.warn]: 1,
            [at.implementation]: 1,
            [at.error]: 2,
            [at.critical]: 3
        },
        it = {
            debug(...s) {},
            warn(...s) {},
            implementation(...s) {},
            error(...s) {},
            critical(...s) {},
            isPerfLoggingActive() {
                return !1
            }
        };

    function Kh(s) {
        it = s
    }
    var V = s => (r, t, e) => {
        let i = (t == null ? void 0 : t.toString()) || "",
            n = s || `${r.constructor&&r.constructor.name}.${i}`;
        if (e) {
            let o = e.value;
            e.value = function(...c) {
                return ys(n, o.bind(this))(...c)
            }
        }
    };

    function ys(s, r) {
        return function(...t) {
            try {
                let e = r.apply(this, t);
                return Z(self.Promise) && e instanceof self.Promise ? e.then(i => i, i => it.error(Te(i) ? i : new Error(i), s)) : e
            } catch (e) {
                try {
                    it.error(Te(e) ? e : new Error(e), s)
                } catch {}
            }
        }
    }

    function lt(s, r, t, e) {
        var i = arguments.length,
            n = i < 3 ? r : e === null ? e = Object.getOwnPropertyDescriptor(r, t) : e,
            o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(s, r, t, e);
        else
            for (var c = s.length - 1; c >= 0; c--)(o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
        return i > 3 && n && Object.defineProperty(r, t, n), n
    }

    function qn(s) {
        let r = new ArrayBuffer(s.length),
            t = new Uint8Array(r);
        for (let e = 0, i = s.length; e < i; e += 1) t[e] = csString.prototype.charCodeAt.call(s, e);
        return r
    }

    function Uo(s) {
        let r = new Uint8Array(s),
            t = "";
        for (let e = 0; e < r.byteLength; e += 1) t += csString.fromCodePoint(r[e]);
        return t
    }

    function ec(s) {
        let r = self.atob(s);
        return qn(r)
    }

    function yn(s) {
        let r = csArray.from(new Uint8Array(s));
        return csArray.prototype.join.call(csArray.prototype.map.call(r, t => csString.prototype.padStart.call(t.toString(16), 2, "0")), "")
    }

    function jo(s) {
        let r = csString.prototype.indexOf.call(s, ";base64,") !== -1,
            t = csString.prototype.indexOf.call(s, ","),
            e = r ? [csString.prototype.substring.call(s, 0, t - 7), csString.prototype.substring.call(s, t + 1)] : [csString.prototype.substring.call(s, 0, t), csString.prototype.substring.call(s, t + 1)];
        if (!r && /^%3Csvg/i.test(e[1])) try {
            e[1] = decodeURIComponent(e[1])
        } catch (o) {
            it.warn(`${o}, calling decodeURIComponent on: ${e[1]}`)
        }
        let n = r ? ec(e[1]) : qn(e[1]);
        return new Blob([n], {
            type: csString.prototype.replace.call(e[0], "data:", "")
        })
    }
    var sc = typeof performance != "undefined" && !!performance.now,
        Ho = sc ? () => performance.now() : () => csDate.now(),
        Jh = (() => {
            var s, r;
            return sc ? (r = (s = performance.timing) === null || s === void 0 ? void 0 : s.navigationStart) !== null && r !== void 0 ? r : Math.floor(performance.timeOrigin) : 0
        })(),
        Wn = 34164e6,
        M = {
            now() {
                return Math.round(Ho() + Jh)
            },
            elapsed() {
                return Ho()
            }
        };

    function Bo() {
        return Math.floor(M.now() / 1e3)
    }

    function ic() {
        return typeof window.Promise == "function"
    }

    function Qh() {
        var s;
        return typeof crypto != "undefined" && Ze((s = crypto.subtle) === null || s === void 0 ? void 0 : s.digest)
    }

    function Fo() {
        var s, r;
        return typeof((s = window.navigation) === null || s === void 0 ? void 0 : s.addEventListener) == "function" && typeof((r = window.navigation) === null || r === void 0 ? void 0 : r.removeEventListener) == "function"
    }

    function jt(s, r) {
        return csString.prototype.lastIndexOf.call(s, r, 0) === 0
    }

    function Ai(s, r) {
        return csString.prototype.indexOf.call(s, r, s.length - r.length) !== -1
    }
    var Zh = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Es = {
            percentage() {
                return Math.floor(Math.random() * 1e4) / 100
            },
            boolean(s) {
                return this.percentage() < s
            },
            integer(s = Zh) {
                return Math.floor(Math.random() * s)
            }
        },
        Ti = typeof window == "undefined";

    function tu() {
        return typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof le.g != "undefined" ? le.g : typeof process != "undefined" ? process : Function("return this")()
    }
    var st = tu();

    function gi(s, r) {
        let t, e, i, n, o, c = null,
            l = f => {
                let d = M.elapsed();
                if (!f && c !== null) {
                    let E = r - (d - c);
                    if (E >= 1) {
                        i = st.csSetTimeout(l, E);
                        return
                    }
                }
                let m = d - n;
                i = null, c = null, n = null, o = s.apply(t, [m, ...e])
            },
            h = function() {
                if (t = this, e = arguments, n) {
                    c = M.elapsed();
                    return
                }
                return n = M.elapsed(), i = st.csSetTimeout(l, r), o
            };
        return h.flushPending = () => {
            i && (st.csClearTimeout(i), l(!0))
        }, h.cancel = () => {
            c = null, n = null, i && (st.csClearTimeout(i), i = null)
        }, h
    }

    function eu(s = 0) {
        return (r, t, e) => {
            e.value = gi(e.value, s)
        }
    }
    var Ss = (() => {
            class s {
                static setGlobalService(t) {
                    s.globalService = t
                }
                constructor(t) {
                    this.name = t, this.values = {}
                }
                reset() {
                    this.values = {}
                }
                flush(t = "") {
                    if (!s.globalService) return !1;
                    let e = this.values,
                        i = Object.keys(e);
                    if (!i.length) return !1;
                    let n = `${t===""?"":`${t}.`}${this.name}`,
                        o = csArray.prototype.map.call(i, c => ({
                            name: n,
                            parameter: c,
                            value: Math.round(e[c])
                        }));
                    return s.globalService.push(o), this.reset(), o.length > 0
                }
            }
            return s.globalService = null, lt([V()], s.prototype, "flush", null), s
        })(),
        wt = (() => {
            class s extends Ss {
                constructor(t, e = 100) {
                    super(t), this.kE = e, this.values = {}, e && (this.debouncedFlush = gi(() => this.flush(), this.kE))
                }
                count(t, e = 1) {
                    Ss.globalService && (this.values[t] = (this.values[t] || 0) + e, this.debouncedFlush())
                }
            }
            return s
        })(),
        Go = (() => {
            class s extends Ss {
                constructor() {
                    super(...arguments), this.values = {
                        average: 0,
                        count: 0,
                        max: 0,
                        total: 0
                    }
                }
                get average() {
                    return this.values.average
                }
                get count() {
                    return this.values.count
                }
                get max() {
                    return this.values.max
                }
                get total() {
                    return this.values.total
                }
                flush(t = "") {
                    return this.count === 0 ? !1 : super.flush(t)
                }
                push(t) {
                    this.values.count++, this.values.total += t, this.values.max = Math.max(this.values.max, t), this.values.average = this.values.total / this.values.count
                }
                reset() {
                    this.values = {
                        count: 0,
                        total: 0,
                        max: 0,
                        average: 0
                    }
                }
            }
            return s
        })(),
        Ns = (() => {
            class s extends Ss {
                constructor(t, e = ["max", "average", "total", "count"]) {
                    super(t), this.collecting = e
                }
                flush(t = "") {
                    let e = Object.keys(this.values);
                    return csArray.prototype.forEach.call(csArray.prototype.filter.call(e, i => !csArray.prototype.some.call(this.collecting, n => csString.prototype.endsWith.call(i, `.${n}`))), i => {
                        delete this.values[i]
                    }), super.flush(t)
                }
                add(t, e) {
                    var i, n, o, c, l, h, f;
                    let d = m => this.values[`${t}.${m}`];
                    (i = (c = this.values)[l = `${t}.count`]) !== null && i !== void 0 || (c[l] = 0), (n = (h = this.values)[f = `${t}.total`]) !== null && n !== void 0 || (h[f] = 0), this.values[`${t}.count`]++, this.values[`${t}.total`] += e, this.values[`${t}.max`] = Math.max((o = d("max")) !== null && o !== void 0 ? o : 0, e), this.values[`${t}.average`] = d("total") / d("count")
                }
            }
            return s
        })(),
        su = (() => {
            class s extends Ss {
                constructor() {
                    super(...arguments), this.values = {}
                }
                set(t, e = "flags") {
                    var i, n;
                    Ss.globalService && ((i = (n = this.values)[e]) !== null && i !== void 0 || (n[e] = 0), this.values[e] |= t, this.flush())
                }
            }
            return s
        })(),
        $ = {
            counters: {
                commandsFromIntegrations: new wt("commands-from-integrations"),
                commandsFromCSTC: new wt("commands-from-cstc"),
                commandsFromIframe: new wt("commands-from-iframe"),
                commandApplied: new wt("command-applied"),
                commandError: new wt("command-error"),
                commandMisuse: new wt("command-misuse"),
                CSTCSnippetUsed: new wt("cstc-snippet-used"),
                redactedPII: new wt("redacted-pii"),
                pageAnonymisation: new wt("page-anonymisation"),
                patchedNativeFunctions: new wt("patched-native-functions"),
                pureWindowState: new wt("pure-window-state"),
                sensitiveElements: new wt("sensitive-elements"),
                cspErrors: new wt("csp-errors"),
                networkRequests: new wt("network-requests"),
                webVitalsErrors: new wt("web-vitals-errors"),
                trackedFeatures: new wt("tracked-features"),
                longTasks: new Go("long-tasks"),
                errors: new wt("errors"),
                methodPerformance: new Ns("perf"),
                downloadTime: new Ns("download-time", ["max", "average"]),
                transferSize: new Ns("transfer-size", ["max", "average"]),
                evalTime: new Ns("eval-time", ["max", "average"]),
                blockingTime: new Go("blocking-time"),
                inpContribution: new Ns("inp-contribution"),
                tasks: new Ns("tasks"),
                availableFeatures: new su("available-features")
            },
            setService(s) {
                Ss.setGlobalService(s)
            }
        },
        bi = (() => {
            class s {
                constructor() {
                    this.ra = 0
                }
                get length() {
                    return this.ra
                }
                get isEmpty() {
                    return !this.Zs
                }
                pushAll(t) {
                    for (let e = 0; e < t.length; e++) this.push(t[e])
                }
                push(t) {
                    this.ra++, this.dn ? this.dn = this.dn[1] = [t, void 0] : this.dn = this.Zs = [t, void 0]
                }
                pop() {
                    if (!this.Zs) return null;
                    this.ra--;
                    let t = this.Zs[0];
                    return this.Zs = this.Zs[1], this.Zs || (this.dn = void 0), t
                }
                forEach(t) {
                    let e = this.Zs;
                    for (; e != null && e.length;) t(e[0]), e = e[1]
                }
                clear() {
                    this.ra = 0, this.Zs = this.dn = void 0
                }
            }
            return s
        })(),
        En = 0,
        Yn = s => {
            En++, csQueueMicrotask(() => As(() => {
                try {
                    s()
                } finally {
                    En--
                }
            }, [he.MicroTask, "queueMicrotask"]))
        },
        ar = new bi,
        cr = new bi;

    function Gt(s, r = "high") {
        ar.isEmpty && cr.isEmpty && rc(iu), r === "high" ? cr.push($o(s)) : ar.push($o(s))
    }

    function rc(s, r = 10) {
        r === 0 ? Yn(s) : csQueueMicrotask(() => rc(s, r - 1))
    }

    function iu() {
        for (; !cr.isEmpty;) cr.pop()();
        for (; !ar.isEmpty;) ar.pop()()
    }
    async function nc(s = 1) {
        for (let r = 0; r < s; r++) await new Promise(t => Gt(t))
    }

    function $o(s) {
        return function() {
            try {
                s.apply(window, arguments)
            } catch (r) {
                it.critical(r)
            }
        }
    }
    var rr = "null",
        qe = null,
        oc = [],
        ru = () => {
            var s;
            return Ti || !!(!((s = document.body) === null || s === void 0) && s.getAttribute("data-cs-tag-extension"))
        };
    !Ti && ru() && (window._uxa ? _uxa.push(["debugEvents", !0]) : window._uxa = [
        ["debugEvents", !0]
    ], qe = new BroadcastChannel("cs-tag"), document.addEventListener("cs.tracking.recordingEvent", s => {
        Sn({
            type: "UXA_EVENT",
            event: s.detail
        })
    }), qe.addEventListener("message", s => {
        if (s.data.type === "CONNECT") {
            if (s.data.sessionId === rr) return;
            rr = s.data.sessionId, csArray.prototype.forEach.call(oc, r => r()), qe == null || qe.postMessage({
                type: "CONNECTED",
                sessionId: rr
            })
        }
    }));

    function nu(s) {
        Ti || (rr !== null && csSetTimeout(s), csSetTimeout(() => csArray.prototype.push.call(oc, s)))
    }

    function Sn(s) {
        qe == null || qe.postMessage(s)
    }

    function mi(s) {
        var r;
        let t = (r = s.length) !== null && r !== void 0 ? r : 0,
            e = new csArray(t);
        for (let i = 0; i < t; i += 1) e[i] = s[i];
        return e
    }

    function Ke(s, r) {
        let t = s.length,
            e = new csArray(t);
        for (let i = 0; i < t; i += 1) e[i] = r(s[i]);
        return e
    }

    function ou(s, r, t) {
        let e = [],
            i = 0;
        for (let n = 0; n < s.length; n += 1) {
            let o = r(s[n]);
            for (let c = 0; c < o.length; c++) t(o[c], i++)
        }
        return e
    }

    function ac(s, r) {
        let t = [];
        return ou(s, r, e => csArray.prototype.push.call(t, e)), t
    }

    function J(s, r) {
        if (au(s)) {
            let t = s.length;
            for (let e = 0; e < t; e++) r(s[e], e)
        } else {
            let t = 0,
                e = s.next();
            for (; !e.done;) r(e.value, t++), e = s.next()
        }
    }

    function au(s) {
        return s.length >= 0
    }

    function Ri(s, r) {
        let t = s.length;
        for (let e = 0; e < t; e++)
            if (r(s[e], e)) return s[e]
    }

    function cu(s, r) {
        let t = s.length;
        for (let e = 0; e < t; e++)
            if (r(s[e], e)) return !0;
        return !1
    }

    function cc(s, r) {
        let t = s.length,
            e = [];
        for (let i = 0; i < t; i += 1) {
            let n = s[i];
            r(n) && csArray.prototype.push.call(e, n)
        }
        return e
    }

    function lu(s, r, t) {
        let e = s.length + r.length + ((t == null ? void 0 : t.length) || 0),
            i = new csArray(e),
            n = 0;
        for (let o = 0; o < s.length; o++) i[n++] = s[o];
        for (let o = 0; o < r.length; o++) i[n++] = r[o];
        if (!t) return i;
        for (let o = 0; o < t.length; o++) i[n++] = t[o];
        return i
    }

    function zo(s, r) {
        for (let t = 0; t < s.length; t++) csArray.prototype.push.call(r, s[t])
    }

    function $s(s) {
        let r = s instanceof Map,
            t = [];
        return s.forEach((e, i) => csArray.prototype.push.call(t, r ? [i, e] : e)), t
    }

    function hu(s) {
        return csArray.isArray(s) && s.length > 0
    }
    var Ci = (() => {
            class s {
                constructor(t, e = "") {
                    this.name = t, this.format = e
                }
            }
            return s
        })(),
        me = (() => {
            class s extends Ci {
                constructor(t) {
                    super(t, "Value: {count}"), this.count = 0
                }
                increase(t = 1) {
                    this.count += t
                }
                decrease() {
                    this.count > 0 && this.count--
                }
                clear() {
                    this.count = 0
                }
                getData() {
                    return {
                        count: this.count
                    }
                }
            }
            return s
        })();
    var qo = (() => {
            class s extends Ci {
                constructor(t) {
                    super(t, "Living intances: {instances}<br/>Added: {added}<br/>Removed: {removed}"), this.added = 0, this.removed = 0
                }
                get value() {
                    return this.added - this.removed
                }
                increase() {
                    this.added++
                }
                decrease() {
                    this.removed++
                }
                getData() {
                    return {
                        added: this.added,
                        removed: this.removed,
                        instances: this.added - this.removed
                    }
                }
            }
            return s
        })(),
        ye = (() => {
            class s extends Ci {
                constructor(t) {
                    super(t, "Count: {count}<br/>Average: {average}ms<br/>Max: {max}ms<br/>Total: {total}ms"), this.total = 0, this.count = 0, this.max = 0
                }
                get average() {
                    return this.count ? this.total / this.count : 0
                }
                elapsed(t) {
                    return this.count++, this.max = Math.max(this.max, t), this.total += t, t
                }
                measure(t) {
                    let e = M.elapsed();
                    t(), this.count++;
                    let i = M.elapsed() - e;
                    return this.max = Math.max(this.max, i), this.total += i, i
                }
                asyncMeasure() {
                    let t = M.elapsed();
                    return () => {
                        this.count++;
                        let e = M.elapsed() - t;
                        return this.max = Math.max(this.max, e), this.total += e, e
                    }
                }
                getData() {
                    return {
                        total: this.total,
                        count: this.count,
                        average: this.average,
                        max: this.max
                    }
                }
            }
            return s
        })(),
        uu = (() => {
            class s extends Ci {
                constructor() {
                    super("INP", "Value: {value}")
                }
                getData() {
                    return {
                        value: Ut.tasks.eventListener.max
                    }
                }
            }
            return s
        })(),
        Ut = {
            general: {
                category: "General",
                nbEvents: new me("Nb of Events"),
                pendingTasks: new me("Pending Tasks"),
                pendingEvents: new me("Pending Tasks"),
                nbOfMutationObservers: new qo("Nb of Mutation Observers"),
                inp: new uu
            },
            mutations: {
                category: "Mutations",
                initialDOM: new ye("Initial DOM"),
                pendingMutations: new me("Nb of Mutations scheduled"),
                serializedMutations: new ye("Serialized Mutations"),
                count: new me("Mutation Count"),
                elementMutationObserved: new qo("Nb of Elements Observed by MutationObserver"),
                unobserveGarbageCollection: new ye("Unobserve GC")
            },
            visibilityObserver: {
                category: "Visibility Observer",
                hiddenElements: new me("Nb of Hidden Elements "),
                nbElements: new me("Nb of  Elements")
            },
            tasks: {
                category: "Tasks",
                tasks: new me("Tasks"),
                errors: new me("Errors"),
                timer: new ye("Timers"),
                microtask: new ye("Microtasks"),
                mutationObserver: new ye("MutationObserver"),
                monkeyPatch: new ye("MonkeyPatch"),
                eventListener: new ye("EventListener"),
                intersectionObserver: new ye("Intersection")
            }
        };

    function du() {
        let s = null;
        nu(() => {
            let r = n => Object.keys(n),
                t = csArray.prototype.map.call(r(Ut), n => Ut[n]),
                e = csArray.prototype.map.call(t, n => csArray.prototype.filter.call(csArray.prototype.map.call(r(n), o => n[o]), o => o instanceof Ci));
            Sn({
                type: "UXA_PERFORMANCE_COUNTER_SCHEMA",
                event: csArray.prototype.map.call(t, (n, o) => ({
                    category: n.category,
                    performanceCounters: csArray.prototype.map.call(e[o], c => ({
                        name: c.name,
                        format: c.format
                    }))
                }))
            }), !s && (s = csSetInterval(() => {
                As(() => {
                    let n = ac(Ke(e, o => Ke(o, c => c.getData())), o => o);
                    Sn({
                        type: "UXA_PERFORMANCE_COUNTER",
                        event: n
                    })
                }, [he.Timer, "performance-counter-interval"])
            }, 1e3))
        })
    }
    var he = (() => {
            let s;
            return function(r) {
                r.Timer = "timer", r.MonkeyPatch = "monkeyPatch", r.MutationObserver = "mutationObserver", r.EventListener = "eventListener", r.IntersectionObserver = "intersectionObserver", r.MicroTask = "microtask"
            }(s || (s = {})), s
        })(),
        Vt = null,
        fu = ["click", "tap", "keyup", "keydown", "pointerup", "pointerdown"];
    async function As(s, r, t = null) {
        if (Vt && r[0] !== he.MicroTask) return s();
        t && (Vt = t), Vt || (Vt = {
            type: r[0],
            elapsed: 0
        }, Ut.tasks.tasks.increase());
        try {
            Vt.elapsed += pu(s)
        } catch (e) {
            Ut.tasks.errors.increase(), it.critical(new Error(`Task error:  ${r}/${s.name}.
${e.message}
${e.stack}`, e), "TASK_ERROR")
        } finally {
            En <= 0 && (Ut.tasks[Vt.type].elapsed(Vt.elapsed), Vt.elapsed > 50 && ($.counters.longTasks.push(Vt.elapsed), $.counters.blockingTime.push(Vt.elapsed - 50)), $.counters.tasks.add(r[0], Vt.elapsed), csArray.prototype.includes.call(fu, r[1]) && $.counters.inpContribution.add(r[1], Vt.elapsed), Vt = null)
        }
    }

    function pu(s) {
        let r = M.elapsed();
        return s(), M.elapsed() - r
    }
    var Vr, gu = "cs-native-frame";
    var Ve = {
        navigatorProperties: [{
            propertyName: "sendBeacon",
            binding: navigator
        }],
        nodeProperties: ["childNodes", "parentNode", "nextSibling", "firstChild", "nodeType"],
        elementProperties: ["shadowRoot"],
        elementPropertiesValues: ["matches", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"],
        eventProperties: ["target"],
        imageProperties: ["src"],
        constructors: {
            Date: "csDate",
            JSON: "csJSON",
            Array: "csArray",
            String: "csString",
            URL: "csURL",
            MutationObserver: "csMutationObserver",
            screen: "csScreen",
            RegExp: "csRegExp"
        }
    };

    function lc(s, r) {
        let t = ws(window, s);
        return function(e, i) {
            return t(() => As(e, [r, s]), i)
        }
    }
    window.csSetTimeout = lc("setTimeout", he.Timer);
    window.csSetInterval = lc("setInterval", he.Timer);
    window.csQueueMicrotask = (Vr = ws(window, "queueMicrotask")) !== null && Vr !== void 0 ? Vr : setTimeout;
    window.csClearTimeout = ws(window, "clearTimeout");
    window.csClearInterval = ws(window, "clearInterval");
    window.csFileReader = ws(window, "FileReader");
    (() => {
        var s;
        let r = 0;

        function t(i) {
            return "cs$Symbol_" + i
        }

        function e(i) {
            return t(i) + ++r
        }
        e.for = t, window.csSymbol = (s = window.Symbol) !== null && s !== void 0 ? s : e
    })();

    function mu() {
        let s = document.createElement("iframe");
        s.id = gu, s.setAttribute("hidden", ""), s.setAttribute("title", "Intentionally blank"), s.setAttribute("sandbox", "allow-same-origin");
        let r = document.createElement("cs-native-frame-holder");
        if (r.setAttribute("hidden", ""), document.body.appendChild(r), !!Element.prototype.attachShadow) {
            let e = r.attachShadow({
                mode: "closed"
            });
            return e.innerHTML = s.outerHTML, e.firstElementChild.contentWindow
        }
        return r.innerHTML = s.outerHTML, r.firstElementChild.contentWindow
    }

    function yu(s, r) {
        let t, e = s;
        for (; e && !(t = Object.getOwnPropertyDescriptor(e, r));) e = Object.getPrototypeOf(e);
        return t
    }

    function Eu(s, r, t) {
        let e = yu(s, r);
        if (!e) return function() {
            return this[r]
        };
        switch (t) {
            case "get":
                return e.get;
            case "set":
                return e.set;
            case "value":
                return e.value
        }
    }

    function hc(s) {
        var r, t;
        Object.keys(Ve.constructors).forEach(i => {
            window[Ve.constructors[i]] = s[i] instanceof Function && s[i].prototype == null ? s[i].bind(window) : s[i]
        }), _u(s);
        let e = s.MutationObserver;
        ("Prototype" in window || vu()) && (e = (t = (r = ws(window, "MutationObserver")) !== null && r !== void 0 ? r : window.WebKitMutationObserver) !== null && t !== void 0 ? t : window.MutationObserver), window.csIntersectionObserver = Wo(window.IntersectionObserver, he.IntersectionObserver), window.csMutationObserver = Wo(e, he.MutationObserver), Ms("csNode", Ve.nodeProperties, s.Node.prototype, "get"), Ms("csElement", Ve.elementProperties, s.Element.prototype, "get"), Ms("csElement", Ve.elementPropertiesValues, s.Element.prototype, "value", !1), Ms("csHTMLImageElement", Ve.imageProperties, s.HTMLImageElement.prototype, "set"), Ms("csEvent", Ve.eventProperties, s.Event.prototype, "get"), Ms("csNavigator", Ve.navigatorProperties, s.navigator, "value")
    }

    function Ms(s, r, t, e, i = !0) {
        r.forEach(n => {
            let o = typeof n != "string" && "binding" in n,
                c = o ? n.propertyName : n;
            (i || c in t) && (window[`${s+c}`] = Eu(t, c, e), o && (window[`${s+c}`] = window[`${s+c}`].bind(n.binding)))
        })
    }

    function Xn(s, r) {
        window.CSProtectnativeFunctionsLogs = window.CSProtectnativeFunctionsLogs || {}, window.CSProtectnativeFunctionsLogs[s] = r
    }

    function Su() {
        try {
            let s = mu();
            return s ? (window.CSPureWindow = s, hc(window.CSPureWindow), !0) : !1
        } catch (s) {
            return Xn("Warning", `failed to copy references from pure iframe: ${s.message}`), !1
        }
    }
    if (!Su()) try {
        hc(st)
    } catch (s) {
        Xn("Critical", `failed to copy references from window: ${s.message}`)
    }

    function vu() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }

    function _u(s) {
        window.csquerySelector = {
            1: s.Element.prototype.querySelector,
            9: s.Document.prototype.querySelector,
            11: s.DocumentFragment.prototype.querySelector
        }, window.csquerySelectorAll = {
            1: s.Element.prototype.querySelectorAll,
            9: s.Document.prototype.querySelectorAll,
            11: s.DocumentFragment.prototype.querySelectorAll
        }
    }

    function Wo(s, r) {
        try {
            let t = function(e, i) {
                return new s((o, c) => {
                    As(() => e(o, c), [r, s.name])
                }, i)
            };
            return t.base = s, t
        } catch {
            return Xn("Warning", `failed to extends ${s.name}`), s
        }
    }
    var Et = (() => {
        let s;
        return function(r) {
            r.ELLIPSIS = "\u2026";

            function t(o) {
                return csString.prototype.replace.call(o, /[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function e(o) {
                return csString.prototype.replace.call(o, /([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1")
            }
            r.escapeInvalidCharacters = e;

            function i(o, c, l) {
                if ("replaceAll" in csString.prototype) return csString.prototype.replaceAll.call(o, c, l);
                let h = new csRegExp(t(c), "g");
                return csString.prototype.replace.call(o, h, l)
            }
            r.stringReplaceAll = i;

            function n(o, c, l = "") {
                return o.length <= c ? o : csString.prototype.slice.call(o, 0, c - l.length) + l
            }
            r.truncate = n
        }(s || (s = {})), s
    })();

    function vn(s) {
        return Et.escapeInvalidCharacters(csString.prototype.toLowerCase.call(s.localName))
    }

    function wu(s) {
        let r = s.getAttribute("id");
        return r && Et.escapeInvalidCharacters(r)
    }

    function ct(s) {
        return csNodenodeType.apply(s) === 1
    }

    function lr(s) {
        return csNodenodeType.apply(s) === 3
    }

    function Au(s) {
        return csNodenodeType.apply(s) === 8
    }

    function uc(s) {
        return ct(s) && s.localName === "link"
    }

    function Tu(s) {
        return ct(s) && s.localName === "source"
    }

    function dc(s) {
        return ct(s) && s.localName === "a"
    }

    function Kn(s) {
        return uc(s) && csString.prototype.indexOf.call(s.rel, "stylesheet") !== -1
    }

    function bu(s) {
        return ct(s) && s.localName === "img"
    }

    function yr(s) {
        return ct(s) && s.localName === "style"
    }

    function Er(s) {
        return ct(s) && s.localName === "input"
    }

    function Jn(s) {
        return ct(s) && s.localName === "textarea"
    }

    function Sr(s) {
        return ct(s) && s.localName === "script"
    }

    function Ru(s) {
        return ct(s) && s.localName === "button"
    }

    function zs(s) {
        return ct(s) && "ownerSVGElement" in s
    }

    function Qn(s) {
        return ct(s) && s.localName === "select"
    }

    function Cu(s) {
        return ct(s) && s.localName === "details"
    }

    function Iu(s) {
        return ct(s) && s.localName === "summary"
    }

    function Pu(s) {
        return zs(s) && s.localName === "image"
    }

    function Ou(s) {
        return zs(s) && s.localName === "use"
    }

    function Nu(s) {
        return zs(s) && s.localName === "feImage"
    }

    function Mu(s) {
        switch (csNodenodeType.apply(s)) {
            case 9:
            case 11:
                return !0;
            default:
                return !1
        }
    }

    function Du(s) {
        switch (csNodenodeType.apply(s)) {
            case 9:
            case 11:
            case 1:
                return !0;
            default:
                return !1
        }
    }

    function hr(s) {
        return csNodenodeType.apply(s) === 9
    }

    function yi(s) {
        return Mu(s) && "host" in s && "mode" in s
    }

    function fc(s) {
        return ct(s) && !!csElementshadowRoot.apply(s) && yi(csElementshadowRoot.apply(s))
    }
    var ku = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"];

    function Lu(s) {
        return ct(s) && Mt(s.tagName) && csString.prototype.indexOf.call(s.tagName, "-") > 0 && csString.prototype.indexOf.call(s.tagName, ":") === -1 && csString.prototype.indexOf.call(s.tagName, '"') === -1 && csString.prototype.indexOf.call(s.tagName, ",") === -1 && csArray.prototype.indexOf.call(ku, csString.prototype.toLocaleLowerCase.call(s.tagName)) < 0
    }
    var Ii = "detached";

    function pc(s) {
        let r = s,
            t = [r];
        for (; csNodeparentNode.apply(r) !== null;) r = csNodeparentNode.apply(r), csArray.prototype.push.call(t, r);
        return ur(r) && csArray.prototype.push.call(t, Ii), {
            ancestors: t,
            selectionRoot: r
        }
    }

    function xu(s) {
        let r = s,
            t = [r],
            e = null;
        for (; csNodeparentNode.apply(r) !== null;) e === null && dc(r) && (e = r), csArray.prototype.push.call(t, csNodeparentNode.apply(r)), r = csNodeparentNode.apply(r);
        return ur(r) && csArray.prototype.push.call(t, Ii), {
            firstAnchorParent: e,
            ancestors: t,
            selectionRoot: r
        }
    }

    function ur(s) {
        return Ae.isValidElement(s)
    }
    var ls = (() => {
            var s, r;
            return (r = (s = st.Element) === null || s === void 0 ? void 0 : s.prototype) !== null && r !== void 0 ? r : {}
        })(),
        ie = ls.matches || ls.matchesSelector || ls.mozMatchesSelector || ls.msMatchesSelector || ls.oMatchesSelector || ls.webkitMatchesSelector,
        Yo = ls.closest,
        gc = 9;

    function Vu(s, r) {
        return r ? csArray.prototype.some.call(r, t => ie.call(s, t)) : !1
    }

    function Uu(s, r, t) {
        if (s === Ii || csNodenodeType.apply(s) === gc) return 0;
        let e = t.dynamicElementNameRegex,
            i = !!(e != null && e.test(r.localName)),
            n = vn(r),
            o = 0,
            c = r.previousElementSibling;
        for (; c;)(vn(c) === n || i && (e != null && e.test(c.localName))) && !Vu(c, t.reliableSelectors) && (o += 1), c = c.previousElementSibling;
        return o
    }

    function ju(s, r, t) {
        if (s === Ii || csNodenodeType.apply(s) === gc) return 0;
        let e = 0,
            i = r.previousElementSibling;
        for (; i;) ie.call(i, t) && (e += 1), i = i.previousElementSibling;
        return e
    }
    var Hu = [/\d{4}/, /^ember\d+$/],
        Bu = "@",
        Zn = "data-cs-override-id",
        Fu = "data-cs-dynamic-id";

    function mc(s, r, t, e) {
        let i = e.dynamicIdRegex || null,
            n = e.dynamicElementNameRegex,
            o = vn(s);
        if (n && n.test(s.localName) && (o = csString.prototype.replace.call(o, n, `$1${Bu}`)), zu(s, t)) {
            let m = to(s);
            return {
                hasUniqueIdentifier: !0,
                elementSelector: `${o}[${Zn}="${m}"]`
            }
        }
        let c = Qu(s, t, e);
        if (c.success) return {
            hasUniqueIdentifier: !0,
            elementSelector: `${o}#UA[${c.attributeName}="${c.attributeValue}"]`
        };
        let l = Gu(s, t, e);
        if (l) return {
            hasUniqueIdentifier: !0,
            elementSelector: `${o}#UCS[${l}]`
        };
        let h = wu(s);
        if (Wu(s, h, t, i)) return {
            hasUniqueIdentifier: !0,
            elementSelector: `${o}#${h}`
        };
        let f = $u(s, e);
        if (f) {
            let m = ju(r, s, f);
            return {
                hasUniqueIdentifier: !1,
                elementSelector: `${o}[${f}](${m})`
            }
        }
        let d = Uu(r, s, e);
        return {
            hasUniqueIdentifier: !1,
            elementSelector: `${o}:eq(${d})`
        }
    }

    function Gu(s, r, t) {
        if (t.uniqueCssSelectors) {
            for (let e of t.uniqueCssSelectors)
                if (ie.call(s, e) && Ju(e, r)) return e
        }
    }

    function $u(s, r) {
        if (r.reliableSelectors) {
            for (let t of r.reliableSelectors)
                if (ie.call(s, t)) return t
        }
    }

    function zu(s, r) {
        let t = to(s);
        return t && csString.prototype.match.call(t, /^[\w-]+$/) && eo(Zn, t, r)
    }

    function qu(s) {
        return to(s) !== null
    }

    function to(s) {
        return s.getAttribute(Zn)
    }

    function Wu(s, r, t, e) {
        return r && !qu(s) && !Yu(s, r, e) && Ku(r, t)
    }

    function Yu(s, r, t) {
        return s.hasAttribute(Fu) || Xu(r, t)
    }

    function Xu(s, r) {
        let t = !1;
        return s && r && (t = r.test(s)), s && (csArray.prototype.some.call(Hu, e => e.test(s)) || t)
    }

    function Ku(s, r) {
        return s && eo("id", s, r)
    }

    function eo(s, r, t) {
        try {
            return window.csquerySelectorAll[t.nodeType].call(t, `[${s}="${r}"]`).length === 1
        } catch (e) {
            if (e.name !== "SyntaxError") throw e
        }
        return !1
    }

    function Ju(s, r) {
        try {
            return window.csquerySelectorAll[r.nodeType].call(r, s).length === 1
        } catch (t) {
            if (t.name !== "SyntaxError") throw t
        }
        return !1
    }

    function Qu(s, r, t) {
        if (!t.uniqueAttributes) return {
            success: !1
        };
        for (let e of t.uniqueAttributes) {
            let i = s.getAttribute(e);
            if (i !== null && eo(e, i, r)) return {
                attributeName: e,
                attributeValue: i,
                success: !0
            }
        }
        return {
            success: !1
        }
    }
    var _n = 11;

    function dr(s, r, t) {
        let e = csArray.prototype.shift.call(s);
        if (s.length === 0) return Xo(e, t);
        let i = e,
            n = s[0],
            {
                elementSelector: o,
                hasUniqueIdentifier: c
            } = mc(i, n, r, t);
        if (!t.fullPath && c) {
            let h = s[s.length - 1];
            return `${Xo(h,t)}${o}`
        }
        let l = dr(s, r, t);
        return `${l?`${l}>`:""}${o}`
    }

    function Xo(s, r) {
        if (s === Ii) return "|detached|";
        if (s.host) {
            let {
                ancestors: t,
                selectionRoot: e
            } = pc(s.host);
            return `${dr(t,e,r)}|shadow-root|`
        }
        return csNodenodeType.apply(s) === _n ? "|fragment|" : ""
    }
    var yc = (() => {
            class s {
                constructor(t) {
                    this.options = t, this.done = !1, this.path = null
                }
                getPath() {
                    if (this.path === null) throw new Error("getPath was called before serializeElement");
                    return this.path
                }
                isDone() {
                    return this.done
                }
            }
            return s
        })(),
        Zu = (() => {
            class s extends yc {
                constructor() {
                    super(...arguments), this.na = !1, this.oa = !1, this.Jc = !1
                }
                LE(t, e) {
                    return this.na && !(e === null && ur(t)) && csNodenodeType.apply(t) !== _n && !t.host
                }
                xE(t) {
                    return !t.localName
                }
                serializeElement(t, e, i) {
                    var n;
                    if ((n = this.path) !== null && n !== void 0 || (this.path = ""), this.LE(t, e)) return;
                    let o = !1;
                    e === null && ur(t) && (o = !0, this.done = !0);
                    let c = this.oa && !this.options.fullPath ? "" : ">",
                        l = !!t.host;
                    if (l && this.path && (this.path = "|shadow-root|" + c + this.path, this.Jc = !0, this.na = !1, this.oa = !1), !l && e === null && csNodenodeType.apply(t) === _n) {
                        this.path = "|fragment|" + c + this.path, this.done = !0;
                        return
                    }
                    if (this.xE(t)) return;
                    let h = e != null ? e : "detached",
                        {
                            elementSelector: f,
                            hasUniqueIdentifier: d
                        } = mc(t, h, i, this.options);
                    d && (this.oa = !0, this.na = !this.options.fullPath);
                    let m = `${o?`|detached|${c}`:""}${this.na&&!d?"":f}`,
                        v = !d && this.oa && !this.options.fullPath ? "" : this.path && !this.Jc ? ">" : "";
                    this.Jc = !1, this.path = `${m}${v}${this.path}`
                }
            }
            return s
        })(),
        gt = (() => {
            let s;
            return function(r) {
                function t() {
                    let d = [i()];
                    return document.documentElement && csArray.prototype.push.call(d, document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight), document.body && csArray.prototype.push.call(d, document.body.scrollHeight, document.body.offsetHeight), Math.max(...d)
                }
                r.documentHeight = t;

                function e() {
                    return document.documentElement.scrollWidth
                }
                r.documentWidth = e;

                function i() {
                    return window.innerHeight
                }
                r.windowHeight = i;

                function n() {
                    return window.innerWidth
                }
                r.windowWidth = n;

                function o() {
                    let d = window.csScreen.width;
                    return ms(d) && d > 0 ? d : window.screen.width
                }
                r.screenWidth = o;

                function c() {
                    let d = window.csScreen.height;
                    return ms(d) && d > 0 ? d : window.screen.height
                }
                r.screenHeight = c;

                function l() {
                    return window.pageXOffset
                }
                r.windowOffsetX = l;

                function h() {
                    return window.pageYOffset
                }
                r.windowOffsetY = h;

                function f() {
                    return {
                        dw: `${e()}`,
                        dh: `${t()}`,
                        ww: `${n()}`,
                        wh: `${i()}`,
                        sw: `${o()}`,
                        sh: `${c()}`
                    }
                }
                r.getRequestParameters = f
            }(s || (s = {})), s
        })();

    function se(s, r = It.SHOW_ALL) {
        let t = r | It.SHOW_ELEMENT,
            e = [document.createTreeWalker(s, t, null, !1)],
            i = Ko(s);
        i && csArray.prototype.push.call(e, document.createTreeWalker(i, t, null, !1));
        let n = null;
        return {
            root: s,
            nextNode() {
                if (i) {
                    let o = i;
                    return i = null, o
                }
                for (; e.length > 0;) {
                    if (n) {
                        let h = n;
                        return n = null, h
                    }
                    let c = e[e.length - 1].nextNode();
                    if (!c) {
                        csArray.prototype.pop.call(e);
                        continue
                    }
                    let l = Ko(c);
                    if (r & It.SHOW_DOCUMENT_FRAGMENT && l && (n = l), l && csArray.prototype.push.call(e, document.createTreeWalker(l, t, null, !1)), (jr[csNodenodeType.apply(c)] & r) !== 0) return c
                }
                return null
            },
            visitAll(o) {
                jr[csNodenodeType.apply(s)] & r && o(s);
                let c = this.nextNode();
                for (; c;) {
                    if ((jr[csNodenodeType.apply(c)] & r) === 0) {
                        c = this.nextNode();
                        continue
                    }
                    o(c), c = this.nextNode()
                }
            },
            find(o) {
                let c;
                return this.visitAll(l => o(l) && (c = l)), c
            },
            collectAll(o) {
                let c = [];
                return this.visitAll(l => csArray.prototype.push.call(c, o ? o(l) : l)), c
            }
        }
    }

    function Ko(s) {
        return s && fc(s) ? s.shadowRoot : null
    }
    var Ur = (() => {
            var s;
            return (s = st.Node) !== null && s !== void 0 ? s : {}
        })(),
        It = (() => {
            var s;
            return (s = st.NodeFilter) !== null && s !== void 0 ? s : {}
        })(),
        jr = {
            2: It.SHOW_ATTRIBUTE,
            4: It.SHOW_CDATA_SECTION,
            8: It.SHOW_COMMENT,
            11: It.SHOW_DOCUMENT_FRAGMENT,
            9: It.SHOW_DOCUMENT,
            10: It.SHOW_DOCUMENT_TYPE,
            1: It.SHOW_ELEMENT,
            [Ur.ENTITY_NODE]: It.SHOW_ENTITY,
            [Ur.ENTITY_REFERENCE_NODE]: It.SHOW_ENTITY_REFERENCE,
            [Ur.NOTATION_NODE]: It.SHOW_NOTATION,
            7: It.SHOW_PROCESSING_INSTRUCTION,
            3: It.SHOW_TEXT
        },
        Ec = !1,
        wn = 5,
        Xi = 50;

    function td(s = 5) {
        Ec = it.isPerfLoggingActive(), wn = s
    }

    function Ts(s, r) {
        return function() {
            if (!Ec) return s.apply(this, arguments);
            let t = M.elapsed(),
                e = s.apply(this, arguments);
            if (e != null && e.then) e.then(() => {
                let i = M.elapsed() - t;
                i >= wn && $.counters.methodPerformance.add(r, i), i > Xi && $.counters.blockingTime.push(i - Xi)
            });
            else {
                let i = M.elapsed() - t;
                i >= wn && $.counters.methodPerformance.add(r, i), i > Xi && $.counters.blockingTime.push(i - Xi)
            }
            return e
        }
    }
    var Dt = function(s) {
            return function(r, t, e) {
                let i = e.value;
                e.value = Ts(i, s)
            }
        },
        ps = (() => {
            let s;
            return function(r) {
                function t() {
                    return !!Element.prototype.attachShadow
                }
                r.isSupported = t;

                function e(n) {
                    return n && fc(n) ? n.shadowRoot : null
                }
                r.getShadowRoot = e;

                function i(n) {
                    return se(n, NodeFilter.SHOW_DOCUMENT_FRAGMENT).collectAll(o => o.host)
                }
                r.getAllShadowHosts = Ts(i, "getAllShadowHosts")
            }(s || (s = {})), s
        })(),
        Hr = (() => {
            var s;
            return (s = st.Node) !== null && s !== void 0 ? s : Object
        })(),
        ft = (() => {
            let s;
            return function(r) {
                let t = "isConnected" in Hr.prototype ? _ => _.isConnected : _ => !_.ownerDocument || !(_.ownerDocument.compareDocumentPosition(_) & _.DOCUMENT_POSITION_DISCONNECTED);

                function e(_, L) {
                    for (let x = _; x; x = csNodenextSibling.apply(x)) L(_)
                }
                r.forEachChild = e;

                function i(_) {
                    return t(_)
                }
                r.isConnected = i;

                function n(_, L) {
                    let x = [];
                    for (let H of l(_, L)) csArray.prototype.push.call(x, H);
                    return x
                }
                r.getAncestors = n;
                let o = (_, L) => {
                    var x;
                    return (x = csNodeparentNode.apply(_)) !== null && x !== void 0 ? x : L && yi(_) ? _.host : null
                };

                function c(_, L, x = !1) {
                    let H = _;
                    for (; H;) {
                        if (L(H)) return H;
                        let ht = o(H, x);
                        if (ht && ht !== H) H = ht;
                        else break
                    }
                    return null
                }
                r.findAncestor = c;

                function* l(_, L = !1) {
                    let x = _;
                    for (; x;) {
                        yield x;
                        let H = o(x, L);
                        if (H && H !== x) x = H;
                        else break
                    }
                }
                r.walkUp = l;

                function h(_, L) {
                    if (_ === L || L.contains(_)) return !0;
                    let x = r.getParentElement(_);
                    return x && x !== _ ? h(x, L) : !1
                }
                r.isDescendantOf = h;

                function f(_) {
                    var L;
                    return _.parentElement ? _.parentElement : r.getRootNode(_) ? (L = r.getRootNode(_)) === null || L === void 0 ? void 0 : L.host : null
                }
                r.getParentElement = f;

                function d(_, L = document) {
                    let x = mi(window.csquerySelectorAll[L.nodeType].call(L, _)),
                        H = ps.getAllShadowHosts(L);
                    for (let ht of H) {
                        let St = ps.getShadowRoot(ht);
                        if (!St) continue;
                        let pe = mi(window.csquerySelectorAll[St.nodeType].call(St, _));
                        csArray.prototype.push.call(x, ...pe)
                    }
                    return x
                }
                r.findAllElements = d, r.getRootNode = (() => {
                    if ("getRootNode" in Hr.prototype) return (x, H) => x.getRootNode(H);

                    function _(x) {
                        let H = L(x);
                        return yi(H) ? _(H.host) : H
                    }

                    function L(x) {
                        return csNodeparentNode.apply(x) != null ? L(csNodeparentNode.apply(x)) : x
                    }
                    return (x, H) => typeof H == "object" && !!H.composed ? _(x) : L(x)
                })();

                function m(_) {
                    return _ === "transparent" || /^(rgba|hsla)\(\d+, \d+%?, \d+%?, 0\)$/.test(_)
                }

                function E(_) {
                    let L = _.getBoundingClientRect();
                    return L.right + gt.windowOffsetX() < 0 || L.bottom + gt.windowOffsetY() < 0
                }

                function v(_) {
                    var L, x;
                    if (((L = _.checkVisibility) === null || L === void 0 ? void 0 : L.call(_, {
                            checkOpacity: !0,
                            checkVisibilityCSS: !0
                        })) === !1) return !0;
                    if (!_.offsetParent) {
                        if (!_.getBoundingClientRect) return it.warn(`SUP-11432: Element doesn't have getBoundingClientRect. Node: ${_ instanceof Hr} Ctor: ${(x=_==null?void 0:_.constructor)===null||x===void 0?void 0:x.name}`), !1;
                        let St = _.getBoundingClientRect();
                        if (St.width === 0 && St.height === 0) return !0
                    }
                    let H = window.getComputedStyle(_);
                    return H ? H.display === "none" || H.visibility === "hidden" || H.visibility === "collapse" || H.opacity === "0" || H.filter === "opacity(0)" || H.width === "0px" && H.height === "0px" || m(H.color) : !0
                }
                r.isHiddenByCSS = v;

                function C(_) {
                    if (v(_)) return !0;
                    let x = f(_);
                    return x != null && C(x)
                }
                r.areAncestorsHiddenByCSS = C;

                function P(_) {
                    let L = null,
                        x = _;
                    do
                        if (v(x)) L = x;
                        else break; while (x = f(x));
                    return L
                }
                r.getTopAncestorHiddenByCSS = P;

                function S(_) {
                    let L = w(_);
                    return L !== null && !_.contains(L) && !L.contains(_)
                }

                function w(_) {
                    let L = _.getBoundingClientRect(),
                        x = L.left + .5 * L.width,
                        H = L.top + .5 * L.height;
                    return O(document, x, H)
                }
                r.getTopElement = w;

                function I(_) {
                    if (!_.getBoundingClientRect) return null;
                    let L = _.getBoundingClientRect(),
                        x = L.x + L.width / 2,
                        H = L.y + L.height / 2;
                    return r.getTopElementFromPoint(document, x, H)
                }
                r.getElementOnTop = I;

                function O(_, L, x) {
                    let H = _.elementFromPoint(L, x);
                    if (!H) return null;
                    let ht = ps.getShadowRoot(H);
                    return ht && ht !== r.getRootNode(document.body) && ht !== _ ? O(ht, L, x) : H
                }
                r.getTopElementFromPoint = O;

                function T(_) {
                    return !E(_) && !v(_) && !S(_)
                }
                r.isVisibleInDocument = T;

                function U(_) {
                    return v(_) ? !1 : tt(_)
                }
                r.isVisibleInViewportInForeground = U;

                function tt(_) {
                    let L = w(_);
                    return L === null ? !1 : _ === L ? !0 : Lt(_) ? _.textContent !== "" && L.contains(_) : _.contains(L)
                }
                r.isInViewPort = tt;

                function ot(_, L, x) {
                    let H = _.getAttributeNS(L, x);
                    return H === "" ? _.hasAttributeNS(L, x) ? H : null : H
                }
                r.getAttributeNS = ot;

                function $t(_) {
                    return !!(_.hasAttribute("tabIndex") || _.getAttribute("contentEditable") === "true" || dc(_) && _.hasAttribute("href") || (Qn(_) || Jn(_) || Er(_) || Ru(_)) && !_.hasAttribute("disabled") || Cu(_) || Iu(_))
                }
                r.isElementFocusable = $t;

                function Lt(_) {
                    return _.localName === "span" || _.localName === "a" || _.localName === "b" || _.localName === "i" || _.localName === "button" || _.localName === "input" || _.localName === "label" || _.localName === "cite" || _.localName === "small" || _.localName === "strong" || _.localName === "code" || _.localName === "abbr" || _.localName === "em" || _.localName === "dfn" || _.localName === "time" || _.localName === "output" || _.localName === "object" || _.localName === "sub"
                }
                r.isInlineElement = Lt;

                function zt(_) {
                    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => _(), {
                        once: !0
                    }) : csSetTimeout(_)
                }
                r.onDocumentLoaded = zt
            }(s || (s = {})), s
        })(),
        ed = (() => {
            class s {
                constructor(t) {
                    this.VE = t
                }
                run(t) {
                    let e = [...this.VE],
                        i = ft.getAncestors(t, !1),
                        n = i[i.length - 1];
                    for (; e.length > 0 && i.length > 0;) {
                        let o = csArray.prototype.shift.call(i),
                            c = i[0] || null;
                        if (this.UE(e, o, c, n), this.jE(e), e.length === 0) break;
                        i.length === 0 && o.host && (i = ft.getAncestors(o.host, !1), n = i[i.length - 1])
                    }
                }
                UE(t, e, i, n) {
                    for (let o of t) o.serializeElement(e, i, n)
                }
                jE(t) {
                    for (let e = 0; e < t.length; e++) t[e].isDone() && (csArray.prototype.splice.call(t, e, 1), e--)
                }
            }
            return s
        })(),
        sd = (() => {
            class s extends yc {
                serializeElement(t) {
                    var e;
                    if ((e = this.path) !== null && e !== void 0 || (this.path = ""), (t === "detached" || t.localName === "body") && (this.done = !0, this.path.length > 0)) return;
                    let i = this.HE(t);
                    if (i += i.length > 0 ? "|" : "", this.path.length + i.length > this.options.hierarchyMaxLength) {
                        this.done = !0;
                        return
                    }
                    this.path = i + this.path
                }
                HE(t) {
                    if (!t.localName) return "";
                    let e = `@${t.localName};`;
                    return e += this.BE(t.id), t.classList && (e += this.FE(csArray.from(t.classList))), t.attributes && (e += this.GE(t)), e
                }
                BE(t) {
                    return t ? `#${t};` : ""
                }
                FE(t) {
                    return t.length > 0 ? `.${csArray.prototype.join.call(csArray.prototype.sort.call(t),";.")};` : ""
                }
                $E(t, e) {
                    var i, n;
                    return ((n = (i = this.options).isAttributeSensitive) === null || n === void 0 ? void 0 : n.call(i, t, e)) || csArray.prototype.indexOf.call(this.options.attributeIgnoreTokens, e) !== -1 || zs(t) && csString.prototype.indexOf.call(e, "data-") === -1 && e !== "aria-label" || Er(t) && e === "value"
                }
                zE(t, e) {
                    return this.options.useAnonymization && !this.options.allWhitelistedAttributes.has(t) || e.length > this.options.attrMaxLength
                }
                qE(t) {
                    let e = {};
                    for (let i of csArray.from(t.attributes)) this.$E(t, i.name) || (e[i.name] = i.value);
                    return e
                }
                GE(t) {
                    var e, i;
                    if (!((i = (e = this.options).isNodeSensitive) === null || i === void 0) && i.call(e, t)) return "";
                    let n = Object.entries(this.qE(t));
                    return csArray.prototype.join.call(csArray.prototype.sort.call(csArray.prototype.map.call(csArray.prototype.filter.call(n, ([o]) => o.length < this.options.attrMaxLength), ([o, c]) => this.zE(o, c) ? `[${o}]` : `[${o}=${c}]`)), ";") + (n.length > 0 ? ";" : "")
                }
            }
            return s
        })(),
        Ae = (() => {
            let s;
            return function(r) {
                r.INVALID_ELEMENT = "INVALID_ELEMENT";

                function t(c) {
                    return !!c && "localName" in c && "getAttribute" in c && "hasAttribute" in c && "parentNode" in c
                }
                r.isValidElement = t;

                function e(c, l, h = {
                    fullPath: !1,
                    dynamicIdRegex: null
                }) {
                    let f = o(c);
                    if (f === document) return {
                        path: "",
                        hierarchy: ""
                    };
                    if (!t(f)) return {
                        path: r.INVALID_ELEMENT,
                        hierarchy: r.INVALID_ELEMENT
                    };
                    let d = new Zu(h),
                        m = new sd(l);
                    return new ed([d, m]).run(f), {
                        path: d.getPath(),
                        hierarchy: m.getPath()
                    }
                }
                r.getElementPathAndHierarchy = e;

                function i(c, l = {
                    fullPath: !1,
                    dynamicIdRegex: null
                }) {
                    let h = o(c);
                    if (h === document) return "";
                    if (!t(h)) return r.INVALID_ELEMENT;
                    let {
                        ancestors: f,
                        selectionRoot: d
                    } = pc(h);
                    return dr(f, d, l)
                }
                r.getElementPath = i;

                function n(c, l = {
                    fullPath: !1,
                    dynamicIdRegex: null
                }) {
                    let h = o(c);
                    if (h === document) return {
                        path: "",
                        firstAnchorParent: null
                    };
                    if (!t(h)) return {
                        path: r.INVALID_ELEMENT,
                        firstAnchorParent: null
                    };
                    let {
                        firstAnchorParent: f,
                        ancestors: d,
                        selectionRoot: m
                    } = xu(h);
                    return {
                        path: dr(d, m, l),
                        firstAnchorParent: f
                    }
                }
                r.getElementPathAndFirstAnchorParent = n;

                function o(c) {
                    return c && "jquery" in c && c.length === 1 ? c[0] : c
                }
            }(s || (s = {})), s
        })();
    window.CSPathComputation = window.CSPathComputation || Ae;
    var Sc = ["t.contentsquare.net", "clicktale"],
        id = s => {
            var r;
            if (typeof s.filename == "string" && csArray.prototype.some.call(Sc, t => csString.prototype.indexOf.call(s.filename, t) > -1) && !(csString.prototype.indexOf.call(s.filename, "blob") > -1 && (s.message == null ? void 0 : csString.prototype.indexOf.call(s.message, "importScripts")) > -1)) {
                let t = new Error(s.message);
                t.stack = (r = s.error) === null || r === void 0 ? void 0 : r.stack, F.critical(t)
            }
        };
    window.addEventListener("error", id);
    var F = (() => {
        class s {
            constructor() {}
            static whiteListFilename(t) {
                csArray.prototype.push.call(Sc, t)
            }
            static setStrategy(t) {
                s.ur = t
            }
            static computeIsActive(t) {
                s.Ge = Es.boolean(t), s.Ge ? s.Qc = Es.boolean(10) : s.Qc = !1
            }
            static isLoggingActive() {
                return s.Ge
            }
            static getStrategy() {
                return s.ur
            }
            static debug(t, e = "") {
                s.Ge && this.ur.send(t, e, at.debug)
            }
            static warn(t, e = !0, i = "") {
                var n;
                $.counters.errors.count("warning"), s.Ge && e && this.ur.send(t, i, at.warn), (n = window.UXAnalytics.Console) === null || n === void 0 || n.warn(t)
            }
            static implementation(t, e = "") {
                $.counters.errors.count("implementation"), s.Ge && this.ur.send(t, e, at.implementation)
            }
            static error(t, e = "") {
                var i;
                $.counters.errors.count("error"), s.Ge && this.ur.send(t, e, at.error), (i = window.UXAnalytics.Console) === null || i === void 0 || i.error(t)
            }
            static critical(t, e = "") {
                $.counters.errors.count("critical"), this.ur.send(t, e, at.critical)
            }
            static tryToExecute(t, e) {
                return function(...i) {
                    try {
                        let n = e.apply(this, i);
                        return Z(st.Promise) && n instanceof st.Promise ? n.then(o => o, o => s.error(Te(o) ? o : new Error(o), t)) : n
                    } catch (n) {
                        try {
                            s.error(Te(n) ? n : new Error(n), t)
                        } catch {}
                    }
                }
            }
            static isPerfLoggingActive() {
                return s.Qc
            }
        }
        return s.Ge = !1, s.Qc = !1, s
    })();

    function Xt(s) {
        return jt(s, "data:")
    }

    function rd(s) {
        return jt(s, "#")
    }

    function nd(s) {
        return !!s && (Ai(s, ".css") || jt(s, "https://fonts.googleapis.com/css"))
    }
    var od = ["id", "class", "style", "srcset", "sizes", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "slot", "data-cs-override-id"],
        so = s => {
            let r = new Set(od);
            return csArray.prototype.forEach.call(s, t => {
                r.add(t)
            }), r
        },
        ad = ["svg", "slot"],
        cd = (s, r, t) => t === "radio" && s === "input" && r === "name" || csArray.prototype.indexOf.call(ad, s) > -1,
        vc = {
            href: new Set(["a"]),
            src: new Set(["iframe"])
        },
        ld = s => vc.hasOwnProperty(s),
        hd = (s, r, t) => {
            var e;
            return ((e = vc[r]) === null || e === void 0 ? void 0 : e.has(s)) && !Xt(t)
        },
        ud = (s, r, t) => (t === "submit" || t === "button") && s === "input" && r === "value";

    function Br(s) {
        return s ? dd(s) : null
    }

    function dd(s) {
        try {
            let r = /^\/(.*)\/([gim]*)$/.exec(s);
            if (r) {
                let [, t, e] = r;
                return new csRegExp(`^${t}$`, e)
            }
            return new csRegExp(`^${s}$`)
        } catch {
            return null
        }
    }
    var fd = /^\d+\.\d+(?:\.\d+)?$/,
        pd = s => {
            if (!fd.test(s)) return;
            let [r, t, e] = csArray.prototype.map.call(csString.prototype.split.call(s, "."), Number);
            return {
                major: r,
                minor: t,
                patch: !e || Number.isNaN(e) ? 0 : e
            }
        },
        gd = (s, r) => s.major !== r.major ? s.major - r.major : s.minor !== r.minor ? s.minor - r.minor : s.patch - r.patch,
        md = (s, r) => gd(s, r) >= 0,
        yd = 1,
        Ed = "f553e78fb58e051e51fe8074c4c6e73e",
        An = (() => {
            let s;
            return function(r) {
                r[r.Disabled = 0] = "Disabled", r[r.ButtonAndLinkOnly = 1] = "ButtonAndLinkOnly", r[r.Enabled = 2] = "Enabled"
            }(s || (s = {})), s
        })(),
        fr = (() => {
            let s;
            return function(r) {
                r[r.Automatic = 1] = "Automatic", r[r.Manual = 2] = "Manual"
            }(s || (s = {})), s
        })(),
        Sd = (() => {
            class s {
                constructor(t) {
                    var e, i, n, o, c, l, h, f, d, m, E, v, C, P, S;
                    this.isChild = !1, this.useFastDOM = !!t.useFastDOM, this.isSMB = (e = t.isSMB) !== null && e !== void 0 ? e : !1, this.trackerDomain = t.trackerDomain, this.dynamicConfDomain = t.dynamicConfDomain, this.settingsFileUri = t.settingsFileUri, this.tagDomain = t.tagDomain, this.loggerDomain = t.ed, this.minLogLevel = t.logLevel, this.projectId = t.projectId, this.smbConfig = t.smbConfig, this.status = t.status, this.hostnames = t.hostnames, this.iframesTracking = !!t.iframesTracking, this.crossDomainTracking = !!t.crossDomainTracking, this.crossDomainSingleIframeTracking = !!t.crossDomainSingleIframeTracking, this.consentRequired = !!t.consentRequired, this.allowSubdomains = !!t.allowSubdomains, this.visitorCookieTimeout = t.visitorCookieTimeout || Wn, this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.validationRate = t.validationRate, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.useHttps = !0, this.eMerchandisingEnabled = t.eMerchandisingEnabled, this.jsErrorsEnabled = t.jsErrorsEnabled, this.collectionEnabled = !!(!((o = (i = t.collectionEnabled) !== null && i !== void 0 ? i : (n = t.smbConfig) === null || n === void 0 ? void 0 : n.record) !== null && o !== void 0) || o), this.useSentry = !!((c = t.useSentry) !== null && c !== void 0 ? c : !((l = t.smbConfig) === null || l === void 0) && l.useSentry), this.apiErrors = {
                        enabled: (h = t.apiErrorsEnabled) !== null && h !== void 0 ? h : 0,
                        ...t.apiErrors
                    }, this.customErrors = {
                        enabled: (f = t.customErrorsEnabled) !== null && f !== void 0 ? f : 0,
                        ...t.customErrors
                    }, this.jsCustomErrorsEnabled = t.jsCustomErrorsEnabled, this.triggerSessionReplayEnabled = t.triggerSessionReplayEnabled, this.triggerSessionReplayRegex = Br(t.triggerSessionReplayRegex), this.dynamicIdRegex = t.dynamicIdRegex ? new csRegExp(t.dynamicIdRegex) : null, this.whitelistedAttributes = t.whitelistedAttributes || [], this.replayRecordingUnmaskedUrlRegex = Br(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = Br(t.replayRecordingMaskedUrlRegex), this.replayRecordingMaskedUrlRegexRules = t.replayRecordingMaskedUrlRegexRules || null, this.replayRecordingUnmaskedUrlRegexRules = t.replayRecordingUnmaskedUrlRegexRules || null, this.anonymisationMethod = t.anonymisationMethod || null, this.tagDeploymentMode = t.tagDeploymentMode, this.dualCollectionTagDomain = t.dualCollectionTagDomain || null, this.ptcDomain = t.ptcDomain || null, this.ptcGuid = t.ptcGuid || null, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.ptcSha512 = t.ptcSha512 || null, this.ptcSnapshotPath = t.ptcSnapshotPath || null, this.emitDebugEvents = !1, this.staticResourceManagerDomain = t.staticResourceManagerDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.textVisibilityEnabled = t.textVisibilityEnabled, this.experimental = t.experimental || {}, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.recordingUrlRules = (d = t.recordingUrlRules) !== null && d !== void 0 ? d : [], this.cookielessTrackingEnabled = t.cookielessTrackingEnabled, this.customHashIdEnabled = !!t.customHashIdEnabled, this.encryptionEnabled = !!t.recordingEncryptionEnabled, this.encryptionPublicKey = t.recordingEncryptionPublicKey || null, this.pathComputationRules = t.pathComputationRules || {}, t.pathComputationRules && t.pathComputationRules.dynamicElementNameRegex === "" && (this.pathComputationRules.dynamicElementNameRegex = null), t.pathComputationRules && t.pathComputationRules.dynamicElementNameRegex && (this.pathComputationRules.dynamicElementNameRegex = new csRegExp(t.pathComputationRules.dynamicElementNameRegex)), this.asyncSerializerEnabled = !!t.asyncSerializerEnabled, this.encryptionPublicKeyId = t.recordingEncryptionPublicKeyId, this.pendingInactivityTimeout = t.pendingInactivityTimeout || 5e3, this.accessibilityEnabled = !!t.accessibilityEnabled, this.useStaticResourceManager = !!t.useStaticResourceManager, t.taskSchedulerOptions && (this.taskSchedulerOptions = { ...t.taskSchedulerOptions,
                        enabled: !!t.taskSchedulerOptions.enabled
                    }), this.uxaDomain = t.uxaDomain, this.environment = ((m = t.uxaDomain) === null || m === void 0 ? void 0 : m.indexOf("staging")) > -1 ? "staging" : "production", this.performanceTimingOptions = t.performanceTimingOptions, this.replayConsentRequiredForSession = !!t.replayConsentRequiredForSession, this.isWebView = !1, t.displayAdOptions && t.displayAdOptions.length && (this.displayAdOptions = t.displayAdOptions), t.voc && (this.voc = { ...t.voc,
                        enabled: !!t.voc.enabled
                    }), this.vocData = t.vocData, t.heapEnvironment && (this.heapEnvironment = t.heapEnvironment), t.implementations && t.implementations.length && (this.implementations = t.implementations), this.eventsApiEnabled = !!t.eventsApiEnabled, this.anonymizeDigits = (E = t.anonymizeDigits) !== null && E !== void 0 ? E : null, this.isHeapPresent = window.heap !== void 0, this.recordTargetingRules = (v = t.recordTargetingRules) !== null && v !== void 0 ? v : [], this.paProxyDomainUri = t.paProxyDomainUri || null, this.emitRecordInfoEvents = t.emitRecordInfoEvents !== !1, this.collectHierarchy = !!t.collectHierarchy, this.collectSubmit = !!t.collectSubmit, this.collectTargetText = (C = t.collectTargetText) !== null && C !== void 0 ? C : An.Disabled, this.identityEncryptionKey = t.identityEncryptionKey || null, this.tagVerificationDomain = t.tagVerificationDomain, this.tagVerificationEnabled = !!t.tagVerificationEnabled, this.trackingCodeVerified = !!t.trackingCodeVerified, this.quotas = (P = t.quotas) !== null && P !== void 0 ? P : null, this.startMode = (S = t.startMode) !== null && S !== void 0 ? S : fr.Automatic, this.customEnhancerConfig = t.customEnhancerConfig || null
                }
                getTrackerUri() {
                    return `${this.As()}://${this.trackerDomain}`
                }
                getSentryFileUri() {
                    return `${this.As()}://${this.tagDomain}/uxa/smb/errors.js`
                }
                getSentryDSNUri() {
                    return `https://${Ed}@${this.loggerDomain}/4508608369131520`
                }
                getRecordingUri() {
                    return `${this.As()}://${this.malkaRecordingDomain}`
                }
                getLoggerUri() {
                    return `${this.As()}://${this.loggerDomain}`
                }
                getMetricsUri() {
                    return `${this.As()}://${this.loggerDomain}/metrics`
                }
                getStaticResourceManagerUri() {
                    return `${this.As()}://${this.staticResourceManagerDomain}`
                }
                getVerificationEndpoint() {
                    return `${this.As()}://${this.tagVerificationDomain}`
                }
                getSettingsFileUri() {
                    return this.settingsFileUri ? this.settingsFileUri : `${this.As()}://${this.dynamicConfDomain}/${this.projectId}.json`
                }
                isQuotaEnabled() {
                    return this.isSMB || this.quotas !== null
                }
                getPaProxyDomainUri() {
                    return `${this.As()}://${this.paProxyDomainUri}`
                }
                As() {
                    return this.useHttps ? "https" : "http"
                }
                isProjectActive() {
                    return this.status === yd
                }
                processOptionOverrides(t) {
                    t && t.forEach && t.forEach(([e, ...i]) => {
                        if (e === "setOption") {
                            let [n, o] = i;
                            this.WE(n, o)
                        }
                    })
                }
                WE(t, e) {
                    t === "trackerDomain" && (this.trackerDomain = e), t === "loggerDomain" && (this.loggerDomain = e), t === "malkaRecordingDomain" && (this.malkaRecordingDomain = e), t === "staticResourceManagerDomain" && (this.staticResourceManagerDomain = e), t === "minLogLevel" && (this.minLogLevel = e), t === "useHttps" && (this.useHttps = !!e), t === "isWebView" && (this.isWebView = e), t === "dynamicConfDomain" && (this.dynamicConfDomain = e), t === "paProxyDomainUri" && (this.paProxyDomainUri = e), t === "startMode" && ms(e) && csArray.prototype.includes.call(Object.values(fr), e) && (this.startMode = e)
                }
                getRequestParameters() {
                    return {
                        pid: `${this.projectId}`
                    }
                }
                updateDynamicFields(t, e) {
                    t === "emitDebugEvents" && (this.emitDebugEvents = e), t === "minLogLevel" && (this.minLogLevel = e)
                }
                isCsSideloadingHeap() {
                    var t;
                    return ((t = this.heapEnvironment) === null || t === void 0 ? void 0 : t.heap_tag_status) === "cs_sideloads_heap" && !this.isHeapPresent
                }
                isHeapSideloadsCs() {
                    var t;
                    return ((t = this.heapEnvironment) === null || t === void 0 ? void 0 : t.heap_tag_status) === "heap_sideloads_cs"
                }
                isHeapSideloadsCsV5() {
                    var t;
                    return ((t = this.heapEnvironment) === null || t === void 0 ? void 0 : t.heap_tag_status) === "heap_sideloads_cs" && this.sf()
                }
                isHeapSideloadsStartDataCollection() {
                    if (this.isHeapSideloadsCs()) {
                        if (this.sf()) return !0;
                        let t = pd(this.getHeapVersion() || "");
                        if (t && t.major === 4 && md(t, {
                                major: 4,
                                minor: 23,
                                patch: 5
                            })) return !0
                    }
                    return !1
                }
                sf() {
                    var t;
                    return typeof((t = window.heap) === null || t === void 0 ? void 0 : t.getUserId) == "function"
                }
                getHeapVersion() {
                    var t, e, i, n, o, c;
                    return typeof((t = window.heap) === null || t === void 0 ? void 0 : t.getConfig) == "function" && ((n = (i = (e = window.heap) === null || e === void 0 ? void 0 : e.getConfig()) === null || i === void 0 ? void 0 : i.sdk) === null || n === void 0 ? void 0 : n.version) || ((c = (o = window.heap) === null || o === void 0 ? void 0 : o.version) === null || c === void 0 ? void 0 : c.heapJsVersion) || void 0
                }
                isCsCrosswritingHeap() {
                    var t;
                    return ((t = this.heapEnvironment) === null || t === void 0 ? void 0 : t.heap_tag_status) === "cs_crosswrites_heap"
                }
                getHeapStorageLocation() {
                    var t, e;
                    return (e = (t = this.heapEnvironment) === null || t === void 0 ? void 0 : t.heap_storage_location) !== null && e !== void 0 ? e : null
                }
                getHeapWebAppUri() {
                    return this.getHeapStorageLocation() === "eu-west-1" ? "https://eu.heapanalytics.com" : "https://heapanalytics.com"
                }
                isCollectTargetTextEnabled() {
                    return this.isSMB || this.collectTargetText !== An.Disabled
                }
                isNetworkDetailsEnabled() {
                    return this.performanceTimingOptions ? this.performanceTimingOptions.withResource || this.performanceTimingOptions.withNavigation : !1
                }
                hasRecordingUrlRules() {
                    var t;
                    return !!(!((t = this.recordingUrlRules) === null || t === void 0) && t.length)
                }
                hasTargetingRules() {
                    var t;
                    return !!(!((t = this.recordTargetingRules) === null || t === void 0) && t.length)
                }
                getHeapEnvId() {
                    return this.heapEnvironment ? this.heapEnvironment.env_id : ""
                }
            }
            return s
        })(),
        vd = (() => {
            class s {
                constructor(t, e) {
                    this.aa = t, this.rf = e
                }
                init() {
                    this.nf = this.aa !== this.aa.top, this.of = this.rf.isWebView && this.aa === this.aa.top, this.rf.iframesTracking && this.nf || this.of ? this.af = !1 : this.af = !0
                }
                isInIframeContext() {
                    return this.nf
                }
                isTopWindowTracker() {
                    return this.af
                }
                isInWebViewContext() {
                    return this.of
                }
            }
            return s
        })();

    function Jo() {}

    function Tn(s, r) {
        return csString.prototype.lastIndexOf.call(s, r, 0) === 0
    }

    function _d(s, r) {
        return csString.prototype.indexOf.call(s, r, s.length - r.length) !== -1
    }
    var Fr = csSymbol("cachedJson");

    function wd(s) {
        if (s[Fr]) return s[Fr];
        if (csArray.isArray(s)) {
            if (s.length === 0) return "[]";
            let r = "[" + vs(s[0]);
            for (let t = 1; t < s.length; t++) r += "," + vs(s[t]);
            return r += "]"
        }
        return s[Fr] = csJSON.stringify(s)
    }
    var vs = typeof window.Symbol != "undefined" ? wd : csJSON.stringify;
    var Ei = (() => {
            let s;
            return function(r) {
                function t(e) {
                    return csArray.prototype.join.call(csArray.prototype.map.call(Object.keys(e), i => `${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`), "&")
                }
                r.toQuery = t
            }(s || (s = {})), s
        })(),
        _c = (() => {
            class s {
                constructor(t, e) {
                    this.domainUri = t, this.path = e, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
                }
                setRequestParametersProviders(...t) {
                    this.requestParametersProviders = t
                }
                before(t) {
                    csArray.prototype.push.call(this.beforeRequestCallbacks, t)
                }
                after(t) {
                    csArray.prototype.push.call(this.afterRequestCallbacks, t)
                }
                retrieveParameters() {
                    return this.requestParametersProviders ? csArray.prototype.reduce.call(csArray.prototype.map.call(this.requestParametersProviders, t => t.getRequestParameters()), (t, e) => ({ ...t,
                        ...e
                    })) : {}
                }
            }
            return s
        })(),
        Bs = (() => {
            class s extends _c {
                constructor(t, e) {
                    super(t, e)
                }
                send() {
                    csArray.prototype.forEach.call(this.beforeRequestCallbacks, i => i());
                    let t = this.retrieveParameters();
                    this.Zc(t);
                    let e = Ei.toQuery(t);
                    this.YE(e), csArray.prototype.forEach.call(this.afterRequestCallbacks, i => i())
                }
                YE(t) {
                    let e = new window.Image(1, 1);
                    e.onload = Jo, e.onerror = Jo, csHTMLImageElementsrc.call(e, `${this.domainUri}${this.path?`/${this.path}`:""}?${t}`)
                }
                Zc(t) {
                    t.r = csString.prototype.slice.call(`${Math.random()}`, 2, 8)
                }
            }
            return s
        })();
    var Ad = (() => {
            class s {
                constructor(t, e) {
                    this.Ts = t, this.XE = e
                }
                init() {
                    this.bs = new Bs(this.Ts.getLoggerUri()), this.bs.setRequestParametersProviders(this, this.XE)
                }
                send(t) {
                    this.ca = t, this.bs.send()
                }
                getRequestParameters() {
                    return {
                        a: this.ca.app,
                        l: this.ca.level,
                        m: this.ca.message,
                        s: this.ca.stacktrace
                    }
                }
            }
            return s
        })(),
        Td = /[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        bd = /[a-zA-Z0-9+_-](?:@|%40|%2540)/,
        Rd = "CS_ANONYMIZED_EMAIL",
        Gr = "([-A-Za-z0-9+/=_]|=[^=]|={3,})+",
        Cd = new csRegExp(`(ey${Gr}\\.ey${Gr}\\.${Gr})`, "g"),
        Id = "CS_ANONYMIZED_JWT",
        Pd = /[0-9]{4}/,
        Od = /(^|[^a-zA-Z0-9*.,-])([45*][0-9*]{3}([ -]?)[0-9*]{4}\3[0-9*]{4}\3[0-9*]{4})($|[^a-zA-Z0-9*.,-])/g,
        Nd = "CS_ANONYMIZED_PII",
        Md = "\u2022",
        Dd = /\d/g,
        kd = /([+(]{0,2}\d[-_ ()/]{0,4}){9,}/,
        Ld = /(?:\d{1,3}\.){3}\d{1,3}/,
        xd = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/,
        Ue = (() => {
            let s;
            return function(r) {
                function t(f) {
                    return csString.prototype.replace.call(f, Td, Rd)
                }
                r.replaceEmail = t;

                function e(f) {
                    return csString.prototype.replace.call(f, Cd, Id)
                }
                r.replaceJWT = e;

                function i(f, d) {
                    return csString.prototype.replace.call(f, Od, d)
                }
                r.replaceCreditCardNumber = i;

                function n(f) {
                    return csString.prototype.replace.call(f, Dd, Md)
                }
                r.replaceDigits = n;

                function o(f) {
                    return Ld.test(f) || xd.test(f)
                }
                r.mayHaveIPAddress = o;

                function c(f) {
                    return kd.test(f)
                }
                r.mayHaveNumberSequence = c;

                function l(f) {
                    return Pd.test(f)
                }
                r.mayHaveCreditCardNumber = l;

                function h(f) {
                    return bd.test(f)
                }
                r.mayHaveEmail = h
            }(s || (s = {})), s
        })(),
        qs = (() => {
            class s {
                hasPII(t, e) {
                    let i = this.checkAndAnonymizePII(t, e);
                    return t !== i
                }
                checkAndAnonymizePII(t, e = null) {
                    let i = this.KE(this.tl(t));
                    return e === !0 ? i = this.JE(i) : e === !1 && (i = this.QE(i)), i
                }
                anonymizePII(t) {
                    return this.tl(t)
                }
                anonymizeJwt(t) {
                    return Ue.replaceJWT(t)
                }
                anonymizeFields(t, e) {
                    return csArray.prototype.forEach.call(e, i => {
                        t[i] = this.tl(t[i])
                    }), t
                }
                tl(t) {
                    if (Ue.mayHaveEmail(t)) {
                        let e = Ue.replaceEmail(t);
                        return e !== t && $.counters.redactedPII.count("email"), e
                    }
                    return t
                }
                JE(t) {
                    return Ue.replaceDigits(t)
                }
                QE(t) {
                    return Ue.mayHaveNumberSequence(t) ? Ue.replaceDigits(t) : t
                }
                KE(t) {
                    return Ue.mayHaveCreditCardNumber(t) ? Ue.replaceCreditCardNumber(t, (e, i, n, o, c) => {
                        if (csString.prototype.indexOf.call(n, "*") === -1) {
                            let h = o.length ? csArray.prototype.join.call(csString.prototype.split.call(n, o), "") : n;
                            if (!this.ZE(h)) return e;
                            $.counters.redactedPII.count("cc")
                        } else $.counters.redactedPII.count("cc-partial");
                        return `${i}${Nd}${c}`
                    }) : t
                }
                ZE(t) {
                    let e = parseInt(t[t.length - 1]),
                        i = 0;
                    for (let n = t.length - 2; n >= 0; n--) {
                        let o = parseInt(t[n]);
                        n % 2 === 0 && (o *= 2), i += Math.floor(o / 10) + o % 10
                    }
                    return 10 - i % 10 === e
                }
            }
            return s
        })(),
        wc = "15.154.4";

    function io() {
        return {
            v: wc
        }
    }
    var Vd = (() => {
            class s {
                constructor(t, e) {
                    this.E = t, this.D = e
                }
                getRequestParameters() {
                    return {
                        d: `${M.now()}`,
                        p: this.D.anonymizePII(window.location.href),
                        ...this.E.getRequestParameters(),
                        ...io()
                    }
                }
            }
            return s
        })(),
        Ud = "uxa",
        Qo = 5,
        jd = "No stacktrace",
        Ac = "snippet-",
        Tc = "implementation-snippet-",
        Zo = (() => {
            let s;
            return function(r) {
                r.IMPLEMENTATION = "implementation", r.DYNAMIC = "dynamic"
            }(s || (s = {})), s
        })(),
        Hd = (() => {
            class s {
                constructor(t, e, i) {
                    this.Rs = e, this.D = new qs, this.cf = xr[at.warn], this.cf = xr[t.minLogLevel || at.warn], this.bs = i || new Ad(t, new Vd(t, this.D)), this.lf = {
                        [at.debug]: [],
                        [at.warn]: [],
                        [at.implementation]: [],
                        [at.error]: [],
                        [at.critical]: []
                    }, this.ha = {
                        implementation: {},
                        dynamic: {}
                    }, this.bs.init()
                }
                send(t, e = "", i = at.warn) {
                    if (!this.tS(i, e)) return;
                    csArray.prototype.push.call(this.lf[i], e || "");
                    let n = {
                        message: this.eS(t, e),
                        stacktrace: this.sS(t),
                        app: Ud,
                        level: i
                    };
                    this.bs.send(n)
                }
                eS(t, e) {
                    let i = Te(t) ? this.D.anonymizePII(t.message || t.toString()) : t;
                    return e && (i += ` ErrorCode: ${e}`), i
                }
                sS(t) {
                    return Te(t) ? `${t.stack||jd} ${this.En()}` : this.En()
                }
                En() {
                    let t = this.Rs.getVisitorService(),
                        e = t == null ? void 0 : t.getVisitor();
                    if (!e) return "No context";
                    let i = this.Rs.getSessionService(),
                        n = i && i.getSession(),
                        o = {
                            userId: e.id,
                            sessionNumber: e.visitsCount,
                            pageNumber: n && n.pageNumber
                        };
                    return csJSON.stringify(o)
                }
                tS(t, e) {
                    if (xr[t] < this.cf) return !1;
                    if ((e == null ? void 0 : csString.prototype.indexOf.call(e, Tc, 0)) === 0) return this.hf(e, Zo.IMPLEMENTATION);
                    if ((e == null ? void 0 : csString.prototype.indexOf.call(e, Ac, 0)) === 0) return this.hf(e, Zo.DYNAMIC);
                    let i = this.lf[t];
                    return i.length >= Qo ? !1 : !(e && csArray.prototype.some.call(i, n => n === e))
                }
                hf(t, e) {
                    return t in this.ha[e] ? this.ha[e][t] >= Qo ? !1 : (this.ha[e][t] += 1, !0) : (this.ha[e][t] = 1, !0)
                }
            }
            return s
        })(),
        Tt = !Ti && document.createElement("a"),
        Bd = /(:443|:80)$/;

    function _e(s) {
        return Tt ? (Tt.href = s, Tt.href) : ""
    }

    function Fd(s, r) {
        return new csURL(s, r).href
    }

    function Gd(s, r) {
        return csArray.prototype.some.call(r, t => Ai(s, `.${t}`) || s === t || t === "")
    }

    function $d(s) {
        return s[0] === "/" ? s : `/${s}`
    }

    function ta(s) {
        return csString.prototype.replace.call(s, Bd, "")
    }

    function bc(s) {
        return !Tt || !jt(s, "http://") && !jt(s, "https://") ? null : (Tt.href = s, {
            hash: Tt.hash,
            host: ta(Tt.host),
            hostname: Tt.hostname,
            href: Tt.href,
            origin: Tt.origin ? Tt.origin : ta(`${Tt.protocol}//${Tt.host}`),
            pathname: $d(Tt.pathname),
            port: Tt.port,
            protocol: Tt.protocol,
            search: Tt.search
        })
    }
    var At = (() => {
        let s;
        return function(r) {
            r.Discovery = "discovery", r.Stop = "stop", r.RecordingContext = "recordingContext", r.SensitiveStatus = "sensitiveStatus", r.RecordingEvent = "recordingEvent", r.EndOfBufferedMessages = "endOfBufferedMessages", r.ChildLogMessage = "childLogMessage", r.AnalysisEvent = "analysisEvent", r.JavascriptError = "javascriptError", r.ApiError = "apiError", r.Assets = "assets", r.DetailedApiError = "detailedApiError", r.EmerchandisingMessage = "emerchandisingMessage", r.Commands = "commands", r.IntegrationCallback = "integrationCallback", r.StaticResource = "staticResource", r.TrackingContextResultMessage = "trackingContextResultMessage", r.TrackingContextRequestMessage = "trackingContextRequestMessage", r.CustomError = "customError"
        }(s || (s = {})), s
    })();
    var zd = (() => {
            class s {
                setContext(t, e) {
                    this.O = t, this.R = e
                }
                getVisitorService() {
                    return this.O
                }
                getSessionService() {
                    return this.R
                }
            }
            return s
        })(),
        bn = !1;

    function qd() {
        bn = !0
    }

    function bt() {
        return (s, r, t) => {
            if (t) {
                let e = t.value;
                t.value = function(i, n) {
                    (i == null ? void 0 : i.isTrusted) === !1 && bn || e.call(this, i, n)
                }
            } else {
                let e = s[r];
                if (typeof e != "function") return;
                s[r] = function(i, ...n) {
                    (i == null ? void 0 : i.isTrusted) === !1 && bn || e.call(this, i, n)
                }
            }
        }
    }

    function Wd(s) {
        if (document != null && document.prerendering) {
            document.addEventListener("prerenderingchange", s, {
                once: !0
            });
            return
        }
        s()
    }

    function B(s, r, t, e) {
        var i = arguments.length,
            n = i < 3 ? r : e === null ? e = Object.getOwnPropertyDescriptor(r, t) : e,
            o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(s, r, t, e);
        else
            for (var c = s.length - 1; c >= 0; c--)(o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
        return i > 3 && n && Object.defineProperty(r, t, n), n
    }

    function Yd() {
        let s = new MutationObserver(r => {
            r.forEach(t => {
                J(t.removedNodes, e => {
                    e instanceof HTMLElement && e.tagName === "CS-NATIVE-FRAME-HOLDER" && ($.counters.pureWindowState.count("iframe-deletion"), it.warn("<cs-native-frame-holder> deleted"), s.disconnect())
                })
            })
        });
        s.observe(document.body, {
            childList: !0
        })
    }

    function ea(s) {
        return typeof s != "function" ? !1 : s.toString().indexOf("[native code]") !== -1
    }

    function Xd() {
        (!ea(MutationObserver) || !ea(MutationObserver.prototype.observe)) && $.counters.patchedNativeFunctions.count("MutationObserver")
    }

    function Kd() {
        try {
            window.CSPureWindow && Yd(), Xd()
        } catch {}
    }
    var dt = (() => {
            let s;
            return function(r) {
                r.CURRENT_DOMAIN = "CURRENT_DOMAIN";

                function t(l) {
                    let f = new csRegExp(`(^|;)[ ]*${l}=([^;]*)`).exec(document.cookie);
                    return f ? decodeURIComponent(f[2]) : null
                }
                r.get = t;

                function e(l, h, f, d, m, E) {
                    let v = encodeURIComponent(`${h}`),
                        C = f === r.CURRENT_DOMAIN ? void 0 : f,
                        P = i(d),
                        S = P ? `;expires=${P.toUTCString()}` : "",
                        w = ";path=/",
                        I = Mt(C) ? `;domain=${C}` : "",
                        O = `${l}=${v}${S}${w}${I}`;
                    return Z(m) && m !== We.NotSet && (O = `${O};SameSite=${m}`), Z(E) && E === ae.Yes && (O = `${O};Secure`), document.cookie = O, !0
                }
                r.set = e;

                function i(l) {
                    return Jt(l) ? new csDate(M.now() + l) : l
                }
                r.toExpireDate = i;

                function n(l, h) {
                    t(l) && e(l, "", h, new csDate(0)), t(l) && e(l, "", h, new csDate(0), We.None, ae.Yes)
                }
                r.remove = n;

                function o() {
                    return document.cookie.length > 0
                }
                r.isCookiePresent = o;

                function c(l, h) {
                    let f = "_cs_root-domain",
                        d = t(f);
                    if (d !== null && d !== "1") return d;
                    let m = csString.prototype.split.call(window.location.hostname, "."),
                        E = csArray.prototype.pop.call(m);
                    for (; m.length && (d === null || d === "1");) E = csArray.prototype.join.call([csArray.prototype.pop.call(m), E], "."), e(f, E, E, void 0, l, h), d = t(f);
                    return n(f, E), E
                }
                r.getRootDomain = c
            }(s || (s = {})), s
        })(),
        Jd = (() => {
            let s;
            return function(r) {
                function t() {
                    return window.navigator.vendor && csString.prototype.indexOf.call(window.navigator.vendor, "Apple") > -1 && window.navigator.appVersion && csString.prototype.indexOf.call(window.navigator.appVersion, "Version/12.") > -1
                }
                r.browserIsSafariV12 = t
            }(s || (s = {})), s
        })(),
        We = (() => {
            let s;
            return function(r) {
                r.None = "None", r.Lax = "Lax", r.NotSet = "X"
            }(s || (s = {})), s
        })(),
        ae = (() => {
            let s;
            return function(r) {
                r[r.Yes = 1] = "Yes", r[r.No = 0] = "No"
            }(s || (s = {})), s
        })(),
        vr = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.C = e, this.Oi = i, this.sl = !1, this.uf = We.NotSet, this.il = ae.No
                }
                getSameSiteFlag() {
                    return this.uf
                }
                getSecureFlag() {
                    return this.il
                }
                getDomain() {
                    return this.rl
                }
                getRootDomain() {
                    return this.df
                }
                init() {
                    if (this.E.cookielessTrackingEnabled) return;
                    let t = this.iS(),
                        e = this.rS();
                    this.sl = this.nS(t, e), this.sl ? (this.uf = t, this.il = e) : this.E.secureCookiesEnabled && this.C.getUrlProtocol() === "https:" && (this.il = ae.Yes), this.df = this.oS(), this.rl = this.aS(this.df)
                }
                nS(t, e) {
                    return Jd.browserIsSafariV12() ? !1 : (dt.set(s.COOKIE_TEST_FOR_SAME_SITE, "Test same site", s.CURRENT_DOMAIN, void 0, t, e), dt.get(s.COOKIE_TEST_FOR_SAME_SITE) ? (dt.remove(s.COOKIE_TEST_FOR_SAME_SITE, s.CURRENT_DOMAIN), !0) : !1)
                }
                iS() {
                    return this.C.getUrlProtocol() === "http:" ? We.Lax : this.Oi.isSameSiteNoneSecureNeeded() || this.E.crossDomainTracking ? We.None : We.Lax
                }
                rS() {
                    return this.C.getUrlProtocol() === "http:" ? ae.No : this.E.secureCookiesEnabled || this.E.crossDomainTracking || this.Oi.isSameSiteNoneSecureNeeded() ? ae.Yes : ae.No
                }
                isSameSiteSupported() {
                    return this.sl
                }
                set(t, e, i, n) {
                    let o = dt.toExpireDate(i),
                        c = n ? ae.Yes : this.getSecureFlag();
                    dt.set(t, e, this.rl, o, this.getSameSiteFlag(), c)
                }
                get(t) {
                    let i = new csRegExp(`(^|;)[ ]*${t}=([^;]*)`).exec(document.cookie);
                    return i ? decodeURIComponent(i[2]) : null
                }
                delete(t, e) {
                    let i = e || this.rl;
                    dt.remove(t, i)
                }
                oS() {
                    let t = this.Oi.isSameSiteNoneSecureNeeded() && this.isSameSiteSupported(),
                        e = t ? We.None : void 0,
                        i = t ? ae.Yes : void 0;
                    return dt.getRootDomain(e, i)
                }
                aS(t) {
                    return this.E.allowSubdomains ? t : dt.CURRENT_DOMAIN
                }
            }
            return s.CURRENT_DOMAIN = "CURRENT_DOMAIN", s.COOKIE_TEST_FOR_SAME_SITE = "_cs_same_site", s
        })(),
        Ds = "_cs_t",
        sa = "1",
        Qd = (() => {
            class s {
                constructor(t, e) {
                    this.Rt = t, this.E = e, this.ua = !1, this.da = !1
                }
                init() {
                    if (!this.E.cookielessTrackingEnabled && this.Rt.isTopWindowTracker() && "cookie" in document) {
                        if (!this.Rt.isInIframeContext() && dt.isCookiePresent()) {
                            this.ua = !0, this.da = !1;
                            return
                        }
                        if (dt.set(Ds, sa, dt.CURRENT_DOMAIN), dt.get(Ds) !== null) {
                            this.ua = !0, this.da = !1, dt.remove(Ds, dt.CURRENT_DOMAIN);
                            return
                        }
                        dt.set(Ds, sa, dt.CURRENT_DOMAIN, void 0, We.None, ae.Yes), dt.get(Ds) !== null && (this.ua = !0, this.da = !0, dt.remove(Ds, dt.CURRENT_DOMAIN))
                    }
                }
                areCookiesEnabled() {
                    return this.ua
                }
                isSameSiteNoneSecureNeeded() {
                    return this.da
                }
            }
            return s
        })();

    function Zd() {
        let s = "CSSessionStorageTest";
        try {
            return sessionStorage.setItem(s, s), sessionStorage.getItem(s) !== s ? !1 : (sessionStorage.removeItem(s), !0)
        } catch {
            return !1
        }
    }
    var tf = (() => {
            class s {
                constructor(t, e) {
                    this.E = t, this.Oi = e
                }
                canTrack() {
                    return this.E.isProjectActive() && this.cS() && this.ff() && this.lS()
                }
                canTrackInChild() {
                    return this.E.isProjectActive() && this.hS() && (this.ff() || this.uS())
                }
                lS() {
                    return this.E.cookielessTrackingEnabled ? Zd() : this.Oi.areCookiesEnabled()
                }
                ff() {
                    return Gd(window.location.hostname, this.E.hostnames)
                }
                cS() {
                    return !this.pf() && this.dS()
                }
                hS() {
                    return !this.pf() && this.fS()
                }
                uS() {
                    return window.location.protocol === "about:" && window.location.hostname === ""
                }
                pf() {
                    return "visibilityState" in document && document.visibilityState === "prerender"
                }
                dS() {
                    return this.gf() && this.pS()
                }
                fS() {
                    return this.gf()
                }
                pS() {
                    try {
                        return !!window.localStorage
                    } catch {
                        return !1
                    }
                }
                gf() {
                    return "pageXOffset" in window && "pageYOffset" in window && "onpagehide" in window && "JSON" in window && "parse" in window.csJSON && "stringify" in window.csJSON && "addEventListener" in window && "removeEventListener" in window && "Node" in window && "filter" in csArray.prototype && "forEach" in csArray.prototype && "querySelectorAll" in document && "now" in csDate && "keys" in Object && "performance" in window && "Map" in window && "Set" in window
                }
            }
            return s
        })(),
        Rc = ":";

    function ia(s) {
        let r = [],
            t = ef(s),
            e = csString.prototype.split.call(t, "/");
        for (let i of e) jt(i, Rc) ? csArray.prototype.push.call(r, {
            key: i,
            value: `CS_ANONYMIZED_${csString.prototype.toUpperCase.call(csString.prototype.slice.call(i,1))}`
        }) : csArray.prototype.push.call(r, {
            key: i,
            value: null
        });
        return r
    }

    function ef(s) {
        let r = s;
        return jt(s, "/") && (r = csString.prototype.substring.call(r, 1)), Ai(s, "/") && (r = csString.prototype.slice.call(r, 0, -1)), r
    }
    var sf = /\b((?:profile|user|last|first|primary|primary(?:[/_+-]|%20)?last)(?:[/_+-]|%20)?(?:name)[/=])[^#;?&/]+/gi,
        rf = "$1CS_ANONYMIZED_NAME",
        nf = (() => {
            class s {
                constructor(t) {
                    this.D = t
                }
                anonymizeUrl(t, e = {}) {
                    let i = e.maskingPatterns || [],
                        n = e.partialMaskingPatterns || [],
                        o = this.D.anonymizePII(t);
                    if (o = this.D.anonymizeJwt(o), e.maskNames) {
                        let h = o;
                        o = this.Sn(o), o !== h && ($.counters.redactedPII.count("name"), $.counters.redactedPII.count("name-in-url"))
                    }
                    let c = this.gS(o, i);
                    if (c !== o) return $.counters.redactedPII.count("url"), c;
                    let l = this.mS(o, n);
                    return l !== o && $.counters.redactedPII.count("url"), l
                }
                removeQueryString(t) {
                    let {
                        path: e,
                        queryString: i
                    } = this.nl(t);
                    return i !== "" ? `${e}?` : e
                }
                nl(t) {
                    let e = csString.prototype.indexOf.call(t, "?"),
                        i, n = "";
                    return e !== -1 ? (i = csString.prototype.slice.call(t, 0, e), n = csString.prototype.slice.call(t, e, t.length)) : i = t, {
                        path: i,
                        queryString: n
                    }
                }
                gS(t, e) {
                    if (e.length === 0) return t;
                    let {
                        path: i,
                        queryString: n
                    } = this.nl(t), o = csString.prototype.split.call(i, "/");
                    for (let c of e) {
                        let l = this.yS(o, c);
                        if (l !== null) return `${l}${n}`
                    }
                    return t
                }
                yS(t, e) {
                    if (t.length < e.length) return null;
                    let i = [];
                    for (let n = 0; n < t.length; n++) {
                        let o = t[n];
                        if (n >= e.length) {
                            csArray.prototype.push.call(i, o);
                            continue
                        }
                        let c = e[n].key;
                        if (this.mf(c)) {
                            let l = e[n].value;
                            csArray.prototype.push.call(i, l);
                            continue
                        }
                        if (o === c) {
                            csArray.prototype.push.call(i, o);
                            continue
                        }
                        return null
                    }
                    return csArray.prototype.join.call(i, "/")
                }
                mS(t, e) {
                    if (e.length === 0) return t;
                    let {
                        path: i,
                        queryString: n
                    } = this.nl(t), o = csString.prototype.split.call(i, "/");
                    for (let c of e) o = this.ES(o, c);
                    return `${csArray.prototype.join.call(o,"/")}${n}`
                }
                ES(t, e) {
                    let i = [],
                        n = 0,
                        c = t[0] === "http:" || t[0] === "https:" ? 2 : 0;
                    for (let l = 0; l < t.length; l++) {
                        let h = t[l],
                            f = e[n].key;
                        if (this.mf(f) && l >= c) {
                            let d = e[n].value;
                            csArray.prototype.push.call(i, h.length > 0 ? d : ""), n++, n === e.length && (n = 0);
                            continue
                        }
                        if (h === f) {
                            csArray.prototype.push.call(i, h), n++, n === e.length && (n = 0);
                            continue
                        }
                        for (let d = 0; d < n; d++) {
                            let m = l - n + d;
                            i[m] = t[m]
                        }
                        n = 0, csArray.prototype.push.call(i, h)
                    }
                    for (let l = 0; l < n; l++) {
                        let h = t.length - n + l;
                        i[h] = t[h]
                    }
                    return i
                }
                mf(t) {
                    return jt(t, Rc)
                }
                Sn(t) {
                    return csString.prototype.replace.call(t, sf, rf)
                }
            }
            return s
        })(),
        of = "spki",
        ra = "RSA-OAEP",
        af = "SHA-256",
        na = "AES-CTR",
        cf = "SHA-1",
        oa = 190,
        ai = (() => {
            let s;
            return function(r) {
                var t;
                let e = !1,
                    i = null,
                    n, o = typeof TextEncoder != "undefined" ? new TextEncoder : null,
                    c;
                r.crypto = (t = st.crypto) === null || t === void 0 ? void 0 : t.subtle, r.MAX_DIGEST_INPUT_SIZE = 100;

                function l() {
                    return !e
                }
                r.isKeyImported = l;

                function h() {
                    return i
                }
                r.getCryptoKey = h;

                function f() {
                    var O, T;
                    return ((T = (O = st.self.crypto) === null || O === void 0 ? void 0 : O.subtle) === null || T === void 0 ? void 0 : T.encrypt) != null && st.self.CryptoKey != null
                }
                r.isSupported = f;
                async function d(O) {
                    n = r.crypto.importKey( of , ec(O), {
                        name: ra,
                        hash: af
                    }, !1, ["encrypt"]).catch(() => (e = !0, null)), i = await n, n = void 0, i || it.warn(`Fail to import public key '${O}'`)
                }
                r.importKey = d;
                async function m(O) {
                    if (!f() || e) return null;
                    await n;
                    let T = qn(O);
                    T.byteLength > oa && (T = T.slice(0, oa));
                    try {
                        let U = await r.crypto.encrypt({
                            name: ra
                        }, i, T);
                        return Uo(U)
                    } catch {
                        return null
                    }
                }
                r.asymmetricEncrypt = m;
                async function E(O, T) {
                    if (!f() || e) return null;
                    let U = {
                            counter: T.initializationVector,
                            name: na,
                            length: 64
                        },
                        tt = o.encode(O);
                    try {
                        let ot = await r.crypto.encrypt(U, T.cryptoKey, tt);
                        return Uo(ot)
                    } catch {
                        return null
                    }
                }
                r.symmetricEncrypt = E;
                async function v(O) {
                    let T = await C(O);
                    if (!T) throw new Error("Export secret failed");
                    let U = await m(T);
                    if (!U) throw new Error("Encrypt secret failed");
                    return U
                }
                r.encryptSecret = v;
                async function C(O) {
                    var T;
                    if (!f()) return null;
                    try {
                        return (T = (await r.crypto.exportKey("jwk", O)).k) !== null && T !== void 0 ? T : null
                    } catch {
                        return null
                    }
                }
                async function P() {
                    if (!f() || e) return null;
                    try {
                        return {
                            cryptoKey: await r.crypto.generateKey({
                                name: na,
                                length: 128
                            }, !0, ["encrypt", "decrypt"]),
                            initializationVector: st.crypto.getRandomValues(new Uint8Array(16))
                        }
                    } catch {
                        return null
                    }
                }
                r.generateSymmetricKey = P;

                function S(O) {
                    c = O
                }
                r.setDigestSalt = S;
                async function w(O) {
                    O = csString.prototype.toLocaleLowerCase.call(csString.prototype.trim.call(O)), c && (O = `${O}:${c}`);
                    let T = o.encode(O);
                    try {
                        let U = await r.crypto.digest(cf, T);
                        return yn(U)
                    } catch {
                        return null
                    }
                }
                r.digest = w;

                function I() {
                    return st.crypto.subtle.generateKey({
                        name: "RSA-OAEP",
                        modulusLength: 2048,
                        publicExponent: new Uint8Array([1, 0, 1]),
                        hash: "SHA-256"
                    }, !0, ["encrypt", "decrypt"])
                }
                r.generateKeyPair = I
            }(s || (s = {})), s
        })(),
        Ee = (() => {
            let s;
            return function(r) {
                r.REGEX = "regex", r.START = "start", r.NOT_START = "not-start", r.END = "end", r.NOT_END = "not-end", r.CONTAIN = "contain", r.NOT_CONTAIN = "not-contain", r.EXACT = "exact", r.NOT_EXACT = "not-exact"
            }(s || (s = {})), s
        })(),
        je = (() => {
            let s;
            return function(r) {
                r.START = "start", r.NOT_START = "not-start", r.END = "end", r.NOT_END = "not-end", r.CONTAIN = "contain", r.NOT_CONTAIN = "not-contain", r.EXACT = "exact", r.NOT_EXACT = "not-exact"
            }(s || (s = {})), s
        })(),
        as = (() => {
            let s;
            return function(r) {
                r.replayRecordingUnmaskedUrlRegex = "replayRecordingUnmaskedUrlRegex", r.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex", r.replayRecordingUnmaskedUrlRegexRules = "replayRecordingUnmaskedUrlRegexRules", r.replayRecordingMaskedUrlRegexRules = "replayRecordingMaskedUrlRegexRules"
            }(s || (s = {})), s
        })(),
        ro = (() => {
            class s {
                constructor() {
                    this.ol = []
                }
                setRegexRules(t) {
                    this.ol = csArray.prototype.filter.call(csArray.prototype.map.call(t, e => this.SS(e)), e => e !== null)
                }
                evaluateUrl(t) {
                    return csArray.prototype.some.call(this.ol, e => this.yf(t, e))
                }
                getMatchingRules(t) {
                    return csArray.prototype.map.call(csArray.prototype.filter.call(this.ol, e => this.yf(t, e)), e => e.ruleInput)
                }
                yf(t, e) {
                    var i, n;
                    let o = this.vS(t, e);
                    return !this._S(e) || !this.wS(e) ? !1 : !!(e != null && e.notOperator ? !(!((i = e.regex) === null || i === void 0) && i.test(o)) : !((n = e.regex) === null || n === void 0) && n.test(o))
                }
                _S(t) {
                    let e = new csDate,
                        i = t.startDate && t.startDate > e,
                        n = t.endDate && t.endDate < e;
                    return !i && !n
                }
                wS(t) {
                    let e = t.samplingRate !== 100,
                        i = e && Es.boolean(t.samplingRate);
                    return !e || i
                }
                fa(t) {
                    return !jt(t, "http://") && !jt(t, "https://") ? `https://${t}` : t
                }
                vS(t, e) {
                    let i = bc(this.fa(t));
                    return i ? e.ignoreQueryParams && e.ignoreURIFragments ? `${i.origin}${i.pathname}` : e.ignoreQueryParams ? `${i.origin}${i.pathname}${i.hash}` : e.ignoreURIFragments ? `${i.origin}${i.pathname}${i.search}` : t : t
                }
                pa(t) {
                    return t != null && t.ignoreCaseSensitivity ? "i" : ""
                }
                SS(t) {
                    let e = null,
                        i = !1;
                    switch (t.operator) {
                        case je.NOT_START:
                        case Ee.NOT_START:
                            i = !0;
                        case je.START:
                        case Ee.START:
                            e = new csRegExp(`^${t.value}`, this.pa(t));
                            break;
                        case je.NOT_END:
                        case Ee.NOT_END:
                            i = !0;
                        case je.END:
                        case Ee.END:
                            e = new csRegExp(`${t.value}$`, this.pa(t));
                            break;
                        case je.NOT_CONTAIN:
                        case Ee.NOT_CONTAIN:
                            i = !0;
                        case je.CONTAIN:
                        case Ee.CONTAIN:
                        case Ee.REGEX:
                            e = new csRegExp(`${t.value}`, this.pa(t));
                            break;
                        case je.NOT_EXACT:
                        case Ee.NOT_EXACT:
                            i = !0;
                        case je.EXACT:
                        case Ee.EXACT:
                            e = new csRegExp(`^${t.value}$`, this.pa(t));
                            break;
                        default:
                            it.warn(`compileRegexRule, unknown operator: ${t.operator}`)
                    }
                    if (e === null) return null;
                    let n = t.startDate ? this.Ef(t.startDate) : void 0,
                        o = t.endDate ? this.Ef(t.endDate) : void 0;
                    return {
                        regex: e,
                        ignoreQueryParams: t.ignoreQueryParams,
                        ignoreURIFragments: t.ignoreURIFragments,
                        notOperator: i,
                        samplingRate: t.samplingRate !== void 0 ? t.samplingRate : 100,
                        startDate: n,
                        endDate: o,
                        ruleInput: t
                    }
                }
                Ef(t) {
                    let e = new csDate(t);
                    return isNaN(e.getTime()) ? void 0 : e
                }
            }
            return s
        })(),
        no = (() => {
            class s {
                constructor() {
                    this.listeners = []
                }
                addListener(t) {
                    csArray.prototype.push.call(this.listeners, t)
                }
            }
            return s
        })(),
        ci = "|iframe|",
        lf = (() => {
            class s extends no {
                constructor(t, e, i, n) {
                    super(), this.AS = t, this.TS = e, this.bS = i, this.RS = n
                }
                emitIframeEvent(t, e, i) {
                    if (this.CS(e) && t === null) {
                        F.error(`iframeEventEmitter received event ${e} with null iframe, content:${csJSON.stringify(i)}`);
                        return
                    }
                    switch (e) {
                        case At.ChildLogMessage:
                            this.IS(i);
                            break;
                        case At.AnalysisEvent:
                            {
                                let n = i,
                                    o = this.AS.transformEvent(t, n);o.isUserEvent ? this.PS(o.event) : this.OS(o.event);
                                break
                            }
                        case At.RecordingEvent:
                            {
                                let n = i,
                                    o = this.RS.transformEvents(t, n);
                                if (o.events.length === 0) return;o.containsUserEvent ? this.NS(o.events) : this.MS(o.events);
                                break
                            }
                        case At.JavascriptError:
                            this.DS(i);
                            break;
                        case At.ApiError:
                            this.kS(i);
                            break;
                        case At.DetailedApiError:
                            this.LS(i);
                            break;
                        case At.CustomError:
                            this.xS(i);
                            break;
                        case At.EmerchandisingMessage:
                            {
                                let n = this.bS.transformEvent(t, i);this.VS(n);
                                break
                            }
                        case At.Commands:
                            {
                                let n = this.TS.transformEvent(t, i);this.US(n);
                                break
                            }
                        case At.IntegrationCallback:
                            this.jS(i);
                            break;
                        case At.StaticResource:
                            this.HS(i);
                            break;
                        case At.TrackingContextRequestMessage:
                            this.BS(i);
                            break;
                        default:
                            F.error(`Parent received unknown data type from iframe : ${csJSON.stringify(i)}`)
                    }
                }
                CS(t) {
                    let e = [At.AnalysisEvent, At.RecordingEvent, At.EmerchandisingMessage, At.Commands];
                    return csArray.prototype.indexOf.call(e, t) !== -1
                }
                IS(t) {
                    let {
                        message: e,
                        errorCode: i,
                        level: n
                    } = t;
                    switch (n) {
                        case at.debug:
                            F.debug(e, i);
                            break;
                        case at.warn:
                            F.warn(e, !0, i);
                            break;
                        case at.implementation:
                            F.implementation(e, i);
                            break;
                        case at.error:
                            F.error(e, i);
                            break;
                        case at.critical:
                            F.critical(e, i);
                            break
                    }
                }
                PS(t) {
                    for (let e of this.listeners) e.onIframeAnalysisUserEvent && e.onIframeAnalysisUserEvent(t)
                }
                OS(t) {
                    for (let e of this.listeners) e.onIframeAnalysisBrowserEvent && e.onIframeAnalysisBrowserEvent(t)
                }
                NS(t) {
                    for (let e of this.listeners) e.onIframeRecordingUserEvent && e.onIframeRecordingUserEvent(t)
                }
                MS(t) {
                    for (let e of this.listeners) e.onIframeRecordingBrowserEvent && e.onIframeRecordingBrowserEvent(t)
                }
                DS(t) {
                    for (let e of this.listeners) e.onIframeJavascriptError && e.onIframeJavascriptError(t)
                }
                kS(t) {
                    for (let e of this.listeners) e.onIframeApiError && e.onIframeApiError(t)
                }
                LS(t) {
                    for (let e of this.listeners) e.onIframeDetailedApiError && e.onIframeDetailedApiError(t)
                }
                VS(t) {
                    for (let e of this.listeners) e.onIframeEmerchandisingMessage && e.onIframeEmerchandisingMessage(t)
                }
                US(t) {
                    for (let e of this.listeners) e.onIframeCommands && e.onIframeCommands(t)
                }
                jS(t) {
                    for (let e of this.listeners) e.onIframeIntegrationCallback && e.onIframeIntegrationCallback(t)
                }
                HS(t) {
                    for (let e of this.listeners) e.onIframeStaticResource && e.onIframeStaticResource(t)
                }
                BS(t) {
                    for (let e of this.listeners) e.onTrackingContextRequestCallback && e.onTrackingContextRequestCallback(t)
                }
                xS(t) {
                    for (let e of this.listeners) e.onIframeCustomError && e.onIframeCustomError(t)
                }
            }
            return s
        })(),
        z = (() => {
            let s;
            return function(r) {
                r[r.RESIZE = 0] = "RESIZE", r[r.SCROLL = 1] = "SCROLL", r[r.MOUSEMOVE = 2] = "MOUSEMOVE", r[r.MOUSEDOWN = 3] = "MOUSEDOWN", r[r.MOUSEUP = 4] = "MOUSEUP", r[r.CLICK = 5] = "CLICK", r[r.MOUSEOVER = 6] = "MOUSEOVER", r[r.MOUSEOUT = 7] = "MOUSEOUT", r[r.CHANGE = 10] = "CHANGE", r[r.FOCUSIN = 11] = "FOCUSIN", r[r.FOCUSOUT = 12] = "FOCUSOUT", r[r.TAP = 14] = "TAP", r[r.KEYDOWN = 15] = "KEYDOWN", r[r.KEYUP = 16] = "KEYUP", r[r.COMMAND = 17] = "COMMAND", r[r.SUBMIT_COMMAND = 18] = "SUBMIT_COMMAND", r[r.PERFORMANCE = 19] = "PERFORMANCE", r[r.DRAG = 20] = "DRAG", r[r.FLICK = 21] = "FLICK", r[r.KEYBOARD_NAVIGATION = 22] = "KEYBOARD_NAVIGATION", r[r.ZOOM = 23] = "ZOOM", r[r.VIEWPORT_SCALE = 24] = "VIEWPORT_SCALE", r[r.TEXT_HIGHLIGHT = 25] = "TEXT_HIGHLIGHT", r[r.DEAD_CLICK = 30] = "DEAD_CLICK", r[r.DEAD_ZOOM = 31] = "DEAD_ZOOM", r[r.PAGE_RELOAD = 32] = "PAGE_RELOAD", r[r.THRASHED_CURSOR = 33] = "THRASHED_CURSOR", r[r.BLANK_PAGE = 34] = "BLANK_PAGE", r[r.EXTERNAL_EVENT = 35] = "EXTERNAL_EVENT", r[r.SUBMIT = 36] = "SUBMIT", r[r.CUSTOM_EVENT = 37] = "CUSTOM_EVENT"
            }(s || (s = {})), s
        })(),
        $r = (() => {
            let s;
            return function(r) {
                r.SUCCESS = "success", r.FAILURE = "failure", r.ATTEMPT = "attempt"
            }(s || (s = {})), s
        })(),
        Ye = (() => {
            let s;
            return function(r) {
                r.APPCUES = "appcues", r.CHAMELEON = "chameleon", r.CONTENTSQUARE = "contentsquare", r.SEGMENT = "segment", r.WEB = "web"
            }(s || (s = {})), s
        })();

    function hf(s) {
        return s.tgtHM !== void 0
    }

    function Cc(s) {
        return s.tgt !== void 0
    }

    function uf(s) {
        return s.tgtLk !== void 0
    }

    function df(s) {
        return s.x !== void 0 && s.y !== void 0
    }

    function ff(s) {
        return s === $r.SUCCESS || s === $r.FAILURE || s === $r.ATTEMPT
    }

    function pf(s) {
        return s === Ye.APPCUES || s === Ye.CHAMELEON || s === Ye.CONTENTSQUARE || s === Ye.SEGMENT || s === Ye.WEB
    }
    var gf = Math.pow(2, 31);

    function mf(s, r = 0) {
        let l = r >>> 0,
            h = s.length;
        for (let E = 0; E < h - 3; E += 4) {
            let v = (csString.prototype.charCodeAt.call(s, E) & 255 | (csString.prototype.charCodeAt.call(s, E + 1) & 255) << 8 | (csString.prototype.charCodeAt.call(s, E + 2) & 255) << 16 | (csString.prototype.charCodeAt.call(s, E + 3) & 255) << 24) >>> 0;
            v = Math.imul(v, 3432918353), v = v << 15 | v >>> 17, v = Math.imul(v, 461845907), l ^= v, l = l << 13 | l >>> 19, l = Math.imul(l, 5) + 3864292196
        }
        let f = 0,
            d = h & 3,
            m = h - d;
        switch (d) {
            case 3:
                f ^= (csString.prototype.charCodeAt.call(s, m + 2) & 255) << 16;
            case 2:
                f ^= (csString.prototype.charCodeAt.call(s, m + 1) & 255) << 8;
            case 1:
                f ^= csString.prototype.charCodeAt.call(s, m) & 255, f = Math.imul(f, 3432918353), f = f << 15 | f >>> 17, f = Math.imul(f, 461845907), l ^= f
        }
        return l ^= h, l ^= l >>> 16, l = Math.imul(l, 2246822507), l ^= l >>> 13, l = Math.imul(l, 3266489909), l ^= l >>> 16, l >>> 0
    }

    function Ic(s) {
        return mf(s) + gf >>> 0
    }
    var yf = (() => {
            class s {
                constructor(t, e, i) {
                    this.Q = t, this.Sf = e, this.vf = i
                }
                transformEvent(t, e) {
                    this.FS(t, e.event);
                    let i = this.Q.getElementPath(t);
                    return this.GS(i, e.event), this.$S(e.event), e
                }
                FS(t, e) {
                    if (df(e)) {
                        let i = t.getBoundingClientRect();
                        e.x = Math.round(i.left + e.x + gt.windowOffsetX()), e.y = Math.round(i.top + e.y + gt.windowOffsetY())
                    }
                }
                GS(t, e) {
                    Cc(e) && (e.tgt = `${t}${ci}${e.tgt}`), hf(e) && (e.tgtHM = `${t}${ci}${e.tgtHM}`, this.Sf || (e.tgtHMH = Ic(e.tgtHM))), uf(e) && (e.tgtLk = `${t}${ci}${e.tgtLk}`)
                }
                $S(t) {
                    !this.Sf && this.vf && this.vf.enhanceAnalysisEvent(null, t)
                }
            }
            return s
        })(),
        Ef = (() => {
            class s {
                constructor(t) {
                    this.Q = t
                }
                transformEvent(t, e) {
                    let i = this.Q.getElementPath(t);
                    return {
                        iframePath: e.iframePath ? `${i}${ci}${e.iframePath}` : i,
                        commands: e.commands
                    }
                }
            }
            return s
        })(),
        Sf = (() => {
            class s {
                constructor(t) {
                    this.Q = t
                }
                transformEvent(t, e) {
                    if (e.products.length === 0) return e;
                    let i = this.Q.getElementPath(t),
                        n = csArray.prototype.map.call(e.products, o => ({ ...o,
                            targetPath: `${i}${ci}${o.targetPath}`
                        }));
                    return { ...e,
                        products: n
                    }
                }
            }
            return s
        })(),
        vf = 1,
        aa = csSymbol("nodeIdentifier");

    function G(s) {
        let r = s[aa];
        return r != null ? r : s[aa] = vf++
    }
    var k = (() => {
        let s;
        return function(r) {
            r[r.MUTATION_INSERT = 1] = "MUTATION_INSERT", r[r.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", r[r.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", r[r.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", r[r.INITIAL_DOM = 5] = "INITIAL_DOM", r[r.SCROLL = 6] = "SCROLL", r[r.CLICK = 8] = "CLICK", r[r.RESIZE = 9] = "RESIZE", r[r.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", r[r.INPUT_SELECT = 11] = "INPUT_SELECT", r[r.INPUT_TEXT = 12] = "INPUT_TEXT", r[r.HASH_CHANGE = 13] = "HASH_CHANGE", r[r.UNANONYMIZED_CONSENT_GRANTED = 14] = "UNANONYMIZED_CONSENT_GRANTED", r[r.UNANONYMIZED_CONSENT_WITHDRAWN = 15] = "UNANONYMIZED_CONSENT_WITHDRAWN", r[r.MOUSE_OVER = 16] = "MOUSE_OVER", r[r.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", r[r.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", r[r.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", r[r.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", r[r.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", r[r.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", r[r.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", r[r.PAGE_EVENT = 27] = "PAGE_EVENT", r[r.API_ERROR = 28] = "API_ERROR", r[r.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", r[r.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", r[r.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", r[r.KEY_DOWN = 32] = "KEY_DOWN", r[r.KEY_UP = 33] = "KEY_UP", r[r.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND", r[r.STYLESHEET_RULE_DELETE = 37] = "STYLESHEET_RULE_DELETE", r[r.USER_IDENTIFIER = 38] = "USER_IDENTIFIER", r[r.TOUCH_START = 41] = "TOUCH_START", r[r.TOUCH_MOVE = 42] = "TOUCH_MOVE", r[r.TOUCH_END = 43] = "TOUCH_END", r[r.GESTURE_RECOGNITION = 44] = "GESTURE_RECOGNITION", r[r.POINTER_DOWN = 47] = "POINTER_DOWN", r[r.POINTER_MOVE = 48] = "POINTER_MOVE", r[r.POINTER_UP = 49] = "POINTER_UP", r[r.CUSTOM_ERROR = 50] = "CUSTOM_ERROR", r[r.CUSTOM_ELEMENT_REGISTRATION = 54] = "CUSTOM_ELEMENT_REGISTRATION", r[r.REGISTER_ADOPTED_STYLE_SHEET = 60] = "REGISTER_ADOPTED_STYLE_SHEET", r[r.SET_ADOPTED_STYLE_SHEETS = 61] = "SET_ADOPTED_STYLE_SHEETS", r[r.ADOPTED_STYLESHEET_RULE_INSERT = 62] = "ADOPTED_STYLESHEET_RULE_INSERT", r[r.ADOPTED_STYLESHEET_RULE_DELETE = 63] = "ADOPTED_STYLESHEET_RULE_DELETE", r[r.SCREEN_RESIZE = 65] = "SCREEN_RESIZE", r[r.RESOURCE_HASHES = 66] = "RESOURCE_HASHES", r[r.PERFORMANCE_NAVIGATION_TIMING = 67] = "PERFORMANCE_NAVIGATION_TIMING", r[r.PERFORMANCE_RESOURCE_TIMING = 68] = "PERFORMANCE_RESOURCE_TIMING", r[r.RECORDING_INFO_EVENT = 72] = "RECORDING_INFO_EVENT", r[r.TEXT_REF = 73] = "TEXT_REF", r[r.TOUCH_CANCEL = 74] = "TOUCH_CANCEL", r[r.MUTATION_MOVE = 75] = "MUTATION_MOVE", r[r.STYLESHEET_RULE_UPDATE = 76] = "STYLESHEET_RULE_UPDATE", r[r.ADOPTED_STYLESHEET_RULE_UPDATE = 77] = "ADOPTED_STYLESHEET_RULE_UPDATE", r[r.VIDEO_PLAY = 78] = "VIDEO_PLAY", r[r.VIDEO_PAUSE = 79] = "VIDEO_PAUSE", r[r.VIDEO_SEEK = 80] = "VIDEO_SEEK", r[r.ADOPTED_STYLESHEET_DISABLED = 98] = "ADOPTED_STYLESHEET_DISABLED", r[r.STYLESHEET_DISABLED = 99] = "STYLESHEET_DISABLED", r[r.DOM_INITIAL_STATE = 102] = "DOM_INITIAL_STATE", r[r.DOM_PATCH_STATE = 103] = "DOM_PATCH_STATE", r[r.DEBUG = 999] = "DEBUG"
        }(s || (s = {})), s
    })();
    var si = (() => {
            let s;
            return function(r) {
                r[r.SWIPE = 0] = "SWIPE", r[r.PINCH_IN = 1] = "PINCH_IN", r[r.PINCH_OUT = 2] = "PINCH_OUT", r[r.LONG_PRESS = 3] = "LONG_PRESS", r[r.TAP = 4] = "TAP", r[r.DOUBLE_TAP = 5] = "DOUBLE_TAP"
            }(s || (s = {})), s
        })(),
        _f = (() => {
            class s {
                constructor() {
                    this.zS = {
                        clientX: 2,
                        clientY: 3
                    }, this.qS = {
                        clientX: 1,
                        clientY: 2
                    }, this.WS = [k.POINTER_DOWN, k.POINTER_MOVE, k.POINTER_UP], this.YS = [k.TOUCH_START, k.TOUCH_MOVE, k.TOUCH_END]
                }
                transformEvents(t, e) {
                    if (!ft.isConnected(t)) return e.events = csArray.prototype.filter.call(e.events, c => c.type !== k.VISIBILITY_CHANGE), e.events.length === 0 || (F.warn(`IframeRecordingEventsTransformer received event ${At.RecordingEvent}
        from disconnected iframe, content:${csJSON.stringify(e.events)}`), e.events = []), e;
                    let i = G(t),
                        n = null;
                    csArray.prototype.some.call(e.events, c => this._f(c) || this.wf(c)) && (n = t.getBoundingClientRect());
                    for (let c of e.events) this._f(c) ? this.XS(n, c) : this.wf(c) && this.KS(n, c), c.context = c.context && c.context.length > 0 ? `${i}/${c.context}` : `${i}`;
                    return e
                }
                KS(t, e) {
                    this.Af(this.qS, t, e)
                }
                XS(t, e) {
                    this.Af(this.zS, t, e)
                }
                Af(t, e, i) {
                    i.args && (i.args[t.clientX] = Math.round(e.left + i.args[t.clientX]), i.args[t.clientY] = Math.round(e.top + i.args[t.clientY]))
                }
                _f(t) {
                    return csArray.prototype.indexOf.call(this.WS, t.type) !== -1
                }
                wf(t) {
                    return csArray.prototype.indexOf.call(this.YS, t.type) !== -1
                }
            }
            return s
        })(),
        wf = (() => {
            class s {
                constructor(t, e) {
                    this.S = t, this.mt = e
                }
                init() {
                    this.mt.addListener(this.S)
                }
                onOptout() {
                    this.S.stop()
                }
                onBeforeSessionRenewal() {
                    this.S.stop()
                }
            }
            return s
        })(),
        Ct = (() => {
            class s extends Error {
                constructor(t, e) {
                    let i = e ? `Command misuse: ${t} - ${e}` : `Command misuse: ${t}`;
                    super(i), this.name = "MisusedCommandError"
                }
            }
            return s
        })();
    var kt = (() => {
            class s {
                constructor() {
                    this._isStarted = !1
                }
                get isStarted() {
                    return this._isStarted
                }
                start(...t) {
                    this._isStarted || (this._isStarted = !0, this.onStart(...t))
                }
                stop() {
                    this._isStarted && (this._isStarted = !1, this.onStop())
                }
                restart() {
                    this.stop(), this.start()
                }
            }
            return s
        })(),
        Af = (() => {
            let s;
            return function(r) {
                r.UXA = "_uxa", r.WVT = "cs_wvt"
            }(s || (s = {})), s
        })(),
        Tf = (() => {
            class s extends kt {
                constructor(t) {
                    super(), this.al = t, this.cs = {}
                }
                register(t, e, i) {
                    for (let n of t) {
                        let o = (...c) => {
                            try {
                                let l = e(...c);
                                return $.counters.commandApplied.count(n), l
                            } catch (l) {
                                l instanceof Ct ? ($.counters.commandMisuse.count(n), F.warn(`Misused Command: ${n}; Args: ${csJSON.stringify(c)}; Error: ${Te(l)?l.stack:l}`)) : ($.counters.commandError.count(n), F.error(`Command Error - ${n}: ${Te(l)?l.stack:l}`))
                            }
                        };
                        this.cs[n] = {
                            callback: o,
                            configuration: i
                        }, this.cs
                    }
                }
                onStart() {
                    this.JS(), this.QS()
                }
                onStop() {
                    for (let t of this.al) window[t] = []
                }
                applyFromIntegration(t, e, i) {
                    this.Tf(t, e, `Commands.apply.from.integration: ${i}`), $.counters.commandsFromIntegrations.count(t)
                }
                applyFromImplementation(t, e, i) {
                    this.Tf(t, e, `Commands.apply.from.implementation: ${i}`), $.counters.commandsFromCSTC.count(t)
                }
                onIframeCommands(t) {
                    for (let e of t.commands) this.ZS(e.name, e.params, t.iframePath), $.counters.commandsFromIframe.count(e.name)
                }
                Tf(t, e, i) {
                    if (!this.isStarted) {
                        window._uxa.push([t, ...e]);
                        return
                    }
                    F.tryToExecute(i, () => {
                        if (this.cs[t]) return this.cs[t].callback(...e)
                    })()
                }
                ZS(t, e, i) {
                    F.tryToExecute(`Commands.apply.from.iframe: ${i}`, () => {
                        if (this.cs[t]) return this.cs[t].callback(...e)
                    })()
                }
                JS() {
                    for (let t of this.al) window[t].forEach(([e, ...i]) => this.bf(e, i, !1))
                }
                QS() {
                    for (let t of this.al) window[t] = {
                        push: ([e, ...i]) => this.bf(e, i, !0)
                    }
                }
                bf(t, e, i) {
                    var n, o;
                    if (this.cs[t]) {
                        if (((n = this.cs[t].configuration) === null || n === void 0 ? void 0 : n.disableApplyPending) && !i || ((o = this.cs[t].configuration) === null || o === void 0 ? void 0 : o.disableApplyImmediate) && i) return;
                        try {
                            return this.cs[t].callback(...e)
                        } catch (l) {
                            F.error(`Command ${t} failed - params: ${csJSON.stringify(e)}`, l)
                        }
                    }
                }
            }
            return s
        })(),
        bf = (() => {
            class s extends no {
                emitPageEvent(t) {
                    for (let e of this.listeners) e.onPageEvent && e.onPageEvent(t)
                }
                emitEventTriggerRecording(t, e) {
                    for (let i of this.listeners) i.onEventTriggerRecording && i.onEventTriggerRecording(t, e)
                }
                emitCustomJavaScriptErrorEvent(t) {
                    for (let e of this.listeners) e.onCustomJavaScriptErrorEvent && e.onCustomJavaScriptErrorEvent(t)
                }
                emitCustomErrorEvent(t) {
                    for (let e of this.listeners) e.onCustomErrorEvent && e.onCustomErrorEvent(t)
                }
                emitUserIdentifierEvent(t) {
                    for (let e of this.listeners) e.onUserIdentifierEvent && e.onUserIdentifierEvent(t)
                }
                emitExternalEvent(t) {
                    for (let e of this.listeners) e.onExternalEvent && e.onExternalEvent({
                        type: z.EXTERNAL_EVENT,
                        name: t,
                        ts: 0
                    })
                }
                emitTargetingRulesArtificialPageview(t) {
                    for (let e of this.listeners) e.onTargetingRulesArtificialPageview && e.onTargetingRulesArtificialPageview(t)
                }
            }
            return s
        })();

    function Rf(s) {
        return csNodenodeType.apply(s) === 1
    }

    function mt(s) {
        let r = csEventtarget.apply(s);
        return r && Rf(r) && csElementshadowRoot.apply(r) && s.composedPath ? s.__csOriginalTarget || s.composedPath()[0] : r
    }

    function Cf(s) {
        return s.composedPath && Object.defineProperty(s, "__csOriginalTarget", {
            value: s.composedPath()[0],
            writable: !1,
            enumerable: !1
        }), s
    }

    function If() {
        return (s, r, t) => {
            let e = t.value;
            return e && (t.value = function(i) {
                if (mt(i) === csEventtarget.apply(i)) return e.call(this, i)
            }), t
        }
    }
    var Pf = ["class", "data-com.agilebits.onepassword.initial-value", "data-com.onepassword.iv", "data-ember-action", "data-initial-value", "data-previous-value", "data-react-checksum", "data-reactid", "id", "maxlength", "onclick", "onsubmit", "style"],
        Of = 1024,
        Nf = 1024,
        zr;

    function li(s) {
        if (zr || (zr = document.createElement("div")), !(!!s && q(s))) return it.warn(`isValidSelector: invalid selector provided '${s}'`), !1;
        try {
            return ie.call(zr, s), !0
        } catch {
            return it.warn(`isValidSelector: invalid selector provided '${s}'`), !1
        }
    }

    function Rn(s, r) {
        if (Yo) return Yo.call(s, r);
        let t = s;
        do {
            if (ie.call(t, r)) return t;
            t = t == null ? void 0 : t.parentElement
        } while (t !== null && csNodenodeType.apply(t) === 1);
        return null
    }

    function Us(s) {
        if (!s) return s;
        switch (typeof s) {
            case "object":
                {
                    if (csArray.isArray(s)) return csArray.from(s);
                    let r = {};
                    for (let t in s) r[t] = Us(s[t]);
                    return r
                }
            default:
                return s
        }
    }

    function Pc(s) {
        for (let r in s)
            if (s[r] !== void 0) return !0;
        return !1
    }

    function Oc(s, r) {
        if (csArray.isArray(s) && csArray.isArray(r)) return s.length !== r.length || csArray.prototype.some.call(s, (i, n) => i !== r[n]) ? Us(r) : void 0;
        let t = {},
            e = new Set([...Object.keys(s || {}), ...Object.keys(r || {})]);
        for (let i of e) {
            let n = s[i],
                o = r[i];
            if (n === o) continue;
            let c = typeof n;
            if (c !== typeof o) n === void 0 && o !== void 0 ? t[i] = o : n !== void 0 && o === void 0 && (t[i] = null);
            else if (c === "object" && n && o) {
                let h = Oc(n, o);
                h !== void 0 && (t[i] = h)
            } else t[i] = Us(o)
        }
        return Pc(t) ? t : void 0
    }

    function Nc(s, r) {
        let t = { ...s
        };
        for (let [e, i] of Object.entries(r))
            if (i === null) delete t[e];
            else if (i !== void 0) {
            let n = t[e],
                o = i;
            n && typeof n == "object" && o && typeof o == "object" && !csArray.isArray(n) && !csArray.isArray(o) ? t[e] = Nc(n, o) : t[e] = o
        }
        return t
    }

    function Mf(s) {
        let r = null;
        return t => t ? r = t : r || (r = s())
    }
    var Df = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);

    function kf(s) {
        return csString.prototype.indexOf.call(s, "-") > 0 && csString.prototype.indexOf.call(s, ":") === -1 && csString.prototype.indexOf.call(s, '"') === -1 && csString.prototype.indexOf.call(s, ",") === -1 && !Df.has(s)
    }
    var ks = Mf(() => new WeakMap),
        hi = (() => {
            let s;
            return function(r) {
                function t(c) {
                    return ks().get(c)
                }
                r.getAll = t;

                function e(c, l) {
                    var h;
                    return (h = ks().get(c)) === null || h === void 0 ? void 0 : h[l]
                }
                r.get = e;

                function i(c, l, h) {
                    let f = ks().get(c);
                    f || ks().set(c, f = {}), f[l] = h
                }
                r.set = i;

                function n(c, l) {
                    let h = ks().get(c);
                    h && delete h[l]
                }
                r.remove = n;

                function o() {
                    ks(new WeakMap)
                }
                r.reset = o
            }(s || (s = {})), s
        })(),
        et = (() => {
            let s;
            return function(r) {
                function t(l, h, f) {
                    var d;
                    if (typeof Node != "undefined" && l instanceof Node) hi.set(l, h, f);
                    else {
                        let m = l;
                        (d = m.props) !== null && d !== void 0 || (m.props = {}), m.props[h] = f
                    }
                }
                r.setProperty = t;

                function e(l, h) {
                    var f;
                    return typeof Node != "undefined" && l instanceof Node ? hi.get(l, h) : (f = l.props) === null || f === void 0 ? void 0 : f[h]
                }
                r.getProperty = e;

                function i(l) {
                    return typeof Node != "undefined" && l instanceof Node ? hi.getAll(l) : l.props
                }
                r.getProperties = i;

                function n(l, h) {
                    let f = null;
                    return o(l, (d, m, E) => h(d) && (f = d) && !!E()), f
                }
                r.findDescendant = n;

                function o(l, h) {
                    c(l, void 0, h)
                }
                r.traverse = o;

                function c(l, h, f) {
                    let d = !1;
                    if (f(l, h, () => d = !0), d) return;
                    let E = l.shadowRoot;
                    E && c(E, l, f);
                    let v = l.children;
                    if (v != null && v.length) {
                        for (let C of v)
                            if (C && (c(C, l, f), d)) break
                    }
                }
            }(s || (s = {})), s
        })(),
        D = (() => {
            let s;
            return function(r) {
                let t;
                (function(S) {
                    S[S.NotMasked = 0] = "NotMasked", S[S.Parent = 1] = "Parent", S[S.Child = 2] = "Child"
                })(t = r.MaskedElementState || (r.MaskedElementState = {})), r.maskedProp = "masked", r.maskedAttributeProp = "maskedAttribute";

                function e(S) {
                    return pi(S) && "Attributes" in S && "PIISelectors" in S ? S.Attributes instanceof Array && S.PIISelectors instanceof Array : !1
                }
                r.isSelectorUserInput = e;

                function i(S) {
                    if (!pi(S) || S === null) throw new Ct("setPIISelectors");
                    return "Attributes" in S || (S.Attributes = []), "PIISelectors" in S || (S.PIISelectors = []), S
                }
                r.sanitizeSelectorUserInput = i;

                function n(S) {
                    var w, I, O;
                    return "nodeType" in S ? (w = et.getProperty(S, r.maskedProp)) !== null && w !== void 0 ? w : {
                        state: t.NotMasked
                    } : (O = (I = S.metadata) === null || I === void 0 ? void 0 : I[r.maskedProp]) !== null && O !== void 0 ? O : {
                        state: t.NotMasked
                    }
                }
                r.getMaskedElementDetails = n;

                function o(S) {
                    var w, I, O;
                    return "nodeType" in S ? (w = et.getProperty(S, r.maskedAttributeProp)) !== null && w !== void 0 ? w : {
                        attributes: []
                    } : (O = (I = S.metadata) === null || I === void 0 ? void 0 : I[r.maskedAttributeProp]) !== null && O !== void 0 ? O : {
                        attributes: []
                    }
                }
                r.getMaskedAttributeDetails = o;

                function c(S) {
                    let w = et.getProperty(S, r.maskedProp);
                    return (w == null ? void 0 : w.state) === t.Parent
                }
                r.isMaskedElement = c;

                function l(S) {
                    let w = et.getProperty(S, r.maskedProp);
                    return (w == null ? void 0 : w.state) === t.Child
                }
                r.isMaskedElementChild = l;

                function h(S, w) {
                    let I = et.getProperty(S, r.maskedAttributeProp);
                    return ((I == null ? void 0 : I.attributes) == null ? void 0 : csArray.prototype.indexOf.call(I == null ? void 0 : I.attributes, w)) > -1
                }
                r.isMaskedAttribute = h;

                function f(S, w) {
                    et.setProperty(S, r.maskedProp, w)
                }
                r.setMaskedElementProperty = f;

                function d(S) {
                    et.setProperty(S, r.maskedProp, void 0)
                }
                r.unsetMaskedElementProperty = d;

                function m(S, w) {
                    et.setProperty(S, r.maskedAttributeProp, w)
                }
                r.setMaskedAttributeProperty = m;

                function E(S, w) {
                    let I = csArray.prototype.filter.call(S.PIISelectors, U => li(U));
                    w.elementSelector.length > 0 && csArray.prototype.push.call(I, ...csString.prototype.split.call(w.elementSelector, ","));
                    let O = P([...I]),
                        T = {
                            elementSelector: csArray.prototype.join.call(O, ","),
                            attrSelector: w.attrSelector,
                            attrSelectors: w.attrSelectors
                        };
                    return csArray.prototype.forEach.call(S.Attributes, U => {
                        U != null && U.attrName && (U != null && U.selector) && li(U.selector) && !v(T.attrSelectors, U) && csArray.prototype.push.call(T.attrSelectors, U)
                    }), T.attrSelector = C(T.attrSelectors), T
                }
                r.getComputedSelectorSettings = E;

                function v(S, w) {
                    return csArray.prototype.some.call(S, I => I.selector === w.selector && I.attrName === w.attrName)
                }

                function C(S) {
                    let w = "";
                    return csArray.prototype.forEach.call(S, I => {
                        let O = csString.prototype.split.call(I.selector, ",");
                        csArray.prototype.forEach.call(O, T => {
                            li(T) && (w && (w += ","), w += T)
                        })
                    }), w
                }

                function P(S) {
                    if (S.length <= 1) return S;
                    let w = [];
                    for (let I of S) {
                        let O = csString.prototype.split.call(I, ",");
                        for (let T of O) csArray.prototype.indexOf.call(w, T) === -1 && csArray.prototype.push.call(w, T)
                    }
                    return w
                }
            }(s || (s = {})), s
        })(),
        Lf = (() => {
            class s {
                constructor(t, e) {
                    this.pt = t, this.E = e
                }
                getEventTargetPathAndHierarchy(t, e) {
                    let i = mt(t),
                        n = {
                            isNodeSensitive(o) {
                                return D.isMaskedElement(o) || D.isMaskedElementChild(o)
                            },
                            isAttributeSensitive(o, c) {
                                return D.isMaskedAttribute(o, c)
                            },
                            allWhitelistedAttributes: so(this.E.whitelistedAttributes),
                            attributeIgnoreTokens: Pf,
                            useAnonymization: e,
                            attrMaxLength: Nf,
                            hierarchyMaxLength: Of
                        };
                    return this.pt.getElementPathAndHierarchy(i, n, {
                        dynamicIdRegex: this.E.dynamicIdRegex,
                        ...this.E.pathComputationRules
                    })
                }
                getEventTargetPath(t) {
                    let e = mt(t);
                    return this.pt.getElementPath(e, {
                        dynamicIdRegex: this.E.dynamicIdRegex,
                        ...this.E.pathComputationRules
                    })
                }
                getEventTargetPathAndTargetLink(t) {
                    let e = mt(t),
                        {
                            path: i,
                            firstAnchorParent: n
                        } = this.pt.getElementPathAndFirstAnchorParent(e, {
                            dynamicIdRegex: this.E.dynamicIdRegex,
                            ...this.E.pathComputationRules
                        }),
                        o = this.sv(n) ? n.href : "";
                    return {
                        path: i,
                        targetLink: o
                    }
                }
                hasValidEventTarget(t) {
                    let e = mt(t);
                    return this.pt.isValidElement(e)
                }
                getElementPath(t) {
                    return this.pt.getElementPath(t, {
                        dynamicIdRegex: this.E.dynamicIdRegex,
                        ...this.E.pathComputationRules
                    })
                }
                sv(t) {
                    var e;
                    return t !== null && t.hasAttribute("href") && !Tn((e = t.getAttribute("href")) !== null && e !== void 0 ? e : "", "#")
                }
            }
            return s
        })();

    function _r(s, r) {
        typeof r == "number" && (r = {
            wait: r
        });
        let t = r.wait,
            e = r.mode || "leading",
            i, n = [],
            o = null,
            c = 0,
            l, h = () => {
                c = M.now(), o = null, l = s.apply(i, n), n = [], i = null
            },
            f = function(...d) {
                if (i = this !== null && this !== void 0 ? this : st, n = [...d], e === "trailing") return o || (o = st.csSetTimeout(h, t)), l;
                let m = M.now(),
                    E = t - (m - c);
                return E <= 0 || E > t ? (c = m, l = s.apply(i, n), o ? (st.csClearTimeout(o), o = null) : n = []) : o || (o = st.csSetTimeout(h, E)), l
            };
        return f.cancel = () => {
            o && (st.csClearTimeout(o), c = 0, o = null, n = [])
        }, f.flushPending = () => {
            o && (st.csClearTimeout(o), h())
        }, f
    }
    var oo = s => (r, t, e) => {
        e.value = _r(e.value, s)
    };
    var pr = ".",
        ao = "__DOT__",
        xf = /^(([a-z0-9\-])+(\.[0-9]+){6})(\.[0-1])?(\.\b(x|[0-9a-fA-F]{12})\b)?$/,
        Mc = "x";

    function Vf(s) {
        let [r, t, e, i, n, o, c, l, h] = Ff(s);
        return {
            id: r,
            creationTimestamp: Number(t),
            visitsCount: Number(e),
            hitTimestamp: Number(i),
            lastVisitTimestamp: Number(n),
            appliedTrackingDraw: Number(o),
            expires: Number(c),
            allowSubdomains: l === void 0 ? void 0 : !!Number(l),
            identityPrint: h === void 0 || h === Mc ? null : h
        }
    }

    function Uf(s) {
        var r;
        return csArray.prototype.join.call(csArray.prototype.map.call(csArray.prototype.map.call([s.id, s.creationTimestamp, s.visitsCount, s.hitTimestamp, s.lastVisitTimestamp, s.appliedTrackingDraw, s.expires, s.allowSubdomains ? 1 : 0, (r = s.identityPrint) !== null && r !== void 0 ? r : Mc], csString), Hf), pr)
    }

    function jf(s) {
        return xf.test(s)
    }

    function Hf(s) {
        return csString.prototype.replace.call(s, /\./g, ao)
    }

    function Bf(s) {
        return csString.prototype.replace.call(s, new csRegExp(ao, "g"), pr)
    }

    function Ff(s) {
        return csString.prototype.indexOf.call(s, ao) !== -1 ? csArray.prototype.map.call(csString.prototype.split.call(s, pr), Bf) : csString.prototype.split.call(s, pr)
    }
    var N = (() => {
        let s;
        return function(r) {
            r.QUOTA_REACHED = "X", r.RECORDING_RULES_TARGETING = "8", r.ANALYTICS_ONLY_RULES_TARGETING = "9", r.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING = "P", r.ANALYTICS_ONLY = "0", r.RECORDING_GLOBAL_SAMPLING = "5", r.RECORDING_TEMPORARILY = "T", r.RECORDING_URL_SAMPLING = "6", r.RECORDING_ETR_SAMPLING = "7", r.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED = "B", r.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN = "W"
        }(s || (s = {})), s
    })();

    function Gf(s) {
        return s === N.RECORDING_GLOBAL_SAMPLING || s === N.RECORDING_RULES_TARGETING || s === N.RECORDING_URL_SAMPLING || s === N.RECORDING_ETR_SAMPLING
    }
    var $f = {
            [N.RECORDING_RULES_TARGETING]: N.RECORDING_GLOBAL_SAMPLING
        },
        Qt = (() => {
            let s;
            return function(r) {
                r.ETR_OFF = "0", r.ETR_ON = "1"
            }(s || (s = {})), s
        })(),
        Je = (() => {
            let s;
            return function(r) {
                r.ETR_LEGACY = "0", r.ETR_SESSION = "1", r.ETR_PAGE = "2"
            }(s || (s = {})), s
        })(),
        Yt = (() => {
            let s;
            return function(r) {
                r.ETR_DISABLED = "0", r.ETR_PENDING = "1", r.ETR_SAVED_PAGE = "2", r.ETR_SAVED_SESSION = "3", r.ETR_NOT_SAVED_SESSION = "9"
            }(s || (s = {})), s
        })(),
        Cn = (() => {
            let s;
            return function(r) {
                r.UNNECESSARY = "U", r.NOT_EXPRESSED = "N", r.WITHDRAWN = "W", r.GRANTED = "G"
            }(s || (s = {})), s
        })();
    var zf = (() => {
            let s;
            return function(r) {
                r.ETR_DISABLED = "0", r.ETR_PENDING = "1", r.ETR_SAVED_PAGE = "2", r.ETR_SAVED_SESSION = "3", r.ETR_NOT_SAVED_SESSION = "9"
            }(s || (s = {})), s
        })(),
        Dc = /^(\d+\.[01356789TBWXP](\.[01UNWG])?(\.[39])?)(\.\d+)?$/,
        kc = ".";

    function qf(s) {
        return csArray.prototype.join.call([s.pageNumber, s.collectState, s.replayConsent, s.etrStatus], kc)
    }

    function Wf(s) {
        if (!co(s)) return null;
        let r = In(s);
        return r !== null ? Lc(r) : null
    }

    function Lc(s) {
        var r, t;
        let [e, i, n, o] = csString.prototype.split.call(s, kc);
        return {
            collectState: i,
            replayConsent: (r = n) !== null && r !== void 0 ? r : Cn.UNNECESSARY,
            etrStatus: (t = o) !== null && t !== void 0 ? t : zf.ETR_NOT_SAVED_SESSION,
            pageNumber: parseInt(e, 10)
        }
    }

    function co(s) {
        return Dc.test(s)
    }

    function In(s) {
        if (!s) return null;
        let r = (() => {
            var t;
            return (t = csString.prototype.match.call(s, Dc)) === null || t === void 0 ? void 0 : t[1]
        })();
        return r != null ? r : null
    }
    var Se = "_cs_ex",
        ca = 2592e6,
        Yf = /^[0-9]+$/,
        Xf = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.K = i
                }
                onCookieToSet(t) {
                    this.Ni = t
                }
                onCookieToRemove(t) {
                    this.Mi = t
                }
                get() {
                    return this.E.cookielessTrackingEnabled ? Number(this.K.getItem(Se)) : Number(this.N.get(Se))
                }
                set(t) {
                    var e;
                    this.E.cookielessTrackingEnabled ? this.K.setItem(Se, t) : (this.N.set(Se, t, ca), (e = this.Ni) === null || e === void 0 || e.call(this, Se, t, ca))
                }
                remove() {
                    var t;
                    this.E.cookielessTrackingEnabled ? this.K.removeItem(Se) : (this.N.delete(Se), (t = this.Mi) === null || t === void 0 || t.call(this, Se))
                }
                static isValidExclusionString(t) {
                    return Yf.test(t)
                }
            }
            return s
        })(),
        He = "_cs_cvars",
        Kf = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.K = i
                }
                onCookieToSet(t) {
                    this.Ni = t
                }
                onCookieToRemove(t) {
                    this.Mi = t
                }
                get() {
                    return this.E.cookielessTrackingEnabled ? this.K.getItem(He) : this.N.get(He)
                }
                set(t) {
                    var e;
                    this.E.cookielessTrackingEnabled ? this.K.setItem(He, t) : (this.N.set(He, t), (e = this.Ni) === null || e === void 0 || e.call(this, He, t))
                }
                remove() {
                    var t;
                    this.E.cookielessTrackingEnabled ? this.K.removeItem(He) : (this.N.delete(He), (t = this.Mi) === null || t === void 0 || t.call(this, He))
                }
                static isValidCustomVarString(t) {
                    return typeof t == "string"
                }
            }
            return s
        })();
    var Jf = (() => {
            class s {
                constructor(t, e, i, n, o, c, l) {
                    this.w = t, this.S = e, this.gl = i, this.ml = n, this.ls = o, this.cv = c, this.wn = l
                }
                start() {
                    this.w.addListener(this.cv), this.w.addListener(this.wn), this.w.addListener(this.gl), this.wn.init(), this.ml.init(), this.ls.init(), !this.ls.isActive() && this.S.start()
                }
            }
            return s
        })(),
        Qf = (() => {
            class s {
                constructor(t) {
                    this.Cs = t
                }
                onOptout() {
                    this.Cs.removeExclusion()
                }
            }
            return s
        })(),
        Zf = (() => {
            class s {
                constructor(t, e) {
                    this.Lt = t, this.ft = e
                }
                exclude(t) {
                    this.ft.set(csString(t.lastTrackingDraw))
                }
                removeExclusion() {
                    this.ft.remove()
                }
                isExcluded() {
                    return this.lv() || this.hv()
                }
                lv() {
                    return this.getAppliedTrackingDraw() !== 0
                }
                getAppliedTrackingDraw() {
                    return this.ft.get()
                }
                hv() {
                    return csString.prototype.indexOf.call(this.Lt.href, Se) > 0
                }
            }
            return s
        })(),
        tp = ["excludeURLforReplay"],
        ep = (() => {
            class s {
                constructor(t, e) {
                    this.Cs = t, this.S = e
                }
                init() {
                    this.S.register(tp, t => {
                        if (q(t)) this.Cs.setExcludeUrlForSessionReplay(t);
                        else throw new Ct("excludeURLforReplay")
                    })
                }
            }
            return s
        })(),
        qr = (() => {
            let s;
            return function(r) {
                r.SessionReplay = "SR", r.None = ""
            }(s || (s = {})), s
        })(),
        sp = ".^",
        ip = ".*",
        rp = (() => {
            class s {
                constructor(t) {
                    this.C = t, this.yl = new csRegExp(`${sp}`)
                }
                setExcludeUrlForSessionReplay(t) {
                    try {
                        this.yl = new csRegExp(t)
                    } catch {
                        F.warn(`excludeURLforReplay - invalid regex '${t}'`), this.yl = new csRegExp(`${ip}`)
                    }
                }
                Lf() {
                    return this.yl.test(this.C.getAnonymizedUrl()) ? qr.SessionReplay : qr.None
                }
                isUrlExcludedForSessionReplay() {
                    return this.Lf() === qr.SessionReplay
                }
                getRequestParameters() {
                    return {
                        ex: this.Lf()
                    }
                }
            }
            return s
        })();
    var {
        toString: gv
    } = Object.prototype;

    function xc(s, r) {
        if (typeof s != "function" || r != null && typeof r != "function") throw new TypeError("Expected a function");
        let t = function(...e) {
            let i = r ? r.apply(this, e) : e[0],
                {
                    cache: n
                } = t;
            if (n.has(i)) return n.get(i);
            let o = s.apply(this, e);
            return t.cache = n.set(i, o) || n, o
        };
        return t.cache = new(xc.Cache || Map), t
    }
    xc.Cache = Map;
    var {
        hasOwnProperty: mv
    } = Object.prototype;
    var Si = (() => {
            class s {
                constructor(...t) {
                    this.jf = t
                }
                addProvider(t) {
                    csArray.prototype.push.call(this.jf, t)
                }
                getRequestParameters() {
                    return csArray.prototype.reduce.call(this.jf, (t, e) => ({ ...e.getRequestParameters(),
                        ...t
                    }), {})
                }
            }
            return s
        })(),
        np = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || "unknown";

    function op() {
        return {
            la: np
        }
    }
    var us = (() => {
            let s;
            return function(r) {
                r.Artificial = "a", r.Renewal = "r", r.Natural = "n"
            }(s || (s = {})), s
        })(),
        fs = (() => {
            let s;
            return function(r) {
                r.Natural = "Natural", r.Artificial = "Artificial", r.Renewal = "Renewal"
            }(s || (s = {})), s
        })(),
        ap = (() => {
            class s extends kt {
                constructor(t, e, i, n, o, c) {
                    super(), this.E = t, this.w = e, this.J = i, this.Rl = n, this.C = o, this.hs = c, this.ya = null
                }
                init() {
                    this._v()
                }
                onStart(t = fs.Natural) {
                    switch (t) {
                        case fs.Natural:
                            this.wv();
                            break;
                        case fs.Artificial:
                            this.Av();
                            break;
                        case fs.Renewal:
                            this.Tv();
                            break
                    }
                }
                onStop() {}
                triggerArtificialPageView(t, e) {
                    this.isStarted ? (this.w.emitArtificialPageViewEnd(), this.Cl(t, e)) : (Mt(t) && this.C.overridePath(t, e), this.J.emitTargetingRulesArtificialPageview(this.C.getUrl()), this.E.hasTargetingRules() && this.C.cleanupOverrideLifespan())
                }
                wv() {
                    this.hs.setPageViewType(us.Natural);
                    let t = this.C.getAnonymizedUrl();
                    this.w.emitBeforeNaturalPageView(t), this.Rl.send(), this.C.cleanupOverrideLifespan(), this.w.emitAfterNaturalPageView(us.Natural), this.ya = t
                }
                Tv() {
                    this.hs.setPageViewType(us.Renewal);
                    let t = this.C.getAnonymizedUrl();
                    this.w.emitBeforeNaturalPageView(t), this.Rl.send(), this.w.emitAfterNaturalPageView(us.Renewal), this.ya = t
                }
                Cl(t, e, i = !1) {
                    Mt(t) && this.C.overridePath(t, e);
                    let n = this.C.getAnonymizedUrl();
                    this.w.emitBeforeArtificialPageView(this.ya, n), this.hs.setPageViewType(us.Artificial), this.Rl.send(), this.C.cleanupOverrideLifespan(), this.w.emitAfterArtificialPageView(i), this.ya = n
                }
                Av() {
                    this.Cl(null, void 0, !0)
                }
                _v() {
                    window.addEventListener("pageshow", t => {
                        this.isStarted && t.persisted && (this.w.emitArtificialPageViewEnd(), this.Cl())
                    })
                }
            }
            return s
        })(),
        cp = (() => {
            class s {
                constructor() {
                    this.Il = us.Natural
                }
                setPageViewType(t) {
                    this.Il = t
                }
                getPageViewType() {
                    return this.Il
                }
                getRequestParameters() {
                    return {
                        pvt: this.Il
                    }
                }
            }
            return s
        })();
    var lp = 99999,
        hp = (() => {
            class s {
                constructor(t) {
                    this.R = t, this.bv = this.Rv() && window.CSCurrentScript
                }
                Cv() {
                    let t = window.CSCurrentScript;
                    if (!t) return null;
                    let e = window.performance.getEntriesByName(t.src, "resource")[0];
                    return !e || this.Iv(e) ? null : Math.round(e.responseEnd - e.fetchStart)
                }
                Iv(t) {
                    let e = t.transferSize;
                    return e !== void 0 ? e === 0 || e === 300 || e < t.encodedBodySize : t.connectStart === t.domainLookupEnd
                }
                getRequestParameters() {
                    if (!this.bv || this.Pv() !== 1) return {};
                    let t = this.Cv();
                    return t === null ? {} : {
                        dt: `${Math.min(t,lp)}`
                    }
                }
                Pv() {
                    var t;
                    return ((t = this.R.getSession()) === null || t === void 0 ? void 0 : t.pageNumber) || null
                }
                Rv() {
                    return typeof window.performance == "object" && typeof window.performance.getEntriesByName == "function"
                }
            }
            return s
        })(),
        up = ["trackPageview"],
        la = ["setPath"],
        ha = ["setQuery"],
        ua = ["referrer:maskUrl"],
        dp = ["referrer:removeQueryString"],
        fp = ["referrer:keepQueryString"],
        Wr = s => pi(s) && s !== null,
        pp = (s, r, t, e) => {
            s.register(up, (i, n) => {
                if (!q(i)) {
                    r.triggerArtificialPageView();
                    return
                }
                Wr(n) ? r.triggerArtificialPageView(i, n) : r.triggerArtificialPageView(i)
            }), s.register(la, (i, n) => {
                if (!q(i)) throw new Ct(la[0]);
                Wr(n) ? t.overridePath(i, n) : t.overridePath(i)
            }), s.register(ha, (i, n) => {
                if (!q(i)) throw new Ct(ha[0]);
                Wr(n) ? t.overrideQuery(i, n) : t.overrideQuery(i)
            }), e && (s.register(ua, i => {
                if (!q(i)) throw new Ct(ua[0]);
                e.addUrlMaskingPattern(i)
            }), s.register(dp, () => e.enableRemoveQueryString()), s.register(fp, () => e.disableRemoveQueryString()))
        };
    var gp = (() => {
        class s {
            constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C, P) {
                this.E = t, this.S = e, this.w = i, this.xe = n, this.O = o, this.R = c, this.Os = l, this.Ct = h, this.wt = f, this.C = d, this.qt = m, this.hs = E, this.J = v, this.$e = C, this.fr = P
            }
            init() {
                let t = new Bs(this.E.getTrackerUri(), "pageview");
                this.Ps = new ap(this.E, this.w, this.J, t, this.C, this.hs), this.Ps.init();
                let e = new Si(this.xe, this.O, gt, this.Os, this.C, this.Ct, $n, this.wt, this.hs, new hp(this.R), this.qt);
                this.$e && e.addProvider(this.$e), this.fr && e.addProvider(this.fr);
                let i = this.E.isCsCrosswritingHeap();
                if (i || this.E.isCsSideloadingHeap() || this.E.isHeapSideloadsCs()) {
                    let n = this.E.getHeapEnvId() || void 0;
                    e.addProvider({
                        getRequestParameters() {
                            let o = {
                                cw: i ? "1" : "2"
                            };
                            return n && (o.happid = n), o
                        }
                    })
                }
                t.setRequestParametersProviders(e), pp(this.S, this.Ps, this.C, this.Os)
            }
            start(t) {
                this.Ps.start(t)
            }
            stop() {
                this.Ps.stop()
            }
            onBeforeSessionRenewal() {
                this.Ps.stop()
            }
        }
        return s
    })();
    var mp = ["trackError"];
    var Vc = ["setCustomVariable"],
        yp = (() => {
            class s {
                constructor(t, e) {
                    this.S = t, this.wt = e
                }
                init() {
                    this.S.register(Vc, (t, e, i, n) => {
                        this.wt.set(t, e, i, n)
                    })
                }
                onAfterArtificialPageView() {
                    this.wt.deleteNextPageOnlyCustomVariables()
                }
                onAfterNaturalPageView() {
                    this.wt.deleteNextPageOnlyCustomVariables()
                }
                onOptout() {
                    this.wt.removeCustomVariablesSession()
                }
                onBeforeVisitorRenewal() {
                    this.wt.removeCustomVariablesSession(), this.wt.removeCustomVariablesPage()
                }
            }
            return s
        })();
    var Ep = ["setEncryptionSelectors"],
        Uc = ["setPIISelectors"],
        Sp = ["setCapturedElementsSelector"],
        vp = (() => {
            class s {
                constructor(t, e, i, n, o, c, l) {
                    this.w = t, this.S = e, this.lt = i, this.ie = n, this.Wt = o, this.ht = c, this.pr = l
                }
                init() {
                    var t, e;
                    this.pr && this.ht && ((t = this.pr) === null || t === void 0 || t.addSelector((e = this.ht) === null || e === void 0 ? void 0 : e.getEncryptionSelectors())), this.ut()
                }
                onStartTracking(t) {
                    this.ie.start(), this.w.emitSensitiveStatusChange()
                }
                onBeforeArtificialPageView() {
                    this.ie.stop(), this.w.emitSensitiveStatusChange()
                }
                onAfterArtificialPageView() {
                    this.ie.start(), this.w.emitSensitiveStatusChange()
                }
                onBeforeSessionRenewal() {
                    this.ie.stop(), this.w.emitSensitiveStatusChange()
                }
                onOptout() {
                    this.ie.stop(), this.w.emitSensitiveStatusChange()
                }
                onReplayUnanonymizationConsentGranted() {
                    this.w.emitSensitiveStatusChange()
                }
                onReplayUnanonymizationConsentWithdrawn() {
                    this.w.emitSensitiveStatusChange()
                }
                ut() {
                    this.S.register(Uc, t => {
                        this.lt.setMaskedElementSettingsFromCommand(t), this.w.emitSensitiveStatusChange()
                    }), this.S.register(Sp, t => {
                        this.Wt.setWhitelistedElementsSelector(t), this.w.emitSensitiveStatusChange()
                    }), this.S.register(Ep, t => {
                        var e, i;
                        (e = this.ht) === null || e === void 0 || e.setEncryptionSelectors(t), (i = this.pr) === null || i === void 0 || i.addSelector(t)
                    })
                }
            }
            return s
        })();
    var _p = 512,
        wp = 255,
        Yr = (() => {
            class s {
                constructor(t, e) {
                    this.key = csString.prototype.slice.call(t, 0, _p), this.value = q(e) ? csString.prototype.slice.call(e, 0, wp) : e
                }
                static isKeyValid(t) {
                    return q(t)
                }
                static isValueValid(t) {
                    return q(t) || ms(t)
                }
            }
            return s
        })(),
        Ap = (() => {
            class s extends kt {
                constructor(t, e) {
                    super(), this.Yt = t, this.D = e, this.Pl = []
                }
                onStart() {
                    csArray.prototype.forEach.call(this.Pl, t => this.Hf(t.key, t.value)), this.Pl = []
                }
                onStop() {}
                Hf(t, e) {
                    let i = this.D.anonymizePII(t),
                        n = ms(e) ? e : this.D.anonymizePII(e);
                    this.Yt.add(new Yr(i, n))
                }
                trackDynamicVariable(t, e) {
                    if (Yr.isKeyValid(t) && Yr.isValueValid(e)) {
                        if (!this.isStarted) {
                            csArray.prototype.push.call(this.Pl, {
                                key: t,
                                value: e
                            });
                            return
                        }
                        this.Hf(t, e)
                    } else throw new Ct(jc[0])
                }
            }
            return s
        })(),
        Tp = (() => {
            class s {
                constructor(t) {
                    this.fe = t, this.Yt = []
                }
                add(t) {
                    csArray.prototype.push.call(this.Yt, t), this.setBatchReadyCall()
                }
                clear() {
                    this.Yt = []
                }
                onBatchReady(t) {
                    this.Ov = t
                }
                getRequestParameters() {
                    let t = {};
                    for (let e of this.Yt) t[e.key] = e.value;
                    return {
                        dv: this.fe.compressSync(csJSON.stringify(t), "base64"),
                        ct: this.fe.algorithm
                    }
                }
                setBatchReadyCall() {
                    this.Ov()
                }
            }
            return B([oo({
                wait: 0,
                mode: "trailing"
            }), V("dynamicVariablesBatchReady")], s.prototype, "setBatchReadyCall", null), s
        })(),
        bp = "dvar",
        jc = ["trackDynamicVariable"],
        Rp = (() => {
            class s {
                constructor(t, e, i, n, o, c) {
                    this.S = t, this.R = e, this.E = i, this.xe = n, this.fe = o, this.D = c, this.bs = new Bs(this.E.getTrackerUri(), bp), this.Yt = new Tp(this.fe), this.Cs = new Ap(this.Yt, this.D)
                }
                init() {
                    this.bs.setRequestParametersProviders(this.xe, this.Yt), this.R.setDynamicVariablesService(this.Cs), this.Yt.onBatchReady(() => this.bs.send()), this.bs.after(() => this.Yt.clear()), this.S.register(jc, ({
                        key: t,
                        value: e
                    } = {}) => {
                        this.Cs.trackDynamicVariable(t, e)
                    })
                }
                onStartTracking() {
                    this.Cs.start()
                }
                onArtificialPageViewEnd(t) {
                    t && this.Cs.stop()
                }
                onAfterArtificialPageView(t) {
                    t && this.Cs.start()
                }
            }
            return s
        })();
    var Hc = 100,
        Cp = 100,
        Ip = (() => {
            class s extends kt {
                constructor(t, e) {
                    super(), this.Mv = t, this.F = e, this.Re = null, this.Ol = []
                }
                onStart() {
                    csArray.prototype.forEach.call(this.Ol, t => {
                        this.Re = t, this.Bf()
                    }), this.Ol = []
                }
                onStop() {}
                addToCart(t) {
                    let e = {};
                    q(t.sku) && (e.sku = csString.prototype.slice.call(t.sku, 0, Cp)), q(t.merchant) && (e.merchant = csString.prototype.slice.call(t.merchant, 0, Hc)), (e.sku || e.merchant) && (this.Re = e, this.Bf())
                }
                getCartItem() {
                    return this.Re
                }
                Bf() {
                    if (!this.isStarted && this.Re !== null) {
                        csArray.prototype.push.call(this.Ol, this.Re), this.clear();
                        return
                    }
                    this.F.refreshSession(), this.F.isSessionValid() && this.Mv.send()
                }
                clear() {
                    this.Re = null
                }
                getRequestParameters() {
                    if (!this.Re) return {};
                    let t = {};
                    return q(this.Re.sku) && this.Re.sku.length > 0 && (t.sku = this.Re.sku), q(this.Re.merchant) && this.Re.merchant.length > 0 && (t.me = this.Re.merchant), t
                }
            }
            return s
        })(),
        da = (() => {
            class s {
                constructor(t, e) {
                    this.id = t, this.revenue = e
                }
                static from(t) {
                    let e = new s(t.id, parseFloat(t.revenue));
                    return isNaN(parseFloat(t.tax)) || (e.tax = parseFloat(t.tax)), isNaN(parseFloat(t.shipping)) || (e.shipping = parseFloat(t.shipping)), q(t.currency) && t.currency.length <= 10 && (e.currency = t.currency), e
                }
                hasValidRevenue() {
                    return !isNaN(this.revenue) && this.revenue >= 0
                }
                static isValid(t) {
                    return Mt(t) && Jt(t.revenue) && q(t.currency) && t.currency.length <= 10 && (!Mt(t.id) || q(t.id))
                }
            }
            return s
        })(),
        Pp = (() => {
            class s {
                constructor(t, e, i, n) {
                    this.id = t, this.name = e, this.price = i, this.quantity = n
                }
                static from(t) {
                    if (!s.Nl(t)) return null;
                    let e = new s(t.id, t.name, parseFloat(t.price), parseInt(t.quantity, 10));
                    return Z(t.sku) && (e.sku = t.sku), Z(t.category) && (e.category = t.category), Z(t.merchant) && t.merchant.length > 0 && (e.merchant = t.merchant.slice(0, Hc)), e
                }
                static Nl(t) {
                    return Mt(t) && q(t.id) && q(t.name) && Jt(parseFloat(t.price)) && ms(parseInt(t.quantity, 10)) && (!Z(t.sku) || q(t.sku)) && (!Z(t.category) || q(t.category)) && (!Z(t.merchant) || q(t.merchant))
                }
            }
            return s
        })(),
        Op = (() => {
            class s extends kt {
                constructor(t, e, i) {
                    super(), this.D = t, this.Ff = e, this.F = i, this.Ml = [], this.clear()
                }
                onStart() {
                    csArray.prototype.forEach.call(this.Ml, t => {
                        this.pe = t.transaction, this.Tn = t.transactionItems, this.sendTransaction()
                    }), this.Ml = []
                }
                onStop() {}
                addTransaction(t) {
                    let e = this.D.anonymizeFields(t, ["id"]);
                    this.pe = da.from(e)
                }
                getTransaction() {
                    return this.pe
                }
                sendTransaction() {
                    if (!this.isStarted) {
                        csArray.prototype.push.call(this.Ml, {
                            transaction: this.pe,
                            transactionItems: [...this.Tn]
                        }), this.clear();
                        return
                    }
                    if (!(this.Ff === null || this.F === null) && (this.F.refreshSession(), !!this.F.isSessionValid())) {
                        if (!this.pe.hasValidRevenue()) {
                            F.warn("Transaction Service: unable to send transaction with invalid parameters");
                            return
                        }
                        this.Ff.send()
                    }
                }
                addItem(t) {
                    if (Ze(t)) throw new Ct(Bc[1]);
                    let e = this.D.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        i = Pp.from(e);
                    i !== null && csArray.prototype.push.call(this.Tn, i)
                }
                getItems() {
                    return this.Tn
                }
                clear() {
                    this.pe = da.from({
                        revenue: NaN
                    }), this.Tn = []
                }
                getRequestParameters() {
                    let t = {
                        id: this.pe.id ? `${this.pe.id}` : "",
                        revenue: `${this.pe.revenue}`
                    };
                    return Z(this.pe.tax) && (t.tax = `${this.pe.tax}`), Z(this.pe.shipping) && (t.shipping = `${this.pe.shipping}`), Z(this.pe.currency) && (t.cu = `${this.pe.currency}`), t.items = window.csJSON.stringify(this.Tn), t
                }
            }
            return s
        })(),
        Np = ["ecommerce:addToCart", "ec:cart:add"],
        Mp = ["ecommerce:addTransaction", "ec:transaction:create"],
        Bc = ["ecommerce:addItem", "ec:transaction:items:add"],
        Dp = ["ecommerce:send", "ec:transaction:send"],
        kp = (() => {
            class s {
                constructor(t, e, i, n, o, c, l) {
                    this.E = t, this.yt = e, this.O = i, this.S = n, this.D = o, this.F = c, this.C = l
                }
                init() {
                    let t = new Bs(this.E.getTrackerUri(), "transaction"),
                        e = new Bs(this.E.getTrackerUri(), "addtocart");
                    this.Ve = new Op(this.D, t, this.F), this.gr = new Ip(e, this.F);
                    let i = new Si(this.yt, this.O, this.C, this.Ve);
                    t.setRequestParametersProviders(i), t.after(() => {
                        this.Ve.clear()
                    });
                    let n = new Si(this.yt, this.O, this.C, this.gr);
                    e.setRequestParametersProviders(n), e.after(() => {
                        this.gr.clear()
                    }), this.S.register(Mp, o => {
                        this.Ve.addTransaction(o)
                    }), this.S.register(Bc, o => this.Ve.addItem(o)), this.S.register(Dp, () => this.Ve.sendTransaction()), this.S.register(Np, o => {
                        this.gr.addToCart(o)
                    })
                }
                onStartTracking() {
                    this.Ve.start(), this.gr.start()
                }
                onArtificialPageViewEnd(t) {
                    t && (this.Ve.stop(), this.gr.stop())
                }
                onAfterArtificialPageView(t) {
                    t && (this.Ve.start(), this.gr.start())
                }
            }
            return s
        })();
    var _s;
    (function(s) {
        s.ContentSquare = "CONTENTSQUARE", s.LoadedByClicktale = "LOADED_BY_CLICKTALE", s.LoadClicktalePtc = "LOAD_CLICKTALE_PTC", s.DualCollectionReview = "DUAL_COLLECTION_REVIEW", s.DualCollection = "DUAL_COLLECTION", s.ContentSquareTagClickTaleEndpoints = "CONTENTSQUARE_TAG_CLICKTALE_ENDPOINTS"
    })(_s || (_s = {}));
    var fa = (() => {
        let s;
        return function(r) {
            function t() {
                return window.ClickTaleIsRecording && window.ClickTaleIsRecording()
            }
            r.isRecording = t;

            function e() {
                window.ClickTaleStop && window.ClickTaleStop()
            }
            r.stopRecording = e;

            function i(c) {
                window.ClickTaleLogicalWithUploadPage && window.ClickTaleLogicalWithUploadPage(c)
            }
            r.triggerLogicalPageView = i;

            function n(c) {
                window.ClickTaleEvent && window.ClickTaleEvent(c)
            }
            r.sendPageEvent = n;

            function o(c) {
                window.ClickTaleEventTrigger && window.ClickTaleEventTrigger(c)
            }
            r.sendEventTriggerRecording = o
        }(s || (s = {})), s
    })();

    function Pn(s) {
        return s.tagDeploymentMode === _s.DualCollectionReview || s.tagDeploymentMode === _s.DualCollection
    }

    function Lp(s) {
        return Pn(s) || s.tagDeploymentMode === _s.LoadClicktalePtc
    }
    var xp = "@ETP@",
        pa = "@user-identifier@",
        Vp = (() => {
            class s extends kt {
                constructor(t, e, i, n) {
                    super(), this.E = t, this.Lv = e, this.fe = i, this.J = n, this.Dl = [], this.Di = []
                }
                onStart() {
                    csArray.prototype.forEach.call(this.Dl, t => this.Gf(t)), this.Dl = [], csArray.prototype.forEach.call(this.Di, t => this.$f(t)), this.Di = []
                }
                onStop() {}
                Gf(t) {
                    this.xv(t) ? ai.isSupported() && this.Uv(t) : this.jv(t)
                }
                trackPageEvent(t) {
                    if (!s.zf(t)) throw new Ct(Fc[0]);
                    this.isStarted ? this.Gf(t) : csArray.prototype.push.call(this.Dl, t)
                }
                xv(t) {
                    return Tn(t, pa)
                }
                async Uv(t) {
                    if (!this.E.customHashIdEnabled) return;
                    let e = csString.prototype.slice.call(t, pa.length);
                    if (e.length > ai.MAX_DIGEST_INPUT_SIZE) {
                        F.warn("UserIdentifier event: invalid user identifier");
                        return
                    }
                    let i = await ai.digest(e);
                    i ? (this.mr = {
                        eventName: i,
                        isETR: !1,
                        isCustomHashId: !0
                    }, this.Sa()) : F.warn("Page event: unable to compute customHashId"), this.E.encryptionEnabled && this.J.emitUserIdentifierEvent(e)
                }
                jv(t) {
                    this.J.emitPageEvent(t), this.mr = {
                        eventName: t,
                        isETR: !1,
                        isCustomHashId: !1
                    }, this.Sa(), this.E.tagDeploymentMode === _s.LoadClicktalePtc && fa.sendPageEvent(t)
                }
                $f(t) {
                    this.E.malkaEtrEnabled ? this.Hv(t) : this.Bv(t)
                }
                trackEventTriggerRecording(t) {
                    if (!s.zf(t)) throw new Ct(Gc[0]);
                    this.isStarted ? this.$f(t) : csArray.prototype.push.call(this.Di, t)
                }
                Hv(t) {
                    Tn(t, xp) ? this.J.emitEventTriggerRecording(t, Je.ETR_PAGE) : this.J.emitEventTriggerRecording(t, Je.ETR_SESSION), this.mr = {
                        eventName: t,
                        isETR: !0,
                        isCustomHashId: !1
                    }, this.Sa()
                }
                Bv(t) {
                    Lp(this.E) && (this.J.emitEventTriggerRecording(t, Je.ETR_LEGACY), this.mr = {
                        eventName: t,
                        isETR: !0,
                        isCustomHashId: !1
                    }, this.Sa(), this.E.tagDeploymentMode === _s.LoadClicktalePtc && fa.sendEventTriggerRecording(t))
                }
                getRequestParameters() {
                    return {
                        value: this.fe.compressSync(this.mr.eventName, "base64"),
                        ct: this.fe.algorithm,
                        isETR: `${this.mr.isETR}`,
                        isCustomHashId: `${this.mr.isCustomHashId}`
                    }
                }
                Sa() {
                    this.Lv.send()
                }
                static zf(t) {
                    return q(t) && !!csString.prototype.trim.call(t)
                }
            }
            return s
        })(),
        Fc = ["trackPageEvent"],
        Gc = ["trackEventTriggerRecording"],
        Up = (() => {
            class s {
                constructor(t, e, i, n, o) {
                    this.E = t, this.S = e, this.fe = i, this.xe = n, this.J = o
                }
                init() {
                    let t = new Bs(this.E.getTrackerUri(), "pageEvent");
                    this.yr = new Vp(this.E, t, this.fe, this.J), t.setRequestParametersProviders(this.yr, this.xe), this.S.register(Fc, e => {
                        this.yr.trackPageEvent(e)
                    }), this.S.register(Gc, e => {
                        this.yr.trackEventTriggerRecording(e)
                    })
                }
                onStartTracking() {
                    this.yr.start()
                }
                onArtificialPageViewEnd(t) {
                    t && this.yr.stop()
                }
                onAfterArtificialPageView(t) {
                    t && this.yr.start()
                }
            }
            return s
        })();

    function be(s, r, t, e) {
        var i = arguments.length,
            n = i < 3 ? r : e === null ? e = Object.getOwnPropertyDescriptor(r, t) : e,
            o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(s, r, t, e);
        else
            for (var c = s.length - 1; c >= 0; c--)(o = s[c]) && (n = (i < 3 ? o(n) : i > 3 ? o(r, t, n) : o(r, t)) || n);
        return i > 3 && n && Object.defineProperty(r, t, n), n
    }
    var ni = s => s instanceof HTMLFormElement ? "form" : s.localName,
        ga = new Map,
        Xr = !Ti && document.implementation.createHTMLDocument("");

    function $c(s) {
        var r, t;
        return (t = (r = s.sheet) === null || r === void 0 ? void 0 : r.href) !== null && t !== void 0 ? t : s.getAttribute("href")
    }

    function jp(s) {
        if (!yr(s)) return null;
        let r = zc(s);
        if (r === null || r.length === 0) return null;
        let t = "";
        if (zn(s.textContent)) J(r, e => t += e.cssText);
        else {
            let e = Hp(s);
            if (e === r.length || e > r.length) return null;
            let i = new csArray(r.length - e);
            for (let n = e, o = 0; n < r.length; n += 1, o += 1) i[o] = r[n];
            J(i, n => t += n.cssText)
        }
        return t
    }

    function Hp(s) {
        if (!Xr) return 0;
        let r = ga.get(s.textContent);
        if (r) return r;
        let t = s.cloneNode(!0);
        t.textContent = s.textContent, Xr.head.appendChild(t);
        let e = zc(t);
        return r = e ? e.length : 0, ga.set(s.textContent, r), Xr.head.removeChild(t), r
    }

    function zc(s) {
        try {
            if (s.disabled) return null;
            let r = s.sheet;
            return r ? r.cssRules || r.rules : null
        } catch (r) {
            if (r.name !== "SecurityError" && r.name !== "InvalidAccessError") throw r;
            return null
        }
    }
    var Qe = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        STYLESHEET: 50
    };
    var bs = (() => {
            class s {
                constructor(t) {
                    this.csId = G(t), this.props = hi.getAll(t)
                }
            }
            return s
        })(),
        qc = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 3, this.data = t.data
                }
            }
            return s
        })(),
        we = (() => {
            class s extends bs {
                constructor(t) {
                    var e, i, n;
                    super(t), this.attributes = [], this.nodeType = Qe.ELEMENT_NODE, this.localName = ni(t), this.namespaceURI = (e = t.namespaceURI) !== null && e !== void 0 ? e : void 0, this.children = [];
                    let o = jp(t);
                    if (o) {
                        this.children = new csArray(csNodechildNodes.apply(t).length);
                        let c = document.createTextNode(o),
                            l = new qc(c);
                        csArray.prototype.push.call(this.children, l)
                    }(yr(t) || Kn(t)) && (this.disabledSheet = (n = (i = t.sheet) === null || i === void 0 ? void 0 : i.disabled) !== null && n !== void 0 ? n : !1)
                }
                static isElement(t) {
                    return t.nodeType === Qe.ELEMENT_NODE
                }
                static getAttribute(t, e) {
                    return Ri(t.attributes, i => i.name === e)
                }
                static getAttributeValue(t, e) {
                    var i;
                    return (i = this.getAttribute(t, e)) === null || i === void 0 ? void 0 : i.value
                }
            }
            return s
        })();

    function Bp(s, r) {
        let t = !1,
            e = function() {
                if (!t) return s.apply(r, arguments)
            };
        return e.cancel = () => t = !0, e
    }

    function Fp() {
        let s = new Error,
            r = s.stack ? csArray.prototype.filter.call(csString.prototype.split.call(s.stack, `
`), e => e !== "Error" && csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(e), "promise ") === -1 && csString.prototype.indexOf.call(e, "[native code]") === -1 && csString.prototype.indexOf.call(e, "(<anonymous>)") === -1) : [];
        if (r.length === 0) return "";
        let t = $p(r);
        return t === "" || (r = zp(r, t), r.length === 0) ? "" : Wc(r[0])
    }

    function Gp(s) {
        return csString.prototype.indexOf.call(s, "@") !== -1
    }

    function $p(s) {
        return s.length > 0 ? Wc(s[0]) : ""
    }

    function zp(s, r) {
        return csArray.prototype.filter.call(s, t => csString.prototype.indexOf.call(t, r) === -1)
    }

    function Wc(s) {
        let r = "",
            t;
        Gp(s) ? t = new csRegExp("@(.+):(\\d+):(\\d+)$") : t = new csRegExp("\\((.+):(\\d+):(\\d+)\\)");
        let e = t.exec(s);
        return e && (r = e[1]), r
    }
    var qp = s => s;

    function Wp(s, r, t, e) {
        let i = csSymbol.for("propertyProxy");
        Object.defineProperty(s, r, {
            get() {
                var n;
                if (this[i]) return this[i];
                let o = (n = t.get) === null || n === void 0 ? void 0 : n.apply(this);
                return typeof o != "object" ? o : (typeof Proxy == "function" ? this[i] = new Proxy(o, {
                    get(c, l) {
                        let h = Reflect.get(c, l);
                        return typeof h == "function" ? h.bind(c) : h
                    },
                    set: (c, l, h) => {
                        let f = c[l],
                            d = Reflect.set(c, l, h);
                        return e.forEach(m => m(this, h, f, "subproperty")), d
                    }
                }) : this[i] = o, this[i])
            },
            set() {
                var n;
                let o = arguments,
                    c = this[r],
                    l = (n = t.set) === null || n === void 0 ? void 0 : n.apply(this, o);
                delete this[i];
                try {
                    e.forEach(h => h(this, o[0], c, "property"))
                } catch (h) {
                    it.error(h)
                }
                return l
            }
        })
    }

    function Yp(s, r, t) {
        let e = Xp(s, r);
        if (!e) return null;
        let i = (n, o, c, l) => t(n, o, c, l);
        return {
            activate: () => {
                e.add(i)
            },
            deactivate: () => {
                e.delete(i)
            }
        }
    }

    function Xp(s, r) {
        let t = csSymbol.for(r);
        if (s[t]) return s[t];
        let e = new Set,
            i = Object.getOwnPropertyDescriptor(s, r);
        return i ? i.configurable ? (s[t] = e, Wp(s, r, i, e), e) : (it.warn(`Cannot intercept non configurable property '${csString(r)}' of object '${s}'`), null) : (it.warn(`Cannot intercept property '${csString(r)}' because it does not exist directly on the target object '${s}'`), null)
    }

    function Kp(s, r) {
        let t = csSymbol.for(r);
        if (s[t]) return s[t];
        let e = Object.getOwnPropertyDescriptor(s, r);
        if (!(e != null && e.writable) && !(e != null && e.set)) return it.warn(`Cannot intercept read only function '${csString(r)}' of object '${s}'`), null;
        let i = new Set;
        s[t] = i;
        let n = s[r];
        if (typeof n == "function") {
            let o = function() {
                let c = arguments,
                    l = [];
                try {
                    l = csArray.prototype.map.call($s(i), f => f(c))
                } catch (f) {
                    it.critical(f)
                }
                let h = n.apply(this, c);
                return As(() => {
                    let f = {
                        result: h,
                        context: this,
                        args: c
                    };
                    csArray.prototype.forEach.call(l, d => d(f))
                }, [he.MonkeyPatch, `${csString(r)}`]), h
            };
            Qp(o, n), s[r] = o
        }
        return i
    }

    function hs({
        target: s,
        methodName: r,
        hook: t,
        hookPrepareArgs: e = qp,
        options: i
    }) {
        let n = Kp(s, r);
        if (!n) return null;
        let o = c => {
            let l = e(c),
                h = i != null && i.withCallerName ? {
                    callerName: Fp()
                } : {};
            return f => t({ ...f,
                ...h,
                args: l
            })
        };
        return {
            activate: () => {
                n.add(o)
            },
            deactivate: () => {
                n.delete(o)
            }
        }
    }

    function Jp(s, r) {
        let t = csSymbol.for(r);
        if (s[t]) return s[t];
        let e = new Set,
            i = Object.getOwnPropertyDescriptor(s, r);
        if (!i) return e;
        if (!i.configurable) return it.warn(`Cannot intercept read only property '${csString(r)}' of object '${s}'`), null;
        s[t] = e;
        let n = `${csString(r)}-setter`;
        return Object.defineProperty(s, r, {
            set() {
                var o;
                let c = this[r],
                    l = arguments;
                return As(() => {
                    e.forEach(h => h(this, l[0], c, "property"))
                }, [he.MonkeyPatch, n]), (o = i.set) === null || o === void 0 ? void 0 : o.apply(this, l)
            }
        }), e
    }

    function gr(s, r, t) {
        let e = Jp(s, r);
        if (!e) return null;
        let i = (n, o, c) => t(n, o, c, "property");
        return {
            activate: () => {
                e.add(i)
            },
            deactivate: () => {
                e.delete(i)
            }
        }
    }

    function Qp(s, r) {
        s.prototype = r.prototype, Object.defineProperty(s, "toString", {
            value: () => r.toString()
        })
    }
    var wr = (() => {
            class s {
                constructor() {
                    this.set = new Set
                }
                add(t) {
                    this.set.add(t), this.set.size === 1 && csSetTimeout(() => {
                        this.set.clear()
                    })
                }
                has(t) {
                    return this.set.has(t)
                }
                del(t) {
                    this.set.delete(t)
                }
                clear() {
                    this.set.clear()
                }
                values() {
                    return $s(this.set)
                }
                get count() {
                    return this.set.size
                }
            }
            return s
        })(),
        Zp = (() => {
            class s extends wr {
                constructor(t = "high") {
                    super(), this.Fv = t
                }
                add(t) {
                    this.set.add(t), this.set.size === 1 && Gt(() => {
                        this.set.clear()
                    }, this.Fv)
                }
            }
            return s
        })();

    function Ar(s, r = !1) {
        let t = new wr;
        return {
            push(e) {
                t.count === 0 && (r ? Gt : csSetTimeout)(() => {
                    s(t.values()), t.clear()
                }), t.add(e)
            }
        }
    }
    var ve = csSymbol(),
        lo = (() => {
            class s {
                constructor(t) {
                    var e, i, n, o, c, l, h, f, d, m, E, v, C;
                    this.A = t, this.kl = null, this.Ll = null, this.xl = null, this.Vl = null, this.Ul = null, this.Gv = Ar(P => this.processUpdateRulesInATick(P)), this.jl = null, this.Hl = null, this.Bl = null, this.A = P => Gt(() => t(P)), typeof((i = (e = window.CSSStyleSheet) === null || e === void 0 ? void 0 : e.prototype) === null || i === void 0 ? void 0 : i.insertRule) == "function" && (this.kl = hs({
                        target: window.CSSStyleSheet.prototype,
                        methodName: "insertRule",
                        hook: ({
                            context: P,
                            args: S
                        }) => {
                            this.processInsertRule(P, S)
                        }
                    })), typeof((o = (n = window.CSSStyleSheet) === null || n === void 0 ? void 0 : n.prototype) === null || o === void 0 ? void 0 : o.deleteRule) == "function" && (this.Ll = hs({
                        target: window.CSSStyleSheet.prototype,
                        methodName: "deleteRule",
                        hook: ({
                            context: P,
                            args: S
                        }) => {
                            this.processDeleteRule(P, S)
                        }
                    })), typeof((l = (c = window.CSSGroupingRule) === null || c === void 0 ? void 0 : c.prototype) === null || l === void 0 ? void 0 : l.insertRule) == "function" && (this.xl = hs({
                        target: window.CSSGroupingRule.prototype,
                        methodName: "insertRule",
                        hook: ({
                            context: P
                        }) => this.processUpdateRule(P)
                    })), typeof((f = (h = window.CSSGroupingRule) === null || h === void 0 ? void 0 : h.prototype) === null || f === void 0 ? void 0 : f.deleteRule) == "function" && (this.Vl = hs({
                        target: window.CSSGroupingRule.prototype,
                        methodName: "deleteRule",
                        hook: ({
                            context: P
                        }) => this.processUpdateRule(P)
                    })), !((d = window.StyleSheet) === null || d === void 0) && d.prototype && "disabled" in window.StyleSheet.prototype && (this.Ul = gr(window.StyleSheet.prototype, "disabled", (P, S, w) => {
                        S !== w && this.$v(P, S)
                    })), typeof((E = (m = window.CSSStyleDeclaration) === null || m === void 0 ? void 0 : m.prototype) === null || E === void 0 ? void 0 : E.setProperty) == "function" && (this.jl = hs({
                        target: window.CSSStyleDeclaration.prototype,
                        methodName: "setProperty",
                        hook: ({
                            context: P
                        }) => {
                            let S = P.parentRule;
                            S instanceof CSSStyleRule && this.processUpdateRule(S)
                        }
                    })), typeof((C = (v = window.CSSStyleDeclaration) === null || v === void 0 ? void 0 : v.prototype) === null || C === void 0 ? void 0 : C.removeProperty) == "function" && (this.Hl = hs({
                        target: window.CSSStyleDeclaration.prototype,
                        methodName: "removeProperty",
                        hook: ({
                            context: P
                        }) => {
                            let S = P.parentRule;
                            S instanceof CSSStyleRule && this.processUpdateRule(S)
                        }
                    })), Object.getOwnPropertyDescriptor(window.CSSStyleRule.prototype, "style") && (this.Bl = Yp(window.CSSStyleRule.prototype, "style", P => {
                        this.processUpdateRule(P)
                    }))
                }
                observe() {
                    var t, e, i, n, o, c, l, h;
                    (t = this.kl) === null || t === void 0 || t.activate(), (e = this.Ll) === null || e === void 0 || e.activate(), (i = this.xl) === null || i === void 0 || i.activate(), (n = this.Vl) === null || n === void 0 || n.activate(), (o = this.Ul) === null || o === void 0 || o.activate(), (c = this.jl) === null || c === void 0 || c.activate(), (l = this.Hl) === null || l === void 0 || l.activate(), (h = this.Bl) === null || h === void 0 || h.activate()
                }
                disconnect() {
                    var t, e, i, n, o, c, l, h;
                    (t = this.kl) === null || t === void 0 || t.deactivate(), (e = this.Ll) === null || e === void 0 || e.deactivate(), (i = this.xl) === null || i === void 0 || i.deactivate(), (n = this.Vl) === null || n === void 0 || n.deactivate(), (o = this.Ul) === null || o === void 0 || o.deactivate(), (c = this.jl) === null || c === void 0 || c.deactivate(), (l = this.Hl) === null || l === void 0 || l.deactivate(), (h = this.Bl) === null || h === void 0 || h.deactivate()
                }
                processInsertRule(t, [e, i]) {
                    if (t[ve] == null && !t.ownerNode) return;
                    let n = {
                        type: "cssRuleInserted",
                        sheet: t,
                        rule: e,
                        index: i
                    };
                    this.A(n)
                }
                processUpdateRule(t) {
                    let e = t;
                    for (; e.parentRule !== null;) e = e.parentRule;
                    e.parentStyleSheet !== null && this.Gv.push(e)
                }
                processUpdateRulesInATick(t) {
                    for (let e of t) {
                        if (e.parentStyleSheet === null) return;
                        let i = e.parentStyleSheet,
                            n = csArray.prototype.indexOf.call(mi(i.cssRules), e);
                        if (n === -1) return;
                        let o = {
                            type: "cssRuleUpdated",
                            sheet: i,
                            rule: e.cssText,
                            index: n
                        };
                        this.A(o)
                    }
                }
                processDeleteRule(t, [e]) {
                    if (t[ve] == null && !t.ownerNode) return;
                    let i = {
                        type: "cssRuleDeleted",
                        sheet: t,
                        index: e
                    };
                    this.A(i)
                }
                $v(t, e) {
                    if (t[ve] == null && !t.ownerNode) return;
                    let i = {
                        type: "cssStyleSheetDisabled",
                        sheet: t,
                        disabled: e
                    };
                    this.A(i)
                }
            }
            return lt([V()], s.prototype, "observe", null), lt([V()], s.prototype, "disconnect", null), lt([V()], s.prototype, "processInsertRule", null), lt([V()], s.prototype, "processUpdateRule", null), lt([V()], s.prototype, "processUpdateRulesInATick", null), lt([V()], s.prototype, "processDeleteRule", null), s
        })(),
        Ws = (() => {
            var s;
            class r {
                static zv(e) {
                    this.ii.forEach(i => {
                        e(i, "initial")
                    })
                }
                static bn(e) {
                    if (this.L || (this.L = new csMutationObserver(i => {
                            for (let n of i) n.target.isConnected && J(n.addedNodes, this.qv), J(n.removedNodes, this.Wv)
                        })), csArray.prototype.push.call(this.Ce, e), !this.Y) {
                        this.Y = !0, this.L.observe(document, this.Rn);
                        for (let i of ps.getAllShadowHosts(document)) {
                            let n = csElementshadowRoot.apply(i);
                            this.ii.add(n), this.L.observe(n, this.Rn)
                        }
                        this.Fl || (this.Fl = hs({
                            target: Element.prototype,
                            methodName: "attachShadow",
                            hook: i => this.Er(i.result) && this.qf(i.result)
                        })), this.Fl.activate()
                    }
                    this.zv(e)
                }
                static Er(e) {
                    return e.isConnected && e.ownerDocument === document
                }
                static Cn(e) {
                    var i, n;
                    this.Ce = csArray.prototype.filter.call(this.Ce, o => o !== e), this.Ce.length === 0 && (this.Ce = [], this.Y = !1, (i = this.L) === null || i === void 0 || i.disconnect(), (n = this.Fl) === null || n === void 0 || n.deactivate(), this.ii.clear())
                }
                constructor(e) {
                    this.A = e, this.A = ys("DocumentShadowRootObserver:callback", (i, n) => e(i, n))
                }
                get shadowRoots() {
                    return $s(s.ii)
                }
                takeRecords() {
                    var e, i;
                    return (i = (e = s.L) === null || e === void 0 ? void 0 : e.takeRecords()) !== null && i !== void 0 ? i : []
                }
                observe() {
                    ps.isSupported() && s.bn(this.A)
                }
                disconnect() {
                    ps.isSupported() && s.Cn(this.A)
                }
            }
            return s = r, r.Ce = [], r.ii = new Set, r.Y = !1, r.Rn = {
                childList: !0,
                subtree: !0
            }, r.qf = t => {
                s.ii.has(t) || (s.L.observe(t, s.Rn), s.ii.add(t), J(s.Ce, e => e(t, "added")))
            }, r.qv = t => {
                se(t, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll(s.qf)
            }, r.Wv = t => {
                t.isConnected || se(t, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll(e => {
                    s.ii.has(e) && (s.ii.delete(e), J(s.Ce, i => i(e, "removed")))
                })
            }, lt([V()], r.prototype, "observe", null), lt([V()], r.prototype, "disconnect", null), r
        })(),
        tg = (() => {
            class s {
                constructor(t) {
                    this.Yv = 1, this.va = new Set, this.Gl = null, this.$l = null, this.zl = (e, i) => {
                        (i === "initial" || i === "added") && this.setStyleSheets(e, e.adoptedStyleSheets)
                    }, this.Xv = e => {
                        let i = e.sheet;
                        if (this.va.has(i)) {
                            if (e.type === "cssRuleInserted") {
                                let n = {
                                    type: "adoptedStyleSheetRuleInserted",
                                    sheetId: i[ve],
                                    rule: e.rule,
                                    index: e.index
                                };
                                this.A(n)
                            } else if (e.type === "cssRuleDeleted") {
                                let n = {
                                    type: "adoptedStyleSheetRuleDeleted",
                                    sheetId: i[ve],
                                    index: e.index
                                };
                                this.A(n)
                            } else if (e.type === "cssRuleUpdated") {
                                let n = {
                                    type: "adoptedStyleSheetRuleUpdated",
                                    sheetId: i[ve],
                                    rule: e.rule,
                                    index: e.index
                                };
                                this.A(n)
                            } else if (e.type === "cssStyleSheetDisabled") {
                                let n = {
                                    type: "adoptedStyleSheetDisabled",
                                    sheetId: i[ve],
                                    disabled: e.disabled
                                };
                                this.A(n)
                            }
                        }
                    }, this.A = e => Gt(async () => {
                        await nc(2), t(e)
                    }), this.ge = new Ws(this.zl), "adoptedStyleSheets" in Document.prototype && (this.Gl = gr(window.Document.prototype, "adoptedStyleSheets", (e, i) => {
                        this.setStyleSheets(e, i)
                    })), "ShadowRoot" in window && "adoptedStyleSheets" in window.ShadowRoot.prototype && (this.$l = gr(window.ShadowRoot.prototype, "adoptedStyleSheets", (e, i) => {
                        this.setStyleSheets(e, i)
                    })), this.Wf = new lo(this.Xv)
                }
                observe() {
                    var t, e;
                    this.setStyleSheets(document, document.adoptedStyleSheets), this.ge.observe(), (t = this.Gl) === null || t === void 0 || t.activate(), (e = this.$l) === null || e === void 0 || e.activate(), this.Wf.observe()
                }
                disconnect() {
                    var t, e;
                    this.va.clear(), this.ge.disconnect(), (t = this.Gl) === null || t === void 0 || t.deactivate(), (e = this.$l) === null || e === void 0 || e.deactivate(), this.Wf.disconnect()
                }
                setStyleSheets(t, e) {
                    if (!e.length) return;
                    this.Kv(e);
                    let i = Ke(e, o => o[ve]),
                        n = {
                            type: "adoptedStyleSheetsSet",
                            target: t,
                            sheetsIds: i
                        };
                    this.A(n)
                }
                Kv(t) {
                    J(t, e => {
                        if (this.va.has(e)) return;
                        let i = this.Yv++;
                        e[ve] = i, this.va.add(e);
                        let n = this.Jv(e),
                            o = {
                                type: "adoptedStyleSheetRegistered",
                                sheetId: i,
                                cssRules: n,
                                disabled: e == null ? void 0 : e.disabled
                            };
                        this.A(o)
                    })
                }
                Jv(t) {
                    let e = [];
                    try {
                        e = Ke(t.cssRules, i => i.cssText)
                    } catch {}
                    return e
                }
            }
            return lt([V()], s.prototype, "observe", null), lt([V()], s.prototype, "disconnect", null), lt([V()], s.prototype, "setStyleSheets", null), s
        })(),
        eg = Ts(ng, "optimizeMutations"),
        sg = csSymbol.for("ignoreNextSerialization");

    function ig() {
        let s = new Set,
            r = new Set,
            t = new Set,
            e = new Set,
            i = new Map,
            n = new Map,
            o = new Map,
            c = new Set,
            l = new Set,
            h = new Map,
            f = new Set;
        return {
            isMovedNode(d) {
                return s.has(d)
            },
            markAsMovedNode(d) {
                f.delete(d), s.add(d)
            },
            isDetachedMove(d) {
                return !!ft.findAncestor(d, m => f.has(m), !0)
            },
            isAddedNode(d) {
                let m = ft.findAncestor(d, E => r.has(E) || l.has(E) || s.has(E), !0);
                return !!m && !s.has(m)
            },
            isMovedNodeIntoAddedNode(d) {
                return s.has(d) && !!ft.findAncestor(d, m => r.has(m) || l.has(m), !0)
            },
            markAsAddedNode(d) {
                f.delete(d), l.delete(d), r.add(d)
            },
            markAsPendingInsert(d) {
                l.add(d)
            },
            isPendingInsert(d) {
                return l.has(d)
            },
            isRemovedNode(d) {
                return !!ft.findAncestor(d, m => t.has(m), !0)
            },
            markAsRemovedNode(d) {
                t.add(d)
            },
            isUselessNode(d) {
                return e.has(d)
            },
            markAsUselessNode(d) {
                e.add(d)
            },
            getPlaceholder(d, m) {
                let E = m === "previous" ? n : i;
                return d && E.has(d) ? E.get(d) || null : d
            },
            getSiblings(d) {
                let m = d.addedNodes.length,
                    E = this.getPlaceholder(d.previousSibling, "previous"),
                    v = this.getPlaceholder(d.nextSibling, "next");
                if (m) {
                    let C = E,
                        P = v,
                        S = d.previousSibling !== E,
                        w = d.nextSibling !== v;
                    for (let I = 0; I < m; I++) {
                        let O = d.addedNodes[I],
                            T = d.addedNodes[m - I - 1];
                        this.isLatestNodeMutation(O, d) ? (n.delete(O), d.previousSibling && S && (i.set(d.previousSibling, O), S = !1), C = O) : n.set(O, C), this.isLatestNodeMutation(T, d) ? (i.delete(T), d.nextSibling && w && (n.set(d.nextSibling, T), w = !1), P = T) : i.set(T, P)
                    }
                } else d.previousSibling && d.previousSibling !== E && i.set(d.previousSibling, v), d.nextSibling && d.nextSibling !== v && n.set(d.nextSibling, E);
                return {
                    previousSibling: E,
                    nextSibling: v
                }
            },
            setAttributeMutation(d, m) {
                let E = o.get(d) || new Set;
                E.add(m), o.set(d, E)
            },
            isAttributeMutated(d, m) {
                var E;
                return !!(!((E = o.get(d)) === null || E === void 0) && E.has(m))
            },
            setLatestNodeMutation(d, m) {
                h.set(d, m)
            },
            isLatestNodeMutation(d, m) {
                return h.get(d) === m
            },
            markAsFutureAddedNode(d) {
                h.has(d) || f.add(d)
            },
            isTextMutated(d) {
                return c.has(d)
            },
            setTextMutated(d) {
                return c.add(d)
            }
        }
    }

    function rg(s, r) {
        for (let t = 0; t < s.addedNodes.length; t++) {
            let e = s.addedNodes[t];
            r.markAsFutureAddedNode(e), r.setLatestNodeMutation(e, s)
        }
        for (let t = 0; t < s.removedNodes.length; t++) {
            let e = s.removedNodes[t];
            r.setLatestNodeMutation(e, s)
        }
    }

    function ng(s) {
        let r = ig(),
            t = [];
        for (let e of s) e.type === "childList" && rg(e, r);
        for (let e of s) switch (e.type) {
            case "attributes":
                ag(e, r, t);
                break;
            case "characterData":
                og(e, r, t);
                break;
            case "childList":
                hg(e, r, t);
                break
        }
        return t
    }

    function og(s, r, t = []) {
        let e = s.target;
        return ft.isConnected(e) && !r.isTextMutated(e) && !r.isAddedNode(e) && !lg(e, "characterData") && (r.setTextMutated(e), csArray.prototype.push.call(t, s)), t
    }

    function ag(s, r, t = []) {
        let e = s.target,
            i = `${s.attributeNamespace}/${s.attributeName}`;
        return ft.isConnected(e) && !r.isAttributeMutated(e, i) && !r.isAddedNode(e) && (r.setAttributeMutation(e, i), csArray.prototype.push.call(t, s)), t
    }
    var cg = 30;

    function lg(s, r, t) {
        let e = csSymbol.for(t ? `${r}:${t}` : r),
            i = M.now(),
            n = s[e];
        return n && i < n ? !0 : (s[e] = i + cg, !1)
    }

    function hg(s, r, t = []) {
        let e = ft.isConnected(s.target),
            i = !e && r.isRemovedNode(s.target),
            n = e && r.isAddedNode(s.target),
            o = r.getSiblings(s),
            c = o.nextSibling,
            l = o.previousSibling,
            h = null,
            f = () => {
                if (h) {
                    let {
                        childListType: E,
                        movedNodes: v,
                        ...C
                    } = h;
                    csArray.prototype.push.call(t, E === "added" ? C : { ...C,
                        movedNodes: v
                    }), h = null
                }
            },
            d = E => E === (h == null ? void 0 : h.childListType) ? h : (f(), {
                childListType: E,
                type: "childList",
                target: s.target,
                addedNodes: [],
                removedNodes: [],
                movedNodes: [],
                previousSibling: l,
                nextSibling: c
            });
        if (e) {
            for (let E = 0; E < s.addedNodes.length; E++) {
                let v = s.addedNodes[E];
                r.isLatestNodeMutation(v, s) ? (r.isMovedNode(v) ? (h = d("moved"), csArray.prototype.push.call(h.movedNodes, v)) : (r.markAsAddedNode(v), n || (h = d("added"), csArray.prototype.push.call(h.addedNodes, v))), l = v) : ft.isConnected(v) ? r.isMovedNode(v) || r.markAsPendingInsert(v) : r.markAsUselessNode(v)
            }
            f()
        }
        let m = cc(s.removedNodes, E => {
            if (ft.isConnected(E)) {
                if (!i && !r.isPendingInsert(E)) {
                    if (r.isDetachedMove(E)) return !0;
                    r.markAsMovedNode(E), r.isMovedNodeIntoAddedNode(E) && (E[sg] = !0)
                }
                return !1
            }
            return r.isUselessNode(E) ? !1 : (r.markAsRemovedNode(E), !0)
        });
        return m.length && csArray.prototype.push.call(t, {
            type: "childList",
            removedNodes: m,
            addedNodes: [],
            movedNodes: [],
            target: s.target,
            nextSibling: c,
            previousSibling: l
        }), t
    }
    var ma = {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributeOldValue: !0
        },
        ts = (() => {
            var s;
            class r {
                static setShadowRootFilter(e) {
                    csArray.prototype.push.call(s.shadowRootFilters, e)
                }
                static ql(e) {
                    if (s.shadowRootFilters.length > 0 && yi(e))
                        for (let i = 0; i < s.shadowRootFilters.length; i++) {
                            let n = s.shadowRootFilters[i];
                            if (n(e)) return
                        }
                    this.observedTargets.add(e), this.mutationObserver.observe(e, ma)
                }
                static disconnectShadowRoot(e) {
                    this.observedTargets.has(e) && (this.observedTargets.delete(e), this.isRefreshing || (this.isRefreshing = !0, Gt(() => {
                        this.isRefreshing = !1;
                        let i = this.mutationObserver.takeRecords();
                        i.length && s.mutationCallback(i), this.mutationObserver.disconnect(), this.observedTargets.forEach(n => {
                            this.mutationObserver.observe(n, ma)
                        })
                    })))
                }
                static observe(e, i) {
                    csArray.prototype.push.call(this.callbacks, e), i && csArray.prototype.push.call(this.shadowRootCallbacks, i), this.started ? i && csArray.prototype.forEach.call(ps.getAllShadowHosts(document), n => i(csElementshadowRoot.apply(n), "initial")) : (this.mutationObserver = new csMutationObserver(this.mutationCallback), this.ql(document), this.shadowRootObserver = new Ws(this.onShadowRoot), this.shadowRootObserver.observe(), this.started = !0, J(this.shadowRootObserver.shadowRoots, n => {
                        this.ql(n)
                    }))
                }
                static disconnect(e, i) {
                    var n, o;
                    this.callbacks = csArray.prototype.filter.call(this.callbacks, c => c !== e), i && (this.shadowRootCallbacks = csArray.prototype.filter.call(this.shadowRootCallbacks, c => c !== i)), this.callbacks.length === 0 && (this.callbacks = [], this.shadowRootCallbacks = [], s.shadowRootFilters = [], (n = this.shadowRootObserver) === null || n === void 0 || n.disconnect(), (o = this.mutationObserver) === null || o === void 0 || o.disconnect(), this.observedTargets.clear(), this.started = !1)
                }
                constructor(e, i) {
                    this.A = e, this.Yf = i;
                    let n = Ar(o => e(o, this), !0);
                    this.A = ys("DocumentMutationObserver:callback", o => {
                        J(o, c => n.push(c))
                    })
                }
                get shadowRoots() {
                    var e, i;
                    return (i = (e = s.shadowRootObserver) === null || e === void 0 ? void 0 : e.shadowRoots) !== null && i !== void 0 ? i : []
                }
                takeRecords() {
                    var e;
                    let i = (e = s.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords(),
                        n = s.shadowRootObserver.takeRecords();
                    return i != null && i.length && n.length ? lu(i, n) : i != null ? i : n
                }
                observe() {
                    s.observe(this.A, this.Yf)
                }
                disconnect() {
                    s.disconnect(this.A, this.Yf)
                }
            }
            return s = r, r.callbacks = [], r.shadowRootCallbacks = [], r.started = !1, r.observedTargets = new Set, r.shadowRootFilters = [], r.mutationCallback = t => {
                Ut.mutations.count.increase(t.length), csArray.prototype.forEach.call(s.callbacks, e => e(t, s.mutationObserver))
            }, r.onShadowRoot = (t, e) => {
                J(s.shadowRootCallbacks, i => i(t, e)), e !== "removed" ? s.ql(t) : s.disconnectShadowRoot(t)
            }, r.isRefreshing = !1, lt([V()], r.prototype, "observe", null), lt([V()], r.prototype, "disconnect", null), r
        })(),
        ug = (() => {
            class s {
                constructor(t) {
                    this.A = t, this.Wl = !1, this.Qv = e => {
                        e.sheet.ownerNode && (e.type === "cssRuleInserted" ? this.A({
                            type: e.type,
                            target: e.sheet.ownerNode,
                            rule: e.rule,
                            index: e.index
                        }) : e.type === "cssRuleDeleted" ? this.A({
                            type: e.type,
                            target: e.sheet.ownerNode,
                            index: e.index
                        }) : e.type === "cssRuleUpdated" ? this.A({
                            type: e.type,
                            target: e.sheet.ownerNode,
                            rule: e.rule,
                            index: e.index
                        }) : e.type === "cssStyleSheetDisabled" && this.A({
                            type: e.type,
                            target: e.sheet.ownerNode,
                            disabled: e.disabled
                        }))
                    }, this.A = e => Gt(() => t(e)), this.Xf = new lo(e => Gt(async () => {
                        await nc(), this.Qv(e)
                    })), "adoptedStyleSheets" in Document.prototype && (this.Kf = new tg(t))
                }
                observe() {
                    var t;
                    this.Wl = !1, this.L = new ts(e => this.Zv(e), (e, i) => {
                        i === "added" && this.t_(e)
                    }), this.L.observe(), this.Xf.observe(), (t = this.Kf) === null || t === void 0 || t.observe()
                }
                disconnect() {
                    var t, e;
                    (t = this.L) === null || t === void 0 || t.disconnect(), this.Xf.disconnect(), (e = this.Kf) === null || e === void 0 || e.disconnect(), this.Wl = !0
                }
                Zv(t) {
                    if (this.Wl) return;
                    let e = eg(t);
                    for (let i = 0; i < e.length; i++) {
                        let n = e[i];
                        if (!n) {
                            it.error("processRawMutations: empty record");
                            continue
                        }
                        switch (n.type) {
                            case "attributes":
                                this.processAttributeChanged(n);
                                break;
                            case "characterData":
                                this.processCharacterDataChanged(n);
                                break;
                            case "childList":
                                this.processChildListChanged(n);
                                break;
                            default:
                                it.error(`processRawMutations: unknown record type '${n.type}'`);
                                break
                        }
                    }
                }
                processAttributeChanged(t) {
                    let e = {
                        type: "attributeChanged",
                        target: t.target,
                        attribute: t.attributeName,
                        namespace: t.attributeNamespace,
                        oldValue: t.oldValue,
                        newValue: ft.getAttributeNS(t.target, t.attributeNamespace, t.attributeName)
                    };
                    this.A(e)
                }
                processCharacterDataChanged(t) {
                    let e = {
                        type: "characterDataChanged",
                        target: t.target,
                        oldValue: t.oldValue,
                        newValue: t.target.data
                    };
                    this.A(e)
                }
                processChildListChanged(t) {
                    var e, i, n;
                    if (!((e = t.movedNodes) === null || e === void 0) && e.length) {
                        let o = {
                            type: "nodesMoved",
                            target: t.target,
                            nodes: t.movedNodes,
                            previousSibling: t.previousSibling,
                            nextSibling: t.nextSibling
                        };
                        this.A(o)
                    }
                    if (!((i = t.addedNodes) === null || i === void 0) && i.length) {
                        let o = {
                            type: "nodesAdded",
                            target: t.target,
                            previousSibling: t.previousSibling,
                            nextSibling: t.nextSibling,
                            nodes: mi(t.addedNodes)
                        };
                        this.A(o)
                    }
                    if (!((n = t.removedNodes) === null || n === void 0) && n.length) {
                        let o = {
                            type: "nodesRemoved",
                            target: t.target,
                            nodes: Ke(t.removedNodes, c => c)
                        };
                        this.A(o)
                    }
                }
                t_(t) {
                    let e = {
                        type: "shadowRootAttached",
                        target: t.host,
                        shadowRoot: t
                    };
                    this.A(e)
                }
            }
            return lt([V()], s.prototype, "processAttributeChanged", null), lt([V()], s.prototype, "processCharacterDataChanged", null), lt([V()], s.prototype, "processChildListChanged", null), s
        })(),
        dg = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 4, this.data = t.data
                }
            }
            return s
        })(),
        fg = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 8, this.data = t.data
                }
            }
            return s
        })(),
        pg = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 10, this.name = t.name, this.publicId = t.publicId, this.systemId = t.systemId
                }
            }
            return s
        })(),
        gg = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 9, this.baseURI = s.getBaseURI(t), this.children = []
                }
                static getBaseURI(t) {
                    let e = t.baseURI;
                    if (e == null) {
                        let i = t.getElementsByTagName("base");
                        e = i.length !== 0 ? i[0].href : t.URL
                    }
                    return e
                }
            }
            return s
        })(),
        mg = (() => {
            class s extends bs {
                constructor(t) {
                    super(t), this.nodeType = 11, this.mode = t.mode, this.children = []
                }
            }
            return s
        })(),
        yg = (() => {
            class s {
                constructor(t, e, i) {
                    var n;
                    typeof t == "string" ? (this.name = t, this.value = e, this.namespaceURI = i != null ? i : "") : (this.name = t.name, this.value = t.value, this.namespaceURI = (n = t.namespaceURI) !== null && n !== void 0 ? n : "")
                }
                static create(t) {
                    let e = t.attributes,
                        i = new csArray(e.length);
                    for (let n = 0; n < i.length; n++) {
                        let o = e[n];
                        i[n] = new s(o.name, o.value, o.namespaceURI), o.name === "href" && Kn(t) && (i[n].value = $c(t))
                    }
                    return i
                }
            }
            return s
        })(),
        ya = {
            workTime: 40,
            async: !0,
            initialDOM: !0
        };
    var ui = csSymbol("InitialDom"),
        Ea = csSymbol.for("ignoreNextSerialization");

    function Yc(s) {
        return s[Ea] ? (delete s[Ea], !0) : !1
    }

    function Eg(s = ya) {
        return function(t, e) {
            var i;
            (i = s.workTime) !== null && i !== void 0 || (s.workTime = ya.workTime);
            let n = ys("serialize:callback", m => e(m)),
                o = new bi,
                c = (m, E) => {
                    m.hasChildNodes() && o.push({
                        node: m,
                        serializedNode: E
                    });
                    let v = m instanceof Element && csElementshadowRoot.apply(m);
                    if (v) {
                        let C = E.shadowRoot = di(v);
                        s.async && s.initialDOM && et.setProperty(v, ui, !0), c(v, C)
                    }
                },
                l, h = !0,
                f = 8,
                d = ys("work", () => {
                    var m;
                    if (h) l = di(t), s.async && s.initialDOM && et.setProperty(t, ui, !0), c(t, l), h = !1;
                    else if (o.isEmpty) return;
                    let E = _g(100);
                    for (; !o.isEmpty;) {
                        if (s.async && E.elapsed() >= s.workTime) {
                            --f <= 0 && csSetTimeout(d);
                            return
                        }
                        let {
                            node: v,
                            serializedNode: C
                        } = o.pop(), P = (m = C.children) !== null && m !== void 0 ? m : [];
                        if (Sr(v)) continue;
                        let S = 0;
                        for (let w = csNodefirstChild.apply(v); w; w = csNodenextSibling.apply(w)) {
                            if (Yc(w)) continue;
                            let I = di(w);
                            s.async && s.initialDOM && et.setProperty(w, ui, !0), P[S++] = I, c(w, I)
                        }
                    }
                    s.async ? csSetTimeout(() => n(l)) : e(l)
                });
            if (!s.async) s.workTime = 1 / 0, d();
            else
                for (let m = 0; m < f; m++) csSetTimeout(d, 1)
        }
    }

    function Sg(s) {
        let r = di(s),
            t = r;
        if (Sr(s)) return r;
        let e = 0;
        for (let n = csNodefirstChild.apply(s); n; n = csNodenextSibling.apply(n)) Yc(n) || (t.children[e++] = On(n));
        let i = s.shadowRoot;
        return i && (t.shadowRoot = On(i)), r
    }
    var On = Ts(Sg, "serializeSync");

    function di(s) {
        let r, t;
        switch (csNodenodeType.apply(s)) {
            case 1:
                t = r = new we(s), r.attributes = wg(s);
                break;
            case 3:
                t = new qc(s);
                break;
            case 4:
                t = new dg(s);
                break;
            case 8:
                t = new fg(s);
                break;
            case 10:
                t = new pg(s);
                break;
            case 9:
                t = new gg(s);
                break;
            case 11:
                t = new mg(s);
                break;
            default:
                throw new Error("Node type not supported: " + csNodenodeType.apply(s))
        }
        return t
    }

    function vg() {
        ui = csSymbol("InitialDom")
    }

    function _g(s) {
        if (s < 1) throw new Error("Precision should be >= 1");
        let r = 0,
            t = M.elapsed();
        return {
            started: t,
            elapsed() {
                return ++r % s === 0 && (t = M.elapsed()), t - this.started
            }
        }
    }

    function wg(s) {
        return Sr(s) ? [] : yg.create(s)
    }
    var ho = (() => {
            class s {
                constructor(t) {
                    this.type = "asyncEvent", this.Yl = !1, t && t(e => this.resolve(e))
                }
                resolve(t) {
                    if (this.Yl) throw new Error("AsyncEvent already resolve.");
                    t.timestamp == null && (t = { ...t,
                        timestamp: this.timestamp
                    }), this.ni = t, this.Yl = !0, this.A && this.A(this.ni)
                }
                complete(t) {
                    this.Yl && t(this.ni), this.A = t
                }
                wait() {
                    return new Promise(t => this.complete(t))
                }
            }
            return s
        })(),
        fe = (() => {
            class s {
                constructor() {
                    this.It = [], this.isStarted = !1
                }
                async produceEvent(t) {
                    var e;
                    this.isStarted && (t.timestamp = (e = t.timestamp) !== null && e !== void 0 ? e : M.now(), t.timestamp == null && (t.timestamp = M.now()), csArray.prototype.forEach.call(this.It, i => i(t)))
                }
                onStop() {}
                start() {
                    this.isStarted || (this.isStarted = !0, this.onStart())
                }
                stop() {
                    this.isStarted && (this.isStarted = !1, this.onStop(), this.It = [])
                }
                stopForInactivity() {
                    this.isStarted && (this.isStarted = !1, this.onStop())
                }
                subscribe(t) {
                    return csArray.prototype.push.call(this.It, t), () => {
                        let e = csArray.prototype.indexOf.call(this.It, t);
                        csArray.prototype.splice.call(this.It, e, 1)
                    }
                }
            }
            return s
        })(),
        Ag = Eg(),
        Tg = (() => {
            class s extends fe {
                constructor() {
                    super(...arguments), this._a = !1
                }
                onStart() {
                    this._a = !0, this.A = Bp(this.e_, this), this.z = new ug(this.A), this.z.observe();
                    let t = Ut.mutations.initialDOM.asyncMeasure(),
                        e = () => {
                            this._a = !1, vg(), t()
                        };
                    this.produceEvent(new ho(i => Ag(document, n => {
                        e(), i({
                            type: "DomEvent",
                            domEvent: "initialDOM",
                            initialDOM: n
                        })
                    })))
                }
                onStop() {
                    var t, e;
                    this._a = !1, (t = this.A) === null || t === void 0 || t.cancel(), (e = this.z) === null || e === void 0 || e.disconnect()
                }
                Xt(t, e) {
                    let i = {
                        type: "DomEvent",
                        domEvent: e.type,
                        target: 0,
                        targetProps: {}
                    };
                    return "target" in e && (i.target = G(e.target), i.targetProps = et.getProperties(e.target)), [e, i]
                }
                e_(t) {
                    if (!this.s_(t)) switch (t.type) {
                        case "attributeChanged":
                            {
                                let [e, i] = this.Xt(t.type, t);i.attribute = e.attribute,
                                i.isSvg = zs(e.target),
                                i.namespace = e.namespace,
                                i.newValue = e.newValue,
                                i.oldValue = e.oldValue,
                                i.localName = ni(e.target),
                                i.linkRel = uc(e.target) ? e.target.rel : null,
                                i.parentLocalName = e.target.parentElement ? ni(e.target.parentElement) : void 0,
                                i.localName === "input" && (i.inputType = e.target.getAttribute("type")),
                                this.produceEvent(i)
                            }
                            break;
                        case "characterDataChanged":
                            {
                                let [e, i] = this.Xt(t.type, t);i.newValue = e.newValue,
                                i.oldValue = e.oldValue,
                                i.targetNodeType = csNodenodeType.apply(e.target),
                                i.parentLocalName = e.target.parentElement ? ni(e.target.parentElement) : null,
                                i.parentProps = e.target.parentElement ? et.getProperties(e.target.parentElement) : void 0,
                                this.produceEvent(i)
                            }
                            break;
                        case "nodesAdded":
                            {
                                let [e, i] = this.Xt(t.type, t);i.targetLocalName = ct(e.target) ? ni(e.target) : null,
                                i.nextSibling = e.nextSibling ? G(e.nextSibling) : null,
                                i.previousSibling = e.previousSibling ? G(e.previousSibling) : null,
                                Ut.mutations.serializedMutations.measure(() => {
                                    i.nodes = Ke(e.nodes, On)
                                }),
                                this.produceEvent(i);
                                break
                            }
                        case "nodesMoved":
                            {
                                let [e, i] = this.Xt(t.type, t);i.previousSibling = e.previousSibling ? G(e.previousSibling) : null,
                                i.nextSibling = e.nextSibling ? G(e.nextSibling) : null,
                                i.nodesIds = Ke(e.nodes, G),
                                this.produceEvent(i);
                                break
                            }
                        case "nodesRemoved":
                            {
                                let [e, i] = this.Xt(t.type, t);i.nodesIds = Ke(e.nodes, G),
                                this.produceEvent(i);
                                break
                            }
                        case "shadowRootAttached":
                            {
                                let [e, i] = this.Xt(t.type, t);i.shadowRoot = di(e.shadowRoot),
                                this.produceEvent(i);
                                break
                            }
                        case "cssRuleInserted":
                            {
                                let [e, i] = this.Xt(t.type, t);i.index = e.index,
                                i.rule = e.rule,
                                this.produceEvent(i);
                                break
                            }
                        case "cssRuleDeleted":
                            {
                                let [e, i] = this.Xt(t.type, t);i.index = e.index,
                                this.produceEvent(i);
                                break
                            }
                        case "cssRuleUpdated":
                            {
                                let [e, i] = this.Xt(t.type, t);i.rule = e.rule,
                                i.index = e.index,
                                this.produceEvent(i);
                                break
                            }
                        case "cssStyleSheetDisabled":
                            {
                                let [e, i] = this.Xt(t.type, t);i.disabled = e.disabled,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetRegistered":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetId = e.sheetId,
                                i.cssRules = e.cssRules,
                                i.disabled = e.disabled,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetsSet":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetsIds = e.sheetsIds,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetRuleInserted":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetId = e.sheetId,
                                i.rule = e.rule,
                                i.index = e.index,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetRuleDeleted":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetId = e.sheetId,
                                i.index = e.index,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetRuleUpdated":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetId = e.sheetId,
                                i.rule = e.rule,
                                i.index = e.index,
                                this.produceEvent(i);
                                break
                            }
                        case "adoptedStyleSheetDisabled":
                            {
                                let [e, i] = this.Xt(t.type, t);i.sheetId = e.sheetId,
                                i.disabled = e.disabled,
                                this.produceEvent(i);
                                break
                            }
                    }
                }
                wa(t) {
                    return this._a && !et.getProperty(t, ui)
                }
                s_(t) {
                    switch (t.type) {
                        case "nodesAdded":
                        case "nodesMoved":
                        case "nodesRemoved":
                        case "shadowRootAttached":
                            return this.wa(t.target) || D.isMaskedElement(t.target) || D.isMaskedElementChild(t.target);
                        case "characterDataChanged":
                            {
                                let e = t.target.parentElement;
                                return e !== null && (this.wa(e) || D.isMaskedElement(e) || D.isMaskedElementChild(e))
                            }
                        case "attributeChanged":
                            return this.wa(t.target) || D.isMaskedElementChild(t.target) || D.isMaskedAttribute(t.target, t.attribute);
                        case "cssRuleInserted":
                        case "cssRuleDeleted":
                        case "cssRuleUpdated":
                        case "cssStyleSheetDisabled":
                            return this.wa(t.target) || D.isMaskedElementChild(t.target);
                        default:
                            return !1
                    }
                }
            }
            return s
        })(),
        Fs = (() => {
            let s;
            return function(r) {
                function t(e) {
                    return e.type === "DomEvent"
                }
                r.isDOMEvent = t
            }(s || (s = {})), s
        })(),
        Ys = (() => {
            class s {
                constructor() {
                    this.It = []
                }
                start() {}
                stop() {
                    this.It.length = 0, this.It = []
                }
                pushEvent(t) {
                    if (s.pendingEvents++, this.isListening(t)) {
                        let e = this.It;
                        csSetTimeout(() => {
                            let n = ys("Processor:processEvent", o => this.processEvent(o))(t);
                            n != null && csArray.prototype.forEach.call(e, o => o(n)), s.pendingEvents--
                        })
                    } else csSetTimeout(() => {
                        csArray.prototype.forEach.call(this.It, e => e(t))
                    })
                }
                subscribe(t) {
                    return csArray.prototype.push.call(this.It, t), () => {
                        this.It = csArray.prototype.filter.call(this.It, e => e !== t)
                    }
                }
                emitEvent(t) {
                    Gt(() => csArray.prototype.forEach.call(this.It, e => e(t)))
                }
            }
            return s.pendingEvents = 0, s
        })(),
        bg = (() => {
            class s extends Ys {
                isListening(t) {
                    return t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE" || Fs.isDOMEvent(t) && (t.domEvent === "initialDOM" || t.domEvent === "nodesAdded")
                }
                processEvent(t) {
                    if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE") return this.processFastDOM(t), t;
                    let e = 0,
                        i = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
                    for (let n of i) {
                        if (n instanceof we) {
                            let c = D.getMaskedAttributeDetails(n);
                            n.attributes = this.Aa(n, c)
                        }
                        if (D.getMaskedElementDetails(n).state === D.MaskedElementState.Child) {
                            if (t.domEvent === "initialDOM") return null;
                            t.nodes = csArray.prototype.filter.call(t.nodes, c => c !== n);
                            continue
                        }
                        et.traverse(n, c => {
                            if (c instanceof we) {
                                let l = D.getMaskedAttributeDetails(c);
                                c.attributes = this.Aa(c, l);
                                let h = D.getMaskedElementDetails(c);
                                h.state === D.MaskedElementState.Parent && (this.Ta(c, h), e++)
                            }
                        })
                    }
                    return e > 0 && $.counters.sensitiveElements.count("masked-elements", e), t
                }
                processFastDOM(t) {
                    var e;
                    let {
                        MaskedElementState: i
                    } = D, n = t.type === "DOM_PATCH" ? t.diff : t.state, o = t.state;
                    for (let c in n != null ? n : {}) {
                        let l = n[c],
                            h = o[c],
                            f = D.getMaskedElementDetails(h);
                        if (f.state === i.Child) {
                            delete n[c];
                            continue
                        } else if (h.type !== 1) continue;
                        let d = D.getMaskedAttributeDetails(h);
                        for (let m of (e = d.attributes) !== null && e !== void 0 ? e : []) l.attributes && delete l.attributes[m];
                        f.state === i.Parent && this.Ta(l, f)
                    }
                }
                Aa(t, e) {
                    return e.attributes.length === 0 ? t.attributes : csArray.prototype.filter.call(t.attributes, i => csArray.prototype.indexOf.call(e.attributes, i.name) === -1)
                }
                Ta(t, e) {
                    var i;
                    let n = `width: ${e.width}px !important; height: ${e.height}px !important;`;
                    "nodeType" in t ? (t.children = [], t.shadowRoot = void 0, csArray.prototype.push.call(t.attributes, {
                        name: "style",
                        value: n,
                        namespaceURI: ""
                    }), we.getAttribute(t, "data-cs-mask") || csArray.prototype.push.call(t.attributes, {
                        name: "data-cs-mask",
                        value: "",
                        namespaceURI: ""
                    })) : ((i = t.attributes) !== null && i !== void 0 || (t.attributes = {}), delete t.firstChild, delete t.shadowRoot, t.attributes.style = n, t.attributes["data-cs-mask"] || (t.attributes["data-cs-mask"] = ""))
                }
            }
            return be([Dt("MaskedElementProcessor.processEvent")], s.prototype, "processEvent", null), s
        })(),
        ce = (() => {
            let s;
            return function(r) {
                r.ANONYMIZED_TEXT_STATUS_PROP = "anonymizationStatus", r.WHITELISTED_STATUS = "whitelisted";

                function t(n) {
                    return et.getProperty(n, r.ANONYMIZED_TEXT_STATUS_PROP) === r.WHITELISTED_STATUS
                }
                r.isWhitelistedElement = t;

                function e(n) {
                    et.setProperty(n, r.ANONYMIZED_TEXT_STATUS_PROP, r.WHITELISTED_STATUS)
                }
                r.whitelistElement = e;

                function i(n) {
                    et.setProperty(n, r.ANONYMIZED_TEXT_STATUS_PROP, void 0)
                }
                r.removeWhitelistElement = i
            }(s || (s = {})), s
        })(),
        Rg = /[\u4E00-\u9FFF]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]/g,
        Cg = "\uFF41",
        Ig = /[^ａ\s]/g,
        Pg = "a";

    function Kr(s) {
        let r = csString.prototype.replace.call(s, Rg, Cg);
        return csString.prototype.replace.call(r, Ig, Pg)
    }
    var Og = (() => {
        class s {
            constructor(t, e, i, n = null, o = !1) {
                this.us = t, this.In = e, this.D = i, this.ba = n, this.i_ = o, this.Pn = so(this.In)
            }
            sanitize(t, e) {
                return et.traverse(t, (i, n) => {
                    if (i.anonymized = this.us, i.nodeType === Qe.TEXT_NODE) {
                        let o = i,
                            {
                                anonymizedValue: c,
                                withAnonymization: l
                            } = this.getAnonymizedValue(o.data, n ? n == null ? void 0 : n.localName : e == null ? void 0 : e.targetLocalName, n ? et.getProperties(n) : e == null ? void 0 : e.targetProps);
                        i.anonymized = l, o.data = c;
                        return
                    }
                    if (we.isElement(i)) return this.r_(i);
                    if (i.nodeType === Qe.CDATA_SECTION_NODE) {
                        let o = i;
                        o.data = this.us ? Kr(o.data) : this.D.checkAndAnonymizePII(o.data, this.ba);
                        return
                    }
                }), t
            }
            setAnonymization(t) {
                this.us = t
            }
            getAnonymizedValue(t, e, i) {
                if (e === "style") return {
                    anonymizedValue: t,
                    withAnonymization: !1
                };
                let n = (i == null ? void 0 : i[ce.ANONYMIZED_TEXT_STATUS_PROP]) === ce.WHITELISTED_STATUS;
                return this.us && !n ? {
                    anonymizedValue: Kr(t),
                    withAnonymization: !0
                } : {
                    anonymizedValue: this.D.checkAndAnonymizePII(t, this.ba),
                    withAnonymization: !1
                }
            }
            r_(t) {
                let e = Ri(t.attributes, n => n.name === "type"),
                    i = e == null ? void 0 : e.value;
                t.attributes = csArray.prototype.map.call(t.attributes, n => (n.anonymized = this.us, n.value = this.getAnonymizedAttributeValue(t.namespaceURI, t.localName, n.name, n.value, i), n))
            }
            getAnonymizedAttributeValue(t, e, i, n, o) {
                if (t === "http://www.w3.org/2000/svg" || t === "svg" || this.n_(e, i, o)) return n;
                if (ld(i)) return hd(e, i, n) ? this.D.anonymizePII(n) : n;
                let c = this.i_ && i === "placeholder";
                return this.us && (ud(e, i, o) || c) ? Kr(n) : this.us ? "" : this.D.checkAndAnonymizePII(n, null)
            }
            n_(t, e, i) {
                return cd(t, e, i) || this.Pn.has(e)
            }
        }
        return s
    })();
    var Ng = () => (s, r, t) => {
        t.value = Mg(t.value)
    };

    function Mg(s) {
        let r = csSymbol("oncePerTickSymbol"),
            t = null,
            e = {},
            i = function() {
                var n;
                let o = (n = this) !== null && n !== void 0 ? n : e;
                if (t = arguments, o[r]) return;
                o[r] = !0, Yn(() => {
                    o[r] = !1, s.apply(o, t)
                })
            };
        return i.oncePerTickSymbol = r, i
    }
    Ng.isScheduled = (s, r) => {
        let t = r.oncePerTickSymbol;
        return s[t]
    };
    var Dg = (() => {
            let s;
            return function(r) {
                r.ENCRYPTED_NODE_PROP = "encrypted";

                function t(n) {
                    return et.getProperty(n, r.ENCRYPTED_NODE_PROP) === !0
                }
                r.shouldEncrypt = t;

                function e(n) {
                    et.setProperty(n, r.ENCRYPTED_NODE_PROP, !0)
                }
                r.markEncryptedNode = e;

                function i(n) {
                    et.setProperty(n, r.ENCRYPTED_NODE_PROP, void 0)
                }
                r.unmarkEncryptedNode = i
            }(s || (s = {})), s
        })(),
        ze = (() => {
            let s;
            return function(r) {
                r.EDITABLE_NODE_PROP = "editableNode";

                function t(n) {
                    var o;
                    return "nodeType" in n ? et.getProperty(n, r.EDITABLE_NODE_PROP) === !0 : ((o = n.metadata) === null || o === void 0 ? void 0 : o[r.EDITABLE_NODE_PROP]) === !0
                }
                r.isEditableNode = t;

                function e(n) {
                    et.setProperty(n, r.EDITABLE_NODE_PROP, !0)
                }
                r.markEditableNode = e;

                function i(n) {
                    et.setProperty(n, r.EDITABLE_NODE_PROP, void 0)
                }
                r.unmarkEditableNode = i
            }(s || (s = {})), s
        })();
    var Sa = (() => {
            let s;
            return function(r) {
                function t(e) {
                    return e.type === "TextVisibility"
                }
                r.isTextVisibilityEvent = t
            }(s || (s = {})), s
        })(),
        kg = (() => {
            class s extends Ys {
                constructor(t, e, i = new qs, n = null, o = !1) {
                    super(), this.D = i, this.ba = n, this.captureAnonymizedPlaceholders = o, this.Sr = new Og(t, e, i, n, o)
                }
                setAnonymization(t) {
                    this.Sr.setAnonymization(t)
                }
                isListening(t) {
                    return t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE" || Sa.isTextVisibilityEvent(t) || Fs.isDOMEvent(t) && (t.domEvent === "initialDOM" || t.domEvent === "nodesAdded" || t.domEvent === "attributeChanged" || t.domEvent === "characterDataChanged")
                }
                processEvent(t) {
                    if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE") return this.u_(t);
                    if (Sa.isTextVisibilityEvent(t)) return t.text = this.D.checkAndAnonymizePII(t.text, this.ba), t;
                    switch (t.domEvent) {
                        case "initialDOM":
                        case "nodesAdded":
                            this.th(t);
                            break;
                        case "attributeChanged":
                            this.d_(t);
                            break;
                        case "characterDataChanged":
                            this.f_(t);
                            break
                    }
                    return t
                }
                u_(t) {
                    var e, i;
                    let n = t.type === "DOM_PATCH" ? t.diff : t.state,
                        o = t.state;
                    for (let c in n) {
                        let l = o[c],
                            h = o[l.parent];
                        switch (l.type) {
                            case Qe.TEXT_NODE:
                            case Qe.COMMENT_NODE:
                                {
                                    let f = n[c];
                                    if (Z(f.data)) {
                                        if (h.localName === "script") {
                                            f.data = "";
                                            continue
                                        }
                                    } else continue;f.data = this.Sr.getAnonymizedValue((e = f.data) !== null && e !== void 0 ? e : "", h.localName, h.metadata).anonymizedValue;
                                    break
                                }
                            case Qe.ELEMENT_NODE:
                                {
                                    let f = n[c];
                                    if (f.attributes)
                                        for (let d in f.attributes) {
                                            let m = f.attributes[d],
                                                E = l.localName === "input" ? (i = l.attributes) === null || i === void 0 ? void 0 : i.type : void 0;
                                            f.attributes[d] = this.Sr.getAnonymizedAttributeValue(l.namespaceURI, l.localName, d, m, E)
                                        }
                                    break
                                }
                        }
                    }
                    return t
                }
                th(t) {
                    let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes,
                        i;
                    t.domEvent === "nodesAdded" && (i = {
                        targetLocalName: t.targetLocalName,
                        targetProps: t.targetProps
                    });
                    for (let n of e) this.Sr.sanitize(n, i)
                }
                d_(t) {
                    if (!t.isSvg && t.newValue) {
                        if (t.localName === null) {
                            t.newValue = "";
                            return
                        }
                        t.newValue = this.Sr.getAnonymizedAttributeValue(t.namespace, t.localName, t.attribute, t.newValue, t.inputType)
                    }
                }
                f_(t) {
                    t.newValue = this.Sr.getAnonymizedValue(t.newValue, t.parentLocalName, t.parentProps).anonymizedValue
                }
            }
            return be([Dt("AnonymizedTextProcessor.processEvent")], s.prototype, "processEvent", null), s
        })();
    var K = (() => {
        let s;
        return function(r) {
            r[r.ELEMENT_NODE = 1] = "ELEMENT_NODE", r[r.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", r[r.TEXT_NODE = 3] = "TEXT_NODE", r[r.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", r[r.COMMENT_NODE = 8] = "COMMENT_NODE", r[r.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", r[r.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", r[r.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", r[r.CSS_STYLESHEET_NODE = 50] = "CSS_STYLESHEET_NODE"
        }(s || (s = {})), s
    })();

    function uo(s) {
        let r = csString.prototype.trim.call(s);
        if (s === "") return [];
        let [t, e] = Lg(r);
        return e ? (Ai(t, ",") || (e = xg(e)), [va(t), ...uo(e)]) : [va(t)]
    }

    function Lg(s) {
        return csString.prototype.split.call(s, /\s(.+)/)
    }

    function va(s) {
        return csString.prototype.split.call(s, /,$/)[0]
    }

    function xg(s) {
        return csString.prototype.split.call(s, /,(.+)/)[1] || ""
    }
    var Vg = /(@import\s*("([^"]+)"|'([^']+)'))|(url\s*\(\s*((("([^"\]]+)"|'([^'\]]+)')\s*)|([^)\]]+))\)(?!\\))/g;

    function Ug(s, r) {
        return csString.prototype.replace.call(s, Vg, (...e) => {
            let i = e[3] || e[4],
                n = e[9] || e[10] || e[11],
                o = Hg((i || n).trim()),
                c = i ? "@import " : "",
                l = r(o) || o;
            return `${c}url(${jg(l)})`
        })
    }

    function jg(s) {
        return csString.prototype.indexOf.call(s, '"') === -1 ? `"${s}"` : csString.prototype.indexOf.call(s, "'") === -1 ? `'${s}'` : s
    }

    function fi(s) {
        let r = new Set;
        return Ug(s, t => {
            var e, i;
            return r.add((i = (e = csString.prototype.match.call(t, /^["|'](.*)?["|']$/)) === null || e === void 0 ? void 0 : e[1]) !== null && i !== void 0 ? i : t), t
        }), $s(r)
    }

    function Hg(s) {
        let r = /(\\)*\\(?:([a-fA-F0-9]{1,6})|(.))[\n\t\x20]?/g;
        return csString.prototype.replace.call(s, r, (t, e, i, n) => {
            if (e === "\\") return csString.prototype.slice.call(t, 1);
            if (n) return n;
            let o = parseInt(i, 16);
            return 55296 <= o && o <= 57343 || o === 0 || o > 1114111 ? "\uFFFD" : csString.fromCodePoint(o)
        })
    }
    var _a = (() => {
            class s {
                static async toStaticResourceEvent(t, e, i) {
                    let n = await s.y_(t);
                    if (!n) return null;
                    let o = await s.ip(n),
                        c = Xt(t) ? void 0 : t,
                        l = {
                            type: "StaticResourceManagerEvent",
                            timestamp: i,
                            resourceId: e,
                            resource: {
                                hash: o,
                                data: n
                            }
                        };
                    return c && (l.originalResourceName = c), l
                }
                static async toCSSStaticResourceEvent(t, e, i, n) {
                    let o = await s.E_(t, n),
                        c = _e(t),
                        l = o.get(c);
                    if (!l) return null;
                    let h = {
                        type: "StaticResourceManagerEvent",
                        timestamp: i,
                        resourceId: e,
                        resource: {
                            hash: l.hash,
                            data: l.data
                        }
                    };
                    return o.delete(c), o.size && (h.nestedResources = [], o.forEach(f => {
                        f && csArray.prototype.push.call(h.nestedResources, {
                            hash: f.hash,
                            data: f.data
                        })
                    })), h
                }
                static async ip(t) {
                    let e = await t.arrayBuffer(),
                        i = await crypto.subtle.digest(this.rp, e);
                    return yn(i)
                }
                static async y_(t) {
                    let e;
                    if (!Xt(t)) e = await (await window.fetch(t)).blob();
                    else {
                        let i = jo(t);
                        if (!i) return null;
                        e = i
                    }
                    return e
                }
                static async E_(t, e) {
                    let i = new Map,
                        n = _e(t),
                        c = [{
                            resourceRawPath: t,
                            resourceAbsolutePath: n
                        }];
                    for (; c.length > 0;) {
                        let l = csArray.prototype.pop.call(c);
                        if (!e && l.resourceAbsolutePath !== null && !Xt(l.resourceAbsolutePath)) {
                            i.set(l.resourceAbsolutePath, null);
                            continue
                        }
                        if (i.get(l.resourceAbsolutePath) === void 0) try {
                            if (l.resourceRawPath === null || csString.prototype.indexOf.call(l.resourceRawPath, ".css") > 0) {
                                if (!l.data) {
                                    let E = await fetch(l.resourceAbsolutePath);
                                    l.data = await E.text()
                                }
                                l.nestedResources || (l.nestedResources = fi(l.data));
                                let d = !1,
                                    m = !1;
                                for (let E of l.nestedResources) {
                                    let v = Xt(E) ? E : l.resourceAbsolutePath ? Fd(E, l.resourceAbsolutePath) : _e(E),
                                        C = i.get(v);
                                    if (C !== void 0) {
                                        if (C !== null) {
                                            let S = s.S_(C, E);
                                            l.data = Et.stringReplaceAll(l.data, E, S)
                                        }
                                        continue
                                    }
                                    Ri(c, S => S.resourceAbsolutePath === v) !== void 0 || (d = !0, m || (csArray.prototype.push.call(c, l), m = !0), csArray.prototype.push.call(c, {
                                        resourceRawPath: E,
                                        resourceAbsolutePath: v
                                    }))
                                }
                                if (!d) {
                                    let E = await s.v_(l.data);
                                    i.set(l.resourceAbsolutePath, {
                                        hash: E.hash,
                                        data: E.data
                                    })
                                }
                            } else {
                                let d;
                                if (!Xt(l.resourceAbsolutePath)) d = await (await fetch(l.resourceAbsolutePath)).blob();
                                else {
                                    let E = jo(l.resourceAbsolutePath);
                                    if (!E) {
                                        i.set(l.resourceAbsolutePath, null);
                                        continue
                                    }
                                    d = E
                                }
                                let m = await s.ip(d);
                                i.set(l.resourceAbsolutePath, {
                                    hash: m,
                                    data: d
                                })
                            }
                        } catch {
                            i.set(l.resourceAbsolutePath, null)
                        }
                    }
                    return i
                }
                static S_(t, e) {
                    let i = `cs://resources/${t.hash}`;
                    return Xt(e) || (i += `?${s.ih}=${e}`), i
                }
                static async v_(t) {
                    let e = new Blob([t], {
                            type: "text/css"
                        }),
                        i = await e.arrayBuffer(),
                        n = await crypto.subtle.digest(s.rp, i);
                    return {
                        data: e,
                        hash: yn(n)
                    }
                }
            }
            return s.rp = "SHA-256", s.ih = "original-resource-name", s
        })(),
        Nn = (() => {
            class s extends Ys {
                get busy() {
                    return this.rh > 0
                }
                constructor() {
                    super(), this.__ = "cssrm://", this.w_ = 1, this.ds = !1, this.rh = 0
                }
                isListening(t) {
                    if (s.isSupported()) {
                        if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE") return !0;
                        if (!Fs.isDOMEvent(t)) return !1
                    } else return !1;
                    return t.domEvent === "initialDOM" || t.domEvent === "nodesAdded" || t.domEvent === "attributeChanged" || t.domEvent === "characterDataChanged"
                }
                processEvent(t) {
                    if (t.type !== "DomEvent") return this.A_(t);
                    switch (t.domEvent) {
                        case "initialDOM":
                        case "nodesAdded":
                            this.T_(t);
                            break;
                        case "attributeChanged":
                            this.b_(t);
                            break;
                        case "characterDataChanged":
                            this.R_(t);
                            break
                    }
                    return t
                }
                disableOnlineAssets() {
                    this.ds = !1
                }
                enableOnlineAssets() {
                    this.ds = !0
                }
                isOnlineAssetsActivated() {
                    return this.ds
                }
                A_(t) {
                    var e;
                    let i = t.type === "DOM_PATCH" ? t.diff : t.state;
                    for (let n in i) {
                        let o = i[n],
                            c = t.state[n],
                            l = t.state[c.parent];
                        switch (c.type) {
                            case K.TEXT_NODE:
                                this.np(o, l == null ? void 0 : l.localName);
                                break;
                            case K.CSS_STYLESHEET_NODE:
                                {
                                    if (o = o, o.cssRules)
                                        for (let h in o.cssRules) {
                                            let f = o.cssRules[h],
                                                d = this.vr(f);
                                            d !== null && (o.cssRules[h] = d)
                                        }
                                    break
                                }
                            case K.ELEMENT_NODE:
                                {
                                    o = o;
                                    let h = o.attributes;
                                    if (!h) continue;
                                    if (h.style && (h.style = this.vr(h.style)), (this.op(c.localName) || this.ap(c.localName, l == null ? void 0 : l.localName)) && ("src" in h && (h.src = this.nh(h.src)), "srcset" in h && (h.srcset = this.oh(h.srcset))), this.ds && c.localName === "link" && (!((e = h.href) === null || e === void 0) && e.length) && h.rel === "stylesheet") {
                                        let f = this.ki(_e(h.href), !0);
                                        h["data-cs-original-href"] = h.href, h.href = f
                                    }
                                }
                        }
                    }
                    return t
                }
                T_(t) {
                    let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
                    for (let i of e) et.traverse(i, (n, o) => {
                        if (n.nodeType === Qe.TEXT_NODE && o) {
                            this.np(n, o.localName);
                            return
                        }
                        if (!we.isElement(n)) return;
                        let c = we.getAttribute(n, "style");
                        if (c != null && c.value && (c.value = this.vr(c.value)), this.op(n.localName) || this.ap(n.localName, o == null ? void 0 : o.localName)) {
                            let l = we.getAttribute(n, "src");
                            l != null && l.value && (l.value = this.nh(l.value));
                            let h = we.getAttribute(n, "srcset");
                            if (h) {
                                h.value = this.oh(h.value);
                                return
                            }
                        }
                        if (this.C_(n) && this.ds) {
                            let l = Ri(n.attributes, f => f.name === "href");
                            if (!l || !l.value) return;
                            let h = this.ki(_e(l.value), !0);
                            csArray.prototype.push.call(n.attributes, {
                                name: "data-cs-original-href",
                                namespaceURI: "",
                                value: l.value
                            }), l.value = h
                        }
                    })
                }
                np(t, e) {
                    if (!t || e !== "style") return;
                    let i = this.vr(t.data);
                    i !== null && (t.data = i)
                }
                R_(t) {
                    if (t.parentLocalName !== "style" || !t.newValue) return;
                    let e = this.vr(t.newValue);
                    e !== null && (t.newValue = e)
                }
                b_(t) {
                    if (!t.newValue || t.newValue === t.oldValue) return;
                    let e = t.attribute === "src",
                        i = t.attribute === "srcset";
                    if (t.attribute === "style") {
                        t.newValue = this.vr(t.newValue);
                        return
                    }
                    if (!e && !i) return;
                    let o = t.localName === "img",
                        c = t.localName === "source" && t.parentLocalName && t.parentLocalName === "picture";
                    !o && !c || (e && (t.newValue = this.nh(t.newValue)), i && (t.newValue = this.oh(t.newValue)))
                }
                nh(t) {
                    return Xt(t) || this.ds ? this.ki(t, !1, M.now()) : t
                }
                oh(t) {
                    if (!this.ds) return t;
                    let e = t,
                        i = uo(t);
                    for (let n of i) {
                        let o = this.ki(_e(n), !1);
                        e = csString.prototype.replace.call(e, n, o)
                    }
                    return e
                }
                vr(t) {
                    let e = fi(t),
                        i = t,
                        n = M.now();
                    for (let o of e) {
                        let c = Xt(o);
                        if (!(c || this.ds) || this.I_(o)) continue;
                        let l = nd(o),
                            h = o;
                        c ? h = this.ki(o, !1, n) : this.ds && (l ? h = this.ki(o, !0, n) : h = this.ki(_e(o), !1, n)), i = csString.prototype.replace.call(i, o, h)
                    }
                    return i
                }
                ki(t, e, i = M.now()) {
                    let n = this.w_++;
                    this.rh++;
                    let o = e ? _a.toCSSStaticResourceEvent : _a.toStaticResourceEvent,
                        c = new ho(async l => {
                            try {
                                let h = await o(t, n, i, this.ds);
                                l(h || {
                                    type: "warning",
                                    message: `Failed to process static resource: ${t}`
                                })
                            } catch (h) {
                                l({
                                    type: "warning",
                                    message: h
                                })
                            } finally {
                                this.rh--
                            }
                        });
                    return this.emitEvent(c), this.__ + n
                }
                op(t) {
                    return t === "img"
                }
                ap(t, e) {
                    return t === "source" && e === "picture"
                }
                C_(t) {
                    return t.localName === "link" && csArray.prototype.some.call(t.attributes, e => e.name === "rel" && e.value === "stylesheet")
                }
                static isSupported() {
                    return ic() && Qh() && !!csArray.from
                }
                I_(t) {
                    return csString.prototype.replace.call(t, /['"]+/g, "").length === 0
                }
            }
            return be([Dt("StaticResourceManagerProcessor.processEvent")], s.prototype, "processEvent", null), s
        })(),
        ii = console;
    var gs = {
            debug: (...s) => ii.debug(...s),
            log: (...s) => ii.log(...s),
            info: (...s) => ii.info(...s),
            warn: (...s) => ii.warn(...s),
            error: (...s) => ii.error(...s)
        },
        Mn = (() => {
            class s {
                push(t) {
                    let e = {
                        value: t
                    };
                    this._r ? (this.ah.next = e, this.ah = e) : (this._r = e, this.ah = e)
                }
                pushMany(t) {
                    for (let e of t) this.push(e)
                }
                shift() {
                    if (!this._r) return;
                    let t = this._r;
                    return this._r = t.next, this._r || (this.ah = void 0), t.value
                }
                isEmpty() {
                    return !this._r
                }
            }
            return s
        })(),
        vi = (() => {
            let s;
            return function(r) {
                r[r.High = 0] = "High", r[r.Low = 1] = "Low"
            }(s || (s = {})), s
        })(),
        fo = (() => {
            class s {
                constructor() {
                    this.cp = new Mn, this.lp = new Mn, this.length = 0
                }
                push(t, e = vi.Low) {
                    return e === vi.High ? this.cp.push(t) : this.lp.push(t), this.length += 1
                }
                shift() {
                    if (this.length !== 0) return this.length -= 1, this.cp.shift() || this.lp.shift()
                }
                isEmpty() {
                    return this.length === 0
                }
            }
            return s
        })(),
        Bg = (() => {
            class s {
                get length() {
                    return this.Et.length
                }
                constructor() {
                    this.Mn = [], this.Et = new fo, this.ch = new Set
                }
                P_(t) {
                    switch (t.type) {
                        case "attributes":
                            return `-${t.attributeNamespace}-${t.attributeName}`;
                        default:
                            return ""
                    }
                }
                O_(t) {
                    switch (t.type) {
                        case "pointerOverElement":
                        case "customElementRegistration":
                            return
                    }
                    return `${G(t.target)}-${t.type}${this.P_(t)}`
                }
                N_(t) {
                    switch (t.type) {
                        case "state":
                            return vi.High;
                        default:
                            return vi.Low
                    }
                }
                M_(t) {
                    let e = this.O_(t);
                    if (e) {
                        if (this.ch.has(e)) return;
                        this.ch.add(e)
                    }
                    return this.Et.push({
                        mutation: t,
                        key: e
                    }, this.N_(t))
                }
                D_() {
                    this.Mn.length !== 0 && (csArray.prototype.forEach.call(csArray.prototype.flat.call(this.Mn), t => this.M_(t)), this.Mn = [])
                }
                push(t) {
                    csArray.prototype.push.call(this.Mn, t)
                }
                shift() {
                    this.D_();
                    let t = this.Et.shift();
                    if (t) return t.key && this.ch.delete(t.key), t.mutation
                }
                isEmpty() {
                    return this.Et.isEmpty() && this.Mn.length === 0
                }
            }
            return s
        })(),
        Jr = new WeakMap,
        Qr = new WeakMap;

    function wa(s, r) {
        if (!s || typeof s != "object" && typeof s != "function") return s;
        if (Jr.has(s)) return Jr.get(s);
        let t = r();
        return Jr.set(s, t), t
    }

    function Dn(s, r) {
        return s.prototype = r.prototype, Object.defineProperty(s, "toString", {
            value: () => r.toString()
        }), s
    }

    function Fg(s, r, t, e, i) {
        Object.defineProperty(s, r, {
            set(n) {
                var o;
                let c = (o = t.set) === null || o === void 0 ? void 0 : o.apply(this, [n]);
                return e(this, [r], [n], c), c
            },
            get() {
                var n;
                let o = (n = t.get) === null || n === void 0 ? void 0 : n.apply(this);
                return wa(o, () => {
                    let c = new Proxy(o, {
                        get(l, h) {
                            let f = Reflect.get(l, h);
                            return typeof f != "function" ? f : wa(f, () => i & 2 ? Dn(function(...d) {
                                let m = Qr.get(this) || this,
                                    E = Reflect.apply(f, m, d);
                                return e(m, [r, h], d, E), E
                            }, f) : Dn(function(...d) {
                                let m = Qr.get(this) || this;
                                return Reflect.apply(f, m, d)
                            }, f))
                        },
                        set: i & 1 ? (l, h, f) => {
                            let d = Reflect.set(l, h, f);
                            return e(l, [r, h], [f], d), d
                        } : Reflect.set
                    });
                    return Qr.set(c, o), c
                })
            }
        })
    }

    function Gg(s, r, t, e) {
        let i = {};
        t.get && (i.get = t.get), t.set && (i.set = function(n) {
            let o = t.set.call(this, n);
            return e(this, [r], [n], o), o
        }), t.value && (i.value = Dn(function(...n) {
            let o = Reflect.apply(t.value, this, n);
            return e(this, [r], n, o), o
        }, t.value), i.writable = t.writable !== !1), t.configurable !== void 0 && (i.configurable = t.configurable), t.enumerable !== void 0 && (i.enumerable = t.enumerable), Object.defineProperty(s, r, i)
    }

    function ut(s, r, t, e = {}) {
        let i = s && s.prototype ? s.prototype : s;
        if (!i) return () => {};
        let n = csSymbol.for(`fd_spy_${r}`);
        if (n in i) {
            let h = i[n];
            return h.add(t), () => h.delete(t)
        }
        let o = i[n] = new Set([t]),
            c = Object.getOwnPropertyDescriptor(i, r);
        if (!c) return gs.warn(`Could not find descriptor for ${r} on target`, i), () => o.delete(t);
        let l = (...h) => {
            for (let f of o) try {
                f(...h)
            } catch (d) {
                gs.warn(`Error in spy hook for ${r} on target`, i, d)
            }
        };
        return e.mode ? Fg(i, r, c, l, e.mode) : Gg(i, r, c, l), () => o.delete(t)
    }

    function Bt(s, r, t) {
        let e = i => t(i.target);
        return s.addEventListener(r, e, {
            capture: !0,
            passive: !0
        }), () => {
            s.removeEventListener(r, e, {
                capture: !0
            })
        }
    }
    var $g = (() => {
            class s {
                constructor(t) {
                    this.ze = t, this.It = new WeakMap, this.ye = e => this.ze({
                        type: "state",
                        target: e
                    }), this.hp = e => this.ze({
                        type: "setAdoptedStyleSheets",
                        target: e
                    }), this.wr = e => this.ze({
                        type: "styleSheetUpdated",
                        target: e
                    }), this.Dn = e => {
                        var i;
                        let n = (i = this.k_(e)) === null || i === void 0 ? void 0 : i.parentStyleSheet;
                        n && this.wr(n)
                    }, this.L_ = e => this.ze({
                        type: "styleSheetDisabledChanged",
                        target: e
                    }), this.up = e => this.ze({
                        type: "activeElementChanged",
                        target: e.ownerDocument
                    })
                }
                x_(t) {
                    return csNodenodeType.apply(t) === K.DOCUMENT_NODE
                }
                V_(t) {
                    let e = [Bt(t, "input", this.ye), Bt(t, "change", this.ye), Bt(t, "checked", this.ye), Bt(t, "scroll", this.ye), Bt(t, "toggle", this.ye), Bt(t, "focusin", this.up), Bt(t, "focusout", this.up), Bt(t, "pointerover", i => {
                        this.ze({
                            type: "pointerOverElement",
                            target: i.ownerDocument,
                            element: i
                        })
                    }), Bt(t, "pointerout", i => {
                        this.ze({
                            type: "pointerOverElement",
                            target: i.ownerDocument,
                            element: null
                        })
                    }), Bt(t, "load", i => {
                        switch (i.localName) {
                            case "iframe":
                            case "link":
                                this.ze({
                                    type: "loaded",
                                    target: i
                                });
                                break
                        }
                    })];
                    this.lh(t, () => {
                        csArray.prototype.forEach.call(e, i => i())
                    })
                }
                U_(t) {
                    let e = t.defaultView;
                    if (!e) return;
                    let i = [Bt(e, "resize", () => this.ye(t)), Bt(t, "visibilitychange", () => this.ye(t)), Bt(t, "fullscreenchange", () => this.ye(t)), ut(e.Document, "adoptedStyleSheets", this.hp, {
                        mode: 2
                    }), ut(e.ShadowRoot, "adoptedStyleSheets", this.hp, {
                        mode: 2
                    }), ut(e.Element, "attachShadow", (n, o, c, l) => {
                        this.ze({
                            type: "attachShadow",
                            target: n,
                            shadowRoot: l
                        })
                    }), ut(e.HTMLInputElement, "value", this.ye), ut(e.HTMLInputElement, "checked", this.ye), ut(e.HTMLSelectElement, "selectedIndex", this.ye), ut(e.CSSStyleSheet, "insertRule", this.wr), ut(e.CSSStyleSheet, "deleteRule", this.wr), ut(e.CSSStyleSheet, "replace", this.wr), ut(e.CSSStyleSheet, "replaceSync", this.wr), ut(e.CSSStyleSheet, "addRule", this.wr), ut(e.CSSStyleRule, "style", this.Dn, {
                        mode: 1
                    }), ut(e.CSSGroupingRule, "insertRule", this.Dn), ut(e.CSSGroupingRule, "deleteRule", this.Dn), ut(e.CSSStyleDeclaration, "setProperty", this.Dn), ut(e.CSSStyleDeclaration, "removeProperty", this.Dn), ut(e.StyleSheet, "disabled", this.L_), ut(e.HTMLDialogElement, "show", this.ye), ut(e.HTMLDialogElement, "showModal", this.ye), ut(e.HTMLDialogElement, "close", this.ye), ut(e.CustomElementRegistry, "define", (n, o, c) => {
                        this.ze({
                            type: "customElementRegistration",
                            target: t,
                            name: c[0]
                        })
                    })];
                    this.lh(t, () => {
                        csArray.prototype.forEach.call(i, n => n())
                    })
                }
                k_(t) {
                    for (; t.parentRule !== null;) t = t.parentRule;
                    return t
                }
                j_(t) {
                    let e = new csMutationObserver(i => {
                        this.ze(i)
                    });
                    e.observe(t, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        characterData: !0
                    }), this.lh(t, () => {
                        e.disconnect()
                    })
                }
                lh(t, e) {
                    this.It.get(t) == null || csArray.prototype.push.call(this.It.get(t), e)
                }
                observe(t) {
                    this.It.has(t) || (this.It.set(t, []), this.V_(t), this.x_(t) && this.U_(t), this.j_(t))
                }
                disconnect(t) {
                    let e = this.It.get(t) || [];
                    for (let i of e) try {
                        i()
                    } catch (n) {
                        gs.warn(n)
                    }
                    this.It.delete(t)
                }
            }
            return s
        })(),
        Xc = new fo,
        nt, zg = 40,
        qg = 10;

    function Wg(s) {
        return csSetTimeout(() => {
            let r = 0,
                t = 0,
                e = performance.now(),
                i = !0;
            s({
                get hasTimeLeft() {
                    return r % qg === 0 && (t = performance.now(), i = t - e < zg), r++, i
                }
            })
        }, 0)
    }

    function Aa() {
        var s;
        let r = (s = nt == null ? void 0 : nt.subTasks) === null || s === void 0 ? void 0 : s.shift();
        return r ? (r.subTasks = nt == null ? void 0 : nt.subTasks, r) : Xc.shift()
    }

    function Kc() {
        Wg(s => {
            for (nt || (nt = Aa()); s.hasTimeLeft && nt;) {
                nt.isRunning = !0;
                try {
                    nt.isEnded = nt.run(s) !== !0
                } catch (r) {
                    gs.error("Error occurred while running task:", r), nt.isEnded = !0
                }
                nt.isRunning = !1, (nt.isEnded || nt.isAborted) && (nt = Aa())
            }
            nt && Kc()
        })
    }

    function ri(s, r = vi.Low) {
        let t = {
            run: s,
            isAborted: !1,
            isEnded: !1,
            abort: () => {
                t.isAborted = !0
            }
        };
        return nt != null && nt.isRunning ? (nt.subTasks = nt.subTasks || new fo, nt.subTasks.push(t, r)) : Xc.push(t, r) === 1 && !nt && Kc(), t
    }
    var Yg = 40;

    function Ta(s) {
        return csString.prototype.replace.call(s, /[:\\]/g, "\\$&")
    }

    function Zr(s) {
        return csString.prototype.replace.call(s, /\\([:\\\\])/g, "$1")
    }
    var tn = ["nextSibling", "firstChild", "contentDocument", "shadowRoot", "sheetId"];

    function en(s, r) {
        return !!s && r in s && !!s[r]
    }
    var ba = {
            "http://www.w3.org/1999/xhtml": void 0,
            "http://www.w3.org/2000/svg": "svg"
        },
        Xg = (() => {
            class s {
                constructor(t) {
                    this.A = t, this.z = new $g(e => {
                        this.hh.push(e), this.H_()
                    }), this.qe = {}, this.We = new Map, this.hh = new Bg, this.kn = new Map, this.processedMutationsCount = 0, this.serializedNodeCount = 0, this.dp = 0, this.fp = Yg
                }
                disconnect() {
                    for (let t of this.kn.values()) this.z.disconnect(t);
                    this.kn.clear()
                }
                observe(t) {
                    return this.disconnect(), this.Pa(t), this
                }
                getState(t = !0) {
                    let e = this.qe;
                    return this.qe = { ...e
                    }, t && this.pp(), e
                }
                getChanges() {
                    let t = {};
                    for (let [i, n] of this.We) {
                        let o = this.qe[i];
                        if (!(n && !o))
                            if (o && !n) t[i] = Us(o);
                            else {
                                let c = Oc(n, o);
                                c !== void 0 && (t[i] = c)
                            }
                    }
                    return this.pp(), Pc(t) ? t : void 0
                }
                setFrameRate(t) {
                    return this.fp = t / 1e3, this
                }
                onChange(t) {
                    return this.A = t, () => {
                        this.A === t && (this.A = void 0, this.Ln && (csClearTimeout(this.Ln), this.Ln = void 0))
                    }
                }
                async getStateAsync(t = !0) {
                    return await this.gp(), this.getState(t)
                }
                async getChangesAsync() {
                    return await this.gp(), this.getChanges()
                }
                async gp() {
                    return new Promise(t => {
                        ri(() => t())
                    })
                }
                pp() {
                    this.We.clear()
                }
                static * findNodes(t, e) {
                    for (let i of Object.values(t)) e(i) && (yield i)
                }
                static stringifyAttrKey(t, e) {
                    let i = Ta(e);
                    return t ? `${Ta(t)}:${i}` : i
                }
                static parseAttrKey(t) {
                    let e = !1,
                        i = -1;
                    for (let c = 0; c < t.length; c++) {
                        let l = t[c];
                        if (e) e = !1;
                        else if (l === "\\") e = !0;
                        else if (l === ":") {
                            i = c;
                            break
                        }
                    }
                    if (i === -1) return {
                        namespaceURI: null,
                        name: Zr(t)
                    };
                    let n = csString.prototype.slice.call(t, 0, i),
                        o = csString.prototype.slice.call(t, i + 1);
                    return {
                        namespaceURI: Zr(n),
                        name: Zr(o)
                    }
                }
                static apply(t, e, i) {
                    let n = { ...t
                        },
                        o = new Set,
                        c = new Set,
                        l = m => {
                            c.has(m) ? c.delete(m) : o.add(m)
                        },
                        h = m => {
                            o.has(m) ? o.delete(m) : c.add(m)
                        };

                    function f(m, E) {
                        for (let v of tn) v in E && (en(m, v) && l(m[v]), en(E, v) && h(E[v]))
                    }
                    for (let [m, E] of Object.entries(e)) {
                        if (E === null) continue;
                        let v = m,
                            C = n[v],
                            P = C === void 0 ? E : Nc(C, E);
                        f(C, E), n[v] = P
                    }
                    let d = m => {
                        if (c.has(m)) return;
                        let E = n[m];
                        if (E) {
                            delete n[m], i == null || i(m);
                            for (let {
                                    nodeId: v
                                } of s.nodeRelationsEntries(E)) d(v)
                        }
                    };
                    for (let m of o) d(m);
                    return n
                }
                static nodeRelationsEntries(t, e = !1) {
                    let i = e ? tn.filter(o => o !== "nextSibling") : tn,
                        n = [];
                    for (let o of i) en(t, o) && csArray.prototype.push.call(n, {
                        key: o,
                        nodeId: t[o]
                    });
                    return n
                }
                At(t) {
                    if (t in this.qe && !this.We.has(t)) {
                        let e = this.qe[t];
                        this.We.set(t, Us(e)), this.qe[t] = Us(e)
                    }
                    return this.qe[t]
                }
                B_(t) {
                    try {
                        let e = t.cssRules.length,
                            i = {};
                        for (let n = 0; n < e; n++) {
                            let o = t.cssRules[n];
                            i[n] = o.cssText
                        }
                        return {
                            type: K.CSS_STYLESHEET_NODE,
                            cssRules: i,
                            disabled: t.disabled
                        }
                    } catch {
                        return {
                            type: K.CSS_STYLESHEET_NODE,
                            cssRules: {}
                        }
                    }
                }
                F_(t) {
                    return csArray.prototype.pop.call(csArray.from(window.csquerySelectorAll[t.nodeType].call(t, ":hover"))) || void 0
                }
                G_(t) {
                    let e = hi.getAll(t);
                    switch (csNodenodeType.apply(t)) {
                        case K.DOCUMENT_NODE:
                            {
                                let i = t,
                                    n = i.activeElement || void 0,
                                    o = this.F_(i);
                                return {
                                    type: K.DOCUMENT_NODE,
                                    baseURI: i.baseURI,
                                    activeId: n && G(n),
                                    hoveredId: o && G(o),
                                    ...this.mp(t),
                                    metadata: e
                                }
                            }
                        case K.DOCUMENT_FRAGMENT_NODE:
                            return {
                                type: K.DOCUMENT_FRAGMENT_NODE,
                                mode: t.mode,
                                metadata: e
                            };
                        case K.COMMENT_NODE:
                            return {
                                type: K.COMMENT_NODE,
                                data: void 0,
                                metadata: e
                            };
                        case K.ELEMENT_NODE:
                            {
                                let i = t,
                                    n = i.namespaceURI || "";
                                return {
                                    type: K.ELEMENT_NODE,
                                    namespaceURI: n in ba ? ba[n] : n,
                                    localName: i.localName,
                                    attributes: this.$_(i),
                                    state: this.yp(i),
                                    metadata: e
                                }
                            }
                        case K.TEXT_NODE:
                            return {
                                type: K.TEXT_NODE,
                                data: t.data || "",
                                metadata: e
                            };
                        case K.CDATA_SECTION_NODE:
                            return {
                                type: K.CDATA_SECTION_NODE,
                                data: t.data,
                                metadata: e
                            };
                        case K.DOCUMENT_TYPE_NODE:
                            return {
                                type: K.DOCUMENT_TYPE_NODE,
                                name: t.name,
                                publicId: t.publicId,
                                systemId: t.systemId,
                                metadata: e
                            };
                        default:
                            return null
                    }
                }
                $_(t) {
                    return csArray.prototype.reduce.call(csArray.from(t.attributes), (e, i) => {
                        let n = e || {};
                        return n[s.stringifyAttrKey(i.namespaceURI, i.name)] = i.value, n
                    }, void 0)
                }
                mp(t) {
                    let e = t.defaultView,
                        i = e == null ? void 0 : e.visualViewport;
                    return {
                        state: {
                            scrollX: e == null ? void 0 : e.scrollX,
                            scrollY: e == null ? void 0 : e.scrollY,
                            visibility: t.visibilityState
                        },
                        viewport: {
                            width: i == null ? void 0 : i.width,
                            height: i == null ? void 0 : i.height
                        },
                        screen: {
                            width: e == null ? void 0 : e.screen.width,
                            height: e == null ? void 0 : e.screen.height
                        }
                    }
                }
                yp(t) {
                    let e = {};
                    return "value" in t && t.value && (e.value = t.value), "selectedIndex" in t && t.selectedIndex !== void 0 && t.selectedIndex >= 0 && (e.selectedIndex = t.selectedIndex), "checked" in t && t.checked && (e.checked = t.checked), t.popover && t.matches(":popover-open") ? e.popover = !0 : t.localName === "dialog" && (e.open = t.open), t.scrollLeft && (e.scrollX = t.scrollLeft), t.scrollTop && (e.scrollY = t.scrollTop), e
                }
                H_() {
                    var t;
                    ((t = this.z_) === null || t === void 0 ? void 0 : t.isEnded) !== !1 && (this.z_ = ri(e => (this.Ar(e), this.Ep(), !this.hh.isEmpty())))
                }
                Ep() {
                    if (!this.A || this.Ln) return;
                    let t = performance.now() - this.dp,
                        e = Math.max(0, this.fp - t);
                    this.Ln = csSetTimeout(() => {
                        this.Ln = void 0;
                        let i = this.getChanges();
                        this.dp = performance.now(), i && this.A(i, this.getState())
                    }, e)
                }
                q_(t) {
                    for (let e = t == null ? void 0 : t.previousSibling; e; e = e.previousSibling)
                        if (this.fs(e)) return G(e)
                }
                W_(t) {
                    var e;
                    let i = csNodeparentNode.apply(t) || t.host || ((e = t.defaultView) === null || e === void 0 ? void 0 : e.frameElement);
                    if (this.fs(i)) return G(i)
                }
                Pa(t) {
                    let e = new Mn;
                    e.pushMany(this.Sp(t, !1)), !e.isEmpty() && ri(i => {
                        let n;
                        for (; i.hasTimeLeft && (n = e.shift());) {
                            e.pushMany(this.Sp(n));
                            let o = csNodenextSibling.apply(n);
                            o && e.push(o)
                        }
                        return !!n
                    })
                }
                Y_(t) {
                    switch (t) {
                        case K.DOCUMENT_NODE:
                            return "contentDocument";
                        case K.DOCUMENT_FRAGMENT_NODE:
                            return "shadowRoot";
                        default:
                            return "childList"
                    }
                }
                Tr(t) {
                    ri(() => {
                        let e = t.ownerNode;
                        if (e && (!this.Er(e) || !this.fs(e))) return !1;
                        if (this.fs(t) || !e || e.localName === "style" ? this.vp(t) : this.uh(G(t), {
                                type: K.CSS_STYLESHEET_NODE,
                                cssRules: {},
                                disabled: t.disabled
                            }), e && this.fs(e)) {
                            let i = G(e);
                            this.At(i).sheetId = G(t)
                        }
                        return !1
                    })
                }
                _p(t) {
                    let e = 0,
                        i = G(t),
                        n = t.adoptedStyleSheets || [],
                        o = n.length,
                        c = {};
                    ri(l => {
                        if (!this.fs(t) || !this.Er(t) || n !== t.adoptedStyleSheets) return !1;
                        for (; l.hasTimeLeft && e < o;) {
                            let f = n[e];
                            c[e] = this.fs(f) ? G(f) : this.vp(f), e += 1
                        }
                        if (e < o) return !0;
                        let h = this.At(i);
                        return h && (h.adoptedStyleSheets = c), !1
                    })
                }
                vp(t) {
                    let e = G(t);
                    return this.uh(e, this.B_(t)), e
                }
                uh(t, e) {
                    this.serializedNodeCount++, this.qe[t] = e, this.Ep(), this.We.has(t) || this.We.set(t, null)
                }
                fs(t) {
                    return G(t) in this.qe
                }
                wp(t) {
                    var e;
                    if (!s.trackIframeContent || t.localName !== "iframe") return !1;
                    let i = t;
                    try {
                        return !!i.contentDocument && !!(!((e = i.contentWindow) === null || e === void 0) && e.document)
                    } catch {
                        return !1
                    }
                }
                Ap(t) {
                    let e = G(t),
                        i = this.qe[e];
                    if (!i) {
                        gs.warn(`No serialized node id ${e}`);
                        return
                    }
                    let n = this.W_(t);
                    if (!n) {
                        gs.warn("No parent id for node", t);
                        return
                    }
                    let o = this.Y_(i.type);
                    if (o === "childList") {
                        let c = this.q_(t);
                        this.fh(e, c, n, !0)
                    } else {
                        let c = this.At(n);
                        c[o] = e, i.parent = n
                    }
                }* Sp(t, e = !0) {
                    var i, n, o, c;
                    if (!this.Er(t)) return;
                    if (this.fs(t)) {
                        e && this.Ap(t);
                        return
                    }
                    let l = G(t),
                        h = this.G_(t);
                    if (!h) {
                        gs.warn("Node was not serialized", t);
                        return
                    }
                    switch (this.uh(l, h), e && this.Ap(t), h.type) {
                        case K.DOCUMENT_NODE:
                        case K.DOCUMENT_FRAGMENT_NODE:
                            {
                                let d = t;this.kn.set(l, d),
                                this.z.observe(d),
                                !((i = d.adoptedStyleSheets) === null || i === void 0) && i.length && this._p(d);
                                break
                            }
                        case K.TEXT_NODE:
                            {
                                ((n = t.parentElement) === null || n === void 0 ? void 0 : n.localName) === "style" && (h.data = "");
                                break
                            }
                        case K.ELEMENT_NODE:
                            {
                                let d = t;
                                switch (h.localName) {
                                    case "iframe":
                                        this.wp(d) && (yield d.contentDocument);
                                        break;
                                    case "link":
                                        d.rel === "stylesheet" && d.sheet && this.Tr(d.sheet);
                                        break;
                                    case "style":
                                        {
                                            let m = d.sheet;m && this.Tr(m);
                                            break
                                        }
                                    default:
                                        kf(h.localName) && (!((c = (o = t.ownerDocument) === null || o === void 0 ? void 0 : o.defaultView) === null || c === void 0) && c.customElements.get(h.localName)) && this.Tp(G(t.ownerDocument), h.localName), csElementshadowRoot.apply(d) && (yield csElementshadowRoot.apply(d));
                                        break
                                }
                                break
                            }
                    }
                    let f = csNodefirstChild.apply(t);
                    f && (yield f)
                }
                Tp(t, e) {
                    let i = this.At(t),
                        n = i.customElements || (i.customElements = {});
                    n[e] = 1
                }
                ph(t) {
                    let e = this.At(t);
                    if (e) {
                        switch (e.type) {
                            case K.DOCUMENT_NODE:
                            case K.DOCUMENT_FRAGMENT_NODE:
                                this.z.disconnect(this.kn.get(t)), this.kn.delete(t)
                        }
                        delete this.qe[t];
                        for (let {
                                nodeId: i
                            } of s.nodeRelationsEntries(e)) this.ph(i)
                    }
                }
                fh(t, e, i, n) {
                    let o;
                    if (e) {
                        let c = this.At(e);
                        o = c.nextSibling, c.nextSibling = t
                    } else {
                        let c = this.At(i);
                        o = c.firstChild, c.firstChild = t
                    }
                    if (n && t && o !== t) {
                        let c = this.At(t);
                        if (c.nextSibling = o, o) {
                            let l = this.At(o);
                            l.previousSibling = t
                        }
                    }
                    if (t) {
                        let c = this.At(t);
                        c.parent = i, c.previousSibling = e
                    }
                }
                X_(t) {
                    var e;
                    let i = this.At(t),
                        n = new Set;
                    for (let o = i == null ? void 0 : i.firstChild; o; o = (e = this.At(o)) === null || e === void 0 ? void 0 : e.nextSibling) n.add(o);
                    return n
                }
                Er(t) {
                    return "isConnected" in t ? t.isConnected : !t.ownerNode || t.ownerNode.isConnected
                }
                K_(t) {
                    let e = this.At(t);
                    e && (e.parent = void 0, e.nextSibling = void 0, e.previousSibling = void 0)
                }
                Ar(t) {
                    var e, i;
                    let n;
                    for (; t.hasTimeLeft && (n = this.hh.shift());) {
                        if (this.processedMutationsCount++, !this.fs(n.target) || !this.Er(n.target)) continue;
                        let o = G(n.target);
                        switch (n.type) {
                            case "attachShadow":
                                {
                                    this.Pa(n.shadowRoot),
                                    this.At(o).shadowRoot = G(n.shadowRoot);
                                    break
                                }
                            case "childList":
                                {
                                    let c, l = this.X_(o);
                                    for (let f = csNodefirstChild.apply(n.target); f; f = csNodenextSibling.apply(f)) {
                                        this.fs(f) || this.Pa(f);
                                        let d = G(f);
                                        l.delete(d), this.fh(d, c, o), c = d
                                    }
                                    this.fh(void 0, c, o);
                                    for (let f of l) this.K_(f),
                                    this.ph(f);
                                    let h = this.At(o);
                                    if (h.type === K.ELEMENT_NODE && h.localName === "style") {
                                        let f = n.target.sheet;
                                        f && this.Tr(f)
                                    }
                                    break
                                }
                            case "characterData":
                                {
                                    let c = this.At(o);
                                    if (c.type === K.TEXT_NODE && (c.data = n.target.data, ((e = n.target.parentElement) === null || e === void 0 ? void 0 : e.localName) === "style")) {
                                        c.data = "";
                                        let l = (i = n.target.parentElement) === null || i === void 0 ? void 0 : i.sheet;
                                        l && this.Tr(l)
                                    }
                                    break
                                }
                            case "attributes":
                                {
                                    let c = s.stringifyAttrKey(n.attributeNamespace, n.attributeName),
                                        l = n.target,
                                        h = this.At(o),
                                        f = l.getAttributeNS(n.attributeNamespace, n.attributeName);h.attributes = h.attributes || {},
                                    f === null ? delete h.attributes[c] : h.attributes[c] = f;
                                    break
                                }
                            case "state":
                                {
                                    let c = this.At(o);c.type === K.DOCUMENT_NODE ? Object.assign(c, this.mp(n.target)) : c.state = this.yp(n.target);
                                    break
                                }
                            case "setAdoptedStyleSheets":
                                {
                                    this._p(n.target);
                                    break
                                }
                            case "styleSheetUpdated":
                                {
                                    this.Tr(n.target);
                                    break
                                }
                            case "styleSheetDisabledChanged":
                                {
                                    let c = this.At(o);c.disabled = n.target.disabled;
                                    break
                                }
                            case "loaded":
                                {
                                    switch (n.target.localName) {
                                        case "link":
                                            {
                                                let c = n.target;c.rel === "stylesheet" && c.sheet && this.Tr(c.sheet);
                                                break
                                            }
                                        case "iframe":
                                            {
                                                let c = n.target,
                                                    l = this.At(o),
                                                    h = c.contentDocument,
                                                    f = h && G(h);l.contentDocument && l.contentDocument !== f && (this.ph(l.contentDocument), delete l.contentDocument),
                                                this.wp(c) && this.Pa(h);
                                                break
                                            }
                                    }
                                    break
                                }
                            case "activeElementChanged":
                                {
                                    let c = this.At(o),
                                        l = n.target.activeElement || void 0;c.activeId = l && G(l);
                                    break
                                }
                            case "pointerOverElement":
                                {
                                    let c = this.At(o),
                                        l = n.element || void 0;c.hoveredId = l && G(l);
                                    break
                                }
                            case "customElementRegistration":
                                {
                                    this.Tp(o, n.name);
                                    break
                                }
                        }
                    }
                }
            }
            return s.trackIframeContent = !1, s
        })(),
        Kg = (() => {
            class s extends Ys {
                constructor(t) {
                    super(), this.tt = t
                }
                isListening(t) {
                    return t.type === "DOM_INITIAL_STATE" || Fs.isDOMEvent(t) && t.domEvent === "initialDOM"
                }
                processEvent(t) {
                    if (Fs.isDOMEvent(t)) t.initialDOM.baseURI = this.tt.anonymizeUrl(t.initialDOM.baseURI);
                    else
                        for (let e of Xg.findNodes(t.state, i => i.type === K.DOCUMENT_NODE)) e && e.type === K.DOCUMENT_NODE && (e.baseURI = this.tt.anonymizeUrl(e.baseURI));
                    return t
                }
            }
            return be([Dt("UrlAnonymizationProcessor.processEvent")], s.prototype, "processEvent", null), s
        })(),
        Jg = "textarea",
        Qg = (() => {
            class s extends Ys {
                isListening(t) {
                    return t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE" || Fs.isDOMEvent(t) && (t.domEvent === "initialDOM" || t.domEvent === "nodesAdded" || t.domEvent === "characterDataChanged")
                }
                processEvent(t) {
                    if (t.type === "DOM_PATCH" || t.type === "DOM_INITIAL_STATE") return this.J_(t), t;
                    switch (t.domEvent) {
                        case "initialDOM":
                        case "nodesAdded":
                            this.Q_(t);
                            break;
                        case "characterDataChanged":
                            this.Z_(t);
                            break
                    }
                    return t
                }
                J_(t) {
                    let e = t.type === "DOM_PATCH" ? t.diff : t.state,
                        i = t.state;
                    for (let n of Object.keys(e)) {
                        let o = e[n],
                            c = i[n];
                        if (!c.parent || !("data" in o) || c.type !== 3) continue;
                        let l = i[c.parent];
                        this.bp(o, c.metadata, l.localName)
                    }
                }
                Q_(t) {
                    let e = t.domEvent === "initialDOM" ? [t.initialDOM] : t.nodes;
                    for (let i of e) et.traverse(i, (n, o) => {
                        var c;
                        let l = (c = o == null ? void 0 : o.localName) !== null && c !== void 0 ? c : t.targetLocalName,
                            h = n.props;
                        n.nodeType === 3 && this.bp(n, h, l)
                    })
                }
                bp(t, e, i) {
                    this.Rp(i, e) && (t.data = this.Cp(t.data))
                }
                Z_(t) {
                    this.Rp(t.parentLocalName, t.targetProps) && (t.newValue = this.Cp(t.newValue))
                }
                Cp(t) {
                    return csString.prototype.replace.call(t, /\S/g, "\u2022")
                }
                Rp(t, e) {
                    return t === Jg || (e == null ? void 0 : e[ze.EDITABLE_NODE_PROP]) === !0
                }
            }
            return be([Dt("AnonymizedEditableTextProcessor.processEvent")], s.prototype, "processEvent", null), s
        })();
    var Jc = !0,
        nr = csSymbol("safe"),
        Ra = csSymbol("task");

    function Ot(s, r = Jc) {
        var t;
        (t = s[nr]) !== null && t !== void 0 || (s[nr] = function(e) {
            let i = arguments;
            As(() => (e[Ra] = Vt, s.listener.apply(s.boundElement, i)), [he.EventListener, s.type], e[Ra])
        }), s.boundElement.addEventListener(s.type, s[nr], r)
    }

    function Nt(s, r = Jc) {
        s.boundElement.removeEventListener(s.type, s[nr], r)
    }
    var Zg = (() => {
            class s {
                constructor(t) {
                    this.A = t, this.Kt = {
                        boundElement: window,
                        type: "resize",
                        listener: () => this.resizeListener()
                    }, this.A = t
                }
                observe() {
                    Ot(this.Kt), this.gh()
                }
                gh() {
                    this.resizeListener()
                }
                disconnect() {
                    Nt(this.Kt)
                }
                resizeListener() {
                    let t = {
                        width: gt.windowWidth(),
                        height: gt.windowHeight()
                    };
                    this.A(t)
                }
            }
            return lt([V("resize")], s.prototype, "resizeListener", null), s
        })(),
        $e = (() => {
            let s;
            return function(r) {
                r.PORTRAIT = "Portrait", r.LANDSCAPE = "Landscape"
            }(s || (s = {})), s
        })(),
        Ki = (() => {
            let s;
            return function(r) {
                r.PORTRAIT_PRIMARY = "portrait-primary", r.PORTRAIT_SECONDARY = "portrait-secondary", r.LANDSCAPE_PRIMARY = "landscape-primary", r.LANDSCAPE_SECONDARY = "landscape-secondary"
            }(s || (s = {})), s
        })(),
        Ji = (() => {
            let s;
            return function(r) {
                r[r.PORTRAIT = 0] = "PORTRAIT", r[r.PORTRAIT_REVERSE = 180] = "PORTRAIT_REVERSE", r[r.LANDSCAPE = -90] = "LANDSCAPE", r[r.LANDSCAPE_REVERSE = 90] = "LANDSCAPE_REVERSE"
            }(s || (s = {})), s
        })(),
        tm = (() => {
            let s;
            return function(r) {
                let t = null;
                r.isScreenOrientationApiSupported = () => {
                    var c;
                    return t != null ? t : t = !!(!((c = st.screen) === null || c === void 0) && c.orientation)
                }, r.isDeprecatedScreenOrientationApiSupported = () => "orientation" in st;

                function e() {
                    return $e.LANDSCAPE
                }

                function i() {
                    var c;
                    switch ((c = st.screen.orientation) === null || c === void 0 ? void 0 : c.type) {
                        case Ki.PORTRAIT_PRIMARY:
                        case Ki.PORTRAIT_SECONDARY:
                            return $e.PORTRAIT;
                        case Ki.LANDSCAPE_PRIMARY:
                        case Ki.LANDSCAPE_SECONDARY:
                            return $e.LANDSCAPE;
                        default:
                            return $e.PORTRAIT
                    }
                }

                function n() {
                    switch (window.orientation) {
                        case Ji.PORTRAIT:
                        case Ji.PORTRAIT_REVERSE:
                            return $e.PORTRAIT;
                        case Ji.LANDSCAPE:
                        case Ji.LANDSCAPE_REVERSE:
                            return $e.LANDSCAPE;
                        default:
                            return $e.PORTRAIT
                    }
                }

                function o() {
                    return r.isScreenOrientationApiSupported() ? i() : r.isDeprecatedScreenOrientationApiSupported() ? n() : e()
                }
                r.getCurrentOrientation = o
            }(s || (s = {})), s
        })(),
        em = (() => {
            class s extends fe {
                constructor() {
                    super(...arguments), this.mh = null, this.yh = null, this.ci = new Zg(t => {
                        this.produceEvent({ ...t,
                            type: "viewportResize"
                        }), this.onScreenPotentiallyChanged()
                    })
                }
                onScreenPotentiallyChanged() {
                    let t = tm.getCurrentOrientation(),
                        {
                            screenWidth: e,
                            screenHeight: i
                        } = this.tw(t);
                    if (e !== this.mh || i !== this.yh) {
                        this.mh = e, this.yh = i;
                        let n = {
                            type: "screenResize",
                            width: e,
                            height: i
                        };
                        this.produceEvent(n)
                    }
                }
                tw(t) {
                    let e, i, n = gt.screenWidth(),
                        o = gt.screenHeight();
                    return t === $e.PORTRAIT ? (e = n, i = o) : (e = Math.max(n, o), i = Math.min(n, o)), {
                        screenWidth: e,
                        screenHeight: i
                    }
                }
                onStart() {
                    this.ci.observe()
                }
                onStop() {
                    this.mh = null, this.yh = null, this.ci.disconnect()
                }
            }
            return s
        })();

    function sm(s) {
        let r = csEventtarget.apply(s);
        return r && ct(r) && csElementshadowRoot.apply(r) && s.composedPath ? s.__csOriginalTarget || s.composedPath()[0] : r
    }
    var Gs = (() => {
            class s {
                get selectors() {
                    return this.Ye === "" ? null : this.Ye
                }
                constructor(t, e = {
                    closest: !1
                }) {
                    this.A = t, this.Pt = e, this.Ye = "", this.Vn = new wr, this.Ar = Ts(i => {
                        if (this.Ye === "") return;
                        let n = [];
                        for (let o of ac(i, c => c.addedNodes)) {
                            if (!(Du(o) || this.Pt.closest && lr(o))) continue;
                            let c = this.Pt.closest ? this.ew(o, this.Ye) : this.findMatchingElements(o, this.Ye);
                            zo(c, n)
                        }
                        n.length && this.A(n, "added")
                    }, "SelectorObserver.processMutations"), this.iw = (i, n) => {
                        if (this.Ye === "" || n !== "added") return;
                        let o = this.findMatchingElements(i, this.Ye);
                        o.length && this.A(o, "added")
                    }, this.z = new ts(this.Ar, this.iw)
                }
                observe(t) {
                    this.Ye === "" ? this.z.observe() : this.Ye += ",", this.Ye += t;
                    let e = this.findMatchingElements(document, t);
                    for (let i of this.z.shadowRoots) {
                        let n = this.findMatchingElements(i, t);
                        zo(n, e)
                    }
                    e.length && (J(e, i => {
                        this.Vn.add(i)
                    }), this.A(e, "initial"))
                }
                processPendingMutations() {
                    this.Ar(this.z.takeRecords())
                }
                disconnect() {
                    this.z.disconnect(), this.Vn.clear(), this.Ye = ""
                }
                ew(t, e) {
                    let i = [];
                    if (lr(t)) {
                        if (t.parentElement) {
                            let n = Rn(t.parentElement, e);
                            n && csArray.prototype.push.call(i, n)
                        }
                        return csArray.prototype.filter.call(i, n => this.Vn.has(n) === !1)
                    } else {
                        if (wi(t)) {
                            let n = Rn(t, e);
                            if (n) return csArray.prototype.push.call(i, n), csArray.prototype.filter.call(i, o => this.Vn.has(o) === !1)
                        }
                        return this.findMatchingElements(t, e)
                    }
                }
                findMatchingElements(t, e) {
                    let i = mi(window.csquerySelectorAll[t.nodeType].call(t, e));
                    return ct(t) && ie.call(t, e) && csArray.prototype.push.call(i, t), csArray.prototype.filter.call(i, n => this.Vn.has(n) === !1)
                }
            }
            return lt([V()], s.prototype, "observe", null), lt([V()], s.prototype, "disconnect", null), lt([Dt("SelectorObserver.findMatchingElements")], s.prototype, "findMatchingElements", null), s
        })(),
        im = (() => {
            class s extends fe {
                constructor() {
                    super(), this.Ip = t => {
                        let e = sm(t);
                        e && this.Eh(e, t.type)
                    }, this.ge = new Ws((t, e) => {
                        switch (e) {
                            case "initial":
                            case "added":
                                this.Pp(t);
                                break;
                            case "removed":
                                this.Op(t);
                                break
                        }
                    }), this.W = new Gs((t, e) => {
                        (e === "initial" || e === "added") && this.rw(t)
                    })
                }
                static shouldProcessElement(t) {
                    return t.tagName === "VIDEO" && ft.isConnected(t) && !D.isMaskedElement(t) && !D.isMaskedElementChild(t)
                }
                static isPlaying(t) {
                    return !t.paused && !t.ended
                }
                onStart() {
                    this.Pp(document), this.ge.observe(), this.W.observe("video")
                }
                onStop() {
                    this.Op(document), this.ge.disconnect(), this.W.disconnect()
                }
                Eh(t, ...e) {
                    if (this.isStarted && s.shouldProcessElement(t))
                        for (let i of e) {
                            let n = G(t),
                                o = {
                                    type: "VideoEvent",
                                    videoEventType: i,
                                    nodeId: n
                                };
                            i === "seeked" && (o.newTimePositionInSec = t.currentTime), Yn(() => this.produceEvent(o))
                        }
                }
                rw(t) {
                    for (let e of t) this.Eh(e, "seeked"), s.isPlaying(e) && this.Eh(e, "play")
                }
                Pp(t) {
                    for (let e of ["play", "pause", "seeked"]) Ot({
                        type: e,
                        listener: this.Ip,
                        boundElement: t
                    })
                }
                Op(t) {
                    for (let e of ["play", "pause", "seeked"]) Nt({
                        type: e,
                        listener: this.Ip,
                        boundElement: t
                    })
                }
            }
            return s
        })();

    function rm(s) {
        return s.nodeName === "SELECT"
    }

    function po(s) {
        return s.nodeName === "INPUT"
    }

    function nm(s) {
        return s.nodeName === "TEXTAREA" || po(s) && !Qc(s) && !Zc(s)
    }

    function Qc(s) {
        return po(s) && s.type === "number"
    }

    function Zc(s) {
        return po(s) && (s.type === "checkbox" || s.type === "radio")
    }
    var om = (() => {
        class s extends fe {
            constructor(t) {
                super(), this.ht = t, this.Sh = new Zp("low"), this.Rr = e => this.inputHandler(e), this.Li = [], this.nw(), this.ow(), this.W = new Gs(e => {
                    for (let i of e) this.vh(i) && Gt(() => {
                        this._h(i, G(i))
                    }, "low")
                }), this.ge = new Ws((e, i) => {
                    switch (i) {
                        case "initial":
                        case "added":
                            Ot({
                                type: "change",
                                listener: this.Rr,
                                boundElement: e
                            });
                            break;
                        case "removed":
                            Nt({
                                type: "change",
                                boundElement: e,
                                listener: this.Rr
                            });
                            break
                    }
                })
            }
            onStart() {
                Ot({
                    type: "keyup",
                    boundElement: document,
                    listener: this.Rr
                }), Ot({
                    type: "change",
                    boundElement: document,
                    listener: this.Rr
                }), J(this.Li, t => t.activate()), this.W.observe(csArray.prototype.join.call(s.aw, ",")), this.ge.observe()
            }
            onStop() {
                Nt({
                    type: "keyup",
                    boundElement: document,
                    listener: this.Rr
                }), Nt({
                    type: "change",
                    boundElement: document,
                    listener: this.Rr
                }), J(this.Li, t => t.deactivate()), this.W.disconnect(), this.ge.disconnect(), this.Sh.clear()
            }
            _h(t, e) {
                var i, n, o;
                if (this.Sh.has(t)) return;
                if (this.Sh.add(t), rm(t)) {
                    let h = {
                        type: "InputEvent",
                        inputType: "select",
                        target: G(t),
                        selectedIndex: t.selectedIndex,
                        timestamp: M.now()
                    };
                    this.produceEvent(h);
                    return
                }
                if (Zc(t)) {
                    let h = {
                        type: "InputEvent",
                        inputType: "checkable",
                        target: G(t),
                        checked: t.checked,
                        timestamp: M.now()
                    };
                    this.produceEvent(h);
                    return
                }
                let c = nm(t),
                    l = Qc(t);
                if (c || l) {
                    let h = (i = t.value) !== null && i !== void 0 ? i : "";
                    if (!((n = this.ht) === null || n === void 0) && n.shouldEncrypt(t)) {
                        (o = this.ht) === null || o === void 0 || o.registerInputNodeToEncrypt({
                            targetId: e,
                            targetValue: h,
                            date: M.now()
                        });
                        return
                    }
                    let f = l ? "0" : "\u2022",
                        d = {
                            type: "InputEvent",
                            inputType: "text",
                            target: G(t),
                            value: csString.prototype.replace.call(h, /\S/g, f),
                            timestamp: M.now()
                        };
                    this.produceEvent(d)
                }
            }
            inputHandler(t) {
                if (!this.isStarted) return;
                let e = mt(t),
                    i = G(e);
                !i || !this.vh(e) || ft.isConnected(e) && Gt(() => {
                    this._h(e, i)
                }, "low")
            }
            nw() {
                this.trackChanges(HTMLInputElement, "checked"), this.trackChanges(HTMLInputElement, "value"), this.trackChanges(HTMLTextAreaElement, "value")
            }
            ow() {
                this.trackChanges(HTMLSelectElement, "selectedIndex"), this.trackChanges(HTMLSelectElement, "value"), this.trackChanges(HTMLOptionElement, "selected", !0)
            }
            trackChanges(t, e, i = !1) {
                let n = gr(t.prototype, e, (o, c, l) => {
                    if (l !== c && ft.isConnected(o)) {
                        let h = i ? o.parentElement : o;
                        this.lw(h)
                    }
                });
                n && csArray.prototype.push.call(this.Li, n)
            }
            vh(t) {
                return !D.isMaskedElement(t) && !D.isMaskedElementChild(t) && (Er(t) || Qn(t) || Jn(t))
            }
            lw(t) {
                if (this.isStarted && ft.isConnected(t)) {
                    let e = G(t);
                    e && this.vh(t) && Gt(() => {
                        this._h(t, e)
                    }, "low")
                }
            }
        }
        return s.aw = ["textarea", "input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="search"]', 'input[type="tel"]', 'input[type="url"]', 'input[type="password"]', 'input[type="number"]', 'input[type="checkbox"]', 'input[type="radio"]', "select"], be([bt()], s.prototype, "inputHandler", null), be([V()], s.prototype, "trackChanges", null), s
    })();
    var am = (() => {
            class s {
                constructor(t = Number.POSITIVE_INFINITY) {
                    this.li = [], this.ot = [], this.hw = t
                }
                next(t) {
                    this.ot.length === this.hw && csArray.prototype.shift.call(this.ot), csArray.prototype.push.call(this.ot, t), this.ot.length === 1 && csSetTimeout(() => this.clear());
                    for (let e of this.li) e(t)
                }
                subscribe(t) {
                    if (Ri(this.li, i => t === i)) return () => {
                        this.li = csArray.prototype.filter.call(this.li, i => i !== t)
                    };
                    csArray.prototype.push.call(this.li, t);
                    for (let i of this.ot) t(i);
                    return () => {
                        this.li = csArray.prototype.filter.call(this.li, i => i !== t)
                    }
                }
                clear() {
                    this.ot = []
                }
                hasObservers() {
                    return this.li.length > 0
                }
            }
            return s
        })(),
        tl = (() => {
            var s;
            class r {
                constructor(e) {
                    this.A = e
                }
                observe() {
                    this.uw = s.Un.subscribe(e => this.A(e)), s.Oa || (s.Oa = !0, s.Nn.observe(), se(document, NodeFilter.SHOW_ELEMENT).visitAll(i => {
                        s.Ns.add(i), s.Un.next(i)
                    }))
                }
                disconnect() {
                    s.Oa && (this.uw(), s.Un.hasObservers() || (s.Oa = !1, s.Nn.disconnect(), s.Un.clear(), s.Ns.clear()))
                }
            }
            return s = r, r.Ns = new wr, r.Un = new am, r.fw = Ts(t => {
                Gt(() => {
                    for (let e of t) e.type === "childList" && J(e.addedNodes, i => {
                        se(i, NodeFilter.SHOW_ELEMENT).visitAll(o => {
                            s.Ns.has(o) || (s.Ns.add(o), s.Un.next(o))
                        })
                    })
                })
            }, "ElementObserver.findAllElements"), r.Oa = !1, r.Nn = new ts(s.fw), lt([V()], r.prototype, "observe", null), lt([V()], r.prototype, "disconnect", null), r
        })(),
        cm = (() => {
            class s extends fe {
                constructor() {
                    super(), this.Ms = typeof window.customElements == "object" && typeof window.customElements.whenDefined == "function" && typeof window.Promise == "function", this.pw = ys("CustomElementRegistrationProducer:onElementsFound", e => {
                        for (let i of e) D.isMaskedElement(i) || D.isMaskedElementChild(i) || Lu(i) && this.register(csString.prototype.toLowerCase.call(i.tagName))
                    });
                    let t = Ar(this.pw);
                    this.Hn = new tl(e => t.push(e)), this.ai = new Set
                }
                onStart() {
                    this.Ms && this.Hn.observe()
                }
                onStop() {
                    this.ai.clear(), this.Hn.disconnect()
                }
                async register(t) {
                    this.ai.has(t) || (this.ai.add(t), await window.customElements.whenDefined(t), this.produceEvent({
                        type: "CustomElementRegistration",
                        tagName: csString.prototype.toLowerCase.call(t)
                    }))
                }
            }
            return be([V()], s.prototype, "register", null), s
        })(),
        Ca = (() => {
            class s {
                static isNavigationTimingObserverSupported() {
                    var t, e;
                    return (((t = window.PerformanceObserver) === null || t === void 0 ? void 0 : t.supportedEntryTypes) == null ? void 0 : csArray.prototype.indexOf.call((e = window.PerformanceObserver) === null || e === void 0 ? void 0 : e.supportedEntryTypes, "navigation")) >= 0
                }
                static getTimeOrigin() {
                    return window.performance.timeOrigin
                }
                static Np() {
                    if (this.isNavigationTimingObserverSupported()) return new window.PerformanceObserver(t => s.gw(t))
                }
                static gw(t) {
                    let i = t.getEntriesByType("navigation")[0];
                    i && (this.xi = i, s.Cr(i))
                }
                static bn(t) {
                    this.mw(t), this.xi && t(this.xi), this.Ue || this.yw()
                }
                static mw(t) {
                    this.xt.add(t)
                }
                static Ew(t) {
                    this.xt.delete(t)
                }
                static yw() {
                    if (this.Bn || (this.Bn = this.Np()), !this.Bn) {
                        this.xi || (this.xi = {
                            requestStart: window.performance.timing.requestStart,
                            domInteractive: window.performance.timing.domInteractive
                        }), this.Cr(this.xi);
                        return
                    }
                    this.Bn.observe({
                        type: "navigation",
                        buffered: !0
                    }), this.Ue = !0
                }
                static Cr(t) {
                    this.xt.forEach(e => e(t))
                }
                static Cn(t) {
                    this.Ew(t), this.xt.size === 0 && this.Fn()
                }
                static Fn() {
                    var t;
                    this.Ue && ((t = this.Bn) === null || t === void 0 || t.disconnect(), this.Ue = !1, this.xi = null, this.Bn = this.Np())
                }
                constructor(t) {
                    this.A = t
                }
                observe() {
                    s.bn(this.A)
                }
                disconnect() {
                    s.Cn(this.A)
                }
            }
            return s.Ue = !1, s.xt = new Set, s.xi = null, s
        })(),
        lm = (() => {
            class s extends fe {
                constructor() {
                    super(...arguments), this.Na = null, this.Mp = new Ca(t => {
                        if (this.Na) return;
                        let e = this.Sw(t);
                        e && (this.Na = e, this.produceEvent(e))
                    })
                }
                onStart() {
                    if (this.Na) {
                        this.produceEvent(this.Na);
                        return
                    }
                    this.Mp.observe()
                }
                onStop() {
                    this.Mp.disconnect()
                }
                Sw(t) {
                    let e = Ca.getTimeOrigin();
                    return {
                        type: "PerformanceTiming",
                        timings: {
                            timeOrigin: e,
                            requestStart: Math.floor(e + t.requestStart),
                            domInteractive: Math.floor(e + t.domInteractive)
                        },
                        timestamp: M.now()
                    }
                }
            }
            return s
        })(),
        yt = (() => {
            let s;
            return function(r) {
                r[r.TAP = 0] = "TAP", r[r.LONG_PRESS = 1] = "LONG_PRESS", r[r.DRAG = 2] = "DRAG", r[r.FLICK = 3] = "FLICK", r[r.PINCH_IN = 4] = "PINCH_IN", r[r.PINCH_OUT = 5] = "PINCH_OUT"
            }(s || (s = {})), s
        })(),
        Qi = (() => {
            let s;
            return function(r) {
                r[r.UP = 1] = "UP", r[r.DOWN = 2] = "DOWN", r[r.LEFT = 3] = "LEFT", r[r.RIGHT = 4] = "RIGHT"
            }(s || (s = {})), s
        })(),
        hm = (() => {
            class s {
                compute(t, e) {
                    let i = this.hi(e.x) - this.hi(t.x),
                        n = this.hi(e.y) - this.hi(t.y),
                        o = e.time - t.time;
                    return {
                        duration: o,
                        distance: this.Dp(i, n),
                        direction: this.vw(i, n),
                        velocity: this._w(i, n, o)
                    }
                }
                computePinchMetrics(t, e) {
                    let i = this.hi(e.x) - this.hi(t.x),
                        n = this.hi(e.y) - this.hi(t.y);
                    return {
                        duration: e.time - t.time,
                        distance: this.Dp(i, n)
                    }
                }
                getScale(t, e) {
                    return Math.abs(e / t - 1)
                }
                hi(t) {
                    return t / window.devicePixelRatio
                }
                Dp(t, e) {
                    return Math.round(Math.sqrt(t * t + e * e))
                }
                _w(t, e, i) {
                    let n = i / 1e3,
                        o = t / n,
                        c = e / n;
                    return Math.round(Math.abs(o) + Math.abs(c))
                }
                vw(t, e) {
                    return Math.abs(t) > Math.abs(e) ? t > 0 ? Qi.RIGHT : Qi.LEFT : e > 0 ? Qi.DOWN : Qi.UP
                }
            }
            return s
        })(),
        el = typeof performance != "undefined" && !!performance.now,
        Ia = el ? () => performance.now() : () => csDate.now(),
        um = (() => {
            var s;
            return el ? (s = performance.timing) === null || s === void 0 ? void 0 : s.navigationStart : 0
        })(),
        Zi = {
            now() {
                return Math.round(Ia() + um)
            },
            elapsed() {
                return Ia()
            }
        };

    function Pa(s, r = 0) {
        let t = Math.pow(10, r);
        return Math.round(s * t) / t
    }
    var dm = 1e3,
        fm = 100,
        pm = .1,
        kn = (() => {
            class s {
                constructor() {
                    this.Jt = {}, this.Ah = () => {}, this.Ma = new hm, this.Ie()
                }
                static isGestureDetectionSupported() {
                    return typeof devicePixelRatio != "undefined"
                }
                onGesture(t) {
                    this.Ah = t
                }
                isValidTouchEvent(t) {
                    return "touches" in t && "changedTouches" in t
                }
                processActionDown(t) {
                    if (!this.Aw(t)) return;
                    this.Tw(t) && this.Ie();
                    let e = {
                        x: t.touches[0].clientX,
                        y: t.touches[0].clientY,
                        time: Zi.now()
                    };
                    if (t.touches.length === 1) this.Jt.startPinchTime = e.time, this.Jt.firstTouch = e;
                    else if (t.touches.length === 2 && (this.Jt.secondTouch = {
                            x: t.touches[1].clientX,
                            y: t.touches[1].clientY,
                            time: Zi.now()
                        }, this.Jt.firstTouch && this.Jt.secondTouch)) {
                        let i = this.Ma.computePinchMetrics(this.Jt.firstTouch, this.Jt.secondTouch);
                        this.Ir = i.distance
                    }
                    csArray.prototype.push.call(this.Gn, e), this.Da = mt(t)
                }
                processActionMove() {
                    this.Th = !0
                }
                processActionUp(t) {
                    if (this.bw(t)) {
                        if (csArray.prototype.push.call(this.Gn, {
                                x: t.changedTouches[0].clientX,
                                y: t.changedTouches[0].clientY,
                                time: Zi.now()
                            }), this.Rw(t) && this.Jt.startPinchTime) {
                            let e = {
                                    x: t.touches[0].clientX,
                                    y: t.touches[0].clientY,
                                    time: this.Jt.startPinchTime
                                },
                                i = {
                                    x: t.changedTouches[0].clientX,
                                    y: t.changedTouches[0].clientY,
                                    time: Zi.now()
                                };
                            this.Jt.firstTouch && (this.Jt.firstTouch = e, this.Jt.secondTouch = i), this.Cw(t)
                        }
                        this.Ir || this.Iw() && this.Pw(t)
                    }
                }
                Ie() {
                    this.Gn = [], this.Da = null, this.Th = !1, this.Ir = null, this.$n = !0
                }
                Pw(t) {
                    let e = this.Ma.compute(this.Gn[0], this.Gn[1]);
                    this.$n = t.isTrusted;
                    let i = this.Th ? this.Ow(e) : this.Nw(e);
                    if (this.Mw(i.type, t.changedTouches)) {
                        let n = t.changedTouches[0];
                        i.pageX = Pa(n.pageX, 1), i.pageY = Pa(n.pageY, 1)
                    }
                    this.Ah(i, t)
                }
                Cw(t) {
                    if (!(this.Jt.firstTouch && this.Jt.secondTouch)) return;
                    let e = this.Ma.computePinchMetrics(this.Jt.firstTouch, this.Jt.secondTouch);
                    this.$n = t.isTrusted;
                    let i = this.Dw(e);
                    i && this.Ah(i, t)
                }
                Dw(t) {
                    return !this.Ir || this.Ma.getScale(this.Ir, t.distance) < pm ? void 0 : {
                        type: this.Ir > t.distance ? yt.PINCH_IN : yt.PINCH_OUT,
                        target: this.Da,
                        distance: t.distance,
                        isTrusted: this.$n
                    }
                }
                Ow(t) {
                    return {
                        type: t.velocity < fm ? yt.DRAG : yt.FLICK,
                        target: this.Da,
                        velocity: t.velocity,
                        distance: t.distance,
                        direction: t.direction,
                        isTrusted: this.$n
                    }
                }
                Nw(t) {
                    return {
                        type: t.duration < dm ? yt.TAP : yt.LONG_PRESS,
                        target: this.Da,
                        isTrusted: this.$n
                    }
                }
                Mw(t, e) {
                    return t === yt.TAP && e && e.length === 1
                }
                Tw(t) {
                    return t.touches.length === 1
                }
                Iw() {
                    return this.Gn.length === 2
                }
                Aw(t) {
                    return t.touches.length > 0
                }
                bw(t) {
                    return t.changedTouches.length > 0
                }
                Rw(t) {
                    return this.Th && !!this.Ir && t.changedTouches.length === 1 && t.touches.length === 1
                }
            }
            return s
        })(),
        gm = "touchstart",
        mm = "touchmove",
        ym = "touchend",
        Em = (() => {
            class s {
                constructor(t) {
                    this.A = t
                }
                observe() {
                    s.kp && s.bh(this.A)
                }
                disconnect() {
                    s.kp && s.xn(this.A)
                }
                static kw(t, e) {
                    csArray.prototype.forEach.call($s(s.xt), i => i(t, e))
                }
                static bh(t) {
                    s.xt.has(t) || (s.xt.add(t), s.xt.size === 1 && (s.zn.onGesture(s.kw), csArray.prototype.forEach.call(s.fi, e => Ot(e))))
                }
                static xn(t) {
                    s.xt.delete(t), s.xt.size === 0 && csArray.prototype.forEach.call(s.fi, e => Nt(e))
                }
                static Rh(t) {
                    if (s.zn.isValidTouchEvent(t)) switch (t.type) {
                        case "touchstart":
                            s.zn.processActionDown(t);
                            break;
                        case "touchmove":
                            s.zn.processActionMove();
                            break;
                        case "touchend":
                            s.zn.processActionUp(t);
                            break
                    }
                }
            }
            return s.fi = [{
                boundElement: st.document,
                type: gm,
                listener: r => s.Rh(r)
            }, {
                boundElement: st.document,
                type: mm,
                listener: r => s.Rh(r)
            }, {
                boundElement: st.document,
                type: ym,
                listener: r => s.Rh(r)
            }], s.kp = kn.isGestureDetectionSupported(), s.xt = new Set, s.zn = new kn, s
        })(),
        Sm = (() => {
            class s extends fe {
                constructor() {
                    super(), this.qn = new Em(this.Ch.bind(this))
                }
                onStart() {
                    this.qn.observe()
                }
                onStop() {
                    this.qn.disconnect()
                }
                Ch(t) {
                    let e = this.Lw(t);
                    e && this.produceEvent(e)
                }
                Lw(t) {
                    return this.xw(t) ? {
                        type: "Gesture",
                        targetId: G(t.target),
                        data: {
                            type: t.type,
                            direction: t.direction,
                            distance: t.distance,
                            velocity: t.velocity,
                            pageX: t.pageX,
                            pageY: t.pageY
                        }
                    } : null
                }
                xw(t) {
                    return t.target !== null && !(ct(t.target) && D.isMaskedElementChild(t.target))
                }
            }
            return s
        })(),
        sl = (() => {
            class s {
                constructor(t) {
                    this.A = t, this.pi = !1, this.Kt = {
                        boundElement: st,
                        type: "error",
                        listener: e => this.Vw(e)
                    }
                }
                observe() {
                    Ot(this.Kt, this.pi)
                }
                disconnect() {
                    Nt(this.Kt, this.pi)
                }
                Vw(t) {
                    this.A(t)
                }
            }
            return s
        })(),
        vm = (() => {
            class s extends fe {
                constructor() {
                    super(...arguments), this.Lp = new sl(t => this.ka(t))
                }
                ka({
                    message: t,
                    filename: e,
                    lineno: i,
                    colno: n
                }) {
                    t = t != null ? t : "[NO ERROR MESSAGE]", e = !e || Xt(e) ? "" : e, this.produceEvent({
                        type: "JSError",
                        message: t,
                        filename: e,
                        lineno: i,
                        colno: n
                    })
                }
                onStart() {
                    this.Lp.observe()
                }
                onStop() {
                    this.Lp.disconnect()
                }
            }
            return s
        })(),
        _m = (() => {
            class s extends Ys {
                constructor(t) {
                    super(), this.Uw = t, this.Ih = 1024, this.Ph = 150
                }
                isListening(t) {
                    return t.type === "JSError"
                }
                processEvent(t) {
                    return t.message = Et.truncate(t.message, this.Ih, Et.ELLIPSIS), t.filename = Et.truncate(t.filename, this.Ph, Et.ELLIPSIS), this.Uw(t)
                }
            }
            return s
        })();
    var xs = [],
        Ln = !1,
        il = Ts(Am, "executeTasks");

    function wm(s) {
        if (csArray.prototype.push.call(xs, s), !Ln) {
            for (let r = 0; r < 3; r++) csSetTimeout(il);
            Ln = !0
        }
    }

    function Am() {
        let s = csDate.now();
        for (let r = 0; r < xs.length; r++)
            if (xs[r](), csDate.now() - s >= 35) {
                xs = csArray.prototype.slice.call(xs, r + 1), csSetTimeout(il);
                return
            }
        xs = [], Ln = !1
    }
    var Be = (() => {
            let s;
            return function(r) {
                r[r.Started = 0] = "Started", r[r.Stopped = 1] = "Stopped", r[r.Processing = 2] = "Processing", r[r.Completed = 3] = "Completed"
            }(s || (s = {})), s
        })(),
        rl = (() => {
            class s {
                constructor() {
                    this.Et = new bi, this.Dt = Be.Stopped, this.A = null, this.Vp = t => {
                        this.Dt === Be.Stopped || !t || (this.A(t), this.Up())
                    }
                }
                get queueLength() {
                    return this.Et.length
                }
                start(t) {
                    if (this.A) throw new Error("callback already set");
                    this.Dt = Be.Started, this.A = t
                }
                push(t) {
                    this.Et.push(t), this.Dh()
                }
                stop() {
                    this.A = null, this.Dt = Be.Stopped, this.Et.clear()
                }
                static pipe(t, e) {
                    let i = t,
                        n = new csArray;
                    for (let c of e) {
                        let l = new s;
                        l.start(h => {
                            c.pushEvent(h)
                        }), csArray.prototype.push.call(n, l), J(i, h => h.subscribe(f => l.push(f))), i = [c]
                    }
                    let o = new Tm(n);
                    return J(i, c => c.subscribe(l => o.push(l))), o
                }
                jp() {
                    return this.Dt === Be.Stopped
                }
                ps() {
                    return this.Dt === Be.Processing
                }
                Up() {
                    if (!this.jp()) {
                        if (this.Et.isEmpty) {
                            this.Dt = Be.Completed;
                            return
                        }
                        this.Dt = Be.Processing, wm(() => {
                            let t = this.Et.pop();
                            t instanceof ho ? t.complete(this.Vp) : this.Vp(t)
                        })
                    }
                }
                Dh() {
                    this.jp() || this.ps() || this.Up()
                }
            }
            return s
        })(),
        Tm = (() => {
            class s extends rl {
                constructor(t) {
                    super(), this.Hp = t
                }
                get queueLength() {
                    return csArray.prototype.reduce.call(this.Hp, (t, e) => t + e.queueLength, 0)
                }
                stop() {
                    super.stop(), J(this.Hp, t => t.stop())
                }
            }
            return s
        })(),
        bm = (() => {
            class s {
                constructor(t, e = []) {
                    this.producers = t, this.processors = e, this.Y = !1, this.xt = []
                }
                get pendingEvents() {
                    var t, e;
                    return (e = (t = this.Et) === null || t === void 0 ? void 0 : t.queueLength) !== null && e !== void 0 ? e : 0
                }
                start() {
                    if (this.Y) throw new Error("Recording is already started.");
                    let t = this.xt;
                    this.Et = rl.pipe(this.producers, this.processors), this.Et.start(e => csArray.prototype.forEach.call(t, i => i(e))), J(this.producers, e => e.start()), J(this.processors, e => e.start()), this.Y = !0
                }
                stop() {
                    this.Et.stop(), this.xt.length = 0;
                    for (let t of this.producers) t.stop();
                    for (let t of this.processors) t.stop();
                    this.Y = !1, this.xt = []
                }
                subscribe(t) {
                    if (this.Y) throw new Error("Recording is already started.");
                    return csArray.prototype.push.call(this.xt, t), () => this.xt = csArray.prototype.filter.call(this.xt, e => e !== t)
                }
            }
            return s
        })(),
        Rm = 2,
        go = (() => {
            class s {
                constructor(t) {
                    this.Fw = t, this.La = 0
                }
                addString(t) {
                    this.La += t.length * Rm
                }
                addArrayBuffer(t) {
                    this.La += t.byteLength
                }
                isThresholdReached() {
                    return this.La > this.Fw
                }
                reset() {
                    this.La = 0
                }
            }
            return s
        })(),
        Cm = (() => {
            class s {
                constructor(t) {
                    this.xa = {}, this.Pe = new go(t)
                }
                save({
                    key: t,
                    metadata: e,
                    events: i
                }) {
                    this.Pe.isThresholdReached() || (this.Pe.addString(t), typeof i == "string" ? this.Pe.addString(i) : this.Pe.addArrayBuffer(i), !this.Pe.isThresholdReached() && (this.xa[t] = {
                        metadata: e,
                        events: i
                    }))
                }
                recover(t) {
                    let e = [];
                    csArray.prototype.forEach.call(this.Gw(), i => {
                        let n = this.xa[i];
                        n !== void 0 && (delete n.metadata.datatype, csArray.prototype.push.call(e, n), this.$w(i))
                    }), e.length !== 0 && (t(e), this.Pe.reset())
                }
                Gw() {
                    return Object.keys(this.xa)
                }
                $w(t) {
                    delete this.xa[t]
                }
            }
            return s
        })(),
        Fe = (() => {
            let s;
            return function(r) {
                r[r.NOT_STARTED = 0] = "NOT_STARTED", r[r.OPEN_IN_PROGRESS = 1] = "OPEN_IN_PROGRESS", r[r.OPEN_FAILED = 2] = "OPEN_FAILED", r[r.READY = 3] = "READY"
            }(s || (s = {})), s
        })(),
        Im = (() => {
            class s {
                constructor(t, e, i) {
                    this.Pr = t, this.zw = i, this.Vi = Fe.NOT_STARTED, this.Va = [], this.kh = 0, this.qw = self.origin, this.Oe = typeof window == "object" ? "" : "worker-", this.Pe = new go(e), this.Xl()
                }
                async Xl() {
                    await this.Bp(), this.Vi === Fe.READY ? this.Ww() : this.zw(this.Va)
                }
                Ww() {
                    csArray.prototype.forEach.call(this.Va, t => {
                        this.save(t)
                    }), this.Va = []
                }
                async save(t) {
                    try {
                        if (this.Vi === Fe.OPEN_IN_PROGRESS) {
                            csArray.prototype.push.call(this.Va, t);
                            return
                        }
                        if (this.Vi !== Fe.READY || this.Pe.isThresholdReached()) return;
                        let {
                            key: e,
                            metadata: i,
                            events: n
                        } = t;
                        if (this.Pe.addString(e), typeof n == "string" ? this.Pe.addString(n) : this.Pe.addArrayBuffer(n), this.Pe.isThresholdReached()) return;
                        await this.re.put(`${this.qw}/${e}`, new Response(n, {
                            headers: i
                        }))
                    } catch {}
                }
                async recover(t) {
                    !this.re && (await this.Bp(), this.Vi !== Fe.READY) || this.Yw(t)
                }
                async Bp() {
                    try {
                        this.Vi = Fe.OPEN_IN_PROGRESS, this.re = await self.caches.open(`${this.Oe}${this.Pr}`), this.Vi = Fe.READY
                    } catch {
                        this.Vi = Fe.OPEN_FAILED
                    }
                }
                async Yw(t) {
                    try {
                        if (this.kh++, this.kh > 1) return;
                        let e = await this.re.keys();
                        if (e.length === 0) return;
                        let i = await this.re.matchAll(),
                            n = csArray.prototype.map.call(i, c => {
                                let l = {};
                                c.headers.forEach((f, d) => {
                                    l[d] = f
                                }), delete l["content-type"];
                                let h = l.datatype;
                                return delete l.datatype, h === "json" || h === "base64" ? c.text().then(f => ({
                                    metadata: l,
                                    events: f
                                })) : c.arrayBuffer().then(f => ({
                                    metadata: l,
                                    events: f
                                }))
                            }),
                            o = await Promise.all(n);
                        await Promise.all(csArray.prototype.map.call(e, c => this.re.delete(c))), t(o), this.Pe.reset()
                    } catch {} finally {
                        this.kh--
                    }
                }
            }
            return s
        })(),
        Pm = (() => {
            class s {
                constructor(t) {
                    try {
                        this.Xw(t)
                    } catch {
                        this.Lh()
                    }
                }
                Xw(t) {
                    self.caches ? this.Kw(t) : this.Lh()
                }
                save(t) {
                    this.Ua.save(t)
                }
                recover(t) {
                    this.Ua.recover(t)
                }
                Kw(t) {
                    this.Ua = new Im(t, s.Fp, e => {
                        this.Lh(e)
                    })
                }
                Lh(t) {
                    this.Ua = new Cm(s.Fp), t && csArray.prototype.forEach.call(t, e => {
                        this.Ua.save(e)
                    })
                }
            }
            return s.Fp = 1024 * 1024 * 16, s
        })(),
        Tr = (() => {
            let s;
            return function(r) {
                r.UNCOMPRESSED = "0", r.GZIP = "2"
            }(s || (s = {})), s
        })(),
        nl = (() => {
            class s {}
            return s
        })(),
        ol = (() => {
            class s {
                constructor(t) {
                    this.Gp = [], this.$p = [], this.Xe = {}, this.ja = t
                }
                setQueryParams(t) {
                    csArray.prototype.forEach.call(Object.keys(t), e => {
                        this.Xe[e] = t[e]
                    })
                }
                removeQueryParams(t) {
                    t ? csArray.prototype.forEach.call(t, e => {
                        delete this.Xe[e]
                    }) : this.Xe = {}
                }
                onBeaconSuccess(t) {
                    csArray.prototype.push.call(this.Gp, t)
                }
                onBeaconFailure(t) {
                    csArray.prototype.push.call(this.$p, t)
                }
                send(t) {
                    let e = Ei.toQuery({ ...this.Xe,
                            ct: Tr.UNCOMPRESSED
                        }),
                        i = this.Jw(e, t);
                    return i ? csArray.prototype.forEach.call(this.Gp, n => n()) : csArray.prototype.forEach.call(this.$p, n => n(this.Xe)), i
                }
                Jw(t, e) {
                    try {
                        if (typeof csNavigatorsendBeacon != "function") return !1;
                        let i = csNavigatorsendBeacon(`${this.ja}?${t}`, e || "");
                        if (i) return i
                    } catch {}
                    return typeof navigator.sendBeacon != "function" ? !1 : navigator.sendBeacon(`${this.ja}?${t}`, e || "")
                }
            }
            return s
        })(),
        Om = (() => {
            class s {
                constructor(t, e) {
                    this.w = t, this.R = e, this.Wn = Yt.ETR_DISABLED, this.Ha = Yt.ETR_PENDING, this.xh = !0
                }
                getEtrStatus(t) {
                    t === void 0 && (t = this.R.getSession());
                    let e = t == null ? void 0 : t.etrStatus;
                    return this.zp() && e === Yt.ETR_SAVED_SESSION ? e : this.Wn
                }
                onEventTriggerRecording(t, e) {
                    switch (e) {
                        case Je.ETR_PAGE:
                            this.qp(Yt.ETR_SAVED_PAGE);
                            break;
                        case Je.ETR_LEGACY:
                        case Je.ETR_SESSION:
                            this.qp(Yt.ETR_SAVED_SESSION);
                            break
                    }
                }
                onCollectStateChange(t, e) {
                    t === N.RECORDING_TEMPORARILY ? this.xh = !0 : this.xh = !1, t === N.ANALYTICS_ONLY && e === Qt.ETR_ON ? this.Wp(this.Ha) : this.Wp(Yt.ETR_DISABLED)
                }
                Wp(t) {
                    this.Wn = t, this.Ha = Yt.ETR_PENDING, this.Yp(t), this.w.emitRecordingContextChange()
                }
                qp(t) {
                    this.xh ? Number(t) > Number(this.Ha) && (this.Ha = t) : this.zp() && Number(t) > Number(this.Wn) && (this.Wn = t, this.Yp(t), this.w.emitRecordingContextChange())
                }
                Yp(t) {
                    let e = this.R.getSession();
                    e !== null && e.etrStatus === Yt.ETR_NOT_SAVED_SESSION && t === Yt.ETR_SAVED_SESSION && (e.etrStatus = t, this.R.setSession(e))
                }
                zp() {
                    return this.Wn !== Yt.ETR_DISABLED
                }
            }
            return s
        })(),
        Nm = (() => {
            class s {
                constructor(t = 100) {
                    this.Qw = t, this.Ba = {}, this.Yn = null, this.ih = "original-resource-name"
                }
                onEvent(t) {
                    this.Zw = t
                }
                processEvent(t) {
                    this.tA(t.resourceId, t.resource.hash, t.originalResourceName), this.eA(t)
                }
                flushEvents() {
                    this.Yn && csClearTimeout(this.Yn), this.Xp()
                }
                onSendStaticResource(t) {
                    this.eA = t
                }
                Xp() {
                    if (!Object.keys(this.Ba).length) return;
                    let t = {
                        type: k.RESOURCE_HASHES,
                        date: M.now(),
                        args: [this.Ba]
                    };
                    this.Yn = null, this.Ba = {}, this.Zw(t)
                }
                tA(t, e, i) {
                    let n = e;
                    i && (n += `?${this.ih}=${i}`), this.Ba[t] = n, !this.Yn && (this.Yn = window.csSetTimeout(() => this.Xp(), this.Qw))
                }
            }
            return s
        })();

    function Mm(s, r, t) {
        let {
            timestamp: e
        } = s;
        switch (s.domEvent) {
            case "initialDOM":
                {
                    let {
                        initialDOM: i
                    } = s,
                    n = {
                        type: k.INITIAL_DOM,
                        date: e,
                        args: [i]
                    };t.emitInitialDomDone(n);
                    break
                }
            case "nodesAdded":
                {
                    csArray.prototype.forEach.call(s.nodes, i => {
                        r({
                            type: k.MUTATION_INSERT,
                            date: e,
                            args: [s.target, s.nextSibling, i]
                        })
                    });
                    break
                }
            case "nodesMoved":
                {
                    for (let i of s.nodesIds) r({
                        type: k.MUTATION_MOVE,
                        date: e,
                        args: [i, s.nextSibling, s.target]
                    });
                    break
                }
            case "nodesRemoved":
                {
                    csArray.prototype.forEach.call(s.nodesIds, i => {
                        r({
                            type: k.MUTATION_REMOVE,
                            date: e,
                            args: [i]
                        })
                    });
                    break
                }
            case "attributeChanged":
                {
                    let {
                        target: i,
                        namespace: n,
                        attribute: o,
                        newValue: c
                    } = s;r({
                        type: k.MUTATION_ATTRIBUTE,
                        date: e,
                        args: [i, n, o, c]
                    });
                    break
                }
            case "characterDataChanged":
                {
                    let {
                        target: i,
                        newValue: n
                    } = s;r({
                        type: k.MUTATION_CHARACTER_DATA,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "cssRuleInserted":
                {
                    let {
                        target: i,
                        rule: n,
                        index: o
                    } = s,
                    c = Z(o) ? [i, n, o] : [i, n];r({
                        type: k.STYLESHEET_RULE_INSERT,
                        date: e,
                        args: c
                    });
                    break
                }
            case "cssRuleDeleted":
                {
                    let {
                        target: i,
                        index: n
                    } = s;r({
                        type: k.STYLESHEET_RULE_DELETE,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "cssRuleUpdated":
                {
                    let {
                        target: i,
                        rule: n,
                        index: o
                    } = s;r({
                        type: k.STYLESHEET_RULE_UPDATE,
                        date: e,
                        args: [i, n, o]
                    });
                    break
                }
            case "cssStyleSheetDisabled":
                {
                    let {
                        target: i,
                        disabled: n
                    } = s;r({
                        type: k.STYLESHEET_DISABLED,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "shadowRootAttached":
                {
                    let {
                        target: i,
                        shadowRoot: n
                    } = s;r({
                        type: k.ATTACH_SHADOW,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "adoptedStyleSheetRegistered":
                {
                    let {
                        sheetId: i,
                        cssRules: n,
                        disabled: o
                    } = s;r({
                        type: k.REGISTER_ADOPTED_STYLE_SHEET,
                        date: e,
                        args: [i, {
                            cssRules: n,
                            disabled: o
                        }]
                    });
                    break
                }
            case "adoptedStyleSheetsSet":
                {
                    let {
                        target: i,
                        sheetsIds: n
                    } = s;r({
                        type: k.SET_ADOPTED_STYLE_SHEETS,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "adoptedStyleSheetRuleInserted":
                {
                    let {
                        sheetId: i,
                        rule: n,
                        index: o
                    } = s,
                    c = Z(o) ? [i, n, o] : [i, n];r({
                        type: k.ADOPTED_STYLESHEET_RULE_INSERT,
                        date: e,
                        args: c
                    });
                    break
                }
            case "adoptedStyleSheetRuleDeleted":
                {
                    let {
                        sheetId: i,
                        index: n
                    } = s;r({
                        type: k.ADOPTED_STYLESHEET_RULE_DELETE,
                        date: e,
                        args: [i, n]
                    });
                    break
                }
            case "adoptedStyleSheetRuleUpdated":
                {
                    let {
                        sheetId: i,
                        rule: n,
                        index: o
                    } = s,
                    c = [i, n, o];r({
                        type: k.ADOPTED_STYLESHEET_RULE_UPDATE,
                        date: e,
                        args: c
                    });
                    break
                }
            case "adoptedStyleSheetDisabled":
                {
                    let {
                        sheetId: i,
                        disabled: n
                    } = s,
                    o = [i, n];r({
                        type: k.ADOPTED_STYLESHEET_DISABLED,
                        date: e,
                        args: o
                    });
                    break
                }
            default:
                F.error("translateDOMEvent: DOMEvent not supported");
                break
        }
    }

    function Dm(s) {
        let r = km(s.data);
        return {
            type: k.GESTURE_RECOGNITION,
            args: [s.targetId, r],
            date: s.timestamp
        }
    }

    function km(s) {
        let r = {
            type: Lm(s.type)
        };
        for (let t in s) {
            let e = s[t];
            e !== void 0 && t !== "type" && (r[t] = e)
        }
        return r
    }

    function Lm(s) {
        switch (s) {
            case yt.DRAG:
            case yt.FLICK:
                return si.SWIPE;
            case yt.LONG_PRESS:
                return si.LONG_PRESS;
            case yt.TAP:
                return si.TAP;
            case yt.PINCH_IN:
                return si.PINCH_IN;
            case yt.PINCH_OUT:
                return si.PINCH_OUT
        }
    }

    function xm(s) {
        switch (s.inputType) {
            case "text":
                return {
                    type: k.INPUT_TEXT,
                    args: [s.target, s.value],
                    date: s.timestamp
                };
            case "select":
                return {
                    type: k.INPUT_SELECT,
                    args: [s.target, s.selectedIndex],
                    date: s.timestamp
                };
            case "checkable":
                return {
                    type: k.INPUT_CHECKABLE,
                    args: [s.target, s.checked],
                    date: s.timestamp
                }
        }
    }
    var sn = (() => {
        let s;
        return function(r) {
            r.REQUEST_START = "requestStart", r.DOM_INTERACTIVE = "domInteractive", r.TIME_ORIGIN = "timeOrigin"
        }(s || (s = {})), s
    })();

    function Vm(s) {
        return {
            type: k.PERFORMANCE_TIMINGS,
            args: [{
                performanceTiming: sn.REQUEST_START,
                timestamp: s.timings.requestStart
            }, {
                performanceTiming: sn.DOM_INTERACTIVE,
                timestamp: s.timings.domInteractive
            }, {
                performanceTiming: sn.TIME_ORIGIN,
                timestamp: s.timings.timeOrigin
            }],
            date: s.timestamp
        }
    }
    var Um = 500,
        rn = 0;

    function jm() {
        return {
            processEvent(s, r) {
                if (s.originalEvent.type === k.PERFORMANCE_RESOURCE_TIMING) return rn >= Um ? null : (rn += 1, r({ ...s.originalEvent,
                    date: s.timestamp
                }));
                r(s.originalEvent)
            },
            reset() {
                rn = 0
            }
        }
    }

    function Hm(s, r) {
        let t = [],
            e = !1;
        return {
            push(i) {
                if (csArray.prototype.push.call(t, i), t.length === r.batchSize) {
                    this.flush();
                    return
                }
                r.autoFlushDelay && r.autoFlushDelay > 0 && !e && (e = !0, csSetTimeout(() => {
                    e = !1, t.length > 0 && this.flush()
                }, r.autoFlushDelay))
            },
            flush() {
                if (!t.length) return;
                let i = t;
                t = [], s(i)
            }
        }
    }
    var Bm = 20;

    function Fm(s) {
        return Hm(r => {
            let t = {
                    visibleInViewPort: r
                },
                e = {
                    type: k.TEXT_VISIBILITY,
                    date: M.now(),
                    args: [t]
                };
            s(e)
        }, {
            batchSize: Bm,
            autoFlushDelay: 1e3
        })
    }

    function Gm(s) {
        switch (s.videoEventType) {
            case "play":
                return {
                    type: k.VIDEO_PLAY,
                    args: [s.nodeId],
                    date: s.timestamp
                };
            case "pause":
                return {
                    type: k.VIDEO_PAUSE,
                    args: [s.nodeId],
                    date: s.timestamp
                };
            case "seeked":
                {
                    let r = s;
                    return {
                        type: k.VIDEO_SEEK,
                        args: [r.nodeId, r.newTimePositionInSec],
                        date: s.timestamp
                    }
                }
            default:
                return null
        }
    }
    var $m = (() => {
        class s {
            get pendingEvents() {
                return this.Fa.pendingEvents
            }
            constructor(t, e, i, n, o) {
                this.Fa = t, this.w = e, this.Ne = i, this.gs = n, this.Ds = o, this.Qt = () => {}, this.Ga = () => {}, this.Kp = Fm(c => this.Qt(c))
            }
            start() {
                var t, e;
                this.Jp = jm(), this.Fa.subscribe(i => {
                    var n, o, c, l, h, f;
                    let d = i,
                        {
                            timestamp: m
                        } = d;
                    switch (d.type) {
                        case "Legacy":
                            {
                                let E = d.eventType === "user" ? (n = this.Ga) !== null && n !== void 0 ? n : () => {} : this.Qt;this.Jp.processEvent(d, E)
                            }
                            break;
                        case "CustomElementRegistration":
                            {
                                this.Qt({
                                    type: k.CUSTOM_ELEMENT_REGISTRATION,
                                    date: m,
                                    args: [d.tagName]
                                });
                                break
                            }
                        case "DomEvent":
                            {
                                Mm(d, this.Qt, this.w);
                                break
                            }
                        case "InputEvent":
                            {
                                let E = xm(d);
                                (o = this.Ga) === null || o === void 0 || o.call(this, E);
                                break
                            }
                        case "encryptedCharacterDataChanged":
                            {
                                let {
                                    target: E,
                                    rawData: v,
                                    encryptedData: C,
                                    encryptionMetadata: P
                                } = d;this.Qt({
                                    type: k.MUTATION_ENCRYPTED_CHARACTER_DATA,
                                    date: m,
                                    args: [E, v, C, P]
                                });
                                break
                            }
                        case "StaticResource":
                            {
                                let {
                                    url: E
                                } = d;this.Qt({
                                    type: k.STATIC_RESOURCE_URL,
                                    date: m,
                                    args: [E]
                                });
                                break
                            }
                        case "ResizeMaskedElement":
                            {
                                let {
                                    target: E,
                                    width: v,
                                    height: C
                                } = d;this.Qt({
                                    type: k.MUTATION_ATTRIBUTE,
                                    date: m,
                                    args: [E, "", "style", `width:${v}px !important;height:${C}px !important;`]
                                });
                                break
                            }
                        case "Gesture":
                            {
                                let E = Dm(i);
                                (c = this.Ga) === null || c === void 0 || c.call(this, E);
                                break
                            }
                        case "TextVisibility":
                            {
                                this.Kp.push(d.text);
                                break
                            }
                        case "StaticResourceManagerEvent":
                            {
                                (l = this.Ne) === null || l === void 0 || l.processEvent(d);
                                break
                            }
                        case "screenResize":
                            {
                                let {
                                    width: E,
                                    height: v
                                } = d,
                                C = {
                                    type: k.SCREEN_RESIZE,
                                    date: m,
                                    args: [E, v]
                                };this.Qt(C);
                                break
                            }
                        case "viewportResize":
                            {
                                let {
                                    width: E,
                                    height: v
                                } = d,
                                C = {
                                    type: k.RESIZE,
                                    date: m,
                                    args: [E, v]
                                };this.Qt(C);
                                break
                            }
                        case "PerformanceTiming":
                            {
                                this.Qt(Vm(d));
                                break
                            }
                        case "CustomError":
                            {
                                let E = (h = this.Ds) === null || h === void 0 ? void 0 : h.translate(d);E && this.Qt(E);
                                break
                            }
                        case "JSError":
                            {
                                let E = (f = this.gs) === null || f === void 0 ? void 0 : f.translate(d);E && this.Qt(E);
                                break
                            }
                        case "VideoEvent":
                            {
                                let E = Gm(d);E && this.Qt(E);
                                break
                            }
                        case "DOM_INITIAL_STATE":
                            {
                                let E = {
                                    type: k.DOM_INITIAL_STATE,
                                    date: m,
                                    args: [d.state]
                                };this.w.emitInitialDomDone(E);
                                break
                            }
                        case "DOM_PATCH":
                            {
                                let E = {
                                    type: k.DOM_PATCH_STATE,
                                    date: m,
                                    args: [d.diff]
                                };this.Qt(E);
                                break
                            }
                        case "warning":
                            {
                                F.warn(d.message);
                                break
                            }
                        default:
                            F.error(`WebRecorderEventTranslator: Event not supported (${d.type})`);
                            break
                    }
                }), this.w.emitInitialDomStart(), (t = this.gs) === null || t === void 0 || t.start(), (e = this.Ds) === null || e === void 0 || e.start(), this.Fa.start()
            }
            stop() {
                var t, e, i;
                this.reset(), this.flush(), this.Fa.stop(), (t = this.Ne) === null || t === void 0 || t.flushEvents(), (e = this.gs) === null || e === void 0 || e.stop(), (i = this.Ds) === null || i === void 0 || i.stop()
            }
            flush() {
                this.Kp.flush()
            }
            onEvent(t, e) {
                var i;
                this.Qt = t, this.Ga = e, (i = this.Ne) === null || i === void 0 || i.onEvent(n => this.Qt(n))
            }
            reset() {
                this.Jp.reset()
            }
        }
        return s
    })();
    var zm = (() => {
            class s {
                constructor(t) {
                    this.$a = t, this.Xn = 20, this.ji = 0, this.U = !1
                }
                translate(t) {
                    if (this.ji >= this.Xn) return this.$a.stop(), null;
                    this.ji += 1;
                    let {
                        filename: e,
                        message: i,
                        lineno: n,
                        colno: o,
                        timestamp: c
                    } = t;
                    return {
                        type: k.JAVASCRIPT_ERROR,
                        date: c,
                        args: [{
                            errorType: "jsError",
                            message: i,
                            filename: e,
                            lineno: n,
                            colno: o
                        }]
                    }
                }
                start() {
                    this.U || (this.ji = 0, this.U = !0)
                }
                stop() {
                    this.U = !1
                }
            }
            return s
        })(),
        qm = (() => {
            class s extends fe {
                constructor(t) {
                    super(), this.je = t
                }
                subscribe(t) {
                    return super.subscribe(t)
                }
                onStart() {
                    J(this.je, t => {
                        t.onEvent(e => {
                            var i;
                            return this.Or(e, (i = t.eventType) !== null && i !== void 0 ? i : "browser")
                        })
                    }), J(this.je, t => {
                        var e;
                        (e = t.start) === null || e === void 0 || e.call(t)
                    })
                }
                onStop() {
                    J(this.je, t => {
                        var e;
                        return (e = t.stop) === null || e === void 0 ? void 0 : e.call(t)
                    })
                }
                Or(t, e) {
                    this.produceEvent({
                        timestamp: M.now(),
                        type: "Legacy",
                        originalEvent: t,
                        eventType: e
                    })
                }
            }
            return s
        })(),
        al = (() => {
            class s {
                emit(t, e, i, n = document) {
                    let c = `${i!==void 0?`${i}`:`${s.sA}`}${t}`,
                        l = s.createEvent(c, {
                            detail: e
                        });
                    l !== null && n.dispatchEvent(l)
                }
                static createEvent(t, e = {}) {
                    if (typeof CustomEvent == "function") return new CustomEvent(t, e);
                    let i = this.iA();
                    if (i === null) return null;
                    let {
                        bubbles: n = !1,
                        cancelable: o = !1,
                        detail: c
                    } = e;
                    return i.initCustomEvent(t, n, o, c), i
                }
                static iA() {
                    try {
                        return document.createEvent("CustomEvent")
                    } catch {
                        return null
                    }
                }
            }
            return s.sA = "cs.tracking.", s
        })(),
        Kt = (() => {
            let s;
            return function(r) {
                r.Visible = "visible", r.Hidden = "hidden", r.Blur = "blur", r.PagehideVisible = "pagehideVisible", r.PagehideHidden = "pagehideHidden", r.ExitPageByNavigate = "exitPageByNavigate"
            }(s || (s = {})), s
        })(),
        cl = (() => {
            class s {
                constructor() {
                    this.U = !1, this.gi = t => {
                        try {
                            switch (t.type) {
                                case "visibilitychange":
                                    return document.visibilityState === "hidden" ? this.ne(Kt.Hidden) : this.ne(Kt.Visible);
                                case "pagehide":
                                    return document.visibilityState === "hidden" ? this.ne(Kt.PagehideHidden) : this.ne(Kt.PagehideVisible);
                                case "blur":
                                    return this.ne(Kt.Blur);
                                case "navigate":
                                    return this.rA(t) ? this.ne(Kt.ExitPageByNavigate) : void 0;
                                default:
                                    return
                            }
                        } catch {}
                    }
                }
                start() {
                    this.U || (this.U = !0, this.Vh(), this.nA(), this.oA(), Fo() && this.aA())
                }
                stop() {
                    this.U && (this.U = !1, this.Uh(), this.cA(), this.lA(), Fo() && this.hA())
                }
                onEvent(t) {
                    this.ne = t
                }
                aA() {
                    window.navigation.addEventListener("navigate", this.gi)
                }
                hA() {
                    window.navigation.removeEventListener("navigate", this.gi)
                }
                Vh() {
                    document.addEventListener("visibilitychange", this.gi)
                }
                Uh() {
                    document.removeEventListener("visibilitychange", this.gi)
                }
                nA() {
                    window.addEventListener("pagehide", this.gi)
                }
                cA() {
                    window.removeEventListener("pagehide", this.gi)
                }
                oA() {
                    window.addEventListener("blur", this.gi)
                }
                lA() {
                    window.removeEventListener("blur", this.gi)
                }
                rA(t) {
                    return t instanceof NavigateEvent ? !t.hashChange && !t.downloadRequest && !t.formData : !1
                }
            }
            return s
        })(),
        Rt = (() => {
            let s;
            return function(r) {
                r[r.Active = 0] = "Active", r[r.Paused = 1] = "Paused", r[r.Stopped = 2] = "Stopped"
            }(s || (s = {})), s
        })(),
        Wm = (() => {
            class s {
                constructor(t, e, i = []) {
                    this.Or = t, this.jh = e, this.uA = i, this.za = null, this.Dt = Rt.Active, this.ot = []
                }
                reset() {
                    this.za = null, this.ot = [], this.Dt = Rt.Active
                }
                disconnect() {
                    this.Dt = Rt.Stopped
                }
                dA() {
                    this.jh(Rt.Paused), this.Dt = Rt.Paused, csSetTimeout(() => {
                        this.Dt === Rt.Paused && this.Hh()
                    }, s.STOP_TIMEOUT)
                }
                fA() {
                    this.jh(Rt.Active), this.Dt = Rt.Active, J(this.ot, this.Or), this.ot = []
                }
                Hh() {
                    this.ot = [], this.jh(Rt.Stopped), this.Dt = Rt.Stopped
                }
                pushEvent(t, e) {
                    if (e.isUserEvent && (this.za = t.date, this.Dt !== Rt.Active)) {
                        this.fA(), this.Or(t);
                        return
                    }
                    if (this.pA(t)) {
                        this.Or(t);
                        return
                    }
                    switch (this.Dt) {
                        case Rt.Active:
                            if (this.gA(t, e)) {
                                this.dA(), csArray.prototype.push.call(this.ot, t);
                                return
                            }
                            this.Or(t);
                            break;
                        case Rt.Paused:
                            csArray.prototype.push.call(this.ot, t);
                            break;
                        case Rt.Stopped:
                            break
                    }
                }
                gA(t, e) {
                    return !e.isUserEvent && this.za !== null && t.date - this.za > s.INACTIVITY_TIMEOUT
                }
                pA(t) {
                    return csArray.prototype.indexOf.call(this.uA, t.type) > -1
                }
            }
            return s.INACTIVITY_TIMEOUT = 5e3, s.STOP_TIMEOUT = 5e3, s
        })(),
        Ym = 2e3,
        Xm = (() => {
            class s extends kt {
                constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C = [], P, S, w, I, O) {
                    super(), this.E = t, this.G = e, this.mA = i, this.F = n, this.R = o, this.Ee = c, this.St = l, this.He = h, this.ht = f, this.X = d, this.Vt = m, this.Ot = E, this.Be = v, this.je = C, this.Qp = P, this.Zt = S, this.Kn = w, this.gs = I, this.Ds = O, this.mi = 0, this.yi = new al, this.Nr = {
                        allowFromQuotaService: !0,
                        allowFromSerialization: !0
                    }, this.Zp = _r(() => {
                        this.G.eventsCount() > 0 && this.tg()
                    }, Ym), this.ks = T => this.processBrowserEvent(T), this.Jn = T => this.Ut(T), this.qa = 0, this.Qn = 0, this.Ke = new cl, this.Bh = !1, this.eg = 50 * 1024, this.Hi = !1, this.Zn = !1, this.Di = [], this.Wa = new Wm(T => this.Z(T), T => {
                        switch (T) {
                            case Rt.Active:
                                this.yA();
                                break;
                            case Rt.Stopped:
                                this.EA();
                                break
                        }
                    }, [k.RESOURCE_HASHES, k.TEXT_VISIBILITY, k.API_ERROR, k.JAVASCRIPT_ERROR]), this.sg = T => {
                        this.Vt.removeBatchInProgress(`${T.params.sn}.${T.params.pn}.${T.params.ri}`)
                    }
                }
                init() {
                    this.Fh(), this.X.onLoad(this.sg), this.X.onError(this.sg)
                }
                yA() {
                    csArray.prototype.forEach.call(this.Qp, t => t.start())
                }
                EA() {
                    csArray.prototype.forEach.call(this.Qp, t => t.stopForInactivity())
                }
                Fh() {
                    var t, e, i;
                    this.Be.onEvent(this.ks, this.Jn), (t = this.ht) === null || t === void 0 || t.onInputNodeToEncrypt(this.Jn), (e = this.ht) === null || e === void 0 || e.onApiErrorToEncrypt(n => {
                        this.ig(n)
                    }), (i = this.ht) === null || i === void 0 || i.onUserIdentifierToEncrypt(this.ks), this.Ke.onEvent(n => {
                        if (csSetTimeout(() => this.Bi("page-state", n)), n !== Kt.Visible) {
                            if (n === Kt.Blur) return this.rg();
                            if (!this.Bh) return this.Bh = !0, csSetTimeout(() => {
                                this.Bh = !1
                            }), n === Kt.Hidden ? this.rg() : this.SA()
                        }
                    })
                }
                isRecording() {
                    return this.R.hasValidSession() && this.isStarted
                }
                rg() {
                    if (!this.canSendEvents()) return;
                    this.Be.flush(), this.Vt.saveBatchesInProgress(), J(this.je, c => {
                        var l, h;
                        return J((h = (l = c.getPendingEvents) === null || l === void 0 ? void 0 : l.call(c)) !== null && h !== void 0 ? h : [], f => this.G.addEvent(f))
                    });
                    let t = this.G.getEvents();
                    if (t.length === 0) return;
                    this.Bi("pending-events", this.Be.pendingEvents);
                    let e = this.X.getQueryParams();
                    e.rst = this.getRecordingStartTimestamp(), this.Qn = t[t.length - 1].date, e.let = this.getRecordingLastEventTimestamp();
                    let i = this.G.getCurrentRequestIndex(),
                        n = i.getCurrentIndex();
                    e.ri = n.toString(), this.Ot.removeQueryParams(), this.Ot.setQueryParams(e);
                    let o = this.G.stringifyEvents();
                    if (o.length > this.eg) {
                        let c = this.ng();
                        if (c.length > 0) {
                            let l = vs(c);
                            this.Ot.send(l) || this.Vt.save({
                                key: `${e.sn}.${e.pn}.${e.ri}.last`,
                                metadata: { ...e,
                                    datatype: "json"
                                },
                                events: l
                            }), i.increment()
                        }
                        if (this.G.eventsCount() > 0) {
                            e.ri = i.getCurrentIndex().toString();
                            let l = this.G.stringifyEvents();
                            this.Vt.save({
                                key: `${e.sn}.${e.pn}.${e.ri}.last`,
                                metadata: { ...e,
                                    datatype: "json"
                                },
                                events: l
                            }), i.increment()
                        }
                    } else this.Ot.send(o) || this.Vt.save({
                        key: `${e.sn}.${e.pn}.${e.ri}.last`,
                        metadata: { ...e,
                            datatype: "json"
                        },
                        events: o
                    }), i.increment();
                    this.Ot.removeQueryParams(), this.G.clearEvents()
                }
                SA() {
                    if (!this.canSendEvents()) return;
                    this.Be.flush();
                    let t = this.X.getQueryParams();
                    this.Vt.saveBatchesInProgress(), t.rst = this.getRecordingStartTimestamp(), delete t.ri, t.hlm = "true", this.Ot.removeQueryParams(), J(this.je, n => {
                        var o, c;
                        return J((c = (o = n.getPendingEvents) === null || o === void 0 ? void 0 : o.call(n)) !== null && c !== void 0 ? c : [], l => this.G.addEvent(l))
                    });
                    let e = this.G.getEvents();
                    if (e.length === 0) {
                        delete t.let, delete t.rst, this.Ot.setQueryParams(t), this.Ot.send(), this.Ot.removeQueryParams();
                        return
                    }
                    this.Bi("pending-events", this.Be.pendingEvents), this.Qn = e[e.length - 1].date, t.let = this.getRecordingLastEventTimestamp(), this.Ot.setQueryParams(t);
                    let i = this.G.stringifyEvents();
                    if (i.length > this.eg) {
                        let n = this.ng();
                        if (n.length > 0) {
                            let o = vs(n);
                            this.Ot.send(o) || this.Vt.save({
                                key: `${t.sn}.${t.pn}.last`,
                                metadata: { ...t,
                                    datatype: "json"
                                },
                                events: o
                            })
                        } else delete t.let, delete t.rst, delete t.ri, this.Ot.removeQueryParams(), this.Ot.setQueryParams(t), this.Ot.send(), this.Ot.removeQueryParams();
                        if (this.G.eventsCount() > 0) {
                            t.rst = this.getRecordingStartTimestamp(), t.let = this.getRecordingLastEventTimestamp();
                            let o = this.G.getCurrentRequestIndex(),
                                c = o.getCurrentIndex();
                            t.ri = c.toString();
                            let l = this.G.stringifyEvents();
                            this.Vt.save({
                                key: `${t.sn}.${t.pn}.${t.ri}.last`,
                                metadata: { ...t,
                                    datatype: "json"
                                },
                                events: l
                            }), o.increment()
                        }
                    } else this.Ot.send(i) || (this.Vt.save({
                        key: `${t.sn}.${t.pn}.${t.ri}.last`,
                        metadata: { ...t,
                            datatype: "json"
                        },
                        events: i
                    }), this.G.getCurrentRequestIndex().increment());
                    this.Ot.removeQueryParams(), this.G.clearEvents()
                }
                blockSendingEventsFromQuotaService() {
                    this.Nr.allowFromQuotaService = !1
                }
                allowSendingEventsFromQuotaService() {
                    this.Nr.allowFromQuotaService = !0
                }
                blockSendingEventsFromSerialization() {
                    this.Nr.allowFromSerialization = !1
                }
                allowSendingEventsFromSerialization() {
                    this.Nr.allowFromSerialization = !0
                }
                canSendEvents() {
                    return this.Nr.allowFromQuotaService && this.Nr.allowFromSerialization
                }
                onIframeJavascriptError(t) {
                    var e;
                    if (this.Ee && this.gs) {
                        (e = this.Ee) === null || e === void 0 || e.anonymize(t);
                        let i = this.gs.translate({
                            message: t.message,
                            colno: t.colno,
                            lineno: t.lineno,
                            filename: t.filename,
                            timestamp: M.now(),
                            type: "JSError"
                        });
                        i && this.ks(i)
                    }
                }
                onIframeCustomError(t) {
                    if (this.Ds) {
                        let e = this.Ds.translate({ ...t,
                            timestamp: M.now(),
                            type: "CustomError"
                        });
                        e && this.ks(e)
                    }
                }
                onIframeDetailedApiError(t) {
                    this.og(t)
                }
                onIframeRecordingUserEvent(t) {
                    for (let e of t) this.Ut(e)
                }
                onIframeRecordingBrowserEvent(t) {
                    if (this.isStarted)
                        for (let e of t) this.processBrowserEvent(e)
                }
                processBrowserEvent(t) {
                    this.F.isCurrentPageviewValid() && this.Wa.pushEvent(t, {
                        isUserEvent: !1
                    })
                }
                Ut(t) {
                    this.F.refreshSession(), this.F.isSessionValid() && this.Wa.pushEvent(t, {
                        isUserEvent: !0
                    })
                }
                Z(t) {
                    Ut.general.nbEvents.increase(), this.G.addEvent(t), this.G.isThresholdReached() ? this.pushEvents() : this.G.isFull() && this.Zp(), this.ag(t)
                }
                ag(t) {
                    this.E.emitDebugEvents && this.yi.emit("recordingEvent", { ...t,
                        typeName: k[t.type]
                    })
                }
                onStart() {
                    var t;
                    this.Bi("tag-version", "15.154.4"), this.Bi("page-state", document.visibilityState), this.Wa.reset(), this.Ke.start(), this.initStates(), this.Be.start(), this.St && this.He && this.St.subscribe(s.jt, e => this.og(e), {
                        detailedEvent: !0
                    }), this.E.emitDebugEvents && this.yi.emit("replayRecordingStarted"), csArray.prototype.forEach.call(this.Di, e => this.cg(e)), this.Di = [], this.Hi && ((t = this.Zt) === null || t === void 0 || t.enableOnlineAssets(), this.Hi = !1)
                }
                onStop() {
                    var t;
                    this.Ke.stop(), this.St && this.St.unsubscribe(s.jt), this.Be.stop(), this.Wa.disconnect(), (t = this.Zt) === null || t === void 0 || t.disableOnlineAssets()
                }
                clearStates() {
                    this.Be.flush(), this.Zp.cancel(), this.pushEvents(), this.X.removeQueryParams()
                }
                initStates() {
                    this.qa = M.now(), this.G.getCurrentRequestIndex().reset(), this.mi = 0, this.X.setQueryParams(this.mA.getRequestParameters())
                }
                pushEvents() {
                    J(this.je, t => {
                        var e;
                        return (e = t.flushEvents) === null || e === void 0 ? void 0 : e.call(t)
                    }), this.G.eventsCount() > 0 && (this.isStarted ? this.tg() : this.G.clearEvents())
                }
                tg() {
                    if (!this.canSendEvents()) return;
                    let t = this.G.getOrderedBatchSlots();
                    for (let e of t) {
                        let i = e.batch.getEvents();
                        if (!i.length) continue;
                        this.Qn = i[i.length - 1].date;
                        let n = e.metadata.requestIndex,
                            o = n.getCurrentIndex(),
                            c = this.qa > this.Qn ? i[0].date : this.qa;
                        this.X.setQueryParams({
                            pn: csString(e.metadata.pageNumber),
                            ri: o.toString(),
                            rst: c.toString(),
                            let: this.getRecordingLastEventTimestamp()
                        });
                        let l = this.X.getQueryParams();
                        this.Vt.addBatchInProgress(`${l.sn}.${l.pn}.${o}`, { ...this.X.getQueryParams()
                        }, i), this.X.send(i), n.increment(), e.batch.clearEvents(), this.lg && this.lg()
                    }
                    this.G.clearEmptyBatchSlots()
                }
                addInitialDom(t) {
                    this.G.addEventByTimestamp(t), this.ag(t)
                }
                og(t) {
                    if (this.Kn && (t.plainCustomRequestHeaders || t.plainCustomResponseHeaders || t.requestBodyAttributes || t.responseBodyAttributes || t.customRequestHeaders || t.customResponseHeaders || t.queryParameters || t.requestBody || t.responseBody)) {
                        if (this.Kn.truncate(t), this.ht) {
                            this.ht.registerApiErrorToEncrypt(t);
                            return
                        }
                        t.customRequestHeaders = "", t.customResponseHeaders = "", t.requestBodyAttributes = "", t.responseBodyAttributes = "", t.queryParameters = "", t.requestBody = "", t.responseBody = ""
                    }
                    this.ig(t)
                }
                ig(t) {
                    if (this.mi < s.vA) {
                        let e = {
                            type: k.API_ERROR,
                            date: M.now(),
                            args: [this.He.anonymize(t)]
                        };
                        this.ks(e), this.mi = this.mi + 1, $.counters.networkRequests.count("collected")
                    }
                }
                _A(t) {
                    t === Je.ETR_SESSION ? this.X.setQueryParams({
                        [s.wA]: s.hg
                    }) : t === Je.ETR_PAGE && this.X.setQueryParams({
                        [s.AA]: s.hg
                    })
                }
                clearEvents() {
                    this.G.clearEvents()
                }
                onCustomJavaScriptErrorEvent(t) {
                    var e;
                    let i = (e = this.gs) === null || e === void 0 ? void 0 : e.translate({
                        type: "JSError",
                        timestamp: M.now(),
                        message: t.message,
                        colno: t.colno,
                        lineno: t.lineno,
                        filename: t.filename
                    });
                    i && this.ks(i)
                }
                onCustomErrorEvent(t) {
                    var e;
                    let i = (e = this.Ds) === null || e === void 0 ? void 0 : e.translate({
                        type: "CustomError",
                        timestamp: M.now(),
                        message: t.message,
                        attributes: t.attributes
                    });
                    i && this.ks(i)
                }
                onPageEvent(t) {
                    this.ug(t)
                }
                onUserIdentifierEvent(t) {
                    var e;
                    let i = {
                        userIdentifier: t,
                        date: M.now(),
                        keyId: this.E.encryptionPublicKeyId
                    };
                    (e = this.ht) === null || e === void 0 || e.registerUserIdentifierToEncrypt(i)
                }
                onEventTriggerRecording(t, e) {
                    this.isStarted ? this.cg({
                        eventName: t,
                        eventType: e
                    }) : csArray.prototype.push.call(this.Di, {
                        eventName: t,
                        eventType: e
                    })
                }
                cg(t) {
                    this._A(t.eventType), this.ug(t.eventName), this.pushEvents()
                }
                ug(t) {
                    let e = {
                        type: k.PAGE_EVENT,
                        date: M.now(),
                        args: [{
                            eventName: csString.prototype.slice.call(t, 0, s.TA)
                        }]
                    };
                    this.G.addEvent(e)
                }
                triggerUnanonymizationConsentGranted() {
                    let t = {
                        date: M.now(),
                        type: k.UNANONYMIZED_CONSENT_GRANTED
                    };
                    this.G.addEvent(t)
                }
                triggerUnanonymizationConsentWithdrawn() {
                    let t = {
                        date: M.now(),
                        type: k.UNANONYMIZED_CONSENT_WITHDRAWN
                    };
                    this.G.addEvent(t)
                }
                triggerRecordingForSessionGranted() {
                    this.Bi("consent-granted")
                }
                triggerRecordingForSessionWithdrawn() {
                    this.Bi("consent-withdrawn")
                }
                activateOnlineAssetsOnNextPageview() {
                    this.Zn = !0
                }
                getStaticResourceManagerStatus() {
                    return this.Zt ? {
                        isStarted: this.E.useStaticResourceManager && Nn.isSupported(),
                        onlineAssets: {
                            activated: this.Zt.isOnlineAssetsActivated(),
                            enabledOnNextPageview: this.Zn
                        }
                    } : null
                }
                resetOnlineAssetsOnPageview() {
                    this.Hi = !1, this.Zn = !1
                }
                updateOnlineAssetsOnPageview() {
                    this.Zt && this.Zn && (this.Hi = !0, this.Zn = !1)
                }
                onRecordingRequestSent(t) {
                    this.lg = t
                }
                getRecordingStartTimestamp() {
                    return this.qa.toString()
                }
                getRecordingLastEventTimestamp() {
                    return this.Qn.toString()
                }
                onOptOut() {
                    J(this.je, t => {
                        var e;
                        return (e = t.releaseResources) === null || e === void 0 ? void 0 : e.call(t)
                    })
                }
                Bi(t, e) {
                    if (!this.E.emitRecordInfoEvents) return;
                    let i = {
                        date: M.now(),
                        type: k.RECORDING_INFO_EVENT,
                        args: e == null ? [t] : [t, e]
                    };
                    this.G.addEvent(i)
                }
                ng() {
                    return this.G.extractEvents(k.API_ERROR, k.JAVASCRIPT_ERROR, k.CUSTOM_ERROR, k.TEXT_VISIBILITY, k.POINTER_DOWN)
                }
            }
            return s.jt = "RecordingService", s.TA = 255, s.vA = 20, s.AA = "etrp", s.wA = "etrs", s.hg = "1", B([Dt("addInitialDom")], s.prototype, "addInitialDom", null), s
        })(),
        Km = (() => {
            class s extends kt {
                constructor(t, e, i) {
                    super(), this.oe = t, this.Ot = e, this.X = i, this.Gh = !1, this.to = {}, this.bA = n => {
                        if (n.length !== 0)
                            for (let o of n) {
                                let {
                                    metadata: c,
                                    events: l
                                } = o;
                                this.RA(c.rt) && this.X.send(l, c)
                            }
                    }, window.addEventListener("focus", () => {
                        this.recover()
                    })
                }
                onStart() {
                    this.to = {}
                }
                onStop() {}
                recover() {
                    this.oe.recover(this.bA)
                }
                addBatchInProgress(t, e, i) {
                    this.to[t] = {
                        metadata: { ...e
                        },
                        events: i
                    }
                }
                removeBatchInProgress(t) {
                    delete this.to[t]
                }
                blockSendingLastMessage() {
                    this.Gh = !1
                }
                allowSendingLastMessage() {
                    this.Gh = !0
                }
                sendLastMessageBeacon() {
                    if (this.Gh) {
                        let {
                            ri: t,
                            rst: e,
                            let: i,
                            ...n
                        } = this.X.getQueryParams();
                        n.hlm = "true", this.Ot.setQueryParams(n), this.Ot.send()
                    }
                }
                RA(t) {
                    return !!t && csString.prototype.indexOf.call(t, N.RECORDING_TEMPORARILY) === -1
                }
                saveBatchesInProgress() {
                    csArray.prototype.forEach.call(Object.keys(this.to), t => {
                        let {
                            metadata: e,
                            events: i
                        } = this.to[t];
                        this.oe.save({
                            key: `${e.sn}.${e.pn}.${e.ri}`,
                            metadata: { ...e,
                                datatype: "json"
                            },
                            events: csJSON.stringify(i)
                        })
                    })
                }
                save(t) {
                    this.oe.save(t)
                }
            }
            return B([V("RecordingRecovery")], s.prototype, "recover", null), s
        })(),
        Jm = (() => {
            let s;
            return function(r) {
                r[r.NOT_EXIST = 2] = "NOT_EXIST"
            }(s || (s = {})), s
        })(),
        Qm = 8 * 1024 * 1024,
        Zm = (() => {
            class s extends kt {
                constructor(t, e, i) {
                    super(), this.Ne = t, this.dg = e, this.yt = i, this.$h = {}, this.fg = new Set, this.ps = !1
                }
                initState() {
                    ic() && (this.xe = this.yt.getRequestParameters(), this.CA = `${this.dg}/exist?${Ei.toQuery(this.xe)}`, this.IA = `${this.dg}/putTag?${Ei.toQuery(this.xe)}`, this.pg = gi(async () => {
                        if (this.ps) {
                            this.pg();
                            return
                        }
                        this.ps = !0;
                        try {
                            await this.PA()
                        } finally {
                            this.ps = !1
                        }
                    }, 300), this.Ne.onSendStaticResource(t => {
                        this.gg(t)
                    }))
                }
                onStart() {}
                onStop() {}
                onIframeStaticResource(t) {
                    this.gg(t)
                }
                gg(t) {
                    this.mg(t.resource.hash, t.resource.data), t.nestedResources && t.nestedResources.length > 0 && csArray.prototype.forEach.call(t.nestedResources, e => {
                        this.mg(e.hash, e.data)
                    })
                }
                mg(t, e) {
                    this.fg.has(t) || (this.fg.add(t), this.$h[t] = e, this.pg())
                }
                async PA() {
                    let t = this.$h;
                    this.$h = {};
                    let e = await this.OA(t);
                    if (!e.length) return;
                    let i = this.NA(e);
                    await Promise.all(csArray.prototype.map.call(i, n => window.fetch(this.IA, {
                        method: "POST",
                        body: n
                    })))
                }
                async MA(t) {
                    try {
                        let e = Object.keys(t);
                        if (!e.length) return [];
                        let i = {
                            projectId: this.xe.pid,
                            filter: Jm.NOT_EXIST,
                            hashes: e,
                            touch: !0
                        };
                        return await (await window.fetch(this.CA, {
                            method: "POST",
                            body: csJSON.stringify(i)
                        })).json()
                    } catch {
                        return []
                    }
                }
                async OA(t) {
                    let e = [],
                        i = await this.MA(t);
                    return csArray.prototype.forEach.call(i, n => {
                        let o = t[n];
                        o ? csArray.prototype.push.call(e, {
                            hash: n,
                            data: o
                        }) : F.warn("SRM: received unknown hash: " + n)
                    }), e
                }
                NA(t) {
                    let e = 0,
                        i = [new FormData];
                    for (let n of t) {
                        let {
                            data: o,
                            hash: c
                        } = n, l = i.length - 1;
                        if (e = e + o.size, e < Qm) i[l].append("", o, c);
                        else {
                            let h = new FormData;
                            h.append("", o, c), e = o.size, csArray.prototype.push.call(i, h)
                        }
                    }
                    return i
                }
            }
            return s
        })(),
        ll = 2 * 1e3 * 1024,
        ty = 200,
        Oa = (() => {
            class s {
                constructor(t = ll) {
                    this.Ht = [], this.zh = new go(t)
                }
                addEvent(t) {
                    this.zh.addString(vs(t)), csArray.prototype.push.call(this.Ht, t)
                }
                addEventByTimestamp(t) {
                    let e = 0;
                    for (; e < this.Ht.length && !(this.Ht[e].date >= t.date); e += 1);
                    csArray.prototype.splice.call(this.Ht, e, 0, t)
                }
                eventsCount() {
                    return this.Ht.length
                }
                clearEvents() {
                    this.zh.reset(), this.Ht = []
                }
                isFull() {
                    return this.eventsCount() >= ty
                }
                isThresholdReached() {
                    return this.zh.isThresholdReached()
                }
                getEvents() {
                    return this.Ht
                }
                extractEvents(...t) {
                    let e = [],
                        i = [];
                    return csArray.prototype.forEach.call(this.Ht, n => {
                        csArray.prototype.indexOf.call(t, n.type) !== -1 ? csArray.prototype.push.call(e, n) : csArray.prototype.push.call(i, n)
                    }), this.Ht = i, e
                }
                stringifyEvents() {
                    return vs(this.Ht)
                }
                gO(t) {
                    t.type === k.INITIAL_DOM && (window.CSDomSerialized = window.CSDomSerialized ? window.CSDomSerialized + 1 : 1)
                }
            }
            return B([Dt("RecordingBatch.addEvent")], s.prototype, "addEvent", null), s
        })();

    function ey(s) {
        if (typeof Object.values == "function") return Object.values(s);
        let r = [];
        for (let t in s) s.hasOwnProperty(t) && csArray.prototype.push.call(r, s[t]);
        return r
    }
    var Na = (() => {
            class s {
                constructor() {
                    this.Ya = 1
                }
                getCurrentIndex() {
                    return this.Ya
                }
                increment() {
                    this.Ya += 1
                }
                reset() {
                    this.Ya = 1
                }
                getRequestParameters() {
                    return {
                        ri: `${this.Ya}`
                    }
                }
            }
            return s
        })(),
        sy = 3,
        iy = 8,
        ry = (() => {
            class s {
                constructor(t, e = ll, i = sy) {
                    this.DA = t, this.yg = e, this.qh = i, this.Xa = {}
                }
                addEvent(t) {
                    this.Eg().addEvent(t)
                }
                addEventByTimestamp(t) {
                    this.Eg().addEventByTimestamp(t)
                }
                eventsCount() {
                    return csArray.prototype.reduce.call(this.Fi(), (t, e) => t + e.batch.eventsCount(), 0)
                }
                isFull() {
                    return csArray.prototype.some.call(this.Fi(), t => t.batch.isFull())
                }
                isThresholdReached() {
                    let t = this.Fi();
                    return t.length >= this.qh || csArray.prototype.some.call(t, e => e.batch.isThresholdReached())
                }
                getEvents() {
                    return csArray.prototype.reduce.call(this.getOrderedBatchSlots(), (t, e) => csArray.prototype.concat.call(t, e.batch.getEvents()), [])
                }
                extractEvents(...t) {
                    return csArray.prototype.reduce.call(this.getOrderedBatchSlots(), (e, i) => csArray.prototype.concat.call(e, i.batch.extractEvents(...t)), [])
                }
                stringifyEvents() {
                    return vs(this.getEvents())
                }
                clearEvents() {
                    csArray.prototype.forEach.call(this.Fi(), t => t.batch.clearEvents())
                }
                clearEmptyBatchSlots() {
                    let t = this.getOrderedBatchSlots();
                    for (let e = 0; e < t.length - 1; e++) t[e].batch.eventsCount() === 0 && delete this.Xa[t[e].metadata.pageNumber]
                }
                Fi() {
                    return ey(this.Xa)
                }
                getOrderedBatchSlots() {
                    return csArray.prototype.sort.call(this.Fi(), ny)
                }
                Sg() {
                    let t = this.DA();
                    if (t <= 0) return {
                        batch: new Oa(this.yg),
                        metadata: {
                            pageNumber: 0,
                            requestIndex: new Na
                        }
                    };
                    let e = this.Xa[t];
                    if (e) return e;
                    let i = {
                        batch: new Oa(this.yg),
                        metadata: {
                            pageNumber: t,
                            requestIndex: new Na
                        }
                    };
                    return this.Xa[t] = i, this.Fi().length > Math.max(this.qh, iy) && F.warn(`RecordingBatchGroup: max number of slots overflowed(${this.Fi().length}/${this.qh})`), i
                }
                Eg() {
                    return this.Sg().batch
                }
                getCurrentRequestIndex() {
                    return this.Sg().metadata.requestIndex
                }
            }
            return s
        })();

    function ny(s, r) {
        return s.metadata.pageNumber - r.metadata.pageNumber
    }

    function xt(s, r = 0) {
        let t = Math.pow(10, r);
        return Math.round(s * t) / t
    }
    var oy = (() => {
            class s {
                constructor(t, e) {
                    this.Lt = t, this.D = e, this.fi = [{
                        boundElement: window,
                        type: "hashchange",
                        listener: () => this.hashChangeListener()
                    }, {
                        boundElement: document,
                        type: "visibilitychange",
                        listener: () => this.visibilityChangeListener()
                    }]
                }
                onEvent(t) {
                    this.V = t
                }
                start() {
                    this.Gi(), this.triggerInitialEvents()
                }
                stop() {
                    this.$i()
                }
                Gi() {
                    csArray.prototype.forEach.call(this.fi, t => Ot(t))
                }
                $i() {
                    csArray.prototype.forEach.call(this.fi, t => Nt(t))
                }
                triggerInitialEvents() {
                    this.hashChangeListener()
                }
                hashChangeListener() {
                    let t = {
                        type: k.HASH_CHANGE,
                        args: [this.D.anonymizePII(this.Lt.href)],
                        date: M.now()
                    };
                    this.V(t)
                }
                visibilityChangeListener() {
                    let t = {
                        type: k.VISIBILITY_CHANGE,
                        args: [document.visibilityState],
                        date: M.now()
                    };
                    this.V(t)
                }
            }
            return B([V("hashChange")], s.prototype, "hashChangeListener", null), B([V("visibilityChange")], s.prototype, "visibilityChangeListener", null), s
        })(),
        js = (() => {
            let s;
            return function(r) {
                r[r.COPY = 0] = "COPY", r[r.CUT = 1] = "CUT", r[r.PASTE = 2] = "PASTE"
            }(s || (s = {})), s
        })(),
        W = (() => {
            let s;
            return function(r) {
                r[r.SPACE = 0] = "SPACE", r[r.ENTER = 1] = "ENTER", r[r.BACKSPACE = 2] = "BACKSPACE", r[r.DELETE = 3] = "DELETE", r[r.ARROWUP = 4] = "ARROWUP", r[r.ARROWDOWN = 5] = "ARROWDOWN", r[r.ARROWLEFT = 6] = "ARROWLEFT", r[r.ARROWRIGHT = 7] = "ARROWRIGHT", r[r.CAPSLOCK = 8] = "CAPSLOCK", r[r.SHIFT = 9] = "SHIFT", r[r.TAB = 10] = "TAB", r[r.ALPHANUMERICAL = 11] = "ALPHANUMERICAL", r[r.ESCAPE = 12] = "ESCAPE", r[r.END = 13] = "END", r[r.ALT = 14] = "ALT", r[r.CTRL = 15] = "CTRL", r[r.META = 16] = "META"
            }(s || (s = {})), s
        })();

    function ay(s) {
        if (!q(s)) return null;
        let t = /iP(ad|hone|od).+Version\/(\d+)\..*Safari/i.exec(s);
        return t ? Number(t[2]) : null
    }
    var Ma = "data-cs-scroll-container";

    function cy(s) {
        try {
            if (Mt(csEventtarget.apply(s))) return !0
        } catch {}
        return !1
    }
    var Hs = (() => {
            let s;
            return function(r) {
                function t(i) {
                    return !!(Mt(i) && cy(i) && wi(csEventtarget.apply(i)) && csEventtarget.apply(i).getAttribute(Ma) !== null)
                }
                r.isEventOnScrollContainer = t;

                function e() {
                    return window.csquerySelector[document.nodeType].call(document, `[${Ma}]`)
                }
                r.getScrollContainer = e
            }(s || (s = {})), s
        })(),
        ly = 33,
        hy = (() => {
            class s {
                constructor() {
                    this.eventType = "user", this.Yh = [], this.BA = [{
                        type: "pointerup",
                        listener: e => this.pointerUpListener(e),
                        boundElement: document
                    }, {
                        type: "pointermove",
                        listener: e => this.pointerMoveListener(e),
                        boundElement: document
                    }, {
                        type: "pointerdown",
                        listener: e => this.pointerDownListener(e),
                        boundElement: document
                    }], this.FA = [{
                        type: "touchstart",
                        listener: e => this.touchStartListener(e),
                        boundElement: document
                    }, {
                        type: "touchmove",
                        listener: e => this.touchMoveListener(e),
                        boundElement: document
                    }, {
                        type: "touchend",
                        listener: e => this.touchEndCancelListener(e),
                        boundElement: document
                    }, {
                        type: "touchcancel",
                        listener: e => this.touchEndCancelListener(e),
                        boundElement: document
                    }], this.Ja = [{
                        type: "click",
                        listener: e => this.clickListener(e),
                        boundElement: document
                    }, {
                        type: "keyup",
                        listener: e => this.keyUpListener(e),
                        boundElement: document
                    }, {
                        type: "keydown",
                        listener: e => this.keyDownListener(e),
                        boundElement: document
                    }, {
                        type: "copy",
                        listener: e => this.copyListener(e),
                        boundElement: document
                    }, {
                        type: "cut",
                        listener: e => this.cutListener(e),
                        boundElement: document
                    }, {
                        type: "paste",
                        listener: e => this.pasteListener(e),
                        boundElement: document
                    }, {
                        type: "scroll",
                        listener: e => this.scrollListener(csEventtarget.apply(e)),
                        boundElement: document
                    }, {
                        type: "mouseover",
                        listener: e => this.mouseOverListener(e),
                        boundElement: document
                    }], this.Xh = [{
                        type: "scroll",
                        listener: e => this.scrollListener(csEventtarget.apply(e))
                    }];
                    let t = ay(window.navigator.userAgent);
                    (t === null || t && t >= 16) && csArray.prototype.push.call(this.Xh, {
                        type: "mouseover",
                        listener: e => this.mouseOverListener(e)
                    }), this.ge = new Ws((e, i) => {
                        switch (i) {
                            case "initial":
                            case "added":
                                this.Gi(e);
                                break;
                            case "removed":
                                this.$i(e);
                                break
                        }
                    })
                }
                init() {
                    this.GA(), this.$A(), this.Kh()
                }
                onEvent(t) {
                    csArray.prototype.push.call(this.Yh, t)
                }
                ae(t, e = !1) {
                    csArray.prototype.forEach.call(this.Yh, i => i(t, e))
                }
                start() {
                    this.gh(), this.Gi(document), this.ge.observe()
                }
                stop() {
                    this.$i(document), this.ge.disconnect(), this.Yh = []
                }
                $A() {
                    this.zA() && csArray.prototype.push.call(this.Ja, ...this.BA)
                }
                GA() {
                    this.qA() && csArray.prototype.push.call(this.Ja, ...this.FA)
                }
                Gi(t) {
                    hr(t) ? csArray.prototype.forEach.call(this.Ja, e => Ot(e)) : csArray.prototype.forEach.call(this.Xh, e => {
                        let i = {
                            type: e.type,
                            listener: e.listener,
                            boundElement: t
                        };
                        Ot(i)
                    })
                }
                $i(t) {
                    hr(t) ? csArray.prototype.forEach.call(this.Ja, e => Nt(e)) : csArray.prototype.forEach.call(this.Xh, e => {
                        let i = {
                            type: e.type,
                            listener: e.listener,
                            boundElement: t
                        };
                        Nt(i)
                    })
                }
                zA() {
                    return "PointerEvent" in window && typeof window.PointerEvent == "function"
                }
                qA() {
                    return "TouchEvent" in window && typeof window.TouchEvent == "function"
                }
                gh() {
                    this.WA()
                }
                WA() {
                    let t = Hs.getScrollContainer() || document,
                        e = G(t),
                        i = this.vg(t);
                    if (i.top !== 0 || i.left !== 0) {
                        let n = {
                            type: k.SCROLL,
                            args: [e, i.left, i.top],
                            date: M.now()
                        };
                        this.ae(n, !0)
                    }
                }
                vg(t) {
                    return t === document ? {
                        top: window.pageYOffset,
                        left: window.pageXOffset
                    } : {
                        top: t.scrollTop,
                        left: t.scrollLeft
                    }
                }
                scrollListener(t) {
                    if (D.isMaskedElement(t) || D.isMaskedElementChild(t)) return;
                    let e = G(t),
                        i = this.vg(t),
                        n = {
                            type: k.SCROLL,
                            args: [e, i.left, i.top],
                            date: M.now()
                        };
                    this.ae(n)
                }
                mouseOverListener(t) {
                    if (D.isMaskedElementChild(t.target)) return;
                    let e = G(t.target),
                        i = {
                            type: k.MOUSE_OVER,
                            args: [e],
                            date: M.now()
                        };
                    this.ae(i)
                }
                clickListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.CLICK,
                            args: [i],
                            date: M.now()
                        };
                    this.ae(n)
                }
                keyUpListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = this.B[t.key];
                    if (n === void 0) return;
                    let o = {
                        type: k.KEY_UP,
                        args: [i, n],
                        date: M.now()
                    };
                    this.ae(o)
                }
                keyDownListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = this.B[t.key];
                    if (n === void 0) return;
                    let o = {
                        type: k.KEY_DOWN,
                        args: [i, n],
                        date: M.now()
                    };
                    this.ae(o)
                }
                copyListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.CLIPBOARD_COMMAND,
                            args: [i, js.COPY],
                            date: M.now()
                        };
                    this.ae(n)
                }
                cutListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.CLIPBOARD_COMMAND,
                            args: [i, js.CUT],
                            date: M.now()
                        };
                    this.ae(n)
                }
                pasteListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.CLIPBOARD_COMMAND,
                            args: [i, js.PASTE],
                            date: M.now()
                        };
                    this.ae(n)
                }
                pointerUpListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.POINTER_UP,
                            args: [t.pointerId, t.pointerType, xt(t.clientX, 1), xt(t.clientY, 1), i, t.button],
                            date: M.now()
                        };
                    this.ae(n)
                }
                pointerMoveListener(t) {
                    let e = {
                        type: k.POINTER_MOVE,
                        args: [t.pointerId, t.pointerType, xt(t.clientX, 1), xt(t.clientY, 1)],
                        date: M.now()
                    };
                    this.ae(e)
                }
                pointerDownListener(t) {
                    let e = mt(t);
                    if (D.isMaskedElementChild(e)) return;
                    let i = G(e),
                        n = {
                            type: k.POINTER_DOWN,
                            args: [t.pointerId, t.pointerType, xt(t.clientX, 1), xt(t.clientY, 1), i, t.button, {
                                pageX: xt(t.pageX, 1),
                                pageY: xt(t.pageY, 1)
                            }],
                            date: M.now()
                        };
                    this.ae(n)
                }
                touchStartListener(t) {
                    if (!t.changedTouches) return;
                    let {
                        changedTouches: e
                    } = t;
                    for (let i = 0; i < e.length; i += 1) {
                        let n = e[i],
                            o = {
                                type: k.TOUCH_START,
                                args: [n.identifier, xt(n.clientX, 1), xt(n.clientY, 1)],
                                date: M.now()
                            };
                        this.ae(o)
                    }
                }
                touchMoveListener(t) {
                    if (!t.changedTouches) return;
                    let {
                        changedTouches: e
                    } = t;
                    for (let i = 0; i < e.length; i += 1) {
                        let n = e[i],
                            o = {
                                type: k.TOUCH_MOVE,
                                args: [n.identifier, xt(n.clientX, 1), xt(n.clientY, 1)],
                                date: M.now()
                            };
                        this.ae(o)
                    }
                }
                touchEndCancelListener(t) {
                    if (!t.changedTouches) return;
                    let {
                        changedTouches: e
                    } = t;
                    for (let i = 0; i < e.length; i += 1) {
                        let n = e[i],
                            o = {
                                type: t.type === "touchend" ? k.TOUCH_END : k.TOUCH_CANCEL,
                                args: [n.identifier, xt(n.clientX, 1), xt(n.clientY, 1)],
                                date: M.now()
                            };
                        this.ae(o)
                    }
                }
                Kh() {
                    this.B = {}, this.B[" "] = W.SPACE, this.B.Spacebar = W.SPACE, this.B.Backspace = W.BACKSPACE, this.B.Enter = W.ENTER, this.B.Delete = W.DELETE, this.B.ArrowUp = W.ARROWUP, this.B.ArrowDown = W.ARROWDOWN, this.B.ArrowLeft = W.ARROWLEFT, this.B.ArrowRight = W.ARROWRIGHT, this.B.Up = W.ARROWUP, this.B.Down = W.ARROWDOWN, this.B.Left = W.ARROWLEFT, this.B.Right = W.ARROWRIGHT, this.B.CapsLock = W.CAPSLOCK, this.B.Shift = W.SHIFT, this.B.Tab = W.TAB, this.B.Escape = W.ESCAPE, this.B.Esc = W.ESCAPE, this.B.End = W.END, this.B.Alt = W.ALT, this.B.Control = W.CTRL, this.B.Meta = W.META
                }
            }
            return B([Dt("RecordingPageEvents.start")], s.prototype, "start", null), B([V("scroll")], s.prototype, "scrollListener", null), B([V("mouseOver"), bt(), If()], s.prototype, "mouseOverListener", null), B([V("click"), bt()], s.prototype, "clickListener", null), B([V("Event handler type: keyup")], s.prototype, "keyUpListener", null), B([V("Event handler type: keydown")], s.prototype, "keyDownListener", null), B([V("Event handler type: copy")], s.prototype, "copyListener", null), B([V("Event handler type: cut")], s.prototype, "cutListener", null), B([V("Event handler type: paste")], s.prototype, "pasteListener", null), B([V("Event handler type: pointerup"), bt()], s.prototype, "pointerUpListener", null), B([V("Event handler type: pointermove"), bt(), oo({
                wait: ly
            })], s.prototype, "pointerMoveListener", null), B([V("Event handler type: pointerdown"), bt()], s.prototype, "pointerDownListener", null), B([V("Event handler type: touchstart"), bt()], s.prototype, "touchStartListener", null), B([V("Event handler type: touchmove"), bt()], s.prototype, "touchMoveListener", null), B([V("Event handler type: touchend-cancel"), bt()], s.prototype, "touchEndCancelListener", null), s
        })(),
        uy = (() => {
            class s {
                constructor() {}
                onScannedAsset(t) {
                    this.Qa = t
                }
                Za() {
                    let t = window.location.href,
                        e = csString.prototype.indexOf.call(t, "#");
                    return e === -1 ? t : csString.prototype.substring.call(t, 0, e)
                }
                scanCssString(t) {
                    this.Jh(fi(t))
                }
                scanElement(t, e) {
                    D.getMaskedElementDetails(t).state !== D.MaskedElementState.NotMasked || e && D.isMaskedAttribute(t, e) || (yr(t) ? this.YA(t) : Kn(t) ? this.KA(t, e) : (this.JA(t, e), this.QA(t, e), this.ZA(t, e)))
                }
                KA(t, e) {
                    var i;
                    if ((!e || e === "href") && t.href) {
                        let o = {
                            assetId: ((i = t.sheet) === null || i === void 0 ? void 0 : i.href) || t.href,
                            assetBasePath: this.Za(),
                            assetRawPath: $c(t)
                        };
                        this.Qa({
                            type: "stylesheet",
                            asset: o
                        })
                    }
                }
                YA(t) {
                    var e;
                    let i = new Set;
                    if (t.textContent)
                        for (let o of fi(t.textContent)) i.add(o);
                    let n;
                    try {
                        n = (e = t.sheet) === null || e === void 0 ? void 0 : e.cssRules
                    } catch (o) {
                        o.name === "SecurityError" || o.name === "InvalidAccessError" || F.error(o.message)
                    }
                    if (n)
                        for (let o = 0; o < n.length; o++) {
                            let c = n.item(o).cssText;
                            for (let l of fi(c)) i.add(l)
                        }
                    this.Jh($s(i))
                }
                Qh(t) {
                    return !this.tT(t) && !Xt(t) && !rd(t)
                }
                JA(t, e) {
                    if (bu(t) || Tu(t)) {
                        if (!e || e === "src") {
                            let i = t.getAttribute("src");
                            if (i && this.Qh(i)) {
                                let n = {
                                    assetId: t.src,
                                    assetRawPath: i,
                                    assetBasePath: this.Za()
                                };
                                this.Qa({
                                    type: "asset",
                                    asset: n
                                })
                            }
                        }(!e || e === "srcset") && t.srcset && this.eT(t.srcset)
                    }
                }
                QA(t, e) {
                    if (csNodenodeType.apply(t) !== 1) {
                        it.warn(`StaticResourceUrlTracker: Wrong element nodeType: ${t==null?void 0:t.nodeName}/${csNodenodeType.apply(t)}`);
                        return
                    }
                    if (t.hasAttribute && (!e || e === "style") && t.hasAttribute("style")) {
                        let i = t.getAttribute("style");
                        if (typeof i == "string") this.scanCssString(i);
                        else throw new Error("Unexpected style: " + t.outerHTML)
                    }
                }
                eT(t) {
                    this.Jh(uo(t))
                }
                ZA(t, e) {
                    if ((Pu(t) || Ou(t) || Nu(t)) && (!e || e === "href" || e === "xlink:href")) {
                        let i = t.getAttribute("href") || t.getAttribute("xlink:href");
                        if (i && this.Qh(i)) {
                            let n = {
                                assetId: _e(i),
                                assetRawPath: i,
                                assetBasePath: this.Za()
                            };
                            this.Qa({
                                type: "asset",
                                asset: n
                            })
                        }
                    }
                }
                Jh(t) {
                    return csArray.prototype.forEach.call(csArray.prototype.map.call(csArray.prototype.filter.call(t, e => this.Qh(e)), e => ({
                        rawUrl: e,
                        absoluteUrl: _e(e)
                    })), e => {
                        let i = {
                            assetId: e.absoluteUrl,
                            assetBasePath: this.Za(),
                            assetRawPath: e.rawUrl
                        };
                        this.Qa({
                            type: "asset",
                            asset: i
                        })
                    })
                }
                tT(t) {
                    return /^https:\/\/\w+:\w+@/.test(t)
                }
            }
            return s
        })(),
        dy = 30,
        fy = 0,
        hl = (() => {
            class s {
                constructor(t, e = dy, i = fy) {
                    this.sT = t, this.iT = e, this.rT = i, this.Qe = new bi, this.Ge = !1, this.Zh = 0, this._g = () => {
                        for (this.Zh = 0; this.Qe.length;) {
                            if (this.Zh >= this.iT) {
                                csSetTimeout(this._g, this.rT);
                                return
                            }
                            let n = M.elapsed(),
                                o = this.Qe.pop();
                            if (!o) break;
                            this.runTask(o);
                            let c = M.elapsed() - n;
                            this.Zh += c
                        }
                        this.Ge = !1
                    }
                }
                schedule(t, e = !1) {
                    if (!this.sT || e) {
                        t();
                        return
                    }
                    Ut.general.pendingTasks.increase(), this.Qe.push(t), this.nT()
                }
                nT() {
                    this.Ge || (this.Ge = !0, csSetTimeout(() => {
                        this._g()
                    }))
                }
                runTask(t) {
                    Ut.general.pendingTasks.decrease(), t()
                }
                runPendingTasks() {
                    this.Qe.forEach(t => {
                        this.runTask(t)
                    }), this.Qe.clear()
                }
                clearQueue() {
                    Ut.general.pendingTasks.clear(), Ut.mutations.pendingMutations.clear(), this.Qe.clear()
                }
                isEmpty() {
                    return this.Qe.length === 0
                }
            }
            return B([V("TaskScheduler"), Dt("runTask")], s.prototype, "runTask", null), B([Dt("runPendingTasks")], s.prototype, "runPendingTasks", null), s
        })(),
        py = (() => {
            class s {
                constructor() {
                    this.Y = !1, this.wg = new lo(t => t.type === "cssRuleInserted" && this.oT(t)), this.aT = Ar(t => {
                        this.Y && t.length > 0 && this.M.schedule(() => J(t, e => this.io.scanElement(e)))
                    }), this.cT = ({
                        type: t,
                        asset: e
                    }) => {
                        var i, n, o;
                        t === "stylesheet" && ((i = this.lT) === null || i === void 0 || i.call(this, e)), (n = this.hT) === null || n === void 0 || n.call(this, e);
                        let c = {
                            date: M.now(),
                            type: k.STATIC_RESOURCE_URL,
                            args: [e.assetId]
                        };
                        (o = this.V) === null || o === void 0 || o.call(this, c)
                    }, this.M = new hl(!0, 30, 0), this.Hn = new tl(t => this.uT(t)), this.L = new ts(t => this.Ar(t)), this.io = new uy, this.io.onScannedAsset(this.cT)
                }
                onEvent(t) {
                    this.V = t
                }
                onAsset(t) {
                    this.hT = t
                }
                onStyleSheetFound(t) {
                    this.lT = t
                }
                start() {
                    this.Y || (this.Y = !0, this.wg.observe(), this.Hn.observe(), this.L.observe())
                }
                stop() {
                    this.Y && (this.wg.disconnect(), this.Hn.disconnect(), this.L.disconnect(), this.Y = !1)
                }
                oT(t) {
                    !t.rule || !this.Y || this.io.scanCssString(t.rule)
                }
                uT(t) {
                    this.Y && D.getMaskedElementDetails(t).state === D.MaskedElementState.NotMasked && this.aT.push(t)
                }
                Ar(t) {
                    csSetTimeout(() => {
                        for (let e of t) switch (e.type) {
                            case "attributes":
                                this.io.scanElement(e.target, e.attributeName);
                                break;
                            case "characterData":
                                this.dT(e.target);
                                break;
                            case "childList":
                        }
                    })
                }
                dT(t) {
                    lr(t) && csNodeparentNode.apply(t) && yr(csNodeparentNode.apply(t)) && this.io.scanCssString(t.data)
                }
            }
            return s
        })(),
        gy = "csPersisted",
        Da = "v2/recording",
        my = ["isRecording"],
        yy = ["replay:resourceManager:enableForOnlineResource:nextPageviewOnly", "cssrm:onlineAssets:activateForNextPageview"],
        Ey = ["replay:resourceManager:getStatus", "cssrm:getStatus"],
        Sy = (() => {
            class s {
                constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C, P, S, w, I, O, T, U, tt) {
                    this.Ei = t, this.R = e, this.E = i, this.xe = n, this.S = o, this.D = c, this.F = l, this.Se = h, this.Ee = f, this.St = d, this.He = m, this.Tt = E, this.w = v, this.Si = C, this.Ag = P, this.qt = S, this.ce = w, this.tt = I, this.Kn = O, this.it = T, this.mO = U, this.ht = tt
                }
                init() {
                    var t, e;
                    let i = [],
                        n = [];
                    csArray.prototype.push.call(n, new bg), this.ro = new kg(this.it.shouldUseAnonymization(), this.E.whitelistedAttributes, this.D, this.E.anonymizeDigits), this.zi();
                    let o = new Pm(gy);
                    this.fT(o), this.G = new ry(() => {
                        var I;
                        return ((I = this.R.getSession()) === null || I === void 0 ? void 0 : I.pageNumber) || 0
                    });
                    let c = new py;
                    csArray.prototype.push.call(i, c), this.E.useStaticResourceManager && Nn.isSupported() && (this.Zt = new Nn, this.Ne = new Nm, this.Tg = new Zm(this.Ne, this.E.getStaticResourceManagerUri(), this.xe), this.Ag.addListener(this.Tg), csArray.prototype.push.call(n, this.Zt));
                    let l = new Si(this.xe, {
                            getRequestParameters: () => ({
                                let: this.recordingService.getRecordingLastEventTimestamp()
                            })
                        }, {
                            getRequestParameters: () => ({
                                rst: this.recordingService.getRecordingStartTimestamp()
                            })
                        }, {
                            getRequestParameters: () => ({
                                rt: csArray.prototype.join.call(this.R.getRecordingTypes(), ",")
                            })
                        }),
                        h = new ol(`${this.E.getRecordingUri()}/${Da}`);
                    csArray.prototype.push.call(n, this.ro), csArray.prototype.push.call(n, new Kg(this.tt)), csArray.prototype.push.call(n, new Qg), this.qi = new hy, this.qi.init(), csArray.prototype.push.call(i, this.qi), this.Vt = new Km(o, h, this.X), csArray.prototype.push.call(i, new oy(window.location, this.D));
                    let f = new Tg,
                        d = new em,
                        m = new im,
                        E = new om(this.ht),
                        v = new cm,
                        C = [d, this.Se, f, new qm(csArray.prototype.filter.call(i, I => I)), v, new lm, new Sm, E, m];
                    this.E.jsErrorsEnabled && (this.$a = new vm, this.gT = new _m(I => this.Ee.anonymize(I)), this.gs = new zm(this.$a), csArray.prototype.push.call(C, this.$a), csArray.prototype.push.call(n, this.gT));
                    let P = new bm(C, n),
                        S = new $m(P, this.w, this.Ne, this.gs, this.Ds),
                        w = [f, d, m, E, v];
                    this.recordingService = new Xm(this.E, this.G, l, this.F, this.R, this.Ee, this.St, this.He, this.ht, this.X, this.Vt, h, S, i, w, this.Zt, this.Kn, this.gs, this.Ds), this.Si.addListener(this.recordingService), this.Ag.addListener(this.recordingService), this.recordingService.init(), this.S.register(my, () => this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay()), this.S.register(yy, () => {
                        this.recordingService.activateOnlineAssetsOnNextPageview(), this.w.emitRecordingContextChange()
                    }), this.S.register(Ey, () => this.recordingService.getStaticResourceManagerStatus()), this.no = new Om(this.w, this.R), this.Si.addListener(this.no), this.Ei.enableRecordingContext(this.recordingService, this.R, this.no), this.tu()
                }
                onAfterNaturalPageView() {
                    var t;
                    this.qt.isUrlExcludedForSessionReplay() ? this.recordingService.resetOnlineAssetsOnPageview() : this.recordingService.updateOnlineAssetsOnPageview(), (t = this.Tg) === null || t === void 0 || t.initState()
                }
                onStartTracking() {
                    this.Vt.recover(), this.zi(), this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay() && (this.R.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.tc())
                }
                onArtificialPageViewEnd() {
                    this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay() && !this.R.isTemporarilyRecorded() && this.Vt.sendLastMessageBeacon(), this.recordingService.clearStates(), this.oo()
                }
                onAfterArtificialPageView() {
                    this.zi(), this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay() ? (this.R.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.recordingService.updateOnlineAssetsOnPageview(), this.tc()) : this.recordingService.resetOnlineAssetsOnPageview()
                }
                onBeforeSessionRenewal() {
                    this.recordingService.clearStates(), this.oo()
                }
                onOptout() {
                    this.oo(), this.recordingService.onOptOut()
                }
                onReplayUnanonymizationConsentGranted() {
                    this.zi(), this.recordingService.triggerUnanonymizationConsentGranted(), this.w.emitRecordingContextChange()
                }
                onReplayUnanonymizationConsentWithdrawn() {
                    this.zi(), this.recordingService.triggerUnanonymizationConsentWithdrawn(), this.w.emitRecordingContextChange()
                }
                onCollectStateChange(t, e) {
                    t === N.QUOTA_REACHED || t === N.ANALYTICS_ONLY && e === Qt.ETR_OFF ? (this.recordingService.clearEvents(), this.oo()) : (this.X.setQueryParams({
                        rt: csArray.prototype.join.call(this.R.getRecordingTypes(), ",")
                    }), this.recordingService.allowSendingEventsFromQuotaService(), this.recordingService.pushEvents(), this.no.onCollectStateChange(t, e))
                }
                onTargetingRulesMatched() {
                    this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay() && !this.recordingService.isRecording() && this.tc()
                }
                onInitialDomStart() {
                    this.recordingService.blockSendingEventsFromSerialization(), this.Vt.blockSendingLastMessage()
                }
                onInitialDomDone(t) {
                    this.recordingService.allowSendingEventsFromSerialization(), this.recordingService.addInitialDom(t), this.Vt.allowSendingLastMessage(), this.qi.start(), this.recordingService.pushEvents()
                }
                onAfterReplayRecordingConsentGranted() {
                    this.R.isReplayRecorded() && !this.qt.isUrlExcludedForSessionReplay() && (this.R.isTemporarilyRecorded() && this.recordingService.blockSendingEventsFromQuotaService(), this.tc(), this.recordingService.triggerRecordingForSessionGranted())
                }
                onAfterReplayRecordingConsentWithdrawn() {
                    this.recordingService.isRecording() && (this.recordingService.triggerRecordingForSessionWithdrawn(), this.recordingService.clearStates(), this.oo())
                }
                tu() {
                    var t, e, i, n, o, c;
                    if (!((i = (e = (t = this.E.experimental) === null || t === void 0 ? void 0 : t.sessionReplay) === null || e === void 0 ? void 0 : e.shadowRoot) === null || i === void 0) && i.filterByHostSelector) {
                        let l = (c = (o = (n = this.E.experimental) === null || n === void 0 ? void 0 : n.sessionReplay) === null || o === void 0 ? void 0 : o.shadowRoot) === null || c === void 0 ? void 0 : c.filterByHostSelector;
                        J(l, h => {
                            li(h) && ts.setShadowRootFilter(f => {
                                try {
                                    return ie.call(f.host, h)
                                } catch {
                                    return !1
                                }
                            })
                        })
                    }
                }
                tc() {
                    this.recordingService.start(), this.Vt.start(), this.w.emitRecordingContextChange()
                }
                oo() {
                    this.recordingService.stop(), this.Vt.stop(), this.w.emitRecordingContextChange()
                }
                fT(t) {
                    let e = "byteArray";
                    this.X = this.ce.create(`${this.E.getRecordingUri()}/${Da}`, e, t)
                }
                zi() {
                    var t;
                    let e = this.it.shouldUseAnonymization();
                    this.ro.setAnonymization(e), (t = this.pT) === null || t === void 0 || t.setAnonymization(e)
                }
            }
            return B([Dt("Recording.onStartTracking")], s.prototype, "onStartTracking", null), B([Dt("onInitialDomDone")], s.prototype, "onInitialDomDone", null), s
        })();
    var vy = 1024,
        _y = 512,
        nn = 1024,
        on = "||",
        wy = (() => {
            let s;
            return function(r) {
                function t(c, l) {
                    return q(c) && csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(c), Ye.CHAMELEON) !== -1 ? Ye.CHAMELEON : l
                }
                r.handleCustomEventCommandMisuse = t;

                function e(c, l, h) {
                    let f = i(h);
                    return {
                        type: z.CUSTOM_EVENT,
                        ts: 0,
                        customEventName: Et.truncate(c, vy, Et.ELLIPSIS),
                        sourceLibrary: pf(l) ? l : Ye.WEB,
                        ...mn(f) ? {} : {
                            properties: f
                        }
                    }
                }
                r.buildCustomEvent = e;

                function i(c) {
                    let l = {};
                    for (let h in c) {
                        if (h.length > _y) continue;
                        let f = c[h];
                        if (Jt(f) || or(f)) l[h] = csString(f);
                        else if (o(f)) l[h] = Et.truncate(f, nn, Et.ELLIPSIS);
                        else if (hu(f)) {
                            let d = n(f);
                            d !== "" && (l[h] = d)
                        }
                    }
                    return l
                }
                r.sanitizeCustomEventProperties = i;

                function n(c) {
                    let l = "";
                    for (let h = 0; h < c.length; h++) {
                        let f = c[h];
                        if (!Jt(f) && !or(f) && !o(f)) continue;
                        let d = csString(f);
                        if (l === "") l = Et.truncate(d, nn, Et.ELLIPSIS);
                        else if (l.length + on.length + d.length <= nn) l += on + d;
                        else break
                    }
                    return l
                }

                function o(c) {
                    return q(c) && !zn(c) && !csString.prototype.includes.call(c, on)
                }
            }(s || (s = {})), s
        })(),
        Pt = (() => {
            class s {
                static buildFromCustomEvent(t, e) {
                    return this.bg(null, t, e)
                }
                static buildFromAnalysisEvent(t, e, i) {
                    return this.bg(t, e, i)
                }
                static bg(t, e, i) {
                    return csArray.prototype.reduce.call(i, (n, o) => o.enhanceAnalysisEvent(t, n), e)
                }
            }
            return s
        })();
    var Ay = (() => {
            class s extends kt {
                constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C, P, S, w, I, O, T, U, tt) {
                    super(), this.E = t, this.vi = e, this.Bt = i, this.Mr = n, this.eu = o, this.Ze = c, this.Me = l, this.su = h, this.F = f, this.oe = d, this.Q = m, this.iu = E, this.Ke = v, this.X = C, this.Ft = P, this.sc = S, this.Ls = w, this.xs = I, this.ru = O, this.Wi = T, this.Yi = U, this.Xi = tt, this.yi = new al, this.ic = !1, this.Ki = []
                }
                init() {
                    var t, e, i, n, o, c, l;
                    this.vi.onEvent(h => this.Ut(h)), this.Bt.onEvent(h => this.Ut(h)), this.Mr.onEvent(() => {
                        let h = this.Mr.getRequestParameters();
                        this.X.setQueryParams(h), this.Me.setQueryParams(h)
                    }), this.iu.onEvent(h => this.le(h)), this.nu(), (t = this.sc) === null || t === void 0 || t.onEvent(h => this.Ut(h)), (e = this.Wi) === null || e === void 0 || e.onEvent(h => this.Ut(h)), (i = this.Ls) === null || i === void 0 || i.onEvent(h => this.Ut(h)), (n = this.xs) === null || n === void 0 || n.onEvent(h => this.Ut(h)), this.mT(), (o = this.ru) === null || o === void 0 || o.onEvent(h => this.le(h)), (c = this.Yi) === null || c === void 0 || c.onEvent(h => this.le(h)), (l = this.Xi) === null || l === void 0 || l.onEvent(h => this.le(h))
                }
                mT() {
                    this.Me.onBeaconSuccess(() => {
                        this.Ze.clearEvents()
                    }), this.Me.onBeaconFailure(t => {
                        this.yT(t)
                    })
                }
                initStates() {
                    let t = this.su.getRequestParameters(),
                        e = this.eu.getRequestParameters(),
                        i = this.Mr.getRequestParameters();
                    this.X.setQueryParams(t), this.X.setQueryParams(e), this.X.setQueryParams(i), this.Me.setQueryParams(t), this.Me.setQueryParams(e), this.Me.setQueryParams(i), this.ou()
                }
                clearStates(t) {
                    var e, i;
                    this.vi.flushPendingDebouncedListeners(), (e = this.Ls) === null || e === void 0 || e.flushPendingKeyboardNavigationEvent(), (i = this.xs) === null || i === void 0 || i.flushPendingTextHighlightEvent(), t ? (this.au(), this.sendLastMessageBeacon()) : this.sendEvents(), this.Mr.reset(), this.X.removeQueryParams()
                }
                onStart(t) {
                    var e, i, n, o, c, l, h;
                    t || (e = this.ru) === null || e === void 0 || e.start(), this.Ke.start(), this.vi.start(), this.Mr.start(), this.Bt.start(), (i = this.sc) === null || i === void 0 || i.start(), (n = this.xs) === null || n === void 0 || n.start(), t || this.iu.start(), (o = this.Ls) === null || o === void 0 || o.start(), (c = this.Wi) === null || c === void 0 || c.start(), (l = this.Yi) === null || l === void 0 || l.start(), (h = this.Xi) === null || h === void 0 || h.start(), csArray.prototype.forEach.call(this.Ki, f => {
                        this.le(f)
                    }), this.Ki = []
                }
                collectInitialEvents() {
                    var t;
                    (t = this.sc) === null || t === void 0 || t.collectInitialEvents()
                }
                onIframeAnalysisBrowserEvent(t) {
                    this.le(t)
                }
                onIframeAnalysisUserEvent(t) {
                    this.Ut(t)
                }
                onExternalEvent(t) {
                    this.Z(t)
                }
                le(t) {
                    this.isStarted && this.F.isCurrentPageviewValid() && this.Z(t)
                }
                Ut(t) {
                    this.isStarted && (this.F.refreshSession(), this.F.isSessionValid() && this.Z(t))
                }
                Z(t) {
                    this.Ze.addEvent(this.ET(t)), this.Ze.isFull() && this.sendEvents(), this.E.emitDebugEvents && this.yi.emit("analysisEvent", { ...t,
                        typeName: z[t.type]
                    })
                }
                ET(t) {
                    return t.ts = this.Ji(), t
                }
                au() {
                    this.Me.setQueryParams({
                        hlm: "true"
                    }), this.ic = !0
                }
                sendLastMessageBeacon() {
                    this.Me.removeQueryParams(["i"]), this.Me.setQueryParams(this.su.getRequestParameters()), this.Me.setQueryParams(this.eu.getRequestParameters()), this.Me.send(this.Ze.stringifyEvents()), this.Me.removeQueryParams(["hlm"]), this.ic = !1
                }
                sendEvents() {
                    this.Ze.isEmpty() || (this.Me.removeQueryParams(["i"]), this.X.setQueryParams(this.su.getRequestParameters()), this.X.setQueryParams(this.eu.getRequestParameters()), this.X.send(this.Ze.getEvents()), this.Ze.clearEvents())
                }
                onStop() {
                    var t, e, i, n, o, c, l;
                    this.Ke.stop(), this.vi.stop(), this.Mr.stop(), this.Bt.stop(), this.iu.stop(), (t = this.sc) === null || t === void 0 || t.stop(), (e = this.Ls) === null || e === void 0 || e.stop(), (i = this.xs) === null || i === void 0 || i.stop(), (n = this.Wi) === null || n === void 0 || n.stop(), this.Ze.empty(), (o = this.ru) === null || o === void 0 || o.stop(), (c = this.Yi) === null || c === void 0 || c.stop(), (l = this.Xi) === null || l === void 0 || l.stop()
                }
                ou() {
                    this.ms = M.now()
                }
                Ji() {
                    return M.now() - this.ms
                }
                nu() {
                    this.Ke.onEvent(t => {
                        var e, i;
                        t !== Kt.Visible && ((e = this.Ls) === null || e === void 0 || e.flushPendingKeyboardNavigationEvent(), (i = this.xs) === null || i === void 0 || i.flushPendingTextHighlightEvent(), t === Kt.PagehideVisible ? this.au() : t === Kt.PagehideHidden ? (this.au(), this.sendLastMessageBeacon()) : (!this.Ze.isEmpty() || this.ic) && this.sendLastMessageBeacon())
                    })
                }
                yT(t) {
                    try {
                        (!this.Ze.isEmpty() || this.ic) && this.oe.save({
                            requestParameters: t,
                            events: this.Ze.getEvents()
                        })
                    } catch {}
                }
                pushSubmitCommandEvent(t, e) {
                    if (!ff(t) || !wi(e)) throw new Ct(Sl[0]);
                    let i = {
                        status: t,
                        type: z.SUBMIT_COMMAND,
                        ts: 0,
                        tgt: this.Q.getElementPath(e)
                    };
                    i.tgt !== Ae.INVALID_ELEMENT && this.le(i)
                }
                pushCustomEvent(t, e, i) {
                    if (!(q(t) && !zn(t)) || i !== void 0 && !tc(i)) throw new Ct(Bn[0]);
                    let n = wy.buildCustomEvent(t, e, i),
                        o = Pt.buildFromCustomEvent(n, this.Ft);
                    this.isStarted ? this.le(o) : csArray.prototype.push.call(this.Ki, o)
                }
            }
            return s
        })(),
        Pi = (() => {
            class s {
                isEventTypeSupported(t) {
                    return csArray.prototype.indexOf.call(this.supportedEventTypes, t) !== -1
                }
                enhanceAnalysisEvent(t, e) {
                    return this.isEventTypeSupported(e.type) ? this.baseEnhanceAnalysisEvent(t, e) : e
                }
            }
            return s
        })(),
        Ty = (() => {
            class s extends Pi {
                constructor() {
                    super(...arguments), this.supportedEventTypes = [z.CHANGE], this.ST = ["text", "email", "number", "search", "tel", "url", "password"]
                }
                baseEnhanceAnalysisEvent(t, e) {
                    let i = mt(t);
                    return Er(i) && csArray.prototype.indexOf.call(this.ST, i.type) >= 0 && (e.isBlank = i.value === ""), e
                }
            }
            return s
        })(),
        Ft = (() => {
            let s;
            return function(r) {
                r[r.ANONYMIZED = 0] = "ANONYMIZED", r[r.CAPTURED = 1] = "CAPTURED", r[r.MASKED = 2] = "MASKED", r[r.ENCRYPTED = 3] = "ENCRYPTED"
            }(s || (s = {})), s
        })();
    var ul = (() => {
            class s extends Pi {
                constructor(t) {
                    super(), this.pt = t, this.supportedEventTypes = [z.MOUSEDOWN, z.MOUSEUP, z.CLICK, z.MOUSEOVER, z.TAP, z.DRAG, z.FLICK, z.SUBMIT, z.CHANGE]
                }
                baseEnhanceAnalysisEvent(t, e) {
                    return e.tgt || (e.tgt = this.pt.getEventTargetPath(t)), e
                }
            }
            return s
        })(),
        ka = 65535,
        by = (() => {
            let s;
            return function(r) {
                function t(e) {
                    let i = mt(e);
                    if (!i || !ct(i) || !Ze(i.getBoundingClientRect) || !Mt(e.pageX) || !Mt(e.pageY)) return {
                        xRel: -1,
                        yRel: -1,
                        valid: !1
                    };
                    let n = i.getBoundingClientRect(),
                        o = e.pageX - n.left - gt.windowOffsetX(),
                        c = e.pageY - n.top - gt.windowOffsetY();
                    i !== document.documentElement && (o += i.scrollLeft, c += i.scrollTop);
                    let l = Math.max(i.scrollWidth, n.width),
                        h = Math.max(i.scrollHeight, n.height),
                        f = Math.round(o / l * ka),
                        d = Math.round(c / h * ka);
                    return {
                        xRel: f,
                        yRel: d,
                        valid: !0
                    }
                }
                r.getRelativePosition = t
            }(s || (s = {})), s
        })(),
        Ry = (() => {
            class s extends Pi {
                constructor(t, e) {
                    super(), this.Ts = t, this.pt = e, this.supportedEventTypes = [z.MOUSEMOVE, z.CLICK], this.du = ""
                }
                baseEnhanceAnalysisEvent(t, e) {
                    let {
                        valid: i,
                        xRel: n,
                        yRel: o
                    } = by.getRelativePosition(t);
                    if (i) {
                        let c = this.pt.getEventTargetPath(t);
                        c !== Ae.INVALID_ELEMENT && (e.xRel = n, e.yRel = o, e.type === z.MOUSEMOVE && (c !== this.du || this.Ts.iframesTracking ? (this.du = c, e.tgtHM = c, this.Ts.isChild || (e.tgtHMH = Ic(e.tgtHM))) : e.tgtHM = ""))
                    } else e.type === z.MOUSEMOVE && (this.du = "");
                    return e
                }
            }
            return s
        })(),
        dl = (() => {
            class s extends Pi {
                constructor(t, e) {
                    super(), this.pt = t, this.Gt = e, this.supportedEventTypes = [z.CLICK, z.SUBMIT, z.CHANGE, z.TAP]
                }
                baseEnhanceAnalysisEvent(t, e) {
                    let i = this.Gt.getSensitiveStatus().useAnonymization,
                        {
                            path: n,
                            hierarchy: o
                        } = this.pt.getEventTargetPathAndHierarchy(t, i);
                    return e.tgt = n, e.hrchy = o, e
                }
            }
            return s
        })(),
        La = 100,
        fl = (() => {
            class s extends Pi {
                constructor(t, e, i) {
                    super(), this.E = t, this.Gt = e, this.D = i, this.supportedEventTypes = [z.TAP, z.CLICK, z.SUBMIT]
                }
                DT(t) {
                    let e = "",
                        i = document.createTreeWalker(t, NodeFilter.SHOW_TEXT),
                        n = i.nextNode();
                    for (; n;) {
                        if (e += n.textContent, Qn(n.parentElement) || Jn(n.parentElement) || this.Gt.getElementSensitiveStatus(n.parentElement) !== Ft.CAPTURED) return !0;
                        if (csString.prototype.trim.call(e).length >= La) break;
                        n = i.nextNode()
                    }
                    return !1
                }
                kT(t) {
                    let e = Rn(t, "button,a");
                    return e || (this.E.collectTargetText === An.ButtonAndLinkOnly ? null : t)
                }
                baseEnhanceAnalysisEvent(t, e) {
                    if (wi(csEventtarget.apply(t))) {
                        let i = this.kT(csEventtarget.apply(t));
                        if (i && q(i.textContent) && !this.DT(i) && !this.D.hasPII(i.textContent, this.E.anonymizeDigits)) {
                            let n = Et.truncate(csString.prototype.trim.call(i.textContent), La);
                            n.length > 0 && (e.text = n)
                        }
                    }
                    return e
                }
            }
            return s
        })();

    function Cy(s, r, t, e, i) {
        let n = [];
        return csArray.prototype.push.call(n, new Ry(s, r)), s.isCollectTargetTextEnabled() && csArray.prototype.push.call(n, new fl(s, t, new qs)), s.collectHierarchy && csArray.prototype.push.call(n, new dl(r, t)), csArray.prototype.push.call(n, new Ty, new ul(r)), n
    }

    function Iy(s, r, t, e, i) {
        let n = [];
        return s.isCollectTargetTextEnabled() && csArray.prototype.push.call(n, new fl(s, t, new qs)), s.collectHierarchy && csArray.prototype.push.call(n, new dl(r, t)), csArray.prototype.push.call(n, new ul(r)), n
    }
    var Py = (() => {
            class s extends kt {
                constructor(t, e) {
                    super(), this.oe = t, this.X = e, this.Og = () => {
                        document.visibilityState === "visible" && this.Ng()
                    }
                }
                onStart() {
                    this.Ng(), this.Vh()
                }
                onStop() {
                    this.Uh()
                }
                getRecoveryStorage() {
                    return this.oe
                }
                Ng() {
                    let t = this.oe.recover();
                    if (t !== null) {
                        let {
                            requestParameters: e,
                            events: i
                        } = t;
                        this.X.send(i, e)
                    }
                }
                Vh() {
                    document.addEventListener("visibilitychange", this.Og)
                }
                Uh() {
                    document.removeEventListener("visibilitychange", this.Og)
                }
            }
            return s
        })(),
        Oy = (() => {
            class s {
                constructor(t) {
                    this.Pr = t
                }
                save(t) {
                    localStorage.setItem(this.Pr, csJSON.stringify(t))
                }
                clear() {
                    localStorage.removeItem(this.Pr)
                }
                recover() {
                    let t = localStorage.getItem(this.Pr);
                    if (t === null) return null;
                    let e = null;
                    try {
                        e = csJSON.parse(t)
                    } catch {
                        F.error(`Invalid item in localStorage.
         (key:${this.Pr}; value:${t})`)
                    } finally {
                        this.clear()
                    }
                    return e
                }
            }
            return s
        })(),
        Ny = 50,
        My = (() => {
            class s {
                constructor(t = []) {
                    this.Ht = t
                }
                stringifyEvents() {
                    return csJSON.stringify(this.Ht)
                }
                addEvent(t) {
                    csArray.prototype.push.call(this.Ht, t)
                }
                eventsCount() {
                    return this.Ht.length
                }
                clearEvents() {
                    this.Ht = []
                }
                empty() {
                    this.clearEvents()
                }
                isFull() {
                    return this.eventsCount() >= Ny
                }
                isEmpty() {
                    return this.Ht.length === 0
                }
                getEvents() {
                    return this.Ht
                }
            }
            return s
        })(),
        Dy = (() => {
            class s {
                constructor(t, e, i, n = ["submit"]) {
                    this.Ft = t, this.pt = e, this.$t = i, this.LT = n, this.Mg = "select, select *, input, textarea", this.xT = "select, select *, input, textarea", this.Dg = "a, a *, button, button *, select, select *, input, textarea", this.co = "input, select, textarea", this.VT = "form", this.oc = 150, this.UT = 400, this.kg = !1, this.lo = gi((o, c) => this.scrollListener(o, c), this.oc), this.Lg = gi(o => this.resizeListener(o), this.oc), this.jT = _r(o => this.mouseMoveListener(o), this.UT), this.HT = [{
                        boundElement: window,
                        type: "resize",
                        listener: () => this.Lg()
                    }, {
                        boundElement: document,
                        type: "scroll",
                        listener: o => this.lo(o)
                    }, {
                        boundElement: window,
                        type: "mousemove",
                        listener: o => {
                            this.jT(Cf(o))
                        }
                    }, {
                        boundElement: document,
                        type: "mousedown",
                        listener: o => this.mouseDownListener(o)
                    }, {
                        boundElement: document,
                        type: "mouseup",
                        listener: o => this.mouseUpListener(o)
                    }, {
                        boundElement: document,
                        type: "click",
                        listener: o => this.clickListener(o)
                    }], this.xg = [{
                        type: "change",
                        listener: this.$t.on(this.xT, o => this.changeListener(o))
                    }, {
                        type: "submit",
                        listener: this.$t.on(this.VT, o => this.submitListener(o))
                    }], this.BT = [{
                        boundElement: document,
                        type: "mouseover",
                        listener: this.$t.on(this.Dg, o => this.mouseOverListener(o))
                    }, {
                        boundElement: document,
                        type: "mouseout",
                        listener: this.$t.on(this.Dg, o => this.mouseOutListener(o))
                    }, {
                        boundElement: document,
                        type: "focusin",
                        listener: this.$t.on(this.Mg, o => this.focusInListener(o))
                    }, {
                        boundElement: document,
                        type: "focusout",
                        listener: this.$t.on(this.Mg, o => this.focusOutListener(o))
                    }, {
                        boundElement: document,
                        type: "keyup",
                        listener: this.$t.on(this.co, o => this.keyUpListener(o))
                    }, {
                        boundElement: document,
                        type: "keydown",
                        listener: this.$t.on(this.co, o => this.keyDownListener(o))
                    }, {
                        boundElement: document,
                        type: "copy",
                        listener: this.$t.on(this.co, o => this.copyListener(o))
                    }, {
                        boundElement: document,
                        type: "cut",
                        listener: this.$t.on(this.co, o => this.cutListener(o))
                    }, {
                        boundElement: document,
                        type: "paste",
                        listener: this.$t.on(this.co, o => this.pasteListener(o))
                    }, ...csArray.prototype.map.call(this.xg, o => ({ ...o,
                        boundElement: document
                    }))], this.B = {}, this.zl = (o, c) => {
                        switch (c) {
                            case "initial":
                            case "added":
                                this.Gi(o);
                                break;
                            case "removed":
                                this.$i(o);
                                break
                        }
                    }, this.ge = new Ws(this.zl), this.Kh()
                }
                Gi(t) {
                    if (hr(t)) {
                        let e = this.Vg();
                        csArray.prototype.forEach.call(e, i => Ot(i))
                    } else {
                        let e = this.Ug();
                        csArray.prototype.forEach.call(e, i => {
                            Ot({ ...i,
                                boundElement: t
                            })
                        })
                    }
                }
                $i(t) {
                    if (hr(t)) {
                        let e = this.Vg();
                        csArray.prototype.forEach.call(e, i => Nt(i))
                    } else {
                        let e = this.Ug();
                        csArray.prototype.forEach.call(e, i => {
                            Nt({ ...i,
                                boundElement: t
                            })
                        })
                    }
                }
                onEvent(t) {
                    this.V = t
                }
                start() {
                    this.ge.observe(), this.Gi(document), this.resizeListener()
                }
                stop() {
                    this.$i(document), this.ge.disconnect()
                }
                flushPendingDebouncedListeners() {
                    this.lo.flushPending(), this.Lg.flushPending()
                }
                jg(t) {
                    return csArray.prototype.some.call(this.LT, e => e === t)
                }
                Ug() {
                    return this.$t.isMatchesSelectorSupported() ? csArray.prototype.filter.call(this.xg, t => !this.jg(t.type)) : (F.warn("Element.matches is not implemented yet"), [])
                }
                Vg() {
                    let t = [];
                    return csArray.prototype.push.call(t, ...this.HT), this.$t.isMatchesSelectorSupported() ? csArray.prototype.push.call(t, ...this.BT) : F.warn("Element.matches is not implemented yet"), csArray.prototype.filter.call(t, e => !this.jg(e.type))
                }
                resizeListener(t) {
                    let e = Hs.getScrollContainer(),
                        i = wi(e);
                    i && (this.kg = !0);
                    let n = {
                        type: z.RESIZE,
                        ts: 0,
                        x: i ? e.clientWidth : gt.windowWidth(),
                        y: i ? e.clientHeight : gt.windowHeight()
                    };
                    t !== void 0 && (n.d = t), this.V(n)
                }
                scrollListener(t, e) {
                    let i = Hs.isEventOnScrollContainer(e);
                    !this.kg && i && this.resizeListener();
                    let n = {
                            type: z.SCROLL,
                            ts: 0,
                            x: i ? csEventtarget.apply(e).scrollLeft : gt.windowOffsetX(),
                            y: i ? csEventtarget.apply(e).scrollTop : gt.windowOffsetY(),
                            d: t
                        },
                        o = Pt.buildFromAnalysisEvent(e, n, this.Ft);
                    this.V(o)
                }
                mouseMoveListener(t) {
                    let e = {
                            type: z.MOUSEMOVE,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.V(i)
                }
                mouseDownListener(t) {
                    let e = {
                            type: z.MOUSEDOWN,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                mouseUpListener(t) {
                    let e = {
                            type: z.MOUSEUP,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                clickListener(t) {
                    let e = {
                            type: z.CLICK,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                mouseOverListener(t) {
                    let e = {
                            type: z.MOUSEOVER,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                mouseOutListener(t) {
                    let e = {
                            type: z.MOUSEOUT,
                            ts: 0,
                            x: t.pageX,
                            y: t.pageY,
                            tgt: this.pt.getEventTargetPath(t)
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                focusInListener(t) {
                    let e = {
                            type: z.FOCUSIN,
                            ts: 0,
                            tgt: this.pt.getEventTargetPath(t)
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                focusOutListener(t) {
                    let e = {
                            type: z.FOCUSOUT,
                            ts: 0,
                            tgt: this.pt.getEventTargetPath(t)
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                changeListener(t) {
                    let e = {
                            type: z.CHANGE,
                            ts: 0,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                submitListener(t) {
                    let e = {
                            type: z.SUBMIT,
                            ts: 0,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    this.ve(i)
                }
                copyListener(t) {
                    let e = {
                        type: z.COMMAND,
                        ts: 0,
                        tgt: this.pt.getEventTargetPath(t),
                        key: js.COPY
                    };
                    this.ve(e)
                }
                cutListener(t) {
                    let e = {
                        type: z.COMMAND,
                        ts: 0,
                        tgt: this.pt.getEventTargetPath(t),
                        key: js.CUT
                    };
                    this.ve(e)
                }
                pasteListener(t) {
                    let e = {
                        type: z.COMMAND,
                        ts: 0,
                        tgt: this.pt.getEventTargetPath(t),
                        key: js.PASTE
                    };
                    this.ve(e)
                }
                keyUpListener(t) {
                    let e = {
                        type: z.KEYUP,
                        ts: 0,
                        tgt: this.pt.getEventTargetPath(t),
                        key: this.Hg(t)
                    };
                    this.ve(e)
                }
                keyDownListener(t) {
                    let e = {
                        type: z.KEYDOWN,
                        ts: 0,
                        tgt: this.pt.getEventTargetPath(t),
                        key: this.Hg(t)
                    };
                    this.ve(e)
                }
                Hg(t) {
                    let e = this.B[t.key];
                    return e === void 0 ? W.ALPHANUMERICAL : e
                }
                ve(t) {
                    Cc(t) && t.tgt !== Ae.INVALID_ELEMENT && this.V(t)
                }
                Kh() {
                    this.B[" "] = W.SPACE, this.B.Spacebar = W.SPACE, this.B.Enter = W.ENTER, this.B.Backspace = W.BACKSPACE, this.B.Delete = W.DELETE, this.B.ArrowUp = W.ARROWUP, this.B.ArrowDown = W.ARROWDOWN, this.B.ArrowLeft = W.ARROWLEFT, this.B.ArrowRight = W.ARROWRIGHT, this.B.Up = W.ARROWUP, this.B.Down = W.ARROWDOWN, this.B.Left = W.ARROWLEFT, this.B.Right = W.ARROWRIGHT, this.B.CapsLock = W.CAPSLOCK, this.B.Shift = W.SHIFT, this.B.Tab = W.TAB
                }
            }
            return B([V("Event handler type: resize")], s.prototype, "resizeListener", null), B([V("Event handler type: scroll")], s.prototype, "scrollListener", null), B([V("Event handler type: mouseMove"), bt()], s.prototype, "mouseMoveListener", null), B([V("Event handler type: mouseDown"), bt()], s.prototype, "mouseDownListener", null), B([V("Event handler type: mouseUp"), bt()], s.prototype, "mouseUpListener", null), B([V("Event handler type: click"), bt()], s.prototype, "clickListener", null), B([V("Event handler type: mouseOver"), bt()], s.prototype, "mouseOverListener", null), B([V("Event handler type: mouseOut"), bt()], s.prototype, "mouseOutListener", null), B([V("Event handler type: focusIn")], s.prototype, "focusInListener", null), B([V("Event handler type: focusOut")], s.prototype, "focusOutListener", null), B([V("Event handler type: change")], s.prototype, "changeListener", null), B([V("Event handler type: submit"), bt()], s.prototype, "submitListener", null), B([V("Event handler type: copy")], s.prototype, "copyListener", null), B([V("Event handler type: cut")], s.prototype, "cutListener", null), B([V("Event handler type: paste")], s.prototype, "pasteListener", null), B([V("Event handler type: keyup")], s.prototype, "keyUpListener", null), B([V("Event handler type: keydown")], s.prototype, "keyDownListener", null), s
        })(),
        ky = (() => {
            class s {
                constructor(t, e, i) {
                    this.Ft = t, this.Bt = e, this.Pt = i
                }
                processGesture(t, e) {
                    switch (t.type) {
                        case yt.TAP:
                            this.FT(e);
                            break;
                        case yt.FLICK:
                            this.GT(t, e);
                            break;
                        case yt.DRAG:
                            this.$T(t, e);
                            break;
                        default:
                            break
                    }
                }
                FT(t) {
                    let e = {
                            type: z.TAP,
                            ts: 0,
                            x: 0,
                            y: 0,
                            tgt: ""
                        },
                        i = Pt.buildFromAnalysisEvent(t, e, this.Ft);
                    i.tgt !== Ae.INVALID_ELEMENT && this.V(i)
                }
                $T(t, e) {
                    var i, n;
                    let o = {
                        type: z.DRAG,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    };
                    !((i = this.Pt) === null || i === void 0) && i.collectGestureDistance && (o.distance = t.distance), !((n = this.Pt) === null || n === void 0) && n.collectGestureVelocity && (o.velocity = t.velocity);
                    let c = Pt.buildFromAnalysisEvent(e, o, this.Ft);
                    c.tgt !== Ae.INVALID_ELEMENT && this.V(c)
                }
                GT(t, e) {
                    var i, n;
                    let o = {
                        type: z.FLICK,
                        ts: 0,
                        fd: t.direction,
                        tgt: ""
                    };
                    !((i = this.Pt) === null || i === void 0) && i.collectGestureDistance && (o.distance = t.distance), !((n = this.Pt) === null || n === void 0) && n.collectGestureVelocity && (o.velocity = t.velocity);
                    let c = Pt.buildFromAnalysisEvent(e, o, this.Ft);
                    c.tgt !== Ae.INVALID_ELEMENT && this.V(c)
                }
                onEvent(t) {
                    this.V = t
                }
                start() {
                    this.Bt.subscribe(s.Bg, (t, e) => this.processGesture(t, e))
                }
                stop() {
                    this.Bt.unsubscribe(s.Bg)
                }
            }
            return s.Bg = "AnalysisGestureTracker", B([bt()], s.prototype, "processGesture", null), s
        })();
    var Ly = (() => {
            class s {
                constructor() {
                    this.Jg = 100, this.fo = 0, this.po = gt.documentHeight(), this.Qg = {
                        boundElement: document,
                        type: "scroll",
                        listener: t => this.maxScrollRateListener(t)
                    }, this.fo = this.Su(Hs.getScrollContainer()).maxScrollRate
                }
                onEvent(t) {
                    this.V = t
                }
                start() {
                    Ot(this.Qg)
                }
                stop() {
                    Nt(this.Qg)
                }
                reset() {
                    let t = Hs.getScrollContainer(),
                        {
                            maxScrollRate: e,
                            maxDocumentHeight: i
                        } = this.Su(t);
                    this.po = i, this.fo = e, this.V()
                }
                Su(t) {
                    let e = 0,
                        i = 0;
                    if (t === null) i = gt.documentHeight(), e = this.sb(i);
                    else {
                        let n = this.ib(t);
                        i = this.Zg(t, n), e = this.rb(t, n)
                    }
                    return {
                        maxScrollRate: e,
                        maxDocumentHeight: i
                    }
                }
                maxScrollRateListener(t) {
                    let e = null;
                    Hs.isEventOnScrollContainer(t) && (e = csEventtarget.apply(t));
                    let {
                        maxScrollRate: i,
                        maxDocumentHeight: n
                    } = this.Su(e);
                    (i > this.fo || n > this.po) && (this.fo = i, n > this.po && (this.po = n), this.V())
                }
                sb(t) {
                    let e = Math.round(this.nb() / t * 100);
                    return Math.min(e, this.Jg)
                }
                nb() {
                    let t = gt.windowHeight();
                    return gt.windowOffsetY() + t
                }
                rb(t, e) {
                    let i = t.scrollTop + t.clientHeight + t.getBoundingClientRect().top + e,
                        n = this.Zg(t, e),
                        o = Math.round(i / n * 100);
                    return Math.min(o, this.Jg)
                }
                ib(t) {
                    let e = window.getComputedStyle(t).paddingTop || "0px";
                    return parseInt(e, 10)
                }
                Zg(t, e) {
                    return t.scrollHeight + t.getBoundingClientRect().top + e
                }
                getRequestParameters() {
                    return {
                        sr: `${this.fo}`,
                        mdh: `${this.po}`
                    }
                }
            }
            return B([V("MaxScrollRate handler")], s.prototype, "maxScrollRateListener", null), s
        })(),
        xy = (() => {
            class s {
                constructor(t) {
                    this.go = t, this.mo = e => this.processMetric(e), this.U = !1
                }
                onEvent(t) {
                    this.V = t
                }
                start() {
                    this.U || (this.U = !0, this.go.onFCP(this.mo), this.go.onCLS(this.mo), this.go.onLCP(this.mo), this.go.onTTFB(this.mo), this.go.onINP(this.mo))
                }
                stop() {
                    this.U = !1
                }
                processMetric(t) {
                    if (!this.U) return;
                    let e = {
                        type: z.PERFORMANCE,
                        name: t.name,
                        val: t.value,
                        ts: 0
                    };
                    this.V(e)
                }
            }
            return B([V("Performance metric handler")], s.prototype, "processMetric", null), s
        })(),
        Vy = (() => {
            class s {
                constructor(t) {
                    this.hc = t.performance
                }
                getRequestParameters() {
                    if (this.ob()) return {};
                    let t = this.ab();
                    return {
                        str: t.startRender,
                        di: t.domInteractive,
                        dc: t.domComplete,
                        fl: t.fullyLoaded
                    }
                }
                ab() {
                    let t = this.hc.timing;
                    return {
                        startRender: `${t.domLoading-t.requestStart}`,
                        domInteractive: `${t.domInteractive-t.requestStart}`,
                        domComplete: `${t.domComplete-t.requestStart}`,
                        fullyLoaded: `${t.loadEventEnd-t.requestStart}`
                    }
                }
                ob() {
                    return !(this.hc && this.hc.timing && this.hc.timing.loadEventEnd > 0)
                }
            }
            return s
        })();
    var pl = -1,
        Xs = s => {
            addEventListener("pageshow", r => {
                r.persisted && (pl = r.timeStamp, s(r))
            }, !0)
        },
        ue = (s, r, t, e) => {
            let i, n;
            return o => {
                r.value >= 0 && (o || e) && (n = r.value - (i != null ? i : 0), (n || i === void 0) && (i = r.value, r.delta = n, r.rating = ((c, l) => c > l[1] ? "poor" : c > l[0] ? "needs-improvement" : "good")(r.value, t), s(r)))
            }
        },
        mo = s => {
            requestAnimationFrame(() => requestAnimationFrame(() => s()))
        },
        yo = () => {
            let s = performance.getEntriesByType("navigation")[0];
            if (s && s.responseStart > 0 && s.responseStart < performance.now()) return s
        },
        Oi = () => {
            var r;
            let s = yo();
            return (r = s == null ? void 0 : s.activationStart) != null ? r : 0
        },
        de = (s, r = -1) => {
            let t = yo(),
                e = "navigate";
            return pl >= 0 ? e = "back-forward-cache" : t && (document.prerendering || Oi() > 0 ? e = "prerender" : document.wasDiscarded ? e = "restore" : t.type && (e = t.type.replace(/_/g, "-"))), {
                name: s,
                value: r,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                navigationType: e
            }
        },
        an = new WeakMap;

    function Eo(s, r) {
        return an.get(s) || an.set(s, new r), an.get(s)
    }
    var xn = class {
            constructor() {
                ge(this, "t");
                ge(this, "i", 0);
                ge(this, "o", [])
            }
            h(r) {
                var i;
                if (r.hadRecentInput) return;
                let t = this.o[0],
                    e = this.o.at(-1);
                this.i && t && e && r.startTime - e.startTime < 1e3 && r.startTime - t.startTime < 5e3 ? (this.i += r.value, this.o.push(r)) : (this.i = r.value, this.o = [r]), (i = this.t) == null || i.call(this, r)
            }
        },
        Ni = (s, r, t = {}) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(s)) {
                    let e = new PerformanceObserver(i => {
                        Promise.resolve().then(() => {
                            r(i.getEntries())
                        })
                    });
                    return e.observe({
                        type: s,
                        buffered: !0,
                        ...t
                    }), e
                }
            } catch {}
        },
        So = s => {
            let r = !1;
            return () => {
                r || (s(), r = !0)
            }
        },
        Vs = -1,
        xa = () => document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0,
        mr = s => {
            document.visibilityState === "hidden" && Vs > -1 && (Vs = s.type === "visibilitychange" ? s.timeStamp : 0, Uy())
        },
        Va = () => {
            addEventListener("visibilitychange", mr, !0), addEventListener("prerenderingchange", mr, !0)
        },
        Uy = () => {
            removeEventListener("visibilitychange", mr, !0), removeEventListener("prerenderingchange", mr, !0)
        },
        gl = () => {
            var s;
            if (Vs < 0) {
                let r = Oi(),
                    t = document.prerendering || (s = globalThis.performance.getEntriesByType("visibility-state").filter(e => e.name === "hidden" && e.startTime > r)[0]) == null ? void 0 : s.startTime;
                Vs = t != null ? t : xa(), Va(), Xs(() => {
                    setTimeout(() => {
                        Vs = xa(), Va()
                    })
                })
            }
            return {
                get firstHiddenTime() {
                    return Vs
                }
            }
        },
        br = s => {
            document.prerendering ? addEventListener("prerenderingchange", () => s(), !0) : s()
        },
        Ua = [1800, 3e3],
        ml = (s, r = {}) => {
            br(() => {
                let t = gl(),
                    e, i = de("FCP"),
                    n = Ni("paint", o => {
                        for (let c of o) c.name === "first-contentful-paint" && (n.disconnect(), c.startTime < t.firstHiddenTime && (i.value = Math.max(c.startTime - Oi(), 0), i.entries.push(c), e(!0)))
                    });
                n && (e = ue(s, i, Ua, r.reportAllChanges), Xs(o => {
                    i = de("FCP"), e = ue(s, i, Ua, r.reportAllChanges), mo(() => {
                        i.value = performance.now() - o.timeStamp, e(!0)
                    })
                }))
            })
        },
        ja = [.1, .25],
        jy = (s, r = {}) => {
            ml(So(() => {
                let t, e = de("CLS", 0),
                    i = Eo(r, xn),
                    n = c => {
                        for (let l of c) i.h(l);
                        i.i > e.value && (e.value = i.i, e.entries = i.o, t())
                    },
                    o = Ni("layout-shift", n);
                o && (t = ue(s, e, ja, r.reportAllChanges), document.addEventListener("visibilitychange", () => {
                    document.visibilityState === "hidden" && (n(o.takeRecords()), t(!0))
                }), Xs(() => {
                    i.i = 0, e = de("CLS", 0), t = ue(s, e, ja, r.reportAllChanges), mo(() => t())
                }), setTimeout(t))
            }))
        },
        yl = 0,
        cn = 1 / 0,
        tr = 0,
        Hy = s => {
            for (let r of s) r.interactionId && (cn = Math.min(cn, r.interactionId), tr = Math.max(tr, r.interactionId), yl = tr ? (tr - cn) / 7 + 1 : 0)
        },
        Vn, Ha = () => {
            var s;
            return Vn ? yl : (s = performance.interactionCount) != null ? s : 0
        },
        By = () => {
            "interactionCount" in performance || Vn || (Vn = Ni("event", Hy, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        Ba = 0,
        Un = class {
            constructor() {
                ge(this, "u", []);
                ge(this, "l", new Map);
                ge(this, "m");
                ge(this, "p")
            }
            v() {
                Ba = Ha(), this.u.length = 0, this.l.clear()
            }
            P() {
                let r = Math.min(this.u.length - 1, Math.floor((Ha() - Ba) / 50));
                return this.u[r]
            }
            h(r) {
                var i, n;
                if ((i = this.m) == null || i.call(this, r), !r.interactionId && r.entryType !== "first-input") return;
                let t = this.u.at(-1),
                    e = this.l.get(r.interactionId);
                if (e || this.u.length < 10 || r.duration > t.T) {
                    if (e ? r.duration > e.T ? (e.entries = [r], e.T = r.duration) : r.duration === e.T && r.startTime === e.entries[0].startTime && e.entries.push(r) : (e = {
                            id: r.interactionId,
                            entries: [r],
                            T: r.duration
                        }, this.l.set(e.id, e), this.u.push(e)), this.u.sort((o, c) => c.T - o.T), this.u.length > 10) {
                        let o = this.u.splice(10);
                        for (let c of o) this.l.delete(c.id)
                    }(n = this.p) == null || n.call(this, e)
                }
            }
        },
        El = s => {
            let r = globalThis.requestIdleCallback || setTimeout;
            document.visibilityState === "hidden" ? s() : (r(s = So(s)), document.addEventListener("visibilitychange", s, {
                once: !0
            }))
        },
        Fa = [200, 500],
        Fy = (s, r = {}) => {
            globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype && br(() => {
                var c;
                By();
                let t, e = de("INP"),
                    i = Eo(r, Un),
                    n = l => {
                        El(() => {
                            for (let f of l) i.h(f);
                            let h = i.P();
                            h && h.T !== e.value && (e.value = h.T, e.entries = h.entries, t())
                        })
                    },
                    o = Ni("event", n, {
                        durationThreshold: (c = r.durationThreshold) != null ? c : 40
                    });
                t = ue(s, e, Fa, r.reportAllChanges), o && (o.observe({
                    type: "first-input",
                    buffered: !0
                }), document.addEventListener("visibilitychange", () => {
                    document.visibilityState === "hidden" && (n(o.takeRecords()), t(!0))
                }), Xs(() => {
                    i.v(), e = de("INP"), t = ue(s, e, Fa, r.reportAllChanges)
                }))
            })
        },
        jn = class {
            constructor() {
                ge(this, "m")
            }
            h(r) {
                var t;
                (t = this.m) == null || t.call(this, r)
            }
        },
        Ga = [2500, 4e3],
        Gy = (s, r = {}) => {
            br(() => {
                let t = gl(),
                    e, i = de("LCP"),
                    n = Eo(r, jn),
                    o = l => {
                        r.reportAllChanges || (l = l.slice(-1));
                        for (let h of l) n.h(h), h.startTime < t.firstHiddenTime && (i.value = Math.max(h.startTime - Oi(), 0), i.entries = [h], e())
                    },
                    c = Ni("largest-contentful-paint", o);
                if (c) {
                    e = ue(s, i, Ga, r.reportAllChanges);
                    let l = So(() => {
                        o(c.takeRecords()), c.disconnect(), e(!0)
                    });
                    for (let h of ["keydown", "click", "visibilitychange"]) addEventListener(h, () => El(l), {
                        capture: !0,
                        once: !0
                    });
                    Xs(h => {
                        i = de("LCP"), e = ue(s, i, Ga, r.reportAllChanges), mo(() => {
                            i.value = performance.now() - h.timeStamp, e(!0)
                        })
                    })
                }
            })
        },
        $a = [800, 1800],
        Hn = s => {
            document.prerendering ? br(() => Hn(s)) : document.readyState !== "complete" ? addEventListener("load", () => Hn(s), !0) : setTimeout(s)
        },
        $y = (s, r = {}) => {
            let t = de("TTFB"),
                e = ue(s, t, $a, r.reportAllChanges);
            Hn(() => {
                let i = yo();
                i && (t.value = Math.max(i.responseStart - Oi(), 0), t.entries = [i], e(!0), Xs(() => {
                    t = de("TTFB", 0), e = ue(s, t, $a, r.reportAllChanges), e(!0)
                }))
            })
        },
        zy = (() => {
            class s {
                onFCP(t) {
                    try {
                        ml(t, {
                            reportAllChanges: !0
                        })
                    } catch {
                        $.counters.webVitalsErrors.count("FCP")
                    }
                }
                onCLS(t) {
                    try {
                        jy(t, {
                            reportAllChanges: !0
                        })
                    } catch {
                        $.counters.webVitalsErrors.count("CLS")
                    }
                }
                onLCP(t) {
                    try {
                        Gy(t, {
                            reportAllChanges: !0
                        })
                    } catch {
                        $.counters.webVitalsErrors.count("LCP")
                    }
                }
                onTTFB(t) {
                    try {
                        $y(t, {
                            reportAllChanges: !0
                        })
                    } catch {
                        $.counters.webVitalsErrors.count("TTFB")
                    }
                }
                onINP(t) {
                    try {
                        Fy(t, {
                            reportAllChanges: !0
                        })
                    } catch {
                        $.counters.webVitalsErrors.count("INP")
                    }
                }
            }
            return s
        })();
    var qy = "csAnalysisEventsPersisted",
        za = "v2/events",
        Sl = ["submit"],
        Bn = ["trackEvent"];
    var Wy = (() => {
        class s {
            constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C, P) {
                this.E = t, this.yt = e, this.O = i, this.Q = n, this.$t = o, this.S = c, this.F = l, this.Bt = h, this.mt = f, this.ce = d, this.J = m, this.Gt = E, this.vt = v, this.es = C, this.ss = P
            }
            init() {
                let t = new My,
                    e = this.ce.create(`${this.E.getTrackerUri()}/${za}`, "base64");
                this.xr = this._b(e), this.ue = this.wb(t, this.xr.getRecoveryStorage(), e), this.ue.init(), this.J.addListener(this.ue), this.mt.addListener(this.ue), this.S.register(Sl, (i, n) => {
                    this.ue.pushSubmitCommandEvent(i, n)
                }), this.S.register(Bn, i => {
                    if (!tc(i)) throw new Ct(Bn[0]);
                    this.ue.pushCustomEvent(i.name, i.source, i.properties)
                })
            }
            onStartTracking(t) {
                this.xr.start(), this.ue.start(t)
            }
            onAfterNaturalPageView() {
                this.ue.initStates()
            }
            onArtificialPageViewEnd(t) {
                this.ue.clearStates(!0), t && (this.ue.stop(), this.xr.stop())
            }
            onAfterArtificialPageView(t) {
                this.ue.initStates(), t && (this.ue.start(), this.xr.start()), this.ue.collectInitialEvents()
            }
            onBeforeSessionRenewal() {
                this.ue.clearStates(), this.ue.stop(), this.xr.stop()
            }
            onOptout() {
                this.ue.stop(), this.xr.stop()
            }
            wb(t, e, i) {
                var n, o;
                let c = new Vy(window),
                    l = new Ly,
                    h = Cy(this.E, this.Q, this.Gt, this.es, this.ss),
                    f = [];
                this.E.collectSubmit || csArray.prototype.push.call(f, "submit");
                let d = new Dy(h, this.Q, this.$t, f),
                    m = Iy(this.E, this.Q, this.Gt, this.es, this.ss),
                    E = new ky(m, this.Bt),
                    v = new xy(new zy),
                    C = new cl,
                    P, S, w, I = new ol(`${this.E.getTrackerUri()}/${za}`),
                    O = new Si(this.yt, this.O),
                    T, U, tt, ot;
                return new Ay(this.E, d, E, l, c, t, I, O, this.F, e, this.Q, v, C, i, h, P, S, w, T, U, tt, ot)
            }
            _b(t) {
                return new Py(new Oy(qy), t)
            }
        }
        return s
    })();
    var er = (() => {
            let s;
            return function(r) {
                r[r.NOT_NEEDED = 1] = "NOT_NEEDED", r[r.NOT_EXPRESSED = 2] = "NOT_EXPRESSED", r[r.WITHDRAWN = 3] = "WITHDRAWN", r[r.GRANTED = 4] = "GRANTED"
            }(s || (s = {})), s
        })(),
        Xe = (() => {
            let s;
            return function(r) {
                function t(n) {
                    return n.replayConsentRequiredForSession
                }
                r.isReplayConsentNeeded = t;

                function e(n) {
                    return n.collectState === N.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED || n.collectState === N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
                }
                r.isRecordingBlockedByConsent = e;

                function i(n) {
                    return n.collectState === N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
                }
                r.isRecordingWithDrawn = i
            }(s || (s = {})), s
        })(),
        Yy = (() => {
            class s {
                constructor(t, e, i, n) {
                    this.O = t, this.R = e, this.E = i, this.hs = n, this.mm = !1
                }
                isNaturalPageViewSent() {
                    return this.mm
                }
                setNaturalPageViewSent(t) {
                    this.mm = t
                }
                getTrackingContext() {
                    let t = this.R.getSession();
                    if (!t) return null;
                    let e = this.getSessionKey();
                    if (!e) return null;
                    let i = this.E.projectId,
                        n = this.E.uxaDomain,
                        o = t.pageNumber,
                        c = this.hs.getPageViewType(),
                        l = this.R.isReplayRecorded(),
                        h = this.Cb(t);
                    return {
                        projectId: i,
                        sessionKey: e,
                        pageNumber: o,
                        pageViewType: c,
                        isRecording: l,
                        uxaDomain: n,
                        recordingConsentState: h,
                        ...this.E.smbConfig
                    }
                }
                getSessionKey() {
                    let t = this.O.getVisitor();
                    return t ? `${t.id}.${t.visitsCount}` : null
                }
                Cb(t) {
                    return Xe.isReplayConsentNeeded(this.E) ? t.collectState === N.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED ? er.NOT_EXPRESSED : t.collectState === N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN ? er.WITHDRAWN : er.GRANTED : er.NOT_NEEDED
                }
            }
            return s
        })(),
        Xy = (() => {
            class s {
                constructor(t) {
                    this.kt = t, this.de = []
                }
                handleCommand(t) {
                    if (Ze(t) && (this.Eo(t), this.kt.isNaturalPageViewSent())) {
                        let e = this.kt.getTrackingContext();
                        e !== null && this.zt(t, e)
                    }
                }
                Eo(t) {
                    csArray.prototype.push.call(this.de, t)
                }
                executeRegisteredCallbacks() {
                    let t = this.kt.getTrackingContext();
                    t !== null && csArray.prototype.map.call(this.de, e => this.zt(e, t))
                }
                zt(t, e) {
                    csSetTimeout(() => {
                        t(e)
                    })
                }
            }
            return s
        })(),
        Ky = (() => {
            class s {
                constructor(t) {
                    this.kt = t, this.Zi = []
                }
                handleCommand(t) {
                    if (this.kt.isNaturalPageViewSent()) return this.Ib(t);
                    this.So(t)
                }
                Ib(t) {
                    let e = this.kt.getSessionKey();
                    return this.ym(t) && e !== null && this.zt(t.callback, e), e
                }
                So(t) {
                    this.ym(t) && csArray.prototype.push.call(this.Zi, t.callback)
                }
                flushPendingCallbacks() {
                    let t = this.kt.getSessionKey();
                    t !== null && csArray.prototype.forEach.call(this.Zi, e => {
                        this.zt(e, t)
                    }), this.Zi = []
                }
                ym(t) {
                    return t && typeof t.callback == "function"
                }
                zt(t, e) {
                    csSetTimeout(() => {
                        t(e)
                    })
                }
            }
            return s
        })();

    function Jy(s, r) {
        let {
            isRecording: t,
            pageNumber: e,
            projectId: i,
            siteId: n,
            uxaDomain: o,
            csLiteDomain: c
        } = s, l = /^(.+)\.(\d+)$/.exec(s.sessionKey), h;
        if (t && l) {
            let [, f, d] = l;
            n ? h = `${c}/sites/${n}/player?uu=${f}&sn=${d}&pn=${e}` : h = `${o}/quick-playback/index.html?pid=${i}&uu=${f}&sn=${d}&pvid=${e}&recordingType=cs`, r.withTimestamp && (h += `&t=${M.now()-r.recordingStartTimestamp}`)
        }
        return {
            replayLink: h,
            isRecording: t
        }
    }
    var Qy = (() => {
            class s {
                constructor(t) {
                    this.kt = t
                }
                handleCommand(t, e) {
                    pi(t) && Ze(e) && this.zt(t, e)
                }
                zt(t, e) {
                    csSetTimeout(() => {
                        let i = this.kt.getTrackingContext();
                        if (i) {
                            let n = Jy(i, t);
                            e(n)
                        }
                    })
                }
            }
            return s
        })(),
        Zy = (() => {
            class s {
                constructor() {
                    this.de = new Set
                }
                handleCommand(t, e) {
                    return !Ze(t) || this.de.has(t) ? null : (this.de.add(t), e && (this.Oe = e, this.Em(t, e)), () => this.de.delete(t))
                }
                executeCallbacks(t) {
                    this.Pb(t) && (this.Oe = t, this.de.forEach(e => this.Em(e, t)))
                }
                Em(t, e) {
                    csSetTimeout(() => {
                        try {
                            t(e)
                        } catch {}
                    })
                }
                Pb(t) {
                    let {
                        isRecording: e,
                        recordingStartTimestamp: i,
                        etrState: n,
                        etrStatus: o,
                        collectState: c
                    } = t;
                    return this.Oe && (this.Oe.isRecording !== e || this.Oe.recordingStartTimestamp !== i || this.Oe.etrState !== n || this.Oe.etrStatus !== o || this.Oe.collectState !== c)
                }
            }
            return s
        })(),
        tE = ["afterPageView"],
        eE = ["getSessionKey"],
        sE = ["onRecordingContextChange", "onRecordingStateChange"],
        iE = ["replay:link:generate"],
        rE = (() => {
            class s {
                constructor(t, e, i, n, o, c, l, h) {
                    this.O = t, this.R = e, this.S = i, this.mt = n, this.et = o, this.E = c, this.hs = l, this.Ei = h, this.Sm = null
                }
                init() {
                    this.kt = new Yy(this.O, this.R, this.E, this.hs), this.Au = new Xy(this.kt), this.vm = new Ky(this.kt), this.vo = new Zy, this.Ob = new Qy(this.kt), this.S.register(eE, t => this.vm.handleCommand(t)), this.S.register(tE, t => this.Au.handleCommand(t)), this.S.register(sE, t => this.vo.handleCommand(t, this.Ei.getRecordingContext())), this.S.register(iE, (t, e) => {
                        this.Vr && this.Ob.handleCommand({ ...t,
                            recordingStartTimestamp: this.Ei.getRecordingContext().recordingStartTimestamp
                        }, e)
                    })
                }
                onAfterNaturalPageView() {
                    var t;
                    this.kt.setNaturalPageViewSent(!0), this.vm.flushPendingCallbacks(), this.Au.executeRegisteredCallbacks(), (t = this.Sm) === null || t === void 0 || t.sendAfterPageViewCallbackToChildren()
                }
                onAfterArtificialPageView() {
                    var t;
                    this.Au.executeRegisteredCallbacks(), (t = this.Sm) === null || t === void 0 || t.sendAfterPageViewCallbackToChildren()
                }
                onCollectStateChange() {
                    this.executeRecordingContextChangeCallbacks()
                }
                onRecordingContextChange() {
                    this.executeRecordingContextChangeCallbacks()
                }
                executeRecordingContextChangeCallbacks() {
                    this.vo.executeCallbacks(this.Ei.getRecordingContext())
                }
                setRecordingService(t) {
                    this.Vr = t
                }
            }
            return B([oo({
                wait: 0,
                mode: "trailing"
            })], s.prototype, "executeRecordingContextChangeCallbacks", null), s
        })();
    var nE = ["optout"];
    var oE = (() => {
            class s {
                constructor(t, e) {
                    this.S = t, this.ls = e
                }
                init() {
                    this.S.register(nE, () => {
                        this.ls.activate()
                    })
                }
            }
            return s
        })(),
        oi = "_cs_optout",
        aE = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.Nt = i
                }
                get() {
                    return this.E.cookielessTrackingEnabled ? this.Nt.getItem(oi) : this.N.get(oi)
                }
                set(t) {
                    this.E.cookielessTrackingEnabled ? this.Nt.setItem(oi, t) : this.N.set(oi, t, Wn)
                }
            }
            return s
        })(),
        qa = "1",
        cE = (() => {
            class s {
                constructor(t, e, i) {
                    this.w = t, this.Lt = e, this.ft = i
                }
                init() {
                    !this.isActive() && this.$b() && this.activate()
                }
                isActive() {
                    return this.ft.get() === qa
                }
                activate() {
                    this.w.emitOptout(), this.ft.set(qa)
                }
                $b() {
                    return csString.prototype.indexOf.call(this.Lt.href, oi) > 0
                }
            }
            return s
        })(),
        lE = (() => {
            class s {
                constructor() {
                    this.yc = null, this.zb = 1
                }
                startInterval() {
                    this.yc = window.csSetInterval(() => {
                        let t = this.zb++;
                        if (this.flush(`interval.${t}`), t >= 5) {
                            this.stopInterval();
                            return
                        }
                    }, 5e3)
                }
                flush(t) {
                    $.counters.tasks.flush(t), $.counters.longTasks.flush(t)
                }
                clear() {
                    $.counters.tasks.reset(), $.counters.longTasks.reset(), this.stopInterval()
                }
                stopInterval() {
                    this.yc && (csClearInterval(this.yc), this.yc = null)
                }
            }
            return s
        })(),
        hE = (() => {
            class s {
                constructor() {
                    this.qb = ["clicktale.net", "contentsquare.net", "hotjar.com", "heap-api.com"], this.To = !1, this.bo = null, this.Fs = new lE
                }
                onStartTracking() {
                    this.Wb()
                }
                Wb() {
                    let t = csArray.prototype.filter.call(performance.getEntriesByType("resource"), e => {
                        if (e.initiatorType !== "script") return !1;
                        let i = csString.prototype.split.call(e.name, "/")[2] || "";
                        return csArray.prototype.some.call(this.qb, n => csString.prototype.endsWith.call(i, n))
                    });
                    csArray.prototype.forEach.call(t, e => {
                        if (e.transferSize === 0) return;
                        let i = e.responseEnd - e.responseStart,
                            n = e.transferSize,
                            c = e.duration - i,
                            l = csString.prototype.split.call(e.name, "/")[2];
                        i >= 0 && $.counters.downloadTime.add(l, i), n >= 0 && $.counters.transferSize.add(l, n), c >= 0 && $.counters.evalTime.add(l, c)
                    }), t.length > 0 && ($.counters.downloadTime.flush(), $.counters.transferSize.flush(), $.counters.evalTime.flush())
                }
                Pm() {
                    $.counters.blockingTime.flush(), $.counters.inpContribution.flush()
                }
                onBeforeArtificialPageView() {
                    this.Pm(), this.bo && csClearTimeout(this.bo), this.Fs.stopInterval(), this.To = !0
                }
                onBeforeNaturalPageView() {
                    this.Pm()
                }
                onAfterNaturalPageView(t) {
                    t === us.Natural ? (this.Fs.flush("boot"), this.Fs.startInterval()) : (this.bo && csClearTimeout(this.bo), this.Fs.stopInterval(), this.To = !0)
                }
                onInitialDomStart() {
                    this.To || this.Fs.stopInterval()
                }
                onInitialDomDone() {
                    this.To || (this.To = !0, this.Fs.flush("initial-dom"), this.bo = window.csSetTimeout(() => {
                        this.Fs.flush("post-initial-dom"), this.Fs.startInterval()
                    }, 5e3))
                }
                onOptout() {
                    this.Fs.clear()
                }
            }
            return s
        })(),
        uE = (() => {
            let s;
            return function(r) {
                r.COMPRESSION_DISABLED = "compressionDisabled"
            }(s || (s = {})), s
        })(),
        dE = (() => {
            class s {
                constructor() {}
                static init(t) {
                    (!this.Du || t !== void 0) && this.initFlags(t)
                }
                static initFlags(t = document.cookie) {
                    var e;
                    let i = (e = /_cs_debug=((\w|\.|\:|=)+)/g.exec(t)) === null || e === void 0 ? void 0 : e[1];
                    if (this.Du = new Map, i) {
                        let n = csString.prototype.split.call(i, ".");
                        for (let o = 0; o < n.length; o++) {
                            let [c, l] = csString.prototype.split.call(n[o], "=");
                            this.Du.set(c, l || "true")
                        }
                    }
                }
                static getBoolean(t) {
                    let e = this.getString(t);
                    return e != null && e !== "false" && parseInt(e) !== 0
                }
                static getString(t) {
                    var e;
                    return this.init(), (e = this.Du) === null || e === void 0 ? void 0 : e.get(t)
                }
                static isCompressionEnabled() {
                    return !this.getBoolean(uE.COMPRESSION_DISABLED)
                }
                static Log(t) {
                    return (e, i, n) => {
                        var o;
                        let c = i.toString(),
                            l = `${(o=e.constructor)===null||o===void 0?void 0:o.name}.${c}`,
                            h = n.value;
                        fE(s.getString("debugLog"), t) && (n.value = function(...f) {
                            return console.log(l, ...f), h.bind(this)(...f)
                        })
                    }
                }
            }
            return s
        })();

    function fE(s, r) {
        var t;
        return s == null ? !1 : s === r || !!(!((t = csString.prototype.match.call(s, new csRegExp("(^|,)(" + r + ")(,|$)"))) === null || t === void 0) && t.length)
    }
    var pE = (() => {
        class s {
            constructor(t) {
                this.Yb = t, this.Om = [], this.ku = {}, this.Xb = 0
            }
            static async create(t, e = {}) {
                let i = new s(t),
                    n;
                return csArray.prototype.forEach.call(Object.entries(e), ([o, c]) => {
                    e[o] = c, i.register(c)
                }), await i.jr().catch(o => {
                    it.warn("Failed to start worker: " + o.toString()), n = new t
                }), new Proxy(i, {
                    get(o, c) {
                        return c === "__worker" ? i._e : t.prototype[c] instanceof Function ? (...l) => n ? Promise.resolve(n[c](...l)) : i.Nm(c, l) : n ? Promise.resolve(n[c]) : i.Nm(c, [])
                    }
                })
            }
            Nm(t, e) {
                let i = ++this.Xb;
                return new Promise((n, o) => {
                    this.ku[i] = (c, l) => {
                        delete this.ku[i], c ? o(c) : n(l)
                    }, this._e.postMessage({
                        id: i,
                        command: t,
                        params: e
                    })
                })
            }
            register(t) {
                csArray.prototype.push.call(this.Om, t.toString())
            }
            jr() {
                try {
                    let t = Wa.toString() + `
` + csArray.prototype.join.call(this.Om, `
`) + `

const klass = (${this.Yb.toString()});

${Wa.name}()`,
                        e = new Blob([t], {
                            type: "application/javascript"
                        }),
                        i = csURL.createObjectURL(e);
                    this._e = new Worker(i), this._e.addEventListener("message", n => {
                        var o, c, l, h, f;
                        if (n.data !== "ping") {
                            if (!((o = n.data) === null || o === void 0) && o.critical || !n.data.id) {
                                it.error("Worker error:", (l = (c = n.data) === null || c === void 0 ? void 0 : c.critical) !== null && l !== void 0 ? l : "No ID");
                                return
                            }(f = (h = this.ku)[n.data.id]) === null || f === void 0 || f.call(h, n.data.error, n.data.result)
                        }
                    })
                } catch (t) {
                    return Promise.reject(t)
                }
                return new Promise((t, e) => {
                    this._e.onerror = i => e(new Error(i.message)), this._e.onmessage = () => {
                        this._e.onmessage = this._e.onerror = null, t()
                    }
                })
            }
        }
        return s
    })();

    function Wa() {
        let s = new klass;
        self.postMessage("ping"), self.onmessage = r => {
            var t, e, i;
            if (!(!((t = r.data) === null || t === void 0) && t.command)) return self.postMessage({
                critical: "Invalid command",
                id: (e = r.data) === null || e === void 0 ? void 0 : e.id,
                command: (i = r.data) === null || i === void 0 ? void 0 : i.command
            });
            Promise.resolve().then(() => {
                let n = s[r.data.command];
                return typeof n == "function" ? n.apply(s, r.data.params) : n
            }).then(n => {
                var o;
                self.postMessage({
                    result: n,
                    id: r.data.id,
                    command: (o = r.data) === null || o === void 0 ? void 0 : o.command
                })
            }, n => {
                var o, c;
                self.postMessage({
                    error: n,
                    id: (o = r.data) === null || o === void 0 ? void 0 : o.id,
                    command: (c = r.data) === null || c === void 0 ? void 0 : c.command
                })
            })
        }
    }

    function Fn() {
        function i(a) {
            let p = a.length;
            for (; --p >= 0;) a[p] = 0
        }
        let n = 0,
            o = 1,
            c = 2,
            l = 3,
            h = 258,
            f = 29,
            d = 256,
            m = d + 1 + f,
            E = 30,
            v = 19,
            C = 2 * m + 1,
            P = 15,
            S = 16,
            w = 7,
            I = 256,
            O = 16,
            T = 17,
            U = 18,
            tt = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            ot = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            $t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            Lt = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            zt = 512,
            _ = new Array((m + 2) * 2);
        i(_);
        let L = new Array(E * 2);
        i(L);
        let x = new Array(zt);
        i(x);
        let H = new Array(h - l + 1);
        i(H);
        let ht = new Array(f);
        i(ht);
        let St = new Array(E);
        i(St);

        function pe(a, p, g, y, u) {
            this.static_tree = a, this.extra_bits = p, this.extra_base = g, this.elems = y, this.max_length = u, this.has_stree = a && a.length
        }
        let es, Rs, Cs;

        function Re(a, p) {
            this.dyn_tree = a, this.max_code = 0, this.stat_desc = p
        }
        let Ce = a => a < 256 ? x[a] : x[256 + (a >>> 7)],
            Zt = (a, p) => {
                a.pending_buf[a.pending++] = p & 255, a.pending_buf[a.pending++] = p >>> 8 & 255
            },
            vt = (a, p, g) => {
                a.bi_valid > S - g ? (a.bi_buf |= p << a.bi_valid & 65535, Zt(a, a.bi_buf), a.bi_buf = p >> S - a.bi_valid, a.bi_valid += g - S) : (a.bi_buf |= p << a.bi_valid & 65535, a.bi_valid += g)
            },
            qt = (a, p, g) => {
                vt(a, g[p * 2], g[p * 2 + 1])
            },
            Mi = (a, p) => {
                let g = 0;
                do g |= a & 1, a >>>= 1, g <<= 1; while (--p > 0);
                return g >>> 1
            },
            Rr = a => {
                a.bi_valid === 16 ? (Zt(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : a.bi_valid >= 8 && (a.pending_buf[a.pending++] = a.bi_buf & 255, a.bi_buf >>= 8, a.bi_valid -= 8)
            },
            Cr = (a, p) => {
                let g = p.dyn_tree,
                    y = p.max_code,
                    u = p.stat_desc.static_tree,
                    b = p.stat_desc.has_stree,
                    A = p.stat_desc.extra_bits,
                    R = p.stat_desc.extra_base,
                    X = p.stat_desc.max_length,
                    j, Ht, xe, rt, os, Os, Yi = 0;
                for (rt = 0; rt <= P; rt++) a.bl_count[rt] = 0;
                for (g[a.heap[a.heap_max] * 2 + 1] = 0, j = a.heap_max + 1; j < C; j++) Ht = a.heap[j], rt = g[g[Ht * 2 + 1] * 2 + 1] + 1, rt > X && (rt = X, Yi++), g[Ht * 2 + 1] = rt, !(Ht > y) && (a.bl_count[rt]++, os = 0, Ht >= R && (os = A[Ht - R]), Os = g[Ht * 2], a.opt_len += Os * (rt + os), b && (a.static_len += Os * (u[Ht * 2 + 1] + os)));
                if (Yi !== 0) {
                    do {
                        for (rt = X - 1; a.bl_count[rt] === 0;) rt--;
                        a.bl_count[rt]--, a.bl_count[rt + 1] += 2, a.bl_count[X]--, Yi -= 2
                    } while (Yi > 0);
                    for (rt = X; rt !== 0; rt--)
                        for (Ht = a.bl_count[rt]; Ht !== 0;) xe = a.heap[--j], !(xe > y) && (g[xe * 2 + 1] !== rt && (a.opt_len += (rt - g[xe * 2 + 1]) * g[xe * 2], g[xe * 2 + 1] = rt), Ht--)
                }
            },
            Di = (a, p, g) => {
                let y = new Array(P + 1),
                    u = 0,
                    b, A;
                for (b = 1; b <= P; b++) y[b] = u = u + g[b - 1] << 1;
                for (A = 0; A <= p; A++) {
                    let R = a[A * 2 + 1];
                    R !== 0 && (a[A * 2] = Mi(y[R]++, R))
                }
            },
            Ir = () => {
                let a, p, g, y, u, b = new Array(P + 1);
                for (g = 0, y = 0; y < f - 1; y++)
                    for (ht[y] = g, a = 0; a < 1 << tt[y]; a++) H[g++] = y;
                for (H[g - 1] = y, u = 0, y = 0; y < 16; y++)
                    for (St[y] = u, a = 0; a < 1 << ot[y]; a++) x[u++] = y;
                for (u >>= 7; y < E; y++)
                    for (St[y] = u << 7, a = 0; a < 1 << ot[y] - 7; a++) x[256 + u++] = y;
                for (p = 0; p <= P; p++) b[p] = 0;
                for (a = 0; a <= 143;) _[a * 2 + 1] = 8, a++, b[8]++;
                for (; a <= 255;) _[a * 2 + 1] = 9, a++, b[9]++;
                for (; a <= 279;) _[a * 2 + 1] = 7, a++, b[7]++;
                for (; a <= 287;) _[a * 2 + 1] = 8, a++, b[8]++;
                for (Di(_, m + 1, b), a = 0; a < E; a++) L[a * 2 + 1] = 5, L[a * 2] = Mi(a, 5);
                es = new pe(_, tt, d + 1, m, P), Rs = new pe(L, ot, 0, E, P), Cs = new pe(new Array(0), $t, 0, v, w)
            },
            ki = a => {
                let p;
                for (p = 0; p < m; p++) a.dyn_ltree[p * 2] = 0;
                for (p = 0; p < E; p++) a.dyn_dtree[p * 2] = 0;
                for (p = 0; p < v; p++) a.bl_tree[p * 2] = 0;
                a.dyn_ltree[I * 2] = 1, a.opt_len = a.static_len = 0, a.last_lit = a.matches = 0
            },
            Li = a => {
                a.bi_valid > 8 ? Zt(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), a.bi_buf = 0, a.bi_valid = 0
            },
            xi = (a, p, g, y) => {
                Li(a), y && (Zt(a, g), Zt(a, ~g)), a.pending_buf.set(a.window.subarray(p, p + g), a.pending), a.pending += g
            },
            Pr = (a, p, g, y) => {
                let u = p * 2,
                    b = g * 2;
                return a[u] < a[b] || a[u] === a[b] && y[p] <= y[g]
            },
            Vi = (a, p, g) => {
                let y = a.heap[g],
                    u = g << 1;
                for (; u <= a.heap_len && (u < a.heap_len && Pr(p, a.heap[u + 1], a.heap[u], a.depth) && u++, !Pr(p, y, a.heap[u], a.depth));) a.heap[g] = a.heap[u], g = u, u <<= 1;
                a.heap[g] = y
            },
            Or = (a, p, g) => {
                let y, u, b = 0,
                    A, R;
                if (a.last_lit !== 0)
                    do y = a.pending_buf[a.d_buf + b * 2] << 8 | a.pending_buf[a.d_buf + b * 2 + 1], u = a.pending_buf[a.l_buf + b], b++, y === 0 ? qt(a, u, p) : (A = H[u], qt(a, A + d + 1, p), R = tt[A], R !== 0 && (u -= ht[A], vt(a, u, R)), y--, A = Ce(y), qt(a, A, g), R = ot[A], R !== 0 && (y -= St[A], vt(a, y, R))); while (b < a.last_lit);
                qt(a, I, p)
            },
            Ui = (a, p) => {
                let g = p.dyn_tree,
                    y = p.stat_desc.static_tree,
                    u = p.stat_desc.has_stree,
                    b = p.stat_desc.elems,
                    A, R, X = -1,
                    j;
                for (a.heap_len = 0, a.heap_max = C, A = 0; A < b; A++) g[A * 2] !== 0 ? (a.heap[++a.heap_len] = X = A, a.depth[A] = 0) : g[A * 2 + 1] = 0;
                for (; a.heap_len < 2;) j = a.heap[++a.heap_len] = X < 2 ? ++X : 0, g[j * 2] = 1, a.depth[j] = 0, a.opt_len--, u && (a.static_len -= y[j * 2 + 1]);
                for (p.max_code = X, A = a.heap_len >> 1; A >= 1; A--) Vi(a, g, A);
                j = b;
                do A = a.heap[1], a.heap[1] = a.heap[a.heap_len--], Vi(a, g, 1), R = a.heap[1], a.heap[--a.heap_max] = A, a.heap[--a.heap_max] = R, g[j * 2] = g[A * 2] + g[R * 2], a.depth[j] = (a.depth[A] >= a.depth[R] ? a.depth[A] : a.depth[R]) + 1, g[A * 2 + 1] = g[R * 2 + 1] = j, a.heap[1] = j++, Vi(a, g, 1); while (a.heap_len >= 2);
                a.heap[--a.heap_max] = a.heap[1], Cr(a, p), Di(g, X, a.bl_count)
            },
            Nr = (a, p, g) => {
                let y, u = -1,
                    b, A = p[0 * 2 + 1],
                    R = 0,
                    X = 7,
                    j = 4;
                for (A === 0 && (X = 138, j = 3), p[(g + 1) * 2 + 1] = 65535, y = 0; y <= g; y++) b = A, A = p[(y + 1) * 2 + 1], !(++R < X && b === A) && (R < j ? a.bl_tree[b * 2] += R : b !== 0 ? (b !== u && a.bl_tree[b * 2]++, a.bl_tree[O * 2]++) : R <= 10 ? a.bl_tree[T * 2]++ : a.bl_tree[U * 2]++, R = 0, u = b, A === 0 ? (X = 138, j = 3) : b === A ? (X = 6, j = 3) : (X = 7, j = 4))
            },
            _o = (a, p, g) => {
                let y, u = -1,
                    b, A = p[0 * 2 + 1],
                    R = 0,
                    X = 7,
                    j = 4;
                for (A === 0 && (X = 138, j = 3), y = 0; y <= g; y++)
                    if (b = A, A = p[(y + 1) * 2 + 1], !(++R < X && b === A)) {
                        if (R < j)
                            do qt(a, b, a.bl_tree); while (--R !== 0);
                        else b !== 0 ? (b !== u && (qt(a, b, a.bl_tree), R--), qt(a, O, a.bl_tree), vt(a, R - 3, 2)) : R <= 10 ? (qt(a, T, a.bl_tree), vt(a, R - 3, 3)) : (qt(a, U, a.bl_tree), vt(a, R - 11, 7));
                        R = 0, u = b, A === 0 ? (X = 138, j = 3) : b === A ? (X = 6, j = 3) : (X = 7, j = 4)
                    }
            },
            Rl = a => {
                let p;
                for (Nr(a, a.dyn_ltree, a.l_desc.max_code), Nr(a, a.dyn_dtree, a.d_desc.max_code), Ui(a, a.bl_desc), p = v - 1; p >= 3 && a.bl_tree[Lt[p] * 2 + 1] === 0; p--);
                return a.opt_len += 3 * (p + 1) + 5 + 5 + 4, p
            },
            Cl = (a, p, g, y) => {
                let u;
                for (vt(a, p - 257, 5), vt(a, g - 1, 5), vt(a, y - 4, 4), u = 0; u < y; u++) vt(a, a.bl_tree[Lt[u] * 2 + 1], 3);
                _o(a, a.dyn_ltree, p - 1), _o(a, a.dyn_dtree, g - 1)
            },
            Il = a => {
                let p = 4093624447,
                    g;
                for (g = 0; g <= 31; g++, p >>>= 1)
                    if (p & 1 && a.dyn_ltree[g * 2] !== 0) return 0;
                if (a.dyn_ltree[9 * 2] !== 0 || a.dyn_ltree[10 * 2] !== 0 || a.dyn_ltree[13 * 2] !== 0) return 1;
                for (g = 32; g < d; g++)
                    if (a.dyn_ltree[g * 2] !== 0) return 1;
                return 0
            },
            wo = !1,
            Pl = a => {
                wo || (Ir(), wo = !0), a.l_desc = new Re(a.dyn_ltree, es), a.d_desc = new Re(a.dyn_dtree, Rs), a.bl_desc = new Re(a.bl_tree, Cs), a.bi_buf = 0, a.bi_valid = 0, ki(a)
            },
            Ao = (a, p, g, y) => {
                vt(a, (n << 1) + (y ? 1 : 0), 3), xi(a, p, g, !0)
            },
            Ol = a => {
                vt(a, o << 1, 3), qt(a, I, _), Rr(a)
            },
            Nl = (a, p, g, y) => {
                let u, b, A = 0;
                a.level > 0 ? (a.strm.data_type === 2 && (a.strm.data_type = Il(a)), Ui(a, a.l_desc), Ui(a, a.d_desc), A = Rl(a), u = a.opt_len + 3 + 7 >>> 3, b = a.static_len + 3 + 7 >>> 3, b <= u && (u = b)) : u = b = g + 5, g + 4 <= u && p !== -1 ? Ao(a, p, g, y) : a.strategy === 4 || b === u ? (vt(a, (o << 1) + (y ? 1 : 0), 3), Or(a, _, L)) : (vt(a, (c << 1) + (y ? 1 : 0), 3), Cl(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, A + 1), Or(a, a.dyn_ltree, a.dyn_dtree)), ki(a), y && Li(a)
            },
            Ml = (a, p, g) => (a.pending_buf[a.d_buf + a.last_lit * 2] = p >>> 8 & 255, a.pending_buf[a.d_buf + a.last_lit * 2 + 1] = p & 255, a.pending_buf[a.l_buf + a.last_lit] = g & 255, a.last_lit++, p === 0 ? a.dyn_ltree[g * 2]++ : (a.matches++, p--, a.dyn_ltree[(H[g] + d + 1) * 2]++, a.dyn_dtree[Ce(p) * 2]++), a.last_lit === a.lit_bufsize - 1);
        var Dl = Pl,
            kl = Ao,
            Ll = Nl,
            xl = Ml,
            Vl = Ol,
            Ul = {
                _tr_init: Dl,
                _tr_stored_block: kl,
                _tr_flush_block: Ll,
                _tr_tally: xl,
                _tr_align: Vl
            },
            To = (a, p, g, y) => {
                let u = a & 65535 | 0,
                    b = a >>> 16 & 65535 | 0,
                    A = 0;
                for (; g !== 0;) {
                    A = g > 2e3 ? 2e3 : g, g -= A;
                    do u = u + p[y++] | 0, b = b + u | 0; while (--A);
                    u %= 65521, b %= 65521
                }
                return u | b << 16 | 0
            };
        let jl = () => {
                let a, p = [];
                for (var g = 0; g < 256; g++) {
                    a = g;
                    for (var y = 0; y < 8; y++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
                    p[g] = a
                }
                return p
            },
            Hl = new Uint32Array(jl());
        var Ie = (a, p, g, y) => {
                let u = Hl,
                    b = y + g;
                a ^= -1;
                for (let A = y; A < b; A++) a = a >>> 8 ^ u[(a ^ p[A]) & 255];
                return a ^ -1
            },
            ji = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            },
            bo = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_MEM_ERROR: -4,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
        let {
            _tr_init: Bl,
            _tr_stored_block: Fl,
            _tr_flush_block: Gl,
            _tr_tally: Pe,
            _tr_align: $l
        } = Ul, {
            Z_NO_FLUSH: ss,
            Z_PARTIAL_FLUSH: zl,
            Z_FULL_FLUSH: ql,
            Z_FINISH: Oe,
            Z_BLOCK: Ro,
            Z_OK: re,
            Z_STREAM_END: Co,
            Z_STREAM_ERROR: Wt,
            Z_DATA_ERROR: Wl,
            Z_BUF_ERROR: Mr,
            Z_DEFAULT_COMPRESSION: Yl,
            Z_FILTERED: Xl,
            Z_HUFFMAN_ONLY: Hi,
            Z_RLE: Kl,
            Z_FIXED: Jl,
            Z_DEFAULT_STRATEGY: Ql,
            Z_UNKNOWN: Zl,
            Z_DEFLATED: Bi
        } = bo, th = 9, eh = 15, sh = 8, Dr = 256 + 1 + 29, ih = 30, rh = 19, nh = 2 * Dr + 1, oh = 15, Y = 3, Ne = 258, te = Ne + Y + 1, ah = 32, Fi = 42, kr = 69, Gi = 73, $i = 91, zi = 103, is = 113, Ks = 666, pt = 1, Js = 2, rs = 3, Is = 4, ch = 3, Me = (a, p) => (a.msg = ji[p], p), Io = a => (a << 1) - (a > 4 ? 9 : 0), De = a => {
            let p = a.length;
            for (; --p >= 0;) a[p] = 0
        }, ke = (a, p, g) => (p << a.hash_shift ^ g) & a.hash_mask, Le = a => {
            let p = a.state,
                g = p.pending;
            g > a.avail_out && (g = a.avail_out), g !== 0 && (a.output.set(p.pending_buf.subarray(p.pending_out, p.pending_out + g), a.next_out), a.next_out += g, p.pending_out += g, a.total_out += g, a.avail_out -= g, p.pending -= g, p.pending === 0 && (p.pending_out = 0))
        }, _t = (a, p) => {
            Gl(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, p), a.block_start = a.strstart, Le(a.strm)
        }, Q = (a, p) => {
            a.pending_buf[a.pending++] = p
        }, Qs = (a, p) => {
            a.pending_buf[a.pending++] = p >>> 8 & 255, a.pending_buf[a.pending++] = p & 255
        }, lh = (a, p, g, y) => {
            let u = a.avail_in;
            return u > y && (u = y), u === 0 ? 0 : (a.avail_in -= u, p.set(a.input.subarray(a.next_in, a.next_in + u), g), a.state.wrap === 1 ? a.adler = To(a.adler, p, u, g) : a.state.wrap === 2 && (a.adler = Ie(a.adler, p, u, g)), a.next_in += u, a.total_in += u, u)
        }, Po = (a, p) => {
            let g = a.max_chain_length,
                y = a.strstart,
                u, b, A = a.prev_length,
                R = a.nice_match,
                X = a.strstart > a.w_size - te ? a.strstart - (a.w_size - te) : 0,
                j = a.window,
                Ht = a.w_mask,
                xe = a.prev,
                rt = a.strstart + Ne,
                os = j[y + A - 1],
                Os = j[y + A];
            a.prev_length >= a.good_match && (g >>= 2), R > a.lookahead && (R = a.lookahead);
            do
                if (u = p, !(j[u + A] !== Os || j[u + A - 1] !== os || j[u] !== j[y] || j[++u] !== j[y + 1])) {
                    y += 2, u++;
                    do; while (j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && j[++y] === j[++u] && y < rt);
                    if (b = Ne - (rt - y), y = rt - Ne, b > A) {
                        if (a.match_start = p, A = b, b >= R) break;
                        os = j[y + A - 1], Os = j[y + A]
                    }
                }
            while ((p = xe[p & Ht]) > X && --g !== 0);
            return A <= a.lookahead ? A : a.lookahead
        }, ns = a => {
            let p = a.w_size,
                g, y, u, b, A;
            do {
                if (b = a.window_size - a.lookahead - a.strstart, a.strstart >= p + (p - te)) {
                    a.window.set(a.window.subarray(p, p + p), 0), a.match_start -= p, a.strstart -= p, a.block_start -= p, y = a.hash_size, g = y;
                    do u = a.head[--g], a.head[g] = u >= p ? u - p : 0; while (--y);
                    y = p, g = y;
                    do u = a.prev[--g], a.prev[g] = u >= p ? u - p : 0; while (--y);
                    b += p
                }
                if (a.strm.avail_in === 0) break;
                if (y = lh(a.strm, a.window, a.strstart + a.lookahead, b), a.lookahead += y, a.lookahead + a.insert >= Y)
                    for (A = a.strstart - a.insert, a.ins_h = a.window[A], a.ins_h = ke(a, a.ins_h, a.window[A + 1]); a.insert && (a.ins_h = ke(a, a.ins_h, a.window[A + Y - 1]), a.prev[A & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = A, A++, a.insert--, !(a.lookahead + a.insert < Y)););
            } while (a.lookahead < te && a.strm.avail_in !== 0)
        }, hh = (a, p) => {
            let g = 65535;
            for (g > a.pending_buf_size - 5 && (g = a.pending_buf_size - 5);;) {
                if (a.lookahead <= 1) {
                    if (ns(a), a.lookahead === 0 && p === ss) return pt;
                    if (a.lookahead === 0) break
                }
                a.strstart += a.lookahead, a.lookahead = 0;
                let y = a.block_start + g;
                if ((a.strstart === 0 || a.strstart >= y) && (a.lookahead = a.strstart - y, a.strstart = y, _t(a, !1), a.strm.avail_out === 0) || a.strstart - a.block_start >= a.w_size - te && (_t(a, !1), a.strm.avail_out === 0)) return pt
            }
            return a.insert = 0, p === Oe ? (_t(a, !0), a.strm.avail_out === 0 ? rs : Is) : (a.strstart > a.block_start && (_t(a, !1), a.strm.avail_out === 0), pt)
        }, Lr = (a, p) => {
            let g, y;
            for (;;) {
                if (a.lookahead < te) {
                    if (ns(a), a.lookahead < te && p === ss) return pt;
                    if (a.lookahead === 0) break
                }
                if (g = 0, a.lookahead >= Y && (a.ins_h = ke(a, a.ins_h, a.window[a.strstart + Y - 1]), g = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), g !== 0 && a.strstart - g <= a.w_size - te && (a.match_length = Po(a, g)), a.match_length >= Y)
                    if (y = Pe(a, a.strstart - a.match_start, a.match_length - Y), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= Y) {
                        a.match_length--;
                        do a.strstart++, a.ins_h = ke(a, a.ins_h, a.window[a.strstart + Y - 1]), g = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart; while (--a.match_length !== 0);
                        a.strstart++
                    } else a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = ke(a, a.ins_h, a.window[a.strstart + 1]);
                else y = Pe(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++;
                if (y && (_t(a, !1), a.strm.avail_out === 0)) return pt
            }
            return a.insert = a.strstart < Y - 1 ? a.strstart : Y - 1, p === Oe ? (_t(a, !0), a.strm.avail_out === 0 ? rs : Is) : a.last_lit && (_t(a, !1), a.strm.avail_out === 0) ? pt : Js
        }, Ps = (a, p) => {
            let g, y, u;
            for (;;) {
                if (a.lookahead < te) {
                    if (ns(a), a.lookahead < te && p === ss) return pt;
                    if (a.lookahead === 0) break
                }
                if (g = 0, a.lookahead >= Y && (a.ins_h = ke(a, a.ins_h, a.window[a.strstart + Y - 1]), g = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = Y - 1, g !== 0 && a.prev_length < a.max_lazy_match && a.strstart - g <= a.w_size - te && (a.match_length = Po(a, g), a.match_length <= 5 && (a.strategy === Xl || a.match_length === Y && a.strstart - a.match_start > 4096) && (a.match_length = Y - 1)), a.prev_length >= Y && a.match_length <= a.prev_length) {
                    u = a.strstart + a.lookahead - Y, y = Pe(a, a.strstart - 1 - a.prev_match, a.prev_length - Y), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
                    do ++a.strstart <= u && (a.ins_h = ke(a, a.ins_h, a.window[a.strstart + Y - 1]), g = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart); while (--a.prev_length !== 0);
                    if (a.match_available = 0, a.match_length = Y - 1, a.strstart++, y && (_t(a, !1), a.strm.avail_out === 0)) return pt
                } else if (a.match_available) {
                    if (y = Pe(a, 0, a.window[a.strstart - 1]), y && _t(a, !1), a.strstart++, a.lookahead--, a.strm.avail_out === 0) return pt
                } else a.match_available = 1, a.strstart++, a.lookahead--
            }
            return a.match_available && (y = Pe(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < Y - 1 ? a.strstart : Y - 1, p === Oe ? (_t(a, !0), a.strm.avail_out === 0 ? rs : Is) : a.last_lit && (_t(a, !1), a.strm.avail_out === 0) ? pt : Js
        }, uh = (a, p) => {
            let g, y, u, b, A = a.window;
            for (;;) {
                if (a.lookahead <= Ne) {
                    if (ns(a), a.lookahead <= Ne && p === ss) return pt;
                    if (a.lookahead === 0) break
                }
                if (a.match_length = 0, a.lookahead >= Y && a.strstart > 0 && (u = a.strstart - 1, y = A[u], y === A[++u] && y === A[++u] && y === A[++u])) {
                    b = a.strstart + Ne;
                    do; while (y === A[++u] && y === A[++u] && y === A[++u] && y === A[++u] && y === A[++u] && y === A[++u] && y === A[++u] && y === A[++u] && u < b);
                    a.match_length = Ne - (b - u), a.match_length > a.lookahead && (a.match_length = a.lookahead)
                }
                if (a.match_length >= Y ? (g = Pe(a, 1, a.match_length - Y), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (g = Pe(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), g && (_t(a, !1), a.strm.avail_out === 0)) return pt
            }
            return a.insert = 0, p === Oe ? (_t(a, !0), a.strm.avail_out === 0 ? rs : Is) : a.last_lit && (_t(a, !1), a.strm.avail_out === 0) ? pt : Js
        }, dh = (a, p) => {
            let g;
            for (;;) {
                if (a.lookahead === 0 && (ns(a), a.lookahead === 0)) {
                    if (p === ss) return pt;
                    break
                }
                if (a.match_length = 0, g = Pe(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, g && (_t(a, !1), a.strm.avail_out === 0)) return pt
            }
            return a.insert = 0, p === Oe ? (_t(a, !0), a.strm.avail_out === 0 ? rs : Is) : a.last_lit && (_t(a, !1), a.strm.avail_out === 0) ? pt : Js
        };

        function ne(a, p, g, y, u) {
            this.good_length = a, this.max_lazy = p, this.nice_length = g, this.max_chain = y, this.func = u
        }
        let Zs = [new ne(0, 0, 0, 0, hh), new ne(4, 4, 8, 4, Lr), new ne(4, 5, 16, 8, Lr), new ne(4, 6, 32, 32, Lr), new ne(4, 4, 16, 16, Ps), new ne(8, 16, 32, 32, Ps), new ne(8, 16, 128, 128, Ps), new ne(8, 32, 128, 256, Ps), new ne(32, 128, 258, 1024, Ps), new ne(32, 258, 258, 4096, Ps)],
            fh = a => {
                a.window_size = 2 * a.w_size, De(a.head), a.max_lazy_match = Zs[a.level].max_lazy, a.good_match = Zs[a.level].good_length, a.nice_match = Zs[a.level].nice_length, a.max_chain_length = Zs[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = Y - 1, a.match_available = 0, a.ins_h = 0
            };

        function ph() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Bi, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(nh * 2), this.dyn_dtree = new Uint16Array((2 * ih + 1) * 2), this.bl_tree = new Uint16Array((2 * rh + 1) * 2), De(this.dyn_ltree), De(this.dyn_dtree), De(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(oh + 1), this.heap = new Uint16Array(2 * Dr + 1), De(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Dr + 1), De(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        let Oo = a => {
                if (!a || !a.state) return Me(a, Wt);
                a.total_in = a.total_out = 0, a.data_type = Zl;
                let p = a.state;
                return p.pending = 0, p.pending_out = 0, p.wrap < 0 && (p.wrap = -p.wrap), p.status = p.wrap ? Fi : is, a.adler = p.wrap === 2 ? 0 : 1, p.last_flush = ss, Bl(p), re
            },
            No = a => {
                let p = Oo(a);
                return p === re && fh(a.state), p
            },
            gh = (a, p) => !a || !a.state || a.state.wrap !== 2 ? Wt : (a.state.gzhead = p, re),
            Mo = (a, p, g, y, u, b) => {
                if (!a) return Wt;
                let A = 1;
                if (p === Yl && (p = 6), y < 0 ? (A = 0, y = -y) : y > 15 && (A = 2, y -= 16), u < 1 || u > th || g !== Bi || y < 8 || y > 15 || p < 0 || p > 9 || b < 0 || b > Jl) return Me(a, Wt);
                y === 8 && (y = 9);
                let R = new ph;
                return a.state = R, R.strm = a, R.wrap = A, R.gzhead = null, R.w_bits = y, R.w_size = 1 << R.w_bits, R.w_mask = R.w_size - 1, R.hash_bits = u + 7, R.hash_size = 1 << R.hash_bits, R.hash_mask = R.hash_size - 1, R.hash_shift = ~~((R.hash_bits + Y - 1) / Y), R.window = new Uint8Array(R.w_size * 2), R.head = new Uint16Array(R.hash_size), R.prev = new Uint16Array(R.w_size), R.lit_bufsize = 1 << u + 6, R.pending_buf_size = R.lit_bufsize * 4, R.pending_buf = new Uint8Array(R.pending_buf_size), R.d_buf = 1 * R.lit_bufsize, R.l_buf = 3 * R.lit_bufsize, R.level = p, R.strategy = b, R.method = g, No(a)
            },
            mh = (a, p) => Mo(a, p, Bi, eh, sh, Ql),
            yh = (a, p) => {
                let g, y;
                if (!a || !a.state || p > Ro || p < 0) return a ? Me(a, Wt) : Wt;
                let u = a.state;
                if (!a.output || !a.input && a.avail_in !== 0 || u.status === Ks && p !== Oe) return Me(a, a.avail_out === 0 ? Mr : Wt);
                u.strm = a;
                let b = u.last_flush;
                if (u.last_flush = p, u.status === Fi)
                    if (u.wrap === 2) a.adler = 0, Q(u, 31), Q(u, 139), Q(u, 8), u.gzhead ? (Q(u, (u.gzhead.text ? 1 : 0) + (u.gzhead.hcrc ? 2 : 0) + (u.gzhead.extra ? 4 : 0) + (u.gzhead.name ? 8 : 0) + (u.gzhead.comment ? 16 : 0)), Q(u, u.gzhead.time & 255), Q(u, u.gzhead.time >> 8 & 255), Q(u, u.gzhead.time >> 16 & 255), Q(u, u.gzhead.time >> 24 & 255), Q(u, u.level === 9 ? 2 : u.strategy >= Hi || u.level < 2 ? 4 : 0), Q(u, u.gzhead.os & 255), u.gzhead.extra && u.gzhead.extra.length && (Q(u, u.gzhead.extra.length & 255), Q(u, u.gzhead.extra.length >> 8 & 255)), u.gzhead.hcrc && (a.adler = Ie(a.adler, u.pending_buf, u.pending, 0)), u.gzindex = 0, u.status = kr) : (Q(u, 0), Q(u, 0), Q(u, 0), Q(u, 0), Q(u, 0), Q(u, u.level === 9 ? 2 : u.strategy >= Hi || u.level < 2 ? 4 : 0), Q(u, ch), u.status = is);
                    else {
                        let A = Bi + (u.w_bits - 8 << 4) << 8,
                            R = -1;
                        u.strategy >= Hi || u.level < 2 ? R = 0 : u.level < 6 ? R = 1 : u.level === 6 ? R = 2 : R = 3, A |= R << 6, u.strstart !== 0 && (A |= ah), A += 31 - A % 31, u.status = is, Qs(u, A), u.strstart !== 0 && (Qs(u, a.adler >>> 16), Qs(u, a.adler & 65535)), a.adler = 1
                    }
                if (u.status === kr)
                    if (u.gzhead.extra) {
                        for (g = u.pending; u.gzindex < (u.gzhead.extra.length & 65535) && !(u.pending === u.pending_buf_size && (u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), Le(a), g = u.pending, u.pending === u.pending_buf_size));) Q(u, u.gzhead.extra[u.gzindex] & 255), u.gzindex++;
                        u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), u.gzindex === u.gzhead.extra.length && (u.gzindex = 0, u.status = Gi)
                    } else u.status = Gi;
                if (u.status === Gi)
                    if (u.gzhead.name) {
                        g = u.pending;
                        do {
                            if (u.pending === u.pending_buf_size && (u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), Le(a), g = u.pending, u.pending === u.pending_buf_size)) {
                                y = 1;
                                break
                            }
                            u.gzindex < u.gzhead.name.length ? y = u.gzhead.name.charCodeAt(u.gzindex++) & 255 : y = 0, Q(u, y)
                        } while (y !== 0);
                        u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), y === 0 && (u.gzindex = 0, u.status = $i)
                    } else u.status = $i;
                if (u.status === $i)
                    if (u.gzhead.comment) {
                        g = u.pending;
                        do {
                            if (u.pending === u.pending_buf_size && (u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), Le(a), g = u.pending, u.pending === u.pending_buf_size)) {
                                y = 1;
                                break
                            }
                            u.gzindex < u.gzhead.comment.length ? y = u.gzhead.comment.charCodeAt(u.gzindex++) & 255 : y = 0, Q(u, y)
                        } while (y !== 0);
                        u.gzhead.hcrc && u.pending > g && (a.adler = Ie(a.adler, u.pending_buf, u.pending - g, g)), y === 0 && (u.status = zi)
                    } else u.status = zi;
                if (u.status === zi && (u.gzhead.hcrc ? (u.pending + 2 > u.pending_buf_size && Le(a), u.pending + 2 <= u.pending_buf_size && (Q(u, a.adler & 255), Q(u, a.adler >> 8 & 255), a.adler = 0, u.status = is)) : u.status = is), u.pending !== 0) {
                    if (Le(a), a.avail_out === 0) return u.last_flush = -1, re
                } else if (a.avail_in === 0 && Io(p) <= Io(b) && p !== Oe) return Me(a, Mr);
                if (u.status === Ks && a.avail_in !== 0) return Me(a, Mr);
                if (a.avail_in !== 0 || u.lookahead !== 0 || p !== ss && u.status !== Ks) {
                    let A = u.strategy === Hi ? dh(u, p) : u.strategy === Kl ? uh(u, p) : Zs[u.level].func(u, p);
                    if ((A === rs || A === Is) && (u.status = Ks), A === pt || A === rs) return a.avail_out === 0 && (u.last_flush = -1), re;
                    if (A === Js && (p === zl ? $l(u) : p !== Ro && (Fl(u, 0, 0, !1), p === ql && (De(u.head), u.lookahead === 0 && (u.strstart = 0, u.block_start = 0, u.insert = 0))), Le(a), a.avail_out === 0)) return u.last_flush = -1, re
                }
                return p !== Oe ? re : u.wrap <= 0 ? Co : (u.wrap === 2 ? (Q(u, a.adler & 255), Q(u, a.adler >> 8 & 255), Q(u, a.adler >> 16 & 255), Q(u, a.adler >> 24 & 255), Q(u, a.total_in & 255), Q(u, a.total_in >> 8 & 255), Q(u, a.total_in >> 16 & 255), Q(u, a.total_in >> 24 & 255)) : (Qs(u, a.adler >>> 16), Qs(u, a.adler & 65535)), Le(a), u.wrap > 0 && (u.wrap = -u.wrap), u.pending !== 0 ? re : Co)
            },
            Eh = a => {
                if (!a || !a.state) return Wt;
                let p = a.state.status;
                return p !== Fi && p !== kr && p !== Gi && p !== $i && p !== zi && p !== is && p !== Ks ? Me(a, Wt) : (a.state = null, p === is ? Me(a, Wl) : re)
            },
            Sh = (a, p) => {
                let g = p.length;
                if (!a || !a.state) return Wt;
                let y = a.state,
                    u = y.wrap;
                if (u === 2 || u === 1 && y.status !== Fi || y.lookahead) return Wt;
                if (u === 1 && (a.adler = To(a.adler, p, g, 0)), y.wrap = 0, g >= y.w_size) {
                    u === 0 && (De(y.head), y.strstart = 0, y.block_start = 0, y.insert = 0);
                    let X = new Uint8Array(y.w_size);
                    X.set(p.subarray(g - y.w_size, g), 0), p = X, g = y.w_size
                }
                let b = a.avail_in,
                    A = a.next_in,
                    R = a.input;
                for (a.avail_in = g, a.next_in = 0, a.input = p, ns(y); y.lookahead >= Y;) {
                    let X = y.strstart,
                        j = y.lookahead - (Y - 1);
                    do y.ins_h = ke(y, y.ins_h, y.window[X + Y - 1]), y.prev[X & y.w_mask] = y.head[y.ins_h], y.head[y.ins_h] = X, X++; while (--j);
                    y.strstart = X, y.lookahead = Y - 1, ns(y)
                }
                return y.strstart += y.lookahead, y.block_start = y.strstart, y.insert = y.lookahead, y.lookahead = 0, y.match_length = y.prev_length = Y - 1, y.match_available = 0, a.next_in = A, a.input = R, a.avail_in = b, y.wrap = u, re
            };
        var vh = mh,
            _h = Mo,
            wh = No,
            Ah = Oo,
            Th = gh,
            bh = yh,
            Rh = Eh,
            Ch = Sh,
            Ih = "pako deflate (from Nodeca project)",
            ti = {
                deflateInit: vh,
                deflateInit2: _h,
                deflateReset: wh,
                deflateResetKeep: Ah,
                deflateSetHeader: Th,
                deflate: bh,
                deflateEnd: Rh,
                deflateSetDictionary: Ch,
                deflateInfo: Ih
            };
        let Ph = (a, p) => Object.prototype.hasOwnProperty.call(a, p);
        var Oh = function(a) {
                let p = Array.prototype.slice.call(arguments, 1);
                for (; p.length;) {
                    let g = p.shift();
                    if (g) {
                        if (typeof g != "object") throw new TypeError(g + "must be non-object");
                        for (let y in g) Ph(g, y) && (a[y] = g[y])
                    }
                }
                return a
            },
            Nh = a => {
                let p = 0;
                for (let y = 0, u = a.length; y < u; y++) p += a[y].length;
                let g = new Uint8Array(p);
                for (let y = 0, u = 0, b = a.length; y < b; y++) {
                    let A = a[y];
                    g.set(A, u), u += A.length
                }
                return g
            },
            Do = {
                assign: Oh,
                flattenChunks: Nh
            };
        let ko = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch {
            ko = !1
        }
        let ei = new Uint8Array(256);
        for (let a = 0; a < 256; a++) ei[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
        ei[254] = ei[254] = 1;
        var Mh = a => {
            if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(a);
            let p, g, y, u, b, A = a.length,
                R = 0;
            for (u = 0; u < A; u++) g = a.charCodeAt(u), (g & 64512) === 55296 && u + 1 < A && (y = a.charCodeAt(u + 1), (y & 64512) === 56320 && (g = 65536 + (g - 55296 << 10) + (y - 56320), u++)), R += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
            for (p = new Uint8Array(R), b = 0, u = 0; b < R; u++) g = a.charCodeAt(u), (g & 64512) === 55296 && u + 1 < A && (y = a.charCodeAt(u + 1), (y & 64512) === 56320 && (g = 65536 + (g - 55296 << 10) + (y - 56320), u++)), g < 128 ? p[b++] = g : g < 2048 ? (p[b++] = 192 | g >>> 6, p[b++] = 128 | g & 63) : g < 65536 ? (p[b++] = 224 | g >>> 12, p[b++] = 128 | g >>> 6 & 63, p[b++] = 128 | g & 63) : (p[b++] = 240 | g >>> 18, p[b++] = 128 | g >>> 12 & 63, p[b++] = 128 | g >>> 6 & 63, p[b++] = 128 | g & 63);
            return p
        };
        let Lo = (a, p = a.length) => {
            if (p < 65534 && a.subarray && ko) return String.fromCharCode.apply(null, a.length === p ? a : a.subarray(0, p));
            let g = "";
            for (let y = 0; y < p; y++) g += String.fromCharCode(a[y]);
            return g
        };
        var Dh = (a, p) => {
                let g = p || a.length;
                if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(a.subarray(0, p));
                let y, u, b = new Array(g * 2);
                for (u = 0, y = 0; y < g;) {
                    let A = a[y++];
                    if (A < 128) {
                        b[u++] = A;
                        continue
                    }
                    let R = ei[A];
                    if (R > 4) {
                        b[u++] = 65533, y += R - 1;
                        continue
                    }
                    for (A &= R === 2 ? 31 : R === 3 ? 15 : 7; R > 1 && y < g;) A = A << 6 | a[y++] & 63, R--;
                    if (R > 1) {
                        b[u++] = 65533;
                        continue
                    }
                    A < 65536 ? b[u++] = A : (A -= 65536, b[u++] = 55296 | A >> 10 & 1023, b[u++] = 56320 | A & 1023)
                }
                return Lo(b, u)
            },
            kh = (a, p) => {
                p = p || a.length, p > a.length && (p = a.length);
                let g = p - 1;
                for (; g >= 0 && (a[g] & 192) === 128;) g--;
                return g < 0 || g === 0 ? p : g + ei[a[g]] > p ? g : p
            },
            xo = {
                string2buf: Mh,
                buf2string: Dh,
                utf8border: kh
            };

        function Lh() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        }
        var xh = Lh;
        let Vo = Object.prototype.toString,
            {
                Z_NO_FLUSH: Vh,
                Z_SYNC_FLUSH: Uh,
                Z_FULL_FLUSH: jh,
                Z_FINISH: Hh,
                Z_OK: qi,
                Z_STREAM_END: Bh,
                Z_DEFAULT_COMPRESSION: Fh,
                Z_DEFAULT_STRATEGY: Gh,
                Z_DEFLATED: $h
            } = bo;

        function Wi(a) {
            this.options = Do.assign({
                level: Fh,
                method: $h,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: Gh
            }, a || {});
            let p = this.options;
            p.raw && p.windowBits > 0 ? p.windowBits = -p.windowBits : p.gzip && p.windowBits > 0 && p.windowBits < 16 && (p.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new xh, this.strm.avail_out = 0;
            let g = ti.deflateInit2(this.strm, p.level, p.method, p.windowBits, p.memLevel, p.strategy);
            if (g !== qi) throw new Error(ji[g]);
            if (p.header && ti.deflateSetHeader(this.strm, p.header), p.dictionary) {
                let y;
                if (typeof p.dictionary == "string" ? y = xo.string2buf(p.dictionary) : Vo.call(p.dictionary) === "[object ArrayBuffer]" ? y = new Uint8Array(p.dictionary) : y = p.dictionary, g = ti.deflateSetDictionary(this.strm, y), g !== qi) throw new Error(ji[g]);
                this._dict_set = !0
            }
        }
        Wi.prototype.push = function(a, p) {
            let g = this.strm,
                y = this.options.chunkSize,
                u, b;
            if (this.ended) return !1;
            for (p === ~~p ? b = p : b = p === !0 ? Hh : Vh, typeof a == "string" ? g.input = xo.string2buf(a) : Vo.call(a) === "[object ArrayBuffer]" ? g.input = new Uint8Array(a) : g.input = a, g.next_in = 0, g.avail_in = g.input.length;;) {
                if (g.avail_out === 0 && (g.output = new Uint8Array(y), g.next_out = 0, g.avail_out = y), (b === Uh || b === jh) && g.avail_out <= 6) {
                    this.onData(g.output.subarray(0, g.next_out)), g.avail_out = 0;
                    continue
                }
                if (u = ti.deflate(g, b), u === Bh) return g.next_out > 0 && this.onData(g.output.subarray(0, g.next_out)), u = ti.deflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === qi;
                if (g.avail_out === 0) {
                    this.onData(g.output);
                    continue
                }
                if (b > 0 && g.next_out > 0) {
                    this.onData(g.output.subarray(0, g.next_out)), g.avail_out = 0;
                    continue
                }
                if (g.avail_in === 0) break
            }
            return !0
        }, Wi.prototype.onData = function(a) {
            this.chunks.push(a)
        }, Wi.prototype.onEnd = function(a) {
            a === qi && (this.result = Do.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
        };

        function zh(a, p) {
            p = p || {};
            let g = new Wi(p);
            if (g.push(a, !0), g.err) throw g.msg || ji[g.err];
            return g.result
        }

        function qh(a, p) {
            return p = p || {}, p.gzip = !0, zh(a, p)
        }
        return (a, p, g) => {
            let y = qh(a);
            return p === "base64" ? y = btoa(Lo(y)) : y = y.buffer, g && g(y), y
        }
    }
    var gE = (() => {
            class s extends nl {
                constructor() {
                    super(), this.algorithm = Tr.GZIP, this.Kb = Fn(), this.compress = (i, n, o) => this.Mm.compress(i, n).then(o);
                    let e = typeof CompressionStream != "undefined" && !!self.CompressionStream ? yE : mE;
                    this.Mm = new e, pE.create(e, {
                        getPakoCompressor: Fn
                    }).then(i => {
                        this.Mm = i
                    })
                }
                compressSync(t, e) {
                    try {
                        return this.Kb(t, e)
                    } catch (i) {
                        throw it.warn(i), i
                    }
                }
            }
            return s
        })(),
        mE = (() => {
            class s {
                constructor() {
                    this.Jb = Fn()
                }
                compress(t, e) {
                    return Promise.resolve(this.Jb(t, e))
                }
            }
            return s
        })(),
        yE = (() => {
            class s {
                Qb(t) {
                    return new Promise(e => {
                        let i = new FileReader;
                        i.onload = n => e(n.target.result.split(",")[1]), i.readAsDataURL(new Blob([t]))
                    })
                }
                compress(t, e) {
                    let i = new Response(t).body.pipeThrough(new CompressionStream("gzip")),
                        n = new Response(i).arrayBuffer();
                    return e === "base64" ? n.then(o => this.Qb(o)) : n
                }
            }
            return s
        })(),
        EE = (() => {
            class s extends nl {
                constructor() {
                    super(...arguments), this.algorithm = Tr.UNCOMPRESSED, this.compress = (t, e, i) => {
                        i(this.compressSync(t, e))
                    }, this.compressSync = (t, e) => t
                }
            }
            return s
        })(),
        vl = (() => {
            class s {
                static create(t = !0) {
                    return this.instance ? this.instance : t && !dE.isCompressionEnabled() ? new EE : this.instance = new gE
                }
            }
            return s
        })(),
        SE = s => {
            let r = s * 60 * 1e3;
            return `${Math.floor(csDate.now()/r)}`
        },
        vE = 5e3,
        _E = (() => {
            class s extends _c {
                constructor(t, e, i) {
                    super(t, e), this.Hr = null, this.Zb = (i == null ? void 0 : i.type) || "json", this.Dm = i == null ? void 0 : i.cacheMinutes, this.Ro = i == null ? void 0 : i.timeout
                }
                onLoad(t) {
                    this.Br = t
                }
                onError(t) {
                    this.Co = t
                }
                onTimeout(t, e) {
                    this.tr = t, this.Ro = e
                }
                send() {
                    csArray.prototype.forEach.call(this.beforeRequestCallbacks, n => n());
                    let t = this.retrieveParameters();
                    this.Zc(t);
                    let e = Ei.toQuery(t),
                        i = `${this.domainUri}${this.path?`/${this.path}`:""}?${e}`;
                    this.t0(i, this.Zb)
                }
                abort() {
                    this.Hr && (this.Hr.abort(), this.Hr = null)
                }
                isInProgress() {
                    return this.Hr !== null
                }
                t0(t, e) {
                    var i;
                    let n = new XMLHttpRequest;
                    n.open("GET", t, !0), n.responseType = e, n.onerror = () => {
                        var o;
                        return (o = this.Co) === null || o === void 0 ? void 0 : o.call(this, n)
                    }, n.ontimeout = () => {
                        var o;
                        return (o = this.tr) === null || o === void 0 ? void 0 : o.call(this, n)
                    }, n.onload = () => {
                        var o, c;
                        n.status >= 200 && n.status < 400 ? ((o = this.Br) === null || o === void 0 || o.call(this, this.e0(n, e) ? n.response : n.responseText), csArray.prototype.forEach.call(this.afterRequestCallbacks, l => l())) : (c = this.Co) === null || c === void 0 || c.call(this, n)
                    }, n.onloadend = () => {
                        this.Hr = null
                    }, n.timeout = (i = this.Ro) !== null && i !== void 0 ? i : vE, this.Hr = n, n.send()
                }
                e0(t, e) {
                    let i = t.getResponseHeader("Content-Type");
                    return i === null ? e === "json" : csString.prototype.indexOf.call(csString.prototype.toLowerCase.call(i), "json") > 0
                }
                Zc(t) {
                    let e;
                    this.Dm ? e = `${SE(this.Dm)}` : e = csString.prototype.slice.call(`${Math.random()}`, 2, 8), t.r = e
                }
            }
            return s
        })(),
        wE = (() => {
            class s {
                constructor(t) {
                    var e;
                    this.Xe = {}, this.Lu = {}, this.km = i => {
                        for (let n of i) {
                            let {
                                metadata: o,
                                events: c
                            } = n;
                            this.send(c, o)
                        }
                    }, this.ja = t.endpoint, this.Io = t.compressionOpts, this.oe = t.recoveryStorage, this.mandatoryParameters = (e = t.mandatoryParameters) !== null && e !== void 0 ? e : [], this.xu = t.contentType, this.worker = !!t.worker, this.oe && this.oe.recover(this.km)
                }
                setQueryParams(t) {
                    Object.keys(t).forEach(e => {
                        this.Xe[e] = t[e]
                    })
                }
                removeQueryParams(t) {
                    t ? t.forEach(e => {
                        delete this.Xe[e]
                    }) : this.Xe = {}
                }
                send(t, e) {
                    let i = e || { ...this.Xe
                        },
                        n = !("ct" in i),
                        o = this.xu === "application/json" || typeof t != "string" && !this.s0(t);
                    "ct" in i || (!this.Io || !n ? i.ct = Tr.UNCOMPRESSED : i.ct = this.Io.compressionType);
                    let c = o ? JSON.stringify(t) : t,
                        l = Object.keys(i).map(f => `${encodeURIComponent(f)}=${encodeURIComponent(i[f])}`).join("&"),
                        h = `${this.ja}?${l}`;
                    if (cu(this.mandatoryParameters, f => i[f] == null)) {
                        it.warn(`[${this.worker?"WORKER":"MAIN"}] All mandatory parameters are not present on ${h}`);
                        return
                    }
                    this.Io && n && typeof c == "string" ? this.Io.compressor(c, this.Io.compressionOutputType, f => this.Lm(h, i, f)) : this.Lm(h, i, c)
                }
                onLoad(t) {
                    this.Br = t
                }
                onError(t) {
                    this.Co = t
                }
                onTimeout(t, e) {
                    this.tr = t, this.Ro = e
                }
                abort() {
                    this.xm && this.xm()
                }
                setRequestHeader(t, e) {
                    this.Lu[t] = e
                }
                getQueryParams() {
                    return this.Xe
                }
                s0(t) {
                    return t && t.byteLength !== void 0
                }
                Lm(t, e, i) {
                    let n = new XMLHttpRequest,
                        o = Object.keys(e).map(c => `${encodeURIComponent(c)}=${encodeURIComponent(e[c])}`).join("&");
                    n.open("POST", t), this.xu && n.setRequestHeader("Content-Type", this.xu), n.onload = () => {
                        if (this.oe && this.oe.recover(this.km), this.Br) {
                            let c = {
                                params: e,
                                responseText: n.responseText,
                                status: n.status
                            };
                            this.Br(c)
                        }
                    }, n.onerror = () => {
                        this.oe && this.oe.save({
                            key: o,
                            metadata: e,
                            events: i
                        }), this.Co && this.Co({
                            params: e
                        })
                    }, this.Ro && this.tr && (n.timeout = this.Ro, n.ontimeout = () => {
                        this.tr()
                    }), this.xm = () => n.abort(), Object.keys(this.Lu).forEach(c => {
                        n.setRequestHeader(c, this.Lu[c])
                    }), n.send(i)
                }
            }
            return s
        })(),
        _l = (() => {
            class s {
                constructor(t) {
                    this.Vm = t
                }
                create(t, e, i) {
                    let n = e ? {
                        compressor: this.Vm.compress,
                        compressionOutputType: e,
                        compressionType: this.Vm.algorithm
                    } : void 0;
                    return new wE({
                        endpoint: t,
                        compressionOpts: n,
                        recoveryStorage: i
                    })
                }
            }
            return s
        })(),
        AE = (() => {
            class s {
                setItem(t, e) {
                    window.localStorage.setItem(t, e)
                }
                getItem(t) {
                    return window.localStorage.getItem(t)
                }
                removeItem(t) {
                    window.localStorage.removeItem(t)
                }
            }
            return s
        })(),
        TE = (() => {
            class s {
                constructor(t) {
                    this.Vu = t
                }
                start() {
                    this.Vu.onEvent(t => this.Z(t)), this.Vu.start()
                }
                stop() {
                    this.Vu.stop()
                }
                Z(t) {
                    let e = `Content Security Policy error. Violated directive: ${t.violatedDirective} - Source file: ${t.sourceFile}`;
                    F.warn(e)
                }
            }
            return s
        })(),
        bE = (() => {
            class s {
                constructor() {
                    this.Kt = {
                        boundElement: document,
                        type: "securitypolicyviolation",
                        listener: t => this.securityPolicyViolationListener(t)
                    }
                }
                start() {
                    Ot(this.Kt)
                }
                stop() {
                    Nt(this.Kt)
                }
                onEvent(t) {
                    this.V = t
                }
                i0(t) {
                    if (!t) return !1;
                    let e = t.disposition;
                    return q(t.sourceFile) && csArray.prototype.some.call(s.r0, i => csString.prototype.indexOf.call(t.sourceFile, i) > 0) && e !== "report"
                }
                securityPolicyViolationListener(t) {
                    this.i0(t) && this.V({
                        violatedDirective: t.violatedDirective,
                        sourceFile: t.sourceFile
                    })
                }
            }
            return s.r0 = ["contentsquare", "cdnssl.clicktale.net"], B([V("Event handler type: securitypolicyviolation")], s.prototype, "securityPolicyViolationListener", null), s
        })(),
        RE = (() => {
            class s {
                init() {
                    this.Ec = new TE(new bE), this.Ec.start()
                }
                onOptout() {
                    this.Ec.stop()
                }
                onArtificialPageViewEnd(t) {
                    t && this.Ec.stop()
                }
                onAfterArtificialPageView(t) {
                    t && this.Ec.start()
                }
            }
            return s
        })(),
        CE = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.R = e, this.w = i
                }
                grantReplayConsent() {
                    if (!Xe.isReplayConsentNeeded(this.E)) return;
                    let t = this.R.getSession();
                    if (!t) {
                        this.R.grantReplayRecordingBeforeSessionStart();
                        return
                    }
                    Xe.isRecordingBlockedByConsent(t) && (this.R.grantReplayRecording(t), this.w.emitAfterReplayRecordingConsentGranted())
                }
                withdrawReplayConsent() {
                    if (!Xe.isReplayConsentNeeded(this.E)) return;
                    let t = this.R.getSession();
                    if (!t) {
                        this.R.withdrawnReplayRecordingBeforeSessionStart();
                        return
                    }
                    Xe.isRecordingWithDrawn(t) || (this.R.withdrawnReplayRecording(t), this.w.emitAfterReplayRecordingConsentWithdrawn())
                }
            }
            return s
        })(),
        IE = ["replay:consent:unanonymized:granted", "trackConsentGranted"],
        PE = ["replay:consent:unanonymized:withdrawn", "trackConsentWithdrawn"],
        OE = ["replay:consent:startForSession:granted"],
        NE = ["replay:consent:startForSession:withdrawn"],
        ME = (() => {
            class s {
                constructor(t, e, i, n, o) {
                    this.E = t, this.S = e, this.Ct = i, this.R = n, this.w = o
                }
                init() {
                    this.Um = new CE(this.E, this.R, this.w), this.Ct.setInitialConsent(), this.ut()
                }
                ut() {
                    this.S.register(IE, () => {
                        this.Ct.grantReplayAnonymizationConsent()
                    }), this.S.register(PE, () => {
                        this.Ct.withdrawReplayAnonymizationConsent()
                    }), this.S.register(OE, () => {
                        this.Um.grantReplayConsent()
                    }), this.S.register(NE, () => {
                        this.Um.withdrawReplayConsent()
                    })
                }
                onOptout() {
                    this.Ct.removeAllConsents()
                }
                onBeforeVisitorRenewal() {
                    this.Ct.removeAllConsents()
                }
                onAfterVisitorRenewal() {
                    this.Ct.setInitialConsent()
                }
                onAfterVisitorCleared() {
                    this.Ct.setInitialConsent()
                }
            }
            return s
        })(),
        Ge = "_cs_c",
        cs = (() => {
            let s;
            return function(r) {
                r[r.NOT_REQUIRED = 0] = "NOT_REQUIRED", r[r.NOT_EXPRESSED = 1] = "NOT_EXPRESSED", r[r.GRANTED = 2] = "GRANTED", r[r.WITHDRAWN = 3] = "WITHDRAWN"
            }(s || (s = {})), s
        })(),
        DE = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.Nt = i
                }
                get() {
                    let t;
                    return this.E.cookielessTrackingEnabled ? t = this.Nt.getItem(Ge) : t = this.N.get(Ge), t === null ? t : Number(t)
                }
                set(t) {
                    this.E.cookielessTrackingEnabled ? this.Nt.setItem(Ge, csString(t)) : this.N.set(Ge, csString(t), Wn)
                }
                remove() {
                    this.E.cookielessTrackingEnabled ? this.Nt.removeItem(Ge) : this.N.delete(Ge)
                }
                handleSubdomainChange() {
                    this.E.cookielessTrackingEnabled || (this.E.allowSubdomains ? this.N.delete(Ge, vr.CURRENT_DOMAIN) : this.N.delete(Ge, this.N.getRootDomain()))
                }
            }
            return s
        })(),
        kE = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.ft = e, this.w = i
                }
                setInitialConsent() {
                    let t = this.ft.get();
                    (t === null || this.hasConsentRequiredChanged(t)) && this.setDefaultReplayAnonymization()
                }
                hasConsentRequiredChanged(t) {
                    let e = this.E.consentRequired;
                    return e && t === cs.NOT_REQUIRED || !e && t !== cs.NOT_REQUIRED
                }
                handleSubdomainChange() {
                    this.ft.handleSubdomainChange()
                }
                setDefaultReplayAnonymization() {
                    let t = this.E.consentRequired ? cs.NOT_EXPRESSED : cs.NOT_REQUIRED;
                    this.ft.set(t)
                }
                grantReplayAnonymizationConsent() {
                    this.E.consentRequired && (this.ft.set(cs.GRANTED), this.w.emitReplayUnanonymizationConsentGranted())
                }
                withdrawReplayAnonymizationConsent() {
                    this.E.consentRequired && (this.ft.set(cs.WITHDRAWN), this.w.emitReplayUnanonymizationConsentWithdrawn())
                }
                removeAllConsents() {
                    this.ft.remove()
                }
                isReplayUnanonymizedAllowedByConsent() {
                    return !this.E.consentRequired || this.ft.get() === cs.GRANTED
                }
                getRequestParameters() {
                    return {
                        uc: `${this.ft.get()}`
                    }
                }
            }
            return s
        })();
    var LE = (() => {
        class s {
            setItem(t, e) {
                window.sessionStorage.setItem(t, e)
            }
            getItem(t) {
                return window.sessionStorage.getItem(t)
            }
            removeItem(t) {
                window.sessionStorage.removeItem(t)
            }
        }
        return s
    })();
    var Ya = 512,
        Xa = 255,
        ln = {
            SESSION: ["visit", 2],
            PAGE: ["page", 3],
            NEXT_PAGE_ONLY: ["nextPageOnly", 4]
        },
        xE = (() => {
            class s {
                constructor(t, e) {
                    this.D = t, this.ft = e, this.te = {}, this.Fe = {}
                }
                set(t, e, i, n) {
                    let o, c;
                    if ((Jt(t) || q(t)) && Number(t) > 0 && Mt(e) && Mt(i) && !Ze(e) && !Ze(i) && this.a0(n)) {
                        let l = this.D.anonymizePII(csString(e)),
                            h = this.D.anonymizePII(csString(i));
                        if (o = [csString.prototype.slice.call(l, 0, Ya), csString.prototype.slice.call(h, 0, Xa)], c = i !== "", !Z(n) || csArray.prototype.indexOf.call(ln.SESSION, n) >= 0) {
                            let f = this.getCustomVariablesSession();
                            c ? f[t] = o : delete f[t], this.setCustomVariableSession(f)
                        }(!Z(n) || csArray.prototype.indexOf.call(ln.PAGE, n) >= 0) && (c ? this.te[t] = o : delete this.te[t]), Z(n) && csArray.prototype.indexOf.call(ln.NEXT_PAGE_ONLY, n) >= 0 && (c ? this.Fe[t] = o : delete this.Fe[t])
                    } else throw new Ct(Vc[0])
                }
                getCustomVariablesSession() {
                    let t = this.ft.get();
                    if (!t) return {};
                    let e = window.csJSON.parse(t);
                    return e !== null && pi(e) ? e : {}
                }
                setCustomVariableSession(t) {
                    this.ft.set(window.csJSON.stringify(t))
                }
                removeCustomVariablesSession() {
                    this.ft.remove()
                }
                removeCustomVariablesPage() {
                    this.te = {}
                }
                getRequestParameters() {
                    let t = this.getCustomVariablesSession();
                    for (let i in this.Fe) this.Fe.hasOwnProperty(i) && (this.te[i] = this.Fe[i]);
                    for (let i in this.te) this.te.hasOwnProperty(i) && (t[i] = this.te[i]);
                    if (window.csJSON.stringify(t).length <= 2) return {};
                    let e = {
                        cvars: this.Hm(t)
                    };
                    return this.hasCustomVariablesPage() && (e.cvarp = this.getCustomVariablesPage()), e
                }
                deleteNextPageOnlyCustomVariables() {
                    if (Object.keys(this.Fe).length > 0)
                        for (let t in this.Fe) this.Fe[t] === this.te[t] && (delete this.te[t], delete this.Fe[t])
                }
                hasCustomVariablesPage() {
                    return this.te && !mn(this.te)
                }
                getCustomVariablesPage() {
                    return this.Hm(this.te)
                }
                Bm(t) {
                    for (let e in t)
                        if (t.hasOwnProperty(e)) {
                            let i = parseInt(e, 10),
                                n = t[e],
                                o = n[0],
                                c = n[1];
                            (!Xh(i, 1, 20) || o.length > Ya || c.length > Xa) && delete t[e]
                        }
                }
                Hm(t) {
                    this.Bm(t);
                    let e = mn(t) ? [] : t;
                    return window.csJSON.stringify(e)
                }
                a0(t) {
                    return !Z(t) || q(t) || Jt(t)
                }
                getAllValidCustomVars() {
                    let t = this.getCustomVariablesSession();
                    for (let e in this.Fe) this.Fe.hasOwnProperty(e) && (this.te[e] = this.Fe[e]);
                    for (let e in this.te) this.te.hasOwnProperty(e) && (t[e] = this.te[e]);
                    return this.Bm(t), t
                }
            }
            return s
        })(),
        VE = (() => {
            class s {
                constructor(t, e, i, n) {
                    this.we = t, this.Po = e, this.Oo = i, this.Ct = n
                }
                init() {
                    this.c0()
                }
                shouldMaskNonTextElements() {
                    if (this.we.anonymisationMethod !== as.replayRecordingMaskedUrlRegexRules) return !1;
                    if (this.we.isSMB) return this.shouldUseAnonymization();
                    let t = this.Oo.getMatchingRules(this.Po.getAnonymizedUrl());
                    return csArray.prototype.some.call(t, e => e.maskMedia)
                }
                shouldUseAnonymization() {
                    if (this.Ct && !this.Ct.isReplayUnanonymizedAllowedByConsent()) {
                        switch (this.we.anonymisationMethod) {
                            case null:
                            case as.replayRecordingUnmaskedUrlRegex:
                                return !(this.we.replayRecordingUnmaskedUrlRegex && this.we.replayRecordingUnmaskedUrlRegex.test(this.Po.getAnonymizedUrl()));
                            case as.replayRecordingUnmaskedUrlRegexRules:
                                return !this.Oo.evaluateUrl(this.Po.getAnonymizedUrl())
                        }
                        return !0
                    } else {
                        switch (this.we.anonymisationMethod) {
                            case null:
                            case as.replayRecordingMaskedUrlRegex:
                                return !!(this.we.replayRecordingMaskedUrlRegex && this.we.replayRecordingMaskedUrlRegex.test(this.Po.getAnonymizedUrl()));
                            case as.replayRecordingMaskedUrlRegexRules:
                                return this.Oo.evaluateUrl(this.Po.getAnonymizedUrl())
                        }
                        return !1
                    }
                }
                c0() {
                    this.we.anonymisationMethod === as.replayRecordingMaskedUrlRegexRules && this.we.replayRecordingMaskedUrlRegexRules ? this.Oo.setRegexRules(this.we.replayRecordingMaskedUrlRegexRules) : this.we.anonymisationMethod === as.replayRecordingUnmaskedUrlRegexRules && this.we.replayRecordingUnmaskedUrlRegexRules && this.Oo.setRegexRules(this.we.replayRecordingUnmaskedUrlRegexRules)
                }
            }
            return s
        })();
    var UE = (() => {
            class s extends fe {
                constructor(t) {
                    super(), this.W = null, this.Sc = null, this.L = null, this.ci = null, this.Fm = ["value", "checked", "src", "data", "alt"], this.vc = {
                        state: D.MaskedElementState.Child
                    }, this.h0 = e => {
                        for (let i of e) {
                            if (D.isMaskedElement(i.target) || D.isMaskedElementChild(i.target))
                                for (let n = 0; n < i.addedNodes.length; n += 1) {
                                    let o = i.addedNodes[n];
                                    D.isMaskedElement(o) || D.isMaskedElementChild(o) || ct(o) && this.Gm(o)
                                }
                            for (let n = 0; n < i.removedNodes.length; n += 1) {
                                let o = i.removedNodes[n];
                                ft.isConnected(o) || this.$m(o)
                            }
                        }
                    }, this.u0 = t
                }
                setMaskedElementSettings(t) {
                    this.$s = t
                }
                startIdentifier() {
                    this.isStarted || (this.isStarted = !0, this.onStart())
                }
                stopIdentifier() {
                    return this.isStarted = !1, this.onStop()
                }
                start() {}
                stop() {}
                onStart() {
                    var t, e, i, n;
                    this.$s || (it.error("maskedElementSettings not initialized", "MaskedElementIdentifier.start"), this.$s = {
                        elementSelector: "",
                        attrSelector: "",
                        attrSelectors: []
                    });
                    let {
                        elementSelector: o,
                        attrSelector: c,
                        attrSelectors: l
                    } = this.$s;
                    (t = this.ci) !== null && t !== void 0 || (this.ci = this.d0()), o.length !== 0 && ((e = this.W) !== null && e !== void 0 || (this.W = this.f0()), this.W.observe(o)), c.length !== 0 && ((i = this.Sc) !== null && i !== void 0 || (this.Sc = this.p0(l)), this.Sc.observe(c)), (n = this.L) !== null && n !== void 0 || (this.L = new ts(this.h0, (h, f) => f === "added" && this.g0(h))), this.L.observe(), csSetTimeout(this.u0)
                }
                onStop() {
                    var t, e, i;
                    this.W && (this.$m(document), this.W.disconnect()), (t = this.Sc) === null || t === void 0 || t.disconnect(), (e = this.L) === null || e === void 0 || e.disconnect(), (i = this.ci) === null || i === void 0 || i.disconnect()
                }
                d0() {
                    return window.ResizeObserver ? new ResizeObserver(t => {
                        window.requestAnimationFrame(() => {
                            csArray.prototype.forEach.call(t, e => {
                                this.resizeObserverCallback(e)
                            })
                        })
                    }) : null
                }
                f0() {
                    return new Gs(t => {
                        csArray.prototype.forEach.call(t, e => {
                            this.m0(e) ? this.Gm(e) : (this.y0(e), this.E0(e))
                        })
                    })
                }
                p0(t) {
                    return new Gs(e => {
                        csArray.prototype.forEach.call(e, i => this.S0(i, t))
                    })
                }
                resizeObserverCallback(t) {
                    let e = t.target.getBoundingClientRect(),
                        i = D.getMaskedElementDetails(t.target);
                    if (i.state !== D.MaskedElementState.Parent || e.width === i.width && e.height === i.height) return;
                    let n = {
                        state: D.MaskedElementState.Parent,
                        width: e.width,
                        height: e.height
                    };
                    D.setMaskedElementProperty(t.target, n), this.produceEvent({
                        type: "ResizeMaskedElement",
                        target: G(t.target),
                        width: e.width,
                        height: e.height
                    })
                }
                E0(t) {
                    !this.ci || !ct(t) || Sr(t) || this.ci.observe(t)
                }
                m0(t) {
                    let e = csNodeparentNode.apply(t);
                    return e ? D.isMaskedElement(e) || D.isMaskedElementChild(e) : yi(t) ? D.isMaskedElement(t.host) || D.isMaskedElementChild(t.host) : !1
                }
                g0(t) {
                    (D.isMaskedElement(t.host) || D.isMaskedElementChild(t.host)) && D.setMaskedElementProperty(t, this.vc)
                }
                $m(t) {
                    se(t, NodeFilter.SHOW_ELEMENT).visitAll(i => {
                        D.unsetMaskedElementProperty(i)
                    })
                }
                y0(t) {
                    let e = t.getBoundingClientRect(),
                        i = {
                            state: D.MaskedElementState.Parent,
                            width: e.width,
                            height: e.height
                        };
                    D.setMaskedElementProperty(t, i), this.v0(t), se(t).visitAll(n => n !== t && D.setMaskedElementProperty(n, this.vc))
                }
                Gm(t) {
                    D.setMaskedElementProperty(t, this.vc), se(t).visitAll(e => e !== t && D.setMaskedElementProperty(e, this.vc))
                }
                v0(t) {
                    var e;
                    let i = (e = et.getProperty(t, D.maskedAttributeProp)) !== null && e !== void 0 ? e : {
                        attributes: []
                    };
                    for (let n = 0; n < this.Fm.length; n += 1) {
                        let o = this.Fm[n];
                        csArray.prototype.indexOf.call(i.attributes, o) === -1 && csArray.prototype.push.call(i.attributes, o)
                    }
                    i.attributes.length !== 0 && D.setMaskedAttributeProperty(t, i)
                }
                S0(t, e) {
                    var i;
                    let n = (i = et.getProperty(t, D.maskedAttributeProp)) !== null && i !== void 0 ? i : {
                        attributes: []
                    };
                    for (let o = 0; o < t.attributes.length; o += 1) {
                        let c = t.attributes[o].name;
                        csArray.prototype.indexOf.call(n.attributes, c) === -1 && csArray.prototype.some.call(e, l => csString.prototype.indexOf.call(l.attrName, c) > -1 && ie.call(t, l.selector)) && csArray.prototype.push.call(n.attributes, c)
                    }
                    n.attributes.length !== 0 && D.setMaskedAttributeProperty(t, n)
                }
            }
            return be([V()], s.prototype, "resizeObserverCallback", null), s
        })(),
        jE = (() => {
            class s {
                constructor() {
                    this.ju = 0, this.U = !1, this.zm = "data-cs-capture", this.Ai = t => {
                        for (let e of t) {
                            if (ce.isWhitelistedElement(e.target))
                                for (let i = 0; i < e.addedNodes.length; i += 1) {
                                    let n = e.addedNodes[i];
                                    ce.isWhitelistedElement(n) || ct(n) && this.qm(n)
                                }
                            for (let i = 0; i < e.removedNodes.length; i += 1) {
                                let n = e.removedNodes[i];
                                ft.isConnected(n) || this.Wm(n)
                            }
                        }
                    }
                }
                start() {
                    this.ju++, !this.U && (this.U = !0, this._0())
                }
                _0() {
                    this.W || (this.W = new Gs(e => J(e, i => this.qm(i))));
                    let t = this.Hu ? `[${this.zm}], ${this.Hu}` : `[${this.zm}]`;
                    this.W.observe(t), this.L || (this.L = new ts(this.Ai, (e, i) => i === "added" && this.w0(e))), this.L.observe()
                }
                stop() {
                    this.U && (this.ju--, this.ju === 0 && (this.U = !1, this.A0()))
                }
                A0() {
                    this.W && (this.Wm(document), this.W.disconnect()), this.L && this.L.disconnect()
                }
                setWhitelistedElementsSelector(t, e = !0) {
                    if (li(t)) this.Hu = t;
                    else if (e) throw new Ct("setCapturedElementsSelector")
                }
                getWhitelistedElementsSelector() {
                    return this.Hu
                }
                qm(t) {
                    se(t).visitAll(e => {
                        ce.whitelistElement(e)
                    })
                }
                w0(t) {
                    ce.isWhitelistedElement(t.host) && ce.whitelistElement(t)
                }
                Wm(t) {
                    se(t, NodeFilter.SHOW_ELEMENT).visitAll(i => {
                        ce.removeWhitelistElement(i)
                    })
                }
            }
            return s
        })();
    var HE = (() => {
        let s;
        return function(r) {
            function t() {
                let i = navigator.userAgent + navigator.language + navigator.platform,
                    n = csString.prototype.slice.call(e(i).toString(16), -4),
                    o = new csDate().getTime(),
                    c = "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, l => {
                        let h = (o + Math.random() * 16) % 16 | 0;
                        return o = Math.floor(o / 16), (l === "x" ? h : h & 7 | 8).toString(16)
                    });
                return csString.prototype.replace.call(c, "hhhh", n)
            }
            r.generate = t;

            function e(i) {
                let n = 0;
                for (let o = 0; o < i.length; o += 1) n = csString.prototype.charCodeAt.call(i, o) + (n << 6) + (n << 16) - n;
                return Math.abs(n)
            }
        }(s || (s = {})), s
    })();
    var BE = (() => {
        class s {
            constructor(t, e) {
                this.tt = t, this.Tt = e, this.Bu = !1
            }
            getRequestParameters() {
                return {
                    dr: this.get()
                }
            }
            addUrlMaskingPattern(t) {
                this.Tt.addUrlMaskingPattern(t)
            }
            enableRemoveQueryString() {
                this.Bu = !0
            }
            disableRemoveQueryString() {
                this.Bu = !1
            }
            get() {
                let t = this.Bu ? this.tt.removeQueryString(this.Qm()) : this.Qm();
                return this.tt.anonymizeUrl(t, {
                    maskingPatterns: this.Tt.getUrlMaskingPatterns()
                })
            }
            set(t) {
                this.Zm = t
            }
            Qm() {
                if (this.Zm) return this.Zm;
                let t = "";
                try {
                    t = window.top.document.referrer
                } catch {
                    if (window.parent) try {
                        t = window.parent.document.referrer
                    } catch {
                        t = ""
                    }
                }
                return t === "" && (t = document.referrer), typeof t != "string" && (t = ""), t
            }
        }
        return s
    })();

    function Ka(s, r, t) {
        if (!Z(r) && !Z(t)) return s.href;
        let e = Z(r) ? wl(r) : s.pathname,
            i = Z(t) ? Al(t) : s.search;
        return `${s.protocol}//${s.host}${e}${i}`
    }

    function wl(s) {
        return jt(s, "/") ? s : `/${s}`
    }

    function Al(s) {
        return jt(s, "?") || s === "" ? s : `?${s}`
    }
    var hn = (() => {
            let s;
            return function(r) {
                r[r.page = 1] = "page", r[r.onNextPageviewOnly = 2] = "onNextPageviewOnly"
            }(s || (s = {})), s
        })(),
        FE = (() => {
            class s {
                constructor(t, e) {
                    this.Lt = t, this.tt = e, this.V0 = 10
                }
                overridePath(t, e) {
                    if (t === "") {
                        this.Fr = void 0;
                        return
                    }
                    let i = this.ty(e);
                    i && (this.Fu = i), this.Fr = e ? this.ey(t, e) : t
                }
                overrideQuery(t, e) {
                    let i = this.ty(e);
                    i && (this.Gu = i), this.Mo = e ? this.ey(t, e) : t
                }
                computeOverriddenUrl(t) {
                    return this.U0(t) ? this.getAnonymizedUrl() : t
                }
                j0(t) {
                    return (typeof t == "string" || typeof t == "number") && t in hn
                }
                U0(t) {
                    let e = this.fa(this.Lt.href);
                    return this.fa(t) === e
                }
                fa(t) {
                    return _d(t, "/") ? csString.prototype.slice.call(t, 0, -1) : t
                }
                ty(t) {
                    return Z(t == null ? void 0 : t.lifespan) && this.j0(t == null ? void 0 : t.lifespan) ? t == null ? void 0 : t.lifespan : null
                }
                H0() {
                    return this.Fu && this.Fu in hn
                }
                B0() {
                    return this.Gu && this.Gu in hn
                }
                cleanupOverrideLifespan() {
                    this.H0() && (this.Fr = void 0, this.Fu = void 0), this.B0() && (this.Mo = void 0, this.Gu = void 0)
                }
                getAnonymizedUrl() {
                    let t = Ka(this.Lt, this.Fr, this.Mo);
                    return this.tt.anonymizeUrl(t)
                }
                getUrl() {
                    return Ka(this.Lt, this.Fr, this.Mo)
                }
                getAnonymizedPathAndQuery() {
                    let t = Z(this.Fr) ? wl(this.Fr) : this.Lt.pathname,
                        e = Z(this.Mo) ? Al(this.Mo) : this.Lt.search;
                    return this.tt.anonymizeUrl(t + e)
                }
                getUrlProtocol() {
                    return this.Lt.protocol
                }
                getRequestParameters() {
                    return {
                        url: this.getAnonymizedUrl()
                    }
                }
                ey(t, e) {
                    return this.F0(e) ? this.G0(t) : this.$0(e) ? this.z0(t) : t
                }
                $0(t) {
                    return !!t.decodeURI
                }
                z0(t) {
                    return this.sy(t, 1, !1)
                }
                F0(t) {
                    return !!t.decodeURIDeep
                }
                G0(t) {
                    return this.sy(t, this.V0, !0)
                }
                sy(t, e, i) {
                    let n = t;
                    for (let o = 0; o < e; o++) try {
                        let c = window.decodeURI(n);
                        if (c === n) return n;
                        n = c
                    } catch {
                        return n
                    }
                    return i && F.warn(`decodeURIDeep limit reached: ${n}`), n
                }
            }
            return s
        })(),
        GE = (() => {
            class s {
                constructor(t, e) {
                    this.S = t, this.Ts = e
                }
                init() {
                    this.S.register(["debugEvents"], t => {
                        typeof t == "boolean" && this.Ts.updateDynamicFields("emitDebugEvents", t)
                    })
                }
            }
            return s
        })();
    var Ja = (() => {
        class s {
            constructor(t, e, i, n, o) {
                this.E = t, this.O = e, this.R = i, this.iy = n, this.zs = o
            }
            getRequestParameters() {
                var t;
                let e = { ...io(),
                        ...this.E.getRequestParameters()
                    },
                    i = this.R.getSession();
                i && (e.pn = `${i.pageNumber}`);
                let n = this.O.getVisitor();
                if (n && (e.sn = `${n.visitsCount}`, e.uu = `${n.id}`), !((t = this.iy) === null || t === void 0) && t.hasSubProjectId() && (e.subProjectID = `${this.iy.getSubProjectId()}`), this.q0(e), window.heap && !this.E.isCsCrosswritingHeap()) try {
                    e.happid = window.heap.appid, window.heap.getSessionId && (e.hsid = window.heap.getSessionId()), window.heap.getUserId ? e.huu = window.heap.getUserId() : window.heap.userId && (e.huu = window.heap.userId), window.heap.getPageviewMetadata && (e.hpvid = window.heap.getPageviewMetadata().pageviewId)
                } catch {
                    delete e.happid, delete e.hsid, delete e.huu, delete e.hpvid
                }
                return e
            }
            q0(t) {
                if (!this.zs) return;
                let e = this.zs.getSharedContext();
                e && (t.happid = e.happid, t.t = e.pageTitle, t.fvt = csString(e.firstViewTime), t.fvurl = e.firstViewUrl, e.previousViewUrl && (t.pvurl = e.previousViewUrl), t.url = e.currentViewUrl, e.sessionReferrer && (t.fpvurl = e.sessionReferrer), t.sw = csString(e.screenWidth), t.sh = csString(e.screenHeight), t.cvt = csString(e.currentViewTime), e.encryptedIdentity && (t.i = e.encryptedIdentity), e.cvarp && (t.cvarp = e.cvarp))
            }
        }
        return s
    })();

    function $E() {
        let s = "[data-cs-mask]",
            r = "#c1_card_info_id",
            t = ".ctHidden",
            e = ["[data-heap-redact-text]", "[heap-ignore]", "[data-heap-ignore]", "[data-heap-redact-attributes]"],
            i = ["[data-hj-suppress]", ".data-hj-suppress", "[data-hj-masked]"];
        return [s, r, t, ...e, ...i]
    }

    function zE() {
        return [{
            selector: ".ctHidden,input:not([type=button]):not([type=submit])",
            attrName: "value"
        }]
    }
    var qE = (() => {
            class s {
                constructor() {
                    this.W0 = {
                        PIISelectors: ["picture", "img", "video", "audio"],
                        Attributes: []
                    }, this.$s = {
                        elementSelector: "",
                        attrSelector: "",
                        attrSelectors: []
                    };
                    let t = {
                        PIISelectors: $E(),
                        Attributes: zE()
                    };
                    this.$s = D.getComputedSelectorSettings(t, this.$s)
                }
                init() {
                    this.Y0()
                }
                setMaskedElementSettingsFromCommand(t) {
                    if (t = D.sanitizeSelectorUserInput(t), !D.isSelectorUserInput(t)) throw new Ct(Uc[0]);
                    this.$u(t)
                }
                setMaskedElementSettingsFromParent(t) {
                    let e = {
                        PIISelectors: csString.prototype.split.call(t.elementSelector, ","),
                        Attributes: t.attrSelectors
                    };
                    this.$u(e)
                }
                getMaskedElementSettings(t) {
                    return t ? this.ry(this.W0) : this.$s
                }
                Y0() {
                    var t, e, i, n, o, c;
                    let l = {
                        PIISelectors: [],
                        Attributes: []
                    };
                    ((i = (e = (t = window == null ? void 0 : window.ClickTaleSettings) === null || t === void 0 ? void 0 : t.DOM) === null || e === void 0 ? void 0 : e.PII) === null || i === void 0 ? void 0 : i.Text) instanceof Array && l.PIISelectors.push(...window.ClickTaleSettings.DOM.PII.Text), ((c = (o = (n = window == null ? void 0 : window.ClickTaleSettings) === null || n === void 0 ? void 0 : n.DOM) === null || o === void 0 ? void 0 : o.PII) === null || c === void 0 ? void 0 : c.Attributes) instanceof Array && window.ClickTaleSettings.DOM.PII.Attributes.forEach(h => {
                        q(h.attr) && q(h.rule) && l.Attributes.push({
                            selector: h.rule,
                            attrName: h.attr
                        })
                    }), this.$u(l)
                }
                $u(t) {
                    this.$s = this.ry(t)
                }
                ry(t) {
                    return D.getComputedSelectorSettings(t, this.$s)
                }
            }
            return s
        })(),
        WE = 60 * 1e3,
        YE = 30 * 1e3,
        XE = (() => {
            class s {
                constructor(t, e) {
                    this.R = t, this.O = e, this.zu = !1, this.X0 = _r(() => this.R.refreshSession(), YE)
                }
                onSessionExpired(t) {
                    this.K0 = t
                }
                isSessionValid() {
                    return this.zu ? !0 : !(!this.R.hasValidSession() || this.R.pollCacheRefreshEvent() && this.O.isSessionRenewed())
                }
                isCurrentPageviewValid() {
                    let t = this.R.hasValidSession();
                    return this.R.pollCacheRefreshEvent(!1) ? !this.O.isSessionRenewed() : t
                }
                refreshSession() {
                    this.isSessionValid() ? this.X0() : this.J0() && (this.ny = M.now(), this.renewSession(!1))
                }
                renewSession(t) {
                    this.zu = !0, this.K0(t), this.zu = !1
                }
                J0() {
                    return !document.hidden && (!Z(this.ny) || M.now() - this.ny > WE)
                }
            }
            return s
        })(),
        KE = (() => {
            class s {
                constructor() {
                    this.W = null, this.L = null, this.U = !1, this.Ai = t => {
                        for (let e of t)
                            if (ze.isEditableNode(e.target))
                                for (let i = 0; i < e.addedNodes.length; i += 1) {
                                    let n = e.addedNodes[i];
                                    if (!ze.isEditableNode(n)) {
                                        if (lr(n) || Au(n)) {
                                            ze.markEditableNode(n);
                                            continue
                                        }
                                        ct(n) && this.oy(n)
                                    }
                                }
                    }
                }
                start() {
                    this.U || (this.U = !0, this.W = new Gs(t => J(t, e => {
                        this.oy(e)
                    })), this.W.observe("[contenteditable]"), this.L = new ts(this.Ai, (t, e) => e === "added" && this.Q0(t)), this.L.observe())
                }
                stop() {
                    var t, e;
                    this.U && (this.U = !1, (t = this.W) === null || t === void 0 || t.disconnect(), this.W = null, (e = this.L) === null || e === void 0 || e.disconnect(), this.L = null)
                }
                oy(t) {
                    se(t).visitAll(e => {
                        ze.markEditableNode(e)
                    })
                }
                Q0(t) {
                    ze.isEditableNode(t.host) && ze.markEditableNode(t)
                }
            }
            return s
        })();
    var Tl = (() => {
            class s {
                constructor() {
                    this.subscriptions = {}
                }
                subscribe(t, e) {
                    this.subscriptions[t] = e, Object.keys(this.subscriptions).length === 1 && this.onStartTracking()
                }
                unsubscribe(t) {
                    delete this.subscriptions[t], Object.keys(this.subscriptions).length === 0 && this.onStopTracking()
                }
            }
            return s
        })(),
        JE = (() => {
            class s extends Tl {
                constructor(t) {
                    super(), this.tR = t, this.fi = [{
                        boundElement: document,
                        type: "touchstart",
                        listener: e => this.Z(e)
                    }, {
                        boundElement: document,
                        type: "touchmove",
                        listener: e => this.Z(e)
                    }, {
                        boundElement: document,
                        type: "touchend",
                        listener: e => this.Z(e)
                    }], this.Do = new kn, this.Do.onGesture((e, i) => this.Ch(e, i))
                }
                Ch(t, e) {
                    for (let i in this.subscriptions) {
                        let n = this.subscriptions[i];
                        n(t, e)
                    }
                }
                onStartTracking() {
                    this.canDetectGesture() && csArray.prototype.forEach.call(this.fi, t => Ot(t))
                }
                onStopTracking() {
                    this.canDetectGesture() && csArray.prototype.forEach.call(this.fi, t => Nt(t))
                }
                canDetectGesture() {
                    return typeof devicePixelRatio != "undefined"
                }
                Z(t) {
                    this.tR.tryToExecute("process gesture event", () => {
                        if (this.Do.isValidTouchEvent(t)) switch (t.type) {
                            case "touchstart":
                                this.Do.processActionDown(t);
                                break;
                            case "touchmove":
                                this.Do.processActionMove();
                                break;
                            case "touchend":
                                this.Do.processActionUp(t);
                                break
                        }
                    })()
                }
                static isSwipe(t) {
                    return t.type === yt.FLICK || t.type === yt.DRAG
                }
            }
            return s
        })();
    var QE = (() => {
            class s {
                constructor(t) {
                    this.pt = t
                }
                on(t, e) {
                    return i => {
                        this.pt.hasValidEventTarget(i) && this.vR(i, t) && e(i)
                    }
                }
                vR(t, e) {
                    let i = mt(t);
                    return ie.call(i, e)
                }
                isMatchesSelectorSupported() {
                    return !!ie
                }
            }
            return s
        })(),
        ZE = (() => {
            class s extends kt {
                constructor() {
                    super(), this.dy = 0
                }
                onStart() {
                    F.isPerfLoggingActive() && (this.ko = window.csSetInterval(() => this.fy(), s._R))
                }
                onStop() {
                    F.isPerfLoggingActive() && (this.fy(), csClearInterval(this.ko))
                }
                fy() {
                    this.dy >= s.wR || $.counters.methodPerformance.flush() && this.dy++
                }
            }
            return s._R = 5e3, s.wR = 5, s
        })(),
        tS = (() => {
            class s {
                constructor() {}
                init() {
                    this.Ac = new ZE
                }
                onStartTracking() {
                    this.Ac.start()
                }
                onOptout() {
                    this.Ac.stop()
                }
                onArtificialPageViewEnd(t) {
                    t && this.Ac.stop()
                }
                onAfterArtificialPageView(t) {
                    t && this.Ac.start()
                }
            }
            return s
        })();
    var eS = ["startDataCollection", "data-collection:start"],
        sS = ["data-collection:stop"],
        iS = (() => {
            class s {
                constructor(t, e) {
                    this.ns = t, this.S = e
                }
                init() {
                    this.S.register(eS, () => {
                        this.ns.startDataCollection()
                    }), this.S.register(sS, () => {
                        this.ns.stopDataCollection()
                    })
                }
            }
            return s
        })(),
        un = {
            fromSessionRenewal: !1,
            isRenewedVisitor: !1
        },
        rS = (() => {
            class s {
                constructor(t, e, i, n, o, c) {
                    this.E = t, this.w = e, this.ls = i, this.lt = n, this.ir = o, this.F = c, this.Ty = !1, this.by = 0, this.nd = !0, this.Ry = !1, this.qs = !1, this.startDataCollection = ({
                        fromSessionRenewal: l,
                        onAfterDataCollectionStartedCallback: h
                    } = un) => {
                        l && this.qs || !this.Ty ? this.tC(l, h) : this.eC()
                    }
                }
                isDataCollectionStarted() {
                    return this.qs
                }
                tryStartAutomaticDataCollection({
                    fromSessionRenewal: t,
                    isRenewedVisitor: e,
                    onAfterDataCollectionStartedCallback: i
                } = un) {
                    this.sC(t, e) && this.startDataCollection({
                        fromSessionRenewal: t,
                        onAfterDataCollectionStartedCallback: i
                    })
                }
                disableStartDataCollection() {
                    this.nd = !1
                }
                allowStartDataCollection({
                    fromSessionRenewal: t
                } = un) {
                    this.nd = !0, this.Ry && this.startDataCollection({
                        fromSessionRenewal: t
                    })
                }
                stopDataCollection() {
                    this.qs && (this.qs = !1, this.w.emitArtificialPageViewEnd(!0), this.ir.stop())
                }
                eC() {
                    this.qs || (this.qs = !0, this.F.isSessionValid() ? (this.F.refreshSession(), this.ir.start(fs.Artificial)) : this.F.renewSession(!1))
                }
                sC(t, e) {
                    return e && !this.qs ? !1 : t ? !0 : this.E.startMode === fr.Manual ? !1 : !Pn(this.E) && !this.E.isHeapSideloadsStartDataCollection() && !this.E.isCsSideloadingHeap()
                }
                tC(t, e) {
                    if (this.ls.isActive() || (this.Ry = !0, this.iC() && (this.by++, this.by < 2)) || !this.nd || this.qs && !t) return;
                    this.Ty = !0, this.qs = !0, this.lt.init();
                    let i = t ? fs.Renewal : fs.Natural;
                    this.ir.start(i);
                    let n = () => {
                        this.w.emitStartTracking(t), typeof e == "function" && e()
                    };
                    ft.onDocumentLoaded(n)
                }
                iC() {
                    return Pn(this.E) && this.E.isCsSideloadingHeap()
                }
            }
            return s
        })();
    var nS = 20,
        oS = "Custom Error:",
        aS = "https://cserror.com/texterror.js",
        cS = (() => {
            class s extends kt {
                constructor(t, e, i, n, o, c) {
                    super(), this.Xs = t, this.ud = e, this.yt = i, this.Ee = n, this.Si = o, this.C = c, this.Mc = [], this.ji = 0, this.rr = []
                }
                initStates() {
                    this.ms = M.now(), this.ud.removeQueryParams(), this.ud.setQueryParams(this.yt.getRequestParameters()), this.Mc = [], this.ji = 0
                }
                onStart() {
                    this.Xs.subscribe(s.jt, t => this.Z(t)), this.ld()
                }
                onStop() {
                    this.Xs.unsubscribe(s.jt)
                }
                onIframeJavascriptError(t) {
                    this.Z(t)
                }
                trackCustomError(t) {
                    let e = {
                        errorType: "jsError",
                        message: `${oS} ${t}`,
                        lineno: 1,
                        colno: 1,
                        filename: aS
                    };
                    this.Uo(e)
                }
                Uo(t) {
                    if (this.isStarted) {
                        let e = this.Z(t);
                        e && this.Si.emitCustomJavaScriptErrorEvent(e)
                    } else csArray.prototype.push.call(this.rr, t)
                }
                ld() {
                    this.isStarted && (csArray.prototype.forEach.call(this.rr, t => this.Uo(t)), this.rr = [])
                }
                Z(t) {
                    if (this.isStarted && this.ji < nS) {
                        let e = { ...t,
                            pageUrl: this.C.getAnonymizedUrl(),
                            rt: this.Ji()
                        };
                        return this.Ee.anonymize(e), csArray.prototype.push.call(this.Mc, e), this.Ao(), e
                    }
                    return null
                }
                Ji() {
                    return M.now() - this.ms
                }
                Ao() {
                    this.ud.send({
                        errors: this.Mc
                    }), this.Mc = [], this.ji += 1
                }
            }
            return s.jt = "JavaScriptErrorsService", s
        })(),
        lS = "errors",
        hS = (() => {
            class s {
                constructor(t, e, i, n, o, c, l, h, f) {
                    this.Xs = t, this.Ee = e, this.E = i, this.yt = n, this.mt = o, this.S = c, this.Si = l, this.C = h, this.ce = f
                }
                init() {
                    let t = this.ce.create(`${this.E.getTrackerUri()}/${lS}`);
                    this.Ks = new cS(this.Xs, t, this.yt, this.Ee, this.Si, this.C), this.mt.addListener(this.Ks), this.ut()
                }
                ut() {
                    this.E.jsCustomErrorsEnabled && !this.E.customErrors.enabled && this.S.register(mp, t => {
                        this.Ks.trackCustomError(t)
                    })
                }
                onStartTracking() {
                    this.Ks.start()
                }
                onAfterNaturalPageView() {
                    this.Ks.initStates()
                }
                onArtificialPageViewEnd(t) {
                    t && this.Ks.stop()
                }
                onAfterArtificialPageView(t) {
                    this.Ks.initStates(), t && this.Ks.start()
                }
                onBeforeSessionRenewal() {
                    this.Ks.stop()
                }
                onOptout() {
                    this.Ks.stop()
                }
            }
            return s
        })(),
        uS = (() => {
            class s extends Tl {
                constructor() {
                    super(), this.z = new sl(t => this.errorListener(t))
                }
                onStartTracking() {
                    this.z.observe()
                }
                onStopTracking() {
                    this.z.disconnect()
                }
                errorListener(t) {
                    let e = this.PC(t);
                    for (let i in this.subscriptions) {
                        let n = this.subscriptions[i];
                        n(e)
                    }
                }
                OC(t) {
                    return t = t != null ? t : "[NO ERROR MESSAGE]", Et.truncate(t, s.Ih, Et.ELLIPSIS)
                }
                NC(t) {
                    return !t || Xt(t) ? "" : Et.truncate(t, s.Ph, Et.ELLIPSIS)
                }
                PC(t) {
                    return {
                        errorType: "jsError",
                        message: this.OC(t.message),
                        filename: this.NC(t.filename),
                        lineno: t.lineno,
                        colno: t.colno
                    }
                }
            }
            return s.Ih = 1024, s.Ph = 150, B([V("Event handler type: error")], s.prototype, "errorListener", null), s
        })(),
        dS = "CS_ANONYMIZED_VALUE",
        fS = (() => {
            class s {
                constructor(t, e) {
                    this.D = t, this.C = e
                }
                anonymize(t) {
                    return q(t.message) && (t.message = this.MC(t.message), t.message = this.D.anonymizePII(t.message)), q(t.filename) && (t.filename = this.C.computeOverriddenUrl(t.filename)), t
                }
                MC(t) {
                    return csString.prototype.replace.call(t, /(value\s*=\s*".*"|value\s*=\s*'.*')/, `value='${dS}'`)
                }
            }
            return s
        })();
    var pS = (() => {
        class s {
            constructor(t) {
                this.S = t
            }
            init() {
                this.$y(s.dI, Tc), this.$y(s.fI, Ac)
            }
            $y(t, e) {
                this.S.register([t], (i, n) => {
                    !q(i) || !(q(n) || Te(n)) || F.error(n, `${e}${i}`)
                })
            }
        }
        return s.fI = "logSnippetError", s.dI = "logImplementationSnippetError", s
    })();
    var gS = (() => {
            class s {
                constructor(t, e) {
                    this.Gt = t, this.E = e, this.zy = !1
                }
                enableRecordingContext(t, e, i) {
                    this.zy = !0, this.Vr = t, this.R = e, this.no = i
                }
                getRecordingContext() {
                    var t, e, i;
                    if (!this.zy) return {
                        isRecording: !1,
                        recordingStartTimestamp: 0,
                        etrState: Qt.ETR_OFF,
                        etrStatus: Yt.ETR_DISABLED,
                        collectState: N.ANALYTICS_ONLY
                    };
                    let n = this.R.getSession();
                    return {
                        isRecording: this.Vr.isRecording(),
                        useAnonymization: this.Gt.getSensitiveStatus().useAnonymization,
                        enableOnlineResources: (t = this.Vr.getStaticResourceManagerStatus()) === null || t === void 0 ? void 0 : t.onlineAssets.activated,
                        enableOnlineResourcesOnNextPageview: (e = this.Vr.getStaticResourceManagerStatus()) === null || e === void 0 ? void 0 : e.onlineAssets.enabledOnNextPageview,
                        recordingStartTimestamp: parseInt(this.Vr.getRecordingStartTimestamp(), 10),
                        etrState: this.E.malkaEtrEnabled ? Qt.ETR_ON : Qt.ETR_OFF,
                        etrStatus: this.no.getEtrStatus(n),
                        collectState: (i = n == null ? void 0 : n.collectState) !== null && i !== void 0 ? i : N.ANALYTICS_ONLY
                    }
                }
            }
            return s
        })(),
        _i = (() => {
            class s {
                static isRecordingSupported() {
                    return "MutationObserver" in window && "visibilityState" in document
                }
                static isAsyncSerializationSupported() {
                    return "Promise" in window && "findIndex" in csArray.prototype
                }
            }
            return s
        })();
    var mS = (() => {
            class s extends kt {
                constructor(t, e, i, n, o, c) {
                    super(), this.Se = t, this.lt = e, this.Wt = i, this.pr = n, this.tn = o, this.it = c
                }
                onStart() {
                    var t, e, i;
                    this.Wt.start(), this.Se.setMaskedElementSettings(this.lt.getMaskedElementSettings((t = this.it) === null || t === void 0 ? void 0 : t.shouldMaskNonTextElements())), this.Se.startIdentifier(), (e = this.pr) === null || e === void 0 || e.start(), (i = this.tn) === null || i === void 0 || i.start()
                }
                onStop() {
                    var t, e;
                    this.Wt.stop(), this.Se.stopIdentifier(), (t = this.pr) === null || t === void 0 || t.stop(), (e = this.tn) === null || e === void 0 || e.stop()
                }
            }
            return s
        })(),
        yS = (() => {
            class s {
                constructor(t, e, i, n, o, c) {
                    this.it = t, this.lt = e, this.ie = i, this.Wt = n, this.In = o, this.ht = c, this.Pn = so(this.In)
                }
                getSensitiveStatus() {
                    var t, e;
                    return {
                        started: this.ie.isStarted,
                        useAnonymization: this.it.shouldUseAnonymization(),
                        capturedElementSelector: this.Wt.getWhitelistedElementsSelector(),
                        maskedElementSettings: this.lt.getMaskedElementSettings((t = this.it) === null || t === void 0 ? void 0 : t.shouldMaskNonTextElements()),
                        encryptionSelectors: (e = this.ht) === null || e === void 0 ? void 0 : e.getEncryptionSelectors()
                    }
                }
                getElementSensitiveStatus(t) {
                    let e = this.ie.isStarted,
                        i = this.it.shouldUseAnonymization();
                    return e ? D.isMaskedElement(t) || D.isMaskedElementChild(t) ? Ft.MASKED : Dg.shouldEncrypt(t) ? Ft.ENCRYPTED : ze.isEditableNode(t) ? Ft.ANONYMIZED : i ? ce.isWhitelistedElement(t) ? Ft.CAPTURED : Ft.ANONYMIZED : Ft.CAPTURED : Ft.ANONYMIZED
                }
                getAttributeSensitiveStatus(t, e) {
                    if (!this.ie.isStarted) return Ft.ANONYMIZED;
                    let i = this.it.shouldUseAnonymization();
                    return D.isMaskedAttribute(t, e) ? Ft.MASKED : i ? zs(t) || ce.isWhitelistedElement(t) || this.Pn.has(e) ? Ft.CAPTURED : Ft.ANONYMIZED : Ft.CAPTURED
                }
            }
            return s
        })(),
        ES = (() => {
            class s {
                constructor(t) {
                    this.F = t
                }
                onAfterVisitorRenewal() {
                    this.F.renewSession(!0)
                }
            }
            return s
        })(),
        SS = (() => {
            let s;
            return function(r) {
                r.URL = "url"
            }(s || (s = {})), s
        })(),
        Qa = (() => {
            let s;
            return function(r) {
                function t(d, m) {
                    for (let E of d)
                        if (i(E, m)) return !0;
                    return !1
                }
                r.isUrlMatching = t;

                function e(d, m) {
                    if (q(m)) {
                        for (let E of d)
                            if (i(E, m)) return !0
                    } else if (or(m)) {
                        for (let E of d)
                            if (i(E, csString(m))) return !0
                    }
                    return !1
                }
                r.isMatching = e;

                function i(d, m) {
                    let E = n(d, m);
                    return d.negate ? !E : E
                }

                function n(d, m) {
                    switch (d.rule_type === "date" && (d.match_operation === "less_than" || d.match_operation === "greater_than") && (m = (new csDate(m).valueOf() / 1e3).toFixed(0)), d.match_operation) {
                        case "exact":
                            switch (d.rule_type) {
                                case "string":
                                    return q(d.pattern) ? csString.prototype.toLowerCase.call(m) === csString.prototype.toLowerCase.call(d.pattern) : !1;
                                case "boolean":
                                    return m === d.pattern || m === csString(d.pattern);
                                case "number":
                                    return Mt(m) ? Number(m) === Number(d.pattern) : !1;
                                default:
                                    return m === d.pattern
                            }
                        case "starts_with":
                            return q(d.pattern) ? csString.prototype.indexOf.call(m, d.pattern) === 0 : !1;
                        case "ends_with":
                            return q(d.pattern) ? Ai(m, d.pattern) : !1;
                        case "contains":
                            return q(d.pattern) ? csString.prototype.indexOf.call(m, d.pattern) !== -1 : !1;
                        case "regex":
                            if (!q(d.pattern)) return !1;
                            try {
                                return new csRegExp(d.pattern).test(m)
                            } catch (E) {
                                return F.warn(`targeting.matchOperation.regex invalid ${E==null?void 0:E.message}`), !1
                            }
                        case "simple":
                            return q(d.pattern) ? f(m) === f(d.pattern) : !1;
                        case "greater_than":
                            return Number(m) > Number(d.pattern);
                        case "less_than":
                            return Number(m) < Number(d.pattern);
                        case "exact_date":
                            {
                                let E = Number(d.pattern);
                                if (!Jt(E)) return !1;
                                let v = new csDate(E * 1e3);
                                return new csDate(m).toDateString() === v.toDateString()
                            }
                        case "exact_days_ago":
                            return o(d, m);
                        case "more_than_days_ago":
                            return c(d, m);
                        case "less_than_days_ago":
                            return l(d, m);
                        case "unknown":
                            return h(m);
                        default:
                            return F.warn(`targeting.matchOperation.regex not managed operation ${d.match_operation}`), !1
                    }
                }

                function o(d, m) {
                    let E = new csDate,
                        v = E.setDate(E.getDate() - Number(d.pattern)),
                        C = new csDate(v);
                    return new csDate(m).toDateString() === C.toDateString()
                }

                function c(d, m) {
                    let E = Number(d.pattern);
                    if (!Jt(E)) return !1;
                    let v = Number(E) + 1,
                        C = new csDate,
                        P = new csDate(C);
                    return P.setDate(C.getDate() - v), new csDate(m).getTime() <= P.getTime()
                }

                function l(d, m) {
                    let E = Number(d.pattern);
                    if (!Jt(E)) return !1;
                    if (E === 0) return o(d, m);
                    let v = new csDate,
                        C = new csDate(v);
                    return C.setDate(v.getDate() - E), new csDate(m).getTime() >= C.getTime()
                }

                function h(d) {
                    return Mt(d) ? q(d) ? csString.prototype.trim.call(d) === "" : or(d) ? d === !0 : Jt(d) ? d !== 0 : !1 : !0
                }

                function f(d) {
                    let m = jt(d, "http://") || jt(d, "https://") ? d : `https://${d}`,
                        E = bc(m);
                    return E !== null ? csString.prototype.replace.call(E.host, /^www./, "") : d
                }
            }(s || (s = {})), s
        })(),
        dn = {
            isLegacyURL: s => s.component === "url",
            isLegacyTrigger: s => s.component === "trigger",
            isURL: s => s.type === SS.URL
        },
        vS = (() => {
            class s {
                constructor() {
                    this.Wy = new ro, this.Yy = [], this.Xy = []
                }
                setTargetingRules(t) {
                    this.Wy.setRegexRules(csArray.prototype.filter.call(t, dn.isURL));
                    for (let e of t) dn.isLegacyURL(e) ? csArray.prototype.push.call(this.Yy, e) : dn.isLegacyTrigger(e) && csArray.prototype.push.call(this.Xy, e)
                }
                matchUrl(t) {
                    return Qa.isUrlMatching(this.Yy, t) || this.Wy.evaluateUrl(t)
                }
                matchTrigger(t) {
                    return Qa.isMatching(this.Xy, t)
                }
            }
            return s
        })(),
        _S = (() => {
            class s extends kt {
                constructor(t, e, i) {
                    super(), this.Ky = t, this.md = e, this.C = i
                }
                init() {
                    this.yd = new vS, this.Ky && this.yd.setTargetingRules(this.Ky)
                }
                onStart() {}
                checkTargetingRules() {
                    let t = this.C.getAnonymizedUrl();
                    this.md(this.Ed(t, "url"))
                }
                onStop() {}
                onTargetingRulesArtificialPageview(t) {
                    this.isStarted && this.md(this.Ed(t, "url"))
                }
                onExternalEvent(t) {
                    this.isStarted && this.md(this.Ed(t.name, "trigger"))
                }
                Ed(t, e) {
                    var i, n;
                    return e === "url" && q(t) && (!((i = this.yd) === null || i === void 0) && i.matchUrl(t)) ? !0 : !!(e === "trigger" && (!((n = this.yd) === null || n === void 0) && n.matchTrigger(t)))
                }
            }
            return s
        })(),
        wS = {
            MATCHED: {
                [N.ANALYTICS_ONLY]: N.ANALYTICS_ONLY_RULES_TARGETING,
                [N.RECORDING_GLOBAL_SAMPLING]: N.RECORDING_RULES_TARGETING,
                [N.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING]: N.RECORDING_RULES_TARGETING
            },
            MISSED: {
                [N.ANALYTICS_ONLY]: N.ANALYTICS_ONLY_RULES_TARGETING,
                [N.RECORDING_GLOBAL_SAMPLING]: N.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING
            }
        },
        AS = (() => {
            class s {
                constructor(t, e, i, n, o, c, l) {
                    this.E = t, this.w = e, this.bt = i, this.J = n, this.C = o, this.R = c, this.ns = l, this.nr = !1, this.zo = (h = !1) => {
                        this.nr && this.E.isSMB && this.ns.allowStartDataCollection({
                            fromSessionRenewal: h
                        }), this.E.startMode === fr.Automatic && this.ns.startDataCollection({
                            fromSessionRenewal: h
                        })
                    }, this.SI = h => {
                        this.nr || (this.nr = h, this.Jy(), this.zo())
                    }
                }
                init() {
                    this.E.isSMB && this.ns.disableStartDataCollection(), this.rn = new _S(this.E.recordTargetingRules, this.SI, this.C), this.J.addListener(this.rn), this.rn.init()
                }
                start() {
                    this.rn.start()
                }
                stop() {
                    this.rn.stop()
                }
                maybeStartDataCollection(t) {
                    if (t) {
                        this.zo(t);
                        return
                    }
                    if (this.vI()) {
                        this.nr = !0, this.zo(), this.stop();
                        return
                    }
                    this.rn.checkTargetingRules()
                }
                onAfterArtificialPageView() {
                    this.rn.checkTargetingRules()
                }
                onCollectStateChange(t) {
                    if (this.Qy(t)) {
                        this.stop();
                        return
                    }
                    let e = t === N.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING;
                    !this.nr && e || csSetTimeout(() => this.Zy(t), 0)
                }
                onStartTracking() {
                    this.Jy()
                }
                vI() {
                    let t = this.R.getSession();
                    return !!(t && this.Qy(t.collectState))
                }
                Qy(t) {
                    return t === N.RECORDING_RULES_TARGETING || t === N.ANALYTICS_ONLY_RULES_TARGETING
                }
                Jy() {
                    var t;
                    if (this.nr) {
                        let e = this.R.getSession(),
                            i = this.bt.getInitialCollectState();
                        this.Zy((t = e == null ? void 0 : e.collectState) !== null && t !== void 0 ? t : i), this.ns.isDataCollectionStarted() && this.w.emitTargetingRulesMatched()
                    }
                }
                Zy(t) {
                    let e = wS[this.nr ? "MATCHED" : "MISSED"][t];
                    e && this.w.emitCollectStateChange(e, Qt.ETR_OFF)
                }
            }
            return s
        })(),
        TS = (() => {
            class s {
                constructor() {
                    this.tE = new Set, this.eE = [], this.Sd = new Set, this.vd = []
                }
                addUrlMaskingPattern(t) {
                    if (this.tE.has(t)) return;
                    this.tE.add(t);
                    let e = ia(t);
                    csArray.prototype.push.call(this.eE, e)
                }
                getUrlMaskingPatterns() {
                    return this.eE
                }
                resetPartialUrlMaskingPatterns() {
                    this.Sd.clear(), this.vd = []
                }
                addPartialUrlMaskingPattern(t) {
                    if (this.Sd.has(t)) return;
                    this.Sd.add(t);
                    let e = ia(t);
                    csArray.prototype.push.call(this.vd, e)
                }
                getPartialUrlMaskingPatterns() {
                    return this.vd
                }
            }
            return s
        })(),
        bS = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.O = e, this.R = i, this.ms = M.now()
                }
                resetStartTime() {
                    this.ms = M.now()
                }
                getSessionData() {
                    let {
                        projectId: t
                    } = this.E, e = this.O.getVisitor();
                    e == null && F.warn("Visitor is null. This happens when a snippet tries to get Session Data before the tag was initialized.");
                    let {
                        id: i,
                        visitsCount: n
                    } = e != null ? e : {}, o = this.R.getSession();
                    o === null && F.warn("Session is null. This happens when a snippet tries to get Session Data before the tag was initialized.");
                    let {
                        pageNumber: c
                    } = o != null ? o : {};
                    return {
                        projectId: t,
                        userId: i,
                        sessionNumber: n,
                        pageNumber: c,
                        relativeTimestamp: M.now() - this.ms
                    }
                }
            }
            return s
        })(),
        RS = ["clearSession"],
        CS = ["extendSession"];
    var IS = ["getSessionData"],
        PS = ["session:start:newVisitor"],
        OS = ["session:clear:visitor"],
        NS = (() => {
            class s {
                constructor(t, e, i, n) {
                    this.E = t, this.O = e, this.R = i, this.S = n
                }
                init() {
                    this._d = new bS(this.E, this.O, this.R), this.S.register(RS, () => this.R.removeSession()), this.S.register(CS, () => this.R.extendSessionPeriodically(), {
                        disableApplyPending: !0
                    }), this.S.register(IS, () => this._d.getSessionData(), {
                        disableApplyPending: !0
                    }), this.S.register(PS, () => this.O.renewVisitor()), this.S.register(OS, () => {
                        this.O.resetVisitor()
                    }, {
                        disableApplyImmediate: !0
                    })
                }
                onBeforeNaturalPageView() {
                    this.O.createOrUpdateVisitor(), this.R.createOrUpdateSession()
                }
                onBeforeArtificialPageView() {
                    this.O.createOrUpdateVisitor(), this.R.createOrUpdateSession()
                }
                onAfterNaturalPageView() {
                    this._d.resetStartTime()
                }
                onAfterArtificialPageView() {
                    this._d.resetStartTime()
                }
                onOptout() {
                    this.O.removeVisitor(), this.R.removeSession()
                }
                onCollectStateChange(t) {
                    this.R.updateCollectState(t)
                }
            }
            return s
        })(),
        MS = (() => {
            class s {
                constructor(t, e, i, n, o, c, l, h, f, d, m, E, v, C, P, S, w, I, O, T, U, tt, ot, $t, Lt, zt, _, L, x, H, ht, St, pe, es, Rs, Cs, Re) {
                    this.yt = t, this.qo = e, this.fe = i, this.O = n, this.R = o, this.F = c, this.Os = l, this.w = h, this.S = f, this.gl = d, this.E = m, this.ml = E, this.ls = v, this.wn = C, this.Ct = P, this.D = S, this.Q = w, this.tt = I, this.C = O, this._I = T, this.J = U, this.mt = tt, this.wt = ot, this.sE = $t, this.qt = Lt, this.wI = zt, this.M = _, this.ce = L, this.N = x, this.Nt = H, this.K = ht, this.bt = St, this.lt = pe, this.$e = es, this.rs = Rs, this.es = Cs, this.ss = Re, this.AI = Ce => {
                        this.w.emitBeforeSessionRenewal(), this.nn(!0, Ce), this.w.emitAfterSessionRenewal()
                    }, this.TI = Ce => {
                        this.w.emitBeforeSessionRenewal(), this.bt.refreshQuota(Zt => {
                            Zt !== N.QUOTA_REACHED && (this.nn(!0, Ce), this.w.emitAfterSessionRenewal())
                        })
                    }
                }
                start() {
                    if (this.ml.init(), this.ls.init(), this.ls.isActive()) return;
                    let t, e, i, n, o, c, l, h, f, d, m, E, v, C, P, S, w, I, O;
                    this.M.schedule(() => {
                        P = new ES(this.F), E = new QE(this.Q), v = new UE(() => {}), S = new jE, O = new KE;
                        let T = new mS(v, this.lt, S, I, O, this.wd());
                        C = new yS(this.wd(), this.lt, T, S, this.E.whitelistedAttributes, w);
                        let U = new vp(this.w, this.S, this.lt, T, S, w, I);
                        U.init(), this.w.addListener(U), t = new Wy(this.E, this.qo, this.O, this.Q, E, this.S, this.F, new JE(F), this.mt, this.ce, this.J, C, this.vt, this.es, this.ss), e = new Rp(this.S, this.R, this.E, this.yt, this.fe, this.D), m = new gS(C, this.E);
                        let tt = null,
                            ot = new cp;
                        i = new rE(this.O, this.R, this.S, this.mt, tt, this.E, ot, m), n = new kp(this.E, this.qo, this.O, this.S, this.D, this.F, this.C);
                        let $t;
                        this.ir = new gp(this.E, this.S, this.w, this.qo, this.O, this.R, this.Os, this.Ct, this.wt, this.C, this.qt, ot, this.J, this.$e, $t), this.iE = new NS(this.E, this.O, this.R, this.S), this.ns = new rS(this.E, this.w, this.ls, this.lt, this.ir, this.F), new iS(this.ns, this.S).init(), l = new Up(this.E, this.S, this.fe, this.qo, this.J), h = new pS(this.S), f = new tS
                    }), this.E.jsErrorsEnabled && this.M.schedule(() => {
                        this.Xs = new uS, this.Ee = new fS(this.D, this.C);
                        let T = new hS(this.Xs, this.Ee, this.E, this.qo, this.mt, this.S, this.J, this.C, this.ce);
                        T.init(), this.w.addListener(T)
                    }), this.M.schedule(() => {
                        this.wn.init()
                    }), this.M.schedule(() => {
                        i.init()
                    }), this.M.schedule(() => {
                        e.init()
                    }), this.M.schedule(() => {
                        n.init()
                    }), this.M.schedule(() => {
                        this.sE.init()
                    }), this.M.schedule(() => {
                        this.ir.init()
                    }), this.M.schedule(() => {
                        this.iE.init()
                    }), this.M.schedule(() => {
                        l.init()
                    }), this.M.schedule(() => {
                        this._I.init()
                    }), this.M.schedule(() => {
                        h.init()
                    }), this.M.schedule(() => {
                        f.init()
                    }), this.M.schedule(() => {
                        this.wI.init()
                    }), this.M.schedule(() => {
                        this.w.addListener(this.iE), this.w.addListener(this.gl), this.w.addListener(t), this.w.addListener(this.wn), this.w.addListener(i), this.w.addListener(n), this.w.addListener(this.sE), this.w.addListener(this.ir), this.w.addListener(l), this.w.addListener(e), this.w.addListener(f), this.w.addListener(P)
                    }), _i.isRecordingSupported() && this.M.schedule(() => {
                        let T = new Sy(m, this.R, this.E, this.yt, this.S, this.D, this.F, v, this.Ee, this.St, this.He, this.Tt, this.w, this.J, this.mt, this.qt, this.ce, this.tt, this.Kn, this.wd(), this.Xr, w);
                        T.init(), this.w.addListener(T), i.setRecordingService(T.recordingService)
                    }), this.M.schedule(() => {
                        var T;
                        let U, tt
                    }), this.M.schedule(() => {
                        t.init()
                    }), this.M.schedule(() => {
                        this.E.isQuotaEnabled() ? this.F.onSessionExpired(T => {
                            this.TI(T)
                        }) : this.F.onSessionExpired(T => {
                            this.AI(T)
                        }), this.nn()
                    })
                }
                nn(t = !1, e = !1) {
                    var i, n, o;
                    if (this.E.hasTargetingRules()) {
                        this.Wo || (this.Wo = new AS(this.E, this.w, this.bt, this.J, this.C, this.R, this.ns), this.w.addListener(this.Wo), this.Wo.init(), this.Wo.start(), this.S.start(), (i = this.vt) === null || i === void 0 || i.start()), this.Wo.maybeStartDataCollection(t);
                        return
                    }
                    this.S.start(), (n = this.vt) === null || n === void 0 || n.start(), this.ns.tryStartAutomaticDataCollection({
                        fromSessionRenewal: t,
                        isRenewedVisitor: e
                    })
                }
                wd() {
                    if (this.it) return this.it;
                    let t = new ro;
                    return this.it = new VE(this.E, this.C, t, this.Ct), this.it.init(), this.it.shouldUseAnonymization() && $.counters.pageAnonymisation.count("anonymized-on-start"), this.it
                }
            }
            return s
        })();
    var bl = (() => {
            class s {
                constructor(t) {
                    this.configuration = t
                }
            }
            return s
        })(),
        DS = (() => {
            class s extends bl {
                constructor(t, e, i, n, o) {
                    super(t), this.configuration = t, this.w = e, this.Ad = i, this.C = n, this.Td = o, this.bd = !1
                }
                refreshQuota() {}
                canCollect(t) {
                    return !0
                }
                init() {
                    this.configuration.malkaUrlEnabled && this.configuration.hasRecordingUrlRules() && (this.bd = !0, this.Td.setRegexRules(this.configuration.recordingUrlRules))
                }
                sanitizeSessionCollectState(t) {
                    return (t.collectState === N.QUOTA_REACHED || t.collectState === N.RECORDING_RULES_TARGETING || t.collectState === N.RECORDING_TEMPORARILY) && (t.collectState = N.ANALYTICS_ONLY), t
                }
                computeInitialCollectState() {
                    return Xe.isReplayConsentNeeded(this.configuration) ? N.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED : this.Vc()
                }
                computeInitialCollectStateFromRecordingConsentGranted() {
                    return this.Vc()
                }
                Vc() {
                    if (!_i.isRecordingSupported()) return N.ANALYTICS_ONLY;
                    let t = N.ANALYTICS_ONLY,
                        e = Qt.ETR_OFF;
                    return Es.percentage() < this.configuration.replayRecordingRate || this.Ad.isForceReplayRecorded() ? t = N.RECORDING_GLOBAL_SAMPLING : this.bd && this.Td.evaluateUrl(this.C.getAnonymizedUrl()) && (t = N.RECORDING_URL_SAMPLING), this.configuration.malkaEtrEnabled && (e = Qt.ETR_ON), this.w.emitCollectStateChange(t, e), t
                }
                getEligibleCollectState(t) {
                    if (!_i.isRecordingSupported()) return N.ANALYTICS_ONLY;
                    if (Xe.isRecordingBlockedByConsent(t)) return t.collectState === N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN ? N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN : N.RECORDING_BLOCKED_BY_CONSENT_NOT_EXPRESSED;
                    if (t.collectState === N.RECORDING_GLOBAL_SAMPLING) return N.RECORDING_GLOBAL_SAMPLING;
                    let e = this.configuration.malkaEtrEnabled ? Qt.ETR_ON : Qt.ETR_OFF;
                    return this.bd && this.Td.evaluateUrl(this.C.getAnonymizedUrl()) ? (this.w.emitCollectStateChange(N.RECORDING_URL_SAMPLING, e), N.RECORDING_URL_SAMPLING) : (this.w.emitCollectStateChange(N.ANALYTICS_ONLY, e), N.ANALYTICS_ONLY)
                }
                isReplayRecorded(t) {
                    return Xe.isRecordingBlockedByConsent(t) ? !1 : t.collectState === N.RECORDING_TEMPORARILY || t.collectState === N.RECORDING_GLOBAL_SAMPLING || t.collectState === N.RECORDING_URL_SAMPLING || this.configuration.malkaEtrEnabled
                }
                getInitialCollectState() {
                    return N.ANALYTICS_ONLY
                }
                getRecordingConsentWithdrawn() {
                    return N.RECORDING_BLOCKED_BY_CONSENT_WITHDRAWN
                }
            }
            return s
        })(),
        ee = "_cs_s",
        Gn = 18e5,
        fn = ".",
        kS = 13,
        sr = (() => {
            let s;
            return function(r) {
                r[r.NOT_FOUND = 0] = "NOT_FOUND", r[r.EXPIRED = 1] = "EXPIRED", r[r.FOUND = 2] = "FOUND"
            }(s || (s = {})), s
        })(),
        LS = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.K = i, this.re = null, this.Rd = !1
                }
                get(t) {
                    let e = this.getRawSession(t);
                    return this.isValid(e) ? Lc(e) : null
                }
                getRawSession(t) {
                    if (t) {
                        let f = this.Cd();
                        return In(f)
                    }
                    let {
                        sessionString: e,
                        status: i
                    } = this.bI(), n = In(e);
                    if (i !== sr.EXPIRED) return n;
                    if (this.E.cookielessTrackingEnabled) return null;
                    let o = this.Cd();
                    if (!o) return null;
                    let c = csString.prototype.split.call(o, fn);
                    if (!s.rE(c)) return o;
                    let l = c[c.length - 1],
                        h = parseInt(l, 10);
                    return isNaN(h) || this.RI(h), n
                }
                onCookieToSet(t) {
                    this.Ni = t
                }
                onCookieToRemove(t) {
                    this.Mi = t
                }
                set(t, e = Gn) {
                    var i;
                    let n = M.now() + e,
                        o = qf(t);
                    o += `${fn}${n}`, this.CI(o, n), this.E.cookielessTrackingEnabled ? this.K.setItem(ee, o) : (this.N.set(ee, o, e), (i = this.Ni) === null || i === void 0 || i.call(this, ee, o, e))
                }
                remove() {
                    var t;
                    this.E.cookielessTrackingEnabled ? this.K.removeItem(ee) : (this.N.delete(ee), (t = this.Mi) === null || t === void 0 || t.call(this, ee)), this.II()
                }
                handleSubdomainChange() {
                    if (this.E.cookielessTrackingEnabled) return;
                    let t = this.get(!0);
                    t && (this.E.allowSubdomains ? this.N.delete(ee, vr.CURRENT_DOMAIN) : this.N.delete(ee, this.N.getRootDomain()), this.set(t))
                }
                isValid(t) {
                    return t !== null && co(t)
                }
                CI(t, e) {
                    this.re = {
                        sessionString: t,
                        expires: e
                    }
                }
                bI() {
                    return this.re ? this.re && M.now() <= this.re.expires ? {
                        sessionString: this.re.sessionString,
                        status: sr.FOUND
                    } : {
                        sessionString: this.re.sessionString,
                        status: sr.EXPIRED
                    } : {
                        sessionString: this.Cd(),
                        status: sr.NOT_FOUND
                    }
                }
                II() {
                    this.re = null
                }
                RI(t) {
                    this.re && (this.re.expires = t, this.Rd = !0)
                }
                isCacheRefreshed() {
                    return this.Rd
                }
                resetCacheRefreshed() {
                    this.Rd = !1
                }
                Cd() {
                    if (this.E.cookielessTrackingEnabled) {
                        let e = this.K.getItem(ee);
                        return !e || this.nE(e) ? null : e
                    }
                    let t = this.N.get(ee);
                    return !t || this.nE(t) ? null : t
                }
                nE(t) {
                    let e = csString.prototype.split.call(t, fn);
                    if (!s.rE(e)) return !1;
                    let i = parseInt(e[e.length - 1], 10);
                    return !isNaN(i) && M.now() > i
                }
                static rE(t) {
                    return t[t.length - 1].length === kS
                }
            }
            return s
        })(),
        xS = (() => {
            class s extends bl {
                constructor(t, e, i) {
                    super(t), this.configuration = t, this.Yo = e, this.w = i, this.PI = N.RECORDING_GLOBAL_SAMPLING
                }
                refreshQuota(t) {
                    this.oE = t, this.Xo = void 0, this.OI()
                }
                init(t) {
                    this.NI();
                    let e = dt.get(ee);
                    e !== null && co(e) ? t(this.canCollect(Wf(e))) : this.refreshQuota(i => {
                        t(i !== N.QUOTA_REACHED)
                    })
                }
                sanitizeSessionCollectState(t) {
                    return t
                }
                canCollect(t) {
                    return t !== null && t.collectState !== N.QUOTA_REACHED
                }
                computeInitialCollectState(t) {
                    return this.Xo ? (this.w.emitCollectStateChange(this.Xo, this.configuration.malkaEtrEnabled ? Qt.ETR_ON : Qt.ETR_OFF), this.Xo) : (F.warn("Quota file error computeInitialCollectState() called before quota answered"), N.QUOTA_REACHED)
                }
                getEligibleCollectState(t) {
                    return t.collectState === N.QUOTA_REACHED ? N.QUOTA_REACHED : !_i.isRecordingSupported() && this.isReplayRecorded(t) ? N.ANALYTICS_ONLY : t.collectState === N.RECORDING_RULES_TARGETING ? N.RECORDING_RULES_TARGETING : t.collectState === N.ANALYTICS_ONLY_RULES_TARGETING ? N.ANALYTICS_ONLY_RULES_TARGETING : t.collectState === N.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING ? N.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING : t.collectState === N.RECORDING_GLOBAL_SAMPLING ? N.RECORDING_GLOBAL_SAMPLING : N.ANALYTICS_ONLY
                }
                isReplayRecorded(t) {
                    return t.collectState === N.RECORDING_GLOBAL_SAMPLING || t.collectState === N.RECORDING_RULES_TARGETING
                }
                getInitialCollectState() {
                    return this.Xo || N.QUOTA_REACHED
                }
                computeInitialCollectStateFromRecordingConsentGranted(t) {
                    return N.ANALYTICS_ONLY
                }
                Ko(t) {
                    this.Xo = t, this.oE && this.oE(t)
                }
                NI() {
                    this.Yo.onError(t => this.quotaServiceErrorHandler(`HTTP:${t.status} - fetching quota file for pid: ${this.configuration.projectId}`)), this.Yo.onTimeout(() => this.quotaServiceErrorHandler("timeout")), this.Yo.onLoad(t => this.quotaFileHandler(t))
                }
                OI() {
                    this.Yo.isInProgress() || this.Yo.send()
                }
                quotaFileHandler(t) {
                    var e;
                    if (!(!((e = t == null ? void 0 : t.quotas) === null || e === void 0) && e.length)) {
                        this.quotaServiceErrorHandler("Quota types missing from config file");
                        return
                    }
                    this.MI(t)
                }
                quotaServiceErrorHandler(t) {
                    let e = `Quota error - ${t}`;
                    F.warn(e), this.Ko(this.PI)
                }
                MI(t) {
                    let e = !1,
                        i = !1;
                    for (let n of t.quotas) n.quotaType === "ANALYTICS" && n.value ? e = !0 : n.quotaType === "RECORDING" && n.value && Es.boolean(Math.round(n.value * 100)) && (i = !0);
                    !e && i ? this.quotaServiceErrorHandler(`Quota types impossible: replay without analytics - ${csJSON.stringify(t)}`) : e && i ? _i.isRecordingSupported() ? this.Ko(N.RECORDING_GLOBAL_SAMPLING) : this.Ko(N.ANALYTICS_ONLY) : e && !i ? this.Ko(N.ANALYTICS_ONLY) : this.Ko(N.QUOTA_REACHED)
                }
                getRecordingConsentWithdrawn() {
                    return N.ANALYTICS_ONLY
                }
            }
            return B([V("Quota File: quotaFileHandler")], s.prototype, "quotaFileHandler", null), B([V("Quota File: onerror")], s.prototype, "quotaServiceErrorHandler", null), s
        })();
    var VS = (() => {
        class s {
            constructor(t, e, i, n, o) {
                this.O = t, this.R = e, this._s = i, this.wt = n, this.E = o
            }
            get() {
                return {
                    exclusion: this._s.getAppliedTrackingDraw(),
                    visitor: this.O.getVisitor(),
                    session: this.R.getSession(),
                    cvars: this.wt.getCustomVariablesSession()
                }
            }
            apply(t) {
                t && (t.exclusion ? this.exclude() : this.include(t))
            }
            exclude() {
                this._s.exclude(this.E), this.O.removeVisitor(), this.R.removeSession(), this.wt.removeCustomVariablesSession()
            }
            include(t) {
                this._s.removeExclusion(), this.O.setVisitor(t.visitor), t.session ? this.R.setSession(t.session) : this.R.removeSession(), t.cvars ? this.wt.setCustomVariableSession(t.cvars) : this.wt.removeCustomVariablesSession()
            }
        }
        return s
    })();
    var vo = 60 * 1e3,
        US = 60 * vo,
        jS = 4 * US - vo,
        Ls = (() => {
            let s;
            return function(r) {
                r[r.NO = 0] = "NO", r[r.WITHDRAWN = 1] = "WITHDRAWN", r[r.GRANTED = 2] = "GRANTED"
            }(s || (s = {})), s
        })(),
        HS = (() => {
            class s {
                constructor(t, e, i, n, o) {
                    this.Te = t, this.bt = e, this.w = i, this.UI = n, this.jI = o, this.Jo = null, this.Pd = 0, this.Qo = Ls.NO
                }
                setDynamicVariablesService(t) {
                    this.HI = t
                }
                createOrUpdateSession() {
                    this.Od(), this.BI = M.now(), this.Pd = 0;
                    let t = this.lE();
                    t === null ? (t = this.FI(), this.Vc(t), this.w.emitSessionCreated()) : (t = this.bt.sanitizeSessionCollectState(t), this.GI(t), t.collectState = this.bt.getEligibleCollectState(t)), this.setSession(t)
                }
                grantReplayRecording(t) {
                    t.collectState = this.bt.getInitialCollectState(), t.collectState = this.bt.computeInitialCollectStateFromRecordingConsentGranted(t), this.setSession(t)
                }
                grantReplayRecordingBeforeSessionStart() {
                    this.Qo = Ls.GRANTED
                }
                withdrawnReplayRecording(t) {
                    t.collectState = this.bt.getRecordingConsentWithdrawn(), this.setSession(t)
                }
                withdrawnReplayRecordingBeforeSessionStart() {
                    this.Qo = Ls.WITHDRAWN
                }
                Vc(t) {
                    this.Qo === Ls.WITHDRAWN ? (t.collectState = this.bt.getRecordingConsentWithdrawn(), this.setSession(t)) : this.Qo === Ls.GRANTED ? t.collectState = this.bt.computeInitialCollectStateFromRecordingConsentGranted(t) : t.collectState = this.bt.computeInitialCollectState(t), this.Qo = Ls.NO
                }
                FI() {
                    return {
                        pageNumber: 1,
                        collectState: this.bt.getInitialCollectState(),
                        replayConsent: this.UI ? Cn.NOT_EXPRESSED : Cn.UNNECESSARY,
                        etrStatus: Yt.ETR_NOT_SAVED_SESSION
                    }
                }
                GI(t) {
                    t.pageNumber += 1
                }
                isReplayRecorded() {
                    let t = this.getSession();
                    return !!t && this.bt.isReplayRecorded(t)
                }
                isTemporarilyRecorded() {
                    let t = this.getSession();
                    return (t == null ? void 0 : t.collectState) === N.RECORDING_TEMPORARILY
                }
                getRequestParameters() {
                    let t = {},
                        e = this.getSession();
                    return e !== null && (t.pn = `${e.pageNumber}`), t
                }
                getSession() {
                    return this.Te.get()
                }
                lE() {
                    return this.Te.get(!0)
                }
                doesSessionExist() {
                    return this.Te.get() !== null
                }
                setSession(t) {
                    this.Te.set(t), this.w.emitSessionRefreshed()
                }
                refreshSession() {
                    let t = this.lE();
                    t && this.setSession(t)
                }
                removeSession() {
                    this.Te.remove(), this.w.emitSessionRemoved()
                }
                getRecordingTypes() {
                    let t = this.getSession(),
                        e = this.$I(t);
                    return this.zI(e)
                }
                zI(t) {
                    let e = [];
                    return csArray.prototype.forEach.call(t, i => {
                        if (Gf(i)) {
                            let n = $f[i] || i;
                            csArray.prototype.push.call(e, n)
                        }
                    }), e
                }
                $I(t) {
                    let e = [];
                    return (t == null ? void 0 : t.collectState) !== void 0 && (csArray.prototype.push.call(e, t.collectState), this.jI && csArray.prototype.push.call(e, N.RECORDING_ETR_SAMPLING)), e
                }
                updateCollectState(t) {
                    let e = this.getSession();
                    e !== null && (e.collectState = t, this.setSession(e))
                }
                hasValidSession() {
                    let t = this.Te.getRawSession();
                    return this.Te.isValid(t)
                }
                handleSubdomainChange() {
                    this.Te.handleSubdomainChange()
                }
                pollCacheRefreshEvent(t = !0) {
                    let e = this.Te.isCacheRefreshed();
                    return e && t && this.Te.resetCacheRefreshed(), e
                }
                extendSessionPeriodically() {
                    this.Jo || this.hE()
                }
                extendSession() {
                    let t = this.getSession();
                    return t === null ? (F.warn("extendSession is trying to extend an expired session"), this.Od(), !1) : (this.setSession(t), !0)
                }
                hE() {
                    if (this.qI()) {
                        this.Od();
                        return
                    }
                    this.extendSession() && (this.WI(), this.YI())
                }
                YI() {
                    this.Jo = window.csSetTimeout(() => {
                        this.hE()
                    }, Gn - vo)
                }
                qI() {
                    return jS - (M.now() + Gn - this.BI) < 0
                }
                Od() {
                    this.Jo && (window.csClearTimeout(this.Jo), this.Jo = null)
                }
                WI() {
                    this.Pd += 1, this.HI.trackDynamicVariable("session_expiry_update", this.Pd)
                }
            }
            return s
        })();
    var BS = (() => {
            class s {
                constructor(t, e, i) {
                    this.O = t, this.R = e, this.JI = i
                }
                handle() {
                    this.O.hasAllowSubdomainsChanged() && (this.O.handleSubdomainChange(), this.R.handleSubdomainChange(), this.JI.handleSubdomainChange())
                }
            }
            return s
        })(),
        pn = "_cs_inc",
        FS = (() => {
            class s {
                constructor(t, e) {
                    this.Lt = t, this.N = e
                }
                isForceIncluded() {
                    return this.QI() || this.ZI()
                }
                isForceReplayRecorded() {
                    return this.tP(N.RECORDING_GLOBAL_SAMPLING)
                }
                QI() {
                    return this.N.get(pn) !== null
                }
                tP(t) {
                    return this.N.get(pn) === t
                }
                ZI() {
                    return csString.prototype.indexOf.call(this.Lt.href, pn) > 0
                }
            }
            return s
        })(),
        GS = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.O = e, this._s = i
                }
                clear() {
                    this.eP() && (this.uE = this.O.getVisitor(), this.O.removeVisitor()), this.sP() && this._s.removeExclusion()
                }
                eP() {
                    return this.O.doesVisitorExist() && this.O.getVisitor().appliedTrackingDraw !== this.E.lastTrackingDraw
                }
                sP() {
                    return this._s.getAppliedTrackingDraw() !== this.E.lastTrackingDraw
                }
                restoreClearedVisitor() {
                    this.uE && this.O.setVisitor(this.uE)
                }
            }
            return s
        })(),
        $S = (() => {
            class s {
                constructor(t, e, i, n, o, c, l, h) {
                    this.E = t, this.O = e, this._s = i, this.dE = n, this.iP = o, this.rP = c, this.nP = l, this.Ad = h
                }
                compute(t) {
                    var e, i;
                    this.E.crossDomainTracking && !this.E.cookielessTrackingEnabled ? this.E.crossDomainSingleIframeTracking ? (e = this.nP) === null || e === void 0 || e.start(() => this.kd(t)) : (i = this.rP) === null || i === void 0 || i.applyUpToDate(() => this.kd(t)) : this.kd(t)
                }
                kd(t) {
                    this.iP.handle(), this.dE.clear(), this.oP() ? (this.dE.restoreClearedVisitor(), t(!0)) : (this._s.exclude(this.E), t(!1))
                }
                oP() {
                    let t = Es.boolean(this.E.sampleRate);
                    return this.Ad.isForceIncluded() || !this._s.isExcluded() && this.O.doesVisitorExist() || !this._s.isExcluded() && t
                }
            }
            return s
        })(),
        zS = (() => {
            class s {
                constructor(t, e, i, n) {
                    this.E = t, this.ft = e, this.w = i, this.R = n, this.aP = 10 * 1e3
                }
                createOrUpdateVisitor() {
                    var t;
                    let e = this.getVisitor();
                    e === null && (e = this.cP(), (t = this.R) === null || t === void 0 || t.removeSession()), this.lP(e), this.setVisitor(e)
                }
                cP() {
                    return {
                        id: HE.generate(),
                        visitsCount: 0,
                        appliedTrackingDraw: this.E.lastTrackingDraw,
                        creationTimestamp: Bo(),
                        lastVisitTimestamp: 0,
                        hitTimestamp: 0,
                        expires: M.now() + this.E.visitorCookieTimeout,
                        allowSubdomains: this.E.allowSubdomains,
                        identityPrint: null
                    }
                }
                lP(t) {
                    let e = Bo();
                    this.R && !this.R.doesSessionExist() && (t.visitsCount += 1, t.lastVisitTimestamp = e), t.hitTimestamp = e, t.appliedTrackingDraw = this.E.lastTrackingDraw, this.fE = t.visitsCount
                }
                getRequestParameters() {
                    let t = this.getVisitor();
                    return t ? {
                        uu: t.id,
                        sn: `${t.visitsCount}`,
                        hd: `${t.hitTimestamp}`
                    } : {}
                }
                getVisitor() {
                    return this.ft.get()
                }
                setVisitor(t) {
                    this.ft.set(t)
                }
                doesVisitorExist() {
                    return this.ft.get() !== null
                }
                resetVisitor() {
                    this.pE(), this.w.emitAfterVisitorCleared()
                }
                removeVisitor() {
                    this.ft.remove()
                }
                hasAllowSubdomainsChanged() {
                    let t = this.getVisitor();
                    return t ? t.allowSubdomains !== this.E.allowSubdomains : !1
                }
                handleSubdomainChange() {
                    this.ft.handleSubdomainChange()
                }
                isSessionRenewed() {
                    let t = this.getVisitor();
                    return t === null || this.fE === void 0 ? !1 : t.visitsCount !== this.fE
                }
                hP() {
                    return !Z(this.gE) || M.now() - this.gE > this.aP
                }
                renewVisitor() {
                    this.hP() ? (this.gE = M.now(), this.pE(), this.w.emitAfterVisitorRenewal()) : F.warn("session:start:newVisitor is trying to renew visitor under time limit")
                }
                pE() {
                    this.w.emitBeforeVisitorRenewal(), this.removeVisitor()
                }
            }
            return s
        })(),
        oe = "_cs_id",
        qS = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.N = e, this.K = i
                }
                onCookieToSet(t) {
                    this.Ni = t
                }
                onCookieToRemove(t) {
                    this.Mi = t
                }
                get() {
                    let t;
                    return this.E.cookielessTrackingEnabled ? t = this.K.getItem(oe) : t = this.N.get(oe), t ? (jf(t) || F.warn(`Invalid visitor string: ${t}`), Vf(t)) : null
                }
                set(t) {
                    var e;
                    let i = Uf(t);
                    if (this.E.cookielessTrackingEnabled) this.K.setItem(oe, i);
                    else {
                        let n = new csDate(t.expires);
                        this.N.set(oe, i, n), (e = this.Ni) === null || e === void 0 || e.call(this, oe, i, n)
                    }
                }
                remove() {
                    var t;
                    this.E.cookielessTrackingEnabled ? this.K.removeItem(oe) : (this.N.delete(oe), (t = this.Mi) === null || t === void 0 || t.call(this, oe))
                }
                handleSubdomainChange() {
                    if (this.E.cookielessTrackingEnabled) return;
                    let t = this.get();
                    t && (t.allowSubdomains = this.E.allowSubdomains, this.E.allowSubdomains ? this.N.delete(oe, vr.CURRENT_DOMAIN) : this.N.delete(oe, this.N.getRootDomain()), this.set(t))
                }
            }
            return s
        })(),
        WS = (() => {
            class s {
                constructor(t, e, i, n, o, c) {
                    this.E = t, this.Oi = e, this.Rs = i, this.M = n, this.w = o, this.K = c
                }
                initWithQuota() {
                    if (!this.E.collectionEnabled) {
                        this.mE();
                        return
                    }
                    let t = new _E(this.E.getSettingsFileUri(), "", {
                        type: "json",
                        cacheMinutes: 15
                    });
                    this.bt = new xS(this.E, t, this.w), this.bt.init(e => {
                        e ? this.init() : this.mE()
                    })
                }
                uP() {
                    this.M.schedule(() => {
                        this.D = new qs, this.tt = new nf(this.D), this.C = new FE(window.location, this.tt), this.N = new vr(this.E, this.C, this.Oi), this.N.init(), this.Nt = new AE, this.S = new Tf([Af.UXA]), this.J = new bf, this.lt = new qE, this.Ct = new kE(this.E, new DE(this.E, this.N, this.Nt), this.w)
                    })
                }
                mE() {}
                init() {
                    ai.isSupported() && ai.setDigestSalt(this.E.projectId.toString());
                    let t, e, i, n, o, c, l, h, f, d, m, E, v, C, P, S, w, I, O, T, U, tt, ot, $t, Lt, zt, _, L, x;
                    this.uP();
                    let H = new hE;
                    this.w.addListener(H), this.M.schedule(() => {
                        m = new FS(window.location, this.N), new RE().init(), E = vl.create(), d = new _l(E), this.bt === void 0 && (this.bt = new DS(this.E, this.w, m, this.C, new ro), this.bt.init())
                    }), this.M.schedule(() => {
                        t = new LS(this.E, this.N, this.K), e = new HS(t, this.bt, this.w, this.E.replayConsentRequiredForSession, this.E.malkaEtrEnabled), i = new qS(this.E, this.N, this.K), n = new zS(this.E, i, this.w, e), this.Rs.setContext(n, e)
                    }), this.M.schedule(() => {
                        c = new BS(n, e, this.Ct), l = new Xf(this.E, this.N, this.K), h = new Zf(window.location, l), f = new Qf(h), P = new GS(this.E, n, h), Lt = new Lf(Ae, this.E);
                        let ht;
                        T = new yf(Lt, this.E.isChild, ht), U = new Ef(Lt), tt = new Sf(Lt), ot = new _f, $t = new lf(T, U, tt, ot), S = new wf(this.S, $t), w = new rp(this.C), I = new ep(w, this.S);
                        let St = new Kf(this.E, this.N, this.K);
                        zt = new xE(this.D, St), O = new yp(this.S, zt);
                        let pe = new VS(n, e, h, zt, this.E)
                    }), this.M.schedule(() => {
                        new $S(this.E, n, h, P, c, v, o, m).compute(St => {
                            this.M.schedule(() => {
                                var pe, es, Rs, Cs;
                                S.init();
                                let Re = new ME(this.E, this.S, this.Ct, e, this.w),
                                    Ce = new aE(this.E, this.N, this.Nt),
                                    Zt = new cE(this.w, window.location, Ce),
                                    vt = new oE(this.S, Zt),
                                    qt = new GE(this.S, this.E),
                                    Mi = new BE(this.tt, new TS),
                                    Rr = new XE(e, n),
                                    Cr, Di, Ir, ki = new Ja(this.E, n, e, C),
                                    Li = new Ja(this.E, n, e, C, Di);
                                St ? (this.w.emitInitTracking(), new MS(ki, Li, E, n, e, Rr, Mi, this.w, this.S, S, this.E, vt, Zt, Re, this.Ct, this.D, Lt, this.tt, this.C, qt, this.J, $t, zt, O, w, I, this.M, d, this.N, this.Nt, this.K, this.bt, this.lt, Ir, Cr, L, x).start()) : new Jf(this.w, this.S, S, vt, Zt, f, Re).start()
                            })
                        })
                    })
                }
            }
            return s
        })(),
        ds = (() => {
            let s;
            return function(r) {
                let t = "{domain}/tag/tag.bundle.js?v={version}",
                    e, i = {
                        loadBundle(w) {
                            let I = w.source,
                                O = w.data;
                            if (c(O)) {
                                let T = () => {
                                    let U = n(t, O);
                                    m(U, () => I.postMessage("csBundleLoaded", w.origin))
                                };
                                e = O.token, S(i.loadBundle), l(w.origin) && T()
                            }
                        }
                    };

                function n(w, I) {
                    return csString.prototype.replace.call(csString.prototype.replace.call(csString.prototype.replace.call(w, "{version}", I.version), "{token}", I.token), "{domain}", I.domain)
                }

                function o() {
                    return e
                }
                r.getToken = o;

                function c(w) {
                    return w && w.type === "csBundleInjection" && l(w.domain) && f(w.version) && h(w.token)
                }
                r.isAuthorizedIncomingMessage = c, r.hjDomainRegex = /^https?:\/\/[a-zA-Z0-9\.\-]+\.hotjar\.com$/;

                function l(w) {
                    return /^https?:\/\/[a-zA-Z0-9\.\-]+\.(content-square\.fr|contentsquare\.com|csq\.io)$/.test(w) || r.hjDomainRegex.test(w)
                }
                r.isAuthorizedDomain = l;

                function h(w) {
                    return /^[a-zA-Z0-9]+$/.test(w)
                }
                r.isAuthorizedToken = h;

                function f(w) {
                    return /^[a-zA-Z0-9\.]+$/.test(w)
                }
                r.isAuthorizedTagVersion = f;

                function d() {
                    let w = window.opener || window.parent;
                    return window !== w && window.addEventListener
                }
                r.isActivable = d;

                function m(w, I) {
                    let O = document.createElement("script");
                    O.type = "text/javascript", O.async = !0, O.src = w, O.onload = I, O.charset = "utf-8", document.head.appendChild(O)
                }
                r.addScript = m;

                function E(w) {
                    let I = document.createElement("link");
                    I.rel = "stylesheet", I.href = w, document.head.appendChild(I)
                }
                r.addStyle = E;

                function v(w) {
                    return `${w}?cb=${new csDate().getTime()}`
                }
                r.addCacheBusting = v;

                function C() {
                    P(i.loadBundle)
                }
                r.waitForBundleInjection = C;

                function P(w) {
                    window.addEventListener("message", w, !1)
                }
                r.listen = P;

                function S(w) {
                    window.removeEventListener("message", w, !1)
                }
                r.removeListener = S
            }(s || (s = {})), s
        })(),
        Za = "_hp_ved",
        YS = 18e5,
        XS = "/js/ved.js",
        KS = "/css/ved.css",
        JS = "/js/ved.css",
        QS = (() => {
            let s;
            return function(r) {
                r.StatusUpdate = "status"
            }(s || (s = {})), s
        })(),
        ZS = (() => {
            let s;
            return function(r) {
                r.ReceivedInitMessage = "received_init_message"
            }(s || (s = {})), s
        })();
    var gn = (() => {
            let s;
            return function(r) {
                let t = !1,
                    e;

                function i(m) {
                    return e + m
                }

                function n() {
                    let m = [i(KS), i(JS)];
                    csArray.prototype.forEach.call(m, E => {
                        ds.addStyle(E)
                    })
                }

                function o(m) {
                    let E = new csRegExp("(^|;)[ ]*" + m + "=([^;]*)"),
                        v = E.exec(document.cookie);
                    return v ? decodeURIComponent(v[2]) : null
                }

                function c(m, E, v) {
                    let C = encodeURIComponent(m) + "=" + encodeURIComponent(E),
                        P = new csDate;
                    P.setTime(P.getTime() + v);
                    let S = C + "; expires=" + P.toUTCString() + "; path=/";
                    document.cookie = S
                }

                function l() {
                    c(Za, "on", YS)
                }

                function h() {
                    return o(Za) === "on"
                }
                r.isVLCookieEnabled = h;

                function f(m) {
                    window.heapV = Object.assign({}, window.heap, {
                        source: m == null ? void 0 : m.source,
                        uri: e,
                        loadArgs: m == null ? void 0 : m.data.args,
                        identify: () => {},
                        track: () => {}
                    })
                }
                r.initializeHeapV = f;

                function d(m, E) {
                    var v;
                    if (e = m, E) {
                        let C = {
                                type: QS.StatusUpdate,
                                value: ZS.ReceivedInitMessage
                            },
                            P = {
                                targetOrigin: E == null ? void 0 : E.origin
                            };
                        (v = E == null ? void 0 : E.source) === null || v === void 0 || v.postMessage(C, P)
                    }
                    t || (t = !0, l(), f(E), window.heapV && (ds.addScript(i(XS)), n()))
                }
                r.init = d
            }(s || (s = {})), s
        })(),
        tv = (() => {
            let s;
            return function(r) {
                let t = window.opener || window.parent,
                    e = "tag",
                    i = "https://app.contentsquare.com",
                    n = [/^https:\/\/app\.contentsquare\.com$/, /^https:\/\/dev-app\.contentsquare\.com$/, /^https:\/\/staging-app\.contentsquare\.com$/, /^https:\/\/.*\.test\.contentsquare\.com$/, /^https:\/\/app\.[a-z0-9-]+\.csiab\.[a-z0-9-]+\.csq\.io$/, ds.hjDomainRegex],
                    o, c, l, h = {
                        initHeapVisualLabeler(T) {
                            var U;
                            T.origin === l && ((U = T.data) === null || U === void 0 ? void 0 : U.message) === "init" && T.source && (gn.init(l, T), w(h.initHeapVisualLabeler))
                        },
                        ping(T) {
                            typeof T.data == "string" && T.data === "ping" && m(T.origin) && (c = T.origin, o = ds.hjDomainRegex.test(T.origin) ? i : T.origin, w(h.ping), S(h.insertMessageScript), E(ds.addCacheBusting("utils.js")))
                        },
                        insertMessageScript: I(T => {
                            typeof T.data == "string" && T.data !== "ping" && (w(h.insertMessageScript), E(T.data))
                        })
                    };

                function f() {
                    return ds.getToken()
                }
                r.getToken = f;

                function d() {
                    return window !== t && window.addEventListener
                }
                r.isActivable = d;

                function m(T) {
                    return csArray.prototype.some.call(n, U => U.test(T))
                }
                r.isAuthorizedDomain = m;

                function E(T, U) {
                    let tt = document.createElement("script");
                    tt.type = "text/javascript", tt.async = !0;
                    let ot = o == null ? void 0 : csString.prototype.replace.call(o, /^https?:/, "");
                    tt.src = `${ot}/${e}/${T}`, tt.onload = U, tt.charset = "utf-8", document.getElementsByTagName("head")[0].appendChild(tt), v(T)
                }

                function v(T) {
                    csString.prototype.includes.call(T, "&mode=") && sessionStorage.setItem("_hjRetakerMode", csString.prototype.split.call(T, "&mode=")[1])
                }

                function C() {
                    S(h.ping), ds.waitForBundleInjection()
                }
                r.waitForConnection = C;

                function P(T) {
                    l = T, S(h.initHeapVisualLabeler), gn.isVLCookieEnabled() && gn.init(l)
                }
                r.waitForHeapVisualLabeler = P;

                function S(T) {
                    window.addEventListener("message", T, !1)
                }
                r.listen = S;

                function w(T) {
                    window.removeEventListener("message", T, !1)
                }
                r.removeListener = w;

                function I(T) {
                    return function(U) {
                        U.origin === c && T(U)
                    }
                }
                r.secureListener = I;

                function O(T) {
                    c && t.postMessage(T, c)
                }
                r.post = O
            }(s || (s = {})), s
        })();
    var ir = window.CSFrameCommunication || tv,
        ev = (() => {
            class s extends no {
                constructor(t) {
                    super(), this.M = t; {
                        let e = (i, n) => {
                            if (typeof n != "string" || !csString.prototype.startsWith.call(n, "on")) return;
                            let o = csString.prototype.substring.call(n, 2);
                            return (...c) => {
                                n === "onInitialDomDone" && (c = []), document.dispatchEvent(new CustomEvent("cs-e2e-event", {
                                    detail: {
                                        type: "lifecycle",
                                        name: o,
                                        data: c
                                    }
                                }))
                            }
                        };
                        this.addListener(new Proxy({}, {
                            get: e
                        }))
                    }
                }
                emitBeforeNaturalPageView(t) {
                    for (let e of this.listeners) e.onBeforeNaturalPageView && e.onBeforeNaturalPageView(t)
                }
                emitAfterNaturalPageView(t) {
                    for (let e of this.listeners) e.onAfterNaturalPageView && e.onAfterNaturalPageView(t)
                }
                emitInitTracking() {
                    for (let t of this.listeners) t.onInitTracking && t.onInitTracking()
                }
                emitStartTracking(t) {
                    for (let e of this.listeners) e.onStartTracking && this.M.schedule(() => e.onStartTracking(t))
                }
                emitStartNoTrackingMode() {
                    for (let t of this.listeners) t.onStartNoTrackingMode && this.M.schedule(() => t.onStartNoTrackingMode())
                }
                emitArtificialPageViewEnd(t = !1) {
                    for (let e of this.listeners)
                        if (e.onArtificialPageViewEnd) try {
                            e.onArtificialPageViewEnd(t)
                        } catch (i) {
                            F.error(i)
                        }
                }
                emitBeforeArtificialPageView(t, e) {
                    for (let i of this.listeners) i.onBeforeArtificialPageView && i.onBeforeArtificialPageView(t, e)
                }
                emitAfterArtificialPageView(t = !1) {
                    for (let e of this.listeners) e.onAfterArtificialPageView && e.onAfterArtificialPageView(t)
                }
                emitBeforeSessionRenewal() {
                    for (let t of this.listeners) t.onBeforeSessionRenewal && t.onBeforeSessionRenewal()
                }
                emitAfterSessionRenewal() {
                    for (let t of this.listeners) t.onAfterSessionRenewal && t.onAfterSessionRenewal()
                }
                emitOptout() {
                    for (let t of this.listeners) t.onOptout && t.onOptout()
                }
                emitReplayUnanonymizationConsentGranted() {
                    for (let t of this.listeners) t.onReplayUnanonymizationConsentGranted && t.onReplayUnanonymizationConsentGranted()
                }
                emitReplayUnanonymizationConsentWithdrawn() {
                    for (let t of this.listeners) t.onReplayUnanonymizationConsentWithdrawn && t.onReplayUnanonymizationConsentWithdrawn()
                }
                emitAfterReplayRecordingConsentGranted() {
                    for (let t of this.listeners) t.onAfterReplayRecordingConsentGranted && t.onAfterReplayRecordingConsentGranted()
                }
                emitAfterReplayRecordingConsentWithdrawn() {
                    for (let t of this.listeners) t.onAfterReplayRecordingConsentWithdrawn && t.onAfterReplayRecordingConsentWithdrawn()
                }
                emitCollectStateChange(t, e) {
                    for (let i of this.listeners) i.onCollectStateChange && i.onCollectStateChange(t, e)
                }
                emitInitialDomStart() {
                    for (let t of this.listeners) t.onInitialDomStart && t.onInitialDomStart()
                }
                emitInitialDomDone(t) {
                    for (let e of this.listeners) e.onInitialDomDone && e.onInitialDomDone(t)
                }
                emitRecordingContextChange() {
                    for (let t of this.listeners) t.onRecordingContextChange && t.onRecordingContextChange()
                }
                emitSensitiveStatusChange() {
                    var t;
                    for (let e of this.listeners)(t = e.onSensitiveStatusChange) === null || t === void 0 || t.call(e)
                }
                emitBeforeVisitorRenewal() {
                    for (let t of this.listeners) t.onBeforeVisitorRenewal && t.onBeforeVisitorRenewal()
                }
                emitAfterVisitorCleared() {
                    for (let t of this.listeners) t.onAfterVisitorCleared && t.onAfterVisitorCleared()
                }
                emitAfterVisitorRenewal() {
                    for (let t of this.listeners) t.onAfterVisitorRenewal && t.onAfterVisitorRenewal()
                }
                emitSessionCreated() {
                    for (let t of this.listeners) t.onSessionCreated && t.onSessionCreated()
                }
                emitSessionRemoved() {
                    for (let t of this.listeners) t.onSessionRemoved && t.onSessionRemoved()
                }
                emitSessionRefreshed() {
                    for (let t of this.listeners) t.onSessionRefreshed && t.onSessionRefreshed()
                }
                emitTargetingRulesMatched() {
                    for (let t of this.listeners) t.onTargetingRulesMatched && t.onTargetingRulesMatched()
                }
            }
            return B([Dt("emitStartTracking")], s.prototype, "emitStartTracking", null), s
        })();
    var sv = (() => {
        let s;
        return function(r) {
            function t() {
                return typeof window.CSJavascriptBridge == "object" && typeof window.CSJavascriptBridge.optIn == "function" && typeof window.CSJavascriptBridge.optOut == "function" && typeof window.CSJavascriptBridge.sendEvent == "function" && typeof window.CSJavascriptBridge.sendDynamicVar == "function" && typeof window.CSJavascriptBridge.sendTransaction == "function"
            }
            r.isCSJavascriptBridgeDefined = t;

            function e() {
                if (typeof window.CSJavascriptBridge.getVersion == "function") try {
                    let S = window.CSJavascriptBridge.getVersion();
                    if (Jt(S)) return S
                } catch {
                    F.warn("an error occurred when calling getVersion")
                }
                return null
            }
            r.getBridgeVersion = e;

            function i() {
                typeof window.CSJavascriptBridge.onWebviewTrackingReady == "function" && window.CSJavascriptBridge.onWebviewTrackingReady()
            }
            r.notifyIsReadyForTracking = i;

            function n(S, w) {
                window.CSJavascriptBridge.identify && window.CSJavascriptBridge.identify(S, csJSON.stringify(w))
            }
            r.identify = n;

            function o() {
                window.CSJavascriptBridge.resetIdentity && window.CSJavascriptBridge.resetIdentity()
            }
            r.resetIdentity = o;

            function c(S) {
                window.CSJavascriptBridge.addUserProperties && window.CSJavascriptBridge.addUserProperties(csJSON.stringify(S))
            }
            r.addUserProperties = c;

            function l(S) {
                window.CSJavascriptBridge.sendEvent(csJSON.stringify(S))
            }
            r.sendAnalysisEvent = l;

            function h(S) {
                if (window.CSJavascriptBridge.sendSREvent)
                    for (let w of S.events) window.CSJavascriptBridge.sendSREvent(csJSON.stringify(w))
            }
            r.sendSREvent = h;

            function f(S) {
                window.CSJavascriptBridge && window.CSJavascriptBridge.sendLog && window.CSJavascriptBridge.sendLog(csJSON.stringify(S))
            }
            r.sendLog = f;

            function d() {
                window.CSJavascriptBridge.optIn()
            }
            r.sendOptIn = d;

            function m() {
                window.CSJavascriptBridge.optOut()
            }
            r.sendOptOut = m;

            function E(S, w) {
                window.CSJavascriptBridge.sendDynamicVar(S, w)
            }
            r.sendDynamicVariable = E;

            function v(S, w, I) {
                window.CSJavascriptBridge.sendTransaction(S, w, I)
            }
            r.sendTransaction = v;

            function C(S, w) {
                if (window.CSJavascriptBridge.sendAssets) {
                    let I = csJSON.stringify(S);
                    window.CSJavascriptBridge.sendAssets(I, w || null)
                } else window.CSJavascriptBridge.sendSRAssets && window.CSJavascriptBridge.sendSRAssets(csArray.prototype.map.call(S, I => I.assetId))
            }
            r.sendAssets = C;

            function P(S) {
                window.CSJavascriptBridge && window.CSJavascriptBridge.sendNativeSREvent && window.CSJavascriptBridge.sendNativeSREvent(csJSON.stringify(S))
            }
            r.sendNativeSREvent = P
        }(s || (s = {})), s
    })();
    var iv = (() => {
            class s {
                constructor(t, e, i) {
                    this.E = t, this.Rt = e, this.Rs = i
                }
                start() {
                    var t, e, i, n, o;
                    if (window.CSQ_TAGS = csArray.prototype.concat.call(window.CSQ_TAGS || [], this.E.projectId), window.UXAnalytics) return;
                    window.UXAnalytics = {};
                    let c = new LE,
                        l = new hl(!!(!((t = this.E.taskSchedulerOptions) === null || t === void 0) && t.enabled), (e = this.E.taskSchedulerOptions) === null || e === void 0 ? void 0 : e.maxProcessingTime, (i = this.E.taskSchedulerOptions) === null || i === void 0 ? void 0 : i.waitDuration),
                        h = new Qd(this.Rt, this.E);
                    h.init();
                    let f = new tf(this.E, h);
                    if (this.Rt.isTopWindowTracker() && f.canTrack()) {
                        if (!((n = window.CSProtectnativeFunctionsLogs) === null || n === void 0) && n.Warning && F.warn(`protectNativeFunctions failed: ${window.CSProtectnativeFunctionsLogs.Warning}`), !((o = window.CSProtectnativeFunctionsLogs) === null || o === void 0) && o.Critical) {
                            F.error(`protectNativeFunctions failed: ${window.CSProtectnativeFunctionsLogs.Critical}`);
                            return
                        }
                        Kd();
                        let m = new ev(l),
                            E = new WS(this.E, h, this.Rs, l, m, c);
                        this.E.isQuotaEnabled() ? E.initWithQuota() : E.init()
                    }
                    let d = csString.prototype.indexOf.call(window.location.href, "csDebug=1") > -1;
                    window.UXAnalytics = {
                        Sensitive: {
                            isNodeSensitive(m) {
                                return D.isMaskedElement(m) || D.isMaskedElementChild(m)
                            },
                            isAttributeSensitive(m, E) {
                                return D.isMaskedAttribute(m, E)
                            },
                            getSensitiveAttributes(m) {
                                return cc(m.attributes, E => D.isMaskedAttribute(m, E.name))
                            }
                        },
                        Console: {
                            warn(m) {
                                d && console.warn("cs.tracking.warning", m)
                            },
                            error(m) {
                                d && console.error("cs.tracking.error", m)
                            }
                        },
                        Version: wc
                    }, window.CSFrameCommunication || (window.CSFrameCommunication = ir, ir.isActivable() && ir.waitForConnection(), this.E.isCsCrosswritingHeap() && ir.waitForHeapVisualLabeler(this.E.getHeapWebAppUri()))
                }
            }
            return B([Dt("main.start"), V("main.start")], s.prototype, "start", null), s
        })(),
        rv = (() => {
            class s {
                constructor() {}
                send(t, e, i = at.warn) {
                    let n = {
                        message: t,
                        errorCode: e,
                        level: i
                    };
                    sv.sendLog(n)
                }
            }
            return s
        })();

    function nv() {
        csSetTimeout(() => {
            let s = 0;
            typeof CompressionStream != "undefined" && (s |= 1), typeof TransformStream != "undefined" && (s |= 2), typeof performance != "undefined" && typeof performance.now == "function" && (s |= 4), typeof Worker != "undefined" && (s |= 8), typeof scheduler != "undefined" && (typeof scheduler.yield == "function" && (s |= 16), typeof scheduler.postTask == "function" && (s |= 32)), $.counters.availableFeatures.set(s)
        })
    }
    var ov = (() => {
        class s {
            constructor(t, e, i) {
                this.X = t, this.D = e, this.fO = i, this.Et = [], this.pO = io().v, nv()
            }
            flush() {
                this.Et.length !== 0 && (this.X.send({
                    m: csArray.prototype.map.call(this.Et, t => ({
                        n: t.name,
                        p: t.parameter,
                        v: t.value
                    })),
                    p: this.D.anonymizePII(window.location.pathname),
                    pid: this.fO,
                    v: this.pO
                }), this.Et = [])
            }
            push(t) {
                csArray.prototype.push.call(this.Et, ...t), this.flush()
            }
        }
        return s.DEBOUNCE_INTERVAL = 5e3, B([eu(s.DEBOUNCE_INTERVAL)], s.prototype, "flush", null), s
    })();

    function av(s, r) {
        let t = s.validationRate / 10,
            e = Es.boolean(t);
        if ((s.environment === "staging" || !1 || e) && !r.isInWebViewContext()) try {
            let o = vl.create(r.isTopWindowTracker()),
                l = new _l(o).create(s.getMetricsUri()),
                h = new qs,
                f = new ov(l, h, s.projectId);
            $.setService(f)
        } catch (o) {
            F.warn(`Error initializing metrics: ${o.message}`)
        }
    }

    function cv() {
        var s;
        du();
        let r = new Sd(window.CS_CONF);
        window._uxa = window._uxa || [], r.processOptionOverrides(window._uxa);
        let t = new vd(window, r);
        t.init();
        let e = new zd;
        if (Kh(F), qd(), F.computeIsActive(r.validationRate), t.isTopWindowTracker()) {
            let o = new Hd(r, e);
            F.setStrategy(o)
        } else if (t.isInWebViewContext()) {
            let n = new rv;
            F.setStrategy(n)
        }!((s = r == null ? void 0 : r.experimental) === null || s === void 0) && s.disableMutationObserverProtection && window.csMutationObserver && (window.csMutationObserver = ws(window, "MutationObserver")), td(), av(r, t), new iv(r, t, e).start()
    }
    window.CSCurrentScript = document.currentScript;
    csSetTimeout(() => {
        try {
            Wd(cv)
        } catch {}
    });
})();

// signature-08c8584eba3dcc8ca3f9f1a485526b9080f3cc51468a43f1d957012ed1792395