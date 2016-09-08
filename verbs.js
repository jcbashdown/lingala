'use strict'

const verbs = [
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bakisa", "english": "to add"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bala", "english": "to marry"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko balusa", "english": "to turn"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bamba", "english": "to repair"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko banda", "english": "to start, to begin"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko banga", "english": "to be afraid of, to have fear"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko basana", "english": "to forget"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bebisa", "english": "to ruin"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bela", "english": "to be sick, to be cooked"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko benda", "english": "to pull"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko benga", "english": "to call"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko beta", "english": "to hit, to beat, to punch"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bete", "english": "to swim"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bika", "english": "to get well"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bikisa", "english": "to rescue"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bima", "english": "to leave (people, actions), to go out"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bimbisa", "english": "to put something out"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bola", "english": "to knock"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko boma", "english": "to kill"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bomba", "english": "to hide"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bonga", "english": "to fit, to pour (liquid)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bongola", "english": "to transform"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bota", "english": "to give birth"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko botola", "english": "to confiscate"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko botoma", "english": "to be born"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bouler", "english": "to think"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bowa", "english": "to cure"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko boya", "english": "to refuse, to reject"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko buka", "english": "to break"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bunda", "english": "to make war"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bunga", "english": "to be mistaken"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bungisa", "english": "to lose (an object)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bunola", "english": "to reduce (a price)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko bwaka", "english": "to throw"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko defa", "english": "to borrow"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko fanda", "english": "to live, to sit"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko finga", "english": "to insult"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko fotela", "english": "to hire"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko funda", "english": "to accuse"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko fungola", "english": "to open"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko futa", "english": "to pay"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko futela", "english": "to rent"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kaba", "english": "to sharekokakola", "english": "to bargain"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kalinga", "english": "to roast"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kamata", "english": "to take"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kamba", "english": "to lead"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kamola", "english": "to twist"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kanga", "english": "to close, to pack"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kanisa", "english": "to think"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kata", "english": "to cut"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko keba", "english": "to pay attention"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kende", "english": "to go"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kende mobembo", "english": "to take a trip, to holiday"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kima", "english": "to run"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kita", "english": "to descend, to go down"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kitisa", "english": "to put down"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kobombola", "english": "to clean"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko koka", "english": "to be able"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kolola", "english": "to shave"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko koma", "english": "to arrive"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko koma", "english": "to write"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko komba", "english": "to sweep"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kombola", "english": "to sweep"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko komela", "english": "to reach (a place)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kosa", "english": "to deceive"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kosola", "english": "to cough"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kota", "english": "to enter"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kotisa", "english": "to put something inside"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kueya", "english": "to fall"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kufa", "english": "to die"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kumba", "english": "to carry, to transport"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kumisa", "english": "to glorify"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kunda", "english": "to bury"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kundola", "english": "to remember"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kuntana", "english": "to meet"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko kuta", "english": "to find"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko laka", "english": "to promise"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lala", "english": "to sleep"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lamuka", "english": "to wake up"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko landa", "english": "to follow"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko leisa", "english": "to feed"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko leka", "english": "to pass, to go past"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lela", "english": "to cry"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lemba", "english": "to be tired"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lenge", "english": "to shiver"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lia", "english": "to eat"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko likia", "english": "to hopekolimbisa", "english": "to forgive"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko linga", "english": "to like, to want"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lingana", "english": "to love each other"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko lingisa", "english": "to allow"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko loba", "english": "to speak"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko longa", "english": "to win"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko longola", "english": "to remove"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko luka", "english": "to look for, to search"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mata", "english": "to climb"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mata", "english": "to ride"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko meka", "english": "to try"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mela", "english": "to drink, to smoke, to swallow"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mema", "english": "to carry"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mema", "english": "to take, to transport, to import"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mina", "english": "to repent"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko mona", "english": "to see"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko nganga", "english": "to shout"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko noka", "english": "to rain"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pangana", "english": "to worry"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pangusa", "english": "to wipe, to dry, to polish (K)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pasola", "english": "to break"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pema", "english": "to breathe, to rest"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pesa", "english": "to give"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pesika", "english": "to forbid, to prohibit, to ban"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pimbwa", "english": "to jump"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pola", "english": "to lose (in sport)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pola", "english": "to rot (meat)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pona", "english": "to choose"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko ponama", "english": "to elect"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pota", "english": "to run"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pumbwa", "english": "to jump, to fly"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko pusa", "english": "to push, to ride"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sala", "english": "to work, to make"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sambela", "english": "to pray"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sana", "english": "to play"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sanza", "english": "to vomit"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko seka", "english": "to laugh"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko seka moke", "english": "to smile"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko selela", "english": "to use, to employ (an object)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko senga", "english": "to ask"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sengela", "english": "to need"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sepela", "english": "to be happy, to be content"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko siba", "english": "to make love"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sila", "english": "to finish (actions, objects)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko silika", "english": "to be angrykosilisa", "english": "to finish"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko simba", "english": "to hold"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sokola", "english": "to wash"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko solola", "english": "to talk, to chat"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko somba", "english": "to buy"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sombitinya", "english": "to exchange"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko sono", "english": "to sew"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko suba", "english": "to pee"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko suka", "english": "to stop, to finish"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko swa", "english": "to bite"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko swanna", "english": "to argue, to quarrel"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tala", "english": "to look at, to watch"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko talisa", "english": "to climb"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tambola", "english": "to walk"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tambuisa", "english": "to drive"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tana", "english": "to polish"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tanga", "english": "to study, to read, to count"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko teka", "english": "to sell"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko telema", "english": "to stand up"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko teme", "english": "to stop"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko teya", "english": "to preach"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tia", "english": "to put"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tika", "english": "to leave (an object)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tikala", "english": "to stay, to remain"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tinda", "english": "to send"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko toboka", "english": "to have a hole (in a pipe)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tombela", "english": "to wish"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tondisa", "english": "to fill"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tuba tonga", "english": "to inject (medicine)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tumba", "english": "to burn (controlled)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tumbula", "english": "to joke"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko tuna", "english": "to ask a question"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko violer", "english": "to rape"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko wuta", "english": "to come (from), to be from"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko ya", "english": "to come (to)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yamba", "english": "to receive (a person, etc.)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yanola", "english": "to reply, to answer"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yeba", "english": "to know"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yebisa", "english": "to say"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yekola", "english": "to learn"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yemba", "english": "to sing"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yiba", "english": "to steal"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yina", "english": "to hate"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yoka", "english": "to feel"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko yoka", "english": "to listenkozala", "english": "to be"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zala na", "english": "to have"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zanga", "english": "to miss"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zela", "english": "to wait"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko ziba", "english": "to wrap"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zikisa", "english": "to burn (uncontrolled)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zoka", "english": "to hurt"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zonga", "english": "to return (from), to come back"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zongisa", "english": "to return, to give back"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zua", "english": "to take, to receive (an object)"},
  {"correctNumber": 0, "incorrectNumber": 0, "lingala": "ko zua mokamo", "english": "to take a decision"}
]

const pronouns = [
  {"lingala": "Na", "english": "I"}, 
  {"lingala": "O", "english": "You"}, 
  {"lingala": "A", "english": "He/She"}, 
  {"lingala": "To", "english": "We"}, 
  {"lingala": "Bo", "english": "You (plural)"}, 
  {"lingala": "Ba", "english": "They"}, 
  {"lingala": "E", "english": "It"}
]

//the following conjugation generation is only very rough! take it with a pinch of salt
const generatedPresentVerbs = verbs.reduce((presentVerbs, item) => {
  let positivePresentVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + item["lingala"].slice(2, -1) + "i (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, present"
    }
  });
  let negativePresentVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + item["lingala"].slice(2, -1) + "i te (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, present, negated form"
    }
  });
  presentVerbs = presentVerbs.concat(positivePresentVerbs).concat(negativePresentVerbs);
  return presentVerbs;
}, [])

const generatedPastVerbs = verbs.reduce((pastVerbs, item) => {
  let positivePastVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + item["lingala"].slice(2) + "ki (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, past"
    }
  });
  let negativePastVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + item["lingala"].slice(2) + "ki te (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, past, negated form"
    }
  });
  pastVerbs = pastVerbs.concat(positivePastVerbs).concat(negativePastVerbs);
  return pastVerbs;
}, [])

const generatedFutureVerbs = verbs.reduce((futureVerbs, item) => {
  let positiveFutureVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + " " + item["lingala"] + " (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, future"
    }
  });
  let negativeFutureVerbs = pronouns.map((pronoun) => {
    return {
      "correctNumber": 0, 
      "incorrectNumber": 0, 
      "lingala": pronoun["lingala"] + " " + item["lingala"] + " te (auto generated - may be incorrect)", 
      "english": item["english"] + ", " + pronoun["english"] + " form, future, negated form"
    }
  });
  futureVerbs = futureVerbs.concat(positiveFutureVerbs).concat(negativeFutureVerbs);
  return futureVerbs;
}, [])

const allVerbs = verbs.concat(generatedPresentVerbs).concat(generatedPastVerbs).concat(generatedFutureVerbs);

var fs = require('fs');
fs.writeFile("verbsDictionary.js", "module.exports = " + JSON.stringify(allVerbs), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

module.exports = allVerbs;
