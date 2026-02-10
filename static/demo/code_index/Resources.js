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
var Cg=[0,0];var BD="The property \'FrameSize\' is READ ONLY.";var E6=[0,0,0,0];
C.Al={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:A.wf,N6:false,VI:false,Lf:function(
){if(!this.bitmap)return;var handle=this.bitmap;A._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Cg;this.FrameDelay=0;this.NoOfFrames=1;this.VI=false;},Init:
function(aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Cg;
var frameDelay=0;{var bmp=A.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=
bmp.FrameSize;frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=
noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.N6=true;this.
VI=(!!this.bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},ArR:function(E){throw new
Error(BD);},Update:function(){},_Init:function(aArg){A.Core.AhA._Init.call(this,
aArg);this.__proto__=C.Al;this.Init(aArg);},_Done:function(){this.Lf();this.__proto__=
A.Core.AhA;A.Core.AhA._Done.call(this);},_className:"Resources::Bitmap"};C.TS={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesDefaultBitmap.png",Format:
A._PIXEL_FORMAT_NATIVE,NoOfFrames:1,FrameSize:[48,48],FrameDelay:0,_this:null}};
C.ACN={_class:function(){return C.B8;},0:{Data:function(){return A.acM;},Cache:[
],_this:null}};C.B8={font:null,Leading:0,Descent:0,Ascent:0,Lf:function(){this.Bz2(
);},Init:function(aArg){this.BAK(aArg);},Bz2:function(){if(!this.font)return;var
handle=this.font;A.aal(handle);this.font=null;this.Ascent=0;this.Descent=0;this.
Leading=0;},BAK:function(aFontResource){if(!aFontResource)return;var handle=null;
var ascent=0;var descent=0;var leading=0;{var font=A.aa5(aFontResource);if(font){
ascent=font.Ascent;descent=font.Descent;leading=font.Leading;}handle=font;}this.
font=handle;this.Ascent=ascent;this.Descent=descent;this.Leading=leading;},BjQ:function(
aString,aOffset,aCount,aColumn,aMinWidth){if(aOffset<0)aOffset=0;if(!this.font)return 0;
if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var handle=this.
font;var pos=0;pos=A.aaF(handle,aString,aOffset,aCount,aColumn,aMinWidth);return pos;
},BjV:function(aString,aOffset,aCount,aX,aMinWidth){if(aOffset<0)aOffset=0;if(!this.
font)return 0;if((aOffset>0)&&(aOffset>aString.length))aOffset=aString.length;var
handle=this.font;var col=0;col=A.aaP(handle,aString,aOffset,aCount,aX,aMinWidth);
return col;},A7g:function(aFlowString){if(!this.font)return 0;var handle=this.font;
var advance=0;advance=A.aav(handle,aFlowString);return advance;},BoK:function(aString
,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return A.jV;var handle=this.font;var result=A.jV;
result=A.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;},YB:
function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
A.m9(handle,aString,aOffset,aCount);return advance;},A7r:function(aString,aOffset
,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>0)&&(aOffset>=aString.length
)))return E6;var handle=this.font;var extent=E6;extent=A.aaQ(handle,aString,aOffset
,aCount);return extent;},_Init:function(aArg){A.Core.AhA._Init.call(this,aArg);this.
__proto__=C.B8;this.Init(aArg);},_Done:function(){this.Lf();this.__proto__=A.Core.
AhA;A.Core.AhA._Done.call(this);},_className:"Resources::Font"};C.AC6={_class:function(
){return C.B8;},0:{Data:function(){return A.acN;},Cache:[],_this:null}};C.AsY={_class:
function(){return C.Al;},0:{FileName:"./res_index/ResourcesWhiteBitmapStripe.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:1,FrameSize:[256,4],FrameDelay:0,_this:
null}};C.ASb={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesNavigationIconsSmall.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[24,24],FrameDelay:0,_this:
null}};C.AUc={_class:function(){return C.Al;},0:{FileName:"./res_index/ResourcesPlayerIconsMedium.png"
,Format:A._PIXEL_FORMAT_ALPHA8,NoOfFrames:20,FrameSize:[36,36],FrameDelay:0,_this:
null}};C.BkS="Monday";C.BqJ="Tuesday";C.Brq="Wednesday";C.Bqw="Thursday";C.Bjv="Friday";
C.Bpk="Saturday";C.Bqj="Sunday";C.BhF="AM";C.BoI="PM";C.AEf="January";C.AC0="February";
C.AEr="March";C.AB1="April";C.AEt="May";C.AEh="June";C.AEg="July";C.AB8="August";
C.AGK="September";C.AEG="October";C.AEE="November";C.ACL="December";C.BkT="Mon";
C.BqK="Tue";C.Brr="Wed";C.Bqx="Thu";C.Bjw="Fri";C.Bpl="Sat";C.Bqk="Sun";C.Bkr="Jan";
C.Bjj="Feb";C.BkK="Mar";C.BhV="Apr";C.BkO="May";C.Bku="Jun";C.Bkt="Jul";C.BhX="Aug";
C.Bpt="Sep";C.Bk8="Oct";C.Bk7="Nov";C.BiD="Dec";
C._Init=function(){C.Al.__proto__=A.Core.AhA;C.B8.__proto__=A.Core.AhA;};C._ReInit=
function(){};C.DJ=function(D){var B;if((B=C.TS[0]._this)&&(B._cycle!=D))B._Done(
C.TS[0]._this=null);if((B=C.ACN[0]._this)&&(B._cycle!=D))B._Done(C.ACN[0]._this=
null);if((B=C.AC6[0]._this)&&(B._cycle!=D))B._Done(C.AC6[0]._this=null);if((B=C.
AsY[0]._this)&&(B._cycle!=D))B._Done(C.AsY[0]._this=null);if((B=C.ASb[0]._this)&&(
B._cycle!=D))B._Done(C.ASb[0]._this=null);if((B=C.AUc[0]._this)&&(B._cycle!=D))B.
_Done(C.AUc[0]._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */