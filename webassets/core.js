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
    <h1>Local Oaf's 4&times;4 - Version ${current_version}</h1>
    <details><summary><h2>b1.0.0.0 (July 5<sup>th</sup>, 2025)</h2></summary><p>
        MAIN FOCUS: OPTIMIZATION & BLOCK RENDERING<br><br>
        ${list2([
            "Added/Modified files:",
            ["%_changelog.html"],
            ["%_credits.html"],
            ["%_guide.html"],
            ["%manifest.json"],
            ["%pack.mcmeta"],
            ["%assets/minecraft/item/clock.json"],
            ["%assets/minecraft/models/block/beacon.json"],
            ["%assets/minecraft/models/block/cake.json"],
            ["%assets/minecraft/models/block/cake_slice1.json"],
            ["%assets/minecraft/models/block/cake_slice2.json"],
            ["%assets/minecraft/models/block/cake_slice3.json"],
            ["%assets/minecraft/models/block/cake_slice4.json"],
            ["%assets/minecraft/models/block/cake_slice5.json"],
            ["%assets/minecraft/models/block/cake_slice6.json"],
            ["%assets/minecraft/models/block/campfire_off.json"],
            ["%assets/minecraft/models/block/crop.json"],
            ["%assets/minecraft/models/block/fence_inventory.json"],
            ["%assets/minecraft/models/block/fence_post.json"],
            ["%assets/minecraft/models/block/fence_side.json"],
            ["%assets/minecraft/models/block/template_anvil.json"],
            ["%assets/minecraft/models/block/template_campfire.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_bottom_left.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_bottom_mid.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_bottom_right.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_top_left.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_top_mid.json"],
            ["%assets/minecraft/models/block/template_chiseled_bookshelf_slot_top_right.json"],
            ["%assets/minecraft/models/block/template_farmland.json"],
            ["%assets/minecraft/models/block/template_fence_gate.json"],
            ["%assets/minecraft/models/block/template_fence_gate_open.json"],
            ["%assets/minecraft/models/block/template_fence_gate_wall.json"],
            ["%assets/minecraft/models/block/template_fence_gate_wall_open.json"],
            ["%assets/minecraft/models/block/template_glass_pane_noside.json"],
            ["%assets/minecraft/models/block/template_glass_pane_noside_alt.json"],
            ["%assets/minecraft/models/block/template_glass_pane_post.json"],
            ["%assets/minecraft/models/block/template_glass_pane_side.json"],
            ["%assets/minecraft/models/block/template_glass_pane_side_alt.json"],
            ["%assets/minecraft/models/block/template_wall_side.json"],
            ["%assets/minecraft/models/block/template_wall_side_tall.json"],
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
            ["%assets/minecraft/textures/block/beacon.png"],
            ["%assets/minecraft/textures/block/cake_bottom.png"],
            ["%assets/minecraft/textures/block/cake_side.png"],
            ["%assets/minecraft/textures/block/cake_top.png"],
            ["%assets/minecraft/textures/block/campfire_log.png"],
            ["%assets/minecraft/textures/block/campfire_log_lit.png"],
            ["%assets/minecraft/textures/block/campfire_log_lit.png.mcmeta"],
            ["%assets/minecraft/textures/block/glass.png"],
            ["%assets/minecraft/textures/block/obsidian.png"],
            ["%assets/minecraft/textures/block/_oaf/null.png"],
            ["%assets/minecraft/textures/gui/accessibility.png"],
            ["%assets/minecraft/textures/gui/checkbox.png"],
            ["%assets/minecraft/textures/gui/info_icon.png"],
            ["%assets/minecraft/textures/gui/light_dirt_background.png"],
            ["%assets/minecraft/textures/gui/options_background.png"],
            ["%assets/minecraft/textures/gui/report_button.png"],
            ["%assets/minecraft/textures/gui/slider.png"],
            ["%assets/minecraft/textures/gui/stream_indicator.png"],
            ["%assets/minecraft/textures/gui/toasts.png"],
            ["%assets/minecraft/textures/gui/presets/isles.png"],
            ["%assets/minecraft/textures/gui/realms/adventure.png"],
            ["%assets/minecraft/textures/gui/realms/empty_frame.png"],
            ["%assets/minecraft/textures/gui/realms/experience.png"],
            ["%assets/minecraft/textures/gui/realms/inspiration.png"],
            ["%assets/minecraft/textures/gui/realms/new_world.png"],
            ["%assets/minecraft/textures/gui/realms/survival_spawn.png"],
            ["%assets/minecraft/textures/gui/realms/upload.png"],
            ["%assets/minecraft/textures/gui/title/edition.png"],
            ["%assets/minecraft/textures/gui/title/minecraft.png"],
            ["%assets/minecraft/textures/gui/title/mojangstudios.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_0.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_1.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_2.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_3.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_4.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_5.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_overlay.png"],
            ["%assets/minecraft/textures/item/_oaf/null.png"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/edition.png"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/edition.png.mcmeta"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/minceraft.png"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/minceraft.png.mcmeta"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/minecraft.png"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/minecraft.png.mcmeta"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/realms.png"],
            ["%overlay_1_20_0/assets/minecraft/textures/gui/title/realms.png.mcmeta"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_0.png"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_1.png"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_2.png"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_3.png"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_4.png"],
            ["%overlay_1_21_4/assets/minecraft/textures/gui/title/background/panorama_5.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_0.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_1.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_2.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_3.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_4.png"],
            ["%overlay_1_21_6/assets/minecraft/textures/gui/title/background/panorama_5.png"],
            ["%webassets/_.bin"],
            ["%webassets/core.js"],
            ["%webassets/guide.css"],
            ["%webassets/mc.ttf"],
        ])}
    </p></details>
`;
const guide_content = `
    ${banner}
    <h1>Local Oaf's 4&times;4 - Version ${current_version}</h1>
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
            <a href = "https://optifine.net/home/" class = "greyLink">OptiFine</a>,
            <a href = "https://www.microsoft.com/en-us/" class = "greyLink">Microsoft&reg;</a>, 
            <a href = "https://www.minecraft.net/en-us/article/meet-mojang-studios/" class = "greyLink">Mojang Studios&trade;</a>, 
            <a href = "https://www.minecraft.net/en-us/" class = "greyLink">Minecraft&reg;</a>, 
            <a href = "https://www.curseforge.com/" class = "greyLink">CurseForge&reg;</a>, 
            or any employees/contractors of these organizations.
        </span>
    </p>
`;
const credits_content = `
    <h1>Local Oaf's 4&times;4 - Version ${current_version}</h1>
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