$(document).ready(function() {

    var navbar = $(".navbar")
    var navbarOffset = navbar.offset()

    var noActivity;

    function setActivity() {
        noActivity = setTimeout(function() {
            alert("Please Wake Up");
        }, 30 * 1000)
    }

    function resetActivity() {
        clearTimeout(noActivity);
        setActivity();
    }

    $(document).mouseover(resetActivity)

    $(window).scroll(function() {
        if (window.pageYOffset >= navbarOffset.top) {
            navbar.addClass("sticky")
        } else {
            navbar.removeClass("sticky")
        }

        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200)
        } else {
            $('#return-to-top').fadeOut(200)
        }
    })

    $("#return-to-top").on({
        click: function() {
            $("body,html").animate({
                scrollTop: 0
            }, 500);
        }
    })

    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    })
    var comment= [
        {"name": "Joni S.", "email": "jonis@student.uns.ac.id" "comment":"mantap tenan lurrr!"}
    ];

        for(var i=0;i<comment.length;i++){
            render(comment[i]);
        }

        $('#submit').click(function{}{
            var addObj = {
                "name": $('#name').val(),   
                "email": $('#email').val(),
                "colcomment": $('#colcomment').val()
            };
            comment.push(addObj);
            render(addObj);
            $('#name').val('');
            $('#email').val();
            $('#colcomment').val('');

        })
    })