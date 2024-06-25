export default function returnRituals() {
  const rituals = {
    bloodBath: {
      type: "Adept, Blood",
      name: "BloodBath",
      description:
        "The blood adept knows that blood within is life, and blood without is protection. Every scar was a wound that has grown tougher. But not all such armor need come from them. Adepts covered in blood can cause it to harden into a natural armor. The more blood, the tougher the armor. This armor stacks with standard armor for the purposes of determining encumbrance penalties (see Armor and Encumbrance, p. 169, SR5), but only if it coats the same regions covered by armor. For example, a blood adept might wear an armored vest and pants, but paint their face, arms, and exposed flesh with blood to harden into a sheath without adding to their armor encumbrance.",
    },
    bloodOath: {
      type: "Material Link",
      name: "Blood Oath",
      description:
        "In this ritual, the subject swears that they will perform a specific task and receives greater ability to achieve that goal in return. Appropriate oaths would include swearing to defend a specific individual or to find a specific object. This oath must be taken freely, or the ritual fails. As part of the ritual, the leader inflicts a number of boxes of Physical damage to the subject equal to or less than the Force of the ritual. For every 2 boxes of Physical damage inflicted, the subject chooses one skill that they will use to achieve the goal of their oath. They receive a +1 dice pool and +1 limit modifier to the chosen skill. This modifier only applies when the subject is directly working to fulfill their oath. For example, if a player chose Pistols as a skill for an oath to protect an individual, they would get the benefit of the oath if they were attacked while guarding the individual but not if they were attacked while alone. Once the ritual is complete, the leader may spend Karma equal to (2 + Willpower of the subject) to make the oath permanent; otherwise, it lasts for (Force) days. If the subject achieves the goal of their oath, the effect of the ritual ends. If the subject of the oath intentionally betrays that oath, they suffer twice the damage they had inflicted on them during the casting of the oath ritual. Even if the subject survives this damage, the injuries leave severe scars, forever marking them as an oath breaker to those who know the signs. This damage only occurs if the subject breaks their oath, not if they fail to achieve its goal. The leader can hold active oaths with up to his Charisma in subjects. The ritual takes (Force) hours to complete. An individual can only have one active oath at a time. A blood oath does not require a blood magic Addiction Test, as it is purely voluntary and the required damage represents commitment rather than suffering.",
    },
    deathCurse: {
      type: "Material Link",
      name: "Death Curse",
      description:
        "This ritual allows the magician to exact final vengeance on anyone who slays them. If the subject of this ritual dies, they burn all their Edge, and a blood spirit is automatically summoned from their corpse. The Force of the blood spirit summoned is equal to the hits on a Magic + (number of Edge burned) test. The Force of the ritual sets the limit. Because the ritual does not actually use the Summoning skill, any Awakened individual can be the subject. The spirit has no master, but it has a burning desire to destroy the one who killed the subject of the ritual. The violence of the death is enough to create a brief metaphysical link between the subject and their killer, allowing the blood spirit to recognize them on sight. Once the blood spirit exacts its revenge, it is free to return to whatever dark metaplane it came from, or more likely to continue on a killing spree. Because of the high potential to set a rampaging blood spirit loose, this ritual is taboo even in areas where blood magic is tolerated.",
    },

    guardianBond: {
      type: "Material Link",
      name: "Guardian Bond",
      description:
        "A benign variation of the Blood Bond ritual (p. 125, Street Grimoire), this ritual bonds the magician to a genetically related subject. Unlike a Blood Bond, a Guardian Bond protects the subject, not the caster. The minimum Force of the ritual is equal to the subject’s Willpower. Once the ritual is complete, the leader may spend Karma equal to 2 + Willpower of the subject to make the bond permanent, otherwise it lasts for (Force) days. This bond creates a low-level telepathic link between the leader and the subject (they know each other’s emotional state and general whereabouts). The magician may use a form of Empathic healing (p. 171, Street Grimoire) to transfer physical damage from the subject to himself, if the subject is within (100 x Magic Rating) meters from the magician. The leader can bond up to their Charisma in subjects. This ritual takes (Force) days to complete. This ritual requires the Sacrifice metamagic to cast, however any Blood Magic Points spent must originate from the leader of the ritual. This ritual does not necessitate an Addiction test for the use of blood magic.",
    },

    curse: {
      type: "Material Link, Spell",
      name: "Curse",
      description:
        "A Curse allows an illusion spell to be cast on a subject through a material link rather than a mystic link from observing the subject. A Curse can be used on any target, whether within visual range of the leader or not, provided there is a link to the target. If the spell applies to multiple targets, such as in a mass spell, then the ritual must have a link to each of the targets. The link is used as part of the offering and is effectively destroyed during the ritual. The spell is cast normally (using teamwork, if applicable) with all the tests and Drain appropriate to the chosen illusion spell (step 6 of Ritual Spellcasting). For the duration of the ritual, a link is present between the target and the ritual group while the spell portion is sustained. It is possible to spot the link and use it to track back to the ritual team’s physical location. This ritual requires (Force) hours to complete.",
    },
    prodigalSpell: {
      type: "Spell, Spotter",
      name: "Prodigal Spell",
      description:
        "This ritual allows you to cast any Combat spell at a distant target that is out of line of sight of your ritual team. The Combat spell can be either direct or indirect. Direct combat spells travel to the target in astral space. Indirect combat spells travel to the target in physical space, requiring a clear (but not necessarily straight) path in the physical world between the ritual team and target in order for the spell to reach its destination—the spell flies from the foundation to the target, dodging any obstacles in its path. This ritual requires (Force) hours to perform.",
    },

    remoteSensing: {
      type: "Spell, Spotter",
      name: "Remote Sensing",
      description:
        "This ritual allows you to cast any Detection spell with an even greater range. The area of the spell is increased to Force x (sum total of the participants’ Magic attributes) x 100 meters. The spell’s subject must be present in the foundation during the ritual but may then take his new sense outside the foundation while the ritual participants sustain it for him. All of the participants of the ritual perceive the same thing the subject perceives through the spell. If the spell has a target (like when you use a Mind Link or a Mind Probe spell in the ritual), you’ll need a spotter to have eyes on the target. This ritual takes (Force) hours to perform. Afterward, if any of the participants stops sustaining the ritual, it ends.",
    },

    ward: {
      type: "Anchored",
      name: "Ward",
      description:
        "The ward is a basic ritual, taught to many magicians. It creates an astral barrier (p. 315) with a Force equal to the Force of the ritual. The ward may encompass a volume of up to fifty cubic meters times the sum of the participants’ Magic ratings. This ritual takes (Force) hours to complete. The ward lasts for a number of weeks equal to the net hits from the sealing step of the ritual—if the leader spends an amount of karma equal to the ward’s Force, the ward is permanent.",
    },

    circleOfProtection: {
      type: "Anchored",
      name: "Circle of Protection",
      description:
        "The circle of protection is a small astral and physical barrier. Even though it’s called a circle, it creates a sphere around the anchor that has a radius in meters equal to the leader’s Magic rating. The circle acts as a combination of the physical barrier and mana barrier spells (p. 315) with a Force equal to the Force of the ritual. The mana barrier is dual-natured. The ward lasts for a number of hours equal to the net hits from the sealing step. Anyone or anything within the barrier is protected from outside physical objects and magical attacks. If something crosses the barrier from the inside, then the ward ends. This ritual takes (Force) hours to perform.",
    },

    circleOfHealing: {
      type: "Anchored, Spell",
      name: "Circle of Healing",
      description:
        "This ritual is used to cast healing magic on a number of targets at once. Even though it’s called a circle, it creates a sphere around the anchor that has a radius in meters equal to the leader’s Magic rating. This ritual takes (Force) hours to complete. The net hits from the sealing step are used as the net hits for the spell, and apply to everyone in the circle as long as they remain in the circle. The circle lasts for (Force) days.",
    },
    renascence: {
      type: "Anchored, Spell",
      name: "Renascence",
      description:
        "This ritual sustains and maintains an area manipulation spell for a time. The area of the spell is a sphere with a radius equal to the leader’s Magic rating, and the effect is based on the ritual’s Force and the net hits from the sealing step. The base duration of the effect is 1 hour, which is doubled for each net hit from the sealing step of the ritual. This ritual takes (Force) hours to perform.",
    },

    watcher: {
      type: "Minion",
      name: "Watcher",
      description:
        "Watchers are like spirits, but in actuality are entities born from the ritual leader’s own mind rather than the metaplanes. They are a creation of mana, woven with the personalities of the ritual participants. A watcher can speak any language its creators (which includes the leader and participants) can speak. A watcher is bound only to the leader of the ritual and follows his orders. A watcher lasts for a number of hours equal to its Force times the net hits on the sealing test. A watcher’s skills are equal to half the Force of the ritual (rounded up). A leader can dismiss a watcher bound to him as a Free Action. Watchers cannot be banished or counterspelled. This ritual takes (Force) minutes to perform.",
    },

    homunculus: {
      type: "Minion",
      name: "Homunculus",
      description:
        "The magician can bind a spark of intelligence into an inanimate form, creating a homunculus. The homunculus has a physical form but isn’t very bright. It understands any language its creators (leader and participants) speak and has a modicum of a personality that reflects those of its creators. You need an inanimate object to animate for the ritual. It can be at most (Force x 10) kilograms in mass, and it gains a limited amount of flexibility (the same as the Animate spell, p. 292) for the duration of the ritual. The object’s Object Resistance dice pool is added to the opposition for the leader’s and participants’ Ritual Spellcasting Test. The homunculus obeys the leader’s commands as much as possible within the limitations of its physical capabilities. A homunculus lasts for a number of days equal to its Force times the net hits on the sealing test. This ritual takes (Force) hours to perform.",
    },

    decrytallize: {
      type: "Material Link, Spotter",
      name: "Decrystallize",
      description:
        "This ritual was designed by the Atlantean Foundation to counter the power of their crystalline sometimes-allies. They use it to recover unfortunate members of their own organization or to return functionality to an otherwise useful subject. The ritual requires the complete, intact crystalline statue of the subject. Otherwise, any damage suffered by the subject’s statue will be transferred to the subject upon retransformation. The ritual can be performed through the use of a remote spotter, although the subject’s statue is more commonly transported to a lodge and the ritual performed where the entire group can see the subject. The ritual takes one hour per point of Body the subject had when in the flesh.",
    },
    manaFlow: {
      type: "Anchored",
      name: "Mana Flow",
      description:
        "This ritual was developed by the Astral Preservation Society and freely distributed over the Matrix to interested parties starting at the end of 2075. The ritual helps fill a mana void on a temporary basis, with the ritual increasing the background count of a damaged area by one for a number of hours equal to the Force of the ritual. The spell affects an area of a Force x 100 meters radius around the ritual’s anchor point. The ritual takes one hour to perform. Interestingly, the ritual is distributed with a number of limitations, as it affects only those areas with a negative background count. Its effects are negated within areas where the background count is normal, even if the anchor is within a damaged area. Also, the ritual cannot be successfully performed in an area with a neutral or positive count. Involved parties must resist Drain and spend the allotted time like normal, but the ritual is inevitably unsuccessful.",
    },

    manaEbb: {
      type: "Anchored",
      name: "Mana Ebb",
      description:
        "The creator of this ritual is unknown, but the Pueblo Corporate Council sells formulae to interested parties from its Matrix shopping portal. The ritual helps drain a mana surge on a temporary basis, with the ritual decreasing the background count of a damaged area by one for a number of hours equal to the Force of the ritual. It works by siphoning the power to a metaplane known to the ritual leader, or to the deep astral plane, depending on the version of the ritual. The spell affects an area of a Force x 100 meters radius around the ritual’s anchor point. The ritual takes one hour to perform. The ritual only affects areas with a positive background count, and its effects are negated within areas where the background count is normal, even if the anchor is within a damaged area. Also, the ritual cannot be successfully performed in an area with a neutral or positive count. Involved parties must resist Drain and spend the allotted time like normal, but the ritual is inevitably unsuccessful. While the ritual is active, plant life appears slightly wilted and animal life attempts to leave the area, if possible.",
    },

    astralDoppelganger: {
      type: "Spotter, Material Link",
      name: "Astral Doppelganger",
      description:
        "The Astral Doppelganger ritual allows the leader to alter the astral signature of one or all ritual participants so that it appears identical to that of an individual the leader/spotter has assensed. If the subject whose astral signature is being duplicated is consciously cooperating with the ritual, the minimum Force of the spell required is equal to the number of participants whose astral signatures are being changed. If the subject is unwilling or is unaware she is the subject of the ritual—such as a person selected by a spotter— add +2 to the minimum force required. If the ritual is successful, the doppelgangers’ auras are indistinguishable from the original. This change is temporary for up to net successes of the ritual in hours. This ritual can make astral tracking (p. 315, SR5) more difficult with an increased threshold equal to the number of participants with the new astral signature. It also can be used to allow the participants to fool wards (p. 135). The Material link is optional to the Spotter portion of the ritual. This allows for the use of a Material link to determine the astral signature of the subject, if the subject cannot be found through observation. Requires Flexible Signature.",
    },
    alarmWard: {
      type: "Anchored",
      name: "Alarm Ward",
      description:
        "Alarm Wards alert their creator when a spell or astral form has entered or crossed any area they are set to observe. Alarm Wards are designed to be as unobtrusive as possible, blending into the local astral space and allowing intruders to pass through unaware they have been detected. Astral entities must make an Assensing + Intuition [Astral] (3) Test to notice the ward before passing through it. Those on the physical realm or using spells like Clairvoyance would only notice the ritual marking and anchor of the ward with a perception test and a threshold of 5, recognizing them as 'magical markings' without understanding their intent. It is possible for a person to recognize the sensation of passing through the astral form of the ward and realize she has tripped an alarm. Alarm wards send the same notification whether someone or something passes through it or it is attacked. Intruders aware of the ward can trip the alarm to distract its creator from an incursion elsewhere. This ritual takes (Force) hours to complete.",
    },

    aspectManaLine: {
      type: "Mana",
      name: "Aspect Mana Line",
      description:
        "This ritual enables the geomancer to aspect a portion of the mana line towards his tradition (p. 41). The number of meters along the mana line that can be aspected in this manner is determined by multiplying the leader’s Magic Rating by 20. In accordance with geomantic lore, a permanent magic lodge must be constructed during step 4 of the ritual. The Force of the ritual is equal to twice the mana line’s Force rating. If the mana line is aspected by another organization/geomancer, add the leader/geomancer’s Magic Rating in dice to the Opposed Test in sealing the ritual (step 7). For the aspect to become permanent, this ritual must be successfully completed each month for a number of consecutive months equal to the Force of the mana line. An offering must be made (step 5) every month at various points within the aspected line to alter the flow of mana energies. Failing the ritual in one month does not undo what has been done but adds a month to the process. Other geomancers may compete for the same territory; when this happens only the geomancer with the most net hits during a given month has control for that month. The controlling leader, organization, or tradition can use the force of the mana line as a dice pool modifier when performing magic on this 'home turf.' Aligning the magical flow of an aspected mana line increases the probability of the controlling magician finding valuable or necessary reagents. Add the Force of the mana line in dice to the magician’s Search Test. This ritual takes (Force) hours to complete. Requires Geomancy.",
    },

    attuneAnimal: {
      type: "Adept",
      name: "Attune Animal",
      description:
        "With this ritual, adepts can bond with a mundane, non-sapient animal. This bonding ritual requires the adept to first befriend the animal, which requires an Animal Handling + Charisma [Social] (12, 1 week) Extended Test. Once rapport is established, the adept must perform the bonding ritual with a minimum Force equal to the willpower of the creature. If successful, the adept then spends karma equal to the animal’s essence to make the bond permanent. The ritual takes (Force) hours to complete. A bonded animal gains the power of Sense Link (p. 198). This ritual must be learned separately for each type of animal (e.g., Attune Animal (Lynx), Attune Animal (Crow)) to which the adept wants to attune. A character may only attune a number of individual animals equal to her initiate grade. The minimum Force of the bonding ritual increases by 1 for each existing bonded animal. The adept may not receive the benefit from more than one attuned animal in a single action. The attunement bond may be voluntarily severed as a free action or if the animal (or character) dies. Karma spent on the bond is lost when the bond is severed. Attuned animals may be used as a material link (p. 297, SR5) to the adept. Attuned animals can be further enhanced through the Empowering ritual (p. 128).",
    },

    auguryAndSortilege: {
      type: "Material Link",
      name: "Augury and Sortilege",
      description:
        "Augury is the ritual of divination where the magician must assense the subject (person, place, or object) or have a viable material link (p. 297, SR5). Within the ritual circle, the initiate enters a mild trance and interprets the symbolism and metaphors presented through the aether. Sortilege involves using specific reagents (casting bones, reading tea leaves, etc.) or fetishes (tarot cards) as part of the divination ritual. The ritual allows the leader to ask one question about an event in the subject’s future. The question is answered through portent appropriate to the tradition and/or the divination technique. The leader interprets the answer using Arcana with a threshold based on the question asked, rolling Arcana + Logic with a limit based on the net successes of the ritual. Subsequent divinations on the same subject matter increase the threshold by 1. This ritual takes (Force) hours to complete. Requires Divination. Failure to meet the threshold results in a useless answer. Net successes from the Arcana Test above the threshold determine how helpful or understandable the answer was to the leader.",
    },
    bloodBond: {
      type: "Material Link",
      name: "Blood Bond",
      description:
        "This dark ritual uses blood magic to bond the magician to a genetically related subject. The minimum Force of the ritual is equal to the subject’s Willpower. Once completed, the leader may spend Karma equal to 2 + Willpower of the subject to make the bond permanent. This bond creates a low-level telepathic link between the leader and the subject, allowing them to sense each other’s emotional states and general whereabouts. The magician can use Empathic Healing (p. 171) to transfer physical damage from himself to the subject if the subject is within (100 x Magic Rating) meters from the magician. The leader can bond up to his Charisma in subjects. This ritual takes (Force) days to complete. Requires Sacrifice.",
    },

    bloodRite: {
      type: "Blood",
      name: "Blood Rite",
      description:
        "Blood Rite is a specialized ritual that can only be performed if all magicians know the Sacrifice metamagic (p. 90). It works similarly to Sacrifice but can use multiple victims to generate Blood Magic Points, up to net successes of the ritual. The minimum Force of the ritual is equal to the victim’s Willpower (or the highest Willpower if multiple victims are used). Blood Magic Points generated may be stored in an athame (p. 90) bonded to the magician. Multiple magicians may use the Sacrifice to 'charge' their athame. This ritual takes (Force) hours to complete. Requires Sacrifice.",
    },

    bloodSight: {
      type: "Organic Link",
      name: "Blood Sight",
      description:
        "The Blood Sight ritual allows the magician to discern details about a person who left blood behind. A sample of blood is required for the ritual; alternatively, the ritual circle can be drawn around the blood itself. Environmental factors can hinder the Blood Sight reading, increasing the Force Resistance of the ritual. This ritual takes (Force) minutes to complete and cannot be performed on blood more than twenty-four hours old. Requires Necromancy.",
    },

    callingSpiritType: {
      type: "Contractual",
      name: "Calling [Spirit Type]",
      description:
        "The Calling ritual allows a magician to summon spirits that do not belong to their tradition. Each Calling ritual is specific to a spirit type (e.g., Calling Fae, Calling Phantoms). The magician must create paraphernalia, unique conjuring materials (specific reagents) or perform the ritual in specific conditions (like certain places or astronomical events). Crafting paraphernalia requires a successful Alchemy + Magic [Force] (Force of the target spirit, 1 day) Extended Test. The ritual Force required to call a spirit is equal to the Force of the spirit being called. A ward separates the spirit from the magician during the ritual. The spirit appears in the center of the circle once the ritual is completed. The spirit stays within the circle for a number of hours equal to the Force of the ritual before returning to astral space. While in the circle, the spirit is temporarily immune to its inherent weaknesses and attacks by the magician are reduced by the Force of the circle. If the ritual fails, the spirit doesn’t appear, and the paraphernalia and reagents are lost. This ritual is dangerous due to its uncertainty and escalating risk. Requires Occult Knowledge.",
    },
    chargedWard: {
      type: "Anchored",
      name: "Charged Ward",
      description:
        "Charged wards behave like an electric fence, striking back against intruders or astral attackers. When attacked astrally, the ward discharges mana energy, dealing stun damage with a Damage Value equal to the ward's Force. When attacked with spells, the Charged Ward can reflect the spell back onto the caster at half the original spell's Force (rounded up) if it successfully resists the attack (Force 1 spells are not reflected). Net hits from the resistance become the hits in the reflected spell's Spellcasting Test, limited by the original spell's Force. If an intruder attempts to pass through the ward, the ward inflicts Stun damage equal to its Force plus net hits if it wins the Opposed Test. Charged wards are difficult to distinguish from basic wards, requiring an Assensing + Intuition [Astral] (3) Test to spot the difference. Requires Reflection (p. 151).",
    },

    circleOfCleansing: {
      type: "Anchored, Mana",
      name: "Circle of Cleansing",
      description:
        "The Circle of Cleansing ritual creates a sphere of mana energies that counters positive background counts surrounding the anchor point. It affects an area with a radius in meters equal to the leader’s Magic rating. Negative background counts (mana ebbs and voids) are not affected. The Force of the ritual must match the background count level. Net successes reduce the background count by 1 within the sphere. Those within the circle can perform magical activities based on the reduced background count. The base duration is one hour, plus additional hours equal to net successes. If the background count changes (e.g., mana storm), reduce its effects by the Force of the circle for those within. This ritual takes (Force) hours to complete. Requires Cleansing.",
    },

    deathMark: {
      type: "Organic Link, Spotter",
      name: "Death Mark",
      description:
        "The Death Mark ritual allows the magician to trace the astral trail left by a corpse back to its point of death. It enhances astral tracking (p. 315, SR5) by adding dice equal to net successes from the ritual to the spotter’s test. The mark is temporary, lasting the person’s essence in days. It can be cleansed (p. 154) with a force equal to the person's essence. This ritual takes (Force) hours to complete. Requires Necromancy.",
    },

    dispersionCircle: {
      type: "Anchored",
      name: "Dispersion Circle",
      description:
        "Dispersion Circle is a sphere centered on an anchor with a radius equal to the magician’s Magic Rating in meters. It diffuses alchemical preparations uniformly throughout the sphere. When a preparation enters, roll an Opposed Test of the ritual’s Force vs. the preparation’s Force. Each net success quickens the preparation's decay time by 10 minutes. This ritual takes (Force) hours to complete. The Circle lasts (Force) hours.",
    },

    doorWards: {
      type: "Anchored",
      name: "Door Wards",
      description:
        "Door Wards are enchantments anchored to doorways, absorbing sustained magic crossing the threshold. Each sustained spell that crosses through reduces its net successes by 1. Active foci with a Force less than the ward are deactivated upon crossing. This ritual takes (Force) hours to complete. Door Wards last (Force) days.",
    },
  };
  return rituals;
}
