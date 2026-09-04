function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pncaA8qD0q":
        Script1();
        break;
      case "6LovoqE2Ajr":
        Script2();
        break;
      case "5n4mJci0B2U":
        Script3();
        break;
      case "5peFZzF56X4":
        Script4();
        break;
      case "6YEMa4en8jo":
        Script5();
        break;
      case "6eHsr8BOc7n":
        Script6();
        break;
      case "6fGMNC8dhfB":
        Script7();
        break;
      case "60k38essxrR":
        Script8();
        break;
      case "65HlrKeHfD9":
        Script9();
        break;
      case "6RBqYShOqnh":
        Script10();
        break;
      case "6gmtG7T1qC2":
        Script11();
        break;
      case "6i1cTivLYZ3":
        Script12();
        break;
      case "63EhoDwNjlp":
        Script13();
        break;
      case "6gcXS7CZ0h8":
        Script14();
        break;
      case "618Mg5plxe2":
        Script15();
        break;
      case "60oE2dQY5ND":
        Script16();
        break;
      case "5Xmzd9rQkJP":
        Script17();
        break;
      case "6Ds0V8XUmkv":
        Script18();
        break;
      case "6GfGjKypGcb":
        Script19();
        break;
      case "5nxKy0WGApg":
        Script20();
        break;
      case "6T3wXdl3Mvy":
        Script21();
        break;
      case "68EGBolpbxH":
        Script22();
        break;
      case "5zFHjYFPABW":
        Script23();
        break;
      case "6gF1FZIt1iX":
        Script24();
        break;
      case "5sNJFMlCAmb":
        Script25();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5kxvDXWhOz3');
const duration = 500;
const easing = 'ease-out';
const id = '6Tdwb60QHjO';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6CcSpYIgTyG');
const duration = 500;
const easing = 'ease-out';
const id = '6WWHu9VumkM';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6O1zjeE6zFC');
const duration = 500;
const easing = 'ease-out';
const id = '6XeEwQGJjq8';
const shakeAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5nBEFsvFs74');
const duration = 2500;
const easing = 'ease-out';
const id = '5n0eA9PF4rv';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5nBEFsvFs74');
const duration = 2500;
const easing = 'ease-out';
const id = '6hbOxu9VdpV';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6AP7ew5nER1');
const duration = 2500;
const easing = 'ease-out';
const id = '6TWflztoXrW';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6AP7ew5nER1');
const duration = 2500;
const easing = 'ease-out';
const id = '6TKTbpSd7kE';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6kpmeKiS4uh');
const duration = 1000;
const easing = 'ease-out';
const id = '5skq9TKFE7g';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6kpmeKiS4uh');
const duration = 1000;
const easing = 'ease-out';
const id = '6pSF5V7pDeo';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5V1FDhnX0iO');
const duration = 1000;
const easing = 'ease-out';
const id = '6STdvw9XeCx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5V1FDhnX0iO');
const duration = 1000;
const easing = 'ease-out';
const id = '5i7e7uT0tmp';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5V1FDhnX0iO');
const duration = 1000;
const easing = 'ease-out';
const id = '5Z6PzPWdcNg';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5fgvAlLgqhk');
const duration = 750;
const easing = 'ease-out';
const id = '5oYAFwFpPKH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5fgvAlLgqhk');
const duration = 1000;
const easing = 'ease-out';
const id = '6EFuEtZlAYn';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5yTr2eHiTAa');
const duration = 7750;
const easing = 'ease-in-out';
const id = '6Z90qi35eLr';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
