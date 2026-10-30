# The Perfect Tower II — Import Code Library

Blueprints, challenge solutions, regional progression, resource farming, Power Plant layouts, Facility AI scripts, and utility imports

## Compatibility and verification

The current official tools use game data from v1.0.15. An important compatibility issue is that v0.45.0 changed the game's import/export system, and version 1.0 broke Turbo Exec, an enhancement required by some older automation scripts. Consequently, an import string appearing in a community guide does not guarantee that it works in the current game.

[image](https://www.google.com/s2/favicons?domain=https://www.perfecttower2.com\&sz=32)

The Perfect Tower II+1



I'll distinguish three categories throughout the catalog:

- Published code: The complete import string is available from the cited source.
- Community strategy: Instructions or a build exist, but its compatibility is unverified.
- Missing code: The source describes a solution but does not publish an importable string.

## 1. Power Plant yellowprints

The community wiki publishes five Power Plant layouts with actual import codes, costs, capacities, and prerequisites. Its mid-game layout is explicitly marked outdated.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II



| Layout             | Published grid cost | Power capacity | Approximate progression          |
| ------------------ | ------------------- | -------------- | -------------------------------- |
| Starter            | 182,300 yellow      | 3.023M         | Early Power Plant                |
| Cheaper plasma     | 3 × 10¹⁸ yellow     | 2.32T          | After Power Plant Floor 2        |
| Mid-game plasma    | 4 × 10²⁴ yellow     | 69.35B         | After Floor 2; outdated          |
| No-Dyson plasma    | 4 × 10²⁴ yellow     | 1.873T         | Plasma technology progression    |
| Late-game Infinity | 3 × 10⁴⁸ yellow     | 88.824T        | MT15 / Electricity Infinity perk |

The MT descriptions are approximate, not developer-stated unlock tiers. Costs exclude purchasing technology upgrades and unlocking the relevant building facilities.

The source also reports average production of 132,600 power/sec for Starter and 2.149 × 10¹⁶ power/sec for the late-game layout after reaching maximum capacity. Production for the other three layouts is not specified.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II



### Complete Power Plant import strings

Each block contains the published yellowprint code. Copy the entire line into the Power Plant's import interface. The codes are transcribed from the community wiki; they have not been tested here in-game.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II



Starter — 182,300 yellow

```
tZBBCsJADEWv4gm8wOxcCO4KeoG0Rh1IkzDNMMztla4M0jJI+1bJ/+GHRKVgUgK2IwncJVu48CNytHroXjBh2JmKRFJOYIaphskQxltOfWT803I4R6Nik7J1xCBAV5MET5zrc04MAy7qBT5ndXlUp/5Ero+3LHU037b87g0ivLPWffMG
```

Cheaper plasma — 3 × 10¹⁸ yellow

```
7ZbLDsIgEEX/yI1Ldm7cGvUHpjJVEjo0PEL4e+uiSWliA30k1nY3cAfunCEEauVR1xLIHqQCrpxlgkpBwgbGg1F0RkINVmnWZJkK7k4XgrAvFtLhCaxFHb7GXhBvlxslQV+AUDIPjZoz39kmxTYHIxZLZ4SiK8Ljo71QClcdb00MzzTrFOJuzlzIvVJjjsnnOIU2LmUu3sSjj83/CzV22yqpRt6m5YTLQI4sZufb+dbKF1BK5dvMJUapzMtXEpv3npotNWL8H2qNnRj/txoUh27V744yCN8=
```

Mid-game plasma — 4 × 10²⁴ yellow (outdated)

```
7ZW/DsIgEMbfyMWxm4urUV/gKlcluR4Nf9Lw9nZpIh1aaIrW6sR3BO6+30GgUS3qhoDtjhQI5WwhuZIsrS8qZ6TiM8LNKj0aeSRS7QGsRe2/Jorn2x57jr6sieGznSjJYZ8jRsc7aqEbrk6XkjFhW6qhd4HH6AA5R4ExIOGN4iMyatgk7YCv+wlMDX35cOkDSbp6f+k03JfzlgV44DUECSFHT1ij6FNOyiywKQYSbu58ykkZIC6aee6j9MdLwJMsVkWXIzKKQJ+AkQLel+k1uf2JDjwB
```

No-Dyson plasma — 4 × 10²⁴ yellow

```
7ZbBDoIwDIbfyItHbjyBUV+gSNUlZSVjy8Lby4WEmaBsrOiBE38zUv6Pdltb9mhaAm0PxFCzs0VZ3F2nWJ8RbpZNRNQxgTmBRtpYphrukYh9Cdai6TNFw8/sGrg6UymNqUBhEgmbFTnMobN0gHxVYrHCAoT+nkjKNcfLoOHxvjhb/kwZDdajx68yFtrD8Bg/FASho/n3Qq9L88UwSZOmESzN90+kH2xu0p17UfeNutU57JWuf9jqMpftFCpWy9+48rPVGn75ASt1Jl1DlUsnen8B
```

Late-game Infinity — 3 × 10⁴⁸ yellow

```
5ZbBDoIwDIbfyItHbl68GvUFiiu6ZHSk20J4e/FgMpagDBgEvXXp1v1furWtdI1cKSC7UxqEdjaTVEiStslEYzQdkZDBas7aXaaEq+NcEobOWpJ4u/psoxXwCQiVb6Y9GcPQdRbOSE1nhNvL90AlXbm/tDbcJwkFizxgMZo+UNrFGJxDRnEA2wpqEvHNRN6jM83rnIyWIN3rofmhVkNOjtZzQXLgJcG8T/QPuIuCfahEP/AtIzroRmttRP8MOm+uHG6ih/pCA4aR+Y2r1vEv9nucAWIiMpto9B1pzjz3PgE=
```

How to choose: Use Starter for initial Power Plant development; Cheaper Plasma after unlocking the relevant second-floor technology; No-Dyson if you specifically want a plasma configuration that does not depend on Dyson Sphere bonuses; Late-game Infinity only after meeting its extensive prerequisites.

You can compare and reconstruct layouts using the [official Power Grid Designer](https://www.perfecttower2.com/tools/power-grid/).

## 2. Challenge blueprint database: all 15 regions

The Bluecats community collection is the most complete public repository documented here for hard-mode challenges.

# 90/90

Pre-Infinity hard mode

All region/challenge combinations have at least one published code

# 76/90

Pre-Era hard mode

Earlier-access solutions with 14 combinations missing

Complete code collections

[All 90 pre-Infinity hard-mode challenge solutions](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/Challenges/Hardmode/Pre%20Inf/README.md)[Pre-Era hard-mode challenge solutions](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/Challenges/Hardmode/Pre%20Era/README.md)[Additional fast hard-mode solutions](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/Challenges/Hardmode/Speed/README.md)

Only populated code blocks count toward coverage. The pre-Infinity page contains published codes covering all 90 challenges, including several alternatives. The Speed collection has only three populated blueprint codes; its other entries are placeholders.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub+1



### Coverage by region

| Region         | Pre-Era codes available | Pre-Infinity codes available |
| -------------- | ----------------------- | ---------------------------- |
| Forest         | 6/6                     | 6/6                          |
| Desert         | 6/6                     | 6/6                          |
| Winter         | 3/6                     | 6/6                          |
| Underground    | 6/6                     | 6/6                          |
| Volcano        | 6/6                     | 6/6                          |
| High Mountain  | 5/6                     | 6/6                          |
| Jungle         | 4/6                     | 6/6                          |
| Metallic Ruins | 5/6                     | 6/6                          |
| Beach          | 5/6                     | 6/6                          |
| Ocean          | 5/6                     | 6/6                          |
| Neutral        | 5/6                     | 6/6                          |
| Dark Realm     | 5/6                     | 6/6                          |
| Heaven         | 6/6                     | 6/6                          |
| Universe       | 4/6                     | 6/6                          |
| Chaos          | 5/6                     | 6/6                          |

The Pre-Era page explicitly warns that some solutions require modules that are difficult to obtain by MT7. These are availability counts, not guarantees of completion. Neither collection was live-tested against the current game version.

### Example: Forest Challenge 1, pre-Era hard mode

```
YzEtMTtiYXJyaWVyLmZpcmU7Zm91bmRhdGlvbi5tYWdtYTtzaGllbGQuYmFzaWM7Zm91bmRhdGlvbi5kaWFtb25k
```

Source: [Forest pre-Era builds](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/Challenges/Hardmode/Pre%20Era/README.md#forest).

### Example: Forest Challenge 2, pre-Era hard mode

```
Ncg7DoAgDADQqxB2iTjKUYxD5aONQAkUF+Pdndhe3iuP2H2pmLnJVWzS6mkRF1QntJoNMIO9VeqRsV3EIwJWP9yK986cGFg9FC1kMoF6dsBIWSU4E8j9+wE=
```

The author marks this one No Accel, meaning Wave Streaming should be turned off, and lists a slower alternative.

[image](https://www.google.com/s2/favicons?domain=https://raw.githubusercontent.com\&sz=32)

raw\.githubusercontent.com



### Missing pre-Era solutions

The repository does not provide confirmed pre-Era import codes for these 14 combinations:

\- Winter C4, C5, C6; High Mountain C5; Jungle C3 and C6; Metallic Ruins C3; Beach C5; Ocean C2; Neutral C1; Dark Realm C1; Universe C1 and C3; Chaos C1.

Each has a published pre-Infinity hard-mode solution in the more complete collection. For ordinary (non-hard-mode) challenge imports, the [ExpertLove community guide](https://github.com/ExpertLove/perfect-tower2-full-guide/blob/main/README.md) and the [Challenge wiki](https://wiki.perfecttower2.com/Challenge) contain additional examples, but neither establishes current, complete normal-mode coverage.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

ExpertLove/perfect-tower2-full-guide · GitHub+1



## 3. Blueprints for Military Tier milestones and farming

The following five reusable blueprints are available, with complete import strings, in the [Bluecats blueprint collection](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md). These are more useful for general progression than having a separate build for each region.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



DeathCat — Wave 100 billion

MT7 → MT8

Designed to reach Forest Easy Wave 100B with tier-5 modules and minimal permanent stat bonuses. Prioritize this when unlocking Era is the next military objective.

[Copy DeathCat import code](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md#deathcat)

AllBlue — Era progression

MT12+ according to the author; not designed for Infinity 1+

A broad offensive blueprint for pre-Infinity combat. Requires adjustments or accompanying automation for Era Shield behavior. Optional advanced modules can improve it.

[Copy AllBlue blueprint](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md#allblue)

RpCat — Infinity combat and progression

Early Infinity onward; scales better with later unlocks

A self-sustaining build. It intentionally benefits from specific enemy attack-speed interactions rather than conventional tower attacks. The author provides a replacement-module recipe for players missing Power Conversion and notes additional requirements around the Light Stone Infinity perk.

[Copy RpCat blueprint](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md#rpcat)

SpookyCat — High-speed kill farming

MT12+; particularly Halloween event farming

Optimized for fast kills, especially with Halloween Cauldron settings. The author recommends staying below Infinity 1 because Infinity mechanics slow its kill rate. Includes survival and damage substitutions.

[Copy SpookyCat blueprint](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md#spookycat)

EveryCat — Find missing modules

Module collection utility; not a combat build

Deliberately includes virtually every module so the import preview can show which ones you have not unlocked. This is especially useful when a military promotion requires a large module collection.

[Copy EveryCat diagnostic blueprint](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20BPs/README.md#everycat)

### Which blueprints cover each MT?

| Progression target         | Best documented code source                              | Confidence                                               |
| -------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| MT0–MT3, first regions     | Wiki challenge builds and beginner guide                 | Historical examples                                      |
| MT4–MT5, module collection | EveryCat; short region-farming builds                    | Utility documented                                       |
| MT6–MT7, Wave 1M           | General high-kill blueprints and acceleration software   | Strategy documented; no unique verified MT-specific code |
| MT7–MT8, Wave 100B         | DeathCat                                                 | Published purpose-built code                             |
| MT8–MT11, Era progression  | AllBlue; Era automation                                  | Published, later MT requirement                          |
| MT11–MT12, Era 100B        | Community MT11–13 guide and AI package                   | Historical                                               |
| MT12–MT14, early Infinity  | RpCat                                                    | Published purpose-built code                             |
| MT14–MT15, Infinity 25     | MT14–15 community guide, RpCat, Infinity farming scripts | Historical, not current-version verified                 |

Other relevant milestone collections are [MT11–13 Era/Infinity blueprint and script](https://wiki.perfecttower2.com/Military_Tier_11-13), [MT14–15 Infinity farming blueprint and script](https://wiki.perfecttower2.com/Military_Tier_14-15), and [ExpertLove's Wave 100B and progression builds](https://github.com/ExpertLove/perfect-tower2-full-guide/blob/main/README.md). Those pages contain import strings or linked packages alongside their instructions.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II+2



## 4. Resource farming: which code to use for every resource

An important distinction: a tower blueprint earns resources through Tower Testing, but Factory producers can manufacture specific resource types passively. A Workshop blueprint is not a substitute for the required Factory producers, Trading Post bonuses, or conversion systems.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II+1



### Resource-farming methods

| Resource    | Best farming mechanism                                    | Relevant import/script                            |
| ----------- | --------------------------------------------------------- | ------------------------------------------------- |
| White cubes | High-wave, high-kill-rate Tower Testing                   | Wave-farming combat blueprint; DeathCat for MT7–8 |
| Yellow      | Factory Power Plant producer or white-resource conversion | Factory crafting automation                       |
| Orange      | Factory Mine producer or conversion                       | Factory automation plus Autominer                 |
| Red         | Factory producers or conversion                           | Factory automation                                |
| Purple      | Headquarters producer or conversion                       | Factory automation                                |
| Pink        | Arcade producer or conversion                             | Factory automation, plus Arcade-specific tools    |
| Green       | Laboratory producer or conversion                         | Factory automation, plus Laboratory workflows     |
| Cyan        | Shipyard producer or conversion                           | Factory automation                                |
| Light blue  | Trading Post producer or conversion                       | Factory automation; Trading Post crate scripts    |
| Blue        | Workshop producer or conversion                           | Factory automation                                |
| Grey        | Museum producer or conversion                             | Factory automation; Power Stone management        |
| Brown       | Construction Firm producer or conversion                  | Factory automation                                |
| Black       | Statue of Cubos producer or conversion                    | Factory automation                                |
| Gems        | Factory gem producer and other gem sources                | Factory automation                                |
| Exotic gems | Factory exotic-gem producer and other sources             | Factory automation; progression-dependent         |

The central script for producing resource-generating equipment is d0sboots' Factory Automation:

[Factory Automation — complete importable script package](https://github.com/d0sboots/PerfectTower/blob/main/README.md#factory-automation)

What it does: Automatically processes ores and dust, crafts intermediate parts, produces machines and producers, and uses items already in inventory before crafting replacements.

How to use: Import the package and enable its two scripts. Open Factory; choose quantity, tier, category, and item using the documented WASD controls, then press F to craft.

Prerequisites: Facility AI (MT4), sufficient materials, relevant Factory machines, and the Chemical Lumps exotic skill for the documented dust-handling method.

When useful: Immediately after MT4, increasingly valuable when manufacturing tier-5 producers and other high-tier equipment.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



Factory planning tools

[Official Factory Planner](https://www.perfecttower2.com/tools/factory-planner/)[Factory producer outputs and recipes](https://wiki.perfecttower2.com/Factory)

These help determine material requirements before activating the crafting script, including machines, ores, shards, and crafting time.

### Non-cube resources and currencies

For module fragments, use a strong Infinity combat blueprint and upgrade the Infinity Grid and Anvil as progression allows. For elemental essence, use the corresponding Laboratory/Era experiments and any appropriate supported automation. For Power Stones, Museum production and combining are relevant; for crates, Trading Post systems matter more than Workshop combat builds.

Scripts cover several of these workflows, but current-version imports are not available for every resource and currency. The next section identifies available packages and their limitations.

## 5. Facility AI script library

All Facility AI scripts require the AI functionality unlocked at MT4. Some additionally require particular building upgrades, software, modules, or later progression.

### A. Bluecats automation packages

Source: [Bluecats AI collection and import codes](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/bluecat%20AIs/README.md)

| Script      | What it does                                                                                                                | When to use                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| WaterCat    | Enables/disables Headquarters software using configurable security thresholds                                               | Switching between different acceleration strategies                |
| LazyCat     | Switches among six saved software configurations using keyboard shortcuts 1–6                                               | Players frequently alternating between farming and progression     |
| EarthCat    | Checks the Wave, Era, and Infinity highscores of every region/difficulty combination against specified targets              | Completing all 90 combinations for acceleration bonuses            |
| bluekitties | Automatically restarts runs after a configured time; can react to death and avoid resetting valuable acceleration           | Long, repetitive Tower Testing sessions                            |
| TrueCat     | Determines the current region and difficulty, for use inside other scripts                                                  | Building region-aware automation; requires being at your highscore |
| DeluxeCat   | Combines restart timing, lag reduction, software control, Era/Infinity disabling, and multiple active-skill control methods | Advanced Tower Testing automation                                  |

DeluxeCat is particularly worth investigating because it consolidates features that would otherwise require several separate scripts. Its source explains four skill-casting behaviors: constant skill use, delayed use, one-time use, and BORF-style skill spam.

Not all entries are standalone import strings: some are script packages or examples meant to be integrated into other scripts. Import the complete package where specified.

### B. d0sboots' automation collection

Primary source: [d0sboots — AI Scripts and Utilities](https://github.com/d0sboots/PerfectTower/blob/main/README.md)

| Script                                                                                                                                   | Description and use                                                                                                            | Compatibility note                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [Simple Skill](https://github.com/d0sboots/PerfectTower/blob/main/README.md#simple-skill-script)                  | Constantly activates the first equipped active skill during Tower Testing. MT4+, useful for almost any active-skill blueprint. | No Turbo Exec requirement stated    |
| [Factory Automation](https://github.com/d0sboots/PerfectTower/blob/main/README.md#factory-automation)             | Crafts Factory items, machines and producers in batches using keyboard controls.                                               | Requires supporting Factory skills  |
| [Auto Miner V3](https://github.com/d0sboots/PerfectTower/blob/main/README.md#auto-mining-script-v3)               | Automatically digs every available Mine tile upon entering the Mine.                                                           | MT4+; can cause lag                 |
| [Example Miner](https://github.com/d0sboots/PerfectTower/blob/main/README.md#example-miner)                       | Simpler Mine automation example, useful for learning how Mine commands work.                                                   | Educational and practical           |
| [Museum Combiner](https://github.com/d0sboots/PerfectTower/blob/main/README.md#museum-combiner-v4)                | Buys and combines Power Stones according to a configured budget.                                                               | Outdated: requires Turbo Exec       |
| [Auto Adventure](https://github.com/d0sboots/PerfectTower/blob/main/README.md#auto-adventure)                     | Automates actions for the Adventure minigame.                                                                                  | Verify Adventure prerequisites      |
| [Adventure Map](https://github.com/d0sboots/PerfectTower/blob/main/README.md#adventure-map)                       | Assists with navigation in Adventure.                                                                                          | Requires associated Adventure setup |
| [Timed Task Looping](https://github.com/d0sboots/PerfectTower/blob/main/README.md#timed-task-looping)             | Executes configurable periodic tasks, such as checking buildings or collecting production.                                     | MT4+; customize intervals           |
| [Autoclicker](https://github.com/d0sboots/PerfectTower/blob/main/README.md#autoclicker)                           | Rapidly clicks the current mouse position, toggled with C.                                                                     | MT4+; don't combine with Turbo Exec |
| [Factory Auto-Trasher](https://github.com/d0sboots/PerfectTower/blob/main/README.md#factory-auto-trasher)         | Removes unwanted items, especially from Mine Floor 2.                                                                          | Can work without Turbo Exec         |
| [Dust Up-tierer](https://github.com/d0sboots/PerfectTower/blob/main/README.md#dust-up-tierer)                     | Crushes ores and converts dust toward configured tier ratios.                                                                  | MT4+; supports Factory workflows    |
| [Button Coordinate Finder](https://github.com/d0sboots/PerfectTower/blob/main/README.md#button-coordinate-finder) | Identifies interface coordinates for developing mouse-based scripts.                                                           | Primarily a script-development tool |
| [AI Benchmarker](https://github.com/d0sboots/PerfectTower/blob/main/README.md#ai-benchmarker)                     | Benchmarks AI execution performance to identify script-speed limitations.                                                      | Diagnostic utility                  |
| [RNG Manipulation](https://github.com/d0sboots/PerfectTower/blob/main/README.md#rng-manipulation)                 | Manipulates specific random-event behavior involving Rak's Curse.                                                              | Specialized; version-dependent      |
| [Auto Era Disabler](https://github.com/d0sboots/PerfectTower/blob/main/README.md#auto-era-disabler)               | Disables Era powers as XP becomes available, following a configurable priority order.                                          | MT8+; useful for Era progression    |
| [Trading Post Crate Spam](https://github.com/d0sboots/PerfectTower/blob/main/README.md#trading-post-crate-spam)   | Repeatedly alternates trading and idle states to accumulate crates.                                                            | Outdated: requires Turbo Exec       |

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub+1

Compatibility warning: The developer of this repository explicitly states that Turbo Exec stopped working with the game's v1.0 release. Scripts requiring it should not be classified as operational in v1.0.15 without a verified replacement. That includes the listed Museum Combiner and Trading Post Crate Spam routines. Other scripts also need testing; lack of a stated Turbo Exec dependency is not proof of compatibility.

### Example: Simple Skill — complete AI import code

This script continually uses the first active skill during Tower Testing and is a reasonable starting point for learning Facility AI automation.

```
lZFNb5tAEIb/i6++wBIqb6UcAIeFBCOg5rPqYWc3MtBdjIwBQ9T/XmG3UizlkOxpdt7RzDvPvK06dqrac7f6/nO1VcIxnvQ9TdURSLKnSHRguIZhGIQj+1RkybhNeQlp3INMNCaxCjI0l4IndMvTzI9B44KJSDAtakEye9G3kguQyUTTXV8grAAS0iL+AI2v5KmuGHK3lEU5wmdG7Ilm/gCVPnPneekRFegy5NLuvMZXmBR9MelNkYVujnDPtKiEJnyy6stMs1YEe2PNlO5OM2oFv59nWseNp/ntq4zXwZIneAoyfqRZJALhn2h66dhkTjzVe5rqTWDhGtBlYPXDR17mr3h5qceBIfGt2D9scoQ70FzMUdlyEq9jdG6BXGbXeVZB6svuGw/981dy5cq20s+AIhVI3PPMFzTVZ07snhtlDeh/7Jqf4n74kPtv0JIKSBxygrUic3tKkhKc6OhJtXy9mxOaweH9/9rv9ky7AYKrPB2X3aeFo9f44t5n+BI41zvg3Vaff4x3mhNY+Mbx8Pi4+vXnLw==
```

Source: [d0sboots — Simple Skill Script](https://github.com/d0sboots/PerfectTower/blob/main/README.md#simple-skill-script). Test after import and enable the script before starting Tower Testing.

### Example: Basic challenge skill spam

This script is published at the top of both Bluecats hard-mode challenge collections. It attempts to activate equipped instant skills in a repeating sequence.

```
DmNoYWxsZW5nZSBzcGFtAQAAAAZ3YWtldXAAAAAACgAAABh0b3dlci5tb2R1bGUudXNlcG9zaXRpb24IY29uc3RhbnQCAQAAAAhjb25zdGFudAUAAAAAAAAAABh0b3dlci5tb2R1bGUudXNlcG9zaXRpb24IY29uc3RhbnQCAgAAAAhjb25zdGFudAUAAAAAAAAAABh0b3dlci5tb2R1bGUudXNlcG9zaXRpb24IY29uc3RhbnQCBAAAAAhjb25zdGFudAUAAAAAAAAAABd0b3dlci5tb2R1bGUudXNlaW5zdGFudAhjb25zdGFudAICAAAAF3Rvd2VyLm1vZHVsZS51c2VpbnN0YW50CGNvbnN0YW50AgEAAAAXdG93ZXIubW9kdWxlLnVzZWluc3RhbnQCAwAAAAxnZW5lcmljLmdvdG8IY29uc3RhbnQCAAAAABd0b3dlci5tb2R1bGUudXNlaW5zdGFudAhjb25zdGFudAIEAAAAF3Rvd2VyLm1vZHVsZS51c2VpbnN0YW50CGNvbnN0YW50AgUAAAAXdG93ZXIubW9kdWxlLnVzZWluc3RhbnQCBgAAAA==
```

Source: [Pre-Infinity challenge collection](https://github.com/bluecats-Perfect-Tower-2/bluecats-PerfectTower2-comp./blob/main/Challenges/Hardmode/Pre%20Inf/README.md). Appropriate only for builds whose equipped active skills match its expected positions.

## 6. Additional repositories with relevant scripts and import data

[IgneousRed — Performance-oriented AI scripts](https://github.com/IgneousRed/PerfectTower)

Applies to: MT4+, particularly Mine and Factory automation.

Contains three Mine implementations (Perf, Norm, Golf), Factory Crusher/Mixer/Boiler scripts, specialized trash automation, and an associated scripting library. Some implementations are optimized for more available AI actions or require Turbo Exec; those dependencies must be checked before importing or compiling.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



[rus9384 — Omni-Tower, Essence Clicker, Watchtower](https://github.com/rus9384/TPT2)

Applies to: Tower automation, elemental essence, general blueprint support.

Includes Omni-Tower AI, Essence Clicker, the Watchtower blueprint, and a scripting library. Some content is distributed as source/project files rather than a ready-to-paste import code.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



[Florin_TK — Tower Testing and BORF packages](https://github.com/dbollu/TPT2)

Applies to: MT4+ and specialized combat automation.

Contains Tower Testing scripts, BORF macro packages, and supporting library components. The author explicitly lists MT4 as the starting prerequisite for its primary automation features.

[image](https://www.google.com/s2/favicons?domain=https://github.com\&sz=32)

GitHub



[Community AI Scripts Guide](https://wiki.perfecttower2.com/AI_Scripts_Guide)

Applies to: Factory automation, mining, Museum upgrades, Adventure, and other common tasks.

A directory of scripts and their usage information. Several links point to older code, so treat it as a discovery resource rather than a verified v1.0.15 catalog.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II



[Historical AI Script Repository](https://wiki.perfecttower2.com/AI_Script_Repository)

Applies to: Early Tower Testing, active skills, and scripting examples.

Explicitly marked obsolete by the wiki. Useful for understanding AI logic, but not recommended as a source of ready-to-use current scripts.

[image](https://www.google.com/s2/favicons?domain=https://wiki.perfecttower2.com\&sz=32)

The Perfect Tower II



## 7. How to import and use these codes

Tower blueprints

Open Workshop or the Tower Testing blueprint interface, select Import, and paste the complete blueprint code. Confirm which modules are missing and replace them before running it.

[Official blueprint builder](https://www.perfecttower2.com/tools/blueprints/)

Power Plant layouts

Unlock the Yellowprints skill, then use the import functionality in the Power Plant. The imported layout still requires the corresponding component technology and enough yellow resources to construct.

[Official Power Grid Designer](https://www.perfecttower2.com/tools/power-grid/)

Facility AI scripts

Unlock AI at MT4, paste the import code into the game's AI import interface, enable the script/package, check its trigger impulses, and open the necessary building. Modify its settings where the author's instructions require it.

[Facility AI mechanics and limitations](https://wiki.perfecttower2.com/AI)

The official [Perfect Tower II tools directory](https://www.perfecttower2.com/tools/) links the module database, blueprint builder, Factory planner, Power Grid designer, enemy calculator, and script editor. The earlier direct Factory Planner subpage link could not be independently verified; use this tools directory instead.

[image](https://www.google.com/s2/favicons?domain=https://www.perfecttower2.com\&sz=32)

The Perfect Tower II+1



## 8. Source registry for copying

20 direct source URLs

Each line contains the source name and the original URL.

Copy all

Complete published codes are available through Find & copy imports on every page. Author links are retained for credits and documentation.

## 9. Completeness and remaining gaps

| Category                                             | Research coverage                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------ |
| Hard-mode challenges, pre-Infinity                   | 90/90 combinations have published import codes                           |
| Hard-mode challenges, pre-Era                        | 76/90 combinations have published import codes                           |
| Fast hard-mode alternative builds                    | 3 populated codes in the inspected Speed collection                      |
| Power Plant layouts                                  | 5 complete, copyable codes above                                         |
| General-purpose combat/diagnostic blueprints         | 5 documented Bluecats builds                                             |
| Facility AI                                          | More than 20 named scripts/packages identified across collections        |
| Every regular challenge with a current verified code | Not established                                                          |
| Separate verified blueprint for every MT             | Not established                                                          |
| Separate import code for every resource/currency     | Not established; many depend on Factory producers and building mechanics |
| Live verification on v1.0.15                         | Not performed                                                            |

Search the local import library by build name, region, category or progression stage. Each entry includes its source and import format.

Some authors publish editable workspaces instead of game import strings. These are labeled separately; compatibility notes still apply.
