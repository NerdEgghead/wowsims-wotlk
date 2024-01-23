import{A as e,aB as t,aC as a,e4 as s,L as l,h as i,j as n,f9 as d,E as o,cd as p,cg as r,ci as c,az as S,bl as m,B as I,aA as f,a0 as h,F as u,bb as g,w as P,S as w,a$ as O,g as T,t as y,aP as v,bA as A}from"./detailed_results-2578d4ef.chunk.js";import{m as b,b as F,c as R,r as k,T as C,I as j}from"./preset_utils-43607ef6.chunk.js";import{i as H,j as W,P as B}from"./presets-679f3000.chunk.js";const E=b({fieldName:"powerInfusionTarget",id:e.fromSpellId(10060),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getSpecOptions().powerInfusionTarget?.type==t.Player,setValue:(e,s,l)=>{const i=s.getSpecOptions();i.powerInfusionTarget=a.create({type:l?t.Player:t.Unknown,index:0}),s.setSpecOptions(e,i)}}),G=b({fieldName:"useInnerFire",id:e.fromSpellId(48168)}),M=b({fieldName:"useShadowfiend",id:e.fromSpellId(34433)}),x={items:[{id:40562,enchant:3820,gems:[41333,42144]},{id:44661,gems:[39998]},{id:40459,enchant:3810,gems:[42144]},{id:44005,enchant:3859,gems:[42144]},{id:40234,enchant:1144,gems:[39998,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40454,enchant:3604,gems:[40049,0]},{id:40561,enchant:3601,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:3826},{id:40719},{id:40399},{id:40255},{id:40432},{id:40395,enchant:3834},{id:40273},{id:39712}]},D={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:48135}}},{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:48123}}},rhs:{dotRemainingTime:{spellId:{spellId:48135}}}}}]}},castSpell:{spellId:{spellId:14751}}}},{action:{condition:{and:{vals:[{dotIsActive:{spellId:{spellId:48135}}},{cmp:{op:"OpLe",lhs:{spellCastTime:{spellId:{spellId:48123}}},rhs:{dotRemainingTime:{spellId:{spellId:48135}}}}}]}},castSpell:{spellId:{spellId:48123}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48300}}}}},castSpell:{spellId:{spellId:48300}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:48125}}}}},castSpell:{spellId:{spellId:48125}}}},{action:{castSpell:{spellId:{spellId:48135}}}},{action:{condition:{and:{vals:[{not:{val:{spellIsReady:{spellId:{spellId:48135}}}}},{cmp:{op:"OpLe",lhs:{spellTimeToReady:{spellId:{spellId:48135}}},rhs:{const:{val:"50ms"}}}}]}},wait:{duration:{spellTimeToReady:{spellId:{spellId:48135}}}}}},{hide:!0,action:{condition:{auraIsActive:{auraId:{spellId:59e3}}},castSpell:{spellId:{spellId:48123}}}},{hide:!0,action:{castSpell:{spellId:{spellId:53007}}}},{hide:!0,action:{castSpell:{spellId:{spellId:48158}}}},{hide:!0,action:{castSpell:{spellId:{spellId:48127}}}},{hide:!0,action:{castSpell:{spellId:{tag:3,spellId:48156}}}},{action:{castSpell:{spellId:{spellId:48123}}}}]},L=F("Preraid Preset",{items:[{id:42553,enchant:3820,gems:[41333,40014]},{id:40680},{id:34210,enchant:3810,gems:[42144,40014]},{id:41610,enchant:3859},{id:43792,enchant:1144,gems:[42144,40049]},{id:37361,enchant:2332,gems:[0]},{id:39285,enchant:3246,gems:[40014,0]},{id:40696,gems:[40049,39998]},{id:37854,enchant:3719},{id:44202,enchant:3826,gems:[40026]},{id:43253,gems:[42144]},{id:39250},{id:37835},{id:37873},{id:41384,enchant:3834},{id:40698},{id:37177}]}),U=F("P1 Preset",x),N=R("Default",D),V={name:"Standard",data:s.create({talentsString:"05332031013005023310001-005551002020152-00502",glyphs:l.create({major1:i.GlyphOfSmite,major2:i.GlyphOfShadowWordPain,major3:i.GlyphOfShadowWordDeath,minor1:n.GlyphOfFortitude,minor2:n.GlyphOfShadowfiend,minor3:n.GlyphOfFading})})},_=d.create({useInnerFire:!0,useShadowfiend:!0,powerInfusionTarget:a.create()}),z=o.create({flask:p.FlaskOfTheFrostWyrm,food:r.FoodFishFeast,defaultPotion:c.RunicManaInjector,prepopPotion:c.PotionOfWildMagic}),K=S.create({giftOfTheWild:m.TristateEffectImproved,arcaneBrilliance:!0,divineSpirit:!0,totemOfWrath:!0,moonkinAura:m.TristateEffectImproved,wrathOfAirTotem:!0,sanctifiedRetribution:!0,bloodlust:!0}),$=I.create({blessingOfKings:!0,blessingOfWisdom:m.TristateEffectImproved,blessingOfMight:m.TristateEffectImproved,vampiricTouch:!0}),q=f.create({faerieFire:m.TristateEffectImproved,ebonPlaguebringer:!0,heartOfTheCrusader:!0,judgementOfWisdom:!0}),J=k(w.SpecSmitePriest,{cssClass:"smite-priest-sim-ui",cssScheme:"priest",knownIssues:[],epStats:[h.StatIntellect,h.StatSpirit,h.StatSpellPower,h.StatSpellHit,h.StatSpellCrit,h.StatSpellHaste,h.StatMP5],epReferenceStat:h.StatSpellPower,displayStats:[h.StatHealth,h.StatStamina,h.StatIntellect,h.StatSpirit,h.StatSpellPower,h.StatSpellHit,h.StatSpellCrit,h.StatSpellHaste,h.StatMP5],modifyDisplayStats:e=>{let t=new u;return t=t.addStat(h.StatSpellHit,1*e.getTalents().shadowFocus*g),{talents:t}},defaults:{gear:U.gear,epWeights:u.fromMap({[h.StatIntellect]:.38,[h.StatSpirit]:.38,[h.StatSpellPower]:1,[h.StatSpellHit]:1.65,[h.StatSpellCrit]:.32,[h.StatSpellHaste]:.78,[h.StatMP5]:.35}),consumes:z,talents:V.data,specOptions:_,raidBuffs:K,partyBuffs:P.create({}),individualBuffs:$,debuffs:q},playerIconInputs:[E,G,M],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[C]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[V],rotations:[N],gear:[L,U]},autoRotation:e=>N.rotation.rotation,raidSimPresets:[{spec:w.SpecSmitePriest,tooltip:O[w.SpecSmitePriest],defaultName:"Smite",iconUrl:T(y.ClassPriest,3),talents:V.data,specOptions:_,consumes:z,defaultFactionRaces:{[v.Unknown]:A.RaceUnknown,[v.Alliance]:A.RaceDwarf,[v.Horde]:A.RaceUndead},defaultGear:{[v.Unknown]:{},[v.Alliance]:{1:U.gear,2:H.gear,3:W.gear,4:B.gear},[v.Horde]:{1:U.gear,2:H.gear,3:W.gear,4:B.gear}}}]});class Q extends j{constructor(e,t){super(e,t,J)}}export{Q as S};
//# sourceMappingURL=sim-e6bd500a.chunk.js.map
