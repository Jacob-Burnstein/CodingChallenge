function mulliganProbability(hand) {
  let exchange = "";
  let probability = "";
  // 4-5 card hands that cannot be improved
  if (
    hand === "royal flush" ||
    hand === "straight" ||
    hand === "straight flush" ||
    hand === "full house" ||
    hand === "flush" ||
    // Without knowing the value of the remaining card, it is not suggested to exchange it, because four of a kind is a statistically good hand.
    hand === "four of a kind" ||
    // Without knowing the value of the remaining two cards, it is not suggested to exchange any cards, because three of a kind is a statistically good hand.
    hand === "three of a kind"
  ) {
    exchange = 0;
    probability = "0";
  } else if (hand === "two pair") {
    exchange = 1;
    // Reduced from 4 potential options out of 48 remaining cards
    probability = "8.33";
  } else if (hand === "pair") {
    exchange = 3;
    probability = "6";
  } else if (hand === "four sequence") {
    exchange = 1;
    // Reduced from 8 potential options out of 48 remaining cards
    probability = "16.67";
  } else if (hand === "four suit") {
    exchange = 1;
    // Reduced from 9 remaining suits of 48 remaining cards
    probability = "18.75";
  } else if (hand === "sequence") {
    exchange = 2;
    // 8/49 options * 7/48 options
    probability = "2.38";
  } else if (hand === "suit") {
    exchange = 2;
    // 10/49 options * 9/48 options
    probability = "3.83";
  } else if (hand === "nada") {
    exchange = 5;
    // Averaged statistical likelihood to get a pair from a 5 card draw, from ChatGBT and Gemini
    probability = "46.50";
  } else
    return "Please make sure the type of hand you enter is present in the list";
  // Ultimately, any cards with higher values with those exchanged will technically lead to a better hand, which is why I've included 'minimum' in this return statement.
  // With an initial hand without a pair or better, it could also be argued that if one were not competing, and only trying to improve one's own hand, one should exchange all cards for a greater chance of getting a pair, versus risking going for a straight or a flush.
  return `With an intial draw of: ${hand}, you should exhange ${exchange} card(s) with a minimum ${probability}% probability of improving your hand.`;
}

export default mulliganProbability;
