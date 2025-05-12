const version = `b1.0.1.0`;
const banner = `<img src = "webassets/banner.png" class = "banner" alt = "banner wasn't able to render :&lpar;" /`;
function list2(functionInput2){
    let temp = [""];
    for(var cur in functionInput2){
        let temp2 = typeof(functionInput2[cur])
        if (temp2 == "string"){
            temp.push(`• ${functionInput2[cur].toString()}<br>`);
        } else if (temp2 == "object"){
            if (functionInput2[cur].length==1){
                temp.push(`&emsp;&emsp;• ${functionInput2[cur][0].toString()}<br>`);
            } else if (functionInput2[cur].length == 2){
                temp.push(`${"&emsp;".repeat(functionInput2[cur][1])}• ${functionInput2[cur][0].toString()}<br>`);
            };
        };
    };
    temp.slice(1);
    return temp.join("");
};
const changelog_content = `
    ${banner}<br><br>
    <h1>Local Oaf's 4&times;4 - Version ${version}</h1>
    <details><summary><h2>b1.0.0.0 (May 11<sup>th</sup>, 2025)</h2></summary><p>
        ${list2([
            "Added/Modified files:",
            ["$textures/block/acacia_door_bottom.png"],
            ["$textures/block/acacia_door_top.png"],
            ["$textures/block/acacia_leaves.png"],
            ["$textures/block/acacia_log.png"],
            ["$textures/block/acacia_log_top.png"],
            ["$textures/block/acacia_planks.png"],
            ["$textures/block/acacia_sapling.png"],
            ["$textures/block/acacia_trapdoor.png"],
            ["$textures/block/activator_rail.png"],
            ["$textures/block/activator_rail_on.png"],
            ["$textures/block/allium.png"],
            ["$textures/block/amethyst_block.png"],
            ["$textures/block/amethyst_cluster.png"],
            ["$textures/block/ancient_debris_side.png"],
            ["$textures/block/ancient_debris_top.png"],
            ["$textures/block/andesite.png"],
            ["$textures/block/anvil.png"],
            ["$textures/block/anvil_top.png"],
            ["$textures/block/attached_melon_stem.png"],
            ["$textures/block/attached_pumpkin_stem.png"],
            ["$textures/block/azalea_leaves.png"],
            ["$textures/block/azalea_plant.png"],
            ["$textures/block/azalea_side.png"],
            ["$textures/block/azalea_top.png"],
            ["$textures/block/azure_bluet.png"],
            ["$textures/block/bamboo_block.png"],
            ["$textures/block/bamboo_block_top.png"],
            ["$textures/block/bamboo_door_bottom.png"],
            ["$textures/block/bamboo_door_top.png"],
            ["$textures/block/bamboo_fence_gate_particle.png"],
            ["$textures/block/bamboo_fence_particle.png"],
            ["$textures/block/bamboo_large_leaves.png"],
            ["$textures/block/bamboo_mosaic.png"],
            ["$textures/block/bamboo_planks.png"],
            ["$textures/block/bamboo_singleleaf.png"],
            ["$textures/block/bamboo_small_leaves.png"],
            ["$textures/block/bamboo_stage0.png"],
            ["$textures/block/bamboo_stalk.png"],
            ["$textures/block/bamboo_trapdoor.png"],
            ["%webassets/core.js"],
            ["%webassets/guide.css"],
            ["%webassets/mc.ttf"],
            ["%_changelog.png"],
            ["%_credits.png"],
            ["%_guide.png"],
            ["%pack.mcmeta"],
            ["%pack.png"]
        ])}
    </p></details><br><details><summary><h2>b1.0.1.0 (May 12<sup>th</sup>, 2025)</h2></summary><p>
        ${list2([
            "Added/Modified files:",
            ["$textures/block/barrel_bottom.png"],
            ["$textures/block/barrel_side.png"],
            ["$textures/block/barrel_top.png"],
            ["$textures/block/barrel_top_open.png"],
            ["$textures/block/basalt_side.png"],
            ["$textures/block/basalt_top.png"],
            ["$textures/block/beacon.png"],
            ["$textures/block/bedrock.png"],
            ["$textures/block/bee_nest_bottom.png"],
            ["$textures/block/bee_nest_front.png"],
            ["$textures/block/bee_nest_front_honey.png"],
            ["$textures/block/bee_nest_side.png"],
            ["$textures/block/bee_nest_top.png"],
            ["$textures/block/beehive_end.png"],
            ["$textures/block/beehive_front.png"],
            ["$textures/block/beehive_front_honey.png"],
            ["$textures/block/beehive_side.png"],
            ["$textures/block/beetroots_stage0.png"],
            ["$textures/block/beetroots_stage1.png"],
            ["$textures/block/beetroots_stage2.png"],
            ["$textures/block/beetroots_stage3.png"],
            ["$textures/block/big_dripleaf_side.png"],
            ["$textures/block/big_dripleaf_stem.png"],
            ["$textures/block/big_dripleaf_tip.png"],
            ["$textures/block/big_dripleaf_top.png"],
            ["$textures/block/birch_door_bottom.png"],
            ["$textures/block/birch_door_top.png"],
            ["$textures/block/birch_leaves.png"],
            ["$textures/block/birch_log.png"],
            ["$textures/block/birch_log_top.png"],
            ["$textures/block/birch_planks.png"],
            ["$textures/block/birch_sapling.png"],
            ["$textures/block/birch_trapdoor.png"],
            ["$textures/block/black_concrete.png"],
            ["$textures/block/black_concrete_powder.png"],
            ["$textures/block/black_glazed_terracotta.png"],
            ["$textures/block/black_shulker_box.png"],
            ["$textures/block/black_stained_glass.png"],
            ["$textures/block/black_stained_glass_pane_top.png"],
            ["$textures/block/black_terracotta.png"],
            ["$textures/block/black_wool.png"],
            ["$textures/block/blackstone.png"],
            ["$textures/block/blackstone_top.png"],
            ["$textures/block/blast_furnace_front.png"],
            ["$textures/block/blast_furnace_front_on.png"],
            ["$textures/block/blast_furnace_front_on.png.mcmeta"],
            ["$textures/block/blast_furnace_side.png"],
            ["$textures/block/blast_furnace_top.png"],
            ["$textures/block/blue_concrete.png"],
            ["$textures/block/blue_concrete_powder.png"],
            ["$textures/block/blue_glazed_terracotta.png"],
            ["$textures/block/blue_ice.png"],
            ["$textures/block/blue_orchid.png"],
            ["$textures/block/blue_shulker_box.png"],
            ["$textures/block/blue_stained_glass.png"],
            ["$textures/block/blue_stained_glass_pane_top.png"],
            ["$textures/block/blue_terracotta.png"],
            ["$textures/block/blue_wool.png"],
            ["$textures/block/bone_block_side.png"],
            ["$textures/block/bone_block_top.png"],
            ["$textures/block/bookshelf.png"],
            ["$textures/block/brain_coral.png"],
            ["$textures/block/brain_coral_block.png"],
            ["$textures/block/brain_coral_fan.png"],
            ["$textures/block/brewing_stand.png"],
            ["$textures/block/brewing_stand_base.png"],
            ["$textures/block/bricks.png"],
            ["$textures/block/brown_concrete.png"],
            ["$textures/block/brown_concrete_powder.png"],
            ["$textures/block/brown_glazed_terracotta.png"],
            ["$textures/block/brown_mushroom.png"],
            ["$textures/block/brown_mushroom_block.png"],
            ["$textures/block/brown_shulker_box.png"],
            ["$textures/block/brown_stained_glass.png"],
            ["$textures/block/brown_stained_glass_pane_top.png"],
            ["$textures/block/brown_terracotta.png"],
            ["$textures/block/brown_wool.png"],
            ["$textures/block/bubble_coral.png"],
            ["$textures/block/bubble_coral_block.png"],
            ["$textures/block/bubble_coral_fan.png"],
            ["$textures/block/budding_amethyst.png"],
            ["$textures/block/bush.png"],
            ["$textures/block/cactus_bottom.png"],
            ["$textures/block/cactus_flower.png"],
            ["$textures/block/cactus_side.png"],
            ["$textures/block/cactus_top.png"],
            ["$textures/block/cake_bottom.png"],
            ["$textures/block/cake_side.png"],
            ["$textures/block/cake_top.png"],
            ["$textures/block/calcite.png"],
            ["$textures/block/calibrated_sculk_sensor_amethyst.png"],
            ["$textures/block/calibrated_sculk_sensor_input_side.png"],
            ["$textures/block/calibrated_sculk_sensor_top.png"],
            ["$textures/block/campfire_fire.png"],
            ["$textures/block/campfire_fire.png.mcmeta"],
            ["$textures/block/campfire_log.png"],
            ["$textures/block/campfire_log_lit.png"],
            ["$textures/block/campfire_log_lit.png.mcmeta"],
            ["$textures/block/carrots_stage0.png"],
            ["$textures/block/carrots_stage1.png"],
            ["$textures/block/carrots_stage2.png"],
            ["$textures/block/carrots_stage3.png"],
            ["$textures/block/cartography_table_side1.png"],
            ["$textures/block/cartography_table_side2.png"],
            ["$textures/block/cartography_table_side3.png"],
            ["$textures/block/cartography_table_top.png"],
            ["$textures/gui/title/edition.png"],
            ["$textures/gui/title/edition.png.mcmeta"],
            ["$textures/gui/title/minceraft.png"],
            ["$textures/gui/title/minceraft.png.mcmeta"],
            ["$textures/gui/title/minecraft.png"],
            ["$textures/gui/title/minecraft.png.mcmeta"],
            ["$textures/gui/title/mojangstudios.png"],
            ["$textures/gui/title/mojangstudios.png.mcmeta"],
            ["$textures/gui/title/realms.png"],
            ["$textures/gui/title/realms.png.mcmeta"],
            ["$textures/painting/alban.png"],
            ["$textures/painting/aztec.png"],
            ["$textures/painting/aztec2.png"],
            ["$textures/painting/back.png"],
            ["$textures/painting/backyard.png"],
            ["$textures/painting/baroque.png"],
            ["$textures/painting/bomb.png"],
            ["$textures/painting/bouquet.png"],
            ["$textures/painting/burning_skull.png"],
            ["$textures/painting/bust.png"],
            ["$textures/painting/cavebird.png"],
            ["$textures/painting/changing.png"],
            ["$textures/painting/cotan.png"],
            ["$textures/painting/courbet.png"],
            ["$textures/painting/creebet.png"],
            ["$textures/painting/donkey_kong.png"],
            ["$textures/painting/earth.png"],
            ["$textures/painting/endboss.png"],
            ["$textures/painting/fern.png"],
            ["$textures/painting/fighters.png"],
            ["$textures/painting/finding.png"],
            ["$textures/painting/fire.png"],
            ["$textures/painting/graham.png"],
            ["$textures/painting/humble.png"],
            ["$textures/painting/kebab.png"],
            ["$textures/painting/kz.png"],
            ["$textures/painting/lowmist.png"],
            ["$textures/painting/match.png"],
            ["$textures/painting/meditative.png"],
            ["$textures/painting/orb.png"],
            ["$textures/painting/owlemons.png"],
            ["$textures/painting/passage.png"],
            ["$textures/painting/pigscene.png"],
            ["$textures/painting/plant.png"],
            ["$textures/painting/pointer.png"],
            ["$textures/painting/pond.png"],
            ["$textures/painting/pool.png"],
            ["$textures/painting/prairie_ride.png"],
            ["$textures/painting/sea.png"],
            ["$textures/painting/skeleton.png"],
            ["$textures/painting/skull_and_roses.png"],
            ["$textures/painting/stage.png"],
            ["$textures/painting/sunflowers.png"],
            ["$textures/painting/sunset.png"],
            ["$textures/painting/tides.png"],
            ["$textures/painting/unpacked.png"],
            ["$textures/painting/void.png"],
            ["$textures/painting/wanderer.png"],
            ["$textures/painting/wasteland.png"],
            ["$textures/painting/water.png"],
            ["$textures/painting/wind.png"],
            ["$textures/painting/wither.png"]
        ])}
    </p></details>
`;
const guide_content = `
    ${banner}
    <h1>Local Oaf's 4&times;4 - Version ${version}</h1>
    <p>
        
    </p>
`;
const credits_content = `
    <h1>Local Oaf's 4&times;4 - Version ${version}</h1>
    <p>
        Software Used:<br>
        ${list2([
            ["<a href=\"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc?tabs=%7B%22MC_Tabs_0%22%3A0%7D\">Minecraft Java Edition</a>"],
            ["<a href=\"https://optifine.net/home\">OptiFine</a>"],
            ["<a href=\"https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com\">Mozilla Firefox</a>"],
            ["<a href=\"https://www.microsoft.com/en-us/edge/?form=MA13FJ\">MS Edge</a>"],
            ["<a href=\"https://microsoft-paint-3d.en.softonic.com/?ex=RAMP-2639.1\">MS Paint 3D</a>"],
            ["<a href=\"https://mh-nexus.de/en/hxd/\">HxD</a>"],
            ["<a href=\"https://code.visualstudio.com/\">Visual Studio Code (VSC)</a>"],
            ["<a href=\"https://chatgpt.com/\">ChatGPT</a>"],
            ["<a href=\"https://www.blender.org/\">Blender</a>"],
            ["<a href=\"https://www.blockbench.net/\">Blockbench</a>"]
        ])}
        <br>
        <br>
        <br>
        <br>
        Mozilla Firefox / MS Edge:<br>
        &emsp;&emsp;• HTML viewing<br>
        <br>
        MS Paint 3D:<br>
        &emsp;&emsp;• Texturing<br>
        <br>
        HxD:<br>
        &emsp;&emsp;• .bin file editing<br>
        <br>
        Visual Studio Code (VSC):<br>
        &emsp;&emsp;• Text file editing<br>
        <br>
        ChatGPT:<br>
        &emsp;&emsp;• Design for the "&" character in the ASCII table<br>
        <br>
        Blender:<br>
        &emsp;&emsp;• Block modelling (degisn only)<br>
        <br>
        Blockbench:<br>
        &emsp;&emsp;• Certain block / item models<br>
        &emsp;&emsp;• Entity models
    </p>
`;
window.onload = function(){
    try {
        document.getElementById("changelog_content").innerHTML = `${changelog_content}`;
    } catch {
        console.log("no element named changelog_content found, skipping...");
    };


    try {
        document.getElementById("guide_content").innerHTML = `${guide_content}`;
    } catch {
        console.log("no element named guide_content found, skipping...");
    };


    try{
        document.getElementById("credits_content").innerHTML = `${credits_content}`;
    } catch {
        console.log("no element named credits_content found, skipping...");
    };
};
