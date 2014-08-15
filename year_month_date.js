/**year/month/date - Dynamic dropdown list
*  
*  $.fn.date_drop_list({
*       year  : "year elements",
*       month : "month elements",
*       date  : "date elements"
*  });
*/



(function ( $ ) {
    $.fn.date_drop_list = function(a){

        var tg = $(this);
        var y_dom = a.year;
        var m_dom = a.month;
        var d_dom = a.date;
        
        //1. change year select list
        $(y_dom).bind('change',function(){

            tg.create_month_option(function(){tg.create_date_option()});

        });

        //2. change month select list
        $(m_dom).bind('change',function(){

            tg.create_date_option();

        });

        //create month select list and reset day select list
        tg.create_month_option = function(callback){

            $(m_dom).find('option').eq(0).prop('selected',true);

             if (typeof(callback) === "function") {

              callback();

            }
        }

        //create date select list
        tg.create_date_option = function(){
            var y = parseInt($(y_dom).val());
            var m = parseInt($(m_dom).val(),10);
            var t = new Date(y,m,0);
            var d = t.getDate();
            var d_option = '';

            console.log(y+','+m+','+d)

            for(var i = 1; i <= d; i++){

                d_option += "<option value='"+tg.pad_left(i,2)+"'>"+tg.pad_left(i,2)+"</option>";

            }

            $(d_dom).html(d_option);
        }

        // padding zero to day number
        tg.pad_left = function(string, pad_length){

            string = string.toString();

            return string.length < pad_length ? "0" + string : string;

        }
    }
}( jQuery ));