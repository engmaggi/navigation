$(document).ready(function () {
    var pathname = window.location.pathname;
    var res = pathname.split("/");
    var languages = $('meta[name=languages]').attr('content');
            var LanguagesCount = languages.split(/\s*,\s*/).length;
    if (LanguagesCount > 1){
      languages.split(/\s*,\s*/).forEach(function (language) {
        $('ul.lang_list_class').append('<li><a class=\"lang_switcher_link\" href=\"' + pathname.replace("/" + res[1] + "/", "/" + language + "/") + '\" data-language=\"' + language + '\">' + language.toUpperCase() + '</a></li>');
        $('ul.lang_list_class_2').append('<li><a class=\"lang_switcher_link\" href=\"' + pathname.replace("/" + res[1] + "/", "/" + language + "/") + '\" data-language=\"' + language + '\">' + language.toUpperCase() + '</a></li>');
    });
    }
    else{
      $('.lang_switcher_class').remove();
    }     
});