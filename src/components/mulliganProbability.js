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
    probability = "0:1";
  } else if (hand === "two pair") {
    exchange = 1;
    // 4 potential options out of 49 remaining cards
    probability = "4:49";
  } else if (hand === "pair") {
    exchange = 3;
    probability = "3:50";
  } else if (hand === "four sequence") {
    exchange = 1;
    probability = "8:51";
  } else if (hand === "four suit") {
    exchange = 1;
    // Reduced from 9 remaining suits of 51 remaining cards
    probability = "3:17";
  } else if (hand === "sequence") {
    exchange = 2;
    // 8/50 * 8/49
    probability = "261:10000";
  } else if (hand === "suit") {
    exchange = 2;
    // 10/50 * 9/49
    probability = "367:1000";
  } else if (hand === "nada") {
    exchange = 5;
    // Statistical likelihood to get a pair from a 5 card draw
    probability = "49:83";
  } else
    return "Please make sure the type of hand you enter is present in the list";
  // Ultimately, any cards with higher values with those exchanged will technically lead to a better hand, which is why I've included 'minimum' in this return statement.
  return `With an intial draw of: ${hand}, you should exhange ${exchange} cards with a minimum ${probability} probability of improving your hand.`;
}

export default mulliganProbability;
