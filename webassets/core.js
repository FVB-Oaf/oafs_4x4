const version = `b1.0.0.0`;
const banner = `<img src = "webassets/banner.png" class = "banner" alt = "banner wasn't able to render :&lpar;" /`;
function list2(functionInput2){
    let temp = [""];
    for(var cur in functionInput2){
        temp2 = typeof(functionInput2[cur])
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
