var config = {
    sprites: {
        characters: "assets/sprites/characters.png",
        enemies: "assets/sprites/monsters.png",
        tiles: "assets/sprites/tiles.png"
    },
    levels: [
        //TODO: needs to take this into account- http://www.gamefaqs.com/nes/563408-dragon-warrior/faqs/18342
        { max_hp: 15,  max_mp: 0,   strength: 4,   agility: 4,   required_exp: 0 },
        { max_hp: 22,  max_mp: 0,   strength: 5,   agility: 4,   required_exp: 7 },
        { max_hp: 24,  max_mp: 5,   strength: 7,   agility: 6,   required_exp: 23,    spells_learned: ["heal"] },
        { max_hp: 31,  max_mp: 16,  strength: 7,   agility: 8,   required_exp: 47,    spells_learned: ["hurt"] },
        { max_hp: 35,  max_mp: 20,  strength: 12,  agility: 10,  required_exp: 110 },
        { max_hp: 38,  max_mp: 24,  strength: 16,  agility: 10,  required_exp: 220 },
        { max_hp: 40,  max_mp: 26,  strength: 18,  agility: 17,  required_exp: 450,   spells_learned: ["sleep"] },
        { max_hp: 46,  max_mp: 29,  strength: 22,  agility: 20,  required_exp: 800 },
        { max_hp: 50,  max_mp: 36,  strength: 30,  agility: 22,  required_exp: 1300,  spells_learned: ["radiant"] },
        { max_hp: 54,  max_mp: 40,  strength: 35,  agility: 31,  required_exp: 2000,  spells_learned: ["stopspell"] },
        { max_hp: 62,  max_mp: 50,  strength: 40,  agility: 35,  required_exp: 2900 },
        { max_hp: 63,  max_mp: 58,  strength: 48,  agility: 40,  required_exp: 4000,  spells_learned: ["outside"] },
        { max_hp: 70,  max_mp: 64,  strength: 52,  agility: 48,  required_exp: 5500,  spells_learned: ["return"] },
        { max_hp: 78,  max_mp: 70,  strength: 60,  agility: 55,  required_exp: 7500 },
        { max_hp: 86,  max_mp: 72,  strength: 68,  agility: 64,  required_exp: 10000, spells_learned: ["repel"] },
        { max_hp: 92,  max_mp: 95,  strength: 72,  agility: 70,  required_exp: 13000 },
        { max_hp: 100, max_mp: 100, strength: 72,  agility: 78,  required_exp: 16000, spells_learned: ["healmore"] },
        { max_hp: 115, max_mp: 108, strength: 85,  agility: 84,  required_exp: 19000 },
        { max_hp: 130, max_mp: 115, strength: 87,  agility: 86,  required_exp: 22000, spells_learned: ["hurtmore"] },
        { max_hp: 138, max_mp: 128, strength: 92,  agility: 88,  required_exp: 26000 },
        { max_hp: 149, max_mp: 135, strength: 95,  agility: 90,  required_exp: 30000 },
        { max_hp: 158, max_mp: 146, strength: 97,  agility: 90,  required_exp: 34000 },
        { max_hp: 165, max_mp: 153, strength: 99,  agility: 94,  required_exp: 38000 },
        { max_hp: 170, max_mp: 161, strength: 103, agility: 98,  required_exp: 42000 },
        { max_hp: 174, max_mp: 161, strength: 113, agility: 100, required_exp: 46000 },
        { max_hp: 180, max_mp: 168, strength: 117, agility: 105, required_exp: 50000 },
        { max_hp: 189, max_mp: 175, strength: 125, agility: 107, required_exp: 54000 },
        { max_hp: 195, max_mp: 180, strength: 130, agility: 115, required_exp: 58000 },
        { max_hp: 200, max_mp: 190, strength: 135, agility: 120, required_exp: 62000 },
        { max_hp: 210, max_mp: 200, strength: 140, agility: 130, required_exp: 65535 }
    ],
    weapons: {
        none:           { attack: 0,  price: 0 },
        bamboo_pole:    { attack: 2,  price: 10 },
        club:           { attack: 4,  price: 60 },
        copper_sword:   { attack: 10, price: 180 },
        hand_axe:       { attack: 15, price: 560 },
        broad_sword:    { attack: 20, price: 1500 },
        flame_sword:    { attack: 28, price: 9800 },
        erdricks_sword: { attack: 40, price: 0 }
    },
    armors: {
        none:           { defense: 0,  price: 0 },
        clothes:        { defense: 2,  price: 20 },
        leather_armor:  { defense: 4,  price: 70 },
        chain_mail:     { defense: 10, price: 300 },
        half_plate:     { defense: 16, price: 1000 },
        full_plate:     { defense: 24, price: 3000 },
        magic_armor:    { defense: 24, price: 7700 },
        erdricks_armor: { defense: 28, price: 0 }
    },
    shields: {
        none:           { defense: 0,  price: 0 },
        leather_shield: { defense: 4,  price: 90 },
        iron_shield:    { defense: 10, price: 800 },
        silver_shield:  { defense: 20, price: 14800 }
    },
    items: {
        herb: { price: 24 },
        torch: { price: 8 },
        magic_key: { price: [53, 83] },
        dragon_scale: { price: 20 },
        fairy_water: { price: 38 },
        wyvern_wings: { price: 70 },
        cursed_belt: { price: 0, sale_price: 180 },
        cursed_necklace: { price: 0, sale_price: 1250 },
        fairy_flute: { price: 0 },
        silver_harp: { price: 0 },
        stones_of_sunlight: { price: 0 },
        staff_of_rain: { price: 0 },
        rainbow_drop: { price: 0 },
        erdricks_tablet: { price: 0 },
        erdricks_token: { price: 0 },
        ball_of_light: { price: 0 },
        fighters_ring: { price: 0, sale_price: 15 },
        gwaelins_love: { price: 0 }
    },
    spells: {
        heal: {
            show_in_combat: true,
            show_in_explore: true,
            cost: 4,
            effect: function() { player.add_hp(Game.random_number(10, 17)); }
        },
        hurt: {
            show_in_combat: true,
            show_in_explore: false,
            cost: 2,
            effect: function() { Game.combat.enemy_current_hp -= Game.random_number(5, 12); }
        },
        sleep: {
            show_in_combat: true,
            show_in_explore: false,
            cost: 2,
            effect: function() { Game.combat.enemy_status = "sleep"; }
        },
        radiant: {
            show_in_combat: false,
            show_in_explore: true,
            cost: 3,
            effect: function() {
                player.visibility = 3;
                player.radiant_in_effect = true;
                player.radiant_step_counter = 200;
            }
        },
        stopspell: {
            show_in_combat: true,
            show_in_explore: false,
            cost: 2,
            effect: function() { Game.combat.enemy_status = "stopspell"; }
        },
        outside: {
            show_in_combat: false,
            show_in_explore: true,
            cost: 6,
            effect: function() { }
        },
        "return": {
            show_in_combat: false,
            show_in_explore: true,
            cost: 8,
            effect: function() { }
        },
        repel: {
            show_in_combat: false,
            show_in_explore: true,
            cost: 2,
            effect: function() { }
        },
        healmore: {
            show_in_combat: true,
            show_in_explore: true,
            cost: 10,
            effect: function() { player.add_hp(Game.random_number(85, 100)); }
        },
        hurtmore: {
            show_in_combat: true,
            show_in_explore: false,
            cost: 5,
            effect: function() { Game.combat.enemy_current_hp -= Game.random_number(58, 65); }
        }
    },
    enemies: [
        {
            index: 0,
            id: "slime",
            strength: 5,
            agility: 3,
            hp: 3,
            experience: 1,
            gold: 1,
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 1,
            x: 248,
            y: 248,
            width: 32,
            height: 32
        },
        {
            index: 1,
            id: "red_slime",
            strength: 7,
            agility: 3,
            hp: 4,
            experience: 1,
            gold: 2,
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 1,
            x: 312,
            y: 248,
            width: 32,
            height: 32
        },
        {
            index: 2,
            id: "drakee",
            strength: 9,
            agility: 6,
            hp: [5, 6],
            experience: 2,
            gold: 2,
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 1,
            x: 240,
            y: 0,
            width: 48,
            height: 48
        },
        {
            index: 3,
            id: "ghost",
            strength: 11,
            agility: 8,
            hp: [6, 7],
            experience: 3,
            gold: [3, 4],
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 4,
            x: 0,
            y: 112,
            width: 48,
            height: 56
        },
        {
            index: 4,
            id: "magician",
            strength: 11,
            agility: 12,
            hp: [10, 13],
            experience: 4,
            gold: [9, 11],
            special: ["hurt"],
            special_probability: [2],
            sleep_resist: 0,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 1,
            x: 0,
            y: 296,
            width: 48,
            height: 48
        },
        {
            index: 5,
            id: "magidrakee",
            strength: 14,
            agility: 14,
            hp: [12, 15],
            experience: 5,
            gold: [9, 11],
            special: ["hurt"],
            special_probability: [2],
            sleep_resist: 0,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 1,
            x: 304,
            y: 0,
            width: 40,
            height: 48
        },
        {
            index: 6,
            id: "scorpion",
            strength: 18,
            agility: 16,
            hp: [16, 20],
            experience: 6,
            gold: [12, 15],
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 1,
            x: 240,
            y: 176,
            width: 48,
            height: 48
        },
        {
            index: 7,
            id: "druin",
            strength: 20,
            agility: 18,
            hp: [17, 22],
            experience: 7,
            gold: [12, 15],
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 2,
            x: 240,
            y: 64,
            width: 48,
            height: 32
        },
        {
            index: 8,
            id: "poltergeist",
            strength: 18,
            agility: 20,
            hp: [18, 23],
            experience: 8,
            gold: [13, 17],
            special: ["hurt"],
            special_probability: [3],
            sleep_resist: 0,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 6,
            x: 64,
            y: 112,
            width: 40,
            height: 56
        },
        {
            index: 9,
            id: "droll",
            strength: 24,
            agility: 24,
            hp: [19, 25],
            experience: 10,
            gold: [18, 24],
            sleep_resist: 0,
            stopspell_resist: 14,
            hurt_resist: 0,
            dodge: 2,
            x: 0,
            y: 56,
            width: 48,
            height: 48
        },
        {
            index: 10,
            id: "drakeema",
            strength: 22,
            agility: 26,
            hp: [16, 20],
            experience: 11,
            gold: [15, 19],
            special: ["heal", "hurt"],
            special_probability: [1, 2],
            sleep_resist: 2,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 6,
            x: 368,
            y: 0,
            width: 32,
            height: 48
        },
        {
            index: 11,
            id: "skeleton",
            strength: 28,
            agility: 22,
            hp: [23, 30],
            experience: 11,
            gold: [22, 29],
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 4,
            x: 0,
            y: 232,
            width: 48,
            height: 56
        },
        {
            index: 12,
            id: "warlock",
            strength: 28,
            agility: 22,
            hp: [23, 30],
            experience: 13,
            gold: [26, 34],
            special: ["sleep", "hurt"],
            special_probability: [1, 2],
            sleep_resist: 3,
            stopspell_resist: 1,
            hurt_resist: 0,
            dodge: 2,
            x: 64,
            y: 296,
            width: 40,
            height: 48
        },
        {
            index: 13,
            id: "metal_scorpion",
            strength: 36,
            agility: 42,
            hp: [17, 22],
            experience: 14,
            gold: [30, 39],
            sleep_resist: 0,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 2,
            x: 296,
            y: 176,
            width: 56,
            height: 48
        },
        {
            index: 14,
            id: "wolf",
            strength: 40,
            agility: 30,
            hp: [26, 34],
            experience: 16,
            gold: [37, 49],
            sleep_resist: 1,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 2,
            x: 240,
            y: 296,
            width: 48,
            height: 48
        },
        {
            index: 15,
            id: "wraith",
            strength: 44,
            agility: 34,
            hp: [28, 36],
            experience: 17,
            gold: [45, 59],
            special: ["heal"],
            special_probability: [1],
            sleep_resist: 7,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 4,
            x: 64,
            y: 232,
            width: 40,
            height: 56
        },
        {
            index: 16,
            id: "metal_slime",
            strength: 10,
            agility: 255,
            hp: 4,
            experience: 115,
            gold: [4, 5],
            special: ["hurt"],
            special_probability: [3],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 15,
            dodge: 1,
            x: 368,
            y: 248,
            width: 32,
            height: 24
        },
        {
            index: 17,
            id: "specter",
            strength: 40,
            agility: 38,
            hp: [28, 36],
            experience: 18,
            gold: [52, 69],
            special: ["sleep", "hurt"],
            special_probability: [1, 3],
            sleep_resist: 3,
            stopspell_resist: 1,
            hurt_resist: 0,
            dodge: 4,
            x: 128,
            y: 112,
            width: 32,
            height: 56
        },
        {
            index: 18,
            id: "wolflord",
            strength: 50,
            agility: 36,
            hp: [29, 38],
            experience: 20,
            gold: [60, 79],
            special: ["stopspell"],
            special_probability: [2],
            sleep_resist: 4,
            stopspell_resist: 7,
            hurt_resist: 0,
            dodge: 2,
            x: 296,
            y: 296,
            width: 56,
            height: 48
        },
        {
            index: 19,
            id: "druinlord",
            strength: 47,
            agility: 40,
            hp: [27, 35],
            experience: 20,
            gold: [63, 84],
            special: ["heal", "hurt"],
            special_probability: [3, 1],
            sleep_resist: 15,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 4,
            x: 304,
            y: 64,
            width: 48,
            height: 32
        },
        {
            index: 20,
            id: "drollmagi",
            strength: 52,
            agility: 50,
            hp: [29, 38],
            experience: 22,
            gold: [67, 89],
            special: ["stopspell"],
            special_probability: [2],
            sleep_resist: 2,
            stopspell_resist: 2,
            hurt_resist: 0,
            dodge: 1,
            x: 64,
            y: 56,
            width: 40,
            height: 48
        },
        {
            index: 21,
            id: "wyvern",
            strength: 56,
            agility: 48,
            hp: [32, 42],
            experience: 24,
            gold: [75, 99],
            sleep_resist: 4,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 2,
            x: 0,
            y: 352,
            width: 48,
            height: 56
        },
        {
            index: 22,
            id: "rogue_scorpion",
            strength: 60,
            agility: 90,
            hp: [27, 35],
            experience: 26,
            gold: [82, 109],
            sleep_resist: 7,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 2,
            x: 360,
            y: 184,
            width: 46,
            height: 40
        },
        {
            index: 23,
            id: "wraith_knight",
            strength: 68,
            agility: 56,
            hp: [35, 46],
            experience: 28,
            gold: [90, 119],
            special: ["heal"],
            special_probability: [3],
            sleep_resist: 5,
            stopspell_resist: 0,
            hurt_resist: 3,
            dodge: 4,
            x: 120,
            y: 232,
            width: 48,
            height: 56
        },
        {
            index: 24,
            id: "golem",
            strength: 120,
            agility: 60,
            hp: [53, 70],
            experience: 5,
            gold: [7, 9],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 15,
            dodge: 0,
            x: 296,
            y: 112,
            width: 56,
            height: 56
        },
        {
            index: 25,
            id: "goldman",
            strength: 48,
            agility: 40,
            hp: [38, 50],
            experience: 6,
            gold: [150, 199],
            sleep_resist: 13,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 1,
            x: 240,
            y: 112,
            width: 48,
            height: 56
        },
        {
            index: 26,
            id: "knight",
            strength: 76,
            agility: 78,
            hp: [42, 55],
            experience: 33,
            gold: [97, 129],
            special: ["stopspell"],
            special_probability: [2],
            sleep_resist: 6,
            stopspell_resist: 7,
            hurt_resist: 0,
            dodge: 1,
            x: 0,
            y: 176,
            width: 48,
            height: 56
        },
        {
            index: 27,
            id: "magiwyvern",
            strength: 78,
            agility: 68,
            hp: [44, 58],
            experience: 34,
            gold: [105, 139],
            special: ["sleep"],
            special_probability: [2],
            sleep_resist: 2,
            stopspell_resist: 0,
            hurt_resist: 0,
            dodge: 2,
            x: 64,
            y: 352,
            width: 40,
            height: 56
        },
        {
            index: 28,
            id: "demon_knight",
            strength: 79,
            agility: 64,
            hp: [38, 50],
            experience: 37,
            gold: [112, 149],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 15,
            dodge: 15,
            x: 184,
            y: 232,
            width: 40,
            height: 56
        },
        {
            index: 29,
            id: "werewolf",
            strength: 86,
            agility: 70,
            hp: [46, 60],
            experience: 40,
            gold: [116, 154],
            sleep_resist: 7,
            stopspell_resist: 15,
            hurt_resist: 0,
            dodge: 7,
            x: 360,
            y: 296,
            width: 46,
            height: 48
        },
        {
            index: 30,
            id: "green_dragon",
            strength: 88,
            agility: 74,
            hp: [49, 65],
            experience: 45,
            gold: [120, 159],
            special: ["breathe_fire"],
            special_probability: [1],
            sleep_resist: 7,
            stopspell_resist: 15,
            hurt_resist: 2,
            dodge: 2,
            x: 0,
            y: 0,
            width: 48,
            height: 48
        },
        {
            index: 31,
            id: "starwyvern",
            strength: 86,
            agility: 80,
            hp: [49, 65],
            experience: 43,
            gold: [120, 159],
            special: ["healmore", "breathe_fire"],
            special_probability: [3, 1],
            sleep_resist: 8,
            stopspell_resist: 0,
            hurt_resist: 1,
            dodge: 2,
            x: 120,
            y: 352,
            width: 48,
            height: 64
        },
        {
            index: 32,
            id: "wizard",
            strength: 80,
            agility: 70,
            hp: [49, 65],
            experience: 50,
            gold: [123, 164],
            special: ["hurtmore"],
            special_probability: [2],
            sleep_resist: 15,
            stopspell_resist: 7,
            hurt_resist: 15,
            dodge: 2,
            x: 120,
            y: 296,
            width: 48,
            height: 48
        },
        {
            index: 33,
            id: "axe_knight",
            strength: 94,
            agility: 82,
            hp: [53, 70],
            experience: 54,
            gold: [123, 164],
            special: ["sleep"],
            special_probability: [1],
            sleep_resist: 15,
            stopspell_resist: 3,
            hurt_resist: 1,
            dodge: 1,
            x: 56,
            y: 168,
            width: 56,
            height: 64
        },
        {
            index: 34,
            id: "blue_dragon",
            strength: 98,
            agility: 84,
            hp: [53, 70],
            experience: 60,
            gold: [112, 149],
            special: ["breathe_fire"],
            special_probability: [1],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 7,
            dodge: 2,
            x: 48,
            y: 0,
            width: 64,
            height: 48
        },
        {
            index: 35,
            id: "stoneman",
            strength: 100,
            agility: 40,
            hp: [121, 160],
            experience: 65,
            gold: [105, 139],
            sleep_resist: 2,
            stopspell_resist: 15,
            hurt_resist: 7,
            dodge: 1,
            x: 357,
            y: 112,
            width: 50,
            height: 56
        },
        {
            index: 36,
            id: "armored_knight",
            strength: 105,
            agility: 86,
            hp: [68, 90],
            experience: 70,
            gold: [105, 139],
            special: ["healmore", "hurtmore"],
            special_probability: [3, 1],
            sleep_resist: 15,
            stopspell_resist: 7,
            hurt_resist: 1,
            dodge: 2,
            x: 112,
            y: 168,
            width: 64,
            height: 64
        },
        {
            index: 37,
            id: "red_dragon",
            strength: 120,
            agility: 90,
            hp: [76, 100],
            experience: 100,
            gold: [105, 139],
            special: ["sleep", "breathe_fire"],
            special_probability: [1, 1],
            sleep_resist: 15,
            stopspell_resist: 7,
            hurt_resist: 15,
            dodge: 2,
            x: 112,
            y: 0,
            width: 64,
            height: 48
        },
        {
            index: 38,
            id: "dragonlord_first_form",
            strength: 90,
            agility: 75,
            hp: [76, 100],
            experience: 0,
            gold: 0,
            special: ["stopspell", "hurtmore"],
            special_probability: [1, 3],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 15,
            dodge: 0,
            x: 248,
            y: 360,
            width: 32,
            height: 40
        },
        {
            index: 39,
            id: "dragonlord_second_form",
            strength: 140,
            agility: 200,
            hp: 130,
            experience: 0,
            gold: 0,
            special: ["breathe_fire2"],
            special_probability: [2],
            sleep_resist: 15,
            stopspell_resist: 15,
            hurt_resist: 15,
            dodge: 0,
            x: 312,
            y: 360,
            width: 88,
            height: 97
        }
    ],
    maps: {
        /* Map template
            "Map Name": {
                type: "world", "town" (no combat), or "dungeon"
                zone: zone number for enemy set, dungeon type only
                player_offset: player.offset_x/y starting point
                player_start: player.x/y starting point
                width: width of map in tiles
                height: height of map in tiles
                music: background music to be played on this map
                layout: [
                    array of tile numbers - actual map data
                ]
                npcs: [
                    array of npcs - ["character type", "direction facing", x, y]
                ]
            }
        */

        "World": {
            type: "world",
            player_offset: [34, 41],
            player_start: [12, 6],
            width: 128,
            height: 128,
            map_links: [
                { offset_x: 35, offset_y: 41, map: "Tantegel1F" },
                { offset_x: 40, offset_y: 39, map: "Brecconary" },
                { offset_x: 96, offset_y: 8, map: "Kol" },
                { offset_x: 0,  offset_y: 0, x: 6, y: 6, map: "Garinham" },
                { offset_x: 94, offset_y: 70, map: "Rimuldar" },
                { offset_x: 65, offset_y: 100, map: "Cantlin" },
                { offset_x: 17, offset_y: 87, map: "Hauksness" },
                { offset_x: 20, offset_y: 10, map: "ErdricksCaveB1" },
                { offset_x: 96, offset_y: 42, map: "SwampCave" },
                { offset_x: 96, offset_y: 47, map: "SwampCave", set_offsets: [0, 17], set_xy: [9, 13] },
                { offset_x: 21, offset_y: 55, map: "MountainCaveB1" },
                { offset_x: 40, offset_y: 46, map: "CharlockCastle1F" },
                { offset_x: 73, offset_y: 0, y: 5, map: "NorthShrine" },
                { offset_x: 100, offset_y: 107, map: "SouthShrine" }
            ],
            music: "overworld",
            layout: [
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 27, 26, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 15, 15, 15, 15, 15, 15, 15, 27, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 15, 15, 15, 15, 15, 15, 15, 15, 27, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 33, 16, 16, 16, 16, 16, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 33, 15, 15, 15, 16, 16, 16, 16, 15, 15, 27, 25, 25, 25, 25, 25, 26, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 27, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 15, 20, 15, 28, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 14, 16, 16, 16, 16, 16, 16, 15, 15, 27, 26, 26, 26, 33, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 32, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 27, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 27, 25, 25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 29, 25, 25, 25, 25, 25, 25, 26, 33, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 27, 26, 25, 25, 26, 33, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 28, 25, 25, 25, 25, 25, 33, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 27, 33, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 29, 30, 31, 16, 16, 16, 16, 16, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 29, 25, 25, 25, 25, 25, 33, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 34, 25, 25, 25, 35, 16, 16, 16, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 34, 25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 28, 25, 33, 17, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 32, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 27, 25, 25, 25, 25, 25, 35, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 34, 26, 33, 17, 17, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 25, 25, 26, 35, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 27, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 27, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 27, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 28, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 28, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 34, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 30, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 34, 26, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 28, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 21, 21, 21, 21, 19, 21, 21, 21, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 27, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 27, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 27, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 27, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 35, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 15, 15, 28, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 27, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 15, 15, 15, 28, 32, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 27, 25, 25, 31, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 26, 12, 35, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 27, 32, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 16, 16, 16, 16, 16, 18, 18, 18, 27, 25, 25, 12, 35, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 27, 31, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 18, 18, 18, 28, 33, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 34, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 27, 31, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 16, 16, 16, 16, 34, 12, 33, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 23, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 21, 21, 21, 21, 27, 26, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 27, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 36, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 29, 31, 15, 15, 15, 15, 15, 16, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 27, 26, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 36, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 34, 30, 25, 25, 31, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 29, 30, 31, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 27, 31, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 27, 25, 25, 32, 15, 15, 15, 15, 15, 15, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 21, 21, 21, 21, 21, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 29, 30, 25, 25, 25, 30, 31, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 27, 31, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 16, 16, 17, 17, 17, 17, 17, 17, 17, 27, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 21, 21, 21, 21, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 15, 15, 15, 15, 15, 15, 27, 31, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 27, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 21, 21, 21, 21, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 27, 31, 16, 16, 16, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 28, 25, 32, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 21, 21, 21, 21, 21, 28, 25, 25, 25,
                25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 27, 12, 12, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 35, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 29, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 26, 26, 26, 33, 18, 18, 18, 18, 18, 18, 18, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 27, 25, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 29, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 29, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 30, 12, 12, 12, 31, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 18, 18, 18, 18, 28, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 29, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 29, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 27, 12, 31, 16, 16, 16, 16, 29, 26, 26, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 15, 15, 15, 18, 18, 18, 18, 18, 29, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 34, 30, 25, 25, 25, 32, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 21, 21, 21, 21, 21, 21, 21, 29, 30, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 17, 23, 16, 16, 29, 30, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 34, 25, 25, 25, 25, 25, 25, 25, 35, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 34, 26, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 27, 12, 12, 26, 33, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 27, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 35, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 27, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 27, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 27, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 27, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 28, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 28, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 26, 35, 17, 17, 17, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 29, 31, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 33, 15, 15, 15, 15, 15, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 29, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 23, 15, 15, 15, 16, 16, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25,
                25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 28, 25, 25, 25, 35, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 29, 30, 30, 31, 17, 17, 17, 17, 17, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 29, 30, 30, 32, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 29, 25, 25, 25, 32, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 17, 17, 17, 17, 29, 25, 25, 25, 25, 30, 30, 35, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 29, 30, 30, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 32, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 25, 32, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 22, 22, 22, 22, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 26, 26, 35, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 22, 22, 22, 22, 22, 22, 22, 22, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 29, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 29, 30, 30, 30, 25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 31, 16, 16, 16, 16, 16, 29, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 31, 22, 22, 22, 22, 22, 22, 18, 18, 18, 18, 18, 18, 18, 29, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 15, 15, 15, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 25, 25, 26, 26, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 13, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 22, 22, 22, 22, 22, 22, 22, 18, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 31, 22, 19, 22, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 34, 26, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 26, 33, 18, 18, 18, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 33, 16, 16, 16, 16, 16, 16, 27, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 26, 33, 18, 18, 18, 18, 18, 18, 27, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 27, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 27, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 33, 22, 22, 22, 18, 18, 18, 18, 18, 18, 18, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 34, 25, 25, 25, 25, 25, 33, 18, 22, 13, 22, 18, 18, 18, 18, 18, 18, 18, 18, 27, 25, 25, 26, 26, 26, 25, 26, 26, 26, 25, 25, 33, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 34, 26, 26, 25, 25, 25, 25, 25, 26, 35, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 33, 18, 18, 22, 22, 22, 21, 21, 18, 18, 18, 18, 18, 18, 18, 27, 33, 21, 21, 21, 36, 21, 21, 21, 27, 33, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 22, 19, 22, 28, 25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 27, 26, 26, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 32, 18, 18, 18, 18, 18, 18, 18, 21, 21, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 29, 25, 30, 31, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 22, 22, 22, 27, 26, 25, 25, 33, 16, 16, 16, 16, 17, 17, 17, 17, 17, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 35, 18, 18, 18, 18, 21, 21, 21, 21, 18, 18, 18, 21, 21, 21, 21, 21, 18, 18, 28, 25, 25, 32, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 27, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 26, 33, 15, 15, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 32, 18, 18, 18, 18, 21, 21, 21, 21, 18, 18, 18, 18, 18, 21, 21, 21, 18, 18, 29, 25, 25, 25, 25, 31, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 31, 18, 18, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 21, 18, 18, 34, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 31, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 33, 15, 15, 15, 15, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 17, 17, 17, 34, 25, 25, 25, 25, 25, 25, 32, 18, 18, 18, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 17, 17, 18, 18, 28, 25, 25, 25, 25, 25, 25, 30, 31, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 35, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 17, 17, 17, 27, 25, 25, 25, 25, 25, 25, 31, 18, 18, 21, 21, 21, 21, 21, 21, 18, 18, 18, 17, 17, 18, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 18, 21, 21, 21, 21, 21, 16, 16, 16, 16, 34, 30, 25, 25, 25, 26, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 17, 17, 17, 28, 25, 25, 25, 25, 25, 32, 18, 18, 21, 21, 21, 21, 21, 18, 18, 18, 17, 17, 17, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 18, 17, 17, 17, 17, 17, 16, 16, 16, 16, 27, 26, 26, 33, 18, 18, 18, 18, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 18, 18, 18, 18, 15, 15, 15, 15, 19, 18, 18, 16, 16, 16, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 32, 18, 18, 18, 21, 21, 21, 18, 18, 18, 17, 17, 17, 17, 18, 18, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 35, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 15, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 25, 31, 18, 18, 21, 21, 18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 22, 18, 18, 18, 18, 18, 18, 17, 18, 18, 18, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 16, 16, 34, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 32, 18, 18, 22, 22, 18, 18, 18, 18, 18, 15, 15, 15, 18, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 35, 18, 18, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 27, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 22, 22, 18, 18, 18, 15, 15, 15, 18, 18, 18, 34, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 18, 18, 18, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 34, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 22, 22, 18, 18, 18, 15, 15, 15, 18, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 27, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 18, 18, 22, 22, 22, 22, 18, 18, 15, 15, 15, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 22, 22, 22, 22, 22, 22, 18, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 30, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 22, 22, 18, 18, 18, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 31, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 18, 18, 18, 18, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 17, 17, 17, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 15, 15, 15, 16, 16, 16, 16, 16, 15, 15, 15, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 26, 33, 15, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 12, 35, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 34, 30, 30, 25, 25, 33, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 29, 30, 30, 30, 31, 16, 16, 15, 15, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 27, 26, 26, 33, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 29, 25, 26, 26, 26, 25, 31, 16, 16, 15, 15, 15, 18, 18, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 16, 16, 29, 25, 32, 15, 15, 15, 27, 26, 35, 16, 16, 15, 15, 18, 18, 18, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 30, 31, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 16, 16, 28, 25, 32, 15, 14, 15, 21, 21, 21, 16, 16, 15, 15, 18, 18, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 18, 18, 18, 27, 26, 30, 30, 30, 30, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 34, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 32, 15, 15, 15, 29, 30, 35, 16, 16, 15, 15, 18, 18, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 27, 26, 26, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 30, 30, 30, 25, 33, 16, 16, 15, 15, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 27, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 27, 26, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 26, 26, 26, 33, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 27, 26, 26, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 27, 25, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 26, 25, 35, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 21, 21, 27, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 34, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 33, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 36, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 15, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 28, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 27, 26, 25, 25, 25, 25,
                25, 25, 25, 32, 18, 18, 18, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 23, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18, 21, 27, 26, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25,
                25, 25, 25, 32, 18, 18, 18, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 31, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, 18, 21, 18, 18, 28, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25,
                25, 25, 25, 32, 18, 18, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 35, 16, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 33, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 18, 18, 21, 18, 18, 27, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 32, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, 21, 18, 18, 21, 18, 18, 18, 27, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25, 25, 31, 18, 18, 18, 18, 18, 18, 18, 18, 21, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 18, 18, 18, 21, 21, 18, 21, 18, 18, 18, 18, 28, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 17, 17, 16, 16, 16, 16, 16, 15, 15, 15, 15, 28, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 12, 35, 17, 17, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 18, 18, 18, 18, 18, 21, 21, 21, 21, 18, 18, 18, 27, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 17, 17, 17, 16, 16, 16, 16, 16, 15, 15, 29, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 26, 26, 26, 33, 17, 17, 17, 17, 17, 18, 18, 18, 21, 21, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 18, 18, 18, 18, 18, 18, 18, 18, 16, 18, 18, 18, 18, 28, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 15, 29, 30, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 21, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 18, 18, 18, 27, 25, 25, 25, 25, 25, 25, 25, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 35, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 16, 16, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, 18, 18, 18, 29, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 18, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 18, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 18, 18, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 14, 21, 21, 21, 21, 21, 18, 18, 29, 30, 25, 26, 26, 26, 26, 26, 26, 26, 26, 33, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 15, 15, 15, 15, 34, 12, 30, 31, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 35, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 34, 30, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 29, 30, 30, 25, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 28, 26, 35, 22, 22, 22, 22, 22, 18, 18, 18, 18, 16, 16, 18, 18, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 16, 16, 16, 27, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 29, 30, 30, 25, 25, 26, 33, 16, 16, 16, 16, 16, 16, 16, 34, 12, 12, 12, 12, 12, 35, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 23, 22, 22, 22, 22, 22, 15, 15, 15, 15, 18, 18, 18, 16, 34, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 30, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 34, 30, 25, 25, 25, 25, 33, 16, 16, 16, 16, 34, 12, 12, 31, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 34, 33, 22, 22, 22, 22, 15, 15, 15, 15, 15, 15, 18, 18, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 12, 12, 35, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 28, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 27, 12, 12, 12, 12, 12, 12, 35, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 35, 22, 22, 22, 22, 22, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 31, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 34, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 33, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 34, 12, 30, 25, 25, 25, 25, 26, 12, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 30, 25, 25, 32, 22, 22, 22, 22, 22, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 15, 34, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 27, 31, 16, 16, 16, 16, 17, 17, 17, 17, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 26, 33, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 27, 26, 26, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 30, 31, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 29, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 35, 22, 22, 22, 15, 15, 15, 15, 15, 15, 15, 16, 16, 18, 18, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 16, 16, 36, 16, 16, 16, 16, 16, 17, 17, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 32, 21, 21, 21, 21, 21, 21, 17, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 34, 12, 12, 12, 12, 12, 12, 12, 26, 25, 25, 25, 35, 16, 16, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 33, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 18, 18, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 27, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 35, 21, 21, 21, 17, 17, 17, 17, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 27, 25, 33, 16, 16, 16, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 26, 26, 26, 26, 33, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 18, 18, 18, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 27, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 23, 16, 16, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 15, 15, 28, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 27, 31, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 33, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 25, 31, 18, 18, 16, 16, 16, 16, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 30, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 18, 18, 15, 15, 15, 27, 25, 25, 25, 25, 25, 25, 25, 33, 16, 16, 22, 16, 16, 16, 16, 23, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 30, 30, 35, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2, 15,  2,  2, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 15, 15, 15, 27, 25, 25, 25, 25, 25, 32, 16, 16, 22, 22, 22, 16, 16, 16, 28, 31, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 34, 12, 30, 25, 25, 25, 26, 26, 26, 26, 33, 15, 15, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2, 15, 15, 15,  2, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 15, 15, 15, 27, 25, 25, 25, 25, 32, 16, 16, 16, 22, 22, 22, 16, 16, 27, 32, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 18, 18, 27, 25, 25, 33, 18, 18, 18, 18, 18, 15, 15, 15, 15, 15, 15, 28, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16,  2, 15, 14, 15,  2, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 17, 17, 17, 27, 25, 25, 25, 25, 31, 16, 16, 16, 22, 22, 16, 16, 16, 27, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 18, 18, 18, 27, 33, 18, 18, 18, 18, 16, 16, 15, 15, 15, 15, 15, 29, 33, 15, 15, 15, 15, 27, 26, 26, 26, 26, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16,  2, 15, 15, 15,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 17, 17, 17, 17, 17, 27, 25, 25, 25, 32, 16, 16, 15, 15, 15, 15, 16, 16, 16, 27, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21, 17, 17, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 15, 15, 15, 15, 23, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 27, 26, 26, 26, 26, 26, 35, 16, 16, 16, 16,  2,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25, 31, 16, 16, 15, 15, 15, 17, 17, 17, 17, 15, 15, 15, 27, 26, 26, 26, 26, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 21, 21, 21, 21, 21, 17, 17, 17, 17, 17, 17, 16, 16, 16, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 15, 15, 15, 29, 33, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 17, 17, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 30, 31, 15, 15, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 27, 26, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 21, 21, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 30, 33, 16, 16, 16, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 34, 25, 25, 25, 25, 25, 25, 25, 25, 35, 17, 17, 17, 18, 18, 18, 18, 18, 17, 17, 17, 15, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 30, 31, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 29, 25, 33, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 27, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 18, 18, 18, 16, 16, 18, 18, 18, 17, 17, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 30, 35, 17, 17, 18, 18, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 29, 25, 32, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 17, 17, 17, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25, 25, 33, 17, 17, 17, 18, 18, 18, 16, 16, 16, 16, 18, 18, 17, 17, 17, 15, 29, 30, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 33, 17, 17, 17, 17, 18, 18, 18, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 29, 25, 25, 32, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 22, 22, 22, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 22, 22, 22, 22, 22, 17, 17, 17, 17, 17, 17, 34, 30, 25, 25, 25, 25, 32, 17, 17, 17, 18, 18, 18, 16, 16, 16, 20, 16, 16, 18, 18, 15, 15, 34, 26, 26, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 25, 35, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 18, 18, 18, 18, 18, 18, 18, 22, 22, 22, 22, 22, 22, 22, 17, 17, 17, 17, 17, 17, 28, 25, 25, 25, 25, 25, 31, 17, 17, 17, 18, 18, 16, 16, 16, 16, 16, 18, 18, 18, 18, 15, 15, 15, 15, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 18, 18, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 28, 25, 25, 32, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 18, 18, 18, 18, 18, 22, 22, 22, 22, 22, 22, 22, 22, 22, 17, 17, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 18, 18, 16, 16, 16, 16, 18, 18, 17, 17, 17, 15, 15, 15, 28, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 18, 18, 18, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 17, 17, 29, 25, 25, 25, 25, 25, 25, 25, 25, 32, 17, 17, 17, 18, 18, 18, 16, 18, 18, 18, 17, 17, 17, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 35, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 32, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 18, 18, 16, 18, 18, 17, 17, 17, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 15, 15, 17, 17, 17, 17, 29, 30, 31, 18, 18, 18, 18, 18, 18, 18, 18, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 31, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 31, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 29, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 15, 15, 15, 15, 17, 17, 17, 17, 34, 25, 25, 25, 35, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 31, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 17, 17, 17, 17, 17, 17, 22, 22, 22, 29, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 28, 26, 33, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 30, 30, 31, 22, 22, 22, 22, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 22, 22, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 23, 17, 17, 17, 17, 17, 17, 16, 16, 16, 16, 16, 29, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 16, 16, 16, 16, 16, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 31, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 29, 25, 31, 17, 17, 17, 17, 17, 17, 17, 29, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 31, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 22, 22, 22, 22, 28, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 17, 17, 17, 17, 17, 17, 17, 29, 30, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 31, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 29, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 32, 22, 22, 22, 29, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25
            ]
        },

        "Tantegel1F": {
            type: "town",
            player_offset: [9, 29],
            player_start: [12, 6],
            width: 55,
            height: 45,
            map_links: [
                { offset_x: 29, map: "World", set_offsets: [35, 41] },
                { y: 5, map: "World", set_offsets: [35, 41] },
                { offset_y: 30, map: "World", set_offsets: [35, 41] },
                { offset_x: 6, offset_y: 7, map: "Tantegel2F" },
                { offset_x: 28, offset_y: 29, map: "TantegelB1" }
            ],
            music: "tantegel",
            layout: [
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2, 15,  2,  2,  2, 15, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2, 15, 16, 15, 16, 16, 15, 16, 15,  2,  4,  4,  4,  4,  4,  2, 15,  2,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2, 15,  2,  3,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  2,  4,  4,  2,  2,  2,  2,  4,  4,  2,  2,  2,  2,  4,  4,  2,  4,  4,  2, 15, 15, 15, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 16, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  6,  2,  2,  2,  2,  2,  4,  2,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  2,  4,  2,  8,  4,  4,  4,  4,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  2,  4,  2,  2,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  4,  2, 16, 16,  4,  4,  4,  4, 16, 16,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  2,  4,  2, 16, 16,  4,  4,  4,  4, 16, 16,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  2,  4,  2, 16, 15,  4,  4,  4,  4, 15, 16,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  5,  4,  4,  6,  4,  2, 15, 15,  4,  4,  4,  4, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  5,  4,  2,  4,  2, 15, 15,  4,  4,  4,  4, 15, 15,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  5,  4,  5,  2,  4,  2, 15,  4,  4,  4,  4,  4,  4, 15,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  4,  2, 15,  4, 25, 25, 25, 25,  4, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4, 25,  9,  9, 25,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4, 25,  9,  9, 25,  4,  4,  4,  4,  4,  4,  4,  4,  2,  9,  9,  9,  9,  9,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  4,  4,  2,  2,  2,  4, 25, 25, 25, 25,  4,  2,  2,  4,  4,  4,  4,  4,  2,  9,  9,  9,  9,  9,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  2,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  4,  4,  2,  4,  4,  4,  4,  4,  2, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4, 25, 25,  4,  4,  2,  4,  2,  4,  4,  4,  4,  2,  4,  4,  2,  2,  2,  2,  2,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 25, 25, 25, 25,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 25, 25, 25, 25,  4,  4,  4,  2,  2,  4,  4,  2,  2,  4,  4,  4,  4,  4,  3,  4,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 25, 25, 25, 25, 25,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  2,  4,  4,  2,  4,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15,  4,  4, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25, 25,  7, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15
            ],
            doors: [
                { id: "tantegel_door1", x: 15, y: 19 },
                { id: "tantegel_door2", x: 29, y: 12 }
            ],
            chests: [
                { id: "tantegel_chest1", x: 12, y: 19, take: function () {
                    player.add_gold(Game.random_number(6, 13));
                }},
                { id: "tantegel_chest2", x: 13, y: 20, take: function () {
                    player.add_gold(Game.random_number(6, 13));
                }},
                { id: "tantegel_chest3", x: 12, y: 21, take:function () {
                    player.add_gold(Game.random_number(6, 13));
                }},
                { id: "tantegel_chest4", x: 14, y: 21, take: function () {
                    player.add_gold(Game.random_number(6, 13));
                }}
            ],
            npcs: [
                //two by stairs
                { type: "soldier", facing: "down", x: 19, y: 12, talk: function (script) {
                    script.text("tantegel_soldier4");
                }},
                { type: "soldier", facing: "up", x: 19, y: 14, talk: function (script) {
                    script.text("tantegel_soldier5");
                }},
                { type: "townsman", facing: "down", x: 22, y: 17, wanders: true, talk: function (script) {
                    script.text("tantegel_man1");
                }},
                { type: "townswoman", facing: "down", x: 19, y: 19, wanders: true, talk: function (script) {
                    //TODO: conditional if player rescues princess
                    script.text("tantegel_woman1");
                }},
                //guy by chest
                { type: "soldier", facing: "down", x: 13, y: 18, talk: function (script) {
                    script.text("tantegel_soldier6");
                }},
                { type: "townsman", facing: "down", x: 13, y: 14, talk: function (script) {
                    script.text("tantegel_man2");
                }},
                //guy by locked door towards top right
                { type: "soldier", facing: "down", x: 30, y: 8, wanders: true, talk: function (script) {
                    script.text("tantegel_soldier7");
                }},
                //wandering old man, other side of door
                { type: "old_man", facing: "down", x: 27, y: 17, wanders: true, talk: function (script) {
                    script.text("tantagel_old_man2");
                } },
                //guards by old man that gives you MP
                { type: "soldier", facing: "right", x: 26, y: 26, talk: function (script) {
                    //TODO: conditional if player rescues princess
                    script.text("tantegel_soldier3");
                }},
                { type: "soldier", facing: "down", x: 29, y: 24, wanders: true, talk: function (script) {
                    script.text("tantegel_soldier2");
                }},
                //guy that gives you MP
                { type: "old_man", facing: "left", x: 31, y: 32, talk: function (script) {
                    script.text("tantagel_old_man1");
                    player.current_mp = player.max_mp;
                }},
                //front door guards
                { type: "soldier", facing: "right", x: 20, y: 33, talk: function (script) {
                    script.text("tantegel_soldier1");
                }},
                { type: "soldier", facing: "left", x: 23, y: 33, talk: function (script) {
                    script.text("tantegel_soldier1");
                }},
                //merchants near entrance
                { type: "merchant", facing: "down", x: 17, y: 31, wanders: true, talk: function (script) {
                    script.text("tantegel_merchant2");
                }},
                { type: "merchant", facing: "down", x: 15, y: 27, wanders: true, talk: function (script) {
                    script.text("tantegel_merchant1");
                }},
                //guy that sells keys
                { type: "merchant", facing: "down", x: 35, y: 7 },
                { type: "soldier_2", facing: "down", x: 36, y: 15, wanders: true, talk: function (script) {
                    script.text("tantegel_soldier9");
                }},
                { type: "townswoman", facing: "down", x: 38, y: 11, talk: function (script) {
                    script.text("tantegel_woman2");
                }},
                //by the barrier
                { type: "soldier", facing: "up", x: 37, y: 21, talk: function (script) {
                    script.text("tantegel_soldier8");
                }},
                { type: "soldier_2", facing: "up", x: 35, y: 27, wanders: true, talk: function (script) {
                    script.text("tantegel_soldier10");
                }}
            ]
        },

        "Tantegel2F": {
            type: "town",
            player_offset: [0, 0],
            player_start: [16, 11],
            width: 25,
            height: 15,
            map_links: [
                { x: 16, y: 11, map: "Tantegel1F", set_offsets: [6, 7] }
            ],
            music: "tantegel",
            layout: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 5, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 3, 3, 3, 3, 3, 3, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 3, 4, 3, 3, 4, 3, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 5, 5, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 4, 4, 7, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ],
            doors: [
                { id: "tantegel_throne_door1", x: 12, y: 10 }
            ],
            chests: [
                { id: "tantegel_throne_chest1", x: 12, y: 7, take: function () {
                    player.add_gold(120);
                }},
                { id: "tantegel_throne_chest2", x: 13, y: 7, take: function () {
                    player.add_item("torch");
                }},
                { id: "tantegel_throne_chest3", x: 14, y: 4, take: function () {
                    player.add_item("magic_key");
                }}
            ],
            npcs: [
                { type: "king", facing: "down", x: 11, y: 6, talk: function (script) {
                    script.text("tantegel_throne_king1");
                    //TODO: proper menu
                }},
                { type: "soldier", facing: "right", x: 11, y: 9, talk: function (script) {
                    //TODO: these are conditional
                    script.text("tantegel_throne_guard1");
                }},
                { type: "soldier", facing: "left", x: 13, y: 9, talk: function (script) {
                    //TODO: these are conditional
                    script.text("tantegel_throne_guard2");
                }},
                { type: "soldier", facing: "down", x: 15, y: 7 },
                { type: "princess", facing: "down", x: 14, y: 6 }
            ]
        },

        "TantegelB1": {
            type: "town",
            player_offset: [0, 0],
            player_start: [7, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 7, y: 6, map: "Tantegel1F", set_offsets: [28, 29] }
            ],
            music: "tantegel",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 5, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ],
            npcs: [
                { type: "old_man", facing: "down", x: 11, y: 8, talk: function (script) {
                    //TODO: conditional if you've already collected OR not collected OR not collected + have erdricks token
                    script.text("tantegel_basement_old_man1");
                }}
            ]
        },

        "Brecconary": {
            type: "town",
            player_offset: [0, 15],
            player_start: [12, 6],
            width: 54,
            height: 44,
            map_links: [
                { x: 11, map: "World", set_offsets: [40, 39] },
                { x: 13, map: "World", set_offsets: [40, 39] },
                { offset_y: 0, map: "World", set_offsets: [40, 39] }
            ],
            music: "village",
            layout: [
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 21,  4,  4, 21,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 21, 21,  4,  4, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 16, 15, 15, 15, 15, 15, 15, 16, 15, 16, 15, 21,  4,  4, 21, 15, 15, 16,  2,  2,  2,  2,  2,  2,  2,  2, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15,  2,  2,  2,  2,  2, 15, 15, 15, 15, 15, 15,  4,  4, 15, 15, 15, 16,  2,  4,  4,  2,  4, 25, 25,  2, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15,  2,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15,  4,  4, 21, 15, 15, 15,  2,  4,  4,  3,  4, 25, 25,  2, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15,  2,  4,  3,  4,  2, 15, 15, 15, 15, 15, 15,  4,  4, 21, 15, 16, 15,  2,  4,  4,  2,  4, 25, 25,  2, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15,  2,  2,  4,  2,  2, 15, 15, 21, 21, 15, 15,  4,  4, 21, 21, 16, 15,  2,  6,  2,  2,  2,  2,  2,  2, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15, 15, 15,  4, 10, 15, 15, 21, 21, 21, 21, 15,  4,  4, 21, 15, 16, 15, 15, 15, 15, 16, 15, 15, 16, 15, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 16, 15, 15,  4, 15, 15, 21, 21, 16, 21, 21, 15,  4,  4, 21, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15, 15, 15,  4, 15, 15, 21, 16, 16, 16, 21, 21,  4,  4, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2, 16, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15, 15, 15,  4, 15, 21, 21, 21, 16, 16, 16, 21,  4,  4, 15, 15,  2,  4,  4,  4,  2,  4,  4,  4,  2, 15, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15, 15, 15, 15,  4, 15, 21, 21, 16, 16, 16, 21, 15,  4,  4, 15, 15,  2,  4,  4,  4,  2,  4,  4,  4,  2, 15, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 16, 15, 15,  4, 15, 15, 21, 21, 21, 21, 21, 15,  4,  4, 15, 15,  2,  2,  4,  2,  2,  2,  4,  2,  2, 15, 16,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 15, 15, 15,  4, 15, 15, 15, 15, 21, 21, 15, 15,  4,  4, 15, 15, 15, 15,  4, 15, 15, 15,  4, 15, 15, 15, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 15, 15, 15, 15, 15, 15,  4, 15, 15, 15, 15, 16, 15,  4, 15, 15, 15, 16, 15, 15, 15, 15, 15, 25, 25, 25, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 16, 15, 15, 15, 15, 15,  4, 15, 15, 15, 16, 16, 15,  4, 15, 16, 16, 16, 16, 15, 25, 25, 25, 25, 25, 25, 25, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 16, 15, 15, 15, 15, 15, 15,  4, 15, 15, 16, 16, 15, 15,  4, 16, 16, 16, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15, 15, 15, 15, 15,  2, 11,  4,  2, 15, 15, 15, 15, 15,  4, 15, 16, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  2,  2,  2,  2,  2,  4,  2,  2,  2, 15, 15, 15,  4, 16, 15, 15, 25, 25, 25, 25, 15, 15, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  4,  2,  4,  4,  4,  3,  4,  2, 15, 15, 15,  4, 15, 15, 25, 25, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  4,  2,  4,  2,  2,  2,  2,  2, 15, 16, 15,  4,  4,  4, 23, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  4,  6,  4,  4,  4,  4,  4,  2, 15, 16, 15, 15, 15, 15, 25, 15, 15,  2,  4,  2,  2,  2,  2, 16, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  2,  2,  4,  2,  2,  4,  4,  2, 15, 16, 16, 15, 15, 25, 25, 15, 15,  2,  4,  4,  2,  4,  2, 16, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 16, 16, 16, 16, 15, 25, 25, 25, 15,  2,  4,  4,  3,  4,  2, 15, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2, 15, 16, 16, 15, 15, 25, 25, 15, 15,  2,  4,  4,  2,  4,  2, 15, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 15, 16, 15, 15, 25, 25, 25, 25, 15,  2,  2,  2,  2,  2,  2, 16, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 25, 25, 16, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15
            ],
            doors: [
                { id: "brecconary_door1", x: 17, y: 30 },
                { id: "brecconary_door2", x: 33, y: 13 }
            ],
            npcs: [
                //greeter
                { type: "townsman", facing: "down", x: 13, y: 20, talk: function (script) {
                    script.text("brecconary_man2");
                }},
                //inkeeper
                { type: "merchant", facing: "left", x: 22, y: 28, talk: function (script) {
                    script.text("innkeeper1");
                    //TODO: menu
                }},
                { type: "soldier", facing: "up", x: 22, y: 33, talk: function (script) {
                    script.text("brecconary_soldier4");
                }},
                { type: "soldier_2", facing: "down", x: 15, y: 33, wanders: true, talk: function (script) {
                    script.text("brecconary_soldier1");
                }},
                //armor/weapons store
                { type: "townswoman", facing: "down", x: 16, y: 14, talk: function (script) {
                    script.text("brecconary_woman1");
                }},
                { type: "merchant", facing: "down", x: 17, y: 11 },
                //wandering people
                { type: "old_man", facing: "down", x: 23, y: 12, wanders: true, talk: function (script) {
                    script.text("brecconary_old_man1");
                }},
                { type: "soldier_2", facing: "up", x: 24, y: 28, wanders: true, talk: function (script) {
                    script.text("brecconary_soldier2");
                }},
                { type: "townsman", facing: "down", x: 22, y: 21, wanders: true, talk: function (script) {
                    script.text("brecconary_man1");
                }},
                { type: "merchant", facing: "down", x: 29, y: 17, wanders: true, talk: function (script) {
                    script.text("save_us");
                }},
                { type: "soldier_2", facing: "down", x: 31, y: 26, wanders: true, talk: function (script) {
                    script.text("erdrick_proof");
                }},
                { type: "townswoman", facing: "up", x: 28, y: 32, wanders: true, talk: function (script) {
                    script.text("brecconary_woman2");
                }},
                { type: "soldier", facing: "down", x: 36, y: 21, talk: function (script) {
                    script.text("brecconary_soldier6");
                }},
                //item store
                { type: "merchant", facing: "left", x: 37, y: 32, wanders: true, talk: function (script) {
                    script.text("item_store1");
                    //TODO: menu
                }},
                { type: "townsman", facing: "left", x: 32, y: 31, wanders: true, talk: function (script) {
                    script.text("brecconary_man3");
                }},
                { type: "townsman", facing: "down", x: 37, y: 29, wanders: true, talk: function (script) {
                    script.text("brecconary_man4");
                }},
                //"there are keys" guy and curse removing old man
                { type: "townsman", facing: "down", x: 32, y: 17, talk: function (script) {
                    script.text("brecconary_man5");
                }},
                { type: "old_man", facing: "down", x: 36, y: 17, talk: function (script) {
                    //TODO: check for cursed item
                    script.text("brecconary_old_man2");
                }},
                //guy in the corner
                { type: "soldier_2", facing: "down", x: 40, y: 8, talk: function (script) {
                    script.text("brecconary_soldier5");
                }},
                //fairy water
                { type: "townswoman", facing: "left", x: 36, y: 11, wanders: true, talk: function (script) {
                    script.text("fairy_water1");
                    //TODO: menu
                }}
            ]
        },

        "Kol": {
            type: "town",
            player_offset: [19, 23],
            player_start: [12, 8],
            width: 48,
            height: 38,
            map_links: [
                { y: 9, map: "World", set_offsets: [96, 8] },
                { x: 11, map: "World", set_offsets: [96, 8] },
                { x: 13, map: "World", set_offsets: [96, 8] },
                { offset_y: 1, map: "World", set_offsets: [96, 8] }
            ],
            music: "village",
            layout: [
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  2, 15, 16, 16, 16,  2,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  2, 15, 15, 16, 16,  2,  4,  4,  4,  2, 16, 16, 16, 16, 16, 16,  2, 11,  2,  4,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  3,  2, 22, 15, 16, 16,  4,  4, 25,  4,  4, 21, 21, 21, 21, 21, 21,  4,  4,  4,  4,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 22,  4, 22, 22, 15, 16, 16,  2,  4,  4,  4,  2, 16, 21, 16, 16, 16, 16,  2,  3,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 22, 22, 22, 15, 15,  2,  2,  2,  2,  4,  2,  2, 16, 21, 16, 16, 16, 16,  2,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 22, 15, 15, 15,  2, 16, 16, 16, 16, 16, 16, 16, 21, 16, 16, 16, 16,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 16,  2, 16, 16, 16, 16, 16, 16, 16, 21, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 16, 16,  2, 16, 16, 16, 16, 16, 16, 16, 21, 16, 16, 16, 16, 16, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  2,  2,  2,  2, 16, 16, 16, 16, 21, 21, 21, 16, 16, 16, 15, 15, 15, 16, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2, 16, 16, 16, 21, 21, 21, 21, 21, 16, 16, 16, 15, 16, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  2,  2,  2, 16, 16,  2, 16, 16, 21, 21, 21, 21, 21, 21, 21, 16,  2,  2,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  4,  4,  2, 16, 16,  2, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2,  4,  4,  2,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  4,  4,  2, 16, 21,  6, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  4,  4,  4,  3,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  4,  4,  2, 16, 21,  2, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2,  4,  4,  2,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  6,  2,  2,  2,  4, 21,  2, 16, 16, 21, 21, 21, 21, 21, 21, 21, 16,  2,  2,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  2,  4,  4,  4,  4,  2, 16, 16, 16, 21, 21, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2, 16, 21, 21, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2, 16, 16, 21, 16, 16, 16, 16,  2,  2,  2,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  2,  4,  2,  4, 15,  4, 15,  4,  2, 16, 16, 21, 21, 21, 21, 21, 21, 21, 21,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  2, 16,  2,  2,  2,  2,  2, 16, 21, 21, 21,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  5,  2, 16, 21, 21, 21,  2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  4,  2,  2,  4, 15,  4, 15,  4,  4,  4,  4,  3,  4,  5,  2, 16, 16, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15,  2,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  5,  2, 16, 16, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15,  2,  2,  2,  2,  2,  2,  2, 16,  2,  2,  2,  2,  2, 16, 16, 21, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16
            ],
            doors: [
                { id: "kol_door1", x: 13, y: 22 },
                { id: "kol_door2", x: 19, y: 20 }
            ],
            npcs: [
                //entrance area / wandering people
                { type: "old_man", facing: "down", x: 32, y: 27, wanders: true, talk: function (script) {
                    script.text("kol_old_man3");
                }},
                { type: "townswoman", facing: "down", x: 23, y: 22, wanders: true, talk: function (script) {
                    script.text("save_us");
                }},
                { type: "old_man", facing: "left", x: 32, y: 17, wanders: true, talk: function (script) {
                    script.text("kol_old_man4");
                }},
                { type: "soldier_2", facing: "down", x: 32, y: 20, wanders: true, talk: function (script) {
                    script.text("kol_soldier3");
                }},
                { type: "townsman", facing: "down", x: 25, y: 20, wanders: true, talk: function (script) {
                    script.text("kol_man1");
                }},
                { type: "soldier", facing: "down", x: 23, y: 17, wanders: true, talk: function (script) {
                    script.text("kol_soldier2");
                }},
                //weapons
                { type: "merchant", facing: "left", x: 34, y: 20 },
                //by inn/spring
                { type: "townswoman", facing: "down", x: 24, y: 9, talk: function (script) {
                    script.text("kol_woman1");
                }},
                { type: "merchant", facing: "up", x: 31, y: 12 },
                //behind door
                { type: "townsman", facing: "right", x: 18, y: 20, wanders: true, talk: function (script) {
                    script.text("erdrick_proof");
                }},
                { type: "old_man", facing: "down", x: 14, y: 20, wanders: true, talk: function (script) {
                    script.text("kol_old_man1");
                    //TODO: yes/no menu
                }},
                { type: "merchant", facing: "down", x: 18, y: 26, wanders: true, talk: function (script) {
                    script.text("kol_merchant1");
                    //TODO: yes/no menu
                }},
                { type: "soldier", facing: "down", x: 13, y: 31, talk: function (script) {
                    script.text("kol_soldier1");
                }},
                { type: "merchant", facing: "left", x: 26, y: 29 },
                //old man in booth at top left
                { type: "old_man", facing: "down", x: 13, y: 9, talk: function (script) {
                    //TODO: conditional on armor
                    script.text("kol_old_man2");
                }}
            ]
        },

        "Garinham": {
            type: "town",
            player_offset: [0, 15],
            player_start: [12, 6],
            width: 44,
            height: 34,
            map_links: [
                { x: 11, map: "World", set_offsets: [0, 0], set_xy: [6, 6] },
                { x: 13, map: "World", set_offsets: [0, 0], set_xy: [6, 6] },
                { y: 8, map: "World", set_offsets: [0, 0], set_xy: [6, 6] },
                { offset_y: 0, map: "World", set_offsets: [0, 0], set_xy: [6, 6] },
                { offset_x: 19, offset_y: 1, map: "GarinhamsGraveB1" }
            ],
            music: "village",
            layout: [
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 25, 25,  2,  7, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25,  2,  4, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  4,  4, 23,  4,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 25,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  4, 25, 25, 25,  2, 25,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  2,  4,  4,  4,  2,  4,  5,  5,  4,  4,  4,  2, 25, 25, 25, 25, 25,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  2,  2,  6,  2,  2,  4,  5,  4,  4,  4,  4,  2, 25,  2, 25,  2, 25,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  4,  4,  2,  4,  2, 16, 16, 16, 16, 16, 16, 16, 16,  2,  2,  6,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  4,  4,  3,  4,  2, 16, 16, 15,  4,  4,  4, 15, 16, 16, 16,  4, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  4,  2,  2,  2,  2, 16, 15, 15,  4, 16,  4,  4,  4,  4,  4,  4,  4,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  4, 15, 15, 15, 15, 15,  4,  4,  4,  4,  4, 15, 15,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4, 15,  4, 15, 15, 15, 11,  4,  2,  2,  2, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 15,  4, 15, 16, 15, 15, 15,  4, 10, 15, 15,  2,  4,  3,  4,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  4,  2, 16, 21,  2,  2,  4,  2,  2, 15,  2,  4,  2,  2,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  4,  4,  4,  2,  2, 21,  2,  4,  3,  4,  2, 15,  2,  4,  2,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  2,  2,  2,  2, 25,  2,  2,  4,  4,  4,  2, 15,  2,  4,  4,  4,  4,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25,  2,  2,  2,  2,  2, 15,  2,  2,  2,  2,  2,  2, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15
            ],
            doors: [
                { id: "garinham_door1", x: 16, y: 13 },
                { id: "garinham_door2", x: 29, y: 17 }
            ],
            npcs: [
                { type: "old_man", facing: "down", x: 14, y: 17, wanders: true, talk: function (script) {
                    script.text("garinham_old_man1");
                }},
                { type: "old_man", facing: "right", x: 14, y: 24, talk: function (script) {
                    script.text("garinham_old_man2");
                }},
                { type: "soldier_2", facing: "up", x: 19, y: 24, wanders: true, talk: function (script) {
                    script.text("garinham_soldier1");
                }},
                { type: "townsman", facing: "right", x: 30, y: 20, wanders: true, talk: function (script) {
                    script.text("garinham_man1");
                }},
                { type: "townswoman", facing: "down", x: 24, y: 20, wanders: true, talk: function (script) {
                    script.text("garinham_woman1");
                }},
                //merchants
                { type: "merchant", facing: "left", x: 17, y: 18 },
                { type: "merchant", facing: "up", x: 22, y: 25 },
                { type: "merchant", facing: "left", x: 29, y: 22 },
                //behind the door
                { type: "townswoman", facing: "down", x: 24, y: 11, wanders: true, talk: function (script) {
                    script.text("garinham_woman2");
                }},
                { type: "townsman", facing: "down", x: 22, y: 14, wanders: true, talk: function (script) {
                    script.text("garinham_man2");
                }},
                { type: "old_man", facing: "down", x: 24, y: 15, wanders: true, talk: function (script) {
                    script.text("garinham_old_man4");
                }},
                { type: "merchant", facing: "down", x: 21, y: 13, talk: function (script) {
                    script.text("garinham_merchant1");
                }},
                //behind door #2
                { type: "soldier", facing: "right", x: 15, y: 12, talk: function (script) {
                    script.text("garinham_soldier2");
                }},
                { type: "soldier", facing: "left", x: 17, y: 12, talk: function (script) {
                    script.text("garinham_soldier2");
                }},
                //by stairs down to grave
                { type: "old_man", facing: "down", x: 26, y: 8, wanders: true, talk: function (script) {
                    script.text("garinham_old_man3");
                }}
            ]
        },

        "Rimuldar": {
            type: "town",
            player_offset: [29, 15],
            player_start: [13, 6],
            width: 54,
            height: 44,
            map_links: [
                { x: 14, map: "World", set_offsets: [94, 70] },
                { offset_x: 0, map: "World", set_offsets: [94, 70] },
                { offset_y: 0, map: "World", set_offsets: [94, 70] },
                { y: 7, map: "World", set_offsets: [94, 70] }
            ],
            music: "village",
            layout: [
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25,  2,  2,  2, 16, 16, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 23, 15, 15,  4,  4,  2, 16, 15, 15, 15, 15, 15, 16, 16, 16, 15, 15, 15, 16, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 15, 15,  4,  4,  2, 15, 15, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4, 16, 16, 15, 15, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 16,  2,  4,  4,  4,  2, 15, 16, 15, 15,  4, 15, 16, 15,  4, 21, 21,  4, 15, 15, 15, 15, 15, 16, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 16,  2,  2,  3,  2,  2, 15, 15,  2,  2,  4,  2,  2,  2,  4,  2,  2,  4, 15, 15,  2,  2,  2,  2,  2, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  4,  4,  4,  2, 15, 15,  2,  4,  4,  4,  2,  4,  4,  4,  2,  4, 15, 15,  2,  4,  4,  4,  2, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  2,  2,  2,  2, 15, 15,  2,  4,  4,  4,  2,  4,  4,  4,  2,  4, 16, 15,  2,  2,  3,  2,  2, 21, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  2, 21, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 15, 15, 15, 15, 15, 25, 25, 15, 15, 15, 15, 15, 15, 16, 15, 15,  4, 15, 10,  2,  4,  4,  4,  2, 21, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 16, 15, 25, 25, 25, 25, 25, 25, 15, 15, 15,  4,  4,  4,  4,  4,  4,  4, 15,  2,  4,  4,  4,  2, 21, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 21, 15, 25, 25, 16, 16, 16, 25, 25, 15, 16,  4,  4,  4,  4,  4,  4,  4,  4, 15,  2,  2,  2,  2,  2, 16, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 21, 25, 25, 16, 15, 15, 16, 25, 15, 15,  4,  4,  4, 15, 15, 15, 15,  4,  4, 15, 15, 15, 15, 16, 16, 16, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 21, 21, 21, 16, 15, 16, 25, 25, 15,  4,  4,  4, 15, 15, 16, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 23,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 21, 25, 25, 16, 16, 25, 25, 15, 15,  4,  4, 15, 15, 16, 16, 15, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 23,  4, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 21, 15, 25, 25, 25, 25, 15, 15, 15,  4,  4, 15, 16, 16, 15,  2, 11,  4, 15, 15, 16, 16, 15, 15, 16, 16, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 16, 15, 15, 15, 15, 16, 15, 15,  4,  4, 15, 15, 16,  2,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2, 16, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15, 15, 15, 15, 15, 16, 16, 16, 15,  4,  4, 15, 16, 16,  2,  4,  3,  4,  2,  4,  4,  2,  4,  4,  2, 15, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2, 15, 16,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  2, 15, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 15,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  2, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2, 15, 16,  2,  2,  4,  2,  2,  2,  6,  2,  2,  2,  2, 16, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 15,  2,  2,  2,  4,  4,  2,  4,  4,  4,  4,  2, 15, 21,  2,  4,  4,  4,  2,  4,  4,  2,  4,  4,  2, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 16,  2,  4,  3,  4,  4,  4,  4,  2,  2,  4,  2, 15, 21,  2,  4,  4,  4,  2,  4,  4,  6,  4,  5,  2, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 16,  2,  2,  2,  4,  4,  2,  4,  4,  4,  4,  2, 15, 21,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2, 16, 21, 21, 21, 21, 16, 15, 15, 16, 16, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 16, 16, 15, 15, 16, 15, 15, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 16, 16, 16, 16, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
                15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15
            ],
            doors: [
                { id: "rimuldar_door1", x: 34, y: 28 },
                { id: "rimuldar_door2", x: 35, y: 30 }
            ],
            npcs: [
                //by weapons store
                { type: "merchant", facing: "down", x: 36, y: 14 },
                { type: "soldier_2", facing: "down", x: 36, y: 18, wanders: true, talk: function (script) {
                    script.text("rimuldar_soldier1");
                }},
                //wandering, middle of town
                { type: "townswoman", facing: "down", x: 35, y: 21, wanders: true, talk: function (script) {
                    script.text("rimuldar_woman2");
                }},
                { type: "townsman", facing: "down", x: 27, y: 18, wanders: true, talk: function (script) {
                    script.text("rimuldar_man1");
                }},
                { type: "soldier", facing: "up", x: 22, y: 23, wanders: true, talk: function (script) {
                    script.text("rimuldar_soldier4");
                }},
                { type: "soldier_2", facing: "down", x: 30, y: 32, wanders: true, talk: function (script) {
                    //TODO: conditional on having fighters ring, I think?
                    script.text("rimuldar_soldier3");
                }},
                { type: "old_man", facing: "left", x: 19, y: 20, talk: function (script) {
                    script.text("rimuldar_old_man2");
                }},
                //inn
                { type: "merchant", facing: "right", x: 29, y: 25 },
                { type: "soldier_2", facing: "down", x: 37, y: 26, wanders: true, talk: function (script) {
                    script.text("rimuldar_soldier2");
                }},
                { type: "old_man", facing: "down", x: 33, y: 30, talk: function (script) {
                    script.text("rimuldar_old_man1");
                }},
                //two isolated people
                { type: "townswoman", facing: "up", x: 28, y: 15, talk: function (script) {
                    script.text("rimuldar_woman1");
                }},
                { type: "townsman", facing: "up", x: 24, y: 15, wanders: true, talk: function (script) {
                    script.text("erdrick_proof");
                }},
                //shed
                { type: "townswoman", facing: "right", x: 16, y: 27, wanders: true, talk: function (script) {
                    script.text("rimuldar_woman3");
                }},
                { type: "old_man", facing: "right", x: 16, y: 30, talk: function (script) {
                    script.text("rimuldar_old_man3");
                    //TODO: menu
                }},
                { type: "townsman", facing: "down", x: 22, y: 27, wanders: true, talk: function (script) {
                    script.text("rimuldar_man2");
                }},
                { type: "soldier_2", facing: "down", x: 22, y: 31, wanders: true, talk: function (script) {
                    script.text("rimuldar_soldier5");
                }},
                //key sales
                { type: "merchant", facing: "up", x: 15, y: 11, talk: function (script) {
                    script.text("rimuldar_merchant1");
                }},
                { type: "old_man", facing: "up", x: 17, y: 14, talk: function (script) {
                    script.text("key_sales1");
                    //TODO: menu
                }},
                //hiding girl and her boyfriend
                { type: "townswoman", facing: "down", x: 13, y: 33, talk: function (script) {
                    script.text("rimuldar_woman4");
                }},
                { type: "townsman", facing: "down", x: 40, y: 7, talk: function (script) {
                    script.text("rimuldar_man3");
                }}
            ]
        },

        "Cantlin": {
            type: "town",
            player_offset: [13, 0],
            player_start: [12, 6],
            width: 54,
            height: 44,
            map_links: [
                { y: 5, map: "World", set_offsets: [65, 100] },
                { offset_y: 29, map: "World", set_offsets: [65, 100] },
                { x: 11, map: "World", set_offsets: [65, 100] },
                { offset_x: 28, map: "World", set_offsets: [65, 100] }
            ],
            music: "village",
            layout: [
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4, 10, 21, 21, 21, 21, 21, 21, 21, 21,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  2,  4,  4,  4,  2,  4,  4, 21, 21,  2,  2,  2,  2,  2,  2, 21,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  2,  4,  4,  2,  4,  4,  4,  2,  4,  4, 16, 16,  2,  4,  4,  2,  4,  2, 21,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  3,  2,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  3,  4,  2, 21,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  3,  4,  2, 21,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  2,  2,  4,  2,  2,  4,  4,  2,  4,  4, 16, 16,  2,  4,  4,  2,  4,  2, 21,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  3,  4,  4, 21, 11, 21, 21,  2,  4,  4,  2,  4,  4, 21, 21,  2,  2,  2,  2,  2,  2, 21,  4,  2,  3,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4, 21, 21, 21, 21,  2,  2,  2,  2,  4,  4, 21, 21, 21, 21, 21, 21, 21, 21, 21,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  6,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  2,  2,  2,  4,  4, 15, 25, 25, 25, 15, 15, 15, 15,  4,  4,  2,  2,  2,  2,  2,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  3,  4,  4,  3,  4,  2,  4,  4, 25, 25, 25, 25, 25, 15, 15, 15,  4,  4,  2,  4,  2,  4,  3,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  2,  2,  2,  4,  4, 25, 25, 16, 25, 25, 25, 15, 15,  4,  4,  3,  4,  2,  4,  2,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  3,  4,  4,  4,  4,  4,  4,  4, 15, 25, 25, 25, 15, 25, 25, 15,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  2,  2,  2,  2,  4,  4, 15, 15, 15, 15, 15, 15, 23, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  2,  4,  4,  2,  4,  4, 15, 15, 15, 15, 15, 15, 25, 15,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4, 15, 15, 15, 15, 15, 25, 25, 15,  4,  4,  2,  2,  2,  4,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4, 15, 15, 15, 25, 25, 25, 25, 25,  4,  4,  3,  4,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 15, 15, 25, 25, 25, 16, 25, 25,  4,  4,  2,  2,  2,  4,  4,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4, 15, 25, 25, 25, 16, 16, 25, 25,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  6,  2,  2,  2,  2,  4,  4, 15, 25, 25, 16, 16, 25, 25, 15,  4,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 21, 21, 21, 21, 21, 21,  2,  4,  4, 15, 15, 25, 25, 25, 25, 15, 15,  4,  4,  2,  4,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 21, 21, 21, 21, 21, 21,  2,  4,  4, 15, 15, 15, 25, 25, 15, 15, 15,  4,  4,  2,  3,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2, 21, 21,  2,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  4,  4,  2,  4,  2,  2,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  2, 21, 21,  6,  4,  2,  2,  2,  2,  6,  6,  2,  2,  2,  2,  4,  4,  4,  2,  4,  4,  2,  5,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  3, 21, 21,  2,  4,  2,  9,  9,  9,  9,  9,  9,  9,  9,  2,  4,  2,  4,  4,  4,  4,  3,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  5,  4,  4,  2, 21, 21,  2,  4,  2,  9,  2,  2,  2,  2,  2,  2,  9,  2,  4,  2,  4,  2,  4,  4,  2,  5,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  9,  9,  9,  4,  4,  9,  9,  9,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
                4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4
            ],
            doors: [
                { id: "cantlin_door1", x: 15, y: 26 },
                { id: "cantlin_door2", x: 19, y: 30 },
                { id: "cantlin_door3", x: 25, y: 30 },
                { id: "cantlin_door4", x: 26, y: 30 },
                { id: "cantlin_door5", x: 37, y: 14 }
            ],
            npcs: [
                //weapons store
                { type: "merchant", facing: "down", x: 33, y: 10, wandering: true, talk: function (script) {
                    //TODO: menu
                }},
                { type: "soldier", facing: "down", x: 26, y: 11, wanders: true, talk: function (script) {
                    script.text("cantlin_soldier1");
                }},
                { type: "soldier", facing: "down", x: 33, y: 14, wanders: true, talk: function (script) {
                    script.text("cantlin_soldier2");
                }},
                //inn
                { type: "merchant", facing: "down", x: 19, y: 8, talk: function (script) {
                    script.text("innkeeper1");
                    //TODO: menu
                }},
                //shops left of inn
                { type: "soldier", facing: "down", x: 16, y: 11, wanders: true, talk: function (script) {
                    script.text("cantlin_soldier3");
                    //TODO: yes/no menu
                    //if yes: cantlin_soldier4
                    //if no: cantlin_soldier5
                }},
                { type: "townsman", facing: "right", x: 13, y: 12, talk: function (script) {
                    script.text("item_store1");
                    //TODO: menu
                }},
                { type: "merchant", facing: "right", x: 13, y: 17, talk: function (script) {
                    script.text("cantlin_merchant2");
                }},
                { type: "merchant", facing: "left", x: 18, y: 17, talk: function (script) {
                    script.text("item_store1");
                    //TODO: menu
                }},
                { type: "townswoman", facing: "right", x: 15, y: 18, wanders: true, talk: function (script) {
                    script.text("cantlin_woman1");
                }},
                { type: "townswoman", facing: "left", x: 21, y: 20, wanders: true, talk: function (script) {
                    script.text("cantlin_woman2");
                }},
                //locked store area on right
                { type: "old_man", facing: "down", x: 38, y: 11, talk: function (script) {
                    script.text("key_sales1");
                    //TODO: menu
                }},
                { type: "soldier", facing: "right", x: 35, y: 17, talk: function (script) {
                    script.text("weapons_armor1");
                    //TODO: menu
                }},
                { type: "townswoman", facing: "left", x: 33, y: 18, talk: function (script) {
                    script.text("fairy_water1");
                    //TODO: menu
                }},
                //below locked store area
                { type: "merchant", facing: "right", x: 35, y: 20, wandering: true, talk: function (script) {
                    script.text("cantlin_merchant1");
                }},
                { type: "townsman", facing: "right", x: 30, y: 20, wandering: true, talk: function (script) {
                    script.text("cantlin_man1");
                }},
                //bottom right shops
                { type: "old_man", facing: "down", x: 33, y: 27, talk: function (script) {
                    script.text("cantlin_old_man1");
                }},
                { type: "merchant", facing: "left", x: 38, y: 31, talk: function (script) {
                    script.text("weapons_armor1");
                    //TODO: menu
                }},
                //middle shed area
                { type: "old_man", facing: "down", x: 26, y: 21, talk: function (script) {
                    script.text("cantlin_old_man2");
                }},
                { type: "old_man", facing: "down", x: 26, y: 33, wandering: true, talk: function (script) {
                    script.text("cantlin_old_man3");
                }},
                //bottom left merchant
                { type: "merchant", facing: "right", x: 15, y: 31, wandering: true, talk: function (script) {
                    script.text("cantlin_merchant3");
                }}
            ]
        },

        "Hauksness": {
            type: "dungeon",
            zone: 13,
            player_offset: [0, 9],
            player_start: [12, 6],
            width: 44,
            height: 34,
            map_links: [
                { x: 11, map: "World", set_offsets: [17, 87] },
                { x: 13, map: "World", set_offsets: [17, 87] },
                { y: 5, map: "World", set_offsets: [17, 87] },
                { y: 7, map: "World", set_offsets: [17, 87] }
            ],
            music: "dungeon1",
            layout: [
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2,  2, 21, 21, 15,  2,  2, 21,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2, 22,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 21, 21, 15, 16,  2, 21,  4,  4,  3,  4,  2, 16, 15, 15, 21,  4, 22, 22,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 15,  2,  2,  4,  4,  2,  4,  2, 15, 15, 15,  4, 22, 22, 21,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 15, 15, 15, 22, 22,  2,  2,  4,  2,  2,  2, 15, 22, 15,  4,  4, 22, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 15, 15, 15, 22, 22, 15,  4, 15, 15, 15, 16, 15, 15,  4,  4, 15, 21,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 15,  4,  4,  4, 21, 22, 21,  4,  4,  4, 21, 21,  4,  4, 21,  4, 15, 15,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 15,  4,  4,  4,  4, 21,  4,  4, 21, 21, 21,  4,  4,  4,  4,  4, 15, 16, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 15, 15,  4,  4, 15, 21, 21, 21, 15, 16, 15, 15, 15, 15, 15, 15,  4, 15, 15, 16, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 15,  4,  4, 15, 21,  2,  2,  2,  2, 21,  2,  4,  4,  4,  2,  4,  2,  2, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  4,  4, 21,  4, 15,  2,  4,  4,  4, 21, 21,  2, 22, 15,  2,  4,  3, 22,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  4, 21,  4,  4, 15,  2,  2,  2,  3,  2,  2,  2, 15, 22,  2,  4, 22, 22,  2, 22, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 16,  4,  4, 16,  2, 21, 21,  4,  4,  4,  2, 16, 15,  2,  2, 22,  2,  2, 22, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 16, 15, 21,  4, 16,  2, 21,  2,  4,  2, 21,  2, 16, 16, 21, 21, 22, 22, 16,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 15,  4, 21, 16,  2,  4,  4,  4, 21, 21, 21, 16, 21, 15,  2,  2,  2,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 15,  4,  4, 15,  2,  2,  4,  4,  2,  2,  2, 21, 15, 15,  2, 21, 21, 21,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 22, 21,  4, 15, 21, 21, 16,  4, 21,  4,  4,  4,  4, 21,  4,  4,  3, 21,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22,  4,  4, 15, 15, 21, 15,  4, 16, 15, 15, 15, 15, 15,  2,  4,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22,  4, 21,  4,  4,  4,  4, 15, 15, 15, 15, 22, 15, 15,  2,  2,  2,  2,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,  2, 22, 22, 22, 15, 15, 15, 15, 15, 15, 15, 22, 22, 22, 15, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22,  2,  2,  2,  2, 15,  2, 22, 22, 22, 22,  2,  2,  2, 21,  2,  2,  2, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
                21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21
            ]
        },

        "ErdricksCaveB1": {
            type: "town",
            player_offset: [0, 0],
            player_start: [6, 2],
            width: 25,
            height: 15,
            map_links: [
                { x: 6, y: 2, map: "World", set_offsets: [20, 10] },
                { x: 15, y: 11, map: "ErdricksCaveB2", set_xy: [14, 11] }
            ],
            music: "dungeon1",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 8, 4, 2, 4, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 4, 4, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "ErdricksCaveB2": {
            type: "town",
            player_offset: [0, 0],
            player_start: [14, 11],
            width: 25,
            height: 15,
            map_links: [
                { x: 14, y: 11, map: "ErdricksCaveB1", set_xy: [15, 11] }
            ],
            music: "dungeon2",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 4, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 8, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "SwampCave": {
            type: "dungeon",
            zone: 19,
            player_offset: [0, 0],
            player_start: [9, 1],
            width: 25,
            height: 32,
            map_links: [
                { x: 9, y: 1, map: "World", set_offsets: [96, 42] },
                { offset_y: 17, x: 9, y: 13, map: "World", set_offsets: [96, 47] }
            ],
            music: "dungeon1",
            layout: [
                2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  8,  4,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  4, 24,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  2,  2,  6,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  2,  2,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  2,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  8,  4,  4,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,
                2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2
            ],
            doors: [
                { id: "swamp_cave_door1", x: 14, y: 21 }
            ],
            npcs: [
            ]
        },

        "GarinhamsGraveB1": {
            type: "dungeon",
            zone: 14,
            player_offset: [0, 6],
            player_start: [8, 6],
            width: 25,
            height: 22,
            map_links: [
                { offset_y: 6, x: 8, map: "Garinham", set_offsets: [19, 1] },
                { offset_y: 7, x: 3, y: 12, map: "GarinhamsGraveB2" }
            ],
            music: "dungeon1",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 2, 5, 5, 5, 2, 4, 4, 4, 4, 2, 2, 2, 2,
                2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 4, 2, 4, 2, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 2, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 2, 8, 4, 4, 4, 2, 4, 4, 4, 2, 4, 2, 2, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 4, 4, 4, 4, 2, 4, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 4, 2, 4, 2, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2,
                2, 2, 4, 7, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ],
            doors: [
                { id: "grave_b1_door1", x: 19, y: 18 }
            ]
        },

        "GarinhamsGraveB2": {
            type: "dungeon",
            zone: 7,
            player_offset: [0, 0],
            player_start: [16, 3],
            width: 25,
            height: 15,
            map_links: [
                { x: 16, y: 3, map: "GarinhamsGraveB1", set_offsets: [0, 7], set_xy: [3, 12] },
                { x: 17, y: 2, map: "GarinhamsGraveB3" },
                { x: 6, y: 2, map: "GarinhamsGraveB3", set_xy: [16, 2] },
                { x: 6, y: 11, map: "GarinhamsGraveB3", set_offsets: [0, 7], set_xy: [4, 11] },
                { x: 17, y: 11, map: "GarinhamsGraveB3", set_offsets: [0, 7], set_xy: [20, 7] },
                { x: 10, y: 7, map: "GarinhamsGraveB3", set_offsets: [0, 6], set_xy: [8, 6] }
            ],
            music: "dungeon1",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 7, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 7, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 8, 4, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 7, 4, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 7, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 7, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "GarinhamsGraveB3": {
            type: "dungeon",
            zone: 15,
            player_offset: [0, 0],
            player_start: [20, 2],
            width: 25,
            height: 22,
            map_links: [
                { x: 20, y: 2, map: "GarinhamsGraveB2", set_xy: [17, 2] },
                { x: 16, y: 2, map: "GarinhamsGraveB2", set_xy: [6, 2] },
                { offset_y: 0, x: 11, y: 6, map: "GarinhamsGraveB4" },
                { offset_y: 4, x: 12, y: 6, map: "GarinhamsGraveB4", set_xy: [12, 7] },
                { offset_y: 6, x: 8, map: "GarinhamsGraveB2", set_xy: [10, 7] },
                { offset_y: 7, x: 4, y: 11, map: "GarinhamsGraveB2", set_xy: [6, 11] },
                { offset_y: 7, x: 20, y: 7, map: "GarinhamsGraveB2", set_xy: [17, 11] }
            ],
            music: "dungeon3",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 5, 4, 2, 4, 4, 4, 4, 4, 2, 4, 2, 4, 2, 8, 4, 2, 4, 8, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 4, 4, 4, 2, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 2, 2, 4, 2, 4, 7, 2, 4, 4, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 5, 4, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 4, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 4, 4, 4, 4, 2, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 4, 4, 2, 4, 2, 7, 4, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 8, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 2, 4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 2, 8, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 4, 2, 4, 4, 2, 4, 2, 4, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2,
                2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 8, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2,
                2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2,
                2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "GarinhamsGraveB4": {
            type: "dungeon",
            zone: 15,
            player_offset: [0, 0],
            player_start: [7, 7],
            width: 25,
            height: 15,
            map_links: [
                { x: 7, y: 7, map: "GarinhamsGraveB3", set_xy: [11, 6] },
                { x: 12, y: 7, map: "GarinhamsGraveB3", set_offsets: [0, 4], set_xy: [12, 6] }
            ],
            music: "dungeon4",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 4, 2, 2, 8, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "MountainCaveB1": {
            type: "dungeon",
            zone: 19,
            player_offset: [0, 1],
            player_start: [6, 7],
            width: 25,
            height: 16,
            map_links: [
                { offset_y: 1, x: 6, y: 7, map: "World", set_offsets: [21, 55] },
                { x: 6, y: 1, map: "MountainCaveB2" },
                { offset_y: 0, x: 12, y: 6, map: "MountainCaveB2", set_xy: [12, 6] },
                { x: 18, y: 12, map: "MountainCaveB2", set_offsets: [0, 1], set_xy: [18, 12] }
            ],
            music: "dungeon1",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 7, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 7, 4, 4, 4, 4, 2, 4, 5, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 8, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 4, 2, 4, 4, 7, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "MountainCaveB2": {
            type: "dungeon",
            zone: 14,
            player_offset: [0, 0],
            player_start: [6, 1],
            width: 25,
            height: 16,
            map_links: [
                { x: 6, y: 1, map: "MountainCaveB1", set_offsets: [0, 0], set_xy: [6, 1] },
                { offset_y: 0, x: 12, y: 6, map: "MountainCaveB1", set_offsets: [0, 0], set_xy: [12, 6] },
                { x: 18, y: 12, map: "MountainCaveB1", set_xy: [18, 12] }
            ],
            music: "dungeon2",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 8, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 2, 4, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 2, 4, 2, 4, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 8, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 5, 4, 2, 4, 2, 4, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 4, 2, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 5, 2, 2, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 8, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastle1F": {
            type: "dungeon",
            zone: 16,
            player_offset: [0, 11],
            player_start: [12, 11],
            width: 25,
            height: 26,
            map_links: [
                { x: 13, y: 4, map: "CharlockCastleB1" },
                { x: 7, y: 6, offset_y: 11, map: "CharlockCastleB1", set_offsets: [0, 7], set_xy: [11, 7] },
                { x: 18, y: 6, offset_y: 11, map: "CharlockCastleB1", set_offsets: [0, 7], set_xy: [20, 9] },
                { y: 12, map: "World", set_offsets: [40, 46] }
            ],
            music: "dungeon1",
            layout: [
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22,  2,  2,  2, 22, 22,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 22, 22, 22, 22,
                22, 22, 22, 22,  2,  2,  4,  2,  2, 22,  2,  9,  9,  9,  9,  9,  2,  4,  4,  4,  2,  2, 22, 22, 22,
                22, 22, 22,  2,  2,  4,  4,  4,  2,  2,  2,  9,  3,  3,  3,  9,  2,  4,  2,  4,  4,  2,  2, 22, 22,
                22, 22, 22,  2,  4,  4,  2,  4,  4,  4,  2,  9,  3,  4,  3,  9,  2,  4,  4,  4,  4,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  2,  2,  2,  4,  2,  9,  9,  9,  9,  9,  2,  2,  4,  2,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  4,  4,  4,  4,  2,  9,  9,  9,  9,  9,  2,  4,  4,  4,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  2,  4,  2,  4,  2,  2,  4,  4,  4,  2,  2,  4,  2,  4,  4,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  4,  4,  4,  4,  4,  2,  2,  9,  2,  2,  4,  4,  4,  4,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  2,  6,  2,  2,  4,  2,  4,  4,  4,  2,  2,  2,  6,  2,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  9,  9,  9,  2,  4,  2,  2,  9,  2,  2,  2,  9,  9,  9,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  9,  2,  9,  2,  4,  2,  4,  4,  4,  2,  2,  9,  2,  9,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  9,  9,  9,  2,  4,  2,  2,  9,  2,  2,  2,  9,  9,  9,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  9,  2,  9,  2,  4,  4,  4,  4,  4,  2,  2,  9,  2,  9,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  9,  9,  9,  2,  2,  2,  2,  2,  2,  2,  2,  9,  9,  9,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  2,  2,  7,  2,  2,  4,  4,  4,  4,  4,  4,  2,  2,  7,  2,  2,  4,  2, 22, 22,
                22, 22, 22,  2,  4,  4,  2,  2,  2,  4,  4,  2,  4,  4,  2,  4,  4,  2,  2,  2,  4,  4,  2, 22, 22,
                22, 22, 22,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2, 22, 22,
                22, 22, 22, 22,  2,  2,  4,  4,  4,  2,  2,  2,  4,  4,  2,  2,  2,  4,  4,  4,  2,  2, 22, 22, 22,
                22, 22, 22, 22, 22,  2,  2,  2,  2,  2, 22,  2,  4,  4,  2, 22,  2,  2,  2,  2,  2, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,  2,  4,  4,  2, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
                22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22
            ],
            doors: [
                { id: "charlock_1f_door1", x: 7, y: 11 },
                { id: "charlock_1f_door2", x: 18, y: 11 }
            ],
        },

        "CharlockCastleB1": {
            type: "dungeon",
            zone: 16,
            player_offset: [0, 0],
            player_start: [12, 1],
            width: 25,
            height: 22,
            map_links: [
                { x: 12, y: 1, map: "CharlockCastle1F", set_offsets: [0, 0], set_xy: [13, 4] },
                { x: 11, y: 7, offset_y: 7, map: "CharlockCastle1F", set_offsets: [0, 11], set_xy: [7, 6] },
                { x: 20, y: 9, offset_y: 7, map: "CharlockCastle1F", set_offsets: [0, 11], set_xy: [18, 6] },
                { x: 18, y: 1, map: "CharlockCastleB2", set_xy: [15, 2] },
                { x: 5, y: 5, map: "CharlockCastleB2", set_xy: [7, 2] },
                { x: 16, offset_y:2, map: "CharlockCastleB2", set_xy: [11, 6] },
                { x: 22, offset_y: 2, map: "CharlockCastleB2", set_xy: [16, 10] },
                { x: 17, offset_y: 4, map: "CharlockCastleB2", set_xy: [15, 11] },
                { x: 5, y: 8, map: "CharlockCastleB2", set_xy: [7, 3] },
                { x: 11, y: 13, map: "CharlockCastleB2", set_xy: [12, 2] }
            ],
            music: "dungeon2",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 8, 2, 4, 4, 4, 2, 7, 4, 4, 4, 4, 2, 2,
                2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 7, 4, 2, 4, 2, 2, 4, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 2, 2, 2,
                2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2,
                2, 2, 2, 4, 4, 4, 4, 2, 2, 4, 2, 4, 4, 4, 4, 2, 4, 4, 2, 2, 4, 4, 4, 2, 2,
                2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 2, 4, 4, 2, 2, 7, 4, 2, 4, 4, 2, 7, 2, 2,
                2, 2, 2, 4, 2, 2, 4, 2, 4, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2,
                2, 2, 2, 4, 4, 4, 4, 2, 4, 2, 4, 4, 2, 2, 4, 4, 2, 7, 2, 2, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 2, 2, 2, 4, 2, 4, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 2, 4, 4, 2, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 2, 4, 4, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 2, 2, 2, 4, 2, 8, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 7, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 2,
                2, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 8, 4, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 2, 2,
                2, 2, 2, 4, 2, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2,
                2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2,
                2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 7, 2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastleB2": {
            type: "dungeon",
            zone: 17,
            player_offset: [0, 0],
            player_start: [12, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 15, y: 2, map: "CharlockCastleB1", set_xy: [18, 1] },
                { x: 7, y: 2, map: "CharlockCastleB1", set_xy: [5, 5] },
                { x: 11, y: 6, map: "CharlockCastleB1", set_offsets: [0, 2], set_xy: [16, 6] },
                { x: 16, y: 10, map: "CharlockCastleB1", set_offsets: [0, 2], set_xy: [22, 6] },
                { x: 15, y: 11, map: "CharlockCastleB1", set_offsets: [0, 4], set_xy: [17, 6] },
                { x: 7, y: 3, map: "CharlockCastleB1", set_offsets: [0, 7], set_xy: [5, 8] },
                { x: 12, y: 2, map: "CharlockCastleB1", set_offsets: [0, 7], set_xy: [11, 13] },
                { x: 16, y: 3, map: "CharlockCastleB3", set_xy: [9, 4] },
                { x: 10, y: 2, map: "CharlockCastleB3", set_xy: [14, 2] },
                { x: 7, y: 10, map: "CharlockCastleB3", set_xy: [12, 6] },
                { x: 8, y: 11, map: "CharlockCastleB3", set_xy: [7, 11] }
            ],
            music: "dungeon3",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 2, 7, 2, 8, 4, 2, 8, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 2, 2, 4, 2, 2, 4, 2, 2, 7, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 8, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 5, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 7, 2, 2, 4, 2, 2, 4, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 7, 2, 4, 4, 4, 4, 2, 8, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ],
            chests: [
                { id: "charlock_b2_chest1", x: 12, y: 7, take: function () {
                    player.add_item("erdricks_sword");
                }}
            ]
        },

        "CharlockCastleB3": {
            type: "dungeon",
            zone: 17,
            player_offset: [0, 0],
            player_start: [12, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 9, y: 4, map: "CharlockCastleB2", set_xy: [16, 3] },
                { x: 14, y: 2, map: "CharlockCastleB2", set_xy: [10, 2] },
                { x: 12, y: 6, map: "CharlockCastleB2", set_xy: [7, 10] },
                { x: 7, y: 11, map: "CharlockCastleB2", set_xy: [8, 11] },
                { x: 8, y: 8, map: "CharlockCastleB4", set_xy: [7, 11] },
                { x: 14, y: 9, map: "CharlockCastleB4", set_xy: [14, 9] }
            ],
            music: "dungeon4",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 8, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 8, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 8, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 7, 2, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 7, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastleB4": {
            type: "dungeon",
            zone: 17,
            player_offset: [0, 0],
            player_start: [12, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 7, y: 11, map: "CharlockCastleB3", set_xy: [8, 8] },
                { x: 14, y: 9, map: "CharlockCastleB3", set_xy: [14, 9] },
                { x: 9, y: 4, map: "CharlockCastleB5", set_xy: [16, 2] },
                { x: 15, y: 3, map: "CharlockCastleB5", set_xy: [11, 2] }
            ],
            music: "dungeon5",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 4, 7, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 7, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 4, 2, 8, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastleB5": {
            type: "dungeon",
            zone: 18,
            player_offset: [0, 0],
            player_start: [12, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 16, y: 2, map: "CharlockCastleB4", set_xy: [9, 4] },
                { x: 11, y: 2, map: "CharlockCastleB4", set_xy: [15, 3] },
                { x: 12, y: 7, map: "CharlockCastleB6", set_xy: [7, 2] },
                { x: 7, y: 2, map: "CharlockCastleB6", set_xy: [7, 9] }
            ],
            music: "dungeon6",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 7, 2, 4, 2, 8, 4, 4, 4, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 7, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastleB6": {
            type: "dungeon",
            zone: 18,
            player_offset: [0, 0],
            player_start: [12, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 7, y: 2, map: "CharlockCastleB5", set_xy: [12, 7] },
                { x: 16, y: 2, map: "CharlockCastleB6", set_xy: [7, 2] },
                { x: 7, y: 9, map: "CharlockCastleB5", set_xy: [7, 2] },
                { x: 16, y: 9, map: "CharlockCastleB7" }
            ],
            music: "dungeon7",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 4, 4, 4, 4, 4, 4, 4, 7, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 8, 4, 4, 4, 4, 4, 4, 4, 4, 7, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ]
        },

        "CharlockCastleB7": {
            type: "dungeon",
            zone: 18,
            player_offset: [0, 17],
            player_start: [11, 13],
            width: 32,
            height: 32,
            map_links: [
                { x: 11, y: 13, map: "CharlockCastleB6", set_xy: [16, 9] }
            ],
            music: "dungeon8",
            layout: [
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25,  2,  2,  2,  2, 25, 25, 25, 25, 25, 25, 25,  2,  2,  2,  2,  2,  2,  2,  2,  2, 25,  2,  2,  2, 25, 25, 25, 25,
                25, 25, 25,  2,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  2,  4,  4,  4,  2,  2,  2,  4,  2,  2, 25, 25, 25,
                25, 25,  2,  2,  4,  4,  4,  4,  2,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  2,  2, 25, 25,
                25, 25,  2,  4,  4,  4,  4,  4,  4,  2,  2,  4,  4,  2,  2,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2,  4,  2,  4,  4,  2, 25, 25,
                25, 25,  2,  4,  4,  2,  4,  4,  4,  2,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  4,  4,  4,  4,  4,  4,  4,  2, 25, 25,
                25, 25,  2,  4,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  2,  2,  2,  2,  2,  4,  2,  2,  2,  2,  2,  4,  2,  4,  4,  2, 25, 25,
                25, 25,  2,  2,  4,  4,  4,  4,  2,  2,  4,  4,  4,  4,  2,  4,  4,  4,  2,  2,  2,  4,  4,  4,  2,  4,  4,  4,  2,  2, 25, 25,
                25, 25, 25,  2,  2,  4,  4,  2,  2,  4,  4,  4,  4,  4,  2,  2,  4,  4,  4,  4,  4,  4,  4,  2,  2,  2,  4,  2,  2, 21, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  2,  4,  4,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  4,  4,  2,  2, 21,  2,  4,  2, 21, 21, 25, 25,
                25, 25, 25, 25,  2,  4,  4,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2,  2,  4,  4,  4,  2,  2, 21, 21, 21, 21, 21, 21, 25, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  2,  2,  2,  2,  4,  5,  4,  4,  4,  2,  2,  2,  4,  2,  2, 21, 21, 25, 21, 21, 21, 25, 25, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  4,  4,  2,  4,  5,  5,  4,  4,  4,  4,  6,  4,  2, 21, 21, 25, 25, 25, 25, 21, 23, 21, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  2,  4,  2,  4,  5,  5,  5,  4,  2,  2,  2,  4,  2,  2, 21, 25, 25, 25, 25, 25, 25, 15, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  4,  4,  2,  4,  4,  4,  4,  4,  2,  2,  4,  4,  4,  2, 25, 25, 25, 21, 25, 25, 22, 15, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  2,  4,  2,  2,  2,  2,  2,  2,  2,  4,  4,  4,  2,  2, 25, 21, 25, 22, 21, 23, 21, 25, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  4,  4,  2,  2,  4,  4,  4,  4,  4,  4,  4,  2,  2, 25, 25, 25, 25, 15, 15, 25, 25, 25, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  2,  4,  2,  4,  4,  4,  2,  2,  2,  4,  2,  2, 25, 25, 25, 21, 25, 25, 22, 21, 25, 25, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  4,  4,  2,  4,  4,  2,  2, 25,  2,  2,  2, 25, 25, 25, 21, 21, 25, 21, 22, 15, 25, 21, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  2,  4,  2,  4,  2,  2, 25, 25, 25, 25, 25, 25, 25, 21, 21, 25, 25, 21, 21, 15, 21, 21, 25, 25,
                25, 25, 25, 25,  2,  4,  2,  4,  4,  4,  2,  4,  2, 25, 25, 25,  2,  2,  2, 25, 25, 25, 25, 25, 21, 21, 22, 22, 21, 25, 25, 25,
                25, 25, 25,  2,  2,  4,  2,  2,  4,  2,  2,  4,  2,  2, 25,  2,  2,  4,  2,  2, 25, 25, 25, 21, 21, 15, 15, 22, 21, 21, 25, 25,
                25, 25,  2,  2,  4,  4,  4,  2,  4,  2,  4,  4,  4,  2,  2,  2,  4,  4,  4,  2,  2, 25, 25, 21,  2,  2,  4,  2,  2, 21, 25, 25,
                25, 25,  2,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2,  2,  4,  3,  3,  4,  4,  2,  2,  2,  2,  2,  4,  4,  4,  2, 21, 25, 25,
                25, 25,  2,  4,  4,  2,  4,  4,  2,  2,  4,  4,  4,  2,  4,  4,  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  2, 15, 25, 25,
                25, 25,  2,  4,  4,  4,  4,  4,  2,  2,  2,  4,  2,  2,  2,  4,  3,  3,  4,  4,  2,  2,  2,  2,  2,  4,  4,  4,  2, 15, 25, 25,
                25, 25,  2,  2,  4,  4,  4,  2,  2, 25,  2,  4,  2, 25,  2,  2,  4,  4,  4,  2,  2, 25, 25, 22,  2,  2,  2,  2,  2, 21, 25, 25,
                25, 25, 25,  2,  2,  4,  2,  2, 25, 25,  2,  4,  2, 25, 25,  2,  2,  4,  2,  2, 25, 25, 25, 21, 21, 22, 22, 22, 21, 21, 25, 25,
                25, 25, 25, 25,  2,  2,  2, 25, 25, 22,  2,  4,  2, 22, 25, 25,  2,  2,  2, 25, 25, 25, 25, 25, 21, 21, 21, 21, 21, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 22, 22,  2,  8,  2, 22, 22, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
                25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25
            ],
            doors: [
                { id: "charlock_b7_door1", x: 18, y: 13 }
            ],
            chests: [
                { id: "charlock_b7_chest1", x: 14, y: 14, take: function () {
                    player.add_item("herb");
                }},
                { id: "charlock_b7_chest2", x: 13, y: 14, take: function () {
                    player.add_item("cursed_belt");
                }},
                { id: "charlock_b7_chest3", x: 12, y: 14, take: function () {
                    player.add_item("wyvern_wings");
                }},
                { id: "charlock_b7_chest4", x: 12, y: 13, take: function () {
                    player.add_gold(680);
                }},
                { id: "charlock_b7_chest5", x: 12, y: 12, take: function () {
                    player.add_item("herb");
                }},
                { id: "charlock_b7_chest6", x: 13, y: 13, take: function () {
                    player.add_item("magic_key");
                }}
            ],
            npcs: [
                { type: "dragonlord", facing: "down", x: 17, y: 25, talk: function (script) {
                    script.text("dragonlord1");
                    //TODO: menu
                }}
            ]
        },

        "NorthShrine": {
            type: "town",
            player_offset: [0, 0],
            player_start: [11, 11],
            width: 25,
            height: 15,
            map_links: [
                { x: 11, y: 11, map: "World", set_offsets: [73, 0], set_xy: [12, 5] }
            ],
            music: "town",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 5, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ],
            npcs: [
                { type: "old_man", facing: "right", x: 11, y: 6, talk: function (script) {
                    //TODO:
                }}
            ]
        },

        "SouthShrine": {
            type: "town",
            player_offset: [0, 0],
            player_start: [8, 6],
            width: 25,
            height: 15,
            map_links: [
                { x: 8, y: 6, map: "World", set_offsets: [100, 107] }
            ],
            music: "town",
            layout: [
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 8, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 5, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 4, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
            ],
            npcs: [
                { type: "old_man", facing: "left", x: 12, y: 7, talk: function (script) {
                    //TODO:
                }}
            ]
        }
    }
};;var text = {
    game_title: "Dragon Warrior",
    name_prompt: "What is thy name?",
    default_player_name: "Yuji Horii",
    welcome: "Welcome, descendent of Erdrick.",
    dead: "Thou art dead.",
    weapons: {
        none: "None",
        bamboo_pole: "Bamboo Pole",
        club: "Club",
        copper_sword: "Copper Sword",
        hand_axe: "Hand Axe",
        broad_sword: "Broad Sword",
        flame_sword: "Flame Sword",
        erdricks_sword: "Erdrick's Sword"
    },
    armors: {
        none: "None",
        clothes: "Clothes",
        leather_armor: "Leather Armor",
        chain_mail: "Chain Mail",
        half_plate: "Half Plate",
        full_plate: "Full Plate",
        magic_armor: "Magic Armor",
        erdricks_armor: "Erdrick's Armor"
    },
    shields: {
        none: "None",
        leather_shield: "Leather Shield",
        iron_shield: "Iron Shield",
        silver_shield: "Silver Shield"
    },
    items: {
        herb: "Herb",
        torch: "Torch",
        magic_key: "Magic Key",
        dragon_scale: "Dragon's Scale",
        fairy_water: "Fairy Water",
        wyvern_wings: "Wings",
        cursed_belt: "Cursed Belt",
        cursed_necklace: "Death Necklace",
        fairy_flute: "Fairy Flute",
        silver_harp: "Silver Harp",
        stones_of_sunlight: "Stones of Sunlight",
        staff_of_rain: "Staff of Rain",
        rainbow_drop: "Rainbow Drop",
        erdricks_tablet: "Erdrick's Tablet",
        erdricks_token: "Erdrick's Token",
        ball_of_light: "Ball of Light",
        fighters_ring: "Fighter's Ring",
        gwaelins_love: "Gwaelin's Love"
    },
    spells: {
        heal: "Heal",
        hurt: "Hurt",
        sleep: "Sleep",
        radiant: "Radiant",
        stopspell: "Stopspell",
        outside: "Outside",
        "return": "Return",
        repel: "Repel",
        healmore: "Healmore",
        hurtmore: "Hurtmore"
    },
    enemies: {
        slime: "Slime",
        red_slime: "Red Slime",
        drakee: "Drakee",
        ghost: "Ghost",
        magician: "Magician",
        magidrakee: "Magidrakee",
        scorpion: "Scorpion",
        druin: "Druin",
        poltergeist: "Poltergeist",
        droll: "Droll",
        drakeema: "Drakeema",
        skeleton: "Skeleton",
        warlock: "Warlock",
        metal_scorpion: "Metal Scorpion",
        wolf: "Wolf",
        wraith: "Wraith",
        metal_slime: "Metal Slime",
        specter: "Specter",
        wolflord: "Wolflord",
        druinlord: "Druinlord",
        drollmagi: "Drollmagi",
        wyvern: "Wyvern",
        rogue_scorpion: "Rogue Scorpion",
        wraith_knight: "Wraith Knight",
        golem: "Golem",
        goldman: "Goldman",
        knight: "Knight",
        magiwyvern: "Magiwyvern",
        demon_knight: "Demon Knight",
        werewolf: "Werewolf",
        green_dragon: "Green Dragon",
        starwyvern: "Starwyvern",
        wizard: "Wizard",
        axe_knight: "Axe Knight",
        blue_dragon: "Blue Dragon",
        stoneman: "Stoneman",
        armored_knight: "Armored Knight",
        red_dragon: "Red Dragon",
        dragonlord_first_form: "Dragonlord",
        dragonlord_second_form: "Dragonlord"
    },
    combat: {
        cast_blocked: "But that spell hath been blocked.",
        prompt: "Command?",
        player: {
            attack: "<player_name> attacks!",
            hit_critical: "Excellent move!",
            hit: "The <enemy>'s Hit Points have been reduced by <number>.",
            miss: "The attack failed and there was no loss of Hit Points!",
            run: "<player_name> started to run away.",
            run_blocked: "But was blocked in front.",
            cast_sleep: "Thou hast put the <enemy> to sleep.",
            cast_blocked: "The spell will not work.",
            asleep: "Thou art asleep.",
            asleep_still: "Thou art still asleep.",
            awoke: "<player_name> awakes."
        },
        enemy: {
            near: "A <enemy> draws near!",
            attack: "The <enemy> attacks!",
            hit: "Thy Hits decreased by <number>.",
            miss: "A miss! No damage hath been scored!",
            run: "The <enemy> is running away.",
            strike_first: "The <enemy> attacked before <player_name> was ready.",
            dodge: "It is dodging!",
            asleep: "The <enemy> is asleep.",
            awoke: "<enemy> hath woken up.",
            cast: "<enemy> chants the spell of <spell>.",
            fire: "The <enemy> is breathing fire.",
            recovered: "The <enemy> hath recovered."
        },
        victory: {
            defeated: "Thou hast done well in defeating the <enemy>.",
            gain_exp: "Thy Experience increases by <number>.",
            gain_gold: "Thy GOLD increases by <number>.",
            next_level: "Courage and wit have served thee well. Thou hast been promoted to the next level.",
            gain_strength: "Thy power increases by <number>.",
            gain_agility: "Thy Response Speed increases by <number>.",
            gain_hp: "Thy Maximum Hit <points?> increase by <number>.",
            gain_mp: "Thy Maximum Magic <points?> increase by <number>.",
            gain_spell: "Thou hast learned a new spell."
        }
    },
    menu: {
        talk_none: "There is no one there.",
        door: {
            none: "There is no door here.",
            no_key: "Thou hast not a key to use."
        },
        take: {
            none: "There is nothing to take here, <player_name>.",
            gold: "Of GOLD thou hast gained <number>",
            item: "Fortune smiles upon thee, <player_name>. Thou hast found the <item>.",
            empty: "Unfortunately, it is empty.",
            too_many_items: "If thou would take the <item>, thou must now discard some other item.",
            want_item: "Dost thou wish to have the <item>?",
            give_up_item: "Thou hast given up thy <item>.",
            drop_which: "What shall thou drop?",
            drop_item: "Thou hast dropped thy <item>.",
            got_item: "And obtained the <item>.",
            drop_blocked: "That is much too important to throw away."
        },
        use: {
            none: "Nothing of use has yet been given to thee.",
            generic: "<player_name> held the <item> tightly.",
            herb: "<player_name> used the Herb.",
            wings: "<player_name> threw The Wings of the Wyvern up into the sky.",
            wings_blocked: "The Wings of the Wyvern cannot be used here.",
            scale: "<player_name> donned the scale of the dragon.",
            scale_twice: "Thou art already wearing the scale of the dragon.",
            flute: "<player_name> blew the Fairies' Flute.",
            flute_golem: "Quietly Golem closes his eyes and settles into sleep.",
            ring: "<player_name> put on the Fighter's Ring.",
            ring_twice: "<player_name> adjusted the position of the Fighter's Ring.",
            harp: "<player_name> played a sweet melody on the harp.",
            rainbow_drop: "<player_name> held the Rainbow Drop toward the sky. But no rainbow appeared here.",
            torch_blocked: "A torch can be used only in dark places.",
            no_effect: "But nothing happened.",
            use_blocked: "That cannot be used in battle.",
            fairy_water: "<player_name> sprinkled the Fairy Water over his body.",
            cursed: "<player_name> put on the <item> and was cursed!.",
            fairy_water_gone: "The Fairy Water has lost its effect."
        },
        search: {
            begin: "<player_name> searched the ground all about.",
            none: "But there found nothing.",
            treasure: "There is a treasure box.",
            item: "<player_name> discovers the <item>.",
            dragonlord_throne: "Feel the wind blowing from behind the throne."
        },
        spell: {
            cast: "<player_name> chanted the spell of <spell name>.",
            repel_gone: "REPEL has lost its effect.",
            low_mp: "Thy MP is too low."
        }
    },
    script: {
        //Common
        innkeeper1: "Welcome to the traveler's Inn. Room and board is <number> GOLD per night. Dost thou want a room?",
        innkeeper2: "Good night.",
        innkeeper3: [
            "Good morning. Thou seems to have spent a good night.",
            "I shall see thee again."
        ],
        innkeeper4: "Okay. Good-bye, traveler.",
        weapons_armor1: "We deal in weapons and armor. Dost thou wish to buy anything today?",
        item_store1: "Welcome. We deal in tools. What can I do for thee?",
        key_sales1: "Magic keys! They will unlock any door. Dost thou wish to purchase one for <number> GOLD?",
        key_sales2: "Here,take this key. Dost thou wish to purchase more?",
        fairy_water1: "Will thou buy some Fairy Water for <number> GOLD to keep the Dragonlord's minions away?",
        fairy_water2: "I thank thee. Won't thou buy one more bottle?",
        erdrick_proof: "Art thou the descendant of Erdrick? Hast thou any proof?",
        save_us: "Please, save us from the minions of the Dragonlord.",
        //Tantegel (throne room)
        tantegel_throne_king1: [
            "Descendant of Erdrick, listen now to my words.",
            "It is told that in ages past Erdrick fought demons with a Ball of Light.",
            "Then came the Dragonlord who stole the precious globe and hid it in the darkness.",
            "Now, <player_name>, thou must help us recover the Ball of Light and restore peace to our land.",
            "The Dragonlord must be defeated.",
            "Take now whatever thou may find in these Treasure Chests to aid thee in thy quest.",
            "Then speak with the guards, for they have much knowledge that may aid thee.",
            "May the light shine upon thee, <player_name>."
        ],
        tantegel_throne_king2: [
            "Death should not have taken thee, <player_name>.",
            "I will give thee another chance.",
            "To reach the next level, thy Experience must increase by <number>.",
            "Now, go, <player_name>!"
        ],
        tantegel_throne_king3: [
            "I am greatly pleased that thou hast returned, <player_name>.",
            "Before reaching thy next level of experience thou must gain <number of experience>.",
            "If thou dies I can bring thee back for another attempt without loss of thy deeds to date.",
            "Goodbye now, <player_name>. Take care and tempt not the Fates."
        ],
        tantegel_throne_guard1: [
            "East of this castle is a town where armor, weapons, and many other items may be purchased.",
            "Return to the Inn for a rest if thou art wounded in battle, <player_name>.",
            "Sleep heals all."
        ],
        tantegel_throne_guard2: [
            "If thou hast collected all the Treasure Chests, a key will be found.",
            "Once used, the key will disappear, but the door will be open and thou may pass through."
        ],
        //Tantegel
        tantegel_soldier1: "Welcome to Tantegel Castle.",
        tantegel_soldier2: "When entering the cave, take with thee a torch.",
        tantegel_soldier3: "Oh, my dearest Gwaelin! I hate thee, <player_name>.",
        tantegel_soldier4: "King Lorik will record thy deeds in his Imperial Scroll so thou may return to thy quest later.",
        tantegel_soldier5: "If thou art planning to take a rest, first see King Lorik.",
        tantegel_soldier6: "Never does a brave person steal.",
        tantegel_soldier7: "Thou must have a key to open a door.",
        tantegel_soldier8: "If thy Hit Points are high enough, by all means, enter.",
        tantegel_soldier9: "I am looking for the castle cellar. I heard it is not easily found.",
        tantegel_soldier10: "In Garinham, look for the grave of Garin. Thou must push on a wall of darkness there.",
        tantegel_merchant1: "We are merchants who have traveled much in this land. Many of our colleagues have been killed by servants of the Dragonlord.",
        tantegel_merchant2: "Rumor has it that entire towns have been destroyed by the Dragonlord's servants.",
        tantagel_old_man1: "<player_name>'s coming was foretold by legend. May the light shine upon this brave warrior.",
        tantagel_old_man2: [
            "Let us wish the warrior well!",
            "May the light be thy strength!"
        ],
        tantegel_man1: "There was a time when Brecconary was a paradise. Then the Dragonlord's minions came.",
        tantegel_man2: "To become strong enough to face future trials thou must first battle many foes.",
        tantegel_woman1: "Thank you for saving the Princess.",
        tantegel_woman2: [
            "When the sun and rain meet, a Rainbow Bridge shall appear.",
            "It's a legend."
        ],
        //Tantegel basement
        tantegel_basement_old_man1: "Thou hast no business here. Go away.",
        //Brecconary
        brecconary_man1: "Go north to the seashore, then follow the coastline west until thou hath reached Garinham.",
        brecconary_man2: "Thou art most welcome in Brecconary.",
        brecconary_man3: "Enter where thou can.",
        brecconary_man4: [
            "Within sight of Tantegel Castle to the south is Charlock,",
            "The fortress of the Dragonlord."
        ],
        brecconary_man5: "There is a town where magic keys can be purchased.",
        brecconary_woman1: "Welcome! Enter the shop and speak to its keeper across the desk.",
        brecconary_woman2: "No, I am not Princess Gwaelin.",
        brecconary_old_man1: "Watch thy Hit Points when in the Poisonous Marsh.",
        brecconary_old_man2: "If thou art cursed, come again.",
        brecconary_soldier1: "Some say that Garin's grave is home to a Silver Harp.",
        brecconary_soldier2: [
            "Many have been the warriors who have perished on this quest.",
            "But for thee I wish success, <player_name>."
        ],
        brecconary_soldier4: "Who touches me? I see nothing, nor can I hear.",
        brecconary_soldier5: [
            "Beware the bridges!",
            "Danger grows when thou crosses."
        ],
        brecconary_soldier6: "See King Lorik when thy experience levels are raised.",
        //Kol
        kol_old_man1: "Hast thou found the flute?",
        kol_old_man2: "Finally thou hast obtained it, <player_name>.",
        kol_old_man3: "This is the village of Kol.",
        kol_old_man4: "In legends it is said that fairies know how to put Golem to sleep.",
        kol_soldier1: "Rimuldar is the place to buy keys.",
        kol_soldier2: "Golem is afraid of the music of the flute, so 'tis said.",
        kol_soldier3: "East of Hauksness there is a town, 'tis said, where one may purchase weapons of extraordinary quality.",
        kol_merchant1: "Hast thou been to the southern island?",
        kol_woman1: "This bath cures rheumatism.",
        kol_man1: [
            "Dreadful is the South Island.",
            "Great strength and skill and wit only will bring thee back from that place."
        ],
        //Garinham
        garinham_old_man1: "Garin, a wandering minstrel of legendary fame, is said to have built this town.",
        garinham_old_man2: "Many believe that Princess Gwaelin is hidden away in a cave.",
        garinham_old_man3: "The harp attracts enemies. Stay away from the grave in Garinham.",
        garinham_old_man4: "They say that Erdrick's armor was hidden long ago.",
        garinham_soldier1: "I have heard of one named Nester. Dost thou know such a one?",
        garinham_soldier2: "I'm too busy. Ask the other guard.",
        garinham_woman1: "Welcome to Garinham. May thy stay be a peaceful one.",
        garinham_woman2: "I hate people! Go! Leave me!",
        garinham_man1: "It is said that the Princess was kidnapped and taken eastward.",
        garinham_man2: "Once there was a town called Hauksness far to the south, but I do not know if it still exists.",
        garinham_merchant1: "I suggest making a map if thy path leads into the darkness.",
        //Rimuldar
        rimuldar_woman1: "Who art thou? Leave at once or I will call my friends.",
        rimuldar_woman2: "No, I have no tomatoes. I have no tomatoes today.",
        rimuldar_woman3: "Before long the enemy will arrive.",
        rimuldar_woman4: "Orwick is late again. I'm starving.",
        rimuldar_soldier1: "The scales of the Dragonlord are as hard as steel.",
        rimuldar_soldier2: "You are <player_name>? It has been long since last we met.",
        rimuldar_soldier3: "Is that a wedding ring? Thou seems too young to be married.",
        rimuldar_soldier4: "Thou shalt find the Stones of Sunlight in Tantegel Castle, if thou has not found them yet.",
        rimuldar_soldier5: "In this world is there any sword that can pierce the scales of the Dragonlord?",
        rimuldar_man1: "Welcome to the town of Rimuldar.",
        rimuldar_man2: "Heed my warning! Travel not to the south for there the monsters are fierce and terrible.",
        rimuldar_man3: "I am Orwick, and I am waiting for my girl friend.",
        rimuldar_old_man1: "Good day,I am Howard. Four steps south of the bath in Kol thou shalt find a magic item.",
        rimuldar_old_man2: [
            "Over the western part of this island Erdrick created a rainbow.",
            "'Tis also said that he entered the darkness from a hidden entrance in the room of the Dragonlord."
        ],
        rimuldar_old_man3: "This is a magic place. Hast thou found a magic temple?",
        rimuldar_merchant1: "Welcome!",
        //Cantlin
        cantlin_soldier1: "Welcome to Cantlin, the castle town.",
        cantlin_soldier2: [
            "It is said that many have held Erdrick's armor.",
            "The last to have it was a fellow named Wynn."
        ],
        cantlin_soldier3: [
            "'Tis said that the Dragonlord hath claws that can cleave iron and fiery breath that can melt stone.",
            "Dost thou still wish to go on?"
        ],
        cantlin_soldier4: "Thou art truly brave.",
        cantlin_soldier5: "No one will say thou art afraid.",
        cantlin_merchant1: "Grandfather used to say that his friend, Wynn, had buried something of great value at the foot of a tree behind his shop.",
        cantlin_merchant2: "Come buy my radishes! They are fresh and cheap. Buy thy radishes today!",
        cantlin_merchant3: "My Grandfather Wynn once had a shop on the east side of Hauksness.",
        cantlin_woman1: "What shall I get for thy dinner?",
        cantlin_woman2: "I know nothing.",
        cantlin_man1: "I'm Nester. Hey, where am I? No, don't tell me!",
        cantlin_old_man1: "'Tis said that Erdrick's sword could cleave steel.",
        cantlin_old_man2: "To learn how proof may be obtained that thy ancestor was the great Erdrick, see a man in this very town.",
        cantlin_old_man3: [
            "Let us wish the warrior well!",
            "May the light be thy strength!",
            "Thou may go and search.",
            "From Tantegel Castle travel 70 leagues to the south and 40 to the east."
        ],
        //Dragonlord
        dragonlord1: [
            "Welcome, <player_name>. I am the Dragonlord--King of Kings.",
            "I have been waiting long for one such as thee.",
            "I give thee now a chance to share this world and to rule half of it if thou will now stand beside me.",
            "What sayest thou? Will the great warrior stand with me?"
        ],
        dragonlord2: "Really?",
        dragonlord3: [
            "Then half of this world is thine, half of the darkness, and....",
            "If thou dies I can bring thee back for another attempt without loss of thy deeds to date.",
            "Thy journey is over. Take now a long, long rest. Hahahaha...."
        ],
        dragonlord4: "Thou art a fool!"
    }
/*
UNSORTED
########
"The <enemy>'s spell hath been blocked."
"<player_name>'s spell is blocked."
"<enemy> looks happy."
<player_name> cannot yet use the spell.
Thy body is being squeezed.
The <item> is squeezing thy body.
Thou cannot enter here.
"Thou art strong enough!\nWhy can thou not defeat the Dragonlord?"
"Good morning.\nThou hast had a good night's sleep I hope."
"All the best to thee."
"I will see thee later."
"Thou hast not enough money."
"I am sorry, but I cannot sell thee anymore."
"I am sorry.\nA curse is upon thy body."
"Thou hast no possessions."
"Wilt thou sell anything else?"
"I cannot buy it."
"Thou said the <item>.\nI will buy thy <item> for <number> GOLD.\nIs that all right?"
"What art thou selling?"
"I will be waiting for thy next visit."
"Dost thou want anything else?"
"Thou cannot hold more Herbs."
"Thou cannot carry anymore."
"Thou hast not enough money."
"The <item>?\nThank you very much."
"What dost thou want?"
"Oh, yes?\nThat's too bad."
"Is that Okay.?"
"The <item>?"
"Then I will buy thy <item> for <number> GOLD."
"Sorry.\nThou hast not enough money."
"Dost thou wish to buy anything more?"
"What dost thou wish to buy?"
"I thank thee."
"Please, come again."
"Cursed one, be gone!"
"A word of advice."\n"Save thy money for more expensive armor."
"Listen to what people say.\nIt can be of great help."
"Hast thou seen Nester?\nI think he may need help."
"Go to the town of Cantlin."
"I have heard that powerful enemies live there."
"In this temple do the sun and rain meet."
"Howard had it, but he went to Rimuldar and never returned."
"To the south, I believe, there is a town called Rimuldar."
"That is good."
"Go to the south."
"Where oh where can I find Princess Gwaelin?"
"Tell King Lorik that the search for his daughter hath failed."
"I am almost gone...."
"Dost thou know about Princess Gwaelin?"
"Half a year now hath passed since the Princess was kidnapped by the enemy."\n"Never does the King speak of it, but he must be suffering much."
"<player_name>, please save the Princess."
"Oh, brave <player_name>."
"I will free thee from thy curse."
"Now, go."
"Though thou art as brave as thy ancestor, <player_name>, thou cannot defeat \nthe great Dragonlord with such weapons."
"Thou shouldst come here again."
"All true warriors wear a ring."
"Thy bravery must be proven."
"Thus, I propose a test."
"There is a Silver Harp that beckons to the creatures of the Dragonlord."
"Bring this to me and I will reward thee with the Staff of Rain."
"Thou hast brought the harp. Good."
"In thy task thou hast failed. Alas, I fear thou art not the one Erdrick \npredicted would save us."
"Go now!"
"Now the sun and rain shall meet and the Rainbow Drop passes to thy keeping."
"Thou art brave indeed to rescue me, <player_name>."
"I am Gwaelin, daughter of Lorik."
"But thou must."
Princess Gwaelin embraces thee.
"I'm so happy!"
"Forever shall I be grateful for the gift of my daughter returned to her home, \n<player_name>.\nAccept my thanks."
"Now, Gwaelin, come to my side."
Gwaelin then whispers:\n"Wait a moment, please.\nI would give a present to <player_name>."
"Please accept my love, <player_name>.
"And I would like to have something of thine--a token."
"Please give me thy <item>."
"Even when we two are parted by great distances, I shall be with thee."
"Farewell, <player_name>."
"I love thee, <player_name>."
"Dost thou love me, <player_name>?"
"When thou art finished preparing for thy departure, please see me.\nI shall wait."
"Will thou take me to the castle?"
"Take the Treasure Chest."
Heed my voice,\n"<player_name>, for this is Gwaelin.
To reach the next level thou must raise thy Experience{F0} by <number>.
My hope is with thee.

"From where thou art now, my castle lies{..}
<number> to the north and{..}
<number> to the south and{..}
<number> to the east.
<number> to the west.

The tablet reads as follows:

 "I am Erdrick and thou art my descendant."
 "Three items were needed to reach the Isle of Dragons, which is south of \nBrecconary."
 "I gathered these items, reached the island, and there defeated a creature of \ngreat evil."
 "Now I have entrusted the three items to three worthy keepers."
 "Their descendants will protect the items until thy quest leads thee to seek \nthem out."
 "When a new evil arises, find the three items, then fight!"
"<player_name>?\nThis is Gwaelin.\nKnow that thou hath reached the final level."
"Thou hast failed and thou art cursed."
"Leave at once!"
"...."
"I am glad thou hast returned.
All our hopes are riding on thee."
"See me again when thy level has increased."
The Dragonlord revealed his true self!

Thou hast found the Ball of Light.
Radiance streams forth as thy hands touch the object and hold it aloft.
Across the land spreads the brilliance until all shadows are banished and peace \nis restored.

"The legends have proven true."
"Thou art indeed of the line of Erdrick."
"It is thy right to rule over this land."
"Will thou take my place?"
<player_name> thought carefully before answering.
"I cannot,"
said <player_name>.
"If ever I am to rule a country, it must be a land that I myself find."

Gwaelin said:\n"Please, wait."
"I wish to go with thee on thy journey."
"May I travel as thy companion?"
"Hurrah!\nHurrah!\nLong live <player_name>!"
"Thou hast brought us peace, again."
"Come now, King Lorik awaits."
And thus the tale comes to an end....\nunless the dragons return again.
"Will thou tell me now of thy deeds so they won't be forgotten?"
"Thy deeds have been recorded on the Imperial Scrolls of Honor."
"Dost thou wish to continue thy quest?"
"Rest then for awhile."
"Go <player_name>!"
Unfortunately, NO deeds were recorded on Imperial Scroll number <number>.
CONGRATULATIONS\nTHOU HAST RESTORED PEACE UNTO THE WORLD\nBUT THERE ARE MANY ROADS YET TO TRAVEL\nMAY THE LIGHT SHINE UPON THEE DRAGON WARRIOR


NOT NEEDED
##########
"There are no stairs here."
Please push RESET, hold it in, then turn off the POWER.
If you turn the power off first, the Imperial Scroll of Honor containing your \ndeeds may be lost.
*/
};;/*
References
##########
https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame?redirectlocale=en-US&redirectslug=DOM%2Fwindow.requestAnimationFrame
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
*/

Game = {
	state: "",
	possible_states: ["exploration", "combat"],
	canvas: null,
	context: null,
	img_characters: null,
	img_enemies: null,
	img_tiles: null,

	begin: function () {
		var self = this,
			keysDown = {};

		function draw () {
			self.clear();
			map.draw_viewport(map.current_map, player.offset_x, player.offset_y);
			self.draw_npcs();
		}

		function update () {
			delta_time = Date.now();
			map.check_location();
			player.load_player();

			if (self.state === "exploration") {
				if (38 in keysDown) { // Player holding up
					player.move("up");
				} else if (40 in keysDown) { // Player holding down
					player.move("down");
				} else if (37 in keysDown) { // Player holding left
					player.move("left");
				} else if (39 in keysDown) { // Player holding right
					player.move("right");
				} else {
					player.draw_player();
				}
			}

			if (self.state === "combat") {
				Game.combat.draw_screen();
				self.draw_enemy(Game.combat.enemy_ptr);
				if (Game.combat.initiative_round === true) {
					Game.combat.initiative();
				}
				if (Game.combat.player_turn === false) {
					setTimeout(function() {
						Game.combat.enemy_attack();
					}, 1000);
				}

				if (88 in keysDown) { // Player presses 'x'
					Game.combat.enemy_ptr = null;
					self.change_state("exploration");
				}
			}
		}

		function main() {
			requestAnimationFrame(main);
			if (self.state === "exploration") {
				draw();
			}
			update();
			display_output();
		}

		function load_images() {
			self.img_characters = new Image();
			self.img_characters.src = config.sprites.characters;
			self.img_enemies = new Image();
			self.img_enemies.src = config.sprites.enemies;
			self.img_tiles = new Image();
			self.img_tiles.src = config.sprites.tiles;
		}

		// Main game window
		document.title = text.game_title;
		this.canvas = document.getElementById("game");
		this.context = this.canvas.getContext("2d");
		load_images();

		// Keyboard inputs
		window.addEventListener("keydown", function(e) {
			keysDown[e.keyCode] = true;
		});
		window.addEventListener("keyup", function(e) {
			delete keysDown[e.keyCode];
		});

		// Start the game!
		player.name = prompt(text.name_prompt);
		if (player.name === "") { player.name = text.default_player_name; }
		this.change_state("exploration");
		map.load_map("World");
		player.load_player();
		player.set_current_tile();
		this.display_text(text.welcome);
		main();
	},

	change_state: function (input, delay) {
		var self = this;

		function set_state () {
			self.state = input;
			change_command_set();
		}

		if (this.possible_states.indexOf(input) > -1) {
			if (typeof delay !== 'undefined') {
				setTimeout(set_state, delay);
			} else {
				set_state();
			}
		}
	},

	clear: function () {
		return this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},

	display_text: function (format_string, params) {
		function format (format_string, params) {
	        function escapeRegExp(string) {
	            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	        }

	        function replaceAll(string, find, replace) {
	            return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	        }

	        if (typeof params !== 'undefined') {
	            if (typeof params.player_name !== 'undefined') {
	                format_string = replaceAll(format_string, "<player_name>", params.player_name);
	            }
	            if (typeof params.enemy !== 'undefined') {
	                format_string = replaceAll(format_string, "<enemy>", params.enemy);
	            }
	            if (typeof params.number !== 'undefined') {
	                format_string = replaceAll(format_string, "<number>", params.number);
	            }
	            if (typeof params.spell !== 'undefined') {
	                format_string = replaceAll(format_string, "<spell>", params.spell);
	            }
	        }

	        return format_string;
	    }

		add_text(format(format_string, params));
	},

	random_number: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	// Animation and rendering
	// -------------------------------------------------------------------

	animate_npc: function(frame1, frame2, x, y) {
		x = ((x-player.offset_x) * tile_width);
		y = ((y-player.offset_y) * tile_height);

		if ((Date.now() % 1000) < 500) {
			this.draw_character(frame1, x, y);
		} else {
			this.draw_character(frame2, x, y);
		}
	},

	// call frame from characters.png - starts with frame 0
	draw_character: function (frame_number, pos_x, pos_y) {
		var image_x = (frame_number % 16) * tile_width,
		    image_y = Math.floor(frame_number / 16) * tile_height;

		this.context.drawImage(this.img_characters, image_x, image_y, tile_width, tile_height,
			pos_x, pos_y, tile_width, tile_height);
	},

	draw_npcs: function() {
		var self = this,
			i,
			number_of_npcs;

		//TODO: refactor this
		function draw_npc (character_type, direction, x, y) {
			switch (character_type) {
				case "princess":
					if (direction === "down") {
						self.animate_npc(80, 81, x, y);
					} else if (direction === "left") {
						self.animate_npc(82, 83, x, y);
					} else if (direction === "up") {
						self.animate_npc(84, 85, x, y);
					} else if (direction === "right") {
						self.animate_npc(86, 87, x, y);
					}
					break;
				case "soldier":
					if (direction === "down") {
						self.animate_npc(96, 97, x, y);
					} else if (direction === "left") {
						self.animate_npc(98, 99, x, y);
					} else if (direction === "up") {
						self.animate_npc(100, 101, x, y);
					} else if (direction === "right") {
						self.animate_npc(102, 103, x, y);
					}
					break;
				case "townsman":
					if (direction === "down") {
						self.animate_npc(8, 9, x, y);
					} else if (direction === "left") {
						self.animate_npc(10, 11, x, y);
					} else if (direction === "up") {
						self.animate_npc(12, 13, x, y);
					} else if (direction === "right") {
						self.animate_npc(14, 15, x, y);
					}
					break;
				case "townswoman":
					if (direction === "down") {
						self.animate_npc(24, 25, x, y);
					} else if (direction === "left") {
						self.animate_npc(26, 27, x, y);
					} else if (direction === "up") {
						self.animate_npc(28, 29, x, y);
					} else if (direction === "right") {
						self.animate_npc(30, 31, x, y);
					}
					break;
				case "old_man":
					if (direction === "down") {
						self.animate_npc(40, 41, x, y);
					} else if (direction === "left") {
						self.animate_npc(42, 43, x, y);
					} else if (direction === "up") {
						self.animate_npc(44, 45, x, y);
					} else if (direction === "right") {
						self.animate_npc(46, 47, x, y);
					}
					break;
				case "merchant":
					if (direction === "down") {
						self.animate_npc(56, 57, x, y);
					} else if (direction === "left") {
						self.animate_npc(58, 59, x, y);
					} else if (direction === "up") {
						self.animate_npc(60, 61, x, y);
					} else if (direction === "right") {
						self.animate_npc(62, 63, x, y);
					}
					break;
				case "solider_2":
					if (direction === "down") {
						self.animate_npc(72, 73, x, y);
					} else if (direction === "left") {
						self.animate_npc(74, 75, x, y);
					} else if (direction === "up") {
						self.animate_npc(76, 77, x, y);
					} else if (direction === "right") {
						self.animate_npc(78, 79, x, y);
					}
					break;
				case "dragonlord":
					if (direction === "down") {
						self.animate_npc(88, 89, x, y);
					} else if (direction === "left") {
						self.animate_npc(90, 91, x, y);
					} else if (direction === "up") {
						self.animate_npc(92, 93, x, y);
					} else if (direction === "right") {
						self.animate_npc(94, 95, x, y);
					}
					break;
				case "trumpeteer":
					if (direction === "left") {
						self.animate_npc(105, 105, x, y);
					} else if (direction === "right") {
						self.animate_npc(104, 104, x, y);
					}
					break;
				case "king":
					self.animate_npc(106, 107, x, y);
					break;
			}
		}

		if (typeof map.map_ptr.npcs !== 'undefined') {
			number_of_npcs = map.map_ptr.npcs.length;
			//TODO: replace with a visible flag, which checks player.rescued_princess.
			if (map.current_map === "Tantegel2F" && player.rescued_princess === false) {
				number_of_npcs--;
			}
			for (i=0; i<number_of_npcs; i++) {
				draw_npc(
					map.map_ptr.npcs[i].type,
					map.map_ptr.npcs[i].facing,
					map.map_ptr.npcs[i].x,
					map.map_ptr.npcs[i].y
				);
			}
		}
	},

	draw_enemy: function (enemy) {
		var tile_x = enemy.x,
		    tile_y = enemy.y,
		    tile_width = enemy.width,
		    tile_height = enemy.height,
		    pos_x = (this.canvas.width / 2) - tile_width,
		    pos_y = (this.canvas.height / 2) - tile_height;

		this.context.drawImage(this.img_enemies, tile_x, tile_y, tile_width, tile_height,
			pos_x, pos_y, tile_width * 2, tile_height *2);
	},

	// draw single tile frame from sprite sheet
	draw_tile: function (x, y, frame_number) {
		// find horizontal and vertical position of tile to be drawn
		var pos_x = (frame_number % 12) * tile_width,
		    pos_y = Math.floor(frame_number / 12) * tile_height;

		this.context.drawImage(this.img_tiles, pos_x, pos_y, tile_width, tile_height,
			x, y, tile_width, tile_height);
	}
};;Game.script = {
    text: function (string) {
        if (typeof string !== 'undefined') {
            if (typeof text.script[string] !== 'undefined') {
                if (text.script[string] instanceof Array) {
                    text.script[string].forEach(function (element, index, array) {
                        Game.display_text(element);
                    });
                } else {
                    Game.display_text(text.script[string]);
                }
            }
        }
    },

    menu_yes_no: function (string, yes_handler, no_handler) {
        //..
    }
};;var player = {
	name: "",

	// Map collision tiles
	collide_tiles: [1, 2, 5, 9, 10, 11, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],

	// Last direction the character was facing
	character_state: "",

	// Flags
	rescued_princess: false,
	carrying_princess: false,
	created_rainbow_bridge: false,
	green_dragon_is_alive: true,
	golem_is_alive: true,
	has_erdricks_armor: false,
	has_erdricks_token: false,
	doors_opened: [],
	chests_taken: [],

	// Screen position
	x: 0,
	y: 0,

	// Map position
	offset_x: 0,
	offset_y: 0,

	// Tile number at player's location - see map_functions.js for tile definitions
	current_tile: 0,

	// movement speed - ms per step (1000 / movement = number of tiles moved per second)
	movement: 150,
	steps: 0,
	visibility: 0,
	radiant_in_effect: false,
	radiant_step_counter: 0,

	// Equipment
	weapon: "none",
	armor: "none",
	shield: "none",
	inventory: [],
	spells: {},

	// Stats
	level: 1,
	max_hp: 0,
	current_hp: 15,
	max_mp: 0,
	current_mp: 0,
	strength: 0,
	agility: 0,
	attack_power: 0,
	defense_power: 0,

	status: "",
	spell_blocked: false,

	experience: 0,
	gold: 0,

	// Draw player and animations
	// -------------------------------------------------------------------

	animate_player: function(frame1, frame2) {
		if ((Date.now() % 1000) < 500) {
			Game.draw_character(frame1, this.x, this.y);
		} else {
			Game.draw_character(frame2, this.x, this.y);
		}
	},

	draw_player: function () {
		switch (this.character_state) {
			case "left":
				if (this.carrying_princess === true) {
					this.animate_player(66, 67);
				} else if (this.weapon === "none" && this.shield === "none") {
					this.animate_player(2, 3);
				} else if (this.weapon !== "none" && this.shield === "none") {
					this.animate_player(18, 19);
				} else if (this.weapon === "none" && this.shield !== "none") {
					this.animate_player(34, 35);
				} else {
					this.animate_player(50, 51);
				}
				break;
			case "right":
				if (this.carrying_princess === true) {
					this.animate_player(70, 71);
				} else if (this.weapon === "none" && this.shield === "none") {
					this.animate_player(6, 7);
				} else if (this.weapon !== "none" && this.shield === "none") {
					this.animate_player(22, 23);
				} else if (this.weapon === "none" && this.shield !== "none") {
					this.animate_player(38, 39);
				} else {
					this.animate_player(54, 55);
				}
				break;
			case "up":
				if (this.carrying_princess === true) {
					this.animate_player(68, 69);
				} else if (this.weapon === "none" && this.shield === "none") {
					this.animate_player(4, 5);
				} else if (this.weapon !== "none" && this.shield === "none") {
					this.animate_player(20, 21);
				} else if (this.weapon === "none" && this.shield !== "none") {
					this.animate_player(36, 37);
				} else {
					this.animate_player(52, 53);
				}
				break;
			case "down":
			/* falls through */
			default:
				if (this.carrying_princess === true) {
					this.animate_player(64, 65);
				} else if (this.weapon === "none" && this.shield === "none") {
					this.animate_player(0, 1);
				} else if (this.weapon !== "none" && this.shield === "none") {
					this.animate_player(16, 17);
				} else if (this.weapon === "none" && this.shield !== "none") {
					this.animate_player(32, 33);
				} else {
					this.animate_player(48, 49);
				}
				break;
		}
	},

	// Map positioning
	// -------------------------------------------------------------------

	set_position: function(map_name) {
		var map = config.maps[map_name];

		this.steps = 0;

		if (typeof map.player_offset !== 'undefined' && map.player_offset instanceof Array && map.player_offset.length === 2) {
			this.offset_x = map.player_offset[0];
			this.offset_y = map.player_offset[1];
		} else {
			this.offset_x = 0;
			this.offset_y = 0;
		}

		if (typeof map.player_start !== 'undefined' && map.player_start instanceof Array && map.player_start.length === 2) {
			this.set_xy(map.player_start[0], map.player_start[1]);
		} else {
			this.set_xy(12, 6);
		}
	},

	set_offsets: function(offset_x, offset_y) {
		this.offset_x = offset_x;
		this.offset_y = offset_y;
	},

	set_xy: function(x, y) {
		this.x = x * tile_width;
		this.y = y * tile_height;
	},

	// Movement and collision
	// -------------------------------------------------------------------

	move: function (direction) {
		var x = player.offset_x + (player.x / tile_width),
			y = player.offset_y + (player.y / tile_height),
			prev_steps = this.steps;

		this.set_current_tile();
		map.set_zone();

		switch (direction) {
			case "left":
				this.character_state = "left";
				this.draw_player();
				if (this.will_collide(x-1, y) === false) {
					if (delta_time - time > this.movement) {
						if (this.offset_x > 0 && this.x === 12 * tile_width) {
							this.offset_x -= 1;
						} else {
							this.x -= tile_width;
						}
						this.steps++;
					}
				}
				break;
			case "right":
				this.character_state = "right";
				this.draw_player();
				if (this.will_collide(x+1, y) === false) {
					if (delta_time - time > this.movement) {
						if (this.offset_x < map.boundary_right && this.x === 12 * tile_width) {
							this.offset_x += 1;
						} else {
							this.x += tile_width;
						}
						this.steps++;
					}
				}
				break;
			case "up":
				this.character_state = "up";
				this.draw_player();
				if (this.will_collide(x, y-1) === false) {
					if (delta_time - time > this.movement) {
						if (this.offset_y > 0 && this.y === 6 * tile_height) {
							this.offset_y -= 1;
						} else {
							this.y -= tile_height;
						}
						this.steps++;
					}
				}
				break;
			case "down":
				this.character_state = "down";
				this.draw_player();
				if (this.will_collide(x, y+1) === false) {
					if (delta_time - time > this.movement) {
						if (this.offset_y < map.boundary_bottom && this.y === 6 * tile_height) {
							this.offset_y += 1;
						} else {
							this.y += tile_height;
						}
						this.steps++;
					}
				}
				break;
		}

		if (this.steps > prev_steps) {
			if (Game.combat.random_encounter() === true) {
				Game.change_state("combat");
			}
			time = Date.now();
		}
	},

	set_current_tile: function() {
		this.current_tile = map.map_ptr.layout[(player.offset_x + (player.x / tile_width)) +
				((player.offset_y + (player.y / tile_height)) * map.map_ptr.width)] - 1;
	},

	will_collide: function (x, y) {
		var next_tile = map.map_ptr.layout[x + (y * map.map_ptr.width)] - 1;
		if (this.collide_tiles.indexOf(next_tile) > -1 || map.get_npc(x, y) !== null) {
			return true;
		}
		return false;
	},

	// Set stats
	// -------------------------------------------------------------------

	load_player: function() {
		this.set_level();
		this.set_max_hp();
		this.set_max_mp();
		this.set_strength();
		this.set_agility();
		this.set_attack_power();
		this.set_defense_power();
		this.set_spells();
	},

	set_level: function() {
		var i, j, level, spellId;
		this.spells = {};
		for (i=0; i<config.levels.length; i++) {
			level = config.levels[i];

			if (this.experience < level.required_exp) {
				break;
			}

			if (typeof level.spells_learned !== 'undefined' && level.spells_learned instanceof Array) {
				for (j=0; j<level.spells_learned.length; j++) {
					spellId = level.spells_learned[j];
					this.spells[spellId] = config.spells[spellId];
				}
			}
		}
		this.level = i;
	},

	set_max_hp: function() {
		this.max_hp = config.levels[this.level - 1].max_hp;
	},

	set_max_mp: function() {
		this.max_mp = config.levels[this.level - 1].max_mp;
	},

	set_strength: function() {
		this.strength = config.levels[this.level - 1].strength;
	},

	set_agility: function() {
		this.agility = config.levels[this.level - 1].agility;
	},

	set_attack_power: function() {
		this.attack_power = this.strength + config.weapons[this.weapon].attack;
	},

	set_defense_power: function() {
		this.defense_power = Math.floor(this.agility / 2) + config.armors[this.armor].defense +
			config.shields[this.shield].defense;
	},

	set_spells: function() {
		var self = this,
		    spell;
		Object.keys(this.spells).forEach(function (spellId) {
			spell = self.spells[spellId];
			if ((Game.state === "combat" && spell.show_in_combat) || (Game.state === "exploration" && spell.show_in_explore)) {
				add_option(text.spells[spellId], text.spells[spellId], "spell");
			}
		});
	},

	// Item management
	// -------------------------------------------------------------------

	door: function () {
		var x = player.offset_x + (player.x / tile_width),
			y = player.offset_y + (player.y / tile_height),
			door = null;

		switch (this.character_state) {
			case "left":  door = map.get_door(x-1, y); break;
			case "right": door = map.get_door(x+1, y); break;
			case "up":    door = map.get_door(x, y-1); break;
			case "down":  door = map.get_door(x, y+1); break;
		}

		if (door !== null) {
			//TODO: check for (and use) keys!
			player.doors_opened.push(door.id);
			map.refresh_map();
		}
	},

	talk: function () {
		var x = player.offset_x + (player.x / tile_width),
			y = player.offset_y + (player.y / tile_height),
			character = null;

		switch (this.character_state) {
			case "left":  character = map.get_npc(x-1, y); break;
			case "right": character = map.get_npc(x+1, y); break;
			case "up":    character = map.get_npc(x, y-1); break;
			case "down":  character = map.get_npc(x, y+1); break;
		}

		if (character !== null && typeof character.talk === 'function') {
			character.talk(Game.script);
		}
	},

	add_item: function(item) {
		this.inventory.push(item);
	},

	remove_item: function(item) {

	},

	// Non-static stat changes (combat or shop related)
	// -------------------------------------------------------------------

	gain_hp: function(amount) {
		this.current_hp += amount;
		if (this.current_hp > this.max_hp) {
			this.current_hp = this.max_hp;
		}
	},

	lose_hp: function(amount) {
		this.current_hp -= amount;
		if (this.current_hp < 0) {
			this.current_hp = 0;
		}
	},

	gain_mp: function(amount) {
		this.current_mp += amount;
		if (this.current_mp > this.max_mp) {
			this.current_mp = this.max_mp;
		}
	},

	lose_mp: function(amount) {
		this.current_mp -= amount;
		if ( this.current_mp < 0) {
			this.current_mp = 0;
		}
	},

	add_experience: function(amount) {
		this.experience += amount;
		if (this.experience >= 65535) {
			this.experience = 65535;
		}
	},

	add_gold: function(amount) {
		this.gold += amount;
		if (this.gold > 99999) {
			this.gold = 99999;
		}
	},

	remove_gold: function(amount) {
		this.gold -= amount;
		if (this.gold < 0) {
			this.gold = 0;
		}
	}
};;/*
References
##########
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/
var map = {
	vWidth: 25,
	vHeight: 15,
	x: 0,
	y: 0,
	current_map: "",
	map_ptr: null,
	boundary_right: "",
	boundary_bottom: "",
	current_zone: 0,
	background_music: "",

	// 0 roof bricks
	// 1 stone block
	// 2 shop counter
	// 3 brick, 1 in 16 encounter rate
	// 4 chest
	// 5 door
	// 6 stairs down
	// 7 stairs up
	// 8 barrier - damage floor 15 HP, 1 in 16 encounter rate
	// 9 shop sign
	// 10 inn sign
	// 11 coastline
	// 12 castle
	// 13 town
	// 14 grass - 1 in 24 encounter rate
	// 15 forest - 1 in 16 encounter rate
	// 16 hill - 1 in 8 encounter rate
	// 17 mountain
	// 18 cave
	// 19 outside stairs down
	// 20 desert - 1 in 8 encounter rate
	// 21 swamp - damage floor 2 HP, 1 in 16 encounter rate
	// 22 bridge
	// 23 princess in swamp cave
	// 24 water
	// 25 - 35 coastline

	load_map: function (map_name) {
		if (map_name === "World") {
			//reset door flags when leaving towns.
			//TODO: don't reset all flags; some stay unlocked (e.g. throne room).
			player.doors_opened = [];
		}

		player.steps = 0;
		player.set_position(map_name);

		this.current_map = map_name;
		this.map_ptr = config.maps[this.current_map];
		this.boundary_right = this.map_ptr.width - this.vWidth;
		this.boundary_bottom = this.map_ptr.height - this.vHeight;
		this.background_music = this.map_ptr.music;

		//audio.stop_music();
		//audio.play_map_music();
		this.refresh_map();
	},

	// refresh status of doors/treasure chests
	refresh_map: function () {
		var self = this;

		if (typeof this.map_ptr.doors !== 'undefined') {
			this.map_ptr.doors.forEach(function (element, index, array) {
				if (player.doors_opened.indexOf(element.id) > -1) {
					self.map_ptr.layout[element.x + (element.y * self.map_ptr.width)] = 4;
				} else {
					self.map_ptr.layout[element.x + (element.y * self.map_ptr.width)] = 6;
				}
			});
		}

		if (typeof this.map_ptr.chests !== 'undefined') {
			this.map_ptr.chests.forEach(function (element, index, array) {
				if (player.chests_taken.indexOf(element.id) > -1) {
					self.map_ptr.layout[element.x + (element.y * self.map_ptr.width)] = 4;
				} else {
					self.map_ptr.layout[element.x + (element.y * self.map_ptr.width)] = 5;
				}
			});
		}
	},

	get_npc: function (x, y) {
		var number_of_npcs, i;

		if (typeof this.map_ptr.npcs !== 'undefined') {
			number_of_npcs = map.map_ptr.npcs.length;
			for (i=0; i<number_of_npcs; i++) {
				//TODO: consider visibility.
				if (map.map_ptr.npcs[i].x === x && map.map_ptr.npcs[i].y === y) {
					return map.map_ptr.npcs[i];
				}
			}
		}

		return null;
	},

	get_door: function (x, y) {
		var number_of_doors, i;

		if (typeof this.map_ptr.doors !== 'undefined') {
			number_of_doors = map.map_ptr.doors.length;
			for (i=0; i<number_of_doors; i++) {
				//TODO: only consider if not already opened.
				if (map.map_ptr.doors[i].x === x && map.map_ptr.doors[i].y === y) {
					return map.map_ptr.doors[i];
				}
			}
		}

		return null;
	},

	draw_viewport: function (map_name, offset_x, offset_y) {
		var i,
			vWidth = 25,
			vHeight = 15;

		for (i=0; i<(vWidth * vHeight); i++) {
			Game.draw_tile(this.x, this.y, this.map_ptr.layout[offset_x + (offset_y * this.map_ptr.width)] - 1);
			this.x += tile_width;
			offset_x++;
			if (this.x === vWidth * tile_width) {
				this.x = 0;
				this.y += tile_height;
				offset_y++;
				offset_x -= vWidth;
			}
		}

		this.y = 0;
	},

	set_zone: function () {
		if (this.current_map === "World") {
			// 16 tile square, break world into 8 x 8 grid
			var x_coord = Math.floor(((player.x / tile_width) + (player.offset_x)) / 16),
				y_coord = Math.floor(((player.y / tile_width) + (player.offset_y)) / 16),
			    zone_map = [
					3,	3,	2,	2,	3,	5,	4,	5,
					3,	2,	1,	2,	3,	3,	4,	5,
					4,	1,	0,	0,	1,	3,	4,	5,
					5,	1,	1,	12,	9,	6,	6,	6,
					5,	5,	4,	12,	12,	7,	7,	7,
					10,	9,	8,	12,	12,	12,	8,	7,
					10,	10,	11,	12,	13,	13,	9,	8,
					11,	11,	12,	13,	13,	12,	9,	9,
				];
			this.current_zone = zone_map[x_coord + (y_coord * 8)];
		}
		if (this.map_ptr.type === "dungeon") {
			this.current_zone = this.map_ptr.zone;
		}
	},

	check_location: function () {
		var keys = Object.keys(config.maps),
		    key,
		    map,
		    link,
		    i, j;

		for (i=0; i<keys.length; i++) {
			key = keys[i];
			if (key !== this.current_map) {
				continue;
			}

			map = config.maps[key];
			if (typeof map.map_links !== 'undefined' && map.map_links instanceof Array) {
				for (j=0; j<map.map_links.length; j++) {
					link = map.map_links[j];

					if (player.steps === 0 ||
						(typeof link.offset_x !== 'undefined' && player.offset_x !== link.offset_x) ||
						(typeof link.offset_y !== 'undefined' && player.offset_y !== link.offset_y) ||
						(typeof link.x !== 'undefined' && player.x !== (link.x * tile_width)) ||
						(typeof link.y !== 'undefined' && player.y !== (link.y * tile_height)))
					{
						continue;
					}

					this.load_map(link.map);

					if (typeof link.set_offsets !== 'undefined' && link.set_offsets instanceof Array && link.set_offsets.length === 2) {
						player.set_offsets(link.set_offsets[0], link.set_offsets[1]);
					}

					if (typeof link.set_xy !== 'undefined' && link.set_xy instanceof Array && link.set_xy.length === 2) {
						player.set_xy(link.set_xy[0], link.set_xy[1]);
					}

					return;
				}
			}

			return;
		}
	}
};;var audio = {
	"current_music": "",
	"sound_effect": "",

	// used for background music
	play_map_music: function() {
		if (this.current_music === "") {
			this.current_music = new Audio('assets/music/dw1' + map.background_music + '.mp3');
			this.current_music.addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
			}, false);
			this.current_music.play();
		} else {

		}
	},

	stop_music: function() {
		if (this.current_music !== "") {
			this.current_music.pause();
			this.current_music = "";
		}
	},

	// used for sound effects
	play_sound: function(effect) {
		if (this.sound_effect === "") {
			this.sound_effect = new Audio('assets/sounds/dw1' + effect + '.mp3');
			this.sound_effect.play();
		} else {
			if (this.sound_effect.currentTime > 0.5) {
				this.sound_effect.currentTime = 0;
			}
			this.sound_effect.play();
		}
	},

	stop_sound: function() {
		if (this.current_music !== "") {
			this.sound_effect.pause();
			this.sound_effect = "";
		}
	}
};;Game.combat = {
	enemy_ptr: null, // current enemy player is fighting
	enemy_id: "",
	enemy_max_hp: 0, // randomized at start of battle
	enemy_current_hp: 0,
	enemy_spell_blocked: false,
	gold_reward: 0, // randomized at start of battle
	enemy_status: "",
	player_turn: true,
	random_num: 0,
	initiative_round: true,

	// Check for random encounters at each step in player.move()
	random_encounter: function() {
		if (map.map_ptr.type === "world" || map.map_ptr.type === "dungeon") {
			if (player.current_tile === 16 ||
				player.current_tile === 20) {
				this.random_num = Game.random_number(1, 8);
				if (this.random_num === 1) {
					this.random_enemy();
					return true;
				}
			}
			if (player.current_tile === 3 ||
				player.current_tile === 8 ||
				player.current_tile === 15 ||
				player.current_tile ===  21) {
				this.random_num = Game.random_number(1, 16);
				if (this.random_num === 1) {
					this.random_enemy();
					return true;
				}
			}
			if (player.current_tile === 14) {
				this.random_num = Game.random_number(1, 24);
				if (this.random_num === 1) {
					this.random_enemy();
					return true;
				}
			}
		}
	},

	random_enemy: function() {
		var rand = Game.random_number(0, 4),
		    enemy_list = [];

		switch (map.current_zone) {
			case 0:	 enemy_list = [0, 1, 0, 1, 0];      break;
			case 1:	 enemy_list = [1, 0, 1, 2, 1];      break;
			case 2:	 enemy_list = [0, 3, 2, 3, 1];      break;
			case 3:	 enemy_list = [1, 1, 2, 3, 4];      break;
			case 4:	 enemy_list = [3, 4, 5, 5, 6];      break;
			case 5:	 enemy_list = [3, 4, 5, 6, 11];     break;
			case 6:	 enemy_list = [5, 6, 11, 12, 14];   break;
			case 7:	 enemy_list = [11, 12, 13, 14, 14]; break;
			case 8:	 enemy_list = [13, 15, 18, 18, 25]; break;
			case 9:	 enemy_list = [15, 21, 18, 21, 25]; break;
			case 10: enemy_list = [21, 22, 23, 26, 28]; break;
			case 11: enemy_list = [23, 26, 27, 28, 16]; break;
			case 12: enemy_list = [26, 27, 28, 29, 31]; break;
			case 13: enemy_list = [29, 30, 31, 31, 32]; break;
			case 14: enemy_list = [8, 9, 10, 11, 12];   break;
			case 15: enemy_list = [17, 18, 19, 20, 23]; break;
			case 16: enemy_list = [29, 30, 31, 32, 33]; break;
			case 17: enemy_list = [32, 33, 34, 34, 35]; break;
			case 18: enemy_list = [32, 35, 36, 36, 37]; break;
			case 19: enemy_list = [3, 4, 6, 7, 7];      break;
		}

		this.load_enemy(enemy_list[rand]);
	},

	load_enemy: function(id) {
		this.initiative_round = true;
		this.enemy_ptr = config.enemies[id];
		this.enemy_id = text.enemies[this.enemy_ptr.id];

		// check if enemy HP is a range or set number
		if (this.enemy_ptr.hp instanceof Array) {
			this.enemy_current_hp = Game.random_number(this.enemy_ptr.hp[0], this.enemy_ptr.hp[1]);
		} else {
			this.enemy_current_hp = this.enemy_ptr.hp;
		}
		this.enemy_max_hp = this.enemy_current_hp;

		// check if enemy gold dropped is a range or set number
		if (this.enemy_ptr.gold instanceof Array) {
			this.gold_reward = Game.random_number(this.enemy_ptr.gold[0], this.enemy_ptr.gold[1]);
		} else {
			this.gold_reward = this.enemy_ptr.gold;
		}

		Game.display_text(text.combat.enemy.near, { enemy: this.enemy_id });
	},

	// Draw functions
	// -------------------------------------------------------------------

	draw_screen: function() {
		Game.clear();
		Game.context.fillStyle = "#FFFFFF";
		Game.context.fillRect(0, 0, Game.canvas.width, Game.canvas.height);
	},

	// Combat functions
	// -------------------------------------------------------------------

	initiative: function() {
		var enemy_agility = this.enemy_ptr.agility,
		    enemy_strength = this.enemy_ptr.strength,
		    rand1 = Game.random_number(0, 255),
		    rand2 = Game.random_number(0, 255),
		    rand3 = Game.random_number(1, 100);

		if (player.strength > (2 * enemy_strength)) {
			if (rand3 <= 25) {
				Game.display_text(text.combat.enemy.run, { enemy: this.enemy_id });
				Game.change_state("exploration", 500);
			}
		}

		if ((player.agility * rand1) < (enemy_agility * rand2 * 0.25)) {
			Game.display_text(text.combat.enemy.strike_first, { enemy: this.enemy_id, player_name: player.name });
			this.player_turn = false;
		} else {
			Game.display_text(text.combat.prompt);
		}

		this.initiative_round = false;
	},

	player_attack: function() {
		var hit = false,
		    damage = 0;

		if (this.player_turn === true) {
			Game.display_text(text.combat.player.attack, { player_name: player.name });
			if (Game.random_number(1, 64) > this.enemy_ptr.dodge) {
				hit = true;
			}

			if (hit) {
				if (Game.random_number(1, 32) === 1 && this.enemy_ptr !== (38 || 39)) {
					Game.display_text(text.combat.player.hit_critical);
					damage = Math.floor(Game.random_number(player.attack_power / 2, player.attack_power));
				} else {
					damage = Math.floor(Game.random_number((player.attack_power - this.enemy_ptr.agility) / 4,
						(player.attack_power - this.enemy_ptr.agility) / 2));
				}

				if (damage < 0) { damage = 0; }
				Game.display_text(text.combat.player.hit, { enemy: this.enemy_id, number: damage});
				this.enemy_current_hp -= damage;

				if (this.enemy_current_hp <= 0) {
					this.player_turn = true;
					this.victory();
				} else {
					this.player_turn = false;
				}
			} else {
				Game.display_text(text.combat.enemy.dodge);
				this.player_turn = false;
			}
		}
	},

	use_item: function() {

	},

	cast_spell: function() {

	},

	player_run: function() {
		if (this.player_turn === true) {
			var modifier = 0,
			    rand1 = Game.random_number(0, 255),
			    rand2 = Game.random_number(0, 255),
			    enemy_agility = this.enemy_ptr.agility,
			    enemy_index = this.enemy_ptr.index;

			if (enemy_index >= 0 && enemy_index <= 20) {
				modifier = 0.25;
			} else if (enemy_index >= 20 && enemy_index <= 29) {
				modifier = 0.375;
			} else if (enemy_index >= 30 && enemy_index <= 34) {
				modifier = 0.5;
			} else {
				modifier = 1;
			}

			Game.display_text(text.combat.player.run, { player_name: player.name });
			this.player_turn = false;

			if (this.enemy_status === "sleep") {
				this.player_turn = true;
				Game.change_state("exploration", 500);
			}

			if ((player.agility * rand1) < (enemy_agility * rand2 * modifier)) {
				Game.display_text(text.combat.player.run_blocked);
			} else {
				this.player_turn = true;
				Game.change_state("exploration", 500);
			}
		}
	},

	player_died: function() {
		Game.display_text(text.dead);
	},

	victory: function() {
		var current_level = player.level;

		Game.display_text(text.combat.victory.defeated, { enemy: this.enemy_id });
		Game.display_text(text.combat.victory.gain_exp, { number: this.enemy_ptr.experience });
		Game.display_text(text.combat.victory.gain_gold, { number: this.gold_reward });

		player.add_experience(this.enemy_ptr.experience);
		player.add_gold(this.gold_reward);
		player.load_player();

		if (player.level === (current_level + 1)) {
			this.player_level_up();
		}

		Game.change_state("exploration", 1000);
	},

	player_level_up: function() {
		Game.display_text(text.combat.victory.next_level);
		if (typeof config.levels[player.level - 1].spells_learned !== 'undefined') {
			Game.display_text(text.combat.victory.gain_spell);
		}
	},

	enemy_attack: function() {
		var i,
			special,
			used_special = false,
		    damage = 0,
		    enemy_strength,
		    breath_min_dmg,
		    breath_max_dmg;

		if (this.enemy_ptr === null) {
			return;
		}

		enemy_strength = this.enemy_ptr.strength;

		if (this.player_turn === false) {
			//Special move (spell, breathe fire)
			if (typeof this.enemy_ptr.special !== 'undefined' &&
				typeof this.enemy_ptr.special_probability !== 'undefined' &&
				this.enemy_ptr.special instanceof Array &&
				this.enemy_ptr.special_probability instanceof Array &&
				this.enemy_ptr.special.length === this.enemy_ptr.special_probability.length) {

				for (i=0; i< this.enemy_ptr.special.length; i++) {
					if (Game.random_number(1, 4) <= this.enemy_ptr.special_probability[i]) {
						special = this.enemy_ptr.special[i];
						if (special === "breathe_fire" || special === "breathe_fire2") {
							Game.display_text(text.combat.enemy.fire, { enemy: this.enemy_id });

							//Erdricks armor reduces damage by 1/3
							if (special === "breathe_fire2") {
								//used by Dragon Lord in final form only
								breath_min_dmg = player.has_erdricks_armor ? 42 : 65;
								breath_max_dmg = player.has_erdricks_armor ? 48 : 72;
							} else {
								breath_min_dmg = player.has_erdricks_armor ? 10 : 16;
								breath_max_dmg = player.has_erdricks_armor ? 14 : 23;
							}

							damage = Game.random_number(breath_min_dmg, breath_max_dmg);
							Game.display_text(text.combat.enemy.hit, { number: damage });
							player.lose_hp(damage);

						} else {
							if ((special === "heal" || special === "healmore") && (this.enemy_current_hp > (this.enemy_current_hp / 4))) {
								//will only be used if the monster's HP is less than one-fourth of Max. HP
								continue;
							} else if (special === "sleep" && player.status === "sleep") {
								//will not be used if you are already asleep
								continue;
							} else if (special === "stopspell" && player.spell_blocked === true) {
								//will not be used if your spell has already been blocked
								continue;
							}

							Game.display_text(text.combat.enemy.cast, { enemy: this.enemy_id, spell: text.spells[special] });
							//TODO: actually cast the spell
						}

						used_special = true;
					}
				}
			}

			//Regular attack
			if (!used_special) {
				Game.display_text(text.combat.enemy.attack, { enemy: this.enemy_id });

				if (player.defense_power >= enemy_strength) {
					damage = Math.floor(Game.random_number(0, ((enemy_strength + 4) / 6)));
				} else {
					damage = Math.floor(Game.random_number(((enemy_strength - (player.defense_power / 2)) / 4),
						((enemy_strength - (player.defense_power / 2)) / 2)));
				}

				Game.display_text(text.combat.enemy.hit, { number: damage });
				player.lose_hp(damage);
			}
		}

		this.player_turn = true;
	}
};;/*
Most of the contents will be refactored and removed from here.
The only thing that'll stay is the Game.begin() at the bottom.
*/

var tile_width = 32,
    tile_height = 32,
    time = Date.now(),
    delta_time = Date.now();

function getId(id) {
	return document.getElementById(id);
}

function add_option(name, value, list_id) {
	var option_to_add = document.createElement('option');
	option_to_add.id = name;
	option_to_add.text = name;
	option_to_add.value = value;

	if (getId(list_id).namedItem(name) === null) {
		getId(list_id).add(option_to_add);
	}
}

function change_command_set() {
	if (Game.state === "exploration") {
		getId('commands').innerHTML =
			"<input type='button' id='talk' value='Talk'>" +
			"<input type='button' id='door' value='Door'><br>" +
			"<input type='button' id='search' value='Search'>" +
			"<input type='button' id='take' value='Take'><br>" +
			"<select id='spell' size='6'></select>" +
			"<select id='item' size='6'></select><br>" +
			"<input type='button' id='cast_spell' value='Cast'>" +
			"<input type='button' id='use_item' value='Use'>";
	}

	if (Game.state === "combat") {
		getId('commands').innerHTML =
			"<input type='button' id='fight' value='Fight'>" +
			"<input type='button' id='run' value='Run'><br>" +
			"<select id='spell' size='6'></select>" +
			"<select id='item' size='6'></select>" +
			"<input type='button' id='cast_spell' value='Cast'>" +
			"<input type='button' id='use_item' value='Use'>";
	}
}

function add_text(text) {
	setTimeout(function() {
		getId('dialog').innerHTML += text + "\n";
		getId('dialog').scrollTop = getId('dialog').scrollHeight;
	}, 500);
}

// display stats, equipment, commands, and other options (side bars)
function display_output() {
    getId('character_name').innerHTML = player.name;
    getId('level').innerHTML = player.level;
    getId('max_hp').innerHTML = player.max_hp;
    getId('current_hp').innerHTML = player.current_hp;
    getId('max_mp').innerHTML = player.max_mp;
    getId('current_mp').innerHTML = player.current_mp;
    getId('strength').innerHTML = player.strength;
    getId('agility').innerHTML = player.agility;
    getId('experience').innerHTML = player.experience;
    getId('gold').innerHTML = player.gold;
    getId('attack_power').innerHTML = player.attack_power;
    getId('defense_power').innerHTML = player.defense_power;
    getId('weapon').innerHTML = text.weapons[player.weapon];
    getId('armor').innerHTML = text.armors[player.armor];
    getId('shield').innerHTML = text.shields[player.shield];

    getId('output').innerHTML = "player.x / 32 = " + player.x / tile_width + "<br>" +
        "player.y / 32 = " + player.y / tile_height + "<br>" +
        "player.offset_x = " + player.offset_x + "<br>" +
        "player.offset_y = " + player.offset_y + "<br>" +
        "steps = " + player.steps + "<br>" +
        "current tile = " + player.current_tile + "<br>" +
        "combat random = " + Game.combat.random_num + "<br>" +
        "current zone = " + map.current_zone + "<br>" +
        "player turn = " + Game.combat.player_turn + "<br>";

    var npc_count = 0;
    if (typeof map.map_ptr.npcs !== 'undefined') {
        npc_count = map.map_ptr.npcs.length;
    }

    getId('output2').innerHTML = "Current Map = " + map.current_map + "<br>" +
        "Game State = " + Game.state + "<br>" +
        "Number of NPCS = " + npc_count + "<br>" +
        "<hr>" +
        "Rescued Princess? = " + player.rescued_princess + "<br>" +
        "<hr>";

    // Commands
    if (Game.state === "combat") {
        getId('fight').onclick = function() {
            Game.combat.player_attack();
        };
        getId('run').onclick = function() {
            Game.combat.player_run();
        };
    } else {
        getId('door').onclick = function() {
            player.door();
        };
        getId('talk').onclick = function() {
            player.talk();
        };
    }
}

// Random test stuff
// -------------------------------------------------------------------

getId('add_exp').onclick = function() {
    player.add_experience(500);
};
getId('equip_club').onclick = function() {
    player.weapon = "club";
    player.shield = "none";
};
getId('equip_shield').onclick = function() {
    player.weapon = "none";
    player.shield = "leather_shield";
};
getId('equip_both').onclick = function() {
    player.weapon = "erdricks_sword";
    player.shield = "leather_shield";
};
getId('equip_none').onclick = function() {
    player.weapon = "none";
    player.shield = "none";
};
getId('move_to_map').onclick = function() {
    map.load_map(getId('map_name').value);
};

Game.begin();