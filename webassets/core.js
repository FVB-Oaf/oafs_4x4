const current_version=`b1.0.0.0`;
const banner=`<img src="webassets/banner.png"class="banner"alt="If this banner doesn't render, your installation of the pack may be corrupted...<br>Try re-downloading the pack... If the problem persists it's likely a developer issue!" /`;
function list2(functionInput2){
    let temp=[""];
    for(var cur in functionInput2){
        let temp2=typeof(functionInput2[cur])
        if(temp2=="string"){
            temp.push(`• ${functionInput2[cur].toString()}<br>`);
        }else if(temp2=="object"){
            if(functionInput2[cur].length==1){
                temp.push(`&emsp;&emsp;• ${functionInput2[cur][0].toString()}<br>`);
            }else if(functionInput2[cur].length==2){
                temp.push(`${"&emsp;".repeat(functionInput2[cur][1])}• ${functionInput2[cur][0].toString()}<br>`);
            };
        };
    };
    temp.slice(1);
    return temp.join("");
};
const changelog_content=`
    ${banner}<br><br>
    <h1>Local Oaf's 4×4 - Version ${current_version}</h1>
    <details><summary><h2>b1.0.0.0 (May 24<sup>th</sup>, 2025)</h2></summary><p>
        ${list2([
            "Added/Modified files:",
            ["%_changelog.html"],
            ["%_credits.html"],
            ["%_guide.html"],
            ["%pack.mcmeta"],
            ["%assets/minecraft/models/block/cactus.json"],
            ["%assets/minecraft/models/block/cake.json"],
            ["%assets/minecraft/models/block/cake_slice1.json"],
            ["%assets/minecraft/models/block/cake_slice2.json"],
            ["%assets/minecraft/models/block/cake_slice3.json"],
            ["%assets/minecraft/models/block/cake_slice4.json"],
            ["%assets/minecraft/models/block/cake_slice5.json"],
            ["%assets/minecraft/models/block/cake_slice6.json"],
            ["%assets/minecraft/models/block/carpet.json"],
            ["%assets/minecraft/models/block/cartography_table.json"],
            ["%assets/minecraft/models/block/cauldron.json"],
            ["%assets/minecraft/models/block/crafter.json"],
            ["%assets/minecraft/models/block/crafter_crafting.json"],
            ["%assets/minecraft/models/block/crafter_triggered.json"],
            ["%assets/minecraft/models/block/door_bottom_left.json"],
            ["%assets/minecraft/models/block/door_bottom_left_open.json"],
            ["%assets/minecraft/models/block/door_bottom_right.json"],
            ["%assets/minecraft/models/block/door_bottom_right_open.json"],
            ["%assets/minecraft/models/block/door_top_left.json"],
            ["%assets/minecraft/models/block/door_top_left_open.json"],
            ["%assets/minecraft/models/block/door_top_right.json"],
            ["%assets/minecraft/models/block/door_top_right_open.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_down_base.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_down_frustum.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_down_middle.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_down_tip.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_down_tip_merge.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_up_base.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_up_frustum.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_up_middle.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_up_tip.json"],
            ["%assets/minecraft/models/block/pointed_dripstone_up_tip_merge.json"],
            ["%assets/minecraft/models/block/sniffer_egg_not_cracked.json"],
            ["%assets/minecraft/models/block/sniffer_egg_slightly_cracked.json"],
            ["%assets/minecraft/models/block/sniffer_egg_very_cracked.json"],
            ["%assets/minecraft/models/block/template_anvil.json"],
            ["%assets/minecraft/models/block/template_campfire.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_bottom.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_open.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_top.json"],
            ["%assets/minecraft/models/block/template_trapdoor_bottom.json"],
            ["%assets/minecraft/models/block/template_trapdoor_open.json"],
            ["%assets/minecraft/models/block/template_trapdoor_top.json"],
            ["%assets/minecraft/models/item/generated.bbmodel"],
            ["%assets/minecraft/models/item/generated.json"],
            ["%assets/minecraft/models/item/_oaf/generated_render.json"],
            ["%assets/minecraft/textures/block/acacia_door_bottom.png"],
            ["%assets/minecraft/textures/block/acacia_door_top.png"],
            ["%assets/minecraft/textures/block/acacia_leaves.png"],
            ["%assets/minecraft/textures/block/acacia_log.png"],
            ["%assets/minecraft/textures/block/acacia_log_top.png"],
            ["%assets/minecraft/textures/block/acacia_planks.png"],
            ["%assets/minecraft/textures/block/acacia_sapling.png"],
            ["%assets/minecraft/textures/block/acacia_trapdoor.png"],
            ["%assets/minecraft/textures/block/activator_rail.png"],
            ["%assets/minecraft/textures/block/activator_rail_on.png"],
            ["%assets/minecraft/textures/block/allium.png"],
            ["%assets/minecraft/textures/block/amethyst_block.png"],
            ["%assets/minecraft/textures/block/amethyst_cluster.png"],
            ["%assets/minecraft/textures/block/ancient_debris_side.png"],
            ["%assets/minecraft/textures/block/ancient_debris_top.png"],
            ["%assets/minecraft/textures/block/andesite.png"],
            ["%assets/minecraft/textures/block/anvil.png"],
            ["%assets/minecraft/textures/block/anvil_top.png"],
            ["%assets/minecraft/textures/block/attached_melon_stem.png"],
            ["%assets/minecraft/textures/block/attached_pumpkin_stem.png"],
            ["%assets/minecraft/textures/block/azalea_leaves.png"],
            ["%assets/minecraft/textures/block/azalea_plant.png"],
            ["%assets/minecraft/textures/block/azalea_side.png"],
            ["%assets/minecraft/textures/block/azalea_top.png"],
            ["%assets/minecraft/textures/block/azure_bluet.png"],
            ["%assets/minecraft/textures/block/bamboo_block.png"],
            ["%assets/minecraft/textures/block/bamboo_block_top.png"],
            ["%assets/minecraft/textures/block/bamboo_door_bottom.png"],
            ["%assets/minecraft/textures/block/bamboo_door_top.png"],
            ["%assets/minecraft/textures/block/cactus_bottom.png"],
            ["%assets/minecraft/textures/block/cactus_side.png"],
            ["%assets/minecraft/textures/block/cactus_top.png"],
            ["%assets/minecraft/textures/block/cake_bottom.png"],
            ["%assets/minecraft/textures/block/cake_side.png"],
            ["%assets/minecraft/textures/block/cake_top.png"],
            ["%assets/minecraft/textures/block/campfire_log.png"],
            ["%assets/minecraft/textures/block/campfire_log_lit.png"],
            ["%assets/minecraft/textures/block/campfire_log_lit.png.mcmeta"],
            ["%assets/minecraft/textures/block/cauldron_bottom.png"],
            ["%assets/minecraft/textures/block/cauldron_inner.png"],
            ["%assets/minecraft/textures/block/cauldron_side.png"],
            ["%assets/minecraft/textures/block/cauldron_top.png"],
            ["%assets/minecraft/textures/environment/end_sky.png"],
            ["%assets/minecraft/textures/environment/moon_phases.png"],
            ["%assets/minecraft/textures/environment/rain.png"],
            ["%assets/minecraft/textures/environment/snow.png"],
            ["%assets/minecraft/textures/environment/sun.png"],
            ["%assets/minecraft/textures/item/_oaf/null.png"],
            ["%assets/minecraft/textures/painting/alban.png"],
            ["%assets/minecraft/textures/painting/aztec.png"],
            ["%assets/minecraft/textures/painting/aztec2.png"],
            ["%assets/minecraft/textures/painting/back.png"],
            ["%assets/minecraft/textures/painting/backyard.png"],
            ["%assets/minecraft/textures/painting/baroque.png"],
            ["%assets/minecraft/textures/painting/bomb.png"],
            ["%assets/minecraft/textures/painting/bouquet.png"],
            ["%assets/minecraft/textures/painting/burning_skull.png"],
            ["%assets/minecraft/textures/painting/bust.png"],
            ["%assets/minecraft/textures/painting/cavebird.png"],
            ["%assets/minecraft/textures/painting/changing.png"],
            ["%assets/minecraft/textures/painting/cotan.png"],
            ["%assets/minecraft/textures/painting/courbet.png"],
            ["%assets/minecraft/textures/painting/creebet.png"],
            ["%assets/minecraft/textures/painting/donkey_kong.png"],
            ["%assets/minecraft/textures/painting/earth.png"],
            ["%assets/minecraft/textures/painting/endboss.png"],
            ["%assets/minecraft/textures/painting/fern.png"],
            ["%assets/minecraft/textures/painting/fighters.png"],
            ["%assets/minecraft/textures/painting/finding.png"],
            ["%assets/minecraft/textures/painting/fire.png"],
            ["%assets/minecraft/textures/painting/graham.png"],
            ["%assets/minecraft/textures/painting/humble.png"],
            ["%assets/minecraft/textures/painting/kebab.png"],
            ["%assets/minecraft/textures/painting/kz.png"],
            ["%assets/minecraft/textures/painting/lowmist.png"],
            ["%assets/minecraft/textures/painting/match.png"],
            ["%assets/minecraft/textures/painting/meditative.png"],
            ["%assets/minecraft/textures/painting/orb.png"],
            ["%assets/minecraft/textures/painting/owlemons.png"],
            ["%assets/minecraft/textures/painting/passage.png"],
            ["%assets/minecraft/textures/painting/pigscene.png"],
            ["%assets/minecraft/textures/painting/plant.png"],
            ["%assets/minecraft/textures/painting/pointer.png"],
            ["%assets/minecraft/textures/painting/pond.png"],
            ["%assets/minecraft/textures/painting/pool.png"],
            ["%assets/minecraft/textures/painting/prairie_ride.png"],
            ["%assets/minecraft/textures/painting/sea.png"],
            ["%assets/minecraft/textures/painting/skeleton.png"],
            ["%assets/minecraft/textures/painting/skull_and_roses.png"],
            ["%assets/minecraft/textures/painting/stage.png"],
            ["%assets/minecraft/textures/painting/sunflowers.png"],
            ["%assets/minecraft/textures/painting/sunset.png"],
            ["%assets/minecraft/textures/painting/tides.png"],
            ["%assets/minecraft/textures/painting/unpacked.png"],
            ["%assets/minecraft/textures/painting/void.png"],
            ["%assets/minecraft/textures/painting/wanderer.png"],
            ["%assets/minecraft/textures/painting/wasteland.png"],
            ["%assets/minecraft/textures/painting/water.png"],
            ["%assets/minecraft/textures/painting/wind.png"],
            ["%assets/minecraft/textures/painting/wither.png"],
            ["%webassets/core.js"],
            ["%webassets/guide.css"],
            ["%webassets/mc.ttf"]
        ])}
    </p></details>
`;
const guide_content = `
    ${banner}
    <h1>Local Oaf's 4×4 - Version ${current_version}</h1>
    <p>
        Please use OptiFine and have its settings set as follows:<br>
        <br>
        ${list2([["Video Settings > Quality > Custom Entity Models : ON"],["Video Settings > Quality > Custom Item Models : ON"]])}
        <br>
        The latest version of OptiFine can be downloaded <a href="https://optifine.net/downloads">here</a>.<br>
        The changelog can be viewed <a href="_changelog.html#latest">here</a>.<br>
        The credits can be viewed <a href="_credits.html#home">here</a>.<br>
        <br>
        <br>
        <span class="smallText">
            This resource pack and its creator are in no way affiliated with 
            <a href="https://optifine.net/home/"class="greyLink">OptiFine</a>,
            <a href="https://www.microsoft.com/en-us/"class="greyLink">Microsoft®</a>, 
            <a href="https://www.minecraft.net/en-us/article/meet-mojang-studios/"class="greyLink">Mojang Studios&trade;</a>, 
            <a href="https://www.minecraft.net/en-us/"class="greyLink">Minecraft®</a>, 
            <a href="https://www.curseforge.com/"class="greyLink">CurseForge®</a>, 
            or any employees/contractors of these organizations.
        </span>
    </p>
`;
const credits_content = `
    <h1>Local Oaf's 4×4 - Version ${current_version}</h1>
    <p>
        Software Used:<br>
        ${list2([["<a href=\"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc?tabs=%7B%22MC_Tabs_0%22%3A0%7D\">Minecraft Java Edition</a>"],["<a href=\"https://optifine.net/home\">OptiFine</a>"],["<a href=\"https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com\">Mozilla Firefox</a>"],["<a href=\"https://www.microsoft.com/en-us/edge/?form=MA13FJ\">MS Edge</a>"],["<a href=\"https://microsoft-paint-3d.en.softonic.com/?ex=RAMP-2639.1\">MS Paint 3D</a>"],["<a href=\"https://mh-nexus.de/en/hxd/\">HxD</a>"],["<a href=\"https://code.visualstudio.com/\">Visual Studio Code (VSC)</a>"],["<a href=\"https://chatgpt.com/\">ChatGPT</a>"],["<a href=\"https://www.blender.org/\">Blender</a>"],["<a href=\"https://www.blockbench.net/\">Blockbench</a>"]])}
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
function replaceTextStrings(){
    try{document.getElementById("changelog_content").innerHTML=`${changelog_content}`;}catch{console.log("no element named changelog_content found, skipping...");};
    try{document.getElementById("guide_content").innerHTML=`${guide_content}`;} catch {console.log("no element named guide_content found, skipping...");};
    try{document.getElementById("credits_content").innerHTML=`${credits_content}`;} catch {console.log("no element named credits_content found, skipping...");};
};
window.onload=function(){
    replaceTextStrings();
};