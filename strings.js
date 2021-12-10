let zodiacDateRange = {
  "Dec 22 - Jan 19" : "December 22 - January 19",
  "Jan 20 - Feb 18" : "January 20 - February 18",
  "Feb 19 - Mar 20" : "February 19 - March 20",
  "Mar 21 - Apr 19" : "March 21 - April 19",
  "Apr 20 - May 20" : "April 20 - May 20",
  "May 21 - Jun 21" : "May 21 - June 21",
  "Jun 22 - Jul 22" : "June 22 - July 22",
  "Jul 23 - Aug 22" : "July 23 - August 22",
  "Aug 23 - Sep 23" : "August 23 - September 23",
  "Sep 23 - Oct 23" : "September 23 - October 23",
  "Oct 24 - Nov 21" : "October 24 - November 21",
  "Nov 22 - Dec 21" : "November 22 - December 21"
};

let zodiacSigns = {
  "Dec 22 - Jan 19" : "Capricorn",
  "Jan 20 - Feb 18" : "Aquarius",
  "Feb 19 - Mar 20" : "Pisces",
  "Mar 21 - Apr 19" : "Aries",
  "Apr 20 - May 20" : "Taurus",
  "May 21 - Jun 21" : "Gemini",
  "Jun 22 - Jul 22" : "Cancer",
  "Jul 23 - Aug 22" : "Leo",
  "Aug 23 - Sep 23" : "Virgo",
  "Sep 23 - Oct 23" : "Libra",
  "Oct 24 - Nov 21" : "Scorpius",
  "Nov 22 - Dec 21" : "Sagittarius"
}

let zodiacAnimals = [
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Sheep"
];

let zodiacSignsQualities = {
  "Capricorn" : "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to \
                the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, \
                is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns \
                are skilled at navigating both the material and emotional realms. Persistency and loyalty are the key attributes that make a \
                Capricorn distinct from everyone else. They are impulsive but disciplined individuals who always take their responsibilities \
                head-on. Hence, their partners do not have to worry about anything. They look for partners with the same domestic stability and \
                especially admire someone who is diligent at their work. They are caring individuals and that’s all that matters!",
  "Aquarius" : "Despite the \"aqua\" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly \
                revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. \
                Accordingly, Aquarius is the most humanitarian astrological sign. There is no fake side to an Aquarius. They are friendly and kind \
                people who do not want to hurt anyone. They are hardworking and are focused on reaching their goals. Self-love is the biggest \
                attribute of this sun sign, and it is their inner beauty that makes everyone fall in love with them. They are headstrong individuals \
                and want a partner who admires and supports that.",
  "Pisces" : "If you looked up the word \"psychic\" in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most \
              intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, \
              Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized \
              by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. They are \
              compassionate people who dream big in life. It is due to their empathetic and loyal attitude that people love them, and their partners \
              can easily share their feelings without the fear of being judged. They are honest and believe in having transparency in their relationship. \
              Pisces value people’s efficiency and encourage their partners to be organized in their lives.",
  "Aries" : "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and \
             ambitious, Aries dives headfirst into even the most challenging situations—and they\'ll make sure they always come out on top! \
             People born under this sun sign are naturally attractive owing to their extremely confident and positive attitude towards life. \
             They like to stay honest and upfront, and this is what clearly defines their loyalty to their partner. They have a vibrant personality \
             which is addictive, and people love to be around them. Hence, as a partner, one always has a good time with them. They are keepers as \
             they stand by people's tough times, all the way staying honest which is why people easily fall in love with them.",
  "Taurus" : "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, \
              of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, \
              bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. The people born in this sun sign are adorable \
              with a quick decision-making insight. They are loyal and stable individuals which is why their partners will always feel secure with them. \
              Their best attribute is that they stick with their loved ones through thick and thin. They are ruled by the planet Venus and hence have \
              high sensuality and attractiveness. People of this sun sign prefer to be with like-minded people who are both loyal and interesting. \
              Therefore, their relationships are valued and are long-term.",
  "Gemini" : "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a \
              nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the \
              celestial twins, this air sign was interested in so many pursuits that it had to double itself. Gemini enjoys being social and has a \
              huge friend\'s circle. It is their outgoing nature and happy attitude that makes them great at flirting. Also, it is not hard for them \
              to find their perfect match due to a clear vision and charismatic personality. Owing to their personality, they prefer people that \
              resonate with the same attitude and want to be in a social circle that is always high on life. They are romantic partners and never \
              miss a chance to surprise their bae. They are free souls and do not like controlling partners which restrict them. Rather, they would \
              always want someone who admires their true self.",
  "Cancer" :  "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional \
               and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the \
               hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know \
               this sign, you\'re going to need to establish trust! This is a highly emotional sign with a sensitive and loyal attitude which makes \
               it very much clear that they need an extremely sensitive and caring partner. They do not like being judged for their emotions and hence \
               need someone who cuddles them and does not force them to be someone else. People born under this sign are not party animals and prefer \
               to spend time with their special ones in a secluded place like home or at a personal dinner table. They are not very trusting people \
               and hence take time to be comfortable with anyone new. But once they do, they prefer having long-term relationships with a strong \
               emotional connection.",
  "Leo" : "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these \
           spirited fire signs are the kings and queens of the celestial jungle. They\'re delighted to embrace their royal status: Vivacious, \
           theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves. They have an attention-seeking trait and \
           hence wants excess admiration and attention from their partner. They are ethical people who do not compromise on their life principles. \
           Good at pampering their partners, they can turn a bad day into good with their efforts. They carry a “cool” demeanour, as it is who they \
           are, making them stand out from others. They are ruled by the Sun and hence are warm and loving. They are born leaders with all necessary \
           traits to carry out operations with great effect and outcomes. They are self-affirming individuals with a strong sense of their self-worth.",
  "Virgo" : "You know the expression, \"if you want something done, give it to a busy person?\" Well, that definitely is the Virgo anthem. \
             Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the \
             goddess of wheat and agriculture, an association that speaks to Virgo\'s deep-rooted presence in the material world. This earth sign \
             is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. They are loyal and trustworthy \
             people. They have an analytical attitude and often turn critics to even the smallest of things. They have a conservative nature and \
             hence people find them highly attractive. The reason that people love to connect with them is their excessively caring attitude and \
             their unending kindness which is admired by all. They are perfectionists and want to grow up becoming the best version of themselves.",
  "Libra" : "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the \
             only inanimate object of the zodiac), an association that reflects Libra\'s fixation on establishing equilibrium. Libra is obsessed \
             with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart. Equilibrium \
             is the key to the life of a Libra. They seek stability and love in their relationship and are always willing to give the benefit of \
             the doubt. This is why they do not easily give up on their relationships. They are calm individuals and do not like to be a part of an \
             argument. Their biggest quality is that they are calm-headed and hence you cannot easily have a fight with them. People born in this sun \
             sign are highly intellectual and liberal. They have an artistic self to themselves and love spending time in nature and peace.",
  "Scorpio" : "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional \
               energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary \
               courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac. They are \
               discreet individuals and have a side to themselves that they prefer not to share with anyone. They are private people and do not like \
               sharing their views with just about anyone. It is not very easy to know their feelings and hence their partners have to be very sensitive \
               and understanding towards them. Their me-time is extremely important for them and so they would only be with people who respect that. \
               They are caring people with an introverted side to them which must be respected by their partners. Tough on the outside but are very \
               soft-hearted otherwise which is what makes them unique and loved.",
  "Sagittarius" : "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are \
                   always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, \
                   chasing after geographical, intellectual, and spiritual adventures. Sagittarius is always known to be an adventurous individual \
                   and hence dating them is always fun. Their energies are always high, and they carry a flair of wit and humour making them the \
                   centre of attraction. They are strong-headed, versatile and amusing which is why they bring in something new every day in their \
                   relationship which is cherished and loved by their partner. They are honest people who can go that extra mile for their loved ones."
};

let zodiacAnimalsQualities = {
  "Monkey" : "For all the hilarity this Chinese zodiac animal can bring into the lives of others, they should never be mistaken for being a fool. \
              The Chinese Monkey is supra-intelligent and capable of immense periods of incredible focus. Chinese Zodiac Monkeys thrive on \
              competition, taking as much delight in their own impressive skills and abilities as they do in life itself. Their confidence is \
              so strongly developed that even if someone verbally attacks them it simply goes in one ear and out the other. In this, though, the \
              Chinese Monkey has the uncanny ability to truly see what about their thoughts, words and deeds needs to be improved and they will \
              move heaven and earth to do so. Of all the Chinese zodiac signs, it is the Monkey who most desires to enhance his or her “self”. In the \
              12 Chinese animals it is The Monkey which makes the best business people. They exhibit true genius and woe is any other Chinese \
              zodiac sign who tries to best The Monkey. Monkeys are so clever and intuitive that they will see and act on an opportunity before \
              others have even had time to blink. Because of this and their considerable ego, the Chinese Monkey spends their entire lives being \
              misjudged as untrustworthy and are plagued by the jealous actions of others. At their worst, these Chinese animals can be ego-maniacal \
              in the extreme. They believe they deserve more than others because they’re smarter, funnier and quicker. On the rare occasion a Chinese \
              Monkey is backed into a losing proposition, whether it be business or personal, they will resort to unethical if not illegal means as \
              long as they can extract themselves from the situation.",
  "Rooster" : "Resourceful, competent, and driven, this Chinese zodiac animal will find success very early in life! In Chinese symbols it is the \
               Rooster which represents the need to be mindful of ego yet conversely shed any fears surrounding ‘strutting your stuff’. It is \
               not uncommon that a Chinese Rooster is a self-made millionaire. They are a bit OCD in their pursuits as their version of perfection \
               is a state they will work tirelessly to achieve. To that end, the Rooster is organized, precise and direct. Because receiving attention \
               is important to the Chinese Rooster, they walk, talk, dress and decorate their surroundings flamboyantly so they may be sure to \
               get noticed. On the flip side of this, the Chinese Rooster is always attentive to those in need and they have an earnest desire \
               to help all who need a hand up. Lovers of knowledge and great storytellers, the Chinese Rooster will show greater than average \
               aptitude for writing and public speaking. At their worst, Chinese Roosters can be egomaniacs who have little or no regard for the \
               feelings of others. Though they can and will be very verbal in their criticism of others, the Chinese Rooster refuses to see and \
               acknowledge their own shortcomings. Because of their monstrous ego, it appears that the Chinese Rooster is supremely confident. \
               However, that is not true and this Chinese zodiac animal needs constant reassurance and stroking.",
  "Dog" : "Of the Chinese animals only The Dog has an uncanny ability to sense danger. They will, almost instantly, decide whether a person \
           is “friend” or “foe” and a situation or place is “good” or “bad” because, to this Chinese zodiac sign, there is no gray area. \
           Ironically, their observations are usually spot on. With the Chinese Dog, what you see is what you get. They are transparent \
           personalities who do not put on airs. They are warm, intelligent and generous. There is little more a Chinese Dog hates than \
           cowardice, disloyalty and injustice. They believe everyone should be as responsible and honest as they are. Because of their \
           inherent sense of duty, the Chinese Zodiac Dog often finds themselves in leadership roles even when they haven’t consciously \
           pursued such a position. The Chinese Dog is fairly pessimistic and can also be prone to a bit of paranoia. Perhaps because they \
           are always standing guard over their friends and family, they tend to expect trouble and, so, are constantly worried. In relationships \
           of any kind, it can seem like the Chinese Dog is coming on too strong or is a nibby-nose because of the constant attention they give \
           friends and family. Of the Chinese Zodiac animals, it is The Dog which can be the most argumentative and, though they will rarely \
           pick a fight, they will rarely back away from a fight when backed into corner. Also, if hurt, they will fiercely attack and no quarter \
           will be given the unfortunate soul who wronged them.",
  "Pig" : "Of the Chinese Zodiac animals, the Pig is one of the most committed to peacemaking. But do not be fooled into thinking the Chinese \
           Pig is weak because of their pacifistic ways. Physically, they are generally extremely strong; possessing great courage and stamina. \
           Once the Pig begins a relationship, project, etc. they will persevere for however long it takes to see the situation through to \
           whatever conclusion there will be. Being surrounded at all times by friends and family is nirvana to the Chinese Pig. They absolutely \
           love to sponsor and attend social events of all kinds. Because of their loyalty and trustworthiness, the Chinese Pig is a much sought \
           after and revered friend. In some ways, the Pig has earned its reputation for gluttony. Their voracious appetite for the hedonistic \
           pleasures this world offers can cause the Chinese Pig to engage in a lifestyle of fast living. So much so that they can easily slip \
           into a world of depravity; losing all touch with reality. Honest to a fault, the Chinese Pig is also a natural innocent and, so, can \
           easily be taken advantage of by the unscrupulous. Though quick tempered, the Pig will generally give in to an opponent. However, even \
           they can be pushed too far and when that happens, the Chinese Pig is as ferocious and savage a warrior as the legendary Chinese Tiger.",
  "Rat" : "This Chinese animals is usually very social people with charming personalities. The Chinese Zodiac Rat communicates in an honest \
           and straightforward manner. Making great detectives, the Chinese Rat has almost x-ray vision in their ability to see details even the \
           most discerning person would miss. Those born in the Year of the Rat seem to have a heightened sense of awareness as it pertains to \
           danger. Thus, making it easy for this zodiac sign to escape harm in business, relationships, and life in general. Rats also have amazing \
           memories. Though the Chinese Rat is excellent at keeping their owns secrets, others may not be safe. Though they are honest people, Rats \
           have no qualms about using other’s weaknesses or mistakes to their own advantage and they tend to gather this type of information very \
           easily as they are incredible gossips who are always nibby-nosing in other people’s business. Easily agitated, they are fueled by nervous \
           energy. Rats can be tightwad and their biggest downfall may be that they are extremely greedy; tending to want too much far too soon.",
  "Ox" : "Those born in the Year of the Ox are calm and methodical. The Chinese Ox is traditional & fairly conservative. Even if their forward \
          progress is in tiny increments to the Chinese Ox it still means forward movement and that’s OK with them. Independent almost to a fault, \
          the Chinese Ox is revered for their high moral character. Whatever they build (families, businesses, homes, etc.), it is built to \
          last forever. Words are used sparingly by the Ox but they mean what they say and they say what they mean. Of the Chinese animals, \
          it is The Ox which is renown for their extraordinary memory. It is photographic and lasts forever. Whether man or woman, the Chinese \
          Ox rules their household with the proverbial iron fist and, so, can be intolerant. Stubborn in the extreme the Ox can also be very \
          biased. Because they abhor weakness of any kind, the Ox can, at its most negative, be totally devoid of compassion. Further, they are \
          slow to anger but when an Ox blows, run! If wounded in any kind of relationship, the Ox can fall into a deep depression that can last \
          for many years.",
  "Tiger" : "Chinese Zodiac Tigers are pleasure seekers who love anything that boosts their adrenaline and stimulates their vast and incredibly \
             active imagination! Those born in the Year of the Tiger seem to have an endless supply of energy and, so, are always on the move. With an \
             unparalleled enthusiasm for life, typically, Tigers will have a great sense of humor and natural inclination to be quite affectionate. On \
             the flip side, they thrive on and crave attention and go to great lengths to be the center of it (which can be both a positive and \
             a negative). However, these Chinese animals are very generous and benevolent humanitarians. They generously and willingly share every \
             dime of their money because the security that comes with having wealth means very little to them. The two biggest challenges a Chinese \
             Tiger contends with (as do those they interact with), is that they are reckless and impulsive yet they are also very indecisive, due to \
             their suspicious natures. Their monstrous egos need constant feeding and the tiniest of slights (or what they interpret to be a \
             slight) can utterly deflate them and send the Chinese Tiger into a blind rage. The lengths they will go to when exacting revenge against \
             those who have betrayed them is legendary. Sooooo, remember that the next time you want to tangle with a Tiger.",
  "Rabbit" : "Rabbits rarely let anything standing in their way. They are agile thinkers and movers who will find their way over, around or \
              under any of life’s roadblocks. If anything or anyone does, perchance, defeat them, the resilient Rabbit will bounce back almost \
              immediately. Chinese Rabbits are associated with the moon from where, it is said, that they gather all their special qualities. \
              Non-judgmental, sympathetic (even eerily empathetic) and open-minded, Rabbits seem to draw a crowd of followers wherever they go, \
              many of whom are seeking the sage advice only the Chinese Rabbit can offer. This Chinese zodiac animal is a seeker of peace and \
              detail oriented in the extreme. They will do everything in their power to avoid conflict and will leave not even the tiniest \
              element of a project unfinished once begun. While those born in the Year of the Rabbit makes good friends, they will not be willing \
              to “go the distance with you”. And don’t let their sweet, gentle demeanor fool you. They are laser sharp business people who have a \
              steel will when it comes to getting what they want. The Chinese Rabbit is renowned for their charming and gracious manner. On the \
              flip side, they are self-centered people who will immediately eliminate anything or anyone that demands too much of them and their \
              perception what is “too much” has a very low threshold. When interacting with an arch enemy, the Chinese Zodiac Rabbit will be \
              convincingly polite. Inside, however, they are hatching a plan to destroy their nemesis in the most malicious means possible.",
  "Dragon" : "The Chinese Dragon personality exudes majesty and nobility no matter his/her background. One of the most archetypal Chinese \
              symbols, Dragons are the guardians of wealth and power which is why the Emperor of China uses the Dragon as symbolic of his \
              imperial power. Chinese Dragon symbolism tells of the Dragon’s control over all water (floods, hurricanes, rain, etc.). Larger \
              than life, the Chinese Zodiac Dragon has the courage, confidence and capacity to achieve legendary successes. The Chinese horoscope \
              chart for this zodiac sign usually promises a rich and full life filled with many an adventure!",
  "Snake" : "The Snake is one of the most prominent Chinese Symbols as they represent ancient and primordial wisdom. Like the Chinese zodiac sign \
             of the Dragon, it is said the Chinese Snake’s very existence is purely karmic and they’ve arrived in the Year of the Snake for \
             the express purposes of settling debts (whether they owe or are owed). The Chinese Snake’s emotions seem to run so deep, others \
             can easily get a sense that if they become entangled with a Snake, they could get lost forever. Further, not only is this Chinese \
             zodiac sign the deepest of thinkers, they are constantly thinking, calculating and plotting (which can be positive or negative). But \
             they rarely will share their thoughts because, to a Chinese Snake, people are to be mistrusted until proven otherwise. And good luck \
             trying to guess a Snake’s next move! Of the Chinese animals, it is The Snake which usually possesses a great sense of humor. The Chinese \
             Snake is reliable, loyal to the death (as long as they are not betrayed), terrific at making and keeping money and a rock during a \
             catastrophe. Should complete devastation occur, the Chinese Zodiac Snake will, in a most miraculous fashion, “shed their skin” and \
             materialize out of the rubble more resplendent than ever before. The Chinese horoscope chart for this zodiac sign usually foreshadows \
             a life of constant metamorphosis wherein the soul of this zodiac sign seeks the death of jobs, relationships, etc. so they can be \
             ‘born again’. In Chinese symbolism, The Snake is one of the symbols for death and utter destruction. The Chinese Snake never, ever \
             forgets a slight or betrayal and their perception of true justice can be cruel. If this Chinese zodiac sign chooses to go on the \
             attack, watch out. According to Chinese Astrology, Snakes can be ruthless, relentless and will be so without one shred of remorse \
             because in a Snake’s mind, you deserved 'it’.",
  "Horse" : "Agile of mind and body, this Chinese zodiac sign is extremely athletic and loves a good race or sports oriented challenge. Because \
             of their quick-wittedness, the Chinese Horse is always evolving at a rapid pace because they learn new skills easily and at an \
             accelerated rate. This innate personality trait makes them excellent business people who are astounding multi-taskers; able to take \
             on an amazing volume of tasks and complete them with equally amazing accuracy. Further, they can easily acquire wealth but not necessarily \
             keep it because they are always changing their minds and strategies. The Chinese Horse personality is warm and engaging but fickle \
             so do not count on them stay in your life for the long term. However they are trustworthy and can be confided in. Vanity and volatile \
             tempers cause the Chinese Horse to throw titanic tantrums. Perhaps because of the frequency with which they occur, the respect \
             of others is an elusive thing for this Chinese zodiac sign. The Chinese horoscope chart for this zodiac sign usually foreshadows a \
             life filled with many arguments if not fights. The Chinese Horse ‘sweats the small stuff’ and, though open-minded, can be \
             small-minded and immature in their dealings with others. Because their focus is so centered on self, the Chinese Horse will have \
             their heads in the clouds which causes them to be maddeningly forgetful and not to be relied on.",
  "Sheep" : "Compassionate, empathetic and extremely generous with both time and money, those born in the Year of the Sheep are a bit of a conundrum \
             in that they should never be underestimated because a tremendous but very quiet strength and resolve lives inside their hearts and \
             souls. Yet, the Chinese Sheep needs the proverbial protective shepherd to watch over them because they are too docile, unassuming \
             and naive to keep themselves out of harm’s way. On the rare occasion a Sheep does recognize danger, they are excellent at evading \
             or appeasing their enemy and/or gathering others to do battle in their stead. Good fortune always seems to land at the feet of this \
             Chinese zodiac animal. Gifts, inheritances, support of all kinds simply ‘appear’ throughout the Sheep’s life. This Chinese zodiac sign \
             is a social creature but does not like to be the center of attention. Sheep prefer to watch from the distant sidelines. Again, a \
             conundrum because the Chinese Sheep crave attention and absolutely blossom when their considerable creative and artistic endeavors \
             are noticed and praised. Yet another conundrum exists inside the angelic Chinese Sheep; they are can be consummate pessimists. No matter \
             that abundance and love is showered upon them simply because they were born in the Year of the Sheep, this Chinese animal can focus on \
             the worst case scenario like no other. Because the Chinese Zodiac Sheep have naturally sophisticated and discriminating tastes, \
             it is easy for them to overspend and live far beyond their means. Finally, the peace-seeking, peace-loving and peace-keeping Sheep \
             will do anything (even if it means out and out lying) to avoid conflict."
};
