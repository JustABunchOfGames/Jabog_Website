class Section{
    constructor(menuId, maxId){
        this.menuId = menuId;
        this.maxId = maxId;
        this.sectionId = 0;
    }

    setNextId(){
        this.sectionId == this.maxId ? this.sectionId = 0 : this.sectionId++;
    }

    setPreviousId(){
        this.sectionId == 0 ? this.sectionId = this.maxId : this.sectionId--;
    }
}

/* ------------------------------------------------- */
// global variable, instantiate object
unityMenu = new Section("unity",1);
unrealMenu = new Section("unreal",0);
webMenu = new Section("web",0);
contactsMenu = new Section("contacts",0);
menuTab = [unityMenu, unrealMenu, webMenu, contactsMenu];
currentMenuIndex = 0;

/* ------------------------------------------------- */
// global function
function changeMenu(menuIndex){
    if (menuTab[menuIndex].maxId == 0){
        // Hide buttons, no need for section navigation

    }
    else{
        // Show buttons, needed for section navigation

    }

    // current menu & index -> new menu & first index
    menuTab[menuIndex].sectionId = 0;
    changeSection(
        currentMenuIndex, menuTab[currentMenuIndex].sectionId,
        menuIndex, menuTab[menuIndex].sectionId);
}

function changeSection(menuToHide, sectionToHide, menuToShow, sectionToShow){
    
    hideSection(menuToHide, sectionToHide);
    showSection(menuToShow, sectionToShow);

    currentMenuIndex = menuToShow;
}

function hideSection(menuIndex, sectionId){
    document.getElementById(menuTab[menuIndex].menuId + sectionId).style.display = "none";
}

function showSection(menuIndex, sectionId){
    document.getElementById(menuTab[menuIndex].menuId + sectionId).style.display = "block";
}

function previousSection(){
    // Save current section
    section = menuTab[currentMenuIndex];

    // Get current and previous Id
    oldId = section.sectionId;
    section.setPreviousId();
    newId = section.sectionId;

    // Change it
    changeSection(currentMenuIndex, oldId, currentMenuIndex, newId);
}

function nextSection(){

    // Save current section
    section = menuTab[currentMenuIndex];

    // Get current and next Id
    oldId = section.sectionId;
    section.setNextId();
    newId = section.sectionId;

    // Change it
    changeSection(currentMenuIndex, oldId, currentMenuIndex, newId);
}

/* ------------------------------------------------- */
// button links
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("left-button").addEventListener("click",previousSection);
    document.getElementById("right-button").addEventListener("click",nextSection);
});