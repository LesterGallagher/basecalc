var admobid = {};
if (/(android)/i.test(navigator.userAgent)) { // for android & amazon-fireos
    admobid = {
        banner: 'ca-app-pub-9732535637352249/4166665219', // or DFP format "/6253334/dfp_example_ad"
        interstitial: 'ca-app-pub-xxx/yyy'
    };
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
    admobid = {
        banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
        interstitial: 'ca-app-pub-xxx/kkk'
    };
} else { // for windows phone
    admobid = {
        banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
        interstitial: 'ca-app-pub-xxx/kkk'
    };
}

function initApp() {
    if (!window.cordova || window.cordova.platformId === 'browser') return;
    if (!window.AdMob) {
        //try again after 1 second.
        setTimeout(initApp, 1000);
        return;
    }

    // this will create a banner on startup
    window.AdMob.createBanner({
        adId: admobid.banner,
        position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
        //isTesting: true, // TODO: remove this line when release
        overlap: false,
        offsetTopBar: false,
        bgColor: 'black',
        adSize: 'SMART_BANNER'
    });
}

if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}