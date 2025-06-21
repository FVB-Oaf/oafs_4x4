const current_version=`1.0.10.0`;
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
    <details><summary><h2>b1.0.0.0 (June 21<sup>st</sup>, 2025)</h2></summary><p>
        ${list2([
            "Added/Modified files:",
            ["%_changelog.html"],
            ["%_credits.html"],
            ["%_guide.html"],
            ["%pack.mcmeta"],
            ["%assets/minecraft/textures/entity/beacon_beam.png"],
            ["%assets/minecraft/textures/entity/end_gateway_beam.png"],
            ["%assets/minecraft/textures/entity/end_portal.png"],
            ["%assets/minecraft/textures/environment/end_sky.png"],
            ["%assets/minecraft/textures/environment/moon_phases.png"],
            ["%assets/minecraft/textures/environment/rain.png"],
            ["%assets/minecraft/textures/environment/snow.png"],
            ["%assets/minecraft/textures/environment/sun.png"],
            ["%assets/minecraft/textures/gui/accessibility.png"],
            ["%assets/minecraft/textures/gui/checkbox.png"],
            ["%assets/minecraft/textures/gui/footer_seperator.png"],
            ["%assets/minecraft/textures/gui/header_seperator.png"],
            ["%assets/minecraft/textures/gui/info_icon.png"],
            ["%assets/minecraft/textures/gui/inworld_footer_seperator.png"],
            ["%assets/minecraft/textures/gui/light_dirt_background.png"],
            ["%assets/minecraft/textures/gui/options_background.png"],
            ["%assets/minecraft/textures/gui/report_button.png"],
            ["%assets/minecraft/textures/gui/slider.png"],
            ["%assets/minecraft/textures/gui/presets/isles.png"],
            ["%assets/minecraft/textures/gui/realms/adventure.png"],
            ["%assets/minecraft/textures/gui/realms/empty_frame.png"],
            ["%assets/minecraft/textures/gui/realms/experience.png"],
            ["%assets/minecraft/textures/gui/realms/inspiration.png"],
            ["%assets/minecraft/textures/gui/realms/new_world.png"],
            ["%assets/minecraft/textures/gui/realms/no_realms.png"],
            ["%assets/minecraft/textures/gui/realms/snapshot_realms.png"],
            ["%assets/minecraft/textures/gui/realms/survival_spawn.png"],
            ["%assets/minecraft/textures/gui/realms/upload.png"],
            ["%assets/minecraft/textures/gui/sprites/container/slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/slot_highlight_back.png"],
            ["%assets/minecraft/textures/gui/sprites/container/slot_highlight_back.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/container/slot_highlight_front.png"],
            ["%assets/minecraft/textures/gui/sprites/container/slot_highlight_front.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/container/anvil/error.png"],
            ["%assets/minecraft/textures/gui/sprites/container/anvil/text_field.png"],
            ["%assets/minecraft/textures/gui/sprites/container/anvil/text_field_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/container/beacon/button.png"],
            ["%assets/minecraft/textures/gui/sprites/container/beacon/button_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/container/beacon/button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/container/beacon/button_selected.png"],
            ["%assets/minecraft/textures/gui/sprites/container/blast_furnace/burn_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/blast_furnace/lit_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/brewing_stand/brew_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/brewing_stand/bubbles.png"],
            ["%assets/minecraft/textures/gui/sprites/container/brewing_stand/fuel_length.png"],
            ["%assets/minecraft/textures/gui/sprites/container/bundle/background.png"],
            ["%assets/minecraft/textures/gui/sprites/container/bundle/background.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/container/bundle/blocked_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/bundle/slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/cartography_table/error.png"],
            ["%assets/minecraft/textures/gui/sprites/container/crafter/disabled_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/enchanting_table/enchantment_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/enchanting_table/enchantment_slot_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/container/enchanting_table/enchantment_slot_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/container/furnace/burn_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/furnace/lit_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/grindstone/error.png"],
            ["%assets/minecraft/textures/gui/sprites/container/horse/armor_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/horse/chest_slots.png"],
            ["%assets/minecraft/textures/gui/sprites/container/horse/llama_armor_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/horse/saddle_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/banner_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/dye_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/error.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/pattern.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/pattern_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/pattern_selected.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/pattern_slot.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/scroller.png"],
            ["%assets/minecraft/textures/gui/sprites/container/loom/scroller_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/container/smithing/error.png"],
            ["%assets/minecraft/textures/gui/sprites/container/smoker/burn_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/smoker/lit_progress.png"],
            ["%assets/minecraft/textures/gui/sprites/container/stonecutter/recipe.png"],
            ["%assets/minecraft/textures/gui/sprites/container/stonecutter/recipe_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/container/stonecutter/recipe_selected.png"],
            ["%assets/minecraft/textures/gui/sprites/container/stonecutter/scroller.png"],
            ["%assets/minecraft/textures/gui/sprites/container/stonecutter/scroller_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/popup/background.png"],
            ["%assets/minecraft/textures/gui/sprites/popup/background.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/realm_status/closed.png"],
            ["%assets/minecraft/textures/gui/sprites/realm_status/expired.png"],
            ["%assets/minecraft/textures/gui/sprites/realm_status/expires_soon.png"],
            ["%assets/minecraft/textures/gui/sprites/realm_status/expires_soon.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/realm_status/open.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/background.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/background.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/mute_button.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/mute_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/report_button.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/report_button_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/report_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/unmute_button.png"],
            ["%assets/minecraft/textures/gui/sprites/social_interactions/unmute_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/advancement.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/movement_keys.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/recipe.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/system.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tutorial.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/wooden_planks.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/button.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/button.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/button_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/button_disabled.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/button_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/checkbox.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/checkbox_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/checkbox_selected.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/checkbox_selected_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/cross_button.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/cross_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/locked_button.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/locked_button_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/locked_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/scroller.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/scroller.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/scroller_background.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/scroller_background.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_handle.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_handle.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_handle_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_handle_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/slider_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/slot_frame.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_selected.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_selected.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_selected_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/tab_selected_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/text_field.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/text_field.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/text_field_highlighted.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/text_field_highlighted.png.mcmeta"],
            ["%assets/minecraft/textures/gui/sprites/toast/unlocked_button.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/unlocked_button_disabled.png"],
            ["%assets/minecraft/textures/gui/sprites/toast/unlocked_button_highlighted.png"],
            ["%assets/minecraft/textures/gui/title/edition.png"],
            ["%assets/minecraft/textures/gui/title/edition.png.mcmeta"],
            ["%assets/minecraft/textures/gui/title/minceraft.png"],
            ["%assets/minecraft/textures/gui/title/minceraft.png.mcmeta"],
            ["%assets/minecraft/textures/gui/title/minecraft.png"],
            ["%assets/minecraft/textures/gui/title/minecraft.png.mcmeta"],
            ["%assets/minecraft/textures/gui/title/mojangstudios.png"],
            ["%assets/minecraft/textures/gui/title/mojangstudios.png.mcmeta"],
            ["%assets/minecraft/textures/gui/title/realms.png"],
            ["%assets/minecraft/textures/gui/title/realms.png.mcmeta"],
            ["%assets/minecraft/textures/gui/title/background/panorama_0.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_1.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_2.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_3.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_4.png"],
            ["%assets/minecraft/textures/gui/title/background/panorama_5.png"],
            ["%assets/minecraft/textures/misc/credits_vignette.png"], // 16:9 so the pixels aren't visibly stretched
            ["%assets/minecraft/textures/misc/credits_vignette.png.mcmeta"],
            ["%assets/minecraft/textures/misc/enchanted_glint_entity.png"],
            ["%assets/minecraft/textures/misc/enchanted_glint_item.png"],
            ["%assets/minecraft/textures/misc/enchanted_glint_item.png.mcmeta"],
            ["%assets/minecraft/textures/misc/forcefield.png"],
            ["%assets/minecraft/textures/misc/nausea.png"], // 16:9 so the pixels aren't visibly stretched
            ["%assets/minecraft/textures/misc/nausea.png.mcmeta"],
            ["%assets/minecraft/textures/misc/powder_snow_outline.png"], // 16:9 so the pixels aren't visibly stretched
            ["%assets/minecraft/textures/misc/pumpkinblur.png"], // 16:9 so the pixels aren't visibly stretched
            ["%assets/minecraft/textures/misc/pumpkinblur.png.mcmeta"],
            ["%assets/minecraft/textures/misc/shadow.png"],
            ["%assets/minecraft/textures/misc/shadow.png.mcmeta"],
            ["%assets/minecraft/textures/misc/spyglass_scope.png"],
            ["%assets/minecraft/textures/misc/underwater.png"],
            ["%assets/minecraft/textures/misc/unknown_pack.png"],
            ["%assets/minecraft/textures/misc/unknown_server.png"],
            ["%assets/minecraft/textures/misc/vignette.png"], // 16:9 so the pixels aren't visibly stretched
            ["%assets/minecraft/textures/misc/vignette.png.mcmeta"],
            ["%webassets/core.js"],
            ["%webassets/guide.css"],
            ["%webassets/mc.ttf"]
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