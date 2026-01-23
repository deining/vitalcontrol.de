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
var Cf="Unhandled enum BodyTemperature: ";var BD="Unhandled BodyTemperatureValue: ";
var E6="ERROR: Unhandled temperature unit: ";var Hq="ERROR: unhandled assessment.";
var I0="%H:%M";var Iv="Invalid month";var O9="%";var P_="Invalid format code";var
P$=" %Y";var CR="ERROR: Unhandled mass unit: ";
C.A$7={Bz$:function(Eo,Rv){if((Rv>=A._GetAutoObject(A.Device.Helper).AC9(Eo))||(Rv<=
A._GetAutoObject(A.Device.Device).AcF))return 1;else return 0;},Bz_:function(Eo,
Rv){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rv,Eo);switch(NC){case 3:return A.
aaR(A.acf.Avw);case 2:return A.aaR(A.acf.Bj1);case 1:return A.aaR(A.acf.Normal);
case 0:return A.aaR(A.acf.Bkw);default:throw new Error(Cf+NC.toFixed());}},Bz2:function(
Eo,Rv){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rv,Eo);switch(NC){case 3:
return A.jb.Gk;case 2:return A.jb.Ia;case 1:return A.jb.E1;case 0:return A.jb.Afu;
default:throw new Error(BD+NC.toFixed());}},AlL:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaR(A.acf.AG3);case 1:return A.
acf.Bqk;default:A.ab5("%s%s",E6,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return A.jV;},Bz3:function(Eo,Rv){var NC=A._GetAutoObject(A.Device.Converter
).Ajk(Rv,Eo);switch(NC){case 2:return A.jb.Text;case 3:case 1:case 0:return A.jb.
Bm;default:throw new Error(Cf+NC.toFixed());}},Bz5:function(Eo,Rv){var NC=A._GetAutoObject(
A.Device.Converter).Ajk(Rv,Eo);switch(NC){case 3:return A.jb.Gk;case 2:return A.
jb.Text;case 1:return A.jb.E1;case 0:return A.jb.Afu;default:throw new Error(BD+
NC.toFixed());}},Bz6:function(Eo,Rv){var NC=A._GetAutoObject(A.Device.Converter).
Ajk(Rv,Eo);switch(NC){case 3:return 16711680;case 2:return 16776960;case 1:return 65280;
case 0:return 255;default:throw new Error(Cf+NC.toFixed());}},Bz4:function(Eo,Rv
){var NC=A._GetAutoObject(A.Device.Converter).Ajk(Rv,Eo);switch(NC){case 3:return A.
jb.Bm;case 2:case 1:case 0:return A.jb.Gk;default:throw new Error(Cf+NC.toFixed(
));}},_Init:function(aArg){this.__proto__=C.A$7;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::TemperatureClass"
};C.Temperature={_Init:function(){C.A$7._Init.call(this,0);},_ReInit:function(){
},_variants:function(){return this;},_this:null};C.A5z={BdK:function(NA){var B4=
A.jb.Ri;switch(NA){case 3:B4=A.jb.E1;break;case 2:B4=A.jb.Ia;break;case 1:B4=A.jb.
Gk;break;case 4:B4=A.jb.Afu;break;case 0:case 5:B4=A.jb.Ri;break;default:A.ab5("%s"
,Hq);}return B4;},Qr:function(NA){var B4=A.jb.Ri;switch(NA){case 3:B4=A.jb.E1;break;
case 2:B4=A.jb.Ia;break;case 1:B4=A.jb.Gk;break;case 0:case 5:B4=A.jb.CJ;break;case
4:B4=A.jb.Afu;break;default:A.ab5("%s%e",Hq,NA);}return B4;},XD:function(NA){var
B4=A.jb.Text;switch(NA){case 3:case 1:B4=A.jb.Bm;break;case 2:case 0:case 4:case
5:B4=A.jb.Text;break;default:A.ab5("%s",Hq);}return B4;},_Init:function(aArg){this.
__proto__=C.A5z;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"DeviceRes::AssessmentClass"};C.Assessment={
_Init:function(){C.A5z._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A6e={MonthToString:null,Bjh:function(L_){if(!L_)return A.
jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L_);return Av.Format(A.aaR(
A.acf.Bjj));}},AjJ:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(A.Core.
Bs,0);Av.Initialize(L_);return Av.Format(A.aaR(A.acf.AgW));}},AC6:function(L_){if(
!L_)return A.jV;else{var Av=A._NewObject(A.Core.Bs,0);Av.Initialize(L_);return Av.
Format(A.aaR(A.acf.Bji));}},A6W:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L_);return Av.Format(I0);}},AC7:function(A1v,A1d,Iy){
var B;var Dx=A._NewObject(A.Core.Bs,0);var Qo=A._NewObject(A.Core.Bs,0);var Bc0=
A1d<A1v;if(Bc0){Dx.Initialize(A1d);Qo.Initialize(A1v);}else{Dx.Initialize(A1v);Qo.
Initialize(A1d);}var ABN=0;var Apv=0;var Qm=0;Qm+=(Qo.GK-Dx.GK);if(Qm<0){switch(
Qo.Hk){case 1:case 2:case 4:case 6:case 8:case 9:case 11:Qm+=31;break;case 5:case
7:case 10:case 12:Qm+=30;break;case 3:if(this.Bkc(Qo.Year))Qm+=29;else Qm+=28;break;
default:A.ab5("%s%i",Iv,Qo.Hk);}Apv--;}Apv+=(Qo.Hk-Dx.Hk);if(Apv<0){Apv+=12;ABN--;
}ABN+=(Qo.Year-Dx.Year);if(Bc0){ABN=-ABN;Apv=-Apv;Qm=-Qm;}var index=Iy.indexOf(String.
fromCharCode(0x25),0);while(index>=0){var Ben=Iy.charCodeAt(index+1)||0;Iy=A.ab1(
Iy,index,2);switch(Ben){case 0x64:Iy=A.abU(Iy,Qm.toFixed(),index);break;case 0x6D:
Iy=A.abU(Iy,Apv.toFixed(),index);break;case 0x79:case 0x59:Iy=A.abU(Iy,ABN.toFixed(
),index);break;case 0x25:Iy=A.abU(Iy,O9,index);break;default:A.ab5("%s%s",P_,O9+
String.fromCharCode(Ben));}index=Iy.indexOf(String.fromCharCode(0x25),index+1);}
return Iy;},Bkc:function(Ac4){if(!(Ac4%4)&&!!(Ac4%100))return true;if(!(Ac4%400)
)return true;return false;},Bjd:function(L_){if(!L_)return A.jV;else{var Av=A._NewObject(
A.Core.Bs,0);Av.Initialize(L_);return this.MonthToString.BT(Av.Hk)+Av.Format(P$);
}},_Init:function(aArg){A.Device.MonthToString._Init.call(this.MonthToString={I:
this},0);this.__proto__=C.A6e;A.h7++;},_Done:function(){this.__proto__=null;this.
MonthToString._Done();A.h7--;},_ReInit:function(){this.MonthToString._ReInit();}
,_Mark:function(D){var B;if((B=this.MonthToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"DeviceRes::DateFormatterClass"};C.KQ={_Init:function(){C.A6e._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.A71={Af4:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:
return A.aaR(A.acf.AAi);case 1:return A.aaR(A.acf.A7R);default:A.ab5("%s%s",CR,A.
_GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.jV;},Bz1:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ALZ
);case 1:return A.aaL(A.ach.ALY);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Az0:function(AoO,Eo){if(AoO<A._GetAutoObject(
A.Device.Helper).ADk(Eo))return A.jb.Gk;else if(AoO<A._GetAutoObject(A.Device.Helper
).ADj(Eo))return A.jb.Ia;else return A.jb.E1;},Az2:function(AoO,Eo){if(AoO<A._GetAutoObject(
A.Device.Helper).ADk(Eo))return A.jb.Bm;else{A._GetAutoObject(A.Device.Helper).ADj(
Eo);return A.jb.Text;}},Aay:function(){switch(A._GetAutoObject(A.Device.Device).
MassUnit){case 0:return A.aaR(A.acf.BjQ);case 1:return A.aaR(A.acf.BoF);default:
A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return A.
jV;},Az1:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return 10;
case 1:return 5;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.
toFixed());}return 10;},BdV:function(Atp,Gz){var Ap_;if(((Atp<10000)||((Atp===10000
)&&(Gz===5)))&&(A._GetAutoObject(A.Device.Device).OR===2))Ap_=10;else if(((Atp<50000
)||((Atp===50000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device).OR)Ap_=100;else
if(((Atp<100000)||((Atp===100000)&&(Gz===5)))&&!!A._GetAutoObject(A.Device.Device
).OR)Ap_=500;else Ap_=1000;switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:break;case 1:Ap_=(Ap_/2)|0;break;default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return Ap_;},BdP:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AD1);case 1:return A.aaL(A.
ach.AD2);default:A.ab5("%s%s",CR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Alz:function(Bcl,Byk,Bxw){if(!Bcl)return 0;return Math.round((
Bxw-Byk)/Bcl)|0;},_Init:function(aArg){this.__proto__=C.A71;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"DeviceRes::MassClass"};C.DU={_Init:function(){C.A71._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.BpK={3:"\u7DA0\u8272"
,0:"Green",8:"Vihre\xE4",9:"Vert",10:"Gr\xFCn",11:"\u03A0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF"
,20:"\u0417\u0435\u043B\u0451\u043D\u044B\u0439",23:"Ye\u015Fil"};C.BpL={3:"\u7D05\u8272"
,0:"Red",8:"Punainen",9:"Rouge",10:"Rot",11:"\u039A\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF"
,20:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",23:"K\u0131rm\u0131z\u0131"};C.
BpM={3:"\u9EC3\u8272",0:"Yellow",8:"Keltainen",9:"Jaune",10:"Gelb",11:"\u039A\u03AF\u03C4\u03C1\u03B9\u03BD\u03BF"
,20:"\u0416\u0451\u043B\u0442\u044B\u0439",23:"Sar\u0131"};C.A5K={ADb:function(AfI
){var B;if(!!!(AfI.length%2))return-1;var BgO=0;var BgP=0;var Ail;var O=0;for(;O<
AfI.length;O++){Ail=A.wz(A.abW(AfI,O,1),-1,10);if(Ail===-1)return-1;if(!!(O%2))BgO+=
Ail;else BgP+=Ail;}Ail=((3*BgP)+BgO)%10;if(!!Ail)Ail=10-Ail;return Ail;},AVS:function(
AfI){if(!AfI.length)return false;if(!!(AfI.length%2))return false;return A.wz(A.
abW(AfI,AfI.length-1,1),-2,10)===this.ADb(A.abV(AfI,AfI.length-1));},_Init:function(
aArg){this.__proto__=C.A5K;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DeviceRes::BarcodeClass"
};C.VJ={_Init:function(){C.A5K._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};
C._Init=function(){};C._ReInit=function(){var B;if((B=C.Temperature._this))B._ReInit(
),C.Temperature._ReInit.call(B);if((B=C.Assessment._this))B._ReInit(),C.Assessment.
_ReInit.call(B);if((B=C.KQ._this))B._ReInit(),C.KQ._ReInit.call(B);if((B=C.DU._this
))B._ReInit(),C.DU._ReInit.call(B);if((B=C.VJ._this))B._ReInit(),C.VJ._ReInit.call(
B);};C.DI=function(D){var B;if((B=C.Temperature._this)&&(B._cycle!=D))B._Done(C.
Temperature._this=null);if((B=C.Assessment._this)&&(B._cycle!=D))B._Done(C.Assessment.
_this=null);if((B=C.KQ._this)&&(B._cycle!=D))B._Done(C.KQ._this=null);if((B=C.DU.
_this)&&(B._cycle!=D))B._Done(C.DU._this=null);if((B=C.VJ._this)&&(B._cycle!=D))
B._Done(C.VJ._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */