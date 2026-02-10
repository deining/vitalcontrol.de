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
);if(index.acr)throw new Error("The unit file 'DropDown.js' included twice!");index.
acr=(function(){var A=index;var C={};
var Cg="Text";var BD=[0,0,100,24];var E6=[0,0,100,1];var Hr=[0,0];var I0=[0,0,100
,120];var Iv=[100,0];var O8=[100,120];var P_=[0,120];var P$=[90,0,100,60];var CR=[
0,0,0,0];var Fc=[0,0,240,40];var LA=[240,0];var Qa=[240,40];var J_=[0,40];var Oh=[
210,0,240,40];var Qb=[0,0,240,50];var MR=[240,50];var Tg=[0,50];
C.VY={Avw:function(aIndex){return A.jV;},AqV:function(){return 0;},_Init:function(
aArg){this.__proto__=C.VY;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;}
,_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"DropDown::DDData"};C.ACE={
B8:null,Background:null,Text:null,Bb:null,V:Cg,LX:0xFF000000,A5S:0xFF454545,Baj:
0,KW:0,Km:0x12,Jh:A.wg,Bl:function(aSize){var B;A.Core.P.Bl.call(this,aSize);this.
Text.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.Text.H([].concat(this.Text.M[0]+
this.Jh[0],this.Text.M.slice(1,4)));this.Text.H(A.abN(this.Text.M,this.Text.M[2]-
this.Jh[2]));this.Text.H(A.abP(this.Text.M,this.Text.M[1]+this.Jh[1]));this.Text.
H([].concat(this.Text.M.slice(0,3),this.Text.M[3]-this.Jh[3]));},Aj:function(Ae){
var B;A.Core.P.Aj.call(this,Ae);if(((Ae&0x20)===0x20)){this.Background.L(this.A5S
);this.Text.L(this.Baj);}else{this.Background.L(this.LX);this.Text.L(this.KW);}}
,BmB:function(E){this.V=E;this.Text.R(E);},WJ:function(E){this.LX=E;this.Background.
L(E);},S:function(E){this.B8=E;this.Text.S(E);},A4:function(E){this.Km=E;this.Text.
A4(E);},Ho:function(E){if(A.aaY(this.Jh,E))return;this.Jh=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Text._Init.call(this.Text={I:this},0);A.acg.AK._Init.call(this.Bb={I:this}
,0);this.__proto__=C.ACE;this.H(BD);this.Background.A1(0x3F);this.Background.H(BD
);this.Background.L(0xBE000000);this.Text.A1(0x3F);this.Text.H(BD);this.Text.R(Cg
);this.Text.L(0xFFFFFFFF);this.Bb.A1(0x1D);this.Bb.H(E6);this.Bb.L(0x9EFFFFFF);this.
J(this.Background,0);this.J(this.Text,0);this.J(this.Bb,0);this.Text.S(A.aaL(A.fl.
Ak));this.B8=A.aaL(A.fl.Af);},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Text._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit();this.
Bb._ReInit();this.Text.S(A.aaL(A.fl.Ak));this.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"DropDown::DDItem"};C.ANK={AEI:null,A95:null,CL:null,Ib:null,Bn:null,BX:null,IX:
null,Gu:0,A0:0,GP:0,AbT:0,ACU:false,A3N:function(G){if(this.Bn.Jy>100){var Gj=this.
CL.A7j(this.Bn.H4);if(Gj<0)return;this.CL.GU(Gj);this.CL.HJ(Gj,true,null,null);}
},BBE:function(G){var B;if(!this.Bn.NQ){var Gj=this.CL.A7j(this.Bn.H4);if(Gj<0)return;
this.CL.GU(Gj);this.CL.HJ(Gj,true,null,null);(B=this.AEI)?B[1].call(B[0],this):null;
}},AAM:function(G){this.Bn.As(true);},BnX:function(E){if(A.aa0(this.AEI,E))return;
this.AEI=E;},GU:function(E){this.Gu=E;this.CL.GU(E);},FO:function(){return this.
CL.Gu;},BBe:function(G){if(this.ACU){var Hc=A.abe(this.Bn.H4,this.Bn.NZ);if((Hc[
1]>8)||(Hc[1]<-8)){this.Ip().ANU(this.Ib,Hr);this.Bn.As(false);}}},JD:function(E
){this.A0=E;this.CL.JD(E);},BnZ:function(E){this.A95=E;this.CL.Hn=E;},Ae7:function(
E){this.GP=E;this.CL.Ae7(E);},ASN:function(){return this.CL.GP;},BmR:function(E){
if(this.ACU===E)return;this.ACU=E;},Arz:function(){return this.CL.A0;},ArX:function(
E){if(this.AbT===E)return;this.AbT=E;},BBL:function(G){},Ady:function(G){var B;var
Vw=this.CL.M;var AtI=this.CL.AqT(0,this.CL.A0-1);var y1=(((Vw[1]-AtI[1])*(Vw[3]-
Vw[1]))/(AtI[3]-AtI[1]))|0;var y2=(((Vw[3]-AtI[1])*(Vw[3]-Vw[1]))/(AtI[3]-AtI[1]
))|0;if(y1<0)y1=0;if(y2>(Vw[3]-Vw[1]))y2=Vw[3]-Vw[1];this.IX.H([Vw[2]-10,y1+Vw[1
],Vw[2],y2+Vw[1]]);this.IX.Z(this.ACU);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.Core.Ib._Init.call(this.Ib={
I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acg.BX._Init.call(this.BX={
I:this},0);A.acg.AK._Init.call(this.IX={I:this},0);this.__proto__=C.ANK;this.H(I0
);this.CL.A1(0x3F);this.CL.H(I0);this.CL.GU(0);this.CL.JD(5);this.CL.N8(C.ACE);this.
Ib.A1(0x3F);this.Ib.H(I0);this.Ib.AGW=false;this.Ib.A$O=false;this.Bn.A1(0x3F);this.
Bn.J2(Hr);this.Bn.Kz(Iv);this.Bn.DE(O8);this.Bn.DO(P_);this.BX.A1(0x3F);this.BX.
H(I0);this.BX.L(A.jb.Text);this.IX.H(P$);this.IX.L(0xFF000000);this.J(this.CL,0);
this.J(this.Ib,0);this.J(this.Bn,0);this.J(this.BX,0);this.J(this.IX,0);this.CL.
En=[this,this.Ady];this.CL.Aw_(this.Ib);this.Ib.AGf=[this,this.BBL];this.Ib.Zt=[
this,this.AAM];this.Bn.ASy=[this,this.BBe];this.Bn.D2=[this,this.A3N];this.Bn.Lr=[
this,this.BBE];},_Done:function(){this.__proto__=A.Core.P;this.CL._Done();this.Ib.
_Done();this.Bn._Done();this.BX._Done();this.IX._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.CL._ReInit();this.Ib._ReInit(
);this.Bn._ReInit();this.BX._ReInit();this.IX._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.AEI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.A95)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.CL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IX)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::DDItemList"};C.
DU={Data:null,AD:null,AC5:null,Avr:null,AbS:null,Q:null,Ad3:null,JA:null,Bn:null
,HO:null,AbJ:null,AbT:100,GP:20,BcZ:A.wg,A6d:0xFF252528,ANq:0xFF252528,ANv:0xFFF1EEEA
,A6e:0xFFFAFFFE,ANy:0xFFF8FDFF,ANr:0xFF0008C1,AzJ:0,ANz:0xFF7EFEFF,ANT:-1,ACu:0xFF000000
,Bij:0xFFFAFFFE,Bik:0,CP:function(){this.Bkc(this);},Init:function(aArg){this.ATe(
this.A6d);this.ArP(this.AC5);this.ATf(this.A6e);},Kr:function(C1,aClip,aOffset,Ck
,aBlend){A.Core.P.Kr.call(this,C1,aClip,aOffset,Ck,aBlend);if(!A.aaY(this.BcZ,this.
M)){this.BcZ=this.M;A.pe([this,this.ByP],this);}},Bl:function(aSize){var B;A.Core.
P.Bl.call(this,aSize);this.JA.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.JA.H([].
concat(this.JA.M[0],this.JA.M.slice(1,4)));this.JA.H(A.abN(this.JA.M,this.JA.M[2
]-((B=this.AbJ.M)[2]-B[0])));this.JA.H(A.abP(this.JA.M,this.JA.M[1]));this.JA.H([
].concat(this.JA.M.slice(0,3),this.JA.M[3]));},Au:function(E){if(A.aaZ(this.Q,E)
)return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
C6],E,0);if(!!E)A.pe([this,this.C6],this);},A_t:function(E){if(this.Data===E)return;
this.Data=E;A.pe([this,this.BgQ],this);},Bmk:function(G){var B;if(!this.AD)return;
var Gj=this.AD.CL.G6;var AaG=(C.ACE.isPrototypeOf(B=this.AD.CL.Cj)?B:null);if(!!
AaG){if(this.Data.AqV()>Gj){AaG.BmB(this.Data.Avw(Gj));AaG.WJ(this.ANq);AaG.A5S=
this.ANr;AaG.Baj=this.ANz;AaG.S(this.Avr);AaG.KW=this.ANy;AaG.A4(0x12);AaG.Bb.L(
this.ANv);AaG.Ho(CR);}AaG.H(A.abK(AaG.M,[(B=this.AD.CL.M)[2]-B[0],this.AD.CL.GP]
));}},BAW:function(G){var F;if(!!this.Q){(F=this.Q,F[2].call(F[0],this.AD.FO()));
A.abo(this.Q,0);}A.pe([this,this.A4M],this);},A4M:function(G){if(!this.AD){this.
Bzp(this);if(!this.AD)return;this.HO.Cy=0;this.HO.B3=this.AD.AbT;this.AD.As(true
);}else{this.HO.Cy=this.AD.AbT;this.HO.B3=0;this.AD.As(false);}this.HO.As(true);
this.AD.BmR(this.AbT<(this.AD.ASN()*this.AD.Arz()));},Bzp:function(G){var B;if(!
this.Data)return;this.AbS=A._NewObject(C.AOq,0);this.AD=A._NewObject(C.ANK,0);this.
AD.BnZ([this,this.Bmk]);this.AD.BnX([this,this.BAW]);this.AD.Ae7(this.GP);this.AD.
JD(this.Data.AqV());this.AD.IX.L(this.ACu);if(this.AbT>(this.AD.ASN()*this.AD.Arz(
)))this.ArX(this.AD.ASN()*this.AD.Arz());this.AD.ArX(this.AbT);this.AD.Ib.Gc=[0,
this.AbT];this.AD.H(this.M);this.AD.As(false);this.AD.GU(this.AzJ);var IH=this.Ip(
);if(!!IH){this.AbS.H([0,0,(B=IH.M)[2]-B[0],B[3]-B[1]]);this.AbS.At8=[this,this.
A4M];this.AbS.J(this.AD,0);IH.J(this.AbS,0);IH.ZL(this.AbS);IH.AM0(this.AbS);}},
ArX:function(E){if(this.AbT===E)return;this.AbT=E;if(this.ANT<0)this.ANT=E;},AAI:
function(G){var B;if(!this.AD||!this.Ip())return;var AJq=this.Bz6(this);this.AD.
H([].concat(AJq[0],this.AD.M.slice(1,4)));this.AD.H(A.abN(this.AD.M,AJq[2]));this.
AD.H(A.abP(this.AD.M,AJq[3]));this.AD.H([].concat(this.AD.M.slice(0,3),AJq[3]+this.
HO.A6));if((this.AD.M[3]>this.Ip().M[3])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[
1])))this.AD.H([].concat(this.AD.M.slice(0,3),this.Ip().M[3]));if((this.AD.M[1]<
this.Ip().M[1])&&(this.AD.M[3]!==((B=this.Ip().M)[3]-B[1])))this.AD.H(A.abP(this.
AD.M,this.Ip().M[1]));},BgQ:function(G){this.JA.R(this.Data.Avw(this.AzJ));},AiN:
function(G){if((!this.AD||!this.AbS)||!this.Ip())return;if(!this.AD.A8_()){this.
Ip().ACV(this.AbS);this.Ip().HQ(this.AbS);this.AD=null;}},ByP:function(G){var B;
if(!!this.AD&&(((this.M[0]!==this.AD.M[0])||(this.M[2]!==this.AD.M[2]))||(this.M[
3]!==this.AD.M[1])))this.AD.H([this.M[0],this.M[3],this.M[2],this.M[3]+((B=this.
AD.M)[3]-B[1])]);},ArP:function(E){this.AC5=E;this.JA.S(E);},AwO:function(E){if(
this.Avr===E)return;this.Avr=E;},ATe:function(E){this.A6d=E;this.Ad3.L(E);},A_g:
function(E){if(this.ANq===E)return;this.ANq=E;},A_l:function(E){if(this.ANv===E)
return;this.ANv=E;},ATf:function(E){this.A6e=E;this.JA.L(E);},A_m:function(E){if(
this.ANy===E)return;this.ANy=E;},A_h:function(E){if(this.ANr===E)return;this.ANr=
E;},C6:function(G){var F;if(!!this.Q){this.AzJ=(F=this.Q,F[1].call(F[0]));if(!!this.
AD)this.AD.GU(this.AzJ);this.BgQ(this);}},Bz6:function(AoM){var B;var B1=AoM;var
AJp=AoM.M;var Azf=Hr;while(!!B1){var Aaw=B1.FF;if(!B1.Ab&&(B1!==AoM)){B1.Bi(AJp);
return A.abh([0,0,(B=AoM.M)[2]-B[0],B[3]-B[1]],Azf);}if(!!Aaw){if(((B=Aaw.QP)[0]>=
B[2])||(B[1]>=B[3])){A.we(B1,0);A.we(Aaw,0);}Aaw.QP=A.wC(Aaw.QP,AJp);}if(!((B1.U&
0x1)===0x1))return A.abh([0,0,(B=AoM.M)[2]-B[0],B[3]-B[1]],Azf);if(B1===AoM)AJp=
A.lb(A.abh(AJp,B1.M.slice(0,2)),B1.M);Azf=A.abf(Azf,B1.M.slice(0,2));B1=B1.Ab;}return A.
abh([0,0,(B=AoM.M)[2]-B[0],B[3]-B[1]],Azf);},A_n:function(E){if(this.ANz===E)return;
this.ANz=E;},Bkc:function(G){this.ArX(this.ANT);if(!!this.AD&&!!this.AD.CL)this.
AD.CL.AbL(0,this.AD.CL.A0);if(!!this.Data)this.JA.R(this.Data.Avw(this.AzJ));},A_k:
function(E){if(this.ACu===E)return;this.ACu=E;if(!!this.AD)this.AD.IX.L(this.ACu
);},A_j:function(E){this.Bij=E;this.AbJ.L(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acg.NY._Init.call(this.Ad3={I:this},0);A.acg.Text._Init.call(this.
JA={I:this},0);A.Core.Bn._Init.call(this.Bn={I:this},0);A.acl.Go._Init.call(this.
HO={I:this},0);A.acg.Ap._Init.call(this.AbJ={I:this},0);this.__proto__=C.DU;this.
H(Fc);this.Ad3.A1(0x3F);this.Ad3.H(Fc);this.Ad3.L(0xFF252528);this.JA.A1(0x3F);this.
JA.H(Fc);this.JA.R(A.jV);this.Bn.A1(0x3F);this.Bn.J2(Hr);this.Bn.Kz(LA);this.Bn.
DE(Qa);this.Bn.DO(J_);this.HO.HP(1);this.HO.Fp(250);this.AbJ.A1(0x3A);this.AbJ.H(
Oh);this.AbJ.Cx(1);this.Bik=A.jb.Text;this.J(this.Ad3,0);this.J(this.JA,0);this.
J(this.Bn,0);this.J(this.AbJ,0);this.Ad3.Ax(A.aaL(A.acw.AHw));this.JA.S(A.aaL(A.
fl.Af));this.Bn.Lr=[this,this.A4M];this.HO.SJ=[this,this.AiN];this.HO.Ahm=[this,
this.AAI];this.AC5=A.aaL(A.fl.Af);this.Avr=A.aaL(A.fl.Ak);this.AbJ.Ax(A.aaL(A.aci.
ASb));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Ad3._Done(
);this.JA._Done();this.Bn._Done();this.HO._Done();this.AbJ._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ad3._ReInit();this.
JA._ReInit();this.Bn._ReInit();this.HO._ReInit();this.AbJ._ReInit();this.JA.S(A.
aaL(A.fl.Af));this.ArP(A.aaL(A.fl.Af));this.AwO(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Data)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AC5
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avr)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"DropDown::DropDown"};C.AOq={At8:null,Bn:null,Bhc:function(G){var
B;(B=this.At8)?B[1].call(B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Core.Bn._Init.call(this.Bn={I:this},0);this.__proto__=C.AOq;this.H(
Qb);this.Bn.A1(0x3F);this.Bn.J2(Hr);this.Bn.Kz(LA);this.Bn.DE(MR);this.Bn.DO(Tg);
this.J(this.Bn,0);this.Bn.Av_=[this,this.Bhc];this.Bn.BG=[this,this.Bhc];},_Done:
function(){this.__proto__=A.Core.P;this.Bn._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Bn._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.At8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Bn)._cycle!=D)B._Mark(B._cycle=D);},_className:"DropDown::EventCatcher"
};
C._Init=function(){C.ACE.__proto__=A.Core.P;C.ANK.__proto__=A.Core.P;C.DU.__proto__=
A.Core.P;C.AOq.__proto__=A.Core.P;};C._ReInit=function(){};C.DJ=function(D){};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */