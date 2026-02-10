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
var Cg=[0,0,240,320];var BD=[0,0,240,40];var E6=[0,0,20,30];var Hr=[6,21,14,25];var
I0=[6,15,14,19];var Iv=[6,9,14,13];var O8=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CR=" ";var Fc=[0,40,240,280];var LA=[0,40,232,280];var Qa=[
0,40,116,160];var J_=[114,40,230,160];var Oh=[0,160,116,280];var Qb=[116,160,232
,280];var MR=[0,280,116,400];var Tg=[116,280,232,400];var UX=[0,400,116,520];var
Aaa=[116,400,232,520];var Xc=[-1,520,115,640];var Iw=[232,40,240,280];var UY=[5,
40,235,120];var Aab=[120,140,210,230];var UZ=[20,140,110,230];var Aac=[0,0,116,120
];var Xd=[0,0,120,120];var Aad=[0,0,116,45];var Aae=[0,0,8,200];var U0=[0,0,8,20
];var Xe=[30,0,210,40];var O9=[0,0,40,40];var Aaf=[7,8,200,40];var Oi=[0,0,200,40
];var Rn=[6,1];var Xf="ERROR: Invalid value for ItemHighlighting";var Xg=[10,10,
40,30];var U1=[0,0,120,40];var Xh=[60,0,180,40];var Aag=[120,0,240,40];var Xi=[0
,0,100,40];var U2=[83,0,157,40];var Xj=[140,0,240,40];var Xk=[0,0,20,40];var Xl=[
220,0,240,40];var Ro=[0,0,300,30];var Th=[0,30,300,60];var Aah=[0,60,300,90];var
AfC=[0,90,300,120];var Aai=[0,100,300,110];var Xm=[0,50,300,60];var Aaj=[0,30,300
,40];var Aak="*";var AhT=[40,40];var K2=[0,0,240,80];var Aal=[0,0,240,50];var LB=
"Cap";var AhU=[0,40,40,80];var Ak9=[200,40,240,80];var Oj=[30,40,210,80];var Xn=
"--";var Aoe="%d";var AfD="%m";var AhV="%Y";var AcP=" (";var Aam=[0,0,232,80];var
Ax9="Date";var Ax_=[48,40,88,78];var Ax$=[39,40,79,80];var Aya=[80,44,87,77];var
Ak_=".";var AsZ=[88,44,120,77];var Ayb=[120,44,127,77];var Ayc=[127,44,191,77];var
O_=[0,0,80,40];var Rp="Text";var Ayd=[430,102,430,102];var U3=[0,0,240,240];var As0=[
232,0,240,240];var Aye=[0,10,240,240];var Ayf="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ak$=[0,80,240,280];var
Ayg="Unhandled option";var AfE="Unhandled animal list action";var Aof="Animal list content not handled.";
var I1=[0,40,240,80];var Aog="Set Selected";var As1=" %%";var AcQ=[0,180,240,220
];var As2=[82,127,167,150];var As3="Group";var As4=[77,91,167,124];var Aoh=[0,0,
90,33];var As5=[4,4,18,29];var Ala=[20,4,34,29];var Ayh=[36,4,50,29];var Ayi=[52
,4,66,29];var Ayj=[68,4,82,29];var As6="ERROR: Unhandled Device::SyncState";var Ayk=
":\n";var O$="{1}";var Ayl="{2}";var AWi=[0,49,240,109];var AWj=[0,170,240,243];
var AWk=[0,110,240,170];var AWl=[20,243,220,268];var AHx=[30,8];var AHy="\u2265 ";
var AfF=[0,0,240,160];var Aoi=[0,0,0,0];var AWm=[0,0,240,66];var AHz=[10,0,76,66
];var Alb=[33,33];var AHA=[87,0,153,66];var AHB=[164,0,230,66];var AWn="No statistics available";
var AWo="in this environment.";var AHC=" fps";var AWp="CPU: - %%";var AcR=[0,0,240
,120];var AWq=[130,0,237,20];var AWr=[20,0,120,20];var AWs=[0,20,240,40];var AWt=[
40,20,100,40];var As7=[100,20,240,40];var AHD=[0,40,240,60];var AHE=[40,40,100,60
];var Aym=[100,40,240,60];var AHF=[0,60,50,80];var Ayn=[100,60,240,80];var AWu=[
0,80,50,100];var AWv=[100,80,240,100];var AWw=[0,100,50,120];var AWx=[100,100,240
,120];var AHG=[5,5,15,15];var AWy="%H";var MS="%M";var Ayo="Time";var AWz=[79,40
,119,78];var AWA=[125,40,164,80];var AWB=[86,40,126,80];var AWC=":";var AWD=[75,
40,115,80];var AHH=[0,0,240,150];var AWE=[60,0,155,40];var Ayp=[30,0,65,40];var AWF=[
60,0,100,40];var As8=[88,0,128,40];var Ayq=[60,0,71,40];var AWG=[60,0,74,40];var
AHI=[90,0,123,40];var AWH=[120,0,161,40];var AHJ=[120,0,165,40];var AHK=[60,0,88
,40];var AHL=[60,0,95,40];var AWI="Did not expect iterator bigger than number of records";
var AHM=[20,0,240,20];var AWJ=[0,38,240,40];var AWK=[0,0,8,4];var Rq=[0,0,240,280
];var U4=[0,280,240,320];var AWL="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWM="]";var AWN="ERROR: Cannot find closing bracket \'}\' in text [";var AWO=
"] opened at index ";var AWP="#";var AWQ="ERROR: Invalid parameter: {";var AWR="}";
var AhW=[20,20];var AHN=[0,12];var AWS="ERROR: Not expected Application::FooterFocus, ";
var AWT="%M:%S";var AHO=[30,150,207,170];var AHP=[20,70,217,194];var Ayr="Unhandled item.";
var Qc=[0,80,240,120];var AWU="Unhandled Overlay Menu ";var AWV="Invalid bootloader message: ";
var AWW="Unknown USBState: ";var As9="Invalid fader";var AWX=[2,4,32,40];var AWY=[
29,4,80,40];var AWZ=[120,4,200,40];var AW0=[80,0,114,40];var AW1="-1";var AW2="< ";
var As_=[0,0,232,40];var AW3=[22,40,180,80];var AW4=[2,40,22,80];var AW5=[23,40,
163,80];var AW6=[210,40,230,80];var AW7=[164,40,210,80];var AW8=[169,43,205,77];
var AW9="ERROR: No outlet assigned";var AW_="Unhandled screen";var AW$="ERROR: Cannot cache null screen.";
var AXa="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHQ="Untreated Rating Method type!";var Alc="Unhandled animal type";var AXb=[
5,60,235,140];var AXc=[0,130,240,196];var AXd=[49,240,229,280];var Ays="Implement in derived classes!";
var Ald="Implement in derived class";var Ale=[0,40,230,120];var Ayt=[0,120,230,200
];var Aoj=[0,200,230,280];var AhX=[0,280,230,360];var AXe=[0,360,230,440];var Ayu=[
230,40,238,280];var AHR="WARNING: Unhandled filter field: ";var AfG="Should not happen.";
var AHS="Invalid Boolean item";var Aan=[0,120,240,160];var Alf=[0,160,240,200];var
Aok=[0,200,240,240];var AXf=[1152,11,1392,51];var AXg=[1152,51,1392,91];var AXh=[
1152,91,1392,131];var AXi=[1152,131,1392,171];var AXj=[1152,171,1392,211];var As$=[
0,240,240,280];var AHT=[10,0,240,40];var AHU=[190,0,230,40];var AXk=[60,3,95,39];
var AXl=[95,4,200,40];var AXm=[3,3];var AXn=[6,6];var AXo=[59,5,197,35];var AXp=[
59,2,200,38];var AXq=[3,2,43,42];var AXr=[0,17,43,40];var AXs=[50,40];var AXt=[50
,0];var AXu="Illegal shifting direction";var Ayv=[0,0,160,30];var AHV=[0,0,25,30
];var AHW=[27,0,52,30];var AHX=[54,0,79,30];var AHY=[81,0,106,30];var AHZ=[108,0
,133,30];var AH0=[135,0,160,30];var AXv="Internal queue error";var AXw="ERROR: No corresponding Id ";
var AXx=" found.";var AXy="ERROR: Error in range test";var AXz=[120,67,210,157];
var AXA=[0,40,240,70];var AXB=[20,67,110,157];var Ayw=[0,160,240,280];var AH1=[20
,77,90,147];var AXC=[0,0,210,40];var AH2=[195,0,235,40];var AhY=[0,40,232,120];var
U5=[0,120,232,200];var AXD=[0,40,232,200];var Aao=[0,200,232,280];var AXE=[0,320
,240,400];var AXF=[0,120,53,200];var Alg=[0,280,232,360];var AfH="%%";var AhZ=[0
,360,232,440];var Aol=[0,440,232,520];var Ayx=[0,80,207,120];var Pa=")";var AXG=
"/";var AH3=[5,0,88,30];var AH4=[88,0,240,30];var AXH="276000312345678";var Ayy=[
5,30,100,60];var AH5=[100,30,240,60];var AXI="Manufacturer";var AXJ="Country";var
AXK=[5,60,240,90];var AXL="Niedersachsen";var AXM=[5,90,145,120];var AXN=[140,90
,240,120];var AXO="Protocol";var AXP=[0,0,120,100];var AH6=[0,40,116,120];var AXQ=[
40,80,92,107];var AH7=[0,0,50,23];var AH8="ERROR: Unhandled Device::MeasureState";
var Ayz=[0,120,240,280];var AXR=[178,159,248,203];var AXS=[10,145,170,225];var AXT=[
0,61,240,101];var AXU=[0,0,40,23];var AXV=[101,113,141,136];var AXW=[101,235,141
,258];var AXX=[69,288,101,313];var AXY=[0,40,240,200];var Aom=[0,200,240,280];var
Ata=[0,280,240,360];var AH9="\u2264 ";var AXZ=[0,80,94,160];var AX0=[94,80,184,160
];var AX1=[184,80,240,160];var AX2=[197,105,231,139];var AX3=[105,101,173,127];var
AX4=[7,101,75,127];var AH_=[94,125,184,151];var AX5=[2,125,92,151];var AX6=[0,70
,240,101];var AX7=[0,106,240,280];var AX8=[30,40,240,70];var AX9=[0,40,30,70];var
AX_="\u278B";var AX$=[0,0,240,175];var AYa=[0,0,232,175];var AH$=[232,0,240,175];
var AYb="Text Here !";var AYc=[200,0,240,40];var AIa="1";var AIb="2";var AIc="3";
var AId="4";var AyA=[0,360,232,400];var AyB="ERROR: invalid item class.";var AIe=[
10,220,250,260];var AIf=[185,0,225,40];var AIg="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AyC="ERROR: Received more actions than expected!";var AyD=", ";var AYd=
"ERROR: Cannot set action at position=";var AYe=". Current elements:";var AYf=", max elements:";
var AYg="17";var AYh=[0,0,58,58];var AYi=[0,0,60,60];var AYj=[30,0,58,20];var AYk=[
7,6,25,24];var AYl=[30,60,130,160];var AYm=[0,0,28,20];var AYn=[4,3,40,24];var AYo=[
0,0,42,27];var AyE=[0,0,17,17];var AYp="Unknown direction of counting enum value: ";
var AYq="Unknown id generation method enum value: ";var AyF="Invalid animal id generation method: ";
var Atb="Unhandled popup id";var U6="0";var Atc=";";var AYr=[0,400,230,480];var AYs=[
5,120,235,200];var AYt=[0,640,230,760];var AIh=[0,0,300,200];var AYu=[20,40,220,
80];var AIi=[20,80,220,280];var AYv=[140,0,188,40];var AYw="ERROR: Row containing birth weight could not be loaded";
var AYx=[0,440,230,520];var Atd="ID";var AYy=[40,40,198,70];var AYz="Extra info: ";
var AIj=" -";var AYA=[0,0,230,120];var AYB=[0,0,230,40];var AYC=[0,80,230,120];var
AYD="\xB0Brix";var AcS=[0,320,230,400];var AYE=[0,410,230,490];var AYF="ERROR: aNumberOfDays can not be < 0 ";
var AYG="{WEIGHTGAIN} ";var AYH="\xB1";var AIk="+";var AYI="{WEIGHTGAIN}";var AYJ=
"{DAYS}";var AYK="ERROR: aString can not be null";var AYL=[166,70,240,114];var AYM=[
0,60,160,120];var AYN=[30,0,240,60];var AIl=[1,6,29,54];var AYO=[30,60,240,120];
var AYP="Con";var AYQ=[70,50,170,70];var AIm="Unhandled Device::NaisIdValidationResult: ";
var AIn="Unhandled PopupId";var AYR=[110,123,230,248];var AYS=[5,0,250,40];var AYT=[
102,0,186,40];var AYU=[153,0,240,40];var Rr="-";var Ate=[170,0,240,40];var AIo=[
220,0,320,30];var AIp=[200,20,300,50];var Aon=[180,0,180,40];var Aoo=[170,0,170,
40];var AyG="Untreated state";var AYV="ERROR: Animal id scanned in an unexpected state : ";
var AIq="ERROR: Null animal id scanned.";var AYW=[40,40,235,100];var AYX=[120,100
,210,190];var AYY=[20,100,110,190];var AYZ=[0,40,40,100];var AY0="\u278A";var AY1=
"Action untreated";var AY2="ERROR: No corresponding ";var AY3=" action found!";var
AY4="Unhandled action: ";var AY5=[0,186,240,216];var AY6=[0,220,232,280];var AY7=[
5,190,235,270];var AY8=[232,60];var AY9=[0,2];var AY_=[58,58];var AY$="A";var AZa=[
56,0,156,40];var Aop=[156,0,240,40];var AIr=" 7 ";var AZb=[40,0,156,40];var AIs=
"/-1/-2";var AIt=[72,0,144,40];var AcT="\n";var AIu="(";var AZc=[72,0,156,40];var
AIv="%y/%m";var AZd=[70,0,240,40];var AyH=[70,0,120,40];var AZe=[160,0,245,40];var
AZf="- ";var AyI=" - ";var AZg="{parc}{clr3}";var AZh="{clr0}/^{clr2}";var AZi="{clr0}/^{clr1}";
var AIw=[0,0,85,40];var Aoq="?";var AIx=[0,0,120,140];var AZj=[0,0,116,40];var AIy=[
15,0,100,40];var AIz=[110,0,200,40];var Alh=[0,0,34,34];var AZk=[129,0,157,40];var
Aor=[0,0,25,25];var AZl="\u2611";var AIA="\u2610";var AIB=[5,0,72,40];var AZm=[150
,0,240,40];var AZn=[72,0,139,40];var AIC="Unvalid content class: ";var AZo=[0,320
,240,360];var AZp=[0,360,240,400];var AZq=[144,0,170,40];var AZr=[187,0,213,40];
var AZs=[207,10,233,50];var AZt=[247,20,273,60];var AZu=[140,0,150,100];var AZv=[
165,0,175,100];var AZw=[185,0,195,100];var AZx=[205,0,215,100];var AZy=[211,0,233
,40];var AZz=[189,0,211,40];var AZA=[167,0,189,40];var AZB=[145,0,167,40];var AID=[
5,0,240,40];var Xo=[10,0,10,40];var AZC="= \u2211 ";var Atf=[125,0,240,40];var AZD=[
130,0,170,40];var AZE="\xD8 ";var AZF=[100,10,116,36];var AZG=[117,10,133,36];var
AZH=[135,10,151,36];var AZI="Implement in derieved class";var Atg=[0,80,240,240];
var Ath=[0,120,232,160];var Ati=[0,160,232,200];var Atj=[0,200,232,240];var AyJ=[
0,240,232,280];var Aos=[0,320,232,360];var AZJ=[-61,360,232,400];var AZK=[0,400,
32,440];var AZL=[0,100];var AZM=[0,40,240,240];var AZN=[0,50000];var AZO=[0,500];
var AZP=[0,0,240,105];var AZQ=[0,105,240,210];var AIE=[0,40,240,81];var AZR=[0,81
,240,122];var AZS=[0,122,240,163];var AZT=[0,163,240,205];var AZU=[0,205,240,240
];var AZV=[0,200];var AZW=[0,40,240,73];var AyK=[0,0,30,40];var AZX=[0,40,30,80];
var Atk=[60,40];var Ali=[60,0];var AZY=[10,0,40,40];var AZZ=[0,190,240,260];var AZ0=[
0,130,240,190];var AIF=[40,40,200,130];var AZ1=[90,230,170,253];var AZ2=[80,190,
170,223];var AZ3=[0,130,240,180];var AZ4=[0,250,240,280];var AZ5=[129,0,156,40];
var AZ6=[72,0,100,40];var AZ7=[100,0,129,40];var AZ8=[78,8,103,33];var AIG=[0,0,
300,120];var AZ9=[1,-1];var AZ_=[20,40,240,120];var AZ$=[20,0,240,40];var AIH=[0
,118,240,120];var A0a=[0,20,130,40];var AII=[130,20,240,40];var A0b=[0,0,10,20];
var AIJ="\u2191";var AIK=[230,0,240,20];var Atl=[0,40,232,80];var A0c=[0,80,232,
160];var A0d=[0,160,230,240];var Atm=" p. p.";var AyL="Unknown animal type";var AyM=[
80,0,140,40];var A0e=[50,0,172,40];var A0f=[172,0,240,40];var A0g=[0,90,240,92];
var AIL="Unhandled menu item";var AIM=[0,0,50,30];var Alj=[0,0,30,30];var A0h="No AnimalActionTemperatureScreen found!";
var A0i="840003123456789";var A0j=[40,0,230,40];var A0k=[50,10,230,30];var AyN="No AnimalMultiInfoScreen found!";
var Atn=[0,0,25,40];var AIN="/^";var AIO="?/?";var Bru=[100,4,180,40];var Brv=[65
,0,99,40];var Brw=[165,0,200,40];var BaO=[0,0,60,40];var BaP="9999/^9999";var Brx=
"Invalid index: ";var Bry="Unknown AnimalIdGenerationMethod: ";var Brz="Invalid gender: ";
var Ato="Invalid input state: ";var BrA="Unhandled AnimalIdGenerationMethod";var
BrB=[42,35,67,75];var BrC=[5,35,39,75];var BrD=[70,40,228,70];var BrE="Invalid direction for setting focus";
var Ah0="Invalid index";var BrF="Unvalid direction";var BrG=[0,0,42,30];var BaQ=[
22,0,42,30];var BrH=[20,0,40,30];var BrI=[0,0,158,30];var BaR=[32,0,62,30];var BaS=[
64,0,94,30];var BaT=[96,0,126,30];var BrJ=[128,0,158,30];var BrK=" %% ";var BrL=[
0,70,240,220];var BrM=[0,237,240,307];var BaU="\n44 %% done";var BrN=[0,0,166,30
];var AIP=[0,0,12,30];var AyO=[14,0,26,30];var A0l=[28,0,40,30];var A0m=[42,0,54
,30];var A0n=[56,0,68,30];var A0o=[70,0,82,30];var A0p=[84,0,96,30];var A0q=[98,
0,110,30];var BaV=[112,0,124,30];var A0r=[126,0,138,30];var BrO=[140,0,152,30];var
BrP=[154,0,166,30];var BaW=[20,0,46,30];var BrQ="\u2642";var BrR="{fnt3}\u2642{fnt1}";
var BrS="\u2640";var BrT="{fnt3}\u2640{fnt1}";var BrU="{parc}";var BrV=[30,30,210
,80];var BrW="Implement in derieved class!";var BrX=[60,4,226,34];var BaX=[30,4,
58,34];var BaY=[4,0,27,40];var BrY=[116,4,228,34];var BrZ=[60,4,86,34];var Br0=[
88,4,114,34];var Aot="Implement in derived class!";var BaZ="Implement in derived class.";
var Br1="Invalid nais id view: ";var Br2=[0,35,240,75];var Br3=[0,0,110,30];var Br4=[
0,0,26,30];var Br5="100";var A0s="\n\n";var Br6=[240,240];var Br7=[0,240];var Br8=
"Unknown rated attribute: ";var Br9=[120,80,240,280];var Br_=[0,80,120,280];var AIQ=
" %% (";var AyP=" \xB1 ";var AyQ=" (n = ";var A0t=[0,80,232,120];var Br$=[0,242,
232,282];var A0u=[0,280,232,320];var Bsa=[35,0,200,40];var Bsb=[1,0,31,40];var Bsc=[
32,40];var Bsd=[32,0];var Bse=[3,0,83,40];var Ba0=[180,0,240,40];var Bsf=[120,0,
180,40];var Bsg=[65,0,125,40];var Bsh=[0,0,120,200];var Bsi=[0,40,120,150];var Ba1=[
15,160,60,190];var Ba2=[60,160,105,190];var Bsj=[0,65,240,135];var Bsk=[10,112,170
,192];var Bsl=[178,129,248,173];var Bsm=[0,40,240,110];var Bsn=[10,98,170,178];var
Bso=[178,112,248,156];var Bsp=[85,190,160,265];var Bsq=[89,194,155,260];var Bsr=[
26,190,111,250];var Bss=[125,181,225,211];var Bst=[100,220,183,250];var Bsu="38.7";
var Bsv=[180,220,225,250];var Bsw="\xB0C";var Bsx=[0,99,240,178];var Bsy=[100,280
,140,320];var Bsz=[0,26,240,105];var Ba3=[30,40];var Ba4=[30,0];var BsA=[149,0,200
,40];var BsB=[145,40];var BsC=[145,0];var BsD=[38,0,88,40];var A0v=[0,0,35,40];var
BsE=[0,0,50,40];var BsF=[40,0,200,40];var BsG=[95,0,145,40];var BsH=[65,5,223,35
];var A0w=[0,0,15,40];var BsI=[72,0,140,40];var Ba5="\n(";var BsJ="%y/%m/%d";var
BsK="%y ";var BsL=" %m ";var BsM=" %d ";var BsN="20";var BsO=[225,0,240,40];var BsP=[
0,400,232,440];var BsQ=[0,440,232,480];var BsR=[0,480,232,520];var BsS=[0,520,232
,560];var BsT=[0,560,232,600];var BsU=[0,598,232,638];var BsV=[5,0,215,40];var BsW=[
215,8,240,33];var BsX="Implement in dervied class.";var BsY="ERROR: Unhandled temperature unit: ";
var AIR="ERROR: Unhandled mass unit: ";var BsZ=[-1,160,115,280];var Bs0=[114,160
,230,280];var A0x=[116,40,232,160];var AyR="Unknown weight class index: ";var Bs1=
"< 35";var Bs2="35 - 40";var Bs3="40 - 45";var Bs4="45 - 50";var Bs5="\u2265 50";
var Bs6="< 80";var Bs7="80 - 90";var Bs8="90 - 100";var Bs9="100 - 110";var Bs_=
"\u2265 110";var Ba6="Unknown mass unit";var Bs$=[143,0,193,40];var Ba7=[192,0,240
,40];var Bta=[44,28,44,28];var Btb="0 %%";var Btc=[-1,40,115,160];var Btd=[117,40
,233,160];var Bte=[1,160,117,280];var Btf=[114,158,230,278];var Btg=[1,280,117,400
];var Bth=[30,0,155,40];var Ba8="\u2620";var A0y=[380,150,380,190];var Ba9=[105,
0,155,50];var A0z=[190,1,240,41];var Bti=[72,0,108,40];var Btj=[108,0,180,40];var
Btk=[60,0,94,40];var Btl=[94,0,200,40];var Btm="Scroll direction not supported.";
var Btn=[44,0,207,40];var Bto=[207,0,240,40];var Btp="99";var Btq="Unknown birth type";
var Btr=[44,0,189,40];var Bts=[5,0,44,40];var Btt=[44,0,240,40];var Btu=[240,0,240
,40];var Btv="\u25C9";var Ba_="\u25CB";var AyS=[0,40,240,120];var A0A=[0,120,240
,200];var Btw=[75,4,215,34];var Btx=[47,4,73,34];var Ba$=[17,4,45,34];var Bty=[0
,0,138,30];var Btz=[47,4,215,34];var A0B="Unhandled MotherSelectionFilterMode: ";
var BtA="Read only!";var BtB="actions array too small to hold all actions";var BtC=[
120,40];var BtD=[120,0];var BtE=[5,0,115,40];var BtF=[0,0,205,40];var BtG=[59,4,
170,34];var BtH=[59,1,173,37];var BtI=[175,1,205,37];var BtJ=[0,0,37,40];var BtK=[
115,98,205,188];var BtL=[0,40,235,100];var BtM=[2,200,240,280];var BtN=" 01234";
var BtO=[0,0];var BtP=[33,63];var BtQ=[25,56];var BtR="Unknown transponder image type: ";
var AIS=[0,0,82,82];var BtS=[0,0,81,26];var BtT=[105,120,195,210];var BtU=[10,140
,100,230];var Bba="Unhandled EartagNrAssignmentMode: ";var BtV="Unhandled Gender";
var BtW=[10,35,35,75];var BtX=[44,40,202,70];var BtY=[204,35,232,75];var BtZ="Unvalid FatoryResetScope";
var Bt0=[144,0,192,40];var Bt1=[144,0,240,40];var Bt2=[195,0,245,50];var Bt3=[120
,0,120,40];var Bt4=[140,0,240,30];var Bt5=[30,0,232,40];var Bt6=[60,0,160,40];var
Bt7=[160,0,200,40];var Bt8=[150,17,200,40];var Bt9=[155,40];var Bt_=[155,0];var Bt$=[
146,80,240,160];var Bua=[56,80,146,160];var Bub=[0,80,56,160];var Buc=[13,107,47
,141];var Bud=[74,109,104,139];var Bue=[50,100,130,150];var Buf=[55,112,145,140];
var Bug=[146,112,236,140];var Buh=[150,86,223,110];var Bui="Menu item for animal table field not found";
var Bbb=[0,360,240,440];var Buj=[0,440,240,520];var Buk=[5,40,235,104];var Bul=[
120,108,226,218];var Bum=[20,120,110,210];var Bun=[5,223,235,280];var Buo=[0,0,64
,30];var Bup=[44,0,64,30];var Buq=[185,5,225,35];var Bur=[170,5,234,35];var Bbc=[
0,80,240,200];var Bus="Error!";var But="Unhandled number of digits";var Buu=[0,0
,126,30];var Buv=[22,5,149,35];var Buw=[149,0,232,40];var Bbd=[5,20];var Bux=[5,
0];var Buy="Unhandled AnimalIdAutoGenerationMethod: ";var Buz=[4,440,236,520];var
BuA="Unhandled TransponderAssignmentIdChangeMethod: ";var BuB="\n";var BuC="%";var
BuD=[0,0,160,120];var BuE=[2,2,157,117];var BuF=[50,70];var BuG=[50,50];var BuH=[
0,0,168,40];var BuI=[168,0,240,40];var BuJ=[0,47,232,77];var BuK=[65,0,101,40];var
BuL=[135,0,175,40];var BuM=[85,17,135,40];var BuN=[125,17,175,40];var BuO=[40,0];
var Bbe=[0,40,230,280];var BuP="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuQ="ERROR: Received more animal table fields than expected!";
var BuR=[0,80,240,130];var BuS="Unhandled Device::MassDeregistrationCriterion: ";
var Bbf="Unhandled BackupError: ";var BuT="Unhandled PopupId: ";var BuU=[203,0,240
,40];var BuV=[168,0,203,40];var BuW=[35,0,152,40];var BuX=[0,0,84,40];var BuY=[84
,0,167,40];var BuZ="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMP={Device:null,A6A:null,GL:null,Init:function(aArg){},DriveCursorHitting:function(
Tj,BH,Fe){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GL._Init.call(this.
GL={I:this},0);this.__proto__=C.AMP;this.H(Cg);this.J(this.GL,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6A=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J$=
this._variants();if(J$){this.K={};J$._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GL._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GL.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6A)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GL)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5G._variants();
},K:null,_className:"Application::Application"};C.Asy=[240,320];C.AB={Background:
null,El:null,ADp:null,An7:0,Init:function(aArg){A.pe([this,this.A0_],this);A.pe([
this,this.Bfv],this);},LU:function(G){},A0_:function(s){this.LU(s);},CC:function(
G){},AIU:function(s){this.CC(s);},E3:function(G){},AyT:function(s){this.E3(s);},
Ds:function(E){if(this.ADp===E)return;this.ADp=E;A.pe([this,this.Bfv],this);},Bfv:
function(G){var B;if(!!this.ADp)this.El.Ab8((C.BR.isPrototypeOf(B=A._NewObject(this.
ADp,0))?B:null));else this.El.Ab8(null);},_Init:function(aArg){C.Abp._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.El._Init.call(this.
El={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cg
);this.Background.L(A.jb.CV);this.El.H(BD);this.El.As(false);this.J(this.Background
,-1);this.J(this.El,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abp;this.
Background._Done();this.El._Done();C.Abp._Done.call(this);},_ReInit:function(){C.
Abp._ReInit.call(this);this.Background._ReInit();this.El._ReInit();},_Mark:function(
D){var B;C.Abp._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WV={Im:null,Zv:function(E){var B;if(this.Im===E)return;if(!!this.Im)this.AqF(
this.Im,null,null,null,[B=this.Im,B.AyT],null,false);this.Im=E;if(!!this.Im)this.
AkI(this.Im,null,null,null,null,null,null,[B=this.Im,B.AIU],null,false);},AEL:function(
){return this.Im;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WV;this.H([0,0,C.Asy[0],C.Asy[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OF={Vc:null,Q:null,AnL:null,ZI:null,NY:null,OD:null,TK:null,TL:null,AGp:255,
Hg:function(G){var F;if(!!this.Q){this.A2H();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gm);this.OD.L((this.OD.AQ&0x00FFFFFF
)|(this.AlL(Ada,0,30)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlL(Ada,31,60
)<<24));this.TL.L((this.TL.AQ&0x00FFFFFF)|(this.AlL(Ada,61,100)<<24));}},A08:function(
s){this.Hg(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A08],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A08],E,0);if(!!E)A.pe([this,
this.A08],this);},A3W:function(G){var F;if(!!this.AnL)this.ZI.As((F=this.AnL,F[1
].call(F[0])));else this.ZI.As(false);this.A_0(255);},A_T:function(E){if(A.aaZ(this.
AnL,E))return;if(!!this.AnL)A.z$([this,this.A3W],this.AnL,0);this.AnL=E;if(!!E)A.
zX([this,this.A3W],E,0);if(!!E)A.pe([this,this.A3W],this);},A_0:function(E){if(this.
AGp===E)return;this.AGp=E;if(!!this.Vc)this.Vc.L((this.Vc.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlL:function(A1c,BcG,Bx6){if(A1c<BcG)return 0;else if((A1c>=BcG)&&(A1c<
Bx6))return this.AGp&0xFF;else return 255;},A2H:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Vc=this.TL;else if((F=this.Q,F[1].call(F[0]))>
30)this.Vc=this.TK;else this.Vc=this.OD;}else this.Vc=null;},BlU:function(){return this.
AGp;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZI._Init.call(this.ZI={
I:this},0);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.AK._Init.call(this.OD={
I:this},0);A.acg.AK._Init.call(this.TK={I:this},0);A.acg.AK._Init.call(this.TL={
I:this},0);this.__proto__=C.OF;this.H(E6);this.ZI.Fp(2000);this.NY.H(E6);this.NY.
L(A.jb.Text);this.OD.H(Hr);this.OD.L(A.jb.E1);this.TK.H(I0);this.TK.L(A.jb.E1);this.
TL.H(Iv);this.TL.L(A.jb.E1);this.J(this.NY,0);this.J(this.OD,0);this.J(this.TK,0
);this.J(this.TL,0);this.ZI.Q=[this,this.BlU,this.A_0];this.NY.Ax(A.aaL(A.ach.AMZ
));},_Done:function(){this.__proto__=A.Core.P;this.ZI._Done();this.NY._Done();this.
OD._Done();this.TK._Done();this.TL._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZI._ReInit();this.NY._ReInit();this.OD._ReInit(
);this.TK._ReInit();this.TL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Vc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZI={_Init:function(aArg){A.acl.Go._Init.call(
this,aArg);this.__proto__=C.ZI;this.AkU=true;this.B3=0;this.Cy=255;},_className:
"Application::PulseAnimation"};C.El={GL:null,AR:null,Background:null,OF:null,Bo:
null,Do:null,K$:0,Avo:0,Avp:0,AoZ:0,LN:false,KL:false,Qv:false,Aj:function(Ae){var
B;A.Core.P.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);
var GF=this.Bo.Bw;if(!Hf){this.AoZ=A.jb.CV;this.K$=A.jb.Text;}else if(GF){this.AoZ=
this.Avo;this.K$=this.Avp;}else if(Fu){this.AoZ=this.Avo;this.K$=this.Avp;}else{
this.AoZ=A.jb.CV;this.K$=A.jb.Text;}this.Background.L(this.AoZ);if(!!this.GL){this.
GL.WJ(this.AoZ);this.GL.Dg(this.K$);}this.LN=Hf;this.KL=Fu;this.Qv=GF;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiO:function(G){if(this.Do.Acn)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);},Ab8:function(
E){if(this.GL===E)return;if(!!this.GL)this.HQ(this.GL);this.GL=E;if(!!this.GL)this.
J(this.GL,0);this.Ba(E);this.Am();},A_B:function(E){if(this.Avo===E)return;this.
Avo=E;this.Am();},A_C:function(E){if(this.Avp===E)return;this.Avp=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.OF._Init.call(this.OF={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.El;var B;this.
H(BD);this.Background.A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.CV);
this.OF.H(O8);this.K$=A.jb.Text;this.Bo.PW(0);this.Bo.WK(50);this.Do.Filter=1;this.
Avo=A.jb.AV;this.Avp=A.jb.Bm;this.AoZ=A.jb.Text;this.J(this.Background,0);this.J(
this.OF,0);this.OF.Au([B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyU]);this.OF.
A_T([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV]);this.Bo.MK=[this,this.Qu];
this.Do.BG=[this,this.AiO];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OF._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OF._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X9={AeO:null,UH:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E3:function(G){if(this.K&&this.K.E3)return this.K.E3.apply(this,arguments);else
return C.AB.E3.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeO={I:this},0);A.acg.Text._Init.call(this.UH={I:
this},0);this.__proto__=C.X9;this.AeO.H(P_);this.UH.H(P$);this.UH.R(A.jV);this.UH.
L(A.jb.Text);this.UH.Z(false);this.J(this.AeO,0);this.J(this.UH,0);this.AeO.Ax(null
);this.UH.S(A.aaL(A.fl.EK));var J$=this._variants();if(J$){this.K={};J$._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeO._Done();this.UH._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeO._ReInit();this.UH._ReInit();this.UH.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X9._variants();},K:null,_className:"Application::BootScreen"};C.AVc={AAP:function(
G){A._GetAutoObject(C.A5).Acd(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AVc;this.Background.L(0xFF000000);this.El.Z(false);},_className:
"Application::SleepScreen"};C.AvB={DZ:null,Y:null,Yj:null,Yk:null,VP:null,Ya:null
,VQ:null,X_:null,Yd:null,TP:null,Yc:null,Yl:null,Ay:null,CP:function(){this.DL(this
);},Init:function(aArg){var B;A.zX([this,this.DL],[B=A._GetAutoObject(A.Device.Device
),B.Ary,B.Atp],0);A._GetAutoObject(A.Device.Helper).AkM();this.Ba(this.VP);this.
N.Cu(A.aaL(A.ach.ADV));A.pe([this,this.DL],this);},Ba:function(E){var B;var A3v=
this.AV;C.AB.Ba.call(this,E);if((this.AV!==A3v)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ7=A._NewObject(A.acl.AGm,0);AJ7.Fp(250);AJ7.HP(1);AJ7.WN(6);this.
Y.HJ(this.AV,true,AJ7,null);}},CC:function(G){this.A42(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Ass();},Fh:function(G){
var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.
Ay.MI(-this.Y.Bs[1]);},Ik:function(G){var Cz=(C.Fm.isPrototypeOf(G)?G:null);if(!
Cz)return;if(Cz===this.VP)A._GetAutoObject(C.A5).Cd(35);else if(Cz===this.Ya)A._GetAutoObject(
C.A5).Cd(34);else if(Cz===this.Yd)A._GetAutoObject(C.A5).Cd(69);else if(Cz===this.
VQ)A._GetAutoObject(C.A5).Cd(8);else if(Cz===this.X_)A._GetAutoObject(C.A5).Cd(50
);else if(Cz===this.TP)A._GetAutoObject(C.A5).Cd(25);else if(Cz===this.Yj)A._GetAutoObject(
C.A5).Cd(77);else if(Cz===this.Yk)A._GetAutoObject(C.A5).Cd(70);else if(Cz===this.
Yl)A._GetAutoObject(C.A5).Cd(6);else if(Cz===this.Yc)A._GetAutoObject(C.A5).Cd(63
);},BBm:function(G){A._GetAutoObject(A.Device.Device).Ae1(!A._GetAutoObject(A.Device.
Device).AmR);},DL:function(G){if(A._GetAutoObject(A.Device.Device).AmR)this.N.Hz((
A.aaR(A.acf.A73)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hz((A.aaR(A.acf.
A73)+CR)+A.aaR(A.acf.A8I).toLowerCase());},Adv:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A42:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).MC());this.VQ.ZE(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fm._Init.call(this.Yj={I:this
},0);C.Fm._Init.call(this.Yk={I:this},0);C.Fm._Init.call(this.VP={I:this},0);C.Fm.
_Init.call(this.Ya={I:this},0);C.QY._Init.call(this.VQ={I:this},0);C.Fm._Init.call(
this.X_={I:this},0);C.Fm._Init.call(this.Yd={I:this},0);C.Fm._Init.call(this.TP={
I:this},0);C.Fm._Init.call(this.Yc={I:this},0);C.Fm._Init.call(this.Yl={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvB;this.Background.L(A.
jb.CV);this.N.As(false);this.N.Z(true);this.Ds(C.Aq0);this.DZ.A1(0x3F);this.DZ.H(
Fc);this.DZ.L(A.jb.CK);this.Y.H(LA);this.Y.J0(9);this.Yj.H(Qa);this.Yj.Ai(true);
this.Yj.T(A.aaR(A.acf.G8));this.Yk.H(J_);this.Yk.Ai(true);this.Yk.T(A.aaR(A.acf.
A8p));this.VP.H(Oh);this.VP.Ai(true);this.VP.T(A.aaR(A.acf.VC));this.Ya.H(Qb);this.
Ya.Ai(true);this.Ya.T(A.aaR(A.acf.TC));this.VQ.H(MR);this.VQ.Ai(true);this.VQ.T(
A.aaR(A.acf.APP));this.X_.H(Tg);this.X_.Ai(true);this.X_.T(A.aaR(A.acf.Animal));
this.Yd.H(J_);this.Yd.Ai(true);this.Yd.T(A.aaR(A.acf.A76));this.TP.H(UX);this.TP.
As(true);this.TP.Ai(true);this.TP.Z(true);this.TP.T(A.aaR(A.acf.A6Q));this.Yc.H(
Aaa);this.Yc.Ai(true);this.Yc.T(A.aaR(A.acf.Device));this.Yl.H(Xc);this.Yl.Ai(true
);this.Yl.T(A.aaR(A.acf.Settings));this.Ay.H(Iw);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Yj,0);this.J(this.Yk,0);this.J(this.VP,0);this.J(this.Ya,0);this.
J(this.VQ,0);this.J(this.X_,0);this.J(this.Yd,0);this.J(this.TP,0);this.J(this.Yc
,0);this.J(this.Yl,0);this.J(this.Ay,0);this.N.CF=[this,this.BBm];this.N.Cf=[this
,this.Adv];this.Y.En=[this,this.Fh];this.Yj.AR=[this,this.Ik];this.Yj.DD(A.aaL(A.
ach.ADY));this.Yk.AR=[this,this.Ik];this.Yk.DD(A.aaL(A.ach.AD1));this.VP.AR=[this
,this.Ik];this.VP.DD(A.aaL(A.ach.APU));this.Ya.AR=[this,this.Ik];this.Ya.DD(A.aaL(
A.ach.AP7));this.VQ.AR=[this,this.Ik];this.VQ.DD(A.aaL(A.ach.AQu));this.X_.AR=[this
,this.Ik];this.X_.DD(A.aaL(A.ach.APY));this.Yd.AR=[this,this.Ik];this.Yd.DD(A.aaL(
A.ach.AQE));this.TP.AR=[this,this.Ik];this.TP.DD(A.aaL(A.ach.AQj));this.Yc.AR=[this
,this.Ik];this.Yc.DD(A.aaL(A.ach.AQg));this.Yl.AR=[this,this.Ik];this.Yl.DD(A.aaL(
A.ach.AQY));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Yj._Done();this.Yk._Done();this.VP._Done();this.Ya._Done();
this.VQ._Done();this.X_._Done();this.Yd._Done();this.TP._Done();this.Yc._Done();
this.Yl._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Yj._ReInit();this.Yk.
_ReInit();this.VP._ReInit();this.Ya._ReInit();this.VQ._ReInit();this.X_._ReInit(
);this.Yd._ReInit();this.TP._ReInit();this.Yc._ReInit();this.Yl._ReInit();this.Ay.
_ReInit();this.Yj.T(A.aaR(A.acf.G8));this.Yk.T(A.aaR(A.acf.A8p));this.VP.T(A.aaR(
A.acf.VC));this.Ya.T(A.aaR(A.acf.TC));this.VQ.T(A.aaR(A.acf.APP));this.X_.T(A.aaR(
A.acf.Animal));this.Yd.T(A.aaR(A.acf.A76));this.TP.T(A.aaR(A.acf.A6Q));this.Yc.T(
A.aaR(A.acf.Device));this.Yl.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Jl:null,IZ:null,TI:null,AsO:0,Init:function(aArg){var B;A.zX([
this,this.Bci],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0O],0);A.pe([this,this.
Bci],this);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.An8();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhI();},E3:function(G){A._GetAutoObject(A.Device.
Device).AnZ();},Al5:function(G){var F;this.Am();this.TI.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aen.As(true);if(!this.TI.Bw)(F=this.TI.Q,F[2].call(F[0],this.TI.
B3));},Bci:function(s){this.Al5(s);},An8:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gm);break;case 3:this.Background.
L(A.jb.Ia);break;default:this.Background.L(A.jb.CK);}},AkB:function(E){if(this.AsO===
E)return;this.AsO=E;this.Jl.AkB(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jl._Init.call(this.Jl={I:this}
,0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Go._Init.call(this.TI={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(UY);this.Number.Lu(true);this.Number.L(A.jb.Text);this.Jl.H(Aab);this.Jl.AkB(0
);this.IZ.H(UZ);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.TI.Fp(1750);this.TI.Uv(
750);this.TI.Akw(0);this.TI.As(true);this.TI.B3=3;this.J(this.Number,0);this.J(this.
Jl,0);this.J(this.IZ,0);this.Number.S(A.aaL(A.fl.Af));this.IZ.Ax(A.aaL(A.ach.AD0
));this.TI.Q=[B=this.IZ,B.ASL,B.Cx];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jl._Done();this.IZ._Done();this.TI._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jl._ReInit();this.IZ._ReInit();this.TI._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fm={C_:null,ADM:null,AR:null,Bo:null,Do:null,Background:
null,MB:null,OJ:null,Q4:null,G_:null,A57:true,LN:false,KL:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hj.Bl.call(this,aSize);this.MB.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q4.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OJ.H(this.Q4.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Aj:function(Ae){var B;C.Hj.Aj.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var GF=this.Bo.Bw;if(!Hf){this.Q4.L(A.jb.Am3);this.
G_.L(A.jb.CK);this.OJ.Z(true);this.OJ.L(A.jb.ARe);this.MB.Z(false);}else if(GF){
this.Q4.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OJ.Z(false);this.MB.Z(true);}else if(
Fu){this.Q4.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OJ.Z(false);this.MB.Z(true);}else{
this.Q4.L(A.jb.Text);this.G_.L(A.jb.Text);this.OJ.Z(true);this.OJ.L(A.jb.CV);this.
MB.Z(false);}this.LN=Hf;this.KL=Fu;this.Qv=GF;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiO:function(G){if(this.Do.Acn)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DM===E)return;
this.DM=E;this.G_.R(E);},DD:function(E){if(this.C_===E)return;this.C_=E;this.Q4.
Ax(E);this.OJ.Ax(E);},Ab7:function(E){if(this.A57===E)return;this.A57=E;this.G_.
Z(E);},Ab_:function(E){if(this.ADM===E)return;this.ADM=E;this.MB.Ax(E);this.MB.H(
A.abK(this.MB.M,E.FrameSize));},_Init:function(aArg){C.Hj._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.MB={
I:this},0);A.acg.Ap._Init.call(this.OJ={I:this},0);A.acg.Ap._Init.call(this.Q4={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fm;this.H(Aac);this.
Bo.PW(0);this.Bo.WK(50);this.Do.Filter=1;this.Background.H(Xd);this.Background.Z(
false);this.MB.A1(0x14);this.MB.L(A.jb.AV);this.MB.Cx(0);this.OJ.L(A.jb.CV);this.
OJ.Cx(1);this.G_.H(Aad);this.J(this.Background,0);this.J(this.MB,0);this.J(this.
OJ,0);this.J(this.Q4,0);this.J(this.G_,0);this.Bo.MK=[this,this.Qu];this.Do.BG=[
this,this.AiO];this.MB.Ax(A.aaL(A.ach.N1));this.OJ.Ax(A.aaL(A.ach.AvM));this.Q4.
Ax(A.aaL(A.ach.AvM));this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.
Cm(A.aaL(A.fl.Bg));this.ADM=A.aaL(A.ach.N1);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hj;this.Bo._Done();this.Do._Done();this.Background._Done();this.MB._Done(
);this.OJ._Done();this.Q4._Done();this.G_._Done();C.Hj._Done.call(this);},_ReInit:
function(){C.Hj._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.MB._ReInit();this.OJ._ReInit();this.Q4._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.Bg)
);},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axn:null,Background:null,O4:null,Asj:0,Ak4:10,AjB:100,AQ:0,AoS:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O4.H([].concat(2,this.O4.M.slice(1,4)));this.O4.H(A.abN(this.O4.M,aSize[0]));},Aj:
function(Ae){var B;A.Core.P.Aj.call(this,Ae);var XJ=this.Ak4<this.AjB;var AJF=(B=
this.M)[3]-B[1];var A3i=10;var Auv=AJF;var A4Z=0;if(10>AJF)A3i=AJF;if(this.Ak4<this.
AjB)Auv=((Auv*this.Ak4)/this.AjB)|0;if(Auv<A3i)Auv=A3i;if(this.Ak4<this.AjB)A4Z=((
this.BlS()*(AJF-Auv))/(this.AjB-this.Ak4))|0;this.O4.H(A.abP(this.O4.M,A4Z));this.
O4.H([].concat(this.O4.M.slice(0,3),A4Z+Auv));this.O4.Z(XJ);this.Background.Z(XJ
);if(!!this.Axn&&(this.AoS!==XJ))A.pe(this.Axn,this);this.AoS=XJ;},BlS:function(
){var E=this.Asj;var HF=this.AjB-this.Ak4;if((HF>0)&&(E>HF))E=HF;if(HF<=0)E=0;return E;
},MI:function(E){if(E<0)E=0;if(this.Asj===E)return;this.Asj=E;this.Am();},MJ:function(
E){if(E<0)E=0;if(this.Ak4===E)return;this.Ak4=E;this.Am();},MH:function(E){if(E<
0)E=0;if(this.AjB===E)return;this.AjB=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O4.L(E);},Bn0:function(E){if(A.aa0(this.Axn,E))return;this.
Axn=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.O4={I:this},0);this.__proto__=
C.Ay;this.H(Aae);this.As(false);this.AQ=A.jb.AV;this.Background.A1(0x0);this.Background.
H(U0);this.Background.L(A.jb.CV);this.O4.A1(0x0);this.O4.H(U0);this.O4.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O4,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O4._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O4._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axn)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ch={Hk:null,Y:null,Ay:null,Ap:null,A7w:A.jV,Init:function(aArg){A.pe([this,this.
ABm],this);},DG:function(G){var B;C.AB.DG.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);this.ABm(this);},Al2:
function(G){if(!!this.N.CF)A.pe(this.N.CF,this);},ApJ:function(G){if(!!this.N.Cc
)A.pe(this.N.Cc,this);},AAP:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fh:
function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[
3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);A.pe([this,this.BBK],this);},ABm:function(G){
var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(A.
aaL(A.ach.YI));this.N.CF=[this,this.Ew];if(!!G0&&!!G0.Amq){this.N.E5(A.jV);this.
N.JE.C0(255);this.N.ArQ(G0.AqQ);this.N.Cu(G0.AvJ);this.N.Cf=G0.Amq;}else{this.N.
E5(A.jV);this.N.Cu(null);this.N.Cf=null;}if(!!G0&&!!G0.Agv){this.N.CS(G0.AxS);this.
N.GX.C0(G0.Axo);this.N.Anz(G0.AmT);this.N.C4(G0.Aq8);this.N.Cc=G0.Agv;}else{this.
N.CS(A.jV);this.N.C4(null);this.N.Cc=null;}},Jf:function(E){if(this.A7w===E)return;
this.A7w=E;this.Hk.R(E);},Ew:function(G){A._GetAutoObject(C.A5).Fz();},BBK:function(
G){var B;var BAE=this.Ay.Background.Fo();var Bey=(BAE?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajc=X;
X=X.Ah;if(((Ajc.U&0x400)===0x400)){if(!!(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null)
){var BeE=(A.Core.Akd.isPrototypeOf(Ajc)?Ajc:null);BeE.DE([Bey,BeE.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajc)?Ajc:null)){var Bgx=(A.Core.Eu.isPrototypeOf(Ajc
)?Ajc:null);Bgx.H(A.abN(Bgx.M,Bey));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hk={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ch;this.N.Z(true);this.Hk.H(Xe);this.Hk.As(false);this.Hk.R(A.aaR(A.
acf.Settings));this.Hk.L(A.jb.Text);this.Y.H(Fc);this.Y.J0(1);this.Ay.H(Iw);this.
Ap.H(O9);this.Ap.L(A.jb.Text);this.J(this.Hk,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hk.S(A.aaL(A.fl.Ks));this.Hk.AY(A.aaL(A.fl.HK));this.Y.
En=[this,this.Fh];this.Ap.Ax(A.aaL(A.ach.ADt));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hk._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hk._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hk.R(A.aaR(A.acf.Settings
));this.Hk.S(A.aaL(A.fl.Ks));this.Hk.AY(A.aaL(A.fl.HK));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq0={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bht],[B=
A._GetAutoObject(A.Device.Helper),B.U7,B.U_],0);},Dg:function(E){C.BR.Dg.call(this
,E);this.Text.L(E);},Bht:function(G){this.Text.R(A._GetAutoObject(A.acj.KQ).Bjr(
A._GetAutoObject(A.Device.Helper).Dr()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq0;this.Timer.WK(1);this.Timer.As(true);
this.Text.H(Aaf);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MK=[this,this.
Bht];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KW:0xFFFFFFFF,LX:0,Dg:function(E){if(
this.KW===E)return;this.KW=E;},WJ:function(E){if(this.LX===E)return;this.LX=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oi
);},_className:"Application::HeaderContent"};C.N={V4:null,V5:null,V6:null,Ag1:null
,Ag2:null,Ag3:null,CF:null,Cf:null,Cc:null,Background:null,NR:null,Jj:null,JE:null
,GX:null,PC:null,IS:null,Lh:null,T4:null,T5:null,An1:A.jV,An2:A.jV,An3:A.jV,Aq9:
0,Aq_:0,Aq$:0,Ahj:0,ZK:false,WS:false,Asp:false,AsE:false,AsD:false,Init:function(
aArg){},Aj:function(Ae){if(!!this.V4)this.Jj.S(this.V4);if(!!this.V5)this.JE.S(this.
V5);if(!!this.V6)this.GX.S(this.V6);switch(this.Ahj){case 0:{this.NR.Z(false);this.
Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PC.L(A.jb.Bm);this.IS.L(
A.jb.Bm);this.Lh.L(A.jb.Bm);}break;case 1:{if(!this.Ag1)this.NR.H(A.aaT(this.Jj.
ASD(),Rn));else this.NR.H(this.PC.Dd());this.NR.Z(true);this.Jj.L(A.jb.Text);this.
JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PC.L(A.jb.Text);this.IS.L(A.jb.Bm);this.Lh.
L(A.jb.Bm);}break;case 3:{if(!this.Ag3)this.NR.H(A.aaT(this.GX.ASD(),Rn));else this.
NR.H(this.Lh.Dd());this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.
L(A.jb.Text);this.PC.L(A.jb.Bm);this.IS.L(A.jb.Bm);this.Lh.L(A.jb.Text);}break;case
2:{if(!this.Ag2)this.NR.H(A.aaT(this.JE.ASD(),Rn));else this.NR.H(this.IS.Dd());
this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Text);this.GX.L(A.jb.Bm);this.
PC.L(A.jb.Bm);this.IS.L(A.jb.Text);this.Lh.L(A.jb.Bm);}break;default:{this.NR.Z(
false);A.ab5("%s",Xf);}}if(!!this.PC.Al){this.PC.Z(true);this.Jj.Z(false);}else{
this.PC.Z(false);this.Jj.Z(true);}if(this.An2.length<=0){this.IS.Z(true);this.JE.
Z(false);}else{this.IS.Z(false);this.JE.Z(true);}if(!!this.Lh.Al){this.Lh.Z(true
);this.GX.Z(false);}else{this.Lh.Z(false);this.GX.Z(true);}},Hz:function(E){if(this.
An1===E)return;this.An1=E;this.Jj.R(E);this.Am();},E5:function(E){if(this.An2===
E)return;this.An2=E;this.JE.R(E);this.Am();},CS:function(E){if(this.An3===E)return;
this.An3=E;this.GX.R(E);this.Am();},AFw:function(E){if(this.Ahj===E)return;this.
Ahj=E;this.Am();},AFo:function(E){if(this.V4===E)return;this.V4=E;this.Jj.S(E);this.
Am();},ArQ:function(E){if(this.V5===E)return;this.V5=E;this.JE.S(E);this.Am();},
Anz:function(E){if(this.V6===E)return;this.V6=E;this.GX.S(E);this.Am();},A3$:function(
G){this.Am();},C3:function(E){if(this.Ag1===E)return;this.Ag1=E;this.PC.Ax(E);this.
Am();},Cu:function(E){if(this.Ag2===E)return;this.Ag2=E;this.IS.Ax(E);this.Am();
},C4:function(E){if(this.Ag3===E)return;this.Ag3=E;this.Lh.Ax(E);this.Am();},OU:
function(E){if(this.AsD===E)return;this.AsD=E;this.T4.Z(E);if(E)this.Jj.H([].concat(
this.T4.M[2],this.Jj.M.slice(1,4)));else this.Jj.H([].concat(0,this.Jj.M.slice(1
,4)));this.Am();},OV:function(E){if(this.AsE===E)return;this.AsE=E;this.T5.Z(E);
if(E)this.GX.H(A.abN(this.GX.M,this.T5.M[0]));else this.GX.H(A.abN(this.GX.M,this.
M[2]));this.Am();},Bnm:function(E){if(this.Aq9===E)return;this.Aq9=E;this.PC.Cx(
E);this.Am();},ATq:function(E){if(this.Aq_===E)return;this.Aq_=E;this.IS.Cx(E);this.
Am();},A_G:function(E){if(this.Aq$===E)return;this.Aq$=E;this.Lh.Cx(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NR={I:this},0);C.CG._Init.call(this.Jj={I:this
},0);C.CG._Init.call(this.JE={I:this},0);C.CG._Init.call(this.GX={I:this},0);A.acg.
Ap._Init.call(this.PC={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.
Ap._Init.call(this.Lh={I:this},0);A.acg.Ap._Init.call(this.T4={I:this},0);A.acg.
Ap._Init.call(this.T5={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aea);this.NR.H(Xg);this.NR.
L(A.jb.CV);this.NR.Z(false);this.Jj.A1(0x14);this.Jj.H(U1);this.Jj.A4(0x12);this.
JE.A1(0x14);this.JE.H(Xh);this.JE.A4(0x12);this.GX.H(Aag);this.PC.H(Xi);this.IS.
H(U2);this.Lh.H(Xj);this.Lh.Z(false);this.T4.H(Xk);this.T4.Z(false);this.T5.H(Xl
);this.T5.Z(false);this.J(this.Background,0);this.J(this.NR,0);this.J(this.Jj,0);
this.J(this.JE,0);this.J(this.GX,0);this.J(this.PC,0);this.J(this.IS,0);this.J(this.
Lh,0);this.J(this.T4,0);this.J(this.T5,0);this.Jj.S(A.aaL(A.fl.Ak));this.Jj.AY(A.
aaL(A.fl.Bg));this.Jj.Q7([this,this.A3$]);this.JE.S(A.aaL(A.fl.Ak));this.JE.AY(A.
aaL(A.fl.Bg));this.JE.Q7([this,this.A3$]);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.
aaL(A.fl.Bg));this.GX.Q7([this,this.A3$]);this.V4=A.aaL(A.fl.Ak);this.V5=A.aaL(A.
fl.Ak);this.V6=A.aaL(A.fl.Ak);this.PC.Ax(null);this.IS.Ax(null);this.Lh.Ax(null);
this.T4.Ax(A.aaL(A.ach.AMS));this.T5.Ax(A.aaL(A.ach.Ajq));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NR._Done();this.
Jj._Done();this.JE._Done();this.GX._Done();this.PC._Done();this.IS._Done();this.
Lh._Done();this.T4._Done();this.T5._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NR._ReInit();this.Jj.
_ReInit();this.JE._ReInit();this.GX._ReInit();this.PC._ReInit();this.IS._ReInit(
);this.Lh._ReInit();this.T4._ReInit();this.T5._ReInit();this.Jj.S(A.aaL(A.fl.Ak)
);this.Jj.AY(A.aaL(A.fl.Bg));this.JE.S(A.aaL(A.fl.Ak));this.JE.AY(A.aaL(A.fl.Bg)
);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.aaL(A.fl.Bg));this.AFo(A.aaL(A.fl.Ak));
this.ArQ(A.aaL(A.fl.Ak));this.Anz(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADx={Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkA],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper)
,B.A9D,B.AFU],0);A.pe([this,this.Nz],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhE)this.Ab9(A._GetAutoObject(A.Device.Helper).AhE.AOZ());else this.
Ab9(-1);if(!!A._GetAutoObject(A.Device.Helper).WU)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).An6(A._GetAutoObject(A.Device.Helper).WU.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.AmZ._Init.call(this,aArg);this.__proto__=C.ADx;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG5={Ey:null,Ej:null,
F0:null,X7:null,TJ:null,IL:null,IM:null,Init:function(aArg){},WR:function(G){var
B;C.DS.WR.call(this,G);var AKU=this.AzB(A._GetAutoObject(A.Device.Helper).UK.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALJ=this.AzB(A._GetAutoObject(
A.Device.Helper).UL.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAt=
this.AzB(A._GetAutoObject(A.Device.Device).AcJ);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKU));this.IM.H(A.abO(this.
IM.M,this.Ey.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0)));this.Ej.H(A.abP(this.Ej.M,this.
Ey.M[3]));this.Ej.H([].concat(this.Ej.M.slice(0,3),((B=this.M)[3]-B[1])-ALJ));this.
IL.H(A.abO(this.IL.M,(this.Ej.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))+2));this.F0.
H(A.abP(this.F0.M,this.Ej.M[3]));this.F0.H([].concat(this.F0.M.slice(0,3),((B=this.
M)[3]-B[1])-BAt));this.TJ.H(A.abO(this.TJ.M,this.F0.M[3]-((((B=this.TJ.M)[3]-B[1
])/2)|0)));this.X7.H(A.abP(this.X7.M,this.F0.M[3]));this.X7.H([].concat(this.X7.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJS:function(AoO){return A._GetAutoObject(A.
Device.Converter).AkY(AoO);},AKo:function(){return A._GetAutoObject(A.acj.Temperature
).AlM();},_Init:function(aArg){C.DS._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ey={I:this},0);A.acg.AK._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.
F0={I:this},0);A.acg.AK._Init.call(this.X7={I:this},0);A.acg.AK._Init.call(this.
TJ={I:this},0);A.acg.AK._Init.call(this.IL={I:this},0);A.acg.AK._Init.call(this.
IM={I:this},0);this.__proto__=C.AG5;this.Ey.A1(0xD);this.Ey.H(Ro);this.Ey.L(A.jb.
Gm);this.Ej.A1(0xD);this.Ej.H(Th);this.Ej.L(A.jb.Ia);this.F0.A1(0xD);this.F0.H(Aah
);this.F0.L(A.jb.E1);this.X7.A1(0xD);this.X7.H(AfC);this.X7.L(A.jb.Afv);this.TJ.
A1(0xD);this.TJ.H(Aai);this.TJ.Awy(A.jb.Afv);this.TJ.Awz(A.jb.Afv);this.TJ.AwB(A.
jb.E1);this.TJ.AwA(A.jb.E1);this.IL.A1(0xD);this.IL.H(Xm);this.IL.Awy(A.jb.E1);this.
IL.Awz(A.jb.E1);this.IL.AwB(A.jb.Ia);this.IL.AwA(A.jb.Ia);this.IM.A1(0xD);this.IM.
H(Aaj);this.IM.Awy(A.jb.Ia);this.IM.Awz(A.jb.Ia);this.IM.AwB(A.jb.Gm);this.IM.AwA(
A.jb.Gm);this.J(this.Ey,-1);this.J(this.Ej,-1);this.J(this.F0,-1);this.J(this.X7
,-1);this.J(this.TJ,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DS;this.Ey._Done();this.Ej._Done();this.F0._Done(
);this.X7._Done();this.TJ._Done();this.IL._Done();this.IM._Done();C.DS._Done.call(
this);},_ReInit:function(){C.DS._ReInit.call(this);this.Ey._ReInit();this.Ej._ReInit(
);this.F0._ReInit();this.X7._ReInit();this.TJ._ReInit();this.IL._ReInit();this.IM.
_ReInit();},_Mark:function(D){var B;C.DS._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cp={Avq:null,AmT:null,AQq:null,Aq8:null,AqQ:null,AvJ:null,AR:null,Agv:null,Amq:
null,N:null,Bo:null,QU:null,AxS:A.jV,AU9:false,AGT:false,Ape:false,Axo:255,LN:false
,KL:false,Qv:false,Aj:function(Ae){var B;C.O1.Aj.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fu=((Ae&0x20)===0x20);var IF=((Ae&0x40)===0x40);var GF=this.Bo.Bw;var FV=
A.jb.CK;var GZ=A.jb.Text;if(this.Hm){FV=A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CV);this.V.L(A.jb.CK);}else if(GF){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IF){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.Am3);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ
);}this.LN=Hf;this.KL=Fu;this.Qv=GF;this.Ape=IF;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bxk:function(s){this.Qu(s);},H0:function(G){if(this.QU.Acn)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Alk:function(s){this.H0(s);},Ab6:function(E){if(A.aa0(this.Agv,E))return;this.
Agv=E;},A_$:function(E){if(this.AxS===E)return;this.AxS=E;},ZA:function(E){if(this.
Avq===E)return;this.Avq=E;},ZB:function(E){if(this.AmT===E)return;this.AmT=E;},A_R:
function(E){if(this.Axo===E)return;this.Axo=E;},Gt:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DM===E)return;this.DM=E;this.ALr();},A3H:
function(G){},BHe:function(s){this.A3H(s);},Akv:function(E){if(this.Aq8===E)return;
this.Aq8=E;},L5:function(E){if(A.aa0(this.Amq,E))return;this.Amq=E;},Bnf:function(
E){if(this.AqQ===E)return;this.AqQ=E;},L8:function(E){if(this.AvJ===E)return;this.
AvJ=E;},ZF:function(E){if(this.AGT===E)return;this.AGT=E;this.ALr();},ALr:function(
){var B;var M8=this.DM;if(this.AGT)M8=M8+A.aaR(A.acf.Colon);if(this.AU9)M8=M8+Aak;
this.V.R(M8);},ATO:function(E){if(this.AU9===E)return;this.AU9=E;this.ALr();},_Init:
function(aArg){C.O1._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BF._Init.call(this.QU={I:this},0);this.__proto__=C.Cp;this.Bo.PW(0);
this.Bo.WK(50);this.Bo.As(false);this.QU.Filter=1;this.Bo.MK=[this,this.Bxk];this.
QU.BG=[this,this.Alk];this.Avq=A.aaL(A.fl.Ak);this.AmT=A.aaL(A.fl.Ak);this.AQq=A.
aaL(A.ach.E2);this.AqQ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O1;this.
Bo._Done();this.QU._Done();C.O1._Done.call(this);},_ReInit:function(){C.O1._ReInit.
call(this);this.Bo._ReInit();this.QU._ReInit();this.ZA(A.aaL(A.fl.Ak));this.ZB(A.
aaL(A.fl.Ak));this.Bnf(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O1._Mark.call(
this,D);if((B=this.Avq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqQ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agv)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dt={Q:null,Anb:null,And:null,Hy:null,H8:null,AM:0,Gs:0,Gd:100,FH:0,Init:function(
aArg){},H0:function(G){this.FH=1;C.Eh.H0.call(this,G);},Bl:function(aSize){C.Eh.
Bl.call(this,aSize);this.Hy.H([0,aSize[1]-40,40,aSize[1]]);this.H8.H([].concat(A.
abe(aSize,AhT),aSize));},Aj:function(Ae){var B;C.Eh.Aj.call(this,Ae);var Fu=((Ae&
0x20)===0x20);var GF=this.Bo.Bw;this.Hy.L(this.V.AQ);this.H8.L(this.V.AQ);this.Hy.
Z((Fu||GF)&&(this.AM>this.Gs));this.H8.Z((Fu||GF)&&(this.AM<this.Gd));if(this.FH===
6)this.Hy.L(A.jb.E1);if(this.FH===7)this.H8.L(A.jb.E1);},BfG:function(G){this.FH=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay3],this);this.Bo.As(false);}this.Bo.
As(true);},Qu:function(G){if(this.FH===6)A.pe([this,this.Ay3],this);if(this.FH===
7)A.pe([this,this.Ay4],this);if(this.FH===1)A.pe(this.AR,this);this.FH=0;this.Am(
);},C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C6(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},BfH:function(G){this.FH=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay4],this);this.Bo.As(false);}this.Bo.As(true);},Kh:function(G){this.FH=0;}
,Ay4:function(s){this.Kh(s);},Kc:function(G){this.FH=0;},Ay3:function(s){this.Kc(
s);},Bx:function(E){if(E<this.Gs)E=this.Gs;if(E>this.Gd)E=this.Gd;if(this.AM===E
)return;this.AM=E;this.Am();},BbJ:function(Aq){this.Bx(Aq);},Ge:function(E){if(this.
Gs===E)return;this.Gs=E;this.Am();},EU:function(E){if(this.Gd===E)return;this.Gd=
E;this.Am();},Um:function(){return this.AM;},_Init:function(aArg){C.Eh._Init.call(
this,aArg);A.Core.BF._Init.call(this.Anb={I:this},0);A.Core.BF._Init.call(this.And={
I:this},0);A.acg.Ap._Init.call(this.Hy={I:this},0);A.acg.Ap._Init.call(this.H8={
I:this},0);this.__proto__=C.Dt;this.H(K2);this.Anb.Filter=6;this.And.Filter=7;this.
Background.H(K2);this.V.H(Aal);this.V.R(LB);this.Hy.H(AhU);this.H8.H(Ak9);this.H8.
Cx(1);this.J(this.Hy,0);this.J(this.H8,0);this.Anb.BG=[this,this.BfG];this.Anb.D2=[
this,this.BfG];this.And.BG=[this,this.BfH];this.And.D2=[this,this.BfH];this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.Hy.Ax(A.aaL(A.ach.
Ajr));this.H8.Ax(A.aaL(A.ach.Ajr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eh;this.Anb._Done();this.And._Done();this.Hy._Done();this.H8._Done();C.Eh._Done.
call(this);},_ReInit:function(){C.Eh._ReInit.call(this);this.Anb._ReInit();this.
And._ReInit();this.Hy._ReInit();this.H8._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eh._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hy)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dv:function(){return-1;},C8:function(aIndex){return-1;},Gb:function(
aIndex){return A.jV;},D0:function(A9){return-1;},H7:function(){return-1;},Au:function(
E){this.Q=E;},Cb:function(Aq){this.Au(Aq);},ADa:function(aIndex){return null;},ADc:
function(aIndex){return 0;},Ca:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iu={AxJ:null
,BW:null,AHh:A.jV,AVN:A.jV,Aj1:1,Init:function(aArg){},Aj:function(Ae){var B;var
F;C.Dt.Aj.call(this,Ae);if(!this.AxJ){this.BW.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BW.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.
AVN);else this.BW.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.AHh);}}else(B=
this.AxJ)?B[1].call(B[0],this):null;},Kh:function(G){var F;var BP=this.AM;C.Dt.Kh.
call(this,G);this.Bx(this.AM+this.Aj1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;C.
Dt.Kc.call(this,G);this.Bx(this.AM-this.Aj1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IW:function(E){if(this.AHh===E)return;
this.AHh=E;this.Am();},Jg:function(E){if(this.AVN===E)return;this.AVN=E;this.Am(
);},ATr:function(E){if(this.Aj1===E)return;this.Aj1=E;},A_8:function(E){if(A.aa0(
this.AxJ,E))return;this.AxJ=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CG._Init.call(this.BW={I:this},0);this.__proto__=C.Iu;this.H(K2);this.BW.H(Oj);
this.J(this.BW,-1);this.BW.S(A.aaL(A.fl.Af));this.BW.AY(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BW._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BW._ReInit();this.BW.S(A.aaL(
A.fl.Af));this.BW.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.AxJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BU={AC:
null,DC:null,HO:null,CP:function(){this.Aj(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Dt.Bl.call(this,aSize);this.DC.H([this.Hy.M[2]-10,this.Hy.M[1],this.
H8.M[0]+10,this.Hy.M[3]]);this.DC.AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.DC.
Gu,true,null,null);},Aj:function(Ae){var B;C.Dt.Aj.call(this,Ae);var Fu=((Ae&0x20
)===0x20);var GF=this.Bo.Bw;this.DC.AbL(0,this.DC.A0-1);this.Hy.Z(Fu||GF);this.H8.
Z(Fu||GF);},C6:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.D0((F=this.
Q,F[1].call(F[0]))));},Kh:function(G){var F;var BP=this.AM;C.Dt.Kh.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;
C.Dt.Kc.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gs){E=this.Gd;QA=-this.DC.Wi*this.DC.A0;}if(E>this.Gd){E=this.
Gs;QA=this.DC.Wi;}C.Dt.Bx.call(this,E);if(!!QA)this.DC.Gf(QA);this.DC.GU(this.AM
);if(this.DC.Bkn())this.DC.BpT(false,false);this.DC.HJ(this.DC.Gu,true,this.HO,null
);},Hn:function(G){var B;var Gj=this.DC.G6;var CA=(C.CG.isPrototypeOf(B=this.DC.
Cj)?B:null);if(!CA)return;CA.S(this.V.B8);CA.Aw9(19);CA.AY(this.V.AmS);CA.Bn_(19
);CA.Cm(this.V.AqP);CA.Bn$(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gb(Gj));
else CA.R(Xn);CA.H(A.abK(CA.M,[this.DC.Wi,(B=this.DC.M)[3]-B[1]]));},BwY:function(
s){this.Hn(s);},CI:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ge(0);this.EU(this.AC.Dv()-1);this.DC.JD(this.AC.Dv());this.DC.AbL(0,this.DC.A0-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.DC._Init.call(this.
DC={I:this},0);A.acl.Go._Init.call(this.HO={I:this},0);this.__proto__=C.BU;this.
H(K2);this.DC.N8(C.CG);this.HO.WN(23);this.HO.HP(1);this.HO.Fp(200);this.J(this.
DC,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.DC.Hn=[this,this.BwY
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.DC._Done();this.HO.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
DC._ReInit();this.HO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SY={FN:null,OM:null,Dm:null,Av:null,JB:null,HN:null,Pw:null,V2:null,Q3:null,
Yt:null,P9:null,Gz:null,Gy:null,F_:0,A8:0,Asn:false,Bkj:false,Init:function(aArg
){},Aj:function(Ae){C.Dt.Aj.call(this,Ae);this.Hy.Z(false);this.H8.Z(false);var At0=
A.jV;if(!!this.Dm){this.Pw.R(this.Av.Format(Aoe));this.Q3.R(this.Av.Format(AfD));
this.P9.R(this.Av.Format(AhV));}if(this.A8===1){this.HN.Z(true);this.HN.H(this.Pw.
M);this.HN.L(this.V.AQ);this.Pw.L(this.Background.AQ);this.Q3.L(this.V.AQ);this.
P9.L(this.V.AQ);At0=A.aaR(A.acf.A6q);}else if(this.A8===2){this.HN.Z(true);this.
HN.H(this.Q3.M);this.HN.L(this.V.AQ);this.Pw.L(this.V.AQ);this.Q3.L(this.Background.
AQ);this.P9.L(this.V.AQ);At0=A.aaR(A.acf.Hl);}else if(this.A8===3){this.HN.Z(true
);this.HN.H(this.P9.M);this.HN.L(this.V.AQ);this.Pw.L(this.V.AQ);this.Q3.L(this.
V.AQ);this.P9.L(this.Background.AQ);At0=A.aaR(A.acf.Year);}else{this.HN.Z(false);
this.Pw.L(this.V.AQ);this.Yt.L(this.V.AQ);this.Q3.L(this.V.AQ);this.V2.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(At0.length>0){if(this.AGT)this.V.R((((this.DM+AcP)+
At0)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DM+AcP)+
At0)+String.fromCharCode(0x29));}else this.ALr();},Qu:function(G){if(this.FH===1
)A.pe([this,this.Vh],this);else if(this.FH===4)A.pe([this,this.AiE],this);else if(
this.FH===5)A.pe([this,this.Aip],this);C.Dt.Qu.call(this,G);},Kh:function(G){switch(
this.A8){case 0:C.Dt.Kh.call(this,G);break;case 3:break;default:this.Adx(this);}
},Kc:function(G){switch(this.A8){case 0:C.Dt.Kc.call(this,G);break;default:this.
Aio(this);}},Adz:function(G){var F;if(!!this.Dm)this.Ut((F=this.Dm,F[1].call(F[0
])));},Aca:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.Adz
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.Adz],E,0);if(!!E)A.pe([this,this.Adz
],this);},Ut:function(E){if(this.F_===E)return;this.F_=E;this.Av.Initialize(this.
F_);this.Am();},Adx:function(G){this.FH=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vh],this);this.Bo.As(false);}this.Bo.As(true);},Bcg:function(s){this.Adx(s);},Vh:
function(G){this.Ex(this.A8+1);},Al4:function(G){this.FH=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiE],this);this.Bo.As(false);}this.Bo.As(true);},Al3:function(
G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aip],this);this.Bo.As(false
);}this.Bo.As(true);},AiE:function(G){var B;var F;var BP=this.F_;switch(this.A8){
case 1:{if(this.Asn){var ABv=A._NewObject(A.Core.An4,0);ABv.Kp=1;if(this.Av.J(ABv
).JZ()>A._GetAutoObject(A.Device.Helper).Dr())return;}if(this.Av.GM<this.Av.Zu()
)this.Av.Lt(this.Av.GM+1);}break;case 2:{if(this.Asn){var ABv=A._NewObject(A.Core.
An4,0);ABv.Kp=this.Av.Zu();if(this.Av.J(ABv).JZ()>A._GetAutoObject(A.Device.Helper
).Dr())return;}this.Av.Ux(this.Av.Hl+1);if(this.Av.Zu()<this.Av.GM)this.Av.Lt(this.
Av.Zu());}break;case 3:{if(this.Asn){var A13=A._NewObject(A.Core.Bq,0);A13.Initialize(
this.Av.JZ());A13.Year+=1;if(A13.JZ()>A._GetAutoObject(A.Device.Helper).Dr())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Ut(((B=(this.Av.JZ()|0))<0)?B+0x100000000:B);if(this.F_!==BP){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.F_));A.abo(this.Dm,0);}},Aip:function(G){var B;var F;var BP=
this.F_;if(this.A8===1)this.Av.Lt(this.Av.GM-1);if(this.A8===2){this.Av.Ux(this.
Av.Hl-1);if(this.Av.Zu()<this.Av.GM)this.Av.Lt(this.Av.Zu());}if(this.A8===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Ut(((B=(this.Av.JZ()|
0))<0)?B+0x100000000:B);if(this.F_!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.F_));A.abo(this.Dm,0);}},DL:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[
0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.Vh];}break;case 2:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.Vh];}break;case 3:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},AFS:function(E){if(this.Asn===E)return;this.Asn=E;},FY:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;var AAC=this.A8;if(!this.
A8){this.FN.Ajy((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.F_){var BP=this.F_;
this.Ut(A._GetAutoObject(A.Device.Helper).Dr());if(this.F_!==BP){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.F_));A.abo(this.Dm,0);}}}this.A8=EN;this.Bkj=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DL(this);this.Gz.Bw=!!this.A8;this.Gy.Bw=
!!this.A8;if((!!AAC&&!this.A8)&&!!this.OM)A.pe(this.OM,this);this.Am();},Aio:function(
G){if(this.A8>1)this.Ex(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bq._Init.call(this.Av={I:this},0);A.Core.BF._Init.call(this.JB={I:this}
,0);A.acg.AK._Init.call(this.HN={I:this},0);A.acg.Text._Init.call(this.Pw={I:this
},0);A.acg.Text._Init.call(this.V2={I:this},0);A.acg.Text._Init.call(this.Q3={I:
this},0);A.acg.Text._Init.call(this.Yt={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BF._Init.call(this.Gz={I:this},0);A.Core.BF._Init.call(this.Gy={
I:this},0);this.__proto__=C.SY;this.H(Aam);this.V.R(Ax9);this.Hy.Z(false);this.H8.
Z(false);this.JB.Filter=1;this.HN.H(Ax_);this.HN.L(0x55FFFFFF);this.Pw.H(Ax$);this.
Pw.Je(true);this.Pw.A4(0x14);this.V2.H(Aya);this.V2.Je(true);this.V2.A4(0x14);this.
V2.R(Ak_);this.Q3.H(AsZ);this.Q3.Je(true);this.Yt.H(Ayb);this.Yt.Je(true);this.Yt.
R(Ak_);this.P9.H(Ayc);this.P9.Je(true);this.P9.A4(0x11);this.Gz.Filter=4;this.Gz.
Bw=false;this.Gy.Filter=5;this.Gy.Bw=false;this.J(this.HN,0);this.J(this.Pw,0);this.
J(this.V2,0);this.J(this.Q3,0);this.J(this.Yt,0);this.J(this.P9,0);this.JB.BG=[this
,this.Bcg];this.Pw.S(A.aaL(A.fl.EK));this.V2.S(A.aaL(A.fl.EK));this.Q3.S(A.aaL(A.
fl.EK));this.Yt.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gz.BG=[this,this.
Al4];this.Gz.D2=[this,this.AiE];this.Gy.BG=[this,this.Al3];this.Gy.D2=[this,this.
Aip];this.FN=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dt;this.Av._Done();this.JB._Done();this.HN._Done();this.Pw._Done();this.V2._Done(
);this.Q3._Done();this.Yt._Done();this.P9._Done();this.Gz._Done();this.Gy._Done(
);C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Av._ReInit(
);this.JB._ReInit();this.HN._ReInit();this.Pw._ReInit();this.V2._ReInit();this.Q3.
_ReInit();this.Yt._ReInit();this.P9._ReInit();this.Gz._ReInit();this.Gy._ReInit(
);this.Pw.S(A.aaL(A.fl.EK));this.V2.S(A.aaL(A.fl.EK));this.Q3.S(A.aaL(A.fl.EK));
this.Yt.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Dt._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OP={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BeB],[B=A._GetAutoObject(A.Device.Device),B.A9l,B.BbQ],0);
A.pe([this,this.BeB],this);},Dv:function(){return 27;},Gb:function(aIndex){return this.
LanguageToString.BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnC(E);},BeB:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OP;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,5);this.BI.
Set(3,3);this.BI.Set(4,8);this.BI.Set(5,9);this.BI.Set(6,7);this.BI.Set(7,6);this.
BI.Set(8,10);this.BI.Set(9,2);this.BI.Set(10,11);this.BI.Set(11,12);this.BI.Set(
12,13);this.BI.Set(13,14);this.BI.Set(14,15);this.BI.Set(15,16);this.BI.Set(16,18
);this.BI.Set(17,17);this.BI.Set(18,4);this.BI.Set(19,20);this.BI.Set(20,21);this.
BI.Set(21,23);this.BI.Set(22,24);this.BI.Set(23,22);this.BI.Set(24,25);this.BI.Set(
25,26);this.BI.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;
this.LanguageToString._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Languages"};C.Rf={TemperatureUnitToString:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axb(E);},Init:function(aArg
){var B;A.zX([this,this.Bg8],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atq],0
);A.pe([this,this.Bg8],this);},Bg8:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVr={Ajw:null,
AcF:null,KD:null,AP:null,A_:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KD.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajw.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcF.H(this.Ajw.M);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.
KD.L(this.V.AQ);},Init:function(aArg){},Ci:function(Ad){if(!this.AX)return;this.
Hs=Ad;if(!!this.AX){var AlD=this.AX.Hw(Ad,6);var ApT=this.AX.CE(Ad,7);var Aue=this.
AX.Ja(Ad,9);this.T(A._GetAutoObject(A.acj.KQ).AC8(AlD));this.KD.R(A._GetAutoObject(
A.acj.KQ).A67(AlD));this.AcF.R(A._GetAutoObject(A.Device.Converter).AkY(ApT));this.
AcF.L(A._GetAutoObject(A.acj.Assessment).XG(Aue));this.Ajw.L(A._GetAutoObject(A.
acj.Assessment).Qr(Aue));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,
aArg);A.acg.AK._Init.call(this.Ajw={I:this},0);A.acg.Text._Init.call(this.AcF={I:
this},0);A.acg.Text._Init.call(this.KD={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.AVr;this.V.H(
O_);this.AcF.L(A.jb.Text);this.KD.R(Rp);this.KD.L(A.jb.Text);this.AP.L(A.jb.Bb);
this.A_.H(Ayd);this.A_.L(A.jb.Bb);this.J(this.Ajw,0);this.J(this.AcF,0);this.J(this.
KD,0);this.J(this.AP,0);this.J(this.A_,0);this.AcF.S(A.aaL(A.fl.Af));this.KD.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ajw._Done(
);this.AcF._Done();this.KD._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ajw._ReInit();this.AcF._ReInit(
);this.KD._ReInit();this.AP._ReInit();this.A_._ReInit();this.AcF.S(A.aaL(A.fl.Af
));this.KD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gg={AX:null,AR:null,Cr:null,AD:null,Afm:null,NU:null,KR:A.jV,Lm:null,AVP:true
,Hn:function(G){var B;var Gj=this.AD.G6;var Aa=(C.A$.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ci(Gj);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GP]));},N8:function(E){if(E===this.Lm)return;this.Lm=
E;this.AD.N8(E);},Zy:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ci],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ci],E,0);A.pe([this,this.Ci],this
);},Ci:function(G){if(this.AVP===false)return;if(!!this.AX){this.AD.JD(this.AX.B9(
));this.AD.AbL(0,this.AD.A0-1);}else this.AD.JD(0);if((this.AD.A0>0)&&(this.FO()<
0))this.GU(0);if(this.FO()>=this.AD.A0){this.GU(0);this.AD.Gf(0);}if(this.AD.A0<=
0){this.NU.Z(true);this.GU(-1);}else{this.NU.Z(false);this.ABV(null,null);}},Fh:
function(G){var B;this.Afm.MH(this.AD.GP*this.AD.A0);this.Afm.MJ((B=this.AD.M)[3
]-B[1]);this.Afm.MI(-this.AD.Bs);},DG:function(G){if(this.AD.A0>0){switch(this.Cr.
CO){case 4:if(this.FO()>0)this.GU(this.FO()-1);break;case 5:if(this.FO()<(this.AD.
A0-1))this.GU(this.FO()+1);break;default:this.Cr.Mx=true;}this.AD.HJ(this.FO(),true
,null,null);}else if((this.Cr.CO!==4)&&(this.Cr.CO!==5))this.Cr.Mx=true;},ZC:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbL(0,this.AD.A0);},GU:function(
E){this.AD.GU(E);this.AD.HJ(E,true,null,null);},FO:function(){return this.AD.Gu;
},Dl:function(E){if(this.KR===E)return;this.KR=E;this.NU.R(E);},ABV:function(AcZ
,E7){this.AD.ABV(AcZ,E7);},AT4:function(E){if(this.AVP===E)return;this.AVP=E;if(
E)A.pe([this,this.Ci],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.CL._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afm={I:this},0);A.acg.Text._Init.call(this.NU={I:this},
0);this.__proto__=C.Gg;this.H(U3);this.Lm=C.A$;this.Cr.Filter=147;this.AD.A1(0x3F
);this.AD.H(U3);this.AD.Ae7(40);this.Afm.A1(0x3A);this.Afm.H(As0);this.NU.A1(0x3F
);this.NU.H(Aye);this.NU.Ho(10);this.NU.Lu(true);this.NU.A4(0xA);this.NU.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afm,0);this.J(this.NU,0);this.Cr.BG=[this,this.
DG];this.Cr.D2=[this,this.DG];this.AD.En=[this,this.Fh];this.AD.Hn=[this,this.Hn
];this.NU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done(
);this.AD._Done();this.Afm._Done();this.NU._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cr._ReInit();this.AD._ReInit();this.
Afm._ReInit();this.NU._ReInit();this.NU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.A$={AX:null,Hs:-1,CP:function(){this.Ci(this.Hs
);},Aj:function(Ae){var B;C.Cp.Aj.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Hs%2)===1)this.Background.L(A.jb.CK);else this.Background.L(A.jb.CV);}},Zy:function(
E){if(this.AX===E)return;this.AX=E;},Ci:function(Ad){A.ab5("%s",Ayf);},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.A$;},_ReInit:function(){C.Cp._ReInit.
call(this);this.CP();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GK={
Bf:null,FC:null,DR:null,Fk:null,V8:null,Kn:null,KR:A.jV,AUr:0,AUs:0,ARM:Ak$,Afn:
false,CP:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbt],this);}},Init:function(aArg){var B;A.
zX([this,this.Bff],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIW],0);A.zV([this
,this.Bxi],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z8],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBP],[B=A._GetAutoObject(A.Device.Helper)
,B.U7,B.U_],0);A.pe([this,this.Z8],this);A.pe([this,this.A0X],this);A.pe([this,this.
AxE],this);},WH:function(G){this.Agw();var O;for(O=this.Kn.Dv()-1;O>=0;O=O-1)switch(
this.Kn.C8(O)){case 0:this.AdR(A.aaR(A.acf.A5z),[this,this.Boy],0);break;case 14:
this.AdR(A.aaR(A.acf.BhO),[this,this.Boz],14);break;case 1:this.AdR(A.aaR(A.acf.
Temperature),[this,this.AT8],1);break;case 2:this.AdR(A.aaR(A.acf.Rating),[this,
this.AT7],2);break;case 3:this.AdR(A.aaR(A.acf.Afw),[this,this.AT9],3);break;default:
A.ab5("%s",Ayg);}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.
BiL));A._GetAutoObject(A.Device.Device).Dw(6);},Bbt:function(s){this.WH(s);},DG:
function(G){var D6=(A.Core.BF.isPrototypeOf(G)?G:null);var Af0=this.Kn.D0(A._GetAutoObject(
A.Device.Device).Kn);if(this.Afn)return;switch(D6.CO){case 6:{Af0=Af0-1;if(Af0<0
)Af0=this.Kn.Dv()-1;A._GetAutoObject(A.Device.Device).Zw(this.Kn.C8(Af0));}break;
case 7:{Af0=Af0+1;if(Af0>=this.Kn.Dv())Af0=0;A._GetAutoObject(A.Device.Device).Zw(
this.Kn.C8(Af0));}break;default:D6.Mx=true;}},CC:function(G){if(this.DR.AAc()){this.
DR.Ac9();if(this.DR.AAc()===false)this.Bf.AT4(true);return;}else if(this.Afn)this.
ABd(this);if(!!this.Bf)this.Bf.AT4(true);},E3:function(G){if(!!this.Bf)this.Bf.AT4(
false);},AxE:function(G){var B;if(!!this.Bf)this.HQ(this.Bf);this.Bf=A._NewObject(
C.AME,0);this.Bf.H(this.ARM);this.Bf.Zy(A._GetAutoObject(A.Device.Device).An);this.
Bf.ZC([this,this.Aap]);if(!!this.FC)this.Bf.A9_([B=this.FC,B.A9F,B.A_4]);this.A4K(
this);this.J(this.Bf,0);if(this.Afn===false)this.Ba(this.Bf);this.Bff(this);this.
A$Z(this);},A97:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Ds(this.
A7i());this.El.AR=[this,this.Aap];this.ALw(this);this.El.As(true);this.Ba(this.El
);this.Afn=true;},Blf:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);
if(!this.Bf)return;var Aa=(C.ACk.isPrototypeOf(B=this.Bf.AD.BjY(this.Bf.AD.Gu))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GS(Aa.Hs);else A._GetAutoObject(
A.Device.Helper).W.FD();this.Agi();},Agf:function(G){var F;if(!this.Fk)this.A6E(
this);else switch((F=this.Fk,F[1].call(F[0]))){case 19:break;case 0:this.A6E(this
);break;case 1:this.BiM(this);break;case 9:this.A6F(this);break;case 4:this.BiO(
this);break;case 6:this.BiP(this);break;case 8:this.BiR(this);break;case 2:this.
BiS(this);break;case 3:this.BiT(this);break;case 7:this.BiV(this);break;case 5:this.
BiW(this);break;case 10:this.BiY(this);break;case 11:this.BiN(this);break;case 12:
this.BiQ(this);break;case 13:this.A6K(this);break;case 14:this.A6G(this);break;case
18:this.A6H(this);break;case 15:this.A6I(this);break;case 16:this.BiU(this);break;
case 17:this.A6J(this);break;default:A.ab5("%s%e",AfE,(F=this.Fk,F[1].call(F[0])
));}},Aap:function(s){this.Agf(s);},Bmr:function(G){this.Ds(C.Ku);this.El.AR=null;
this.Afn=false;this.Z8(this);this.BgA();this.N.T4.C0(255);this.N.T5.C0(255);this.
Ba(this.Bf);this.El.As(false);},Ano:function(G){A._GetAutoObject(C.A5).Fz();},Dl:
function(E){if(this.KR===E)return;this.KR=E;this.A4K(this);},Aby:function(){switch(
A._GetAutoObject(A.Device.Device).Kn){case 14:return C.ANd;case 2:return C.ANf;case
1:return C.ANg;case 3:return C.ANi;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.Aqu;case 7:return C.ACj;case 12:return C.ACm;case 11:return C.ACi;case
13:return C.ACl;default:throw new Error(Aof);}},Abz:function(){switch(A._GetAutoObject(
A.Device.Device).Kn){case 14:return C.APG;case 2:return C.ADE;case 1:return C.API;
case 3:return C.APK;case 4:return C.ADA;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq1;case 7:return C.ADC;case 12:return C.ADD;case 11:return C.ADB;case
13:return C.ADF;default:throw new Error(Aof);}},Bff:function(G){this.ATH(A._GetAutoObject(
A.Device.Device).Kn);if(!!this.Bf){this.Bf.N8(this.Aby());this.BpJ(this);}},BpJ:
function(G){var B;if(!!this.FC)this.HQ(this.FC);this.FC=(C.De.isPrototypeOf(B=A.
_NewObject(this.Abz(),0))?B:null);this.FC.H(I1);if(!!this.Bf)this.Bf.A9_([B=this.
FC,B.A9F,B.A_4]);this.J(this.FC,0);},Bld:function(G){this.Q_(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AT8:function(G){A._GetAutoObject(A.Device.Device).Zw(1);
},AT7:function(G){A._GetAutoObject(A.Device.Device).Zw(2);},AT9:function(G){A._GetAutoObject(
A.Device.Device).Zw(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).MC());},A0X:function(s){this.Q_(s);},HR:function(
G){if(this.Afn){this.ALw(this);return;}this.N.C3(A.aaL(A.ach.E2));this.N.Cu(A.aaL(
A.ach.ADW));this.N.C4(A.aaL(A.ach.Options));this.N.CF=[this,this.Ano];this.N.Cf=[
this,this.A97];this.N.Cc=[this,this.Bbt];this.N.Hz(A.jV);this.N.E5(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.IS.C0(100);this.N.
Cf=null;}else this.N.IS.C0(255);},Aow:function(s){this.HR(s);},AdR:function(Aic,
Aid,AJv){A._GetAutoObject(C.BS).ABU(Aic,Aid,[this,this.A9z,this.ATH],AJv);},AaL:
function(G){this.A4K(this);if(this.Afn)A.pe([this,this.ALw],this);},Bxi:function(
s){this.AaL(s);},Agi:function(){A._GetAutoObject(C.A5).Cd(9);},A4K:function(G){if(
!this.Bf)return;if(!A._GetAutoObject(A.Device.Device).An.QL()||!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bf.Dl(A.aaR(A.acf.AEC));else if(A._GetAutoObject(
A.Device.Helper).Arf(A._GetAutoObject(A.Device.Device).An.Filter))this.Bf.Dl(this.
KR);else if(!A._GetAutoObject(A.Device.Device).An.Filter.DN(1,4)){if(A._GetAutoObject(
A.Device.Helper).ADf(A._GetAutoObject(A.Device.Device).An.Filter)===1)this.Bf.Dl(
A.aaR(A.acf.AOd));else this.Bf.Dl(A.aaR(A.acf.AOc));}else this.Bf.Dl(A.aaR(A.acf.
ASo));},AE3:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],0));},AwU:function(
E){if(A.aaZ(this.Fk,E))return;if(!!this.Fk)A.z$([this,this.A06],this.Fk,0);this.
Fk=E;if(!!E)A.zX([this,this.A06],this.Fk,0);if(!!E)A.pe([this,this.A06],this);},
AE9:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],1));},AwZ:function(
G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],2));},ATL:function(G){var F;if(!
!this.Fk)(F=this.Fk,F[2].call(F[0],3));},ATZ:function(G){var F;if(!!this.Fk)(F=this.
Fk,F[2].call(F[0],7));},AT0:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(
F[0],5));},BiS:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GS(this.Bf.FO());this.DR.Qp(1);}},I8:function(Aic,Aid,AoV){A._GetAutoObject(
C.BS).ABU(Aic,Aid,[this,this.A9A,this.ATI],AoV);},BmC:function(G){var F;if(!!this.
Fk)(F=this.Fk,F[2].call(F[0],4));},BiO:function(G){if(!this.Bf)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());this.DR.BCf();}},BmD:function(
G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],6));},BiP:function(G){if(!this.Bf
)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());this.DR.
BCg();}},BiR:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GS(this.Bf.FO());this.DR.Qp(1024);}},BnN:function(G){var F;if(!!this.Fk)(
F=this.Fk,F[2].call(F[0],8));},Akq:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2
].call(F[0],9));},BiT:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(2);}},A6E:function(G){if(!this.Bf)return;
if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());if(A._GetAutoObject(
A.Device.Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).AZ(66,true,A.jV,0,null);else this.BB3();}},BiM:function(G){if(!
this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());
this.DR.Qp(16);}},BB3:function(){A._GetAutoObject(C.A5).Cd(94);},BiV:function(G){
if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO(
));this.DR.Qp(4);}},BiW:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(8);}},A6F:function(G){var B;if(!this.
Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());if(this.
Afn){A.zX([this,this.AAE],[B=this.DR,B.SL,B.E4],0);this.ABd(this);}this.DR.Ac9();
}},AuJ:function(Aic,Aid,ByU){A._GetAutoObject(C.BS).BhJ(Aic,Aid,ByU);},ALw:function(
G){this.N.Hz(A.jV);this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.AeA));this.N.CF=[this,this.
Bmr];this.N.T4.C0(100);this.N.T5.C0(100);var Gk=A._GetAutoObject(A.Device.Device
).An.B9();if(Gk<=0){this.N.Cu(null);this.N.C4(null);this.N.Cf=null;this.N.Cc=null;
this.N.WS=false;this.N.ZK=false;}else if(Gk===1){this.N.Cu(null);this.N.C4(A.aaL(
A.ach.AeB));this.N.Cf=null;this.N.Cc=[this,this.Aap];this.N.WS=false;this.N.ZK=false;
}else{this.N.Cu(A.aaL(A.ach.Aq7));this.N.C4(A.aaL(A.ach.Ard));this.N.Cf=[this,this.
A34];this.N.Cc=[this,this.A35];this.N.WS=true;this.N.ZK=true;}},A34:function(G){
if(!this.Bf)return;if(this.Bf.FO()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bf.GU(this.Bf.FO()+1);},A35:function(G){if(!this.Bf)return;if(this.Bf.FO()>
0)this.Bf.GU(this.Bf.FO()-1);},A$Z:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bj=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bj>=0){this.Bf.GU(Bj);A.ab5("%s",Aog);}}},Nk:function(){return this.
Bf.FO()>=0;},Ake:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agw:function(){this.BhK();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.AUR),[this,this.
A97]);A._GetAutoObject(C.BS).Fx();},Z8:function(G){if(this.Afn)this.ALw(this);else
this.HR(this);},ABd:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E9();var Aze=aFilter.DN(1,4);if(!!Aze){aFilter.Nw(Aze);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bf)this.Bf.GU(0);}},BHi:function(s){this.
ABd(s);},AAE:function(G){var B;if(!this.DR.EV&&this.Afn){A.z$([this,this.AAE],[B=
this.DR,B.SL,B.E4],0);this.ABd(this);}},Bop:function(G){var F;if(!!this.Fk)(F=this.
Fk,F[2].call(F[0],10));},BiY:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(256);}},A3T:function(G){var F;this.
ATI((F=this.Fk,F[1].call(F[0])));A.pe([this,this.Aow],this);},A06:function(s){this.
A3T(s);},Bmz:function(G){var F;if(!!this.Fk)(F=this.Fk,F[2].call(F[0],11));},BiN:
function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(
this.Bf.FO());this.DR.Qp(4096);}},BiQ:function(G){if(!this.Bf)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(16384);}},A6K:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.
FO());this.BB4();}},BB4:function(){A._GetAutoObject(C.A5).Acd(75);},A6G:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.
FO());this.DR.Qp(32768);}},A6I:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(65536);}},BiU:function(G){if(!this.
Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());this.
DR.Qp(131072);}},BhK:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arf(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.ACp));else A._GetAutoObject(C.BS).TD(A.
aaR(A.acf.ACp),[this,this.Bld]);A._GetAutoObject(C.BS).TD(A.aaR(A.acf.AkQ),[this
,this.Blf]);A._GetAutoObject(C.BS).Fx();},A6J:function(G){if(!this.Bf)return;if(
this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(128);}}
,BBP:function(G){var B;if(!this.Bf)return;A.pe([B=this.Bf,B.Ci],this);},A6H:function(
G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bf.
FO());this.DR.Qp(524288);}},BiX:function(G){if(!this.Bf)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bf.FO());this.DR.Qp(262144);}},ATH:function(E){if(this.
AUr===E)return;this.AUr=E;A.abo([this,this.A9z,this.ATH],0);},ATI:function(E){if(
this.AUs===E)return;this.AUs=E;A.abo([this,this.A9A,this.ATI],0);},A7i:function(
){return C.YD;},BgA:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E9(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?
B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Boy:function(G){A._GetAutoObject(A.Device.Device).Zw(0);
},Boz:function(G){A._GetAutoObject(A.Device.Device).Zw(14);},A_M:function(E){if(
A.aaY(this.ARM,E))return;this.ARM=E;if(!!this.Bf)this.Bf.H(E);},A9z:function(){return this.
AUr;},A9A:function(){return this.AUs;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADE._Init.call(this.V8={I:this},0);C.Kn._Init.call(this.Kn={I:this},0);
this.__proto__=C.GK;this.Background.H(Cg);this.N.Z(true);this.N.OU(true);this.N.
OV(true);this.El.A_B(A.jb.CV);this.El.A_C(A.jb.Text);this.Ds(C.Ku);this.V8.H(I1);
this.KR=A.aaR(A.acf.AEC);this.J(this.V8,0);this.DR=A._GetAutoObject(C.DR);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V8._Done();this.Kn._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V8._ReInit();
this.Kn._ReInit();this.Dl(A.aaR(A.acf.AEC));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACk={AP:null,A_:null,UN:null,AcD:
null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UN.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UN.M[2]-1,0,this.UN.M[2]+1,aSize[1]]);this.AcD.H([this.UN.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.UN.L(this.V.AQ);this.AcD.L(this.
V.AQ);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UN.R(this.AX.CE(Ad,2).toFixed());this.AcD.R(this.AX.
CE(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UN={I:this},0);A.acg.Text._Init.call(this.AcD={I:this
},0);this.__proto__=C.ACk;this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.UN.L(A.jb.Text
);this.AcD.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UN,0);this.
J(this.AcD,0);this.UN.S(A.aaL(A.fl.Af));this.AcD.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done();this.UN.
_Done();this.AcD._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UN._ReInit();this.AcD._ReInit(
);this.UN.S(A.aaL(A.fl.Af));this.AcD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad_={OG:null,SZ:null,Mu:null,Init:function(aArg){var B;A.zX([this,this.A3A],[
B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV],0);A.zX([this,this.Ady],[B=A._GetAutoObject(
A.Device.Device),B.Av$,B.AyU],0);A.pe([this,this.Ady],this);},Aj:function(Ae){C.
AB.Aj.call(this,Ae);this.SZ.R(A._GetAutoObject(A.Device.Device).Aba.toFixed()+As1
);this.OG.Z(A._GetAutoObject(A.Device.Device).AmD);},Ady:function(G){this.Am();}
,M6:function(G){A._GetAutoObject(C.A5).Fz();},A3A:function(G){if(A._GetAutoObject(
A.Device.Device).AmD===false){this.OG.Z(false);A._GetAutoObject(C.A5).Fz();}else
this.OG.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OG={I:this},0);A.acg.Text._Init.call(this.SZ={I:this},0);C.Mu._Init.call(
this.Mu={I:this},0);this.__proto__=C.Ad_;var B;this.Background.L(A.jb.CV);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OG.H(AcQ);this.OG.R(A.aaR(A.acf.OG));this.
OG.L(A.jb.Text);this.OG.Z(false);this.SZ.H(As2);this.SZ.R(As3);this.SZ.L(A.jb.Text
);this.Mu.H(As4);this.J(this.OG,0);this.J(this.SZ,0);this.J(this.Mu,0);this.N.Cc=[
this,this.M6];this.OG.S(A.aaL(A.fl.Af));this.SZ.S(A.aaL(A.fl.Af));this.Mu.Au([B=
A._GetAutoObject(A.Device.Device),B.Av$,B.AyU]);this.Mu.A_T([B=A._GetAutoObject(
A.Device.Device),B.Awc,B.AyV]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OG._Done();this.SZ._Done();this.Mu._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OG._ReInit();this.SZ._ReInit();this.Mu._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OG.R(A.aaR(A.acf.OG));this.OG.S(A.aaL(A.fl.Af)
);this.SZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mu={Ad5:null,Ad6:null,Hg:function(G){var F;if(!!this.Q){this.A2H();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gm);this.
OD.L((this.OD.AQ&0x00FFFFFF)|(this.AlL(Ada,0,20)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF
)|(this.AlL(Ada,21,40)<<24));this.TL.L((this.TL.AQ&0x00FFFFFF)|(this.AlL(Ada,41,
60)<<24));this.Ad5.L((this.Ad5.AQ&0x00FFFFFF)|(this.AlL(Ada,61,80)<<24));this.Ad6.
L((this.Ad6.AQ&0x00FFFFFF)|(this.AlL(Ada,81,100)<<24));}},A2H:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.Vc=this.Ad6;else if((F=this.Q,F[
1].call(F[0]))>60)this.Vc=this.Ad5;else if((F=this.Q,F[1].call(F[0]))>40)this.Vc=
this.TL;else if((F=this.Q,F[1].call(F[0]))>20)this.Vc=this.TK;else this.Vc=this.
OD;}else this.Vc=null;},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad5={I:this},0);A.acg.AK._Init.call(this.Ad6={I:this},0);this.__proto__=
C.Mu;this.H(Aoh);this.NY.H(Aoh);this.OD.H(As5);this.TK.H(Ala);this.TL.H(Ayh);this.
Ad5.H(Ayi);this.Ad5.L(A.jb.E1);this.Ad6.H(Ayj);this.Ad6.L(A.jb.E1);this.J(this.Ad5
,0);this.J(this.Ad6,0);this.NY.Ax(A.aaL(A.ach.AMY));},_Done:function(){this.__proto__=
C.OF;this.Ad5._Done();this.Ad6._Done();C.OF._Done.call(this);},_ReInit:function(
){C.OF._ReInit.call(this);this.Ad5._ReInit();this.Ad6._ReInit();},_Mark:function(
D){var B;C.OF._Mark.call(this,D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVm={Od:null,Lw:null,Ak3:null,Z5:null,Z4:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApK],[B=A._GetAutoObject(A.Device.Device),B.
AS0,B.A0Q],0);A.zX([this,this.ApK],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.
A0S],0);A.zX([this,this.ApK],[B=A._GetAutoObject(A.Device.Device),B.A9P,B.Bb1],0
);A.pe([this,this.ApK],this);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.GI(this
);this.ABH(this);this.BC_(this);this.DL(this);},BBr:function(G){A._GetAutoObject(
A.Device.Device).AsH();},ApK:function(G){this.Am();},GI:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z5.Z(false);break;case 4:{var A4m;if(!A._GetAutoObject(A.Device.Device).Afs)A4m=
0;else A4m=((A._GetAutoObject(A.Device.Device).AxV*100)/A._GetAutoObject(A.Device.
Device).Afs)|0;this.Z5.Bx(A4m);this.Z5.Z(true);}break;default:A.ab5("%s%e",As6,A.
_GetAutoObject(A.Device.Device).SyncState);}},BC_:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lw.L(A.jb.Text);this.Od.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gm);this.Lw.L(A.jb.Bm);this.Od.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState);}},DL:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C3(null);this.N.CF=null;this.N.CS(A.jV);this.N.Cc=null;}break;
case 7:{this.N.C3(null);this.N.CF=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Cc=[this
,this.BBr];}break;default:A.ab5("%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState
);}},ABH:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lw.R(A.aaR(A.acf.Bqt));break;case 1:this.Lw.R(A.aaR(A.acf.Bqq));break;
case 2:this.Lw.R(A.aaR(A.acf.Bqn));break;case 3:this.Lw.R(A.aaR(A.acf.Bqr));break;
case 4:this.Lw.R((A.aaR(A.acf.Bqp)+Ayk)+A._GetAutoObject(A.Device.Helper).MO(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.Bo4),O$,A._GetAutoObject(A.Device.Device).AxV.toFixed(
)),Ayl,A._GetAutoObject(A.Device.Device).Afs.toFixed()));break;case 5:this.Lw.R(
A.aaR(A.acf.Bqs));break;case 7:this.Lw.R(A.aaR(A.acf.Bqo));break;default:A.ab5("%s%e"
,As6,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Od={I:this},0);C.CG._Init.call(this.Lw={I:this
},0);A.acg.Ap._Init.call(this.Ak3={I:this},0);A.acs.ADH._Init.call(this.Z5={I:this
},0);A.acs.ADI._Init.call(this.Z4={I:this},0);this.__proto__=C.AVm;this.N.Z(true
);this.Od.H(AWi);this.Od.R(A.aaR(A.acf.Od));this.Lw.A1(0x3F);this.Lw.H(AWj);this.
Lw.A4(0x12);this.Ak3.H(AWk);this.Ak3.L(A.jb.AV);this.Z5.H(AWl);this.Z5.As(false);
this.Z5.Bx(0);this.Z4.Boj(0);this.Z4.A$f(0);this.Z4.A$d(A.jb.AV);this.Z4.A$c(0);
this.Z4.AGe(AHx);this.J(this.Od,0);this.J(this.Lw,0);this.J(this.Ak3,0);this.J(this.
Z5,0);this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(A.fl.Af));this.Od.Cm(A.aaL(A.fl.
Ak));this.Lw.S(A.aaL(A.fl.Af));this.Lw.AY(A.aaL(A.fl.Ak));this.Lw.Cm(A.aaL(A.fl.
Bg));this.Ak3.Ax(A.aaL(A.ach.AQ4));this.Z5.OnSetAppearance(this.Z4);this.Z4.A$e(
A.aaL(A.ach.N1));this.Z4.A$b(A.aaL(A.ach.N1));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Od._Done();this.Lw._Done();this.Ak3._Done();this.Z5._Done(
);this.Z4._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Od._ReInit();this.Lw._ReInit();this.Ak3._ReInit();this.Z5._ReInit();this.
Z4._ReInit();this.Od.R(A.aaR(A.acf.Od));this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(
A.fl.Af));this.Od.Cm(A.aaL(A.fl.Ak));this.Lw.S(A.aaL(A.fl.Af));this.Lw.AY(A.aaL(
A.fl.Ak));this.Lw.Cm(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Od)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqZ={_Init:function(aArg){C.ADx._Init.call(this,aArg
);this.__proto__=C.AqZ;this.A_E(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BI:A.abi(3,0,{0:2,2:1}),Dv:function(
){return 3;},C8:function(aIndex){if(aIndex>=3)return-1;return this.BI.Get(aIndex
);},Gb:function(aIndex){return this.GenderToString.BT(this.C8(aIndex));},D0:function(
A9){var O=0;while(O<3){if(this.BI.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(
){var O=0;var max=-1;while(O<3){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.J1(
E);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af4],[B=this.Animal,B.WG,B.J1],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af4],[B=this.Animal,B.WG,B.J1],0);A.pe([this,this.Af4],this);},Af4:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.Ca,
this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.BI=[]).__proto__=C.Gender.BI;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,BI:A.abi(4,0,{1:1,2:2,3:3}),Dv:function(){return 4;},C8:function(aIndex){if(
aIndex>=4)return-1;return this.BI.Get(aIndex);},Gb:function(aIndex){return this.
BirthTypeToString.BT(this.C8(aIndex));},D0:function(A9){var O=0;while(O<4){if(this.
BI.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(
O<4){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akr(E);},A1V:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.Ca,this.
Cb],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1V],[B=this.Animal,B.ASF,B.Akr],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1V],[B=this.Animal,B.ASF,B.Akr],0);A.pe([this,this.A1V],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BI=[]).__proto__=C.BirthType.BI;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acu:null,Dv:
function(){return A._GetAutoObject(A.Device.Helper).Ad0.MN;},C8:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad0.MN)return-1;return A._GetAutoObject(
A.Device.Helper).Ad0.Get(aIndex);},Gb:function(aIndex){return this.Acu.BT(this.C8(
aIndex));},D0:function(A9){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad0.
MN){if(A._GetAutoObject(A.Device.Helper).Ad0.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UK.
MN){if(A._GetAutoObject(A.Device.Helper).UK.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UK.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1O:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.Ca,this.Cb],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1O],[B=this.Animal,B.PU,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1O],[B=this.Animal,B.PU,B.EC],0);A.pe([
this,this.A1O],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acu={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acu._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acu._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AU3={Init:function(aArg){var B;A.pe([this,this.AfI],this);A.zX([this,this.AfI
],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atq],0);},A4r:function(G){A._GetAutoObject(
A.Device.Device).AZ(38,true,A.jV,0,[this,this.Bch]);},A32:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).Ast(this);},A2e:function(G){var F;if(this.A8===1){var BP=this.D8;
this.D8=this.D8-10;if(this.D8<this.AlS)this.D8=this.AlS;if(this.D8<A._GetAutoObject(
A.Device.Device).AcJ)this.D8=A._GetAutoObject(A.Device.Device).AcJ;if(this.DX!==
BP){if(!!this.J4)(F=this.J4,F[2].call(F[0],this.D8));A.abo(this.J4,0);}}if(this.
A8===2){var BP=this.DX;this.DX=this.DX-10;if(this.DX<this.D8)this.DX=this.D8;if(
this.DX!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.DX));A.abo(this.J3,0);
}}this.DL(this);this.Am();},A2Q:function(G){var F;if(this.A8===1){var BP=this.D8;
this.D8=this.D8+10;if(this.D8>this.DX)this.D8=this.DX;if(this.D8!==BP){if(!!this.
J4)(F=this.J4,F[2].call(F[0],this.D8));A.abo(this.J4,0);}}if(this.A8===2){var BP=
this.DX;this.DX=this.DX+10;if(this.DX>this.AlO)this.DX=this.AlO;if(this.DX!==BP){
if(!!this.J3)(F=this.J3,F[2].call(F[0],this.DX));A.abo(this.J3,0);}}this.DL(this
);this.Am();},GI:function(G){this.PN.R(AHy+A._GetAutoObject(A.Device.Converter).
AkY(this.D8));this.PO.R(AHy+A._GetAutoObject(A.Device.Converter).AkY(this.DX));this.
SE.R(A._GetAutoObject(A.acj.Temperature).AlM());},A2J:function(Atw){if(Atw===1)return this.
PN;else if(Atw===2)return this.PO;else return null;},_Init:function(aArg){C.Act.
_Init.call(this,aArg);this.__proto__=C.AU3;this.AlO=5000;this.AlS=3000;this.T(A.
aaR(A.acf.Arr));this.Background.H(AfF);this.V.H(BD);this.V.R(A.aaR(A.acf.AG_));this.
V.A4(0x12);this.Init(aArg);},_ReInit:function(){C.Act._ReInit.call(this);this.T(
A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG_));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Abd:null,Abh:null,Abf:
null,Background:null,Abc:null,Abg:null,Abe:null,AjC:null,Arw:null,VV:null,A6:0,BA9:
function(G){if(this.AjC.CO===6){if(this.A6===1)this.AnI(2);else if(this.A6===2)this.
AnI(3);else this.AnI(1);}else if(this.AjC.CO===7){if(this.A6===3)this.AnI(2);else
if(this.A6===2)this.AnI(1);else this.AnI(3);}},AnI:function(E){if(this.A6===E)return;
this.A6=E;switch(this.A6){case 3:this.Background.H(this.Abc.M);break;case 2:this.
Background.H(this.Abg.M);break;case 1:this.Background.H(this.Abe.M);break;default:
this.Background.H(Aoi);}},H0:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Abd={I:this},0);A.acg.Hp._Init.call(this.Abh={I:this},0);A.acg.Hp._Init.
call(this.Abf={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aep._Init.call(this.Abc={I:this},0);A.acg.Aep._Init.call(this.Abg={I:this},0);A.
acg.Aep._Init.call(this.Abe={I:this},0);A.Core.BF._Init.call(this.AjC={I:this},0
);A.Core.BF._Init.call(this.Arw={I:this},0);A.Graphics.AMQ._Init.call(this.VV={I:
this},0);this.__proto__=C.Rating;this.H(AWm);this.Abd.H(AHz);this.Abd.L(A.jb.Text
);this.Abd.AnG(Alb);this.Abd.Nu(3);this.Abd.Z(true);this.Abh.H(AHA);this.Abh.L(A.
jb.Text);this.Abh.AnG(Alb);this.Abh.Nu(3);this.Abh.Z(true);this.Abf.H(AHB);this.
Abf.L(A.jb.Text);this.Abf.AnG(Alb);this.Abf.Nu(3);this.Abf.Z(true);this.Background.
H(Aoi);this.Background.L(A.jb.AV);this.Abc.H(AHz);this.Abc.L(A.jb.E1);this.Abc.AnG(
Alb);this.Abc.Z(true);this.Abg.H(AHA);this.Abg.L(A.jb.Ia);this.Abg.AnG(Alb);this.
Abg.Z(true);this.Abe.H(AHB);this.Abe.L(A.jb.Gm);this.Abe.AnG(Alb);this.Abe.Z(true
);this.AjC.Filter=147;this.Arw.Filter=1;this.VV.BmS(360);this.VV.Bn8(22);this.VV.
Boh(2);this.J(this.Abd,0);this.J(this.Abh,0);this.J(this.Abf,0);this.J(this.Background
,0);this.J(this.Abc,0);this.J(this.Abg,0);this.J(this.Abe,0);this.Abd.ZD(this.VV
);this.Abh.ZD(this.VV);this.Abf.ZD(this.VV);this.Background.Ax(A.aaL(A.ach.N0));
this.Abc.ZD(this.VV);this.Abg.ZD(this.VV);this.Abe.ZD(this.VV);this.AjC.BG=[this
,this.BA9];this.Arw.BG=[this,this.H0];},_Done:function(){this.__proto__=A.Core.P;
this.Abd._Done();this.Abh._Done();this.Abf._Done();this.Background._Done();this.
Abc._Done();this.Abg._Done();this.Abe._Done();this.AjC._Done();this.Arw._Done();
this.VV._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Abd._ReInit();this.Abh._ReInit();this.Abf._ReInit();this.Background.
_ReInit();this.Abc._ReInit();this.Abg._ReInit();this.Abe._ReInit();this.AjC._ReInit(
);this.Arw._ReInit();this.VV._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Abd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Abc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asv={Akg:null,Asf:null,Background:null,TX:null,TR:null,Ab3:null,Ab2:null,Ab1:
null,Acy:null,Acx:null,Acw:null,Acp:null,Aco:null,AbW:null,AbV:null,Acf:null,Ace:
null,AqA:null,Init:function(aArg){},BkR:function(G){this.Ab3.R(AWn);this.Ab2.R(A.
jV);this.Ab1.R(A.jV);this.Acy.R(AWo);this.Acx.R(A.jV);this.Acw.R(A.jV);this.Acp.
R(A.jV);this.Aco.R(A.jV);this.AbW.R(A.jV);this.AbV.R(A.jV);this.Acf.R(A.jV);this.
Ace.R(A.jV);},BoM:function(G){this.TR.Z(true);this.TX.Z(true);var IH=this.Ip();if(
!IH)return;this.TX.R(IH.GetFPS().toFixed()+AHC);this.TR.R(AWp);this.TR.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akg={I:this},0);A.Core.Timer._Init.call(this.Asf={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TX={I:this},0);A.acg.
Text._Init.call(this.TR={I:this},0);A.acg.Text._Init.call(this.Ab3={I:this},0);A.
acg.Text._Init.call(this.Ab2={I:this},0);A.acg.Text._Init.call(this.Ab1={I:this}
,0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.Acx={I:
this},0);A.acg.Text._Init.call(this.Acw={I:this},0);A.acg.Text._Init.call(this.Acp={
I:this},0);A.acg.Text._Init.call(this.Aco={I:this},0);A.acg.Text._Init.call(this.
AbW={I:this},0);A.acg.Text._Init.call(this.AbV={I:this},0);A.acg.Text._Init.call(
this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:this},0);A.acg.AK._Init.call(
this.AqA={I:this},0);this.__proto__=C.Asv;this.H(AcR);this.As(false);this.Akg.PW(
2000);this.Akg.WK(1);this.Akg.As(true);this.Asf.As(true);this.Background.A1(0x3F
);this.Background.H(AcR);this.Background.L(0x78000000);this.TX.H(AWq);this.TX.A4(
0x14);this.TX.R(A.jV);this.TX.L(0xFFFFFC00);this.TX.Z(false);this.TR.H(AWr);this.
TR.A4(0x11);this.TR.R(A.jV);this.TR.Z(false);this.Ab3.H(AWs);this.Ab3.A4(0x11);this.
Ab3.R(A.jV);this.Ab2.H(AWt);this.Ab2.A4(0x11);this.Ab2.R(A.jV);this.Ab1.H(As7);this.
Ab1.A4(0x14);this.Ab1.R(A.jV);this.Acy.H(AHD);this.Acy.A4(0x11);this.Acy.R(A.jV);
this.Acx.H(AHE);this.Acx.A4(0x11);this.Acx.R(A.jV);this.Acw.H(Aym);this.Acw.A4(0x14
);this.Acw.R(A.jV);this.Acp.H(AHF);this.Acp.A4(0x11);this.Acp.R(A.jV);this.Aco.H(
Ayn);this.Aco.A4(0x14);this.Aco.R(A.jV);this.AbW.H(AWu);this.AbW.A4(0x11);this.AbW.
R(A.jV);this.AbV.H(AWv);this.AbV.A4(0x14);this.AbV.R(A.jV);this.Acf.H(AWw);this.
Acf.A4(0x11);this.Acf.R(A.jV);this.Ace.H(AWx);this.Ace.A4(0x14);this.Ace.R(A.jV);
this.AqA.H(AHG);this.J(this.Background,0);this.J(this.TX,0);this.J(this.TR,0);this.
J(this.Ab3,0);this.J(this.Ab2,0);this.J(this.Ab1,0);this.J(this.Acy,0);this.J(this.
Acx,0);this.J(this.Acw,0);this.J(this.Acp,0);this.J(this.Aco,0);this.J(this.AbW,
0);this.J(this.AbV,0);this.J(this.Acf,0);this.J(this.Ace,0);this.J(this.AqA,0);this.
Akg.MK=[this,this.BkR];this.Asf.MK=[this,this.BoM];this.TX.S(A.aaL(A.fl.Ak));this.
TR.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));this.
Ab1.S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acx.S(A.aaL(A.fl.Ak));this.
Acw.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.S(A.aaL(A.fl.Ak));this.
AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.
Ace.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akg._Done();this.Asf._Done();this.Background._Done();this.TX._Done();this.TR.
_Done();this.Ab3._Done();this.Ab2._Done();this.Ab1._Done();this.Acy._Done();this.
Acx._Done();this.Acw._Done();this.Acp._Done();this.Aco._Done();this.AbW._Done();
this.AbV._Done();this.Acf._Done();this.Ace._Done();this.AqA._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akg._ReInit();this.
Asf._ReInit();this.Background._ReInit();this.TX._ReInit();this.TR._ReInit();this.
Ab3._ReInit();this.Ab2._ReInit();this.Ab1._ReInit();this.Acy._ReInit();this.Acx.
_ReInit();this.Acw._ReInit();this.Acp._ReInit();this.Aco._ReInit();this.AbW._ReInit(
);this.AbV._ReInit();this.Acf._ReInit();this.Ace._ReInit();this.AqA._ReInit();this.
TX.S(A.aaL(A.fl.Ak));this.TR.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.Ab2.
S(A.aaL(A.fl.Ak));this.Ab1.S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acx.
S(A.aaL(A.fl.Ak));this.Acw.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.
S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.Acf.
S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asf).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGR={FN:null,Dm:null,Av:null,JB:null,HN:null,Uk:null,Bb:null,Ss:null,Gz:null
,Gy:null,F_:0,A8:0,Bko:false,Init:function(aArg){},Aj:function(Ae){C.Dt.Aj.call(
this,Ae);this.Hy.Z(false);this.H8.Z(false);if(!!this.Dm){this.Ss.R(this.Av.Format(
AWy));this.Uk.R(this.Av.Format(MS));}if(this.A8===1){this.HN.Z(true);this.HN.H(this.
Ss.M);this.HN.L(A.jb.Bm);this.Ss.L(this.Background.AQ);this.Uk.L(A.jb.Bm);}else if(
this.A8===2){this.HN.Z(true);this.HN.H(this.Uk.M);this.HN.L(A.jb.Bm);this.Ss.L(A.
jb.Bm);this.Uk.L(this.Background.AQ);}else{this.HN.Z(false);this.Ss.L(this.V.AQ);
this.Bb.L(this.V.AQ);this.Uk.L(this.V.AQ);}},Qu:function(G){if(this.FH===1)A.pe([
this,this.Vh],this);else if(this.FH===4)A.pe([this,this.AiE],this);else if(this.
FH===5)A.pe([this,this.Aip],this);C.Dt.Qu.call(this,G);},Kh:function(G){switch(this.
A8){case 0:C.Dt.Kh.call(this,G);break;case 2:break;default:this.Adx(this);}},Kc:
function(G){switch(this.A8){case 0:C.Dt.Kc.call(this,G);break;default:this.Aio(this
);}},Adz:function(G){var F;if(!!this.Dm)this.Ut((F=this.Dm,F[1].call(F[0])));},Aca:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.Adz],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.Adz],E,0);if(!!E)A.pe([this,this.Adz],this);
},Ut:function(E){if(this.F_===E)return;this.F_=E;this.Av.Initialize(this.F_);this.
Am();},Adx:function(G){this.FH=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vh],this
);this.Bo.As(false);}this.Bo.As(true);},Vh:function(G){this.Ex(this.A8+1);},Al4:
function(G){this.FH=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiE],this);this.Bo.
As(false);}this.Bo.As(true);},Al3:function(G){this.FH=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aip],this);this.Bo.As(false);}this.Bo.As(true);},AiE:function(G){
var B;var F;var BP=this.F_;if(this.A8===1)this.Av.AnB(this.Av.AjQ+1);if(this.A8===
2)this.Av.AnE(this.Av.Av3+1);this.Av.AnH(0);this.Ut(((B=(this.Av.JZ()|0))<0)?B+0x100000000:
B);if(this.F_!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.F_));A.abo(this.
Dm,0);}},Aip:function(G){var B;var F;var BP=this.F_;if(this.A8===1)this.Av.AnB(this.
Av.AjQ-1);if(this.A8===2)this.Av.AnE(this.Av.Av3-1);this.Av.AnH(0);this.Ut(((B=(
this.Av.JZ()|0))<0)?B+0x100000000:B);if(this.F_!==BP){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.F_));A.abo(this.Dm,0);}},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.Vh];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},FY:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){
var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;this.Bko=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DL(this);this.Gz.Bw=!!this.A8;this.Gy.
Bw=!!this.A8;this.Am();},Aio:function(G){if(this.A8>1)this.Ex(this.A8-1);},_Init:
function(aArg){C.Dt._Init.call(this,aArg);A.Core.Bq._Init.call(this.Av={I:this},
0);A.Core.BF._Init.call(this.JB={I:this},0);A.acg.AK._Init.call(this.HN={I:this}
,0);A.acg.Text._Init.call(this.Uk={I:this},0);A.acg.Text._Init.call(this.Bb={I:this
},0);A.acg.Text._Init.call(this.Ss={I:this},0);A.Core.BF._Init.call(this.Gz={I:this
},0);A.Core.BF._Init.call(this.Gy={I:this},0);this.__proto__=C.AGR;this.H(Aam);this.
V.R(Ayo);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H8.Z(false);this.JB.Filter=1;this.
HN.H(AWz);this.HN.L(0x55FFFFFF);this.Uk.H(AWA);this.Uk.Je(true);this.Bb.H(AWB);this.
Bb.A4(0x14);this.Bb.R(AWC);this.Ss.H(AWD);this.Ss.Je(true);this.Ss.A4(0x14);this.
Gz.Filter=4;this.Gz.Bw=false;this.Gy.Filter=5;this.Gy.Bw=false;this.J(this.HN,0);
this.J(this.Uk,0);this.J(this.Bb,0);this.J(this.Ss,0);this.JB.BG=[this,this.Adx];
this.Uk.S(A.aaL(A.fl.EK));this.Bb.S(A.aaL(A.fl.EK));this.Ss.S(A.aaL(A.fl.EK));this.
Gz.BG=[this,this.Al4];this.Gz.D2=[this,this.AiE];this.Gy.BG=[this,this.Al3];this.
Gy.D2=[this,this.Aip];this.FN=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dt;this.Av._Done();this.JB._Done();this.HN._Done();this.Uk._Done(
);this.Bb._Done();this.Ss._Done();this.Gz._Done();this.Gy._Done();C.Dt._Done.call(
this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Av._ReInit();this.JB._ReInit(
);this.HN._ReInit();this.Uk._ReInit();this.Bb._ReInit();this.Ss._ReInit();this.Gz.
_ReInit();this.Gy._ReInit();this.Uk.S(A.aaL(A.fl.EK));this.Bb.S(A.aaL(A.fl.EK));
this.Ss.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((
B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B8:null,AmS:null,AqP:null,En:null,Text:null,String:A.jV,Bej:A.jV,Km:0x12
,ALe:0,AQ:0xFFFFFFFF,Oa:0,AUK:0,A$M:0,Bek:true,G4:function(CM){var LO=(A.Core.ARG.
isPrototypeOf(CM)?CM:null);if(!!LO)this.BDj(this);return A.Core.P.G4.call(this,CM
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Aji],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bek){this.Bej=E;this.Bek=false;
}this.ALe=E.length;A.pe([this,this.Aji],this);},S:function(E){if(this.B8===E)return;
this.B8=E;A.pe([this,this.Aji],this);},AY:function(E){if(this.AmS===E)return;this.
AmS=E;A.pe([this,this.Aji],this);},Cm:function(E){if(this.AqP===E)return;this.AqP=
E;A.pe([this,this.Aji],this);},A4:function(E){if(E===this.Km)return;this.Km=E;this.
Text.A4(E);},Aji:function(G){var B;var ALk=0;if(!this.ALe){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.Lu(false);if(!!this.B8){ALk=
this.B8.YB(this.String,0,this.ALe);if(ALk<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)
)){this.Text.S(this.B8);this.Text.Aw9(this.Oa);return;}}this.Text.Lu(true);if(!!
this.AmS){ALk=this.AmS.YB(this.String,0,this.ALe);this.Text.S(this.AmS);this.Text.
Aw9(this.AUK);if((ALk<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqP){this.Text.S(this.AqP);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw9((((this.Text.
B8.Ascent+this.Text.B8.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BDj:function(G){this.R(this.Bej);},Q7:function(E){if(
A.aa0(this.En,E))return;this.En=E;this.Text.Q7(E);},ASD:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afg:function(AoJ){return A.abf(this.M.slice(
0,2),this.Text.Afg(AoJ));},Aw9:function(E){if(this.Oa===E)return;this.Oa=E;A.pe([
this,this.Aji],this);},Bn_:function(E){if(this.AUK===E)return;this.AUK=E;A.pe([this
,this.Aji],this);},Bn$:function(E){if(this.A$M===E)return;this.A$M=E;A.pe([this,
this.Aji],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHH);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHH);this.Text.R(Rp);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.En)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjO={Y:null,IR:null,AeM:null,Jb:null,Nh:null,AeG:null,AeL:null,AeK:null,AeH:
null,AeJ:null,AeI:null,Nj:null,N2:null,MD:null,Dg:function(E){C.YC.Dg.call(this,
E);this.IR.L(E);this.AeM.L(E);this.Jb.L(E);this.Nh.L(E);this.MD.L(E);this.AeG.L(
E);this.Nj.L(E);this.N2.L(E);this.AeL.L(E);this.AeK.L(E);this.AeH.L(E);this.AeJ.
L(E);this.AeI.L(E);},DY:function(G){C.YC.DY.call(this,G);this.XU(8,1,this.Nh);this.
XU(12,1,this.MD);this.XU(11,1,this.AeG);this.XU(7,1,this.Nj);this.XU(14,1,this.N2
);this.XU(1,4,this.IR);this.XU(1,1,this.AeM);this.XU(4,1,this.Jb);this.XU(22,1,this.
AeL);this.XU(26,1,this.AeK);this.XU(30,1,this.AeH);this.XU(19,1,this.AeJ);this.XU(
31,1,this.AeI);this.Text.Z(!this.Y.TU(null,0x1));},XU:function(AJw,Ec,AfV){var ABo=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adj=A._GetAutoObject(
A.Device.Device).An.Filter.DN(AJw,Ec);if(!!Adj){ABo=true;switch(AJw){case 14:{var
AzD=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adj)?Adj:null);if(!!AzD)AfV.
Ax(A._GetAutoObject(A.Device.Converter).A5D(AzD.A6));}break;case 7:{var AzD=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adj)?Adj:null);if(!!AzD)AfV.Ax(A._GetAutoObject(
A.Device.Converter).AmU(AzD.A6));}break;case 1:if(Ec===4)AfV.Ax(A.aaL(A.ach.ADW)
);else if(Adj.Operator===4)ABo=false;break;case 22:switch(Adj.Operator){case 0:case
3:AfV.Ax(A.aaL(A.ach.AQM));break;default:AfV.Ax(A.aaL(A.ach.AjU));}break;case 26:
switch(Adj.Operator){case 0:case 3:AfV.Ax(A.aaL(A.ach.AQK));break;default:AfV.Ax(
A.aaL(A.ach.AvC));}break;default:;}}else if((AJw===1)&&(Ec===4)){ABo=true;AfV.Ax(
A.aaL(A.ach.AeC));}}else if((AJw===1)&&(Ec===4)){ABo=true;AfV.Ax(A.aaL(A.ach.AeC
));}AfV.Z(ABo);},_Init:function(aArg){C.YC._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(
this.AeM={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);A.acg.Ap._Init.call(
this.Nh={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);A.acg.Ap._Init.call(
this.N2={I:this},0);A.acg.Ap._Init.call(this.MD={I:this},0);this.__proto__=C.AjO;
this.Y.A1(0x3F);this.Y.H(AWE);this.Y.J0(3);this.IR.H(Ayp);this.AeM.H(AWF);this.AeM.
Ai(true);this.Jb.H(As8);this.Jb.Ai(true);this.Nh.H(Ayq);this.Nh.Ai(true);this.AeG.
H(AWG);this.AeG.Ai(true);this.AeL.H(AHI);this.AeL.Ai(true);this.AeK.H(AHI);this.
AeK.Ai(true);this.AeH.H(AWH);this.AeH.Ai(true);this.AeJ.H(AHJ);this.AeJ.Ai(true);
this.AeI.H(AHJ);this.AeI.Ai(true);this.Nj.H(AHK);this.Nj.Ai(true);this.N2.H(AHL);
this.N2.Ai(true);this.Text.R(A.aaR(A.acf.None));this.MD.H(AHK);this.MD.Ai(true);
this.J6(this.Gw,-3);this.J6(this.D3,-3);this.J6(this.A_,-3);this.J6(this.AP,-2);
this.J(this.Y,-2);this.J(this.IR,-2);this.J(this.AeM,-2);this.J(this.Jb,-2);this.
J(this.Nh,-2);this.J(this.AeG,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(
this.AeH,-2);this.J(this.AeJ,-2);this.J(this.AeI,-2);this.J(this.Nj,-2);this.J(this.
N2,-2);this.J(this.MD,0);this.IR.Ax(A.aaL(A.ach.AeC));this.AeM.Ax(A.aaL(A.ach.AQz
));this.Jb.Ax(A.aaL(A.ach.APX));this.Nh.Ax(A.aaL(A.ach.ADR));this.AeG.Ax(A.aaL(A.
ach.Ag4));this.AeL.Ax(A.aaL(A.ach.AjU));this.AeK.Ax(A.aaL(A.ach.AvC));this.AeH.Ax(
A.aaL(A.ach.AQw));this.AeJ.Ax(A.aaL(A.ach.AQx));this.AeI.Ax(A.aaL(A.ach.AQv));this.
Nj.Ax(A.aaL(A.ach.ADT));this.N2.Ax(A.aaL(A.ach.AvG));this.MD.Ax(A.aaL(A.ach.ADZ)
);},_Done:function(){this.__proto__=C.YC;this.Y._Done();this.IR._Done();this.AeM.
_Done();this.Jb._Done();this.Nh._Done();this.AeG._Done();this.AeL._Done();this.AeK.
_Done();this.AeH._Done();this.AeJ._Done();this.AeI._Done();this.Nj._Done();this.
N2._Done();this.MD._Done();C.YC._Done.call(this);},_ReInit:function(){C.YC._ReInit.
call(this);this.Y._ReInit();this.IR._ReInit();this.AeM._ReInit();this.Jb._ReInit(
);this.Nh._ReInit();this.AeG._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.
AeH._ReInit();this.AeJ._ReInit();this.AeI._ReInit();this.Nj._ReInit();this.N2._ReInit(
);this.MD._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.YC.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amu={H$:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);this.H$.G8();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An8:function(){C.Re.
An8.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).BAh(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ly));this.C_.L(A._GetAutoObject(
A.acj.Temperature).BAk(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Ly));this.JU.L(A._GetAutoObject(A.acj.Temperature).BAi(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ly));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).BAj(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Ly));this.MP.L(this.JU.AQ);this.TemperatureUnit.
L(this.JU.AQ);}break;default:;}},Z8:function(){C.Re.Z8.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cu(A.aaL(A.ach.AQX));this.N.C4(A.aaL(
A.ach.Am2));}break;case 4:{this.N.Cu(null);this.N.C4(A.aaL(A.ach.AvO));}break;default:;
}},W0:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ly>3240)&&(A._GetAutoObject(A.Device.
Device).Ly<5460)){A._GetAutoObject(A.Device.Device).AhL();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H$.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Ly);var B2=A._GetAutoObject(A.Device.Converter).AsJ(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ly);this.H$.OnSetRatingTemperature(
B2);this.H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();
}break;case 4:this.AKK(this);break;default:;}},AkT:function(G){C.Re.AkT.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKK(this);break;default:;}},Ax0:function(
){C.Re.Ax0.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JU.R(A._GetAutoObject(A.acj.Temperature).BAp(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Ly));break;default:;}},Ax1:function(
){C.Re.Ax1.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WM(A._GetAutoObject(A.acj.Temperature).BAl(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Ly));this.Jk.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WM(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AUX:function(){this.C_.Ax(
A.aaL(A.ach.AvN));this.C_.Cx(A._GetAutoObject(A.acj.Temperature).BAq(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Ly));this.N0.Cx(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amu;this.Ds(
C.IP);this.H$=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.Ahy={N$:null,DM:null,Io:null,Bb:null,AuC:null,String:A.jV,AxP:A.jV,MG:7,Aj9:
2,KW:0,AU_:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DM.H([0,0,aSize[0]-this.Aj9,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DM.
S(A.aaL(A.fl.Bg));else this.DM.S(A.aaL(A.fl.Ak));this.Io.S(this.DM.B8);this.Io.H(
this.DM.M);this.Bb.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WR],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DM.R(E);},Aht:function(
E){if(this.AxP===E)return;this.AxP=E;this.Io.R(E);},Ab$:function(E){this.MG=E;if(
E<10)this.ATs(2);else if(E<40)this.ATs(1);else this.ATs(0);A.pe([this,this.WR],this
);},WR:function(G){var B;while(!!this.Bb.Ah)this.HQ(this.Bb.Ah);if(this.MG>1){var
Ade=this.AOU();var A2C=this.AOS();var Apo=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAh;var AK_;var Aub;var Al$=null;if(!!this.N$&&(this.N$.A0>0))Al$=this.N$.K4;
while((Ade>=A2C)&&(Ade>0)){var AtO=A._NewObject(C.Ajs,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*(((Ade-A2C)/86400)|0))/this.MG)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Aj9)*((((Ade-A2C)/86400)|0)+1))/this.MG)|0;while(!!Al$&&(Al$.Timestamp>=
Ade)){if(Al$.Timestamp<(Ade+86400))AtO.OA(Al$.A6,Al$.Timestamp);Al$=Al$.Ah;}var Aun=
0;if(AtO.A0>0)Aun=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]))/AtO.A0
)|0;else if(this.MG<10){Aun=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]);
Aub=A._NewObject(A.acg.Text,0);Aub.H([x1,Apo,x2,Apo+Aun]);Aub.S(A.aaL(A.fl.Bg));
Aub.L(A.jb.Text);Aub.R(A.aaR(A.acf.Afc));this.J(Aub,0);}var AJY=AtO.K4;var O=0;while(
!!AJY){if(O>=AtO.A0)throw new Error(AWI);AAh=A._NewObject(A.acg.AK,0);AAh.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJY.A6));if(O===(AtO.A0-1))AAh.H([x1,Apo+(O*Aun),x2,this.Bb.
M[1]]);else AAh.H([x1,Apo+(O*Aun),x2,Apo+((O+1)*Aun)]);this.J(AAh,0);AJY=AJY.Ah;
O=O+1;}if(this.AU_){var By1=A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(
A.Device.Helper).Dr());var By0=A._GetAutoObject(A.Device.Helper).Aqp(Ade);if(By1===
By0){var ALC=A._NewObject(A.acg.Aep,0);ALC.L(A.jb.Text);var BeI=(x1+this.Aj9)+(((
x2-x1)/2)|0);ALC.H([BeI-4,this.Bb.M[1]-4,BeI+4,this.Bb.M[1]]);ALC.ZD(this.AuC);this.
J(ALC,0);}}Ade=Ade-86400;if(this.Aj9>0){AK_=A._NewObject(A.acg.AK,0);AK_.H([x1,Apo
,x1+this.Aj9,Apo+((((B=this.M)[3]-B[1])/2)|0)]);AK_.L(A.jb.Bb);this.J(AK_,0);}}}
},Acb:function(E){this.N$=E;A.pe([this,this.WR],this);},ATs:function(E){if(this.
Aj9===E)return;this.Aj9=E;A.pe([this,this.WR],this);},Dg:function(E){if(this.KW===
E)return;this.KW=E;this.DM.L(E);this.Io.L(E);},AOS:function(){var B;return this.
AOU()-(((((B=this.MG)<0)?B+0x100000000:B)-1)*86400);},AOU:function(){return A._GetAutoObject(
A.Device.Converter).AhP();},Bod:function(E){if(this.AU_===E)return;this.AU_=E;A.
pe([this,this.WR],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DM={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0
);A.acg.AK._Init.call(this.Bb={I:this},0);C.AxY._Init.call(this.AuC={I:this},0);
this.__proto__=C.Ahy;this.H(BD);this.As(false);this.DM.H(AHM);this.DM.Ho(5);this.
DM.A4(0x11);this.DM.L(A.jb.Text);this.Io.H(AHM);this.Io.Ho(5);this.Io.A4(0x14);this.
Io.L(A.jb.Text);this.Bb.H(AWJ);this.Bb.L(A.jb.Bb);this.KW=A.jb.Text;this.AuC.H(AWK
);this.J(this.DM,0);this.J(this.Io,0);this.J(this.Bb,0);this.DM.S(A.aaL(A.fl.Ak)
);this.Io.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DM._Done();this.Io._Done();this.Bb._Done();this.AuC._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DM._ReInit(
);this.Io._ReInit();this.Bb._ReInit();this.AuC._ReInit();this.DM.S(A.aaL(A.fl.Ak
));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5J={Ah:null,Timestamp:0,A6:0,_Init:function(
aArg){this.__proto__=C.A5J;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajs={K4:null,M4:null,A0:0,OA:
function(A9,Qi){var Hi;Hi=A._NewObject(C.A5J,0);Hi.A6=A9;Hi.Timestamp=Qi;if(!this.
K4){this.K4=Hi;this.M4=Hi;this.A0=1;}else{this.M4.Ah=Hi;this.M4=Hi;this.A0=this.
A0+1;}},_Init:function(aArg){this.__proto__=C.Ajs;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ek={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MT],this);},DG:function(G){var B;var Ff=0;var X=this.AV;switch(
this.Cr.CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;
default:;}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HJ(X,true,null,null);this.DL(this);},Al2:function(G){A._GetAutoObject(C.A5
).Fz();},ApJ:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null).Agv)A.
pe((C.Cp.isPrototypeOf(B=this.AV)?B:null).Agv,this);},Fh:function(G){var B;this.
Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Bs[1]);},DL:function(G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);if(
!!G0){this.N.Hz(A.jV);this.N.CS(G0.AxS);this.N.Jj.C0(255);this.N.GX.C0(G0.Axo);this.
N.AFo(G0.Avq);this.N.Anz(G0.AmT);this.N.C3(G0.AQq);this.N.C4(G0.Aq8);G0.A3H(this
);}},MT:function(s){this.DL(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ek;this.Background.H(Rq);this.Background.L(A.jb.CV);this.N.H(U4);this.
N.As(false);this.N.Z(true);this.Y.H(Fc);this.Y.J0(1);this.Ay.H(Iw);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.En=[this,this.Fh];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AUd={NL:null,AS9:null,Ad4:null,VO:null,GW:null,PopupTimeout:null,Acg:null,AgF:
null,PopupIdToString:null,AtJ:null,Text:A.jV,AkE:A.jV,AKf:A.jV,Ak0:0,ALm:-1,AzC:-
1,AKR:0,AUf:0,A2M:false,CP:function(){this.A__(this.PopupIdToString.BT(this.AUf)
);},Init:function(aArg){this.BpH(this);},Bhu:function(G){var B;if(this.Ak0>0){this.
A$m((this.Ak0/1000)|0);this.PopupTimeout.WK(0);this.PopupTimeout.PW(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxO(this);},Bhq:function(G){var M8=this.
Text;var AfY=this.AkE;var AKP=A.abi(16,A.jV,null);var index=0;var Azx=0;while(AfY
!==A.jV){Azx=AfY.indexOf(A.Device.PopupParamSeparator,0);if(Azx!==-1){AKP.Set(index
,A.ab1(AfY,Azx,(AfY.length-Azx)+1));AfY=A.ab1(AfY,0,Azx+1);index=index+1;if(index>=
16){A.ab5("%s",(AWL+AfY)+AWM);AfY=A.jV;}}else{AKP.Set(index,AfY);AfY=A.jV;}}index=
0;while(index<M8.length){if((M8.charCodeAt(index)||0)===0x7B){var Bei=M8.indexOf(
String.fromCharCode(0x7D),index);if(Bei===-1){A.ab5("%s",(((AWN+M8)+AWO)+index.toFixed(
))+Ak_);index=M8.length;}else{var Bf$=(Bei-index)-1;var A4i=A.abW(M8,index+1,Bf$
);var AKO=A.wz(A4i,-1,10);M8=A.ab1(M8,index,Bf$+2);if(A4i===AWP)this.Bov(index);
else if(((AKO>0)&&(AKO<=16))&&(this.AkE!==A.jV)){M8=A.abU(M8,AKP.Get(AKO-1),index
);if(this.A2M===true)this.Bou(A.wz(AKP.Get(AKO-1),0,10));}else A.ab5("%s",(AWQ+A4i
)+AWR);}}index=index+1;}this.Bot(M8);},CC:function(G){A.pe([this,this.Bhu],this);
},Aj:function(Ae){var B;this.Ad4.H(A.aaT(this.GW.Dd(),AhW));this.VO.H(A.aaT(this.
GW.Dd(),AhW));if(!!this.NL){this.NL.H(A.abM(this.NL.M,this.GW.M[0]));this.NL.H(A.
abO(this.NL.M,this.GW.M[3]+10));this.NL.H(A.abL(this.NL.M,(B=this.GW.M)[2]-B[0])
);this.NL.H(A.abI(this.NL.M,8));this.Ad4.H(A.abh(A.aaT(this.GW.Dd(),AhW),AHN));this.
VO.H(A.abh(A.aaT(this.GW.Dd(),AhW),AHN));}else{this.Ad4.H(A.aaT(this.GW.Dd(),AhW
));this.VO.H(A.aaT(this.GW.Dd(),AhW));}},DG:function(G){var JI=(A.Core.BF.isPrototypeOf(
G)?G:null);if((JI.CO===4)&&((this.VO.M[1]+this.M[1])<this.M[1])){this.GW.H(A.abO(
this.GW.M,this.GW.M[1]+28));this.Am();}else if((JI.CO===5)&&((this.VO.M[3]+this.
M[1])>this.N.M[1])){this.GW.H(A.abO(this.GW.M,this.GW.M[1]-28));this.Am();}if((JI.
CO===6)&&!!this.D$().CF)this.D$().AFw(1);else if((JI.CO===7)&&!!this.D$().Cc)this.
D$().AFw(3);},H0:function(G){switch(this.D$().Ahj){case 1:this.Al2(this);break;case
3:this.ApJ(this);break;case 2:this.AAP(this);break;case 0:break;default:A.ab5("%s%e"
,AWS,this.D$().Ahj);}},Al2:function(G){var B;(B=this.D$().CF)?B[1].call(B[0],this
):null;},ApJ:function(G){var B;(B=this.D$().Cc)?B[1].call(B[0],this):null;},AAP:
function(G){var B;(B=this.D$().Cf)?B[1].call(B[0],this):null;},LU:function(G){this.
N.IS.L((this.N.IS.AQ&0x00FFFFFF)|(100<<24));},E3:function(G){var B;this.PopupTimeout.
AxO(this);},A__:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhq],this);},BBw:function(G){var B;this.A$m(this.AzC-1);if(this.AzC<=0){this.PopupTimeout.
AxO(this);(B=this.AS9)?B[1].call(B[0],this):null;}},A$a:function(E){if(this.Ak0===
E)return;this.Ak0=E;A.pe([this,this.Bhu],this);},A_X:function(E){if(this.AkE===E
)return;this.AkE=E;A.pe([this,this.Bhq],this);},Bot:function(E){if(this.AKf===E)
return;this.AKf=E;this.ABH(this);this.By8(this);},ABH:function(G){if((this.AzC!==-
1)&&(this.ALm!==-1)){var Bz1=this.AtJ.Format(AWT);this.GW.R(A.abU(this.AKf,Bz1,this.
ALm));}else this.GW.R(this.AKf);this.GW.H(AHO);},Bov:function(E){if(this.ALm===E
)return;this.ALm=E;this.ABH(this);},A$m:function(E){if(this.AzC===E)return;this.
AzC=E;this.AtJ.AF1(E);A.pe([this,this.ABH],this);},By8:function(G){this.GW.Dd();
if(this.GW.M[1]<=this.M[1])this.GW.H(A.abO(this.GW.M,28));this.Am();},A$o:function(
E){if(this.A2M===E)return;this.A2M=E;if(E===true)A.pe([this,this.BB8],this);},BB8:
function(G){if(!this.NL){this.NL=A._NewObject(A.acs.ADH,0);this.NL.Ge(0);this.NL.
EU(100);this.NL.OnSetAppearance(this.Acg);this.J(this.NL,0);this.AhB(this.NL,this.
GW);}this.NL.Bx(this.AKR);},Bou:function(E){if(this.AKR===E)return;this.AKR=E;if(
!!this.NL)this.NL.Bx(this.AKR);},BpH:function(G){var B;this.N.C0(0);this.AgF.AnW(
this);},Bn4:function(E){if(this.AUf===E)return;this.AUf=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad4={I:this},0);A.acg.BX._Init.
call(this.VO={I:this},0);A.acg.Text._Init.call(this.GW={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADI._Init.call(this.Acg={I:this},
0);A.acl.Go._Init.call(this.AgF={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bq._Init.call(this.AtJ={I:this},0);this.
__proto__=C.AUd;var B;this.H(Cg);this.Background.H(Fc);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.El.As(false);this.El.Z(false);this.Ad4.H(AHP);this.
Ad4.L(A.jb.CK);this.VO.H(AHP);this.VO.Nu(2);this.VO.L(A.jb.Text);this.GW.H(AHO);
this.GW.Ho(10);this.GW.Je(true);this.GW.Bor(0);this.GW.Lu(true);this.GW.L(A.jb.Text
);this.PopupTimeout.PW(0);this.Acg.A$f(0);this.Acg.A$d(A.jb.AV);this.Acg.A$c(0);
this.Acg.AGe(AHx);this.AgF.HP(1);this.AgF.B3=255;this.AgF.Cy=0;this.J6(this.El,-
1);this.J(this.Ad4,0);this.J(this.VO,0);this.J(this.GW,0);this.GW.S(A.aaL(A.fl.Af
));this.PopupTimeout.MK=[this,this.BBw];this.Acg.A$e(A.aaL(A.ach.N1));this.Acg.A$b(
A.aaL(A.ach.N1));this.AgF.Q=[B=this.N,B.Awn,B.A0K];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad4._Done();this.VO._Done();this.GW._Done();this.PopupTimeout.
_Done();this.Acg._Done();this.AgF._Done();this.PopupIdToString._Done();this.AtJ.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad4._ReInit();this.VO._ReInit();this.GW._ReInit();this.PopupTimeout._ReInit();this.
Acg._ReInit();this.AgF._ReInit();this.PopupIdToString._ReInit();this.AtJ._ReInit(
);this.GW.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS9)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtJ)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.My={Aj:function(Ae
){C.Cp.Aj.call(this,Ae);var FV=A.jb.CK;var GZ=A.jb.Text;if(this.Hm){FV=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FV);this.V.L(A.jb.Am3);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.My;},_className:"Application::DarkThemeMenuItem"
};C.Anh={AdD:0,_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.
Anh;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaN:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lq:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Cc=[this,this.A3I];this.BQ.Cf=null;this.BQ.CF=[this,this.AaN];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.AeA));}return this.
BQ;},A3I:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null))(C.Cp.isPrototypeOf(
B=this.AV)?B:null).H0(this);},CC:function(G){},AIU:function(s){this.CC(s);},E3:function(
G){},AyT:function(s){this.E3(s);},_Init:function(aArg){C.Abp._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APR={Wf:
null,YY:null,YR:null,Init:function(aArg){this.Ba(this.Wf);},Adu:function(G){var Aa=(
C.Cp.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YY)A._GetAutoObject(A.Device.
Device).AZ(6,true,A.jV,0,[this,this.BCk]);else if(Aa===this.Wf)A._GetAutoObject(
A.Device.Device).AZ(9,true,A.jV,0,[this,this.BCF]);else if(Aa===this.YR)A._GetAutoObject(
C.A5).Cd(4);else throw new Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},
BCk:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGA();},BCF:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).AxF();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.My._Init.call(this.Wf={I:this},0);C.My._Init.call(this.YY={I:this
},0);C.My._Init.call(this.YR={I:this},0);this.__proto__=C.APR;this.H(AcR);this.Wf.
H(BD);this.Wf.As(true);this.Wf.T(A.aaR(A.acf.A$4));this.Wf.Bh(true);this.YY.H(I1
);this.YY.As(true);this.YY.T(A.aaR(A.acf.A$L));this.YY.Bh(true);this.YR.H(Qc);this.
YR.As(true);this.YR.T(A.aaR(A.acf.SZ));this.YR.Bh(true);this.J(this.Wf,0);this.J(
this.YY,0);this.J(this.YR,0);this.Wf.AR=[this,this.Adu];this.YY.AR=[this,this.Adu
];this.YR.AR=[this,this.Adu];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wf._Done();this.YY._Done();this.YR._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wf._ReInit(
);this.YY._ReInit();this.YR._ReInit();this.Wf.T(A.aaR(A.acf.A$4));this.YY.T(A.aaR(
A.acf.A$L));this.YR.T(A.aaR(A.acf.SZ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GL={AaJ:null,OverlayMenu:null,WV:null,A4D:null
,Le:null,A4h:null,AkG:null,N9:null,AAn:100,Bde:false,Init:function(aArg){var B;A.
zX([this,this.BfD],[B=A._GetAutoObject(A.Device.Device),B.Awo,B.Ay2],0);A.zX([this
,this.Bfy],[B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0I],0);A.zX([this,this.
A3A],[B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV],0);A.zX([this,this.BA4],[
B=A._GetAutoObject(A.Device.Device),B.Av$,B.AyU],0);A.zX([this,this.BA5],[B=A._GetAutoObject(
A.Device.Device),B.A85,B.BbG],0);A.zX([this,this.ApK],[B=A._GetAutoObject(A.Device.
Device),B.AS0,B.A0Q],0);A.zX([this,this.BfT],[B=A._GetAutoObject(A.Device.Device
),B.Ur,B.U$],0);A.pe([this,this.BfD],this);A.pe([this,this.Bfy],this);A.pe([this
,this.ApK],this);A.pe([this,this.BfT],this);this.A4D.Au([B=this.WV,B.AEL,B.Zv]);
this.J(this.WV,0);this.Ba(this.WV);this.ByL(this);},Aj:function(Ae){},Bfy:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEx){if(!this.AaJ){this.AaJ=A._NewObject(
C.Asv,0);this.AaJ.H(A.abJ(this.AaJ.M,this.WV.M.slice(0,2)));this.AaJ.H(A.abO(this.
AaJ.M,this.WV.M[3]-((B=this.AaJ.M)[3]-B[1])));this.J(this.AaJ,1);}}else{if(!!this.
AaJ)this.HQ(this.AaJ);this.AaJ=null;}},BfD:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APR,0));break;case 8:this.Dw(A._NewObject(C.AL_,0));break;case 2:this.Dw(A._NewObject(
C.AL7,0));break;case 3:this.Dw(A._NewObject(C.AMc,0));break;case 4:this.Dw(A._NewObject(
C.AUx,0));break;case 5:this.Dw(A._NewObject(C.AV6,0));break;case 6:this.Dw(A._NewObject(
C.AT_,0));break;case 7:this.Dw(A._NewObject(C.Amw,0));break;case 11:this.Dw(A._NewObject(
C.AMG,0));break;case 12:this.Dw(A._NewObject(C.AMF,0));break;case 9:this.Dw(A._NewObject(
C.AR1,0));break;case 10:this.Dw(A._NewObject(C.AMB,0));break;case 14:this.Dw(A._NewObject(
C.ARX,0));break;case 15:this.Dw(A._NewObject(C.ARY,0));break;case 13:this.Dw(A._NewObject(
C.ARZ,0));break;case 16:this.Dw(A._NewObject(C.AM1,0));break;default:throw new Error(
AWU+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WO).ArH(
null);this.N9.AqF(this.OverlayMenu,A._GetAutoObject(C.AxI),null,null,[B=this.OverlayMenu
,B.AyT],null,true);this.Ba(this.WV);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N9.AkI(this.OverlayMenu,A._GetAutoObject(C.AxH),null,null,null,null,null,[B=this.
OverlayMenu,B.AIU],null,false);this.Ba(this.N9);A._GetAutoObject(C.WO).ArH(this.
OverlayMenu.Lq());}else if(!!this.Le){this.Ba(this.N9);A._GetAutoObject(C.WO).ArH(
this.Le.Akm().Lq());}},Aho:function(E){var B;if(this.Le===E)return;if(!!this.Le){
A._GetAutoObject(C.WO).ArH(null);this.N9.AqF(this.Le.Akm(),A._GetAutoObject(C.Afi
),null,null,[B=this.Le.Akm(),B.AyT],null,false);this.Ba(this.WV);}this.Le=E;if(!
!this.Le){this.N9.AkI(this.Le.Akm(),A._GetAutoObject(C.Afi),null,null,null,null,
null,[this,this.Bmp],null,false);this.Ba(this.N9);A._GetAutoObject(C.WO).ArH(this.
Le.Akm().Lq());}else if(!!this.OverlayMenu){this.Ba(this.N9);A._GetAutoObject(C.
WO).ArH(this.OverlayMenu.Lq());}},ByL:function(G){var B;var F;this.J(this.A4h,0);(
F=A._GetAutoObject(C.WO),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WO).M)[3]-B[1]))));this.ZL(this.N9);},A3A:function(G){if(A._GetAutoObject(A.Device.
Device).AmD)switch(A._GetAutoObject(A.Device.Device).Im){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A5).Acd(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aba<98)A._GetAutoObject(C.A5).Cd(4);}else{this.AAn=100;this.Bdo();}},BA4:
function(G){this.Bdo();},Bdo:function(){if(!A._GetAutoObject(A.Device.Device).AmD
){if(A._GetAutoObject(A.Device.Device).Aba<=2){if(this.AAn>2)switch(A._GetAutoObject(
A.Device.Device).Im){case 38:break;case 4:case 39:A._GetAutoObject(C.A5).Acd(38);
break;default:A._GetAutoObject(C.A5).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aba<=10){if(this.AAn>10)switch(A._GetAutoObject(A.Device.Device).Im){case
39:break;case 4:case 38:A._GetAutoObject(C.A5).Acd(39);break;default:A._GetAutoObject(
C.A5).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aba<=20){if(this.AAn>20
)switch(A._GetAutoObject(A.Device.Device).Im){case 39:break;case 4:case 38:A._GetAutoObject(
C.A5).Acd(39);break;default:A._GetAutoObject(C.A5).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Im){case 38:case 4:case 39:A._GetAutoObject(C.A5).Fz();break;default:;
}this.AAn=A._GetAutoObject(A.Device.Device).Aba;}},BA5:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqs){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AZ(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anw(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AZ(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anw(0
);}break;default:A.ab5("%s",AWV+A._GetAutoObject(A.Device.Device).Aqs.toFixed());
}},ApK:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A5).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Im===5)A._GetAutoObject(C.A5).Acd(3);break;
default:;}},BfT:function(G){switch(A._GetAutoObject(A.Device.Device).P4.Z7){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uy(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WM(65535);A._GetAutoObject(A.Device.Device).Uy(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WM(255);A._GetAutoObject(A.Device.Device).Uy(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WM(16776960);A._GetAutoObject(
A.Device.Device).Uy(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WM(16711935
);A._GetAutoObject(A.Device.Device).Uy(true);}break;default:A.ab5("%s",AWW+A._GetAutoObject(
A.Device.Device).P4.Z7.toFixed());}this.Bos(A._GetAutoObject(A.Device.Helper).ARs(
));},Bmp:function(G){var B;this.Le.Akm().CC(this);this.Le.BBu(this);},Bos:function(
E){if(this.Bde===E)return;this.Bde=E;if(E){if(A._GetAutoObject(A.Device.Device).
Im===3)A._GetAutoObject(C.A5).Cd(27);else if(A._GetAutoObject(A.Device.Device).Im
!==27)A._GetAutoObject(A.Device.Device).AZ(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Im===27)A._GetAutoObject(A.Device.Device).AZ(112,true,A.jV,0,[this
,this.A1w]);},A1w:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Acd(85);}
,Bls:function(){return this.Le;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkG._Init.call(this.AkG={I:this},0);C.N9._Init.call(this.N9={I:this},0);this.
__proto__=C.GL;this.H(Cg);this.N9.H(Rq);this.J(this.N9,0);this.WV=A._NewObject(C.
WV,0);this.A4D=A._GetAutoObject(C.A5);this.AkG.ANI=[this,this.Bls,this.Aho];this.
A4h=A._GetAutoObject(C.WO);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkG._Done();this.N9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkG._ReInit();this.N9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaJ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WV)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4D)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Le)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4h)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abp={A$z:
null,BQ:null,N:null,Cr:null,Am_:null,Ana:null,QU:null,Am$:null,Am8:null,Anc:null
,Am9:null,DG:function(G){var Ff=0;var X=this.AV;switch(this.Cr.CO){case 6:Ff=2;break;
case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x14
);if(!!X)this.Ba(X);},Bcf:function(s){this.DG(s);},Al2:function(G){var D6=(A.Core.
BF.isPrototypeOf(G)?G:null);if(D6.Acn&&(this.D$().Asp===false))return;A.pe(this.
D$().CF,this);},AI7:function(s){this.Al2(s);},ApJ:function(G){var D6=(A.Core.BF.
isPrototypeOf(G)?G:null);if(D6.Acn&&(this.D$().ZK===false))return;A.pe(this.D$().
Cc,this);},AI9:function(s){this.ApJ(s);},H0:function(G){if(this.QU.Acn)return;},
Alk:function(s){this.H0(s);},AAP:function(G){var D6=(A.Core.BF.isPrototypeOf(G)?
G:null);if(D6.Acn&&(this.D$().WS===false))return;A.pe(this.D$().Cf,this);},AI8:function(
s){this.AAP(s);},D$:function(){if(!!this.Lq())return this.BQ;else return this.N;
},Lq:function(){return this.BQ;},GT:function(E){this.A$z=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BF._Init.
call(this.Cr={I:this},0);A.Core.BF._Init.call(this.Am_={I:this},0);A.Core.BF._Init.
call(this.Ana={I:this},0);A.Core.BF._Init.call(this.QU={I:this},0);A.Core.BF._Init.
call(this.Am$={I:this},0);A.Core.BF._Init.call(this.Am8={I:this},0);A.Core.BF._Init.
call(this.Anc={I:this},0);A.Core.BF._Init.call(this.Am9={I:this},0);this.__proto__=
C.Abp;this.H([0,0,C.Asy[0],C.Asy[1]]);this.N.H(U4);this.N.As(false);this.N.Z(false
);this.Cr.Filter=147;this.Am_.Filter=26;this.Ana.Filter=28;this.QU.Filter=1;this.
Am$.Filter=27;this.Am8.Filter=44;this.Anc.Filter=9;this.Am9.Filter=42;this.J(this.
N,0);this.Cr.BG=[this,this.Bcf];this.Cr.D2=[this,this.Bcf];this.Am_.BG=[this,this.
AI7];this.Am_.D2=[this,this.AI7];this.Ana.BG=[this,this.AI9];this.Ana.D2=[this,this.
AI9];this.QU.BG=[this,this.Alk];this.QU.D2=[this,this.Alk];this.Am$.BG=[this,this.
AI8];this.Am$.D2=[this,this.AI8];this.Am8.BG=[this,this.AI7];this.Am8.D2=[this,this.
AI7];this.Anc.BG=[this,this.AI9];this.Anc.D2=[this,this.AI9];this.Am9.BG=[this,this.
AI8];this.Am9.D2=[this,this.AI8];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Am_._Done();this.Ana._Done();this.QU._Done();this.
Am$._Done();this.Am8._Done();this.Anc._Done();this.Am9._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Am_._ReInit();this.Ana._ReInit();this.QU._ReInit();this.Am$._ReInit(
);this.Am8._ReInit();this.Anc._ReInit();this.Am9._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$z)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxH={_Init:function(){A.acl.AGX._Init.call(this,0);this.Km=0x22;this.Ad8=true;
this.Au5=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxI={_Init:function(){A.acl.AGX._Init.call(this,0);this.Km=0x22;this.Ad8=true;
this.Au5=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AU8={Si:function(){var B;var Ao=(A.acl.Afa.isPrototypeOf(B=A.acl.Aem.Si.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cq.Cy=100;return Ao;},Sh:function(){var
B;var Ao=(A.acl.Axp.isPrototypeOf(B=A.acl.Aem.Sh.call(this))?B:null);if(!Ao)throw new
Error(As9);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Aem._Init.call(this
,aArg);this.__proto__=C.AU8;},_className:"Application::ShadeTransition"};C.AmZ={
Ag7:null,S5:null,HT:null,DT:null,AnimalId:-1,GroupId:-1,ADo:true,Dg:function(E){
C.BR.Dg.call(this,E);this.S5.L(E);this.HT.L(E);this.Ag7.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.acf.Afc)
);else this.HT.R(E.toFixed());},Ab9:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S5.R(A.aaR(A.acf.Afc));else this.S5.R(E.toFixed());},DY:function(
G){},Nz:function(s){this.DY(s);},A_E:function(E){if(this.ADo===E)return;this.ADo=
E;this.S5.Z(this.ADo);this.Ag7.Z(this.ADo);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag7={I:this},0);A.acg.Text._Init.call(this.S5={
I:this},0);A.acg.Text._Init.call(this.HT={I:this},0);C.DT._Init.call(this.DT={I:
this},0);this.__proto__=C.AmZ;this.Ag7.H(AWX);this.S5.H(AWY);this.S5.A4(0x11);this.
S5.R(A.aaR(A.acf.Afc));this.HT.H(AWZ);this.HT.A4(0x11);this.HT.R(A.aaR(A.acf.Afc
));this.DT.H(AW0);this.J(this.Ag7,0);this.J(this.S5,0);this.J(this.HT,0);this.J(
this.DT,0);this.Ag7.Ax(A.aaL(A.ach.AQF));this.S5.S(A.aaL(A.fl.Af));this.HT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag7._Done();this.S5._Done(
);this.HT._Done();this.DT._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag7._ReInit();this.S5._ReInit();this.HT._ReInit();this.DT.
_ReInit();this.S5.R(A.aaR(A.acf.Afc));this.HT.R(A.aaR(A.acf.Afc));this.S5.S(A.aaL(
A.fl.Af));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADy={Init:function(
aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SQ
],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9o,B.AnD],0);
A.zV([this,this.Nz],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nz],[
B=A._GetAutoObject(A.Device.Helper).W,B.PU,B.EC],0);A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Helper).W,B.A92,B.Axl],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9f,B.Ae2],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9g,B.Uw],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.
A9j,B.Ae6],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9n,B.
Ae8],0);A.pe([this,this.Nz],this);},Dg:function(E){C.AmZ.Dg.call(this,E);this.DT.
Dg(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqY()){this.Ab9(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab9(-1);this.OnSetAnimalId(-1);}this.DT.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DT.AFi(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DT.Ae2(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DT.Uw(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DT.Ae6(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DT.Ae8(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.AmZ._Init.call(this,aArg);this.
__proto__=C.ADy;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kp={AhM:A.abi(3,A.jV,null),BI:A.abi(3,0,{0:7,1:30,2:90}),Anl:3,Dv:function(){
if(this.Anl<3)return this.Anl;else return 3;},C8:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anl))return-1;return this.BI.Get(aIndex);},Gb:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anl))return AW1;return this.AhM.Get(aIndex);},D0:function(
A9){var O=0;while((O<3)&&(O<=this.Anl)){if(this.BI.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anl)){if(this.BI.Get(
O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhM=[]).__proto__=C.Kp.AhM;(this.BI=[]).__proto__=C.Kp.BI;this.
__proto__=C.Kp;this.AhM.Set(0,A.aaR(A.acf.A71));this.AhM.Set(1,A.aaR(A.acf.A7Z));
this.AhM.Set(2,A.aaR(A.acf.A70));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhM.Set(0,A.aaR(A.acf.A71));this.AhM.Set(1,A.aaR(A.acf.A7Z));this.AhM.Set(2,A.aaR(
A.acf.A70));},_className:"Application::Days"};C.AU5={Amy:null,BW:null,Q8:null,QH:
null,Bas:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBQ],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atq],0);},Bl:function(
aSize){},Aj:function(Ae){var B;var F;C.Dt.Aj.call(this,Ae);var Fu=((Ae&0x20)===0x20
);var GF=this.Bo.Bw;this.BW.L(A.jb.Bm);if(!!this.Q)this.BW.R(((AW2+A._GetAutoObject(
A.Device.Converter).AkY((F=this.Q,F[1].call(F[0]))))+CR)+A._GetAutoObject(A.acj.
Temperature).AlM());this.H8.Z((this.AM<A._GetAutoObject(A.Device.Helper).A7l())&&(
Fu||GF));},C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kh:function(G){var F;var BP=this.AM;C.Dt.Kh.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A7l()){this.Bx(this.AM+10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kc:function(G){var F;var BP=this.
AM;C.Dt.Kc.call(this,G);this.Bx(this.AM-10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A$h:function(E){if(this.Bas===E)return;
this.Bas=E;this.Am();},BBQ:function(G){this.Am();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AK._Init.call(this.Amy={I:this},0);C.CG._Init.call(this.BW={
I:this},0);A.acg.AK._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AU5;this.H(Aam);this.Background.H(Aam);this.V.H(As_);
this.V.L(A.jb.Bm);this.Amy.H(AW3);this.Amy.L(A.jb.Afv);this.Hy.H(AW4);this.BW.H(
AW5);this.BW.A4(0x12);this.BW.L(A.jb.Text);this.H8.H(AW6);this.Q8.H(AW7);this.Q8.
L(A.jb.E1);this.QH.H(AW8);this.J(this.Amy,-2);this.J(this.BW,-1);this.J(this.Q8,
0);this.J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BW.
S(A.aaL(A.fl.EK));this.BW.AY(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADO));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.Amy._Done();this.BW._Done();this.
Q8._Done();this.QH._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.Amy._ReInit();this.BW._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BW.S(A.aaL(A.fl.EK));this.
BW.AY(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
Amy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnS={Q:null
,Ai1:null,Init:function(aArg){var B;A.zX([this,this.Bcc],[B=A._GetAutoObject(A.Device.
Device),B.AEL,B.Bbz],0);A.pe([this,this.Bcc],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Acd:function(Alp){A._GetAutoObject(A.Device.Device).Zv(Alp
);},AKE:function(G){if(this.K&&this.K.AKE)return this.K.AKE.apply(this,arguments
);else return C.AnS.Bcj.apply(this,arguments);},Bcj:function(G){var F;if(!this.Q
){A.ab5("%s",AW9);return;}var By=null;if(this.Ai1.Contains(A._GetAutoObject(A.Device.
Device).Im)){By=this.Ai1.A$x();while(!!By&&(By.An7!==A._GetAutoObject(A.Device.Device
).Im))By=this.Ai1.A$x();}if(!By)By=this.BAo(A._GetAutoObject(A.Device.Device).Im
);(F=this.Q,F[2].call(F[0],By));},Bcc:function(s){this.AKE(s);},BAo:function(Alp
){var By=null;switch(Alp){case 0:case 1:By=A._NewObject(C.AVc,0);break;case 2:By=
A._NewObject(C.X9,0);break;case 3:By=A._NewObject(C.AvB,0);break;case 53:By=A._NewObject(
C.AVT,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASf,0);break;case 6:By=A._NewObject(C.ARQ,0);break;case 16:By=A._NewObject(C.ANQ
,0);break;case 22:By=A._NewObject(C.AVO,0);break;case 17:By=A._NewObject(C.AVt,0
);break;case 42:By=A._NewObject(C.ANN,0);break;case 87:By=A._NewObject(C.AUF,0);
break;case 88:By=A._NewObject(C.AUE,0);break;case 89:By=A._NewObject(C.AVJ,0);break;
case 95:By=A._NewObject(C.AVM,0);break;case 23:By=A._NewObject(C.AWb,0);break;case
18:By=A._NewObject(C.AN3,0);break;case 19:By=A._NewObject(C.AUG,0);break;case 37:
By=A._NewObject(C.ARf,0);break;case 76:By=A._NewObject(C.AUl,0);break;case 63:By=
A._NewObject(C.AN1,0);break;case 64:By=A._NewObject(C.AN2,0);break;case 82:By=A.
_NewObject(C.AN0,0);break;case 83:By=A._NewObject(C.ANY,0);break;case 92:By=A._NewObject(
C.ANW,0);break;case 93:By=A._NewObject(C.ANZ,0);break;case 65:By=A._NewObject(C.
ANX,0);break;case 5:By=A._NewObject(C.AVm,0);break;case 4:By=A._NewObject(C.Ad_,
0);break;case 39:By=A._NewObject(C.ANm,0);break;case 38:By=A._NewObject(C.ANF,0);
break;case 28:By=A._NewObject(C.WC,0);break;case 7:By=A._NewObject(C.AqI,0);break;
case 81:By=A._NewObject(C.AN_,0);break;case 31:By=A._NewObject(C.Aru,0);break;case
78:By=A._NewObject(C.ASd,0);break;case 34:By=A._NewObject(C.AL5,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GK,0);break;case 9:By=A._NewObject(C.I_,0);break;case 24:By=A._NewObject(C.AMk
,0);break;case 10:By=A._NewObject(C.Amu,0);break;case 21:By=A._NewObject(C.AMo,0
);break;case 11:By=A._NewObject(C.AMn,0);break;case 29:By=A._NewObject(C.AuO,0);
break;case 48:By=A._NewObject(C.AMm,0);break;case 30:By=A._NewObject(C.AMl,0);break;
case 12:By=A._NewObject(C.AMj,0);break;case 40:By=A._NewObject(C.AMi,0);break;case
14:By=A._NewObject(C.AND,0);break;case 13:By=A._NewObject(C.ANE,0);break;case 20:
By=A._NewObject(C.AV4,0);break;case 41:By=A._NewObject(C.AV3,0);break;case 43:By=
A._NewObject(C.AOL,0);break;case 44:By=A._NewObject(C.AOK,0);break;case 61:By=A.
_NewObject(C.AN9,0);break;case 62:By=A._NewObject(C.AN8,0);break;case 46:By=A._NewObject(
C.ASs,0);break;case 47:By=A._NewObject(C.ASr,0);break;case 85:By=A._NewObject(C.
AWh,0);break;case 86:By=A._NewObject(C.AWg,0);break;case 71:By=A._NewObject(C.ASn
,0);break;case 72:By=A._NewObject(C.ASm,0);break;case 74:By=A._NewObject(C.AM3,0
);break;case 90:By=A._NewObject(C.AUn,0);break;case 73:By=A._NewObject(C.AUH,0);
break;case 51:By=A._NewObject(C.AL9,0);break;case 52:By=A._NewObject(C.AL8,0);break;
case 15:By=A._NewObject(C.AUu,0);break;case 60:By=A._NewObject(C.AVs,0);break;case
69:By=A._NewObject(C.ARO,0);break;case 70:By=A._NewObject(C.ARN,0);break;case 26:
By=A._NewObject(C.ASg,0);break;case 54:By=A._NewObject(C.ASc,0);break;case 25:By=
A._NewObject(C.AOl,0);break;case 66:By=A._NewObject(C.AOm,0);break;case 59:By=A.
_NewObject(C.AOk,0);break;case 58:By=A._NewObject(C.AOn,0);break;case 56:By=A._NewObject(
C.AOo,0);break;case 57:By=A._NewObject(C.AqL,0);break;case 68:By=A._NewObject(C.
AOp,0);break;case 67:By=A._NewObject(C.AOi,0);break;case 84:By=A._NewObject(C.AMq
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMD,0);break;case 91:By=A._NewObject(C.AVx,0
);break;case 94:By=A._NewObject(C.Aqd,0);break;default:throw new Error(AW_);}if(
!!By)By.An7=Alp;return By;},Cd:function(Alp){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AW$);else this.Ai1.BoV((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zv(Alp);},Fz:function(){var Bgq=3;var Bgp=this.Ai1.BoL();if(!!Bgp
)Bgq=Bgp.An7;else A.ab5("%s",AXa);A._GetAutoObject(A.Device.Device).Zv(Bgq);},_Init:
function(aArg){C.A$T._Init.call(this.Ai1={I:this},0);this.__proto__=C.AnS;this.Init(
aArg);var J$=this._variants();if(J$){this.K={};J$._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai1.
_Done();A.h7--;},_ReInit:function(){this.Ai1._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnS._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A5={_Init:function(){C.AnS._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGs={H$:null,YE:null,Afe:null,AaQ:null,ML:
null,AzI:1,RatingMode:0,RatedAttribute:0,CP:function(){this.YE.R(this.BdW(this.RatedAttribute
));this.AKJ(this);},Aj:function(Ae){this.ML.R(A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.AR5),O$,this.AzI.toFixed()));if(this.RatingMode===1)this.ML.Z(true
);else this.ML.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);this.H$.G8();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxA(this.
H$,5);A.zX([this,this.AKJ],[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0N],0);
A.zX([this,this.AKJ],[B=A._GetAutoObject(A.Device.Helper).W,B.PU,B.EC],0);A.pe([
this,this.AKJ],this);},AsG:function(G){var a=this.AKn(this.RatedAttribute);this.
BgG();this.AzI=this.AzI-1;this.Am();if(!a)this.ASa();else this.SP(a);},W0:function(
G){var a=this.Bd3(this.RatedAttribute);this.BgG();this.AzI=this.AzI+1;this.Am();
if(!a)this.A8n();else this.SP(a);},AKn:function(NB){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NB){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHQ);},Bd3:function(NB){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NB){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHQ);},SP:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YE.R(this.BdW(E));this.
DL(E);this.Afe.AnI(this.H$.BjB(E));if(!this.AKn(E)){if(this.ARo())this.N.Cu(A.aaL(
A.ach.AeD));else this.N.Cu(null);}else this.N.Cu(A.aaL(A.ach.AeA));},BdW:function(
NB){return this.AaQ.BT(NB);},BAn:function(NB){if(!!NB){var a=this.AKn(NB);if(!a)
return A.jV;else return this.BdX(a);}else return A.jV;},BAm:function(NB){if(!!NB
){var a=this.Bd3(NB);if(!a)return A.jV;else return this.BdX(a);}else return A.jV;
},ASa:function(){},A8n:function(){},A7m:function(){return null;},BdX:function(NB
){return this.AaQ.Lz(NB);},BgG:function(){if(!!this.RatedAttribute)this.H$.Bpv(this.
RatedAttribute,this.Afe.A6);},AKJ:function(G){if(this.ARo())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SP(2);this.DL(this.RatedAttribute
);this.Am();},Adv:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkT:function(G){var a=this.AKn(this.RatedAttribute);if(!a){if(this.ARo())this.
Adv(this);}else this.ASa();},DL:function(NB){this.N.Hz(this.BAn(NB));if(!!this.N.
An1){this.N.C3(null);this.N.OU(true);}else{this.N.C3(A.aaL(A.ach.AeA));this.N.OU(
false);}this.N.CS(this.BAm(NB));if(!!this.N.An3){this.N.C4(null);this.N.OV(true);
}else{this.N.C4(this.A7m());this.N.OV(false);}},ARo:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YE={
I:this},0);C.Rating._Init.call(this.Afe={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaQ={I:this},0);A.acg.Text._Init.call(this.ML={I:this},0);this.__proto__=
C.AGs;this.Background.L(A.jb.CK);this.N.Z(true);this.Ds(C.IP);this.YE.H(AXb);this.
YE.Lu(true);this.YE.L(A.jb.Text);this.Afe.H(AXc);this.ML.H(AXd);this.ML.A4(0x14);
this.ML.R(A.aaR(A.acf.AR5));this.ML.L(A.jb.Text);this.J(this.YE,0);this.J(this.Afe
,0);this.J(this.ML,0);this.Ba(this.Afe);this.N.CF=[this,this.AsG];this.N.Cf=[this
,this.AkT];this.N.Cc=[this,this.W0];this.YE.S(A.aaL(A.fl.Af));this.Afe.AR=[this,
this.W0];this.ML.S(A.aaL(A.fl.Af));this.H$=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YE._Done();this.Afe._Done();this.AaQ._Done();
this.ML._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YE._ReInit();this.Afe._ReInit();this.AaQ._ReInit();this.ML._ReInit();this.
ML.R(A.aaR(A.acf.AR5));this.YE.S(A.aaL(A.fl.Af));this.ML.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ML)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H2={Y:null,Gender:null,AnimalType:null,Breed:null,Jm:null,Pq:null,AsX:null,B0:
null,Db:null,C$:null,CH:null,Gp:null,Ay:null,KO:0,Init:function(aArg){A.zX([this
,this.Bcd],this.B0.Q,0);A.pe([this,this.Bcd],this);A.pe([this,this.ABm],this);},
Aj:function(Ae){C.AB.Aj.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANA(this.
Y);},DG:function(G){var B;var Ff=0;var X=this.AV;switch(this.Cr.CO){case 6:Ff=2;
break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(
X,Ff,0x415);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,null
,null);this.ABm(this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},AeX:function(E){
if(this.KO===E)return;this.KO=E;A.abo([this,this.Awa,this.AeX],0);},ABm:function(
G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(
A.aaL(A.ach.E2));this.N.CF=[this,this.AI6];if(!!G0&&!!G0.Amq){this.N.E5(A.jV);this.
N.JE.C0(255);this.N.ArQ(G0.AqQ);this.N.Cu(G0.AvJ);this.N.Cf=G0.Amq;}else{this.N.
E5(A.jV);this.N.Cu(null);this.N.Cf=null;}if(!!G0&&!!G0.Agv){this.N.CS(G0.AxS);this.
N.GX.C0(G0.Axo);this.N.Anz(G0.AmT);this.N.C4(G0.Aq8);this.N.Cc=G0.Agv;}else this.
Aup();},Agg:function(G){A.ab5("%s",Ays);},Ay5:function(s){this.Agg(s);},Ew:function(
G){A.ab5("%s",Ays);},AI6:function(s){this.Ew(s);},Aup:function(){A.ab5("%s",Ald);
},AAH:function(G){A.ab5("%s",Ays);},AcU:function(s){this.AAH(s);},JO:function(Ag
){this.Ba(Ag);this.Y.HJ(Ag,true,null,null);this.Y.VF(null,null);},ApF:function(G
){var F;this.C$.Ahs(A._GetAutoObject(A.Device.Helper).Abx((F=this.B0.Q,F[1].call(
F[0]))));},Bcd:function(s){this.ApF(s);},Awa:function(){return this.KO;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UV._Init.call(this.Jm={I:this},
0);A.Device.Na._Init.call(this.Pq={I:this},0);A.Device.K1._Init.call(this.AsX={I:
this},0);C.BU._Init.call(this.B0={I:this},0);C.BU._Init.call(this.Db={I:this},0);
C.AkR._Init.call(this.C$={I:this},0);C.AxD._Init.call(this.CH={I:this},0);C.AsB.
_Init.call(this.Gp={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H2;var B;this.N.Z(true);this.Ds(C.IP);this.Y.H(Fc);this.Y.J0(1);this.KO=A._GetAutoObject(
A.Device.Helper).Abx(this.AnimalType.Q);this.B0.H(Ale);this.B0.Ai(true);this.B0.
T(A.aaR(A.acf.Afu));this.Db.H(Ayt);this.Db.Ai(true);this.Db.T(A.aaR(A.acf.Afp));
this.C$.H(Aoj);this.C$.Ai(true);this.C$.T(A.aaR(A.acf.KO));this.C$.Ge(1000);this.
C$.EU(99000);this.C$.Ahs(A._GetAutoObject(A.Device.Helper).Abx(this.AnimalType.Q
));this.CH.H(AhX);this.CH.Ai(true);this.CH.T(A.aaR(A.acf.Breed));this.Gp.H(AXe);
this.Gp.Ai(true);this.Gp.T(A.aaR(A.acf.Jm));this.Ay.H(Ayu);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Gp
,0);this.J(this.Ay,0);this.Y.En=[this,this.Fh];this.Gender.L6(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L6(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L6(A._GetAutoObject(A.Device.Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.Ca,B.Cb]);this.B0.CI(this.AnimalType);this.
Db.Au([B=this.Gender,B.Ca,B.Cb]);this.Db.CI(this.Gender);this.C$.Au([this,this.Awa
,this.AeX]);this.CH.Gt([this,this.D$,this.GT]);this.CH.L5([B=this.CH,B.FY]);this.
CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.Ca,B.Cb]);this.CH.CI(this.Breed
);this.CH.Any(this.Pq);this.Gp.Gt([this,this.D$,this.GT]);this.Gp.L5([B=this.Gp,
B.FY]);this.Gp.L8(A.aaL(A.ach.Edit));this.Gp.Au([B=this.Jm,B.Ca,B.Cb]);this.Gp.CI(
this.Jm);this.Gp.Any(this.AsX);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jm._Done();this.Pq._Done();this.AsX._Done();this.B0._Done();this.Db._Done(
);this.C$._Done();this.CH._Done();this.Gp._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jm._ReInit();this.
Pq._ReInit();this.AsX._ReInit();this.B0._ReInit();this.Db._ReInit();this.C$._ReInit(
);this.CH._ReInit();this.Gp._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Afu
));this.Db.T(A.aaR(A.acf.Afp));this.C$.T(A.aaR(A.acf.KO));this.CH.T(A.aaR(A.acf.
Breed));this.Gp.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
WC={Azi:false,LU:function(G){if(A._GetAutoObject(A.Device.Device).An.Lk())A._GetAutoObject(
A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.G8();A._GetAutoObject(A.Device.Helper
).Aqg(A._GetAutoObject(A.Device.Helper).W);},Aup:function(){this.N.CS(A.jV);this.
N.C4(A.aaL(A.ach.ADS));this.N.Cc=[this,this.Ay5];},CC:function(G){if(!this.Azi){
this.Azi=true;A.pe([this,this.AcU],this);}else C.Aru.CC.call(this,G);},AAH:function(
G){A._GetAutoObject(C.A5).Cd(49);},_Init:function(aArg){C.Aru._Init.call(this,aArg
);this.__proto__=C.WC;this.J6(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IP={_Init:function(aArg){C.ADy._Init.call(this,aArg);this.__proto__=C.IP;this.
A_E(false);},_className:"Application::HeaderSelectedAnimalId"};C.I_={Filter:null
,Gender:null,AnimalType:null,Transponder:null,Em:null,Y:null,P6:null,Tc:null,Og:
null,Td:null,Ny:null,OB:null,RW:null,OC:null,RX:null,NO:null,Lg:null,Jw:null,KZ:
null,ME:null,Yx:null,Te:null,RY:null,Ay:null,Ax4:0,Ax3:0,AuM:0,AuL:0,Art:0,AsN:0
,Avm:0,Avn:0,Am4:true,Amt:false,Aob:false,Init:function(aArg){A.zX([this,this.Avs
],this.Lg.Q,0);A.zX([this,this.AuQ],this.Jw.Q,0);A.zX([this,this.BqF],this.KZ.Q,
0);A.zX([this,this.BkX],this.ME.Q,0);A.zX([this,this.Bq9],this.Ny.Q,0);A.zX([this
,this.Bq8],this.Og.Q,0);A.zX([this,this.BhM],this.NO.Q,0);A.zX([this,this.BhL],this.
OC.Q,0);this.Ba(this.P6);},DG:function(G){var Ff=0;var X=this.AV;switch(this.Cr.
CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;
}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);this.M0(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E9(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},A3w:function(G){var EE=(C.Aeq.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DN(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this
,this.Fn,this.Fr],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else A.ab5("%s",AHR+EE.Er.toFixed());if(!!Aw){this.Filter.
CY(Aw);A.abo([this,this.Fn,this.Fr],0);}}},BA2:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A5).Fz();},AAF:function(G){var EE=(
C.AmY.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DN(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1t=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1t.EJ=EE.Er;A1t.Operator=0;Aw=A1t;}else A.ab5(
"%s",AHR+EE.Er.toFixed());if(!!Aw){this.Filter.CY(Aw);A.abo([this,this.Fn,this.Fr
],0);}}},A_z:function(E){if(this.Avm===E)return;this.Avm=E;A.abo([this,this.BlB,
this.A_z],0);},A_A:function(E){if(this.Avn===E)return;this.Avn=E;A.abo([this,this.
BlC,this.A_A],0);},Avs:function(G){var F;this.A_A((F=this.Lg.Q,F[1].call(F[0])));
var Aw=this.Filter.DN(7,0);if(!!Aw){var Az0=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!Az0)Az0.A6=this.Avn;else A.ab5("%s",AfG);}},AuQ:function(G){var
F;this.A_z((F=this.Jw.Q,F[1].call(F[0])));var Aw=this.Filter.DN(14,0);if(!!Aw){var
Vb=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Vb)Vb.A6=
this.Avm;else A.ab5("%s",AfG);}},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},A$g:function(
E){if(this.AsN===E)return;this.AsN=E;A.abo([this,this.Bmc,this.A$g],0);},BqF:function(
G){var F;this.A$g((F=this.KZ.Q,F[1].call(F[0])));var Aw=this.Filter.DN(22,1);if(
!!Aw){var Ai$=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ai$
)switch(this.AsN){case 1:Ai$.Operator=5;break;case 0:Ai$.Operator=0;break;default:
A.ab5("%s%e",AHS,this.AsN);}else A.ab5("%s",AfG);}},A_N:function(E){if(this.Art===
E)return;this.Art=E;A.abo([this,this.BlQ,this.A_N],0);},BkX:function(G){var F;this.
A_N((F=this.ME.Q,F[1].call(F[0])));var Aw=this.Filter.DN(26,1);if(!!Aw){var At5=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At5)switch(this.Art
){case 1:At5.Operator=5;break;case 0:At5.Operator=0;break;default:A.ab5("%s%e",AHS
,this.Art);}else A.ab5("%s",AfG);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fn,this.Fr]);this.Tc.
Bk([this,this.Fn,this.Fr]);this.Og.Bk([this,this.Fn,this.Fr]);this.Td.Bk([this,this.
Fn,this.Fr]);this.Ny.Bk([this,this.Fn,this.Fr]);this.OB.Bk([this,this.Fn,this.Fr
]);this.RW.Bk([this,this.Fn,this.Fr]);this.OC.Bk([this,this.Fn,this.Fr]);this.RX.
Bk([this,this.Fn,this.Fr]);this.NO.Bk([this,this.Fn,this.Fr]);this.Lg.Bk([this,this.
Fn,this.Fr]);this.Jw.Bk([this,this.Fn,this.Fr]);this.KZ.Bk([this,this.Fn,this.Fr
]);this.ME.Bk([this,this.Fn,this.Fr]);this.Yx.Bk([this,this.Fn,this.Fr]);this.Te.
Bk([this,this.Fn,this.Fr]);this.RY.Bk([this,this.Fn,this.Fr]);this.Ar$(false);A.
pe([this,this.A48],this);var BeG=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DN(1,2))?B:null);if(!!BeG){this.Ar$(true);this.AGa(BeG.A6);}var Bd9=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DN(1,3))?B:null);if(!!
Bd9){this.Ar$(true);this.AGb(Bd9.A6);}this.ArK(false);A.pe([this,this.ALp],this);
var BeF=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DN(4,3))?B:null
);if(!!BeF){this.ArK(true);this.AE4(A._GetAutoObject(A.Device.Helper).Me(BeF.A6,
A._GetAutoObject(A.Device.Helper).Dr()));}var Bd8=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DN(4,2))?B:null);if(!!Bd8){this.ArK(true);this.AE6(A.
_GetAutoObject(A.Device.Helper).Me(Bd8.A6,A._GetAutoObject(A.Device.Helper).Dr()
)+1);}var Az0=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DN(7,0
))?B:null);if(!!Az0)this.Lg.Bx(this.Gender.D0(Az0.A6));var Vb=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DN(14,0))?B:null);if(!!Vb)this.Jw.Bx(this.AnimalType.
D0(Vb.A6));var Ai$=this.Filter.DN(22,1);if(!!Ai$){if(!Ai$.Operator)this.KZ.Bx(0);
else this.KZ.Bx(1);}var At5=this.Filter.DN(26,1);if(!!At5){if(!At5.Operator)this.
ME.Bx(0);else this.ME.Bx(1);}},Fr:function(Aq){this.Bk(Aq);},AGb:function(E){if(
this.Ax4===E)return;this.Ax4=E;A.abo([this,this.A9U,this.AGb],0);},AGa:function(
E){if(this.Ax3===E)return;this.Ax3=E;A.abo([this,this.A9T,this.AGa],0);},Bq9:function(
G){var F;this.AGb((F=this.Ny.Q,F[1].call(F[0])));var Aw=this.Filter.DN(1,3);if(!
!Aw){var ABK=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABK)
ABK.A6=this.Ax4;else A.ab5("%s",AfG);}},Bq8:function(G){var F;this.AGa((F=this.Og.
Q,F[1].call(F[0])));var Aw=this.Filter.DN(1,2);if(!!Aw){var ABK=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABK)ABK.A6=this.Ax3;else A.ab5("%s",AfG);}},Be$:
function(G){var EE=(C.AjG.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DN(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0
);}else{if(EE===this.Tc){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A6=this.Ax3;this.Ba(this.Og);}else if(EE===this.Td){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=this.Ax4;this.Ba(this.Ny);}if(!!Aw){this.Filter.CY(
Aw);A.abo([this,this.Fn,this.Fr],0);}}A.pe([this,this.A48],this);},A48:function(
G){var A3e=!!this.Filter.DN(this.Og.Er,this.Og.Operator);var A49=!!this.Filter.DN(
this.Ny.Er,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).J7(this.Tc,this.Aob
);A._GetAutoObject(A.Device.Helper).J7(this.Td,this.Aob);A._GetAutoObject(A.Device.
Helper).J7(this.Og,A3e);A._GetAutoObject(A.Device.Helper).J7(this.Ny,A49);},M0:function(
G){var B;this.Y.VF(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},BBX:function(G){A.pe([this,this.Fh],this);A.pe([this,this.
M0],this);},BAY:function(G){this.Ar$(!this.Aob);if(this.Aob===false){var Aw=this.
Filter.DN(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Nw(Aw);Aw=this.Filter.
DN(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fn,this.Fr],0);}},Ar$:function(
E){if(this.Aob===E)return;this.Aob=E;A.abo([this,this.A9S,this.Ar$],0);A.pe([this
,this.A48],this);},AE6:function(E){if(this.AuM===E)return;this.AuM=E;A.abo([this
,this.A8W,this.AE6],0);},AE4:function(E){if(this.AuL===E)return;this.AuL=E;A.abo([
this,this.A8U,this.AE4],0);},BhM:function(G){var F;this.AE6((F=this.NO.Q,F[1].call(
F[0])));var Aw=this.Filter.DN(4,2);if(!!Aw){var AfT=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfT){var AaV=A._GetAutoObject(A.Device.Helper).ZX(
this.AuM-1);AfT.A6=AaV;}else A.ab5("%s",AfG);}},BhL:function(G){var F;this.AE4((
F=this.OC.Q,F[1].call(F[0])));var Aw=this.Filter.DN(4,3);if(!!Aw){var AfT=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfT){var AaV=A._GetAutoObject(
A.Device.Helper).ZX(this.AuL);AfT.A6=AaV;}else A.ab5("%s",AfG);}},ALp:function(G
){var A3e=this.Am4&&!!this.Filter.DN(this.OC.Er,this.OC.Operator);var A49=this.Am4&&
!!this.Filter.DN(this.NO.Er,this.NO.Operator);A._GetAutoObject(A.Device.Helper).
J7(this.OB,this.Am4);A._GetAutoObject(A.Device.Helper).J7(this.RW,this.Am4&&this.
Amt);A._GetAutoObject(A.Device.Helper).J7(this.RX,this.Am4&&this.Amt);A._GetAutoObject(
A.Device.Helper).J7(this.OC,A3e);A._GetAutoObject(A.Device.Helper).J7(this.NO,A49
);},ArK:function(E){if(this.Amt===E)return;this.Amt=E;A.abo([this,this.A8T,this.
ArK],0);A.pe([this,this.ALp],this);},Be_:function(G){var EE=(C.AjG.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DN(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nw(Aw);A.abo([this,this.Fn,this.Fr],0);}else{if(EE===this.RW){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper
).ZX(this.AuL);this.Ba(this.OC);}else if(EE===this.RX){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper).ZX(this.AuM-1);this.
Ba(this.NO);}if(!!Aw){this.Filter.CY(Aw);A.abo([this,this.Fn,this.Fr],0);}}A.pe([
this,this.ALp],this);},BAX:function(G){this.ArK(!this.Amt);if(this.Amt===false){
var Aw=this.Filter.DN(this.OB.Er,this.OB.Operator);while(!!Aw){this.Filter.Nw(Aw
);Aw=this.Filter.DN(this.OB.Er,this.OB.Operator);}A.abo([this,this.Fn,this.Fr],0
);}},BnA:function(E){if(this.Am4===E)return;this.Am4=E;A.pe([this,this.ALp],this
);},Fn:function(){return this.Filter;},BlC:function(){return this.Avn;},BlB:function(
){return this.Avm;},Bmc:function(){return this.AsN;},BlQ:function(){return this.
Art;},A9U:function(){return this.Ax4;},A9T:function(){return this.Ax3;},A9S:function(
){return this.Aob;},A8W:function(){return this.AuM;},A8U:function(){return this.
AuL;},A8T:function(){return this.Amt;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB3._Init.call(this.Transponder={I:this},0);C.AB3._Init.
call(this.Em={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACd._Init.call(
this.P6={I:this},0);C.AjG._Init.call(this.Tc={I:this},0);C.Abw._Init.call(this.Og={
I:this},0);C.AjG._Init.call(this.Td={I:this},0);C.Abw._Init.call(this.Ny={I:this
},0);C.ACd._Init.call(this.OB={I:this},0);C.AjG._Init.call(this.RW={I:this},0);C.
AC2._Init.call(this.OC={I:this},0);C.AjG._Init.call(this.RX={I:this},0);C.AC2._Init.
call(this.NO={I:this},0);C.AmY._Init.call(this.Lg={I:this},0);C.AmY._Init.call(this.
Jw={I:this},0);C.AmY._Init.call(this.KZ={I:this},0);C.AmY._Init.call(this.ME={I:
this},0);C.QF._Init.call(this.Yx={I:this},0);C.QF._Init.call(this.Te={I:this},0);
C.QF._Init.call(this.RY={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I_;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5H));this.Ds(C.APE);this.Gender.
Au(this.Avn);this.AnimalType.Au(this.Avm);this.Transponder.Au(this.AsN);this.Em.
Au(this.Art);this.Y.H(Fc);this.Y.J0(1);this.P6.H(I1);this.P6.Ai(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmW(0,1));this.P6.Nq(1);this.Tc.H(Qc);this.Tc.
Ai(true);this.Tc.T(A.aaR(A.acf.AEp));this.Tc.Nq(1);this.Tc.OT(2);this.Og.H(Aan);
this.Og.Nq(1);this.Og.OT(2);this.Og.AF5(A.aaR(A.acf.GO));this.Td.H(Alf);this.Td.
Ai(true);this.Td.T(A.aaR(A.acf.AHl));this.Td.Nq(1);this.Td.OT(3);this.Ny.H(Aok);
this.Ny.Ai(true);this.Ny.Nq(1);this.Ny.OT(3);this.Ny.AF5(A.aaR(A.acf.GO));this.OB.
H(AXf);this.OB.Ai(true);this.OB.T(A.aaR(A.acf.RU));this.OB.Nq(4);this.RW.H(AXg);
this.RW.Ai(true);this.RW.T(A.aaR(A.acf.AEp));this.RW.Nq(4);this.RW.OT(3);this.OC.
H(AXh);this.OC.Nq(4);this.OC.OT(3);this.OC.A_S(2);this.RX.H(AXi);this.RX.Ai(true
);this.RX.T(A.aaR(A.acf.AHl));this.RX.Nq(4);this.RX.OT(2);this.NO.H(AXj);this.NO.
Ai(true);this.NO.Nq(4);this.NO.OT(2);this.NO.A_S(3);this.Lg.H(As$);this.Lg.Ai(true
);this.Lg.Nq(7);this.Lg.Ahu(0);this.Lg.OT(0);this.Jw.H(U4);this.Jw.Ai(true);this.
Jw.Nq(14);this.Jw.Ahu(0);this.Jw.OT(0);this.KZ.H(U4);this.KZ.Ai(true);this.KZ.Nq(
22);this.KZ.Ahu(0);this.KZ.OT(1);this.ME.H(U4);this.ME.Ai(true);this.ME.Nq(26);this.
ME.Ahu(0);this.ME.OT(1);this.Yx.H(U4);this.Yx.Ai(true);this.Yx.Nq(11);this.Yx.Ahu(
0);this.Yx.OT(0);this.Te.H(U4);this.Te.Ai(true);this.Te.Nq(12);this.Te.Ahu(0);this.
Te.OT(0);this.RY.H(U4);this.RY.Ai(true);this.RY.Nq(8);this.RY.Ahu(0);this.RY.OT(
0);this.Ay.H(Iw);this.J(this.Y,0);this.J(this.P6,0);this.J(this.Tc,0);this.J(this.
Og,0);this.J(this.Td,0);this.J(this.Ny,0);this.J(this.OB,0);this.J(this.RW,0);this.
J(this.OC,0);this.J(this.RX,0);this.J(this.NO,0);this.J(this.Lg,0);this.J(this.Jw
,0);this.J(this.KZ,0);this.J(this.ME,0);this.J(this.Yx,0);this.J(this.Te,0);this.
J(this.RY,0);this.J(this.Ay,0);this.N.CF=[this,this.Ew];this.N.Cc=[this,this.BA2
];this.N.C3(A.aaL(A.ach.E2));this.Y.En=[this,this.BBX];this.P6.AR=[this,this.BAY
];this.P6.Au([this,this.A9S,this.Ar$]);this.Tc.AR=[this,this.Be$];this.Og.Gt([this
,this.D$,this.GT]);this.Og.Au([this,this.A9T,this.AGa]);this.Td.AR=[this,this.Be$
];this.Ny.Gt([this,this.D$,this.GT]);this.Ny.Au([this,this.A9U,this.AGb]);this.OB.
AR=[this,this.BAX];this.OB.Au([this,this.A8T,this.ArK]);this.RW.AR=[this,this.Be_
];this.OC.Gt([this,this.D$,this.GT]);this.OC.Au([this,this.A8U,this.AE4]);this.RX.
AR=[this,this.Be_];this.NO.Gt([this,this.D$,this.GT]);this.NO.Au([this,this.A8W,
this.AE6]);this.Lg.AR=[this,this.AAF];this.Lg.Au([B=this.Gender,B.Ca,B.Cb]);this.
Lg.CI(this.Gender);this.Jw.AR=[this,this.AAF];this.Jw.Au([B=this.AnimalType,B.Ca
,B.Cb]);this.Jw.CI(this.AnimalType);this.KZ.AR=[this,this.AAF];this.KZ.Au([B=this.
Transponder,B.Ca,B.Cb]);this.KZ.CI(this.Transponder);this.ME.AR=[this,this.AAF];
this.ME.Au([B=this.Em,B.Ca,B.Cb]);this.ME.CI(this.Em);this.Yx.AR=[this,this.A3w];
this.Te.AR=[this,this.A3w];this.RY.AR=[this,this.A3w];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.Em._Done();this.Y._Done();this.P6._Done();this.Tc._Done();this.Og._Done(
);this.Td._Done();this.Ny._Done();this.OB._Done();this.RW._Done();this.OC._Done(
);this.RX._Done();this.NO._Done();this.Lg._Done();this.Jw._Done();this.KZ._Done(
);this.ME._Done();this.Yx._Done();this.Te._Done();this.RY._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.Em._ReInit();
this.Y._ReInit();this.P6._ReInit();this.Tc._ReInit();this.Og._ReInit();this.Td._ReInit(
);this.Ny._ReInit();this.OB._ReInit();this.RW._ReInit();this.OC._ReInit();this.RX.
_ReInit();this.NO._ReInit();this.Lg._ReInit();this.Jw._ReInit();this.KZ._ReInit(
);this.ME._ReInit();this.Yx._ReInit();this.Te._ReInit();this.RY._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5H));this.Tc.T(A.aaR(A.acf.AEp));this.Og.AF5(A.
aaR(A.acf.GO));this.Td.T(A.aaR(A.acf.AHl));this.Ny.AF5(A.aaR(A.acf.GO));this.OB.
T(A.aaR(A.acf.RU));this.RW.T(A.aaR(A.acf.AEp));this.RX.T(A.aaR(A.acf.AHl));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Td
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Te)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$T={ZY:null,BoV:
function(Bym){var EF=A._NewObject(C.A$S,0);EF.AB=Bym;EF.MF=this.ZY;this.ZY=EF;},
A$x:function(){var Vt=null;if(!!this.ZY){Vt=this.ZY.AB;this.ZY=this.ZY.MF;}return Vt;
},Contains:function(Alp){var EF=this.ZY;while(!!EF){if(EF.AB.An7===Alp)return true;
EF=EF.MF;}return false;},BoL:function(){if(!!this.ZY)return this.ZY.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$T;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$S={AB:null,
MF:null,_Init:function(aArg){this.__proto__=C.A$S;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMn={ASa:function(){A._GetAutoObject(
A.Device.Helper).AxA(this.H$,0);A._GetAutoObject(C.A5).Fz();},A8n:function(){this.
H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();},A7m:function(
){return A.aaL(A.ach.Am2);},_Init:function(aArg){C.AGs._Init.call(this,aArg);this.
__proto__=C.AMn;this.Ds(C.IP);},_className:"Application::AnimalActionRateScreen"
};C.AMj={WH:function(G){this.Agw();this.I8(A.aaR(A.acf.AVC),[this,this.AT0],5);this.
I8(A.aaR(A.acf.A5_),[this,this.BmC],4);this.I8(A.aaR(A.acf.AGr),[this,this.ATL],
3);this.I8(A.aaR(A.acf.An0),[this,this.AwZ],2);this.I8(A.aaR(A.acf.AdU),[this,this.
AE9],1);this.I8(A.aaR(A.acf.AuH),[this,this.AE3],0);A._GetAutoObject(C.BS).Fx();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anf)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DG:function(G){},Aby:function(){return C.ANc;},Abz:function(
){return C.ADA;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var
Azg=A._NewObject(A.Device.BoolFilterCriterion,0);Azg.Initialize(8,0,true,true);Be.
CY(Azg);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HR:function(G){var F;C.GK.
HR.call(this,G);if(this.Ake()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Cf=[this,this.Aap];this.N.E5(A.jV);}this.
N.OU(false);this.N.OV(false);},Agi:function(){A._GetAutoObject(C.A5).Cd(40);},_Init:
function(aArg){C.GK._Init.call(this,aArg);this.__proto__=C.AMj;var B;this.Ds(C.AO5
);this.Dl(A.aaR(A.acf.A8t));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A8X,
B.BbB]);},_ReInit:function(){C.GK._ReInit.call(this);this.Dl(A.aaR(A.acf.A8t));}
,_className:"Application::AlarmListScreen"};C.AND={DG:function(G){},Agf:function(
G){if(!!this.Bf)A.ab5("%i",this.Bf.AD.Gu);var Aa=(C.ACk.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).GS(Aa.Hs);A._GetAutoObject(C.A5).Cd(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var AzA=A._NewObject(
A.Device.BoolFilterCriterion,0);AzA.Initialize(9,0,true,true);Be.CY(AzA);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HR:function(G){C.GK.HR.call(this,G);this.N.OU(false
);this.N.OV(false);},_Init:function(aArg){C.GK._Init.call(this,aArg);this.__proto__=
C.AND;this.Ds(C.AO7);this.Dl(A.aaR(A.acf.A8u));},_ReInit:function(){C.GK._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8u));},_className:"Application::ControlListScreen"
};C.Aeq={Filter:null,Er:0,Jh:10,TableId:0,Operator:1,CP:function(){var F;this.Tx((
F=this.Filter,F[1].call(F[0])).DN(this.Er,this.Operator));},Bl:function(aSize){C.
Cp.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jh),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mi],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mi],E,0);A.pe([this,this.
Mi],this);},Mi:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tx((F=this.Filter,F[1].call(F[0])).DN(this.Er,this.Operator));else this.
Tx(null);},Ahu:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mi],this);},Nq:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mi],this);},Tx:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A7f(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).AmW(this.TableId
,this.Er));},OT:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mi],this);},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Aeq;this.V.H(AHT);this.V.A4(0x11);},_ReInit:function(){C.Cp._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H_:null,Bl:function(aSize){var B;C.Aeq.Bl.call(this,aSize);this.H_.H([(aSize[
0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jh,0,this.
H_.M[0]-this.Jh,aSize[1]]);},Tx:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).AmW(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw&&Aw.A6)this.H_.Cx(1);else this.H_.Cx(0);},_Init:function(aArg
){C.Aeq._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.QF;this.H_.H(AHU);this.H_.Cx(0);this.J(this.H_,0);this.H_.Ax(A.aaL(A.ach.AqO));
},_Done:function(){this.__proto__=C.Aeq;this.H_._Done();C.Aeq._Done.call(this);}
,_ReInit:function(){C.Aeq._ReInit.call(this);this.H_._ReInit();},_Mark:function(
D){var B;C.Aeq._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APE={Ap:null,Text:null,Dg:function(
E){C.BR.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APE;this.Ap.H(AXk);this.Text.H(AXl);this.
Text.A4(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeC));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjP={
AW:null,T9:null,Gw:null,D3:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.DY],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.T9.H(A.abJ(this.T9.M,A.abe(this.AW.M.slice(0
,2),AXm)));this.T9.H(A.abK(this.T9.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXn
)));},Aj:function(Ae){var B;C.BR.Aj.call(this,Ae);var IF=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IF)this.T9.L(A.jb.AV);else this.T9.L(A.jb.Am3);},Dg:function(E){
C.BR.Dg.call(this,E);this.Gw.L(E);this.D3.Zz(E);},WJ:function(E){C.BR.WJ.call(this
,E);this.D3.CW(E);},Akl:function(){return this.AW.Akl();},Awi:function(){return this.
AW.Awi();},DY:function(G){this.D3.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BX._Init.call(this.T9={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D3._Init.call(this.D3={I:this},0);A.acg.C9._Init.call(this.A_={I:this
},0);this.__proto__=C.AjP;this.AW.H(AXo);this.T9.H(AXp);this.T9.Nu(2);this.Gw.H(
AXq);this.Gw.L(A.jb.CV);this.D3.A1(0x14);this.D3.H(AXr);this.D3.Zz(A.jb.Bm);this.
D3.CW(A.jb.Ri);this.D3.Ho(2);this.A_.DE(AXs);this.A_.DO(AXt);this.A_.L(A.jb.Bb);
this.J(this.AW,0);this.J(this.T9,0);this.J(this.Gw,0);this.J(this.D3,0);this.J(this.
A_,0);this.Ba(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D3.S(A.aaL(A.fl.Bg));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.T9._Done(
);this.Gw._Done();this.D3._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.T9._ReInit();this.Gw._ReInit(
);this.D3._ReInit();this.A_._ReInit();this.D3.S(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DH={Dk:null,Is:null,Ir:null
,Age:function(G){if(this.Ez<0)this.L7(1);else if(this.Ez===9)this.L7(0);else this.
L7(this.Ez+1);A.pe(this.Dk,this);},Aj:function(Ae){var B;C.Ez.Aj.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IF=((Ae&0x40)===0x40);if(IF){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.C0(256);}else if(Hf){this.Background.L(this.M$);this.
Text.L(A.jb.Text);this.C0(256);}else{this.Background.L(this.M$);this.Text.L(A.jb.
Text);this.C0(128);}},Agd:function(G){if(this.Ez<=0)this.L7(9);else this.L7(this.
Ez-1);A.pe(this.Dk,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BF._Init.call(this.Is={I:this},0);A.Core.BF._Init.call(this.Ir={I:this},0);this.
__proto__=C.DH;this.Is.Filter=4;this.Ir.Filter=5;this.Is.BG=[this,this.Age];this.
Is.D2=[this,this.Age];this.Ir.BG=[this,this.Agd];this.Ir.D2=[this,this.Agd];},_Done:
function(){this.__proto__=C.Ez;this.Is._Done();this.Ir._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Is._ReInit();this.Ir._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ir)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cw:null,CX:null,DB:null,Eq:null,F$:null,ES:null,Fj:null,E$:null,Ne:0,ARp:
false,Aqr:false,Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqr)this.ES.AeY(true);else this.ES.AeY(false);},AwQ:function(E){var B;
if(E===this.Akl())return;var Af_=E;var DW=this.ES;while(!!DW){if(Af_>0){DW.L7(Af_
%10);Af_=(Af_/10)|0;}else DW.L7(-1);DW=(C.DH.isPrototypeOf(B=this.QK(DW,2,0x11))?
B:null);}},Akl:function(){return A.wz(this.Awi(),-1,10);},Ov:function(G){if(this.
F$.Ez>=0)this.BgS(7);},M6:function(G){if(((this.Akl()>0)||this.ARp)&&(this.Cw.Ez<
0))this.BgS(2);else if(this.Akl()<=0)this.E$.Mx=true;},Adt:function(G){A.pe(this.
Dk,this);},BgS:function(GB){var B;var ALD=0;var DW=null;switch(GB){case 2:{DW=this.
Cw;ALD=7;}break;case 7:{DW=this.ES;ALD=2;}break;default:throw new Error(AXu);}while(
!!DW){var A3p=(C.DH.isPrototypeOf(B=this.QK(DW,ALD,0x11))?B:null);if(!!A3p)DW.L7(
A3p.Ez);else if(ALD===7)DW.L7(0);else DW.L7(-1);DW=A3p;}A.pe([this,this.Adt],this
);},AeY:function(E){if(this.Aqr===E)return;this.Aqr=E;this.Am();},BnB:function(E
){if(this.ARp===E)return;this.ARp=E;},ATp:function(E){var B;if(E===this.Awi())return;
var Af_=E;var DW=this.ES;while(!!DW){if(Af_.length>0){DW.L7(A.wz(A.ab2(Af_,1),-1
,10));Af_=A.abV(Af_,Af_.length-1);}else DW.L7(-1);DW=(C.DH.isPrototypeOf(B=this.
QK(DW,2,0x11))?B:null);}},Awi:function(){var B;var ID=A.jV;var O=0;var B7=this.Cw;
for(;O<6;O=O+1){if(!!B7&&(B7.Ez>=0))ID=ID+B7.Ez.toFixed();B7=(C.DH.isPrototypeOf(
B=this.TU(B7,0x11))?B:null);}return ID;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DH._Init.call(this.Cw={I:this},0);C.DH._Init.call(this.CX={I:this},
0);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(this.Eq={I:this},0);C.DH.
_Init.call(this.F$={I:this},0);C.DH._Init.call(this.ES={I:this},0);A.Core.BF._Init.
call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0);this.__proto__=
C.AW;this.H(Ayv);this.Cw.A1(0x3);this.Cw.H(AHV);this.CX.A1(0x3);this.CX.H(AHW);this.
DB.A1(0x3);this.DB.H(AHX);this.Eq.A1(0x3);this.Eq.H(AHY);this.F$.A1(0x3);this.F$.
H(AHZ);this.ES.A1(0x3);this.ES.H(AH0);this.ES.L7(0);this.Fj.Filter=6;this.E$.Filter=
7;this.Ne=A.jb.CK;this.J(this.Cw,0);this.J(this.CX,0);this.J(this.DB,0);this.J(this.
Eq,0);this.J(this.F$,0);this.J(this.ES,0);this.Ba(this.ES);this.Cw.Dk=[this,this.
Adt];this.CX.Dk=[this,this.Adt];this.DB.Dk=[this,this.Adt];this.Eq.Dk=[this,this.
Adt];this.F$.Dk=[this,this.Adt];this.ES.Dk=[this,this.Adt];this.Fj.BG=[this,this.
Ov];this.E$.BG=[this,this.M6];},_Done:function(){this.__proto__=A.Core.P;this.Cw.
_Done();this.CX._Done();this.DB._Done();this.Eq._Done();this.F$._Done();this.ES.
_Done();this.Fj._Done();this.E$._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cw._ReInit();this.CX._ReInit();this.DB._ReInit(
);this.Eq._ReInit();this.F$._ReInit();this.ES._ReInit();this.Fj._ReInit();this.E$.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bim="49278922";C.BDx={Undefined:0,BEB:1,BDP:2};C.AkG={
Tv:null,AiT:null,Le:null,ANI:null,An_:null,push:function(MU){if(!this.Tv){MU.Ahw=
null;MU.MF=null;this.Tv=MU;this.AiT=this.Tv;}else{MU.Ahw=this.AiT;MU.MF=null;this.
AiT.MF=MU;this.AiT=MU;}},BCv:function(MU){var Ql=this.Tv;while(!!Ql){if(Ql.JT.Id===
MU.Id)return Ql;Ql=Ql.MF;}return Ql;},BCe:function(MU){if(MU===this.Tv)this.pop(
);else if(MU===this.AiT){MU=MU.Ahw;if(!!MU)MU.MF=null;this.AiT=MU;}else{MU.Ahw.MF=
MU.MF;MU.MF.Ahw=MU.Ahw;}},Aho:function(E){var F;if(this.Le===E)return;this.Le=E;
if(!!this.Le)this.Le.AgK(2);(F=this.ANI,F[2].call(F[0],this.Le));},Vq:function(G
){var Ql=(C.AUe.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JT.PopupState){if(!this.
Le)this.Aho(this.top());}else if(Ql.JT.PopupState===4){this.pop();this.Aho(this.
top());}else if(Ql.JT.PopupState===5){this.pop();this.Aho(this.top());}else if(Ql.
JT.PopupState===7){this.pop();this.Aho(this.top());}else if(Ql.JT.PopupState===8
){this.pop();this.Aho(this.top());}else if(Ql.JT.PopupState===6){if(Ql===this.Le
){this.pop();this.Aho(this.top());}else this.BCe(Ql);}else if(Ql.JT.PopupState===
3){this.pop();this.Aho(this.top());}}},pop:function(){var AKZ=null;if(!!this.Tv){
AKZ=this.Tv;if(this.Tv===this.AiT){this.Tv=null;this.AiT=null;}else{this.Tv=this.
Tv.MF;if(!this.Tv)throw new Error(AXv);this.Tv.Ahw=null;}AKZ.Ahw=null;AKZ.MF=null;
}return AKZ;},top:function(){return this.Tv;},BBY:function(G){var B;var At6=(A.Device.
PopupContext.isPrototypeOf(B=this.An_.JT)?B:null);if(!!At6){var A4E=this.BCv(At6
);if(!!A4E){A4E.A_o(At6);if(!At6.Show)A4E.AgK(6);}else if(At6.Show){var AKC=A._NewObject(
C.AUe,0);AKC.A_o(At6);AKC.AS8=[this,this.Vq];this.push(AKC);AKC.AgK(0);}}},_Init:
function(aArg){A.Core.Bag._Init.call(this.An_={I:this},0);this.__proto__=C.AkG;this.
An_.ASz=[this,this.BBY];this.An_.BmV(A._GetAutoObject(A.Device.Device).AnN);A.h7++;
},_Done:function(){this.__proto__=null;this.An_._Done();A.h7--;},_ReInit:function(
){this.An_._ReInit();},_Mark:function(D){var B;if((B=this.Tv)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Le)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANI)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUe={Rm:null,MF:null,Ahw:null,JT:null,AS8:null,PopupIdToString:null,AfZ:function(
Bxv,Bx3,Byl,Byc,Bye,Byb,BxN){var Vs=A._NewObject(C.AUd,0);Vs.Bn4(this.JT.Id);Vs.
A__(Bxv);Vs.AS9=Byb;Vs.A$a(this.JT.Ak0);Vs.A_X(this.JT.AkE);Vs.BQ=A._NewObject(C.
N,0);Vs.Lq().Cc=Bye;Vs.Lq().Cf=null;Vs.Lq().CF=Byc;Vs.Lq().CS(Byl);Vs.Lq().Cu(null
);Vs.Lq().Hz(Bx3);Vs.Lq().AFw(BxN);return Vs;},Akm:function(){if(!this.Rm){var Agp=
this.PopupIdToString.BT(this.JT.Id);switch(this.JT.Id){case 91:case 92:this.Rm=this.
AfZ(Agp,A.jV,A.jV,null,null,[this,this.Aga],0);break;case 39:this.Rm=this.AfZ(Agp
,A.aaR(A.acf.AmB),A.aaR(A.acf.Ok),[this,this.A3C],[this,this.A3D],[this,this.Aga
],3);break;case 13:this.Rm=this.AfZ(Agp,A.aaR(A.acf.AmB),A.aaR(A.acf.Bo7),[this,
this.A3B],[this,this.AKH],[this,this.Aga],3);break;case 25:this.Rm=this.AfZ(Agp,
A.aaR(A.acf.AmB),A.aaR(A.acf.Ok),[this,this.A3B],[this,this.AKH],[this,this.Aga]
,3);break;case 16:case 24:case 49:case 74:this.Rm=this.AfZ(Agp,A.aaR(A.acf.AmB),
A.jV,[this,this.A3B],null,[this,this.Aga],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Rm=this.AfZ(Agp,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKH],[this,this.Aga],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 118:
case 105:this.Rm=this.AfZ(Agp,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[
this,this.A3D],[this,this.Aga],3);break;case 110:this.Rm=this.AfZ(Agp,A.jV,A.jV,
null,null,[this,this.Aga],1);break;case 46:case 111:this.Rm=this.AfZ(Agp,A.jV,A.
aaR(A.acf.Ok),null,[this,this.AKH],[this,this.Aga],1);break;case 4:case 7:case 33:
case 115:case 44:case 37:case 38:case 63:case 95:case 108:case 112:this.Rm=this.
AfZ(Agp,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[this,this.A3D],[this,this.
Aga],1);break;default:A.ab5("%s",(AXw+this.JT.Id.toFixed())+AXx);}}switch(this.JT.
Id){case 16:case 49:this.Rm.A$o(true);break;case 91:case 92:this.Rm.A$o(false);break;
default:;}return this.Rm;},AKH:function(G){this.AgK(4);},A3B:function(G){this.AgK(
5);},A3D:function(G){this.AgK(7);},A3C:function(G){this.AgK(8);},Aga:function(G){
this.AgK(3);},A_o:function(E){if(this.JT===E)return;this.JT=E;if(!!this.Rm){this.
Akm().A$a(this.JT.Ak0);this.Akm().A_X(this.JT.AkE);}},AgK:function(Byh){var B;this.
JT.Bn5(Byh);(B=this.AS8)?B[1].call(B[0],this):null;},BBu:function(G){this.AgK(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.AUe;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS8)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.Gh={BooleanToYesNo:null,Dv:function(
){return 2;},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gh;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afo={Uz:null,Kh:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.Uz&&!!this.AC)switch(this.AC.C8(this.AM)){case 0:(F=this.Uz,F[
2].call(F[0],false));break;case 1:(F=this.Uz,F[2].call(F[0],true));break;default:;
}A.abo(this.Uz,0);}},Kc:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.Uz&&!!this.AC)switch(this.AC.C8(this.AM)){case 0:(F=this.Uz,F[
2].call(F[0],false));break;case 1:(F=this.Uz,F[2].call(F[0],true));break;default:;
}A.abo(this.Uz,0);}},Aky:function(E){if(A.aaZ(this.Uz,E))return;if(!!this.Q)A.z$([
this,this.A4f],this.Uz,0);this.Uz=E;if(!!E)A.zX([this,this.A4f],E,0);if(!!E)A.pe([
this,this.A4f],this);},A4f:function(G){var F;if(!!this.Uz){if((F=this.Uz,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BU._Init.call(this,aArg
);this.__proto__=C.Afo;this.J6(this.V,-1);},_Mark:function(D){var B;C.BU._Mark.call(
this,D);if((B=this.Uz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUu={Jl:null,O0:null,IZ:null,Go:null,AK:null,Abo:null,AgQ:null,TQ:null,Sg:null
,AcG:null,W_:null,Hk:null,ABJ:true,Init:function(aArg){var B;A.zX([this,this.Al5
],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0O],0);A.pe([this,this.Al5],this
);},Aj:function(Ae){var F;C.AB.Aj.call(this,Ae);if(this.ABJ)this.N.C4(A.aaL(A.ach.
AQ5));else this.N.C4(A.aaL(A.ach.AQ6));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O0.L(A.jb.Bm);this.Sg.Z(false);this.TQ.Z(false);this.IZ.Z(true);this.Go.
As(false);(F=this.Go.Q,F[2].call(F[0],this.Go.B3));this.Background.L(A.jb.Gm);}else
if(this.Abo.Bw){this.O0.L(A.jb.Text);this.Sg.Z(true);this.TQ.Z(true);this.IZ.Z(false
);this.Go.As(false);(F=this.Go.Q,F[2].call(F[0],this.Go.B3));this.Background.L(A.
jb.E1);}else{this.O0.L(A.jb.Text);this.Sg.Z(false);this.TQ.Z(false);this.IZ.Z(true
);this.Go.As(true);this.Background.L(A.jb.CK);}if(this.AgQ.Bw)this.W_.Z(true);else
this.W_.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhI();},E3:function(
G){A._GetAutoObject(A.Device.Device).AnZ();A._GetAutoObject(A.Device.Device).Ae$(
false);A._GetAutoObject(A.Device.Device).Uy(false);},Al5:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BBa],this);break;case 3:{A.pe([this,this.BfJ],this);A.pe([B=this.Abo,B.AxO],this
);A.pe(this.Abo.MK,this);}break;case 4:A.ab5("%s",AXy);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A5).Fz();},BB0:function(G){this.Bow(!this.ABJ);},Bow:function(
E){if(this.ABJ===E)return;this.ABJ=E;if(!E)A._GetAutoObject(A.Device.Device).Ae$(
false);this.Am();},BBa:function(G){var B;this.BfJ(this);if(this.ABJ)A._GetAutoObject(
A.Device.Device).Ae$(true);A._GetAutoObject(A.Device.Device).WM(65280);A._GetAutoObject(
A.Device.Device).Uy(true);A.pe([B=this.Abo,B.StartTimer],this);A.pe([B=this.AgQ,
B.StartTimer],this);this.Am();},BBb:function(G){A._GetAutoObject(A.Device.Device
).Ae$(false);A._GetAutoObject(A.Device.Device).Uy(false);this.Am();},BBd:function(
G){this.Am();},BfJ:function(G){A._GetAutoObject(A.Device.Device).AhI();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jl._Init.call(this.Jl={I:this},0);C.CG._Init.
call(this.O0={I:this},0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Go._Init.
call(this.Go={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abo={I:this},0);A.Core.Timer._Init.call(this.AgQ={I:this},0);A.acg.Ap.
_Init.call(this.TQ={I:this},0);A.acg.Ap._Init.call(this.Sg={I:this},0);A.acg.Text.
_Init.call(this.AcG={I:this},0);C.W_._Init.call(this.W_={I:this},0);C.CG._Init.call(
this.Hk={I:this},0);this.__proto__=C.AUu;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jl.H(AXz);this.Jl.AkB(0);this.O0.H(AXA);this.O0.R(A.aaR(A.acf.Bal));
this.O0.L(A.jb.Text);this.IZ.H(AXB);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.Go.
Fp(1750);this.Go.Uv(750);this.Go.Akw(0);this.Go.As(true);this.Go.B3=3;this.AK.H(
Ayw);this.Abo.PW(-1);this.Abo.WK(1000);this.AgQ.PW(-1);this.AgQ.WK(5000);this.TQ.
H(AH1);this.Sg.H(AH1);this.Sg.L(A.jb.E1);this.AcG.H(Ayw);this.AcG.R(A.aaR(A.acf.
A$U));this.AcG.L(A.jb.Text);this.W_.H(Ayw);this.Hk.H(AXC);this.Hk.As(false);this.
Hk.R(A.aaR(A.acf.RangeTest));this.Hk.L(A.jb.Text);this.J(this.Jl,0);this.J(this.
O0,0);this.J(this.IZ,0);this.J(this.AK,0);this.J(this.TQ,0);this.J(this.Sg,0);this.
J(this.AcG,0);this.J(this.W_,0);this.J(this.Hk,0);this.N.CF=[this,this.Ew];this.
N.Cc=[this,this.BB0];this.N.C3(A.aaL(A.ach.E2));this.O0.S(A.aaL(A.fl.Af));this.O0.
AY(A.aaL(A.fl.Ak));this.O0.Cm(A.aaL(A.fl.Bg));this.IZ.Ax(A.aaL(A.ach.AD0));this.
Go.Q=[B=this.IZ,B.ASL,B.Cx];this.Abo.MK=[this,this.BBb];this.AgQ.MK=[this,this.BBd
];this.TQ.Ax(A.aaL(A.ach.TQ));this.Sg.Ax(A.aaL(A.ach.Sg));this.AcG.S(A.aaL(A.fl.
Af));this.W_.Au([B=A._GetAutoObject(A.Device.Device),B.ASZ,B.A0P]);this.Hk.S(A.aaL(
A.fl.Ks));this.Hk.AY(A.aaL(A.fl.HK));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jl._Done();this.O0._Done();this.IZ._Done();this.Go._Done();this.AK._Done(
);this.Abo._Done();this.AgQ._Done();this.TQ._Done();this.Sg._Done();this.AcG._Done(
);this.W_._Done();this.Hk._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jl._ReInit();this.O0._ReInit();this.IZ._ReInit();this.Go.
_ReInit();this.AK._ReInit();this.Abo._ReInit();this.AgQ._ReInit();this.TQ._ReInit(
);this.Sg._ReInit();this.AcG._ReInit();this.W_._ReInit();this.Hk._ReInit();this.
O0.R(A.aaR(A.acf.Bal));this.AcG.R(A.aaR(A.acf.A$U));this.Hk.R(A.aaR(A.acf.RangeTest
));this.O0.S(A.aaL(A.fl.Af));this.O0.AY(A.aaL(A.fl.Ak));this.O0.Cm(A.aaL(A.fl.Bg
));this.AcG.S(A.aaL(A.fl.Af));this.Hk.S(A.aaL(A.fl.Ks));this.Hk.AY(A.aaL(A.fl.HK
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbZ={
ScreenType:0,Ns:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nv:
function(G){A._GetAutoObject(C.A5).Cd(this.ScreenType);},_Init:function(aArg){C.
Cp._Init.call(this,aArg);this.__proto__=C.AbZ;},_className:"Application::MenuItemScreen"
};C.Uf={Ad9:null,Mv:null,AmC:false,Init:function(aArg){},Aj:function(Ae){C.Cp.Aj.
call(this,Ae);if(this.AmC){this.Mv.Cx(1);this.Mv.L(A.jb.Ia);}else{this.Mv.Cx(0);
if(this.KL)this.Mv.L(A.jb.Bm);else if(this.Hm)this.Mv.L(A.jb.Text);else this.Mv.
L(A.jb.Bm);}},H0:function(G){var F,Cv;if(!!this.Ad9){(Cv=this.Ad9,Cv[2].call(Cv[
0],!(F=this.Ad9,F[1].call(F[0]))));this.AFf((F=this.Ad9,F[1].call(F[0])));A.pe([
this,this.DL],this);}},A3H:function(G){this.KL=true;this.DL(this);},AFf:function(
E){if(this.AmC===E)return;this.AmC=E;this.DL(this);this.Am();},A3_:function(G){var
F;this.AFf((F=this.Ad9,F[1].call(F[0])));},A09:function(s){this.A3_(s);},DL:function(
G){var F;if(!this.N||!this.KL)return;if(this.AmC){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8I));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATd:function(E){if(A.aaZ(this.Ad9,E))
return;if(!!this.Ad9)A.z$([this,this.A09],this.Ad9,0);this.Ad9=E;if(!!E)A.zX([this
,this.A09],E,0);if(!!E)A.pe([this,this.A09],this);},_Init:function(aArg){C.Cp._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mv={I:this},0);this.__proto__=C.Uf;this.
V.L(A.jb.Ia);this.Mv.H(AH2);this.Mv.Cx(0);this.J(this.Mv,0);this.Mv.Ax(A.aaL(A.ach.
AqO));this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.Mv._Done();C.Cp.
_Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Mv._ReInit();
},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Ad9)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANQ={H9:null,IT:null,_Init:function(aArg){C.Ch.
_Init.call(this,aArg);C.SY._Init.call(this.H9={I:this},0);C.AGR._Init.call(this.
IT={I:this},0);this.__proto__=C.ANQ;var B;this.Jf(A.aaR(A.acf.ACK));this.H9.H(AhY
);this.H9.Ai(true);this.H9.T(A.aaR(A.acf.Date));this.H9.Bh(true);this.IT.H(U5);this.
IT.Ai(true);this.IT.T(A.aaR(A.acf.Bq));this.J(this.H9,-1);this.J(this.IT,-1);this.
H9.Ab6([B=this.H9,B.FY]);this.H9.Gt([this,this.D$,this.GT]);this.H9.Akv(A.aaL(A.
ach.Edit));this.H9.Aca([B=A._GetAutoObject(A.Device.Helper),B.U7,B.U_]);this.IT.
Ab6([B=this.IT,B.FY]);this.IT.Gt([this,this.D$,this.GT]);this.IT.Akv(A.aaL(A.ach.
Edit));this.IT.Aca([B=A._GetAutoObject(A.Device.Helper),B.U7,B.U_]);},_Done:function(
){this.__proto__=C.Ch;this.H9._Done();this.IT._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.H9._ReInit();this.IT._ReInit();this.Jf(A.
aaR(A.acf.ACK));this.H9.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bq));},_Mark:
function(D){var B;C.Ch._Mark.call(this,D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVt={Rf:null,FM:null,B0:null,OO:null,YT:null,Aa_:null,_Init:function(aArg){C.
Ch._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMJ._Init.call(this.
FM={I:this},0);C.AU3._Init.call(this.B0={I:this},0);C.AU5._Init.call(this.OO={I:
this},0);C.Afo._Init.call(this.YT={I:this},0);C.Aa_._Init.call(this.Aa_={I:this}
,0);this.__proto__=C.AVt;var B;this.Jf(A.aaR(A.acf.Temperature));this.FM.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXD);this.B0.Ai(true);this.B0.T(A.aaR(A.acf.
Arr));this.B0.Bh(false);this.OO.H(Aao);this.OO.Ai(true);this.OO.T(A.aaR(A.acf.Undertemperature
));this.OO.Bh(true);this.OO.Bx(3800);this.OO.Ge(3000);this.OO.EU(5000);this.OO.A$h(
A.aaR(A.acf.AG4));this.YT.H(AXE);this.YT.Ai(true);this.YT.Z(true);this.YT.T(A.aaR(
A.acf.A5F));this.J(this.B0,0);this.J(this.OO,0);this.J(this.YT,0);this.B0.Ab6([B=
this.B0,B.FY]);this.B0.Gt([this,this.D$,this.GT]);this.B0.Akv(A.aaL(A.ach.Edit));
this.B0.L5([B=this.B0,B.Ay6]);this.B0.L8(A.aaL(A.ach.AnQ));this.B0.Au([B=this.FM
,B.Ca,B.Cb]);this.B0.CI(this.FM);this.B0.A_V([B=this.FM,B.AS7,B.A0W]);this.B0.A_U([
B=this.FM,B.AS6,B.A0V]);this.OO.L5([B=this.B0,B.Ay6]);this.OO.L8(A.aaL(A.ach.AnQ
));this.OO.Au([B=A._GetAutoObject(A.Device.Device),B.A9Q,B.Bb2]);this.YT.CI(this.
Aa_);this.YT.Aky([B=A._GetAutoObject(A.Device.Device),B.A8$,B.BbL]);},_Done:function(
){this.__proto__=C.Ch;this.Rf._Done();this.FM._Done();this.B0._Done();this.OO._Done(
);this.YT._Done();this.Aa_._Done();C.Ch._Done.call(this);},_ReInit:function(){C.
Ch._ReInit.call(this);this.Rf._ReInit();this.FM._ReInit();this.B0._ReInit();this.
OO._ReInit();this.YT._ReInit();this.Aa_._ReInit();this.Jf(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Arr));this.OO.T(A.aaR(A.acf.Undertemperature));this.OO.
A$h(A.aaR(A.acf.AG4));this.YT.T(A.aaR(A.acf.A5F));},_Mark:function(D){var B;C.Ch.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN3={PL:null,PM:null,Sz:null,V$:null,SB:null,SA:null,Gh:null,Acv:null,Init:function(
aArg){A.zX([this,this.BpS],this.PM.Q,0);},BpS:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw$((F=this.PM.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch.
_Init.call(this,aArg);C.Iu._Init.call(this.PL={I:this},0);C.BU._Init.call(this.PM={
I:this},0);C.Afo._Init.call(this.Sz={I:this},0);C.Iu._Init.call(this.V$={I:this}
,0);C.Afo._Init.call(this.SB={I:this},0);C.Afo._Init.call(this.SA={I:this},0);C.
Gh._Init.call(this.Gh={I:this},0);C.Acv._Init.call(this.Acv={I:this},0);this.__proto__=
C.AN3;var B;this.N.H(U4);this.Jf(A.aaR(A.acf.Device));this.PL.H(AhY);this.PL.Ai(
true);this.PL.T(A.aaR(A.acf.A$5));this.PL.Bh(false);this.PL.Ge(2);this.PL.EU(60);
this.PL.IW(A.aaR(A.acf.AHi));this.PL.Jg(A.aaR(A.acf.AHi));this.PM.H(AXF);this.PM.
Ai(true);this.PM.T(A.aaR(A.acf.Baa));this.PM.Bh(true);this.PM.Bx(0);this.PM.Ge(-
1);this.PM.EU(1);this.Sz.H(Aao);this.Sz.Ai(true);this.Sz.T(A.aaR(A.acf.HG));this.
Sz.Bh(false);this.Sz.Bx(0);this.Sz.Ge(-1);this.Sz.EU(1);this.V$.H(Alg);this.V$.Ai(
true);this.V$.T(A.aaR(A.acf.A53));this.V$.Bh(true);this.V$.IW(AfH);this.V$.Jg(AfH
);this.SB.H(AhZ);this.SB.Ai(true);this.SB.T(A.aaR(A.acf.AsT));this.SB.Bh(false);
this.SB.Bx(1);this.SB.Ge(-1);this.SB.EU(1);this.SA.H(Aol);this.SA.Ai(true);this.
SA.T(A.aaR(A.acf.Asv));this.SA.Bh(true);this.SA.Bx(0);this.SA.Ge(-1);this.SA.EU(
1);this.Acv.Au(A._GetAutoObject(A.Device.Device).AxN);this.J(this.PL,0);this.J(this.
PM,0);this.J(this.Sz,0);this.J(this.V$,0);this.J(this.SB,0);this.J(this.SA,0);this.
PL.Au([B=A._GetAutoObject(A.Device.Device),B.A9I,B.BbY]);this.PM.Au([B=this.Acv,
B.Ca,B.Cb]);this.PM.CI(this.Acv);this.Sz.CI(this.Gh);this.Sz.Aky([B=A._GetAutoObject(
A.Device.Device),B.AEQ,B.AIY]);this.V$.Au([B=A._GetAutoObject(A.Device.Device),B.
A86,B.BbH]);this.SB.CI(this.Gh);this.SB.Aky([B=A._GetAutoObject(A.Device.Device)
,B.A9R,B.Bb3]);this.SA.CI(this.Gh);this.SA.Aky([B=A._GetAutoObject(A.Device.Device
),B.ASP,B.A0I]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.PL._Done(
);this.PM._Done();this.Sz._Done();this.V$._Done();this.SB._Done();this.SA._Done(
);this.Gh._Done();this.Acv._Done();C.Ch._Done.call(this);},_ReInit:function(){C.
Ch._ReInit.call(this);this.PL._ReInit();this.PM._ReInit();this.Sz._ReInit();this.
V$._ReInit();this.SB._ReInit();this.SA._ReInit();this.Gh._ReInit();this.Acv._ReInit(
);this.Jf(A.aaR(A.acf.Device));this.PL.T(A.aaR(A.acf.A$5));this.PL.IW(A.aaR(A.acf.
AHi));this.PL.Jg(A.aaR(A.acf.AHi));this.PM.T(A.aaR(A.acf.Baa));this.Sz.T(A.aaR(A.
acf.HG));this.V$.T(A.aaR(A.acf.A53));this.SB.T(A.aaR(A.acf.AsT));this.SA.T(A.aaR(
A.acf.Asv));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.PL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUG={Wc:null,Wb:
null,QQ:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bi9
],this.QQ.Q,0);},Bi9:function(G){var F;A._GetAutoObject(A.Device.Device).Aks((F=
this.QQ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch._Init.call(this,aArg);C.
Np._Init.call(this.Wc={I:this},0);C.Np._Init.call(this.Wb={I:this},0);C.AUZ._Init.
call(this.QQ={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUG;var B;this.Jf(A.aaR(A.acf.Aso));this.Wc.H(I1);this.
Wc.Ai(true);this.Wc.T(A.aaR(A.acf.AjD));this.Wc.Bh(false);this.Wc.Ns(87);this.Wb.
H(Ayx);this.Wb.Ai(true);this.Wb.T(A.aaR(A.acf.Aqk));this.Wb.Bh(true);this.Wb.Ns(
88);this.QQ.H(U5);this.QQ.Ai(true);this.QQ.T(A.aaR(A.acf.A5K));this.QQ.Bh(false);
this.QQ.Ge(-1);this.QQ.EU(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.Wc,0);this.J(this.Wb,0);this.J(this.
QQ,0);this.Wc.AR=[B=this.Wc,B.Nv];this.Wb.AR=[B=this.Wb,B.Nv];this.QQ.Au([B=this.
EartagNrAssignmentMode,B.Ca,B.Cb]);this.QQ.CI(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.Wc._Done();this.Wb._Done(
);this.QQ._Done();this.EartagNrAssignmentMode._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.Wc._ReInit();this.Wb._ReInit();this.QQ._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jf(A.aaR(A.acf.Aso));this.Wc.T(A.aaR(
A.acf.AjD));this.Wb.T(A.aaR(A.acf.Aqk));this.QQ.T(A.aaR(A.acf.A5K));},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W_={Q:null,TransponderProtocolToString:
null,Apn:null,Background:null,Y:null,St:null,GO:null,PQ:null,OQ:null,Pu:null,B6:
null,EV:null,ST:null,N_:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},Hg:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GO.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).BjF();if(BN<900){var JH=A._GetAutoObject(
A.Device.Converter).ANG(BN);if(!!JH)this.B6.R(((this.CountryToString.Lz(JH)+AcP)+
BN.toFixed())+Pa);else this.B6.R(BN.toFixed());if(JH===10){var AKk=this.A7B((F=this.
Q,F[1].call(F[0])).Id);this.B6.R(this.B6.String+((((AXG+this.Apn.BqB(AKk))+AcP)+
A.abl(this.Apn.BqA(AKk),2,10))+Pa));}this.B6.Z(true);this.Pu.Z(true);this.OQ.Z(false
);this.PQ.Z(false);}else{this.OQ.R(((A._GetAutoObject(A.Device.Converter).Bip(BN
)+AcP)+BN.toFixed())+Pa);this.OQ.Z(true);this.PQ.Z(true);this.B6.Z(false);this.Pu.
Z(false);}if(BN===276){this.EV.R(this.Apn.BT(this.A7B((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N_.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GO.R(A.jV);this.OQ.
R(A.jV);this.EV.R(A.jV);this.B6.R(A.jV);this.N_.R(A.jV);}},A7B:function(Jn){var Qz=
0;var JH=A._GetAutoObject(A.Device.Converter).S_(Jn);switch(JH){case 10:{var Gl=
A._GetAutoObject(A.Device.Converter).AVK(Jn);Qz=A._GetAutoObject(A.Device.Converter
).AC_(Gl);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apn={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.St={I:this},0);C.CG._Init.call(this.GO={I:this},0);C.CG._Init.
call(this.PQ={I:this},0);C.CG._Init.call(this.OQ={I:this},0);C.CG._Init.call(this.
Pu={I:this},0);C.CG._Init.call(this.B6={I:this},0);C.CG._Init.call(this.EV={I:this
},0);C.CG._Init.call(this.ST={I:this},0);C.CG._Init.call(this.N_={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W_;
this.H(AcR);this.Background.A1(0x3F);this.Background.H(AcR);this.Background.L(A.
jb.CV);this.Y.A1(0x3F);this.Y.H(AcR);this.Y.J0(9);this.St.H(AH3);this.St.Ai(true
);this.St.R(A.aaR(A.acf.GO)+A.aaR(A.acf.Colon));this.St.A4(0x11);this.St.L(A.jb.
Text);this.GO.H(AH4);this.GO.Ai(true);this.GO.R(AXH);this.GO.A4(0x14);this.GO.L(
A.jb.Text);this.PQ.H(Ayy);this.PQ.Ai(true);this.PQ.R(A.aaR(A.acf.A$y)+A.aaR(A.acf.
Colon));this.PQ.A4(0x11);this.PQ.L(A.jb.Text);this.OQ.H(AH5);this.OQ.Ai(true);this.
OQ.R(AXI);this.OQ.A4(0x14);this.OQ.L(A.jb.Text);this.Pu.H(Ayy);this.Pu.Ai(true);
this.Pu.R(A.aaR(A.acf.B6)+A.aaR(A.acf.Colon));this.Pu.A4(0x11);this.Pu.L(A.jb.Text
);this.B6.H(AH5);this.B6.Ai(true);this.B6.R(AXJ);this.B6.A4(0x14);this.B6.L(A.jb.
Text);this.EV.H(AXK);this.EV.Ai(true);this.EV.R(AXL);this.EV.A4(0x14);this.EV.L(
A.jb.Text);this.ST.H(AXM);this.ST.Ai(true);this.ST.R(A.aaR(A.acf.N_)+A.aaR(A.acf.
Colon));this.ST.A4(0x11);this.ST.L(A.jb.Text);this.N_.H(AXN);this.N_.Ai(true);this.
N_.R(AXO);this.N_.A4(0x14);this.N_.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.St,0);this.J(this.GO,0);this.J(this.PQ,0);this.J(this.OQ,0
);this.J(this.Pu,0);this.J(this.B6,0);this.J(this.EV,0);this.J(this.ST,0);this.J(
this.N_,0);this.St.S(A.aaL(A.fl.Ak));this.St.AY(A.aaL(A.fl.Bg));this.GO.S(A.aaL(
A.fl.Ak));this.GO.AY(A.aaL(A.fl.Bg));this.PQ.S(A.aaL(A.fl.Ak));this.PQ.AY(A.aaL(
A.fl.Bg));this.OQ.S(A.aaL(A.fl.Ak));this.OQ.AY(A.aaL(A.fl.Bg));this.Pu.S(A.aaL(A.
fl.Ak));this.Pu.AY(A.aaL(A.fl.Bg));this.B6.S(A.aaL(A.fl.Ak));this.B6.AY(A.aaL(A.
fl.Bg));this.EV.S(A.aaL(A.fl.Ak));this.EV.AY(A.aaL(A.fl.Bg));this.ST.S(A.aaL(A.fl.
Ak));this.ST.AY(A.aaL(A.fl.Bg));this.N_.S(A.aaL(A.fl.Ak));this.N_.AY(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apn._Done();this.Background._Done();this.Y._Done();this.St._Done();
this.GO._Done();this.PQ._Done();this.OQ._Done();this.Pu._Done();this.B6._Done();
this.EV._Done();this.ST._Done();this.N_._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apn._ReInit();this.Background._ReInit();this.Y._ReInit();this.St.
_ReInit();this.GO._ReInit();this.PQ._ReInit();this.OQ._ReInit();this.Pu._ReInit(
);this.B6._ReInit();this.EV._ReInit();this.ST._ReInit();this.N_._ReInit();this.CountryToString.
_ReInit();this.St.R(A.aaR(A.acf.GO)+A.aaR(A.acf.Colon));this.PQ.R(A.aaR(A.acf.A$y
)+A.aaR(A.acf.Colon));this.Pu.R(A.aaR(A.acf.B6)+A.aaR(A.acf.Colon));this.ST.R(A.
aaR(A.acf.N_)+A.aaR(A.acf.Colon));this.St.S(A.aaL(A.fl.Ak));this.St.AY(A.aaL(A.fl.
Bg));this.GO.S(A.aaL(A.fl.Ak));this.GO.AY(A.aaL(A.fl.Bg));this.PQ.S(A.aaL(A.fl.Ak
));this.PQ.AY(A.aaL(A.fl.Bg));this.OQ.S(A.aaL(A.fl.Ak));this.OQ.AY(A.aaL(A.fl.Bg
));this.Pu.S(A.aaL(A.fl.Ak));this.Pu.AY(A.aaL(A.fl.Bg));this.B6.S(A.aaL(A.fl.Ak)
);this.B6.AY(A.aaL(A.fl.Bg));this.EV.S(A.aaL(A.fl.Ak));this.EV.AY(A.aaL(A.fl.Bg)
);this.ST.S(A.aaL(A.fl.Ak));this.ST.AY(A.aaL(A.fl.Bg));this.N_.S(A.aaL(A.fl.Ak));
this.N_.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.B6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QY={D3:null,A$N:A.jV,Aj:function(Ae){C.Fm.Aj.call(
this,Ae);if(this.MB.Fo())this.D3.CW(A.jb.AV);else this.D3.CW(this.Background.AQ);
this.D3.Zz(this.G_.AQ);},ZE:function(E){if(this.A$N===E)return;this.A$N=E;this.D3.
Text.R(E);this.D3.Z(E!==A.jV);},_Init:function(aArg){C.Fm._Init.call(this,aArg);
C.D3._Init.call(this.D3={I:this},0);this.__proto__=C.QY;this.Background.H(AXP);this.
MB.H(Xd);this.OJ.H(AH6);this.Q4.H(AH6);this.D3.H(AXQ);this.D3.Z(false);this.J(this.
D3,0);this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=C.Fm;this.D3._Done();C.Fm._Done.call(this
);},_ReInit:function(){C.Fm._ReInit.call(this);this.D3._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.D3)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D3={B8:null,AeF:null,Ap:null,Text:null
,DM:A.jV,AmP:0,M$:0,Jh:0,A56:0x14,Init:function(aArg){},T:function(E){if(this.DM===
E)return;this.DM=E;this.Text.R(E);},BDb:function(G){this.Ap.H(this.Text.M);this.
AeF.H(this.Text.M);},Zz:function(E){if(this.AmP===E)return;this.AmP=E;this.AeF.L(
E);this.Text.L(E);},CW:function(E){if(this.M$===E)return;this.M$=E;this.Ap.L(E);
},S:function(E){if(this.B8===E)return;this.B8=E;this.Text.S(E);},Ho:function(E){
if(this.Jh===E)return;this.Jh=E;this.Text.Ho(E);},BmA:function(E){if(this.A56===
E)return;this.A56=E;this.Text.A4(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NY._Init.call(this.AeF={I:this},0);A.acg.NY._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D3;this.H(AH7);
this.AeF.A1(0x8);this.AeF.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CV);this.Text.
A1(0xD);this.Text.H(AH7);this.Text.Ho(5);this.Text.Je(true);this.Text.A4(0x14);this.
Text.L(A.jb.Text);this.J(this.AeF,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeF.Ax(A.aaL(A.ach.AP3));this.Ap.Ax(A.aaL(A.ach.AP2));this.Text.Q7([this,this.BDb
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeF._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeF._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ub={DZ:null,Y:null,Ay:null,DG:function(G){var B;C.AB.DG.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALs(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkM();A._GetAutoObject(A.Device.Helper).Ass();},Ik:function(G){},AcV:function(
s){this.Ik(s);},A3Z:function(G){A._GetAutoObject(C.A5).Fz();},Fh:function(G){var
B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Bs[1]);},ALs:function(G){},BHk:function(s){this.ALs(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ub;this.Background.L(A.jb.CV);this.N.Z(true);this.N.CS(A.jV);this.Ds(C.Aq0);this.
DZ.A1(0x3F);this.DZ.H(Fc);this.DZ.L(A.jb.CK);this.Y.H(Fc);this.Y.J0(9);this.Ay.H(
Iw);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CF=[this,this.A3Z
];this.N.C3(A.aaL(A.ach.E2));this.Y.En=[this,this.Fh];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV4={WH:function(
G){this.Agw();this.I8(A.aaR(A.acf.AVA),[this,this.ATZ],7);this.I8(A.aaR(A.acf.Bpa
),[this,this.BmD],6);this.I8(A.aaR(A.acf.AGr),[this,this.ATL],3);this.I8(A.aaR(A.
acf.An0),[this,this.AwZ],2);this.I8(A.aaR(A.acf.AdU),[this,this.AE9],1);this.I8(
A.aaR(A.acf.AuH),[this,this.AE3],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DG:function(G){},Aby:function(){return C.ANh;},Abz:function(){return C.APJ;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var ABL=A._NewObject(
A.Device.BoolFilterCriterion,0);ABL.Initialize(12,0,true,true);Be.CY(ABL);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HR:function(G){var F;C.GK.HR.call(this,G);if(this.Ake(
)===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajo((F=this.Fk,F[1].call(
F[0]))));this.N.Cf=[this,this.Aap];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false
);},Agi:function(){A._GetAutoObject(C.A5).Cd(41);},_Init:function(aArg){C.GK._Init.
call(this,aArg);this.__proto__=C.AV4;var B;this.Ds(C.APF);this.Dl(A.aaR(A.acf.A8v
));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A9V,B.Bb4]);},_ReInit:function(
){C.GK._ReInit.call(this);this.Dl(A.aaR(A.acf.A8v));},_className:"Application::WatchListScreen"
};C.AMo={DG:function(G){var B;var JI=(A.Core.BF.isPrototypeOf(G)?G:null);if(((JI.
CO===4)||(JI.CO===5))===false){C.Ax6.DG.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdw=A._GetAutoObject(A.Device.Device
).K0;var To;if(JI.CO===5)To=5;else To=4;var ABp=A._GetAutoObject(A.acj.DV).Bd6(Bdw
,To);var FJ=(((Bdw+((ABp/2)|0))/ABp)|0)*ABp;if(JI.CO===4)FJ+=ABp;else if(JI.CO===
5)FJ-=ABp;if(FJ>999900)FJ=999900;if(FJ<100)FJ=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FJ);},AsG:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O7,B.CF],this);else A._GetAutoObject(C.A5).Fz();
},W0:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsI();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$3()===false){this.H$.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K0
);this.H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).Fz();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H$.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K0);this.H$.Cs(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A5).Fz();}},AkT:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O7,B.Cc],this);},Bd5:function(){var
ALG=A._GetAutoObject(A.Device.Helper).W.AhS(1);if(ALG>=100000)ALG=(Math.round(ALG
/1000)|0)*1000;return ALG;},_Init:function(aArg){C.Ax6._Init.call(this,aArg);this.
__proto__=C.AMo;},_className:"Application::AnimalActionWeighingScreen"};C.AVO={Wg:
null,YV:null,Rf:null,AeQ:null,_Init:function(aArg){C.Ch._Init.call(this,aArg);C.
BU._Init.call(this.Wg={I:this},0);C.BU._Init.call(this.YV={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.
AVO;var B;this.Jf(A.aaR(A.acf.AHj));this.Wg.H(AhY);this.Wg.Ai(true);this.Wg.T(A.
aaR(A.acf.Bau));this.Wg.Bh(true);this.Wg.Bx(0);this.YV.H(U5);this.YV.Ai(true);this.
YV.T(A.aaR(A.acf.Bat));this.YV.Bh(false);this.J(this.Wg,0);this.J(this.YV,0);this.
Wg.Au([B=this.Rf,B.Ca,B.Cb]);this.Wg.CI(this.Rf);this.YV.Au([B=this.AeQ,B.Ca,B.Cb
]);this.YV.CI(this.AeQ);},_Done:function(){this.__proto__=C.Ch;this.Wg._Done();this.
YV._Done();this.Rf._Done();this.AeQ._Done();C.Ch._Done.call(this);},_ReInit:function(
){C.Ch._ReInit.call(this);this.Wg._ReInit();this.YV._ReInit();this.Rf._ReInit();
this.AeQ._ReInit();this.Jf(A.aaR(A.acf.AHj));this.Wg.T(A.aaR(A.acf.Bau));this.YV.
T(A.aaR(A.acf.Bat));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.
Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeQ={MassUnitToString:null
,Dv:function(){return 2;},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwV(E);}
,Init:function(aArg){var B;A.zX([this,this.BeK],[B=A._GetAutoObject(A.Device.Device
),B.ASO,B.A0H],0);A.pe([this,this.BeK],this);},BeK:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeQ;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax6={H$:null,Aju:null,MassUnit:null,
K0:null,VH:null,AnM:null,AcI:null,Z6:null,O7:null,YM:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).Af5());A.zX([this,this.AKI],[B=A._GetAutoObject(
A.Device.Device),B.AET,B.AI1],0);A.zX([this,this.BB1],[B=A._GetAutoObject(A.Device.
Device),B.AEZ,B.AI5],0);A.zX([this,this.BB2],[B=this.O7,B.Arz,B.JD],0);},Aj:function(
Ae){C.AB.Aj.call(this,Ae);this.AxZ();this.Z8();},H0:function(G){this.W0(this);},
CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsI();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lk())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),
0,null);this.H$.G8();this.H$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AG0();else{var BDq=this.Bd5();this.Z6.Z(true);this.AcI.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BDq);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E3:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsI();else A._GetAutoObject(A.Device.Device).AhL(
);},AxZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhv();break;case 3:{this.Bhv();this.Z6.Z(false);this.AcI.Z(false
);if(this.A$3()){this.VH.Z(false);this.K0.H(A.abO(this.K0.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O7.As(true);this.O7.Z(true);this.Ba(this.O7);}}break;
case 4:this.K0.R(A.aaR(A.acu.Akh));break;default:A.ab5("%s%e",AH8,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z8:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C3(A.aaL(A.ach.AeA));this.N.Cu(null);
this.YM.Z(false);this.N.C4(A.aaL(A.ach.Am2));this.N.CS(A.jV);}break;case 3:{if(this.
O7.A0<=1){this.N.C3(null);this.N.Cu(null);this.YM.Z(false);this.N.C4(null);}else{
this.N.C3(A.aaL(A.ach.Am1));this.N.Cu(A.aaL(A.ach.AeB));this.YM.Z(true);this.N.C4(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C4(A.aaL(A.ach.AvO));this.
N.Cc=[this,this.Bmq];this.N.Cu(null);this.YM.Z(false);this.N.CS(A.jV);}break;default:;
}},AsG:function(G){},Bxc:function(s){this.AsG(s);},W0:function(G){},A0Z:function(
s){this.W0(s);},Bmq:function(G){this.CC(this);},BB1:function(G){this.Am();},AKI:
function(G){this.Am();},A$3:function(){var Auy=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auy>0)&&!A._GetAutoObject(A.Device.Helper).Bqy(Auy
,this.H$.Timestamp);},AkT:function(G){},A0Y:function(s){this.AkT(s);},BB2:function(
G){this.Am();},Bhv:function(){this.K0.R(A._GetAutoObject(A.Device.Converter).Ak6(
A._GetAutoObject(A.Device.Device).K0));},Bd5:function(){return A._GetAutoObject(
A.Device.Helper).W.AhS(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Aju={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K0={I:this},0);A.acg.Text._Init.call(this.VH={I:this
},0);C.AxY._Init.call(this.AnM={I:this},0);A.acg.Aep._Init.call(this.AcI={I:this
},0);A.acg.Aep._Init.call(this.Z6={I:this},0);C.AV9._Init.call(this.O7={I:this},
0);A.acg.Ap._Init.call(this.YM={I:this},0);this.__proto__=C.Ax6;this.Background.
L(A.jb.CK);this.N.Z(true);this.Ds(C.IP);this.Aju.A1(0x3F);this.Aju.H(Ayz);this.Aju.
L(A.jb.CK);this.MassUnit.H(AXR);this.MassUnit.A4(0x9);this.MassUnit.R(A.aaR(A.acf.
AAk));this.MassUnit.L(A.jb.Text);this.K0.H(AXS);this.K0.A4(0x14);this.K0.R(A.aaR(
A.acu.Akh));this.K0.L(A.jb.Text);this.VH.H(AXT);this.VH.R(A.aaR(A.acf.BaF));this.
VH.L(A.jb.Text);this.VH.Z(true);this.AnM.H(AXU);this.AcI.H(AXV);this.AcI.L(A.jb.
Aea);this.AcI.Z(false);this.Z6.H(AXW);this.Z6.L(A.jb.Aea);this.Z6.Bnd(true);this.
Z6.Z(false);this.O7.A1(0x3F);this.O7.H(Ayz);this.O7.As(false);this.O7.Z(false);this.
YM.H(AXX);this.YM.L(A.jb.Bm);this.J(this.Aju,0);this.J(this.MassUnit,0);this.J(this.
K0,0);this.J(this.VH,0);this.J(this.AcI,0);this.J(this.Z6,0);this.J(this.O7,0);this.
J(this.YM,0);this.N.CF=[this,this.Bxc];this.N.Cf=[this,this.A0Y];this.N.Cc=[this
,this.A0Z];this.MassUnit.S(A.aaL(A.fl.EK));this.K0.S(A.aaL(A.fl.Aet));this.VH.S(
A.aaL(A.fl.EK));this.AcI.ZD(this.AnM);this.Z6.ZD(this.AnM);this.H$=A._NewObject(
A.Device.Rating,0);this.O7.L6(A._GetAutoObject(A.Device.Helper).W);this.O7.Akz(this.
H$);this.YM.Ax(A.aaL(A.ach.AQZ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Aju._Done();this.MassUnit._Done();this.K0._Done();this.VH._Done();this.
AnM._Done();this.AcI._Done();this.Z6._Done();this.O7._Done();this.YM._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aju._ReInit();
this.MassUnit._ReInit();this.K0._ReInit();this.VH._ReInit();this.AnM._ReInit();this.
AcI._ReInit();this.Z6._ReInit();this.O7._ReInit();this.YM._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAk));this.K0.R(A.aaR(A.acu.Akh));this.VH.R(A.aaR(A.acf.BaF));this.
MassUnit.S(A.aaL(A.fl.EK));this.K0.S(A.aaL(A.fl.Aet));this.VH.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AWb={FM:null
,OR:null,Nl:null,C$:null,L2:null,T_:null,Init:function(aArg){var B;A.zX([this,this.
GI],[B=this.FM,B.Ca,B.Cb],0);A.pe([this,this.GI],this);},CC:function(G){C.Ch.CC.
call(this,G);A.pe([this,this.GI],this);},Blb:function(G){var F;this.L2.BW.L(this.
L2.V.AQ);if(!!this.L2.Q)this.L2.BW.R((A._GetAutoObject(A.Device.Converter).Tf((F=
this.L2.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DV).AaC());},GI:function(
G){var AJE=true;if(this.FM.Q===1)AJE=false;this.C$.Ai(AJE);this.C$.As(AJE);this.
C$.Z(AJE);A._GetAutoObject(A.Device.Helper).ANA(this.Y);},_Init:function(aArg){C.
Ch._Init.call(this,aArg);C.AMK._Init.call(this.FM={I:this},0);C.AHu._Init.call(this.
OR={I:this},0);C.AU4._Init.call(this.Nl={I:this},0);C.AkR._Init.call(this.C$={I:
this},0);C.Iu._Init.call(this.L2={I:this},0);C.BU._Init.call(this.T_={I:this},0);
this.__proto__=C.AWb;var B;this.Jf(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
AsW));this.FM.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OR.Au(A._GetAutoObject(
A.Device.Device).OR);this.Nl.H(AXY);this.Nl.Ai(true);this.C$.H(Aom);this.C$.Ai(true
);this.C$.T(A.aaR(A.acf.KO));this.C$.Bh(true);this.C$.Ge(1000);this.C$.EU(99000);
this.L2.H(Ata);this.L2.Ai(true);this.L2.T(A.aaR(A.acf.A5O));this.L2.Ge(50);this.
L2.EU(2000);this.L2.ATr(A._GetAutoObject(A.acj.DV).Az2());this.T_.H(AhZ);this.T_.
Ai(true);this.T_.T(A.aaR(A.acf.A8d));this.T_.Ge(-1);this.T_.EU(1);this.J6(this.Y
,-1);this.J6(this.Ay,-1);this.J(this.Nl,0);this.J(this.C$,0);this.J(this.L2,0);this.
J(this.T_,0);this.Nl.Ab6([B=this.Nl,B.FY]);this.Nl.Gt([this,this.D$,this.GT]);this.
Nl.Akv(A.aaL(A.ach.Edit));this.Nl.L5([B=this.Nl,B.Ay6]);this.Nl.L8(A.aaL(A.ach.AnQ
));this.Nl.Au([B=this.FM,B.Ca,B.Cb]);this.Nl.CI(this.FM);this.Nl.A_V([B=this.FM,
B.AS7,B.A0W]);this.Nl.A_U([B=this.FM,B.AS6,B.A0V]);this.C$.Gt([this,this.D$,this.
GT]);this.C$.L5([B=this.Nl,B.Ay6]);this.C$.L8(A.aaL(A.ach.AnQ));this.C$.Au([B=this.
FM,B.A84,B.ATc]);this.L2.Gt([this,this.D$,this.GT]);this.L2.L5([B=this.Nl,B.Ay6]
);this.L2.L8(A.aaL(A.ach.AnQ));this.L2.Au([B=this.FM,B.A82,B.ATa]);this.L2.A_8([
this,this.Blb]);this.T_.Gt([this,this.D$,this.GT]);this.T_.Au([B=this.OR,B.Ca,B.
Cb]);this.T_.CI(this.OR);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;
this.FM._Done();this.OR._Done();this.Nl._Done();this.C$._Done();this.L2._Done();
this.T_._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.FM._ReInit();this.OR._ReInit();this.Nl._ReInit();this.C$._ReInit();this.L2.
_ReInit();this.T_._ReInit();this.Jf(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
AsW));this.C$.T(A.aaR(A.acf.KO));this.L2.T(A.aaR(A.acf.A5O));this.T_.T(A.aaR(A.acf.
A8d));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.FM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU4={Y7:null,Init:
function(aArg){var B;A.zX([this,this.AfI],[B=A._GetAutoObject(A.Device.Device),B.
ASO,B.A0H],0);A.pe([this,this.AfI],this);},A4r:function(G){A._GetAutoObject(A.Device.
Device).AZ(37,true,A.jV,0,[this,this.Bch]);},A2e:function(G){var F;if(this.A8===
1){var BP=this.D8;this.D8=this.D8-A._GetAutoObject(A.acj.DV).Az2();if(this.D8<this.
AlS)this.D8=this.AlS;if(this.DX!==BP){if(!!this.J4)(F=this.J4,F[2].call(F[0],this.
D8));A.abo(this.J4,0);}}if(this.A8===2){var BP=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).Az2();if(this.DX<this.D8)this.DX=this.D8;if(this.DX!==BP){if(!!this.J3
)(F=this.J3,F[2].call(F[0],this.DX));A.abo(this.J3,0);}}this.DL(this);this.Am();
},A2Q:function(G){var F;if(this.A8===1){var BP=this.D8;this.D8=this.D8+A._GetAutoObject(
A.acj.DV).Az2();if(this.D8>this.DX)this.D8=this.DX;if(this.D8!==BP){if(!!this.J4
)(F=this.J4,F[2].call(F[0],this.D8));A.abo(this.J4,0);}}if(this.A8===2){var BP=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).Az2();if(this.DX>this.AlO)this.DX=
this.AlO;if(this.DX!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.DX));A.abo(
this.J3,0);}}this.DL(this);this.Am();},GI:function(G){this.PO.R(AH9+A._GetAutoObject(
A.Device.Converter).Tf(this.D8,2,true));this.PN.R(AH9+A._GetAutoObject(A.Device.
Converter).Tf(this.DX,2,true));this.SE.R(A._GetAutoObject(A.acj.DV).AaC());this.
Y7.R(this.SE.String);},A32:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).Asu(this
);},A2J:function(Atw){if(Atw===1)return this.PO;else if(Atw===2)return this.PN;else
return null;},_Init:function(aArg){C.Act._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y7={I:this},0);this.__proto__=C.AU4;this.T(A.aaR(A.acf.ACF));this.AlO=
2000;this.AlS=20;this.Background.H(K2);this.V.H(BD);this.V.R(A.aaR(A.acf.ACF)+A.
aaR(A.acf.Colon));this.V.A4(0x12);this.AkJ.H(AXZ);this.AkK.H(AX0);this.Q8.H(AX1);
this.QH.H(AX2);this.PN.H(AX3);this.PO.H(AX4);this.SE.H(AH_);this.Y7.H(AX5);this.
Y7.Je(false);this.Y7.A4(0x12);this.Y7.L(0xFF000000);this.J6(this.H8,-8);this.J(this.
Y7,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y7.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Act;this.Y7._Done();C.Act.
_Done.call(this);},_ReInit:function(){C.Act._ReInit.call(this);this.Y7._ReInit();
this.T(A.aaR(A.acf.ACF));this.V.R(A.aaR(A.acf.ACF)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y7.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Act._Mark.call(this,D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABQ={M:O9,A7O:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7O();},_Init:function(
aArg){A.Graphics.HA._Init.call(this,aArg);this.__proto__=C.ABQ;},_className:"Application::AbstractPath"
};C.Aqd={DR:null,DZ:null,Rk:null,AdQ:null,P5:null,AdP:null,AuG:1,A5k:0,Bdd:false
,AzY:true,CP:function(){this.Bhr(this);},Init:function(aArg){var B;this.Ba(this.
AdQ);A.zX([this,this.Bhr],[B=this.AdQ,B.A9a,B.BbM],0);},Aj:function(Ae){C.AB.Aj.
call(this,Ae);this.AdP.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BiJ(this.AuG+this.A5k)));if(this.AuG===1)this.P5.R(A.aaR(A.acf.ANo));else this.
P5.R(A.aaR(A.acf.Bii));},CC:function(G){if(this.AzY)this.AzY=false;else if(this.
DR.Bdn()===false)A.pe([this,this.A3z],this);else if(this.DR.AAc())this.DR.Ac9();
A.zV([this,this.AaL],A._GetAutoObject(A.Device.Device).An,0);},E3:function(G){A.
z9([this,this.AaL],A._GetAutoObject(A.Device.Device).An,0);},A3z:function(G){this.
Bdd=true;A._GetAutoObject(C.A5).Fz();},Bhr:function(G){var B;var BdP=(C.Ws.isPrototypeOf(
B=this.AdQ.AV)?B:null);if(!!BdP){var Azj=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Azj.Lz(BdP.Action));}},Ik:function(G){var Cz=(C.Ws.isPrototypeOf(G)?G:
null);if(!Cz)return;this.DR.Qp(Cz.Action);this.Bmt(this.AuG+1);},BBt:function(G){
if(A._GetAutoObject(C.Po).N3(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmt:function(E){
if(this.AuG===E)return;this.AuG=E;this.Am();},AaL:function(G){if((this.Bdd===false
)&&(this.DR.Bdn()===false))A.pe([this,this.A3z],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);C.CG._Init.call(this.
Rk={I:this},0);C.ARU._Init.call(this.AdQ={I:this},0);C.CG._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdP={I:this},0);this.__proto__=C.Aqd;this.Background.
L(A.jb.CV);this.N.H(U4);this.N.Z(true);this.Ds(C.IP);this.DZ.A1(0x3F);this.DZ.H(
Fc);this.DZ.L(A.jb.CK);this.Rk.H(AX6);this.Rk.L(A.jb.Text);this.AdQ.H(AX7);this.
P5.H(AX8);this.P5.R(A.aaR(A.acf.ANo));this.P5.L(A.jb.Text);this.AdP.H(AX9);this.
AdP.R(AX_);this.AdP.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Rk,0);this.J(this.
AdQ,0);this.J(this.P5,0);this.J(this.AdP,0);this.N.CF=[this,this.A3z];this.N.Cf=[
this,this.BBt];this.N.C3(A.aaL(A.ach.E2));this.N.Cu(A.aaL(A.ach.AeD));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.AY(A.aaL(A.fl.Af));this.Rk.Cm(A.aaL(A.fl.Ak));this.AdQ.A30=[
this,this.Ik];this.P5.S(A.aaL(A.fl.EK));this.P5.AY(A.aaL(A.fl.Af));this.P5.Cm(A.
aaL(A.fl.Ak));this.AdP.S(A.aaL(A.fl.H5));this.DR=A._GetAutoObject(C.DR);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Rk._Done();this.
AdQ._Done();this.P5._Done();this.AdP._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Rk._ReInit();this.AdQ._ReInit();
this.P5._ReInit();this.AdP._ReInit();this.P5.R(A.aaR(A.acf.ANo));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.AY(A.aaL(A.fl.Af));this.Rk.Cm(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.AY(A.aaL(A.fl.Af));this.P5.Cm(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DR)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARU={If:null,A30:null,Cr:null,Y:null,Ay:
null,A4G:0,Init:function(aArg){A.zV([this,this.ABF],this.If,0);A.zV([this,this.Bho
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuD],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABF],this);},Ba:function(E){var A3v=this.AV;
A.Core.P.Ba.call(this,E);if(this.AV!==A3v)A.abo([this,this.A9a,this.BbM],0);},DG:
function(G){var B;var Ff=0;var X=this.AV;switch(this.Cr.CO){case 6:Ff=2;break;case
7:Ff=7;break;case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x415);
if((Ff===5)&&!X){var ALi=this.AV;while(!X){ALi=this.QK(ALi,2,0x415);if(!!ALi)X=this.
QK(ALi,Ff,0x415);else break;}}if(!!X)this.Ba(X);var G0=(C.Ws.isPrototypeOf(B=this.
AV)?B:null);if(!!G0)this.A4G=(C.Ws.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4G=0;A.pe([this,this.M0],this);},A18:function(Ei){var EP=A._GetAutoObject(C.DR).
Bdv(Ei,this.A30);this.J(EP,0);},Ao0:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HQ(AdL);
}},ABF:function(G){this.Ao0();var O;var CB=A._GetAutoObject(C.Po).Ng();for(O=0;O<
CB;O=O+1){var Tm=A._GetAutoObject(C.Po).OK(O);this.A18(Tm);}A.pe([this,this.Bho]
,this);A.pe([this,this.BqU],this);A.pe([this,this.AuD],this);},BqU:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Ws.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},AuD:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ws.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATU(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATU(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATU(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((
B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},Bho:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ws.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Po).N3(Aa.Action)&&A._GetAutoObject(C.
DR).A5j(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4G===Aa.Action)this.Ba(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.M0],this);},M0:function(G){var B;this.Y.VF(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARU;this.H(AX$);this.Cr.Filter=147;this.Y.A1(0xB);this.Y.H(AYa);this.Y.J0(9);this.
Ay.A1(0xA);this.Ay.H(AH$);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BG=[this,this.
DG];this.Cr.D2=[this,this.DG];this.Y.En=[this,this.Fh];this.If=A._GetAutoObject(
C.Po);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.If)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A30)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fq={El:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.El._Init.call(this.El={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fq;this.N.As(false);this.El.H(BD);this.El.As(false
);this.AK.H(Fc);this.AK.L(A.jb.Aea);this.Text.H(BD);this.Text.R(AYb);this.Text.L(
0xFF000000);this.Ap.H(O9);this.Ap.L(A.jb.Text);this.J(this.El,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cu(A.aaL(A.ach.AeD));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADt));},_Done:function(){this.__proto__=C.
OverlayMenu;this.El._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.El._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Aa0={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H0:function(G){},Aj:function(Ae){C.BU.
Aj.call(this,Ae);var FV=A.jb.Aea;var GZ=A.jb.CV;if(this.Hm){FV=A.jb.Text;GZ=A.jb.
Bm;}if(!this.LN){this.Background.L(A.jb.CV);this.V.L(A.jb.CK);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);}this.Hy.L(A.
jb.CV);this.H8.L(A.jb.CV);},Hn:function(G){var B;var Gj=this.DC.G6;var CA=(C.CG.
isPrototypeOf(B=this.DC.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AY(A.aaL(
A.fl.Bg));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gb(Gj));else CA.R(Xn);CA.H(A.
abK(CA.M,[this.DC.Wi,(B=this.DC.M)[3]-B[1]]));},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.Aa0;this.DC.AFx(170);this.DC.N8(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajh={C_:null,Init:function(
aArg){this.V.Text.A4(0x11);this.V.Text.Ho(10);this.V.S(A.aaL(A.fl.Ak));},Aj:function(
Ae){C.Cp.Aj.call(this,Ae);var FV=A.jb.Aea;var GZ=A.jb.CV;if(this.Hm){FV=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(A.jb.CV);this.V.L(A.jb.CK);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajh;this.C_.H(AYc);this.C_.Cx(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Ajr)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.C_._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Cp._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL7={Y:null,RS:null,Tz:null
,TA:null,TB:null,AdO:null,XV:null,Vz:null,VA:null,AaZ:null,Ay:null,Init:function(
aArg){this.Ba(this.RS);},DG:function(G){C.Fq.DG.call(this,G);this.M0(this);},H0:
function(G){this.BgF(this);},Lq:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CF=[this,this.BgF];this.BQ.Cf=null;this.BQ.Cc=null;this.BQ.CS(A.jV);
this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},ABi:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XV.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XV.Q))A._GetAutoObject(C.AutoActions).J(this.XV.Q);if(!!this.Vz.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vz.Q))A._GetAutoObject(C.AutoActions
).J(this.Vz.Q);if(!!this.VA.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VA.
Q))A._GetAutoObject(C.AutoActions).J(this.VA.Q);if(!!this.AaZ.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaZ.Q))A._GetAutoObject(C.AutoActions).J(this.AaZ.Q
);A._GetAutoObject(C.AutoActions).Cs();},BgF:function(G){if(this.BAA()===true){this.
ABi();this.AaN(this);}else A._GetAutoObject(A.Device.Device).AZ(27,true,A.jV,0,null
);},BAA:function(){return(!!this.XV.C8(this.XV.Q)||!!this.Vz.C8(this.Vz.Q))||!!this.
VA.C8(this.VA.Q);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},M0:function(G){var B;this.
Y.VF(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true
,null,null);},BBH:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XV.AtD(this);this.Vz.AtD(this);this.VA.AtD(this);this.AaZ.AtD(this);}
,_Init:function(aArg){C.Fq._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.Aa0._Init.call(this.RS={I:this},0);C.Aa0._Init.call(this.Tz={I:this},0);C.
Aa0._Init.call(this.TA={I:this},0);C.Aa0._Init.call(this.TB={I:this},0);C.Au_._Init.
call(this.AdO={I:this},0);C.AutoAction._Init.call(this.XV={I:this},0);C.AutoAction.
_Init.call(this.Vz={I:this},0);C.AutoAction._Init.call(this.VA={I:this},0);C.AutoAction.
_Init.call(this.AaZ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL7;var B;this.H(Rq);this.Text.R(A.aaR(A.acf.TC));this.Y.H(LA);this.Y.J0(1);this.
RS.H(AhY);this.RS.As(true);this.RS.Ai(true);this.RS.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajg),O$,AIa));this.Tz.H(U5);this.Tz.As(true);this.Tz.Ai(true
);this.Tz.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),O$,AIb));this.
TA.H(Aao);this.TA.As(true);this.TA.Ai(true);this.TA.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajg),O$,AIc));this.TB.H(Alg);this.TB.As(true);this.TB.Ai(
true);this.TB.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),O$,AId));this.
AdO.H(AyA);this.AdO.Ai(true);this.AdO.T(A.aaR(A.acf.A$K));this.Vz.Index=1;this.VA.
Index=2;this.AaZ.Index=3;this.Ay.H(Iw);this.J(this.Y,0);this.J(this.RS,0);this.J(
this.Tz,0);this.J(this.TA,0);this.J(this.TB,0);this.J(this.AdO,0);this.J(this.Ay
,0);this.Y.En=[this,this.Fh];this.RS.ZA(A.aaL(A.fl.H5));this.RS.ZB(A.aaL(A.fl.H5
));this.RS.Au([B=this.XV,B.Ca,B.Cb]);this.RS.CI(this.XV);this.Tz.ZA(A.aaL(A.fl.H5
));this.Tz.ZB(A.aaL(A.fl.H5));this.Tz.Au([B=this.Vz,B.Ca,B.Cb]);this.Tz.CI(this.
Vz);this.TA.ZA(A.aaL(A.fl.H5));this.TA.ZB(A.aaL(A.fl.H5));this.TA.Au([B=this.VA,
B.Ca,B.Cb]);this.TA.CI(this.VA);this.TB.ZA(A.aaL(A.fl.H5));this.TB.ZB(A.aaL(A.fl.
H5));this.TB.Au([B=this.AaZ,B.Ca,B.Cb]);this.TB.CI(this.AaZ);this.AdO.AR=[this,this.
BBH];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Y._Done();this.
RS._Done();this.Tz._Done();this.TA._Done();this.TB._Done();this.AdO._Done();this.
XV._Done();this.Vz._Done();this.VA._Done();this.AaZ._Done();this.Ay._Done();C.Fq.
_Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Y._ReInit();this.
RS._ReInit();this.Tz._ReInit();this.TA._ReInit();this.TB._ReInit();this.AdO._ReInit(
);this.XV._ReInit();this.Vz._ReInit();this.VA._ReInit();this.AaZ._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TC));this.RS.T(A._GetAutoObject(A.Device.Helper
).MO(A.aaR(A.acf.Ajg),O$,AIa));this.Tz.T(A._GetAutoObject(A.Device.Helper).MO(A.
aaR(A.acf.Ajg),O$,AIb));this.TA.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.
Ajg),O$,AIc));this.TB.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajg),O$
,AId));this.AdO.T(A.aaR(A.acf.A$K));},_Mark:function(D){var B;C.Fq._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cn={BI:
A.abi(27,0,null),Dv:function(){return 16;},C8:function(aIndex){if(aIndex>=27)return-
1;return this.BI.Get(aIndex);},D0:function(A9){var O=0;while(O<27){if(this.BI.Get(
O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<27){
if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BI=[]).__proto__=C.Cn.BI;this.__proto__=C.Cn;
},_className:"Application::ArraySelection"};C.AutoAction={If:null,Ac9:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtD],this.Ac9,0);A.pe([this,this.
AtD],this);},Dv:function(){return this.If.Ng();},C8:function(aIndex){if(aIndex>=
this.Dv())return-1;return this.If.OK(aIndex);},Gb:function(aIndex){return this.ActionToString.
BT(this.C8(aIndex));},D0:function(A9){var O=0;while(O<this.Dv()){if(this.If.OK(O
)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<this.
Dv()){if(this.If.OK(O)>max)max=this.If.OK(O);O=O+1;}return max;},AtD:function(G){
this.Q=this.Ac9.OK(this.Index);A.abo([this,this.Ca,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.If=A._GetAutoObject(C.AuV);this.Ac9=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMb={AtA:0,Init:function(aArg
){var B;A.zX([this,this.Bfa],[B=A._GetAutoObject(A.Device.Device),B.A8Q,B.Bbw],0
);A.zX([this,this.Be9],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.A0C],0);A.pe([
this,this.Bfa],this);A.pe([this,this.Be9],this);},Clear:function(){C.VE.Clear.call(
this);this.AtA=0;},Cs:function(){A._GetAutoObject(A.Device.Device).ArF(this.AtA);
A._GetAutoObject(A.Device.Device).ArG(this.toString());},Bfa:function(G){this.AtA=
A._GetAutoObject(A.Device.Device).Po;A.we(this,0);},Be9:function(G){this.Fl(A._GetAutoObject(
A.Device.Device).AuI);A.we(this,0);},N3:function(Ei){if((this.AtA&(((B=Ei)<0)?B+
0x100000000:B))===(((B=Ei)<0)?B+0x100000000:B))return true;return false;},AUU:function(
Ei){this.AtA=this.AtA|(((B=Ei)<0)?B+0x100000000:B);},_Init:function(aArg){C.VE._Init.
call(this,aArg);this.__proto__=C.AMb;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Po={_Init:function(){C.AMb._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMc={VC:null,Ay:null,Y:null,JW:null,CP:function(
){this.AiI(this);},Init:function(aArg){A.zV([this,this.AiI],this.VC,0);A.pe([this
,this.AiI],this);},DG:function(G){C.Fq.DG.call(this,G);this.M0(this);},Lq:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Cf=[
this,this.A3G];this.BQ.Cc=[this,this.A4a];this.BQ.C4(A.aaL(A.ach.Ard));this.BQ.Cu(
A.aaL(A.ach.Aq7));this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},Ew:function(G){if(
this.Bzk()>0){this.ABi();this.AaN(this);}else A._GetAutoObject(A.Device.Device).
AZ(28,true,A.jV,0,null);},AiI:function(G){this.Ao0();var O;for(O=0;O<this.VC.Ng(
);O=O+1){var Tm=A._GetAutoObject(C.Po).OK(O);this.A1K(Tm);}this.J(this.JW,0);A.aaS([
this,this.M0],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},M0:function(G){var
B;this.Y.VF(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.
AV,true,null,null);},A1K:function(Ha){var Azj=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azj.BT(Ha));Aa.Ai(true);Aa.G6=Ha;Aa.A_H(this.
VC.N3(Ha));this.J(Aa,0);this.ZL(Aa);},Ao0:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===0x400))this.HQ(
AdL);}},ABi:function(){var B;this.VC.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JW)){var Aa=(C.Sm.isPrototypeOf(
X)?X:null);if(!!Aa){this.VC.J(Aa.G6);if(Aa.ASM())this.VC.AUU(Aa.G6);}else A.ab5(
"%s",AyB);}X=X.Ah;}this.VC.Cs();},Bzk:function(){var B;var A4H=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JW)){var
Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASM())A4H=A4H+1;}else A.ab5("%s"
,AyB);}X=X.Ah;}return A4H;},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAy=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAy){this.
AhB(AAy,Aa);A.pe([this,this.M0],this);}}},A4a:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA6=(C.Sm.isPrototypeOf(B=Aa.AI)?B:null);if(!!AA6
){this.AhB(Aa,AA6);A.pe([this,this.M0],this);}}},AqJ:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiI],this);},_Init:function(
aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au_._Init.call(this.JW={I:this},0);this.__proto__=C.AMc;
this.H(Rq);this.Text.R(A.aaR(A.acf.AEu));this.Ay.H(Iw);this.Y.H(LA);this.Y.J0(1);
this.JW.H(AIe);this.JW.Ai(true);this.JW.T(A.aaR(A.acf.AqJ));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JW,0);this.Y.En=[this,this.Fh];this.JW.AR=[this,this.AqJ
];this.VC=A._GetAutoObject(C.Po);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Ay._Done();this.Y._Done();this.JW._Done();C.Fq._Done.call(this);},_ReInit:
function(){C.Fq._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JW._ReInit(
);this.Text.R(A.aaR(A.acf.AEu));this.JW.T(A.aaR(A.acf.AqJ));this.CP();},_Mark:function(
D){var B;C.Fq._Mark.call(this,D);if((B=this.VC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sm={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A4(0x11);this.
V.Text.Ho(10);},Bl:function(aSize){C.Uf.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mv.M[0]));},Aj:function(Ae){var B;C.Uf.Aj.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fu=((Ae&0x20)===0x20);var GF=this.Bo.Bw;var FV=A.jb.Aea;var GZ=A.jb.
Bm;if(this.Hm){FV=A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.L(FV);this.V.L(A.
jb.CK);}else if(GF){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);
}this.LN=Hf;this.KL=Fu;this.Qv=GF;},H0:function(G){this.A3_(this);},A3_:function(
G){this.AFf(!this.AmC);},A_H:function(E){this.AFf(E);},ASM:function(){return this.
AmC;},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.Sm;this.Mv.
H(AIf);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VE={CB:0,
If:A.abi(17,0,null),OK:function(HB){return this.If.Get(HB);},Ng:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.If.Set(O,0);this.CB=0;},J:function(
Ei){if(this.CB>=17)A.ab5("%s",AIg);else{this.If.Set(this.CB,Ei);this.CB=this.CB+
1;}},Cs:function(){},Fl:function(AcX){var AJs=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1_=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.If.Set(O,0);O++;
}else{if(AJs===-1){A1_=AcX;AcX=A.jV;}else{A1_=A.abV(AcX,AJs);AcX=A.ab1(AcX,0,AJs+
1);}var Tm=A.abZ(A1_,0,10)|0;if(this.AD9(Tm)){this.If.Set(this.CB,Tm);this.CB=this.
CB+1;O++;}AJs=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5("%s"
,AyC);},toString:function(){var A3m=(((B=this.If.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3m=(A3m+AyD)+(((B=this.If.Get(O))<0)?B+0x100000000:
B).toFixed();return A3m;},AxB:function(HB,Ei){if(HB>=this.CB){A.ab5("%s",((((AYd+
HB.toFixed())+AYe)+this.CB.toFixed())+AYf)+AYg);return;}this.If.Set(HB,Ei);},Contains:
function(Ei){var O;for(O=0;O<this.CB;O=O+1)if(this.If.Get(O)===Ei)return true;return false;
},AD9:function(Ei){return true;},D0:function(Ei){var O;for(O=0;O<this.CB;O=O+1)if(
this.If.Get(O)===Ei)return O;return-1;},_Init:function(aArg){(this.If=[]).__proto__=
C.VE.If;this.__proto__=C.VE;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMU={Init:function(aArg){var B;A.zX([this,this.Bfk],[B=A._GetAutoObject(A.Device.
Device),B.A81,B.BbE],0);A.pe([this,this.Bfk],this);},Cs:function(){A._GetAutoObject(
A.Device.Device).Akq(this.toString());},AD9:function(Ei){switch(Ei){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfk:function(
G){this.Fl(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VE._Init.call(this,aArg);this.__proto__=C.AMU;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMU._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Ws={VB:null,KB:null,A7N:A.jV,Action:0,A5l:false,A$v:false,Bae:false,Bl:function(
aSize){C.Fm.Bl.call(this,aSize);this.Q4.H(this.MB.M);this.OJ.H(this.Q4.M);},Aj:function(
Ae){C.Fm.Aj.call(this,Ae);if(!this.LN){this.KB.T3.L(A.jb.Am3);this.KB.QM.Z(true);
this.KB.QM.L(A.jb.ARe);}else if(this.Qv){this.KB.T3.L(A.jb.Bm);this.KB.QM.Z(false
);}else if(this.KL){this.KB.T3.L(A.jb.Bm);this.KB.QM.Z(false);}else{this.KB.T3.L(
A.jb.Text);this.KB.QM.Z(true);this.KB.QM.L(A.jb.CV);}},Bms:function(E){if(this.Action===
E)return;this.Action=E;},Bny:function(E){if(this.A7N===E)return;this.A7N=E;this.
VB.Text.R(E);},ATU:function(E){if(this.Bae===E)return;this.Bae=E;this.KB.Bok(!this.
KB.AVi);},AFO:function(E){if(this.A$v===E)return;this.A$v=E;this.KB.Z(!this.KB.Fo(
));},A98:function(E){if(this.A5l===E)return;this.A5l=E;this.VB.Z(E);},_Init:function(
aArg){C.Fm._Init.call(this,aArg);C.VB._Init.call(this.VB={I:this},0);C.KB._Init.
call(this.KB={I:this},0);this.__proto__=C.Ws;this.H(AYh);this.Background.H(AYi);
this.G_.As(false);this.G_.Z(false);this.VB.H(AYj);this.VB.Z(false);this.KB.H(AYk
);this.KB.Z(false);this.J(this.VB,0);this.J(this.KB,0);this.MB.Ax(A.aaL(A.ach.ANp
));},_Done:function(){this.__proto__=C.Fm;this.VB._Done();this.KB._Done();C.Fm._Done.
call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.VB._ReInit();this.KB.
_ReInit();},_Mark:function(D){var B;C.Fm._Mark.call(this,D);if((B=this.VB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.VB={AK:null,Text:null,BX:null,Init:function(
aArg){this.Text.H(this.M);this.BX.H(this.M);this.AK.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BX._Init.call(this.BX={I:this},0);this.__proto__=
C.VB;this.AK.H(AYl);this.AK.L(A.jb.Bka);this.H(AYm);this.Text.H(AYn);this.Text.L(
A.jb.Text);this.BX.H(AYo);this.BX.Nu(1);this.BX.L(A.jb.Text);this.J(this.AK,0);this.
J(this.Text,0);this.J(this.BX,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AK._Done();this.Text._Done();this.BX._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AK._ReInit();this.Text._ReInit();this.BX._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KB={QM:null
,T3:null,AVi:false,Bok:function(E){if(this.AVi===E)return;this.AVi=E;if(E){this.
T3.Ax(A.aaL(A.ach.ACM));this.QM.Ax(A.aaL(A.ach.ACM));}else{this.T3.Ax(A.aaL(A.ach.
AqD));this.QM.Ax(A.aaL(A.ach.AqD));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QM={I:this},0);A.acg.Ap._Init.call(this.T3={I:this
},0);this.__proto__=C.KB;this.H(AyE);this.QM.H(AyE);this.QM.Cx(1);this.T3.H(AyE);
this.T3.Cx(0);this.J(this.QM,0);this.J(this.T3,0);this.QM.Ax(A.aaL(A.ach.AqD));this.
T3.Ax(A.aaL(A.ach.AqD));},_Done:function(){this.__proto__=A.Core.P;this.QM._Done(
);this.T3._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QM._ReInit();this.T3._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASg={
Gi:null,Ce:null,Dp:null,Dj:null,Kw:null,Zr:10,Aq3:0,AEF:0,ASu:0,Azi:false,L1:false
,Bdm:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lk(
))A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).
An.HL().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.G8();A._GetAutoObject(
A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAN],this.
Db.Q,0);A.zX([this,this.BBq],this.Dp.Q,0);A.zX([this,this.ABD],this.Dj.Q,0);A.zX([
this,this.ABD],this.Dj.HI.Q,0);A.zX([this,this.ABD],[this,this.AST,this.AFM],0);
A.zX([this,this.GI],[B=A._GetAutoObject(A.Device.Device),B.A90,B.Bb9],0);A.zX([this
,this.BfS],this.Ce.Q,0);A.pe([this,this.AAN],this);A.pe([this,this.GI],this);A.pe([
this,this.ABD],this);A.pe([this,this.BfS],this);},CC:function(G){if(!this.Azi){this.
Azi=true;A.pe([this,this.AcU],this);}else C.H2.CC.call(this,G);},Agg:function(G){
this.ASu=this.Zr;this.Bdu(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.FD();A._GetAutoObject(C.A5).Fz();},Aup:function(){this.N.CS(A.jV);this.N.C4(
A.aaL(A.ach.ADS));this.N.Cc=[this,this.Ay5];},AAH:function(G){A._GetAutoObject(C.
A5).Cd(55);},AFM:function(E){if(this.Zr===E)return;this.Zr=E;A.abo([this,this.AST
,this.AFM],0);},Bdu:function(G){var F;if(!this.Zr||(this.Bdm===true)){A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);if(this.AEF===1)A._GetAutoObject(A.Device.
Device).AZ(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AZ(23,
true,this.AEF.toFixed(),2000,null);this.Ew(this);return;}this.Gi.G8();this.Gi.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gi.N7(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gi.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gi.J1(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gi.Nr(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gi.PX(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gi.SQ(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alt=A._GetAutoObject(
A.Device.Helper).A12(this.Gi,(F=this.Dj.H3.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.AiY();else{A._GetAutoObject(A.Device.Helper).AKq(
this.Gi,Alt,(F=this.Dj.H3.Hu,F[1].call(F[0])),this.Zr-1,[this,this.ApE]);A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);}},GI:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am5())this.C$.Z(true);else this.C$.Z(false);if(this.L1){this.Dp.
Z(false);this.Ce.T(A.aaR(A.acf.ACT));this.Ce.AFh(A.aaL(A.ach.Afd));}else{this.Dp.
Z(true);this.Ce.T(A.aaR(A.acf.Ak2));this.Ce.AFh(null);}if((this.Y.BjK(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JO(this.Y.TU(this.AV,0x1));this.Am();
},ATo:function(E){if(this.Aq3===E)return;this.Aq3=E;A.abo([this,this.A9e,this.ATo
],0);},ABD:function(G){var F;var AKc=(F=this.Dj.Q,F[1].call(F[0]));var AAp=-1;switch((
F=this.Dj.H3.Hu,F[1].call(F[0]))){case 0:AAp=AKc+((F=A._GetAutoObject(A.Device.Helper
).Bd2(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zr-1));break;case 1:AAp=(AKc+this.
Zr)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HI.AC.Q){case 0:AAp=(AKc+
this.Zr)-1;break;case 1:AAp=(AKc-this.Zr)+1;break;default:throw new Error(AYp+this.
Dj.HI.AC.Q.toFixed());}break;default:throw new Error(AYq+this.Dj.HI.AC.Q.toFixed(
));}this.ATo(AAp);},BBq:function(G){A.pe([this,this.GI],this);A.pe([this,this.At_
],this);},AAN:function(G){A._GetAutoObject(A.Device.Helper).AVQ(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
L1);A.pe([this,this.ABD],this);},ApE:function(G){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.Apy();else switch((F=this.Dj.H3.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JO(this.Dj);break;case 0:this.JO(this.Dp
);break;case 1:this.JO(this.Ce);break;default:throw new Error(AyF+(F=this.Dj.H3.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JO(this.Ce);break;case 47:if(
Ar.PopupState===7)this.Apy();else{this.JO(this.Dj);this.JO(this.Ce);}break;case 43:{
this.JO(this.Dj);this.JO(this.Dp);}break;case 42:{this.JO(this.Dj);this.JO(this.
Ce);}break;case 41:break;default:A.ab5("%s%e",Atb,Ar.Id);}},AiY:function(){this.
Gi.Cs(A._GetAutoObject(A.Device.Device).An);this.AEF=this.AEF+1;if(A._GetAutoObject(
A.Device.Helper).Am5()){if(A._GetAutoObject(A.Device.Device).Bt.Lk()){A._GetAutoObject(
A.Device.Device).AZ(24,false,U6,0,null);A._GetAutoObject(A.Device.Device).AZ(50,
true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),0,null);}else{var Mc=A.
_GetAutoObject(A.Device.Device).An.LZ(0,this.Gi.Id);A._GetAutoObject(A.Device.Device
).SX(Mc);var B2=A._NewObject(A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(this.Gi.
Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(this.Gi.DateOfBirth);B2.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}this.Apy();},Apy:function(){var B;var F,Cv;if(!!(F=this.Ce.
Q,F[1].call(F[0]))){(F=this.Ce.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.L1)(
Cv=this.Dp.Q,Cv[2].call(Cv[0],(F=this.Ce.Q,F[1].call(F[0]))));}if(!this.L1)(Cv=this.
Dp.Q,Cv[2].call(Cv[0],A._GetAutoObject(A.Device.Helper).Baw(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjK(),this.Dp.AjM())));var I3=null;switch((F=this.Dj.H3.Hu,F[1].call(
F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyX];break;case 2:
I3=[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY];break;case 4:case 5:I3=[B=A.
_GetAutoObject(A.Device.Device),B.Ans,B.Aov];break;default:;}if(!!I3){switch((F=
this.Dj.Kq.V1,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],I3[1].call(I3[0])));
}var XR=100-((this.Zr/this.ASu)*100);A._GetAutoObject(A.Device.Device).AZ(24,true
,(((this.ASu.toFixed()+Atc)+(XR|0).toFixed())+Atc)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBA]);this.AFM(this.Zr-1);A.aaS([this,this.Bdu],null);},BBA:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdm=true;},ApF:function(G){var F;C.H2.ApF.call(this,G);var AoT=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:AoT=A._GetAutoObject(A.Device.
Device).AdS;break;case 1:AoT=730;break;default:A.ab5("%s%e",Alc,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Dr()-A._GetAutoObject(A.Device.Helper).AmI(AoT));(F=this.C$.Q,F[2].call(
F[0],this.C$.AnX));switch(this.B0.AC.Q){case 0:{this.Kw.Jg(A.aaR(A.acf.ANk));this.
Kw.IW(A.aaR(A.acf.ANl));}break;case 1:{this.Kw.Jg(A.aaR(A.acf.Bir));this.Kw.IW(A.
aaR(A.acf.Bis));}break;case 2:{this.Kw.Jg(A.aaR(A.acf.Bky));this.Kw.IW(A.aaR(A.acf.
Bkz));}break;default:throw new Error(Alc);}},Ae3:function(E){if(this.L1===E)return;
this.L1=E;A.abo([this,this.Awj,this.Ae3],0);},At_:function(G){var F,Cv,Ti;this.Ae3(((
F=this.Ce.Q,F[1].call(F[0]))===(Cv=this.Dp.Q,Cv[1].call(Cv[0])))&&!!(Ti=this.Ce.
Q,Ti[1].call(Ti[0])));A.pe([this,this.GI],this);},BfS:function(G){A.pe([this,this.
At_],this);},AST:function(){return this.Zr;},A9e:function(){return this.Aq3;},Awj:
function(){return this.L1;},_Init:function(aArg){C.H2._Init.call(this,aArg);C.Av2.
_Init.call(this.Ce={I:this},0);C.Rb._Init.call(this.Dp={I:this},0);C.AGQ._Init.call(
this.Dj={I:this},0);C.AU6._Init.call(this.Kw={I:this},0);this.__proto__=C.ASg;var
B;this.Ds(C.ADv);this.Ce.H(Aoj);this.Ce.Ai(true);this.Ce.T(A.aaR(A.acf.Ak2));this.
Ce.ArN(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asx));this.Ce.ArO(A.
aaR(A.acf.Akj));this.Dp.H(AYr);this.Dp.Ai(true);this.Dp.T(A.aaR(A.acf.Ul));this.
Dp.Ar3(false);this.Dj.H(AYs);this.Dj.Ai(true);this.Dj.T(A.aaR(A.acf.A7A));this.Dj.
Bx(0);this.Kw.H(AYt);this.Kw.Ai(true);this.Kw.T(A.aaR(A.acf.A8H));this.Kw.Ge(1);
this.Kw.EU(500);this.Kw.IW(A.aaR(A.acf.ANl));this.Kw.Jg(A.aaR(A.acf.ANk));this.Kw.
A_y(A.aaR(A.acf.Aq3)+A.aaR(A.acf.Colon));this.J(this.Ce,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kw,0);this.Gi=A._NewObject(A.Device.Animal,0);this.Ce.AR=[
this,this.AcU];this.Ce.L5([this,this.AcU]);this.Ce.L8(A.aaL(A.ach.Afd));this.Ce.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.PX]);this.Ce.OS([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U8]);this.Ce.PV([B=A._GetAutoObject(A.Device.Device),B.Uq
,B.U9]);this.Ce.Us([B=A._GetAutoObject(A.Device.Device),B.Anp,B.Aou]);this.Ce.Ae3([
this,this.Awj,this.Ae3]);this.Dp.Gt([this,this.D$,this.GT]);this.Dp.L5([this,this.
AcU]);this.Dp.L8(A.aaL(A.ach.Afd));this.Dp.Uu([B=this.Gender.Animal,B.WG,B.J1]);
this.Dp.OS([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.Dp.PV([B=A._GetAutoObject(
A.Device.Device),B.Uq,B.U9]);this.Dp.Us([B=A._GetAutoObject(A.Device.Device),B.Anp
,B.Aou]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Ant,B.Nr]);this.Dp.
Anv([B=this.AnimalType.Animal,B.PU,B.EC]);this.Dj.Gt([this,this.D$,this.GT]);this.
Dj.L5([B=this.Dj,B.FY]);this.Dj.L8(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArD,B.SQ]);this.Dj.A99(A._GetAutoObject(A.Device.Helper).W);
this.Kw.Au([this,this.AST,this.AFM]);this.Kw.BmW([this,this.A9e,this.ATo]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H2;this.Ce._Done();this.Dp._Done(
);this.Dj._Done();this.Kw._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2.
_ReInit.call(this);this.Ce._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kw.
_ReInit();this.Ce.T(A.aaR(A.acf.Ak2));this.Ce.ArN(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.Asx));this.Ce.ArO(A.aaR(A.acf.Akj));this.Dp.T(A.aaR(A.acf.
Ul));this.Dj.T(A.aaR(A.acf.A7A));this.Kw.T(A.aaR(A.acf.A8H));this.Kw.IW(A.aaR(A.
acf.ANl));this.Kw.Jg(A.aaR(A.acf.ANk));this.Kw.A_y(A.aaR(A.acf.Aq3)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.Gi)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ce)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUx={BU:null,RatingMode:null,Lq:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Cc=null;this.BQ.Cf=null;this.BQ.CF=[this,this.AaN];this.BQ.CS(A.jV
);this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUx;var B;this.
H(Rq);this.BU.H(Aom);this.BU.T(A.aaR(A.acf.Bao));this.J(this.BU,0);this.BU.Au([B=
this.RatingMode,B.Ca,B.Cb]);this.BU.CI(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BU._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit(
);this.RatingMode._ReInit();this.BU.T(A.aaR(A.acf.Bao));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgt],[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0N],0);A.pe([this,this.Bgt],this
);},Dv:function(){return 2;},Gb:function(aIndex){return this.RatingModeToString.
BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw8(E);},Bgt:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BI.Set(0,0);this.BI.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cn;this.RatingModeToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANE={W0:
function(G){C.Amu.W0.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqY()){
A._GetAutoObject(A.Device.Helper).W.Akx(false);A._GetAutoObject(A.Device.Helper).
W.Cs(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amu._Init.call(
this,aArg);this.__proto__=C.ANE;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hj={DM:A.jV,T:function(E){if(this.DM===E)return;this.DM=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hj;},_className:"Application::BaseItem"
};C.AV6={BU:null,WeightRecordingMode:null,Lq:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Cc=null;this.BQ.Cf=null;this.BQ.CF=[this,this.AaN];this.BQ.CS(A.jV
);this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BU._Init.call(this.BU={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AV6;var B;this.H(Rq);this.BU.H(Aom);this.BU.T(A.aaR(A.acf.AsW));this.BU.EU(1);
this.J(this.BU,0);this.BU.Au([B=this.WeightRecordingMode,B.Ca,B.Cb]);this.BU.CI(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BU.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BU._ReInit();this.WeightRecordingMode.
_ReInit();this.BU.T(A.aaR(A.acf.AsW));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dv:function(){return 2;},Gb:function(aIndex){return this.
WeightRecordingModeToString.BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axj(E);},Init:function(aArg){var B;A.zX([this
,this.BhA],[B=A._GetAutoObject(A.Device.Device),B.A9Z,B.Bb8],0);A.pe([this,this.
BhA],this);},BhA:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BI.Set(0,0);this.BI.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightRecordingModeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa_={BooleanToAutoOnOff:null,Gb:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BT(aIndex);},_Init:function(aArg){C.Gh._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa_;},_Done:function(
){this.__proto__=C.Gh;this.BooleanToAutoOnOff._Done();C.Gh._Done.call(this);},_ReInit:
function(){C.Gh._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gh._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxY={A7O:function(){var B;this.
AxC(1);this.Jz(0,3);this.VN(0,0,(B=this.M)[3]-B[1]);this.A5o(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5o(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VX(0);},_Init:
function(aArg){C.ABQ._Init.call(this,aArg);this.__proto__=C.AxY;},_className:"Application::Triangle"
};C.AT_={Y:null,Init:function(aArg){this.ByH(this);},ByG:function(Qd){var Aa=A._NewObject(
C.ANM,0);Aa.H(BD);Aa.T(Qd);Aa.Ai(true);Aa.As(false);Aa.Bh(true);this.J(Aa,0);this.
AtC(this);},AtC:function(G){var B;var AlB=1;var A3d=0;var X=this.Y.Ah;var Cz=null;
var K9=null;while(!!X&&!((X.U&0x200)===0x200)){Cz=(C.O1.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cz){var ALl=(B=Cz.V.B8.A7r(Cz.V.String,0,-1))[2]-B[0
];if(!!(C.My.isPrototypeOf(X)?X:null))ALl=ALl+20;if(A3d<ALl)A3d=ALl;Cz.H(A.abL(Cz.
M,120));Cz.H(A.abI(Cz.M,28));Cz.H(A.abM(Cz.M,this.M[0]));Cz.H(A.abO(Cz.M,((B=this.
M)[3]-B[1])-(AlB*28)));AlB=AlB+1;}else{K9=(A.acg.C9.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K9){var Di=((B=this.M)[3]-B[1])-((AlB-1)*28);K9.DO([this.
M[0],K9.Et[1]]);K9.DO([K9.Et[0],Di]);K9.DE([this.M[0]+120,K9.ED[1]]);K9.DE([K9.ED[
0],Di]);}}X=X.Ah;}this.BCi(A3d,28);},BCi:function(aWidth,BxP){var B;var X=this.Y.
Ah;var Cz=null;var K9=null;aWidth=aWidth+20;if(aWidth>(C.Asy[0]-10))aWidth=C.Asy[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cz=(C.O1.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cz){Cz.V.Text.A4(0x14);Cz.V.Text.Ho(10);Cz.H(A.abL(Cz.M,aWidth
));Cz.H(A.abI(Cz.M,BxP));Cz.H(A.abM(Cz.M,this.M[2]-((B=Cz.M)[2]-B[0])));}else{K9=(
A.acg.C9.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K9){K9.DO([this.M[
2]-aWidth,K9.Et[1]]);K9.DE([this.M[2],K9.ED[1]]);}}X=X.Ah;}},ByH:function(G){var
Aa=A._GetAutoObject(C.BS).AqN;while(!!Aa){if(!!(C.Axq.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axq.isPrototypeOf(Aa)?Aa:null);this.ByF(EF.DM,EF.AR,EF.Bw,EF.ARm);}else
if(!!(C.Axs.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axs.isPrototypeOf(Aa)?Aa:null);
this.ByM(EF.DM,EF.AR,EF.Bw,EF.WF,EF.W2);}else if(!!(C.ZH.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZH.isPrototypeOf(Aa)?Aa:null);this.ByE(EF.DM,EF.AR,EF.Bw);}else if(
!!(C.AkD.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkD.isPrototypeOf(Aa)?Aa:null);this.
ByG(EF.DM);}else if(!!(C.AGi.isPrototypeOf(Aa)?Aa:null))this.ByN();Aa=Aa.MF;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.AtC],this);},ByE:function(Qd,Ac3,Ah3){var Aa=A._NewObject(
C.My,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac3;Aa.Ai(true);Aa.As(Ah3);Aa.Bh(true);this.J(Aa
,0);this.AtC(this);},ByN:function(){var K9=A._NewObject(A.acg.C9,0);K9.L(A.jb.Bm
);K9.Ai(true);K9.Nu(3);this.J(K9,0);this.AtC(this);},ByF:function(Qd,Ac3,Ah3,A1l
){var Aa=A._NewObject(C.AmG,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac3;Aa.Ai(true);Aa.As(Ah3
);Aa.Bh(true);Aa.Au(A1l);this.J(Aa,0);this.AtC(this);},ByM:function(Qd,Ac3,Ah3,A3u
,Agq){var Aa=A._NewObject(C.ANL,0);Aa.H(BD);Aa.T(Qd);Aa.AR=Ac3;Aa.Ai(true);Aa.As(
Ah3);Aa.Bh(true);Aa.BnW(A3u);Aa.AF0(Agq);this.J(Aa,0);this.AtC(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT_;this.H(Rq);this.Y.H(Rq);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afi={_Init:
function(){A.acl.Afi._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$r={AqN:null,Ahk:null,Mq:function(Qd){var EF=A._NewObject(
C.AkD,0);EF.DM=Qd;this.J(EF);},Clear:function(){this.AqN=null;this.Ahk=null;},Fx:
function(){var K9=A._NewObject(C.AGi,0);this.J(K9);},J:function(BcK){if(!this.AqN
){this.AqN=BcK;this.Ahk=this.AqN;}else{this.Ahk.MF=BcK;this.Ahk=this.Ahk.MF;}},TD:
function(Qd,Ac3){var EF=A._NewObject(C.ZH,0);EF.DM=Qd;EF.AR=Ac3;this.J(EF);},BhJ:
function(Qd,Ac3,A1l){var EF=A._NewObject(C.Axq,0);EF.DM=Qd;EF.AR=Ac3;EF.ARm=A1l;
this.J(EF);},Aa1:function(Qd){var EF=A._NewObject(C.ZH,0);EF.DM=Qd;EF.Bw=false;this.
J(EF);},ABU:function(Qd,Ac3,A3u,Agq){var EF=A._NewObject(C.Axs,0);EF.DM=Qd;EF.AR=
Ac3;EF.WF=A3u;EF.W2=Agq;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$r;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$r._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axr={MF:null,_Init:function(aArg){this.__proto__=
C.Axr;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOI={Ams:null,ArH:function(E){if(this.Ams===
E)return;if(!!this.Ab)this.Ab.ZL(this);if(!!this.Ams)this.AqF(this.Ams,A._GetAutoObject(
C.AsC),null,null,null,null,false);this.Ams=E;if(!!this.Ams)this.AkI(this.Ams,A._GetAutoObject(
C.AsC),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOI;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Ams)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WO={_Init:function(){C.AOI._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N9={Init:function(aArg){var C2=A._NewObject(C.AT$,0);C2.H(this.M);this.AkI(C2,A.
_GetAutoObject(C.AnV),null,A._GetAutoObject(C.AnV),A._GetAutoObject(C.AnV),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N9;this.H(Rq);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsC={_Init:function(){C.AU8._Init.call(this,0);this.ACR=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT$={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.AT$;this.H(AIh);this.C0(0);this.AK.A1(0x3F);this.AK.H(AIh);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AU7={Si:function(){var B;var Ao=(A.acl.Afa.isPrototypeOf(B=A.acl.Aem.Si.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cq.Cy=255;Ao.Cq.B3=0;return Ao;},Sh:function(
){var B;var Ao=(A.acl.Axp.isPrototypeOf(B=A.acl.Aem.Sh.call(this))?B:null);if(!Ao
)throw new Error(As9);Ao.E0.Cy=0;Ao.E0.B3=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aem._Init.call(this,aArg);this.__proto__=C.AU7;},_className:"Application::ShadeOverlayTransition"
};C.AnV={_Init:function(){C.AU7._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkR={AnX:0,A2y:false,Init:function(aArg){
},Aj:function(Ae){var F;C.Iu.Aj.call(this,Ae);this.BW.L(this.V.AQ);if(!!this.Q){
var BDr=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BW.R((A.
_GetAutoObject(A.Device.Converter).Ak6(BDr)+CR)+A._GetAutoObject(A.acj.DV).Af5()
);else this.BW.R(A.aaR(A.acf.Akj));}},Kh:function(G){var B;var Bhx=(this.A2y===false
)&&(this.AM<=this.Gs);if(Bhx)this.Bx(this.AnX);this.A45(this.AM,4);if(Bhx){this.
Bx(this.AM-this.Aj1);this.A2y=true;}C.Iu.Kh.call(this,G);},Kc:function(G){this.A45(
this.AM,5);C.Iu.Kc.call(this,G);},Bx:function(E){this.A45(E,4);E=(((E+((this.Aj1
/2)|0))/this.Aj1)|0)*this.Aj1;if(!E)this.A2y=false;C.Iu.Bx.call(this,E);},Ahs:function(
E){if(this.AnX===E)return;this.AnX=E;},A45:function(Bxy,GB){this.ATr(A._GetAutoObject(
A.acj.DV).Bd6(Bxy,GB));},_Init:function(aArg){C.Iu._Init.call(this,aArg);this.__proto__=
C.AkR;this.H(K2);this.AnX=this.Gs;this.J6(this.H8,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BER={None:0,Left:1,BFo:2,Right:3};C.Amw={Xy:
null,FC:null,El:null,Background:null,Ang:null,Gg:null,KR:A.jV,AEn:null,Init:function(
aArg){var B;A.zV([this,this.AaL],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A4b],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);A.pe([this,this.
LU],this);A.pe([this,this.A4b],this);this.Ba(this.El);},Aj:function(Ae){C.OverlayMenu.
Aj.call(this,Ae);this.DL(this);},Lq:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E3:function(G){C.OverlayMenu.E3.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xy);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKX();},Agf:function(G){var Aa=(C.ACn.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gg.FO();if(Hs>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).GS(Hs);A.pe([this,this.AaN],this);},AKX:function(
){},AaL:function(G){this.Am();},A34:function(G){if(this.Gg.FO()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gg.GU(this.Gg.FO()+1);},A35:function(G){if(this.
Gg.FO()>0)this.Gg.GU(this.Gg.FO()-1);},DL:function(G){var Gk=A._GetAutoObject(A.
Device.Device).An.B9();var M3=this.BQ;if(!M3)return;M3.C3(A.aaL(A.ach.AeA));M3.CF=[
this,this.AaN];if(Gk<=0){M3.Cu(null);M3.C4(null);M3.Cf=null;M3.Cc=null;M3.WS=false;
M3.ZK=false;}else if(Gk===1){M3.Cu(null);M3.C4(A.aaL(A.ach.AeB));M3.Cf=null;M3.Cc=[
this,this.Agf];M3.WS=false;M3.ZK=false;}else{M3.Cu(A.aaL(A.ach.Aq7));M3.C4(A.aaL(
A.ach.Ard));M3.Cf=[this,this.A34];M3.Cc=[this,this.A35];M3.WS=true;M3.ZK=true;}}
,LU:function(G){this.BgT(this);this.Xy=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKX();},BnO:function(E){if(this.AEn===E)return;this.AEn=E;A.pe([this,this.BBn
],this);},BBn:function(G){this.BgT(this);},BgT:function(G){var B;if(!!this.FC)this.
HQ(this.FC);this.FC=(C.EB.isPrototypeOf(B=A._NewObject(this.AEn,0))?B:null);if(!
!this.FC){this.FC.H(AYu);this.J(this.FC,0);}},A4b:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DN(1,4
))this.Gg.Dl(A.aaR(A.acf.ASo));else this.Gg.Dl(this.KR);},Dl:function(E){if(this.
KR===E)return;this.KR=E;A.pe([this,this.A4b],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.El._Init.call(this.El={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Ang={I:this},0);C.Gg._Init.call(
this.Gg={I:this},0);this.__proto__=C.Amw;this.H(Rq);this.El.H(BD);this.El.A_B(A.
jb.CV);this.El.A_C(A.jb.Text);this.Background.H(Fc);this.Background.L(A.jb.Bps);
this.Ang.H(AIi);this.Ang.L(A.jb.CV);this.Gg.H(AIi);this.Gg.N8(C.ACn);this.AEn=C.
APN;this.KR=A.aaR(A.acf.Av6);this.J(this.El,0);this.J(this.Background,0);this.J(
this.Ang,0);this.J(this.Gg,0);this.El.AR=[this,this.Agf];this.El.Ab8(A._NewObject(
C.YD,0));this.Gg.Zy(A._GetAutoObject(A.Device.Device).An);this.Gg.ZC([this,this.
Agf]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.El._Done(
);this.Background._Done();this.Ang._Done();this.Gg._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.El._ReInit();this.
Background._ReInit();this.Ang._ReInit();this.Gg._ReInit();this.Dl(A.aaR(A.acf.Av6
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xy)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gg)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACn={
AP:null,DT:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DT.H([this.V.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this
,Ae);this.DT.Dg(this.V.AQ);},Init:function(aArg){},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DT.EC(this.AX.AmV(
Ad,14));this.DT.AFi(this.AX.Ja(Ad,13));this.DT.Ae2(this.AX.H6(Ad,8));this.DT.Uw(
this.AX.H6(Ad,11));this.DT.Ae6(this.AX.H6(Ad,12));this.DT.Ae8(this.AX.CE(Ad,5));
this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DT._Init.call(this.DT={I:this},0);this.__proto__=C.ACn;this.
H(Oi);this.AP.L(A.jb.Bb);this.DT.H(AYv);this.J(this.AP,0);this.J(this.DT,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.DT._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.AP._ReInit(
);this.DT._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YD={Q:null,Init:function(aArg){var
B;this.ABc(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr]);},AE1:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nw(FilterCriterion
);var Ai2=this.Akl();if(Ai2>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai2,false);Filter.CY(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeY(false);},BwZ:function(s){this.AE1(
s);},ABc:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);if(!!FilterCriterion
)Filter.Nw(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BHh:function(s){
this.ABc(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C6:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwQ(-1);return;}var Aze=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DN(1,4))?B:null);if(!Aze){this.AW.AwQ(0);this.AW.AeY(true);}else
this.AW.AwQ(Aze.A6);},AcW:function(s){this.C6(s);},_Init:function(aArg){C.AjP._Init.
call(this,aArg);this.__proto__=C.YD;this.AW.AwQ(0);this.AW.Dk=[this,this.BwZ];this.
Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqI={BirthType:null,EaseOfDelivery:null,Ce:null,Eg:null,AbO:null,G7:null,Co:
null,AbM:null,AM4:false,Init:function(aArg){this.AM4=A._GetAutoObject(A.Device.Helper
).W.Arg();if(this.AM4)this.AeX(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeX(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Ce.
L5([this,this.AcU]);this.Ce.L8(A.aaL(A.ach.Afd));this.Ce.AR=[this,this.AcU];}this.
Eg.Ar3(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GI],this.Eg.
Q,0);A.zX([this,this.GI],this.Ce.Q,0);A.pe([this,this.GI],this);},Agg:function(G
){if(((this.Eg.Asm===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARq(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cs(
A._GetAutoObject(A.Device.Device).An);if(this.KO>0){if(this.AM4){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LZ(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.Fl(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Cs(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYw,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KO);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cs(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A5).Fz();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A5).Fz();},Aup:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.Am2));this.N.Cc=[this,this.Ay5];},AAH:function(
G){A._GetAutoObject(C.A5).Cd(32);},GI:function(G){var F;var Jt=(F=this.Eg.Q,F[1].
call(F[0]));var ABA=(F=this.Ce.Q,F[1].call(F[0]));var A40=true;if(!!Jt&&(ABA===Jt
))A40=false;A._GetAutoObject(A.Device.Helper).J7(this.Ce,A40);this.Eg.BmO(!A40);
},_Init:function(aArg){C.H2._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av2._Init.
call(this.Ce={I:this},0);C.Rb._Init.call(this.Eg={I:this},0);C.Acs._Init.call(this.
AbO={I:this},0);C.BU._Init.call(this.G7={I:this},0);C.SY._Init.call(this.Co={I:this
},0);C.BU._Init.call(this.AbM={I:this},0);this.__proto__=C.AqI;var B;this.Ce.H(AhX
);this.Ce.Ai(true);this.Ce.T(A.aaR(A.acf.Ak2));this.Ce.ArN(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.Asx));this.Ce.ArO(A.aaR(A.acf.Akj));this.Eg.H(AhX);
this.Eg.Ai(true);this.Eg.T(A.aaR(A.acf.Ul));this.AbO.H(AYx);this.AbO.Ai(true);this.
AbO.T(A.aaR(A.acf.GO));this.G7.H(AhX);this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Ars
));this.Co.H(AhX);this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Aef));this.Co.AFS(true);
this.AbM.H(AhX);this.AbM.Ai(true);this.AbM.T(A.aaR(A.acf.AgI));this.J(this.Ce,-1
);this.J(this.Eg,-1);this.J(this.AbO,-1);this.J(this.G7,-1);this.J(this.Co,-1);this.
J(this.AbM,-1);this.BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L6(A._GetAutoObject(A.Device.Helper).W);this.Ce.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PX]);this.Eg.Gt([this,this.D$,this.GT]);this.Eg.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Ant,B.Nr]);this.AbO.Gt([this,this.D$,this.GT]);this.AbO.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SQ]);this.G7.Au([B=this.BirthType,
B.Ca,B.Cb]);this.G7.CI(this.BirthType);this.Co.Gt([this,this.D$,this.GT]);this.Co.
L5([B=this.Co,B.FY]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Aca([B=A._GetAutoObject(
A.Device.Helper).W,B.Awd,B.Q6]);this.AbM.Au([B=this.EaseOfDelivery,B.Ca,B.Cb]);this.
AbM.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H2;this.BirthType._Done();this.EaseOfDelivery._Done();this.Ce._Done();this.Eg._Done(
);this.AbO._Done();this.G7._Done();this.Co._Done();this.AbM._Done();C.H2._Done.call(
this);},_ReInit:function(){C.H2._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Ce._ReInit();this.Eg._ReInit();this.AbO._ReInit();
this.G7._ReInit();this.Co._ReInit();this.AbM._ReInit();this.Ce.T(A.aaR(A.acf.Ak2
));this.Ce.ArN(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asx));this.
Ce.ArO(A.aaR(A.acf.Akj));this.Eg.T(A.aaR(A.acf.Ul));this.AbO.T(A.aaR(A.acf.GO));
this.G7.T(A.aaR(A.acf.Ars));this.Co.T(A.aaR(A.acf.Aef));this.AbM.T(A.aaR(A.acf.AgI
));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ce)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acs={FN:null,AW:null,A8:0,H0:function(G){C.Dt.H0.call(this,G);if(!this.A8)this.
FY(this);else this.He(this);},Aj:function(Ae){C.Dt.Aj.call(this,Ae);this.Hy.Z(false
);this.H8.Z(false);if(this.A8===1){this.Ba(this.AW);if(this.Hm){this.AW.FP(A.jb.
CK);this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CV);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hm)this.AW.FP(A.jb.CK);
else this.AW.FP(A.jb.CV);this.Ba(null);}},Bx:function(E){var F;var BP=this.AM;C.
Dt.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Um,this.BbJ],0);},DL:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:this.FN.AkN((F=
this.N,F[1].call(F[0])));}},FY:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EN){var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.
A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SW(7);this.DL(this);this.Am();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.ARk._Init.call(this.AW={I:this},0);this.__proto__=C.Acs;this.H(Aam);this.EU(999999
);this.V.R(Atd);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H8.Z(false);this.AW.H(AYy
);this.AW.ATz(6);this.J(this.AW,0);this.AW.Au([this,this.Um,this.BbJ]);this.FN=A.
_NewObject(C.Aeu,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
_Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dv:function(){return 4;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuO={Y:null,QS:null,N4:null,Ef:null,PK:null,PG:null,PH:null,Ay:null,Gh:null,
ReasonOfLeaving:null,Ahz:null,Nc:0,AmK:false,ACr:true,AOB:false,Ash:false,Init:function(
aArg){A.zX([this,this.A96],[this,this.A9w,this.ATC],0);this.Ahp(A._GetAutoObject(
A.Device.Helper).W.AhS(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.D0(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A96],this);},DG:function(G){
var B;var Ff=0;var X=this.AV;switch(this.Cr.CO){case 6:Ff=2;break;case 7:Ff=7;break;
case 4:Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x414);if(!!X)this.
Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,null,null);},Al2:function(G
){A._GetAutoObject(C.A5).Fz();},ApJ:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HL().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dr());B2.Cs(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmK){A._GetAutoObject(A.Device.Helper).W.Ae4(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7t(A._GetAutoObject(A.Device.Helper).Dr(),this.Ash);}A._GetAutoObject(A.Device.
Helper).W.AFR(this.ReasonOfLeaving.C8((F=this.N4.Q,F[1].call(F[0]))));if(this.ACr
)A._GetAutoObject(A.Device.Helper).W.PX(0);if(this.Ash)A._GetAutoObject(A.Device.
Helper).W.AwS(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);this.A$2();},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},Ahp:function(E){
if(this.Nc===E)return;this.Nc=E;},Anq:function(){return this.Nc;},BfU:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A5).Fz();A._GetAutoObject(A.Device.Helper
).Ass();}},A96:function(G){switch(this.Ash){case false:this.Ef.T(A.aaR(A.acf.AV8
));break;case true:this.Ef.T(A.aaR(A.acf.Brs));break;default:;}},ATC:function(E){
if(this.Ash===E)return;this.Ash=E;},A9w:function(){return this.Ash;},A$2:function(
){A._GetAutoObject(A.Device.Device).AZ(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfU]);},Bnc:function(E){if(this.AOB===E)return;
this.AOB=E;},Blz:function(){return this.AOB;},BmE:function(E){if(this.ACr===E)return;
this.ACr=E;},Blo:function(){return this.ACr;},BmM:function(E){if(this.AmK===E)return;
this.AmK=E;},Blv:function(){return this.AmK;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afo._Init.call(this.QS={I:this
},0);C.AsB._Init.call(this.N4={I:this},0);C.AkR._Init.call(this.Ef={I:this},0);C.
Afo._Init.call(this.PK={I:this},0);C.Afo._Init.call(this.PG={I:this},0);C.Afo._Init.
call(this.PH={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gh._Init.call(this.
Gh={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
Ahz._Init.call(this.Ahz={I:this},0);this.__proto__=C.AuO;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Ds(C.IP);this.Y.H(Fc);this.Y.J0(1);this.QS.H(
Aao);this.QS.Ai(true);this.QS.T(A.aaR(A.acf.AmK));this.QS.Bh(true);this.QS.ZF(false
);this.QS.Ge(-1);this.QS.EU(1);this.N4.H(U5);this.N4.Ai(true);this.N4.T(A.aaR(A.
acf.ReasonOfLeaving));this.N4.Bh(true);this.N4.ZF(false);this.Ef.H(Ale);this.Ef.
Ai(true);this.Ef.T(A.aaR(A.acf.AV8));this.Ef.Bh(false);this.Ef.Ge(1000);this.Ef.
EU(999000);this.PK.H(U5);this.PK.Ai(true);this.PK.T(A.aaR(A.acf.A5B));this.PK.Bh(
true);this.PK.ZF(false);this.PK.Bx(1);this.PK.Ge(-1);this.PK.EU(1);this.PG.H(Aao
);this.PG.Ai(true);this.PG.T(A.aaR(A.acf.A5C));this.PG.Bh(true);this.PG.ZF(false
);this.PG.Bx(1);this.PG.Ge(-1);this.PG.EU(1);this.PH.H(U5);this.PH.Ai(true);this.
PH.T(A.aaR(A.acf.A6c));this.PH.Bh(true);this.PH.ZF(false);this.PH.Bx(1);this.PH.
Ge(-1);this.PH.EU(1);this.Ay.H(Ayu);this.Gh.Au(0);this.J(this.Y,0);this.J(this.QS
,0);this.J(this.N4,0);this.J(this.Ef,0);this.J(this.PK,0);this.J(this.PG,0);this.
J(this.PH,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.E2));this.Y.En=[this,this.Fh
];this.QS.Au([B=this.Gh,B.Ca,B.Cb]);this.QS.CI(this.Gh);this.QS.Aky([this,this.Blv
,this.BmM]);this.N4.Gt([this,this.D$,this.GT]);this.N4.L5([B=this.N4,B.FY]);this.
N4.L8(A.aaL(A.ach.Edit));this.N4.Au([B=this.ReasonOfLeaving,B.Ca,B.Cb]);this.N4.
CI(this.ReasonOfLeaving);this.N4.Any(this.Ahz);this.Ef.Au([this,this.Anq,this.Ahp
]);this.PK.Au([B=this.Gh,B.Ca,B.Cb]);this.PK.CI(this.Gh);this.PK.Aky([this,this.
Blz,this.Bnc]);this.PG.Au([B=this.Gh,B.Ca,B.Cb]);this.PG.CI(this.Gh);this.PG.Aky([
this,this.A9w,this.ATC]);this.PH.Au([B=this.Gh,B.Ca,B.Cb]);this.PH.CI(this.Gh);this.
PH.Aky([this,this.Blo,this.BmE]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QS._Done();this.N4._Done();this.Ef._Done();this.PK._Done(
);this.PG._Done();this.PH._Done();this.Ay._Done();this.Gh._Done();this.ReasonOfLeaving.
_Done();this.Ahz._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QS._ReInit();this.N4._ReInit();this.Ef._ReInit(
);this.PK._ReInit();this.PG._ReInit();this.PH._ReInit();this.Ay._ReInit();this.Gh.
_ReInit();this.ReasonOfLeaving._ReInit();this.Ahz._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QS.T(A.aaR(A.acf.AmK));this.N4.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ef.T(A.aaR(A.acf.AV8));this.PK.T(A.aaR(A.acf.A5B));this.PG.T(A.aaR(A.acf.A5C
));this.PH.T(A.aaR(A.acf.A6c));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AU6={AjI:null,Pz:null,Ava:AYz,Bl:function(aSize){C.Iu.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BW.H([0,40,aSize[0],80]);this.Hy.H([0,this.BW.M[1],40,
this.BW.M[3]]);this.H8.H([aSize[0]-40,this.BW.M[1],aSize[0],this.BW.M[3]]);},Aj:
function(Ae){var F;C.Iu.Aj.call(this,Ae);this.Pz.L(this.V.AQ);if(!!this.AjI){if((
F=this.AjI,F[1].call(F[0]))===-1)this.Pz.R(this.Ava+AIj);else this.Pz.R((this.Ava+
CR)+(F=this.AjI,F[1].call(F[0])).toFixed());}else this.Pz.R(this.Ava);},A3L:function(
G){this.Am();},BmW:function(E){if(A.aaZ(this.AjI,E))return;if(!!this.AjI)A.z$([this
,this.A3L],this.AjI,0);this.AjI=E;if(!!E)A.zX([this,this.A3L],E,0);if(!!E)A.pe([
this,this.A3L],this);},A_y:function(E){if(this.Ava===E)return;this.Ava=E;this.Am(
);},_Init:function(aArg){C.Iu._Init.call(this,aArg);C.CG._Init.call(this.Pz={I:this
},0);this.__proto__=C.AU6;this.H(AYA);this.V.H(AYB);this.V.A4(0x12);this.Pz.H(AYC
);this.Pz.A4(0x12);this.Pz.L(A.jb.Bm);this.J(this.Pz,0);this.Pz.S(A.aaL(A.fl.Af)
);this.Pz.AY(A.aaL(A.fl.Ak));this.Pz.Cm(null);},_Done:function(){this.__proto__=
C.Iu;this.Pz._Done();C.Iu._Done.call(this);},_ReInit:function(){C.Iu._ReInit.call(
this);this.Pz._ReInit();this.Pz.S(A.aaL(A.fl.Af));this.Pz.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iu._Mark.call(this,D);if((B=this.AjI)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMl={Y:null,JV:null,Sy:null,Ay:null,Aqw:2500,ANB:24,DG:function(G){var B;var
Ff=0;var X=this.AV;switch(this.Cr.CO){case 6:Ff=2;break;case 7:Ff=7;break;case 4:
Ff=4;break;case 5:Ff=5;break;default:;}X=this.QK(X,Ff,0x414);if(!!X)this.Ba(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,null,null);},Al2:function(G){A._GetAutoObject(
C.A5).Fz();},ApJ:function(G){},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},BmH:function(
E){if(this.Aqw===E)return;this.Aqw=E;},Blq:function(){return this.Aqw;},BmI:function(
E){if(this.ANB===E)return;this.ANB=E;},Blr:function(){return this.ANB;},Ble:function(
G){var F,Cv;this.JV.BW.L(this.JV.V.AQ);if(!!this.JV.Q)this.JV.BW.R((((String.fromCharCode(((
F=this.JV.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ak_)+String.fromCharCode(((
Cv=this.JV.Q,Cv[1].call(Cv[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JV.
AHh);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iu._Init.call(this.JV={I:this},0);C.Iu._Init.call(this.Sy={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMl;this.N.Z(true);this.
Ds(C.IP);this.Y.H(Fc);this.Y.J0(1);this.JV.H(Ale);this.JV.Ai(true);this.JV.T(A.aaR(
A.acf.Aqw));this.JV.Bh(false);this.JV.Ge(0);this.JV.EU(5000);this.JV.IW(A.aaR(A.
acf.Af8));this.JV.Jg(A.aaR(A.acf.Af8));this.JV.ATr(100);this.Sy.H(U5);this.Sy.Ai(
true);this.Sy.T(A.aaR(A.acf.A$B));this.Sy.Bh(true);this.Sy.Bx(24);this.Sy.Ge(10);
this.Sy.EU(33);this.Sy.IW(AYD);this.Ay.H(Ayu);this.J(this.Y,0);this.J(this.JV,0);
this.J(this.Sy,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.YI));this.Y.En=[this,this.
Fh];this.JV.Au([this,this.Blq,this.BmH]);this.JV.A_8([this,this.Ble]);this.Sy.Au([
this,this.Blr,this.BmI]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JV._Done();this.Sy._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JV._ReInit();this.Sy._ReInit();this.
Ay._ReInit();this.JV.T(A.aaR(A.acf.Aqw));this.JV.IW(A.aaR(A.acf.Af8));this.JV.Jg(
A.aaR(A.acf.Af8));this.Sy.T(A.aaR(A.acf.A$B));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Aru={EaseOfDelivery:null,BirthType:null,Ce:null,Dp:null,Dj:null,Co:null,Ef:null
,G7:null,Ll:null,Nc:0,L1:false,Init:function(aArg){A.zX([this,this.GI],this.Ce.Q
,0);A.zX([this,this.GI],this.Dp.Q,0);A.zX([this,this.AAN],this.Db.Q,0);A.zX([this
,this.Bfs],this.Co.Dm,0);A.zX([this,this.Bfm],this.C$.Q,0);A.zX([this,this.At_],
this.Ce.Q,0);A.zX([this,this.At_],this.Dp.Q,0);A.pe([this,this.AAN],this);A.pe([
this,this.GI],this);A.pe([this,this.Bfs],this);A.pe([this,this.Bfm],this);A.pe([
this,this.At_],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.FD();A.
_GetAutoObject(C.A5).Fz();},Agg:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhE
){var AlN=A._GetAutoObject(A.Device.Helper).AhE.AOZ();A._GetAutoObject(A.Device.
Helper).W.Ab9(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}var Alt=A._GetAutoObject(
A.Device.Helper).A12(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H3.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alt){this.AiY();A.pe([this,this.
Bxl],this);}else A._GetAutoObject(A.Device.Helper).AKq(A._GetAutoObject(A.Device.
Helper).W,Alt,(F=this.Dj.H3.Hu,F[1].call(F[0])),0,[this,this.ApE]);},Aup:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.AD2));this.N.Cc=[this,this.Ay5];},AiY:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);var Mc=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SX(Mc);var Bel=false;if(A._GetAutoObject(
A.Device.Helper).Am5()){if(A._GetAutoObject(A.Device.Device).Bt.Lk()){Bel=true;A.
_GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.
HL().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cs(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7U()&&(Bel===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.Cs(A._GetAutoObject(A.Device.Device).Bt);}}var I3=null;switch((F=this.
Dj.H3.Hu,F[1].call(F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awg,
B.AyX];break;case 2:I3=[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY];break;case
4:case 5:I3=[B=A._GetAutoObject(A.Device.Device),B.Ans,B.Aov];break;default:;}if(
!!I3)switch((F=this.Dj.Kq.V1,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Baw(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjK(),this.Dp.AjM());},Ap2:function(G){A.
_GetAutoObject(C.A5).Fz();},Bxl:function(s){this.Ap2(s);},AAH:function(G){A._GetAutoObject(
C.A5).Cd(49);},Ahp:function(E){if(this.Nc===E)return;this.Nc=E;A.abo([this,this.
Anq,this.Ahp],0);},GI:function(G){if(A._GetAutoObject(A.Device.Helper).Am5())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7U())this.
Ef.Z(true);else this.Ef.Z(false);if(this.L1){this.Dp.Z(false);this.Ce.T(A.aaR(A.
acf.ACT));this.Ce.AFh(A.aaL(A.ach.Afd));}else{this.Dp.Z(true);this.Ce.T(A.aaR(A.
acf.Ak2));this.Ce.AFh(null);}},AAN:function(G){A._GetAutoObject(A.Device.Helper).
AVQ(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.L1);},Bfs:function(G){A.pe([this,this.Bhm],this);},Bfm:function(G){A.pe([this
,this.Bhm],this);},Bhm:function(G){var F,Cv,Ti;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ef.Ahs(A._GetAutoObject(A.Device.Helper
).AhS(A._GetAutoObject(A.Device.Helper).Abx((F=this.B0.Q,F[1].call(F[0]))),(Cv=this.
Co.Dm,Cv[1].call(Cv[0])),2,(Ti=this.B0.Q,Ti[1].call(Ti[0]))));break;case 2:this.
Ef.Ahs(A._GetAutoObject(A.Device.Helper).AhS(this.KO,(F=this.Co.Dm,F[1].call(F[0
])),2,(Cv=this.B0.Q,Cv[1].call(Cv[0]))));break;default:;}},ApE:function(G){var F;
var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id
){case 22:case 21:switch((F=this.Dj.H3.Hu,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JO(this.Dj);break;case 0:this.JO(this.Dp);break;case 1:this.JO(this.
Ce);break;default:throw new Error(AyF+(F=this.Dj.H3.Hu,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JO(this.Dj);this.JO(this.Dp);}break;case 25:case 42:{this.
JO(this.Dj);this.JO(this.Ce);}break;case 41:break;default:A.ab5("%s%e",Atb,Ar.Id
);}},ApF:function(G){var F;C.H2.ApF.call(this,G);var AoT=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:AoT=A._GetAutoObject(A.Device.Device).AdS;break;case
1:AoT=730;break;default:A.ab5("%s%e",Alc,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Co.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dr()-A._GetAutoObject(A.Device.
Helper).AmI(AoT)));(F=this.C$.Q,F[2].call(F[0],this.C$.AnX));this.Ef.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhS(1));},Ae3:function(E){if(this.L1===E)return;this.L1=E;A.abo([
this,this.Awj,this.Ae3],0);},At_:function(G){var F,Cv,Ti;this.Ae3(((F=this.Ce.Q,
F[1].call(F[0]))===(Cv=this.Dp.Q,Cv[1].call(Cv[0])))&&!!(Ti=this.Ce.Q,Ti[1].call(
Ti[0])));A.pe([this,this.GI],this);},Anq:function(){return this.Nc;},Awj:function(
){return this.L1;},_Init:function(aArg){C.H2._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av2._Init.call(this.Ce={I:this},0);C.Rb._Init.call(this.Dp={I:this}
,0);C.AGQ._Init.call(this.Dj={I:this},0);C.SY._Init.call(this.Co={I:this},0);C.AkR.
_Init.call(this.Ef={I:this},0);C.BU._Init.call(this.G7={I:this},0);C.BU._Init.call(
this.Ll={I:this},0);this.__proto__=C.Aru;var B;this.Ds(C.ADu);this.CH.H(AcS);this.
Ce.H(Aoj);this.Ce.Ai(true);this.Ce.T(A.aaR(A.acf.Ak2));this.Ce.ArN(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asx));this.Ce.ArO(A.aaR(A.acf.Akj));this.
Dp.H(Aoj);this.Dp.Ai(true);this.Dp.T(A.aaR(A.acf.Ul));this.Dp.Ar3(false);this.Dj.
H(AYE);this.Dj.Ai(true);this.Dj.T(A.aaR(A.acf.GO));this.Dj.Bx(0);this.Co.H(AcS);
this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Aef));this.Co.AFS(true);this.Ef.H(AcS);this.
Ef.Ai(true);this.Ef.T(A.aaR(A.acf.Nc));this.Ef.Ge(1000);this.Ef.EU(999000);this.
G7.H(AcS);this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Ars));this.Ll.H(AcS);this.Ll.Ai(
true);this.Ll.T(A.aaR(A.acf.AgI));this.J(this.Ce,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Co,-3);this.J(this.Ef,-2);this.J(this.G7,-1);this.J(this.Ll,-
1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L6(
A._GetAutoObject(A.Device.Helper).W);this.Ce.AR=[this,this.AcU];this.Ce.L5([this
,this.AcU]);this.Ce.L8(A.aaL(A.ach.Afd));this.Ce.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PX]);this.Ce.OS([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8
]);this.Ce.PV([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U9]);this.Ce.Us([B=A._GetAutoObject(
A.Device.Device),B.Anp,B.Aou]);this.Ce.Ae3([this,this.Awj,this.Ae3]);this.Dp.Gt([
this,this.D$,this.GT]);this.Dp.L5([this,this.AcU]);this.Dp.L8(A.aaL(A.ach.Afd));
this.Dp.Uu([B=this.Gender.Animal,B.WG,B.J1]);this.Dp.OS([B=A._GetAutoObject(A.Device.
Device),B.Un,B.U8]);this.Dp.PV([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U9]);
this.Dp.Us([B=A._GetAutoObject(A.Device.Device),B.Anp,B.Aou]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Ant,B.Nr]);this.Dp.Anv([B=this.AnimalType.Animal,B.PU,B.EC]
);this.Dj.Gt([this,this.D$,this.GT]);this.Dj.L5([B=this.Dj,B.FY]);this.Dj.L8(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SQ]);this.
Dj.A99(A._GetAutoObject(A.Device.Helper).W);this.Co.Gt([this,this.D$,this.GT]);this.
Co.L5([B=this.Co,B.FY]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Aca([B=A._GetAutoObject(
A.Device.Helper).W,B.Awd,B.Q6]);this.Ef.Au([this,this.Anq,this.Ahp]);this.G7.Au([
B=this.BirthType,B.Ca,B.Cb]);this.G7.CI(this.BirthType);this.Ll.Au([B=this.EaseOfDelivery
,B.Ca,B.Cb]);this.Ll.CI(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H2;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ce._Done(
);this.Dp._Done();this.Dj._Done();this.Co._Done();this.Ef._Done();this.G7._Done(
);this.Ll._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Ce._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Co._ReInit();this.Ef._ReInit();this.G7._ReInit(
);this.Ll._ReInit();this.Ce.T(A.aaR(A.acf.Ak2));this.Ce.ArN(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.Asx));this.Ce.ArO(A.aaR(A.acf.Akj));this.Dp.T(
A.aaR(A.acf.Ul));this.Dj.T(A.aaR(A.acf.GO));this.Co.T(A.aaR(A.acf.Aef));this.Ef.
T(A.aaR(A.acf.Nc));this.G7.T(A.aaR(A.acf.Ars));this.Ll.T(A.aaR(A.acf.AgI));},_Mark:
function(D){var B;C.H2._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ce)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHp={H$:null,AhJ:null,AgT:null,AhK:null,AgU:null,AnimalType:null,Background:
null,N5:null,Rl:null,V:null,TZ:null,YL:null,AbI:null,PT:null,DM:A.jV,AGS:true,CP:
function(){this.Am();},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.An8();this.
AxZ();},An8:function(){var F,Cv;var LK=0;var Amg=0;var AlG=0;var Ig=0;if((((!!this.
AhJ&&!!this.AhK)&&!!this.AgT)&&!!this.AgU)&&!!this.AnimalType){Amg=(F=this.AhJ,F[
1].call(F[0]));AlG=(F=this.AgT,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper
).Me((F=this.AhK,F[1].call(F[0])),(Cv=this.AgU,Cv[1].call(Cv[0])));Ig=(F=this.AnimalType
,F[1].call(F[0]));}var K$=A.jb.Text;var Azm=A.jb.CV;if(!!LK){var ALF=A._GetAutoObject(
A.acj.DV).AlA(LK,Amg,AlG);Azm=A._GetAutoObject(A.acj.DV).Az1(ALF,Ig);K$=A._GetAutoObject(
A.acj.DV).Az3(ALF,Ig);}this.Background.L(Azm);this.TZ.L(K$);this.Rl.L(K$);this.N5.
L(K$);this.AbI.L(K$);if(K$===A.jb.Bm)this.YL.L(K$);else this.YL.L(A.jb.CK);this.
V.L(K$);this.PT.L(K$);},AxZ:function(){var F,Cv;var LK=0;var Amg=0;var AlG=0;if(((
!!this.AhJ&&!!this.AhK)&&!!this.AgT)&&!!this.AgU){Amg=(F=this.AhJ,F[1].call(F[0]
));AlG=(F=this.AgT,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper).Me((F=this.
AhK,F[1].call(F[0])),(Cv=this.AgU,Cv[1].call(Cv[0])));}if(!!LK){var ALF=A._GetAutoObject(
A.acj.DV).AlA(LK,Amg,AlG);this.Rl.R(A._GetAutoObject(A.Device.Converter).Tf(ALF,
2,true));this.N5.Z(true);this.Rl.Z(true);this.PT.Z(false);}else{this.N5.Z(false);
this.Rl.Z(false);this.PT.Z(true);}this.TZ.R(this.Bz0(AlG-Amg,LK));this.AbI.Z(this.
AGS);this.YL.Z(this.AGS);this.N5.R(A._GetAutoObject(A.acj.DV).AaC());},Bz0:function(
A1H,Ah4){var B;if(Ah4<0){A.ab5("%s",AYF);return A.jV;}var Iy=(AYG+A._GetAutoObject(
A.acj.DV).Af5())+CR;var FZ=A._GetAutoObject(A.Device.Converter).Ak6(A1H);if(!A1H
)FZ=A.abU(FZ,AYH,0);else if(A1H>0)FZ=A.abU(FZ,AIk,0);Iy=this.BgB(Iy,AYI,FZ);if(Ah4===
1)Iy=Iy+A.aaR(A.acf.Bj8);else{Iy=Iy+A.aaR(A.acf.Bj9);Iy=this.BgB(Iy,AYJ,Ah4.toFixed(
));}return Iy;},BgB:function(aString,BcP,Byj){if(aString===A.jV){A.ab5("%s",AYK);
return A.jV;}var A3s=aString.indexOf(BcP,0);if(A3s>=0){aString=A.ab1(aString,A3s
,BcP.length);aString=A.abU(aString,Byj,A3s);}return aString;},ATS:function(E){if(
A.aaZ(this.AhJ,E))return;if(!!this.AhJ)A.z$([this,this.C6],this.AhJ,0);this.AhJ=
E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},BmT:function(
E){if(A.aaZ(this.AgT,E))return;if(!!this.AgT)A.z$([this,this.C6],this.AgT,0);this.
AgT=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},ATT:function(
E){if(A.aaZ(this.AhK,E))return;if(!!this.AhK)A.z$([this,this.C6],this.AhK,0);this.
AhK=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},BmU:function(
E){if(A.aaZ(this.AgU,E))return;if(!!this.AgU)A.z$([this,this.C6],this.AgU,0);this.
AgU=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},C6:function(
G){this.Am();},T:function(E){if(this.DM===E)return;this.DM=E;this.V.R(E);},A_7:function(
E){if(this.AGS===E)return;this.AGS=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C6],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N5={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TZ={I:this},0);A.acg.
Ap._Init.call(this.YL={I:this},0);A.acg.Ap._Init.call(this.AbI={I:this},0);C.CG.
_Init.call(this.PT={I:this},0);this.__proto__=C.AHp;this.H(AfF);this.Background.
A1(0x3F);this.Background.H(AfF);this.N5.H(AYL);this.N5.R(A._GetAutoObject(A.acj.
DV).AaC());this.N5.A4(0x9);this.N5.L(A.jb.Text);this.Rl.H(AYM);this.Rl.A4(0x14);
this.Rl.R(A.aaR(A.acu.Akh));this.Rl.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYN);this.
V.R(A.aaR(A.acf.AuE));this.V.A4(0x12);this.V.L(A.jb.Text);this.TZ.H(Aan);this.YL.
A1(0x14);this.YL.H(AIl);this.YL.Cx(1);this.AbI.A1(0x14);this.AbI.H(AIl);this.AbI.
Cx(0);this.PT.H(AYO);this.PT.R(A.aaR(A.acf.A5i));this.J(this.Background,0);this.
J(this.N5,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TZ,0);this.J(this.YL
,0);this.J(this.AbI,0);this.J(this.PT,0);this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.
aaL(A.fl.Af));this.N5.Cm(A.aaL(A.fl.HK));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bg));this.TZ.S(A.aaL(A.
fl.Af));this.TZ.AY(A.aaL(A.fl.Ak));this.TZ.Cm(A.aaL(A.fl.Bg));this.YL.Ax(A.aaL(A.
ach.AB2));this.AbI.Ax(A.aaL(A.ach.AB2));this.H$=A._NewObject(A.Device.Rating,0);
this.PT.S(A.aaL(A.fl.Af));this.PT.AY(A.aaL(A.fl.Ak));this.PT.Cm(A.aaL(A.fl.Bg));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N5._Done(
);this.Rl._Done();this.V._Done();this.TZ._Done();this.YL._Done();this.AbI._Done(
);this.PT._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N5._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TZ._ReInit();this.YL._ReInit();this.AbI._ReInit();this.PT._ReInit(
);this.Rl.R(A.aaR(A.acu.Akh));this.V.R(A.aaR(A.acf.AuE));this.PT.R(A.aaR(A.acf.A5i
));this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.aaL(A.fl.Af));this.N5.Cm(A.aaL(A.fl.HK
));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));
this.V.Cm(A.aaL(A.fl.Bg));this.TZ.S(A.aaL(A.fl.Af));this.TZ.AY(A.aaL(A.fl.Ak));this.
TZ.Cm(A.aaL(A.fl.Bg));this.PT.S(A.aaL(A.fl.Af));this.PT.AY(A.aaL(A.fl.Ak));this.
PT.Cm(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhJ)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgU)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AV9={Animal:null,Rating:null,Cr:null,AD:null,A0:
0,Hn:function(G){var B;if(!this.Animal||!this.Rating)return;var Gj=this.AD.G6;var
CA=(C.AHp.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PU,B.EC]);CA.BmT([B=A._GetAutoObject(A.Device.Device),B.AEZ,B.AI5]);CA.BmU([B=
this.Rating,B.A9N,B.OnSetTimestamp]);switch(Gj%this.A0){case 1:{CA.ATS([B=this.Animal
,B.A9m,B.AFy]);CA.ATT([B=this.Animal,B.A9O,B.AF2]);CA.T(A.aaR(A.acf.AuE));}break;
default:if(this.Animal.Arg()){CA.ATS([B=this.Animal,B.ASK,B.AwN]);CA.ATT([B=this.
Animal,B.AS1,B.Axd]);CA.T(A.aaR(A.acf.AL3));}else{CA.ATS([B=this.Animal,B.ASK,B.
AwN]);CA.ATT([B=this.Animal,B.AS1,B.Axd]);CA.T(A.aaR(A.acf.BhE));}}if(this.A0>1)
CA.A_7(true);else CA.A_7(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GP
]));},DG:function(G){if(this.A0>0)switch(this.Cr.CO){case 6:this.CF(this);break;
case 7:this.Cc(this);break;default:this.Cr.Mx=true;}},L6:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JD(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JD(1);else{this.JD(2);this.AD.GU(1);this.
AD.HJ(this.AD.Gu,true,null,null);}if(this.A0>0)this.AD.AbL(0,this.A0-1);},Akz:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.A0>0)this.AD.AbL(0,this.A0-1);
},CF:function(G){if(this.AD.Gu>0)this.AD.GU(this.AD.Gu-1);else this.AD.GU(this.A0-
1);this.AD.HJ(this.AD.Gu,true,null,null);},Cc:function(G){if(this.AD.Gu<(this.A0-
1))this.AD.GU(this.AD.Gu+1);else this.AD.GU(0);this.AD.HJ(this.AD.Gu,true,null,null
);},JD:function(E){if(this.A0===E)return;this.A0=E;this.AD.JD(this.A0);A.abo([this
,this.Arz,this.JD],0);},Arz:function(){return this.A0;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.CL._Init.
call(this.AD={I:this},0);this.__proto__=C.AV9;this.H(AfF);this.Cr.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfF);this.AD.N8(C.AHp);this.AD.Ae7(160);this.AD.GU(0);this.
AD.JD(2);this.J(this.AD,0);this.Cr.BG=[this,this.DG];this.Cr.D2=[this,this.DG];this.
AD.Hn=[this,this.Hn];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eh={Init:function(aArg){},Bl:function(aSize){C.Cp.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Aj:function(Ae){var B;C.Cp.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((
Ae&0x20)===0x20);var GF=this.Bo.Bw;var FV=A.jb.CK;var GZ=A.jb.Text;if(this.Hm){FV=
A.jb.CV;GZ=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CV);this.V.L(A.jb.CK);}else
if(GF){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);}this.LN=Hf;
this.KL=Fu;this.Qv=GF;},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Eh;this.H(K2);this.V.H(BD);this.ZF(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeS={KP:null,GL:A.jV,Bl:function(aSize){C.Eh.Bl.call(this,aSize);this.KP.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Aj:function(Ae){C.Eh.Aj.call(this,Ae);this.KP.
L(this.V.AQ);},Init:function(aArg){},Ab8:function(E){if(this.GL===E)return;this.
GL=E;this.KP.R(E);},_Init:function(aArg){C.Eh._Init.call(this,aArg);C.CG._Init.call(
this.KP={I:this},0);this.__proto__=C.AeS;this.H(K2);this.Background.H(K2);this.V.
H(Aal);this.V.R(LB);this.KP.H(I1);this.KP.R(AYP);this.J(this.KP,0);this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.KP.S(A.aaL(A.fl.Af));this.
KP.AY(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eh;this.
KP._Done();C.Eh._Done.call(this);},_ReInit:function(){C.Eh._ReInit.call(this);this.
KP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.KP.S(A.aaL(
A.fl.Af));this.KP.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eh._Mark.call(this
,D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av2={ACv:null,Q:null,A3:null,AF:null,In:null,L1:null,Ap:null,EM:null,AOe:A.jV
,AOf:A.jV,Bl:function(aSize){C.AeS.Bl.call(this,aSize);if(!this.ACv)this.KP.H([].
concat(0,this.KP.M.slice(1,4)));else this.KP.H([].concat(this.Ap.M[2],this.KP.M.
slice(1,4)));},Aj:function(Ae){var F,Cv,Ti;C.AeS.Aj.call(this,Ae);var Bdi=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Ape)this.Ab8(this.AOe);else
this.Ab8(this.AOf);}else{this.Ab8(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.In&&!!this.A3)&&!!this.AF)&&!!this.L1)&&(((F=this.
In,F[1].call(F[0]))===1)||(!(Cv=this.In,Cv[1].call(Cv[0]))&&(Ti=this.L1,Ti[1].call(
Ti[0])))))Bdi=true;}}this.EM.Z(Bdi);this.Ap.L(this.V.AQ);A.pe([this,this.Agb],this
);},C6:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)
A.pe([this,this.C6],this);},AFh:function(E){if(this.ACv===E)return;this.ACv=E;this.
Ap.Ax(E);this.Bkd();},OS:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaM],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaM],E,0);if(!!E)A.pe([
this,this.AaM],this);},PV:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaO],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaO],E,0);if(!!E)
A.pe([this,this.AaO],this);},AaO:function(G){this.Am();},AaM:function(G){this.Am(
);},Us:function(E){if(A.aaZ(this.In,E))return;if(!!this.In)A.z$([this,this.Al0],
this.In,0);this.In=E;if(!!E)A.zX([this,this.Al0],E,0);if(!!E)A.pe([this,this.Al0
],this);},Al0:function(G){this.Am();},Agb:function(G){var F,Cv;if((!this.In||!this.
A3)||!this.AF)return;var A2$=this.KP.Afg([(this.KP.String.length-(F=this.AF,F[1].
call(F[0])))-(Cv=this.A3,Cv[1].call(Cv[0])),0]);var A4v=this.KP.Afg([this.KP.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABt=this.KP.Dd(0x0);this.EM.H([A2$[0]-
1,ABt[1],A4v[0]+1,ABt[3]]);},ArN:function(E){if(this.AOe===E)return;this.AOe=E;this.
Am();},ArO:function(E){if(this.AOf===E)return;this.AOf=E;this.Am();},Ae3:function(
E){if(A.aaZ(this.L1,E))return;if(!!this.L1)A.z$([this,this.A3S],this.L1,0);this.
L1=E;if(!!E)A.zX([this,this.A3S],E,0);if(!!E)A.pe([this,this.A3S],this);},A3S:function(
G){this.Am();},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BX._Init.call(this.EM={I:this},0);this.__proto__=C.Av2;
this.Ap.H(AhU);this.EM.H(AYQ);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KP.Q7([this,this.Agb]);},_Done:function(){this.__proto__=
C.AeS;this.Ap._Done();this.EM._Done();C.AeS._Done.call(this);},_ReInit:function(
){C.AeS._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeS._Mark.call(this,D);if((B=this.ACv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Il:0,AaK:4,Bep:false,Bex:true,Bew:false,Bdp:true,Beo:false
,Al5:function(G){C.Ra.Al5.call(this,G);if(A._GetAutoObject(A.Device.Helper).Ben(
)){this.Il=A._GetAutoObject(A.Device.Helper).WU.Id;var Aiw=A._GetAutoObject(A.Device.
Helper).ARt(this.Il);if(Aiw)A._GetAutoObject(A.Device.Device).AZ(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3X]);else{this.AaK=A._GetAutoObject(
A.Device.Helper).ARu(this.Il);var BeU=false;if((this.AaK===3)||(this.AaK===2))BeU=
A._GetAutoObject(A.Device.Helper).A7V(this.Il,A._GetAutoObject(A.Device.Helper).
W);if(BeU)A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Il),0,null);else switch(this.AaK){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).AsQ(this.Il);A._GetAutoObject(A.Device.Device).AZ(46,true,BN.
toFixed(),0,[this,this.A3X]);}break;case 3:case 1:case 0:case 4:this.A4L();break;
default:throw new Error(AIm+this.AaK.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},AI6:function(s){this.Ew(s);},A4L:function(){if((this.AaK===3)||(this.
AaK===2)){if((this.Bdp&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Il)){A._GetAutoObject(A.Device.Device).AZ(69,true
,A.jV,0,[this,this.A3X]);return;}else this.BCy();}if(this.Bep)A._GetAutoObject(A.
Device.Helper).Bpb(this.Il);A._GetAutoObject(A.Device.Helper).W.PX(this.Il);this.
Beo=true;this.BCA();this.Ew(this);},A3X:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4L();break;case 107:switch(Ar.PopupState){case 7:{this.Bep=true;this.A4L();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIn,Ar.Id);}},BCy:function(){A._GetAutoObject(A.
Device.Helper).W.Nr(this.Il);if(this.Bew&&(A._GetAutoObject(A.Device.Converter).
S_(this.Il)===10)){var Bc4=Math.trunc((this.Il%1000000000000)/10000000000);if(!Bc4&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((Bc4===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCA:function(){if(this.Bex){A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).A5A(A._GetAutoObject(A.Device.
Device).Ak1,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak1===1)A._GetAutoObject(A.Device.Helper).Bax();}},_Init:function(aArg){C.Ra._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Ds(C.IP
);this.Number.R(A.aaR(A.acf.OX));this.Jl.H(AYR);this.IZ.H(UZ);this.AkB(1);this.N.
CF=[this,this.AI6];this.N.C3(A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OX));},_className:"Application::SetTransponderScreen"
};C.ADG={Gq:null,Lp:null,Kx:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Aj:function(Ae){C.EB.Aj.call(this,Ae);this.Lp.R(A._GetAutoObject(A.acj.DV
).Af5());this.Kx.R(A._GetAutoObject(A.acj.DV).AaC());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gq={I:this},0);A.acg.Text._Init.
call(this.Lp={I:this},0);A.acg.Text._Init.call(this.Kx={I:this},0);this.__proto__=
C.ADG;this.Background.L(A.jb.Text);this.Gq.H(AYS);this.Gq.A4(0x11);this.Gq.R(A.aaR(
A.acf.Date));this.Gq.L(A.jb.Bm);this.Lp.H(AYT);this.Lp.A4(0x11);this.Lp.L(A.jb.Bm
);this.Kx.H(AYU);this.Kx.L(A.jb.Bm);this.J(this.Gq,0);this.J(this.Lp,0);this.J(this.
Kx,0);this.Gq.S(A.aaL(A.fl.Af));this.Lp.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gq._Done();this.Lp.
_Done();this.Kx._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gq._ReInit();this.Lp._ReInit();this.Kx._ReInit();this.Gq.R(A.aaR(
A.acf.Date));this.Gq.S(A.aaL(A.fl.Af));this.Lp.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHt={Mt:null,Hq:null,Ie:null,AP:null,A_:null,FZ:0,Ig:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mt.M);
},Aj:function(Ae){C.A$.Aj.call(this,Ae);if(this.AiL){this.Ie.R(Rr);this.Ie.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Tf(this.FZ,2,true));this.Ie.L(A._GetAutoObject(A.acj.DV).Az3(this.FZ,this.Ig));
this.Mt.L(A._GetAutoObject(A.acj.DV).Az1(this.FZ,this.Ig));}this.Hq.L(this.V.AQ);
},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hw(
Ad,6);var Al_=this.AX.CE(Ad,8);if(this.Hs>0){var Bzs=this.AX.Hw(this.Hs-1,6);var
BCd=this.AX.CE(this.Hs-1,8);var LK=A._GetAutoObject(A.Device.Helper).Me(Bzs,AlD);
if(!!LK){this.AiL=false;this.FZ=A._GetAutoObject(A.acj.DV).AlA(LK,BCd,Al_);}else{
this.AiL=true;this.FZ=0;}}else{this.AiL=true;this.FZ=0;}this.T(A._GetAutoObject(
A.acj.KQ).AC8(AlD));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak6(Al_));this.
Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHt;this.V.H(O_);this.Mt.H(Ate);this.Hq.H(AIo);this.Hq.A4(0x12);this.Hq.R(Rp);
this.Hq.L(A.jb.Text);this.Ie.H(AIp);this.Ie.R(Rp);this.Ie.L(A.jb.Text);this.AP.H(
Aon);this.AP.L(A.jb.Bb);this.A_.H(Aoo);this.A_.L(A.jb.Bb);this.J(this.Mt,0);this.
J(this.Hq,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mt._Done();this.Hq._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mt._ReInit(
);this.Hq._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bf:null,V8:null,AhQ:null,S8:null
,KR:A.jV,CP:function(){this.Am();},Aj:function(Ae){C.AB.Aj.call(this,Ae);var LK=
A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LK){var FZ=A._GetAutoObject(
A.acj.DV).AlA(LK,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdN=A.aaR(A.acf.Bh0);AdN=A._GetAutoObject(
A.Device.Helper).MO(AdN,O$,A._GetAutoObject(A.Device.Converter).Tf(FZ,2,true));AdN=
A._GetAutoObject(A.Device.Helper).MO(AdN,Ayl,A._GetAutoObject(A.acj.DV).AaC());this.
S8.R(AdN);this.AhQ.L(A._GetAutoObject(A.acj.DV).Az1(FZ,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S8.L(A._GetAutoObject(A.acj.DV).Az3(FZ,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S8.R(A.aaR(A.acf.AV7));this.AhQ.L(A.jb.
ARe);this.S8.L(A.jb.Text);}},CC:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CY(HY);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fw.CY(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);this.AxE(this);},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxE:function(G){this.Bf=A._NewObject(C.Gg,0);this.Bf.N8(C.AHt);this.Bf.H(Ayz
);this.Bf.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dl(this.KR);this.J(this.
Bf,0);this.Ba(this.Bf);},Ano:function(G){A._GetAutoObject(C.A5).Fz();},Dl:function(
E){if(this.KR===E)return;this.KR=E;if(!!this.Bf)this.Bf.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADG._Init.call(this.V8={I:this},0);A.acg.AK._Init.
call(this.AhQ={I:this},0);A.acg.Text._Init.call(this.S8={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cg);this.N.Z(true);this.Ds(C.IP);this.V8.H(
Qc);this.KR=A.aaR(A.acf.Aki);this.AhQ.A1(0x1D);this.AhQ.H(I1);this.S8.A1(0x1D);this.
S8.H(I1);this.S8.A4(0x12);this.S8.R(Rp);this.J(this.V8,0);this.J(this.AhQ,0);this.
J(this.S8,0);this.N.CF=[this,this.Ano];this.N.C3(A.aaL(A.ach.E2));this.S8.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V8._Done();this.AhQ._Done(
);this.S8._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V8._ReInit();this.AhQ._ReInit();this.S8._ReInit();this.Dl(A.aaR(A.acf.Aki
));this.S8.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mp={DR:null,AcC:null,ARV:11,EV:0,A5y:true,AB9:false,H0:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.E4(4);else A._GetAutoObject(A.Device.Device).AZ(
30,true,A.jV,0,null);},CC:function(G){if(this.DR.AAc())this.DR.Ac9();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqY())this.E4(5);else this.E4(1);},
E3:function(G){if(this.EV===1)this.E4(0);},Ew:function(G){this.E4(0);A._GetAutoObject(
C.A5).Fz();},BCQ:function(){A._GetAutoObject(A.Device.Device).AhI();},A4R:function(
){A._GetAutoObject(A.Device.Device).AnZ();},A_a:function(E){if(this.AB9===E)return;
this.AB9=E;A.abo([this,this.Blj,this.A_a],0);},E4:function(E){var B;if(this.EV===
E)return;this.EV=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkM();A.zX([
this,this.AKF],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkA],0);A.z$([this,this.
AAE],[B=this.DR,B.SL,B.E4],0);this.BCQ();}break;case 3:{A.z$([this,this.AKF],[B=
A._GetAutoObject(A.Device.Helper),B.ArA,B.AkA],0);this.A4R();this.BAL();}break;case
2:{A._GetAutoObject(A.Device.Helper).Ass();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5y)this.BCB();else this.BCE();}break;case 4:{A.z$([this
,this.AKF],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkA],0);this.A4R();A._GetAutoObject(
A.Device.Helper).Ass();A.zX([this,this.BfC],[B=A._GetAutoObject(A.Device.Device)
,B.Awo,B.Ay2],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARV);}
break;case 5:this.BgX();break;case 6:{A.zX([this,this.AAE],[B=this.DR,B.SL,B.E4]
,0);this.DR.Ac9();}break;case 0:{A.z$([this,this.AKF],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkA],0);this.A4R();}break;default:throw new Error(AyG);}A.abo([this
,this.SL,this.Bw$],0);},Bw$:function(Aq){this.E4(Aq);},AKF:function(G){if(!!A._GetAutoObject(
A.Device.Helper).WU){if(this.EV===1)this.E4(3);else A.ab5("%s%e",AYV,this.EV);}else
A.ab5("%s",AIq);},BCB:function(){A._GetAutoObject(A.Device.Device).AZ(13,true,A.
jV,0,[this,this.BA1]);},BA1:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bdt(false
))A._GetAutoObject(C.A5).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkM();this.
E4(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkM(
);this.E4(1);}},Bdt:function(AiY){if(A._GetAutoObject(A.Device.Device).An.Lk()){
A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.
HL().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.G8();A.
_GetAutoObject(A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.PX(A._GetAutoObject(A.Device.Helper).WU.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhE){var AlN=A._GetAutoObject(A.Device.Helper).AhE.AOZ();A._GetAutoObject(
A.Device.Helper).W.Ab9(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}if(A._GetAutoObject(
A.Device.Helper).ARu(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nr(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).BhP(A._GetAutoObject(A.Device.
Device).Agy,A._GetAutoObject(A.Device.Helper).W));if(AiY){A._GetAutoObject(A.Device.
Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);var Mc=A._GetAutoObject(A.Device.
Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SX(Mc);if(A._GetAutoObject(A.Device.Helper).Am5()){if(A._GetAutoObject(A.
Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abx(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).Agy)A._GetAutoObject(
A.Device.Helper).Bax();}return true;},BAL:function(){if(!!A._GetAutoObject(A.Device.
Helper).WU){var AJx=true;if(A._GetAutoObject(A.Device.Helper).WU.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJx=A._GetAutoObject(A.Device.Helper).A77(A._GetAutoObject(
A.Device.Helper).WU.Id);if(!AJx&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdt(true);AJx=A._GetAutoObject(A.Device.Helper).A77(A._GetAutoObject(A.
Device.Helper).WU.Id);}}if(AJx)this.E4(5);else this.E4(2);}else{A.ab5("%s",AIq);
return;}},BfC:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARV){A.z$([this,this.BfC],[B=A._GetAutoObject(A.Device.Device),B.Awo,B.Ay2
],0);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.E4(5);else this.E4(1);}},
BgX:function(){if(this.AB9===true)this.E4(6);else A._GetAutoObject(C.A5).Cd(24);
},BCE:function(){A._GetAutoObject(A.Device.Device).AZ(36,true,A.jV,0,[this,this.
BBU]);},BBU:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkM();this.E4(1);}},AAE:function(G){if(!this.DR.EV)this.E4(1);},A3K:function(G
){},Bxj:function(s){this.A3K(s);},Blj:function(){return this.AB9;},SL:function(){
return this.EV;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcC={I:this},0);this.__proto__=C.Mp;this.N.Z(true);this.Ds(C.AqZ);this.
Number.H(AYW);this.Number.R(A.aaR(A.acf.A$V));this.Jl.H(AYX);this.IZ.H(AYY);this.
AcC.H(AYZ);this.AcC.R(AY0);this.AcC.L(A.jb.Text);this.J(this.AcC,0);this.N.CF=[this
,this.Ew];this.N.Cf=[this,this.Bxj];this.N.C3(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.AcC.S(A.aaL(A.fl.H5));this.DR=A._GetAutoObject(C.DR);},_Done:function(
){this.__proto__=C.Ra;this.AcC._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.AcC._ReInit();this.Number.R(A.aaR(A.acf.A$V));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5m={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ao$:-1,EV:0,ByI:function(){var BgC=false;
var Os=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HL().toFixed(),0,null);else if(Os){BgC=true;var B2=A._NewObject(
A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AxA(B2,5);B2.OnSetAppearance(3);B2.Cs(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxA(B2
,5);B2.OnSetAppearance(1);B2.Cs(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ,A._GetAutoObject(A.
Device.Device).An);if(BgC)A._GetAutoObject(A.Device.Helper).W.Uw(false);if(Os)A.
_GetAutoObject(A.Device.Helper).W.AnU(false);else A._GetAutoObject(A.Device.Helper
).W.AnU(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AZ(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},ByK:function(){A._GetAutoObject(
A.Device.Helper).W.AGO(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);else A._GetAutoObject(
A.Device.Device).AZ(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);},Qp:function(Ei){switch(Ei){case 4:this.ByI();break;case
128:A._GetAutoObject(C.A5).Cd(7);break;case 16:A._GetAutoObject(C.A5).Cd(36);break;
case 1:A._GetAutoObject(C.A5).Cd(10);break;case 2:A._GetAutoObject(C.A5).Cd(11);
break;case 8:this.ByK();break;case 64:A._GetAutoObject(C.A5).Cd(29);break;case 32:
A._GetAutoObject(C.A5).Cd(48);break;case 256:A._GetAutoObject(C.A5).Cd(21);break;
case 512:A._GetAutoObject(C.A5).Cd(30);break;case 1024:this.BAI();break;case 262144:
this.BC6();break;case 2048:this.Ac9();break;case 4096:this.Bdl(false);break;case
8192:this.ByJ();break;case 16384:this.BAH();break;case 32768:this.By9();break;case
524288:this.By_();break;case 65536:this.Bzw();break;case 131072:this.BCt();break;
case 0:break;default:throw new Error(AY1);}},Bdv:function(Ei,Byd){var EP=A._NewObject(
C.Ws,0);EP.Ab7(false);EP.Ai(true);EP.AR=Byd;EP.Bms(Ei);switch(Ei){case 1:{EP.T(A.
aaR(A.acf.An0));EP.DD(A.aaL(A.ach.ALT));}break;case 2:{EP.T(A.aaR(A.acf.A$F));EP.
DD(A.aaL(A.ach.ALU));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DD(A.aaL(A.ach.ALV
));EP.AFO(true);}break;case 8:{EP.T(A.aaR(A.acf.Ase));EP.DD(A.aaL(A.ach.ALW));EP.
AFO(true);}break;case 16:{EP.T(A.aaR(A.acf.AMs));EP.DD(A.aaL(A.ach.ALX));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DD(A.aaL(A.ach.ALY));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DD(A.aaL(A.ach.ALZ));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DD(A.aaL(A.ach.AL0));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DD(A._GetAutoObject(A.acj.DV).BAg());}break;case 512:{EP.T(A.aaR(A.acf.ASi));
EP.DD(A.aaL(A.ach.ALL));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DD(A.aaL(A.ach.ALM));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DD(A.aaL(A.ach.ALS));}break;case 2048:{EP.T(A.aaR(A.acf.TC));EP.DD(A.aaL(A.ach.ALN
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DD(A.aaL(A.ach.ALO));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DD(A.aaL(A.ach.ALP));EP.AFO(true);}break;case
16384:{EP.T(A.aaR(A.acf.Bi$));EP.DD(A.aaL(A.ach.ALQ));}break;case 131072:{EP.T(A.
aaR(A.acf.Bpo));EP.DD(A.aaL(A.ach.ALR));}break;default:A.ab5("%s",(AY2+Ei.toFixed(
))+AY3);}return EP;},BzJ:function(){this.Ao$=this.Ao$+1;if(this.Ao$>=this.AutoActions.
Ng())this.E4(0);else this.E4(2);},BCh:function(){this.Ao$=-1;},AAc:function(){return(
this.Ao$>-1)&&!this.BAB();},BAB:function(){return this.Ao$>=this.AutoActions.Ng(
);},E4:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.BzJ();break;
case 2:{var Tm=this.AutoActions.OK(this.Ao$);if(this.A5j(A._GetAutoObject(A.Device.
Helper).W,Tm))this.Qp(Tm);else A._GetAutoObject(A.Device.Device).AZ(64,true,(this.
ActionToString.Lz(Tm)+Atc)+this.AnimalTypeToString.Lz(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M5]);}break;case 0:this.BCh();break;default:throw new
Error(AyG);}A.abo([this,this.SL,this.E4],0);},M5:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bdl(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Cd(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAc())this.
E4(1);},Bdn:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAI:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A5).Cd(
45);else A._GetAutoObject(A.Device.Device).AZ(32,true,A.jV,0,[this,this.M5]);},Ac9:
function(){this.E4(1);},BCf:function(){var Os=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Os&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device
).Bt.HL().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.G8();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AxA(B2,5);B2.Cs(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.Fl(A._GetAutoObject(A.Device.Helper).W.CQ,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uw(false);if(Os)A._GetAutoObject(
A.Device.Helper).W.AnU(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BCg:function(){A._GetAutoObject(
A.Device.Helper).W.AGO(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},Bdl:function(BzN){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzN===false))A._GetAutoObject(A.Device.
Device).AZ(63,true,A.jV,0,[this,this.M5]);else A._GetAutoObject(C.A5).Cd(54);},ByJ:
function(){A._GetAutoObject(A.Device.Helper).W.ArW(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AZ(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BAH:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A5).Cd(81);else A._GetAutoObject(A.
Device.Device).AZ(69,true,A.jV,0,[this,this.M5]);},By9:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae5(false);A._GetAutoObject(A.Device.
Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AZ(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);}}},Bzw:function(){A._GetAutoObject(A.Device.Helper).W.Ae4(false);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae4(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AZ(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);else A._GetAutoObject(A.Device.Device).AZ(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},A5j:function(C5,Ei
){var Qz=false;switch(Ei){case 32768:Qz=C5.IsRegistrationNoticePending&&!!C5.NaisIdMother;
break;case 524288:Qz=C5.IsRegistrationNoticePending&&!C5.NaisIdMother;break;case
4096:case 8192:switch(C5.AnimalType){case 1:Qz=true;break;default:;}break;case 512:
switch(C5.AnimalType){case 0:Qz=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qz=true;break;default:A.ab5("%s",AY4+
Ei.toFixed());}return Qz;},BCt:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A5).Cd(80);else A._GetAutoObject(A.Device.Device).AZ(
69,true,A.jV,0,[this,this.M5]);},BC6:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AZ(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M5]);else{A._GetAutoObject(A.
Device.Helper).W.PX(0);A._GetAutoObject(A.Device.Helper).W.SQ(A._GetAutoObject(A.
Device.Helper).A5A(A._GetAutoObject(A.Device.Device).An5,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AZ(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M5]);}},By_:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},SL:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5m;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL5={R6:null,Aqi:null,E4:function(E){if(this.EV===E)return;C.Mp.E4.call(this
,E);switch(E){case 1:this.Ds(C.AqZ);break;case 5:case 6:this.Ds(C.IP);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyG);}},A3K:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);C.CG._Init.call(this.R6={I:this},0);C.AL6._Init.call(this.Aqi={I:this},0);
this.__proto__=C.AL5;this.A_a(true);this.R6.H(AY5);this.R6.R(A.aaR(A.acf.TC));this.
R6.L(A.jb.Text);this.Aqi.H(AY6);this.J(this.R6,0);this.J(this.Aqi,0);this.N.Cu(A.
aaL(A.ach.AeD));this.R6.S(A.aaL(A.fl.Af));this.R6.AY(A.aaL(A.fl.HK));this.R6.Cm(
A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.Mp;this.R6._Done();this.Aqi.
_Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.call(this);this.
R6._ReInit();this.Aqi._ReInit();this.R6.R(A.aaR(A.acf.TC));this.R6.S(A.aaL(A.fl.
Af));this.R6.AY(A.aaL(A.fl.HK));this.R6.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.Mp._Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={If:null,J9:null,A3K:function(G){if(this.If.N3(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mp._Init.call(this,aArg);A.
acg.Text._Init.call(this.J9={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J9.H(AY7);this.J9.Lu(true);this.J9.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.ABX));this.J9.L(A.jb.Text);this.J(this.J9,0);this.N.Cu(A.aaL(A.ach.
AeD));this.J9.S(A.aaL(A.fl.Af));this.If=A._GetAutoObject(C.Po);},_Done:function(
){this.__proto__=C.Mp;this.J9._Done();C.Mp._Done.call(this);},_ReInit:function(){
C.Mp._ReInit.call(this);this.J9._ReInit();this.J9.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.ABX));this.J9.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mp._Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL6={Y:null,Init:function(aArg){var B;A.zV([this,this.ABF],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuD],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABF],this);A.pe([this,this.AuD],this);this.H(A.abK(this.M,AY8));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AY9)));},Bda:function(G){
var B;var AlB=0;var AzF=0;var Bdr;var X=this.Y.Ah;var Cz=null;Bdr=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ng()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cz=(C.Ws.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cz){Cz.
H(A.abK(Cz.M,AY_));Cz.H(A.abM(Cz.M,(AzF*58)+Bdr));Cz.H(A.abO(Cz.M,AlB*58));if(AzF>=
3){AlB=AlB+1;AzF=0;}else AzF=AzF+1;}X=X.Ah;}this.Ba(null);},A18:function(Ei){var
EP=A._GetAutoObject(C.DR).Bdv(Ei,null);this.J(EP,0);this.Bda(this);},Ao0:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((
AdL.U&0x400)===0x400))this.HQ(AdL);}},ABF:function(G){this.Ao0();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ng();for(O=0;O<CB;O=O+1){var Tm=A._GetAutoObject(C.
AutoActions).OK(O);this.A18(Tm);}A.pe([this,this.Bda],this);A.pe([this,this.AuD]
,this);A.pe([this,this.BDe],this);},AuD:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ws.isPrototypeOf(
X)?X:null);Aa.AFO(false);}X=X.Ah;}},BDe:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ws.isPrototypeOf(
X)?X:null);var ByZ=A._GetAutoObject(C.AutoActions).Ng();if(!!Aa){var O;Aa.A98(false
);for(O=0;O<ByZ;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OK(O)){Aa.A98(
true);Aa.Bny(AY$+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL6;this.
Y.J0(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DR={_Init:function(){C.A5m._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.API={Lo:null,T$:null,Init:function(aArg){
this.Lo.R(A._GetAutoObject(A.acj.Temperature).AlM());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lo={I:this},0);C.CG._Init.call(
this.T$={I:this},0);this.__proto__=C.API;this.Lo.H(AZa);this.Lo.A4(0x12);this.Lo.
L(A.jb.Text);this.T$.H(Aop);this.T$.R((A.aaR(A.acf.Ahk)+AIr)+A.aaR(A.acf.Kp));this.
T$.A4(0x12);this.T$.L(A.jb.Text);this.J(this.Lo,0);this.J(this.T$,0);this.Lo.S(A.
aaL(A.fl.Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AY(A.aaL(A.fl.Bg));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Lo._Done();this.T$._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lo._ReInit();this.T$.
_ReInit();this.T$.R((A.aaR(A.acf.Ahk)+AIr)+A.aaR(A.acf.Kp));this.Lo.S(A.aaL(A.fl.
Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADE={JC:null,D1:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JC={I:this},0);A.acg.Text._Init.call(this.D1={I:this},0);this.__proto__=
C.ADE;this.JC.H(AZb);this.JC.Lu(true);this.JC.A4(0x14);this.JC.R(A.aaR(A.acf.AhP
)+AIs);this.JC.L(A.jb.Text);this.D1.H(Aop);this.D1.Lu(true);this.D1.R(A.aaR(A.acf.
AGj));this.D1.L(A.jb.Text);this.J(this.JC,0);this.J(this.D1,0);this.JC.S(A.aaL(A.
fl.Ak));this.D1.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JC.
_Done();this.D1._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JC._ReInit();this.D1._ReInit();this.JC.R(A.aaR(A.acf.AhP)+AIs);this.
D1.R(A.aaR(A.acf.AGj));this.JC.S(A.aaL(A.fl.Ak));this.D1.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T1={Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jd={I:this},0);this.__proto__=C.T1;this.Jd.H(AIt);this.Jd.R((((A.aaR(A.acf.
RU)+AcT)+AIu)+A.aaR(A.acf.BaL))+Pa);this.Jd.A4(0x12);this.Jd.L(A.jb.Text);this.J(
this.Jd,0);this.Jd.S(A.aaL(A.fl.Af));this.Jd.AY(A.aaL(A.fl.Ak));this.Jd.Cm(A.aaL(
A.fl.Bg));},_Done:function(){this.__proto__=C.De;this.Jd._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jd._ReInit();this.Jd.R((((
A.aaR(A.acf.RU)+AcT)+AIu)+A.aaR(A.acf.BaL))+Pa);this.Jd.S(A.aaL(A.fl.Af));this.Jd.
AY(A.aaL(A.fl.Ak));this.Jd.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APK={Lp:null,Kx:null,CP:function(){this.A$X();},Init:function(aArg){this.A$X(
);},A$X:function(){this.Lp.R(A._GetAutoObject(A.acj.DV).Af5());this.Kx.R(A._GetAutoObject(
A.acj.DV).AaC());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lp={I:this},0);C.CG._Init.call(this.Kx={I:this},0);this.__proto__=C.APK;
this.Lp.H(AZc);this.Lp.A4(0x12);this.Lp.L(A.jb.Text);this.Kx.H(Aop);this.Kx.L(A.
jb.Text);this.J(this.Lp,0);this.J(this.Kx,0);this.Lp.S(A.aaL(A.fl.Af));this.Kx.S(
A.aaL(A.fl.Af));this.Kx.AY(A.aaL(A.fl.Ak));this.Kx.Cm(A.aaL(A.fl.Bg));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lp._Done();this.Kx._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lp._ReInit();
this.Kx._ReInit();this.Lp.S(A.aaL(A.fl.Af));this.Kx.S(A.aaL(A.fl.Af));this.Kx.AY(
A.aaL(A.fl.Ak));this.Kx.Cm(A.aaL(A.fl.Bg));this.CP();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kx
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANi={Mt:null,Hq:null,Ie:null,AP:null,A_:null,FZ:0,AaH:0,Ig:0,AiL:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mt.M);
},Aj:function(Ae){C.A$.Aj.call(this,Ae);if(this.AiL){this.Ie.R(Rr);this.Ie.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Tf(this.FZ,2,true));this.Ie.L(A._GetAutoObject(A.acj.DV).Az3(this.FZ,this.Ig));
this.Mt.L(A._GetAutoObject(A.acj.DV).Az1(this.FZ,this.Ig));}if(this.AaH>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak6(this.AaH));else this.Hq.R(Rr);this.Hq.
L(this.V.AQ);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mn=
this.AX.CE(Ad,1);var Auy=this.AX.Hw(Ad,24);var AKe=this.AX.CE(Ad,23);var Auz=this.
AX.Hw(Ad,19);this.AaH=this.AX.CE(Ad,18);if((Auy>0)&&(Auy!==Auz)){var LK=A._GetAutoObject(
A.Device.Helper).Me(Auy,Auz);if(!!LK){this.AiL=false;this.FZ=A._GetAutoObject(A.
acj.DV).AlA(LK,AKe,this.AaH);}else{this.AiL=true;this.FZ=0;}}else{this.AiL=true;
this.FZ=0;}this.T(Mn.toFixed());this.Ig=this.AX.AmV(Ad,14);this.Am();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.ANi;this.V.H(O_);this.Mt.H(Ate);this.Hq.H(AIo);this.Hq.A4(0x12);this.Hq.R(Rp);
this.Hq.L(A.jb.Text);this.Ie.H(AIp);this.Ie.R(Rp);this.Ie.L(A.jb.Text);this.AP.H(
Aon);this.AP.L(A.jb.Bb);this.A_.H(Aoo);this.A_.L(A.jb.Bb);this.J(this.Mt,0);this.
J(this.Hq,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mt._Done();this.Hq._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mt._ReInit(
);this.Hq._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Nb={Ms:null,AP:null,A_:null,GA:null,Xx:0,Init:
function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Ms.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ms.M);this.Background.H([].concat(this.Ms.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.GA.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.GA.M[2]-1,0,this.
GA.M[2]+1,aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.GA.L(this.V.AQ
);if(!!this.Xx&&(this.Xx!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xx));this.V.L(A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Ms.L(this.
Background.AQ);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mn=this.AX.CE(Ad,1);var LW=this.AX.Ja(Ad,13);var AlH=this.AX.Ja(Ad,17);var AlP=this.
AX.H6(Ad,11);var Azn=this.AX.Hw(Ad,4);var AfS=A._GetAutoObject(A.Device.Helper).
Me(Azn,A._GetAutoObject(A.Device.Helper).Dr());this.Xx=A._GetAutoObject(A.Device.
Helper).AMp(LW,AlP,AlH);this.T(Mn.toFixed());if(AfS<100)this.GA.R((AfS.toFixed()+
CR)+A.aaR(A.acf.AL4));else this.GA.R(A._GetAutoObject(A.acj.KQ).AC9(Azn,A._GetAutoObject(
A.Device.Helper).Dr(),AIv));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Ms={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.GA={I:this
},0);this.__proto__=C.Nb;this.Ms.H(Ate);this.Background.H(AZd);this.V.H(O_);this.
AP.H(Aon);this.AP.L(A.jb.Bb);this.A_.H(Aoo);this.A_.L(A.jb.Bb);this.GA.H(AyH);this.
J(this.Ms,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.GA,0);this.GA.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ms._Done(
);this.AP._Done();this.A_._Done();this.GA._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Ms._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.GA._ReInit();this.GA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANg={Ajx:null,Of:null,AP:null,A_:null,Jx:null,AKw:0,A2_:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Of.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ajx.H(this.Of.M);this.A_.H([this.Of.M[2]-1,0,this.Of.M[2]+1,aSize[1]]);
this.Jx.H([this.Of.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this
,Ae);this.Jx.Dg(this.V.AQ);if(this.AKw>0){this.Ajx.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A2_));this.Of.L(A._GetAutoObject(A.acj.Assessment).XG(this.A2_));}else{
this.Ajx.L(this.Background.AQ);this.Of.L(this.V.AQ);}},Ci:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.CE(Ad,
1);this.AKw=this.AX.CE(Ad,5);this.A2_=this.AX.Ja(Ad,17);this.T(Mn.toFixed());if(
this.AKw>0)this.Of.R(A._GetAutoObject(A.Device.Converter).AkY(this.AKw));else this.
Of.R(Rr);var Xw=A._GetAutoObject(A.Device.Helper).ZX(6);A._GetAutoObject(A.Device.
Device).SX(Ad);var A1f=A._GetAutoObject(A.Device.Helper).Bjz(A._GetAutoObject(A.
Device.Device).Bt,9,ID,Xw,0);this.Jx.A_p(A1f.Get(3));this.Jx.A_r(A1f.Get(2));this.
Jx.A_q(A1f.Get(1));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.Of={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jx._Init.call(this.Jx={I:this},0);this.__proto__=C.ANg;this.Of.A4(0x12);this.
Of.R(Rp);this.Of.L(A.jb.Text);this.AP.H(Aon);this.AP.L(A.jb.Bb);this.A_.H(Aoo);this.
A_.L(A.jb.Bb);this.Jx.H(AZe);this.J(this.Ajx,0);this.J(this.Of,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jx,0);this.Of.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.Ajx._Done();this.Of._Done();this.AP.
_Done();this.A_._Done();this.Jx._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.Ajx._ReInit();this.Of._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jx._ReInit();this.Of.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jx={Afr:null,
ColoredCounterAttrSet:null,ACA:0,ACB:0,ACz:0,KW:0,Aj:function(Ae){var B;A.Core.P.
Aj.call(this,Ae);var AKp;var ALK;var AKV;var AlX=0;if(this.ACz>0){AKp=this.ACz.toFixed(
);AlX+=AKp.length;}else{AKp=AZf;AlX++;}if(this.ACB>0){ALK=this.ACB.toFixed();AlX+=
ALK.length;}else{ALK=AyI;AlX++;}if(this.ACA>0){AKV=this.ACA.toFixed();AlX+=AKV.length;
}else{AKV=AIj;AlX++;}if(AlX<=4)this.ColoredCounterAttrSet.Ahq(A.aaL(A.fl.Af));else
if(AlX<=5)this.ColoredCounterAttrSet.Ahq(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahq(A.aaL(A.fl.Bg));this.Afr.R(((((AZg+AKp)+AZh)+ALK)+AZi)+AKV);},A_q:function(E
){if(this.ACA===E)return;this.ACA=E;this.Am();},A_r:function(E){if(this.ACB===E)
return;this.ACB=E;this.Am();},A_p:function(E){if(this.ACz===E)return;this.ACz=E;
this.Am();},Dg:function(E){if(this.KW===E)return;this.KW=E;this.ColoredCounterAttrSet.
Ahn(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuU._Init.call(
this.Afr={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jx;this.H(AIw);this.Afr.A1(0x3F);this.Afr.H(AIw);this.
Afr.R(Rp);this.ColoredCounterAttrSet.BmF(A.jb.E1);this.ColoredCounterAttrSet.A_f(
A.jb.Ia);this.ColoredCounterAttrSet.A_e(A.jb.Gm);this.ColoredCounterAttrSet.Ahn(
A.jb.Text);this.KW=A.jb.Text;this.J(this.Afr,0);this.Afr.A9$(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahq(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A_b(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afr._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afr._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahq(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANf={AtK:null
,Ach:null,Aci:null,Acj:null,Jx:null,AP:null,A_:null,Eb:null,Lx:null,AcE:null,KX:
null,KY:null,AJC:0,AJB:0,AJA:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Ach.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcE.H(this.
Ach.M);this.A_.H([this.Ach.M[2]-1,0,this.Ach.M[2]+1,aSize[1]]);this.Aci.H([this.
Ach.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KX.H(this.Aci.M);this.Eb.H([this.
Aci.M[2]-1,0,this.Aci.M[2]+1,aSize[1]]);this.Acj.H([this.Aci.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KY.H(this.Acj.M);this.Lx.H([this.Acj.M[2]-1,0,this.Acj.
M[2]+1,aSize[1]]);this.Jx.H([this.Acj.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae
){C.A$.Aj.call(this,Ae);this.Jx.Dg(this.V.AQ);this.Ach.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJA));this.Aci.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJB));this.Acj.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJC));this.AcE.L(A._GetAutoObject(
A.acj.Assessment).XG(this.AJA));this.KX.L(A._GetAutoObject(A.acj.Assessment).XG(
this.AJB));this.KY.L(A._GetAutoObject(A.acj.Assessment).XG(this.AJC));this.AcE.Z(
!this.AJA);this.KX.Z(!this.AJB);this.KY.Z(!this.AJC);this.Jx.A_p(this.AtK.Get(3)
);this.Jx.A_r(this.AtK.Get(2));this.Jx.A_q(this.AtK.Get(1));},Ci:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.
CE(Ad,1);this.T(Mn.toFixed());A._GetAutoObject(A.Device.Device).SX(Ad);this.AJA=
A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).Bt,ID,0);
this.AJB=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).
Bt,ID,-1);this.AJC=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.
Device).Bt,ID,-2);this.AtK=A._GetAutoObject(A.Device.Helper).A7b(A._GetAutoObject(
A.Device.Device).Bt,ID,0,0);this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Ach={I:this},0);A.acg.AK._Init.call(this.Aci={I:
this},0);A.acg.AK._Init.call(this.Acj={I:this},0);C.Jx._Init.call(this.Jx={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Eb={I:this},0);A.acg.AK._Init.call(this.Lx={I:this
},0);A.acg.Text._Init.call(this.AcE={I:this},0);A.acg.Text._Init.call(this.KX={I:
this},0);A.acg.Text._Init.call(this.KY={I:this},0);this.__proto__=C.ANf;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Eb.L(A.jb.Bb);this.Lx.L(A.jb.Bb);this.AcE.R(Aoq
);this.KX.R(Aoq);this.KY.R(Aoq);this.J(this.Ach,0);this.J(this.Aci,0);this.J(this.
Acj,0);this.J(this.Jx,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Eb,0);this.
J(this.Lx,0);this.J(this.AcE,0);this.J(this.KX,0);this.J(this.KY,0);this.AcE.S(A.
aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.AtK=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Ach._Done();this.Aci._Done();this.Acj._Done();this.Jx._Done();this.AP.
_Done();this.A_._Done();this.Eb._Done();this.Lx._Done();this.AcE._Done();this.KX.
_Done();this.KY._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.Ach._ReInit();this.Aci._ReInit();this.Acj._ReInit();this.Jx._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Eb._ReInit();this.Lx._ReInit();this.AcE.
_ReInit();this.KX._ReInit();this.KY._ReInit();this.AcE.S(A.aaL(A.fl.Af));this.KX.
S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.AtK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ach).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmY={H_:null,XJ:false,Bl:function(aSize){var
B;this.H_.H([(aSize[0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H_.M[0]-10,40]);C.TM.Bl.call(this,aSize);},Aj:function(Ae){C.TM.Aj.call(
this,Ae);if(this.XJ)this.H_.Cx(1);else this.H_.Cx(0);},Kh:function(G){if(this.XJ
)C.TM.Kh.call(this,G);},Kc:function(G){if(this.XJ)C.TM.Kc.call(this,G);},Tx:function(
AH){C.TM.Tx.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.XJ=true;this.ZF(
true);}else{this.H(A.abI(this.M,40));this.XJ=false;this.ZF(false);}},_Init:function(
aArg){C.TM._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.AmY;this.V.A4(0x11);this.H_.H(AHU);this.H_.Cx(0);this.J(this.H_,0);this.V.Cm(A.
aaL(A.fl.Bg));this.H_.Ax(A.aaL(A.ach.AqO));},_Done:function(){this.__proto__=C.TM;
this.H_._Done();C.TM._Done.call(this);},_ReInit:function(){C.TM._ReInit.call(this
);this.H_._ReInit();this.V.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.TM._Mark.
call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGi={_Init:function(aArg){C.Axr._Init.call(this,aArg);this.__proto__=C.AGi;}
,_className:"Application::OptionsOverlaySeparator"};C.AkD={DM:A.jV,Bw:true,_Init:
function(aArg){C.Axr._Init.call(this,aArg);this.__proto__=C.AkD;},_className:"Application::OptionsOverlayNode"
};C.ZH={AR:null,_Init:function(aArg){C.AkD._Init.call(this,aArg);this.__proto__=
C.ZH;},_Mark:function(D){var B;C.AkD._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANM={Aj:function(Ae){C.O1.Aj.call(this,Ae);var FV=A.jb.CK;var GZ=A.jb.Text;if(
this.Hm){FV=A.jb.Text;GZ=A.jb.Bm;}this.Background.L(FV);this.V.L(GZ);},_Init:function(
aArg){C.O1._Init.call(this,aArg);this.__proto__=C.ANM;},_className:"Application::DarkThemeTextItem"
};C.O1={Background:null,BX:null,V:null,Aqv:0,Hm:false,Init:function(aArg){},Bl:function(
aSize){C.Hj.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BX.H(A.abK(this.BX.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Aj:function(
Ae){C.Hj.Aj.call(this,Ae);this.BX.L(this.Aqv);},T:function(E){if(this.DM===E)return;
this.DM=E;this.V.R(E);},Bh:function(E){if(this.Hm===E)return;this.Hm=E;this.Am();
},Anx:function(E){if(this.Aqv===E)return;this.Aqv=E;this.Am();},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BX._Init.call(this.BX={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.O1;this.H(BD);this.Background.H(AIx);this.BX.H(BD);this.BX.Nu(2);this.BX.L(A.jb.
Ri);this.V.H(AZj);this.Aqv=A.jb.Ri;this.J(this.Background,0);this.J(this.BX,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.
fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);this.BX._Done();this.V._Done();C.Hj._Done.call(this);},_ReInit:function(){C.Hj.
_ReInit.call(this);this.Background._ReInit();this.BX._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APN={Es:null,IU:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=C.APN;this.H(
Oi);this.Background.H(Oi);this.Es.H(AIy);this.Es.R(A.aaR(A.acf.GO));this.Es.A4(0x11
);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIz);this.IU.Ho(5);this.IU.A4(
0x14);this.IU.R(A.aaR(A.acf.AG1));this.IU.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.IU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(
A.aaR(A.acf.GO));this.IU.R(A.aaR(A.acf.AG1));this.Es.S(A.aaL(A.fl.Af));this.IU.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DT={Su:null,Sv:null,AeE:null,Ag5:null,QN:null
,KW:0,LastTemperature:0,AqB:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);switch(this.AnimalType){case 1:{this.
Su.Ax(A.aaL(A.ach.AvH));this.Sv.Ax(A.aaL(A.ach.AvH));}break;case 2:{this.Su.Ax(A.
aaL(A.ach.AvK));this.Sv.Ax(A.aaL(A.ach.AvK));}break;default:{this.Su.Ax(A.aaL(A.
ach.Aez));this.Sv.Ax(A.aaL(A.ach.Aez));}}this.Su.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqB));var ApL;if(this.IsWatch)ApL=A.aaL(A.ach.AQR);else if(this.IsFever
){ApL=A.aaL(A.ach.AQQ);switch(A._GetAutoObject(A.Device.Converter).Ajk(this.LastTemperature
,this.AnimalType)){case 3:this.QN.L(A.jb.Gm);break;case 2:this.QN.L(A.jb.Ia);break;
case 1:this.QN.L(A.jb.E1);break;case 0:this.QN.L(A.jb.Afv);break;default:;}}else
if(this.IsAlarm){ApL=A.aaL(A.ach.AQP);if(!this.AqB||(this.AqB===5))this.QN.L(A.jb.
Gm);else this.QN.L(0xFF000000);}else ApL=null;this.AeE.Ax(ApL);this.Ag5.Ax(ApL);
this.QN.Ax(ApL);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqB)===A.jb.E1)this.
Sv.L(this.KW);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFi:function(E){if(this.AqB===E)return;this.AqB=E;this.Am();},Dg:function(
E){if(this.KW===E)return;this.KW=E;this.Am();},Ae6:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uw:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae2:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae8:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},FD:function(){this.EC(0);this.AFi(0);this.Ae2(false);this.Uw(false
);this.Ae6(false);this.Ae8(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Su={I:this},0);A.acg.Ap._Init.call(
this.Sv={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.Ag5={I:this},0);A.acg.Ap._Init.call(this.QN={I:this},0);this.__proto__=C.DT;
this.H(Alh);this.Su.A1(0x3F);this.Su.H(Alh);this.Su.L(A.jb.CK);this.Su.A4(0x12);
this.Su.Cx(0);this.Sv.A1(0x3F);this.Sv.H(Alh);this.Sv.L(0xFF000000);this.Sv.A4(0x12
);this.Sv.Cx(1);this.AeE.A1(0x3F);this.AeE.H(Alh);this.AeE.L(0xFF000000);this.AeE.
Cx(0);this.Ag5.A1(0x3F);this.Ag5.H(Alh);this.Ag5.Cx(1);this.QN.A1(0x3F);this.QN.
H(Alh);this.QN.L(A.jb.CV);this.QN.Cx(2);this.KW=A.jb.Text;this.J(this.Su,0);this.
J(this.Sv,0);this.J(this.AeE,0);this.J(this.Ag5,0);this.J(this.QN,0);this.Su.Ax(
A.aaL(A.ach.Aez));this.Sv.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=
A.Core.P;this.Su._Done();this.Sv._Done();this.AeE._Done();this.Ag5._Done();this.
QN._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Su._ReInit();this.Sv._ReInit();this.AeE._ReInit();this.Ag5._ReInit();
this.QN._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANc={Ci:function(Ad){C.Ajz.Ci.call(this,Ad);if(!!this.AX){var BAF=this.AX.H6(
Ad,12);var ByR=this.AX.Sq(Ad,15);this.Abm.R(A._GetAutoObject(A.Device.Helper).Me(
ByR,A._GetAutoObject(A.Device.Helper).Dr()).toFixed());this.Sw.Z(BAF);this.Am();
}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=C.ANc;},_className:
"Application::CalfListAlarmItem"};C.ADA={D1:null,MD:null,_Init:function(aArg){C.
T2._Init.call(this,aArg);A.acg.Text._Init.call(this.D1={I:this},0);A.acg.Ap._Init.
call(this.MD={I:this},0);this.__proto__=C.ADA;this.D1.H(Aop);this.D1.Lu(true);this.
D1.R(A.aaR(A.acf.A6r));this.D1.L(A.jb.Text);this.MD.H(AZk);this.MD.Je(false);this.
MD.L(A.jb.Text);this.MD.A4(0x12);this.J(this.D1,-2);this.J(this.MD,0);this.D1.S(
A.aaL(A.fl.Ak));this.MD.Ax(A.aaL(A.ach.ADZ));},_Done:function(){this.__proto__=C.
T2;this.D1._Done();this.MD._Done();C.T2._Done.call(this);},_ReInit:function(){C.
T2._ReInit.call(this);this.D1._ReInit();this.MD._ReInit();this.D1.R(A.aaR(A.acf.
A6r));this.D1.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T2._Mark.call(this,D
);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Ko={Background:null,BX:
null,AC1:0,ACe:0,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Background.L(this.
AC1);this.BX.L(this.ACe);},AwM:function(E){if(this.AC1===E)return;this.AC1=E;this.
Am();},AFb:function(E){if(this.ACe===E)return;this.ACe=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BX={I:this},0);this.__proto__=C.Ko;this.H(Aor);this.
Background.A1(0x3C);this.Background.H(Aor);this.Background.Cx(1);this.BX.A1(0x3C
);this.BX.H(Aor);this.AC1=A.jb.E1;this.ACe=A.jb.Text;this.J(this.Background,0);this.
J(this.BX,0);this.Background.Ax(A.aaL(A.ach.Ko));this.BX.Ax(A.aaL(A.ach.Ko));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BX._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BX._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmG={Q:null,Pt:
null,A7S:false,Bl:function(aSize){C.My.Bl.call(this,aSize);this.V.H([].concat(this.
Pt.M[2]-this.V.Text.Jh,this.V.M.slice(1,4)));},Aj:function(Ae){C.My.Aj.call(this
,Ae);this.Pt.L(this.V.AQ);},AwR:function(E){if(this.A7S===E)return;this.A7S=E;if(
E)this.Pt.R(AZl);else this.Pt.R(AIA);},Hg:function(G){var F;if(!!this.Q)this.AwR((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)
A.pe([this,this.Hg],this);},_Init:function(aArg){C.My._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pt={I:this},0);this.__proto__=C.AmG;this.Pt.A1(0x34);this.Pt.
H(Xk);this.Pt.R(AIA);this.J(this.Pt,0);this.Pt.S(A.aaL(A.fl.AOG));},_Done:function(
){this.__proto__=C.My;this.Pt._Done();C.My._Done.call(this);},_ReInit:function(){
C.My._ReInit.call(this);this.Pt._ReInit();},_Mark:function(D){var B;C.My._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pt)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO5={DY:function(G){C.Ku.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).AdZ(4));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.AO5;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dv:function(){return 3;},C8:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BT(aIndex);},D0:function(A9){return A9;},H7:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APO={Gq:null,Lo:null,Y0:null,Init:function(aArg){this.Lo.R(A._GetAutoObject(
A.acj.Temperature).AlM());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gq={I:this},0);A.acg.Text._Init.call(this.Lo={I:this},0);A.
acg.Text._Init.call(this.Y0={I:this},0);this.__proto__=C.APO;this.Background.L(A.
jb.Text);this.Gq.H(AIB);this.Gq.A4(0x11);this.Gq.R(A.aaR(A.acf.Date));this.Gq.L(
A.jb.Bm);this.Lo.H(AZm);this.Lo.A4(0x12);this.Lo.L(A.jb.Bm);this.Y0.H(AZn);this.
Y0.A4(0x12);this.Y0.R(A.aaR(A.acf.Bq));this.Y0.L(A.jb.Bm);this.J(this.Gq,0);this.
J(this.Lo,0);this.J(this.Y0,0);this.Gq.S(A.aaL(A.fl.Af));this.Lo.S(A.aaL(A.fl.Af
));this.Y0.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gq._Done();this.Lo._Done();this.Y0._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gq._ReInit();this.Lo._ReInit();this.Y0._ReInit(
);this.Gq.R(A.aaR(A.acf.Date));this.Y0.R(A.aaR(A.acf.Bq));this.Gq.S(A.aaL(A.fl.Af
));this.Lo.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TG={Li:null,AjN:false,Init:function(
aArg){var B;A.zX([this,this.Bca],[B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIV
],0);this.AGU(this);A.pe([this,this.Aow],this);},DG:function(G){var D6=(A.Core.BF.
isPrototypeOf(G)?G:null);switch(D6.CO){case 6:this.Ov(this);break;case 7:this.M6(
this);break;default:D6.Mx=true;}},CC:function(G){var B;if(!!this.Li)this.Li.CC(this
);C.AB.CC.call(this,G);},E3:function(G){var B;if(!!this.Li)this.Li.E3(this);C.AB.
E3.call(this,G);},Ano:function(G){A._GetAutoObject(C.A5).Fz();},AGU:function(G){
var B;if(!!this.Li){this.Li.E3(this);this.HQ(this.Li);}if(this.AjN)switch(A._GetAutoObject(
A.Device.Device).D_){case 0:this.Li=A._NewObject(C.AMw,0);break;case 1:this.Li=A.
_NewObject(C.AMx,0);break;case 3:this.Li=A._NewObject(C.AMv,0);break;case 2:this.
Li=A._NewObject(C.AMy,0);break;default:throw new Error(AIC);}else switch(A._GetAutoObject(
A.Device.Device).D_){case 0:this.Li=A._NewObject(C.AMz,0);break;case 1:this.Li=A.
_NewObject(C.AMI,0);break;case 3:this.Li=A._NewObject(C.AMC,0);break;case 2:this.
Li=A._NewObject(C.AMN,0);break;default:throw new Error(AIC);}this.HR(this);this.
J(this.Li,0);this.Li.H(Fc);this.Li.ZC([this,this.A03]);this.Li.CC(this);this.Ba(
this.Li);},Bca:function(s){this.AGU(s);},Box:function(G){A._GetAutoObject(A.Device.
Device).AeW(0);},AT8:function(G){A._GetAutoObject(A.Device.Device).AeW(1);},AT7:
function(G){A._GetAutoObject(A.Device.Device).AeW(3);},AT9:function(G){A._GetAutoObject(
A.Device.Device).AeW(2);},HR:function(G){this.N.C3(A.aaL(A.ach.E2));this.N.Hz(A.
jV);this.N.CF=[this,this.Ano];this.N.AFo(A.aaL(A.fl.Ak));},Aow:function(s){this.
HR(s);},Bnh:function(E){if(this.AjN===E)return;this.AjN=E;A.pe([this,this.Bca],this
);},A$q:function(G){this.Bnh(!this.AjN);},BoA:function(G){A._GetAutoObject(A.Device.
Device).AZ(31,true,A.jV,0,null);},M6:function(G){},BHg:function(s){this.M6(s);},
Ov:function(G){},BHf:function(s){this.Ov(s);},BfA:function(G){var FT=A._GetAutoObject(
A.Device.Device).D_;FT=FT+1;if(FT>=4)FT=0;A._GetAutoObject(A.Device.Device).AeW(
FT);},BBz:function(G){var FT=A._GetAutoObject(A.Device.Device).D_;FT=FT-1;if(FT<
0)FT=3;A._GetAutoObject(A.Device.Device).AeW(FT);},Af$:function(G){},A03:function(
s){this.Af$(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TG;this.Background.H(Cg);this.N.Z(true);this.N.OU(true);this.N.OV(true);this.Ds(
C.APD);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Li)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D_={AR:null,AttrSet:null,Do:null,CC:function(G){},AIU:function(s){this.CC(s);
},E3:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyT:function(s){
this.E3(s);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BG=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=
C.D_;this.H(U3);this.AttrSet.A_f(A.jb.Gm);this.AttrSet.A_e(A.jb.Ia);this.AttrSet.
Ahn(A.jb.Text);this.Do.Filter=1;this.AttrSet.Ahq(A.aaL(A.fl.Ak));this.AttrSet.A_b(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Ahq(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMz={RZ:
null,Aa5:null,TF:null,TE:null,R3:null,QD:null,R4:null,R1:null,R2:null,R0:null,CP:
function(){var B;this.RZ.Ci(this);this.Aa5.Ci(this);this.TF.Ci(this);this.TE.Ci(
this);this.R3.Ci(this);this.QD.Ci(this);this.R4.Ci(this);this.R1.Ci(this);this.R2.
Ci(this);this.R0.Ci(this);},GI:function(G){C.R5.GI.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RZ.Z(true);this.Aa5.Z(false);
this.R1.Z(false);this.R2.Z(false);this.R0.Z(false);this.R3.Z(true);this.QD.Z(true
);this.R4.Z(true);}break;case 1:{this.RZ.Z(false);this.Aa5.Z(true);this.R1.Z(true
);this.R2.Z(true);this.R0.Z(true);this.R3.Z(false);this.QD.Z(false);this.R4.Z(false
);}break;default:A.ab5("%s%e",Alc,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.M0],this);},_Init:function(aArg){C.R5._Init.call(this,aArg);C.
RZ._Init.call(this.RZ={I:this},0);C.AMu._Init.call(this.Aa5={I:this},0);C.TF._Init.
call(this.TF={I:this},0);C.TE._Init.call(this.TE={I:this},0);C.R3._Init.call(this.
R3={I:this},0);C.QD._Init.call(this.QD={I:this},0);C.R4._Init.call(this.R4={I:this
},0);C.R1._Init.call(this.R1={I:this},0);C.R2._Init.call(this.R2={I:this},0);C.R0.
_Init.call(this.R0={I:this},0);this.__proto__=C.AMz;this.RZ.H(BD);this.RZ.Ai(true
);this.RZ.Bh(false);this.Aa5.H(I1);this.Aa5.Ai(true);this.Aa5.Bh(false);this.TF.
H(Qc);this.TF.Ai(true);this.TF.Bh(true);this.TE.H(Aan);this.TE.Ai(true);this.TE.
Bh(false);this.R3.H(Alf);this.R3.Ai(true);this.R3.Bh(true);this.QD.H(Aok);this.QD.
Ai(true);this.QD.Bh(false);this.R4.H(As$);this.R4.Ai(true);this.R4.Bh(true);this.
R1.H(U4);this.R1.Ai(true);this.R1.Bh(true);this.R2.H(AZo);this.R2.Ai(true);this.
R2.Bh(false);this.R0.H(AZp);this.R0.Ai(true);this.R0.Bh(true);this.J(this.RZ,0);
this.J(this.Aa5,0);this.J(this.TF,0);this.J(this.TE,0);this.J(this.R3,0);this.J(
this.QD,0);this.J(this.R4,0);this.J(this.R1,0);this.J(this.R2,0);this.J(this.R0,
0);},_Done:function(){this.__proto__=C.R5;this.RZ._Done();this.Aa5._Done();this.
TF._Done();this.TE._Done();this.R3._Done();this.QD._Done();this.R4._Done();this.
R1._Done();this.R2._Done();this.R0._Done();C.R5._Done.call(this);},_ReInit:function(
){C.R5._ReInit.call(this);this.RZ._ReInit();this.Aa5._ReInit();this.TF._ReInit();
this.TE._ReInit();this.R3._ReInit();this.QD._ReInit();this.R4._ReInit();this.R1.
_ReInit();this.R2._ReInit();this.R0._ReInit();this.CP();},_Mark:function(D){var B;
C.R5._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMN={AkQ:function(L9){if(!L9)return;var Fw=A._NewObject(
A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CY(HY);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fw.CY(Ac_);L9.Bk(Fw);
},AEc:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var RQ=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(RQ<2)return false;var BC0=A._GetAutoObject(
A.Device.Device).Bt.Hw(0,6);var BC1=A._GetAutoObject(A.Device.Device).Bt.Hw(RQ-1
,6);var A2z=A._NewObject(A.Core.Bq,0);A2z.Initialize(BC0);var A4F=A._NewObject(A.
Core.Bq,0);A4F.Initialize(BC1);if((A2z.Ab5()!==A4F.Ab5())||(A2z.Year!==A4F.Year)
)return true;else return false;},_Init:function(aArg){C.Aa7._Init.call(this,aArg
);this.__proto__=C.AMN;this.ATx(C.AHt);this.ATy(C.ADG);this.ATn(C.QD);this.ArS(A.
aaR(A.acf.AV7));this.Dl(A.aaR(A.acf.Aki));},_ReInit:function(){C.Aa7._ReInit.call(
this);this.ArS(A.aaR(A.acf.AV7));this.Dl(A.aaR(A.acf.Aki));},_className:"Application::AnimalWeights"
};C.AMI={AkQ:function(L9){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CY(HY);var ABs=A._NewObject(A.Device.Int32FilterCriterion
,0);ABs.Initialize(7,2,0,true);Fw.CY(ABs);L9.Bk(Fw);},AEc:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.Aa7._Init.call(this,aArg);this.
__proto__=C.AMI;this.ATx(C.AVr);this.ATy(C.APO);this.ATn(C.TF);this.ArS(A.aaR(A.
acf.A8e));this.Dl(A.aaR(A.acf.Arv));},_ReInit:function(){C.Aa7._ReInit.call(this
);this.ArS(A.aaR(A.acf.A8e));this.Dl(A.aaR(A.acf.Arv));},_className:"Application::AnimalTemperatures"
};C.AUw={VK:null,VL:null,X6:null,AgG:null,KD:null,AP:null,A_:null,Eb:null,Lx:null
,AnT:null,KX:null,KY:null,ZU:null,ZV:null,Init:function(aArg){},Bl:function(aSize
){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KD.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VK.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Eb.H([this.
VK.M[2]-1,0,this.VK.M[2]+1,aSize[1]]);this.VL.H([this.VK.M[2],0,this.VK.M[2]+22,
aSize[1]]);this.Lx.H([this.VL.M[2]-1,0,this.VL.M[2]+1,aSize[1]]);this.X6.H([this.
VL.M[2],0,this.VL.M[2]+22,aSize[1]]);this.AnT.H([this.X6.M[2]-1,0,this.X6.M[2]+1
,aSize[1]]);this.AgG.H([this.X6.M[2],0,aSize[0],aSize[1]]);this.KX.H(this.VK.M);
this.KY.H(this.VL.M);this.ZU.H(this.X6.M);this.ZV.H(this.AgG.M);},Aj:function(Ae
){C.A$.Aj.call(this,Ae);this.KD.L(this.V.AQ);},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hw(Ad,6);var A1P=this.AX.Ja(Ad,3);var A2v=
this.AX.Ja(Ad,2);var A2u=this.AX.Ja(Ad,5);var A4t=this.AX.Ja(Ad,4);this.T(A._GetAutoObject(
A.acj.KQ).AC8(AlD));this.KD.R(A._GetAutoObject(A.acj.KQ).A67(AlD));this.VK.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1P));this.VL.L(A._GetAutoObject(A.acj.Assessment).Qr(A2v));
this.X6.L(A._GetAutoObject(A.acj.Assessment).Qr(A2u));this.AgG.L(A._GetAutoObject(
A.acj.Assessment).Qr(A4t));this.KX.L(A._GetAutoObject(A.acj.Assessment).XG(A1P));
this.KY.L(A._GetAutoObject(A.acj.Assessment).XG(A2v));this.ZU.L(A._GetAutoObject(
A.acj.Assessment).XG(A2u));this.ZV.L(A._GetAutoObject(A.acj.Assessment).XG(A4t));
this.KX.Z(A1P===5);this.KY.Z(A2v===5);this.ZU.Z(A2u===5);this.ZV.Z(A4t===5);this.
Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.
VK={I:this},0);A.acg.AK._Init.call(this.VL={I:this},0);A.acg.AK._Init.call(this.
X6={I:this},0);A.acg.AK._Init.call(this.AgG={I:this},0);A.acg.Text._Init.call(this.
KD={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Eb={I:this},0);A.acg.AK._Init.call(this.
Lx={I:this},0);A.acg.AK._Init.call(this.AnT={I:this},0);A.acg.Text._Init.call(this.
KX={I:this},0);A.acg.Text._Init.call(this.KY={I:this},0);A.acg.Text._Init.call(this.
ZU={I:this},0);A.acg.Text._Init.call(this.ZV={I:this},0);this.__proto__=C.AUw;this.
V.H(O_);this.VK.H(AZq);this.VL.H(AZr);this.X6.H(AZs);this.AgG.H(AZt);this.KD.R(Rp
);this.KD.L(A.jb.Text);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Eb.L(A.jb.Bb);
this.Lx.L(A.jb.Bb);this.AnT.L(A.jb.Bb);this.KX.H(AZu);this.KX.R(Rr);this.KY.H(AZv
);this.KY.R(Rr);this.ZU.H(AZw);this.ZU.R(Rr);this.ZV.H(AZx);this.ZV.R(Rr);this.J(
this.VK,0);this.J(this.VL,0);this.J(this.X6,0);this.J(this.AgG,0);this.J(this.KD
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Eb,0);this.J(this.Lx,0);this.
J(this.AnT,0);this.J(this.KX,0);this.J(this.KY,0);this.J(this.ZU,0);this.J(this.
ZV,0);this.KD.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af
));this.ZU.S(A.aaL(A.fl.Af));this.ZV.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.VK._Done();this.VL._Done();this.X6._Done();this.AgG._Done(
);this.KD._Done();this.AP._Done();this.A_._Done();this.Eb._Done();this.Lx._Done(
);this.AnT._Done();this.KX._Done();this.KY._Done();this.ZU._Done();this.ZV._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.VK._ReInit(
);this.VL._ReInit();this.X6._ReInit();this.AgG._ReInit();this.KD._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Eb._ReInit();this.Lx._ReInit();this.AnT._ReInit(
);this.KX._ReInit();this.KY._ReInit();this.ZU._ReInit();this.ZV._ReInit();this.KD.
S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.ZU.S(
A.aaL(A.fl.Af));this.ZV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.VK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APM={Gq:null,Y6:null,Y2:null,Y3:null,Y4:null,Y5:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gq={I:this},0);A.acg.Text._Init.call(this.Y6={I:this},0);A.acg.Text._Init.call(this.
Y2={I:this},0);A.acg.Text._Init.call(this.Y3={I:this},0);A.acg.Text._Init.call(this.
Y4={I:this},0);A.acg.Text._Init.call(this.Y5={I:this},0);this.__proto__=C.APM;this.
Background.L(A.jb.Text);this.Gq.H(AIB);this.Gq.A4(0x11);this.Gq.R(A.aaR(A.acf.Date
));this.Gq.L(A.jb.Bm);this.Y6.H(AIt);this.Y6.A4(0x12);this.Y6.R(A.aaR(A.acf.Bq));
this.Y6.L(A.jb.Bm);this.Y2.H(AZy);this.Y2.A4(0x12);this.Y2.R(A.aaR(A.acf.AUy));this.
Y2.L(A.jb.Bm);this.Y3.H(AZz);this.Y3.A4(0x12);this.Y3.R(A.aaR(A.acf.AUz));this.Y3.
L(A.jb.Bm);this.Y4.H(AZA);this.Y4.A4(0x12);this.Y4.R(A.aaR(A.acf.AOC));this.Y4.L(
A.jb.Bm);this.Y5.H(AZB);this.Y5.A4(0x12);this.Y5.R(A.aaR(A.acf.ANC));this.Y5.L(A.
jb.Bm);this.J(this.Gq,0);this.J(this.Y6,0);this.J(this.Y2,0);this.J(this.Y3,0);this.
J(this.Y4,0);this.J(this.Y5,0);this.Gq.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af
));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(A.fl.Af));
this.Y5.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gq._Done();
this.Y6._Done();this.Y2._Done();this.Y3._Done();this.Y4._Done();this.Y5._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gq._ReInit(
);this.Y6._ReInit();this.Y2._ReInit();this.Y3._ReInit();this.Y4._ReInit();this.Y5.
_ReInit();this.Gq.R(A.aaR(A.acf.Date));this.Y6.R(A.aaR(A.acf.Bq));this.Y2.R(A.aaR(
A.acf.AUy));this.Y3.R(A.aaR(A.acf.AUz));this.Y4.R(A.aaR(A.acf.AOC));this.Y5.R(A.
aaR(A.acf.ANC));this.Gq.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af));this.Y2.S(A.
aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMC={AkQ:function(L9){if(!L9)return;
var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CY(HY);var
AA$=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA$.Initialize(3,5,0,true
);Fw.CY(AA$);L9.Bk(Fw);},AEc:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.Aa7._Init.call(this,aArg);this.__proto__=C.AMC;this.ATx(C.AUw);this.ATy(
C.APM);this.ATn(C.TE);this.ArS(A.aaR(A.acf.Axw));this.Dl(A.aaR(A.acf.Anm));},_ReInit:
function(){C.Aa7._ReInit.call(this);this.ArS(A.aaR(A.acf.Axw));this.Dl(A.aaR(A.acf.
Anm));},_className:"Application::AnimalRatings"};C.IK={B8:null,Y:null,V:null,UA:
5,T:function(E){C.I9.T.call(this,E);this.V.R(E);},Dg:function(E){C.I9.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B8===E)return;this.B8=E;this.V.S(this.B8
);},AuX:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0]))this.S(A.aaL(A.fl.HK));},Ky:function(
E){if(this.UA===E)return;this.UA=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AA5:function(G){A.pe([this,this.AuX],this);},_Init:function(aArg){C.I9._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IK;this.Y.A1(0x3F);this.Y.H(AID);this.Y.A_9(5);this.
Y.J0(3);this.V.A1(0x34);this.V.H(Xo);this.V.Je(true);this.V.A4(0x11);this.V.L(A.
jb.Text);this.V.Ai(true);this.J(this.Y,0);this.J(this.V,0);this.Y.En=[this,this.
AA5];this.V.S(A.aaL(A.fl.Ks));},_Done:function(){this.__proto__=C.I9;this.Y._Done(
);this.V._Done();C.I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Ks));},_Mark:function(D){
var B;C.I9._Mark.call(this,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RZ={AfS:0,Aj:function(Ae){C.Fy.
Aj.call(this,Ae);this.T(A.aaR(A.acf.RU));if(this.AfS>=0)this.KA((this.AfS.toFixed(
)+CR)+A.aaR(A.acf.Kp));else this.KA(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fy.
Ci.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfS=-1;
else this.AfS=A._GetAutoObject(A.Device.Helper).W.RU();this.Am();},_Init:function(
aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemAge"
};C.R3={A4$:0,Aj:function(Ae){C.Fy.Aj.call(this,Ae);this.T(A.aaR(A.acf.Afw));if(
this.A4$>0)this.KA((A._GetAutoObject(A.Device.Converter).Ak6(this.A4$)+CR)+A._GetAutoObject(
A.acj.DV).Af5());else this.KA(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fy.Ci.call(
this,G);this.A4$=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.R3;},_className:
"Application::AnimalInfoItemWeight"};C.TF={Y:null,Ej:null,Ey:null,Fb:null,P0:null
,Fa:null,P1:null,Ajf:0,Pl:0,CP:function(){this.Am();},Aj:function(Ae){C.JR.Aj.call(
this,Ae);this.T(A.aaR(A.acf.BiA));this.Fb.R(this.Ajf.toFixed());this.Fa.R(this.Pl.
toFixed());if(!!this.Ajf||!!this.Pl)this.P1.R(AZC+(this.Ajf+this.Pl).toFixed());
else this.P1.R(A.aaR(A.acf.ASt));},Ci:function(G){C.JR.Ci.call(this,G);var AkX;AkX=
A._GetAutoObject(A.Device.Helper).BjA(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajf=AkX.Get(2);this.Pl=AkX.Get(1);this.Am();},Dg:
function(E){C.JR.Dg.call(this,E);this.P0.L(E);this.P1.L(E);},AsR:function(G){if(
!!this.Ajf||!!this.Pl){this.Fb.Z(true);this.P0.Z(true);this.Fa.Z(true);}else{this.
Fb.Z(false);this.P0.Z(false);this.Fa.Z(false);}this.Ej.H(this.Fb.M);this.Ej.Z(this.
Fb.Fo());this.Ey.H(this.Fa.M);this.Ey.Z(this.Fa.Fo());},AuX:function(G){var B;var
NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;if(((B=NK.Dd(0x1))[2]-B[0])>((
B=NK.M)[2]-B[0])){this.Fa.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fb.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AA5:function(G){A.pe([this,this.AuX
],this);},_Init:function(aArg){C.JR._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Ej={I:this},0);A.acg.AK._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fb={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fa={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TF;this.Y.H(Atf);this.Y.Bof(0);this.Y.J0(3);this.
Ej.H(AZD);this.Ej.L(A.jb.Ia);this.Ey.H(AyH);this.Ey.L(A.jb.Gm);this.Fb.A1(0x34);
this.Fb.H(Xo);this.Fb.Ho(2);this.Fb.Je(true);this.Fb.R(U6);this.Fb.L(A.jb.Text);
this.Fb.Ai(true);this.P0.A1(0x34);this.P0.H(Xo);this.P0.Je(true);this.P0.R(AIk);
this.P0.L(A.jb.Text);this.P0.Ai(true);this.Fa.A1(0x34);this.Fa.H(Xo);this.Fa.Ho(
2);this.Fa.Je(true);this.Fa.R(U6);this.Fa.L(A.jb.Bm);this.Fa.Ai(true);this.P1.A1(
0x34);this.P1.H(Xo);this.P1.Je(true);this.P1.R(Rp);this.P1.L(A.jb.Text);this.P1.
Ai(true);this.J(this.Y,0);this.J(this.Ej,0);this.J(this.Ey,0);this.J(this.Fb,0);
this.J(this.P0,0);this.J(this.Fa,0);this.J(this.P1,0);this.Y.En=[this,this.AA5];
this.Fb.Q7([this,this.AsR]);this.Fb.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fa.Q7([this,this.AsR]);this.Fa.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JR;this.Y._Done();this.Ej._Done();this.Ey._Done(
);this.Fb._Done();this.P0._Done();this.Fa._Done();this.P1._Done();C.JR._Done.call(
this);},_ReInit:function(){C.JR._ReInit.call(this);this.Y._ReInit();this.Ej._ReInit(
);this.Ey._ReInit();this.Fb._ReInit();this.P0._ReInit();this.Fa._ReInit();this.P1.
_ReInit();this.Fb.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fa.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JR._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ej)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QD={FZ:0,Ig:0
,A2Z:false,Aj:function(Ae){C.Fy.Aj.call(this,Ae);this.T(AZE+A.aaR(A.acf.AHo));if(
this.A2Z){this.KA((A._GetAutoObject(A.Device.Converter).Tf(this.FZ,2,true)+CR)+A.
_GetAutoObject(A.acj.DV).AaC());this.Background.L(A._GetAutoObject(A.acj.DV).Az1(
this.FZ,this.Ig));this.Dg(A._GetAutoObject(A.acj.DV).Az3(this.FZ,this.Ig));}else{
this.KA(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.Dg(A.jb.Text);}},Ci:
function(G){C.Fy.Ci.call(this,G);var LK=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LK){this.A2Z=true;this.FZ=A._GetAutoObject(A.acj.DV).AlA(LK,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2Z=false;this.FZ=0;}this.Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.QD;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TE={Y:null,F0:null,Ej:
null,Ey:null,MQ:null,Fb:null,Fa:null,O3:null,AaD:0,Ajf:0,Pl:0,CP:function(){this.
Am();},Aj:function(Ae){C.JR.Aj.call(this,Ae);this.T(A.aaR(A.acf.Axw));this.MQ.R(
this.AaD.toFixed());this.Fb.R(this.Ajf.toFixed());this.Fa.R(this.Pl.toFixed());}
,Ci:function(G){C.JR.Ci.call(this,G);var AkX;AkX=A._GetAutoObject(A.Device.Helper
).A7b(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaD=AkX.Get(3);this.Ajf=AkX.Get(2);this.Pl=AkX.Get(1);this.Am();},AsR:
function(G){if((!!this.AaD||!!this.Ajf)||!!this.Pl){this.MQ.Z(true);this.Fb.Z(true
);this.Fa.Z(true);this.O3.Z(false);}else{this.MQ.Z(false);this.Fb.Z(false);this.
Fa.Z(false);this.O3.Z(true);}this.F0.H(this.MQ.M);this.F0.Z(this.MQ.Fo());this.Ej.
H(this.Fb.M);this.Ej.Z(this.Fb.Fo());this.Ey.H(this.Fa.M);this.Ey.Z(this.Fa.Fo()
);},AuX:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0])){this.Fa.S(A.aaL(A.fl.Ak));this.Fb.
S(A.aaL(A.fl.Ak));this.MQ.S(A.aaL(A.fl.Ak));}},AA5:function(G){A.pe([this,this.AuX
],this);},_Init:function(aArg){C.JR._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.F0={I:this},0);A.acg.AK._Init.call(this.Ej={
I:this},0);A.acg.AK._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MQ={
I:this},0);A.acg.Text._Init.call(this.Fb={I:this},0);A.acg.Text._Init.call(this.
Fa={I:this},0);A.acg.Text._Init.call(this.O3={I:this},0);this.__proto__=C.TE;this.
Y.A1(0x3F);this.Y.H(Atf);this.Y.A_9(5);this.Y.J0(3);this.F0.H(AZF);this.F0.L(A.jb.
E1);this.Ej.H(AZG);this.Ej.L(A.jb.Ia);this.Ey.H(AZH);this.Ey.L(A.jb.Gm);this.MQ.
A1(0x3C);this.MQ.H(Xo);this.MQ.Ho(2);this.MQ.Je(true);this.MQ.R(U6);this.MQ.L(A.
jb.Text);this.MQ.Ai(true);this.Fb.A1(0x3C);this.Fb.H(Xo);this.Fb.Ho(2);this.Fb.Je(
true);this.Fb.R(U6);this.Fb.L(A.jb.Text);this.Fb.Ai(true);this.Fa.A1(0x3C);this.
Fa.H(Xo);this.Fa.Ho(2);this.Fa.Je(true);this.Fa.R(U6);this.Fa.L(A.jb.Bm);this.Fa.
Ai(true);this.O3.A1(0x34);this.O3.H(Xo);this.O3.Je(true);this.O3.A4(0x11);this.O3.
R(A.aaR(A.acf.ASt));this.O3.L(A.jb.Text);this.O3.Ai(true);this.O3.Z(false);this.
J(this.Y,0);this.J(this.F0,0);this.J(this.Ej,0);this.J(this.Ey,0);this.J(this.MQ
,0);this.J(this.Fb,0);this.J(this.Fa,0);this.J(this.O3,0);this.Y.En=[this,this.AA5
];this.MQ.Q7([this,this.AsR]);this.MQ.S(A.aaL(A.fl.Af));this.Fb.Q7([this,this.AsR
]);this.Fb.S(A.aaL(A.fl.Af));this.Fa.Q7([this,this.AsR]);this.Fa.S(A.aaL(A.fl.Af
));this.O3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JR;this.Y._Done(
);this.F0._Done();this.Ej._Done();this.Ey._Done();this.MQ._Done();this.Fb._Done(
);this.Fa._Done();this.O3._Done();C.JR._Done.call(this);},_ReInit:function(){C.JR.
_ReInit.call(this);this.Y._ReInit();this.F0._ReInit();this.Ej._ReInit();this.Ey.
_ReInit();this.MQ._ReInit();this.Fb._ReInit();this.Fa._ReInit();this.O3._ReInit(
);this.O3.R(A.aaR(A.acf.ASt));this.MQ.S(A.aaL(A.fl.Af));this.Fb.S(A.aaL(A.fl.Af)
);this.Fa.S(A.aaL(A.fl.Af));this.O3.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JR._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ej)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMk={_Init:function(aArg){C.Aqd._Init.call(
this,aArg);this.__proto__=C.AMk;this.A5k=1;this.Rk.Cm(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqd._ReInit.call(this);this.Rk.Cm(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARf={OP:null,IV:null,H9:null,IT:null,Gx:null,Al2:function(G){A.pe([this,this.
BA6],this);},BA6:function(G){A._GetAutoObject(C.A5).Cd(3);},_Init:function(aArg){
C.Ch._Init.call(this,aArg);C.OP._Init.call(this.OP={I:this},0);C.BU._Init.call(this.
IV={I:this},0);C.SY._Init.call(this.H9={I:this},0);C.AGR._Init.call(this.IT={I:this
},0);C.Rb._Init.call(this.Gx={I:this},0);this.__proto__=C.ARf;var B;this.Jf(A.aaR(
A.acf.A$$));this.IV.H(AhY);this.IV.Ai(true);this.IV.T(A.aaR(A.acf.Language));this.
IV.A_R(100);this.H9.H(U5);this.H9.Ai(true);this.H9.T(A.aaR(A.acf.Date));this.H9.
Bh(true);this.IT.H(Aao);this.IT.Ai(true);this.IT.T(A.aaR(A.acf.Bq));this.Gx.H(AhX
);this.Gx.Ai(true);this.Gx.Z(true);this.Gx.T(A.aaR(A.acf.AGo));this.Gx.Bh(true);
this.Gx.Ar3(false);this.Gx.A_Z(true);this.J6(this.Y,-1);this.J6(this.Ay,-1);this.
J(this.IV,0);this.J(this.H9,0);this.J(this.IT,0);this.J(this.Gx,0);this.IV.ZA(A.
aaL(A.fl.H5));this.IV.ZB(A.aaL(A.fl.H5));this.IV.Au([B=this.OP,B.Ca,B.Cb]);this.
IV.CI(this.OP);this.H9.Ab6([B=this.H9,B.FY]);this.H9.Gt([this,this.D$,this.GT]);
this.H9.Akv(A.aaL(A.ach.Edit));this.H9.Aca([B=A._GetAutoObject(A.Device.Helper),
B.U7,B.U_]);this.IT.Ab6([B=this.IT,B.FY]);this.IT.Gt([this,this.D$,this.GT]);this.
IT.Akv(A.aaL(A.ach.Edit));this.IT.Aca([B=A._GetAutoObject(A.Device.Helper),B.U7,
B.U_]);this.Gx.Ab6([B=this.Gx,B.FY]);this.Gx.Gt([this,this.D$,this.GT]);this.Gx.
Akv(A.aaL(A.ach.Edit));this.Gx.Au([B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0M
]);},_Done:function(){this.__proto__=C.Ch;this.OP._Done();this.IV._Done();this.H9.
_Done();this.IT._Done();this.Gx._Done();C.Ch._Done.call(this);},_ReInit:function(
){C.Ch._ReInit.call(this);this.OP._ReInit();this.IV._ReInit();this.H9._ReInit();
this.IT._ReInit();this.Gx._ReInit();this.Jf(A.aaR(A.acf.A$$));this.IV.T(A.aaR(A.
acf.Language));this.H9.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bq));this.Gx.T(
A.aaR(A.acf.AGo));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.OP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa7={Bf:null,FC:null,Am0:null,AmJ:null,Sk:null,A7x:A.jV,KR:A.jV,ARK:null,ARL:
null,ADz:null,CC:function(G){var B;C.D_.CC.call(this,G);A.zX([this,this.A3x],[B=
A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId],0);this.A3x(this);},E3:function(
G){var B;A.z$([this,this.A3x],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId
],0);C.D_.E3.call(this,G);},ZC:function(E){C.D_.ZC.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bf)this.Bf.ZC(E);},ATx:function(E){if(this.ARK===E)return;this.
ARK=E;if(!!this.Bf)this.Bf.N8(E);},ATy:function(E){if(this.ARL===E)return;this.ARL=
E;this.BpL(this);},ATn:function(E){if(this.ADz===E)return;this.ADz=E;A.pe([this,
this.BpK],this);},ArS:function(E){if(this.A7x===E)return;this.A7x=E;this.Sk.R(E);
},Dl:function(E){if(this.KR===E)return;this.KR=E;if(!!this.Bf)this.Bf.Dl(E);},AkQ:
function(L9){A.ab5("%s",AZI);},AEc:function(){A.ab5("%s",Ald);return false;},AxE:
function(G){if(!!this.Bf)this.HQ(this.Bf);this.Bf=A._NewObject(C.Gg,0);this.Bf.H(
Atg);this.Bf.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dl(this.KR);this.Bf.
N8(this.ARK);this.Bf.ZC(this.AR);this.J(this.Bf,0);this.Ba(this.Bf);},BpL:function(
G){var B;if(!!this.FC)this.HQ(this.FC);this.FC=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARL,0))?B:null);this.FC.H(I1);this.J(this.FC,0);},BpK:function(G){var B;if(
!!this.Am0)this.HQ(this.Am0);if(!!this.ADz&&this.AEc()){this.Am0=(C.I9.isPrototypeOf(
B=A._NewObject(this.ADz,0))?B:null);this.Am0.H(BD);this.Am0.Bh(false);this.J(this.
Am0,0);this.Sk.Z(false);}else this.Sk.Z(true);},A3x:function(G){this.AkQ(A._GetAutoObject(
A.Device.Device).Bt);this.AxE(this);},_Init:function(aArg){C.D_._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmJ={I:this},0);C.CG._Init.call(this.Sk={I:this},
0);this.__proto__=C.Aa7;this.AmJ.H(BD);this.AmJ.L(A.jb.CK);this.Sk.H(AHT);this.Sk.
A4(0x11);this.Sk.L(A.jb.Text);this.J(this.AmJ,0);this.J(this.Sk,0);this.Sk.S(A.aaL(
A.fl.Ks));this.Sk.AY(A.aaL(A.fl.HK));},_Done:function(){this.__proto__=C.D_;this.
AmJ._Done();this.Sk._Done();C.D_._Done.call(this);},_ReInit:function(){C.D_._ReInit.
call(this);this.AmJ._ReInit();this.Sk._ReInit();this.Sk.S(A.aaL(A.fl.Ks));this.Sk.
AY(A.aaL(A.fl.HK));},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.
Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmJ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kn={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bc9],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIW],0);A.pe([this,this.Bc9],this
);},Dv:function(){return 5;},Gb:function(aIndex){return this.AnimalListContentToString.
BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zw(E);},Bc9:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kn;this.BI.Set(0,0);this.BI.Set(1,14);this.BI.Set(2,
1);this.BI.Set(3,2);this.BI.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AnimalListContentToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARQ={IV:null
,Zf:null,Zo:null,Zl:null,Zp:null,Zg:null,Zj:null,Zm:null,Zn:null,Zi:null,OP:null
,_Init:function(aArg){C.Ch._Init.call(this,aArg);C.BU._Init.call(this.IV={I:this
},0);C.Np._Init.call(this.Zf={I:this},0);C.Np._Init.call(this.Zo={I:this},0);C.Np.
_Init.call(this.Zl={I:this},0);C.Np._Init.call(this.Zp={I:this},0);C.Np._Init.call(
this.Zg={I:this},0);C.Np._Init.call(this.Zj={I:this},0);C.Np._Init.call(this.Zm={
I:this},0);C.Np._Init.call(this.Zn={I:this},0);C.Np._Init.call(this.Zi={I:this},
0);C.OP._Init.call(this.OP={I:this},0);this.__proto__=C.ARQ;var B;this.Jf(A.aaR(
A.acf.Settings));this.IV.H(AhY);this.IV.Ai(true);this.IV.T(A.aaR(A.acf.Language)
);this.IV.A_R(100);this.Zf.H(Ath);this.Zf.Ai(true);this.Zf.T(A.aaR(A.acf.ACK));this.
Zf.Ns(16);this.Zo.H(Ati);this.Zo.Ai(true);this.Zo.T(A.aaR(A.acf.AHj));this.Zo.Ns(
22);this.Zl.H(Atj);this.Zl.Ai(true);this.Zl.T(A.aaR(A.acf.Temperature));this.Zl.
Ns(17);this.Zp.H(AyJ);this.Zp.Ai(true);this.Zp.T(A.aaR(A.acf.ACH));this.Zp.Ns(42
);this.Zg.H(Aos);this.Zg.Ai(true);this.Zg.T(A.aaR(A.acf.Device));this.Zg.Ns(18);
this.Zj.H(Aos);this.Zj.Ai(true);this.Zj.T(A.aaR(A.acf.Aso));this.Zj.Ns(19);this.
Zm.H(AZJ);this.Zm.Ai(true);this.Zm.T(A.aaR(A.acf.LinkTransponder));this.Zm.Ns(89
);this.Zn.H(AZK);this.Zn.Ai(true);this.Zn.T(A.aaR(A.acf.UnlinkTransponder));this.
Zn.Ns(95);this.Zi.H(AyA);this.Zi.Ai(true);this.Zi.T(A.aaR(A.acf.ACZ));this.Zi.Ns(
76);this.J(this.IV,0);this.J(this.Zf,0);this.J(this.Zo,0);this.J(this.Zl,0);this.
J(this.Zp,0);this.J(this.Zg,0);this.J(this.Zj,0);this.J(this.Zm,0);this.J(this.Zn
,0);this.J(this.Zi,0);this.IV.ZA(A.aaL(A.fl.H5));this.IV.ZB(A.aaL(A.fl.H5));this.
IV.Au([B=this.OP,B.Ca,B.Cb]);this.IV.CI(this.OP);this.Zf.AR=[B=this.Zf,B.Nv];this.
Zo.AR=[B=this.Zo,B.Nv];this.Zl.AR=[B=this.Zl,B.Nv];this.Zp.AR=[B=this.Zp,B.Nv];this.
Zg.AR=[B=this.Zg,B.Nv];this.Zj.AR=[B=this.Zj,B.Nv];this.Zm.AR=[B=this.Zm,B.Nv];this.
Zn.AR=[B=this.Zn,B.Nv];this.Zi.AR=[B=this.Zi,B.Nv];},_Done:function(){this.__proto__=
C.Ch;this.IV._Done();this.Zf._Done();this.Zo._Done();this.Zl._Done();this.Zp._Done(
);this.Zg._Done();this.Zj._Done();this.Zm._Done();this.Zn._Done();this.Zi._Done(
);this.OP._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.IV._ReInit();this.Zf._ReInit();this.Zo._ReInit();this.Zl._ReInit();this.Zp.
_ReInit();this.Zg._ReInit();this.Zj._ReInit();this.Zm._ReInit();this.Zn._ReInit(
);this.Zi._ReInit();this.OP._ReInit();this.Jf(A.aaR(A.acf.Settings));this.IV.T(A.
aaR(A.acf.Language));this.Zf.T(A.aaR(A.acf.ACK));this.Zo.T(A.aaR(A.acf.AHj));this.
Zl.T(A.aaR(A.acf.Temperature));this.Zp.T(A.aaR(A.acf.ACH));this.Zg.T(A.aaR(A.acf.
Device));this.Zj.T(A.aaR(A.acf.Aso));this.Zm.T(A.aaR(A.acf.LinkTransponder));this.
Zn.T(A.aaR(A.acf.UnlinkTransponder));this.Zi.T(A.aaR(A.acf.ACZ));},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMx={ET:null,Init:function(aArg){this.ET.Aht(A._NewObject(A.Core.Bq,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.AgX)));},AUD:function(
){this.ET.AeZ(this.AO0());this.AaF=!this.ET.EZ.A0;},AiU:function(G){this.ET.Aht(
A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(
A.aaR(A.acf.AgX)));this.AUD();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8E));else this.Dl(A.aaR(A.acf.Arv));this.Am();},AO0:function(
){var Bz=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOh(A._GetAutoObject(
A.Device.Helper).Dr());var Dy=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.
MG));Bz.AnA(AZL);Bz.Q5([].concat(0,Bz.Gn.slice(1,4)));Bz.Q5(A.abN(Bz.Gn,(Qo-Dy)|
0));Bz.Q5(A.abP(Bz.Gn,3400));Bz.Q5([].concat(Bz.Gn.slice(0,3),4200));var Gk=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwW(Gk);Bz.Yp();if(Gk>0){var O=0;while(O<Gk){var ApT=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var ApU=A._GetAutoObject(A.Device.Device
).Bt.Hw(O,6)-Dy;if(ApT>0)Bz.Aqe(ApU,ApT);O=O+1;}}return Bz;},_Init:function(aArg
){C.Lc._Init.call(this,aArg);C.AqX._Init.call(this.ET={I:this},0);this.__proto__=
C.AMx;this.ET.H(AZM);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AFr(C.AG5);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Lc;this.ET._Done(
);C.Lc._Done.call(this);},_ReInit:function(){C.Lc._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Lc._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMy={Z$:null,O6:null,AgS:null,AaF:false,Init:function(aArg){this.Z$.Aht(A._NewObject(
A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.
AgX)));},Aj:function(Ae){C.D_.Aj.call(this,Ae);this.AgS.Z(this.AaF);},CC:function(
G){var B;C.D_.CC.call(this,G);A.zX([this,this.AiU],[B=A._GetAutoObject(A.Device.
Helper),B.U7,B.U_],0);A.zV([this,this.AiU],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Ame],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId],0
);A.pe([this,this.Ame],this);},E3:function(G){var B;A.z$([this,this.AiU],[B=A._GetAutoObject(
A.Device.Helper),B.U7,B.U_],0);A.z9([this,this.AiU],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Ame],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId
],0);C.D_.E3.call(this,G);},Ame:function(G){var Fw=A._NewObject(A.Device.Filter,
0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fw.CY(HY);A._GetAutoObject(A.Device.Device).Bt.Bk(Fw
);},AiU:function(G){this.Z$.Aht(A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dr()).Format(A.aaR(A.acf.AgX)));this.Bo6();this.Am();},Bo6:function(
){var B;var Gk=A._GetAutoObject(A.Device.Device).Bt.B9();var La=A._NewObject(C.Aqt
,0);var Vx=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOh(A.
_GetAutoObject(A.Device.Helper).Dr());var Dy=A._GetAutoObject(A.Device.Helper).Aqp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);La.Q5([].concat(0,La.Gn.slice(1
,4)));La.Q5(A.abN(La.Gn,(Qo-Dy)|0));La.Q5(A.abP(La.Gn,0));La.Q5([].concat(La.Gn.
slice(0,3),150000));La.AnA(AZN);Vx.Q5([].concat(0,Vx.Gn.slice(1,4)));Vx.Q5(A.abN(
Vx.Gn,(Qo-Dy)|0));Vx.Q5(A.abP(Vx.Gn,0));Vx.Q5([].concat(Vx.Gn.slice(0,3),1500));
Vx.AnA(AZO);La.AwW(Gk);La.Yp();Vx.AwW(Gk);Vx.Yp();if(Gk>0){var O=0;var AaH=0;var
AAr=0;var AKe=0;var A2A=0;var BdN=true;while(O<Gk){var Al_=A._GetAutoObject(A.Device.
Device).Bt.CE(O,8);var AaV=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-Dy;if(Al_>
0){La.Aqe(AaV,Al_);if(!A2A){A2A=AaV;AKe=Al_;}if(AAr>0){var LK=A._GetAutoObject(A.
Device.Helper).Me(AAr,AaV);if(!!LK){var FZ=A._GetAutoObject(A.acj.DV).AlA(LK,AaH
,Al_);if(BdN){Vx.Aqe(AAr,FZ);BdN=false;}Vx.Aqe(AaV,FZ);}}AaH=Al_;AAr=AaV;}O=O+1;
}var AdN=A.acf.BhD;var FZ=A._GetAutoObject(A.Device.Helper).BjC(A2A,AAr,AKe,AaH);
AdN=A._GetAutoObject(A.Device.Helper).MO(AdN,O$,FZ.toFixed());AdN=A._GetAutoObject(
A.Device.Helper).MO(AdN,Ayl,A._GetAutoObject(A.acj.DV).AaC());this.O6.Io.R(AdN);
}this.AaF=!La.A0;if(this.AaF)this.O6.Io.R(A.jV);(C.O6.isPrototypeOf(B=this.O6.ET
)?B:null).Anv([B=A._GetAutoObject(A.Device.Helper).W,B.PU,B.EC]);this.Z$.AeZ(La);
this.O6.AeZ(Vx);},_Init:function(aArg){C.D_._Init.call(this,aArg);C.AqX._Init.call(
this.Z$={I:this},0);C.AqX._Init.call(this.O6={I:this},0);C.AkO._Init.call(this.AgS={
I:this},0);this.__proto__=C.AMy;this.Z$.H(AZP);this.Z$.T(A.aaR(A.acf.Afw));this.
Z$.AFr(C.AM5);this.O6.H(AZQ);this.O6.T(A.aaR(A.acf.AHo));this.O6.AFr(C.O6);this.
AgS.H(U3);this.AgS.R(A.aaR(A.acf.Aki));this.J(this.Z$,0);this.J(this.O6,0);this.
J(this.AgS,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.Z$._Done(
);this.O6._Done();this.AgS._Done();C.D_._Done.call(this);},_ReInit:function(){C.
D_._ReInit.call(this);this.Z$._ReInit();this.O6._ReInit();this.AgS._ReInit();this.
Z$.T(A.aaR(A.acf.Afw));this.O6.T(A.aaR(A.acf.AHo));this.AgS.R(A.aaR(A.acf.Aki));
},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Z$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMv={
Avk:null,Avj:null,Axy:null,AuS:null,VJ:null,Abu:null,Abt:null,Acq:null,Afh:null,
Init:function(aArg){this.VJ.Aht(A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dr()).Format(A.aaR(A.acf.AgX)));},A43:function(G){this.VJ.Acb(this.
AuS);this.Abu.Acb(this.Avk);this.Abt.Acb(this.Avj);this.Acq.Acb(this.Axy);},Axx:
function(){var Gk=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuS=A._NewObject(
C.Ajs,0);this.Avk=A._NewObject(C.Ajs,0);this.Avj=A._NewObject(C.Ajs,0);this.Axy=
A._NewObject(C.Ajs,0);if(Gk>0){var O=Gk-1;while(O>=0){var D9=A._GetAutoObject(A.
Device.Device).Bt.Hw(O,6);this.AtB(this.AuS,O,3,D9);this.AtB(this.Avk,O,2,D9);this.
AtB(this.Avj,O,5,D9);this.AtB(this.Axy,O,4,D9);O=O-1;}}this.AaF=!(((this.AuS.A0+
this.Avj.A0)+this.Avk.A0)+this.Axy.A0);A.pe([this,this.A43],this);},AtB:function(
A1y,Ad,A1x,Qi){var Alw=A._GetAutoObject(A.Device.Device).Bt.Ja(Ad,A1x);if(!!Alw)
A1y.OA(Alw,Qi);},Ab$:function(E){if(this.MG===E)return;C.Lc.Ab$.call(this,E);if(
!!this.VJ)this.VJ.Ab$(E);if(!!this.Abu)this.Abu.Ab$(E);if(!!this.Abt)this.Abt.Ab$(
E);if(!!this.Acq)this.Acq.Ab$(E);this.Afh.Ab$(E);},AiU:function(G){this.VJ.Aht(A.
_NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(
A.aaR(A.acf.AgX)));this.Axx();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.Bk2));else this.Dl(A.aaR(A.acf.Anm));this.Am();},_Init:function(
aArg){C.Lc._Init.call(this,aArg);C.Ahy._Init.call(this.VJ={I:this},0);C.Ahy._Init.
call(this.Abu={I:this},0);C.Ahy._Init.call(this.Abt={I:this},0);C.Ahy._Init.call(
this.Acq={I:this},0);C.AUA._Init.call(this.Afh={I:this},0);this.__proto__=C.AMv;
this.Dl(A.aaR(A.acf.Anm));this.VJ.H(AIE);this.VJ.R(A.aaR(A.acf.AGt));this.Abu.H(
AZR);this.Abu.R(A.aaR(A.acf.Feed));this.Abt.H(AZS);this.Abt.R(A.aaR(A.acf.AGv));
this.Acq.H(AZT);this.Acq.R(A.aaR(A.acf.AGw));this.Afh.H(AZU);this.J(this.VJ,-1);
this.J(this.Abu,-1);this.J(this.Abt,-1);this.J(this.Acq,-1);this.J(this.Afh,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Lc;this.VJ._Done();this.Abu.
_Done();this.Abt._Done();this.Acq._Done();this.Afh._Done();C.Lc._Done.call(this);
},_ReInit:function(){C.Lc._ReInit.call(this);this.VJ._ReInit();this.Abu._ReInit(
);this.Abt._ReInit();this.Acq._ReInit();this.Afh._ReInit();this.Dl(A.aaR(A.acf.Anm
));this.VJ.R(A.aaR(A.acf.AGt));this.Abu.R(A.aaR(A.acf.Feed));this.Abt.R(A.aaR(A.
acf.AGv));this.Acq.R(A.aaR(A.acf.AGw));},_Mark:function(D){var B;C.Lc._Mark.call(
this,D);if((B=this.Avk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMw={ET:null,WQ:null,Aej:null,A2X:false,Init:function(aArg){this.WQ.Aht(A._NewObject(
A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.
AgX)));},Bl:function(aSize){C.Lc.Bl.call(this,aSize);this.Aej.H(this.ET.M);},Aj:
function(Ae){C.Lc.Aj.call(this,Ae);var BCC=!this.AaF&&this.A2X;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aej.R(A.aaR(A.acf.A8E));else this.
Aej.R(A.aaR(A.acf.Arv));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.Bk3));else this.Dl(A.aaR(A.acf.Bk4));this.Aej.Z(BCC);},AiU:function(G){this.
WQ.Aht(A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr(
)).Format(A.aaR(A.acf.AgX)));this.AaF=true;this.A2X=true;this.Axx();this.AUD();this.
Am();},AUD:function(){this.ET.AeZ(this.AO0());if(!!this.ET.EZ&&(this.ET.EZ.A0>0)
){this.AaF=false;this.A2X=false;}},AO0:function(){var Bz=A._NewObject(C.Aqt,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOh(A._GetAutoObject(A.Device.Helper).Dr());
var Dy=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.MG));Bz.AnA(AZV);Bz.
Q5([].concat(0,Bz.Gn.slice(1,4)));Bz.Q5(A.abN(Bz.Gn,(Qo-Dy)|0));Bz.Q5(A.abP(Bz.Gn
,3400));Bz.Q5([].concat(Bz.Gn.slice(0,3),4200));var Gk=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwW(Gk);Bz.Yp();if(Gk>0){var O=0;while(O<Gk){var ApT=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var ApU=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dy;if(ApT>0)Bz.Aqe(ApU,ApT);O=O+1;}}return Bz;},BjR:function(){var Gk=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gk>0){var Bgu=A._NewObject(C.Ajs,0);var O=Gk-1;while(
O>=0){var D4=A._NewObject(A.Device.Rating,0);D4.Fl(O,A._GetAutoObject(A.Device.Device
).Bt);var LW=A._GetAutoObject(A.Device.Helper).ADn(D4);if(!!LW)Bgu.OA(LW,D4.Timestamp
);O=O-1;}return Bgu;}else return null;},Axx:function(){this.WQ.Acb(this.BjR());if(
!!this.WQ.N$&&(this.WQ.N$.A0>0))this.AaF=false;},_Init:function(aArg){C.Lc._Init.
call(this,aArg);C.AqX._Init.call(this.ET={I:this},0);C.Ahy._Init.call(this.WQ={I:
this},0);C.AkO._Init.call(this.Aej={I:this},0);this.__proto__=C.AMw;this.ET.H(Atg
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AFr(C.AG5);this.WQ.H(AZW);this.WQ.
R(A.aaR(A.acf.Rating));this.Aej.H(Atg);this.J(this.ET,-2);this.J(this.WQ,-2);this.
J(this.Aej,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Lc;this.ET._Done(
);this.WQ._Done();this.Aej._Done();C.Lc._Done.call(this);},_ReInit:function(){C.
Lc._ReInit.call(this);this.ET._ReInit();this.WQ._ReInit();this.Aej._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WQ.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Lc._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WX={Q:null,Gy:null,Gz:null
,QO:null,AM:0,Gs:0,Gd:100,FH:0,Init:function(aArg){},H0:function(G){this.FH=1;C.
Eh.H0.call(this,G);},Bl:function(aSize){C.Eh.Bl.call(this,aSize);this.QO.H([0,aSize[
1]-40,40,aSize[1]]);},Aj:function(Ae){C.Eh.Aj.call(this,Ae);this.QO.Z(this.Gs!==
this.Gd);this.QO.L(this.V.AQ);if((this.FH===4)||(this.FH===5))this.QO.L(A.jb.E1);
},Al3:function(G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay3],this);
this.Bo.As(false);}this.Bo.As(true);},Qu:function(G){if(this.FH===5)A.pe([this,this.
Ay3],this);if(this.FH===4)A.pe([this,this.Ay4],this);if(this.FH===1)A.pe(this.AR
,this);this.FH=0;this.Am();},C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcW:function(s){this.C6(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcW],E,0);if(!!E)A.pe([this,this.AcW],this);},Al4:function(G){this.FH=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay4],this);this.Bo.As(false);}this.Bo.As(true
);},Kh:function(G){this.FH=0;},Ay4:function(s){this.Kh(s);},Kc:function(G){this.
FH=0;},Ay3:function(s){this.Kc(s);},Bx:function(E){if(E<this.Gs)E=this.Gs;if(E>this.
Gd)E=this.Gd;if(this.AM===E)return;this.AM=E;this.Am();},Ge:function(E){if(this.
Gs===E)return;this.Gs=E;this.Am();},EU:function(E){if(this.Gd===E)return;this.Gd=
E;this.Am();},_Init:function(aArg){C.Eh._Init.call(this,aArg);A.Core.BF._Init.call(
this.Gy={I:this},0);A.Core.BF._Init.call(this.Gz={I:this},0);A.acg.Ap._Init.call(
this.QO={I:this},0);this.__proto__=C.WX;this.H(K2);this.Gy.Filter=5;this.Gz.Filter=
4;this.Background.H(K2);this.V.H(Aal);this.V.R(LB);this.QO.H(AyK);this.J(this.QO
,0);this.Gy.BG=[this,this.Al3];this.Gy.D2=[this,this.Al3];this.Gz.BG=[this,this.
Al4];this.Gz.D2=[this,this.Al4];this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak
));this.V.Cm(null);this.QO.Ax(A.aaL(A.ach.AMT));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eh;this.Gy._Done();this.Gz._Done();this.QO._Done();C.Eh._Done.
call(this);},_ReInit:function(){C.Eh._ReInit.call(this);this.Gy._ReInit();this.Gz.
_ReInit();this.QO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eh._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AU1={AC:null,CL:null,HO:
null,Bl:function(aSize){C.WX.Bl.call(this,aSize);this.CL.H([this.QO.M[2],this.QO.
M[1],this.M[2],this.QO.M[3]]);},Aj:function(Ae){C.WX.Aj.call(this,Ae);this.CL.AbL(
0,this.CL.A0-1);if(this.Gs!==this.Gd)this.QO.Z(true);},Init:function(aArg){},C6:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.D0((F=this.Q,F[1].call(
F[0]))));},Kh:function(G){var F;var BP=this.AM;C.WX.Kh.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C8(
this.AM)));A.abo(this.Q,0);}},Kc:function(G){var F;var BP=this.AM;C.WX.Kc.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gs
!==this.Gd){if(E<this.Gs){E=this.Gd;QA=-this.CL.GP*this.CL.A0;}if(E>this.Gd){E=this.
Gs;QA=this.CL.GP;}}C.WX.Bx.call(this,E);if(!!QA)this.CL.Gf(QA);this.CL.GU(this.AM
);this.CL.HJ(this.CL.Gu,true,this.HO,null);},Hn:function(G){var B;var Gj=this.CL.
G6;var CA=(C.CG.isPrototypeOf(B=this.CL.Cj)?B:null);if(!CA)return;CA.S(this.V.B8
);CA.AY(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gb(Gj));else CA.
R(Xn);CA.H(A.abK(CA.M,[(B=this.CL.M)[2]-B[0],this.CL.GP]));},CI:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ge(0);this.EU(this.AC.Dv()-1);this.CL.
JD(this.AC.Dv());this.CL.AbL(0,this.CL.A0-1);}},_Init:function(aArg){C.WX._Init.
call(this,aArg);A.Core.CL._Init.call(this.CL={I:this},0);A.acl.Go._Init.call(this.
HO={I:this},0);this.__proto__=C.AU1;this.H(K2);this.QO.H(AZX);this.CL.Ae7(40);this.
CL.N8(C.CG);this.HO.WN(23);this.HO.HP(1);this.HO.Fp(200);this.J(this.CL,0);this.
V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.CL.Hn=[this,this.Hn];this.Init(
aArg);},_Done:function(){this.__proto__=C.WX;this.CL._Done();this.HO._Done();C.WX.
_Done.call(this);},_ReInit:function(){C.WX._ReInit.call(this);this.CL._ReInit();
this.HO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WX._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R4={ALE:0
,Aj:function(Ae){C.Fy.Aj.call(this,Ae);this.T(A.aaR(A.acf.AHo));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KA((A._GetAutoObject(A.Device.Converter).Ak6(this.ALE
)+CR)+A._GetAutoObject(A.acj.DV).Af5());else this.KA(A.aaR(A.acf.Unknown));},Ci:
function(G){C.Fy.Ci.call(this,G);this.ALE=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fy._Init.call(this,aArg);this.__proto__=C.R4;},_className:"Application::AnimalInfoItemWeightGain"
};C.APD={Bb:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Device),B.AEM,B.AIV],0);},DY:function(G){C.IP.DY.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhS(A._GetAutoObject(A.Device.Device).D_));
},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.C9._Init.call(this.Bb={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APD;this.Bb.DE(
Atk);this.Bb.DO(Ali);this.Bb.L(A.jb.Bb);this.Df.H(AZY);this.Df.L(A.jb.Text);this.
J(this.Bb,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjS));this.Init(aArg);},_Done:
function(){this.__proto__=C.IP;this.Bb._Done();this.Df._Done();C.IP._Done.call(this
);},_ReInit:function(){C.IP._ReInit.call(this);this.Bb._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANF={ZS:null,KE:null,Mu:null,Timer:null,ACy:3,Aj:function(Ae){C.AB.Aj.call(this
,Ae);this.ZS.R(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Brn),O$,this.ACy.
toFixed()));},CC:function(G){this.Timer.As(true);},E3:function(G){this.Timer.As(
false);},BBR:function(G){if(this.ACy>1){this.ACy=this.ACy-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).AxF();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZS={I:this},0);A.acg.Text.
_Init.call(this.KE={I:this},0);A.acg.Ap._Init.call(this.Mu={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANF;this.Background.L(A.jb.CV
);this.N.Z(true);this.ZS.H(AZZ);this.ZS.Lu(true);this.ZS.R(A.jV);this.ZS.L(A.jb.
Text);this.KE.H(AZ0);this.KE.Lu(true);this.KE.R(A.aaR(A.acf.A5U));this.KE.L(A.jb.
Text);this.Mu.H(AIF);this.J(this.ZS,0);this.J(this.KE,0);this.J(this.Mu,0);this.
ZS.S(A.aaL(A.fl.Af));this.KE.S(A.aaL(A.fl.Af));this.Mu.Ax(A.aaL(A.ach.AB4));this.
Timer.MK=[this,this.BBR];},_Done:function(){this.__proto__=C.AB;this.ZS._Done();
this.KE._Done();this.Mu._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZS._ReInit();this.KE._ReInit();this.Mu._ReInit(
);this.Timer._ReInit();this.KE.R(A.aaR(A.acf.A5U));this.ZS.S(A.aaL(A.fl.Af));this.
KE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANm={KE:null,AmA:null
,QG:null,CP:function(){this.Am();},Aj:function(Ae){C.Ad_.Aj.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aba<=10)this.KE.R(A.aaR(A.acf.Bh4));else this.KE.R(A.aaR(A.acf.
A5V));},_Init:function(aArg){C.Ad_._Init.call(this,aArg);A.acg.Text._Init.call(this.
KE={I:this},0);A.acg.Ap._Init.call(this.AmA={I:this},0);C.CG._Init.call(this.QG={
I:this},0);this.__proto__=C.ANm;this.SZ.H(AZ1);this.Mu.H(AZ2);this.KE.H(AZ3);this.
KE.Lu(true);this.KE.L(A.jb.Text);this.AmA.H(AIF);this.QG.H(AZ4);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUB));this.QG.L(A.jb.Text);this.J(this.KE,0);this.J(this.AmA
,0);this.J(this.QG,0);this.KE.S(A.aaL(A.fl.Af));this.AmA.Ax(A.aaL(A.ach.AB4));this.
QG.S(A.aaL(A.fl.Af));this.QG.AY(A.aaL(A.fl.Ak));this.QG.Cm(A.aaL(A.fl.Bg));},_Done:
function(){this.__proto__=C.Ad_;this.KE._Done();this.AmA._Done();this.QG._Done();
C.Ad_._Done.call(this);},_ReInit:function(){C.Ad_._ReInit.call(this);this.KE._ReInit(
);this.AmA._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUB));this.KE.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.AY(A.aaL(A.fl.Ak));this.QG.Cm(A.aaL(
A.fl.Bg));this.CP();},_Mark:function(D){var B;C.Ad_._Mark.call(this,D);if((B=this.
KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMi={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMi;this.
RY.As(false);this.RY.Ai(false);this.RY.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AV3={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AV3;this.
Te.As(false);this.Te.Ai(false);this.Te.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO7={DY:function(G){C.Ku.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).AdZ(5));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=
C.AO7;},_className:"Application::HeaderControlListFilter"};C.APF={DY:function(G){
C.Ku.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).AdZ(6));},_Init:
function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APF;},_className:"Application::HeaderWatchListFilter"
};C.APJ={D1:null,Nh:null,_Init:function(aArg){C.T2._Init.call(this,aArg);C.CG._Init.
call(this.D1={I:this},0);A.acg.Ap._Init.call(this.Nh={I:this},0);this.__proto__=
C.APJ;this.D1.H(Aop);this.D1.R(A.aaR(A.acf.A6s));this.D1.L(A.jb.Text);this.Nh.H(
AZ5);this.Nh.L(A.jb.Text);this.Nh.A4(0x12);this.J(this.D1,-2);this.J(this.Nh,0);
this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(A.fl.Bg));this.Nh.Ax(A.aaL(A.ach.ADR)
);},_Done:function(){this.__proto__=C.T2;this.D1._Done();this.Nh._Done();C.T2._Done.
call(this);},_ReInit:function(){C.T2._ReInit.call(this);this.D1._ReInit();this.Nh.
_ReInit();this.D1.R(A.aaR(A.acf.A6s));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.T2._Mark.call(this,D);if((B=this.D1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANh={Ci:function(Ad){C.Ajz.Ci.call(this,Ad);if(
!!this.AX){var Os=this.AX.H6(Ad,8);var BDo=this.AX.Sq(Ad,21);this.Abm.R(A._GetAutoObject(
A.Device.Helper).Me(BDo,A._GetAutoObject(A.Device.Helper).Dr()).toFixed());this.
Sw.Z(Os);this.Am();}},_Init:function(aArg){C.Ajz._Init.call(this,aArg);this.__proto__=
C.ANh;},_className:"Application::CalfListWatchItem"};C.T2={Ag8:null,Ag_:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag8={I:this},
0);A.acg.Ap._Init.call(this.Ag_={I:this},0);this.__proto__=C.T2;this.Ag8.H(AZ6);
this.Ag8.L(A.jb.Text);this.Ag8.A4(0x12);this.Ag_.H(AZ7);this.Ag_.L(A.jb.Text);this.
Ag_.A4(0x12);this.J6(this.DT,-1);this.J(this.Ag8,0);this.J(this.Ag_,0);this.Ag8.
Ax(A.aaL(A.ach.Arb));this.Ag_.Ax(A.aaL(A.ach.Ag4));},_Done:function(){this.__proto__=
C.De;this.Ag8._Done();this.Ag_._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Ag8._ReInit();this.Ag_._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqt={Gn:A.wg,OL:A.wf,Q5:function(E){if(A.aaY(this.Gn,E))return;this.Gn=E;},AnA:
function(E){if(A.aaX(this.OL,E))return;this.OL=E;},_Init:function(aArg){A.acv.ACx.
_Init.call(this,aArg);this.__proto__=C.Aqt;},_className:"Application::BoundCoordList"
};C.Ajz={T7:null,WD:null,T8:null,WE:null,Sw:null,Zq:null,Abm:null,AP:null,A_:null
,Eb:null,Lx:null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T7.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WD.H(this.T7.M);this.A_.H([this.T7.
M[2]-1,0,this.T7.M[2]+1,aSize[1]]);this.T8.H([this.T7.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WE.H(this.T8.M);this.Eb.H([this.T8.M[2]-1,0,this.T8.M[2]+1,aSize[
1]]);this.Sw.H([this.T8.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zq.H(this.Sw.
M);this.Lx.H([this.Sw.M[2]-1,0,this.Sw.M[2]+1,aSize[1]]);this.Abm.H([this.Sw.M[2
],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);var K$=this.V.AQ;
this.T7.AFb(K$);this.WD.L(K$);this.T8.AFb(K$);this.WE.L(K$);this.Sw.AFb(K$);this.
Zq.L(K$);this.Abm.L(K$);this.Zq.Z(!this.Sw.Fo());},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mn=this.AX.CE(Ad,1);var Ig=this.AX.AmV(Ad,14);var Auu=this.AX.CE(
Ad,5);var LW=this.AX.Ja(Ad,13);this.T(Mn.toFixed());if(!!LW){this.T7.Z(true);this.
T7.AwM(A._GetAutoObject(A.acj.Assessment).BdV(LW));this.WD.Z(false);}else{this.T7.
Z(false);this.WD.Z(true);}if(Auu>0){this.T8.Z(true);this.T8.AwM(A._GetAutoObject(
A.acj.Assessment).BdV(A._GetAutoObject(A.Device.Converter).AsJ(Ig,Auu)));this.WE.
Z(false);}else{this.T8.Z(false);this.WE.Z(true);}this.Am();},_Init:function(aArg
){C.A$._Init.call(this,aArg);C.Ko._Init.call(this.T7={I:this},0);A.acg.Text._Init.
call(this.WD={I:this},0);C.Ko._Init.call(this.T8={I:this},0);A.acg.Text._Init.call(
this.WE={I:this},0);C.Ko._Init.call(this.Sw={I:this},0);A.acg.Text._Init.call(this.
Zq={I:this},0);A.acg.Text._Init.call(this.Abm={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Eb={I:this},0);A.acg.AK._Init.call(this.Lx={I:this},0);this.__proto__=C.Ajz;this.
WD.H(AZ8);this.WD.R(Aoq);this.WE.H(Aor);this.WE.R(Aoq);this.Sw.AwM(A.jb.Ri);this.
Zq.H(Aor);this.Zq.R(Rr);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Eb.L(A.jb.Bb);
this.Lx.L(A.jb.Bb);this.J(this.T7,0);this.J(this.WD,0);this.J(this.T8,0);this.J(
this.WE,0);this.J(this.Sw,0);this.J(this.Zq,0);this.J(this.Abm,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Eb,0);this.J(this.Lx,0);this.WD.S(A.aaL(A.fl.Af
));this.WE.S(A.aaL(A.fl.Af));this.Zq.S(A.aaL(A.fl.Af));this.Abm.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.T7._Done();this.WD.
_Done();this.T8._Done();this.WE._Done();this.Sw._Done();this.Zq._Done();this.Abm.
_Done();this.AP._Done();this.A_._Done();this.Eb._Done();this.Lx._Done();C.A$._Done.
call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.T7._ReInit();this.WD.
_ReInit();this.T8._ReInit();this.WE._ReInit();this.Sw._ReInit();this.Zq._ReInit(
);this.Abm._ReInit();this.AP._ReInit();this.A_._ReInit();this.Eb._ReInit();this.
Lx._ReInit();this.WD.S(A.aaL(A.fl.Af));this.WE.S(A.aaL(A.fl.Af));this.Zq.S(A.aaL(
A.fl.Af));this.Abm.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DS={Px:null,Ane:null
,EZ:null,DS:null,Aro:0,Arp:0,A7W:0,AmM:0,AqG:0,Init:function(aArg){this.ATi(6);this.
ATj(8);this.ATu(A.jb.AV);this.ATv(3);},Aj:function(Ae){var B;A.Core.P.Aj.call(this
,Ae);this.DS.BmJ([this.DS.Abi[0],(B=this.DS.M)[3]-B[1]]);this.WR(this);},ATh:function(
E){if(this.Px===E)return;this.Px=E;this.DS.ATh(E);},ATv:function(E){if(this.Arp===
E)return;this.Arp=E;this.DS.ATv(E);},ATu:function(E){if(this.Aro===E)return;this.
Aro=E;this.DS.ATu(E);this.DS.BmN(E);},WR:function(G){var B;while(!!this.DS.Ah)this.
HQ(this.DS.Ah);if(!this.EZ)return;this.DS.AnA([((this.EZ.OL[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gn[2]-this.EZ.Gn[0]))|0,this.DS.OL[1]]);this.DS.AnA([this.DS.OL[0]
,((this.EZ.OL[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gn[3]-this.EZ.Gn[1]))|0]);var O;
var Di=this.DS.OL[1];var D9;var A5c=this.EZ.Gn[1];var Bk1=(((B=this.DS.M)[3]-B[1
])/this.DS.OL[1])|0;for(O=0;O<Bk1;O=O+1){D9=A._NewObject(A.acg.Text,0);D9.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Ane.Ascent+this.Ane.Descent))+2,((B=this.M)[2]-
B[0])-this.Arp,(((B=this.M)[3]-B[1])-(O*Di))+2]);D9.L(this.A7W);D9.S(this.Ane);D9.
A4(0x24);if(O>0)D9.R(this.AJS(A5c));else D9.R(this.AKo());A5c=A5c+this.EZ.OL[1];
this.J(D9,0);}},BG6:function(s){this.WR(s);},BnD:function(E){if(this.Ane===E)return;
this.Ane=E;this.Am();},AzB:function(A1d){var B;if(!this.EZ||(this.EZ.Gn[3]===this.
EZ.Gn[1]))return 0;return(((A1d-this.EZ.Gn[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gn[
3]-this.EZ.Gn[1]))|0;},AeZ:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DS.AeZ(null);else{var Bz=A._NewObject(A.acv.ACx,0);Bz.AwW(this.EZ.AEs);Bz.Yp();var
JF=E.AlK;while(!!JF){Bz.Aqe(this.Bzi(JF.P7),this.Bzj(JF.P8));JF=JF.Ah;}this.DS.AeZ(
Bz);this.Am();}},Bzi:function(Bxw){var B;if(!this.EZ||(this.EZ.Gn[2]===this.EZ.Gn[
0]))return 0;return((Bxw-this.EZ.Gn[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gn[2]-this.
EZ.Gn[0]);},Bzj:function(A1d){var B;if(!this.EZ||(this.EZ.Gn[3]===this.EZ.Gn[1])
)return 0;return((A1d-this.EZ.Gn[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gn[3]-this.EZ.
Gn[1]);},AJS:function(AoO){return AoO.toFixed();},AKo:function(){return A.jV;},ATj:
function(E){if(this.AmM===E)return;this.AmM=E;this.DS.ATj(E);},ATi:function(E){if(
this.AqG===E)return;this.AqG=E;this.DS.ATi(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DS._Init.call(this.DS={I:this},0);this.__proto__=C.DS;this.
H(AIG);this.A7W=A.jb.Text;this.DS.A1(0x3F);this.DS.H(AIG);this.DS.Bn3(AZ9);this.
DS.Bmx(A.jb.Ri);this.DS.Bnk(A.jb.Bb);this.DS.Boo(A.jb.Ri);this.J(this.DS,0);this.
Px=A.aaL(A.acv.ACQ);this.Ane=A.aaL(A.fl.Bg);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DS._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DS._ReInit();this.BnD(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Px)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ane)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM5={AJS:function(AoO){return A._GetAutoObject(
A.Device.Converter).Ax7(AoO,0);},AKo:function(){return A._GetAutoObject(A.acj.DV
).Af5();},_Init:function(aArg){C.DS._Init.call(this,aArg);this.__proto__=C.AM5;}
,_className:"Application::BodyWeightGraph"};C.O6={JS:null,Ey:null,Ej:null,F0:null
,IL:null,IM:null,Init:function(aArg){this.ATh(null);},WR:function(G){var B;var F;
C.DS.WR.call(this,G);var AKU=0;var ALJ=0;if(!!this.JS){AKU=this.AzB(A._GetAutoObject(
A.Device.Helper).ADm((F=this.JS,F[1].call(F[0]))));ALJ=this.AzB(A._GetAutoObject(
A.Device.Helper).ADl((F=this.JS,F[1].call(F[0]))));}this.F0.H(A.abP(this.F0.M,0)
);this.F0.H([].concat(this.F0.M.slice(0,3),((B=this.M)[3]-B[1])-ALJ));this.IL.H(
A.abO(this.IL.M,(this.F0.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))-2));this.Ej.H(A.abP(
this.Ej.M,this.F0.M[3]));this.Ej.H([].concat(this.Ej.M.slice(0,3),((B=this.M)[3]-
B[1])-AKU));this.IM.H(A.abO(this.IM.M,(this.Ej.M[3]-((((B=this.IM.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ej.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJS:function(AoO){return A._GetAutoObject(A.Device.Converter
).Tf(AoO,0,true);},AKo:function(){return A._GetAutoObject(A.acj.DV).AaC();},Anv:
function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([this,this.AiM],this.JS
,0);this.JS=E;if(!!E)A.zX([this,this.AiM],E,0);if(!!E)A.pe([this,this.AiM],this);
},AiM:function(G){this.Am();},_Init:function(aArg){C.DS._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ey={I:this},0);A.acg.AK._Init.call(this.Ej={I:this},0);A.
acg.AK._Init.call(this.F0={I:this},0);A.acg.AK._Init.call(this.IL={I:this},0);A.
acg.AK._Init.call(this.IM={I:this},0);this.__proto__=C.O6;this.Ey.A1(0xD);this.Ey.
H(Aah);this.Ey.L(A.jb.Gm);this.Ej.A1(0xD);this.Ej.H(Th);this.Ej.L(A.jb.Ia);this.
F0.A1(0xD);this.F0.H(Ro);this.F0.L(A.jb.E1);this.IL.A1(0xD);this.IL.H(Aaj);this.
IL.Awy(A.jb.Ia);this.IL.Awz(A.jb.Ia);this.IL.AwB(A.jb.E1);this.IL.AwA(A.jb.E1);this.
IM.A1(0xD);this.IM.H(Xm);this.IM.Awy(A.jb.Gm);this.IM.Awz(A.jb.Gm);this.IM.AwB(A.
jb.Ia);this.IM.AwA(A.jb.Ia);this.J(this.Ey,-1);this.J(this.Ej,-1);this.J(this.F0
,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DS;this.Ey._Done();this.Ej._Done();this.F0._Done();this.IL._Done();this.
IM._Done();C.DS._Done.call(this);},_ReInit:function(){C.DS._ReInit.call(this);this.
Ey._ReInit();this.Ej._ReInit();this.F0._ReInit();this.IL._ReInit();this.IM._ReInit(
);},_Mark:function(D){var B;C.DS._Mark.call(this,D);if((B=this.JS)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ej)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqX={ET:null,EZ:null,Sf:null,Io:
null,Bb:null,AxP:A.jV,DM:A.jV,AO2:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bb.H([].concat([0,aSize[1]-2],aSize));this.Sf.
H([30,0,aSize[0]-2,30]);this.Io.H(this.Sf.M);if(!!this.ET)this.ET.H([30,this.Sf.
M[3],aSize[0],this.Bb.M[1]]);},Aht:function(E){if(this.AxP===E)return;this.AxP=E;
this.Io.R(E);},T:function(E){if(this.DM===E)return;this.DM=E;this.Sf.R(E);},AFr:
function(E){if(this.AO2===E)return;this.AO2=E;this.BpI(this);},BpI:function(G){var
B;if(!!this.ET)this.HQ(this.ET);this.ET=(C.DS.isPrototypeOf(B=A._NewObject(this.
AO2,0))?B:null);if(!!this.ET){this.ET.H(AZ_);this.ET.AeZ(this.EZ);this.J(this.ET
,0);}},AeZ:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.AeZ(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sf={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0);A.acg.AK._Init.call(this.
Bb={I:this},0);this.__proto__=C.AqX;this.H(AcR);this.As(false);this.Sf.H(AZ$);this.
Sf.A4(0x11);this.Sf.R(LB);this.Sf.L(A.jb.Text);this.Io.A4(0x14);this.Io.R(A.jV);
this.Io.L(A.jb.Text);this.Bb.H(AIH);this.Bb.L(A.jb.Bb);this.J(this.Sf,0);this.J(
this.Io,0);this.J(this.Bb,0);this.Sf.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sf._Done();this.
Io._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sf._ReInit();this.Io._ReInit();this.Bb._ReInit();this.
Sf.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AME={AgB:null,GU:function(E
){var F;C.Gg.GU.call(this,E);if(!!this.AgB)(F=this.AgB,F[2].call(F[0],E));},A9_:
function(E){if(A.aaZ(this.AgB,E))return;if(!!this.AgB)A.z$([this,this.A3y],this.
AgB,0);this.AgB=E;if(!!E)A.zX([this,this.A3y],E,0);if(!!E)A.pe([this,this.A3y],this
);},A3y:function(G){var F;if(!this.AgB)return;(F=this.AgB,F[2].call(F[0],this.FO(
)));},_Init:function(aArg){C.Gg._Init.call(this,aArg);this.__proto__=C.AME;},_Mark:
function(D){var B;C.Gg._Mark.call(this,D);if((B=this.AgB)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUA={Rg:null
,P2:null,X4:null,X5:null,MG:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.BkV),O$,this.MG.toFixed()));},Ab$:function(E){if(
this.MG===E)return;this.MG=E;this.BCq(this);},BCq:function(G){var B;var AJZ=(((B=
this.M)[2]-B[0])/this.MG)|0;this.X4.H(A.abM(this.X4.M,(((B=this.M)[2]-B[0])-(this.
MG*AJZ))+(((AJZ/2)-(((B=this.X4.M)[2]-B[0])/2))|0)));this.X5.H(A.abM(this.X5.M,(((
B=this.M)[2]-B[0])-AJZ)+(((AJZ/2)-(((B=this.X5.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
X4={I:this},0);A.acg.Text._Init.call(this.X5={I:this},0);this.__proto__=C.AUA;this.
H(BD);this.Rg.H(A0a);this.Rg.Ho(5);this.Rg.A4(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AII);this.P2.Ho(5);this.P2.A4(0x14);this.P2.R(A.aaR(A.acf.AhP));this.P2.L(A.jb.
Text);this.X4.H(A0b);this.X4.R(AIJ);this.X4.L(A.jb.Text);this.X5.H(AIK);this.X5.
R(AIJ);this.X5.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.X4,0
);this.J(this.X5,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.X4.
S(A.aaL(A.fl.H5));this.X5.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.X4._Done();this.X5._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.X4._ReInit();this.X5._ReInit();this.P2.R(A.aaR(A.acf.AhP
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Lc={Wa:null,AjF:null,KR:A.jV,MG:0,AaF:false,Init:function(aArg){var A2d=A._NewObject(
C.Kp,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RU()<A2d.
C8(O))A2d.Anl=O+1;this.Wa.CI(A2d);},Aj:function(Ae){C.D_.Aj.call(this,Ae);this.AjF.
Z(this.AaF);if(this.AaF)this.Ba(null);else this.Ba(this.Wa);},CC:function(G){var
B;var F;C.D_.CC.call(this,G);if(!(F=this.Wa.Q,F[1].call(F[0])))(F=this.Wa.Q,F[2].
call(F[0],this.Wa.AC.C8(0)));A.zX([this,this.AI_],[B=A._GetAutoObject(A.Device.Helper
),B.U7,B.U_],0);A.zV([this,this.AI_],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Ame],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId],0);A.pe([this
,this.Ame],this);},E3:function(G){var B;A.z$([this,this.AI_],[B=A._GetAutoObject(
A.Device.Helper),B.U7,B.U_],0);A.z9([this,this.AI_],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Ame],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId
],0);C.D_.E3.call(this,G);},ZC:function(E){if(A.aa0(this.AR,E))return;C.D_.ZC.call(
this,E);this.Wa.AR=E;},Ab$:function(E){if(this.MG===E)return;this.MG=E;A.pe([this
,this.Ame],this);},Bw7:function(Aq){this.Ab$(Aq);},AiU:function(G){},AI_:function(
s){this.AiU(s);},Dl:function(E){if(this.KR===E)return;this.KR=E;this.AjF.R(E);},
Ame:function(G){var Fw=A._NewObject(A.Device.Filter,0);var AzK=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzK.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhP()-((this.MG-1)*86400))-1,true);Fw.CY(AzK);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fw.CY(HY);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fw);},BlR:function(){return this.MG;},_Init:function(aArg
){C.D_._Init.call(this,aArg);C.AU1._Init.call(this.Wa={I:this},0);C.AkO._Init.call(
this.AjF={I:this},0);this.__proto__=C.Lc;this.Wa.H(BD);this.AjF.H(U3);this.J(this.
Wa,0);this.J(this.AjF,0);this.Wa.Au([this,this.BlR,this.Bw7]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D_;this.Wa._Done();this.AjF._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.Wa._ReInit();this.AjF.
_ReInit();},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Wa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANN={Wh:null,YW:null,RatingMode:null,PJ:null,_Init:
function(aArg){C.Ch._Init.call(this,aArg);C.Np._Init.call(this.Wh={I:this},0);C.
BU._Init.call(this.YW={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iu._Init.call(this.PJ={I:this},0);this.__proto__=C.ANN;var B;this.Hk.R(A.
aaR(A.acf.ACH));this.Jf(A.aaR(A.acf.A6m));this.Wh.H(Atl);this.Wh.Ai(true);this.Wh.
T(A.aaR(A.acf.AsW));this.Wh.Bh(true);this.Wh.Ns(23);this.YW.H(A0c);this.YW.Ai(true
);this.YW.T(A.aaR(A.acf.A$G));this.YW.Bh(false);this.PJ.H(A0d);this.PJ.Ai(true);
this.PJ.T(A.aaR(A.acf.A6h));this.PJ.Bh(true);this.PJ.Ge(3);this.PJ.EU(14);this.PJ.
IW(A.aaR(A.acf.Kp)+Atm);this.PJ.Jg(A.aaR(A.acf.GM)+Atm);this.J(this.Wh,0);this.J(
this.YW,0);this.J(this.PJ,0);this.Wh.AR=[B=this.Wh,B.Nv];this.YW.Au([B=this.RatingMode
,B.Ca,B.Cb]);this.YW.CI(this.RatingMode);this.PJ.Au([B=A._GetAutoObject(A.Device.
Device),B.A9c,B.BbO]);},_Done:function(){this.__proto__=C.Ch;this.Wh._Done();this.
YW._Done();this.RatingMode._Done();this.PJ._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.Wh._ReInit();this.YW._ReInit();this.RatingMode.
_ReInit();this.PJ._ReInit();this.Hk.R(A.aaR(A.acf.ACH));this.Jf(A.aaR(A.acf.A6m)
);this.Wh.T(A.aaR(A.acf.AsW));this.YW.T(A.aaR(A.acf.A$G));this.PJ.T(A.aaR(A.acf.
A6h));this.PJ.IW(A.aaR(A.acf.Kp)+Atm);this.PJ.Jg(A.aaR(A.acf.GM)+Atm);},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au_={Init:function(aArg){this.V.Text.A4(0x11);this.V.Text.Ho(10);},Aj:function(
Ae){var B;C.Cp.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20
);var GF=this.Bo.Bw;var FV=A.jb.Aea;var GZ=A.jb.Bm;if(this.Hm){FV=A.jb.Bm;GZ=A.jb.
Text;}if(!Hf){this.Background.L(FV);this.V.L(A.jb.CK);}else if(GF){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FV);this.V.L(GZ);}this.LN=Hf;this.KL=Fu;this.Qv=GF;
},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Au_;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cp._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADu={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PU,B.EC],0);A.pe([this,this.DY],this);},Dg:function(E){C.BR.Dg.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADr));break;case 1:this.Ap.Ax(A.aaL(A.ach.APn));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APp));break;default:A.ab5("%s%e",AyL,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADu;this.Ap.H(AyM);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADr));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADv={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PU,B.EC],0);A.pe([this,this.DY],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADs));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APo));break;case 2:this.Ap.Ax(A.aaL(A.ach.APq));break;default:A.ab5("%s%e"
,AyL,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADv;
this.Ap.H(AyM);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADs));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fy={BW:null,Ax2:A.jV,Dg:function(E){C.JR.Dg.call(
this,E);this.BW.L(E);},KA:function(E){if(this.Ax2===E)return;this.Ax2=E;this.BW.
R(E);},_Init:function(aArg){C.JR._Init.call(this,aArg);C.CG._Init.call(this.BW={
I:this},0);this.__proto__=C.Fy;this.BW.A1(0x34);this.BW.H(Atf);this.BW.A4(0x11);
this.BW.L(A.jb.Text);this.J(this.BW,0);this.BW.S(A.aaL(A.fl.Af));this.BW.AY(A.aaL(
A.fl.Ak));this.BW.Cm(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.JR;this.
BW._Done();C.JR._Done.call(this);},_ReInit:function(){C.JR._ReInit.call(this);this.
BW._ReInit();this.BW.S(A.aaL(A.fl.Af));this.BW.AY(A.aaL(A.fl.Ak));this.BW.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.JR._Mark.call(this,D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOL={WH:function(G){var B;this.Agw();this.AuJ(A.aaR(A.acf.Bj4),[this,this.BoE],[
B=A._GetAutoObject(A.Device.Device),B.A9d,B.BbP]);A._GetAutoObject(C.BS).Fx();this.
I8(A.aaR(A.acf.AVC),[this,this.AT0],5);this.I8(A.aaR(A.acf.AVA),[this,this.ATZ],
7);this.I8(A.aaR(A.acf.An0),[this,this.AwZ],2);this.I8(A.aaR(A.acf.AdU),[this,this.
AE9],1);this.I8(A.aaR(A.acf.AuH),[this,this.AE3],0);A._GetAutoObject(C.BS).Fx();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anf)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DG:function(G){},Aby:function(){return C.ACj;},Abz:function(
){return C.ADC;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7h());},HR:function(G){var F;C.GK.HR.call(this,G);if(this.Ake(
)===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajo((F=this.Fk,F[1].call(
F[0]))));this.N.Cf=[this,this.Aap];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false
);},Agi:function(){A._GetAutoObject(C.A5).Cd(44);},BoE:function(G){A._GetAutoObject(
A.Device.Device).AwP(!A._GetAutoObject(A.Device.Device).AqS);this.An9(this);},An9:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E9();var Aw=Be.DN(
30,3);if(!!Aw)Be.Nw(Aw);if(A._GetAutoObject(A.Device.Device).AqS){var AAq=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A27=A._GetAutoObject(A.Device.Helper).Dr()-
21600;AAq.Initialize(30,3,A27,true);Be.CY(AAq);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GK._Init.call(this,aArg);this.__proto__=C.AOL;
var B;this.Ds(C.APj);this.Dl(A.aaR(A.acf.A8B));this.AwU([B=A._GetAutoObject(A.Device.
Device),B.A9b,B.BbN]);},_ReInit:function(){C.GK._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8B));},_className:"Application::FreshCowListScreen"};C.AOK={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOK;this.Lg.As(false);this.Lg.
Ai(false);this.Lg.Z(false);this.Jw.As(false);this.Jw.Ai(false);this.Jw.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APj={DY:function(G){C.Ku.
DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).AdZ(7));},_Init:
function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APj;},_className:"Application::HeaderFreshCowListFilter"
};C.ADC={JC:null,D1:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JC={I:this},0);C.CG._Init.call(this.D1={I:this},0);this.__proto__=C.ADC;
this.A_u(1);this.JC.H(A0e);this.JC.R((A.aaR(A.acf.Calving)+AcT)+A.aaR(A.acf.Bai)
);this.JC.L(A.jb.Text);this.D1.H(A0f);this.D1.R(A.aaR(A.acf.AEk));this.D1.L(A.jb.
Text);this.J(this.JC,0);this.J(this.D1,0);this.JC.S(A.aaL(A.fl.Ak));this.JC.AY(A.
aaL(A.fl.Bg));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.De;this.JC._Done();this.D1._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JC._ReInit();this.D1._ReInit();this.JC.R((
A.aaR(A.acf.Calving)+AcT)+A.aaR(A.acf.Bai));this.D1.R(A.aaR(A.acf.AEk));this.JC.
S(A.aaL(A.fl.Ak));this.JC.AY(A.aaL(A.fl.Bg));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACj={AG6:null,KU:null,UJ:null,AP:null,A_:null
,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UJ.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A_.H([this.UJ.M[2]-1,0,this.UJ.M[2]+1,aSize[
1]]);this.KU.H([this.UJ.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(
this,Ae);this.KU.L(this.V.AQ);this.UJ.Dg(this.V.AQ);},Ci:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var ID=this.AX.CE(Ad,0);var Mn=this.AX.CE(Ad,1);
var A26=this.AX.CE(Ad,29);var AlC=this.AX.Hw(Ad,28);this.T(Mn.toFixed());this.KU.
R(A26.toFixed());this.UJ.Ab$(A._GetAutoObject(A.Device.Device).AqR+1);this.UJ.Bog(
AlC);this.UJ.R(A._GetAutoObject(A.acj.KQ).AjJ(AlC));A._GetAutoObject(A.Device.Device
).SX(Ad);this.Ap3(ID);this.Axx();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A43:function(G){this.UJ.Acb(this.AG6);},Axx:function(){var Gk=A._GetAutoObject(
A.Device.Device).Bt.B9();this.AG6=A._NewObject(C.Ajs,0);if(Gk>0){var O=Gk-1;while(
O>=0){var D9=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6);this.AtB(this.AG6,O,9,
D9);O=O-1;}}A.pe([this,this.A43],this);},AtB:function(A1y,Ad,A1x,Qi){var Alw=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ad,A1x);if(!!Alw)A1y.OA(Alw,Qi);},Ap3:function(Ac7){var Fw=
A._NewObject(A.Device.Filter,0);var AzK=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzK.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZX(A._GetAutoObject(A.Device.
Device).AqR)-1,true);Fw.CY(AzK);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,Ac7,true);Fw.CY(HY);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fw);},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KU={I:this},0);C.AUv._Init.call(this.UJ={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.ACj;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.J(this.KU,0);this.J(this.UJ,0);this.J(this.AP
,0);this.J(this.A_,0);this.KU.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.KU._Done();this.UJ._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.KU._ReInit(
);this.UJ._ReInit();this.AP._ReInit();this.A_._ReInit();this.KU.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AG6)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUv={AVe:0,Init:function(aArg){},AOS:function(){return A._GetAutoObject(A.Device.
Helper).Aqp(this.AVe);},AOU:function(){return this.AOS()+(this.MG*86400);},Bog:function(
E){if(this.AVe===E)return;this.AVe=E;A.pe([this,this.WR],this);},_Init:function(
aArg){C.Ahy._Init.call(this,aArg);this.__proto__=C.AUv;this.Bb.H(A0g);this.Bod(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dv:function(){if(this.K&&this.K.Dv)return this.K.
Dv.apply(this,arguments);else return C.FactoryResetScope.Bu5.apply(this,arguments
);},Bu5:function(){return 3;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BT(this.C8(aIndex));},_Init:function(aArg
){C.Cn._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BI.
Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);var J$=this._variants();if(J$){this.K={
};J$._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cn;this.FactoryResetScopeToString._Done();C.Cn._Done.call(this);
},_ReInit:function(){C.Cn._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acq.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bhh:false,Init:function(aArg){this.Bhh=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Beo){A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);if(this.Bhh)A._GetAutoObject(A.Device.Device).AZ(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AZ(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASs={WH:function(G){this.
Agw();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.Settings),[this,this.A38]);A._GetAutoObject(
C.BS).Fx();this.AMe();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARH)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){},Aby:function(
){return C.Aqu;},Abz:function(){return C.Aq1;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADe());},HR:function(G){C.
Mo.HR.call(this,G);if(this.Ake()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajo(A._GetAutoObject(A.Device.Converter).AL$(this.L3.ADg())));this.N.Cf=[this,
this.Aap];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false);},Agi:function(){A.
_GetAutoObject(C.A5).Cd(47);},A38:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A5).Cd(89);},_Init:function(aArg){C.Mo._Init.call(this,
aArg);this.__proto__=C.ASs;this.Ds(C.ADw);this.Dl(A.aaR(A.acf.A8x));this.ATw(A._GetAutoObject(
C.Av8));},_ReInit:function(){C.Mo._ReInit.call(this);this.Dl(A.aaR(A.acf.A8x));}
,_className:"Application::NoTransponderListScreen"};C.ASr={_Init:function(aArg){
C.I_._Init.call(this,aArg);this.__proto__=C.ASr;this.KZ.As(false);this.KZ.Ai(false
);this.KZ.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADw={DY:function(G){C.Ku.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).AdZ(8));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.ADw;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB3={AuW:null,Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuW.BT(aIndex);},_Init:
function(aArg){C.Gh._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuW={I:this},0);this.__proto__=C.AB3;},_Done:function(){this.__proto__=
C.Gh;this.AuW._Done();C.Gh._Done.call(this);},_ReInit:function(){C.Gh._ReInit.call(
this);this.AuW._ReInit();},_Mark:function(D){var B;C.Gh._Mark.call(this,D);if((B=
this.AuW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL_={Cp:null,Ad2:null,Init:function(aArg){this.Ba(this.Cp);},Lq:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaN];this.BQ.Cf=null;
this.BQ.Cc=[this,this.A3I];this.BQ.CS(A.jV);this.BQ.Cu(null);this.BQ.C3(A.aaL(A.
ach.AeA));}return this.BQ;},AAG:function(G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null
);if(Aa===this.Cp)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad2)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIL);},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ajh._Init.call(this.
Cp={I:this},0);C.Ajh._Init.call(this.Ad2={I:this},0);this.__proto__=C.AL_;this.H(
Rq);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.H(I1);this.Cp.T(A.aaR(A.acf.
AEu));this.Ad2.H(Qc);this.Ad2.T(A.aaR(A.acf.TC));this.J(this.Cp,0);this.J(this.Ad2
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cp.AR=[this,this.AAG];this.Ad2.AR=[this,this.
AAG];this.Init(aArg);},_Done:function(){this.__proto__=C.Fq;this.Cp._Done();this.
Ad2._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Cp._ReInit();this.Ad2._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.
T(A.aaR(A.acf.AEu));this.Ad2.T(A.aaR(A.acf.TC));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BGp={Undefined:0,BGn:1,BGo:2,IdScanned:3,BFj:4,BEp:5,BE5:6};C.AMm={A$2:function(
){A._GetAutoObject(A.Device.Device).AZ(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfU]);},_Init:function(aArg){C.AuO._Init.call(
this,aArg);this.__proto__=C.AMm;this.Gh.Au(1);this.ATC(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeu={V4:null,V5:null,V6:null,Ag1:null,Ag2:null,Ag3:null,CF:null,Cf:null,Cc:null
,An1:A.jV,An2:A.jV,An3:A.jV,Aq9:0,Aq_:0,Aq$:0,Ahj:0,ZK:false,WS:false,Asp:false,
AsE:false,AsD:false,Ajy:function(Fd){this.CF=Fd.CF;this.Cf=Fd.Cf;this.Cc=Fd.Cc;this.
An1=Fd.An1;this.An2=Fd.An2;this.An3=Fd.An3;this.Ahj=Fd.Ahj;this.V4=Fd.V4;this.V5=
Fd.V5;this.V6=Fd.V6;this.Ag1=Fd.Ag1;this.Ag2=Fd.Ag2;this.Ag3=Fd.Ag3;this.AsD=Fd.
AsD;this.AsE=Fd.AsE;this.Asp=Fd.Asp;this.WS=Fd.WS;this.ZK=Fd.ZK;this.Aq9=Fd.Aq9;
this.Aq_=Fd.Aq_;this.Aq$=Fd.Aq$;},AkN:function(Fd){Fd.CF=this.CF;Fd.Cf=this.Cf;Fd.
Cc=this.Cc;Fd.Hz(this.An1);Fd.E5(this.An2);Fd.CS(this.An3);Fd.AFw(this.Ahj);Fd.AFo(
this.V4);Fd.ArQ(this.V5);Fd.Anz(this.V6);Fd.C3(this.Ag1);Fd.Cu(this.Ag2);Fd.C4(this.
Ag3);Fd.OU(this.AsD);Fd.OV(this.AsE);Fd.Asp=this.Asp;Fd.WS=this.WS;Fd.ZK=this.ZK;
Fd.Bnm(this.Aq9);Fd.ATq(this.Aq_);Fd.A_G(this.Aq$);},_Init:function(aArg){this.__proto__=
C.Aeu;this.V4=A.aaL(A.fl.Ak);this.V5=A.aaL(A.fl.Ak);this.V6=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V4=A.aaL(
A.fl.Ak);this.V5=A.aaL(A.fl.Ak);this.V6=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V5)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag2)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsA._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Ds(C.ADu);},_className:"Application::NewAnimalSetTransponderScreen"};C.B6={Abj:null
,CountryToString:null,Dv:function(){return 40;},C8:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lz(aIndex);},D0:function(A9){return A9;
},H7:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abj)(F=this.Abj,F[2].call(F[0],E));},A17:function(G){var F;if(!!this.Abj)this.Q=(
F=this.Abj,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Ca,this.Cb],0);},AwD:
function(E){if(A.aaZ(this.Abj,E))return;if(!!this.Abj)A.z$([this,this.A17],this.
Abj,0);this.Abj=E;if(!!this.Abj)A.zX([this,this.A17],this.Abj,0);A.pe([this,this.
A17],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.B6;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abj)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O5={AC:null,Q:null,Background:null,Is:null,Ir:null,M$:
0,AM:0,Gs:0,Gd:0,Age:function(G){this.Kh(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Aj:function(
Ae){var B;A.Core.P.Aj.call(this,Ae);var IF=((Ae&0x40)===0x40);if(IF){this.Background.
L(A.jb.AV);this.C0(256);}else{this.Background.L(this.M$);this.C0(256);}},Agd:function(
G){this.Kc(this);},CI:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A36],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A36],E,0);if(!!E)A.pe([this
,this.A36],this);},CW:function(E){if(this.M$===E)return;this.M$=E;this.Am();},Kh:
function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Kc:function(
G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gs)E=this.Gd;if(E>this.Gd)E=this.Gs;if(this.AM===E)return;this.AM=E;
this.Am();},Ge:function(E){if(this.Gs===E)return;this.Gs=E;this.Am();},EU:function(
E){if(this.Gd===E)return;this.Gd=E;this.Am();},C6:function(G){var F;if(!!this.Q)
this.Bx(this.AC.D0((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},A36:function(G){var F;if(!!this.
AC){this.Ge(0);this.EU(this.AC.H7());if(!!this.Q)this.Bx(this.AC.D0((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BF._Init.call(this.Is={
I:this},0);A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.O5;this.H(AIM
);this.Background.H(Alj);this.Is.Filter=4;this.Ir.Filter=5;this.M$=A.jb.CK;this.
J(this.Background,0);this.Is.BG=[this,this.Age];this.Is.D2=[this,this.Age];this.
Ir.BG=[this,this.Agd];this.Ir.D2=[this,this.Agd];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Is._Done();this.Ir._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Is._ReInit();this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.R0={A1Y:A.jV,Aj:function(
Ae){C.Fy.Aj.call(this,Ae);this.T(A.aaR(A.acf.A55));this.KA(this.A1Y);},Ci:function(
G){C.Fy.Ci.call(this,G);var AlC=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlC)this.A1Y=Xn;else this.A1Y=A._GetAutoObject(A.acj.KQ).AjJ(AlC);this.Am();
},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.R0;},_className:
"Application::AnimalInfoItemCalvingDate"};C.R1={A25:0,Aj:function(Ae){C.Fy.Aj.call(
this,Ae);this.T(A.aaR(A.acf.ARF));if(this.A25>0)this.KA(this.A25.toFixed());else
this.KA(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fy.Ci.call(this,G);this.A25=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fy._Init.call(
this,aArg);this.__proto__=C.R1;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dv:function(){return 5;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akt(E);},A2p:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.Ca,
this.Cb],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2p],[B=this.Animal,B.ASJ,B.Akt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2p],[B=this.Animal,B.ASJ,B.Akt],0);A.pe([this,this.A2p],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dv:function(){return 99;},C8:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BT(aIndex);},D0:function(A9){return A9;
},H7:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N7(E);},A1W:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.Ca,this.Cb],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1W],[B=this.Animal,B.Awb,B.N7],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1W],[B=this.Animal,B.Awb,B.N7],0);A.pe([
this,this.A1W],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AR1={Wd:null,YU:null,AeN:null,Init:function(
aArg){this.Ba(this.Wd);},Adu:function(G){var Aa=(C.Cp.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YU)this.ByO();else if(Aa===this.Wd)this.BBG(this);else throw new
Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},BBG:function(G){var B;var F;
var Vt=(C.Amu.isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null
);if(!Vt){A.ab5("%s",A0h);return;}Vt.AKK(this);},ByO:function(){A._GetAutoObject(
A.Device.Helper).W.AGO(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.My._Init.call(this.Wd={I:this},0);C.My._Init.call(this.YU={
I:this},0);C.VZ._Init.call(this.AeN={I:this},0);this.__proto__=C.AR1;var B;this.
H(AcR);this.Wd.H(Qc);this.Wd.As(true);this.Wd.T(A.aaR(A.acf.A$I));this.Wd.Bh(true
);this.YU.H(I1);this.YU.As(true);this.YU.T(A.aaR(A.acf.A5r));this.YU.Bh(true);this.
AeN.H(BD);this.AeN.T(A.aaR(A.acf.AC4));this.AeN.Bh(true);this.J(this.Wd,0);this.
J(this.YU,0);this.J(this.AeN,0);this.Wd.AR=[this,this.Adu];this.YU.AR=[this,this.
Adu];this.AeN.ATd([B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wd._Done();this.YU._Done(
);this.AeN._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wd._ReInit();this.YU._ReInit();this.AeN._ReInit();this.Wd.
T(A.aaR(A.acf.A$I));this.YU.T(A.aaR(A.acf.A5r));this.AeN.T(A.aaR(A.acf.AC4));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VZ={
Aj:function(Ae){C.Uf.Aj.call(this,Ae);var FV=A.jb.CK;var GZ=A.jb.Text;if(this.Hm
){FV=A.jb.Text;GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FV);this.V.L(A.jb.Am3);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KL){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FV);this.V.
L(GZ);}if(this.AmC){this.Mv.Cx(1);this.Mv.L(A.jb.Ia);}else{this.Mv.Cx(0);this.Mv.
L(A.jb.Bm);}},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.VZ;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av1={C_:null,A3:null,AF:
null,Akf:null,QZ:null,EM:null,ASh:LB,Bl:function(aSize){C.Cp.Bl.call(this,aSize);
var FV=A.jb.CK;var GZ=A.jb.Text;if(this.Hm){FV=A.jb.Bm;GZ=A.jb.Text;}this.Background.
L(FV);this.V.L(GZ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Aj:function(Ae){var F,Cv;C.Cp.Aj.call(this
,Ae);this.Akf.L(this.V.AQ);this.QZ.L(this.V.AQ);this.QZ.R(A0i);this.T(((this.ASh+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).An6(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A2$=this.QZ.Afg([(this.QZ.String.length-(F=this.
AF,F[1].call(F[0])))-(Cv=this.A3,Cv[1].call(Cv[0])),0]);var A4v=this.QZ.Afg([this.
QZ.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABt=this.QZ.Dd();this.EM.H([
A2$[0]-1,ABt[1],A4v[0]+1,ABt[3]]);}else this.EM.H(this.QZ.Dd());},DD:function(E){
if(this.C_===E)return;this.C_=E;this.Akf.Ax(E);},OS:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaM],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaM],E,0);if(!!E)A.pe([this,this.AaM],this);},PV:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaO],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaO],E,0);if(!!E)A.pe([this,this.AaO],this);},AaO:function(G){this.Am(
);},AaM:function(G){this.Am();},Ar2:function(E){if(this.ASh===E)return;this.ASh=
E;this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akf={I:this},0);A.acg.Text._Init.call(this.QZ={I:this},0);A.acg.BX._Init.call(
this.EM={I:this},0);this.__proto__=C.Av1;this.H(K2);this.V.A4(0x11);this.Akf.H(O9
);this.QZ.H(A0j);this.EM.H(A0k);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Akf
,0);this.J(this.QZ,0);this.J(this.EM,0);this.QZ.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cp;this.Akf._Done();this.QZ._Done();this.EM._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Akf._ReInit();this.
QZ._ReInit();this.EM._ReInit();this.QZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cp._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUq:0,Init:
function(aArg){var B;A.zX([this,this.Bfe],[B=A._GetAutoObject(A.Device.Device),B.
AEM,B.AIV],0);A.pe([this,this.Bfe],this);},HR:function(G){C.TG.HR.call(this,G);if(
this.AjN)this.N.Cu(A.aaL(A.ach.AD));else this.N.Cu(A.aaL(A.ach.ANn));this.N.C4(A.
aaL(A.ach.Options));this.N.E5(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.A$q];this.
N.Cc=[this,this.WH];this.N.ArQ(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));},M6:function(
G){this.BfA(this);},Ov:function(G){this.BBz(this);},AdR:function(Aic,Aid,BxS){A.
_GetAutoObject(C.BS).ABU(Aic,Aid,[this,this.A9y,this.ATG],BxS);},WH:function(G){
if((A._GetAutoObject(A.Device.Device).D_===3)&&!this.AjN){A._GetAutoObject(C.BS).
TD(A.aaR(A.acf.BiG),[this,this.BoA]);A._GetAutoObject(C.BS).Fx();}this.AdR(A.aaR(
A.acf.Rating),[this,this.AT7],3);this.AdR(A.aaR(A.acf.Afw),[this,this.AT9],2);this.
AdR(A.aaR(A.acf.Temperature),[this,this.AT8],1);this.AdR(A.aaR(A.acf.AdU),[this,
this.Box],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BiK
));A._GetAutoObject(A.Device.Device).Dw(6);},ATG:function(E){if(this.AUq===E)return;
this.AUq=E;A.abo([this,this.A9y,this.ATG],0);},Bfe:function(G){this.ATG(A._GetAutoObject(
A.Device.Device).D_);},A9y:function(){return this.AUq;},_Init:function(aArg){C.TG.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VG:null
,Init:function(aArg){var B;A.zX([this,this.AaL],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);A.pe([this,this.Bhn],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TG.CC.call(this,G);A.pe([this,this.Bhs],this);},AGU:function(G){C.TG.AGU.call(
this,G);if(!!this.Li)this.AhB(this.Li,this.VG);},HR:function(G){C.TG.HR.call(this
,G);this.N.Cu(A.aaL(A.ach.ARc));this.N.C4(A.aaL(A.ach.ARd));if(this.AjN)this.N.ATq(
0);else this.N.ATq(1);this.N.A_G(A._GetAutoObject(A.Device.Converter).BhR(A._GetAutoObject(
A.Device.Device).D_));this.N.E5(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.Bmn];
this.N.Cc=[this,this.BoC];this.N.ArQ(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QL()){this.N.IS.C0(100);this.N.Cf=null;
}else this.N.IS.C0(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Lh.
C0(100);this.N.Cc=null;}else this.N.Lh.C0(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.T4.C0(100);this.N.T5.C0(100);}else{this.N.T4.C0(255);this.N.
T5.C0(255);}},M6:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LJ=A._GetAutoObject(A.Device.Helper).W.CQ;LJ=LJ+1;if(LJ>=A._GetAutoObject(A.
Device.Device).An.B9())LJ=0;A._GetAutoObject(A.Device.Helper).GS(LJ);},Ov:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LJ=A._GetAutoObject(
A.Device.Helper).W.CQ;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},Af$:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A5).Cd(94);},Bmn:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BoC:function(G){this.BfA(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).MC());A.pe([this,this.Bhs
],this);},Bhn:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.VG.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QL()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VG.R(A.aaR(A.acf.AEC));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.Helper).ADf(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VG.R(A.aaR(A.acf.AOd));else this.VG.R(A.aaR(
A.acf.AOc));}else this.VG.R(A.aaR(A.acf.ASo));}else this.VG.Z(false);},Bhs:function(
G){var BCx=A._GetAutoObject(A.Device.Helper).W.Id;var A4y=A._GetAutoObject(A.Device.
Device).An.LZ(0,BCx);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).GS(-1);else if(A4y<0)A._GetAutoObject(A.Device.Helper).GS(0);},
AaL:function(G){this.Bhn(this);this.HR(this);},_Init:function(aArg){C.TG._Init.call(
this,aArg);C.AkO._Init.call(this.VG={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Ds(C.APC);this.VG.H(Fc);this.J(this.VG,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TG;this.VG._Done();C.TG._Done.call(this);},_ReInit:function(){
C.TG._ReInit.call(this);this.VG._ReInit();},_Mark:function(D){var B;C.TG._Mark.call(
this,D);if((B=this.VG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMB={QT:null,We:null,AbN:null,YX:null,Init:function(aArg){var B;var F;this.Ba(
this.QT);if(!!A._GetAutoObject(C.A5).Q){var Vt=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vt){A.ab5("%s",AyN);
return;}else{if(Vt.AjN)this.QT.T(A.aaR(A.acf.Bf));else this.QT.T(A.aaR(A.acf.ET)
);var AzG=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzG||A._GetAutoObject(
A.Device.Helper).Arf(AzG))this.YX.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.We.As(false);this.QT.As(false);}}}},Adu:function(G){var Aa=(C.Cp.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbN)A._GetAutoObject(C.A5).Cd(9);else if(Aa===this.We)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QT)this.BC2();else if(Aa===this.YX)this.
A14();else throw new Error(Ayr);},BC2:function(){var B;var F;var Vt=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vt){A.
ab5("%s",AyN);return;}Vt.A$q(this);},A14:function(){var B;var F;var Vt=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vt){A.
ab5("%s",AyN);return;}Vt.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.My._Init.call(this.QT={I:this},0);C.My._Init.call(this.We={I:this},
0);C.My._Init.call(this.AbN={I:this},0);C.My._Init.call(this.YX={I:this},0);this.
__proto__=C.AMB;this.H(AfF);this.QT.H(Aan);this.QT.As(true);this.QT.T(A.aaR(A.acf.
ET));this.QT.Bh(true);this.We.H(Qc);this.We.As(true);this.We.T(A.aaR(A.acf.AUR));
this.We.Bh(true);this.AbN.H(I1);this.AbN.T(A.aaR(A.acf.AkQ));this.AbN.Bh(true);this.
YX.H(BD);this.YX.T(A.aaR(A.acf.ACp));this.YX.Bh(true);this.J(this.QT,0);this.J(this.
We,0);this.J(this.AbN,0);this.J(this.YX,0);this.QT.AR=[this,this.Adu];this.We.AR=[
this,this.Adu];this.AbN.AR=[this,this.Adu];this.YX.AR=[this,this.Adu];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QT._Done();this.We._Done(
);this.AbN._Done();this.YX._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QT._ReInit();this.We._ReInit();this.AbN.
_ReInit();this.YX._ReInit();this.QT.T(A.aaR(A.acf.ET));this.We.T(A.aaR(A.acf.AUR
));this.AbN.T(A.aaR(A.acf.AkQ));this.YX.T(A.aaR(A.acf.ACp));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jc={T6:null,EA:null,Yu:null,Background:null,Ap:null,Is:null,Ir:null,M$:0,AM:
0,Aj:function(Ae){var B;var F;A.Core.P.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IF=((Ae&0x40)===0x40);if(IF){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C0(256);}else if(Hf){this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.C0(
256);}else{this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.C0(128);}if(!this.
AM)this.Ap.Cx(0);else if(this.AM>0){if(A.aaZ(this.T6,[B=A._GetAutoObject(A.Device.
Device),B.Awl,B.Ay0]))this.Ap.Cx(2);else if(A.aaZ(this.T6,[B=A._GetAutoObject(A.
Device.Device),B.Awk,B.AyZ]))this.Ap.Cx(3);else if(!!this.Yu&&((F=this.Yu,F[1].call(
F[0]))===1))this.Ap.Cx(1);else this.Ap.Cx(0);}else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awl,B.Ay0]))this.Ap.Cx(6);else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awk,B.AyZ]))this.Ap.Cx(7);else if(!!this.Yu&&((F=this.Yu,F[1].
call(F[0]))===1))this.Ap.Cx(5);else this.Ap.Cx(4);},Age:function(G){this.Kh(this
);},Agd:function(G){this.Kc(this);},Kh:function(G){this.Bx(1);},Kc:function(G){this.
Bx(-1);},Bnw:function(E){if(A.aaZ(this.T6,E))return;if(!!this.T6)A.z$([this,this.
A3O],this.T6,0);this.T6=E;if(!!E)A.zX([this,this.A3O],this.T6,0);A.pe([this,this.
A3O],this);},Uu:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agc],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agc],this.EA,0);if(!!E)A.pe([this
,this.Agc],this);},A3O:function(G){var F;if(!!this.T6)this.Bx((F=this.T6,F[1].call(
F[0])));},Agc:function(G){A.pe([this,this.BDd],this);},CW:function(E){if(this.M$===
E)return;this.M$=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T6)(F=this.T6,F[2].call(F[0],E));this.Am();A.abo([this,this.Um,this.
Bx],0);},A_w:function(E){if(A.aaZ(this.Yu,E))return;if(!!this.Yu)A.z$([this,this.
Agc],this.Yu,0);this.Yu=E;if(!!E)A.zX([this,this.Agc],this.Yu,0);if(!!E)A.pe([this
,this.Agc],this);},BDd:function(G){var F,Cv;if(!this.Yu||!this.EA)return;this.Bnw(
A._GetAutoObject(A.Device.Helper).Bd2((F=this.Yu,F[1].call(F[0])),(Cv=this.EA,Cv[
1].call(Cv[0]))));this.Am();},Um:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);
A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.Jc;this.H(Atn);this.Background.
A1(0x3F);this.Background.H(Atn);this.Ap.A1(0x3C);this.Ap.H(Atn);this.Is.Filter=4;
this.Ir.Filter=5;this.M$=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVg));this.Is.BG=[this,this.Age];this.Ir.BG=[this,this.Agd];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Is._Done();this.Ir._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Is._ReInit(
);this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL9={WH:function(G){var B;var F;this.Agw();if(!!A._GetAutoObject(A.Device.Helper
).AOQ((F=this.Fk,F[1].call(F[0])),0,true))this.AuJ(A.aaR(A.acf.A7y),[this,this.BoD
],[B=A._GetAutoObject(A.Device.Device),B.A8P,B.Bbv]);else A._GetAutoObject(C.BS).
Aa1(A.aaR(A.acf.A7y));A._GetAutoObject(C.BS).Fx();this.I8(A.aaR(A.acf.LinkTransponder
),[this,this.BnN],8);this.I8(A.aaR(A.acf.TC),[this,this.Akq],9);this.I8(A.aaR(A.
acf.BaD),[this,this.Bop],10);this.I8(A.aaR(A.acf.AGr),[this,this.ATL],3);this.I8(
A.aaR(A.acf.An0),[this,this.AwZ],2);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DG:function(G){},Aby:function(){return C.Aqu;},Abz:function(){return C.Aq1;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6_((F=this.Fk,F[1].call(F[0]))));},HR:function(G){var F;C.GK.HR.
call(this,G);if(this.Ake()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Cf=[this,this.Aap];this.N.E5(A.jV);}this.
N.OU(false);this.N.OV(false);},Agi:function(){A._GetAutoObject(C.A5).Cd(52);},A3T:
function(G){C.GK.A3T.call(this,G);A.pe([this,this.A0X],this);},BoD:function(G){A.
_GetAutoObject(A.Device.Device).Awr(!A._GetAutoObject(A.Device.Device).Aqc);this.
An9(this);},An9:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E9();A._GetAutoObject(A.Device.Helper).Bo$(Be);if(A._GetAutoObject(A.Device.Device
).Aqc){var A2N=A._GetAutoObject(A.Device.Helper).AOQ((F=this.Fk,F[1].call(F[0]))
,21600,true);Be.CY(A2N);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GK._Init.call(this,aArg);this.__proto__=C.AL9;var B;this.Dl(A.aaR(A.acf.
Av6));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbu]);},_ReInit:function(
){C.GK._ReInit.call(this);this.Dl(A.aaR(A.acf.Av6));},_className:"Application::ActionListScreen"
};C.AL8={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AL8;},
_className:"Application::ActionListFilterScreen"};C.APC={IR:null,IY:null,Bb:null
,ML:A.jV,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9C,B.A_2],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Device
).An,B.Fn,B.Fr],0);},Dg:function(E){C.IP.Dg.call(this,E);this.IY.L(E);},DY:function(
G){C.IP.DY.call(this,G);var AzG=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzG||A._GetAutoObject(A.Device.Helper).Arf(AzG))this.IR.Z(false);else this.IR.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.Aw6(((A._GetAutoObject(A.
Device.Helper).W.CQ+1).toFixed()+AIN)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.Aw6(AIO);},Aw6:function(E){if(this.ML===E)return;this.ML=E;
this.IY.R(E);},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IR={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);A.acg.C9._Init.call(
this.Bb={I:this},0);this.__proto__=C.APC;this.HT.H(Bru);this.DT.H(Brv);this.IR.H(
Brw);this.IR.L(A.jb.Text);this.IY.H(BaO);this.IY.Ho(2);this.IY.Lu(true);this.IY.
A4(0x12);this.IY.R(BaP);this.Bb.DE(Atk);this.Bb.DO(Ali);this.Bb.L(A.jb.Bb);this.
J(this.IR,0);this.J(this.IY,0);this.J(this.Bb,0);this.IR.Ax(A.aaL(A.ach.AeC));this.
IY.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IP;this.
IR._Done();this.IY._Done();this.Bb._Done();C.IP._Done.call(this);},_ReInit:function(
){C.IP._ReInit.call(this);this.IR._ReInit();this.IY._ReInit();this.Bb._ReInit();
this.IY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsK={Text:null,Bl:function(aSize){C.O5.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Aj:function(Ae){var B;var F;C.O5.Aj.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xn);else this.Text.R(this.AC.Gb((F=this.Q,F[1].call(F[0]
))));var IF=((Ae&0x40)===0x40);if(IF)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O5._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsK;this.Text.R(Rr);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O5;this.Text._Done();C.O5.
_Done.call(this);},_ReInit:function(){C.O5._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O5._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arc={C_:null,Bl:function(aSize){C.O5.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Aj:function(Ae){var B;var F;C.O5.Aj.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.ADa(this.AC.D0((F=this.Q,F[1].call(F[
0])))));this.C_.Cx(this.AC.ADc(this.AC.D0((F=this.Q,F[1].call(F[0])))));}var IF=((
Ae&0x40)===0x40);if(IF)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O5._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Arc;this.H(Atn);this.C_.H(AIM);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O5;this.C_._Done();C.O5._Done.call(this);},_ReInit:function(){C.O5._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O5._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au6={V1:null,DirectionOfCountingToString:null,Aeh:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return-1;return aIndex;
},Gb:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},D0:function(A9){return A9;},H7:function(
){return this.Dv()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.V1)(F=
this.V1,F[2].call(F[0],E));},ADa:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv(
)))return null;return this.Aeh.AsL(aIndex);},ADc:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dv()))return-1;return this.Aeh.AsM(aIndex);},A2i:function(G){var F;
if(!!this.V1)this.Q=(F=this.V1,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Ca
,this.Cb],0);},Ae0:function(E){if(A.aaZ(this.V1,E))return;if(!!this.V1)A.z$([this
,this.A2i],this.V1,0);this.V1=E;if(!!this.V1)A.zX([this,this.A2i],this.V1,0);A.pe([
this,this.A2i],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aeh._Init.call(this.Aeh={I:this},0);this.__proto__=C.Au6;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aeh._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aeh._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.V1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeh)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMt={Hu:null,EA:null,AnimalIdGenerationMethodToString:
null,AdY:null,Dv:function(){return 4;},C8:function(aIndex){var F;var A9=-1;if((aIndex<
0)||(aIndex>=this.Dv()))return-1;switch(aIndex){case 0:A9=0;break;case 1:A9=1;break;
case 2:A9=this.Bz3((F=this.EA,F[1].call(F[0])));break;case 3:A9=5;break;default:
throw new Error(Brx+aIndex.toFixed());}return A9;},Gb:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dv()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C8(aIndex));},D0:function(A9){var aIndex=-1;switch(A9){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bry+A9.toFixed());}return aIndex;},H7:function(){return this.
Dv()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},ADa:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return null;
return this.AdY.AsL(this.C8(aIndex));},ADc:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dv()))return-1;return this.AdY.AsM(this.C8(aIndex));},A1M:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Ca
,this.Cb],0);},Bmv:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1M],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1M],this.Hu,0);A.pe([
this,this.A1M],this);},Uu:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agc],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agc],this.EA
,0);A.pe([this,this.Agc],this);},Agc:function(G){A.pe([this,this.ByQ],this);},Bz3:
function(L$){var Rt=0;switch(L$){case 0:Rt=2;break;case 1:Rt=3;break;case 2:Rt=4;
break;default:throw new Error(Brz+L$.toFixed());}return Rt;},ByQ:function(G){var
Be2=this.C8(this.D0(this.Q));if(this.Q!==Be2)this.Au(Be2);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdY._Init.call(this.
AdY={I:this},0);this.__proto__=C.AMt;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdY._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdY._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGQ={FN:null,Aa8:null,Q:null,Fj:null,E$:null,HI:null,Wz:null,AW:null,H3:null
,Kq:null,A8:0,AM:0,Alu:0,Init:function(aArg){var B;A.zX([this,this.Bfd],[B=A._GetAutoObject(
A.Device.Device),B.Anp,B.Aou],0);},Aj:function(Ae){C.Eh.Aj.call(this,Ae);if(this.
A8===1){if(this.Hm){this.AW.FP(A.jb.CK);this.HI.CW(A.jb.CK);this.Wz.CW(A.jb.CK);
this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CV);this.HI.
CW(A.jb.CV);this.Wz.CW(A.jb.CV);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hm){this.AW.FP(A.jb.CK);this.HI.CW(A.jb.CK);this.Wz.CW(A.jb.CK);}else{
this.AW.FP(A.jb.CV);this.HI.CW(A.jb.CV);this.Wz.CW(A.jb.CV);}this.Ba(null);}},H0:
function(G){C.Eh.H0.call(this,G);if(!this.A8)this.FY(this);else this.He(this);},
DL:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(
F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;
default:this.FN.AkN((F=this.N,F[1].call(F[0])));}},FY:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EN){var F;if(!this.A8&&!!this.N)this.FN.Ajy((
F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{if(this.AW.A8_())this.Ba(
this.AW);else this.Ba(this.Wz);if(!this.AM)this.AW.SW(2);else this.AW.SW(7);}break;
default:throw new Error(Ato+this.A8.toFixed());}this.DL(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},C6:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ov:function(G){this.ABl(2);},M6:function(G){this.ABl(
7);},ABl:function(GB){var B;var AzH=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzH){var AAx=(A.Core.P.isPrototypeOf(B=this.QK(AzH,GB,0x15))?B:null);if(!!AAx){
this.Ba(AAx);return true;}}return false;},AoY:function(G){A.pe([this,this.Bfd],this
);},A4J:function(G){var B;var F;if(!this.H3.Hu){this.Kq.Ae0(null);return;}switch((
F=this.H3.Hu,F[1].call(F[0]))){case 0:case 1:this.Kq.Ae0(null);break;case 3:this.
Kq.Ae0([B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E]);break;case 2:this.Kq.Ae0([
B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0F]);break;case 4:case 5:this.Kq.Ae0([
B=A._GetAutoObject(A.Device.Device),B.AER,B.AIZ]);break;default:throw new Error(
BrA+(F=this.H3.Hu,F[1].call(F[0])).toFixed());}},Bfd:function(G){var F;if(!this.
H3.Hu)return;A.pe([this,this.A4J],this);var At3=false;switch((F=this.H3.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At3=true;this.AW.A$i(-1);}break;case 0:
case 1:{At3=false;this.AW.A$i(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyF+(F=this.H3.Hu,F[1].call(F[0])).toFixed());}this.AW.As(At3);this.
HI.As(At3);this.HI.Z(At3);if(((F=this.H3.Hu,F[1].call(F[0]))!==this.Alu)||(At3===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMr((F=this.H3.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bkg((F=this.H3.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Ky(A._GetAutoObject(A.Device.Device).A3);else this.AW.Ky(0);this.Alu=(
F=this.H3.Hu,F[1].call(F[0]));},A99:function(E){var B;if(this.Aa8===E)return;if(
!!this.Aa8){A.z$([this,this.AoY],[B=this.Aa8,B.WG,B.J1],0);A.z$([this,this.AoY],[
B=this.Aa8,B.Ant,B.Nr],0);A.z$([this,this.AoY],[B=this.Aa8,B.ArC,B.PX],0);this.H3.
Uu(null);}this.Aa8=E;if(!!E){A.zX([this,this.AoY],[B=this.Aa8,B.WG,B.J1],0);A.zX([
this,this.AoY],[B=this.Aa8,B.Ant,B.Nr],0);A.zX([this,this.AoY],[B=this.Aa8,B.ArC
,B.PX],0);this.H3.Uu([B=this.Aa8,B.WG,B.J1]);}if(!!E)A.pe([this,this.AoY],this);
},Um:function(){return this.AM;},_Init:function(aArg){C.Eh._Init.call(this,aArg);
A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0
);C.Arc._Init.call(this.HI={I:this},0);C.Arc._Init.call(this.Wz={I:this},0);C.AvR.
_Init.call(this.AW={I:this},0);C.AMt._Init.call(this.H3={I:this},0);C.Au6._Init.
call(this.Kq={I:this},0);this.__proto__=C.AGQ;var B;this.H(Aam);this.V.As(false);
this.V.R(Atd);this.V.L(A.jb.Bm);this.Fj.Filter=6;this.E$.Filter=7;this.HI.H(BrB);
this.HI.As(false);this.Wz.H(BrC);this.AW.H(BrD);this.AW.As(false);this.J(this.HI
,0);this.J(this.Wz,0);this.J(this.AW,0);this.FN=A._NewObject(C.Aeu,0);this.Fj.BG=[
this,this.Ov];this.E$.BG=[this,this.M6];this.HI.CI(this.Kq);this.HI.Au([B=this.Kq
,B.Ca,B.Cb]);this.Wz.CI(this.H3);this.Wz.Au([B=this.H3,B.Ca,B.Cb]);this.AW.Au([this
,this.Um,this.Bx]);this.H3.Bmv([B=A._GetAutoObject(A.Device.Device),B.Anp,B.Aou]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eh;this.Fj._Done();this.E$.
_Done();this.HI._Done();this.Wz._Done();this.AW._Done();this.H3._Done();this.Kq.
_Done();C.Eh._Done.call(this);},_ReInit:function(){C.Eh._ReInit.call(this);this.
Fj._ReInit();this.E$._ReInit();this.HI._ReInit();this.Wz._ReInit();this.AW._ReInit(
);this.H3._ReInit();this.Kq._ReInit();},_Mark:function(D){var B;C.Eh._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={AzZ:null,Fj:null,E$:null,G2:null,
Ga:null,EM:null,Ne:0,AM7:0,ACf:0,UA:0,BaA:-1,AM6:false,Init:function(aArg){A.pe([
this,this.A0_],this);},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.EM.Z(this.
AM6);this.EM.H(A.wC(this.Yz(this.ACf).M,this.Yz((this.ACf+this.AM7)-1).M));},Ov:
function(G){var D6=(A.Core.BF.isPrototypeOf(G)?G:null);var A11=this.BgL(2);if(A11===
false)D6.Mx=true;},M6:function(G){var D6=(A.Core.BF.isPrototypeOf(G)?G:null);var
A11=this.BgL(7);if(A11===false)D6.Mx=true;},BgL:function(GB){var B;var DW=(C.DH.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bd4(DW,GB,true);if(!!DW){this.Ba(DW);this.
AzZ=(C.DH.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adt:function(
G){A.ab5("%s",Ald);},GY:function(s){this.Adt(s);},FP:function(E){if(this.Ne===E)
return;this.Ne=E;this.Ga.CW(E);this.G2.CW(E);},SW:function(GB){var B;switch(GB){
case 2:this.Ba(this.G2);break;case 7:this.Ba(this.Ga);break;default:A.ab5("%s%e"
,BrE,GB);}this.AzZ=(C.DH.isPrototypeOf(B=this.AV)?B:null);},LU:function(G){},A0_:
function(s){this.LU(s);},AFc:function(E){if(this.AM6===E)return;this.AM6=E;this.
Am();},A_d:function(E){if(this.AM7===E)return;this.AM7=E;this.Am();},A_c:function(
E){if(this.ACf===E)return;this.ACf=E;this.Am();},Yz:function(HB){var B7=null;switch(
HB){case-1:case 0:B7=this.Ga;break;case 1:B7=this.G2;break;default:A.ab5("%s",Ah0
);}return B7;},Ky:function(E){if(this.UA===E)return;this.UA=E;this.Amn();},Amn:function(
){A.ab5("%s",Ald);},Bd4:function(Ac1,GB,LN){var B;if(!!Ac1){var Be;if(LN)Be=0x11;
else Be=0x0;switch(GB){case 2:Ac1=(C.DH.isPrototypeOf(B=this.AqM(Ac1,Be))?B:null
);break;case 7:Ac1=(C.DH.isPrototypeOf(B=this.TU(Ac1,Be))?B:null);break;default:
throw new Error(BrF);}}return Ac1;},A$i:function(E){if(this.BaA===E)return;this.
BaA=E;var DW=this.Ga;var A2q;while(!!DW){A2q=!!E;DW.As(A2q);DW.Z(A2q);if(DW===this.
AzZ)this.Ba(DW);DW=this.Bd4(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.
call(this.E$={I:this},0);C.DH._Init.call(this.G2={I:this},0);C.DH._Init.call(this.
Ga={I:this},0);A.acg.BX._Init.call(this.EM={I:this},0);this.__proto__=C.G5;this.
H(BrG);this.Fj.Filter=6;this.E$.Filter=7;this.Ne=A.jb.CK;this.G2.H(E6);this.Ga.H(
BaQ);this.EM.H(BrH);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.G2,0);this.J(this.
Ga,0);this.J(this.EM,0);this.Fj.BG=[this,this.Ov];this.Fj.D2=[this,this.Ov];this.
E$.BG=[this,this.M6];this.E$.D2=[this,this.M6];this.AzZ=this.Ga;this.G2.Dk=[this
,this.GY];this.Ga.Dk=[this,this.GY];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fj._Done();this.E$._Done();this.G2._Done();this.Ga._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fj._ReInit();this.E$._ReInit();this.G2._ReInit();this.Ga._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARi={DB:null,CX:null,Cw:null
,FP:function(E){if(this.Ne===E)return;C.HM.FP.call(this,E);this.Cw.CW(E);this.CX.
CW(E);this.DB.CW(E);},Yz:function(HB){var B7=null;switch(HB){case-1:case 0:B7=this.
Ga;break;case 1:B7=this.Cw;break;case 2:B7=this.CX;break;case 3:B7=this.DB;break;
case 4:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;},_Init:function(aArg
){C.HM._Init.call(this,aArg);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(
this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARi;this.
H(BrI);this.G2.H(Alj);this.DB.H(BaR);this.CX.H(BaS);this.Cw.H(BaT);this.Ga.H(BrJ
);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);this.DB.Dk=[this,this.
GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HM;this.DB._Done();this.CX._Done();this.Cw._Done();C.HM._Done.call(this
);},_ReInit:function(){C.HM._ReInit.call(this);this.DB._ReInit();this.CX._ReInit(
);this.Cw._ReInit();},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.
DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVT={Rc:null,AcK:null,AVS:0,CC:function(G){this.AcK.As(true);},E3:function(G
){this.AcK.As(false);},Bon:function(E){if(this.AVS===E)return;this.AVS=E;this.Rc.
R((((A.aaR(A.acf.AVR)+AcT)+E.toFixed())+BrK)+A.aaR(A.acf.Lf));},Bmg:function(){return this.
AVS;},BBW:function(G){A._GetAutoObject(C.A5).Cd(3);A._GetAutoObject(A.Device.Device
).Anw(1);},_Init:function(aArg){C.X9._Init.call(this,aArg);C.CG._Init.call(this.
Rc={I:this},0);A.acl.Go._Init.call(this.AcK={I:this},0);this.__proto__=C.AVT;this.
AeO.H(BrL);this.UH.R(A.jV);this.Rc.H(BrM);this.Rc.R(A.aaR(A.acf.AVR)+BaU);this.Rc.
L(A.jb.Text);this.AcK.HP(1);this.AcK.Fp(5000);this.AcK.B3=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.AY(A.aaL(A.fl.Ak));this.Rc.Cm(A.aaL(A.fl.Bg));
this.AcK.SJ=[this,this.BBW];this.AcK.Q=[this,this.Bmg,this.Bon];},_Done:function(
){this.__proto__=C.X9;this.Rc._Done();this.AcK._Done();C.X9._Done.call(this);},_ReInit:
function(){C.X9._ReInit.call(this);this.Rc._ReInit();this.AcK._ReInit();this.Rc.
R(A.aaR(A.acf.AVR)+BaU);this.Rc.S(A.aaL(A.fl.Af));this.Rc.AY(A.aaL(A.fl.Ak));this.
Rc.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.X9._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcK)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASc={K8:null,Ln:null,BeR:false,Init:
function(aArg){this.Ba(this.Db);},Ew:function(G){var B;if(!!this.K8)this.K8.Ew(this
);C.WC.Ew.call(this,G);},Agg:function(G){var B;if(!!this.K8)this.K8.Agg(this);C.
WC.Agg.call(this,G);},CC:function(G){var B;if(!this.BeR){this.BeR=true;A.pe([this
,this.A4c],this);}else if(!this.K8){this.K8=A._NewObject(C.ASe,0);this.K8.A_s([this
,this.ABa]);this.LU(this);this.K8.LU(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.WC.CC.call(this,G);}else C.WC.CC.call(this,G
);},Ap2:function(G){var B;if(!!this.K8)this.K8.Ap2(this);},ABa:function(G){var B;
var F;this.LU(this);this.K8.LU(this);A.pe([this,this.AcU],this);var Bes=this.L1;
this.AeX(A._GetAutoObject(A.Device.Helper).Abx(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVQ(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bes);if(Bes)A._GetAutoObject(
A.Device.Helper).W.PX(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).AMr((F=this.Dj.H3.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JO(this.Db);},A4c:function(
G){A._GetAutoObject(C.A5).Cd(79);},_Init:function(aArg){C.WC._Init.call(this,aArg
);C.Rb._Init.call(this.Ln={I:this},0);this.__proto__=C.ASc;var B;this.Ln.H(Ale);
this.Ln.Ai(true);this.Ln.T(A.aaR(A.acf.ACG));this.J(this.Ln,-9);this.J6(this.Gp,-
1);this.Ln.Gt([this,this.D$,this.GT]);this.Ln.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASR,B.AnF]);this.Init(aArg);},_Done:function(){this.__proto__=C.WC;this.Ln.
_Done();C.WC._Done.call(this);},_ReInit:function(){C.WC._ReInit.call(this);this.
Ln._ReInit();this.Ln.T(A.aaR(A.acf.ACG));},_Mark:function(D){var B;C.WC._Mark.call(
this,D);if((B=this.K8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD5={AgO:null,AgP:null,NT:null,NS:null,ES:null,F$:null,Eq:null,DB:null,CX:null,Cw:
null,FP:function(E){if(this.Ne===E)return;C.Lj.FP.call(this,E);this.Cw.CW(E);this.
CX.CW(E);this.DB.CW(E);this.Eq.CW(E);this.F$.CW(E);this.ES.CW(E);this.NS.CW(E);this.
NT.CW(E);this.AgP.CW(E);this.AgO.CW(E);},Yz:function(HB){var B7=null;switch(HB){
case-1:case 0:B7=this.Ga;break;case 1:B7=this.Cw;break;case 2:B7=this.CX;break;case
3:B7=this.DB;break;case 4:B7=this.Eq;break;case 5:B7=this.F$;break;case 6:B7=this.
ES;break;case 7:B7=this.NS;break;case 8:B7=this.NT;break;case 9:B7=this.AgP;break;
case 10:B7=this.AgO;break;case 11:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;
},_Init:function(aArg){C.Lj._Init.call(this,aArg);C.DH._Init.call(this.AgO={I:this
},0);C.DH._Init.call(this.AgP={I:this},0);C.DH._Init.call(this.NT={I:this},0);C.
DH._Init.call(this.NS={I:this},0);C.DH._Init.call(this.ES={I:this},0);C.DH._Init.
call(this.F$={I:this},0);C.DH._Init.call(this.Eq={I:this},0);C.DH._Init.call(this.
DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.AD5;this.H(BrN);this.G2.H(AIP);this.AgO.H(AyO);this.AgP.H(
A0l);this.NT.H(A0m);this.NS.H(A0n);this.ES.H(A0o);this.F$.H(A0p);this.Eq.H(A0q);
this.DB.H(BaV);this.CX.H(A0r);this.Cw.H(BrO);this.Ga.H(BrP);this.J(this.AgO,-2);
this.J(this.AgP,-2);this.J(this.NT,-2);this.J(this.NS,-2);this.J(this.ES,-2);this.
J(this.F$,-2);this.J(this.Eq,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.
Cw,-2);this.AgO.Dk=[this,this.GY];this.AgP.Dk=[this,this.GY];this.NT.Dk=[this,this.
GY];this.NS.Dk=[this,this.GY];this.ES.Dk=[this,this.GY];this.F$.Dk=[this,this.GY
];this.Eq.Dk=[this,this.GY];this.DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];
this.Cw.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.Lj;this.AgO._Done(
);this.AgP._Done();this.NT._Done();this.NS._Done();this.ES._Done();this.F$._Done(
);this.Eq._Done();this.DB._Done();this.CX._Done();this.Cw._Done();C.Lj._Done.call(
this);},_ReInit:function(){C.Lj._ReInit.call(this);this.AgO._ReInit();this.AgP._ReInit(
);this.NT._ReInit();this.NS._ReInit();this.ES._ReInit();this.F$._ReInit();this.Eq.
_ReInit();this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit();},_Mark:function(
D){var B;C.Lj._Mark.call(this,D);if((B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HM={Q:null,AM:0,Aj:function(Ae){C.G5.Aj.call(this
,Ae);this.Amn();},Adt:function(G){var B;var F;var ID=A.jV;var B7=this.G2;while(!
!B7){if(B7.Ez>0)ID=ID+B7.Ez.toFixed();else ID=ID+String.fromCharCode(0x30);B7=(C.
DH.isPrototypeOf(B=this.TU(B7,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(ID,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LU:function(G){},Amn:function(){var B;var F;if(!!this.Q){var DW=this.Ga;
var AdC=this.UA;var A9=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A9>0){DW.L7(A9%
10);A9=(A9/10)|0;}else if(AdC>0)DW.L7(0);else DW.L7(-1);DW=(C.DH.isPrototypeOf(B=
this.AqM(DW,0x11))?B:null);AdC=AdC-1;}}},C6:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)
A.pe([this,this.C6],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HM;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lj={AM:0,Q:null
,Aj:function(Ae){C.G5.Aj.call(this,Ae);this.Amn();},Adt:function(G){var B;var F;
var ID=A.jV;var B7=this.G2;while(!!B7){if(B7.Ez>0)ID=ID+B7.Ez.toFixed();else ID=
ID+String.fromCharCode(0x30);B7=(C.DH.isPrototypeOf(B=this.TU(B7,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(ID,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LU:function(G){},Amn:function(){var B;
var F;if(!!this.Q){var DW=this.Ga;var AdC=this.UA;var A9=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A9>0){DW.L7((A9%10)|0);A9=Math.trunc(A9/10);}else if(AdC>0)DW.
L7(0);else DW.L7(-1);DW=(C.DH.isPrototypeOf(B=this.AqM(DW,0x11))?B:null);AdC=AdC-
1;}}},C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G5._Init.call(
this,aArg);this.__proto__=C.Lj;},_Mark:function(D){var B;C.G5._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvR={Eq:null,DB:null,CX:null,Cw:null,FP:function(E){if(this.Ne===E)return;C.
HM.FP.call(this,E);this.Cw.CW(E);this.CX.CW(E);this.DB.CW(E);this.Eq.CW(E);},Yz:
function(HB){var B7=null;switch(HB){case-1:case 0:B7=this.Ga;break;case 1:B7=this.
Cw;break;case 2:B7=this.CX;break;case 3:B7=this.DB;break;case 4:B7=this.Eq;break;
case 5:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;},_Init:function(aArg
){C.HM._Init.call(this,aArg);C.DH._Init.call(this.Eq={I:this},0);C.DH._Init.call(
this.DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={
I:this},0);this.__proto__=C.AvR;this.H(Ayv);this.G2.H(AHV);this.Eq.H(AHW);this.DB.
H(AHX);this.CX.H(AHY);this.Cw.H(AHZ);this.Ga.H(AH0);this.EM.H(BaW);this.J(this.Eq
,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);this.Eq.Dk=[this,this.
GY];this.DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY
];},_Done:function(){this.__proto__=C.HM;this.Eq._Done();this.DB._Done();this.CX.
_Done();this.Cw._Done();C.HM._Done.call(this);},_ReInit:function(){C.HM._ReInit.
call(this);this.Eq._ReInit();this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit(
);},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUZ={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BpB(0);this.AttributeSet.BpC(1);this.AttributeSet.BpD(4);},Aj:function(Ae){var B;
C.BU.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var IF=((
Ae&0x40)===0x40);var GF=this.Bo.Bw;var FV=A.jb.CK;var GZ=A.jb.Text;if(this.Hm){FV=
A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CV);this.V.L(A.jb.CK);this.
AttributeSet.Ahn(A.jb.CK);}else if(GF){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahn(A.jb.Bm);}else if(IF){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahn(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.
Am3);this.V.L(A.jb.Bm);this.AttributeSet.Ahn(A.jb.Bm);}else{this.Background.L(FV
);this.V.L(GZ);this.AttributeSet.Ahn(GZ);}this.LN=Hf;this.KL=Fu;this.Qv=GF;this.
Ape=IF;},Hn:function(G){var B;var Gj=this.DC.G6;var CA=(A.acg.AuU.isPrototypeOf(
B=this.DC.Cj)?B:null);CA.A9$(this.AttributeSet);CA.A4(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzU(this.AC.Gb(Gj)));else CA.R(Xn);CA.H(A.abK(CA.M,[this.DC.Wi,(B=this.
DC.M)[3]-B[1]]));},BzU:function(Byf){var AAW=Byf;AAW=A._GetAutoObject(A.Device.Helper
).MO(AAW,BrQ,BrR);AAW=A._GetAutoObject(A.Device.Helper).MO(AAW,BrS,BrT);return BrU+
AAW;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUZ;this.DC.H(BrV);this.DC.JD(2);
this.DC.N8(A.acg.AuU);this.AttributeSet.Ahn(this.V.AQ);this.AttributeSet.Bne(A.aaL(
A.fl.AOH));this.AttributeSet.A_D(A.aaL(A.fl.Ak));this.AttributeSet.Ahq(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BU;this.AttributeSet._Done(
);C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_D(A.aaL(A.fl.Ak));this.AttributeSet.Ahq(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsA._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Ds(C.ADv);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dv:function(){return 14;},C8:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gb:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BT(aIndex
);},D0:function(A9){return A9;},H7:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OY={FN:null,EnumToCodeset:
null,JB:null,A8:0,Number:0,Aj:function(Ae){C.BU.Aj.call(this,Ae);if(this.A8===1){
if(this.Hm){this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},Bx:function(E){C.BU.Bx.call(this,E);var BAT=this.
EnumToCodeset.AmF(this.Number);var Be1=this.AC.C8(this.AM);if(BAT!==Be1){this.AFL(
this.EnumToCodeset.Aek(Be1));A.abo([this,this.ASS,this.AFL],0);}},DL:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C3(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[
this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:
this.FN.AkN((F=this.N,F[1].call(F[0])));}},FY:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EN){var F;if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(
F[0])));this.A8=EN;if((this.A8<0)||(this.A8>1))this.A8=0;this.DL(this);if(!this.
A8)this.Ba(null);else this.A2D();this.Am();},AFL:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqU()>E)E=this.EnumToCodeset.
AqU();if(this.EnumToCodeset.H7()<E)E=this.EnumToCodeset.H7();}this.Number=E;var BP=
this.AM;if(!!this.EnumToCodeset){var BzH=this.EnumToCodeset.AmF(E);this.Bx(this.
AC.D0(BzH));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C8(this.AM)));A.abo(this.Q,0);}}},Any:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vh:function(G){this.Ex(this.A8+1);},A2D:function(){A.ab5(
"%s",BrW);},ASS:function(){return this.Number;},_Init:function(aArg){C.BU._Init.
call(this,aArg);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.OY;this.
JB.Filter=1;this.FN=A._NewObject(C.Aeu,0);this.JB.BG=[this,this.Vh];},_Done:function(
){this.__proto__=C.BU;this.JB._Done();C.BU._Done.call(this);},_ReInit:function(){
C.BU._ReInit.call(this);this.JB._ReInit();},_Mark:function(D){var B;C.BU._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeV={Text:null,Aj:function(
Ae){C.Em.Aj.call(this,Ae);this.Text.L(this.AC7);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaO:function(G){A.pe([this,this.Agb],this);},AaM:function(G){A.pe([this,this.
Agb],this);},Al0:function(G){A.pe([this,this.Agb],this);},Agb:function(G){if((!this.
In||!this.A3)||!this.AF)return;},_Init:function(aArg){C.Em._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeV;this.Text.A1(0x3F
);this.Text.H(As_);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Em;this.Text._Done();C.Em.
_Done.call(this);},_ReInit:function(){C.Em._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.Em._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR7={GJ:0,B6:null,AW:null,E_:null,
Jc:null,CountryToString:null,Ld:0,Mg:false,Init:function(aArg){A.zX([this,this.MT
],[this,this.SK,this.Ls],0);},Aj:function(Ae){C.Em.Aj.call(this,Ae);this.Jc.Z(this.
Afq);this.AW.FP(this.LX);this.E_.CW(this.LX);this.Jc.CW(this.LX);},DL:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(
F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Ld));(F=this.N,
F[1].call(F[0])).Cc=null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ex:function(EN){var Tt=this.
A8;this.A8=EN;if(this.A8<0)this.A8=0;else if(this.A8>this.RN)this.A8=this.RN;if((
this.A8===1)&&!this.Afq)this.A8=2;switch(this.A8){case 0:{this.Ba(null);if(!this.
GJ)this.Ls(0);}break;case 1:this.Ba(this.Jc);break;case 2:this.Ba(this.E_);break;
case 3:{this.Ba(this.AW);if(!this.GJ||(Tt>0))this.AW.SW(2);else this.AW.SW(7);}break;
default:throw new Error(Ato+this.A8.toFixed());}C.Em.Ex.call(this,this.A8);},Apm:
function(G){this.Jc.Uu(this.EA);},AaO:function(G){var F;this.AW.A_c((F=this.AF,F[
1].call(F[0])));},AaM:function(G){var F;this.AW.A_d((F=this.A3,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mg=true;this.SN(A._GetAutoObject(
A.Device.Helper).TT(E,0,12));this.Ls(A._GetAutoObject(A.Device.Converter).S_(E));
this.Mg=false;if(!!E)this.AW.Ky(12);else this.AW.Ky(0);this.Am();},Al0:function(
G){A.pe([this,this.Agb],this);},FY:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADk());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjK:function(){return this.
GJ;},AjM:function(){return 999999999999;},Ls:function(E){if(this.Ld===E)return;this.
Ld=E;if(this.Mg===false)A.pe([this,this.Vv],this);A.abo([this,this.SK,this.Ls],0
);},SN:function(E){if(this.GJ===E)return;this.GJ=E;if(this.Mg===false)A.pe([this
,this.Vv],this);A.abo([this,this.Ab4,this.SN],0);},Vv:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.Ld),3,10)+A.abm(this.GJ,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agb:function(G){var F;if((!this.In||
!this.A3)||!this.AF)return;if(!(F=this.In,F[1].call(F[0])))this.AW.AFc(true);else
this.AW.AFc(false);},SK:function(){return this.Ld;},Ab4:function(){return this.GJ;
},_Init:function(aArg){C.Em._Init.call(this,aArg);C.B6._Init.call(this.B6={I:this
},0);C.AD5._Init.call(this.AW={I:this},0);C.AsK._Init.call(this.E_={I:this},0);C.
Jc._Init.call(this.Jc={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR7;var B;this.RN=3;this.AW.H(BrX);this.E_.H(BaX);this.
Jc.H(BaY);this.J(this.AW,0);this.J(this.E_,0);this.J(this.Jc,0);this.B6.AwD([this
,this.SK,this.Ls]);this.AW.Au([this,this.Ab4,this.SN]);this.E_.CI(this.B6);this.
E_.Au([B=this.B6,B.Ca,B.Cb]);this.Jc.A_w([B=A._GetAutoObject(A.Device.Device),B.
Awf,B.AyW]);this.Init(aArg);},_Done:function(){this.__proto__=C.Em;this.B6._Done(
);this.AW._Done();this.E_._Done();this.Jc._Done();this.CountryToString._Done();C.
Em._Done.call(this);},_ReInit:function(){C.Em._ReInit.call(this);this.B6._ReInit(
);this.AW._ReInit();this.E_._ReInit();this.Jc._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Em._Mark.call(this,D);if((B=this.B6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR6={GJ:0,B6:null,AW:null,YO:null,Kv:null,E_:null,Jc:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PA:0,Ld:0,Mg:false,Init:function(aArg){A.
zX([this,this.MT],[this,this.PU,this.EC],0);A.zX([this,this.MT],[this,this.SK,this.
Ls],0);A.zX([this,this.MT],[this,this.Anr,this.Ahr],0);},Aj:function(Ae){C.Em.Aj.
call(this,Ae);this.Jc.Z(this.Afq);this.AW.FP(this.LX);this.YO.FP(this.LX);this.Kv.
FP(this.LX);this.E_.CW(this.LX);this.Jc.CW(this.LX);},DL:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Ld));(F=this.N,F[1].call(F[0]
)).Cc=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGZ)+A.aaR(A.acf.Colon))+AcT)+A.aaR(A.
acf.Bia));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGZ)+A.aaR(A.
acf.Colon))+AcT)+A.aaR(A.acf.BpG));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AGZ)+A.aaR(A.acf.Colon))+AcT)+A.aaR(A.acf.Bjb));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AGZ)+A.aaR(A.acf.Colon))+AcT)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cc=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0]
)).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0
])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EV)+Ayk)+this.GermanStateToString.Lz(
A._GetAutoObject(A.Device.Converter).AC_(this.PA)));(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[
1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ex:function(EN){var Tt=this.A8;if(EN<
0)EN=0;else if(EN>this.RN)EN=this.RN;if((EN===1)&&!this.Afq)EN=2;switch(EN){case
0:{this.Ba(null);if((!this.GJ&&!this.AnimalType)&&!this.PA)this.Ls(0);}break;case
1:this.Ba(this.Jc);break;case 2:this.Ba(this.E_);break;case 3:if(!Tt)A.pe([this,
this.BB_],this);else this.Ba(this.YO);break;case 4:this.Ba(this.Kv);break;case 5:
if(((Tt===4)&&!this.PA)&&!this.GJ)return;else{this.Ba(this.AW);if(!this.GJ||(Tt>
0))this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(Ato+EN.toFixed(
));}this.A8=EN;C.Em.Ex.call(this,this.A8);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mg=true;this.SN(A._GetAutoObject(A.Device.Helper).TT(E,0,8));this.
Ahr(A._GetAutoObject(A.Device.Converter).Ban(E));this.EC(A._GetAutoObject(A.Device.
Converter).Bam(E));this.Ls(A._GetAutoObject(A.Device.Converter).S_(E));this.Mg=false;
if(!!this.AM){this.YO.Ky(2);this.Kv.Ky(2);this.AW.Ky(8);}else{this.YO.Ky(0);this.
Kv.Ky(0);this.AW.Ky(0);}this.Am();},Apm:function(G){this.Jc.Uu(this.EA);},AaO:function(
G){var F;this.AW.A_c((F=this.AF,F[1].call(F[0])));},AaM:function(G){var F;this.AW.
A_d((F=this.A3,F[1].call(F[0])));},Al0:function(G){A.pe([this,this.Agb],this);},
FY:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADk());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RN);},AjK:function(){return this.GJ;
},AjM:function(){return 99999999;},Ls:function(E){if(this.Ld===E)return;this.Ld=
E;if(this.Mg===false)A.pe([this,this.Vv],this);A.abo([this,this.SK,this.Ls],0);}
,SN:function(E){if(this.GJ===E)return;this.GJ=E;if(this.Mg===false)A.pe([this,this.
Vv],this);A.abo([this,this.Ab4,this.SN],0);},Vv:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.Ld),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PA,2,10))+A.abm(this.GJ,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agb:function(G){var F;if((!this.In||!this.A3)||!this.AF)return;if(!(F=this.
In,F[1].call(F[0])))this.AW.AFc(true);else this.AW.AFc(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mg===false)A.pe([this,this.
Vv],this);A.abo([this,this.PU,this.EC],0);},Ahr:function(E){if(this.PA===E)return;
this.PA=E;if(this.Mg===false)A.pe([this,this.Vv],this);A.abo([this,this.Anr,this.
Ahr],0);},BB_:function(G){var F;if(!!this.JS){var Ig=(F=this.JS,F[1].call(F[0]));
var A1N=0;switch(Ig){case 0:case 1:A1N=0;break;case 2:A1N=1;break;default:A.ab5(
"%s%e",Alc,Ig);}this.EC(A1N);}if(!this.PA)this.Ex(4);else this.Ex(5);},SK:function(
){return this.Ld;},Ab4:function(){return this.GJ;},PU:function(){return this.AnimalType;
},Anr:function(){return this.PA;},_Init:function(aArg){C.Em._Init.call(this,aArg
);C.B6._Init.call(this.B6={I:this},0);C.ARj._Init.call(this.AW={I:this},0);C.AvQ.
_Init.call(this.YO={I:this},0);C.AvQ._Init.call(this.Kv={I:this},0);C.AsK._Init.
call(this.E_={I:this},0);C.Jc._Init.call(this.Jc={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR6;var B;this.RN=5;this.AW.H(
BrY);this.YO.H(BrZ);this.YO.EU(2);this.Kv.H(Br0);this.Kv.EU(16);this.E_.H(BaX);this.
Jc.H(BaY);this.J(this.AW,0);this.J(this.YO,0);this.J(this.Kv,0);this.J(this.E_,0
);this.J(this.Jc,0);this.B6.AwD([this,this.SK,this.Ls]);this.AW.Au([this,this.Ab4
,this.SN]);this.YO.Au([this,this.PU,this.EC]);this.Kv.Au([this,this.Anr,this.Ahr
]);this.E_.CI(this.B6);this.E_.Au([B=this.B6,B.Ca,B.Cb]);this.Jc.A_w([B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyW]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Em;this.B6._Done();this.AW._Done();this.YO._Done();this.Kv._Done();this.E_._Done(
);this.Jc._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Em._Done.call(this);},_ReInit:function(){C.Em._ReInit.call(this);this.B6._ReInit(
);this.AW._ReInit();this.YO._ReInit();this.Kv._ReInit();this.E_._ReInit();this.Jc.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Em._Mark.call(this,D);if((B=this.B6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Em={AM:0,Awq:null,OM:null,
Q:null,EA:null,A3:null,AF:null,In:null,N:null,JS:null,Fj:null,E$:null,AC7:0,LX:0
,A8:0,RN:0,Afq:true,Init:function(aArg){A.pe([this,this.LU],this);},Aj:function(
Ae){A.Core.P.Aj.call(this,Ae);if(!this.A8)this.Ba(null);},Bng:function(E){if(this.
AC7===E)return;this.AC7=E;this.Am();},WJ:function(E){if(this.LX===E)return;this.
LX=E;this.Am();},DL:function(G){A.ab5("%s",Ald);},MT:function(s){this.DL(s);},Ex:
function(EN){A.pe([this,this.MT],this);A.pe(this.Awq,this);if(!EN)A.pe(this.OM,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);}
,C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aot);},Ov:function(G){if(this.A8>1)this.Ex(this.A8-1);},M6:function(
G){if((this.A8>0)&&(this.A8<this.RN))this.Ex(this.A8+1);},Uu:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A01],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A01],this.EA,0);A.pe([this,this.A01],this);},Apm:function(G){},A01:
function(s){this.Apm(s);},OS:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A05],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A05],E,0);if(!
!E)A.pe([this,this.A05],this);},PV:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A07],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A07],E,0);if(
!!E)A.pe([this,this.A07],this);},AaO:function(G){},A07:function(s){this.AaO(s);}
,AaM:function(G){},A05:function(s){this.AaM(s);},Us:function(E){if(A.aaZ(this.In
,E))return;if(!!this.In)A.z$([this,this.A04],this.In,0);this.In=E;if(!!E)A.zX([this
,this.A04],E,0);if(!!E)A.pe([this,this.A04],this);},Al0:function(G){},A04:function(
s){this.Al0(s);},FY:function(G){A.ab5("%s",BaZ);},BHj:function(s){this.FY(s);},He:
function(G){this.Ex(0);},AjK:function(){A.ab5("%s",Aot);return 0;},AjM:function(
){A.ab5("%s",Aot);return 0;},LU:function(G){},Anv:function(E){if(A.aaZ(this.JS,E
))return;if(!!this.JS)A.z$([this,this.AoX],this.JS,0);this.JS=E;if(!!E)A.zX([this
,this.AoX],this.JS,0);A.pe([this,this.AoX],this);},AoX:function(G){},AFs:function(
E){if(A.aa0(this.OM,E))return;this.OM=E;},AFX:function(E){if(this.Afq===E)return;
this.Afq=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={I:this},0);this.
__proto__=C.Em;this.H(As_);this.AC7=A.jb.Text;this.LX=A.jb.CV;this.Fj.Filter=6;this.
E$.Filter=7;this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fj._Done();this.E$._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fj._ReInit(
);this.E$._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JS)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dq:null,FN:
null,OM:null,EA:null,A3:null,AF:null,In:null,Q:null,JS:null,AEA:-1,Afq:true,AOb:
false,AUi:false,Asm:true,Init:function(aArg){A.pe([this,this.ABG],this);},Aj:function(
Ae){C.Eh.Aj.call(this,Ae);if(!this.Dq)return;if(this.Dq.A8>0){if(this.Hm){this.Dq.
WJ(A.jb.CK);this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.Dq.WJ(A.jb.
CV);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hm)this.Dq.WJ(
A.jb.CK);else this.Dq.WJ(A.jb.CV);this.Dq.Bng(this.V.AQ);}},H0:function(G){C.Eh.
H0.call(this,G);if(!this.Dq)return;if(!this.Dq.A8)this.FY(this);else this.He(this
);},Gt:function(E){C.Eh.Gt.call(this,E);if(!!this.Dq)this.Dq.N=E;},Uu:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apm],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apm],this.EA,0);A.pe([this,this.Apm],this);},Apm:function(
G){if(!!this.Dq)this.Dq.Uu(this.EA);},OS:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dq)this.Dq.OS(E);},PV:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PV(E);},Us:function(E){if(A.aaZ(this.In,E))return;
this.In=E;if(!!this.Dq)this.Dq.Us(E);},BCD:function(G){var AAC=0;if(!!this.Dq){AAC=
this.Dq.A8;this.Dq.N=null;this.HQ(this.Dq);}switch(this.AEA){case 0:this.Dq=A._NewObject(
C.AeV,0);break;case 1:this.Dq=A._NewObject(C.AR7,0);break;case 2:this.Dq=A._NewObject(
C.AR6,0);break;case 3:this.Dq=A._NewObject(C.AUk,0);break;case 4:this.Dq=A._NewObject(
C.AUj,0);break;case 5:this.Dq=A._NewObject(C.AR8,0);break;default:throw new Error(
Br1+this.AEA.toFixed());}this.J(this.Dq,0);this.Dq.Anv(this.JS);this.Dq.H(Br2);this.
Dq.N=this.N;this.Dq.Uu(this.EA);this.Dq.Awq=[this,this.Awq];this.Dq.Au([this,this.
Um,this.Bx]);this.Dq.Us(this.In);this.Dq.OS(this.A3);this.Dq.PV(this.AF);this.Dq.
AFs(this.OM);this.Dq.AFX(this.Afq);if(AAC>0)this.Dq.Ex(AAC);this.Ba(this.Dq);this.
Am();},FY:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FN.Ajy((F=this.
N,F[1].call(F[0])));else this.FN=A._NewObject(C.Aeu,0);this.Dq.FY(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjK:function(){if(!this.Dq)return 0;return this.
Dq.AjK();},AjM:function(){if(!this.Dq)return 0;return this.Dq.AjM();},C6:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABG],this);},BnV:function(
E){if(this.AEA===E)return;this.AEA=E;A.pe([this,this.BCD],this);},Ar3:function(E
){if(this.Asm===E)return;this.Asm=E;A.pe([this,this.ABG],this);},ABG:function(G){
var Apx;if(this.Asm){if(this.AOb)Apx=5;else Apx=0;}else if(this.AUi){if(A._GetAutoObject(
A.Device.Converter).S_(this.AM)===10)Apx=4;else Apx=3;}else if(A._GetAutoObject(
A.Device.Converter).S_(this.AM)===10)Apx=2;else Apx=1;this.BnV(Apx);},Awq:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A8)this.FN.AkN((F=this.N,F[1].call(F[
0])));this.Am();},Anv:function(E){if(A.aaZ(this.JS,E))return;if(!!this.JS)A.z$([
this,this.AoX],this.JS,0);this.JS=E;if(!!E)A.zX([this,this.AoX],this.JS,0);A.pe([
this,this.AoX],this);},AoX:function(G){if(!!this.Dq)this.Dq.Anv(this.JS);},A_Z:function(
E){if(this.AUi===E)return;this.AUi=E;A.pe([this,this.ABG],this);},BmO:function(E
){if(this.AOb===E)return;this.AOb=E;A.pe([this,this.ABG],this);},AFs:function(E){
if(A.aa0(this.OM,E))return;this.OM=E;if(!!this.Dq)this.Dq.AFs(E);},AFX:function(
E){if(this.Afq===E)return;this.Afq=E;if(!!this.Dq)this.Dq.AFX(E);},Um:function(){
return this.AM;},_Init:function(aArg){C.Eh._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(Aam);this.V.R(Atd);this.V.L(A.jb.Bm);this.FN=A._NewObject(C.Aeu,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eh._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.In
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JS)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARj={ES:null,F$:null,Eq:null,DB:null,CX:null
,Cw:null,FP:function(E){if(this.Ne===E)return;C.Lj.FP.call(this,E);this.Cw.CW(E);
this.CX.CW(E);this.DB.CW(E);this.Eq.CW(E);this.F$.CW(E);this.ES.CW(E);},Yz:function(
HB){var B7=null;switch(HB){case-1:case 0:B7=this.Ga;break;case 1:B7=this.Cw;break;
case 2:B7=this.CX;break;case 3:B7=this.DB;break;case 4:B7=this.Eq;break;case 5:B7=
this.F$;break;case 6:B7=this.ES;break;case 7:B7=this.G2;break;default:A.ab5("%s"
,Ah0);}return B7;},_Init:function(aArg){C.Lj._Init.call(this,aArg);C.DH._Init.call(
this.ES={I:this},0);C.DH._Init.call(this.F$={I:this},0);C.DH._Init.call(this.Eq={
I:this},0);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(this.CX={I:this},
0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARj;this.H(Br3);this.G2.
H(AIP);this.ES.H(AyO);this.F$.H(A0l);this.Eq.H(A0m);this.DB.H(A0n);this.CX.H(A0o
);this.Cw.H(A0p);this.Ga.H(A0q);this.EM.H(BaW);this.J(this.ES,-2);this.J(this.F$
,-2);this.J(this.Eq,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);
this.ES.Dk=[this,this.GY];this.F$.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.
DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:
function(){this.__proto__=C.Lj;this.ES._Done();this.F$._Done();this.Eq._Done();this.
DB._Done();this.CX._Done();this.Cw._Done();C.Lj._Done.call(this);},_ReInit:function(
){C.Lj._ReInit.call(this);this.ES._ReInit();this.F$._ReInit();this.Eq._ReInit();
this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit();},_Mark:function(D){var B;
C.Lj._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvQ={Q:null,G2:null,Ga:null,EM:null,Is:null,Ir:null,Ne:0,UA:0,AM:0,Gd:99,Init:
function(aArg){A.pe([this,this.LU],this);},Aj:function(Ae){var B;A.Core.P.Aj.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yz(0).M,this.Yz(-1).M));var IF=((Ae&
0x40)===0x40);if(IF){this.BgN(A.jb.AV);this.BgO(A.jb.Bm);}else{this.BgN(this.Ne);
this.BgO(A.jb.Text);}this.Amn();},FP:function(E){if(this.Ne===E)return;this.Ne=E;
this.Am();},LU:function(G){},Yz:function(HB){var B7=null;switch(HB){case-1:case 0:
B7=this.Ga;break;case 1:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;},Ky:
function(E){if(this.UA===E)return;this.UA=E;this.Amn();},Amn:function(){var B;var
F;if(!!this.Q){var DW=this.Ga;var AdC=this.UA;var A9=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A9>0){DW.L7(A9%10);A9=(A9/10)|0;}else if(AdC>0)DW.L7(0);else DW.L7(-
1);DW=(C.Ez.isPrototypeOf(B=this.AqM(DW,0x11))?B:null);AdC=AdC-1;}}},Age:function(
G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agd:function(G){var F;var BP=this.
AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C6:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6
],this);},Bx:function(E){if(E<0)E=0;if(E>this.Gd)E=this.Gd;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.Gd===E)return;this.Gd=E;this.Am();}
,BgN:function(aColor){this.Ga.CW(aColor);this.G2.CW(aColor);},BgO:function(aColor
){this.Ga.Zz(aColor);this.G2.Zz(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G2={I:this},0);C.Ez._Init.call(this.Ga={I:this},
0);A.acg.BX._Init.call(this.EM={I:this},0);A.Core.BF._Init.call(this.Is={I:this}
,0);A.Core.BF._Init.call(this.Ir={I:this},0);this.__proto__=C.AvQ;this.H(Br4);this.
Ne=A.jb.CK;this.G2.H(AIP);this.Ga.H(AyO);this.EM.H(AyO);this.EM.Nu(2);this.EM.L(
A.jb.E1);this.Is.Filter=4;this.Ir.Filter=5;this.J(this.G2,0);this.J(this.Ga,0);this.
J(this.EM,0);this.Is.BG=[this,this.Age];this.Is.D2=[this,this.Age];this.Ir.BG=[this
,this.Agd];this.Ir.D2=[this,this.Agd];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G2._Done();this.Ga._Done();this.EM._Done();this.Is._Done();this.Ir.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G2._ReInit();this.Ga._ReInit();this.EM._ReInit();this.Is._ReInit();this.Ir.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgH:
null,Background:null,Text:null,Ez:-1,M$:0,AmP:0,Aqr:false,Aj:function(Ae){A.Core.
P.Aj.call(this,Ae);if(this.Ez<0)this.Text.R(Rr);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M$);this.Text.L(this.AmP);},L7:function(E){if(this.Ez===
E)return;var B7=E;if((B7<0)||(B7>9))B7=-1;this.Ez=B7;this.Am();},CW:function(E){
if(this.M$===E)return;this.M$=E;this.Am();},AeY:function(E){if(this.Aqr===E)return;
this.Aqr=E;this.AgH.As(E);if(E===false)this.Text.Z(true);},Zz:function(E){if(this.
AmP===E)return;this.AmP=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TN._Init.call(this.AgH={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Alj);this.M$=A.jb.CK;this.AgH.Fp(750);this.AgH.Uv(750);this.AgH.Akw(750);
this.AmP=A.jb.Text;this.Background.A1(0x3);this.Background.H(Alj);this.Text.A1(0x3
);this.Text.H(Alj);this.Text.R(Rr);this.J(this.Background,0);this.J(this.Text,0);
this.AgH.Q=[B=this.Text,B.Fo,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgH._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgH._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgH)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FA={Y:null,I$:null,AOj:A.jV,ASk:A.jV,Tn:0,AJT:0,A2t:false,A1Z:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);A.zX([this,this.MT],[B=A._GetAutoObject(A.Device.
Device).An,B.Fn,B.Fr],0);A.pe([this,this.ABB],this);A.pe([this,this.MT],this);},
E3:function(G){var B;C.AB.E3.call(this,G);A.z$([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);},ByC:function(Mc){A._GetAutoObject(A.Device.Helper
).GS(Mc);this.Ap3(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap3:function(L9,AcY){A.ab5("%s",Ald);},Vq:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.Bzz],this);else if(!!Ar&&(Ar.PopupState===5)){this.A1Z=true;this.Ew(this
);}},Bzz:function(G){if(this.Tn>0){this.A1Z=false;this.Ado(this);this.A$n(0);}},
Aiu:function(G){if((this.AJT+1)<this.Tn)this.A$n(this.AJT+1);else A.aaS([this,this.
Bxd],this);},Bxe:function(s){this.Aiu(s);},A$n:function(E){this.AJT=E;if(this.A1Z===
false){this.ByC(E);A.aaS([this,this.Bxe],this);var XR=(this.AJT/this.Tn)*100;A._GetAutoObject(
A.Device.Device).AZ(49,true,A.abk(XR,0,0),0,[this,this.Vq]);}},Aax:function(G){A.
_GetAutoObject(A.Device.Device).AZ(49,false,Br5,0,[this,this.Vq]);this.A2t=true;
A.pe([this,this.ALt],this);},Bxd:function(s){this.Aax(s);},Ado:function(G){this.
I$.Z(true);this.A2t=false;this.ALt(this);},BHd:function(s){this.Ado(s);},AAS:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A7e();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A5).Fz();},A37:function(G){A._GetAutoObject(
C.A5).Cd(84);},DL:function(G){this.N.Z(true);this.N.C3(A.aaL(A.ach.E2));this.N.CF=[
this,this.Ew];this.N.Cu(A.aaL(A.ach.ADU));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arf(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.IS.C0(100);}else{this.N.Cf=[this,this.AAS];this.
N.IS.C0(255);}this.N.C4(A.aaL(A.ach.AeC));this.N.Cc=[this,this.A37];},MT:function(
s){this.DL(s);},ABB:function(G){this.Tn=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Tn>0)A._GetAutoObject(A.Device.Device).AZ(49,true,U6,0,[this,this.Vq]);
else{this.Ado(this);this.Aax(this);}},Aku:function(E){if(this.AOj===E)return;this.
AOj=E;A.pe([this,this.ALt],this);},ALt:function(G){var B;if(this.A2t===false){this.
I$.R(A.jV);return;}var Ao_;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adi=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr],0);this.AAS(this);if(!A._GetAutoObject(A.Device.Device
).An.QL()||!Adi)Ao_=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADf(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ao_=A.aaR(
A.acf.AOd);else Ao_=A.aaR(A.acf.AOc);A._GetAutoObject(A.Device.Device).An.Bk(Adi
);A.zX([this,this.ABB],[B=A._GetAutoObject(A.Device.Device).An,B.Fn,B.Fr],0);}else
Ao_=this.ASk;Ao_=Ao_+(A0s+this.AOj);this.I$.R(Ao_);},Ae9:function(E){if(this.ASk===
E)return;this.ASk=E;A.pe([this,this.ALt],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkO._Init.call(this.I$={
I:this},0);this.__proto__=C.FA;this.Ds(C.AbA);this.Y.H(Fc);this.Y.J0(1);this.I$.
H(Fc);this.J(this.Y,0);this.J(this.I$,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I$._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7P={Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A7P;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvS={K4:null,M4:null,A0:0,Yp:function(){this.K4=null;this.M4=null;this.A0=0;
},OA:function(A9){var Hi;Hi=A._NewObject(C.A7P,0);Hi.A6=A9;if(!this.K4){this.K4=
Hi;this.M4=Hi;this.A0=1;}else{this.M4.Ah=Hi;this.M4=Hi;this.A0=this.A0+1;}},AmX:
function(){var B;var RR=0;var Op=this.K4;while(!!Op){RR+=Op.A6;Op=Op.Ah;}return RR;
},AjL:function(){if(!this.A0)return 0;return this.AmX()/this.A0;},AqW:function(){
var B;if(!this.A0)return 0;var A1T=this.AjL();var Adf=0;var Op=this.K4;while(!!Op
){Adf+=Math.pow(Op.A6-A1T,2);Op=Op.Ah;}Adf/=this.A0;Adf=Math.sqrt(Adf);return Adf;
},_Init:function(aArg){this.__proto__=C.AvS;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOk={Gg:null,Aey:null,Yw:null,C9:null,I$:null,
CP:function(){this.A47(this);},Init:function(aArg){A.zV([this,this.A47],A._GetAutoObject(
A.Device.Device).Ps,0);A.pe([this,this.A47],this);},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},A47:function(G){this.Yw.Ci(-1);this.I$.Z(!this.Gg.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gg._Init.call(this.Gg={I:this},0);C.
Aey._Init.call(this.Aey={I:this},0);C.Yw._Init.call(this.Yw={I:this},0);A.acg.C9.
_Init.call(this.C9={I:this},0);C.AkO._Init.call(this.I$={I:this},0);this.__proto__=
C.AOk;this.N.Z(true);this.Ds(C.APf);this.Gg.H(Atg);this.Gg.N8(C.AmO);this.Aey.H(
I1);this.Yw.H(As$);this.C9.DE(Br6);this.C9.DO(Br7);this.C9.Nu(3);this.C9.L(A.jb.
Text);this.I$.H(Ak$);this.I$.R((A.aaR(A.acf.A8z)+A0s)+A.aaR(A.acf.A6S));this.J(this.
Gg,0);this.J(this.Aey,0);this.J(this.Yw,0);this.J(this.C9,0);this.J(this.I$,0);this.
N.CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));this.Gg.Zy(A._GetAutoObject(A.Device.
Device).Ps);this.Yw.Zy(A._GetAutoObject(A.Device.Device).Ps);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gg._Done();this.Aey._Done();this.Yw._Done();
this.C9._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gg._ReInit();this.Aey._ReInit();this.Yw._ReInit();this.C9.
_ReInit();this.I$._ReInit();this.I$.R((A.aaR(A.acf.A8z)+A0s)+A.aaR(A.acf.A6S));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gg)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOn={Aug:null,Auf:null,Aui:null,Auh:null,Auk:null,Auj:null,Aum:null,Aul:null
,AaQ:null,YF:null,Abs:null,Abr:null,RatedAttribute:0,Init:function(aArg){this.SP(
2);},DG:function(G){var D6=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D6.CO){case
6:switch(this.RatedAttribute){case 2:this.SP(3);break;case 1:this.SP(2);break;case
4:this.SP(1);break;case 3:this.SP(4);break;default:this.SP(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SP(1);break;case 1:this.SP(4);break;case 4:this.
SP(3);break;case 3:this.SP(2);break;default:this.SP(0);}break;default:D6.Mx=true;
}},Ap3:function(L9,AcY){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,AcY,true);Fw.
CY(HY);var AA$=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA$.Initialize(
3,5,0,true);Fw.CY(AA$);L9.Bk(Fw);},Aiu:function(G){var Ap1=0;var A4p=A._GetAutoObject(
A.Device.Device).Bt.B9();var B2=A._NewObject(A.Device.Rating,0);while(Ap1<A4p){B2.
Fl(Ap1,A._GetAutoObject(A.Device.Device).Bt);this.Bd7(B2,0);var BCZ=A._GetAutoObject(
A.Device.Helper).ZX(2);this.Bd7(B2,BCZ);Ap1++;}C.FA.Aiu.call(this,G);},Aax:function(
G){A.pe([this,this.BdK],this);C.FA.Aax.call(this,G);},Ado:function(G){this.Aug=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auf=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auh=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FA.Ado.
call(this,G);},DL:function(G){C.FA.DL.call(this,G);this.N.OU(true);this.N.OV(true
);},Bd7:function(D4,BcF){if(!D4||(D4.Timestamp<BcF))return;if(!BcF){this.Aug.Set(
D4.Appearance,this.Aug.Get(D4.Appearance)+1);this.Aui.Set(D4.Faeces,this.Aui.Get(
D4.Faeces)+1);this.Auk.Set(D4.Feed,this.Auk.Get(D4.Feed)+1);this.Aum.Set(D4.Respiratory
,this.Aum.Get(D4.Respiratory)+1);}else{this.Auf.Set(D4.Appearance,this.Auf.Get(D4.
Appearance)+1);this.Auh.Set(D4.Faeces,this.Auh.Get(D4.Faeces)+1);this.Auj.Set(D4.
Feed,this.Auj.Get(D4.Feed)+1);this.Aul.Set(D4.Respiratory,this.Aul.Get(D4.Respiratory
)+1);}},SP:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YF.KA(this.AaQ.Lz(E));A.pe([this,this.BdK],this);},BdK:function(G){var AaR=null;
var AaS=null;switch(this.RatedAttribute){case 2:{AaR=this.Auf;AaS=this.Aug;}break;
case 4:{AaR=this.Auh;AaS=this.Aui;}break;case 1:{AaR=this.Auj;AaS=this.Auk;}break;
case 0:{AaR=A._NewObject(A.Device.Int32ArrayWrapper,0);AaS=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaR=this.Aul;AaS=this.Aum;}break;default:throw new
Error(Br8+this.RatedAttribute.toFixed());}var AGy=A._NewObject(A.acv.AUC,0);AGy.
OA(AaR.Get(3),A.jb.E1);AGy.OA(AaR.Get(2),A.jb.Ia);AGy.OA(AaR.Get(1),A.jb.Gm);var
AGz=A._NewObject(A.acv.AUC,0);AGz.OA(AaS.Get(3),A.jb.E1);AGz.OA(AaS.Get(2),A.jb.
Ia);AGz.OA(AaS.Get(1),A.jb.Gm);this.Abr.Acb(AGy);this.Abs.Acb(AGz);var A4T=AaR.AmX(
)-AaR.Get(5);var Bgj=0;var Bgh=0;if(A4T>0){Bgj=(AaR.Get(2)/A4T)*100;Bgh=(AaR.Get(
1)/A4T)*100;}var ALg=AaS.AmX()-AaS.Get(5);this.I$.Z(!ALg);var Bgk=0;var Bgi=0;if(
ALg>0){Bgk=(AaS.Get(2)/ALg)*100;Bgi=(AaS.Get(1)/ALg)*100;}this.Abr.A$l(A.abk(Bgj
,0,0)+AfH);this.Abr.A_1(A.abk(Bgh,0,0)+AfH);this.Abs.A$l(A.abk(Bgk,0,0)+AfH);this.
Abs.A_1(A.abk(Bgi,0,0)+AfH);},_Init:function(aArg){C.FA._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaQ={I:this},0);C.NP._Init.call(this.
YF={I:this},0);C.ACX._Init.call(this.Abs={I:this},0);C.ACX._Init.call(this.Abr={
I:this},0);this.__proto__=C.AOn;this.Ds(C.APg);this.Aku(A.aaR(A.acf.A6T));this.Ae9(
A.aaR(A.acf.Anm));this.YF.H(I1);this.YF.Ai(true);this.YF.T(A.aaR(A.acf.Axw)+A.aaR(
A.acf.Colon));this.YF.Bh(false);this.YF.BnT(false);this.Abs.H(Br9);this.Abs.T(A.
aaR(A.acf.AGj));this.Abr.H(Br_);this.Abr.T(A.aaR(A.acf.A7Y));this.I$.H(Ak$);this.
J(this.YF,-1);this.J(this.Abs,-1);this.J(this.Abr,-1);this.Aug=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auf=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FA;this.AaQ._Done();this.YF._Done();this.Abs._Done();this.Abr.
_Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.
AaQ._ReInit();this.YF._ReInit();this.Abs._ReInit();this.Abr._ReInit();this.Aku(A.
aaR(A.acf.A6T));this.Ae9(A.aaR(A.acf.Anm));this.YF.T(A.aaR(A.acf.Axw)+A.aaR(A.acf.
Colon));this.Abs.T(A.aaR(A.acf.AGj));this.Abr.T(A.aaR(A.acf.A7Y));},_Mark:function(
D){var B;C.FA._Mark.call(this,D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Auh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auj)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abs)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOo={Aex:null,US:null,UT:null,Aew:null,UP:null,UQ:null,AJV:0,AJU:0,AJz:0,AJy:
0,Adh:false,CP:function(){this.Aax(this);},Ap3:function(L9,AcY){if(!L9)return;var
Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,AcY,true);Fw.CY(HY);var ABs=A._NewObject(A.Device.Int32FilterCriterion
,0);ABs.Initialize(7,2,0,true);Fw.CY(ABs);L9.Bk(Fw);},Aiu:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJV++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJU++;var Ap1=0;var A4p=A._GetAutoObject(
A.Device.Device).Bt.B9();var Aue;var ABN=0;while(Ap1<A4p){this.Adh=true;Aue=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ap1,9);if(Aue===1)ABN=1;else if((Aue===2)&&(ABN!==1))ABN=
2;Ap1++;}if(ABN===1)this.AJy++;else if(ABN===2)this.AJz++;C.FA.Aiu.call(this,G);
},Aax:function(G){var Bgf=0;var Bgg=0;if(this.Tn>0){Bgf=(this.AJV/this.Tn)*100;Bgg=(
this.AJU/this.Tn)*100;}this.US.KA(((((((A.abk(Bgf,0,0)+AIQ)+this.AJV.toFixed())+
CR)+A.aaR(A.acf.AEH))+CR)+this.Tn.toFixed())+Pa);this.UT.KA(((((((A.abk(Bgg,0,0)+
AIQ)+this.AJU.toFixed())+CR)+A.aaR(A.acf.AEH))+CR)+this.Tn.toFixed())+Pa);var Bgd=
0;var Bge=0;if(this.Tn>0){Bgd=(this.AJz/this.Tn)*100;Bge=(this.AJy/this.Tn)*100;
}this.UP.KA(((((((A.abk(Bgd,0,0)+AIQ)+this.AJz.toFixed())+CR)+A.aaR(A.acf.AEH))+
CR)+this.Tn.toFixed())+Pa);this.UQ.KA(((((((A.abk(Bge,0,0)+AIQ)+this.AJy.toFixed(
))+CR)+A.aaR(A.acf.AEH))+CR)+this.Tn.toFixed())+Pa);this.I$.Z(!this.Adh);C.FA.Aax.
call(this,G);},Ado:function(G){this.AJy=0;this.AJz=0;this.AJU=0;this.AJV=0;this.
Adh=false;C.FA.Ado.call(this,G);},_Init:function(aArg){C.FA._Init.call(this,aArg
);C.Agx._Init.call(this.Aex={I:this},0);C.Ajp._Init.call(this.US={I:this},0);C.Ajp.
_Init.call(this.UT={I:this},0);C.Agx._Init.call(this.Aew={I:this},0);C.Ajp._Init.
call(this.UP={I:this},0);C.Ajp._Init.call(this.UQ={I:this},0);this.__proto__=C.AOo;
this.Ds(C.APh);this.Aku(A.aaR(A.acf.A6U));this.Ae9(A.aaR(A.acf.Arv));this.Aex.H(
I1);this.Aex.Ai(true);this.Aex.T(A.aaR(A.acf.A6Y));this.Aex.Bh(false);this.US.H(
Qc);this.US.Ai(true);this.US.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.
Bh(true);this.US.Akz(2);this.UT.H(Aan);this.UT.Ai(true);this.UT.T(A.aaR(A.acf.AvA
)+A.aaR(A.acf.Colon));this.UT.Bh(true);this.UT.Akz(1);this.Aew.H(Alf);this.Aew.Ai(
true);this.Aew.T(A.aaR(A.acf.A6Z));this.Aew.Bh(false);this.UP.H(Aok);this.UP.Ai(
true);this.UP.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UP.Bh(true);this.
UP.Akz(2);this.UQ.H(As$);this.UQ.Ai(true);this.UQ.T(A.aaR(A.acf.AvA)+A.aaR(A.acf.
Colon));this.UQ.Bh(true);this.UQ.Akz(1);this.J(this.Aex,0);this.J(this.US,0);this.
J(this.UT,0);this.J(this.Aew,0);this.J(this.UP,0);this.J(this.UQ,0);this.US.S(A.
aaL(A.fl.Ak));this.UT.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak));this.UQ.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FA;this.Aex._Done();this.US._Done(
);this.UT._Done();this.Aew._Done();this.UP._Done();this.UQ._Done();C.FA._Done.call(
this);},_ReInit:function(){C.FA._ReInit.call(this);this.Aex._ReInit();this.US._ReInit(
);this.UT._ReInit();this.Aew._ReInit();this.UP._ReInit();this.UQ._ReInit();this.
Aku(A.aaR(A.acf.A6U));this.Ae9(A.aaR(A.acf.Arv));this.Aex.T(A.aaR(A.acf.A6Y));this.
US.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UT.T(A.aaR(A.acf.AvA)+A.aaR(
A.acf.Colon));this.Aew.T(A.aaR(A.acf.A6Z));this.UP.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UQ.T(A.aaR(A.acf.AvA)+A.aaR(A.acf.Colon));this.US.S(A.aaL(A.fl.
Ak));this.UT.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak));this.UQ.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqL={La:null
,Ajd:null,Aje:null,Amo:null,AbE:null,W$:null,AbB:null,Ta:null,AbC:null,Tb:null,AbF:
null,Xa:null,Ay:null,Adc:0,AAD:0,Aps:0,A28:0,BeD:0,CP:function(){this.Aax(this);
},DG:function(G){switch(this.Cr.CO){case 4:{if(this.I$.Fo())return;var QA=this.Y.
Bs[1]+80;this.Y.Gf([this.Y.Bs[0],QA]);this.Y.VF(null,null);}break;case 5:{if(this.
I$.Fo())return;var QA=this.Y.Bs[1]-80;this.Y.Gf([this.Y.Bs[0],QA]);this.Y.VF(null
,null);}break;default:C.FA.DG.call(this,G);}},Ap3:function(L9,AcY){if(!L9)return;
var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,AcY,true);Fw.CY(HY);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fw.CY(Ac_);L9.Bk(Fw);},Aiu:function(G){if(this.Bet(
)){this.La.OA(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arg()){var Qm=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2G=A._GetAutoObject(A.acj.DV).AlA(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajd.
OA(A2G);}}var A3r=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A3r>=0){var BAP=
A._GetAutoObject(A.Device.Device).Bt.ADh(A3r,8);var BAO=A._GetAutoObject(A.Device.
Device).Bt.Hw(A3r,6);var Qm=A._GetAutoObject(A.Device.Helper).Me(BAO,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2G=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAP)/Qm)|0;this.Aje.OA(A2G);}}if((A._GetAutoObject(
A.Device.Helper).W.Arg()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RU()<=180)){var ALE=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tu=A._GetAutoObject(A.Device.
Helper).Me(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BB6=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALE/Tu);this.Amo.OA(BB6);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adc++;this.Aps=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZX(7)){this.AAD++;this.A28=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BeD=A._GetAutoObject(A.Device.Helper).Me(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dr());}}C.FA.Aiu.call(
this,G);},Aax:function(G){var A5e=this.Ajd.AjL()|0;var A5g=this.Aje.AjL()|0;if(this.
Adc>1)A._GetAutoObject(A.Device.Device).AZ(56,true,this.Adc.toFixed(),0,null);if(
this.Adc===1)A._GetAutoObject(A.Device.Device).AZ(53,true,this.Aps.toFixed(),0,null
);if(this.AAD>1)A._GetAutoObject(A.Device.Device).AZ(52,true,this.AAD.toFixed(),
0,null);if(this.AAD===1)A._GetAutoObject(A.Device.Device).AZ(57,true,(this.A28.toFixed(
)+Atc)+this.BeD.toFixed(),0,null);if(this.La.A0>0)this.W$.T(((((((A._GetAutoObject(
A.Device.Converter).Ax7(this.La.AjL()|0,1)+AyP)+A._GetAutoObject(A.Device.Converter
).Ax7(this.La.AqW()|0,1))+CR)+A._GetAutoObject(A.acj.DV).Af5())+AyQ)+this.La.A0.
toFixed())+Pa);else this.W$.T(A.aaR(A.acf.Unknown));if(this.Ajd.A0>0)this.Ta.T(((((((
A._GetAutoObject(A.Device.Converter).Tf(A5e,2,true)+AyP)+A._GetAutoObject(A.Device.
Converter).Tf(this.Ajd.AqW()|0,2,true))+CR)+A._GetAutoObject(A.acj.DV).AaC())+AyQ
)+this.Ajd.A0.toFixed())+Pa);else this.Ta.T(A.aaR(A.acf.Unknown));if(this.Aje.A0>
0)this.Tb.T(((((((A._GetAutoObject(A.Device.Converter).Tf(A5g,2,true)+AyP)+A._GetAutoObject(
A.Device.Converter).Tf(this.Aje.AqW()|0,2,true))+CR)+A._GetAutoObject(A.acj.DV).
AaC())+AyQ)+this.Aje.A0.toFixed())+Pa);else this.Tb.T(A.aaR(A.acf.Unknown));if(this.
Amo.A0>0)this.Xa.T(((((((A.abk(this.Amo.AjL(),0,1)+AyP)+A.abk(this.Amo.AqW(),0,1
))+CR)+A.aaR(A.acf.Biz))+AyQ)+this.Amo.A0.toFixed())+Pa);else this.Xa.T(A.aaR(A.
acf.Unknown));var A5f=0;var A5h=0;var Adh=false;if(this.La.A0>0)Adh=true;var Ig=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKb=A._GetAutoObject(A.Device.
Device).An.Filter.DN(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKb)?AKb:null))Ig=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKb)?AKb:null
).A6;}if(this.Ajd.A0>0){Adh=true;A5f=A._GetAutoObject(A.Device.Converter).BaI(A5e
,Ig);}if(this.Aje.A0>0){Adh=true;A5h=A._GetAutoObject(A.Device.Converter).BaI(A5g
,Ig);}this.Ta.Akz(A5f);this.Tb.Akz(A5h);this.I$.Z(!Adh);C.FA.Aax.call(this,G);},
Ado:function(G){this.La.Yp();this.Ajd.Yp();this.Aje.Yp();this.Amo.Yp();this.Adc=
0;this.AAD=0;this.Aps=0;this.A28=0;C.FA.Ado.call(this,G);},Fh:function(G){var B;
this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Bs[1]);},Bet:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FA._Init.call(this,aArg);C.Agx._Init.call(this.AbE={I:
this},0);C.IK._Init.call(this.W$={I:this},0);C.Agx._Init.call(this.AbB={I:this},
0);C.Ajp._Init.call(this.Ta={I:this},0);C.Agx._Init.call(this.AbC={I:this},0);C.
Ajp._Init.call(this.Tb={I:this},0);C.Agx._Init.call(this.AbF={I:this},0);C.IK._Init.
call(this.Xa={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqL;
this.Ds(C.Avz);this.Aku(A.aaR(A.acf.A6V));this.Ae9(A.aaR(A.acf.Aki));this.AbE.H(
Atl);this.AbE.Ai(true);this.AbE.T(A.aaR(A.acf.A5P));this.AbE.Bh(false);this.AbE.
Ky(5);this.W$.H(A0t);this.W$.Ai(true);this.W$.T(A.jV);this.W$.Bh(true);this.AbB.
H(Ath);this.AbB.Ai(true);this.AbB.T(A.aaR(A.acf.AL3));this.AbB.Bh(false);this.AbB.
Ky(5);this.Ta.H(Ati);this.Ta.Ai(true);this.Ta.T(A.jV);this.Ta.Bh(true);this.Ta.KA(
A.jV);this.AbC.H(Atj);this.AbC.Ai(true);this.AbC.T(A.aaR(A.acf.AuE));this.AbC.Bh(
false);this.AbC.Ky(5);this.Tb.H(Br$);this.Tb.Ai(true);this.Tb.T(A.jV);this.Tb.Bh(
true);this.Tb.KA(A.jV);this.AbF.H(A0u);this.AbF.Ai(true);this.AbF.T(A.aaR(A.acf.
A5X));this.AbF.Bh(false);this.AbF.Ky(5);this.Xa.H(Aos);this.Xa.Ai(true);this.Xa.
T(A.jV);this.Xa.Bh(true);this.Ay.H(Iw);this.J(this.AbE,-1);this.J(this.W$,-1);this.
J(this.AbB,-1);this.J(this.Ta,-1);this.J(this.AbC,-1);this.J(this.Tb,-1);this.J(
this.AbF,-1);this.J(this.Xa,-1);this.J(this.Ay,-1);this.Y.En=[this,this.Fh];this.
La=A._NewObject(C.AvS,0);this.Ajd=A._NewObject(C.AvS,0);this.Aje=A._NewObject(C.
AvS,0);this.W$.S(A.aaL(A.fl.Af));this.Ta.S(A.aaL(A.fl.Ak));this.Tb.S(A.aaL(A.fl.
Ak));this.Xa.S(A.aaL(A.fl.Ak));this.Amo=A._NewObject(C.A65,0);},_Done:function(){
this.__proto__=C.FA;this.AbE._Done();this.W$._Done();this.AbB._Done();this.Ta._Done(
);this.AbC._Done();this.Tb._Done();this.AbF._Done();this.Xa._Done();this.Ay._Done(
);C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.AbE._ReInit(
);this.W$._ReInit();this.AbB._ReInit();this.Ta._ReInit();this.AbC._ReInit();this.
Tb._ReInit();this.AbF._ReInit();this.Xa._ReInit();this.Ay._ReInit();this.Aku(A.aaR(
A.acf.A6V));this.Ae9(A.aaR(A.acf.Aki));this.AbE.T(A.aaR(A.acf.A5P));this.AbB.T(A.
aaR(A.acf.AL3));this.AbC.T(A.aaR(A.acf.AuE));this.AbF.T(A.aaR(A.acf.A5X));this.W$.
S(A.aaL(A.fl.Af));this.Ta.S(A.aaL(A.fl.Ak));this.Tb.S(A.aaL(A.fl.Ak));this.Xa.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((
B=this.La)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajd)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aje)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amo)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ta)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.AbA={_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.AbA;this.
Df.Ax(A.aaL(A.ach.ADQ));},_className:"Application::HeaderEvaluationFilter"};C.Ku={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjO.DY.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).AdZ(A._GetAutoObject(A.Device.
Device).Kn));},_Init:function(aArg){C.AjO._Init.call(this,aArg);this.__proto__=C.
Ku;},_ReInit:function(){C.AjO._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.Avz={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DV).Bd0());},_Init:
function(aArg){C.AbA._Init.call(this,aArg);this.__proto__=C.Avz;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APh={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag4));},_Init:function(aArg){C.AbA._Init.call(this,
aArg);this.__proto__=C.APh;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APg={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arb));},_Init:function(aArg){
C.AbA._Init.call(this,aArg);this.__proto__=C.APg;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APf={Sr:null,Df:null,AP:null,CP:function(){this.Sr.R(A.aaR(A.acf.ANj));},Dg:
function(E){C.BR.Dg.call(this,E);this.Sr.L(E);this.Df.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sr={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C9._Init.call(this.AP={I:this},0);this.__proto__=
C.APf;this.Sr.H(Bsa);this.Sr.R(A.aaR(A.acf.ANj));this.Sr.A4(0x11);this.Df.H(Bsb);
this.AP.DE(Bsc);this.AP.DO(Bsd);this.AP.L(A.jb.Bb);this.J(this.Sr,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sr.S(A.aaL(A.fl.Af));this.Sr.AY(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQt));},_Done:function(){this.__proto__=C.BR;this.Sr._Done();this.
Df._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sr._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sr.R(A.aaR(
A.acf.ANj));this.Sr.S(A.aaL(A.fl.Af));this.Sr.AY(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aey={T0:null,AjY:
null,AjV:null,AjW:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T0={I:this},0);A.acg.Ap._Init.call(this.AjY={I:this},0);A.acg.Ap._Init.
call(this.AjV={I:this},0);A.acg.Ap._Init.call(this.AjW={I:this},0);this.__proto__=
C.Aey;this.T0.H(Bse);this.T0.R(A.aaR(A.acf.Year));this.T0.A4(0x11);this.T0.L(A.jb.
Text);this.AjY.H(Ba0);this.AjY.L(A.jb.Text);this.AjV.H(Bsf);this.AjV.L(A.jb.Text
);this.AjW.H(Bsg);this.AjW.L(A.jb.Text);this.J(this.T0,0);this.J(this.AjY,0);this.
J(this.AjV,0);this.J(this.AjW,0);this.T0.S(A.aaL(A.fl.Ks));this.T0.AY(A.aaL(A.fl.
HK));this.AjY.Ax(A.aaL(A.ach.AQH));this.AjV.Ax(A.aaL(A.ach.AQG));this.AjW.Ax(A.aaL(
A.ach.AQO));},_Done:function(){this.__proto__=C.EB;this.T0._Done();this.AjY._Done(
);this.AjV._Done();this.AjW._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T0._ReInit();this.AjY._ReInit();this.AjV._ReInit();this.
AjW._ReInit();this.T0.R(A.aaR(A.acf.Year));this.T0.S(A.aaL(A.fl.Ks));this.T0.AY(
A.aaL(A.fl.HK));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmO={Ajv:null,AP:null
,A_:null,Eb:null,UM:null,S3:null,Gv:null,XR:0,AtP:0,AlE:0,ABO:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S3.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.S3.M[2]-1,0,this.S3.M[
2]+1,aSize[1]]);this.UM.H([this.S3.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Eb.H([this.UM.M[2]-1,0,this.UM.M[2]+1,aSize[1]]);this.Gv.H([this.UM.M[2],0,aSize[
0],aSize[1]]);this.Ajv.H(this.Gv.M);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.
T(this.ABO.toFixed());this.S3.L(this.V.AQ);this.S3.R(this.AlE.toFixed());this.UM.
L(this.V.AQ);this.UM.R(this.AtP.toFixed());var B2=this.BB5(this.XR);this.Gv.L(A.
_GetAutoObject(A.acj.Assessment).XG(B2));this.Ajv.L(A._GetAutoObject(A.acj.Assessment
).Qr(B2));this.Gv.R(A.abk(this.XR,0,0)+AfH);},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.AlE=this.AX.CE(Ad,1);this.AtP=
this.AX.CE(Ad,2);this.ABO=this.AX.CE(Ad,0);if(this.AlE>0)this.XR=(this.AtP/this.
AlE)*100;else this.XR=0;this.Am();}},BB5:function(XR){if(XR>=8)return 1;else if(
XR>=4)return 2;else return 3;},_Init:function(aArg){C.A$._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajv={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Eb={I:this},0);A.
acg.Text._Init.call(this.UM={I:this},0);A.acg.Text._Init.call(this.S3={I:this},0
);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.AmO;this.Ajv.H(Aoi);
this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Eb.H(Aoi);this.Eb.L(A.jb.Bb);this.UM.
L(A.jb.Text);this.S3.H(Aoi);this.S3.L(A.jb.Text);this.Gv.L(A.jb.Text);this.J(this.
Ajv,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Eb,0);this.J(this.UM,0);this.
J(this.S3,0);this.J(this.Gv,0);this.UM.S(A.aaL(A.fl.Af));this.S3.S(A.aaL(A.fl.Af
));this.Gv.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
A$;this.Ajv._Done();this.AP._Done();this.A_._Done();this.Eb._Done();this.UM._Done(
);this.S3._Done();this.Gv._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$.
_ReInit.call(this);this.Ajv._ReInit();this.AP._ReInit();this.A_._ReInit();this.Eb.
_ReInit();this.UM._ReInit();this.S3._ReInit();this.Gv._ReInit();this.UM.S(A.aaL(
A.fl.Af));this.S3.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajp={
BW:null,Ax2:A.jV,Rating:0,Aj:function(Ae){C.IK.Aj.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Rating));}this.BW.L(this.V.AQ);},S:function(
E){C.IK.S.call(this,E);if((E===A.aaL(A.fl.Ks))||(E===A.aaL(A.fl.Af)))this.BW.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HK))||(E===A.aaL(A.fl.Ak)))this.BW.S(A.aaL(
A.fl.Ak));else this.BW.S(E);},KA:function(E){if(this.Ax2===E)return;this.Ax2=E;this.
BW.R(E);},Akz:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.BW={I:this}
,0);this.__proto__=C.Ajp;this.BW.A1(0x34);this.BW.H(Xo);this.BW.Je(true);this.BW.
A4(0x11);this.BW.L(A.jb.Text);this.BW.Ai(true);this.J(this.BW,0);this.BW.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IK;this.BW._Done();C.IK._Done.call(
this);},_ReInit:function(){C.IK._ReInit.call(this);this.BW._ReInit();this.BW.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.BW)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACX={
N$:null,SS:null,V:null,AnP:null,AnO:null,Acl:null,Ack:null,DM:LB,BaN:A.jV,A$H:A.
jV,Acb:function(E){if(this.N$===E)return;this.N$=E;this.SS.Acb(this.N$);},T:function(
E){if(this.DM===E)return;this.DM=E;this.V.R(E);},A$l:function(E){if(this.BaN===E
)return;this.BaN=E;this.Acl.R(E);},A_1:function(E){if(this.A$H===E)return;this.A$H=
E;this.Ack.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SS._Init.
call(this.SS={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnP={I:this},0);A.acg.AK._Init.call(this.AnO={I:this},0);A.acg.Text._Init.
call(this.Acl={I:this},0);A.acg.Text._Init.call(this.Ack={I:this},0);this.__proto__=
C.ACX;this.H(Bsh);this.SS.H(Bsi);this.SS.As(false);this.SS.Bn2(360);this.SS.Boa(
0.5);this.V.A1(0x1D);this.V.H(U1);this.V.Lu(true);this.V.R(LB);this.V.L(A.jb.Text
);this.AnP.H(Ba1);this.AnP.L(A.jb.Ia);this.AnO.H(Ba2);this.AnO.L(A.jb.Gm);this.Acl.
A1(0x1D);this.Acl.H(Ba1);this.Acl.L(A.jb.Text);this.Ack.A1(0x1D);this.Ack.H(Ba2);
this.Ack.L(A.jb.CV);this.J(this.SS,0);this.J(this.V,0);this.J(this.AnP,0);this.J(
this.AnO,0);this.J(this.Acl,0);this.J(this.Ack,0);this.SS.Boc(A.aaL(A.acv.AUb));
this.V.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SS._Done();this.V._Done();this.AnP.
_Done();this.AnO._Done();this.Acl._Done();this.Ack._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SS._ReInit();this.V._ReInit(
);this.AnP._ReInit();this.AnO._ReInit();this.Acl._ReInit();this.Ack._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));this.Ack.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkO={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkO;this.H(U3);this.Background.A1(0x3F);this.Background.
H(U3);this.Background.L(A.jb.BkB);this.Text.A1(0x3F);this.Text.H(U3);this.Text.A4(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={AkZ:null,N0:null,C_:null,AcH:null,JU:null,TemperatureUnit:null,MP:null,PY:
null,So:null,UC:null,Lv:null,Jk:null,Z_:null,Z9:null,Sp:null,HG:null,AjE:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlM());
this.UC.R(A._GetAutoObject(A.acj.Temperature).AlM());this.Sp.Z(!A._GetAutoObject(
A.Device.Device).AmQ);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.An8();this.AxZ(
);this.Z8();this.Ax0();},H0:function(G){this.W0(this);},CC:function(G){var B;C.AB.
CC.call(this,G);A.zX([this,this.AKI],[B=A._GetAutoObject(A.Device.Device),B.AET,
B.AI1],0);A.zX([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI3]
,0);A.zX([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0L],0);A.
zX([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp],0);A.zX([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AIY],0);A._GetAutoObject(
A.Device.Device).AhL();if(A._GetAutoObject(A.Device.Device).AmQ)A._GetAutoObject(
A.Device.Device).Ae1(true);A._GetAutoObject(A.Device.Device).AxM();A.pe([this,this.
A3F],this);A.pe([this,this.AAT],this);A.pe([this,this.A3M],this);},E3:function(G
){var B;A._GetAutoObject(A.Device.Device).AhL();A._GetAutoObject(A.Device.Device
).Uy(false);A._GetAutoObject(A.Device.Device).Ae$(false);A._GetAutoObject(A.Device.
Device).Ae1(false);A.z$([this,this.AKI],[B=A._GetAutoObject(A.Device.Device),B.AET
,B.AI1],0);A.z$([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI3
],0);A.z$([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0L],0);A.
z$([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp],0);A.z$([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AIY],0);},AAT:function(G
){this.Am();},An8:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C_.L(A.jb.Gm);this.JU.L(this.C_.AQ);this.
MP.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C_.L(A.jb.AV);this.JU.L(A.jb.Text);this.MP.L(this.JU.AQ);this.TemperatureUnit.
L(this.JU.AQ);this.HG.L(A.jb.Gm);}}},AxZ:function(){this.AkZ.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JU.R(A.aaR(A.acf.AD7));this.C_.Ax(A.aaL(A.ach.AvL));this.C_.Cx(0);
this.N0.Cx(0);}break;case 1:{this.AVU(A._GetAutoObject(A.Device.Device).Ly,false
);this.C_.Ax(A.aaL(A.ach.AvL));this.N0.Cx(0);}break;case 2:{this.So.R(A._GetAutoObject(
A.Device.Converter).AkY(A._GetAutoObject(A.Device.Device).AGn));this.AVU(A._GetAutoObject(
A.Device.Device).Ly,false);this.C_.Ax(null);this.N0.Cx(1);this.AcH.Z(true);this.
PY.Z(true);this.So.Z(true);this.UC.Z(true);}break;case 3:{this.AUX();this.AVU(A.
_GetAutoObject(A.Device.Device).Ly,true);this.AcH.Z(false);this.PY.Z(false);this.
So.Z(false);this.UC.Z(false);}break;case 4:{this.JU.R(A.aaR(A.acf.BkP));this.MP.
R(A.aaR(A.acu.Akh));this.C_.Ax(A.aaL(A.ach.AvN));this.C_.Cx(2);this.N0.Cx(0);}break;
default:A.ab5("%s%e",AH8,A._GetAutoObject(A.Device.Device).MeasureState);}},Z8:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).Ly<=3240)||(A._GetAutoObject(A.Device.Device).Ly>=5460))this.N.
C4(null);else this.N.C4(A.aaL(A.ach.AeB));this.N.Cu(null);}break;default:;}},AsG:
function(G){A._GetAutoObject(C.A5).Fz();},W0:function(G){},A0Z:function(s){this.
W0(s);},AkT:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBS(this);break;default:;}},A0Y:function(s){this.AkT(s);},AVU:function(
AoL,BAD){if(BAD)this.Lv.L(A.jb.Bm);else this.Lv.L(A.jb.Gm);if(AoL<=3240){this.MP.
Z(false);this.TemperatureUnit.Z(false);this.Lv.Z(true);this.Lv.R(A.aaR(A.acu.AVD
));}else if(AoL>=5460){this.MP.Z(false);this.TemperatureUnit.Z(false);this.Lv.Z(
true);this.Lv.R(A.aaR(A.acu.BqC));}else{this.MP.Z(true);this.TemperatureUnit.Z(true
);this.Lv.Z(false);this.MP.R(A._GetAutoObject(A.Device.Converter).AkY(AoL));}},Ax0:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).Ly<=3240)||(A._GetAutoObject(A.Device.Device
).Ly>=5460))this.JU.R(A.aaR(A.acf.AD7));else this.JU.R(A.aaR(A.acf.Bra));break;default:;
}},Ax1:function(){},BqV:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Z_.As(true);break;case 4:this.Z9.As(true);break;default:{this.Z_.As(
false);this.Z9.As(false);A._GetAutoObject(A.Device.Device).Ae$(false);}}},AKI:function(
G){this.Am();this.Ax1();this.BqV();this.BqT();},A3M:function(G){if(A._GetAutoObject(
A.Device.Device).AmR){this.Sp.L(A.jb.Ia);this.Sp.Cx(1);}else{this.Sp.L(A.jb.Bm);
this.Sp.Cx(0);}},BBS:function(G){if(!A._GetAutoObject(A.Device.Device).AmQ)A._GetAutoObject(
A.Device.Device).Ae1(!A._GetAutoObject(A.Device.Device).AmR);},BqT:function(){if(
A._GetAutoObject(A.Device.Device).AmQ){this.Sp.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae1(true);else A._GetAutoObject(
A.Device.Device).Ae1(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sp.Z(true);else this.Sp.Z(false);},AKK:function(G){this.CC(this);},AUX:function(
){A.ab5("%s",BaZ);},A3F:function(G){if(A._GetAutoObject(A.Device.Device).HG){this.
JU.H(Bsj);this.MP.H(Bsk);this.TemperatureUnit.H(Bsl);}else{this.JU.H(Bsm);this.MP.
H(Bsn);this.TemperatureUnit.H(Bso);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Go._Init.call(this.AkZ={I:this},0);A.acg.Ap._Init.call(this.N0={I:this
},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.Ap._Init.call(this.AcH={I:this
},0);A.acg.Text._Init.call(this.JU={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MP={I:this},0);A.acg.Text._Init.call(this.
PY={I:this},0);A.acg.Text._Init.call(this.So={I:this},0);A.acg.Text._Init.call(this.
UC={I:this},0);C.CG._Init.call(this.Lv={I:this},0);A.Device.TN._Init.call(this.Jk={
I:this},0);A.Device.TN._Init.call(this.Z_={I:this},0);A.Device.TN._Init.call(this.
Z9={I:this},0);A.acg.Ap._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.HG={
I:this},0);A.acl.TN._Init.call(this.AjE={I:this},0);this.__proto__=C.Re;var B;this.
N.Z(true);this.AkZ.Fp(1000);this.AkZ.B3=2;this.N0.H(Bsp);this.N0.L(A.jb.CV);this.
C_.H(Bsq);this.C_.L(A.jb.AV);this.C_.Cx(0);this.C_.Z(true);this.AcH.H(Bsr);this.
AcH.L(A.jb.Text);this.AcH.Z(false);this.JU.Lu(true);this.JU.R(A.aaR(A.acf.AD7));
this.JU.L(A.jb.Text);this.TemperatureUnit.A4(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MP.A4(0x14);this.MP.R(A.aaR(A.acu.Akh));this.MP.L(A.jb.Text);this.PY.H(Bss
);this.PY.R(A.aaR(A.acf.PY));this.PY.L(A.jb.Text);this.PY.Z(false);this.So.H(Bst
);this.So.A4(0x14);this.So.R(Bsu);this.So.L(A.jb.Text);this.So.Z(false);this.UC.
H(Bsv);this.UC.R(Bsw);this.UC.L(A.jb.Text);this.UC.Z(false);this.Lv.H(Bsx);this.
Lv.R(A.aaR(A.acu.AVD));this.Lv.A4(0x12);this.Lv.L(A.jb.Gm);this.Jk.B3=false;this.
Jk.Cy=true;this.Jk.HP(1);this.Jk.Fp(4000);this.Jk.Uv(0);this.Z_.B3=false;this.Z_.
Cy=true;this.Z_.HP(2);this.Z_.Fp(400);this.Z_.Uv(200);this.Z9.B3=false;this.Z9.Cy=
true;this.Z9.HP(3);this.Z9.Fp(500);this.Z9.Uv(250);this.Sp.H(Bsy);this.HG.H(Bsz);
this.HG.Z(A._GetAutoObject(A.Device.Device).HG);this.HG.R(A.aaR(A.acf.HG));this.
HG.A4(0x12);this.HG.L(A.jb.Gm);this.AjE.As(A._GetAutoObject(A.Device.Device).HG);
this.AjE.Fp(500);this.AjE.Uv(1000);this.J(this.N0,0);this.J(this.C_,0);this.J(this.
AcH,0);this.J(this.JU,0);this.J(this.TemperatureUnit,0);this.J(this.MP,0);this.J(
this.PY,0);this.J(this.So,0);this.J(this.UC,0);this.J(this.Lv,0);this.J(this.Sp,
0);this.J(this.HG,0);this.N.CF=[this,this.AsG];this.N.Cf=[this,this.A0Y];this.N.
Cc=[this,this.A0Z];this.N.C3(A.aaL(A.ach.AeA));this.AkZ.Q=[B=this.C_,B.ASL,B.Cx];
this.N0.Ax(A.aaL(A.ach.N0));this.C_.Ax(A.aaL(A.ach.AvL));this.AcH.Ax(A.aaL(A.ach.
AQ3));this.JU.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(
A.aaL(A.fl.Aet));this.PY.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UC.S(A.
aaL(A.fl.EK));this.Lv.S(A.aaL(A.fl.Aet));this.Lv.AY(A.aaL(A.fl.EK));this.Lv.Cm(A.
aaL(A.fl.Af));this.Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0R];this.Z_.
Q=[B=A._GetAutoObject(A.Device.Device),B.AEY,B.AI4];this.Z9.Q=[B=A._GetAutoObject(
A.Device.Device),B.AEY,B.AI4];this.Sp.Ax(A.aaL(A.ach.AqO));this.HG.S(A.aaL(A.fl.
EK));this.HG.AY(A.aaL(A.fl.Ks));this.HG.Cm(A.aaL(A.fl.HK));this.AjE.Q=[B=this.HG
,B.Fo,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.AkZ._Done(
);this.N0._Done();this.C_._Done();this.AcH._Done();this.JU._Done();this.TemperatureUnit.
_Done();this.MP._Done();this.PY._Done();this.So._Done();this.UC._Done();this.Lv.
_Done();this.Jk._Done();this.Z_._Done();this.Z9._Done();this.Sp._Done();this.HG.
_Done();this.AjE._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.AkZ._ReInit();this.N0._ReInit();this.C_._ReInit();this.AcH._ReInit(
);this.JU._ReInit();this.TemperatureUnit._ReInit();this.MP._ReInit();this.PY._ReInit(
);this.So._ReInit();this.UC._ReInit();this.Lv._ReInit();this.Jk._ReInit();this.Z_.
_ReInit();this.Z9._ReInit();this.Sp._ReInit();this.HG._ReInit();this.AjE._ReInit(
);this.JU.R(A.aaR(A.acf.AD7));this.MP.R(A.aaR(A.acu.Akh));this.PY.R(A.aaR(A.acf.
PY));this.Lv.R(A.aaR(A.acu.AVD));this.HG.R(A.aaR(A.acf.HG));this.JU.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(A.aaL(A.fl.Aet));this.PY.S(
A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UC.S(A.aaL(A.fl.EK));this.Lv.S(A.
aaL(A.fl.Aet));this.Lv.AY(A.aaL(A.fl.EK));this.Lv.Cm(A.aaL(A.fl.Af));this.HG.S(A.
aaL(A.fl.EK));this.HG.AY(A.aaL(A.fl.Ks));this.HG.Cm(A.aaL(A.fl.HK));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.AkZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AVs={Z8:function(){C.Re.Z8.call(this
);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.N.Cu(
null);this.N.C4(A.aaL(A.ach.AvO));}break;default:;}},W0:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Ly>3240)&&(A._GetAutoObject(A.Device.Device).Ly<5460)){A._GetAutoObject(A.Device.
Device).AhL();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AKK(this);break;default:;}},Ax0:function(){C.Re.Ax0.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JU.R(A.aaR(A.acf.BkQ
));break;default:;}},Ax1:function(){C.Re.Ax1.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WM(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AUX:function(){this.C_.Ax(
A.aaL(A.ach.AvN));this.C_.Cx(0);this.N0.Cx(0);},_Init:function(aArg){C.Re._Init.
call(this,aArg);this.__proto__=C.AVs;this.Ds(C.APd);},_className:"Application::TemperatureMeasurementScreen"
};C.APi={Df:null,IR:null,N2:null,AP:null,Ag6:null,A_:null,Dg:function(E){C.BR.Dg.
call(this,E);this.Df.L(E);this.IR.L(E);this.N2.L(E);this.Ag6.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap.
_Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.N2={I:this},0);A.acg.C9.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag6={I:this},0);A.acg.C9.
_Init.call(this.A_={I:this},0);this.__proto__=C.APi;this.Df.H(AyK);this.IR.H(Ayp
);this.N2.H(AHL);this.AP.DE(Ba3);this.AP.DO(Ba4);this.AP.L(A.jb.Bb);this.Ag6.H(BsA
);this.Ag6.L(A.jb.CV);this.A_.DE(BsB);this.A_.DO(BsC);this.A_.L(A.jb.Bb);this.J(
this.Df,0);this.J(this.IR,0);this.J(this.N2,0);this.J(this.AP,0);this.J(this.Ag6
,0);this.J(this.A_,0);this.Df.Ax(A.aaL(A.ach.ADQ));this.IR.Ax(A.aaL(A.ach.AeC));
this.N2.Ax(A.aaL(A.ach.AvG));this.Ag6.Ax(A.aaL(A.ach.AQs));},_Done:function(){this.
__proto__=C.BR;this.Df._Done();this.IR._Done();this.N2._Done();this.AP._Done();this.
Ag6._Done();this.A_._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Df._ReInit();this.IR._ReInit();this.N2._ReInit();this.AP._ReInit(
);this.Ag6._ReInit();this.A_._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(
this,D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"
};C.De={Es:null,DT:null,AGI:0,ANS:0,Init:function(aArg){A.zV([this,this.ALq],A._GetAutoObject(
A.Device.Device).An,0);A.pe([this,this.ALq],this);},ALq:function(G){var Ad=this.
AGI;if(Ad<0){this.DT.FD();this.DT.EC(this.ANS);return;}this.DT.EC(A._GetAutoObject(
A.Device.Device).An.AmV(Ad,14));this.DT.AFi(A._GetAutoObject(A.Device.Device).An.
Ja(Ad,13));this.DT.Ae2(A._GetAutoObject(A.Device.Device).An.H6(Ad,8));this.DT.Uw(
A._GetAutoObject(A.Device.Device).An.H6(Ad,11));this.DT.Ae6(A._GetAutoObject(A.Device.
Device).An.H6(Ad,12));this.DT.Ae8(A._GetAutoObject(A.Device.Device).An.CE(Ad,5));
},A_4:function(E){if(this.AGI===E)return;this.AGI=E;A.pe([this,this.ALq],this);}
,A_u:function(E){if(this.ANS===E)return;this.ANS=E;A.pe([this,this.ALq],this);},
A9F:function(){return this.AGI;},_Init:function(aArg){C.EB._Init.call(this,aArg);
C.CG._Init.call(this.Es={I:this},0);C.DT._Init.call(this.DT={I:this},0);this.__proto__=
C.De;this.Es.H(BsD);this.Es.R(A.aaR(A.acf.GO));this.Es.A4(0x11);this.Es.L(A.jb.Text
);this.DT.H(A0v);this.J(this.Es,0);this.J(this.DT,0);this.Es.S(A.aaL(A.fl.Af));this.
Es.AY(A.aaL(A.fl.Ak));this.Es.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.DT._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DT._ReInit();this.Es.R(
A.aaR(A.acf.GO));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.Ak));this.Es.Cm(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Kt={AgN:null,Text:null,Afl:null,Dg:function(E
){C.BR.Dg.call(this,E);this.AgN.L(E);this.Text.L(E);this.Afl.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgN={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afl={I:this},0);this.__proto__=
C.Kt;this.AgN.H(BsE);this.AgN.L(A.jb.Text);this.Text.H(BsF);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afl.H(BsG);this.Afl.L(A.jb.Text);this.
J(this.AgN,0);this.J(this.Text,0);this.J(this.Afl,0);this.AgN.Ax(A.aaL(A.ach.APk
));this.Text.S(A.aaL(A.fl.Ks));this.Text.AY(A.aaL(A.fl.HK));},_Done:function(){this.
__proto__=C.BR;this.AgN._Done();this.Text._Done();this.Afl._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgN._ReInit();this.Text.
_ReInit();this.Afl._ReInit();this.Text.S(A.aaL(A.fl.Ks));this.Text.AY(A.aaL(A.fl.
HK));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgN)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APb={
_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APb;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APd={_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APd;this.J6(this.Afl,-2);this.
Afl.Ax(A.aaL(A.ach.Ag4));},_className:"Application::HeaderDeviceTemperature"};C.
Yw={Aj:function(Ae){C.AmO.Aj.call(this,Ae);this.T(A.aaR(A.acf.BqD)+A.aaR(A.acf.Colon
));},Ci:function(Ad){var B;if(!this.AX)return;this.AlE=0;this.AtP=0;this.XR=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.AlE+=this.AX.CE(O,1);this.AtP+=
this.AX.CE(O,2);}if(this.AlE>0)this.XR=(this.AtP/this.AlE)*100;this.Am();}},_Init:
function(aArg){C.AmO._Init.call(this,aArg);this.__proto__=C.Yw;this.AP.Z(false);
this.A_.Z(false);this.Eb.Z(false);this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.
HK));},_ReInit:function(){C.AmO._ReInit.call(this);this.V.S(A.aaL(A.fl.Ks));this.
V.AY(A.aaL(A.fl.HK));},_className:"Application::EvaluationLossesSumItem"};C.A64={
Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A64;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A65={K4:null,M4:null,A0:0,Yp:function(){this.K4=null;this.M4=null;this.A0=0;
},OA:function(A9){var Hi;Hi=A._NewObject(C.A64,0);Hi.A6=A9;if(!this.K4){this.K4=
Hi;this.M4=Hi;this.A0=1;}else{this.M4.Ah=Hi;this.M4=Hi;this.A0=this.A0+1;}},AmX:
function(){var B;var RR=0;var Op=this.K4;while(!!Op){RR+=Op.A6;Op=Op.Ah;}return RR;
},AjL:function(){if(!this.A0)return 0;return this.AmX()/this.A0;},AqW:function(){
var B;if(!this.A0)return 0;var A1T=this.AjL();var Adf=0;var Op=this.K4;while(!!Op
){Adf+=Math.pow(Op.A6-A1T,2);Op=Op.Ah;}Adf/=this.A0;Adf=Math.sqrt(Adf);return Adf;
},_Init:function(aArg){this.__proto__=C.A65;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agx={Background:null,V:null,KW:0,UA:5,Hm:false
,Aj:function(Ae){C.Hj.Aj.call(this,Ae);if(this.Hm)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hj.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hm===E)return;this.Hm=E;this.Am();},Ky:function(E){if(this.UA===
E)return;this.UA=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agx;this.H(BD);this.Background.A1(
0x3F);this.Background.H(BD);this.V.A1(0x3F);this.V.H(AID);this.V.A4(0x11);this.V.
L(A.jb.Text);this.KW=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.Hj;this.Background._Done();this.V._Done();C.Hj._Done.call(this
);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.fl.
Bg));},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN9={WH:function(G){this.Agw();this.I8(A.aaR(
A.acf.AVC),[this,this.AT0],5);this.I8(A.aaR(A.acf.AVA),[this,this.ATZ],7);this.I8(
A.aaR(A.acf.Calving),[this,this.Bmz],11);this.I8(A.aaR(A.acf.An0),[this,this.AwZ
],2);this.I8(A.aaR(A.acf.AdU),[this,this.AE9],1);this.I8(A.aaR(A.acf.AuH),[this,
this.AE3],0);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anf
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){}
,Aby:function(){return C.ANe;},Abz:function(){return C.APH;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADb());},HR:function(G){
var F;C.GK.HR.call(this,G);if(this.Ake()===false){this.N.Cu(A._GetAutoObject(A.Device.
Converter).Ajo((F=this.Fk,F[1].call(F[0]))));this.N.Cf=[this,this.Aap];this.N.E5(
A.jV);}this.N.OU(false);this.N.OV(false);},Agi:function(){A._GetAutoObject(C.A5).
Cd(62);},_Init:function(aArg){C.GK._Init.call(this,aArg);this.__proto__=C.AN9;var
B;this.Ds(C.APe);this.Dl(A.aaR(A.acf.ASj));this.AwU([B=A._GetAutoObject(A.Device.
Device),B.A89,B.BbK]);},_ReInit:function(){C.GK._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASj));},_className:"Application::DryCowListScreen"};C.AN8={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AN8;this.Lg.As(false);this.Lg.
Ai(false);this.Lg.Z(false);this.Jw.As(false);this.Jw.Ai(false);this.Jw.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APe={DY:function(G){C.Ku.DY.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).AdZ(9));},_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APe;},_className:"Application::HeaderDryCowListFilter"
};C.Abw={Filter:null,L4:null,AHa:A.jV,Er:0,AGh:1,Operator:1,Bl:function(aSize){C.
Acs.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Aj:function(
Ae){C.Acs.Aj.call(this,Ae);this.L4.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mi],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mi],E,0);A.pe([this,this.Mi],this);},Mi:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tx((F=this.Filter,F[1].call(
F[0])).DN(this.Er,this.Operator));else this.Tx(null);},Nq:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mi],this);},Tx:function(AH){if(!!AH){var A2x;
if(this.AGh!==1)A2x=this.AGh;else A2x=AH.Operator;this.T((this.AHa+CR)+A._GetAutoObject(
A.Device.Converter).A60(A2x));this.ZF(false);}else{this.T(this.AHa);this.ZF(true
);}},OT:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mi],this);},AF5:function(E){if(this.AHa===E)return;this.AHa=E;A.pe([this,this.Mi
],this);},A_S:function(E){if(this.AGh===E)return;this.AGh=E;A.pe([this,this.Mi],
this);},_Init:function(aArg){C.Acs._Init.call(this,aArg);C.L4._Init.call(this.L4={
I:this},0);this.__proto__=C.Abw;this.H(As_);this.AW.H(BsH);this.L4.H(A0w);this.J6(
this.V,-1);this.J(this.L4,0);},_Done:function(){this.__proto__=C.Acs;this.L4._Done(
);C.Acs._Done.call(this);},_ReInit:function(){C.Acs._ReInit.call(this);this.L4._ReInit(
);},_Mark:function(D){var B;C.Acs._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjG={L4:null,Aj:function(Ae){C.QF.
Aj.call(this,Ae);this.L4.L(this.V.AQ);},Tx:function(AH){if(!!AH){this.H_.Cx(1);this.
ZF(true);this.L4.A_I(false);}else{this.H_.Cx(0);this.ZF(false);this.L4.A_I(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.L4._Init.call(this.L4={I:this
},0);this.__proto__=C.AjG;this.Jh=20;this.L4.H(A0w);this.J(this.L4,0);},_Done:function(
){this.__proto__=C.QF;this.L4._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.L4._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACd={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmW(this.
TableId,this.Er));},Tx:function(AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H_.Cx(1);else this.H_.Cx(0);},Hg:function(G){A.pe([this,this.Mi],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.ACd;},_ReInit:function(
){C.QF._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APH={Y1:null,Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Y1={I:this},0);A.acg.Text._Init.call(this.Jd={I:this},0);this.__proto__=
C.APH;this.A_u(1);this.Y1.H(BsI);this.Y1.Lu(true);this.Y1.R(A.aaR(A.acf.AEk));this.
Y1.L(A.jb.Text);this.Jd.H(Xj);this.Jd.R(((A.aaR(A.acf.RU)+Ba5)+A.aaR(A.acf.BaM))+
Pa);this.Jd.L(A.jb.Text);this.J(this.Y1,0);this.J(this.Jd,0);this.Y1.S(A.aaL(A.fl.
Ak));this.Jd.S(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.De;this.Y1._Done(
);this.Jd._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.Y1._ReInit();this.Jd._ReInit();this.Y1.R(A.aaR(A.acf.AEk));this.Jd.R(((A.
aaR(A.acf.RU)+Ba5)+A.aaR(A.acf.BaM))+Pa);this.Y1.S(A.aaL(A.fl.Ak));this.Jd.S(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Y1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANe={Ms:null,KU:null,AdT:null,AP:null,A_:null
,Xx:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ms.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KU.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KU.M[2]-1,0,this.
KU.M[2]+1,aSize[1]]);this.AdT.H([this.KU.M[2],0,aSize[0],aSize[1]]);},Aj:function(
Ae){C.A$.Aj.call(this,Ae);this.KU.L(this.V.AQ);this.AdT.L(this.V.AQ);if(!!this.Xx&&(
this.Xx!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xx));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Ms.L(this.Background.
AQ);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mn=this.AX.
CE(Ad,1);var A26=this.AX.CE(Ad,29);var Pe=this.AX.Hw(Ad,4);var LW=this.AX.Ja(Ad,
13);var AlH=this.AX.Ja(Ad,17);var AlP=this.AX.H6(Ad,11);this.Xx=A._GetAutoObject(
A.Device.Helper).AMp(LW,AlP,AlH);this.T(Mn.toFixed());this.KU.R(A26.toFixed());this.
AdT.R(A._GetAutoObject(A.acj.KQ).AC9(Pe,A._GetAutoObject(A.Device.Helper).Dr(),BsJ
));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.Ms={I:this},0);A.acg.Text._Init.call(this.KU={I:this},0);A.acg.Text._Init.call(
this.AdT={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.ANe;this.Ms.H(Ate);this.AP.L(A.jb.Bb);this.
A_.L(A.jb.Bb);this.J(this.Ms,-1);this.J(this.KU,0);this.J(this.AdT,0);this.J(this.
AP,0);this.J(this.A_,0);this.KU.S(A.aaL(A.fl.Af));this.AdT.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ms._Done();this.KU._Done(
);this.AdT._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Ms._ReInit();this.KU._ReInit();this.AdT.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KU.S(A.aaL(A.fl.Af));this.AdT.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.Ms
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R2={AJX:0,Beq:false,Aj:function(Ae){C.Fy.Aj.call(this,Ae);if(this.Beq){this.
T(A.aaR(A.acf.AN6));this.KA(A.jV);}else{this.T(A.aaR(A.acf.Bkw));if(this.AJX>0)this.
KA(this.AJX.toFixed());else this.KA(Xn);}},Ci:function(G){C.Fy.Ci.call(this,G);this.
Beq=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlC=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlC>0)this.AJX=A._GetAutoObject(A.Device.Helper).
Me(AlC,A._GetAutoObject(A.Device.Helper).Dr());else this.AJX=0;this.Am();},_Init:
function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=C.R2;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMu={ALA:A.jV,Aj:function(Ae){C.Fy.Aj.call(this,Ae);this.T(A.aaR(A.acf.RU));
this.KA(this.ALA);},Ci:function(G){C.Fy.Ci.call(this,G);var Pe=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALA=A._GetAutoObject(A.acj.KQ).AC9(Pe,A._GetAutoObject(
A.Device.Helper).Dr(),((((BsK+A.aaR(A.acf.BhH))+BsL)+A.aaR(A.acf.BhG))+BsM)+A.aaR(
A.acf.AL4));this.Am();},_Init:function(aArg){C.Fy._Init.call(this,aArg);this.__proto__=
C.AMu;this.ALA=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fy._ReInit.call(this);
this.ALA=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN1={Ui:null,Wu:null,Wx:null,Wy:null,SF:null,Init:function(aArg){this.Ba(this.
Ui);A.pe([this,this.MT],this);},Adv:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.Np._Init.call(this.Ui={
I:this},0);C.Np._Init.call(this.Wu={I:this},0);C.Np._Init.call(this.Wx={I:this},
0);C.AbZ._Init.call(this.Wy={I:this},0);C.Uf._Init.call(this.SF={I:this},0);this.
__proto__=C.AN1;var B;this.Ds(C.APb);this.Ui.H(I1);this.Ui.Ai(true);this.Ui.T(A.
aaR(A.acf.ACJ));this.Ui.Bh(false);this.Ui.Ns(83);this.Wu.H(Qc);this.Wu.Ai(true);
this.Wu.T(A.aaR(A.acf.Info));this.Wu.Bh(true);this.Wu.Ns(82);this.Wx.H(Aan);this.
Wx.Ai(true);this.Wx.T(A.aaR(A.acf.AGL));this.Wx.Bh(false);this.Wx.Ns(64);this.Wy.
H(Alf);this.Wy.Ai(true);this.Wy.T(A.aaR(A.acf.TempMeasurement));this.Wy.Bh(true);
this.Wy.Ns(60);this.SF.H(Aok);this.SF.Ai(true);this.SF.T(A.aaR(A.acf.AC4));this.
SF.Bh(false);this.J(this.Ui,-1);this.J(this.Wu,-1);this.J(this.Wx,-1);this.J(this.
Wy,-1);this.J(this.SF,-1);this.N.Cf=[this,this.Adv];this.N.Cu(A.aaL(A.ach.ADV));
this.Ui.AR=[B=this.Ui,B.Nv];this.Wu.AR=[B=this.Wu,B.Nv];this.Wx.AR=[B=this.Wx,B.
Nv];this.Wy.AR=[B=this.Wy,B.Nv];this.SF.AR=null;this.SF.Ab6([B=this.SF,B.Alk]);this.
SF.Gt([this,this.D$,this.GT]);this.SF.ATd([B=A._GetAutoObject(A.Device.Device),B.
Ary,B.Atp]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.Ui._Done(
);this.Wu._Done();this.Wx._Done();this.Wy._Done();this.SF._Done();C.Ek._Done.call(
this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Ui._ReInit();this.Wu._ReInit(
);this.Wx._ReInit();this.Wy._ReInit();this.SF._ReInit();this.Ui.T(A.aaR(A.acf.ACJ
));this.Wu.T(A.aaR(A.acf.Info));this.Wx.T(A.aaR(A.acf.AGL));this.Wy.T(A.aaR(A.acf.
TempMeasurement));this.SF.T(A.aaR(A.acf.AC4));},_Mark:function(D){var B;C.Ek._Mark.
call(this,D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN2={Ug:null,AbX:null,Wv:null,Init:function(aArg
){this.Ba(this.Ug);},BzL:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Bk$:function(G){if(A._GetAutoObject(A.Device.Device).Aba<=20)A._GetAutoObject(
A.Device.Device).AZ(76,true,BsN,0,null);else A._GetAutoObject(A.Device.Device).AZ(
39,true,A.jV,0,[this,this.BzL]);},_Init:function(aArg){C.Ek._Init.call(this,aArg
);C.Np._Init.call(this.Ug={I:this},0);C.Cp._Init.call(this.AbX={I:this},0);C.AbZ.
_Init.call(this.Wv={I:this},0);this.__proto__=C.AN2;var B;this.Ds(C.APc);this.Ug.
H(I1);this.Ug.Ai(true);this.Ug.T(A.aaR(A.acf.A58));this.Ug.Bh(false);this.Ug.Ns(
65);this.AbX.H(Qc);this.AbX.Ai(true);this.AbX.T(A.aaR(A.acf.A62));this.AbX.Bh(true
);this.Wv.H(Aan);this.Wv.Ai(true);this.Wv.T(A.aaR(A.acf.RangeTest));this.Wv.Bh(false
);this.Wv.Ns(15);this.J(this.Ug,-1);this.J(this.AbX,-1);this.J(this.Wv,-1);this.
Ug.AR=[B=this.Ug,B.Nv];this.AbX.AR=[this,this.Bk$];this.Wv.AR=[B=this.Wv,B.Nv];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ek;this.Ug._Done();this.AbX._Done(
);this.Wv._Done();C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this
);this.Ug._ReInit();this.AbX._ReInit();this.Wv._ReInit();this.Ug.T(A.aaR(A.acf.A58
));this.AbX.T(A.aaR(A.acf.A62));this.Wv.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APc={_Init:function(aArg){
C.Kt._Init.call(this,aArg);this.__proto__=C.APc;this.Text.R(A.aaR(A.acf.AGL));},
_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGL));},_className:
"Application::HeaderDeviceServiceMenu"};C.Np={Ni:null,Aj:function(Ae){C.AbZ.Aj.call(
this,Ae);this.Ni.L(this.V.AQ);},_Init:function(aArg){C.AbZ._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Ni={I:this},0);this.__proto__=C.Np;this.Ni.A1(0x38);this.
Ni.H(BsO);this.J(this.Ni,0);this.V.Cm(A.aaL(A.fl.Bg));this.Ni.Ax(A.aaL(A.ach.Ajq
));},_Done:function(){this.__proto__=C.AbZ;this.Ni._Done();C.AbZ._Done.call(this
);},_ReInit:function(){C.AbZ._ReInit.call(this);this.Ni._ReInit();this.V.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.AbZ._Mark.call(this,D);if((B=this.Ni)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.ANX={Aha:
null,Ahg:null,Ahi:null,Ahe:null,Aj6:null,Ahd:null,Ahc:null,Ahb:null,Aj4:null,Ag$:
null,Aj5:null,Ahh:null,Aj7:null,Ahf:null,Aj8:null,Init:function(aArg){this.Ba(this.
Aha);},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.PR._Init.call(this.Aha={
I:this},0);C.PR._Init.call(this.Ahg={I:this},0);C.PR._Init.call(this.Ahi={I:this
},0);C.PR._Init.call(this.Ahe={I:this},0);C.PR._Init.call(this.Aj6={I:this},0);C.
PR._Init.call(this.Ahd={I:this},0);C.PR._Init.call(this.Ahc={I:this},0);C.PR._Init.
call(this.Ahb={I:this},0);C.PR._Init.call(this.Aj4={I:this},0);C.PR._Init.call(this.
Ag$={I:this},0);C.PR._Init.call(this.Aj5={I:this},0);C.PR._Init.call(this.Ahh={I:
this},0);C.PR._Init.call(this.Aj7={I:this},0);C.PR._Init.call(this.Ahf={I:this},
0);C.PR._Init.call(this.Aj8={I:this},0);this.__proto__=C.ANX;this.Ds(C.AO9);this.
Aha.H(Atl);this.Aha.Ai(true);this.Aha.SO(1);this.Ahg.H(A0t);this.Ahg.Ai(true);this.
Ahg.Bh(true);this.Ahg.SO(2);this.Ahi.H(Ath);this.Ahi.Ai(true);this.Ahi.Bh(false);
this.Ahi.SO(3);this.Ahe.H(Ati);this.Ahe.Ai(true);this.Ahe.Bh(true);this.Ahe.SO(4
);this.Aj6.H(AyA);this.Aj6.Ai(true);this.Aj6.SO(5);this.Ahd.H(BsP);this.Ahd.Ai(true
);this.Ahd.Bh(true);this.Ahd.SO(6);this.Ahc.H(Atj);this.Ahc.Ai(true);this.Ahc.Bh(
false);this.Ahc.SO(7);this.Ahb.H(AyJ);this.Ahb.Ai(true);this.Ahb.Bh(true);this.Ahb.
SO(8);this.Aj4.H(A0u);this.Aj4.Ai(true);this.Aj4.SO(9);this.Ag$.H(Aos);this.Ag$.
Ai(true);this.Ag$.Bh(true);this.Ag$.SO(10);this.Aj5.H(BsQ);this.Aj5.Ai(true);this.
Aj5.SO(11);this.Ahh.H(BsR);this.Ahh.Ai(true);this.Ahh.Bh(true);this.Ahh.SO(12);this.
Aj7.H(BsS);this.Aj7.Ai(true);this.Aj7.SO(13);this.Ahf.H(BsT);this.Ahf.Ai(true);this.
Ahf.Bh(true);this.Ahf.SO(14);this.Aj8.H(BsU);this.Aj8.Ai(true);this.Aj8.SO(15);this.
J(this.Aha,-1);this.J(this.Ahg,-1);this.J(this.Ahi,-1);this.J(this.Ahe,-1);this.
J(this.Aj6,-1);this.J(this.Ahd,-1);this.J(this.Ahc,-1);this.J(this.Ahb,-1);this.
J(this.Aj4,-1);this.J(this.Ag$,-1);this.J(this.Aj5,-1);this.J(this.Ahh,-1);this.
J(this.Aj7,-1);this.J(this.Ahf,-1);this.J(this.Aj8,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ek;this.Aha._Done();this.Ahg._Done();this.Ahi._Done();this.Ahe.
_Done();this.Aj6._Done();this.Ahd._Done();this.Ahc._Done();this.Ahb._Done();this.
Aj4._Done();this.Ag$._Done();this.Aj5._Done();this.Ahh._Done();this.Aj7._Done();
this.Ahf._Done();this.Aj8._Done();C.Ek._Done.call(this);},_ReInit:function(){C.Ek.
_ReInit.call(this);this.Aha._ReInit();this.Ahg._ReInit();this.Ahi._ReInit();this.
Ahe._ReInit();this.Aj6._ReInit();this.Ahd._ReInit();this.Ahc._ReInit();this.Ahb.
_ReInit();this.Aj4._ReInit();this.Ag$._ReInit();this.Aj5._ReInit();this.Ahh._ReInit(
);this.Aj7._ReInit();this.Ahf._ReInit();this.Aj8._ReInit();},_Mark:function(D){var
B;C.Ek._Mark.call(this,D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO9={_Init:function(aArg){C.Kt._Init.call(this
,aArg);this.__proto__=C.AO9;this.Text.R(A.aaR(A.acf.A6z));},_ReInit:function(){C.
Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6z));},_className:"Application::HeaderDeviceCheck"
};C.PR={DeviceComponentToString:null,Ko:null,Au4:0,Bc0:false,CP:function(){this.
V.R(this.DeviceComponentToString.BT(this.Au4));},Bl:function(aSize){var B;C.Cp.Bl.
call(this,aSize);this.Ko.H(A.abM(this.Ko.M,aSize[0]-((B=this.Ko.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Ko.M[0]));},Aj:function(Ae){C.Cp.Aj.call(this,Ae);this.Ko.
AFb(this.V.AQ);if(this.Bc0)this.Ko.AwM(A.jb.E1);else this.Ko.AwM(A.jb.Gm);},SO:function(
E){if(this.Au4===E)return;this.Au4=E;this.T(this.DeviceComponentToString.BT(E));
this.DY(this);},DY:function(G){this.Bc0=A._GetAutoObject(A.Device.Device).AJO(this.
Au4);this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Ko._Init.call(this.Ko={I:this
},0);this.__proto__=C.PR;this.V.H(BsV);this.V.A4(0x11);this.Ko.H(BsW);this.J(this.
Ko,0);},_Done:function(){this.__proto__=C.Cp;this.DeviceComponentToString._Done(
);this.Ko._Done();C.Cp._Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Ko._ReInit();this.CP();},_Mark:function(
D){var B;C.Cp._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sn={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAS],this);},
Ba:function(E){C.AB.Ba.call(this,E);this.ALv(this);this.DL(this);},CC:function(G
){A.pe([this,this.MT],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},AAS:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A7e();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MT],this);},Ew:function(G){A._GetAutoObject(C.A5).Fz(
);},A37:function(G){A._GetAutoObject(C.A5).Cd(84);},DL:function(G){this.N.C3(A.aaL(
A.ach.E2));this.N.CF=[this,this.Ew];this.N.Cu(A.aaL(A.ach.ADU));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arf(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.IS.C0(100);}else{this.N.Cf=[this
,this.AAS];this.N.IS.C0(255);}this.N.C4(A.aaL(A.ach.AeC));this.N.Cc=[this,this.A37
];},MT:function(s){this.DL(s);},ALv:function(G){A.ab5("%s",BsX);},BHl:function(s
){this.ALv(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sn;this.N.As(false);this.N.Z(true);this.Ds(C.
AbA);this.Ay.H(Iw);this.DZ.A1(0x3F);this.DZ.H(Fc);this.DZ.L(A.jb.CK);this.Y.H(LA
);this.Y.J0(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.En=[this
,this.Fh];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOl={Yn:null,Ym:null,X$:null
,TO:null,DL:function(G){C.Sn.DL.call(this,G);if(this.AV===this.TO){this.N.Cu(null
);this.N.Cf=null;this.N.C4(null);this.N.Cc=null;}},ALv:function(G){if(this.AV===
this.TO)this.Ds(C.APi);else this.Ds(C.AbA);},Bz9:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQm);case 1:return A.
aaL(A.ach.AQn);default:A.ab5("%s%s",BsY,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bz_:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQo);case 1:return A.aaL(A.ach.AQp);default:
A.ab5("%s%s",AIR,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ik:function(G){var Cz=(C.Fm.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.
Yn)A._GetAutoObject(C.A5).Cd(66);else if(Cz===this.Ym)A._GetAutoObject(C.A5).Cd(
56);else if(Cz===this.X$)A._GetAutoObject(C.A5).Cd(58);else if(Cz===this.TO)A._GetAutoObject(
C.A5).Cd(59);},_Init:function(aArg){C.Sn._Init.call(this,aArg);C.Fm._Init.call(this.
Yn={I:this},0);C.Fm._Init.call(this.Ym={I:this},0);C.Fm._Init.call(this.X$={I:this
},0);C.Fm._Init.call(this.TO={I:this},0);this.__proto__=C.AOl;this.Yn.H(Qa);this.
Yn.Ai(true);this.Yn.T(A.aaR(A.acf.Afw));this.Ym.H(J_);this.Ym.Ai(true);this.Ym.T(
A.aaR(A.acf.Temperature));this.X$.H(BsZ);this.X$.Ai(true);this.X$.T(A.aaR(A.acf.
Rating));this.TO.H(Bs0);this.TO.Ai(true);this.TO.T(A.aaR(A.acf.A8k));this.J(this.
Yn,0);this.J(this.Ym,0);this.J(this.X$,0);this.J(this.TO,0);this.Yn.AR=[this,this.
Ik];this.Yn.DD(this.Bz_());this.Ym.AR=[this,this.Ik];this.Ym.DD(this.Bz9());this.
X$.AR=[this,this.Ik];this.X$.DD(A.aaL(A.ach.AQk));this.TO.AR=[this,this.Ik];this.
TO.DD(A.aaL(A.ach.AQl));},_Done:function(){this.__proto__=C.Sn;this.Yn._Done();this.
Ym._Done();this.X$._Done();this.TO._Done();C.Sn._Done.call(this);},_ReInit:function(
){C.Sn._ReInit.call(this);this.Yn._ReInit();this.Ym._ReInit();this.X$._ReInit();
this.TO._ReInit();this.Yn.T(A.aaR(A.acf.Afw));this.Ym.T(A.aaR(A.acf.Temperature)
);this.X$.T(A.aaR(A.acf.Rating));this.TO.T(A.aaR(A.acf.A8k));},_Mark:function(D){
var B;C.Sn._Mark.call(this,D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOm={VT:null,Yb:null,Yo:null,ALv:function(G){this.Ds(C.Avz);},BAd:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ_
);case 1:return A.aaL(A.ach.AQ$);default:A.ab5("%s%s",AIR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ik:function(G){var Cz=(C.Fm.isPrototypeOf(
G)?G:null);if(!Cz)return;if(Cz===this.VT)A._GetAutoObject(C.A5).Cd(68);else if(Cz===
this.Yo)A._GetAutoObject(C.A5).Cd(57);else if(Cz===this.Yb)A._GetAutoObject(C.A5
).Cd(67);},BAc:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP9);case 1:return A.aaL(A.ach.AP_);default:A.ab5("%s%s",AIR
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BAe:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARa
);case 1:return A.aaL(A.ach.ARb);default:A.ab5("%s%s",AIR,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sn._Init.call(
this,aArg);C.Fm._Init.call(this.VT={I:this},0);C.Fm._Init.call(this.Yb={I:this},
0);C.Fm._Init.call(this.Yo={I:this},0);this.__proto__=C.AOm;this.VT.H(Qa);this.VT.
Ai(true);this.VT.T(A.aaR(A.acf.BaE));this.Yb.H(A0x);this.Yb.Ai(true);this.Yb.T(A.
aaR(A.acf.A5Y));this.Yo.H(Oh);this.Yo.Ai(true);this.Yo.T(A.aaR(A.acf.BaH));this.
J(this.VT,0);this.J(this.Yb,0);this.J(this.Yo,0);this.VT.AR=[this,this.Ik];this.
VT.DD(this.BAd());this.VT.Ab_(A.aaL(A.ach.N1));this.Yb.AR=[this,this.Ik];this.Yb.
DD(this.BAc());this.Yo.AR=[this,this.Ik];this.Yo.DD(this.BAe());},_Done:function(
){this.__proto__=C.Sn;this.VT._Done();this.Yb._Done();this.Yo._Done();C.Sn._Done.
call(this);},_ReInit:function(){C.Sn._ReInit.call(this);this.VT._ReInit();this.Yb.
_ReInit();this.Yo._ReInit();this.VT.T(A.aaR(A.acf.BaE));this.Yb.T(A.aaR(A.acf.A5Y
));this.Yo.T(A.aaR(A.acf.BaH));},_Mark:function(D){var B;C.Sn._Mark.call(this,D);
if((B=this.VT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOp={Bet:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZX(0));},_Init:function(aArg){C.AqL._Init.call(this,aArg);this.
__proto__=C.AOp;this.Ae9(A.aaR(A.acf.A8F));},_ReInit:function(){C.AqL._ReInit.call(
this);this.Ae9(A.aaR(A.acf.A8F));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOi={Aig:null,AbD:null,UR:null,Aa6:null,Pp:null,Ajm:null,Agz:null,Ajn:null,AgA:
null,Ay:null,AaX:null,Adc:0,Aps:0,DG:function(G){switch(this.Cr.CO){case 4:{if(this.
I$.Fo())return;var QA=this.Y.Bs[1]+80;this.Y.Gf([this.Y.Bs[0],QA]);this.Y.VF(null
,null);}break;case 5:{if(this.I$.Fo())return;var QA=this.Y.Bs[1]-80;this.Y.Gf([this.
Y.Bs[0],QA]);this.Y.VF(null,null);}break;default:C.FA.DG.call(this,G);}},Ap3:function(
L9,AcY){if(!L9)return;var Fw=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(
A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,AcY,true);Fw.CY(HY);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fw.CY(Ac_
);L9.Bk(Fw);},Aiu:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arg()){this.
Aig.OA(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azt=this.Bz7(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaX.Set(Azt,this.AaX.Get(Azt)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adc++;this.Aps=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FA.Aiu.call(
this,G);},Aax:function(G){if(this.Adc>1)A._GetAutoObject(A.Device.Device).AZ(56,
true,this.Adc.toFixed(),0,null);if(this.Adc===1)A._GetAutoObject(A.Device.Device
).AZ(53,true,this.Aps.toFixed(),0,null);if(this.Aig.A0>0)this.UR.T(((((((A._GetAutoObject(
A.Device.Converter).Ax7(this.Aig.AjL()|0,1)+AyP)+A._GetAutoObject(A.Device.Converter
).Ax7(this.Aig.AqW()|0,1))+CR)+A._GetAutoObject(A.acj.DV).Af5())+AyQ)+this.Aig.A0.
toFixed())+Pa);else this.UR.T(A.aaR(A.acf.Unknown));var RR=this.AaX.AmX();var O;
for(O=0;O<this.AaX.MN;O++){var Bj=this.BAs(O);if(!!Bj){var CB=this.AaX.Get(O);Bj.
BmK(CB);if(!RR)Bj.A_Y(0);else Bj.A_Y(Math.round((CB*100)/RR)|0);Bj.Boq(this.BAr(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adh=false;if(this.Aig.A0>0)
Adh=true;this.I$.Z(!Adh);C.FA.Aax.call(this,G);},Ado:function(G){this.Aig.Yp();this.
AaX.FD();this.Adc=0;this.Aps=0;C.FA.Ado.call(this,G);},BAs:function(aIndex){var Bj=
null;switch(aIndex){case 0:Bj=this.Pp;break;case 1:Bj=this.Ajm;break;case 2:Bj=this.
Agz;break;case 3:Bj=this.Ajn;break;case 4:Bj=this.AgA;break;default:throw new Error(
AyR+aIndex.toFixed());}return Bj;},BAr:function(aIndex,AoG){var B;var Ty=A.jV;switch(
AoG){case 0:{switch(aIndex){case 0:Ty=Bs1;break;case 1:Ty=Bs2;break;case 2:Ty=Bs3;
break;case 3:Ty=Bs4;break;case 4:Ty=Bs5;break;default:throw new Error(AyR+aIndex.
toFixed());}Ty=Ty+(CR+A.aaR(A.acf.AAk));}break;case 1:{switch(aIndex){case 0:Ty=
Bs6;break;case 1:Ty=Bs7;break;case 2:Ty=Bs8;break;case 3:Ty=Bs9;break;case 4:Ty=
Bs_;break;default:throw new Error(AyR+aIndex.toFixed());}Ty=Ty+(CR+A.aaR(A.acf.A72
));}break;default:A.ab5("%s%e",Ba6,AoG);}return Ty;},Bz8:function(AI$,AoG){var Ac$=
0;switch(AoG){case 0:switch(AI$){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyR+AI$.toFixed());}break;case 1:switch(AI$){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyR+AI$.toFixed());}break;default:A.ab5("%s%e",Ba6
,AoG);}return Ac$;},Bz7:function(A9,AoG){var Azt=0;var O;for(O=0;O<this.AaX.MN;O++
)if(A9<this.Bz8(O,AoG)){Azt=O;break;}return Azt;},Fh:function(G){var B;this.Ay.MH((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[
1]);},_Init:function(aArg){C.FA._Init.call(this,aArg);C.Agx._Init.call(this.AbD={
I:this},0);C.IK._Init.call(this.UR={I:this},0);C.Aa6._Init.call(this.Aa6={I:this
},0);C.Pp._Init.call(this.Pp={I:this},0);C.Pp._Init.call(this.Ajm={I:this},0);C.
Pp._Init.call(this.Agz={I:this},0);C.Pp._Init.call(this.Ajn={I:this},0);C.Pp._Init.
call(this.AgA={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaX={I:this},0);this.__proto__=C.AOi;this.Ds(C.Avz);this.Aku(A.aaR(
A.acf.A6R));this.Ae9(A.aaR(A.acf.A8y));this.AbD.H(Atl);this.AbD.Ai(true);this.AbD.
T(A.aaR(A.acf.A5N));this.AbD.Bh(false);this.AbD.Ky(5);this.UR.H(A0t);this.UR.Ai(
true);this.UR.T(A.jV);this.UR.Bh(true);this.UR.Ky(5);this.Aa6.H(Ath);this.Aa6.Ai(
true);this.Pp.H(Ati);this.Pp.Ai(true);this.Pp.Bh(true);this.Ajm.H(Atj);this.Ajm.
Ai(true);this.Agz.H(AyJ);this.Agz.Ai(true);this.Agz.Bh(true);this.Ajn.H(A0u);this.
Ajn.Ai(true);this.AgA.H(Aos);this.AgA.Ai(true);this.AgA.Bh(true);this.Ay.H(Iw);this.
AaX.ZG(5);this.J(this.AbD,-1);this.J(this.UR,-1);this.J(this.Aa6,-1);this.J(this.
Pp,-1);this.J(this.Ajm,-1);this.J(this.Agz,-1);this.J(this.Ajn,-1);this.J(this.AgA
,-1);this.J(this.Ay,-1);this.Y.En=[this,this.Fh];this.Aig=A._NewObject(C.AvS,0);
this.UR.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FA;this.AbD._Done(
);this.UR._Done();this.Aa6._Done();this.Pp._Done();this.Ajm._Done();this.Agz._Done(
);this.Ajn._Done();this.AgA._Done();this.Ay._Done();this.AaX._Done();C.FA._Done.
call(this);},_ReInit:function(){C.FA._ReInit.call(this);this.AbD._ReInit();this.
UR._ReInit();this.Aa6._ReInit();this.Pp._ReInit();this.Ajm._ReInit();this.Agz._ReInit(
);this.Ajn._ReInit();this.AgA._ReInit();this.Ay._ReInit();this.AaX._ReInit();this.
Aku(A.aaR(A.acf.A6R));this.Ae9(A.aaR(A.acf.A8y));this.AbD.T(A.aaR(A.acf.A5N));this.
UR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA._Mark.call(this,D);if((B=this.
Aig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa6={Ic:null,Gv:null
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.Ic.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gv.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Aj:
function(Ae){C.IK.Aj.call(this,Ae);this.Ic.L(this.V.AQ);this.Gv.L(this.V.AQ);},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.Ic={I:this}
,0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Aa6;this.T(A.aaR(
A.acf.AHn));this.Ic.H(Bs$);this.Ic.Lu(true);this.Ic.R(A.aaR(A.acf.Aqy));this.Ic.
L(A.jb.Text);this.Gv.H(Ba7);this.Gv.R(AfH);this.Gv.L(A.jb.Text);this.J(this.Ic,0
);this.J(this.Gv,0);this.V.S(A.aaL(A.fl.HK));this.Ic.S(A.aaL(A.fl.HK));this.Gv.S(
A.aaL(A.fl.Ks));},_Done:function(){this.__proto__=C.IK;this.Ic._Done();this.Gv._Done(
);C.IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.Ic._ReInit(
);this.Gv._ReInit();this.T(A.aaR(A.acf.AHn));this.Ic.R(A.aaR(A.acf.Aqy));this.V.
S(A.aaL(A.fl.HK));this.Ic.S(A.aaL(A.fl.HK));this.Gv.S(A.aaL(A.fl.Ks));},_Mark:function(
D){var B;C.IK._Mark.call(this,D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pp={AP:null,A_:null,P3:null,Ic:null,Gv:null,BaG:A.jV,Aqy:0,A$u:0,Bl:function(
aSize){C.IK.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.Ic.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.Ic.M[2]-1,0,this.Ic.M[2]+1,aSize[
1]]);this.Gv.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.IK.Aj.call(
this,Ae);this.P3.L(this.V.AQ);this.Ic.L(this.V.AQ);this.Gv.L(this.V.AQ);},Boq:function(
E){if(this.BaG===E)return;this.BaG=E;this.P3.R(E);},BmK:function(E){if(this.Aqy===
E)return;this.Aqy=E;this.Ic.R(E.toFixed());},A_Y:function(E){if(this.A$u===E)return;
this.A$u=E;this.Gv.R(E.toFixed()+As1);},_Init:function(aArg){C.IK._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.Ic={I:
this},0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Pp;this.AP.L(
A.jb.Bb);this.A_.L(A.jb.Bb);this.P3.H(Bta);this.P3.R(A.aaR(A.acf.AHn));this.P3.L(
A.jb.Text);this.Ic.R(U6);this.Ic.L(A.jb.Text);this.Gv.R(Btb);this.Gv.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.P3,0);this.J(this.Ic,0);this.J(
this.Gv,0);this.P3.S(A.aaL(A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IK;this.AP._Done();this.A_._Done();this.
P3._Done();this.Ic._Done();this.Gv._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.P3._ReInit();
this.Ic._ReInit();this.Gv._ReInit();this.P3.R(A.aaR(A.acf.AHn));this.P3.S(A.aaL(
A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IK._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMG={AKX:
function(){var Be=A._GetAutoObject(A.Device.Helper).MC();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amw._Init.call(this,aArg);this.__proto__=
C.AMG;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARO={R9:null,
Sd:null,R8:null,Sa:null,Pr:null,R$:null,ALs:function(G){A.pe([this,this.BDl],this
);A.pe([this,this.BC$],this);A.pe([this,this.BC7],this);A.pe([this,this.A42],this
);A.pe([this,this.BDc],this);A.pe([this,this.BDa],this);},Ik:function(G){var Cz=(
C.QY.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.Sd)A._GetAutoObject(C.A5
).Cd(20);else if(Cz===this.Pr)A._GetAutoObject(C.A5).Cd(14);else if(Cz===this.R9
)A._GetAutoObject(C.A5).Cd(12);else if(Cz===this.Sa)A._GetAutoObject(C.A5).Cd(43
);else if(Cz===this.R8)A._GetAutoObject(C.A5).Cd(51);else if(Cz===this.R$)A._GetAutoObject(
C.A5).Cd(61);},BC$:function(G){var Be=A._GetAutoObject(A.Device.Helper).MC();var
AzA=A._NewObject(A.Device.BoolFilterCriterion,0);AzA.Initialize(9,0,true,true);Be.
CY(AzA);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pr.ZE(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BDl:function(G){var Be=A._GetAutoObject(A.
Device.Helper).MC();var ABL=A._NewObject(A.Device.BoolFilterCriterion,0);ABL.Initialize(
12,0,true,true);Be.CY(ABL);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sd.ZE(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC7:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).MC();var Azg=A._NewObject(A.Device.BoolFilterCriterion
,0);Azg.Initialize(8,0,true,true);Be.CY(Azg);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R9.ZE(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A42:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6_(A._GetAutoObject(A.Device.Device
).ABR);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.ZE(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BDc:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A7h();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sa.ZE(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BDa:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ADb();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R$.ZE(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.Ub._Init.call(this,
aArg);C.QY._Init.call(this.R9={I:this},0);C.QY._Init.call(this.Sd={I:this},0);C.
QY._Init.call(this.R8={I:this},0);C.QY._Init.call(this.Sa={I:this},0);C.QY._Init.
call(this.Pr={I:this},0);C.QY._Init.call(this.R$={I:this},0);this.__proto__=C.ARO;
this.R9.H(Qa);this.R9.Ai(true);this.R9.T(A.aaR(A.acf.Alarm));this.R9.Ab7(true);this.
Sd.H(A0x);this.Sd.Ai(true);this.Sd.T(A.aaR(A.acf.Ase));this.Sd.Ab7(true);this.R8.
H(Oh);this.R8.Ai(true);this.R8.T(A.aaR(A.acf.ActionList));this.R8.Ab7(true);this.
Sa.H(Qb);this.Sa.Ai(true);this.Sa.T(A.aaR(A.acf.AOM));this.Sa.Ab7(true);this.Pr.
H(Tg);this.Pr.As(false);this.Pr.Ai(false);this.Pr.Z(false);this.Pr.T(A.aaR(A.acf.
ACw));this.Pr.Ab7(true);this.R$.H(UX);this.R$.Ai(true);this.R$.T(A.aaR(A.acf.A6M
));this.R$.Ab7(true);this.J(this.R9,-1);this.J(this.Sd,-1);this.J(this.R8,-1);this.
J(this.Sa,-1);this.J(this.Pr,-1);this.J(this.R$,-1);this.R9.AR=[this,this.AcV];this.
R9.DD(A.aaL(A.ach.ADL));this.R9.Ab_(A.aaL(A.ach.N1));this.Sd.AR=[this,this.AcV];
this.Sd.DD(A.aaL(A.ach.AQ7));this.Sd.Ab_(A.aaL(A.ach.N1));this.R8.AR=[this,this.
AcV];this.R8.DD(A.aaL(A.ach.APT));this.R8.Ab_(A.aaL(A.ach.N1));this.Sa.AR=[this,
this.AcV];this.Sa.DD(A.aaL(A.ach.AQr));this.Sa.Ab_(A.aaL(A.ach.N1));this.Pr.AR=[
this,this.AcV];this.Pr.DD(A.aaL(A.ach.ADL));this.Pr.Ab_(A.aaL(A.ach.N1));this.R$.
AR=[this,this.AcV];this.R$.DD(A.aaL(A.ach.AQh));this.R$.Ab_(A.aaL(A.ach.N1));},_Done:
function(){this.__proto__=C.Ub;this.R9._Done();this.Sd._Done();this.R8._Done();this.
Sa._Done();this.Pr._Done();this.R$._Done();C.Ub._Done.call(this);},_ReInit:function(
){C.Ub._ReInit.call(this);this.R9._ReInit();this.Sd._ReInit();this.R8._ReInit();
this.Sa._ReInit();this.Pr._ReInit();this.R$._ReInit();this.R9.T(A.aaR(A.acf.Alarm
));this.Sd.T(A.aaR(A.acf.Ase));this.R8.T(A.aaR(A.acf.ActionList));this.Sa.T(A.aaR(
A.acf.AOM));this.Pr.T(A.aaR(A.acf.ACw));this.R$.T(A.aaR(A.acf.A6M));},_Mark:function(
D){var B;C.Ub._Mark.call(this,D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARN={Se:null,VS:null,Sb:null,R_:null,Sc:null,ALs:function(G){A.pe([this,this.
BC8],this);A.pe([this,this.BDg],this);A.pe([this,this.BDh],this);A.pe([this,this.
BDm],this);A.pe([this,this.BDi],this);},Ik:function(G){var Cz=(C.QY.isPrototypeOf(
G)?G:null);if(!Cz)return;if(Cz===this.VS)A._GetAutoObject(C.A5).Cd(90);if(Cz===this.
R_)A._GetAutoObject(C.A5).Cd(74);if(Cz===this.Sb)A._GetAutoObject(C.A5).Cd(71);if(
Cz===this.Sc)A._GetAutoObject(C.A5).Cd(46);if(Cz===this.Se)A._GetAutoObject(C.A5
).Cd(85);},BDh:function(G){var Be=A._GetAutoObject(A.Device.Helper).ADe();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.Sc.ZE(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BDm:function(G){var Be=A._GetAutoObject(A.Device.Helper).A7s(Math.max(
A._GetAutoObject(A.Device.Device).Av0,A._GetAutoObject(A.Device.Helper).A7k(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Se.ZE(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BDg:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A7n();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.Sb.ZE(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC8:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AON();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R_.ZE(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BDi:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avv();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VS.ZE(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.Ub._Init.call(this,aArg);C.QY._Init.call(this.Se={I:this
},0);C.QY._Init.call(this.VS={I:this},0);C.QY._Init.call(this.Sb={I:this},0);C.QY.
_Init.call(this.R_={I:this},0);C.QY._Init.call(this.Sc={I:this},0);this.__proto__=
C.ARN;this.Se.H(Btc);this.Se.Ai(true);this.Se.T(A.aaR(A.acf.A8q));this.Se.Ab7(true
);this.VS.H(Btd);this.VS.Ai(true);this.VS.T(A.aaR(A.acf.AGq));this.Sb.H(Bte);this.
Sb.Ai(true);this.Sb.T(A.aaR(A.acf.A8s));this.Sb.Ab7(true);this.R_.H(Btf);this.R_.
Ai(true);this.R_.T(A.aaR(A.acf.ACb));this.R_.Ab7(true);this.Sc.H(Btg);this.Sc.Ai(
true);this.Sc.T(A.aaR(A.acf.ASp));this.Sc.Ab7(true);this.J(this.Se,-1);this.J(this.
VS,-1);this.J(this.Sb,-1);this.J(this.R_,-1);this.J(this.Sc,-1);this.Se.AR=[this
,this.AcV];this.Se.DD(A.aaL(A.ach.AQJ));this.Se.Ab_(A.aaL(A.ach.N1));this.VS.AR=[
this,this.AcV];this.VS.DD(A.aaL(A.ach.AD1));this.Sb.AR=[this,this.AcV];this.Sb.DD(
A.aaL(A.ach.AQL));this.Sb.Ab_(A.aaL(A.ach.N1));this.R_.AR=[this,this.AcV];this.R_.
DD(A.aaL(A.ach.AQc));this.R_.Ab_(A.aaL(A.ach.N1));this.Sc.AR=[this,this.AcV];this.
Sc.DD(A.aaL(A.ach.AQN));this.Sc.Ab_(A.aaL(A.ach.N1));},_Done:function(){this.__proto__=
C.Ub;this.Se._Done();this.VS._Done();this.Sb._Done();this.R_._Done();this.Sc._Done(
);C.Ub._Done.call(this);},_ReInit:function(){C.Ub._ReInit.call(this);this.Se._ReInit(
);this.VS._ReInit();this.Sb._ReInit();this.R_._ReInit();this.Sc._ReInit();this.Se.
T(A.aaR(A.acf.A8q));this.VS.T(A.aaR(A.acf.AGq));this.Sb.T(A.aaR(A.acf.A8s));this.
R_.T(A.aaR(A.acf.ACb));this.Sc.T(A.aaR(A.acf.ASp));},_Mark:function(D){var B;C.Ub.
_Mark.call(this,D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASn={WH:function(G){this.Agw(
);this.AMe();this.A5p(A.aaR(A.acf.A75),[this,this.Bn7],131072);this.A5p(A.aaR(A.
acf.A74),[this,this.Bn6],16384);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS
).Mq(A.aaR(A.acf.ARH)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DG:function(G){},Aby:function(){return C.Aqu;},Abz:function(){return C.Aq1;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7n());},HR:function(G){C.Mo.HR.call(this,G);if(this.Ake()===false){this.
N.Cu(A._GetAutoObject(A.Device.Converter).Ajo(A._GetAutoObject(A.Device.Converter
).AL$(this.L3.ADg())));this.N.Cf=[this,this.Aap];this.N.E5(A.jV);}this.N.OU(false
);this.N.OV(false);},Agi:function(){A._GetAutoObject(C.A5).Cd(72);},Bn6:function(
G){this.AGN(16384);},Bn7:function(G){this.AGN(131072);},_Init:function(aArg){C.Mo.
_Init.call(this,aArg);this.__proto__=C.ASn;this.Ds(C.APw);this.Dl(A.aaR(A.acf.A8w
));this.ATw(A._GetAutoObject(C.Av7));},_ReInit:function(){C.Mo._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8w));},_className:"Application::NoNaisIdListScreen"};C.ASm={
_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.ASm;this.ME.As(
false);this.ME.Ai(false);this.ME.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APw={DY:function(G){C.Ku.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).AdZ(10));},_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=
C.APw;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkL={OH:null,Bgo:false
,CP:function(){A.pe([this,this.Aow],this);},DG:function(G){},CC:function(G){C.GK.
CC.call(this,G);if(this.Bgo)A.pe([this,this.AIT],this);},Agf:function(G){this.A6J(
this);},Agi:function(){A._GetAutoObject(C.A5).Cd(73);},ASv:function(G){throw new
Error(Aot);},Bbp:function(s){this.ASv(s);},ASw:function(G){throw new Error(Aot);
},Bbq:function(s){this.ASw(s);},ASA:function(G){throw new Error(Aot);},AIT:function(
s){this.ASA(s);},A3U:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!Ar&&(Ar.PopupState===7)){this.Bgo=true;A._GetAutoObject(C.A5).Cd(76
);}},Agh:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar&&(Ar.PopupState===5))A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ur,B.U$],0);},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device
).P4.Z7===3){A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agh
]);A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U$],0);A.pe([
this,this.AIT],this);}},AJN:function(){throw new Error(Aot);},A8M:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);this.A6I(this);},BoF:function(G){A._GetAutoObject(
A.Device.Device).Dw(0);this.BiX(this);},Hg:function(G){},A_v:function(E){if(A.aaZ(
this.OH,E))return;if(!!this.OH)A.z$([this,this.Hg],this.OH,0);this.OH=E;if(!!E)A.
zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},Bhb:function(G){var F,
Cv;if(!this.OH)return;(Cv=this.OH,Cv[2].call(Cv[0],!(F=this.OH,F[1].call(F[0])))
);},_Init:function(aArg){C.GK._Init.call(this,aArg);this.__proto__=C.AkL;this.Dl(
A.aaR(A.acf.A8D));},_ReInit:function(){C.GK._ReInit.call(this);this.Dl(A.aaR(A.acf.
A8D));this.CP();},_Mark:function(D){var B;C.GK._Mark.call(this,D);if((B=this.OH)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::RegistrationsListScreen"
};C.AUH={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AUH;},
_className:"Application::RegistrationsListFilterScreen"};C.Aev={_Init:function(aArg
){C.YC._Init.call(this,aArg);this.__proto__=C.Aev;this.Text.H(Bth);this.Text.R(A.
jV);this.Text.A4(0x12);},_className:"Application::HeaderRegistrationsList"};C.ACi={
Jt:0,AP:null,A_:null,Eb:null,IQ:null,S6:null,GA:null,Mn:0,Lb:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IQ.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1,aSize[1]]);this.
S6.H([this.IQ.M[2],0,this.IQ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Eb.H([
this.S6.M[2]-1,0,this.S6.M[2]+1,aSize[1]]);this.GA.H([this.S6.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.IQ.L(this.V.AQ);this.GA.L(this.
V.AQ);this.S6.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj3(this.Lb)){this.
V.S(A.aaL(A.fl.H5));this.T(Ba8);this.S6.R(Rr);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Mn.toFixed());this.S6.R(A._GetAutoObject(A.Device.Helper).TT(this.Jt,0,5).
toFixed());}},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.Mn=
this.AX.CE(Ad,1);this.Lb=this.AX.AO1(Ad,34);var AtX=this.AX.AOT(Ad,7);this.Jt=this.
AX.KS(Ad,26);var Azn=this.AX.Hw(Ad,4);var AfS=A._GetAutoObject(A.Device.Helper).
Me(Azn,A._GetAutoObject(A.Device.Helper).Dr());this.IQ.Ax(A._GetAutoObject(A.Device.
Converter).AmU(AtX));if(AfS<100)this.GA.R((AfS.toFixed()+CR)+A.aaR(A.acf.AL4));else
this.GA.R(A._GetAutoObject(A.acj.KQ).AC9(Azn,A._GetAutoObject(A.Device.Helper).Dr(
),AIv));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.
call(this.Eb={I:this},0);A.acg.Ap._Init.call(this.IQ={I:this},0);A.acg.Text._Init.
call(this.S6={I:this},0);C.CG._Init.call(this.GA={I:this},0);this.__proto__=C.ACi;
this.AP.H(Aon);this.AP.L(A.jb.Bb);this.A_.H(Aoo);this.A_.L(A.jb.Bb);this.Eb.H(A0y
);this.Eb.L(A.jb.Bb);this.IQ.H(Ba9);this.IQ.L(A.jb.Text);this.S6.H(AyH);this.GA.
H(A0z);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Eb,0);this.J(this.IQ,0);this.
J(this.S6,0);this.J(this.GA,0);this.S6.S(A.aaL(A.fl.Af));this.GA.S(A.aaL(A.fl.Af
));this.GA.AY(A.aaL(A.fl.Ak));this.GA.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:
function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done();this.Eb._Done();this.
IQ._Done();this.S6._Done();this.GA._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Eb._ReInit();
this.IQ._ReInit();this.S6._ReInit();this.GA._ReInit();this.S6.S(A.aaL(A.fl.Af));
this.GA.S(A.aaL(A.fl.Af));this.GA.AY(A.aaL(A.fl.Ak));this.GA.Cm(A.aaL(A.fl.Bg));
},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADB={Aj0:null,PD:null,Jb:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj0={I:this},
0);A.acg.Ap._Init.call(this.PD={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},
0);this.__proto__=C.ADB;this.Aj0.H(Bti);this.Aj0.L(A.jb.Text);this.PD.H(Btj);this.
PD.L(A.jb.Text);this.Jb.H(Ba0);this.Jb.L(A.jb.Text);this.J(this.Aj0,0);this.J(this.
PD,0);this.J(this.Jb,0);this.Aj0.Ax(A.aaL(A.ach.ADX));this.PD.Ax(A.aaL(A.ach.AvI
));this.Jb.Ax(A.aaL(A.ach.AvD));},_Done:function(){this.__proto__=C.De;this.Aj0.
_Done();this.PD._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Aj0._ReInit();this.PD._ReInit();this.Jb._ReInit();
},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APy={IY:null
,AgZ:null,HT:null,Bb:null,ML:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A9C,B.A_2
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.WG,B.J1],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SQ],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},Dg:
function(E){C.BR.Dg.call(this,E);this.IY.L(E);this.AgZ.L(E);this.HT.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.
acf.Afc));else this.HT.R(((A.aaR(A.acf.GO)+A.aaR(A.acf.Colon))+CR)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqY()){this.Aw6(((A._GetAutoObject(
A.Device.Helper).W.CQ+1).toFixed()+AIN)+A._GetAutoObject(A.Device.Device).An.B9(
).toFixed());this.J1(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nt(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.Aw6(AIO);this.J1(2);this.OnSetAnimalId(-1);this.
Nt(0);}},J1:function(E){if(this.Gender===E)return;this.Gender=E;this.AgZ.Ax(A._GetAutoObject(
A.Device.Converter).AmU(E));},Aw6:function(E){if(this.ML===E)return;this.ML=E;this.
IY.R(E);},Nt:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj3(E))this.HT.Z(false);else this.HT.Z(true);},_Init:
function(aArg){C.BR._Init.call(this,aArg);A.acg.Text._Init.call(this.IY={I:this}
,0);A.acg.Ap._Init.call(this.AgZ={I:this},0);A.acg.Text._Init.call(this.HT={I:this
},0);A.acg.C9._Init.call(this.Bb={I:this},0);this.__proto__=C.APy;this.IY.H(BaO);
this.IY.Ho(2);this.IY.Lu(true);this.IY.A4(0x12);this.IY.R(BaP);this.AgZ.H(Btk);this.
HT.H(Btl);this.HT.A4(0x11);this.HT.R(A.aaR(A.acf.Afc));this.Bb.DE(Atk);this.Bb.DO(
Ali);this.Bb.L(A.jb.Bb);this.J(this.IY,0);this.J(this.AgZ,0);this.J(this.HT,0);this.
J(this.Bb,0);this.IY.S(A.aaL(A.fl.Ak));this.AgZ.Ax(A._GetAutoObject(A.Device.Converter
).AmU(2));this.HT.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.IY._Done();this.AgZ._Done();this.HT._Done();this.Bb._Done();C.BR._Done.
call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.IY._ReInit();this.AgZ.
_ReInit();this.HT._ReInit();this.Bb._ReInit();this.HT.R(A.aaR(A.acf.Afc));this.IY.
S(A.aaL(A.fl.Ak));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.
call(this,D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aa9={EaseOfDeliveryToString:null,AgR:null,Ci:function(G){C.NP.Ci.call(this,G
);var AJ6=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.KA(this.EaseOfDeliveryToString.
Lz(AJ6));this.G3.R(this.AgR.Aek(AJ6).toFixed());},Dg:function(E){C.NP.Dg.call(this
,E);this.G3.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgR._Init.call(this.
AgR={I:this},0);this.__proto__=C.Aa9;this.T(A.aaR(A.acf.AgI));},_Done:function(){
this.__proto__=C.NP;this.EaseOfDeliveryToString._Done();this.AgR._Done();C.NP._Done.
call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgR._ReInit();this.T(A.aaR(A.acf.AgI));},_Mark:function(D){var B;
C.NP._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.X1={WhereAboutsToString:null,K1:null,Ci:function(G){C.NP.Ci.call(this,G);var
Lb=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KA(this.WhereAboutsToString.
Lz(Lb));this.G3.R(this.K1.Aek(Lb).toFixed());},Dg:function(E){C.NP.Dg.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K1._Init.call(this.K1={
I:this},0);this.__proto__=C.X1;this.T(A.aaR(A.acf.Jm));},_Done:function(){this.__proto__=
C.NP;this.WhereAboutsToString._Done();this.K1._Done();C.NP._Done.call(this);},_ReInit:
function(){C.NP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K1._ReInit(
);this.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.NP._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R5={Cr:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D_.CC.
call(this,G);A.zX([this,this.AfI],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.
OnSetId],0);A.zX([this,this.AfI],[B=A._GetAutoObject(A.Device.Helper),B.U7,B.U_]
,0);A.pe([this,this.AfI],this);},E3:function(G){var B;C.D_.E3.call(this,G);A.z$([
this,this.AfI],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId],0);A.z$([this
,this.AfI],[B=A._GetAutoObject(A.Device.Helper),B.U7,B.U_],0);},Fh:function(G){var
B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Bs[1]);},DG:function(G){switch(this.Cr.CO){case 6:case 7:this.Cr.Mx=true;
break;case 4:this.BgJ(4);break;case 5:this.BgJ(5);break;default:;}},BgJ:function(
GB){var B;switch(GB){case 5:{var CD=this.Y.Bs[1]-40;if(CD<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gf([this.Y.Bs[0],CD]);}break;case 4:{var CD=this.Y.
Bs[1]+40;if(CD>0)CD=0;this.Y.Gf([this.Y.Bs[0],CD]);}break;default:throw new Error(
Btm);}},GI:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I9.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ci(this
);}X=X.Ah;}},AfI:function(s){this.GI(s);},M0:function(G){var B;this.Y.VF(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},
_Init:function(aArg){C.D_._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R5;this.Cr.Filter=147;this.Y.H(U3);this.Y.J0(1);this.Ay.H(As0
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BG=[this,this.DG];this.Cr.D2=[this,
this.DG];this.Y.En=[this,this.Fh];this.Init(aArg);},_Done:function(){this.__proto__=
C.D_;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D_._Done.call(this);},_ReInit:
function(){C.D_._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.X2={Aa3:null,
XY:null,Aa4:null,XZ:null,Aa9:null,X1:null,_Init:function(aArg){C.R5._Init.call(this
,aArg);C.Aa3._Init.call(this.Aa3={I:this},0);C.XY._Init.call(this.XY={I:this},0);
C.Aa4._Init.call(this.Aa4={I:this},0);C.XZ._Init.call(this.XZ={I:this},0);C.Aa9.
_Init.call(this.Aa9={I:this},0);C.X1._Init.call(this.X1={I:this},0);this.__proto__=
C.X2;this.Aa3.H(BD);this.Aa3.Ai(true);this.XY.H(I1);this.XY.Ai(true);this.XY.Bh(
true);this.Aa4.H(Qc);this.Aa4.Ai(true);this.XZ.H(Aan);this.XZ.Ai(true);this.XZ.Bh(
true);this.Aa9.H(Alf);this.Aa9.Ai(true);this.X1.H(Aok);this.X1.Ai(true);this.X1.
Bh(true);this.J(this.Aa3,0);this.J(this.XY,0);this.J(this.Aa4,0);this.J(this.XZ,
0);this.J(this.Aa9,0);this.J(this.X1,0);},_Done:function(){this.__proto__=C.R5;this.
Aa3._Done();this.XY._Done();this.Aa4._Done();this.XZ._Done();this.Aa9._Done();this.
X1._Done();C.R5._Done.call(this);},_ReInit:function(){C.R5._ReInit.call(this);this.
Aa3._ReInit();this.XY._ReInit();this.Aa4._ReInit();this.XZ._ReInit();this.Aa9._ReInit(
);this.X1._ReInit();},_Mark:function(D){var B;C.R5._Mark.call(this,D);if((B=this.
Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XZ={
BreedToString:null,G3:null,Na:null,Ci:function(G){C.IJ.Ci.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BT(Bv));this.G3.
R(this.Na.Aek(Bv).toFixed());},Dg:function(E){C.IJ.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
Na._Init.call(this.Na={I:this},0);this.__proto__=C.XZ;this.BW.H(Btn);this.G3.H(Bto
);this.G3.Ho(5);this.G3.A4(0x14);this.G3.R(Btp);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hx.Ax(A.aaL(A.ach.ADP));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IJ;this.BreedToString._Done();this.G3._Done();this.Na._Done();C.
IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.Na._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa4={
Ci:function(G){C.IJ.Ci.call(this,G);var AAv=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAv>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAv));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IJ._Init.call(this,aArg);this.__proto__=
C.Aa4;this.Hx.Ax(A.aaL(A.ach.AQi));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XY={YH:null,Ci:function(G){C.IJ.Ci.call(this,G);var Pe=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfX=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pe>
0)this.T(A._GetAutoObject(A.acj.KQ).AjJ(Pe));else this.T(A.aaR(A.acf.Unknown));var
Azp=A.aaL(A.aci.TS);switch(AfX){case 0:Azp=A.aaL(A.ach.ADN);break;case 1:{Azp=A.
aaL(A.ach.AvE);this.YH.Cx(0);}break;case 2:{Azp=A.aaL(A.ach.AvE);this.YH.Cx(1);}
break;case 3:{Azp=A.aaL(A.ach.AvE);this.YH.Cx(2);}break;default:A.ab5("%s%e",Btq
,AfX);}this.YH.Ax(Azp);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YH={I:this},0);this.__proto__=C.XY;this.BW.H(Btr);this.YH.H(AH2);
this.YH.L(A.jb.Text);this.J(this.YH,0);this.Hx.Ax(A.aaL(A.ach.AvD));this.YH.Ax(A.
aaL(A.ach.ADN));},_Done:function(){this.__proto__=C.IJ;this.YH._Done();C.IJ._Done.
call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.YH._ReInit();},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.Aa3={Jt:0,X0:null,Lb:0
,Bl:function(aSize){C.IJ.Bl.call(this,aSize);this.X0.H(this.Hx.M);},Aj:function(
Ae){C.IJ.Aj.call(this,Ae);this.X0.L(this.BW.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj3(this.Lb)){this.T(A.aaR(A.acf.AnimalLoss));this.Hx.Z(false);this.X0.Z(true);
}else if(this.Jt>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Jt));this.
Hx.Z(true);this.X0.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hx.Z(true);this.
X0.Z(false);}},Ci:function(G){C.IJ.Ci.call(this,G);this.Jt=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Lb=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Text._Init.call(this.X0={
I:this},0);this.__proto__=C.Aa3;this.X0.R(Ba8);this.J(this.X0,0);this.Hx.Ax(A.aaL(
A.ach.AvI));this.X0.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=C.IJ;this.
X0._Done();C.IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.
X0._ReInit();},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.X0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMD={X2:null,Init:function(aArg){var B;A.zX([this,this.AAO],[B=A._GetAutoObject(
A.Device.Device),B.AEO,B.AIX],0);A.pe([this,this.AAO],this);},DG:function(G){var
D6=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D6.CO){case 6:this.Ov(this);break;
case 7:this.M6(this);break;default:D6.Mx=true;}},CC:function(G){var B;this.X2.CC(
this);C.AB.CC.call(this,G);},E3:function(G){var B;this.X2.E3(this);C.AB.E3.call(
this,G);},Ano:function(G){A._GetAutoObject(C.A5).Fz();},Adv:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M6:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LJ=A._GetAutoObject(A.Device.Helper).W.CQ;LJ=LJ+1;
if(LJ>=A._GetAutoObject(A.Device.Device).An.B9())LJ=0;A._GetAutoObject(A.Device.
Helper).GS(LJ);},Ov:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LJ=A._GetAutoObject(A.Device.Helper).W.CQ;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},AAO:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqq)A._GetAutoObject(C.A5).Acd(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.X2._Init.call(this.X2={I:this},0);this.
__proto__=C.AMD;this.Background.H(Cg);this.N.Z(true);this.N.OU(true);this.N.OV(true
);this.Ds(C.APy);this.X2.H(Fc);this.J(this.X2,0);this.N.CF=[this,this.Ano];this.
N.Cf=[this,this.Adv];this.N.C3(A.aaL(A.ach.E2));this.N.Cu(A.aaL(A.ach.AeD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.X2._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.X2._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IJ={Hx:null,BW:null
,T:function(E){C.I9.T.call(this,E);this.BW.R(this.DM);},Dg:function(E){C.I9.Dg.call(
this,E);this.Hx.L(E);this.BW.L(E);},_Init:function(aArg){C.I9._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hx={I:this},0);C.CG._Init.call(this.BW={I:this},0);this.
__proto__=C.IJ;this.Hx.H(Bts);this.Hx.L(A.jb.Text);this.BW.H(Btt);this.BW.A4(0x11
);this.BW.L(A.jb.Text);this.J(this.Hx,0);this.J(this.BW,0);this.Hx.Ax(A.aaL(A.aci.
TS));this.BW.S(A.aaL(A.fl.Af));this.BW.AY(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I9;this.Hx._Done();this.BW._Done();C.I9._Done.call(this);},_ReInit:function(
){C.I9._ReInit.call(this);this.Hx._ReInit();this.BW._ReInit();this.BW.S(A.aaL(A.
fl.Af));this.BW.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I9._Mark.call(this
,D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I9={Background:null
,KW:0,Hm:false,CP:function(){this.Ci(this);},Init:function(aArg){var B;A.zX([this
,this.Bcb],[B=A._GetAutoObject(A.Device.Helper).W,B.Uo,B.OnSetId],0);A.pe([this,
this.Bcb],this);},Bl:function(aSize){C.Hj.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Aj:function(Ae){C.Hj.Aj.call(this,Ae);if(this.
Hm)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Ci:function(G){}
,Bcb:function(s){this.Ci(s);},Bh:function(E){if(this.Hm===E)return;this.Hm=E;this.
Am();},Dg:function(E){if(this.KW===E)return;this.KW=E;},_Init:function(aArg){C.Hj.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I9;this.H(BD);this.Background.H(AIx);this.KW=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);C.Hj._Done.call(this);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NP={G3:null,BBV:function(G){this.BW.H(A.abN(this.BW.M,this.G3.M[0]));},_Init:
function(aArg){C.Fy._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NP;this.G3.A1(0xA);this.G3.H(Btu);this.G3.Ho(5);this.G3.Je(
true);this.G3.A4(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q7([this,this.BBV]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fy;this.G3._Done();C.Fy._Done.call(this);},_ReInit:function(){C.Fy._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fy.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axq={ARm:null,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axq;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.ARm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANL={WF:null,W2:0,AwR:function(E){C.AmG.AwR.call(this,E);if(E)this.Pt.R(Btv);
else this.Pt.R(Ba_);},BnW:function(E){if(A.aaZ(this.WF,E))return;if(!!this.WF)A.
z$([this,this.A3V],this.WF,0);this.WF=E;if(!!E)A.zX([this,this.A3V],E,0);if(!!E)
A.pe([this,this.A3V],this);},AF0:function(E){var F;if(this.W2===E)return;this.W2=
E;this.AwR(!!this.WF&&((F=this.WF,F[1].call(F[0]))===E));},A3V:function(G){var F;
this.AwR(!!this.WF&&((F=this.WF,F[1].call(F[0]))===this.W2));},_Init:function(aArg
){C.AmG._Init.call(this,aArg);this.__proto__=C.ANL;this.Pt.R(Ba_);this.Pt.S(A.aaL(
A.fl.H5));},_Mark:function(D){var B;C.AmG._Mark.call(this,D);if((B=this.WF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axs={WF:null,W2:0,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axs;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.WF)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUl={YS:null,Gx:null,B6:null,_Init:function(aArg){C.Ch._Init.call(this,aArg);
C.BU._Init.call(this.YS={I:this},0);C.Rb._Init.call(this.Gx={I:this},0);C.ANH._Init.
call(this.B6={I:this},0);this.__proto__=C.AUl;var B;this.Jf(A.aaR(A.acf.ACZ));this.
YS.H(AyS);this.YS.Ai(true);this.YS.T(A.aaR(A.acf.B6));this.YS.Bh(false);this.Gx.
H(A0A);this.Gx.Ai(true);this.Gx.Z(true);this.Gx.T(A.aaR(A.acf.AGo));this.Gx.Bh(true
);this.Gx.Ar3(false);this.Gx.A_Z(true);this.J(this.YS,0);this.J(this.Gx,0);this.
YS.Au([B=this.B6,B.Ca,B.Cb]);this.YS.CI(this.B6);this.Gx.Ab6([B=this.Gx,B.FY]);this.
Gx.Gt([this,this.D$,this.GT]);this.Gx.Akv(A.aaL(A.ach.Edit));this.Gx.Au([B=A._GetAutoObject(
A.Device.Device),B.ASV,B.A0M]);this.B6.AwD([B=A._GetAutoObject(A.Device.Device),
B.A87,B.BbI]);},_Done:function(){this.__proto__=C.Ch;this.YS._Done();this.Gx._Done(
);this.B6._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.YS._ReInit();this.Gx._ReInit();this.B6._ReInit();this.Jf(A.aaR(A.acf.ACZ)
);this.YS.T(A.aaR(A.acf.B6));this.Gx.T(A.aaR(A.acf.AGo));},_Mark:function(D){var
B;C.Ch._Mark.call(this,D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::PremisesSettingsScreen"};C.AUj={GJ:0,B6:null,AW:null,Kv:
null,E_:null,GermanStateToString:null,CountryToString:null,PA:0,Ld:0,Mg:false,Init:
function(aArg){A.zX([this,this.MT],[this,this.SK,this.Ls],0);A.zX([this,this.MT]
,[this,this.Anr,this.Ahr],0);},Aj:function(Ae){C.Em.Aj.call(this,Ae);this.AW.FP(
this.LX);this.Kv.FP(this.LX);this.E_.CW(this.LX);},DL:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Ld));(F=this.N,F[1].call(F[0]
)).Cc=null;}break;case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS((
A.aaR(A.acf.EV)+Ayk)+this.GermanStateToString.Lz(A._GetAutoObject(A.Device.Converter
).AC_(this.PA)));(F=this.N,F[1].call(F[0])).Cc=null;}break;default:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.
N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=
null;}}},Ex:function(EN){var Tt=this.A8;if(EN<0)EN=0;else if(EN>this.RN)EN=this.
RN;switch(EN){case 0:{this.Ba(null);if(!this.GJ&&!this.PA)this.Ls(0);}break;case
1:this.Ba(this.E_);break;case 2:this.Ba(this.Kv);break;case 3:if(((Tt===2)&&!this.
PA)&&!this.GJ)return;else{this.Ba(this.AW);if(!this.GJ||(Tt>0))this.AW.SW(2);else
this.AW.SW(7);}break;default:throw new Error(Ato+EN.toFixed());}this.A8=EN;C.Em.
Ex.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mg=true;this.
SN(A._GetAutoObject(A.Device.Helper).TT(E,0,10));this.Ahr(A._GetAutoObject(A.Device.
Helper).TT(E,10,2)|0);this.Ls(A._GetAutoObject(A.Device.Converter).S_(E));this.Mg=
false;if(!!this.AM){this.Kv.Ky(2);this.AW.Ky(10);}else{this.Kv.Ky(0);this.AW.Ky(
0);}this.Am();},FY:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).ADk());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RN);},AjK:function(){return this.
GJ;},AjM:function(){return 9999999999;},Ls:function(E){if(this.Ld===E)return;this.
Ld=E;if(this.Mg===false)A.pe([this,this.Vv],this);A.abo([this,this.SK,this.Ls],0
);},SN:function(E){if(this.GJ===E)return;this.GJ=E;if(this.Mg===false)A.pe([this
,this.Vv],this);A.abo([this,this.Ab4,this.SN],0);},Vv:function(G){var F;var aString=(
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.Ld),3,10)+A.abl(this.PA,2,10
))+A.abm(this.GJ,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==
BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahr:function(
E){if(this.PA===E)return;this.PA=E;if(this.Mg===false)A.pe([this,this.Vv],this);
A.abo([this,this.Anr,this.Ahr],0);},SK:function(){return this.Ld;},Ab4:function(
){return this.GJ;},Anr:function(){return this.PA;},_Init:function(aArg){C.Em._Init.
call(this,aArg);C.B6._Init.call(this.B6={I:this},0);C.ARg._Init.call(this.AW={I:
this},0);C.AvQ._Init.call(this.Kv={I:this},0);C.AsK._Init.call(this.E_={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUj;var B;this.RN=3;this.AW.H(Btw);this.Kv.H(Btx);this.Kv.EU(16);this.E_.H(Ba$
);this.J(this.AW,0);this.J(this.Kv,0);this.J(this.E_,0);this.B6.AwD([this,this.SK
,this.Ls]);this.AW.Au([this,this.Ab4,this.SN]);this.Kv.Au([this,this.Anr,this.Ahr
]);this.E_.CI(this.B6);this.E_.Au([B=this.B6,B.Ca,B.Cb]);this.Init(aArg);},_Done:
function(){this.__proto__=C.Em;this.B6._Done();this.AW._Done();this.Kv._Done();this.
E_._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.Em._Done.
call(this);},_ReInit:function(){C.Em._ReInit.call(this);this.B6._ReInit();this.AW.
_ReInit();this.Kv._ReInit();this.E_._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Em._Mark.call(this,D);
if((B=this.B6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARg={NT:null,NS:null,ES:null,F$:null,Eq:null,DB:null,CX:null,Cw:null,FP:function(
E){if(this.Ne===E)return;C.Lj.FP.call(this,E);this.Cw.CW(E);this.CX.CW(E);this.DB.
CW(E);this.Eq.CW(E);this.F$.CW(E);this.ES.CW(E);this.NS.CW(E);this.NT.CW(E);},Yz:
function(HB){var B7=null;switch(HB){case-1:case 0:B7=this.Ga;break;case 1:B7=this.
Cw;break;case 2:B7=this.CX;break;case 3:B7=this.DB;break;case 4:B7=this.Eq;break;
case 5:B7=this.F$;break;case 6:B7=this.ES;break;case 7:B7=this.NS;break;case 8:B7=
this.NT;break;case 9:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;},_Init:
function(aArg){C.Lj._Init.call(this,aArg);C.DH._Init.call(this.NT={I:this},0);C.
DH._Init.call(this.NS={I:this},0);C.DH._Init.call(this.ES={I:this},0);C.DH._Init.
call(this.F$={I:this},0);C.DH._Init.call(this.Eq={I:this},0);C.DH._Init.call(this.
DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.ARg;this.H(Bty);this.G2.H(AIP);this.NT.H(AyO);this.NS.H(A0l
);this.ES.H(A0m);this.F$.H(A0n);this.Eq.H(A0o);this.DB.H(A0p);this.CX.H(A0q);this.
Cw.H(BaV);this.Ga.H(A0r);this.EM.H(A0r);this.J(this.NT,-2);this.J(this.NS,-2);this.
J(this.ES,-2);this.J(this.F$,-2);this.J(this.Eq,-2);this.J(this.DB,-2);this.J(this.
CX,-2);this.J(this.Cw,-2);this.NT.Dk=[this,this.GY];this.NS.Dk=[this,this.GY];this.
ES.Dk=[this,this.GY];this.F$.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.DB.
Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(
){this.__proto__=C.Lj;this.NT._Done();this.NS._Done();this.ES._Done();this.F$._Done(
);this.Eq._Done();this.DB._Done();this.CX._Done();this.Cw._Done();C.Lj._Done.call(
this);},_ReInit:function(){C.Lj._ReInit.call(this);this.NT._ReInit();this.NS._ReInit(
);this.ES._ReInit();this.F$._ReInit();this.Eq._ReInit();this.DB._ReInit();this.CX.
_ReInit();this.Cw._ReInit();},_Mark:function(D){var B;C.Lj._Mark.call(this,D);if((
B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUk={
GJ:0,B6:null,AW:null,E_:null,CountryToString:null,Ld:0,Mg:false,Init:function(aArg
){A.zX([this,this.MT],[this,this.SK,this.Ls],0);},Aj:function(Ae){C.Em.Aj.call(this
,Ae);this.AW.FP(this.LX);this.E_.CW(this.LX);},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Ld));(F=this.N,F[1].call(F[0])).Cc=null;}
break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(
F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}}},Ex:function(EN){var Tt=this.A8;if(EN<0)EN=0;
else if(EN>this.RN)EN=this.RN;switch(EN){case 0:{this.Ba(null);if(!this.GJ)this.
Ls(0);}break;case 1:this.Ba(this.E_);break;case 2:{this.Ba(this.AW);if(!this.GJ||(
Tt>0))this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(Ato+EN.toFixed(
));}this.A8=EN;C.Em.Ex.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mg=true;this.SN(A._GetAutoObject(A.Device.Helper).TT(E,0,12));this.Ls(
A._GetAutoObject(A.Device.Converter).S_(E));this.Mg=false;if(!!this.AM)this.AW.Ky(
12);else this.AW.Ky(0);this.Am();},FY:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADk());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RN);},AjK:function(
){return this.GJ;},AjM:function(){return 999999999999;},Ls:function(E){if(this.Ld===
E)return;this.Ld=E;if(this.Mg===false)A.pe([this,this.Vv],this);A.abo([this,this.
SK,this.Ls],0);},SN:function(E){if(this.GJ===E)return;this.GJ=E;if(this.Mg===false
)A.pe([this,this.Vv],this);A.abo([this,this.Ab4,this.SN],0);},Vv:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.Ld),3,10)+A.abm(
this.GJ,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SK:function(){return this.
Ld;},Ab4:function(){return this.GJ;},_Init:function(aArg){C.Em._Init.call(this,aArg
);C.B6._Init.call(this.B6={I:this},0);C.AD5._Init.call(this.AW={I:this},0);C.AsK.
_Init.call(this.E_={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUk;var B;this.RN=2;this.AW.H(Btz);this.E_.H(Ba$);this.
J(this.AW,0);this.J(this.E_,0);this.B6.AwD([this,this.SK,this.Ls]);this.AW.Au([this
,this.Ab4,this.SN]);this.E_.CI(this.B6);this.E_.Au([B=this.B6,B.Ca,B.Cb]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Em;this.B6._Done();this.AW._Done();this.
E_._Done();this.CountryToString._Done();C.Em._Done.call(this);},_ReInit:function(
){C.Em._ReInit.call(this);this.B6._ReInit();this.AW._ReInit();this.E_._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Em._Mark.call(this,D);
if((B=this.B6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,Yh:null,Yi:null,Yg:null,Ye:null,Yf:null,DG:function(
G){var B;C.AB.DG.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkM();A._GetAutoObject(A.Device.Helper).Ass();},Ik:function(G){
var Cz=(C.Fm.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.Yh)A._GetAutoObject(
C.A5).Cd(28);else if(Cz===this.Yi)A._GetAutoObject(C.A5).Cd(26);else if(Cz===this.
Yg)A._GetAutoObject(C.A5).Cd(54);else if(Cz===this.Ye)A._GetAutoObject(C.A5).Cd(
27);else if(Cz===this.Yf)A._GetAutoObject(C.A5).Cd(78);},A3Z:function(G){A._GetAutoObject(
C.A5).Fz();},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fm._Init.call(this.Yh={I:this
},0);C.Fm._Init.call(this.Yi={I:this},0);C.Fm._Init.call(this.Yg={I:this},0);C.Fm.
_Init.call(this.Ye={I:this},0);C.Fm._Init.call(this.Yf={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CV);this.N.Z(true);this.N.CS(A.jV);this.El.As(false
);this.Ds(C.Aq0);this.DZ.A1(0x3F);this.DZ.H(Fc);this.DZ.L(A.jb.CK);this.Y.H(Fc);
this.Y.J0(9);this.Ay.H(Iw);this.Yh.H(Qa);this.Yh.Ai(true);this.Yh.T(A.aaR(A.acf.
A8o));this.Yi.H(A0x);this.Yi.Ai(true);this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.
H(Oh);this.Yg.Ai(true);this.Yg.T(A.aaR(A.acf.Calving));this.Ye.H(Qb);this.Ye.Ai(
true);this.Ye.T(A.aaR(A.acf.ACg));this.Yf.H(MR);this.Yf.Ai(true);this.Yf.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yh,0);this.J(this.Yi,0);this.J(this.Yg,0);this.J(this.Ye,0);this.J(this.Yf,0);this.
N.CF=[this,this.A3Z];this.N.C3(A.aaL(A.ach.E2));this.Y.En=[this,this.Fh];this.Yh.
AR=[this,this.Ik];this.Yh.DD(A.aaL(A.ach.ADY));this.Yi.AR=[this,this.Ik];this.Yi.
DD(A.aaL(A.ach.AvM));this.Yg.AR=[this,this.Ik];this.Yg.DD(A.aaL(A.ach.AQb));this.
Ye.AR=[this,this.Ik];this.Ye.DD(A.aaL(A.ach.AP8));this.Yf.AR=[this,this.Ik];this.
Yf.DD(A.aaL(A.ach.AP1));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.Yh._Done();this.Yi._Done();this.Yg._Done();this.Ye.
_Done();this.Yf._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yh._ReInit(
);this.Yi._ReInit();this.Yg._ReInit();this.Ye._ReInit();this.Yf._ReInit();this.Yh.
T(A.aaR(A.acf.A8o));this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.T(A.aaR(A.acf.Calving
));this.Ye.T(A.aaR(A.acf.ACg));this.Yf.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASd={K8:null,EaseOfDelivery:null,BirthType:null,AcN:null
,Ln:null,Co:null,G7:null,Ll:null,AzY:true,Init:function(aArg){this.Ba(this.Db);A.
pe([this,this.GI],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.FD();A._GetAutoObject(C.A5).Fz();if(!!this.K8)this.K8.Ew(this);},Agg:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwS(true);if(!!this.K8)this.K8.Agg(this
);if(A._GetAutoObject(A.Device.Device).An.Lk())A._GetAutoObject(A.Device.Helper).
AKq(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApE]);else{this.AiY();A.
pe([this,this.Ap2],this);}},Aup:function(){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.
AD2));this.N.Cc=[this,this.Ay5];},CC:function(G){var B;C.H2.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lk()){A._GetAutoObject(A.Device.Device).AZ(41
,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),0,null);this.Ew(this);
}else if(this.AzY){this.AzY=false;A.pe([this,this.A4c],this);}else if(!this.K8){
this.K8=A._NewObject(C.ASe,0);this.K8.A_s([this,this.ABa]);A._GetAutoObject(A.Device.
Helper).W.G8();A._GetAutoObject(A.Device.Helper).Aqg(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nt(this.AsX.Aek(6));this.K8.LU(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},AiY:function(
){A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);var
Mc=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SX(Mc);if(A._GetAutoObject(A.Device.Helper
).Am5()){if(A._GetAutoObject(A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.
Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Cs(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7t(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap2:function(G){var B;if(!!this.K8)this.K8.Ap2(this);},GI:function(G){if(
A._GetAutoObject(A.Device.Helper).Am5())this.C$.Z(true);else this.C$.Z(false);},
ApE:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",Atb,Ar.Id);}},ABa:function(G){this.
LU(this);this.AeX(A._GetAutoObject(A.Device.Helper).Abx(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JO(this.Db);},ApF:function(G){var F;C.H2.ApF.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.AnX));},A4c:function(G){A._GetAutoObject(
C.A5).Cd(79);},_Init:function(aArg){C.H2._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcN._Init.call(this.AcN={I:this},0);C.Rb._Init.call(this.Ln={I:this
},0);C.SY._Init.call(this.Co={I:this},0);C.BU._Init.call(this.G7={I:this},0);C.BU.
_Init.call(this.Ll={I:this},0);this.__proto__=C.ASd;var B;this.Ds(C.APv);this.Ln.
H(Ale);this.Ln.Ai(true);this.Ln.T(A.aaR(A.acf.ACG));this.CH.H(AcS);this.Co.H(AcS
);this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Aef));this.Co.AFS(true);this.G7.H(AcS);
this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Ars));this.Ll.H(AcS);this.Ll.Ai(true);this.
Ll.T(A.aaR(A.acf.AgI));this.J(this.Ln,-5);this.J(this.Co,-3);this.J(this.G7,-1);
this.J(this.Ll,-1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.AcN.L6(A._GetAutoObject(A.
Device.Helper).W);this.Ln.Gt([this,this.D$,this.GT]);this.Ln.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASR,B.AnF]);this.Co.Gt([this,this.D$,this.GT]);this.Co.L5([
B=this.Co,B.FY]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Aca([B=A._GetAutoObject(A.
Device.Helper).W,B.Awd,B.Q6]);this.Gp.Au([B=this.AcN,B.Ca,B.Cb]);this.Gp.CI(this.
AcN);this.G7.Au([B=this.BirthType,B.Ca,B.Cb]);this.G7.CI(this.BirthType);this.Ll.
Au([B=this.EaseOfDelivery,B.Ca,B.Cb]);this.Ll.CI(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H2;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcN._Done();this.Ln._Done();this.Co._Done();this.G7._Done();this.Ll.
_Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcN._ReInit();this.Ln._ReInit(
);this.Co._ReInit();this.G7._ReInit();this.Ll._ReInit();this.Ln.T(A.aaR(A.acf.ACG
));this.Co.T(A.aaR(A.acf.Aef));this.G7.T(A.aaR(A.acf.Ars));this.Ll.T(A.aaR(A.acf.
AgI));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.K8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcN)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ll)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMF={Init:function(aArg){var B;A.zX([this,this.ALu],[B=A._GetAutoObject(A.Device.
Device),B.AEV,B.AI2],0);A.pe([this,this.ALu],this);},AKX:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).Ab0){case 0:Be=A._GetAutoObject(A.Device.
Helper).ADb();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOP();break;case
2:Be=A._GetAutoObject(A.Device.Helper).MC();break;default:throw new Error(A0B+A.
_GetAutoObject(A.Device.Device).Ab0.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALu:function(G){switch(A._GetAutoObject(A.Device.Device).Ab0){case
0:this.Dl(A.aaR(A.acf.ASj));break;case 1:this.Dl(A.aaR(A.acf.Bk0));break;case 2:
this.Dl(A.aaR(A.acf.Av6));break;default:A.ab5("%s",A0B+A._GetAutoObject(A.Device.
Device).Ab0.toFixed());}},_Init:function(aArg){C.Amw._Init.call(this,aArg);this.
__proto__=C.AMF;this.BnO(C.APL);this.El.Ab8(A._NewObject(C.APA,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASe={AAv:0,Adi:null
,Au2:null,BeQ:0,A4q:0,A3j:0,Init:function(aArg){this.BeQ=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adi=A._GetAutoObject(A.Device.Device).An.Filter;this.AAv=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3j=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LU:function(G){A._GetAutoObject(A.Device.Helper).W.AnF(this.AAv);A._GetAutoObject(
A.Device.Helper).W.Ae5(true);switch(this.A3j){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyL,this.A3j);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adi);if(!!this.A4q)this.Bhp();},Agg:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhp:function(){var At4=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.BeQ);At4.Fl(Ad,A._GetAutoObject(
A.Device.Device).An);At4.AwE(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At4.
ArW(false);At4.AwT(At4.LactationNumber+1);At4.Cs(A._GetAutoObject(A.Device.Device
).An);},Ap2:function(G){this.A4q++;var ByW=A._GetAutoObject(A.Device.Converter).
Bh9(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4q<ByW)&&(A._GetAutoObject(
A.Device.Helper).Aj3(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AZ(59,true,A.jV,0,[this,this.Vq]);else this.BdM(
this);},Vq:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdM(this);else if(!!Ar&&(Ar.PopupState===7))this.
ABa(this);},ABa:function(G){var B;var Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfX=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pe=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ6=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au2)(B=this.Au2
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ig);A._GetAutoObject(
A.Device.Helper).W.Akr(AfX);A._GetAutoObject(A.Device.Helper).W.N7(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pe);A._GetAutoObject(A.Device.Helper).W.Akt(AJ6);},BdM:function(
G){this.Bhp();A._GetAutoObject(C.A5).Fz();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adi);},A_s:function(E){if(A.aa0(this.Au2,E))return;this.Au2=E;},_Init:function(
aArg){this.__proto__=C.ASe;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adi)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMV={Init:function(aArg){
var B;A.zX([this,this.Bfb],[B=A._GetAutoObject(A.Device.Device),B.ASB,B.A0C],0);
this.Bfb(this);},Cs:function(){A.ab5("%s",BtA);},Fl:function(AcX){C.VE.Fl.call(this
,AcX);var O;for(O=16;O>0;O--)this.If.Set(O,this.If.Get(O-1));this.If.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",BtB);},AD9:function(Ei){switch(Ei){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfb:
function(G){this.Fl(A._GetAutoObject(A.Device.Device).AuI);A.we(this,0);},_Init:
function(aArg){C.VE._Init.call(this,aArg);this.__proto__=C.AMV;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuV={_Init:function(){C.
AMV._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JR={C9:null,V:null,A8h:true,T:function(E){C.I9.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I9.Dg.call(this,E);this.V.L(E);},BnT:function(E){if(this.
A8h===E)return;this.A8h=E;this.C9.Z(E);},_Init:function(aArg){C.I9._Init.call(this
,aArg);A.acg.C9._Init.call(this.C9={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JR;this.C9.DE(BtC);this.C9.DO(BtD);this.C9.L(A.jb.Bb);this.V.
A1(0x3F);this.V.H(BtE);this.V.A4(0x11);this.V.L(A.jb.Text);this.J(this.C9,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.
fl.Bg));},_Done:function(){this.__proto__=C.I9;this.C9._Done();this.V._Done();C.
I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this);this.C9._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Ks));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.I9._Mark.call(this,D);if((B=this.C9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APA={AgW:null,Df:null,Abv:null,Fj:null,E$:
null,Init:function(aArg){var B;A.zX([this,this.A44],[B=A._GetAutoObject(A.Device.
Device),B.AEV,B.AI2],0);A.pe([this,this.A44],this);},Dg:function(E){C.YD.Dg.call(
this,E);this.Df.L(E);},AE1:function(G){A.pe([this,this.A44],this);},ABc:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E9();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C6:function(G){var B;var F;C.YD.C6.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjS));return;}var BzB=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(38,0)
)?B:null);var Bcm=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DN(14,0))?B:null);if(!!BzB)this.Df.Ax(A.aaL(A.ach.ADq));else if(
!!Bcm&&(Bcm.A6===1))this.Df.Ax(A.aaL(A.ach.AQd));else this.Df.Ax(A.aaL(A.ach.AjS
));},A44:function(G){var F;var Filter=null;var AOD;switch(A._GetAutoObject(A.Device.
Device).Ab0){case 0:Filter=A._GetAutoObject(A.Device.Helper).ADb();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOP();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MC();break;default:throw new Error(A0B+A._GetAutoObject(A.Device.
Device).Ab0.toFixed());}var Ai2=this.Akl();if(Ai2>0){AOD=A._NewObject(A.Device.Int32FilterCriterion
,0);AOD.Initialize(1,4,Ai2,false);Filter.CY(AOD);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeY(false);},Ov:function(G){if(!this.Akl())this.AW.AeY(true
);this.Ba(this.AW);this.Am();},M6:function(G){this.AW.AeY(false);this.Ba(this.AgW
);this.Am();},_Init:function(aArg){C.YD._Init.call(this,aArg);C.Arc._Init.call(this.
AgW={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Abv._Init.call(this.Abv={
I:this},0);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.BF._Init.call(this.E$={
I:this},0);this.__proto__=C.APA;var B;this.H(BtF);this.AW.H(BtG);this.T9.H(BtH);
this.Gw.Z(false);this.AgW.H(BtI);this.Df.H(BtJ);this.Abv.Au(A._GetAutoObject(A.Device.
Device).Ab0);this.Fj.Filter=6;this.E$.Filter=7;this.J6(this.A_,-1);this.J(this.AgW
,-1);this.J(this.Df,-1);this.AgW.CI(this.Abv);this.AgW.Au([B=this.Abv,B.Ca,B.Cb]
);this.Df.Ax(A.aaL(A.ach.AjS));this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6
];this.Init(aArg);},_Done:function(){this.__proto__=C.YD;this.AgW._Done();this.Df.
_Done();this.Abv._Done();this.Fj._Done();this.E$._Done();C.YD._Done.call(this);}
,_ReInit:function(){C.YD._ReInit.call(this);this.AgW._ReInit();this.Df._ReInit();
this.Abv._ReInit();this.Fj._ReInit();this.E$._ReInit();},_Mark:function(D){var B;
C.YD._Mark.call(this,D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abv={AeU:null
,Init:function(aArg){var B;A.zX([this,this.BeS],[B=A._GetAutoObject(A.Device.Device
),B.AEV,B.AI2],0);A.pe([this,this.BeS],this);},Dv:function(){return 3;},Au:function(
E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw0(E);},ADa:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return null;return this.AeU.AsL(aIndex
);},ADc:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return-1;return this.
AeU.AsM(aIndex);},BeS:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ab0;A.
abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.AeU._Init.call(this.AeU={I:this},0);this.__proto__=C.Abv;this.BI.Set(0,
0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AeU._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(
this);this.AeU._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=
this.AeU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APL={Es:null,IU:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=
C.APL;this.H(Oi);this.Background.H(Oi);this.Es.H(AIy);this.Es.R(A.aaR(A.acf.A7z)
);this.Es.A4(0x12);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIz);this.IU.
Ho(5);this.IU.A4(0x14);this.IU.R(A.aaR(A.acf.AG1));this.IU.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.HK));this.
Es.Cm(A.aaL(A.fl.Bg));this.IU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(A.aaR(A.acf.
A7z));this.IU.R(A.aaR(A.acf.AG1));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.
HK));this.Es.Cm(A.aaL(A.fl.Bg));this.IU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J9:null,BgX:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BfB(this);else A._GetAutoObject(A.Device.Device).AZ(63,true,A.
jV,0,[this,this.Vq]);},BfB:function(G){A._GetAutoObject(C.A5).Fz();},Vq:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.BfB(this);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);A.acg.Text._Init.call(this.J9={I:this},0);this.__proto__=C.MotherScanScreen;
this.Ds(C.APz);this.Jl.H(BtK);this.Jl.AkB(2);this.AcC.Z(false);this.ARV=12;this.
Number.H(BtL);this.Number.R(A.aaR(A.acf.A$W));this.A5y=false;this.J9.H(BtM);this.
J9.Ho(5);this.J9.Lu(true);this.J9.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.ABX));this.J9.L(A.jb.Text);this.J6(this.Jl,-1);this.J6(this.IZ,-1);this.
J6(this.AcC,-1);this.J(this.J9,0);this.J9.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mp;this.J9._Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.
call(this);this.J9._ReInit();this.Number.R(A.aaR(A.acf.A$W));this.J9.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.ABX));this.J9.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mp._Mark.call(this,D);if((B=this.J9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APz={_Init:function(aArg){C.AqZ.
_Init.call(this,aArg);this.__proto__=C.APz;this.DT.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jl={AbR:null,AbQ:null,AbP:null,QJ:null,CountryToString:null,AsO:0,CP:function(
){this.Am();},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.QJ.R(this.CountryToString.
Lz(A._GetAutoObject(A.Device.Converter).A7X(A._GetAutoObject(A.Device.Device).Language
))+BtN);},AkB:function(E){if(this.AsO===E)return;this.AsO=E;var bitmap=null;var A2n=
BtO;var A2m=null;var A2o=false;switch(E){case 0:bitmap=A.aaL(A.ach.Ara);break;case
1:{bitmap=A.aaL(A.ach.AQS);A2n=BtP;A2m=A.aaL(A.fl.Ak);A2o=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQT);A2n=BtQ;A2m=A.aaL(A.fl.Bg);A2o=true;}break;default:throw new Error(
BtR+E.toFixed());}this.AbP.Ax(bitmap);this.AbQ.Ax(bitmap);this.AbR.Ax(bitmap);this.
QJ.H(A.abJ(this.QJ.M,A2n));this.QJ.S(A2m);this.QJ.Z(A2o);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbR={I:this},0);A.acg.Ap._Init.call(this.AbQ={I:this},0);A.acg.Ap._Init.
call(this.AbP={I:this},0);A.acg.Text._Init.call(this.QJ={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jl;this.H(AIS);this.
AbR.A1(0x3);this.AbR.H(AIS);this.AbR.L(A.jb.Ia);this.AbR.Cx(2);this.AbQ.A1(0x3);
this.AbQ.H(AIS);this.AbQ.L(A.jb.Aea);this.AbQ.Cx(1);this.AbP.A1(0x3);this.AbP.H(
AIS);this.AbP.L(A.jb.Text);this.AbP.Cx(0);this.QJ.A1(0x14);this.QJ.H(BtS);this.QJ.
L(0xFF020202);this.QJ.Z(false);this.J(this.AbR,0);this.J(this.AbQ,0);this.J(this.
AbP,0);this.J(this.QJ,0);this.AbR.Ax(A.aaL(A.ach.Ara));this.AbQ.Ax(A.aaL(A.ach.Ara
));this.AbP.Ax(A.aaL(A.ach.Ara));this.QJ.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbR._Done();this.AbQ._Done();this.AbP._Done();this.QJ._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbR._ReInit();this.AbQ._ReInit();this.AbP._ReInit(
);this.QJ._ReInit();this.CountryToString._ReInit();this.QJ.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsO={Transponder:0,BGP:1,BGQ:2};C.APv={Ap:null,Dg:function(E){C.BR.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APv;this.Ap.H(AyM);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APm));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Il:0,AaK:4,Al5:function(G){C.Ra.Al5.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Ben()){this.Il=A._GetAutoObject(A.Device.Helper).WU.Id;var Aiw=A._GetAutoObject(
A.Device.Helper).A7V(this.Il,A._GetAutoObject(A.Device.Helper).W);if(Aiw){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Il),0,[
this,this.Vq]);return;}Aiw=A._GetAutoObject(A.Device.Helper).Bkp(this.Il,A._GetAutoObject(
A.Device.Helper).W);if(Aiw&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Il)){A._GetAutoObject(A.Device.Device).AZ(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Il),0,[this,this.Vq]);return;}this.AaK=A._GetAutoObject(A.Device.
Helper).ARu(this.Il);switch(this.AaK){case 0:A._GetAutoObject(A.Device.Device).AZ(
45,true,this.Il.toFixed().length.toFixed(),0,[this,this.Vq]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).AsQ(this.Il);A._GetAutoObject(A.Device.
Device).AZ(46,true,BN.toFixed(),0,[this,this.Vq]);}break;case 3:this.BgP();break;
default:throw new Error(AIm+this.AaK.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A5).Fz();},Vq:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaK===2)this.BgP();else A._GetAutoObject(
A.Device.Device).AhI();break;case 5:this.Ew(this);break;default:;}},BgP:function(
){A._GetAutoObject(A.Device.Helper).W.Nr(this.Il);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PX(this.Il);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AZ(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Ds(C.IP);this.Number.R(A.aaR(A.acf.A$Q
));this.Jl.H(BtT);this.IZ.H(BtU);this.AkB(1);this.N.CF=[this,this.Ew];this.N.C3(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$Q));},_className:"Application::SetSaveNaisIdScreen"};C.AN_={LU:function(
G){C.AqI.LU.call(this,G);A.pe([this,this.BCw],this);},BCw:function(G){this.JO(this.
Eg);},_Init:function(aArg){C.AqI._Init.call(this,aArg);this.__proto__=C.AN_;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UU={Animal:null,WhereAboutsToString:
null,Gb:function(aIndex){return this.WhereAboutsToString.BT(this.C8(aIndex));},Au:
function(E){C.Cn.Au.call(this,E);if(!!this.Animal)this.Animal.Nt(E);},A5a:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
Ca,this.Cb],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A5a],[B=this.Animal,B.Awp,B.Nt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A5a],[B=this.Animal,B.Awp,B.Nt],0);A.pe([this,this.A5a],this);}
,_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UU;this.BI.Set(0,1);this.
BI.Set(1,2);this.BI.Set(2,3);this.BI.Set(3,4);this.BI.Set(4,5);},_Done:function(
){this.__proto__=C.Cn;this.WhereAboutsToString._Done();C.Cn._Done.call(this);},_ReInit:
function(){C.Cn._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UV={Dv:function(){return 6;},_Init:function(aArg){C.UU._Init.call(this,aArg);
this.__proto__=C.UV;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.BI.Set(
3,3);this.BI.Set(4,4);this.BI.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcN={Dv:function(){return 5;},_Init:function(aArg){C.UU._Init.call(this,aArg
);this.__proto__=C.AcN;this.BI.Set(0,6);this.BI.Set(1,7);this.BI.Set(2,8);this.BI.
Set(3,9);this.BI.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdV={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bc7],[B=A._GetAutoObject(A.Device.
Device),B.ASC,B.A0D],0);A.pe([this,this.Bc7],this);},Dv:function(){return 2;},C8:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aws(E);},Bc7:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Agy;A.abo([this,this.Ca,this.Cb],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdV;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGP={FN:null
,EA:null,EartagNrAssignmentMode:null,Fj:null,E$:null,HI:null,AW:null,Kq:null,Nj:
null,A8:0,AM:0,Init:function(aArg){},Aj:function(Ae){C.Eh.Aj.call(this,Ae);if(this.
A8===1){if(this.Hm){this.AW.FP(A.jb.CK);this.HI.CW(A.jb.CK);this.Background.L(A.
jb.CV);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CV);this.HI.CW(A.jb.CV);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hm){this.AW.FP(A.jb.CK);this.HI.CW(
A.jb.CK);}else{this.AW.FP(A.jb.CV);this.HI.CW(A.jb.CV);}this.Ba(null);}this.Nj.L(
this.V.AQ);},H0:function(G){C.Eh.H0.call(this,G);if(!this.A8)this.FY(this);else this.
He(this);},DL:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.
N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[0])));}},FY:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;if(!this.A8&&!!this.N)
this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{this.Ba(this.
AW);if(!this.AM)this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(
Ato+this.A8.toFixed());}this.DL(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Ov:function(G){this.ABl(2);},M6:function(G){this.ABl(7);},ABl:
function(GB){var B;var AzH=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzH){
var AAx=(A.Core.P.isPrototypeOf(B=this.QK(AzH,GB,0x15))?B:null);if(!!AAx){this.Ba(
AAx);return true;}}return false;},Af4:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nj.Ax(
A._GetAutoObject(A.Device.Converter).AmU(2));break;case 1:this.Nj.Ax(A._GetAutoObject(
A.Device.Converter).AmU((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Bba+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4J],this);},A4J:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kq.Ae0(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Ans,B.Aov]);this.Kq.
Ae0([B=A._GetAutoObject(A.Device.Device),B.AER,B.AIZ]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awg
,B.AyX]);this.Kq.Ae0([B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY]);this.Kq.Ae0([B=
A._GetAutoObject(A.Device.Device),B.ASI,B.A0F]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Ans,B.Aov]);this.Kq.Ae0([B=A._GetAutoObject(A.Device.Device),
B.AER,B.AIZ]);}break;default:throw new Error(BtV+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bba+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uu:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af4],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af4],this.EA,0);if(!!
E)A.pe([this,this.Af4],this);},Aks:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af4],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af4],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af4],this);},Um:function(){return this.AM;},_Init:function(
aArg){C.Eh._Init.call(this,aArg);A.Core.BF._Init.call(this.Fj={I:this},0);A.Core.
BF._Init.call(this.E$={I:this},0);C.Arc._Init.call(this.HI={I:this},0);C.AvR._Init.
call(this.AW={I:this},0);C.Au6._Init.call(this.Kq={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);this.__proto__=C.AGP;var B;this.H(Aam);this.V.As(false);this.
V.R(Atd);this.V.L(A.jb.Bm);this.Fj.Filter=6;this.E$.Filter=7;this.HI.H(BtW);this.
AW.H(BtX);this.Nj.H(BtY);this.J(this.HI,0);this.J(this.AW,0);this.J(this.Nj,0);this.
FN=A._NewObject(C.Aeu,0);this.Fj.BG=[this,this.Ov];this.E$.BG=[this,this.M6];this.
HI.CI(this.Kq);this.HI.Au([B=this.Kq,B.Ca,B.Cb]);this.AW.Au([this,this.Um,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eh;this.Fj._Done();this.E$.
_Done();this.HI._Done();this.AW._Done();this.Kq._Done();this.Nj._Done();C.Eh._Done.
call(this);},_ReInit:function(){C.Eh._ReInit.call(this);this.Fj._ReInit();this.E$.
_ReInit();this.HI._ReInit();this.AW._ReInit();this.Kq._ReInit();this.Nj._ReInit(
);},_Mark:function(D){var B;C.Eh._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN0={Ww:
null,Zk:null,Zh:null,Ue:null,Init:function(aArg){this.Ba(this.Ww);},AEJ:function(
G){var BeO=(C.Anh.isPrototypeOf(G)?G:null);if(!!BeO)A._GetAutoObject(A.Device.Device
).AZ(BeO.AdD,true,A.jV,0,null);},DG:function(G){if((this.Cr.CO===7)&&(this.AV===
this.Ue))A._GetAutoObject(A.Device.Device).AZ(10,true,A.jV,0,null);else if((this.
Cr.CO===6)&&(this.AV===this.Ue))A._GetAutoObject(C.A5).Cd(91);C.Ek.DG.call(this,
G);},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.Anh._Init.call(this.Ww={I:
this},0);C.Anh._Init.call(this.Zk={I:this},0);C.Anh._Init.call(this.Zh={I:this},
0);C.Anh._Init.call(this.Ue={I:this},0);this.__proto__=C.AN0;this.Ds(C.APa);this.
Ww.H(I1);this.Ww.Ai(true);this.Ww.T(A.aaR(A.acf.AhH));this.Ww.Bh(false);this.Ww.
AdD=79;this.Zk.H(Qc);this.Zk.Ai(true);this.Zk.T(A.aaR(A.acf.A$9));this.Zk.Bh(true
);this.Zk.AdD=77;this.Zh.H(Aan);this.Zh.Ai(true);this.Zh.T(A.aaR(A.acf.A7u));this.
Zh.Bh(false);this.Zh.AdD=78;this.Ue.H(Alf);this.Ue.Ai(true);this.Ue.T(A.aaR(A.acf.
About));this.Ue.Bh(true);this.Ue.AdD=3;this.J(this.Ww,-1);this.J(this.Zk,-1);this.
J(this.Zh,-1);this.J(this.Ue,-1);this.Ww.AR=[this,this.AEJ];this.Zk.AR=[this,this.
AEJ];this.Zh.AR=[this,this.AEJ];this.Ue.AR=[this,this.AEJ];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ek;this.Ww._Done();this.Zk._Done();this.Zh._Done();this.
Ue._Done();C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.
Ww._ReInit();this.Zk._ReInit();this.Zh._ReInit();this.Ue._ReInit();this.Ww.T(A.aaR(
A.acf.AhH));this.Zk.T(A.aaR(A.acf.A$9));this.Zh.T(A.aaR(A.acf.A7u));this.Ue.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.Ww
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APa={_Init:function(aArg){C.Kt.
_Init.call(this,aArg);this.__proto__=C.APa;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.ANY={FactoryResetScope:null,Uh:null,Wt:null,Uj:null,Init:function(aArg){this.
Ba(this.Uh);A.pe([this,this.MT],this);},Bk_:function(G){switch(this.FactoryResetScope.
C8(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AZ(33,true
,A.jV,0,[this,this.A4s]);break;case 0:A._GetAutoObject(A.Device.Device).AZ(7,true
,A.jV,0,[this,this.A4s]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(115,true
,A.jV,0,[this,this.A4s]);break;default:A.ab5("%s%i",BtZ,this.FactoryResetScope.Q
);}},A4s:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bpe();A._GetAutoObject(A.Device.Device).AZ(8,true,A.jV,0,null);A._GetAutoObject(
C.A5).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bpd();A._GetAutoObject(
A.Device.Device).ArT(0);A._GetAutoObject(A.Device.Device).ArU(0);A._GetAutoObject(
A.Device.Device).ArV(0);A._GetAutoObject(A.Device.Device).ArZ(0);A._GetAutoObject(
A.Device.Device).Ar0(0);A._GetAutoObject(A.Device.Device).Ar1(0);A._GetAutoObject(
A.Device.Device).Us(5);A._GetAutoObject(A.Device.Device).AwH(0);A._GetAutoObject(
A.Device.Device).AwI(0);A._GetAutoObject(A.Device.Device).AwJ(0);A._GetAutoObject(
A.Device.Device).Aw1(1);A._GetAutoObject(A.Device.Device).Aw2(1);A._GetAutoObject(
A.Device.Device).Aw3(1);A._GetAutoObject(A.Device.Device).AZ(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bpc();A._GetAutoObject(A.Device.
Device).AZ(116,true,A.jV,0,null);A._GetAutoObject(C.A5).Cd(37);}break;default:A.
ab5("%s%e",AIn,Ar.Id);}},_Init:function(aArg){C.Ek._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Np._Init.call(this.Uh={I:this},0
);C.Np._Init.call(this.Wt={I:this},0);C.BU._Init.call(this.Uj={I:this},0);this.__proto__=
C.ANY;var B;this.Ds(C.AO_);this.Uh.H(I1);this.Uh.Ai(true);this.Uh.T(A.aaR(A.acf.
ACI));this.Uh.Bh(false);this.Uh.Ns(93);this.Wt.H(Qc);this.Wt.Ai(true);this.Wt.T(
A.aaR(A.acf.AdU));this.Wt.Bh(true);this.Wt.Ns(92);this.Uj.H(A0A);this.Uj.Ai(true
);this.Uj.Bmu(true);this.Uj.T(A.aaR(A.acf.A6X));this.Uj.Bh(false);this.J(this.Uh
,-1);this.J(this.Wt,-1);this.J(this.Uj,-1);this.Uh.AR=[B=this.Uh,B.Nv];this.Wt.AR=[
B=this.Wt,B.Nv];this.Uj.AR=[this,this.Bk_];this.Uj.Au([B=this.FactoryResetScope,
B.Ca,B.Cb]);this.Uj.CI(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ek;this.FactoryResetScope._Done();this.Uh._Done();this.Wt._Done(
);this.Uj._Done();C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uh._ReInit();this.Wt._ReInit();this.Uj._ReInit(
);this.Uh.T(A.aaR(A.acf.ACI));this.Wt.T(A.aaR(A.acf.AdU));this.Uj.T(A.aaR(A.acf.
A6X));},_Mark:function(D){var B;C.Ek._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO_={_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO_;this.Text.R(A.aaR(A.acf.ACJ
));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACJ));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq1={QW:null,Wj:null
,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(this.QW={I:this
},0);C.CG._Init.call(this.Wj={I:this},0);this.__proto__=C.Aq1;this.QW.H(Bt0);this.
QW.R(A.aaR(A.acf.A$1));this.QW.A4(0x12);this.QW.L(A.jb.Text);this.Wj.H(Ba7);this.
Wj.R(A.aaR(A.acf.An7));this.Wj.L(A.jb.Text);this.J(this.QW,0);this.J(this.Wj,0);
this.QW.S(A.aaL(A.fl.Af));this.QW.AY(A.aaL(A.fl.Ak));this.QW.Cm(A.aaL(A.fl.Bg));
this.Wj.S(A.aaL(A.fl.Af));this.Wj.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T1;this.QW._Done();this.Wj._Done();C.T1._Done.call(this);},_ReInit:function(){
C.T1._ReInit.call(this);this.QW._ReInit();this.Wj._ReInit();this.QW.R(A.aaR(A.acf.
A$1));this.Wj.R(A.aaR(A.acf.An7));this.QW.S(A.aaL(A.fl.Af));this.QW.AY(A.aaL(A.fl.
Ak));this.QW.Cm(A.aaL(A.fl.Bg));this.Wj.S(A.aaL(A.fl.Af));this.Wj.AY(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T1._Mark.call(this,D);if((B=this.QW)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APG={QX:null,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(
this.QX={I:this},0);this.__proto__=C.APG;this.QX.H(Bt1);this.QX.R(A.aaR(A.acf.Ul
));this.QX.A4(0x12);this.QX.L(A.jb.Text);this.J(this.QX,0);this.QX.S(A.aaL(A.fl.
Af));this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cm(A.aaL(A.fl.Bg));},_Done:function(){this.
__proto__=C.T1;this.QX._Done();C.T1._Done.call(this);},_ReInit:function(){C.T1._ReInit.
call(this);this.QX._ReInit();this.QX.R(A.aaR(A.acf.Ul));this.QX.S(A.aaL(A.fl.Af)
);this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;
C.T1._Mark.call(this,D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqu={IQ:null,AbH:null,Eb:null
,Bl:function(aSize){C.Nb.Bl.call(this,aSize);this.IQ.H([this.GA.M[2],0,this.GA.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Eb.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1
,aSize[1]]);this.AbH.H([this.IQ.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.Nb.
Aj.call(this,Ae);this.AbH.L(this.GA.AQ);this.IQ.L(this.GA.AQ);},Ci:function(Ad){
C.Nb.Ci.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ig=this.AX.
AmV(Ad,14);var AtX=this.AX.AOT(Ad,7);this.IQ.Ax(A._GetAutoObject(A.Device.Converter
).AmU(AtX));this.AbH.Ax(A._GetAutoObject(A.Device.Converter).A5D(Ig));this.Am();
}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Ap._Init.call(this.IQ={
I:this},0);A.acg.Ap._Init.call(this.AbH={I:this},0);A.acg.AK._Init.call(this.Eb={
I:this},0);this.__proto__=C.Aqu;this.IQ.H(Ba9);this.IQ.L(A.jb.Text);this.AbH.H(Bt2
);this.AbH.L(A.jb.Text);this.Eb.H(Bt3);this.Eb.L(A.jb.Bb);this.J(this.IQ,0);this.
J(this.AbH,0);this.J(this.Eb,0);this.IQ.Ax(A.aaL(A.aci.TS));this.AbH.Ax(A.aaL(A.
aci.TS));},_Done:function(){this.__proto__=C.Nb;this.IQ._Done();this.AbH._Done();
this.Eb._Done();C.Nb._Done.call(this);},_ReInit:function(){C.Nb._ReInit.call(this
);this.IQ._ReInit();this.AbH._ReInit();this.Eb._ReInit();},_Mark:function(D){var
B;C.Nb._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eb)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANd={ZW:null,Bl:
function(aSize){C.Nb.Bl.call(this,aSize);this.ZW.H([this.GA.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.Nb.Aj.call(this,Ae);this.ZW.L(this.GA.AQ);},Ci:function(
Ad){C.Nb.Ci.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Jt=this.
AX.KS(Ad,26);if(Jt>0)this.ZW.R(A.ab2(Jt.toFixed(),5));else this.ZW.R(Rr);this.Am(
);}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZW={I:this},0);this.__proto__=C.ANd;this.ZW.H(Bt4);this.J(this.ZW,0);this.ZW.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nb;this.ZW._Done();C.Nb._Done.
call(this);},_ReInit:function(){C.Nb._ReInit.call(this);this.ZW._ReInit();this.ZW.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nb._Mark.call(this,D);if((B=this.ZW
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR8={Ap:null,Aj:function(Ae){C.AeV.Aj.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR8;this.Text.H(Bt5);this.Ap.H(A0v);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afd));},_Done:function(){this.__proto__=C.AeV;this.Ap._Done(
);C.AeV._Done.call(this);},_ReInit:function(){C.AeV._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeV._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.YC={Text:
null,Df:null,AP:null,Gw:null,D3:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.Nz],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIW],0);A.zV([this,this.Nz
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nz],this);},Dg:function(
E){C.BR.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D3.Zz(E);}
,WJ:function(E){C.BR.WJ.call(this,E);this.D3.CW(E);},DY:function(G){this.D3.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nz:function(s){this.DY(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C9._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D3._Init.call(this.D3={I:this},0);
A.acg.C9._Init.call(this.A_={I:this},0);this.__proto__=C.YC;this.Text.H(Bt6);this.
Text.A4(0x11);this.Df.H(AyK);this.AP.DE(Ba3);this.AP.DO(Ba4);this.AP.L(A.jb.Bb);
this.Gw.H(Bt7);this.Gw.L(A.jb.CV);this.D3.A1(0x14);this.D3.H(Bt8);this.D3.Zz(A.jb.
Bm);this.D3.CW(A.jb.Ri);this.D3.Ho(2);this.A_.DE(Bt9);this.A_.DO(Bt_);this.A_.L(
A.jb.Bb);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D3,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjS));this.Gw.Ax(A.aaL(A.ach.Gw));this.D3.
S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D3._Done();this.A_.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D3._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));this.
D3.S(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Act={FN:null
,J4:null,J3:null,AkJ:null,AkK:null,Q8:null,QH:null,AbG:null,V9:null,PN:null,PO:null
,SE:null,Gy:null,Gz:null,JB:null,AlO:0,AlS:0,D8:0,DX:0,A8:0,Bl:function(aSize){var
B;this.DC.H([this.Hy.M[2]-10,this.Hy.M[1],this.H8.M[0]+10,this.Hy.M[3]]);this.DC.
AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.DC.Gu,true,null,null);},Aj:function(Ae
){var B;C.BU.Aj.call(this,Ae);var Fu=((Ae&0x20)===0x20);var GF=this.Bo.Bw;if(!!this.
Q)this.GI(this);if((this.A8===1)||(this.A8===2)){var A1J=this.A2J(this.A8);if(!!
A1J){this.AbG.Z(true);this.AbG.H(A1J.M);this.AbG.L(this.V.AQ);this.V9.Z(true);this.
V9.H(A1J.M);}else{this.AbG.Z(false);this.V9.Z(false);}this.Hy.Z(false);this.H8.Z(
false);}else{this.AbG.Z(false);this.V9.Z(false);this.Hy.Z(Fu||GF);this.H8.Z(Fu||
GF);}},Qu:function(G){if(!!this.Q){if(this.FH===1)A.pe([this,this.Vh],this);else
if(this.FH===4)A.pe([this,this.A02],this);else if(this.FH===5)A.pe([this,this.A00
],this);}C.BU.Qu.call(this,G);},Kh:function(G){switch(this.A8){case 0:C.BU.Kh.call(
this,G);break;case 2:break;default:this.Adx(this);}},Kc:function(G){switch(this.
A8){case 0:C.BU.Kc.call(this,G);break;default:this.Aio(this);}},A2e:function(G){
var F;if(this.A8===1){var BP=this.D8;this.D8=this.D8-10;if(this.D8<this.AlS)this.
D8=this.AlS;if(this.D8<A._GetAutoObject(A.Device.Device).AcJ)this.D8=A._GetAutoObject(
A.Device.Device).AcJ;if(this.DX!==BP){if(!!this.J4)(F=this.J4,F[2].call(F[0],this.
D8));A.abo(this.J4,0);}}if(this.A8===2){var BP=this.DX;this.DX=this.DX-10;if(this.
DX<this.D8)this.DX=this.D8;if(this.DX!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[
0],this.DX));A.abo(this.J3,0);}}this.DL(this);this.Am();},A00:function(s){this.A2e(
s);},Al3:function(G){this.FH=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A00],this
);this.Bo.As(false);}this.Bo.As(true);},A2Q:function(G){var F;if(this.A8===1){var
BP=this.D8;this.D8=this.D8+10;if(this.D8>this.DX)this.D8=this.DX;if(this.D8!==BP
){if(!!this.J4)(F=this.J4,F[2].call(F[0],this.D8));A.abo(this.J4,0);}}if(this.A8===
2){var BP=this.DX;this.DX=this.DX+10;if(this.DX>this.AlO)this.DX=this.AlO;if(this.
DX!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.DX));A.abo(this.J3,0);}}this.
DL(this);this.Am();},A02:function(s){this.A2Q(s);},Al4:function(G){this.FH=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A02],this);this.Bo.As(false);}this.Bo.As(true
);return;},Vh:function(G){this.Ex(this.A8+1);},Adx:function(G){this.FH=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vh],this);this.Bo.As(false);}this.Bo.As(true);}
,GI:function(G){},AfI:function(s){this.GI(s);},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.Vh];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am1
));(F=this.N,F[1].call(F[0])).E5(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Aio];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.FN.AkN((F=this.N,F[1].call(F[
0])));}},A_V:function(E){if(A.aaZ(this.J4,E))return;if(!!this.J4)A.z$([this,this.
A4e],this.J4,0);this.J4=E;if(!!this.J4)A.zX([this,this.A4e],this.J4,0);A.pe([this
,this.A4e],this);},A4e:function(G){var F;this.D8=(F=this.J4,F[1].call(F[0]));this.
Am();},A_U:function(E){if(A.aaZ(this.J3,E))return;if(!!this.J3)A.z$([this,this.A4d
],this.J3,0);this.J3=E;if(!!this.J3)A.zX([this,this.A4d],this.J3,0);A.pe([this,this.
A4d],this);},A4d:function(G){var F;this.DX=(F=this.J3,F[1].call(F[0]));this.Am();
},FY:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;
if(!this.A8)this.FN.Ajy((F=this.N,F[1].call(F[0])));this.A8=EN;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DL(this);this.Gz.Bw=!!this.A8;this.Gy.Bw=!!this.A8;this.
Am();},Aio:function(G){if(this.A8>1)this.Ex(this.A8-1);},A4r:function(G){},Ay6:function(
s){this.A4r(s);},A32:function(G){},Bch:function(s){this.A32(s);},A2J:function(Atw
){return null;},_Init:function(aArg){C.BU._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkJ={I:this},0);A.acg.AK._Init.call(this.AkK={I:this},0);A.acg.AK._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AK._Init.call(
this.AbG={I:this},0);A.acg.BX._Init.call(this.V9={I:this},0);A.acg.Text._Init.call(
this.PN={I:this},0);A.acg.Text._Init.call(this.PO={I:this},0);A.acg.Text._Init.call(
this.SE={I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.Core.BF._Init.call(
this.Gz={I:this},0);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.Act;
this.H(AfF);this.T(A.aaR(A.acf.Arr));this.Background.H(AfF);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG_));this.V.A4(0x12);this.AkJ.H(Bt$);this.AkJ.L(A.jb.Gm);this.AkK.
H(Bua);this.AkK.L(A.jb.Ia);this.Q8.H(Bub);this.Q8.L(A.jb.E1);this.QH.H(Buc);this.
AbG.H(Bud);this.V9.H(Bue);this.V9.Nu(3);this.V9.L(A.jb.AV);this.V9.Z(false);this.
PN.H(Buf);this.PN.Ho(8);this.PN.Je(true);this.PN.A4(0x11);this.PN.L(0xFF000000);
this.PO.H(Bug);this.PO.Ho(8);this.PO.Je(true);this.PO.A4(0x11);this.PO.L(0xFF000000
);this.SE.H(Buh);this.SE.Je(false);this.SE.A4(0x12);this.SE.L(0xFF000000);this.Gy.
Filter=5;this.Gy.Bw=false;this.Gz.Filter=4;this.Gz.Bw=false;this.JB.Filter=1;this.
J6(this.V,-1);this.J6(this.DC,-2);this.J(this.AkJ,-1);this.J(this.AkK,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.AbG,-1);this.J(this.V9,-1);this.J(this.
PN,-1);this.J(this.PO,0);this.J(this.SE,0);this.QH.Ax(A.aaL(A.ach.ADO));this.PN.
S(A.aaL(A.fl.Af));this.PO.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));this.Gy.BG=[
this,this.Al3];this.Gy.D2=[this,this.A00];this.Gz.BG=[this,this.Al4];this.Gz.D2=[
this,this.A02];this.JB.BG=[this,this.Adx];this.FN=A._NewObject(C.Aeu,0);},_Done:
function(){this.__proto__=C.BU;this.AkJ._Done();this.AkK._Done();this.Q8._Done();
this.QH._Done();this.AbG._Done();this.V9._Done();this.PN._Done();this.PO._Done();
this.SE._Done();this.Gy._Done();this.Gz._Done();this.JB._Done();C.BU._Done.call(
this);},_ReInit:function(){C.BU._ReInit.call(this);this.AkJ._ReInit();this.AkK._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.AbG._ReInit();this.V9._ReInit();this.
PN._ReInit();this.PO._ReInit();this.SE._ReInit();this.Gy._ReInit();this.Gz._ReInit(
);this.JB._ReInit();this.T(A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG_));this.PN.
S(A.aaL(A.fl.Af));this.PO.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BU._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J4)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J3)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FM={X3:null,Acu:
null,An$:0,Aoa:0,Dv:function(){if(!this.X3)return 0;return this.X3.MN;},C8:function(
aIndex){if(!this.X3||(aIndex>=this.X3.MN))return-1;return this.X3.Get(aIndex);},
Gb:function(aIndex){return this.A7d().BT(this.C8(aIndex));},D0:function(A9){if(!
this.X3)return-1;return this.X3.Avu(A9);},H7:function(){if(!this.X3)return-1;return this.
X3.H7();},AnJ:function(E){if(this.An$===E)return;this.An$=E;A.pe([this,this.AVX]
,this);},A0V:function(Aq){this.AnJ(Aq);},AnK:function(E){if(this.Aoa===E)return;
this.Aoa=E;A.pe([this,this.AVY],this);},A0W:function(Aq){this.AnK(Aq);},AVY:function(
G){A.abo([this,this.AS7,this.A0W],0);},AVX:function(G){A.abo([this,this.AS6,this.
A0V],0);},A7d:function(){return this.Acu;},AS6:function(){return this.An$;},AS7:
function(){return this.Aoa;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acu={I:this},0);this.__proto__=C.FM;},_Done:function(
){this.__proto__=C.AC;this.Acu._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acu._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMJ={Init:
function(aArg){A.zV([this,this.BfO],A._GetAutoObject(A.Device.Helper).UL,0);A.zV([
this,this.BfM],A._GetAutoObject(A.Device.Helper).UK,0);this.BfO(this);this.BfM(this
);},Au:function(E){C.FM.Au.call(this,E);this.AnK(A._GetAutoObject(A.Device.Helper
).UL.Get(this.D0(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).UK.Get(this.D0(
E)));},AnJ:function(E){if(this.An$===E)return;C.FM.AnJ.call(this,E);A._GetAutoObject(
A.Device.Helper).UK.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).UK.
Cs();},AnK:function(E){if(this.Aoa===E)return;C.FM.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UL.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).UL.
Cs();},BfO:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).UL.Get(this.D0(
this.Q));A.pe([this,this.AVY],this);},BfM:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).UK.Get(this.D0(this.Q));A.pe([this,this.AVX],this);},_Init:function(
aArg){C.FM._Init.call(this,aArg);this.__proto__=C.AMJ;this.X3=A._GetAutoObject(A.
Device.Helper).Ad0;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMK={AgD:null,ACa:0,AB_:0,Init:function(aArg){A.zV([this,this.Bf1],A._GetAutoObject(
A.Device.Helper).Afz,0);A.zV([this,this.BfZ],A._GetAutoObject(A.Device.Helper).Afy
,0);A.zV([this,this.BfX],A._GetAutoObject(A.Device.Helper).Afx,0);A.zV([this,this.
Bf3],A._GetAutoObject(A.Device.Helper).AfA,0);this.Bf1(this);this.BfZ(this);this.
BfX(this);this.Bf3(this);},Au:function(E){C.FM.Au.call(this,E);this.AnK(A._GetAutoObject(
A.Device.Helper).Afz.Get(this.D0(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).
Afy.Get(this.D0(E)));this.ATa(A._GetAutoObject(A.Device.Helper).Afx.Get(this.D0(
E)));this.ATc(A._GetAutoObject(A.Device.Helper).AfA.Get(this.D0(E)));},AnJ:function(
E){if(this.An$===E)return;C.FM.AnJ.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Cs();},AnK:function(
E){if(this.Aoa===E)return;C.FM.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afz.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Cs();},A7d:function(
){return this.AgD;},Bf1:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).Afz.
Get(this.D0(this.Q));A.pe([this,this.AVY],this);},BfZ:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).Afy.Get(this.D0(this.Q));A.pe([this,this.AVX],this);},ATc:function(
E){if(this.ACa===E)return;this.ACa=E;A._GetAutoObject(A.Device.Helper).AfA.Set(this.
D0(this.Q),E);A._GetAutoObject(A.Device.Helper).AfA.Cs();A.pe([this,this.Baz],this
);},ATa:function(E){if(this.AB_===E)return;this.AB_=E;A._GetAutoObject(A.Device.
Helper).Afx.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Cs();A.
pe([this,this.Bay],this);},Bay:function(G){A.abo([this,this.A82,this.ATa],0);},Baz:
function(G){A.abo([this,this.A84,this.ATc],0);},BfX:function(G){this.AB_=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.D0(this.Q));A.pe([this,this.Bay],this);},Bf3:function(
G){this.ACa=A._GetAutoObject(A.Device.Helper).AfA.Get(this.D0(this.Q));A.pe([this
,this.Baz],this);},A84:function(){return this.ACa;},A82:function(){return this.AB_;
},_Init:function(aArg){C.FM._Init.call(this,aArg);A.Device.AgD._Init.call(this.AgD={
I:this},0);this.__proto__=C.AMK;this.X3=A._GetAutoObject(A.Device.Helper).AgE;this.
Init(aArg);},_Done:function(){this.__proto__=C.FM;this.AgD._Done();C.FM._Done.call(
this);},_ReInit:function(){C.FM._ReInit.call(this);this.AgD._ReInit();},_Mark:function(
D){var B;C.FM._Mark.call(this,D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMq={RT:null,Init:function(
aArg){var B;A.zX([this,this.AiM],[B=this.AnimalType,B.Ca,B.Cb],0);A.pe([this,this.
AiM],this);this.Ba(this.RT);},Bk:function(E){C.I_.Bk.call(this,E);this.RT.Bx(this.
Jw.AM);},AiM:function(G){A._GetAutoObject(A.Device.Device).AwK(this.AnimalType.Q
);},_Init:function(aArg){C.I_._Init.call(this,aArg);C.TM._Init.call(this.RT={I:this
},0);this.__proto__=C.AMq;var B;this.Jw.As(false);this.Jw.Ai(false);this.Jw.Z(false
);this.RT.H(AyS);this.RT.Ai(true);this.RT.Nq(14);this.RT.Ahu(0);this.RT.OT(0);this.
J(this.RT,-4);this.RT.AR=[this,this.AAF];this.RT.Au([B=this.AnimalType,B.Ca,B.Cb
]);this.RT.CI(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I_;this.RT._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(
this);this.RT._ReInit();},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=
this.RT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TM={Filter:null,Er:0,TableId:0,Operator:1,CP:function(){var F;this.Tx((F=this.
Filter,F[1].call(F[0])).DN(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BU.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hy.H(AhU
);this.H8.H([aSize[0]-40,40,aSize[0],80]);this.DC.H([this.Hy.M[2]-5,this.Hy.M[1]
,this.H8.M[0]+5,this.Hy.M[3]]);this.DC.AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.
DC.Gu,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mi],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mi
],E,0);A.pe([this,this.Mi],this);},Mi:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tx((F=this.Filter,F[1].call(F[0])).DN(this.Er,this.
Operator));else this.Tx(null);},Ahu:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mi],this);},Nq:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mi],this);},Tx:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).AmW(this.TableId,this.Er));this.Am();},OT:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mi],this);},_Init:function(aArg){C.BU._Init.
call(this,aArg);this.__proto__=C.TM;this.H(K2);this.V.A4(0x11);this.V.Cm(A.aaL(A.
fl.Bg));},_ReInit:function(){C.BU._ReInit.call(this);this.V.Cm(A.aaL(A.fl.Bg));this.
CP();},_Mark:function(D){var B;C.BU._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASf={Gi:null,M1:null,DZ:null,Y:null,Eg:null,Co:null,CH:null,Db:null,Gp:null,
Ef:null,C$:null,B0:null,Ay:null,Breed:null,Jm:null,AnimalType:null,Gender:null,Pq:
null,K1:null,Jk:null,KT:null,Amj:null,KO:0,Nc:0,A4A:false,Init:function(aArg){var
B;A.zX([this,this.BBo],[B=A._GetAutoObject(A.Device.Device),B.AES,B.AI0],0);A.zV([
this,this.At9],this.M1,0);A.zX([this,this.At9],[B=A._GetAutoObject(A.Device.Device
),B.Awo,B.Ay2],0);A.zX([this,this.GI],[B=A._GetAutoObject(A.Device.Device),B.AES
,B.AI0],0);A.zV([this,this.GI],this.M1,0);A.zX([this,this.AiM],this.B0.Q,0);A.pe([
this,this.AiM],this);A.pe([this,this.Bfr],this);A.pe([this,this.At9],this);A.pe([
this,this.GI],this);A.pe([this,this.A33],this);},Ba:function(E){C.AB.Ba.call(this
,E);A.pe([this,this.Ap6],this);A.pe([this,this.DL],this);},Aj:function(Ae){var F;
C.AB.Aj.call(this,Ae);if(!!(F=this.Eg.Q,F[1].call(F[0])))this.Eg.Anx(A.jb.E1);else
this.Eg.Anx(A.jb.Gm);if(A._GetAutoObject(A.Device.Device).AeP){if(!!(F=this.Co.Dm
,F[1].call(F[0])))this.Co.Anx(A.jb.E1);else this.Co.Anx(A.jb.Gm);}else this.Co.Anx(
A.jb.Ri);A.pe([this,this.DL],this);},DG:function(G){var B;C.AB.DG.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},LU:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lk())A._GetAutoObject(A.Device.Device
).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.G8();A._GetAutoObject(A.Device.Helper).Aqg(A._GetAutoObject(A.
Device.Helper).W);this.Apy();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFE(0);},E3:function(G){C.AB.E3.call(this,G);this.Jk.As(false);
A._GetAutoObject(A.Device.Device).Uy(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.FD();A._GetAutoObject(C.A5).Fz();},Fh:function(G){var B;this.Ay.
MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Bs[1]);},At9:function(G){var F,Cv;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.Ap6(this);this.Am();if((this.AV===this.Eg)&&!!(F=this.Eg.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Ael(26,(F=this.Eg.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Eg.Q,F[1].call(F[0]))),0,[this,this.A3R]);(F=this.Eg.Q,F[2].call(F[
0],0));A.pe([this,this.A3Q],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeP)this.JO(this.Co);}var BeH=!!(F=this.Eg.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeP||!!(Cv=this.Co.Dm,Cv[1].call(Cv[0])));if(this.M1.AOO()>0){if((
this.AV===this.Co)&&BeH)this.Ba(this.Y.TU(this.Co,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeP&&(this.AV===this.Co))&&!!(F=this.Co.Dm,F[1].call(F[0])))this.
JO(this.Eg);if(BeH)this.Bds(this);},Adv:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},AiY:function(){var F;this.Gi.Cs(A._GetAutoObject(A.Device.Device).An);
if(this.M1.N3(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lk())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),
0,null);else{var Mc=A._GetAutoObject(A.Device.Device).An.LZ(0,this.Gi.Id);A._GetAutoObject(
A.Device.Device).SX(Mc);var B2=A._NewObject(A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(
this.Gi.Id);B2.OnSetBodyWeight(this.KO);B2.OnSetTimestamp(this.Gi.DateOfBirth);B2.
Cs(A._GetAutoObject(A.Device.Device).Bt);}}if(this.M1.N3(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lk())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var Mc=A._GetAutoObject(A.Device.
Device).An.LZ(0,this.Gi.Id);A._GetAutoObject(A.Device.Device).SX(Mc);var B2=A._NewObject(
A.Device.Rating,0);B2.G8();B2.OnSetAnimalId(this.Gi.Id);B2.OnSetBodyWeight(this.
Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dr());B2.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WM(65280);this.Jk.As(true
);(F=A._GetAutoObject(A.Device.Device),F.AFE(F.AvY+1));this.A4A=true;A.pe([this,
this.Ap6],this);this.Apy();},GI:function(G){this.Co.ATO(A._GetAutoObject(A.Device.
Device).AeP);A._GetAutoObject(A.Device.Helper).J7(this.B0,this.M1.N3(14));A._GetAutoObject(
A.Device.Helper).J7(this.C$,this.M1.N3(23));A._GetAutoObject(A.Device.Helper).J7(
this.CH,this.M1.N3(32));A._GetAutoObject(A.Device.Helper).J7(this.Ef,this.M1.N3(
18));A._GetAutoObject(A.Device.Helper).J7(this.Db,this.M1.N3(7));A._GetAutoObject(
A.Device.Helper).J7(this.Gp,this.M1.N3(34));this.KT.Z(!this.M1.AOO());var O;var Aa=
null;var Ape=this.AV;for(O=0;O<this.M1.AfR.Ng();O++){Aa=this.BAf(this.M1.AfR.OK(
O));if(!!Aa)this.ZL(Aa);}this.JO(Ape);A._GetAutoObject(A.Device.Helper).ANA(this.
Y);A.pe([this,this.A33],this);this.Am();},AeX:function(E){if(this.KO===E)return;
this.KO=E;A.abo([this,this.Awa,this.AeX],0);},Ahp:function(E){if(this.Nc===E)return;
this.Nc=E;A.abo([this,this.Anq,this.Ahp],0);},Bds:function(G){this.Gi.G8();A._GetAutoObject(
A.Device.Helper).Aqg(this.Gi);this.Gi.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gi.Nr(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gi.SQ(A._GetAutoObject(
A.Device.Helper).AMr(0,this.Gi));this.Gi.Ae5(true);if(this.M1.N3(14))this.Gi.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.M1.N3(32))this.Gi.N7(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.M1.N3(7))this.Gi.J1(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.M1.N3(34))this.Gi.Nt(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alt=A._GetAutoObject(A.Device.Helper).A12(this.Gi,0,A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.AiY();else A._GetAutoObject(A.Device.Helper).AKq(
this.Gi,Alt,0,0,[this,this.ApE]);},Apy:function(){A._GetAutoObject(A.Device.Helper
).W.Nr(0);if(A._GetAutoObject(A.Device.Device).AeP)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeX(0);this.Ahp(0);this.JO(this.Eg);this.Am();},ApE:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case
22:case 21:case 48:this.Apy();break;case 43:this.JO(this.Eg);break;case 41:break;
default:A.ab5("%s%e",Atb,Ar.Id);}},JO:function(Ag){this.Ba(Ag);this.Y.HJ(Ag,true
,null,null);this.Y.VF(null,null);},Bfr:function(G){this.Ef.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhS(1));this.At9(this);},AiM:function(G){this.C$.Ahs(A._GetAutoObject(
A.Device.Helper).Abx(this.AnimalType.Q));},A33:function(G){var B;var BCu=this.Ay.
Background.Fo();var width=(BCu?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var XB=this.Y.TU(null,0x401);while(!!XB&&(((B=XB)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.O1.isPrototypeOf(XB)?XB:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));XB=this.Y.TU(XB,0x1);}},BAf:function(Aaq){var Aa=null;switch(Aaq){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ef;break;case 34:Aa=this.Gp;break;default:A.ab5("%s%e",Bui
,Aaq);}return Aa;},BBo:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeP
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Co.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Dr()-
A._GetAutoObject(A.Device.Helper).AmI(A._GetAutoObject(A.Device.Device).AdS));this.
At9(this);},Ap6:function(G){var B;var AKt=A.jV;var Azm=A.jb.CK;var BdJ=A.jb.AV;this.
Amj.AxO(this);if(this.A4A){this.A4A=false;AKt=A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.Bp$),O$,A._GetAutoObject(A.Device.Converter).Rj(this.Gi.NaisId));
A.pe([B=this.Amj,B.StartTimer],this);Azm=A.jb.E1;BdJ=A.jb.Text;}else if((this.AV===
this.Eg)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKt=A.aaR(A.acf.AUO);else if((
this.AV===this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKt=A.aaR(A.
acf.Bpp);this.KT.T(AKt);this.KT.BmG(Azm);this.KT.A_i(BdJ);},A3R:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cd(76);A.
_GetAutoObject(A.Device.Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8(
);},A3Q:function(G){A._GetAutoObject(A.Device.Device).Aqo();},DL:function(G){var
B;if(!this.M1.AOO()){this.N.Lh.C0(255);if(this.AV===this.Eg){this.N.C4(A.aaL(A.ach.
Edit));this.N.Cc=[B=this.Eg,B.FY];}else if(this.AV===this.Co){this.N.C4(A.aaL(A.
ach.Edit));this.N.Cc=[B=this.Co,B.FY];}else{this.N.C4(null);this.N.Cc=null;}}else{
this.N.C4(A.aaL(A.ach.Am2));if((this.Eg.Aqv===A.jb.Gm)||(this.Co.Aqv===A.jb.Gm)){
this.N.Lh.C0(100);this.N.Cc=null;}else{this.N.Lh.C0(255);this.N.Cc=[this,this.Bds
];}}},Awa:function(){return this.KO;},Anq:function(){return this.Nc;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.AU2._Init.call(this.Eg={I:this},0);C.AUY._Init.
call(this.Co={I:this},0);C.AxD._Init.call(this.CH={I:this},0);C.BU._Init.call(this.
Db={I:this},0);C.AsB._Init.call(this.Gp={I:this},0);C.AkR._Init.call(this.Ef={I:
this},0);C.AkR._Init.call(this.C$={I:this},0);C.BU._Init.call(this.B0={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);
C.UV._Init.call(this.Jm={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Na._Init.call(this.Pq={
I:this},0);A.Device.K1._Init.call(this.K1={I:this},0);A.Device.TN._Init.call(this.
Jk={I:this},0);C.AG9._Init.call(this.KT={I:this},0);A.Core.Timer._Init.call(this.
Amj={I:this},0);this.__proto__=C.ASf;var B;this.Background.L(A.jb.CV);this.N.Z(true
);this.El.As(false);this.Ds(C.APu);this.DZ.A1(0x3F);this.DZ.H(Fc);this.DZ.L(A.jb.
CK);this.Y.H(Fc);this.Y.J0(9);this.Eg.H(AyS);this.Eg.Ai(true);this.Eg.T(A.aaR(A.
acf.ACT));this.Eg.ATO(true);this.Eg.AFX(false);this.Co.H(A0A);this.Co.Ai(true);this.
Co.T(A.aaR(A.acf.Aef));this.Co.ATO(true);this.Co.AFS(true);this.CH.H(Ata);this.CH.
Ai(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Ata);this.Db.Ai(true);this.Db.T(
A.aaR(A.acf.Afp));this.Gp.H(Bbb);this.Gp.Ai(true);this.Gp.T(A.aaR(A.acf.Jm));this.
Ef.H(Buj);this.Ef.Ai(true);this.Ef.T(A.aaR(A.acf.Nc));this.Ef.Ge(1000);this.Ef.EU(
999000);this.Ef.Ahs(A._GetAutoObject(A.Device.Helper).Abx(this.AnimalType.Q));this.
C$.H(Bbb);this.C$.Ai(true);this.C$.T(A.aaR(A.acf.KO));this.C$.Ge(1000);this.C$.EU(
99000);this.C$.Ahs(A._GetAutoObject(A.Device.Helper).Abx(this.AnimalType.Q));this.
B0.H(Aom);this.B0.Ai(true);this.B0.T(A.aaR(A.acf.Afu));this.Ay.H(Iw);this.Jk.B3=
false;this.Jk.Cy=true;this.Jk.HP(1);this.Jk.Fp(1000);this.Jk.Uv(0);this.KT.H(Aao
);this.KT.Ai(true);this.KT.Anx(A.jb.Text);this.Amj.PW(3000);this.J(this.DZ,0);this.
J(this.Y,0);this.J(this.Eg,0);this.J(this.Co,0);this.J(this.CH,0);this.J(this.Db
,0);this.J(this.Gp,0);this.J(this.Ef,0);this.J(this.C$,0);this.J(this.B0,0);this.
J(this.Ay,0);this.J(this.KT,0);this.N.CF=[this,this.Ew];this.N.Cf=[this,this.Adv
];this.N.C3(A.aaL(A.ach.E2));this.N.Cu(A.aaL(A.ach.AeD));this.Y.En=[this,this.Fh
];this.Eg.Gt([this,this.D$,this.GT]);this.Eg.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.Ant,B.Nr]);this.Eg.AFs([this,this.At9]);this.Eg.ATA([this,this.A3Q]);this.
Eg.ATB([this,this.A3R]);this.Co.Gt([this,this.D$,this.GT]);this.Co.Aca([B=A._GetAutoObject(
A.Device.Helper).W,B.Awd,B.Q6]);this.Co.OM=[this,this.Bfr];this.Co.ATA([this,this.
A3Q]);this.Co.ATB([this,this.A3R]);this.CH.Gt([this,this.D$,this.GT]);this.CH.L5([
B=this.CH,B.FY]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.Ca,B.Cb
]);this.CH.CI(this.Breed);this.CH.Any(this.Pq);this.Db.Au([B=this.Gender,B.Ca,B.
Cb]);this.Db.CI(this.Gender);this.Gp.Gt([this,this.D$,this.GT]);this.Gp.L5([B=this.
Gp,B.FY]);this.Gp.L8(A.aaL(A.ach.Edit));this.Gp.Au([B=this.Jm,B.Ca,B.Cb]);this.Gp.
CI(this.Jm);this.Gp.Any(this.K1);this.Ef.Au([this,this.Anq,this.Ahp]);this.C$.Au([
this,this.Awa,this.AeX]);this.B0.Au([B=this.AnimalType,B.Ca,B.Cb]);this.B0.CI(this.
AnimalType);this.Ay.Bn0([this,this.A33]);this.Breed.L6(A._GetAutoObject(A.Device.
Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L6(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L6(A._GetAutoObject(A.Device.Helper
).W);this.Gi=A._NewObject(A.Device.Animal,0);this.M1=A._GetAutoObject(C.Amr);this.
Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0R];this.Amj.MK=[this,this.Ap6
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Y.
_Done();this.Eg._Done();this.Co._Done();this.CH._Done();this.Db._Done();this.Gp.
_Done();this.Ef._Done();this.C$._Done();this.B0._Done();this.Ay._Done();this.Breed.
_Done();this.Jm._Done();this.AnimalType._Done();this.Gender._Done();this.Pq._Done(
);this.K1._Done();this.Jk._Done();this.KT._Done();this.Amj._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit(
);this.Eg._ReInit();this.Co._ReInit();this.CH._ReInit();this.Db._ReInit();this.Gp.
_ReInit();this.Ef._ReInit();this.C$._ReInit();this.B0._ReInit();this.Ay._ReInit(
);this.Breed._ReInit();this.Jm._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.Pq._ReInit();this.K1._ReInit();this.Jk._ReInit();this.KT._ReInit();this.Amj.
_ReInit();this.Eg.T(A.aaR(A.acf.ACT));this.Co.T(A.aaR(A.acf.Aef));this.CH.T(A.aaR(
A.acf.Breed));this.Db.T(A.aaR(A.acf.Afp));this.Gp.T(A.aaR(A.acf.Jm));this.Ef.T(A.
aaR(A.acf.Nc));this.C$.T(A.aaR(A.acf.KO));this.B0.T(A.aaR(A.acf.Afu));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Gi)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.M1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DZ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Amj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsMassRecording"};C.AsA={SI:null,_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);C.CG._Init.call(this.SI={I:this},0);this.__proto__=C.AsA;this.
N.CS(A.aaR(A.acf.A6N));this.Number.H(Buk);this.Jl.H(Bul);this.IZ.H(Bum);this.AkB(
2);this.Bdp=false;this.Bew=true;this.Bex=false;this.SI.H(Bun);this.SI.R(A.aaR(A.
acf.A$8));this.SI.L(A.jb.Text);this.J(this.SI,0);this.N.CF=null;this.N.Cc=[this,
this.AI6];this.N.C3(null);this.SI.S(A.aaL(A.fl.Af));this.SI.AY(A.aaL(A.fl.Ak));this.
SI.Cm(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
SI._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.SI._ReInit();this.N.CS(A.aaR(A.acf.A6N));this.SI.R(A.aaR(
A.acf.A$8));this.SI.S(A.aaL(A.fl.Af));this.SI.AY(A.aaL(A.fl.Ak));this.SI.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.SI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancellableScreen"
};C.AD6={Cw:null,FP:function(E){if(this.Ne===E)return;C.HM.FP.call(this,E);this.
Cw.CW(E);},Yz:function(HB){var B7=null;switch(HB){case-1:case 0:B7=this.Ga;break;
case 1:B7=this.Cw;break;case 2:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;
},_Init:function(aArg){C.HM._Init.call(this,aArg);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.AD6;this.H(Buo);this.Cw.H(BaQ);this.Ga.H(Bup);this.J(this.
Cw,-2);this.Cw.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.HM;this.Cw.
_Done();C.HM._Done.call(this);},_ReInit:function(){C.HM._ReInit.call(this);this.
Cw._ReInit();},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.Cw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsB={G5:null
,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Aj:function(Ae){C.OY.Aj.call(this,Ae);if(this.Hm)this.G5.FP(A.jb.CK);else this.
G5.FP(A.jb.CV);},A2D:function(){this.Ba(this.G5);},_Init:function(aArg){C.OY._Init.
call(this,aArg);C.HM._Init.call(this.G5={I:this},0);this.__proto__=C.AsB;this.G5.
H(Buq);this.J(this.G5,0);this.G5.Au([this,this.ASS,this.AFL]);},_Done:function(){
this.__proto__=C.OY;this.G5._Done();C.OY._Done.call(this);},_ReInit:function(){C.
OY._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.OY._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxD={G5:null,Bl:function(aSize){C.OY.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Aj:function(Ae){C.OY.Aj.call(this,Ae);if(this.Hm)this.G5.FP(
A.jb.CK);else this.G5.FP(A.jb.CV);},A2D:function(){this.Ba(this.G5);},_Init:function(
aArg){C.OY._Init.call(this,aArg);C.AD6._Init.call(this.G5={I:this},0);this.__proto__=
C.AxD;this.G5.A1(0x18);this.G5.H(Bur);this.J(this.G5,0);this.G5.Au([this,this.ASS
,this.AFL]);},_Done:function(){this.__proto__=C.OY;this.G5._Done();C.OY._Done.call(
this);},_ReInit:function(){C.OY._ReInit.call(this);this.G5._ReInit();},_Mark:function(
D){var B;C.OY._Mark.call(this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acv={ScreenTypeToString:
null,Dv:function(){return 4;},Gb:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C8(aIndex));},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acv;this.BI.Set(0,3);this.BI.Set(1,35);this.BI.Set(2
,34);this.BI.Set(3,43);},_Done:function(){this.__proto__=C.Cn;this.ScreenTypeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWh={KT:null,HH:null,LY:null,IN:null,KK:A.jV,Aql:false,ALn:false,A2W:false,Init:
function(aArg){var B;A.zX([this,this.BfW],[B=A._GetAutoObject(A.Device.Device),B.
Ur,B.U$],0);A.pe([this,this.BfW],this);A.pe([this,this.Ap6],this);},WH:function(
G){this.Agw();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.Settings),[this,this.A38]);A.
_GetAutoObject(C.BS).Fx();this.AMe();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARH)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){},H0:function(
G){if((this.Aql===false)||!this.KK.length){C.Mo.H0.call(this,G);return;}if(!this.
KK.length)this.LY.Mx=true;var FJ=A._GetAutoObject(A.Device.AkF).Bgb(this.KK);this.
KK=A.jV;if(!FJ){if((this.KK.length<13)&&!A._GetAutoObject(A.Device.Device).PZ)A.
_GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,[this,this.SM]);else A._GetAutoObject(
A.Device.Device).AZ(103,true,A.jV,0,[this,this.SM]);A.pe([this,this.WI],this);return;
}if(A._GetAutoObject(A.Device.Helper).BkF(FJ)){A.pe([this,this.A$Z],this);A.pe([
this,this.Aap],this);}else{A._GetAutoObject(A.Device.Device).AZ(117,true,A.jV,0,[
this,this.SM]);A.pe([this,this.WI],this);}},CC:function(G){C.Mo.CC.call(this,G);
if(this.A2W){this.A2W=false;A.pe([this,this.A0X],this);}},Agf:function(G){if(this.
Aql&&(this.KK.length>0)){A.pe([this,this.Alk],this);return;}C.Mo.Agf.call(this,G
);this.A$p(true);},Aby:function(){return C.ACl;},Abz:function(){return C.ADF;},Q_:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7s(Math.max(A._GetAutoObject(A.Device.Device).Av0,A._GetAutoObject(A.Device.Helper
).A7k(A._GetAutoObject(A.Device.Device).An))+1));},HR:function(G){C.Mo.HR.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).S_(A._GetAutoObject(A.Device.Device
).PZ)===10)&&this.ALn)&&!!this.Bf.AX)&&!this.Bf.AX.B9()){this.N.Cu(null);this.N.
E5(A.aaR(A.acf.No));this.N.Cf=[this,this.BBC];this.N.C4(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Cc=[this,this.BBD];}else if(A._GetAutoObject(A.Device.Helper).ARs(
)){this.N.Cu(A.aaL(A.ach.Aq6));this.N.Cf=null;this.N.E5(A.jV);this.N.IS.C0(100);
}else if(this.Ake()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajo(
A._GetAutoObject(A.Device.Converter).AL$(this.L3.ADg())));this.N.Cf=[this,this.Aap
];this.N.E5(A.jV);}this.N.OU(false);this.N.OV(false);},AaL:function(G){C.Mo.AaL.
call(this,G);this.Bhl(this);},Agi:function(){A._GetAutoObject(C.A5).Cd(86);},ABd:
function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E9();var Aza=
aFilter.DN(26,4);if(!!Aza){aFilter.Nw(Aza);A._GetAutoObject(A.Device.Device).An.
Bk(aFilter);if(!!this.Bf)this.Bf.GU(0);}},A7i:function(){return C.APB;},BgA:function(
){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.
Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E9();FilterCriterion=(
A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DN(26,4))?B:null);if(
!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.Device).An.
Bk(Filter);}},A38:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2W=true;
A._GetAutoObject(C.A5).Cd(89);},ALu:function(G){if(A._GetAutoObject(A.Device.Converter
).S_(A._GetAutoObject(A.Device.Device).PZ)===10){if(this.ALn){this.Dl(A.aaR(A.acf.
Bo5));this.Bf.NU.S(A.aaL(A.fl.Bg));}else{this.Dl(A.aaR(A.acf.AED));this.Bf.NU.S(
A.aaL(A.fl.Af));}}else this.Dl(A.aaR(A.acf.AED));},A$p:function(E){if(this.ALn===
E)return;this.ALn=E;A.pe([this,this.Aow],this);A.pe([this,this.ALu],this);},BBD:
function(G){A._GetAutoObject(C.A5).Acd(90);},BBC:function(G){this.A$p(false);},BfW:
function(G){this.Bhl(this);},Bmy:function(E){if(this.Aql===E)return;this.Aql=E;A.
pe([this,this.Z8],this);A.pe([this,this.Ap6],this);},Ap6:function(G){this.KT.Z(this.
Aql);if(this.Aql)this.A_M(Bbc);else this.A_M(Ak$);},AAL:function(G){if(this.KK.length<
17)this.KK=this.KK+String.fromCharCode(this.HH.Dz);},Av9:function(G){if((this.IN.
Dz===0x0D)||(this.IN.Dz===0x0A))this.H0(this);else this.IN.Mx=true;},WI:function(
G){A._GetAutoObject(A.Device.Device).Aqo();A.ab5("%s",Bus);},SM:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cd(76);A.
_GetAutoObject(A.Device.Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8(
);},Bhl:function(G){this.Bmy(A._GetAutoObject(A.Device.Helper).ARs()&&(A._GetAutoObject(
A.Device.Device).An.B9()>0));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.
AG9._Init.call(this.KT={I:this},0);A.Core.BF._Init.call(this.HH={I:this},0);A.Core.
BF._Init.call(this.LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.
__proto__=C.AWh;this.Ds(C.ADw);this.Dl(A.aaR(A.acf.AED));this.KT.H(Aom);this.KT.
T(A.aaR(A.acf.AUO));this.KT.Anx(A.jb.Text);this.KT.A_i(A.jb.AV);this.HH.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.KT,0);this.ATw(A._GetAutoObject(
C.Ax8));this.HH.BG=[this,this.AAL];this.LY.BG=[this,this.Alk];this.IN.BG=[this,this.
Av9];this.Init(aArg);},_Done:function(){this.__proto__=C.Mo;this.KT._Done();this.
HH._Done();this.LY._Done();this.IN._Done();C.Mo._Done.call(this);},_ReInit:function(
){C.Mo._ReInit.call(this);this.KT._ReInit();this.HH._ReInit();this.LY._ReInit();
this.IN._ReInit();this.Dl(A.aaR(A.acf.AED));this.KT.T(A.aaR(A.acf.AUO));},_Mark:
function(D){var B;C.Mo._Mark.call(this,D);if((B=this.KT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YoungNoTransponderListScreen"
};C.AWg={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AWg;this.
KZ.As(false);this.KZ.Ai(false);this.KZ.Z(false);this.BnA(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARk={Sx:null,Q:null,A8C:0,Ne:0,Init:function(aArg){this.ATz(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sx)this.Sx.Au(E);},ATz:function(
E){if(this.A8C===E)return;this.A8C=E;var X;switch(E){case 2:X=A._NewObject(C.HM,
0);break;case 3:X=A._NewObject(C.AD6,0);break;case 4:X=A._NewObject(C.ARh,0);break;
case 5:X=A._NewObject(C.ARi,0);break;case 6:X=A._NewObject(C.AvR,0);break;default:{
X=null;A.ab5("%s%i",But,E);}}this.Bnz(X);},Bnz:function(E){if(this.Sx===E)return;
if(!!this.Sx){this.Sx.Au(null);this.HQ(this.Sx);}this.Sx=E;if(!!this.Sx){this.Sx.
Au(this.Q);this.J(this.Sx,0);}},FP:function(E){if(this.Ne===E)return;this.Ne=E;if(
!!this.Sx)this.Sx.FP(E);},SW:function(GB){if(!!this.Sx)this.Sx.SW(GB);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARk;this.H(Ayv);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sx)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARh={CX:null,Cw:null,FP:function(
E){if(this.Ne===E)return;C.HM.FP.call(this,E);this.Cw.CW(E);this.CX.CW(E);},Yz:function(
HB){var B7=null;switch(HB){case-1:case 0:B7=this.Ga;break;case 1:B7=this.Cw;break;
case 2:B7=this.CX;break;case 3:B7=this.G2;break;default:A.ab5("%s",Ah0);}return B7;
},_Init:function(aArg){C.HM._Init.call(this,aArg);C.DH._Init.call(this.CX={I:this
},0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARh;this.H(Buu);this.G2.
H(Alj);this.CX.H(BaR);this.Cw.H(BaS);this.Ga.H(BaT);this.J(this.CX,-2);this.J(this.
Cw,-2);this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HM;this.CX._Done();this.Cw._Done();C.HM._Done.call(this);},_ReInit:function(
){C.HM._ReInit.call(this);this.CX._ReInit();this.Cw._ReInit();},_Mark:function(D
){var B;C.HM._Mark.call(this,D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC2={S$:null,Aj:function(Ae){C.Abw.Aj.call(this,Ae);this.S$.L(this.V.AQ);},_Init:
function(aArg){C.Abw._Init.call(this,aArg);C.CG._Init.call(this.S$={I:this},0);this.
__proto__=C.AC2;this.V.Z(false);this.AW.H(Buv);this.AW.ATz(4);this.S$.H(Buw);this.
S$.R(A.aaR(A.acf.Kp));this.S$.L(A.jb.Bm);this.J(this.S$,0);this.S$.S(A.aaL(A.fl.
Af));this.S$.AY(A.aaL(A.fl.Ak));this.S$.Cm(null);},_Done:function(){this.__proto__=
C.Abw;this.S$._Done();C.Abw._Done.call(this);},_ReInit:function(){C.Abw._ReInit.
call(this);this.S$._ReInit();this.S$.R(A.aaR(A.acf.Kp));this.S$.S(A.aaL(A.fl.Af)
);this.S$.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abw._Mark.call(this,D);
if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L4={Y8:null,Ua:null,AQ:0,A7T:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y8.L(this.AQ);this.Ua.L(this.AQ);},A_I:function(E){var B;if(this.A7T===
E)return;this.A7T=E;if(E){this.Y8.Z(true);this.Ua.DE([this.Ua.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y8.Z(false);this.Ua.DE([this.Ua.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C9._Init.call(
this.Y8={I:this},0);A.acg.C9._Init.call(this.Ua={I:this},0);this.__proto__=C.L4;
this.H(A0w);this.Y8.A1(0x2D);this.Y8.DE(AhW);this.Y8.DO(Bbd);this.Y8.L(A.jb.Text
);this.Ua.A1(0x36);this.Ua.DE(Bbd);this.Ua.DO(Bux);this.Ua.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y8,0);this.J(this.Ua,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y8._Done();this.Ua._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y8._ReInit();this.Ua._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUF={SC:null,PF:null,Db:null,B0:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pq:null,UV:null,K1:null,Init:function(aArg){A.zX([this
,this.AuQ],this.B0.Q,0);A.zX([this,this.AM8],this.CH.Q,0);A.zX([this,this.Brt],this.
SC.Q,0);A.zX([this,this.Avs],this.Db.Q,0);A.zX([this,this.AWd],this.GQ.Q,0);},AuQ:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Brt:function(G){var F;A._GetAutoObject(A.Device.Device).Axk((F=this.SC.Q
,F[1].call(F[0])));},Avs:function(G){var F;A._GetAutoObject(A.Device.Device).J1((
F=this.Db.Q,F[1].call(F[0])));},AWd:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},AM8:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch._Init.
call(this,aArg);C.BU._Init.call(this.SC={I:this},0);C.Iu._Init.call(this.PF={I:this
},0);C.BU._Init.call(this.Db={I:this},0);C.BU._Init.call(this.B0={I:this},0);C.AxD.
_Init.call(this.CH={I:this},0);C.AsB._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Na._Init.call(this.Pq={I:this},0);C.UV._Init.call(this.UV={I:
this},0);A.Device.K1._Init.call(this.K1={I:this},0);this.__proto__=C.AUF;var B;this.
Jf((A.aaR(A.acf.Aso)+AyI)+A.aaR(A.acf.AjD));this.SC.H(AhY);this.SC.Ai(true);this.
SC.T(A.aaR(A.acf.BaJ));this.SC.Bh(true);this.SC.Bx(0);this.PF.H(Ayt);this.PF.Ai(
true);this.PF.Z(true);this.PF.T(A.aaR(A.acf.AdS));this.PF.Ge(0);this.PF.EU(99);this.
PF.IW(A.aaR(A.acf.Kp));this.PF.Jg(A.aaR(A.acf.GM));this.Db.H(Aao);this.Db.Ai(true
);this.Db.T(A.aaR(A.acf.Afp));this.Db.Bh(true);this.Db.Bx(0);this.B0.H(Alg);this.
B0.Ai(true);this.B0.T(A.aaR(A.acf.Afu));this.B0.Bh(true);this.B0.Bx(0);this.CH.H(
AhZ);this.CH.Ai(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bh(false);this.GQ.H(
AhZ);this.GQ.Ai(true);this.GQ.T(A.aaR(A.acf.Jm));this.GQ.Bh(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UV.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.SC,0);this.
J(this.PF,0);this.J(this.Db,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GQ
,0);this.SC.Au([B=this.WeightRecordingScope,B.Ca,B.Cb]);this.SC.CI(this.WeightRecordingScope
);this.PF.Au([B=A._GetAutoObject(A.Device.Device),B.A8V,B.BbA]);this.Db.Au([B=this.
Gender,B.Ca,B.Cb]);this.Db.CI(this.Gender);this.B0.Au([B=this.AnimalType,B.Ca,B.
Cb]);this.B0.CI(this.AnimalType);this.CH.Gt([this,this.D$,this.GT]);this.CH.L5([
B=this.CH,B.FY]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.Ca,B.Cb
]);this.CH.CI(this.Breed);this.CH.Any(this.Pq);this.GQ.Gt([this,this.D$,this.GT]
);this.GQ.L5([B=this.GQ,B.FY]);this.GQ.L8(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UV,B.Ca,B.Cb]);this.GQ.CI(this.UV);this.GQ.Any(this.K1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ch;this.SC._Done();this.PF._Done();this.Db._Done();this.
B0._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pq._Done();this.UV._Done();this.
K1._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.
SC._ReInit();this.PF._ReInit();this.Db._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pq._ReInit();this.UV._ReInit();
this.K1._ReInit();this.Jf((A.aaR(A.acf.Aso)+AyI)+A.aaR(A.acf.AjD));this.SC.T(A.aaR(
A.acf.BaJ));this.PF.T(A.aaR(A.acf.AdS));this.PF.IW(A.aaR(A.acf.Kp));this.PF.Jg(A.
aaR(A.acf.GM));this.Db.T(A.aaR(A.acf.Afp));this.B0.T(A.aaR(A.acf.Afu));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Ch._Mark.
call(this,D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UV)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUE={QR:null,FB:null,Iq:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdV:null,Init:function(aArg){var B;A.zX([this,this.BhZ],this.QR.Q,0);A.zX([this
,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0D],0);A.zX([this,this.
Adw],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U8],0);A.zX([this,this.Adw],[B=
A._GetAutoObject(A.Device.Device),B.Uq,B.U9],0);A.pe([this,this.Bfc],this);A.pe([
this,this.Adw],this);},BhZ:function(G){var F;A._GetAutoObject(A.Device.Device).Awv((
F=this.QR.Q,F[1].call(F[0])));},Bfc:function(G){switch(A._GetAutoObject(A.Device.
Device).Agy){case 0:A._GetAutoObject(A.Device.Helper).J7(this.Iq,true);break;case
1:A._GetAutoObject(A.Device.Helper).J7(this.Iq,false);break;default:throw new Error(
Buy+A._GetAutoObject(A.Device.Device).Agy.toFixed());}},Adw:function(G){var F,Cv;
if(((F=this.Da.Q,F[1].call(F[0]))+(Cv=this.Dn.Q,Cv[1].call(Cv[0])))>12)(Cv=this.
Dn.Q,Cv[2].call(Cv[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ch._Init.call(this,aArg);C.BU._Init.call(this.QR={I:this},0);C.BU._Init.call(this.
FB={I:this},0);C.AGP._Init.call(this.Iq={I:this},0);C.Iu._Init.call(this.Da={I:this
},0);C.Iu._Init.call(this.Dn={I:this},0);C.Av1._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdV._Init.
call(this.AdV={I:this},0);this.__proto__=C.AUE;var B;this.Jf(A.aaR(A.acf.Aqk));this.
QR.H(AyS);this.QR.Ai(true);this.QR.T(A.aaR(A.acf.Aqk));this.QR.Bh(false);this.QR.
Ge(-1);this.QR.EU(1);this.FB.H(U5);this.FB.Ai(true);this.FB.Z(true);this.FB.T(A.
aaR(A.acf.Aqh));this.FB.Bh(true);this.Iq.H(Aao);this.Iq.Ai(true);this.Iq.Z(true);
this.Iq.T(A.aaR(A.acf.AEB));this.Iq.Bh(true);this.Da.H(Alg);this.Da.Ai(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqE));this.Da.Bh(false);this.Da.Ge(2);this.Da.EU(
6);this.Da.IW(A.aaR(A.acf.OI));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(AhZ);this.Dn.
Ai(true);this.Dn.T(A.aaR(A.acf.Zs));this.Dn.Bh(true);this.Dn.Ge(0);this.Dn.EU(12
);this.Dn.IW(A.aaR(A.acf.OI));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Buz);this.EL.
As(true);this.EL.Ai(true);this.EL.Bh(false);this.EL.Ar2(A.aaR(A.acf.Aqj));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QR,0);this.
J(this.FB,0);this.J(this.Iq,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QR.Au([B=this.AutoRegistrationMode,B.Ca,B.Cb]);this.QR.CI(this.AutoRegistrationMode
);this.FB.Au([B=this.AdV,B.Ca,B.Cb]);this.FB.CI(this.AdV);this.Iq.Uu([B=A._GetAutoObject(
A.Device.Device),B.WG,B.A0G]);this.Iq.Aks([B=A._GetAutoObject(A.Device.Device),B.
Awf,B.AyW]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U9]);this.EL.DD(A.aaL(A.ach.AjU));
this.EL.OS([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.EL.PV([B=A._GetAutoObject(
A.Device.Device),B.Uq,B.U9]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ch;this.QR._Done();this.FB._Done();this.Iq._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdV._Done();C.Ch._Done.
call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.QR._ReInit();this.FB.
_ReInit();this.Iq._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdV._ReInit();this.Jf(A.aaR(A.acf.Aqk
));this.QR.T(A.aaR(A.acf.Aqk));this.FB.T(A.aaR(A.acf.Aqh));this.Iq.T(A.aaR(A.acf.
AEB));this.Da.T(A.aaR(A.acf.AqE));this.Da.IW(A.aaR(A.acf.OI));this.Da.Jg(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OI));this.Dn.Jg(A.aaR(
A.acf.Ez));this.EL.Ar2(A.aaR(A.acf.Aqj));},_Mark:function(D){var B;C.Ch._Mark.call(
this,D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FB)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVJ={ON:null,FB:null,Iq:null,Da:null,Dn:null,EL:null,Aft:null,Init:function(
aArg){var B;A.zX([this,this.BfQ],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0T
],0);A.zX([this,this.Adw],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U8],0);A.zX([
this,this.Adw],[B=A._GetAutoObject(A.Device.Device),B.Uq,B.U9],0);A.pe([this,this.
BfQ],this);A.pe([this,this.Adw],this);},BfQ:function(G){var AK$=false;var AaU=false;
switch(A._GetAutoObject(A.Device.Device).Ak1){case 0:{AK$=false;AaU=false;}break;
case 1:{AK$=true;AaU=false;}break;case 2:{AK$=false;AaU=true;}break;default:throw new
Error(BuA+A._GetAutoObject(A.Device.Device).Ak1.toFixed());}A._GetAutoObject(A.Device.
Helper).J7(this.Iq,AK$);A._GetAutoObject(A.Device.Helper).J7(this.Da,AaU);A._GetAutoObject(
A.Device.Helper).J7(this.Dn,AaU);A._GetAutoObject(A.Device.Helper).J7(this.EL,AaU
);},Adw:function(G){var F,Cv;if(((F=this.Da.Q,F[1].call(F[0]))+(Cv=this.Dn.Q,Cv[
1].call(Cv[0])))>12)(Cv=this.Dn.Q,Cv[2].call(Cv[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ch._Init.call(this,aArg);C.Iu._Init.call(this.ON={
I:this},0);C.BU._Init.call(this.FB={I:this},0);C.AGP._Init.call(this.Iq={I:this}
,0);C.Iu._Init.call(this.Da={I:this},0);C.Iu._Init.call(this.Dn={I:this},0);C.Av1.
_Init.call(this.EL={I:this},0);C.Aft._Init.call(this.Aft={I:this},0);this.__proto__=
C.AVJ;var B;this.Jf(A.aaR(A.acf.LinkTransponder));this.ON.H(AyS);this.ON.Ai(true
);this.ON.Z(true);this.ON.T(A.aaR(A.acf.A8b));this.ON.Bh(false);this.ON.Ge(1);this.
ON.EU(365);this.ON.IW(A.aaR(A.acf.Kp));this.ON.Jg(A.aaR(A.acf.GM));this.FB.H(U5);
this.FB.Ai(true);this.FB.Z(true);this.FB.T(A.aaR(A.acf.Aqh));this.FB.Bh(true);this.
Iq.H(Aao);this.Iq.Ai(true);this.Iq.Z(true);this.Iq.T(A.aaR(A.acf.AEB));this.Iq.Bh(
false);this.Da.H(Alg);this.Da.Ai(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqE
));this.Da.Bh(false);this.Da.Ge(2);this.Da.EU(6);this.Da.IW(A.aaR(A.acf.OI));this.
Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(AhZ);this.Dn.Ai(true);this.Dn.T(A.aaR(A.acf.Zs)
);this.Dn.Bh(true);this.Dn.Ge(0);this.Dn.EU(12);this.Dn.IW(A.aaR(A.acf.OI));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aol);this.EL.As(true);this.EL.Ai(true);this.EL.
Bh(false);this.EL.Ar2(A.aaR(A.acf.Aqj));this.J(this.ON,0);this.J(this.FB,0);this.
J(this.Iq,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.ON.Au([B=
A._GetAutoObject(A.Device.Device),B.A9r,B.BbS]);this.FB.Au([B=this.Aft,B.Ca,B.Cb
]);this.FB.CI(this.Aft);this.Iq.Uu([B=A._GetAutoObject(A.Device.Device),B.WG,B.A0G
]);this.Iq.Aks([B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyW]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Uq,B.U9]);this.EL.DD(A.aaL(A.ach.AjU));this.EL.OS([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U8]);this.EL.PV([B=A._GetAutoObject(A.Device.Device),B.Uq
,B.U9]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.ON._Done();this.
FB._Done();this.Iq._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Aft._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.
ON._ReInit();this.FB._ReInit();this.Iq._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Aft._ReInit();this.Jf(A.aaR(A.acf.LinkTransponder));this.
ON.T(A.aaR(A.acf.A8b));this.ON.IW(A.aaR(A.acf.Kp));this.ON.Jg(A.aaR(A.acf.GM));this.
FB.T(A.aaR(A.acf.Aqh));this.Iq.T(A.aaR(A.acf.AEB));this.Da.T(A.aaR(A.acf.AqE));this.
Da.IW(A.aaR(A.acf.OI));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.
Dn.IW(A.aaR(A.acf.OI));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar2(A.aaR(A.acf.Aqj));
},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.ON)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aft)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Aft={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhe],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0T],0);A.pe([
this,this.Bhe],this);},Dv:function(){return 3;},Gb:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axf(E);},Bhe:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak1;A.
abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Aft;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Ji={B8:null,I2:null,Cr:null,Amz:null,Sl:null,Anj:null,AjA:null,Text:null,CZ:
null,D7:0,LF:false,Aj:function(Ae){var B;A.acn.Ji.Aj.call(this,Ae);if(((Ae&0x40)===
0x40))this.I2.As(true);else{this.I2.As(false);this.CZ.Z(false);}},A46:function(G
){var B;var Bd=this.Text.M;var NG=0;var NH=0;if(this.CZ.Et[0]<Bd[0])NG=Bd[0]-this.
CZ.Et[0];if(this.CZ.Et[0]>Bd[2])NG=Bd[2]-this.CZ.Et[0];if(this.CZ.Et[1]<Bd[1])NH=
Bd[1]-this.CZ.Et[1];if(this.CZ.ED[1]>Bd[3])NH=Bd[3]-this.CZ.ED[1];if(!!NG||!!NH)
this.Text.Gf(A.abf(this.Text.Bs,[NG,NH]));NG=this.Text.Bs[0];NH=this.Text.Bs[1];
var C7=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C7[0]<=((B=this.Text.M)[2]-B[0]
))NG=0;if(C7[1]<=((B=this.Text.M)[3]-B[1]))NH=0;this.Text.Gf([NG,NH]);},Amm:function(
G){if(!this.B8)return;var A4w=this.Text.AG2(this.D7);var pos=this.Text.Afg(A4w);
this.CZ.DO(A.abe(pos,[0,this.B8.Ascent]));this.CZ.DE(A.abf(pos,[0,this.B8.Descent
]));if(this.I2.Bw){this.I2.As(false);this.I2.As(true);}if(this.LF){A.pe([this,this.
A46],this);this.LF=false;}},AAJ:function(G){if(!this.B8)return;var EH=this.Text.
AG2(this.D7);if(this.Cr.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnR(EH)===this.D7
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADi(EH[1]).length,EH[1]];}}if(this.Cr.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnR(EH)===this.D7){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CO===4){var pos=this.Text.Afg(EH);var AaT=(this.B8.Ascent+this.B8.
Descent)+this.B8.Leading;EH=this.Text.AUg(A.abe(pos,[0,AaT]));}if(this.Cr.CO===5
){var pos=this.Text.Afg(EH);var AaT=(this.B8.Ascent+this.B8.Descent)+this.B8.Leading;
EH=this.Text.AUg(A.abf(pos,[0,AaT]));}var Vo=this.Text.AnR(EH);var IB=this.Text.
String.charCodeAt(Vo)||0;if(((IB===0x5E)||(IB===0x7E))||(IB===0x25))Vo=Vo-1;if(Vo
!==this.D7){this.D7=Vo;A.pe([this,this.Amm],this);this.LF=true;}},Bfl:function(G
){if(!this.D7)return;var IB=this.Text.String.charCodeAt(this.D7-1)||0;var CB=1;if(((
IB===0x5E)||(IB===0x7E))||(IB===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D7-CB,CB));this.D7=this.D7-CB;this.LF=true;},AAK:function(G){if(this.D7>=(this.Text.
String.length-1))return;var IB=this.Text.String.charCodeAt(this.D7)||0;var CB=1;
if(IB===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D7,CB));this.LF=true;}
,Bfz:function(G){this.Text.R(A.abU(this.Text.String,BuB,this.D7));this.D7=this.D7+
1;this.LF=true;},Bfn:function(G){var IB=this.AjA.Dz;var Aus=String.fromCharCode(
IB);A.ab5("%c",IB);if((((IB===0x5E)||(IB===0x7E))||(IB===0xAD))||(IB===0x25))Aus=
BuC+String.fromCharCode(IB);this.Text.R(A.abU(this.Text.String,Aus,this.D7));this.
D7=this.D7+Aus.length;this.LF=true;},_Init:function(aArg){A.acn.Ji._Init.call(this
,aArg);A.acl.TN._Init.call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cr={I:this
},0);A.Core.BF._Init.call(this.Amz={I:this},0);A.Core.BF._Init.call(this.Sl={I:this
},0);A.Core.BF._Init.call(this.Anj={I:this},0);A.Core.BF._Init.call(this.AjA={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C9._Init.call(this.CZ={
I:this},0);this.__proto__=C.Ji;var B;this.H(BuD);this.I2.B3=false;this.I2.Cy=true;
this.I2.Fp(500);this.I2.Uv(500);this.Cr.Filter=147;this.Cr.Bw=false;this.Amz.Filter=
151;this.Sl.Filter=44;this.Anj.Filter=149;this.AjA.Filter=145;this.Text.A1(0x3F);
this.Text.H(BuE);this.Text.Lu(true);this.Text.A4(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CZ.DE(BuF);this.CZ.DO(BuG);this.CZ.A$k(2);this.CZ.A$j(2);this.
CZ.L(0xFF000000);this.CZ.Z(false);this.J(this.Text,0);this.J(this.CZ,0);this.I2.
Q=[B=this.CZ,B.Fo,B.Z];this.Cr.BG=[this,this.AAJ];this.Cr.D2=[this,this.AAJ];this.
Amz.BG=[this,this.Bfl];this.Amz.D2=[this,this.Bfl];this.Sl.BG=[this,this.AAK];this.
Sl.D2=[this,this.AAK];this.Anj.BG=[this,this.Bfz];this.Anj.D2=[this,this.Bfz];this.
AjA.BG=[this,this.Bfn];this.AjA.D2=[this,this.Bfn];this.Text.Q7([this,this.Amm]);
this.Text.S(A.aaL(A.aci.AC6));this.B8=A.aaL(A.aci.AC6);},_Done:function(){this.__proto__=
A.acn.Ji;this.I2._Done();this.Cr._Done();this.Amz._Done();this.Sl._Done();this.Anj.
_Done();this.AjA._Done();this.Text._Done();this.CZ._Done();A.acn.Ji._Done.call(this
);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.I2._ReInit();this.Cr._ReInit(
);this.Amz._ReInit();this.Sl._ReInit();this.Anj._ReInit();this.AjA._ReInit();this.
Text._ReInit();this.CZ._ReInit();},_Mark:function(D){var B;A.acn.Ji._Mark.call(this
,D);if((B=this.B8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVx={Ji:null,DG:function(G
){switch(this.Cr.CO){case 6:A._GetAutoObject(A.Device.Device).Aqo();break;case 7:
A._GetAutoObject(A.Device.Device).Aqm();break;case 4:A._GetAutoObject(A.Device.Device
).X8();break;case 5:A._GetAutoObject(A.Device.Device).Aqn();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A5).Fz();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Ji._Init.call(this.Ji={I:this},0);this.__proto__=C.AVx;this.H(Cg);this.
N.Z(true);this.Ds(C.Aq0);this.Ji.H(Fc);this.J(this.Ji,0);this.Ba(this.Ji);this.N.
CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Ji._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Ji._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Ji)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUn={WH:function(G){if((!!this.Bf&&!!this.Bf.AX)&&(this.Bf.AX.B9()>0)){A._GetAutoObject(
C.BS).TD(A.aaR(A.acf.ACq),[this,this.Bbq]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TD(A.aaR(A.acf.AHk),[this,this.A8M]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TD(A.aaR(A.acf.A6a),[this,this.Bbp]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).TD(A.aaR(A.acf.UnlinkTransponder),[this,this.BoF]);}else{A._GetAutoObject(
C.BS).Aa1(A.aaR(A.acf.ACq));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Aa1(
A.aaR(A.acf.AHk));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Aa1(A.aaR(A.
acf.A6a));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6B)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fx();this.AuJ(A.aaR(A.acf.A6t),[this,this.Bhb
],this.OH);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(
A.acf.A6O));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anf
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Aby:function(){return C.
ACm;},Abz:function(){return C.ADD;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avv());},HR:function(G){C.AkL.HR.call(
this,G);this.N.Cu(null);this.N.E5(A.aaR(A.acf.A54));if(this.AJN()){this.N.Cf=[this
,this.AIT];this.N.JE.C0(255);}else{this.N.Cf=null;this.N.JE.C0(100);}this.N.C4(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OU(false);this.N.OV(false);this.N.IS.
C0(255);},ASv:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiV.toFixed(),0,null);},ASw:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6H(this);},ASA:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).B6){A._GetAutoObject(A.Device.Device
).AZ(118,true,A.jV,0,[this,this.A3U]);return;}if((A._GetAutoObject(A.Device.Device
).B6!==1)&&!A._GetAutoObject(A.Device.Device).PZ){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.A3U]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.
U$],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agh]);return;
}A.zX([this,this.Al1],[B=A._GetAutoObject(A.Device.Device).FU,B.SL,B.E4],0);var A4N=
!!this.OH&&!(F=this.OH,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asq(A.
_GetAutoObject(A.Device.Device).B6,2,A4N);},AJN:function(){if(!this.Bf)return false;
var AtN=this.Bf.AX;if(!AtN)return false;if(!AtN.B9())return false;return true;},
Al1:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device).FU.EV){case
0:A.z$([this,this.Al1],[B=A._GetAutoObject(A.Device.Device).FU,B.SL,B.E4],0);break;
case 3:{if(!!this.OH&&(F=this.OH,F[1].call(F[0])))A._GetAutoObject(A.Device.Device
).BatchResetPurchasedNoticePending();if(A._GetAutoObject(A.Device.Converter).S_(
A._GetAutoObject(A.Device.Device).PZ)===10){this.Dl(A.aaR(A.acf.Bj5));this.Bf.NU.
S(A.aaL(A.fl.Bg));}else this.Dl(A.aaR(A.acf.A$A));A._GetAutoObject(A.Device.Device
).AqC();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(97,true,A.jV,0,null);
A._GetAutoObject(A.Device.Device).FU.FD();}break;default:;}},_Init:function(aArg
){C.AkL._Init.call(this,aArg);this.__proto__=C.AUn;var B;this.Ds(C.APx);this.A_v([
B=A._GetAutoObject(A.Device.Device),B.A9x,B.BbX]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADD={PD:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PD={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);this.__proto__=
C.ADD;this.Es.Z(false);this.DT.Z(false);this.PD.H(BuH);this.PD.L(A.jb.Text);this.
Jb.H(BuI);this.Jb.L(A.jb.Text);this.J(this.PD,0);this.J(this.Jb,0);this.PD.Ax(A.
aaL(A.ach.AvI));this.Jb.Ax(A.aaL(A.ach.AvD));},_Done:function(){this.__proto__=C.
De;this.PD._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PD._ReInit();this.Jb._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM3={Init:function(aArg){var B;A.zX([this,this.AAO],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.AIX],0);A.pe([this,this.AAO],this);},WH:function(G){if((!!this.Bf&&
!!this.Bf.AX)&&(this.Bf.AX.B9()>0)){if(this.AJN())A._GetAutoObject(C.BS).TD(A.aaR(
A.acf.AOr),[this,this.AIT]);else A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.AOr));A.
_GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.ACo),[this,this.
Bbq]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.AHk),[this
,this.A8M]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).TD(A.aaR(A.acf.A5$
),[this,this.Bbp]);}else{A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.AOr));A._GetAutoObject(
C.BS).Fx();A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.ACo));A._GetAutoObject(C.BS).Fx(
);A._GetAutoObject(C.BS).Aa1(A.aaR(A.acf.AHk));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Aa1(A.aaR(A.acf.A5$));}A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).
Mq(A.aaR(A.acf.A6B)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();this.AuJ(A.aaR(
A.acf.A6t),[this,this.Bhb],this.OH);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fx();A.
_GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6O));A._GetAutoObject(C.BS).Fx();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Aby:function(){return C.ACi;},Abz:function(){return C.ADB;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AON(
));},HR:function(G){C.AkL.HR.call(this,G);this.N.Cu(A.aaL(A.ach.AeD));this.N.Cf=[
this,this.Adv];this.N.E5(A.jV);this.N.C4(null);this.N.CS((A.aaR(A.acf.A54)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bh7));this.N.OU(false);this.N.OV(false);this.N.IS.
C0(255);},ASv:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiV=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiV.toFixed(),0,null);},ASw:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6G(this);},ASA:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PZ){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.A3U]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.
U$],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agh]);return;
}A.zX([this,this.Al1],[B=A._GetAutoObject(A.Device.Device).FU,B.SL,B.E4],0);var A4N=
!!this.OH&&!(F=this.OH,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asq(A.
_GetAutoObject(A.Device.Device).B6,0,A4N);},AJN:function(){var AtN=this.Bf.AX;if(
!AtN)return false;var O;for(O=0;O<AtN.B9();O++)if(A._GetAutoObject(A.Device.Helper
).Aj3(AtN.AO1(O,34))===false)return true;return false;},Adv:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},AAO:function(G){if(A._GetAutoObject(A.Device.
Device).Aqq===1)A.pe([this,this.A6K],this);},Al1:function(G){var B;var F;switch(
A._GetAutoObject(A.Device.Device).FU.EV){case 0:A.z$([this,this.Al1],[B=A._GetAutoObject(
A.Device.Device).FU,B.SL,B.E4],0);break;case 3:{if(!!this.OH&&(F=this.OH,F[1].call(
F[0])))A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dl(
A.aaR(A.acf.Bh8));A._GetAutoObject(A.Device.Device).AqC();}break;case 4:{A._GetAutoObject(
A.Device.Device).AZ(70,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).FU.FD(
);}break;default:;}},_Init:function(aArg){C.AkL._Init.call(this,aArg);this.__proto__=
C.AM3;var B;this.Ds(C.AO6);this.A_v([B=A._GetAutoObject(A.Device.Device),B.A83,B.
BbF]);this.Init(aArg);},_className:"Application::BirthRegistrationsListScreen"};
C.AO6={DY:function(G){C.Aev.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).AdZ(11));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=
C.AO6;this.Text.R(A.aaR(A.acf.ACb));},_ReInit:function(){C.Aev._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ACb));},_className:"Application::HeaderBirthRegistrationsList"
};C.APx={DY:function(G){C.Aev.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).AdZ(12));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=
C.APx;this.Text.R(A.aaR(A.acf.AGq));},_ReInit:function(){C.Aev._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AGq));},_className:"Application::HeaderPurchasedAnimalsList"
};C.ACm={Jt:0,AP:null,S2:null,Pe:0,Init:function(aArg){},Bl:function(aSize){C.A$.
Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S2.H([this.V.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(
this,Ae);this.S2.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Jt));this.S2.R(A._GetAutoObject(A.acj.KQ).AC8(this.Pe));},Ci:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Jt=this.AX.KS(Ad,26);this.Pe=this.AX.Hw(
Ad,4);this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S2={I:this},0);this.__proto__=C.ACm;
this.AP.H(A0y);this.AP.L(A.jb.Bb);this.S2.H(A0z);this.J(this.AP,0);this.J(this.S2
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S2.S(A.aaL(A.fl.Ak));
this.S2.AY(A.aaL(A.fl.Bg));this.S2.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.AP._Done();this.S2._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AP._ReInit();this.S2._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S2.S(A.aaL(A.fl.Ak));this.S2.AY(A.
aaL(A.fl.Bg));this.S2.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUY={
WI:null,SM:null,TW:null,HH:null,LY:null,IN:null,KK:A.jV,Aj:function(Ae){var F;C.
SY.Aj.call(this,Ae);this.TW.L(this.V.AQ);var Apr=false;if((!this.Dm||!(F=this.Dm
,F[1].call(F[0])))&&!this.A8)Apr=true;this.TW.Z(Apr);this.Pw.Z(!Apr);this.V2.Z(!
Apr);this.Q3.Z(!Apr);this.Yt.Z(!Apr);this.P9.Z(!Apr);},Adx:function(G){var B;var
F;if(!this.KK.length){C.SY.Adx.call(this,G);return;}var BP=this.F_;var FJ=A._GetAutoObject(
A.Device.AkF).Bga(this.KK);this.KK=A.jV;if(!FJ){A._GetAutoObject(A.Device.Device
).AZ(101,true,A.jV,0,this.SM);A.pe(this.WI,this);return;}if(this.Asn&&(FJ>A._GetAutoObject(
A.Device.Helper).Dr())){A._GetAutoObject(A.Device.Device).AZ(102,true,A.jV,0,this.
SM);A.pe(this.WI,this);return;}this.Ut(((B=(FJ|0))<0)?B+0x100000000:B);if(this.F_
!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.F_));A.abo(this.Dm,0);}if(!!this.
OM)A.pe(this.OM,this);},AAL:function(G){if(this.KK.length<10)this.KK=this.KK+String.
fromCharCode(this.HH.Dz);},Av9:function(G){if((this.IN.Dz===0x0D)||(this.IN.Dz===
0x0A))this.Adx(this);else this.IN.Mx=true;},ATA:function(E){if(A.aa0(this.WI,E))
return;this.WI=E;},ATB:function(E){if(A.aa0(this.SM,E))return;this.SM=E;},_Init:
function(aArg){C.SY._Init.call(this,aArg);A.acg.Text._Init.call(this.TW={I:this}
,0);A.Core.BF._Init.call(this.HH={I:this},0);A.Core.BF._Init.call(this.LY={I:this
},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AUY;this.TW.H(BuJ
);this.TW.Je(true);this.TW.A4(0x12);this.TW.R(A.aaR(A.acf.A6o));this.HH.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.TW,0);this.TW.S(A.aaL(A.fl.EK)
);this.HH.BG=[this,this.AAL];this.LY.BG=[this,this.Bcg];this.IN.BG=[this,this.Av9
];},_Done:function(){this.__proto__=C.SY;this.TW._Done();this.HH._Done();this.LY.
_Done();this.IN._Done();C.SY._Done.call(this);},_ReInit:function(){C.SY._ReInit.
call(this);this.TW._ReInit();this.HH._ReInit();this.LY._ReInit();this.IN._ReInit(
);this.TW.R(A.aaR(A.acf.A6o));this.TW.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SY._Mark.call(this,D);if((B=this.WI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AU2={WI:null,SM:null,HH:null,LY:null,IN:null
,KK:A.jV,H0:function(G){var F;if(!this.KK.length){C.Rb.H0.call(this,G);return;}if(
this.Asm)return;if(!this.KK.length)this.LY.Mx=true;var BP=this.AM;var FJ=A._GetAutoObject(
A.Device.AkF).Bgb(this.KK);this.KK=A.jV;if(!FJ){if((this.KK.length<13)&&!A._GetAutoObject(
A.Device.Device).PZ)A._GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,this.SM
);else A._GetAutoObject(A.Device.Device).AZ(103,true,A.jV,0,this.SM);A.pe(this.WI
,this);return;}this.Bx(FJ);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OM)A.pe(this.OM,this);},AAL:function(G){if(
this.Asm)return;if(this.KK.length<17)this.KK=this.KK+String.fromCharCode(this.HH.
Dz);},Av9:function(G){if((this.IN.Dz===0x0D)||(this.IN.Dz===0x0A))this.H0(this);
else this.IN.Mx=true;},ATA:function(E){if(A.aa0(this.WI,E))return;this.WI=E;},ATB:
function(E){if(A.aa0(this.SM,E))return;this.SM=E;},_Init:function(aArg){C.Rb._Init.
call(this,aArg);A.Core.BF._Init.call(this.HH={I:this},0);A.Core.BF._Init.call(this.
LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU2;this.
Ar3(false);this.HH.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.HH.BG=[
this,this.AAL];this.LY.BG=[this,this.Alk];this.IN.BG=[this,this.Av9];},_Done:function(
){this.__proto__=C.Rb;this.HH._Done();this.LY._Done();this.IN._Done();C.Rb._Done.
call(this);},_ReInit:function(){C.Rb._ReInit.call(this);this.HH._ReInit();this.LY.
_ReInit();this.IN._ReInit();},_Mark:function(D){var B;C.Rb._Mark.call(this,D);if((
B=this.WI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APu={AjZ:null,AjX:null,Gw:null
,Q$:null,SV:null,C9:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device),B.A9p,B.AFE],0);A.pe([this,this.DY],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.AjZ.L(E);this.AjX.L(E);this.Q$.Zz(E);this.Gw.L(E);this.SV.Zz(
E);},WJ:function(E){this.Q$.CW(E);this.SV.CW(E);},DY:function(G){this.Q$.T(A._GetAutoObject(
A.Device.Device).AvY.toFixed());A.pe([this,this.BDk],this);},BDk:function(G){var
Xy=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).Avv());this.SV.T(A._GetAutoObject(A.Device.
Device).An.B9().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(Xy);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AjZ={I:this},0);A.acg.
Ap._Init.call(this.AjX={I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D3.
_Init.call(this.Q$={I:this},0);C.D3._Init.call(this.SV={I:this},0);A.acg.C9._Init.
call(this.C9={I:this},0);this.__proto__=C.APu;this.AjZ.H(O9);this.AjX.H(BuK);this.
Gw.H(BuL);this.Gw.L(A.jb.CV);this.Q$.A1(0x14);this.Q$.H(BuM);this.Q$.Zz(A.jb.Bm);
this.Q$.CW(A.jb.Ri);this.Q$.Ho(2);this.Q$.BmA(0x11);this.SV.A1(0x14);this.SV.H(BuN
);this.SV.Zz(A.jb.Bm);this.SV.CW(A.jb.Ri);this.SV.Ho(2);this.C9.DE(AhT);this.C9.
DO(BuO);this.C9.L(A.jb.Bb);this.J(this.AjZ,0);this.J(this.AjX,0);this.J(this.Gw,
0);this.J(this.Q$,0);this.J(this.SV,0);this.J(this.C9,0);this.AjZ.Ax(A.aaL(A.ach.
Aq6));this.AjX.Ax(A.aaL(A.ach.AP4));this.Gw.Ax(A.aaL(A.ach.Gw));this.Q$.S(A.aaL(
A.fl.Bg));this.SV.S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.AjZ._Done();this.AjX._Done();this.Gw._Done();this.Q$._Done();this.SV._Done(
);this.C9._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.AjZ._ReInit();this.AjX._ReInit();this.Gw._ReInit();this.Q$._ReInit();this.
SV._ReInit();this.C9._ReInit();this.Q$.S(A.aaL(A.fl.Bg));this.SV.S(A.aaL(A.fl.Bg
));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AjZ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.ARZ={Abn:null,Aeo:null,VZ:null
,Init:function(aArg){this.Ba(this.Abn);},Lq:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CF=[this,this.AaN];this.BQ.Cf=null;this.BQ.Cc=[this,this.A3I];this.
BQ.CS(A.jV);this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},AAG:function(
G){var Aa=(C.Ajh.isPrototypeOf(G)?G:null);if(Aa===this.Abn)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aeo)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AIL);},_Init:function(aArg){C.Fq._Init.
call(this,aArg);C.Ajh._Init.call(this.Abn={I:this},0);C.Ajh._Init.call(this.Aeo={
I:this},0);C.AR3._Init.call(this.VZ={I:this},0);this.__proto__=C.ARZ;var B;this.
H(Rq);this.Text.R(A.aaR(A.acf.ACg));this.Abn.H(I1);this.Abn.T(A.aaR(A.acf.AjD));
this.Aeo.H(Qc);this.Aeo.T(A.aaR(A.acf.AGx));this.VZ.H(Aan);this.VZ.T(A.aaR(A.acf.
A5W));this.J(this.Abn,0);this.J(this.Aeo,0);this.J(this.VZ,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abn.AR=[this,this.AAG];this.Aeo.AR=[this,this.AAG];this.VZ.ATd([B=
A._GetAutoObject(A.Device.Device),B.AES,B.AI0]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fq;this.Abn._Done();this.Aeo._Done();this.VZ._Done();C.Fq._Done.
call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.Abn._ReInit();this.
Aeo._ReInit();this.VZ._ReInit();this.Text.R(A.aaR(A.acf.ACg));this.Abn.T(A.aaR(A.
acf.AjD));this.Aeo.T(A.aaR(A.acf.AGx));this.VZ.T(A.aaR(A.acf.A5W));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Abn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.ARY={AnimalTableFields:null,Ay:null,Y:null,JW:null,CP:function(){this.AiI(this
);},Init:function(aArg){A.zV([this,this.AiI],this.AnimalTableFields,0);A.pe([this
,this.AiI],this);},DG:function(G){C.Fq.DG.call(this,G);this.M0(this);},Lq:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Cf=[
this,this.A3G];this.BQ.Cc=[this,this.A4a];this.BQ.C4(A.aaL(A.ach.Ard));this.BQ.Cu(
A.aaL(A.ach.Aq7));this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},Ew:function(G){this.
ABi();this.AaN(this);},AiI:function(G){this.Ao0();var O;for(O=0;O<this.AnimalTableFields.
Ng();O=O+1){var Aav=A._GetAutoObject(C.Amr).OK(O);this.A1K(Aav);}this.J(this.JW,
0);A.aaS([this,this.M0],this);},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},M0:function(
G){var B;this.Y.VF(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},A1K:function(Ha){var Azj=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azj.BT(Ha));Aa.Ai(true);Aa.G6=Ha;Aa.A_H(this.
AnimalTableFields.N3(Ha));this.J(Aa,0);this.ZL(Aa);},Ao0:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdL=X;X=X.Ah;if(((AdL.U&0x400)===
0x400))this.HQ(AdL);}},ABi:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JW)){var Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G6);if(Aa.ASM())this.AnimalTableFields.AUU(Aa.G6);}else A.ab5("%s",AyB);}X=X.Ah;
}this.AnimalTableFields.Cs();},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAy=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAy
){this.AhB(AAy,Aa);A.pe([this,this.M0],this);}}},A4a:function(G){var B;var Aa=(C.
Sm.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA6=(C.Sm.isPrototypeOf(B=Aa.AI
)?B:null);if(!!AA6){this.AhB(Aa,AA6);A.pe([this,this.M0],this);}}},AqJ:function(
G){var B;A._GetAutoObject(A.Device.Device).Asr(this);A.pe([this,this.AiI],this);
},_Init:function(aArg){C.Fq._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au_._Init.call(this.JW={I:this},0);
this.__proto__=C.ARY;this.H(Rq);this.Text.R(A.aaR(A.acf.AGx));this.Ay.H(Iw);this.
Y.H(Bbe);this.Y.J0(1);this.JW.H(AIe);this.JW.Ai(true);this.JW.T(A.aaR(A.acf.A6C)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JW,0);this.Y.En=[this,this.Fh];
this.JW.AR=[this,this.AqJ];this.AnimalTableFields=A._GetAutoObject(C.Amr);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fq;this.Ay._Done();this.Y._Done();this.
JW._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JW._ReInit();this.Text.R(A.aaR(A.acf.AGx));this.
JW.T(A.aaR(A.acf.A6C));this.CP();},_Mark:function(D){var B;C.Fq._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARX={Y:null,B0:null,Db:null,CH:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UU:null,Init:function(aArg){A.zX([this,this.AuQ],this.B0.Q,0);A.zX([
this,this.AM8],this.CH.Q,0);A.zX([this,this.AWd],this.GQ.Q,0);A.zX([this,this.Avs
],this.Db.Q,0);this.Ba(this.B0);},DG:function(G){C.Fq.DG.call(this,G);this.M0(this
);},Lq:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.
AaN];this.BQ.Cf=null;this.BQ.Cc=null;this.BQ.CS(A.jV);this.BQ.Cu(null);this.BQ.C3(
A.aaL(A.ach.YI));}return this.BQ;},Fh:function(G){var B;this.Ay.MH((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Bs[1]);},M0:function(
G){var B;this.Y.VF(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},AuQ:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AWd:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},Avs:function(G){var F;A._GetAutoObject(
A.Device.Device).J1((F=this.Db.Q,F[1].call(F[0])));},AM8:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fq._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Aa0._Init.call(this.B0={
I:this},0);C.Aa0._Init.call(this.Db={I:this},0);C.Aa0._Init.call(this.CH={I:this
},0);C.Aa0._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UV._Init.call(this.UU={I:
this},0);this.__proto__=C.ARX;var B;this.H(Rq);this.Text.R(A.aaR(A.acf.AjD));this.
Y.H(Bbe);this.Y.J0(1);this.B0.H(Ale);this.B0.As(true);this.B0.Ai(true);this.B0.T(
A.aaR(A.acf.Afu));this.Db.H(Ayt);this.Db.As(true);this.Db.Ai(true);this.Db.T(A.aaR(
A.acf.Afp));this.CH.H(Aoj);this.CH.As(true);this.CH.Ai(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(Ata);this.GQ.As(true);this.GQ.Ai(true);this.GQ.T(A.aaR(A.acf.Jm
));this.Ay.H(Iw);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UU.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.En=[this,this.Fh];this.B0.ZA(A.aaL(A.fl.H5));
this.B0.ZB(A.aaL(A.fl.H5));this.B0.Au([B=this.AnimalType,B.Ca,B.Cb]);this.B0.CI(
this.AnimalType);this.Db.ZA(A.aaL(A.fl.H5));this.Db.ZB(A.aaL(A.fl.H5));this.Db.Au([
B=this.Gender,B.Ca,B.Cb]);this.Db.CI(this.Gender);this.CH.ZA(A.aaL(A.fl.H5));this.
CH.ZB(A.aaL(A.fl.H5));this.CH.Au([B=this.Breed,B.Ca,B.Cb]);this.CH.CI(this.Breed
);this.GQ.ZA(A.aaL(A.fl.H5));this.GQ.ZB(A.aaL(A.fl.H5));this.GQ.Au([B=this.UU,B.
Ca,B.Cb]);this.GQ.CI(this.UU);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fq;this.Y._Done();this.B0._Done();this.Db._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UU._Done();C.Fq._Done.call(this);},_ReInit:function(){C.Fq._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Db._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UU._ReInit();this.Text.R(A.aaR(A.acf.AjD));this.B0.T(A.aaR(
A.acf.Afu));this.Db.T(A.aaR(A.acf.Afp));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Fq._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amv={CB:0,Alv:A.abi(17,0,null),OK:function(HB){return this.Alv.Get(HB);},Ng:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alv.Set(
O,0);this.CB=0;},J:function(Aaq){if(this.CB>=17)A.ab5("%s",BuP);else{this.Alv.Set(
this.CB,Aaq);this.CB=this.CB+1;}},Cs:function(){},Fl:function(Ah1){var AJ8=Ah1.indexOf(
String.fromCharCode(0x2C),0);var A1$=A.jV;var O=0;this.CB=0;while(O<17)if(Ah1===
A.jV)O++;else{if(AJ8===-1){A1$=Ah1;Ah1=A.jV;}else{A1$=A.abV(Ah1,AJ8);Ah1=A.ab1(Ah1
,0,AJ8+1);}var Aav=A.abZ(A1$,0,10)|0;if(this.Bkk(Aav)){this.Alv.Set(this.CB,Aav);
this.CB=this.CB+1;O++;}AJ8=Ah1.indexOf(String.fromCharCode(0x2C),0);}if(Ah1!==A.
jV)A.ab5("%s",BuQ);},toString:function(){var B;var AAw=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAw=AAw+AyD;AAw=AAw+(((B=this.Alv.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAw;},Contains:function(Aaq){var O;for(O=0;O<this.CB;O=O+1)if(this.Alv.
Get(O)===Aaq)return true;return false;},Bkk:function(Aaq){return true;},_Init:function(
aArg){(this.Alv=[]).__proto__=C.Amv.Alv;this.__proto__=C.Amv;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMd={AfR:null,Init:function(aArg){var B;A.
zX([this,this.Bfg],[B=A._GetAutoObject(A.Device.Device),B.A8R,B.Bbx],0);A.zX([this
,this.Bfh],[B=A._GetAutoObject(A.Device.Device),B.A8S,B.Bby],0);A.pe([this,this.
Bfg],this);A.pe([this,this.Bfh],this);},Clear:function(){C.Amv.Clear.call(this);
this.AfR.Clear();},Cs:function(){A._GetAutoObject(A.Device.Device).ArI(this.AfR.
toString());A._GetAutoObject(A.Device.Device).ArJ(this.toString());},Bfg:function(
G){this.AfR.Fl(A._GetAutoObject(A.Device.Device).ABS);A.we(this,0);},Bfh:function(
G){this.Fl(A._GetAutoObject(A.Device.Device).ABT);A.we(this,0);},N3:function(Aaq
){return this.AfR.Contains(Aaq);},AUU:function(Aaq){if(!this.N3(Aaq))this.AfR.J(
Aaq);},AOO:function(){return this.AfR.Ng();},_Init:function(aArg){C.Amv._Init.call(
this,aArg);this.__proto__=C.AMd;this.AfR=A._NewObject(C.Amv,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amv._Mark.call(this,D);if((B=this.AfR)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amr={_Init:function(){C.AMd._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR3={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A4(0x11);this.V.Text.Ho(10);},Bl:function(aSize){C.Uf.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mv.M[0]));},Aj:function(Ae){var B;C.Uf.
Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fu=((Ae&0x20)===0x20);var GF=this.
Bo.Bw;var FV=A.jb.Aea;var GZ=A.jb.Bm;if(this.Hm){FV=A.jb.Bm;GZ=A.jb.Text;}if(!Hf
){this.Background.L(FV);this.V.L(A.jb.CK);}else if(GF){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fu){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FV);this.V.L(GZ);}this.LN=Hf;this.KL=Fu;this.Qv=GF;},_Init:function(
aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.AR3;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM1={YZ:null,Ak5:null,Lq:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaN];this.BQ.Cf=null;
this.BQ.Cc=null;this.BQ.CS(A.jV);this.BQ.Cu(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Aa0._Init.call(this.
YZ={I:this},0);C.AEo._Init.call(this.Ak5={I:this},0);this.__proto__=C.AM1;var B;
this.H(K2);this.YZ.H(K2);this.YZ.T(A.aaR(A.acf.Display));this.Ak5.Au(A._GetAutoObject(
A.Device.Device).Aqq);this.J(this.YZ,0);this.YZ.ZA(A.aaL(A.fl.H5));this.YZ.ZB(A.
aaL(A.fl.H5));this.YZ.Au([B=this.Ak5,B.Ca,B.Cb]);this.YZ.CI(this.Ak5);this.Ak5.BnP([
B=A._GetAutoObject(A.Device.Device),B.AEO,B.AIX]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YZ._Done();this.Ak5._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YZ._ReInit();this.Ak5._ReInit(
);this.YZ.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEo={AbU:null,ListViewScopeToString:null,Dv:function(){return 2;},C8:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gb:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbU)(F=this.AbU,F[2].call(F[0],E));},BnP:function(E
){if(A.aaZ(this.AbU,E))return;if(!!this.AbU)A.z$([this,this.A4g],this.AbU,0);this.
AbU=E;if(!!this.AbU)A.zX([this,this.A4g],this.AbU,0);A.pe([this,this.A4g],this);
},A4g:function(G){var F;if(!!this.AbU)this.Q=(F=this.AbU,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEo;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AG9={
ACt:0,ACs:0,Aj:function(Ae){C.O1.Aj.call(this,Ae);this.Background.L(this.ACs);this.
V.L(this.ACt);},A_i:function(E){if(this.ACt===E)return;this.ACt=E;this.Am();},BmG:
function(E){if(this.ACs===E)return;this.ACs=E;this.Am();},_Init:function(aArg){C.
O1._Init.call(this,aArg);this.__proto__=C.AG9;this.As(false);this.ACt=A.jb.Text;
this.ACs=A.jb.CK;},_className:"Application::TextCaptionItem"};C.AHu={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeM],[B=A._GetAutoObject(A.Device.
Device),B.A9q,B.BbR],0);A.pe([this,this.BeM],this);},Dv:function(){return 3;},Gb:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C8(aIndex));},
Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwX(E);},BeM:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OR;A.abo([this,this.Ca,this.
Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHu;this.
BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cn;this.WeightValuePrecisionToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AU0={UI:null,Bab:A.jV,Init:function(aArg){},Bl:function(aSize){C.BU.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UI.H([
0,80,aSize[0],aSize[1]]);},Aj:function(Ae){C.BU.Aj.call(this,Ae);this.UI.L(this.
V.AQ);},Boi:function(E){if(this.Bab===E)return;this.Bab=E;this.UI.R(E);},_Init:function(
aArg){C.BU._Init.call(this,aArg);C.CG._Init.call(this.UI={I:this},0);this.__proto__=
C.AU0;this.H(AcR);this.UI.H(BuR);this.J(this.UI,0);this.UI.S(A.aaL(A.fl.Af));this.
UI.AY(A.aaL(A.fl.Ak));this.UI.Cm(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BU;this.UI._Done();C.BU._Done.call(this);},_ReInit:function(){C.BU._ReInit.call(
this);this.UI._ReInit();this.UI.S(A.aaL(A.fl.Af));this.UI.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BU._Mark.call(this,D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wq={ABW:null,MassDeregistrationCriterionToString:
null,Dv:function(){return 2;},Gb:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A9=this.C8(aIndex);var M8=this.MassDeregistrationCriterionToString.
BT(this.C8(aIndex));if(!!this.ABW&&!A9)M8=A._GetAutoObject(A.Device.Helper).MO(M8
,O$,(F=this.ABW,F[1].call(F[0])).toFixed());return M8;},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wq;this.BI.Set(
0,0);this.BI.Set(1,1);},_Done:function(){this.__proto__=C.Cn;this.MassDeregistrationCriterionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.ABW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANW={Vr:null,Wq:null,Ze:null,JX:null
,Auc:0,Aa2:100,Init:function(aArg){this.Ba(this.Ze);},Aj:function(Ae){C.Ek.Aj.call(
this,Ae);var BCT=((A.aaR(A.acf.Aqy)+A.aaR(A.acf.Colon))+CR)+this.Auc.toFixed();this.
JX.Boi(BCT);},CC:function(G){C.Ek.CC.call(this,G);A.zX([this,this.ABI],this.JX.Q
,0);A.pe([this,this.ABI],this);},E3:function(G){C.Ek.E3.call(this,G);A.z$([this,
this.ABI],this.JX.Q,0);},DL:function(G){var F;C.Ek.DL.call(this,G);this.N.E5(A.jV
);this.N.Cf=null;if((this.AV===this.JX)&&!!this.JX.Q){this.N.Cc=[this,this.Bfw];
switch((F=this.JX.Q,F[1].call(F[0]))){case 1:if(!this.Auc)this.N.GX.C0(100);else
this.N.GX.C0(255);break;case 0:{this.N.E5(A.aaR(A.acf.BiB));this.N.Cf=[this,this.
Bzu];if(this.Aa2<=1)this.N.GX.C0(100);else this.N.GX.C0(255);this.N.CS(A.aaR(A.acf.
BiC));this.N.Cc=[this,this.BAy];if(this.Aa2>=2147483647)this.N.GX.C0(100);else this.
N.GX.C0(255);this.N.WS=true;}break;default:throw new Error(BuS+(F=this.JX.Q,F[1].
call(F[0])).toFixed());}this.JX.Ab6(this.N.Cc);}},Bfw:function(G){if(this.Auc>0)
A._GetAutoObject(A.Device.Device).AZ(108,true,this.Auc.toFixed(),0,[this,this.BA7
]);},ABI:function(G){var F;this.Auc=A._GetAutoObject(A.Device.Helper).BjI((F=this.
JX.Q,F[1].call(F[0])),this.Aa2);this.Am();A.pe([this,this.MT],this);},Bfq:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(A.Device.
Device).AZ(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Ari(
)===false){this.Vr=[this,this.Bfq];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ur,B.U$],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agh]);return;}A.zX([this,this.Al1],[B=A._GetAutoObject(A.Device.Device).FU,
B.SL,B.E4],0);A._GetAutoObject(A.Device.Device).Asq(A._GetAutoObject(A.Device.Device
).B6,1,false);},Agh:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===5)){A.z$([this,this.XM],[B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U$],0);this.Vr=null;}},XM:function(G){var B;if(A._GetAutoObject(
A.Device.Device).P4.Z7===3){A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0
,[this,this.Agh]);A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,
B.U$],0);if(!!this.Vr)A.pe(this.Vr,this);this.Vr=null;}},BA7:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([
this,this.BCO],this);},BCO:function(G){A._GetAutoObject(A.Device.Helper).ByX(this.
Wq.Q,this.Aa2);A._GetAutoObject(A.Device.Device).AZ(109,true,this.Auc.toFixed(),
0,null);A.pe([this,this.MT],this);A.pe([this,this.ABI],this);},Al1:function(G){var
B;switch(A._GetAutoObject(A.Device.Device).FU.EV){case 0:A.z$([this,this.Al1],[B=
A._GetAutoObject(A.Device.Device).FU,B.SL,B.E4],0);break;case 3:A._GetAutoObject(
A.Device.Device).AqC();break;case 4:{A._GetAutoObject(A.Device.Device).AZ(88,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).FU.FD();}break;default:;}},BAy:function(
G){if(this.Aa2<2147483647)this.AS_(this.Aa2+1);},Bzu:function(G){if(this.Aa2>1)this.
AS_(this.Aa2-1);},AS_:function(E){if(this.Aa2===E)return;this.Aa2=E;A.pe([this,this.
ABI],this);this.JX.Am();},Blg:function(){return this.Aa2;},_Init:function(aArg){
C.Ek._Init.call(this,aArg);C.Wq._Init.call(this.Wq={I:this},0);C.Cp._Init.call(this.
Ze={I:this},0);C.AU0._Init.call(this.JX={I:this},0);this.__proto__=C.ANW;var B;this.
Ds(C.AO8);this.Ze.H(I1);this.Ze.Ai(true);this.Ze.T(A.aaR(A.acf.A6W));this.Ze.Bh(
false);this.JX.H(Bbc);this.JX.Ai(true);this.JX.T(A.aaR(A.acf.Bav));this.JX.Bh(true
);this.JX.A_$(A.aaR(A.acf.Ok));this.J(this.Ze,0);this.J(this.JX,0);this.Wq.ABW=[
this,this.Blg,this.AS_];this.Ze.AR=[this,this.Bfq];this.JX.AR=[this,this.Bfw];this.
JX.Ab6(this.N.Cc);this.JX.Au([B=this.Wq,B.Ca,B.Cb]);this.JX.CI(this.Wq);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ek;this.Wq._Done();this.Ze._Done();this.
JX._Done();C.Ek._Done.call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.
Wq._ReInit();this.Ze._ReInit();this.JX._ReInit();this.Ze.T(A.aaR(A.acf.A6W));this.
JX.T(A.aaR(A.acf.Bav));this.JX.A_$(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.
Ek._Mark.call(this,D);if((B=this.Vr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Wq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.JX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO8={_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO8;this.
Text.R(A.aaR(A.acf.AdU));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdU));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANZ={
Vr:null,Zd:null,AbY:null,Init:function(aArg){this.Ba(this.Zd);A.pe([this,this.MT
],this);},Bfp:function(G){var B;var AAg=A._GetAutoObject(A.Device.Device).AEa();
switch(AAg){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AZ(91,true,U6,0,[this,this.BfI]);break;
case 2:{this.Vr=[this,this.Bfp];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ur,B.U$],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agh]);}break;default:throw new Error(Bbf+AAg.toFixed());}},Agh:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U$],0);this.
Vr=null;}},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z7===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agh]);A.z$([this
,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U$],0);if(!!this.Vr)A.pe(this.
Vr,this);this.Vr=null;}},BfK:function(G){var B;var AAg=A._GetAutoObject(A.Device.
Device).AEb();switch(AAg){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AZ(95,true,A.jV,0,[this
,this.BA8]);break;case 2:{this.Vr=[this,this.BfK];A.zX([this,this.XM],[B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U$],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV
,0,[this,this.Agh]);}break;case 3:A._GetAutoObject(A.Device.Device).AZ(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AZ(93,true,A.jV,0,null
);break;default:throw new Error(Bbf+AAg.toFixed());}},BfI:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.Bzy],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
BzA],this);break;default:throw new Error(BuT+Ar.Id.toFixed());}},Bzy:function(G){
if(A._GetAutoObject(A.Device.Device).ACC()){var A3t=A._GetAutoObject(A.Device.Device
).An.QL();A._GetAutoObject(A.Device.Device).AZ(80,true,A3t.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AZ(82,true,A.jV,0,null);A.aaS([this,this.BA3],
this);},BzA:function(G){if(A._GetAutoObject(A.Device.Device).AGB()){var A3t=A._GetAutoObject(
A.Device.Device).An.QL();A._GetAutoObject(A.Device.Device).AZ(81,true,A3t.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AZ(83,true,A.jV,0,null);A.aaS([
this,this.BBI],this);},BA8:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCP],this);},BCP:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,true,U6,0,[this,this.BfI]);},BBI:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,false,A.jV,0,null);},BA3:function(G){
A._GetAutoObject(A.Device.Device).AZ(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ek._Init.call(this,aArg);C.Cp._Init.call(this.Zd={I:this},0);C.Cp._Init.call(
this.AbY={I:this},0);this.__proto__=C.ANZ;this.Ds(C.AO$);this.Zd.H(I1);this.Zd.Ai(
true);this.Zd.T(A.aaR(A.acf.ACC));this.Zd.Bh(false);this.AbY.H(Qc);this.AbY.Ai(true
);this.AbY.T(A.aaR(A.acf.AGB));this.AbY.Bh(true);this.J(this.Zd,-1);this.J(this.
AbY,-1);this.Zd.AR=[this,this.Bfp];this.AbY.AR=[this,this.BfK];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ek;this.Zd._Done();this.AbY._Done();C.Ek._Done.
call(this);},_ReInit:function(){C.Ek._ReInit.call(this);this.Zd._ReInit();this.AbY.
_ReInit();this.Zd.T(A.aaR(A.acf.ACC));this.AbY.T(A.aaR(A.acf.AGB));},_Mark:function(
D){var B;C.Ek._Mark.call(this,D);if((B=this.Vr)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO$={
_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO$;this.Text.R(
A.aaR(A.acf.ACI));},_ReInit:function(){C.Kt._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACI));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Mo={L3:null
,AUt:0,AEd:false,AD$:false,AEe:false,Agf:function(G){this.A6F(this);},ATw:function(
E){if(this.L3===E)return;this.L3=E;if(!this.L3)return;this.DR.AutoActions=E;A.zV([
this,this.BgM],this.L3,0);A.zV([this,this.Aow],this.L3,0);A.pe([this,this.BgM],this
);A.pe([this,this.Aow],this);},AMe:function(){this.AMg(A.aaR(A.acf.BaD),[this,this.
BC5],[this,this.A9k,this.AFv]);this.AMg(A.aaR(A.acf.AGr),[this,this.BC3],[this,this.
A9h,this.AFt]);this.AMg(A.aaR(A.acf.An0),[this,this.BC4],[this,this.A9i,this.AFu
]);A._GetAutoObject(C.BS).Fx();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BoQ)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fx();},AMg:function(Bxq,Byz,BxU){if(!this.L3
)return;this.AuJ(Bxq,Byz,BxU);},BC5:function(G){this.AFv(!this.AEe);},BC3:function(
G){this.AFt(!this.AD$);},BC4:function(G){this.AFu(!this.AEd);},A4I:function(Ei,BxT
){if(!this.L3)return;if(BxT)this.L3.BhI(Ei);else this.L3.Bo9(Ei);this.L3.Cs();},
A5p:function(Aic,Aid,ByS){A._GetAutoObject(C.BS).ABU(Aic,Aid,[this,this.A9B,this.
ATJ],ByS);},AGN:function(Ei){if(!this.L3)return;this.L3.AGN(Ei);this.L3.Cs();},AFv:
function(E){if(this.AEe===E)return;this.AEe=E;this.A4I(256,E);A.abo([this,this.A9k
,this.AFv],0);},AFt:function(E){if(this.AD$===E)return;this.AD$=E;this.A4I(2,E);
A.abo([this,this.A9h,this.AFt],0);},AFu:function(E){if(this.AEd===E)return;this.
AEd=E;this.A4I(1,E);A.abo([this,this.A9i,this.AFu],0);},BgM:function(G){this.AFv(
this.L3.Contains(256));this.AFt(this.L3.Contains(2));this.AFu(this.L3.Contains(1
));if(this.L3.Ng()>0)this.ATJ(this.L3.ADg());},ATJ:function(E){if(this.AUt===E)return;
this.AUt=E;A.abo([this,this.A9B,this.ATJ],0);},A9k:function(){return this.AEe;},
A9h:function(){return this.AD$;},A9i:function(){return this.AEd;},A9B:function(){
return this.AUt;},_Init:function(aArg){C.GK._Init.call(this,aArg);this.__proto__=
C.Mo;},_Mark:function(D){var B;C.GK._Mark.call(this,D);if((B=this.L3)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvX={Q:null,Cs:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AD9:
function(Ei){switch(Ei){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hg:function(G){var F;if(!!this.Q)this.Fl((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,
0);if(!!E)A.pe([this,this.Hg],this);},AGN:function(Ei){if(this.Ng()>0)this.AxB(this.
Ng()-1,Ei);},BhI:function(Ei){if(this.Contains(Ei))return;if(this.CB>=17){A.ab5(
"%s",AIg);return;}var Az$=0;for(;(Az$<=this.Ng())&&(this.OK(Az$)<Ei);Az$++);var ABn=
this.Ng()-1;this.J(this.OK(ABn));for(;ABn>Az$;ABn--)this.AxB(ABn,this.OK(ABn-1));
this.AxB(Az$,Ei);},Bo9:function(Ei){var index=this.D0(Ei);if(index<0)return;for(;
index<(this.Ng()-1);index++)this.AxB(index,this.OK(index+1));this.AxB(index,0);this.
CB--;},ADg:function(){var Tm=0;if(this.Ng()>0)Tm=this.OK(this.Ng()-1);return Tm;
},_Init:function(aArg){C.VE._Init.call(this,aArg);this.__proto__=C.AvX;},_Mark:function(
D){var B;C.VE._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av7={_Init:function(){C.AvX.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9u,B.BbV
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av8={
_Init:function(){C.AvX._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9v,B.BbW]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax8={_Init:function(){C.AvX._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A93,B.Bb$]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADF={QV:null,AjT:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QV={I:this},0);A.acg.Ap._Init.call(this.AjT={
I:this},0);this.__proto__=C.ADF;this.Es.H(BuU);this.DT.H(BuV);this.QV.H(BuW);this.
QV.R(A.aaR(A.acf.Ul));this.QV.A4(0x11);this.QV.L(A.jb.Text);this.AjT.H(A0v);this.
AjT.L(A.jb.Text);this.J(this.QV,0);this.J(this.AjT,0);this.QV.S(A.aaL(A.fl.Af));
this.QV.AY(A.aaL(A.fl.Ak));this.QV.Cm(A.aaL(A.fl.Bg));this.AjT.Ax(A.aaL(A.ach.AvC
));},_Done:function(){this.__proto__=C.De;this.QV._Done();this.AjT._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QV._ReInit();
this.AjT._ReInit();this.QV.R(A.aaR(A.acf.Ul));this.QV.S(A.aaL(A.fl.Af));this.QV.
AY(A.aaL(A.fl.Ak));this.QV.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACl={
AP:null,S4:null,O2:null,AKA:A.jV,BeV:A.jV,Mn:0,Init:function(aArg){},Bl:function(
aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O2.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O2.M[2]-1,0,this.O2.M[2]+1,aSize[1]]);this.
S4.H([this.O2.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);
this.O2.L(this.V.AQ);this.S4.L(this.V.AQ);this.T(this.AKA);this.O2.R(this.BeV);this.
S4.R(this.Mn.toFixed());},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Jt=this.AX.KS(Ad,26);var A3l=A._GetAutoObject(A.Device.Converter).Rj(Jt);
this.AKA=A.abV(A3l,A3l.length-5);this.BeV=A.ab2(A3l,5);if((A._GetAutoObject(A.Device.
Converter).S_(Jt)===10)&&!(Math.trunc(Jt/10000000000)%100))this.AKA=A.ab1(this.AKA
,3,2);this.Mn=this.AX.CE(Ad,1);this.Am();}},_Init:function(aArg){C.A$._Init.call(
this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S4={I:this
},0);C.CG._Init.call(this.O2={I:this},0);this.__proto__=C.ACl;this.V.H(BuX);this.
AP.H(A0y);this.AP.L(A.jb.Bb);this.S4.H(A0z);this.O2.H(BuY);this.J(this.AP,0);this.
J(this.S4,0);this.J(this.O2,0);this.V.S(A.aaL(A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg)
);this.S4.S(A.aaL(A.fl.Ak));this.S4.AY(A.aaL(A.fl.Bg));this.S4.Cm(A.aaL(A.fl.Bg)
);this.O2.S(A.aaL(A.fl.Af));this.O2.AY(A.aaL(A.fl.Bg));this.O2.Cm(A.aaL(A.fl.Bg)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.S4.
_Done();this.O2._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.S4._ReInit();this.O2._ReInit();this.V.S(A.aaL(
A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg));this.S4.S(A.aaL(A.fl.Ak));this.S4.AY(A.aaL(A.
fl.Bg));this.S4.Cm(A.aaL(A.fl.Bg));this.O2.S(A.aaL(A.fl.Af));this.O2.AY(A.aaL(A.
fl.Bg));this.O2.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APB={Q:null,Init:function(aArg){var B;this.ABc(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fn,B.Fr]);},AE1:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E9(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DN(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nw(FilterCriterion);var Ai2=this.Awi();if((Ai2.length>
0)&&(Ai2!==U6)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai2,0,6,false);Filter.CY(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeY(false);},ABc:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E9();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DN(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,
0);if(!!E)A.pe([this,this.C6],this);},C6:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATp(A.jV);return;}var Aza=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(26,4))?B:null);if(!Aza){this.AW.ATp(
U6);this.AW.AeY(true);}else this.AW.ATp(Aza.A6);},_Init:function(aArg){C.AjP._Init.
call(this,aArg);this.__proto__=C.APB;this.AW.AwQ(0);this.AW.BnB(true);this.AW.Dk=[
this,this.AE1];this.Init(aArg);},_Mark:function(D){var B;C.AjP._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVM={FB:null,Da:null,Dn:null,EL:null,AsP:null,Init:function(aArg){var B;A.zX([
this,this.BfR],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0U],0);A.zX([this,this.
Adw],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U8],0);A.zX([this,this.Adw],[B=
A._GetAutoObject(A.Device.Device),B.Uq,B.U9],0);A.pe([this,this.BfR],this);A.pe([
this,this.Adw],this);},BfR:function(G){var AaU=false;switch(A._GetAutoObject(A.Device.
Device).An5){case 0:AaU=false;break;case 3:AaU=true;break;default:throw new Error(
BuZ+A._GetAutoObject(A.Device.Device).An5.toFixed());}A._GetAutoObject(A.Device.
Helper).J7(this.Da,AaU);A._GetAutoObject(A.Device.Helper).J7(this.Dn,AaU);A._GetAutoObject(
A.Device.Helper).J7(this.EL,AaU);},Adw:function(G){var F,Cv;if(((F=this.Da.Q,F[1
].call(F[0]))+(Cv=this.Dn.Q,Cv[1].call(Cv[0])))>12)(Cv=this.Dn.Q,Cv[2].call(Cv[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ch._Init.call(this
,aArg);C.BU._Init.call(this.FB={I:this},0);C.Iu._Init.call(this.Da={I:this},0);C.
Iu._Init.call(this.Dn={I:this},0);C.Av1._Init.call(this.EL={I:this},0);C.AVL._Init.
call(this.AsP={I:this},0);this.__proto__=C.AVM;var B;this.Jf(A.aaR(A.acf.UnlinkTransponder
));this.FB.H(U5);this.FB.Ai(true);this.FB.Z(true);this.FB.T(A.aaR(A.acf.Aqh));this.
FB.Bh(true);this.Da.H(Alg);this.Da.Ai(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqE));this.Da.Bh(false);this.Da.Ge(2);this.Da.EU(6);this.Da.IW(A.aaR(A.acf.OI));
this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(AhZ);this.Dn.Ai(true);this.Dn.T(A.aaR(A.acf.
Zs));this.Dn.Bh(true);this.Dn.Ge(0);this.Dn.EU(12);this.Dn.IW(A.aaR(A.acf.OI));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aol);this.EL.As(true);this.EL.Ai(true);this.EL.
Bh(false);this.EL.Ar2(A.aaR(A.acf.Aqj));this.J(this.FB,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FB.Au([B=this.AsP,B.Ca,B.Cb]);this.FB.CI(this.
AsP);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Uq,B.U9]);this.EL.DD(A.aaL(A.ach.AjU));this.EL.
OS([B=A._GetAutoObject(A.Device.Device),B.Un,B.U8]);this.EL.PV([B=A._GetAutoObject(
A.Device.Device),B.Uq,B.U9]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ch;this.FB._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.AsP._Done(
);C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.FB._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit();this.AsP._ReInit();this.
Jf(A.aaR(A.acf.UnlinkTransponder));this.FB.T(A.aaR(A.acf.Aqh));this.Da.T(A.aaR(A.
acf.AqE));this.Da.IW(A.aaR(A.acf.OI));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(
A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OI));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar2(A.
aaR(A.acf.Aqj));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.FB).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVL={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhj],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0U],0);A.pe([
this,this.Bhj],this);},Dv:function(){return 2;},Gb:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axg(E);},Bhj:function(G){this.Q=A._GetAutoObject(A.Device.Device).An5;A.
abo([this,this.Ca,this.Cb],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVL;this.BI.Set(0,0);this.BI.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C.ANH={Gb:function(aIndex){if((aIndex<0)||(aIndex>=40))return A.jV;return this.CountryToString.
BT(aIndex);},_Init:function(aArg){C.B6._Init.call(this,aArg);this.__proto__=C.ANH;
},_className:"Application::CountryLongName"};
C._Init=function(){C.AMP.__proto__=A.Core.Root;C.AB.__proto__=C.Abp;C.WV.__proto__=
A.Core.P;C.OF.__proto__=A.Core.P;C.ZI.__proto__=A.acl.Go;C.El.__proto__=A.Core.P;
C.X9.__proto__=C.AB;C.AVc.__proto__=C.AB;C.AvB.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fm.__proto__=C.Hj;C.Ay.__proto__=A.Core.P;C.Ch.__proto__=C.AB;C.Aq0.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADx.__proto__=C.AmZ;C.AG5.
__proto__=C.DS;C.Cp.__proto__=C.O1;C.Dt.__proto__=C.Eh;C.Iu.__proto__=C.Dt;C.BU.
__proto__=C.Dt;C.SY.__proto__=C.Dt;C.OP.__proto__=C.Cn;C.Rf.__proto__=C.AC;C.AVr.
__proto__=C.A$;C.Gg.__proto__=A.Core.P;C.A$.__proto__=C.Cp;C.GK.__proto__=C.AB;C.
ACk.__proto__=C.A$;C.Ad_.__proto__=C.AB;C.Mu.__proto__=C.OF;C.AVm.__proto__=C.AB;
C.AqZ.__proto__=C.ADx;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AU3.__proto__=C.Act;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asv.__proto__=A.Core.P;C.AGR.__proto__=C.Dt;C.CG.__proto__=A.Core.P;C.
AjO.__proto__=C.YC;C.Amu.__proto__=C.Re;C.Ahy.__proto__=A.Core.P;C.Ek.__proto__=
C.AB;C.AUd.__proto__=C.AB;C.My.__proto__=C.Cp;C.Anh.__proto__=C.Cp;C.OverlayMenu.
__proto__=C.Abp;C.APR.__proto__=C.OverlayMenu;C.GL.__proto__=A.Core.P;C.Abp.__proto__=
A.Core.P;C.AU8.__proto__=A.acl.Aem;C.AmZ.__proto__=C.BR;C.ADy.__proto__=C.AmZ;C.
Kp.__proto__=C.AC;C.AU5.__proto__=C.Dt;C.AGs.__proto__=C.AB;C.H2.__proto__=C.AB;
C.WC.__proto__=C.Aru;C.IP.__proto__=C.ADy;C.I_.__proto__=C.AB;C.AMn.__proto__=C.
AGs;C.AMj.__proto__=C.GK;C.AND.__proto__=C.GK;C.Aeq.__proto__=C.Cp;C.QF.__proto__=
C.Aeq;C.APE.__proto__=C.BR;C.AjP.__proto__=C.BR;C.DH.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gh.__proto__=C.AC;C.Afo.__proto__=C.BU;C.AUu.__proto__=C.AB;C.AbZ.__proto__=
C.Cp;C.Uf.__proto__=C.Cp;C.ANQ.__proto__=C.Ch;C.AVt.__proto__=C.Ch;C.AN3.__proto__=
C.Ch;C.AUG.__proto__=C.Ch;C.W_.__proto__=A.Core.P;C.QY.__proto__=C.Fm;C.D3.__proto__=
A.Core.P;C.Ub.__proto__=C.AB;C.AV4.__proto__=C.GK;C.AMo.__proto__=C.Ax6;C.AVO.__proto__=
C.Ch;C.AeQ.__proto__=C.AC;C.Ax6.__proto__=C.AB;C.AWb.__proto__=C.Ch;C.AU4.__proto__=
C.Act;C.ABQ.__proto__=A.Graphics.HA;C.Aqd.__proto__=C.AB;C.ARU.__proto__=A.Core.
P;C.Fq.__proto__=C.OverlayMenu;C.Aa0.__proto__=C.BU;C.Ajh.__proto__=C.Cp;C.AL7.__proto__=
C.Fq;C.Cn.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMb.__proto__=C.VE;C.AMc.
__proto__=C.Fq;C.Sm.__proto__=C.Uf;C.AMU.__proto__=C.VE;C.Ws.__proto__=C.Fm;C.VB.
__proto__=A.Core.P;C.KB.__proto__=A.Core.P;C.ASg.__proto__=C.H2;C.AUx.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cn;C.ANE.__proto__=C.Amu;C.Hj.__proto__=A.
Core.P;C.AV6.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cn;C.Aa_.
__proto__=C.Gh;C.AxY.__proto__=C.ABQ;C.AT_.__proto__=C.OverlayMenu;C.AOI.__proto__=
A.Core.P;C.N9.__proto__=A.Core.P;C.AT$.__proto__=A.Core.P;C.AU7.__proto__=A.acl.
Aem;C.AkR.__proto__=C.Iu;C.Amw.__proto__=C.OverlayMenu;C.ACn.__proto__=C.A$;C.YD.
__proto__=C.AjP;C.AqI.__proto__=C.H2;C.Acs.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuO.__proto__=C.AB;C.AU6.__proto__=C.Iu;C.AMl.__proto__=C.AB;C.
Aru.__proto__=C.H2;C.AHp.__proto__=A.Core.P;C.AV9.__proto__=A.Core.P;C.Eh.__proto__=
C.Cp;C.AeS.__proto__=C.Eh;C.Av2.__proto__=C.AeS;C.SetTransponderScreen.__proto__=
C.Ra;C.ADG.__proto__=C.EB;C.AHt.__proto__=C.A$;C.WeightListScreen.__proto__=C.AB;
C.Mp.__proto__=C.Ra;C.AL5.__proto__=C.Mp;C.ManualActionScanScreen.__proto__=C.Mp;
C.AL6.__proto__=A.Core.P;C.API.__proto__=C.De;C.ADE.__proto__=C.De;C.T1.__proto__=
C.De;C.APK.__proto__=C.De;C.ANi.__proto__=C.A$;C.Nb.__proto__=C.A$;C.ANg.__proto__=
C.A$;C.Jx.__proto__=A.Core.P;C.ANf.__proto__=C.A$;C.AmY.__proto__=C.TM;C.AGi.__proto__=
C.Axr;C.AkD.__proto__=C.Axr;C.ZH.__proto__=C.AkD;C.ANM.__proto__=C.O1;C.O1.__proto__=
C.Hj;C.APN.__proto__=C.EB;C.DT.__proto__=A.Core.P;C.ANc.__proto__=C.Ajz;C.ADA.__proto__=
C.T2;C.Ko.__proto__=A.Core.P;C.AmG.__proto__=C.My;C.AO5.__proto__=C.Ku;C.AutoRegistrationMode.
__proto__=C.AC;C.APO.__proto__=C.EB;C.TG.__proto__=C.AB;C.D_.__proto__=A.Core.P;
C.AMz.__proto__=C.R5;C.AMN.__proto__=C.Aa7;C.AMI.__proto__=C.Aa7;C.AUw.__proto__=
C.A$;C.APM.__proto__=C.EB;C.AMC.__proto__=C.Aa7;C.IK.__proto__=C.I9;C.RZ.__proto__=
C.Fy;C.R3.__proto__=C.Fy;C.TF.__proto__=C.JR;C.QD.__proto__=C.Fy;C.TE.__proto__=
C.JR;C.AMk.__proto__=C.Aqd;C.ARf.__proto__=C.Ch;C.Aa7.__proto__=C.D_;C.Kn.__proto__=
C.Cn;C.ARQ.__proto__=C.Ch;C.AMx.__proto__=C.Lc;C.AMy.__proto__=C.D_;C.AMv.__proto__=
C.Lc;C.AMw.__proto__=C.Lc;C.WX.__proto__=C.Eh;C.AU1.__proto__=C.WX;C.R4.__proto__=
C.Fy;C.APD.__proto__=C.IP;C.ANF.__proto__=C.AB;C.ANm.__proto__=C.Ad_;C.AMi.__proto__=
C.I_;C.AV3.__proto__=C.I_;C.AO7.__proto__=C.Ku;C.APF.__proto__=C.Ku;C.APJ.__proto__=
C.T2;C.ANh.__proto__=C.Ajz;C.T2.__proto__=C.De;C.Aqt.__proto__=A.acv.ACx;C.Ajz.__proto__=
C.A$;C.DS.__proto__=A.Core.P;C.AM5.__proto__=C.DS;C.O6.__proto__=C.DS;C.AqX.__proto__=
A.Core.P;C.AME.__proto__=C.Gg;C.AUA.__proto__=A.Core.P;C.Lc.__proto__=C.D_;C.ANN.
__proto__=C.Ch;C.Au_.__proto__=C.Cp;C.ADu.__proto__=C.BR;C.ADv.__proto__=C.BR;C.
Fy.__proto__=C.JR;C.AOL.__proto__=C.GK;C.AOK.__proto__=C.I_;C.APj.__proto__=C.Ku;
C.ADC.__proto__=C.De;C.ACj.__proto__=C.A$;C.AUv.__proto__=C.Ahy;C.FactoryResetScope.
__proto__=C.Cn;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASs.
__proto__=C.Mo;C.ASr.__proto__=C.I_;C.ADw.__proto__=C.Ku;C.AB3.__proto__=C.Gh;C.
AL_.__proto__=C.Fq;C.AMm.__proto__=C.AuO;C.NewAnimalSetTransponderScreen.__proto__=
C.AsA;C.B6.__proto__=C.AC;C.O5.__proto__=A.Core.P;C.R0.__proto__=C.Fy;C.R1.__proto__=
C.Fy;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR1.__proto__=C.OverlayMenu;
C.VZ.__proto__=C.Uf;C.Av1.__proto__=C.Cp;C.AnimalSingleInfoScreen.__proto__=C.TG;
C.AnimalMultiInfoScreen.__proto__=C.TG;C.AMB.__proto__=C.OverlayMenu;C.Jc.__proto__=
A.Core.P;C.AL9.__proto__=C.GK;C.AL8.__proto__=C.I_;C.APC.__proto__=C.IP;C.AsK.__proto__=
C.O5;C.Arc.__proto__=C.O5;C.Au6.__proto__=C.AC;C.AMt.__proto__=C.AC;C.AGQ.__proto__=
C.Eh;C.G5.__proto__=A.Core.P;C.ARi.__proto__=C.HM;C.AVT.__proto__=C.X9;C.ASc.__proto__=
C.WC;C.AD5.__proto__=C.Lj;C.HM.__proto__=C.G5;C.Lj.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvR.__proto__=C.HM;C.AUZ.__proto__=C.BU;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsA;C.ReasonOfLeaving.__proto__=C.AC;C.OY.__proto__=C.BU;C.AeV.__proto__=
C.Em;C.AR7.__proto__=C.Em;C.AR6.__proto__=C.Em;C.Em.__proto__=A.Core.P;C.Rb.__proto__=
C.Eh;C.ARj.__proto__=C.Lj;C.AvQ.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FA.
__proto__=C.AB;C.AOk.__proto__=C.AB;C.AOn.__proto__=C.FA;C.AOo.__proto__=C.FA;C.
AqL.__proto__=C.FA;C.AbA.__proto__=C.AjO;C.Ku.__proto__=C.AjO;C.Avz.__proto__=C.
AbA;C.APh.__proto__=C.AbA;C.APg.__proto__=C.AbA;C.APf.__proto__=C.BR;C.Aey.__proto__=
C.EB;C.AmO.__proto__=C.A$;C.Ajp.__proto__=C.IK;C.ACX.__proto__=A.Core.P;C.AkO.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVs.__proto__=C.Re;C.APi.__proto__=C.BR;C.De.__proto__=
C.EB;C.Kt.__proto__=C.BR;C.APb.__proto__=C.Kt;C.APd.__proto__=C.Kt;C.Yw.__proto__=
C.AmO;C.Agx.__proto__=C.Hj;C.AN9.__proto__=C.GK;C.AN8.__proto__=C.I_;C.APe.__proto__=
C.Ku;C.Abw.__proto__=C.Acs;C.AjG.__proto__=C.QF;C.ACd.__proto__=C.QF;C.APH.__proto__=
C.De;C.ANe.__proto__=C.A$;C.R2.__proto__=C.Fy;C.AMu.__proto__=C.Fy;C.AN1.__proto__=
C.Ek;C.AN2.__proto__=C.Ek;C.APc.__proto__=C.Kt;C.Np.__proto__=C.AbZ;C.ANX.__proto__=
C.Ek;C.AO9.__proto__=C.Kt;C.PR.__proto__=C.Cp;C.Sn.__proto__=C.AB;C.AOl.__proto__=
C.Sn;C.AOm.__proto__=C.Sn;C.AOp.__proto__=C.AqL;C.AOi.__proto__=C.FA;C.Aa6.__proto__=
C.IK;C.Pp.__proto__=C.IK;C.AMG.__proto__=C.Amw;C.ARO.__proto__=C.Ub;C.ARN.__proto__=
C.Ub;C.ASn.__proto__=C.Mo;C.ASm.__proto__=C.I_;C.APw.__proto__=C.Ku;C.AkL.__proto__=
C.GK;C.AUH.__proto__=C.I_;C.Aev.__proto__=C.YC;C.ACi.__proto__=C.A$;C.ADB.__proto__=
C.De;C.APy.__proto__=C.BR;C.Aa9.__proto__=C.NP;C.X1.__proto__=C.NP;C.R5.__proto__=
C.D_;C.X2.__proto__=C.R5;C.XZ.__proto__=C.IJ;C.Aa4.__proto__=C.IJ;C.XY.__proto__=
C.IJ;C.Aa3.__proto__=C.IJ;C.AMD.__proto__=C.AB;C.IJ.__proto__=C.I9;C.I9.__proto__=
C.Hj;C.NP.__proto__=C.Fy;C.Axq.__proto__=C.ZH;C.ANL.__proto__=C.AmG;C.Axs.__proto__=
C.ZH;C.AUl.__proto__=C.Ch;C.AUj.__proto__=C.Em;C.ARg.__proto__=C.Lj;C.AUk.__proto__=
C.Em;C.NewMenu.__proto__=C.AB;C.ASd.__proto__=C.H2;C.AMF.__proto__=C.Amw;C.AMV.__proto__=
C.VE;C.JR.__proto__=C.I9;C.APA.__proto__=C.YD;C.Abv.__proto__=C.Cn;C.APL.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mp;C.APz.__proto__=C.AqZ;C.Jl.__proto__=A.Core.
P;C.APv.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN_.__proto__=C.AqI;
C.UU.__proto__=C.Cn;C.UV.__proto__=C.UU;C.AcN.__proto__=C.UU;C.AdV.__proto__=C.AC;
C.AGP.__proto__=C.Eh;C.AN0.__proto__=C.Ek;C.APa.__proto__=C.Kt;C.ANY.__proto__=C.
Ek;C.AO_.__proto__=C.Kt;C.Aq1.__proto__=C.T1;C.APG.__proto__=C.T1;C.Aqu.__proto__=
C.Nb;C.ANd.__proto__=C.Nb;C.AR8.__proto__=C.AeV;C.YC.__proto__=C.BR;C.Act.__proto__=
C.BU;C.FM.__proto__=C.AC;C.AMJ.__proto__=C.FM;C.AMK.__proto__=C.FM;C.AMq.__proto__=
C.I_;C.TM.__proto__=C.BU;C.ASf.__proto__=C.AB;C.AsA.__proto__=C.SetTransponderScreen;
C.AD6.__proto__=C.HM;C.AsB.__proto__=C.OY;C.AxD.__proto__=C.OY;C.Acv.__proto__=C.
Cn;C.AWh.__proto__=C.Mo;C.AWg.__proto__=C.I_;C.ARk.__proto__=A.Core.P;C.ARh.__proto__=
C.HM;C.AC2.__proto__=C.Abw;C.L4.__proto__=A.Core.P;C.AUF.__proto__=C.Ch;C.AUE.__proto__=
C.Ch;C.AVJ.__proto__=C.Ch;C.Aft.__proto__=C.Cn;C.Ji.__proto__=A.acn.Ji;C.AVx.__proto__=
C.AB;C.AUn.__proto__=C.AkL;C.ADD.__proto__=C.De;C.AM3.__proto__=C.AkL;C.AO6.__proto__=
C.Aev;C.APx.__proto__=C.Aev;C.ACm.__proto__=C.A$;C.AUY.__proto__=C.SY;C.AU2.__proto__=
C.Rb;C.APu.__proto__=C.BR;C.ARZ.__proto__=C.Fq;C.ARY.__proto__=C.Fq;C.ARX.__proto__=
C.Fq;C.AMd.__proto__=C.Amv;C.AR3.__proto__=C.Uf;C.AM1.__proto__=C.OverlayMenu;C.
AEo.__proto__=C.AC;C.AG9.__proto__=C.O1;C.AHu.__proto__=C.Cn;C.AU0.__proto__=C.BU;
C.Wq.__proto__=C.Cn;C.ANW.__proto__=C.Ek;C.AO8.__proto__=C.Kt;C.ANZ.__proto__=C.
Ek;C.AO$.__proto__=C.Kt;C.Mo.__proto__=C.GK;C.AvX.__proto__=C.VE;C.ADF.__proto__=
C.De;C.ACl.__proto__=C.A$;C.APB.__proto__=C.AjP;C.AVM.__proto__=C.Ch;C.AVL.__proto__=
C.Cn;C.ANH.__proto__=C.B6;};C._ReInit=function(){var B;if((B=C.AxH._this))B._ReInit(
),C.AxH._ReInit.call(B);if((B=C.AxI._this))B._ReInit(),C.AxI._ReInit.call(B);if((
B=C.A5._this))B._ReInit(),C.A5._ReInit.call(B);if((B=C.Po._this))B._ReInit(),C.Po.
_ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(
B);if((B=C.Afi._this))B._ReInit(),C.Afi._ReInit.call(B);if((B=C.BS._this))B._ReInit(
),C.BS._ReInit.call(B);if((B=C.WO._this))B._ReInit(),C.WO._ReInit.call(B);if((B=
C.AsC._this))B._ReInit(),C.AsC._ReInit.call(B);if((B=C.AnV._this))B._ReInit(),C.
AnV._ReInit.call(B);if((B=C.DR._this))B._ReInit(),C.DR._ReInit.call(B);if((B=C.AuV.
_this))B._ReInit(),C.AuV._ReInit.call(B);if((B=C.Amr._this))B._ReInit(),C.Amr._ReInit.
call(B);if((B=C.Av7._this))B._ReInit(),C.Av7._ReInit.call(B);if((B=C.Av8._this))
B._ReInit(),C.Av8._ReInit.call(B);if((B=C.Ax8._this))B._ReInit(),C.Ax8._ReInit.call(
B);};C.DJ=function(D){var B;if((B=C.AxH._this)&&(B._cycle!=D))B._Done(C.AxH._this=
null);if((B=C.AxI._this)&&(B._cycle!=D))B._Done(C.AxI._this=null);if((B=C.A5._this
)&&(B._cycle!=D))B._Done(C.A5._this=null);if((B=C.Po._this)&&(B._cycle!=D))B._Done(
C.Po._this=null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions.
_this=null);if((B=C.Afi._this)&&(B._cycle!=D))B._Done(C.Afi._this=null);if((B=C.
BS._this)&&(B._cycle!=D))B._Done(C.BS._this=null);if((B=C.WO._this)&&(B._cycle!=
D))B._Done(C.WO._this=null);if((B=C.AsC._this)&&(B._cycle!=D))B._Done(C.AsC._this=
null);if((B=C.AnV._this)&&(B._cycle!=D))B._Done(C.AnV._this=null);if((B=C.DR._this
)&&(B._cycle!=D))B._Done(C.DR._this=null);if((B=C.AuV._this)&&(B._cycle!=D))B._Done(
C.AuV._this=null);if((B=C.Amr._this)&&(B._cycle!=D))B._Done(C.Amr._this=null);if((
B=C.Av7._this)&&(B._cycle!=D))B._Done(C.Av7._this=null);if((B=C.Av8._this)&&(B._cycle
!=D))B._Done(C.Av8._this=null);if((B=C.Ax8._this)&&(B._cycle!=D))B._Done(C.Ax8._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */