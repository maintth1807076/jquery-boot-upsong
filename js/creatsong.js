var validater = $('#song-form').validate({
    submitHandler: function (form,event) {
        event.preventDefault();
        var senderObject = {
            name: $(form["name"]).val(),
            singer: $(form["singer"]).val(),
            description: $(form["description"]).val(),
            author: $(form["author"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link: $(form["link"]).val(),
        };
        $.ajax({
            type: "POST",
            url: CREATE_SONG_API,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(senderObject),
            headers: { 'authorization': 'Basic ' + localStorage.getItem('token')},
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                alert('dang ki thanh cong');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('error');
                // if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                //     $('#summary').text(please fix ${Object.keys(jqXHR.responseJSON.error).length} below!);
                //     validater.showErrors(jqXHR.responseJSON.error);
                // }
            }
        });
        return false;
    }
});

