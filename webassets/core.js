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
    <details><summary><h2>b1.0.0.0 (June 2<sup>nd</sup>, 2025)</h2></summary><p>
        ${list2([
            "Added/Modified files:",
            ["%_changelog.html"],
            ["%_credits.html"],
            ["%_guide.html"],
            ["%pack.mcmeta"],
            ["%assets/minecraft/blockstates/attached_pumpkin_stem.json"],//defer to melon stem
            ["%assets/minecraft/blockstates/bamboo.json"],//eliminate age1
            ["%assets/minecraft/blockstates/pumpkin_stem.json"],//defer to melon stem
            ["%assets/minecraft/models/block/bamboo1_age0.json"],
            ["%assets/minecraft/models/block/bamboo2_age0.json"],
            ["%assets/minecraft/models/block/bamboo3_age0.json"],
            ["%assets/minecraft/models/block/bamboo4_age0.json"],
            ["%assets/minecraft/models/block/carpet.json"],
            ["%assets/minecraft/models/block/cartography_table.json"],
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
            ["%assets/minecraft/models/block/template_anvil.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_bottom.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_open.json"],
            ["%assets/minecraft/models/block/template_orientable_trapdoor_top.json"],
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
            ["%assets/minecraft/textures/block/azalea_leaves.png"],
            ["%assets/minecraft/textures/block/azalea_plant.png"],
            ["%assets/minecraft/textures/block/azalea_side.png"],
            ["%assets/minecraft/textures/block/azalea_top.png"],
            ["%assets/minecraft/textures/block/azure_bluet.png"],
            ["%assets/minecraft/textures/block/bamboo_block.png"],
            ["%assets/minecraft/textures/block/bamboo_block_top.png"],
            ["%assets/minecraft/textures/block/bamboo_door_bottom.png"],
            ["%assets/minecraft/textures/block/bamboo_door_top.png"],
            ["%assets/minecraft/textures/block/bamboo_fence_gate_particle.png"],
            ["%assets/minecraft/textures/block/bamboo_fence_particle.png"],
            ["%assets/minecraft/textures/block/bamboo_large_leaves.png"],
            ["%assets/minecraft/textures/block/bamboo_mosaic.png"],
            ["%assets/minecraft/textures/block/bamboo_planks.png"],
            ["%assets/minecraft/textures/block/bamboo_singleleaf.png"],
            ["%assets/minecraft/textures/block/bamboo_small_leaves.png"],
            ["%assets/minecraft/textures/block/bamboo_stage0.png"],
            ["%assets/minecraft/textures/block/bamboo_stalk.png"],
            ["%assets/minecraft/textures/block/bamboo_trapdoor.png"],
            ["%assets/minecraft/textures/block/barrel_bottom.png"],
            ["%assets/minecraft/textures/block/barrel_side.png"],
            ["%assets/minecraft/textures/block/barrel_top.png"],
            ["%assets/minecraft/textures/block/barrel_top_open.png"],
            ["%assets/minecraft/textures/block/basalt_side.png"],
            ["%assets/minecraft/textures/block/basalt_top.png"],
            ["%assets/minecraft/textures/block/beacon.png"],
            ["%assets/minecraft/textures/block/bedrock.png"],
            ["%assets/minecraft/textures/block/glass.png"],//appears so early because used by beacon
            ["%assets/minecraft/textures/block/obsidian.png"],//appears so early because used by beacon
            ["%assets/minecraft/textures/block/_oaf/bamboo_stalk_end.png"],
            ["%assets/minecraft/textures/block/_oaf/cartography_table.png"],
            ["%assets/minecraft/textures/block/_oaf/crafter.png"],
            ["%assets/minecraft/textures/block/_oaf/invisible.png"],//used by item/generated
            ["%assets/minecraft/textures/block/_oaf/pointed_dripstone.png"],
            ["%webassets/core.js"],
            ["%webassets/guide.css"],
            ["%webassets/mc.ttf"]
        ])}
    </p></details>
`;
const guide_content=`
    ${banner}
    <h1>Local Oaf's 4×4 - Version ${current_version}</h1>
    <p>
        Please use OptiFine and have its settings set as follows:<br>
        <br>
        ${list2([
            ["Video Settings > Quality > Custom Entity Models : ON"],
            ["Video Settings > Quality > Custom Item Models : ON"]
        ])}
        <br>
        The latest version of OptiFine can be downloaded <a href = "https://optifine.net/downloads">here</a>.<br>
        The changelog can be viewed <a href = "_changelog.html#latest">here</a>.<br>
        The credits can be viewed <a href = "_credits.html#home">here</a>.<br>
        <br>
        <br>
        <span class = "smallText">
            This resource pack and its creator are in no way affiliated with 
            <a href="https://optifine.net/home/"class="greyLink">OptiFine</a>,
            <a href="https://www.microsoft.com/en-us/"class="greyLink">Microsoft®</a>, 
            <a href="https://www.minecraft.net/en-us/article/meet-mojang-studios/"class="greyLink">Mojang Studios™</a>, 
            <a href="https://www.minecraft.net/en-us/"class="greyLink">Minecraft®</a>, 
            <a href="https://www.curseforge.com/"class="greyLink">CurseForge®</a>, 
            or any employees/contractors of these organizations.
        </span>
    </p>
`;
const credits_content=`
    <h1>Local Oaf's 4×4 - Version ${current_version}</h1>
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
window.onload=function(){
    try{document.getElementById("changelog_content").innerHTML=`${changelog_content}`;}catch{console.log("no element named changelog_content found, skipping...");};
    try{document.getElementById("guide_content").innerHTML=`${guide_content}`;}catch{console.log("no element named guide_content found, skipping...");};
    try{document.getElementById("credits_content").innerHTML=`${credits_content}`;}catch{console.log("no element named credits_content found, skipping...");};
};