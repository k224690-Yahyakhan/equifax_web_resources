! function() {
    function getCspNonce() {
        if (document.currentScript && document.currentScript.nonce) return document.currentScript.nonce;
        var e = document.querySelector('script[nonce]');
        if (e && e.nonce) return e.nonce;
        var t = document.querySelector('meta[name="csp-nonce"]');
        return t ? t.content : null
    }

    function appendScript(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.defer = n.async = !0;
        var r = getCspNonce();
        r && (n.nonce = r);
        if ("string" == typeof e) n.src = e;
        else if (e.textContent) n.textContent = e.textContent;
        t && (t.async && (n.async = t.async), t.defer && (n.defer = t.defer));
        return document.getElementsByTagName("head")[0].appendChild(n), n
    }
    var e = {
        "organization": {
            "code": "equifax"
        },
        "environments": [{
            "code": "production",
            "pattern": "Lio=",
            "hash": "4166858130748204809"
        }],
        "identities": {
            "hubspotutk": {
                "type": "cookie",
                "variable": "hubspotutk",
                "format": "string",
                "priority": 1
            },
            "swb_equifax_us": {
                "type": "managedCookie",
                "variable": "_swb"
            }
        },
        "scripts": ["https://cdn.ketchjs.com/lanyard/v2/lanyard.js", "https://cdn.ketchjs.com/plugins/v1/plugins.js", "https://cdn.ketchjs.com/ketchtag/stable/v2.12/ketch.js"],
        "languages": [{
            "code": "pt",
            "englishName": "Portuguese (pt)",
            "nativeName": "Português"
        }, {
            "code": "fr",
            "englishName": "French (fr)",
            "nativeName": "Français"
        }, {
            "code": "es",
            "englishName": "Spanish (es)",
            "nativeName": "Español"
        }, {
            "code": "fr-CA",
            "englishName": "French (Canada) (fr-CA)",
            "nativeName": "Français"
        }, {
            "code": "en-GB",
            "englishName": "English (United Kingdom) (en-GB)",
            "nativeName": "English"
        }, {
            "code": "es-ES",
            "englishName": "Spanish (Spain) (es-ES)",
            "nativeName": "Español"
        }, {
            "code": "en",
            "englishName": "English",
            "nativeName": "English"
        }],
        "services": {
            "gvlHost": "https://global.ketchcdn.com/gvl/eu",
            "portholeHost": "https://equifax.privacyportal.co",
            "scriptHost": "https://cdn.ketchjs.com",
            "shoreline": "https://global.ketchcdn.com/web/v3",
            "telemetry": "https://global.ketchcdn.com/web/v2/log"
        },
        "options": {
            "appDivs": "hubspot-messages-iframe-container",
            "beaconPercentage": "1"
        },
        "property": {
            "code": "equifax_us",
            "name": "Equifax US",
            "platform": "WEB"
        },
        "jurisdiction": {
            "defaultScopeCode": "default",
            "scopes": {
                "AT": "gdpr",
                "BE": "gdpr",
                "BG": "gdpr",
                "BR": "Brazil_LGPD",
                "CA-AB": "Canada",
                "CA-BC": "Canada",
                "CA-MB": "Canada",
                "CA-NB": "Canada",
                "CA-NL": "Canada",
                "CA-NS": "Canada",
                "CA-NT": "Canada",
                "CA-NU": "Canada",
                "CA-ON": "Canada",
                "CA-PE": "Canada",
                "CA-QC": "canada_quebec",
                "CA-SK": "Canada",
                "CA-YT": "Canada",
                "CY": "gdpr",
                "CZ": "gdpr",
                "DE": "gdpr",
                "DK": "gdpr",
                "EE": "gdpr",
                "ES": "gdpr",
                "FI": "gdpr",
                "FO": "gdpr",
                "FR": "gdpr",
                "GB": "uk_general",
                "GF": "gdpr",
                "GG": "gdpr",
                "GP": "gdpr",
                "GR": "gdpr",
                "HR": "gdpr",
                "HU": "gdpr",
                "IE": "gdpr",
                "IM": "gdpr",
                "IS": "gdpr",
                "IT": "gdpr",
                "JE": "gdpr",
                "LI": "gdpr",
                "LT": "gdpr",
                "LU": "gdpr",
                "LV": "gdpr",
                "MF": "gdpr",
                "MQ": "gdpr",
                "MT": "gdpr",
                "NL": "gdpr",
                "NO": "gdpr",
                "PL": "gdpr",
                "PT": "gdpr",
                "RE": "gdpr",
                "RO": "gdpr",
                "SE": "gdpr",
                "SI": "gdpr",
                "SJ": "gdpr",
                "SK": "gdpr",
                "US-AK": "us_general",
                "US-AL": "us_general",
                "US-AR": "us_general",
                "US-AZ": "us_general",
                "US-CA": "us_general",
                "US-CO": "us_general",
                "US-CT": "us_general",
                "US-DC": "us_general",
                "US-DE": "us_general",
                "US-FL": "us_general",
                "US-GA": "us_general",
                "US-HI": "us_general",
                "US-IA": "us_general",
                "US-ID": "us_general",
                "US-IL": "us_general",
                "US-IN": "us_general",
                "US-KS": "us_general",
                "US-KY": "us_general",
                "US-LA": "us_general",
                "US-MA": "us_general",
                "US-MD": "us_general",
                "US-ME": "us_general",
                "US-MI": "us_general",
                "US-MN": "us_general",
                "US-MO": "us_general",
                "US-MS": "us_general",
                "US-MT": "us_general",
                "US-NC": "us_general",
                "US-ND": "us_general",
                "US-NE": "us_general",
                "US-NH": "us_general",
                "US-NJ": "us_general",
                "US-NM": "us_general",
                "US-NV": "us_general",
                "US-NY": "us_general",
                "US-OH": "us_general",
                "US-OK": "us_general",
                "US-OR": "us_general",
                "US-PA": "us_general",
                "US-RI": "us_general",
                "US-SC": "us_general",
                "US-SD": "us_general",
                "US-TN": "us_general",
                "US-TX": "us_general",
                "US-UT": "us_general",
                "US-VA": "us_general",
                "US-VT": "us_general",
                "US-WA": "us_general",
                "US-WI": "us_general",
                "US-WV": "us_general",
                "US-WY": "us_general",
                "YT": "gdpr"
            },
            "defaultJurisdictionCode": "default",
            "jurisdictions": {
                "AT": "gdpr",
                "BE": "gdpr",
                "BG": "gdpr",
                "BR": "Brazil_LGPD",
                "CA-AB": "Canada",
                "CA-BC": "Canada",
                "CA-MB": "Canada",
                "CA-NB": "Canada",
                "CA-NL": "Canada",
                "CA-NS": "Canada",
                "CA-NT": "Canada",
                "CA-NU": "Canada",
                "CA-ON": "Canada",
                "CA-PE": "Canada",
                "CA-QC": "canada_quebec",
                "CA-SK": "Canada",
                "CA-YT": "Canada",
                "CY": "gdpr",
                "CZ": "gdpr",
                "DE": "gdpr",
                "DK": "gdpr",
                "EE": "gdpr",
                "ES": "gdpr",
                "FI": "gdpr",
                "FO": "gdpr",
                "FR": "gdpr",
                "GB": "uk_general",
                "GF": "gdpr",
                "GG": "gdpr",
                "GP": "gdpr",
                "GR": "gdpr",
                "HR": "gdpr",
                "HU": "gdpr",
                "IE": "gdpr",
                "IM": "gdpr",
                "IS": "gdpr",
                "IT": "gdpr",
                "JE": "gdpr",
                "LI": "gdpr",
                "LT": "gdpr",
                "LU": "gdpr",
                "LV": "gdpr",
                "MF": "gdpr",
                "MQ": "gdpr",
                "MT": "gdpr",
                "NL": "gdpr",
                "NO": "gdpr",
                "PL": "gdpr",
                "PT": "gdpr",
                "RE": "gdpr",
                "RO": "gdpr",
                "SE": "gdpr",
                "SI": "gdpr",
                "SJ": "gdpr",
                "SK": "gdpr",
                "US-AK": "us_general",
                "US-AL": "us_general",
                "US-AR": "us_general",
                "US-AZ": "us_general",
                "US-CA": "us_general",
                "US-CO": "us_general",
                "US-CT": "us_general",
                "US-DC": "us_general",
                "US-DE": "us_general",
                "US-FL": "us_general",
                "US-GA": "us_general",
                "US-HI": "us_general",
                "US-IA": "us_general",
                "US-ID": "us_general",
                "US-IL": "us_general",
                "US-IN": "us_general",
                "US-KS": "us_general",
                "US-KY": "us_general",
                "US-LA": "us_general",
                "US-MA": "us_general",
                "US-MD": "us_general",
                "US-ME": "us_general",
                "US-MI": "us_general",
                "US-MN": "us_general",
                "US-MO": "us_general",
                "US-MS": "us_general",
                "US-MT": "us_general",
                "US-NC": "us_general",
                "US-ND": "us_general",
                "US-NE": "us_general",
                "US-NH": "us_general",
                "US-NJ": "us_general",
                "US-NM": "us_general",
                "US-NV": "us_general",
                "US-NY": "us_general",
                "US-OH": "us_general",
                "US-OK": "us_general",
                "US-OR": "us_general",
                "US-PA": "us_general",
                "US-RI": "us_general",
                "US-SC": "us_general",
                "US-SD": "us_general",
                "US-TN": "us_general",
                "US-TX": "us_general",
                "US-UT": "us_general",
                "US-VA": "us_general",
                "US-VT": "us_general",
                "US-WA": "us_general",
                "US-WI": "us_general",
                "US-WV": "us_general",
                "US-WY": "us_general",
                "YT": "gdpr"
            }
        }
    };
    window.semaphore = window.semaphore || [], window.ketch = function() {
        window.semaphore.push(arguments)
    }, window.semaphore.unshift(["init", e]);
    for (var n = document.getElementsByTagName("head")[0], t = 0; t < e.scripts.length; t++) {
        appendScript(e.scripts[t])
    }
}();