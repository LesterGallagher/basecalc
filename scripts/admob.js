var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
    admobid = {
        banner: 'ca-app-pub-9732535637352249/4166665219', // or DFP format "/6253334/dfp_example_ad"
        interstitial: 'ca-app-pub-xxx/yyy'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
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

function createBanner(){
    return;
    if(window.AdMob){ 
        console.log('creating a banner');
        AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            adSize: 'SMART_BANNER',
            //isTesting:true, //Remove Before Release !!!!
            autoShow: true 
    });}else{
        console.log('failed to create a banner')
        setTimeout(function() {
            createBanner();
        }, 1000);
    }
}

createBanner();
