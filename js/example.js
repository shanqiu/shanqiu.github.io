$(document).ready(function(){


    var score = 0;

    $('#fullpage').fullpage({

      // continuousVertical: true,
      // scrollingSpeed: 300
    });
    $('#fullpage2').fullpage({

      // continuousVertical: true,
      // scrollingSpeed: 300
    });
    var ball = document.getElementById("#ball");
    var flower = document.getElementById("#flower");
    var hair = document.getElementById("#hair");
    var sky = document.getElementById("#sky");
    
    TweenMax.to("#sky", 3, {x:30, y:0,repeat:100, ease:Bounce.easeInOut, yoyo:true, delay:2});

    var rightAnswer = [1,2,3,2,1,3];

    $('#first-level').jsMovie({
        sequence : "a#.png",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/av/",       //this is the path where the script can find the image sequence
        from     : 1,               //the #### will start to replace with 0001
        to       : 30,              //the #### will start to replace with 0040
        // width    : 480,             //the advertisement container will be resized to a width of 320px
        // height   : 100%,             //the advertisement container will be resized to a height of 150px
        showPreLoader : true,       //we do want to see a preloader animation
        playOnLoad : false,  
        fps: 8,

               //we don't want to have the movie play after the images have been loaded automatically
        // the preloader animation is located in the folder "img/loader.png"
        // it is a 4x4 image matrix with each image of 40px by 40px
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}
        
    });

    $("#worm").jsMovie({
        sequence : "b#.png",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/worm/",       //this is the path where the script can find the image sequence
        from     : 2,               //the #### will start to replace with 0001
        to       : 11,              //the #### will start to replace with 0040
        // width    : 480,             //the advertisement container will be resized to a width of 320px
        // height   : 100%,             //the advertisement container will be resized to a height of 150px
        showPreLoader : true,       //we do want to see a preloader animation
        playOnLoad : false,  
        fps: 8,
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}  
    });

    $("#ass-ani1").jsMovie({
        sequence : "c#.png",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/windows/ani/",       //this is the path where the script can find the image sequence
        from     : 2,               //the #### will start to replace with 0001
        to       : 30,              //the #### will start to replace with 0040
        // width    : 480,             //the advertisement container will be resized to a width of 320px
        // height   : 100%,             //the advertisement container will be resized to a height of 150px
        showPreLoader : true,       //we do want to see a preloader animation
        playOnLoad : false,  
        fps: 24,
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}  
    });

    $("#ass-ani2").jsMovie({
        sequence : "e#.png",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/windows/ani2/",       //this is the path where the script can find the image sequence
        from     : 2,               //the #### will start to replace with 0001
        to       : 24,              //the #### will start to replace with 0040
        // width    : 480,             //the advertisement container will be resized to a width of 320px
        // height   : 100%,             //the advertisement container will be resized to a height of 150px
        showPreLoader : true,       //we do want to see a preloader animation
        playOnLoad : false,  
        fps: 24,
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}  
    });

    $("#ass-ani3").jsMovie({
        sequence : "d#.png",    //the #### will be replaced with 0001,0002,0003,...
        folder   : "img/windows/ani3/",       //this is the path where the script can find the image sequence
        from     : 2,               //the #### will start to replace with 0001
        to       : 24,              //the #### will start to replace with 0040
        // width    : 480,             //the advertisement container will be resized to a width of 320px
        // height   : 100%,             //the advertisement container will be resized to a height of 150px
        showPreLoader : true,       //we do want to see a preloader animation
        playOnLoad : false,  
        fps: 24,
        loader   : {path:"img/loader.png",height:40,width:40,rows:4,columns:4}  
    });

    $("#worm").jsMovie("addClip","chit",3,10);
    $("#ass-ani1").jsMovie("addClip","windows",3,29);
    $("#ass-ani2").jsMovie("addClip","bluewin",3,23);
    $("#ass-ani3").jsMovie("addClip","yellowwin",3,23);


    $('#enter-btn1').click(function(){
        $('#first-mask').hide();
        $('#second-mask').show();      
    });
        
    $('#first-level').jsMovie("addClip","a",2,11);
    $('#first-level').jsMovie("addClip","b",12,24);


    //  第一关出现 //

    $("#enter-btn2").click(function(){
        $('#second-mask').hide();
        $('#first-level').show();
        $('#first-trigger').show();
        $("#first-level").jsMovie("option","repeat",true);
        $('#first-level').jsMovie("playClip", "a");

    });





    //  第一问题出现 //

    $("#first-trigger").click(function(){
        $('#first-trigger').hide();
        $("#first-level").jsMovie("option","repeat",false);
        $('#first-level').jsMovie("playClip", "b");
        $('#first-level').on("stop",function(){
            setTimeout(function() {
                $("#first-question").show(0);
            }, 1000);
        
        });
    })

    //  第一问题消失 第二关出现 //

    $(".question-btn1").click(function(){
        $('#first-question').hide();
        $('#first-level').hide();
        $('#second-level').show();
        if ($(this).attr("id") == "do1"){
            console.log("do1");
            score = score +1;
        }
    });

    $("#first-level").jsMovie("option","repeat",false);
    

    //  第二问题出现 //

    $('#ball').click(function(){
        TweenLite.to("#ball", 0.5, {rotation:180, transformOrigin:"43px 80px"});
        TweenMax.to("#ball", 0.2, {x:0, y:10,repeat:10, ease:Bounce.easeInOut, yoyo:true, delay:0.5});
        $('#mayun').delay(700).show(0);
        $('#pan').delay(1100).show(0);
        $('#pan2').delay(1500).show(0);
        $('#mayun2').delay(1900).show(0);
        $('#pan3').delay(2300).show(0);
        TweenLite.to("#mayun", 2, {top: "800px", ease:Power0.easeInOut, delay:0.7});
        TweenLite.to("#pan", 2, {top: "800px", ease:Power0.easeInOut, delay:1.1});
        TweenLite.to("#pan2", 2, {top: "800px", ease:Power0.easeInOut, delay:1.5});
        TweenLite.to("#mayun2", 2, {top: "800px", ease:Power0.easeInOut, delay:1.9});
        TweenLite.to("#pan3", 2, {top: "800px", ease:Power0.easeInOut, delay:2.3});
        setTimeout(function() {
            $('#second-question').show(0);
        }, 3000);
    });


    //  第二问题消失 第三关出现 //

    $(".question-btn2").click(function(){
        $('#second-question').hide();
        $('#second-level').hide();
        $('#third-level').show();
        TweenMax.to("#flower", 1, {x:20, y:0,repeat:100, ease:Bounce.easeInOut, yoyo:true, delay:2});
        TweenMax.to("#hair", 0.6, {x:10, y:10,repeat:100, ease:Bounce.easeInOut, yoyo:true, delay:2});
        if ($(this).attr("id") == "do2"){
            console.log("do1");
            score = score +1;
        }

    });



   //  第三问题出现 //

    $("#flower-cover").click(function(){
        setTimeout(function() {
            $("#third-level").hide();
            $("#third-question").show();
        }, 1000);
    });

    //  第三问题消失 第四关出现 //

    $(".question-btn3").click(function(){
        setTimeout(function() {
            $('#third-question').hide();
            $('#third-level').hide();
            $('#fourth-level').show();
        }, 1000);
        if ($(this).attr("id") == "do3"){
            console.log("do1");
            score = score +1;
        }

    });

    var ass1Num = 0;
    var ass2Num = 0;
    var ass3Num = 0;


    //  第四问题出现 //

    $("#ass1").click(function(){

        ass1Num = 1;
        console.log("sit");
        $("#ass-ani1").show();
        $("#ass1").hide();
        $("#ass-ani1").jsMovie("option","repeat",true);
        $("#ass-ani1").jsMovie("playClip", "windows");
        if(ass1Num&&ass2Num&&ass3Num){
            console.log("go");
            setTimeout(function() {
                $("#fourth-level").hide();
                $("#fourth-question").show();
            }, 1000);
        }
    });


    $("#ass2").click(function(){

        ass2Num = 1;
        console.log("sit");
        $("#ass-ani2").show();
        $("#ass2").hide();
        $("#ass-ani2").jsMovie("option","repeat",true);
        $("#ass-ani2").jsMovie("playClip", "bluewin");
        if(ass1Num&&ass2Num&&ass3Num){
            console.log("go");
            setTimeout(function() {
                $("#fourth-level").hide();
                $("#fourth-question").show();
            }, 1000);
        }
    });

    $("#ass3").click(function(){

        ass3Num = 1;
        console.log("sit");
        $("#ass-ani3").show();
        $("#ass3").hide();
        $("#ass-ani3").jsMovie("option","repeat",true);
        $("#ass-ani3").jsMovie("playClip", "yellowwin");
        if(ass1Num&&ass2Num&&ass3Num){
            console.log("go");
            setTimeout(function() {
                $("#fourth-level").hide();
                $("#fourth-question").show();
            }, 1000);
        }
    });    

    //  第四问题消失 第五关出现 //

    $(".question-btn4").click(function(){
        setTimeout(function() {
            $('#fourth-question').hide();
            $('#fourth-level').hide();
            $('#fifth-level').show();
        }, 1000);
        $("#worm").jsMovie("option","repeat",true);
        $("#worm").jsMovie("playClip", "chit");

        if ($(this).attr("id") == "do4"){
            console.log("do1");
            score = score +1;
        }
    });

    //  第五问题出现 //

    $("#worm").click(function(){
        $("#fifth-level").hide();
        $("#fifth-question").show();
    });

    //  第五问题消失 第六关出现 //

    $(".question-btn5").click(function(){
        $('#fifth-question').hide();
        $('#fifth-level').hide();
        $('#sixth-level').show();

        if ($(this).attr("id") == "do5"){
            console.log("do1");
            score = score +1;
        }
    });

    //  第六问题出现 //

    var playerClick = 0;
    $("#player-btn").click(function(){
        if(playerClick == 0){
            $('#player').show();
        }else if(playerClick>0){
            $('#waveS').show();
            $('#waveB').show();
            setTimeout(function() {
                $("#sixth-level").hide();
                $("#sixth-question").show();
            }, 1000);

        }
        playerClick = playerClick + 1;
    });

    //  第六问题消失 第七关出现 //
    $(".question-btn6").click(function(){
        if ($(this).attr("id") == "do6"){
            console.log("do1");
            score = score +1;
        }
        $('#sixth-question').hide();
        $('#sixth-level').hide();
        $("#score").text(score);
        $('#seventh-question').show();

    });
});