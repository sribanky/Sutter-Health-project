/*global $*/
(function () {
    'use strict';
    //    sidebar toggle
    $("#sidebarCollapse").on('click', function () {
        $(".toggleButton").toggleClass('closed');
        $("#sidebar").toggleClass('closed');
        $('#content').toggleClass('toggle');
        $('#contentDetails').toggleClass('toggle');
        $('.topNav').toggleClass('toggle');
        $('.customDetail').toggleClass('toggle');

        $('#sidebar').find('.show').removeClass('show');

        if ($("#sidebar").hasClass('closed')) {
            $('.menulist a').removeAttr('data-toggle');
        } else {
            $('.menulist a').attr("data-toggle", "collapse");
        }

    });
    //    datatable
    $('#example').DataTable({
        "pagingType": "simple",
        "ordering": true,
        "searching": true,
        "language": {
            "paginate": {
                "next": '<img src="Assets/right.png"/>',
                "previous": '<img src="Assets/left.png"/>'
            }
        }
    });
    // Custom Attach File Button
    $(".fileupload").on('change', function () {
        var fakepath = this.value,
            documentID = $(this).prop('id');
        if (fakepath !== "" || fakepath !== undefined) {
            var documentName = fakepath.substring(fakepath.lastIndexOf('\\') + 1);
            documentDisplay(documentName, documentID);
        }

        function documentDisplay(documentName, documentID) {
            var tempname = documentName;
            $("#" + documentID).siblings('.documentName').css("display", "inline-block");
            $("#" + documentID).siblings('.documentName').find('.docName').text(tempname);
        }

    });

    //    profile option dropdown
    $(".optionDropdown").on('click', function () {
        $(".dropdownOptionsBody").toggle();
    });
    //    view more function
    $(".viewMore").on('click', function () {
        $(".viewMoreBody").toggle();
    });
    //    modify datatable styles
    var entries, Search, ShowEntries, SearchCustom;
    entries = $("#example_length label").html();
    Search = $("#example_filter label").html();
    ShowEntries = entries.replace('entries', '');
    SearchCustom = Search.replace('Search:', '');
    ShowEntries = ShowEntries.replace('Show', 'Show Entries');
    $("#example_length label").html(ShowEntries);
    $(".auditReportDetail #example_length").html('<label>Branch</label><select class="filterSelect"><option>Bangalore</option><option>Pune</option></select> <label>Type</label><select class="filterSelect"><option>Loren</option><option>Ipsum</option></select>');
    $("#example_filter label").html(SearchCustom);
    $("#example_filter label input").attr("placeholder", "Search");


    //datepicker
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        zIndex: 2048
    });
    //    custom checkbox
    $('select').selectpicker();
}());
