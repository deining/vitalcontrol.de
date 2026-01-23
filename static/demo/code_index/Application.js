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
);if(index.kR)throw new Error("The unit file 'Application.js' included twice!");
index.kR=(function(){var A=index;var C={};
var Cf=[0,0,240,320];var BD=[0,0,240,40];var E6=[0,0,20,30];var Hq=[6,21,14,25];var
I0=[6,15,14,19];var Iv=[6,9,14,13];var O9=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CR=" ";var Fc=[0,40,240,280];var L8=[0,40,232,280];var Qa=[
0,40,116,160];var J9=[114,40,230,160];var Oh=[0,160,116,280];var Qb=[116,160,232
,280];var MR=[0,280,116,400];var Te=[116,280,232,400];var UW=[0,400,116,520];var
Z8=[116,400,232,520];var W$=[-1,520,115,640];var Iw=[232,40,240,280];var UX=[5,40
,235,120];var Z9=[120,140,210,230];var UY=[20,140,110,230];var Z_=[0,0,116,120];
var Xa=[0,0,120,120];var Z$=[0,0,116,45];var Aaa=[0,0,8,200];var UZ=[0,0,8,20];var
Xb=[30,0,210,40];var O_=[0,0,40,40];var Aab=[7,8,200,40];var Oi=[0,0,200,40];var
Rn=[6,1];var Xc="ERROR: Invalid value for ItemHighlighting";var Xd=[10,10,40,30];
var Tf=[0,0,120,40];var Xe=[60,0,180,40];var Aac=[120,0,240,40];var Xf=[0,0,100,
40];var Xg=[83,0,157,40];var Xh=[140,0,240,40];var Xi=[0,0,20,40];var Xj=[220,0,
240,40];var Aad=[0,0,300,30];var Tg=[0,30,300,60];var Aae=[0,60,300,90];var AfB=[
0,90,300,120];var Aaf=[0,100,300,110];var Xk=[0,50,300,60];var Aag=[0,30,300,40];
var Xl="*";var AhS=[40,40];var K2=[0,0,240,80];var AcL=[0,0,240,50];var JE="Cap";
var AhT=[0,40,40,80];var Aoc=[200,40,240,80];var Oj=[30,40,210,80];var Xm="--";var
Aod="%d";var AfC="%m";var AhU="%Y";var AcM=" (";var Aah=[0,0,232,80];var Ax4="Date";
var Ax5=[48,40,88,78];var Ax6=[39,40,79,80];var Ax7=[80,44,87,77];var Ak_=".";var
AsX=[88,44,120,77];var Ax8=[120,44,127,77];var Ax9=[127,44,191,77];var O$=[0,0,80
,40];var Ro="Text";var Ax_=[430,102,430,102];var U0=[0,0,240,240];var AsY=[232,0
,240,240];var Ax$=[0,10,240,240];var Aya="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ak$=[0,80,240,280];var
Ayb="Unhandled option";var AfD="Unhandled animal list action";var Aoe="Animal list content not handled.";
var I1=[0,40,240,80];var Aof="Set Selected";var AsZ=" %%";var AcN=[0,180,240,220
];var As0=[82,127,167,150];var As1="Group";var As2=[77,91,167,124];var Aog=[0,0,
90,33];var As3=[4,4,18,29];var Ala=[20,4,34,29];var Ayc=[36,4,50,29];var Ayd=[52
,4,66,29];var Aye=[68,4,82,29];var As4="ERROR: Unhandled Device::SyncState";var Ayf=
":\n";var Pa="{1}";var Ayg="{2}";var AWe=[0,49,240,109];var AWf=[0,170,240,243];
var AWg=[0,110,240,170];var AWh=[20,243,220,268];var AHw=[30,8];var AHx="\u2265 ";
var AfE=[0,0,240,160];var Aoh=[0,0,0,0];var AWi=[0,0,240,66];var AHy=[10,0,76,66
];var Alb=[33,33];var AHz=[87,0,153,66];var AHA=[164,0,230,66];var AWj="No statistics available";
var AWk="in this environment.";var AHB=" fps";var AWl="CPU: - %%";var AcO=[0,0,240
,120];var AWm=[130,0,237,20];var AWn=[20,0,120,20];var AWo=[0,20,240,40];var AWp=[
40,20,100,40];var As5=[100,20,240,40];var AHC=[0,40,240,60];var AHD=[40,40,100,60
];var Ayh=[100,40,240,60];var AHE=[0,60,50,80];var Ayi=[100,60,240,80];var AWq=[
0,80,50,100];var AWr=[100,80,240,100];var AWs=[0,100,50,120];var AWt=[100,100,240
,120];var AHF=[5,5,15,15];var AWu="%H";var MS="%M";var Ayj="Time";var AWv=[79,40
,119,78];var AWw=[125,40,164,80];var AWx=[86,40,126,80];var AWy=":";var AWz=[75,
40,115,80];var AHG=[0,0,240,150];var AWA=[60,0,155,40];var Ayk=[30,0,65,40];var AWB=[
60,0,100,40];var As6=[88,0,128,40];var Ayl=[60,0,71,40];var AWC=[60,0,74,40];var
AHH=[90,0,123,40];var AWD=[120,0,161,40];var AHI=[120,0,165,40];var AHJ=[60,0,88
,40];var AHK=[60,0,95,40];var AWE="Did not expect iterator bigger than number of records";
var AHL=[20,0,240,20];var AWF=[0,38,240,40];var AWG=[0,0,8,4];var Rp=[0,0,240,280
];var U1=[0,280,240,320];var AWH="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWI="]";var AWJ="ERROR: Cannot find closing bracket \'}\' in text [";var AWK=
"] opened at index ";var AWL="#";var AWM="ERROR: Invalid parameter: {";var AWN="}";
var AhV=[20,20];var AHM=[0,12];var AWO="ERROR: Not expected Application::FooterFocus, ";
var AWP="%M:%S";var AHN=[30,150,207,170];var AHO=[20,70,217,194];var Aym="Unhandled item.";
var Qc=[0,80,240,120];var AWQ="Unhandled Overlay Menu ";var AWR="Invalid bootloader message: ";
var AWS="Unknown USBState: ";var As7="Invalid fader";var AWT=[2,4,32,40];var AWU=[
29,4,80,40];var AWV=[120,4,200,40];var AWW=[80,0,114,40];var AWX="-1";var AWY="< ";
var As8=[0,0,232,40];var AWZ=[22,40,180,80];var AW0=[2,40,22,80];var AW1=[23,40,
163,80];var AW2=[210,40,230,80];var AW3=[164,40,210,80];var AW4=[169,43,205,77];
var AW5="ERROR: No outlet assigned";var AW6="Unhandled screen";var AW7="ERROR: Cannot cache null screen.";
var AW8="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHP="Untreated Rating Method type!";var Alc="Unhandled animal type";var AW9=[
5,60,235,140];var AW_=[0,130,240,196];var AW$=[49,240,229,280];var Ayn="Implement in derived classes!";
var Ald="Implement in derived class";var AhW=[0,40,230,120];var Ayo=[0,120,230,200
];var Aoi=[0,200,230,280];var AhX=[0,280,230,360];var AXa=[0,360,230,440];var Ayp=[
230,40,238,280];var AHQ="WARNING: Unhandled filter field: ";var AfF="Should not happen.";
var AHR="Invalid Boolean item";var Aai=[0,120,240,160];var Ale=[0,160,240,200];var
Aoj=[0,200,240,240];var AXb=[1152,11,1392,51];var AXc=[1152,51,1392,91];var AXd=[
1152,91,1392,131];var AXe=[1152,131,1392,171];var AXf=[1152,171,1392,211];var As9=[
0,240,240,280];var AHS=[10,0,240,40];var AHT=[190,0,230,40];var AXg=[60,3,95,39];
var AXh=[95,4,200,40];var AXi=[3,3];var AXj=[6,6];var AXk=[59,5,197,35];var AXl=[
59,2,200,38];var AXm=[3,2,43,42];var AXn=[0,17,43,40];var AXo=[50,40];var AXp=[50
,0];var AXq="Illegal shifting direction";var Ayq=[0,0,160,30];var AHU=[0,0,25,30
];var AHV=[27,0,52,30];var AHW=[54,0,79,30];var AHX=[81,0,106,30];var AHY=[108,0
,133,30];var AHZ=[135,0,160,30];var AXr="Internal queue error";var AXs="ERROR: No corresponding Id ";
var AXt=" found.";var AXu="ERROR: Error in range test";var AXv=[120,67,210,157];
var AXw=[0,40,240,70];var AXx=[20,67,110,157];var Ayr=[0,160,240,280];var AH0=[20
,77,90,147];var AXy=[0,0,210,40];var AH1=[195,0,235,40];var AhY=[0,40,232,120];var
U2=[0,120,232,200];var AXz=[0,40,232,200];var Aaj=[0,200,232,280];var AXA=[0,320
,240,400];var AXB=[0,120,53,200];var Alf=[0,280,232,360];var AfG="%%";var AhZ=[0
,360,232,440];var Aok=[0,440,232,520];var Ays=[0,80,207,120];var Pb=")";var AXC=
"/";var AH2=[5,0,88,30];var AH3=[88,0,240,30];var AXD="276000312345678";var Ayt=[
5,30,100,60];var AH4=[100,30,240,60];var AXE="Manufacturer";var AXF="Country";var
AXG=[5,60,240,90];var AXH="Niedersachsen";var AXI=[5,90,145,120];var AXJ=[140,90
,240,120];var AXK="Protocol";var AXL=[0,0,120,100];var AH5=[0,40,116,120];var AXM=[
40,80,92,107];var AH6=[0,0,50,23];var AH7="ERROR: Unhandled Device::MeasureState";
var Ayu=[0,120,240,280];var AXN=[178,159,248,203];var AXO=[10,145,170,225];var AXP=[
0,61,240,101];var AXQ=[0,0,40,23];var AXR=[101,113,141,136];var AXS=[101,235,141
,258];var AXT=[69,288,101,313];var AXU=[0,40,240,200];var Aol=[0,200,240,280];var
As_=[0,280,240,360];var AH8="\u2264 ";var AXV=[0,80,94,160];var AXW=[94,80,184,160
];var AXX=[184,80,240,160];var AXY=[197,105,231,139];var AXZ=[105,101,173,127];var
AX0=[7,101,75,127];var AH9=[94,125,184,151];var AX1=[2,125,92,151];var AX2=[0,70
,240,101];var AX3=[0,106,240,280];var AX4=[30,40,240,70];var AX5=[0,40,30,70];var
AX6="\u278B";var AX7=[0,0,240,175];var AX8=[0,0,232,175];var AH_=[232,0,240,175];
var AX9="Text Here !";var AX_=[200,0,240,40];var AH$="1";var AIa="2";var AIb="3";
var AIc="4";var Ayv=[0,360,232,400];var Ayw="ERROR: invalid item class.";var AId=[
10,220,250,260];var AIe=[185,0,225,40];var AIf="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var Ayx="ERROR: Received more actions than expected!";var Ayy=", ";var AX$=
"ERROR: Cannot set action at position=";var AYa=". Current elements:";var AYb=", max elements:";
var AYc="17";var AYd=[0,0,58,58];var AYe=[0,0,60,60];var AYf=[30,0,58,20];var AYg=[
7,6,25,24];var AYh=[30,60,130,160];var AYi=[0,0,28,20];var AYj=[4,3,40,24];var AYk=[
0,0,42,27];var Ayz=[0,0,17,17];var AYl="Unknown direction of counting enum value: ";
var AYm="Unknown id generation method enum value: ";var AyA="Invalid animal id generation method: ";
var As$="Unhandled popup id";var U3="0";var Ata=";";var AYn=[0,400,230,480];var AYo=[
5,120,235,200];var AYp=[0,640,230,760];var AIg=[0,0,300,200];var AYq=[20,40,220,
80];var AIh=[20,80,220,280];var AYr=[140,0,188,40];var AYs="ERROR: Row containing birth weight could not be loaded";
var AYt=[0,440,230,520];var Atb="ID";var AYu=[40,40,198,70];var AYv="Extra info: ";
var AIi=" -";var AYw=[0,0,230,120];var AYx=[0,0,230,40];var AYy=[0,80,230,120];var
AYz="\xB0Brix";var AcP=[0,320,230,400];var AYA=[0,410,230,490];var AYB="ERROR: aNumberOfDays can not be < 0 ";
var AYC="{WEIGHTGAIN} ";var AYD="\xB1";var AIj="+";var AYE="{WEIGHTGAIN}";var AYF=
"{DAYS}";var AYG="ERROR: aString can not be null";var AYH=[166,70,240,114];var AYI=[
0,60,160,120];var AYJ=[30,0,240,60];var AIk=[1,6,29,54];var AYK=[30,60,240,120];
var AYL="Con";var AYM=[70,50,170,70];var AIl="Unhandled Device::NaisIdValidationResult: ";
var AIm="Unhandled PopupId";var AYN=[110,123,230,248];var AYO=[5,0,250,40];var AYP=[
102,0,186,40];var AYQ=[153,0,240,40];var Rq="-";var Atc=[170,0,240,40];var AIn=[
220,0,320,30];var AIo=[200,20,300,50];var Aom=[180,0,180,40];var Aon=[170,0,170,
40];var AyB="Untreated state";var AYR="ERROR: Animal id scanned in an unexpected state : ";
var AIp="ERROR: Null animal id scanned.";var AYS=[40,40,235,100];var AYT=[120,100
,210,190];var AYU=[20,100,110,190];var AYV=[0,40,40,100];var AYW="\u278A";var AYX=
"Action untreated";var AYY="ERROR: No corresponding ";var AYZ=" action found!";var
AY0="Unhandled action: ";var AY1=[0,186,240,216];var AY2=[0,220,232,280];var AY3=[
5,190,235,270];var AY4=[232,60];var AY5=[0,2];var AY6=[58,58];var AY7="A";var AY8=[
56,0,156,40];var Aoo=[156,0,240,40];var AIq=" 7 ";var AY9=[40,0,156,40];var AIr=
"/-1/-2";var AIs=[72,0,144,40];var AcQ="\n";var AIt="(";var AY_=[72,0,156,40];var
AIu="%y/%m";var AY$=[70,0,240,40];var AyC=[70,0,120,40];var AZa=[160,0,245,40];var
AZb="- ";var AyD=" - ";var AZc="{parc}{clr3}";var AZd="{clr0}/^{clr2}";var AZe="{clr0}/^{clr1}";
var AIv=[0,0,85,40];var Aop="?";var AIw=[0,0,120,140];var AZf=[0,0,116,40];var AIx=[
15,0,100,40];var AIy=[110,0,200,40];var Alg=[0,0,34,34];var AZg=[129,0,157,40];var
Aoq=[0,0,25,25];var AZh="\u2611";var AIz="\u2610";var AIA=[5,0,72,40];var AZi=[150
,0,240,40];var AZj=[72,0,139,40];var AIB="Unvalid content class: ";var AZk=[0,320
,240,360];var AZl=[0,360,240,400];var AZm=[144,0,170,40];var AZn=[187,0,213,40];
var AZo=[207,10,233,50];var AZp=[247,20,273,60];var AZq=[140,0,150,100];var AZr=[
165,0,175,100];var AZs=[185,0,195,100];var AZt=[205,0,215,100];var AZu=[211,0,233
,40];var AZv=[189,0,211,40];var AZw=[167,0,189,40];var AZx=[145,0,167,40];var AyE=[
5,0,240,40];var Aak=[10,0,10,40];var AIC="= \u2211 ";var AyF=[125,0,240,40];var AZy=[
130,0,170,40];var AZz="\xD8 ";var AZA=[100,10,116,36];var AZB=[117,10,133,36];var
AZC=[135,10,151,36];var AZD="Implement in derieved class";var Atd=[0,80,240,240];
var Ate=[0,120,232,160];var Atf=[0,160,232,200];var Atg=[0,200,232,240];var AyG=[
0,240,232,280];var Aor=[0,320,232,360];var AZE=[-61,360,232,400];var AZF=[0,400,
32,440];var AZG=[0,100];var AZH=[0,40,240,240];var AZI=[0,50000];var AZJ=[0,500];
var AZK=[0,0,240,105];var Aos=[0,105,240,210];var AZL=[0,40,240,81];var AZM=[0,81
,240,122];var AZN=[0,122,240,163];var AZO=[0,163,240,205];var AZP=[0,205,240,240
];var AZQ=[0,200];var AZR=[0,40,240,73];var AyH=[0,0,30,40];var AID=[0,40,30,80];
var Alh=[60,40];var AyI=[60,0];var AZS=[10,0,40,40];var AZT=[0,190,240,260];var AZU=[
0,130,240,190];var AIE=[40,40,200,130];var AZV=[90,230,170,253];var AZW=[80,190,
170,223];var AZX=[0,130,240,180];var AZY=[0,250,240,280];var AZZ=[129,0,156,40];
var AZ0=[72,0,100,40];var AZ1=[100,0,129,40];var AZ2=[78,8,103,33];var AIF=[0,0,
300,120];var AZ3=[1,-1];var AZ4=[20,40,240,120];var AIG=[20,0,240,40];var AZ5=[0
,118,240,120];var AIH=[0,20,130,40];var AZ6=[130,20,240,40];var AZ7=[0,0,10,20];
var AyJ="\u2191";var AZ8=[230,0,240,20];var Ath=[0,40,232,80];var AZ9=[0,80,232,
160];var AZ_=[0,160,230,240];var Ati=" p. p.";var AyK="Unknown animal type";var AyL=[
80,0,140,40];var AZ$=[50,0,172,40];var A0a=[172,0,240,40];var A0b=[0,90,240,92];
var AII="Unhandled menu item";var AIJ=[0,0,50,30];var Ali=[0,0,30,30];var A0c="No AnimalActionTemperatureScreen found!";
var A0d="840003123456789";var A0e=[40,0,230,40];var A0f=[50,10,230,30];var AyM="No AnimalMultiInfoScreen found!";
var Atj=[0,0,25,40];var AIK="/^";var BaC="?/?";var Brk=[100,4,180,40];var Brl=[65
,0,99,40];var Brm=[165,0,200,40];var BaD=[0,0,60,40];var BaE="9999/^9999";var Brn=
"Invalid index: ";var Bro="Unknown AnimalIdGenerationMethod: ";var Brp="Invalid gender: ";
var Atk="Invalid input state: ";var Brq="Unhandled AnimalIdGenerationMethod";var
Brr=[42,35,67,75];var Brs=[5,35,39,75];var Brt=[70,40,228,70];var Bru="Invalid direction for setting focus";
var Ah0="Invalid index";var Brv="Unvalid direction";var Brw=[0,0,42,30];var BaF=[
22,0,42,30];var Brx=[20,0,40,30];var Bry=[0,0,158,30];var BaG=[32,0,62,30];var BaH=[
64,0,94,30];var BaI=[96,0,126,30];var Brz=[128,0,158,30];var BrA=" %% ";var BrB=[
0,70,240,220];var BrC=[0,237,240,307];var BaJ="\n44 %% done";var BrD=[0,0,166,30
];var AIL=[0,0,12,30];var AyN=[14,0,26,30];var A0g=[28,0,40,30];var A0h=[42,0,54
,30];var A0i=[56,0,68,30];var A0j=[70,0,82,30];var A0k=[84,0,96,30];var A0l=[98,
0,110,30];var BaK=[112,0,124,30];var A0m=[126,0,138,30];var BrE=[140,0,152,30];var
BrF=[154,0,166,30];var BaL=[20,0,46,30];var BrG="\u2642";var BrH="{fnt3}\u2642{fnt1}";
var BrI="\u2640";var BrJ="{fnt3}\u2640{fnt1}";var BrK="{parc}";var BrL=[30,30,210
,80];var BrM="Implement in derieved class!";var BrN=[60,4,226,34];var BaM=[30,4,
58,34];var BaN=[4,0,27,40];var BrO=[116,4,228,34];var BrP=[60,4,86,34];var BrQ=[
88,4,114,34];var Aot="Implement in derived class!";var BaO="Implement in derived class.";
var BrR="Invalid nais id view: ";var BrS=[0,35,240,75];var BrT=[0,0,110,30];var BrU=[
0,0,26,30];var BrV="100";var A0n="\n\n";var BrW=[240,240];var BrX=[0,240];var BrY=
"Unknown rated attribute: ";var BrZ=[120,80,240,280];var Br0=[0,80,120,280];var AIM=
" %% (";var AyO=" \xB1 ";var AyP=" (n = ";var A0o=[0,80,232,120];var Br1=[0,242,
232,282];var A0p=[0,280,232,320];var Br2=[35,0,200,40];var Br3=[1,0,31,40];var Br4=[
32,40];var Br5=[32,0];var Br6=[3,0,83,40];var BaP=[180,0,240,40];var Br7=[120,0,
180,40];var Br8=[65,0,125,40];var Br9=[0,0,120,200];var Br_=[0,40,120,150];var BaQ=[
15,160,60,190];var BaR=[60,160,105,190];var Br$=[0,65,240,135];var Bsa=[10,112,170
,192];var Bsb=[178,129,248,173];var Bsc=[0,40,240,110];var Bsd=[10,98,170,178];var
Bse=[178,112,248,156];var Bsf=[85,190,160,265];var Bsg=[89,194,155,260];var Bsh=[
26,190,111,250];var Bsi=[125,181,225,211];var Bsj=[100,220,183,250];var Bsk="38.7";
var Bsl=[180,220,225,250];var Bsm="\xB0C";var Bsn=[0,99,240,178];var Bso=[100,280
,140,320];var Bsp=[0,26,240,105];var BaS=[30,40];var BaT=[30,0];var Bsq=[149,0,200
,40];var Bsr=[145,40];var Bss=[145,0];var Bst=[38,0,88,40];var A0q=[0,0,35,40];var
Bsu=[0,0,50,40];var Bsv=[40,0,200,40];var Bsw=[95,0,145,40];var Bsx=[65,5,223,35
];var A0r=[0,0,15,40];var Bsy=[72,0,140,40];var BaU="\n(";var Bsz="%y/%m/%d";var
BsA="%y ";var BsB=" %m ";var BsC=" %d ";var BsD="20";var BsE=[225,0,240,40];var BsF=[
0,400,232,440];var BsG=[0,440,232,480];var BsH=[0,480,232,520];var BsI=[0,520,232
,560];var BsJ=[0,560,232,600];var BsK=[0,598,232,638];var BsL=[5,0,215,40];var BsM=[
215,8,240,33];var BsN="Implement in dervied class.";var BsO="ERROR: Unhandled temperature unit: ";
var AIN="ERROR: Unhandled mass unit: ";var BsP=[-1,160,115,280];var BsQ=[114,160
,230,280];var A0s=[116,40,232,160];var AyQ="Unknown weight class index: ";var BsR=
"< 35";var BsS="35 - 40";var BsT="40 - 45";var BsU="45 - 50";var BsV="\u2265 50";
var BsW="< 80";var BsX="80 - 90";var BsY="90 - 100";var BsZ="100 - 110";var Bs0=
"\u2265 110";var BaV="Unknown mass unit";var Bs1=[143,0,193,40];var BaW=[192,0,240
,40];var Bs2=[44,28,44,28];var Bs3="0 %%";var Bs4=[-1,40,115,160];var Bs5=[117,40
,233,160];var Bs6=[1,160,117,280];var Bs7=[114,158,230,278];var Bs8=[1,280,117,400
];var Bs9=[30,0,155,40];var BaX="\u2620";var A0t=[380,150,380,190];var BaY=[105,
0,155,50];var A0u=[190,1,240,41];var Bs_=[72,0,108,40];var Bs$=[108,0,180,40];var
Bta=[60,0,94,40];var Btb=[94,0,200,40];var Btc="Scroll direction not supported.";
var Btd=[44,0,207,40];var Bte=[207,0,240,40];var Btf="99";var Btg="Unknown birth type";
var Bth=[44,0,189,40];var Bti=[5,0,44,40];var Btj=[44,0,240,40];var Btk=[240,0,240
,40];var Btl="\u25C9";var BaZ="\u25CB";var Btm=[75,4,215,34];var Btn=[47,4,73,34
];var Ba0=[17,4,45,34];var Bto=[0,0,138,30];var Btp=[47,4,215,34];var A0v="Unhandled MotherSelectionFilterMode: ";
var Btq="Read only!";var Btr="actions array too small to hold all actions";var Bts=[
120,40];var Btt=[120,0];var Btu=[5,0,115,40];var Btv=[0,0,205,40];var Btw=[59,4,
170,34];var Btx=[59,1,173,37];var Bty=[175,1,205,37];var Btz=[0,0,37,40];var BtA=[
115,98,205,188];var BtB=[0,40,235,100];var BtC=[2,200,240,280];var BtD=" 01234";
var BtE=[0,0];var BtF=[33,63];var BtG=[25,56];var BtH="Unknown transponder image type: ";
var AIO=[0,0,82,82];var BtI=[0,0,81,26];var BtJ=[105,120,195,210];var BtK=[10,140
,100,230];var Ba1="Unhandled EartagNrAssignmentMode: ";var BtL="Unhandled Gender";
var BtM=[10,35,35,75];var BtN=[44,40,202,70];var BtO=[204,35,232,75];var BtP="Unvalid FatoryResetScope";
var Ba2=[0,120,240,200];var BtQ=[144,0,192,40];var BtR=[144,0,240,40];var BtS=[195
,0,245,50];var BtT=[120,0,120,40];var BtU=[140,0,240,30];var BtV=[30,0,232,40];var
BtW=[60,0,160,40];var BtX=[160,0,200,40];var BtY=[150,17,200,40];var BtZ=[155,40
];var Bt0=[155,0];var Bt1=[146,80,240,160];var Bt2=[56,80,146,160];var Bt3=[0,80
,56,160];var Bt4=[13,107,47,141];var Bt5=[74,109,104,139];var Bt6=[50,100,130,150
];var Bt7=[55,112,145,140];var Bt8=[146,112,236,140];var Bt9=[150,86,223,110];var
AIP=[0,40,240,120];var Bt_="Menu item for animal table field not found";var Ba3=[
0,360,240,440];var Bt$=[0,440,240,520];var Bua=[5,40,235,104];var Bub=[120,108,226
,218];var Buc=[20,120,110,210];var Bud=[5,223,235,280];var Bue=[0,0,64,30];var Buf=[
44,0,64,30];var Bug=[185,5,225,35];var Buh=[170,5,234,35];var Ba4=[0,80,240,200];
var Bui="Error!";var Buj="Unhandled number of digits";var Buk=[0,0,126,30];var Bul=[
22,5,149,35];var Bum=[149,0,232,40];var Ba5=[5,20];var Bun=[5,0];var Buo="Unhandled AnimalIdAutoGenerationMethod: ";
var Bup=[4,440,236,520];var Buq="Unhandled TransponderAssignmentIdChangeMethod: ";
var Bur="\n";var Bus="%";var But=[0,0,160,120];var Buu=[2,2,157,117];var Buv=[50
,70];var Buw=[50,50];var Bux=[0,0,168,40];var Buy=[168,0,240,40];var Buz=[0,47,232
,77];var BuA=[65,0,101,40];var BuB=[135,0,175,40];var BuC=[85,17,135,40];var BuD=[
125,17,175,40];var BuE=[40,0];var Ba6=[0,40,230,280];var BuF="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuG="ERROR: Received more animal table fields than expected!";
var BuH=[0,80,240,130];var BuI="Unhandled Device::MassDeregistrationCriterion: ";
var Ba7="Unhandled BackupError: ";var BuJ="Unhandled PopupId: ";var BuK=[203,0,240
,40];var BuL=[168,0,203,40];var BuM=[35,0,152,40];var BuN=[0,0,84,40];var BuO=[84
,0,167,40];var BuP="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMM={Device:null,A6p:null,GJ:null,Init:function(aArg){},DriveCursorHitting:function(
Ti,BH,Fe){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GJ._Init.call(this.
GJ={I:this},0);this.__proto__=C.AMM;this.H(Cf);this.J(this.GJ,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6p=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J_=
this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GJ._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GJ.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6p)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5x._variants();
},K:null,_className:"Application::Application"};C.Asx=[240,320];C.AB={Background:
null,Ek:null,ADn:null,An5:0,Init:function(aArg){A.pe([this,this.A04],this);A.pe([
this,this.Bfj],this);},LT:function(G){},A04:function(s){this.LT(s);},CC:function(
G){},AIR:function(s){this.CC(s);},E3:function(G){},AyR:function(s){this.E3(s);},
Dq:function(E){if(this.ADn===E)return;this.ADn=E;A.pe([this,this.Bfj],this);},Bfj:
function(G){var B;if(!!this.ADn)this.Ek.Ab4((C.BR.isPrototypeOf(B=A._NewObject(this.
ADn,0))?B:null));else this.Ek.Ab4(null);},_Init:function(aArg){C.Abl._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cf
);this.Background.L(A.jb.CU);this.Ek.H(BD);this.Ek.As(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abl;this.
Background._Done();this.Ek._Done();C.Abl._Done.call(this);},_ReInit:function(){C.
Abl._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abl._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WS={Im:null,Zr:function(E){var B;if(this.Im===E)return;if(!!this.Im)this.AqE(
this.Im,null,null,null,[B=this.Im,B.AyR],null,false);this.Im=E;if(!!this.Im)this.
AkI(this.Im,null,null,null,null,null,null,[B=this.Im,B.AIR],null,false);},AEJ:function(
){return this.Im;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WS;this.H([0,0,C.Asx[0],C.Asx[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OF={U$:null,Q:null,AnK:null,ZE:null,NY:null,OD:null,TJ:null,TK:null,AGo:255,
Hf:function(G){var F;if(!!this.Q){this.A2z();var Ac_=(F=this.Q,F[1].call(F[0]));
if(Ac_>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.OD.L((this.OD.AQ&0x00FFFFFF
)|(this.AlK(Ac_,0,30)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF)|(this.AlK(Ac_,31,60
)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlK(Ac_,61,100)<<24));}},A02:function(
s){this.Hf(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A02],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A02],E,0);if(!!E)A.pe([this,
this.A02],this);},A3N:function(G){var F;if(!!this.AnK)this.ZE.As((F=this.AnK,F[1
].call(F[0])));else this.ZE.As(false);this.A_O(255);},A_H:function(E){if(A.aaZ(this.
AnK,E))return;if(!!this.AnK)A.z$([this,this.A3N],this.AnK,0);this.AnK=E;if(!!E)A.
zX([this,this.A3N],E,0);if(!!E)A.pe([this,this.A3N],this);},A_O:function(E){if(this.
AGo===E)return;this.AGo=E;if(!!this.U$)this.U$.L((this.U$.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlK:function(A08,Bcv,BxV){if(A08<Bcv)return 0;else if((A08>=Bcv)&&(A08<
BxV))return this.AGo&0xFF;else return 255;},A2z:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U$=this.TK;else if((F=this.Q,F[1].call(F[0]))>
30)this.U$=this.TJ;else this.U$=this.OD;}else this.U$=null;},BlK:function(){return this.
AGo;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZE._Init.call(this.ZE={
I:this},0);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.AK._Init.call(this.OD={
I:this},0);A.acg.AK._Init.call(this.TJ={I:this},0);A.acg.AK._Init.call(this.TK={
I:this},0);this.__proto__=C.OF;this.H(E6);this.ZE.Fp(2000);this.NY.H(E6);this.NY.
L(A.jb.Text);this.OD.H(Hq);this.OD.L(A.jb.E1);this.TJ.H(I0);this.TJ.L(A.jb.E1);this.
TK.H(Iv);this.TK.L(A.jb.E1);this.J(this.NY,0);this.J(this.OD,0);this.J(this.TJ,0
);this.J(this.TK,0);this.ZE.Q=[this,this.BlK,this.A_O];this.NY.Ax(A.aaL(A.ach.AMW
));},_Done:function(){this.__proto__=A.Core.P;this.ZE._Done();this.NY._Done();this.
OD._Done();this.TJ._Done();this.TK._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZE._ReInit();this.NY._ReInit();this.OD._ReInit(
);this.TJ._ReInit();this.TK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnK)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZE={_Init:function(aArg){A.acl.Gn._Init.call(
this,aArg);this.__proto__=C.ZE;this.AkU=true;this.B3=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GJ:null,AR:null,Background:null,OF:null,Bo:
null,Dn:null,La:0,Avk:0,Avl:0,AoY:0,LM:false,KL:false,Qv:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GD=this.Bo.Bw;if(!He){this.AoY=A.jb.CU;this.La=A.jb.Text;}else if(GD){this.AoY=
this.Avk;this.La=this.Avl;}else if(Fu){this.AoY=this.Avk;this.La=this.Avl;}else{
this.AoY=A.jb.CU;this.La=A.jb.Text;}this.Background.L(this.AoY);if(!!this.GJ){this.
GJ.WH(this.AoY);this.GJ.Df(this.La);}this.LM=He;this.KL=Fu;this.Qv=GD;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiO:function(G){if(this.Dn.Acj)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);},Ab4:function(
E){if(this.GJ===E)return;if(!!this.GJ)this.HP(this.GJ);this.GJ=E;if(!!this.GJ)this.
J(this.GJ,0);this.Ba(E);this.Am();},A_p:function(E){if(this.Avk===E)return;this.
Avk=E;this.Am();},A_q:function(E){if(this.Avl===E)return;this.Avl=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.OF._Init.call(this.OF={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BF._Init.call(this.Dn={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.CU);
this.OF.H(O9);this.La=A.jb.Text;this.Bo.PX(0);this.Bo.WI(50);this.Dn.Filter=1;this.
Avk=A.jb.AV;this.Avl=A.jb.Bm;this.AoY=A.jb.Text;this.J(this.Background,0);this.J(
this.OF,0);this.OF.Au([B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyS]);this.OF.
A_H([B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyT]);this.Bo.MK=[this,this.Qu];
this.Dn.BG=[this,this.AiO];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OF._Done();this.Bo._Done();this.Dn._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OF._ReInit();this.Bo._ReInit();this.Dn._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X6={AeN:null,UG:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E3:function(G){if(this.K&&this.K.E3)return this.K.E3.apply(this,arguments);else
return C.AB.E3.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeN={I:this},0);A.acg.Text._Init.call(this.UG={I:
this},0);this.__proto__=C.X6;this.AeN.H(P_);this.UG.H(P$);this.UG.R(A.jV);this.UG.
L(A.jb.Text);this.UG.Z(false);this.J(this.AeN,0);this.J(this.UG,0);this.AeN.Ax(null
);this.UG.S(A.aaL(A.fl.EK));var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeN._Done();this.UG._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeN._ReInit();this.UG._ReInit();this.UG.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X6._variants();},K:null,_className:"Application::BootScreen"};C.AU_={AAN:function(
G){A._GetAutoObject(C.A5).Ab$(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AU_;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.Avx={DY:null,Y:null,Yg:null,Yh:null,VM:null,X9:null
,VN:null,X7:null,Ya:null,TO:null,X$:null,Yi:null,Ay:null,CP:function(){this.DK(this
);},Init:function(aArg){var B;A.zX([this,this.DK],[B=A._GetAutoObject(A.Device.Device
),B.Arx,B.Atl],0);A._GetAutoObject(A.Device.Helper).AkM();this.Ba(this.VM);this.
N.Ct(A.aaL(A.ach.ADT));A.pe([this,this.DK],this);},Ba:function(E){var B;var A3n=
this.AV;C.AB.Ba.call(this,E);if((this.AV!==A3n)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ4=A._NewObject(A.acl.AGl,0);AJ4.Fp(250);AJ4.HO(1);AJ4.WK(6);this.
Y.HI(this.AV,true,AJ4,null);}},CC:function(G){this.A4T(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Asr();},Fh:function(G){
var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.
Ay.MI(-this.Y.Br[1]);},Ik:function(G){var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VM)A._GetAutoObject(C.A5).Cb(35);else if(Cy===this.X9)A._GetAutoObject(
C.A5).Cb(34);else if(Cy===this.Ya)A._GetAutoObject(C.A5).Cb(69);else if(Cy===this.
VN)A._GetAutoObject(C.A5).Cb(8);else if(Cy===this.X7)A._GetAutoObject(C.A5).Cb(50
);else if(Cy===this.TO)A._GetAutoObject(C.A5).Cb(25);else if(Cy===this.Yg)A._GetAutoObject(
C.A5).Cb(77);else if(Cy===this.Yh)A._GetAutoObject(C.A5).Cb(70);else if(Cy===this.
Yi)A._GetAutoObject(C.A5).Cb(6);else if(Cy===this.X$)A._GetAutoObject(C.A5).Cb(63
);},BA7:function(G){A._GetAutoObject(A.Device.Device).Ae0(!A._GetAutoObject(A.Device.
Device).AmQ);},DK:function(G){if(A._GetAutoObject(A.Device.Device).AmQ)this.N.Hy((
A.aaR(A.acf.A7S)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7S)+CR)+A.aaR(A.acf.A8x).toLowerCase());},Adu:function(G){A._GetAutoObject(A.Device.
Device).Dv(1);},A4T:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).MC());this.VN.ZA(A._GetAutoObject(A.Device.Device).An.B8().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.Yg={I:this
},0);C.Fm._Init.call(this.Yh={I:this},0);C.Fm._Init.call(this.VM={I:this},0);C.Fm.
_Init.call(this.X9={I:this},0);C.QY._Init.call(this.VN={I:this},0);C.Fm._Init.call(
this.X7={I:this},0);C.Fm._Init.call(this.Ya={I:this},0);C.Fm._Init.call(this.TO={
I:this},0);C.Fm._Init.call(this.X$={I:this},0);C.Fm._Init.call(this.Yi={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.Avx;this.Background.L(A.
jb.CU);this.N.As(false);this.N.Z(true);this.Dq(C.AqZ);this.DY.A1(0x3F);this.DY.H(
Fc);this.DY.L(A.jb.CJ);this.Y.H(L8);this.Y.JZ(9);this.Yg.H(Qa);this.Yg.Aj(true);
this.Yg.T(A.aaR(A.acf.G7));this.Yh.H(J9);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.
A8e));this.VM.H(Oh);this.VM.Aj(true);this.VM.T(A.aaR(A.acf.Vz));this.X9.H(Qb);this.
X9.Aj(true);this.X9.T(A.aaR(A.acf.TB));this.VN.H(MR);this.VN.Aj(true);this.VN.T(
A.aaR(A.acf.APL));this.X7.H(Te);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.Animal));
this.Ya.H(J9);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.A7V));this.TO.H(UW);this.TO.
As(true);this.TO.Aj(true);this.TO.Z(true);this.TO.T(A.aaR(A.acf.A6F));this.X$.H(
Z8);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.Device));this.Yi.H(W$);this.Yi.Aj(true
);this.Yi.T(A.aaR(A.acf.Settings));this.Ay.H(Iw);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yg,0);this.J(this.Yh,0);this.J(this.VM,0);this.J(this.X9,0);this.
J(this.VN,0);this.J(this.X7,0);this.J(this.Ya,0);this.J(this.TO,0);this.J(this.X$
,0);this.J(this.Yi,0);this.J(this.Ay,0);this.N.CF=[this,this.BA7];this.N.Ce=[this
,this.Adu];this.Y.Em=[this,this.Fh];this.Yg.AR=[this,this.Ik];this.Yg.DC(A.aaL(A.
ach.ADW));this.Yh.AR=[this,this.Ik];this.Yh.DC(A.aaL(A.ach.ADZ));this.VM.AR=[this
,this.Ik];this.VM.DC(A.aaL(A.ach.APQ));this.X9.AR=[this,this.Ik];this.X9.DC(A.aaL(
A.ach.AP3));this.VN.AR=[this,this.Ik];this.VN.DC(A.aaL(A.ach.AQq));this.X7.AR=[this
,this.Ik];this.X7.DC(A.aaL(A.ach.APU));this.Ya.AR=[this,this.Ik];this.Ya.DC(A.aaL(
A.ach.AQA));this.TO.AR=[this,this.Ik];this.TO.DC(A.aaL(A.ach.AQf));this.X$.AR=[this
,this.Ik];this.X$.DC(A.aaL(A.ach.AQc));this.Yi.AR=[this,this.Ik];this.Yi.DC(A.aaL(
A.ach.AQU));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yg._Done();this.Yh._Done();this.VM._Done();this.X9._Done();
this.VN._Done();this.X7._Done();this.Ya._Done();this.TO._Done();this.X$._Done();
this.Yi._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yg._ReInit();this.Yh.
_ReInit();this.VM._ReInit();this.X9._ReInit();this.VN._ReInit();this.X7._ReInit(
);this.Ya._ReInit();this.TO._ReInit();this.X$._ReInit();this.Yi._ReInit();this.Ay.
_ReInit();this.Yg.T(A.aaR(A.acf.G7));this.Yh.T(A.aaR(A.acf.A8e));this.VM.T(A.aaR(
A.acf.Vz));this.X9.T(A.aaR(A.acf.TB));this.VN.T(A.aaR(A.acf.APL));this.X7.T(A.aaR(
A.acf.Animal));this.Ya.T(A.aaR(A.acf.A7V));this.TO.T(A.aaR(A.acf.A6F));this.X$.T(
A.aaR(A.acf.Device));this.Yi.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Jl:null,IZ:null,TH:null,AsN:0,Init:function(aArg){var B;A.zX([
this,this.Bb9],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0I],0);A.pe([this,this.
Bb9],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An6();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhH();},E3:function(G){A._GetAutoObject(A.Device.
Device).AnY();},Al4:function(G){var F;this.Am();this.TH.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aem.As(true);if(!this.TH.Bw)(F=this.TH.Q,F[2].call(F[0],this.TH.
B3));},Bb9:function(s){this.Al4(s);},An6:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gk);break;case 3:this.Background.
L(A.jb.Ia);break;default:this.Background.L(A.jb.CJ);}},AkB:function(E){if(this.AsN===
E)return;this.AsN=E;this.Jl.AkB(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jl._Init.call(this.Jl={I:this}
,0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.call(this.TH={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UX);this.Number.Lv(true);this.Number.L(A.jb.Text);this.Jl.H(Z9);this.Jl.AkB(0);
this.IZ.H(UY);this.IZ.L(A.jb.AV);this.IZ.Zt(true);this.TH.Fp(1750);this.TH.Ut(750
);this.TH.Akw(0);this.TH.As(true);this.TH.B3=3;this.J(this.Number,0);this.J(this.
Jl,0);this.J(this.IZ,0);this.Number.S(A.aaL(A.fl.Af));this.IZ.Ax(A.aaL(A.ach.ADY
));this.TH.Q=[B=this.IZ,B.ASH,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jl._Done();this.IZ._Done();this.TH._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jl._ReInit();this.IZ._ReInit();this.TH._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C9:null,ADK:null,AR:null,Bo:null,Dn:null,Background:
null,MB:null,OJ:null,Q4:null,G9:null,A5Y:true,LM:false,KL:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hi.Bl.call(this,aSize);this.MB.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q4.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OJ.H(this.Q4.M);this.G9.H([].concat(0,this.G9.M.slice(1,4)));this.G9.H(A.abN(
this.G9.M,aSize[0]));this.G9.H(A.abP(this.G9.M,0));this.G9.H([].concat(this.G9.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hi.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GD=this.Bo.Bw;if(!He){this.Q4.L(A.jb.Am2);this.
G9.L(A.jb.CJ);this.OJ.Z(true);this.OJ.L(A.jb.ARa);this.MB.Z(false);}else if(GD){
this.Q4.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OJ.Z(false);this.MB.Z(true);}else if(
Fu){this.Q4.L(A.jb.Bm);this.G9.L(A.jb.Bm);this.OJ.Z(false);this.MB.Z(true);}else{
this.Q4.L(A.jb.Text);this.G9.L(A.jb.Text);this.OJ.Z(true);this.OJ.L(A.jb.CU);this.
MB.Z(false);}this.LM=He;this.KL=Fu;this.Qv=GD;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiO:function(G){if(this.Dn.Acj)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DL===E)return;
this.DL=E;this.G9.R(E);},DC:function(E){if(this.C9===E)return;this.C9=E;this.Q4.
Ax(E);this.OJ.Ax(E);},Ab3:function(E){if(this.A5Y===E)return;this.A5Y=E;this.G9.
Z(E);},Ab6:function(E){if(this.ADK===E)return;this.ADK=E;this.MB.Ax(E);this.MB.H(
A.abK(this.MB.M,E.FrameSize));},_Init:function(aArg){C.Hi._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Dn={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.MB={
I:this},0);A.acg.Ap._Init.call(this.OJ={I:this},0);A.acg.Ap._Init.call(this.Q4={
I:this},0);C.CG._Init.call(this.G9={I:this},0);this.__proto__=C.Fm;this.H(Z_);this.
Bo.PX(0);this.Bo.WI(50);this.Dn.Filter=1;this.Background.H(Xa);this.Background.Z(
false);this.MB.A1(0x14);this.MB.L(A.jb.AV);this.MB.Cw(0);this.OJ.L(A.jb.CU);this.
OJ.Cw(1);this.G9.H(Z$);this.J(this.Background,0);this.J(this.MB,0);this.J(this.OJ
,0);this.J(this.Q4,0);this.J(this.G9,0);this.Bo.MK=[this,this.Qu];this.Dn.BG=[this
,this.AiO];this.MB.Ax(A.aaL(A.ach.N1));this.OJ.Ax(A.aaL(A.ach.AvI));this.Q4.Ax(A.
aaL(A.ach.AvI));this.G9.S(A.aaL(A.fl.Af));this.G9.AY(A.aaL(A.fl.Ak));this.G9.Cl(
A.aaL(A.fl.Bg));this.ADK=A.aaL(A.ach.N1);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hi;this.Bo._Done();this.Dn._Done();this.Background._Done();this.MB._Done(
);this.OJ._Done();this.Q4._Done();this.G9._Done();C.Hi._Done.call(this);},_ReInit:
function(){C.Hi._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit();this.Background.
_ReInit();this.MB._ReInit();this.OJ._ReInit();this.Q4._ReInit();this.G9._ReInit(
);this.G9.S(A.aaL(A.fl.Af));this.G9.AY(A.aaL(A.fl.Ak));this.G9.Cl(A.aaL(A.fl.Bg)
);},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axh:null,Background:null,O5:null,Asi:0,Ak5:10,AjB:100,AQ:0,AoR:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O5.H([].concat(2,this.O5.M.slice(1,4)));this.O5.H(A.abN(this.O5.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var XG=this.Ak5<this.AjB;var AJC=(B=
this.M)[3]-B[1];var A3a=10;var Aur=AJC;var A4Q=0;if(10>AJC)A3a=AJC;if(this.Ak5<this.
AjB)Aur=((Aur*this.Ak5)/this.AjB)|0;if(Aur<A3a)Aur=A3a;if(this.Ak5<this.AjB)A4Q=((
this.BlI()*(AJC-Aur))/(this.AjB-this.Ak5))|0;this.O5.H(A.abP(this.O5.M,A4Q));this.
O5.H([].concat(this.O5.M.slice(0,3),A4Q+Aur));this.O5.Z(XG);this.Background.Z(XG
);if(!!this.Axh&&(this.AoR!==XG))A.pe(this.Axh,this);this.AoR=XG;},BlI:function(
){var E=this.Asi;var HD=this.AjB-this.Ak5;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},MI:function(E){if(E<0)E=0;if(this.Asi===E)return;this.Asi=E;this.Am();},MJ:function(
E){if(E<0)E=0;if(this.Ak5===E)return;this.Ak5=E;this.Am();},MH:function(E){if(E<
0)E=0;if(this.AjB===E)return;this.AjB=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O5.L(E);},BnQ:function(E){if(A.aa0(this.Axh,E))return;this.
Axh=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.O5={I:this},0);this.__proto__=
C.Ay;this.H(Aaa);this.As(false);this.AQ=A.jb.AV;this.Background.A1(0x0);this.Background.
H(UZ);this.Background.L(A.jb.CU);this.O5.A1(0x0);this.O5.H(UZ);this.O5.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O5,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O5._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O5._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axh)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hj:null,Y:null,Ay:null,Ap:null,A7l:A.jV,Init:function(aArg){A.pe([this,this.
ABk],this);},DF:function(G){var B;C.AB.DF.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.ABk(this);},Al1:
function(G){if(!!this.N.CF)A.pe(this.N.CF,this);},ApI:function(G){if(!!this.N.Ca
)A.pe(this.N.Ca,this);},AAN:function(G){if(!!this.N.Ce)A.pe(this.N.Ce,this);},Fh:
function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[
3]-B[1]);this.Ay.MI(-this.Y.Br[1]);A.pe([this,this.BBt],this);},ABk:function(G){
var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(A.
aaL(A.ach.YF));this.N.CF=[this,this.Ew];if(!!GZ&&!!GZ.Amp){this.N.E5(A.jV);this.
N.JD.CZ(255);this.N.ArP(GZ.AqP);this.N.Ct(GZ.AvF);this.N.Ce=GZ.Amp;}else{this.N.
E5(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!GZ&&!!GZ.Agu){this.N.CS(GZ.AxM);this.
N.GW.CZ(GZ.Axi);this.N.Any(GZ.AmS);this.N.C3(GZ.Aq7);this.N.Ca=GZ.Agu;}else{this.
N.CS(A.jV);this.N.C3(null);this.N.Ca=null;}},Jf:function(E){if(this.A7l===E)return;
this.A7l=E;this.Hj.R(E);},Ew:function(G){A._GetAutoObject(C.A5).Fz();},BBt:function(
G){var B;var BAn=this.Ay.Background.Fo();var Bem=(BAn?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajc=X;
X=X.Ah;if(((Ajc.U&0x400)===0x400)){if(!!(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null)
){var Bes=(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null);Bes.DD([Bem,Bes.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajc)?Ajc:null)){var Bgm=(A.Core.Eu.isPrototypeOf(Ajc
)?Ajc:null);Bgm.H(A.abN(Bgm.M,Bem));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hj={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hj.H(Xb);this.Hj.As(false);this.Hj.R(A.aaR(A.
acf.Settings));this.Hj.L(A.jb.Text);this.Y.H(Fc);this.Y.JZ(1);this.Ay.H(Iw);this.
Ap.H(O_);this.Ap.L(A.jb.Text);this.J(this.Hj,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hj.S(A.aaL(A.fl.Ks));this.Hj.AY(A.aaL(A.fl.HJ));this.Y.
Em=[this,this.Fh];this.Ap.Ax(A.aaL(A.ach.ADr));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hj._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hj._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hj.R(A.aaR(A.acf.Settings
));this.Hj.S(A.aaL(A.fl.Ks));this.Hj.AY(A.aaL(A.fl.HJ));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.AqZ={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhi],[B=
A._GetAutoObject(A.Device.Helper),B.U4,B.U7],0);},Df:function(E){C.BR.Df.call(this
,E);this.Text.L(E);},Bhi:function(G){this.Text.R(A._GetAutoObject(A.acj.KQ).Bjh(
A._GetAutoObject(A.Device.Helper).Du()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AqZ;this.Timer.WI(1);this.Timer.As(true);
this.Text.H(Aab);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MK=[this,this.
Bhi];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KW:0xFFFFFFFF,LW:0,Df:function(E){if(
this.KW===E)return;this.KW=E;},WH:function(E){if(this.LW===E)return;this.LW=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oi
);},_className:"Application::HeaderContent"};C.N={V2:null,V3:null,V4:null,Ag0:null
,Ag1:null,Ag2:null,CF:null,Ce:null,Ca:null,Background:null,NR:null,Jj:null,JD:null
,GW:null,PD:null,IS:null,Li:null,T2:null,T3:null,An0:A.jV,An1:A.jV,An2:A.jV,Aq8:
0,Aq9:0,Aq_:0,Ahi:0,ZG:false,WQ:false,Aso:false,AsD:false,AsC:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.V2)this.Jj.S(this.V2);if(!!this.V3)this.JD.S(this.
V3);if(!!this.V4)this.GW.S(this.V4);switch(this.Ahi){case 0:{this.NR.Z(false);this.
Jj.L(A.jb.Bm);this.JD.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PD.L(A.jb.Bm);this.IS.L(
A.jb.Bm);this.Li.L(A.jb.Bm);}break;case 1:{if(!this.Ag0)this.NR.H(A.aaT(this.Jj.
ASz(),Rn));else this.NR.H(this.PD.Dc());this.NR.Z(true);this.Jj.L(A.jb.Text);this.
JD.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PD.L(A.jb.Text);this.IS.L(A.jb.Bm);this.Li.
L(A.jb.Bm);}break;case 3:{if(!this.Ag2)this.NR.H(A.aaT(this.GW.ASz(),Rn));else this.
NR.H(this.Li.Dc());this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JD.L(A.jb.Bm);this.GW.
L(A.jb.Text);this.PD.L(A.jb.Bm);this.IS.L(A.jb.Bm);this.Li.L(A.jb.Text);}break;case
2:{if(!this.Ag1)this.NR.H(A.aaT(this.JD.ASz(),Rn));else this.NR.H(this.IS.Dc());
this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JD.L(A.jb.Text);this.GW.L(A.jb.Bm);this.
PD.L(A.jb.Bm);this.IS.L(A.jb.Text);this.Li.L(A.jb.Bm);}break;default:{this.NR.Z(
false);A.ab5("%s",Xc);}}if(!!this.PD.Al){this.PD.Z(true);this.Jj.Z(false);}else{
this.PD.Z(false);this.Jj.Z(true);}if(this.An1.length<=0){this.IS.Z(true);this.JD.
Z(false);}else{this.IS.Z(false);this.JD.Z(true);}if(!!this.Li.Al){this.Li.Z(true
);this.GW.Z(false);}else{this.Li.Z(false);this.GW.Z(true);}},Hy:function(E){if(this.
An0===E)return;this.An0=E;this.Jj.R(E);this.Am();},E5:function(E){if(this.An1===
E)return;this.An1=E;this.JD.R(E);this.Am();},CS:function(E){if(this.An2===E)return;
this.An2=E;this.GW.R(E);this.Am();},AFv:function(E){if(this.Ahi===E)return;this.
Ahi=E;this.Am();},AFn:function(E){if(this.V2===E)return;this.V2=E;this.Jj.S(E);this.
Am();},ArP:function(E){if(this.V3===E)return;this.V3=E;this.JD.S(E);this.Am();},
Any:function(E){if(this.V4===E)return;this.V4=E;this.GW.S(E);this.Am();},A32:function(
G){this.Am();},C2:function(E){if(this.Ag0===E)return;this.Ag0=E;this.PD.Ax(E);this.
Am();},Ct:function(E){if(this.Ag1===E)return;this.Ag1=E;this.IS.Ax(E);this.Am();
},C3:function(E){if(this.Ag2===E)return;this.Ag2=E;this.Li.Ax(E);this.Am();},OU:
function(E){if(this.AsC===E)return;this.AsC=E;this.T2.Z(E);if(E)this.Jj.H([].concat(
this.T2.M[2],this.Jj.M.slice(1,4)));else this.Jj.H([].concat(0,this.Jj.M.slice(1
,4)));this.Am();},OV:function(E){if(this.AsD===E)return;this.AsD=E;this.T3.Z(E);
if(E)this.GW.H(A.abN(this.GW.M,this.T3.M[0]));else this.GW.H(A.abN(this.GW.M,this.
M[2]));this.Am();},Bnc:function(E){if(this.Aq8===E)return;this.Aq8=E;this.PD.Cw(
E);this.Am();},ATm:function(E){if(this.Aq9===E)return;this.Aq9=E;this.IS.Cw(E);this.
Am();},A_u:function(E){if(this.Aq_===E)return;this.Aq_=E;this.Li.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NR={I:this},0);C.CG._Init.call(this.Jj={I:this
},0);C.CG._Init.call(this.JD={I:this},0);C.CG._Init.call(this.GW={I:this},0);A.acg.
Ap._Init.call(this.PD={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.
Ap._Init.call(this.Li={I:this},0);A.acg.Ap._Init.call(this.T2={I:this},0);A.acg.
Ap._Init.call(this.T3={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.Ad$);this.NR.H(Xd);this.NR.
L(A.jb.CU);this.NR.Z(false);this.Jj.A1(0x14);this.Jj.H(Tf);this.Jj.A4(0x12);this.
JD.A1(0x14);this.JD.H(Xe);this.JD.A4(0x12);this.GW.H(Aac);this.PD.H(Xf);this.IS.
H(Xg);this.Li.H(Xh);this.Li.Z(false);this.T2.H(Xi);this.T2.Z(false);this.T3.H(Xj
);this.T3.Z(false);this.J(this.Background,0);this.J(this.NR,0);this.J(this.Jj,0);
this.J(this.JD,0);this.J(this.GW,0);this.J(this.PD,0);this.J(this.IS,0);this.J(this.
Li,0);this.J(this.T2,0);this.J(this.T3,0);this.Jj.S(A.aaL(A.fl.Ak));this.Jj.AY(A.
aaL(A.fl.Bg));this.Jj.Q7([this,this.A32]);this.JD.S(A.aaL(A.fl.Ak));this.JD.AY(A.
aaL(A.fl.Bg));this.JD.Q7([this,this.A32]);this.GW.S(A.aaL(A.fl.Ak));this.GW.AY(A.
aaL(A.fl.Bg));this.GW.Q7([this,this.A32]);this.V2=A.aaL(A.fl.Ak);this.V3=A.aaL(A.
fl.Ak);this.V4=A.aaL(A.fl.Ak);this.PD.Ax(null);this.IS.Ax(null);this.Li.Ax(null);
this.T2.Ax(A.aaL(A.ach.AMP));this.T3.Ax(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NR._Done();this.
Jj._Done();this.JD._Done();this.GW._Done();this.PD._Done();this.IS._Done();this.
Li._Done();this.T2._Done();this.T3._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NR._ReInit();this.Jj.
_ReInit();this.JD._ReInit();this.GW._ReInit();this.PD._ReInit();this.IS._ReInit(
);this.Li._ReInit();this.T2._ReInit();this.T3._ReInit();this.Jj.S(A.aaL(A.fl.Ak)
);this.Jj.AY(A.aaL(A.fl.Bg));this.JD.S(A.aaL(A.fl.Ak));this.JD.AY(A.aaL(A.fl.Bg)
);this.GW.S(A.aaL(A.fl.Ak));this.GW.AY(A.aaL(A.fl.Bg));this.AFn(A.aaL(A.fl.Ak));
this.ArP(A.aaL(A.fl.Ak));this.Any(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADv={Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper),B.Arz,B.AkA],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper)
,B.A9r,B.AFT],0);A.pe([this,this.Nz],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhD)this.Ab5(A._GetAutoObject(A.Device.Helper).AhD.AOV());else this.
Ab5(-1);if(!!A._GetAutoObject(A.Device.Helper).UD)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak3(A._GetAutoObject(A.Device.Helper).UD.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.__proto__=C.ADv;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG4={Ey:null,Ei:null,
FY:null,X4:null,TI:null,IL:null,IM:null,Init:function(aArg){},WO:function(G){var
B;C.DR.WO.call(this,G);var AKR=this.AzA(A._GetAutoObject(A.Device.Helper).UJ.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALG=this.AzA(A._GetAutoObject(
A.Device.Helper).UK.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAc=
this.AzA(A._GetAutoObject(A.Device.Device).AcF);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKR));this.IM.H(A.abO(this.
IM.M,this.Ey.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALG));this.
IL.H(A.abO(this.IL.M,(this.Ei.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))+2));this.FY.
H(A.abP(this.FY.M,this.Ei.M[3]));this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.
M)[3]-B[1])-BAc));this.TI.H(A.abO(this.TI.M,this.FY.M[3]-((((B=this.TI.M)[3]-B[1
])/2)|0)));this.X4.H(A.abP(this.X4.M,this.FY.M[3]));this.X4.H([].concat(this.X4.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJP:function(AoN){return A._GetAutoObject(A.
Device.Converter).AkY(AoN);},AKl:function(){return A._GetAutoObject(A.acj.Temperature
).AlL();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ey={I:this},0);A.acg.AK._Init.call(this.Ei={I:this},0);A.acg.AK._Init.call(this.
FY={I:this},0);A.acg.AK._Init.call(this.X4={I:this},0);A.acg.AK._Init.call(this.
TI={I:this},0);A.acg.AK._Init.call(this.IL={I:this},0);A.acg.AK._Init.call(this.
IM={I:this},0);this.__proto__=C.AG4;this.Ey.A1(0xD);this.Ey.H(Aad);this.Ey.L(A.jb.
Gk);this.Ei.A1(0xD);this.Ei.H(Tg);this.Ei.L(A.jb.Ia);this.FY.A1(0xD);this.FY.H(Aae
);this.FY.L(A.jb.E1);this.X4.A1(0xD);this.X4.H(AfB);this.X4.L(A.jb.Afu);this.TI.
A1(0xD);this.TI.H(Aaf);this.TI.Awu(A.jb.Afu);this.TI.Awv(A.jb.Afu);this.TI.Awx(A.
jb.E1);this.TI.Aww(A.jb.E1);this.IL.A1(0xD);this.IL.H(Xk);this.IL.Awu(A.jb.E1);this.
IL.Awv(A.jb.E1);this.IL.Awx(A.jb.Ia);this.IL.Aww(A.jb.Ia);this.IM.A1(0xD);this.IM.
H(Aag);this.IM.Awu(A.jb.Ia);this.IM.Awv(A.jb.Ia);this.IM.Awx(A.jb.Gk);this.IM.Aww(
A.jb.Gk);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY,-1);this.J(this.X4
,-1);this.J(this.TI,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done(
);this.X4._Done();this.TI._Done();this.IL._Done();this.IM._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FY._ReInit();this.X4._ReInit();this.TI._ReInit();this.IL._ReInit();this.IM.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avm:null,AmS:null,AQm:null,Aq7:null,AqP:null,AvF:null,AR:null,Agu:null,Amp:
null,N:null,Bo:null,QU:null,AxM:A.jV,AU5:false,AGS:false,Apd:false,Axi:255,LM:false
,KL:false,Qv:false,Ai:function(Ae){var B;C.O2.Ai.call(this,Ae);var He=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IF=((Ae&0x40)===0x40);var GD=this.Bo.Bw;var FT=
A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FT=A.jb.Bm;GY=A.jb.Text;}if(!He){this.Background.
L(A.jb.CU);this.V.L(A.jb.CJ);}else if(GD){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IF){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.Am2);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY
);}this.LM=He;this.KL=Fu;this.Qv=GD;this.Apd=IF;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bw$:function(s){this.Qu(s);},H0:function(G){if(this.QU.Acj)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Alj:function(s){this.H0(s);},Ab2:function(E){if(A.aa0(this.Agu,E))return;this.
Agu=E;},A_Z:function(E){if(this.AxM===E)return;this.AxM=E;},Zw:function(E){if(this.
Avm===E)return;this.Avm=E;},Zx:function(E){if(this.AmS===E)return;this.AmS=E;},A_F:
function(E){if(this.Axi===E)return;this.Axi=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DL===E)return;this.DL=E;this.ALo();},A3z:
function(G){},BGZ:function(s){this.A3z(s);},Akv:function(E){if(this.Aq7===E)return;
this.Aq7=E;},L4:function(E){if(A.aa0(this.Amp,E))return;this.Amp=E;},Bm7:function(
E){if(this.AqP===E)return;this.AqP=E;},L7:function(E){if(this.AvF===E)return;this.
AvF=E;},ZB:function(E){if(this.AGS===E)return;this.AGS=E;this.ALo();},ALo:function(
){var B;var M8=this.DL;if(this.AGS)M8=M8+A.aaR(A.acf.Colon);if(this.AU5)M8=M8+Xl;
this.V.R(M8);},ATK:function(E){if(this.AU5===E)return;this.AU5=E;this.ALo();},_Init:
function(aArg){C.O2._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BF._Init.call(this.QU={I:this},0);this.__proto__=C.Co;this.Bo.PX(0);
this.Bo.WI(50);this.Bo.As(false);this.QU.Filter=1;this.Bo.MK=[this,this.Bw$];this.
QU.BG=[this,this.Alj];this.Avm=A.aaL(A.fl.Ak);this.AmS=A.aaL(A.fl.Ak);this.AQm=A.
aaL(A.ach.E2);this.AqP=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O2;this.
Bo._Done();this.QU._Done();C.O2._Done.call(this);},_ReInit:function(){C.O2._ReInit.
call(this);this.Bo._ReInit();this.QU._ReInit();this.Zw(A.aaL(A.fl.Ak));this.Zx(A.
aaL(A.fl.Ak));this.Bm7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O2._Mark.call(
this,D);if((B=this.Avm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agu)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dr={Q:null,Ana:null,Anc:null,Hx:null,H8:null,AM:0,Gr:0,Ga:100,FH:0,Init:function(
aArg){},H0:function(G){this.FH=1;C.Eg.H0.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H8.H([].concat(A.
abe(aSize,AhS),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GD=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H8.L(this.V.AQ);this.Hx.
Z((Fu||GD)&&(this.AM>this.Gr));this.H8.Z((Fu||GD)&&(this.AM<this.Ga));if(this.FH===
6)this.Hx.L(A.jb.E1);if(this.FH===7)this.H8.L(A.jb.E1);},Bfv:function(G){this.FH=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay1],this);this.Bo.As(false);}this.Bo.
As(true);},Qu:function(G){if(this.FH===6)A.pe([this,this.Ay1],this);if(this.FH===
7)A.pe([this,this.Ay2],this);if(this.FH===1)A.pe(this.AR,this);this.FH=0;this.Am(
);},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcT:function(
s){this.C4(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,
this.AcT],this);},Bfw:function(G){this.FH=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay2],this);this.Bo.As(false);}this.Bo.As(true);},Kh:function(G){this.FH=0;}
,Ay2:function(s){this.Kh(s);},Kc:function(G){this.FH=0;},Ay1:function(s){this.Kc(
s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.Ga)E=this.Ga;if(this.AM===E
)return;this.AM=E;this.Am();},Bby:function(Aq){this.Bx(Aq);},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},Uk:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BF._Init.call(this.Ana={I:this},0);A.Core.BF._Init.call(this.Anc={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H8={
I:this},0);this.__proto__=C.Dr;this.H(K2);this.Ana.Filter=6;this.Anc.Filter=7;this.
Background.H(K2);this.V.H(AcL);this.V.R(JE);this.Hx.H(AhT);this.H8.H(Aoc);this.H8.
Cw(1);this.J(this.Hx,0);this.J(this.H8,0);this.Ana.BG=[this,this.Bfv];this.Ana.D1=[
this,this.Bfv];this.Anc.BG=[this,this.Bfw];this.Anc.D1=[this,this.Bfw];this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(null);this.Hx.Ax(A.aaL(A.ach.
Ajr));this.H8.Ax(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ana._Done();this.Anc._Done();this.Hx._Done();this.H8._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Ana._ReInit();this.
Anc._ReInit();this.Hx._ReInit();this.H8._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dt:function(){return-1;},C6:function(aIndex){return-1;},Gm:function(
aIndex){return A.jV;},DZ:function(A9){return-1;},H7:function(){return-1;},Au:function(
E){this.Q=E;},Cc:function(Aq){this.Au(Aq);},AC_:function(aIndex){return null;},ADa:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iu={AxD:null
,BU:null,AHg:A.jV,AVJ:A.jV,Aj1:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dr.Ai.call(this,Ae);if(!this.AxD){this.BU.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.
AVJ);else this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.AHg);}}else(B=
this.AxD)?B[1].call(B[0],this):null;},Kh:function(G){var F;var BP=this.AM;C.Dr.Kh.
call(this,G);this.Bx(this.AM+this.Aj1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;C.
Dr.Kc.call(this,G);this.Bx(this.AM-this.Aj1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IW:function(E){if(this.AHg===E)return;
this.AHg=E;this.Am();},Jg:function(E){if(this.AVJ===E)return;this.AVJ=E;this.Am(
);},ATn:function(E){if(this.Aj1===E)return;this.Aj1=E;},A_W:function(E){if(A.aa0(
this.AxD,E))return;this.AxD=E;},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.CG._Init.call(this.BU={I:this},0);this.__proto__=C.Iu;this.H(K2);this.BU.H(Oj);
this.J(this.BU,-1);this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dr;this.BU._Done();C.Dr._Done.call(this
);},_ReInit:function(){C.Dr._ReInit.call(this);this.BU._ReInit();this.BU.S(A.aaL(
A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dr._Mark.call(this
,D);if((B=this.AxD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,DB:null,HN:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Dr.Bl.call(this,aSize);this.DB.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H8.M[0]+10,this.Hx.M[3]]);this.DB.AFw((B=this.DB.M)[2]-B[0]);this.DB.HI(this.DB.
Gt,true,null,null);},Ai:function(Ae){var B;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GD=this.Bo.Bw;this.DB.AbH(0,this.DB.A0-1);this.Hx.Z(Fu||GD);this.H8.
Z(Fu||GD);},C4:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kh:function(G){var F;var BP=this.AM;C.Dr.Kh.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;
C.Dr.Kc.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gr){E=this.Ga;QA=-this.DB.Wg*this.DB.A0;}if(E>this.Ga){E=this.
Gr;QA=this.DB.Wg;}C.Dr.Bx.call(this,E);if(!!QA)this.DB.Gc(QA);this.DB.GT(this.AM
);if(this.DB.Bkd())this.DB.BpJ(false,false);this.DB.HI(this.DB.Gt,true,this.HN,null
);},Hm:function(G){var B;var Gh=this.DB.G5;var CA=(C.CG.isPrototypeOf(B=this.DB.
Ci)?B:null);if(!CA)return;CA.S(this.V.B7);CA.Aw3(19);CA.AY(this.V.AmR);CA.Bn0(19
);CA.Cl(this.V.AqO);CA.Bn1(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));
else CA.R(Xm);CA.H(A.abK(CA.M,[this.DB.Wg,(B=this.DB.M)[3]-B[1]]));},BwN:function(
s){this.Hm(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gb(0);this.EV(this.AC.Dt()-1);this.DB.JC(this.AC.Dt());this.DB.AbH(0,this.DB.A0-
1);}},_Init:function(aArg){C.Dr._Init.call(this,aArg);A.Core.DB._Init.call(this.
DB={I:this},0);A.acl.Gn._Init.call(this.HN={I:this},0);this.__proto__=C.BX;this.
H(K2);this.DB.N8(C.CG);this.HN.WK(23);this.HN.HO(1);this.HN.Fp(200);this.J(this.
DB,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.DB.Hm=[this,this.BwN
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dr;this.DB._Done();this.HN.
_Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.
DB._ReInit();this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SW={FN:null,OM:null,Dl:null,Av:null,JA:null,HM:null,Px:null,VZ:null,Q3:null,
Yq:null,P9:null,Gx:null,Gw:null,FZ:0,A8:0,Asm:false,Bj$:false,Init:function(aArg
){},Ai:function(Ae){C.Dr.Ai.call(this,Ae);this.Hx.Z(false);this.H8.Z(false);var AtW=
A.jV;if(!!this.Dl){this.Px.R(this.Av.Format(Aod));this.Q3.R(this.Av.Format(AfC));
this.P9.R(this.Av.Format(AhU));}if(this.A8===1){this.HM.Z(true);this.HM.H(this.Px.
M);this.HM.L(this.V.AQ);this.Px.L(this.Background.AQ);this.Q3.L(this.V.AQ);this.
P9.L(this.V.AQ);AtW=A.aaR(A.acf.A6f);}else if(this.A8===2){this.HM.Z(true);this.
HM.H(this.Q3.M);this.HM.L(this.V.AQ);this.Px.L(this.V.AQ);this.Q3.L(this.Background.
AQ);this.P9.L(this.V.AQ);AtW=A.aaR(A.acf.Hk);}else if(this.A8===3){this.HM.Z(true
);this.HM.H(this.P9.M);this.HM.L(this.V.AQ);this.Px.L(this.V.AQ);this.Q3.L(this.
V.AQ);this.P9.L(this.Background.AQ);AtW=A.aaR(A.acf.Year);}else{this.HM.Z(false);
this.Px.L(this.V.AQ);this.Yq.L(this.V.AQ);this.Q3.L(this.V.AQ);this.VZ.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(AtW.length>0){if(this.AGS)this.V.R((((this.DL+AcM)+
AtW)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DL+AcM)+
AtW)+String.fromCharCode(0x29));}else this.ALo();},Qu:function(G){if(this.FH===1
)A.pe([this,this.Ve],this);else if(this.FH===4)A.pe([this,this.AiE],this);else if(
this.FH===5)A.pe([this,this.Aip],this);C.Dr.Qu.call(this,G);},Kh:function(G){switch(
this.A8){case 0:C.Dr.Kh.call(this,G);break;case 3:break;default:this.Adw(this);}
},Kc:function(G){switch(this.A8){case 0:C.Dr.Kc.call(this,G);break;default:this.
Aio(this);}},Ady:function(G){var F;if(!!this.Dl)this.Ur((F=this.Dl,F[1].call(F[0
])));},Ab8:function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Ady
],this.Dl,0);this.Dl=E;if(!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady
],this);},Ur:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.
FZ);this.Am();},Adw:function(G){this.FH=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Ve],this);this.Bo.As(false);}this.Bo.As(true);},Bb7:function(s){this.Adw(s);},Ve:
function(G){this.Ex(this.A8+1);},Al3:function(G){this.FH=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiE],this);this.Bo.As(false);}this.Bo.As(true);},Al2:function(
G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aip],this);this.Bo.As(false
);}this.Bo.As(true);},AiE:function(G){var B;var F;var BP=this.FZ;switch(this.A8){
case 1:{if(this.Asm){var ABt=A._NewObject(A.Core.An3,0);ABt.Kp=1;if(this.Av.J(ABt
).JY()>A._GetAutoObject(A.Device.Helper).Du())return;}if(this.Av.GK<this.Av.Zq()
)this.Av.Lu(this.Av.GK+1);}break;case 2:{if(this.Asm){var ABt=A._NewObject(A.Core.
An3,0);ABt.Kp=this.Av.Zq();if(this.Av.J(ABt).JY()>A._GetAutoObject(A.Device.Helper
).Du())return;}this.Av.Uv(this.Av.Hk+1);if(this.Av.Zq()<this.Av.GK)this.Av.Lu(this.
Av.Zq());}break;case 3:{if(this.Asm){var A1X=A._NewObject(A.Core.Bs,0);A1X.Initialize(
this.Av.JY());A1X.Year+=1;if(A1X.JY()>A._GetAutoObject(A.Device.Helper).Du())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Ur(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dl)(F=this.
Dl,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);}},Aip:function(G){var B;var F;var BP=
this.FZ;if(this.A8===1)this.Av.Lu(this.Av.GK-1);if(this.A8===2){this.Av.Uv(this.
Av.Hk-1);if(this.Av.Zq()<this.Av.GK)this.Av.Lu(this.Av.Zq());}if(this.A8===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Ur(((B=(this.Av.JY()|
0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],
this.FZ));A.abo(this.Dl,0);}},DK:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[
0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeA));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Ve];}break;case 2:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am0
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeA));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Ve];}break;case 3:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am0
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},AFR:function(E){if(this.Asm===E)return;this.Asm=E;},FW:function(G){this.
Ex(1);},Hd:function(G){this.Ex(0);},Ex:function(EO){var F;var AAA=this.A8;if(!this.
A8){this.FN.Ajy((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FZ){var BP=this.FZ;
this.Ur(A._GetAutoObject(A.Device.Helper).Du());if(this.FZ!==BP){if(!!this.Dl)(F=
this.Dl,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);}}}this.A8=EO;this.Bj$=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DK(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=
!!this.A8;if((!!AAA&&!this.A8)&&!!this.OM)A.pe(this.OM,this);this.Am();},Aio:function(
G){if(this.A8>1)this.Ex(this.A8-1);},_Init:function(aArg){C.Dr._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BF._Init.call(this.JA={I:this}
,0);A.acg.AK._Init.call(this.HM={I:this},0);A.acg.Text._Init.call(this.Px={I:this
},0);A.acg.Text._Init.call(this.VZ={I:this},0);A.acg.Text._Init.call(this.Q3={I:
this},0);A.acg.Text._Init.call(this.Yq={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BF._Init.call(this.Gx={I:this},0);A.Core.BF._Init.call(this.Gw={
I:this},0);this.__proto__=C.SW;this.H(Aah);this.V.R(Ax4);this.Hx.Z(false);this.H8.
Z(false);this.JA.Filter=1;this.HM.H(Ax5);this.HM.L(0x55FFFFFF);this.Px.H(Ax6);this.
Px.Je(true);this.Px.A4(0x14);this.VZ.H(Ax7);this.VZ.Je(true);this.VZ.A4(0x14);this.
VZ.R(Ak_);this.Q3.H(AsX);this.Q3.Je(true);this.Yq.H(Ax8);this.Yq.Je(true);this.Yq.
R(Ak_);this.P9.H(Ax9);this.P9.Je(true);this.P9.A4(0x11);this.Gx.Filter=4;this.Gx.
Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HM,0);this.J(this.Px,0);this.
J(this.VZ,0);this.J(this.Q3,0);this.J(this.Yq,0);this.J(this.P9,0);this.JA.BG=[this
,this.Bb7];this.Px.S(A.aaL(A.fl.EK));this.VZ.S(A.aaL(A.fl.EK));this.Q3.S(A.aaL(A.
fl.EK));this.Yq.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gx.BG=[this,this.
Al3];this.Gx.D1=[this,this.AiE];this.Gw.BG=[this,this.Al2];this.Gw.D1=[this,this.
Aip];this.FN=A._NewObject(C.Aet,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dr;this.Av._Done();this.JA._Done();this.HM._Done();this.Px._Done();this.VZ._Done(
);this.Q3._Done();this.Yq._Done();this.P9._Done();this.Gx._Done();this.Gw._Done(
);C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Av._ReInit(
);this.JA._ReInit();this.HM._ReInit();this.Px._ReInit();this.VZ._ReInit();this.Q3.
_ReInit();this.Yq._ReInit();this.P9._ReInit();this.Gx._ReInit();this.Gw._ReInit(
);this.Px.S(A.aaL(A.fl.EK));this.VZ.S(A.aaL(A.fl.EK));this.Q3.S(A.aaL(A.fl.EK));
this.Yq.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dr._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OP={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bep],[B=A._GetAutoObject(A.Device.Device),B.A8$,B.BbF],0);
A.pe([this,this.Bep],this);},Dt:function(){return 27;},Gm:function(aIndex){return this.
LanguageToString.BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnB(E);},Bep:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OP;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,5);this.BI.
Set(3,3);this.BI.Set(4,8);this.BI.Set(5,9);this.BI.Set(6,7);this.BI.Set(7,6);this.
BI.Set(8,10);this.BI.Set(9,2);this.BI.Set(10,11);this.BI.Set(11,12);this.BI.Set(
12,13);this.BI.Set(13,14);this.BI.Set(14,15);this.BI.Set(15,16);this.BI.Set(16,18
);this.BI.Set(17,17);this.BI.Set(18,4);this.BI.Set(19,20);this.BI.Set(20,21);this.
BI.Set(21,23);this.BI.Set(22,24);this.BI.Set(23,22);this.BI.Set(24,25);this.BI.Set(
25,26);this.BI.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;
this.LanguageToString._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Languages"};C.Rf={TemperatureUnitToString:null,Dt:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw7(E);},Init:function(aArg
){var B;A.zX([this,this.BgX],[B=A._GetAutoObject(A.Device.Device),B.ArA,B.Atm],0
);A.pe([this,this.BgX],this);},BgX:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVn={Ajw:null,
AcB:null,KD:null,AP:null,A_:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KD.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcB.H(this.Ajw.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.
KD.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;this.
Hr=Ad;if(!!this.AX){var AlC=this.AX.Hv(Ad,6);var ApS=this.AX.CE(Ad,7);var Aua=this.
AX.Ja(Ad,9);this.T(A._GetAutoObject(A.acj.KQ).AC6(AlC));this.KD.R(A._GetAutoObject(
A.acj.KQ).A6W(AlC));this.AcB.R(A._GetAutoObject(A.Device.Converter).AkY(ApS));this.
AcB.L(A._GetAutoObject(A.acj.Assessment).XD(Aua));this.Ajw.L(A._GetAutoObject(A.
acj.Assessment).Qr(Aua));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,
aArg);A.acg.AK._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.call(this.AcB={I:
this},0);A.acg.Text._Init.call(this.KD={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.AVn;this.V.H(
O$);this.AcB.L(A.jb.Text);this.KD.R(Ro);this.KD.L(A.jb.Text);this.AP.L(A.jb.Bb);
this.A_.H(Ax_);this.A_.L(A.jb.Bb);this.J(this.Ajw,0);this.J(this.AcB,0);this.J(this.
KD,0);this.J(this.AP,0);this.J(this.A_,0);this.AcB.S(A.aaL(A.fl.Af));this.KD.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ajw._Done(
);this.AcB._Done();this.KD._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ajw._ReInit();this.AcB._ReInit(
);this.KD._ReInit();this.AP._ReInit();this.A_._ReInit();this.AcB.S(A.aaL(A.fl.Af
));this.KD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gd={AX:null,AR:null,Cq:null,AD:null,Afl:null,NU:null,KR:A.jV,Ln:null,AVL:true
,Hm:function(G){var B;var Gh=this.AD.G5;var Aa=(C.A$.isPrototypeOf(B=this.AD.Ci)?
B:null);if(!Aa)return;Aa.Zu(this.AX);Aa.Ch(Gh);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GN]));},N8:function(E){if(E===this.Ln)return;this.Ln=
E;this.AD.N8(E);},Zu:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ch],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this
);},Ch:function(G){if(this.AVL===false)return;if(!!this.AX){this.AD.JC(this.AX.B8(
));this.AD.AbH(0,this.AD.A0-1);}else this.AD.JC(0);if((this.AD.A0>0)&&(this.FO()<
0))this.GT(0);if(this.FO()>=this.AD.A0){this.GT(0);this.AD.Gc(0);}if(this.AD.A0<=
0){this.NU.Z(true);this.GT(-1);}else{this.NU.Z(false);this.ABT(null,null);}},Fh:
function(G){var B;this.Afl.MH(this.AD.GN*this.AD.A0);this.Afl.MJ((B=this.AD.M)[3
]-B[1]);this.Afl.MI(-this.AD.Br);},DF:function(G){if(this.AD.A0>0){switch(this.Cq.
CO){case 4:if(this.FO()>0)this.GT(this.FO()-1);break;case 5:if(this.FO()<(this.AD.
A0-1))this.GT(this.FO()+1);break;default:this.Cq.Mx=true;}this.AD.HI(this.FO(),true
,null,null);}else if((this.Cq.CO!==4)&&(this.Cq.CO!==5))this.Cq.Mx=true;},Zy:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbH(0,this.AD.A0);},GT:function(
E){this.AD.GT(E);this.AD.HI(E,true,null,null);},FO:function(){return this.AD.Gt;
},Dk:function(E){if(this.KR===E)return;this.KR=E;this.NU.R(E);},ABT:function(AcW
,E7){this.AD.ABT(AcW,E7);},AT0:function(E){if(this.AVL===E)return;this.AVL=E;if(
E)A.pe([this,this.Ch],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CL._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afl={I:this},0);A.acg.Text._Init.call(this.NU={I:this},
0);this.__proto__=C.Gd;this.H(U0);this.Ln=C.A$;this.Cq.Filter=147;this.AD.A1(0x3F
);this.AD.H(U0);this.AD.Ae6(40);this.Afl.A1(0x3A);this.Afl.H(AsY);this.NU.A1(0x3F
);this.NU.H(Ax$);this.NU.Hn(10);this.NU.Lv(true);this.NU.A4(0xA);this.NU.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afl,0);this.J(this.NU,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.AD.Em=[this,this.Fh];this.AD.Hm=[this,this.Hm
];this.NU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done(
);this.AD._Done();this.Afl._Done();this.NU._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cq._ReInit();this.AD._ReInit();this.
Afl._ReInit();this.NU._ReInit();this.NU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.A$={AX:null,Hr:-1,CP:function(){this.Ch(this.Hr
);},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Hr%2)===1)this.Background.L(A.jb.CJ);else this.Background.L(A.jb.CU);}},Zu:function(
E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.ab5("%s",Aya);},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.A$;},_ReInit:function(){C.Co._ReInit.
call(this);this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GI={
Bf:null,FC:null,DQ:null,Fk:null,V6:null,Kn:null,KR:A.jV,AUn:0,AUo:0,ARI:Ak$,Afm:
false,CP:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dv(0);A.pe([this,this.Bbj],this);}},Init:function(aArg){var B;A.
zX([this,this.Be5],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AIT],0);A.zV([this
,this.Bw9],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z4],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBy],[B=A._GetAutoObject(A.Device.Helper)
,B.U4,B.U7],0);A.pe([this,this.Z4],this);A.pe([this,this.A0R],this);A.pe([this,this.
Axy],this);},WF:function(G){this.Agv();var O;for(O=this.Kn.Dt()-1;O>=0;O=O-1)switch(
this.Kn.C6(O)){case 0:this.AdQ(A.aaR(A.acf.A5q),[this,this.Boo],0);break;case 14:
this.AdQ(A.aaR(A.acf.BhD),[this,this.Bop],14);break;case 1:this.AdQ(A.aaR(A.acf.
Temperature),[this,this.AT4],1);break;case 2:this.AdQ(A.aaR(A.acf.Rating),[this,
this.AT3],2);break;case 3:this.AdQ(A.aaR(A.acf.Afv),[this,this.AT5],3);break;default:
A.ab5("%s",Ayb);}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.
BiB));A._GetAutoObject(A.Device.Device).Dv(6);},Bbj:function(s){this.WF(s);},DF:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var AfZ=this.Kn.DZ(A._GetAutoObject(
A.Device.Device).Kn);if(this.Afm)return;switch(D5.CO){case 6:{AfZ=AfZ-1;if(AfZ<0
)AfZ=this.Kn.Dt()-1;A._GetAutoObject(A.Device.Device).Zs(this.Kn.C6(AfZ));}break;
case 7:{AfZ=AfZ+1;if(AfZ>=this.Kn.Dt())AfZ=0;A._GetAutoObject(A.Device.Device).Zs(
this.Kn.C6(AfZ));}break;default:D5.Mx=true;}},CC:function(G){if(this.DQ.AAa()){this.
DQ.Ac7();if(this.DQ.AAa()===false)this.Bf.AT0(true);return;}else if(this.Afm)this.
ABb(this);if(!!this.Bf)this.Bf.AT0(true);},E3:function(G){if(!!this.Bf)this.Bf.AT0(
false);},Axy:function(G){var B;if(!!this.Bf)this.HP(this.Bf);this.Bf=A._NewObject(
C.AMB,0);this.Bf.H(this.ARI);this.Bf.Zu(A._GetAutoObject(A.Device.Device).An);this.
Bf.Zy([this,this.Aal]);if(!!this.FC)this.Bf.A9Y([B=this.FC,B.A9t,B.A_S]);this.A4B(
this);this.J(this.Bf,0);if(this.Afm===false)this.Ba(this.Bf);this.Be5(this);this.
A$N(this);},A9V:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.Dq(this.
A69());this.Ek.AR=[this,this.Aal];this.ALt(this);this.Ek.As(true);this.Ba(this.Ek
);this.Afm=true;},Bk7:function(G){var B;A._GetAutoObject(A.Device.Device).Dv(0);
if(!this.Bf)return;var Aa=(C.ACi.isPrototypeOf(B=this.Bf.AD.BjO(this.Bf.AD.Gt))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GQ(Aa.Hr);else A._GetAutoObject(
A.Device.Helper).W.FD();this.Agh();},Age:function(G){var F;if(!this.Fk)this.A6t(
this);else switch((F=this.Fk,F[1].call(F[0]))){case 19:break;case 0:this.A6t(this
);break;case 1:this.BiC(this);break;case 9:this.A6u(this);break;case 4:this.BiE(
this);break;case 6:this.BiF(this);break;case 8:this.BiH(this);break;case 2:this.
BiI(this);break;case 3:this.BiJ(this);break;case 7:this.BiL(this);break;case 5:this.
BiM(this);break;case 10:this.BiO(this);break;case 11:this.BiD(this);break;case 12:
this.BiG(this);break;case 13:this.A6z(this);break;case 14:this.A6v(this);break;case
18:this.A6w(this);break;case 15:this.A6x(this);break;case 16:this.BiK(this);break;
case 17:this.A6y(this);break;default:A.ab5("%s%e",AfD,(F=this.Fk,F[1].call(F[0])
));}},Aal:function(s){this.Age(s);},Bmh:function(G){this.Dq(C.Ku);this.Ek.AR=null;
this.Afm=false;this.Z4(this);this.Bgp();this.N.T2.CZ(255);this.N.T3.CZ(255);this.
Ba(this.Bf);this.Ek.As(false);},Ann:function(G){A._GetAutoObject(C.A5).Fz();},Dk:
function(E){if(this.KR===E)return;this.KR=E;this.A4B(this);},Abu:function(){switch(
A._GetAutoObject(A.Device.Device).Kn){case 14:return C.ANa;case 2:return C.ANc;case
1:return C.ANd;case 3:return C.ANf;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.Aqt;case 7:return C.ACh;case 12:return C.ACk;case 11:return C.ACg;case
13:return C.ACj;default:throw new Error(Aoe);}},Abv:function(){switch(A._GetAutoObject(
A.Device.Device).Kn){case 14:return C.APC;case 2:return C.ADC;case 1:return C.APE;
case 3:return C.APG;case 4:return C.ADy;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq0;case 7:return C.ADA;case 12:return C.ADB;case 11:return C.ADz;case
13:return C.ADD;default:throw new Error(Aoe);}},Be5:function(G){this.ATD(A._GetAutoObject(
A.Device.Device).Kn);if(!!this.Bf){this.Bf.N8(this.Abu());this.Bpz(this);}},Bpz:
function(G){var B;if(!!this.FC)this.HP(this.FC);this.FC=(C.Dd.isPrototypeOf(B=A.
_NewObject(this.Abv(),0))?B:null);this.FC.H(I1);if(!!this.Bf)this.Bf.A9Y([B=this.
FC,B.A9t,B.A_S]);this.J(this.FC,0);},Bk5:function(G){this.Q_(this);A._GetAutoObject(
A.Device.Device).Dv(0);},AT4:function(G){A._GetAutoObject(A.Device.Device).Zs(1);
},AT3:function(G){A._GetAutoObject(A.Device.Device).Zs(2);},AT5:function(G){A._GetAutoObject(
A.Device.Device).Zs(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).MC());},A0R:function(s){this.Q_(s);},HQ:function(
G){if(this.Afm){this.ALt(this);return;}this.N.C2(A.aaL(A.ach.E2));this.N.Ct(A.aaL(
A.ach.ADU));this.N.C3(A.aaL(A.ach.Options));this.N.CF=[this,this.Ann];this.N.Ce=[
this,this.A9V];this.N.Ca=[this,this.Bbj];this.N.Hy(A.jV);this.N.E5(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B8()){this.N.IS.CZ(100);this.N.
Ce=null;}else this.N.IS.CZ(255);},Aow:function(s){this.HQ(s);},AdQ:function(Aic,
Aid,AJs){A._GetAutoObject(C.BS).ABS(Aic,Aid,[this,this.A9n,this.ATD],AJs);},AaH:
function(G){this.A4B(this);if(this.Afm)A.pe([this,this.ALt],this);},Bw9:function(
s){this.AaH(s);},Agh:function(){A._GetAutoObject(C.A5).Cb(9);},A4B:function(G){if(
!this.Bf)return;if(!A._GetAutoObject(A.Device.Device).An.QL()||!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bf.Dk(A.aaR(A.acf.AEA));else if(A._GetAutoObject(
A.Device.Helper).Are(A._GetAutoObject(A.Device.Device).An.Filter))this.Bf.Dk(this.
KR);else if(!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4)){if(A._GetAutoObject(
A.Device.Helper).ADd(A._GetAutoObject(A.Device.Device).An.Filter)===1)this.Bf.Dk(
A.aaR(A.acf.AN$));else this.Bf.Dk(A.aaR(A.acf.AN_));}else this.Bf.Dk(A.aaR(A.acf.
ASk));},AE1:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],0));},AwO:function(
E){if(A.aaZ(this.Fk,E))return;if(!!this.Fk)A.z$([this,this.A00],this.Fk,0);this.
Fk=E;if(!!E)A.zX([this,this.A00],this.Fk,0);if(!!E)A.pe([this,this.A00],this);},
AE7:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],1));},AwT:function(
G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],2));},ATH:function(G){var F;if(!
!this.Fk)(F=this.Fk,F[2].call(F[0],3));},ATV:function(G){var F;if(!!this.Fk)(F=this.
Fk,F[2].call(F[0],7));},ATW:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(
F[0],5));},BiI:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GQ(this.Bf.FO());this.DQ.Qp(1);}},I8:function(Aic,Aid,AoU){A._GetAutoObject(
C.BS).ABS(Aic,Aid,[this,this.A9o,this.ATE],AoU);},Bms:function(G){var F;if(!!this.
Fk)(F=this.Fk,F[2].call(F[0],4));},BiE:function(G){if(!this.Bf)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());this.DQ.BB0();}},Bmt:function(
G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],6));},BiF:function(G){if(!this.Bf
)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());this.DQ.
BB1();}},BiH:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GQ(this.Bf.FO());this.DQ.Qp(1024);}},BnD:function(G){var F;if(!!this.Fk)(
F=this.Fk,F[2].call(F[0],8));},Akq:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2
].call(F[0],9));},BiJ:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(2);}},A6t:function(G){if(!this.Bf)return;
if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());if(A._GetAutoObject(
A.Device.Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).AZ(66,true,A.jV,0,null);else this.BBM();}},BiC:function(G){if(!
this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());
this.DQ.Qp(16);}},BBM:function(){A._GetAutoObject(C.A5).Cb(94);},BiL:function(G){
if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO(
));this.DQ.Qp(4);}},BiM:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(8);}},A6u:function(G){var B;if(!this.
Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());if(this.
Afm){A.zX([this,this.AAC],[B=this.DQ,B.SJ,B.E4],0);this.ABb(this);}this.DQ.Ac7();
}},AuF:function(Aic,Aid,ByJ){A._GetAutoObject(C.BS).Bhy(Aic,Aid,ByJ);},ALt:function(
G){this.N.Hy(A.jV);this.N.CS(A.jV);this.N.C2(A.aaL(A.ach.Aez));this.N.CF=[this,this.
Bmh];this.N.T2.CZ(100);this.N.T3.CZ(100);var Gi=A._GetAutoObject(A.Device.Device
).An.B8();if(Gi<=0){this.N.Ct(null);this.N.C3(null);this.N.Ce=null;this.N.Ca=null;
this.N.WQ=false;this.N.ZG=false;}else if(Gi===1){this.N.Ct(null);this.N.C3(A.aaL(
A.ach.AeA));this.N.Ce=null;this.N.Ca=[this,this.Aal];this.N.WQ=false;this.N.ZG=false;
}else{this.N.Ct(A.aaL(A.ach.Aq6));this.N.C3(A.aaL(A.ach.Arc));this.N.Ce=[this,this.
A3V];this.N.Ca=[this,this.A3W];this.N.WQ=true;this.N.ZG=true;}},A3V:function(G){
if(!this.Bf)return;if(this.Bf.FO()<(A._GetAutoObject(A.Device.Device).An.B8()-1)
)this.Bf.GT(this.Bf.FO()+1);},A3W:function(G){if(!this.Bf)return;if(this.Bf.FO()>
0)this.Bf.GT(this.Bf.FO()-1);},A$N:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bj=A._GetAutoObject(A.Device.Device).An.LY(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bj>=0){this.Bf.GT(Bj);A.ab5("%s",Aof);}}},Nk:function(){return this.
Bf.FO()>=0;},Ake:function(){return A._GetAutoObject(A.Device.Device).An.B8()>5;}
,Agv:function(){this.Bhz();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AUN),[this,this.
A9V]);A._GetAutoObject(C.BS).Fx();},Z4:function(G){if(this.Afm)this.ALt(this);else
this.HQ(this);},ABb:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E9();var Azd=aFilter.DM(1,4);if(!!Azd){aFilter.Nw(Azd);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bf)this.Bf.GT(0);}},BG3:function(s){this.
ABb(s);},AAC:function(G){var B;if(!this.DQ.EN&&this.Afm){A.z$([this,this.AAC],[B=
this.DQ,B.SJ,B.E4],0);this.ABb(this);}},Bof:function(G){var F;if(!!this.Fk)(F=this.
Fk,F[2].call(F[0],10));},BiO:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(256);}},A3L:function(G){var F;this.
ATE((F=this.Fk,F[1].call(F[0])));A.pe([this,this.Aow],this);},A00:function(s){this.
A3L(s);},Bmp:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],11));},BiD:
function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(
this.Bf.FO());this.DQ.Qp(4096);}},BiG:function(G){if(!this.Bf)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(16384);}},A6z:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.
FO());this.BBN();}},BBN:function(){A._GetAutoObject(C.A5).Ab$(75);},A6v:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.
FO());this.DQ.Qp(32768);}},A6x:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(65536);}},BiK:function(G){if(!this.
Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());this.
DQ.Qp(131072);}},Bhz:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.ACn));else A._GetAutoObject(C.BS).TC(A.
aaR(A.acf.ACn),[this,this.Bk5]);A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AkQ),[this
,this.Bk7]);A._GetAutoObject(C.BS).Fx();},A6y:function(G){if(!this.Bf)return;if(
this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(128);}}
,BBy:function(G){var B;if(!this.Bf)return;A.pe([B=this.Bf,B.Ch],this);},A6w:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GQ(this.Bf.
FO());this.DQ.Qp(524288);}},BiN:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GQ(this.Bf.FO());this.DQ.Qp(262144);}},ATD:function(E){if(this.
AUn===E)return;this.AUn=E;A.abo([this,this.A9n,this.ATD],0);},ATE:function(E){if(
this.AUo===E)return;this.AUo=E;A.abo([this,this.A9o,this.ATE],0);},A69:function(
){return C.YA;},Bgp:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E9(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?
B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Boo:function(G){A._GetAutoObject(A.Device.Device).Zs(0);
},Bop:function(G){A._GetAutoObject(A.Device.Device).Zs(14);},A_A:function(E){if(
A.aaY(this.ARI,E))return;this.ARI=E;if(!!this.Bf)this.Bf.H(E);},A9n:function(){return this.
AUn;},A9o:function(){return this.AUo;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADC._Init.call(this.V6={I:this},0);C.Kn._Init.call(this.Kn={I:this},0);
this.__proto__=C.GI;this.Background.H(Cf);this.N.Z(true);this.N.OU(true);this.N.
OV(true);this.Ek.A_p(A.jb.CU);this.Ek.A_q(A.jb.Text);this.Dq(C.Ku);this.V6.H(I1);
this.KR=A.aaR(A.acf.AEA);this.J(this.V6,0);this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V6._Done();this.Kn._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V6._ReInit();
this.Kn._ReInit();this.Dk(A.aaR(A.acf.AEA));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACi={AP:null,A_:null,UM:null,Acz:
null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UM.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UM.M[2]-1,0,this.UM.M[2]+1,aSize[1]]);this.Acz.H([this.UM.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.UM.L(this.V.AQ);this.Acz.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UM.R(this.AX.CE(Ad,2).toFixed());this.Acz.R(this.AX.
CE(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UM={I:this},0);A.acg.Text._Init.call(this.Acz={I:this
},0);this.__proto__=C.ACi;this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.UM.L(A.jb.Text
);this.Acz.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UM,0);this.
J(this.Acz,0);this.UM.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done();this.UM.
_Done();this.Acz._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UM._ReInit();this.Acz._ReInit(
);this.UM.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad9={OG:null,SX:null,Mu:null,Init:function(aArg){var B;A.zX([this,this.A3s],[
B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyT],0);A.zX([this,this.Adx],[B=A._GetAutoObject(
A.Device.Device),B.Av7,B.AyS],0);A.pe([this,this.Adx],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SX.R(A._GetAutoObject(A.Device.Device).Aa8.toFixed()+AsZ
);this.OG.Z(A._GetAutoObject(A.Device.Device).AmC);},Adx:function(G){this.Am();}
,M6:function(G){A._GetAutoObject(C.A5).Fz();},A3s:function(G){if(A._GetAutoObject(
A.Device.Device).AmC===false){this.OG.Z(false);A._GetAutoObject(C.A5).Fz();}else
this.OG.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OG={I:this},0);A.acg.Text._Init.call(this.SX={I:this},0);C.Mu._Init.call(
this.Mu={I:this},0);this.__proto__=C.Ad9;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OG.H(AcN);this.OG.R(A.aaR(A.acf.OG));this.
OG.L(A.jb.Text);this.OG.Z(false);this.SX.H(As0);this.SX.R(As1);this.SX.L(A.jb.Text
);this.Mu.H(As2);this.J(this.OG,0);this.J(this.SX,0);this.J(this.Mu,0);this.N.Ca=[
this,this.M6];this.OG.S(A.aaL(A.fl.Af));this.SX.S(A.aaL(A.fl.Af));this.Mu.Au([B=
A._GetAutoObject(A.Device.Device),B.Av7,B.AyS]);this.Mu.A_H([B=A._GetAutoObject(
A.Device.Device),B.Av_,B.AyT]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OG._Done();this.SX._Done();this.Mu._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OG._ReInit();this.SX._ReInit();this.Mu._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OG.R(A.aaR(A.acf.OG));this.OG.S(A.aaL(A.fl.Af)
);this.SX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mu={Ad4:null,Ad5:null,Hf:function(G){var F;if(!!this.Q){this.A2z();var Ac_=(
F=this.Q,F[1].call(F[0]));if(Ac_>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.
OD.L((this.OD.AQ&0x00FFFFFF)|(this.AlK(Ac_,0,20)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF
)|(this.AlK(Ac_,21,40)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlK(Ac_,41,
60)<<24));this.Ad4.L((this.Ad4.AQ&0x00FFFFFF)|(this.AlK(Ac_,61,80)<<24));this.Ad5.
L((this.Ad5.AQ&0x00FFFFFF)|(this.AlK(Ac_,81,100)<<24));}},A2z:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U$=this.Ad5;else if((F=this.Q,F[
1].call(F[0]))>60)this.U$=this.Ad4;else if((F=this.Q,F[1].call(F[0]))>40)this.U$=
this.TK;else if((F=this.Q,F[1].call(F[0]))>20)this.U$=this.TJ;else this.U$=this.
OD;}else this.U$=null;},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad4={I:this},0);A.acg.AK._Init.call(this.Ad5={I:this},0);this.__proto__=
C.Mu;this.H(Aog);this.NY.H(Aog);this.OD.H(As3);this.TJ.H(Ala);this.TK.H(Ayc);this.
Ad4.H(Ayd);this.Ad4.L(A.jb.E1);this.Ad5.H(Aye);this.Ad5.L(A.jb.E1);this.J(this.Ad4
,0);this.J(this.Ad5,0);this.NY.Ax(A.aaL(A.ach.AMV));},_Done:function(){this.__proto__=
C.OF;this.Ad4._Done();this.Ad5._Done();C.OF._Done.call(this);},_ReInit:function(
){C.OF._ReInit.call(this);this.Ad4._ReInit();this.Ad5._ReInit();},_Mark:function(
D){var B;C.OF._Mark.call(this,D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVi={Od:null,Lx:null,Ak4:null,Z1:null,Z0:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.
ASW,B.A0K],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.ASZ,B.
A0M],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.Device),B.A9D,B.BbQ],0
);A.pe([this,this.ApJ],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GG(this
);this.ABF(this);this.BCT(this);this.DK(this);},BBa:function(G){A._GetAutoObject(
A.Device.Device).AsG();},ApJ:function(G){this.Am();},GG:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z1.Z(false);break;case 4:{var A4d;if(!A._GetAutoObject(A.Device.Device).Afr)A4d=
0;else A4d=((A._GetAutoObject(A.Device.Device).AxP*100)/A._GetAutoObject(A.Device.
Device).Afr)|0;this.Z1.Bx(A4d);this.Z1.Z(true);}break;default:A.ab5("%s%e",As4,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCT:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lx.L(A.jb.Text);this.Od.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gk);this.Lx.L(A.jb.Bm);this.Od.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState);}},DK:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C2(null);this.N.CF=null;this.N.CS(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C2(null);this.N.CF=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBa];}break;default:A.ab5("%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState
);}},ABF:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lx.R(A.aaR(A.acf.Bqj));break;case 1:this.Lx.R(A.aaR(A.acf.Bqg));break;
case 2:this.Lx.R(A.aaR(A.acf.Bqd));break;case 3:this.Lx.R(A.aaR(A.acf.Bqh));break;
case 4:this.Lx.R((A.aaR(A.acf.Bqf)+Ayf)+A._GetAutoObject(A.Device.Helper).MO(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.BoU),Pa,A._GetAutoObject(A.Device.Device).AxP.toFixed(
)),Ayg,A._GetAutoObject(A.Device.Device).Afr.toFixed()));break;case 5:this.Lx.R(
A.aaR(A.acf.Bqi));break;case 7:this.Lx.R(A.aaR(A.acf.Bqe));break;default:A.ab5("%s%e"
,As4,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Od={I:this},0);C.CG._Init.call(this.Lx={I:this
},0);A.acg.Ap._Init.call(this.Ak4={I:this},0);A.acs.ADF._Init.call(this.Z1={I:this
},0);A.acs.ADG._Init.call(this.Z0={I:this},0);this.__proto__=C.AVi;this.N.Z(true
);this.Od.H(AWe);this.Od.R(A.aaR(A.acf.Od));this.Lx.A1(0x3F);this.Lx.H(AWf);this.
Lx.A4(0x12);this.Ak4.H(AWg);this.Ak4.L(A.jb.AV);this.Z1.H(AWh);this.Z1.As(false);
this.Z1.Bx(0);this.Z0.Bn$(0);this.Z0.A_5(0);this.Z0.A_3(A.jb.AV);this.Z0.A_2(0);
this.Z0.AGd(AHw);this.J(this.Od,0);this.J(this.Lx,0);this.J(this.Ak4,0);this.J(this.
Z1,0);this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(A.fl.Af));this.Od.Cl(A.aaL(A.fl.
Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.AY(A.aaL(A.fl.Ak));this.Lx.Cl(A.aaL(A.fl.
Bg));this.Ak4.Ax(A.aaL(A.ach.AQ0));this.Z1.OnSetAppearance(this.Z0);this.Z0.A_4(
A.aaL(A.ach.N1));this.Z0.A_1(A.aaL(A.ach.N1));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Od._Done();this.Lx._Done();this.Ak4._Done();this.Z1._Done(
);this.Z0._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Od._ReInit();this.Lx._ReInit();this.Ak4._ReInit();this.Z1._ReInit();this.
Z0._ReInit();this.Od.R(A.aaR(A.acf.Od));this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(
A.fl.Af));this.Od.Cl(A.aaL(A.fl.Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.AY(A.aaL(
A.fl.Ak));this.Lx.Cl(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Od)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqY={_Init:function(aArg){C.ADv._Init.call(this,aArg
);this.__proto__=C.AqY;this.A_s(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BI:A.abi(3,0,{0:2,2:1}),Dt:function(
){return 3;},C6:function(aIndex){if(aIndex>=3)return-1;return this.BI.Get(aIndex
);},Gm:function(aIndex){return this.GenderToString.BT(this.C6(aIndex));},DZ:function(
A9){var O=0;while(O<3){if(this.BI.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(
){var O=0;var max=-1;while(O<3){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.J0(
E);},L5:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af3],[B=this.Animal,B.WE,B.J0],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af3],[B=this.Animal,B.WE,B.J0],0);A.pe([this,this.Af3],this);},Af3:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.BI=[]).__proto__=C.Gender.BI;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,BI:A.abi(4,0,{1:1,2:2,3:3}),Dt:function(){return 4;},C6:function(aIndex){if(
aIndex>=4)return-1;return this.BI.Get(aIndex);},Gm:function(aIndex){return this.
BirthTypeToString.BT(this.C6(aIndex));},DZ:function(A9){var O=0;while(O<4){if(this.
BI.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(
O<4){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akr(E);},A1P:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Cc],0);},L5:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1P],[B=this.Animal,B.ASB,B.Akr],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1P],[B=this.Animal,B.ASB,B.Akr],0);A.pe([this,this.A1P],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BI=[]).__proto__=C.BirthType.BI;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acq:null,Dt:
function(){return A._GetAutoObject(A.Device.Helper).AdZ.MN;},C6:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AdZ.MN)return-1;return A._GetAutoObject(
A.Device.Helper).AdZ.Get(aIndex);},Gm:function(aIndex){return this.Acq.BT(this.C6(
aIndex));},DZ:function(A9){var O=0;while(O<A._GetAutoObject(A.Device.Helper).AdZ.
MN){if(A._GetAutoObject(A.Device.Helper).AdZ.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UJ.
MN){if(A._GetAutoObject(A.Device.Helper).UJ.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UJ.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1I:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cc],0);},L5:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1I],[B=this.Animal,B.PV,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1I],[B=this.Animal,B.PV,B.EC],0);A.pe([
this,this.A1I],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUZ={Init:function(aArg){var B;A.pe([this,this.AfH],this);A.zX([this,this.AfH
],[B=A._GetAutoObject(A.Device.Device),B.ArA,B.Atm],0);},A4i:function(G){A._GetAutoObject(
A.Device.Device).AZ(38,true,A.jV,0,[this,this.Bb8]);},A3T:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).Ass(this);},A18:function(G){var F;if(this.A8===1){var BP=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlR)this.D7=this.AlR;if(this.D7<A._GetAutoObject(
A.Device.Device).AcF)this.D7=A._GetAutoObject(A.Device.Device).AcF;if(this.DW!==
BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.
A8===2){var BP=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);
}}this.DK(this);this.Am();},A2I:function(G){var F;if(this.A8===1){var BP=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.
J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A8===2){var BP=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlN)this.DW=this.AlN;if(this.DW!==BP){
if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this
);this.Am();},GG:function(G){this.PO.R(AHx+A._GetAutoObject(A.Device.Converter).
AkY(this.D7));this.PP.R(AHx+A._GetAutoObject(A.Device.Converter).AkY(this.DW));this.
SB.R(A._GetAutoObject(A.acj.Temperature).AlL());},A2B:function(Ats){if(Ats===1)return this.
PO;else if(Ats===2)return this.PP;else return null;},_Init:function(aArg){C.Acp.
_Init.call(this,aArg);this.__proto__=C.AUZ;this.AlN=5000;this.AlR=3000;this.T(A.
aaR(A.acf.Arq));this.Background.H(AfE);this.V.H(BD);this.V.R(A.aaR(A.acf.AG9));this.
V.A4(0x12);this.Init(aArg);},_ReInit:function(){C.Acp._ReInit.call(this);this.T(
A.aaR(A.acf.Arq));this.V.R(A.aaR(A.acf.AG9));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa$:null,Abd:null,Abb:
null,Background:null,Aa_:null,Abc:null,Aba:null,AjC:null,Arv:null,VS:null,A6:0,BAR:
function(G){if(this.AjC.CO===6){if(this.A6===1)this.AnH(2);else if(this.A6===2)this.
AnH(3);else this.AnH(1);}else if(this.AjC.CO===7){if(this.A6===3)this.AnH(2);else
if(this.A6===2)this.AnH(1);else this.AnH(3);}},AnH:function(E){if(this.A6===E)return;
this.A6=E;switch(this.A6){case 3:this.Background.H(this.Aa_.M);break;case 2:this.
Background.H(this.Abc.M);break;case 1:this.Background.H(this.Aba.M);break;default:
this.Background.H(Aoh);}},H0:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ho._Init.
call(this.Aa$={I:this},0);A.acg.Ho._Init.call(this.Abd={I:this},0);A.acg.Ho._Init.
call(this.Abb={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeo._Init.call(this.Aa_={I:this},0);A.acg.Aeo._Init.call(this.Abc={I:this},0);A.
acg.Aeo._Init.call(this.Aba={I:this},0);A.Core.BF._Init.call(this.AjC={I:this},0
);A.Core.BF._Init.call(this.Arv={I:this},0);A.Graphics.AMN._Init.call(this.VS={I:
this},0);this.__proto__=C.Rating;this.H(AWi);this.Aa$.H(AHy);this.Aa$.L(A.jb.Text
);this.Aa$.AnF(Alb);this.Aa$.Nu(3);this.Aa$.Z(true);this.Abd.H(AHz);this.Abd.L(A.
jb.Text);this.Abd.AnF(Alb);this.Abd.Nu(3);this.Abd.Z(true);this.Abb.H(AHA);this.
Abb.L(A.jb.Text);this.Abb.AnF(Alb);this.Abb.Nu(3);this.Abb.Z(true);this.Background.
H(Aoh);this.Background.L(A.jb.AV);this.Aa_.H(AHy);this.Aa_.L(A.jb.E1);this.Aa_.AnF(
Alb);this.Aa_.Z(true);this.Abc.H(AHz);this.Abc.L(A.jb.Ia);this.Abc.AnF(Alb);this.
Abc.Z(true);this.Aba.H(AHA);this.Aba.L(A.jb.Gk);this.Aba.AnF(Alb);this.Aba.Z(true
);this.AjC.Filter=147;this.Arv.Filter=1;this.VS.BmI(360);this.VS.BnY(22);this.VS.
Bn9(2);this.J(this.Aa$,0);this.J(this.Abd,0);this.J(this.Abb,0);this.J(this.Background
,0);this.J(this.Aa_,0);this.J(this.Abc,0);this.J(this.Aba,0);this.Aa$.Zz(this.VS
);this.Abd.Zz(this.VS);this.Abb.Zz(this.VS);this.Background.Ax(A.aaL(A.ach.N0));
this.Aa_.Zz(this.VS);this.Abc.Zz(this.VS);this.Aba.Zz(this.VS);this.AjC.BG=[this
,this.BAR];this.Arv.BG=[this,this.H0];},_Done:function(){this.__proto__=A.Core.P;
this.Aa$._Done();this.Abd._Done();this.Abb._Done();this.Background._Done();this.
Aa_._Done();this.Abc._Done();this.Aba._Done();this.AjC._Done();this.Arv._Done();
this.VS._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa$._ReInit();this.Abd._ReInit();this.Abb._ReInit();this.Background.
_ReInit();this.Aa_._ReInit();this.Abc._ReInit();this.Aba._ReInit();this.AjC._ReInit(
);this.Arv._ReInit();this.VS._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asu={Akg:null,Ase:null,Background:null,TU:null,TQ:null,AbZ:null,AbY:null,AbX:
null,Acu:null,Act:null,Acs:null,Acl:null,Ack:null,AbS:null,AbR:null,Acb:null,Aca:
null,Aqz:null,Init:function(aArg){},BkH:function(G){this.AbZ.R(AWj);this.AbY.R(A.
jV);this.AbX.R(A.jV);this.Acu.R(AWk);this.Act.R(A.jV);this.Acs.R(A.jV);this.Acl.
R(A.jV);this.Ack.R(A.jV);this.AbS.R(A.jV);this.AbR.R(A.jV);this.Acb.R(A.jV);this.
Aca.R(A.jV);},BoC:function(G){this.TQ.Z(true);this.TU.Z(true);var IH=this.Ip();if(
!IH)return;this.TU.R(IH.GetFPS().toFixed()+AHB);this.TQ.R(AWl);this.TQ.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akg={I:this},0);A.Core.Timer._Init.call(this.Ase={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TU={I:this},0);A.acg.
Text._Init.call(this.TQ={I:this},0);A.acg.Text._Init.call(this.AbZ={I:this},0);A.
acg.Text._Init.call(this.AbY={I:this},0);A.acg.Text._Init.call(this.AbX={I:this}
,0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Act={I:
this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acl={
I:this},0);A.acg.Text._Init.call(this.Ack={I:this},0);A.acg.Text._Init.call(this.
AbS={I:this},0);A.acg.Text._Init.call(this.AbR={I:this},0);A.acg.Text._Init.call(
this.Acb={I:this},0);A.acg.Text._Init.call(this.Aca={I:this},0);A.acg.AK._Init.call(
this.Aqz={I:this},0);this.__proto__=C.Asu;this.H(AcO);this.As(false);this.Akg.PX(
2000);this.Akg.WI(1);this.Akg.As(true);this.Ase.As(true);this.Background.A1(0x3F
);this.Background.H(AcO);this.Background.L(0x78000000);this.TU.H(AWm);this.TU.A4(
0x14);this.TU.R(A.jV);this.TU.L(0xFFFFFC00);this.TU.Z(false);this.TQ.H(AWn);this.
TQ.A4(0x11);this.TQ.R(A.jV);this.TQ.Z(false);this.AbZ.H(AWo);this.AbZ.A4(0x11);this.
AbZ.R(A.jV);this.AbY.H(AWp);this.AbY.A4(0x11);this.AbY.R(A.jV);this.AbX.H(As5);this.
AbX.A4(0x14);this.AbX.R(A.jV);this.Acu.H(AHC);this.Acu.A4(0x11);this.Acu.R(A.jV);
this.Act.H(AHD);this.Act.A4(0x11);this.Act.R(A.jV);this.Acs.H(Ayh);this.Acs.A4(0x14
);this.Acs.R(A.jV);this.Acl.H(AHE);this.Acl.A4(0x11);this.Acl.R(A.jV);this.Ack.H(
Ayi);this.Ack.A4(0x14);this.Ack.R(A.jV);this.AbS.H(AWq);this.AbS.A4(0x11);this.AbS.
R(A.jV);this.AbR.H(AWr);this.AbR.A4(0x14);this.AbR.R(A.jV);this.Acb.H(AWs);this.
Acb.A4(0x11);this.Acb.R(A.jV);this.Aca.H(AWt);this.Aca.A4(0x14);this.Aca.R(A.jV);
this.Aqz.H(AHF);this.J(this.Background,0);this.J(this.TU,0);this.J(this.TQ,0);this.
J(this.AbZ,0);this.J(this.AbY,0);this.J(this.AbX,0);this.J(this.Acu,0);this.J(this.
Act,0);this.J(this.Acs,0);this.J(this.Acl,0);this.J(this.Ack,0);this.J(this.AbS,
0);this.J(this.AbR,0);this.J(this.Acb,0);this.J(this.Aca,0);this.J(this.Aqz,0);this.
Akg.MK=[this,this.BkH];this.Ase.MK=[this,this.BoC];this.TU.S(A.aaL(A.fl.Ak));this.
TQ.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.
AbX.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.
Acs.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));this.
AbS.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acb.S(A.aaL(A.fl.Ak));this.
Aca.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akg._Done();this.Ase._Done();this.Background._Done();this.TU._Done();this.TQ.
_Done();this.AbZ._Done();this.AbY._Done();this.AbX._Done();this.Acu._Done();this.
Act._Done();this.Acs._Done();this.Acl._Done();this.Ack._Done();this.AbS._Done();
this.AbR._Done();this.Acb._Done();this.Aca._Done();this.Aqz._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akg._ReInit();this.
Ase._ReInit();this.Background._ReInit();this.TU._ReInit();this.TQ._ReInit();this.
AbZ._ReInit();this.AbY._ReInit();this.AbX._ReInit();this.Acu._ReInit();this.Act.
_ReInit();this.Acs._ReInit();this.Acl._ReInit();this.Ack._ReInit();this.AbS._ReInit(
);this.AbR._ReInit();this.Acb._ReInit();this.Aca._ReInit();this.Aqz._ReInit();this.
TU.S(A.aaL(A.fl.Ak));this.TQ.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.AbY.
S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.
S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.
S(A.aaL(A.fl.Ak));this.AbS.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.Acb.
S(A.aaL(A.fl.Ak));this.Aca.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ase).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aqz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGQ={FN:null,Dl:null,Av:null,JA:null,HM:null,Ui:null,Bb:null,Sq:null,Gx:null
,Gw:null,FZ:0,A8:0,Bke:false,Init:function(aArg){},Ai:function(Ae){C.Dr.Ai.call(
this,Ae);this.Hx.Z(false);this.H8.Z(false);if(!!this.Dl){this.Sq.R(this.Av.Format(
AWu));this.Ui.R(this.Av.Format(MS));}if(this.A8===1){this.HM.Z(true);this.HM.H(this.
Sq.M);this.HM.L(A.jb.Bm);this.Sq.L(this.Background.AQ);this.Ui.L(A.jb.Bm);}else if(
this.A8===2){this.HM.Z(true);this.HM.H(this.Ui.M);this.HM.L(A.jb.Bm);this.Sq.L(A.
jb.Bm);this.Ui.L(this.Background.AQ);}else{this.HM.Z(false);this.Sq.L(this.V.AQ);
this.Bb.L(this.V.AQ);this.Ui.L(this.V.AQ);}},Qu:function(G){if(this.FH===1)A.pe([
this,this.Ve],this);else if(this.FH===4)A.pe([this,this.AiE],this);else if(this.
FH===5)A.pe([this,this.Aip],this);C.Dr.Qu.call(this,G);},Kh:function(G){switch(this.
A8){case 0:C.Dr.Kh.call(this,G);break;case 2:break;default:this.Adw(this);}},Kc:
function(G){switch(this.A8){case 0:C.Dr.Kc.call(this,G);break;default:this.Aio(this
);}},Ady:function(G){var F;if(!!this.Dl)this.Ur((F=this.Dl,F[1].call(F[0])));},Ab8:
function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.Ady],this.Dl
,0);this.Dl=E;if(!!E)A.zX([this,this.Ady],E,0);if(!!E)A.pe([this,this.Ady],this);
},Ur:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.
Am();},Adw:function(G){this.FH=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Ve],this
);this.Bo.As(false);}this.Bo.As(true);},Ve:function(G){this.Ex(this.A8+1);},Al3:
function(G){this.FH=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiE],this);this.Bo.
As(false);}this.Bo.As(true);},Al2:function(G){this.FH=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aip],this);this.Bo.As(false);}this.Bo.As(true);},AiE:function(G){
var B;var F;var BP=this.FZ;if(this.A8===1)this.Av.AnA(this.Av.AjQ+1);if(this.A8===
2)this.Av.AnD(this.Av.AvZ+1);this.Av.AnG(0);this.Ur(((B=(this.Av.JY()|0))<0)?B+0x100000000:
B);if(this.FZ!==BP){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FZ));A.abo(this.
Dl,0);}},Aip:function(G){var B;var F;var BP=this.FZ;if(this.A8===1)this.Av.AnA(this.
Av.AjQ-1);if(this.A8===2)this.Av.AnD(this.Av.AvZ-1);this.Av.AnG(0);this.Ur(((B=(
this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dl)(F=this.Dl,F[
2].call(F[0],this.FZ));A.abo(this.Dl,0);}},DK:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeA));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Ve];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am0
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},FW:function(G){this.Ex(1);},Hd:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;this.Bke=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DK(this);this.Gx.Bw=!!this.A8;this.Gw.
Bw=!!this.A8;this.Am();},Aio:function(G){if(this.A8>1)this.Ex(this.A8-1);},_Init:
function(aArg){C.Dr._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BF._Init.call(this.JA={I:this},0);A.acg.AK._Init.call(this.HM={I:this}
,0);A.acg.Text._Init.call(this.Ui={I:this},0);A.acg.Text._Init.call(this.Bb={I:this
},0);A.acg.Text._Init.call(this.Sq={I:this},0);A.Core.BF._Init.call(this.Gx={I:this
},0);A.Core.BF._Init.call(this.Gw={I:this},0);this.__proto__=C.AGQ;this.H(Aah);this.
V.R(Ayj);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H8.Z(false);this.JA.Filter=1;this.
HM.H(AWv);this.HM.L(0x55FFFFFF);this.Ui.H(AWw);this.Ui.Je(true);this.Bb.H(AWx);this.
Bb.A4(0x14);this.Bb.R(AWy);this.Sq.H(AWz);this.Sq.Je(true);this.Sq.A4(0x14);this.
Gx.Filter=4;this.Gx.Bw=false;this.Gw.Filter=5;this.Gw.Bw=false;this.J(this.HM,0);
this.J(this.Ui,0);this.J(this.Bb,0);this.J(this.Sq,0);this.JA.BG=[this,this.Adw];
this.Ui.S(A.aaL(A.fl.EK));this.Bb.S(A.aaL(A.fl.EK));this.Sq.S(A.aaL(A.fl.EK));this.
Gx.BG=[this,this.Al3];this.Gx.D1=[this,this.AiE];this.Gw.BG=[this,this.Al2];this.
Gw.D1=[this,this.Aip];this.FN=A._NewObject(C.Aet,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dr;this.Av._Done();this.JA._Done();this.HM._Done();this.Ui._Done(
);this.Bb._Done();this.Sq._Done();this.Gx._Done();this.Gw._Done();C.Dr._Done.call(
this);},_ReInit:function(){C.Dr._ReInit.call(this);this.Av._ReInit();this.JA._ReInit(
);this.HM._ReInit();this.Ui._ReInit();this.Bb._ReInit();this.Sq._ReInit();this.Gx.
_ReInit();this.Gw._ReInit();this.Ui.S(A.aaL(A.fl.EK));this.Bb.S(A.aaL(A.fl.EK));
this.Sq.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((
B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B7:null,AmR:null,AqO:null,Em:null,Text:null,String:A.jV,Bd9:A.jV,Km:0x12
,ALb:0,AQ:0xFFFFFFFF,Oa:0,AUG:0,A$A:0,Bd_:true,G3:function(CM){var LN=(A.Core.ARC.
isPrototypeOf(CM)?CM:null);if(!!LN)this.BC4(this);return A.Core.P.G3.call(this,CM
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Aji],this);}
,Dc:function(aFilter){return A.abh(this.Text.Dc(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bd_){this.Bd9=E;this.Bd_=false;
}this.ALb=E.length;A.pe([this,this.Aji],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Aji],this);},AY:function(E){if(this.AmR===E)return;this.
AmR=E;A.pe([this,this.Aji],this);},Cl:function(E){if(this.AqO===E)return;this.AqO=
E;A.pe([this,this.Aji],this);},A4:function(E){if(E===this.Km)return;this.Km=E;this.
Text.A4(E);},Aji:function(G){var B;var ALh=0;if(!this.ALb){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.Lv(false);if(!!this.B7){ALh=
this.B7.Yy(this.String,0,this.ALb);if(ALh<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)
)){this.Text.S(this.B7);this.Text.Aw3(this.Oa);return;}}this.Text.Lv(true);if(!!
this.AmR){ALh=this.AmR.Yy(this.String,0,this.ALb);this.Text.S(this.AmR);this.Text.
Aw3(this.AUG);if((ALh<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)))&&(((B=this.Text.Dc(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqO){this.Text.S(this.AqO);
if(((B=this.Text.Dc())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw3((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BC4:function(G){this.R(this.Bd9);},Q7:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q7(E);},ASz:function(){return A.abh(
this.Text.Dc(),this.M.slice(0,2));},Aff:function(AoI){return A.abf(this.M.slice(
0,2),this.Text.Aff(AoI));},Aw3:function(E){if(this.Oa===E)return;this.Oa=E;A.pe([
this,this.Aji],this);},Bn0:function(E){if(this.AUG===E)return;this.AUG=E;A.pe([this
,this.Aji],this);},Bn1:function(E){if(this.A$A===E)return;this.A$A=E;A.pe([this,
this.Aji],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHG);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHG);this.Text.R(Ro);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqO)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjO={Y:null,IR:null,AeL:null,Jb:null,Nh:null,AeF:null,AeK:null,AeJ:null,AeG:
null,AeI:null,AeH:null,Nj:null,N2:null,MD:null,Df:function(E){C.Yz.Df.call(this,
E);this.IR.L(E);this.AeL.L(E);this.Jb.L(E);this.Nh.L(E);this.MD.L(E);this.AeF.L(
E);this.Nj.L(E);this.N2.L(E);this.AeK.L(E);this.AeJ.L(E);this.AeG.L(E);this.AeI.
L(E);this.AeH.L(E);},DX:function(G){C.Yz.DX.call(this,G);this.XR(8,1,this.Nh);this.
XR(12,1,this.MD);this.XR(11,1,this.AeF);this.XR(7,1,this.Nj);this.XR(14,1,this.N2
);this.XR(1,4,this.IR);this.XR(1,1,this.AeL);this.XR(4,1,this.Jb);this.XR(22,1,this.
AeK);this.XR(26,1,this.AeJ);this.XR(30,1,this.AeG);this.XR(19,1,this.AeI);this.XR(
31,1,this.AeH);this.Text.Z(!this.Y.TS(null,0x1));},XR:function(AJt,Eb,AfU){var ABm=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adi=A._GetAutoObject(
A.Device.Device).An.Filter.DM(AJt,Eb);if(!!Adi){ABm=true;switch(AJt){case 14:{var
AzC=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adi)?Adi:null);if(!!AzC)AfU.
Ax(A._GetAutoObject(A.Device.Converter).A5u(AzC.A6));}break;case 7:{var AzC=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adi)?Adi:null);if(!!AzC)AfU.Ax(A._GetAutoObject(
A.Device.Converter).AmT(AzC.A6));}break;case 1:if(Eb===4)AfU.Ax(A.aaL(A.ach.ADU)
);else if(Adi.Operator===4)ABm=false;break;case 22:switch(Adi.Operator){case 0:case
3:AfU.Ax(A.aaL(A.ach.AQI));break;default:AfU.Ax(A.aaL(A.ach.AjU));}break;case 26:
switch(Adi.Operator){case 0:case 3:AfU.Ax(A.aaL(A.ach.AQG));break;default:AfU.Ax(
A.aaL(A.ach.Avy));}break;default:;}}else if((AJt===1)&&(Eb===4)){ABm=true;AfU.Ax(
A.aaL(A.ach.AeB));}}else if((AJt===1)&&(Eb===4)){ABm=true;AfU.Ax(A.aaL(A.ach.AeB
));}AfU.Z(ABm);},_Init:function(aArg){C.Yz._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);A.acg.Ap._Init.call(
this.Nh={I:this},0);A.acg.Ap._Init.call(this.AeF={I:this},0);A.acg.Ap._Init.call(
this.AeK={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeG={I:this},0);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);A.acg.Ap._Init.call(
this.N2={I:this},0);A.acg.Ap._Init.call(this.MD={I:this},0);this.__proto__=C.AjO;
this.Y.A1(0x3F);this.Y.H(AWA);this.Y.JZ(3);this.IR.H(Ayk);this.AeL.H(AWB);this.AeL.
Aj(true);this.Jb.H(As6);this.Jb.Aj(true);this.Nh.H(Ayl);this.Nh.Aj(true);this.AeF.
H(AWC);this.AeF.Aj(true);this.AeK.H(AHH);this.AeK.Aj(true);this.AeJ.H(AHH);this.
AeJ.Aj(true);this.AeG.H(AWD);this.AeG.Aj(true);this.AeI.H(AHI);this.AeI.Aj(true);
this.AeH.H(AHI);this.AeH.Aj(true);this.Nj.H(AHJ);this.Nj.Aj(true);this.N2.H(AHK);
this.N2.Aj(true);this.Text.R(A.aaR(A.acf.None));this.MD.H(AHJ);this.MD.Aj(true);
this.J5(this.Gv,-3);this.J5(this.D2,-3);this.J5(this.A_,-3);this.J5(this.AP,-2);
this.J(this.Y,-2);this.J(this.IR,-2);this.J(this.AeL,-2);this.J(this.Jb,-2);this.
J(this.Nh,-2);this.J(this.AeF,-2);this.J(this.AeK,-2);this.J(this.AeJ,-2);this.J(
this.AeG,-2);this.J(this.AeI,-2);this.J(this.AeH,-2);this.J(this.Nj,-2);this.J(this.
N2,-2);this.J(this.MD,0);this.IR.Ax(A.aaL(A.ach.AeB));this.AeL.Ax(A.aaL(A.ach.AQv
));this.Jb.Ax(A.aaL(A.ach.APT));this.Nh.Ax(A.aaL(A.ach.ADP));this.AeF.Ax(A.aaL(A.
ach.Ag3));this.AeK.Ax(A.aaL(A.ach.AjU));this.AeJ.Ax(A.aaL(A.ach.Avy));this.AeG.Ax(
A.aaL(A.ach.AQs));this.AeI.Ax(A.aaL(A.ach.AQt));this.AeH.Ax(A.aaL(A.ach.AQr));this.
Nj.Ax(A.aaL(A.ach.ADR));this.N2.Ax(A.aaL(A.ach.AvC));this.MD.Ax(A.aaL(A.ach.ADX)
);},_Done:function(){this.__proto__=C.Yz;this.Y._Done();this.IR._Done();this.AeL.
_Done();this.Jb._Done();this.Nh._Done();this.AeF._Done();this.AeK._Done();this.AeJ.
_Done();this.AeG._Done();this.AeI._Done();this.AeH._Done();this.Nj._Done();this.
N2._Done();this.MD._Done();C.Yz._Done.call(this);},_ReInit:function(){C.Yz._ReInit.
call(this);this.Y._ReInit();this.IR._ReInit();this.AeL._ReInit();this.Jb._ReInit(
);this.Nh._ReInit();this.AeF._ReInit();this.AeK._ReInit();this.AeJ._ReInit();this.
AeG._ReInit();this.AeI._ReInit();this.AeH._ReInit();this.Nj._ReInit();this.N2._ReInit(
);this.MD._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yz.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amt={H$:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H$.G7();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An6:function(){C.Re.
An6.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz2(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.C9.L(A._GetAutoObject(
A.acj.Temperature).Bz5(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lz));this.JT.L(A._GetAutoObject(A.acj.Temperature).Bz3(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.HF.L(A.
_GetAutoObject(A.acj.Temperature).Bz4(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lz));this.MP.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);}break;default:;}},Z4:function(){C.Re.Z4.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Ct(A.aaL(A.ach.AQT));this.N.C3(A.aaL(
A.ach.Am1));}break;case 4:{this.N.Ct(null);this.N.C3(A.aaL(A.ach.AvK));}break;default:;
}},WX:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lz>3240)&&(A._GetAutoObject(A.Device.
Device).Lz<5460)){A._GetAutoObject(A.Device.Device).AhK();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H$.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lz);var B2=A._GetAutoObject(A.Device.Converter).AsI(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz);this.H$.OnSetRatingTemperature(
B2);this.H$.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();
}break;case 4:this.AKH(this);break;default:;}},AkT:function(G){C.Re.AkT.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dv(9);break;case 4:this.AKH(this);break;default:;}},AxV:function(
){C.Re.AxV.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JT.R(A._GetAutoObject(A.acj.Temperature).Bz_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));break;default:;}},AxW:function(
){C.Re.AxW.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WJ(A._GetAutoObject(A.acj.Temperature).Bz6(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lz));this.Jk.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WJ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AUT:function(){this.C9.Ax(
A.aaL(A.ach.AvJ));this.C9.Cw(A._GetAutoObject(A.acj.Temperature).Bz$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.N0.Cw(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amt;this.Dq(
C.IP);this.H$=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahx={N$:null,DL:null,Io:null,Bb:null,Auy:null,String:A.jV,AxJ:A.jV,MG:7,Aj9:
2,KW:0,AU6:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DL.H([0,0,aSize[0]-this.Aj9,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DL.
S(A.aaL(A.fl.Bg));else this.DL.S(A.aaL(A.fl.Ak));this.Io.S(this.DL.B7);this.Io.H(
this.DL.M);this.Bb.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WO],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DL.R(E);},Ahs:function(
E){if(this.AxJ===E)return;this.AxJ=E;this.Io.R(E);},Ab7:function(E){this.MG=E;if(
E<10)this.ATo(2);else if(E<40)this.ATo(1);else this.ATo(0);A.pe([this,this.WO],this
);},WO:function(G){var B;while(!!this.Bb.Ah)this.HP(this.Bb.Ah);if(this.MG>1){var
Add=this.AOQ();var A2u=this.AOO();var Apn=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAf;var AK7;var At9;var Al_=null;if(!!this.N$&&(this.N$.A0>0))Al_=this.N$.K5;
while((Add>=A2u)&&(Add>0)){var AtK=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*(((Add-A2u)/86400)|0))/this.MG)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*((((Add-A2u)/86400)|0)+1))/this.MG)|0;while(!!Al_&&(Al_.Timestamp>=
Add)){if(Al_.Timestamp<(Add+86400))AtK.OA(Al_.A6,Al_.Timestamp);Al_=Al_.Ah;}var Auj=
0;if(AtK.A0>0)Auj=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]))/AtK.A0
)|0;else if(this.MG<10){Auj=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]);
At9=A._NewObject(A.acg.Text,0);At9.H([x1,Apn,x2,Apn+Auj]);At9.S(A.aaL(A.fl.Bg));
At9.L(A.jb.Text);At9.R(A.aaR(A.acf.Afb));this.J(At9,0);}var AJV=AtK.K5;var O=0;while(
!!AJV){if(O>=AtK.A0)throw new Error(AWE);AAf=A._NewObject(A.acg.AK,0);AAf.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJV.A6));if(O===(AtK.A0-1))AAf.H([x1,Apn+(O*Auj),x2,this.Bb.
M[1]]);else AAf.H([x1,Apn+(O*Auj),x2,Apn+((O+1)*Auj)]);this.J(AAf,0);AJV=AJV.Ah;
O=O+1;}if(this.AU6){var ByQ=A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(
A.Device.Helper).Du());var ByP=A._GetAutoObject(A.Device.Helper).Aqo(Add);if(ByQ===
ByP){var ALz=A._NewObject(A.acg.Aeo,0);ALz.L(A.jb.Text);var Bew=(x1+this.Aj9)+(((
x2-x1)/2)|0);ALz.H([Bew-4,this.Bb.M[1]-4,Bew+4,this.Bb.M[1]]);ALz.Zz(this.Auy);this.
J(ALz,0);}}Add=Add-86400;if(this.Aj9>0){AK7=A._NewObject(A.acg.AK,0);AK7.H([x1,Apn
,x1+this.Aj9,Apn+((((B=this.M)[3]-B[1])/2)|0)]);AK7.L(A.jb.Bb);this.J(AK7,0);}}}
},Ab9:function(E){this.N$=E;A.pe([this,this.WO],this);},ATo:function(E){if(this.
Aj9===E)return;this.Aj9=E;A.pe([this,this.WO],this);},Df:function(E){if(this.KW===
E)return;this.KW=E;this.DL.L(E);this.Io.L(E);},AOO:function(){var B;return this.
AOQ()-(((((B=this.MG)<0)?B+0x100000000:B)-1)*86400);},AOQ:function(){return A._GetAutoObject(
A.Device.Converter).AhO();},Bn5:function(E){if(this.AU6===E)return;this.AU6=E;A.
pe([this,this.WO],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DL={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0
);A.acg.AK._Init.call(this.Bb={I:this},0);C.AxT._Init.call(this.Auy={I:this},0);
this.__proto__=C.Ahx;this.H(BD);this.As(false);this.DL.H(AHL);this.DL.Hn(5);this.
DL.A4(0x11);this.DL.L(A.jb.Text);this.Io.H(AHL);this.Io.Hn(5);this.Io.A4(0x14);this.
Io.L(A.jb.Text);this.Bb.H(AWF);this.Bb.L(A.jb.Bb);this.KW=A.jb.Text;this.Auy.H(AWG
);this.J(this.DL,0);this.J(this.Io,0);this.J(this.Bb,0);this.DL.S(A.aaL(A.fl.Ak)
);this.Io.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DL._Done();this.Io._Done();this.Bb._Done();this.Auy._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DL._ReInit(
);this.Io._ReInit();this.Bb._ReInit();this.Auy._ReInit();this.DL.S(A.aaL(A.fl.Ak
));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Auy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5A={Ah:null,Timestamp:0,A6:0,_Init:function(
aArg){this.__proto__=C.A5A;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajs={K5:null,M4:null,A0:0,OA:
function(A9,Qi){var Hh;Hh=A._NewObject(C.A5A,0);Hh.A6=A9;Hh.Timestamp=Qi;if(!this.
K5){this.K5=Hh;this.M4=Hh;this.A0=1;}else{this.M4.Ah=Hh;this.M4=Hh;this.A0=this.
A0+1;}},_Init:function(aArg){this.__proto__=C.Ajs;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MT],this);},DF:function(G){var B;var Ff=0;var X=this.AV;switch(
this.Cq.CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;
default:;}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.DK(this);},Al1:function(G){A._GetAutoObject(C.A5
).Fz();},ApI:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agu)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agu,this);},Fh:function(G){var B;this.
Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Br[1]);},DK:function(G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GZ){this.N.Hy(A.jV);this.N.CS(GZ.AxM);this.N.Jj.CZ(255);this.N.GW.CZ(GZ.Axi);this.
N.AFn(GZ.Avm);this.N.Any(GZ.AmS);this.N.C2(GZ.AQm);this.N.C3(GZ.Aq7);GZ.A3z(this
);}},MT:function(s){this.DK(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Rp);this.Background.L(A.jb.CU);this.N.H(U1);this.
N.As(false);this.N.Z(true);this.Y.H(Fc);this.Y.JZ(1);this.Ay.H(Iw);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fh];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AT$={NL:null,AS5:null,Ad3:null,VL:null,GU:null,PopupTimeout:null,Acc:null,AgE:
null,PopupIdToString:null,AtF:null,Text:A.jV,AkE:A.jV,AKc:A.jV,Ak0:0,ALj:-1,AzB:-
1,AKO:0,AUb:0,A2E:false,CP:function(){this.A_Y(this.PopupIdToString.BT(this.AUb)
);},Init:function(aArg){this.Bpx(this);},Bhj:function(G){var B;if(this.Ak0>0){this.
A$a((this.Ak0/1000)|0);this.PopupTimeout.WI(0);this.PopupTimeout.PX(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxI(this);},Bhf:function(G){var M8=this.
Text;var AfX=this.AkE;var AKM=A.abi(16,A.jV,null);var index=0;var Azw=0;while(AfX
!==A.jV){Azw=AfX.indexOf(A.Device.PopupParamSeparator,0);if(Azw!==-1){AKM.Set(index
,A.ab1(AfX,Azw,(AfX.length-Azw)+1));AfX=A.ab1(AfX,0,Azw+1);index=index+1;if(index>=
16){A.ab5("%s",(AWH+AfX)+AWI);AfX=A.jV;}}else{AKM.Set(index,AfX);AfX=A.jV;}}index=
0;while(index<M8.length){if((M8.charCodeAt(index)||0)===0x7B){var Bd8=M8.indexOf(
String.fromCharCode(0x7D),index);if(Bd8===-1){A.ab5("%s",(((AWJ+M8)+AWK)+index.toFixed(
))+Ak_);index=M8.length;}else{var Bf0=(Bd8-index)-1;var A3$=A.abW(M8,index+1,Bf0
);var AKL=A.wz(A3$,-1,10);M8=A.ab1(M8,index,Bf0+2);if(A3$===AWL)this.Bol(index);
else if(((AKL>0)&&(AKL<=16))&&(this.AkE!==A.jV)){M8=A.abU(M8,AKM.Get(AKL-1),index
);if(this.A2E===true)this.Bok(A.wz(AKM.Get(AKL-1),0,10));}else A.ab5("%s",(AWM+A3$
)+AWN);}}index=index+1;}this.Boj(M8);},CC:function(G){A.pe([this,this.Bhj],this);
},Ai:function(Ae){var B;this.Ad3.H(A.aaT(this.GU.Dc(),AhV));this.VL.H(A.aaT(this.
GU.Dc(),AhV));if(!!this.NL){this.NL.H(A.abM(this.NL.M,this.GU.M[0]));this.NL.H(A.
abO(this.NL.M,this.GU.M[3]+10));this.NL.H(A.abL(this.NL.M,(B=this.GU.M)[2]-B[0])
);this.NL.H(A.abI(this.NL.M,8));this.Ad3.H(A.abh(A.aaT(this.GU.Dc(),AhV),AHM));this.
VL.H(A.abh(A.aaT(this.GU.Dc(),AhV),AHM));}else{this.Ad3.H(A.aaT(this.GU.Dc(),AhV
));this.VL.H(A.aaT(this.GU.Dc(),AhV));}},DF:function(G){var JH=(A.Core.BF.isPrototypeOf(
G)?G:null);if((JH.CO===4)&&((this.VL.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JH.CO===5)&&((this.VL.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JH.
CO===6)&&!!this.D_().CF)this.D_().AFv(1);else if((JH.CO===7)&&!!this.D_().Ca)this.
D_().AFv(3);},H0:function(G){switch(this.D_().Ahi){case 1:this.Al1(this);break;case
3:this.ApI(this);break;case 2:this.AAN(this);break;case 0:break;default:A.ab5("%s%e"
,AWO,this.D_().Ahi);}},Al1:function(G){var B;(B=this.D_().CF)?B[1].call(B[0],this
):null;},ApI:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAN:
function(G){var B;(B=this.D_().Ce)?B[1].call(B[0],this):null;},LT:function(G){this.
N.IS.L((this.N.IS.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxI(this);},A_Y:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhf],this);},BBf:function(G){var B;this.A$a(this.AzB-1);if(this.AzB<=0){this.PopupTimeout.
AxI(this);(B=this.AS5)?B[1].call(B[0],this):null;}},A_0:function(E){if(this.Ak0===
E)return;this.Ak0=E;A.pe([this,this.Bhj],this);},A_L:function(E){if(this.AkE===E
)return;this.AkE=E;A.pe([this,this.Bhf],this);},Boj:function(E){if(this.AKc===E)
return;this.AKc=E;this.ABF(this);this.ByX(this);},ABF:function(G){if((this.AzB!==-
1)&&(this.ALj!==-1)){var BzM=this.AtF.Format(AWP);this.GU.R(A.abU(this.AKc,BzM,this.
ALj));}else this.GU.R(this.AKc);this.GU.H(AHN);},Bol:function(E){if(this.ALj===E
)return;this.ALj=E;this.ABF(this);},A$a:function(E){if(this.AzB===E)return;this.
AzB=E;this.AtF.AF0(E);A.pe([this,this.ABF],this);},ByX:function(G){this.GU.Dc();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A$c:function(
E){if(this.A2E===E)return;this.A2E=E;if(E===true)A.pe([this,this.BBR],this);},BBR:
function(G){if(!this.NL){this.NL=A._NewObject(A.acs.ADF,0);this.NL.Gb(0);this.NL.
EV(100);this.NL.OnSetAppearance(this.Acc);this.J(this.NL,0);this.AhA(this.NL,this.
GU);}this.NL.Bx(this.AKO);},Bok:function(E){if(this.AKO===E)return;this.AKO=E;if(
!!this.NL)this.NL.Bx(this.AKO);},Bpx:function(G){var B;this.N.CZ(0);this.AgE.AnV(
this);},BnU:function(E){if(this.AUb===E)return;this.AUb=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad3={I:this},0);A.acg.BW._Init.
call(this.VL={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADG._Init.call(this.Acc={I:this},
0);A.acl.Gn._Init.call(this.AgE={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtF={I:this},0);this.
__proto__=C.AT$;var B;this.H(Cf);this.Background.H(Fc);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.As(false);this.Ek.Z(false);this.Ad3.H(AHO);this.
Ad3.L(A.jb.CJ);this.VL.H(AHO);this.VL.Nu(2);this.VL.L(A.jb.Text);this.GU.H(AHN);
this.GU.Hn(10);this.GU.Je(true);this.GU.Boh(0);this.GU.Lv(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PX(0);this.Acc.A_5(0);this.Acc.A_3(A.jb.AV);this.Acc.A_2(0);
this.Acc.AGd(AHw);this.AgE.HO(1);this.AgE.B3=255;this.AgE.Cx=0;this.J5(this.Ek,-
1);this.J(this.Ad3,0);this.J(this.VL,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.MK=[this,this.BBf];this.Acc.A_4(A.aaL(A.ach.N1));this.Acc.A_1(
A.aaL(A.ach.N1));this.AgE.Q=[B=this.N,B.Awj,B.A0E];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad3._Done();this.VL._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Acc._Done();this.AgE._Done();this.PopupIdToString._Done();this.AtF.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad3._ReInit();this.VL._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Acc._ReInit();this.AgE._ReInit();this.PopupIdToString._ReInit();this.AtF._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS5)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtF)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.My={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FT=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FT=A.jb.Text;
GY=A.jb.Bm;}if(!this.LM){this.Background.L(FT);this.V.L(A.jb.Am2);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.My;},_className:"Application::DarkThemeMenuItem"
};C.Ang={AdC:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ang;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaJ:function(G){A.
_GetAutoObject(A.Device.Device).Dv(0);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=[this,this.A3A];this.BQ.Ce=null;this.BQ.CF=[this,this.AaJ];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.Aez));}return this.
BQ;},A3A:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).H0(this);},CC:function(G){},AIR:function(s){this.CC(s);},E3:function(
G){},AyR:function(s){this.E3(s);},_Init:function(aArg){C.Abl._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APN={Wd:
null,YU:null,YO:null,Init:function(aArg){this.Ba(this.Wd);},Adt:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YU)A._GetAutoObject(A.Device.
Device).AZ(6,true,A.jV,0,[this,this.BB5]);else if(Aa===this.Wd)A._GetAutoObject(
A.Device.Device).AZ(9,true,A.jV,0,[this,this.BCo]);else if(Aa===this.YO)A._GetAutoObject(
C.A5).Cb(4);else throw new Error(Aym);A._GetAutoObject(A.Device.Device).Dv(0);},
BB5:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGz();},BCo:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).Axz();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.My._Init.call(this.Wd={I:this},0);C.My._Init.call(this.YU={I:this
},0);C.My._Init.call(this.YO={I:this},0);this.__proto__=C.APN;this.H(AcO);this.Wd.
H(BD);this.Wd.As(true);this.Wd.T(A.aaR(A.acf.A$S));this.Wd.Bh(true);this.YU.H(I1
);this.YU.As(true);this.YU.T(A.aaR(A.acf.A$z));this.YU.Bh(true);this.YO.H(Qc);this.
YO.As(true);this.YO.T(A.aaR(A.acf.SX));this.YO.Bh(true);this.J(this.Wd,0);this.J(
this.YU,0);this.J(this.YO,0);this.Wd.AR=[this,this.Adt];this.YU.AR=[this,this.Adt
];this.YO.AR=[this,this.Adt];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wd._Done();this.YU._Done();this.YO._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wd._ReInit(
);this.YU._ReInit();this.YO._ReInit();this.Wd.T(A.aaR(A.acf.A$S));this.YU.T(A.aaR(
A.acf.A$z));this.YO.T(A.aaR(A.acf.SX));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GJ={AaF:null,OverlayMenu:null,WS:null,A4u:null
,Lf:null,A3_:null,AkG:null,N9:null,AAl:100,Bc5:false,Init:function(aArg){var B;A.
zX([this,this.Bfs],[B=A._GetAutoObject(A.Device.Device),B.Awk,B.Ay0],0);A.zX([this
,this.Bfm],[B=A._GetAutoObject(A.Device.Device),B.ASL,B.A0C],0);A.zX([this,this.
A3s],[B=A._GetAutoObject(A.Device.Device),B.Av_,B.AyT],0);A.zX([this,this.BAM],[
B=A._GetAutoObject(A.Device.Device),B.Av7,B.AyS],0);A.zX([this,this.BAN],[B=A._GetAutoObject(
A.Device.Device),B.A8U,B.Bbw],0);A.zX([this,this.ApJ],[B=A._GetAutoObject(A.Device.
Device),B.ASW,B.A0K],0);A.zX([this,this.BfI],[B=A._GetAutoObject(A.Device.Device
),B.Uo,B.U8],0);A.pe([this,this.Bfs],this);A.pe([this,this.Bfm],this);A.pe([this
,this.ApJ],this);A.pe([this,this.BfI],this);this.A4u.Au([B=this.WS,B.AEJ,B.Zr]);
this.J(this.WS,0);this.Ba(this.WS);this.ByA(this);},Ai:function(Ae){},Bfm:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEv){if(!this.AaF){this.AaF=A._NewObject(
C.Asu,0);this.AaF.H(A.abJ(this.AaF.M,this.WS.M.slice(0,2)));this.AaF.H(A.abO(this.
AaF.M,this.WS.M[3]-((B=this.AaF.M)[3]-B[1])));this.J(this.AaF,1);}}else{if(!!this.
AaF)this.HP(this.AaF);this.AaF=null;}},Bfs:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dv(null);break;case 1:this.Dv(A._NewObject(
C.APN,0));break;case 8:this.Dv(A._NewObject(C.AL7,0));break;case 2:this.Dv(A._NewObject(
C.AL4,0));break;case 3:this.Dv(A._NewObject(C.AL$,0));break;case 4:this.Dv(A._NewObject(
C.AUt,0));break;case 5:this.Dv(A._NewObject(C.AV2,0));break;case 6:this.Dv(A._NewObject(
C.AT6,0));break;case 7:this.Dv(A._NewObject(C.Amv,0));break;case 11:this.Dv(A._NewObject(
C.AMD,0));break;case 12:this.Dv(A._NewObject(C.AMC,0));break;case 9:this.Dv(A._NewObject(
C.ARX,0));break;case 10:this.Dv(A._NewObject(C.AMy,0));break;case 14:this.Dv(A._NewObject(
C.ART,0));break;case 15:this.Dv(A._NewObject(C.ARU,0));break;case 13:this.Dv(A._NewObject(
C.ARV,0));break;case 16:this.Dv(A._NewObject(C.AMY,0));break;default:throw new Error(
AWQ+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dv:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WM).ArG(
null);this.N9.AqE(this.OverlayMenu,A._GetAutoObject(C.AxC),null,null,[B=this.OverlayMenu
,B.AyR],null,true);this.Ba(this.WS);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N9.AkI(this.OverlayMenu,A._GetAutoObject(C.AxB),null,null,null,null,null,[B=this.
OverlayMenu,B.AIR],null,false);this.Ba(this.N9);A._GetAutoObject(C.WM).ArG(this.
OverlayMenu.Lr());}else if(!!this.Lf){this.Ba(this.N9);A._GetAutoObject(C.WM).ArG(
this.Lf.Akm().Lr());}},Ahn:function(E){var B;if(this.Lf===E)return;if(!!this.Lf){
A._GetAutoObject(C.WM).ArG(null);this.N9.AqE(this.Lf.Akm(),A._GetAutoObject(C.Afh
),null,null,[B=this.Lf.Akm(),B.AyR],null,false);this.Ba(this.WS);}this.Lf=E;if(!
!this.Lf){this.N9.AkI(this.Lf.Akm(),A._GetAutoObject(C.Afh),null,null,null,null,
null,[this,this.Bmf],null,false);this.Ba(this.N9);A._GetAutoObject(C.WM).ArG(this.
Lf.Akm().Lr());}else if(!!this.OverlayMenu){this.Ba(this.N9);A._GetAutoObject(C.
WM).ArG(this.OverlayMenu.Lr());}},ByA:function(G){var B;var F;this.J(this.A3_,0);(
F=A._GetAutoObject(C.WM),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WM).M)[3]-B[1]))));this.ZH(this.N9);},A3s:function(G){if(A._GetAutoObject(A.Device.
Device).AmC)switch(A._GetAutoObject(A.Device.Device).Im){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A5).Ab$(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa8<98)A._GetAutoObject(C.A5).Cb(4);}else{this.AAl=100;this.Bdd();}},BAM:
function(G){this.Bdd();},Bdd:function(){if(!A._GetAutoObject(A.Device.Device).AmC
){if(A._GetAutoObject(A.Device.Device).Aa8<=2){if(this.AAl>2)switch(A._GetAutoObject(
A.Device.Device).Im){case 38:break;case 4:case 39:A._GetAutoObject(C.A5).Ab$(38);
break;default:A._GetAutoObject(C.A5).Cb(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa8<=10){if(this.AAl>10)switch(A._GetAutoObject(A.Device.Device).Im){case
39:break;case 4:case 38:A._GetAutoObject(C.A5).Ab$(39);break;default:A._GetAutoObject(
C.A5).Cb(39);}}else if(A._GetAutoObject(A.Device.Device).Aa8<=20){if(this.AAl>20
)switch(A._GetAutoObject(A.Device.Device).Im){case 39:break;case 4:case 38:A._GetAutoObject(
C.A5).Ab$(39);break;default:A._GetAutoObject(C.A5).Cb(39);}}else switch(A._GetAutoObject(
A.Device.Device).Im){case 38:case 4:case 39:A._GetAutoObject(C.A5).Fz();break;default:;
}this.AAl=A._GetAutoObject(A.Device.Device).Aa8;}},BAN:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqr){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AZ(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anv(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AZ(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anv(0
);}break;default:A.ab5("%s",AWR+A._GetAutoObject(A.Device.Device).Aqr.toFixed());
}},ApJ:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dv(0);A._GetAutoObject(C.A5).Cb(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Im===5)A._GetAutoObject(C.A5).Ab$(3);break;
default:;}},BfI:function(G){switch(A._GetAutoObject(A.Device.Device).P4.Z3){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uw(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WJ(65535);A._GetAutoObject(A.Device.Device).Uw(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WJ(255);A._GetAutoObject(A.Device.Device).Uw(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WJ(16776960);A._GetAutoObject(
A.Device.Device).Uw(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WJ(16711935
);A._GetAutoObject(A.Device.Device).Uw(true);}break;default:A.ab5("%s",AWS+A._GetAutoObject(
A.Device.Device).P4.Z3.toFixed());}this.Boi(A._GetAutoObject(A.Device.Helper).ARo(
));},Bmf:function(G){var B;this.Lf.Akm().CC(this);this.Lf.BBd(this);},Boi:function(
E){if(this.Bc5===E)return;this.Bc5=E;if(E){if(A._GetAutoObject(A.Device.Device).
Im===3)A._GetAutoObject(C.A5).Cb(27);else if(A._GetAutoObject(A.Device.Device).Im
!==27)A._GetAutoObject(A.Device.Device).AZ(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Im===27)A._GetAutoObject(A.Device.Device).AZ(112,true,A.jV,0,[this
,this.A1q]);},A1q:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Ab$(85);}
,Bli:function(){return this.Lf;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkG._Init.call(this.AkG={I:this},0);C.N9._Init.call(this.N9={I:this},0);this.
__proto__=C.GJ;this.H(Cf);this.N9.H(Rp);this.J(this.N9,0);this.WS=A._NewObject(C.
WS,0);this.A4u=A._GetAutoObject(C.A5);this.AkG.ANE=[this,this.Bli,this.Ahn];this.
A3_=A._GetAutoObject(C.WM);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkG._Done();this.N9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkG._ReInit();this.N9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WS)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4u)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3_)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abl={A$n:
null,BQ:null,N:null,Cq:null,Am9:null,Am$:null,QU:null,Am_:null,Am7:null,Anb:null
,Am8:null,DF:function(G){var Ff=0;var X=this.AV;switch(this.Cq.CO){case 6:Ff=2;break;
case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x14
);if(!!X)this.Ba(X);},Bb6:function(s){this.DF(s);},Al1:function(G){var D5=(A.Core.
BF.isPrototypeOf(G)?G:null);if(D5.Acj&&(this.D_().Aso===false))return;A.pe(this.
D_().CF,this);},AI4:function(s){this.Al1(s);},ApI:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);if(D5.Acj&&(this.D_().ZG===false))return;A.pe(this.D_().
Ca,this);},AI6:function(s){this.ApI(s);},H0:function(G){if(this.QU.Acj)return;},
Alj:function(s){this.H0(s);},AAN:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?
G:null);if(D5.Acj&&(this.D_().WQ===false))return;A.pe(this.D_().Ce,this);},AI5:function(
s){this.AAN(s);},D_:function(){if(!!this.Lr())return this.BQ;else return this.N;
},Lr:function(){return this.BQ;},GS:function(E){this.A$n=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BF._Init.
call(this.Cq={I:this},0);A.Core.BF._Init.call(this.Am9={I:this},0);A.Core.BF._Init.
call(this.Am$={I:this},0);A.Core.BF._Init.call(this.QU={I:this},0);A.Core.BF._Init.
call(this.Am_={I:this},0);A.Core.BF._Init.call(this.Am7={I:this},0);A.Core.BF._Init.
call(this.Anb={I:this},0);A.Core.BF._Init.call(this.Am8={I:this},0);this.__proto__=
C.Abl;this.H([0,0,C.Asx[0],C.Asx[1]]);this.N.H(U1);this.N.As(false);this.N.Z(false
);this.Cq.Filter=147;this.Am9.Filter=26;this.Am$.Filter=28;this.QU.Filter=1;this.
Am_.Filter=27;this.Am7.Filter=44;this.Anb.Filter=9;this.Am8.Filter=42;this.J(this.
N,0);this.Cq.BG=[this,this.Bb6];this.Cq.D1=[this,this.Bb6];this.Am9.BG=[this,this.
AI4];this.Am9.D1=[this,this.AI4];this.Am$.BG=[this,this.AI6];this.Am$.D1=[this,this.
AI6];this.QU.BG=[this,this.Alj];this.QU.D1=[this,this.Alj];this.Am_.BG=[this,this.
AI5];this.Am_.D1=[this,this.AI5];this.Am7.BG=[this,this.AI4];this.Am7.D1=[this,this.
AI4];this.Anb.BG=[this,this.AI6];this.Anb.D1=[this,this.AI6];this.Am8.BG=[this,this.
AI5];this.Am8.D1=[this,this.AI5];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Am9._Done();this.Am$._Done();this.QU._Done();this.
Am_._Done();this.Am7._Done();this.Anb._Done();this.Am8._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Am9._ReInit();this.Am$._ReInit();this.QU._ReInit();this.Am_._ReInit(
);this.Am7._ReInit();this.Anb._ReInit();this.Am8._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$n)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxB={_Init:function(){A.acl.AGW._Init.call(this,0);this.Km=0x22;this.Ad7=true;
this.Au1=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxC={_Init:function(){A.acl.AGW._Init.call(this,0);this.Km=0x22;this.Ad7=true;
this.Au1=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AU4={Sg:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Ael.Sg.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=100;return Ao;},Sf:function(){var
B;var Ao=(A.acl.Axj.isPrototypeOf(B=A.acl.Ael.Sf.call(this))?B:null);if(!Ao)throw new
Error(As7);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Ael._Init.call(this
,aArg);this.__proto__=C.AU4;},_className:"Application::ShadeTransition"};C.AmY={
Ag6:null,S3:null,HS:null,DS:null,AnimalId:-1,GroupId:-1,ADm:true,Df:function(E){
C.BR.Df.call(this,E);this.S3.L(E);this.HS.L(E);this.Ag6.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HS.R(A.aaR(A.acf.Afb)
);else this.HS.R(E.toFixed());},Ab5:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S3.R(A.aaR(A.acf.Afb));else this.S3.R(E.toFixed());},DX:function(
G){},Nz:function(s){this.DX(s);},A_s:function(E){if(this.ADm===E)return;this.ADm=
E;this.S3.Z(this.ADm);this.Ag6.Z(this.ADm);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag6={I:this},0);A.acg.Text._Init.call(this.S3={
I:this},0);A.acg.Text._Init.call(this.HS={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.AmY;this.Ag6.H(AWT);this.S3.H(AWU);this.S3.A4(0x11);this.
S3.R(A.aaR(A.acf.Afb));this.HS.H(AWV);this.HS.A4(0x11);this.HS.R(A.aaR(A.acf.Afb
));this.DS.H(AWW);this.J(this.Ag6,0);this.J(this.S3,0);this.J(this.HS,0);this.J(
this.DS,0);this.Ag6.Ax(A.aaL(A.ach.AQB));this.S3.S(A.aaL(A.fl.Af));this.HS.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag6._Done();this.S3._Done(
);this.HS._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag6._ReInit();this.S3._ReInit();this.HS._ReInit();this.DS.
_ReInit();this.S3.R(A.aaR(A.acf.Afb));this.HS.R(A.aaR(A.acf.Afb));this.S3.S(A.aaL(
A.fl.Af));this.HS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADw={Init:function(
aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.SO
],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9c,B.AnC],0);
A.zV([this,this.Nz],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nz],[
B=A._GetAutoObject(A.Device.Helper).W,B.PV,B.EC],0);A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9Q,B.Axf],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A85,B.Ae1],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper
).W,B.A86,B.Uu],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.
A89,B.Ae5],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9b,B.
Ae7],0);A.pe([this,this.Nz],this);},Df:function(E){C.AmY.Df.call(this,E);this.DS.
Df(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqX()){this.Ab5(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab5(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFh(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae1(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uu(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae5(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae7(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmY._Init.call(this,aArg);this.
__proto__=C.ADw;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kp={AhL:A.abi(3,A.jV,null),BI:A.abi(3,0,{0:7,1:30,2:90}),Ank:3,Dt:function(){
if(this.Ank<3)return this.Ank;else return 3;},C6:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ank))return-1;return this.BI.Get(aIndex);},Gm:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ank))return AWX;return this.AhL.Get(aIndex);},DZ:function(
A9){var O=0;while((O<3)&&(O<=this.Ank)){if(this.BI.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ank)){if(this.BI.Get(
O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhL=[]).__proto__=C.Kp.AhL;(this.BI=[]).__proto__=C.Kp.BI;this.
__proto__=C.Kp;this.AhL.Set(0,A.aaR(A.acf.A7Q));this.AhL.Set(1,A.aaR(A.acf.A7O));
this.AhL.Set(2,A.aaR(A.acf.A7P));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhL.Set(0,A.aaR(A.acf.A7Q));this.AhL.Set(1,A.aaR(A.acf.A7O));this.AhL.Set(2,A.aaR(
A.acf.A7P));},_className:"Application::Days"};C.AU1={Amx:null,BU:null,Q8:null,QH:
null,Bag:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBz],[B=A._GetAutoObject(A.Device.Device),B.ArA,B.Atm],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Dr.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GD=this.Bo.Bw;this.BU.L(A.jb.Bm);if(!!this.Q)this.BU.R(((AWY+A._GetAutoObject(
A.Device.Converter).AkY((F=this.Q,F[1].call(F[0]))))+CR)+A._GetAutoObject(A.acj.
Temperature).AlL());this.H8.Z((this.AM<A._GetAutoObject(A.Device.Helper).A7a())&&(
Fu||GD));},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kh:function(G){var F;var BP=this.AM;C.Dr.Kh.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A7a()){this.Bx(this.AM+10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kc:function(G){var F;var BP=this.
AM;C.Dr.Kc.call(this,G);this.Bx(this.AM-10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_7:function(E){if(this.Bag===E)return;
this.Bag=E;this.Am();},BBz:function(G){this.Am();},_Init:function(aArg){C.Dr._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amx={I:this},0);C.CG._Init.call(this.BU={
I:this},0);A.acg.AK._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AU1;this.H(Aah);this.Background.H(Aah);this.V.H(As8);
this.V.L(A.jb.Bm);this.Amx.H(AWZ);this.Amx.L(A.jb.Afu);this.Hx.H(AW0);this.BU.H(
AW1);this.BU.A4(0x12);this.BU.L(A.jb.Text);this.H8.H(AW2);this.Q8.H(AW3);this.Q8.
L(A.jb.E1);this.QH.H(AW4);this.J(this.Amx,-2);this.J(this.BU,-1);this.J(this.Q8,
0);this.J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BU.
S(A.aaL(A.fl.EK));this.BU.AY(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADM));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dr;this.Amx._Done();this.BU._Done();this.
Q8._Done();this.QH._Done();C.Dr._Done.call(this);},_ReInit:function(){C.Dr._ReInit.
call(this);this.Amx._ReInit();this.BU._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BU.S(A.aaL(A.fl.EK));this.
BU.AY(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.
Amx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnR={Q:null
,Ai1:null,Init:function(aArg){var B;A.zX([this,this.Bb3],[B=A._GetAutoObject(A.Device.
Device),B.AEJ,B.Bbp],0);A.pe([this,this.Bb3],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab$:function(Alo){A._GetAutoObject(A.Device.Device).Zr(Alo
);},AKB:function(G){if(this.K&&this.K.AKB)return this.K.AKB.apply(this,arguments
);else return C.AnR.Bb_.apply(this,arguments);},Bb_:function(G){var F;if(!this.Q
){A.ab5("%s",AW5);return;}var By=null;if(this.Ai1.Contains(A._GetAutoObject(A.Device.
Device).Im)){By=this.Ai1.A$l();while(!!By&&(By.An5!==A._GetAutoObject(A.Device.Device
).Im))By=this.Ai1.A$l();}if(!By)By=this.Bz9(A._GetAutoObject(A.Device.Device).Im
);(F=this.Q,F[2].call(F[0],By));},Bb3:function(s){this.AKB(s);},Bz9:function(Alo
){var By=null;switch(Alo){case 0:case 1:By=A._NewObject(C.AU_,0);break;case 2:By=
A._NewObject(C.X6,0);break;case 3:By=A._NewObject(C.Avx,0);break;case 53:By=A._NewObject(
C.AVP,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASb,0);break;case 6:By=A._NewObject(C.ARM,0);break;case 16:By=A._NewObject(C.ANM
,0);break;case 22:By=A._NewObject(C.AVK,0);break;case 17:By=A._NewObject(C.AVp,0
);break;case 42:By=A._NewObject(C.ANJ,0);break;case 87:By=A._NewObject(C.AUB,0);
break;case 88:By=A._NewObject(C.AUA,0);break;case 89:By=A._NewObject(C.AVF,0);break;
case 95:By=A._NewObject(C.AVI,0);break;case 23:By=A._NewObject(C.AV9,0);break;case
18:By=A._NewObject(C.ANZ,0);break;case 19:By=A._NewObject(C.AUC,0);break;case 37:
By=A._NewObject(C.ARb,0);break;case 76:By=A._NewObject(C.AUh,0);break;case 63:By=
A._NewObject(C.ANX,0);break;case 64:By=A._NewObject(C.ANY,0);break;case 82:By=A.
_NewObject(C.ANW,0);break;case 83:By=A._NewObject(C.ANU,0);break;case 92:By=A._NewObject(
C.ANS,0);break;case 93:By=A._NewObject(C.ANV,0);break;case 65:By=A._NewObject(C.
ANT,0);break;case 5:By=A._NewObject(C.AVi,0);break;case 4:By=A._NewObject(C.Ad9,
0);break;case 39:By=A._NewObject(C.ANj,0);break;case 38:By=A._NewObject(C.ANC,0);
break;case 28:By=A._NewObject(C.Wz,0);break;case 7:By=A._NewObject(C.AqH,0);break;
case 81:By=A._NewObject(C.AN6,0);break;case 31:By=A._NewObject(C.Art,0);break;case
78:By=A._NewObject(C.AR$,0);break;case 34:By=A._NewObject(C.AL2,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GI,0);break;case 9:By=A._NewObject(C.I_,0);break;case 24:By=A._NewObject(C.AMh
,0);break;case 10:By=A._NewObject(C.Amt,0);break;case 21:By=A._NewObject(C.AMl,0
);break;case 11:By=A._NewObject(C.AMk,0);break;case 29:By=A._NewObject(C.AuK,0);
break;case 48:By=A._NewObject(C.AMj,0);break;case 30:By=A._NewObject(C.AMi,0);break;
case 12:By=A._NewObject(C.AMg,0);break;case 40:By=A._NewObject(C.AMf,0);break;case
14:By=A._NewObject(C.ANA,0);break;case 13:By=A._NewObject(C.ANB,0);break;case 20:
By=A._NewObject(C.AV0,0);break;case 41:By=A._NewObject(C.AVZ,0);break;case 43:By=
A._NewObject(C.AOH,0);break;case 44:By=A._NewObject(C.AOG,0);break;case 61:By=A.
_NewObject(C.AN5,0);break;case 62:By=A._NewObject(C.AN4,0);break;case 46:By=A._NewObject(
C.ASo,0);break;case 47:By=A._NewObject(C.ASn,0);break;case 85:By=A._NewObject(C.
AWd,0);break;case 86:By=A._NewObject(C.AWc,0);break;case 71:By=A._NewObject(C.ASj
,0);break;case 72:By=A._NewObject(C.ASi,0);break;case 74:By=A._NewObject(C.AM0,0
);break;case 90:By=A._NewObject(C.AUj,0);break;case 73:By=A._NewObject(C.AUD,0);
break;case 51:By=A._NewObject(C.AL6,0);break;case 52:By=A._NewObject(C.AL5,0);break;
case 15:By=A._NewObject(C.AUq,0);break;case 60:By=A._NewObject(C.AVo,0);break;case
69:By=A._NewObject(C.ARK,0);break;case 70:By=A._NewObject(C.ARJ,0);break;case 26:
By=A._NewObject(C.ASc,0);break;case 54:By=A._NewObject(C.AR_,0);break;case 25:By=
A._NewObject(C.AOh,0);break;case 66:By=A._NewObject(C.AOi,0);break;case 59:By=A.
_NewObject(C.AOg,0);break;case 58:By=A._NewObject(C.AOj,0);break;case 56:By=A._NewObject(
C.AOk,0);break;case 57:By=A._NewObject(C.AqK,0);break;case 68:By=A._NewObject(C.
AOl,0);break;case 67:By=A._NewObject(C.AOe,0);break;case 84:By=A._NewObject(C.AMn
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMA,0);break;case 91:By=A._NewObject(C.AVt,0
);break;case 94:By=A._NewObject(C.Aqc,0);break;default:throw new Error(AW6);}if(
!!By)By.An5=Alo;return By;},Cb:function(Alo){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AW7);else this.Ai1.BoL((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zr(Alo);},Fz:function(){var Bgf=3;var Bge=this.Ai1.BoB();if(!!Bge
)Bgf=Bge.An5;else A.ab5("%s",AW8);A._GetAutoObject(A.Device.Device).Zr(Bgf);},_Init:
function(aArg){C.A$H._Init.call(this.Ai1={I:this},0);this.__proto__=C.AnR;this.Init(
aArg);var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai1.
_Done();A.h7--;},_ReInit:function(){this.Ai1._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnR._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A5={_Init:function(){C.AnR._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGr={H$:null,YB:null,Afd:null,AaM:null,ML:
null,AzH:1,RatingMode:0,RatedAttribute:0,CP:function(){this.YB.R(this.BdL(this.RatedAttribute
));this.AKG(this);},Ai:function(Ae){this.ML.R(A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.AR1),Pa,this.AzH.toFixed()));if(this.RatingMode===1)this.ML.Z(true
);else this.ML.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H$.G7();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axu(this.
H$,5);A.zX([this,this.AKG],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0H],0);
A.zX([this,this.AKG],[B=A._GetAutoObject(A.Device.Helper).W,B.PV,B.EC],0);A.pe([
this,this.AKG],this);},AsF:function(G){var a=this.AKk(this.RatedAttribute);this.
Bgv();this.AzH=this.AzH-1;this.Am();if(!a)this.AR8();else this.SN(a);},WX:function(
G){var a=this.BdS(this.RatedAttribute);this.Bgv();this.AzH=this.AzH+1;this.Am();
if(!a)this.A8c();else this.SN(a);},AKk:function(NB){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NB){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHP);},BdS:function(NB){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NB){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHP);},SN:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YB.R(this.BdL(E));this.
DK(E);this.Afd.AnH(this.H$.Bjr(E));if(!this.AKk(E)){if(this.ARk())this.N.Ct(A.aaL(
A.ach.AeC));else this.N.Ct(null);}else this.N.Ct(A.aaL(A.ach.Aez));},BdL:function(
NB){return this.AaM.BT(NB);},Bz8:function(NB){if(!!NB){var a=this.AKk(NB);if(!a)
return A.jV;else return this.BdM(a);}else return A.jV;},Bz7:function(NB){if(!!NB
){var a=this.BdS(NB);if(!a)return A.jV;else return this.BdM(a);}else return A.jV;
},AR8:function(){},A8c:function(){},A7b:function(){return null;},BdM:function(NB
){return this.AaM.LA(NB);},Bgv:function(){if(!!this.RatedAttribute)this.H$.Bpl(this.
RatedAttribute,this.Afd.A6);},AKG:function(G){if(this.ARk())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SN(2);this.DK(this.RatedAttribute
);this.Am();},Adu:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkT:function(G){var a=this.AKk(this.RatedAttribute);if(!a){if(this.ARk())this.
Adu(this);}else this.AR8();},DK:function(NB){this.N.Hy(this.Bz8(NB));if(!!this.N.
An0){this.N.C2(null);this.N.OU(true);}else{this.N.C2(A.aaL(A.ach.Aez));this.N.OU(
false);}this.N.CS(this.Bz7(NB));if(!!this.N.An2){this.N.C3(null);this.N.OV(true);
}else{this.N.C3(this.A7b());this.N.OV(false);}},ARk:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YB={
I:this},0);C.Rating._Init.call(this.Afd={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaM={I:this},0);A.acg.Text._Init.call(this.ML={I:this},0);this.__proto__=
C.AGr;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dq(C.IP);this.YB.H(AW9);this.
YB.Lv(true);this.YB.L(A.jb.Text);this.Afd.H(AW_);this.ML.H(AW$);this.ML.A4(0x14);
this.ML.R(A.aaR(A.acf.AR1));this.ML.L(A.jb.Text);this.J(this.YB,0);this.J(this.Afd
,0);this.J(this.ML,0);this.Ba(this.Afd);this.N.CF=[this,this.AsF];this.N.Ce=[this
,this.AkT];this.N.Ca=[this,this.WX];this.YB.S(A.aaL(A.fl.Af));this.Afd.AR=[this,
this.WX];this.ML.S(A.aaL(A.fl.Af));this.H$=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YB._Done();this.Afd._Done();this.AaM._Done();
this.ML._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YB._ReInit();this.Afd._ReInit();this.AaM._ReInit();this.ML._ReInit();this.
ML.R(A.aaR(A.acf.AR1));this.YB.S(A.aaL(A.fl.Af));this.ML.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ML)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H2={Y:null,Gender:null,AnimalType:null,Breed:null,Jm:null,Pr:null,AsV:null,B0:
null,Da:null,C_:null,CH:null,Go:null,Ay:null,KO:0,Init:function(aArg){A.zX([this
,this.Bb4],this.B0.Q,0);A.pe([this,this.Bb4],this);A.pe([this,this.ABk],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANx(this.
Y);},DF:function(G){var B;var Ff=0;var X=this.AV;switch(this.Cq.CO){case 6:Ff=2;
break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(
X,Ff,0x415);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null
,null);this.ABk(this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},AeW:function(E){
if(this.KO===E)return;this.KO=E;A.abo([this,this.Av8,this.AeW],0);},ABk:function(
G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(
A.aaL(A.ach.E2));this.N.CF=[this,this.AI3];if(!!GZ&&!!GZ.Amp){this.N.E5(A.jV);this.
N.JD.CZ(255);this.N.ArP(GZ.AqP);this.N.Ct(GZ.AvF);this.N.Ce=GZ.Amp;}else{this.N.
E5(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!GZ&&!!GZ.Agu){this.N.CS(GZ.AxM);this.
N.GW.CZ(GZ.Axi);this.N.Any(GZ.AmS);this.N.C3(GZ.Aq7);this.N.Ca=GZ.Agu;}else this.
Aul();},Agf:function(G){A.ab5("%s",Ayn);},Ay3:function(s){this.Agf(s);},Ew:function(
G){A.ab5("%s",Ayn);},AI3:function(s){this.Ew(s);},Aul:function(){A.ab5("%s",Ald);
},AAF:function(G){A.ab5("%s",Ayn);},AcR:function(s){this.AAF(s);},JN:function(Ag
){this.Ba(Ag);this.Y.HI(Ag,true,null,null);this.Y.VC(null,null);},ApE:function(G
){var F;this.C_.Ahr(A._GetAutoObject(A.Device.Helper).Abt((F=this.B0.Q,F[1].call(
F[0]))));},Bb4:function(s){this.ApE(s);},Av8:function(){return this.KO;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.Jm={I:this},
0);A.Device.Na._Init.call(this.Pr={I:this},0);A.Device.K1._Init.call(this.AsV={I:
this},0);C.BX._Init.call(this.B0={I:this},0);C.BX._Init.call(this.Da={I:this},0);
C.AkR._Init.call(this.C_={I:this},0);C.Axx._Init.call(this.CH={I:this},0);C.AsA.
_Init.call(this.Go={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H2;var B;this.N.Z(true);this.Dq(C.IP);this.Y.H(Fc);this.Y.JZ(1);this.KO=A._GetAutoObject(
A.Device.Helper).Abt(this.AnimalType.Q);this.B0.H(AhW);this.B0.Aj(true);this.B0.
T(A.aaR(A.acf.Aft));this.Da.H(Ayo);this.Da.Aj(true);this.Da.T(A.aaR(A.acf.Afo));
this.C_.H(Aoi);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KO));this.C_.Gb(1000);this.
C_.EV(99000);this.C_.Ahr(A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.Q
));this.CH.H(AhX);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Go.H(AXa);
this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.Ay.H(Ayp);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Da,0);this.J(this.C_,0);this.J(this.CH,0);this.J(this.Go
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fh];this.Gender.L5(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L5(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L5(A._GetAutoObject(A.Device.Helper).W);this.Jm.L5(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(this.AnimalType);this.
Da.Au([B=this.Gender,B.B$,B.Cc]);this.Da.CK(this.Gender);this.C_.Au([this,this.Av8
,this.AeW]);this.CH.Gs([this,this.D_,this.GS]);this.CH.L4([B=this.CH,B.FW]);this.
CH.L7(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CK(this.Breed
);this.CH.Anx(this.Pr);this.Go.Gs([this,this.D_,this.GS]);this.Go.L4([B=this.Go,
B.FW]);this.Go.L7(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.CK(
this.Jm);this.Go.Anx(this.AsV);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jm._Done();this.Pr._Done();this.AsV._Done();this.B0._Done();this.Da._Done(
);this.C_._Done();this.CH._Done();this.Go._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jm._ReInit();this.
Pr._ReInit();this.AsV._ReInit();this.B0._ReInit();this.Da._ReInit();this.C_._ReInit(
);this.CH._ReInit();this.Go._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Aft
));this.Da.T(A.aaR(A.acf.Afo));this.C_.T(A.aaR(A.acf.KO));this.CH.T(A.aaR(A.acf.
Breed));this.Go.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wz={Azh:false,LT:function(G){if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(
A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.G7();A._GetAutoObject(A.Device.Helper
).Aqf(A._GetAutoObject(A.Device.Helper).W);},Aul:function(){this.N.CS(A.jV);this.
N.C3(A.aaL(A.ach.ADQ));this.N.Ca=[this,this.Ay3];},CC:function(G){if(!this.Azh){
this.Azh=true;A.pe([this,this.AcR],this);}else C.Art.CC.call(this,G);},AAF:function(
G){A._GetAutoObject(C.A5).Cb(49);},_Init:function(aArg){C.Art._Init.call(this,aArg
);this.__proto__=C.Wz;this.J5(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IP={_Init:function(aArg){C.ADw._Init.call(this,aArg);this.__proto__=C.IP;this.
A_s(false);},_className:"Application::HeaderSelectedAnimalId"};C.I_={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P6:null,Ta:null,Og:
null,Tb:null,Ny:null,OB:null,RT:null,OC:null,RU:null,NO:null,Lh:null,Jv:null,KZ:
null,ME:null,Yu:null,Tc:null,RW:null,Ay:null,AxZ:0,AxY:0,AuI:0,AuH:0,Ars:0,AsM:0
,Avi:0,Avj:0,Am3:true,Ams:false,An$:false,Init:function(aArg){A.zX([this,this.Avo
],this.Lh.Q,0);A.zX([this,this.AuM],this.Jv.Q,0);A.zX([this,this.Bqv],this.KZ.Q,
0);A.zX([this,this.BkN],this.ME.Q,0);A.zX([this,this.BqZ],this.Ny.Q,0);A.zX([this
,this.BqY],this.Og.Q,0);A.zX([this,this.BhB],this.NO.Q,0);A.zX([this,this.BhA],this.
OC.Q,0);this.Ba(this.P6);},DF:function(G){var Ff=0;var X=this.AV;switch(this.Cq.
CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;
}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);this.M0(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E9(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},A3o:function(G){var EE=(C.Aep.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else A.ab5("%s",AHQ+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fn,this.Fr],0);}}},BAK:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A5).Fz();},AAD:function(G){var EE=(
C.AmX.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1n=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1n.EJ=EE.Er;A1n.Operator=0;Aw=A1n;}else A.ab5(
"%s",AHQ+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fn,this.Fr
],0);}}},A_n:function(E){if(this.Avi===E)return;this.Avi=E;A.abo([this,this.Blr,
this.A_n],0);},A_o:function(E){if(this.Avj===E)return;this.Avj=E;A.abo([this,this.
Bls,this.A_o],0);},Avo:function(G){var F;this.A_o((F=this.Lh.Q,F[1].call(F[0])));
var Aw=this.Filter.DM(7,0);if(!!Aw){var AzZ=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!AzZ)AzZ.A6=this.Avj;else A.ab5("%s",AfF);}},AuM:function(G){var
F;this.A_n((F=this.Jv.Q,F[1].call(F[0])));var Aw=this.Filter.DM(14,0);if(!!Aw){var
U_=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!U_)U_.A6=
this.Avi;else A.ab5("%s",AfF);}},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},A_6:function(
E){if(this.AsM===E)return;this.AsM=E;A.abo([this,this.Bl4,this.A_6],0);},Bqv:function(
G){var F;this.A_6((F=this.KZ.Q,F[1].call(F[0])));var Aw=this.Filter.DM(22,1);if(
!!Aw){var Ai$=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ai$
)switch(this.AsM){case 1:Ai$.Operator=5;break;case 0:Ai$.Operator=0;break;default:
A.ab5("%s%e",AHR,this.AsM);}else A.ab5("%s",AfF);}},A_B:function(E){if(this.Ars===
E)return;this.Ars=E;A.abo([this,this.BlG,this.A_B],0);},BkN:function(G){var F;this.
A_B((F=this.ME.Q,F[1].call(F[0])));var Aw=this.Filter.DM(26,1);if(!!Aw){var At1=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At1)switch(this.Ars
){case 1:At1.Operator=5;break;case 0:At1.Operator=0;break;default:A.ab5("%s%e",AHR
,this.Ars);}else A.ab5("%s",AfF);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fn,this.Fr]);this.Ta.
Bk([this,this.Fn,this.Fr]);this.Og.Bk([this,this.Fn,this.Fr]);this.Tb.Bk([this,this.
Fn,this.Fr]);this.Ny.Bk([this,this.Fn,this.Fr]);this.OB.Bk([this,this.Fn,this.Fr
]);this.RT.Bk([this,this.Fn,this.Fr]);this.OC.Bk([this,this.Fn,this.Fr]);this.RU.
Bk([this,this.Fn,this.Fr]);this.NO.Bk([this,this.Fn,this.Fr]);this.Lh.Bk([this,this.
Fn,this.Fr]);this.Jv.Bk([this,this.Fn,this.Fr]);this.KZ.Bk([this,this.Fn,this.Fr
]);this.ME.Bk([this,this.Fn,this.Fr]);this.Yu.Bk([this,this.Fn,this.Fr]);this.Tc.
Bk([this,this.Fn,this.Fr]);this.RW.Bk([this,this.Fn,this.Fr]);this.Ar_(false);A.
pe([this,this.A4Z],this);var Beu=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DM(1,2))?B:null);if(!!Beu){this.Ar_(true);this.AF$(Beu.A6);}var BdY=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DM(1,3))?B:null);if(!!
BdY){this.Ar_(true);this.AGa(BdY.A6);}this.ArJ(false);A.pe([this,this.ALm],this);
var Bet=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DM(4,3))?B:null
);if(!!Bet){this.ArJ(true);this.AE2(A._GetAutoObject(A.Device.Helper).Me(Bet.A6,
A._GetAutoObject(A.Device.Helper).Du()));}var BdX=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DM(4,2))?B:null);if(!!BdX){this.ArJ(true);this.AE4(A.
_GetAutoObject(A.Device.Helper).Me(BdX.A6,A._GetAutoObject(A.Device.Helper).Du()
)+1);}var AzZ=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DM(7,0
))?B:null);if(!!AzZ)this.Lh.Bx(this.Gender.DZ(AzZ.A6));var U_=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DM(14,0))?B:null);if(!!U_)this.Jv.Bx(this.AnimalType.
DZ(U_.A6));var Ai$=this.Filter.DM(22,1);if(!!Ai$){if(!Ai$.Operator)this.KZ.Bx(0);
else this.KZ.Bx(1);}var At1=this.Filter.DM(26,1);if(!!At1){if(!At1.Operator)this.
ME.Bx(0);else this.ME.Bx(1);}},Fr:function(Aq){this.Bk(Aq);},AGa:function(E){if(
this.AxZ===E)return;this.AxZ=E;A.abo([this,this.A9I,this.AGa],0);},AF$:function(
E){if(this.AxY===E)return;this.AxY=E;A.abo([this,this.A9H,this.AF$],0);},BqZ:function(
G){var F;this.AGa((F=this.Ny.Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,3);if(!
!Aw){var ABI=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABI)
ABI.A6=this.AxZ;else A.ab5("%s",AfF);}},BqY:function(G){var F;this.AF$((F=this.Og.
Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,2);if(!!Aw){var ABI=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABI)ABI.A6=this.AxY;else A.ab5("%s",AfF);}},BeZ:
function(G){var EE=(C.AjG.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.Ta){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A6=this.AxY;this.Ba(this.Og);}else if(EE===this.Tb){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=this.AxZ;this.Ba(this.Ny);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A4Z],this);},A4Z:function(
G){var A28=!!this.Filter.DM(this.Og.Er,this.Og.Operator);var A40=!!this.Filter.DM(
this.Ny.Er,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).J6(this.Ta,this.An$
);A._GetAutoObject(A.Device.Helper).J6(this.Tb,this.An$);A._GetAutoObject(A.Device.
Helper).J6(this.Og,A28);A._GetAutoObject(A.Device.Helper).J6(this.Ny,A40);},M0:function(
G){var B;this.Y.VC(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BBG:function(G){A.pe([this,this.Fh],this);A.pe([this,this.
M0],this);},BAH:function(G){this.Ar_(!this.An$);if(this.An$===false){var Aw=this.
Filter.DM(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Nw(Aw);Aw=this.Filter.
DM(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Ar_:function(
E){if(this.An$===E)return;this.An$=E;A.abo([this,this.A9G,this.Ar_],0);A.pe([this
,this.A4Z],this);},AE4:function(E){if(this.AuI===E)return;this.AuI=E;A.abo([this
,this.A8L,this.AE4],0);},AE2:function(E){if(this.AuH===E)return;this.AuH=E;A.abo([
this,this.A8J,this.AE2],0);},BhB:function(G){var F;this.AE4((F=this.NO.Q,F[1].call(
F[0])));var Aw=this.Filter.DM(4,2);if(!!Aw){var AfS=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaR=A._GetAutoObject(A.Device.Helper).ZT(
this.AuI-1);AfS.A6=AaR;}else A.ab5("%s",AfF);}},BhA:function(G){var F;this.AE2((
F=this.OC.Q,F[1].call(F[0])));var Aw=this.Filter.DM(4,3);if(!!Aw){var AfS=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaR=A._GetAutoObject(
A.Device.Helper).ZT(this.AuH);AfS.A6=AaR;}else A.ab5("%s",AfF);}},ALm:function(G
){var A28=this.Am3&&!!this.Filter.DM(this.OC.Er,this.OC.Operator);var A40=this.Am3&&
!!this.Filter.DM(this.NO.Er,this.NO.Operator);A._GetAutoObject(A.Device.Helper).
J6(this.OB,this.Am3);A._GetAutoObject(A.Device.Helper).J6(this.RT,this.Am3&&this.
Ams);A._GetAutoObject(A.Device.Helper).J6(this.RU,this.Am3&&this.Ams);A._GetAutoObject(
A.Device.Helper).J6(this.OC,A28);A._GetAutoObject(A.Device.Helper).J6(this.NO,A40
);},ArJ:function(E){if(this.Ams===E)return;this.Ams=E;A.abo([this,this.A8I,this.
ArJ],0);A.pe([this,this.ALm],this);},BeY:function(G){var EE=(C.AjG.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RT){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper
).ZT(this.AuH);this.Ba(this.OC);}else if(EE===this.RU){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper).ZT(this.AuI-1);this.
Ba(this.NO);}if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.ALm],this);},BAG:function(G){this.ArJ(!this.Ams);if(this.Ams===false){
var Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);while(!!Aw){this.Filter.Nw(Aw
);Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},Bnq:function(E){if(this.Am3===E)return;this.Am3=E;A.pe([this,this.ALm],this
);},Fn:function(){return this.Filter;},Bls:function(){return this.Avj;},Blr:function(
){return this.Avi;},Bl4:function(){return this.AsM;},BlG:function(){return this.
Ars;},A9I:function(){return this.AxZ;},A9H:function(){return this.AxY;},A9G:function(
){return this.An$;},A8L:function(){return this.AuI;},A8J:function(){return this.
AuH;},A8I:function(){return this.Ams;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB1._Init.call(this.Transponder={I:this},0);C.AB1._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACb._Init.call(
this.P6={I:this},0);C.AjG._Init.call(this.Ta={I:this},0);C.Abs._Init.call(this.Og={
I:this},0);C.AjG._Init.call(this.Tb={I:this},0);C.Abs._Init.call(this.Ny={I:this
},0);C.ACb._Init.call(this.OB={I:this},0);C.AjG._Init.call(this.RT={I:this},0);C.
AC0._Init.call(this.OC={I:this},0);C.AjG._Init.call(this.RU={I:this},0);C.AC0._Init.
call(this.NO={I:this},0);C.AmX._Init.call(this.Lh={I:this},0);C.AmX._Init.call(this.
Jv={I:this},0);C.AmX._Init.call(this.KZ={I:this},0);C.AmX._Init.call(this.ME={I:
this},0);C.QF._Init.call(this.Yu={I:this},0);C.QF._Init.call(this.Tc={I:this},0);
C.QF._Init.call(this.RW={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I_;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5y));this.Dq(C.APA);this.Gender.
Au(this.Avj);this.AnimalType.Au(this.Avi);this.Transponder.Au(this.AsM);this.El.
Au(this.Ars);this.Y.H(Fc);this.Y.JZ(1);this.P6.H(I1);this.P6.Aj(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmV(0,1));this.P6.Nq(1);this.Ta.H(Qc);this.Ta.
Aj(true);this.Ta.T(A.aaR(A.acf.AEn));this.Ta.Nq(1);this.Ta.OT(2);this.Og.H(Aai);
this.Og.Nq(1);this.Og.OT(2);this.Og.AF4(A.aaR(A.acf.GM));this.Tb.H(Ale);this.Tb.
Aj(true);this.Tb.T(A.aaR(A.acf.AHk));this.Tb.Nq(1);this.Tb.OT(3);this.Ny.H(Aoj);
this.Ny.Aj(true);this.Ny.Nq(1);this.Ny.OT(3);this.Ny.AF4(A.aaR(A.acf.GM));this.OB.
H(AXb);this.OB.Aj(true);this.OB.T(A.aaR(A.acf.RS));this.OB.Nq(4);this.RT.H(AXc);
this.RT.Aj(true);this.RT.T(A.aaR(A.acf.AEn));this.RT.Nq(4);this.RT.OT(3);this.OC.
H(AXd);this.OC.Nq(4);this.OC.OT(3);this.OC.A_G(2);this.RU.H(AXe);this.RU.Aj(true
);this.RU.T(A.aaR(A.acf.AHk));this.RU.Nq(4);this.RU.OT(2);this.NO.H(AXf);this.NO.
Aj(true);this.NO.Nq(4);this.NO.OT(2);this.NO.A_G(3);this.Lh.H(As9);this.Lh.Aj(true
);this.Lh.Nq(7);this.Lh.Aht(0);this.Lh.OT(0);this.Jv.H(U1);this.Jv.Aj(true);this.
Jv.Nq(14);this.Jv.Aht(0);this.Jv.OT(0);this.KZ.H(U1);this.KZ.Aj(true);this.KZ.Nq(
22);this.KZ.Aht(0);this.KZ.OT(1);this.ME.H(U1);this.ME.Aj(true);this.ME.Nq(26);this.
ME.Aht(0);this.ME.OT(1);this.Yu.H(U1);this.Yu.Aj(true);this.Yu.Nq(11);this.Yu.Aht(
0);this.Yu.OT(0);this.Tc.H(U1);this.Tc.Aj(true);this.Tc.Nq(12);this.Tc.Aht(0);this.
Tc.OT(0);this.RW.H(U1);this.RW.Aj(true);this.RW.Nq(8);this.RW.Aht(0);this.RW.OT(
0);this.Ay.H(Iw);this.J(this.Y,0);this.J(this.P6,0);this.J(this.Ta,0);this.J(this.
Og,0);this.J(this.Tb,0);this.J(this.Ny,0);this.J(this.OB,0);this.J(this.RT,0);this.
J(this.OC,0);this.J(this.RU,0);this.J(this.NO,0);this.J(this.Lh,0);this.J(this.Jv
,0);this.J(this.KZ,0);this.J(this.ME,0);this.J(this.Yu,0);this.J(this.Tc,0);this.
J(this.RW,0);this.J(this.Ay,0);this.N.CF=[this,this.Ew];this.N.Ca=[this,this.BAK
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBG];this.P6.AR=[this,this.BAH
];this.P6.Au([this,this.A9G,this.Ar_]);this.Ta.AR=[this,this.BeZ];this.Og.Gs([this
,this.D_,this.GS]);this.Og.Au([this,this.A9H,this.AF$]);this.Tb.AR=[this,this.BeZ
];this.Ny.Gs([this,this.D_,this.GS]);this.Ny.Au([this,this.A9I,this.AGa]);this.OB.
AR=[this,this.BAG];this.OB.Au([this,this.A8I,this.ArJ]);this.RT.AR=[this,this.BeY
];this.OC.Gs([this,this.D_,this.GS]);this.OC.Au([this,this.A8J,this.AE2]);this.RU.
AR=[this,this.BeY];this.NO.Gs([this,this.D_,this.GS]);this.NO.Au([this,this.A8L,
this.AE4]);this.Lh.AR=[this,this.AAD];this.Lh.Au([B=this.Gender,B.B$,B.Cc]);this.
Lh.CK(this.Gender);this.Jv.AR=[this,this.AAD];this.Jv.Au([B=this.AnimalType,B.B$
,B.Cc]);this.Jv.CK(this.AnimalType);this.KZ.AR=[this,this.AAD];this.KZ.Au([B=this.
Transponder,B.B$,B.Cc]);this.KZ.CK(this.Transponder);this.ME.AR=[this,this.AAD];
this.ME.Au([B=this.El,B.B$,B.Cc]);this.ME.CK(this.El);this.Yu.AR=[this,this.A3o];
this.Tc.AR=[this,this.A3o];this.RW.AR=[this,this.A3o];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P6._Done();this.Ta._Done();this.Og._Done(
);this.Tb._Done();this.Ny._Done();this.OB._Done();this.RT._Done();this.OC._Done(
);this.RU._Done();this.NO._Done();this.Lh._Done();this.Jv._Done();this.KZ._Done(
);this.ME._Done();this.Yu._Done();this.Tc._Done();this.RW._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P6._ReInit();this.Ta._ReInit();this.Og._ReInit();this.Tb._ReInit(
);this.Ny._ReInit();this.OB._ReInit();this.RT._ReInit();this.OC._ReInit();this.RU.
_ReInit();this.NO._ReInit();this.Lh._ReInit();this.Jv._ReInit();this.KZ._ReInit(
);this.ME._ReInit();this.Yu._ReInit();this.Tc._ReInit();this.RW._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5y));this.Ta.T(A.aaR(A.acf.AEn));this.Og.AF4(A.
aaR(A.acf.GM));this.Tb.T(A.aaR(A.acf.AHk));this.Ny.AF4(A.aaR(A.acf.GM));this.OB.
T(A.aaR(A.acf.RS));this.RT.T(A.aaR(A.acf.AEn));this.RU.T(A.aaR(A.acf.AHk));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ta)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$H={ZU:null,BoL:
function(Byb){var EF=A._NewObject(C.A$G,0);EF.AB=Byb;EF.MF=this.ZU;this.ZU=EF;},
A$l:function(){var Vq=null;if(!!this.ZU){Vq=this.ZU.AB;this.ZU=this.ZU.MF;}return Vq;
},Contains:function(Alo){var EF=this.ZU;while(!!EF){if(EF.AB.An5===Alo)return true;
EF=EF.MF;}return false;},BoB:function(){if(!!this.ZU)return this.ZU.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$H;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$G={AB:null,
MF:null,_Init:function(aArg){this.__proto__=C.A$G;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMk={AR8:function(){A._GetAutoObject(
A.Device.Helper).Axu(this.H$,0);A._GetAutoObject(C.A5).Fz();},A8c:function(){this.
H$.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();},A7b:function(
){return A.aaL(A.ach.Am1);},_Init:function(aArg){C.AGr._Init.call(this,aArg);this.
__proto__=C.AMk;this.Dq(C.IP);},_className:"Application::AnimalActionRateScreen"
};C.AMg={WF:function(G){this.Agv();this.I8(A.aaR(A.acf.AVy),[this,this.ATW],5);this.
I8(A.aaR(A.acf.A51),[this,this.Bms],4);this.I8(A.aaR(A.acf.AGq),[this,this.ATH],
3);this.I8(A.aaR(A.acf.AnZ),[this,this.AwT],2);this.I8(A.aaR(A.acf.AdT),[this,this.
AE7],1);this.I8(A.aaR(A.acf.AuD),[this,this.AE1],0);A._GetAutoObject(C.BS).Fx();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dv(6);},DF:function(G){},Abu:function(){return C.AM$;},Abv:function(
){return C.ADy;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var
Azf=A._NewObject(A.Device.BoolFilterCriterion,0);Azf.Initialize(8,0,true,true);Be.
CX(Azf);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GI.
HQ.call(this,G);if(this.Ake()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Ce=[this,this.Aal];this.N.E5(A.jV);}this.
N.OU(false);this.N.OV(false);},Agh:function(){A._GetAutoObject(C.A5).Cb(40);},_Init:
function(aArg){C.GI._Init.call(this,aArg);this.__proto__=C.AMg;var B;this.Dq(C.AO1
);this.Dk(A.aaR(A.acf.A8i));this.AwO([B=A._GetAutoObject(A.Device.Device),B.A8M,
B.Bbr]);},_ReInit:function(){C.GI._ReInit.call(this);this.Dk(A.aaR(A.acf.A8i));}
,_className:"Application::AlarmListScreen"};C.ANA={DF:function(G){},Age:function(
G){if(!!this.Bf)A.ab5("%i",this.Bf.AD.Gt);var Aa=(C.ACi.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).GQ(Aa.Hr);A._GetAutoObject(C.A5).Cb(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var Azz=A._NewObject(
A.Device.BoolFilterCriterion,0);Azz.Initialize(9,0,true,true);Be.CX(Azz);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){C.GI.HQ.call(this,G);this.N.OU(false
);this.N.OV(false);},_Init:function(aArg){C.GI._Init.call(this,aArg);this.__proto__=
C.ANA;this.Dq(C.AO3);this.Dk(A.aaR(A.acf.A8j));},_ReInit:function(){C.GI._ReInit.
call(this);this.Dk(A.aaR(A.acf.A8j));},_className:"Application::ControlListScreen"
};C.Aep={Filter:null,Er:0,Jh:10,TableId:0,Operator:1,CP:function(){var F;this.Tw((
F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jh),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mi],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mi],E,0);A.pe([this,this.
Mi],this);},Mi:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tw((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));else this.
Tw(null);},Aht:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mi],this);},Nq:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mi],this);},Tw:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A66(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).AmV(this.TableId
,this.Er));},OT:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mi],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aep;this.V.H(AHS);this.V.A4(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H_:null,Bl:function(aSize){var B;C.Aep.Bl.call(this,aSize);this.H_.H([(aSize[
0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jh,0,this.
H_.M[0]-this.Jh,aSize[1]]);},Tw:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmV(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw&&Aw.A6)this.H_.Cw(1);else this.H_.Cw(0);},_Init:function(aArg
){C.Aep._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.QF;this.H_.H(AHT);this.H_.Cw(0);this.J(this.H_,0);this.H_.Ax(A.aaL(A.ach.AqN));
},_Done:function(){this.__proto__=C.Aep;this.H_._Done();C.Aep._Done.call(this);}
,_ReInit:function(){C.Aep._ReInit.call(this);this.H_._ReInit();},_Mark:function(
D){var B;C.Aep._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APA={Ap:null,Text:null,Df:function(
E){C.BR.Df.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APA;this.Ap.H(AXg);this.Text.H(AXh);this.
Text.A4(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeB));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjP={
AW:null,T7:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.T7.H(A.abJ(this.T7.M,A.abe(this.AW.M.slice(0
,2),AXi)));this.T7.H(A.abK(this.T7.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXj
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var IF=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IF)this.T7.L(A.jb.AV);else this.T7.L(A.jb.Am2);},Df:function(E){
C.BR.Df.call(this,E);this.Gv.L(E);this.D2.Zv(E);},WH:function(E){C.BR.WH.call(this
,E);this.D2.CV(E);},Akl:function(){return this.AW.Akl();},Awe:function(){return this.
AW.Awe();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B8().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BW._Init.call(this.T7={I:this},0);A.acg.Ap._Init.call(this.Gv={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C7._Init.call(this.A_={I:this
},0);this.__proto__=C.AjP;this.AW.H(AXk);this.T7.H(AXl);this.T7.Nu(2);this.Gv.H(
AXm);this.Gv.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(AXn);this.D2.Zv(A.jb.Bm);this.
D2.CV(A.jb.Ri);this.D2.Hn(2);this.A_.DD(AXo);this.A_.DN(AXp);this.A_.L(A.jb.Bb);
this.J(this.AW,0);this.J(this.T7,0);this.J(this.Gv,0);this.J(this.D2,0);this.J(this.
A_,0);this.Ba(this.AW);this.Gv.Ax(A.aaL(A.ach.Gv));this.D2.S(A.aaL(A.fl.Bg));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T7._Done(
);this.Gv._Done();this.D2._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T7._ReInit();this.Gv._ReInit(
);this.D2._ReInit();this.A_._ReInit();this.D2.S(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DG={Dj:null,Is:null,Ir:null
,Agd:function(G){if(this.Ez<0)this.L6(1);else if(this.Ez===9)this.L6(0);else this.
L6(this.Ez+1);A.pe(this.Dj,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
He=((Ae&0x10)===0x10);var IF=((Ae&0x40)===0x40);if(IF){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.CZ(256);}else if(He){this.Background.L(this.M$);this.
Text.L(A.jb.Text);this.CZ(256);}else{this.Background.L(this.M$);this.Text.L(A.jb.
Text);this.CZ(128);}},Agc:function(G){if(this.Ez<=0)this.L6(9);else this.L6(this.
Ez-1);A.pe(this.Dj,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BF._Init.call(this.Is={I:this},0);A.Core.BF._Init.call(this.Ir={I:this},0);this.
__proto__=C.DG;this.Is.Filter=4;this.Ir.Filter=5;this.Is.BG=[this,this.Agd];this.
Is.D1=[this,this.Agd];this.Ir.BG=[this,this.Agc];this.Ir.D1=[this,this.Agc];},_Done:
function(){this.__proto__=C.Ez;this.Is._Done();this.Ir._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Is._ReInit();this.Ir._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ir)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dj:null,Cv:null,CW:null,Dz:null,Eq:null,F0:null,ET:null,Fj:null,E$:null,Ne:0,ARl:
false,Aqq:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqq)this.ET.AeX(true);else this.ET.AeX(false);},AwK:function(E){var B;
if(E===this.Akl())return;var Af9=E;var DV=this.ET;while(!!DV){if(Af9>0){DV.L6(Af9
%10);Af9=(Af9/10)|0;}else DV.L6(-1);DV=(C.DG.isPrototypeOf(B=this.QK(DV,2,0x11))?
B:null);}},Akl:function(){return A.wz(this.Awe(),-1,10);},Ov:function(G){if(this.
F0.Ez>=0)this.BgH(7);},M6:function(G){if(((this.Akl()>0)||this.ARl)&&(this.Cv.Ez<
0))this.BgH(2);else if(this.Akl()<=0)this.E$.Mx=true;},Ads:function(G){A.pe(this.
Dj,this);},BgH:function(Gz){var B;var ALA=0;var DV=null;switch(Gz){case 2:{DV=this.
Cv;ALA=7;}break;case 7:{DV=this.ET;ALA=2;}break;default:throw new Error(AXq);}while(
!!DV){var A3h=(C.DG.isPrototypeOf(B=this.QK(DV,ALA,0x11))?B:null);if(!!A3h)DV.L6(
A3h.Ez);else if(ALA===7)DV.L6(0);else DV.L6(-1);DV=A3h;}A.pe([this,this.Ads],this
);},AeX:function(E){if(this.Aqq===E)return;this.Aqq=E;this.Am();},Bnr:function(E
){if(this.ARl===E)return;this.ARl=E;},ATl:function(E){var B;if(E===this.Awe())return;
var Af9=E;var DV=this.ET;while(!!DV){if(Af9.length>0){DV.L6(A.wz(A.ab2(Af9,1),-1
,10));Af9=A.abV(Af9,Af9.length-1);}else DV.L6(-1);DV=(C.DG.isPrototypeOf(B=this.
QK(DV,2,0x11))?B:null);}},Awe:function(){var B;var ID=A.jV;var O=0;var B6=this.Cv;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))ID=ID+B6.Ez.toFixed();B6=(C.DG.isPrototypeOf(
B=this.TS(B6,0x11))?B:null);}return ID;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DG._Init.call(this.Cv={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG.
_Init.call(this.F0={I:this},0);C.DG._Init.call(this.ET={I:this},0);A.Core.BF._Init.
call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0);this.__proto__=
C.AW;this.H(Ayq);this.Cv.A1(0x3);this.Cv.H(AHU);this.CW.A1(0x3);this.CW.H(AHV);this.
Dz.A1(0x3);this.Dz.H(AHW);this.Eq.A1(0x3);this.Eq.H(AHX);this.F0.A1(0x3);this.F0.
H(AHY);this.ET.A1(0x3);this.ET.H(AHZ);this.ET.L6(0);this.Fj.Filter=6;this.E$.Filter=
7;this.Ne=A.jb.CJ;this.J(this.Cv,0);this.J(this.CW,0);this.J(this.Dz,0);this.J(this.
Eq,0);this.J(this.F0,0);this.J(this.ET,0);this.Ba(this.ET);this.Cv.Dj=[this,this.
Ads];this.CW.Dj=[this,this.Ads];this.Dz.Dj=[this,this.Ads];this.Eq.Dj=[this,this.
Ads];this.F0.Dj=[this,this.Ads];this.ET.Dj=[this,this.Ads];this.Fj.BG=[this,this.
Ov];this.E$.BG=[this,this.M6];},_Done:function(){this.__proto__=A.Core.P;this.Cv.
_Done();this.CW._Done();this.Dz._Done();this.Eq._Done();this.F0._Done();this.ET.
_Done();this.Fj._Done();this.E$._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cv._ReInit();this.CW._ReInit();this.Dz._ReInit(
);this.Eq._ReInit();this.F0._ReInit();this.ET._ReInit();this.Fj._ReInit();this.E$.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dj)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bib="a2ad8790";C.BDg={Undefined:0,BEk:1,BDy:2};C.AkG={
Tu:null,AiT:null,Lf:null,ANE:null,An8:null,push:function(MU){if(!this.Tu){MU.Ahv=
null;MU.MF=null;this.Tu=MU;this.AiT=this.Tu;}else{MU.Ahv=this.AiT;MU.MF=null;this.
AiT.MF=MU;this.AiT=MU;}},BCe:function(MU){var Ql=this.Tu;while(!!Ql){if(Ql.JS.Id===
MU.Id)return Ql;Ql=Ql.MF;}return Ql;},BBZ:function(MU){if(MU===this.Tu)this.pop(
);else if(MU===this.AiT){MU=MU.Ahv;if(!!MU)MU.MF=null;this.AiT=MU;}else{MU.Ahv.MF=
MU.MF;MU.MF.Ahv=MU.Ahv;}},Ahn:function(E){var F;if(this.Lf===E)return;this.Lf=E;
if(!!this.Lf)this.Lf.AgJ(2);(F=this.ANE,F[2].call(F[0],this.Lf));},Vn:function(G
){var Ql=(C.AUa.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JS.PopupState){if(!this.
Lf)this.Ahn(this.top());}else if(Ql.JS.PopupState===4){this.pop();this.Ahn(this.
top());}else if(Ql.JS.PopupState===5){this.pop();this.Ahn(this.top());}else if(Ql.
JS.PopupState===7){this.pop();this.Ahn(this.top());}else if(Ql.JS.PopupState===8
){this.pop();this.Ahn(this.top());}else if(Ql.JS.PopupState===6){if(Ql===this.Lf
){this.pop();this.Ahn(this.top());}else this.BBZ(Ql);}else if(Ql.JS.PopupState===
3){this.pop();this.Ahn(this.top());}}},pop:function(){var AKW=null;if(!!this.Tu){
AKW=this.Tu;if(this.Tu===this.AiT){this.Tu=null;this.AiT=null;}else{this.Tu=this.
Tu.MF;if(!this.Tu)throw new Error(AXr);this.Tu.Ahv=null;}AKW.Ahv=null;AKW.MF=null;
}return AKW;},top:function(){return this.Tu;},BBH:function(G){var B;var At2=(A.Device.
PopupContext.isPrototypeOf(B=this.An8.JS)?B:null);if(!!At2){var A4v=this.BCe(At2
);if(!!A4v){A4v.A_c(At2);if(!At2.Show)A4v.AgJ(6);}else if(At2.Show){var AKz=A._NewObject(
C.AUa,0);AKz.A_c(At2);AKz.AS4=[this,this.Vn];this.push(AKz);AKz.AgJ(0);}}},_Init:
function(aArg){A.Core.A$6._Init.call(this.An8={I:this},0);this.__proto__=C.AkG;this.
An8.ASv=[this,this.BBH];this.An8.BmL(A._GetAutoObject(A.Device.Device).AnM);A.h7++;
},_Done:function(){this.__proto__=null;this.An8._Done();A.h7--;},_ReInit:function(
){this.An8._ReInit();},_Mark:function(D){var B;if((B=this.Tu)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lf)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUa={Rm:null,MF:null,Ahv:null,JS:null,AS4:null,PopupIdToString:null,AfY:function(
Bxk,BxS,Bya,Bx3,Bx5,Bx2,BxC){var Vp=A._NewObject(C.AT$,0);Vp.BnU(this.JS.Id);Vp.
A_Y(Bxk);Vp.AS5=Bx2;Vp.A_0(this.JS.Ak0);Vp.A_L(this.JS.AkE);Vp.BQ=A._NewObject(C.
N,0);Vp.Lr().Ca=Bx5;Vp.Lr().Ce=null;Vp.Lr().CF=Bx3;Vp.Lr().CS(Bya);Vp.Lr().Ct(null
);Vp.Lr().Hy(BxS);Vp.Lr().AFv(BxC);return Vp;},Akm:function(){if(!this.Rm){var Ago=
this.PopupIdToString.BT(this.JS.Id);switch(this.JS.Id){case 91:case 92:this.Rm=this.
AfY(Ago,A.jV,A.jV,null,null,[this,this.Af$],0);break;case 39:this.Rm=this.AfY(Ago
,A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A3u],[this,this.A3v],[this,this.Af$
],3);break;case 13:this.Rm=this.AfY(Ago,A.aaR(A.acf.AmA),A.aaR(A.acf.BoX),[this,
this.A3t],[this,this.AKE],[this,this.Af$],3);break;case 25:this.Rm=this.AfY(Ago,
A.aaR(A.acf.AmA),A.aaR(A.acf.Ok),[this,this.A3t],[this,this.AKE],[this,this.Af$]
,3);break;case 16:case 24:case 49:case 74:this.Rm=this.AfY(Ago,A.aaR(A.acf.AmA),
A.jV,[this,this.A3t],null,[this,this.Af$],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Rm=this.AfY(Ago,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKE],[this,this.Af$],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:
this.Rm=this.AfY(Ago,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3u],[this,this.
A3v],[this,this.Af$],3);break;case 110:this.Rm=this.AfY(Ago,A.jV,A.jV,null,null,[
this,this.Af$],1);break;case 46:case 111:this.Rm=this.AfY(Ago,A.jV,A.aaR(A.acf.Ok
),null,[this,this.AKE],[this,this.Af$],1);break;case 4:case 7:case 33:case 115:case
44:case 37:case 38:case 63:case 95:case 108:case 112:this.Rm=this.AfY(Ago,A.aaR(
A.acf.No),A.aaR(A.acf.Yes),[this,this.A3u],[this,this.A3v],[this,this.Af$],1);break;
default:A.ab5("%s",(AXs+this.JS.Id.toFixed())+AXt);}}switch(this.JS.Id){case 16:
case 49:this.Rm.A$c(true);break;case 91:case 92:this.Rm.A$c(false);break;default:;
}return this.Rm;},AKE:function(G){this.AgJ(4);},A3t:function(G){this.AgJ(5);},A3v:
function(G){this.AgJ(7);},A3u:function(G){this.AgJ(8);},Af$:function(G){this.AgJ(
3);},A_c:function(E){if(this.JS===E)return;this.JS=E;if(!!this.Rm){this.Akm().A_0(
this.JS.Ak0);this.Akm().A_L(this.JS.AkE);}},AgJ:function(Bx8){var B;this.JS.BnV(
Bx8);(B=this.AS4)?B[1].call(B[0],this):null;},BBd:function(G){this.AgJ(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AUa;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MF)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ahv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS4)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Application::PopupEntry"};C.Ge={BooleanToYesNo:null,Dt:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BT(aIndex
);},DZ:function(A9){return A9;},H7:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Ge;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afn={Ux:null,Kh:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.Ux&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},Kc:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.Ux&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},Aky:function(E){if(A.aaZ(this.Ux,E))return;if(!!this.Q)A.z$([
this,this.A38],this.Ux,0);this.Ux=E;if(!!E)A.zX([this,this.A38],E,0);if(!!E)A.pe([
this,this.A38],this);},A38:function(G){var F;if(!!this.Ux){if((F=this.Ux,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.Afn;this.J5(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.Ux)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUq={Jl:null,O1:null,IZ:null,Gn:null,AK:null,Abk:null,AgP:null,TP:null,Se:null
,AcC:null,W7:null,Hj:null,ABH:true,Init:function(aArg){var B;A.zX([this,this.Al4
],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0I],0);A.pe([this,this.Al4],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABH)this.N.C3(A.aaL(A.ach.
AQ1));else this.N.C3(A.aaL(A.ach.AQ2));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O1.L(A.jb.Bm);this.Se.Z(false);this.TP.Z(false);this.IZ.Z(true);this.Gn.
As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.jb.Gk);}else
if(this.Abk.Bw){this.O1.L(A.jb.Text);this.Se.Z(true);this.TP.Z(true);this.IZ.Z(false
);this.Gn.As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.
jb.E1);}else{this.O1.L(A.jb.Text);this.Se.Z(false);this.TP.Z(false);this.IZ.Z(true
);this.Gn.As(true);this.Background.L(A.jb.CJ);}if(this.AgP.Bw)this.W7.Z(true);else
this.W7.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhH();},E3:function(
G){A._GetAutoObject(A.Device.Device).AnY();A._GetAutoObject(A.Device.Device).Ae_(
false);A._GetAutoObject(A.Device.Device).Uw(false);},Al4:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAU],this);break;case 3:{A.pe([this,this.Bfy],this);A.pe([B=this.Abk,B.AxI],this
);A.pe(this.Abk.MK,this);}break;case 4:A.ab5("%s",AXu);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A5).Fz();},BBJ:function(G){this.Bom(!this.ABH);},Bom:function(
E){if(this.ABH===E)return;this.ABH=E;if(!E)A._GetAutoObject(A.Device.Device).Ae_(
false);this.Am();},BAU:function(G){var B;this.Bfy(this);if(this.ABH)A._GetAutoObject(
A.Device.Device).Ae_(true);A._GetAutoObject(A.Device.Device).WJ(65280);A._GetAutoObject(
A.Device.Device).Uw(true);A.pe([B=this.Abk,B.StartTimer],this);A.pe([B=this.AgP,
B.StartTimer],this);this.Am();},BAV:function(G){A._GetAutoObject(A.Device.Device
).Ae_(false);A._GetAutoObject(A.Device.Device).Uw(false);this.Am();},BAX:function(
G){this.Am();},Bfy:function(G){A._GetAutoObject(A.Device.Device).AhH();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jl._Init.call(this.Jl={I:this},0);C.CG._Init.
call(this.O1={I:this},0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.
call(this.Gn={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abk={I:this},0);A.Core.Timer._Init.call(this.AgP={I:this},0);A.acg.Ap.
_Init.call(this.TP={I:this},0);A.acg.Ap._Init.call(this.Se={I:this},0);A.acg.Text.
_Init.call(this.AcC={I:this},0);C.W7._Init.call(this.W7={I:this},0);C.CG._Init.call(
this.Hj={I:this},0);this.__proto__=C.AUq;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jl.H(AXv);this.Jl.AkB(0);this.O1.H(AXw);this.O1.R(A.aaR(A.acf.A$$));
this.O1.L(A.jb.Text);this.IZ.H(AXx);this.IZ.L(A.jb.AV);this.IZ.Zt(true);this.Gn.
Fp(1750);this.Gn.Ut(750);this.Gn.Akw(0);this.Gn.As(true);this.Gn.B3=3;this.AK.H(
Ayr);this.Abk.PX(-1);this.Abk.WI(1000);this.AgP.PX(-1);this.AgP.WI(5000);this.TP.
H(AH0);this.Se.H(AH0);this.Se.L(A.jb.E1);this.AcC.H(Ayr);this.AcC.R(A.aaR(A.acf.
A$I));this.AcC.L(A.jb.Text);this.W7.H(Ayr);this.Hj.H(AXy);this.Hj.As(false);this.
Hj.R(A.aaR(A.acf.RangeTest));this.Hj.L(A.jb.Text);this.J(this.Jl,0);this.J(this.
O1,0);this.J(this.IZ,0);this.J(this.AK,0);this.J(this.TP,0);this.J(this.Se,0);this.
J(this.AcC,0);this.J(this.W7,0);this.J(this.Hj,0);this.N.CF=[this,this.Ew];this.
N.Ca=[this,this.BBJ];this.N.C2(A.aaL(A.ach.E2));this.O1.S(A.aaL(A.fl.Af));this.O1.
AY(A.aaL(A.fl.Ak));this.O1.Cl(A.aaL(A.fl.Bg));this.IZ.Ax(A.aaL(A.ach.ADY));this.
Gn.Q=[B=this.IZ,B.ASH,B.Cw];this.Abk.MK=[this,this.BAV];this.AgP.MK=[this,this.BAX
];this.TP.Ax(A.aaL(A.ach.TP));this.Se.Ax(A.aaL(A.ach.Se));this.AcC.S(A.aaL(A.fl.
Af));this.W7.Au([B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0J]);this.Hj.S(A.aaL(
A.fl.Ks));this.Hj.AY(A.aaL(A.fl.HJ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jl._Done();this.O1._Done();this.IZ._Done();this.Gn._Done();this.AK._Done(
);this.Abk._Done();this.AgP._Done();this.TP._Done();this.Se._Done();this.AcC._Done(
);this.W7._Done();this.Hj._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jl._ReInit();this.O1._ReInit();this.IZ._ReInit();this.Gn.
_ReInit();this.AK._ReInit();this.Abk._ReInit();this.AgP._ReInit();this.TP._ReInit(
);this.Se._ReInit();this.AcC._ReInit();this.W7._ReInit();this.Hj._ReInit();this.
O1.R(A.aaR(A.acf.A$$));this.AcC.R(A.aaR(A.acf.A$I));this.Hj.R(A.aaR(A.acf.RangeTest
));this.O1.S(A.aaL(A.fl.Af));this.O1.AY(A.aaL(A.fl.Ak));this.O1.Cl(A.aaL(A.fl.Bg
));this.AcC.S(A.aaL(A.fl.Af));this.Hj.S(A.aaL(A.fl.Ks));this.Hj.AY(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hj).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbV={
ScreenType:0,Ns:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nv:
function(G){A._GetAutoObject(C.A5).Cb(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbV;},_className:"Application::MenuItemScreen"
};C.Ud={Ad8:null,Mv:null,AmB:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmB){this.Mv.Cw(1);this.Mv.L(A.jb.Ia);}else{this.Mv.Cw(0);
if(this.KL)this.Mv.L(A.jb.Bm);else if(this.Hl)this.Mv.L(A.jb.Text);else this.Mv.
L(A.jb.Bm);}},H0:function(G){var F,Cu;if(!!this.Ad8){(Cu=this.Ad8,Cu[2].call(Cu[
0],!(F=this.Ad8,F[1].call(F[0]))));this.AFd((F=this.Ad8,F[1].call(F[0])));A.pe([
this,this.DK],this);}},A3z:function(G){this.KL=true;this.DK(this);},AFd:function(
E){if(this.AmB===E)return;this.AmB=E;this.DK(this);this.Am();},A31:function(G){var
F;this.AFd((F=this.Ad8,F[1].call(F[0])));},A03:function(s){this.A31(s);},DK:function(
G){var F;if(!this.N||!this.KL)return;if(this.AmB){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8x));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},AS$:function(E){if(A.aaZ(this.Ad8,E))
return;if(!!this.Ad8)A.z$([this,this.A03],this.Ad8,0);this.Ad8=E;if(!!E)A.zX([this
,this.A03],E,0);if(!!E)A.pe([this,this.A03],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mv={I:this},0);this.__proto__=C.Ud;this.
V.L(A.jb.Ia);this.Mv.H(AH1);this.Mv.Cw(0);this.J(this.Mv,0);this.Mv.Ax(A.aaL(A.ach.
AqN));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mv._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mv._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad8)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANM={H9:null,IT:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SW._Init.call(this.H9={I:this},0);C.AGQ._Init.call(this.
IT={I:this},0);this.__proto__=C.ANM;var B;this.Jf(A.aaR(A.acf.ACI));this.H9.H(AhY
);this.H9.Aj(true);this.H9.T(A.aaR(A.acf.Date));this.H9.Bh(true);this.IT.H(U2);this.
IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.J(this.H9,-1);this.J(this.IT,-1);this.
H9.Ab2([B=this.H9,B.FW]);this.H9.Gs([this,this.D_,this.GS]);this.H9.Akv(A.aaL(A.
ach.Edit));this.H9.Ab8([B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]);this.IT.
Ab2([B=this.IT,B.FW]);this.IT.Gs([this,this.D_,this.GS]);this.IT.Akv(A.aaL(A.ach.
Edit));this.IT.Ab8([B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]);},_Done:function(
){this.__proto__=C.Cg;this.H9._Done();this.IT._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H9._ReInit();this.IT._ReInit();this.Jf(A.
aaR(A.acf.ACI));this.H9.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVp={Rf:null,FM:null,B0:null,OO:null,YP:null,Aa6:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMG._Init.call(this.
FM={I:this},0);C.AUZ._Init.call(this.B0={I:this},0);C.AU1._Init.call(this.OO={I:
this},0);C.Afn._Init.call(this.YP={I:this},0);C.Aa6._Init.call(this.Aa6={I:this}
,0);this.__proto__=C.AVp;var B;this.Jf(A.aaR(A.acf.Temperature));this.FM.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXz);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.
Arq));this.B0.Bh(false);this.OO.H(Aaj);this.OO.Aj(true);this.OO.T(A.aaR(A.acf.Undertemperature
));this.OO.Bh(true);this.OO.Bx(3800);this.OO.Gb(3000);this.OO.EV(5000);this.OO.A_7(
A.aaR(A.acf.AG3));this.YP.H(AXA);this.YP.Aj(true);this.YP.Z(true);this.YP.T(A.aaR(
A.acf.A5w));this.J(this.B0,0);this.J(this.OO,0);this.J(this.YP,0);this.B0.Ab2([B=
this.B0,B.FW]);this.B0.Gs([this,this.D_,this.GS]);this.B0.Akv(A.aaL(A.ach.Edit));
this.B0.L4([B=this.B0,B.Ay4]);this.B0.L7(A.aaL(A.ach.AnP));this.B0.Au([B=this.FM
,B.B$,B.Cc]);this.B0.CK(this.FM);this.B0.A_J([B=this.FM,B.AS3,B.A0Q]);this.B0.A_I([
B=this.FM,B.AS2,B.A0P]);this.OO.L4([B=this.B0,B.Ay4]);this.OO.L7(A.aaL(A.ach.AnP
));this.OO.Au([B=A._GetAutoObject(A.Device.Device),B.A9E,B.BbR]);this.YP.CK(this.
Aa6);this.YP.Aky([B=A._GetAutoObject(A.Device.Device),B.A8Z,B.BbA]);},_Done:function(
){this.__proto__=C.Cg;this.Rf._Done();this.FM._Done();this.B0._Done();this.OO._Done(
);this.YP._Done();this.Aa6._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rf._ReInit();this.FM._ReInit();this.B0._ReInit();this.
OO._ReInit();this.YP._ReInit();this.Aa6._ReInit();this.Jf(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Arq));this.OO.T(A.aaR(A.acf.Undertemperature));this.OO.
A_7(A.aaR(A.acf.AG3));this.YP.T(A.aaR(A.acf.A5w));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANZ={PM:null,PN:null,Sx:null,V9:null,Sz:null,Sy:null,Ge:null,Acr:null,Init:function(
aArg){A.zX([this,this.BpI],this.PN.Q,0);},BpI:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw5((F=this.PN.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Iu._Init.call(this.PM={I:this},0);C.BX._Init.call(this.PN={
I:this},0);C.Afn._Init.call(this.Sx={I:this},0);C.Iu._Init.call(this.V9={I:this}
,0);C.Afn._Init.call(this.Sz={I:this},0);C.Afn._Init.call(this.Sy={I:this},0);C.
Ge._Init.call(this.Ge={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);this.__proto__=
C.ANZ;var B;this.N.H(U1);this.Jf(A.aaR(A.acf.Device));this.PM.H(AhY);this.PM.Aj(
true);this.PM.T(A.aaR(A.acf.A$T));this.PM.Bh(false);this.PM.Gb(2);this.PM.EV(60);
this.PM.IW(A.aaR(A.acf.AHh));this.PM.Jg(A.aaR(A.acf.AHh));this.PN.H(AXB);this.PN.
Aj(true);this.PN.T(A.aaR(A.acf.A$0));this.PN.Bh(true);this.PN.Bx(0);this.PN.Gb(-
1);this.PN.EV(1);this.Sx.H(Aaj);this.Sx.Aj(true);this.Sx.T(A.aaR(A.acf.HF));this.
Sx.Bh(false);this.Sx.Bx(0);this.Sx.Gb(-1);this.Sx.EV(1);this.V9.H(Alf);this.V9.Aj(
true);this.V9.T(A.aaR(A.acf.A5U));this.V9.Bh(true);this.V9.IW(AfG);this.V9.Jg(AfG
);this.Sz.H(AhZ);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.AsR));this.Sz.Bh(false);
this.Sz.Bx(1);this.Sz.Gb(-1);this.Sz.EV(1);this.Sy.H(Aok);this.Sy.Aj(true);this.
Sy.T(A.aaR(A.acf.Asu));this.Sy.Bh(true);this.Sy.Bx(0);this.Sy.Gb(-1);this.Sy.EV(
1);this.Acr.Au(A._GetAutoObject(A.Device.Device).AxH);this.J(this.PM,0);this.J(this.
PN,0);this.J(this.Sx,0);this.J(this.V9,0);this.J(this.Sz,0);this.J(this.Sy,0);this.
PM.Au([B=A._GetAutoObject(A.Device.Device),B.A9w,B.BbN]);this.PN.Au([B=this.Acr,
B.B$,B.Cc]);this.PN.CK(this.Acr);this.Sx.CK(this.Ge);this.Sx.Aky([B=A._GetAutoObject(
A.Device.Device),B.AEO,B.AIV]);this.V9.Au([B=A._GetAutoObject(A.Device.Device),B.
A8V,B.Bbx]);this.Sz.CK(this.Ge);this.Sz.Aky([B=A._GetAutoObject(A.Device.Device)
,B.A9F,B.BbS]);this.Sy.CK(this.Ge);this.Sy.Aky([B=A._GetAutoObject(A.Device.Device
),B.ASL,B.A0C]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PM._Done(
);this.PN._Done();this.Sx._Done();this.V9._Done();this.Sz._Done();this.Sy._Done(
);this.Ge._Done();this.Acr._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PM._ReInit();this.PN._ReInit();this.Sx._ReInit();this.
V9._ReInit();this.Sz._ReInit();this.Sy._ReInit();this.Ge._ReInit();this.Acr._ReInit(
);this.Jf(A.aaR(A.acf.Device));this.PM.T(A.aaR(A.acf.A$T));this.PM.IW(A.aaR(A.acf.
AHh));this.PM.Jg(A.aaR(A.acf.AHh));this.PN.T(A.aaR(A.acf.A$0));this.Sx.T(A.aaR(A.
acf.HF));this.V9.T(A.aaR(A.acf.A5U));this.Sz.T(A.aaR(A.acf.AsR));this.Sy.T(A.aaR(
A.acf.Asu));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUC={Wa:null,V$:
null,QQ:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BiZ
],this.QQ.Q,0);},BiZ:function(G){var F;A._GetAutoObject(A.Device.Device).Aks((F=
this.QQ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Np._Init.call(this.Wa={I:this},0);C.Np._Init.call(this.V$={I:this},0);C.AUV._Init.
call(this.QQ={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUC;var B;this.Jf(A.aaR(A.acf.Asn));this.Wa.H(I1);this.
Wa.Aj(true);this.Wa.T(A.aaR(A.acf.AjD));this.Wa.Bh(false);this.Wa.Ns(87);this.V$.
H(Ays);this.V$.Aj(true);this.V$.T(A.aaR(A.acf.Aqj));this.V$.Bh(true);this.V$.Ns(
88);this.QQ.H(U2);this.QQ.Aj(true);this.QQ.T(A.aaR(A.acf.A5B));this.QQ.Bh(false);
this.QQ.Gb(-1);this.QQ.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.Wa,0);this.J(this.V$,0);this.J(this.
QQ,0);this.Wa.AR=[B=this.Wa,B.Nv];this.V$.AR=[B=this.V$,B.Nv];this.QQ.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cc]);this.QQ.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.Wa._Done();this.V$._Done(
);this.QQ._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wa._ReInit();this.V$._ReInit();this.QQ._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jf(A.aaR(A.acf.Asn));this.Wa.T(A.aaR(
A.acf.AjD));this.V$.T(A.aaR(A.acf.Aqj));this.QQ.T(A.aaR(A.acf.A5B));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W7={Q:null,TransponderProtocolToString:
null,Apm:null,Background:null,Y:null,Sr:null,GM:null,PR:null,OQ:null,Pv:null,C8:
null,EN:null,SR:null,N_:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hf],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hf],E,0);if(!!E)A.pe([this,this.Hf],this);},Hf:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GM.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).Bjv();if(BN<900){var Kb=A._GetAutoObject(
A.Device.Converter).AND(BN);if(!!Kb)this.C8.R(((this.CountryToString.LA(Kb)+AcM)+
BN.toFixed())+Pb);else this.C8.R(BN.toFixed());if(Kb===10){var AKh=this.A7q((F=this.
Q,F[1].call(F[0])).Id);this.C8.R(this.C8.String+((((AXC+this.Apm.Bqr(AKh))+AcM)+
A.abl(this.Apm.Bqq(AKh),2,10))+Pb));}this.C8.Z(true);this.Pv.Z(true);this.OQ.Z(false
);this.PR.Z(false);}else{this.OQ.R(((A._GetAutoObject(A.Device.Converter).Bie(BN
)+AcM)+BN.toFixed())+Pb);this.OQ.Z(true);this.PR.Z(true);this.C8.Z(false);this.Pv.
Z(false);}if(BN===276){this.EN.R(this.Apm.BT(this.A7q((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N_.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GM.R(A.jV);this.OQ.
R(A.jV);this.EN.R(A.jV);this.C8.R(A.jV);this.N_.R(A.jV);}},A7q:function(K3){var Qz=
0;var Kb=A._GetAutoObject(A.Device.Converter).S8(K3);switch(Kb){case 10:{var Gj=
A._GetAutoObject(A.Device.Converter).AVG(K3);Qz=A._GetAutoObject(A.Device.Converter
).AC8(Gj);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apm={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sr={I:this},0);C.CG._Init.call(this.GM={I:this},0);C.CG._Init.
call(this.PR={I:this},0);C.CG._Init.call(this.OQ={I:this},0);C.CG._Init.call(this.
Pv={I:this},0);C.CG._Init.call(this.C8={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SR={I:this},0);C.CG._Init.call(this.N_={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W7;
this.H(AcO);this.Background.A1(0x3F);this.Background.H(AcO);this.Background.L(A.
jb.CU);this.Y.A1(0x3F);this.Y.H(AcO);this.Y.JZ(9);this.Sr.H(AH2);this.Sr.Aj(true
);this.Sr.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.Sr.A4(0x11);this.Sr.L(A.jb.
Text);this.GM.H(AH3);this.GM.Aj(true);this.GM.R(AXD);this.GM.A4(0x14);this.GM.L(
A.jb.Text);this.PR.H(Ayt);this.PR.Aj(true);this.PR.R(A.aaR(A.acf.A$m)+A.aaR(A.acf.
Colon));this.PR.A4(0x11);this.PR.L(A.jb.Text);this.OQ.H(AH4);this.OQ.Aj(true);this.
OQ.R(AXE);this.OQ.A4(0x14);this.OQ.L(A.jb.Text);this.Pv.H(Ayt);this.Pv.Aj(true);
this.Pv.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.Pv.A4(0x11);this.Pv.L(A.jb.Text
);this.C8.H(AH4);this.C8.Aj(true);this.C8.R(AXF);this.C8.A4(0x14);this.C8.L(A.jb.
Text);this.EN.H(AXG);this.EN.Aj(true);this.EN.R(AXH);this.EN.A4(0x14);this.EN.L(
A.jb.Text);this.SR.H(AXI);this.SR.Aj(true);this.SR.R(A.aaR(A.acf.N_)+A.aaR(A.acf.
Colon));this.SR.A4(0x11);this.SR.L(A.jb.Text);this.N_.H(AXJ);this.N_.Aj(true);this.
N_.R(AXK);this.N_.A4(0x14);this.N_.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sr,0);this.J(this.GM,0);this.J(this.PR,0);this.J(this.OQ,0
);this.J(this.Pv,0);this.J(this.C8,0);this.J(this.EN,0);this.J(this.SR,0);this.J(
this.N_,0);this.Sr.S(A.aaL(A.fl.Ak));this.Sr.AY(A.aaL(A.fl.Bg));this.GM.S(A.aaL(
A.fl.Ak));this.GM.AY(A.aaL(A.fl.Bg));this.PR.S(A.aaL(A.fl.Ak));this.PR.AY(A.aaL(
A.fl.Bg));this.OQ.S(A.aaL(A.fl.Ak));this.OQ.AY(A.aaL(A.fl.Bg));this.Pv.S(A.aaL(A.
fl.Ak));this.Pv.AY(A.aaL(A.fl.Bg));this.C8.S(A.aaL(A.fl.Ak));this.C8.AY(A.aaL(A.
fl.Bg));this.EN.S(A.aaL(A.fl.Ak));this.EN.AY(A.aaL(A.fl.Bg));this.SR.S(A.aaL(A.fl.
Ak));this.SR.AY(A.aaL(A.fl.Bg));this.N_.S(A.aaL(A.fl.Ak));this.N_.AY(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apm._Done();this.Background._Done();this.Y._Done();this.Sr._Done();
this.GM._Done();this.PR._Done();this.OQ._Done();this.Pv._Done();this.C8._Done();
this.EN._Done();this.SR._Done();this.N_._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apm._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sr.
_ReInit();this.GM._ReInit();this.PR._ReInit();this.OQ._ReInit();this.Pv._ReInit(
);this.C8._ReInit();this.EN._ReInit();this.SR._ReInit();this.N_._ReInit();this.CountryToString.
_ReInit();this.Sr.R(A.aaR(A.acf.GM)+A.aaR(A.acf.Colon));this.PR.R(A.aaR(A.acf.A$m
)+A.aaR(A.acf.Colon));this.Pv.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.SR.R(A.
aaR(A.acf.N_)+A.aaR(A.acf.Colon));this.Sr.S(A.aaL(A.fl.Ak));this.Sr.AY(A.aaL(A.fl.
Bg));this.GM.S(A.aaL(A.fl.Ak));this.GM.AY(A.aaL(A.fl.Bg));this.PR.S(A.aaL(A.fl.Ak
));this.PR.AY(A.aaL(A.fl.Bg));this.OQ.S(A.aaL(A.fl.Ak));this.OQ.AY(A.aaL(A.fl.Bg
));this.Pv.S(A.aaL(A.fl.Ak));this.Pv.AY(A.aaL(A.fl.Bg));this.C8.S(A.aaL(A.fl.Ak)
);this.C8.AY(A.aaL(A.fl.Bg));this.EN.S(A.aaL(A.fl.Ak));this.EN.AY(A.aaL(A.fl.Bg)
);this.SR.S(A.aaL(A.fl.Ak));this.SR.AY(A.aaL(A.fl.Bg));this.N_.S(A.aaL(A.fl.Ak));
this.N_.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QY={D2:null,A$B:A.jV,Ai:function(Ae){C.Fm.Ai.call(
this,Ae);if(this.MB.Fo())this.D2.CV(A.jb.AV);else this.D2.CV(this.Background.AQ);
this.D2.Zv(this.G9.AQ);},ZA:function(E){if(this.A$B===E)return;this.A$B=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QY;this.Background.H(AXL);this.
MB.H(Xa);this.OJ.H(AH5);this.Q4.H(AH5);this.D2.H(AXM);this.D2.Z(false);this.J(this.
D2,0);this.G9.S(A.aaL(A.fl.Af));this.G9.AY(A.aaL(A.fl.Ak));this.G9.Cl(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=C.Fm;this.D2._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D2._ReInit();this.G9.S(A.aaL(
A.fl.Af));this.G9.AY(A.aaL(A.fl.Ak));this.G9.Cl(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,AeE:null,Ap:null,Text:null
,DL:A.jV,AmO:0,M$:0,Jh:0,A5X:0x14,Init:function(aArg){},T:function(E){if(this.DL===
E)return;this.DL=E;this.Text.R(E);},BCW:function(G){this.Ap.H(this.Text.M);this.
AeE.H(this.Text.M);},Zv:function(E){if(this.AmO===E)return;this.AmO=E;this.AeE.L(
E);this.Text.L(E);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hn:function(E){
if(this.Jh===E)return;this.Jh=E;this.Text.Hn(E);},Bmq:function(E){if(this.A5X===
E)return;this.A5X=E;this.Text.A4(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NY._Init.call(this.AeE={I:this},0);A.acg.NY._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AH6);
this.AeE.A1(0x8);this.AeE.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CU);this.Text.
A1(0xD);this.Text.H(AH6);this.Text.Hn(5);this.Text.Je(true);this.Text.A4(0x14);this.
Text.L(A.jb.Text);this.J(this.AeE,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeE.Ax(A.aaL(A.ach.APZ));this.Ap.Ax(A.aaL(A.ach.APY));this.Text.Q7([this,this.BCW
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeE._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeE._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T$={DY:null,Y:null,Ay:null,DF:function(G){var B;C.AB.DF.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALp(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkM();A._GetAutoObject(A.Device.Helper).Asr();},Ik:function(G){},AcS:function(
s){this.Ik(s);},A3Q:function(G){A._GetAutoObject(C.A5).Fz();},Fh:function(G){var
B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},ALp:function(G){},BG5:function(s){this.ALp(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T$;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Dq(C.AqZ);this.
DY.A1(0x3F);this.DY.H(Fc);this.DY.L(A.jb.CJ);this.Y.H(Fc);this.Y.JZ(9);this.Ay.H(
Iw);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CF=[this,this.A3Q
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fh];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV0={WF:function(
G){this.Agv();this.I8(A.aaR(A.acf.AVw),[this,this.ATV],7);this.I8(A.aaR(A.acf.Bo2
),[this,this.Bmt],6);this.I8(A.aaR(A.acf.AGq),[this,this.ATH],3);this.I8(A.aaR(A.
acf.AnZ),[this,this.AwT],2);this.I8(A.aaR(A.acf.AdT),[this,this.AE7],1);this.I8(
A.aaR(A.acf.AuD),[this,this.AE1],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},DF:function(G){},Abu:function(){return C.ANe;},Abv:function(){return C.APF;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var ABJ=A._NewObject(
A.Device.BoolFilterCriterion,0);ABJ.Initialize(12,0,true,true);Be.CX(ABJ);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GI.HQ.call(this,G);if(this.Ake(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajo((F=this.Fk,F[1].call(
F[0]))));this.N.Ce=[this,this.Aal];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false
);},Agh:function(){A._GetAutoObject(C.A5).Cb(41);},_Init:function(aArg){C.GI._Init.
call(this,aArg);this.__proto__=C.AV0;var B;this.Dq(C.APB);this.Dk(A.aaR(A.acf.A8k
));this.AwO([B=A._GetAutoObject(A.Device.Device),B.A9J,B.BbT]);},_ReInit:function(
){C.GI._ReInit.call(this);this.Dk(A.aaR(A.acf.A8k));},_className:"Application::WatchListScreen"
};C.AMl={DF:function(G){var B;var JH=(A.Core.BF.isPrototypeOf(G)?G:null);if(((JH.
CO===4)||(JH.CO===5))===false){C.Ax1.DF.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdl=A._GetAutoObject(A.Device.Device
).K0;var Tn;if(JH.CO===5)Tn=5;else Tn=4;var ABn=A._GetAutoObject(A.acj.DU).BdV(Bdl
,Tn);var FJ=(((Bdl+((ABn/2)|0))/ABn)|0)*ABn;if(JH.CO===4)FJ+=ABn;else if(JH.CO===
5)FJ-=ABn;if(FJ>999900)FJ=999900;if(FJ<100)FJ=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FJ);},AsF:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O8,B.CF],this);else A._GetAutoObject(C.A5).Fz();
},WX:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$R()===false){this.H$.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K0
);this.H$.Cr(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H$.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K0);this.H$.Cr(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A5).Fz();}},AkT:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O8,B.Ca],this);},BdU:function(){var
ALD=A._GetAutoObject(A.Device.Helper).W.AhR(1);if(ALD>=100000)ALD=(Math.round(ALD
/1000)|0)*1000;return ALD;},_Init:function(aArg){C.Ax1._Init.call(this,aArg);this.
__proto__=C.AMl;},_className:"Application::AnimalActionWeighingScreen"};C.AVK={We:
null,YR:null,Rf:null,AeP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BX._Init.call(this.We={I:this},0);C.BX._Init.call(this.YR={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeP._Init.call(this.AeP={I:this},0);this.__proto__=C.
AVK;var B;this.Jf(A.aaR(A.acf.AHi));this.We.H(AhY);this.We.Aj(true);this.We.T(A.
aaR(A.acf.Bai));this.We.Bh(true);this.We.Bx(0);this.YR.H(U2);this.YR.Aj(true);this.
YR.T(A.aaR(A.acf.Bah));this.YR.Bh(false);this.J(this.We,0);this.J(this.YR,0);this.
We.Au([B=this.Rf,B.B$,B.Cc]);this.We.CK(this.Rf);this.YR.Au([B=this.AeP,B.B$,B.Cc
]);this.YR.CK(this.AeP);},_Done:function(){this.__proto__=C.Cg;this.We._Done();this.
YR._Done();this.Rf._Done();this.AeP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.We._ReInit();this.YR._ReInit();this.Rf._ReInit();
this.AeP._ReInit();this.Jf(A.aaR(A.acf.AHi));this.We.T(A.aaR(A.acf.Bai));this.YR.
T(A.aaR(A.acf.Bah));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeP={MassUnitToString:null
,Dt:function(){return 2;},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwP(E);}
,Init:function(aArg){var B;A.zX([this,this.Bey],[B=A._GetAutoObject(A.Device.Device
),B.ASK,B.A0B],0);A.pe([this,this.Bey],this);},Bey:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeP;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax1={H$:null,Aju:null,MassUnit:null,
K0:null,VE:null,AnL:null,AcE:null,Z2:null,O8:null,YJ:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af4());A.zX([this,this.AKF],[B=A._GetAutoObject(
A.Device.Device),B.AER,B.AIY],0);A.zX([this,this.BBK],[B=A._GetAutoObject(A.Device.
Device),B.AEX,B.AI2],0);A.zX([this,this.BBL],[B=this.O8,B.Ary,B.JC],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxU();this.Z4();},H0:function(G){this.WX(this);},
CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);this.H$.G7();this.H$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGZ();else{var BC$=this.BdU();this.Z2.Z(true);this.AcE.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BC$);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).AhK(
);},AxU:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhk();break;case 3:{this.Bhk();this.Z2.Z(false);this.AcE.Z(false
);if(this.A$R()){this.VE.Z(false);this.K0.H(A.abO(this.K0.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O8.As(true);this.O8.Z(true);this.Ba(this.O8);}}break;
case 4:this.K0.R(A.aaR(A.acu.Akh));break;default:A.ab5("%s%e",AH7,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z4:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C2(A.aaL(A.ach.Aez));this.N.Ct(null);
this.YJ.Z(false);this.N.C3(A.aaL(A.ach.Am1));this.N.CS(A.jV);}break;case 3:{if(this.
O8.A0<=1){this.N.C2(null);this.N.Ct(null);this.YJ.Z(false);this.N.C3(null);}else{
this.N.C2(A.aaL(A.ach.Am0));this.N.Ct(A.aaL(A.ach.AeA));this.YJ.Z(true);this.N.C3(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C3(A.aaL(A.ach.AvK));this.
N.Ca=[this,this.Bmg];this.N.Ct(null);this.YJ.Z(false);this.N.CS(A.jV);}break;default:;
}},AsF:function(G){},Bw3:function(s){this.AsF(s);},WX:function(G){},A0T:function(
s){this.WX(s);},Bmg:function(G){this.CC(this);},BBK:function(G){this.Am();},AKF:
function(G){this.Am();},A$R:function(){var Auu=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auu>0)&&!A._GetAutoObject(A.Device.Helper).Bqo(Auu
,this.H$.Timestamp);},AkT:function(G){},A0S:function(s){this.AkT(s);},BBL:function(
G){this.Am();},Bhk:function(){this.K0.R(A._GetAutoObject(A.Device.Converter).Ak7(
A._GetAutoObject(A.Device.Device).K0));},BdU:function(){return A._GetAutoObject(
A.Device.Helper).W.AhR(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K0={I:this},0);A.acg.Text._Init.call(this.VE={I:this
},0);C.AxT._Init.call(this.AnL={I:this},0);A.acg.Aeo._Init.call(this.AcE={I:this
},0);A.acg.Aeo._Init.call(this.Z2={I:this},0);C.AV5._Init.call(this.O8={I:this},
0);A.acg.Ap._Init.call(this.YJ={I:this},0);this.__proto__=C.Ax1;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dq(C.IP);this.Aju.A1(0x3F);this.Aju.H(Ayu);this.Aju.
L(A.jb.CJ);this.MassUnit.H(AXN);this.MassUnit.A4(0x9);this.MassUnit.R(A.aaR(A.acf.
AAi));this.MassUnit.L(A.jb.Text);this.K0.H(AXO);this.K0.A4(0x14);this.K0.R(A.aaR(
A.acu.Akh));this.K0.L(A.jb.Text);this.VE.H(AXP);this.VE.R(A.aaR(A.acf.Bat));this.
VE.L(A.jb.Text);this.VE.Z(true);this.AnL.H(AXQ);this.AcE.H(AXR);this.AcE.L(A.jb.
Ad$);this.AcE.Z(false);this.Z2.H(AXS);this.Z2.L(A.jb.Ad$);this.Z2.Bm5(true);this.
Z2.Z(false);this.O8.A1(0x3F);this.O8.H(Ayu);this.O8.As(false);this.O8.Z(false);this.
YJ.H(AXT);this.YJ.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
K0,0);this.J(this.VE,0);this.J(this.AcE,0);this.J(this.Z2,0);this.J(this.O8,0);this.
J(this.YJ,0);this.N.CF=[this,this.Bw3];this.N.Ce=[this,this.A0S];this.N.Ca=[this
,this.A0T];this.MassUnit.S(A.aaL(A.fl.EK));this.K0.S(A.aaL(A.fl.Aes));this.VE.S(
A.aaL(A.fl.EK));this.AcE.Zz(this.AnL);this.Z2.Zz(this.AnL);this.H$=A._NewObject(
A.Device.Rating,0);this.O8.L5(A._GetAutoObject(A.Device.Helper).W);this.O8.Akz(this.
H$);this.YJ.Ax(A.aaL(A.ach.AQV));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.K0._Done();this.VE._Done();this.
AnL._Done();this.AcE._Done();this.Z2._Done();this.O8._Done();this.YJ._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.K0._ReInit();this.VE._ReInit();this.AnL._ReInit();this.
AcE._ReInit();this.Z2._ReInit();this.O8._ReInit();this.YJ._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAi));this.K0.R(A.aaR(A.acu.Akh));this.VE.R(A.aaR(A.acf.Bat));this.
MassUnit.S(A.aaL(A.fl.EK));this.K0.S(A.aaL(A.fl.Aes));this.VE.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AV9={FM:null
,OR:null,Nl:null,C_:null,L1:null,T8:null,Init:function(aArg){var B;A.zX([this,this.
GG],[B=this.FM,B.B$,B.Cc],0);A.pe([this,this.GG],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GG],this);},Bk3:function(G){var F;this.L1.BU.L(this.
L1.V.AQ);if(!!this.L1.Q)this.L1.BU.R((A._GetAutoObject(A.Device.Converter).Td((F=
this.L1.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DU).Aay());},GG:function(
G){var AJB=true;if(this.FM.Q===1)AJB=false;this.C_.Aj(AJB);this.C_.As(AJB);this.
C_.Z(AJB);A._GetAutoObject(A.Device.Helper).ANx(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMH._Init.call(this.FM={I:this},0);C.AHt._Init.call(this.
OR={I:this},0);C.AU0._Init.call(this.Nl={I:this},0);C.AkR._Init.call(this.C_={I:
this},0);C.Iu._Init.call(this.L1={I:this},0);C.BX._Init.call(this.T8={I:this},0);
this.__proto__=C.AV9;var B;this.Jf(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.FM.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OR.Au(A._GetAutoObject(
A.Device.Device).OR);this.Nl.H(AXU);this.Nl.Aj(true);this.C_.H(Aol);this.C_.Aj(true
);this.C_.T(A.aaR(A.acf.KO));this.C_.Bh(true);this.C_.Gb(1000);this.C_.EV(99000);
this.L1.H(As_);this.L1.Aj(true);this.L1.T(A.aaR(A.acf.A5F));this.L1.Gb(50);this.
L1.EV(2000);this.L1.ATn(A._GetAutoObject(A.acj.DU).Az1());this.T8.H(AhZ);this.T8.
Aj(true);this.T8.T(A.aaR(A.acf.A74));this.T8.Gb(-1);this.T8.EV(1);this.J5(this.Y
,-1);this.J5(this.Ay,-1);this.J(this.Nl,0);this.J(this.C_,0);this.J(this.L1,0);this.
J(this.T8,0);this.Nl.Ab2([B=this.Nl,B.FW]);this.Nl.Gs([this,this.D_,this.GS]);this.
Nl.Akv(A.aaL(A.ach.Edit));this.Nl.L4([B=this.Nl,B.Ay4]);this.Nl.L7(A.aaL(A.ach.AnP
));this.Nl.Au([B=this.FM,B.B$,B.Cc]);this.Nl.CK(this.FM);this.Nl.A_J([B=this.FM,
B.AS3,B.A0Q]);this.Nl.A_I([B=this.FM,B.AS2,B.A0P]);this.C_.Gs([this,this.D_,this.
GS]);this.C_.L4([B=this.Nl,B.Ay4]);this.C_.L7(A.aaL(A.ach.AnP));this.C_.Au([B=this.
FM,B.A8T,B.AS_]);this.L1.Gs([this,this.D_,this.GS]);this.L1.L4([B=this.Nl,B.Ay4]
);this.L1.L7(A.aaL(A.ach.AnP));this.L1.Au([B=this.FM,B.A8R,B.AS8]);this.L1.A_W([
this,this.Bk3]);this.T8.Gs([this,this.D_,this.GS]);this.T8.Au([B=this.OR,B.B$,B.
Cc]);this.T8.CK(this.OR);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FM._Done();this.OR._Done();this.Nl._Done();this.C_._Done();this.L1._Done();
this.T8._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FM._ReInit();this.OR._ReInit();this.Nl._ReInit();this.C_._ReInit();this.L1.
_ReInit();this.T8._ReInit();this.Jf(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.C_.T(A.aaR(A.acf.KO));this.L1.T(A.aaR(A.acf.A5F));this.T8.T(A.aaR(A.acf.
A74));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU0={Y3:null,Init:
function(aArg){var B;A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Device),B.
ASK,B.A0B],0);A.pe([this,this.AfH],this);},A4i:function(G){A._GetAutoObject(A.Device.
Device).AZ(37,true,A.jV,0,[this,this.Bb8]);},A18:function(G){var F;if(this.A8===
1){var BP=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).Az1();if(this.D7<this.
AlR)this.D7=this.AlR;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A8===2){var BP=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).Az1();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2
)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();
},A2I:function(G){var F;if(this.A8===1){var BP=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).Az1();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.J3
)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A8===2){var BP=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).Az1();if(this.DW>this.AlN)this.DW=
this.AlN;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(
this.J2,0);}}this.DK(this);this.Am();},GG:function(G){this.PP.R(AH8+A._GetAutoObject(
A.Device.Converter).Td(this.D7,2,true));this.PO.R(AH8+A._GetAutoObject(A.Device.
Converter).Td(this.DW,2,true));this.SB.R(A._GetAutoObject(A.acj.DU).Aay());this.
Y3.R(this.SB.String);},A3T:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).Ast(this
);},A2B:function(Ats){if(Ats===1)return this.PP;else if(Ats===2)return this.PO;else
return null;},_Init:function(aArg){C.Acp._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y3={I:this},0);this.__proto__=C.AU0;this.T(A.aaR(A.acf.ACD));this.AlN=
2000;this.AlR=20;this.Background.H(K2);this.V.H(BD);this.V.R(A.aaR(A.acf.ACD)+A.
aaR(A.acf.Colon));this.V.A4(0x12);this.AkJ.H(AXV);this.AkK.H(AXW);this.Q8.H(AXX);
this.QH.H(AXY);this.PO.H(AXZ);this.PP.H(AX0);this.SB.H(AH9);this.Y3.H(AX1);this.
Y3.Je(false);this.Y3.A4(0x12);this.Y3.L(0xFF000000);this.J5(this.H8,-8);this.J(this.
Y3,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y3.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acp;this.Y3._Done();C.Acp.
_Done.call(this);},_ReInit:function(){C.Acp._ReInit.call(this);this.Y3._ReInit();
this.T(A.aaR(A.acf.ACD));this.V.R(A.aaR(A.acf.ACD)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y3.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acp._Mark.call(this,D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABO={M:O_,A7D:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7D();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABO;},_className:"Application::AbstractPath"
};C.Aqc={DQ:null,DY:null,Rk:null,AdP:null,P5:null,AdO:null,AuC:1,A5b:0,Bc4:false
,AzX:true,CP:function(){this.Bhg(this);},Init:function(aArg){var B;this.Ba(this.
AdP);A.zX([this,this.Bhg],[B=this.AdP,B.A80,B.BbB],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdO.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Biz(this.AuC+this.A5b)));if(this.AuC===1)this.P5.R(A.aaR(A.acf.ANl));else this.
P5.R(A.aaR(A.acf.Bh9));},CC:function(G){if(this.AzX)this.AzX=false;else if(this.
DQ.Bdc()===false)A.pe([this,this.A3r],this);else if(this.DQ.AAa())this.DQ.Ac7();
A.zV([this,this.AaH],A._GetAutoObject(A.Device.Device).An,0);},E3:function(G){A.
z9([this,this.AaH],A._GetAutoObject(A.Device.Device).An,0);},A3r:function(G){this.
Bc4=true;A._GetAutoObject(C.A5).Fz();},Bhg:function(G){var B;var BdE=(C.Wq.isPrototypeOf(
B=this.AdP.AV)?B:null);if(!!BdE){var Azi=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Azi.LA(BdE.Action));}},Ik:function(G){var Cy=(C.Wq.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DQ.Qp(Cy.Action);this.Bmj(this.AuC+1);},BBc:function(G){
if(A._GetAutoObject(C.Pp).N3(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmj:function(E){
if(this.AuC===E)return;this.AuC=E;this.Am();},AaH:function(G){if((this.Bc4===false
)&&(this.DQ.Bdc()===false))A.pe([this,this.A3r],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rk={I:this},0);C.ARQ._Init.call(this.AdP={I:this},0);C.CG._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdO={I:this},0);this.__proto__=C.Aqc;this.Background.
L(A.jb.CU);this.N.H(U1);this.N.Z(true);this.Dq(C.IP);this.DY.A1(0x3F);this.DY.H(
Fc);this.DY.L(A.jb.CJ);this.Rk.H(AX2);this.Rk.L(A.jb.Text);this.AdP.H(AX3);this.
P5.H(AX4);this.P5.R(A.aaR(A.acf.ANl));this.P5.L(A.jb.Text);this.AdO.H(AX5);this.
AdO.R(AX6);this.AdO.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rk,0);this.J(this.
AdP,0);this.J(this.P5,0);this.J(this.AdO,0);this.N.CF=[this,this.A3r];this.N.Ce=[
this,this.BBc];this.N.C2(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeC));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.AY(A.aaL(A.fl.Af));this.Rk.Cl(A.aaL(A.fl.Ak));this.AdP.A3R=[
this,this.Ik];this.P5.S(A.aaL(A.fl.EK));this.P5.AY(A.aaL(A.fl.Af));this.P5.Cl(A.
aaL(A.fl.Ak));this.AdO.S(A.aaL(A.fl.H5));this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rk._Done();this.
AdP._Done();this.P5._Done();this.AdO._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rk._ReInit();this.AdP._ReInit();
this.P5._ReInit();this.AdO._ReInit();this.P5.R(A.aaR(A.acf.ANl));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.AY(A.aaL(A.fl.Af));this.Rk.Cl(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.AY(A.aaL(A.fl.Af));this.P5.Cl(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARQ={If:null,A3R:null,Cq:null,Y:null,Ay:
null,A4x:0,Init:function(aArg){A.zV([this,this.ABD],this.If,0);A.zV([this,this.Bhd
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.Auz],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABD],this);},Ba:function(E){var A3n=this.AV;
A.Core.P.Ba.call(this,E);if(this.AV!==A3n)A.abo([this,this.A80,this.BbB],0);},DF:
function(G){var B;var Ff=0;var X=this.AV;switch(this.Cq.CO){case 6:Ff=2;break;case
7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x415);
if((Ff===5)&&!X){var ALf=this.AV;while(!X){ALf=this.QK(ALf,2,0x415);if(!!ALf)X=this.
QK(ALf,Ff,0x415);else break;}}if(!!X)this.Ba(X);var GZ=(C.Wq.isPrototypeOf(B=this.
AV)?B:null);if(!!GZ)this.A4x=(C.Wq.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4x=0;A.pe([this,this.M0],this);},A11:function(Eh){var EQ=A._GetAutoObject(C.DQ).
Bdk(Eh,this.A3R);this.J(EQ,0);},AoZ:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(AdK);
}},ABD:function(G){this.AoZ();var O;var CB=A._GetAutoObject(C.Pp).Ng();for(O=0;O<
CB;O=O+1){var Tl=A._GetAutoObject(C.Pp).OK(O);this.A11(Tl);}A.pe([this,this.Bhd]
,this);A.pe([this,this.BqK],this);A.pe([this,this.Auz],this);},BqK:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wq.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},Auz:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wq.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((
B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Bhd:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wq.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pp).N3(Aa.Action)&&A._GetAutoObject(C.
DQ).A5a(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4x===Aa.Action)this.Ba(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.M0],this);},M0:function(G){var B;this.Y.VC(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARQ;this.H(AX7);this.Cq.Filter=147;this.Y.A1(0xB);this.Y.H(AX8);this.Y.JZ(9);this.
Ay.A1(0xA);this.Ay.H(AH_);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.Y.Em=[this,this.Fh];this.If=A._GetAutoObject(
C.Pp);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.If)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={Ek:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.As(false);this.Ek.H(BD);this.Ek.As(false
);this.AK.H(Fc);this.AK.L(A.jb.Ad$);this.Text.H(BD);this.Text.R(AX9);this.Text.L(
0xFF000000);this.Ap.H(O_);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Ct(A.aaL(A.ach.AeC));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADr));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaW={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H0:function(G){},Ai:function(Ae){C.BX.
Ai.call(this,Ae);var FT=A.jb.Ad$;var GY=A.jb.CU;if(this.Hl){FT=A.jb.Text;GY=A.jb.
Bm;}if(!this.LM){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY);}this.Hx.L(A.
jb.CU);this.H8.L(A.jb.CU);},Hm:function(G){var B;var Gh=this.DB.G5;var CA=(C.CG.
isPrototypeOf(B=this.DB.Ci)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AY(A.aaL(
A.fl.Bg));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.R(Xm);CA.H(A.
abK(CA.M,[this.DB.Wg,(B=this.DB.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.AaW;this.DB.AFw(170);this.DB.N8(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajh={C9:null,Init:function(
aArg){this.V.Text.A4(0x11);this.V.Text.Hn(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FT=A.jb.Ad$;var GY=A.jb.CU;if(this.Hl){FT=A.jb.Text;
GY=A.jb.Bm;}if(!this.LM){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Ajh;this.C9.H(AX_);this.C9.Cw(1);this.J(this.C9,0);this.C9.Ax(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C9._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C9._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL4={Y:null,RQ:null,Ty:null
,Tz:null,TA:null,AdN:null,XS:null,Vw:null,Vx:null,AaV:null,Ay:null,Init:function(
aArg){this.Ba(this.RQ);},DF:function(G){C.Fq.DF.call(this,G);this.M0(this);},H0:
function(G){this.Bgu(this);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CF=[this,this.Bgu];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);
this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},ABg:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XS.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XS.Q))A._GetAutoObject(C.AutoActions).J(this.XS.Q);if(!!this.Vw.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vw.Q))A._GetAutoObject(C.AutoActions
).J(this.Vw.Q);if(!!this.Vx.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vx.
Q))A._GetAutoObject(C.AutoActions).J(this.Vx.Q);if(!!this.AaV.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaV.Q))A._GetAutoObject(C.AutoActions).J(this.AaV.Q
);A._GetAutoObject(C.AutoActions).Cr();},Bgu:function(G){if(this.BAj()===true){this.
ABg();this.AaJ(this);}else A._GetAutoObject(A.Device.Device).AZ(27,true,A.jV,0,null
);},BAj:function(){return(!!this.XS.C6(this.XS.Q)||!!this.Vw.C6(this.Vw.Q))||!!this.
Vx.C6(this.Vx.Q);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.
Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(G){var B;this.
Y.VC(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BBq:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XS.Atz(this);this.Vw.Atz(this);this.Vx.Atz(this);this.AaV.Atz(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaW._Init.call(this.RQ={I:this},0);C.AaW._Init.call(this.Ty={I:this},0);C.
AaW._Init.call(this.Tz={I:this},0);C.AaW._Init.call(this.TA={I:this},0);C.Au6._Init.
call(this.AdN={I:this},0);C.AutoAction._Init.call(this.XS={I:this},0);C.AutoAction.
_Init.call(this.Vw={I:this},0);C.AutoAction._Init.call(this.Vx={I:this},0);C.AutoAction.
_Init.call(this.AaV={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL4;var B;this.H(Rp);this.Text.R(A.aaR(A.acf.TB));this.Y.H(L8);this.Y.JZ(1);this.
RQ.H(AhY);this.RQ.As(true);this.RQ.Aj(true);this.RQ.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajg),Pa,AH$));this.Ty.H(U2);this.Ty.As(true);this.Ty.Aj(true
);this.Ty.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),Pa,AIa));this.
Tz.H(Aaj);this.Tz.As(true);this.Tz.Aj(true);this.Tz.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajg),Pa,AIb));this.TA.H(Alf);this.TA.As(true);this.TA.Aj(
true);this.TA.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),Pa,AIc));this.
AdN.H(Ayv);this.AdN.Aj(true);this.AdN.T(A.aaR(A.acf.A$y));this.Vw.Index=1;this.Vx.
Index=2;this.AaV.Index=3;this.Ay.H(Iw);this.J(this.Y,0);this.J(this.RQ,0);this.J(
this.Ty,0);this.J(this.Tz,0);this.J(this.TA,0);this.J(this.AdN,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fh];this.RQ.Zw(A.aaL(A.fl.H5));this.RQ.Zx(A.aaL(A.fl.H5
));this.RQ.Au([B=this.XS,B.B$,B.Cc]);this.RQ.CK(this.XS);this.Ty.Zw(A.aaL(A.fl.H5
));this.Ty.Zx(A.aaL(A.fl.H5));this.Ty.Au([B=this.Vw,B.B$,B.Cc]);this.Ty.CK(this.
Vw);this.Tz.Zw(A.aaL(A.fl.H5));this.Tz.Zx(A.aaL(A.fl.H5));this.Tz.Au([B=this.Vx,
B.B$,B.Cc]);this.Tz.CK(this.Vx);this.TA.Zw(A.aaL(A.fl.H5));this.TA.Zx(A.aaL(A.fl.
H5));this.TA.Au([B=this.AaV,B.B$,B.Cc]);this.TA.CK(this.AaV);this.AdN.AR=[this,this.
BBq];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.
RQ._Done();this.Ty._Done();this.Tz._Done();this.TA._Done();this.AdN._Done();this.
XS._Done();this.Vw._Done();this.Vx._Done();this.AaV._Done();this.Ay._Done();C.Fq.
_Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.
RQ._ReInit();this.Ty._ReInit();this.Tz._ReInit();this.TA._ReInit();this.AdN._ReInit(
);this.XS._ReInit();this.Vw._ReInit();this.Vx._ReInit();this.AaV._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TB));this.RQ.T(A._GetAutoObject(A.Device.Helper
).MO(A.aaR(A.acf.Ajg),Pa,AH$));this.Ty.T(A._GetAutoObject(A.Device.Helper).MO(A.
aaR(A.acf.Ajg),Pa,AIa));this.Tz.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.
Ajg),Pa,AIb));this.TA.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),Pa
,AIc));this.AdN.T(A.aaR(A.acf.A$y));},_Mark:function(D){var B;C.Fq._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={BI:
A.abi(27,0,null),Dt:function(){return 16;},C6:function(aIndex){if(aIndex>=27)return-
1;return this.BI.Get(aIndex);},DZ:function(A9){var O=0;while(O<27){if(this.BI.Get(
O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<27){
if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BI=[]).__proto__=C.Cm.BI;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={If:null,Ac7:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Atz],this.Ac7,0);A.pe([this,this.
Atz],this);},Dt:function(){return this.If.Ng();},C6:function(aIndex){if(aIndex>=
this.Dt())return-1;return this.If.OK(aIndex);},Gm:function(aIndex){return this.ActionToString.
BT(this.C6(aIndex));},DZ:function(A9){var O=0;while(O<this.Dt()){if(this.If.OK(O
)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<this.
Dt()){if(this.If.OK(O)>max)max=this.If.OK(O);O=O+1;}return max;},Atz:function(G){
this.Q=this.Ac7.OK(this.Index);A.abo([this,this.B$,this.Cc],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.If=A._GetAutoObject(C.AuR);this.Ac7=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL_={Atw:0,Init:function(aArg
){var B;A.zX([this,this.Be0],[B=A._GetAutoObject(A.Device.Device),B.A8F,B.Bbm],0
);A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.A0w],0);A.pe([
this,this.Be0],this);A.pe([this,this.BeX],this);},Clear:function(){C.VB.Clear.call(
this);this.Atw=0;},Cr:function(){A._GetAutoObject(A.Device.Device).ArE(this.Atw);
A._GetAutoObject(A.Device.Device).ArF(this.toString());},Be0:function(G){this.Atw=
A._GetAutoObject(A.Device.Device).Pp;A.we(this,0);},BeX:function(G){this.Fl(A._GetAutoObject(
A.Device.Device).AuE);A.we(this,0);},N3:function(Eh){if((this.Atw&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUQ:function(
Eh){this.Atw=this.Atw|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.VB._Init.
call(this,aArg);this.__proto__=C.AL_;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pp={_Init:function(){C.AL_._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL$={Vz:null,Ay:null,Y:null,JV:null,CP:function(
){this.AiI(this);},Init:function(aArg){A.zV([this,this.AiI],this.Vz,0);A.pe([this
,this.AiI],this);},DF:function(G){C.Fq.DF.call(this,G);this.M0(this);},Lr:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3y];this.BQ.Ca=[this,this.A33];this.BQ.C3(A.aaL(A.ach.Arc));this.BQ.Ct(
A.aaL(A.ach.Aq6));this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},Ew:function(G){if(
this.By$()>0){this.ABg();this.AaJ(this);}else A._GetAutoObject(A.Device.Device).
AZ(28,true,A.jV,0,null);},AiI:function(G){this.AoZ();var O;for(O=0;O<this.Vz.Ng(
);O=O+1){var Tl=A._GetAutoObject(C.Pp).OK(O);this.A1E(Tl);}this.J(this.JV,0);A.aaS([
this,this.M0],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]
);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(G){var
B;this.Y.VC(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A1E:function(G$){var Azi=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sk,0);Aa.T(Azi.BT(G$));Aa.Aj(true);Aa.G5=G$;Aa.A_v(this.
Vz.N3(G$));this.J(Aa,0);this.ZH(Aa);},AoZ:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===0x400))this.HP(
AdK);}},ABg:function(){var B;this.Vz.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var Aa=(C.Sk.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vz.J(Aa.G5);if(Aa.ASI())this.Vz.AUQ(Aa.G5);}else A.ab5(
"%s",Ayw);}X=X.Ah;}this.Vz.Cr();},By$:function(){var B;var A4y=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var
Aa=(C.Sk.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASI())A4y=A4y+1;}else A.ab5("%s"
,Ayw);}X=X.Ah;}return A4y;},A3y:function(G){var B;var Aa=(C.Sk.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAw=(C.Sk.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAw){this.
AhA(AAw,Aa);A.pe([this,this.M0],this);}}},A33:function(G){var B;var Aa=(C.Sk.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA4=(C.Sk.isPrototypeOf(B=Aa.AI)?B:null);if(!!AA4
){this.AhA(Aa,AA4);A.pe([this,this.M0],this);}}},AqI:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiI],this);},_Init:function(
aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au6._Init.call(this.JV={I:this},0);this.__proto__=C.AL$;
this.H(Rp);this.Text.R(A.aaR(A.acf.AEs));this.Ay.H(Iw);this.Y.H(L8);this.Y.JZ(1);
this.JV.H(AId);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.AqI));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fh];this.JV.AR=[this,this.AqI
];this.Vz=A._GetAutoObject(C.Pp);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Ay._Done();this.Y._Done();this.JV._Done();C.Fq._Done.call(this);},_ReInit:
function(){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JV._ReInit(
);this.Text.R(A.aaR(A.acf.AEs));this.JV.T(A.aaR(A.acf.AqI));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.Vz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sk={G5:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A4(0x11);this.
V.Text.Hn(10);},Bl:function(aSize){C.Ud.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mv.M[0]));},Ai:function(Ae){var B;C.Ud.Ai.call(this,Ae);var He=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GD=this.Bo.Bw;var FT=A.jb.Ad$;var GY=A.jb.
Bm;if(this.Hl){FT=A.jb.Bm;GY=A.jb.Text;}if(!He){this.Background.L(FT);this.V.L(A.
jb.CJ);}else if(GD){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY);
}this.LM=He;this.KL=Fu;this.Qv=GD;},H0:function(G){this.A31(this);},A31:function(
G){this.AFd(!this.AmB);},A_v:function(E){this.AFd(E);},ASI:function(){return this.
AmB;},_Init:function(aArg){C.Ud._Init.call(this,aArg);this.__proto__=C.Sk;this.Mv.
H(AIe);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VB={CB:0,
If:A.abi(17,0,null),OK:function(HA){return this.If.Get(HA);},Ng:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.If.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AIf);else{this.If.Set(this.CB,Eh);this.CB=this.CB+
1;}},Cr:function(){},Fl:function(AcU){var AJp=AcU.indexOf(String.fromCharCode(0x2C
),0);var A12=A.jV;var O=0;this.CB=0;while(O<17)if(AcU===A.jV){this.If.Set(O,0);O++;
}else{if(AJp===-1){A12=AcU;AcU=A.jV;}else{A12=A.abV(AcU,AJp);AcU=A.ab1(AcU,0,AJp+
1);}var Tl=A.abZ(A12,0,10)|0;if(this.AD7(Tl)){this.If.Set(this.CB,Tl);this.CB=this.
CB+1;O++;}AJp=AcU.indexOf(String.fromCharCode(0x2C),0);}if(AcU!==A.jV)A.ab5("%s"
,Ayx);},toString:function(){var A3e=(((B=this.If.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3e=(A3e+Ayy)+(((B=this.If.Get(O))<0)?B+0x100000000:
B).toFixed();return A3e;},Axv:function(HA,Eh){if(HA>=this.CB){A.ab5("%s",((((AX$+
HA.toFixed())+AYa)+this.CB.toFixed())+AYb)+AYc);return;}this.If.Set(HA,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.If.Get(O)===Eh)return true;return false;
},AD7:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.If.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.If=[]).__proto__=
C.VB.If;this.__proto__=C.VB;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMR={Init:function(aArg){var B;A.zX([this,this.Be_],[B=A._GetAutoObject(A.Device.
Device),B.A8Q,B.Bbu],0);A.pe([this,this.Be_],this);},Cr:function(){A._GetAutoObject(
A.Device.Device).Akq(this.toString());},AD7:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be_:function(
G){this.Fl(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VB._Init.call(this,aArg);this.__proto__=C.AMR;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMR._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wq={Vy:null,KB:null,A7C:A.jV,Action:0,A5c:false,A$j:false,A$4:false,Bl:function(
aSize){C.Fm.Bl.call(this,aSize);this.Q4.H(this.MB.M);this.OJ.H(this.Q4.M);},Ai:function(
Ae){C.Fm.Ai.call(this,Ae);if(!this.LM){this.KB.T1.L(A.jb.Am2);this.KB.QM.Z(true);
this.KB.QM.L(A.jb.ARa);}else if(this.Qv){this.KB.T1.L(A.jb.Bm);this.KB.QM.Z(false
);}else if(this.KL){this.KB.T1.L(A.jb.Bm);this.KB.QM.Z(false);}else{this.KB.T1.L(
A.jb.Text);this.KB.QM.Z(true);this.KB.QM.L(A.jb.CU);}},Bmi:function(E){if(this.Action===
E)return;this.Action=E;},Bno:function(E){if(this.A7C===E)return;this.A7C=E;this.
Vy.Text.R(E);},ATQ:function(E){if(this.A$4===E)return;this.A$4=E;this.KB.Boa(!this.
KB.AVe);},AFN:function(E){if(this.A$j===E)return;this.A$j=E;this.KB.Z(!this.KB.Fo(
));},A9W:function(E){if(this.A5c===E)return;this.A5c=E;this.Vy.Z(E);},_Init:function(
aArg){C.Fm._Init.call(this,aArg);C.Vy._Init.call(this.Vy={I:this},0);C.KB._Init.
call(this.KB={I:this},0);this.__proto__=C.Wq;this.H(AYd);this.Background.H(AYe);
this.G9.As(false);this.G9.Z(false);this.Vy.H(AYf);this.Vy.Z(false);this.KB.H(AYg
);this.KB.Z(false);this.J(this.Vy,0);this.J(this.KB,0);this.MB.Ax(A.aaL(A.ach.ANm
));},_Done:function(){this.__proto__=C.Fm;this.Vy._Done();this.KB._Done();C.Fm._Done.
call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Vy._ReInit();this.KB.
_ReInit();},_Mark:function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Vy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vy={AK:null,Text:null,BW:null,Init:function(
aArg){this.Text.H(this.M);this.BW.H(this.M);this.AK.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BW._Init.call(this.BW={I:this},0);this.__proto__=
C.Vy;this.AK.H(AYh);this.AK.L(A.jb.Bj2);this.H(AYi);this.Text.H(AYj);this.Text.L(
A.jb.Text);this.BW.H(AYk);this.BW.Nu(1);this.BW.L(A.jb.Text);this.J(this.AK,0);this.
J(this.Text,0);this.J(this.BW,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AK._Done();this.Text._Done();this.BW._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AK._ReInit();this.Text._ReInit();this.BW._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KB={QM:null
,T1:null,AVe:false,Boa:function(E){if(this.AVe===E)return;this.AVe=E;if(E){this.
T1.Ax(A.aaL(A.ach.ACK));this.QM.Ax(A.aaL(A.ach.ACK));}else{this.T1.Ax(A.aaL(A.ach.
AqC));this.QM.Ax(A.aaL(A.ach.AqC));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QM={I:this},0);A.acg.Ap._Init.call(this.T1={I:this
},0);this.__proto__=C.KB;this.H(Ayz);this.QM.H(Ayz);this.QM.Cw(1);this.T1.H(Ayz);
this.T1.Cw(0);this.J(this.QM,0);this.J(this.T1,0);this.QM.Ax(A.aaL(A.ach.AqC));this.
T1.Ax(A.aaL(A.ach.AqC));},_Done:function(){this.__proto__=A.Core.P;this.QM._Done(
);this.T1._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QM._ReInit();this.T1._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASc={
Gf:null,Cd:null,Do:null,Di:null,Kw:null,Zn:10,Aq2:0,AED:0,ASq:0,Azh:false,L0:false
,Bdb:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Ll(
))A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).
An.HK().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.G7();A._GetAutoObject(
A.Device.Helper).Aqf(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAL],this.
Da.Q,0);A.zX([this,this.BA$],this.Do.Q,0);A.zX([this,this.ABB],this.Di.Q,0);A.zX([
this,this.ABB],this.Di.HH.Q,0);A.zX([this,this.ABB],[this,this.ASP,this.AFL],0);
A.zX([this,this.GG],[B=A._GetAutoObject(A.Device.Device),B.A9O,B.BbY],0);A.zX([this
,this.BfH],this.Cd.Q,0);A.pe([this,this.AAL],this);A.pe([this,this.GG],this);A.pe([
this,this.ABB],this);A.pe([this,this.BfH],this);},CC:function(G){if(!this.Azh){this.
Azh=true;A.pe([this,this.AcR],this);}else C.H2.CC.call(this,G);},Agf:function(G){
this.ASq=this.Zn;this.Bdj(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.FD();A._GetAutoObject(C.A5).Fz();},Aul:function(){this.N.CS(A.jV);this.N.C3(
A.aaL(A.ach.ADQ));this.N.Ca=[this,this.Ay3];},AAF:function(G){A._GetAutoObject(C.
A5).Cb(55);},AFL:function(E){if(this.Zn===E)return;this.Zn=E;A.abo([this,this.ASP
,this.AFL],0);},Bdj:function(G){var F;if(!this.Zn||(this.Bdb===true)){A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);if(this.AED===1)A._GetAutoObject(A.Device.
Device).AZ(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AZ(23,
true,this.AED.toFixed(),2000,null);this.Ew(this);return;}this.Gf.G7();this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gf.N7(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gf.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gf.J0(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gf.Nr(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gf.PY(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gf.SO(A._GetAutoObject(A.Device.Helper).W.VisualId);var Als=A._GetAutoObject(
A.Device.Helper).A1W(this.Gf,(F=this.Di.H3.Ht,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Als)this.AiY();else{A._GetAutoObject(A.Device.Helper).AKn(
this.Gf,Als,(F=this.Di.H3.Ht,F[1].call(F[0])),this.Zn-1,[this,this.ApD]);A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);}},GG:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am4())this.C_.Z(true);else this.C_.Z(false);if(this.L0){this.Do.
Z(false);this.Cd.T(A.aaR(A.acf.ACR));this.Cd.AFf(A.aaL(A.ach.Afc));}else{this.Do.
Z(true);this.Cd.T(A.aaR(A.acf.Ak2));this.Cd.AFf(null);}if((this.Y.BjA(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JN(this.Y.TS(this.AV,0x1));this.Am();
},ATk:function(E){if(this.Aq2===E)return;this.Aq2=E;A.abo([this,this.A84,this.ATk
],0);},ABB:function(G){var F;var AJ$=(F=this.Di.Q,F[1].call(F[0]));var AAn=-1;switch((
F=this.Di.H3.Ht,F[1].call(F[0]))){case 0:AAn=AJ$+((F=A._GetAutoObject(A.Device.Helper
).BdR(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zn-1));break;case 1:AAn=(AJ$+this.
Zn)-1;break;case 3:case 2:case 5:case 4:switch(this.Di.HH.AC.Q){case 0:AAn=(AJ$+
this.Zn)-1;break;case 1:AAn=(AJ$-this.Zn)+1;break;default:throw new Error(AYl+this.
Di.HH.AC.Q.toFixed());}break;default:throw new Error(AYm+this.Di.HH.AC.Q.toFixed(
));}this.ATk(AAn);},BA$:function(G){A.pe([this,this.GG],this);A.pe([this,this.At6
],this);},AAL:function(G){A._GetAutoObject(A.Device.Helper).AVM(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
L0);A.pe([this,this.ABB],this);},ApD:function(G){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.Apx();else switch((F=this.Di.H3.Ht,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JN(this.Di);break;case 0:this.JN(this.Do
);break;case 1:this.JN(this.Cd);break;default:throw new Error(AyA+(F=this.Di.H3.
Ht,F[1].call(F[0])).toFixed());}break;case 25:this.JN(this.Cd);break;case 47:if(
Ar.PopupState===7)this.Apx();else{this.JN(this.Di);this.JN(this.Cd);}break;case 43:{
this.JN(this.Di);this.JN(this.Do);}break;case 42:{this.JN(this.Di);this.JN(this.
Cd);}break;case 41:break;default:A.ab5("%s%e",As$,Ar.Id);}},AiY:function(){this.
Gf.Cr(A._GetAutoObject(A.Device.Device).An);this.AED=this.AED+1;if(A._GetAutoObject(
A.Device.Helper).Am4()){if(A._GetAutoObject(A.Device.Device).Bt.Ll()){A._GetAutoObject(
A.Device.Device).AZ(24,false,U3,0,null);A._GetAutoObject(A.Device.Device).AZ(50,
true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);}else{var Mc=A.
_GetAutoObject(A.Device.Device).An.LY(0,this.Gf.Id);A._GetAutoObject(A.Device.Device
).SV(Mc);var B2=A._NewObject(A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(this.Gf.
Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apx();},Apx:function(){var B;var F,Cu;if(!!(F=this.Cd.
Q,F[1].call(F[0]))){(F=this.Cd.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.L0)(
Cu=this.Do.Q,Cu[2].call(Cu[0],(F=this.Cd.Q,F[1].call(F[0]))));}if(!this.L0)(Cu=this.
Do.Q,Cu[2].call(Cu[0],A._GetAutoObject(A.Device.Helper).Bak(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Do.Q,F[1].call(
F[0])),this.Do.AjK(),this.Do.AjM())));var I3=null;switch((F=this.Di.H3.Ht,F[1].call(
F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV];break;case 2:
I3=[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyW];break;case 4:case 5:I3=[B=A.
_GetAutoObject(A.Device.Device),B.Anr,B.Aov];break;default:;}if(!!I3){switch((F=
this.Di.Kq.VY,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Di.Q,F[2].call(F[0],I3[1].call(I3[0])));
}var XO=100-((this.Zn/this.ASq)*100);A._GetAutoObject(A.Device.Device).AZ(24,true
,(((this.ASq.toFixed()+Ata)+(XO|0).toFixed())+Ata)+(F=this.Di.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBj]);this.AFL(this.Zn-1);A.aaS([this,this.Bdj],null);},BBj:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdb=true;},ApE:function(G){var F;C.H2.ApE.call(this,G);var AoS=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:AoS=A._GetAutoObject(A.Device.
Device).AdR;break;case 1:AoS=730;break;default:A.ab5("%s%e",Alc,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Du()-A._GetAutoObject(A.Device.Helper).AmH(AoS));(F=this.C_.Q,F[2].call(
F[0],this.C_.AnW));switch(this.B0.AC.Q){case 0:{this.Kw.Jg(A.aaR(A.acf.ANh));this.
Kw.IW(A.aaR(A.acf.ANi));}break;case 1:{this.Kw.Jg(A.aaR(A.acf.Bih));this.Kw.IW(A.
aaR(A.acf.Bii));}break;case 2:{this.Kw.Jg(A.aaR(A.acf.Bko));this.Kw.IW(A.aaR(A.acf.
Bkp));}break;default:throw new Error(Alc);}},Ae2:function(E){if(this.L0===E)return;
this.L0=E;A.abo([this,this.Awf,this.Ae2],0);},At6:function(G){var F,Cu,Th;this.Ae2(((
F=this.Cd.Q,F[1].call(F[0]))===(Cu=this.Do.Q,Cu[1].call(Cu[0])))&&!!(Th=this.Cd.
Q,Th[1].call(Th[0])));A.pe([this,this.GG],this);},BfH:function(G){A.pe([this,this.
At6],this);},ASP:function(){return this.Zn;},A84:function(){return this.Aq2;},Awf:
function(){return this.L0;},_Init:function(aArg){C.H2._Init.call(this,aArg);C.AvY.
_Init.call(this.Cd={I:this},0);C.Rb._Init.call(this.Do={I:this},0);C.AGP._Init.call(
this.Di={I:this},0);C.AU2._Init.call(this.Kw={I:this},0);this.__proto__=C.ASc;var
B;this.Dq(C.ADt);this.Cd.H(Aoi);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak2));this.
Cd.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asw));this.Cd.ArN(A.
aaR(A.acf.Akj));this.Do.H(AYn);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Uj));this.
Do.Ar2(false);this.Di.H(AYo);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.A7p));this.Di.
Bx(0);this.Kw.H(AYp);this.Kw.Aj(true);this.Kw.T(A.aaR(A.acf.A8w));this.Kw.Gb(1);
this.Kw.EV(500);this.Kw.IW(A.aaR(A.acf.ANi));this.Kw.Jg(A.aaR(A.acf.ANh));this.Kw.
A_m(A.aaR(A.acf.Aq2)+A.aaR(A.acf.Colon));this.J(this.Cd,0);this.J(this.Do,0);this.
J(this.Di,0);this.J(this.Kw,0);this.Gf=A._NewObject(A.Device.Animal,0);this.Cd.AR=[
this,this.AcR];this.Cd.L4([this,this.AcR]);this.Cd.L7(A.aaL(A.ach.Afc));this.Cd.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.PY]);this.Cd.OS([B=A._GetAutoObject(
A.Device.Device),B.Ul,B.U5]);this.Cd.PW([B=A._GetAutoObject(A.Device.Device),B.Un
,B.U6]);this.Cd.Uq([B=A._GetAutoObject(A.Device.Device),B.Ano,B.Aou]);this.Cd.Ae2([
this,this.Awf,this.Ae2]);this.Do.Gs([this,this.D_,this.GS]);this.Do.L4([this,this.
AcR]);this.Do.L7(A.aaL(A.ach.Afc));this.Do.Us([B=this.Gender.Animal,B.WE,B.J0]);
this.Do.OS([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.Do.PW([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U6]);this.Do.Uq([B=A._GetAutoObject(A.Device.Device),B.Ano
,B.Aou]);this.Do.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Ans,B.Nr]);this.Do.
Anu([B=this.AnimalType.Animal,B.PV,B.EC]);this.Di.Gs([this,this.D_,this.GS]);this.
Di.L4([B=this.Di,B.FW]);this.Di.L7(A.aaL(A.ach.Edit));this.Di.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArC,B.SO]);this.Di.A9X(A._GetAutoObject(A.Device.Helper).W);
this.Kw.Au([this,this.ASP,this.AFL]);this.Kw.BmM([this,this.A84,this.ATk]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H2;this.Cd._Done();this.Do._Done(
);this.Di._Done();this.Kw._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2.
_ReInit.call(this);this.Cd._ReInit();this.Do._ReInit();this.Di._ReInit();this.Kw.
_ReInit();this.Cd.T(A.aaR(A.acf.Ak2));this.Cd.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.Asw));this.Cd.ArN(A.aaR(A.acf.Akj));this.Do.T(A.aaR(A.acf.
Uj));this.Di.T(A.aaR(A.acf.A7p));this.Kw.T(A.aaR(A.acf.A8w));this.Kw.IW(A.aaR(A.
acf.ANi));this.Kw.Jg(A.aaR(A.acf.ANh));this.Kw.A_m(A.aaR(A.acf.Aq2)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.Gf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUt={BX:null,RatingMode:null,Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaJ];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUt;var B;this.
H(Rp);this.BX.H(Aol);this.BX.T(A.aaR(A.acf.Bac));this.J(this.BX,0);this.BX.Au([B=
this.RatingMode,B.B$,B.Cc]);this.BX.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BX._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit(
);this.RatingMode._ReInit();this.BX.T(A.aaR(A.acf.Bac));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgi],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0H],0);A.pe([this,this.Bgi],this
);},Dt:function(){return 2;},Gm:function(aIndex){return this.RatingModeToString.
BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw2(E);},Bgi:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BI.Set(0,0);this.BI.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANB={WX:
function(G){C.Amt.WX.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqX()){
A._GetAutoObject(A.Device.Helper).W.Akx(false);A._GetAutoObject(A.Device.Helper).
W.Cr(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amt._Init.call(
this,aArg);this.__proto__=C.ANB;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hi={DL:A.jV,T:function(E){if(this.DL===E)return;this.DL=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hi;},_className:"Application::BaseItem"
};C.AV2={BX:null,WeightRecordingMode:null,Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaJ];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AV2;var B;this.H(Rp);this.BX.H(Aol);this.BX.T(A.aaR(A.acf.AsU));this.BX.EV(1);
this.J(this.BX,0);this.BX.Au([B=this.WeightRecordingMode,B.B$,B.Cc]);this.BX.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BX.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit();this.WeightRecordingMode.
_ReInit();this.BX.T(A.aaR(A.acf.AsU));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dt:function(){return 2;},Gm:function(aIndex){return this.
WeightRecordingModeToString.BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axd(E);},Init:function(aArg){var B;A.zX([this
,this.Bhp],[B=A._GetAutoObject(A.Device.Device),B.A9N,B.BbX],0);A.pe([this,this.
Bhp],this);},Bhp:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BI.Set(0,0);this.BI.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa6={BooleanToAutoOnOff:null,Gm:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BT(aIndex);},_Init:function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa6;},_Done:function(
){this.__proto__=C.Ge;this.BooleanToAutoOnOff._Done();C.Ge._Done.call(this);},_ReInit:
function(){C.Ge._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ge._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxT={A7D:function(){var B;this.
Axw(1);this.Jy(0,3);this.VK(0,0,(B=this.M)[3]-B[1]);this.A5f(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5f(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VT(0);},_Init:
function(aArg){C.ABO._Init.call(this,aArg);this.__proto__=C.AxT;},_className:"Application::Triangle"
};C.AT6={Y:null,Init:function(aArg){this.Byw(this);},Byv:function(Qd){var Aa=A._NewObject(
C.ANI,0);Aa.H(BD);Aa.T(Qd);Aa.Aj(true);Aa.As(false);Aa.Bh(true);this.J(Aa,0);this.
Aty(this);},Aty:function(G){var B;var AlA=1;var A27=0;var X=this.Y.Ah;var Cy=null;
var K_=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O2.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALi=(B=Cy.V.B7.A7g(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.My.isPrototypeOf(X)?X:null))ALi=ALi+20;if(A27<ALi)A27=ALi;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlA*28)));AlA=AlA+1;}else{K_=(A.acg.C7.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K_){var Dh=((B=this.M)[3]-B[1])-((AlA-1)*28);K_.DN([this.
M[0],K_.Et[1]]);K_.DN([K_.Et[0],Dh]);K_.DD([this.M[0]+120,K_.ED[1]]);K_.DD([K_.ED[
0],Dh]);}}X=X.Ah;}this.BB3(A27,28);},BB3:function(aWidth,BxE){var B;var X=this.Y.
Ah;var Cy=null;var K_=null;aWidth=aWidth+20;if(aWidth>(C.Asx[0]-10))aWidth=C.Asx[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O2.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A4(0x14);Cy.V.Text.Hn(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxE));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K_=(
A.acg.C7.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K_){K_.DN([this.M[
2]-aWidth,K_.Et[1]]);K_.DD([this.M[2],K_.ED[1]]);}}X=X.Ah;}},Byw:function(G){var
Aa=A._GetAutoObject(C.BS).AqM;while(!!Aa){if(!!(C.Axk.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axk.isPrototypeOf(Aa)?Aa:null);this.Byu(EF.DL,EF.AR,EF.Bw,EF.ARi);}else
if(!!(C.Axm.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axm.isPrototypeOf(Aa)?Aa:null);
this.ByB(EF.DL,EF.AR,EF.Bw,EF.WD,EF.WZ);}else if(!!(C.ZD.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZD.isPrototypeOf(Aa)?Aa:null);this.Byt(EF.DL,EF.AR,EF.Bw);}else if(
!!(C.AkD.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkD.isPrototypeOf(Aa)?Aa:null);this.
Byv(EF.DL);}else if(!!(C.AGh.isPrototypeOf(Aa)?Aa:null))this.ByC();Aa=Aa.MF;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.Aty],this);},Byt:function(Qd,Ac1,Ah3){var Aa=A._NewObject(
C.My,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac1;Aa.Aj(true);Aa.As(Ah3);Aa.Bh(true);this.J(Aa
,0);this.Aty(this);},ByC:function(){var K_=A._NewObject(A.acg.C7,0);K_.L(A.jb.Bm
);K_.Aj(true);K_.Nu(3);this.J(K_,0);this.Aty(this);},Byu:function(Qd,Ac1,Ah3,A1f
){var Aa=A._NewObject(C.AmF,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac1;Aa.Aj(true);Aa.As(Ah3
);Aa.Bh(true);Aa.Au(A1f);this.J(Aa,0);this.Aty(this);},ByB:function(Qd,Ac1,Ah3,A3m
,Agp){var Aa=A._NewObject(C.ANH,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac1;Aa.Aj(true);Aa.As(
Ah3);Aa.Bh(true);Aa.BnM(A3m);Aa.AFZ(Agp);this.J(Aa,0);this.Aty(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT6;this.H(Rp);this.Y.H(Rp);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afh={_Init:
function(){A.acl.Afh._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$f={AqM:null,Ahj:null,Mq:function(Qd){var EF=A._NewObject(
C.AkD,0);EF.DL=Qd;this.J(EF);},Clear:function(){this.AqM=null;this.Ahj=null;},Fx:
function(){var K_=A._NewObject(C.AGh,0);this.J(K_);},J:function(Bcz){if(!this.AqM
){this.AqM=Bcz;this.Ahj=this.AqM;}else{this.Ahj.MF=Bcz;this.Ahj=this.Ahj.MF;}},TC:
function(Qd,Ac1){var EF=A._NewObject(C.ZD,0);EF.DL=Qd;EF.AR=Ac1;this.J(EF);},Bhy:
function(Qd,Ac1,A1f){var EF=A._NewObject(C.Axk,0);EF.DL=Qd;EF.AR=Ac1;EF.ARi=A1f;
this.J(EF);},AaX:function(Qd){var EF=A._NewObject(C.ZD,0);EF.DL=Qd;EF.Bw=false;this.
J(EF);},ABS:function(Qd,Ac1,A3m,Agp){var EF=A._NewObject(C.Axm,0);EF.DL=Qd;EF.AR=
Ac1;EF.WD=A3m;EF.WZ=Agp;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$f;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$f._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axl={MF:null,_Init:function(aArg){this.__proto__=
C.Axl;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOE={Amr:null,ArG:function(E){if(this.Amr===
E)return;if(!!this.Ab)this.Ab.ZH(this);if(!!this.Amr)this.AqE(this.Amr,A._GetAutoObject(
C.AsB),null,null,null,null,false);this.Amr=E;if(!!this.Amr)this.AkI(this.Amr,A._GetAutoObject(
C.AsB),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOE;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amr)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WM={_Init:function(){C.AOE._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N9={Init:function(aArg){var C1=A._NewObject(C.AT7,0);C1.H(this.M);this.AkI(C1,A.
_GetAutoObject(C.AnU),null,A._GetAutoObject(C.AnU),A._GetAutoObject(C.AnU),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N9;this.H(Rp);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsB={_Init:function(){C.AU4._Init.call(this,0);this.ACP=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT7={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.AT7;this.H(AIg);this.CZ(0);this.AK.A1(0x3F);this.AK.H(AIg);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AU3={Sg:function(){var B;var Ao=(A.acl.Ae$.isPrototypeOf(B=A.acl.Ael.Sg.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=255;Ao.Cp.B3=0;return Ao;},Sf:function(
){var B;var Ao=(A.acl.Axj.isPrototypeOf(B=A.acl.Ael.Sf.call(this))?B:null);if(!Ao
)throw new Error(As7);Ao.E0.Cx=0;Ao.E0.B3=255;Ao.Ds=true;return Ao;},_Init:function(
aArg){A.acl.Ael._Init.call(this,aArg);this.__proto__=C.AU3;},_className:"Application::ShadeOverlayTransition"
};C.AnU={_Init:function(){C.AU3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkR={AnW:0,A2q:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iu.Ai.call(this,Ae);this.BU.L(this.V.AQ);if(!!this.Q){
var BDa=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BU.R((A.
_GetAutoObject(A.Device.Converter).Ak7(BDa)+CR)+A._GetAutoObject(A.acj.DU).Af4()
);else this.BU.R(A.aaR(A.acf.Akj));}},Kh:function(G){var B;var Bhm=(this.A2q===false
)&&(this.AM<=this.Gr);if(Bhm)this.Bx(this.AnW);this.A4W(this.AM,4);if(Bhm){this.
Bx(this.AM-this.Aj1);this.A2q=true;}C.Iu.Kh.call(this,G);},Kc:function(G){this.A4W(
this.AM,5);C.Iu.Kc.call(this,G);},Bx:function(E){this.A4W(E,4);E=(((E+((this.Aj1
/2)|0))/this.Aj1)|0)*this.Aj1;if(!E)this.A2q=false;C.Iu.Bx.call(this,E);},Ahr:function(
E){if(this.AnW===E)return;this.AnW=E;},A4W:function(Bxn,Gz){this.ATn(A._GetAutoObject(
A.acj.DU).BdV(Bxn,Gz));},_Init:function(aArg){C.Iu._Init.call(this,aArg);this.__proto__=
C.AkR;this.H(K2);this.AnW=this.Gr;this.J5(this.H8,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEA={None:0,Left:1,BE9:2,Right:3};C.Amv={Xv:
null,FC:null,Ek:null,Background:null,Anf:null,Gd:null,KR:A.jV,AEl:null,Init:function(
aArg){var B;A.zV([this,this.AaH],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A34],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LT],this);A.pe([this,this.A34],this);this.Ba(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DK(this);},Lr:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xv);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKU();},Age:function(G){var Aa=(C.ACl.isPrototypeOf(G)?G:null);var Hr;if(!!Aa)Hr=
Aa.Hr;else Hr=this.Gd.FO();if(Hr>=A._GetAutoObject(A.Device.Device).An.B8())return;
A._GetAutoObject(A.Device.Helper).GQ(Hr);A.pe([this,this.AaJ],this);},AKU:function(
){},AaH:function(G){this.Am();},A3V:function(G){if(this.Gd.FO()<(A._GetAutoObject(
A.Device.Device).An.B8()-1))this.Gd.GT(this.Gd.FO()+1);},A3W:function(G){if(this.
Gd.FO()>0)this.Gd.GT(this.Gd.FO()-1);},DK:function(G){var Gi=A._GetAutoObject(A.
Device.Device).An.B8();var M3=this.BQ;if(!M3)return;M3.C2(A.aaL(A.ach.Aez));M3.CF=[
this,this.AaJ];if(Gi<=0){M3.Ct(null);M3.C3(null);M3.Ce=null;M3.Ca=null;M3.WQ=false;
M3.ZG=false;}else if(Gi===1){M3.Ct(null);M3.C3(A.aaL(A.ach.AeA));M3.Ce=null;M3.Ca=[
this,this.Age];M3.WQ=false;M3.ZG=false;}else{M3.Ct(A.aaL(A.ach.Aq6));M3.C3(A.aaL(
A.ach.Arc));M3.Ce=[this,this.A3V];M3.Ca=[this,this.A3W];M3.WQ=true;M3.ZG=true;}}
,LT:function(G){this.BgI(this);this.Xv=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKU();},BnE:function(E){if(this.AEl===E)return;this.AEl=E;A.pe([this,this.BA8
],this);},BA8:function(G){this.BgI(this);},BgI:function(G){var B;if(!!this.FC)this.
HP(this.FC);this.FC=(C.EB.isPrototypeOf(B=A._NewObject(this.AEl,0))?B:null);if(!
!this.FC){this.FC.H(AYq);this.J(this.FC,0);}},A34:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4
))this.Gd.Dk(A.aaR(A.acf.ASk));else this.Gd.Dk(this.KR);},Dk:function(E){if(this.
KR===E)return;this.KR=E;A.pe([this,this.A34],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Anf={I:this},0);C.Gd._Init.call(
this.Gd={I:this},0);this.__proto__=C.Amv;this.H(Rp);this.Ek.H(BD);this.Ek.A_p(A.
jb.CU);this.Ek.A_q(A.jb.Text);this.Background.H(Fc);this.Background.L(A.jb.Bpi);
this.Anf.H(AIh);this.Anf.L(A.jb.CU);this.Gd.H(AIh);this.Gd.N8(C.ACl);this.AEl=C.
APJ;this.KR=A.aaR(A.acf.Av2);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Anf,0);this.J(this.Gd,0);this.Ek.AR=[this,this.Age];this.Ek.Ab4(A._NewObject(
C.YA,0));this.Gd.Zu(A._GetAutoObject(A.Device.Device).An);this.Gd.Zy([this,this.
Age]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Anf._Done();this.Gd._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Anf._ReInit();this.Gd._ReInit();this.Dk(A.aaR(A.acf.Av2
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xv)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACl={
AP:null,DS:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this
,Ae);this.DS.Df(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DS.EC(this.AX.AmU(
Ad,14));this.DS.AFh(this.AX.Ja(Ad,13));this.DS.Ae1(this.AX.H6(Ad,8));this.DS.Uu(
this.AX.H6(Ad,11));this.DS.Ae5(this.AX.H6(Ad,12));this.DS.Ae7(this.AX.CE(Ad,5));
this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACl;this.
H(Oi);this.AP.L(A.jb.Bb);this.DS.H(AYr);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.DS._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YA={Q:null,Init:function(aArg){var
B;this.ABa(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AEZ:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nw(FilterCriterion
);var Ai2=this.Akl();if(Ai2>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai2,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeX(false);},BwO:function(s){this.AEZ(
s);},ABa:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);if(!!FilterCriterion
)Filter.Nw(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG2:function(s){
this.ABa(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcT],E,0);if(!!E)A.pe([this,this.
AcT],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwK(-1);return;}var Azd=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DM(1,4))?B:null);if(!Azd){this.AW.AwK(0);this.AW.AeX(true);}else
this.AW.AwK(Azd.A6);},AcT:function(s){this.C4(s);},_Init:function(aArg){C.AjP._Init.
call(this,aArg);this.__proto__=C.YA;this.AW.AwK(0);this.AW.Dj=[this,this.BwO];this.
Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqH={BirthType:null,EaseOfDelivery:null,Cd:null,Ef:null,AbK:null,G6:null,Cn:
null,AbI:null,AM1:false,Init:function(aArg){this.AM1=A._GetAutoObject(A.Device.Helper
).W.Arf();if(this.AM1)this.AeW(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeW(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cd.
L4([this,this.AcR]);this.Cd.L7(A.aaL(A.ach.Afc));this.Cd.AR=[this,this.AcR];}this.
Ef.Ar2(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GG],this.Ef.
Q,0);A.zX([this,this.GG],this.Cd.Q,0);A.pe([this,this.GG],this);},Agf:function(G
){if(((this.Ef.Asl===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARm(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cr(
A._GetAutoObject(A.Device.Device).An);if(this.KO>0){if(this.AM1){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LY(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.Fl(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Cr(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYs,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KO);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cr(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A5).Fz();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A5).Fz();},Aul:function(
){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.Am1));this.N.Ca=[this,this.Ay3];},AAF:function(
G){A._GetAutoObject(C.A5).Cb(32);},GG:function(G){var F;var Js=(F=this.Ef.Q,F[1].
call(F[0]));var ABy=(F=this.Cd.Q,F[1].call(F[0]));var A4R=true;if(!!Js&&(ABy===Js
))A4R=false;A._GetAutoObject(A.Device.Helper).J6(this.Cd,A4R);this.Ef.BmE(!A4R);
},_Init:function(aArg){C.H2._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AvY._Init.
call(this.Cd={I:this},0);C.Rb._Init.call(this.Ef={I:this},0);C.Aco._Init.call(this.
AbK={I:this},0);C.BX._Init.call(this.G6={I:this},0);C.SW._Init.call(this.Cn={I:this
},0);C.BX._Init.call(this.AbI={I:this},0);this.__proto__=C.AqH;var B;this.Cd.H(AhX
);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak2));this.Cd.ArM(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.Asw));this.Cd.ArN(A.aaR(A.acf.Akj));this.Ef.H(AhX);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uj));this.AbK.H(AYt);this.AbK.Aj(true);this.
AbK.T(A.aaR(A.acf.GM));this.G6.H(AhX);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arr
));this.Cn.H(AhX);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aee));this.Cn.AFR(true);
this.AbI.H(AhX);this.AbI.Aj(true);this.AbI.T(A.aaR(A.acf.AgH));this.J(this.Cd,-1
);this.J(this.Ef,-1);this.J(this.AbK,-1);this.J(this.G6,-1);this.J(this.Cn,-1);this.
J(this.AbI,-1);this.BirthType.L5(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L5(A._GetAutoObject(A.Device.Helper).W);this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArB,B.PY]);this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Ans,B.Nr]);this.AbK.Gs([this,this.D_,this.GS]);this.AbK.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.SO]);this.G6.Au([B=this.BirthType,
B.B$,B.Cc]);this.G6.CK(this.BirthType);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.
L4([B=this.Cn,B.FW]);this.Cn.L7(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(
A.Device.Helper).W,B.Av$,B.Q6]);this.AbI.Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.
AbI.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H2;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cd._Done();this.Ef._Done(
);this.AbK._Done();this.G6._Done();this.Cn._Done();this.AbI._Done();C.H2._Done.call(
this);},_ReInit:function(){C.H2._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cd._ReInit();this.Ef._ReInit();this.AbK._ReInit();
this.G6._ReInit();this.Cn._ReInit();this.AbI._ReInit();this.Cd.T(A.aaR(A.acf.Ak2
));this.Cd.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asw));this.
Cd.ArN(A.aaR(A.acf.Akj));this.Ef.T(A.aaR(A.acf.Uj));this.AbK.T(A.aaR(A.acf.GM));
this.G6.T(A.aaR(A.acf.Arr));this.Cn.T(A.aaR(A.acf.Aee));this.AbI.T(A.aaR(A.acf.AgH
));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aco={FN:null,AW:null,A8:0,H0:function(G){C.Dr.H0.call(this,G);if(!this.A8)this.
FW(this);else this.Hd(this);},Ai:function(Ae){C.Dr.Ai.call(this,Ae);this.Hx.Z(false
);this.H8.Z(false);if(this.A8===1){this.Ba(this.AW);if(this.Hl){this.AW.FP(A.jb.
CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.AW.FP(A.jb.CJ);
else this.AW.FP(A.jb.CU);this.Ba(null);}},Bx:function(E){var F;var BP=this.AM;C.
Dr.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uk,this.Bby],0);},DK:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkN((F=
this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hd:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.
A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SU(7);this.DK(this);this.Am();},_Init:function(aArg){C.Dr._Init.call(this,aArg);
C.ARg._Init.call(this.AW={I:this},0);this.__proto__=C.Aco;this.H(Aah);this.EV(999999
);this.V.R(Atb);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H8.Z(false);this.AW.H(AYu
);this.AW.ATv(6);this.J(this.AW,0);this.AW.Au([this,this.Uk,this.Bby]);this.FN=A.
_NewObject(C.Aet,0);},_Done:function(){this.__proto__=C.Dr;this.AW._Done();C.Dr.
_Done.call(this);},_ReInit:function(){C.Dr._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dr._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dt:function(){return 4;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuK={Y:null,QS:null,N4:null,Ee:null,PL:null,PH:null,PJ:null,Ay:null,Ge:null,
ReasonOfLeaving:null,Ahy:null,Nc:0,AmJ:false,ACp:true,AOx:false,Asg:false,Init:function(
aArg){A.zX([this,this.A9U],[this,this.A9k,this.ATy],0);this.Aho(A._GetAutoObject(
A.Device.Helper).W.AhR(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9U],this);},DF:function(G){
var B;var Ff=0;var X=this.AV;switch(this.Cq.CO){case 6:Ff=2;break;case 7:Ff=7;break;
case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x414);if(!!X)this.
Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al1:function(G
){A._GetAutoObject(C.A5).Fz();},ApI:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B2.Cr(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmJ){A._GetAutoObject(A.Device.Helper).W.Ae3(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7i(A._GetAutoObject(A.Device.Helper).Du(),this.Asg);}A._GetAutoObject(A.Device.
Helper).W.AFQ(this.ReasonOfLeaving.C6((F=this.N4.Q,F[1].call(F[0]))));if(this.ACp
)A._GetAutoObject(A.Device.Helper).W.PY(0);if(this.Asg)A._GetAutoObject(A.Device.
Helper).W.AwM(true);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.
Device).An);this.A$Q();},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Aho:function(E){
if(this.Nc===E)return;this.Nc=E;},Anp:function(){return this.Nc;},BfJ:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A5).Fz();A._GetAutoObject(A.Device.Helper
).Asr();}},A9U:function(G){switch(this.Asg){case false:this.Ee.T(A.aaR(A.acf.AV4
));break;case true:this.Ee.T(A.aaR(A.acf.Bri));break;default:;}},ATy:function(E){
if(this.Asg===E)return;this.Asg=E;},A9k:function(){return this.Asg;},A$Q:function(
){A._GetAutoObject(A.Device.Device).AZ(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfJ]);},Bm4:function(E){if(this.AOx===E)return;
this.AOx=E;},Blp:function(){return this.AOx;},Bmu:function(E){if(this.ACp===E)return;
this.ACp=E;},Ble:function(){return this.ACp;},BmC:function(E){if(this.AmJ===E)return;
this.AmJ=E;},Bll:function(){return this.AmJ;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afn._Init.call(this.QS={I:this
},0);C.AsA._Init.call(this.N4={I:this},0);C.AkR._Init.call(this.Ee={I:this},0);C.
Afn._Init.call(this.PL={I:this},0);C.Afn._Init.call(this.PH={I:this},0);C.Afn._Init.
call(this.PJ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ge._Init.call(this.
Ge={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahy._Init.call(this.Ahy={I:this},0);this.__proto__=C.AuK;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Dq(C.IP);this.Y.H(Fc);this.Y.JZ(1);this.QS.H(
Aaj);this.QS.Aj(true);this.QS.T(A.aaR(A.acf.AmJ));this.QS.Bh(true);this.QS.ZB(false
);this.QS.Gb(-1);this.QS.EV(1);this.N4.H(U2);this.N4.Aj(true);this.N4.T(A.aaR(A.
acf.ReasonOfLeaving));this.N4.Bh(true);this.N4.ZB(false);this.Ee.H(AhW);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AV4));this.Ee.Bh(false);this.Ee.Gb(1000);this.Ee.
EV(999000);this.PL.H(U2);this.PL.Aj(true);this.PL.T(A.aaR(A.acf.A5s));this.PL.Bh(
true);this.PL.ZB(false);this.PL.Bx(1);this.PL.Gb(-1);this.PL.EV(1);this.PH.H(Aaj
);this.PH.Aj(true);this.PH.T(A.aaR(A.acf.A5t));this.PH.Bh(true);this.PH.ZB(false
);this.PH.Bx(1);this.PH.Gb(-1);this.PH.EV(1);this.PJ.H(U2);this.PJ.Aj(true);this.
PJ.T(A.aaR(A.acf.A55));this.PJ.Bh(true);this.PJ.ZB(false);this.PJ.Bx(1);this.PJ.
Gb(-1);this.PJ.EV(1);this.Ay.H(Ayp);this.Ge.Au(0);this.J(this.Y,0);this.J(this.QS
,0);this.J(this.N4,0);this.J(this.Ee,0);this.J(this.PL,0);this.J(this.PH,0);this.
J(this.PJ,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fh
];this.QS.Au([B=this.Ge,B.B$,B.Cc]);this.QS.CK(this.Ge);this.QS.Aky([this,this.Bll
,this.BmC]);this.N4.Gs([this,this.D_,this.GS]);this.N4.L4([B=this.N4,B.FW]);this.
N4.L7(A.aaL(A.ach.Edit));this.N4.Au([B=this.ReasonOfLeaving,B.B$,B.Cc]);this.N4.
CK(this.ReasonOfLeaving);this.N4.Anx(this.Ahy);this.Ee.Au([this,this.Anp,this.Aho
]);this.PL.Au([B=this.Ge,B.B$,B.Cc]);this.PL.CK(this.Ge);this.PL.Aky([this,this.
Blp,this.Bm4]);this.PH.Au([B=this.Ge,B.B$,B.Cc]);this.PH.CK(this.Ge);this.PH.Aky([
this,this.A9k,this.ATy]);this.PJ.Au([B=this.Ge,B.B$,B.Cc]);this.PJ.CK(this.Ge);this.
PJ.Aky([this,this.Ble,this.Bmu]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QS._Done();this.N4._Done();this.Ee._Done();this.PL._Done(
);this.PH._Done();this.PJ._Done();this.Ay._Done();this.Ge._Done();this.ReasonOfLeaving.
_Done();this.Ahy._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QS._ReInit();this.N4._ReInit();this.Ee._ReInit(
);this.PL._ReInit();this.PH._ReInit();this.PJ._ReInit();this.Ay._ReInit();this.Ge.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahy._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QS.T(A.aaR(A.acf.AmJ));this.N4.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AV4));this.PL.T(A.aaR(A.acf.A5s));this.PH.T(A.aaR(A.acf.A5t
));this.PJ.T(A.aaR(A.acf.A55));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahy)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AU2={AjI:null,PA:null,Au8:AYv,Bl:function(aSize){C.Iu.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BU.H([0,40,aSize[0],80]);this.Hx.H([0,this.BU.M[1],40,
this.BU.M[3]]);this.H8.H([aSize[0]-40,this.BU.M[1],aSize[0],this.BU.M[3]]);},Ai:
function(Ae){var F;C.Iu.Ai.call(this,Ae);this.PA.L(this.V.AQ);if(!!this.AjI){if((
F=this.AjI,F[1].call(F[0]))===-1)this.PA.R(this.Au8+AIi);else this.PA.R((this.Au8+
CR)+(F=this.AjI,F[1].call(F[0])).toFixed());}else this.PA.R(this.Au8);},A3D:function(
G){this.Am();},BmM:function(E){if(A.aaZ(this.AjI,E))return;if(!!this.AjI)A.z$([this
,this.A3D],this.AjI,0);this.AjI=E;if(!!E)A.zX([this,this.A3D],E,0);if(!!E)A.pe([
this,this.A3D],this);},A_m:function(E){if(this.Au8===E)return;this.Au8=E;this.Am(
);},_Init:function(aArg){C.Iu._Init.call(this,aArg);C.CG._Init.call(this.PA={I:this
},0);this.__proto__=C.AU2;this.H(AYw);this.V.H(AYx);this.V.A4(0x12);this.PA.H(AYy
);this.PA.A4(0x12);this.PA.L(A.jb.Bm);this.J(this.PA,0);this.PA.S(A.aaL(A.fl.Af)
);this.PA.AY(A.aaL(A.fl.Ak));this.PA.Cl(null);},_Done:function(){this.__proto__=
C.Iu;this.PA._Done();C.Iu._Done.call(this);},_ReInit:function(){C.Iu._ReInit.call(
this);this.PA._ReInit();this.PA.S(A.aaL(A.fl.Af));this.PA.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iu._Mark.call(this,D);if((B=this.AjI)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMi={Y:null,JU:null,Sw:null,Ay:null,Aqv:2500,ANy:24,DF:function(G){var B;var
Ff=0;var X=this.AV;switch(this.Cq.CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:
Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al1:function(G){A._GetAutoObject(
C.A5).Fz();},ApI:function(G){},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1)
)[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Bmx:function(
E){if(this.Aqv===E)return;this.Aqv=E;},Blg:function(){return this.Aqv;},Bmy:function(
E){if(this.ANy===E)return;this.ANy=E;},Blh:function(){return this.ANy;},Bk6:function(
G){var F,Cu;this.JU.BU.L(this.JU.V.AQ);if(!!this.JU.Q)this.JU.BU.R((((String.fromCharCode(((
F=this.JU.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ak_)+String.fromCharCode(((
Cu=this.JU.Q,Cu[1].call(Cu[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JU.
AHg);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iu._Init.call(this.JU={I:this},0);C.Iu._Init.call(this.Sw={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMi;this.N.Z(true);this.
Dq(C.IP);this.Y.H(Fc);this.Y.JZ(1);this.JU.H(AhW);this.JU.Aj(true);this.JU.T(A.aaR(
A.acf.Aqv));this.JU.Bh(false);this.JU.Gb(0);this.JU.EV(5000);this.JU.IW(A.aaR(A.
acf.Af7));this.JU.Jg(A.aaR(A.acf.Af7));this.JU.ATn(100);this.Sw.H(U2);this.Sw.Aj(
true);this.Sw.T(A.aaR(A.acf.A$p));this.Sw.Bh(true);this.Sw.Bx(24);this.Sw.Gb(10);
this.Sw.EV(33);this.Sw.IW(AYz);this.Ay.H(Ayp);this.J(this.Y,0);this.J(this.JU,0);
this.J(this.Sw,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.YF));this.Y.Em=[this,this.
Fh];this.JU.Au([this,this.Blg,this.Bmx]);this.JU.A_W([this,this.Bk6]);this.Sw.Au([
this,this.Blh,this.Bmy]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JU._Done();this.Sw._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JU._ReInit();this.Sw._ReInit();this.
Ay._ReInit();this.JU.T(A.aaR(A.acf.Aqv));this.JU.IW(A.aaR(A.acf.Af7));this.JU.Jg(
A.aaR(A.acf.Af7));this.Sw.T(A.aaR(A.acf.A$p));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Art={EaseOfDelivery:null,BirthType:null,Cd:null,Do:null,Di:null,Cn:null,Ee:null
,G6:null,Lm:null,Nc:0,L0:false,Init:function(aArg){A.zX([this,this.GG],this.Cd.Q
,0);A.zX([this,this.GG],this.Do.Q,0);A.zX([this,this.AAL],this.Da.Q,0);A.zX([this
,this.Bfg],this.Cn.Dl,0);A.zX([this,this.Bfa],this.C_.Q,0);A.zX([this,this.At6],
this.Cd.Q,0);A.zX([this,this.At6],this.Do.Q,0);A.pe([this,this.AAL],this);A.pe([
this,this.GG],this);A.pe([this,this.Bfg],this);A.pe([this,this.Bfa],this);A.pe([
this,this.At6],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.FD();A.
_GetAutoObject(C.A5).Fz();},Agf:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhD
){var AlM=A._GetAutoObject(A.Device.Helper).AhD.AOV();A._GetAutoObject(A.Device.
Helper).W.Ab5(AlM);A._GetAutoObject(A.Device.Helper).W.AnC(AlM);}var Als=A._GetAutoObject(
A.Device.Helper).A1W(A._GetAutoObject(A.Device.Helper).W,(F=this.Di.H3.Ht,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Als){this.AiY();A.pe([this,this.
Bxa],this);}else A._GetAutoObject(A.Device.Helper).AKn(A._GetAutoObject(A.Device.
Helper).W,Als,(F=this.Di.H3.Ht,F[1].call(F[0])),0,[this,this.ApD]);},Aul:function(
){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.AD0));this.N.Ca=[this,this.Ay3];},AiY:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device
).An);var Mc=A._GetAutoObject(A.Device.Device).An.LY(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SV(Mc);var Bd$=false;if(A._GetAutoObject(
A.Device.Helper).Am4()){if(A._GetAutoObject(A.Device.Device).Bt.Ll()){Bd$=true;A.
_GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.
HK().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cr(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7J()&&(Bd$===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.Cr(A._GetAutoObject(A.Device.Device).Bt);}}var I3=null;switch((F=this.
Di.H3.Ht,F[1].call(F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awc,
B.AyV];break;case 2:I3=[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyW];break;case
4:case 5:I3=[B=A._GetAutoObject(A.Device.Device),B.Anr,B.Aov];break;default:;}if(
!!I3)switch((F=this.Di.Kq.VY,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Bak(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Do.Q,F[1].call(F[0])),this.Do.AjK(),this.Do.AjM());},Ap1:function(G){A.
_GetAutoObject(C.A5).Fz();},Bxa:function(s){this.Ap1(s);},AAF:function(G){A._GetAutoObject(
C.A5).Cb(49);},Aho:function(E){if(this.Nc===E)return;this.Nc=E;A.abo([this,this.
Anp,this.Aho],0);},GG:function(G){if(A._GetAutoObject(A.Device.Helper).Am4())this.
C_.Z(true);else this.C_.Z(false);if(A._GetAutoObject(A.Device.Helper).A7J())this.
Ee.Z(true);else this.Ee.Z(false);if(this.L0){this.Do.Z(false);this.Cd.T(A.aaR(A.
acf.ACR));this.Cd.AFf(A.aaL(A.ach.Afc));}else{this.Do.Z(true);this.Cd.T(A.aaR(A.
acf.Ak2));this.Cd.AFf(null);}},AAL:function(G){A._GetAutoObject(A.Device.Helper).
AVM(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.L0);},Bfg:function(G){A.pe([this,this.Bhb],this);},Bfa:function(G){A.pe([this
,this.Bhb],this);},Bhb:function(G){var F,Cu,Th;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahr(A._GetAutoObject(A.Device.Helper
).AhR(A._GetAutoObject(A.Device.Helper).Abt((F=this.B0.Q,F[1].call(F[0]))),(Cu=this.
Cn.Dl,Cu[1].call(Cu[0])),2,(Th=this.B0.Q,Th[1].call(Th[0]))));break;case 2:this.
Ee.Ahr(A._GetAutoObject(A.Device.Helper).AhR(this.KO,(F=this.Cn.Dl,F[1].call(F[0
])),2,(Cu=this.B0.Q,Cu[1].call(Cu[0]))));break;default:;}},ApD:function(G){var F;
var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id
){case 22:case 21:switch((F=this.Di.H3.Ht,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JN(this.Di);break;case 0:this.JN(this.Do);break;case 1:this.JN(this.
Cd);break;default:throw new Error(AyA+(F=this.Di.H3.Ht,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JN(this.Di);this.JN(this.Do);}break;case 25:case 42:{this.
JN(this.Di);this.JN(this.Cd);}break;case 41:break;default:A.ab5("%s%e",As$,Ar.Id
);}},ApE:function(G){var F;C.H2.ApE.call(this,G);var AoS=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:AoS=A._GetAutoObject(A.Device.Device).AdR;break;case
1:AoS=730;break;default:A.ab5("%s%e",Alc,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Cn.Dl,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Du()-A._GetAutoObject(A.Device.
Helper).AmH(AoS)));(F=this.C_.Q,F[2].call(F[0],this.C_.AnW));this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhR(1));},Ae2:function(E){if(this.L0===E)return;this.L0=E;A.abo([
this,this.Awf,this.Ae2],0);},At6:function(G){var F,Cu,Th;this.Ae2(((F=this.Cd.Q,
F[1].call(F[0]))===(Cu=this.Do.Q,Cu[1].call(Cu[0])))&&!!(Th=this.Cd.Q,Th[1].call(
Th[0])));A.pe([this,this.GG],this);},Anp:function(){return this.Nc;},Awf:function(
){return this.L0;},_Init:function(aArg){C.H2._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AvY._Init.call(this.Cd={I:this},0);C.Rb._Init.call(this.Do={I:this}
,0);C.AGP._Init.call(this.Di={I:this},0);C.SW._Init.call(this.Cn={I:this},0);C.AkR.
_Init.call(this.Ee={I:this},0);C.BX._Init.call(this.G6={I:this},0);C.BX._Init.call(
this.Lm={I:this},0);this.__proto__=C.Art;var B;this.Dq(C.ADs);this.CH.H(AcP);this.
Cd.H(Aoi);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak2));this.Cd.ArM(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asw));this.Cd.ArN(A.aaR(A.acf.Akj));this.
Do.H(Aoi);this.Do.Aj(true);this.Do.T(A.aaR(A.acf.Uj));this.Do.Ar2(false);this.Di.
H(AYA);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.GM));this.Di.Bx(0);this.Cn.H(AcP);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aee));this.Cn.AFR(true);this.Ee.H(AcP);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(999000);this.
G6.H(AcP);this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arr));this.Lm.H(AcP);this.Lm.Aj(
true);this.Lm.T(A.aaR(A.acf.AgH));this.J(this.Cd,-3);this.J(this.Do,-3);this.J(this.
Di,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G6,-1);this.J(this.Lm,-
1);this.EaseOfDelivery.L5(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L5(
A._GetAutoObject(A.Device.Helper).W);this.Cd.AR=[this,this.AcR];this.Cd.L4([this
,this.AcR]);this.Cd.L7(A.aaL(A.ach.Afc));this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArB,B.PY]);this.Cd.OS([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5
]);this.Cd.PW([B=A._GetAutoObject(A.Device.Device),B.Un,B.U6]);this.Cd.Uq([B=A._GetAutoObject(
A.Device.Device),B.Ano,B.Aou]);this.Cd.Ae2([this,this.Awf,this.Ae2]);this.Do.Gs([
this,this.D_,this.GS]);this.Do.L4([this,this.AcR]);this.Do.L7(A.aaL(A.ach.Afc));
this.Do.Us([B=this.Gender.Animal,B.WE,B.J0]);this.Do.OS([B=A._GetAutoObject(A.Device.
Device),B.Ul,B.U5]);this.Do.PW([B=A._GetAutoObject(A.Device.Device),B.Un,B.U6]);
this.Do.Uq([B=A._GetAutoObject(A.Device.Device),B.Ano,B.Aou]);this.Do.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Ans,B.Nr]);this.Do.Anu([B=this.AnimalType.Animal,B.PV,B.EC]
);this.Di.Gs([this,this.D_,this.GS]);this.Di.L4([B=this.Di,B.FW]);this.Di.L7(A.aaL(
A.ach.Edit));this.Di.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.SO]);this.
Di.A9X(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gs([this,this.D_,this.GS]);this.
Cn.L4([B=this.Cn,B.FW]);this.Cn.L7(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(
A.Device.Helper).W,B.Av$,B.Q6]);this.Ee.Au([this,this.Anp,this.Aho]);this.G6.Au([
B=this.BirthType,B.B$,B.Cc]);this.G6.CK(this.BirthType);this.Lm.Au([B=this.EaseOfDelivery
,B.B$,B.Cc]);this.Lm.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H2;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cd._Done(
);this.Do._Done();this.Di._Done();this.Cn._Done();this.Ee._Done();this.G6._Done(
);this.Lm._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cd._ReInit();this.
Do._ReInit();this.Di._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G6._ReInit(
);this.Lm._ReInit();this.Cd.T(A.aaR(A.acf.Ak2));this.Cd.ArM(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asw));this.Cd.ArN(A.aaR(A.acf.Akj));this.Do.T(
A.aaR(A.acf.Uj));this.Di.T(A.aaR(A.acf.GM));this.Cn.T(A.aaR(A.acf.Aee));this.Ee.
T(A.aaR(A.acf.Nc));this.G6.T(A.aaR(A.acf.Arr));this.Lm.T(A.aaR(A.acf.AgH));},_Mark:
function(D){var B;C.H2._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHo={H$:null,AhI:null,AgS:null,AhJ:null,AgT:null,AnimalType:null,Background:
null,N5:null,Rl:null,V:null,TX:null,YI:null,AbE:null,PU:null,DL:A.jV,AGR:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An6();this.
AxU();},An6:function(){var F,Cu;var LJ=0;var Amf=0;var AlF=0;var Ig=0;if((((!!this.
AhI&&!!this.AhJ)&&!!this.AgS)&&!!this.AgT)&&!!this.AnimalType){Amf=(F=this.AhI,F[
1].call(F[0]));AlF=(F=this.AgS,F[1].call(F[0]));LJ=A._GetAutoObject(A.Device.Helper
).Me((F=this.AhJ,F[1].call(F[0])),(Cu=this.AgT,Cu[1].call(Cu[0])));Ig=(F=this.AnimalType
,F[1].call(F[0]));}var La=A.jb.Text;var Azl=A.jb.CU;if(!!LJ){var ALC=A._GetAutoObject(
A.acj.DU).Alz(LJ,Amf,AlF);Azl=A._GetAutoObject(A.acj.DU).Az0(ALC,Ig);La=A._GetAutoObject(
A.acj.DU).Az2(ALC,Ig);}this.Background.L(Azl);this.TX.L(La);this.Rl.L(La);this.N5.
L(La);this.AbE.L(La);if(La===A.jb.Bm)this.YI.L(La);else this.YI.L(A.jb.CJ);this.
V.L(La);this.PU.L(La);},AxU:function(){var F,Cu;var LJ=0;var Amf=0;var AlF=0;if(((
!!this.AhI&&!!this.AhJ)&&!!this.AgS)&&!!this.AgT){Amf=(F=this.AhI,F[1].call(F[0]
));AlF=(F=this.AgS,F[1].call(F[0]));LJ=A._GetAutoObject(A.Device.Helper).Me((F=this.
AhJ,F[1].call(F[0])),(Cu=this.AgT,Cu[1].call(Cu[0])));}if(!!LJ){var ALC=A._GetAutoObject(
A.acj.DU).Alz(LJ,Amf,AlF);this.Rl.R(A._GetAutoObject(A.Device.Converter).Td(ALC,
2,true));this.N5.Z(true);this.Rl.Z(true);this.PU.Z(false);}else{this.N5.Z(false);
this.Rl.Z(false);this.PU.Z(true);}this.TX.R(this.BzL(AlF-Amf,LJ));this.AbE.Z(this.
AGR);this.YI.Z(this.AGR);this.N5.R(A._GetAutoObject(A.acj.DU).Aay());},BzL:function(
A1B,Ah4){var B;if(Ah4<0){A.ab5("%s",AYB);return A.jV;}var Iy=(AYC+A._GetAutoObject(
A.acj.DU).Af4())+CR;var FX=A._GetAutoObject(A.Device.Converter).Ak7(A1B);if(!A1B
)FX=A.abU(FX,AYD,0);else if(A1B>0)FX=A.abU(FX,AIj,0);Iy=this.Bgq(Iy,AYE,FX);if(Ah4===
1)Iy=Iy+A.aaR(A.acf.BjY);else{Iy=Iy+A.aaR(A.acf.BjZ);Iy=this.Bgq(Iy,AYF,Ah4.toFixed(
));}return Iy;},Bgq:function(aString,BcE,Bx_){if(aString===A.jV){A.ab5("%s",AYG);
return A.jV;}var A3k=aString.indexOf(BcE,0);if(A3k>=0){aString=A.ab1(aString,A3k
,BcE.length);aString=A.abU(aString,Bx_,A3k);}return aString;},ATO:function(E){if(
A.aaZ(this.AhI,E))return;if(!!this.AhI)A.z$([this,this.C4],this.AhI,0);this.AhI=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},BmJ:function(
E){if(A.aaZ(this.AgS,E))return;if(!!this.AgS)A.z$([this,this.C4],this.AgS,0);this.
AgS=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},ATP:function(
E){if(A.aaZ(this.AhJ,E))return;if(!!this.AhJ)A.z$([this,this.C4],this.AhJ,0);this.
AhJ=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},BmK:function(
E){if(A.aaZ(this.AgT,E))return;if(!!this.AgT)A.z$([this,this.C4],this.AgT,0);this.
AgT=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(
G){this.Am();},T:function(E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A_V:function(
E){if(this.AGR===E)return;this.AGR=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C4],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N5={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TX={I:this},0);A.acg.
Ap._Init.call(this.YI={I:this},0);A.acg.Ap._Init.call(this.AbE={I:this},0);C.CG.
_Init.call(this.PU={I:this},0);this.__proto__=C.AHo;this.H(AfE);this.Background.
A1(0x3F);this.Background.H(AfE);this.N5.H(AYH);this.N5.R(A._GetAutoObject(A.acj.
DU).Aay());this.N5.A4(0x9);this.N5.L(A.jb.Text);this.Rl.H(AYI);this.Rl.A4(0x14);
this.Rl.R(A.aaR(A.acu.Akh));this.Rl.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYJ);this.
V.R(A.aaR(A.acf.AuA));this.V.A4(0x12);this.V.L(A.jb.Text);this.TX.H(Aai);this.YI.
A1(0x14);this.YI.H(AIk);this.YI.Cw(1);this.AbE.A1(0x14);this.AbE.H(AIk);this.AbE.
Cw(0);this.PU.H(AYK);this.PU.R(A.aaR(A.acf.A4$));this.J(this.Background,0);this.
J(this.N5,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TX,0);this.J(this.YI
,0);this.J(this.AbE,0);this.J(this.PU,0);this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.
aaL(A.fl.Af));this.N5.Cl(A.aaL(A.fl.HJ));this.Rl.S(A.aaL(A.fl.Aes));this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(A.aaL(A.fl.Bg));this.TX.S(A.aaL(A.
fl.Af));this.TX.AY(A.aaL(A.fl.Ak));this.TX.Cl(A.aaL(A.fl.Bg));this.YI.Ax(A.aaL(A.
ach.AB0));this.AbE.Ax(A.aaL(A.ach.AB0));this.H$=A._NewObject(A.Device.Rating,0);
this.PU.S(A.aaL(A.fl.Af));this.PU.AY(A.aaL(A.fl.Ak));this.PU.Cl(A.aaL(A.fl.Bg));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N5._Done(
);this.Rl._Done();this.V._Done();this.TX._Done();this.YI._Done();this.AbE._Done(
);this.PU._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N5._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TX._ReInit();this.YI._ReInit();this.AbE._ReInit();this.PU._ReInit(
);this.Rl.R(A.aaR(A.acu.Akh));this.V.R(A.aaR(A.acf.AuA));this.PU.R(A.aaR(A.acf.A4$
));this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.aaL(A.fl.Af));this.N5.Cl(A.aaL(A.fl.HJ
));this.Rl.S(A.aaL(A.fl.Aes));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));
this.V.Cl(A.aaL(A.fl.Bg));this.TX.S(A.aaL(A.fl.Af));this.TX.AY(A.aaL(A.fl.Ak));this.
TX.Cl(A.aaL(A.fl.Bg));this.PU.S(A.aaL(A.fl.Af));this.PU.AY(A.aaL(A.fl.Ak));this.
PU.Cl(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhI)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgT)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AV5={Animal:null,Rating:null,Cq:null,AD:null,A0:
0,Hm:function(G){var B;if(!this.Animal||!this.Rating)return;var Gh=this.AD.G5;var
CA=(C.AHo.isPrototypeOf(B=this.AD.Ci)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PV,B.EC]);CA.BmJ([B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI2]);CA.BmK([B=
this.Rating,B.A9B,B.OnSetTimestamp]);switch(Gh%this.A0){case 1:{CA.ATO([B=this.Animal
,B.A9a,B.AFx]);CA.ATP([B=this.Animal,B.A9C,B.AF1]);CA.T(A.aaR(A.acf.AuA));}break;
default:if(this.Animal.Arf()){CA.ATO([B=this.Animal,B.ASG,B.AwH]);CA.ATP([B=this.
Animal,B.ASX,B.Aw9]);CA.T(A.aaR(A.acf.AL0));}else{CA.ATO([B=this.Animal,B.ASG,B.
AwH]);CA.ATP([B=this.Animal,B.ASX,B.Aw9]);CA.T(A.aaR(A.acf.Bht));}}if(this.A0>1)
CA.A_V(true);else CA.A_V(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GN
]));},DF:function(G){if(this.A0>0)switch(this.Cq.CO){case 6:this.CF(this);break;
case 7:this.Ca(this);break;default:this.Cq.Mx=true;}},L5:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JC(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JC(1);else{this.JC(2);this.AD.GT(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.A0>0)this.AD.AbH(0,this.A0-1);},Akz:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.A0>0)this.AD.AbH(0,this.A0-1);
},CF:function(G){if(this.AD.Gt>0)this.AD.GT(this.AD.Gt-1);else this.AD.GT(this.A0-
1);this.AD.HI(this.AD.Gt,true,null,null);},Ca:function(G){if(this.AD.Gt<(this.A0-
1))this.AD.GT(this.AD.Gt+1);else this.AD.GT(0);this.AD.HI(this.AD.Gt,true,null,null
);},JC:function(E){if(this.A0===E)return;this.A0=E;this.AD.JC(this.A0);A.abo([this
,this.Ary,this.JC],0);},Ary:function(){return this.A0;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CL._Init.
call(this.AD={I:this},0);this.__proto__=C.AV5;this.H(AfE);this.Cq.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfE);this.AD.N8(C.AHo);this.AD.Ae6(160);this.AD.GT(0);this.
AD.JC(2);this.J(this.AD,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,this.DF];this.
AD.Hm=[this,this.Hm];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((
Ae&0x20)===0x20);var GD=this.Bo.Bw;var FT=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FT=
A.jb.CU;GY=A.jb.Text;}if(!He){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else
if(GD){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GY);}this.LM=He;
this.KL=Fu;this.Qv=GD;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K2);this.V.H(BD);this.ZB(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeR={KP:null,GJ:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KP.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KP.
L(this.V.AQ);},Init:function(aArg){},Ab4:function(E){if(this.GJ===E)return;this.
GJ=E;this.KP.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KP={I:this},0);this.__proto__=C.AeR;this.H(K2);this.Background.H(K2);this.V.
H(AcL);this.V.R(JE);this.KP.H(I1);this.KP.R(AYL);this.J(this.KP,0);this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(null);this.KP.S(A.aaL(A.fl.Af));this.
KP.AY(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KP._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.KP.S(A.aaL(
A.fl.Af));this.KP.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AvY={ACt:null,Q:null,A3:null,AF:null,In:null,L0:null,Ap:null,EM:null,AOa:A.jV
,AOb:A.jV,Bl:function(aSize){C.AeR.Bl.call(this,aSize);if(!this.ACt)this.KP.H([].
concat(0,this.KP.M.slice(1,4)));else this.KP.H([].concat(this.Ap.M[2],this.KP.M.
slice(1,4)));},Ai:function(Ae){var F,Cu,Th;C.AeR.Ai.call(this,Ae);var Bc9=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apd)this.Ab4(this.AOa);else
this.Ab4(this.AOb);}else{this.Ab4(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.In&&!!this.A3)&&!!this.AF)&&!!this.L0)&&(((F=this.
In,F[1].call(F[0]))===1)||(!(Cu=this.In,Cu[1].call(Cu[0]))&&(Th=this.L0,Th[1].call(
Th[0])))))Bc9=true;}}this.EM.Z(Bc9);this.Ap.L(this.V.AQ);A.pe([this,this.Aga],this
);},C4:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},AFf:function(E){if(this.ACt===E)return;this.ACt=E;this.
Ap.Ax(E);this.Bj5();},OS:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaI],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)A.pe([
this,this.AaI],this);},PW:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaK],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaK],E,0);if(!!E)
A.pe([this,this.AaK],this);},AaK:function(G){this.Am();},AaI:function(G){this.Am(
);},Uq:function(E){if(A.aaZ(this.In,E))return;if(!!this.In)A.z$([this,this.AlZ],
this.In,0);this.In=E;if(!!E)A.zX([this,this.AlZ],E,0);if(!!E)A.pe([this,this.AlZ
],this);},AlZ:function(G){this.Am();},Aga:function(G){var F,Cu;if((!this.In||!this.
A3)||!this.AF)return;var A23=this.KP.Aff([(this.KP.String.length-(F=this.AF,F[1].
call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4m=this.KP.Aff([this.KP.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABr=this.KP.Dc(0x0);this.EM.H([A23[0]-
1,ABr[1],A4m[0]+1,ABr[3]]);},ArM:function(E){if(this.AOa===E)return;this.AOa=E;this.
Am();},ArN:function(E){if(this.AOb===E)return;this.AOb=E;this.Am();},Ae2:function(
E){if(A.aaZ(this.L0,E))return;if(!!this.L0)A.z$([this,this.A3K],this.L0,0);this.
L0=E;if(!!E)A.zX([this,this.A3K],E,0);if(!!E)A.pe([this,this.A3K],this);},A3K:function(
G){this.Am();},_Init:function(aArg){C.AeR._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.AvY;
this.Ap.H(AhT);this.EM.H(AYM);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KP.Q7([this,this.Aga]);},_Done:function(){this.__proto__=
C.AeR;this.Ap._Done();this.EM._Done();C.AeR._Done.call(this);},_ReInit:function(
){C.AeR._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeR._Mark.call(this,D);if((B=this.ACt)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Il:0,AaG:4,Bed:false,Bel:true,Bek:false,Bde:true,Bec:false
,Al4:function(G){C.Ra.Al4.call(this,G);if(A._GetAutoObject(A.Device.Helper).Beb(
)){this.Il=A._GetAutoObject(A.Device.Helper).UD.Id;var Aiw=A._GetAutoObject(A.Device.
Helper).ARp(this.Il);if(Aiw)A._GetAutoObject(A.Device.Device).AZ(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3O]);else{this.AaG=A._GetAutoObject(
A.Device.Helper).ARq(this.Il);var BeI=false;if((this.AaG===3)||(this.AaG===2))BeI=
A._GetAutoObject(A.Device.Helper).A7K(this.Il,A._GetAutoObject(A.Device.Helper).
W);if(BeI)A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Il),0,null);else switch(this.AaG){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).AxS(this.Il);A._GetAutoObject(A.Device.Device).AZ(46,true,BN.
toFixed(),0,[this,this.A3O]);}break;case 3:case 1:case 0:case 4:this.A4C();break;
default:throw new Error(AIl+this.AaG.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},AI3:function(s){this.Ew(s);},A4C:function(){if((this.AaG===3)||(this.
AaG===2)){if((this.Bde&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Il)){A._GetAutoObject(A.Device.Device).AZ(69,true
,A.jV,0,[this,this.A3O]);return;}else this.BCh();}if(this.Bed)A._GetAutoObject(A.
Device.Helper).Bo3(this.Il);A._GetAutoObject(A.Device.Helper).W.PY(this.Il);this.
Bec=true;this.BCj();this.Ew(this);},A3O:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4C();break;case 107:switch(Ar.PopupState){case 7:{this.Bed=true;this.A4C();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIm,Ar.Id);}},BCh:function(){A._GetAutoObject(A.
Device.Helper).W.Nr(this.Il);if(this.Bek&&(A._GetAutoObject(A.Device.Converter).
S8(this.Il)===10)){var BcT=Math.trunc((this.Il%1000000000000)/10000000000);if(!BcT&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((BcT===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCj:function(){if(this.Bel){A._GetAutoObject(
A.Device.Helper).W.SO(A._GetAutoObject(A.Device.Helper).A5r(A._GetAutoObject(A.Device.
Device).Ak1,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak1===1)A._GetAutoObject(A.Device.Helper).Bal();}},_Init:function(aArg){C.Ra._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dq(C.IP
);this.Number.R(A.aaR(A.acf.OY));this.Jl.H(AYN);this.IZ.H(UY);this.AkB(1);this.N.
CF=[this,this.AI3];this.N.C2(A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OY));},_className:"Application::SetTransponderScreen"
};C.ADE={Gp:null,Lq:null,Kx:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lq.R(A._GetAutoObject(A.acj.DU
).Af4());this.Kx.R(A._GetAutoObject(A.acj.DU).Aay());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.
call(this.Lq={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);this.__proto__=
C.ADE;this.Background.L(A.jb.Text);this.Gp.H(AYO);this.Gp.A4(0x11);this.Gp.R(A.aaR(
A.acf.Date));this.Gp.L(A.jb.Bm);this.Lq.H(AYP);this.Lq.A4(0x11);this.Lq.L(A.jb.Bm
);this.Kx.H(AYQ);this.Kx.L(A.jb.Bm);this.J(this.Gp,0);this.J(this.Lq,0);this.J(this.
Kx,0);this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gp._Done();this.Lq.
_Done();this.Kx._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gp._ReInit();this.Lq._ReInit();this.Kx._ReInit();this.Gp.R(A.aaR(
A.acf.Date));this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHs={Mt:null,Hp:null,Ie:null,AP:null,A_:null,FX:0,Ig:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mt.M);
},Ai:function(Ae){C.A$.Ai.call(this,Ae);if(this.AiL){this.Ie.R(Rq);this.Ie.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.Ie.L(A._GetAutoObject(A.acj.DU).Az2(this.FX,this.Ig));
this.Mt.L(A._GetAutoObject(A.acj.DU).Az0(this.FX,this.Ig));}this.Hp.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var AlC=this.AX.Hv(
Ad,6);var Al9=this.AX.CE(Ad,8);if(this.Hr>0){var Bzi=this.AX.Hv(this.Hr-1,6);var
BBY=this.AX.CE(this.Hr-1,8);var LJ=A._GetAutoObject(A.Device.Helper).Me(Bzi,AlC);
if(!!LJ){this.AiL=false;this.FX=A._GetAutoObject(A.acj.DU).Alz(LJ,BBY,Al9);}else{
this.AiL=true;this.FX=0;}}else{this.AiL=true;this.FX=0;}this.T(A._GetAutoObject(
A.acj.KQ).AC6(AlC));this.Hp.R(A._GetAutoObject(A.Device.Converter).Ak7(Al9));this.
Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHs;this.V.H(O$);this.Mt.H(Atc);this.Hp.H(AIn);this.Hp.A4(0x12);this.Hp.R(Ro);
this.Hp.L(A.jb.Text);this.Ie.H(AIo);this.Ie.R(Ro);this.Ie.L(A.jb.Text);this.AP.H(
Aom);this.AP.L(A.jb.Bb);this.A_.H(Aon);this.A_.L(A.jb.Bb);this.J(this.Mt,0);this.
J(this.Hp,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hp.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mt._Done();this.Hp._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mt._ReInit(
);this.Hp._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bf:null,V6:null,AhP:null,S6:null
,KR:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LJ=
A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LJ){var FX=A._GetAutoObject(
A.acj.DU).Alz(LJ,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdM=A.aaR(A.acf.BhP);AdM=A._GetAutoObject(
A.Device.Helper).MO(AdM,Pa,A._GetAutoObject(A.Device.Converter).Td(FX,2,true));AdM=
A._GetAutoObject(A.Device.Helper).MO(AdM,Ayg,A._GetAutoObject(A.acj.DU).Aay());this.
S6.R(AdM);this.AhP.L(A._GetAutoObject(A.acj.DU).Az0(FX,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S6.L(A._GetAutoObject(A.acj.DU).Az2(FX,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S6.R(A.aaR(A.acf.AV3));this.AhP.L(A.jb.
ARa);this.S6.L(A.jb.Text);}},CC:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CX(HY);var Ac8=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac8.Initialize(8,2,0,true);Fw.CX(Ac8);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.Axy(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},Axy:function(G){this.Bf=A._NewObject(C.Gd,0);this.Bf.N8(C.AHs);this.Bf.H(Ayu
);this.Bf.Zu(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dk(this.KR);this.J(this.
Bf,0);this.Ba(this.Bf);},Ann:function(G){A._GetAutoObject(C.A5).Fz();},Dk:function(
E){if(this.KR===E)return;this.KR=E;if(!!this.Bf)this.Bf.Dk(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADE._Init.call(this.V6={I:this},0);A.acg.AK._Init.
call(this.AhP={I:this},0);A.acg.Text._Init.call(this.S6={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cf);this.N.Z(true);this.Dq(C.IP);this.V6.H(
Qc);this.KR=A.aaR(A.acf.Aki);this.AhP.A1(0x1D);this.AhP.H(I1);this.S6.A1(0x1D);this.
S6.H(I1);this.S6.A4(0x12);this.S6.R(Ro);this.J(this.V6,0);this.J(this.AhP,0);this.
J(this.S6,0);this.N.CF=[this,this.Ann];this.N.C2(A.aaL(A.ach.E2));this.S6.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V6._Done();this.AhP._Done(
);this.S6._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V6._ReInit();this.AhP._ReInit();this.S6._ReInit();this.Dk(A.aaR(A.acf.Aki
));this.S6.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mp={DQ:null,Acy:null,ARR:11,EN:0,A5p:true,AB7:false,H0:function(G){if(A._GetAutoObject(
A.Device.Device).An.B8()>0)this.E4(4);else A._GetAutoObject(A.Device.Device).AZ(
30,true,A.jV,0,null);},CC:function(G){if(this.DQ.AAa())this.DQ.Ac7();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.AqX())this.E4(5);else this.E4(1);},
E3:function(G){if(this.EN===1)this.E4(0);},Ew:function(G){this.E4(0);A._GetAutoObject(
C.A5).Fz();},BCz:function(){A._GetAutoObject(A.Device.Device).AhH();},A4I:function(
){A._GetAutoObject(A.Device.Device).AnY();},A90:function(E){if(this.AB7===E)return;
this.AB7=E;A.abo([this,this.Bk$,this.A90],0);},E4:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkM();A.zX([
this,this.AKC],[B=A._GetAutoObject(A.Device.Helper),B.Arz,B.AkA],0);A.z$([this,this.
AAC],[B=this.DQ,B.SJ,B.E4],0);this.BCz();}break;case 3:{A.z$([this,this.AKC],[B=
A._GetAutoObject(A.Device.Helper),B.Arz,B.AkA],0);this.A4I();this.BAu();}break;case
2:{A._GetAutoObject(A.Device.Helper).Asr();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5p)this.BCk();else this.BCn();}break;case 4:{A.z$([this
,this.AKC],[B=A._GetAutoObject(A.Device.Helper),B.Arz,B.AkA],0);this.A4I();A._GetAutoObject(
A.Device.Helper).Asr();A.zX([this,this.Bfr],[B=A._GetAutoObject(A.Device.Device)
,B.Awk,B.Ay0],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARR);}
break;case 5:this.BgM();break;case 6:{A.zX([this,this.AAC],[B=this.DQ,B.SJ,B.E4]
,0);this.DQ.Ac7();}break;case 0:{A.z$([this,this.AKC],[B=A._GetAutoObject(A.Device.
Helper),B.Arz,B.AkA],0);this.A4I();}break;default:throw new Error(AyB);}A.abo([this
,this.SJ,this.Bw0],0);},Bw0:function(Aq){this.E4(Aq);},AKC:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UD){if(this.EN===1)this.E4(3);else A.ab5("%s%e",AYR,this.EN);}else
A.ab5("%s",AIp);},BCk:function(){A._GetAutoObject(A.Device.Device).AZ(13,true,A.
_GetAutoObject(A.Device.Helper).Ak3(A._GetAutoObject(A.Device.Helper).UD.Id).toFixed(
),0,[this,this.BAJ]);},BAJ:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bdi(false
))A._GetAutoObject(C.A5).Cb(31);else{A._GetAutoObject(A.Device.Helper).AkM();this.
E4(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkM(
);this.E4(1);}},Bdi:function(AiY){if(A._GetAutoObject(A.Device.Device).An.Ll()){
A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.
HK().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.G7();A.
_GetAutoObject(A.Device.Helper).Aqf(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.PY(A._GetAutoObject(A.Device.Helper).UD.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhD){var AlM=A._GetAutoObject(A.Device.Helper).AhD.AOV();A._GetAutoObject(
A.Device.Helper).W.Ab5(AlM);A._GetAutoObject(A.Device.Helper).W.AnC(AlM);}if(A._GetAutoObject(
A.Device.Helper).ARq(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nr(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SO(A._GetAutoObject(A.Device.Helper).BhE(A._GetAutoObject(A.Device.
Device).Agx,A._GetAutoObject(A.Device.Helper).W));if(AiY){A._GetAutoObject(A.Device.
Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);var Mc=A._GetAutoObject(A.Device.
Device).An.LY(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SV(Mc);if(A._GetAutoObject(A.Device.Helper).Am4()){if(A._GetAutoObject(A.
Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agx)A._GetAutoObject(
A.Device.Helper).Bal();}return true;},BAu:function(){if(!!A._GetAutoObject(A.Device.
Helper).UD){var AJu=true;if(A._GetAutoObject(A.Device.Helper).UD.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJu=A._GetAutoObject(A.Device.Helper).A7W(A._GetAutoObject(
A.Device.Helper).UD.Id);if(!AJu&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdi(true);AJu=A._GetAutoObject(A.Device.Helper).A7W(A._GetAutoObject(A.
Device.Helper).UD.Id);}}if(AJu)this.E4(5);else this.E4(2);}else{A.ab5("%s",AIp);
return;}},Bfr:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARR){A.z$([this,this.Bfr],[B=A._GetAutoObject(A.Device.Device),B.Awk,B.Ay0
],0);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.E4(5);else this.E4(1);}},
BgM:function(){if(this.AB7===true)this.E4(6);else A._GetAutoObject(C.A5).Cb(24);
},BCn:function(){A._GetAutoObject(A.Device.Device).AZ(36,true,A.jV,0,[this,this.
BBD]);},BBD:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkM();this.E4(1);}},AAC:function(G){if(!this.DQ.EN)this.E4(1);},A3C:function(G
){},Bw_:function(s){this.A3C(s);},Bk$:function(){return this.AB7;},SJ:function(){
return this.EN;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acy={I:this},0);this.__proto__=C.Mp;this.N.Z(true);this.Dq(C.AqY);this.
Number.H(AYS);this.Number.R(A.aaR(A.acf.A$J));this.Jl.H(AYT);this.IZ.H(AYU);this.
Acy.H(AYV);this.Acy.R(AYW);this.Acy.L(A.jb.Text);this.J(this.Acy,0);this.N.CF=[this
,this.Ew];this.N.Ce=[this,this.Bw_];this.N.C2(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acy.S(A.aaL(A.fl.H5));this.DQ=A._GetAutoObject(C.DQ);},_Done:function(
){this.__proto__=C.Ra;this.Acy._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.Acy._ReInit();this.Number.R(A.aaR(A.acf.A$J));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5d={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao_:-1,EN:0,Byx:function(){var Bgr=false;
var Os=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else if(Os){Bgr=true;var B2=A._NewObject(
A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axu(B2,5);B2.OnSetAppearance(3);B2.Cr(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axu(B2
,5);B2.OnSetAppearance(1);B2.Cr(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ,A._GetAutoObject(A.
Device.Device).An);if(Bgr)A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Os)A.
_GetAutoObject(A.Device.Helper).W.AnT(false);else A._GetAutoObject(A.Device.Helper
).W.AnT(true);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AZ(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},Byz:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);else A._GetAutoObject(
A.Device.Device).AZ(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);},Qp:function(Eh){switch(Eh){case 4:this.Byx();break;case
128:A._GetAutoObject(C.A5).Cb(7);break;case 16:A._GetAutoObject(C.A5).Cb(36);break;
case 1:A._GetAutoObject(C.A5).Cb(10);break;case 2:A._GetAutoObject(C.A5).Cb(11);
break;case 8:this.Byz();break;case 64:A._GetAutoObject(C.A5).Cb(29);break;case 32:
A._GetAutoObject(C.A5).Cb(48);break;case 256:A._GetAutoObject(C.A5).Cb(21);break;
case 512:A._GetAutoObject(C.A5).Cb(30);break;case 1024:this.BAr();break;case 262144:
this.BCP();break;case 2048:this.Ac7();break;case 4096:this.Bda(false);break;case
8192:this.Byy();break;case 16384:this.BAq();break;case 32768:this.ByY();break;case
524288:this.ByZ();break;case 65536:this.Bzm();break;case 131072:this.BCc();break;
case 0:break;default:throw new Error(AYX);}},Bdk:function(Eh,Bx4){var EQ=A._NewObject(
C.Wq,0);EQ.Ab3(false);EQ.Aj(true);EQ.AR=Bx4;EQ.Bmi(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.AnZ));EQ.DC(A.aaL(A.ach.ALQ));}break;case 2:{EQ.T(A.aaR(A.acf.A$t));EQ.
DC(A.aaL(A.ach.ALR));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DC(A.aaL(A.ach.ALS
));EQ.AFN(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asd));EQ.DC(A.aaL(A.ach.ALT));EQ.
AFN(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMp));EQ.DC(A.aaL(A.ach.ALU));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DC(A.aaL(A.ach.ALV));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DC(A.aaL(A.ach.ALW));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DC(A.aaL(A.ach.ALX));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DC(A._GetAutoObject(A.acj.DU).Bz1());}break;case 512:{EQ.T(A.aaR(A.acf.ASe));
EQ.DC(A.aaL(A.ach.ALI));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DC(A.aaL(A.ach.ALJ));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DC(A.aaL(A.ach.ALP));}break;case 2048:{EQ.T(A.aaR(A.acf.TB));EQ.DC(A.aaL(A.ach.ALK
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DC(A.aaL(A.ach.ALL));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DC(A.aaL(A.ach.ALM));EQ.AFN(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bi1));EQ.DC(A.aaL(A.ach.ALN));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpe));EQ.DC(A.aaL(A.ach.ALO));}break;default:A.ab5("%s",(AYY+Eh.toFixed(
))+AYZ);}return EQ;},Bzz:function(){this.Ao_=this.Ao_+1;if(this.Ao_>=this.AutoActions.
Ng())this.E4(0);else this.E4(2);},BB2:function(){this.Ao_=-1;},AAa:function(){return(
this.Ao_>-1)&&!this.BAk();},BAk:function(){return this.Ao_>=this.AutoActions.Ng(
);},E4:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.Bzz();break;
case 2:{var Tl=this.AutoActions.OK(this.Ao_);if(this.A5a(A._GetAutoObject(A.Device.
Helper).W,Tl))this.Qp(Tl);else A._GetAutoObject(A.Device.Device).AZ(64,true,(this.
ActionToString.LA(Tl)+Ata)+this.AnimalTypeToString.LA(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M5]);}break;case 0:this.BB2();break;default:throw new
Error(AyB);}A.abo([this,this.SJ,this.E4],0);},M5:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bda(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Cb(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAa())this.
E4(1);},Bdc:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LY(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAr:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A5).Cb(
45);else A._GetAutoObject(A.Device.Device).AZ(32,true,A.jV,0,[this,this.M5]);},Ac7:
function(){this.E4(1);},BB0:function(){var Os=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Os&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device
).Bt.HK().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.G7();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axu(B2,5);B2.Cr(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Os)A._GetAutoObject(
A.Device.Helper).W.AnT(false);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BB1:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(false);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},Bda:function(BzD){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzD===false))A._GetAutoObject(A.Device.
Device).AZ(63,true,A.jV,0,[this,this.M5]);else A._GetAutoObject(C.A5).Cb(54);},Byy:
function(){A._GetAutoObject(A.Device.Helper).W.ArV(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AZ(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BAq:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A5).Cb(81);else A._GetAutoObject(A.
Device.Device).AZ(69,true,A.jV,0,[this,this.M5]);},ByY:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae4(false);A._GetAutoObject(A.Device.
Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AZ(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);}}},Bzm:function(){A._GetAutoObject(A.Device.Helper).W.Ae3(false);A._GetAutoObject(
A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae3(false);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AZ(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);else A._GetAutoObject(A.Device.Device).AZ(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},A5a:function(En,Eh
){var Qz=false;switch(Eh){case 32768:Qz=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:Qz=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:Qz=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:Qz=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qz=true;break;default:A.ab5("%s",AY0+
Eh.toFixed());}return Qz;},BCc:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A5).Cb(80);else A._GetAutoObject(A.Device.Device).AZ(
69,true,A.jV,0,[this,this.M5]);},BCP:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AZ(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M5]);else{A._GetAutoObject(A.
Device.Helper).W.PY(0);A._GetAutoObject(A.Device.Helper).W.SO(A._GetAutoObject(A.
Device.Helper).A5r(A._GetAutoObject(A.Device.Device).An4,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AZ(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M5]);}},ByZ:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},SJ:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5d;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL2={R4:null,Aqh:null,E4:function(E){if(this.EN===E)return;C.Mp.E4.call(this
,E);switch(E){case 1:this.Dq(C.AqY);break;case 5:case 6:this.Dq(C.IP);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyB);}},A3C:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);C.CG._Init.call(this.R4={I:this},0);C.AL3._Init.call(this.Aqh={I:this},0);
this.__proto__=C.AL2;this.A90(true);this.R4.H(AY1);this.R4.R(A.aaR(A.acf.TB));this.
R4.L(A.jb.Text);this.Aqh.H(AY2);this.J(this.R4,0);this.J(this.Aqh,0);this.N.Ct(A.
aaL(A.ach.AeC));this.R4.S(A.aaL(A.fl.Af));this.R4.AY(A.aaL(A.fl.HJ));this.R4.Cl(
A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.Mp;this.R4._Done();this.Aqh.
_Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.call(this);this.
R4._ReInit();this.Aqh._ReInit();this.R4.R(A.aaR(A.acf.TB));this.R4.S(A.aaL(A.fl.
Af));this.R4.AY(A.aaL(A.fl.HJ));this.R4.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.Mp._Mark.call(this,D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={If:null,J8:null,A3C:function(G){if(this.If.N3(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mp._Init.call(this,aArg);A.
acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J8.H(AY3);this.J8.Lv(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.ABV));this.J8.L(A.jb.Text);this.J(this.J8,0);this.N.Ct(A.aaL(A.ach.
AeC));this.J8.S(A.aaL(A.fl.Af));this.If=A._GetAutoObject(C.Pp);},_Done:function(
){this.__proto__=C.Mp;this.J8._Done();C.Mp._Done.call(this);},_ReInit:function(){
C.Mp._ReInit.call(this);this.J8._ReInit();this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.ABV));this.J8.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mp._Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL3={Y:null,Init:function(aArg){var B;A.zV([this,this.ABD],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.Auz],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABD],this);A.pe([this,this.Auz],this);this.H(A.abK(this.M,AY4));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AY5)));},Bc1:function(G){
var B;var AlA=0;var AzE=0;var Bdg;var X=this.Y.Ah;var Cy=null;Bdg=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ng()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wq.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AY6));Cy.H(A.abM(Cy.M,(AzE*58)+Bdg));Cy.H(A.abO(Cy.M,AlA*58));if(AzE>=
3){AlA=AlA+1;AzE=0;}else AzE=AzE+1;}X=X.Ah;}this.Ba(null);},A11:function(Eh){var
EQ=A._GetAutoObject(C.DQ).Bdk(Eh,null);this.J(EQ,0);this.Bc1(this);},AoZ:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((
AdK.U&0x400)===0x400))this.HP(AdK);}},ABD:function(G){this.AoZ();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ng();for(O=0;O<CB;O=O+1){var Tl=A._GetAutoObject(C.
AutoActions).OK(O);this.A11(Tl);}A.pe([this,this.Bc1],this);A.pe([this,this.Auz]
,this);A.pe([this,this.BCZ],this);},Auz:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wq.isPrototypeOf(
X)?X:null);Aa.AFN(false);}X=X.Ah;}},BCZ:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wq.isPrototypeOf(
X)?X:null);var ByO=A._GetAutoObject(C.AutoActions).Ng();if(!!Aa){var O;Aa.A9W(false
);for(O=0;O<ByO;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OK(O)){Aa.A9W(
true);Aa.Bno(AY7+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL3;this.
Y.JZ(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DQ={_Init:function(){C.A5d._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APE={Lp:null,T9:null,Init:function(aArg){
this.Lp.R(A._GetAutoObject(A.acj.Temperature).AlL());},_Init:function(aArg){C.Dd.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lp={I:this},0);C.CG._Init.call(
this.T9={I:this},0);this.__proto__=C.APE;this.Lp.H(AY8);this.Lp.A4(0x12);this.Lp.
L(A.jb.Text);this.T9.H(Aoo);this.T9.R((A.aaR(A.acf.Ahj)+AIq)+A.aaR(A.acf.Kp));this.
T9.A4(0x12);this.T9.L(A.jb.Text);this.J(this.Lp,0);this.J(this.T9,0);this.Lp.S(A.
aaL(A.fl.Af));this.T9.S(A.aaL(A.fl.Ak));this.T9.AY(A.aaL(A.fl.Bg));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dd;this.Lp._Done();this.T9._Done();C.Dd._Done.
call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Lp._ReInit();this.T9.
_ReInit();this.T9.R((A.aaR(A.acf.Ahj)+AIq)+A.aaR(A.acf.Kp));this.Lp.S(A.aaL(A.fl.
Af));this.T9.S(A.aaL(A.fl.Ak));this.T9.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.Dd._Mark.call(this,D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADC={JB:null,D0:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JB={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADC;this.JB.H(AY9);this.JB.Lv(true);this.JB.A4(0x14);this.JB.R(A.aaR(A.acf.AhO
)+AIr);this.JB.L(A.jb.Text);this.D0.H(Aoo);this.D0.Lv(true);this.D0.R(A.aaR(A.acf.
AGi));this.D0.L(A.jb.Text);this.J(this.JB,0);this.J(this.D0,0);this.JB.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dd;this.JB.
_Done();this.D0._Done();C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.
call(this);this.JB._ReInit();this.D0._ReInit();this.JB.R(A.aaR(A.acf.AhO)+AIr);this.
D0.R(A.aaR(A.acf.AGi));this.JB.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Dd._Mark.call(this,D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.TZ={Jd:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CG._Init.call(
this.Jd={I:this},0);this.__proto__=C.TZ;this.Jd.H(AIs);this.Jd.R((((A.aaR(A.acf.
RS)+AcQ)+AIt)+A.aaR(A.acf.Baz))+Pb);this.Jd.A4(0x12);this.Jd.L(A.jb.Text);this.J(
this.Jd,0);this.Jd.S(A.aaL(A.fl.Af));this.Jd.AY(A.aaL(A.fl.Ak));this.Jd.Cl(A.aaL(
A.fl.Bg));},_Done:function(){this.__proto__=C.Dd;this.Jd._Done();C.Dd._Done.call(
this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Jd._ReInit();this.Jd.R((((
A.aaR(A.acf.RS)+AcQ)+AIt)+A.aaR(A.acf.Baz))+Pb);this.Jd.S(A.aaL(A.fl.Af));this.Jd.
AY(A.aaL(A.fl.Ak));this.Jd.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Dd._Mark.
call(this,D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APG={Lq:null,Kx:null,CP:function(){this.A$L();},Init:function(aArg){this.A$L(
);},A$L:function(){this.Lq.R(A._GetAutoObject(A.acj.DU).Af4());this.Kx.R(A._GetAutoObject(
A.acj.DU).Aay());},_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lq={I:this},0);C.CG._Init.call(this.Kx={I:this},0);this.__proto__=C.APG;
this.Lq.H(AY_);this.Lq.A4(0x12);this.Lq.L(A.jb.Text);this.Kx.H(Aoo);this.Kx.L(A.
jb.Text);this.J(this.Lq,0);this.J(this.Kx,0);this.Lq.S(A.aaL(A.fl.Af));this.Kx.S(
A.aaL(A.fl.Af));this.Kx.AY(A.aaL(A.fl.Ak));this.Kx.Cl(A.aaL(A.fl.Bg));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dd;this.Lq._Done();this.Kx._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Lq._ReInit();
this.Kx._ReInit();this.Lq.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));this.Kx.AY(
A.aaL(A.fl.Ak));this.Kx.Cl(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.
Dd._Mark.call(this,D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANf={Mt:null,Hp:null,Ie:null,AP:null,A_:null,FX:0,AaD:0,Ig:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hp.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hp.M[2]-1,0,this.Hp.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mt.M);
},Ai:function(Ae){C.A$.Ai.call(this,Ae);if(this.AiL){this.Ie.R(Rq);this.Ie.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.Ie.L(A._GetAutoObject(A.acj.DU).Az2(this.FX,this.Ig));
this.Mt.L(A._GetAutoObject(A.acj.DU).Az0(this.FX,this.Ig));}if(this.AaD>0)this.Hp.
R(A._GetAutoObject(A.Device.Converter).Ak7(this.AaD));else this.Hp.R(Rq);this.Hp.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mn=
this.AX.CE(Ad,1);var Auu=this.AX.Hv(Ad,24);var AKb=this.AX.CE(Ad,23);var Auv=this.
AX.Hv(Ad,19);this.AaD=this.AX.CE(Ad,18);if((Auu>0)&&(Auu!==Auv)){var LJ=A._GetAutoObject(
A.Device.Helper).Me(Auu,Auv);if(!!LJ){this.AiL=false;this.FX=A._GetAutoObject(A.
acj.DU).Alz(LJ,AKb,this.AaD);}else{this.AiL=true;this.FX=0;}}else{this.AiL=true;
this.FX=0;}this.T(Mn.toFixed());this.Ig=this.AX.AmU(Ad,14);this.Am();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hp={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.ANf;this.V.H(O$);this.Mt.H(Atc);this.Hp.H(AIn);this.Hp.A4(0x12);this.Hp.R(Ro);
this.Hp.L(A.jb.Text);this.Ie.H(AIo);this.Ie.R(Ro);this.Ie.L(A.jb.Text);this.AP.H(
Aom);this.AP.L(A.jb.Bb);this.A_.H(Aon);this.A_.L(A.jb.Bb);this.J(this.Mt,0);this.
J(this.Hp,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hp.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mt._Done();this.Hp._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mt._ReInit(
);this.Hp._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hp.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Nb={Ms:null,AP:null,A_:null,Gy:null,Xu:0,Init:
function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Ms.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ms.M);this.Background.H([].concat(this.Ms.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gy.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.Gy.M[2]-1,0,this.
Gy.M[2]+1,aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.Gy.L(this.V.AQ
);if(!!this.Xu&&(this.Xu!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xu));this.V.L(A._GetAutoObject(A.acj.Assessment).XD(this.Xu));}else this.Ms.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var
Mn=this.AX.CE(Ad,1);var LV=this.AX.Ja(Ad,13);var AlG=this.AX.Ja(Ad,17);var AlO=this.
AX.H6(Ad,11);var Azm=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.Helper).
Me(Azm,A._GetAutoObject(A.Device.Helper).Du());this.Xu=A._GetAutoObject(A.Device.
Helper).AMm(LV,AlO,AlG);this.T(Mn.toFixed());if(AfR<100)this.Gy.R((AfR.toFixed()+
CR)+A.aaR(A.acf.AL1));else this.Gy.R(A._GetAutoObject(A.acj.KQ).AC7(Azm,A._GetAutoObject(
A.Device.Helper).Du(),AIu));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Ms={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.Gy={I:this
},0);this.__proto__=C.Nb;this.Ms.H(Atc);this.Background.H(AY$);this.V.H(O$);this.
AP.H(Aom);this.AP.L(A.jb.Bb);this.A_.H(Aon);this.A_.L(A.jb.Bb);this.Gy.H(AyC);this.
J(this.Ms,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Gy,0);this.Gy.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ms._Done(
);this.AP._Done();this.A_._Done();this.Gy._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Ms._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.Gy._ReInit();this.Gy.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANd={Ajx:null,Of:null,AP:null,A_:null,Jw:null,AKt:0,A22:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Of.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.Of.M);this.A_.H([this.Of.M[2]-1,0,this.Of.M[2]+1,aSize[1]]);
this.Jw.H([this.Of.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this
,Ae);this.Jw.Df(this.V.AQ);if(this.AKt>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A22));this.Of.L(A._GetAutoObject(A.acj.Assessment).XD(this.A22));}else{
this.Ajx.L(this.Background.AQ);this.Of.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.CE(Ad,
1);this.AKt=this.AX.CE(Ad,5);this.A22=this.AX.Ja(Ad,17);this.T(Mn.toFixed());if(
this.AKt>0)this.Of.R(A._GetAutoObject(A.Device.Converter).AkY(this.AKt));else this.
Of.R(Rq);var Xt=A._GetAutoObject(A.Device.Helper).ZT(6);A._GetAutoObject(A.Device.
Device).SV(Ad);var A0$=A._GetAutoObject(A.Device.Helper).Bjp(A._GetAutoObject(A.
Device.Device).Bt,9,ID,Xt,0);this.Jw.A_d(A0$.Get(3));this.Jw.A_f(A0$.Get(2));this.
Jw.A_e(A0$.Get(1));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.Of={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jw._Init.call(this.Jw={I:this},0);this.__proto__=C.ANd;this.Of.A4(0x12);this.
Of.R(Ro);this.Of.L(A.jb.Text);this.AP.H(Aom);this.AP.L(A.jb.Bb);this.A_.H(Aon);this.
A_.L(A.jb.Bb);this.Jw.H(AZa);this.J(this.Ajx,0);this.J(this.Of,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jw,0);this.Of.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.Ajx._Done();this.Of._Done();this.AP.
_Done();this.A_._Done();this.Jw._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Ajx._ReInit();this.Of._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jw._ReInit();this.Of.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jw={Afq:null,
ColoredCounterAttrSet:null,ACy:0,ACz:0,ACx:0,KW:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKm;var ALH;var AKS;var AlW=0;if(this.ACx>0){AKm=this.ACx.toFixed(
);AlW+=AKm.length;}else{AKm=AZb;AlW++;}if(this.ACz>0){ALH=this.ACz.toFixed();AlW+=
ALH.length;}else{ALH=AyD;AlW++;}if(this.ACy>0){AKS=this.ACy.toFixed();AlW+=AKS.length;
}else{AKS=AIi;AlW++;}if(AlW<=4)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));else
if(AlW<=5)this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Bg));this.Afq.R(((((AZc+AKm)+AZd)+ALH)+AZe)+AKS);},A_e:function(E
){if(this.ACy===E)return;this.ACy=E;this.Am();},A_f:function(E){if(this.ACz===E)
return;this.ACz=E;this.Am();},A_d:function(E){if(this.ACx===E)return;this.ACx=E;
this.Am();},Df:function(E){if(this.KW===E)return;this.KW=E;this.ColoredCounterAttrSet.
Ahm(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuQ._Init.call(
this.Afq={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jw;this.H(AIv);this.Afq.A1(0x3F);this.Afq.H(AIv);this.
Afq.R(Ro);this.ColoredCounterAttrSet.Bmv(A.jb.E1);this.ColoredCounterAttrSet.A95(
A.jb.Ia);this.ColoredCounterAttrSet.A94(A.jb.Gk);this.ColoredCounterAttrSet.Ahm(
A.jb.Text);this.KW=A.jb.Text;this.J(this.Afq,0);this.Afq.A9Z(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahp(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A91(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afq._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afq._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahp(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANc={AtG:null
,Acd:null,Ace:null,Acf:null,Jw:null,AP:null,A_:null,Ea:null,Ly:null,AcA:null,KX:
null,KY:null,AJz:0,AJy:0,AJx:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acd.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcA.H(this.
Acd.M);this.A_.H([this.Acd.M[2]-1,0,this.Acd.M[2]+1,aSize[1]]);this.Ace.H([this.
Acd.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KX.H(this.Ace.M);this.Ea.H([this.
Ace.M[2]-1,0,this.Ace.M[2]+1,aSize[1]]);this.Acf.H([this.Ace.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KY.H(this.Acf.M);this.Ly.H([this.Acf.M[2]-1,0,this.Acf.
M[2]+1,aSize[1]]);this.Jw.H([this.Acf.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.A$.Ai.call(this,Ae);this.Jw.Df(this.V.AQ);this.Acd.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJx));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJy));this.Acf.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJz));this.AcA.L(A._GetAutoObject(
A.acj.Assessment).XD(this.AJx));this.KX.L(A._GetAutoObject(A.acj.Assessment).XD(
this.AJy));this.KY.L(A._GetAutoObject(A.acj.Assessment).XD(this.AJz));this.AcA.Z(
!this.AJx);this.KX.Z(!this.AJy);this.KY.Z(!this.AJz);this.Jw.A_d(this.AtG.Get(3)
);this.Jw.A_f(this.AtG.Get(2));this.Jw.A_e(this.AtG.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Hr=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.
CE(Ad,1);this.T(Mn.toFixed());A._GetAutoObject(A.Device.Device).SV(Ad);this.AJx=
A._GetAutoObject(A.Device.Helper).A2C(A._GetAutoObject(A.Device.Device).Bt,ID,0);
this.AJy=A._GetAutoObject(A.Device.Helper).A2C(A._GetAutoObject(A.Device.Device).
Bt,ID,-1);this.AJz=A._GetAutoObject(A.Device.Helper).A2C(A._GetAutoObject(A.Device.
Device).Bt,ID,-2);this.AtG=A._GetAutoObject(A.Device.Helper).A62(A._GetAutoObject(
A.Device.Device).Bt,ID,0,0);this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Acd={I:this},0);A.acg.AK._Init.call(this.Ace={I:
this},0);A.acg.AK._Init.call(this.Acf={I:this},0);C.Jw._Init.call(this.Jw={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.Ly={I:this
},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.KX={I:
this},0);A.acg.Text._Init.call(this.KY={I:this},0);this.__proto__=C.ANc;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ea.L(A.jb.Bb);this.Ly.L(A.jb.Bb);this.AcA.R(Aop
);this.KX.R(Aop);this.KY.R(Aop);this.J(this.Acd,0);this.J(this.Ace,0);this.J(this.
Acf,0);this.J(this.Jw,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.Ly,0);this.J(this.AcA,0);this.J(this.KX,0);this.J(this.KY,0);this.AcA.S(A.
aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.AtG=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Acd._Done();this.Ace._Done();this.Acf._Done();this.Jw._Done();this.AP.
_Done();this.A_._Done();this.Ea._Done();this.Ly._Done();this.AcA._Done();this.KX.
_Done();this.KY._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.Acd._ReInit();this.Ace._ReInit();this.Acf._ReInit();this.Jw._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AcA.
_ReInit();this.KX._ReInit();this.KY._ReInit();this.AcA.S(A.aaL(A.fl.Af));this.KX.
S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.AtG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmX={H_:null,XG:false,Bl:function(aSize){var
B;this.H_.H([(aSize[0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H_.M[0]-10,40]);C.TL.Bl.call(this,aSize);},Ai:function(Ae){C.TL.Ai.call(
this,Ae);if(this.XG)this.H_.Cw(1);else this.H_.Cw(0);},Kh:function(G){if(this.XG
)C.TL.Kh.call(this,G);},Kc:function(G){if(this.XG)C.TL.Kc.call(this,G);},Tw:function(
AH){C.TL.Tw.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.XG=true;this.ZB(
true);}else{this.H(A.abI(this.M,40));this.XG=false;this.ZB(false);}},_Init:function(
aArg){C.TL._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.AmX;this.V.A4(0x11);this.H_.H(AHT);this.H_.Cw(0);this.J(this.H_,0);this.V.Cl(A.
aaL(A.fl.Bg));this.H_.Ax(A.aaL(A.ach.AqN));},_Done:function(){this.__proto__=C.TL;
this.H_._Done();C.TL._Done.call(this);},_ReInit:function(){C.TL._ReInit.call(this
);this.H_._ReInit();this.V.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.TL._Mark.
call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGh={_Init:function(aArg){C.Axl._Init.call(this,aArg);this.__proto__=C.AGh;}
,_className:"Application::OptionsOverlaySeparator"};C.AkD={DL:A.jV,Bw:true,_Init:
function(aArg){C.Axl._Init.call(this,aArg);this.__proto__=C.AkD;},_className:"Application::OptionsOverlayNode"
};C.ZD={AR:null,_Init:function(aArg){C.AkD._Init.call(this,aArg);this.__proto__=
C.ZD;},_Mark:function(D){var B;C.AkD._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANI={Ai:function(Ae){C.O2.Ai.call(this,Ae);var FT=A.jb.CJ;var GY=A.jb.Text;if(
this.Hl){FT=A.jb.Text;GY=A.jb.Bm;}this.Background.L(FT);this.V.L(GY);},_Init:function(
aArg){C.O2._Init.call(this,aArg);this.__proto__=C.ANI;},_className:"Application::DarkThemeTextItem"
};C.O2={Background:null,BW:null,V:null,Aqu:0,Hl:false,Init:function(aArg){},Bl:function(
aSize){C.Hi.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BW.H(A.abK(this.BW.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hi.Ai.call(this,Ae);this.BW.L(this.Aqu);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},Bh:function(E){if(this.Hl===E)return;this.Hl=E;this.Am();
},Anw:function(E){if(this.Aqu===E)return;this.Aqu=E;this.Am();},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BW._Init.call(this.BW={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.O2;this.H(BD);this.Background.H(AIw);this.BW.H(BD);this.BW.Nu(2);this.BW.L(A.jb.
Ri);this.V.H(AZf);this.Aqu=A.jb.Ri;this.J(this.Background,0);this.J(this.BW,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(A.aaL(A.
fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);this.BW._Done();this.V._Done();C.Hi._Done.call(this);},_ReInit:function(){C.Hi.
_ReInit.call(this);this.Background._ReInit();this.BW._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cl(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APJ={Es:null,IU:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=C.APJ;this.H(
Oi);this.Background.H(Oi);this.Es.H(AIx);this.Es.R(A.aaR(A.acf.GM));this.Es.A4(0x11
);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIy);this.IU.Hn(5);this.IU.A4(
0x14);this.IU.R(A.aaR(A.acf.AG0));this.IU.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.IU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(
A.aaR(A.acf.GM));this.IU.R(A.aaR(A.acf.AG0));this.Es.S(A.aaL(A.fl.Af));this.IU.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Ss:null,St:null,AeD:null,Ag4:null,QN:null
,KW:0,LastTemperature:0,AqA:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Ss.Ax(A.aaL(A.ach.AvD));this.St.Ax(A.aaL(A.ach.AvD));}break;case 2:{this.Ss.Ax(A.
aaL(A.ach.AvG));this.St.Ax(A.aaL(A.ach.AvG));}break;default:{this.Ss.Ax(A.aaL(A.
ach.Aey));this.St.Ax(A.aaL(A.ach.Aey));}}this.Ss.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqA));var ApK;if(this.IsWatch)ApK=A.aaL(A.ach.AQN);else if(this.IsFever
){ApK=A.aaL(A.ach.AQM);switch(A._GetAutoObject(A.Device.Converter).Ajk(this.LastTemperature
,this.AnimalType)){case 3:this.QN.L(A.jb.Gk);break;case 2:this.QN.L(A.jb.Ia);break;
case 1:this.QN.L(A.jb.E1);break;case 0:this.QN.L(A.jb.Afu);break;default:;}}else
if(this.IsAlarm){ApK=A.aaL(A.ach.AQL);if(!this.AqA||(this.AqA===5))this.QN.L(A.jb.
Gk);else this.QN.L(0xFF000000);}else ApK=null;this.AeD.Ax(ApK);this.Ag4.Ax(ApK);
this.QN.Ax(ApK);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqA)===A.jb.E1)this.
St.L(this.KW);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFh:function(E){if(this.AqA===E)return;this.AqA=E;this.Am();},Df:function(
E){if(this.KW===E)return;this.KW=E;this.Am();},Ae5:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uu:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae1:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae7:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},FD:function(){this.EC(0);this.AFh(0);this.Ae1(false);this.Uu(false
);this.Ae5(false);this.Ae7(0);this.Df(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ss={I:this},0);A.acg.Ap._Init.call(
this.St={I:this},0);A.acg.Ap._Init.call(this.AeD={I:this},0);A.acg.Ap._Init.call(
this.Ag4={I:this},0);A.acg.Ap._Init.call(this.QN={I:this},0);this.__proto__=C.DS;
this.H(Alg);this.Ss.A1(0x3F);this.Ss.H(Alg);this.Ss.L(A.jb.CJ);this.Ss.A4(0x12);
this.Ss.Cw(0);this.St.A1(0x3F);this.St.H(Alg);this.St.L(0xFF000000);this.St.A4(0x12
);this.St.Cw(1);this.AeD.A1(0x3F);this.AeD.H(Alg);this.AeD.L(0xFF000000);this.AeD.
Cw(0);this.Ag4.A1(0x3F);this.Ag4.H(Alg);this.Ag4.Cw(1);this.QN.A1(0x3F);this.QN.
H(Alg);this.QN.L(A.jb.CU);this.QN.Cw(2);this.KW=A.jb.Text;this.J(this.Ss,0);this.
J(this.St,0);this.J(this.AeD,0);this.J(this.Ag4,0);this.J(this.QN,0);this.Ss.Ax(
A.aaL(A.ach.Aey));this.St.Ax(A.aaL(A.ach.Aey));},_Done:function(){this.__proto__=
A.Core.P;this.Ss._Done();this.St._Done();this.AeD._Done();this.Ag4._Done();this.
QN._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Ss._ReInit();this.St._ReInit();this.AeD._ReInit();this.Ag4._ReInit();
this.QN._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM$={Ch:function(Ad){C.Ajz.Ch.call(this,Ad);if(!!this.AX){var BAo=this.AX.H6(
Ad,12);var ByG=this.AX.So(Ad,15);this.Abi.R(A._GetAutoObject(A.Device.Helper).Me(
ByG,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.Su.Z(BAo);this.Am();
}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=C.AM$;},_className:
"Application::CalfListAlarmItem"};C.ADy={D0:null,MD:null,_Init:function(aArg){C.
T0._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.MD={I:this},0);this.__proto__=C.ADy;this.D0.H(Aoo);this.D0.Lv(true);this.
D0.R(A.aaR(A.acf.A6g));this.D0.L(A.jb.Text);this.MD.H(AZg);this.MD.Je(false);this.
MD.L(A.jb.Text);this.MD.A4(0x12);this.J(this.D0,-2);this.J(this.MD,0);this.D0.S(
A.aaL(A.fl.Ak));this.MD.Ax(A.aaL(A.ach.ADX));},_Done:function(){this.__proto__=C.
T0;this.D0._Done();this.MD._Done();C.T0._Done.call(this);},_ReInit:function(){C.
T0._ReInit.call(this);this.D0._ReInit();this.MD._ReInit();this.D0.R(A.aaR(A.acf.
A6g));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T0._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Ko={Background:null,BW:
null,ACZ:0,ACc:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACZ);this.BW.L(this.ACc);},AwG:function(E){if(this.ACZ===E)return;this.ACZ=E;this.
Am();},AE$:function(E){if(this.ACc===E)return;this.ACc=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BW={I:this},0);this.__proto__=C.Ko;this.H(Aoq);this.
Background.A1(0x3C);this.Background.H(Aoq);this.Background.Cw(1);this.BW.A1(0x3C
);this.BW.H(Aoq);this.ACZ=A.jb.E1;this.ACc=A.jb.Text;this.J(this.Background,0);this.
J(this.BW,0);this.Background.Ax(A.aaL(A.ach.Ko));this.BW.Ax(A.aaL(A.ach.Ko));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BW._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmF={Q:null,Pu:
null,A7H:false,Bl:function(aSize){C.My.Bl.call(this,aSize);this.V.H([].concat(this.
Pu.M[2]-this.V.Text.Jh,this.V.M.slice(1,4)));},Ai:function(Ae){C.My.Ai.call(this
,Ae);this.Pu.L(this.V.AQ);},AwL:function(E){if(this.A7H===E)return;this.A7H=E;if(
E)this.Pu.R(AZh);else this.Pu.R(AIz);},Hf:function(G){var F;if(!!this.Q)this.AwL((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hf],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hf],E,0);if(!!E)
A.pe([this,this.Hf],this);},_Init:function(aArg){C.My._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pu={I:this},0);this.__proto__=C.AmF;this.Pu.A1(0x34);this.Pu.
H(Xi);this.Pu.R(AIz);this.J(this.Pu,0);this.Pu.S(A.aaL(A.fl.AOC));},_Done:function(
){this.__proto__=C.My;this.Pu._Done();C.My._Done.call(this);},_ReInit:function(){
C.My._ReInit.call(this);this.Pu._ReInit();},_Mark:function(D){var B;C.My._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO1={DX:function(G){C.Ku.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).AdY(4));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.AO1;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dt:function(){return 3;},C6:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BT(aIndex);},DZ:function(A9){return A9;},H7:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APK={Gp:null,Lp:null,YW:null,Init:function(aArg){this.Lp.R(A._GetAutoObject(
A.acj.Temperature).AlL());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.call(this.Lp={I:this},0);A.
acg.Text._Init.call(this.YW={I:this},0);this.__proto__=C.APK;this.Background.L(A.
jb.Text);this.Gp.H(AIA);this.Gp.A4(0x11);this.Gp.R(A.aaR(A.acf.Date));this.Gp.L(
A.jb.Bm);this.Lp.H(AZi);this.Lp.A4(0x12);this.Lp.L(A.jb.Bm);this.YW.H(AZj);this.
YW.A4(0x12);this.YW.R(A.aaR(A.acf.Bs));this.YW.L(A.jb.Bm);this.J(this.Gp,0);this.
J(this.Lp,0);this.J(this.YW,0);this.Gp.S(A.aaL(A.fl.Af));this.Lp.S(A.aaL(A.fl.Af
));this.YW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gp._Done();this.Lp._Done();this.YW._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gp._ReInit();this.Lp._ReInit();this.YW._ReInit(
);this.Gp.R(A.aaR(A.acf.Date));this.YW.R(A.aaR(A.acf.Bs));this.Gp.S(A.aaL(A.fl.Af
));this.Lp.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TF={Lj:null,AjN:false,Init:function(
aArg){var B;A.zX([this,this.Bb1],[B=A._GetAutoObject(A.Device.Device),B.AEK,B.AIS
],0);this.AGT(this);A.pe([this,this.Aow],this);},DF:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ov(this);break;case 7:this.M6(
this);break;default:D5.Mx=true;}},CC:function(G){var B;if(!!this.Lj)this.Lj.CC(this
);C.AB.CC.call(this,G);},E3:function(G){var B;if(!!this.Lj)this.Lj.E3(this);C.AB.
E3.call(this,G);},Ann:function(G){A._GetAutoObject(C.A5).Fz();},AGT:function(G){
var B;if(!!this.Lj){this.Lj.E3(this);this.HP(this.Lj);}if(this.AjN)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lj=A._NewObject(C.AMt,0);break;case 1:this.Lj=A.
_NewObject(C.AMu,0);break;case 3:this.Lj=A._NewObject(C.AMs,0);break;case 2:this.
Lj=A._NewObject(C.AMv,0);break;default:throw new Error(AIB);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lj=A._NewObject(C.AMw,0);break;case 1:this.Lj=A.
_NewObject(C.AMF,0);break;case 3:this.Lj=A._NewObject(C.AMz,0);break;case 2:this.
Lj=A._NewObject(C.AMK,0);break;default:throw new Error(AIB);}this.HQ(this);this.
J(this.Lj,0);this.Lj.H(Fc);this.Lj.Zy([this,this.A0X]);this.Lj.CC(this);this.Ba(
this.Lj);},Bb1:function(s){this.AGT(s);},Bon:function(G){A._GetAutoObject(A.Device.
Device).AeV(0);},AT4:function(G){A._GetAutoObject(A.Device.Device).AeV(1);},AT3:
function(G){A._GetAutoObject(A.Device.Device).AeV(3);},AT5:function(G){A._GetAutoObject(
A.Device.Device).AeV(2);},HQ:function(G){this.N.C2(A.aaL(A.ach.E2));this.N.Hy(A.
jV);this.N.CF=[this,this.Ann];this.N.AFn(A.aaL(A.fl.Ak));},Aow:function(s){this.
HQ(s);},Bm9:function(E){if(this.AjN===E)return;this.AjN=E;A.pe([this,this.Bb1],this
);},A$e:function(G){this.Bm9(!this.AjN);},Boq:function(G){A._GetAutoObject(A.Device.
Device).AZ(31,true,A.jV,0,null);},M6:function(G){},BG1:function(s){this.M6(s);},
Ov:function(G){},BG0:function(s){this.Ov(s);},Bfo:function(G){var FS=A._GetAutoObject(
A.Device.Device).D9;FS=FS+1;if(FS>=4)FS=0;A._GetAutoObject(A.Device.Device).AeV(
FS);},BBi:function(G){var FS=A._GetAutoObject(A.Device.Device).D9;FS=FS-1;if(FS<
0)FS=3;A._GetAutoObject(A.Device.Device).AeV(FS);},Af_:function(G){},A0X:function(
s){this.Af_(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TF;this.Background.H(Cf);this.N.Z(true);this.N.OU(true);this.N.OV(true);this.Dq(
C.APz);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dn:null,CC:function(G){},AIR:function(s){this.CC(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyR:function(s){
this.E3(s);},Zy:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dn.BG=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BF._Init.call(this.Dn={I:this},0);this.__proto__=
C.D9;this.H(U0);this.AttrSet.A95(A.jb.Gk);this.AttrSet.A94(A.jb.Ia);this.AttrSet.
Ahm(A.jb.Text);this.Dn.Filter=1;this.AttrSet.Ahp(A.aaL(A.fl.Ak));this.AttrSet.A91(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dn._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dn._ReInit();this.AttrSet.Ahp(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMw={RX:
null,Aa1:null,TE:null,TD:null,R1:null,QD:null,R2:null,RZ:null,R0:null,RY:null,CP:
function(){var B;this.RX.Ch(this);this.Aa1.Ch(this);this.TE.Ch(this);this.TD.Ch(
this);this.R1.Ch(this);this.QD.Ch(this);this.R2.Ch(this);this.RZ.Ch(this);this.R0.
Ch(this);this.RY.Ch(this);},GG:function(G){C.R3.GG.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RX.Z(true);this.Aa1.Z(false);
this.RZ.Z(false);this.R0.Z(false);this.RY.Z(false);this.R1.Z(true);this.QD.Z(true
);this.R2.Z(true);}break;case 1:{this.RX.Z(false);this.Aa1.Z(true);this.RZ.Z(true
);this.R0.Z(true);this.RY.Z(true);this.R1.Z(false);this.QD.Z(false);this.R2.Z(false
);}break;default:A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.M0],this);},_Init:function(aArg){C.R3._Init.call(this,aArg);C.
RX._Init.call(this.RX={I:this},0);C.AMr._Init.call(this.Aa1={I:this},0);C.TE._Init.
call(this.TE={I:this},0);C.TD._Init.call(this.TD={I:this},0);C.R1._Init.call(this.
R1={I:this},0);C.QD._Init.call(this.QD={I:this},0);C.R2._Init.call(this.R2={I:this
},0);C.RZ._Init.call(this.RZ={I:this},0);C.R0._Init.call(this.R0={I:this},0);C.RY.
_Init.call(this.RY={I:this},0);this.__proto__=C.AMw;this.RX.H(BD);this.RX.Aj(true
);this.RX.Bh(false);this.Aa1.H(I1);this.Aa1.Aj(true);this.Aa1.Bh(false);this.TE.
H(Qc);this.TE.Aj(true);this.TE.Bh(true);this.TD.H(Aai);this.TD.Aj(true);this.TD.
Bh(false);this.R1.H(Ale);this.R1.Aj(true);this.R1.Bh(true);this.QD.H(Aoj);this.QD.
Aj(true);this.QD.Bh(false);this.R2.H(As9);this.R2.Aj(true);this.R2.Bh(true);this.
RZ.H(U1);this.RZ.Aj(true);this.RZ.Bh(true);this.R0.H(AZk);this.R0.Aj(true);this.
R0.Bh(false);this.RY.H(AZl);this.RY.Aj(true);this.RY.Bh(true);this.J(this.RX,0);
this.J(this.Aa1,0);this.J(this.TE,0);this.J(this.TD,0);this.J(this.R1,0);this.J(
this.QD,0);this.J(this.R2,0);this.J(this.RZ,0);this.J(this.R0,0);this.J(this.RY,
0);},_Done:function(){this.__proto__=C.R3;this.RX._Done();this.Aa1._Done();this.
TE._Done();this.TD._Done();this.R1._Done();this.QD._Done();this.R2._Done();this.
RZ._Done();this.R0._Done();this.RY._Done();C.R3._Done.call(this);},_ReInit:function(
){C.R3._ReInit.call(this);this.RX._ReInit();this.Aa1._ReInit();this.TE._ReInit();
this.TD._ReInit();this.R1._ReInit();this.QD._ReInit();this.R2._ReInit();this.RZ.
_ReInit();this.R0._ReInit();this.RY._ReInit();this.CP();},_Mark:function(D){var B;
C.R3._Mark.call(this,D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMK={AkQ:function(L9){if(!L9)return;var Fw=A._NewObject(
A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CX(HY);var Ac8=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac8.Initialize(8,2,0,true);Fw.CX(Ac8);L9.Bk(Fw);
},AEa:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var RO=A.
_GetAutoObject(A.Device.Device).Bt.B8();if(RO<2)return false;var BCJ=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BCK=A._GetAutoObject(A.Device.Device).Bt.Hv(RO-1
,6);var A2r=A._NewObject(A.Core.Bs,0);A2r.Initialize(BCJ);var A4w=A._NewObject(A.
Core.Bs,0);A4w.Initialize(BCK);if((A2r.Ab1()!==A4w.Ab1())||(A2r.Year!==A4w.Year)
)return true;else return false;},_Init:function(aArg){C.Aa3._Init.call(this,aArg
);this.__proto__=C.AMK;this.ATt(C.AHs);this.ATu(C.ADE);this.ATj(C.QD);this.ArR(A.
aaR(A.acf.AV3));this.Dk(A.aaR(A.acf.Aki));},_ReInit:function(){C.Aa3._ReInit.call(
this);this.ArR(A.aaR(A.acf.AV3));this.Dk(A.aaR(A.acf.Aki));},_className:"Application::AnimalWeights"
};C.AMF={AkQ:function(L9){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CX(HY);var ABq=A._NewObject(A.Device.Int32FilterCriterion
,0);ABq.Initialize(7,2,0,true);Fw.CX(ABq);L9.Bk(Fw);},AEa:function(){return A._GetAutoObject(
A.Device.Device).Bt.B8()>0;},_Init:function(aArg){C.Aa3._Init.call(this,aArg);this.
__proto__=C.AMF;this.ATt(C.AVn);this.ATu(C.APK);this.ATj(C.TE);this.ArR(A.aaR(A.
acf.A75));this.Dk(A.aaR(A.acf.Aru));},_ReInit:function(){C.Aa3._ReInit.call(this
);this.ArR(A.aaR(A.acf.A75));this.Dk(A.aaR(A.acf.Aru));},_className:"Application::AnimalTemperatures"
};C.AUs={VH:null,VI:null,X3:null,AgF:null,KD:null,AP:null,A_:null,Ea:null,Ly:null
,AnS:null,KX:null,KY:null,ZQ:null,ZR:null,Init:function(aArg){},Bl:function(aSize
){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KD.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VH.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VH.M[2]-1,0,this.VH.M[2]+1,aSize[1]]);this.VI.H([this.VH.M[2],0,this.VH.M[2]+22,
aSize[1]]);this.Ly.H([this.VI.M[2]-1,0,this.VI.M[2]+1,aSize[1]]);this.X3.H([this.
VI.M[2],0,this.VI.M[2]+22,aSize[1]]);this.AnS.H([this.X3.M[2]-1,0,this.X3.M[2]+1
,aSize[1]]);this.AgF.H([this.X3.M[2],0,aSize[0],aSize[1]]);this.KX.H(this.VH.M);
this.KY.H(this.VI.M);this.ZQ.H(this.X3.M);this.ZR.H(this.AgF.M);},Ai:function(Ae
){C.A$.Ai.call(this,Ae);this.KD.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Hr=Ad;if(!!this.AX){var AlC=this.AX.Hv(Ad,6);var A1J=this.AX.Ja(Ad,3);var A2n=
this.AX.Ja(Ad,2);var A2m=this.AX.Ja(Ad,5);var A4k=this.AX.Ja(Ad,4);this.T(A._GetAutoObject(
A.acj.KQ).AC6(AlC));this.KD.R(A._GetAutoObject(A.acj.KQ).A6W(AlC));this.VH.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1J));this.VI.L(A._GetAutoObject(A.acj.Assessment).Qr(A2n));
this.X3.L(A._GetAutoObject(A.acj.Assessment).Qr(A2m));this.AgF.L(A._GetAutoObject(
A.acj.Assessment).Qr(A4k));this.KX.L(A._GetAutoObject(A.acj.Assessment).XD(A1J));
this.KY.L(A._GetAutoObject(A.acj.Assessment).XD(A2n));this.ZQ.L(A._GetAutoObject(
A.acj.Assessment).XD(A2m));this.ZR.L(A._GetAutoObject(A.acj.Assessment).XD(A4k));
this.KX.Z(A1J===5);this.KY.Z(A2n===5);this.ZQ.Z(A2m===5);this.ZR.Z(A4k===5);this.
Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.
VH={I:this},0);A.acg.AK._Init.call(this.VI={I:this},0);A.acg.AK._Init.call(this.
X3={I:this},0);A.acg.AK._Init.call(this.AgF={I:this},0);A.acg.Text._Init.call(this.
KD={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.AK._Init.call(this.
Ly={I:this},0);A.acg.AK._Init.call(this.AnS={I:this},0);A.acg.Text._Init.call(this.
KX={I:this},0);A.acg.Text._Init.call(this.KY={I:this},0);A.acg.Text._Init.call(this.
ZQ={I:this},0);A.acg.Text._Init.call(this.ZR={I:this},0);this.__proto__=C.AUs;this.
V.H(O$);this.VH.H(AZm);this.VI.H(AZn);this.X3.H(AZo);this.AgF.H(AZp);this.KD.R(Ro
);this.KD.L(A.jb.Text);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ea.L(A.jb.Bb);
this.Ly.L(A.jb.Bb);this.AnS.L(A.jb.Bb);this.KX.H(AZq);this.KX.R(Rq);this.KY.H(AZr
);this.KY.R(Rq);this.ZQ.H(AZs);this.ZQ.R(Rq);this.ZR.H(AZt);this.ZR.R(Rq);this.J(
this.VH,0);this.J(this.VI,0);this.J(this.X3,0);this.J(this.AgF,0);this.J(this.KD
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ly,0);this.
J(this.AnS,0);this.J(this.KX,0);this.J(this.KY,0);this.J(this.ZQ,0);this.J(this.
ZR,0);this.KD.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af
));this.ZQ.S(A.aaL(A.fl.Af));this.ZR.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.VH._Done();this.VI._Done();this.X3._Done();this.AgF._Done(
);this.KD._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ly._Done(
);this.AnS._Done();this.KX._Done();this.KY._Done();this.ZQ._Done();this.ZR._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.VH._ReInit(
);this.VI._ReInit();this.X3._ReInit();this.AgF._ReInit();this.KD._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AnS._ReInit(
);this.KX._ReInit();this.KY._ReInit();this.ZQ._ReInit();this.ZR._ReInit();this.KD.
S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.ZQ.S(
A.aaL(A.fl.Af));this.ZR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VI)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.API={Gp:null,Y2:null,YY:null,YZ:null,Y0:null,Y1:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gp={I:this},0);A.acg.Text._Init.call(this.Y2={I:this},0);A.acg.Text._Init.call(this.
YY={I:this},0);A.acg.Text._Init.call(this.YZ={I:this},0);A.acg.Text._Init.call(this.
Y0={I:this},0);A.acg.Text._Init.call(this.Y1={I:this},0);this.__proto__=C.API;this.
Background.L(A.jb.Text);this.Gp.H(AIA);this.Gp.A4(0x11);this.Gp.R(A.aaR(A.acf.Date
));this.Gp.L(A.jb.Bm);this.Y2.H(AIs);this.Y2.A4(0x12);this.Y2.R(A.aaR(A.acf.Bs));
this.Y2.L(A.jb.Bm);this.YY.H(AZu);this.YY.A4(0x12);this.YY.R(A.aaR(A.acf.AUu));this.
YY.L(A.jb.Bm);this.YZ.H(AZv);this.YZ.A4(0x12);this.YZ.R(A.aaR(A.acf.AUv));this.YZ.
L(A.jb.Bm);this.Y0.H(AZw);this.Y0.A4(0x12);this.Y0.R(A.aaR(A.acf.AOy));this.Y0.L(
A.jb.Bm);this.Y1.H(AZx);this.Y1.A4(0x12);this.Y1.R(A.aaR(A.acf.ANz));this.Y1.L(A.
jb.Bm);this.J(this.Gp,0);this.J(this.Y2,0);this.J(this.YY,0);this.J(this.YZ,0);this.
J(this.Y0,0);this.J(this.Y1,0);this.Gp.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af
));this.YY.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));
this.Y1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gp._Done();
this.Y2._Done();this.YY._Done();this.YZ._Done();this.Y0._Done();this.Y1._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gp._ReInit(
);this.Y2._ReInit();this.YY._ReInit();this.YZ._ReInit();this.Y0._ReInit();this.Y1.
_ReInit();this.Gp.R(A.aaR(A.acf.Date));this.Y2.R(A.aaR(A.acf.Bs));this.YY.R(A.aaR(
A.acf.AUu));this.YZ.R(A.aaR(A.acf.AUv));this.Y0.R(A.aaR(A.acf.AOy));this.Y1.R(A.
aaR(A.acf.ANz));this.Gp.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.YY.S(A.
aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));this.Y1.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMz={AkQ:function(L9){if(!L9)return;
var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CX(HY);var
AA9=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA9.Initialize(3,5,0,true
);Fw.CX(AA9);L9.Bk(Fw);},AEa:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B8()>0;},_Init:function(
aArg){C.Aa3._Init.call(this,aArg);this.__proto__=C.AMz;this.ATt(C.AUs);this.ATu(
C.API);this.ATj(C.TD);this.ArR(A.aaR(A.acf.Axq));this.Dk(A.aaR(A.acf.Anl));},_ReInit:
function(){C.Aa3._ReInit.call(this);this.ArR(A.aaR(A.acf.Axq));this.Dk(A.aaR(A.acf.
Anl));},_className:"Application::AnimalRatings"};C.IK={B7:null,Y:null,V:null,Uy:
5,T:function(E){C.I9.T.call(this,E);this.V.R(E);},Df:function(E){C.I9.Df.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},AuT:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dc(0x1))[2]-B[0])>((B=NK.M)[2]-B[0]))this.S(A.aaL(A.fl.HJ));},Ky:function(
E){if(this.Uy===E)return;this.Uy=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AA3:function(G){A.pe([this,this.AuT],this);},_Init:function(aArg){C.I9._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IK;this.Y.A1(0x3F);this.Y.H(AyE);this.Y.A_X(5);this.
Y.JZ(3);this.V.A1(0x34);this.V.H(Aak);this.V.Je(true);this.V.A4(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AA3];this.V.S(A.aaL(A.fl.Ks));},_Done:function(){this.__proto__=C.I9;this.Y._Done(
);this.V._Done();C.I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Ks));},_Mark:function(D){
var B;C.I9._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RX={AfR:0,Ai:function(Ae){C.Fy.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RS));if(this.AfR>=0)this.KA((this.AfR.toFixed(
)+CR)+A.aaR(A.acf.Kp));else this.KA(A.aaR(A.acf.Unknown));},Ch:function(G){C.Fy.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfR=-1;
else this.AfR=A._GetAutoObject(A.Device.Helper).W.RS();this.Am();},_Init:function(
aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemAge"
};C.R1={A42:0,Ai:function(Ae){C.Fy.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afv));if(
this.A42>0)this.KA((A._GetAutoObject(A.Device.Converter).Ak7(this.A42)+CR)+A._GetAutoObject(
A.acj.DU).Af4());else this.KA(A.aaR(A.acf.Unknown));},Ch:function(G){C.Fy.Ch.call(
this,G);this.A42=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.R1;},_className:
"Application::AnimalInfoItemWeight"};C.TE={Y:null,Ei:null,Ey:null,Fb:null,P0:null
,Fa:null,P1:null,Ajf:0,Pm:0,CP:function(){this.Am();},Ai:function(Ae){C.JQ.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Biq));this.Fb.R(this.Ajf.toFixed());this.Fa.R(this.Pm.
toFixed());if(!!this.Ajf||!!this.Pm)this.P1.R(AIC+(this.Ajf+this.Pm).toFixed());
else this.P1.R(A.aaR(A.acf.ASp));},Ch:function(G){C.JQ.Ch.call(this,G);var AkX;AkX=
A._GetAutoObject(A.Device.Helper).Bjq(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajf=AkX.Get(2);this.Pm=AkX.Get(1);this.Am();},Df:
function(E){C.JQ.Df.call(this,E);this.P0.L(E);this.P1.L(E);},AsP:function(G){if(
!!this.Ajf||!!this.Pm){this.Fb.Z(true);this.P0.Z(true);this.Fa.Z(true);}else{this.
Fb.Z(false);this.P0.Z(false);this.Fa.Z(false);}this.Ei.H(this.Fb.M);this.Ei.Z(this.
Fb.Fo());this.Ey.H(this.Fa.M);this.Ey.Z(this.Fa.Fo());},AuT:function(G){var B;var
NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;if(((B=NK.Dc(0x1))[2]-B[0])>((
B=NK.M)[2]-B[0])){this.Fa.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fb.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AA3:function(G){A.pe([this,this.AuT
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Ei={I:this},0);A.acg.AK._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fb={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fa={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TE;this.Y.H(AyF);this.Y.Bn7(0);this.Y.JZ(3);this.
Ei.H(AZy);this.Ei.L(A.jb.Ia);this.Ey.H(AyC);this.Ey.L(A.jb.Gk);this.Fb.A1(0x34);
this.Fb.H(Aak);this.Fb.Hn(2);this.Fb.Je(true);this.Fb.R(U3);this.Fb.L(A.jb.Text);
this.Fb.Aj(true);this.P0.A1(0x34);this.P0.H(Aak);this.P0.Je(true);this.P0.R(AIj);
this.P0.L(A.jb.Text);this.P0.Aj(true);this.Fa.A1(0x34);this.Fa.H(Aak);this.Fa.Hn(
2);this.Fa.Je(true);this.Fa.R(U3);this.Fa.L(A.jb.Bm);this.Fa.Aj(true);this.P1.A1(
0x34);this.P1.H(Aak);this.P1.Je(true);this.P1.R(Ro);this.P1.L(A.jb.Text);this.P1.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fb,0);
this.J(this.P0,0);this.J(this.Fa,0);this.J(this.P1,0);this.Y.Em=[this,this.AA3];
this.Fb.Q7([this,this.AsP]);this.Fb.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fa.Q7([this,this.AsP]);this.Fa.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JQ;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fb._Done();this.P0._Done();this.Fa._Done();this.P1._Done();C.JQ._Done.call(
this);},_ReInit:function(){C.JQ._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fb._ReInit();this.P0._ReInit();this.Fa._ReInit();this.P1.
_ReInit();this.Fb.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fa.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JQ._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QD={FX:0,Ig:0
,A2R:false,Ai:function(Ae){C.Fy.Ai.call(this,Ae);this.T(AZz+A.aaR(A.acf.AHn));if(
this.A2R){this.KA((A._GetAutoObject(A.Device.Converter).Td(this.FX,2,true)+CR)+A.
_GetAutoObject(A.acj.DU).Aay());this.Background.L(A._GetAutoObject(A.acj.DU).Az0(
this.FX,this.Ig));this.Df(A._GetAutoObject(A.acj.DU).Az2(this.FX,this.Ig));}else{
this.KA(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Df(A.jb.Text);}},Ch:
function(G){C.Fy.Ch.call(this,G);var LJ=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LJ){this.A2R=true;this.FX=A._GetAutoObject(A.acj.DU).Alz(LJ,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2R=false;this.FX=0;}this.Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.QD;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TD={Y:null,FY:null,Ei:
null,Ey:null,MQ:null,Fb:null,Fa:null,O4:null,Aaz:0,Ajf:0,Pm:0,CP:function(){this.
Am();},Ai:function(Ae){C.JQ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axq));this.MQ.R(
this.Aaz.toFixed());this.Fb.R(this.Ajf.toFixed());this.Fa.R(this.Pm.toFixed());}
,Ch:function(G){C.JQ.Ch.call(this,G);var AkX;AkX=A._GetAutoObject(A.Device.Helper
).A62(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aaz=AkX.Get(3);this.Ajf=AkX.Get(2);this.Pm=AkX.Get(1);this.Am();},AsP:
function(G){if((!!this.Aaz||!!this.Ajf)||!!this.Pm){this.MQ.Z(true);this.Fb.Z(true
);this.Fa.Z(true);this.O4.Z(false);}else{this.MQ.Z(false);this.Fb.Z(false);this.
Fa.Z(false);this.O4.Z(true);}this.FY.H(this.MQ.M);this.FY.Z(this.MQ.Fo());this.Ei.
H(this.Fb.M);this.Ei.Z(this.Fb.Fo());this.Ey.H(this.Fa.M);this.Ey.Z(this.Fa.Fo()
);},AuT:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dc(0x1))[2]-B[0])>((B=NK.M)[2]-B[0])){this.Fa.S(A.aaL(A.fl.Ak));this.Fb.
S(A.aaL(A.fl.Ak));this.MQ.S(A.aaL(A.fl.Ak));}},AA3:function(G){A.pe([this,this.AuT
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.FY={I:this},0);A.acg.AK._Init.call(this.Ei={
I:this},0);A.acg.AK._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MQ={
I:this},0);A.acg.Text._Init.call(this.Fb={I:this},0);A.acg.Text._Init.call(this.
Fa={I:this},0);A.acg.Text._Init.call(this.O4={I:this},0);this.__proto__=C.TD;this.
Y.A1(0x3F);this.Y.H(AyF);this.Y.A_X(5);this.Y.JZ(3);this.FY.H(AZA);this.FY.L(A.jb.
E1);this.Ei.H(AZB);this.Ei.L(A.jb.Ia);this.Ey.H(AZC);this.Ey.L(A.jb.Gk);this.MQ.
A1(0x3C);this.MQ.H(Aak);this.MQ.Hn(2);this.MQ.Je(true);this.MQ.R(U3);this.MQ.L(A.
jb.Text);this.MQ.Aj(true);this.Fb.A1(0x3C);this.Fb.H(Aak);this.Fb.Hn(2);this.Fb.
Je(true);this.Fb.R(U3);this.Fb.L(A.jb.Text);this.Fb.Aj(true);this.Fa.A1(0x3C);this.
Fa.H(Aak);this.Fa.Hn(2);this.Fa.Je(true);this.Fa.R(U3);this.Fa.L(A.jb.Bm);this.Fa.
Aj(true);this.O4.A1(0x34);this.O4.H(Aak);this.O4.Je(true);this.O4.A4(0x11);this.
O4.R(A.aaR(A.acf.ASp));this.O4.L(A.jb.Text);this.O4.Aj(true);this.O4.Z(false);this.
J(this.Y,0);this.J(this.FY,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MQ
,0);this.J(this.Fb,0);this.J(this.Fa,0);this.J(this.O4,0);this.Y.Em=[this,this.AA3
];this.MQ.Q7([this,this.AsP]);this.MQ.S(A.aaL(A.fl.Af));this.Fb.Q7([this,this.AsP
]);this.Fb.S(A.aaL(A.fl.Af));this.Fa.Q7([this,this.AsP]);this.Fa.S(A.aaL(A.fl.Af
));this.O4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JQ;this.Y._Done(
);this.FY._Done();this.Ei._Done();this.Ey._Done();this.MQ._Done();this.Fb._Done(
);this.Fa._Done();this.O4._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ.
_ReInit.call(this);this.Y._ReInit();this.FY._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MQ._ReInit();this.Fb._ReInit();this.Fa._ReInit();this.O4._ReInit(
);this.O4.R(A.aaR(A.acf.ASp));this.MQ.S(A.aaL(A.fl.Af));this.Fb.S(A.aaL(A.fl.Af)
);this.Fa.S(A.aaL(A.fl.Af));this.O4.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JQ._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMh={_Init:function(aArg){C.Aqc._Init.call(
this,aArg);this.__proto__=C.AMh;this.A5b=1;this.Rk.Cl(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqc._ReInit.call(this);this.Rk.Cl(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARb={OP:null,IV:null,H9:null,IT:null,GO:null,Al1:function(G){A.pe([this,this.
BAO],this);},BAO:function(G){A._GetAutoObject(C.A5).Cb(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OP._Init.call(this.OP={I:this},0);C.BX._Init.call(this.
IV={I:this},0);C.SW._Init.call(this.H9={I:this},0);C.AGQ._Init.call(this.IT={I:this
},0);C.Rb._Init.call(this.GO={I:this},0);this.__proto__=C.ARb;var B;this.Jf(A.aaR(
A.acf.A$Z));this.IV.H(AhY);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language));this.
IV.A_F(100);this.H9.H(U2);this.H9.Aj(true);this.H9.T(A.aaR(A.acf.Date));this.H9.
Bh(true);this.IT.H(Aaj);this.IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.GO.H(AhX
);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AGn));this.GO.Bh(true);
this.GO.Ar2(false);this.GO.A_N(true);this.J5(this.Y,-1);this.J5(this.Ay,-1);this.
J(this.IV,0);this.J(this.H9,0);this.J(this.IT,0);this.J(this.GO,0);this.IV.Zw(A.
aaL(A.fl.H5));this.IV.Zx(A.aaL(A.fl.H5));this.IV.Au([B=this.OP,B.B$,B.Cc]);this.
IV.CK(this.OP);this.H9.Ab2([B=this.H9,B.FW]);this.H9.Gs([this,this.D_,this.GS]);
this.H9.Akv(A.aaL(A.ach.Edit));this.H9.Ab8([B=A._GetAutoObject(A.Device.Helper),
B.U4,B.U7]);this.IT.Ab2([B=this.IT,B.FW]);this.IT.Gs([this,this.D_,this.GS]);this.
IT.Akv(A.aaL(A.ach.Edit));this.IT.Ab8([B=A._GetAutoObject(A.Device.Helper),B.U4,
B.U7]);this.GO.Ab2([B=this.GO,B.FW]);this.GO.Gs([this,this.D_,this.GS]);this.GO.
Akv(A.aaL(A.ach.Edit));this.GO.Au([B=A._GetAutoObject(A.Device.Device),B.ASR,B.A0G
]);},_Done:function(){this.__proto__=C.Cg;this.OP._Done();this.IV._Done();this.H9.
_Done();this.IT._Done();this.GO._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.OP._ReInit();this.IV._ReInit();this.H9._ReInit();
this.IT._ReInit();this.GO._ReInit();this.Jf(A.aaR(A.acf.A$Z));this.IV.T(A.aaR(A.
acf.Language));this.H9.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));this.GO.T(
A.aaR(A.acf.AGn));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa3={Bf:null,FC:null,AmZ:null,AmI:null,Si:null,A7m:A.jV,KR:A.jV,ARG:null,ARH:
null,ADx:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3p],[B=
A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId],0);this.A3p(this);},E3:function(
G){var B;A.z$([this,this.A3p],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId
],0);C.D9.E3.call(this,G);},Zy:function(E){C.D9.Zy.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bf)this.Bf.Zy(E);},ATt:function(E){if(this.ARG===E)return;this.
ARG=E;if(!!this.Bf)this.Bf.N8(E);},ATu:function(E){if(this.ARH===E)return;this.ARH=
E;this.BpB(this);},ATj:function(E){if(this.ADx===E)return;this.ADx=E;A.pe([this,
this.BpA],this);},ArR:function(E){if(this.A7m===E)return;this.A7m=E;this.Si.R(E);
},Dk:function(E){if(this.KR===E)return;this.KR=E;if(!!this.Bf)this.Bf.Dk(E);},AkQ:
function(L9){A.ab5("%s",AZD);},AEa:function(){A.ab5("%s",Ald);return false;},Axy:
function(G){if(!!this.Bf)this.HP(this.Bf);this.Bf=A._NewObject(C.Gd,0);this.Bf.H(
Atd);this.Bf.Zu(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dk(this.KR);this.Bf.
N8(this.ARG);this.Bf.Zy(this.AR);this.J(this.Bf,0);this.Ba(this.Bf);},BpB:function(
G){var B;if(!!this.FC)this.HP(this.FC);this.FC=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARH,0))?B:null);this.FC.H(I1);this.J(this.FC,0);},BpA:function(G){var B;if(
!!this.AmZ)this.HP(this.AmZ);if(!!this.ADx&&this.AEa()){this.AmZ=(C.I9.isPrototypeOf(
B=A._NewObject(this.ADx,0))?B:null);this.AmZ.H(BD);this.AmZ.Bh(false);this.J(this.
AmZ,0);this.Si.Z(false);}else this.Si.Z(true);},A3p:function(G){this.AkQ(A._GetAutoObject(
A.Device.Device).Bt);this.Axy(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmI={I:this},0);C.CG._Init.call(this.Si={I:this},
0);this.__proto__=C.Aa3;this.AmI.H(BD);this.AmI.L(A.jb.CJ);this.Si.H(AHS);this.Si.
A4(0x11);this.Si.L(A.jb.Text);this.J(this.AmI,0);this.J(this.Si,0);this.Si.S(A.aaL(
A.fl.Ks));this.Si.AY(A.aaL(A.fl.HJ));},_Done:function(){this.__proto__=C.D9;this.
AmI._Done();this.Si._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmI._ReInit();this.Si._ReInit();this.Si.S(A.aaL(A.fl.Ks));this.Si.
AY(A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kn={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BcY],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AIT],0);A.pe([this,this.BcY],this
);},Dt:function(){return 5;},Gm:function(aIndex){return this.AnimalListContentToString.
BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zs(E);},BcY:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kn;this.BI.Set(0,0);this.BI.Set(1,14);this.BI.Set(2,
1);this.BI.Set(3,2);this.BI.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARM={IV:null
,Zb:null,Zk:null,Zh:null,Zl:null,Zc:null,Zf:null,Zi:null,Zj:null,Ze:null,OP:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BX._Init.call(this.IV={I:this
},0);C.Np._Init.call(this.Zb={I:this},0);C.Np._Init.call(this.Zk={I:this},0);C.Np.
_Init.call(this.Zh={I:this},0);C.Np._Init.call(this.Zl={I:this},0);C.Np._Init.call(
this.Zc={I:this},0);C.Np._Init.call(this.Zf={I:this},0);C.Np._Init.call(this.Zi={
I:this},0);C.Np._Init.call(this.Zj={I:this},0);C.Np._Init.call(this.Ze={I:this},
0);C.OP._Init.call(this.OP={I:this},0);this.__proto__=C.ARM;var B;this.Jf(A.aaR(
A.acf.Settings));this.IV.H(AhY);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language)
);this.IV.A_F(100);this.Zb.H(Ate);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.ACI));this.
Zb.Ns(16);this.Zk.H(Atf);this.Zk.Aj(true);this.Zk.T(A.aaR(A.acf.AHi));this.Zk.Ns(
22);this.Zh.H(Atg);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.Temperature));this.Zh.
Ns(17);this.Zl.H(AyG);this.Zl.Aj(true);this.Zl.T(A.aaR(A.acf.ACF));this.Zl.Ns(42
);this.Zc.H(Aor);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Device));this.Zc.Ns(18);
this.Zf.H(Aor);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.Asn));this.Zf.Ns(19);this.
Zi.H(AZE);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.LinkTransponder));this.Zi.Ns(89
);this.Zj.H(AZF);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.UnlinkTransponder));this.
Zj.Ns(95);this.Ze.H(Ayv);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.ACX));this.Ze.Ns(
76);this.J(this.IV,0);this.J(this.Zb,0);this.J(this.Zk,0);this.J(this.Zh,0);this.
J(this.Zl,0);this.J(this.Zc,0);this.J(this.Zf,0);this.J(this.Zi,0);this.J(this.Zj
,0);this.J(this.Ze,0);this.IV.Zw(A.aaL(A.fl.H5));this.IV.Zx(A.aaL(A.fl.H5));this.
IV.Au([B=this.OP,B.B$,B.Cc]);this.IV.CK(this.OP);this.Zb.AR=[B=this.Zb,B.Nv];this.
Zk.AR=[B=this.Zk,B.Nv];this.Zh.AR=[B=this.Zh,B.Nv];this.Zl.AR=[B=this.Zl,B.Nv];this.
Zc.AR=[B=this.Zc,B.Nv];this.Zf.AR=[B=this.Zf,B.Nv];this.Zi.AR=[B=this.Zi,B.Nv];this.
Zj.AR=[B=this.Zj,B.Nv];this.Ze.AR=[B=this.Ze,B.Nv];},_Done:function(){this.__proto__=
C.Cg;this.IV._Done();this.Zb._Done();this.Zk._Done();this.Zh._Done();this.Zl._Done(
);this.Zc._Done();this.Zf._Done();this.Zi._Done();this.Zj._Done();this.Ze._Done(
);this.OP._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IV._ReInit();this.Zb._ReInit();this.Zk._ReInit();this.Zh._ReInit();this.Zl.
_ReInit();this.Zc._ReInit();this.Zf._ReInit();this.Zi._ReInit();this.Zj._ReInit(
);this.Ze._ReInit();this.OP._ReInit();this.Jf(A.aaR(A.acf.Settings));this.IV.T(A.
aaR(A.acf.Language));this.Zb.T(A.aaR(A.acf.ACI));this.Zk.T(A.aaR(A.acf.AHi));this.
Zh.T(A.aaR(A.acf.Temperature));this.Zl.T(A.aaR(A.acf.ACF));this.Zc.T(A.aaR(A.acf.
Device));this.Zf.T(A.aaR(A.acf.Asn));this.Zi.T(A.aaR(A.acf.LinkTransponder));this.
Zj.T(A.aaR(A.acf.UnlinkTransponder));this.Ze.T(A.aaR(A.acf.ACX));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMu={EU:null,Init:function(aArg){this.EU.Ahs(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.AgW)));},AUz:function(
){this.EU.AeY(this.AOW());this.AaB=!this.EU.EZ.A0;},AiU:function(G){this.EU.Ahs(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgW)));this.AUz();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dk(A.aaR(A.acf.A8t));else this.Dk(A.aaR(A.acf.Aru));this.Am();},AOW:function(
){var Bz=A._NewObject(C.Aqs,0);var Qo=A._GetAutoObject(A.Device.Helper).AOd(A._GetAutoObject(
A.Device.Helper).Du());var Dx=A._GetAutoObject(A.Device.Helper).Aqo(Qo-(86400*this.
MG));Bz.Anz(AZG);Bz.Q5([].concat(0,Bz.Gl.slice(1,4)));Bz.Q5(A.abN(Bz.Gl,(Qo-Dx)|
0));Bz.Q5(A.abP(Bz.Gl,3400));Bz.Q5([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();Bz.AwQ(Gi);Bz.Ym();if(Gi>0){var O=0;while(O<Gi){var ApS=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApT=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dx;if(ApS>0)Bz.Aqd(ApT,ApS);O=O+1;}}return Bz;},_Init:function(aArg
){C.Ld._Init.call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);this.__proto__=
C.AMu;this.EU.H(AZH);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFq(C.AG4);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.EU._Done(
);C.Ld._Done.call(this);},_ReInit:function(){C.Ld._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Ld._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMv={Z7:null,O7:null,AgR:null,AaB:false,Init:function(aArg){this.Z7.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgW)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgR.Z(this.AaB);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiU],[B=A._GetAutoObject(A.Device.
Helper),B.U4,B.U7],0);A.zV([this,this.AiU],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amd],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId],0
);A.pe([this,this.Amd],this);},E3:function(G){var B;A.z$([this,this.AiU],[B=A._GetAutoObject(
A.Device.Helper),B.U4,B.U7],0);A.z9([this,this.AiU],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amd],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId
],0);C.D9.E3.call(this,G);},Amd:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CX(HY);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},AiU:function(G){this.Z7.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgW)));this.BoW();this.Am();},BoW:function(
){var B;var Gi=A._GetAutoObject(A.Device.Device).Bt.B8();var Lb=A._NewObject(C.Aqs
,0);var Vu=A._NewObject(C.Aqs,0);var Qo=A._GetAutoObject(A.Device.Helper).AOd(A.
_GetAutoObject(A.Device.Helper).Du());var Dx=A._GetAutoObject(A.Device.Helper).Aqo(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Lb.Q5([].concat(0,Lb.Gl.slice(1
,4)));Lb.Q5(A.abN(Lb.Gl,(Qo-Dx)|0));Lb.Q5(A.abP(Lb.Gl,0));Lb.Q5([].concat(Lb.Gl.
slice(0,3),150000));Lb.Anz(AZI);Vu.Q5([].concat(0,Vu.Gl.slice(1,4)));Vu.Q5(A.abN(
Vu.Gl,(Qo-Dx)|0));Vu.Q5(A.abP(Vu.Gl,0));Vu.Q5([].concat(Vu.Gl.slice(0,3),1500));
Vu.Anz(AZJ);Lb.AwQ(Gi);Lb.Ym();Vu.AwQ(Gi);Vu.Ym();if(Gi>0){var O=0;var AaD=0;var
AAp=0;var AKb=0;var A2s=0;var BdC=true;while(O<Gi){var Al9=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaR=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dx;if(Al9>
0){Lb.Aqd(AaR,Al9);if(!A2s){A2s=AaR;AKb=Al9;}if(AAp>0){var LJ=A._GetAutoObject(A.
Device.Helper).Me(AAp,AaR);if(!!LJ){var FX=A._GetAutoObject(A.acj.DU).Alz(LJ,AaD
,Al9);if(BdC){Vu.Aqd(AAp,FX);BdC=false;}Vu.Aqd(AaR,FX);}}AaD=Al9;AAp=AaR;}O=O+1;
}var AdM=A.acf.Bhs;var FX=A._GetAutoObject(A.Device.Helper).Bjs(A2s,AAp,AKb,AaD);
AdM=A._GetAutoObject(A.Device.Helper).MO(AdM,Pa,FX.toFixed());AdM=A._GetAutoObject(
A.Device.Helper).MO(AdM,Ayg,A._GetAutoObject(A.acj.DU).Aay());this.O7.Io.R(AdM);
}this.AaB=!Lb.A0;if(this.AaB)this.O7.Io.R(A.jV);(C.O7.isPrototypeOf(B=this.O7.EU
)?B:null).Anu([B=A._GetAutoObject(A.Device.Helper).W,B.PV,B.EC]);this.Z7.AeY(Lb);
this.O7.AeY(Vu);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqW._Init.call(
this.Z7={I:this},0);C.AqW._Init.call(this.O7={I:this},0);C.AkO._Init.call(this.AgR={
I:this},0);this.__proto__=C.AMv;this.Z7.H(AZK);this.Z7.T(A.aaR(A.acf.Afv));this.
Z7.AFq(C.AM2);this.O7.H(Aos);this.O7.T(A.aaR(A.acf.AHn));this.O7.AFq(C.O7);this.
AgR.H(U0);this.AgR.R(A.aaR(A.acf.Aki));this.J(this.Z7,0);this.J(this.O7,0);this.
J(this.AgR,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z7._Done(
);this.O7._Done();this.AgR._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z7._ReInit();this.O7._ReInit();this.AgR._ReInit();this.
Z7.T(A.aaR(A.acf.Afv));this.O7.T(A.aaR(A.acf.AHn));this.AgR.R(A.aaR(A.acf.Aki));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgR)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMs={
Avg:null,Avf:null,Axs:null,AuO:null,VG:null,Abq:null,Abp:null,Acm:null,Afg:null,
Init:function(aArg){this.VG.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Du()).Format(A.aaR(A.acf.AgW)));},A4U:function(G){this.VG.Ab9(this.
AuO);this.Abq.Ab9(this.Avg);this.Abp.Ab9(this.Avf);this.Acm.Ab9(this.Axs);},Axr:
function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B8();this.AuO=A._NewObject(
C.Ajs,0);this.Avg=A._NewObject(C.Ajs,0);this.Avf=A._NewObject(C.Ajs,0);this.Axs=
A._NewObject(C.Ajs,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.Atx(this.AuO,O,3,D8);this.Atx(this.Avg,O,2,D8);this.
Atx(this.Avf,O,5,D8);this.Atx(this.Axs,O,4,D8);O=O-1;}}this.AaB=!(((this.AuO.A0+
this.Avf.A0)+this.Avg.A0)+this.Axs.A0);A.pe([this,this.A4U],this);},Atx:function(
A1s,Ad,A1r,Qi){var Alv=A._GetAutoObject(A.Device.Device).Bt.Ja(Ad,A1r);if(!!Alv)
A1s.OA(Alv,Qi);},Ab7:function(E){if(this.MG===E)return;C.Ld.Ab7.call(this,E);if(
!!this.VG)this.VG.Ab7(E);if(!!this.Abq)this.Abq.Ab7(E);if(!!this.Abp)this.Abp.Ab7(
E);if(!!this.Acm)this.Acm.Ab7(E);this.Afg.Ab7(E);},AiU:function(G){this.VG.Ahs(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(
A.aaR(A.acf.AgW)));this.Axr();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dk(A.aaR(A.acf.BkS));else this.Dk(A.aaR(A.acf.Anl));this.Am();},_Init:function(
aArg){C.Ld._Init.call(this,aArg);C.Ahx._Init.call(this.VG={I:this},0);C.Ahx._Init.
call(this.Abq={I:this},0);C.Ahx._Init.call(this.Abp={I:this},0);C.Ahx._Init.call(
this.Acm={I:this},0);C.AUw._Init.call(this.Afg={I:this},0);this.__proto__=C.AMs;
this.Dk(A.aaR(A.acf.Anl));this.VG.H(AZL);this.VG.R(A.aaR(A.acf.AGs));this.Abq.H(
AZM);this.Abq.R(A.aaR(A.acf.Feed));this.Abp.H(AZN);this.Abp.R(A.aaR(A.acf.AGu));
this.Acm.H(AZO);this.Acm.R(A.aaR(A.acf.AGv));this.Afg.H(AZP);this.J(this.VG,-1);
this.J(this.Abq,-1);this.J(this.Abp,-1);this.J(this.Acm,-1);this.J(this.Afg,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.VG._Done();this.Abq.
_Done();this.Abp._Done();this.Acm._Done();this.Afg._Done();C.Ld._Done.call(this);
},_ReInit:function(){C.Ld._ReInit.call(this);this.VG._ReInit();this.Abq._ReInit(
);this.Abp._ReInit();this.Acm._ReInit();this.Afg._ReInit();this.Dk(A.aaR(A.acf.Anl
));this.VG.R(A.aaR(A.acf.AGs));this.Abq.R(A.aaR(A.acf.Feed));this.Abp.R(A.aaR(A.
acf.AGu));this.Acm.R(A.aaR(A.acf.AGv));},_Mark:function(D){var B;C.Ld._Mark.call(
this,D);if((B=this.Avg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMt={EU:null,WN:null,Aei:null,A2P:false,Init:function(aArg){this.WN.Ahs(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du()).Format(A.aaR(A.acf.
AgW)));},Bl:function(aSize){C.Ld.Bl.call(this,aSize);this.Aei.H(this.EU.M);},Ai:
function(Ae){C.Ld.Ai.call(this,Ae);var BCl=!this.AaB&&this.A2P;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aei.R(A.aaR(A.acf.A8t));else this.
Aei.R(A.aaR(A.acf.Aru));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dk(A.aaR(
A.acf.BkT));else this.Dk(A.aaR(A.acf.BkU));this.Aei.Z(BCl);},AiU:function(G){this.
WN.Ahs(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Du(
)).Format(A.aaR(A.acf.AgW)));this.AaB=true;this.A2P=true;this.Axr();this.AUz();this.
Am();},AUz:function(){this.EU.AeY(this.AOW());if(!!this.EU.EZ&&(this.EU.EZ.A0>0)
){this.AaB=false;this.A2P=false;}},AOW:function(){var Bz=A._NewObject(C.Aqs,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOd(A._GetAutoObject(A.Device.Helper).Du());
var Dx=A._GetAutoObject(A.Device.Helper).Aqo(Qo-(86400*this.MG));Bz.Anz(AZQ);Bz.
Q5([].concat(0,Bz.Gl.slice(1,4)));Bz.Q5(A.abN(Bz.Gl,(Qo-Dx)|0));Bz.Q5(A.abP(Bz.Gl
,3400));Bz.Q5([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(A.Device.
Device).Bt.B8();Bz.AwQ(Gi);Bz.Ym();if(Gi>0){var O=0;while(O<Gi){var ApS=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApT=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dx;if(ApS>0)Bz.Aqd(ApT,ApS);O=O+1;}}return Bz;},BjH:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();if(Gi>0){var Bgj=A._NewObject(C.Ajs,0);var O=Gi-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.Fl(O,A._GetAutoObject(A.Device.Device
).Bt);var LV=A._GetAutoObject(A.Device.Helper).ADl(D3);if(!!LV)Bgj.OA(LV,D3.Timestamp
);O=O-1;}return Bgj;}else return null;},Axr:function(){this.WN.Ab9(this.BjH());if(
!!this.WN.N$&&(this.WN.N$.A0>0))this.AaB=false;},_Init:function(aArg){C.Ld._Init.
call(this,aArg);C.AqW._Init.call(this.EU={I:this},0);C.Ahx._Init.call(this.WN={I:
this},0);C.AkO._Init.call(this.Aei={I:this},0);this.__proto__=C.AMt;this.EU.H(Atd
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFq(C.AG4);this.WN.H(AZR);this.WN.
R(A.aaR(A.acf.Rating));this.Aei.H(Atd);this.J(this.EU,-2);this.J(this.WN,-2);this.
J(this.Aei,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.EU._Done(
);this.WN._Done();this.Aei._Done();C.Ld._Done.call(this);},_ReInit:function(){C.
Ld._ReInit.call(this);this.EU._ReInit();this.WN._ReInit();this.Aei._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WN.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Ld._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WU={Q:null,Gw:null,Gx:null
,QO:null,AM:0,Gr:0,Ga:100,FH:0,Init:function(aArg){},H0:function(G){this.FH=1;C.
Eg.H0.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QO.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QO.Z(this.Gr!==
this.Ga);this.QO.L(this.V.AQ);if((this.FH===4)||(this.FH===5))this.QO.L(A.jb.E1);
},Al2:function(G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay1],this);
this.Bo.As(false);}this.Bo.As(true);},Qu:function(G){if(this.FH===5)A.pe([this,this.
Ay1],this);if(this.FH===4)A.pe([this,this.Ay2],this);if(this.FH===1)A.pe(this.AR
,this);this.FH=0;this.Am();},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcT:function(s){this.C4(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcT],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcT],E,0);if(!!E)A.pe([this,this.AcT],this);},Al3:function(G){this.FH=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay2],this);this.Bo.As(false);}this.Bo.As(true
);},Kh:function(G){this.FH=0;},Ay2:function(s){this.Kh(s);},Kc:function(G){this.
FH=0;},Ay1:function(s){this.Kc(s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.
Ga)E=this.Ga;if(this.AM===E)return;this.AM=E;this.Am();},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(
this.Gw={I:this},0);A.Core.BF._Init.call(this.Gx={I:this},0);A.acg.Ap._Init.call(
this.QO={I:this},0);this.__proto__=C.WU;this.H(K2);this.Gw.Filter=5;this.Gx.Filter=
4;this.Background.H(K2);this.V.H(AcL);this.V.R(JE);this.QO.H(AyH);this.J(this.QO
,0);this.Gw.BG=[this,this.Al2];this.Gw.D1=[this,this.Al2];this.Gx.BG=[this,this.
Al3];this.Gx.D1=[this,this.Al3];this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak
));this.V.Cl(null);this.QO.Ax(A.aaL(A.ach.AMQ));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gw._Done();this.Gx._Done();this.QO._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gw._ReInit();this.Gx.
_ReInit();this.QO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUX={AC:null,CL:null,HN:
null,Bl:function(aSize){C.WU.Bl.call(this,aSize);this.CL.H([this.QO.M[2],this.QO.
M[1],this.M[2],this.QO.M[3]]);},Ai:function(Ae){C.WU.Ai.call(this,Ae);this.CL.AbH(
0,this.CL.A0-1);if(this.Gr!==this.Ga)this.QO.Z(true);},Init:function(aArg){},C4:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kh:function(G){var F;var BP=this.AM;C.WU.Kh.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(
this.AM)));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;C.WU.Kc.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gr
!==this.Ga){if(E<this.Gr){E=this.Ga;QA=-this.CL.GN*this.CL.A0;}if(E>this.Ga){E=this.
Gr;QA=this.CL.GN;}}C.WU.Bx.call(this,E);if(!!QA)this.CL.Gc(QA);this.CL.GT(this.AM
);this.CL.HI(this.CL.Gt,true,this.HN,null);},Hm:function(G){var B;var Gh=this.CL.
G5;var CA=(C.CG.isPrototypeOf(B=this.CL.Ci)?B:null);if(!CA)return;CA.S(this.V.B7
);CA.AY(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.
R(Xm);CA.H(A.abK(CA.M,[(B=this.CL.M)[2]-B[0],this.CL.GN]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gb(0);this.EV(this.AC.Dt()-1);this.CL.
JC(this.AC.Dt());this.CL.AbH(0,this.CL.A0-1);}},_Init:function(aArg){C.WU._Init.
call(this,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.acl.Gn._Init.call(this.
HN={I:this},0);this.__proto__=C.AUX;this.H(K2);this.QO.H(AID);this.CL.Ae6(40);this.
CL.N8(C.CG);this.HN.WK(23);this.HN.HO(1);this.HN.Fp(200);this.J(this.CL,0);this.
V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.CL.Hm=[this,this.Hm];this.Init(
aArg);},_Done:function(){this.__proto__=C.WU;this.CL._Done();this.HN._Done();C.WU.
_Done.call(this);},_ReInit:function(){C.WU._ReInit.call(this);this.CL._ReInit();
this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WU._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R2={ALB:0
,Ai:function(Ae){C.Fy.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHn));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KA((A._GetAutoObject(A.Device.Converter).Ak7(this.ALB
)+CR)+A._GetAutoObject(A.acj.DU).Af4());else this.KA(A.aaR(A.acf.Unknown));},Ch:
function(G){C.Fy.Ch.call(this,G);this.ALB=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fy._Init.call(this,aArg);this.__proto__=C.R2;},_className:"Application::AnimalInfoItemWeightGain"
};C.APz={Bb:null,De:null,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Device),B.AEK,B.AIS],0);},DX:function(G){C.IP.DX.call(this,G);this.De.Ax(
A._GetAutoObject(A.Device.Converter).BhH(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.C7._Init.call(this.Bb={I:
this},0);A.acg.Ap._Init.call(this.De={I:this},0);this.__proto__=C.APz;this.Bb.DD(
Alh);this.Bb.DN(AyI);this.Bb.L(A.jb.Bb);this.De.H(AZS);this.De.L(A.jb.Text);this.
J(this.Bb,0);this.J(this.De,0);this.De.Ax(A.aaL(A.ach.AjS));this.Init(aArg);},_Done:
function(){this.__proto__=C.IP;this.Bb._Done();this.De._Done();C.IP._Done.call(this
);},_ReInit:function(){C.IP._ReInit.call(this);this.Bb._ReInit();this.De._ReInit(
);},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANC={ZO:null,KE:null,Mu:null,Timer:null,ACw:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZO.R(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Brd),Pa,this.ACw.
toFixed()));},CC:function(G){this.Timer.As(true);},E3:function(G){this.Timer.As(
false);},BBA:function(G){if(this.ACw>1){this.ACw=this.ACw-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).Axz();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZO={I:this},0);A.acg.Text.
_Init.call(this.KE={I:this},0);A.acg.Ap._Init.call(this.Mu={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANC;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZO.H(AZT);this.ZO.Lv(true);this.ZO.R(A.jV);this.ZO.L(A.jb.
Text);this.KE.H(AZU);this.KE.Lv(true);this.KE.R(A.aaR(A.acf.A5L));this.KE.L(A.jb.
Text);this.Mu.H(AIE);this.J(this.ZO,0);this.J(this.KE,0);this.J(this.Mu,0);this.
ZO.S(A.aaL(A.fl.Af));this.KE.S(A.aaL(A.fl.Af));this.Mu.Ax(A.aaL(A.ach.AB2));this.
Timer.MK=[this,this.BBA];},_Done:function(){this.__proto__=C.AB;this.ZO._Done();
this.KE._Done();this.Mu._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZO._ReInit();this.KE._ReInit();this.Mu._ReInit(
);this.Timer._ReInit();this.KE.R(A.aaR(A.acf.A5L));this.ZO.S(A.aaL(A.fl.Af));this.
KE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANj={KE:null,Amz:null
,QG:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad9.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa8<=10)this.KE.R(A.aaR(A.acf.BhT));else this.KE.R(A.aaR(A.acf.
A5M));},_Init:function(aArg){C.Ad9._Init.call(this,aArg);A.acg.Text._Init.call(this.
KE={I:this},0);A.acg.Ap._Init.call(this.Amz={I:this},0);C.CG._Init.call(this.QG={
I:this},0);this.__proto__=C.ANj;this.SX.H(AZV);this.Mu.H(AZW);this.KE.H(AZX);this.
KE.Lv(true);this.KE.L(A.jb.Text);this.Amz.H(AIE);this.QG.H(AZY);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUx));this.QG.L(A.jb.Text);this.J(this.KE,0);this.J(this.Amz
,0);this.J(this.QG,0);this.KE.S(A.aaL(A.fl.Af));this.Amz.Ax(A.aaL(A.ach.AB2));this.
QG.S(A.aaL(A.fl.Af));this.QG.AY(A.aaL(A.fl.Ak));this.QG.Cl(A.aaL(A.fl.Bg));},_Done:
function(){this.__proto__=C.Ad9;this.KE._Done();this.Amz._Done();this.QG._Done();
C.Ad9._Done.call(this);},_ReInit:function(){C.Ad9._ReInit.call(this);this.KE._ReInit(
);this.Amz._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUx));this.KE.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.AY(A.aaL(A.fl.Ak));this.QG.Cl(A.aaL(
A.fl.Bg));this.CP();},_Mark:function(D){var B;C.Ad9._Mark.call(this,D);if((B=this.
KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMf={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMf;this.
RW.As(false);this.RW.Aj(false);this.RW.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVZ={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AVZ;this.
Tc.As(false);this.Tc.Aj(false);this.Tc.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO3={DX:function(G){C.Ku.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).AdY(5));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=
C.AO3;},_className:"Application::HeaderControlListFilter"};C.APB={DX:function(G){
C.Ku.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).AdY(6));},_Init:
function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APB;},_className:"Application::HeaderWatchListFilter"
};C.APF={D0:null,Nh:null,_Init:function(aArg){C.T0._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nh={I:this},0);this.__proto__=
C.APF;this.D0.H(Aoo);this.D0.R(A.aaR(A.acf.A6h));this.D0.L(A.jb.Text);this.Nh.H(
AZZ);this.Nh.L(A.jb.Text);this.Nh.A4(0x12);this.J(this.D0,-2);this.J(this.Nh,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(A.fl.Bg));this.Nh.Ax(A.aaL(A.ach.ADP)
);},_Done:function(){this.__proto__=C.T0;this.D0._Done();this.Nh._Done();C.T0._Done.
call(this);},_ReInit:function(){C.T0._ReInit.call(this);this.D0._ReInit();this.Nh.
_ReInit();this.D0.R(A.aaR(A.acf.A6h));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.T0._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANe={Ch:function(Ad){C.Ajz.Ch.call(this,Ad);if(
!!this.AX){var Os=this.AX.H6(Ad,8);var BC9=this.AX.So(Ad,21);this.Abi.R(A._GetAutoObject(
A.Device.Helper).Me(BC9,A._GetAutoObject(A.Device.Helper).Du()).toFixed());this.
Su.Z(Os);this.Am();}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=
C.ANe;},_className:"Application::CalfListWatchItem"};C.T0={Ag7:null,Ag9:null,_Init:
function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag7={I:this},
0);A.acg.Ap._Init.call(this.Ag9={I:this},0);this.__proto__=C.T0;this.Ag7.H(AZ0);
this.Ag7.L(A.jb.Text);this.Ag7.A4(0x12);this.Ag9.H(AZ1);this.Ag9.L(A.jb.Text);this.
Ag9.A4(0x12);this.J5(this.DS,-1);this.J(this.Ag7,0);this.J(this.Ag9,0);this.Ag7.
Ax(A.aaL(A.ach.Ara));this.Ag9.Ax(A.aaL(A.ach.Ag3));},_Done:function(){this.__proto__=
C.Dd;this.Ag7._Done();this.Ag9._Done();C.Dd._Done.call(this);},_ReInit:function(
){C.Dd._ReInit.call(this);this.Ag7._ReInit();this.Ag9._ReInit();},_Mark:function(
D){var B;C.Dd._Mark.call(this,D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqs={Gl:A.wg,OL:A.wf,Q5:function(E){if(A.aaY(this.Gl,E))return;this.Gl=E;},Anz:
function(E){if(A.aaX(this.OL,E))return;this.OL=E;},_Init:function(aArg){A.acv.ACv.
_Init.call(this,aArg);this.__proto__=C.Aqs;},_className:"Application::BoundCoordList"
};C.Ajz={T5:null,WA:null,T6:null,WC:null,Su:null,Zm:null,Abi:null,AP:null,A_:null
,Ea:null,Ly:null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T5.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WA.H(this.T5.M);this.A_.H([this.T5.
M[2]-1,0,this.T5.M[2]+1,aSize[1]]);this.T6.H([this.T5.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WC.H(this.T6.M);this.Ea.H([this.T6.M[2]-1,0,this.T6.M[2]+1,aSize[
1]]);this.Su.H([this.T6.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zm.H(this.Su.
M);this.Ly.H([this.Su.M[2]-1,0,this.Su.M[2]+1,aSize[1]]);this.Abi.H([this.Su.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);var La=this.V.AQ;
this.T5.AE$(La);this.WA.L(La);this.T6.AE$(La);this.WC.L(La);this.Su.AE$(La);this.
Zm.L(La);this.Abi.L(La);this.Zm.Z(!this.Su.Fo());},Ch:function(Ad){if(!this.AX)return;
this.Hr=Ad;var Mn=this.AX.CE(Ad,1);var Ig=this.AX.AmU(Ad,14);var Auq=this.AX.CE(
Ad,5);var LV=this.AX.Ja(Ad,13);this.T(Mn.toFixed());if(!!LV){this.T5.Z(true);this.
T5.AwG(A._GetAutoObject(A.acj.Assessment).BdK(LV));this.WA.Z(false);}else{this.T5.
Z(false);this.WA.Z(true);}if(Auq>0){this.T6.Z(true);this.T6.AwG(A._GetAutoObject(
A.acj.Assessment).BdK(A._GetAutoObject(A.Device.Converter).AsI(Ig,Auq)));this.WC.
Z(false);}else{this.T6.Z(false);this.WC.Z(true);}this.Am();},_Init:function(aArg
){C.A$._Init.call(this,aArg);C.Ko._Init.call(this.T5={I:this},0);A.acg.Text._Init.
call(this.WA={I:this},0);C.Ko._Init.call(this.T6={I:this},0);A.acg.Text._Init.call(
this.WC={I:this},0);C.Ko._Init.call(this.Su={I:this},0);A.acg.Text._Init.call(this.
Zm={I:this},0);A.acg.Text._Init.call(this.Abi={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ea={I:this},0);A.acg.AK._Init.call(this.Ly={I:this},0);this.__proto__=C.Ajz;this.
WA.H(AZ2);this.WA.R(Aop);this.WC.H(Aoq);this.WC.R(Aop);this.Su.AwG(A.jb.Ri);this.
Zm.H(Aoq);this.Zm.R(Rq);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ea.L(A.jb.Bb);
this.Ly.L(A.jb.Bb);this.J(this.T5,0);this.J(this.WA,0);this.J(this.T6,0);this.J(
this.WC,0);this.J(this.Su,0);this.J(this.Zm,0);this.J(this.Abi,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.Ly,0);this.WA.S(A.aaL(A.fl.Af
));this.WC.S(A.aaL(A.fl.Af));this.Zm.S(A.aaL(A.fl.Af));this.Abi.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.T5._Done();this.WA.
_Done();this.T6._Done();this.WC._Done();this.Su._Done();this.Zm._Done();this.Abi.
_Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.Ly._Done();C.A$._Done.
call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.T5._ReInit();this.WA.
_ReInit();this.T6._ReInit();this.WC._ReInit();this.Su._ReInit();this.Zm._ReInit(
);this.Abi._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea._ReInit();this.
Ly._ReInit();this.WA.S(A.aaL(A.fl.Af));this.WC.S(A.aaL(A.fl.Af));this.Zm.S(A.aaL(
A.fl.Af));this.Abi.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Py:null,And:null
,EZ:null,DR:null,Arn:0,Aro:0,A7L:0,AmL:0,AqF:0,Init:function(aArg){this.ATe(6);this.
ATf(8);this.ATq(A.jb.AV);this.ATr(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bmz([this.DR.Abe[0],(B=this.DR.M)[3]-B[1]]);this.WO(this);},ATd:function(
E){if(this.Py===E)return;this.Py=E;this.DR.ATd(E);},ATr:function(E){if(this.Aro===
E)return;this.Aro=E;this.DR.ATr(E);},ATq:function(E){if(this.Arn===E)return;this.
Arn=E;this.DR.ATq(E);this.DR.BmD(E);},WO:function(G){var B;while(!!this.DR.Ah)this.
HP(this.DR.Ah);if(!this.EZ)return;this.DR.Anz([((this.EZ.OL[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gl[2]-this.EZ.Gl[0]))|0,this.DR.OL[1]]);this.DR.Anz([this.DR.OL[0]
,((this.EZ.OL[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.Gl[1]))|0]);var O;
var Dh=this.DR.OL[1];var D8;var A45=this.EZ.Gl[1];var BkR=(((B=this.DR.M)[3]-B[1
])/this.DR.OL[1])|0;for(O=0;O<BkR;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dh))-(this.And.Ascent+this.And.Descent))+2,((B=this.M)[2]-
B[0])-this.Aro,(((B=this.M)[3]-B[1])-(O*Dh))+2]);D8.L(this.A7L);D8.S(this.And);D8.
A4(0x24);if(O>0)D8.R(this.AJP(A45));else D8.R(this.AKl());A45=A45+this.EZ.OL[1];
this.J(D8,0);}},BGP:function(s){this.WO(s);},Bnt:function(E){if(this.And===E)return;
this.And=E;this.Am();},AzA:function(A09){var B;if(!this.EZ||(this.EZ.Gl[3]===this.
EZ.Gl[1]))return 0;return(((A09-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[
3]-this.EZ.Gl[1]))|0;},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.AeY(null);else{var Bz=A._NewObject(A.acv.ACv,0);Bz.AwQ(this.EZ.AEq);Bz.Ym();var
JF=E.AlJ;while(!!JF){Bz.Aqd(this.By9(JF.P7),this.By_(JF.P8));JF=JF.Ah;}this.DR.AeY(
Bz);this.Am();}},By9:function(Bxl){var B;if(!this.EZ||(this.EZ.Gl[2]===this.EZ.Gl[
0]))return 0;return((Bxl-this.EZ.Gl[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gl[2]-this.
EZ.Gl[0]);},By_:function(A09){var B;if(!this.EZ||(this.EZ.Gl[3]===this.EZ.Gl[1])
)return 0;return((A09-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.
Gl[1]);},AJP:function(AoN){return AoN.toFixed();},AKl:function(){return A.jV;},ATf:
function(E){if(this.AmL===E)return;this.AmL=E;this.DR.ATf(E);},ATe:function(E){if(
this.AqF===E)return;this.AqF=E;this.DR.ATe(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIF);this.A7L=A.jb.Text;this.DR.A1(0x3F);this.DR.H(AIF);this.DR.BnT(AZ3);this.
DR.Bmn(A.jb.Ri);this.DR.Bna(A.jb.Bb);this.DR.Boe(A.jb.Ri);this.J(this.DR,0);this.
Py=A.aaL(A.acv.ACO);this.And=A.aaL(A.fl.Bg);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bnt(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Py)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.And)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM2={AJP:function(AoN){return A._GetAutoObject(
A.Device.Converter).Ax2(AoN,0);},AKl:function(){return A._GetAutoObject(A.acj.DU
).Af4();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AM2;}
,_className:"Application::BodyWeightGraph"};C.O7={JR:null,Ey:null,Ei:null,FY:null
,IL:null,IM:null,Init:function(aArg){this.ATd(null);},WO:function(G){var B;var F;
C.DR.WO.call(this,G);var AKR=0;var ALG=0;if(!!this.JR){AKR=this.AzA(A._GetAutoObject(
A.Device.Helper).ADk((F=this.JR,F[1].call(F[0]))));ALG=this.AzA(A._GetAutoObject(
A.Device.Helper).ADj((F=this.JR,F[1].call(F[0]))));}this.FY.H(A.abP(this.FY.M,0)
);this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.M)[3]-B[1])-ALG));this.IL.H(
A.abO(this.IL.M,(this.FY.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FY.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AKR));this.IM.H(A.abO(this.IM.M,(this.Ei.M[3]-((((B=this.IM.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJP:function(AoN){return A._GetAutoObject(A.Device.Converter
).Td(AoN,0,true);},AKl:function(){return A._GetAutoObject(A.acj.DU).Aay();},Anu:
function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.AiM],this.JR
,0);this.JR=E;if(!!E)A.zX([this,this.AiM],E,0);if(!!E)A.pe([this,this.AiM],this);
},AiM:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ey={I:this},0);A.acg.AK._Init.call(this.Ei={I:this},0);A.
acg.AK._Init.call(this.FY={I:this},0);A.acg.AK._Init.call(this.IL={I:this},0);A.
acg.AK._Init.call(this.IM={I:this},0);this.__proto__=C.O7;this.Ey.A1(0xD);this.Ey.
H(Aae);this.Ey.L(A.jb.Gk);this.Ei.A1(0xD);this.Ei.H(Tg);this.Ei.L(A.jb.Ia);this.
FY.A1(0xD);this.FY.H(Aad);this.FY.L(A.jb.E1);this.IL.A1(0xD);this.IL.H(Aag);this.
IL.Awu(A.jb.Ia);this.IL.Awv(A.jb.Ia);this.IL.Awx(A.jb.E1);this.IL.Aww(A.jb.E1);this.
IM.A1(0xD);this.IM.H(Xk);this.IM.Awu(A.jb.Gk);this.IM.Awv(A.jb.Gk);this.IM.Awx(A.
jb.Ia);this.IM.Aww(A.jb.Ia);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY
,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done();this.IL._Done();this.
IM._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FY._ReInit();this.IL._ReInit();this.IM._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JR)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqW={EU:null,EZ:null,Sd:null,Io:
null,Bb:null,AxJ:A.jV,DL:A.jV,AOY:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bb.H([].concat([0,aSize[1]-2],aSize));this.Sd.
H([30,0,aSize[0]-2,30]);this.Io.H(this.Sd.M);if(!!this.EU)this.EU.H([30,this.Sd.
M[3],aSize[0],this.Bb.M[1]]);},Ahs:function(E){if(this.AxJ===E)return;this.AxJ=E;
this.Io.R(E);},T:function(E){if(this.DL===E)return;this.DL=E;this.Sd.R(E);},AFq:
function(E){if(this.AOY===E)return;this.AOY=E;this.Bpy(this);},Bpy:function(G){var
B;if(!!this.EU)this.HP(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOY,0))?B:null);if(!!this.EU){this.EU.H(AZ4);this.EU.AeY(this.EZ);this.J(this.EU
,0);}},AeY:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.AeY(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sd={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0);A.acg.AK._Init.call(this.
Bb={I:this},0);this.__proto__=C.AqW;this.H(AcO);this.As(false);this.Sd.H(AIG);this.
Sd.A4(0x11);this.Sd.R(JE);this.Sd.L(A.jb.Text);this.Io.A4(0x14);this.Io.R(A.jV);
this.Io.L(A.jb.Text);this.Bb.H(AZ5);this.Bb.L(A.jb.Bb);this.J(this.Sd,0);this.J(
this.Io,0);this.J(this.Bb,0);this.Sd.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sd._Done();this.
Io._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sd._ReInit();this.Io._ReInit();this.Bb._ReInit();this.
Sd.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMB={AgA:null,GT:function(E
){var F;C.Gd.GT.call(this,E);if(!!this.AgA)(F=this.AgA,F[2].call(F[0],E));},A9Y:
function(E){if(A.aaZ(this.AgA,E))return;if(!!this.AgA)A.z$([this,this.A3q],this.
AgA,0);this.AgA=E;if(!!E)A.zX([this,this.A3q],E,0);if(!!E)A.pe([this,this.A3q],this
);},A3q:function(G){var F;if(!this.AgA)return;(F=this.AgA,F[2].call(F[0],this.FO(
)));},_Init:function(aArg){C.Gd._Init.call(this,aArg);this.__proto__=C.AMB;},_Mark:
function(D){var B;C.Gd._Mark.call(this,D);if((B=this.AgA)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUw={Rg:null
,P2:null,X1:null,X2:null,MG:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.BkL),Pa,this.MG.toFixed()));},Ab7:function(E){if(
this.MG===E)return;this.MG=E;this.BB$(this);},BB$:function(G){var B;var AJW=(((B=
this.M)[2]-B[0])/this.MG)|0;this.X1.H(A.abM(this.X1.M,(((B=this.M)[2]-B[0])-(this.
MG*AJW))+(((AJW/2)-(((B=this.X1.M)[2]-B[0])/2))|0)));this.X2.H(A.abM(this.X2.M,(((
B=this.M)[2]-B[0])-AJW)+(((AJW/2)-(((B=this.X2.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
X1={I:this},0);A.acg.Text._Init.call(this.X2={I:this},0);this.__proto__=C.AUw;this.
H(BD);this.Rg.H(AIH);this.Rg.Hn(5);this.Rg.A4(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AZ6);this.P2.Hn(5);this.P2.A4(0x14);this.P2.R(A.aaR(A.acf.AhO));this.P2.L(A.jb.
Text);this.X1.H(AZ7);this.X1.R(AyJ);this.X1.L(A.jb.Text);this.X2.H(AZ8);this.X2.
R(AyJ);this.X2.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.X1,0
);this.J(this.X2,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.X1.
S(A.aaL(A.fl.H5));this.X2.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.X1._Done();this.X2._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.X1._ReInit();this.X2._ReInit();this.P2.R(A.aaR(A.acf.AhO
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Ld={V_:null,AjF:null,KR:A.jV,MG:0,AaB:false,Init:function(aArg){var A17=A._NewObject(
C.Kp,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RS()<A17.
C6(O))A17.Ank=O+1;this.V_.CK(A17);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjF.
Z(this.AaB);if(this.AaB)this.Ba(null);else this.Ba(this.V_);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V_.Q,F[1].call(F[0])))(F=this.V_.Q,F[2].
call(F[0],this.V_.AC.C6(0)));A.zX([this,this.AI7],[B=A._GetAutoObject(A.Device.Helper
),B.U4,B.U7],0);A.zV([this,this.AI7],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amd],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId],0);A.pe([this
,this.Amd],this);},E3:function(G){var B;A.z$([this,this.AI7],[B=A._GetAutoObject(
A.Device.Helper),B.U4,B.U7],0);A.z9([this,this.AI7],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amd],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId
],0);C.D9.E3.call(this,G);},Zy:function(E){if(A.aa0(this.AR,E))return;C.D9.Zy.call(
this,E);this.V_.AR=E;},Ab7:function(E){if(this.MG===E)return;this.MG=E;A.pe([this
,this.Amd],this);},BwW:function(Aq){this.Ab7(Aq);},AiU:function(G){},AI7:function(
s){this.AiU(s);},Dk:function(E){if(this.KR===E)return;this.KR=E;this.AjF.R(E);},
Amd:function(G){var Fw=A._NewObject(A.Device.Filter,0);var AzJ=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzJ.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhO()-((this.MG-1)*86400))-1,true);Fw.CX(AzJ);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CX(HY);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},BlH:function(){return this.MG;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUX._Init.call(this.V_={I:this},0);C.AkO._Init.call(
this.AjF={I:this},0);this.__proto__=C.Ld;this.V_.H(BD);this.AjF.H(U0);this.J(this.
V_,0);this.J(this.AjF,0);this.V_.Au([this,this.BlH,this.BwW]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V_._Done();this.AjF._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V_._ReInit();this.AjF.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANJ={Wf:null,YS:null,RatingMode:null,PK:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Np._Init.call(this.Wf={I:this},0);C.
BX._Init.call(this.YS={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iu._Init.call(this.PK={I:this},0);this.__proto__=C.ANJ;var B;this.Hj.R(A.
aaR(A.acf.ACF));this.Jf(A.aaR(A.acf.A6b));this.Wf.H(Ath);this.Wf.Aj(true);this.Wf.
T(A.aaR(A.acf.AsU));this.Wf.Bh(true);this.Wf.Ns(23);this.YS.H(AZ9);this.YS.Aj(true
);this.YS.T(A.aaR(A.acf.A$u));this.YS.Bh(false);this.PK.H(AZ_);this.PK.Aj(true);
this.PK.T(A.aaR(A.acf.A5_));this.PK.Bh(true);this.PK.Gb(3);this.PK.EV(14);this.PK.
IW(A.aaR(A.acf.Kp)+Ati);this.PK.Jg(A.aaR(A.acf.GK)+Ati);this.J(this.Wf,0);this.J(
this.YS,0);this.J(this.PK,0);this.Wf.AR=[B=this.Wf,B.Nv];this.YS.Au([B=this.RatingMode
,B.B$,B.Cc]);this.YS.CK(this.RatingMode);this.PK.Au([B=A._GetAutoObject(A.Device.
Device),B.A82,B.BbD]);},_Done:function(){this.__proto__=C.Cg;this.Wf._Done();this.
YS._Done();this.RatingMode._Done();this.PK._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wf._ReInit();this.YS._ReInit();this.RatingMode.
_ReInit();this.PK._ReInit();this.Hj.R(A.aaR(A.acf.ACF));this.Jf(A.aaR(A.acf.A6b)
);this.Wf.T(A.aaR(A.acf.AsU));this.YS.T(A.aaR(A.acf.A$u));this.PK.T(A.aaR(A.acf.
A5_));this.PK.IW(A.aaR(A.acf.Kp)+Ati);this.PK.Jg(A.aaR(A.acf.GK)+Ati);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au6={Init:function(aArg){this.V.Text.A4(0x11);this.V.Text.Hn(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GD=this.Bo.Bw;var FT=A.jb.Ad$;var GY=A.jb.Bm;if(this.Hl){FT=A.jb.Bm;GY=A.jb.
Text;}if(!He){this.Background.L(FT);this.V.L(A.jb.CJ);}else if(GD){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FT);this.V.L(GY);}this.LM=He;this.KL=Fu;this.Qv=GD;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au6;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADs={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PV,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BR.Df.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADp));break;case 1:this.Ap.Ax(A.aaL(A.ach.APj));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APl));break;default:A.ab5("%s%e",AyK,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADs;this.Ap.H(AyL);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADp));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADt={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PV,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BR.
Df.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADq));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APk));break;case 2:this.Ap.Ax(A.aaL(A.ach.APm));break;default:A.ab5("%s%e"
,AyK,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADt;
this.Ap.H(AyL);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADq));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fy={BU:null,AxX:A.jV,Df:function(E){C.JQ.Df.call(
this,E);this.BU.L(E);},KA:function(E){if(this.AxX===E)return;this.AxX=E;this.BU.
R(E);},_Init:function(aArg){C.JQ._Init.call(this,aArg);C.CG._Init.call(this.BU={
I:this},0);this.__proto__=C.Fy;this.BU.A1(0x34);this.BU.H(AyF);this.BU.A4(0x11);
this.BU.L(A.jb.Text);this.J(this.BU,0);this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(
A.fl.Ak));this.BU.Cl(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.JQ;this.
BU._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ._ReInit.call(this);this.
BU._ReInit();this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));this.BU.Cl(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.JQ._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOH={WF:function(G){var B;this.Agv();this.AuF(A.aaR(A.acf.BjU),[this,this.Bou],[
B=A._GetAutoObject(A.Device.Device),B.A83,B.BbE]);A._GetAutoObject(C.BS).Fx();this.
I8(A.aaR(A.acf.AVy),[this,this.ATW],5);this.I8(A.aaR(A.acf.AVw),[this,this.ATV],
7);this.I8(A.aaR(A.acf.AnZ),[this,this.AwT],2);this.I8(A.aaR(A.acf.AdT),[this,this.
AE7],1);this.I8(A.aaR(A.acf.AuD),[this,this.AE1],0);A._GetAutoObject(C.BS).Fx();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dv(6);},DF:function(G){},Abu:function(){return C.ACh;},Abv:function(
){return C.ADA;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A68());},HQ:function(G){var F;C.GI.HQ.call(this,G);if(this.Ake(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajo((F=this.Fk,F[1].call(
F[0]))));this.N.Ce=[this,this.Aal];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false
);},Agh:function(){A._GetAutoObject(C.A5).Cb(44);},Bou:function(G){A._GetAutoObject(
A.Device.Device).AwJ(!A._GetAutoObject(A.Device.Device).AqR);this.An7(this);},An7:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E9();var Aw=Be.DM(
30,3);if(!!Aw)Be.Nw(Aw);if(A._GetAutoObject(A.Device.Device).AqR){var AAo=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2Z=A._GetAutoObject(A.Device.Helper).Du()-
21600;AAo.Initialize(30,3,A2Z,true);Be.CX(AAo);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GI._Init.call(this,aArg);this.__proto__=C.AOH;
var B;this.Dq(C.APf);this.Dk(A.aaR(A.acf.A8q));this.AwO([B=A._GetAutoObject(A.Device.
Device),B.A81,B.BbC]);},_ReInit:function(){C.GI._ReInit.call(this);this.Dk(A.aaR(
A.acf.A8q));},_className:"Application::FreshCowListScreen"};C.AOG={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOG;this.Lh.As(false);this.Lh.
Aj(false);this.Lh.Z(false);this.Jv.As(false);this.Jv.Aj(false);this.Jv.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APf={DX:function(G){C.Ku.
DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).AdY(7));},_Init:
function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APf;},_className:"Application::HeaderFreshCowListFilter"
};C.ADA={JB:null,D0:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CG._Init.
call(this.JB={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADA;
this.A_i(1);this.JB.H(AZ$);this.JB.R((A.aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.A$8)
);this.JB.L(A.jb.Text);this.D0.H(A0a);this.D0.R(A.aaR(A.acf.AEi));this.D0.L(A.jb.
Text);this.J(this.JB,0);this.J(this.D0,0);this.JB.S(A.aaL(A.fl.Ak));this.JB.AY(A.
aaL(A.fl.Bg));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.Dd;this.JB._Done();this.D0._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.JB._ReInit();this.D0._ReInit();this.JB.R((
A.aaR(A.acf.Calving)+AcQ)+A.aaR(A.acf.A$8));this.D0.R(A.aaR(A.acf.AEi));this.JB.
S(A.aaL(A.fl.Ak));this.JB.AY(A.aaL(A.fl.Bg));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.JB).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACh={AG5:null,KU:null,UI:null,AP:null,A_:null
,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UI.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A_.H([this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[
1]]);this.KU.H([this.UI.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(
this,Ae);this.KU.L(this.V.AQ);this.UI.Df(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Hr=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.CE(Ad,1);
var A2Y=this.AX.CE(Ad,29);var AlB=this.AX.Hv(Ad,28);this.T(Mn.toFixed());this.KU.
R(A2Y.toFixed());this.UI.Ab7(A._GetAutoObject(A.Device.Device).AqQ+1);this.UI.Bn8(
AlB);this.UI.R(A._GetAutoObject(A.acj.KQ).AjJ(AlB));A._GetAutoObject(A.Device.Device
).SV(Ad);this.Ap2(ID);this.Axr();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4U:function(G){this.UI.Ab9(this.AG5);},Axr:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();this.AG5=A._NewObject(C.Ajs,0);if(Gi>0){var O=Gi-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6);this.Atx(this.AG5,O,9,
D8);O=O-1;}}A.pe([this,this.A4U],this);},Atx:function(A1s,Ad,A1r,Qi){var Alv=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ad,A1r);if(!!Alv)A1s.OA(Alv,Qi);},Ap2:function(Ac5){var Fw=
A._NewObject(A.Device.Filter,0);var AzJ=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzJ.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZT(A._GetAutoObject(A.Device.
Device).AqQ)-1,true);Fw.CX(AzJ);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,Ac5,true);Fw.CX(HY);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KU={I:this},0);C.AUr._Init.call(this.UI={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.ACh;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.J(this.KU,0);this.J(this.UI,0);this.J(this.AP
,0);this.J(this.A_,0);this.KU.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.KU._Done();this.UI._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.KU._ReInit(
);this.UI._ReInit();this.AP._ReInit();this.A_._ReInit();this.KU.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AG5)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUr={AVa:0,Init:function(aArg){},AOO:function(){return A._GetAutoObject(A.Device.
Helper).Aqo(this.AVa);},AOQ:function(){return this.AOO()+(this.MG*86400);},Bn8:function(
E){if(this.AVa===E)return;this.AVa=E;A.pe([this,this.WO],this);},_Init:function(
aArg){C.Ahx._Init.call(this,aArg);this.__proto__=C.AUr;this.Bb.H(A0b);this.Bn5(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dt:function(){if(this.K&&this.K.Dt)return this.K.
Dt.apply(this,arguments);else return C.FactoryResetScope.BuV.apply(this,arguments
);},BuV:function(){return 3;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BT(this.C6(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BI.
Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);var J_=this._variants();if(J_){this.K={
};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acq.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bg8:false,Init:function(aArg){this.Bg8=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bec){A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(
A.Device.Device).An);if(this.Bg8)A._GetAutoObject(A.Device.Device).AZ(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AZ(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASo={WF:function(G){this.
Agv();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.Settings),[this,this.A3Z]);A._GetAutoObject(
C.BS).Fx();this.AMb();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARD)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dv(6);},DF:function(G){},Abu:function(
){return C.Aqt;},Abv:function(){return C.Aq0;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADc());},HQ:function(G){C.
Mo.HQ.call(this,G);if(this.Ake()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajo(A._GetAutoObject(A.Device.Converter).AL8(this.L2.ADe())));this.N.Ce=[this,
this.Aal];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false);},Agh:function(){A.
_GetAutoObject(C.A5).Cb(47);},A3Z:function(G){A._GetAutoObject(A.Device.Device).
Dv(0);A._GetAutoObject(C.A5).Cb(89);},_Init:function(aArg){C.Mo._Init.call(this,
aArg);this.__proto__=C.ASo;this.Dq(C.ADu);this.Dk(A.aaR(A.acf.A8m));this.ATs(A._GetAutoObject(
C.Av4));},_ReInit:function(){C.Mo._ReInit.call(this);this.Dk(A.aaR(A.acf.A8m));}
,_className:"Application::NoTransponderListScreen"};C.ASn={_Init:function(aArg){
C.I_._Init.call(this,aArg);this.__proto__=C.ASn;this.KZ.As(false);this.KZ.Aj(false
);this.KZ.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADu={DX:function(G){C.Ku.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).AdY(8));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.ADu;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB1={AuS:null,Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuS.BT(aIndex);},_Init:
function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuS={I:this},0);this.__proto__=C.AB1;},_Done:function(){this.__proto__=
C.Ge;this.AuS._Done();C.Ge._Done.call(this);},_ReInit:function(){C.Ge._ReInit.call(
this);this.AuS._ReInit();},_Mark:function(D){var B;C.Ge._Mark.call(this,D);if((B=
this.AuS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL7={Co:null,Ad1:null,Init:function(aArg){this.Ba(this.Co);},Lr:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaJ];this.BQ.Ce=null;
this.BQ.Ca=[this,this.A3A];this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C2(A.aaL(A.
ach.Aez));}return this.BQ;},AAE:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad1)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AII);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajh._Init.call(this.
Co={I:this},0);C.Ajh._Init.call(this.Ad1={I:this},0);this.__proto__=C.AL7;this.H(
Rp);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(I1);this.Co.T(A.aaR(A.acf.
AEs));this.Ad1.H(Qc);this.Ad1.T(A.aaR(A.acf.TB));this.J(this.Co,0);this.J(this.Ad1
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAE];this.Ad1.AR=[this,this.
AAE];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Co._Done();this.
Ad1._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Co._ReInit();this.Ad1._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEs));this.Ad1.T(A.aaR(A.acf.TB));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BF_={Undefined:0,BF8:1,BF9:2,IdScanned:3,BE4:4,BD_:5,BEO:6};C.AMj={A$Q:function(
){A._GetAutoObject(A.Device.Device).AZ(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfJ]);},_Init:function(aArg){C.AuK._Init.call(
this,aArg);this.__proto__=C.AMj;this.Ge.Au(1);this.ATy(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aet={V2:null,V3:null,V4:null,Ag0:null,Ag1:null,Ag2:null,CF:null,Ce:null,Ca:null
,An0:A.jV,An1:A.jV,An2:A.jV,Aq8:0,Aq9:0,Aq_:0,Ahi:0,ZG:false,WQ:false,Aso:false,
AsD:false,AsC:false,Ajy:function(Fd){this.CF=Fd.CF;this.Ce=Fd.Ce;this.Ca=Fd.Ca;this.
An0=Fd.An0;this.An1=Fd.An1;this.An2=Fd.An2;this.Ahi=Fd.Ahi;this.V2=Fd.V2;this.V3=
Fd.V3;this.V4=Fd.V4;this.Ag0=Fd.Ag0;this.Ag1=Fd.Ag1;this.Ag2=Fd.Ag2;this.AsC=Fd.
AsC;this.AsD=Fd.AsD;this.Aso=Fd.Aso;this.WQ=Fd.WQ;this.ZG=Fd.ZG;this.Aq8=Fd.Aq8;
this.Aq9=Fd.Aq9;this.Aq_=Fd.Aq_;},AkN:function(Fd){Fd.CF=this.CF;Fd.Ce=this.Ce;Fd.
Ca=this.Ca;Fd.Hy(this.An0);Fd.E5(this.An1);Fd.CS(this.An2);Fd.AFv(this.Ahi);Fd.AFn(
this.V2);Fd.ArP(this.V3);Fd.Any(this.V4);Fd.C2(this.Ag0);Fd.Ct(this.Ag1);Fd.C3(this.
Ag2);Fd.OU(this.AsC);Fd.OV(this.AsD);Fd.Aso=this.Aso;Fd.WQ=this.WQ;Fd.ZG=this.ZG;
Fd.Bnc(this.Aq8);Fd.ATm(this.Aq9);Fd.A_u(this.Aq_);},_Init:function(aArg){this.__proto__=
C.Aet;this.V2=A.aaL(A.fl.Ak);this.V3=A.aaL(A.fl.Ak);this.V4=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V2=A.aaL(
A.fl.Ak);this.V3=A.aaL(A.fl.Ak);this.V4=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V3)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag1)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asz._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dq(C.ADs);},_className:"Application::NewAnimalSetTransponderScreen"};C.C8={Abf:null
,CountryToString:null,Dt:function(){return 40;},C6:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.LA(aIndex);},DZ:function(A9){return A9;
},H7:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abf)(F=this.Abf,F[2].call(F[0],E));},A10:function(G){var F;if(!!this.Abf)this.Q=(
F=this.Abf,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cc],0);},AFg:
function(E){if(A.aaZ(this.Abf,E))return;if(!!this.Abf)A.z$([this,this.A10],this.
Abf,0);this.Abf=E;if(!!this.Abf)A.zX([this,this.A10],this.Abf,0);A.pe([this,this.
A10],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C8;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abf)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O6={AC:null,Q:null,Background:null,Is:null,Ir:null,M$:
0,AM:0,Gr:0,Ga:0,Agd:function(G){this.Kh(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IF=((Ae&0x40)===0x40);if(IF){this.Background.
L(A.jb.AV);this.CZ(256);}else{this.Background.L(this.M$);this.CZ(256);}},Agc:function(
G){this.Kc(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3X],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3X],E,0);if(!!E)A.pe([this
,this.A3X],this);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Am();},Kh:
function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Kc:function(
G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gr)E=this.Ga;if(E>this.Ga)E=this.Gr;if(this.AM===E)return;this.AM=E;
this.Am();},Gb:function(E){if(this.Gr===E)return;this.Gr=E;this.Am();},EV:function(
E){if(this.Ga===E)return;this.Ga=E;this.Am();},C4:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},A3X:function(G){var F;if(!!this.
AC){this.Gb(0);this.EV(this.AC.H7());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BF._Init.call(this.Is={
I:this},0);A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.O6;this.H(AIJ
);this.Background.H(Ali);this.Is.Filter=4;this.Ir.Filter=5;this.M$=A.jb.CJ;this.
J(this.Background,0);this.Is.BG=[this,this.Agd];this.Is.D1=[this,this.Agd];this.
Ir.BG=[this,this.Agc];this.Ir.D1=[this,this.Agc];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Is._Done();this.Ir._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Is._ReInit();this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RY={A1S:A.jV,Ai:function(
Ae){C.Fy.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5W));this.KA(this.A1S);},Ch:function(
G){C.Fy.Ch.call(this,G);var AlB=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlB)this.A1S=Xm;else this.A1S=A._GetAutoObject(A.acj.KQ).AjJ(AlB);this.Am();
},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.RY;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RZ={A2X:0,Ai:function(Ae){C.Fy.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARB));if(this.A2X>0)this.KA(this.A2X.toFixed());else
this.KA(A.aaR(A.acf.Unknown));},Ch:function(G){C.Fy.Ch.call(this,G);this.A2X=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fy._Init.call(
this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dt:function(){return 5;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akt(E);},A2h:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Cc],0);},L5:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2h],[B=this.Animal,B.ASF,B.Akt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2h],[B=this.Animal,B.ASF,B.Akt],0);A.pe([this,this.A2h],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dt:function(){return 99;},C6:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BT(aIndex);},DZ:function(A9){return A9;
},H7:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N7(E);},A1Q:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Cc],0);},L5:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1Q],[B=this.Animal,B.Av9,B.N7],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1Q],[B=this.Animal,B.Av9,B.N7],0);A.pe([
this,this.A1Q],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARX={Wb:null,YQ:null,AeM:null,Init:function(
aArg){this.Ba(this.Wb);},Adt:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YQ)this.ByD();else if(Aa===this.Wb)this.BBp(this);else throw new
Error(Aym);A._GetAutoObject(A.Device.Device).Dv(0);},BBp:function(G){var B;var F;
var Vq=(C.Amt.isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null
);if(!Vq){A.ab5("%s",A0c);return;}Vq.AKH(this);},ByD:function(){A._GetAutoObject(
A.Device.Helper).W.AGN(true);A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.My._Init.call(this.Wb={I:this},0);C.My._Init.call(this.YQ={
I:this},0);C.VV._Init.call(this.AeM={I:this},0);this.__proto__=C.ARX;var B;this.
H(AcO);this.Wb.H(Qc);this.Wb.As(true);this.Wb.T(A.aaR(A.acf.A$w));this.Wb.Bh(true
);this.YQ.H(I1);this.YQ.As(true);this.YQ.T(A.aaR(A.acf.A5i));this.YQ.Bh(true);this.
AeM.H(BD);this.AeM.T(A.aaR(A.acf.AC2));this.AeM.Bh(true);this.J(this.Wb,0);this.
J(this.YQ,0);this.J(this.AeM,0);this.Wb.AR=[this,this.Adt];this.YQ.AR=[this,this.
Adt];this.AeM.AS$([B=A._GetAutoObject(A.Device.Device),B.Arx,B.Atl]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wb._Done();this.YQ._Done(
);this.AeM._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wb._ReInit();this.YQ._ReInit();this.AeM._ReInit();this.Wb.
T(A.aaR(A.acf.A$w));this.YQ.T(A.aaR(A.acf.A5i));this.AeM.T(A.aaR(A.acf.AC2));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VV={
Ai:function(Ae){C.Ud.Ai.call(this,Ae);var FT=A.jb.CJ;var GY=A.jb.Text;if(this.Hl
){FT=A.jb.Text;GY=A.jb.Bm;}if(!this.LM){this.Background.L(FT);this.V.L(A.jb.Am2);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.
L(GY);}if(this.AmB){this.Mv.Cw(1);this.Mv.L(A.jb.Ia);}else{this.Mv.Cw(0);this.Mv.
L(A.jb.Bm);}},_Init:function(aArg){C.Ud._Init.call(this,aArg);this.__proto__=C.VV;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AvX={C9:null,A3:null,AF:
null,Akf:null,QZ:null,EM:null,ASd:JE,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FT=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FT=A.jb.Bm;GY=A.jb.Text;}this.Background.
L(FT);this.V.L(GY);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Cu;C.Co.Ai.call(this
,Ae);this.Akf.L(this.V.AQ);this.QZ.L(this.V.AQ);this.QZ.R(A0d);this.T(((this.ASd+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).Ak3(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A23=this.QZ.Aff([(this.QZ.String.length-(F=this.
AF,F[1].call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4m=this.QZ.Aff([this.
QZ.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABr=this.QZ.Dc();this.EM.H([
A23[0]-1,ABr[1],A4m[0]+1,ABr[3]]);}else this.EM.H(this.QZ.Dc());},DC:function(E){
if(this.C9===E)return;this.C9=E;this.Akf.Ax(E);},OS:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaI],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},PW:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaK],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaK],E,0);if(!!E)A.pe([this,this.AaK],this);},AaK:function(G){this.Am(
);},AaI:function(G){this.Am();},Ar1:function(E){if(this.ASd===E)return;this.ASd=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akf={I:this},0);A.acg.Text._Init.call(this.QZ={I:this},0);A.acg.BW._Init.call(
this.EM={I:this},0);this.__proto__=C.AvX;this.H(K2);this.V.A4(0x11);this.Akf.H(O_
);this.QZ.H(A0e);this.EM.H(A0f);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Akf
,0);this.J(this.QZ,0);this.J(this.EM,0);this.QZ.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akf._Done();this.QZ._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akf._ReInit();this.
QZ._ReInit();this.EM._ReInit();this.QZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUm:0,Init:
function(aArg){var B;A.zX([this,this.Be4],[B=A._GetAutoObject(A.Device.Device),B.
AEK,B.AIS],0);A.pe([this,this.Be4],this);},HQ:function(G){C.TF.HQ.call(this,G);if(
this.AjN)this.N.Ct(A.aaL(A.ach.AD));else this.N.Ct(A.aaL(A.ach.ANk));this.N.C3(A.
aaL(A.ach.Options));this.N.E5(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.A$e];this.
N.Ca=[this,this.WF];this.N.ArP(A.aaL(A.fl.Ak));this.N.Any(A.aaL(A.fl.Ak));},M6:function(
G){this.Bfo(this);},Ov:function(G){this.BBi(this);},AdQ:function(Aic,Aid,BxH){A.
_GetAutoObject(C.BS).ABS(Aic,Aid,[this,this.A9m,this.ATC],BxH);},WF:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjN){A._GetAutoObject(C.BS).
TC(A.aaR(A.acf.Biw),[this,this.Boq]);A._GetAutoObject(C.BS).Fx();}this.AdQ(A.aaR(
A.acf.Rating),[this,this.AT3],3);this.AdQ(A.aaR(A.acf.Afv),[this,this.AT5],2);this.
AdQ(A.aaR(A.acf.Temperature),[this,this.AT4],1);this.AdQ(A.aaR(A.acf.AdT),[this,
this.Bon],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BiA
));A._GetAutoObject(A.Device.Device).Dv(6);},ATC:function(E){if(this.AUm===E)return;
this.AUm=E;A.abo([this,this.A9m,this.ATC],0);},Be4:function(G){this.ATC(A._GetAutoObject(
A.Device.Device).D9);},A9m:function(){return this.AUm;},_Init:function(aArg){C.TF.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VD:null
,Init:function(aArg){var B;A.zX([this,this.AaH],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bhc],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TF.CC.call(this,G);A.pe([this,this.Bhh],this);},AGT:function(G){C.TF.AGT.call(
this,G);if(!!this.Lj)this.AhA(this.Lj,this.VD);},HQ:function(G){C.TF.HQ.call(this
,G);this.N.Ct(A.aaL(A.ach.AQ_));this.N.C3(A.aaL(A.ach.AQ$));if(this.AjN)this.N.ATm(
0);else this.N.ATm(1);this.N.A_u(A._GetAutoObject(A.Device.Converter).BhG(A._GetAutoObject(
A.Device.Device).D9));this.N.E5(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.Bmd];
this.N.Ca=[this,this.Bos];this.N.ArP(A.aaL(A.fl.Ak));this.N.Any(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QL()){this.N.IS.CZ(100);this.N.Ce=null;
}else this.N.IS.CZ(255);if(!A._GetAutoObject(A.Device.Device).An.B8()){this.N.Li.
CZ(100);this.N.Ca=null;}else this.N.Li.CZ(255);if(A._GetAutoObject(A.Device.Device
).An.B8()<=1){this.N.T2.CZ(100);this.N.T3.CZ(100);}else{this.N.T2.CZ(255);this.N.
T3.CZ(255);}},M6:function(G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)return;
var LI=A._GetAutoObject(A.Device.Helper).W.CQ;LI=LI+1;if(LI>=A._GetAutoObject(A.
Device.Device).An.B8())LI=0;A._GetAutoObject(A.Device.Helper).GQ(LI);},Ov:function(
G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)return;var LI=A._GetAutoObject(
A.Device.Helper).W.CQ;LI=LI-1;if(LI<0)LI=A._GetAutoObject(A.Device.Device).An.B8(
)-1;A._GetAutoObject(A.Device.Helper).GQ(LI);},Af_:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A5).Cb(94);},Bmd:function(G){A._GetAutoObject(
A.Device.Device).Dv(10);},Bos:function(G){this.Bfo(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).MC());A.pe([this,this.Bhh
],this);},Bhc:function(G){if(!A._GetAutoObject(A.Device.Device).An.B8()){this.VD.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QL()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VD.R(A.aaR(A.acf.AEA));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADd(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VD.R(A.aaR(A.acf.AN$));else this.VD.R(A.aaR(
A.acf.AN_));}else this.VD.R(A.aaR(A.acf.ASk));}else this.VD.Z(false);},Bhh:function(
G){var BCg=A._GetAutoObject(A.Device.Helper).W.Id;var A4p=A._GetAutoObject(A.Device.
Device).An.LY(0,BCg);if(!A._GetAutoObject(A.Device.Device).An.B8())A._GetAutoObject(
A.Device.Helper).GQ(-1);else if(A4p<0)A._GetAutoObject(A.Device.Helper).GQ(0);},
AaH:function(G){this.Bhc(this);this.HQ(this);},_Init:function(aArg){C.TF._Init.call(
this,aArg);C.AkO._Init.call(this.VD={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dq(C.APy);this.VD.H(Fc);this.J(this.VD,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TF;this.VD._Done();C.TF._Done.call(this);},_ReInit:function(){
C.TF._ReInit.call(this);this.VD._ReInit();},_Mark:function(D){var B;C.TF._Mark.call(
this,D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMy={QT:null,Wc:null,AbJ:null,YT:null,Init:function(aArg){var B;var F;this.Ba(
this.QT);if(!!A._GetAutoObject(C.A5).Q){var Vq=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vq){A.ab5("%s",AyM);
return;}else{if(Vq.AjN)this.QT.T(A.aaR(A.acf.Bf));else this.QT.T(A.aaR(A.acf.EU)
);var AzF=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzF||A._GetAutoObject(
A.Device.Helper).Are(AzF))this.YT.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B8()){this.Wc.As(false);this.QT.As(false);}}}},Adt:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dv(0);if(
Aa===this.AbJ)A._GetAutoObject(C.A5).Cb(9);else if(Aa===this.Wc)A._GetAutoObject(
A.Device.Device).Dv(7);else if(Aa===this.QT)this.BCL();else if(Aa===this.YT)this.
A1Y();else throw new Error(Aym);},BCL:function(){var B;var F;var Vq=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vq){A.
ab5("%s",AyM);return;}Vq.A$e(this);},A1Y:function(){var B;var F;var Vq=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vq){A.
ab5("%s",AyM);return;}Vq.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.My._Init.call(this.QT={I:this},0);C.My._Init.call(this.Wc={I:this},
0);C.My._Init.call(this.AbJ={I:this},0);C.My._Init.call(this.YT={I:this},0);this.
__proto__=C.AMy;this.H(AfE);this.QT.H(Aai);this.QT.As(true);this.QT.T(A.aaR(A.acf.
EU));this.QT.Bh(true);this.Wc.H(Qc);this.Wc.As(true);this.Wc.T(A.aaR(A.acf.AUN));
this.Wc.Bh(true);this.AbJ.H(I1);this.AbJ.T(A.aaR(A.acf.AkQ));this.AbJ.Bh(true);this.
YT.H(BD);this.YT.T(A.aaR(A.acf.ACn));this.YT.Bh(true);this.J(this.QT,0);this.J(this.
Wc,0);this.J(this.AbJ,0);this.J(this.YT,0);this.QT.AR=[this,this.Adt];this.Wc.AR=[
this,this.Adt];this.AbJ.AR=[this,this.Adt];this.YT.AR=[this,this.Adt];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QT._Done();this.Wc._Done(
);this.AbJ._Done();this.YT._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QT._ReInit();this.Wc._ReInit();this.AbJ.
_ReInit();this.YT._ReInit();this.QT.T(A.aaR(A.acf.EU));this.Wc.T(A.aaR(A.acf.AUN
));this.AbJ.T(A.aaR(A.acf.AkQ));this.YT.T(A.aaR(A.acf.ACn));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jc={T4:null,EA:null,Yr:null,Background:null,Ap:null,Is:null,Ir:null,M$:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var He=((Ae&0x10)===0x10
);var IF=((Ae&0x40)===0x40);if(IF){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.CZ(256);}else if(He){this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(
256);}else{this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T4,[B=A._GetAutoObject(A.Device.
Device),B.Awh,B.AyY]))this.Ap.Cw(2);else if(A.aaZ(this.T4,[B=A._GetAutoObject(A.
Device.Device),B.Awg,B.AyX]))this.Ap.Cw(3);else if(!!this.Yr&&((F=this.Yr,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T4,[B=A._GetAutoObject(
A.Device.Device),B.Awh,B.AyY]))this.Ap.Cw(6);else if(A.aaZ(this.T4,[B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyX]))this.Ap.Cw(7);else if(!!this.Yr&&((F=this.Yr,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agd:function(G){this.Kh(this
);},Agc:function(G){this.Kc(this);},Kh:function(G){this.Bx(1);},Kc:function(G){this.
Bx(-1);},Bnm:function(E){if(A.aaZ(this.T4,E))return;if(!!this.T4)A.z$([this,this.
A3G],this.T4,0);this.T4=E;if(!!E)A.zX([this,this.A3G],this.T4,0);A.pe([this,this.
A3G],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agb],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agb],this.EA,0);if(!!E)A.pe([this
,this.Agb],this);},A3G:function(G){var F;if(!!this.T4)this.Bx((F=this.T4,F[1].call(
F[0])));},Agb:function(G){A.pe([this,this.BCY],this);},CV:function(E){if(this.M$===
E)return;this.M$=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T4)(F=this.T4,F[2].call(F[0],E));this.Am();A.abo([this,this.Uk,this.
Bx],0);},A_k:function(E){if(A.aaZ(this.Yr,E))return;if(!!this.Yr)A.z$([this,this.
Agb],this.Yr,0);this.Yr=E;if(!!E)A.zX([this,this.Agb],this.Yr,0);if(!!E)A.pe([this
,this.Agb],this);},BCY:function(G){var F,Cu;if(!this.Yr||!this.EA)return;this.Bnm(
A._GetAutoObject(A.Device.Helper).BdR((F=this.Yr,F[1].call(F[0])),(Cu=this.EA,Cu[
1].call(Cu[0]))));this.Am();},Uk:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);
A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.Jc;this.H(Atj);this.Background.
A1(0x3F);this.Background.H(Atj);this.Ap.A1(0x3C);this.Ap.H(Atj);this.Is.Filter=4;
this.Ir.Filter=5;this.M$=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVc));this.Is.BG=[this,this.Agd];this.Ir.BG=[this,this.Agc];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Is._Done();this.Ir._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Is._ReInit(
);this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL6={WF:function(G){var B;var F;this.Agv();if(!!A._GetAutoObject(A.Device.Helper
).AOM((F=this.Fk,F[1].call(F[0])),0,true))this.AuF(A.aaR(A.acf.A7n),[this,this.Bot
],[B=A._GetAutoObject(A.Device.Device),B.A8E,B.Bbl]);else A._GetAutoObject(C.BS).
AaX(A.aaR(A.acf.A7n));A._GetAutoObject(C.BS).Fx();this.I8(A.aaR(A.acf.LinkTransponder
),[this,this.BnD],8);this.I8(A.aaR(A.acf.TB),[this,this.Akq],9);this.I8(A.aaR(A.
acf.Bar),[this,this.Bof],10);this.I8(A.aaR(A.acf.AGq),[this,this.ATH],3);this.I8(
A.aaR(A.acf.AnZ),[this,this.AwT],2);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},DF:function(G){},Abu:function(){return C.Aqt;},Abv:function(){return C.Aq0;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6Z((F=this.Fk,F[1].call(F[0]))));},HQ:function(G){var F;C.GI.HQ.
call(this,G);if(this.Ake()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Ce=[this,this.Aal];this.N.E5(A.jV);}this.
N.OU(false);this.N.OV(false);},Agh:function(){A._GetAutoObject(C.A5).Cb(52);},A3L:
function(G){C.GI.A3L.call(this,G);A.pe([this,this.A0R],this);},Bot:function(G){A.
_GetAutoObject(A.Device.Device).Awn(!A._GetAutoObject(A.Device.Device).Aqb);this.
An7(this);},An7:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E9();A._GetAutoObject(A.Device.Helper).Bo1(Be);if(A._GetAutoObject(A.Device.Device
).Aqb){var A2F=A._GetAutoObject(A.Device.Helper).AOM((F=this.Fk,F[1].call(F[0]))
,21600,true);Be.CX(A2F);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GI._Init.call(this,aArg);this.__proto__=C.AL6;var B;this.Dk(A.aaR(A.acf.
Av2));this.AwO([B=A._GetAutoObject(A.Device.Device),B.A8D,B.Bbk]);},_ReInit:function(
){C.GI._ReInit.call(this);this.Dk(A.aaR(A.acf.Av2));},_className:"Application::ActionListScreen"
};C.AL5={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AL5;},
_className:"Application::ActionListFilterScreen"};C.APy={IR:null,IY:null,Bb:null
,ML:A.jV,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9q,B.A_Q],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},Df:function(E){C.IP.Df.call(this,E);this.IY.L(E);},DX:function(
G){C.IP.DX.call(this,G);var AzF=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzF||A._GetAutoObject(A.Device.Helper).Are(AzF))this.IR.Z(false);else this.IR.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqX())this.Aw0(((A._GetAutoObject(A.
Device.Helper).W.CQ+1).toFixed()+AIK)+A._GetAutoObject(A.Device.Device).An.B8().
toFixed());else this.Aw0(BaC);},Aw0:function(E){if(this.ML===E)return;this.ML=E;
this.IY.R(E);},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IR={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);A.acg.C7._Init.call(
this.Bb={I:this},0);this.__proto__=C.APy;this.HS.H(Brk);this.DS.H(Brl);this.IR.H(
Brm);this.IR.L(A.jb.Text);this.IY.H(BaD);this.IY.Hn(2);this.IY.Lv(true);this.IY.
A4(0x12);this.IY.R(BaE);this.Bb.DD(Alh);this.Bb.DN(AyI);this.Bb.L(A.jb.Bb);this.
J(this.IR,0);this.J(this.IY,0);this.J(this.Bb,0);this.IR.Ax(A.aaL(A.ach.AeB));this.
IY.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IP;this.
IR._Done();this.IY._Done();this.Bb._Done();C.IP._Done.call(this);},_ReInit:function(
){C.IP._ReInit.call(this);this.IR._ReInit();this.IY._ReInit();this.Bb._ReInit();
this.IY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsJ={Text:null,Bl:function(aSize){C.O6.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O6.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xm);else this.Text.R(this.AC.Gm((F=this.Q,F[1].call(F[0]
))));var IF=((Ae&0x40)===0x40);if(IF)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O6._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsJ;this.Text.R(Rq);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O6;this.Text._Done();C.O6.
_Done.call(this);},_ReInit:function(){C.O6._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O6._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arb={C9:null,Bl:function(aSize){C.O6.Bl.call(this,aSize);this.C9.H(A.abK(this.
C9.M,aSize));},Ai:function(Ae){var B;var F;C.O6.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C9.Ax(null);else{this.C9.Ax(this.AC.AC_(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C9.Cw(this.AC.ADa(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IF=((
Ae&0x40)===0x40);if(IF)this.C9.L(A.jb.Bm);else this.C9.L(A.jb.Text);},_Init:function(
aArg){C.O6._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Arb;this.H(Atj);this.C9.H(AIJ);this.J(this.C9,0);},_Done:function(){this.__proto__=
C.O6;this.C9._Done();C.O6._Done.call(this);},_ReInit:function(){C.O6._ReInit.call(
this);this.C9._ReInit();},_Mark:function(D){var B;C.O6._Mark.call(this,D);if((B=
this.C9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au2={VY:null,DirectionOfCountingToString:null,Aeg:null,Dt:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return aIndex;
},Gm:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},DZ:function(A9){return A9;},H7:function(
){return this.Dt()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.VY)(F=
this.VY,F[2].call(F[0],E));},AC_:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt(
)))return null;return this.Aeg.AsK(aIndex);},ADa:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dt()))return-1;return this.Aeg.AsL(aIndex);},A2a:function(G){var F;
if(!!this.VY)this.Q=(F=this.VY,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},AeZ:function(E){if(A.aaZ(this.VY,E))return;if(!!this.VY)A.z$([this
,this.A2a],this.VY,0);this.VY=E;if(!!this.VY)A.zX([this,this.A2a],this.VY,0);A.pe([
this,this.A2a],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aeg._Init.call(this.Aeg={I:this},0);this.__proto__=C.Au2;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aeg._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aeg._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMq={Ht:null,EA:null,AnimalIdGenerationMethodToString:
null,AdX:null,Dt:function(){return 4;},C6:function(aIndex){var F;var A9=-1;if((aIndex<
0)||(aIndex>=this.Dt()))return-1;switch(aIndex){case 0:A9=0;break;case 1:A9=1;break;
case 2:A9=this.BzO((F=this.EA,F[1].call(F[0])));break;case 3:A9=5;break;default:
throw new Error(Brn+aIndex.toFixed());}return A9;},Gm:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dt()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C6(aIndex));},DZ:function(A9){var aIndex=-1;switch(A9){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bro+A9.toFixed());}return aIndex;},H7:function(){return this.
Dt()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Ht)(F=this.Ht,F[2].
call(F[0],E));},AC_:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;
return this.AdX.AsK(this.C6(aIndex));},ADa:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dt()))return-1;return this.AdX.AsL(this.C6(aIndex));},A1G:function(G){var F;
if(!!this.Ht)this.Q=(F=this.Ht,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Bml:function(E){if(A.aaZ(this.Ht,E))return;if(!!this.Ht)A.z$([this
,this.A1G],this.Ht,0);this.Ht=E;if(!!this.Ht)A.zX([this,this.A1G],this.Ht,0);A.pe([
this,this.A1G],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agb],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agb],this.EA
,0);A.pe([this,this.Agb],this);},Agb:function(G){A.pe([this,this.ByF],this);},BzO:
function(L$){var Rs=0;switch(L$){case 0:Rs=2;break;case 1:Rs=3;break;case 2:Rs=4;
break;default:throw new Error(Brp+L$.toFixed());}return Rs;},ByF:function(G){var
BeQ=this.C6(this.DZ(this.Q));if(this.Q!==BeQ)this.Au(BeQ);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdX._Init.call(this.
AdX={I:this},0);this.__proto__=C.AMq;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdX._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdX._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Ht)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGP={FN:null,Aa4:null,Q:null,Fj:null,E$:null,HH:null,Wx:null,AW:null,H3:null
,Kq:null,A8:0,AM:0,Alt:0,Init:function(aArg){var B;A.zX([this,this.Be3],[B=A._GetAutoObject(
A.Device.Device),B.Ano,B.Aou],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hl){this.AW.FP(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Wx.CV(A.jb.CJ);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HH.
CV(A.jb.CU);this.Wx.CV(A.jb.CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hl){this.AW.FP(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Wx.CV(A.jb.CJ);}else{
this.AW.FP(A.jb.CU);this.HH.CV(A.jb.CU);this.Wx.CV(A.jb.CU);}this.Ba(null);}},H0:
function(G){C.Eg.H0.call(this,G);if(!this.A8)this.FW(this);else this.Hd(this);},
DK:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;
default:this.FN.AkN((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hd:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8&&!!this.N)this.FN.Ajy((
F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{if(this.AW.A8Y())this.Ba(
this.AW);else this.Ba(this.Wx);if(!this.AM)this.AW.SU(2);else this.AW.SU(7);}break;
default:throw new Error(Atk+this.A8.toFixed());}this.DK(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uk,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ov:function(G){this.ABj(2);},M6:function(G){this.ABj(
7);},ABj:function(Gz){var B;var AzG=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzG){var AAv=(A.Core.P.isPrototypeOf(B=this.QK(AzG,Gz,0x15))?B:null);if(!!AAv){
this.Ba(AAv);return true;}}return false;},AoX:function(G){A.pe([this,this.Be3],this
);},A4A:function(G){var B;var F;if(!this.H3.Ht){this.Kq.AeZ(null);return;}switch((
F=this.H3.Ht,F[1].call(F[0]))){case 0:case 1:this.Kq.AeZ(null);break;case 3:this.
Kq.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0y]);break;case 2:this.Kq.AeZ([
B=A._GetAutoObject(A.Device.Device),B.ASE,B.A0z]);break;case 4:case 5:this.Kq.AeZ([
B=A._GetAutoObject(A.Device.Device),B.AEP,B.AIW]);break;default:throw new Error(
Brq+(F=this.H3.Ht,F[1].call(F[0])).toFixed());}},Be3:function(G){var F;if(!this.
H3.Ht)return;A.pe([this,this.A4A],this);var AtZ=false;switch((F=this.H3.Ht,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AtZ=true;this.AW.A_8(-1);}break;case 0:
case 1:{AtZ=false;this.AW.A_8(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyA+(F=this.H3.Ht,F[1].call(F[0])).toFixed());}this.AW.As(AtZ);this.
HH.As(AtZ);this.HH.Z(AtZ);if(((F=this.H3.Ht,F[1].call(F[0]))!==this.Alt)||(AtZ===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMo((F=this.H3.
Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bj8((F=this.H3.Ht,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Ky(A._GetAutoObject(A.Device.Device).A3);else this.AW.Ky(0);this.Alt=(
F=this.H3.Ht,F[1].call(F[0]));},A9X:function(E){var B;if(this.Aa4===E)return;if(
!!this.Aa4){A.z$([this,this.AoX],[B=this.Aa4,B.WE,B.J0],0);A.z$([this,this.AoX],[
B=this.Aa4,B.Ans,B.Nr],0);A.z$([this,this.AoX],[B=this.Aa4,B.ArB,B.PY],0);this.H3.
Us(null);}this.Aa4=E;if(!!E){A.zX([this,this.AoX],[B=this.Aa4,B.WE,B.J0],0);A.zX([
this,this.AoX],[B=this.Aa4,B.Ans,B.Nr],0);A.zX([this,this.AoX],[B=this.Aa4,B.ArB
,B.PY],0);this.H3.Us([B=this.Aa4,B.WE,B.J0]);}if(!!E)A.pe([this,this.AoX],this);
},Uk:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0
);C.Arb._Init.call(this.HH={I:this},0);C.Arb._Init.call(this.Wx={I:this},0);C.AvN.
_Init.call(this.AW={I:this},0);C.AMq._Init.call(this.H3={I:this},0);C.Au2._Init.
call(this.Kq={I:this},0);this.__proto__=C.AGP;var B;this.H(Aah);this.V.As(false);
this.V.R(Atb);this.V.L(A.jb.Bm);this.Fj.Filter=6;this.E$.Filter=7;this.HH.H(Brr);
this.HH.As(false);this.Wx.H(Brs);this.AW.H(Brt);this.AW.As(false);this.J(this.HH
,0);this.J(this.Wx,0);this.J(this.AW,0);this.FN=A._NewObject(C.Aet,0);this.Fj.BG=[
this,this.Ov];this.E$.BG=[this,this.M6];this.HH.CK(this.Kq);this.HH.Au([B=this.Kq
,B.B$,B.Cc]);this.Wx.CK(this.H3);this.Wx.Au([B=this.H3,B.B$,B.Cc]);this.AW.Au([this
,this.Uk,this.Bx]);this.H3.Bml([B=A._GetAutoObject(A.Device.Device),B.Ano,B.Aou]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fj._Done();this.E$.
_Done();this.HH._Done();this.Wx._Done();this.AW._Done();this.H3._Done();this.Kq.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fj._ReInit();this.E$._ReInit();this.HH._ReInit();this.Wx._ReInit();this.AW._ReInit(
);this.H3._ReInit();this.Kq._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G4={AzY:null,Fj:null,E$:null,G1:null,
F_:null,EM:null,Ne:0,AM4:0,ACd:0,Uy:0,Bao:-1,AM3:false,Init:function(aArg){A.pe([
this,this.A04],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AM3);this.EM.H(A.wC(this.Yw(this.ACd).M,this.Yw((this.ACd+this.AM4)-1).M));},Ov:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var A1V=this.BgA(2);if(A1V===
false)D5.Mx=true;},M6:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var
A1V=this.BgA(7);if(A1V===false)D5.Mx=true;},BgA:function(Gz){var B;var DV=(C.DG.
isPrototypeOf(B=this.AV)?B:null);DV=this.BdT(DV,Gz,true);if(!!DV){this.Ba(DV);this.
AzY=(C.DG.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Ads:function(
G){A.ab5("%s",Ald);},GX:function(s){this.Ads(s);},FP:function(E){if(this.Ne===E)
return;this.Ne=E;this.F_.CV(E);this.G1.CV(E);},SU:function(Gz){var B;switch(Gz){
case 2:this.Ba(this.G1);break;case 7:this.Ba(this.F_);break;default:A.ab5("%s%e"
,Bru,Gz);}this.AzY=(C.DG.isPrototypeOf(B=this.AV)?B:null);},LT:function(G){},A04:
function(s){this.LT(s);},AFa:function(E){if(this.AM3===E)return;this.AM3=E;this.
Am();},A93:function(E){if(this.AM4===E)return;this.AM4=E;this.Am();},A92:function(
E){if(this.ACd===E)return;this.ACd=E;this.Am();},Yw:function(HA){var B6=null;switch(
HA){case-1:case 0:B6=this.F_;break;case 1:B6=this.G1;break;default:A.ab5("%s",Ah0
);}return B6;},Ky:function(E){if(this.Uy===E)return;this.Uy=E;this.Amm();},Amm:function(
){A.ab5("%s",Ald);},BdT:function(AcZ,Gz,LM){var B;if(!!AcZ){var Be;if(LM)Be=0x11;
else Be=0x0;switch(Gz){case 2:AcZ=(C.DG.isPrototypeOf(B=this.AqL(AcZ,Be))?B:null
);break;case 7:AcZ=(C.DG.isPrototypeOf(B=this.TS(AcZ,Be))?B:null);break;default:
throw new Error(Brv);}}return AcZ;},A_8:function(E){if(this.Bao===E)return;this.
Bao=E;var DV=this.F_;var A2i;while(!!DV){A2i=!!E;DV.As(A2i);DV.Z(A2i);if(DV===this.
AzY)this.Ba(DV);DV=this.BdT(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.
call(this.E$={I:this},0);C.DG._Init.call(this.G1={I:this},0);C.DG._Init.call(this.
F_={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.G4;this.
H(Brw);this.Fj.Filter=6;this.E$.Filter=7;this.Ne=A.jb.CJ;this.G1.H(E6);this.F_.H(
BaF);this.EM.H(Brx);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.G1,0);this.J(this.
F_,0);this.J(this.EM,0);this.Fj.BG=[this,this.Ov];this.Fj.D1=[this,this.Ov];this.
E$.BG=[this,this.M6];this.E$.D1=[this,this.M6];this.AzY=this.F_;this.G1.Dj=[this
,this.GX];this.F_.Dj=[this,this.GX];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fj._Done();this.E$._Done();this.G1._Done();this.F_._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fj._ReInit();this.E$._ReInit();this.G1._ReInit();this.F_._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzY)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARe={Dz:null,CW:null,Cv:null
,FP:function(E){if(this.Ne===E)return;C.HL.FP.call(this,E);this.Cv.CV(E);this.CW.
CV(E);this.Dz.CV(E);},Yw:function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.
F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;
case 4:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(
this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARe;this.
H(Bry);this.G1.H(Ali);this.Dz.H(BaG);this.CW.H(BaH);this.Cv.H(BaI);this.F_.H(Brz
);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Dz.Dj=[this,this.
GX];this.CW.Dj=[this,this.GX];this.Cv.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.Dz._Done();this.CW._Done();this.Cv._Done();C.HL._Done.call(this
);},_ReInit:function(){C.HL._ReInit.call(this);this.Dz._ReInit();this.CW._ReInit(
);this.Cv._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.
Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVP={Rc:null,AcG:null,AVO:0,CC:function(G){this.AcG.As(true);},E3:function(G
){this.AcG.As(false);},Bod:function(E){if(this.AVO===E)return;this.AVO=E;this.Rc.
R((((A.aaR(A.acf.AVN)+AcQ)+E.toFixed())+BrA)+A.aaR(A.acf.Lg));},Bl8:function(){return this.
AVO;},BBF:function(G){A._GetAutoObject(C.A5).Cb(3);A._GetAutoObject(A.Device.Device
).Anv(1);},_Init:function(aArg){C.X6._Init.call(this,aArg);C.CG._Init.call(this.
Rc={I:this},0);A.acl.Gn._Init.call(this.AcG={I:this},0);this.__proto__=C.AVP;this.
AeN.H(BrB);this.UG.R(A.jV);this.Rc.H(BrC);this.Rc.R(A.aaR(A.acf.AVN)+BaJ);this.Rc.
L(A.jb.Text);this.AcG.HO(1);this.AcG.Fp(5000);this.AcG.B3=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.AY(A.aaL(A.fl.Ak));this.Rc.Cl(A.aaL(A.fl.Bg));
this.AcG.SG=[this,this.BBF];this.AcG.Q=[this,this.Bl8,this.Bod];},_Done:function(
){this.__proto__=C.X6;this.Rc._Done();this.AcG._Done();C.X6._Done.call(this);},_ReInit:
function(){C.X6._ReInit.call(this);this.Rc._ReInit();this.AcG._ReInit();this.Rc.
R(A.aaR(A.acf.AVN)+BaJ);this.Rc.S(A.aaL(A.fl.Af));this.Rc.AY(A.aaL(A.fl.Ak));this.
Rc.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.X6._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AR_={K9:null,Lo:null,BeF:false,Init:
function(aArg){this.Ba(this.Da);},Ew:function(G){var B;if(!!this.K9)this.K9.Ew(this
);C.Wz.Ew.call(this,G);},Agf:function(G){var B;if(!!this.K9)this.K9.Agf(this);C.
Wz.Agf.call(this,G);},CC:function(G){var B;if(!this.BeF){this.BeF=true;A.pe([this
,this.A35],this);}else if(!this.K9){this.K9=A._NewObject(C.ASa,0);this.K9.A_g([this
,this.AA_]);this.LT(this);this.K9.LT(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wz.CC.call(this,G);}else C.Wz.CC.call(this,G
);},Ap1:function(G){var B;if(!!this.K9)this.K9.Ap1(this);},AA_:function(G){var B;
var F;this.LT(this);this.K9.LT(this);A.pe([this,this.AcR],this);var Beg=this.L0;
this.AeW(A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVM(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Beg);if(Beg)A._GetAutoObject(
A.Device.Helper).W.PY(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SO(A._GetAutoObject(A.Device.Helper).AMo((F=this.Di.H3.Ht,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JN(this.Da);},A35:function(
G){A._GetAutoObject(C.A5).Cb(79);},_Init:function(aArg){C.Wz._Init.call(this,aArg
);C.Rb._Init.call(this.Lo={I:this},0);this.__proto__=C.AR_;var B;this.Lo.H(AhW);
this.Lo.Aj(true);this.Lo.T(A.aaR(A.acf.ACE));this.J(this.Lo,-9);this.J5(this.Go,-
1);this.Lo.Gs([this,this.D_,this.GS]);this.Lo.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASN,B.AnE]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wz;this.Lo.
_Done();C.Wz._Done.call(this);},_ReInit:function(){C.Wz._ReInit.call(this);this.
Lo._ReInit();this.Lo.T(A.aaR(A.acf.ACE));},_Mark:function(D){var B;C.Wz._Mark.call(
this,D);if((B=this.K9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD3={AgN:null,AgO:null,NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:
null,FP:function(E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);this.
CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.
NT.CV(E);this.AgO.CV(E);this.AgN.CV(E);},Yw:function(HA){var B6=null;switch(HA){
case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case
3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=this.F0;break;case 6:B6=this.
ET;break;case 7:B6=this.NS;break;case 8:B6=this.NT;break;case 9:B6=this.AgO;break;
case 10:B6=this.AgN;break;case 11:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;
},_Init:function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(this.AgN={I:this
},0);C.DG._Init.call(this.AgO={I:this},0);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD3;this.H(BrD);this.G1.H(AIL);this.AgN.H(AyN);this.AgO.H(
A0g);this.NT.H(A0h);this.NS.H(A0i);this.ET.H(A0j);this.F0.H(A0k);this.Eq.H(A0l);
this.Dz.H(BaK);this.CW.H(A0m);this.Cv.H(BrE);this.F_.H(BrF);this.J(this.AgN,-2);
this.J(this.AgO,-2);this.J(this.NT,-2);this.J(this.NS,-2);this.J(this.ET,-2);this.
J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.
Cv,-2);this.AgN.Dj=[this,this.GX];this.AgO.Dj=[this,this.GX];this.NT.Dj=[this,this.
GX];this.NS.Dj=[this,this.GX];this.ET.Dj=[this,this.GX];this.F0.Dj=[this,this.GX
];this.Eq.Dj=[this,this.GX];this.Dz.Dj=[this,this.GX];this.CW.Dj=[this,this.GX];
this.Cv.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.Lk;this.AgN._Done(
);this.AgO._Done();this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(
this);},_ReInit:function(){C.Lk._ReInit.call(this);this.AgN._ReInit();this.AgO._ReInit(
);this.NT._ReInit();this.NS._ReInit();this.ET._ReInit();this.F0._ReInit();this.Eq.
_ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(
D){var B;C.Lk._Mark.call(this,D);if((B=this.AgN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HL={Q:null,AM:0,Ai:function(Ae){C.G4.Ai.call(this
,Ae);this.Amm();},Ads:function(G){var B;var F;var ID=A.jV;var B6=this.G1;while(!
!B6){if(B6.Ez>0)ID=ID+B6.Ez.toFixed();else ID=ID+String.fromCharCode(0x30);B6=(C.
DG.isPrototypeOf(B=this.TS(B6,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(ID,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LT:function(G){},Amm:function(){var B;var F;if(!!this.Q){var DV=this.F_;
var AdB=this.Uy;var A9=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A9>0){DV.L6(A9%
10);A9=(A9/10)|0;}else if(AdB>0)DV.L6(0);else DV.L6(-1);DV=(C.DG.isPrototypeOf(B=
this.AqL(DV,0x11))?B:null);AdB=AdB-1;}}},C4:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G4._Init.call(this,aArg);this.__proto__=C.HL;},_Mark:
function(D){var B;C.G4._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lk={AM:0,Q:null
,Ai:function(Ae){C.G4.Ai.call(this,Ae);this.Amm();},Ads:function(G){var B;var F;
var ID=A.jV;var B6=this.G1;while(!!B6){if(B6.Ez>0)ID=ID+B6.Ez.toFixed();else ID=
ID+String.fromCharCode(0x30);B6=(C.DG.isPrototypeOf(B=this.TS(B6,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(ID,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LT:function(G){},Amm:function(){var B;
var F;if(!!this.Q){var DV=this.F_;var AdB=this.Uy;var A9=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A9>0){DV.L6((A9%10)|0);A9=Math.trunc(A9/10);}else if(AdB>0)DV.
L6(0);else DV.L6(-1);DV=(C.DG.isPrototypeOf(B=this.AqL(DV,0x11))?B:null);AdB=AdB-
1;}}},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G4._Init.call(
this,aArg);this.__proto__=C.Lk;},_Mark:function(D){var B;C.G4._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dt:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvN={Eq:null,Dz:null,CW:null,Cv:null,FP:function(E){if(this.Ne===E)return;C.
HL.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);},Yw:
function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(
this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={
I:this},0);this.__proto__=C.AvN;this.H(Ayq);this.G1.H(AHU);this.Eq.H(AHV);this.Dz.
H(AHW);this.CW.H(AHX);this.Cv.H(AHY);this.F_.H(AHZ);this.EM.H(BaL);this.J(this.Eq
,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Eq.Dj=[this,this.
GX];this.Dz.Dj=[this,this.GX];this.CW.Dj=[this,this.GX];this.Cv.Dj=[this,this.GX
];},_Done:function(){this.__proto__=C.HL;this.Eq._Done();this.Dz._Done();this.CW.
_Done();this.Cv._Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.
call(this);this.Eq._ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit(
);},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUV={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpr(0);this.AttributeSet.Bps(1);this.AttributeSet.Bpt(4);},Ai:function(Ae){var B;
C.BX.Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IF=((
Ae&0x40)===0x40);var GD=this.Bo.Bw;var FT=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FT=
A.jb.Bm;GY=A.jb.Text;}if(!He){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);this.
AttributeSet.Ahm(A.jb.CJ);}else if(GD){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(IF){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
Am2);this.V.L(A.jb.Bm);this.AttributeSet.Ahm(A.jb.Bm);}else{this.Background.L(FT
);this.V.L(GY);this.AttributeSet.Ahm(GY);}this.LM=He;this.KL=Fu;this.Qv=GD;this.
Apd=IF;},Hm:function(G){var B;var Gh=this.DB.G5;var CA=(A.acg.AuQ.isPrototypeOf(
B=this.DB.Ci)?B:null);CA.A9Z(this.AttributeSet);CA.A4(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzH(this.AC.Gm(Gh)));else CA.R(Xm);CA.H(A.abK(CA.M,[this.DB.Wg,(B=this.
DB.M)[3]-B[1]]));},BzH:function(Bx6){var AAU=Bx6;AAU=A._GetAutoObject(A.Device.Helper
).MO(AAU,BrG,BrH);AAU=A._GetAutoObject(A.Device.Helper).MO(AAU,BrI,BrJ);return BrK+
AAU;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUV;this.DB.H(BrL);this.DB.JC(2);
this.DB.N8(A.acg.AuQ);this.AttributeSet.Ahm(this.V.AQ);this.AttributeSet.Bm6(A.aaL(
A.fl.AOD));this.AttributeSet.A_r(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.AttributeSet._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_r(A.aaL(A.fl.Ak));this.AttributeSet.Ahp(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asz._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dq(C.ADt);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dt:function(){return 14;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BT(aIndex
);},DZ:function(A9){return A9;},H7:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OZ={FN:null,EnumToCodeset:
null,JA:null,A8:0,Number:0,Ai:function(Ae){C.BX.Ai.call(this,Ae);if(this.A8===1){
if(this.Hl){this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var BAC=this.
EnumToCodeset.AmE(this.Number);var BeP=this.AC.C6(this.AM);if(BAC!==BeP){this.AFK(
this.EnumToCodeset.Aej(BeP));A.abo([this,this.ASO,this.AFK],0);}},DK:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C2(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[
this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(
A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:
this.FN.AkN((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hd:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DK(this);if(!this.
A8)this.Ba(null);else this.A2v();this.Am();},AFK:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqT()>E)E=this.EnumToCodeset.
AqT();if(this.EnumToCodeset.H7()<E)E=this.EnumToCodeset.H7();}this.Number=E;var BP=
this.AM;if(!!this.EnumToCodeset){var Bzx=this.EnumToCodeset.AmE(E);this.Bx(this.
AC.DZ(Bzx));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C6(this.AM)));A.abo(this.Q,0);}}},Anx:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Ve:function(G){this.Ex(this.A8+1);},A2v:function(){A.ab5(
"%s",BrM);},ASO:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BF._Init.call(this.JA={I:this},0);this.__proto__=C.OZ;this.
JA.Filter=1;this.FN=A._NewObject(C.Aet,0);this.JA.BG=[this,this.Ve];},_Done:function(
){this.__proto__=C.BX;this.JA._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.JA._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JA)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeU={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.AC5);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaK:function(G){A.pe([this,this.Aga],this);},AaI:function(G){A.pe([this,this.
Aga],this);},AlZ:function(G){A.pe([this,this.Aga],this);},Aga:function(G){if((!this.
In||!this.A3)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeU;this.Text.A1(0x3F
);this.Text.H(As8);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR3={GH:0,C8:null,AW:null,E_:null,
Jc:null,CountryToString:null,Le:0,Mg:false,Init:function(aArg){A.zX([this,this.MT
],[this,this.SI,this.Lt],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.Jc.Z(this.
Afp);this.AW.FP(this.LW);this.E_.CV(this.LW);this.Jc.CV(this.LW);},DK:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.
A8;this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>this.RL)this.A8=this.RL;if((
this.A8===1)&&!this.Afp)this.A8=2;switch(this.A8){case 0:{this.Ba(null);if(!this.
GH)this.Lt(0);}break;case 1:this.Ba(this.Jc);break;case 2:this.Ba(this.E_);break;
case 3:{this.Ba(this.AW);if(!this.GH||(Ts>0))this.AW.SU(2);else this.AW.SU(7);}break;
default:throw new Error(Atk+this.A8.toFixed());}C.El.Ex.call(this,this.A8);},Apl:
function(G){this.Jc.Us(this.EA);},AaK:function(G){var F;this.AW.A92((F=this.AF,F[
1].call(F[0])));},AaI:function(G){var F;this.AW.A93((F=this.A3,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mg=true;this.SL(A._GetAutoObject(
A.Device.Helper).V1(E,0,12));this.Lt(A._GetAutoObject(A.Device.Converter).S8(E));
this.Mg=false;if(!!E)this.AW.Ky(12);else this.AW.Ky(0);this.Am();},AlZ:function(
G){A.pe([this,this.Aga],this);},FW:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADi());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjK:function(){return this.
GH;},AjM:function(){return 999999999999;},Lt:function(E){if(this.Le===E)return;this.
Le=E;if(this.Mg===false)A.pe([this,this.Vs],this);A.abo([this,this.SI,this.Lt],0
);},SL:function(E){if(this.GH===E)return;this.GH=E;if(this.Mg===false)A.pe([this
,this.Vs],this);A.abo([this,this.Ab0,this.SL],0);},Vs:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.Le),3,10)+A.abm(this.GH,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Aga:function(G){var F;if((!this.In||
!this.A3)||!this.AF)return;if(!(F=this.In,F[1].call(F[0])))this.AW.AFa(true);else
this.AW.AFa(false);},SI:function(){return this.Le;},Ab0:function(){return this.GH;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C8._Init.call(this.C8={I:this
},0);C.AD3._Init.call(this.AW={I:this},0);C.AsJ._Init.call(this.E_={I:this},0);C.
Jc._Init.call(this.Jc={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR3;var B;this.RL=3;this.AW.H(BrN);this.E_.H(BaM);this.
Jc.H(BaN);this.J(this.AW,0);this.J(this.E_,0);this.J(this.Jc,0);this.C8.AFg([this
,this.SI,this.Lt]);this.AW.Au([this,this.Ab0,this.SL]);this.E_.CK(this.C8);this.
E_.Au([B=this.C8,B.B$,B.Cc]);this.Jc.A_k([B=A._GetAutoObject(A.Device.Device),B.
Awb,B.AyU]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done(
);this.AW._Done();this.E_._Done();this.Jc._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.E_._ReInit();this.Jc._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR2={GH:0,C8:null,AW:null,YL:null,Kv:null,E_:null,Jc:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PB:0,Le:0,Mg:false,Init:function(aArg){A.
zX([this,this.MT],[this,this.PV,this.EC],0);A.zX([this,this.MT],[this,this.SI,this.
Lt],0);A.zX([this,this.MT],[this,this.Anq,this.Ahq],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.Jc.Z(this.Afp);this.AW.FP(this.LW);this.YL.FP(this.LW);this.Kv.
FP(this.LW);this.E_.CV(this.LW);this.Jc.CV(this.LW);},DK:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV
);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.
acf.Bh1));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.
acf.Colon))+AcQ)+A.aaR(A.acf.Bpw));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Bi3));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGY)+A.aaR(A.acf.Colon))+AcQ)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ca=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0
])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN)+Ayf)+this.GermanStateToString.LA(
A._GetAutoObject(A.Device.Converter).AC8(this.PB)));(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[
1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A8;if(EO<
0)EO=0;else if(EO>this.RL)EO=this.RL;if((EO===1)&&!this.Afp)EO=2;switch(EO){case
0:{this.Ba(null);if((!this.GH&&!this.AnimalType)&&!this.PB)this.Lt(0);}break;case
1:this.Ba(this.Jc);break;case 2:this.Ba(this.E_);break;case 3:if(!Ts)A.pe([this,
this.BBT],this);else this.Ba(this.YL);break;case 4:this.Ba(this.Kv);break;case 5:
if(((Ts===4)&&!this.PB)&&!this.GH)return;else{this.Ba(this.AW);if(!this.GH||(Ts>
0))this.AW.SU(2);else this.AW.SU(7);}break;default:throw new Error(Atk+EO.toFixed(
));}this.A8=EO;C.El.Ex.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mg=true;this.SL(A._GetAutoObject(A.Device.Helper).V1(E,0,8));this.
Ahq(A._GetAutoObject(A.Device.Converter).Bab(E));this.EC(A._GetAutoObject(A.Device.
Converter).Baa(E));this.Lt(A._GetAutoObject(A.Device.Converter).S8(E));this.Mg=false;
if(!!this.AM){this.YL.Ky(2);this.Kv.Ky(2);this.AW.Ky(8);}else{this.YL.Ky(0);this.
Kv.Ky(0);this.AW.Ky(0);}this.Am();},Apl:function(G){this.Jc.Us(this.EA);},AaK:function(
G){var F;this.AW.A92((F=this.AF,F[1].call(F[0])));},AaI:function(G){var F;this.AW.
A93((F=this.A3,F[1].call(F[0])));},AlZ:function(G){A.pe([this,this.Aga],this);},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADi());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RL);},AjK:function(){return this.GH;
},AjM:function(){return 99999999;},Lt:function(E){if(this.Le===E)return;this.Le=
E;if(this.Mg===false)A.pe([this,this.Vs],this);A.abo([this,this.SI,this.Lt],0);}
,SL:function(E){if(this.GH===E)return;this.GH=E;if(this.Mg===false)A.pe([this,this.
Vs],this);A.abo([this,this.Ab0,this.SL],0);},Vs:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.Le),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PB,2,10))+A.abm(this.GH,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Aga:function(G){var F;if((!this.In||!this.A3)||!this.AF)return;if(!(F=this.
In,F[1].call(F[0])))this.AW.AFa(true);else this.AW.AFa(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mg===false)A.pe([this,this.
Vs],this);A.abo([this,this.PV,this.EC],0);},Ahq:function(E){if(this.PB===E)return;
this.PB=E;if(this.Mg===false)A.pe([this,this.Vs],this);A.abo([this,this.Anq,this.
Ahq],0);},BBT:function(G){var F;if(!!this.JR){var Ig=(F=this.JR,F[1].call(F[0]));
var A1H=0;switch(Ig){case 0:case 1:A1H=0;break;case 2:A1H=1;break;default:A.ab5(
"%s%e",Alc,Ig);}this.EC(A1H);}if(!this.PB)this.Ex(4);else this.Ex(5);},SI:function(
){return this.Le;},Ab0:function(){return this.GH;},PV:function(){return this.AnimalType;
},Anq:function(){return this.PB;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.ARf._Init.call(this.AW={I:this},0);C.AvM.
_Init.call(this.YL={I:this},0);C.AvM._Init.call(this.Kv={I:this},0);C.AsJ._Init.
call(this.E_={I:this},0);C.Jc._Init.call(this.Jc={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR2;var B;this.RL=5;this.AW.H(
BrO);this.YL.H(BrP);this.YL.EV(2);this.Kv.H(BrQ);this.Kv.EV(16);this.E_.H(BaM);this.
Jc.H(BaN);this.J(this.AW,0);this.J(this.YL,0);this.J(this.Kv,0);this.J(this.E_,0
);this.J(this.Jc,0);this.C8.AFg([this,this.SI,this.Lt]);this.AW.Au([this,this.Ab0
,this.SL]);this.YL.Au([this,this.PV,this.EC]);this.Kv.Au([this,this.Anq,this.Ahq
]);this.E_.CK(this.C8);this.E_.Au([B=this.C8,B.B$,B.Cc]);this.Jc.A_k([B=A._GetAutoObject(
A.Device.Device),B.Awb,B.AyU]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C8._Done();this.AW._Done();this.YL._Done();this.Kv._Done();this.E_._Done(
);this.Jc._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.YL._ReInit();this.Kv._ReInit();this.E_._ReInit();this.Jc.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awm:null,OM:null,
Q:null,EA:null,A3:null,AF:null,In:null,N:null,JR:null,Fj:null,E$:null,AC5:0,LW:0
,A8:0,RL:0,Afp:true,Init:function(aArg){A.pe([this,this.LT],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A8)this.Ba(null);},Bm8:function(E){if(this.
AC5===E)return;this.AC5=E;this.Am();},WH:function(E){if(this.LW===E)return;this.
LW=E;this.Am();},DK:function(G){A.ab5("%s",Ald);},MT:function(s){this.DK(s);},Ex:
function(EO){A.pe([this,this.MT],this);A.pe(this.Awm,this);if(!EO)A.pe(this.OM,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);}
,C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aot);},Ov:function(G){if(this.A8>1)this.Ex(this.A8-1);},M6:function(
G){if((this.A8>0)&&(this.A8<this.RL))this.Ex(this.A8+1);},Us:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0V],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0V],this.EA,0);A.pe([this,this.A0V],this);},Apl:function(G){},A0V:
function(s){this.Apl(s);},OS:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A0Z],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A0Z],E,0);if(!
!E)A.pe([this,this.A0Z],this);},PW:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A01],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A01],E,0);if(
!!E)A.pe([this,this.A01],this);},AaK:function(G){},A01:function(s){this.AaK(s);}
,AaI:function(G){},A0Z:function(s){this.AaI(s);},Uq:function(E){if(A.aaZ(this.In
,E))return;if(!!this.In)A.z$([this,this.A0Y],this.In,0);this.In=E;if(!!E)A.zX([this
,this.A0Y],E,0);if(!!E)A.pe([this,this.A0Y],this);},AlZ:function(G){},A0Y:function(
s){this.AlZ(s);},FW:function(G){A.ab5("%s",BaO);},BG4:function(s){this.FW(s);},Hd:
function(G){this.Ex(0);},AjK:function(){A.ab5("%s",Aot);return 0;},AjM:function(
){A.ab5("%s",Aot);return 0;},LT:function(G){},Anu:function(E){if(A.aaZ(this.JR,E
))return;if(!!this.JR)A.z$([this,this.AoW],this.JR,0);this.JR=E;if(!!E)A.zX([this
,this.AoW],this.JR,0);A.pe([this,this.AoW],this);},AoW:function(G){},AFr:function(
E){if(A.aa0(this.OM,E))return;this.OM=E;},AFW:function(E){if(this.Afp===E)return;
this.Afp=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0);this.
__proto__=C.El;this.H(As8);this.AC5=A.jb.Text;this.LW=A.jb.CU;this.Fj.Filter=6;this.
E$.Filter=7;this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fj._Done();this.E$._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fj._ReInit(
);this.E$._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dp:null,FN:
null,OM:null,EA:null,A3:null,AF:null,In:null,Q:null,JR:null,AEy:-1,Afp:true,AN9:
false,AUe:false,Asl:true,Init:function(aArg){A.pe([this,this.ABE],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dp)return;if(this.Dp.A8>0){if(this.Hl){this.Dp.
WH(A.jb.CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dp.WH(A.jb.
CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.Dp.WH(
A.jb.CJ);else this.Dp.WH(A.jb.CU);this.Dp.Bm8(this.V.AQ);}},H0:function(G){C.Eg.
H0.call(this,G);if(!this.Dp)return;if(!this.Dp.A8)this.FW(this);else this.Hd(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dp)this.Dp.N=E;},Us:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apl],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apl],this.EA,0);A.pe([this,this.Apl],this);},Apl:function(
G){if(!!this.Dp)this.Dp.Us(this.EA);},OS:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dp)this.Dp.OS(E);},PW:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dp)this.Dp.PW(E);},Uq:function(E){if(A.aaZ(this.In,E))return;
this.In=E;if(!!this.Dp)this.Dp.Uq(E);},BCm:function(G){var AAA=0;if(!!this.Dp){AAA=
this.Dp.A8;this.Dp.N=null;this.HP(this.Dp);}switch(this.AEy){case 0:this.Dp=A._NewObject(
C.AeU,0);break;case 1:this.Dp=A._NewObject(C.AR3,0);break;case 2:this.Dp=A._NewObject(
C.AR2,0);break;case 3:this.Dp=A._NewObject(C.AUg,0);break;case 4:this.Dp=A._NewObject(
C.AUf,0);break;case 5:this.Dp=A._NewObject(C.AR4,0);break;default:throw new Error(
BrR+this.AEy.toFixed());}this.J(this.Dp,0);this.Dp.Anu(this.JR);this.Dp.H(BrS);this.
Dp.N=this.N;this.Dp.Us(this.EA);this.Dp.Awm=[this,this.Awm];this.Dp.Au([this,this.
Uk,this.Bx]);this.Dp.Uq(this.In);this.Dp.OS(this.A3);this.Dp.PW(this.AF);this.Dp.
AFr(this.OM);this.Dp.AFW(this.Afp);if(AAA>0)this.Dp.Ex(AAA);this.Ba(this.Dp);this.
Am();},FW:function(G){var B;var F;if(!!this.Dp){if(!!this.N)this.FN.Ajy((F=this.
N,F[1].call(F[0])));else this.FN=A._NewObject(C.Aet,0);this.Dp.FW(this);}},Hd:function(
G){var B;if(!!this.Dp)this.Dp.Hd(this);},AjK:function(){if(!this.Dp)return 0;return this.
Dp.AjK();},AjM:function(){if(!this.Dp)return 0;return this.Dp.AjM();},C4:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uk,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABE],this);},BnL:function(
E){if(this.AEy===E)return;this.AEy=E;A.pe([this,this.BCm],this);},Ar2:function(E
){if(this.Asl===E)return;this.Asl=E;A.pe([this,this.ABE],this);},ABE:function(G){
var Apw;if(this.Asl){if(this.AN9)Apw=5;else Apw=0;}else if(this.AUe){if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)Apw=4;else Apw=3;}else if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)Apw=2;else Apw=1;this.BnL(Apw);},Awm:function(
G){var F;if((!!this.N&&!!this.Dp)&&!this.Dp.A8)this.FN.AkN((F=this.N,F[1].call(F[
0])));this.Am();},Anu:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([
this,this.AoW],this.JR,0);this.JR=E;if(!!E)A.zX([this,this.AoW],this.JR,0);A.pe([
this,this.AoW],this);},AoW:function(G){if(!!this.Dp)this.Dp.Anu(this.JR);},A_N:function(
E){if(this.AUe===E)return;this.AUe=E;A.pe([this,this.ABE],this);},BmE:function(E
){if(this.AN9===E)return;this.AN9=E;A.pe([this,this.ABE],this);},AFr:function(E){
if(A.aa0(this.OM,E))return;this.OM=E;if(!!this.Dp)this.Dp.AFr(E);},AFW:function(
E){if(this.Afp===E)return;this.Afp=E;if(!!this.Dp)this.Dp.AFW(E);},Uk:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(Aah);this.V.R(Atb);this.V.L(A.jb.Bm);this.FN=A._NewObject(C.Aet,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dp)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.In
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARf={ET:null,F0:null,Eq:null,Dz:null,CW:null
,Cv:null,FP:function(E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);
this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);},Yw:function(
HA){var B6=null;switch(HA){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=
this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.G1;break;default:A.ab5("%s"
,Ah0);}return B6;},_Init:function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(
this.ET={I:this},0);C.DG._Init.call(this.F0={I:this},0);C.DG._Init.call(this.Eq={
I:this},0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARf;this.H(BrT);this.G1.
H(AIL);this.ET.H(AyN);this.F0.H(A0g);this.Eq.H(A0h);this.Dz.H(A0i);this.CW.H(A0j
);this.Cv.H(A0k);this.F_.H(A0l);this.EM.H(BaL);this.J(this.ET,-2);this.J(this.F0
,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);
this.ET.Dj=[this,this.GX];this.F0.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.
Dz.Dj=[this,this.GX];this.CW.Dj=[this,this.GX];this.Cv.Dj=[this,this.GX];},_Done:
function(){this.__proto__=C.Lk;this.ET._Done();this.F0._Done();this.Eq._Done();this.
Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(this);},_ReInit:function(
){C.Lk._ReInit.call(this);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();
this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D){var B;
C.Lk._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvM={Q:null,G1:null,F_:null,EM:null,Is:null,Ir:null,Ne:0,Uy:0,AM:0,Ga:99,Init:
function(aArg){A.pe([this,this.LT],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yw(0).M,this.Yw(-1).M));var IF=((Ae&
0x40)===0x40);if(IF){this.BgC(A.jb.AV);this.BgD(A.jb.Bm);}else{this.BgC(this.Ne);
this.BgD(A.jb.Text);}this.Amm();},FP:function(E){if(this.Ne===E)return;this.Ne=E;
this.Am();},LT:function(G){},Yw:function(HA){var B6=null;switch(HA){case-1:case 0:
B6=this.F_;break;case 1:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;},Ky:
function(E){if(this.Uy===E)return;this.Uy=E;this.Amm();},Amm:function(){var B;var
F;if(!!this.Q){var DV=this.F_;var AdB=this.Uy;var A9=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A9>0){DV.L6(A9%10);A9=(A9/10)|0;}else if(AdB>0)DV.L6(0);else DV.L6(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqL(DV,0x11))?B:null);AdB=AdB-1;}}},Agd:function(
G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;var BP=this.
AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4
],this);},Bx:function(E){if(E<0)E=0;if(E>this.Ga)E=this.Ga;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=E;this.Am();}
,BgC:function(aColor){this.F_.CV(aColor);this.G1.CV(aColor);},BgD:function(aColor
){this.F_.Zv(aColor);this.G1.Zv(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G1={I:this},0);C.Ez._Init.call(this.F_={I:this},
0);A.acg.BW._Init.call(this.EM={I:this},0);A.Core.BF._Init.call(this.Is={I:this}
,0);A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.AvM;this.H(BrU);this.
Ne=A.jb.CJ;this.G1.H(AIL);this.F_.H(AyN);this.EM.H(AyN);this.EM.Nu(2);this.EM.L(
A.jb.E1);this.Is.Filter=4;this.Ir.Filter=5;this.J(this.G1,0);this.J(this.F_,0);this.
J(this.EM,0);this.Is.BG=[this,this.Agd];this.Is.D1=[this,this.Agd];this.Ir.BG=[this
,this.Agc];this.Ir.D1=[this,this.Agc];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G1._Done();this.F_._Done();this.EM._Done();this.Is._Done();this.Ir.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G1._ReInit();this.F_._ReInit();this.EM._ReInit();this.Is._ReInit();this.Ir.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgG:
null,Background:null,Text:null,Ez:-1,M$:0,AmO:0,Aqq:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rq);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M$);this.Text.L(this.AmO);},L6:function(E){if(this.Ez===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.Ez=B6;this.Am();},CV:function(E){
if(this.M$===E)return;this.M$=E;this.Am();},AeX:function(E){if(this.Aqq===E)return;
this.Aqq=E;this.AgG.As(E);if(E===false)this.Text.Z(true);},Zv:function(E){if(this.
AmO===E)return;this.AmO=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TM._Init.call(this.AgG={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Ali);this.M$=A.jb.CJ;this.AgG.Fp(750);this.AgG.Ut(750);this.AgG.Akw(750);
this.AmO=A.jb.Text;this.Background.A1(0x3);this.Background.H(Ali);this.Text.A1(0x3
);this.Text.H(Ali);this.Text.R(Rq);this.J(this.Background,0);this.J(this.Text,0);
this.AgG.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgG._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgG._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FA={Y:null,I$:null,AOf:A.jV,ASg:A.jV,Tm:0,AJQ:0,A2l:false,A1T:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABz],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MT],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABz],this);A.pe([this,this.MT],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABz],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},Byr:function(Mc){A._GetAutoObject(A.Device.Helper
).GQ(Mc);this.Ap2(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap2:function(L9,AcV){A.ab5("%s",Ald);},Vn:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.Bzp],this);else if(!!Ar&&(Ar.PopupState===5)){this.A1T=true;this.Ew(this
);}},Bzp:function(G){if(this.Tm>0){this.A1T=false;this.Adn(this);this.A$b(0);}},
Aiu:function(G){if((this.AJQ+1)<this.Tm)this.A$b(this.AJQ+1);else A.aaS([this,this.
Bw4],this);},Bw5:function(s){this.Aiu(s);},A$b:function(E){this.AJQ=E;if(this.A1T===
false){this.Byr(E);A.aaS([this,this.Bw5],this);var XO=(this.AJQ/this.Tm)*100;A._GetAutoObject(
A.Device.Device).AZ(49,true,A.abk(XO,0,0),0,[this,this.Vn]);}},Aat:function(G){A.
_GetAutoObject(A.Device.Device).AZ(49,false,BrV,0,[this,this.Vn]);this.A2l=true;
A.pe([this,this.ALq],this);},Bw4:function(s){this.Aat(s);},Adn:function(G){this.
I$.Z(true);this.A2l=false;this.ALq(this);},BGY:function(s){this.Adn(s);},AAQ:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A65();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A5).Fz();},A3Y:function(G){A._GetAutoObject(
C.A5).Cb(84);},DK:function(G){this.N.Z(true);this.N.C2(A.aaL(A.ach.E2));this.N.CF=[
this,this.Ew];this.N.Ct(A.aaL(A.ach.ADS));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this,this.AAQ];this.
N.IS.CZ(255);}this.N.C3(A.aaL(A.ach.AeB));this.N.Ca=[this,this.A3Y];},MT:function(
s){this.DK(s);},ABz:function(G){this.Tm=A._GetAutoObject(A.Device.Device).An.B8(
);if(this.Tm>0)A._GetAutoObject(A.Device.Device).AZ(49,true,U3,0,[this,this.Vn]);
else{this.Adn(this);this.Aat(this);}},Aku:function(E){if(this.AOf===E)return;this.
AOf=E;A.pe([this,this.ALq],this);},ALq:function(G){var B;if(this.A2l===false){this.
I$.R(A.jV);return;}var Ao9;if(!A._GetAutoObject(A.Device.Device).An.B8()){var Adh=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABz],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAQ(this);if(!A._GetAutoObject(A.Device.Device
).An.QL()||!Adh)Ao9=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADd(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao9=A.aaR(
A.acf.AN$);else Ao9=A.aaR(A.acf.AN_);A._GetAutoObject(A.Device.Device).An.Bk(Adh
);A.zX([this,this.ABz],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ao9=this.ASg;Ao9=Ao9+(A0n+this.AOf);this.I$.R(Ao9);},Ae8:function(E){if(this.ASg===
E)return;this.ASg=E;A.pe([this,this.ALq],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkO._Init.call(this.I$={
I:this},0);this.__proto__=C.FA;this.Dq(C.Abw);this.Y.H(Fc);this.Y.JZ(1);this.I$.
H(Fc);this.J(this.Y,0);this.J(this.I$,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I$._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7E={Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A7E;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvO={K5:null,M4:null,A0:0,Ym:function(){this.K5=null;this.M4=null;this.A0=0;
},OA:function(A9){var Hh;Hh=A._NewObject(C.A7E,0);Hh.A6=A9;if(!this.K5){this.K5=
Hh;this.M4=Hh;this.A0=1;}else{this.M4.Ah=Hh;this.M4=Hh;this.A0=this.A0+1;}},AmW:
function(){var B;var RP=0;var Op=this.K5;while(!!Op){RP+=Op.A6;Op=Op.Ah;}return RP;
},AjL:function(){if(!this.A0)return 0;return this.AmW()/this.A0;},AqV:function(){
var B;if(!this.A0)return 0;var A1N=this.AjL();var Ade=0;var Op=this.K5;while(!!Op
){Ade+=Math.pow(Op.A6-A1N,2);Op=Op.Ah;}Ade/=this.A0;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.AvO;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOg={Gd:null,Aex:null,Yt:null,C7:null,I$:null,
CP:function(){this.A4Y(this);},Init:function(aArg){A.zV([this,this.A4Y],A._GetAutoObject(
A.Device.Device).Pt,0);A.pe([this,this.A4Y],this);},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},A4Y:function(G){this.Yt.Ch(-1);this.I$.Z(!this.Gd.AX.B8());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gd._Init.call(this.Gd={I:this},0);C.
Aex._Init.call(this.Aex={I:this},0);C.Yt._Init.call(this.Yt={I:this},0);A.acg.C7.
_Init.call(this.C7={I:this},0);C.AkO._Init.call(this.I$={I:this},0);this.__proto__=
C.AOg;this.N.Z(true);this.Dq(C.APb);this.Gd.H(Atd);this.Gd.N8(C.AmN);this.Aex.H(
I1);this.Yt.H(As9);this.C7.DD(BrW);this.C7.DN(BrX);this.C7.Nu(3);this.C7.L(A.jb.
Text);this.I$.H(Ak$);this.I$.R((A.aaR(A.acf.A8o)+A0n)+A.aaR(A.acf.A6H));this.J(this.
Gd,0);this.J(this.Aex,0);this.J(this.Yt,0);this.J(this.C7,0);this.J(this.I$,0);this.
N.CF=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));this.Gd.Zu(A._GetAutoObject(A.Device.
Device).Pt);this.Yt.Zu(A._GetAutoObject(A.Device.Device).Pt);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gd._Done();this.Aex._Done();this.Yt._Done();
this.C7._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gd._ReInit();this.Aex._ReInit();this.Yt._ReInit();this.C7.
_ReInit();this.I$._ReInit();this.I$.R((A.aaR(A.acf.A8o)+A0n)+A.aaR(A.acf.A6H));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aex)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yt).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOj={Auc:null,Aub:null,Aue:null,Aud:null,Aug:null,Auf:null,Aui:null,Auh:null
,AaM:null,YC:null,Abo:null,Abn:null,RatedAttribute:0,Init:function(aArg){this.SN(
2);},DF:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SN(3);break;case 1:this.SN(2);break;case
4:this.SN(1);break;case 3:this.SN(4);break;default:this.SN(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SN(1);break;case 1:this.SN(4);break;case 4:this.
SN(3);break;case 3:this.SN(2);break;default:this.SN(0);}break;default:D5.Mx=true;
}},Ap2:function(L9,AcV){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,AcV,true);Fw.
CX(HY);var AA9=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA9.Initialize(
3,5,0,true);Fw.CX(AA9);L9.Bk(Fw);},Aiu:function(G){var Ap0=0;var A4g=A._GetAutoObject(
A.Device.Device).Bt.B8();var B2=A._NewObject(A.Device.Rating,0);while(Ap0<A4g){B2.
Fl(Ap0,A._GetAutoObject(A.Device.Device).Bt);this.BdW(B2,0);var BCI=A._GetAutoObject(
A.Device.Helper).ZT(2);this.BdW(B2,BCI);Ap0++;}C.FA.Aiu.call(this,G);},Aat:function(
G){A.pe([this,this.Bdz],this);C.FA.Aat.call(this,G);},Adn:function(G){this.Auc=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aue=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auf=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aug=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FA.Adn.
call(this,G);},DK:function(G){C.FA.DK.call(this,G);this.N.OU(true);this.N.OV(true
);},BdW:function(D3,Bcu){if(!D3||(D3.Timestamp<Bcu))return;if(!Bcu){this.Auc.Set(
D3.Appearance,this.Auc.Get(D3.Appearance)+1);this.Aue.Set(D3.Faeces,this.Aue.Get(
D3.Faeces)+1);this.Aug.Set(D3.Feed,this.Aug.Get(D3.Feed)+1);this.Aui.Set(D3.Respiratory
,this.Aui.Get(D3.Respiratory)+1);}else{this.Aub.Set(D3.Appearance,this.Aub.Get(D3.
Appearance)+1);this.Aud.Set(D3.Faeces,this.Aud.Get(D3.Faeces)+1);this.Auf.Set(D3.
Feed,this.Auf.Get(D3.Feed)+1);this.Auh.Set(D3.Respiratory,this.Auh.Get(D3.Respiratory
)+1);}},SN:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YC.KA(this.AaM.LA(E));A.pe([this,this.Bdz],this);},Bdz:function(G){var AaN=null;
var AaO=null;switch(this.RatedAttribute){case 2:{AaN=this.Aub;AaO=this.Auc;}break;
case 4:{AaN=this.Aud;AaO=this.Aue;}break;case 1:{AaN=this.Auf;AaO=this.Aug;}break;
case 0:{AaN=A._NewObject(A.Device.Int32ArrayWrapper,0);AaO=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaN=this.Auh;AaO=this.Aui;}break;default:throw new
Error(BrY+this.RatedAttribute.toFixed());}var AGx=A._NewObject(A.acv.AUy,0);AGx.
OA(AaN.Get(3),A.jb.E1);AGx.OA(AaN.Get(2),A.jb.Ia);AGx.OA(AaN.Get(1),A.jb.Gk);var
AGy=A._NewObject(A.acv.AUy,0);AGy.OA(AaO.Get(3),A.jb.E1);AGy.OA(AaO.Get(2),A.jb.
Ia);AGy.OA(AaO.Get(1),A.jb.Gk);this.Abn.Ab9(AGx);this.Abo.Ab9(AGy);var A4K=AaN.AmW(
)-AaN.Get(5);var Bf_=0;var Bf8=0;if(A4K>0){Bf_=(AaN.Get(2)/A4K)*100;Bf8=(AaN.Get(
1)/A4K)*100;}var ALd=AaO.AmW()-AaO.Get(5);this.I$.Z(!ALd);var Bf$=0;var Bf9=0;if(
ALd>0){Bf$=(AaO.Get(2)/ALd)*100;Bf9=(AaO.Get(1)/ALd)*100;}this.Abn.A_$(A.abk(Bf_
,0,0)+AfG);this.Abn.A_P(A.abk(Bf8,0,0)+AfG);this.Abo.A_$(A.abk(Bf$,0,0)+AfG);this.
Abo.A_P(A.abk(Bf9,0,0)+AfG);},_Init:function(aArg){C.FA._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaM={I:this},0);C.NP._Init.call(this.
YC={I:this},0);C.ACV._Init.call(this.Abo={I:this},0);C.ACV._Init.call(this.Abn={
I:this},0);this.__proto__=C.AOj;this.Dq(C.APc);this.Aku(A.aaR(A.acf.A6I));this.Ae8(
A.aaR(A.acf.Anl));this.YC.H(I1);this.YC.Aj(true);this.YC.T(A.aaR(A.acf.Axq)+A.aaR(
A.acf.Colon));this.YC.Bh(false);this.YC.BnJ(false);this.Abo.H(BrZ);this.Abo.T(A.
aaR(A.acf.AGi));this.Abn.H(Br0);this.Abn.T(A.aaR(A.acf.A7N));this.I$.H(Ak$);this.
J(this.YC,-1);this.J(this.Abo,-1);this.J(this.Abn,-1);this.Auc=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aub=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aue=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aud=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auf=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auh=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FA;this.AaM._Done();this.YC._Done();this.Abo._Done();this.Abn.
_Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.
AaM._ReInit();this.YC._ReInit();this.Abo._ReInit();this.Abn._ReInit();this.Aku(A.
aaR(A.acf.A6I));this.Ae8(A.aaR(A.acf.Anl));this.YC.T(A.aaR(A.acf.Axq)+A.aaR(A.acf.
Colon));this.Abo.T(A.aaR(A.acf.AGi));this.Abn.T(A.aaR(A.acf.A7N));},_Mark:function(
D){var B;C.FA._Mark.call(this,D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aub)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aue)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aud)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auf)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOk={Aew:null,UR:null,US:null,Aev:null,UO:null,UP:null,AJS:0,AJR:0,AJw:0,AJv:
0,Adg:false,CP:function(){this.Aat(this);},Ap2:function(L9,AcV){if(!L9)return;var
Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,AcV,true);Fw.CX(HY);var ABq=A._NewObject(A.Device.Int32FilterCriterion
,0);ABq.Initialize(7,2,0,true);Fw.CX(ABq);L9.Bk(Fw);},Aiu:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJS++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJR++;var Ap0=0;var A4g=A._GetAutoObject(
A.Device.Device).Bt.B8();var Aua;var ABL=0;while(Ap0<A4g){this.Adg=true;Aua=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ap0,9);if(Aua===1)ABL=1;else if((Aua===2)&&(ABL!==1))ABL=
2;Ap0++;}if(ABL===1)this.AJv++;else if(ABL===2)this.AJw++;C.FA.Aiu.call(this,G);
},Aat:function(G){var Bf6=0;var Bf7=0;if(this.Tm>0){Bf6=(this.AJS/this.Tm)*100;Bf7=(
this.AJR/this.Tm)*100;}this.UR.KA(((((((A.abk(Bf6,0,0)+AIM)+this.AJS.toFixed())+
CR)+A.aaR(A.acf.AEF))+CR)+this.Tm.toFixed())+Pb);this.US.KA(((((((A.abk(Bf7,0,0)+
AIM)+this.AJR.toFixed())+CR)+A.aaR(A.acf.AEF))+CR)+this.Tm.toFixed())+Pb);var Bf4=
0;var Bf5=0;if(this.Tm>0){Bf4=(this.AJw/this.Tm)*100;Bf5=(this.AJv/this.Tm)*100;
}this.UO.KA(((((((A.abk(Bf4,0,0)+AIM)+this.AJw.toFixed())+CR)+A.aaR(A.acf.AEF))+
CR)+this.Tm.toFixed())+Pb);this.UP.KA(((((((A.abk(Bf5,0,0)+AIM)+this.AJv.toFixed(
))+CR)+A.aaR(A.acf.AEF))+CR)+this.Tm.toFixed())+Pb);this.I$.Z(!this.Adg);C.FA.Aat.
call(this,G);},Adn:function(G){this.AJv=0;this.AJw=0;this.AJR=0;this.AJS=0;this.
Adg=false;C.FA.Adn.call(this,G);},_Init:function(aArg){C.FA._Init.call(this,aArg
);C.Agw._Init.call(this.Aew={I:this},0);C.Ajp._Init.call(this.UR={I:this},0);C.Ajp.
_Init.call(this.US={I:this},0);C.Agw._Init.call(this.Aev={I:this},0);C.Ajp._Init.
call(this.UO={I:this},0);C.Ajp._Init.call(this.UP={I:this},0);this.__proto__=C.AOk;
this.Dq(C.APd);this.Aku(A.aaR(A.acf.A6J));this.Ae8(A.aaR(A.acf.Aru));this.Aew.H(
I1);this.Aew.Aj(true);this.Aew.T(A.aaR(A.acf.A6N));this.Aew.Bh(false);this.UR.H(
Qc);this.UR.Aj(true);this.UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UR.
Bh(true);this.UR.Akz(2);this.US.H(Aai);this.US.Aj(true);this.US.T(A.aaR(A.acf.Avw
)+A.aaR(A.acf.Colon));this.US.Bh(true);this.US.Akz(1);this.Aev.H(Ale);this.Aev.Aj(
true);this.Aev.T(A.aaR(A.acf.A6O));this.Aev.Bh(false);this.UO.H(Aoj);this.UO.Aj(
true);this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.Bh(true);this.
UO.Akz(2);this.UP.H(As9);this.UP.Aj(true);this.UP.T(A.aaR(A.acf.Avw)+A.aaR(A.acf.
Colon));this.UP.Bh(true);this.UP.Akz(1);this.J(this.Aew,0);this.J(this.UR,0);this.
J(this.US,0);this.J(this.Aev,0);this.J(this.UO,0);this.J(this.UP,0);this.UR.S(A.
aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FA;this.Aew._Done();this.UR._Done(
);this.US._Done();this.Aev._Done();this.UO._Done();this.UP._Done();C.FA._Done.call(
this);},_ReInit:function(){C.FA._ReInit.call(this);this.Aew._ReInit();this.UR._ReInit(
);this.US._ReInit();this.Aev._ReInit();this.UO._ReInit();this.UP._ReInit();this.
Aku(A.aaR(A.acf.A6J));this.Ae8(A.aaR(A.acf.Aru));this.Aew.T(A.aaR(A.acf.A6N));this.
UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.T(A.aaR(A.acf.Avw)+A.aaR(
A.acf.Colon));this.Aev.T(A.aaR(A.acf.A6O));this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UP.T(A.aaR(A.acf.Avw)+A.aaR(A.acf.Colon));this.UR.S(A.aaL(A.fl.
Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((B=this.Aew)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aev)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqK={Lb:null
,Ajd:null,Aje:null,Amn:null,AbA:null,W8:null,Abx:null,S_:null,Aby:null,S$:null,AbB:
null,W9:null,Ay:null,Adb:0,AAB:0,Apr:0,A20:0,Ber:0,CP:function(){this.Aat(this);
},DF:function(G){switch(this.Cq.CO){case 4:{if(this.I$.Fo())return;var QA=this.Y.
Br[1]+80;this.Y.Gc([this.Y.Br[0],QA]);this.Y.VC(null,null);}break;case 5:{if(this.
I$.Fo())return;var QA=this.Y.Br[1]-80;this.Y.Gc([this.Y.Br[0],QA]);this.Y.VC(null
,null);}break;default:C.FA.DF.call(this,G);}},Ap2:function(L9,AcV){if(!L9)return;
var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,AcV,true);Fw.CX(HY);var Ac8=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac8.Initialize(8,2,0,true);Fw.CX(Ac8);L9.Bk(Fw);},Aiu:function(G){if(this.Beh(
)){this.Lb.OA(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arf()){var Qm=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2y=A._GetAutoObject(A.acj.DU).Alz(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajd.
OA(A2y);}}var A3j=A._GetAutoObject(A.Device.Device).Bt.B8()-2;if(A3j>=0){var BAy=
A._GetAutoObject(A.Device.Device).Bt.ADf(A3j,8);var BAx=A._GetAutoObject(A.Device.
Device).Bt.Hv(A3j,6);var Qm=A._GetAutoObject(A.Device.Helper).Me(BAx,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2y=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAy)/Qm)|0;this.Aje.OA(A2y);}}if((A._GetAutoObject(
A.Device.Helper).W.Arf()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RS()<=180)){var ALB=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tt=A._GetAutoObject(A.Device.
Helper).Me(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBP=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALB/Tt);this.Amn.OA(BBP);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adb++;this.Apr=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZT(7)){this.AAB++;this.A20=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Ber=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Du());}}C.FA.Aiu.call(
this,G);},Aat:function(G){var A47=this.Ajd.AjL()|0;var A49=this.Aje.AjL()|0;if(this.
Adb>1)A._GetAutoObject(A.Device.Device).AZ(56,true,this.Adb.toFixed(),0,null);if(
this.Adb===1)A._GetAutoObject(A.Device.Device).AZ(53,true,this.Apr.toFixed(),0,null
);if(this.AAB>1)A._GetAutoObject(A.Device.Device).AZ(52,true,this.AAB.toFixed(),
0,null);if(this.AAB===1)A._GetAutoObject(A.Device.Device).AZ(57,true,(this.A20.toFixed(
)+Ata)+this.Ber.toFixed(),0,null);if(this.Lb.A0>0)this.W8.T(((((((A._GetAutoObject(
A.Device.Converter).Ax2(this.Lb.AjL()|0,1)+AyO)+A._GetAutoObject(A.Device.Converter
).Ax2(this.Lb.AqV()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af4())+AyP)+this.Lb.A0.
toFixed())+Pb);else this.W8.T(A.aaR(A.acf.Unknown));if(this.Ajd.A0>0)this.S_.T(((((((
A._GetAutoObject(A.Device.Converter).Td(A47,2,true)+AyO)+A._GetAutoObject(A.Device.
Converter).Td(this.Ajd.AqV()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).Aay())+AyP
)+this.Ajd.A0.toFixed())+Pb);else this.S_.T(A.aaR(A.acf.Unknown));if(this.Aje.A0>
0)this.S$.T(((((((A._GetAutoObject(A.Device.Converter).Td(A49,2,true)+AyO)+A._GetAutoObject(
A.Device.Converter).Td(this.Aje.AqV()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).
Aay())+AyP)+this.Aje.A0.toFixed())+Pb);else this.S$.T(A.aaR(A.acf.Unknown));if(this.
Amn.A0>0)this.W9.T(((((((A.abk(this.Amn.AjL(),0,1)+AyO)+A.abk(this.Amn.AqV(),0,1
))+CR)+A.aaR(A.acf.Bip))+AyP)+this.Amn.A0.toFixed())+Pb);else this.W9.T(A.aaR(A.
acf.Unknown));var A48=0;var A4_=0;var Adg=false;if(this.Lb.A0>0)Adg=true;var Ig=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ_=A._GetAutoObject(A.Device.
Device).An.Filter.DM(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ_)?AJ_:null))Ig=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ_)?AJ_:null
).A6;}if(this.Ajd.A0>0){Adg=true;A48=A._GetAutoObject(A.Device.Converter).Baw(A47
,Ig);}if(this.Aje.A0>0){Adg=true;A4_=A._GetAutoObject(A.Device.Converter).Baw(A49
,Ig);}this.S_.Akz(A48);this.S$.Akz(A4_);this.I$.Z(!Adg);C.FA.Aat.call(this,G);},
Adn:function(G){this.Lb.Ym();this.Ajd.Ym();this.Aje.Ym();this.Amn.Ym();this.Adb=
0;this.AAB=0;this.Apr=0;this.A20=0;C.FA.Adn.call(this,G);},Fh:function(G){var B;
this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},Beh:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FA._Init.call(this,aArg);C.Agw._Init.call(this.AbA={I:
this},0);C.IK._Init.call(this.W8={I:this},0);C.Agw._Init.call(this.Abx={I:this},
0);C.Ajp._Init.call(this.S_={I:this},0);C.Agw._Init.call(this.Aby={I:this},0);C.
Ajp._Init.call(this.S$={I:this},0);C.Agw._Init.call(this.AbB={I:this},0);C.IK._Init.
call(this.W9={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqK;
this.Dq(C.Avv);this.Aku(A.aaR(A.acf.A6K));this.Ae8(A.aaR(A.acf.Aki));this.AbA.H(
Ath);this.AbA.Aj(true);this.AbA.T(A.aaR(A.acf.A5G));this.AbA.Bh(false);this.AbA.
Ky(5);this.W8.H(A0o);this.W8.Aj(true);this.W8.T(A.jV);this.W8.Bh(true);this.Abx.
H(Ate);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.AL0));this.Abx.Bh(false);this.Abx.
Ky(5);this.S_.H(Atf);this.S_.Aj(true);this.S_.T(A.jV);this.S_.Bh(true);this.S_.KA(
A.jV);this.Aby.H(Atg);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.AuA));this.Aby.Bh(
false);this.Aby.Ky(5);this.S$.H(Br1);this.S$.Aj(true);this.S$.T(A.jV);this.S$.Bh(
true);this.S$.KA(A.jV);this.AbB.H(A0p);this.AbB.Aj(true);this.AbB.T(A.aaR(A.acf.
A5O));this.AbB.Bh(false);this.AbB.Ky(5);this.W9.H(Aor);this.W9.Aj(true);this.W9.
T(A.jV);this.W9.Bh(true);this.Ay.H(Iw);this.J(this.AbA,-1);this.J(this.W8,-1);this.
J(this.Abx,-1);this.J(this.S_,-1);this.J(this.Aby,-1);this.J(this.S$,-1);this.J(
this.AbB,-1);this.J(this.W9,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fh];this.
Lb=A._NewObject(C.AvO,0);this.Ajd=A._NewObject(C.AvO,0);this.Aje=A._NewObject(C.
AvO,0);this.W8.S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.
Ak));this.W9.S(A.aaL(A.fl.Ak));this.Amn=A._NewObject(C.A6U,0);},_Done:function(){
this.__proto__=C.FA;this.AbA._Done();this.W8._Done();this.Abx._Done();this.S_._Done(
);this.Aby._Done();this.S$._Done();this.AbB._Done();this.W9._Done();this.Ay._Done(
);C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.AbA._ReInit(
);this.W8._ReInit();this.Abx._ReInit();this.S_._ReInit();this.Aby._ReInit();this.
S$._ReInit();this.AbB._ReInit();this.W9._ReInit();this.Ay._ReInit();this.Aku(A.aaR(
A.acf.A6K));this.Ae8(A.aaR(A.acf.Aki));this.AbA.T(A.aaR(A.acf.A5G));this.Abx.T(A.
aaR(A.acf.AL0));this.Aby.T(A.aaR(A.acf.AuA));this.AbB.T(A.aaR(A.acf.A5O));this.W8.
S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.Ak));this.W9.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((
B=this.Lb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amn)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abw={_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.Abw;this.
De.Ax(A.aaL(A.ach.ADO));},_className:"Application::HeaderEvaluationFilter"};C.Ku={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjO.DX.call(this
,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).AdY(A._GetAutoObject(A.Device.
Device).Kn));},_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.
Ku;},_ReInit:function(){C.AjO._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avv={Init:function(aArg){this.De.Ax(A._GetAutoObject(A.acj.DU).BdP());},_Init:
function(aArg){C.Abw._Init.call(this,aArg);this.__proto__=C.Avv;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APd={Init:function(
aArg){this.De.Ax(A.aaL(A.ach.Ag3));},_Init:function(aArg){C.Abw._Init.call(this,
aArg);this.__proto__=C.APd;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APc={Init:function(aArg){this.De.Ax(A.aaL(A.ach.Ara));},_Init:function(aArg){
C.Abw._Init.call(this,aArg);this.__proto__=C.APc;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APb={Sp:null,De:null,AP:null,CP:function(){this.Sp.R(A.aaR(A.acf.ANg));},Df:
function(E){C.BR.Df.call(this,E);this.Sp.L(E);this.De.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sp={I:this},0);A.acg.Ap._Init.
call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this},0);this.__proto__=
C.APb;this.Sp.H(Br2);this.Sp.R(A.aaR(A.acf.ANg));this.Sp.A4(0x11);this.De.H(Br3);
this.AP.DD(Br4);this.AP.DN(Br5);this.AP.L(A.jb.Bb);this.J(this.Sp,0);this.J(this.
De,0);this.J(this.AP,0);this.Sp.S(A.aaL(A.fl.Af));this.Sp.AY(A.aaL(A.fl.Ak));this.
De.Ax(A.aaL(A.ach.AQp));},_Done:function(){this.__proto__=C.BR;this.Sp._Done();this.
De._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sp._ReInit();this.De._ReInit();this.AP._ReInit();this.Sp.R(A.aaR(
A.acf.ANg));this.Sp.S(A.aaL(A.fl.Af));this.Sp.AY(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aex={TY:null,AjY:
null,AjV:null,AjW:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.TY={I:this},0);A.acg.Ap._Init.call(this.AjY={I:this},0);A.acg.Ap._Init.
call(this.AjV={I:this},0);A.acg.Ap._Init.call(this.AjW={I:this},0);this.__proto__=
C.Aex;this.TY.H(Br6);this.TY.R(A.aaR(A.acf.Year));this.TY.A4(0x11);this.TY.L(A.jb.
Text);this.AjY.H(BaP);this.AjY.L(A.jb.Text);this.AjV.H(Br7);this.AjV.L(A.jb.Text
);this.AjW.H(Br8);this.AjW.L(A.jb.Text);this.J(this.TY,0);this.J(this.AjY,0);this.
J(this.AjV,0);this.J(this.AjW,0);this.TY.S(A.aaL(A.fl.Ks));this.TY.AY(A.aaL(A.fl.
HJ));this.AjY.Ax(A.aaL(A.ach.AQD));this.AjV.Ax(A.aaL(A.ach.AQC));this.AjW.Ax(A.aaL(
A.ach.AQK));},_Done:function(){this.__proto__=C.EB;this.TY._Done();this.AjY._Done(
);this.AjV._Done();this.AjW._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.TY._ReInit();this.AjY._ReInit();this.AjV._ReInit();this.
AjW._ReInit();this.TY.R(A.aaR(A.acf.Year));this.TY.S(A.aaL(A.fl.Ks));this.TY.AY(
A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.TY).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmN={Ajv:null,AP:null
,A_:null,Ea:null,UL:null,S1:null,Gu:null,XO:0,AtL:0,AlD:0,ABM:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S1.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.S1.M[2]-1,0,this.S1.M[
2]+1,aSize[1]]);this.UL.H([this.S1.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UL.M[2]-1,0,this.UL.M[2]+1,aSize[1]]);this.Gu.H([this.UL.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gu.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.
T(this.ABM.toFixed());this.S1.L(this.V.AQ);this.S1.R(this.AlD.toFixed());this.UL.
L(this.V.AQ);this.UL.R(this.AtL.toFixed());var B2=this.BBO(this.XO);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).XD(B2));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qr(B2));this.Gu.R(A.abk(this.XO,0,0)+AfG);},Ch:function(Ad){if(!this.AX)return;
this.Hr=Ad;Ad=(this.AX.B8()-Ad)-1;if(!!this.AX){this.AlD=this.AX.CE(Ad,1);this.AtL=
this.AX.CE(Ad,2);this.ABM=this.AX.CE(Ad,0);if(this.AlD>0)this.XO=(this.AtL/this.
AlD)*100;else this.XO=0;this.Am();}},BBO:function(XO){if(XO>=8)return 1;else if(
XO>=4)return 2;else return 3;},_Init:function(aArg){C.A$._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajv={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UL={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmN;this.Ajv.H(Aoh);
this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ea.H(Aoh);this.Ea.L(A.jb.Bb);this.UL.
L(A.jb.Text);this.S1.H(Aoh);this.S1.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
Ajv,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.J(this.UL,0);this.
J(this.S1,0);this.J(this.Gu,0);this.UL.S(A.aaL(A.fl.Af));this.S1.S(A.aaL(A.fl.Af
));this.Gu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
A$;this.Ajv._Done();this.AP._Done();this.A_._Done();this.Ea._Done();this.UL._Done(
);this.S1._Done();this.Gu._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$.
_ReInit.call(this);this.Ajv._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ea.
_ReInit();this.UL._ReInit();this.S1._ReInit();this.Gu._ReInit();this.UL.S(A.aaL(
A.fl.Af));this.S1.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajp={
BU:null,AxX:A.jV,Rating:0,Ai:function(Ae){C.IK.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XD(this.Rating));}this.BU.L(this.V.AQ);},S:function(
E){C.IK.S.call(this,E);if((E===A.aaL(A.fl.Ks))||(E===A.aaL(A.fl.Af)))this.BU.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HJ))||(E===A.aaL(A.fl.Ak)))this.BU.S(A.aaL(
A.fl.Ak));else this.BU.S(E);},KA:function(E){if(this.AxX===E)return;this.AxX=E;this.
BU.R(E);},Akz:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.BU={I:this}
,0);this.__proto__=C.Ajp;this.BU.A1(0x34);this.BU.H(Aak);this.BU.Je(true);this.BU.
A4(0x11);this.BU.L(A.jb.Text);this.BU.Aj(true);this.J(this.BU,0);this.BU.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IK;this.BU._Done();C.IK._Done.call(
this);},_ReInit:function(){C.IK._ReInit.call(this);this.BU._ReInit();this.BU.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACV={
N$:null,SQ:null,V:null,AnO:null,AnN:null,Ach:null,Acg:null,DL:JE,BaB:A.jV,A$v:A.
jV,Ab9:function(E){if(this.N$===E)return;this.N$=E;this.SQ.Ab9(this.N$);},T:function(
E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A_$:function(E){if(this.BaB===E
)return;this.BaB=E;this.Ach.R(E);},A_P:function(E){if(this.A$v===E)return;this.A$v=
E;this.Acg.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SQ._Init.
call(this.SQ={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnO={I:this},0);A.acg.AK._Init.call(this.AnN={I:this},0);A.acg.Text._Init.
call(this.Ach={I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);this.__proto__=
C.ACV;this.H(Br9);this.SQ.H(Br_);this.SQ.As(false);this.SQ.BnS(360);this.SQ.Bn2(
0.5);this.V.A1(0x1D);this.V.H(Tf);this.V.Lv(true);this.V.R(JE);this.V.L(A.jb.Text
);this.AnO.H(BaQ);this.AnO.L(A.jb.Ia);this.AnN.H(BaR);this.AnN.L(A.jb.Gk);this.Ach.
A1(0x1D);this.Ach.H(BaQ);this.Ach.L(A.jb.Text);this.Acg.A1(0x1D);this.Acg.H(BaR);
this.Acg.L(A.jb.CU);this.J(this.SQ,0);this.J(this.V,0);this.J(this.AnO,0);this.J(
this.AnN,0);this.J(this.Ach,0);this.J(this.Acg,0);this.SQ.Bn4(A.aaL(A.acv.AT9));
this.V.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SQ._Done();this.V._Done();this.AnO.
_Done();this.AnN._Done();this.Ach._Done();this.Acg._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SQ._ReInit();this.V._ReInit(
);this.AnO._ReInit();this.AnN._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkO={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkO;this.H(U0);this.Background.A1(0x3F);this.Background.
H(U0);this.Background.L(A.jb.Bkr);this.Text.A1(0x3F);this.Text.H(U0);this.Text.A4(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={AkZ:null,N0:null,C9:null,AcD:null,JT:null,TemperatureUnit:null,MP:null,PZ:
null,Sm:null,UA:null,Lw:null,Jk:null,Z6:null,Z5:null,Sn:null,HF:null,AjE:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlL());
this.UA.R(A._GetAutoObject(A.acj.Temperature).AlL());this.Sn.Z(!A._GetAutoObject(
A.Device.Device).AmP);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An6();this.AxU(
);this.Z4();this.AxV();},H0:function(G){this.WX(this);},CC:function(G){var B;C.AB.
CC.call(this,G);A.zX([this,this.AKF],[B=A._GetAutoObject(A.Device.Device),B.AER,
B.AIY],0);A.zX([this,this.AAR],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI0]
,0);A.zX([this,this.AAR],[B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0F],0);A.
zX([this,this.A3E],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Atl],0);A.zX([this
,this.A3x],[B=A._GetAutoObject(A.Device.Device),B.AEO,B.AIV],0);A._GetAutoObject(
A.Device.Device).AhK();if(A._GetAutoObject(A.Device.Device).AmP)A._GetAutoObject(
A.Device.Device).Ae0(true);A._GetAutoObject(A.Device.Device).AxG();A.pe([this,this.
A3x],this);A.pe([this,this.AAR],this);A.pe([this,this.A3E],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhK();A._GetAutoObject(A.Device.Device
).Uw(false);A._GetAutoObject(A.Device.Device).Ae_(false);A._GetAutoObject(A.Device.
Device).Ae0(false);A.z$([this,this.AKF],[B=A._GetAutoObject(A.Device.Device),B.AER
,B.AIY],0);A.z$([this,this.AAR],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI0
],0);A.z$([this,this.AAR],[B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0F],0);A.
z$([this,this.A3E],[B=A._GetAutoObject(A.Device.Device),B.Arx,B.Atl],0);A.z$([this
,this.A3x],[B=A._GetAutoObject(A.Device.Device),B.AEO,B.AIV],0);},AAR:function(G
){this.Am();},An6:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C9.L(A.jb.Gk);this.JT.L(this.C9.AQ);this.
MP.L(this.C9.AQ);this.TemperatureUnit.L(this.C9.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C9.L(A.jb.AV);this.JT.L(A.jb.Text);this.MP.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);this.HF.L(A.jb.Gk);}}},AxU:function(){this.AkZ.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JT.R(A.aaR(A.acf.AD5));this.C9.Ax(A.aaL(A.ach.AvH));this.C9.Cw(0);
this.N0.Cw(0);}break;case 1:{this.AVQ(A._GetAutoObject(A.Device.Device).Lz,false
);this.C9.Ax(A.aaL(A.ach.AvH));this.N0.Cw(0);}break;case 2:{this.Sm.R(A._GetAutoObject(
A.Device.Converter).AkY(A._GetAutoObject(A.Device.Device).AGm));this.AVQ(A._GetAutoObject(
A.Device.Device).Lz,false);this.C9.Ax(null);this.N0.Cw(1);this.AcD.Z(true);this.
PZ.Z(true);this.Sm.Z(true);this.UA.Z(true);}break;case 3:{this.AUT();this.AVQ(A.
_GetAutoObject(A.Device.Device).Lz,true);this.AcD.Z(false);this.PZ.Z(false);this.
Sm.Z(false);this.UA.Z(false);}break;case 4:{this.JT.R(A.aaR(A.acf.BkF));this.MP.
R(A.aaR(A.acu.Akh));this.C9.Ax(A.aaL(A.ach.AvJ));this.C9.Cw(2);this.N0.Cw(0);}break;
default:A.ab5("%s%e",AH7,A._GetAutoObject(A.Device.Device).MeasureState);}},Z4:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device).Lz>=5460))this.N.
C3(null);else this.N.C3(A.aaL(A.ach.AeA));this.N.Ct(null);}break;default:;}},AsF:
function(G){A._GetAutoObject(C.A5).Fz();},WX:function(G){},A0T:function(s){this.
WX(s);},AkT:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBB(this);break;default:;}},A0S:function(s){this.AkT(s);},AVQ:function(
AoK,BAm){if(BAm)this.Lw.L(A.jb.Bm);else this.Lw.L(A.jb.Gk);if(AoK<=3240){this.MP.
Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(true);this.Lw.R(A.aaR(A.acu.AVz
));}else if(AoK>=5460){this.MP.Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(
true);this.Lw.R(A.aaR(A.acu.Bqs));}else{this.MP.Z(true);this.TemperatureUnit.Z(true
);this.Lw.Z(false);this.MP.R(A._GetAutoObject(A.Device.Converter).AkY(AoK));}},AxV:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device
).Lz>=5460))this.JT.R(A.aaR(A.acf.AD5));else this.JT.R(A.aaR(A.acf.Bq2));break;default:;
}},AxW:function(){},BqL:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Z6.As(true);break;case 4:this.Z5.As(true);break;default:{this.Z6.As(
false);this.Z5.As(false);A._GetAutoObject(A.Device.Device).Ae_(false);}}},AKF:function(
G){this.Am();this.AxW();this.BqL();this.BqJ();},A3E:function(G){if(A._GetAutoObject(
A.Device.Device).AmQ){this.Sn.L(A.jb.Ia);this.Sn.Cw(1);}else{this.Sn.L(A.jb.Bm);
this.Sn.Cw(0);}},BBB:function(G){if(!A._GetAutoObject(A.Device.Device).AmP)A._GetAutoObject(
A.Device.Device).Ae0(!A._GetAutoObject(A.Device.Device).AmQ);},BqJ:function(){if(
A._GetAutoObject(A.Device.Device).AmP){this.Sn.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae0(true);else A._GetAutoObject(
A.Device.Device).Ae0(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sn.Z(true);else this.Sn.Z(false);},AKH:function(G){this.CC(this);},AUT:function(
){A.ab5("%s",BaO);},A3x:function(G){if(A._GetAutoObject(A.Device.Device).HF){this.
JT.H(Br$);this.MP.H(Bsa);this.TemperatureUnit.H(Bsb);}else{this.JT.H(Bsc);this.MP.
H(Bsd);this.TemperatureUnit.H(Bse);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Gn._Init.call(this.AkZ={I:this},0);A.acg.Ap._Init.call(this.N0={I:this
},0);A.acg.Ap._Init.call(this.C9={I:this},0);A.acg.Ap._Init.call(this.AcD={I:this
},0);A.acg.Text._Init.call(this.JT={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MP={I:this},0);A.acg.Text._Init.call(this.
PZ={I:this},0);A.acg.Text._Init.call(this.Sm={I:this},0);A.acg.Text._Init.call(this.
UA={I:this},0);C.CG._Init.call(this.Lw={I:this},0);A.Device.TM._Init.call(this.Jk={
I:this},0);A.Device.TM._Init.call(this.Z6={I:this},0);A.Device.TM._Init.call(this.
Z5={I:this},0);A.acg.Ap._Init.call(this.Sn={I:this},0);C.CG._Init.call(this.HF={
I:this},0);A.acl.TM._Init.call(this.AjE={I:this},0);this.__proto__=C.Re;var B;this.
N.Z(true);this.AkZ.Fp(1000);this.AkZ.B3=2;this.N0.H(Bsf);this.N0.L(A.jb.CU);this.
C9.H(Bsg);this.C9.L(A.jb.AV);this.C9.Cw(0);this.C9.Z(true);this.AcD.H(Bsh);this.
AcD.L(A.jb.Text);this.AcD.Z(false);this.JT.Lv(true);this.JT.R(A.aaR(A.acf.AD5));
this.JT.L(A.jb.Text);this.TemperatureUnit.A4(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MP.A4(0x14);this.MP.R(A.aaR(A.acu.Akh));this.MP.L(A.jb.Text);this.PZ.H(Bsi
);this.PZ.R(A.aaR(A.acf.PZ));this.PZ.L(A.jb.Text);this.PZ.Z(false);this.Sm.H(Bsj
);this.Sm.A4(0x14);this.Sm.R(Bsk);this.Sm.L(A.jb.Text);this.Sm.Z(false);this.UA.
H(Bsl);this.UA.R(Bsm);this.UA.L(A.jb.Text);this.UA.Z(false);this.Lw.H(Bsn);this.
Lw.R(A.aaR(A.acu.AVz));this.Lw.A4(0x12);this.Lw.L(A.jb.Gk);this.Jk.B3=false;this.
Jk.Cx=true;this.Jk.HO(1);this.Jk.Fp(4000);this.Jk.Ut(0);this.Z6.B3=false;this.Z6.
Cx=true;this.Z6.HO(2);this.Z6.Fp(400);this.Z6.Ut(200);this.Z5.B3=false;this.Z5.Cx=
true;this.Z5.HO(3);this.Z5.Fp(500);this.Z5.Ut(250);this.Sn.H(Bso);this.HF.H(Bsp);
this.HF.Z(A._GetAutoObject(A.Device.Device).HF);this.HF.R(A.aaR(A.acf.HF));this.
HF.A4(0x12);this.HF.L(A.jb.Gk);this.AjE.As(A._GetAutoObject(A.Device.Device).HF);
this.AjE.Fp(500);this.AjE.Ut(1000);this.J(this.N0,0);this.J(this.C9,0);this.J(this.
AcD,0);this.J(this.JT,0);this.J(this.TemperatureUnit,0);this.J(this.MP,0);this.J(
this.PZ,0);this.J(this.Sm,0);this.J(this.UA,0);this.J(this.Lw,0);this.J(this.Sn,
0);this.J(this.HF,0);this.N.CF=[this,this.AsF];this.N.Ce=[this,this.A0S];this.N.
Ca=[this,this.A0T];this.N.C2(A.aaL(A.ach.Aez));this.AkZ.Q=[B=this.C9,B.ASH,B.Cw];
this.N0.Ax(A.aaL(A.ach.N0));this.C9.Ax(A.aaL(A.ach.AvH));this.AcD.Ax(A.aaL(A.ach.
AQZ));this.JT.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(
A.aaL(A.fl.Aes));this.PZ.S(A.aaL(A.fl.Af));this.Sm.S(A.aaL(A.fl.EK));this.UA.S(A.
aaL(A.fl.EK));this.Lw.S(A.aaL(A.fl.Aes));this.Lw.AY(A.aaL(A.fl.EK));this.Lw.Cl(A.
aaL(A.fl.Af));this.Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0L];this.Z6.
Q=[B=A._GetAutoObject(A.Device.Device),B.AEW,B.AI1];this.Z5.Q=[B=A._GetAutoObject(
A.Device.Device),B.AEW,B.AI1];this.Sn.Ax(A.aaL(A.ach.AqN));this.HF.S(A.aaL(A.fl.
EK));this.HF.AY(A.aaL(A.fl.Ks));this.HF.Cl(A.aaL(A.fl.HJ));this.AjE.Q=[B=this.HF
,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.AkZ._Done(
);this.N0._Done();this.C9._Done();this.AcD._Done();this.JT._Done();this.TemperatureUnit.
_Done();this.MP._Done();this.PZ._Done();this.Sm._Done();this.UA._Done();this.Lw.
_Done();this.Jk._Done();this.Z6._Done();this.Z5._Done();this.Sn._Done();this.HF.
_Done();this.AjE._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.AkZ._ReInit();this.N0._ReInit();this.C9._ReInit();this.AcD._ReInit(
);this.JT._ReInit();this.TemperatureUnit._ReInit();this.MP._ReInit();this.PZ._ReInit(
);this.Sm._ReInit();this.UA._ReInit();this.Lw._ReInit();this.Jk._ReInit();this.Z6.
_ReInit();this.Z5._ReInit();this.Sn._ReInit();this.HF._ReInit();this.AjE._ReInit(
);this.JT.R(A.aaR(A.acf.AD5));this.MP.R(A.aaR(A.acu.Akh));this.PZ.R(A.aaR(A.acf.
PZ));this.Lw.R(A.aaR(A.acu.AVz));this.HF.R(A.aaR(A.acf.HF));this.JT.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(A.aaL(A.fl.Aes));this.PZ.S(
A.aaL(A.fl.Af));this.Sm.S(A.aaL(A.fl.EK));this.UA.S(A.aaL(A.fl.EK));this.Lw.S(A.
aaL(A.fl.Aes));this.Lw.AY(A.aaL(A.fl.EK));this.Lw.Cl(A.aaL(A.fl.Af));this.HF.S(A.
aaL(A.fl.EK));this.HF.AY(A.aaL(A.fl.Ks));this.HF.Cl(A.aaL(A.fl.HJ));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.AkZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AVo={Z4:function(){C.Re.Z4.call(this
);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.N.Ct(
null);this.N.C3(A.aaL(A.ach.AvK));}break;default:;}},WX:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Lz>3240)&&(A._GetAutoObject(A.Device.Device).Lz<5460)){A._GetAutoObject(A.Device.
Device).AhK();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AKH(this);break;default:;}},AxV:function(){C.Re.AxV.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JT.R(A.aaR(A.acf.BkG
));break;default:;}},AxW:function(){C.Re.AxW.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WJ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AUT:function(){this.C9.Ax(
A.aaL(A.ach.AvJ));this.C9.Cw(0);this.N0.Cw(0);},_Init:function(aArg){C.Re._Init.
call(this,aArg);this.__proto__=C.AVo;this.Dq(C.AO$);},_className:"Application::TemperatureMeasurementScreen"
};C.APe={De:null,IR:null,N2:null,AP:null,Ag5:null,A_:null,Df:function(E){C.BR.Df.
call(this,E);this.De.L(E);this.IR.L(E);this.N2.L(E);this.Ag5.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.Ap.
_Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.N2={I:this},0);A.acg.C7.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag5={I:this},0);A.acg.C7.
_Init.call(this.A_={I:this},0);this.__proto__=C.APe;this.De.H(AyH);this.IR.H(Ayk
);this.N2.H(AHK);this.AP.DD(BaS);this.AP.DN(BaT);this.AP.L(A.jb.Bb);this.Ag5.H(Bsq
);this.Ag5.L(A.jb.CU);this.A_.DD(Bsr);this.A_.DN(Bss);this.A_.L(A.jb.Bb);this.J(
this.De,0);this.J(this.IR,0);this.J(this.N2,0);this.J(this.AP,0);this.J(this.Ag5
,0);this.J(this.A_,0);this.De.Ax(A.aaL(A.ach.ADO));this.IR.Ax(A.aaL(A.ach.AeB));
this.N2.Ax(A.aaL(A.ach.AvC));this.Ag5.Ax(A.aaL(A.ach.AQo));},_Done:function(){this.
__proto__=C.BR;this.De._Done();this.IR._Done();this.N2._Done();this.AP._Done();this.
Ag5._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.De._ReInit();this.IR._ReInit();this.N2._ReInit();this.AP._ReInit(
);this.Ag5._ReInit();this.A_._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(
this,D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"
};C.Dd={Es:null,DS:null,AGH:0,ANO:0,Init:function(aArg){A.zV([this,this.ALn],A._GetAutoObject(
A.Device.Device).An,0);A.pe([this,this.ALn],this);},ALn:function(G){var Ad=this.
AGH;if(Ad<0){this.DS.FD();this.DS.EC(this.ANO);return;}this.DS.EC(A._GetAutoObject(
A.Device.Device).An.AmU(Ad,14));this.DS.AFh(A._GetAutoObject(A.Device.Device).An.
Ja(Ad,13));this.DS.Ae1(A._GetAutoObject(A.Device.Device).An.H6(Ad,8));this.DS.Uu(
A._GetAutoObject(A.Device.Device).An.H6(Ad,11));this.DS.Ae5(A._GetAutoObject(A.Device.
Device).An.H6(Ad,12));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.CE(Ad,5));
},A_S:function(E){if(this.AGH===E)return;this.AGH=E;A.pe([this,this.ALn],this);}
,A_i:function(E){if(this.ANO===E)return;this.ANO=E;A.pe([this,this.ALn],this);},
A9t:function(){return this.AGH;},_Init:function(aArg){C.EB._Init.call(this,aArg);
C.CG._Init.call(this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.Dd;this.Es.H(Bst);this.Es.R(A.aaR(A.acf.GM));this.Es.A4(0x11);this.Es.L(A.jb.Text
);this.DS.H(A0q);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.
Es.AY(A.aaL(A.fl.Ak));this.Es.Cl(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GM));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.Ak));this.Es.Cl(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Kt={AgM:null,Text:null,Afk:null,Df:function(E
){C.BR.Df.call(this,E);this.AgM.L(E);this.Text.L(E);this.Afk.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgM={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afk={I:this},0);this.__proto__=
C.Kt;this.AgM.H(Bsu);this.AgM.L(A.jb.Text);this.Text.H(Bsv);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afk.H(Bsw);this.Afk.L(A.jb.Text);this.
J(this.AgM,0);this.J(this.Text,0);this.J(this.Afk,0);this.AgM.Ax(A.aaL(A.ach.APg
));this.Text.S(A.aaL(A.fl.Ks));this.Text.AY(A.aaL(A.fl.HJ));},_Done:function(){this.
__proto__=C.BR;this.AgM._Done();this.Text._Done();this.Afk._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgM._ReInit();this.Text.
_ReInit();this.Afk._ReInit();this.Text.S(A.aaL(A.fl.Ks));this.Text.AY(A.aaL(A.fl.
HJ));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO9={
_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO9;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO$={_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO$;this.J5(this.Afk,-2);this.
Afk.Ax(A.aaL(A.ach.Ag3));},_className:"Application::HeaderDeviceTemperature"};C.
Yt={Ai:function(Ae){C.AmN.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bqt)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlD=0;this.AtL=0;this.XO=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B8();O++){this.AlD+=this.AX.CE(O,1);this.AtL+=
this.AX.CE(O,2);}if(this.AlD>0)this.XO=(this.AtL/this.AlD)*100;this.Am();}},_Init:
function(aArg){C.AmN._Init.call(this,aArg);this.__proto__=C.Yt;this.AP.Z(false);
this.A_.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.
HJ));},_ReInit:function(){C.AmN._ReInit.call(this);this.V.S(A.aaL(A.fl.Ks));this.
V.AY(A.aaL(A.fl.HJ));},_className:"Application::EvaluationLossesSumItem"};C.A6T={
Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A6T;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6U={K5:null,M4:null,A0:0,Ym:function(){this.K5=null;this.M4=null;this.A0=0;
},OA:function(A9){var Hh;Hh=A._NewObject(C.A6T,0);Hh.A6=A9;if(!this.K5){this.K5=
Hh;this.M4=Hh;this.A0=1;}else{this.M4.Ah=Hh;this.M4=Hh;this.A0=this.A0+1;}},AmW:
function(){var B;var RP=0;var Op=this.K5;while(!!Op){RP+=Op.A6;Op=Op.Ah;}return RP;
},AjL:function(){if(!this.A0)return 0;return this.AmW()/this.A0;},AqV:function(){
var B;if(!this.A0)return 0;var A1N=this.AjL();var Ade=0;var Op=this.K5;while(!!Op
){Ade+=Math.pow(Op.A6-A1N,2);Op=Op.Ah;}Ade/=this.A0;Ade=Math.sqrt(Ade);return Ade;
},_Init:function(aArg){this.__proto__=C.A6U;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agw={Background:null,V:null,KW:0,Uy:5,Hl:false
,Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.Hl)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hi.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hl===E)return;this.Hl=E;this.Am();},Ky:function(E){if(this.Uy===
E)return;this.Uy=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agw;this.H(BD);this.Background.A1(
0x3F);this.Background.H(BD);this.V.A1(0x3F);this.V.H(AyE);this.V.A4(0x11);this.V.
L(A.jb.Text);this.KW=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HJ));this.V.Cl(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.Hi;this.Background._Done();this.V._Done();C.Hi._Done.call(this
);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HJ));this.V.Cl(A.aaL(A.fl.
Bg));},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN5={WF:function(G){this.Agv();this.I8(A.aaR(
A.acf.AVy),[this,this.ATW],5);this.I8(A.aaR(A.acf.AVw),[this,this.ATV],7);this.I8(
A.aaR(A.acf.Calving),[this,this.Bmp],11);this.I8(A.aaR(A.acf.AnZ),[this,this.AwT
],2);this.I8(A.aaR(A.acf.AdT),[this,this.AE7],1);this.I8(A.aaR(A.acf.AuD),[this,
this.AE1],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Ane
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},DF:function(G){}
,Abu:function(){return C.ANb;},Abv:function(){return C.APD;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC$());},HQ:function(G){
var F;C.GI.HQ.call(this,G);if(this.Ake()===false){this.N.Ct(A._GetAutoObject(A.Device.
Converter).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Ce=[this,this.Aal];this.N.E5(
A.jV);}this.N.OU(false);this.N.OV(false);},Agh:function(){A._GetAutoObject(C.A5).
Cb(62);},_Init:function(aArg){C.GI._Init.call(this,aArg);this.__proto__=C.AN5;var
B;this.Dq(C.APa);this.Dk(A.aaR(A.acf.ASf));this.AwO([B=A._GetAutoObject(A.Device.
Device),B.A8X,B.Bbz]);},_ReInit:function(){C.GI._ReInit.call(this);this.Dk(A.aaR(
A.acf.ASf));},_className:"Application::DryCowListScreen"};C.AN4={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AN4;this.Lh.As(false);this.Lh.
Aj(false);this.Lh.Z(false);this.Jv.As(false);this.Jv.Aj(false);this.Jv.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APa={DX:function(G){C.Ku.DX.
call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).AdY(9));},_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APa;},_className:"Application::HeaderDryCowListFilter"
};C.Abs={Filter:null,L3:null,AG$:A.jV,Er:0,AGg:1,Operator:1,Bl:function(aSize){C.
Aco.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Aco.Ai.call(this,Ae);this.L3.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mi],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mi],E,0);A.pe([this,this.Mi],this);},Mi:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(
F[0])).DM(this.Er,this.Operator));else this.Tw(null);},Nq:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mi],this);},Tw:function(AH){if(!!AH){var A2p;
if(this.AGg!==1)A2p=this.AGg;else A2p=AH.Operator;this.T((this.AG$+CR)+A._GetAutoObject(
A.Device.Converter).A6P(A2p));this.ZB(false);}else{this.T(this.AG$);this.ZB(true
);}},OT:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mi],this);},AF4:function(E){if(this.AG$===E)return;this.AG$=E;A.pe([this,this.Mi
],this);},A_G:function(E){if(this.AGg===E)return;this.AGg=E;A.pe([this,this.Mi],
this);},_Init:function(aArg){C.Aco._Init.call(this,aArg);C.L3._Init.call(this.L3={
I:this},0);this.__proto__=C.Abs;this.H(As8);this.AW.H(Bsx);this.L3.H(A0r);this.J5(
this.V,-1);this.J(this.L3,0);},_Done:function(){this.__proto__=C.Aco;this.L3._Done(
);C.Aco._Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.L3._ReInit(
);},_Mark:function(D){var B;C.Aco._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L3)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjG={L3:null,Ai:function(Ae){C.QF.
Ai.call(this,Ae);this.L3.L(this.V.AQ);},Tw:function(AH){if(!!AH){this.H_.Cw(1);this.
ZB(true);this.L3.A_w(false);}else{this.H_.Cw(0);this.ZB(false);this.L3.A_w(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.L3._Init.call(this.L3={I:this
},0);this.__proto__=C.AjG;this.Jh=20;this.L3.H(A0r);this.J(this.L3,0);},_Done:function(
){this.__proto__=C.QF;this.L3._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.L3._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.L3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACb={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmV(this.
TableId,this.Er));},Tw:function(AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H_.Cw(1);else this.H_.Cw(0);},Hf:function(G){A.pe([this,this.Mi],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hf],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hf],E,0);if(!!E)A.pe([this,this.Hf],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.ACb;},_ReInit:function(
){C.QF._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APD={YX:null,Jd:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.Jd={I:this},0);this.__proto__=
C.APD;this.A_i(1);this.YX.H(Bsy);this.YX.Lv(true);this.YX.R(A.aaR(A.acf.AEi));this.
YX.L(A.jb.Text);this.Jd.H(Xh);this.Jd.R(((A.aaR(A.acf.RS)+BaU)+A.aaR(A.acf.BaA))+
Pb);this.Jd.L(A.jb.Text);this.J(this.YX,0);this.J(this.Jd,0);this.YX.S(A.aaL(A.fl.
Ak));this.Jd.S(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.Dd;this.YX._Done(
);this.Jd._Done();C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this
);this.YX._ReInit();this.Jd._ReInit();this.YX.R(A.aaR(A.acf.AEi));this.Jd.R(((A.
aaR(A.acf.RS)+BaU)+A.aaR(A.acf.BaA))+Pb);this.YX.S(A.aaL(A.fl.Ak));this.Jd.S(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.YX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANb={Ms:null,KU:null,AdS:null,AP:null,A_:null
,Xu:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ms.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KU.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KU.M[2]-1,0,this.
KU.M[2]+1,aSize[1]]);this.AdS.H([this.KU.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.A$.Ai.call(this,Ae);this.KU.L(this.V.AQ);this.AdS.L(this.V.AQ);if(!!this.Xu&&(
this.Xu!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xu));this.V.L(
A._GetAutoObject(A.acj.Assessment).XD(this.Xu));}else this.Ms.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Mn=this.AX.
CE(Ad,1);var A2Y=this.AX.CE(Ad,29);var Pf=this.AX.Hv(Ad,4);var LV=this.AX.Ja(Ad,
13);var AlG=this.AX.Ja(Ad,17);var AlO=this.AX.H6(Ad,11);this.Xu=A._GetAutoObject(
A.Device.Helper).AMm(LV,AlO,AlG);this.T(Mn.toFixed());this.KU.R(A2Y.toFixed());this.
AdS.R(A._GetAutoObject(A.acj.KQ).AC7(Pf,A._GetAutoObject(A.Device.Helper).Du(),Bsz
));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.Ms={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(
this.AdS={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.ANb;this.Ms.H(Atc);this.AP.L(A.jb.Bb);this.
A_.L(A.jb.Bb);this.J(this.Ms,-1);this.J(this.KU,0);this.J(this.AdS,0);this.J(this.
AP,0);this.J(this.A_,0);this.KU.S(A.aaL(A.fl.Af));this.AdS.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ms._Done();this.KU._Done(
);this.AdS._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Ms._ReInit();this.KU._ReInit();this.AdS.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KU.S(A.aaL(A.fl.Af));this.AdS.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.Ms
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R0={AJU:0,Bee:false,Ai:function(Ae){C.Fy.Ai.call(this,Ae);if(this.Bee){this.
T(A.aaR(A.acf.AN2));this.KA(A.jV);}else{this.T(A.aaR(A.acf.Bkm));if(this.AJU>0)this.
KA(this.AJU.toFixed());else this.KA(Xm);}},Ch:function(G){C.Fy.Ch.call(this,G);this.
Bee=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlB=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlB>0)this.AJU=A._GetAutoObject(A.Device.Helper).
Me(AlB,A._GetAutoObject(A.Device.Helper).Du());else this.AJU=0;this.Am();},_Init:
function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.R0;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMr={ALx:A.jV,Ai:function(Ae){C.Fy.Ai.call(this,Ae);this.T(A.aaR(A.acf.RS));
this.KA(this.ALx);},Ch:function(G){C.Fy.Ch.call(this,G);var Pf=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALx=A._GetAutoObject(A.acj.KQ).AC7(Pf,A._GetAutoObject(
A.Device.Helper).Du(),((((BsA+A.aaR(A.acf.Bhw))+BsB)+A.aaR(A.acf.Bhv))+BsC)+A.aaR(
A.acf.AL1));this.Am();},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=
C.AMr;this.ALx=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fy._ReInit.call(this);
this.ALx=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANX={Ug:null,Ws:null,Wv:null,Ww:null,SC:null,Init:function(aArg){this.Ba(this.
Ug);A.pe([this,this.MT],this);},Adu:function(G){A._GetAutoObject(A.Device.Device
).Dv(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Np._Init.call(this.Ug={
I:this},0);C.Np._Init.call(this.Ws={I:this},0);C.Np._Init.call(this.Wv={I:this},
0);C.AbV._Init.call(this.Ww={I:this},0);C.Ud._Init.call(this.SC={I:this},0);this.
__proto__=C.ANX;var B;this.Dq(C.AO9);this.Ug.H(I1);this.Ug.Aj(true);this.Ug.T(A.
aaR(A.acf.ACH));this.Ug.Bh(false);this.Ug.Ns(83);this.Ws.H(Qc);this.Ws.Aj(true);
this.Ws.T(A.aaR(A.acf.Info));this.Ws.Bh(true);this.Ws.Ns(82);this.Wv.H(Aai);this.
Wv.Aj(true);this.Wv.T(A.aaR(A.acf.AGK));this.Wv.Bh(false);this.Wv.Ns(64);this.Ww.
H(Ale);this.Ww.Aj(true);this.Ww.T(A.aaR(A.acf.TempMeasurement));this.Ww.Bh(true);
this.Ww.Ns(60);this.SC.H(Aoj);this.SC.Aj(true);this.SC.T(A.aaR(A.acf.AC2));this.
SC.Bh(false);this.J(this.Ug,-1);this.J(this.Ws,-1);this.J(this.Wv,-1);this.J(this.
Ww,-1);this.J(this.SC,-1);this.N.Ce=[this,this.Adu];this.N.Ct(A.aaL(A.ach.ADT));
this.Ug.AR=[B=this.Ug,B.Nv];this.Ws.AR=[B=this.Ws,B.Nv];this.Wv.AR=[B=this.Wv,B.
Nv];this.Ww.AR=[B=this.Ww,B.Nv];this.SC.AR=null;this.SC.Ab2([B=this.SC,B.Alj]);this.
SC.Gs([this,this.D_,this.GS]);this.SC.AS$([B=A._GetAutoObject(A.Device.Device),B.
Arx,B.Atl]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ug._Done(
);this.Ws._Done();this.Wv._Done();this.Ww._Done();this.SC._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Ug._ReInit();this.Ws._ReInit(
);this.Wv._ReInit();this.Ww._ReInit();this.SC._ReInit();this.Ug.T(A.aaR(A.acf.ACH
));this.Ws.T(A.aaR(A.acf.Info));this.Wv.T(A.aaR(A.acf.AGK));this.Ww.T(A.aaR(A.acf.
TempMeasurement));this.SC.T(A.aaR(A.acf.AC2));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.ANY={Ue:null,AbT:null,Wt:null,Init:function(aArg
){this.Ba(this.Ue);},BzB:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Bk1:function(G){if(A._GetAutoObject(A.Device.Device).Aa8<=20)A._GetAutoObject(
A.Device.Device).AZ(76,true,BsD,0,null);else A._GetAutoObject(A.Device.Device).AZ(
39,true,A.jV,0,[this,this.BzB]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Np._Init.call(this.Ue={I:this},0);C.Co._Init.call(this.AbT={I:this},0);C.AbV.
_Init.call(this.Wt={I:this},0);this.__proto__=C.ANY;var B;this.Dq(C.AO_);this.Ue.
H(I1);this.Ue.Aj(true);this.Ue.T(A.aaR(A.acf.A5Z));this.Ue.Bh(false);this.Ue.Ns(
65);this.AbT.H(Qc);this.AbT.Aj(true);this.AbT.T(A.aaR(A.acf.A6R));this.AbT.Bh(true
);this.Wt.H(Aai);this.Wt.Aj(true);this.Wt.T(A.aaR(A.acf.RangeTest));this.Wt.Bh(false
);this.Wt.Ns(15);this.J(this.Ue,-1);this.J(this.AbT,-1);this.J(this.Wt,-1);this.
Ue.AR=[B=this.Ue,B.Nv];this.AbT.AR=[this,this.Bk1];this.Wt.AR=[B=this.Wt,B.Nv];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ue._Done();this.AbT._Done(
);this.Wt._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Ue._ReInit();this.AbT._ReInit();this.Wt._ReInit();this.Ue.T(A.aaR(A.acf.A5Z
));this.AbT.T(A.aaR(A.acf.A6R));this.Wt.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.AO_={_Init:function(aArg){
C.Kt._Init.call(this,aArg);this.__proto__=C.AO_;this.Text.R(A.aaR(A.acf.AGK));},
_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGK));},_className:
"Application::HeaderDeviceServiceMenu"};C.Np={Ni:null,Ai:function(Ae){C.AbV.Ai.call(
this,Ae);this.Ni.L(this.V.AQ);},_Init:function(aArg){C.AbV._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Ni={I:this},0);this.__proto__=C.Np;this.Ni.A1(0x38);this.
Ni.H(BsE);this.J(this.Ni,0);this.V.Cl(A.aaL(A.fl.Bg));this.Ni.Ax(A.aaL(A.ach.Ajq
));},_Done:function(){this.__proto__=C.AbV;this.Ni._Done();C.AbV._Done.call(this
);},_ReInit:function(){C.AbV._ReInit.call(this);this.Ni._ReInit();this.V.Cl(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.AbV._Mark.call(this,D);if((B=this.Ni)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.ANT={Ag$:
null,Ahf:null,Ahh:null,Ahd:null,Aj6:null,Ahc:null,Ahb:null,Aha:null,Aj4:null,Ag_:
null,Aj5:null,Ahg:null,Aj7:null,Ahe:null,Aj8:null,Init:function(aArg){this.Ba(this.
Ag$);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PT._Init.call(this.Ag$={
I:this},0);C.PT._Init.call(this.Ahf={I:this},0);C.PT._Init.call(this.Ahh={I:this
},0);C.PT._Init.call(this.Ahd={I:this},0);C.PT._Init.call(this.Aj6={I:this},0);C.
PT._Init.call(this.Ahc={I:this},0);C.PT._Init.call(this.Ahb={I:this},0);C.PT._Init.
call(this.Aha={I:this},0);C.PT._Init.call(this.Aj4={I:this},0);C.PT._Init.call(this.
Ag_={I:this},0);C.PT._Init.call(this.Aj5={I:this},0);C.PT._Init.call(this.Ahg={I:
this},0);C.PT._Init.call(this.Aj7={I:this},0);C.PT._Init.call(this.Ahe={I:this},
0);C.PT._Init.call(this.Aj8={I:this},0);this.__proto__=C.ANT;this.Dq(C.AO5);this.
Ag$.H(Ath);this.Ag$.Aj(true);this.Ag$.SM(1);this.Ahf.H(A0o);this.Ahf.Aj(true);this.
Ahf.Bh(true);this.Ahf.SM(2);this.Ahh.H(Ate);this.Ahh.Aj(true);this.Ahh.Bh(false);
this.Ahh.SM(3);this.Ahd.H(Atf);this.Ahd.Aj(true);this.Ahd.Bh(true);this.Ahd.SM(4
);this.Aj6.H(Ayv);this.Aj6.Aj(true);this.Aj6.SM(5);this.Ahc.H(BsF);this.Ahc.Aj(true
);this.Ahc.Bh(true);this.Ahc.SM(6);this.Ahb.H(Atg);this.Ahb.Aj(true);this.Ahb.Bh(
false);this.Ahb.SM(7);this.Aha.H(AyG);this.Aha.Aj(true);this.Aha.Bh(true);this.Aha.
SM(8);this.Aj4.H(A0p);this.Aj4.Aj(true);this.Aj4.SM(9);this.Ag_.H(Aor);this.Ag_.
Aj(true);this.Ag_.Bh(true);this.Ag_.SM(10);this.Aj5.H(BsG);this.Aj5.Aj(true);this.
Aj5.SM(11);this.Ahg.H(BsH);this.Ahg.Aj(true);this.Ahg.Bh(true);this.Ahg.SM(12);this.
Aj7.H(BsI);this.Aj7.Aj(true);this.Aj7.SM(13);this.Ahe.H(BsJ);this.Ahe.Aj(true);this.
Ahe.Bh(true);this.Ahe.SM(14);this.Aj8.H(BsK);this.Aj8.Aj(true);this.Aj8.SM(15);this.
J(this.Ag$,-1);this.J(this.Ahf,-1);this.J(this.Ahh,-1);this.J(this.Ahd,-1);this.
J(this.Aj6,-1);this.J(this.Ahc,-1);this.J(this.Ahb,-1);this.J(this.Aha,-1);this.
J(this.Aj4,-1);this.J(this.Ag_,-1);this.J(this.Aj5,-1);this.J(this.Ahg,-1);this.
J(this.Aj7,-1);this.J(this.Ahe,-1);this.J(this.Aj8,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.Ag$._Done();this.Ahf._Done();this.Ahh._Done();this.Ahd.
_Done();this.Aj6._Done();this.Ahc._Done();this.Ahb._Done();this.Aha._Done();this.
Aj4._Done();this.Ag_._Done();this.Aj5._Done();this.Ahg._Done();this.Aj7._Done();
this.Ahe._Done();this.Aj8._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej.
_ReInit.call(this);this.Ag$._ReInit();this.Ahf._ReInit();this.Ahh._ReInit();this.
Ahd._ReInit();this.Aj6._ReInit();this.Ahc._ReInit();this.Ahb._ReInit();this.Aha.
_ReInit();this.Aj4._ReInit();this.Ag_._ReInit();this.Aj5._ReInit();this.Ahg._ReInit(
);this.Aj7._ReInit();this.Ahe._ReInit();this.Aj8._ReInit();},_Mark:function(D){var
B;C.Ej._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO5={_Init:function(aArg){C.Kt._Init.call(this
,aArg);this.__proto__=C.AO5;this.Text.R(A.aaR(A.acf.A6o));},_ReInit:function(){C.
Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6o));},_className:"Application::HeaderDeviceCheck"
};C.PT={DeviceComponentToString:null,Ko:null,Au0:0,BcP:false,CP:function(){this.
V.R(this.DeviceComponentToString.BT(this.Au0));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Ko.H(A.abM(this.Ko.M,aSize[0]-((B=this.Ko.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Ko.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Ko.
AE$(this.V.AQ);if(this.BcP)this.Ko.AwG(A.jb.E1);else this.Ko.AwG(A.jb.Gk);},SM:function(
E){if(this.Au0===E)return;this.Au0=E;this.T(this.DeviceComponentToString.BT(E));
this.DX(this);},DX:function(G){this.BcP=A._GetAutoObject(A.Device.Device).AJL(this.
Au0);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Ko._Init.call(this.Ko={I:this
},0);this.__proto__=C.PT;this.V.H(BsL);this.V.A4(0x11);this.Ko.H(BsM);this.J(this.
Ko,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Ko._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Ko._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sl={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAQ],this);},
Ba:function(E){C.AB.Ba.call(this,E);this.ALs(this);this.DK(this);},CC:function(G
){A.pe([this,this.MT],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[
3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},AAQ:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A65();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MT],this);},Ew:function(G){A._GetAutoObject(C.A5).Fz(
);},A3Y:function(G){A._GetAutoObject(C.A5).Cb(84);},DK:function(G){this.N.C2(A.aaL(
A.ach.E2));this.N.CF=[this,this.Ew];this.N.Ct(A.aaL(A.ach.ADS));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this
,this.AAQ];this.N.IS.CZ(255);}this.N.C3(A.aaL(A.ach.AeB));this.N.Ca=[this,this.A3Y
];},MT:function(s){this.DK(s);},ALs:function(G){A.ab5("%s",BsN);},BG6:function(s
){this.ALs(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sl;this.N.As(false);this.N.Z(true);this.Dq(C.
Abw);this.Ay.H(Iw);this.DY.A1(0x3F);this.DY.H(Fc);this.DY.L(A.jb.CJ);this.Y.H(L8
);this.Y.JZ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fh];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOh={Yk:null,Yj:null,X8:null
,TN:null,DK:function(G){C.Sl.DK.call(this,G);if(this.AV===this.TN){this.N.Ct(null
);this.N.Ce=null;this.N.C3(null);this.N.Ca=null;}},ALs:function(G){if(this.AV===
this.TN)this.Dq(C.APe);else this.Dq(C.Abw);},BzU:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQi);case 1:return A.
aaL(A.ach.AQj);default:A.ab5("%s%s",BsO,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BzV:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQk);case 1:return A.aaL(A.ach.AQl);default:
A.ab5("%s%s",AIN,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ik:function(G){var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yk)A._GetAutoObject(C.A5).Cb(66);else if(Cy===this.Yj)A._GetAutoObject(C.A5).Cb(
56);else if(Cy===this.X8)A._GetAutoObject(C.A5).Cb(58);else if(Cy===this.TN)A._GetAutoObject(
C.A5).Cb(59);},_Init:function(aArg){C.Sl._Init.call(this,aArg);C.Fm._Init.call(this.
Yk={I:this},0);C.Fm._Init.call(this.Yj={I:this},0);C.Fm._Init.call(this.X8={I:this
},0);C.Fm._Init.call(this.TN={I:this},0);this.__proto__=C.AOh;this.Yk.H(Qa);this.
Yk.Aj(true);this.Yk.T(A.aaR(A.acf.Afv));this.Yj.H(J9);this.Yj.Aj(true);this.Yj.T(
A.aaR(A.acf.Temperature));this.X8.H(BsP);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.
Rating));this.TN.H(BsQ);this.TN.Aj(true);this.TN.T(A.aaR(A.acf.A7$));this.J(this.
Yk,0);this.J(this.Yj,0);this.J(this.X8,0);this.J(this.TN,0);this.Yk.AR=[this,this.
Ik];this.Yk.DC(this.BzV());this.Yj.AR=[this,this.Ik];this.Yj.DC(this.BzU());this.
X8.AR=[this,this.Ik];this.X8.DC(A.aaL(A.ach.AQg));this.TN.AR=[this,this.Ik];this.
TN.DC(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.Sl;this.Yk._Done();this.
Yj._Done();this.X8._Done();this.TN._Done();C.Sl._Done.call(this);},_ReInit:function(
){C.Sl._ReInit.call(this);this.Yk._ReInit();this.Yj._ReInit();this.X8._ReInit();
this.TN._ReInit();this.Yk.T(A.aaR(A.acf.Afv));this.Yj.T(A.aaR(A.acf.Temperature)
);this.X8.T(A.aaR(A.acf.Rating));this.TN.T(A.aaR(A.acf.A7$));},_Mark:function(D){
var B;C.Sl._Mark.call(this,D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOi={VP:null,X_:null,Yl:null,ALs:function(G){this.Dq(C.Avv);},BzY:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ6
);case 1:return A.aaL(A.ach.AQ7);default:A.ab5("%s%s",AIN,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ik:function(G){var Cy=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VP)A._GetAutoObject(C.A5).Cb(68);else if(Cy===
this.Yl)A._GetAutoObject(C.A5).Cb(57);else if(Cy===this.X_)A._GetAutoObject(C.A5
).Cb(67);},BzX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP5);case 1:return A.aaL(A.ach.AP6);default:A.ab5("%s%s",AIN
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BzZ:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ8
);case 1:return A.aaL(A.ach.AQ9);default:A.ab5("%s%s",AIN,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sl._Init.call(
this,aArg);C.Fm._Init.call(this.VP={I:this},0);C.Fm._Init.call(this.X_={I:this},
0);C.Fm._Init.call(this.Yl={I:this},0);this.__proto__=C.AOi;this.VP.H(Qa);this.VP.
Aj(true);this.VP.T(A.aaR(A.acf.Bas));this.X_.H(A0s);this.X_.Aj(true);this.X_.T(A.
aaR(A.acf.A5P));this.Yl.H(Oh);this.Yl.Aj(true);this.Yl.T(A.aaR(A.acf.Bav));this.
J(this.VP,0);this.J(this.X_,0);this.J(this.Yl,0);this.VP.AR=[this,this.Ik];this.
VP.DC(this.BzY());this.VP.Ab6(A.aaL(A.ach.N1));this.X_.AR=[this,this.Ik];this.X_.
DC(this.BzX());this.Yl.AR=[this,this.Ik];this.Yl.DC(this.BzZ());},_Done:function(
){this.__proto__=C.Sl;this.VP._Done();this.X_._Done();this.Yl._Done();C.Sl._Done.
call(this);},_ReInit:function(){C.Sl._ReInit.call(this);this.VP._ReInit();this.X_.
_ReInit();this.Yl._ReInit();this.VP.T(A.aaR(A.acf.Bas));this.X_.T(A.aaR(A.acf.A5P
));this.Yl.T(A.aaR(A.acf.Bav));},_Mark:function(D){var B;C.Sl._Mark.call(this,D);
if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOl={Beh:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZT(0));},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.
__proto__=C.AOl;this.Ae8(A.aaR(A.acf.A8u));},_ReInit:function(){C.AqK._ReInit.call(
this);this.Ae8(A.aaR(A.acf.A8u));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOe={Aig:null,Abz:null,UQ:null,Aa2:null,Pq:null,Ajm:null,Agy:null,Ajn:null,Agz:
null,Ay:null,AaT:null,Adb:0,Apr:0,DF:function(G){switch(this.Cq.CO){case 4:{if(this.
I$.Fo())return;var QA=this.Y.Br[1]+80;this.Y.Gc([this.Y.Br[0],QA]);this.Y.VC(null
,null);}break;case 5:{if(this.I$.Fo())return;var QA=this.Y.Br[1]-80;this.Y.Gc([this.
Y.Br[0],QA]);this.Y.VC(null,null);}break;default:C.FA.DF.call(this,G);}},Ap2:function(
L9,AcV){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(
A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,AcV,true);Fw.CX(HY);var Ac8=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac8.Initialize(8,2,0,true);Fw.CX(Ac8
);L9.Bk(Fw);},Aiu:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arf()){this.
Aig.OA(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azs=this.BzS(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaT.Set(Azs,this.AaT.Get(Azs)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adb++;this.Apr=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FA.Aiu.call(
this,G);},Aat:function(G){if(this.Adb>1)A._GetAutoObject(A.Device.Device).AZ(56,
true,this.Adb.toFixed(),0,null);if(this.Adb===1)A._GetAutoObject(A.Device.Device
).AZ(53,true,this.Apr.toFixed(),0,null);if(this.Aig.A0>0)this.UQ.T(((((((A._GetAutoObject(
A.Device.Converter).Ax2(this.Aig.AjL()|0,1)+AyO)+A._GetAutoObject(A.Device.Converter
).Ax2(this.Aig.AqV()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af4())+AyP)+this.Aig.A0.
toFixed())+Pb);else this.UQ.T(A.aaR(A.acf.Unknown));var RP=this.AaT.AmW();var O;
for(O=0;O<this.AaT.MN;O++){var Bj=this.BAb(O);if(!!Bj){var CB=this.AaT.Get(O);Bj.
BmA(CB);if(!RP)Bj.A_M(0);else Bj.A_M(Math.round((CB*100)/RP)|0);Bj.Bog(this.BAa(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adg=false;if(this.Aig.A0>0)
Adg=true;this.I$.Z(!Adg);C.FA.Aat.call(this,G);},Adn:function(G){this.Aig.Ym();this.
AaT.FD();this.Adb=0;this.Apr=0;C.FA.Adn.call(this,G);},BAb:function(aIndex){var Bj=
null;switch(aIndex){case 0:Bj=this.Pq;break;case 1:Bj=this.Ajm;break;case 2:Bj=this.
Agy;break;case 3:Bj=this.Ajn;break;case 4:Bj=this.Agz;break;default:throw new Error(
AyQ+aIndex.toFixed());}return Bj;},BAa:function(aIndex,AoF){var B;var Tx=A.jV;switch(
AoF){case 0:{switch(aIndex){case 0:Tx=BsR;break;case 1:Tx=BsS;break;case 2:Tx=BsT;
break;case 3:Tx=BsU;break;case 4:Tx=BsV;break;default:throw new Error(AyQ+aIndex.
toFixed());}Tx=Tx+(CR+A.aaR(A.acf.AAi));}break;case 1:{switch(aIndex){case 0:Tx=
BsW;break;case 1:Tx=BsX;break;case 2:Tx=BsY;break;case 3:Tx=BsZ;break;case 4:Tx=
Bs0;break;default:throw new Error(AyQ+aIndex.toFixed());}Tx=Tx+(CR+A.aaR(A.acf.A7R
));}break;default:A.ab5("%s%e",BaV,AoF);}return Tx;},BzT:function(AI8,AoF){var Ac9=
0;switch(AoF){case 0:switch(AI8){case 0:Ac9=35000;break;case 1:Ac9=40000;break;case
2:Ac9=45000;break;case 3:Ac9=50000;break;case 4:Ac9=2147483647;break;default:throw new
Error(AyQ+AI8.toFixed());}break;case 1:switch(AI8){case 0:Ac9=36287;break;case 1:
Ac9=40823;break;case 2:Ac9=45359;break;case 3:Ac9=49895;break;case 4:Ac9=2147483647;
break;default:throw new Error(AyQ+AI8.toFixed());}break;default:A.ab5("%s%e",BaV
,AoF);}return Ac9;},BzS:function(A9,AoF){var Azs=0;var O;for(O=0;O<this.AaT.MN;O++
)if(A9<this.BzT(O,AoF)){Azs=O;break;}return Azs;},Fh:function(G){var B;this.Ay.MH((
B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[
1]);},_Init:function(aArg){C.FA._Init.call(this,aArg);C.Agw._Init.call(this.Abz={
I:this},0);C.IK._Init.call(this.UQ={I:this},0);C.Aa2._Init.call(this.Aa2={I:this
},0);C.Pq._Init.call(this.Pq={I:this},0);C.Pq._Init.call(this.Ajm={I:this},0);C.
Pq._Init.call(this.Agy={I:this},0);C.Pq._Init.call(this.Ajn={I:this},0);C.Pq._Init.
call(this.Agz={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaT={I:this},0);this.__proto__=C.AOe;this.Dq(C.Avv);this.Aku(A.aaR(
A.acf.A6G));this.Ae8(A.aaR(A.acf.A8n));this.Abz.H(Ath);this.Abz.Aj(true);this.Abz.
T(A.aaR(A.acf.A5E));this.Abz.Bh(false);this.Abz.Ky(5);this.UQ.H(A0o);this.UQ.Aj(
true);this.UQ.T(A.jV);this.UQ.Bh(true);this.UQ.Ky(5);this.Aa2.H(Ate);this.Aa2.Aj(
true);this.Pq.H(Atf);this.Pq.Aj(true);this.Pq.Bh(true);this.Ajm.H(Atg);this.Ajm.
Aj(true);this.Agy.H(AyG);this.Agy.Aj(true);this.Agy.Bh(true);this.Ajn.H(A0p);this.
Ajn.Aj(true);this.Agz.H(Aor);this.Agz.Aj(true);this.Agz.Bh(true);this.Ay.H(Iw);this.
AaT.ZC(5);this.J(this.Abz,-1);this.J(this.UQ,-1);this.J(this.Aa2,-1);this.J(this.
Pq,-1);this.J(this.Ajm,-1);this.J(this.Agy,-1);this.J(this.Ajn,-1);this.J(this.Agz
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fh];this.Aig=A._NewObject(C.AvO,0);
this.UQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FA;this.Abz._Done(
);this.UQ._Done();this.Aa2._Done();this.Pq._Done();this.Ajm._Done();this.Agy._Done(
);this.Ajn._Done();this.Agz._Done();this.Ay._Done();this.AaT._Done();C.FA._Done.
call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.Abz._ReInit();this.
UQ._ReInit();this.Aa2._ReInit();this.Pq._ReInit();this.Ajm._ReInit();this.Agy._ReInit(
);this.Ajn._ReInit();this.Agz._ReInit();this.Ay._ReInit();this.AaT._ReInit();this.
Aku(A.aaR(A.acf.A6G));this.Ae8(A.aaR(A.acf.A8n));this.Abz.T(A.aaR(A.acf.A5E));this.
UQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((B=this.
Aig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa2={Ic:null,Gu:null
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.Ic.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IK.Ai.call(this,Ae);this.Ic.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.Ic={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Aa2;this.T(A.aaR(
A.acf.AHm));this.Ic.H(Bs1);this.Ic.Lv(true);this.Ic.R(A.aaR(A.acf.Aqx));this.Ic.
L(A.jb.Text);this.Gu.H(BaW);this.Gu.R(AfG);this.Gu.L(A.jb.Text);this.J(this.Ic,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.HJ));this.Ic.S(A.aaL(A.fl.HJ));this.Gu.S(
A.aaL(A.fl.Ks));},_Done:function(){this.__proto__=C.IK;this.Ic._Done();this.Gu._Done(
);C.IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.Ic._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AHm));this.Ic.R(A.aaR(A.acf.Aqx));this.V.
S(A.aaL(A.fl.HJ));this.Ic.S(A.aaL(A.fl.HJ));this.Gu.S(A.aaL(A.fl.Ks));},_Mark:function(
D){var B;C.IK._Mark.call(this,D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pq={AP:null,A_:null,P3:null,Ic:null,Gu:null,Bau:A.jV,Aqx:0,A$i:0,Bl:function(
aSize){C.IK.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.Ic.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.Ic.M[2]-1,0,this.Ic.M[2]+1,aSize[
1]]);this.Gu.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IK.Ai.call(
this,Ae);this.P3.L(this.V.AQ);this.Ic.L(this.V.AQ);this.Gu.L(this.V.AQ);},Bog:function(
E){if(this.Bau===E)return;this.Bau=E;this.P3.R(E);},BmA:function(E){if(this.Aqx===
E)return;this.Aqx=E;this.Ic.R(E.toFixed());},A_M:function(E){if(this.A$i===E)return;
this.A$i=E;this.Gu.R(E.toFixed()+AsZ);},_Init:function(aArg){C.IK._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.Ic={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Pq;this.AP.L(
A.jb.Bb);this.A_.L(A.jb.Bb);this.P3.H(Bs2);this.P3.R(A.aaR(A.acf.AHm));this.P3.L(
A.jb.Text);this.Ic.R(U3);this.Ic.L(A.jb.Text);this.Gu.R(Bs3);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.P3,0);this.J(this.Ic,0);this.J(
this.Gu,0);this.P3.S(A.aaL(A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IK;this.AP._Done();this.A_._Done();this.
P3._Done();this.Ic._Done();this.Gu._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.P3._ReInit();
this.Ic._ReInit();this.Gu._ReInit();this.P3.R(A.aaR(A.acf.AHm));this.P3.S(A.aaL(
A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IK._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMD={AKU:
function(){var Be=A._GetAutoObject(A.Device.Helper).MC();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amv._Init.call(this,aArg);this.__proto__=
C.AMD;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARK={R7:null,
Sb:null,R6:null,R_:null,Ps:null,R9:null,ALp:function(G){A.pe([this,this.BC6],this
);A.pe([this,this.BCU],this);A.pe([this,this.BCQ],this);A.pe([this,this.A4T],this
);A.pe([this,this.BCX],this);A.pe([this,this.BCV],this);},Ik:function(G){var Cy=(
C.QY.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Sb)A._GetAutoObject(C.A5
).Cb(20);else if(Cy===this.Ps)A._GetAutoObject(C.A5).Cb(14);else if(Cy===this.R7
)A._GetAutoObject(C.A5).Cb(12);else if(Cy===this.R_)A._GetAutoObject(C.A5).Cb(43
);else if(Cy===this.R6)A._GetAutoObject(C.A5).Cb(51);else if(Cy===this.R9)A._GetAutoObject(
C.A5).Cb(61);},BCU:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var
Azz=A._NewObject(A.Device.BoolFilterCriterion,0);Azz.Initialize(9,0,true,true);Be.
CX(Azz);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Ps.ZA(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},BC6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).MC();var ABJ=A._NewObject(A.Device.BoolFilterCriterion,0);ABJ.Initialize(
12,0,true,true);Be.CX(ABJ);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sb.ZA(
A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BCQ:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).MC();var Azf=A._NewObject(A.Device.BoolFilterCriterion
,0);Azf.Initialize(8,0,true,true);Be.CX(Azf);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R7.ZA(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},A4T:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6Z(A._GetAutoObject(A.Device.Device
).ABP);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R6.ZA(A._GetAutoObject(A.
Device.Device).An.B8().toFixed());},BCX:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A68();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R_.ZA(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},BCV:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AC$();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R9.ZA(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},_Init:function(aArg){C.T$._Init.call(this,
aArg);C.QY._Init.call(this.R7={I:this},0);C.QY._Init.call(this.Sb={I:this},0);C.
QY._Init.call(this.R6={I:this},0);C.QY._Init.call(this.R_={I:this},0);C.QY._Init.
call(this.Ps={I:this},0);C.QY._Init.call(this.R9={I:this},0);this.__proto__=C.ARK;
this.R7.H(Qa);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.Alarm));this.R7.Ab3(true);this.
Sb.H(A0s);this.Sb.Aj(true);this.Sb.T(A.aaR(A.acf.Asd));this.Sb.Ab3(true);this.R6.
H(Oh);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.ActionList));this.R6.Ab3(true);this.
R_.H(Qb);this.R_.Aj(true);this.R_.T(A.aaR(A.acf.AOI));this.R_.Ab3(true);this.Ps.
H(Te);this.Ps.As(false);this.Ps.Aj(false);this.Ps.Z(false);this.Ps.T(A.aaR(A.acf.
ACu));this.Ps.Ab3(true);this.R9.H(UW);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.A6B
));this.R9.Ab3(true);this.J(this.R7,-1);this.J(this.Sb,-1);this.J(this.R6,-1);this.
J(this.R_,-1);this.J(this.Ps,-1);this.J(this.R9,-1);this.R7.AR=[this,this.AcS];this.
R7.DC(A.aaL(A.ach.ADJ));this.R7.Ab6(A.aaL(A.ach.N1));this.Sb.AR=[this,this.AcS];
this.Sb.DC(A.aaL(A.ach.AQ3));this.Sb.Ab6(A.aaL(A.ach.N1));this.R6.AR=[this,this.
AcS];this.R6.DC(A.aaL(A.ach.APP));this.R6.Ab6(A.aaL(A.ach.N1));this.R_.AR=[this,
this.AcS];this.R_.DC(A.aaL(A.ach.AQn));this.R_.Ab6(A.aaL(A.ach.N1));this.Ps.AR=[
this,this.AcS];this.Ps.DC(A.aaL(A.ach.ADJ));this.Ps.Ab6(A.aaL(A.ach.N1));this.R9.
AR=[this,this.AcS];this.R9.DC(A.aaL(A.ach.AQd));this.R9.Ab6(A.aaL(A.ach.N1));},_Done:
function(){this.__proto__=C.T$;this.R7._Done();this.Sb._Done();this.R6._Done();this.
R_._Done();this.Ps._Done();this.R9._Done();C.T$._Done.call(this);},_ReInit:function(
){C.T$._ReInit.call(this);this.R7._ReInit();this.Sb._ReInit();this.R6._ReInit();
this.R_._ReInit();this.Ps._ReInit();this.R9._ReInit();this.R7.T(A.aaR(A.acf.Alarm
));this.Sb.T(A.aaR(A.acf.Asd));this.R6.T(A.aaR(A.acf.ActionList));this.R_.T(A.aaR(
A.acf.AOI));this.Ps.T(A.aaR(A.acf.ACu));this.R9.T(A.aaR(A.acf.A6B));},_Mark:function(
D){var B;C.T$._Mark.call(this,D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARJ={Sc:null,VO:null,R$:null,R8:null,Sa:null,ALp:function(G){A.pe([this,this.
BCR],this);A.pe([this,this.BC1],this);A.pe([this,this.BC2],this);A.pe([this,this.
BC7],this);A.pe([this,this.BC3],this);},Ik:function(G){var Cy=(C.QY.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VO)A._GetAutoObject(C.A5).Cb(90);if(Cy===this.
R8)A._GetAutoObject(C.A5).Cb(74);if(Cy===this.R$)A._GetAutoObject(C.A5).Cb(71);if(
Cy===this.Sa)A._GetAutoObject(C.A5).Cb(46);if(Cy===this.Sc)A._GetAutoObject(C.A5
).Cb(85);},BC2:function(G){var Be=A._GetAutoObject(A.Device.Helper).ADc();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.Sa.ZA(A._GetAutoObject(A.Device.Device).An.B8().
toFixed());},BC7:function(G){var Be=A._GetAutoObject(A.Device.Helper).A7h(Math.max(
A._GetAutoObject(A.Device.Device).AvW,A._GetAutoObject(A.Device.Helper).A6$(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sc.ZA(
A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BC1:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A7c();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R$.ZA(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BCR:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOJ();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R8.ZA(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BC3:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avr();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VO.ZA(A._GetAutoObject(A.Device.Device).An.B8().toFixed()
);},_Init:function(aArg){C.T$._Init.call(this,aArg);C.QY._Init.call(this.Sc={I:this
},0);C.QY._Init.call(this.VO={I:this},0);C.QY._Init.call(this.R$={I:this},0);C.QY.
_Init.call(this.R8={I:this},0);C.QY._Init.call(this.Sa={I:this},0);this.__proto__=
C.ARJ;this.Sc.H(Bs4);this.Sc.Aj(true);this.Sc.T(A.aaR(A.acf.A8f));this.Sc.Ab3(true
);this.VO.H(Bs5);this.VO.Aj(true);this.VO.T(A.aaR(A.acf.AGp));this.R$.H(Bs6);this.
R$.Aj(true);this.R$.T(A.aaR(A.acf.A8h));this.R$.Ab3(true);this.R8.H(Bs7);this.R8.
Aj(true);this.R8.T(A.aaR(A.acf.AB$));this.R8.Ab3(true);this.Sa.H(Bs8);this.Sa.Aj(
true);this.Sa.T(A.aaR(A.acf.ASl));this.Sa.Ab3(true);this.J(this.Sc,-1);this.J(this.
VO,-1);this.J(this.R$,-1);this.J(this.R8,-1);this.J(this.Sa,-1);this.Sc.AR=[this
,this.AcS];this.Sc.DC(A.aaL(A.ach.AQF));this.Sc.Ab6(A.aaL(A.ach.N1));this.VO.AR=[
this,this.AcS];this.VO.DC(A.aaL(A.ach.ADZ));this.R$.AR=[this,this.AcS];this.R$.DC(
A.aaL(A.ach.AQH));this.R$.Ab6(A.aaL(A.ach.N1));this.R8.AR=[this,this.AcS];this.R8.
DC(A.aaL(A.ach.AP_));this.R8.Ab6(A.aaL(A.ach.N1));this.Sa.AR=[this,this.AcS];this.
Sa.DC(A.aaL(A.ach.AQJ));this.Sa.Ab6(A.aaL(A.ach.N1));},_Done:function(){this.__proto__=
C.T$;this.Sc._Done();this.VO._Done();this.R$._Done();this.R8._Done();this.Sa._Done(
);C.T$._Done.call(this);},_ReInit:function(){C.T$._ReInit.call(this);this.Sc._ReInit(
);this.VO._ReInit();this.R$._ReInit();this.R8._ReInit();this.Sa._ReInit();this.Sc.
T(A.aaR(A.acf.A8f));this.VO.T(A.aaR(A.acf.AGp));this.R$.T(A.aaR(A.acf.A8h));this.
R8.T(A.aaR(A.acf.AB$));this.Sa.T(A.aaR(A.acf.ASl));},_Mark:function(D){var B;C.T$.
_Mark.call(this,D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASj={WF:function(G){this.Agv(
);this.AMb();this.A5g(A.aaR(A.acf.A7U),[this,this.BnX],131072);this.A5g(A.aaR(A.
acf.A7T),[this,this.BnW],16384);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS
).Mq(A.aaR(A.acf.ARD)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6
);},DF:function(G){},Abu:function(){return C.Aqt;},Abv:function(){return C.Aq0;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7c());},HQ:function(G){C.Mo.HQ.call(this,G);if(this.Ake()===false){this.
N.Ct(A._GetAutoObject(A.Device.Converter).Ajo(A._GetAutoObject(A.Device.Converter
).AL8(this.L2.ADe())));this.N.Ce=[this,this.Aal];this.N.E5(A.jV);}this.N.OU(false
);this.N.OV(false);},Agh:function(){A._GetAutoObject(C.A5).Cb(72);},BnW:function(
G){this.AGM(16384);},BnX:function(G){this.AGM(131072);},_Init:function(aArg){C.Mo.
_Init.call(this,aArg);this.__proto__=C.ASj;this.Dq(C.APs);this.Dk(A.aaR(A.acf.A8l
));this.ATs(A._GetAutoObject(C.Av3));},_ReInit:function(){C.Mo._ReInit.call(this
);this.Dk(A.aaR(A.acf.A8l));},_className:"Application::NoNaisIdListScreen"};C.ASi={
_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.ASi;this.ME.As(
false);this.ME.Aj(false);this.ME.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APs={DX:function(G){C.Ku.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).AdY(10));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=
C.APs;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkL={OH:null,Bgd:false
,CP:function(){A.pe([this,this.Aow],this);},DF:function(G){},CC:function(G){C.GI.
CC.call(this,G);if(this.Bgd&&(A._GetAutoObject(A.Device.Device).OX>0))A.pe([this
,this.AIQ],this);},Age:function(G){this.A6y(this);},Agh:function(){A._GetAutoObject(
C.A5).Cb(73);},ASr:function(G){throw new Error(Aot);},Bbf:function(s){this.ASr(s
);},ASs:function(G){throw new Error(Aot);},Bbg:function(s){this.ASs(s);},ASw:function(
G){throw new Error(Aot);},AIQ:function(s){this.ASw(s);},Bfp:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7)){this.
Bgd=true;A._GetAutoObject(C.A5).Cb(76);}},Agg:function(G){var B;var Ar=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===5))A.z$([this,this.
XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U8],0);},XJ:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P4.Z3===3){A._GetAutoObject(A.Device.Device).AZ(
74,false,A.jV,0,[this,this.Agg]);A.z$([this,this.XJ],[B=A._GetAutoObject(A.Device.
Device),B.Uo,B.U8],0);A.pe([this,this.AIQ],this);}},AJK:function(){throw new Error(
Aot);},A8B:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.A6x(this);},
Bov:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.BiN(this);},Hf:function(
G){},A_j:function(E){if(A.aaZ(this.OH,E))return;if(!!this.OH)A.z$([this,this.Hf]
,this.OH,0);this.OH=E;if(!!E)A.zX([this,this.Hf],E,0);if(!!E)A.pe([this,this.Hf]
,this);},Bg2:function(G){var F,Cu;if(!this.OH)return;(Cu=this.OH,Cu[2].call(Cu[0
],!(F=this.OH,F[1].call(F[0]))));},_Init:function(aArg){C.GI._Init.call(this,aArg
);this.__proto__=C.AkL;this.Dk(A.aaR(A.acf.A8s));},_ReInit:function(){C.GI._ReInit.
call(this);this.Dk(A.aaR(A.acf.A8s));this.CP();},_Mark:function(D){var B;C.GI._Mark.
call(this,D);if((B=this.OH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUD={_Init:function(aArg){C.I_._Init.call(
this,aArg);this.__proto__=C.AUD;},_className:"Application::RegistrationsListFilterScreen"
};C.Aeu={_Init:function(aArg){C.Yz._Init.call(this,aArg);this.__proto__=C.Aeu;this.
Text.H(Bs9);this.Text.R(A.jV);this.Text.A4(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACg={Js:0,AP:null,A_:null,Ea:null,IQ:null,S4:null,Gy:null,Mn:0,Lc:0,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IQ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A_.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1,aSize[
1]]);this.S4.H([this.IQ.M[2],0,this.IQ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.S4.M[2]-1,0,this.S4.M[2]+1,aSize[1]]);this.Gy.H([this.S4.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.IQ.L(this.V.AQ);this.
Gy.L(this.V.AQ);this.S4.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj3(this.
Lc)){this.V.S(A.aaL(A.fl.H5));this.T(BaX);this.S4.R(Rq);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mn.toFixed());this.S4.R(A._GetAutoObject(A.Device.Helper).V1(this.
Js,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.AX
){this.Mn=this.AX.CE(Ad,1);this.Lc=this.AX.AOX(Ad,34);var AtT=this.AX.AOP(Ad,7);
this.Js=this.AX.KS(Ad,26);var Azm=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.
Helper).Me(Azm,A._GetAutoObject(A.Device.Helper).Du());this.IQ.Ax(A._GetAutoObject(
A.Device.Converter).AmT(AtT));if(AfR<100)this.Gy.R((AfR.toFixed()+CR)+A.aaR(A.acf.
AL1));else this.Gy.R(A._GetAutoObject(A.acj.KQ).AC7(Azm,A._GetAutoObject(A.Device.
Helper).Du(),AIu));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.AK._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IQ={I:this},0);
A.acg.Text._Init.call(this.S4={I:this},0);C.CG._Init.call(this.Gy={I:this},0);this.
__proto__=C.ACg;this.AP.H(Aom);this.AP.L(A.jb.Bb);this.A_.H(Aon);this.A_.L(A.jb.
Bb);this.Ea.H(A0t);this.Ea.L(A.jb.Bb);this.IQ.H(BaY);this.IQ.L(A.jb.Text);this.S4.
H(AyC);this.Gy.H(A0u);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ea,0);this.
J(this.IQ,0);this.J(this.S4,0);this.J(this.Gy,0);this.S4.S(A.aaL(A.fl.Af));this.
Gy.S(A.aaL(A.fl.Af));this.Gy.AY(A.aaL(A.fl.Ak));this.Gy.Cl(A.aaL(A.fl.Bg));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done(
);this.Ea._Done();this.IQ._Done();this.S4._Done();this.Gy._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.AP._ReInit();this.A_._ReInit(
);this.Ea._ReInit();this.IQ._ReInit();this.S4._ReInit();this.Gy._ReInit();this.S4.
S(A.aaL(A.fl.Af));this.Gy.S(A.aaL(A.fl.Af));this.Gy.AY(A.aaL(A.fl.Ak));this.Gy.Cl(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADz={Aj0:
null,PE:null,Jb:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj0={I:this},0);A.acg.Ap._Init.call(this.PE={I:this},0);A.acg.Ap._Init.
call(this.Jb={I:this},0);this.__proto__=C.ADz;this.Aj0.H(Bs_);this.Aj0.L(A.jb.Text
);this.PE.H(Bs$);this.PE.L(A.jb.Text);this.Jb.H(BaP);this.Jb.L(A.jb.Text);this.J(
this.Aj0,0);this.J(this.PE,0);this.J(this.Jb,0);this.Aj0.Ax(A.aaL(A.ach.ADV));this.
PE.Ax(A.aaL(A.ach.AvE));this.Jb.Ax(A.aaL(A.ach.Avz));},_Done:function(){this.__proto__=
C.Dd;this.Aj0._Done();this.PE._Done();this.Jb._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.Aj0._ReInit();this.PE._ReInit();this.Jb.
_ReInit();},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Aj0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APu={IY:null,AgY:null,HS:null,Bb:null,ML:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9q,B.A_Q],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WE,B.J0],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.SO
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Df:function(E){C.BR.Df.call(this,E);this.IY.L(E);this.AgY.L(E);this.
HS.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HS.R(A.aaR(A.acf.Afb));else this.HS.R(((A.aaR(A.acf.GM)+A.aaR(A.acf.
Colon))+CR)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqX()){this.Aw0(((A._GetAutoObject(A.Device.Helper).W.CQ+1).toFixed()+AIK)+A._GetAutoObject(
A.Device.Device).An.B8().toFixed());this.J0(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nt(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw0(BaC);this.J0(2);
this.OnSetAnimalId(-1);this.Nt(0);}},J0:function(E){if(this.Gender===E)return;this.
Gender=E;this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmT(E));},Aw0:function(
E){if(this.ML===E)return;this.ML=E;this.IY.R(E);},Nt:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj3(E))this.HS.
Z(false);else this.HS.Z(true);},_Init:function(aArg){C.BR._Init.call(this,aArg);
A.acg.Text._Init.call(this.IY={I:this},0);A.acg.Ap._Init.call(this.AgY={I:this},
0);A.acg.Text._Init.call(this.HS={I:this},0);A.acg.C7._Init.call(this.Bb={I:this
},0);this.__proto__=C.APu;this.IY.H(BaD);this.IY.Hn(2);this.IY.Lv(true);this.IY.
A4(0x12);this.IY.R(BaE);this.AgY.H(Bta);this.HS.H(Btb);this.HS.A4(0x11);this.HS.
R(A.aaR(A.acf.Afb));this.Bb.DD(Alh);this.Bb.DN(AyI);this.Bb.L(A.jb.Bb);this.J(this.
IY,0);this.J(this.AgY,0);this.J(this.HS,0);this.J(this.Bb,0);this.IY.S(A.aaL(A.fl.
Ak));this.AgY.Ax(A._GetAutoObject(A.Device.Converter).AmT(2));this.HS.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.IY._Done();this.
AgY._Done();this.HS._Done();this.Bb._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.IY._ReInit();this.AgY._ReInit();this.HS._ReInit();
this.Bb._ReInit();this.HS.R(A.aaR(A.acf.Afb));this.IY.S(A.aaL(A.fl.Ak));this.HS.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.IY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa5={EaseOfDeliveryToString:
null,AgQ:null,Ch:function(G){C.NP.Ch.call(this,G);var AJ3=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.KA(this.EaseOfDeliveryToString.LA(AJ3));this.G2.R(
this.AgQ.Aej(AJ3).toFixed());},Df:function(E){C.NP.Df.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgQ._Init.call(this.
AgQ={I:this},0);this.__proto__=C.Aa5;this.T(A.aaR(A.acf.AgH));},_Done:function(){
this.__proto__=C.NP;this.EaseOfDeliveryToString._Done();this.AgQ._Done();C.NP._Done.
call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgQ._ReInit();this.T(A.aaR(A.acf.AgH));},_Mark:function(D){var B;
C.NP._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XY={WhereAboutsToString:null,K1:null,Ch:function(G){C.NP.Ch.call(this,G);var
Lc=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KA(this.WhereAboutsToString.
LA(Lc));this.G2.R(this.K1.Aej(Lc).toFixed());},Df:function(E){C.NP.Df.call(this,
E);this.G2.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K1._Init.call(this.K1={
I:this},0);this.__proto__=C.XY;this.T(A.aaR(A.acf.Jm));},_Done:function(){this.__proto__=
C.NP;this.WhereAboutsToString._Done();this.K1._Done();C.NP._Done.call(this);},_ReInit:
function(){C.NP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K1._ReInit(
);this.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.NP._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R3={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.
OnSetId],0);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7]
,0);A.pe([this,this.AfH],this);},E3:function(G){var B;C.D9.E3.call(this,G);A.z$([
this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId],0);A.z$([this
,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U4,B.U7],0);},Fh:function(G){var
B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},DF:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.Mx=true;
break;case 4:this.Bgy(4);break;case 5:this.Bgy(5);break;default:;}},Bgy:function(
Gz){var B;switch(Gz){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dc(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dc(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gc([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gc([this.Y.Br[0],CD]);}break;default:throw new Error(
Btc);}},GG:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I9.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfH:function(s){this.GG(s);},M0:function(G){var B;this.Y.VC(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R3;this.Cq.Filter=147;this.Y.H(U0);this.Y.JZ(1);this.Ay.H(AsY
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,
this.DF];this.Y.Em=[this,this.Fh];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XZ={AaZ:null,
XV:null,Aa0:null,XW:null,Aa5:null,XY:null,_Init:function(aArg){C.R3._Init.call(this
,aArg);C.AaZ._Init.call(this.AaZ={I:this},0);C.XV._Init.call(this.XV={I:this},0);
C.Aa0._Init.call(this.Aa0={I:this},0);C.XW._Init.call(this.XW={I:this},0);C.Aa5.
_Init.call(this.Aa5={I:this},0);C.XY._Init.call(this.XY={I:this},0);this.__proto__=
C.XZ;this.AaZ.H(BD);this.AaZ.Aj(true);this.XV.H(I1);this.XV.Aj(true);this.XV.Bh(
true);this.Aa0.H(Qc);this.Aa0.Aj(true);this.XW.H(Aai);this.XW.Aj(true);this.XW.Bh(
true);this.Aa5.H(Ale);this.Aa5.Aj(true);this.XY.H(Aoj);this.XY.Aj(true);this.XY.
Bh(true);this.J(this.AaZ,0);this.J(this.XV,0);this.J(this.Aa0,0);this.J(this.XW,
0);this.J(this.Aa5,0);this.J(this.XY,0);},_Done:function(){this.__proto__=C.R3;this.
AaZ._Done();this.XV._Done();this.Aa0._Done();this.XW._Done();this.Aa5._Done();this.
XY._Done();C.R3._Done.call(this);},_ReInit:function(){C.R3._ReInit.call(this);this.
AaZ._ReInit();this.XV._ReInit();this.Aa0._ReInit();this.XW._ReInit();this.Aa5._ReInit(
);this.XY._ReInit();},_Mark:function(D){var B;C.R3._Mark.call(this,D);if((B=this.
AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XW={
BreedToString:null,G2:null,Na:null,Ch:function(G){C.IJ.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BT(Bv));this.G2.
R(this.Na.Aej(Bv).toFixed());},Df:function(E){C.IJ.Df.call(this,E);this.G2.L(E);
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G2={I:this},0);A.Device.
Na._Init.call(this.Na={I:this},0);this.__proto__=C.XW;this.BU.H(Btd);this.G2.H(Bte
);this.G2.Hn(5);this.G2.A4(0x14);this.G2.R(Btf);this.G2.L(A.jb.Text);this.J(this.
G2,0);this.Hw.Ax(A.aaL(A.ach.ADN));this.G2.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IJ;this.BreedToString._Done();this.G2._Done();this.Na._Done();C.
IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.BreedToString.
_ReInit();this.G2._ReInit();this.Na._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa0={
Ch:function(G){C.IJ.Ch.call(this,G);var AAt=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAt>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAt));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IJ._Init.call(this,aArg);this.__proto__=
C.Aa0;this.Hw.Ax(A.aaL(A.ach.AQe));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XV={YE:null,Ch:function(G){C.IJ.Ch.call(this,G);var Pf=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pf>
0)this.T(A._GetAutoObject(A.acj.KQ).AjJ(Pf));else this.T(A.aaR(A.acf.Unknown));var
Azo=A.aaL(A.aci.TR);switch(AfW){case 0:Azo=A.aaL(A.ach.ADL);break;case 1:{Azo=A.
aaL(A.ach.AvA);this.YE.Cw(0);}break;case 2:{Azo=A.aaL(A.ach.AvA);this.YE.Cw(1);}
break;case 3:{Azo=A.aaL(A.ach.AvA);this.YE.Cw(2);}break;default:A.ab5("%s%e",Btg
,AfW);}this.YE.Ax(Azo);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YE={I:this},0);this.__proto__=C.XV;this.BU.H(Bth);this.YE.H(AH1);
this.YE.L(A.jb.Text);this.J(this.YE,0);this.Hw.Ax(A.aaL(A.ach.Avz));this.YE.Ax(A.
aaL(A.ach.ADL));},_Done:function(){this.__proto__=C.IJ;this.YE._Done();C.IJ._Done.
call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.YE._ReInit();},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaZ={Js:0,XX:null,Lc:0
,Bl:function(aSize){C.IJ.Bl.call(this,aSize);this.XX.H(this.Hw.M);},Ai:function(
Ae){C.IJ.Ai.call(this,Ae);this.XX.L(this.BU.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj3(this.Lc)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XX.Z(true);
}else if(this.Js>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Js));this.
Hw.Z(true);this.XX.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XX.Z(false);}},Ch:function(G){C.IJ.Ch.call(this,G);this.Js=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Lc=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Text._Init.call(this.XX={
I:this},0);this.__proto__=C.AaZ;this.XX.R(BaX);this.J(this.XX,0);this.Hw.Ax(A.aaL(
A.ach.AvE));this.XX.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=C.IJ;this.
XX._Done();C.IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.
XX._ReInit();},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.XX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMA={XZ:null,Init:function(aArg){var B;A.zX([this,this.AAM],[B=A._GetAutoObject(
A.Device.Device),B.AEM,B.AIU],0);A.pe([this,this.AAM],this);},DF:function(G){var
D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Ov(this);break;
case 7:this.M6(this);break;default:D5.Mx=true;}},CC:function(G){var B;this.XZ.CC(
this);C.AB.CC.call(this,G);},E3:function(G){var B;this.XZ.E3(this);C.AB.E3.call(
this,G);},Ann:function(G){A._GetAutoObject(C.A5).Fz();},Adu:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M6:function(G){if(A._GetAutoObject(A.Device.
Device).An.B8()<=1)return;var LI=A._GetAutoObject(A.Device.Helper).W.CQ;LI=LI+1;
if(LI>=A._GetAutoObject(A.Device.Device).An.B8())LI=0;A._GetAutoObject(A.Device.
Helper).GQ(LI);},Ov:function(G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)
return;var LI=A._GetAutoObject(A.Device.Helper).W.CQ;LI=LI-1;if(LI<0)LI=A._GetAutoObject(
A.Device.Device).An.B8()-1;A._GetAutoObject(A.Device.Helper).GQ(LI);},AAM:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqp)A._GetAutoObject(C.A5).Ab$(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XZ._Init.call(this.XZ={I:this},0);this.
__proto__=C.AMA;this.Background.H(Cf);this.N.Z(true);this.N.OU(true);this.N.OV(true
);this.Dq(C.APu);this.XZ.H(Fc);this.J(this.XZ,0);this.N.CF=[this,this.Ann];this.
N.Ce=[this,this.Adu];this.N.C2(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeC));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XZ._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XZ._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IJ={Hw:null,BU:null
,T:function(E){C.I9.T.call(this,E);this.BU.R(this.DL);},Df:function(E){C.I9.Df.call(
this,E);this.Hw.L(E);this.BU.L(E);},_Init:function(aArg){C.I9._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CG._Init.call(this.BU={I:this},0);this.
__proto__=C.IJ;this.Hw.H(Bti);this.Hw.L(A.jb.Text);this.BU.H(Btj);this.BU.A4(0x11
);this.BU.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BU,0);this.Hw.Ax(A.aaL(A.aci.
TR));this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I9;this.Hw._Done();this.BU._Done();C.I9._Done.call(this);},_ReInit:function(
){C.I9._ReInit.call(this);this.Hw._ReInit();this.BU._ReInit();this.BU.S(A.aaL(A.
fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I9._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I9={Background:null
,KW:0,Hl:false,CP:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.Bb2],[B=A._GetAutoObject(A.Device.Helper).W,B.Um,B.OnSetId],0);A.pe([this,
this.Bb2],this);},Bl:function(aSize){C.Hi.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.
Hl)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,Bb2:function(s){this.Ch(s);},Bh:function(E){if(this.Hl===E)return;this.Hl=E;this.
Am();},Df:function(E){if(this.KW===E)return;this.KW=E;},_Init:function(aArg){C.Hi.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I9;this.H(BD);this.Background.H(AIw);this.KW=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);C.Hi._Done.call(this);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NP={G2:null,BBE:function(G){this.BU.H(A.abN(this.BU.M,this.G2.M[0]));},_Init:
function(aArg){C.Fy._Init.call(this,aArg);A.acg.Text._Init.call(this.G2={I:this}
,0);this.__proto__=C.NP;this.G2.A1(0xA);this.G2.H(Btk);this.G2.Hn(5);this.G2.Je(
true);this.G2.A4(0x14);this.G2.R(A.jV);this.G2.L(A.jb.Text);this.J(this.G2,0);this.
G2.Q7([this,this.BBE]);this.G2.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fy;this.G2._Done();C.Fy._Done.call(this);},_ReInit:function(){C.Fy._ReInit.call(
this);this.G2._ReInit();this.G2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fy.
_Mark.call(this,D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axk={ARi:null,_Init:function(aArg){C.ZD._Init.call(this,aArg);this.__proto__=
C.Axk;},_Mark:function(D){var B;C.ZD._Mark.call(this,D);if((B=this.ARi)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANH={WD:null,WZ:0,AwL:function(E){C.AmF.AwL.call(this,E);if(E)this.Pu.R(Btl);
else this.Pu.R(BaZ);},BnM:function(E){if(A.aaZ(this.WD,E))return;if(!!this.WD)A.
z$([this,this.A3M],this.WD,0);this.WD=E;if(!!E)A.zX([this,this.A3M],E,0);if(!!E)
A.pe([this,this.A3M],this);},AFZ:function(E){var F;if(this.WZ===E)return;this.WZ=
E;this.AwL(!!this.WD&&((F=this.WD,F[1].call(F[0]))===E));},A3M:function(G){var F;
this.AwL(!!this.WD&&((F=this.WD,F[1].call(F[0]))===this.WZ));},_Init:function(aArg
){C.AmF._Init.call(this,aArg);this.__proto__=C.ANH;this.Pu.R(BaZ);this.Pu.S(A.aaL(
A.fl.H5));},_Mark:function(D){var B;C.AmF._Mark.call(this,D);if((B=this.WD)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axm={WD:null,WZ:0,_Init:function(aArg){C.ZD._Init.call(this,aArg);this.__proto__=
C.Axm;},_Mark:function(D){var B;C.ZD._Mark.call(this,D);if((B=this.WD)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUh={GO:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rb._Init.call(
this.GO={I:this},0);this.__proto__=C.AUh;var B;this.Jf(A.aaR(A.acf.ACX));this.GO.
H(AhW);this.GO.Aj(true);this.GO.Z(true);this.GO.T(A.aaR(A.acf.AGn));this.GO.Ar2(
false);this.GO.A_N(true);this.J(this.GO,0);this.GO.Ab2([B=this.GO,B.FW]);this.GO.
Gs([this,this.D_,this.GS]);this.GO.Akv(A.aaL(A.ach.Edit));this.GO.Au([B=A._GetAutoObject(
A.Device.Device),B.ASR,B.A0G]);},_Done:function(){this.__proto__=C.Cg;this.GO._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GO._ReInit(
);this.Jf(A.aaR(A.acf.ACX));this.GO.T(A.aaR(A.acf.AGn));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUf={GH:0,C8:null,AW:null,Kv:null,E_:null
,GermanStateToString:null,CountryToString:null,PB:0,Le:0,Mg:false,Init:function(
aArg){A.zX([this,this.MT],[this,this.SI,this.Lt],0);A.zX([this,this.MT],[this,this.
Anq,this.Ahq],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FP(this.LW);this.
Kv.FP(this.LW);this.E_.CV(this.LW);},DK:function(G){var F;if(!this.N)return;switch(
this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=
this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[
1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[
0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0])).Ca=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0]
)).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(
F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN
)+Ayf)+this.GermanStateToString.LA(A._GetAutoObject(A.Device.Converter).AC8(this.
PB)));(F=this.N,F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0
])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}}
,Ex:function(EO){var Ts=this.A8;if(EO<0)EO=0;else if(EO>this.RL)EO=this.RL;switch(
EO){case 0:{this.Ba(null);if(!this.GH&&!this.PB)this.Lt(0);}break;case 1:this.Ba(
this.E_);break;case 2:this.Ba(this.Kv);break;case 3:if(((Ts===2)&&!this.PB)&&!this.
GH)return;else{this.Ba(this.AW);if(!this.GH||(Ts>0))this.AW.SU(2);else this.AW.SU(
7);}break;default:throw new Error(Atk+EO.toFixed());}this.A8=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mg=true;this.SL(A._GetAutoObject(
A.Device.Helper).V1(E,0,10));this.Ahq(A._GetAutoObject(A.Device.Helper).V1(E,10,
2)|0);this.Lt(A._GetAutoObject(A.Device.Converter).S8(E));this.Mg=false;if(!!this.
AM){this.Kv.Ky(2);this.AW.Ky(10);}else{this.Kv.Ky(0);this.AW.Ky(0);}this.Am();},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADi());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RL);},AjK:function(){return this.GH;
},AjM:function(){return 9999999999;},Lt:function(E){if(this.Le===E)return;this.Le=
E;if(this.Mg===false)A.pe([this,this.Vs],this);A.abo([this,this.SI,this.Lt],0);}
,SL:function(E){if(this.GH===E)return;this.GH=E;if(this.Mg===false)A.pe([this,this.
Vs],this);A.abo([this,this.Ab0,this.SL],0);},Vs:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqy(this.Le),3,10)+A.abl(this.PB,2,10))+
A.abm(this.GH,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahq:function(
E){if(this.PB===E)return;this.PB=E;if(this.Mg===false)A.pe([this,this.Vs],this);
A.abo([this,this.Anq,this.Ahq],0);},SI:function(){return this.Le;},Ab0:function(
){return this.GH;},Anq:function(){return this.PB;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C8._Init.call(this.C8={I:this},0);C.ARc._Init.call(this.AW={I:
this},0);C.AvM._Init.call(this.Kv={I:this},0);C.AsJ._Init.call(this.E_={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUf;var B;this.RL=3;this.AW.H(Btm);this.Kv.H(Btn);this.Kv.EV(16);this.E_.H(Ba0
);this.J(this.AW,0);this.J(this.Kv,0);this.J(this.E_,0);this.C8.AFg([this,this.SI
,this.Lt]);this.AW.Au([this,this.Ab0,this.SL]);this.Kv.Au([this,this.Anq,this.Ahq
]);this.E_.CK(this.C8);this.E_.Au([B=this.C8,B.B$,B.Cc]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.Kv._Done();this.
E_._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit();this.AW.
_ReInit();this.Kv._ReInit();this.E_._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARc={NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.
CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.NT.CV(E);},Yw:
function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.NS;break;case 8:B6=
this.NT;break;case 9:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;},_Init:
function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.ARc;this.H(Bto);this.G1.H(AIL);this.NT.H(AyN);this.NS.H(A0g
);this.ET.H(A0h);this.F0.H(A0i);this.Eq.H(A0j);this.Dz.H(A0k);this.CW.H(A0l);this.
Cv.H(BaK);this.F_.H(A0m);this.EM.H(A0m);this.J(this.NT,-2);this.J(this.NS,-2);this.
J(this.ET,-2);this.J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.
CW,-2);this.J(this.Cv,-2);this.NT.Dj=[this,this.GX];this.NS.Dj=[this,this.GX];this.
ET.Dj=[this,this.GX];this.F0.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.Dz.
Dj=[this,this.GX];this.CW.Dj=[this,this.GX];this.Cv.Dj=[this,this.GX];},_Done:function(
){this.__proto__=C.Lk;this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(
this);},_ReInit:function(){C.Lk._ReInit.call(this);this.NT._ReInit();this.NS._ReInit(
);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();this.Dz._ReInit();this.CW.
_ReInit();this.Cv._ReInit();},_Mark:function(D){var B;C.Lk._Mark.call(this,D);if((
B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUg={
GH:0,C8:null,AW:null,E_:null,CountryToString:null,Le:0,Mg:false,Init:function(aArg
){A.zX([this,this.MT],[this,this.SI,this.Lt],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FP(this.LW);this.E_.CV(this.LW);},DK:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(
F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A8;if(EO<0)EO=0;
else if(EO>this.RL)EO=this.RL;switch(EO){case 0:{this.Ba(null);if(!this.GH)this.
Lt(0);}break;case 1:this.Ba(this.E_);break;case 2:{this.Ba(this.AW);if(!this.GH||(
Ts>0))this.AW.SU(2);else this.AW.SU(7);}break;default:throw new Error(Atk+EO.toFixed(
));}this.A8=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mg=true;this.SL(A._GetAutoObject(A.Device.Helper).V1(E,0,12));this.Lt(
A._GetAutoObject(A.Device.Converter).S8(E));this.Mg=false;if(!!this.AM)this.AW.Ky(
12);else this.AW.Ky(0);this.Am();},FW:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADi());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RL);},AjK:function(
){return this.GH;},AjM:function(){return 999999999999;},Lt:function(E){if(this.Le===
E)return;this.Le=E;if(this.Mg===false)A.pe([this,this.Vs],this);A.abo([this,this.
SI,this.Lt],0);},SL:function(E){if(this.GH===E)return;this.GH=E;if(this.Mg===false
)A.pe([this,this.Vs],this);A.abo([this,this.Ab0,this.SL],0);},Vs:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqy(this.Le),3,10)+A.abm(
this.GH,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SI:function(){return this.
Le;},Ab0:function(){return this.GH;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.AD3._Init.call(this.AW={I:this},0);C.AsJ.
_Init.call(this.E_={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUg;var B;this.RL=2;this.AW.H(Btp);this.E_.H(Ba0);this.
J(this.AW,0);this.J(this.E_,0);this.C8.AFg([this,this.SI,this.Lt]);this.AW.Au([this
,this.Ab0,this.SL]);this.E_.CK(this.C8);this.E_.Au([B=this.C8,B.B$,B.Cc]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.
E_._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C8._ReInit();this.AW._ReInit();this.E_._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Ye:null,Yf:null,Yd:null,Yb:null,Yc:null,DF:function(
G){var B;C.AB.DF.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Asr();},Ik:function(G){
var Cy=(C.Fm.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Ye)A._GetAutoObject(
C.A5).Cb(28);else if(Cy===this.Yf)A._GetAutoObject(C.A5).Cb(26);else if(Cy===this.
Yd)A._GetAutoObject(C.A5).Cb(54);else if(Cy===this.Yb)A._GetAutoObject(C.A5).Cb(
27);else if(Cy===this.Yc)A._GetAutoObject(C.A5).Cb(78);},A3Q:function(G){A._GetAutoObject(
C.A5).Fz();},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.
MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.Ye={I:this
},0);C.Fm._Init.call(this.Yf={I:this},0);C.Fm._Init.call(this.Yd={I:this},0);C.Fm.
_Init.call(this.Yb={I:this},0);C.Fm._Init.call(this.Yc={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Ek.As(false
);this.Dq(C.AqZ);this.DY.A1(0x3F);this.DY.H(Fc);this.DY.L(A.jb.CJ);this.Y.H(Fc);
this.Y.JZ(9);this.Ay.H(Iw);this.Ye.H(Qa);this.Ye.Aj(true);this.Ye.T(A.aaR(A.acf.
A8d));this.Yf.H(A0s);this.Yf.Aj(true);this.Yf.T(A.aaR(A.acf.NewAnimals));this.Yd.
H(Oh);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.Calving));this.Yb.H(Qb);this.Yb.Aj(
true);this.Yb.T(A.aaR(A.acf.ACe));this.Yc.H(MR);this.Yc.Aj(true);this.Yc.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Ye,0);this.J(this.Yf,0);this.J(this.Yd,0);this.J(this.Yb,0);this.J(this.Yc,0);this.
N.CF=[this,this.A3Q];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fh];this.Ye.
AR=[this,this.Ik];this.Ye.DC(A.aaL(A.ach.ADW));this.Yf.AR=[this,this.Ik];this.Yf.
DC(A.aaL(A.ach.AvI));this.Yd.AR=[this,this.Ik];this.Yd.DC(A.aaL(A.ach.AP9));this.
Yb.AR=[this,this.Ik];this.Yb.DC(A.aaL(A.ach.AP4));this.Yc.AR=[this,this.Ik];this.
Yc.DC(A.aaL(A.ach.APX));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Ye._Done();this.Yf._Done();this.Yd._Done();this.Yb.
_Done();this.Yc._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Ye._ReInit(
);this.Yf._ReInit();this.Yd._ReInit();this.Yb._ReInit();this.Yc._ReInit();this.Ye.
T(A.aaR(A.acf.A8d));this.Yf.T(A.aaR(A.acf.NewAnimals));this.Yd.T(A.aaR(A.acf.Calving
));this.Yb.T(A.aaR(A.acf.ACe));this.Yc.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.AR$={K9:null,EaseOfDelivery:null,BirthType:null,AcJ:null
,Lo:null,Cn:null,G6:null,Lm:null,AzX:true,Init:function(aArg){this.Ba(this.Da);A.
pe([this,this.GG],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.FD();A._GetAutoObject(C.A5).Fz();if(!!this.K9)this.K9.Ew(this);},Agf:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwM(true);if(!!this.K9)this.K9.Agf(this
);if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(A.Device.Helper).
AKn(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApD]);else{this.AiY();A.
pe([this,this.Ap1],this);}},Aul:function(){this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.
AD0));this.N.Ca=[this,this.Ay3];},CC:function(G){var B;C.H2.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Ll()){A._GetAutoObject(A.Device.Device).AZ(41
,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);this.Ew(this);
}else if(this.AzX){this.AzX=false;A.pe([this,this.A35],this);}else if(!this.K9){
this.K9=A._NewObject(C.ASa,0);this.K9.A_g([this,this.AA_]);A._GetAutoObject(A.Device.
Helper).W.G7();A._GetAutoObject(A.Device.Helper).Aqf(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nt(this.AsV.Aej(6));this.K9.LT(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},AiY:function(
){A._GetAutoObject(A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);var
Mc=A._GetAutoObject(A.Device.Device).An.LY(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SV(Mc);if(A._GetAutoObject(A.Device.Helper
).Am4()){if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.
Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Cr(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7i(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap1:function(G){var B;if(!!this.K9)this.K9.Ap1(this);},GG:function(G){if(
A._GetAutoObject(A.Device.Helper).Am4())this.C_.Z(true);else this.C_.Z(false);},
ApD:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",As$,Ar.Id);}},AA_:function(G){this.
LT(this);this.AeW(A._GetAutoObject(A.Device.Helper).Abt(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JN(this.Da);},ApE:function(G){var F;C.H2.ApE.call(this
,G);(F=this.C_.Q,F[2].call(F[0],this.C_.AnW));},A35:function(G){A._GetAutoObject(
C.A5).Cb(79);},_Init:function(aArg){C.H2._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcJ._Init.call(this.AcJ={I:this},0);C.Rb._Init.call(this.Lo={I:this
},0);C.SW._Init.call(this.Cn={I:this},0);C.BX._Init.call(this.G6={I:this},0);C.BX.
_Init.call(this.Lm={I:this},0);this.__proto__=C.AR$;var B;this.Dq(C.APr);this.Lo.
H(AhW);this.Lo.Aj(true);this.Lo.T(A.aaR(A.acf.ACE));this.CH.H(AcP);this.Cn.H(AcP
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aee));this.Cn.AFR(true);this.G6.H(AcP);
this.G6.Aj(true);this.G6.T(A.aaR(A.acf.Arr));this.Lm.H(AcP);this.Lm.Aj(true);this.
Lm.T(A.aaR(A.acf.AgH));this.J(this.Lo,-5);this.J(this.Cn,-3);this.J(this.G6,-1);
this.J(this.Lm,-1);this.EaseOfDelivery.L5(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L5(A._GetAutoObject(A.Device.Helper).W);this.AcJ.L5(A._GetAutoObject(A.
Device.Helper).W);this.Lo.Gs([this,this.D_,this.GS]);this.Lo.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASN,B.AnE]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.L4([
B=this.Cn,B.FW]);this.Cn.L7(A.aaL(A.ach.Edit));this.Cn.Ab8([B=A._GetAutoObject(A.
Device.Helper).W,B.Av$,B.Q6]);this.Go.Au([B=this.AcJ,B.B$,B.Cc]);this.Go.CK(this.
AcJ);this.G6.Au([B=this.BirthType,B.B$,B.Cc]);this.G6.CK(this.BirthType);this.Lm.
Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.Lm.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H2;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcJ._Done();this.Lo._Done();this.Cn._Done();this.G6._Done();this.Lm.
_Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcJ._ReInit();this.Lo._ReInit(
);this.Cn._ReInit();this.G6._ReInit();this.Lm._ReInit();this.Lo.T(A.aaR(A.acf.ACE
));this.Cn.T(A.aaR(A.acf.Aee));this.G6.T(A.aaR(A.acf.Arr));this.Lm.T(A.aaR(A.acf.
AgH));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.K9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcJ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMC={Init:function(aArg){var B;A.zX([this,this.ALr],[B=A._GetAutoObject(A.Device.
Device),B.AET,B.AIZ],0);A.pe([this,this.ALr],this);},AKU:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbW){case 0:Be=A._GetAutoObject(A.Device.
Helper).AC$();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOL();break;case
2:Be=A._GetAutoObject(A.Device.Helper).MC();break;default:throw new Error(A0v+A.
_GetAutoObject(A.Device.Device).AbW.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALr:function(G){switch(A._GetAutoObject(A.Device.Device).AbW){case
0:this.Dk(A.aaR(A.acf.ASf));break;case 1:this.Dk(A.aaR(A.acf.BkQ));break;case 2:
this.Dk(A.aaR(A.acf.Av2));break;default:A.ab5("%s",A0v+A._GetAutoObject(A.Device.
Device).AbW.toFixed());}},_Init:function(aArg){C.Amv._Init.call(this,aArg);this.
__proto__=C.AMC;this.BnE(C.APH);this.Ek.Ab4(A._NewObject(C.APw,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASa={AAt:0,Adh:null
,AuY:null,BeE:0,A4h:0,A3b:0,Init:function(aArg){this.BeE=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adh=A._GetAutoObject(A.Device.Device).An.Filter;this.AAt=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3b=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LT:function(G){A._GetAutoObject(A.Device.Helper).W.AnE(this.AAt);A._GetAutoObject(
A.Device.Helper).W.Ae4(true);switch(this.A3b){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyK,this.A3b);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adh);if(!!this.A4h)this.Bhe();},Agf:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhe:function(){var At0=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LY(0,this.BeE);At0.Fl(Ad,A._GetAutoObject(
A.Device.Device).An);At0.Awy(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At0.
ArV(false);At0.AwN(At0.LactationNumber+1);At0.Cr(A._GetAutoObject(A.Device.Device
).An);},Ap1:function(G){this.A4h++;var ByL=A._GetAutoObject(A.Device.Converter).
BhY(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4h<ByL)&&(A._GetAutoObject(
A.Device.Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AZ(59,true,A.jV,0,[this,this.Vn]);else this.BdB(
this);},Vn:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdB(this);else if(!!Ar&&(Ar.PopupState===7))this.
AA_(this);},AA_:function(G){var B;var Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pf=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ3=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.AuY)(B=this.AuY
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ig);A._GetAutoObject(
A.Device.Helper).W.Akr(AfW);A._GetAutoObject(A.Device.Helper).W.N7(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pf);A._GetAutoObject(A.Device.Helper).W.Akt(AJ3);},BdB:function(
G){this.Bhe();A._GetAutoObject(C.A5).Fz();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adh);},A_g:function(E){if(A.aa0(this.AuY,E))return;this.AuY=E;},_Init:function(
aArg){this.__proto__=C.ASa;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AuY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMS={Init:function(aArg){
var B;A.zX([this,this.Be1],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.A0w],0);
this.Be1(this);},Cr:function(){A.ab5("%s",Btq);},Fl:function(AcU){C.VB.Fl.call(this
,AcU);var O;for(O=16;O>0;O--)this.If.Set(O,this.If.Get(O-1));this.If.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Btr);},AD7:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be1:
function(G){this.Fl(A._GetAutoObject(A.Device.Device).AuE);A.we(this,0);},_Init:
function(aArg){C.VB._Init.call(this,aArg);this.__proto__=C.AMS;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuR={_Init:function(){C.
AMS._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JQ={C7:null,V:null,A78:true,T:function(E){C.I9.T.call(this,E);this.
V.R(E);},Df:function(E){C.I9.Df.call(this,E);this.V.L(E);},BnJ:function(E){if(this.
A78===E)return;this.A78=E;this.C7.Z(E);},_Init:function(aArg){C.I9._Init.call(this
,aArg);A.acg.C7._Init.call(this.C7={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JQ;this.C7.DD(Bts);this.C7.DN(Btt);this.C7.L(A.jb.Bb);this.V.
A1(0x3F);this.V.H(Btu);this.V.A4(0x11);this.V.L(A.jb.Text);this.J(this.C7,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HJ));this.V.Cl(A.aaL(A.
fl.Bg));},_Done:function(){this.__proto__=C.I9;this.C7._Done();this.V._Done();C.
I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this);this.C7._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HJ));this.V.Cl(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.I9._Mark.call(this,D);if((B=this.C7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APw={AgV:null,De:null,Abr:null,Fj:null,E$:
null,Init:function(aArg){var B;A.zX([this,this.A4V],[B=A._GetAutoObject(A.Device.
Device),B.AET,B.AIZ],0);A.pe([this,this.A4V],this);},Df:function(E){C.YA.Df.call(
this,E);this.De.L(E);},AEZ:function(G){A.pe([this,this.A4V],this);},ABa:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E9();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DM(1,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C4:function(G){var B;var F;C.YA.C4.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.De.Ax(A.aaL(A.ach.AjS));return;}var Bzr=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(38,0)
)?B:null);var Bcb=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DM(14,0))?B:null);if(!!Bzr)this.De.Ax(A.aaL(A.ach.ADo));else if(
!!Bcb&&(Bcb.A6===1))this.De.Ax(A.aaL(A.ach.AP$));else this.De.Ax(A.aaL(A.ach.AjS
));},A4V:function(G){var F;var Filter=null;var AOz;switch(A._GetAutoObject(A.Device.
Device).AbW){case 0:Filter=A._GetAutoObject(A.Device.Helper).AC$();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOL();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MC();break;default:throw new Error(A0v+A._GetAutoObject(A.Device.
Device).AbW.toFixed());}var Ai2=this.Akl();if(Ai2>0){AOz=A._NewObject(A.Device.Int32FilterCriterion
,0);AOz.Initialize(1,4,Ai2,false);Filter.CX(AOz);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeX(false);},Ov:function(G){if(!this.Akl())this.AW.AeX(true
);this.Ba(this.AW);this.Am();},M6:function(G){this.AW.AeX(false);this.Ba(this.AgV
);this.Am();},_Init:function(aArg){C.YA._Init.call(this,aArg);C.Arb._Init.call(this.
AgV={I:this},0);A.acg.Ap._Init.call(this.De={I:this},0);C.Abr._Init.call(this.Abr={
I:this},0);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={
I:this},0);this.__proto__=C.APw;var B;this.H(Btv);this.AW.H(Btw);this.T7.H(Btx);
this.Gv.Z(false);this.AgV.H(Bty);this.De.H(Btz);this.Abr.Au(A._GetAutoObject(A.Device.
Device).AbW);this.Fj.Filter=6;this.E$.Filter=7;this.J5(this.A_,-1);this.J(this.AgV
,-1);this.J(this.De,-1);this.AgV.CK(this.Abr);this.AgV.Au([B=this.Abr,B.B$,B.Cc]
);this.De.Ax(A.aaL(A.ach.AjS));this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6
];this.Init(aArg);},_Done:function(){this.__proto__=C.YA;this.AgV._Done();this.De.
_Done();this.Abr._Done();this.Fj._Done();this.E$._Done();C.YA._Done.call(this);}
,_ReInit:function(){C.YA._ReInit.call(this);this.AgV._ReInit();this.De._ReInit();
this.Abr._ReInit();this.Fj._ReInit();this.E$._ReInit();},_Mark:function(D){var B;
C.YA._Mark.call(this,D);if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abr={AeT:null
,Init:function(aArg){var B;A.zX([this,this.BeG],[B=A._GetAutoObject(A.Device.Device
),B.AET,B.AIZ],0);A.pe([this,this.BeG],this);},Dt:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwU(E);},AC_:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;return this.AeT.AsK(aIndex
);},ADa:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return this.
AeT.AsL(aIndex);},BeG:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbW;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeT._Init.call(this.AeT={I:this},0);this.__proto__=C.Abr;this.BI.Set(0,
0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeT._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeT._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APH={Es:null,IU:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=
C.APH;this.H(Oi);this.Background.H(Oi);this.Es.H(AIx);this.Es.R(A.aaR(A.acf.A7o)
);this.Es.A4(0x12);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIy);this.IU.
Hn(5);this.IU.A4(0x14);this.IU.R(A.aaR(A.acf.AG0));this.IU.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.HJ));this.
Es.Cl(A.aaL(A.fl.Bg));this.IU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(A.aaR(A.acf.
A7o));this.IU.R(A.aaR(A.acf.AG0));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.
HJ));this.Es.Cl(A.aaL(A.fl.Bg));this.IU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J8:null,BgM:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfq(this);else A._GetAutoObject(A.Device.Device).AZ(63,true,A.
jV,0,[this,this.Vn]);},Bfq:function(G){A._GetAutoObject(C.A5).Fz();},Vn:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.Bfq(this);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);A.acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dq(C.APv);this.Jl.H(BtA);this.Jl.AkB(2);this.Acy.Z(false);this.ARR=12;this.
Number.H(BtB);this.Number.R(A.aaR(A.acf.A$K));this.A5p=false;this.J8.H(BtC);this.
J8.Hn(5);this.J8.Lv(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.ABV));this.J8.L(A.jb.Text);this.J5(this.Jl,-1);this.J5(this.IZ,-1);this.
J5(this.Acy,-1);this.J(this.J8,0);this.J8.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mp;this.J8._Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.
call(this);this.J8._ReInit();this.Number.R(A.aaR(A.acf.A$K));this.J8.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.ABV));this.J8.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mp._Mark.call(this,D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APv={_Init:function(aArg){C.AqY.
_Init.call(this,aArg);this.__proto__=C.APv;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jl={AbN:null,AbM:null,AbL:null,QJ:null,CountryToString:null,AsN:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QJ.R(this.CountryToString.
LA(A._GetAutoObject(A.Device.Converter).A7M(A._GetAutoObject(A.Device.Device).Language
))+BtD);},AkB:function(E){if(this.AsN===E)return;this.AsN=E;var bitmap=null;var A2f=
BtE;var A2e=null;var A2g=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq$);break;case
1:{bitmap=A.aaL(A.ach.AQO);A2f=BtF;A2e=A.aaL(A.fl.Ak);A2g=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQP);A2f=BtG;A2e=A.aaL(A.fl.Bg);A2g=true;}break;default:throw new Error(
BtH+E.toFixed());}this.AbL.Ax(bitmap);this.AbM.Ax(bitmap);this.AbN.Ax(bitmap);this.
QJ.H(A.abJ(this.QJ.M,A2f));this.QJ.S(A2e);this.QJ.Z(A2g);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbN={I:this},0);A.acg.Ap._Init.call(this.AbM={I:this},0);A.acg.Ap._Init.
call(this.AbL={I:this},0);A.acg.Text._Init.call(this.QJ={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jl;this.H(AIO);this.
AbN.A1(0x3);this.AbN.H(AIO);this.AbN.L(A.jb.Ia);this.AbN.Cw(2);this.AbM.A1(0x3);
this.AbM.H(AIO);this.AbM.L(A.jb.Ad$);this.AbM.Cw(1);this.AbL.A1(0x3);this.AbL.H(
AIO);this.AbL.L(A.jb.Text);this.AbL.Cw(0);this.QJ.A1(0x14);this.QJ.H(BtI);this.QJ.
L(0xFF020202);this.QJ.Z(false);this.J(this.AbN,0);this.J(this.AbM,0);this.J(this.
AbL,0);this.J(this.QJ,0);this.AbN.Ax(A.aaL(A.ach.Aq$));this.AbM.Ax(A.aaL(A.ach.Aq$
));this.AbL.Ax(A.aaL(A.ach.Aq$));this.QJ.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbN._Done();this.AbM._Done();this.AbL._Done();this.QJ._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbN._ReInit();this.AbM._ReInit();this.AbL._ReInit(
);this.QJ._ReInit();this.CountryToString._ReInit();this.QJ.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsN={Transponder:0,BGx:1,BGy:2};C.APr={Ap:null,Df:function(E){C.BR.Df.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APr;this.Ap.H(AyL);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APi));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Il:0,AaG:4,Al4:function(G){C.Ra.Al4.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Beb()){this.Il=A._GetAutoObject(A.Device.Helper).UD.Id;var Aiw=A._GetAutoObject(
A.Device.Helper).A7K(this.Il,A._GetAutoObject(A.Device.Helper).W);if(Aiw){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Il),0,[
this,this.Vn]);return;}Aiw=A._GetAutoObject(A.Device.Helper).Bkf(this.Il,A._GetAutoObject(
A.Device.Helper).W);if(Aiw&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Il)){A._GetAutoObject(A.Device.Device).AZ(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Il),0,[this,this.Vn]);return;}this.AaG=A._GetAutoObject(A.Device.
Helper).ARq(this.Il);switch(this.AaG){case 0:A._GetAutoObject(A.Device.Device).AZ(
45,true,this.Il.toFixed().length.toFixed(),0,[this,this.Vn]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).AxS(this.Il);A._GetAutoObject(A.Device.
Device).AZ(46,true,BN.toFixed(),0,[this,this.Vn]);}break;case 3:this.BgE();break;
default:throw new Error(AIl+this.AaG.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},Vn:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaG===2)this.BgE();else A._GetAutoObject(
A.Device.Device).AhH();break;case 5:this.Ew(this);break;default:;}},BgE:function(
){A._GetAutoObject(A.Device.Helper).W.Nr(this.Il);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PY(this.Il);A._GetAutoObject(
A.Device.Helper).W.Cr(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AZ(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dq(C.IP);this.Number.R(A.aaR(A.acf.A$E
));this.Jl.H(BtJ);this.IZ.H(BtK);this.AkB(1);this.N.CF=[this,this.Ew];this.N.C2(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$E));},_className:"Application::SetSaveNaisIdScreen"};C.AN6={LT:function(
G){C.AqH.LT.call(this,G);A.pe([this,this.BCf],this);},BCf:function(G){this.JN(this.
Ef);},_Init:function(aArg){C.AqH._Init.call(this,aArg);this.__proto__=C.AN6;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UT={Animal:null,WhereAboutsToString:
null,Gm:function(aIndex){return this.WhereAboutsToString.BT(this.C6(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nt(E);},A43:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cc],0);},L5:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A43],[B=this.Animal,B.Awl,B.Nt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A43],[B=this.Animal,B.Awl,B.Nt],0);A.pe([this,this.A43],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UT;this.BI.Set(0,1);this.
BI.Set(1,2);this.BI.Set(2,3);this.BI.Set(3,4);this.BI.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UU={Dt:function(){return 6;},_Init:function(aArg){C.UT._Init.call(this,aArg);
this.__proto__=C.UU;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.BI.Set(
3,3);this.BI.Set(4,4);this.BI.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcJ={Dt:function(){return 5;},_Init:function(aArg){C.UT._Init.call(this,aArg
);this.__proto__=C.AcJ;this.BI.Set(0,6);this.BI.Set(1,7);this.BI.Set(2,8);this.BI.
Set(3,9);this.BI.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdU={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BcW],[B=A._GetAutoObject(A.Device.
Device),B.ASy,B.A0x],0);A.pe([this,this.BcW],this);},Dt:function(){return 2;},C6:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},DZ:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awo(E);},BcW:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agx;A.abo([this,this.B$,this.Cc],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdU;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGO={FN:null
,EA:null,EartagNrAssignmentMode:null,Fj:null,E$:null,HH:null,AW:null,Kq:null,Nj:
null,A8:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A8===1){if(this.Hl){this.AW.FP(A.jb.CJ);this.HH.CV(A.jb.CJ);this.Background.L(A.
jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HH.CV(A.jb.CU);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl){this.AW.FP(A.jb.CJ);this.HH.CV(
A.jb.CJ);}else{this.AW.FP(A.jb.CU);this.HH.CV(A.jb.CU);}this.Ba(null);}this.Nj.L(
this.V.AQ);},H0:function(G){C.Eg.H0.call(this,G);if(!this.A8)this.FW(this);else this.
Hd(this);},DK:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.
N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(
F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[0])));}},FW:function(G){this.
Ex(1);},Hd:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A8&&!!this.N)
this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{this.Ba(this.
AW);if(!this.AM)this.AW.SU(2);else this.AW.SU(7);}break;default:throw new Error(
Atk+this.A8.toFixed());}this.DK(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Ov:function(G){this.ABj(2);},M6:function(G){this.ABj(7);},ABj:
function(Gz){var B;var AzG=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzG){
var AAv=(A.Core.P.isPrototypeOf(B=this.QK(AzG,Gz,0x15))?B:null);if(!!AAv){this.Ba(
AAv);return true;}}return false;},Af3:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nj.Ax(
A._GetAutoObject(A.Device.Converter).AmT(2));break;case 1:this.Nj.Ax(A._GetAutoObject(
A.Device.Converter).AmT((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Ba1+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4A],this);},A4A:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kq.AeZ(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Anr,B.Aov]);this.Kq.
AeZ([B=A._GetAutoObject(A.Device.Device),B.AEP,B.AIW]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awc
,B.AyV]);this.Kq.AeZ([B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0y]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyW]);this.Kq.AeZ([B=
A._GetAutoObject(A.Device.Device),B.ASE,B.A0z]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Anr,B.Aov]);this.Kq.AeZ([B=A._GetAutoObject(A.Device.Device),
B.AEP,B.AIW]);}break;default:throw new Error(BtL+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ba1+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af3],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af3],this.EA,0);if(!!
E)A.pe([this,this.Af3],this);},Aks:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af3],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af3],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af3],this);},Uk:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.
BF._Init.call(this.E$={I:this},0);C.Arb._Init.call(this.HH={I:this},0);C.AvN._Init.
call(this.AW={I:this},0);C.Au2._Init.call(this.Kq={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);this.__proto__=C.AGO;var B;this.H(Aah);this.V.As(false);this.
V.R(Atb);this.V.L(A.jb.Bm);this.Fj.Filter=6;this.E$.Filter=7;this.HH.H(BtM);this.
AW.H(BtN);this.Nj.H(BtO);this.J(this.HH,0);this.J(this.AW,0);this.J(this.Nj,0);this.
FN=A._NewObject(C.Aet,0);this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6];this.
HH.CK(this.Kq);this.HH.Au([B=this.Kq,B.B$,B.Cc]);this.AW.Au([this,this.Uk,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fj._Done();this.E$.
_Done();this.HH._Done();this.AW._Done();this.Kq._Done();this.Nj._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fj._ReInit();this.E$.
_ReInit();this.HH._ReInit();this.AW._ReInit();this.Kq._ReInit();this.Nj._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANW={Wu:
null,Zg:null,Zd:null,Uc:null,Init:function(aArg){this.Ba(this.Wu);},AEH:function(
G){var BeC=(C.Ang.isPrototypeOf(G)?G:null);if(!!BeC)A._GetAutoObject(A.Device.Device
).AZ(BeC.AdC,true,A.jV,0,null);},DF:function(G){if((this.Cq.CO===7)&&(this.AV===
this.Uc))A._GetAutoObject(A.Device.Device).AZ(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.Uc))A._GetAutoObject(C.A5).Cb(91);C.Ej.DF.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ang._Init.call(this.Wu={I:
this},0);C.Ang._Init.call(this.Zg={I:this},0);C.Ang._Init.call(this.Zd={I:this},
0);C.Ang._Init.call(this.Uc={I:this},0);this.__proto__=C.ANW;this.Dq(C.AO8);this.
Wu.H(I1);this.Wu.Aj(true);this.Wu.T(A.aaR(A.acf.AhG));this.Wu.Bh(false);this.Wu.
AdC=79;this.Zg.H(Qc);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.A$X));this.Zg.Bh(true
);this.Zg.AdC=77;this.Zd.H(Aai);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A7j));this.
Zd.Bh(false);this.Zd.AdC=78;this.Uc.H(Ale);this.Uc.Aj(true);this.Uc.T(A.aaR(A.acf.
About));this.Uc.Bh(true);this.Uc.AdC=3;this.J(this.Wu,-1);this.J(this.Zg,-1);this.
J(this.Zd,-1);this.J(this.Uc,-1);this.Wu.AR=[this,this.AEH];this.Zg.AR=[this,this.
AEH];this.Zd.AR=[this,this.AEH];this.Uc.AR=[this,this.AEH];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wu._Done();this.Zg._Done();this.Zd._Done();this.
Uc._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Wu._ReInit();this.Zg._ReInit();this.Zd._ReInit();this.Uc._ReInit();this.Wu.T(A.aaR(
A.acf.AhG));this.Zg.T(A.aaR(A.acf.A$X));this.Zd.T(A.aaR(A.acf.A7j));this.Uc.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Wu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO8={_Init:function(aArg){C.Kt.
_Init.call(this,aArg);this.__proto__=C.AO8;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.ANU={FactoryResetScope:null,Uf:null,Wr:null,Uh:null,Init:function(aArg){this.
Ba(this.Uf);A.pe([this,this.MT],this);},Bk0:function(G){switch(this.FactoryResetScope.
C6(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AZ(33,true
,A.jV,0,[this,this.A4j]);break;case 0:A._GetAutoObject(A.Device.Device).AZ(7,true
,A.jV,0,[this,this.A4j]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(115,true
,A.jV,0,[this,this.A4j]);break;default:A.ab5("%s%i",BtP,this.FactoryResetScope.Q
);}},A4j:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bo6();A._GetAutoObject(A.Device.Device).AZ(8,true,A.jV,0,null);A._GetAutoObject(
C.A5).Cb(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bo5();A._GetAutoObject(
A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArT(0);A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).ArZ(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Uq(5);A._GetAutoObject(A.Device.Device).AwB(0);A._GetAutoObject(
A.Device.Device).AwC(0);A._GetAutoObject(A.Device.Device).AwD(0);A._GetAutoObject(
A.Device.Device).AwV(1);A._GetAutoObject(A.Device.Device).AwW(1);A._GetAutoObject(
A.Device.Device).AwX(1);A._GetAutoObject(A.Device.Device).AZ(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bo4();A._GetAutoObject(A.Device.
Device).AZ(116,true,A.jV,0,null);A._GetAutoObject(C.A5).Cb(37);}break;default:A.
ab5("%s%e",AIm,Ar.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Np._Init.call(this.Uf={I:this},0
);C.Np._Init.call(this.Wr={I:this},0);C.BX._Init.call(this.Uh={I:this},0);this.__proto__=
C.ANU;var B;this.Dq(C.AO6);this.Uf.H(I1);this.Uf.Aj(true);this.Uf.T(A.aaR(A.acf.
ACG));this.Uf.Bh(false);this.Uf.Ns(93);this.Wr.H(Qc);this.Wr.Aj(true);this.Wr.T(
A.aaR(A.acf.AdT));this.Wr.Bh(true);this.Wr.Ns(92);this.Uh.H(Ba2);this.Uh.Aj(true
);this.Uh.Bmk(true);this.Uh.T(A.aaR(A.acf.A6M));this.Uh.Bh(false);this.J(this.Uf
,-1);this.J(this.Wr,-1);this.J(this.Uh,-1);this.Uf.AR=[B=this.Uf,B.Nv];this.Wr.AR=[
B=this.Wr,B.Nv];this.Uh.AR=[this,this.Bk0];this.Uh.Au([B=this.FactoryResetScope,
B.B$,B.Cc]);this.Uh.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Uf._Done();this.Wr._Done(
);this.Uh._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uf._ReInit();this.Wr._ReInit();this.Uh._ReInit(
);this.Uf.T(A.aaR(A.acf.ACG));this.Wr.T(A.aaR(A.acf.AdT));this.Uh.T(A.aaR(A.acf.
A6M));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO6={_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO6;this.Text.R(A.aaR(A.acf.ACH
));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACH));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq0={QW:null,Wh:null
,_Init:function(aArg){C.TZ._Init.call(this,aArg);C.CG._Init.call(this.QW={I:this
},0);C.CG._Init.call(this.Wh={I:this},0);this.__proto__=C.Aq0;this.QW.H(BtQ);this.
QW.R(A.aaR(A.acf.A$P));this.QW.A4(0x12);this.QW.L(A.jb.Text);this.Wh.H(BaW);this.
Wh.R(A.aaR(A.acf.An5));this.Wh.L(A.jb.Text);this.J(this.QW,0);this.J(this.Wh,0);
this.QW.S(A.aaL(A.fl.Af));this.QW.AY(A.aaL(A.fl.Ak));this.QW.Cl(A.aaL(A.fl.Bg));
this.Wh.S(A.aaL(A.fl.Af));this.Wh.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.TZ;this.QW._Done();this.Wh._Done();C.TZ._Done.call(this);},_ReInit:function(){
C.TZ._ReInit.call(this);this.QW._ReInit();this.Wh._ReInit();this.QW.R(A.aaR(A.acf.
A$P));this.Wh.R(A.aaR(A.acf.An5));this.QW.S(A.aaL(A.fl.Af));this.QW.AY(A.aaL(A.fl.
Ak));this.QW.Cl(A.aaL(A.fl.Bg));this.Wh.S(A.aaL(A.fl.Af));this.Wh.AY(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.TZ._Mark.call(this,D);if((B=this.QW)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APC={QX:null,_Init:function(aArg){C.TZ._Init.call(this,aArg);C.CG._Init.call(
this.QX={I:this},0);this.__proto__=C.APC;this.QX.H(BtR);this.QX.R(A.aaR(A.acf.Uj
));this.QX.A4(0x12);this.QX.L(A.jb.Text);this.J(this.QX,0);this.QX.S(A.aaL(A.fl.
Af));this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cl(A.aaL(A.fl.Bg));},_Done:function(){this.
__proto__=C.TZ;this.QX._Done();C.TZ._Done.call(this);},_ReInit:function(){C.TZ._ReInit.
call(this);this.QX._ReInit();this.QX.R(A.aaR(A.acf.Uj));this.QX.S(A.aaL(A.fl.Af)
);this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;
C.TZ._Mark.call(this,D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqt={IQ:null,AbD:null,Ea:null
,Bl:function(aSize){C.Nb.Bl.call(this,aSize);this.IQ.H([this.Gy.M[2],0,this.Gy.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1
,aSize[1]]);this.AbD.H([this.IQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Nb.
Ai.call(this,Ae);this.AbD.L(this.Gy.AQ);this.IQ.L(this.Gy.AQ);},Ch:function(Ad){
C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Ig=this.AX.
AmU(Ad,14);var AtT=this.AX.AOP(Ad,7);this.IQ.Ax(A._GetAutoObject(A.Device.Converter
).AmT(AtT));this.AbD.Ax(A._GetAutoObject(A.Device.Converter).A5u(Ig));this.Am();
}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Ap._Init.call(this.IQ={
I:this},0);A.acg.Ap._Init.call(this.AbD={I:this},0);A.acg.AK._Init.call(this.Ea={
I:this},0);this.__proto__=C.Aqt;this.IQ.H(BaY);this.IQ.L(A.jb.Text);this.AbD.H(BtS
);this.AbD.L(A.jb.Text);this.Ea.H(BtT);this.Ea.L(A.jb.Bb);this.J(this.IQ,0);this.
J(this.AbD,0);this.J(this.Ea,0);this.IQ.Ax(A.aaL(A.aci.TR));this.AbD.Ax(A.aaL(A.
aci.TR));},_Done:function(){this.__proto__=C.Nb;this.IQ._Done();this.AbD._Done();
this.Ea._Done();C.Nb._Done.call(this);},_ReInit:function(){C.Nb._ReInit.call(this
);this.IQ._ReInit();this.AbD._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.Nb._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANa={ZS:null,Bl:
function(aSize){C.Nb.Bl.call(this,aSize);this.ZS.H([this.Gy.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Nb.Ai.call(this,Ae);this.ZS.L(this.Gy.AQ);},Ch:function(
Ad){C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Hr=Ad;if(!!this.AX){var Js=this.
AX.KS(Ad,26);if(Js>0)this.ZS.R(A.ab2(Js.toFixed(),5));else this.ZS.R(Rq);this.Am(
);}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZS={I:this},0);this.__proto__=C.ANa;this.ZS.H(BtU);this.J(this.ZS,0);this.ZS.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nb;this.ZS._Done();C.Nb._Done.
call(this);},_ReInit:function(){C.Nb._ReInit.call(this);this.ZS._ReInit();this.ZS.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nb._Mark.call(this,D);if((B=this.ZS
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR4={Ap:null,Ai:function(Ae){C.AeU.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeU._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR4;this.Text.H(BtV);this.Ap.H(A0q);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afc));},_Done:function(){this.__proto__=C.AeU;this.Ap._Done(
);C.AeU._Done.call(this);},_ReInit:function(){C.AeU._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeU._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yz={Text:
null,De:null,AP:null,Gv:null,D2:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nz],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AIT],0);A.zV([this,this.Nz
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nz],this);},Df:function(
E){C.BR.Df.call(this,E);this.De.L(E);this.Text.L(E);this.Gv.L(E);this.D2.Zv(E);}
,WH:function(E){C.BR.WH.call(this,E);this.D2.CV(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B8().toFixed());},Nz:function(s){this.DX(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C7._Init.call(this.A_={I:this},0);this.__proto__=C.Yz;this.Text.H(BtW);this.
Text.A4(0x11);this.De.H(AyH);this.AP.DD(BaS);this.AP.DN(BaT);this.AP.L(A.jb.Bb);
this.Gv.H(BtX);this.Gv.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(BtY);this.D2.Zv(A.jb.
Bm);this.D2.CV(A.jb.Ri);this.D2.Hn(2);this.A_.DD(BtZ);this.A_.DN(Bt0);this.A_.L(
A.jb.Bb);this.J(this.Text,0);this.J(this.De,0);this.J(this.AP,0);this.J(this.Gv,
0);this.J(this.D2,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(
A.aaL(A.fl.Ak));this.De.Ax(A.aaL(A.ach.AjS));this.Gv.Ax(A.aaL(A.ach.Gv));this.D2.
S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.De._Done();this.AP._Done();this.Gv._Done();this.D2._Done();this.A_.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.De._ReInit();this.AP._ReInit();this.Gv._ReInit();this.D2._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acp={FN:null
,J3:null,J2:null,AkJ:null,AkK:null,Q8:null,QH:null,AbC:null,V7:null,PO:null,PP:null
,SB:null,Gw:null,Gx:null,JA:null,AlN:0,AlR:0,D7:0,DW:0,A8:0,Bl:function(aSize){var
B;this.DB.H([this.Hx.M[2]-10,this.Hx.M[1],this.H8.M[0]+10,this.Hx.M[3]]);this.DB.
AFw((B=this.DB.M)[2]-B[0]);this.DB.HI(this.DB.Gt,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GD=this.Bo.Bw;if(!!this.
Q)this.GG(this);if((this.A8===1)||(this.A8===2)){var A1D=this.A2B(this.A8);if(!!
A1D){this.AbC.Z(true);this.AbC.H(A1D.M);this.AbC.L(this.V.AQ);this.V7.Z(true);this.
V7.H(A1D.M);}else{this.AbC.Z(false);this.V7.Z(false);}this.Hx.Z(false);this.H8.Z(
false);}else{this.AbC.Z(false);this.V7.Z(false);this.Hx.Z(Fu||GD);this.H8.Z(Fu||
GD);}},Qu:function(G){if(!!this.Q){if(this.FH===1)A.pe([this,this.Ve],this);else
if(this.FH===4)A.pe([this,this.A0W],this);else if(this.FH===5)A.pe([this,this.A0U
],this);}C.BX.Qu.call(this,G);},Kh:function(G){switch(this.A8){case 0:C.BX.Kh.call(
this,G);break;case 2:break;default:this.Adw(this);}},Kc:function(G){switch(this.
A8){case 0:C.BX.Kc.call(this,G);break;default:this.Aio(this);}},A18:function(G){
var F;if(this.A8===1){var BP=this.D7;this.D7=this.D7-10;if(this.D7<this.AlR)this.
D7=this.AlR;if(this.D7<A._GetAutoObject(A.Device.Device).AcF)this.D7=A._GetAutoObject(
A.Device.Device).AcF;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A8===2){var BP=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[
0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();},A0U:function(s){this.A18(
s);},Al2:function(G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0U],this
);this.Bo.As(false);}this.Bo.As(true);},A2I:function(G){var F;if(this.A8===1){var
BP=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP
){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A8===
2){var BP=this.DW;this.DW=this.DW+10;if(this.DW>this.AlN)this.DW=this.AlN;if(this.
DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.
DK(this);this.Am();},A0W:function(s){this.A2I(s);},Al3:function(G){this.FH=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0W],this);this.Bo.As(false);}this.Bo.As(true
);return;},Ve:function(G){this.Ex(this.A8+1);},Adw:function(G){this.FH=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Ve],this);this.Bo.As(false);}this.Bo.As(true);}
,GG:function(G){},AfH:function(s){this.GG(s);},DK:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeA));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Ve];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hd];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am0
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},A_J:function(E){if(A.aaZ(this.J3,E))return;if(!!this.J3)A.z$([this,this.
A37],this.J3,0);this.J3=E;if(!!this.J3)A.zX([this,this.A37],this.J3,0);A.pe([this
,this.A37],this);},A37:function(G){var F;this.D7=(F=this.J3,F[1].call(F[0]));this.
Am();},A_I:function(E){if(A.aaZ(this.J2,E))return;if(!!this.J2)A.z$([this,this.A36
],this.J2,0);this.J2=E;if(!!this.J2)A.zX([this,this.A36],this.J2,0);A.pe([this,this.
A36],this);},A36:function(G){var F;this.DW=(F=this.J2,F[1].call(F[0]));this.Am();
},FW:function(G){this.Ex(1);},Hd:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DK(this);this.Gx.Bw=!!this.A8;this.Gw.Bw=!!this.A8;this.
Am();},Aio:function(G){if(this.A8>1)this.Ex(this.A8-1);},A4i:function(G){},Ay4:function(
s){this.A4i(s);},A3T:function(G){},Bb8:function(s){this.A3T(s);},A2B:function(Ats
){return null;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkJ={I:this},0);A.acg.AK._Init.call(this.AkK={I:this},0);A.acg.AK._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AK._Init.call(
this.AbC={I:this},0);A.acg.BW._Init.call(this.V7={I:this},0);A.acg.Text._Init.call(
this.PO={I:this},0);A.acg.Text._Init.call(this.PP={I:this},0);A.acg.Text._Init.call(
this.SB={I:this},0);A.Core.BF._Init.call(this.Gw={I:this},0);A.Core.BF._Init.call(
this.Gx={I:this},0);A.Core.BF._Init.call(this.JA={I:this},0);this.__proto__=C.Acp;
this.H(AfE);this.T(A.aaR(A.acf.Arq));this.Background.H(AfE);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG9));this.V.A4(0x12);this.AkJ.H(Bt1);this.AkJ.L(A.jb.Gk);this.AkK.
H(Bt2);this.AkK.L(A.jb.Ia);this.Q8.H(Bt3);this.Q8.L(A.jb.E1);this.QH.H(Bt4);this.
AbC.H(Bt5);this.V7.H(Bt6);this.V7.Nu(3);this.V7.L(A.jb.AV);this.V7.Z(false);this.
PO.H(Bt7);this.PO.Hn(8);this.PO.Je(true);this.PO.A4(0x11);this.PO.L(0xFF000000);
this.PP.H(Bt8);this.PP.Hn(8);this.PP.Je(true);this.PP.A4(0x11);this.PP.L(0xFF000000
);this.SB.H(Bt9);this.SB.Je(false);this.SB.A4(0x12);this.SB.L(0xFF000000);this.Gw.
Filter=5;this.Gw.Bw=false;this.Gx.Filter=4;this.Gx.Bw=false;this.JA.Filter=1;this.
J5(this.V,-1);this.J5(this.DB,-2);this.J(this.AkJ,-1);this.J(this.AkK,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.AbC,-1);this.J(this.V7,-1);this.J(this.
PO,-1);this.J(this.PP,0);this.J(this.SB,0);this.QH.Ax(A.aaL(A.ach.ADM));this.PO.
S(A.aaL(A.fl.Af));this.PP.S(A.aaL(A.fl.Af));this.SB.S(A.aaL(A.fl.Ak));this.Gw.BG=[
this,this.Al2];this.Gw.D1=[this,this.A0U];this.Gx.BG=[this,this.Al3];this.Gx.D1=[
this,this.A0W];this.JA.BG=[this,this.Adw];this.FN=A._NewObject(C.Aet,0);},_Done:
function(){this.__proto__=C.BX;this.AkJ._Done();this.AkK._Done();this.Q8._Done();
this.QH._Done();this.AbC._Done();this.V7._Done();this.PO._Done();this.PP._Done();
this.SB._Done();this.Gw._Done();this.Gx._Done();this.JA._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.AkJ._ReInit();this.AkK._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.AbC._ReInit();this.V7._ReInit();this.
PO._ReInit();this.PP._ReInit();this.SB._ReInit();this.Gw._ReInit();this.Gx._ReInit(
);this.JA._ReInit();this.T(A.aaR(A.acf.Arq));this.V.R(A.aaR(A.acf.AG9));this.PO.
S(A.aaL(A.fl.Af));this.PP.S(A.aaL(A.fl.Af));this.SB.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J2)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JA)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FM={X0:null,Acq:
null,An9:0,An_:0,Dt:function(){if(!this.X0)return 0;return this.X0.MN;},C6:function(
aIndex){if(!this.X0||(aIndex>=this.X0.MN))return-1;return this.X0.Get(aIndex);},
Gm:function(aIndex){return this.A64().BT(this.C6(aIndex));},DZ:function(A9){if(!
this.X0)return-1;return this.X0.Avq(A9);},H7:function(){if(!this.X0)return-1;return this.
X0.H7();},AnI:function(E){if(this.An9===E)return;this.An9=E;A.pe([this,this.AVT]
,this);},A0P:function(Aq){this.AnI(Aq);},AnJ:function(E){if(this.An_===E)return;
this.An_=E;A.pe([this,this.AVU],this);},A0Q:function(Aq){this.AnJ(Aq);},AVU:function(
G){A.abo([this,this.AS3,this.A0Q],0);},AVT:function(G){A.abo([this,this.AS2,this.
A0P],0);},A64:function(){return this.Acq;},AS2:function(){return this.An9;},AS3:
function(){return this.An_;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.FM;},_Done:function(
){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMG={Init:
function(aArg){A.zV([this,this.BfD],A._GetAutoObject(A.Device.Helper).UK,0);A.zV([
this,this.BfB],A._GetAutoObject(A.Device.Helper).UJ,0);this.BfD(this);this.BfB(this
);},Au:function(E){C.FM.Au.call(this,E);this.AnJ(A._GetAutoObject(A.Device.Helper
).UK.Get(this.DZ(E)));this.AnI(A._GetAutoObject(A.Device.Helper).UJ.Get(this.DZ(
E)));},AnI:function(E){if(this.An9===E)return;C.FM.AnI.call(this,E);A._GetAutoObject(
A.Device.Helper).UJ.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UJ.
Cr();},AnJ:function(E){if(this.An_===E)return;C.FM.AnJ.call(this,E);A._GetAutoObject(
A.Device.Helper).UK.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UK.
Cr();},BfD:function(G){this.An_=A._GetAutoObject(A.Device.Helper).UK.Get(this.DZ(
this.Q));A.pe([this,this.AVU],this);},BfB:function(G){this.An9=A._GetAutoObject(
A.Device.Helper).UJ.Get(this.DZ(this.Q));A.pe([this,this.AVT],this);},_Init:function(
aArg){C.FM._Init.call(this,aArg);this.__proto__=C.AMG;this.X0=A._GetAutoObject(A.
Device.Helper).AdZ;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMH={AgC:null,AB_:0,AB8:0,Init:function(aArg){A.zV([this,this.BfQ],A._GetAutoObject(
A.Device.Helper).Afy,0);A.zV([this,this.BfO],A._GetAutoObject(A.Device.Helper).Afx
,0);A.zV([this,this.BfM],A._GetAutoObject(A.Device.Helper).Afw,0);A.zV([this,this.
BfS],A._GetAutoObject(A.Device.Helper).Afz,0);this.BfQ(this);this.BfO(this);this.
BfM(this);this.BfS(this);},Au:function(E){C.FM.Au.call(this,E);this.AnJ(A._GetAutoObject(
A.Device.Helper).Afy.Get(this.DZ(E)));this.AnI(A._GetAutoObject(A.Device.Helper).
Afx.Get(this.DZ(E)));this.AS8(A._GetAutoObject(A.Device.Helper).Afw.Get(this.DZ(
E)));this.AS_(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(E)));},AnI:function(
E){if(this.An9===E)return;C.FM.AnI.call(this,E);A._GetAutoObject(A.Device.Helper
).Afx.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Cr();},AnJ:function(
E){if(this.An_===E)return;C.FM.AnJ.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Cr();},A64:function(
){return this.AgC;},BfQ:function(G){this.An_=A._GetAutoObject(A.Device.Helper).Afy.
Get(this.DZ(this.Q));A.pe([this,this.AVU],this);},BfO:function(G){this.An9=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this,this.AVT],this);},AS_:function(
E){if(this.AB_===E)return;this.AB_=E;A._GetAutoObject(A.Device.Helper).Afz.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Cr();A.pe([this,this.Ban],this
);},AS8:function(E){if(this.AB8===E)return;this.AB8=E;A._GetAutoObject(A.Device.
Helper).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Cr();A.
pe([this,this.Bam],this);},Bam:function(G){A.abo([this,this.A8R,this.AS8],0);},Ban:
function(G){A.abo([this,this.A8T,this.AS_],0);},BfM:function(G){this.AB8=A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(this.Q));A.pe([this,this.Bam],this);},BfS:function(
G){this.AB_=A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this
,this.Ban],this);},A8T:function(){return this.AB_;},A8R:function(){return this.AB8;
},_Init:function(aArg){C.FM._Init.call(this,aArg);A.Device.AgC._Init.call(this.AgC={
I:this},0);this.__proto__=C.AMH;this.X0=A._GetAutoObject(A.Device.Helper).AgD;this.
Init(aArg);},_Done:function(){this.__proto__=C.FM;this.AgC._Done();C.FM._Done.call(
this);},_ReInit:function(){C.FM._ReInit.call(this);this.AgC._ReInit();},_Mark:function(
D){var B;C.FM._Mark.call(this,D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMn={RR:null,Init:function(
aArg){var B;A.zX([this,this.AiM],[B=this.AnimalType,B.B$,B.Cc],0);A.pe([this,this.
AiM],this);this.Ba(this.RR);},Bk:function(E){C.I_.Bk.call(this,E);this.RR.Bx(this.
Jv.AM);},AiM:function(G){A._GetAutoObject(A.Device.Device).AwE(this.AnimalType.Q
);},_Init:function(aArg){C.I_._Init.call(this,aArg);C.TL._Init.call(this.RR={I:this
},0);this.__proto__=C.AMn;var B;this.Jv.As(false);this.Jv.Aj(false);this.Jv.Z(false
);this.RR.H(AIP);this.RR.Aj(true);this.RR.Nq(14);this.RR.Aht(0);this.RR.OT(0);this.
J(this.RR,-4);this.RR.AR=[this,this.AAD];this.RR.Au([B=this.AnimalType,B.B$,B.Cc
]);this.RR.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I_;this.RR._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(
this);this.RR._ReInit();},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=
this.RR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TL={Filter:null,Er:0,TableId:0,Operator:1,CP:function(){var F;this.Tw((F=this.
Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BX.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhT
);this.H8.H([aSize[0]-40,40,aSize[0],80]);this.DB.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H8.M[0]+5,this.Hx.M[3]]);this.DB.AFw((B=this.DB.M)[2]-B[0]);this.DB.HI(this.
DB.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mi],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mi
],E,0);A.pe([this,this.Mi],this);},Mi:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.
Operator));else this.Tw(null);},Aht:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mi],this);},Nq:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mi],this);},Tw:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmV(this.TableId,this.Er));this.Am();},OT:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mi],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.TL;this.H(K2);this.V.A4(0x11);this.V.Cl(A.aaL(A.
fl.Bg));},_ReInit:function(){C.BX._ReInit.call(this);this.V.Cl(A.aaL(A.fl.Bg));this.
CP();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASb={Gf:null,M1:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Da:null,Go:null,
Ee:null,C_:null,B0:null,Ay:null,Breed:null,Jm:null,AnimalType:null,Gender:null,Pr:
null,K1:null,Jk:null,KT:null,Ami:null,KO:0,Nc:0,A4r:false,Init:function(aArg){var
B;A.zX([this,this.BA9],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AIX],0);A.zV([
this,this.At5],this.M1,0);A.zX([this,this.At5],[B=A._GetAutoObject(A.Device.Device
),B.Awk,B.Ay0],0);A.zX([this,this.GG],[B=A._GetAutoObject(A.Device.Device),B.AEQ
,B.AIX],0);A.zV([this,this.GG],this.M1,0);A.zX([this,this.AiM],this.B0.Q,0);A.pe([
this,this.AiM],this);A.pe([this,this.Bff],this);A.pe([this,this.At5],this);A.pe([
this,this.GG],this);A.pe([this,this.A3U],this);},Ba:function(E){C.AB.Ba.call(this
,E);A.pe([this,this.Ap5],this);A.pe([this,this.DK],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.Anw(A.jb.E1);else
this.Ef.Anw(A.jb.Gk);if(A._GetAutoObject(A.Device.Device).AeO){if(!!(F=this.Cn.Dl
,F[1].call(F[0])))this.Cn.Anw(A.jb.E1);else this.Cn.Anw(A.jb.Gk);}else this.Cn.Anw(
A.jb.Ri);A.pe([this,this.DK],this);},DF:function(G){var B;C.AB.DF.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LT:function(
G){if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(A.Device.Device
).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.G7();A._GetAutoObject(A.Device.Helper).Aqf(A._GetAutoObject(A.
Device.Helper).W);this.Apx();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFD(0);},E3:function(G){C.AB.E3.call(this,G);this.Jk.As(false);
A._GetAutoObject(A.Device.Device).Uw(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.FD();A._GetAutoObject(C.A5).Fz();},Fh:function(G){var B;this.Ay.
MH((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Br[1]);},At5:function(G){var F,Cu;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.Ap5(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aek(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3J]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3I],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeO)this.JN(this.Cn);}var Bev=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeO||!!(Cu=this.Cn.Dl,Cu[1].call(Cu[0])));if(this.M1.AOK()>0){if((
this.AV===this.Cn)&&Bev)this.Ba(this.Y.TS(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeO&&(this.AV===this.Cn))&&!!(F=this.Cn.Dl,F[1].call(F[0])))this.
JN(this.Ef);if(Bev)this.Bdh(this);},Adu:function(G){A._GetAutoObject(A.Device.Device
).Dv(13);},AiY:function(){var F;this.Gf.Cr(A._GetAutoObject(A.Device.Device).An);
if(this.M1.N3(23)){if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);else{var Mc=A._GetAutoObject(A.Device.Device).An.LY(0,this.Gf.Id);A._GetAutoObject(
A.Device.Device).SV(Mc);var B2=A._NewObject(A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(
this.Gf.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.
Cr(A._GetAutoObject(A.Device.Device).Bt);}}if(this.M1.N3(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var Mc=A._GetAutoObject(A.Device.
Device).An.LY(0,this.Gf.Id);A._GetAutoObject(A.Device.Device).SV(Mc);var B2=A._NewObject(
A.Device.Rating,0);B2.G7();B2.OnSetAnimalId(this.Gf.Id);B2.OnSetBodyWeight(this.
Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Du());B2.Cr(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WJ(65280);this.Jk.As(true
);(F=A._GetAutoObject(A.Device.Device),F.AFD(F.AvU+1));this.A4r=true;A.pe([this,
this.Ap5],this);this.Apx();},GG:function(G){this.Cn.ATK(A._GetAutoObject(A.Device.
Device).AeO);A._GetAutoObject(A.Device.Helper).J6(this.B0,this.M1.N3(14));A._GetAutoObject(
A.Device.Helper).J6(this.C_,this.M1.N3(23));A._GetAutoObject(A.Device.Helper).J6(
this.CH,this.M1.N3(32));A._GetAutoObject(A.Device.Helper).J6(this.Ee,this.M1.N3(
18));A._GetAutoObject(A.Device.Helper).J6(this.Da,this.M1.N3(7));A._GetAutoObject(
A.Device.Helper).J6(this.Go,this.M1.N3(34));this.KT.Z(!this.M1.AOK());var O;var Aa=
null;var Apd=this.AV;for(O=0;O<this.M1.AfQ.Ng();O++){Aa=this.Bz0(this.M1.AfQ.OK(
O));if(!!Aa)this.ZH(Aa);}this.JN(Apd);A._GetAutoObject(A.Device.Helper).ANx(this.
Y);A.pe([this,this.A3U],this);this.Am();},AeW:function(E){if(this.KO===E)return;
this.KO=E;A.abo([this,this.Av8,this.AeW],0);},Aho:function(E){if(this.Nc===E)return;
this.Nc=E;A.abo([this,this.Anp,this.Aho],0);},Bdh:function(G){this.Gf.G7();A._GetAutoObject(
A.Device.Helper).Aqf(this.Gf);this.Gf.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gf.Nr(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gf.SO(A._GetAutoObject(
A.Device.Helper).AMo(0,this.Gf));this.Gf.Ae4(true);if(this.M1.N3(14))this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.M1.N3(32))this.Gf.N7(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.M1.N3(7))this.Gf.J0(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.M1.N3(34))this.Gf.Nt(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Als=A._GetAutoObject(A.Device.Helper).A1W(this.Gf,0,A._GetAutoObject(
A.Device.Device).An);if(!Als)this.AiY();else A._GetAutoObject(A.Device.Helper).AKn(
this.Gf,Als,0,0,[this,this.ApD]);},Apx:function(){A._GetAutoObject(A.Device.Helper
).W.Nr(0);if(A._GetAutoObject(A.Device.Device).AeO)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeW(0);this.Aho(0);this.JN(this.Ef);this.Am();},ApD:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case
22:case 21:case 48:this.Apx();break;case 43:this.JN(this.Ef);break;case 41:break;
default:A.ab5("%s%e",As$,Ar.Id);}},JN:function(Ag){this.Ba(Ag);this.Y.HI(Ag,true
,null,null);this.Y.VC(null,null);},Bff:function(G){this.Ee.Ahr(A._GetAutoObject(
A.Device.Helper).W.AhR(1));this.At5(this);},AiM:function(G){this.C_.Ahr(A._GetAutoObject(
A.Device.Helper).Abt(this.AnimalType.Q));},A3U:function(G){var B;var BCd=this.Ay.
Background.Fo();var width=(BCd?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xy=this.Y.TS(null,0x401);while(!!Xy&&(((B=Xy)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.O2.isPrototypeOf(Xy)?Xy:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xy=this.Y.TS(Xy,0x1);}},Bz0:function(Aam){var Aa=null;switch(Aam){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C_;break;case 7:Aa=this.Da;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Go;break;default:A.ab5("%s%e",Bt_
,Aam);}return Aa;},BA9:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeO
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Cn.Dl,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Du()-
A._GetAutoObject(A.Device.Helper).AmH(A._GetAutoObject(A.Device.Device).AdR));this.
At5(this);},Ap5:function(G){var B;var AKq=A.jV;var Azl=A.jb.CJ;var Bdy=A.jb.AV;this.
Ami.AxI(this);if(this.A4r){this.A4r=false;AKq=A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.Bp1),Pa,A._GetAutoObject(A.Device.Converter).Rj(this.Gf.NaisId));
A.pe([B=this.Ami,B.StartTimer],this);Azl=A.jb.E1;Bdy=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKq=A.aaR(A.acf.AUK);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKq=A.aaR(A.
acf.Bpf);this.KT.T(AKq);this.KT.Bmw(Azl);this.KT.A98(Bdy);},A3J:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X5();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X5();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cb(76);A.
_GetAutoObject(A.Device.Device).X5();}}}else A._GetAutoObject(A.Device.Device).X5(
);},A3I:function(G){A._GetAutoObject(A.Device.Device).Aqn();},DK:function(G){var
B;if(!this.M1.AOK()){this.N.Li.CZ(255);if(this.AV===this.Ef){this.N.C3(A.aaL(A.ach.
Edit));this.N.Ca=[B=this.Ef,B.FW];}else if(this.AV===this.Cn){this.N.C3(A.aaL(A.
ach.Edit));this.N.Ca=[B=this.Cn,B.FW];}else{this.N.C3(null);this.N.Ca=null;}}else{
this.N.C3(A.aaL(A.ach.Am1));if((this.Ef.Aqu===A.jb.Gk)||(this.Cn.Aqu===A.jb.Gk)){
this.N.Li.CZ(100);this.N.Ca=null;}else{this.N.Li.CZ(255);this.N.Ca=[this,this.Bdh
];}}},Av8:function(){return this.KO;},Anp:function(){return this.Nc;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.AUY._Init.call(this.Ef={I:this},0);C.AUU._Init.
call(this.Cn={I:this},0);C.Axx._Init.call(this.CH={I:this},0);C.BX._Init.call(this.
Da={I:this},0);C.AsA._Init.call(this.Go={I:this},0);C.AkR._Init.call(this.Ee={I:
this},0);C.AkR._Init.call(this.C_={I:this},0);C.BX._Init.call(this.B0={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);
C.UU._Init.call(this.Jm={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Na._Init.call(this.Pr={
I:this},0);A.Device.K1._Init.call(this.K1={I:this},0);A.Device.TM._Init.call(this.
Jk={I:this},0);C.AG8._Init.call(this.KT={I:this},0);A.Core.Timer._Init.call(this.
Ami={I:this},0);this.__proto__=C.ASb;var B;this.Background.L(A.jb.CU);this.N.Z(true
);this.Ek.As(false);this.Dq(C.APq);this.DY.A1(0x3F);this.DY.H(Fc);this.DY.L(A.jb.
CJ);this.Y.H(Fc);this.Y.JZ(9);this.Ef.H(AIP);this.Ef.Aj(true);this.Ef.T(A.aaR(A.
acf.ACR));this.Ef.ATK(true);this.Ef.AFW(false);this.Cn.H(Ba2);this.Cn.Aj(true);this.
Cn.T(A.aaR(A.acf.Aee));this.Cn.ATK(true);this.Cn.AFR(true);this.CH.H(As_);this.CH.
Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Da.H(As_);this.Da.Aj(true);this.Da.T(
A.aaR(A.acf.Afo));this.Go.H(Ba3);this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.
Ee.H(Bt$);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(
999000);this.Ee.Ahr(A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.Q));this.
C_.H(Ba3);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KO));this.C_.Gb(1000);this.C_.EV(
99000);this.C_.Ahr(A._GetAutoObject(A.Device.Helper).Abt(this.AnimalType.Q));this.
B0.H(Aol);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.Aft));this.Ay.H(Iw);this.Jk.B3=
false;this.Jk.Cx=true;this.Jk.HO(1);this.Jk.Fp(1000);this.Jk.Ut(0);this.KT.H(Aaj
);this.KT.Aj(true);this.KT.Anw(A.jb.Text);this.Ami.PX(3000);this.J(this.DY,0);this.
J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(this.Da
,0);this.J(this.Go,0);this.J(this.Ee,0);this.J(this.C_,0);this.J(this.B0,0);this.
J(this.Ay,0);this.J(this.KT,0);this.N.CF=[this,this.Ew];this.N.Ce=[this,this.Adu
];this.N.C2(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeC));this.Y.Em=[this,this.Fh
];this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.Ans,B.Nr]);this.Ef.AFr([this,this.At5]);this.Ef.ATw([this,this.A3I]);this.
Ef.ATx([this,this.A3J]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.Ab8([B=A._GetAutoObject(
A.Device.Helper).W,B.Av$,B.Q6]);this.Cn.OM=[this,this.Bff];this.Cn.ATw([this,this.
A3I]);this.Cn.ATx([this,this.A3J]);this.CH.Gs([this,this.D_,this.GS]);this.CH.L4([
B=this.CH,B.FW]);this.CH.L7(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CK(this.Breed);this.CH.Anx(this.Pr);this.Da.Au([B=this.Gender,B.B$,B.
Cc]);this.Da.CK(this.Gender);this.Go.Gs([this,this.D_,this.GS]);this.Go.L4([B=this.
Go,B.FW]);this.Go.L7(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.
CK(this.Jm);this.Go.Anx(this.K1);this.Ee.Au([this,this.Anp,this.Aho]);this.C_.Au([
this,this.Av8,this.AeW]);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(this.
AnimalType);this.Ay.BnQ([this,this.A3U]);this.Breed.L5(A._GetAutoObject(A.Device.
Helper).W);this.Jm.L5(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L5(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L5(A._GetAutoObject(A.Device.Helper
).W);this.Gf=A._NewObject(A.Device.Animal,0);this.M1=A._GetAutoObject(C.Amq);this.
Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0L];this.Ami.MK=[this,this.Ap5
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Y.
_Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Da._Done();this.Go.
_Done();this.Ee._Done();this.C_._Done();this.B0._Done();this.Ay._Done();this.Breed.
_Done();this.Jm._Done();this.AnimalType._Done();this.Gender._Done();this.Pr._Done(
);this.K1._Done();this.Jk._Done();this.KT._Done();this.Ami._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit(
);this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Da._ReInit();this.Go.
_ReInit();this.Ee._ReInit();this.C_._ReInit();this.B0._ReInit();this.Ay._ReInit(
);this.Breed._ReInit();this.Jm._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.Pr._ReInit();this.K1._ReInit();this.Jk._ReInit();this.KT._ReInit();this.Ami.
_ReInit();this.Ef.T(A.aaR(A.acf.ACR));this.Cn.T(A.aaR(A.acf.Aee));this.CH.T(A.aaR(
A.acf.Breed));this.Da.T(A.aaR(A.acf.Afo));this.Go.T(A.aaR(A.acf.Jm));this.Ee.T(A.
aaR(A.acf.Nc));this.C_.T(A.aaR(A.acf.KO));this.B0.T(A.aaR(A.acf.Aft));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Gf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.M1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DY)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ami)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsMassRecording"};C.Asz={SF:null,_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);C.CG._Init.call(this.SF={I:this},0);this.__proto__=C.Asz;this.
N.CS(A.aaR(A.acf.A6C));this.Number.H(Bua);this.Jl.H(Bub);this.IZ.H(Buc);this.AkB(
2);this.Bde=false;this.Bek=true;this.Bel=false;this.SF.H(Bud);this.SF.R(A.aaR(A.
acf.A$W));this.SF.L(A.jb.Text);this.J(this.SF,0);this.N.CF=null;this.N.Ca=[this,
this.AI3];this.N.C2(null);this.SF.S(A.aaL(A.fl.Af));this.SF.AY(A.aaL(A.fl.Ak));this.
SF.Cl(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
SF._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.SF._ReInit();this.N.CS(A.aaR(A.acf.A6C));this.SF.R(A.aaR(
A.acf.A$W));this.SF.S(A.aaL(A.fl.Af));this.SF.AY(A.aaL(A.fl.Ak));this.SF.Cl(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancellableScreen"
};C.AD4={Cv:null,FP:function(E){if(this.Ne===E)return;C.HL.FP.call(this,E);this.
Cv.CV(E);},Yw:function(HA){var B6=null;switch(HA){case-1:case 0:B6=this.F_;break;
case 1:B6=this.Cv;break;case 2:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD4;this.H(Bue);this.Cv.H(BaF);this.F_.H(Buf);this.J(this.
Cv,-2);this.Cv.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.HL;this.Cv.
_Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.call(this);this.
Cv._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Cv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsA={G4:null
,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G4.M[0
]));},Ai:function(Ae){C.OZ.Ai.call(this,Ae);if(this.Hl)this.G4.FP(A.jb.CJ);else this.
G4.FP(A.jb.CU);},A2v:function(){this.Ba(this.G4);},_Init:function(aArg){C.OZ._Init.
call(this,aArg);C.HL._Init.call(this.G4={I:this},0);this.__proto__=C.AsA;this.G4.
H(Bug);this.J(this.G4,0);this.G4.Au([this,this.ASO,this.AFK]);},_Done:function(){
this.__proto__=C.OZ;this.G4._Done();C.OZ._Done.call(this);},_ReInit:function(){C.
OZ._ReInit.call(this);this.G4._ReInit();},_Mark:function(D){var B;C.OZ._Mark.call(
this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.Axx={G4:null,Bl:function(aSize){C.OZ.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G4.M[0]));},Ai:function(Ae){C.OZ.Ai.call(this,Ae);if(this.Hl)this.G4.FP(
A.jb.CJ);else this.G4.FP(A.jb.CU);},A2v:function(){this.Ba(this.G4);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);C.AD4._Init.call(this.G4={I:this},0);this.__proto__=
C.Axx;this.G4.A1(0x18);this.G4.H(Buh);this.J(this.G4,0);this.G4.Au([this,this.ASO
,this.AFK]);},_Done:function(){this.__proto__=C.OZ;this.G4._Done();C.OZ._Done.call(
this);},_ReInit:function(){C.OZ._ReInit.call(this);this.G4._ReInit();},_Mark:function(
D){var B;C.OZ._Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acr={ScreenTypeToString:
null,Dt:function(){return 4;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C6(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acr;this.BI.Set(0,3);this.BI.Set(1,35);this.BI.Set(2
,34);this.BI.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWd={KT:null,HG:null,LX:null,IN:null,KK:A.jV,Aqk:false,ALk:false,A2O:false,Init:
function(aArg){var B;A.zX([this,this.BfL],[B=A._GetAutoObject(A.Device.Device),B.
Uo,B.U8],0);A.pe([this,this.BfL],this);A.pe([this,this.Ap5],this);},WF:function(
G){this.Agv();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.Settings),[this,this.A3Z]);A.
_GetAutoObject(C.BS).Fx();this.AMb();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARD)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},DF:function(G){},H0:function(
G){if((this.Aqk===false)||!this.KK.length){C.Mo.H0.call(this,G);return;}if(!this.
KK.length)this.LX.Mx=true;var FJ=A._GetAutoObject(A.Device.AkF).Bf2(this.KK);this.
KK=A.jV;if(!FJ){if((this.KK.length<13)&&!A._GetAutoObject(A.Device.Device).OX)A.
_GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,[this,this.SK]);else A._GetAutoObject(
A.Device.Device).AZ(103,true,A.jV,0,[this,this.SK]);A.pe([this,this.WG],this);return;
}if(A._GetAutoObject(A.Device.Helper).Bkv(FJ)){A.pe([this,this.A$N],this);A.pe([
this,this.Aal],this);}else{A._GetAutoObject(A.Device.Device).AZ(117,true,A.jV,0,[
this,this.SK]);A.pe([this,this.WG],this);}},CC:function(G){C.Mo.CC.call(this,G);
if(this.A2O){this.A2O=false;A.pe([this,this.A0R],this);}},Age:function(G){if(this.
Aqk&&(this.KK.length>0)){A.pe([this,this.Alj],this);return;}C.Mo.Age.call(this,G
);this.A$d(true);},Abu:function(){return C.ACj;},Abv:function(){return C.ADD;},Q_:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7h(Math.max(A._GetAutoObject(A.Device.Device).AvW,A._GetAutoObject(A.Device.Helper
).A6$(A._GetAutoObject(A.Device.Device).An))+1));},HQ:function(G){C.Mo.HQ.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).S8(A._GetAutoObject(A.Device.Device
).OX)===10)&&this.ALk)&&!!this.Bf.AX)&&!this.Bf.AX.B8()){this.N.Ct(null);this.N.
E5(A.aaR(A.acf.No));this.N.Ce=[this,this.BBl];this.N.C3(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Ca=[this,this.BBm];}else if(A._GetAutoObject(A.Device.Helper).ARo(
)){this.N.Ct(A.aaL(A.ach.Aq5));this.N.Ce=null;this.N.E5(A.jV);this.N.IS.CZ(100);
}else if(this.Ake()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajo(
A._GetAutoObject(A.Device.Converter).AL8(this.L2.ADe())));this.N.Ce=[this,this.Aal
];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false);},AaH:function(G){C.Mo.AaH.
call(this,G);this.Bha(this);},Agh:function(){A._GetAutoObject(C.A5).Cb(86);},ABb:
function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E9();var Ay$=
aFilter.DM(26,4);if(!!Ay$){aFilter.Nw(Ay$);A._GetAutoObject(A.Device.Device).An.
Bk(aFilter);if(!!this.Bf)this.Bf.GT(0);}},A69:function(){return C.APx;},Bgp:function(
){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.
Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E9();FilterCriterion=(
A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DM(26,4))?B:null);if(
!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.Device).An.
Bk(Filter);}},A3Z:function(G){A._GetAutoObject(A.Device.Device).Dv(0);this.A2O=true;
A._GetAutoObject(C.A5).Cb(89);},ALr:function(G){if(A._GetAutoObject(A.Device.Converter
).S8(A._GetAutoObject(A.Device.Device).OX)===10){if(this.ALk){this.Dk(A.aaR(A.acf.
BoV));this.Bf.NU.S(A.aaL(A.fl.Bg));}else{this.Dk(A.aaR(A.acf.AEB));this.Bf.NU.S(
A.aaL(A.fl.Af));}}else this.Dk(A.aaR(A.acf.AEB));},A$d:function(E){if(this.ALk===
E)return;this.ALk=E;A.pe([this,this.Aow],this);A.pe([this,this.ALr],this);},BBm:
function(G){A._GetAutoObject(C.A5).Ab$(90);},BBl:function(G){this.A$d(false);},BfL:
function(G){this.Bha(this);},Bmo:function(E){if(this.Aqk===E)return;this.Aqk=E;A.
pe([this,this.Z4],this);A.pe([this,this.Ap5],this);},Ap5:function(G){this.KT.Z(this.
Aqk);if(this.Aqk)this.A_A(Ba4);else this.A_A(Ak$);},AAJ:function(G){if(this.KK.length<
17)this.KK=this.KK+String.fromCharCode(this.HG.Dy);},Av5:function(G){if((this.IN.
Dy===0x0D)||(this.IN.Dy===0x0A))this.H0(this);else this.IN.Mx=true;},WG:function(
G){A._GetAutoObject(A.Device.Device).Aqn();A.ab5("%s",Bui);},SK:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X5();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X5();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cb(76);A.
_GetAutoObject(A.Device.Device).X5();}}}else A._GetAutoObject(A.Device.Device).X5(
);},Bha:function(G){this.Bmo(A._GetAutoObject(A.Device.Helper).ARo()&&(A._GetAutoObject(
A.Device.Device).An.B8()>0));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.
AG8._Init.call(this.KT={I:this},0);A.Core.BF._Init.call(this.HG={I:this},0);A.Core.
BF._Init.call(this.LX={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.
__proto__=C.AWd;this.Dq(C.ADu);this.Dk(A.aaR(A.acf.AEB));this.KT.H(Aol);this.KT.
T(A.aaR(A.acf.AUK));this.KT.Anw(A.jb.Text);this.KT.A98(A.jb.AV);this.HG.Filter=143;
this.LX.Filter=149;this.IN.Filter=145;this.J(this.KT,0);this.ATs(A._GetAutoObject(
C.Ax3));this.HG.BG=[this,this.AAJ];this.LX.BG=[this,this.Alj];this.IN.BG=[this,this.
Av5];this.Init(aArg);},_Done:function(){this.__proto__=C.Mo;this.KT._Done();this.
HG._Done();this.LX._Done();this.IN._Done();C.Mo._Done.call(this);},_ReInit:function(
){C.Mo._ReInit.call(this);this.KT._ReInit();this.HG._ReInit();this.LX._ReInit();
this.IN._ReInit();this.Dk(A.aaR(A.acf.AEB));this.KT.T(A.aaR(A.acf.AUK));},_Mark:
function(D){var B;C.Mo._Mark.call(this,D);if((B=this.KT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YoungNoTransponderListScreen"
};C.AWc={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AWc;this.
KZ.As(false);this.KZ.Aj(false);this.KZ.Z(false);this.Bnq(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARg={Sv:null,Q:null,A8r:0,Ne:0,Init:function(aArg){this.ATv(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sv)this.Sv.Au(E);},ATv:function(
E){if(this.A8r===E)return;this.A8r=E;var X;switch(E){case 2:X=A._NewObject(C.HL,
0);break;case 3:X=A._NewObject(C.AD4,0);break;case 4:X=A._NewObject(C.ARd,0);break;
case 5:X=A._NewObject(C.ARe,0);break;case 6:X=A._NewObject(C.AvN,0);break;default:{
X=null;A.ab5("%s%i",Buj,E);}}this.Bnp(X);},Bnp:function(E){if(this.Sv===E)return;
if(!!this.Sv){this.Sv.Au(null);this.HP(this.Sv);}this.Sv=E;if(!!this.Sv){this.Sv.
Au(this.Q);this.J(this.Sv,0);}},FP:function(E){if(this.Ne===E)return;this.Ne=E;if(
!!this.Sv)this.Sv.FP(E);},SU:function(Gz){if(!!this.Sv)this.Sv.SU(Gz);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARg;this.H(Ayq);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sv)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARd={CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.HL.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);},Yw:function(
HA){var B6=null;switch(HA){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.G1;break;default:A.ab5("%s",Ah0);}return B6;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DG._Init.call(this.CW={I:this
},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARd;this.H(Buk);this.G1.
H(Ali);this.CW.H(BaG);this.Cv.H(BaH);this.F_.H(BaI);this.J(this.CW,-2);this.J(this.
Cv,-2);this.CW.Dj=[this,this.GX];this.Cv.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.CW._Done();this.Cv._Done();C.HL._Done.call(this);},_ReInit:function(
){C.HL._ReInit.call(this);this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D
){var B;C.HL._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC0={S9:null,Ai:function(Ae){C.Abs.Ai.call(this,Ae);this.S9.L(this.V.AQ);},_Init:
function(aArg){C.Abs._Init.call(this,aArg);C.CG._Init.call(this.S9={I:this},0);this.
__proto__=C.AC0;this.V.Z(false);this.AW.H(Bul);this.AW.ATv(4);this.S9.H(Bum);this.
S9.R(A.aaR(A.acf.Kp));this.S9.L(A.jb.Bm);this.J(this.S9,0);this.S9.S(A.aaL(A.fl.
Af));this.S9.AY(A.aaL(A.fl.Ak));this.S9.Cl(null);},_Done:function(){this.__proto__=
C.Abs;this.S9._Done();C.Abs._Done.call(this);},_ReInit:function(){C.Abs._ReInit.
call(this);this.S9._ReInit();this.S9.R(A.aaR(A.acf.Kp));this.S9.S(A.aaL(A.fl.Af)
);this.S9.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abs._Mark.call(this,D);
if((B=this.S9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L3={Y4:null,T_:null,AQ:0,A7I:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y4.L(this.AQ);this.T_.L(this.AQ);},A_w:function(E){var B;if(this.A7I===
E)return;this.A7I=E;if(E){this.Y4.Z(true);this.T_.DD([this.T_.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y4.Z(false);this.T_.DD([this.T_.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C7._Init.call(
this.Y4={I:this},0);A.acg.C7._Init.call(this.T_={I:this},0);this.__proto__=C.L3;
this.H(A0r);this.Y4.A1(0x2D);this.Y4.DD(AhV);this.Y4.DN(Ba5);this.Y4.L(A.jb.Text
);this.T_.A1(0x36);this.T_.DD(Ba5);this.T_.DN(Bun);this.T_.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y4,0);this.J(this.T_,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y4._Done();this.T_._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y4._ReInit();this.T_._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUB={SA:null,PG:null,Da:null,B0:null,CH:null,GP:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pr:null,UU:null,K1:null,Init:function(aArg){A.zX([this
,this.AuM],this.B0.Q,0);A.zX([this,this.AM5],this.CH.Q,0);A.zX([this,this.Brj],this.
SA.Q,0);A.zX([this,this.Avo],this.Da.Q,0);A.zX([this,this.AV$],this.GP.Q,0);},AuM:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Brj:function(G){var F;A._GetAutoObject(A.Device.Device).Axe((F=this.SA.Q
,F[1].call(F[0])));},Avo:function(G){var F;A._GetAutoObject(A.Device.Device).J0((
F=this.Da.Q,F[1].call(F[0])));},AV$:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GP.Q,F[1].call(F[0])));},AM5:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BX._Init.call(this.SA={I:this},0);C.Iu._Init.call(this.PG={I:this
},0);C.BX._Init.call(this.Da={I:this},0);C.BX._Init.call(this.B0={I:this},0);C.Axx.
_Init.call(this.CH={I:this},0);C.AsA._Init.call(this.GP={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Na._Init.call(this.Pr={I:this},0);C.UU._Init.call(this.UU={I:
this},0);A.Device.K1._Init.call(this.K1={I:this},0);this.__proto__=C.AUB;var B;this.
Jf((A.aaR(A.acf.Asn)+AyD)+A.aaR(A.acf.AjD));this.SA.H(AhY);this.SA.Aj(true);this.
SA.T(A.aaR(A.acf.Bax));this.SA.Bh(true);this.SA.Bx(0);this.PG.H(Ayo);this.PG.Aj(
true);this.PG.Z(true);this.PG.T(A.aaR(A.acf.AdR));this.PG.Gb(0);this.PG.EV(99);this.
PG.IW(A.aaR(A.acf.Kp));this.PG.Jg(A.aaR(A.acf.GK));this.Da.H(Aaj);this.Da.Aj(true
);this.Da.T(A.aaR(A.acf.Afo));this.Da.Bh(true);this.Da.Bx(0);this.B0.H(Alf);this.
B0.Aj(true);this.B0.T(A.aaR(A.acf.Aft));this.B0.Bh(true);this.B0.Bx(0);this.CH.H(
AhZ);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bh(false);this.GP.H(
AhZ);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jm));this.GP.Bh(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UU.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.SA,0);this.
J(this.PG,0);this.J(this.Da,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GP
,0);this.SA.Au([B=this.WeightRecordingScope,B.B$,B.Cc]);this.SA.CK(this.WeightRecordingScope
);this.PG.Au([B=A._GetAutoObject(A.Device.Device),B.A8K,B.Bbq]);this.Da.Au([B=this.
Gender,B.B$,B.Cc]);this.Da.CK(this.Gender);this.B0.Au([B=this.AnimalType,B.B$,B.
Cc]);this.B0.CK(this.AnimalType);this.CH.Gs([this,this.D_,this.GS]);this.CH.L4([
B=this.CH,B.FW]);this.CH.L7(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CK(this.Breed);this.CH.Anx(this.Pr);this.GP.Gs([this,this.D_,this.GS]
);this.GP.L4([B=this.GP,B.FW]);this.GP.L7(A.aaL(A.ach.Edit));this.GP.Au([B=this.
UU,B.B$,B.Cc]);this.GP.CK(this.UU);this.GP.Anx(this.K1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.SA._Done();this.PG._Done();this.Da._Done();this.
B0._Done();this.CH._Done();this.GP._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pr._Done();this.UU._Done();this.
K1._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
SA._ReInit();this.PG._ReInit();this.Da._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GP._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pr._ReInit();this.UU._ReInit();
this.K1._ReInit();this.Jf((A.aaR(A.acf.Asn)+AyD)+A.aaR(A.acf.AjD));this.SA.T(A.aaR(
A.acf.Bax));this.PG.T(A.aaR(A.acf.AdR));this.PG.IW(A.aaR(A.acf.Kp));this.PG.Jg(A.
aaR(A.acf.GK));this.Da.T(A.aaR(A.acf.Afo));this.B0.T(A.aaR(A.acf.Aft));this.CH.T(
A.aaR(A.acf.Breed));this.GP.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUA={QR:null,FB:null,Iq:null,C$:null,Dm:null,EL:null,AutoRegistrationMode:null
,AdU:null,Init:function(aArg){var B;A.zX([this,this.BhO],this.QR.Q,0);A.zX([this
,this.Be2],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.A0x],0);A.zX([this,this.
Adv],[B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.zX([this,this.Adv],[B=
A._GetAutoObject(A.Device.Device),B.Un,B.U6],0);A.pe([this,this.Be2],this);A.pe([
this,this.Adv],this);},BhO:function(G){var F;A._GetAutoObject(A.Device.Device).Awr((
F=this.QR.Q,F[1].call(F[0])));},Be2:function(G){switch(A._GetAutoObject(A.Device.
Device).Agx){case 0:A._GetAutoObject(A.Device.Helper).J6(this.Iq,true);break;case
1:A._GetAutoObject(A.Device.Helper).J6(this.Iq,false);break;default:throw new Error(
Buo+A._GetAutoObject(A.Device.Device).Agx.toFixed());}},Adv:function(G){var F,Cu;
if(((F=this.C$.Q,F[1].call(F[0]))+(Cu=this.Dm.Q,Cu[1].call(Cu[0])))>12)(Cu=this.
Dm.Q,Cu[2].call(Cu[0],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BX._Init.call(this.QR={I:this},0);C.BX._Init.call(this.
FB={I:this},0);C.AGO._Init.call(this.Iq={I:this},0);C.Iu._Init.call(this.C$={I:this
},0);C.Iu._Init.call(this.Dm={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdU._Init.
call(this.AdU={I:this},0);this.__proto__=C.AUA;var B;this.Jf(A.aaR(A.acf.Aqj));this.
QR.H(AIP);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.Aqj));this.QR.Bh(false);this.QR.
Gb(-1);this.QR.EV(1);this.FB.H(U2);this.FB.Aj(true);this.FB.Z(true);this.FB.T(A.
aaR(A.acf.Aqg));this.FB.Bh(true);this.Iq.H(Aaj);this.Iq.Aj(true);this.Iq.Z(true);
this.Iq.T(A.aaR(A.acf.AEz));this.Iq.Bh(true);this.C$.H(Alf);this.C$.Aj(true);this.
C$.Z(true);this.C$.T(A.aaR(A.acf.AqD));this.C$.Bh(false);this.C$.Gb(2);this.C$.EV(
6);this.C$.IW(A.aaR(A.acf.OI));this.C$.Jg(A.aaR(A.acf.Ez));this.Dm.H(AhZ);this.Dm.
Aj(true);this.Dm.T(A.aaR(A.acf.Zo));this.Dm.Bh(true);this.Dm.Gb(0);this.Dm.EV(12
);this.Dm.IW(A.aaR(A.acf.OI));this.Dm.Jg(A.aaR(A.acf.Ez));this.EL.H(Bup);this.EL.
As(true);this.EL.Aj(true);this.EL.Bh(false);this.EL.Ar1(A.aaR(A.acf.Aqi));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QR,0);this.
J(this.FB,0);this.J(this.Iq,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL
,0);this.QR.Au([B=this.AutoRegistrationMode,B.B$,B.Cc]);this.QR.CK(this.AutoRegistrationMode
);this.FB.Au([B=this.AdU,B.B$,B.Cc]);this.FB.CK(this.AdU);this.Iq.Us([B=A._GetAutoObject(
A.Device.Device),B.WE,B.A0A]);this.Iq.Aks([B=A._GetAutoObject(A.Device.Device),B.
Awb,B.AyU]);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.Dm.
Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U6]);this.EL.DC(A.aaL(A.ach.AjU));
this.EL.OS([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.EL.PW([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QR._Done();this.FB._Done();this.Iq._Done();this.C$._Done();this.Dm._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdU._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QR._ReInit();this.FB.
_ReInit();this.Iq._ReInit();this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdU._ReInit();this.Jf(A.aaR(A.acf.Aqj
));this.QR.T(A.aaR(A.acf.Aqj));this.FB.T(A.aaR(A.acf.Aqg));this.Iq.T(A.aaR(A.acf.
AEz));this.C$.T(A.aaR(A.acf.AqD));this.C$.IW(A.aaR(A.acf.OI));this.C$.Jg(A.aaR(A.
acf.Ez));this.Dm.T(A.aaR(A.acf.Zo));this.Dm.IW(A.aaR(A.acf.OI));this.Dm.Jg(A.aaR(
A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aqi));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FB)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVF={ON:null,FB:null,Iq:null,C$:null,Dm:null,EL:null,Afs:null,Init:function(
aArg){var B;A.zX([this,this.BfF],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N
],0);A.zX([this,this.Adv],[B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.zX([
this,this.Adv],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U6],0);A.pe([this,this.
BfF],this);A.pe([this,this.Adv],this);},BfF:function(G){var AK8=false;var AaQ=false;
switch(A._GetAutoObject(A.Device.Device).Ak1){case 0:{AK8=false;AaQ=false;}break;
case 1:{AK8=true;AaQ=false;}break;case 2:{AK8=false;AaQ=true;}break;default:throw new
Error(Buq+A._GetAutoObject(A.Device.Device).Ak1.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Iq,AK8);A._GetAutoObject(A.Device.Helper).J6(this.C$,AaQ);A._GetAutoObject(
A.Device.Helper).J6(this.Dm,AaQ);A._GetAutoObject(A.Device.Helper).J6(this.EL,AaQ
);},Adv:function(G){var F,Cu;if(((F=this.C$.Q,F[1].call(F[0]))+(Cu=this.Dm.Q,Cu[
1].call(Cu[0])))>12)(Cu=this.Dm.Q,Cu[2].call(Cu[0],12-(F=this.C$.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Iu._Init.call(this.ON={
I:this},0);C.BX._Init.call(this.FB={I:this},0);C.AGO._Init.call(this.Iq={I:this}
,0);C.Iu._Init.call(this.C$={I:this},0);C.Iu._Init.call(this.Dm={I:this},0);C.AvX.
_Init.call(this.EL={I:this},0);C.Afs._Init.call(this.Afs={I:this},0);this.__proto__=
C.AVF;var B;this.Jf(A.aaR(A.acf.LinkTransponder));this.ON.H(AIP);this.ON.Aj(true
);this.ON.Z(true);this.ON.T(A.aaR(A.acf.A72));this.ON.Bh(false);this.ON.Gb(1);this.
ON.EV(365);this.ON.IW(A.aaR(A.acf.Kp));this.ON.Jg(A.aaR(A.acf.GK));this.FB.H(U2);
this.FB.Aj(true);this.FB.Z(true);this.FB.T(A.aaR(A.acf.Aqg));this.FB.Bh(true);this.
Iq.H(Aaj);this.Iq.Aj(true);this.Iq.Z(true);this.Iq.T(A.aaR(A.acf.AEz));this.Iq.Bh(
false);this.C$.H(Alf);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.AqD
));this.C$.Bh(false);this.C$.Gb(2);this.C$.EV(6);this.C$.IW(A.aaR(A.acf.OI));this.
C$.Jg(A.aaR(A.acf.Ez));this.Dm.H(AhZ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.Zo)
);this.Dm.Bh(true);this.Dm.Gb(0);this.Dm.EV(12);this.Dm.IW(A.aaR(A.acf.OI));this.
Dm.Jg(A.aaR(A.acf.Ez));this.EL.H(Aok);this.EL.As(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.Ar1(A.aaR(A.acf.Aqi));this.J(this.ON,0);this.J(this.FB,0);this.
J(this.Iq,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL,0);this.ON.Au([B=
A._GetAutoObject(A.Device.Device),B.A9f,B.BbH]);this.FB.Au([B=this.Afs,B.B$,B.Cc
]);this.FB.CK(this.Afs);this.Iq.Us([B=A._GetAutoObject(A.Device.Device),B.WE,B.A0A
]);this.Iq.Aks([B=A._GetAutoObject(A.Device.Device),B.Awb,B.AyU]);this.C$.Au([B=
A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.Dm.Au([B=A._GetAutoObject(A.Device.
Device),B.Un,B.U6]);this.EL.DC(A.aaL(A.ach.AjU));this.EL.OS([B=A._GetAutoObject(
A.Device.Device),B.Ul,B.U5]);this.EL.PW([B=A._GetAutoObject(A.Device.Device),B.Un
,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.ON._Done();this.
FB._Done();this.Iq._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.
Afs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
ON._ReInit();this.FB._ReInit();this.Iq._ReInit();this.C$._ReInit();this.Dm._ReInit(
);this.EL._ReInit();this.Afs._ReInit();this.Jf(A.aaR(A.acf.LinkTransponder));this.
ON.T(A.aaR(A.acf.A72));this.ON.IW(A.aaR(A.acf.Kp));this.ON.Jg(A.aaR(A.acf.GK));this.
FB.T(A.aaR(A.acf.Aqg));this.Iq.T(A.aaR(A.acf.AEz));this.C$.T(A.aaR(A.acf.AqD));this.
C$.IW(A.aaR(A.acf.OI));this.C$.Jg(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(A.acf.Zo));this.
Dm.IW(A.aaR(A.acf.OI));this.Dm.Jg(A.aaR(A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aqi));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.ON)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afs={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg5],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N],0);A.pe([
this,this.Bg5],this);},Dt:function(){return 3;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw$(E);},Bg5:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak1;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afs;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Ji={B7:null,I2:null,Cq:null,Amy:null,Sj:null,Ani:null,AjA:null,Text:null,CY:
null,D6:0,LE:false,Ai:function(Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.I2.As(true);else{this.I2.As(false);this.CY.Z(false);}},A4X:function(G
){var B;var Bd=this.Text.M;var NG=0;var NH=0;if(this.CY.Et[0]<Bd[0])NG=Bd[0]-this.
CY.Et[0];if(this.CY.Et[0]>Bd[2])NG=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NH=
Bd[1]-this.CY.Et[1];if(this.CY.ED[1]>Bd[3])NH=Bd[3]-this.CY.ED[1];if(!!NG||!!NH)
this.Text.Gc(A.abf(this.Text.Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];
var C5=[(B=this.Text.Dc())[2]-B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]
))NG=0;if(C5[1]<=((B=this.Text.M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Aml:function(
G){if(!this.B7)return;var A4n=this.Text.AG1(this.D6);var pos=this.Text.Aff(A4n);
this.CY.DN(A.abe(pos,[0,this.B7.Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent
]));if(this.I2.Bw){this.I2.As(false);this.I2.As(true);}if(this.LE){A.pe([this,this.
A4X],this);this.LE=false;}},AAH:function(G){if(!this.B7)return;var EH=this.Text.
AG1(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnQ(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADg(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnQ(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Aff(EH);var AaP=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EH=this.Text.AUc(A.abe(pos,[0,AaP]));}if(this.Cq.CO===5
){var pos=this.Text.Aff(EH);var AaP=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EH=this.Text.AUc(A.abf(pos,[0,AaP]));}var Vl=this.Text.AnQ(EH);var IB=this.Text.
String.charCodeAt(Vl)||0;if(((IB===0x5E)||(IB===0x7E))||(IB===0x25))Vl=Vl-1;if(Vl
!==this.D6){this.D6=Vl;A.pe([this,this.Aml],this);this.LE=true;}},Be$:function(G
){if(!this.D6)return;var IB=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
IB===0x5E)||(IB===0x7E))||(IB===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LE=true;},AAI:function(G){if(this.D6>=(this.Text.
String.length-1))return;var IB=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(IB===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LE=true;}
,Bfn:function(G){this.Text.R(A.abU(this.Text.String,Bur,this.D6));this.D6=this.D6+
1;this.LE=true;},Bfb:function(G){var IB=this.AjA.Dy;var Auo=String.fromCharCode(
IB);A.ab5("%c",IB);if((((IB===0x5E)||(IB===0x7E))||(IB===0xAD))||(IB===0x25))Auo=
Bus+String.fromCharCode(IB);this.Text.R(A.abU(this.Text.String,Auo,this.D6));this.
D6=this.D6+Auo.length;this.LE=true;},_Init:function(aArg){A.acn.Ji._Init.call(this
,aArg);A.acl.TM._Init.call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cq={I:this
},0);A.Core.BF._Init.call(this.Amy={I:this},0);A.Core.BF._Init.call(this.Sj={I:this
},0);A.Core.BF._Init.call(this.Ani={I:this},0);A.Core.BF._Init.call(this.AjA={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C7._Init.call(this.CY={
I:this},0);this.__proto__=C.Ji;var B;this.H(But);this.I2.B3=false;this.I2.Cx=true;
this.I2.Fp(500);this.I2.Ut(500);this.Cq.Filter=147;this.Cq.Bw=false;this.Amy.Filter=
151;this.Sj.Filter=44;this.Ani.Filter=149;this.AjA.Filter=145;this.Text.A1(0x3F);
this.Text.H(Buu);this.Text.Lv(true);this.Text.A4(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DD(Buv);this.CY.DN(Buw);this.CY.A__(2);this.CY.A_9(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.I2.
Q=[B=this.CY,B.Fo,B.Z];this.Cq.BG=[this,this.AAH];this.Cq.D1=[this,this.AAH];this.
Amy.BG=[this,this.Be$];this.Amy.D1=[this,this.Be$];this.Sj.BG=[this,this.AAI];this.
Sj.D1=[this,this.AAI];this.Ani.BG=[this,this.Bfn];this.Ani.D1=[this,this.Bfn];this.
AjA.BG=[this,this.Bfb];this.AjA.D1=[this,this.Bfb];this.Text.Q7([this,this.Aml]);
this.Text.S(A.aaL(A.aci.AC4));this.B7=A.aaL(A.aci.AC4);},_Done:function(){this.__proto__=
A.acn.Ji;this.I2._Done();this.Cq._Done();this.Amy._Done();this.Sj._Done();this.Ani.
_Done();this.AjA._Done();this.Text._Done();this.CY._Done();A.acn.Ji._Done.call(this
);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.I2._ReInit();this.Cq._ReInit(
);this.Amy._ReInit();this.Sj._ReInit();this.Ani._ReInit();this.AjA._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Ji._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amy)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVt={Ji:null,DF:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).Aqn();break;case 7:
A._GetAutoObject(A.Device.Device).Aql();break;case 4:A._GetAutoObject(A.Device.Device
).X5();break;case 5:A._GetAutoObject(A.Device.Device).Aqm();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A5).Fz();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Ji._Init.call(this.Ji={I:this},0);this.__proto__=C.AVt;this.H(Cf);this.
N.Z(true);this.Dq(C.AqZ);this.Ji.H(Fc);this.J(this.Ji,0);this.Ba(this.Ji);this.N.
CF=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Ji._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Ji._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Ji)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUj={WF:function(G){if((!!this.Bf&&!!this.Bf.AX)&&(this.Bf.AX.B8()>0)){A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.ACo),[this,this.Bbg]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.AHj),[this,this.A8B]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.A53),[this,this.Bbf]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TC(A.aaR(A.acf.UnlinkTransponder),[this,this.Bov]);}else{A._GetAutoObject(
C.BS).AaX(A.aaR(A.acf.ACo));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).AaX(
A.aaR(A.acf.AHj));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).AaX(A.aaR(A.
acf.A53));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6q)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fx();this.AuF(A.aaR(A.acf.A6i),[this,this.Bg2
],this.OH);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(
A.acf.A6D));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Ane
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dv(6);},Abu:function(){return C.
ACk;},Abv:function(){return C.ADB;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avr());},HQ:function(G){C.AkL.HQ.call(
this,G);this.N.Ct(null);this.N.E5(A.aaR(A.acf.A5V));if(this.AJK()){this.N.Ce=[this
,this.AIQ];this.N.JD.CZ(255);}else{this.N.Ce=null;this.N.JD.CZ(100);}this.N.C3(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OU(false);this.N.OV(false);this.N.IS.
CZ(255);},ASr:function(G){A._GetAutoObject(A.Device.Device).Dv(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiV.toFixed(),0,null);},ASs:function(G){A._GetAutoObject(A.Device.Device
).Dv(0);this.A6w(this);},ASw:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dv(0);if(!A._GetAutoObject(A.Device.Device).OX){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.Bfp]);return;}if(A._GetAutoObject(A.Device.Device
).Arh()===false){A.zX([this,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.
U8],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agg]);return;
}A.zX([this,this.Al0],[B=A._GetAutoObject(A.Device.Device).Gg,B.SJ,B.E4],0);var A4E=
!!this.OH&&!(F=this.OH,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(2,
A4E);},AJK:function(){if(!this.Bf)return false;var AtJ=this.Bf.AX;if(!AtJ)return false;
if(!AtJ.B8())return false;return true;},Al0:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gg.EN){case 0:A.z$([this,this.Al0],[B=A._GetAutoObject(A.Device.
Device).Gg,B.SJ,B.E4],0);break;case 3:{if(!!this.OH&&(F=this.OH,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S8(A._GetAutoObject(A.Device.Device).OX)===10){this.Dk(A.aaR(
A.acf.BjV));this.Bf.NU.S(A.aaL(A.fl.Bg));}else this.Dk(A.aaR(A.acf.A$o));A._GetAutoObject(
A.Device.Device).AqB();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.FD();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gg.EN);},_Init:function(aArg){C.AkL._Init.call(
this,aArg);this.__proto__=C.AUj;var B;this.Dq(C.APt);this.A_j([B=A._GetAutoObject(
A.Device.Device),B.A9l,B.BbM]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADB={PE:null,Jb:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PE={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);this.__proto__=
C.ADB;this.Es.Z(false);this.DS.Z(false);this.PE.H(Bux);this.PE.L(A.jb.Text);this.
Jb.H(Buy);this.Jb.L(A.jb.Text);this.J(this.PE,0);this.J(this.Jb,0);this.PE.Ax(A.
aaL(A.ach.AvE));this.Jb.Ax(A.aaL(A.ach.Avz));},_Done:function(){this.__proto__=C.
Dd;this.PE._Done();this.Jb._Done();C.Dd._Done.call(this);},_ReInit:function(){C.
Dd._ReInit.call(this);this.PE._ReInit();this.Jb._ReInit();},_Mark:function(D){var
B;C.Dd._Mark.call(this,D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM0={Init:function(aArg){var B;A.zX([this,this.AAM],[B=A._GetAutoObject(A.Device.
Device),B.AEM,B.AIU],0);A.pe([this,this.AAM],this);},WF:function(G){if((!!this.Bf&&
!!this.Bf.AX)&&(this.Bf.AX.B8()>0)){if(this.AJK())A._GetAutoObject(C.BS).TC(A.aaR(
A.acf.AOn),[this,this.AIQ]);else A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.AOn));A.
_GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.ACm),[this,this.
Bbg]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.AHj),[this
,this.A8B]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TC(A.aaR(A.acf.A52
),[this,this.Bbf]);}else{A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.AOn));A._GetAutoObject(
C.BS).Fx();A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.ACm));A._GetAutoObject(C.BS).Fx(
);A._GetAutoObject(C.BS).AaX(A.aaR(A.acf.AHj));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).AaX(A.aaR(A.acf.A52));}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).
Mq(A.aaR(A.acf.A6q)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();this.AuF(A.aaR(
A.acf.A6i),[this,this.Bg2],this.OH);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();A.
_GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6D));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Ane)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dv(6);},Abu:function(){return C.ACg;},Abv:function(){return C.ADz;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOJ(
));},HQ:function(G){C.AkL.HQ.call(this,G);this.N.Ct(A.aaL(A.ach.AeC));this.N.Ce=[
this,this.Adu];this.N.E5(A.jV);this.N.C3(null);this.N.CS((A.aaR(A.acf.A5V)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BhW));this.N.OU(false);this.N.OV(false);this.N.IS.
CZ(255);},ASr:function(G){A._GetAutoObject(A.Device.Device).Dv(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiV.toFixed(),0,null);},ASs:function(G){A._GetAutoObject(A.Device.Device
).Dv(0);this.A6v(this);},ASw:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dv(0);if(!A._GetAutoObject(A.Device.Device).OX){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.Bfp]);return;}if(A._GetAutoObject(A.Device.Device
).Arh()===false){A.zX([this,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.
U8],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agg]);return;
}A.zX([this,this.Al0],[B=A._GetAutoObject(A.Device.Device).Gg,B.SJ,B.E4],0);var A4E=
!!this.OH&&!(F=this.OH,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(0,
A4E);},AJK:function(){var AtJ=this.Bf.AX;if(!AtJ)return false;var O;for(O=0;O<AtJ.
B8();O++)if(A._GetAutoObject(A.Device.Helper).Aj3(AtJ.AOX(O,34))===false)return true;
return false;},Adu:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAM:function(G){if(A._GetAutoObject(A.Device.Device).Aqp===1)A.pe([this,this.
A6z],this);},Al0:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gg.EN){case 0:A.z$([this,this.Al0],[B=A._GetAutoObject(A.Device.Device).Gg,B.SJ
,B.E4],0);break;case 3:{if(!!this.OH&&(F=this.OH,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dk(A.aaR(A.acf.BhX));A._GetAutoObject(
A.Device.Device).AqB();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.FD();}break;default:;}},_Init:
function(aArg){C.AkL._Init.call(this,aArg);this.__proto__=C.AM0;var B;this.Dq(C.
AO2);this.A_j([B=A._GetAutoObject(A.Device.Device),B.A8S,B.Bbv]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AO2={DX:function(G){
C.Aeu.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).AdY(11));}
,_Init:function(aArg){C.Aeu._Init.call(this,aArg);this.__proto__=C.AO2;this.Text.
R(A.aaR(A.acf.AB$));},_ReInit:function(){C.Aeu._ReInit.call(this);this.Text.R(A.
aaR(A.acf.AB$));},_className:"Application::HeaderBirthRegistrationsList"};C.APt={
DX:function(G){C.Aeu.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).AdY(12));},_Init:function(aArg){C.Aeu._Init.call(this,aArg);this.__proto__=C.APt;
this.Text.R(A.aaR(A.acf.AGp));},_ReInit:function(){C.Aeu._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGp));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACk={Js:0,AP:null,S0:null,Pf:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S0.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(
this,Ae);this.S0.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Js));this.S0.R(A._GetAutoObject(A.acj.KQ).AC6(this.Pf));},Ch:function(Ad){if(!this.
AX)return;this.Hr=Ad;if(!!this.AX){this.Js=this.AX.KS(Ad,26);this.Pf=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S0={I:this},0);this.__proto__=C.ACk;
this.AP.H(A0t);this.AP.L(A.jb.Bb);this.S0.H(A0u);this.J(this.AP,0);this.J(this.S0
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S0.S(A.aaL(A.fl.Ak));
this.S0.AY(A.aaL(A.fl.Bg));this.S0.Cl(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.AP._Done();this.S0._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AP._ReInit();this.S0._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S0.S(A.aaL(A.fl.Ak));this.S0.AY(A.
aaL(A.fl.Bg));this.S0.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUU={
WG:null,SK:null,TT:null,HG:null,LX:null,IN:null,KK:A.jV,Ai:function(Ae){var F;C.
SW.Ai.call(this,Ae);this.TT.L(this.V.AQ);var Apq=false;if((!this.Dl||!(F=this.Dl
,F[1].call(F[0])))&&!this.A8)Apq=true;this.TT.Z(Apq);this.Px.Z(!Apq);this.VZ.Z(!
Apq);this.Q3.Z(!Apq);this.Yq.Z(!Apq);this.P9.Z(!Apq);},Adw:function(G){var B;var
F;if(!this.KK.length){C.SW.Adw.call(this,G);return;}var BP=this.FZ;var FJ=A._GetAutoObject(
A.Device.AkF).Bf1(this.KK);this.KK=A.jV;if(!FJ){A._GetAutoObject(A.Device.Device
).AZ(101,true,A.jV,0,this.SK);A.pe(this.WG,this);return;}if(this.Asm&&(FJ>A._GetAutoObject(
A.Device.Helper).Du())){A._GetAutoObject(A.Device.Device).AZ(102,true,A.jV,0,this.
SK);A.pe(this.WG,this);return;}this.Ur(((B=(FJ|0))<0)?B+0x100000000:B);if(this.FZ
!==BP){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FZ));A.abo(this.Dl,0);}if(!!this.
OM)A.pe(this.OM,this);},AAJ:function(G){if(this.KK.length<10)this.KK=this.KK+String.
fromCharCode(this.HG.Dy);},Av5:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.Adw(this);else this.IN.Mx=true;},ATw:function(E){if(A.aa0(this.WG,E))
return;this.WG=E;},ATx:function(E){if(A.aa0(this.SK,E))return;this.SK=E;},_Init:
function(aArg){C.SW._Init.call(this,aArg);A.acg.Text._Init.call(this.TT={I:this}
,0);A.Core.BF._Init.call(this.HG={I:this},0);A.Core.BF._Init.call(this.LX={I:this
},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AUU;this.TT.H(Buz
);this.TT.Je(true);this.TT.A4(0x12);this.TT.R(A.aaR(A.acf.A6d));this.HG.Filter=143;
this.LX.Filter=149;this.IN.Filter=145;this.J(this.TT,0);this.TT.S(A.aaL(A.fl.EK)
);this.HG.BG=[this,this.AAJ];this.LX.BG=[this,this.Bb7];this.IN.BG=[this,this.Av5
];},_Done:function(){this.__proto__=C.SW;this.TT._Done();this.HG._Done();this.LX.
_Done();this.IN._Done();C.SW._Done.call(this);},_ReInit:function(){C.SW._ReInit.
call(this);this.TT._ReInit();this.HG._ReInit();this.LX._ReInit();this.IN._ReInit(
);this.TT.R(A.aaR(A.acf.A6d));this.TT.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SW._Mark.call(this,D);if((B=this.WG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AUY={WG:null,SK:null,HG:null,LX:null,IN:null
,KK:A.jV,H0:function(G){var F;if(!this.KK.length){C.Rb.H0.call(this,G);return;}if(
this.Asl)return;if(!this.KK.length)this.LX.Mx=true;var BP=this.AM;var FJ=A._GetAutoObject(
A.Device.AkF).Bf2(this.KK);this.KK=A.jV;if(!FJ){if((this.KK.length<13)&&!A._GetAutoObject(
A.Device.Device).OX)A._GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,this.SK
);else A._GetAutoObject(A.Device.Device).AZ(103,true,A.jV,0,this.SK);A.pe(this.WG
,this);return;}this.Bx(FJ);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OM)A.pe(this.OM,this);},AAJ:function(G){if(
this.Asl)return;if(this.KK.length<17)this.KK=this.KK+String.fromCharCode(this.HG.
Dy);},Av5:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===0x0A))this.H0(this);
else this.IN.Mx=true;},ATw:function(E){if(A.aa0(this.WG,E))return;this.WG=E;},ATx:
function(E){if(A.aa0(this.SK,E))return;this.SK=E;},_Init:function(aArg){C.Rb._Init.
call(this,aArg);A.Core.BF._Init.call(this.HG={I:this},0);A.Core.BF._Init.call(this.
LX={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AUY;this.
Ar2(false);this.HG.Filter=143;this.LX.Filter=149;this.IN.Filter=145;this.HG.BG=[
this,this.AAJ];this.LX.BG=[this,this.Alj];this.IN.BG=[this,this.Av5];},_Done:function(
){this.__proto__=C.Rb;this.HG._Done();this.LX._Done();this.IN._Done();C.Rb._Done.
call(this);},_ReInit:function(){C.Rb._ReInit.call(this);this.HG._ReInit();this.LX.
_ReInit();this.IN._ReInit();},_Mark:function(D){var B;C.Rb._Mark.call(this,D);if((
B=this.WG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SK)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
LX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APq={AjZ:null,AjX:null,Gv:null
,Q$:null,ST:null,C7:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device),B.A9d,B.AFD],0);A.pe([this,this.DX],this);},Df:function(E){C.BR.
Df.call(this,E);this.AjZ.L(E);this.AjX.L(E);this.Q$.Zv(E);this.Gv.L(E);this.ST.Zv(
E);},WH:function(E){this.Q$.CV(E);this.ST.CV(E);},DX:function(G){this.Q$.T(A._GetAutoObject(
A.Device.Device).AvU.toFixed());A.pe([this,this.BC5],this);},BC5:function(G){var
Xv=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).Avr());this.ST.T(A._GetAutoObject(A.Device.
Device).An.B8().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(Xv);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AjZ={I:this},0);A.acg.
Ap._Init.call(this.AjX={I:this},0);A.acg.Ap._Init.call(this.Gv={I:this},0);C.D2.
_Init.call(this.Q$={I:this},0);C.D2._Init.call(this.ST={I:this},0);A.acg.C7._Init.
call(this.C7={I:this},0);this.__proto__=C.APq;this.AjZ.H(O_);this.AjX.H(BuA);this.
Gv.H(BuB);this.Gv.L(A.jb.CU);this.Q$.A1(0x14);this.Q$.H(BuC);this.Q$.Zv(A.jb.Bm);
this.Q$.CV(A.jb.Ri);this.Q$.Hn(2);this.Q$.Bmq(0x11);this.ST.A1(0x14);this.ST.H(BuD
);this.ST.Zv(A.jb.Bm);this.ST.CV(A.jb.Ri);this.ST.Hn(2);this.C7.DD(AhS);this.C7.
DN(BuE);this.C7.L(A.jb.Bb);this.J(this.AjZ,0);this.J(this.AjX,0);this.J(this.Gv,
0);this.J(this.Q$,0);this.J(this.ST,0);this.J(this.C7,0);this.AjZ.Ax(A.aaL(A.ach.
Aq5));this.AjX.Ax(A.aaL(A.ach.AP0));this.Gv.Ax(A.aaL(A.ach.Gv));this.Q$.S(A.aaL(
A.fl.Bg));this.ST.S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.AjZ._Done();this.AjX._Done();this.Gv._Done();this.Q$._Done();this.ST._Done(
);this.C7._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.AjZ._ReInit();this.AjX._ReInit();this.Gv._ReInit();this.Q$._ReInit();this.
ST._ReInit();this.C7._ReInit();this.Q$.S(A.aaL(A.fl.Bg));this.ST.S(A.aaL(A.fl.Bg
));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AjZ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ST)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.ARV={Abj:null,Aen:null,VV:null
,Init:function(aArg){this.Ba(this.Abj);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CF=[this,this.AaJ];this.BQ.Ce=null;this.BQ.Ca=[this,this.A3A];this.
BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},AAE:function(
G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null);if(Aa===this.Abj)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aen)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AII);},_Init:function(aArg){C.Fq._Init.
call(this,aArg);C.Ajh._Init.call(this.Abj={I:this},0);C.Ajh._Init.call(this.Aen={
I:this},0);C.ARZ._Init.call(this.VV={I:this},0);this.__proto__=C.ARV;var B;this.
H(Rp);this.Text.R(A.aaR(A.acf.ACe));this.Abj.H(I1);this.Abj.T(A.aaR(A.acf.AjD));
this.Aen.H(Qc);this.Aen.T(A.aaR(A.acf.AGw));this.VV.H(Aai);this.VV.T(A.aaR(A.acf.
A5N));this.J(this.Abj,0);this.J(this.Aen,0);this.J(this.VV,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abj.AR=[this,this.AAE];this.Aen.AR=[this,this.AAE];this.VV.AS$([B=
A._GetAutoObject(A.Device.Device),B.AEQ,B.AIX]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fq;this.Abj._Done();this.Aen._Done();this.VV._Done();C.Fq._Done.
call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Abj._ReInit();this.
Aen._ReInit();this.VV._ReInit();this.Text.R(A.aaR(A.acf.ACe));this.Abj.T(A.aaR(A.
acf.AjD));this.Aen.T(A.aaR(A.acf.AGw));this.VV.T(A.aaR(A.acf.A5N));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Abj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.ARU={AnimalTableFields:null,Ay:null,Y:null,JV:null,CP:function(){this.AiI(this
);},Init:function(aArg){A.zV([this,this.AiI],this.AnimalTableFields,0);A.pe([this
,this.AiI],this);},DF:function(G){C.Fq.DF.call(this,G);this.M0(this);},Lr:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3y];this.BQ.Ca=[this,this.A33];this.BQ.C3(A.aaL(A.ach.Arc));this.BQ.Ct(
A.aaL(A.ach.Aq6));this.BQ.C2(A.aaL(A.ach.YF));}return this.BQ;},Ew:function(G){this.
ABg();this.AaJ(this);},AiI:function(G){this.AoZ();var O;for(O=0;O<this.AnimalTableFields.
Ng();O=O+1){var Aar=A._GetAutoObject(C.Amq).OK(O);this.A1E(Aar);}this.J(this.JV,
0);A.aaS([this,this.M0],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(
G){var B;this.Y.VC(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},A1E:function(G$){var Azi=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.Sk,0);Aa.T(Azi.BT(G$));Aa.Aj(true);Aa.G5=G$;Aa.A_v(this.
AnimalTableFields.N3(G$));this.J(Aa,0);this.ZH(Aa);},AoZ:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdK=X;X=X.Ah;if(((AdK.U&0x400)===
0x400))this.HP(AdK);}},ABg:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JV)){var Aa=(C.Sk.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G5);if(Aa.ASI())this.AnimalTableFields.AUQ(Aa.G5);}else A.ab5("%s",Ayw);}X=X.Ah;
}this.AnimalTableFields.Cr();},A3y:function(G){var B;var Aa=(C.Sk.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAw=(C.Sk.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAw
){this.AhA(AAw,Aa);A.pe([this,this.M0],this);}}},A33:function(G){var B;var Aa=(C.
Sk.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA4=(C.Sk.isPrototypeOf(B=Aa.AI
)?B:null);if(!!AA4){this.AhA(Aa,AA4);A.pe([this,this.M0],this);}}},AqI:function(
G){var B;A._GetAutoObject(A.Device.Device).Asq(this);A.pe([this,this.AiI],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au6._Init.call(this.JV={I:this},0);
this.__proto__=C.ARU;this.H(Rp);this.Text.R(A.aaR(A.acf.AGw));this.Ay.H(Iw);this.
Y.H(Ba6);this.Y.JZ(1);this.JV.H(AId);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.A6r)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fh];
this.JV.AR=[this,this.AqI];this.AnimalTableFields=A._GetAutoObject(C.Amq);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JV._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JV._ReInit();this.Text.R(A.aaR(A.acf.AGw));this.
JV.T(A.aaR(A.acf.A6r));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ART={Y:null,B0:null,Da:null,CH:null,GP:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UT:null,Init:function(aArg){A.zX([this,this.AuM],this.B0.Q,0);A.zX([
this,this.AM5],this.CH.Q,0);A.zX([this,this.AV$],this.GP.Q,0);A.zX([this,this.Avo
],this.Da.Q,0);this.Ba(this.B0);},DF:function(G){C.Fq.DF.call(this,G);this.M0(this
);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.
AaJ];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C2(
A.aaL(A.ach.YF));}return this.BQ;},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dc(
0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(
G){var B;this.Y.VC(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuM:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AV$:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GP.Q,F[1].call(F[0])));},Avo:function(G){var F;A._GetAutoObject(
A.Device.Device).J0((F=this.Da.Q,F[1].call(F[0])));},AM5:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaW._Init.call(this.B0={
I:this},0);C.AaW._Init.call(this.Da={I:this},0);C.AaW._Init.call(this.CH={I:this
},0);C.AaW._Init.call(this.GP={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.UT={I:
this},0);this.__proto__=C.ART;var B;this.H(Rp);this.Text.R(A.aaR(A.acf.AjD));this.
Y.H(Ba6);this.Y.JZ(1);this.B0.H(AhW);this.B0.As(true);this.B0.Aj(true);this.B0.T(
A.aaR(A.acf.Aft));this.Da.H(Ayo);this.Da.As(true);this.Da.Aj(true);this.Da.T(A.aaR(
A.acf.Afo));this.CH.H(Aoi);this.CH.As(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GP.H(As_);this.GP.As(true);this.GP.Aj(true);this.GP.T(A.aaR(A.acf.Jm
));this.Ay.H(Iw);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UT.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Da,0);this.J(this.CH,0);this.J(
this.GP,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fh];this.B0.Zw(A.aaL(A.fl.H5));
this.B0.Zx(A.aaL(A.fl.H5));this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(
this.AnimalType);this.Da.Zw(A.aaL(A.fl.H5));this.Da.Zx(A.aaL(A.fl.H5));this.Da.Au([
B=this.Gender,B.B$,B.Cc]);this.Da.CK(this.Gender);this.CH.Zw(A.aaL(A.fl.H5));this.
CH.Zx(A.aaL(A.fl.H5));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CK(this.Breed
);this.GP.Zw(A.aaL(A.fl.H5));this.GP.Zx(A.aaL(A.fl.H5));this.GP.Au([B=this.UT,B.
B$,B.Cc]);this.GP.CK(this.UT);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Y._Done();this.B0._Done();this.Da._Done();this.CH._Done();this.GP._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UT._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Da._ReInit();this.CH._ReInit();this.GP.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UT._ReInit();this.Text.R(A.aaR(A.acf.AjD));this.B0.T(A.aaR(
A.acf.Aft));this.Da.T(A.aaR(A.acf.Afo));this.CH.T(A.aaR(A.acf.Breed));this.GP.T(
A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amu={CB:0,Alu:A.abi(17,0,null),OK:function(HA){return this.Alu.Get(HA);},Ng:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alu.Set(
O,0);this.CB=0;},J:function(Aam){if(this.CB>=17)A.ab5("%s",BuF);else{this.Alu.Set(
this.CB,Aam);this.CB=this.CB+1;}},Cr:function(){},Fl:function(Ah1){var AJ5=Ah1.indexOf(
String.fromCharCode(0x2C),0);var A13=A.jV;var O=0;this.CB=0;while(O<17)if(Ah1===
A.jV)O++;else{if(AJ5===-1){A13=Ah1;Ah1=A.jV;}else{A13=A.abV(Ah1,AJ5);Ah1=A.ab1(Ah1
,0,AJ5+1);}var Aar=A.abZ(A13,0,10)|0;if(this.Bka(Aar)){this.Alu.Set(this.CB,Aar);
this.CB=this.CB+1;O++;}AJ5=Ah1.indexOf(String.fromCharCode(0x2C),0);}if(Ah1!==A.
jV)A.ab5("%s",BuG);},toString:function(){var B;var AAu=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAu=AAu+Ayy;AAu=AAu+(((B=this.Alu.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAu;},Contains:function(Aam){var O;for(O=0;O<this.CB;O=O+1)if(this.Alu.
Get(O)===Aam)return true;return false;},Bka:function(Aam){return true;},_Init:function(
aArg){(this.Alu=[]).__proto__=C.Amu.Alu;this.__proto__=C.Amu;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMa={AfQ:null,Init:function(aArg){var B;A.
zX([this,this.Be6],[B=A._GetAutoObject(A.Device.Device),B.A8G,B.Bbn],0);A.zX([this
,this.Be7],[B=A._GetAutoObject(A.Device.Device),B.A8H,B.Bbo],0);A.pe([this,this.
Be6],this);A.pe([this,this.Be7],this);},Clear:function(){C.Amu.Clear.call(this);
this.AfQ.Clear();},Cr:function(){A._GetAutoObject(A.Device.Device).ArH(this.AfQ.
toString());A._GetAutoObject(A.Device.Device).ArI(this.toString());},Be6:function(
G){this.AfQ.Fl(A._GetAutoObject(A.Device.Device).ABQ);A.we(this,0);},Be7:function(
G){this.Fl(A._GetAutoObject(A.Device.Device).ABR);A.we(this,0);},N3:function(Aam
){return this.AfQ.Contains(Aam);},AUQ:function(Aam){if(!this.N3(Aam))this.AfQ.J(
Aam);},AOK:function(){return this.AfQ.Ng();},_Init:function(aArg){C.Amu._Init.call(
this,aArg);this.__proto__=C.AMa;this.AfQ=A._NewObject(C.Amu,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amu._Mark.call(this,D);if((B=this.AfQ)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amq={_Init:function(){C.AMa._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARZ={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A4(0x11);this.V.Text.Hn(10);},Bl:function(aSize){C.Ud.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mv.M[0]));},Ai:function(Ae){var B;C.Ud.
Ai.call(this,Ae);var He=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GD=this.
Bo.Bw;var FT=A.jb.Ad$;var GY=A.jb.Bm;if(this.Hl){FT=A.jb.Bm;GY=A.jb.Text;}if(!He
){this.Background.L(FT);this.V.L(A.jb.CJ);}else if(GD){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FT);this.V.L(GY);}this.LM=He;this.KL=Fu;this.Qv=GD;},_Init:function(
aArg){C.Ud._Init.call(this,aArg);this.__proto__=C.ARZ;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMY={YV:null,Ak6:null,Lr:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaJ];this.BQ.Ce=null;
this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C2(A.aaL(A.ach.YF));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaW._Init.call(this.
YV={I:this},0);C.AEm._Init.call(this.Ak6={I:this},0);this.__proto__=C.AMY;var B;
this.H(K2);this.YV.H(K2);this.YV.T(A.aaR(A.acf.Display));this.Ak6.Au(A._GetAutoObject(
A.Device.Device).Aqp);this.J(this.YV,0);this.YV.Zw(A.aaL(A.fl.H5));this.YV.Zx(A.
aaL(A.fl.H5));this.YV.Au([B=this.Ak6,B.B$,B.Cc]);this.YV.CK(this.Ak6);this.Ak6.BnF([
B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIU]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YV._Done();this.Ak6._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YV._ReInit();this.Ak6._ReInit(
);this.YV.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEm={AbQ:null,ListViewScopeToString:null,Dt:function(){return 2;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},DZ:function(A9){return A9;},H7:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbQ)(F=this.AbQ,F[2].call(F[0],E));},BnF:function(E
){if(A.aaZ(this.AbQ,E))return;if(!!this.AbQ)A.z$([this,this.A39],this.AbQ,0);this.
AbQ=E;if(!!this.AbQ)A.zX([this,this.A39],this.AbQ,0);A.pe([this,this.A39],this);
},A39:function(G){var F;if(!!this.AbQ)this.Q=(F=this.AbQ,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEm;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AG8={
ACr:0,ACq:0,Ai:function(Ae){C.O2.Ai.call(this,Ae);this.Background.L(this.ACq);this.
V.L(this.ACr);},A98:function(E){if(this.ACr===E)return;this.ACr=E;this.Am();},Bmw:
function(E){if(this.ACq===E)return;this.ACq=E;this.Am();},_Init:function(aArg){C.
O2._Init.call(this,aArg);this.__proto__=C.AG8;this.As(false);this.ACr=A.jb.Text;
this.ACq=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHt={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeA],[B=A._GetAutoObject(A.Device.
Device),B.A9e,B.BbG],0);A.pe([this,this.BeA],this);},Dt:function(){return 3;},Gm:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C6(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwR(E);},BeA:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OR;A.abo([this,this.B$,this.
Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHt;this.
BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUW={UH:null,A$1:A.jV,Init:function(aArg){},Bl:function(aSize){C.BX.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UH.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BX.Ai.call(this,Ae);this.UH.L(this.
V.AQ);},Bn_:function(E){if(this.A$1===E)return;this.A$1=E;this.UH.R(E);},_Init:function(
aArg){C.BX._Init.call(this,aArg);C.CG._Init.call(this.UH={I:this},0);this.__proto__=
C.AUW;this.H(AcO);this.UH.H(BuH);this.J(this.UH,0);this.UH.S(A.aaL(A.fl.Af));this.
UH.AY(A.aaL(A.fl.Ak));this.UH.Cl(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BX;this.UH._Done();C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(
this);this.UH._ReInit();this.UH.S(A.aaL(A.fl.Af));this.UH.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BX._Mark.call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wo={ABU:null,MassDeregistrationCriterionToString:
null,Dt:function(){return 2;},Gm:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A9=this.C6(aIndex);var M8=this.MassDeregistrationCriterionToString.
BT(this.C6(aIndex));if(!!this.ABU&&!A9)M8=A._GetAutoObject(A.Device.Helper).MO(M8
,Pa,(F=this.ABU,F[1].call(F[0])).toFixed());return M8;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wo;this.BI.Set(
0,0);this.BI.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANS={Vo:null,Wo:null,Za:null,JW:null
,At_:0,AaY:100,Init:function(aArg){this.Ba(this.Za);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCC=((A.aaR(A.acf.Aqx)+A.aaR(A.acf.Colon))+CR)+this.At_.toFixed();this.
JW.Bn_(BCC);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABG],this.JW.Q
,0);A.pe([this,this.ABG],this);},E3:function(G){C.Ej.E3.call(this,G);A.z$([this,
this.ABG],this.JW.Q,0);},DK:function(G){var F;C.Ej.DK.call(this,G);this.N.E5(A.jV
);this.N.Ce=null;if((this.AV===this.JW)&&!!this.JW.Q){this.N.Ca=[this,this.Bfk];
switch((F=this.JW.Q,F[1].call(F[0]))){case 1:if(!this.At_)this.N.GW.CZ(100);else
this.N.GW.CZ(255);break;case 0:{this.N.E5(A.aaR(A.acf.Bir));this.N.Ce=[this,this.
Bzk];if(this.AaY<=1)this.N.GW.CZ(100);else this.N.GW.CZ(255);this.N.CS(A.aaR(A.acf.
Bis));this.N.Ca=[this,this.BAh];if(this.AaY>=2147483647)this.N.GW.CZ(100);else this.
N.GW.CZ(255);this.N.WQ=true;}break;default:throw new Error(BuI+(F=this.JW.Q,F[1].
call(F[0])).toFixed());}this.JW.Ab2(this.N.Ca);}},Bfk:function(G){if(this.At_>0)
A._GetAutoObject(A.Device.Device).AZ(108,true,this.At_.toFixed(),0,[this,this.BAP
]);},ABG:function(G){var F;this.At_=A._GetAutoObject(A.Device.Helper).Bjy((F=this.
JW.Q,F[1].call(F[0])),this.AaY);this.Am();A.pe([this,this.MT],this);},Bfe:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B8()){A._GetAutoObject(A.Device.
Device).AZ(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arh(
)===false){this.Vo=[this,this.Bfe];A.zX([this,this.XJ],[B=A._GetAutoObject(A.Device.
Device),B.Uo,B.U8],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agg]);return;}A.zX([this,this.Al0],[B=A._GetAutoObject(A.Device.Device).Gg,
B.SJ,B.E4],0);A._GetAutoObject(A.Device.Device).Asp(1,false);},Agg:function(G){var
B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U8],0);this.
Vo=null;}},XJ:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z3===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agg]);A.z$([this
,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U8],0);if(!!this.Vo)A.pe(this.
Vo,this);this.Vo=null;}},BAP:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCx],this);},BCx:function(
G){A._GetAutoObject(A.Device.Helper).ByM(this.Wo.Q,this.AaY);A._GetAutoObject(A.
Device.Device).AZ(109,true,this.At_.toFixed(),0,null);A.pe([this,this.MT],this);
A.pe([this,this.ABG],this);},Al0:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gg.EN){case 0:A.z$([this,this.Al0],[B=A._GetAutoObject(A.Device.Device).
Gg,B.SJ,B.E4],0);break;case 3:A._GetAutoObject(A.Device.Device).AqB();break;case
4:{A._GetAutoObject(A.Device.Device).AZ(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gg.FD();}break;default:;}},BAh:function(G){if(this.AaY<2147483647
)this.AS6(this.AaY+1);},Bzk:function(G){if(this.AaY>1)this.AS6(this.AaY-1);},AS6:
function(E){if(this.AaY===E)return;this.AaY=E;A.pe([this,this.ABG],this);this.JW.
Am();},Bk8:function(){return this.AaY;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wo._Init.call(this.Wo={I:this},0);C.Co._Init.call(this.Za={I:this},0);C.
AUW._Init.call(this.JW={I:this},0);this.__proto__=C.ANS;var B;this.Dq(C.AO4);this.
Za.H(I1);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.A6L));this.Za.Bh(false);this.JW.
H(Ba4);this.JW.Aj(true);this.JW.T(A.aaR(A.acf.Baj));this.JW.Bh(true);this.JW.A_Z(
A.aaR(A.acf.Ok));this.J(this.Za,0);this.J(this.JW,0);this.Wo.ABU=[this,this.Bk8,
this.AS6];this.Za.AR=[this,this.Bfe];this.JW.AR=[this,this.Bfk];this.JW.Ab2(this.
N.Ca);this.JW.Au([B=this.Wo,B.B$,B.Cc]);this.JW.CK(this.Wo);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wo._Done();this.Za._Done();this.JW._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wo._ReInit(
);this.Za._ReInit();this.JW._ReInit();this.Za.T(A.aaR(A.acf.A6L));this.JW.T(A.aaR(
A.acf.Baj));this.JW.A_Z(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wo).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO4={_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO4;this.
Text.R(A.aaR(A.acf.AdT));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdT));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANV={
Vo:null,Y$:null,AbU:null,Init:function(aArg){this.Ba(this.Y$);A.pe([this,this.MT
],this);},Bfd:function(G){var B;var AAe=A._GetAutoObject(A.Device.Device).AD_();
switch(AAe){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AZ(91,true,U3,0,[this,this.Bfx]);break;
case 2:{this.Vo=[this,this.Bfd];A.zX([this,this.XJ],[B=A._GetAutoObject(A.Device.
Device),B.Uo,B.U8],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agg]);}break;default:throw new Error(Ba7+AAe.toFixed());}},Agg:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U8],0);this.
Vo=null;}},XJ:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z3===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agg]);A.z$([this
,this.XJ],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U8],0);if(!!this.Vo)A.pe(this.
Vo,this);this.Vo=null;}},Bfz:function(G){var B;var AAe=A._GetAutoObject(A.Device.
Device).AD$();switch(AAe){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AZ(95,true,A.jV,0,[this
,this.BAQ]);break;case 2:{this.Vo=[this,this.Bfz];A.zX([this,this.XJ],[B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U8],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV
,0,[this,this.Agg]);}break;case 3:A._GetAutoObject(A.Device.Device).AZ(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AZ(93,true,A.jV,0,null
);break;default:throw new Error(Ba7+AAe.toFixed());}},Bfx:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.Bzo],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
Bzq],this);break;default:throw new Error(BuJ+Ar.Id.toFixed());}},Bzo:function(G){
if(A._GetAutoObject(A.Device.Device).ACA()){var A3l=A._GetAutoObject(A.Device.Device
).An.QL();A._GetAutoObject(A.Device.Device).AZ(80,true,A3l.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AZ(82,true,A.jV,0,null);A.aaS([this,this.BAL],
this);},Bzq:function(G){if(A._GetAutoObject(A.Device.Device).AGA()){var A3l=A._GetAutoObject(
A.Device.Device).An.QL();A._GetAutoObject(A.Device.Device).AZ(81,true,A3l.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AZ(83,true,A.jV,0,null);A.aaS([
this,this.BBr],this);},BAQ:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCy],this);},BCy:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,true,U3,0,[this,this.Bfx]);},BBr:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,false,A.jV,0,null);},BAL:function(G){
A._GetAutoObject(A.Device.Device).AZ(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Y$={I:this},0);C.Co._Init.call(
this.AbU={I:this},0);this.__proto__=C.ANV;this.Dq(C.AO7);this.Y$.H(I1);this.Y$.Aj(
true);this.Y$.T(A.aaR(A.acf.ACA));this.Y$.Bh(false);this.AbU.H(Qc);this.AbU.Aj(true
);this.AbU.T(A.aaR(A.acf.AGA));this.AbU.Bh(true);this.J(this.Y$,-1);this.J(this.
AbU,-1);this.Y$.AR=[this,this.Bfd];this.AbU.AR=[this,this.Bfz];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Y$._Done();this.AbU._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Y$._ReInit();this.AbU.
_ReInit();this.Y$.T(A.aaR(A.acf.ACA));this.AbU.T(A.aaR(A.acf.AGA));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vo)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO7={
_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO7;this.Text.R(
A.aaR(A.acf.ACG));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACG));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Mo={L2:null
,AUp:0,AEb:false,AD9:false,AEc:false,Age:function(G){this.A6u(this);},ATs:function(
E){if(this.L2===E)return;this.L2=E;if(!this.L2)return;this.DQ.AutoActions=E;A.zV([
this,this.BgB],this.L2,0);A.zV([this,this.Aow],this.L2,0);A.pe([this,this.BgB],this
);A.pe([this,this.Aow],this);},AMb:function(){this.AMd(A.aaR(A.acf.Bar),[this,this.
BCO],[this,this.A8_,this.AFu]);this.AMd(A.aaR(A.acf.AGq),[this,this.BCM],[this,this.
A87,this.AFs]);this.AMd(A.aaR(A.acf.AnZ),[this,this.BCN],[this,this.A88,this.AFt
]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BoG)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fx();},AMd:function(Bxf,Byo,BxJ){if(!this.L2
)return;this.AuF(Bxf,Byo,BxJ);},BCO:function(G){this.AFu(!this.AEc);},BCM:function(
G){this.AFs(!this.AD9);},BCN:function(G){this.AFt(!this.AEb);},A4z:function(Eh,BxI
){if(!this.L2)return;if(BxI)this.L2.Bhx(Eh);else this.L2.BoZ(Eh);this.L2.Cr();},
A5g:function(Aic,Aid,ByH){A._GetAutoObject(C.BS).ABS(Aic,Aid,[this,this.A9p,this.
ATF],ByH);},AGM:function(Eh){if(!this.L2)return;this.L2.AGM(Eh);this.L2.Cr();},AFu:
function(E){if(this.AEc===E)return;this.AEc=E;this.A4z(256,E);A.abo([this,this.A8_
,this.AFu],0);},AFs:function(E){if(this.AD9===E)return;this.AD9=E;this.A4z(2,E);
A.abo([this,this.A87,this.AFs],0);},AFt:function(E){if(this.AEb===E)return;this.
AEb=E;this.A4z(1,E);A.abo([this,this.A88,this.AFt],0);},BgB:function(G){this.AFu(
this.L2.Contains(256));this.AFs(this.L2.Contains(2));this.AFt(this.L2.Contains(1
));if(this.L2.Ng()>0)this.ATF(this.L2.ADe());},ATF:function(E){if(this.AUp===E)return;
this.AUp=E;A.abo([this,this.A9p,this.ATF],0);},A8_:function(){return this.AEc;},
A87:function(){return this.AD9;},A88:function(){return this.AEb;},A9p:function(){
return this.AUp;},_Init:function(aArg){C.GI._Init.call(this,aArg);this.__proto__=
C.Mo;},_Mark:function(D){var B;C.GI._Mark.call(this,D);if((B=this.L2)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvT={Q:null,Cr:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AD7:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hf:function(G){var F;if(!!this.Q)this.Fl((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hf],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hf],E,
0);if(!!E)A.pe([this,this.Hf],this);},AGM:function(Eh){if(this.Ng()>0)this.Axv(this.
Ng()-1,Eh);},Bhx:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AIf);return;}var Az9=0;for(;(Az9<=this.Ng())&&(this.OK(Az9)<Eh);Az9++);var ABl=
this.Ng()-1;this.J(this.OK(ABl));for(;ABl>Az9;ABl--)this.Axv(ABl,this.OK(ABl-1));
this.Axv(Az9,Eh);},BoZ:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Ng()-1);index++)this.Axv(index,this.OK(index+1));this.Axv(index,0);this.
CB--;},ADe:function(){var Tl=0;if(this.Ng()>0)Tl=this.OK(this.Ng()-1);return Tl;
},_Init:function(aArg){C.VB._Init.call(this,aArg);this.__proto__=C.AvT;},_Mark:function(
D){var B;C.VB._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av3={_Init:function(){C.AvT.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9i,B.BbK
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av4={
_Init:function(){C.AvT._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9j,B.BbL]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax3={_Init:function(){C.AvT._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9R,B.Bb0]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADD={QV:null,AjT:null,_Init:function(aArg){C.Dd._Init.
call(this,aArg);C.CG._Init.call(this.QV={I:this},0);A.acg.Ap._Init.call(this.AjT={
I:this},0);this.__proto__=C.ADD;this.Es.H(BuK);this.DS.H(BuL);this.QV.H(BuM);this.
QV.R(A.aaR(A.acf.Uj));this.QV.A4(0x11);this.QV.L(A.jb.Text);this.AjT.H(A0q);this.
AjT.L(A.jb.Text);this.J(this.QV,0);this.J(this.AjT,0);this.QV.S(A.aaL(A.fl.Af));
this.QV.AY(A.aaL(A.fl.Ak));this.QV.Cl(A.aaL(A.fl.Bg));this.AjT.Ax(A.aaL(A.ach.Avy
));},_Done:function(){this.__proto__=C.Dd;this.QV._Done();this.AjT._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.QV._ReInit();
this.AjT._ReInit();this.QV.R(A.aaR(A.acf.Uj));this.QV.S(A.aaL(A.fl.Af));this.QV.
AY(A.aaL(A.fl.Ak));this.QV.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.Dd._Mark.
call(this,D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACj={
AP:null,S2:null,O3:null,AKx:A.jV,BeJ:A.jV,Mn:0,Init:function(aArg){},Bl:function(
aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O3.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O3.M[2]-1,0,this.O3.M[2]+1,aSize[1]]);this.
S2.H([this.O3.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);
this.O3.L(this.V.AQ);this.S2.L(this.V.AQ);this.T(this.AKx);this.O3.R(this.BeJ);this.
S2.R(this.Mn.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Hr=Ad;if(!!this.
AX){var Js=this.AX.KS(Ad,26);var A3d=A._GetAutoObject(A.Device.Converter).Rj(Js);
this.AKx=A.abV(A3d,A3d.length-5);this.BeJ=A.ab2(A3d,5);if((A._GetAutoObject(A.Device.
Converter).S8(Js)===10)&&!(Math.trunc(Js/10000000000)%100))this.AKx=A.ab1(this.AKx
,3,2);this.Mn=this.AX.CE(Ad,1);this.Am();}},_Init:function(aArg){C.A$._Init.call(
this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S2={I:this
},0);C.CG._Init.call(this.O3={I:this},0);this.__proto__=C.ACj;this.V.H(BuN);this.
AP.H(A0t);this.AP.L(A.jb.Bb);this.S2.H(A0u);this.O3.H(BuO);this.J(this.AP,0);this.
J(this.S2,0);this.J(this.O3,0);this.V.S(A.aaL(A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg)
);this.S2.S(A.aaL(A.fl.Ak));this.S2.AY(A.aaL(A.fl.Bg));this.S2.Cl(A.aaL(A.fl.Bg)
);this.O3.S(A.aaL(A.fl.Af));this.O3.AY(A.aaL(A.fl.Bg));this.O3.Cl(A.aaL(A.fl.Bg)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.S2.
_Done();this.O3._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.S2._ReInit();this.O3._ReInit();this.V.S(A.aaL(
A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg));this.S2.S(A.aaL(A.fl.Ak));this.S2.AY(A.aaL(A.
fl.Bg));this.S2.Cl(A.aaL(A.fl.Bg));this.O3.S(A.aaL(A.fl.Af));this.O3.AY(A.aaL(A.
fl.Bg));this.O3.Cl(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APx={Q:null,Init:function(aArg){var B;this.ABa(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr]);},AEZ:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nw(FilterCriterion);var Ai2=this.Awe();if((Ai2.length>
0)&&(Ai2!==U3)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai2,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeX(false);},ABa:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,
0);if(!!E)A.pe([this,this.C4],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATl(A.jV);return;}var Ay$=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(26,4))?B:null);if(!Ay$){this.AW.ATl(
U3);this.AW.AeX(true);}else this.AW.ATl(Ay$.A6);},_Init:function(aArg){C.AjP._Init.
call(this,aArg);this.__proto__=C.APx;this.AW.AwK(0);this.AW.Bnr(true);this.AW.Dj=[
this,this.AEZ];this.Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVI={FB:null,C$:null,Dm:null,EL:null,AsO:null,Init:function(aArg){var B;A.zX([
this,this.BfG],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0O],0);A.zX([this,this.
Adv],[B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.zX([this,this.Adv],[B=
A._GetAutoObject(A.Device.Device),B.Un,B.U6],0);A.pe([this,this.BfG],this);A.pe([
this,this.Adv],this);},BfG:function(G){var AaQ=false;switch(A._GetAutoObject(A.Device.
Device).An4){case 0:AaQ=false;break;case 3:AaQ=true;break;default:throw new Error(
BuP+A._GetAutoObject(A.Device.Device).An4.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.C$,AaQ);A._GetAutoObject(A.Device.Helper).J6(this.Dm,AaQ);A._GetAutoObject(
A.Device.Helper).J6(this.EL,AaQ);},Adv:function(G){var F,Cu;if(((F=this.C$.Q,F[1
].call(F[0]))+(Cu=this.Dm.Q,Cu[1].call(Cu[0])))>12)(Cu=this.Dm.Q,Cu[2].call(Cu[0
],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BX._Init.call(this.FB={I:this},0);C.Iu._Init.call(this.C$={I:this},0);C.
Iu._Init.call(this.Dm={I:this},0);C.AvX._Init.call(this.EL={I:this},0);C.AVH._Init.
call(this.AsO={I:this},0);this.__proto__=C.AVI;var B;this.Jf(A.aaR(A.acf.UnlinkTransponder
));this.FB.H(U2);this.FB.Aj(true);this.FB.Z(true);this.FB.T(A.aaR(A.acf.Aqg));this.
FB.Bh(true);this.C$.H(Alf);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.
AqD));this.C$.Bh(false);this.C$.Gb(2);this.C$.EV(6);this.C$.IW(A.aaR(A.acf.OI));
this.C$.Jg(A.aaR(A.acf.Ez));this.Dm.H(AhZ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.
Zo));this.Dm.Bh(true);this.Dm.Gb(0);this.Dm.EV(12);this.Dm.IW(A.aaR(A.acf.OI));this.
Dm.Jg(A.aaR(A.acf.Ez));this.EL.H(Aok);this.EL.As(true);this.EL.Aj(true);this.EL.
Bh(false);this.EL.Ar1(A.aaR(A.acf.Aqi));this.J(this.FB,0);this.J(this.C$,0);this.
J(this.Dm,0);this.J(this.EL,0);this.FB.Au([B=this.AsO,B.B$,B.Cc]);this.FB.CK(this.
AsO);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.Dm.Au([B=A.
_GetAutoObject(A.Device.Device),B.Un,B.U6]);this.EL.DC(A.aaL(A.ach.AjU));this.EL.
OS([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.EL.PW([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U6]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FB._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.AsO._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FB._ReInit(
);this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit();this.AsO._ReInit();this.
Jf(A.aaR(A.acf.UnlinkTransponder));this.FB.T(A.aaR(A.acf.Aqg));this.C$.T(A.aaR(A.
acf.AqD));this.C$.IW(A.aaR(A.acf.OI));this.C$.Jg(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(
A.acf.Zo));this.Dm.IW(A.aaR(A.acf.OI));this.Dm.Jg(A.aaR(A.acf.Ez));this.EL.Ar1(A.
aaR(A.acf.Aqi));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FB).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVH={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg_],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0O],0);A.pe([
this,this.Bg_],this);},Dt:function(){return 2;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axa(E);},Bg_:function(G){this.Q=A._GetAutoObject(A.Device.Device).An4;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVH;this.BI.Set(0,0);this.BI.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMM.__proto__=A.Core.Root;C.AB.__proto__=C.Abl;C.WS.__proto__=
A.Core.P;C.OF.__proto__=A.Core.P;C.ZE.__proto__=A.acl.Gn;C.Ek.__proto__=A.Core.P;
C.X6.__proto__=C.AB;C.AU_.__proto__=C.AB;C.Avx.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fm.__proto__=C.Hi;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.AqZ.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADv.__proto__=C.AmY;C.AG4.
__proto__=C.DR;C.Co.__proto__=C.O2;C.Dr.__proto__=C.Eg;C.Iu.__proto__=C.Dr;C.BX.
__proto__=C.Dr;C.SW.__proto__=C.Dr;C.OP.__proto__=C.Cm;C.Rf.__proto__=C.AC;C.AVn.
__proto__=C.A$;C.Gd.__proto__=A.Core.P;C.A$.__proto__=C.Co;C.GI.__proto__=C.AB;C.
ACi.__proto__=C.A$;C.Ad9.__proto__=C.AB;C.Mu.__proto__=C.OF;C.AVi.__proto__=C.AB;
C.AqY.__proto__=C.ADv;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUZ.__proto__=C.Acp;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asu.__proto__=A.Core.P;C.AGQ.__proto__=C.Dr;C.CG.__proto__=A.Core.P;C.
AjO.__proto__=C.Yz;C.Amt.__proto__=C.Re;C.Ahx.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AT$.__proto__=C.AB;C.My.__proto__=C.Co;C.Ang.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abl;C.APN.__proto__=C.OverlayMenu;C.GJ.__proto__=A.Core.P;C.Abl.__proto__=
A.Core.P;C.AU4.__proto__=A.acl.Ael;C.AmY.__proto__=C.BR;C.ADw.__proto__=C.AmY;C.
Kp.__proto__=C.AC;C.AU1.__proto__=C.Dr;C.AGr.__proto__=C.AB;C.H2.__proto__=C.AB;
C.Wz.__proto__=C.Art;C.IP.__proto__=C.ADw;C.I_.__proto__=C.AB;C.AMk.__proto__=C.
AGr;C.AMg.__proto__=C.GI;C.ANA.__proto__=C.GI;C.Aep.__proto__=C.Co;C.QF.__proto__=
C.Aep;C.APA.__proto__=C.BR;C.AjP.__proto__=C.BR;C.DG.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Ge.__proto__=C.AC;C.Afn.__proto__=C.BX;C.AUq.__proto__=C.AB;C.AbV.__proto__=
C.Co;C.Ud.__proto__=C.Co;C.ANM.__proto__=C.Cg;C.AVp.__proto__=C.Cg;C.ANZ.__proto__=
C.Cg;C.AUC.__proto__=C.Cg;C.W7.__proto__=A.Core.P;C.QY.__proto__=C.Fm;C.D2.__proto__=
A.Core.P;C.T$.__proto__=C.AB;C.AV0.__proto__=C.GI;C.AMl.__proto__=C.Ax1;C.AVK.__proto__=
C.Cg;C.AeP.__proto__=C.AC;C.Ax1.__proto__=C.AB;C.AV9.__proto__=C.Cg;C.AU0.__proto__=
C.Acp;C.ABO.__proto__=A.Graphics.Hz;C.Aqc.__proto__=C.AB;C.ARQ.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.AaW.__proto__=C.BX;C.Ajh.__proto__=C.Co;C.AL4.__proto__=
C.Fq;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL_.__proto__=C.VB;C.AL$.
__proto__=C.Fq;C.Sk.__proto__=C.Ud;C.AMR.__proto__=C.VB;C.Wq.__proto__=C.Fm;C.Vy.
__proto__=A.Core.P;C.KB.__proto__=A.Core.P;C.ASc.__proto__=C.H2;C.AUt.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANB.__proto__=C.Amt;C.Hi.__proto__=A.
Core.P;C.AV2.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa6.
__proto__=C.Ge;C.AxT.__proto__=C.ABO;C.AT6.__proto__=C.OverlayMenu;C.AOE.__proto__=
A.Core.P;C.N9.__proto__=A.Core.P;C.AT7.__proto__=A.Core.P;C.AU3.__proto__=A.acl.
Ael;C.AkR.__proto__=C.Iu;C.Amv.__proto__=C.OverlayMenu;C.ACl.__proto__=C.A$;C.YA.
__proto__=C.AjP;C.AqH.__proto__=C.H2;C.Aco.__proto__=C.Dr;C.WeightRecordingScope.
__proto__=C.AC;C.AuK.__proto__=C.AB;C.AU2.__proto__=C.Iu;C.AMi.__proto__=C.AB;C.
Art.__proto__=C.H2;C.AHo.__proto__=A.Core.P;C.AV5.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeR.__proto__=C.Eg;C.AvY.__proto__=C.AeR;C.SetTransponderScreen.__proto__=
C.Ra;C.ADE.__proto__=C.EB;C.AHs.__proto__=C.A$;C.WeightListScreen.__proto__=C.AB;
C.Mp.__proto__=C.Ra;C.AL2.__proto__=C.Mp;C.ManualActionScanScreen.__proto__=C.Mp;
C.AL3.__proto__=A.Core.P;C.APE.__proto__=C.Dd;C.ADC.__proto__=C.Dd;C.TZ.__proto__=
C.Dd;C.APG.__proto__=C.Dd;C.ANf.__proto__=C.A$;C.Nb.__proto__=C.A$;C.ANd.__proto__=
C.A$;C.Jw.__proto__=A.Core.P;C.ANc.__proto__=C.A$;C.AmX.__proto__=C.TL;C.AGh.__proto__=
C.Axl;C.AkD.__proto__=C.Axl;C.ZD.__proto__=C.AkD;C.ANI.__proto__=C.O2;C.O2.__proto__=
C.Hi;C.APJ.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.AM$.__proto__=C.Ajz;C.ADy.__proto__=
C.T0;C.Ko.__proto__=A.Core.P;C.AmF.__proto__=C.My;C.AO1.__proto__=C.Ku;C.AutoRegistrationMode.
__proto__=C.AC;C.APK.__proto__=C.EB;C.TF.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMw.__proto__=C.R3;C.AMK.__proto__=C.Aa3;C.AMF.__proto__=C.Aa3;C.AUs.__proto__=
C.A$;C.API.__proto__=C.EB;C.AMz.__proto__=C.Aa3;C.IK.__proto__=C.I9;C.RX.__proto__=
C.Fy;C.R1.__proto__=C.Fy;C.TE.__proto__=C.JQ;C.QD.__proto__=C.Fy;C.TD.__proto__=
C.JQ;C.AMh.__proto__=C.Aqc;C.ARb.__proto__=C.Cg;C.Aa3.__proto__=C.D9;C.Kn.__proto__=
C.Cm;C.ARM.__proto__=C.Cg;C.AMu.__proto__=C.Ld;C.AMv.__proto__=C.D9;C.AMs.__proto__=
C.Ld;C.AMt.__proto__=C.Ld;C.WU.__proto__=C.Eg;C.AUX.__proto__=C.WU;C.R2.__proto__=
C.Fy;C.APz.__proto__=C.IP;C.ANC.__proto__=C.AB;C.ANj.__proto__=C.Ad9;C.AMf.__proto__=
C.I_;C.AVZ.__proto__=C.I_;C.AO3.__proto__=C.Ku;C.APB.__proto__=C.Ku;C.APF.__proto__=
C.T0;C.ANe.__proto__=C.Ajz;C.T0.__proto__=C.Dd;C.Aqs.__proto__=A.acv.ACv;C.Ajz.__proto__=
C.A$;C.DR.__proto__=A.Core.P;C.AM2.__proto__=C.DR;C.O7.__proto__=C.DR;C.AqW.__proto__=
A.Core.P;C.AMB.__proto__=C.Gd;C.AUw.__proto__=A.Core.P;C.Ld.__proto__=C.D9;C.ANJ.
__proto__=C.Cg;C.Au6.__proto__=C.Co;C.ADs.__proto__=C.BR;C.ADt.__proto__=C.BR;C.
Fy.__proto__=C.JQ;C.AOH.__proto__=C.GI;C.AOG.__proto__=C.I_;C.APf.__proto__=C.Ku;
C.ADA.__proto__=C.Dd;C.ACh.__proto__=C.A$;C.AUr.__proto__=C.Ahx;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASo.
__proto__=C.Mo;C.ASn.__proto__=C.I_;C.ADu.__proto__=C.Ku;C.AB1.__proto__=C.Ge;C.
AL7.__proto__=C.Fq;C.AMj.__proto__=C.AuK;C.NewAnimalSetTransponderScreen.__proto__=
C.Asz;C.C8.__proto__=C.AC;C.O6.__proto__=A.Core.P;C.RY.__proto__=C.Fy;C.RZ.__proto__=
C.Fy;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARX.__proto__=C.OverlayMenu;
C.VV.__proto__=C.Ud;C.AvX.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TF;
C.AnimalMultiInfoScreen.__proto__=C.TF;C.AMy.__proto__=C.OverlayMenu;C.Jc.__proto__=
A.Core.P;C.AL6.__proto__=C.GI;C.AL5.__proto__=C.I_;C.APy.__proto__=C.IP;C.AsJ.__proto__=
C.O6;C.Arb.__proto__=C.O6;C.Au2.__proto__=C.AC;C.AMq.__proto__=C.AC;C.AGP.__proto__=
C.Eg;C.G4.__proto__=A.Core.P;C.ARe.__proto__=C.HL;C.AVP.__proto__=C.X6;C.AR_.__proto__=
C.Wz;C.AD3.__proto__=C.Lk;C.HL.__proto__=C.G4;C.Lk.__proto__=C.G4;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvN.__proto__=C.HL;C.AUV.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asz;C.ReasonOfLeaving.__proto__=C.AC;C.OZ.__proto__=C.BX;C.AeU.__proto__=
C.El;C.AR3.__proto__=C.El;C.AR2.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rb.__proto__=
C.Eg;C.ARf.__proto__=C.Lk;C.AvM.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FA.
__proto__=C.AB;C.AOg.__proto__=C.AB;C.AOj.__proto__=C.FA;C.AOk.__proto__=C.FA;C.
AqK.__proto__=C.FA;C.Abw.__proto__=C.AjO;C.Ku.__proto__=C.AjO;C.Avv.__proto__=C.
Abw;C.APd.__proto__=C.Abw;C.APc.__proto__=C.Abw;C.APb.__proto__=C.BR;C.Aex.__proto__=
C.EB;C.AmN.__proto__=C.A$;C.Ajp.__proto__=C.IK;C.ACV.__proto__=A.Core.P;C.AkO.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVo.__proto__=C.Re;C.APe.__proto__=C.BR;C.Dd.__proto__=
C.EB;C.Kt.__proto__=C.BR;C.AO9.__proto__=C.Kt;C.AO$.__proto__=C.Kt;C.Yt.__proto__=
C.AmN;C.Agw.__proto__=C.Hi;C.AN5.__proto__=C.GI;C.AN4.__proto__=C.I_;C.APa.__proto__=
C.Ku;C.Abs.__proto__=C.Aco;C.AjG.__proto__=C.QF;C.ACb.__proto__=C.QF;C.APD.__proto__=
C.Dd;C.ANb.__proto__=C.A$;C.R0.__proto__=C.Fy;C.AMr.__proto__=C.Fy;C.ANX.__proto__=
C.Ej;C.ANY.__proto__=C.Ej;C.AO_.__proto__=C.Kt;C.Np.__proto__=C.AbV;C.ANT.__proto__=
C.Ej;C.AO5.__proto__=C.Kt;C.PT.__proto__=C.Co;C.Sl.__proto__=C.AB;C.AOh.__proto__=
C.Sl;C.AOi.__proto__=C.Sl;C.AOl.__proto__=C.AqK;C.AOe.__proto__=C.FA;C.Aa2.__proto__=
C.IK;C.Pq.__proto__=C.IK;C.AMD.__proto__=C.Amv;C.ARK.__proto__=C.T$;C.ARJ.__proto__=
C.T$;C.ASj.__proto__=C.Mo;C.ASi.__proto__=C.I_;C.APs.__proto__=C.Ku;C.AkL.__proto__=
C.GI;C.AUD.__proto__=C.I_;C.Aeu.__proto__=C.Yz;C.ACg.__proto__=C.A$;C.ADz.__proto__=
C.Dd;C.APu.__proto__=C.BR;C.Aa5.__proto__=C.NP;C.XY.__proto__=C.NP;C.R3.__proto__=
C.D9;C.XZ.__proto__=C.R3;C.XW.__proto__=C.IJ;C.Aa0.__proto__=C.IJ;C.XV.__proto__=
C.IJ;C.AaZ.__proto__=C.IJ;C.AMA.__proto__=C.AB;C.IJ.__proto__=C.I9;C.I9.__proto__=
C.Hi;C.NP.__proto__=C.Fy;C.Axk.__proto__=C.ZD;C.ANH.__proto__=C.AmF;C.Axm.__proto__=
C.ZD;C.AUh.__proto__=C.Cg;C.AUf.__proto__=C.El;C.ARc.__proto__=C.Lk;C.AUg.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.AR$.__proto__=C.H2;C.AMC.__proto__=C.Amv;C.AMS.__proto__=
C.VB;C.JQ.__proto__=C.I9;C.APw.__proto__=C.YA;C.Abr.__proto__=C.Cm;C.APH.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mp;C.APv.__proto__=C.AqY;C.Jl.__proto__=A.Core.
P;C.APr.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN6.__proto__=C.AqH;
C.UT.__proto__=C.Cm;C.UU.__proto__=C.UT;C.AcJ.__proto__=C.UT;C.AdU.__proto__=C.AC;
C.AGO.__proto__=C.Eg;C.ANW.__proto__=C.Ej;C.AO8.__proto__=C.Kt;C.ANU.__proto__=C.
Ej;C.AO6.__proto__=C.Kt;C.Aq0.__proto__=C.TZ;C.APC.__proto__=C.TZ;C.Aqt.__proto__=
C.Nb;C.ANa.__proto__=C.Nb;C.AR4.__proto__=C.AeU;C.Yz.__proto__=C.BR;C.Acp.__proto__=
C.BX;C.FM.__proto__=C.AC;C.AMG.__proto__=C.FM;C.AMH.__proto__=C.FM;C.AMn.__proto__=
C.I_;C.TL.__proto__=C.BX;C.ASb.__proto__=C.AB;C.Asz.__proto__=C.SetTransponderScreen;
C.AD4.__proto__=C.HL;C.AsA.__proto__=C.OZ;C.Axx.__proto__=C.OZ;C.Acr.__proto__=C.
Cm;C.AWd.__proto__=C.Mo;C.AWc.__proto__=C.I_;C.ARg.__proto__=A.Core.P;C.ARd.__proto__=
C.HL;C.AC0.__proto__=C.Abs;C.L3.__proto__=A.Core.P;C.AUB.__proto__=C.Cg;C.AUA.__proto__=
C.Cg;C.AVF.__proto__=C.Cg;C.Afs.__proto__=C.Cm;C.Ji.__proto__=A.acn.Ji;C.AVt.__proto__=
C.AB;C.AUj.__proto__=C.AkL;C.ADB.__proto__=C.Dd;C.AM0.__proto__=C.AkL;C.AO2.__proto__=
C.Aeu;C.APt.__proto__=C.Aeu;C.ACk.__proto__=C.A$;C.AUU.__proto__=C.SW;C.AUY.__proto__=
C.Rb;C.APq.__proto__=C.BR;C.ARV.__proto__=C.Fq;C.ARU.__proto__=C.Fq;C.ART.__proto__=
C.Fq;C.AMa.__proto__=C.Amu;C.ARZ.__proto__=C.Ud;C.AMY.__proto__=C.OverlayMenu;C.
AEm.__proto__=C.AC;C.AG8.__proto__=C.O2;C.AHt.__proto__=C.Cm;C.AUW.__proto__=C.BX;
C.Wo.__proto__=C.Cm;C.ANS.__proto__=C.Ej;C.AO4.__proto__=C.Kt;C.ANV.__proto__=C.
Ej;C.AO7.__proto__=C.Kt;C.Mo.__proto__=C.GI;C.AvT.__proto__=C.VB;C.ADD.__proto__=
C.Dd;C.ACj.__proto__=C.A$;C.APx.__proto__=C.AjP;C.AVI.__proto__=C.Cg;C.AVH.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxB._this))B._ReInit(),C.AxB._ReInit.call(
B);if((B=C.AxC._this))B._ReInit(),C.AxC._ReInit.call(B);if((B=C.A5._this))B._ReInit(
),C.A5._ReInit.call(B);if((B=C.Pp._this))B._ReInit(),C.Pp._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afh._this
))B._ReInit(),C.Afh._ReInit.call(B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(
B);if((B=C.WM._this))B._ReInit(),C.WM._ReInit.call(B);if((B=C.AsB._this))B._ReInit(
),C.AsB._ReInit.call(B);if((B=C.AnU._this))B._ReInit(),C.AnU._ReInit.call(B);if((
B=C.DQ._this))B._ReInit(),C.DQ._ReInit.call(B);if((B=C.AuR._this))B._ReInit(),C.
AuR._ReInit.call(B);if((B=C.Amq._this))B._ReInit(),C.Amq._ReInit.call(B);if((B=C.
Av3._this))B._ReInit(),C.Av3._ReInit.call(B);if((B=C.Av4._this))B._ReInit(),C.Av4.
_ReInit.call(B);if((B=C.Ax3._this))B._ReInit(),C.Ax3._ReInit.call(B);};C.DI=function(
D){var B;if((B=C.AxB._this)&&(B._cycle!=D))B._Done(C.AxB._this=null);if((B=C.AxC.
_this)&&(B._cycle!=D))B._Done(C.AxC._this=null);if((B=C.A5._this)&&(B._cycle!=D)
)B._Done(C.A5._this=null);if((B=C.Pp._this)&&(B._cycle!=D))B._Done(C.Pp._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afh._this)&&(B._cycle!=D))B._Done(C.Afh._this=null);if((B=C.BS._this)&&(B._cycle
!=D))B._Done(C.BS._this=null);if((B=C.WM._this)&&(B._cycle!=D))B._Done(C.WM._this=
null);if((B=C.AsB._this)&&(B._cycle!=D))B._Done(C.AsB._this=null);if((B=C.AnU._this
)&&(B._cycle!=D))B._Done(C.AnU._this=null);if((B=C.DQ._this)&&(B._cycle!=D))B._Done(
C.DQ._this=null);if((B=C.AuR._this)&&(B._cycle!=D))B._Done(C.AuR._this=null);if((
B=C.Amq._this)&&(B._cycle!=D))B._Done(C.Amq._this=null);if((B=C.Av3._this)&&(B._cycle
!=D))B._Done(C.Av3._this=null);if((B=C.Av4._this)&&(B._cycle!=D))B._Done(C.Av4._this=
null);if((B=C.Ax3._this)&&(B._cycle!=D))B._Done(C.Ax3._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */