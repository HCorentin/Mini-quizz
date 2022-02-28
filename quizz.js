let score = 0;
let total = 9;
let point = 1; //points par bonne réponse
let highest = total * point;

function init() {
    //on définit ce qu'est une bonne réponse
    sessionStorage.setItem('a1', 'b')
    sessionStorage.setItem('a2', 'a')
    sessionStorage.setItem('a3', 'a')
    sessionStorage.setItem('a4', 'c')
    sessionStorage.setItem('a5', 'a')
    sessionStorage.setItem('a6', 'b')
    sessionStorage.setItem('a7', 'b')
    sessionStorage.setItem('a8', 'd')
    sessionStorage.setItem('a9', 'd')
}

$(document).ready(function () {
    $.getJSON("document.json", function(data) {
        /*for(let i=0; i<data.length; i++){
            $("h3").append(data[i]['question']);
        }*/
       /* for(let j=0; j<data.length; j++){
            $("li").append(data[0]['reponses'][j]);
        }*/
        $("#question1").append(data[0]['question'])
        $("#question2").append(data[1]['question'])
        $("#question3").append(data[2]['question'])
        $("#question4").append(data[3]['question'])
        $("#question5").append(data[4]['question'])
        $("#question6").append(data[5]['question'])
        $("#question7").append(data[6]['question'])
        $("#question8").append(data[7]['question'])
        $("#question9").append(data[8]['question'])

        $("#a").append((data[0]['reponses'][0]))
        $("#b").append((data[0]['reponses'][1]))
        $("#c").append((data[0]['reponses'][2]))
        $("#d").append((data[0]['reponses'][3]))

        $("#a1").append((data[1]['reponses'][0]))
        $("#b1").append((data[1]['reponses'][1]))
        $("#c1").append((data[1]['reponses'][2]))
        $("#d1").append((data[1]['reponses'][3]))

        $("#a2").append((data[2]['reponses'][0]))
        $("#b2").append((data[2]['reponses'][1]))
        $("#c2").append((data[2]['reponses'][2]))
        $("#d2").append((data[2]['reponses'][3]))

        $("#a3").append((data[3]['reponses'][0]))
        $("#b3").append((data[3]['reponses'][1]))
        $("#c3").append((data[3]['reponses'][2]))
        $("#d3").append((data[3]['reponses'][3]))

        $("#a4").append((data[4]['reponses'][0]))
        $("#b4").append((data[4]['reponses'][1]))
        $("#c4").append((data[4]['reponses'][2]))
        $("#d4").append((data[4]['reponses'][3]))

        $("#a5").append((data[5]['reponses'][0]))
        $("#b5").append((data[5]['reponses'][1]))
        $("#c5").append((data[5]['reponses'][2]))
        $("#d5").append((data[5]['reponses'][3]))

        $("#a6").append((data[6]['reponses'][0]))
        $("#b6").append((data[6]['reponses'][1]))
        $("#c6").append((data[6]['reponses'][2]))
        $("#d6").append((data[6]['reponses'][3]))

        $("#a7").append((data[7]['reponses'][0]))
        $("#b7").append((data[7]['reponses'][1]))
        $("#c7").append((data[7]['reponses'][2]))
        $("#d7").append((data[7]['reponses'][3]))

        $("#a8").append((data[8]['reponses'][0]))
        $("#b8").append((data[8]['reponses'][1]))
        $("#c8").append((data[8]['reponses'][2]))
        $("#d8").append((data[8]['reponses'][3]))

        $('.questionForm').hide();
        $("#q1").show();

        $('#q1 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q1');
            $('#q2').fadeIn(300);
            return false;
        });

        $('#q2 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q2');
            $('#q3').fadeIn(300);
            return false;
        });

        $('#q3 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q3');
            $('#q4').fadeIn(300);
            return false;
        });

        $('#q4 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q4');
            $('#q5').fadeIn(300);
            return false;
        });

        $('#q5 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q5');
            $('#q6').fadeIn(300);
            return false;
        });

        $('#q6 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q6');
            $('#q7').fadeIn(300);
            return false;
        });

        $('#q7 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q7');
            $('#q8').fadeIn(300);
            return false;
        });

        $('#q8 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q8');
            $('#q9').fadeIn(300);
            return false;
        });

        $('#q9 #submit').click(function() {
            $('.questionForm').hide();
            verifReponse('q9');
            $('#results').fadeIn(300);
            return false;
        });

    }).fail(function (){
        console.log("An error has occurred");
    });


});

function verifReponse(q) {
    if (q=="q1") {
        let submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1) {
            score++;
        }
    }
    if (q=="q2") {
        let submitted = $('input[name=q2]:checked').val();
        if(submitted == sessionStorage.a2) {
            score++;
        }
    }
    if (q=="q3") {
        let submitted = $('input[name=q3]:checked').val();
        if(submitted == sessionStorage.a3) {
            score++;
        }
    }
    if (q=="q4") {
        let submitted = $('input[name=q4]:checked').val();
        if(submitted == sessionStorage.a4) {
            score++;
        }
    }
    if (q=="q5") {
        let submitted = $('input[name=q5]:checked').val();
        if(submitted == sessionStorage.a5) {
            score++;
        }
    }
    if (q=="q6") {
        let submitted = $('input[name=q6]:checked').val();
        if(submitted == sessionStorage.a6) {
            score++;
        }
    }
    if (q=="q7") {
        let submitted = $('input[name=q7]:checked').val();
        if(submitted == sessionStorage.a7) {
            score++;
        }
    }
    if (q=="q8") {
        let submitted = $('input[name=q8]:checked').val();
        if(submitted == sessionStorage.a8) {
            score++;
        }
    }
    if (q=="q9") {
        let submitted = $('input[name=q9]:checked').val();
        if(submitted == sessionStorage.a9) {
            score++;
        }
        $('#results').html('<h3>Ton score est: '+score+' sur 9</h3>')
    }
    return false;
}

window.addEventListener('load', init, false);