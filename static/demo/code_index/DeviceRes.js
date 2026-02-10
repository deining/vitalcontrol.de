/*******************************************************************************
*
* V I T A L C O N T R O L    D E M O N S T R A T I O N    A P P
*
*                                             specification: Urban GmbH & Co. KG
*                                         programming: Tara Systems GmbH, Munich
*
********************************************************************************
*
* Urban VitalControl is a novel equipment for digital health control of farm
* animals suitable for a variety of documentation and monitoring tasks.
*
* The device combines an RFID reader for animal transponders with a rectal
* fever thermometer. Data transfer and exchange is possible via USB, WiFi
* or bluetooth
*
* VitalControl device is developed and distributed by Urban GmbH & Co.KG:
* https://www.urbanonline.de
*
* For further information visit the product home page:
* https://www.vitalcontrol.de
*
* This file is part of demonstration application developed in order to be able
* to demonstrate the use of the device to both interested parties and 
* prospective customers.
*
* The demonstration application is browser based and can be run from inside any
*  WebGL enabled web browser (Firefox, Chrome, Edge, ...):
*
* Version  : 13.03
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.acj)throw new Error("The unit file 'DeviceRes.js' included twice!");index.
acj=(function(){var A=index;var C={};
var Cg="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E6="ERROR: Unhandled temperature unit: ";var Hr="ERROR: unhandled assessment.";
var I0="%H:%M";var Iv="Invalid month";var O8="%";var P_="Invalid format code";var
P$=" %Y";var CR="ERROR: Unhandled mass unit: ";
C.Bah={BAq:function(Eo,Rw){if((Rw>=A._GetAutoObject(A.Device.Helper).AC$(Eo))||(Rw<=
A._GetAutoObject(A.Device.Device).AcJ))return 1;else return 0;},BAp:function(Eo,
Rw){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rw,Eo);switch(NC){case 3:return A.
aaR(A.acf.AvA);case 2:return A.aaR(A.acf.Bj$);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.BkG);default:throw new Error(Cg+NC.toFixed());}},BAh:function(
Eo,Rw){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rw,Eo);switch(NC){case 3:
return A.jb.Gm;case 2:return A.jb.Ia;case 1:return A.jb.E1;case 0:return A.jb.Afv;
default:throw new Error(BD+NC.toFixed());}},AlM:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG4);case 1:return A.
acf.Bqu;default:A.ab5("%s%s",E6,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},BAi:function(Eo,Rw){var NC=A._GetAutoObject(A.Device.Converter
).Ajk(Rw,Eo);switch(NC){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cg+NC.toFixed());}},BAk:function(Eo,Rw){var NC=A._GetAutoObject(
A.Device.Converter).Ajk(Rw,Eo);switch(NC){case 3:return A.jb.Gm;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afv;default:throw new Error(BD+
NC.toFixed());}},BAl:function(Eo,Rw){var NC=A._GetAutoObject(A.Device.Converter).
Ajk(Rw,Eo);switch(NC){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cg+NC.toFixed());}},BAj:function(Eo,Rw
){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rw,Eo);switch(NC){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gm;default:throw new Error(Cg+NC.toFixed(
));}},_Init:function(aArg){this.__proto__=C.Bah;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.Bah._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5I={BdV:function(NA){var B4=
A.jb.Ri;switch(NA){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.Ia;break;case 1:B4=A.jb.
Gm;break;case 4:B4=A.jb.Afv;break;case 0:case 5:B4=A.jb.Ri;break;default:A.ab5("%s"
,Hr);}return B4;},Qr:function(NA){var B4=A.jb.Ri;switch(NA){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.Ia;break;case 1:B4=A.jb.Gm;break;case 0:case 5:B4=A.jb.CK;break;case
4:B4=A.jb.Afv;break;default:A.ab5("%s%e",Hr,NA);}return B4;},XG:function(NA){var
B4=A.jb.Text;switch(NA){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hr);}return B4;},_Init:function(aArg){this.
__proto__=C.A5I;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5I._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6p={MonthToString:null,Bjr:function(L_){if(!L_)return A.
jV;else{var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(L_);return Av.Format(A.aaR(
A.acf.Bjt));}},AjJ:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(A.Core.
Bq,0);Av.Initialize(L_);return Av.Format(A.aaR(A.acf.AgX));}},AC8:function(L_){if(
!L_)return A.jV;else{var Av=A._NewObject(A.Core.Bq,0);Av.Initialize(L_);return Av.
Format(A.aaR(A.acf.Bjs));}},A67:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(
A.Core.Bq,0);Av.Initialize(L_);return Av.Format(I0);}},AC9:function(A1B,A1j,Iy){
var B;var Dy=A._NewObject(A.Core.Bq,0);var Qo=A._NewObject(A.Core.Bq,0);var Bc$=
A1j<A1B;if(Bc$){Dy.Initialize(A1j);Qo.Initialize(A1B);}else{Dy.Initialize(A1B);Qo.
Initialize(A1j);}var ABP=0;var Apw=0;var Qm=0;Qm+=(Qo.GM-Dy.GM);if(Qm<0){switch(
Qo.Hl){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qm+=31;break;case 5:case
7:case 10:case 12:Qm+=30;break;case 3:if(this.Bkm(Qo.Year))Qm+=29;else Qm+=28;break;
default:A.ab5("%s%i",Iv,Qo.Hl);}Apw--;}Apw+=(Qo.Hl-Dy.Hl);if(Apw<0){Apw+=12;ABP--;
}ABP+=(Qo.Year-Dy.Year);if(Bc$){ABP=-ABP;Apw=-Apw;Qm=-Qm;}var index=Iy.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Bez=Iy.charCodeAt(index+1)||0;Iy=A.ab1(
Iy,index,2);switch(Bez){case 0x64:Iy=A.abU(Iy,Qm.toFixed(),index);break;case 0x6D:
Iy=A.abU(Iy,Apw.toFixed(),index);break;case 0x79:case 0x59:Iy=A.abU(Iy,ABP.toFixed(
),index);break;case 0x25:Iy=A.abU(Iy,O8,index);break;default:A.ab5("%s%s",P_,O8+
String.fromCharCode(Bez));}index=Iy.indexOf(String.fromCharCode(0x25),index+1);}
return Iy;},Bkm:function(Ac6){if(!(Ac6%4)&&!!(Ac6%100))return true;if(!(Ac6%400)
)return true;return false;},Bjn:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(
A.Core.Bq,0);Av.Initialize(L_);return this.MonthToString.BT(Av.Hl)+Av.Format(P$);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6p;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KQ={_Init:function(){C.A6p._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A8a={Af5:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAk);case 1:return A.aaR(A.acf.A72);default:A.ab5("%s%s",CR,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},BAg:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AL2
);case 1:return A.aaL(A.ach.AL1);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Az1:function(AoP,Eo){if(AoP<A._GetAutoObject(
A.Device.Helper).ADm(Eo))return A.jb.Gm;else if(AoP<A._GetAutoObject(A.Device.Helper
).ADl(Eo))return A.jb.Ia;else return A.jb.E1;},Az3:function(AoP,Eo){if(AoP<A._GetAutoObject(
A.Device.Helper).ADm(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADl(
Eo);return A.jb.Text;}},AaC:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.Bj0);case 1:return A.aaR(A.acf.BoP);default:
A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Az2:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},Bd6:function(Att,GB){var Ap$;if(((Att<10000)||((Att===10000
)&&(GB===5)))&&(A._GetAutoObject(A.Device.Device).OR===2))Ap$=10;else if(((Att<50000
)||((Att===50000)&&(GB===5)))&&!!A._GetAutoObject(A.Device.Device).OR)Ap$=100;else
if(((Att<100000)||((Att===100000)&&(GB===5)))&&!!A._GetAutoObject(A.Device.Device
).OR)Ap$=500;else Ap$=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap$=(Ap$/2)|0;break;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap$;},Bd0:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AD3);case 1:return A.aaL(A.
ach.AD4);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},AlA:function(Bcw,Byv,BxH){if(!Bcw)return 0;return Math.round((
BxH-Byv)/Bcw)|0;},_Init:function(aArg){this.__proto__=C.A8a;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DV={_Init:function(){C.A8a._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpU={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpV={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpW={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5T={ADd:function(AfJ
){var B;if(!!!(AfJ.length%2))return-1;var BgZ=0;var Bg0=0;var Ail;var O=0;for(;O<
AfJ.length;O++){Ail=A.wz(A.abW(AfJ,O,1),-1,10);if(Ail===-1)return-1;if(!!(O%2))BgZ+=
Ail;else Bg0+=Ail;}Ail=((3*Bg0)+BgZ)%10;if(!!Ail)Ail=10-Ail;return Ail;},AVW:function(
AfJ){if(!AfJ.length)return false;if(!!(AfJ.length%2))return false;return A.wz(A.
abW(AfJ,AfJ.length-1,1),-2,10)===this.ADd(A.abV(AfJ,AfJ.length-1));},_Init:function(
aArg){this.__proto__=C.A5T;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VM={_Init:function(){C.A5T._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KQ._this))B._ReInit(),C.KQ._ReInit.call(B);if((B=C.DV._this
))B._ReInit(),C.DV._ReInit.call(B);if((B=C.VM._this))B._ReInit(),C.VM._ReInit.call(
B);};C.DJ=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KQ._this)&&(B._cycle!=D))B._Done(C.KQ._this=null);if((B=C.DV.
_this)&&(B._cycle!=D))B._Done(C.DV._this=null);if((B=C.VM._this)&&(B._cycle!=D))
B._Done(C.VM._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */