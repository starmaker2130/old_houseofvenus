/*
*
*   -----------------------------------------------------------------------------------------------------------
*                                               LEDGERSPACE
*   -----------------------------------------------------------------------------------------------------------
*
*/

var WholeFoods = new TreeHouse();

WholeFoods.buildLedger('4467 Technology Drive', {video: true, audio: false, frame: 'dynamic', custom: 'ecommerce'});
WholeFoods.loadInventory({
    name: 'Whole Foods',
    inventory: {
        juice: {
            price: 8.99
        },
        cereal: {
            price: 4.99
        },
        kola: {
            price: 2.49
        },
        water: {
            price: 8.99
        },
        flour: {
            price: 4.99
        },
        sugar: {
            price: 2.49
        },
        lasagna: {
            price: 8.99
        },
        'toilet paper': {
            price: 4.99
        },
        salmon: {
            price: 2.49
        },
        lasagna: {
            price: 8.99
        },
        fries: {
            price: 4.99
        },
        bread: {
            price: 2.49
        },
    },
    location: 'Silver Spring'
});

/*
*
*   -----------------------------------------------------------------------------------------------------------
*                                                  TERMS
*   -----------------------------------------------------------------------------------------------------------
*
*/
//var joystick = new XRJoystick('dynamic','#anchor', 'red')
var settingsPanels = [];

settingsPanels.push(new XRPanel('XRSettingsPanel0', {name: 'background0', src: '../media/img/card.gif', gif: true}));
settingsPanels.push(new XRPanel('XRSettingsPanel1', {name: 'background1', src: '../media/img/catchabutter.gif', gif: true}));
settingsPanels.push(new XRPanel('XRSettingsPanel2', {name: 'background2', src: '../media/img/daynight.gif', gif: true}));
settingsPanels.push(new XRPanel('XRSettingsPanel3', {name: 'background3', src: '../media/img/flashydazzle.gif', gif: true}));
settingsPanels.push(new XRPanel('XRSettingsPanel4', {name: 'background3', src: '../media/img/settings.gif', gif: true}));

settingsPanels[0].scale(4.5, 2.5);
settingsPanels[1].scale(4.5, 2.5);
settingsPanels[2].scale(2, 2.5);
settingsPanels[3].scale(2, 2.5);
settingsPanels[4].scale(4, 2.5);

settingsPanels[0].setRotation('30 0 0');
settingsPanels[1].setRotation('30 0 0');
settingsPanels[2].setRotation('30 0 0');
settingsPanels[3].setRotation('30 0 0');
settingsPanels[4].setRotation('30 0 0');

var cARd = new XREnvironment(5, 5, 5, {time: 5, bottomless: true}); // smart conrtact for a hyperreality space containing store experience



var map = new XRMap('amazon', 16);

var mainMenuButton = new XRMenuButton('WholeFoodsMain');
mainMenuButton.animate('rotation', {dur: 25000, from: '0 0 0', to: '0 360 0', easing: 'linear', loop: true});
mainMenuButton.linkTo('https://www.wholefoods.com');

var directionsButton = new XRMenuButton('Directions');
directionsButton.animate('rotation', {dur: 30000, from: '-90 45 0', to: '-90 405 0', easing: 'linear', loop: true});
directionsButton.linkTo({type: 'xrcontent', target: 'method', method: function(){ map.showPath({x: 2, y: 5}, {x: 7, y: 14}); map.stream();}});

var cartButton = new XRMenuButton('cARt');
cartButton.animate('rotation', {dur: 30000, from: '-90 45 0', to: '-90 405 0', easing: 'linear', loop: true});
cartButton.linkTo({type: 'xrcontent', target: 'method', method: function(){
    var view = document.querySelector('#main-flat-application-view');
    view.style.display = 'block';

    var startTime = Date.now();

    let timer = setInterval(function(){
        let timeElapsed = Date.now() - startTime;

        if(timeElapsed>=1000){
            view.style.height = '100%';
            view.style.opacity = 1.0;
            clearInterval(timer);

            return;
        }

        //console.log(timeElapsed/5000);
        view.style.height = timeElapsed/10 + '%';
        view.style.opacity = timeElapsed/1000 + '';
    }, 10);

}});

var settingsButton = new XRMenuButton('Settings');
settingsButton.animate('rotation', {dur: 30000, from: '-90 45 0', to: '-90 405 0', easing: 'linear', loop: true});
settingsButton.linkTo({type: 'xrcontent', target: 'method', method: function(){ console.log('toggle xr panel for user settings')}});

mainMenuButton.addTexture({name: 'wholefoods', src: '../media/texture/whole-foods-icon.png'});
directionsButton.addTexture({name: 'directions', src: '../media/texture/map-icon.png'});
cartButton.addTexture({name: 'cart', src: '../media/texture/cart-icon.png'});
settingsButton.addTexture({name: 'settings', src: '../media/texture/settings-icon.png'});

const buttonSize = 0.18;

mainMenuButton.scale(1);
directionsButton.scale(buttonSize);
cartButton.scale(buttonSize);
settingsButton.scale(buttonSize);

cARd.add(mainMenuButton, '0 1 -1');
cARd.add(directionsButton, '0.75 0.5 2.2');
cARd.add(cartButton, '0 0.5 2');
cARd.add(settingsButton, '-0.75 0.5 2.2');
cARd.add(map);

cARd.add(settingsPanels[0], '0 3.5 -3');
cARd.add(settingsPanels[1], '-4.75 3.5 -3');
cARd.add(settingsPanels[2], '3.5 3.5 -3');
cARd.add(settingsPanels[3], '6 3.5 -3');
cARd.add(settingsPanels[4], '-9 3.5 -3');
//map.showPath({x: 2, y: 5}, {x: 7, y: 14});


//other potential usage --> map.showPath(start, end).stream();
/*
*
*   -----------------------------------------------------------------------------------------------------------
*                                         SIGNATURE - LOAD CONTRACT
*   -----------------------------------------------------------------------------------------------------------
*
*/

WholeFoods.loadExperience(cARd);