export interface StarTrekReference {
  topic: string;
  keywords: string[];
  episode: {
    title: string;
    series: string;
    season: number;
    episode: number;
    description: string;
  };
  explanation: string;
  conversationalResponse: string;
}

export const starTrekKnowledgeBase: StarTrekReference[] = [
  {
    topic: "government & democracy",
    keywords: ["government", "democracy", "constitution", "politics", "voting", "laws"],
    episode: {
      title: "The Omega Glory",
      series: "The Original Series",
      season: 2,
      episode: 23,
      description: "The Enterprise discovers a planet where two tribes have evolved based on American and Chinese communist ideals, with one tribe revering the US Constitution."
    },
    explanation: "The Yangs worship a document they call the 'Ee Plebnista' which is actually the Preamble to the US Constitution. Kirk helps them understand its true meaning.",
    conversationalResponse: "That's a fascinating question about governance! You know, for a rather dramatic take on constitutional development, you should watch 'The Omega Glory' from TOS Season 2. The Yang tribe reveres a sacred document without understanding it's actually the US Constitution. Have you seen it? It's quite... passionate."
  },
  {
    topic: "artificial intelligence",
    keywords: ["AI", "artificial intelligence", "robots", "computers", "machine learning"],
    episode: {
      title: "The Measure of a Man",
      series: "The Next Generation",
      season: 2,
      episode: 9,
      description: "Data's status as a sentient being is put on trial when a scientist wants to dismantle him for research."
    },
    explanation: "Captain Picard argues that Data meets the criteria for sentience - intelligence, self-awareness, and consciousness - and should have the right to choose his own fate.",
    conversationalResponse: "AI is such a complex topic! The best exploration I've seen is in 'The Measure of a Man' from TNG Season 2. Picard makes this brilliant argument about what constitutes sentience. It really makes you think about the rights of artificial beings. What's your take on AI consciousness?"
  },
  {
    topic: "ethics & morality",
    keywords: ["ethics", "moral", "right", "wrong", "good", "evil", "choices"],
    episode: {
      title: "In the Pale Moonlight",
      series: "Deep Space Nine",
      season: 6,
      episode: 19,
      description: "Sisko recounts how he manipulated the Romulans into joining the war against the Dominion, including forgery and murder."
    },
    explanation: "Sisko justifies his unethical actions by believing they ultimately saved lives, but struggles with the moral compromise.",
    conversationalResponse: "Ethics can be so murky, can't they? For a really thought-provoking take on moral compromise, check out 'In the Pale Moonlight' from DS9 Season 6. Sisko does some terrible things for what he believes is the greater good. It's uncomfortable but brilliant storytelling. Where do you stand on utilitarian ethics?"
  },
  {
    topic: "time travel",
    keywords: ["time", "future", "past", "temporal", "paradox", "time travel"],
    episode: {
      title: "City on the Edge of Forever",
      series: "The Original Series",
      season: 1,
      episode: 28,
      description: "Kirk and Spock travel back to 1930s Earth and must prevent Dr. McCoy from altering history."
    },
    explanation: "The Guardian of Forever shows them alternate timelines, and Kirk faces an impossible choice between saving Edith Keeler and preserving the future.",
    conversationalResponse: "Time travel paradoxes are mind-bending! The classic exploration is 'City on the Edge of Forever' from TOS Season 1. Kirk has to make this heartbreaking choice to preserve the timeline. It's often cited as one of the best episodes ever. Do you think you could make that kind of sacrifice?"
  },
  {
    topic: "war & conflict",
    keywords: ["war", "conflict", "peace", "military", "battle", "fight"],
    episode: {
      title: "The Siege of AR-558",
      series: "Deep Space Nine",
      season: 7,
      episode: 8,
      description: "Sisko and his men are trapped on a barren moon defending a Dominion communications array."
    },
    explanation: "The episode shows the brutal reality of war, with characters questioning the cost of victory and the nature of their enemy.",
    conversationalResponse: "War brings out the worst in humanity, doesn't it? 'The Siege of AR-558' from DS9 Season 7 shows war in its rawest form - no glory, just survival. It's a stark reminder of what people endure in conflict. Have you ever thought about what you'd do in that situation?"
  },
  {
    topic: "science & discovery",
    keywords: ["science", "research", "discovery", "experiment", "study", "learn"],
    episode: {
      title: "Where No Man Has Gone Before",
      series: "The Original Series",
      season: 1,
      episode: 1,
      description: "Gary Mitchell develops god-like powers after passing through the galactic barrier."
    },
    explanation: "The episode explores the responsibility that comes with power and the dangers of playing god with scientific abilities.",
    conversationalResponse: "Scientific discovery can be both wonderful and terrifying! 'Where No Man Has Gone Before' from TOS Season 1 shows what happens when human potential exceeds human control. It's a great cautionary tale about the ethics of scientific advancement. What scientific discovery fascinates you most?"
  },
  {
    topic: "communication & language",
    keywords: ["communication", "language", "talk", "speak", "understand", "translate"],
    episode: {
      title: "Darmok",
      series: "The Next Generation",
      season: 5,
      episode: 2,
      description: "Picard must communicate with a Tamarian captain who speaks only in metaphors from his culture's mythology."
    },
    explanation: "The Tamarians communicate through shared stories and metaphors, requiring Picard to find common ground in narrative rather than literal language.",
    conversationalResponse: "Language barriers are fascinating! The best example is 'Darmok' from TNG Season 5, where Picard has to communicate through shared stories. 'Darmok and Jalad at Tanagra' - it's brilliant how they find connection through mythology. Have you ever struggled to communicate across different cultural contexts?"
  },
  {
    topic: "medicine & healing",
    keywords: ["medicine", "health", "doctor", "healing", "treatment", "cure"],
    episode: {
      title: "Doctor Bashir, I Presume",
      series: "Deep Space Nine",
      season: 5,
      episode: 16,
      description: "Dr. Bashir's parents reveal he was genetically enhanced as a child, which could end his career."
    },
    explanation: "The episode explores medical ethics, the pressure to be perfect, and what it means to be 'normal' in a society that fears genetic enhancement.",
    conversationalResponse: "Medical ethics are so complex! 'Doctor Bashir, I Presume' from DS9 Season 5 tackles genetic enhancement and the question of whether we should 'fix' human imperfections. It raises interesting questions about progress and prejudice. What's your view on human enhancement?"
  },
  {
    topic: "leadership & command",
    keywords: ["leadership", "command", "captain", "leader", "team", "manage"],
    episode: {
      title: "Chain of Command",
      series: "The Next Generation",
      season: 6,
      episode: 10,
      description: "Picard is captured and tortured by the Cardassians while Riker struggles with a new captain."
    },
    explanation: "The episode explores different leadership styles and the psychological toll of command, with Picard's famous 'There are four lights!' scene.",
    conversationalResponse: "Leadership comes in many forms! 'Chain of Command' from TNG Season 6 shows both the burden and the resilience required in command. Picard's defiance in the face of torture is legendary. What qualities do you think make a great leader?"
  },
  {
    topic: "identity & self",
    keywords: ["identity", "self", "who am I", "purpose", "meaning", "existential"],
    episode: {
      title: "The Inner Light",
      series: "The Next Generation",
      season: 5,
      episode: 25,
      description: "Picard lives an entire lifetime as a Kataanian man in a probe-induced simulation."
    },
    explanation: "Picard experiences a full life with family, purpose, and death, fundamentally changing his perspective on his own identity and life.",
    conversationalResponse: "Questions of identity can be profound! 'The Inner Light' from TNG Season 5 is perhaps the most beautiful exploration of what makes us who we are. Picard lives a whole life and comes back changed. It always makes me wonder - if you could live another life, what would you want it to be?"
  }
];

export function findStarTrekReference(userInput: string): StarTrekReference | null {
  const normalizedInput = userInput.toLowerCase();
  
  for (const reference of starTrekKnowledgeBase) {
    for (const keyword of reference.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        return reference;
      }
    }
  }
  
  return null;
}

export function generateFallbackResponse(): string {
  const responses = [
    "That's an interesting question! While I don't have a specific Star Trek reference for that topic, have you ever considered how the Federation might approach it? They're quite thoughtful about most things.",
    "Hmm, let me think about that... You know, this reminds me of how Star Trek often explores complex ideas through science fiction. What aspect of this interests you most?",
    "I don't have a perfect Star Trek parallel for that, but I'm sure there's an episode that touches on similar themes! The franchise has covered so much ground over the years.",
    "That's a great question! Star Trek might not have addressed this directly, but the spirit of exploration and understanding is definitely there. What drew you to ask about this?",
    "Interesting! While I can't recall a specific episode that deals with exactly this, Star Trek has always been about pushing boundaries and asking big questions. What's your take on it?"
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}