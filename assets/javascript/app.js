var notAnswered = 0;
var gold = [];
var newGold = [];
var generator;
var random; 
var choose = '';
var runs = false;
var time = 35; 
var timer;
var correctPoint = 0;
var wrongPoint = 0;
var photoHide;
var qouteCount = quote.length;

window.onload = function() {

    $('#again').hide();
    $('#start').on('click', function() {
        $('#start').hide();
        showQuotes();
        runTime();
        for (var i = 0; i < quotes.length; i++) {
            gold.push(quotes[i]);
        }
    })

    function showQuotes() {
        generator = Math.floor(Math.random() * quotes.length);
        random = quotes[generator];
        
        $('#quote').html('<h1>' + random.quote + '</h1>');
        for (var i = 0; i < random.choice.length; i++) {
            var choose = $('<div>');
            choose.addClass('answerchoose');
            choose.html(random.choice[i]);
            choose.attr('datavalue', i);
            $('#answer-buttons').append(choose);
        }
       

    $('.answerchoose').on('click', function() {
        choose = parseInt($(this).attr('datavalue'));
        if (choose = random.answer) {
            timeStop();
            correctPoint++;
            $('#answer-buttons').html('<p>Correct!</p>');
            hidephoto();
        } else {
            timeStop();
            wrongPoint++;
            choose = '';
            $('#answer-buttons').html('<p> Wrong.... Correct Answer was ' + random.choice[random.answer] + '</p>');
            hidephoto();
        }
    })
    }

    function hidephoto() {
        $('#answer-buttons').append('<img src=' + random.photo + '>');
        newGold.push(random);
        quotes.splice(generator, 1);
        photoHide = setTimeout(function() {
            $('#answer-buttons').empty();
            time = 35;
            
            if((wrongPoint + correctPoint + notAnswered) === qouteCount) {
                $('#answer-buttons').empty();
                $('#quote').html('<h1> GAME OVER </h1>');
                $('#answer-buttons').append('h2> How many you got correct: ' + correctPoint + '</h2>');
                $('#answer-buttons').append("<h3> How many you got wrong: " + wrongPoint + "</h3>" );
                $('#answer-buttons').append("<h3> How many you didn't answer: " + notAnswered + "</h3>" );
                $("#again").show();
                correctPoint = 0;
                wrongPoint = 0;
                notAnswered = 0;
            } else {
                runTime();
                showQuotes()
            }
        }, 2000);
    }

    function runTime() {
        if (!runs) {
            timer = setInterval(reduction, 1000);
            runs = true;
        }
    }
    
    function reduction() {
        $('#timer').html('<h2>Time left: ' + time + '</h2>')
        time --;
        if (time === 0) {
                notAnswered++;
                timeStop();
                $('answer-buttons').html('<p> Time is up and the correct answer was: ' + random.choice[random.answer] + '</p>');
                hidephoto();
        }
    }

    function timeStop() {
        runs = false;
        clearInterval(timer);
    }

    $('#again').on('click', function() {
        $('#again').hide();
        $('#answer-buttons').empty();
        $('quote').empty();
        for(var i = 0; i < gold.length; i++) {
            quotes.push(gold[i]);
        }
        runTime();
        showQuotes();
    })
}



var quotes = [
    {
        quote: 'The definition of insanity is doing the same thing over and over again and expecting a different result.',
        choice: ['Albert Einstein', 'Stephan Hawking', 'Nikola Tesla', 'Sigmund Freud'],
        answer: 3,
        photo: 'assets/images/albert.jpg'
     },
     {
        quote: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
        choice: ['Isaac Newton', 'Abraham Lincoln', 'Dwight D. Eisenhower', 'Harrison Ford'],
        answer: 2,
        photo: 'assets/images/abraham.jpg'
     }, 
     {
         quote: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
        choice: ['Carl Sagan', 'Arostotle', 'Dr.Seuss', 'Robin Wiliams'],
        answer: 1,
        photo: 'assets/images/seuss.jpg'
    }, 
    {
        quote: 'There is only one corner of the universe you can be certain of improving, and that is your own self.',
        choice:  ['Ralph Waldo Emerson', 'Elon Musk', 'Carl Jung', 'Aldous Huxley'],
        answer: 3,
        photo: 'assets/images/huxley.jpg'
    }, 
    {
        quote: 'Wanting to be someone else is a waste of who you are.',
        choice: ['Kurt Cobain', 'Dave Grohl', 'Janis Joplin', 'John Steinbeck'],
        answer: 3,
        photo: 'assets/images/kurt.jpg'
    }, 
    {
        quote: 'This above all: to thine own self be true.',
        choice: ['Oscar Wilde', 'William Shakespeare', 'Confucius', 'Edgar Allan Poe'],
        answer: 2,
        photo: 'assets/images/shake.jpg'
    }, 
    {
        quote: 'I haven’t failed. I’ve just found 10,000 ways that won’t work.',
        choice: ['Alan Turing', 'Samuel L. Jackson', 'Thomas Edison', 'C.S. Lewis'],
        answer: 1,
        photo: 'assets/images/Edison.jpg'
    }, 
    {
        quote:  'Life is what happens when you are busy making other plans.',
        choice: ['John Lennon', 'Johnny Depp', 'Terence McKenna', 'Marilyn Monroe'],
        answer: 3,
        photo: 'assets/images/lennon.jpg'
    },
    {
        quote: 'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.',
        choice: ['James Gosling', 'John von Neumann', 'Bill Gates', 'Steve Jobs'],
        answer: 3,
        photo: 'assets/images/jobs.jpg'
    },
    {
        quote: 'The only impossible journey is the one you never begin.',
        choice: ['Tony Robbins', 'Will Smith', 'Alan Watts', 'Sun Tzu'],
        answer: 3,
        photo: 'assets/images/robins.jpg'
    },
    {
        quote: 'Love the life you live. Live the life you love.',
        choice: ['Bob Marley', 'Benjamin Franklin', 'Leonardo DiCaprio', 'Eckhart Tolle'],
        answer: 3,
        photo: 'assets/images/marley.jpg'
    },
    {
        quote: 'Life is made of ever so many partings welded together.',
        choice: ['Lana Del Rey', 'Charles Darwin', 'Charles Dickens', 'Tom Hanks'],
        answer: 1,
        photo: 'assets/images/dickens.jpg'
    },
    {
        quote: 'Life is trying things to see if they work.',
        choice: ['Ray Bradbury', 'Billie Eilish', 'Immanuel Kant', 'Morgan Freeman'],
        answer: 3,
        photo: 'assets/images/bradbury.jpg'
    },
    {
        quote: 'Success usually comes to those who are too busy to be looking for it.',
        choice: ['Elton John', 'Francis Scott Fitzgerald', 'Karl Marx', 'Henry David Thoreau'],
        answer: 3,
        photo: 'assets/images/Thoreausm.jpg'
    },
    {
        quote: 'You know you are on the road to success if you would do your job and not be paid for it.',
        choice: ['Justin Timberlake', 'J.K. Rowling', 'George Orwell', 'Oprah Winfrey'],
        answer: 3,
        photo: 'assets/images/winfrey.jpg'
    },
    {
        quote: 'The question isnt who is going to let me; its who is going to stop me.',
        choice: ['Elvis Presley', 'Ayn Rand', 'Mark Twain', 'Friedrich Nietzsche'],
        answer: 2,
        photo: 'assets/images/rand.jpg'
    },
    {
        quote:  'Whether you think you can or you think you cant, youre right.',
        choice: ['Ed Sheeran', 'Stephen King', 'Henry Ford', 'Winston Churchill'],
        answer: 1,
        photo: 'assets/images/ford.jpg'
    },
    {
        quote: 'I would rather die of passion than of boredom.',
        choice: ['Vincent van Gogh', 'Pablo Picasso', 'Mona Lisa', 'Lady Gaga'],
        answer: 3,
        photo: 'assets/images/gogh.jpg'
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
        choice: ['Eleanor Roosevelt', 'Micheal Jackson', 'Ernest Hemingway', 'Neil deGrasse Tyson'],
        answer: 3,
        photo: 'assets/images/roosevelt.jpeg'
    },
    {
        quote: 'Only put off until tomorrow what you are willing to die having left undone.',
        choice: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo de Vinci', 'Frida Kahlo'],
        answer: 3,
        photo: 'assets/images/picasso.jpg'
    }];
   