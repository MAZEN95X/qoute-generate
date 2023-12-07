var qoute = document.getElementById("qoute");
var author = document.getElementById("author");
var qouteList = [
  {
    author: "-- Oscar Wilde",
    qoute: "“Be yourself; everyone else is already taken.”",
  },
  { author: "-- Frank Zappa", qoute: "“So many books, so little time.”" },
  {
    author: "-- Marcus Tullius Cicero",
    qoute: "“A room without books is like a body without a soul.”",
  },
  {
    author: "-- Mae West",
    qoute: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    author: "-- Mark Twain",
    qoute: "“If you tell the truth, you don't have to remember anything”",
  },
  {
    author: "-- Oscar Wilde",
    qoute:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
  },
  {
    author: "-- Andre Gide, Autumn Leaves",
    qoute:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
  },
  {
    author: "-- Albert Einstein",
    qoute:
      "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",
  },
  {
    author: "-- Oscar Wilde, Lady Windermere's Fan",
    qoute:
      "“We are all in the gutter, but some of us are looking at the stars.”",
  },
  {
    author: "-- mazen mohamed",
    qoute: "“I have not failed. I've just found 10,000 ways that won't work.”",
  },
  {
    qoute:
      "“Be careful about reading health books. Some fine day you'll die of a misprint.”",
    author: "-- Markus Herz",
  },
  {
    author: "-- Mahatma Gandhi",
    qoute: "“An eye for an eye will only make the whole world blind.”",
  },
  {
    author: "-- Marilyn Monroe",
    qoute: "“If you're gonna be two-faced at least make one of them pretty.”",
  },
  {
    author: "-- Charles Bukowski, Barfly",
    qoute: `“Do you hate people?”
<br>
    “I don't hate them...I just feel better when they're not around.”`,
  },
  {
    author: "-- Rick Riordan, The Last Olympian",
    qoute:
      "“With great power... comes great need to take a nap. Wake me up later.”",
  },
  {
    author: "-- George Orwell",
    qoute:
      "“Who controls the past controls the future. Who controls the present controls the past.”",
  },
];
var check = 0;

function generateqoute() {
  var random;
  do {
    random = Math.floor(Math.random() * qouteList.length);
  } while (random === check);

  check = random;

  var ele = document.getElementById("read");
  ele.style.backgroundColor = "#293448";
  ele.style.color = "white";
  ele.style.borderRadius = "10px";
  ele.style.padding = "30px";
  document.getElementById("qoute").innerHTML = qouteList[random].qoute;
  document.getElementById("author").innerHTML = qouteList[random].author;
}
