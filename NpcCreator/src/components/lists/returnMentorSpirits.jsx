export default function returnMentorSpirits() {
  const mentorSpirits = {
    adversary: {
      description:
        "Wherever there is cosmological order, there is an entity that wishes to overthrow it. The Adversary is the original rebel against the powers that be. Followers of the Adversary have serious issues with authority and conformity. Followers range from those dedicated to helping the underprivileged and abused (by “the man”) to the one who indulges his love of anarchy for its own sake. Free will and cynicism are the Adversary follower’s tools and trade.",
      all: "Demolition",
      magician: "Counterspelling",
      adept: "One free level of Iron Will",
      disadvantages:
        "Because of their deep-seated hatred for authority, a teammate’s use of leadership skill is counterproductive to followers of Adversary, invoking either a negative dice penalty or loss of initiative. If the plan doesn’t go the way that the adversary follower wants it to go, it takes a Charisma + Willpower (3) Test for him to get him to cooperate.",
      name: "Adversary",
      similarArchetypes: "Chaos, Anarchy",
      source: "SR5:HT",
    },
    alligator: {
      description:
        "A follower of the Gator mentor spirit feels at home in cities as well as swamps and rivers. Gator shamans are ill-tempered and lazy, expecting a larger share for the work he does—assuming you can get him to agree to do it. He is also a miser when it comes to having to pay for anything including meals and he’s a real big eater. The virtuous aspects of the gator magician is that he’s a strong fighter and will finish what he agrees to do. They may seem to be motionless, but once roused to action they are ferocious and nearly unstoppable.",
      all: "Intimidation",
      magician: ["Conjuring (spirits of water or man)"],
      adept: "Inertia Strike",
      disadvantages:
        "A follower of the alligator is stubborn in changing plan or action after he has committed to it. When the rest of the team goes to plan B, the magician must succeed in a Charisma + Willpower (3) Test to make the mental adjustment. Otherwise, they continue trying to execute plan A.",
      name: "Alligator",
      similarArchetypes: "Crocodile, Sloth, Greed",
      source: "SR5:HS",
    },
    bear: {
      description:
        "This mentor symbolizes strength and protection. He is a healer and cannot turn down those in need without good reason, and he defends those under his care. Bear is more than a gentle healer; he is a ferocious protector, disregarding his own safety in combat if wounded or if someone he is protecting is injured.",
      all: "Intimidation",
      magician: ["Health spells", "preparations", "health spell rituals"],
      adept: "Rapid Healing",
      disadvantages:
        "You might go berserk when you take Physical damage in combat or if someone under your care is badly injured. Make a Simple Charisma + Willpower Test (wound modifiers apply). You go berserk for 3 turns minus 1 turn per hit, so 3 or more hits averts the berserk rage entirely. If you’re already going berserk, increase the duration. When you’re berserk, you go after your attacker(s) without regard for your own safety. If you incapacitate the target(s) before the time is up, the berserk fury dissipates.",
      name: "Bear",
      similarArchetypes: "Strength, Protection",
      source: "Core",
    },
    berserker: {
      description:
        "Those who follow the path of Berserker love fighting just for the sake of fighting, be it with words, fists, or spells. He is the greatest of all warriors, capable of wading into battle without fear, and he will wage his war singlehandedly if necessary.",
      all: "Spellcasting",
      magician: ["Physical-type Combat spells", "preparations", "rituals"],
      adept: "Mystic Armor and/or Pain Resistance",
      disadvantages:
        "Berserker’s followers have very short fuses. Whenever someone strongly disagrees with you (gamemaster’s discretion), you must pass a Charisma + Willpower (3) Test to keep from striking out against the offender. If the test fails, the attack can be in any form you choose (fist, spell, etc.), but it must have the intent to cause damage.",
      name: "Berserker",
      similarArchetypes: "Warrior, Warmonger",
      source: "SR5:SG",
    },
    bat: {
      description:
        "Bat is well-traveled, rarely staying in one place. As a seeker, she sets far-reaching goals and gets restless when not moving. She is adaptable and can make herself at home anywhere. Magicians following Bat keep things light and portable for traveling.",
      all: "Navigation",
      magician: ["Conjuring"],
      adept: "Motion Sense",
      disadvantages:
        "A follower of Bat is easily distracted and becomes irritable during enforced inaction. She prefers spontaneity to routine. Every week that the magician stays in the same place, she takes a -1 penalty to all actions until she finds a new place to stay. Also, unless she succeeds in a Charisma + Willpower (3) Test, she cannot enter a hangout (bar, club, restaurant) more than once in a week without suffering a -1 to all Magic tests for the next twenty-four hours.",
      name: "Bat",
      similarArchetypes: "Wanderer",
      source: "SR5:HT",
    },
    boar: {
      description:
        "Followers of the Boar are static in their ways. They keep to a daily routine and hold on to their stuff till it wears away. Some people would call them boring or unspontaneous, others would call them hoarders. Followers believe themselves to be loyal to the places that are part of their routine, and they are very protective of their territory.",
      all: "Blades",
      magician: "Additional services when summoning spirits",
      adept: "Rooting (2)",
      disadvantages:
        "A follower of Boar does not like it if there are others intruding in his space or disrupting his routine. At best, the follower protects the bar and employees of the bar he always goes to. At worst, he will start a fight for a specific table or stool that he thinks is his. A warning is optional and usually proffered by the follower’s friends. It takes a Charisma + Willpower (3) Test for a follower of Boar to leave his home, safehouse, or routine permanently, otherwise he will keep coming back, even at the risk of his own safety. If the Boar does leave, he receives a –1 penalty to all active skill tests for three weeks until he finally settles into a new place and routine.",
      name: "Boar",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    cat: {
      description:
        "Cat is honored in cultures around the world. Cat is often seen as the guardian of mystical secrets, including those involving the afterlife. She certainly knows many secrets but rarely decides to share them, and never with anyone who is not worthy. She is stealthy, sly, and arrogant. Cat toys with her prey—threatening, taunting, and confusing her targets—rather than going directly for the kill.",
      all: "Sneaking",
      magician: ["Illusion spells", "preparations", "illusion spell rituals"],
      adept: "Light Body (2)",
      disadvantages:
        "Cat magicians toy with their prey. Unless you succeed in a Charisma + Willpower (3) Test at the start of combat, you cannot make an attack that incapacitates your target. If you take any Physical damage, all this playing around stops.",
      name: "Cat",
      similarArchetypes: "Mystery, Stealth",
      source: "Core",
    },
    chaos: {
      description:
        "Adherents of Chaos seemingly do things at random and love to start arguments or barroom brawls just for kicks, often through random trickery. While most people have a rather fixed sense of right and wrong, a Chaos follower’s moral compass points in a different direction from moment to moment.",
      all: "Con",
      magician: ["Illusion spells", "preparations", "rituals"],
      adept: "Improved Potential (2)",
      disadvantages:
        "You are an inveterate gossip trying to stir up trouble, especially between friends, and thus cannot keep damaging secrets to yourself. Also, anytime you encounter a public situation deemed too quiet or stable (gamemaster’s discretion), make a Willpower + Intuition (3) Test. Failure means that you are compelled to stir the pot in any way you desire, be it attacking, telling lies, or throwing a drink on someone nearby.",
      name: "Chaos",
      similarArchetypes: "Trickster, Troublemaker",
      source: "SR5:SG",
    },
    dog: {
      description:
        "Dog is a loyal friend. He fights ferociously to defend his home and those under his protection. Dog protects people from harmful magic and dangerous spirits. Dog is loyal, generous, and helpful to those who show him kindness. He is single-minded, often to the point of stubbornness.",
      all: "Tracking",
      magician: ["Detection spells", "preparations", "rituals"],
      adept: "Improved Sense (2)",
      disadvantages:
        "A Dog magician is stubbornly loyal. You can never leave someone behind, betray your comrades, or let another sacrifice themselves in your place without making a successful Charisma + Willpower (3) Test.",
      name: "Dog",
      similarArchetypes: "Friendship, Loyalty",
      source: "Core",
    },
    dolphin: {
      description:
        "Followers of Dolphin are graceful, free-spirited characters who enjoy playful banter and have to move when music plays. They see things optimistically and believe there is good in the world despite current conditions of corporate politics and pollution. They are not naïve—at least, they don’t believe they are. They just have faith in humanity. Somehow.",
      all: "Artisan",
      magician: ["Health spells", "preparations", "spell rituals"],
      adept: "Flexibility (2)",
      disadvantages:
        "Followers are altruistic when it comes to helping people and cannot turn a blind eye to those who they believe deserve their help. It is difficult for them not to get involved when they see someone being bullied or obviously polluting the environment. If they see such a situation, it takes a Charisma + Willpower (3) Test for a follower of Dolphin not to intervene. If the job that the follower of Dolphin is on involves polluting the environment or becoming the bully/enforcer on those less deserving, then the follower loses 2 dice after each such deed until she atones. Atonement is up to the gamemaster but can involve time and money spent with charities.",
      name: "Dolphin",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    dragonslayer: {
      description:
        "This most heroic of mentor spirits is also the most fun loving. Though he fights to protect his own against all dangers, he loves a good party even more. He is a big brother who takes a friendly interest in everything his family does. Though sometimes naïve, he makes a staunch friend and a deadly enemy. The dragons he slays have changed with the times: current beasts include crime, pollution, corruption, and of course, actual dragons. Dragonslayer fights hard and plays hard. Once he has given his oath, he never breaks it. A Dragonslayer magician behaves with honor and respect, and demands the same from those around him.",
      all: "Etiquette",
      magician: ["Combat spells", "preparations", "rituals"],
      adept: "Enhanced Accuracy (1) and Danger Sense (1)",
      disadvantages:
        "If you break a promise, whether by choice or by accident, you take a –1 dice pool modifier to all actions until you make good on your promise.",
      name: "Dragonslayer",
      similarArchetypes: "Heroism, Adventure",
      source: "Core",
    },
    eagle: {
      description:
        "Eagle is the highest-flying bird in the sky, considered the most noble by many cultures. He is proud and solitary, and sees everything happening in the world below. Eagles are noble defenders of the purity of nature. They are intolerant of those who do not share their views and have a strong distrust of technology and its tools. Those who damage nature are Eagle’s enemies, and Eagle will brave great danger to defeat polluters and other evildoers.",
      all: "Perception",
      magician: "Summoning",
      adept: "1 free level of Combat Sense",
      disadvantages:
        "You get the Allergy (pollutants, mild) quality (p. 322; no bonus Karma for this negative quality).",
      name: "Eagle",
      similarArchetypes: "Nature, Warding",
      source: "Core",
    },
    fireBringer: {
      description:
        "The Fire-Bringer stole the secret of fire from the heavens and gave it to metahumanity as a gift and a tool. He is a figure of kindness and concern, but his good intentions sometimes get him into trouble and his plans may fail to work out the way he envisions them. He is a shaper and a creator, forming new things from the primal clay and breathing the fiery spark of life into them. Fire-Bringers devote themselves to the betterment of others, even at their own expense. Most followers of Fire-Bringer throw themselves into a particular cause with great zeal.",
      all: "Alchemy",
      magician: "Manipulation",
      adept: "1 free level of Improved Ability on a non-combat skill",
      disadvantages:
        "When someone sincerely asks you for help, you can’t refuse without succeeding in a Simple Charisma + Willpower (3) Test.",
      name: "Fire-bringer",
      similarArchetypes: "Invention, Generosity",
      source: "Core",
    },
    giraffe: {
      description:
        "A follower of the Giraffe mentor spirit sees beyond the horizon. She seeks to see/hear the truth beyond what is presented. A giraffe follower may seem a little off as she either looks off into space and appears to not pay attention or looks too intently at you as if she’s judging your soul.",
      all: "Perception",
      magician: "Conjuring",
      adept: "2 free levels of Piercing Senses",
      disadvantages:
        "A follower of Giraffe stumbles through social etiquette, as she believes the small talk and chitchat that are the core of social chatter are fundamentally dishonest and not worthy of her efforts. She can make a wide range of situations awkward and receives –2 dice for Etiquette skill tests.",
      name: "Giraffe",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    horse: {
      description:
        "Followers of the Horse mentor spirit are the embodiment of freedom. They must be out in the open air and allowed to roam the open road. Followers are never intentionally stubborn or malicious, but they do not like to feel impeded or confined by someone else. This unfortunately also means that followers of Horse may sacrifice personal relationships for freedom.",
      all: "Running",
      magician: "Reduce Drain Value from Reckless Summoning by 1",
      disadvantages:
        "Followers cannot sit still for long or be confined indoors. They must spend at least four hours a day outside and be able to run or drive around (any method of travel faster than walking). If followers are not able to meet this condition, they suffer –1 die to all action skill tests. This penalty is cumulative, meaning if the follower is stuck at a desk all day (indoors and not moving around) for two days in a row, they suffer –2 to all actions until they get that free time in.",
      name: "Horse",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    monkey: {
      description:
        "Monkey is clever and playful and finds people amusing. A follower of Monkey is a foe of evil and enjoys taunting and frustrating the plans of those who would harm him or his friends. Magicians following Monkey like to taunt opponents, using magic to misdirect, confuse, or otherwise trick them into 'learning their lesson' rather than seriously harming or killing them.",
      all: "Gymnastics",
      magician: "Manipulation",
      disadvantages:
        "Because Monkey is not an assassin, the magician must succeed in a Charisma + Willpower (3) Test in order to strike a surprised opponent. Monkey must be able to watch his prank go off or see the look on the opponent’s face after taunting them, otherwise he suffers -1 to all Magic tests until the next sunrise/sunset.",
      name: "Monkey",
      similarArchetypes: "",
      source: "SR5:HT",
    },
    mountain: {
      description:
        "Mountain is rooted in the very heart of the Earth but reaches toward lofty heights. She has limitless strength and endurance, but Mountain’s inflexible nature limits her. Mountain is a stubborn and unyielding force, and Mountain magicians are difficult to persuade once they have made up their minds about something.",
      all: "Survival",
      magician: "Counterspelling",
      disadvantages:
        "When a Mountain magician makes a plan, she sticks to it. You must make a Charisma + Willpower (3) Test to abandon a planned course of action in favor of a new one. If you fail, you must endeavor to continue with your original plan, even if it means going on alone. Similarly, you must succeed in a Charisma + Willpower (3) Test to proceed in anything without a plan.",
      name: "Mountain",
      similarArchetypes: "Endurance, Stubbornness",
      source: "Core",
    },
    oracle: {
      description:
        "Past, present, and future—Oracle knows all and sees all. She peels back the veil of mystery and reveals what has been, what is, and what will be. Nothing escapes her notice, and things that are hidden do not remain hidden for long.",
      all: "Arcana",
      magician: "+2 dice for Detection spells, preparations, and rituals",
      disadvantages:
        "You hate mysteries with a passion and can disappear for days trying to track down the answer. When confronted by a particularly haunting question (gamemaster’s discretion), you must take a Willpower + Intuition (3) Test. Failure means you must undertake an Intuition + Logic [Mental] (5, 1 hour) Extended Test to try researching the answer. Completion of the Extended Test does not necessarily mean you found the answer, but it at least silences the question in your mind for the time being. When a follower of Oracle becomes a Grade 1 initiate (p. 324, SR5), she must choose Divination (p. 147) for her first metamagic rather than a Power Point or any other benefit.",
      name: "Oracle",
      similarArchetypes: "Teacher, Mystic",
      source: "SR5:SG",
    },
    peacemaker: {
      description:
        "Deep down, all Peacemaker wants is for everyone to get along, even if they are currently mortal enemies. She believes every argument can be solved in some way; on the other hand, she knows some arguments require force or bodily harm in order to get one’s point across.",
      all: "Negotiation",
      magician: "+2 dice to Detection spells, preparations, and rituals",
      disadvantages:
        "You see even enemies as potential friends and go out of your way to keep from hurting anyone unless the situation truly warrants it. At the very beginning of combat, you must pass a Charisma + Intuition (3) Test; failure means you are unable to take actions that cause Physical damage for the duration of combat. At the beginning of a new Combat Turn, you may choose to retake the test if you failed the first time and you or a member of your team suffered damage in the previous Combat Turn.",
      name: "Peacemaker",
      similarArchetypes: "Mediator, Pacifist",
      source: "SR5:SG",
    },
    raccoon: {
      description:
        "Followers of Raccoon would not call themselves thieves. Maybe entrepreneurs. They are inquisitive and have an intense curiosity about things, which can lead them into danger. They are above petty thefts and don’t delve into violent robberies. Followers of Raccoon are artists in the field of pilfering or trickery, and will strategize a plan that emphasizes their talent and flamboyance.",
      all: "Palming",
      magician:
        "+2 dice for spells, preparations, and spell rituals in the Manipulation category",
      disadvantages:
        "The Raccoon is commonly one of the Thief totems, so the followers can tend to err on the side of greed. A follower of Raccoon must make a Charisma + Willpower (3) Test to resist the urge to open that next locked door to look for something to steal, or to follow that Matrix rabbit trail in the quest for more paydata.",
      name: "Raccoon",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    rat: {
      description:
        "Rat is found wherever humans and the things they discard are, for what other bounty can sustain him? Rat is a scavenger, a stealthy thief who takes what he needs to survive. He dislikes working out in the open, preferring to stick to the shadows. Rat avoids fights whenever he can; when he must fight, he fights to kill quickly and move on.",
      all: "Sneaking",
      magician:
        "+2 dice to Alchemy tests when harvesting reagents, and you may use reagents of any tradition",
      disadvantages:
        "A Rat magician must make a Charisma + Willpower (3) Test to not immediately flee or seek cover whenever caught in a combat situation. If there is nowhere to flee, she is forced to fight.",
      name: "Rat",
      similarArchetypes: "Survival, Scavenging",
      source: "Core",
    },
    raven: {
      description:
        "Raven is a harbinger of trouble in cultures worldwide. He is a trickster and a transformer, dark and devious. Raven thrives off the bounty of carnage and chaos, but does not cause them—he merely knows an opportunity when he sees one. Raven loves to eat and rarely refuses an offer of food. Raven is cousin to Coyote, who shares trickster inclinations with Raven but lacks his darkness and propensity for carnage.",
      all: "Con",
      magician:
        "+2 dice for spells, preparations, and spell rituals in the Manipulation category",
      adept: ["Traceless Walk", "Voice Control"],
      disadvantages:
        "You must make a Charisma + Willpower (3) Test to avoid exploiting someone else’s misfortune to your own advantage or to pull a clever trick or prank even if it’s to the disadvantage of your friends.",
      name: "Raven",
      similarArchetypes: "Deception, Mischief",
      source: "Core",
    },
    sea: {
      description:
        "Sea is the birthplace of all living creatures. She is unfathomable and moody, tranquil and comforting one moment, fearsome and destructive the next. Though she possesses great wealth, she jealously guards what comes into her hands. Sea can be a powerful ally, but she must be courted with great care.",
      all: "Swimming",
      magician: "+2 for summoning spirits of water",
      adept:
        "Improved Ability on an athletic skill (select when receiving this bonus)",
      disadvantages:
        "You must make a Charisma + Willpower (3) Test to give away something you own or be charitable in some way.",
      name: "Sea",
      similarArchetypes: "Chaos, Greed",
      source: "Core",
    },
    seducer: {
      description:
        "The Seducer is the incarnation of desire. He has many whims and vices that he must frequently satisfy. He encourages jealousy and greed, and seeks to inflame the wants of others. He avoids direct confrontation but gains pleasure when others fight for his attention or on his behalf. He exists to exploit weaknesses and will not hesitate to sacrifice those who get in his way.",
      all: "Con",
      magician:
        "+2 for spells, preparations, and spell rituals of the Illusion category",
      adept:
        "Improved Ability for a skill in the Acting or Influence skill group (select when receiving this bonus)",
      disadvantages:
        "You must succeed in a Charisma + Willpower (3) Test to avoid pursuing a vice or indulgence (drugs, BTLs, sex, and so on) when it is made available.",
      name: "Seducer",
      similarArchetypes: "Seductress, Temptation",
      source: "Core",
    },
    shark: {
      description:
        "Shark is a cold and relentless hunter. His power is known to all who live near the sea. When Shark strikes, he does so without mercy, driven into a frenzy by the blood of his prey. Shark magicians tend to be wanderers, always on the move. They are fierce and deadly warriors. A Shark magician believes the only good enemy is a dead enemy. If challenged, he does not waste time with threats or boasts but strikes to kill.",
      all: "Unarmed Combat",
      magician:
        "+2 for spells, preparations, and spell rituals of the Combat category",
      adept: "Free Killing Hands",
      disadvantages:
        "You might go berserk when you take Physical damage in combat. Every time it happens, make a Simple Charisma + Willpower Test (wound modifiers apply). You go berserk for 3 turns minus 1 turn per hit, so 3 or more hits averts the berserk rage entirely. If you’re already going berserk, increase the duration. When you’re berserk, you go after your attacker(s) without regard for your own safety. If you run out of targets before the time’s up, you keep attacking their bodies.",
      name: "Shark",
      similarArchetypes: "Hunger, Violence",
      source: "Core",
    },
    snake: {
      description:
        "Snake is wise and knows many secrets. She is a good counselor, but always exacts a price for her advice. Snake characters fight only to protect themselves and others. They are obsessed with learning secrets and take great risks in order to do so. They trade their knowledge to others for whatever they can get in exchange.",
      all: "Arcana",
      magician:
        "+2 for spells, preparations, and spell rituals of the Detection category",
      adept: "2 free levels of Kinesics",
      disadvantages:
        "You must succeed in a Charisma + Willpower (3) Test to avoid pursuing secrets or knowledge that few people know about when you receive hints of its existence.",
      name: "Snake",
      similarArchetypes: "Knowledge, Curiosity",
      source: "Core",
    },
    spider: {
      description:
        "Spider likes to feel a connection to everything. To be at the center of a web connecting all sorts of news and able to feel the pulse of the world. Followers of Spider like to be in the know, establishing connections, be it directly with people or through surveillance. Some may feel that followers of Spider are nothing more than Awakened bloggers who scan the Matrix for tidbits of the truth.",
      all: "Computer",
      magician: "+2 for Illusion spells",
      adept: "Hang Time (2)",
      disadvantages:
        "Followers of Spider are paranoid about being mistaken for insect shamans, avoiding casual conversation about such details. They are agoraphobic and receive a –1 dice pool modifier to Magic tests in open spaces or very large indoor rooms. This penalty doubles in crowded environments like auditoriums, theatres, and stadiums.",
      name: "Spider",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    thunderbird: {
      description:
        "Thunderbird is a majestic creature who is storm incarnate. Her wings are dark clouds, her beak and claws lightning, and her cries the clap of thunder. She is a primal force, often savage but necessary to the survival of the land and the continuation of the cycle of life. Thunderbird is a force to be respected and approached with great care, lest her anger be roused.",
      all: "Intimidation",
      magician: "+2 for summoning spirits of air",
      adept: "Critical Strike (1)",
      disadvantages:
        "A Thunderbird magician must succeed in a Charisma + Willpower (3) Test to avoid responding to an insult in kind.",
      name: "Thunderbird",
      similarArchetypes: "Anger, War",
      source: "Core",
    },
    whale: {
      description:
        "Followers of Whale appreciate beauty and the long-time traditions of working in the arts. With a long life, they also hold personal honor and loyalty in high esteem. Those Whale adopts into her personal circle receive her total loyalty, and she expects the same in return. Followers of Whale are patient in their work and will take the time to make sure all the details are complete.",
      all: "Swimming",
      magician: "+2 to Conjuring skill tests for spirits of water",
      adept: "Iron Lungs (2)",
      disadvantages:
        "Because of their personal sense of ethics, followers of the Whale must honor any agreement they enter into. Failing to honor the contract or oath results in a loss of a point of Magic. The Whale mentor spirit understands if circumstances to complete the contract are out of the Awakened’s hands. For everything else, the follower can attempt to atone, but at the gamemaster’s discretion.",
      name: "Whale",
      similarArchetypes: "",
      source: "SR5:HS",
    },
    wiseWarrior: {
      description:
        "The Wise Warrior is skilled in the art of war, viewing battle as an exercise in the powers of the mind as well as the body. She studies the tactics of her foes and overcomes them through a combination of superior strategy and battle prowess. The Wise Warrior does not act out of savagery or battle-lust, but from a position of knowledge and wisdom. Wise Warriors must follow the warrior’s code of honor and conduct themselves properly or risk the loss of favor.",
      all: "Leadership",
      magician:
        "+2 dice for spells, preparations, and spell rituals in the Combat category",
      adept: "Improved Ability (Combat skill)",
      disadvantages:
        "If you act dishonorably or without courtesy, whether by choice or by accident, you take a –1 dice pool modifier to all actions until you atone for your behavior.",
      name: "Wise Warrior",
      similarArchetypes: "Duty, Wisdom",
      source: "Core",
    },
    wolf: {
      description:
        "Wolf is recognized worldwide as a hunter and warrior, devoted to the other members of his pack. Wolf magicians are loyal to friends and family unto death, showing no cowardice in battle and considering their word as their bond.",
      all: "Tracking",
      magician:
        "+2 dice for spells, preparations, and rituals in the Combat category",
      adept: "2 free levels of Attribute Boost (Agility)",
      disadvantages:
        "You must succeed in a Charisma + Willpower (3) Test to retreat from a fight.",
      name: "Wolf",
      similarArchetypes: "Hunting, Fellowship",
      source: "Core",
    },
    doomToxic: {
      description:
        "Doom embodies the desire of toxics to bring an end to all life on the planet, seeking to hasten the apocalypse and turn the world into a barren, polluted landscape. Followers of Doom see humanity as tragically flawed and carry out an agenda of total destruction, leading to isolationist and anti-social behavior.",
      all: "Demolitions",
      magician:
        "+2 dice for spells, preparations, and spell rituals of the Combat category",
      adept: "Free Killing Hands power",
      disadvantages:
        "Followers of Doom must succeed in a Willpower + Charisma (3) Test to avoid a fight once it has begun or to resist enacting plans for violence. Failure means they must engage in combat until all opponents are defeated or flee.",
      name: "Doom (TOXIC)",
      similarArchetypes: "Destroyer, Reaper",
      source: "SR5:SG",
    },
    diseaseToxic: {
      description:
        "Disease embodies infection and virulence, subsisting off the waste of others and spreading its influence throughout the world. Followers of Disease collaborate and work in groups to achieve their goals, preferring subtle methods over direct confrontation.",
      all: "Survival",
      magician:
        "+2 dice for summoning or binding plague spirits (toxic spirits of man)",
      adept: "Free Plague Cloud power (see p. 173)",
      disadvantages:
        "Followers of Disease must make a Charisma + Willpower (3) Test to avoid fleeing or seeking cover in combat situations, unless they outnumber their opponents. If they begin a fight with greater numbers but lose their advantage, they must test again to avoid fleeing.",
      name: "Disease (TOXIC)",
      similarArchetypes: "Pestilent Rat, Contagion",
      source: "SR5:SG",
    },
    mutationToxic: {
      description:
        "Mutation seeks to alter every living thing into new forms, conspiring to control, manipulate, and change all life through pollution and corruption. Followers are obsessed with self-improvement.",
      all: "Unarmed Combat",
      magician:
        "+2 dice for spells, preparations, and spell rituals of the Health category",
      adept:
        "Free Attribute Boost (level 2) power for a Physical Attribute of the character’s choice",
      disadvantages:
        "If a follower of Mutation finds themselves inferior to an opponent, they suffer a –1 penalty on all actions until they defeat their rival in that area or compensate for the weakness in another way.",
      name: "Mutation (TOXIC)",
      similarArchetypes: "Mutant Beast, Dark Darwinist",
      source: "SR5:SG",
    },
    pollutionToxic: {
      description:
        "Pollution embodies the defilement of the natural world and its destruction. Followers celebrate in the rape of nature, believing in pollution as the ultimate force.",
      all: "Chemistry",
      magician:
        "+2 dice to summon or bind toxic spirits of air, earth, or water (choose one)",
      adept: "Free Toxic Strike power (see p. 176)",
      disadvantages:
        "If followers of Pollution are in an area cleaner than their normal habitation, they must make a Willpower + Charisma (3) Test daily. Failure requires them to spend at least eight hours despoiling the land, regardless of other plans.",
      name: "Pollution (TOXIC)",
      similarArchetypes: "",
      source: "SR5:SG",
    },
  };

  return mentorSpirits;
}
