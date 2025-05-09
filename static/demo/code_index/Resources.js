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
);if(index.aci)throw new Error("The unit file 'Resources.js' included twice!");index.
aci=(function(){var A=index;var C={};
var Cf=[0,0];var BD="The property \'FrameSize\' is READ ONLY.";var E8=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,N6:false,VJ:false,Lh:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cf;this.FrameDelay=0;this.NoOfFrames=1;this.VJ=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cf;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.N6=true;this.
VJ=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArY:function(E){throw new
Error(BD);},Update:function(){},_Init:function(aArg){A.Core.AhE._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.Lh();this.__proto__=
A.Core.AhE;A.Core.AhE._Done.call(this);},_className:"Resources::Bitmap"};C.TW={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACQ={_class:function(){return C.B7;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B7={font:null,Leading:0,Descent:0,Ascent:0,Lh:function(){this.BzW(
);},Init:function(aArg){this.BAC(aArg);},BzW:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BAC:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BjN:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BjR:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A7d:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},BoH:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},YA:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A7o:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E8;var handle=this.font;var extent=E8;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.AhE._Init.call(this,aArg);this.
__proto__=C.B7;this.Init(aArg);},_Done:function(){this.Lh();this.__proto__=A.Core.
AhE;A.Core.AhE._Done.call(this);},_className:"Resources::Font"};C.AC9={_class:function(
){return C.B7;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.As4={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ASh={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.AUh={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BkO="Monday";C.BqG="Tuesday";C.Brn="Wednesday";C.Bqt="Thursday";C.Bjs="Friday";
C.Bph="Saturday";C.Bqg="Sunday";C.BhB="AM";C.BoF="PM";C.AEi="January";C.AC3="February";
C.AEu="March";C.AB4="April";C.AEw="May";C.AEk="June";C.AEj="July";C.AB$="August";
C.AGQ="September";C.AEJ="October";C.AEH="November";C.ACO="December";C.BkP="Mon";
C.BqH="Tue";C.Bro="Wed";C.Bqu="Thu";C.Bjt="Fri";C.Bpi="Sat";C.Bqh="Sun";C.Bkn="Jan";
C.Bjg="Feb";C.BkG="Mar";C.BhR="Apr";C.BkK="May";C.Bkq="Jun";C.Bkp="Jul";C.BhT="Aug";
C.Bpq="Sep";C.Bk4="Oct";C.Bk3="Nov";C.BiA="Dec";
C._Init=function(){C.Al.__proto__=A.Core.AhE;C.B7.__proto__=A.Core.AhE;};C._ReInit=
function(){};C.DI=function(D){var B;if((B=C.TW[0]._this)&&(B._cycle!=D))B._Done(
C.TW[0]._this=null);if((B=C.ACQ[0]._this)&&(B._cycle!=D))B._Done(C.ACQ[0]._this=
null);if((B=C.AC9[0]._this)&&(B._cycle!=D))B._Done(C.AC9[0]._this=null);if((B=C.
As4[0]._this)&&(B._cycle!=D))B._Done(C.As4[0]._this=null);if((B=C.ASh[0]._this)&&(
B._cycle!=D))B._Done(C.ASh[0]._this=null);if((B=C.AUh[0]._this)&&(B._cycle!=D))B.
_Done(C.AUh[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */