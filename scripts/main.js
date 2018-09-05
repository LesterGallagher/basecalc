/// <reference path="../lib/jquery/jquery-3.2.1.min.js" />
/// <reference path="../lib/onsen/js/onsenui.min.js" />



console.log("hello world");

Object.prototype.log_inspect = function() {
    console.log(JSON.stringify(this,null,2));
}

//intializes increment and decrement buttons on number input.
$(document).ready(function(){
    $('.dec').on('click',function(e){
        let target = e.target.parentNode.parentNode.parentNode.querySelector('.baseNumber');
        let oldVal = $(target).val();
        console.log(oldVal);
        $(target).val((parseInt(oldVal) - 1).clamp(2,36));
        $('#number').trigger('change');
    });
    $('.inc').on('click',function(e){
        let target = e.target.parentNode.parentNode.parentNode.querySelector('.baseNumber');
        let oldVal = $(target).val();
        console.log(oldVal);
        $(target).val((parseInt(oldVal) + 1).clamp(2,36));
        $('#number').trigger('change');
    });
    $('#number').on('change',calcNumber);
    $('#number').on('input',calcNumber);

    calcNumber();
});

Number.prototype.clamp = function(min, max){
    if (this < min)
        return min;
    else if (this > max)
        return max
    else
        return this;
}

function calcNumber(){

    let theNumber = parseInt($('#number').val(),parseInt($('#rootBase').val()));
    console.log("The Number: ",theNumber);

    $('.resultNumber').each(function(index,elem){
        console.log($(elem).parent().parent().parent().find('.baseNumber'))
        let radix = $(elem).parent().parent().parent().find('.baseNumber').val();
        console.log("component radix",radix);

        elem.textContent = theNumber.toString(radix);
    })

}


function openOptions(target){
    
    ons.createPopover('dropdown.html').then(function(popover) {
    popover.show(target);
    });
}

var hidePopover = function() {
  document
    .getElementById('dropdown')
    .hide();
};

function openAboutPopover(){
    hidePopover();
    ons.createPopover('aboutpopover.html').then(function(popover) {
    popover.show($('#toolbar').get(0));
    });
}

var hideAboutPopover = function() {
  document
    .getElementById('aboutpopover')
    .hide();
};

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'main-page') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});


/*
original
classic
blue
dark

*/