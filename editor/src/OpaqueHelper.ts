export function isOpaque(name?: string){
  if (!name) return false

  if (!name.startsWith("minecraft:")) {
    name = "minecraft:" + name
  }

  return [
    "minecraft:acacia_planks",
    "minecraft:acacia_wood",
    "minecraft:ancient_debris",
    "minecraft:andesite",
    "minecraft:barrel",
    "minecraft:basalt",
    "minecraft:bedrock",
    "minecraft:bee_nest",
    "minecraft:beehive",
    "minecraft:birch_log",
    "minecraft:birch_planks",
    "minecraft:birch_wood",
    "minecraft:black_concrete",
    "minecraft:black_concrete_powder",
    "minecraft:black_glazed_terracotta",
    "minecraft:black_terracotta",
    "minecraft:blackstone",
    "minecraft:blast_furnace",
    "minecraft:blue_concrete",
    "minecraft:blue_concrete_powder",
    "minecraft:blue_glazed_terracotta",
    "minecraft:blue_ice",
    "minecraft:blue_terracotta",
    "minecraft:blue_wool",
    "minecraft:bone_block",
    "minecraft:bookshelf",
    "minecraft:brain_coral_block",
    "minecraft:bricks",
    "minecraft:brown_concrete",
    "minecraft:brown_concrete_powder",
    "minecraft:brown_glazed_terracotta",
    "minecraft:brown_mushroom_block",
    "minecraft:brown_terracotta",
    "minecraft:brown_wool",
    "minecraft:bubble_coral_block",
    "minecraft:cartography_table",
    "minecraft:carved_pumpkin",
    "minecraft:chain_command_block",
    "minecraft:chiseled_nether_bricks",
    "minecraft:chiseled_polished_blackstone",
    "minecraft:chiseled_quartz_block",
    "minecraft:chiseled_red_sandstone",
    "minecraft:chiseled_sandstone",
    "minecraft:chiseled_stone_bricks",
    "minecraft:clay",
    "minecraft:coal_block",
    "minecraft:coal_ore",
    "minecraft:coarse_dirt",
    "minecraft:cobblestone",
    "minecraft:command_block",
    "minecraft:cracked_nether_bricks",
    "minecraft:cracked_polished_blackstone_bricks",
    "minecraft:cracked_stone_bricks",
    "minecraft:crafting_table",
    "minecraft:crimson_hyphae",
    "minecraft:crimson_nylium",
    "minecraft:crimson_planks",
    "minecraft:crimson_roots",
    "minecraft:crimson_stem",
    "minecraft:crying_obsidian",
    "minecraft:cut_red_sandstone",
    "minecraft:cut_sandstone",
    "minecraft:cyan_concrete",
    "minecraft:cyan_concrete_powder",
    "minecraft:cyan_glazed_terracotta",
    "minecraft:cyan_terracotta",
    "minecraft:cyan_wool",
    "minecraft:dark_oak_log",
    "minecraft:dark_oak_planks",
    "minecraft:dark_oak_wood",
    "minecraft:dark_prismarine",
    "minecraft:dead_brain_coral_block",
    "minecraft:dead_bubble_coral_block",
    "minecraft:dead_fire_coral_block",
    "minecraft:dead_horn_coral_block",
    "minecraft:dead_tube_coral_block",
    "minecraft:diamond_block",
    "minecraft:diamond_ore",
    "minecraft:diorite",
    "minecraft:dirt",
    "minecraft:dispenser",
    "minecraft:dried_kelp_block",
    "minecraft:dropper",
    "minecraft:emerald_block",
    "minecraft:emerald_ore",
    "minecraft:end_stone",
    "minecraft:end_stone_bricks",
    "minecraft:fire_coral_block",
    "minecraft:fletching_table",
    "minecraft:furnace",
    "minecraft:gilded_blackstone",
    "minecraft:glowstone",
    "minecraft:gold_block",
    "minecraft:gold_ore",
    "minecraft:granite",
    "minecraft:grass_block",
    "minecraft:gravel",
    "minecraft:gray_concrete",
    "minecraft:gray_concrete_powder",
    "minecraft:gray_glazed_terracotta",
    "minecraft:gray_terracotta",
    "minecraft:gray_wool",
    "minecraft:green_concrete",
    "minecraft:green_concrete_powder",
    "minecraft:green_glazed_terracotta",
    "minecraft:green_terracotta",
    "minecraft:green_wool",
    "minecraft:hay_block",
    "minecraft:honeycomb_block",
    "minecraft:horn_coral_block",
    "minecraft:infested_chiseled_stone_bricks",
    "minecraft:infested_cobblestone",
    "minecraft:infested_cracked_stone_bricks",
    "minecraft:infested_mossy_stone_bricks",
    "minecraft:infested_stone",
    "minecraft:infested_stone_bricks",
    "minecraft:iron_block",
    "minecraft:iron_ore",
    "minecraft:jack_o_lantern",
    "minecraft:jigsaw",
    "minecraft:jukebox",
    "minecraft:jungle_log",
    "minecraft:jungle_planks",
    "minecraft:jungle_wood",
    "minecraft:lapis_block",
    "minecraft:lapis_ore",
    "minecraft:light_blue_concrete",
    "minecraft:light_blue_concrete_powder",
    "minecraft:light_blue_glazed_terracotta",
    "minecraft:light_blue_terracotta",
    "minecraft:light_blue_wool",
    "minecraft:light_gray_concrete",
    "minecraft:light_gray_concrete_powder",
    "minecraft:light_gray_glazed_terracotta",
    "minecraft:light_gray_terracotta",
    "minecraft:light_gray_wool",
    "minecraft:lime_concrete",
    "minecraft:lime_concrete_powder",
    "minecraft:lime_glazed_terracotta",
    "minecraft:lime_terracotta",
    "minecraft:lime_wool",
    "minecraft:lodestone",
    "minecraft:loom",
    "minecraft:magenta_concrete",
    "minecraft:magenta_concrete_powder",
    "minecraft:magenta_glazed_terracotta",
    "minecraft:magenta_terracotta",
    "minecraft:magenta_wool",
    "minecraft:magma_block",
    "minecraft:melon",
    "minecraft:mossy_cobblestone",
    "minecraft:mossy_stone_bricks",
    "minecraft:mycelium",
    "minecraft:nether_bricks",
    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:nether_wart_block",
    "minecraft:netherite_block",
    "minecraft:netherrack",
    "minecraft:note_block",
    "minecraft:oak_log",
    "minecraft:oak_planks",
    "minecraft:oak_wood",
    "minecraft:observer",
    "minecraft:obsidian",
    "minecraft:orange_concrete",
    "minecraft:orange_concrete_powder",
    "minecraft:orange_glazed_terracotta",
    "minecraft:orange_terracotta",
    "minecraft:orange_wool",
    "minecraft:packed_ice",
    "minecraft:pink_concrete",
    "minecraft:pink_concrete_powder",
    "minecraft:pink_glazed_terracotta",
    "minecraft:pink_terracotta",
    "minecraft:pink_wool",
    "minecraft:podzol",
    "minecraft:polished_andesite",
    "minecraft:polished_basalt",
    "minecraft:polished_blackstone",
    "minecraft:polished_blackstone_bricks",
    "minecraft:polished_diorite",
    "minecraft:polished_granite",
    "minecraft:prismarine",
    "minecraft:prismarine_bricks",
    "minecraft:pumpkin",
    "minecraft:purple_concrete",
    "minecraft:purple_concrete_powder",
    "minecraft:purple_glazed_terracotta",
    "minecraft:purple_terracotta",
    "minecraft:purple_wool",
    "minecraft:purpur_block",
    "minecraft:purpur_pillar",
    "minecraft:quartz_block",
    "minecraft:quartz_bricks",
    "minecraft:quartz_pillar",
    "minecraft:red_concrete",
    "minecraft:red_concrete_powder",
    "minecraft:red_glazed_terracotta",
    "minecraft:red_mushroom_block",
    "minecraft:red_nether_bricks",
    "minecraft:red_sand",
    "minecraft:red_sandstone",
    "minecraft:red_terracotta",
    "minecraft:red_wool",
    "minecraft:redstone_block",
    "minecraft:redstone_lamp",
    "minecraft:redstone_ore",
    "minecraft:repeating_command_block",
    "minecraft:respawn_anchor",
    "minecraft:sand",
    "minecraft:sandstone",
    "minecraft:sea_lantern",
    "minecraft:shroomlight",
    "minecraft:smithing_table",
    "minecraft:smoker",
    "minecraft:smooth_quartz",
    "minecraft:smooth_red_sandstone",
    "minecraft:smooth_sandstone",
    "minecraft:smooth_stone",
    "minecraft:snow_block",
    "minecraft:soul_sand",
    "minecraft:soul_soil",
    "minecraft:sponge",
    "minecraft:spruce_log",
    "minecraft:spruce_planks",
    "minecraft:spruce_wood",
    "minecraft:stone",
    "minecraft:stone_bricks",
    "minecraft:stripped_acacia_log",
    "minecraft:stripped_acacia_wood",
    "minecraft:stripped_birch_log",
    "minecraft:stripped_birch_wood",
    "minecraft:stripped_crimson_hyphae",
    "minecraft:stripped_crimson_stem",
    "minecraft:stripped_dark_oak_log",
    "minecraft:stripped_dark_oak_wood",
    "minecraft:stripped_jungle_log",
    "minecraft:stripped_jungle_wood",
    "minecraft:stripped_oak_log",
    "minecraft:stripped_oak_wood",
    "minecraft:stripped_spruce_log",
    "minecraft:stripped_spruce_wood",
    "minecraft:stripped_warped_hyphae",
    "minecraft:stripped_warped_stem",
    "minecraft:structure_block",
    "minecraft:target",
    "minecraft:terracotta",
    "minecraft:tnt",
    "minecraft:tube_coral_block",
    "minecraft:warped_hyphae",
    "minecraft:warped_nylium",
    "minecraft:warped_planks",
    "minecraft:warped_stem",
    "minecraft:warped_wart_block",
    "minecraft:wet_sponge",
    "minecraft:white_concrete",
    "minecraft:white_concrete_powder",
    "minecraft:white_glazed_terracotta",
    "minecraft:white_terracotta",
    "minecraft:white_wool",
    "minecraft:yellow_concrete",
    "minecraft:yellow_concrete_powder",
    "minecraft:yellow_glazed_terracotta",
    "minecraft:yellow_terracotta",
    "minecraft:yellow_wool"
  ].includes(name)
}
