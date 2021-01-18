var n = navigator;
var d = document;
var ua = n.userAgent;

/**
 * Detect if user's device was ios
 *
 * @public
 * @return true or false
 */
function isIOS() {
    return (
        ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(n.platform) ||
        // iPad on iOS 13 detection
        (ua.includes("Mac") && "ontouchend" in d)
    );
}

/**
 * Detect if user's IOS version is greater than equal 14
 *
 * @public
 * @return true or false
 */
function isIOSGreaterThanEqual14() {
    return isIOS() && (iosVersion() || {list: [0]}).list[0] >= 14;
};

function iosVersion() {
    var version = [];
    var IOSPatterns = [/Version\/(\d+).(\d+)(?:.(\d+))?\sSafari/i, /OS\s(\d+)_(\d+)(?:\_(\d+))?/i];
    if (IOSPatterns[0].test(ua)) {
        var match = ua.match(IOSPatterns[0]) || "";
        version = match.slice(1, 4).map(function(v) {
            return Number(v) || 0;
        }) || [];
    } else if (IOSPatterns[1].test(ua)) {
        var match = ua.match(IOSPatterns[1]) || "";
        version = match.slice(1, 4).map(function(v) {
            return Number(v) || 0;
        }) || [];
    } else {
        return undefined;
    }

    return {
        pure: version.join("."),
        list: version,
    };
}
