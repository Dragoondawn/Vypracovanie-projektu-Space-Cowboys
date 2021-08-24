//---------------------lightbox
    let galeria = $('#imageGallery');
    let overlay = $('<div id="overlay"></div>');
    let left = $('<div id="sipky" class="sipky" > <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg> <a href="#">Previous image</a> </div>');
    let right = $('<div id="sipky" class="sipky"> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> <a href="#">Next image</a> </div>');
    let exit = $('<div id="exit_btn" class="exit_btn"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> </div>');
    let anchor;
    let nova_href;
    overlay.appendTo(galeria).hide();
        

    galeria.find("a").on("click", function(event) {
        event.preventDefault();
        
        let href = $(this).attr("href");
            anchor = $(this);
            img = $("<img>", {src: href});

        let imageAlt = $(this).children("img").attr("alt");
        let imageDescription = $("<p>" + imageAlt +"</p>");
        overlay.html(img).show();
        left.prependTo(overlay);
        exit.appendTo(overlay);      
        right.appendTo(overlay);
        imageDescription.appendTo(overlay);
    })

    overlay.on('click', function(){
        $(this).hide();
    })

    $(".exit_btn").on('click', function(event) {
            overlay.hide();
    })

    $(".sipky:nth-of-type(1)").on("click", function(event) {
        event.stopPropagation();
        if(anchor.pre().attr("href") !== undefined) {
            anchor = anchor.prev();
            nova_href = anchor.attr("href");
        }
        img.attr("src", nova_href);
    })

    $(".sipky:nth-of-type(2)").on("click", function(event) {
        event.stopPropagation();
        if(anchor.next().attr("href") !== undefined) {
            anchor = anchor.next();
            nova_href = anchor.attr("href");
        }
        img.attr("src", nova_href);
    })

