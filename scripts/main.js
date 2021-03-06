/// <reference path="../lib/jquery/jquery-3.2.1.min.js" />
/// <reference path="../lib/onsen/js/onsenui.min.js" />

//intializes increment and decrement buttons on number input.
$(document).ready(function () {
    $('.dec').on('click', function (e) {
        let target = e.target.parentNode.parentNode.parentNode.querySelector('.baseNumber');
        let oldVal = $(target).val();
        $(target).val((parseInt(oldVal) - 1).clamp(2, 36));
        $('#number').trigger('change');
    });
    $('.inc').on('click', function (e) {
        let target = e.target.parentNode.parentNode.parentNode.querySelector('.baseNumber');
        let oldVal = $(target).val();
        $(target).val((parseInt(oldVal) + 1).clamp(2, 36));
        $('#number').trigger('change');
    });
    $('#number').on('input', calcNumber);
    $('#number').on('change', calcNumber);
    $('#rootBase').on('input', calcNumber);

    calcNumber();
});

Number.prototype.clamp = function (min, max) {
    if (this < min)
        return min;
    else if (this > max)
        return max
    else
        return this;
}

function calcNumber() {

    let theNumber = parseInt($('#number').val(), parseInt($('#rootBase').val()));

    $('.resultNumber').each(function (index, elem) {
        let radix = $(elem).parent().parent().parent().find('.baseNumber').val();
        elem.textContent = theNumber.toString(radix);
    })

}

ons.ready(function () {
    if (cordova.platformId === 'browser') {
        document.body.appendChild(document.createElement('script')).src = './scripts/browser.js';
    } else {
        document.body.appendChild(document.createElement('script')).src = './scripts/admob.js';
    }
});

function openOptions(target) {
    ons.createPopover('dropdown.html').then(function (popover) {
        popover.show(target);
    });
}

var hidePopover = function () {
    document
        .getElementById('dropdown')
        .hide();
};

function openAboutPopover() {
    hidePopover();
    ons.createPopover('aboutpopover.html').then(function (popover) {
        popover.show($('#toolbar').get(0));
    });
}

var hideAboutPopover = function () {
    document
        .getElementById('aboutpopover')
        .hide();
};

document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'main-page') {
        page.querySelector('#push-button').onclick = function () {
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});

