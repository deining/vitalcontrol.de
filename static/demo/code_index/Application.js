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
var Cg=[0,0,240,320];var BF=[0,0,240,40];var E7=[0,0,20,30];var Hr=[6,21,14,25];var
I1=[6,15,14,19];var Iw=[6,9,14,13];var O$=[209,7,229,37];var Qa=[0,40,240,320];var
Qb=[0,228,240,298];var CJ=" ";var Fd=[0,40,240,280];var LD=[0,40,232,280];var Qc=[
0,40,116,160];var J$=[114,40,230,160];var Oj=[0,160,116,280];var Qd=[116,160,232
,280];var MU=[0,280,116,400];var Ti=[116,280,232,400];var UZ=[0,400,116,520];var
Aad=[116,400,232,520];var Xe=[-1,520,115,640];var Ix=[232,40,240,280];var U0=[5,
40,235,120];var Aae=[120,140,210,230];var U1=[20,140,110,230];var Aaf=[0,0,116,120
];var Xf=[0,0,120,120];var Aag=[0,0,116,45];var Aah=[0,0,8,200];var U2=[0,0,8,20
];var Xg=[30,0,210,40];var Pa=[0,0,40,40];var Aai=[7,8,200,40];var Ol=[0,0,200,40
];var Rp=[6,1];var Xh="ERROR: Invalid value for ItemHighlighting";var Xi=[10,10,
40,30];var U3=[0,0,120,40];var Xj=[60,0,180,40];var Aaj=[120,0,240,40];var Xk=[0
,0,100,40];var U4=[83,0,157,40];var Xl=[140,0,240,40];var Xm=[0,0,20,40];var Xn=[
220,0,240,40];var Rq=[0,0,300,30];var Tj=[0,30,300,60];var Aak=[0,60,300,90];var
AfH=[0,90,300,120];var Aal=[0,100,300,110];var Xo=[0,50,300,60];var Aam=[0,30,300
,40];var Aan="*";var AhY=[40,40];var K4=[0,0,240,80];var Aao=[0,0,240,50];var LE=
"Cap";var AhZ=[0,40,40,80];var Alb=[200,40,240,80];var Om=[30,40,210,80];var Xp=
"--";var Aok="%d";var AfI="%m";var Ah0="%Y";var AcU=" (";var Aap=[0,0,232,80];var
Ayb="Date";var Ayc=[48,40,88,78];var Ayd=[39,40,79,80];var Aye=[80,44,87,77];var
Alc=".";var As2=[88,44,120,77];var Ayf=[120,44,127,77];var Ayg=[127,44,191,77];var
Pb=[0,0,80,40];var Rr="Text";var Ayh=[430,102,430,102];var U5=[0,0,240,240];var As3=[
232,0,240,240];var Ayi=[0,10,240,240];var Ayj="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ald=[0,80,240,280];var
Ayk="Unhandled option";var AfJ="Unhandled animal list action";var Aol="Animal list content not handled.";
var I2=[0,40,240,80];var Aom="Set Selected";var As4=" %%";var AcV=[0,180,240,220
];var As5=[82,127,167,150];var As6="Group";var As7=[77,91,167,124];var Aon=[0,0,
90,33];var As8=[4,4,18,29];var Ale=[20,4,34,29];var Ayl=[36,4,50,29];var Aym=[52
,4,66,29];var Ayn=[68,4,82,29];var As9="ERROR: Unhandled Device::SyncState";var Ayo=
":\n";var Pc="{1}";var Ayp="{2}";var AWm=[0,49,240,109];var AWn=[0,170,240,243];
var AWo=[0,110,240,170];var AWp=[20,243,220,268];var AHy=[30,8];var AHz="\u2265 ";
var AfK=[0,0,240,160];var Aoo=[0,0,0,0];var AWq=[0,0,240,66];var AHA=[10,0,76,66
];var Alf=[33,33];var AHB=[87,0,153,66];var AHC=[164,0,230,66];var AWr="No statistics available";
var AWs="in this environment.";var AHD=" fps";var AWt="CPU: - %%";var AcW=[0,0,240
,120];var AWu=[130,0,237,20];var AWv=[20,0,120,20];var AWw=[0,20,240,40];var AWx=[
40,20,100,40];var As_=[100,20,240,40];var AHE=[0,40,240,60];var AHF=[40,40,100,60
];var Ayq=[100,40,240,60];var AHG=[0,60,50,80];var Ayr=[100,60,240,80];var AWy=[
0,80,50,100];var AWz=[100,80,240,100];var AWA=[0,100,50,120];var AWB=[100,100,240
,120];var AHH=[5,5,15,15];var AWC="%H";var MV="%M";var Ays="Time";var AWD=[79,40
,119,78];var AWE=[125,40,164,80];var AWF=[86,40,126,80];var AWG=":";var AWH=[75,
40,115,80];var AHI=[0,0,240,150];var AWI=[60,0,155,40];var Ayt=[30,0,65,40];var AWJ=[
60,0,100,40];var As$=[88,0,128,40];var Ayu=[60,0,71,40];var AWK=[60,0,74,40];var
AHJ=[90,0,123,40];var AWL=[120,0,161,40];var AHK=[120,0,165,40];var AHL=[60,0,88
,40];var AHM=[60,0,95,40];var AWM="Did not expect iterator bigger than number of records";
var AHN=[20,0,240,20];var AWN=[0,38,240,40];var AWO=[0,0,8,4];var Rs=[0,0,240,280
];var U6=[0,280,240,320];var AWP="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWQ="]";var AWR="ERROR: Cannot find closing bracket \'}\' in text [";var AWS=
"] opened at index ";var AWT="#";var AWU="ERROR: Invalid parameter: {";var AWV="}";
var Ah1=[20,20];var AHO=[0,12];var AWW="ERROR: Not expected Application::FooterFocus, ";
var AWX="%M:%S";var AHP=[30,150,207,170];var AHQ=[20,70,217,194];var Ayv="Unhandled item.";
var Qe=[0,80,240,120];var AWY="Unhandled Overlay Menu ";var AWZ="Invalid bootloader message: ";
var AW0="Unknown USBState: ";var Ata="Invalid fader";var AW1=[2,4,32,40];var AW2=[
29,4,80,40];var AW3=[120,4,200,40];var AW4=[80,0,114,40];var AW5="-1";var AW6="< ";
var Atb=[0,0,232,40];var AW7=[22,40,180,80];var AW8=[2,40,22,80];var AW9=[23,40,
163,80];var AW_=[210,40,230,80];var AW$=[164,40,210,80];var AXa=[169,43,205,77];
var AXb="ERROR: No outlet assigned";var AXc="Unhandled screen";var AXd="ERROR: Cannot cache null screen.";
var AXe="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHR="Untreated Rating Method type!";var Alg="Unhandled animal type";var AXf=[
5,60,235,140];var AXg=[0,130,240,196];var AXh=[49,240,229,280];var Ayw="Implement in derived classes!";
var Alh="Implement in derived class";var Ali=[0,40,230,120];var Ayx=[0,120,230,200
];var Aop=[0,200,230,280];var Ah2=[0,280,230,360];var AXi=[0,360,230,440];var AHS=[
0,440,230,520];var Ayy=[230,40,238,280];var AHT="WARNING: Unhandled filter field: ";
var AfL="Should not happen.";var AHU="Invalid Boolean item";var Aaq=[0,120,240,160
];var Alj=[0,160,240,200];var Aoq=[0,200,240,240];var AXj=[1152,11,1392,51];var AXk=[
1152,51,1392,91];var AXl=[1152,91,1392,131];var AXm=[1152,131,1392,171];var AXn=[
1152,171,1392,211];var Atc=[0,240,240,280];var AHV=[10,0,240,40];var AHW=[190,0,
230,40];var AXo=[60,3,95,39];var AXp=[95,4,200,40];var AXq=[3,3];var AXr=[6,6];var
AXs=[59,5,197,35];var AXt=[59,2,200,38];var AXu=[3,2,43,42];var AXv=[0,17,43,40];
var AXw=[50,40];var AXx=[50,0];var AXy="Illegal shifting direction";var Ayz=[0,0
,160,30];var AHX=[0,0,25,30];var AHY=[27,0,52,30];var AHZ=[54,0,79,30];var AH0=[
81,0,106,30];var AH1=[108,0,133,30];var AH2=[135,0,160,30];var AXz="Internal queue error";
var AXA="ERROR: No corresponding Id ";var AXB=" found.";var AXC="ERROR: Error in range test";
var AXD=[120,67,210,157];var AXE=[0,40,240,70];var AXF=[20,67,110,157];var AyA=[
0,160,240,280];var AH3=[20,77,90,147];var AXG=[0,0,210,40];var AH4=[195,0,235,40
];var Ah3=[0,40,232,120];var U7=[0,120,232,200];var AXH=[0,40,232,200];var Aar=[
0,200,232,280];var AXI=[0,320,240,400];var AXJ=[0,120,53,200];var Alk=[0,280,232
,360];var AfM="%%";var AcX=[0,360,232,440];var Aor=[0,440,232,520];var AXK=[0,80
,207,120];var Pd=")";var AH5="/";var AH6=[5,0,88,30];var AXL=[88,0,240,30];var AH7=
"276000312345678";var AH8=[5,30,100,60];var AH9=[100,30,240,60];var AXM="Manufacturer";
var AXN="Country";var AXO=[5,60,240,90];var AXP="Niedersachsen";var AXQ=[5,90,145
,120];var AXR=[140,90,240,120];var AXS="Protocol";var AXT=[0,0,120,100];var AH_=[
0,40,116,120];var AXU=[40,80,92,107];var AH$=[0,0,50,23];var AIa="ERROR: Unhandled Device::MeasureState";
var AyB=[0,120,240,280];var AXV=[178,159,248,203];var AXW=[10,145,170,225];var AXX=[
0,61,240,101];var AXY=[0,0,40,23];var AXZ=[101,113,141,136];var AX0=[101,235,141
,258];var AX1=[69,288,101,313];var AX2=[0,40,240,200];var Aos=[0,200,240,280];var
Atd=[0,280,240,360];var AIb="\u2264 ";var AX3=[0,80,94,160];var AX4=[94,80,184,160
];var AX5=[184,80,240,160];var AX6=[197,105,231,139];var AX7=[105,101,173,127];var
AIc=[7,101,75,127];var AX8=[94,125,184,151];var AX9=[2,125,92,151];var AX_=[0,70
,240,101];var AX$=[0,106,240,280];var AYa=[30,40,240,70];var AYb=[0,40,30,70];var
AYc="\u278B";var AYd=[0,0,240,175];var AId=[0,0,232,175];var AYe=[232,0,240,175];
var AYf="Text Here !";var AYg=[200,0,240,40];var AIe="1";var AIf="2";var AIg="3";
var AIh="4";var AyC=[0,360,232,400];var AyD="ERROR: invalid item class.";var AyE=[
10,220,250,260];var AYh=[185,0,225,40];var Ate="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AIi="ERROR: Received more actions than expected!";var AIj=", ";var AYi=
"ERROR: Cannot set action at position=";var AYj=". Current elements:";var AYk=", max elements:";
var AYl="17";var AYm=[0,0,58,58];var AYn=[0,0,60,60];var AYo=[30,0,58,20];var AYp=[
7,6,25,24];var AYq=[30,60,130,160];var AYr=[0,0,28,20];var AYs=[4,3,40,24];var AYt=[
0,0,42,27];var AyF=[0,0,17,17];var AYu="Unknown direction of counting enum value: ";
var AYv="Unknown id generation method enum value: ";var AyG="Invalid animal id generation method: ";
var Atf="Unhandled popup id";var U8="0";var Atg=";";var AYw=[0,400,230,480];var AYx=[
5,120,235,200];var AYy=[0,640,230,760];var AIk=[0,0,300,200];var AYz=[20,40,220,
80];var AIl=[20,80,220,280];var AYA=[140,0,188,40];var AYB="ERROR: Row containing birth weight could not be loaded";
var Ath="ID";var AYC=[40,40,198,70];var AYD="Extra info: ";var AIm=" -";var AYE=[
0,0,230,120];var AYF=[0,0,230,40];var AYG=[0,80,230,120];var AYH="\xB0Brix";var AcY=[
0,320,230,400];var AYI=[0,410,230,490];var AYJ="ERROR: aNumberOfDays can not be < 0 ";
var AYK="{WEIGHTGAIN} ";var AYL="\xB1";var AIn="+";var AYM="{WEIGHTGAIN}";var AYN=
"{DAYS}";var AYO="ERROR: aString can not be null";var AYP=[166,70,240,114];var AYQ=[
0,60,160,120];var AYR=[30,0,240,60];var AIo=[1,6,29,54];var AYS=[30,60,240,120];
var AYT="Con";var AYU=[70,50,170,70];var AIp="Unhandled Device::NaisIdValidationResult: ";
var AIq="Unhandled PopupId";var AYV=[110,123,230,248];var AYW=[5,0,250,40];var AYX=[
102,0,186,40];var AYY=[153,0,240,40];var Rt="-";var Ati=[170,0,240,40];var AIr=[
220,0,320,30];var AIs=[200,20,300,50];var Aot=[180,0,180,40];var Aou=[170,0,170,
40];var AyH="Untreated state";var AYZ="ERROR: Animal id scanned in an unexpected state : ";
var AIt="ERROR: Null animal id scanned.";var AY0=[40,40,235,100];var AY1=[120,100
,210,190];var AY2=[20,100,110,190];var AY3=[0,40,40,100];var AY4="\u278A";var AY5=
"Action untreated";var AY6="ERROR: No corresponding ";var AY7=" action found!";var
AY8="Unhandled action: ";var AY9=[0,186,240,216];var AY_=[0,220,232,280];var AY$=[
5,190,235,270];var AZa=[232,60];var AZb=[0,2];var AZc=[58,58];var AZd="A";var AZe=[
56,0,156,40];var Aov=[156,0,240,40];var AIu=" 7 ";var AZf=[40,0,156,40];var AIv=
"/-1/-2";var AIw=[72,0,144,40];var AcZ="\n";var AIx="(";var AZg=[72,0,156,40];var
AIy="%y/%m";var AZh=[70,0,240,40];var AyI=[70,0,120,40];var AZi=[160,0,245,40];var
AZj="- ";var AyJ=" - ";var AZk="{parc}{clr3}";var AZl="{clr0}/^{clr2}";var AZm="{clr0}/^{clr1}";
var AIz=[0,0,85,40];var Aow="?";var AIA=[0,0,120,140];var AZn=[0,0,116,40];var AIB=[
15,0,100,40];var AIC=[110,0,200,40];var All=[0,0,34,34];var AZo=[129,0,157,40];var
Aox=[0,0,25,25];var AZp="\u2611";var AID="\u2610";var AIE=[5,0,72,40];var AZq=[150
,0,240,40];var AZr=[72,0,139,40];var AIF="Unvalid content class: ";var AZs=[0,320
,240,360];var AZt=[0,360,240,400];var AZu=[144,0,170,40];var AZv=[187,0,213,40];
var AZw=[207,10,233,50];var AZx=[247,20,273,60];var AZy=[140,0,150,100];var AZz=[
165,0,175,100];var AZA=[185,0,195,100];var AZB=[205,0,215,100];var AZC=[211,0,233
,40];var AZD=[189,0,211,40];var AZE=[167,0,189,40];var AZF=[145,0,167,40];var AIG=[
5,0,240,40];var Xq=[10,0,10,40];var AZG="= \u2211 ";var Atj=[125,0,240,40];var AZH=[
130,0,170,40];var AZI="\xD8 ";var AZJ=[100,10,116,36];var AZK=[117,10,133,36];var
AZL=[135,10,151,36];var AZM="Implement in derieved class";var Atk=[0,80,240,240];
var Atl=[0,120,232,160];var Atm=[0,160,232,200];var Atn=[0,200,232,240];var AyK=[
0,240,232,280];var Aoy=[0,320,232,360];var AZN=[-61,360,232,400];var AZO=[0,400,
32,440];var AZP=[0,100];var AZQ=[0,40,240,240];var AZR=[0,50000];var AZS=[0,500];
var AZT=[0,0,240,105];var AZU=[0,105,240,210];var AIH=[0,40,240,81];var AZV=[0,81
,240,122];var AZW=[0,122,240,163];var AZX=[0,163,240,205];var AZY=[0,205,240,240
];var AZZ=[0,200];var AZ0=[0,40,240,73];var AyL=[0,0,30,40];var AZ1=[0,40,30,80];
var Ato=[60,40];var Alm=[60,0];var AZ2=[10,0,40,40];var AZ3=[0,190,240,260];var AZ4=[
0,130,240,190];var AII=[40,40,200,130];var AZ5=[90,230,170,253];var AZ6=[80,190,
170,223];var AZ7=[0,130,240,180];var AZ8=[0,250,240,280];var AZ9=[129,0,156,40];
var AZ_=[72,0,100,40];var AZ$=[100,0,129,40];var A0a=[78,8,103,33];var AIJ=[0,0,
300,120];var A0b=[1,-1];var A0c=[20,40,240,120];var A0d=[20,0,240,40];var AIK=[0
,118,240,120];var A0e=[0,20,130,40];var AIL=[130,20,240,40];var A0f=[0,0,10,20];
var AIM="\u2191";var AIN=[230,0,240,20];var Atp=[0,40,232,80];var A0g=[0,80,232,
160];var A0h=[0,160,230,240];var Atq=" p. p.";var AyM="Unknown animal type";var AyN=[
80,0,140,40];var A0i=[50,0,172,40];var A0j=[172,0,240,40];var A0k=[0,90,240,92];
var AIO="Unhandled menu item";var AIP=[0,0,50,30];var Aln=[0,0,30,30];var A0l="No AnimalActionTemperatureScreen found!";
var A0m="840003123456789";var A0n=[40,0,230,40];var A0o=[50,10,230,30];var AyO="No AnimalMultiInfoScreen found!";
var Atr=[0,0,25,40];var AIQ="/^";var AIR="?/?";var Bry=[100,4,180,40];var Brz=[65
,0,99,40];var BrA=[165,0,200,40];var BaS=[0,0,60,40];var BaT="9999/^9999";var BrB=
"Invalid index: ";var BrC="Unknown AnimalIdGenerationMethod: ";var BrD="Invalid gender: ";
var Ats="Invalid input state: ";var BrE="Unhandled AnimalIdGenerationMethod";var
BrF=[42,35,67,75];var BrG=[5,35,39,75];var BrH=[70,40,228,70];var BrI="Invalid direction for setting focus";
var Ah4="Invalid index";var BrJ="Unvalid direction";var BrK=[0,0,42,30];var BaU=[
22,0,42,30];var BrL=[20,0,40,30];var BrM=[0,0,158,30];var BaV=[32,0,62,30];var BaW=[
64,0,94,30];var BaX=[96,0,126,30];var BrN=[128,0,158,30];var BrO=" %% ";var BrP=[
0,70,240,220];var BrQ=[0,237,240,307];var BaY="\n44 %% done";var BrR=[0,0,166,30
];var AIS=[0,0,12,30];var AyP=[14,0,26,30];var A0p=[28,0,40,30];var A0q=[42,0,54
,30];var A0r=[56,0,68,30];var A0s=[70,0,82,30];var A0t=[84,0,96,30];var A0u=[98,
0,110,30];var BaZ=[112,0,124,30];var A0v=[126,0,138,30];var BrS=[140,0,152,30];var
BrT=[154,0,166,30];var Ba0=[20,0,46,30];var BrU="\u2642";var BrV="{fnt3}\u2642{fnt1}";
var BrW="\u2640";var BrX="{fnt3}\u2640{fnt1}";var BrY="{parc}";var BrZ=[30,30,210
,80];var Br0="Implement in derieved class!";var Br1=[60,4,226,34];var Ba1=[30,4,
58,34];var Ba2=[4,0,27,40];var Br2=[116,4,228,34];var Br3=[60,4,86,34];var Br4=[
88,4,114,34];var Aoz="Implement in derived class!";var Ba3="Implement in derived class.";
var Br5="Invalid nais id view: ";var Br6=[0,35,240,75];var Br7=[0,0,110,30];var Br8=[
0,0,26,30];var Br9="100";var A0w="\n\n";var Br_=[240,240];var Br$=[0,240];var Bsa=
"Unknown rated attribute: ";var Bsb=[120,80,240,280];var Bsc=[0,80,120,280];var AIT=
" %% (";var AyQ=" \xB1 ";var AyR=" (n = ";var A0x=[0,80,232,120];var Bsd=[0,242,
232,282];var A0y=[0,280,232,320];var Bse=[35,0,200,40];var Bsf=[1,0,31,40];var Bsg=[
32,40];var Bsh=[32,0];var Bsi=[3,0,83,40];var Ba4=[180,0,240,40];var Bsj=[120,0,
180,40];var Bsk=[65,0,125,40];var Bsl=[0,0,120,200];var Bsm=[0,40,120,150];var Ba5=[
15,160,60,190];var Ba6=[60,160,105,190];var Bsn=[0,65,240,135];var Bso=[10,112,170
,192];var Bsp=[178,129,248,173];var Bsq=[0,40,240,110];var Bsr=[10,98,170,178];var
Bss=[178,112,248,156];var Bst=[85,190,160,265];var Bsu=[89,194,155,260];var Bsv=[
26,190,111,250];var Bsw=[125,181,225,211];var Bsx=[100,220,183,250];var Bsy="38.7";
var Bsz=[180,220,225,250];var BsA="\xB0C";var BsB=[0,99,240,178];var BsC=[100,280
,140,320];var BsD=[0,26,240,105];var Ba7=[30,40];var Ba8=[30,0];var BsE=[149,0,200
,40];var BsF=[145,40];var BsG=[145,0];var BsH=[38,0,88,40];var A0z=[0,0,35,40];var
BsI=[0,0,50,40];var BsJ=[40,0,200,40];var BsK=[95,0,145,40];var BsL=[65,5,223,35
];var A0A=[0,0,15,40];var BsM=[72,0,140,40];var Ba9="\n(";var BsN="%y/%m/%d";var
BsO="%y ";var BsP=" %m ";var BsQ=" %d ";var BsR="20";var BsS=[225,0,240,40];var BsT=[
0,400,232,440];var BsU=[0,440,232,480];var BsV=[0,480,232,520];var BsW=[0,520,232
,560];var BsX=[0,560,232,600];var BsY=[0,598,232,638];var BsZ=[5,0,215,40];var Bs0=[
215,8,240,33];var Bs1="Implement in dervied class.";var Bs2="ERROR: Unhandled temperature unit: ";
var AIU="ERROR: Unhandled mass unit: ";var Bs3=[-1,160,115,280];var Bs4=[114,160
,230,280];var A0B=[116,40,232,160];var AyS="Unknown weight class index: ";var Bs5=
"< 35";var Bs6="35 - 40";var Bs7="40 - 45";var Bs8="45 - 50";var Bs9="\u2265 50";
var Bs_="< 80";var Bs$="80 - 90";var Bta="90 - 100";var Btb="100 - 110";var Btc=
"\u2265 110";var Ba_="Unknown mass unit";var Btd=[143,0,193,40];var Ba$=[192,0,240
,40];var Bte=[44,28,44,28];var Btf="0 %%";var Btg=[-1,40,115,160];var Bth=[117,40
,233,160];var Bti=[1,160,117,280];var Btj=[114,158,230,278];var Btk=[1,280,117,400
];var Btl=[30,0,155,40];var Bba="\u2620";var A0C=[380,150,380,190];var Bbb=[105,
0,155,50];var A0D=[190,1,240,41];var Btm=[72,0,108,40];var Btn=[108,0,180,40];var
Bto=[60,0,94,40];var Btp=[94,0,200,40];var Btq="Scroll direction not supported.";
var Btr=[44,0,207,40];var Bts=[207,0,240,40];var Btt="99";var Btu="Unknown birth type";
var Btv=[44,0,189,40];var Btw=[5,0,44,40];var Btx=[44,0,240,40];var Bty=[240,0,240
,40];var Btz="\u25C9";var Bbc="\u25CB";var AyT=[0,40,240,120];var A0E=[0,120,240
,200];var BtA=[75,4,215,34];var BtB=[47,4,73,34];var Bbd=[17,4,45,34];var BtC=[0
,0,138,30];var BtD=[47,4,215,34];var A0F="Unhandled MotherSelectionFilterMode: ";
var BtE="Read only!";var BtF="actions array too small to hold all actions";var BtG=[
120,40];var BtH=[120,0];var BtI=[5,0,115,40];var BtJ=[0,0,205,40];var BtK=[59,4,
170,34];var BtL=[59,1,173,37];var BtM=[175,1,205,37];var BtN=[0,0,37,40];var BtO=[
115,98,205,188];var BtP=[0,40,235,100];var BtQ=[2,200,240,280];var BtR=" 01234";
var BtS=[0,0];var BtT=[33,63];var BtU=[25,56];var BtV="Unknown transponder image type: ";
var AIV=[0,0,82,82];var BtW=[0,0,81,26];var BtX=[105,120,195,210];var BtY=[10,140
,100,230];var Bbe="Unhandled EartagNrAssignmentMode: ";var BtZ="Unhandled Gender";
var Bt0=[10,35,35,75];var Bt1=[44,40,202,70];var Bt2=[204,35,232,75];var Bt3="Unvalid FatoryResetScope";
var Bt4=[144,0,192,40];var Bt5=[144,0,240,40];var Bt6=[195,0,245,50];var Bt7=[120
,0,120,40];var Bt8=[140,0,240,30];var Bt9=[30,0,232,40];var Bt_=[60,0,160,40];var
Bt$=[160,0,200,40];var Bua=[150,17,200,40];var Bub=[155,40];var Buc=[155,0];var Bud=[
146,80,240,160];var Bue=[56,80,146,160];var Buf=[0,80,56,160];var Bug=[13,107,47
,141];var Buh=[74,109,104,139];var Bui=[50,100,130,150];var Buj=[55,112,145,140];
var Buk=[146,112,236,140];var Bul=[150,86,223,110];var Bum="Menu item for animal table field not found";
var Bbf=[0,360,240,440];var Bun=[0,440,240,520];var Buo=[0,520,230,600];var Bup=[
5,40,235,104];var Buq=[120,108,226,218];var Bur=[20,120,110,210];var Bus=[5,223,
235,280];var But=[0,0,64,30];var Buu=[44,0,64,30];var Buv=[185,5,225,35];var Buw=[
170,5,234,35];var Bbg=[0,80,240,200];var Bux="Error!";var Buy="Unhandled number of digits";
var Buz=[0,0,126,30];var BuA=[22,5,149,35];var BuB=[149,0,232,40];var Bbh=[5,20];
var BuC=[5,0];var BuD=[2,440,230,520];var BuE="Unhandled AnimalIdAutoGenerationMethod: ";
var BuF=[4,440,236,520];var BuG="Unhandled TransponderAssignmentIdChangeMethod: ";
var BuH="\n";var BuI="%";var BuJ=[0,0,160,120];var BuK=[2,2,157,117];var BuL=[50
,70];var BuM=[50,50];var BuN=[0,0,168,40];var BuO=[168,0,240,40];var BuP=[0,47,232
,77];var BuQ=[65,0,101,40];var BuR=[135,0,175,40];var BuS=[85,17,135,40];var BuT=[
125,17,175,40];var BuU=[40,0];var Bbi=[0,40,230,280];var BuV="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuW="ERROR: Received more animal table fields than expected!";
var BuX=[0,80,240,130];var BuY="Unhandled Device::MassDeregistrationCriterion: ";
var Bbj="Unhandled BackupError: ";var BuZ="Unhandled PopupId: ";var Bu0=[203,0,240
,40];var Bu1=[168,0,203,40];var Bu2=[35,0,152,40];var Bu3=[0,0,84,40];var Bu4=[84
,0,167,40];var Bu5="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMT={Device:null,A6E:null,GM:null,Init:function(aArg){},DriveCursorHitting:function(
Tl,BI,Ff){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GM._Init.call(this.
GM={I:this},0);this.__proto__=C.AMT;this.H(Cg);this.J(this.GM,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6E=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Ka=
this._variants();if(Ka){this.K={};Ka._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GM._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GM.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6E)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GM)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5K._variants();
},K:null,_className:"Application::Application"};C.AsB=[240,320];C.AB={Background:
null,Em:null,ADp:null,Aob:0,Init:function(aArg){A.pe([this,this.A1c],this);A.pe([
this,this.BfA],this);},LY:function(G){},A1c:function(s){this.LY(s);},CC:function(
G){},AIX:function(s){this.CC(s);},E4:function(G){},AyU:function(s){this.E4(s);},
Ds:function(E){if(this.ADp===E)return;this.ADp=E;A.pe([this,this.BfA],this);},BfA:
function(G){var B;if(!!this.ADp)this.Em.Ab$((C.BS.isPrototypeOf(B=A._NewObject(this.
ADp,0))?B:null));else this.Em.Ab$(null);},_Init:function(aArg){C.Abs._Init.call(
this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.Em._Init.call(this.
Em={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cg
);this.Background.L(A.jb.CV);this.Em.H(BF);this.Em.As(false);this.J(this.Background
,-1);this.J(this.Em,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abs;this.
Background._Done();this.Em._Done();C.Abs._Done.call(this);},_ReInit:function(){C.
Abs._ReInit.call(this);this.Background._ReInit();this.Em._ReInit();},_Mark:function(
D){var B;C.Abs._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WX={Im:null,Zx:function(E){var B;if(this.Im===E)return;if(!!this.Im)this.AqL(
this.Im,null,null,null,[B=this.Im,B.AyU],null,false);this.Im=E;if(!!this.Im)this.
AkM(this.Im,null,null,null,null,null,null,[B=this.Im,B.AIX],null,false);},AEL:function(
){return this.Im;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WX;this.H([0,0,C.AsB[0],C.AsB[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Im)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OH={Ve:null,Q:null,AnR:null,ZK:null,N1:null,OF:null,TM:null,TN:null,AGp:255,
Hg:function(G){var F;if(!!this.Q){this.A2L();var Adg=(F=this.Q,F[1].call(F[0]));
if(Adg>20)this.OF.L(A.jb.E2);else this.OF.L(A.jb.Gn);this.OF.L((this.OF.AR&0x00FFFFFF
)|(this.AlP(Adg,0,30)<<24));this.TM.L((this.TM.AR&0x00FFFFFF)|(this.AlP(Adg,31,60
)<<24));this.TN.L((this.TN.AR&0x00FFFFFF)|(this.AlP(Adg,61,100)<<24));}},A1a:function(
s){this.Hg(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A1a],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A1a],E,0);if(!!E)A.pe([this,
this.A1a],this);},A30:function(G){var F;if(!!this.AnR)this.ZK.As((F=this.AnR,F[1
].call(F[0])));else this.ZK.As(false);this.A_4(255);},A_X:function(E){if(A.aaZ(this.
AnR,E))return;if(!!this.AnR)A.z$([this,this.A30],this.AnR,0);this.AnR=E;if(!!E)A.
zX([this,this.A30],E,0);if(!!E)A.pe([this,this.A30],this);},A_4:function(E){if(this.
AGp===E)return;this.AGp=E;if(!!this.Ve)this.Ve.L((this.Ve.AR&0x00FFFFFF)|((E&0xFF
)<<24));},AlP:function(A1g,BcL,Bya){if(A1g<BcL)return 0;else if((A1g>=BcL)&&(A1g<
Bya))return this.AGp&0xFF;else return 255;},A2L:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Ve=this.TN;else if((F=this.Q,F[1].call(F[0]))>
30)this.Ve=this.TM;else this.Ve=this.OF;}else this.Ve=null;},BlY:function(){return this.
AGp;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZK._Init.call(this.ZK={
I:this},0);A.acg.Ap._Init.call(this.N1={I:this},0);A.acg.AK._Init.call(this.OF={
I:this},0);A.acg.AK._Init.call(this.TM={I:this},0);A.acg.AK._Init.call(this.TN={
I:this},0);this.__proto__=C.OH;this.H(E7);this.ZK.Fq(2000);this.N1.H(E7);this.N1.
L(A.jb.Text);this.OF.H(Hr);this.OF.L(A.jb.E2);this.TM.H(I1);this.TM.L(A.jb.E2);this.
TN.H(Iw);this.TN.L(A.jb.E2);this.J(this.N1,0);this.J(this.OF,0);this.J(this.TM,0
);this.J(this.TN,0);this.ZK.Q=[this,this.BlY,this.A_4];this.N1.Ax(A.aaL(A.ach.AM3
));},_Done:function(){this.__proto__=A.Core.P;this.ZK._Done();this.N1._Done();this.
OF._Done();this.TM._Done();this.TN._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZK._ReInit();this.N1._ReInit();this.OF._ReInit(
);this.TM._ReInit();this.TN._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ve)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZK={_Init:function(aArg){A.acl.Gp._Init.call(
this,aArg);this.__proto__=C.ZK;this.AkZ=true;this.B4=0;this.Cy=255;},_className:
"Application::PulseAnimation"};C.Em={GM:null,AQ:null,Background:null,OH:null,Bo:
null,Do:null,Lb:0,Avs:0,Avt:0,Ao5:0,LQ:false,KN:false,Qx:false,Aj:function(Ae){var
B;A.Core.P.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);
var GG=this.Bo.Bw;if(!Hf){this.Ao5=A.jb.CV;this.Lb=A.jb.Text;}else if(GG){this.Ao5=
this.Avs;this.Lb=this.Avt;}else if(Fv){this.Ao5=this.Avs;this.Lb=this.Avt;}else{
this.Ao5=A.jb.CV;this.Lb=A.jb.Text;}this.Background.L(this.Ao5);if(!!this.GM){this.
GM.WM(this.Ao5);this.GM.Dg(this.Lb);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;},Qw:function(
G){this.Am();A.pe(this.AQ,this);},AiS:function(G){if(this.Do.Acr)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AQ,this);this.Bo.As(false);}this.Bo.As(true);},Ab$:function(
E){if(this.GM===E)return;if(!!this.GM)this.HQ(this.GM);this.GM=E;if(!!this.GM)this.
J(this.GM,0);this.Ba(E);this.Am();},A_F:function(E){if(this.Avs===E)return;this.
Avs=E;this.Am();},A_G:function(E){if(this.Avt===E)return;this.Avt=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);C.OH._Init.call(this.OH={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BG._Init.call(this.Do={I:this},0);this.__proto__=C.Em;var B;this.
H(BF);this.Background.A1(0x3F);this.Background.H(BF);this.Background.L(A.jb.CV);
this.OH.H(O$);this.Lb=A.jb.Text;this.Bo.PZ(0);this.Bo.WN(50);this.Do.Filter=1;this.
Avs=A.jb.AV;this.Avt=A.jb.Bm;this.Ao5=A.jb.Text;this.J(this.Background,0);this.J(
this.OH,0);this.OH.Au([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV]);this.OH.
A_X([B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyW]);this.Bo.MN=[this,this.Qw];
this.Do.BH=[this,this.AiS];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OH._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OH._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X$={AeU:null,UJ:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeU={I:this},0);A.acg.Text._Init.call(this.UJ={I:
this},0);this.__proto__=C.X$;this.AeU.H(Qa);this.UJ.H(Qb);this.UJ.R(A.jV);this.UJ.
L(A.jb.Text);this.UJ.Z(false);this.J(this.AeU,0);this.J(this.UJ,0);this.AeU.Ax(null
);this.UJ.S(A.aaL(A.fl.EL));var Ka=this._variants();if(Ka){this.K={};Ka._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeU._Done();this.UJ._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeU._ReInit();this.UJ._ReInit();this.UJ.S(A.aaL(A.fl.
EL));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X$._variants();},K:null,_className:"Application::BootScreen"};C.AVg={AAP:function(
G){A._GetAutoObject(C.A5).Acg(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AVg;this.Background.L(0xFF000000);this.Em.Z(false);},_className:
"Application::SleepScreen"};C.AvF={DZ:null,Y:null,Yl:null,Ym:null,VS:null,Yc:null
,VT:null,Ya:null,Yf:null,TR:null,Ye:null,Yn:null,Ay:null,CQ:function(){this.DL(this
);},Init:function(aArg){var B;A.zX([this,this.DL],[B=A._GetAutoObject(A.Device.Device
),B.ArF,B.Att],0);A._GetAutoObject(A.Device.Helper).AkQ();this.Ba(this.VS);this.
N.Cu(A.aaL(A.ach.ADV));A.pe([this,this.DL],this);},Ba:function(E){var B;var A3z=
this.AV;C.AB.Ba.call(this,E);if((this.AV!==A3z)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ$=A._NewObject(A.acl.AGm,0);AJ$.Fq(250);AJ$.HP(1);AJ$.WQ(6);this.
Y.HJ(this.AV,true,AJ$,null);}},CC:function(G){this.A46(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asw();},Fi:function(G){
var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.
Ay.ML(-this.Y.Bs[1]);},Ik:function(G){var Cz=(C.Fn.isPrototypeOf(G)?G:null);if(!
Cz)return;if(Cz===this.VS)A._GetAutoObject(C.A5).Cc(35);else if(Cz===this.Yc)A._GetAutoObject(
C.A5).Cc(34);else if(Cz===this.Yf)A._GetAutoObject(C.A5).Cc(69);else if(Cz===this.
VT)A._GetAutoObject(C.A5).Cc(8);else if(Cz===this.Ya)A._GetAutoObject(C.A5).Cc(50
);else if(Cz===this.TR)A._GetAutoObject(C.A5).Cc(25);else if(Cz===this.Yl)A._GetAutoObject(
C.A5).Cc(77);else if(Cz===this.Ym)A._GetAutoObject(C.A5).Cc(70);else if(Cz===this.
Yn)A._GetAutoObject(C.A5).Cc(6);else if(Cz===this.Ye)A._GetAutoObject(C.A5).Cc(63
);},BBs:function(G){A._GetAutoObject(A.Device.Device).Ae8(!A._GetAutoObject(A.Device.
Device).AmW);},DL:function(G){if(A._GetAutoObject(A.Device.Device).AmW)this.N.Hz((
A.aaR(A.acf.A77)+CJ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hz((A.aaR(A.acf.
A77)+CJ)+A.aaR(A.acf.A8M).toLowerCase());},AdB:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A46:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).ME());this.VT.ZG(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fn._Init.call(this.Yl={I:this
},0);C.Fn._Init.call(this.Ym={I:this},0);C.Fn._Init.call(this.VS={I:this},0);C.Fn.
_Init.call(this.Yc={I:this},0);C.Q0._Init.call(this.VT={I:this},0);C.Fn._Init.call(
this.Ya={I:this},0);C.Fn._Init.call(this.Yf={I:this},0);C.Fn._Init.call(this.TR={
I:this},0);C.Fn._Init.call(this.Ye={I:this},0);C.Fn._Init.call(this.Yn={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvF;this.Background.L(A.
jb.CV);this.N.As(false);this.N.Z(true);this.Ds(C.Aq6);this.DZ.A1(0x3F);this.DZ.H(
Fd);this.DZ.L(A.jb.CL);this.Y.H(LD);this.Y.J3(9);this.Yl.H(Qc);this.Yl.Ai(true);
this.Yl.T(A.aaR(A.acf.G8));this.Ym.H(J$);this.Ym.Ai(true);this.Ym.T(A.aaR(A.acf.
A8t));this.VS.H(Oj);this.VS.Ai(true);this.VS.T(A.aaR(A.acf.VE));this.Yc.H(Qd);this.
Yc.Ai(true);this.Yc.T(A.aaR(A.acf.TE));this.VT.H(MU);this.VT.Ai(true);this.VT.T(
A.aaR(A.acf.APT));this.Ya.H(Ti);this.Ya.Ai(true);this.Ya.T(A.aaR(A.acf.Animal));
this.Yf.H(J$);this.Yf.Ai(true);this.Yf.T(A.aaR(A.acf.A7_));this.TR.H(UZ);this.TR.
As(true);this.TR.Ai(true);this.TR.Z(true);this.TR.T(A.aaR(A.acf.A6U));this.Ye.H(
Aad);this.Ye.Ai(true);this.Ye.T(A.aaR(A.acf.Device));this.Yn.H(Xe);this.Yn.Ai(true
);this.Yn.T(A.aaR(A.acf.Settings));this.Ay.H(Ix);this.J(this.DZ,0);this.J(this.Y
,0);this.J(this.Yl,0);this.J(this.Ym,0);this.J(this.VS,0);this.J(this.Yc,0);this.
J(this.VT,0);this.J(this.Ya,0);this.J(this.Yf,0);this.J(this.TR,0);this.J(this.Ye
,0);this.J(this.Yn,0);this.J(this.Ay,0);this.N.CF=[this,this.BBs];this.N.Cf=[this
,this.AdB];this.Y.Eo=[this,this.Fi];this.Yl.AQ=[this,this.Ik];this.Yl.DD(A.aaL(A.
ach.ADY));this.Ym.AQ=[this,this.Ik];this.Ym.DD(A.aaL(A.ach.AD1));this.VS.AQ=[this
,this.Ik];this.VS.DD(A.aaL(A.ach.APY));this.Yc.AQ=[this,this.Ik];this.Yc.DD(A.aaL(
A.ach.AP$));this.VT.AQ=[this,this.Ik];this.VT.DD(A.aaL(A.ach.AQy));this.Ya.AQ=[this
,this.Ik];this.Ya.DD(A.aaL(A.ach.AP2));this.Yf.AQ=[this,this.Ik];this.Yf.DD(A.aaL(
A.ach.AQI));this.TR.AQ=[this,this.Ik];this.TR.DD(A.aaL(A.ach.AQn));this.Ye.AQ=[this
,this.Ik];this.Ye.DD(A.aaL(A.ach.AQk));this.Yn.AQ=[this,this.Ik];this.Yn.DD(A.aaL(
A.ach.AQ2));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done(
);this.Y._Done();this.Yl._Done();this.Ym._Done();this.VS._Done();this.Yc._Done();
this.VT._Done();this.Ya._Done();this.Yf._Done();this.TR._Done();this.Ye._Done();
this.Yn._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Yl._ReInit();this.Ym.
_ReInit();this.VS._ReInit();this.Yc._ReInit();this.VT._ReInit();this.Ya._ReInit(
);this.Yf._ReInit();this.TR._ReInit();this.Ye._ReInit();this.Yn._ReInit();this.Ay.
_ReInit();this.Yl.T(A.aaR(A.acf.G8));this.Ym.T(A.aaR(A.acf.A8t));this.VS.T(A.aaR(
A.acf.VE));this.Yc.T(A.aaR(A.acf.TE));this.VT.T(A.aaR(A.acf.APT));this.Ya.T(A.aaR(
A.acf.Animal));this.Yf.T(A.aaR(A.acf.A7_));this.TR.T(A.aaR(A.acf.A6U));this.Ye.T(
A.aaR(A.acf.Device));this.Yn.T(A.aaR(A.acf.Settings));this.CQ();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Rc={Number:null,Jn:null,I0:null,TK:null,AsR:0,Init:function(aArg){var B;A.zX([
this,this.Bcn],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0S],0);A.pe([this,this.
Bcn],this);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.Aoc();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhN();},E4:function(G){A._GetAutoObject(A.Device.
Device).An5();},Al_:function(G){var F;this.Am();this.TK.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aet.As(true);if(!this.TK.Bw)(F=this.TK.Q,F[2].call(F[0],this.TK.
B4));},Bcn:function(s){this.Al_(s);},Aoc:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gn);break;case 3:this.Background.
L(A.jb.Ia);break;default:this.Background.L(A.jb.CL);}},AkF:function(E){if(this.AsR===
E)return;this.AsR=E;this.Jn.AkF(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jn._Init.call(this.Jn={I:this}
,0);A.acg.Ap._Init.call(this.I0={I:this},0);A.acl.Gp._Init.call(this.TK={I:this}
,0);this.__proto__=C.Rc;var B;this.Background.L(A.jb.CL);this.N.Z(false);this.Number.
H(U0);this.Number.Lx(true);this.Number.L(A.jb.Text);this.Jn.H(Aae);this.Jn.AkF(0
);this.I0.H(U1);this.I0.L(A.jb.AV);this.I0.Zz(true);this.TK.Fq(1750);this.TK.Ux(
750);this.TK.AkB(0);this.TK.As(true);this.TK.B4=3;this.J(this.Number,0);this.J(this.
Jn,0);this.J(this.I0,0);this.Number.S(A.aaL(A.fl.Af));this.I0.Ax(A.aaL(A.ach.AD0
));this.TK.Q=[B=this.I0,B.ASP,B.Cx];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jn._Done();this.I0._Done();this.TK._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jn._ReInit();this.I0._ReInit();this.TK._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fn={C_:null,ADM:null,AQ:null,Bo:null,Do:null,Background:
null,MD:null,OL:null,Q6:null,G_:null,A5$:true,LQ:false,KN:false,Qx:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hj.Bl.call(this,aSize);this.MD.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q6.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OL.H(this.Q6.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Aj:function(Ae){var B;C.Hj.Aj.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var GG=this.Bo.Bw;if(!Hf){this.Q6.L(A.jb.Am8);this.
G_.L(A.jb.CL);this.OL.Z(true);this.OL.L(A.jb.ARi);this.MD.Z(false);}else if(GG){
this.Q6.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OL.Z(false);this.MD.Z(true);}else if(
Fv){this.Q6.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OL.Z(false);this.MD.Z(true);}else{
this.Q6.L(A.jb.Text);this.G_.L(A.jb.Text);this.OL.Z(true);this.OL.L(A.jb.CV);this.
MD.Z(false);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;},Qw:function(G){this.Am();A.pe(this.
AQ,this);},AiS:function(G){if(this.Do.Acr)return;this.Am();if(this.Bo.Bw){A.pe(this.
AQ,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DM===E)return;
this.DM=E;this.G_.R(E);},DD:function(E){if(this.C_===E)return;this.C_=E;this.Q6.
Ax(E);this.OL.Ax(E);},Ab_:function(E){if(this.A5$===E)return;this.A5$=E;this.G_.
Z(E);},Acb:function(E){if(this.ADM===E)return;this.ADM=E;this.MD.Ax(E);this.MD.H(
A.abK(this.MD.M,E.FrameSize));},_Init:function(aArg){C.Hj._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BG._Init.call(this.Do={I:this
},0);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.MD={
I:this},0);A.acg.Ap._Init.call(this.OL={I:this},0);A.acg.Ap._Init.call(this.Q6={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fn;this.H(Aaf);this.
Bo.PZ(0);this.Bo.WN(50);this.Do.Filter=1;this.Background.H(Xf);this.Background.Z(
false);this.MD.A1(0x14);this.MD.L(A.jb.AV);this.MD.Cx(0);this.OL.L(A.jb.CV);this.
OL.Cx(1);this.G_.H(Aag);this.J(this.Background,0);this.J(this.MD,0);this.J(this.
OL,0);this.J(this.Q6,0);this.J(this.G_,0);this.Bo.MN=[this,this.Qw];this.Do.BH=[
this,this.AiS];this.MD.Ax(A.aaL(A.ach.N4));this.OL.Ax(A.aaL(A.ach.AvQ));this.Q6.
Ax(A.aaL(A.ach.AvQ));this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.
Cm(A.aaL(A.fl.Bg));this.ADM=A.aaL(A.ach.N4);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hj;this.Bo._Done();this.Do._Done();this.Background._Done();this.MD._Done(
);this.OL._Done();this.Q6._Done();this.G_._Done();C.Hj._Done.call(this);},_ReInit:
function(){C.Hj._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.MD._ReInit();this.OL._ReInit();this.Q6._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.Bg)
);},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axr:null,Background:null,O7:null,Asn:0,Ak8:10,AjF:100,AR:0,AoY:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O7.H([].concat(2,this.O7.M.slice(1,4)));this.O7.H(A.abN(this.O7.M,aSize[0]));},Aj:
function(Ae){var B;A.Core.P.Aj.call(this,Ae);var XL=this.Ak8<this.AjF;var AJJ=(B=
this.M)[3]-B[1];var A3m=10;var Auz=AJJ;var A43=0;if(10>AJJ)A3m=AJJ;if(this.Ak8<this.
AjF)Auz=((Auz*this.Ak8)/this.AjF)|0;if(Auz<A3m)Auz=A3m;if(this.Ak8<this.AjF)A43=((
this.BlW()*(AJJ-Auz))/(this.AjF-this.Ak8))|0;this.O7.H(A.abP(this.O7.M,A43));this.
O7.H([].concat(this.O7.M.slice(0,3),A43+Auz));this.O7.Z(XL);this.Background.Z(XL
);if(!!this.Axr&&(this.AoY!==XL))A.pe(this.Axr,this);this.AoY=XL;},BlW:function(
){var E=this.Asn;var HF=this.AjF-this.Ak8;if((HF>0)&&(E>HF))E=HF;if(HF<=0)E=0;return E;
},ML:function(E){if(E<0)E=0;if(this.Asn===E)return;this.Asn=E;this.Am();},MM:function(
E){if(E<0)E=0;if(this.Ak8===E)return;this.Ak8=E;this.Am();},MK:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AR===E
)return;this.AR=E;this.O7.L(E);},Bn4:function(E){if(A.aa0(this.Axr,E))return;this.
Axr=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(
this.Background={I:this},0);A.acg.AK._Init.call(this.O7={I:this},0);this.__proto__=
C.Ay;this.H(Aah);this.As(false);this.AR=A.jb.AV;this.Background.A1(0x0);this.Background.
H(U2);this.Background.L(A.jb.CV);this.O7.A1(0x0);this.O7.H(U2);this.O7.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O7,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O7._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O7._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axr)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Ch={Hk:null,Y:null,Ay:null,Ap:null,A7A:A.jV,Init:function(aArg){A.pe([this,this.
ABm],this);},DG:function(G){var B;C.AB.DG.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);this.ABm(this);},Al7:
function(G){if(!!this.N.CF)A.pe(this.N.CF,this);},ApP:function(G){if(!!this.N.Ce
)A.pe(this.N.Ce,this);},AAP:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fi:
function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[
3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);A.pe([this,this.BBQ],this);},ABm:function(G){
var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C4(A.
aaL(A.ach.YK));this.N.CF=[this,this.Ex];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JH.C0(255);this.N.ArU(G0.AqW);this.N.Cu(G0.AvN);this.N.Cf=G0.Amv;}else{this.N.
E6(A.jV);this.N.Cu(null);this.N.Cf=null;}if(!!G0&&!!G0.AgA){this.N.CS(G0.AxW);this.
N.GX.C0(G0.Axs);this.N.AnF(G0.AmY);this.N.C5(G0.Arc);this.N.Ce=G0.AgA;}else{this.
N.CS(A.jV);this.N.C5(null);this.N.Ce=null;}},Jh:function(E){if(this.A7A===E)return;
this.A7A=E;this.Hk.R(E);},Ex:function(G){A._GetAutoObject(C.A5).FA();},BBQ:function(
G){var B;var BAK=this.Ay.Background.Fp();var BeD=(BAK?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajg=X;
X=X.Ah;if(((Ajg.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null)
){var BeJ=(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null);BeJ.DE([BeD,BeJ.EE[1]]);}else
if(!!(A.Core.Ev.isPrototypeOf(Ajg)?Ajg:null)){var BgC=(A.Core.Ev.isPrototypeOf(Ajg
)?Ajg:null);BgC.H(A.abN(BgC.M,BeD));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hk={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Ch;this.N.Z(true);this.Hk.H(Xg);this.Hk.As(false);this.Hk.R(A.aaR(A.
acf.Settings));this.Hk.L(A.jb.Text);this.Y.H(Fd);this.Y.J3(1);this.Ay.H(Ix);this.
Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Hk,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hk.S(A.aaL(A.fl.Kt));this.Hk.AY(A.aaL(A.fl.HK));this.Y.
Eo=[this,this.Fi];this.Ap.Ax(A.aaL(A.ach.ADt));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hk._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hk._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hk.R(A.aaR(A.acf.Settings
));this.Hk.S(A.aaL(A.fl.Kt));this.Hk.AY(A.aaL(A.fl.HK));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq6={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhy],[B=
A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Dg:function(E){C.BS.Dg.call(this
,E);this.Text.L(E);},Bhy:function(G){this.Text.R(A._GetAutoObject(A.acj.KS).Bjw(
A._GetAutoObject(A.Device.Helper).Dr()));},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq6;this.Timer.WN(1);this.Timer.As(true);
this.Text.H(Aai);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MN=[this,this.
Bhy];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.Timer._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:function(
){C.BS._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BS={KY:0xFFFFFFFF,L1:0,Dg:function(E){if(
this.KY===E)return;this.KY=E;},WM:function(E){if(this.L1===E)return;this.L1=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BS;this.H(Ol
);},_className:"Application::HeaderContent"};C.N={V6:null,V7:null,V8:null,Ag6:null
,Ag7:null,Ag8:null,CF:null,Cf:null,Ce:null,Background:null,NU:null,Jl:null,JH:null
,GX:null,PF:null,IT:null,Lj:null,T6:null,T7:null,An7:A.jV,An8:A.jV,An9:A.jV,Ard:
0,Are:0,Arf:0,Aho:0,ZM:false,WU:false,Ast:false,AsH:false,AsG:false,Init:function(
aArg){},Aj:function(Ae){if(!!this.V6)this.Jl.S(this.V6);if(!!this.V7)this.JH.S(this.
V7);if(!!this.V8)this.GX.S(this.V8);switch(this.Aho){case 0:{this.NU.Z(false);this.
Jl.L(A.jb.Bm);this.JH.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Bm);this.IT.L(
A.jb.Bm);this.Lj.L(A.jb.Bm);}break;case 1:{if(!this.Ag6)this.NU.H(A.aaT(this.Jl.
ASH(),Rp));else this.NU.H(this.PF.Dd());this.NU.Z(true);this.Jl.L(A.jb.Text);this.
JH.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Text);this.IT.L(A.jb.Bm);this.Lj.
L(A.jb.Bm);}break;case 3:{if(!this.Ag8)this.NU.H(A.aaT(this.GX.ASH(),Rp));else this.
NU.H(this.Lj.Dd());this.NU.Z(true);this.Jl.L(A.jb.Bm);this.JH.L(A.jb.Bm);this.GX.
L(A.jb.Text);this.PF.L(A.jb.Bm);this.IT.L(A.jb.Bm);this.Lj.L(A.jb.Text);}break;case
2:{if(!this.Ag7)this.NU.H(A.aaT(this.JH.ASH(),Rp));else this.NU.H(this.IT.Dd());
this.NU.Z(true);this.Jl.L(A.jb.Bm);this.JH.L(A.jb.Text);this.GX.L(A.jb.Bm);this.
PF.L(A.jb.Bm);this.IT.L(A.jb.Text);this.Lj.L(A.jb.Bm);}break;default:{this.NU.Z(
false);A.ab5("%s",Xh);}}if(!!this.PF.Al){this.PF.Z(true);this.Jl.Z(false);}else{
this.PF.Z(false);this.Jl.Z(true);}if(this.An8.length<=0){this.IT.Z(true);this.JH.
Z(false);}else{this.IT.Z(false);this.JH.Z(true);}if(!!this.Lj.Al){this.Lj.Z(true
);this.GX.Z(false);}else{this.Lj.Z(false);this.GX.Z(true);}},Hz:function(E){if(this.
An7===E)return;this.An7=E;this.Jl.R(E);this.Am();},E6:function(E){if(this.An8===
E)return;this.An8=E;this.JH.R(E);this.Am();},CS:function(E){if(this.An9===E)return;
this.An9=E;this.GX.R(E);this.Am();},AFw:function(E){if(this.Aho===E)return;this.
Aho=E;this.Am();},AFo:function(E){if(this.V6===E)return;this.V6=E;this.Jl.S(E);this.
Am();},ArU:function(E){if(this.V7===E)return;this.V7=E;this.JH.S(E);this.Am();},
AnF:function(E){if(this.V8===E)return;this.V8=E;this.GX.S(E);this.Am();},A4d:function(
G){this.Am();},C4:function(E){if(this.Ag6===E)return;this.Ag6=E;this.PF.Ax(E);this.
Am();},Cu:function(E){if(this.Ag7===E)return;this.Ag7=E;this.IT.Ax(E);this.Am();
},C5:function(E){if(this.Ag8===E)return;this.Ag8=E;this.Lj.Ax(E);this.Am();},OX:
function(E){if(this.AsG===E)return;this.AsG=E;this.T6.Z(E);if(E)this.Jl.H([].concat(
this.T6.M[2],this.Jl.M.slice(1,4)));else this.Jl.H([].concat(0,this.Jl.M.slice(1
,4)));this.Am();},OY:function(E){if(this.AsH===E)return;this.AsH=E;this.T7.Z(E);
if(E)this.GX.H(A.abN(this.GX.M,this.T7.M[0]));else this.GX.H(A.abN(this.GX.M,this.
M[2]));this.Am();},Bnq:function(E){if(this.Ard===E)return;this.Ard=E;this.PF.Cx(
E);this.Am();},ATu:function(E){if(this.Are===E)return;this.Are=E;this.IT.Cx(E);this.
Am();},A_K:function(E){if(this.Arf===E)return;this.Arf=E;this.Lj.Cx(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.AK._Init.call(this.NU={I:this},0);C.CG._Init.call(this.Jl={I:this
},0);C.CG._Init.call(this.JH={I:this},0);C.CG._Init.call(this.GX={I:this},0);A.acg.
Ap._Init.call(this.PF={I:this},0);A.acg.Ap._Init.call(this.IT={I:this},0);A.acg.
Ap._Init.call(this.Lj={I:this},0);A.acg.Ap._Init.call(this.T6={I:this},0);A.acg.
Ap._Init.call(this.T7={I:this},0);this.__proto__=C.N;this.H(BF);this.Background.
A1(0x3F);this.Background.H(BF);this.Background.L(A.jb.Aeg);this.NU.H(Xi);this.NU.
L(A.jb.CV);this.NU.Z(false);this.Jl.A1(0x14);this.Jl.H(U3);this.Jl.A4(0x12);this.
JH.A1(0x14);this.JH.H(Xj);this.JH.A4(0x12);this.GX.H(Aaj);this.PF.H(Xk);this.IT.
H(U4);this.Lj.H(Xl);this.Lj.Z(false);this.T6.H(Xm);this.T6.Z(false);this.T7.H(Xn
);this.T7.Z(false);this.J(this.Background,0);this.J(this.NU,0);this.J(this.Jl,0);
this.J(this.JH,0);this.J(this.GX,0);this.J(this.PF,0);this.J(this.IT,0);this.J(this.
Lj,0);this.J(this.T6,0);this.J(this.T7,0);this.Jl.S(A.aaL(A.fl.Ak));this.Jl.AY(A.
aaL(A.fl.Bg));this.Jl.Q9([this,this.A4d]);this.JH.S(A.aaL(A.fl.Ak));this.JH.AY(A.
aaL(A.fl.Bg));this.JH.Q9([this,this.A4d]);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.
aaL(A.fl.Bg));this.GX.Q9([this,this.A4d]);this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.
fl.Ak);this.V8=A.aaL(A.fl.Ak);this.PF.Ax(null);this.IT.Ax(null);this.Lj.Ax(null);
this.T6.Ax(A.aaL(A.ach.AMW));this.T7.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NU._Done();this.
Jl._Done();this.JH._Done();this.GX._Done();this.PF._Done();this.IT._Done();this.
Lj._Done();this.T6._Done();this.T7._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NU._ReInit();this.Jl.
_ReInit();this.JH._ReInit();this.GX._ReInit();this.PF._ReInit();this.IT._ReInit(
);this.Lj._ReInit();this.T6._ReInit();this.T7._ReInit();this.Jl.S(A.aaL(A.fl.Ak)
);this.Jl.AY(A.aaL(A.fl.Bg));this.JH.S(A.aaL(A.fl.Ak));this.JH.AY(A.aaL(A.fl.Bg)
);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.aaL(A.fl.Bg));this.AFo(A.aaL(A.fl.Ak));
this.ArU(A.aaL(A.fl.Ak));this.AnF(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JH).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADx={Init:function(aArg){var B;A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkE],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper)
,B.A9H,B.AFU],0);A.pe([this,this.NC],this);},DY:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhJ)this.Aca(A._GetAutoObject(A.Device.Helper).AhJ.AO3());else this.
Aca(-1);if(!!A._GetAutoObject(A.Device.Helper).WW)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Aoa(A._GetAutoObject(A.Device.Helper).WW.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am4._Init.call(this,aArg);this.__proto__=C.ADx;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG6={Ez:null,Ek:null,
Ga:null,X9:null,TL:null,IM:null,IN:null,Init:function(aArg){},WT:function(G){var
B;C.DS.WT.call(this,G);var AKY=this.AzC(A._GetAutoObject(A.Device.Helper).UM.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALN=this.AzC(A._GetAutoObject(
A.Device.Helper).UN.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAz=
this.AzC(A._GetAutoObject(A.Device.Device).AcO);this.Ez.H(A.abP(this.Ez.M,0));this.
Ez.H([].concat(this.Ez.M.slice(0,3),((B=this.M)[3]-B[1])-AKY));this.IN.H(A.abO(this.
IN.M,this.Ez.M[3]-((((B=this.IN.M)[3]-B[1])/2)|0)));this.Ek.H(A.abP(this.Ek.M,this.
Ez.M[3]));this.Ek.H([].concat(this.Ek.M.slice(0,3),((B=this.M)[3]-B[1])-ALN));this.
IM.H(A.abO(this.IM.M,(this.Ek.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0))+2));this.Ga.
H(A.abP(this.Ga.M,this.Ek.M[3]));this.Ga.H([].concat(this.Ga.M.slice(0,3),((B=this.
M)[3]-B[1])-BAz));this.TL.H(A.abO(this.TL.M,this.Ga.M[3]-((((B=this.TL.M)[3]-B[1
])/2)|0)));this.X9.H(A.abP(this.X9.M,this.Ga.M[3]));this.X9.H([].concat(this.X9.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJW:function(AoU){return A._GetAutoObject(A.
Device.Converter).Ak3(AoU);},AKs:function(){return A._GetAutoObject(A.acj.Temperature
).AlQ();},_Init:function(aArg){C.DS._Init.call(this,aArg);A.acg.AK._Init.call(this.
Ez={I:this},0);A.acg.AK._Init.call(this.Ek={I:this},0);A.acg.AK._Init.call(this.
Ga={I:this},0);A.acg.AK._Init.call(this.X9={I:this},0);A.acg.AK._Init.call(this.
TL={I:this},0);A.acg.AK._Init.call(this.IM={I:this},0);A.acg.AK._Init.call(this.
IN={I:this},0);this.__proto__=C.AG6;this.Ez.A1(0xD);this.Ez.H(Rq);this.Ez.L(A.jb.
Gn);this.Ek.A1(0xD);this.Ek.H(Tj);this.Ek.L(A.jb.Ia);this.Ga.A1(0xD);this.Ga.H(Aak
);this.Ga.L(A.jb.E2);this.X9.A1(0xD);this.X9.H(AfH);this.X9.L(A.jb.AfA);this.TL.
A1(0xD);this.TL.H(Aal);this.TL.AwC(A.jb.AfA);this.TL.AwD(A.jb.AfA);this.TL.AwF(A.
jb.E2);this.TL.AwE(A.jb.E2);this.IM.A1(0xD);this.IM.H(Xo);this.IM.AwC(A.jb.E2);this.
IM.AwD(A.jb.E2);this.IM.AwF(A.jb.Ia);this.IM.AwE(A.jb.Ia);this.IN.A1(0xD);this.IN.
H(Aam);this.IN.AwC(A.jb.Ia);this.IN.AwD(A.jb.Ia);this.IN.AwF(A.jb.Gn);this.IN.AwE(
A.jb.Gn);this.J(this.Ez,-1);this.J(this.Ek,-1);this.J(this.Ga,-1);this.J(this.X9
,-1);this.J(this.TL,-1);this.J(this.IM,-1);this.J(this.IN,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DS;this.Ez._Done();this.Ek._Done();this.Ga._Done(
);this.X9._Done();this.TL._Done();this.IM._Done();this.IN._Done();C.DS._Done.call(
this);},_ReInit:function(){C.DS._ReInit.call(this);this.Ez._ReInit();this.Ek._ReInit(
);this.Ga._ReInit();this.X9._ReInit();this.TL._ReInit();this.IM._ReInit();this.IN.
_ReInit();},_Mark:function(D){var B;C.DS._Mark.call(this,D);if((B=this.Ez)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cp={Avu:null,AmY:null,AQu:null,Arc:null,AqW:null,AvN:null,AQ:null,AgA:null,Amv:
null,N:null,Bo:null,QW:null,AxW:A.jV,AVb:false,AGU:false,Apk:false,Axs:255,LQ:false
,KN:false,Qx:false,Aj:function(Ae){var B;C.O4.Aj.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);var GG=this.Bo.Bw;var FY=
A.jb.CL;var GZ=A.jb.Text;if(this.Hm){FY=A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CV);this.V.L(A.jb.CL);}else if(GG){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.Am8);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ
);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;this.Apk=IG;},Qw:function(G){this.Am();A.pe(
this.AQ,this);},Bxr:function(s){this.Qw(s);},H0:function(G){if(this.QW.Acr)return;
this.Am();if(this.Bo.Bw){A.pe(this.AQ,this);this.Bo.As(false);}this.Bo.As(true);
},Alo:function(s){this.H0(s);},Ab9:function(E){if(A.aa0(this.AgA,E))return;this.
AgA=E;},A$d:function(E){if(this.AxW===E)return;this.AxW=E;},ZC:function(E){if(this.
Avu===E)return;this.Avu=E;},ZD:function(E){if(this.AmY===E)return;this.AmY=E;},A_V:
function(E){if(this.Axs===E)return;this.Axs=E;},FT:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DM===E)return;this.DM=E;this.ALv();},A3L:
function(G){},BHk:function(s){this.A3L(s);},AkA:function(E){if(this.Arc===E)return;
this.Arc=E;},Lu:function(E){if(A.aa0(this.Amv,E))return;this.Amv=E;},Bnj:function(
E){if(this.AqW===E)return;this.AqW=E;},Kz:function(E){if(this.AvN===E)return;this.
AvN=E;},ZH:function(E){if(this.AGU===E)return;this.AGU=E;this.ALv();},ALv:function(
){var B;var M_=this.DM;if(this.AGU)M_=M_+A.aaR(A.acf.Colon);if(this.AVb)M_=M_+Aan;
this.V.R(M_);},ATS:function(E){if(this.AVb===E)return;this.AVb=E;this.ALv();},_Init:
function(aArg){C.O4._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BG._Init.call(this.QW={I:this},0);this.__proto__=C.Cp;this.Bo.PZ(0);
this.Bo.WN(50);this.Bo.As(false);this.QW.Filter=1;this.Bo.MN=[this,this.Bxr];this.
QW.BH=[this,this.Alo];this.Avu=A.aaL(A.fl.Ak);this.AmY=A.aaL(A.fl.Ak);this.AQu=A.
aaL(A.ach.E3);this.AqW=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O4;this.
Bo._Done();this.QW._Done();C.O4._Done.call(this);},_ReInit:function(){C.O4._ReInit.
call(this);this.Bo._ReInit();this.QW._ReInit();this.ZC(A.aaL(A.fl.Ak));this.ZD(A.
aaL(A.fl.Ak));this.Bnj(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O4._Mark.call(
this,D);if((B=this.Avu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Arc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqW)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgA)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dt={Q:null,Ang:null,Ani:null,Hy:null,H8:null,AM:0,Gt:0,Gg:100,FJ:0,Init:function(
aArg){},H0:function(G){this.FJ=1;C.Ei.H0.call(this,G);},Bl:function(aSize){C.Ei.
Bl.call(this,aSize);this.Hy.H([0,aSize[1]-40,40,aSize[1]]);this.H8.H([].concat(A.
abe(aSize,AhY),aSize));},Aj:function(Ae){var B;C.Ei.Aj.call(this,Ae);var Fv=((Ae&
0x20)===0x20);var GG=this.Bo.Bw;this.Hy.L(this.V.AR);this.H8.L(this.V.AR);this.Hy.
Z((Fv||GG)&&(this.AM>this.Gt));this.H8.Z((Fv||GG)&&(this.AM<this.Gg));if(this.FJ===
6)this.Hy.L(A.jb.E2);if(this.FJ===7)this.H8.L(A.jb.E2);},BfL:function(G){this.FJ=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay4],this);this.Bo.As(false);}this.Bo.
As(true);},Qw:function(G){if(this.FJ===6)A.pe([this,this.Ay4],this);if(this.FJ===
7)A.pe([this,this.Ay5],this);if(this.FJ===1)A.pe(this.AQ,this);this.FJ=0;this.Am(
);},C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},Ac2:function(
s){this.C6(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.Ac2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Ac2],E,0);if(!!E)A.pe([this,
this.Ac2],this);},BfM:function(G){this.FJ=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay5],this);this.Bo.As(false);}this.Bo.As(true);},Ki:function(G){this.FJ=0;}
,Ay5:function(s){this.Ki(s);},Kd:function(G){this.FJ=0;},Ay4:function(s){this.Kd(
s);},By:function(E){if(E<this.Gt)E=this.Gt;if(E>this.Gg)E=this.Gg;if(this.AM===E
)return;this.AM=E;this.Am();},BbN:function(Aq){this.By(Aq);},Gh:function(E){if(this.
Gt===E)return;this.Gt=E;this.Am();},EV:function(E){if(this.Gg===E)return;this.Gg=
E;this.Am();},Uo:function(){return this.AM;},_Init:function(aArg){C.Ei._Init.call(
this,aArg);A.Core.BG._Init.call(this.Ang={I:this},0);A.Core.BG._Init.call(this.Ani={
I:this},0);A.acg.Ap._Init.call(this.Hy={I:this},0);A.acg.Ap._Init.call(this.H8={
I:this},0);this.__proto__=C.Dt;this.H(K4);this.Ang.Filter=6;this.Ani.Filter=7;this.
Background.H(K4);this.V.H(Aao);this.V.R(LE);this.Hy.H(AhZ);this.H8.H(Alb);this.H8.
Cx(1);this.J(this.Hy,0);this.J(this.H8,0);this.Ang.BH=[this,this.BfL];this.Ang.D3=[
this,this.BfL];this.Ani.BH=[this,this.BfM];this.Ani.D3=[this,this.BfM];this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.Hy.Ax(A.aaL(A.ach.
Ajv));this.H8.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ei;this.Ang._Done();this.Ani._Done();this.Hy._Done();this.H8._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Ang._ReInit();this.
Ani._ReInit();this.Hy._ReInit();this.H8._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hy)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dv:function(){return-1;},C8:function(aIndex){return-1;},Ge:function(
aIndex){return A.jV;},D0:function(A9){return-1;},H7:function(){return-1;},Au:function(
E){this.Q=E;},Cd:function(Aq){this.Au(Aq);},ADa:function(aIndex){return null;},ADc:
function(aIndex){return 0;},Cb:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iv={AxN:null
,BX:null,AHi:A.jV,AVR:A.jV,Aj5:1,Init:function(aArg){},Aj:function(Ae){var B;var
F;C.Dt.Aj.call(this,Ae);if(!this.AxN){this.BX.L(this.V.AR);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BX.R(((F=this.Q,F[1].call(F[0])).toFixed()+CJ)+this.
AVR);else this.BX.R(((F=this.Q,F[1].call(F[0])).toFixed()+CJ)+this.AHi);}}else(B=
this.AxN)?B[1].call(B[0],this):null;},Ki:function(G){var F;var BQ=this.AM;C.Dt.Ki.
call(this,G);this.By(this.AM+this.Aj5);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kd:function(G){var F;var BQ=this.AM;C.
Dt.Kd.call(this,G);this.By(this.AM-this.Aj5);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IX:function(E){if(this.AHi===E)return;
this.AHi=E;this.Am();},Ji:function(E){if(this.AVR===E)return;this.AVR=E;this.Am(
);},ATv:function(E){if(this.Aj5===E)return;this.Aj5=E;},A$a:function(E){if(A.aa0(
this.AxN,E))return;this.AxN=E;},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.CG._Init.call(this.BX={I:this},0);this.__proto__=C.Iv;this.H(K4);this.BX.H(Om);
this.J(this.BX,-1);this.BX.S(A.aaL(A.fl.Af));this.BX.AY(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.BX._Done();C.Dt._Done.call(this
);},_ReInit:function(){C.Dt._ReInit.call(this);this.BX._ReInit();this.BX.S(A.aaL(
A.fl.Af));this.BX.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dt._Mark.call(this
,D);if((B=this.AxN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,DC:null,HO:null,CQ:function(){this.Aj(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Dt.Bl.call(this,aSize);this.DC.H([this.Hy.M[2]-10,this.Hy.M[1],this.
H8.M[0]+10,this.Hy.M[3]]);this.DC.AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.DC.
Gv,true,null,null);},Aj:function(Ae){var B;C.Dt.Aj.call(this,Ae);var Fv=((Ae&0x20
)===0x20);var GG=this.Bo.Bw;this.DC.AbO(0,this.DC.A0-1);this.Hy.Z(Fv||GG);this.H8.
Z(Fv||GG);},C6:function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.D0((F=this.
Q,F[1].call(F[0]))));},Ki:function(G){var F;var BQ=this.AM;C.Dt.Ki.call(this,G);
this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BQ=this.AM;
C.Dt.Kd.call(this,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},By:function(E){
var QC=0;if(E<this.Gt){E=this.Gg;QC=-this.DC.Wk*this.DC.A0;}if(E>this.Gg){E=this.
Gt;QC=this.DC.Wk;}C.Dt.By.call(this,E);if(!!QC)this.DC.Gi(QC);this.DC.GU(this.AM
);if(this.DC.Bks())this.DC.BpX(false,false);this.DC.HJ(this.DC.Gv,true,this.HO,null
);},Hn:function(G){var B;var Gk=this.DC.G6;var CA=(C.CG.isPrototypeOf(B=this.DC.
Cj)?B:null);if(!CA)return;CA.S(this.V.B9);CA.Axb(19);CA.AY(this.V.AmX);CA.Boc(19
);CA.Cm(this.V.AqV);CA.Bod(19);CA.L(this.V.AR);if(!!this.AC)CA.R(this.AC.Ge(Gk));
else CA.R(Xp);CA.H(A.abK(CA.M,[this.DC.Wk,(B=this.DC.M)[3]-B[1]]));},Bw5:function(
s){this.Hn(s);},CH:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gh(0);this.EV(this.AC.Dv()-1);this.DC.JF(this.AC.Dv());this.DC.AbO(0,this.DC.A0-
1);}},_Init:function(aArg){C.Dt._Init.call(this,aArg);A.Core.DC._Init.call(this.
DC={I:this},0);A.acl.Gp._Init.call(this.HO={I:this},0);this.__proto__=C.BW;this.
H(K4);this.DC.N_(C.CG);this.HO.WQ(23);this.HO.HP(1);this.HO.Fq(200);this.J(this.
DC,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.DC.Hn=[this,this.Bw5
];this.Init(aArg);},_Done:function(){this.__proto__=C.Dt;this.DC._Done();this.HO.
_Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.
DC._ReInit();this.HO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak)
);this.CQ();},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.S0={FP:null,OO:null,Dm:null,Av:null,JD:null,HN:null,Pz:null,V4:null,Q5:null,
Yv:null,P$:null,GA:null,Gz:null,Gb:0,A8:0,Asr:false,Bko:false,Init:function(aArg
){},Aj:function(Ae){C.Dt.Aj.call(this,Ae);this.Hy.Z(false);this.H8.Z(false);var At4=
A.jV;if(!!this.Dm){this.Pz.R(this.Av.Format(Aok));this.Q5.R(this.Av.Format(AfI));
this.P$.R(this.Av.Format(Ah0));}if(this.A8===1){this.HN.Z(true);this.HN.H(this.Pz.
M);this.HN.L(this.V.AR);this.Pz.L(this.Background.AR);this.Q5.L(this.V.AR);this.
P$.L(this.V.AR);At4=A.aaR(A.acf.A6u);}else if(this.A8===2){this.HN.Z(true);this.
HN.H(this.Q5.M);this.HN.L(this.V.AR);this.Pz.L(this.V.AR);this.Q5.L(this.Background.
AR);this.P$.L(this.V.AR);At4=A.aaR(A.acf.Hl);}else if(this.A8===3){this.HN.Z(true
);this.HN.H(this.P$.M);this.HN.L(this.V.AR);this.Pz.L(this.V.AR);this.Q5.L(this.
V.AR);this.P$.L(this.Background.AR);At4=A.aaR(A.acf.Year);}else{this.HN.Z(false);
this.Pz.L(this.V.AR);this.Yv.L(this.V.AR);this.Q5.L(this.V.AR);this.V4.L(this.V.
AR);this.P$.L(this.V.AR);}if(At4.length>0){if(this.AGU)this.V.R((((this.DM+AcU)+
At4)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DM+AcU)+
At4)+String.fromCharCode(0x29));}else this.ALv();},Qw:function(G){if(this.FJ===1
)A.pe([this,this.Vj],this);else if(this.FJ===4)A.pe([this,this.AiI],this);else if(
this.FJ===5)A.pe([this,this.Ait],this);C.Dt.Qw.call(this,G);},Ki:function(G){switch(
this.A8){case 0:C.Dt.Ki.call(this,G);break;case 3:break;default:this.AdD(this);}
},Kd:function(G){switch(this.A8){case 0:C.Dt.Kd.call(this,G);break;default:this.
Ais(this);}},AdF:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0
])));},Acd:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdF
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdF],E,0);if(!!E)A.pe([this,this.AdF
],this);},Uv:function(E){if(this.Gb===E)return;this.Gb=E;this.Av.Initialize(this.
Gb);this.Am();},AdD:function(G){this.FJ=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vj],this);this.Bo.As(false);}this.Bo.As(true);},Bcl:function(s){this.AdD(s);},Vj:
function(G){this.Ey(this.A8+1);},Al9:function(G){this.FJ=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiI],this);this.Bo.As(false);}this.Bo.As(true);},Al8:function(
G){this.FJ=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ait],this);this.Bo.As(false
);}this.Bo.As(true);},AiI:function(G){var B;var F;var BQ=this.Gb;switch(this.A8){
case 1:{if(this.Asr){var ABv=A._NewObject(A.Core.An_,0);ABv.Kq=1;if(this.Av.J(ABv
).J2()>A._GetAutoObject(A.Device.Helper).Dr())return;}if(this.Av.GN<this.Av.Zw()
)this.Av.Lw(this.Av.GN+1);}break;case 2:{if(this.Asr){var ABv=A._NewObject(A.Core.
An_,0);ABv.Kq=this.Av.Zw();if(this.Av.J(ABv).J2()>A._GetAutoObject(A.Device.Helper
).Dr())return;}this.Av.Uz(this.Av.Hl+1);if(this.Av.Zw()<this.Av.GN)this.Av.Lw(this.
Av.Zw());}break;case 3:{if(this.Asr){var A17=A._NewObject(A.Core.Bq,0);A17.Initialize(
this.Av.J2());A17.Year+=1;if(A17.J2()>A._GetAutoObject(A.Device.Helper).Dr())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Uv(((B=(this.Av.J2()|0))<0)?B+0x100000000:B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BQ=
this.Gb;if(this.A8===1)this.Av.Lw(this.Av.GN-1);if(this.A8===2){this.Av.Uz(this.
Av.Hl-1);if(this.Av.Zw()<this.Av.GN)this.Av.Lw(this.Av.Zw());}if(this.A8===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Uv(((B=(this.Av.J2()|
0))<0)?B+0x100000000:B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.Gb));A.abo(this.Dm,0);}},DL:function(G){var F;if(!this.N)return;switch(this.
A8){case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[
0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[
0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.AeH));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.Vj];}break;case 2:{(F=this.N,F[
1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.AeH));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.Vj];}break;case 3:{(F=this.N,F[
1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ce=null;}break;default:this.FP.AkR((F=this.N,F[1].call(F[
0])));}},AFS:function(E){if(this.Asr===E)return;this.Asr=E;},F_:function(G){this.
Ey(1);},He:function(G){this.Ey(0);},Ey:function(EO){var F;var AAD=this.A8;if(!this.
A8){this.FP.AjC((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.Gb){var BQ=this.Gb;
this.Uv(A._GetAutoObject(A.Device.Helper).Dr());if(this.Gb!==BQ){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);}}}this.A8=EO;this.Bko=true;if((
this.A8<0)||(this.A8>3))this.A8=0;this.DL(this);this.GA.Bw=!!this.A8;this.Gz.Bw=
!!this.A8;if((!!AAD&&!this.A8)&&!!this.OO)A.pe(this.OO,this);this.Am();},Ais:function(
G){if(this.A8>1)this.Ey(this.A8-1);},_Init:function(aArg){C.Dt._Init.call(this,aArg
);A.Core.Bq._Init.call(this.Av={I:this},0);A.Core.BG._Init.call(this.JD={I:this}
,0);A.acg.AK._Init.call(this.HN={I:this},0);A.acg.Text._Init.call(this.Pz={I:this
},0);A.acg.Text._Init.call(this.V4={I:this},0);A.acg.Text._Init.call(this.Q5={I:
this},0);A.acg.Text._Init.call(this.Yv={I:this},0);A.acg.Text._Init.call(this.P$={
I:this},0);A.Core.BG._Init.call(this.GA={I:this},0);A.Core.BG._Init.call(this.Gz={
I:this},0);this.__proto__=C.S0;this.H(Aap);this.V.R(Ayb);this.Hy.Z(false);this.H8.
Z(false);this.JD.Filter=1;this.HN.H(Ayc);this.HN.L(0x55FFFFFF);this.Pz.H(Ayd);this.
Pz.Jg(true);this.Pz.A4(0x14);this.V4.H(Aye);this.V4.Jg(true);this.V4.A4(0x14);this.
V4.R(Alc);this.Q5.H(As2);this.Q5.Jg(true);this.Yv.H(Ayf);this.Yv.Jg(true);this.Yv.
R(Alc);this.P$.H(Ayg);this.P$.Jg(true);this.P$.A4(0x11);this.GA.Filter=4;this.GA.
Bw=false;this.Gz.Filter=5;this.Gz.Bw=false;this.J(this.HN,0);this.J(this.Pz,0);this.
J(this.V4,0);this.J(this.Q5,0);this.J(this.Yv,0);this.J(this.P$,0);this.JD.BH=[this
,this.Bcl];this.Pz.S(A.aaL(A.fl.EL));this.V4.S(A.aaL(A.fl.EL));this.Q5.S(A.aaL(A.
fl.EL));this.Yv.S(A.aaL(A.fl.EL));this.P$.S(A.aaL(A.fl.EL));this.GA.BH=[this,this.
Al9];this.GA.D3=[this,this.AiI];this.Gz.BH=[this,this.Al8];this.Gz.D3=[this,this.
Ait];this.FP=A._NewObject(C.AeA,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dt;this.Av._Done();this.JD._Done();this.HN._Done();this.Pz._Done();this.V4._Done(
);this.Q5._Done();this.Yv._Done();this.P$._Done();this.GA._Done();this.Gz._Done(
);C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Av._ReInit(
);this.JD._ReInit();this.HN._ReInit();this.Pz._ReInit();this.V4._ReInit();this.Q5.
_ReInit();this.Yv._ReInit();this.P$._ReInit();this.GA._ReInit();this.Gz._ReInit(
);this.Pz.S(A.aaL(A.fl.EL));this.V4.S(A.aaL(A.fl.EL));this.Q5.S(A.aaL(A.fl.EL));
this.Yv.S(A.aaL(A.fl.EL));this.P$.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;C.
Dt._Mark.call(this,D);if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OR={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BeG],[B=A._GetAutoObject(A.Device.Device),B.A9p,B.BbV],0);
A.pe([this,this.BeG],this);},Dv:function(){return 27;},Ge:function(aIndex){return this.
LanguageToString.BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnI(E);},BeG:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OR;this.BJ.Set(0,0);this.BJ.Set(1,1);this.BJ.Set(2,5);this.BJ.
Set(3,3);this.BJ.Set(4,8);this.BJ.Set(5,9);this.BJ.Set(6,7);this.BJ.Set(7,6);this.
BJ.Set(8,10);this.BJ.Set(9,2);this.BJ.Set(10,11);this.BJ.Set(11,12);this.BJ.Set(
12,13);this.BJ.Set(13,14);this.BJ.Set(14,15);this.BJ.Set(15,16);this.BJ.Set(16,18
);this.BJ.Set(17,17);this.BJ.Set(18,4);this.BJ.Set(19,20);this.BJ.Set(20,21);this.
BJ.Set(21,23);this.BJ.Set(22,24);this.BJ.Set(23,22);this.BJ.Set(24,25);this.BJ.Set(
25,26);this.BJ.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;
this.LanguageToString._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Languages"};C.Rh={TemperatureUnitToString:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Ge:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axf(E);},Init:function(aArg
){var B;A.zX([this,this.Bhb],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0
);A.pe([this,this.Bhb],this);},Bhb:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Rh;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVv={AjA:null,
AcJ:null,KF:null,AP:null,A_:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KF.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A_.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AjA.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcJ.H(this.AjA.M);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.
KF.L(this.V.AR);},Init:function(aArg){},Ci:function(Ad){if(!this.AX)return;this.
Hs=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var ApZ=this.AX.CE(Ad,7);var Aui=this.
AX.Jb(Ad,9);this.T(A._GetAutoObject(A.acj.KS).AC8(AlH));this.KF.R(A._GetAutoObject(
A.acj.KS).A6$(AlH));this.AcJ.R(A._GetAutoObject(A.Device.Converter).Ak3(ApZ));this.
AcJ.L(A._GetAutoObject(A.acj.Assessment).XI(Aui));this.AjA.L(A._GetAutoObject(A.
acj.Assessment).Qt(Aui));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,
aArg);A.acg.AK._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.AcJ={I:
this},0);A.acg.Text._Init.call(this.KF={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.AVv;this.V.H(
Pb);this.AcJ.L(A.jb.Text);this.KF.R(Rr);this.KF.L(A.jb.Text);this.AP.L(A.jb.Bb);
this.A_.H(Ayh);this.A_.L(A.jb.Bb);this.J(this.AjA,0);this.J(this.AcJ,0);this.J(this.
KF,0);this.J(this.AP,0);this.J(this.A_,0);this.AcJ.S(A.aaL(A.fl.Af));this.KF.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AjA._Done(
);this.AcJ._Done();this.KF._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.AjA._ReInit();this.AcJ._ReInit(
);this.KF._ReInit();this.AP._ReInit();this.A_._ReInit();this.AcJ.S(A.aaL(A.fl.Af
));this.KF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gj={AX:null,AQ:null,Cr:null,AD:null,Afs:null,NX:null,KT:A.jV,Lo:null,AVT:true
,Hn:function(G){var B;var Gk=this.AD.G6;var Aa=(C.A$.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.ZA(this.AX);Aa.Ci(Gk);Aa.AQ=this.AQ;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GQ]));},N_:function(E){if(E===this.Lo)return;this.Lo=
E;this.AD.N_(E);},ZA:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ci],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ci],E,0);A.pe([this,this.Ci],this
);},Ci:function(G){if(this.AVT===false)return;if(!!this.AX){this.AD.JF(this.AX.B_(
));this.AD.AbO(0,this.AD.A0-1);}else this.AD.JF(0);if((this.AD.A0>0)&&(this.FQ()<
0))this.GU(0);if(this.FQ()>=this.AD.A0){this.GU(0);this.AD.Gi(0);}if(this.AD.A0<=
0){this.NX.Z(true);this.GU(-1);}else{this.NX.Z(false);this.ABV(null,null);}},Fi:
function(G){var B;this.Afs.MK(this.AD.GQ*this.AD.A0);this.Afs.MM((B=this.AD.M)[3
]-B[1]);this.Afs.ML(-this.AD.Bs);},DG:function(G){if(this.AD.A0>0){switch(this.Cr.
CP){case 4:if(this.FQ()>0)this.GU(this.FQ()-1);break;case 5:if(this.FQ()<(this.AD.
A0-1))this.GU(this.FQ()+1);break;default:this.Cr.Mz=true;}this.AD.HJ(this.FQ(),true
,null,null);}else if((this.Cr.CP!==4)&&(this.Cr.CP!==5))this.Cr.Mz=true;},ZE:function(
E){if(A.aa0(this.AQ,E))return;this.AQ=E;this.AD.AbO(0,this.AD.A0);},GU:function(
E){this.AD.GU(E);this.AD.HJ(E,true,null,null);},FQ:function(){return this.AD.Gv;
},Dl:function(E){if(this.KT===E)return;this.KT=E;this.NX.R(E);},ABV:function(Ac5
,E8){this.AD.ABV(Ac5,E8);},AT8:function(E){if(this.AVT===E)return;this.AVT=E;if(
E)A.pe([this,this.Ci],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BG._Init.call(this.Cr={I:this},0);A.Core.CM._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afs={I:this},0);A.acg.Text._Init.call(this.NX={I:this},
0);this.__proto__=C.Gj;this.H(U5);this.Lo=C.A$;this.Cr.Filter=147;this.AD.A1(0x3F
);this.AD.H(U5);this.AD.Afb(40);this.Afs.A1(0x3A);this.Afs.H(As3);this.NX.A1(0x3F
);this.NX.H(Ayi);this.NX.Ho(10);this.NX.Lx(true);this.NX.A4(0xA);this.NX.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afs,0);this.J(this.NX,0);this.Cr.BH=[this,this.
DG];this.Cr.D3=[this,this.DG];this.AD.Eo=[this,this.Fi];this.AD.Hn=[this,this.Hn
];this.NX.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done(
);this.AD._Done();this.Afs._Done();this.NX._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cr._ReInit();this.AD._ReInit();this.
Afs._ReInit();this.NX._ReInit();this.NX.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.A$={AX:null,Hs:-1,CQ:function(){this.Ci(this.Hs
);},Aj:function(Ae){var B;C.Cp.Aj.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Hs%2)===1)this.Background.L(A.jb.CL);else this.Background.L(A.jb.CV);}},ZA:function(
E){if(this.AX===E)return;this.AX=E;},Ci:function(Ad){A.ab5("%s",Ayj);},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.A$;},_ReInit:function(){C.Cp._ReInit.
call(this);this.CQ();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GL={
Bf:null,FD:null,DR:null,Fl:null,V_:null,Ko:null,KT:A.jV,AUv:0,AUw:0,ARQ:Ald,Aft:
false,CQ:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbx],this);}},Init:function(aArg){var B;A.
zX([this,this.Bfk],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ],0);A.zV([this
,this.Bxp],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z$],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBV],[B=A._GetAutoObject(A.Device.Helper)
,B.U9,B.Va],0);A.pe([this,this.Z$],this);A.pe([this,this.A01],this);A.pe([this,this.
AxI],this);},WJ:function(G){this.AgB();var O;for(O=this.Ko.Dv()-1;O>=0;O=O-1)switch(
this.Ko.C8(O)){case 0:this.AdX(A.aaR(A.acf.A5D),[this,this.BoC],0);break;case 14:
this.AdX(A.aaR(A.acf.BhT),[this,this.BoD],14);break;case 1:this.AdX(A.aaR(A.acf.
Temperature),[this,this.AUa],1);break;case 2:this.AdX(A.aaR(A.acf.Rating),[this,
this.AT$],2);break;case 3:this.AdX(A.aaR(A.acf.AfB),[this,this.AUb],3);break;default:
A.ab5("%s",Ayk);}A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.
BiQ));A._GetAutoObject(A.Device.Device).Dw(6);},Bbx:function(s){this.WJ(s);},DG:
function(G){var D8=(A.Core.BG.isPrototypeOf(G)?G:null);var Af5=this.Ko.D0(A._GetAutoObject(
A.Device.Device).Ko);if(this.Aft)return;switch(D8.CP){case 6:{Af5=Af5-1;if(Af5<0
)Af5=this.Ko.Dv()-1;A._GetAutoObject(A.Device.Device).Zy(this.Ko.C8(Af5));}break;
case 7:{Af5=Af5+1;if(Af5>=this.Ko.Dv())Af5=0;A._GetAutoObject(A.Device.Device).Zy(
this.Ko.C8(Af5));}break;default:D8.Mz=true;}},CC:function(G){if(this.DR.AAd()){this.
DR.Add();if(this.DR.AAd()===false)this.Bf.AT8(true);return;}else if(this.Aft)this.
ABd(this);if(!!this.Bf)this.Bf.AT8(true);},E4:function(G){if(!!this.Bf)this.Bf.AT8(
false);},AxI:function(G){var B;if(!!this.Bf)this.HQ(this.Bf);this.Bf=A._NewObject(
C.AMI,0);this.Bf.H(this.ARQ);this.Bf.ZA(A._GetAutoObject(A.Device.Device).An);this.
Bf.ZE([this,this.Aas]);if(!!this.FD)this.Bf.A_c([B=this.FD,B.A9J,B.A_8]);this.A4O(
this);this.J(this.Bf,0);if(this.Aft===false)this.Ba(this.Bf);this.Bfk(this);this.
A$3(this);},A9$:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Ds(this.
A7m());this.Em.AQ=[this,this.Aas];this.ALA(this);this.Em.As(true);this.Ba(this.Em
);this.Aft=true;},Blk:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);
if(!this.Bf)return;var Aa=(C.ACk.isPrototypeOf(B=this.Bf.AD.Bj3(this.Bf.AD.Gv))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GT(Aa.Hs);else A._GetAutoObject(
A.Device.Helper).W.FE();this.Agn();},Agk:function(G){var F;if(!this.Fl)this.A6I(
this);else switch((F=this.Fl,F[1].call(F[0]))){case 19:break;case 0:this.A6I(this
);break;case 1:this.BiR(this);break;case 9:this.A6J(this);break;case 4:this.BiT(
this);break;case 6:this.BiU(this);break;case 8:this.BiW(this);break;case 2:this.
BiX(this);break;case 3:this.BiY(this);break;case 7:this.Bi0(this);break;case 5:this.
Bi1(this);break;case 10:this.Bi3(this);break;case 11:this.BiS(this);break;case 12:
this.BiV(this);break;case 13:this.A6O(this);break;case 14:this.A6K(this);break;case
18:this.A6L(this);break;case 15:this.A6M(this);break;case 16:this.BiZ(this);break;
case 17:this.A6N(this);break;default:A.ab5("%s%e",AfJ,(F=this.Fl,F[1].call(F[0])
));}},Aas:function(s){this.Agk(s);},Bmv:function(G){this.Ds(C.Kv);this.Em.AQ=null;
this.Aft=false;this.Z$(this);this.BgF();this.N.T6.C0(255);this.N.T7.C0(255);this.
Ba(this.Bf);this.Em.As(false);},Ant:function(G){A._GetAutoObject(C.A5).FA();},Dl:
function(E){if(this.KT===E)return;this.KT=E;this.A4O(this);},AbB:function(){switch(
A._GetAutoObject(A.Device.Device).Ko){case 14:return C.ANh;case 2:return C.ANj;case
1:return C.ANk;case 3:return C.ANm;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.AqA;case 7:return C.ACj;case 12:return C.ACm;case 11:return C.ACi;case
13:return C.ACl;default:throw new Error(Aol);}},AbC:function(){switch(A._GetAutoObject(
A.Device.Device).Ko){case 14:return C.APK;case 2:return C.ADE;case 1:return C.APM;
case 3:return C.APO;case 4:return C.ADA;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq7;case 7:return C.ADC;case 12:return C.ADD;case 11:return C.ADB;case
13:return C.ADF;default:throw new Error(Aol);}},Bfk:function(G){this.ATL(A._GetAutoObject(
A.Device.Device).Ko);if(!!this.Bf){this.Bf.N_(this.AbB());this.BpN(this);}},BpN:
function(G){var B;if(!!this.FD)this.HQ(this.FD);this.FD=(C.De.isPrototypeOf(B=A.
_NewObject(this.AbC(),0))?B:null);this.FD.H(I2);if(!!this.Bf)this.Bf.A_c([B=this.
FD,B.A9J,B.A_8]);this.J(this.FD,0);},Bli:function(G){this.Ra(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AUa:function(G){A._GetAutoObject(A.Device.Device).Zy(1);
},AT$:function(G){A._GetAutoObject(A.Device.Device).Zy(2);},AUb:function(G){A._GetAutoObject(
A.Device.Device).Zy(3);},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).ME());},A01:function(s){this.Ra(s);},HR:function(
G){if(this.Aft){this.ALA(this);return;}this.N.C4(A.aaL(A.ach.E3));this.N.Cu(A.aaL(
A.ach.ADW));this.N.C5(A.aaL(A.ach.Options));this.N.CF=[this,this.Ant];this.N.Cf=[
this,this.A9$];this.N.Ce=[this,this.Bbx];this.N.Hz(A.jV);this.N.E6(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.IT.C0(100);this.N.
Cf=null;}else this.N.IT.C0(255);},AoC:function(s){this.HR(s);},AdX:function(Aig,
Aih,AJz){A._GetAutoObject(C.BT).ABU(Aig,Aih,[this,this.A9D,this.ATL],AJz);},AaO:
function(G){this.A4O(this);if(this.Aft)A.pe([this,this.ALA],this);},Bxp:function(
s){this.AaO(s);},Agn:function(){A._GetAutoObject(C.A5).Cc(9);},A4O:function(G){if(
!this.Bf)return;if(!A._GetAutoObject(A.Device.Device).An.QN()||!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bf.Dl(A.aaR(A.acf.AEC));else if(A._GetAutoObject(
A.Device.Helper).Arl(A._GetAutoObject(A.Device.Device).An.Filter))this.Bf.Dl(this.
KT);else if(!A._GetAutoObject(A.Device.Device).An.Filter.DN(1,4)){if(A._GetAutoObject(
A.Device.Helper).ADf(A._GetAutoObject(A.Device.Device).An.Filter)===1)this.Bf.Dl(
A.aaR(A.acf.AOh));else this.Bf.Dl(A.aaR(A.acf.AOg));}else this.Bf.Dl(A.aaR(A.acf.
ASs));},AE3:function(G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(F[0],0));},AwY:function(
E){if(A.aaZ(this.Fl,E))return;if(!!this.Fl)A.z$([this,this.A0_],this.Fl,0);this.
Fl=E;if(!!E)A.zX([this,this.A0_],this.Fl,0);if(!!E)A.pe([this,this.A0_],this);},
AE9:function(G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(F[0],1));},Aw3:function(
G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(F[0],2));},ATP:function(G){var F;if(!
!this.Fl)(F=this.Fl,F[2].call(F[0],3));},AT3:function(G){var F;if(!!this.Fl)(F=this.
Fl,F[2].call(F[0],7));},AT4:function(G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(
F[0],5));},BiX:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.
Helper).GT(this.Bf.FQ());this.DR.Qr(1);}},I9:function(Aig,Aih,Ao1){A._GetAutoObject(
C.BT).ABU(Aig,Aih,[this,this.A9E,this.ATM],Ao1);},BmG:function(G){var F;if(!!this.
Fl)(F=this.Fl,F[2].call(F[0],4));},BiT:function(G){if(!this.Bf)return;if(this.Nm(
)){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());this.DR.BCl();}},BmH:function(
G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(F[0],6));},BiU:function(G){if(!this.Bf
)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());this.DR.
BCm();}},BiW:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.
Helper).GT(this.Bf.FQ());this.DR.Qr(1024);}},BnR:function(G){var F;if(!!this.Fl)(
F=this.Fl,F[2].call(F[0],8));},Akt:function(G){var F;if(!!this.Fl)(F=this.Fl,F[2
].call(F[0],9));},BiY:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(
A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(2);}},A6I:function(G){if(!this.Bf)return;
if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());if(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).AZ(66,true,A.jV,0,null);else this.BB9();}},BiR:function(G){if(!
this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());
this.DR.Qr(16);}},BB9:function(){A._GetAutoObject(C.A5).Cc(94);},Bi0:function(G){
if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ(
));this.DR.Qr(4);}},Bi1:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(
A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(8);}},A6J:function(G){var B;if(!this.
Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());if(this.
Aft){A.zX([this,this.AAF],[B=this.DR,B.SN,B.E5],0);this.ABd(this);}this.DR.Add();
}},AuN:function(Aig,Aih,By0){A._GetAutoObject(C.BT).BhO(Aig,Aih,By0);},ALA:function(
G){this.N.Hz(A.jV);this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.AeG));this.N.CF=[this,this.
Bmv];this.N.T6.C0(100);this.N.T7.C0(100);var Gl=A._GetAutoObject(A.Device.Device
).An.B_();if(Gl<=0){this.N.Cu(null);this.N.C5(null);this.N.Cf=null;this.N.Ce=null;
this.N.WU=false;this.N.ZM=false;}else if(Gl===1){this.N.Cu(null);this.N.C5(A.aaL(
A.ach.AeH));this.N.Cf=null;this.N.Ce=[this,this.Aas];this.N.WU=false;this.N.ZM=false;
}else{this.N.Cu(A.aaL(A.ach.Arb));this.N.C5(A.aaL(A.ach.Arj));this.N.Cf=[this,this.
A38];this.N.Ce=[this,this.A39];this.N.WU=true;this.N.ZM=true;}},A38:function(G){
if(!this.Bf)return;if(this.Bf.FQ()<(A._GetAutoObject(A.Device.Device).An.B_()-1)
)this.Bf.GU(this.Bf.FQ()+1);},A39:function(G){if(!this.Bf)return;if(this.Bf.FQ()>
0)this.Bf.GU(this.Bf.FQ()-1);},A$3:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bj=A._GetAutoObject(A.Device.Device).An.L3(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bj>=0){this.Bf.GU(Bj);A.ab5("%s",Aom);}}},Nm:function(){return this.
Bf.FQ()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B_()>5;}
,AgB:function(){this.BhP();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.AUV),[this,this.
A9$]);A._GetAutoObject(C.BT).Fy();},Z$:function(G){if(this.Aft)this.ALA(this);else
this.HR(this);},ABd:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E_();var Azf=aFilter.DN(1,4);if(!!Azf){aFilter.Nz(Azf);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bf)this.Bf.GU(0);}},BHo:function(s){this.
ABd(s);},AAF:function(G){var B;if(!this.DR.EW&&this.Aft){A.z$([this,this.AAF],[B=
this.DR,B.SN,B.E5],0);this.ABd(this);}},Bot:function(G){var F;if(!!this.Fl)(F=this.
Fl,F[2].call(F[0],10));},Bi3:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(
A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(256);}},A3X:function(G){var F;this.
ATM((F=this.Fl,F[1].call(F[0])));A.pe([this,this.AoC],this);},A0_:function(s){this.
A3X(s);},BmD:function(G){var F;if(!!this.Fl)(F=this.Fl,F[2].call(F[0],11));},BiS:
function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(
this.Bf.FQ());this.DR.Qr(4096);}},BiV:function(G){if(!this.Bf)return;if(this.Nm(
)){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(16384);}},A6O:function(
G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.
FQ());this.BB_();}},BB_:function(){A._GetAutoObject(C.A5).Acg(75);},A6K:function(
G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.
FQ());this.DR.Qr(32768);}},A6M:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(
A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(65536);}},BiZ:function(G){if(!this.
Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());this.
DR.Qr(131072);}},BhP:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arl(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.ACp));else A._GetAutoObject(C.BT).TF(A.
aaR(A.acf.ACp),[this,this.Bli]);A._GetAutoObject(C.BT).TF(A.aaR(A.acf.AkV),[this
,this.Blk]);A._GetAutoObject(C.BT).Fy();},A6N:function(G){if(!this.Bf)return;if(
this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(128);}}
,BBV:function(G){var B;if(!this.Bf)return;A.pe([B=this.Bf,B.Ci],this);},A6L:function(
G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(A.Device.Helper).GT(this.Bf.
FQ());this.DR.Qr(524288);}},Bi2:function(G){if(!this.Bf)return;if(this.Nm()){A._GetAutoObject(
A.Device.Helper).GT(this.Bf.FQ());this.DR.Qr(262144);}},ATL:function(E){if(this.
AUv===E)return;this.AUv=E;A.abo([this,this.A9D,this.ATL],0);},ATM:function(E){if(
this.AUw===E)return;this.AUw=E;A.abo([this,this.A9E,this.ATM],0);},A7m:function(
){return C.YF;},BgF:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?
B:null);if(!!FilterCriterion)Filter.Nz(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},BoC:function(G){A._GetAutoObject(A.Device.Device).Zy(0);
},BoD:function(G){A._GetAutoObject(A.Device.Device).Zy(14);},A_Q:function(E){if(
A.aaY(this.ARQ,E))return;this.ARQ=E;if(!!this.Bf)this.Bf.H(E);},A9D:function(){return this.
AUv;},A9E:function(){return this.AUw;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADE._Init.call(this.V_={I:this},0);C.Ko._Init.call(this.Ko={I:this},0);
this.__proto__=C.GL;this.Background.H(Cg);this.N.Z(true);this.N.OX(true);this.N.
OY(true);this.Em.A_F(A.jb.CV);this.Em.A_G(A.jb.Text);this.Ds(C.Kv);this.V_.H(I2);
this.KT=A.aaR(A.acf.AEC);this.J(this.V_,0);this.DR=A._GetAutoObject(C.DR);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V_._Done();this.Ko._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V_._ReInit();
this.Ko._ReInit();this.Dl(A.aaR(A.acf.AEC));this.CQ();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACk={AP:null,A_:null,UP:null,AcH:
null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UP.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A_.H([
this.UP.M[2]-1,0,this.UP.M[2]+1,aSize[1]]);this.AcH.H([this.UP.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.UP.L(this.V.AR);this.AcH.L(this.
V.AR);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.T(this.
AX.CE(Ad,1).toFixed());this.UP.R(this.AX.CE(Ad,2).toFixed());this.AcH.R(this.AX.
CE(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);
A.acg.Text._Init.call(this.UP={I:this},0);A.acg.Text._Init.call(this.AcH={I:this
},0);this.__proto__=C.ACk;this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.UP.L(A.jb.Text
);this.AcH.L(A.jb.Text);this.J(this.AP,0);this.J(this.A_,0);this.J(this.UP,0);this.
J(this.AcH,0);this.UP.S(A.aaL(A.fl.Af));this.AcH.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done();this.UP.
_Done();this.AcH._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.A_._ReInit();this.UP._ReInit();this.AcH._ReInit(
);this.UP.S(A.aaL(A.fl.Af));this.AcH.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Aee={OI:null,S1:null,Mw:null,Init:function(aArg){var B;A.zX([this,this.A3E],[
B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyW],0);A.zX([this,this.AdE],[B=A._GetAutoObject(
A.Device.Device),B.Awc,B.AyV],0);A.pe([this,this.AdE],this);},Aj:function(Ae){C.
AB.Aj.call(this,Ae);this.S1.R(A._GetAutoObject(A.Device.Device).Abd.toFixed()+As4
);this.OI.Z(A._GetAutoObject(A.Device.Device).AmI);},AdE:function(G){this.Am();}
,M8:function(G){A._GetAutoObject(C.A5).FA();},A3E:function(G){if(A._GetAutoObject(
A.Device.Device).AmI===false){this.OI.Z(false);A._GetAutoObject(C.A5).FA();}else
this.OI.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OI={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0);C.Mw._Init.call(
this.Mw={I:this},0);this.__proto__=C.Aee;var B;this.Background.L(A.jb.CV);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OI.H(AcV);this.OI.R(A.aaR(A.acf.OI));this.
OI.L(A.jb.Text);this.OI.Z(false);this.S1.H(As5);this.S1.R(As6);this.S1.L(A.jb.Text
);this.Mw.H(As7);this.J(this.OI,0);this.J(this.S1,0);this.J(this.Mw,0);this.N.Ce=[
this,this.M8];this.OI.S(A.aaL(A.fl.Af));this.S1.S(A.aaL(A.fl.Af));this.Mw.Au([B=
A._GetAutoObject(A.Device.Device),B.Awc,B.AyV]);this.Mw.A_X([B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyW]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OI._Done();this.S1._Done();this.Mw._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OI._ReInit();this.S1._ReInit();this.Mw._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OI.R(A.aaR(A.acf.OI));this.OI.S(A.aaL(A.fl.Af)
);this.S1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mw={Ad$:null,Aea:null,Hg:function(G){var F;if(!!this.Q){this.A2L();var Adg=(
F=this.Q,F[1].call(F[0]));if(Adg>20)this.OF.L(A.jb.E2);else this.OF.L(A.jb.Gn);this.
OF.L((this.OF.AR&0x00FFFFFF)|(this.AlP(Adg,0,20)<<24));this.TM.L((this.TM.AR&0x00FFFFFF
)|(this.AlP(Adg,21,40)<<24));this.TN.L((this.TN.AR&0x00FFFFFF)|(this.AlP(Adg,41,
60)<<24));this.Ad$.L((this.Ad$.AR&0x00FFFFFF)|(this.AlP(Adg,61,80)<<24));this.Aea.
L((this.Aea.AR&0x00FFFFFF)|(this.AlP(Adg,81,100)<<24));}},A2L:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.Ve=this.Aea;else if((F=this.Q,F[
1].call(F[0]))>60)this.Ve=this.Ad$;else if((F=this.Q,F[1].call(F[0]))>40)this.Ve=
this.TN;else if((F=this.Q,F[1].call(F[0]))>20)this.Ve=this.TM;else this.Ve=this.
OF;}else this.Ve=null;},_Init:function(aArg){C.OH._Init.call(this,aArg);A.acg.AK.
_Init.call(this.Ad$={I:this},0);A.acg.AK._Init.call(this.Aea={I:this},0);this.__proto__=
C.Mw;this.H(Aon);this.N1.H(Aon);this.OF.H(As8);this.TM.H(Ale);this.TN.H(Ayl);this.
Ad$.H(Aym);this.Ad$.L(A.jb.E2);this.Aea.H(Ayn);this.Aea.L(A.jb.E2);this.J(this.Ad$
,0);this.J(this.Aea,0);this.N1.Ax(A.aaL(A.ach.AM2));},_Done:function(){this.__proto__=
C.OH;this.Ad$._Done();this.Aea._Done();C.OH._Done.call(this);},_ReInit:function(
){C.OH._ReInit.call(this);this.Ad$._ReInit();this.Aea._ReInit();},_Mark:function(
D){var B;C.OH._Mark.call(this,D);if((B=this.Ad$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aea)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVq={Of:null,Lz:null,Ak7:null,Z8:null,Z7:null,CQ:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApQ],[B=A._GetAutoObject(A.Device.Device),B.
AS4,B.A0U],0);A.zX([this,this.ApQ],[B=A._GetAutoObject(A.Device.Device),B.AS7,B.
A0W],0);A.zX([this,this.ApQ],[B=A._GetAutoObject(A.Device.Device),B.A9T,B.Bb6],0
);A.pe([this,this.ApQ],this);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.GJ(this
);this.ABH(this);this.BDe(this);this.DL(this);},BBx:function(G){A._GetAutoObject(
A.Device.Device).AsK();},ApQ:function(G){this.Am();},GJ:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z8.Z(false);break;case 4:{var A4q;if(!A._GetAutoObject(A.Device.Device).Afx)A4q=
0;else A4q=((A._GetAutoObject(A.Device.Device).AxZ*100)/A._GetAutoObject(A.Device.
Device).Afx)|0;this.Z8.By(A4q);this.Z8.Z(true);}break;default:A.ab5("%s%e",As9,A.
_GetAutoObject(A.Device.Device).SyncState);}},BDe:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CL);this.Lz.L(A.jb.Text);this.Of.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gn);this.Lz.L(A.jb.Bm);this.Of.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As9,A._GetAutoObject(A.Device.Device).SyncState);}},DL:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C4(null);this.N.CF=null;this.N.CS(A.jV);this.N.Ce=null;}break;
case 7:{this.N.C4(null);this.N.CF=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ce=[this
,this.BBx];}break;default:A.ab5("%s%e",As9,A._GetAutoObject(A.Device.Device).SyncState
);}},ABH:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lz.R(A.aaR(A.acf.Bqx));break;case 1:this.Lz.R(A.aaR(A.acf.Bqu));break;
case 2:this.Lz.R(A.aaR(A.acf.Bqr));break;case 3:this.Lz.R(A.aaR(A.acf.Bqv));break;
case 4:this.Lz.R((A.aaR(A.acf.Bqt)+Ayo)+A._GetAutoObject(A.Device.Helper).MR(A._GetAutoObject(
A.Device.Helper).MR(A.aaR(A.acf.Bo8),Pc,A._GetAutoObject(A.Device.Device).AxZ.toFixed(
)),Ayp,A._GetAutoObject(A.Device.Device).Afx.toFixed()));break;case 5:this.Lz.R(
A.aaR(A.acf.Bqw));break;case 7:this.Lz.R(A.aaR(A.acf.Bqs));break;default:A.ab5("%s%e"
,As9,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Of={I:this},0);C.CG._Init.call(this.Lz={I:this
},0);A.acg.Ap._Init.call(this.Ak7={I:this},0);A.acs.ADH._Init.call(this.Z8={I:this
},0);A.acs.ADI._Init.call(this.Z7={I:this},0);this.__proto__=C.AVq;this.N.Z(true
);this.Of.H(AWm);this.Of.R(A.aaR(A.acf.Of));this.Lz.A1(0x3F);this.Lz.H(AWn);this.
Lz.A4(0x12);this.Ak7.H(AWo);this.Ak7.L(A.jb.AV);this.Z8.H(AWp);this.Z8.As(false);
this.Z8.By(0);this.Z7.Bon(0);this.Z7.A$j(0);this.Z7.A$h(A.jb.AV);this.Z7.A$g(0);
this.Z7.AGe(AHy);this.J(this.Of,0);this.J(this.Lz,0);this.J(this.Ak7,0);this.J(this.
Z8,0);this.Of.S(A.aaL(A.fl.EL));this.Of.AY(A.aaL(A.fl.Af));this.Of.Cm(A.aaL(A.fl.
Ak));this.Lz.S(A.aaL(A.fl.Af));this.Lz.AY(A.aaL(A.fl.Ak));this.Lz.Cm(A.aaL(A.fl.
Bg));this.Ak7.Ax(A.aaL(A.ach.AQ8));this.Z8.OnSetAppearance(this.Z7);this.Z7.A$i(
A.aaL(A.ach.N4));this.Z7.A$f(A.aaL(A.ach.N4));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Of._Done();this.Lz._Done();this.Ak7._Done();this.Z8._Done(
);this.Z7._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Of._ReInit();this.Lz._ReInit();this.Ak7._ReInit();this.Z8._ReInit();this.
Z7._ReInit();this.Of.R(A.aaR(A.acf.Of));this.Of.S(A.aaL(A.fl.EL));this.Of.AY(A.aaL(
A.fl.Af));this.Of.Cm(A.aaL(A.fl.Ak));this.Lz.S(A.aaL(A.fl.Af));this.Lz.AY(A.aaL(
A.fl.Ak));this.Lz.Cm(A.aaL(A.fl.Bg));this.CQ();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z7)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq5={_Init:function(aArg){C.ADx._Init.call(this,aArg
);this.__proto__=C.Aq5;this.A_I(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BJ:A.abi(3,0,{0:2,2:1}),Dv:function(
){return 3;},C8:function(aIndex){if(aIndex>=3)return-1;return this.BJ.Get(aIndex
);},Ge:function(aIndex){return this.GenderToString.BU(this.C8(aIndex));},D0:function(
A9){var O=0;while(O<3){if(this.BJ.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(
){var O=0;var max=-1;while(O<3){if(this.BJ.Get(O)>max)max=this.BJ.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.J4(
E);},L9:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af9],[B=this.Animal,B.WI,B.J4],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af9],[B=this.Animal,B.WI,B.J4],0);A.pe([this,this.Af9],this);},Af9:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.Cb,
this.Cd],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.BJ=[]).__proto__=C.Gender.BJ;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,BJ:A.abi(4,0,{1:1,2:2,3:3}),Dv:function(){return 4;},C8:function(aIndex){if(
aIndex>=4)return-1;return this.BJ.Get(aIndex);},Ge:function(aIndex){return this.
BirthTypeToString.BU(this.C8(aIndex));},D0:function(A9){var O=0;while(O<4){if(this.
BJ.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(
O<4){if(this.BJ.Get(O)>max)max=this.BJ.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aku(E);},A1Z:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.Cb,this.
Cd],0);},L9:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1Z],[B=this.Animal,B.ASJ,B.Aku],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1Z],[B=this.Animal,B.ASJ,B.Aku],0);A.pe([this,this.A1Z],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BJ=[]).__proto__=C.BirthType.BJ;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acy:null,Dv:
function(){return A._GetAutoObject(A.Device.Helper).Ad6.MQ;},C8:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad6.MQ)return-1;return A._GetAutoObject(
A.Device.Helper).Ad6.Get(aIndex);},Ge:function(aIndex){return this.Acy.BU(this.C8(
aIndex));},D0:function(A9){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad6.
MQ){if(A._GetAutoObject(A.Device.Helper).Ad6.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UM.
MQ){if(A._GetAutoObject(A.Device.Helper).UM.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UM.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.ED(E);},A1S:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.Cb,this.Cd],0);},L9:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1S],[B=this.Animal,B.PX,B.ED],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1S],[B=this.Animal,B.PX,B.ED],0);A.pe([
this,this.A1S],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acy={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acy._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acy._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AU7={Init:function(aArg){var B;A.pe([this,this.AfN],this);A.zX([this,this.AfN
],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},A4v:function(G){A._GetAutoObject(
A.Device.Device).AZ(38,true,A.jV,0,[this,this.Bcm]);},A36:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).Asx(this);},A2i:function(G){var F;if(this.A8===1){var BQ=this.D_;
this.D_=this.D_-10;if(this.D_<this.AlW)this.D_=this.AlW;if(this.D_<A._GetAutoObject(
A.Device.Device).AcO)this.D_=A._GetAutoObject(A.Device.Device).AcO;if(this.DX!==
BQ){if(!!this.J7)(F=this.J7,F[2].call(F[0],this.D_));A.abo(this.J7,0);}}if(this.
A8===2){var BQ=this.DX;this.DX=this.DX-10;if(this.DX<this.D_)this.DX=this.D_;if(
this.DX!==BQ){if(!!this.J6)(F=this.J6,F[2].call(F[0],this.DX));A.abo(this.J6,0);
}}this.DL(this);this.Am();},A2U:function(G){var F;if(this.A8===1){var BQ=this.D_;
this.D_=this.D_+10;if(this.D_>this.DX)this.D_=this.DX;if(this.D_!==BQ){if(!!this.
J7)(F=this.J7,F[2].call(F[0],this.D_));A.abo(this.J7,0);}}if(this.A8===2){var BQ=
this.DX;this.DX=this.DX+10;if(this.DX>this.AlS)this.DX=this.AlS;if(this.DX!==BQ){
if(!!this.J6)(F=this.J6,F[2].call(F[0],this.DX));A.abo(this.J6,0);}}this.DL(this
);this.Am();},GJ:function(G){this.PQ.R(AHz+A._GetAutoObject(A.Device.Converter).
Ak3(this.D_));this.PR.R(AHz+A._GetAutoObject(A.Device.Converter).Ak3(this.DX));this.
SG.R(A._GetAutoObject(A.acj.Temperature).AlQ());},A2N:function(AtA){if(AtA===1)return this.
PQ;else if(AtA===2)return this.PR;else return null;},_Init:function(aArg){C.Acx.
_Init.call(this,aArg);this.__proto__=C.AU7;this.AlS=5000;this.AlW=3000;this.T(A.
aaR(A.acf.Arx));this.Background.H(AfK);this.V.H(BF);this.V.R(A.aaR(A.acf.AG$));this.
V.A4(0x12);this.Init(aArg);},_ReInit:function(){C.Acx._ReInit.call(this);this.T(
A.aaR(A.acf.Arx));this.V.R(A.aaR(A.acf.AG$));},_className:"Application::SettingsItemThresholdsTemp"
};C.EC={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AK._Init.call(this.Background={I:this},0);this.__proto__=C.EC;this.H(BF);this.Background.
H(BF);this.Background.L(A.jb.CL);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AQ:null,Abg:null,Abk:null,Abi:
null,Background:null,Abf:null,Abj:null,Abh:null,AjG:null,ArD:null,VY:null,A6:0,BBd:
function(G){if(this.AjG.CP===6){if(this.A6===1)this.AnO(2);else if(this.A6===2)this.
AnO(3);else this.AnO(1);}else if(this.AjG.CP===7){if(this.A6===3)this.AnO(2);else
if(this.A6===2)this.AnO(1);else this.AnO(3);}},AnO:function(E){if(this.A6===E)return;
this.A6=E;switch(this.A6){case 3:this.Background.H(this.Abf.M);break;case 2:this.
Background.H(this.Abj.M);break;case 1:this.Background.H(this.Abh.M);break;default:
this.Background.H(Aoo);}},H0:function(G){var B;if(!!this.AQ)(B=this.AQ)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Abg={I:this},0);A.acg.Hp._Init.call(this.Abk={I:this},0);A.acg.Hp._Init.
call(this.Abi={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aev._Init.call(this.Abf={I:this},0);A.acg.Aev._Init.call(this.Abj={I:this},0);A.
acg.Aev._Init.call(this.Abh={I:this},0);A.Core.BG._Init.call(this.AjG={I:this},0
);A.Core.BG._Init.call(this.ArD={I:this},0);A.Graphics.AMU._Init.call(this.VY={I:
this},0);this.__proto__=C.Rating;this.H(AWq);this.Abg.H(AHA);this.Abg.L(A.jb.Text
);this.Abg.AnM(Alf);this.Abg.Nx(3);this.Abg.Z(true);this.Abk.H(AHB);this.Abk.L(A.
jb.Text);this.Abk.AnM(Alf);this.Abk.Nx(3);this.Abk.Z(true);this.Abi.H(AHC);this.
Abi.L(A.jb.Text);this.Abi.AnM(Alf);this.Abi.Nx(3);this.Abi.Z(true);this.Background.
H(Aoo);this.Background.L(A.jb.AV);this.Abf.H(AHA);this.Abf.L(A.jb.E2);this.Abf.AnM(
Alf);this.Abf.Z(true);this.Abj.H(AHB);this.Abj.L(A.jb.Ia);this.Abj.AnM(Alf);this.
Abj.Z(true);this.Abh.H(AHC);this.Abh.L(A.jb.Gn);this.Abh.AnM(Alf);this.Abh.Z(true
);this.AjG.Filter=147;this.ArD.Filter=1;this.VY.BmW(360);this.VY.Boa(22);this.VY.
Bol(2);this.J(this.Abg,0);this.J(this.Abk,0);this.J(this.Abi,0);this.J(this.Background
,0);this.J(this.Abf,0);this.J(this.Abj,0);this.J(this.Abh,0);this.Abg.ZF(this.VY
);this.Abk.ZF(this.VY);this.Abi.ZF(this.VY);this.Background.Ax(A.aaL(A.ach.N3));
this.Abf.ZF(this.VY);this.Abj.ZF(this.VY);this.Abh.ZF(this.VY);this.AjG.BH=[this
,this.BBd];this.ArD.BH=[this,this.H0];},_Done:function(){this.__proto__=A.Core.P;
this.Abg._Done();this.Abk._Done();this.Abi._Done();this.Background._Done();this.
Abf._Done();this.Abj._Done();this.Abh._Done();this.AjG._Done();this.ArD._Done();
this.VY._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Abg._ReInit();this.Abk._ReInit();this.Abi._ReInit();this.Background.
_ReInit();this.Abf._ReInit();this.Abj._ReInit();this.Abh._ReInit();this.AjG._ReInit(
);this.ArD._ReInit();this.VY._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asz={Akk:null,Asj:null,Background:null,TZ:null,TT:null,Ab6:null,Ab5:null,Ab4:
null,AcC:null,AcB:null,AcA:null,Act:null,Acs:null,AbZ:null,AbY:null,Aci:null,Ach:
null,AqG:null,Init:function(aArg){},BkW:function(G){this.Ab6.R(AWr);this.Ab5.R(A.
jV);this.Ab4.R(A.jV);this.AcC.R(AWs);this.AcB.R(A.jV);this.AcA.R(A.jV);this.Act.
R(A.jV);this.Acs.R(A.jV);this.AbZ.R(A.jV);this.AbY.R(A.jV);this.Aci.R(A.jV);this.
Ach.R(A.jV);},BoQ:function(G){this.TT.Z(true);this.TZ.Z(true);var II=this.Ip();if(
!II)return;this.TZ.R(II.GetFPS().toFixed()+AHD);this.TT.R(AWt);this.TT.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Asj={I:this},0);A.acg.AK._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TZ={I:this},0);A.acg.
Text._Init.call(this.TT={I:this},0);A.acg.Text._Init.call(this.Ab6={I:this},0);A.
acg.Text._Init.call(this.Ab5={I:this},0);A.acg.Text._Init.call(this.Ab4={I:this}
,0);A.acg.Text._Init.call(this.AcC={I:this},0);A.acg.Text._Init.call(this.AcB={I:
this},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.Act={
I:this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.
AbZ={I:this},0);A.acg.Text._Init.call(this.AbY={I:this},0);A.acg.Text._Init.call(
this.Aci={I:this},0);A.acg.Text._Init.call(this.Ach={I:this},0);A.acg.AK._Init.call(
this.AqG={I:this},0);this.__proto__=C.Asz;this.H(AcW);this.As(false);this.Akk.PZ(
2000);this.Akk.WN(1);this.Akk.As(true);this.Asj.As(true);this.Background.A1(0x3F
);this.Background.H(AcW);this.Background.L(0x78000000);this.TZ.H(AWu);this.TZ.A4(
0x14);this.TZ.R(A.jV);this.TZ.L(0xFFFFFC00);this.TZ.Z(false);this.TT.H(AWv);this.
TT.A4(0x11);this.TT.R(A.jV);this.TT.Z(false);this.Ab6.H(AWw);this.Ab6.A4(0x11);this.
Ab6.R(A.jV);this.Ab5.H(AWx);this.Ab5.A4(0x11);this.Ab5.R(A.jV);this.Ab4.H(As_);this.
Ab4.A4(0x14);this.Ab4.R(A.jV);this.AcC.H(AHE);this.AcC.A4(0x11);this.AcC.R(A.jV);
this.AcB.H(AHF);this.AcB.A4(0x11);this.AcB.R(A.jV);this.AcA.H(Ayq);this.AcA.A4(0x14
);this.AcA.R(A.jV);this.Act.H(AHG);this.Act.A4(0x11);this.Act.R(A.jV);this.Acs.H(
Ayr);this.Acs.A4(0x14);this.Acs.R(A.jV);this.AbZ.H(AWy);this.AbZ.A4(0x11);this.AbZ.
R(A.jV);this.AbY.H(AWz);this.AbY.A4(0x14);this.AbY.R(A.jV);this.Aci.H(AWA);this.
Aci.A4(0x11);this.Aci.R(A.jV);this.Ach.H(AWB);this.Ach.A4(0x14);this.Ach.R(A.jV);
this.AqG.H(AHH);this.J(this.Background,0);this.J(this.TZ,0);this.J(this.TT,0);this.
J(this.Ab6,0);this.J(this.Ab5,0);this.J(this.Ab4,0);this.J(this.AcC,0);this.J(this.
AcB,0);this.J(this.AcA,0);this.J(this.Act,0);this.J(this.Acs,0);this.J(this.AbZ,
0);this.J(this.AbY,0);this.J(this.Aci,0);this.J(this.Ach,0);this.J(this.AqG,0);this.
Akk.MN=[this,this.BkW];this.Asj.MN=[this,this.BoQ];this.TZ.S(A.aaL(A.fl.Ak));this.
TT.S(A.aaL(A.fl.Ak));this.Ab6.S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));this.
Ab4.S(A.aaL(A.fl.Ak));this.AcC.S(A.aaL(A.fl.Ak));this.AcB.S(A.aaL(A.fl.Ak));this.
AcA.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.
AbZ.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));this.
Ach.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Asj._Done();this.Background._Done();this.TZ._Done();this.TT.
_Done();this.Ab6._Done();this.Ab5._Done();this.Ab4._Done();this.AcC._Done();this.
AcB._Done();this.AcA._Done();this.Act._Done();this.Acs._Done();this.AbZ._Done();
this.AbY._Done();this.Aci._Done();this.Ach._Done();this.AqG._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Asj._ReInit();this.Background._ReInit();this.TZ._ReInit();this.TT._ReInit();this.
Ab6._ReInit();this.Ab5._ReInit();this.Ab4._ReInit();this.AcC._ReInit();this.AcB.
_ReInit();this.AcA._ReInit();this.Act._ReInit();this.Acs._ReInit();this.AbZ._ReInit(
);this.AbY._ReInit();this.Aci._ReInit();this.Ach._ReInit();this.AqG._ReInit();this.
TZ.S(A.aaL(A.fl.Ak));this.TT.S(A.aaL(A.fl.Ak));this.Ab6.S(A.aaL(A.fl.Ak));this.Ab5.
S(A.aaL(A.fl.Ak));this.Ab4.S(A.aaL(A.fl.Ak));this.AcC.S(A.aaL(A.fl.Ak));this.AcB.
S(A.aaL(A.fl.Ak));this.AcA.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.Acs.
S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.Aci.
S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGS={FP:null,Dm:null,Av:null,JD:null,HN:null,Um:null,Bb:null,Su:null,GA:null
,Gz:null,Gb:0,A8:0,Bkt:false,Init:function(aArg){},Aj:function(Ae){C.Dt.Aj.call(
this,Ae);this.Hy.Z(false);this.H8.Z(false);if(!!this.Dm){this.Su.R(this.Av.Format(
AWC));this.Um.R(this.Av.Format(MV));}if(this.A8===1){this.HN.Z(true);this.HN.H(this.
Su.M);this.HN.L(A.jb.Bm);this.Su.L(this.Background.AR);this.Um.L(A.jb.Bm);}else if(
this.A8===2){this.HN.Z(true);this.HN.H(this.Um.M);this.HN.L(A.jb.Bm);this.Su.L(A.
jb.Bm);this.Um.L(this.Background.AR);}else{this.HN.Z(false);this.Su.L(this.V.AR);
this.Bb.L(this.V.AR);this.Um.L(this.V.AR);}},Qw:function(G){if(this.FJ===1)A.pe([
this,this.Vj],this);else if(this.FJ===4)A.pe([this,this.AiI],this);else if(this.
FJ===5)A.pe([this,this.Ait],this);C.Dt.Qw.call(this,G);},Ki:function(G){switch(this.
A8){case 0:C.Dt.Ki.call(this,G);break;case 2:break;default:this.AdD(this);}},Kd:
function(G){switch(this.A8){case 0:C.Dt.Kd.call(this,G);break;default:this.Ais(this
);}},AdF:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0])));},Acd:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdF],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdF],E,0);if(!!E)A.pe([this,this.AdF],this);
},Uv:function(E){if(this.Gb===E)return;this.Gb=E;this.Av.Initialize(this.Gb);this.
Am();},AdD:function(G){this.FJ=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vj],this
);this.Bo.As(false);}this.Bo.As(true);},Vj:function(G){this.Ey(this.A8+1);},Al9:
function(G){this.FJ=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiI],this);this.Bo.
As(false);}this.Bo.As(true);},Al8:function(G){this.FJ=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ait],this);this.Bo.As(false);}this.Bo.As(true);},AiI:function(G){
var B;var F;var BQ=this.Gb;if(this.A8===1)this.Av.AnH(this.Av.AjU+1);if(this.A8===
2)this.Av.AnK(this.Av.Av6+1);this.Av.AnN(0);this.Uv(((B=(this.Av.J2()|0))<0)?B+0x100000000:
B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.Gb));A.abo(this.
Dm,0);}},Ait:function(G){var B;var F;var BQ=this.Gb;if(this.A8===1)this.Av.AnH(this.
Av.AjU-1);if(this.A8===2)this.Av.AnK(this.Av.Av6-1);this.Av.AnN(0);this.Uv(((B=(
this.Av.J2()|0))<0)?B+0x100000000:B);if(this.Gb!==BQ){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.Gb));A.abo(this.Dm,0);}},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.AeH));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ce=null;}break;default:this.FP.AkR((F=this.N,F[1].call(F[
0])));}},F_:function(G){this.Ey(1);},He:function(G){this.Ey(0);},Ey:function(EO){
var F;if(!this.A8)this.FP.AjC((F=this.N,F[1].call(F[0])));this.A8=EO;this.Bkt=true;
if((this.A8<0)||(this.A8>2))this.A8=0;this.DL(this);this.GA.Bw=!!this.A8;this.Gz.
Bw=!!this.A8;this.Am();},Ais:function(G){if(this.A8>1)this.Ey(this.A8-1);},_Init:
function(aArg){C.Dt._Init.call(this,aArg);A.Core.Bq._Init.call(this.Av={I:this},
0);A.Core.BG._Init.call(this.JD={I:this},0);A.acg.AK._Init.call(this.HN={I:this}
,0);A.acg.Text._Init.call(this.Um={I:this},0);A.acg.Text._Init.call(this.Bb={I:this
},0);A.acg.Text._Init.call(this.Su={I:this},0);A.Core.BG._Init.call(this.GA={I:this
},0);A.Core.BG._Init.call(this.Gz={I:this},0);this.__proto__=C.AGS;this.H(Aap);this.
V.R(Ays);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H8.Z(false);this.JD.Filter=1;this.
HN.H(AWD);this.HN.L(0x55FFFFFF);this.Um.H(AWE);this.Um.Jg(true);this.Bb.H(AWF);this.
Bb.A4(0x14);this.Bb.R(AWG);this.Su.H(AWH);this.Su.Jg(true);this.Su.A4(0x14);this.
GA.Filter=4;this.GA.Bw=false;this.Gz.Filter=5;this.Gz.Bw=false;this.J(this.HN,0);
this.J(this.Um,0);this.J(this.Bb,0);this.J(this.Su,0);this.JD.BH=[this,this.AdD];
this.Um.S(A.aaL(A.fl.EL));this.Bb.S(A.aaL(A.fl.EL));this.Su.S(A.aaL(A.fl.EL));this.
GA.BH=[this,this.Al9];this.GA.D3=[this,this.AiI];this.Gz.BH=[this,this.Al8];this.
Gz.D3=[this,this.Ait];this.FP=A._NewObject(C.AeA,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Dt;this.Av._Done();this.JD._Done();this.HN._Done();this.Um._Done(
);this.Bb._Done();this.Su._Done();this.GA._Done();this.Gz._Done();C.Dt._Done.call(
this);},_ReInit:function(){C.Dt._ReInit.call(this);this.Av._ReInit();this.JD._ReInit(
);this.HN._ReInit();this.Um._ReInit();this.Bb._ReInit();this.Su._ReInit();this.GA.
_ReInit();this.Gz._ReInit();this.Um.S(A.aaL(A.fl.EL));this.Bb.S(A.aaL(A.fl.EL));
this.Su.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((
B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Um)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B9:null,AmX:null,AqV:null,Eo:null,Text:null,String:A.jV,Beo:A.jV,Kn:0x12
,ALi:0,AR:0xFFFFFFFF,Oc:0,AUO:0,A$Q:0,Bep:true,G4:function(CN){var LS=(A.Core.ARK.
isPrototypeOf(CN)?CN:null);if(!!LS)this.BDp(this);return A.Core.P.G4.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajm],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bep){this.Beo=E;this.Bep=false;
}this.ALi=E.length;A.pe([this,this.Ajm],this);},S:function(E){if(this.B9===E)return;
this.B9=E;A.pe([this,this.Ajm],this);},AY:function(E){if(this.AmX===E)return;this.
AmX=E;A.pe([this,this.Ajm],this);},Cm:function(E){if(this.AqV===E)return;this.AqV=
E;A.pe([this,this.Ajm],this);},A4:function(E){if(E===this.Kn)return;this.Kn=E;this.
Text.A4(E);},Ajm:function(G){var B;var ALo=0;if(!this.ALi){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.Lx(false);if(!!this.B9){ALo=
this.B9.YD(this.String,0,this.ALi);if(ALo<(((B=this.M)[2]-B[0])-(2*this.Text.Jj)
)){this.Text.S(this.B9);this.Text.Axb(this.Oc);return;}}this.Text.Lx(true);if(!!
this.AmX){ALo=this.AmX.YD(this.String,0,this.ALi);this.Text.S(this.AmX);this.Text.
Axb(this.AUO);if((ALo<(((B=this.M)[2]-B[0])-(2*this.Text.Jj)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqV){this.Text.S(this.AqV);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Axb((((this.Text.
B9.Ascent+this.Text.B9.Descent)*75)/100)|0);}},L:function(E){if(E===this.AR)return;
this.AR=E;this.Text.L(E);},BDp:function(G){this.R(this.Beo);},Q9:function(E){if(
A.aa0(this.Eo,E))return;this.Eo=E;this.Text.Q9(E);},ASH:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afm:function(AoP){return A.abf(this.M.slice(
0,2),this.Text.Afm(AoP));},Axb:function(E){if(this.Oc===E)return;this.Oc=E;A.pe([
this,this.Ajm],this);},Boc:function(E){if(this.AUO===E)return;this.AUO=E;A.pe([this
,this.Ajm],this);},Bod:function(E){if(this.A$Q===E)return;this.A$Q=E;A.pe([this,
this.Ajm],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHI);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHI);this.Text.R(Rr);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Eo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IS:null,AeS:null,Jc:null,Nj:null,AeM:null,AeR:null,AeQ:null,AeN:
null,AeP:null,AeO:null,Nl:null,N5:null,MF:null,Dg:function(E){C.YE.Dg.call(this,
E);this.IS.L(E);this.AeS.L(E);this.Jc.L(E);this.Nj.L(E);this.MF.L(E);this.AeM.L(
E);this.Nl.L(E);this.N5.L(E);this.AeR.L(E);this.AeQ.L(E);this.AeN.L(E);this.AeP.
L(E);this.AeO.L(E);},DY:function(G){C.YE.DY.call(this,G);this.XW(8,1,this.Nj);this.
XW(12,1,this.MF);this.XW(11,1,this.AeM);this.XW(7,1,this.Nl);this.XW(14,1,this.N5
);this.XW(1,4,this.IS);this.XW(1,1,this.AeS);this.XW(4,1,this.Jc);this.XW(22,1,this.
AeR);this.XW(26,1,this.AeQ);this.XW(30,1,this.AeN);this.XW(19,1,this.AeP);this.XW(
31,1,this.AeO);this.Text.Z(!this.Y.TX(null,0x1));},XW:function(AJA,Ed,Af0){var ABo=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adp=A._GetAutoObject(
A.Device.Device).An.Filter.DN(AJA,Ed);if(!!Adp){ABo=true;switch(AJA){case 14:{var
AzE=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adp)?Adp:null);if(!!AzE)Af0.
Ax(A._GetAutoObject(A.Device.Converter).A5H(AzE.A6));}break;case 7:{var AzE=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adp)?Adp:null);if(!!AzE)Af0.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(AzE.A6));}break;case 1:if(Ed===4)Af0.Ax(A.aaL(A.ach.ADW)
);else if(Adp.Operator===4)ABo=false;break;case 22:switch(Adp.Operator){case 0:case
3:Af0.Ax(A.aaL(A.ach.AQQ));break;default:Af0.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adp.Operator){case 0:case 3:Af0.Ax(A.aaL(A.ach.AQO));break;default:Af0.Ax(
A.aaL(A.ach.AvG));}break;default:;}}else if((AJA===1)&&(Ed===4)){ABo=true;Af0.Ax(
A.aaL(A.ach.AeI));}}else if((AJA===1)&&(Ed===4)){ABo=true;Af0.Ax(A.aaL(A.ach.AeI
));}Af0.Z(ABo);},_Init:function(aArg){C.YE._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.Ap._Init.call(
this.AeS={I:this},0);A.acg.Ap._Init.call(this.Jc={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);A.acg.Ap._Init.call(this.AeM={I:this},0);A.acg.Ap._Init.call(
this.AeR={I:this},0);A.acg.Ap._Init.call(this.AeQ={I:this},0);A.acg.Ap._Init.call(
this.AeN={I:this},0);A.acg.Ap._Init.call(this.AeP={I:this},0);A.acg.Ap._Init.call(
this.AeO={I:this},0);A.acg.Ap._Init.call(this.Nl={I:this},0);A.acg.Ap._Init.call(
this.N5={I:this},0);A.acg.Ap._Init.call(this.MF={I:this},0);this.__proto__=C.AjS;
this.Y.A1(0x3F);this.Y.H(AWI);this.Y.J3(3);this.IS.H(Ayt);this.AeS.H(AWJ);this.AeS.
Ai(true);this.Jc.H(As$);this.Jc.Ai(true);this.Nj.H(Ayu);this.Nj.Ai(true);this.AeM.
H(AWK);this.AeM.Ai(true);this.AeR.H(AHJ);this.AeR.Ai(true);this.AeQ.H(AHJ);this.
AeQ.Ai(true);this.AeN.H(AWL);this.AeN.Ai(true);this.AeP.H(AHK);this.AeP.Ai(true);
this.AeO.H(AHK);this.AeO.Ai(true);this.Nl.H(AHL);this.Nl.Ai(true);this.N5.H(AHM);
this.N5.Ai(true);this.Text.R(A.aaR(A.acf.None));this.MF.H(AHL);this.MF.Ai(true);
this.Iu(this.Gx,-3);this.Iu(this.D4,-3);this.Iu(this.A_,-3);this.Iu(this.AP,-2);
this.J(this.Y,-2);this.J(this.IS,-2);this.J(this.AeS,-2);this.J(this.Jc,-2);this.
J(this.Nj,-2);this.J(this.AeM,-2);this.J(this.AeR,-2);this.J(this.AeQ,-2);this.J(
this.AeN,-2);this.J(this.AeP,-2);this.J(this.AeO,-2);this.J(this.Nl,-2);this.J(this.
N5,-2);this.J(this.MF,0);this.IS.Ax(A.aaL(A.ach.AeI));this.AeS.Ax(A.aaL(A.ach.AQD
));this.Jc.Ax(A.aaL(A.ach.AP1));this.Nj.Ax(A.aaL(A.ach.ADR));this.AeM.Ax(A.aaL(A.
ach.Ag9));this.AeR.Ax(A.aaL(A.ach.AjY));this.AeQ.Ax(A.aaL(A.ach.AvG));this.AeN.Ax(
A.aaL(A.ach.AQA));this.AeP.Ax(A.aaL(A.ach.AQB));this.AeO.Ax(A.aaL(A.ach.AQz));this.
Nl.Ax(A.aaL(A.ach.ADT));this.N5.Ax(A.aaL(A.ach.AvK));this.MF.Ax(A.aaL(A.ach.ADZ)
);},_Done:function(){this.__proto__=C.YE;this.Y._Done();this.IS._Done();this.AeS.
_Done();this.Jc._Done();this.Nj._Done();this.AeM._Done();this.AeR._Done();this.AeQ.
_Done();this.AeN._Done();this.AeP._Done();this.AeO._Done();this.Nl._Done();this.
N5._Done();this.MF._Done();C.YE._Done.call(this);},_ReInit:function(){C.YE._ReInit.
call(this);this.Y._ReInit();this.IS._ReInit();this.AeS._ReInit();this.Jc._ReInit(
);this.Nj._ReInit();this.AeM._ReInit();this.AeR._ReInit();this.AeQ._ReInit();this.
AeN._ReInit();this.AeP._ReInit();this.AeO._ReInit();this.Nl._ReInit();this.N5._ReInit(
);this.MF._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.YE.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amz={H$:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);this.H$.G8();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rg.CC.call(this,G);},Aoc:function(){C.Rg.
Aoc.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).BAn(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).LB));this.C_.L(A._GetAutoObject(
A.acj.Temperature).BAq(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).LB));this.JX.L(A._GetAutoObject(A.acj.Temperature).BAo(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).LB));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).BAp(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).LB));this.MS.L(this.JX.AR);this.TemperatureUnit.
L(this.JX.AR);}break;default:;}},Z$:function(){C.Rg.Z$.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cu(A.aaL(A.ach.AQ1));this.N.C5(A.aaL(
A.ach.Am7));}break;case 4:{this.N.Cu(null);this.N.C5(A.aaL(A.ach.AvS));}break;default:;
}},W2:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).LB>3240)&&(A._GetAutoObject(A.Device.
Device).LB<5460)){A._GetAutoObject(A.Device.Device).AhQ();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H$.OnSetTemperature(A._GetAutoObject(
A.Device.Device).LB);var B3=A._GetAutoObject(A.Device.Converter).AsM(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).LB);this.H$.OnSetRatingTemperature(
B3);this.H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).FA();
}break;case 4:this.AKO(this);break;default:;}},AkY:function(G){C.Rg.AkY.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKO(this);break;default:;}},Ax4:function(
){C.Rg.Ax4.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JX.R(A._GetAutoObject(A.acj.Temperature).BAv(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).LB));break;default:;}},Ax5:function(
){C.Rg.Ax5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WO(A._GetAutoObject(A.acj.Temperature).BAr(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
LB));this.Jm.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WO(16711680
);this.Jm.As(true);}break;default:this.Jm.As(false);}},AU1:function(){this.C_.Ax(
A.aaL(A.ach.AvR));this.C_.Cx(A._GetAutoObject(A.acj.Temperature).BAw(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).LB));this.N3.Cx(
0);},_Init:function(aArg){C.Rg._Init.call(this,aArg);this.__proto__=C.Amz;this.Ds(
C.IQ);this.H$=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rg._Mark.
call(this,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhD={Ob:null,DM:null,Io:null,Bb:null,AuG:null,String:A.jV,AxT:A.jV,MJ:7,Akb:
2,KY:0,AVc:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DM.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DM.
S(A.aaL(A.fl.Bg));else this.DM.S(A.aaL(A.fl.Ak));this.Io.S(this.DM.B9);this.Io.H(
this.DM.M);this.Bb.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WT],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DM.R(E);},Ahy:function(
E){if(this.AxT===E)return;this.AxT=E;this.Io.R(E);},Acc:function(E){this.MJ=E;if(
E<10)this.ATw(2);else if(E<40)this.ATw(1);else this.ATw(0);A.pe([this,this.WT],this
);},WT:function(G){var B;while(!!this.Bb.Ah)this.HQ(this.Bb.Ah);if(this.MJ>1){var
Adk=this.AOY();var A2G=this.AOW();var Apu=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAi;var ALc;var Auf;var Ame=null;if(!!this.Ob&&(this.Ob.A0>0))Ame=this.Ob.K6;
while((Adk>=A2G)&&(Adk>0)){var AtS=A._NewObject(C.Ajw,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adk-A2G)/86400)|0))/this.MJ)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adk-A2G)/86400)|0)+1))/this.MJ)|0;while(!!Ame&&(Ame.Timestamp>=
Adk)){if(Ame.Timestamp<(Adk+86400))AtS.OC(Ame.A6,Ame.Timestamp);Ame=Ame.Ah;}var Aur=
0;if(AtS.A0>0)Aur=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]))/AtS.A0
)|0;else if(this.MJ<10){Aur=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]);
Auf=A._NewObject(A.acg.Text,0);Auf.H([x1,Apu,x2,Apu+Aur]);Auf.S(A.aaL(A.fl.Bg));
Auf.L(A.jb.Text);Auf.R(A.aaR(A.acf.Afj));this.J(Auf,0);}var AJ2=AtS.K6;var O=0;while(
!!AJ2){if(O>=AtS.A0)throw new Error(AWM);AAi=A._NewObject(A.acg.AK,0);AAi.L(A._GetAutoObject(
A.acj.Assessment).Qt(AJ2.A6));if(O===(AtS.A0-1))AAi.H([x1,Apu+(O*Aur),x2,this.Bb.
M[1]]);else AAi.H([x1,Apu+(O*Aur),x2,Apu+((O+1)*Aur)]);this.J(AAi,0);AJ2=AJ2.Ah;
O=O+1;}if(this.AVc){var By7=A._GetAutoObject(A.Device.Helper).Aqv(A._GetAutoObject(
A.Device.Helper).Dr());var By6=A._GetAutoObject(A.Device.Helper).Aqv(Adk);if(By7===
By6){var ALG=A._NewObject(A.acg.Aev,0);ALG.L(A.jb.Text);var BeN=(x1+this.Akb)+(((
x2-x1)/2)|0);ALG.H([BeN-4,this.Bb.M[1]-4,BeN+4,this.Bb.M[1]]);ALG.ZF(this.AuG);this.
J(ALG,0);}}Adk=Adk-86400;if(this.Akb>0){ALc=A._NewObject(A.acg.AK,0);ALc.H([x1,Apu
,x1+this.Akb,Apu+((((B=this.M)[3]-B[1])/2)|0)]);ALc.L(A.jb.Bb);this.J(ALc,0);}}}
},Ace:function(E){this.Ob=E;A.pe([this,this.WT],this);},ATw:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WT],this);},Dg:function(E){if(this.KY===
E)return;this.KY=E;this.DM.L(E);this.Io.L(E);},AOW:function(){var B;return this.
AOY()-(((((B=this.MJ)<0)?B+0x100000000:B)-1)*86400);},AOY:function(){return A._GetAutoObject(
A.Device.Converter).AhU();},Boh:function(E){if(this.AVc===E)return;this.AVc=E;A.
pe([this,this.WT],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DM={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0
);A.acg.AK._Init.call(this.Bb={I:this},0);C.Ax2._Init.call(this.AuG={I:this},0);
this.__proto__=C.AhD;this.H(BF);this.As(false);this.DM.H(AHN);this.DM.Ho(5);this.
DM.A4(0x11);this.DM.L(A.jb.Text);this.Io.H(AHN);this.Io.Ho(5);this.Io.A4(0x14);this.
Io.L(A.jb.Text);this.Bb.H(AWN);this.Bb.L(A.jb.Bb);this.KY=A.jb.Text;this.AuG.H(AWO
);this.J(this.DM,0);this.J(this.Io,0);this.J(this.Bb,0);this.DM.S(A.aaL(A.fl.Ak)
);this.Io.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DM._Done();this.Io._Done();this.Bb._Done();this.AuG._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DM._ReInit(
);this.Io._ReInit();this.Bb._ReInit();this.AuG._ReInit();this.DM.S(A.aaL(A.fl.Ak
));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.Ob)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5N={Ah:null,Timestamp:0,A6:0,_Init:function(
aArg){this.__proto__=C.A5N;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajw={K6:null,M6:null,A0:0,OC:
function(A9,Qk){var Hi;Hi=A._NewObject(C.A5N,0);Hi.A6=A9;Hi.Timestamp=Qk;if(!this.
K6){this.K6=Hi;this.M6=Hi;this.A0=1;}else{this.M6.Ah=Hi;this.M6=Hi;this.A0=this.
A0+1;}},_Init:function(aArg){this.__proto__=C.Ajw;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.El={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MX],this);},DG:function(G){var B;var Fg=0;var X=this.AV;switch(
this.Cr.CP){case 6:Fg=2;break;case 7:Fg=7;break;case 4:Fg=4;break;case 5:Fg=5;break;
default:;}X=this.QM(X,Fg,0x414);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HJ(X,true,null,null);this.DL(this);},Al7:function(G){A._GetAutoObject(C.A5
).FA();},ApP:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null).AgA)A.
pe((C.Cp.isPrototypeOf(B=this.AV)?B:null).AgA,this);},Fi:function(G){var B;this.
Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.
Y.Bs[1]);},DL:function(G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);if(
!!G0){this.N.Hz(A.jV);this.N.CS(G0.AxW);this.N.Jl.C0(255);this.N.GX.C0(G0.Axs);this.
N.AFo(G0.Avu);this.N.AnF(G0.AmY);this.N.C4(G0.AQu);this.N.C5(G0.Arc);G0.A3L(this
);}},MX:function(s){this.DL(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.El;this.Background.H(Rs);this.Background.L(A.jb.CV);this.N.H(U6);this.
N.As(false);this.N.Z(true);this.Y.H(Fd);this.Y.J3(1);this.Ay.H(Ix);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Eo=[this,this.Fi];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AUh={NO:null,ATb:null,Ad_:null,VQ:null,GW:null,PopupTimeout:null,Acj:null,AgK:
null,PopupIdToString:null,AtN:null,Text:A.jV,AkI:A.jV,AKj:A.jV,Ak5:0,ALq:-1,AzD:-
1,AKV:0,AUj:0,A2Q:false,CQ:function(){this.A$c(this.PopupIdToString.BU(this.AUj)
);},Init:function(aArg){this.BpL(this);},Bhz:function(G){var B;if(this.Ak5>0){this.
A$q((this.Ak5/1000)|0);this.PopupTimeout.WN(0);this.PopupTimeout.PZ(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxS(this);},Bhv:function(G){var M_=this.
Text;var Af3=this.AkI;var AKT=A.abi(16,A.jV,null);var index=0;var Azy=0;while(Af3
!==A.jV){Azy=Af3.indexOf(A.Device.PopupParamSeparator,0);if(Azy!==-1){AKT.Set(index
,A.ab1(Af3,Azy,(Af3.length-Azy)+1));Af3=A.ab1(Af3,0,Azy+1);index=index+1;if(index>=
16){A.ab5("%s",(AWP+Af3)+AWQ);Af3=A.jV;}}else{AKT.Set(index,Af3);Af3=A.jV;}}index=
0;while(index<M_.length){if((M_.charCodeAt(index)||0)===0x7B){var Ben=M_.indexOf(
String.fromCharCode(0x7D),index);if(Ben===-1){A.ab5("%s",(((AWR+M_)+AWS)+index.toFixed(
))+Alc);index=M_.length;}else{var Bge=(Ben-index)-1;var A4m=A.abW(M_,index+1,Bge
);var AKS=A.wz(A4m,-1,10);M_=A.ab1(M_,index,Bge+2);if(A4m===AWT)this.Boz(index);
else if(((AKS>0)&&(AKS<=16))&&(this.AkI!==A.jV)){M_=A.abU(M_,AKT.Get(AKS-1),index
);if(this.A2Q===true)this.Boy(A.wz(AKT.Get(AKS-1),0,10));}else A.ab5("%s",(AWU+A4m
)+AWV);}}index=index+1;}this.Box(M_);},CC:function(G){A.pe([this,this.Bhz],this);
},Aj:function(Ae){var B;this.Ad_.H(A.aaT(this.GW.Dd(),Ah1));this.VQ.H(A.aaT(this.
GW.Dd(),Ah1));if(!!this.NO){this.NO.H(A.abM(this.NO.M,this.GW.M[0]));this.NO.H(A.
abO(this.NO.M,this.GW.M[3]+10));this.NO.H(A.abL(this.NO.M,(B=this.GW.M)[2]-B[0])
);this.NO.H(A.abI(this.NO.M,8));this.Ad_.H(A.abh(A.aaT(this.GW.Dd(),Ah1),AHO));this.
VQ.H(A.abh(A.aaT(this.GW.Dd(),Ah1),AHO));}else{this.Ad_.H(A.aaT(this.GW.Dd(),Ah1
));this.VQ.H(A.aaT(this.GW.Dd(),Ah1));}},DG:function(G){var JL=(A.Core.BG.isPrototypeOf(
G)?G:null);if((JL.CP===4)&&((this.VQ.M[1]+this.M[1])<this.M[1])){this.GW.H(A.abO(
this.GW.M,this.GW.M[1]+28));this.Am();}else if((JL.CP===5)&&((this.VQ.M[3]+this.
M[1])>this.N.M[1])){this.GW.H(A.abO(this.GW.M,this.GW.M[1]-28));this.Am();}if((JL.
CP===6)&&!!this.D2().CF)this.D2().AFw(1);else if((JL.CP===7)&&!!this.D2().Ce)this.
D2().AFw(3);},H0:function(G){switch(this.D2().Aho){case 1:this.Al7(this);break;case
3:this.ApP(this);break;case 2:this.AAP(this);break;case 0:break;default:A.ab5("%s%e"
,AWW,this.D2().Aho);}},Al7:function(G){var B;(B=this.D2().CF)?B[1].call(B[0],this
):null;},ApP:function(G){var B;(B=this.D2().Ce)?B[1].call(B[0],this):null;},AAP:
function(G){var B;(B=this.D2().Cf)?B[1].call(B[0],this):null;},LY:function(G){this.
N.IT.L((this.N.IT.AR&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxS(this);},A$c:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhv],this);},BBC:function(G){var B;this.A$q(this.AzD-1);if(this.AzD<=0){this.PopupTimeout.
AxS(this);(B=this.ATb)?B[1].call(B[0],this):null;}},A$e:function(E){if(this.Ak5===
E)return;this.Ak5=E;A.pe([this,this.Bhz],this);},A_1:function(E){if(this.AkI===E
)return;this.AkI=E;A.pe([this,this.Bhv],this);},Box:function(E){if(this.AKj===E)
return;this.AKj=E;this.ABH(this);this.Bzc(this);},ABH:function(G){if((this.AzD!==-
1)&&(this.ALq!==-1)){var Bz7=this.AtN.Format(AWX);this.GW.R(A.abU(this.AKj,Bz7,this.
ALq));}else this.GW.R(this.AKj);this.GW.H(AHP);},Boz:function(E){if(this.ALq===E
)return;this.ALq=E;this.ABH(this);},A$q:function(E){if(this.AzD===E)return;this.
AzD=E;this.AtN.AF1(E);A.pe([this,this.ABH],this);},Bzc:function(G){this.GW.Dd();
if(this.GW.M[1]<=this.M[1])this.GW.H(A.abO(this.GW.M,28));this.Am();},A$s:function(
E){if(this.A2Q===E)return;this.A2Q=E;if(E===true)A.pe([this,this.BCc],this);},BCc:
function(G){if(!this.NO){this.NO=A._NewObject(A.acs.ADH,0);this.NO.Gh(0);this.NO.
EV(100);this.NO.OnSetAppearance(this.Acj);this.J(this.NO,0);this.AhG(this.NO,this.
GW);}this.NO.By(this.AKV);},Boy:function(E){if(this.AKV===E)return;this.AKV=E;if(
!!this.NO)this.NO.By(this.AKV);},BpL:function(G){var B;this.N.C0(0);this.AgK.An2(
this);},Bn8:function(E){if(this.AUj===E)return;this.AUj=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.Ad_={I:this},0);A.acg.BY._Init.
call(this.VQ={I:this},0);A.acg.Text._Init.call(this.GW={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADI._Init.call(this.Acj={I:this},
0);A.acl.Gp._Init.call(this.AgK={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bq._Init.call(this.AtN={I:this},0);this.
__proto__=C.AUh;var B;this.H(Cg);this.Background.H(Fd);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Em.As(false);this.Em.Z(false);this.Ad_.H(AHQ);this.
Ad_.L(A.jb.CL);this.VQ.H(AHQ);this.VQ.Nx(2);this.VQ.L(A.jb.Text);this.GW.H(AHP);
this.GW.Ho(10);this.GW.Jg(true);this.GW.Bov(0);this.GW.Lx(true);this.GW.L(A.jb.Text
);this.PopupTimeout.PZ(0);this.Acj.A$j(0);this.Acj.A$h(A.jb.AV);this.Acj.A$g(0);
this.Acj.AGe(AHy);this.AgK.HP(1);this.AgK.B4=255;this.AgK.Cy=0;this.Iu(this.Em,-
1);this.J(this.Ad_,0);this.J(this.VQ,0);this.J(this.GW,0);this.GW.S(A.aaL(A.fl.Af
));this.PopupTimeout.MN=[this,this.BBC];this.Acj.A$i(A.aaL(A.ach.N4));this.Acj.A$f(
A.aaL(A.ach.N4));this.AgK.Q=[B=this.N,B.Awr,B.A0O];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad_._Done();this.VQ._Done();this.GW._Done();this.PopupTimeout.
_Done();this.Acj._Done();this.AgK._Done();this.PopupIdToString._Done();this.AtN.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad_._ReInit();this.VQ._ReInit();this.GW._ReInit();this.PopupTimeout._ReInit();this.
Acj._ReInit();this.AgK._ReInit();this.PopupIdToString._ReInit();this.AtN._ReInit(
);this.GW.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATb)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtN)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.MB={Aj:function(Ae
){C.Cp.Aj.call(this,Ae);var FY=A.jb.CL;var GZ=A.jb.Text;if(this.Hm){FY=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LQ){this.Background.L(FY);this.V.L(A.jb.Am8);}else if(this.
Qx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KN){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.MB;},_className:"Application::DarkThemeMenuItem"
};C.Anm={AdJ:0,_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.
Anm;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaQ:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ls:function(){if(!this.BR){this.BR=A._NewObject(
C.N,0);this.BR.Ce=[this,this.A3M];this.BR.Cf=null;this.BR.CF=[this,this.AaQ];this.
BR.CS(A.aaR(A.acf.Ok));this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.AeG));}return this.
BR;},A3M:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null))(C.Cp.isPrototypeOf(
B=this.AV)?B:null).H0(this);},CC:function(G){},AIX:function(s){this.CC(s);},E4:function(
G){},AyU:function(s){this.E4(s);},_Init:function(aArg){C.Abs._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APV={Wh:
null,Y0:null,YT:null,Init:function(aArg){this.Ba(this.Wh);},AdA:function(G){var Aa=(
C.Cp.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.Y0)A._GetAutoObject(A.Device.
Device).AZ(6,true,A.jV,0,[this,this.BCq]);else if(Aa===this.Wh)A._GetAutoObject(
A.Device.Device).AZ(9,true,A.jV,0,[this,this.BCL]);else if(Aa===this.YT)A._GetAutoObject(
C.A5).Cc(4);else throw new Error(Ayv);A._GetAutoObject(A.Device.Device).Dw(0);},
BCq:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGB();},BCL:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).AxJ();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.MB._Init.call(this.Wh={I:this},0);C.MB._Init.call(this.Y0={I:this
},0);C.MB._Init.call(this.YT={I:this},0);this.__proto__=C.APV;this.H(AcW);this.Wh.
H(BF);this.Wh.As(true);this.Wh.T(A.aaR(A.acf.A$8));this.Wh.Bh(true);this.Y0.H(I2
);this.Y0.As(true);this.Y0.T(A.aaR(A.acf.A$P));this.Y0.Bh(true);this.YT.H(Qe);this.
YT.As(true);this.YT.T(A.aaR(A.acf.S1));this.YT.Bh(true);this.J(this.Wh,0);this.J(
this.Y0,0);this.J(this.YT,0);this.Wh.AQ=[this,this.AdA];this.Y0.AQ=[this,this.AdA
];this.YT.AQ=[this,this.AdA];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wh._Done();this.Y0._Done();this.YT._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wh._ReInit(
);this.Y0._ReInit();this.YT._ReInit();this.Wh.T(A.aaR(A.acf.A$8));this.Y0.T(A.aaR(
A.acf.A$P));this.YT.T(A.aaR(A.acf.S1));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GM={AaM:null,OverlayMenu:null,WX:null,A4H:null
,Lg:null,A4l:null,AkK:null,N$:null,AAo:100,Bdj:false,Init:function(aArg){var B;A.
zX([this,this.BfI],[B=A._GetAutoObject(A.Device.Device),B.Aws,B.Ay3],0);A.zX([this
,this.BfD],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0M],0);A.zX([this,this.
A3E],[B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyW],0);A.zX([this,this.BA_],[
B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyV],0);A.zX([this,this.BA$],[B=A._GetAutoObject(
A.Device.Device),B.A89,B.BbK],0);A.zX([this,this.ApQ],[B=A._GetAutoObject(A.Device.
Device),B.AS4,B.A0U],0);A.zX([this,this.BfY],[B=A._GetAutoObject(A.Device.Device
),B.Ut,B.Vb],0);A.pe([this,this.BfI],this);A.pe([this,this.BfD],this);A.pe([this
,this.ApQ],this);A.pe([this,this.BfY],this);this.A4H.Au([B=this.WX,B.AEL,B.Zx]);
this.J(this.WX,0);this.Ba(this.WX);this.ByR(this);},Aj:function(Ae){},BfD:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEx){if(!this.AaM){this.AaM=A._NewObject(
C.Asz,0);this.AaM.H(A.abJ(this.AaM.M,this.WX.M.slice(0,2)));this.AaM.H(A.abO(this.
AaM.M,this.WX.M[3]-((B=this.AaM.M)[3]-B[1])));this.J(this.AaM,1);}}else{if(!!this.
AaM)this.HQ(this.AaM);this.AaM=null;}},BfI:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APV,0));break;case 8:this.Dw(A._NewObject(C.AMc,0));break;case 2:this.Dw(A._NewObject(
C.AL$,0));break;case 3:this.Dw(A._NewObject(C.AMg,0));break;case 4:this.Dw(A._NewObject(
C.AUB,0));break;case 5:this.Dw(A._NewObject(C.AV_,0));break;case 6:this.Dw(A._NewObject(
C.AUc,0));break;case 7:this.Dw(A._NewObject(C.AmB,0));break;case 11:this.Dw(A._NewObject(
C.AMK,0));break;case 12:this.Dw(A._NewObject(C.AMJ,0));break;case 9:this.Dw(A._NewObject(
C.AR5,0));break;case 10:this.Dw(A._NewObject(C.AMF,0));break;case 14:this.Dw(A._NewObject(
C.AR1,0));break;case 15:this.Dw(A._NewObject(C.AR2,0));break;case 13:this.Dw(A._NewObject(
C.AR3,0));break;case 16:this.Dw(A._NewObject(C.AM5,0));break;default:throw new Error(
AWY+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WR).ArN(
null);this.N$.AqL(this.OverlayMenu,A._GetAutoObject(C.AxM),null,null,[B=this.OverlayMenu
,B.AyU],null,true);this.Ba(this.WX);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N$.AkM(this.OverlayMenu,A._GetAutoObject(C.AxL),null,null,null,null,null,[B=this.
OverlayMenu,B.AIX],null,false);this.Ba(this.N$);A._GetAutoObject(C.WR).ArN(this.
OverlayMenu.Ls());}else if(!!this.Lg){this.Ba(this.N$);A._GetAutoObject(C.WR).ArN(
this.Lg.Akp().Ls());}},Aht:function(E){var B;if(this.Lg===E)return;if(!!this.Lg){
A._GetAutoObject(C.WR).ArN(null);this.N$.AqL(this.Lg.Akp(),A._GetAutoObject(C.Afo
),null,null,[B=this.Lg.Akp(),B.AyU],null,false);this.Ba(this.WX);}this.Lg=E;if(!
!this.Lg){this.N$.AkM(this.Lg.Akp(),A._GetAutoObject(C.Afo),null,null,null,null,
null,[this,this.Bmt],null,false);this.Ba(this.N$);A._GetAutoObject(C.WR).ArN(this.
Lg.Akp().Ls());}else if(!!this.OverlayMenu){this.Ba(this.N$);A._GetAutoObject(C.
WR).ArN(this.OverlayMenu.Ls());}},ByR:function(G){var B;var F;this.J(this.A4l,0);(
F=A._GetAutoObject(C.WR),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WR).M)[3]-B[1]))));this.ZN(this.N$);},A3E:function(G){if(A._GetAutoObject(A.Device.
Device).AmI)switch(A._GetAutoObject(A.Device.Device).Im){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A5).Acg(4);break;default:if(A._GetAutoObject(A.Device.
Device).Abd<98)A._GetAutoObject(C.A5).Cc(4);}else{this.AAo=100;this.Bdt();}},BA_:
function(G){this.Bdt();},Bdt:function(){if(!A._GetAutoObject(A.Device.Device).AmI
){if(A._GetAutoObject(A.Device.Device).Abd<=2){if(this.AAo>2)switch(A._GetAutoObject(
A.Device.Device).Im){case 38:break;case 4:case 39:A._GetAutoObject(C.A5).Acg(38);
break;default:A._GetAutoObject(C.A5).Cc(38);}}else if(A._GetAutoObject(A.Device.
Device).Abd<=10){if(this.AAo>10)switch(A._GetAutoObject(A.Device.Device).Im){case
39:break;case 4:case 38:A._GetAutoObject(C.A5).Acg(39);break;default:A._GetAutoObject(
C.A5).Cc(39);}}else if(A._GetAutoObject(A.Device.Device).Abd<=20){if(this.AAo>20
)switch(A._GetAutoObject(A.Device.Device).Im){case 39:break;case 4:case 38:A._GetAutoObject(
C.A5).Acg(39);break;default:A._GetAutoObject(C.A5).Cc(39);}}else switch(A._GetAutoObject(
A.Device.Device).Im){case 38:case 4:case 39:A._GetAutoObject(C.A5).FA();break;default:;
}this.AAo=A._GetAutoObject(A.Device.Device).Abd;}},BA$:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqy){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AZ(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnC(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AZ(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnC(0
);}break;default:A.ab5("%s",AWZ+A._GetAutoObject(A.Device.Device).Aqy.toFixed());
}},ApQ:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A5).Cc(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Im===5)A._GetAutoObject(C.A5).Acg(3);break;
default:;}},BfY:function(G){switch(A._GetAutoObject(A.Device.Device).P6.Z_){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).UA(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WO(65535);A._GetAutoObject(A.Device.Device).UA(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WO(255);A._GetAutoObject(A.Device.Device).UA(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WO(16776960);A._GetAutoObject(
A.Device.Device).UA(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WO(16711935
);A._GetAutoObject(A.Device.Device).UA(true);}break;default:A.ab5("%s",AW0+A._GetAutoObject(
A.Device.Device).P6.Z_.toFixed());}this.Bow(A._GetAutoObject(A.Device.Helper).ARw(
));},Bmt:function(G){var B;this.Lg.Akp().CC(this);this.Lg.BBA(this);},Bow:function(
E){if(this.Bdj===E)return;this.Bdj=E;if(E){if(A._GetAutoObject(A.Device.Device).
Im===3)A._GetAutoObject(C.A5).Cc(27);else if(A._GetAutoObject(A.Device.Device).Im
!==27)A._GetAutoObject(A.Device.Device).AZ(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Im===27)A._GetAutoObject(A.Device.Device).AZ(112,true,A.jV,0,[this
,this.A1A]);},A1A:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Acg(85);}
,Blx:function(){return this.Lg;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkK._Init.call(this.AkK={I:this},0);C.N$._Init.call(this.N$={I:this},0);this.
__proto__=C.GM;this.H(Cg);this.N$.H(Rs);this.J(this.N$,0);this.WX=A._NewObject(C.
WX,0);this.A4H=A._GetAutoObject(C.A5);this.AkK.ANM=[this,this.Blx,this.Aht];this.
A4l=A._GetAutoObject(C.WR);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkK._Done();this.N$._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkK._ReInit();this.N$._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WX)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4H)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4l)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abs={A$D:
null,BR:null,N:null,Cr:null,And:null,Anf:null,QW:null,Ane:null,Anb:null,Anh:null
,Anc:null,DG:function(G){var Fg=0;var X=this.AV;switch(this.Cr.CP){case 6:Fg=2;break;
case 7:Fg=7;break;case 4:Fg=4;break;case 5:Fg=5;break;default:;}X=this.QM(X,Fg,0x14
);if(!!X)this.Ba(X);},Bck:function(s){this.DG(s);},Al7:function(G){var D8=(A.Core.
BG.isPrototypeOf(G)?G:null);if(D8.Acr&&(this.D2().Ast===false))return;A.pe(this.
D2().CF,this);},AI_:function(s){this.Al7(s);},ApP:function(G){var D8=(A.Core.BG.
isPrototypeOf(G)?G:null);if(D8.Acr&&(this.D2().ZM===false))return;A.pe(this.D2().
Ce,this);},AJa:function(s){this.ApP(s);},H0:function(G){if(this.QW.Acr)return;},
Alo:function(s){this.H0(s);},AAP:function(G){var D8=(A.Core.BG.isPrototypeOf(G)?
G:null);if(D8.Acr&&(this.D2().WU===false))return;A.pe(this.D2().Cf,this);},AI$:function(
s){this.AAP(s);},D2:function(){if(!!this.Ls())return this.BR;else return this.N;
},Ls:function(){return this.BR;},Gu:function(E){this.A$D=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BG._Init.
call(this.Cr={I:this},0);A.Core.BG._Init.call(this.And={I:this},0);A.Core.BG._Init.
call(this.Anf={I:this},0);A.Core.BG._Init.call(this.QW={I:this},0);A.Core.BG._Init.
call(this.Ane={I:this},0);A.Core.BG._Init.call(this.Anb={I:this},0);A.Core.BG._Init.
call(this.Anh={I:this},0);A.Core.BG._Init.call(this.Anc={I:this},0);this.__proto__=
C.Abs;this.H([0,0,C.AsB[0],C.AsB[1]]);this.N.H(U6);this.N.As(false);this.N.Z(false
);this.Cr.Filter=147;this.And.Filter=26;this.Anf.Filter=28;this.QW.Filter=1;this.
Ane.Filter=27;this.Anb.Filter=44;this.Anh.Filter=9;this.Anc.Filter=42;this.J(this.
N,0);this.Cr.BH=[this,this.Bck];this.Cr.D3=[this,this.Bck];this.And.BH=[this,this.
AI_];this.And.D3=[this,this.AI_];this.Anf.BH=[this,this.AJa];this.Anf.D3=[this,this.
AJa];this.QW.BH=[this,this.Alo];this.QW.D3=[this,this.Alo];this.Ane.BH=[this,this.
AI$];this.Ane.D3=[this,this.AI$];this.Anb.BH=[this,this.AI_];this.Anb.D3=[this,this.
AI_];this.Anh.BH=[this,this.AJa];this.Anh.D3=[this,this.AJa];this.Anc.BH=[this,this.
AI$];this.Anc.D3=[this,this.AI$];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.And._Done();this.Anf._Done();this.QW._Done();this.
Ane._Done();this.Anb._Done();this.Anh._Done();this.Anc._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.And._ReInit();this.Anf._ReInit();this.QW._ReInit();this.Ane._ReInit(
);this.Anb._ReInit();this.Anh._ReInit();this.Anc._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$D)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.And)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxL={_Init:function(){A.acl.AGY._Init.call(this,0);this.Kn=0x22;this.Aec=true;
this.Au9=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxM={_Init:function(){A.acl.AGY._Init.call(this,0);this.Kn=0x22;this.Aec=true;
this.Au9=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AVa={Sk:function(){var B;var Ao=(A.acl.Afh.isPrototypeOf(B=A.acl.Aes.Sk.call(this
))?B:null);if(!Ao)throw new Error(Ata);Ao.Cq.Cy=100;return Ao;},Sj:function(){var
B;var Ao=(A.acl.Axt.isPrototypeOf(B=A.acl.Aes.Sj.call(this))?B:null);if(!Ao)throw new
Error(Ata);Ao.E1.B4=100;return Ao;},_Init:function(aArg){A.acl.Aes._Init.call(this
,aArg);this.__proto__=C.AVa;},_className:"Application::ShadeTransition"};C.Am4={
Aha:null,S7:null,HT:null,DT:null,AnimalId:-1,GroupId:-1,ADo:true,Dg:function(E){
C.BS.Dg.call(this,E);this.S7.L(E);this.HT.L(E);this.Aha.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.acf.Afj)
);else this.HT.R(E.toFixed());},Aca:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S7.R(A.aaR(A.acf.Afj));else this.S7.R(E.toFixed());},DY:function(
G){},NC:function(s){this.DY(s);},A_I:function(E){if(this.ADo===E)return;this.ADo=
E;this.S7.Z(this.ADo);this.Aha.Z(this.ADo);},_Init:function(aArg){C.BS._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aha={I:this},0);A.acg.Text._Init.call(this.S7={
I:this},0);A.acg.Text._Init.call(this.HT={I:this},0);C.DT._Init.call(this.DT={I:
this},0);this.__proto__=C.Am4;this.Aha.H(AW1);this.S7.H(AW2);this.S7.A4(0x11);this.
S7.R(A.aaR(A.acf.Afj));this.HT.H(AW3);this.HT.A4(0x11);this.HT.R(A.aaR(A.acf.Afj
));this.DT.H(AW4);this.J(this.Aha,0);this.J(this.S7,0);this.J(this.HT,0);this.J(
this.DT,0);this.Aha.Ax(A.aaL(A.ach.AQJ));this.S7.S(A.aaL(A.fl.Af));this.HT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BS;this.Aha._Done();this.S7._Done(
);this.HT._Done();this.DT._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS.
_ReInit.call(this);this.Aha._ReInit();this.S7._ReInit();this.HT._ReInit();this.DT.
_ReInit();this.S7.R(A.aaR(A.acf.Afj));this.HT.R(A.aaR(A.acf.Afj));this.S7.S(A.aaL(
A.fl.Af));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.call(this
,D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADy={Init:function(
aArg){var B;A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,B.SS
],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper).W,B.A9s,B.AnJ],0);
A.zV([this,this.NC],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.NC],[
B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.ED],0);A.zX([this,this.NC],[B=A._GetAutoObject(
A.Device.Helper).W,B.A96,B.Axp],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9j,B.Ae9],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9k,B.Uy],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper).W,B.
A9n,B.Afa],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Helper).W,B.A9r,B.
Afc],0);A.pe([this,this.NC],this);},Dg:function(E){C.Am4.Dg.call(this,E);this.DT.
Dg(E);},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq4()){this.Aca(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Aca(-1);this.OnSetAnimalId(-1);}this.DT.
ED(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DT.AFi(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DT.Ae9(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DT.Uy(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DT.Afa(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DT.Afc(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am4._Init.call(this,aArg);this.
__proto__=C.ADy;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kq={AhR:A.abi(3,A.jV,null),BJ:A.abi(3,0,{0:7,1:30,2:90}),Anq:3,Dv:function(){
if(this.Anq<3)return this.Anq;else return 3;},C8:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anq))return-1;return this.BJ.Get(aIndex);},Ge:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anq))return AW5;return this.AhR.Get(aIndex);},D0:function(
A9){var O=0;while((O<3)&&(O<=this.Anq)){if(this.BJ.Get(O)===A9)return O;O=O+1;}return-
1;},H7:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anq)){if(this.BJ.Get(
O)>max)max=this.BJ.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhR=[]).__proto__=C.Kq.AhR;(this.BJ=[]).__proto__=C.Kq.BJ;this.
__proto__=C.Kq;this.AhR.Set(0,A.aaR(A.acf.A75));this.AhR.Set(1,A.aaR(A.acf.A73));
this.AhR.Set(2,A.aaR(A.acf.A74));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhR.Set(0,A.aaR(A.acf.A75));this.AhR.Set(1,A.aaR(A.acf.A73));this.AhR.Set(2,A.aaR(
A.acf.A74));},_className:"Application::Days"};C.AU9={AmD:null,BX:null,Q_:null,QJ:
null,Baw:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBW],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},Bl:function(
aSize){},Aj:function(Ae){var B;var F;C.Dt.Aj.call(this,Ae);var Fv=((Ae&0x20)===0x20
);var GG=this.Bo.Bw;this.BX.L(A.jb.Bm);if(!!this.Q)this.BX.R(((AW6+A._GetAutoObject(
A.Device.Converter).Ak3((F=this.Q,F[1].call(F[0]))))+CJ)+A._GetAutoObject(A.acj.
Temperature).AlQ());this.H8.Z((this.AM<A._GetAutoObject(A.Device.Helper).A7p())&&(
Fv||GG));},C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));
},Ki:function(G){var F;var BQ=this.AM;C.Dt.Ki.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A7p()){this.By(this.AM+10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kd:function(G){var F;var BQ=this.
AM;C.Dt.Kd.call(this,G);this.By(this.AM-10);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A$l:function(E){if(this.Baw===E)return;
this.Baw=E;this.Am();},BBW:function(G){this.Am();},_Init:function(aArg){C.Dt._Init.
call(this,aArg);A.acg.AK._Init.call(this.AmD={I:this},0);C.CG._Init.call(this.BX={
I:this},0);A.acg.AK._Init.call(this.Q_={I:this},0);A.acg.Ap._Init.call(this.QJ={
I:this},0);this.__proto__=C.AU9;this.H(Aap);this.Background.H(Aap);this.V.H(Atb);
this.V.L(A.jb.Bm);this.AmD.H(AW7);this.AmD.L(A.jb.AfA);this.Hy.H(AW8);this.BX.H(
AW9);this.BX.A4(0x12);this.BX.L(A.jb.Text);this.H8.H(AW_);this.Q_.H(AW$);this.Q_.
L(A.jb.E2);this.QJ.H(AXa);this.J(this.AmD,-2);this.J(this.BX,-1);this.J(this.Q_,
0);this.J(this.QJ,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BX.
S(A.aaL(A.fl.EL));this.BX.AY(A.aaL(A.fl.Af));this.QJ.Ax(A.aaL(A.ach.ADO));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dt;this.AmD._Done();this.BX._Done();this.
Q_._Done();this.QJ._Done();C.Dt._Done.call(this);},_ReInit:function(){C.Dt._ReInit.
call(this);this.AmD._ReInit();this.BX._ReInit();this.Q_._ReInit();this.QJ._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BX.S(A.aaL(A.fl.EL));this.
BX.AY(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.
AmD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnY={Q:null
,Ai5:null,Init:function(aArg){var B;A.zX([this,this.Bch],[B=A._GetAutoObject(A.Device.
Device),B.AEL,B.BbD],0);A.pe([this,this.Bch],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Acg:function(Alt){A._GetAutoObject(A.Device.Device).Zx(Alt
);},AKI:function(G){if(this.K&&this.K.AKI)return this.K.AKI.apply(this,arguments
);else return C.AnY.Bco.apply(this,arguments);},Bco:function(G){var F;if(!this.Q
){A.ab5("%s",AXb);return;}var Bz=null;if(this.Ai5.Contains(A._GetAutoObject(A.Device.
Device).Im)){Bz=this.Ai5.A$B();while(!!Bz&&(Bz.Aob!==A._GetAutoObject(A.Device.Device
).Im))Bz=this.Ai5.A$B();}if(!Bz)Bz=this.BAu(A._GetAutoObject(A.Device.Device).Im
);(F=this.Q,F[2].call(F[0],Bz));},Bch:function(s){this.AKI(s);},BAu:function(Alt
){var Bz=null;switch(Alt){case 0:case 1:Bz=A._NewObject(C.AVg,0);break;case 2:Bz=
A._NewObject(C.X$,0);break;case 3:Bz=A._NewObject(C.AvF,0);break;case 53:Bz=A._NewObject(
C.AVX,0);break;case 77:Bz=A._NewObject(C.NewMenu,0);break;case 27:Bz=A._NewObject(
C.ASj,0);break;case 6:Bz=A._NewObject(C.ARU,0);break;case 16:Bz=A._NewObject(C.ANU
,0);break;case 22:Bz=A._NewObject(C.AVS,0);break;case 17:Bz=A._NewObject(C.AVx,0
);break;case 42:Bz=A._NewObject(C.ANR,0);break;case 87:Bz=A._NewObject(C.AUJ,0);
break;case 88:Bz=A._NewObject(C.AUI,0);break;case 89:Bz=A._NewObject(C.AVN,0);break;
case 95:Bz=A._NewObject(C.AVQ,0);break;case 23:Bz=A._NewObject(C.AWf,0);break;case
18:Bz=A._NewObject(C.AN7,0);break;case 19:Bz=A._NewObject(C.AUK,0);break;case 37:
Bz=A._NewObject(C.ARj,0);break;case 76:Bz=A._NewObject(C.AUp,0);break;case 63:Bz=
A._NewObject(C.AN5,0);break;case 64:Bz=A._NewObject(C.AN6,0);break;case 82:Bz=A.
_NewObject(C.AN4,0);break;case 83:Bz=A._NewObject(C.AN2,0);break;case 92:Bz=A._NewObject(
C.AN0,0);break;case 93:Bz=A._NewObject(C.AN3,0);break;case 65:Bz=A._NewObject(C.
AN1,0);break;case 5:Bz=A._NewObject(C.AVq,0);break;case 4:Bz=A._NewObject(C.Aee,
0);break;case 39:Bz=A._NewObject(C.ANq,0);break;case 38:Bz=A._NewObject(C.ANJ,0);
break;case 28:Bz=A._NewObject(C.WE,0);break;case 7:Bz=A._NewObject(C.AqO,0);break;
case 81:Bz=A._NewObject(C.AOc,0);break;case 31:Bz=A._NewObject(C.ArB,0);break;case
78:Bz=A._NewObject(C.ASh,0);break;case 34:Bz=A._NewObject(C.AL9,0);break;case 35:
Bz=A._NewObject(C.ManualActionScanScreen,0);break;case 32:Bz=A._NewObject(C.SetTransponderScreen
,0);break;case 45:Bz=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:Bz=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:Bz=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:Bz=A._NewObject(C.MotherScanScreen
,0);break;case 80:Bz=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:Bz=A._NewObject(
C.GL,0);break;case 9:Bz=A._NewObject(C.I$,0);break;case 24:Bz=A._NewObject(C.AMo
,0);break;case 10:Bz=A._NewObject(C.Amz,0);break;case 21:Bz=A._NewObject(C.AMs,0
);break;case 11:Bz=A._NewObject(C.AMr,0);break;case 29:Bz=A._NewObject(C.AuS,0);
break;case 48:Bz=A._NewObject(C.AMq,0);break;case 30:Bz=A._NewObject(C.AMp,0);break;
case 12:Bz=A._NewObject(C.AMn,0);break;case 40:Bz=A._NewObject(C.AMm,0);break;case
14:Bz=A._NewObject(C.ANH,0);break;case 13:Bz=A._NewObject(C.ANI,0);break;case 20:
Bz=A._NewObject(C.AV8,0);break;case 41:Bz=A._NewObject(C.AV7,0);break;case 43:Bz=
A._NewObject(C.AOP,0);break;case 44:Bz=A._NewObject(C.AOO,0);break;case 61:Bz=A.
_NewObject(C.AOb,0);break;case 62:Bz=A._NewObject(C.AOa,0);break;case 46:Bz=A._NewObject(
C.ASw,0);break;case 47:Bz=A._NewObject(C.ASv,0);break;case 85:Bz=A._NewObject(C.
AWl,0);break;case 86:Bz=A._NewObject(C.AWk,0);break;case 71:Bz=A._NewObject(C.ASr
,0);break;case 72:Bz=A._NewObject(C.ASq,0);break;case 74:Bz=A._NewObject(C.AM7,0
);break;case 90:Bz=A._NewObject(C.AUr,0);break;case 73:Bz=A._NewObject(C.AUL,0);
break;case 51:Bz=A._NewObject(C.AMb,0);break;case 52:Bz=A._NewObject(C.AMa,0);break;
case 15:Bz=A._NewObject(C.AUy,0);break;case 60:Bz=A._NewObject(C.AVw,0);break;case
69:Bz=A._NewObject(C.ARS,0);break;case 70:Bz=A._NewObject(C.ARR,0);break;case 26:
Bz=A._NewObject(C.ASk,0);break;case 54:Bz=A._NewObject(C.ASg,0);break;case 25:Bz=
A._NewObject(C.AOp,0);break;case 66:Bz=A._NewObject(C.AOq,0);break;case 59:Bz=A.
_NewObject(C.AOo,0);break;case 58:Bz=A._NewObject(C.AOr,0);break;case 56:Bz=A._NewObject(
C.AOs,0);break;case 57:Bz=A._NewObject(C.AqR,0);break;case 68:Bz=A._NewObject(C.
AOt,0);break;case 67:Bz=A._NewObject(C.AOm,0);break;case 84:Bz=A._NewObject(C.AMu
,0);break;case 33:Bz=A._NewObject(C.WeightListScreen,0);break;case 36:Bz=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:Bz=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:Bz=A._NewObject(C.AMH,0);break;case 91:Bz=A._NewObject(C.AVB,0
);break;case 94:Bz=A._NewObject(C.Aqj,0);break;default:throw new Error(AXc);}if(
!!Bz)Bz.Aob=Alt;return Bz;},Cc:function(Alt){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AXd);else this.Ai5.BoZ((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zx(Alt);},FA:function(){var Bgv=3;var Bgu=this.Ai5.BoP();if(!!Bgu
)Bgv=Bgu.Aob;else A.ab5("%s",AXe);A._GetAutoObject(A.Device.Device).Zx(Bgv);},_Init:
function(aArg){C.A$X._Init.call(this.Ai5={I:this},0);this.__proto__=C.AnY;this.Init(
aArg);var Ka=this._variants();if(Ka){this.K={};Ka._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai5.
_Done();A.h7--;},_ReInit:function(){this.Ai5._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnY._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A5={_Init:function(){C.AnY._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGt={H$:null,YG:null,Afk:null,AaT:null,MO:
null,AzJ:1,RatingMode:0,RatedAttribute:0,CQ:function(){this.YG.R(this.Bd1(this.RatedAttribute
));this.AKN(this);},Aj:function(Ae){this.MO.R(A._GetAutoObject(A.Device.Helper).
MR(A.aaR(A.acf.AR9),Pc,this.AzJ.toFixed()));if(this.RatingMode===1)this.MO.Z(true
);else this.MO.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);this.H$.G8();this.H$.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxE(this.
H$,5);A.zX([this,this.AKN],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0R],0);
A.zX([this,this.AKN],[B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.ED],0);A.pe([
this,this.AKN],this);},AsJ:function(G){var a=this.AKr(this.RatedAttribute);this.
BgL();this.AzJ=this.AzJ-1;this.Am();if(!a)this.ASe();else this.SR(a);},W2:function(
G){var a=this.Bd8(this.RatedAttribute);this.BgL();this.AzJ=this.AzJ+1;this.Am();
if(!a)this.A8r();else this.SR(a);},AKr:function(NE){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NE){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHR);},Bd8:function(NE){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NE){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHR);},SR:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YG.R(this.Bd1(E));this.
DL(E);this.Afk.AnO(this.H$.BjG(E));if(!this.AKr(E)){if(this.ARs())this.N.Cu(A.aaL(
A.ach.AeJ));else this.N.Cu(null);}else this.N.Cu(A.aaL(A.ach.AeG));},Bd1:function(
NE){return this.AaT.BU(NE);},BAt:function(NE){if(!!NE){var a=this.AKr(NE);if(!a)
return A.jV;else return this.Bd2(a);}else return A.jV;},BAs:function(NE){if(!!NE
){var a=this.Bd8(NE);if(!a)return A.jV;else return this.Bd2(a);}else return A.jV;
},ASe:function(){},A8r:function(){},A7q:function(){return null;},Bd2:function(NE
){return this.AaT.LC(NE);},BgL:function(){if(!!this.RatedAttribute)this.H$.Bpz(this.
RatedAttribute,this.Afk.A6);},AKN:function(G){if(this.ARs())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SR(2);this.DL(this.RatedAttribute
);this.Am();},AdB:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkY:function(G){var a=this.AKr(this.RatedAttribute);if(!a){if(this.ARs())this.
AdB(this);}else this.ASe();},DL:function(NE){this.N.Hz(this.BAt(NE));if(!!this.N.
An7){this.N.C4(null);this.N.OX(true);}else{this.N.C4(A.aaL(A.ach.AeG));this.N.OX(
false);}this.N.CS(this.BAs(NE));if(!!this.N.An9){this.N.C5(null);this.N.OY(true);
}else{this.N.C5(this.A7q());this.N.OY(false);}},ARs:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alg,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YG={
I:this},0);C.Rating._Init.call(this.Afk={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaT={I:this},0);A.acg.Text._Init.call(this.MO={I:this},0);this.__proto__=
C.AGt;this.Background.L(A.jb.CL);this.N.Z(true);this.Ds(C.IQ);this.YG.H(AXf);this.
YG.Lx(true);this.YG.L(A.jb.Text);this.Afk.H(AXg);this.MO.H(AXh);this.MO.A4(0x14);
this.MO.R(A.aaR(A.acf.AR9));this.MO.L(A.jb.Text);this.J(this.YG,0);this.J(this.Afk
,0);this.J(this.MO,0);this.Ba(this.Afk);this.N.CF=[this,this.AsJ];this.N.Cf=[this
,this.AkY];this.N.Ce=[this,this.W2];this.YG.S(A.aaL(A.fl.Af));this.Afk.AQ=[this,
this.W2];this.MO.S(A.aaL(A.fl.Af));this.H$=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YG._Done();this.Afk._Done();this.AaT._Done();
this.MO._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YG._ReInit();this.Afk._ReInit();this.AaT._ReInit();this.MO._ReInit();this.
MO.R(A.aaR(A.acf.AR9));this.YG.S(A.aaL(A.fl.Af));this.MO.S(A.aaL(A.fl.Af));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H2={Y:null,Gender:null,AnimalType:null,Breed:null,Jo:null,Pt:null,As0:null,B1:
null,Db:null,C$:null,CI:null,Gq:null,Je:null,Ay:null,D5:null,KQ:0,Init:function(
aArg){A.zX([this,this.Bci],this.B1.Q,0);A.pe([this,this.Bci],this);A.pe([this,this.
ABm],this);},Aj:function(Ae){C.AB.Aj.call(this,Ae);A._GetAutoObject(A.Device.Helper
).ANE(this.Y);},DG:function(G){var B;var Fg=0;var X=this.AV;switch(this.Cr.CP){case
6:Fg=2;break;case 7:Fg=7;break;case 4:Fg=4;break;case 5:Fg=5;break;default:;}X=this.
QM(X,Fg,0x415);if(!!X)this.Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,
null,null);this.ABm(this);},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3
]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},Ae4:function(
E){if(this.KQ===E)return;this.KQ=E;A.abo([this,this.Awd,this.Ae4],0);},ABm:function(
G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C4(
A.aaL(A.ach.E3));this.N.CF=[this,this.AI9];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JH.C0(255);this.N.ArU(G0.AqW);this.N.Cu(G0.AvN);this.N.Cf=G0.Amv;}else{this.N.
E6(A.jV);this.N.Cu(null);this.N.Cf=null;}if(!!G0&&!!G0.AgA){this.N.CS(G0.AxW);this.
N.GX.C0(G0.Axs);this.N.AnF(G0.AmY);this.N.C5(G0.Arc);this.N.Ce=G0.AgA;}else this.
Aut();},Agl:function(G){A.ab5("%s",Ayw);},Ay6:function(s){this.Agl(s);},Ex:function(
G){A.ab5("%s",Ayw);},AI9:function(s){this.Ex(s);},Aut:function(){A.ab5("%s",Alh);
},Al4:function(G){A.ab5("%s",Ayw);},Ac0:function(s){this.Al4(s);},JR:function(Ag
){this.Ba(Ag);this.Y.HJ(Ag,true,null,null);this.Y.VH(null,null);},ApL:function(G
){var F;this.C$.Ahx(A._GetAutoObject(A.Device.Helper).AbA((F=this.B1.Q,F[1].call(
F[0]))));},Bci:function(s){this.ApL(s);},Awd:function(){return this.KQ;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UX._Init.call(this.Jo={I:this},
0);A.Device.Nc._Init.call(this.Pt={I:this},0);A.Device.K3._Init.call(this.As0={I:
this},0);C.BW._Init.call(this.B1={I:this},0);C.BW._Init.call(this.Db={I:this},0);
C.AkW._Init.call(this.C$={I:this},0);C.AxH._Init.call(this.CI={I:this},0);C.AsE.
_Init.call(this.Gq={I:this},0);C.ZU._Init.call(this.Je={I:this},0);C.Ay._Init.call(
this.Ay={I:this},0);C.D5._Init.call(this.D5={I:this},0);this.__proto__=C.H2;var B;
this.N.Z(true);this.Ds(C.IQ);this.Y.H(Fd);this.Y.J3(1);this.KQ=A._GetAutoObject(
A.Device.Helper).AbA(this.AnimalType.Q);this.B1.H(Ali);this.B1.Ai(true);this.B1.
T(A.aaR(A.acf.Afz));this.Db.H(Ayx);this.Db.Ai(true);this.Db.T(A.aaR(A.acf.Afu));
this.C$.H(Aop);this.C$.Ai(true);this.C$.T(A.aaR(A.acf.KQ));this.C$.Gh(1000);this.
C$.EV(99000);this.C$.Ahx(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.Q
));this.CI.H(Ah2);this.CI.Ai(true);this.CI.T(A.aaR(A.acf.Breed));this.Gq.H(AXi);
this.Gq.Ai(true);this.Gq.T(A.aaR(A.acf.Jo));this.Je.H(AHS);this.Je.Ai(true);this.
Je.T(A.aaR(A.acf.AGq));this.Ay.H(Ayy);this.J(this.Y,0);this.J(this.B1,0);this.J(
this.Db,0);this.J(this.C$,0);this.J(this.CI,0);this.J(this.Gq,0);this.J(this.Je,
0);this.J(this.Ay,0);this.Y.Eo=[this,this.Fi];this.Gender.L9(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L9(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L9(A._GetAutoObject(A.Device.Helper).W);this.Jo.L9(A._GetAutoObject(A.Device.Helper
).W);this.B1.Au([B=this.AnimalType,B.Cb,B.Cd]);this.B1.CH(this.AnimalType);this.
Db.Au([B=this.Gender,B.Cb,B.Cd]);this.Db.CH(this.Gender);this.C$.Au([this,this.Awd
,this.Ae4]);this.CI.FT([this,this.D2,this.Gu]);this.CI.Lu([B=this.CI,B.F_]);this.
CI.Kz(A.aaL(A.ach.Edit));this.CI.Au([B=this.Breed,B.Cb,B.Cd]);this.CI.CH(this.Breed
);this.CI.AnE(this.Pt);this.Gq.FT([this,this.D2,this.Gu]);this.Gq.Lu([B=this.Gq,
B.F_]);this.Gq.Kz(A.aaL(A.ach.Edit));this.Gq.Au([B=this.Jo,B.Cb,B.Cd]);this.Gq.CH(
this.Jo);this.Gq.AnE(this.As0);this.Je.FT([this,this.D2,this.Gu]);this.Je.Kz(A.aaL(
A.ach.Edit));this.Je.CH(this.D5);this.Je.Afe([B=A._GetAutoObject(A.Device.Helper
).W,B.Awn,B.OV]);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Y._Done(
);this.Gender._Done();this.AnimalType._Done();this.Breed._Done();this.Jo._Done();
this.Pt._Done();this.As0._Done();this.B1._Done();this.Db._Done();this.C$._Done();
this.CI._Done();this.Gq._Done();this.Je._Done();this.Ay._Done();this.D5._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit(
);this.Gender._ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jo._ReInit(
);this.Pt._ReInit();this.As0._ReInit();this.B1._ReInit();this.Db._ReInit();this.
C$._ReInit();this.CI._ReInit();this.Gq._ReInit();this.Je._ReInit();this.Ay._ReInit(
);this.D5._ReInit();this.B1.T(A.aaR(A.acf.Afz));this.Db.T(A.aaR(A.acf.Afu));this.
C$.T(A.aaR(A.acf.KQ));this.CI.T(A.aaR(A.acf.Breed));this.Gq.T(A.aaR(A.acf.Jo));this.
Je.T(A.aaR(A.acf.AGq));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.B1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Je)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
WE={Azj:false,LY:function(G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(
A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.G8();A._GetAutoObject(A.Device.Helper
).Aqm(A._GetAutoObject(A.Device.Helper).W);},Aut:function(){this.N.CS(A.jV);this.
N.C5(A.aaL(A.ach.ADS));this.N.Ce=[this,this.Ay6];},CC:function(G){if(!this.Azj){
this.Azj=true;A.pe([this,this.Ac0],this);}else C.ArB.CC.call(this,G);},Al4:function(
G){A._GetAutoObject(C.A5).Cc(49);},_Init:function(aArg){C.ArB._Init.call(this,aArg
);this.__proto__=C.WE;this.Iu(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IQ={_Init:function(aArg){C.ADy._Init.call(this,aArg);this.__proto__=C.IQ;this.
A_I(false);},_className:"Application::HeaderSelectedAnimalId"};C.I$={Filter:null
,Gender:null,AnimalType:null,Transponder:null,En:null,Y:null,P8:null,Te:null,Oi:
null,Tf:null,NB:null,OD:null,RY:null,OE:null,RZ:null,NR:null,Li:null,Jy:null,K1:
null,MH:null,Yz:null,Tg:null,R0:null,Ay:null,Ax8:0,Ax7:0,AuQ:0,AuP:0,ArA:0,AsQ:0
,Avq:0,Avr:0,Am9:true,Amy:false,Aoh:false,Init:function(aArg){A.zX([this,this.Avw
],this.Li.Q,0);A.zX([this,this.AuU],this.Jy.Q,0);A.zX([this,this.BqJ],this.K1.Q,
0);A.zX([this,this.Bk2],this.MH.Q,0);A.zX([this,this.Brb],this.NB.Q,0);A.zX([this
,this.Bra],this.Oi.Q,0);A.zX([this,this.BhR],this.NR.Q,0);A.zX([this,this.BhQ],this.
OE.Q,0);this.Ba(this.P8);},DG:function(G){var Fg=0;var X=this.AV;switch(this.Cr.
CP){case 6:Fg=2;break;case 7:Fg=7;break;case 4:Fg=4;break;case 5:Fg=5;break;default:;
}X=this.QM(X,Fg,0x414);if(!!X)this.Ba(X);this.M3(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E_(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ex:function(G){A._GetAutoObject(
C.A5).FA();},A3A:function(G){var EF=(C.Aew.isPrototypeOf(G)?G:null);if(!EF)return;
var Aw=this.Filter.DN(EF.Es,EF.Operator);if(!!Aw){this.Filter.Nz(Aw);A.abo([this
,this.Fo,this.Fs],0);}else{if(EF.Es===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EF.Es===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else if(EF.Es===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A6=true;}else A.ab5("%s",AHT+EF.Es.toFixed());if(!!Aw){this.Filter.
CY(Aw);A.abo([this,this.Fo,this.Fs],0);}}},BA8:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A5).FA();},AAG:function(G){var EF=(
C.Am3.isPrototypeOf(G)?G:null);if(!EF)return;var Aw=this.Filter.DN(EF.Es,EF.Operator
);if(!!Aw){this.Filter.Nz(Aw);A.abo([this,this.Fo,this.Fs],0);}else{if(EF.Es===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;
}else if(EF.Es===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EK=
EF.Es;Aw.Operator=EF.Operator;}else if((EF.Es===22)||(EF.Es===26)){var A1x=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1x.EK=EF.Es;A1x.Operator=0;Aw=A1x;}else A.ab5(
"%s",AHT+EF.Es.toFixed());if(!!Aw){this.Filter.CY(Aw);A.abo([this,this.Fo,this.Fs
],0);}}},A_D:function(E){if(this.Avq===E)return;this.Avq=E;A.abo([this,this.BlG,
this.A_D],0);},A_E:function(E){if(this.Avr===E)return;this.Avr=E;A.abo([this,this.
BlH,this.A_E],0);},Avw:function(G){var F;this.A_E((F=this.Li.Q,F[1].call(F[0])));
var Aw=this.Filter.DN(7,0);if(!!Aw){var Az1=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!Az1)Az1.A6=this.Avr;else A.ab5("%s",AfL);}},AuU:function(G){var
F;this.A_D((F=this.Jy.Q,F[1].call(F[0])));var Aw=this.Filter.DN(14,0);if(!!Aw){var
Vd=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Vd)Vd.A6=
this.Avq;else A.ab5("%s",AfL);}},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},A$k:function(
E){if(this.AsQ===E)return;this.AsQ=E;A.abo([this,this.Bmg,this.A$k],0);},BqJ:function(
G){var F;this.A$k((F=this.K1.Q,F[1].call(F[0])));var Aw=this.Filter.DN(22,1);if(
!!Aw){var Ajd=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajd
)switch(this.AsQ){case 1:Ajd.Operator=5;break;case 0:Ajd.Operator=0;break;default:
A.ab5("%s%e",AHU,this.AsQ);}else A.ab5("%s",AfL);}},A_R:function(E){if(this.ArA===
E)return;this.ArA=E;A.abo([this,this.BlU,this.A_R],0);},Bk2:function(G){var F;this.
A_R((F=this.MH.Q,F[1].call(F[0])));var Aw=this.Filter.DN(26,1);if(!!Aw){var At9=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At9)switch(this.ArA
){case 1:At9.Operator=5;break;case 0:At9.Operator=0;break;default:A.ab5("%s%e",AHU
,this.ArA);}else A.ab5("%s",AfL);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P8.Bk([this,this.Fo,this.Fs]);this.Te.
Bk([this,this.Fo,this.Fs]);this.Oi.Bk([this,this.Fo,this.Fs]);this.Tf.Bk([this,this.
Fo,this.Fs]);this.NB.Bk([this,this.Fo,this.Fs]);this.OD.Bk([this,this.Fo,this.Fs
]);this.RY.Bk([this,this.Fo,this.Fs]);this.OE.Bk([this,this.Fo,this.Fs]);this.RZ.
Bk([this,this.Fo,this.Fs]);this.NR.Bk([this,this.Fo,this.Fs]);this.Li.Bk([this,this.
Fo,this.Fs]);this.Jy.Bk([this,this.Fo,this.Fs]);this.K1.Bk([this,this.Fo,this.Fs
]);this.MH.Bk([this,this.Fo,this.Fs]);this.Yz.Bk([this,this.Fo,this.Fs]);this.Tg.
Bk([this,this.Fo,this.Fs]);this.R0.Bk([this,this.Fo,this.Fs]);this.Asd(false);A.
pe([this,this.A5a],this);var BeL=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DN(1,2))?B:null);if(!!BeL){this.Asd(true);this.AGa(BeL.A6);}var Bec=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DN(1,3))?B:null);if(!!
Bec){this.Asd(true);this.AGb(Bec.A6);}this.ArQ(false);A.pe([this,this.ALt],this);
var BeK=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DN(4,3))?B:null
);if(!!BeK){this.ArQ(true);this.AE4(A._GetAutoObject(A.Device.Helper).Mg(BeK.A6,
A._GetAutoObject(A.Device.Helper).Dr()));}var Beb=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DN(4,2))?B:null);if(!!Beb){this.ArQ(true);this.AE6(A.
_GetAutoObject(A.Device.Helper).Mg(Beb.A6,A._GetAutoObject(A.Device.Helper).Dr()
)+1);}var Az1=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DN(7,0
))?B:null);if(!!Az1)this.Li.By(this.Gender.D0(Az1.A6));var Vd=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DN(14,0))?B:null);if(!!Vd)this.Jy.By(this.AnimalType.
D0(Vd.A6));var Ajd=this.Filter.DN(22,1);if(!!Ajd){if(!Ajd.Operator)this.K1.By(0);
else this.K1.By(1);}var At9=this.Filter.DN(26,1);if(!!At9){if(!At9.Operator)this.
MH.By(0);else this.MH.By(1);}},Fs:function(Aq){this.Bk(Aq);},AGb:function(E){if(
this.Ax8===E)return;this.Ax8=E;A.abo([this,this.A9Y,this.AGb],0);},AGa:function(
E){if(this.Ax7===E)return;this.Ax7=E;A.abo([this,this.A9X,this.AGa],0);},Brb:function(
G){var F;this.AGb((F=this.NB.Q,F[1].call(F[0])));var Aw=this.Filter.DN(1,3);if(!
!Aw){var ABK=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABK)
ABK.A6=this.Ax8;else A.ab5("%s",AfL);}},Bra:function(G){var F;this.AGa((F=this.Oi.
Q,F[1].call(F[0])));var Aw=this.Filter.DN(1,2);if(!!Aw){var ABK=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABK)ABK.A6=this.Ax7;else A.ab5("%s",AfL);}},Bfe:
function(G){var EF=(C.AjK.isPrototypeOf(G)?G:null);if(!EF)return;var Aw=this.Filter.
DN(EF.Es,EF.Operator);if(!!Aw){this.Filter.Nz(Aw);A.abo([this,this.Fo,this.Fs],0
);}else{if(EF===this.Te){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EK=
EF.Es;Aw.Operator=EF.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A6=this.Ax7;this.Ba(this.Oi);}else if(EF===this.Tf){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=this.Ax8;this.Ba(this.NB);}if(!!Aw){this.Filter.CY(
Aw);A.abo([this,this.Fo,this.Fs],0);}}A.pe([this,this.A5a],this);},A5a:function(
G){var A3i=!!this.Filter.DN(this.Oi.Es,this.Oi.Operator);var A5b=!!this.Filter.DN(
this.NB.Es,this.NB.Operator);A._GetAutoObject(A.Device.Helper).JG(this.Te,this.Aoh
);A._GetAutoObject(A.Device.Helper).JG(this.Tf,this.Aoh);A._GetAutoObject(A.Device.
Helper).JG(this.Oi,A3i);A._GetAutoObject(A.Device.Helper).JG(this.NB,A5b);},M3:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},BB3:function(G){A.pe([this,this.Fi],this);A.pe([this,this.
M3],this);},BA5:function(G){this.Asd(!this.Aoh);if(this.Aoh===false){var Aw=this.
Filter.DN(this.P8.Es,this.P8.Operator);while(!!Aw){this.Filter.Nz(Aw);Aw=this.Filter.
DN(this.P8.Es,this.P8.Operator);}A.abo([this,this.Fo,this.Fs],0);}},Asd:function(
E){if(this.Aoh===E)return;this.Aoh=E;A.abo([this,this.A9W,this.Asd],0);A.pe([this
,this.A5a],this);},AE6:function(E){if(this.AuQ===E)return;this.AuQ=E;A.abo([this
,this.A80,this.AE6],0);},AE4:function(E){if(this.AuP===E)return;this.AuP=E;A.abo([
this,this.A8Y,this.AE4],0);},BhR:function(G){var F;this.AE6((F=this.NR.Q,F[1].call(
F[0])));var Aw=this.Filter.DN(4,2);if(!!Aw){var AfY=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfY){var AaY=A._GetAutoObject(A.Device.Helper).Z0(
this.AuQ-1);AfY.A6=AaY;}else A.ab5("%s",AfL);}},BhQ:function(G){var F;this.AE4((
F=this.OE.Q,F[1].call(F[0])));var Aw=this.Filter.DN(4,3);if(!!Aw){var AfY=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfY){var AaY=A._GetAutoObject(
A.Device.Helper).Z0(this.AuP);AfY.A6=AaY;}else A.ab5("%s",AfL);}},ALt:function(G
){var A3i=this.Am9&&!!this.Filter.DN(this.OE.Es,this.OE.Operator);var A5b=this.Am9&&
!!this.Filter.DN(this.NR.Es,this.NR.Operator);A._GetAutoObject(A.Device.Helper).
JG(this.OD,this.Am9);A._GetAutoObject(A.Device.Helper).JG(this.RY,this.Am9&&this.
Amy);A._GetAutoObject(A.Device.Helper).JG(this.RZ,this.Am9&&this.Amy);A._GetAutoObject(
A.Device.Helper).JG(this.OE,A3i);A._GetAutoObject(A.Device.Helper).JG(this.NR,A5b
);},ArQ:function(E){if(this.Amy===E)return;this.Amy=E;A.abo([this,this.A8X,this.
ArQ],0);A.pe([this,this.ALt],this);},Bfd:function(G){var EF=(C.AjK.isPrototypeOf(
G)?G:null);if(!EF)return;var Aw=this.Filter.DN(EF.Es,EF.Operator);if(!!Aw){this.
Filter.Nz(Aw);A.abo([this,this.Fo,this.Fs],0);}else{if(EF===this.RY){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper
).Z0(this.AuP);this.Ba(this.OE);}else if(EF===this.RZ){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EK=EF.Es;Aw.Operator=EF.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A6=A._GetAutoObject(A.Device.Helper).Z0(this.AuQ-1);this.
Ba(this.NR);}if(!!Aw){this.Filter.CY(Aw);A.abo([this,this.Fo,this.Fs],0);}}A.pe([
this,this.ALt],this);},BA4:function(G){this.ArQ(!this.Amy);if(this.Amy===false){
var Aw=this.Filter.DN(this.OD.Es,this.OD.Operator);while(!!Aw){this.Filter.Nz(Aw
);Aw=this.Filter.DN(this.OD.Es,this.OD.Operator);}A.abo([this,this.Fo,this.Fs],0
);}},BnE:function(E){if(this.Am9===E)return;this.Am9=E;A.pe([this,this.ALt],this
);},Fo:function(){return this.Filter;},BlH:function(){return this.Avr;},BlG:function(
){return this.Avq;},Bmg:function(){return this.AsQ;},BlU:function(){return this.
ArA;},A9Y:function(){return this.Ax8;},A9X:function(){return this.Ax7;},A9W:function(
){return this.Aoh;},A80:function(){return this.AuQ;},A8Y:function(){return this.
AuP;},A8X:function(){return this.Amy;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB3._Init.call(this.Transponder={I:this},0);C.AB3._Init.
call(this.En={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACd._Init.call(
this.P8={I:this},0);C.AjK._Init.call(this.Te={I:this},0);C.Abz._Init.call(this.Oi={
I:this},0);C.AjK._Init.call(this.Tf={I:this},0);C.Abz._Init.call(this.NB={I:this
},0);C.ACd._Init.call(this.OD={I:this},0);C.AjK._Init.call(this.RY={I:this},0);C.
AC2._Init.call(this.OE={I:this},0);C.AjK._Init.call(this.RZ={I:this},0);C.AC2._Init.
call(this.NR={I:this},0);C.Am3._Init.call(this.Li={I:this},0);C.Am3._Init.call(this.
Jy={I:this},0);C.Am3._Init.call(this.K1={I:this},0);C.Am3._Init.call(this.MH={I:
this},0);C.QH._Init.call(this.Yz={I:this},0);C.QH._Init.call(this.Tg={I:this},0);
C.QH._Init.call(this.R0={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I$;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5L));this.Ds(C.API);this.Gender.
Au(this.Avr);this.AnimalType.Au(this.Avq);this.Transponder.Au(this.AsQ);this.En.
Au(this.ArA);this.Y.H(Fd);this.Y.J3(1);this.P8.H(I2);this.P8.Ai(true);this.P8.T(
A._GetAutoObject(A.Device.Helper).Am1(0,1));this.P8.Ns(1);this.Te.H(Qe);this.Te.
Ai(true);this.Te.T(A.aaR(A.acf.AEp));this.Te.Ns(1);this.Te.OW(2);this.Oi.H(Aaq);
this.Oi.Ns(1);this.Oi.OW(2);this.Oi.AF5(A.aaR(A.acf.GP));this.Tf.H(Alj);this.Tf.
Ai(true);this.Tf.T(A.aaR(A.acf.AHm));this.Tf.Ns(1);this.Tf.OW(3);this.NB.H(Aoq);
this.NB.Ai(true);this.NB.Ns(1);this.NB.OW(3);this.NB.AF5(A.aaR(A.acf.GP));this.OD.
H(AXj);this.OD.Ai(true);this.OD.T(A.aaR(A.acf.RX));this.OD.Ns(4);this.RY.H(AXk);
this.RY.Ai(true);this.RY.T(A.aaR(A.acf.AEp));this.RY.Ns(4);this.RY.OW(3);this.OE.
H(AXl);this.OE.Ns(4);this.OE.OW(3);this.OE.A_W(2);this.RZ.H(AXm);this.RZ.Ai(true
);this.RZ.T(A.aaR(A.acf.AHm));this.RZ.Ns(4);this.RZ.OW(2);this.NR.H(AXn);this.NR.
Ai(true);this.NR.Ns(4);this.NR.OW(2);this.NR.A_W(3);this.Li.H(Atc);this.Li.Ai(true
);this.Li.Ns(7);this.Li.Ahz(0);this.Li.OW(0);this.Jy.H(U6);this.Jy.Ai(true);this.
Jy.Ns(14);this.Jy.Ahz(0);this.Jy.OW(0);this.K1.H(U6);this.K1.Ai(true);this.K1.Ns(
22);this.K1.Ahz(0);this.K1.OW(1);this.MH.H(U6);this.MH.Ai(true);this.MH.Ns(26);this.
MH.Ahz(0);this.MH.OW(1);this.Yz.H(U6);this.Yz.Ai(true);this.Yz.Ns(11);this.Yz.Ahz(
0);this.Yz.OW(0);this.Tg.H(U6);this.Tg.Ai(true);this.Tg.Ns(12);this.Tg.Ahz(0);this.
Tg.OW(0);this.R0.H(U6);this.R0.Ai(true);this.R0.Ns(8);this.R0.Ahz(0);this.R0.OW(
0);this.Ay.H(Ix);this.J(this.Y,0);this.J(this.P8,0);this.J(this.Te,0);this.J(this.
Oi,0);this.J(this.Tf,0);this.J(this.NB,0);this.J(this.OD,0);this.J(this.RY,0);this.
J(this.OE,0);this.J(this.RZ,0);this.J(this.NR,0);this.J(this.Li,0);this.J(this.Jy
,0);this.J(this.K1,0);this.J(this.MH,0);this.J(this.Yz,0);this.J(this.Tg,0);this.
J(this.R0,0);this.J(this.Ay,0);this.N.CF=[this,this.Ex];this.N.Ce=[this,this.BA8
];this.N.C4(A.aaL(A.ach.E3));this.Y.Eo=[this,this.BB3];this.P8.AQ=[this,this.BA5
];this.P8.Au([this,this.A9W,this.Asd]);this.Te.AQ=[this,this.Bfe];this.Oi.FT([this
,this.D2,this.Gu]);this.Oi.Au([this,this.A9X,this.AGa]);this.Tf.AQ=[this,this.Bfe
];this.NB.FT([this,this.D2,this.Gu]);this.NB.Au([this,this.A9Y,this.AGb]);this.OD.
AQ=[this,this.BA4];this.OD.Au([this,this.A8X,this.ArQ]);this.RY.AQ=[this,this.Bfd
];this.OE.FT([this,this.D2,this.Gu]);this.OE.Au([this,this.A8Y,this.AE4]);this.RZ.
AQ=[this,this.Bfd];this.NR.FT([this,this.D2,this.Gu]);this.NR.Au([this,this.A80,
this.AE6]);this.Li.AQ=[this,this.AAG];this.Li.Au([B=this.Gender,B.Cb,B.Cd]);this.
Li.CH(this.Gender);this.Jy.AQ=[this,this.AAG];this.Jy.Au([B=this.AnimalType,B.Cb
,B.Cd]);this.Jy.CH(this.AnimalType);this.K1.AQ=[this,this.AAG];this.K1.Au([B=this.
Transponder,B.Cb,B.Cd]);this.K1.CH(this.Transponder);this.MH.AQ=[this,this.AAG];
this.MH.Au([B=this.En,B.Cb,B.Cd]);this.MH.CH(this.En);this.Yz.AQ=[this,this.A3A];
this.Tg.AQ=[this,this.A3A];this.R0.AQ=[this,this.A3A];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.En._Done();this.Y._Done();this.P8._Done();this.Te._Done();this.Oi._Done(
);this.Tf._Done();this.NB._Done();this.OD._Done();this.RY._Done();this.OE._Done(
);this.RZ._Done();this.NR._Done();this.Li._Done();this.Jy._Done();this.K1._Done(
);this.MH._Done();this.Yz._Done();this.Tg._Done();this.R0._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.En._ReInit();
this.Y._ReInit();this.P8._ReInit();this.Te._ReInit();this.Oi._ReInit();this.Tf._ReInit(
);this.NB._ReInit();this.OD._ReInit();this.RY._ReInit();this.OE._ReInit();this.RZ.
_ReInit();this.NR._ReInit();this.Li._ReInit();this.Jy._ReInit();this.K1._ReInit(
);this.MH._ReInit();this.Yz._ReInit();this.Tg._ReInit();this.R0._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5L));this.Te.T(A.aaR(A.acf.AEp));this.Oi.AF5(A.
aaR(A.acf.GP));this.Tf.T(A.aaR(A.acf.AHm));this.NB.AF5(A.aaR(A.acf.GP));this.OD.
T(A.aaR(A.acf.RX));this.RY.T(A.aaR(A.acf.AEp));this.RZ.T(A.aaR(A.acf.AHm));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.En)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Te)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$X={Z1:null,BoZ:
function(Bys){var EG=A._NewObject(C.A$W,0);EG.AB=Bys;EG.MI=this.Z1;this.Z1=EG;},
A$B:function(){var Vv=null;if(!!this.Z1){Vv=this.Z1.AB;this.Z1=this.Z1.MI;}return Vv;
},Contains:function(Alt){var EG=this.Z1;while(!!EG){if(EG.AB.Aob===Alt)return true;
EG=EG.MI;}return false;},BoP:function(){if(!!this.Z1)return this.Z1.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$X;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Z1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$W={AB:null,
MI:null,_Init:function(aArg){this.__proto__=C.A$W;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MI)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMr={ASe:function(){A._GetAutoObject(
A.Device.Helper).AxE(this.H$,0);A._GetAutoObject(C.A5).FA();},A8r:function(){this.
H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).FA();},A7q:function(
){return A.aaL(A.ach.Am7);},_Init:function(aArg){C.AGt._Init.call(this,aArg);this.
__proto__=C.AMr;this.Ds(C.IQ);},_className:"Application::AnimalActionRateScreen"
};C.AMn={WJ:function(G){this.AgB();this.I9(A.aaR(A.acf.AVG),[this,this.AT4],5);this.
I9(A.aaR(A.acf.A6c),[this,this.BmG],4);this.I9(A.aaR(A.acf.AGs),[this,this.ATP],
3);this.I9(A.aaR(A.acf.An6),[this,this.Aw3],2);this.I9(A.aaR(A.acf.Ad0),[this,this.
AE9],1);this.I9(A.aaR(A.acf.AuL),[this,this.AE3],0);A._GetAutoObject(C.BT).Fy();
A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.Ank)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DG:function(G){},AbB:function(){return C.ANg;},AbC:function(
){return C.ADA;},Ra:function(G){var Be=A._GetAutoObject(A.Device.Helper).ME();var
Azh=A._NewObject(A.Device.BoolFilterCriterion,0);Azh.Initialize(8,0,true,true);Be.
CY(Azh);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HR:function(G){var F;C.GL.
HR.call(this,G);if(this.Aki()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajs((F=this.Fl,F[1].call(F[0]))));this.N.Cf=[this,this.Aas];this.N.E6(A.jV);}this.
N.OX(false);this.N.OY(false);},Agn:function(){A._GetAutoObject(C.A5).Cc(40);},_Init:
function(aArg){C.GL._Init.call(this,aArg);this.__proto__=C.AMn;var B;this.Ds(C.AO9
);this.Dl(A.aaR(A.acf.A8x));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A81,
B.BbF]);},_ReInit:function(){C.GL._ReInit.call(this);this.Dl(A.aaR(A.acf.A8x));}
,_className:"Application::AlarmListScreen"};C.ANH={DG:function(G){},Agk:function(
G){if(!!this.Bf)A.ab5("%i",this.Bf.AD.Gv);var Aa=(C.ACk.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).GT(Aa.Hs);A._GetAutoObject(C.A5).Cc(13
);}},Ra:function(G){var Be=A._GetAutoObject(A.Device.Helper).ME();var AzB=A._NewObject(
A.Device.BoolFilterCriterion,0);AzB.Initialize(9,0,true,true);Be.CY(AzB);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HR:function(G){C.GL.HR.call(this,G);this.N.OX(false
);this.N.OY(false);},_Init:function(aArg){C.GL._Init.call(this,aArg);this.__proto__=
C.ANH;this.Ds(C.AO$);this.Dl(A.aaR(A.acf.A8y));},_ReInit:function(){C.GL._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8y));},_className:"Application::ControlListScreen"
};C.Aew={Filter:null,Es:0,Jj:10,TableId:0,Operator:1,CQ:function(){var F;this.Tz((
F=this.Filter,F[1].call(F[0])).DN(this.Es,this.Operator));},Bl:function(aSize){C.
Cp.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jj),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mk],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mk],E,0);A.pe([this,this.
Mk],this);},Mk:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tz((F=this.Filter,F[1].call(F[0])).DN(this.Es,this.Operator));else this.
Tz(null);},Ahz:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mk],this);},Ns:function(E){if(this.Es===E)return;this.Es=E;A.pe([this,this.
Mk],this);},Tz:function(AH){if(!!AH)this.T(A._GetAutoObject(A.Device.Helper).A7j(
this.TableId,AH));else this.T(A._GetAutoObject(A.Device.Helper).Am1(this.TableId
,this.Es));},OW:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mk],this);},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Aew;this.V.H(AHV);this.V.A4(0x11);},_ReInit:function(){C.Cp._ReInit.call(this);
this.CQ();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QH={H_:null,Bl:function(aSize){var B;C.Aew.Bl.call(this,aSize);this.H_.H([(aSize[
0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jj,0,this.
H_.M[0]-this.Jj,aSize[1]]);},Tz:function(AH){this.T(A._GetAutoObject(A.Device.Helper
).Am1(this.TableId,this.Es));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw&&Aw.A6)this.H_.Cx(1);else this.H_.Cx(0);},_Init:function(aArg
){C.Aew._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.QH;this.H_.H(AHW);this.H_.Cx(0);this.J(this.H_,0);this.H_.Ax(A.aaL(A.ach.AqU));
},_Done:function(){this.__proto__=C.Aew;this.H_._Done();C.Aew._Done.call(this);}
,_ReInit:function(){C.Aew._ReInit.call(this);this.H_._ReInit();},_Mark:function(
D){var B;C.Aew._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.API={Ap:null,Text:null,Dg:function(
E){C.BS.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.API;this.Ap.H(AXo);this.Text.H(AXp);this.
Text.A4(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeI));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BS;this.Ap._Done();this.Text._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,T$:null,Gx:null,D4:null,A_:null,Init:function(aArg){var B;A.zV([this,this.
DY],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.DY],this);},Bl:function(aSize){
var B;C.BS.Bl.call(this,aSize);this.T$.H(A.abJ(this.T$.M,A.abe(this.AW.M.slice(0
,2),AXq)));this.T$.H(A.abK(this.T$.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXr
)));},Aj:function(Ae){var B;C.BS.Aj.call(this,Ae);var IG=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IG)this.T$.L(A.jb.AV);else this.T$.L(A.jb.Am8);},Dg:function(E){
C.BS.Dg.call(this,E);this.Gx.L(E);this.D4.ZB(E);},WM:function(E){C.BS.WM.call(this
,E);this.D4.CW(E);},Ako:function(){return this.AW.Ako();},Awl:function(){return this.
AW.Awl();},DY:function(G){this.D4.T(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.BS._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BY._Init.call(this.T$={I:this},0);A.acg.Ap._Init.call(this.Gx={I:
this},0);C.D4._Init.call(this.D4={I:this},0);A.acg.C9._Init.call(this.A_={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXs);this.T$.H(AXt);this.T$.Nx(2);this.Gx.H(
AXu);this.Gx.L(A.jb.CV);this.D4.A1(0x14);this.D4.H(AXv);this.D4.ZB(A.jb.Bm);this.
D4.CW(A.jb.Rk);this.D4.Ho(2);this.A_.DE(AXw);this.A_.DO(AXx);this.A_.L(A.jb.Bb);
this.J(this.AW,0);this.J(this.T$,0);this.J(this.Gx,0);this.J(this.D4,0);this.J(this.
A_,0);this.Ba(this.AW);this.Gx.Ax(A.aaL(A.ach.Gx));this.D4.S(A.aaL(A.fl.Bg));this.
Init(aArg);},_Done:function(){this.__proto__=C.BS;this.AW._Done();this.T$._Done(
);this.Gx._Done();this.D4._Done();this.A_._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.AW._ReInit();this.T$._ReInit();this.Gx._ReInit(
);this.D4._ReInit();this.A_._ReInit();this.D4.S(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.BS._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DH={Dk:null,Is:null,Ir:null
,Agj:function(G){if(this.EA<0)this.L_(1);else if(this.EA===9)this.L_(0);else this.
L_(this.EA+1);A.pe(this.Dk,this);},Aj:function(Ae){var B;C.EA.Aj.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.C0(256);}else if(Hf){this.Background.L(this.Nb);this.
Text.L(A.jb.Text);this.C0(256);}else{this.Background.L(this.Nb);this.Text.L(A.jb.
Text);this.C0(128);}},Agi:function(G){if(this.EA<=0)this.L_(9);else this.L_(this.
EA-1);A.pe(this.Dk,this);},_Init:function(aArg){C.EA._Init.call(this,aArg);A.Core.
BG._Init.call(this.Is={I:this},0);A.Core.BG._Init.call(this.Ir={I:this},0);this.
__proto__=C.DH;this.Is.Filter=4;this.Ir.Filter=5;this.Is.BH=[this,this.Agj];this.
Is.D3=[this,this.Agj];this.Ir.BH=[this,this.Agi];this.Ir.D3=[this,this.Agi];},_Done:
function(){this.__proto__=C.EA;this.Is._Done();this.Ir._Done();C.EA._Done.call(this
);},_ReInit:function(){C.EA._ReInit.call(this);this.Is._ReInit();this.Ir._ReInit(
);},_Mark:function(D){var B;C.EA._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ir)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cw:null,CX:null,DB:null,Er:null,Gc:null,ET:null,Fk:null,Fa:null,Ng:0,ARt:
false,Aqx:false,Aj:function(Ae){var B;A.Core.P.Aj.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqx)this.ET.Ae5(true);else this.ET.Ae5(false);},AwU:function(E){var B;
if(E===this.Ako())return;var Agd=E;var DW=this.ET;while(!!DW){if(Agd>0){DW.L_(Agd
%10);Agd=(Agd/10)|0;}else DW.L_(-1);DW=(C.DH.isPrototypeOf(B=this.QM(DW,2,0x11))?
B:null);}},Ako:function(){return A.wz(this.Awl(),-1,10);},Ox:function(G){if(this.
Gc.EA>=0)this.BgX(7);},M8:function(G){if(((this.Ako()>0)||this.ARt)&&(this.Cw.EA<
0))this.BgX(2);else if(this.Ako()<=0)this.Fa.Mz=true;},Adz:function(G){A.pe(this.
Dk,this);},BgX:function(GC){var B;var ALH=0;var DW=null;switch(GC){case 2:{DW=this.
Cw;ALH=7;}break;case 7:{DW=this.ET;ALH=2;}break;default:throw new Error(AXy);}while(
!!DW){var A3t=(C.DH.isPrototypeOf(B=this.QM(DW,ALH,0x11))?B:null);if(!!A3t)DW.L_(
A3t.EA);else if(ALH===7)DW.L_(0);else DW.L_(-1);DW=A3t;}A.pe([this,this.Adz],this
);},Ae5:function(E){if(this.Aqx===E)return;this.Aqx=E;this.Am();},BnF:function(E
){if(this.ARt===E)return;this.ARt=E;},ATt:function(E){var B;if(E===this.Awl())return;
var Agd=E;var DW=this.ET;while(!!DW){if(Agd.length>0){DW.L_(A.wz(A.ab2(Agd,1),-1
,10));Agd=A.abV(Agd,Agd.length-1);}else DW.L_(-1);DW=(C.DH.isPrototypeOf(B=this.
QM(DW,2,0x11))?B:null);}},Awl:function(){var B;var IE=A.jV;var O=0;var B8=this.Cw;
for(;O<6;O=O+1){if(!!B8&&(B8.EA>=0))IE=IE+B8.EA.toFixed();B8=(C.DH.isPrototypeOf(
B=this.TX(B8,0x11))?B:null);}return IE;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DH._Init.call(this.Cw={I:this},0);C.DH._Init.call(this.CX={I:this},
0);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(this.Er={I:this},0);C.DH.
_Init.call(this.Gc={I:this},0);C.DH._Init.call(this.ET={I:this},0);A.Core.BG._Init.
call(this.Fk={I:this},0);A.Core.BG._Init.call(this.Fa={I:this},0);this.__proto__=
C.AW;this.H(Ayz);this.Cw.A1(0x3);this.Cw.H(AHX);this.CX.A1(0x3);this.CX.H(AHY);this.
DB.A1(0x3);this.DB.H(AHZ);this.Er.A1(0x3);this.Er.H(AH0);this.Gc.A1(0x3);this.Gc.
H(AH1);this.ET.A1(0x3);this.ET.H(AH2);this.ET.L_(0);this.Fk.Filter=6;this.Fa.Filter=
7;this.Ng=A.jb.CL;this.J(this.Cw,0);this.J(this.CX,0);this.J(this.DB,0);this.J(this.
Er,0);this.J(this.Gc,0);this.J(this.ET,0);this.Ba(this.ET);this.Cw.Dk=[this,this.
Adz];this.CX.Dk=[this,this.Adz];this.DB.Dk=[this,this.Adz];this.Er.Dk=[this,this.
Adz];this.Gc.Dk=[this,this.Adz];this.ET.Dk=[this,this.Adz];this.Fk.BH=[this,this.
Ox];this.Fa.BH=[this,this.M8];},_Done:function(){this.__proto__=A.Core.P;this.Cw.
_Done();this.CX._Done();this.DB._Done();this.Er._Done();this.Gc._Done();this.ET.
_Done();this.Fk._Done();this.Fa._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cw._ReInit();this.CX._ReInit();this.DB._ReInit(
);this.Er._ReInit();this.Gc._ReInit();this.ET._ReInit();this.Fk._ReInit();this.Fa.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bir="81ef812f";C.BDD={Undefined:0,BEH:1,BDV:2};C.AkK={
Tx:null,AiX:null,Lg:null,ANM:null,Aoe:null,push:function(MY){if(!this.Tx){MY.AhB=
null;MY.MI=null;this.Tx=MY;this.AiX=this.Tx;}else{MY.AhB=this.AiX;MY.MI=null;this.
AiX.MI=MY;this.AiX=MY;}},BCB:function(MY){var Qn=this.Tx;while(!!Qn){if(Qn.JW.Id===
MY.Id)return Qn;Qn=Qn.MI;}return Qn;},BCk:function(MY){if(MY===this.Tx)this.pop(
);else if(MY===this.AiX){MY=MY.AhB;if(!!MY)MY.MI=null;this.AiX=MY;}else{MY.AhB.MI=
MY.MI;MY.MI.AhB=MY.AhB;}},Aht:function(E){var F;if(this.Lg===E)return;this.Lg=E;
if(!!this.Lg)this.Lg.AgP(2);(F=this.ANM,F[2].call(F[0],this.Lg));},Vs:function(G
){var Qn=(C.AUi.isPrototypeOf(G)?G:null);if(!!Qn){if(!Qn.JW.PopupState){if(!this.
Lg)this.Aht(this.top());}else if(Qn.JW.PopupState===4){this.pop();this.Aht(this.
top());}else if(Qn.JW.PopupState===5){this.pop();this.Aht(this.top());}else if(Qn.
JW.PopupState===7){this.pop();this.Aht(this.top());}else if(Qn.JW.PopupState===8
){this.pop();this.Aht(this.top());}else if(Qn.JW.PopupState===6){if(Qn===this.Lg
){this.pop();this.Aht(this.top());}else this.BCk(Qn);}else if(Qn.JW.PopupState===
3){this.pop();this.Aht(this.top());}}},pop:function(){var AK3=null;if(!!this.Tx){
AK3=this.Tx;if(this.Tx===this.AiX){this.Tx=null;this.AiX=null;}else{this.Tx=this.
Tx.MI;if(!this.Tx)throw new Error(AXz);this.Tx.AhB=null;}AK3.AhB=null;AK3.MI=null;
}return AK3;},top:function(){return this.Tx;},BB4:function(G){var B;var At_=(A.Device.
PopupContext.isPrototypeOf(B=this.Aoe.JW)?B:null);if(!!At_){var A4I=this.BCB(At_
);if(!!A4I){A4I.A_s(At_);if(!At_.Show)A4I.AgP(6);}else if(At_.Show){var AKG=A._NewObject(
C.AUi,0);AKG.A_s(At_);AKG.ATa=[this,this.Vs];this.push(AKG);AKG.AgP(0);}}},_Init:
function(aArg){A.Core.Bak._Init.call(this.Aoe={I:this},0);this.__proto__=C.AkK;this.
Aoe.ASD=[this,this.BB4];this.Aoe.BmZ(A._GetAutoObject(A.Device.Device).AnT);A.h7++;
},_Done:function(){this.__proto__=null;this.Aoe._Done();A.h7--;},_ReInit:function(
){this.Aoe._ReInit();},_Mark:function(D){var B;if((B=this.Tx)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANM)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aoe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUi={Ro:null,MI:null,AhB:null,JW:null,ATa:null,PopupIdToString:null,Af4:function(
BxC,Bx9,Byr,Byi,Byk,Byh,BxU){var Vu=A._NewObject(C.AUh,0);Vu.Bn8(this.JW.Id);Vu.
A$c(BxC);Vu.ATb=Byh;Vu.A$e(this.JW.Ak5);Vu.A_1(this.JW.AkI);Vu.BR=A._NewObject(C.
N,0);Vu.Ls().Ce=Byk;Vu.Ls().Cf=null;Vu.Ls().CF=Byi;Vu.Ls().CS(Byr);Vu.Ls().Cu(null
);Vu.Ls().Hz(Bx9);Vu.Ls().AFw(BxU);return Vu;},Akp:function(){if(!this.Ro){var Agu=
this.PopupIdToString.BU(this.JW.Id);switch(this.JW.Id){case 91:case 92:this.Ro=this.
Af4(Agu,A.jV,A.jV,null,null,[this,this.Agf],0);break;case 39:this.Ro=this.Af4(Agu
,A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3G],[this,this.A3H],[this,this.Agf
],3);break;case 13:this.Ro=this.Af4(Agu,A.aaR(A.acf.AmG),A.aaR(A.acf.Bo$),[this,
this.A3F],[this,this.AKL],[this,this.Agf],3);break;case 25:this.Ro=this.Af4(Agu,
A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3F],[this,this.AKL],[this,this.Agf]
,3);break;case 16:case 24:case 49:case 74:this.Ro=this.Af4(Agu,A.aaR(A.acf.AmG),
A.jV,[this,this.A3F],null,[this,this.Agf],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Ro=this.Af4(Agu,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKL],[this,this.Agf],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 118:
case 105:this.Ro=this.Af4(Agu,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3G],[
this,this.A3H],[this,this.Agf],3);break;case 110:this.Ro=this.Af4(Agu,A.jV,A.jV,
null,null,[this,this.Agf],1);break;case 46:case 111:this.Ro=this.Af4(Agu,A.jV,A.
aaR(A.acf.Ok),null,[this,this.AKL],[this,this.Agf],1);break;case 4:case 7:case 33:
case 115:case 44:case 37:case 38:case 63:case 95:case 108:case 112:this.Ro=this.
Af4(Agu,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3G],[this,this.A3H],[this,this.
Agf],1);break;default:A.ab5("%s",(AXA+this.JW.Id.toFixed())+AXB);}}switch(this.JW.
Id){case 16:case 49:this.Ro.A$s(true);break;case 91:case 92:this.Ro.A$s(false);break;
default:;}return this.Ro;},AKL:function(G){this.AgP(4);},A3F:function(G){this.AgP(
5);},A3H:function(G){this.AgP(7);},A3G:function(G){this.AgP(8);},Agf:function(G){
this.AgP(3);},A_s:function(E){if(this.JW===E)return;this.JW=E;if(!!this.Ro){this.
Akp().A$e(this.JW.Ak5);this.Akp().A_1(this.JW.AkI);}},AgP:function(Byn){var B;this.
JW.Bn9(Byn);(B=this.ATa)?B[1].call(B[0],this):null;},BBA:function(G){this.AgP(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.AUi;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.Ro)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.MI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATa)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.D5={BooleanToYesNo:null,Dv:function(
){return 2;},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Ge:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.D5;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.ZU={UB:null,Ki:function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM
!==BQ){if(!!this.UB&&!!this.AC)switch(this.AC.C8(this.AM)){case 0:(F=this.UB,F[2
].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},Kd:function(G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.
AM!==BQ){if(!!this.UB&&!!this.AC)switch(this.AC.C8(this.AM)){case 0:(F=this.UB,F[
2].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},Afe:function(E){if(A.aaZ(this.UB,E))return;if(!!this.Q)A.z$([
this,this.A4j],this.UB,0);this.UB=E;if(!!E)A.zX([this,this.A4j],E,0);if(!!E)A.pe([
this,this.A4j],this);},A4j:function(G){var F;if(!!this.UB){if((F=this.UB,F[1].call(
F[0])))this.By(1);else this.By(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.ZU;this.Iu(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.UB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUy={Jn:null,O3:null,I0:null,Gp:null,AK:null,Abr:null,AgV:null,TS:null,Si:null
,AcL:null,Xa:null,Hk:null,ABJ:true,Init:function(aArg){var B;A.zX([this,this.Al_
],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0S],0);A.pe([this,this.Al_],this
);},Aj:function(Ae){var F;C.AB.Aj.call(this,Ae);if(this.ABJ)this.N.C5(A.aaL(A.ach.
AQ9));else this.N.C5(A.aaL(A.ach.AQ_));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O3.L(A.jb.Bm);this.Si.Z(false);this.TS.Z(false);this.I0.Z(true);this.Gp.
As(false);(F=this.Gp.Q,F[2].call(F[0],this.Gp.B4));this.Background.L(A.jb.Gn);}else
if(this.Abr.Bw){this.O3.L(A.jb.Text);this.Si.Z(true);this.TS.Z(true);this.I0.Z(false
);this.Gp.As(false);(F=this.Gp.Q,F[2].call(F[0],this.Gp.B4));this.Background.L(A.
jb.E2);}else{this.O3.L(A.jb.Text);this.Si.Z(false);this.TS.Z(false);this.I0.Z(true
);this.Gp.As(true);this.Background.L(A.jb.CL);}if(this.AgV.Bw)this.Xa.Z(true);else
this.Xa.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhN();},E4:function(
G){A._GetAutoObject(A.Device.Device).An5();A._GetAutoObject(A.Device.Device).Afg(
false);A._GetAutoObject(A.Device.Device).UA(false);},Al_:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BBg],this);break;case 3:{A.pe([this,this.BfO],this);A.pe([B=this.Abr,B.AxS],this
);A.pe(this.Abr.MN,this);}break;case 4:A.ab5("%s",AXC);break;default:;}},Ex:function(
G){A._GetAutoObject(C.A5).FA();},BB6:function(G){this.BoA(!this.ABJ);},BoA:function(
E){if(this.ABJ===E)return;this.ABJ=E;if(!E)A._GetAutoObject(A.Device.Device).Afg(
false);this.Am();},BBg:function(G){var B;this.BfO(this);if(this.ABJ)A._GetAutoObject(
A.Device.Device).Afg(true);A._GetAutoObject(A.Device.Device).WO(65280);A._GetAutoObject(
A.Device.Device).UA(true);A.pe([B=this.Abr,B.StartTimer],this);A.pe([B=this.AgV,
B.StartTimer],this);this.Am();},BBh:function(G){A._GetAutoObject(A.Device.Device
).Afg(false);A._GetAutoObject(A.Device.Device).UA(false);this.Am();},BBj:function(
G){this.Am();},BfO:function(G){A._GetAutoObject(A.Device.Device).AhN();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jn._Init.call(this.Jn={I:this},0);C.CG._Init.
call(this.O3={I:this},0);A.acg.Ap._Init.call(this.I0={I:this},0);A.acl.Gp._Init.
call(this.Gp={I:this},0);A.acg.AK._Init.call(this.AK={I:this},0);A.Core.Timer._Init.
call(this.Abr={I:this},0);A.Core.Timer._Init.call(this.AgV={I:this},0);A.acg.Ap.
_Init.call(this.TS={I:this},0);A.acg.Ap._Init.call(this.Si={I:this},0);A.acg.Text.
_Init.call(this.AcL={I:this},0);C.Xa._Init.call(this.Xa={I:this},0);C.CG._Init.call(
this.Hk={I:this},0);this.__proto__=C.AUy;var B;this.Background.L(A.jb.CL);this.N.
Z(true);this.Jn.H(AXD);this.Jn.AkF(0);this.O3.H(AXE);this.O3.R(A.aaR(A.acf.Bap));
this.O3.L(A.jb.Text);this.I0.H(AXF);this.I0.L(A.jb.AV);this.I0.Zz(true);this.Gp.
Fq(1750);this.Gp.Ux(750);this.Gp.AkB(0);this.Gp.As(true);this.Gp.B4=3;this.AK.H(
AyA);this.Abr.PZ(-1);this.Abr.WN(1000);this.AgV.PZ(-1);this.AgV.WN(5000);this.TS.
H(AH3);this.Si.H(AH3);this.Si.L(A.jb.E2);this.AcL.H(AyA);this.AcL.R(A.aaR(A.acf.
A$Y));this.AcL.L(A.jb.Text);this.Xa.H(AyA);this.Hk.H(AXG);this.Hk.As(false);this.
Hk.R(A.aaR(A.acf.RangeTest));this.Hk.L(A.jb.Text);this.J(this.Jn,0);this.J(this.
O3,0);this.J(this.I0,0);this.J(this.AK,0);this.J(this.TS,0);this.J(this.Si,0);this.
J(this.AcL,0);this.J(this.Xa,0);this.J(this.Hk,0);this.N.CF=[this,this.Ex];this.
N.Ce=[this,this.BB6];this.N.C4(A.aaL(A.ach.E3));this.O3.S(A.aaL(A.fl.Af));this.O3.
AY(A.aaL(A.fl.Ak));this.O3.Cm(A.aaL(A.fl.Bg));this.I0.Ax(A.aaL(A.ach.AD0));this.
Gp.Q=[B=this.I0,B.ASP,B.Cx];this.Abr.MN=[this,this.BBh];this.AgV.MN=[this,this.BBj
];this.TS.Ax(A.aaL(A.ach.TS));this.Si.Ax(A.aaL(A.ach.Si));this.AcL.S(A.aaL(A.fl.
Af));this.Xa.Au([B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0T]);this.Hk.S(A.aaL(
A.fl.Kt));this.Hk.AY(A.aaL(A.fl.HK));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jn._Done();this.O3._Done();this.I0._Done();this.Gp._Done();this.AK._Done(
);this.Abr._Done();this.AgV._Done();this.TS._Done();this.Si._Done();this.AcL._Done(
);this.Xa._Done();this.Hk._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jn._ReInit();this.O3._ReInit();this.I0._ReInit();this.Gp.
_ReInit();this.AK._ReInit();this.Abr._ReInit();this.AgV._ReInit();this.TS._ReInit(
);this.Si._ReInit();this.AcL._ReInit();this.Xa._ReInit();this.Hk._ReInit();this.
O3.R(A.aaR(A.acf.Bap));this.AcL.R(A.aaR(A.acf.A$Y));this.Hk.R(A.aaR(A.acf.RangeTest
));this.O3.S(A.aaL(A.fl.Af));this.O3.AY(A.aaL(A.fl.Ak));this.O3.Cm(A.aaL(A.fl.Bg
));this.AcL.S(A.aaL(A.fl.Af));this.Hk.S(A.aaL(A.fl.Kt));this.Hk.AY(A.aaL(A.fl.HK
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jn)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Xa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Ab2={
ScreenType:0,Nu:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Ny:
function(G){A._GetAutoObject(C.A5).Cc(this.ScreenType);},_Init:function(aArg){C.
Cp._Init.call(this,aArg);this.__proto__=C.Ab2;},_className:"Application::MenuItemScreen"
};C.Uh={Aed:null,Mx:null,AmH:false,Init:function(aArg){},Aj:function(Ae){C.Cp.Aj.
call(this,Ae);if(this.AmH){this.Mx.Cx(1);this.Mx.L(A.jb.Ia);}else{this.Mx.Cx(0);
if(this.KN)this.Mx.L(A.jb.Bm);else if(this.Hm)this.Mx.L(A.jb.Text);else this.Mx.
L(A.jb.Bm);}},H0:function(G){var F,Cv;if(!!this.Aed){(Cv=this.Aed,Cv[2].call(Cv[
0],!(F=this.Aed,F[1].call(F[0]))));this.AFf((F=this.Aed,F[1].call(F[0])));A.pe([
this,this.DL],this);}},A3L:function(G){this.KN=true;this.DL(this);},AFf:function(
E){if(this.AmH===E)return;this.AmH=E;this.DL(this);this.Am();},A4c:function(G){var
F;this.AFf((F=this.Aed,F[1].call(F[0])));},A1b:function(s){this.A4c(s);},DL:function(
G){var F;if(!this.N||!this.KN)return;if(this.AmH){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8M));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATh:function(E){if(A.aaZ(this.Aed,E))
return;if(!!this.Aed)A.z$([this,this.A1b],this.Aed,0);this.Aed=E;if(!!E)A.zX([this
,this.A1b],E,0);if(!!E)A.pe([this,this.A1b],this);},_Init:function(aArg){C.Cp._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mx={I:this},0);this.__proto__=C.Uh;this.
V.L(A.jb.Ia);this.Mx.H(AH4);this.Mx.Cx(0);this.J(this.Mx,0);this.Mx.Ax(A.aaL(A.ach.
AqU));this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.Mx._Done();C.Cp.
_Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Mx._ReInit();
},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Aed)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANU={H9:null,IU:null,_Init:function(aArg){C.Ch.
_Init.call(this,aArg);C.S0._Init.call(this.H9={I:this},0);C.AGS._Init.call(this.
IU={I:this},0);this.__proto__=C.ANU;var B;this.Jh(A.aaR(A.acf.ACK));this.H9.H(Ah3
);this.H9.Ai(true);this.H9.T(A.aaR(A.acf.Date));this.H9.Bh(true);this.IU.H(U7);this.
IU.Ai(true);this.IU.T(A.aaR(A.acf.Bq));this.J(this.H9,-1);this.J(this.IU,-1);this.
H9.Ab9([B=this.H9,B.F_]);this.H9.FT([this,this.D2,this.Gu]);this.H9.AkA(A.aaL(A.
ach.Edit));this.H9.Acd([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);this.IU.
Ab9([B=this.IU,B.F_]);this.IU.FT([this,this.D2,this.Gu]);this.IU.AkA(A.aaL(A.ach.
Edit));this.IU.Acd([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);},_Done:function(
){this.__proto__=C.Ch;this.H9._Done();this.IU._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.H9._ReInit();this.IU._ReInit();this.Jh(A.
aaR(A.acf.ACK));this.H9.T(A.aaR(A.acf.Date));this.IU.T(A.aaR(A.acf.Bq));},_Mark:
function(D){var B;C.Ch._Mark.call(this,D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVx={Rh:null,FO:null,B1:null,OQ:null,YV:null,Abb:null,_Init:function(aArg){C.
Ch._Init.call(this,aArg);C.Rh._Init.call(this.Rh={I:this},0);C.AMN._Init.call(this.
FO={I:this},0);C.AU7._Init.call(this.B1={I:this},0);C.AU9._Init.call(this.OQ={I:
this},0);C.ZU._Init.call(this.YV={I:this},0);C.Abb._Init.call(this.Abb={I:this},
0);this.__proto__=C.AVx;var B;this.Jh(A.aaR(A.acf.Temperature));this.FO.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B1.H(AXH);this.B1.Ai(true);this.B1.T(A.aaR(A.acf.
Arx));this.B1.Bh(false);this.OQ.H(Aar);this.OQ.Ai(true);this.OQ.T(A.aaR(A.acf.Undertemperature
));this.OQ.Bh(true);this.OQ.By(3800);this.OQ.Gh(3000);this.OQ.EV(5000);this.OQ.A$l(
A.aaR(A.acf.AG5));this.YV.H(AXI);this.YV.Ai(true);this.YV.Z(true);this.YV.T(A.aaR(
A.acf.A5J));this.J(this.B1,0);this.J(this.OQ,0);this.J(this.YV,0);this.B1.Ab9([B=
this.B1,B.F_]);this.B1.FT([this,this.D2,this.Gu]);this.B1.AkA(A.aaL(A.ach.Edit));
this.B1.Lu([B=this.B1,B.Ay7]);this.B1.Kz(A.aaL(A.ach.AnW));this.B1.Au([B=this.FO
,B.Cb,B.Cd]);this.B1.CH(this.FO);this.B1.A_Z([B=this.FO,B.AS$,B.A00]);this.B1.A_Y([
B=this.FO,B.AS_,B.A0Z]);this.OQ.Lu([B=this.B1,B.Ay7]);this.OQ.Kz(A.aaL(A.ach.AnW
));this.OQ.Au([B=A._GetAutoObject(A.Device.Device),B.A9U,B.Bb7]);this.YV.CH(this.
Abb);this.YV.Afe([B=A._GetAutoObject(A.Device.Device),B.A9d,B.BbP]);},_Done:function(
){this.__proto__=C.Ch;this.Rh._Done();this.FO._Done();this.B1._Done();this.OQ._Done(
);this.YV._Done();this.Abb._Done();C.Ch._Done.call(this);},_ReInit:function(){C.
Ch._ReInit.call(this);this.Rh._ReInit();this.FO._ReInit();this.B1._ReInit();this.
OQ._ReInit();this.YV._ReInit();this.Abb._ReInit();this.Jh(A.aaR(A.acf.Temperature
));this.B1.T(A.aaR(A.acf.Arx));this.OQ.T(A.aaR(A.acf.Undertemperature));this.OQ.
A$l(A.aaR(A.acf.AG5));this.YV.T(A.aaR(A.acf.A5J));},_Mark:function(D){var B;C.Ch.
_Mark.call(this,D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN7={PO:null,PP:null,SB:null,Wb:null,SE:null,SC:null,D5:null,Acz:null,Init:function(
aArg){A.zX([this,this.BpW],this.PP.Q,0);},BpW:function(G){var F;A._GetAutoObject(
A.Device.Device).Axd((F=this.PP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch.
_Init.call(this,aArg);C.Iv._Init.call(this.PO={I:this},0);C.BW._Init.call(this.PP={
I:this},0);C.ZU._Init.call(this.SB={I:this},0);C.Iv._Init.call(this.Wb={I:this},
0);C.ZU._Init.call(this.SE={I:this},0);C.ZU._Init.call(this.SC={I:this},0);C.D5.
_Init.call(this.D5={I:this},0);C.Acz._Init.call(this.Acz={I:this},0);this.__proto__=
C.AN7;var B;this.N.H(U6);this.Jh(A.aaR(A.acf.Device));this.PO.H(Ah3);this.PO.Ai(
true);this.PO.T(A.aaR(A.acf.A$9));this.PO.Bh(false);this.PO.Gh(2);this.PO.EV(60);
this.PO.IX(A.aaR(A.acf.AHj));this.PO.Ji(A.aaR(A.acf.AHj));this.PP.H(AXJ);this.PP.
Ai(true);this.PP.T(A.aaR(A.acf.Bae));this.PP.Bh(true);this.PP.By(0);this.PP.Gh(-
1);this.PP.EV(1);this.SB.H(Aar);this.SB.Ai(true);this.SB.T(A.aaR(A.acf.HG));this.
SB.Bh(false);this.SB.By(0);this.SB.Gh(-1);this.SB.EV(1);this.Wb.H(Alk);this.Wb.Ai(
true);this.Wb.T(A.aaR(A.acf.A57));this.Wb.Bh(true);this.Wb.IX(AfM);this.Wb.Ji(AfM
);this.SE.H(AcX);this.SE.Ai(true);this.SE.T(A.aaR(A.acf.AsW));this.SE.Bh(false);
this.SE.By(1);this.SE.Gh(-1);this.SE.EV(1);this.SC.H(Aor);this.SC.Ai(true);this.
SC.T(A.aaR(A.acf.Asz));this.SC.Bh(true);this.SC.By(0);this.SC.Gh(-1);this.SC.EV(
1);this.Acz.Au(A._GetAutoObject(A.Device.Device).AxR);this.J(this.PO,0);this.J(this.
PP,0);this.J(this.SB,0);this.J(this.Wb,0);this.J(this.SE,0);this.J(this.SC,0);this.
PO.Au([B=A._GetAutoObject(A.Device.Device),B.A9M,B.Bb3]);this.PP.Au([B=this.Acz,
B.Cb,B.Cd]);this.PP.CH(this.Acz);this.SB.CH(this.D5);this.SB.Afe([B=A._GetAutoObject(
A.Device.Device),B.AEQ,B.AI1]);this.Wb.Au([B=A._GetAutoObject(A.Device.Device),B.
A8_,B.BbL]);this.SE.CH(this.D5);this.SE.Afe([B=A._GetAutoObject(A.Device.Device)
,B.A9V,B.Bb8]);this.SC.CH(this.D5);this.SC.Afe([B=A._GetAutoObject(A.Device.Device
),B.AST,B.A0M]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.PO._Done(
);this.PP._Done();this.SB._Done();this.Wb._Done();this.SE._Done();this.SC._Done(
);this.D5._Done();this.Acz._Done();C.Ch._Done.call(this);},_ReInit:function(){C.
Ch._ReInit.call(this);this.PO._ReInit();this.PP._ReInit();this.SB._ReInit();this.
Wb._ReInit();this.SE._ReInit();this.SC._ReInit();this.D5._ReInit();this.Acz._ReInit(
);this.Jh(A.aaR(A.acf.Device));this.PO.T(A.aaR(A.acf.A$9));this.PO.IX(A.aaR(A.acf.
AHj));this.PO.Ji(A.aaR(A.acf.AHj));this.PP.T(A.aaR(A.acf.Bae));this.SB.T(A.aaR(A.
acf.HG));this.Wb.T(A.aaR(A.acf.A57));this.SE.T(A.aaR(A.acf.AsW));this.SC.T(A.aaR(
A.acf.Asz));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.PO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUK={We:null,Wd:
null,QS:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bjc
],this.QS.Q,0);},Bjc:function(G){var F;A._GetAutoObject(A.Device.Device).Akv((F=
this.QS.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch._Init.call(this,aArg);C.
Nr._Init.call(this.We={I:this},0);C.Nr._Init.call(this.Wd={I:this},0);C.AU3._Init.
call(this.QS={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUK;var B;this.Jh(A.aaR(A.acf.Ass));this.We.H(I2);this.
We.Ai(true);this.We.T(A.aaR(A.acf.AjH));this.We.Bh(false);this.We.Nu(87);this.Wd.
H(AXK);this.Wd.Ai(true);this.Wd.T(A.aaR(A.acf.Aqq));this.Wd.Bh(true);this.Wd.Nu(
88);this.QS.H(U7);this.QS.Ai(true);this.QS.T(A.aaR(A.acf.A5O));this.QS.Bh(false);
this.QS.Gh(-1);this.QS.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.We,0);this.J(this.Wd,0);this.J(this.
QS,0);this.We.AQ=[B=this.We,B.Ny];this.Wd.AQ=[B=this.Wd,B.Ny];this.QS.Au([B=this.
EartagNrAssignmentMode,B.Cb,B.Cd]);this.QS.CH(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.We._Done();this.Wd._Done(
);this.QS._Done();this.EartagNrAssignmentMode._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.We._ReInit();this.Wd._ReInit();this.QS._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jh(A.aaR(A.acf.Ass));this.We.T(A.aaR(
A.acf.AjH));this.Wd.T(A.aaR(A.acf.Aqq));this.QS.T(A.aaR(A.acf.A5O));},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.Xa={Q:null,TransponderProtocolToString:
null,Apt:null,Background:null,Y:null,Sv:null,GP:null,PU:null,OS:null,Px:null,B7:
null,EW:null,SV:null,Oa:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},Hg:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GP.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BO=(F=this.Q,F[1].call(F[0])).BjK();if(BO<900){var JK=A._GetAutoObject(
A.Device.Converter).ANK(BO);if(!!JK)this.B7.R(((this.CountryToString.LC(JK)+AcU)+
BO.toFixed())+Pd);else this.B7.R(BO.toFixed());if(JK===10){var AKo=this.A7F((F=this.
Q,F[1].call(F[0])).Id);this.B7.R(this.B7.String+((((AH5+this.Apt.BqF(AKo))+AcU)+
A.abl(this.Apt.BqE(AKo),2,10))+Pd));}this.B7.Z(true);this.Px.Z(true);this.OS.Z(false
);this.PU.Z(false);}else{this.OS.R(((A._GetAutoObject(A.Device.Converter).Biu(BO
)+AcU)+BO.toFixed())+Pd);this.OS.Z(true);this.PU.Z(true);this.B7.Z(false);this.Px.
Z(false);}if(BO===276){this.EW.R(this.Apt.BU(this.A7F((F=this.Q,F[1].call(F[0])).
Id)));this.EW.Z(true);}else this.EW.Z(false);this.Oa.R(this.TransponderProtocolToString.
BU((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GP.R(A.jV);this.OS.
R(A.jV);this.EW.R(A.jV);this.B7.R(A.jV);this.Oa.R(A.jV);}},A7F:function(Jp){var QB=
0;var JK=A._GetAutoObject(A.Device.Converter).Ta(Jp);switch(JK){case 10:{var Gm=
A._GetAutoObject(A.Device.Converter).AVO(Jp);QB=A._GetAutoObject(A.Device.Converter
).AC_(Gm);}break;default:;}return QB;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apt={I:this},0);A.acg.AK.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sv={I:this},0);C.CG._Init.call(this.GP={I:this},0);C.CG._Init.
call(this.PU={I:this},0);C.CG._Init.call(this.OS={I:this},0);C.CG._Init.call(this.
Px={I:this},0);C.CG._Init.call(this.B7={I:this},0);C.CG._Init.call(this.EW={I:this
},0);C.CG._Init.call(this.SV={I:this},0);C.CG._Init.call(this.Oa={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Xa;
this.H(AcW);this.Background.A1(0x3F);this.Background.H(AcW);this.Background.L(A.
jb.CV);this.Y.A1(0x3F);this.Y.H(AcW);this.Y.J3(9);this.Sv.H(AH6);this.Sv.Ai(true
);this.Sv.R(A.aaR(A.acf.GP)+A.aaR(A.acf.Colon));this.Sv.A4(0x11);this.Sv.L(A.jb.
Text);this.GP.H(AXL);this.GP.Ai(true);this.GP.R(AH7);this.GP.A4(0x14);this.GP.L(
A.jb.Text);this.PU.H(AH8);this.PU.Ai(true);this.PU.R(A.aaR(A.acf.A$C)+A.aaR(A.acf.
Colon));this.PU.A4(0x11);this.PU.L(A.jb.Text);this.OS.H(AH9);this.OS.Ai(true);this.
OS.R(AXM);this.OS.A4(0x14);this.OS.L(A.jb.Text);this.Px.H(AH8);this.Px.Ai(true);
this.Px.R(A.aaR(A.acf.B7)+A.aaR(A.acf.Colon));this.Px.A4(0x11);this.Px.L(A.jb.Text
);this.B7.H(AH9);this.B7.Ai(true);this.B7.R(AXN);this.B7.A4(0x14);this.B7.L(A.jb.
Text);this.EW.H(AXO);this.EW.Ai(true);this.EW.R(AXP);this.EW.A4(0x14);this.EW.L(
A.jb.Text);this.SV.H(AXQ);this.SV.Ai(true);this.SV.R(A.aaR(A.acf.Oa)+A.aaR(A.acf.
Colon));this.SV.A4(0x11);this.SV.L(A.jb.Text);this.Oa.H(AXR);this.Oa.Ai(true);this.
Oa.R(AXS);this.Oa.A4(0x14);this.Oa.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sv,0);this.J(this.GP,0);this.J(this.PU,0);this.J(this.OS,0
);this.J(this.Px,0);this.J(this.B7,0);this.J(this.EW,0);this.J(this.SV,0);this.J(
this.Oa,0);this.Sv.S(A.aaL(A.fl.Ak));this.Sv.AY(A.aaL(A.fl.Bg));this.GP.S(A.aaL(
A.fl.Ak));this.GP.AY(A.aaL(A.fl.Bg));this.PU.S(A.aaL(A.fl.Ak));this.PU.AY(A.aaL(
A.fl.Bg));this.OS.S(A.aaL(A.fl.Ak));this.OS.AY(A.aaL(A.fl.Bg));this.Px.S(A.aaL(A.
fl.Ak));this.Px.AY(A.aaL(A.fl.Bg));this.B7.S(A.aaL(A.fl.Ak));this.B7.AY(A.aaL(A.
fl.Bg));this.EW.S(A.aaL(A.fl.Ak));this.EW.AY(A.aaL(A.fl.Bg));this.SV.S(A.aaL(A.fl.
Ak));this.SV.AY(A.aaL(A.fl.Bg));this.Oa.S(A.aaL(A.fl.Ak));this.Oa.AY(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apt._Done();this.Background._Done();this.Y._Done();this.Sv._Done();
this.GP._Done();this.PU._Done();this.OS._Done();this.Px._Done();this.B7._Done();
this.EW._Done();this.SV._Done();this.Oa._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apt._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sv.
_ReInit();this.GP._ReInit();this.PU._ReInit();this.OS._ReInit();this.Px._ReInit(
);this.B7._ReInit();this.EW._ReInit();this.SV._ReInit();this.Oa._ReInit();this.CountryToString.
_ReInit();this.Sv.R(A.aaR(A.acf.GP)+A.aaR(A.acf.Colon));this.PU.R(A.aaR(A.acf.A$C
)+A.aaR(A.acf.Colon));this.Px.R(A.aaR(A.acf.B7)+A.aaR(A.acf.Colon));this.SV.R(A.
aaR(A.acf.Oa)+A.aaR(A.acf.Colon));this.Sv.S(A.aaL(A.fl.Ak));this.Sv.AY(A.aaL(A.fl.
Bg));this.GP.S(A.aaL(A.fl.Ak));this.GP.AY(A.aaL(A.fl.Bg));this.PU.S(A.aaL(A.fl.Ak
));this.PU.AY(A.aaL(A.fl.Bg));this.OS.S(A.aaL(A.fl.Ak));this.OS.AY(A.aaL(A.fl.Bg
));this.Px.S(A.aaL(A.fl.Ak));this.Px.AY(A.aaL(A.fl.Bg));this.B7.S(A.aaL(A.fl.Ak)
);this.B7.AY(A.aaL(A.fl.Bg));this.EW.S(A.aaL(A.fl.Ak));this.EW.AY(A.aaL(A.fl.Bg)
);this.SV.S(A.aaL(A.fl.Ak));this.SV.AY(A.aaL(A.fl.Bg));this.Oa.S(A.aaL(A.fl.Ak));
this.Oa.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.B7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oa)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.Q0={D4:null,A$R:A.jV,Aj:function(Ae){C.Fn.Aj.call(
this,Ae);if(this.MD.Fp())this.D4.CW(A.jb.AV);else this.D4.CW(this.Background.AR);
this.D4.ZB(this.G_.AR);},ZG:function(E){if(this.A$R===E)return;this.A$R=E;this.D4.
Text.R(E);this.D4.Z(E!==A.jV);},_Init:function(aArg){C.Fn._Init.call(this,aArg);
C.D4._Init.call(this.D4={I:this},0);this.__proto__=C.Q0;this.Background.H(AXT);this.
MD.H(Xf);this.OL.H(AH_);this.Q6.H(AH_);this.D4.H(AXU);this.D4.Z(false);this.J(this.
D4,0);this.G_.S(A.aaL(A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=C.Fn;this.D4._Done();C.Fn._Done.call(this
);},_ReInit:function(){C.Fn._ReInit.call(this);this.D4._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.AY(A.aaL(A.fl.Ak));this.G_.Cm(A.aaL(A.fl.Bg));},_Mark:function(
D){var B;C.Fn._Mark.call(this,D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D4={B9:null,AeL:null,Ap:null,Text:null
,DM:A.jV,AmU:0,Nb:0,Jj:0,A5_:0x14,Init:function(aArg){},T:function(E){if(this.DM===
E)return;this.DM=E;this.Text.R(E);},BDh:function(G){this.Ap.H(this.Text.M);this.
AeL.H(this.Text.M);},ZB:function(E){if(this.AmU===E)return;this.AmU=E;this.AeL.L(
E);this.Text.L(E);},CW:function(E){if(this.Nb===E)return;this.Nb=E;this.Ap.L(E);
},S:function(E){if(this.B9===E)return;this.B9=E;this.Text.S(E);},Ho:function(E){
if(this.Jj===E)return;this.Jj=E;this.Text.Ho(E);},BmE:function(E){if(this.A5_===
E)return;this.A5_=E;this.Text.A4(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.N1._Init.call(this.AeL={I:this},0);A.acg.N1._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D4;this.H(AH$);
this.AeL.A1(0x8);this.AeL.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CV);this.Text.
A1(0xD);this.Text.H(AH$);this.Text.Ho(5);this.Text.Jg(true);this.Text.A4(0x14);this.
Text.L(A.jb.Text);this.J(this.AeL,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeL.Ax(A.aaL(A.ach.AP7));this.Ap.Ax(A.aaL(A.ach.AP6));this.Text.Q9([this,this.BDh
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeL._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeL._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ud={DZ:null,Y:null,Ay:null,DG:function(G){var B;C.AB.DG.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALw(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkQ();A._GetAutoObject(A.Device.Helper).Asw();},Ik:function(G){},Ac1:function(
s){this.Ik(s);},A33:function(G){A._GetAutoObject(C.A5).FA();},Fi:function(G){var
B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.
ML(-this.Y.Bs[1]);},ALw:function(G){},BHq:function(s){this.ALw(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ud;this.Background.L(A.jb.CV);this.N.Z(true);this.N.CS(A.jV);this.Ds(C.Aq6);this.
DZ.A1(0x3F);this.DZ.H(Fd);this.DZ.L(A.jb.CL);this.Y.H(Fd);this.Y.J3(9);this.Ay.H(
Ix);this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CF=[this,this.A33
];this.N.C4(A.aaL(A.ach.E3));this.Y.Eo=[this,this.Fi];},_Done:function(){this.__proto__=
C.AB;this.DZ._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV8={WJ:function(
G){this.AgB();this.I9(A.aaR(A.acf.AVE),[this,this.AT3],7);this.I9(A.aaR(A.acf.Bpe
),[this,this.BmH],6);this.I9(A.aaR(A.acf.AGs),[this,this.ATP],3);this.I9(A.aaR(A.
acf.An6),[this,this.Aw3],2);this.I9(A.aaR(A.acf.Ad0),[this,this.AE9],1);this.I9(
A.aaR(A.acf.AuL),[this,this.AE3],0);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).Ms(A.aaR(A.acf.Ank)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DG:function(G){},AbB:function(){return C.ANl;},AbC:function(){return C.APN;
},Ra:function(G){var Be=A._GetAutoObject(A.Device.Helper).ME();var ABL=A._NewObject(
A.Device.BoolFilterCriterion,0);ABL.Initialize(12,0,true,true);Be.CY(ABL);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HR:function(G){var F;C.GL.HR.call(this,G);if(this.Aki(
)===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajs((F=this.Fl,F[1].call(
F[0]))));this.N.Cf=[this,this.Aas];this.N.E6(A.jV);}this.N.OX(false);this.N.OY(false
);},Agn:function(){A._GetAutoObject(C.A5).Cc(41);},_Init:function(aArg){C.GL._Init.
call(this,aArg);this.__proto__=C.AV8;var B;this.Ds(C.APJ);this.Dl(A.aaR(A.acf.A8z
));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A9Z,B.Bb9]);},_ReInit:function(
){C.GL._ReInit.call(this);this.Dl(A.aaR(A.acf.A8z));},_className:"Application::WatchListScreen"
};C.AMs={DG:function(G){var B;var JL=(A.Core.BG.isPrototypeOf(G)?G:null);if(((JL.
CP===4)||(JL.CP===5))===false){C.Ax_.DG.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var BdB=A._GetAutoObject(A.Device.Device
).K2;var Tq;if(JL.CP===5)Tq=5;else Tq=4;var ABp=A._GetAutoObject(A.acj.DV).Bd$(BdB
,Tq);var FM=(((BdB+((ABp/2)|0))/ABp)|0)*ABp;if(JL.CP===4)FM+=ABp;else if(JL.CP===
5)FM-=ABp;if(FM>999900)FM=999900;if(FM<100)FM=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FM);},AsJ:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O_,B.CF],this);else A._GetAutoObject(C.A5).FA();
},W2:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsL();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$7()===false){this.H$.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K2
);this.H$.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A5).FA();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H$.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K2);this.H$.Cs(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A5).FA();}},AkY:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O_,B.Ce],this);},Bd_:function(){var
ALK=A._GetAutoObject(A.Device.Helper).W.AhX(1);if(ALK>=100000)ALK=(Math.round(ALK
/1000)|0)*1000;return ALK;},_Init:function(aArg){C.Ax_._Init.call(this,aArg);this.
__proto__=C.AMs;},_className:"Application::AnimalActionWeighingScreen"};C.AVS={Wi:
null,YX:null,Rh:null,AeW:null,_Init:function(aArg){C.Ch._Init.call(this,aArg);C.
BW._Init.call(this.Wi={I:this},0);C.BW._Init.call(this.YX={I:this},0);C.Rh._Init.
call(this.Rh={I:this},0);C.AeW._Init.call(this.AeW={I:this},0);this.__proto__=C.
AVS;var B;this.Jh(A.aaR(A.acf.AHk));this.Wi.H(Ah3);this.Wi.Ai(true);this.Wi.T(A.
aaR(A.acf.Bay));this.Wi.Bh(true);this.Wi.By(0);this.YX.H(U7);this.YX.Ai(true);this.
YX.T(A.aaR(A.acf.Bax));this.YX.Bh(false);this.J(this.Wi,0);this.J(this.YX,0);this.
Wi.Au([B=this.Rh,B.Cb,B.Cd]);this.Wi.CH(this.Rh);this.YX.Au([B=this.AeW,B.Cb,B.Cd
]);this.YX.CH(this.AeW);},_Done:function(){this.__proto__=C.Ch;this.Wi._Done();this.
YX._Done();this.Rh._Done();this.AeW._Done();C.Ch._Done.call(this);},_ReInit:function(
){C.Ch._ReInit.call(this);this.Wi._ReInit();this.YX._ReInit();this.Rh._ReInit();
this.AeW._ReInit();this.Jh(A.aaR(A.acf.AHk));this.Wi.T(A.aaR(A.acf.Bay));this.YX.
T(A.aaR(A.acf.Bax));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.
Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeW={MassUnitToString:null
,Dv:function(){return 2;},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwZ(E);}
,Init:function(aArg){var B;A.zX([this,this.BeP],[B=A._GetAutoObject(A.Device.Device
),B.ASS,B.A0L],0);A.pe([this,this.BeP],this);},BeP:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeW;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax_={H$:null,Ajy:null,MassUnit:null,
K2:null,VJ:null,AnS:null,AcN:null,Z9:null,O_:null,YO:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DV).Af_());A.zX([this,this.AKM],[B=A._GetAutoObject(
A.Device.Device),B.AET,B.AI4],0);A.zX([this,this.BB7],[B=A._GetAutoObject(A.Device.
Device),B.AEZ,B.AI8],0);A.zX([this,this.BB8],[B=this.O_,B.ArG,B.JF],0);},Aj:function(
Ae){C.AB.Aj.call(this,Ae);this.Ax3();this.Z$();},H0:function(G){this.W2(this);},
CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsL();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),
0,null);this.H$.G8();this.H$.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AG1();else{var BDw=this.Bd_();this.Z9.Z(true);this.AcN.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BDw);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsL();else A._GetAutoObject(A.Device.Device).AhQ(
);},Ax3:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.BhA();break;case 3:{this.BhA();this.Z9.Z(false);this.AcN.Z(false
);if(this.A$7()){this.VJ.Z(false);this.K2.H(A.abO(this.K2.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O_.As(true);this.O_.Z(true);this.Ba(this.O_);}}break;
case 4:this.K2.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AIa,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z$:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C4(A.aaL(A.ach.AeG));this.N.Cu(null);
this.YO.Z(false);this.N.C5(A.aaL(A.ach.Am7));this.N.CS(A.jV);}break;case 3:{if(this.
O_.A0<=1){this.N.C4(null);this.N.Cu(null);this.YO.Z(false);this.N.C5(null);}else{
this.N.C4(A.aaL(A.ach.Am6));this.N.Cu(A.aaL(A.ach.AeH));this.YO.Z(true);this.N.C5(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C5(A.aaL(A.ach.AvS));this.
N.Ce=[this,this.Bmu];this.N.Cu(null);this.YO.Z(false);this.N.CS(A.jV);}break;default:;
}},AsJ:function(G){},Bxj:function(s){this.AsJ(s);},W2:function(G){},A03:function(
s){this.W2(s);},Bmu:function(G){this.CC(this);},BB7:function(G){this.Am();},AKM:
function(G){this.Am();},A$7:function(){var AuC=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AuC>0)&&!A._GetAutoObject(A.Device.Helper).BqC(AuC
,this.H$.Timestamp);},AkY:function(G){},A02:function(s){this.AkY(s);},BB8:function(
G){this.Am();},BhA:function(){this.K2.R(A._GetAutoObject(A.Device.Converter).Ak_(
A._GetAutoObject(A.Device.Device).K2));},Bd_:function(){return A._GetAutoObject(
A.Device.Helper).W.AhX(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AK._Init.call(this.Ajy={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K2={I:this},0);A.acg.Text._Init.call(this.VJ={I:this
},0);C.Ax2._Init.call(this.AnS={I:this},0);A.acg.Aev._Init.call(this.AcN={I:this
},0);A.acg.Aev._Init.call(this.Z9={I:this},0);C.AWb._Init.call(this.O_={I:this},
0);A.acg.Ap._Init.call(this.YO={I:this},0);this.__proto__=C.Ax_;this.Background.
L(A.jb.CL);this.N.Z(true);this.Ds(C.IQ);this.Ajy.A1(0x3F);this.Ajy.H(AyB);this.Ajy.
L(A.jb.CL);this.MassUnit.H(AXV);this.MassUnit.A4(0x9);this.MassUnit.R(A.aaR(A.acf.
AAl));this.MassUnit.L(A.jb.Text);this.K2.H(AXW);this.K2.A4(0x14);this.K2.R(A.aaR(
A.acu.Akl));this.K2.L(A.jb.Text);this.VJ.H(AXX);this.VJ.R(A.aaR(A.acf.BaJ));this.
VJ.L(A.jb.Text);this.VJ.Z(true);this.AnS.H(AXY);this.AcN.H(AXZ);this.AcN.L(A.jb.
Aeg);this.AcN.Z(false);this.Z9.H(AX0);this.Z9.L(A.jb.Aeg);this.Z9.Bnh(true);this.
Z9.Z(false);this.O_.A1(0x3F);this.O_.H(AyB);this.O_.As(false);this.O_.Z(false);this.
YO.H(AX1);this.YO.L(A.jb.Bm);this.J(this.Ajy,0);this.J(this.MassUnit,0);this.J(this.
K2,0);this.J(this.VJ,0);this.J(this.AcN,0);this.J(this.Z9,0);this.J(this.O_,0);this.
J(this.YO,0);this.N.CF=[this,this.Bxj];this.N.Cf=[this,this.A02];this.N.Ce=[this
,this.A03];this.MassUnit.S(A.aaL(A.fl.EL));this.K2.S(A.aaL(A.fl.Aez));this.VJ.S(
A.aaL(A.fl.EL));this.AcN.ZF(this.AnS);this.Z9.ZF(this.AnS);this.H$=A._NewObject(
A.Device.Rating,0);this.O_.L9(A._GetAutoObject(A.Device.Helper).W);this.O_.AkD(this.
H$);this.YO.Ax(A.aaL(A.ach.AQ3));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajy._Done();this.MassUnit._Done();this.K2._Done();this.VJ._Done();this.
AnS._Done();this.AcN._Done();this.Z9._Done();this.O_._Done();this.YO._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajy._ReInit();
this.MassUnit._ReInit();this.K2._ReInit();this.VJ._ReInit();this.AnS._ReInit();this.
AcN._ReInit();this.Z9._ReInit();this.O_._ReInit();this.YO._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAl));this.K2.R(A.aaR(A.acu.Akl));this.VJ.R(A.aaR(A.acf.BaJ));this.
MassUnit.S(A.aaL(A.fl.EL));this.K2.S(A.aaL(A.fl.Aez));this.VJ.S(A.aaL(A.fl.EL));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H$)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AWf={FO:null
,OT:null,Nn:null,C$:null,L6:null,Ua:null,Init:function(aArg){var B;A.zX([this,this.
GJ],[B=this.FO,B.Cb,B.Cd],0);A.pe([this,this.GJ],this);},CC:function(G){C.Ch.CC.
call(this,G);A.pe([this,this.GJ],this);},Blg:function(G){var F;this.L6.BX.L(this.
L6.V.AR);if(!!this.L6.Q)this.L6.BX.R((A._GetAutoObject(A.Device.Converter).Th((F=
this.L6.Q,F[1].call(F[0])),2,true)+CJ)+A._GetAutoObject(A.acj.DV).AaF());},GJ:function(
G){var AJI=true;if(this.FO.Q===1)AJI=false;this.C$.Ai(AJI);this.C$.As(AJI);this.
C$.Z(AJI);A._GetAutoObject(A.Device.Helper).ANE(this.Y);},_Init:function(aArg){C.
Ch._Init.call(this,aArg);C.AMO._Init.call(this.FO={I:this},0);C.AHv._Init.call(this.
OT={I:this},0);C.AU8._Init.call(this.Nn={I:this},0);C.AkW._Init.call(this.C$={I:
this},0);C.Iv._Init.call(this.L6={I:this},0);C.BW._Init.call(this.Ua={I:this},0);
this.__proto__=C.AWf;var B;this.Jh(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
AsZ));this.FO.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OT.Au(A._GetAutoObject(
A.Device.Device).OT);this.Nn.H(AX2);this.Nn.Ai(true);this.C$.H(Aos);this.C$.Ai(true
);this.C$.T(A.aaR(A.acf.KQ));this.C$.Bh(true);this.C$.Gh(1000);this.C$.EV(99000);
this.L6.H(Atd);this.L6.Ai(true);this.L6.T(A.aaR(A.acf.A5S));this.L6.Gh(50);this.
L6.EV(2000);this.L6.ATv(A._GetAutoObject(A.acj.DV).Az3());this.Ua.H(AcX);this.Ua.
Ai(true);this.Ua.T(A.aaR(A.acf.A8h));this.Ua.Gh(-1);this.Ua.EV(1);this.Iu(this.Y
,-1);this.Iu(this.Ay,-1);this.J(this.Nn,0);this.J(this.C$,0);this.J(this.L6,0);this.
J(this.Ua,0);this.Nn.Ab9([B=this.Nn,B.F_]);this.Nn.FT([this,this.D2,this.Gu]);this.
Nn.AkA(A.aaL(A.ach.Edit));this.Nn.Lu([B=this.Nn,B.Ay7]);this.Nn.Kz(A.aaL(A.ach.AnW
));this.Nn.Au([B=this.FO,B.Cb,B.Cd]);this.Nn.CH(this.FO);this.Nn.A_Z([B=this.FO,
B.AS$,B.A00]);this.Nn.A_Y([B=this.FO,B.AS_,B.A0Z]);this.C$.FT([this,this.D2,this.
Gu]);this.C$.Lu([B=this.Nn,B.Ay7]);this.C$.Kz(A.aaL(A.ach.AnW));this.C$.Au([B=this.
FO,B.A88,B.ATg]);this.L6.FT([this,this.D2,this.Gu]);this.L6.Lu([B=this.Nn,B.Ay7]
);this.L6.Kz(A.aaL(A.ach.AnW));this.L6.Au([B=this.FO,B.A86,B.ATe]);this.L6.A$a([
this,this.Blg]);this.Ua.FT([this,this.D2,this.Gu]);this.Ua.Au([B=this.OT,B.Cb,B.
Cd]);this.Ua.CH(this.OT);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;
this.FO._Done();this.OT._Done();this.Nn._Done();this.C$._Done();this.L6._Done();
this.Ua._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.FO._ReInit();this.OT._ReInit();this.Nn._ReInit();this.C$._ReInit();this.L6.
_ReInit();this.Ua._ReInit();this.Jh(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
AsZ));this.C$.T(A.aaR(A.acf.KQ));this.L6.T(A.aaR(A.acf.A5S));this.Ua.T(A.aaR(A.acf.
A8h));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.FO)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU8={Y9:null,Init:
function(aArg){var B;A.zX([this,this.AfN],[B=A._GetAutoObject(A.Device.Device),B.
ASS,B.A0L],0);A.pe([this,this.AfN],this);},A4v:function(G){A._GetAutoObject(A.Device.
Device).AZ(37,true,A.jV,0,[this,this.Bcm]);},A2i:function(G){var F;if(this.A8===
1){var BQ=this.D_;this.D_=this.D_-A._GetAutoObject(A.acj.DV).Az3();if(this.D_<this.
AlW)this.D_=this.AlW;if(this.DX!==BQ){if(!!this.J7)(F=this.J7,F[2].call(F[0],this.
D_));A.abo(this.J7,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-A._GetAutoObject(
A.acj.DV).Az3();if(this.DX<this.D_)this.DX=this.D_;if(this.DX!==BQ){if(!!this.J6
)(F=this.J6,F[2].call(F[0],this.DX));A.abo(this.J6,0);}}this.DL(this);this.Am();
},A2U:function(G){var F;if(this.A8===1){var BQ=this.D_;this.D_=this.D_+A._GetAutoObject(
A.acj.DV).Az3();if(this.D_>this.DX)this.D_=this.DX;if(this.D_!==BQ){if(!!this.J7
)(F=this.J7,F[2].call(F[0],this.D_));A.abo(this.J7,0);}}if(this.A8===2){var BQ=this.
DX;this.DX=this.DX+A._GetAutoObject(A.acj.DV).Az3();if(this.DX>this.AlS)this.DX=
this.AlS;if(this.DX!==BQ){if(!!this.J6)(F=this.J6,F[2].call(F[0],this.DX));A.abo(
this.J6,0);}}this.DL(this);this.Am();},GJ:function(G){this.PR.R(AIb+A._GetAutoObject(
A.Device.Converter).Th(this.D_,2,true));this.PQ.R(AIb+A._GetAutoObject(A.Device.
Converter).Th(this.DX,2,true));this.SG.R(A._GetAutoObject(A.acj.DV).AaF());this.
Y9.R(this.SG.String);},A36:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).Asy(this
);},A2N:function(AtA){if(AtA===1)return this.PR;else if(AtA===2)return this.PQ;else
return null;},_Init:function(aArg){C.Acx._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y9={I:this},0);this.__proto__=C.AU8;this.T(A.aaR(A.acf.ACF));this.AlS=
2000;this.AlW=20;this.Background.H(K4);this.V.H(BF);this.V.R(A.aaR(A.acf.ACF)+A.
aaR(A.acf.Colon));this.V.A4(0x12);this.AkN.H(AX3);this.AkO.H(AX4);this.Q_.H(AX5);
this.QJ.H(AX6);this.PQ.H(AX7);this.PR.H(AIc);this.SG.H(AX8);this.Y9.H(AX9);this.
Y9.Jg(false);this.Y9.A4(0x12);this.Y9.L(0xFF000000);this.Iu(this.H8,-8);this.J(this.
Y9,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y9.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acx;this.Y9._Done();C.Acx.
_Done.call(this);},_ReInit:function(){C.Acx._ReInit.call(this);this.Y9._ReInit();
this.T(A.aaR(A.acf.ACF));this.V.R(A.aaR(A.acf.ACF)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y9.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acx._Mark.call(this,D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABQ={M:Pa,A7S:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7S();},_Init:function(
aArg){A.Graphics.HA._Init.call(this,aArg);this.__proto__=C.ABQ;},_className:"Application::AbstractPath"
};C.Aqj={DR:null,DZ:null,Rm:null,AdW:null,P7:null,AdV:null,AuK:1,A5o:0,Bdi:false
,AzZ:true,CQ:function(){this.Bhw(this);},Init:function(aArg){var B;this.Ba(this.
AdW);A.zX([this,this.Bhw],[B=this.AdW,B.A9e,B.BbQ],0);},Aj:function(Ae){C.AB.Aj.
call(this,Ae);this.AdV.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BiO(this.AuK+this.A5o)));if(this.AuK===1)this.P7.R(A.aaR(A.acf.ANs));else this.
P7.R(A.aaR(A.acf.Bin));},CC:function(G){if(this.AzZ)this.AzZ=false;else if(this.
DR.Bds()===false)A.pe([this,this.A3D],this);else if(this.DR.AAd())this.DR.Add();
A.zV([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);},A3D:function(G){this.
Bdi=true;A._GetAutoObject(C.A5).FA();},Bhw:function(G){var B;var BdU=(C.Wu.isPrototypeOf(
B=this.AdW.AV)?B:null);if(!!BdU){var Azk=A._NewObject(A.Device.ActionToString,0);
this.Rm.R(Azk.LC(BdU.Action));}},Ik:function(G){var Cz=(C.Wu.isPrototypeOf(G)?G:
null);if(!Cz)return;this.DR.Qr(Cz.Action);this.Bmx(this.AuK+1);},BBz:function(G){
if(A._GetAutoObject(C.Pr).MG(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmx:function(E){
if(this.AuK===E)return;this.AuK=E;this.Am();},AaO:function(G){if((this.Bdi===false
)&&(this.DR.Bds()===false))A.pe([this,this.A3D],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);C.CG._Init.call(this.
Rm={I:this},0);C.ARY._Init.call(this.AdW={I:this},0);C.CG._Init.call(this.P7={I:
this},0);A.acg.Text._Init.call(this.AdV={I:this},0);this.__proto__=C.Aqj;this.Background.
L(A.jb.CV);this.N.H(U6);this.N.Z(true);this.Ds(C.IQ);this.DZ.A1(0x3F);this.DZ.H(
Fd);this.DZ.L(A.jb.CL);this.Rm.H(AX_);this.Rm.L(A.jb.Text);this.AdW.H(AX$);this.
P7.H(AYa);this.P7.R(A.aaR(A.acf.ANs));this.P7.L(A.jb.Text);this.AdV.H(AYb);this.
AdV.R(AYc);this.AdV.L(A.jb.Text);this.J(this.DZ,0);this.J(this.Rm,0);this.J(this.
AdW,0);this.J(this.P7,0);this.J(this.AdV,0);this.N.CF=[this,this.A3D];this.N.Cf=[
this,this.BBz];this.N.C4(A.aaL(A.ach.E3));this.N.Cu(A.aaL(A.ach.AeJ));this.Rm.S(
A.aaL(A.fl.EL));this.Rm.AY(A.aaL(A.fl.Af));this.Rm.Cm(A.aaL(A.fl.Ak));this.AdW.A34=[
this,this.Ik];this.P7.S(A.aaL(A.fl.EL));this.P7.AY(A.aaL(A.fl.Af));this.P7.Cm(A.
aaL(A.fl.Ak));this.AdV.S(A.aaL(A.fl.H5));this.DR=A._GetAutoObject(C.DR);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Rm._Done();this.
AdW._Done();this.P7._Done();this.AdV._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DZ._ReInit();this.Rm._ReInit();this.AdW._ReInit();
this.P7._ReInit();this.AdV._ReInit();this.P7.R(A.aaR(A.acf.ANs));this.Rm.S(A.aaL(
A.fl.EL));this.Rm.AY(A.aaL(A.fl.Af));this.Rm.Cm(A.aaL(A.fl.Ak));this.P7.S(A.aaL(
A.fl.EL));this.P7.AY(A.aaL(A.fl.Af));this.P7.Cm(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DR)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdV)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARY={If:null,A34:null,Cr:null,Y:null,Ay:
null,A4K:0,Init:function(aArg){A.zV([this,this.ABF],this.If,0);A.zV([this,this.Bht
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuH],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABF],this);},Ba:function(E){var A3z=this.AV;
A.Core.P.Ba.call(this,E);if(this.AV!==A3z)A.abo([this,this.A9e,this.BbQ],0);},DG:
function(G){var B;var Fg=0;var X=this.AV;switch(this.Cr.CP){case 6:Fg=2;break;case
7:Fg=7;break;case 4:Fg=4;break;case 5:Fg=5;break;default:;}X=this.QM(X,Fg,0x415);
if((Fg===5)&&!X){var ALm=this.AV;while(!X){ALm=this.QM(ALm,2,0x415);if(!!ALm)X=this.
QM(ALm,Fg,0x415);else break;}}if(!!X)this.Ba(X);var G0=(C.Wu.isPrototypeOf(B=this.
AV)?B:null);if(!!G0)this.A4K=(C.Wu.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4K=0;A.pe([this,this.M3],this);},A2a:function(Ej){var EQ=A._GetAutoObject(C.DR).
BdA(Ej,this.A34);this.J(EQ,0);},Ao6:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdR=X;X=X.Ah;if(((AdR.U&0x400)===0x400))this.HQ(AdR);
}},ABF:function(G){this.Ao6();var O;var CB=A._GetAutoObject(C.Pr).Ni();for(O=0;O<
CB;O=O+1){var To=A._GetAutoObject(C.Pr).OM(O);this.A2a(To);}A.pe([this,this.Bht]
,this);A.pe([this,this.BqY],this);A.pe([this,this.AuH],this);},BqY:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wu.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wu.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATY(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATY(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATY(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((
B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},Bht:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wu.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pr).MG(Aa.Action)&&A._GetAutoObject(C.
DR).A5n(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4K===Aa.Action)this.Ba(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.M3],this);},M3:function(G){var B;this.Y.VH(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BG._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARY;this.H(AYd);this.Cr.Filter=147;this.Y.A1(0xB);this.Y.H(AId);this.Y.J3(9);this.
Ay.A1(0xA);this.Ay.H(AYe);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BH=[this,this.
DG];this.Cr.D3=[this,this.DG];this.Y.Eo=[this,this.Fi];this.If=A._GetAutoObject(
C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.If)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A34)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fr={Em:null,AK:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Em._Init.call(this.Em={I:this},0);A.acg.AK._Init.call(this.AK={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fr;this.N.As(false);this.Em.H(BF);this.Em.As(false
);this.AK.H(Fd);this.AK.L(A.jb.Aeg);this.Text.H(BF);this.Text.R(AYf);this.Text.L(
0xFF000000);this.Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Em,0);this.J(this.AK,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cu(A.aaL(A.ach.AeJ));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADt));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Em._Done();this.AK._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Em._ReInit();this.AK._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Aa3={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H0:function(G){},Aj:function(Ae){C.BW.
Aj.call(this,Ae);var FY=A.jb.Aeg;var GZ=A.jb.CV;if(this.Hm){FY=A.jb.Text;GZ=A.jb.
Bm;}if(!this.LQ){this.Background.L(A.jb.CV);this.V.L(A.jb.CL);}else if(this.Qx){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KN){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);}this.Hy.L(A.
jb.CV);this.H8.L(A.jb.CV);},Hn:function(G){var B;var Gk=this.DC.G6;var CA=(C.CG.
isPrototypeOf(B=this.DC.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AY(A.aaL(
A.fl.Bg));CA.L(this.V.AR);if(!!this.AC)CA.R(this.AC.Ge(Gk));else CA.R(Xp);CA.H(A.
abK(CA.M,[this.DC.Wk,(B=this.DC.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.Aa3;this.DC.AFx(170);this.DC.N_(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajl={C_:null,Init:function(
aArg){this.V.Text.A4(0x11);this.V.Text.Ho(10);this.V.S(A.aaL(A.fl.Ak));},Aj:function(
Ae){C.Cp.Aj.call(this,Ae);var FY=A.jb.Aeg;var GZ=A.jb.CV;if(this.Hm){FY=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LQ){this.Background.L(A.jb.CV);this.V.L(A.jb.CL);}else if(this.
Qx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KN){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajl;this.C_.H(AYg);this.C_.Cx(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Ajv)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.C_._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Cp._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL$={Y:null,RU:null,TB:null
,TC:null,TD:null,AdU:null,XX:null,VB:null,VC:null,Aa2:null,Ay:null,Init:function(
aArg){this.Ba(this.RU);},DG:function(G){C.Fr.DG.call(this,G);this.M3(this);},H0:
function(G){this.BgK(this);},Ls:function(){if(!this.BR){this.BR=A._NewObject(C.N
,0);this.BR.CF=[this,this.BgK];this.BR.Cf=null;this.BR.Ce=null;this.BR.CS(A.jV);
this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},ABi:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XX.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XX.Q))A._GetAutoObject(C.AutoActions).J(this.XX.Q);if(!!this.VB.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VB.Q))A._GetAutoObject(C.AutoActions
).J(this.VB.Q);if(!!this.VC.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VC.
Q))A._GetAutoObject(C.AutoActions).J(this.VC.Q);if(!!this.Aa2.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aa2.Q))A._GetAutoObject(C.AutoActions).J(this.Aa2.Q
);A._GetAutoObject(C.AutoActions).Cs();},BgK:function(G){if(this.BAG()===true){this.
ABi();this.AaQ(this);}else A._GetAutoObject(A.Device.Device).AZ(27,true,A.jV,0,null
);},BAG:function(){return(!!this.XX.C8(this.XX.Q)||!!this.VB.C8(this.VB.Q))||!!this.
VC.C8(this.VC.Q);},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},M3:function(G){var B;this.
Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true
,null,null);},BBN:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XX.AtH(this);this.VB.AtH(this);this.VC.AtH(this);this.Aa2.AtH(this);}
,_Init:function(aArg){C.Fr._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.Aa3._Init.call(this.RU={I:this},0);C.Aa3._Init.call(this.TB={I:this},0);C.
Aa3._Init.call(this.TC={I:this},0);C.Aa3._Init.call(this.TD={I:this},0);C.Avc._Init.
call(this.AdU={I:this},0);C.AutoAction._Init.call(this.XX={I:this},0);C.AutoAction.
_Init.call(this.VB={I:this},0);C.AutoAction._Init.call(this.VC={I:this},0);C.AutoAction.
_Init.call(this.Aa2={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL$;var B;this.H(Rs);this.Text.R(A.aaR(A.acf.TE));this.Y.H(LD);this.Y.J3(1);this.
RU.H(Ah3);this.RU.As(true);this.RU.Ai(true);this.RU.T(A._GetAutoObject(A.Device.
Helper).MR(A.aaR(A.acf.Ajk),Pc,AIe));this.TB.H(U7);this.TB.As(true);this.TB.Ai(true
);this.TB.T(A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.Ajk),Pc,AIf));this.
TC.H(Aar);this.TC.As(true);this.TC.Ai(true);this.TC.T(A._GetAutoObject(A.Device.
Helper).MR(A.aaR(A.acf.Ajk),Pc,AIg));this.TD.H(Alk);this.TD.As(true);this.TD.Ai(
true);this.TD.T(A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.Ajk),Pc,AIh));this.
AdU.H(AyC);this.AdU.Ai(true);this.AdU.T(A.aaR(A.acf.A$O));this.VB.Index=1;this.VC.
Index=2;this.Aa2.Index=3;this.Ay.H(Ix);this.J(this.Y,0);this.J(this.RU,0);this.J(
this.TB,0);this.J(this.TC,0);this.J(this.TD,0);this.J(this.AdU,0);this.J(this.Ay
,0);this.Y.Eo=[this,this.Fi];this.RU.ZC(A.aaL(A.fl.H5));this.RU.ZD(A.aaL(A.fl.H5
));this.RU.Au([B=this.XX,B.Cb,B.Cd]);this.RU.CH(this.XX);this.TB.ZC(A.aaL(A.fl.H5
));this.TB.ZD(A.aaL(A.fl.H5));this.TB.Au([B=this.VB,B.Cb,B.Cd]);this.TB.CH(this.
VB);this.TC.ZC(A.aaL(A.fl.H5));this.TC.ZD(A.aaL(A.fl.H5));this.TC.Au([B=this.VC,
B.Cb,B.Cd]);this.TC.CH(this.VC);this.TD.ZC(A.aaL(A.fl.H5));this.TD.ZD(A.aaL(A.fl.
H5));this.TD.Au([B=this.Aa2,B.Cb,B.Cd]);this.TD.CH(this.Aa2);this.AdU.AQ=[this,this.
BBN];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Y._Done();this.
RU._Done();this.TB._Done();this.TC._Done();this.TD._Done();this.AdU._Done();this.
XX._Done();this.VB._Done();this.VC._Done();this.Aa2._Done();this.Ay._Done();C.Fr.
_Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Y._ReInit();this.
RU._ReInit();this.TB._ReInit();this.TC._ReInit();this.TD._ReInit();this.AdU._ReInit(
);this.XX._ReInit();this.VB._ReInit();this.VC._ReInit();this.Aa2._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TE));this.RU.T(A._GetAutoObject(A.Device.Helper
).MR(A.aaR(A.acf.Ajk),Pc,AIe));this.TB.T(A._GetAutoObject(A.Device.Helper).MR(A.
aaR(A.acf.Ajk),Pc,AIf));this.TC.T(A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.
Ajk),Pc,AIg));this.TD.T(A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.Ajk),Pc
,AIh));this.AdU.T(A.aaR(A.acf.A$O));},_Mark:function(D){var B;C.Fr._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cn={BJ:
A.abi(27,0,null),Dv:function(){return 16;},C8:function(aIndex){if(aIndex>=27)return-
1;return this.BJ.Get(aIndex);},D0:function(A9){var O=0;while(O<27){if(this.BJ.Get(
O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<27){
if(this.BJ.Get(O)>max)max=this.BJ.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BJ=[]).__proto__=C.Cn.BJ;this.__proto__=C.Cn;
},_className:"Application::ArraySelection"};C.AutoAction={If:null,Add:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtH],this.Add,0);A.pe([this,this.
AtH],this);},Dv:function(){return this.If.Ni();},C8:function(aIndex){if(aIndex>=
this.Dv())return-1;return this.If.OM(aIndex);},Ge:function(aIndex){return this.ActionToString.
BU(this.C8(aIndex));},D0:function(A9){var O=0;while(O<this.Dv()){if(this.If.OM(O
)===A9)return O;O=O+1;}return-1;},H7:function(){var O=0;var max=-1;while(O<this.
Dv()){if(this.If.OM(O)>max)max=this.If.OM(O);O=O+1;}return max;},AtH:function(G){
this.Q=this.Add.OM(this.Index);A.abo([this,this.Cb,this.Cd],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.If=A._GetAutoObject(C.AuZ);this.Add=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Add)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMf={AtE:0,Init:function(aArg
){var B;A.zX([this,this.Bff],[B=A._GetAutoObject(A.Device.Device),B.A8U,B.BbA],0
);A.zX([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0G],0);A.pe([
this,this.Bff],this);A.pe([this,this.Bfc],this);},Clear:function(){C.VG.Clear.call(
this);this.AtE=0;},Cs:function(){A._GetAutoObject(A.Device.Device).ArL(this.AtE);
A._GetAutoObject(A.Device.Device).ArM(this.toString());},Bff:function(G){this.AtE=
A._GetAutoObject(A.Device.Device).Pr;A.we(this,0);},Bfc:function(G){this.Fm(A._GetAutoObject(
A.Device.Device).AuM);A.we(this,0);},MG:function(Ej){if((this.AtE&(((B=Ej)<0)?B+
0x100000000:B))===(((B=Ej)<0)?B+0x100000000:B))return true;return false;},AUY:function(
Ej){this.AtE=this.AtE|(((B=Ej)<0)?B+0x100000000:B);},_Init:function(aArg){C.VG._Init.
call(this,aArg);this.__proto__=C.AMf;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pr={_Init:function(){C.AMf._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMg={VE:null,Ay:null,Y:null,JZ:null,CQ:function(
){this.AiM(this);},Init:function(aArg){A.zV([this,this.AiM],this.VE,0);A.pe([this
,this.AiM],this);},DG:function(G){C.Fr.DG.call(this,G);this.M3(this);},Ls:function(
){if(!this.BR){this.BR=A._NewObject(C.N,0);this.BR.CF=[this,this.Ex];this.BR.Cf=[
this,this.A3K];this.BR.Ce=[this,this.A4e];this.BR.C5(A.aaL(A.ach.Arj));this.BR.Cu(
A.aaL(A.ach.Arb));this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},Ex:function(G){if(
this.Bzq()>0){this.ABi();this.AaQ(this);}else A._GetAutoObject(A.Device.Device).
AZ(28,true,A.jV,0,null);},AiM:function(G){this.Ao6();var O;for(O=0;O<this.VE.Ni(
);O=O+1){var To=A._GetAutoObject(C.Pr).OM(O);this.A1O(To);}this.J(this.JZ,0);A.aaS([
this,this.M3],this);},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},M3:function(G){var
B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.
AV,true,null,null);},A1O:function(Ha){var Azk=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.So,0);Aa.T(Azk.BU(Ha));Aa.Ai(true);Aa.G6=Ha;Aa.A_L(this.
VE.MG(Ha));this.J(Aa,0);this.ZN(Aa);},Ao6:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdR=X;X=X.Ah;if(((AdR.U&0x400)===0x400))this.HQ(
AdR);}},ABi:function(){var B;this.VE.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JZ)){var Aa=(C.So.isPrototypeOf(
X)?X:null);if(!!Aa){this.VE.J(Aa.G6);if(Aa.ASQ())this.VE.AUY(Aa.G6);}else A.ab5(
"%s",AyD);}X=X.Ah;}this.VE.Cs();},Bzq:function(){var B;var A4L=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JZ)){var
Aa=(C.So.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASQ())A4L=A4L+1;}else A.ab5("%s"
,AyD);}X=X.Ah;}return A4L;},A3K:function(G){var B;var Aa=(C.So.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAz=(C.So.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAz){this.
AhG(AAz,Aa);A.pe([this,this.M3],this);}}},A4e:function(G){var B;var Aa=(C.So.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA6=(C.So.isPrototypeOf(B=Aa.AI)?B:null);if(!!AA6
){this.AhG(Aa,AA6);A.pe([this,this.M3],this);}}},AqP:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiM],this);},_Init:function(
aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Avc._Init.call(this.JZ={I:this},0);this.__proto__=C.AMg;
this.H(Rs);this.Text.R(A.aaR(A.acf.AEu));this.Ay.H(Ix);this.Y.H(LD);this.Y.J3(1);
this.JZ.H(AyE);this.JZ.Ai(true);this.JZ.T(A.aaR(A.acf.AqP));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JZ,0);this.Y.Eo=[this,this.Fi];this.JZ.AQ=[this,this.AqP
];this.VE=A._GetAutoObject(C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Ay._Done();this.Y._Done();this.JZ._Done();C.Fr._Done.call(this);},_ReInit:
function(){C.Fr._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JZ._ReInit(
);this.Text.R(A.aaR(A.acf.AEu));this.JZ.T(A.aaR(A.acf.AqP));this.CQ();},_Mark:function(
D){var B;C.Fr._Mark.call(this,D);if((B=this.VE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.So={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A4(0x11);this.
V.Text.Ho(10);},Bl:function(aSize){C.Uh.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mx.M[0]));},Aj:function(Ae){var B;C.Uh.Aj.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var GG=this.Bo.Bw;var FY=A.jb.Aeg;var GZ=A.jb.
Bm;if(this.Hm){FY=A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.L(FY);this.V.L(A.
jb.CL);}else if(GG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);
}this.LQ=Hf;this.KN=Fv;this.Qx=GG;},H0:function(G){this.A4c(this);},A4c:function(
G){this.AFf(!this.AmH);},A_L:function(E){this.AFf(E);},ASQ:function(){return this.
AmH;},_Init:function(aArg){C.Uh._Init.call(this,aArg);this.__proto__=C.So;this.Mx.
H(AYh);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VG={CB:0,
If:A.abi(17,0,null),OM:function(HB){return this.If.Get(HB);},Ni:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.If.Set(O,0);this.CB=0;},J:function(
Ej){if(this.CB>=17)A.ab5("%s",Ate);else{this.If.Set(this.CB,Ej);this.CB=this.CB+
1;}},Cs:function(){},Fm:function(Ac3){var AJw=Ac3.indexOf(String.fromCharCode(0x2C
),0);var A2c=A.jV;var O=0;this.CB=0;while(O<17)if(Ac3===A.jV){this.If.Set(O,0);O++;
}else{if(AJw===-1){A2c=Ac3;Ac3=A.jV;}else{A2c=A.abV(Ac3,AJw);Ac3=A.ab1(Ac3,0,AJw+
1);}var To=A.abZ(A2c,0,10)|0;if(this.AD9(To)){this.If.Set(this.CB,To);this.CB=this.
CB+1;O++;}AJw=Ac3.indexOf(String.fromCharCode(0x2C),0);}if(Ac3!==A.jV)A.ab5("%s"
,AIi);},toString:function(){var A3q=(((B=this.If.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3q=(A3q+AIj)+(((B=this.If.Get(O))<0)?B+0x100000000:
B).toFixed();return A3q;},AxF:function(HB,Ej){if(HB>=this.CB){A.ab5("%s",((((AYi+
HB.toFixed())+AYj)+this.CB.toFixed())+AYk)+AYl);return;}this.If.Set(HB,Ej);},Contains:
function(Ej){var O;for(O=0;O<this.CB;O=O+1)if(this.If.Get(O)===Ej)return true;return false;
},AD9:function(Ej){return true;},D0:function(Ej){var O;for(O=0;O<this.CB;O=O+1)if(
this.If.Get(O)===Ej)return O;return-1;},_Init:function(aArg){(this.If=[]).__proto__=
C.VG.If;this.__proto__=C.VG;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMY={Init:function(aArg){var B;A.zX([this,this.Bfp],[B=A._GetAutoObject(A.Device.
Device),B.A85,B.BbI],0);A.pe([this,this.Bfp],this);},Cs:function(){A._GetAutoObject(
A.Device.Device).Akt(this.toString());},AD9:function(Ej){switch(Ej){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfp:function(
G){this.Fm(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VG._Init.call(this,aArg);this.__proto__=C.AMY;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMY._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wu={VD:null,KD:null,A7R:A.jV,Action:0,A5p:false,A$z:false,Bai:false,Bl:function(
aSize){C.Fn.Bl.call(this,aSize);this.Q6.H(this.MD.M);this.OL.H(this.Q6.M);},Aj:function(
Ae){C.Fn.Aj.call(this,Ae);if(!this.LQ){this.KD.T5.L(A.jb.Am8);this.KD.QO.Z(true);
this.KD.QO.L(A.jb.ARi);}else if(this.Qx){this.KD.T5.L(A.jb.Bm);this.KD.QO.Z(false
);}else if(this.KN){this.KD.T5.L(A.jb.Bm);this.KD.QO.Z(false);}else{this.KD.T5.L(
A.jb.Text);this.KD.QO.Z(true);this.KD.QO.L(A.jb.CV);}},Bmw:function(E){if(this.Action===
E)return;this.Action=E;},BnC:function(E){if(this.A7R===E)return;this.A7R=E;this.
VD.Text.R(E);},ATY:function(E){if(this.Bai===E)return;this.Bai=E;this.KD.Boo(!this.
KD.AVm);},AFO:function(E){if(this.A$z===E)return;this.A$z=E;this.KD.Z(!this.KD.Fp(
));},A_a:function(E){if(this.A5p===E)return;this.A5p=E;this.VD.Z(E);},_Init:function(
aArg){C.Fn._Init.call(this,aArg);C.VD._Init.call(this.VD={I:this},0);C.KD._Init.
call(this.KD={I:this},0);this.__proto__=C.Wu;this.H(AYm);this.Background.H(AYn);
this.G_.As(false);this.G_.Z(false);this.VD.H(AYo);this.VD.Z(false);this.KD.H(AYp
);this.KD.Z(false);this.J(this.VD,0);this.J(this.KD,0);this.MD.Ax(A.aaL(A.ach.ANt
));},_Done:function(){this.__proto__=C.Fn;this.VD._Done();this.KD._Done();C.Fn._Done.
call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.VD._ReInit();this.KD.
_ReInit();},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.VD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.VD={AK:null,Text:null,BY:null,Init:function(
aArg){this.Text.H(this.M);this.BY.H(this.M);this.AK.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BY._Init.call(this.BY={I:this},0);this.__proto__=
C.VD;this.AK.H(AYq);this.AK.L(A.jb.Bkf);this.H(AYr);this.Text.H(AYs);this.Text.L(
A.jb.Text);this.BY.H(AYt);this.BY.Nx(1);this.BY.L(A.jb.Text);this.J(this.AK,0);this.
J(this.Text,0);this.J(this.BY,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AK._Done();this.Text._Done();this.BY._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AK._ReInit();this.Text._ReInit();this.BY._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KD={QO:null
,T5:null,AVm:false,Boo:function(E){if(this.AVm===E)return;this.AVm=E;if(E){this.
T5.Ax(A.aaL(A.ach.ACM));this.QO.Ax(A.aaL(A.ach.ACM));}else{this.T5.Ax(A.aaL(A.ach.
AqJ));this.QO.Ax(A.aaL(A.ach.AqJ));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QO={I:this},0);A.acg.Ap._Init.call(this.T5={I:this
},0);this.__proto__=C.KD;this.H(AyF);this.QO.H(AyF);this.QO.Cx(1);this.T5.H(AyF);
this.T5.Cx(0);this.J(this.QO,0);this.J(this.T5,0);this.QO.Ax(A.aaL(A.ach.AqJ));this.
T5.Ax(A.aaL(A.ach.AqJ));},_Done:function(){this.__proto__=A.Core.P;this.QO._Done(
);this.T5._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QO._ReInit();this.T5._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASk={
FG:null,Bx:null,Dp:null,Dj:null,Kx:null,Zt:10,Aq9:0,AEF:0,ASy:0,Azj:false,L5:false
,Bdr:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lm(
))A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).
An.HL().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.G8();A._GetAutoObject(
A.Device.Helper).Aqm(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAN],this.
Db.Q,0);A.zX([this,this.BBw],this.Dp.Q,0);A.zX([this,this.ABD],this.Dj.Q,0);A.zX([
this,this.ABD],this.Dj.HI.Q,0);A.zX([this,this.ABD],[this,this.ASX,this.AFM],0);
A.zX([this,this.GJ],[B=A._GetAutoObject(A.Device.Device),B.A94,B.Bcc],0);A.zX([this
,this.BfX],this.Bx.Q,0);A.pe([this,this.AAN],this);A.pe([this,this.GJ],this);A.pe([
this,this.ABD],this);A.pe([this,this.BfX],this);},CC:function(G){if(!this.Azj){this.
Azj=true;A.pe([this,this.Ac0],this);}else C.H2.CC.call(this,G);},Agl:function(G){
this.ASy=this.Zt;this.Bdz(this);},Ex:function(G){A._GetAutoObject(A.Device.Helper
).W.FE();A._GetAutoObject(C.A5).FA();},Aut:function(){this.N.CS(A.jV);this.N.C5(
A.aaL(A.ach.ADS));this.N.Ce=[this,this.Ay6];},Al4:function(G){A._GetAutoObject(C.
A5).Cc(55);},AFM:function(E){if(this.Zt===E)return;this.Zt=E;A.abo([this,this.ASX
,this.AFM],0);},Bdz:function(G){var F;if(!this.Zt||(this.Bdr===true)){A._GetAutoObject(
A.Device.Device).AZ(24,false,CJ,0,null);if(this.AEF===1)A._GetAutoObject(A.Device.
Device).AZ(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AZ(23,
true,this.AEF.toFixed(),2000,null);this.Ex(this);return;}this.FG.G8();this.FG.ED(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.FG.N9(A._GetAutoObject(A.Device.
Helper).W.Breed);this.FG.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FG.J4(A._GetAutoObject(A.Device.Helper).W.Gender);this.FG.OV(A._GetAutoObject(A.
Device.Helper).W.IsRegistrationNoticePending);this.FG.Nt(A._GetAutoObject(A.Device.
Helper).W.NaisId);this.FG.Nv(A._GetAutoObject(A.Device.Helper).W.TransponderId);
this.FG.SS(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alx=A._GetAutoObject(
A.Device.Helper).A16(this.FG,(F=this.Dj.H3.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else{A._GetAutoObject(A.Device.Helper).AKu(
this.FG,Alx,(F=this.Dj.H3.Hu,F[1].call(F[0])),this.Zt-1,[this,this.ApK]);A._GetAutoObject(
A.Device.Device).AZ(24,false,CJ,0,null);}},GJ:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);if(this.L5){this.Dp.
Z(false);this.Bx.T(A.aaR(A.acf.ACT));this.Bx.AFh(A.aaL(A.ach.Ack));}else{this.Dp.
Z(true);this.Bx.T(A.aaR(A.acf.AcK));this.Bx.AFh(null);}if((this.Y.BjP(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JR(this.Y.TX(this.AV,0x1));this.Am();
},ATs:function(E){if(this.Aq9===E)return;this.Aq9=E;A.abo([this,this.A9i,this.ATs
],0);},ABD:function(G){var F;var AKg=(F=this.Dj.Q,F[1].call(F[0]));var AAq=-1;switch((
F=this.Dj.H3.Hu,F[1].call(F[0]))){case 0:AAq=AKg+((F=A._GetAutoObject(A.Device.Helper
).Bd7(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zt-1));break;case 1:AAq=(AKg+this.
Zt)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HI.AC.Q){case 0:AAq=(AKg+
this.Zt)-1;break;case 1:AAq=(AKg-this.Zt)+1;break;default:throw new Error(AYu+this.
Dj.HI.AC.Q.toFixed());}break;default:throw new Error(AYv+this.Dj.HI.AC.Q.toFixed(
));}this.ATs(AAq);},BBw:function(G){A.pe([this,this.GJ],this);A.pe([this,this.Auc
],this);},AAN:function(G){A._GetAutoObject(A.Device.Helper).AVU(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
L5);A.pe([this,this.ABD],this);},ApK:function(G){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.ApE();else switch((F=this.Dj.H3.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JR(this.Dj);break;case 0:this.JR(this.Dp
);break;case 1:this.JR(this.Bx);break;default:throw new Error(AyG+(F=this.Dj.H3.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JR(this.Bx);break;case 47:if(
Ar.PopupState===7)this.ApE();else{this.JR(this.Dj);this.JR(this.Bx);}break;case 43:{
this.JR(this.Dj);this.JR(this.Dp);}break;case 42:{this.JR(this.Dj);this.JR(this.
Bx);}break;case 41:break;default:A.ab5("%s%e",Atf,Ar.Id);}},Ai2:function(){this.
FG.Cs(A._GetAutoObject(A.Device.Device).An);this.AEF=this.AEF+1;if(A._GetAutoObject(
A.Device.Helper).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){A._GetAutoObject(
A.Device.Device).AZ(24,false,U8,0,null);A._GetAutoObject(A.Device.Device).AZ(50,
true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),0,null);}else{var Me=A.
_GetAutoObject(A.Device.Device).An.L3(0,this.FG.Id);A._GetAutoObject(A.Device.Device
).SZ(Me);var B3=A._NewObject(A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(this.FG.
Id);B3.OnSetBodyWeight(this.KQ);B3.OnSetTimestamp(this.FG.DateOfBirth);B3.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApE();},ApE:function(){var B;var F,Cv;if(!!(F=this.Bx.
Q,F[1].call(F[0]))){(F=this.Bx.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.L5)(
Cv=this.Dp.Q,Cv[2].call(Cv[0],(F=this.Bx.Q,F[1].call(F[0]))));}if(!this.L5)(Cv=this.
Dp.Q,Cv[2].call(Cv[0],A._GetAutoObject(A.Device.Helper).BaA(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var I4=null;switch((F=this.Dj.H3.Hu,F[1].call(
F[0]))){case 3:I4=[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyY];break;case 2:
I4=[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyZ];break;case 4:case 5:I4=[B=A.
_GetAutoObject(A.Device.Device),B.Anx,B.AoB];break;default:;}if(!!I4){switch((F=
this.Dj.Kr.V3,F[1].call(F[0]))){case 1:I4[2].call(I4[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I4[2].call(I4[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],I4[1].call(I4[0])));
}var XT=100-((this.Zt/this.ASy)*100);A._GetAutoObject(A.Device.Device).AZ(24,true
,(((this.ASy.toFixed()+Atg)+(XT|0).toFixed())+Atg)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBG]);this.AFM(this.Zt-1);A.aaS([this,this.Bdz],null);},BBG:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdr=true;},ApL:function(G){var F;C.H2.ApL.call(this,G);var AoZ=
0;switch((F=this.B1.Q,F[1].call(F[0]))){case 0:case 2:AoZ=A._GetAutoObject(A.Device.
Device).AdY;break;case 1:AoZ=730;break;default:A.ab5("%s%e",Alg,(F=this.B1.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.
Helper).Dr()-A._GetAutoObject(A.Device.Helper).AmN(AoZ));(F=this.C$.Q,F[2].call(
F[0],this.C$.An3));switch(this.B1.AC.Q){case 0:{this.Kx.Ji(A.aaR(A.acf.ANo));this.
Kx.IX(A.aaR(A.acf.ANp));}break;case 1:{this.Kx.Ji(A.aaR(A.acf.Biw));this.Kx.IX(A.
aaR(A.acf.Bix));}break;case 2:{this.Kx.Ji(A.aaR(A.acf.BkD));this.Kx.IX(A.aaR(A.acf.
BkE));}break;default:throw new Error(Alg);}},Ae_:function(E){if(this.L5===E)return;
this.L5=E;A.abo([this,this.Awm,this.Ae_],0);},Auc:function(G){var F,Cv,Tk;this.Ae_(((
F=this.Bx.Q,F[1].call(F[0]))===(Cv=this.Dp.Q,Cv[1].call(Cv[0])))&&!!(Tk=this.Bx.
Q,Tk[1].call(Tk[0])));A.pe([this,this.GJ],this);},BfX:function(G){A.pe([this,this.
Auc],this);},ASX:function(){return this.Zt;},A9i:function(){return this.Aq9;},Awm:
function(){return this.L5;},_Init:function(aArg){C.H2._Init.call(this,aArg);C.Ary.
_Init.call(this.Bx={I:this},0);C.Rd._Init.call(this.Dp={I:this},0);C.AGR._Init.call(
this.Dj={I:this},0);C.AU_._Init.call(this.Kx={I:this},0);this.__proto__=C.ASk;var
B;this.Ds(C.ADv);this.Bx.H(Aop);this.Bx.Ai(true);this.Bx.T(A.aaR(A.acf.AcK));this.
Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.
aaR(A.acf.Ae2));this.Dp.H(AYw);this.Dp.Ai(true);this.Dp.T(A.aaR(A.acf.Un));this.
Dp.Ar7(false);this.Dj.H(AYx);this.Dj.Ai(true);this.Dj.T(A.aaR(A.acf.A7E));this.Dj.
By(0);this.Kx.H(AYy);this.Kx.Ai(true);this.Kx.T(A.aaR(A.acf.A8L));this.Kx.Gh(1);
this.Kx.EV(500);this.Kx.IX(A.aaR(A.acf.ANp));this.Kx.Ji(A.aaR(A.acf.ANo));this.Kx.
A_C(A.aaR(A.acf.Aq9)+A.aaR(A.acf.Colon));this.Iu(this.Ay,-1);this.J(this.Bx,-1);
this.J(this.Dp,-1);this.J(this.Dj,-1);this.J(this.Kx,-1);this.FG=A._NewObject(A.
Device.Animal,0);this.Bx.AQ=[this,this.Ac0];this.Bx.Lu([this,this.Ac0]);this.Bx.
Kz(A.aaL(A.ach.Ack));this.Bx.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AnA,B.Nv
]);this.Bx.OU([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.Bx.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Bx.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu
,B.AoA]);this.Bx.Ae_([this,this.Awm,this.Ae_]);this.Dp.FT([this,this.D2,this.Gu]
);this.Dp.Lu([this,this.Ac0]);this.Dp.Kz(A.aaL(A.ach.Ack));this.Dp.Uw([B=this.Gender.
Animal,B.WI,B.J4]);this.Dp.OU([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.
Dp.PY([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Dp.Uu([B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoA]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W
,B.Any,B.Nt]);this.Dp.AnB([B=this.AnimalType.Animal,B.PX,B.ED]);this.Dj.FT([this
,this.D2,this.Gu]);this.Dj.Lu([B=this.Dj,B.F_]);this.Dj.Kz(A.aaL(A.ach.Edit));this.
Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,B.SS]);this.Dj.A_b(A._GetAutoObject(
A.Device.Helper).W);this.Kx.Au([this,this.ASX,this.AFM]);this.Kx.Bm0([this,this.
A9i,this.ATs]);this.Init(aArg);},_Done:function(){this.__proto__=C.H2;this.Bx._Done(
);this.Dp._Done();this.Dj._Done();this.Kx._Done();C.H2._Done.call(this);},_ReInit:
function(){C.H2._ReInit.call(this);this.Bx._ReInit();this.Dp._ReInit();this.Dj._ReInit(
);this.Kx._ReInit();this.Bx.T(A.aaR(A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.aaR(A.acf.Ae2));this.Dp.T(
A.aaR(A.acf.Un));this.Dj.T(A.aaR(A.acf.A7E));this.Kx.T(A.aaR(A.acf.A8L));this.Kx.
IX(A.aaR(A.acf.ANp));this.Kx.Ji(A.aaR(A.acf.ANo));this.Kx.A_C(A.aaR(A.acf.Aq9)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.FG
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bx)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUB={BW:null,RatingMode:null,Ls:function(){if(!this.BR){this.BR=A._NewObject(
C.N,0);this.BR.Ce=null;this.BR.Cf=null;this.BR.CF=[this,this.AaQ];this.BR.CS(A.jV
);this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUB;var B;this.
H(Rs);this.BW.H(Aos);this.BW.T(A.aaR(A.acf.Bas));this.J(this.BW,0);this.BW.Au([B=
this.RatingMode,B.Cb,B.Cd]);this.BW.CH(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.Bas));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgy],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0R],0);A.pe([this,this.Bgy],this
);},Dv:function(){return 2;},Ge:function(aIndex){return this.RatingModeToString.
BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axa(E);},Bgy:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BJ.Set(0,0);this.BJ.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cn;this.RatingModeToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANI={W2:
function(G){C.Amz.W2.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq4()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Cs(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amz._Init.call(
this,aArg);this.__proto__=C.ANI;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hj={DM:A.jV,T:function(E){if(this.DM===E)return;this.DM=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hj;},_className:"Application::BaseItem"
};C.AV_={BW:null,WeightRecordingMode:null,Ls:function(){if(!this.BR){this.BR=A._NewObject(
C.N,0);this.BR.Ce=null;this.BR.Cf=null;this.BR.CF=[this,this.AaQ];this.BR.CS(A.jV
);this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AV_;var B;this.H(Rs);this.BW.H(Aos);this.BW.T(A.aaR(A.acf.AsZ));this.BW.EV(1);
this.J(this.BW,0);this.BW.Au([B=this.WeightRecordingMode,B.Cb,B.Cd]);this.BW.CH(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsZ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dv:function(){return 2;},Ge:function(aIndex){return this.
WeightRecordingModeToString.BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axn(E);},Init:function(aArg){var B;A.zX([this
,this.BhF],[B=A._GetAutoObject(A.Device.Device),B.A93,B.Bcb],0);A.pe([this,this.
BhF],this);},BhF:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BJ.Set(0,0);this.BJ.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightRecordingModeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Abb={BooleanToAutoOnOff:null,Ge:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BU(aIndex);},_Init:function(aArg){C.D5._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Abb;},_Done:function(
){this.__proto__=C.D5;this.BooleanToAutoOnOff._Done();C.D5._Done.call(this);},_ReInit:
function(){C.D5._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.D5._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Ax2={A7S:function(){var B;this.
AxG(1);this.JB(0,3);this.VP(0,0,(B=this.M)[3]-B[1]);this.A5s(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5s(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VZ(0);},_Init:
function(aArg){C.ABQ._Init.call(this,aArg);this.__proto__=C.Ax2;},_className:"Application::Triangle"
};C.AUc={Y:null,Init:function(aArg){this.ByN(this);},ByM:function(Qf){var Aa=A._NewObject(
C.ANQ,0);Aa.H(BF);Aa.T(Qf);Aa.Ai(true);Aa.As(false);Aa.Bh(true);this.J(Aa,0);this.
AtG(this);},AtG:function(G){var B;var AlF=1;var A3h=0;var X=this.Y.Ah;var Cz=null;
var K$=null;while(!!X&&!((X.U&0x200)===0x200)){Cz=(C.O4.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cz){var ALp=(B=Cz.V.B9.A7v(Cz.V.String,0,-1))[2]-B[0
];if(!!(C.MB.isPrototypeOf(X)?X:null))ALp=ALp+20;if(A3h<ALp)A3h=ALp;Cz.H(A.abL(Cz.
M,120));Cz.H(A.abI(Cz.M,28));Cz.H(A.abM(Cz.M,this.M[0]));Cz.H(A.abO(Cz.M,((B=this.
M)[3]-B[1])-(AlF*28)));AlF=AlF+1;}else{K$=(A.acg.C9.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K$){var Di=((B=this.M)[3]-B[1])-((AlF-1)*28);K$.DO([this.
M[0],K$.Eu[1]]);K$.DO([K$.Eu[0],Di]);K$.DE([this.M[0]+120,K$.EE[1]]);K$.DE([K$.EE[
0],Di]);}}X=X.Ah;}this.BCo(A3h,28);},BCo:function(aWidth,BxW){var B;var X=this.Y.
Ah;var Cz=null;var K$=null;aWidth=aWidth+20;if(aWidth>(C.AsB[0]-10))aWidth=C.AsB[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cz=(C.O4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cz){Cz.V.Text.A4(0x14);Cz.V.Text.Ho(10);Cz.H(A.abL(Cz.M,aWidth
));Cz.H(A.abI(Cz.M,BxW));Cz.H(A.abM(Cz.M,this.M[2]-((B=Cz.M)[2]-B[0])));}else{K$=(
A.acg.C9.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K$){K$.DO([this.M[
2]-aWidth,K$.Eu[1]]);K$.DE([this.M[2],K$.EE[1]]);}}X=X.Ah;}},ByN:function(G){var
Aa=A._GetAutoObject(C.BT).AqT;while(!!Aa){if(!!(C.Axu.isPrototypeOf(Aa)?Aa:null)
){var EG=(C.Axu.isPrototypeOf(Aa)?Aa:null);this.ByL(EG.DM,EG.AQ,EG.Bw,EG.ARq);}else
if(!!(C.Axw.isPrototypeOf(Aa)?Aa:null)){var EG=(C.Axw.isPrototypeOf(Aa)?Aa:null);
this.ByS(EG.DM,EG.AQ,EG.Bw,EG.WH,EG.W4);}else if(!!(C.ZJ.isPrototypeOf(Aa)?Aa:null
)){var EG=(C.ZJ.isPrototypeOf(Aa)?Aa:null);this.ByK(EG.DM,EG.AQ,EG.Bw);}else if(
!!(C.AkH.isPrototypeOf(Aa)?Aa:null)){var EG=(C.AkH.isPrototypeOf(Aa)?Aa:null);this.
ByM(EG.DM);}else if(!!(C.AGi.isPrototypeOf(Aa)?Aa:null))this.ByT();Aa=Aa.MI;}A._GetAutoObject(
C.BT).Clear();A.pe([this,this.AtG],this);},ByK:function(Qf,Ac9,Ah7){var Aa=A._NewObject(
C.MB,0);Aa.H(BF);Aa.T(Qf);Aa.AQ=Ac9;Aa.Ai(true);Aa.As(Ah7);Aa.Bh(true);this.J(Aa
,0);this.AtG(this);},ByT:function(){var K$=A._NewObject(A.acg.C9,0);K$.L(A.jb.Bm
);K$.Ai(true);K$.Nx(3);this.J(K$,0);this.AtG(this);},ByL:function(Qf,Ac9,Ah7,A1p
){var Aa=A._NewObject(C.AmL,0);Aa.H(BF);Aa.T(Qf);Aa.AQ=Ac9;Aa.Ai(true);Aa.As(Ah7
);Aa.Bh(true);Aa.Au(A1p);this.J(Aa,0);this.AtG(this);},ByS:function(Qf,Ac9,Ah7,A3y
,Agv){var Aa=A._NewObject(C.ANP,0);Aa.H(BF);Aa.T(Qf);Aa.AQ=Ac9;Aa.Ai(true);Aa.As(
Ah7);Aa.Bh(true);Aa.Bn0(A3y);Aa.AF0(Agv);this.J(Aa,0);this.AtG(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AUc;this.H(Rs);this.Y.H(Rs);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afo={_Init:
function(){A.acl.Afo._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$v={AqT:null,Ahp:null,Ms:function(Qf){var EG=A._NewObject(
C.AkH,0);EG.DM=Qf;this.J(EG);},Clear:function(){this.AqT=null;this.Ahp=null;},Fy:
function(){var K$=A._NewObject(C.AGi,0);this.J(K$);},J:function(BcP){if(!this.AqT
){this.AqT=BcP;this.Ahp=this.AqT;}else{this.Ahp.MI=BcP;this.Ahp=this.Ahp.MI;}},TF:
function(Qf,Ac9){var EG=A._NewObject(C.ZJ,0);EG.DM=Qf;EG.AQ=Ac9;this.J(EG);},BhO:
function(Qf,Ac9,A1p){var EG=A._NewObject(C.Axu,0);EG.DM=Qf;EG.AQ=Ac9;EG.ARq=A1p;
this.J(EG);},Aa4:function(Qf){var EG=A._NewObject(C.ZJ,0);EG.DM=Qf;EG.Bw=false;this.
J(EG);},ABU:function(Qf,Ac9,A3y,Agv){var EG=A._NewObject(C.Axw,0);EG.DM=Qf;EG.AQ=
Ac9;EG.WH=A3y;EG.W4=Agv;this.J(EG);},_Init:function(aArg){this.__proto__=C.A$v;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BT={_Init:function(){C.A$v._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axv={MI:null,_Init:function(aArg){this.__proto__=
C.Axv;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.MI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOM={Amx:null,ArN:function(E){if(this.Amx===
E)return;if(!!this.Ab)this.Ab.ZN(this);if(!!this.Amx)this.AqL(this.Amx,A._GetAutoObject(
C.AsF),null,null,null,null,false);this.Amx=E;if(!!this.Amx)this.AkM(this.Amx,A._GetAutoObject(
C.AsF),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOM;this.H(BF);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amx)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WR={_Init:function(){C.AOM._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N$={Init:function(aArg){var C3=A._NewObject(C.AUd,0);C3.H(this.M);this.AkM(C3,A.
_GetAutoObject(C.An1),null,A._GetAutoObject(C.An1),A._GetAutoObject(C.An1),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N$;this.H(Rs);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsF={_Init:function(){C.AVa._Init.call(this,0);this.ACR=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AUd={AK:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.AK={I:this},0);this.
__proto__=C.AUd;this.H(AIk);this.C0(0);this.AK.A1(0x3F);this.AK.H(AIk);this.AK.L(
0xAAFFFFFF);this.J(this.AK,0);},_Done:function(){this.__proto__=A.Core.P;this.AK.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AU$={Sk:function(){var B;var Ao=(A.acl.Afh.isPrototypeOf(B=A.acl.Aes.Sk.call(this
))?B:null);if(!Ao)throw new Error(Ata);Ao.Cq.Cy=255;Ao.Cq.B4=0;return Ao;},Sj:function(
){var B;var Ao=(A.acl.Axt.isPrototypeOf(B=A.acl.Aes.Sj.call(this))?B:null);if(!Ao
)throw new Error(Ata);Ao.E1.Cy=0;Ao.E1.B4=255;Ao.Du=true;return Ao;},_Init:function(
aArg){A.acl.Aes._Init.call(this,aArg);this.__proto__=C.AU$;},_className:"Application::ShadeOverlayTransition"
};C.An1={_Init:function(){C.AU$._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkW={An3:0,A2C:false,Init:function(aArg){
},Aj:function(Ae){var F;C.Iv.Aj.call(this,Ae);this.BX.L(this.V.AR);if(!!this.Q){
var BDx=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BX.R((A.
_GetAutoObject(A.Device.Converter).Ak_(BDx)+CJ)+A._GetAutoObject(A.acj.DV).Af_()
);else this.BX.R(A.aaR(A.acf.Ae2));}},Ki:function(G){var B;var BhC=(this.A2C===false
)&&(this.AM<=this.Gt);if(BhC)this.By(this.An3);this.A49(this.AM,4);if(BhC){this.
By(this.AM-this.Aj5);this.A2C=true;}C.Iv.Ki.call(this,G);},Kd:function(G){this.A49(
this.AM,5);C.Iv.Kd.call(this,G);},By:function(E){this.A49(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2C=false;C.Iv.By.call(this,E);},Ahx:function(
E){if(this.An3===E)return;this.An3=E;},A49:function(BxF,GC){this.ATv(A._GetAutoObject(
A.acj.DV).Bd$(BxF,GC));},_Init:function(aArg){C.Iv._Init.call(this,aArg);this.__proto__=
C.AkW;this.H(K4);this.An3=this.Gt;this.Iu(this.H8,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEX={None:0,Left:1,BFu:2,Right:3};C.AmB={XA:
null,FD:null,Em:null,Background:null,Anl:null,Gj:null,KT:A.jV,AEn:null,Init:function(
aArg){var B;A.zV([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A4f],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.
LY],this);A.pe([this,this.A4f],this);this.Ba(this.Em);},Aj:function(Ae){C.OverlayMenu.
Aj.call(this,Ae);this.DL(this);},Ls:function(){if(!this.BR)this.BR=A._NewObject(
C.N,0);return this.BR;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.XA);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AK1();},Agk:function(G){var Aa=(C.ACn.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gj.FQ();if(Hs>=A._GetAutoObject(A.Device.Device).An.B_())return;
A._GetAutoObject(A.Device.Helper).GT(Hs);A.pe([this,this.AaQ],this);},AK1:function(
){},AaO:function(G){this.Am();},A38:function(G){if(this.Gj.FQ()<(A._GetAutoObject(
A.Device.Device).An.B_()-1))this.Gj.GU(this.Gj.FQ()+1);},A39:function(G){if(this.
Gj.FQ()>0)this.Gj.GU(this.Gj.FQ()-1);},DL:function(G){var Gl=A._GetAutoObject(A.
Device.Device).An.B_();var M5=this.BR;if(!M5)return;M5.C4(A.aaL(A.ach.AeG));M5.CF=[
this,this.AaQ];if(Gl<=0){M5.Cu(null);M5.C5(null);M5.Cf=null;M5.Ce=null;M5.WU=false;
M5.ZM=false;}else if(Gl===1){M5.Cu(null);M5.C5(A.aaL(A.ach.AeH));M5.Cf=null;M5.Ce=[
this,this.Agk];M5.WU=false;M5.ZM=false;}else{M5.Cu(A.aaL(A.ach.Arb));M5.C5(A.aaL(
A.ach.Arj));M5.Cf=[this,this.A38];M5.Ce=[this,this.A39];M5.WU=true;M5.ZM=true;}}
,LY:function(G){this.BgY(this);this.XA=A._GetAutoObject(A.Device.Device).An.Filter;
this.AK1();},BnS:function(E){if(this.AEn===E)return;this.AEn=E;A.pe([this,this.BBt
],this);},BBt:function(G){this.BgY(this);},BgY:function(G){var B;if(!!this.FD)this.
HQ(this.FD);this.FD=(C.EC.isPrototypeOf(B=A._NewObject(this.AEn,0))?B:null);if(!
!this.FD){this.FD.H(AYz);this.J(this.FD,0);}},A4f:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DN(1,4
))this.Gj.Dl(A.aaR(A.acf.ASs));else this.Gj.Dl(this.KT);},Dl:function(E){if(this.
KT===E)return;this.KT=E;A.pe([this,this.A4f],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Em._Init.call(this.Em={I:this},0);A.acg.AK._Init.call(this.
Background={I:this},0);A.acg.AK._Init.call(this.Anl={I:this},0);C.Gj._Init.call(
this.Gj={I:this},0);this.__proto__=C.AmB;this.H(Rs);this.Em.H(BF);this.Em.A_F(A.
jb.CV);this.Em.A_G(A.jb.Text);this.Background.H(Fd);this.Background.L(A.jb.Bpw);
this.Anl.H(AIl);this.Anl.L(A.jb.CV);this.Gj.H(AIl);this.Gj.N_(C.ACn);this.AEn=C.
APR;this.KT=A.aaR(A.acf.Av9);this.J(this.Em,0);this.J(this.Background,0);this.J(
this.Anl,0);this.J(this.Gj,0);this.Em.AQ=[this,this.Agk];this.Em.Ab$(A._NewObject(
C.YF,0));this.Gj.ZA(A._GetAutoObject(A.Device.Device).An);this.Gj.ZE([this,this.
Agk]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Em._Done(
);this.Background._Done();this.Anl._Done();this.Gj._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Em._ReInit();this.
Background._ReInit();this.Anl._ReInit();this.Gj._ReInit();this.Dl(A.aaR(A.acf.Av9
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.XA)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Em)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACn={
AP:null,DT:null,Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DT.H([this.V.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this
,Ae);this.DT.Dg(this.V.AR);},Init:function(aArg){},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CE(Ad,1).toFixed());this.DT.ED(this.AX.Am0(
Ad,14));this.DT.AFi(this.AX.Jb(Ad,13));this.DT.Ae9(this.AX.H6(Ad,8));this.DT.Uy(
this.AX.H6(Ad,11));this.DT.Afa(this.AX.H6(Ad,12));this.DT.Afc(this.AX.CE(Ad,5));
this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.AP={I:this},0);C.DT._Init.call(this.DT={I:this},0);this.__proto__=C.ACn;this.
H(Ol);this.AP.L(A.jb.Bb);this.DT.H(AYA);this.J(this.AP,0);this.J(this.DT,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.DT._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.AP._ReInit(
);this.DT._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YF={Q:null,Init:function(aArg){var
B;this.ABc(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs]);},AE1:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nz(FilterCriterion
);var Ai6=this.Ako();if(Ai6>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai6,false);Filter.CY(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae5(false);},Bw6:function(s){this.AE1(
s);},ABc:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DN(1,4))?B:null);if(!!FilterCriterion
)Filter.Nz(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BHn:function(s){
this.ABc(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
Ac2],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Ac2],E,0);if(!!E)A.pe([this,this.
Ac2],this);},C6:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwU(-1);return;}var Azf=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DN(1,4))?B:null);if(!Azf){this.AW.AwU(0);this.AW.Ae5(true);}else
this.AW.AwU(Azf.A6);},Ac2:function(s){this.C6(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.YF;this.AW.AwU(0);this.AW.Dk=[this,this.Bw6];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqO={BirthType:null,EaseOfDelivery:null,Bx:null,Eh:null,AbR:null,G7:null,Co:
null,AbP:null,AM8:false,Init:function(aArg){this.AM8=A._GetAutoObject(A.Device.Helper
).W.Arm();if(this.AM8)this.Ae4(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Ae4(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Bx.
Lu([this,this.Ac0]);this.Bx.Kz(A.aaL(A.ach.Ack));this.Bx.AQ=[this,this.Ac0];}this.
Eh.Ar7(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GJ],this.Eh.
Q,0);A.zX([this,this.GJ],this.Bx.Q,0);A.pe([this,this.GJ],this);},Agl:function(G
){if(((this.Eh.Asq===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARu(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rl(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cs(
A._GetAutoObject(A.Device.Device).An);if(this.KQ>0){if(this.AM8){var Ad=A._GetAutoObject(
A.Device.Device).Bt.L3(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B3=A._NewObject(A.Device.Rating,0);B3.Fm(Ad,A._GetAutoObject(A.Device.
Device).Bt);B3.OnSetBodyWeight(this.KQ);B3.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYB,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var B3=A._NewObject(A.Device.Rating
,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B3.OnSetBodyWeight(
this.KQ);B3.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B3.Cs(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A5).FA();},Ex:function(
G){A._GetAutoObject(A.Device.Helper).W.Fm(A._GetAutoObject(A.Device.Helper).W.CR
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A5).FA();},Aut:function(
){this.N.CS(A.jV);this.N.C5(A.aaL(A.ach.Am7));this.N.Ce=[this,this.Ay6];},Al4:function(
G){A._GetAutoObject(C.A5).Cc(32);},GJ:function(G){var F;var Jv=(F=this.Eh.Q,F[1].
call(F[0]));var ABA=(F=this.Bx.Q,F[1].call(F[0]));var A44=true;if(!!Jv&&(ABA===Jv
))A44=false;A._GetAutoObject(A.Device.Helper).JG(this.Bx,A44);this.Eh.BmS(!A44);
},_Init:function(aArg){C.H2._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Ary._Init.
call(this.Bx={I:this},0);C.Rd._Init.call(this.Eh={I:this},0);C.Acw._Init.call(this.
AbR={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.S0._Init.call(this.Co={I:this
},0);C.BW._Init.call(this.AbP={I:this},0);this.__proto__=C.AqO;var B;this.Bx.H(Ah2
);this.Bx.Ai(true);this.Bx.T(A.aaR(A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.aaR(A.acf.Ae2));this.Eh.H(Ah2);
this.Eh.Ai(true);this.Eh.T(A.aaR(A.acf.Un));this.AbR.H(AHS);this.AbR.Ai(true);this.
AbR.T(A.aaR(A.acf.GP));this.G7.H(Ah2);this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Arz
));this.Co.H(Ah2);this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Ael));this.Co.AFS(true);
this.AbP.H(Ah2);this.AbP.Ai(true);this.AbP.T(A.aaR(A.acf.AgN));this.Iu(this.Ay,-
1);this.J(this.Bx,-1);this.J(this.Eh,-1);this.J(this.AbR,-1);this.J(this.G7,-1);
this.J(this.Co,-1);this.J(this.AbP,-1);this.BirthType.L9(A._GetAutoObject(A.Device.
Helper).W);this.EaseOfDelivery.L9(A._GetAutoObject(A.Device.Helper).W);this.Bx.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.AnA,B.Nv]);this.Eh.FT([this,this.D2,this.
Gu]);this.Eh.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Any,B.Nt]);this.AbR.FT([
this,this.D2,this.Gu]);this.AbR.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,
B.SS]);this.G7.Au([B=this.BirthType,B.Cb,B.Cd]);this.G7.CH(this.BirthType);this.
Co.FT([this,this.D2,this.Gu]);this.Co.Lu([B=this.Co,B.F_]);this.Co.Kz(A.aaL(A.ach.
Edit));this.Co.Acd([B=A._GetAutoObject(A.Device.Helper).W,B.Awg,B.Q8]);this.AbP.
Au([B=this.EaseOfDelivery,B.Cb,B.Cd]);this.AbP.CH(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H2;this.BirthType._Done();this.EaseOfDelivery.
_Done();this.Bx._Done();this.Eh._Done();this.AbR._Done();this.G7._Done();this.Co.
_Done();this.AbP._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.
call(this);this.BirthType._ReInit();this.EaseOfDelivery._ReInit();this.Bx._ReInit(
);this.Eh._ReInit();this.AbR._ReInit();this.G7._ReInit();this.Co._ReInit();this.
AbP._ReInit();this.Bx.T(A.aaR(A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(A.
acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.aaR(A.acf.Ae2));this.Eh.T(A.aaR(
A.acf.Un));this.AbR.T(A.aaR(A.acf.GP));this.G7.T(A.aaR(A.acf.Arz));this.Co.T(A.aaR(
A.acf.Ael));this.AbP.T(A.aaR(A.acf.AgN));},_Mark:function(D){var B;C.H2._Mark.call(
this,D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acw={FP:null,AW:null,A8:0,H0:function(G){C.Dt.H0.call(this,G);if(!this.A8)this.
F_(this);else this.He(this);},Aj:function(Ae){C.Dt.Aj.call(this,Ae);this.Hy.Z(false
);this.H8.Z(false);if(this.A8===1){this.Ba(this.AW);if(this.Hm){this.AW.FS(A.jb.
CL);this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.AW.FS(A.jb.CV);this.
Background.L(A.jb.CL);this.V.L(A.jb.Text);}}else{if(this.Hm)this.AW.FS(A.jb.CL);
else this.AW.FS(A.jb.CV);this.Ba(null);}},By:function(E){var F;var BQ=this.AM;C.
Dt.By.call(this,E);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uo,this.BbN],0);},DL:function(G){var F;if(!
this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.
E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;}break;default:this.FP.AkR((F=
this.N,F[1].call(F[0])));}},F_:function(G){this.Ey(1);},He:function(G){this.Ey(0
);},Ey:function(EO){var F;if(!this.A8)this.FP.AjC((F=this.N,F[1].call(F[0])));this.
A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.A8=1;if(this.A8===1)this.AW.
SY(7);this.DL(this);this.Am();},_Init:function(aArg){C.Dt._Init.call(this,aArg);
C.ARo._Init.call(this.AW={I:this},0);this.__proto__=C.Acw;this.H(Aap);this.EV(999999
);this.V.R(Ath);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H8.Z(false);this.AW.H(AYC
);this.AW.ATD(6);this.J(this.AW,0);this.AW.Au([this,this.Uo,this.BbN]);this.FP=A.
_NewObject(C.AeA,0);},_Done:function(){this.__proto__=C.Dt;this.AW._Done();C.Dt.
_Done.call(this);},_ReInit:function(){C.Dt._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Dt._Mark.call(this,D);if((B=this.FP)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dv:function(){return 4;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Ge:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuS={Y:null,QU:null,N6:null,Eg:null,PN:null,PK:null,PL:null,Ay:null,D5:null,
ReasonOfLeaving:null,AhE:null,Ne:0,AmP:false,ACr:true,AOF:false,Asl:false,Init:function(
aArg){A.zX([this,this.A9_],[this,this.A9A,this.ATG],0);this.Ahu(A._GetAutoObject(
A.Device.Helper).W.AhX(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.D0(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9_],this);},DG:function(G){
var B;var Fg=0;var X=this.AV;switch(this.Cr.CP){case 6:Fg=2;break;case 7:Fg=7;break;
case 4:Fg=4;break;case 5:Fg=5;break;default:;}X=this.QM(X,Fg,0x414);if(!!X)this.
Ba(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,null,null);},Al7:function(G
){A._GetAutoObject(C.A5).FA();},ApP:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HL().toFixed(),0,null);else{var B3=A._NewObject(A.Device.Rating
,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B3.OnSetBodyWeight(
this.Ne);B3.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dr());B3.Cs(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmP){A._GetAutoObject(A.Device.Helper).W.Ae$(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7x(A._GetAutoObject(A.Device.Helper).Dr(),this.Asl);}A._GetAutoObject(A.Device.
Helper).W.AFR(this.ReasonOfLeaving.C8((F=this.N6.Q,F[1].call(F[0]))));if(this.ACr
)A._GetAutoObject(A.Device.Helper).W.Nv(0);if(this.Asl)A._GetAutoObject(A.Device.
Helper).W.AwW(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);this.A$6();},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},Ahu:function(E){
if(this.Ne===E)return;this.Ne=E;},Anv:function(){return this.Ne;},BfZ:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A5).FA();A._GetAutoObject(A.Device.Helper
).Asw();}},A9_:function(G){switch(this.Asl){case false:this.Eg.T(A.aaR(A.acf.AWa
));break;case true:this.Eg.T(A.aaR(A.acf.Brw));break;default:;}},ATG:function(E){
if(this.Asl===E)return;this.Asl=E;},A9A:function(){return this.Asl;},A$6:function(
){A._GetAutoObject(A.Device.Device).AZ(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfZ]);},Bng:function(E){if(this.AOF===E)return;
this.AOF=E;},BlE:function(){return this.AOF;},BmI:function(E){if(this.ACr===E)return;
this.ACr=E;},Blt:function(){return this.ACr;},BmQ:function(E){if(this.AmP===E)return;
this.AmP=E;},BlA:function(){return this.AmP;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.ZU._Init.call(this.QU={I:this
},0);C.AsE._Init.call(this.N6={I:this},0);C.AkW._Init.call(this.Eg={I:this},0);C.
ZU._Init.call(this.PN={I:this},0);C.ZU._Init.call(this.PK={I:this},0);C.ZU._Init.
call(this.PL={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.D5._Init.call(this.
D5={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhE._Init.call(this.AhE={I:this},0);this.__proto__=C.AuS;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Ds(C.IQ);this.Y.H(Fd);this.Y.J3(1);this.QU.H(
Aar);this.QU.Ai(true);this.QU.T(A.aaR(A.acf.AmP));this.QU.Bh(true);this.QU.ZH(false
);this.QU.Gh(-1);this.QU.EV(1);this.N6.H(U7);this.N6.Ai(true);this.N6.T(A.aaR(A.
acf.ReasonOfLeaving));this.N6.Bh(true);this.N6.ZH(false);this.Eg.H(Ali);this.Eg.
Ai(true);this.Eg.T(A.aaR(A.acf.AWa));this.Eg.Bh(false);this.Eg.Gh(1000);this.Eg.
EV(999000);this.PN.H(U7);this.PN.Ai(true);this.PN.T(A.aaR(A.acf.A5F));this.PN.Bh(
true);this.PN.ZH(false);this.PN.By(1);this.PN.Gh(-1);this.PN.EV(1);this.PK.H(Aar
);this.PK.Ai(true);this.PK.T(A.aaR(A.acf.A5G));this.PK.Bh(true);this.PK.ZH(false
);this.PK.By(1);this.PK.Gh(-1);this.PK.EV(1);this.PL.H(U7);this.PL.Ai(true);this.
PL.T(A.aaR(A.acf.A6g));this.PL.Bh(true);this.PL.ZH(false);this.PL.By(1);this.PL.
Gh(-1);this.PL.EV(1);this.Ay.H(Ayy);this.D5.Au(0);this.J(this.Y,0);this.J(this.QU
,0);this.J(this.N6,0);this.J(this.Eg,0);this.J(this.PN,0);this.J(this.PK,0);this.
J(this.PL,0);this.J(this.Ay,0);this.N.C4(A.aaL(A.ach.E3));this.Y.Eo=[this,this.Fi
];this.QU.Au([B=this.D5,B.Cb,B.Cd]);this.QU.CH(this.D5);this.QU.Afe([this,this.BlA
,this.BmQ]);this.N6.FT([this,this.D2,this.Gu]);this.N6.Lu([B=this.N6,B.F_]);this.
N6.Kz(A.aaL(A.ach.Edit));this.N6.Au([B=this.ReasonOfLeaving,B.Cb,B.Cd]);this.N6.
CH(this.ReasonOfLeaving);this.N6.AnE(this.AhE);this.Eg.Au([this,this.Anv,this.Ahu
]);this.PN.Au([B=this.D5,B.Cb,B.Cd]);this.PN.CH(this.D5);this.PN.Afe([this,this.
BlE,this.Bng]);this.PK.Au([B=this.D5,B.Cb,B.Cd]);this.PK.CH(this.D5);this.PK.Afe([
this,this.A9A,this.ATG]);this.PL.Au([B=this.D5,B.Cb,B.Cd]);this.PL.CH(this.D5);this.
PL.Afe([this,this.Blt,this.BmI]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QU._Done();this.N6._Done();this.Eg._Done();this.PN._Done(
);this.PK._Done();this.PL._Done();this.Ay._Done();this.D5._Done();this.ReasonOfLeaving.
_Done();this.AhE._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QU._ReInit();this.N6._ReInit();this.Eg._ReInit(
);this.PN._ReInit();this.PK._ReInit();this.PL._ReInit();this.Ay._ReInit();this.D5.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhE._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QU.T(A.aaR(A.acf.AmP));this.N6.T(A.aaR(A.acf.ReasonOfLeaving));
this.Eg.T(A.aaR(A.acf.AWa));this.PN.T(A.aaR(A.acf.A5F));this.PK.T(A.aaR(A.acf.A5G
));this.PL.T(A.aaR(A.acf.A6g));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhE)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AU_={AjM:null,PC:null,Ave:AYD,Bl:function(aSize){C.Iv.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BX.H([0,40,aSize[0],80]);this.Hy.H([0,this.BX.M[1],40,
this.BX.M[3]]);this.H8.H([aSize[0]-40,this.BX.M[1],aSize[0],this.BX.M[3]]);},Aj:
function(Ae){var F;C.Iv.Aj.call(this,Ae);this.PC.L(this.V.AR);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.PC.R(this.Ave+AIm);else this.PC.R((this.Ave+
CJ)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.PC.R(this.Ave);},A3P:function(
G){this.Am();},Bm0:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3P],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3P],E,0);if(!!E)A.pe([
this,this.A3P],this);},A_C:function(E){if(this.Ave===E)return;this.Ave=E;this.Am(
);},_Init:function(aArg){C.Iv._Init.call(this,aArg);C.CG._Init.call(this.PC={I:this
},0);this.__proto__=C.AU_;this.H(AYE);this.V.H(AYF);this.V.A4(0x12);this.PC.H(AYG
);this.PC.A4(0x12);this.PC.L(A.jb.Bm);this.J(this.PC,0);this.PC.S(A.aaL(A.fl.Af)
);this.PC.AY(A.aaL(A.fl.Ak));this.PC.Cm(null);},_Done:function(){this.__proto__=
C.Iv;this.PC._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(
this);this.PC._ReInit();this.PC.S(A.aaL(A.fl.Af));this.PC.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMp={Y:null,JY:null,SA:null,Ay:null,AqC:2500,ANF:24,DG:function(G){var B;var
Fg=0;var X=this.AV;switch(this.Cr.CP){case 6:Fg=2;break;case 7:Fg=7;break;case 4:
Fg=4;break;case 5:Fg=5;break;default:;}X=this.QM(X,Fg,0x414);if(!!X)this.Ba(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HJ(X,true,null,null);},Al7:function(G){A._GetAutoObject(
C.A5).FA();},ApP:function(G){},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},BmL:function(
E){if(this.AqC===E)return;this.AqC=E;},Blv:function(){return this.AqC;},BmM:function(
E){if(this.ANF===E)return;this.ANF=E;},Blw:function(){return this.ANF;},Blj:function(
G){var F,Cv;this.JY.BX.L(this.JY.V.AR);if(!!this.JY.Q)this.JY.BX.R((((String.fromCharCode(((
F=this.JY.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Alc)+String.fromCharCode(((
Cv=this.JY.Q,Cv[1].call(Cv[0]))+10000).toFixed().charCodeAt(2)||0))+CJ)+this.JY.
AHi);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iv._Init.call(this.JY={I:this},0);C.Iv._Init.call(this.SA={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMp;this.N.Z(true);this.
Ds(C.IQ);this.Y.H(Fd);this.Y.J3(1);this.JY.H(Ali);this.JY.Ai(true);this.JY.T(A.aaR(
A.acf.AqC));this.JY.Bh(false);this.JY.Gh(0);this.JY.EV(5000);this.JY.IX(A.aaR(A.
acf.Agb));this.JY.Ji(A.aaR(A.acf.Agb));this.JY.ATv(100);this.SA.H(U7);this.SA.Ai(
true);this.SA.T(A.aaR(A.acf.A$F));this.SA.Bh(true);this.SA.By(24);this.SA.Gh(10);
this.SA.EV(33);this.SA.IX(AYH);this.Ay.H(Ayy);this.J(this.Y,0);this.J(this.JY,0);
this.J(this.SA,0);this.J(this.Ay,0);this.N.C4(A.aaL(A.ach.YK));this.Y.Eo=[this,this.
Fi];this.JY.Au([this,this.Blv,this.BmL]);this.JY.A$a([this,this.Blj]);this.SA.Au([
this,this.Blw,this.BmM]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JY._Done();this.SA._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JY._ReInit();this.SA._ReInit();this.
Ay._ReInit();this.JY.T(A.aaR(A.acf.AqC));this.JY.IX(A.aaR(A.acf.Agb));this.JY.Ji(
A.aaR(A.acf.Agb));this.SA.T(A.aaR(A.acf.A$F));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.ArB={EaseOfDelivery:null,BirthType:null,Bx:null,Dp:null,Dj:null,Co:null,Eg:null
,G7:null,Ln:null,Ne:0,L5:false,Init:function(aArg){A.zX([this,this.GJ],this.Bx.Q
,0);A.zX([this,this.GJ],this.Dp.Q,0);A.zX([this,this.AAN],this.Db.Q,0);A.zX([this
,this.Bfx],this.Co.Dm,0);A.zX([this,this.Bfr],this.C$.Q,0);A.zX([this,this.Auc],
this.Bx.Q,0);A.zX([this,this.Auc],this.Dp.Q,0);A.pe([this,this.AAN],this);A.pe([
this,this.GJ],this);A.pe([this,this.Bfx],this);A.pe([this,this.Bfr],this);A.pe([
this,this.Auc],this);},Ex:function(G){A._GetAutoObject(A.Device.Helper).W.FE();A.
_GetAutoObject(C.A5).FA();},Agl:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.ED((F=this.B1.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhJ
){var AlR=A._GetAutoObject(A.Device.Helper).AhJ.AO3();A._GetAutoObject(A.Device.
Helper).W.Aca(AlR);A._GetAutoObject(A.Device.Helper).W.AnJ(AlR);}var Alx=A._GetAutoObject(
A.Device.Helper).A16(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H3.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alx){this.Ai2();A.pe([this,this.
Bxs],this);}else A._GetAutoObject(A.Device.Helper).AKu(A._GetAutoObject(A.Device.
Helper).W,Alx,(F=this.Dj.H3.Hu,F[1].call(F[0])),0,[this,this.ApK]);},Aut:function(
){this.N.CS(A.jV);this.N.C5(A.aaL(A.ach.AD2));this.N.Ce=[this,this.Ay6];},Al4:function(
G){A._GetAutoObject(C.A5).Cc(49);},Ai2:function(){var B;var F;A._GetAutoObject(A.
Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);var Me=A._GetAutoObject(
A.Device.Device).An.L3(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(
A.Device.Device).SZ(Me);var Beq=false;if(A._GetAutoObject(A.Device.Helper).Am_()
){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){Beq=true;A._GetAutoObject(A.Device.
Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),0,null);}
else{var B3=A._NewObject(A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B3.OnSetBodyWeight(this.KQ);B3.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}}if(
A._GetAutoObject(A.Device.Helper).A7Y()&&(Beq===false)){if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HL().toFixed(),0,null);else{var B3=A._NewObject(A.Device.Rating
,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B3.OnSetBodyWeight(
this.Ne);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}}var I4=null;switch((F=this.
Dj.H3.Hu,F[1].call(F[0]))){case 3:I4=[B=A._GetAutoObject(A.Device.Device),B.Awj,
B.AyY];break;case 2:I4=[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyZ];break;case
4:case 5:I4=[B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoB];break;default:;}if(
!!I4)switch((F=this.Dj.Kr.V3,F[1].call(F[0]))){case 1:I4[2].call(I4[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I4[2].call(I4[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).BaA(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap8:function(G){A.
_GetAutoObject(C.A5).FA();},Bxs:function(s){this.Ap8(s);},Ahu:function(E){if(this.
Ne===E)return;this.Ne=E;A.abo([this,this.Anv,this.Ahu],0);},GJ:function(G){if(A.
_GetAutoObject(A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);if(A.
_GetAutoObject(A.Device.Helper).A7Y())this.Eg.Z(true);else this.Eg.Z(false);if(this.
L5){this.Dp.Z(false);this.Bx.T(A.aaR(A.acf.ACT));this.Bx.AFh(A.aaL(A.ach.Ack));}
else{this.Dp.Z(true);this.Bx.T(A.aaR(A.acf.AcK));this.Bx.AFh(null);}},AAN:function(
G){A._GetAutoObject(A.Device.Helper).AVU(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(
A.Device.Device).EartagNrAssignmentMode,this.L5);},Bfx:function(G){A.pe([this,this.
Bhr],this);},Bfr:function(G){A.pe([this,this.Bhr],this);},Bhr:function(G){var F,
Cv,Tk;switch(A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.
Eg.Ahx(A._GetAutoObject(A.Device.Helper).AhX(A._GetAutoObject(A.Device.Helper).AbA((
F=this.B1.Q,F[1].call(F[0]))),(Cv=this.Co.Dm,Cv[1].call(Cv[0])),2,(Tk=this.B1.Q,
Tk[1].call(Tk[0]))));break;case 2:this.Eg.Ahx(A._GetAutoObject(A.Device.Helper).
AhX(this.KQ,(F=this.Co.Dm,F[1].call(F[0])),2,(Cv=this.B1.Q,Cv[1].call(Cv[0]))));
break;default:;}},ApK:function(G){var F;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:switch((F=this.Dj.H3.Hu,F[
1].call(F[0]))){case 3:case 2:case 5:case 4:this.JR(this.Dj);break;case 0:this.JR(
this.Dp);break;case 1:this.JR(this.Bx);break;default:throw new Error(AyG+(F=this.
Dj.H3.Hu,F[1].call(F[0])).toFixed());}break;case 43:{this.JR(this.Dj);this.JR(this.
Dp);}break;case 25:case 42:{this.JR(this.Dj);this.JR(this.Bx);}break;case 41:break;
default:A.ab5("%s%e",Atf,Ar.Id);}},ApL:function(G){var F;C.H2.ApL.call(this,G);var
AoZ=0;switch((F=this.B1.Q,F[1].call(F[0]))){case 0:case 2:AoZ=A._GetAutoObject(A.
Device.Device).AdY;break;case 1:AoZ=730;break;default:A.ab5("%s%e",Alg,(F=this.B1.
Q,F[1].call(F[0])));}(F=this.Co.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper
).Dr()-A._GetAutoObject(A.Device.Helper).AmN(AoZ)));(F=this.C$.Q,F[2].call(F[0],
this.C$.An3));this.Eg.Ahx(A._GetAutoObject(A.Device.Helper).W.AhX(1));},Ae_:function(
E){if(this.L5===E)return;this.L5=E;A.abo([this,this.Awm,this.Ae_],0);},Auc:function(
G){var F,Cv,Tk;this.Ae_(((F=this.Bx.Q,F[1].call(F[0]))===(Cv=this.Dp.Q,Cv[1].call(
Cv[0])))&&!!(Tk=this.Bx.Q,Tk[1].call(Tk[0])));A.pe([this,this.GJ],this);},Anv:function(
){return this.Ne;},Awm:function(){return this.L5;},_Init:function(aArg){C.H2._Init.
call(this,aArg);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.BirthType.
_Init.call(this.BirthType={I:this},0);C.Ary._Init.call(this.Bx={I:this},0);C.Rd.
_Init.call(this.Dp={I:this},0);C.AGR._Init.call(this.Dj={I:this},0);C.S0._Init.call(
this.Co={I:this},0);C.AkW._Init.call(this.Eg={I:this},0);C.BW._Init.call(this.G7={
I:this},0);C.BW._Init.call(this.Ln={I:this},0);this.__proto__=C.ArB;var B;this.Ds(
C.ADu);this.CI.H(AcY);this.Bx.H(Aop);this.Bx.Ai(true);this.Bx.T(A.aaR(A.acf.AcK)
);this.Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.
Aky(A.aaR(A.acf.Ae2));this.Dp.H(Aop);this.Dp.Ai(true);this.Dp.T(A.aaR(A.acf.Un));
this.Dp.Ar7(false);this.Dj.H(AYI);this.Dj.Ai(true);this.Dj.T(A.aaR(A.acf.GP));this.
Dj.By(0);this.Co.H(AcY);this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Ael));this.Co.AFS(
true);this.Eg.H(AcY);this.Eg.Ai(true);this.Eg.T(A.aaR(A.acf.Ne));this.Eg.Gh(1000
);this.Eg.EV(999000);this.G7.H(AcY);this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Arz));
this.Ln.H(AcY);this.Ln.Ai(true);this.Ln.T(A.aaR(A.acf.AgN));this.J(this.Bx,-2);this.
J(this.Dp,-2);this.J(this.Dj,-2);this.J(this.Co,-2);this.J(this.Eg,-2);this.Iu(this.
Ay,-1);this.J(this.G7,-1);this.J(this.Ln,-1);this.EaseOfDelivery.L9(A._GetAutoObject(
A.Device.Helper).W);this.BirthType.L9(A._GetAutoObject(A.Device.Helper).W);this.
Bx.AQ=[this,this.Ac0];this.Bx.Lu([this,this.Ac0]);this.Bx.Kz(A.aaL(A.ach.Ack));this.
Bx.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AnA,B.Nv]);this.Bx.OU([B=A._GetAutoObject(
A.Device.Device),B.Uq,B.U_]);this.Bx.PY([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Bx.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoA]);this.Bx.Ae_([
this,this.Awm,this.Ae_]);this.Dp.FT([this,this.D2,this.Gu]);this.Dp.Lu([this,this.
Ac0]);this.Dp.Kz(A.aaL(A.ach.Ack));this.Dp.Uw([B=this.Gender.Animal,B.WI,B.J4]);
this.Dp.OU([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.Dp.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Dp.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu
,B.AoA]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Any,B.Nt]);this.Dp.
AnB([B=this.AnimalType.Animal,B.PX,B.ED]);this.Dj.FT([this,this.D2,this.Gu]);this.
Dj.Lu([B=this.Dj,B.F_]);this.Dj.Kz(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArJ,B.SS]);this.Dj.A_b(A._GetAutoObject(A.Device.Helper).W);
this.Co.FT([this,this.D2,this.Gu]);this.Co.Lu([B=this.Co,B.F_]);this.Co.Kz(A.aaL(
A.ach.Edit));this.Co.Acd([B=A._GetAutoObject(A.Device.Helper).W,B.Awg,B.Q8]);this.
Eg.Au([this,this.Anv,this.Ahu]);this.G7.Au([B=this.BirthType,B.Cb,B.Cd]);this.G7.
CH(this.BirthType);this.Ln.Au([B=this.EaseOfDelivery,B.Cb,B.Cd]);this.Ln.CH(this.
EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.H2;this.EaseOfDelivery.
_Done();this.BirthType._Done();this.Bx._Done();this.Dp._Done();this.Dj._Done();this.
Co._Done();this.Eg._Done();this.G7._Done();this.Ln._Done();C.H2._Done.call(this);
},_ReInit:function(){C.H2._ReInit.call(this);this.EaseOfDelivery._ReInit();this.
BirthType._ReInit();this.Bx._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Co.
_ReInit();this.Eg._ReInit();this.G7._ReInit();this.Ln._ReInit();this.Bx.T(A.aaR(
A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AkS
));this.Bx.Aky(A.aaR(A.acf.Ae2));this.Dp.T(A.aaR(A.acf.Un));this.Dj.T(A.aaR(A.acf.
GP));this.Co.T(A.aaR(A.acf.Ael));this.Eg.T(A.aaR(A.acf.Ne));this.G7.T(A.aaR(A.acf.
Arz));this.Ln.T(A.aaR(A.acf.AgN));},_Mark:function(D){var B;C.H2._Mark.call(this
,D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHq={H$:null,AhO:null,AgY:null,AhP:null,AgZ:null,AnimalType:null,Background:
null,N7:null,Rn:null,V:null,T1:null,YN:null,AbL:null,PW:null,DM:A.jV,AGT:true,CQ:
function(){this.Am();},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Aoc();this.
Ax3();},Aoc:function(){var F,Cv;var LN=0;var Aml=0;var AlK=0;var Ig=0;if((((!!this.
AhO&&!!this.AhP)&&!!this.AgY)&&!!this.AgZ)&&!!this.AnimalType){Aml=(F=this.AhO,F[
1].call(F[0]));AlK=(F=this.AgY,F[1].call(F[0]));LN=A._GetAutoObject(A.Device.Helper
).Mg((F=this.AhP,F[1].call(F[0])),(Cv=this.AgZ,Cv[1].call(Cv[0])));Ig=(F=this.AnimalType
,F[1].call(F[0]));}var Lb=A.jb.Text;var Azn=A.jb.CV;if(!!LN){var ALJ=A._GetAutoObject(
A.acj.DV).AlE(LN,Aml,AlK);Azn=A._GetAutoObject(A.acj.DV).Az2(ALJ,Ig);Lb=A._GetAutoObject(
A.acj.DV).Az4(ALJ,Ig);}this.Background.L(Azn);this.T1.L(Lb);this.Rn.L(Lb);this.N7.
L(Lb);this.AbL.L(Lb);if(Lb===A.jb.Bm)this.YN.L(Lb);else this.YN.L(A.jb.CL);this.
V.L(Lb);this.PW.L(Lb);},Ax3:function(){var F,Cv;var LN=0;var Aml=0;var AlK=0;if(((
!!this.AhO&&!!this.AhP)&&!!this.AgY)&&!!this.AgZ){Aml=(F=this.AhO,F[1].call(F[0]
));AlK=(F=this.AgY,F[1].call(F[0]));LN=A._GetAutoObject(A.Device.Helper).Mg((F=this.
AhP,F[1].call(F[0])),(Cv=this.AgZ,Cv[1].call(Cv[0])));}if(!!LN){var ALJ=A._GetAutoObject(
A.acj.DV).AlE(LN,Aml,AlK);this.Rn.R(A._GetAutoObject(A.Device.Converter).Th(ALJ,
2,true));this.N7.Z(true);this.Rn.Z(true);this.PW.Z(false);}else{this.N7.Z(false);
this.Rn.Z(false);this.PW.Z(true);}this.T1.R(this.Bz6(AlK-Aml,LN));this.AbL.Z(this.
AGT);this.YN.Z(this.AGT);this.N7.R(A._GetAutoObject(A.acj.DV).AaF());},Bz6:function(
A1L,Ah8){var B;if(Ah8<0){A.ab5("%s",AYJ);return A.jV;}var Iz=(AYK+A._GetAutoObject(
A.acj.DV).Af_())+CJ;var F$=A._GetAutoObject(A.Device.Converter).Ak_(A1L);if(!A1L
)F$=A.abU(F$,AYL,0);else if(A1L>0)F$=A.abU(F$,AIn,0);Iz=this.BgG(Iz,AYM,F$);if(Ah8===
1)Iz=Iz+A.aaR(A.acf.Bkb);else{Iz=Iz+A.aaR(A.acf.Bkc);Iz=this.BgG(Iz,AYN,Ah8.toFixed(
));}return Iz;},BgG:function(aString,BcU,Byp){if(aString===A.jV){A.ab5("%s",AYO);
return A.jV;}var A3w=aString.indexOf(BcU,0);if(A3w>=0){aString=A.ab1(aString,A3w
,BcU.length);aString=A.abU(aString,Byp,A3w);}return aString;},ATW:function(E){if(
A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C6],this.AhO,0);this.AhO=
E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},BmX:function(
E){if(A.aaZ(this.AgY,E))return;if(!!this.AgY)A.z$([this,this.C6],this.AgY,0);this.
AgY=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},ATX:function(
E){if(A.aaZ(this.AhP,E))return;if(!!this.AhP)A.z$([this,this.C6],this.AhP,0);this.
AhP=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},BmY:function(
E){if(A.aaZ(this.AgZ,E))return;if(!!this.AgZ)A.z$([this,this.C6],this.AgZ,0);this.
AgZ=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},C6:function(
G){this.Am();},T:function(E){if(this.DM===E)return;this.DM=E;this.V.R(E);},A_$:function(
E){if(this.AGT===E)return;this.AGT=E;this.Am();},ED:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C6],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N7={I:this},0);A.acg.Text._Init.call(this.Rn={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.T1={I:this},0);A.acg.
Ap._Init.call(this.YN={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);C.CG.
_Init.call(this.PW={I:this},0);this.__proto__=C.AHq;this.H(AfK);this.Background.
A1(0x3F);this.Background.H(AfK);this.N7.H(AYP);this.N7.R(A._GetAutoObject(A.acj.
DV).AaF());this.N7.A4(0x9);this.N7.L(A.jb.Text);this.Rn.H(AYQ);this.Rn.A4(0x14);
this.Rn.R(A.aaR(A.acu.Akl));this.Rn.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYR);this.
V.R(A.aaR(A.acf.AuI));this.V.A4(0x12);this.V.L(A.jb.Text);this.T1.H(Aaq);this.YN.
A1(0x14);this.YN.H(AIo);this.YN.Cx(1);this.AbL.A1(0x14);this.AbL.H(AIo);this.AbL.
Cx(0);this.PW.H(AYS);this.PW.R(A.aaR(A.acf.A5m));this.J(this.Background,0);this.
J(this.N7,0);this.J(this.Rn,0);this.J(this.V,0);this.J(this.T1,0);this.J(this.YN
,0);this.J(this.AbL,0);this.J(this.PW,0);this.N7.S(A.aaL(A.fl.EL));this.N7.AY(A.
aaL(A.fl.Af));this.N7.Cm(A.aaL(A.fl.HK));this.Rn.S(A.aaL(A.fl.Aez));this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bg));this.T1.S(A.aaL(A.
fl.Af));this.T1.AY(A.aaL(A.fl.Ak));this.T1.Cm(A.aaL(A.fl.Bg));this.YN.Ax(A.aaL(A.
ach.AB2));this.AbL.Ax(A.aaL(A.ach.AB2));this.H$=A._NewObject(A.Device.Rating,0);
this.PW.S(A.aaL(A.fl.Af));this.PW.AY(A.aaL(A.fl.Ak));this.PW.Cm(A.aaL(A.fl.Bg));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N7._Done(
);this.Rn._Done();this.V._Done();this.T1._Done();this.YN._Done();this.AbL._Done(
);this.PW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N7._ReInit();this.Rn._ReInit();this.V.
_ReInit();this.T1._ReInit();this.YN._ReInit();this.AbL._ReInit();this.PW._ReInit(
);this.Rn.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuI));this.PW.R(A.aaR(A.acf.A5m
));this.N7.S(A.aaL(A.fl.EL));this.N7.AY(A.aaL(A.fl.Af));this.N7.Cm(A.aaL(A.fl.HK
));this.Rn.S(A.aaL(A.fl.Aez));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));
this.V.Cm(A.aaL(A.fl.Bg));this.T1.S(A.aaL(A.fl.Af));this.T1.AY(A.aaL(A.fl.Ak));this.
T1.Cm(A.aaL(A.fl.Bg));this.PW.S(A.aaL(A.fl.Af));this.PW.AY(A.aaL(A.fl.Ak));this.
PW.Cm(A.aaL(A.fl.Bg));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhO)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgZ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AWb={Animal:null,Rating:null,Cr:null,AD:null,A0:
0,Hn:function(G){var B;if(!this.Animal||!this.Rating)return;var Gk=this.AD.G6;var
CA=(C.AHq.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.ED([B=this.Animal
,B.PX,B.ED]);CA.BmX([B=A._GetAutoObject(A.Device.Device),B.AEZ,B.AI8]);CA.BmY([B=
this.Rating,B.A9R,B.OnSetTimestamp]);switch(Gk%this.A0){case 1:{CA.ATW([B=this.Animal
,B.A9q,B.AFy]);CA.ATX([B=this.Animal,B.A9S,B.AF2]);CA.T(A.aaR(A.acf.AuI));}break;
default:if(this.Animal.Arm()){CA.ATW([B=this.Animal,B.ASO,B.AwR]);CA.ATX([B=this.
Animal,B.AS5,B.Axh]);CA.T(A.aaR(A.acf.AL7));}else{CA.ATW([B=this.Animal,B.ASO,B.
AwR]);CA.ATX([B=this.Animal,B.AS5,B.Axh]);CA.T(A.aaR(A.acf.BhJ));}}if(this.A0>1)
CA.A_$(true);else CA.A_$(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GQ
]));},DG:function(G){if(this.A0>0)switch(this.Cr.CP){case 6:this.CF(this);break;
case 7:this.Ce(this);break;default:this.Cr.Mz=true;}},L9:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JF(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JF(1);else{this.JF(2);this.AD.GU(1);this.
AD.HJ(this.AD.Gv,true,null,null);}if(this.A0>0)this.AD.AbO(0,this.A0-1);},AkD:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.A0>0)this.AD.AbO(0,this.A0-1);
},CF:function(G){if(this.AD.Gv>0)this.AD.GU(this.AD.Gv-1);else this.AD.GU(this.A0-
1);this.AD.HJ(this.AD.Gv,true,null,null);},Ce:function(G){if(this.AD.Gv<(this.A0-
1))this.AD.GU(this.AD.Gv+1);else this.AD.GU(0);this.AD.HJ(this.AD.Gv,true,null,null
);},JF:function(E){if(this.A0===E)return;this.A0=E;this.AD.JF(this.A0);A.abo([this
,this.ArG,this.JF],0);},ArG:function(){return this.A0;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BG._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AWb;this.H(AfK);this.Cr.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfK);this.AD.N_(C.AHq);this.AD.Afb(160);this.AD.GU(0);this.
AD.JF(2);this.J(this.AD,0);this.Cr.BH=[this,this.DG];this.Cr.D3=[this,this.DG];this.
AD.Hn=[this,this.Hn];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Ei={Init:function(aArg){},Bl:function(aSize){C.Cp.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Aj:function(Ae){var B;C.Cp.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((
Ae&0x20)===0x20);var GG=this.Bo.Bw;var FY=A.jb.CL;var GZ=A.jb.Text;if(this.Hm){FY=
A.jb.CV;GZ=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CV);this.V.L(A.jb.CL);}else
if(GG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);}this.LQ=Hf;
this.KN=Fv;this.Qx=GG;},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Ei;this.H(K4);this.V.H(BF);this.ZH(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeY={KR:null,GM:A.jV,Bl:function(aSize){C.Ei.Bl.call(this,aSize);this.KR.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Aj:function(Ae){C.Ei.Aj.call(this,Ae);this.KR.
L(this.V.AR);},Init:function(aArg){},Ab$:function(E){if(this.GM===E)return;this.
GM=E;this.KR.R(E);},_Init:function(aArg){C.Ei._Init.call(this,aArg);C.CG._Init.call(
this.KR={I:this},0);this.__proto__=C.AeY;this.H(K4);this.Background.H(K4);this.V.
H(Aao);this.V.R(LE);this.KR.H(I2);this.KR.R(AYT);this.J(this.KR,0);this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.KR.S(A.aaL(A.fl.Af));this.
KR.AY(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.
KR._Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.
KR._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.KR.S(A.aaL(
A.fl.Af));this.KR.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ei._Mark.call(this
,D);if((B=this.KR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Ary={ACv:null,Q:null,A3:null,AF:null,In:null,L5:null,Ap:null,EN:null,AOi:A.jV
,AOj:A.jV,Bl:function(aSize){C.AeY.Bl.call(this,aSize);if(!this.ACv)this.KR.H([].
concat(0,this.KR.M.slice(1,4)));else this.KR.H([].concat(this.Ap.M[2],this.KR.M.
slice(1,4)));},Aj:function(Ae){var F,Cv,Tk;C.AeY.Aj.call(this,Ae);var Bdn=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apk)this.Ab$(this.AOi);else
this.Ab$(this.AOj);}else{this.Ab$(A._GetAutoObject(A.Device.Converter).Rl((F=this.
Q,F[1].call(F[0]))));if((((!!this.In&&!!this.A3)&&!!this.AF)&&!!this.L5)&&(((F=this.
In,F[1].call(F[0]))===1)||(!(Cv=this.In,Cv[1].call(Cv[0]))&&(Tk=this.L5,Tk[1].call(
Tk[0])))))Bdn=true;}}this.EN.Z(Bdn);this.Ap.L(this.V.AR);A.pe([this,this.Agg],this
);},C6:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)
A.pe([this,this.C6],this);},AFh:function(E){if(this.ACv===E)return;this.ACv=E;this.
Ap.Ax(E);this.Bki();},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaP],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaP],E,0);if(!!E)A.pe([
this,this.AaP],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaR],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaR],E,0);if(!!E)
A.pe([this,this.AaR],this);},AaR:function(G){this.Am();},AaP:function(G){this.Am(
);},Uu:function(E){if(A.aaZ(this.In,E))return;if(!!this.In)A.z$([this,this.Al5],
this.In,0);this.In=E;if(!!E)A.zX([this,this.Al5],E,0);if(!!E)A.pe([this,this.Al5
],this);},Al5:function(G){this.Am();},Agg:function(G){var F,Cv;if((!this.In||!this.
A3)||!this.AF)return;var A3d=this.KR.Afm([(this.KR.String.length-(F=this.AF,F[1].
call(F[0])))-(Cv=this.A3,Cv[1].call(Cv[0])),0]);var A4z=this.KR.Afm([this.KR.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABt=this.KR.Dd(0x0);this.EN.H([A3d[0]-
1,ABt[1],A4z[0]+1,ABt[3]]);},Akx:function(E){if(this.AOi===E)return;this.AOi=E;this.
Am();},Aky:function(E){if(this.AOj===E)return;this.AOj=E;this.Am();},Ae_:function(
E){if(A.aaZ(this.L5,E))return;if(!!this.L5)A.z$([this,this.A3W],this.L5,0);this.
L5=E;if(!!E)A.zX([this,this.A3W],E,0);if(!!E)A.pe([this,this.A3W],this);},A3W:function(
G){this.Am();},_Init:function(aArg){C.AeY._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BY._Init.call(this.EN={I:this},0);this.__proto__=C.Ary;
this.Ap.H(AhZ);this.EN.H(AYU);this.EN.Nx(2);this.EN.L(A.jb.E2);this.J(this.Ap,0);
this.J(this.EN,0);this.KR.Q9([this,this.Agg]);},_Done:function(){this.__proto__=
C.AeY;this.Ap._Done();this.EN._Done();C.AeY._Done.call(this);},_ReInit:function(
){C.AeY._ReInit.call(this);this.Ap._ReInit();this.EN._ReInit();},_Mark:function(
D){var B;C.AeY._Mark.call(this,D);if((B=this.ACv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Il:0,AaN:4,Beu:false,BeC:true,BeB:false,Bdu:true,Bet:false
,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bes(
)){this.Il=A._GetAutoObject(A.Device.Helper).WW.Id;var AiA=A._GetAutoObject(A.Device.
Helper).ARx(this.Il);if(AiA)A._GetAutoObject(A.Device.Device).AZ(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A31]);else{this.AaN=A._GetAutoObject(
A.Device.Helper).ARy(this.Il);var BeZ=false;if((this.AaN===3)||(this.AaN===2))BeZ=
A._GetAutoObject(A.Device.Helper).A7Z(this.Il,A._GetAutoObject(A.Device.Helper).
W);if(BeZ)A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Il),0,null);else switch(this.AaN){case 2:{var BO=A._GetAutoObject(
A.Device.Converter).AsT(this.Il);A._GetAutoObject(A.Device.Device).AZ(46,true,BO.
toFixed(),0,[this,this.A31]);}break;case 3:case 1:case 0:case 4:this.A4P();break;
default:throw new Error(AIp+this.AaN.toFixed());}}}},Ex:function(G){A._GetAutoObject(
C.A5).FA();},AI9:function(s){this.Ex(s);},A4P:function(){if((this.AaN===3)||(this.
AaN===2)){if((this.Bdu&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Il)){A._GetAutoObject(A.Device.Device).AZ(69,true
,A.jV,0,[this,this.A31]);return;}else this.BCE();}if(this.Beu)A._GetAutoObject(A.
Device.Helper).Bpf(this.Il);A._GetAutoObject(A.Device.Helper).W.Nv(this.Il);this.
Bet=true;this.BCG();this.Ex(this);},A31:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4P();break;case 107:switch(Ar.PopupState){case 7:{this.Beu=true;this.A4P();}break;
case 8:this.Ex(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ex(
this);break;default:A.ab5("%s%e",AIq,Ar.Id);}},BCE:function(){A._GetAutoObject(A.
Device.Helper).W.Nt(this.Il);if(this.BeB&&(A._GetAutoObject(A.Device.Converter).
Ta(this.Il)===10)){var Bc9=Math.trunc((this.Il%1000000000000)/10000000000);if(!Bc9&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.ED(0);else if((Bc9===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.ED(2);}},BCG:function(){if(this.BeC){A._GetAutoObject(
A.Device.Helper).W.SS(A._GetAutoObject(A.Device.Helper).A5E(A._GetAutoObject(A.Device.
Device).Ak6,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak6===1)A._GetAutoObject(A.Device.Helper).BaB();}},_Init:function(aArg){C.Rc._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Ds(C.IQ
);this.Number.R(A.aaR(A.acf.O0));this.Jn.H(AYV);this.I0.H(U1);this.AkF(1);this.N.
CF=[this,this.AI9];this.N.C4(A.aaL(A.ach.E3));},_ReInit:function(){C.Rc._ReInit.
call(this);this.Number.R(A.aaR(A.acf.O0));},_className:"Application::SetTransponderScreen"
};C.ADG={Gr:null,Lr:null,Ky:null,CQ:function(){this.Am();},Init:function(aArg){this.
Am();},Aj:function(Ae){C.EC.Aj.call(this,Ae);this.Lr.R(A._GetAutoObject(A.acj.DV
).Af_());this.Ky.R(A._GetAutoObject(A.acj.DV).AaF());},_Init:function(aArg){C.EC.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gr={I:this},0);A.acg.Text._Init.
call(this.Lr={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);this.__proto__=
C.ADG;this.Background.L(A.jb.Text);this.Gr.H(AYW);this.Gr.A4(0x11);this.Gr.R(A.aaR(
A.acf.Date));this.Gr.L(A.jb.Bm);this.Lr.H(AYX);this.Lr.A4(0x11);this.Lr.L(A.jb.Bm
);this.Ky.H(AYY);this.Ky.L(A.jb.Bm);this.J(this.Gr,0);this.J(this.Lr,0);this.J(this.
Ky,0);this.Gr.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EC;this.Gr._Done();this.Lr.
_Done();this.Ky._Done();C.EC._Done.call(this);},_ReInit:function(){C.EC._ReInit.
call(this);this.Gr._ReInit();this.Lr._ReInit();this.Ky._ReInit();this.Gr.R(A.aaR(
A.acf.Date));this.Gr.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(
A.fl.Af));this.CQ();},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.
Gr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHu={Mv:null,Hq:null,Ie:null,AP:null,A_:null,F$:0,Ig:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mv.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mv.M);
},Aj:function(Ae){C.A$.Aj.call(this,Ae);if(this.AiP){this.Ie.R(Rt);this.Ie.L(A.jb.
Text);this.Mv.L(this.Background.AR);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Th(this.F$,2,true));this.Ie.L(A._GetAutoObject(A.acj.DV).Az4(this.F$,this.Ig));
this.Mv.L(A._GetAutoObject(A.acj.DV).Az2(this.F$,this.Ig));}this.Hq.L(this.V.AR);
},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlH=this.AX.Hw(
Ad,6);var Amd=this.AX.CE(Ad,8);if(this.Hs>0){var Bzy=this.AX.Hw(this.Hs-1,6);var
BCj=this.AX.CE(this.Hs-1,8);var LN=A._GetAutoObject(A.Device.Helper).Mg(Bzy,AlH);
if(!!LN){this.AiP=false;this.F$=A._GetAutoObject(A.acj.DV).AlE(LN,BCj,Amd);}else{
this.AiP=true;this.F$=0;}}else{this.AiP=true;this.F$=0;}this.T(A._GetAutoObject(
A.acj.KS).AC8(AlH));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak_(Amd));this.
Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mv={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.AHu;this.V.H(Pb);this.Mv.H(Ati);this.Hq.H(AIr);this.Hq.A4(0x12);this.Hq.R(Rr);
this.Hq.L(A.jb.Text);this.Ie.H(AIs);this.Ie.R(Rr);this.Ie.L(A.jb.Text);this.AP.H(
Aot);this.AP.L(A.jb.Bb);this.A_.H(Aou);this.A_.L(A.jb.Bb);this.J(this.Mv,0);this.
J(this.Hq,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mv._Done();this.Hq._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mv._ReInit(
);this.Hq._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bf:null,V_:null,AhV:null,S_:null
,KT:A.jV,CQ:function(){this.Am();},Aj:function(Ae){C.AB.Aj.call(this,Ae);var LN=
A._GetAutoObject(A.Device.Helper).Mg(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LN){var F$=A._GetAutoObject(
A.acj.DV).AlE(LN,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdT=A.aaR(A.acf.Bh5);AdT=A._GetAutoObject(
A.Device.Helper).MR(AdT,Pc,A._GetAutoObject(A.Device.Converter).Th(F$,2,true));AdT=
A._GetAutoObject(A.Device.Helper).MR(AdT,Ayp,A._GetAutoObject(A.acj.DV).AaF());this.
S_.R(AdT);this.AhV.L(A._GetAutoObject(A.acj.DV).Az2(F$,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S_.L(A._GetAutoObject(A.acj.DV).Az4(F$,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S_.R(A.aaR(A.acf.AV$));this.AhV.L(A.jb.
ARi);this.S_.L(A.jb.Text);}},CC:function(G){var Fx=A._NewObject(A.Device.Filter,
0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CY(HY);var Ade=A._NewObject(A.Device.Int32FilterCriterion
,0);Ade.Initialize(8,2,0,true);Fx.CY(Ade);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);this.AxI(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxI:function(G){this.Bf=A._NewObject(C.Gj,0);this.Bf.N_(C.AHu);this.Bf.H(AyB
);this.Bf.ZA(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dl(this.KT);this.J(this.
Bf,0);this.Ba(this.Bf);},Ant:function(G){A._GetAutoObject(C.A5).FA();},Dl:function(
E){if(this.KT===E)return;this.KT=E;if(!!this.Bf)this.Bf.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADG._Init.call(this.V_={I:this},0);A.acg.AK._Init.
call(this.AhV={I:this},0);A.acg.Text._Init.call(this.S_={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cg);this.N.Z(true);this.Ds(C.IQ);this.V_.H(
Qe);this.KT=A.aaR(A.acf.Akm);this.AhV.A1(0x1D);this.AhV.H(I2);this.S_.A1(0x1D);this.
S_.H(I2);this.S_.A4(0x12);this.S_.R(Rr);this.J(this.V_,0);this.J(this.AhV,0);this.
J(this.S_,0);this.N.CF=[this,this.Ant];this.N.C4(A.aaL(A.ach.E3));this.S_.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V_._Done();this.AhV._Done(
);this.S_._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V_._ReInit();this.AhV._ReInit();this.S_._ReInit();this.Dl(A.aaR(A.acf.Akm
));this.S_.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S_
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mr={DR:null,AcG:null,ARZ:11,EW:0,A5C:true,AB9:false,H0:function(G){if(A._GetAutoObject(
A.Device.Device).An.B_()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).AZ(
30,true,A.jV,0,null);},CC:function(G){if(this.DR.AAd())this.DR.Add();else if((this.
EW===2)&&A._GetAutoObject(A.Device.Helper).W.Aq4())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EW===1)this.E5(0);},Ex:function(G){this.E5(0);A._GetAutoObject(
C.A5).FA();},BCW:function(){A._GetAutoObject(A.Device.Device).AhN();},A4V:function(
){A._GetAutoObject(A.Device.Device).An5();},A_e:function(E){if(this.AB9===E)return;
this.AB9=E;A.abo([this,this.Blo,this.A_e],0);},E5:function(E){var B;if(this.EW===
E)return;this.EW=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkQ();A.zX([
this,this.AKJ],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkE],0);A.z$([this,this.
AAF],[B=this.DR,B.SN,B.E5],0);this.BCW();}break;case 3:{A.z$([this,this.AKJ],[B=
A._GetAutoObject(A.Device.Helper),B.ArH,B.AkE],0);this.A4V();this.BAR();}break;case
2:{A._GetAutoObject(A.Device.Helper).Asw();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5C)this.BCH();else this.BCK();}break;case 4:{A.z$([this
,this.AKJ],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkE],0);this.A4V();A._GetAutoObject(
A.Device.Helper).Asw();A.zX([this,this.BfH],[B=A._GetAutoObject(A.Device.Device)
,B.Aws,B.Ay3],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARZ);}
break;case 5:this.Bg2();break;case 6:{A.zX([this,this.AAF],[B=this.DR,B.SN,B.E5]
,0);this.DR.Add();}break;case 0:{A.z$([this,this.AKJ],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkE],0);this.A4V();}break;default:throw new Error(AyH);}A.abo([this
,this.SN,this.Bxg],0);},Bxg:function(Aq){this.E5(Aq);},AKJ:function(G){if(!!A._GetAutoObject(
A.Device.Helper).WW){if(this.EW===1)this.E5(3);else A.ab5("%s%e",AYZ,this.EW);}else
A.ab5("%s",AIt);},BCH:function(){A._GetAutoObject(A.Device.Device).AZ(13,true,A.
jV,0,[this,this.BA7]);},BA7:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bdy(false
))A._GetAutoObject(C.A5).Cc(31);else{A._GetAutoObject(A.Device.Helper).AkQ();this.
E5(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkQ(
);this.E5(1);}},Bdy:function(Ai2){if(A._GetAutoObject(A.Device.Device).An.Lm()){
A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.
HL().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.G8();A.
_GetAutoObject(A.Device.Helper).Aqm(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.Nv(A._GetAutoObject(A.Device.Helper).WW.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhJ){var AlR=A._GetAutoObject(A.Device.Helper).AhJ.AO3();A._GetAutoObject(
A.Device.Helper).W.Aca(AlR);A._GetAutoObject(A.Device.Helper).W.AnJ(AlR);}if(A._GetAutoObject(
A.Device.Helper).ARy(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nt(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SS(A._GetAutoObject(A.Device.Helper).BhU(A._GetAutoObject(A.Device.
Device).AgD,A._GetAutoObject(A.Device.Helper).W));if(Ai2){A._GetAutoObject(A.Device.
Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);var Me=A._GetAutoObject(A.Device.
Device).An.L3(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SZ(Me);if(A._GetAutoObject(A.Device.Helper).Am_()){if(A._GetAutoObject(A.
Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var B3=A._NewObject(A.Device.Rating
,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B3.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B3.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B3.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgD)A._GetAutoObject(
A.Device.Helper).BaB();}return true;},BAR:function(){if(!!A._GetAutoObject(A.Device.
Helper).WW){var AJB=true;if(A._GetAutoObject(A.Device.Helper).WW.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJB=A._GetAutoObject(A.Device.Helper).A7$(A._GetAutoObject(
A.Device.Helper).WW.Id);if(!AJB&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdy(true);AJB=A._GetAutoObject(A.Device.Helper).A7$(A._GetAutoObject(A.
Device.Helper).WW.Id);}}if(AJB)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIt);
return;}},BfH:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARZ){A.z$([this,this.BfH],[B=A._GetAutoObject(A.Device.Device),B.Aws,B.Ay3
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq4())this.E5(5);else this.E5(1);}},
Bg2:function(){if(this.AB9===true)this.E5(6);else A._GetAutoObject(C.A5).Cc(24);
},BCK:function(){A._GetAutoObject(A.Device.Device).AZ(36,true,A.jV,0,[this,this.
BB0]);},BB0:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkQ();this.E5(1);}},AAF:function(G){if(!this.DR.EW)this.E5(1);},A3O:function(G
){},Bxq:function(s){this.A3O(s);},Blo:function(){return this.AB9;},SN:function(){
return this.EW;},_Init:function(aArg){C.Rc._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcG={I:this},0);this.__proto__=C.Mr;this.N.Z(true);this.Ds(C.Aq5);this.
Number.H(AY0);this.Number.R(A.aaR(A.acf.A$Z));this.Jn.H(AY1);this.I0.H(AY2);this.
AcG.H(AY3);this.AcG.R(AY4);this.AcG.L(A.jb.Text);this.J(this.AcG,0);this.N.CF=[this
,this.Ex];this.N.Cf=[this,this.Bxq];this.N.C4(A.aaL(A.ach.E3));this.Number.S(A.aaL(
A.fl.Af));this.AcG.S(A.aaL(A.fl.H5));this.DR=A._GetAutoObject(C.DR);},_Done:function(
){this.__proto__=C.Rc;this.AcG._Done();C.Rc._Done.call(this);},_ReInit:function(
){C.Rc._ReInit.call(this);this.AcG._ReInit();this.Number.R(A.aaR(A.acf.A$Z));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Rc._Mark.call(this,D);if((B=
this.DR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5q={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apf:-1,EW:0,ByO:function(){var BgH=false;
var Ou=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HL().toFixed(),0,null);else if(Ou){BgH=true;var B3=A._NewObject(
A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AxE(B3,5);B3.OnSetAppearance(3);B3.Cs(A._GetAutoObject(
A.Device.Device).Bt);}else{var B3=A._NewObject(A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxE(B3
,5);B3.OnSetAppearance(1);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.Fm(A._GetAutoObject(A.Device.Helper).W.CR,A._GetAutoObject(A.
Device.Device).An);if(BgH)A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Ou)A.
_GetAutoObject(A.Device.Helper).W.An0(false);else A._GetAutoObject(A.Device.Helper
).W.An0(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AZ(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M7]);else A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M7]);},ByQ:function(){A._GetAutoObject(
A.Device.Helper).W.AGP(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M7]);else A._GetAutoObject(
A.Device.Device).AZ(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M7]);},Qr:function(Ej){switch(Ej){case 4:this.ByO();break;case
128:A._GetAutoObject(C.A5).Cc(7);break;case 16:A._GetAutoObject(C.A5).Cc(36);break;
case 1:A._GetAutoObject(C.A5).Cc(10);break;case 2:A._GetAutoObject(C.A5).Cc(11);
break;case 8:this.ByQ();break;case 64:A._GetAutoObject(C.A5).Cc(29);break;case 32:
A._GetAutoObject(C.A5).Cc(48);break;case 256:A._GetAutoObject(C.A5).Cc(21);break;
case 512:A._GetAutoObject(C.A5).Cc(30);break;case 1024:this.BAO();break;case 262144:
this.BDa();break;case 2048:this.Add();break;case 4096:this.Bdq(false);break;case
8192:this.ByP();break;case 16384:this.BAN();break;case 32768:this.Bzd();break;case
524288:this.Bze();break;case 65536:this.BzC();break;case 131072:this.BCz();break;
case 0:break;default:throw new Error(AY5);}},BdA:function(Ej,Byj){var EQ=A._NewObject(
C.Wu,0);EQ.Ab_(false);EQ.Ai(true);EQ.AQ=Byj;EQ.Bmw(Ej);switch(Ej){case 1:{EQ.T(A.
aaR(A.acf.An6));EQ.DD(A.aaL(A.ach.ALX));}break;case 2:{EQ.T(A.aaR(A.acf.A$J));EQ.
DD(A.aaL(A.ach.ALY));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DD(A.aaL(A.ach.ALZ
));EQ.AFO(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asi));EQ.DD(A.aaL(A.ach.AL0));EQ.
AFO(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMw));EQ.DD(A.aaL(A.ach.AL1));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DD(A.aaL(A.ach.AL2));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DD(A.aaL(A.ach.AL3));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DD(A.aaL(A.ach.AL4));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DD(A._GetAutoObject(A.acj.DV).BAm());}break;case 512:{EQ.T(A.aaR(A.acf.ASm));
EQ.DD(A.aaL(A.ach.ALP));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DD(A.aaL(A.ach.ALQ));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DD(A.aaL(A.ach.ALW));}break;case 2048:{EQ.T(A.aaR(A.acf.TE));EQ.DD(A.aaL(A.ach.ALR
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DD(A.aaL(A.ach.ALS));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DD(A.aaL(A.ach.ALT));EQ.AFO(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bje));EQ.DD(A.aaL(A.ach.ALU));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bps));EQ.DD(A.aaL(A.ach.ALV));}break;default:A.ab5("%s",(AY6+Ej.toFixed(
))+AY7);}return EQ;},BzP:function(){this.Apf=this.Apf+1;if(this.Apf>=this.AutoActions.
Ni())this.E5(0);else this.E5(2);},BCn:function(){this.Apf=-1;},AAd:function(){return(
this.Apf>-1)&&!this.BAH();},BAH:function(){return this.Apf>=this.AutoActions.Ni(
);},E5:function(E){if(this.EW===E)return;this.EW=E;switch(E){case 1:this.BzP();break;
case 2:{var To=this.AutoActions.OM(this.Apf);if(this.A5n(A._GetAutoObject(A.Device.
Helper).W,To))this.Qr(To);else A._GetAutoObject(A.Device.Device).AZ(64,true,(this.
ActionToString.LC(To)+Atg)+this.AnimalTypeToString.LC(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M7]);}break;case 0:this.BCn();break;default:throw new
Error(AyH);}A.abo([this,this.SN,this.E5],0);},M7:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bdq(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A5).Cc(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAd())this.
E5(1);},Bds:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.L3(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAO:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A5).Cc(
45);else A._GetAutoObject(A.Device.Device).AZ(32,true,A.jV,0,[this,this.M7]);},Add:
function(){this.E5(1);},BCl:function(){var Ou=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Ou&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device
).Bt.HL().toFixed(),0,null);else{var B3=A._NewObject(A.Device.Rating,0);B3.G8();
B3.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AxE(B3,5);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.Fm(A._GetAutoObject(A.Device.Helper).W.CR,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Ou)A._GetAutoObject(
A.Device.Helper).W.An0(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M7]);},BCm:function(){A._GetAutoObject(
A.Device.Helper).W.AGP(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M7]);},Bdq:function(BzT){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzT===false))A._GetAutoObject(A.Device.
Device).AZ(63,true,A.jV,0,[this,this.M7]);else A._GetAutoObject(C.A5).Cc(54);},ByP:
function(){A._GetAutoObject(A.Device.Helper).W.Ar0(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AZ(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M7]);else A._GetAutoObject(A.Device.Device).AZ(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M7]);},BAN:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A5).Cc(81);else A._GetAutoObject(A.
Device.Device).AZ(69,true,A.jV,0,[this,this.M7]);},Bzd:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae$(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M7
]);}else{A._GetAutoObject(A.Device.Helper).W.OV(false);A._GetAutoObject(A.Device.
Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AZ(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M7]);}}},BzC:function(){A._GetAutoObject(A.Device.Helper).W.Ae$(false);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae$(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M7
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AZ(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M7]);else A._GetAutoObject(A.Device.Device).AZ(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M7]);}},A5n:function(C1,Ej
){var QB=false;switch(Ej){case 32768:QB=C1.IsRegistrationNoticePending&&!!C1.NaisIdMother;
break;case 524288:QB=C1.IsRegistrationNoticePending&&!C1.NaisIdMother;break;case
4096:case 8192:switch(C1.AnimalType){case 1:QB=true;break;default:;}break;case 512:
switch(C1.AnimalType){case 0:QB=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:QB=true;break;default:A.ab5("%s",AY8+
Ej.toFixed());}return QB;},BCz:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A5).Cc(80);else A._GetAutoObject(A.Device.Device).AZ(
69,true,A.jV,0,[this,this.M7]);},BDa:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AZ(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M7]);else{A._GetAutoObject(A.
Device.Helper).W.Nv(0);A._GetAutoObject(A.Device.Helper).W.SS(A._GetAutoObject(A.
Device.Helper).A5E(A._GetAutoObject(A.Device.Device).An$,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AZ(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M7]);}},Bze:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.OV(false);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AZ(98,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M7]);}},SN:function(){return this.EW;},_Init:
function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:this},0
);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this},0);this.
__proto__=C.A5q;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;},_Done:
function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL9={R8:null,Aqo:null,E5:function(E){if(this.EW===E)return;C.Mr.E5.call(this
,E);switch(E){case 1:this.Ds(C.Aq5);break;case 5:case 6:this.Ds(C.IQ);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyH);}},A3O:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mr._Init.call(this
,aArg);C.CG._Init.call(this.R8={I:this},0);C.AL_._Init.call(this.Aqo={I:this},0);
this.__proto__=C.AL9;this.A_e(true);this.R8.H(AY9);this.R8.R(A.aaR(A.acf.TE));this.
R8.L(A.jb.Text);this.Aqo.H(AY_);this.J(this.R8,0);this.J(this.Aqo,0);this.N.Cu(A.
aaL(A.ach.AeJ));this.R8.S(A.aaL(A.fl.Af));this.R8.AY(A.aaL(A.fl.HK));this.R8.Cm(
A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.Mr;this.R8._Done();this.Aqo.
_Done();C.Mr._Done.call(this);},_ReInit:function(){C.Mr._ReInit.call(this);this.
R8._ReInit();this.Aqo._ReInit();this.R8.R(A.aaR(A.acf.TE));this.R8.S(A.aaL(A.fl.
Af));this.R8.AY(A.aaL(A.fl.HK));this.R8.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.Mr._Mark.call(this,D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={If:null,J_:null,A3O:function(G){if(this.If.MG(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mr._Init.call(this,aArg);A.
acg.Text._Init.call(this.J_={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J_.H(AY$);this.J_.Lx(true);this.J_.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CJ)+A.aaR(A.acf.ABX));this.J_.L(A.jb.Text);this.J(this.J_,0);this.N.Cu(A.aaL(A.ach.
AeJ));this.J_.S(A.aaL(A.fl.Af));this.If=A._GetAutoObject(C.Pr);},_Done:function(
){this.__proto__=C.Mr;this.J_._Done();C.Mr._Done.call(this);},_ReInit:function(){
C.Mr._ReInit.call(this);this.J_._ReInit();this.J_.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CJ)+A.aaR(A.acf.ABX));this.J_.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mr._Mark.call(this,D);if((B=this.If)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL_={Y:null,Init:function(aArg){var B;A.zV([this,this.ABF],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuH],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABF],this);A.pe([this,this.AuH],this);this.H(A.abK(this.M,AZa));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AZb)));},Bdf:function(G){
var B;var AlF=0;var AzG=0;var Bdw;var X=this.Y.Ah;var Cz=null;Bdw=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ni()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cz=(C.Wu.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cz){Cz.
H(A.abK(Cz.M,AZc));Cz.H(A.abM(Cz.M,(AzG*58)+Bdw));Cz.H(A.abO(Cz.M,AlF*58));if(AzG>=
3){AlF=AlF+1;AzG=0;}else AzG=AzG+1;}X=X.Ah;}this.Ba(null);},A2a:function(Ej){var
EQ=A._GetAutoObject(C.DR).BdA(Ej,null);this.J(EQ,0);this.Bdf(this);},Ao6:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdR=X;X=X.Ah;if(((
AdR.U&0x400)===0x400))this.HQ(AdR);}},ABF:function(G){this.Ao6();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ni();for(O=0;O<CB;O=O+1){var To=A._GetAutoObject(C.
AutoActions).OM(O);this.A2a(To);}A.pe([this,this.Bdf],this);A.pe([this,this.AuH]
,this);A.pe([this,this.BDk],this);},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wu.isPrototypeOf(
X)?X:null);Aa.AFO(false);}X=X.Ah;}},BDk:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wu.isPrototypeOf(
X)?X:null);var By5=A._GetAutoObject(C.AutoActions).Ni();if(!!Aa){var O;Aa.A_a(false
);for(O=0;O<By5;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OM(O)){Aa.A_a(
true);Aa.BnC(AZd+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL_;this.
Y.J3(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DR={_Init:function(){C.A5q._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APM={Lq:null,Ub:null,Init:function(aArg){
this.Lq.R(A._GetAutoObject(A.acj.Temperature).AlQ());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lq={I:this},0);C.CG._Init.call(
this.Ub={I:this},0);this.__proto__=C.APM;this.Lq.H(AZe);this.Lq.A4(0x12);this.Lq.
L(A.jb.Text);this.Ub.H(Aov);this.Ub.R((A.aaR(A.acf.Ahp)+AIu)+A.aaR(A.acf.Kq));this.
Ub.A4(0x12);this.Ub.L(A.jb.Text);this.J(this.Lq,0);this.J(this.Ub,0);this.Lq.S(A.
aaL(A.fl.Af));this.Ub.S(A.aaL(A.fl.Ak));this.Ub.AY(A.aaL(A.fl.Bg));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Lq._Done();this.Ub._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lq._ReInit();this.Ub.
_ReInit();this.Ub.R((A.aaR(A.acf.Ahp)+AIu)+A.aaR(A.acf.Kq));this.Lq.S(A.aaL(A.fl.
Af));this.Ub.S(A.aaL(A.fl.Ak));this.Ub.AY(A.aaL(A.fl.Bg));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ub)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADE={JE:null,D1:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JE={I:this},0);A.acg.Text._Init.call(this.D1={I:this},0);this.__proto__=
C.ADE;this.JE.H(AZf);this.JE.Lx(true);this.JE.A4(0x14);this.JE.R(A.aaR(A.acf.AhU
)+AIv);this.JE.L(A.jb.Text);this.D1.H(Aov);this.D1.Lx(true);this.D1.R(A.aaR(A.acf.
AGj));this.D1.L(A.jb.Text);this.J(this.JE,0);this.J(this.D1,0);this.JE.S(A.aaL(A.
fl.Ak));this.D1.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JE.
_Done();this.D1._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JE._ReInit();this.D1._ReInit();this.JE.R(A.aaR(A.acf.AhU)+AIv);this.
D1.R(A.aaR(A.acf.AGj));this.JE.S(A.aaL(A.fl.Ak));this.D1.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T3={Jf:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jf={I:this},0);this.__proto__=C.T3;this.Jf.H(AIw);this.Jf.R((((A.aaR(A.acf.
RX)+AcZ)+AIx)+A.aaR(A.acf.BaP))+Pd);this.Jf.A4(0x12);this.Jf.L(A.jb.Text);this.J(
this.Jf,0);this.Jf.S(A.aaL(A.fl.Af));this.Jf.AY(A.aaL(A.fl.Ak));this.Jf.Cm(A.aaL(
A.fl.Bg));},_Done:function(){this.__proto__=C.De;this.Jf._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jf._ReInit();this.Jf.R((((
A.aaR(A.acf.RX)+AcZ)+AIx)+A.aaR(A.acf.BaP))+Pd);this.Jf.S(A.aaL(A.fl.Af));this.Jf.
AY(A.aaL(A.fl.Ak));this.Jf.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APO={Lr:null,Ky:null,CQ:function(){this.A$1();},Init:function(aArg){this.A$1(
);},A$1:function(){this.Lr.R(A._GetAutoObject(A.acj.DV).Af_());this.Ky.R(A._GetAutoObject(
A.acj.DV).AaF());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lr={I:this},0);C.CG._Init.call(this.Ky={I:this},0);this.__proto__=C.APO;
this.Lr.H(AZg);this.Lr.A4(0x12);this.Lr.L(A.jb.Text);this.Ky.H(Aov);this.Ky.L(A.
jb.Text);this.J(this.Lr,0);this.J(this.Ky,0);this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(
A.aaL(A.fl.Af));this.Ky.AY(A.aaL(A.fl.Ak));this.Ky.Cm(A.aaL(A.fl.Bg));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lr._Done();this.Ky._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lr._ReInit();
this.Ky._ReInit();this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Ky.AY(
A.aaL(A.fl.Ak));this.Ky.Cm(A.aaL(A.fl.Bg));this.CQ();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANm={Mv:null,Hq:null,Ie:null,AP:null,A_:null,F$:0,AaK:0,Ig:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A_.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mv.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ie.H(this.Mv.M);
},Aj:function(Ae){C.A$.Aj.call(this,Ae);if(this.AiP){this.Ie.R(Rt);this.Ie.L(A.jb.
Text);this.Mv.L(this.Background.AR);}else{this.Ie.R(A._GetAutoObject(A.Device.Converter
).Th(this.F$,2,true));this.Ie.L(A._GetAutoObject(A.acj.DV).Az4(this.F$,this.Ig));
this.Mv.L(A._GetAutoObject(A.acj.DV).Az2(this.F$,this.Ig));}if(this.AaK>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak_(this.AaK));else this.Hq.R(Rt);this.Hq.
L(this.V.AR);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mp=
this.AX.CE(Ad,1);var AuC=this.AX.Hw(Ad,24);var AKi=this.AX.CE(Ad,23);var AuD=this.
AX.Hw(Ad,19);this.AaK=this.AX.CE(Ad,18);if((AuC>0)&&(AuC!==AuD)){var LN=A._GetAutoObject(
A.Device.Helper).Mg(AuC,AuD);if(!!LN){this.AiP=false;this.F$=A._GetAutoObject(A.
acj.DV).AlE(LN,AKi,this.AaK);}else{this.AiP=true;this.F$=0;}}else{this.AiP=true;
this.F$=0;}this.T(Mp.toFixed());this.Ig=this.AX.Am0(Ad,14);this.Am();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.Mv={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ie={I:this},0);A.acg.AK.
_Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=
C.ANm;this.V.H(Pb);this.Mv.H(Ati);this.Hq.H(AIr);this.Hq.A4(0x12);this.Hq.R(Rr);
this.Hq.L(A.jb.Text);this.Ie.H(AIs);this.Ie.R(Rr);this.Ie.L(A.jb.Text);this.AP.H(
Aot);this.AP.L(A.jb.Bb);this.A_.H(Aou);this.A_.L(A.jb.Bb);this.J(this.Mv,0);this.
J(this.Hq,0);this.J(this.Ie,0);this.J(this.AP,0);this.J(this.A_,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Mv._Done();this.Hq._Done();this.Ie._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Mv._ReInit(
);this.Hq._ReInit();this.Ie._ReInit();this.AP._ReInit();this.A_._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Nd={Mu:null,AP:null,A_:null,GB:null,Xz:0,Init:
function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Mu.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mu.M);this.Background.H([].concat(this.Mu.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.GB.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A_.H([this.GB.M[2]-1,0,this.
GB.M[2]+1,aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.GB.L(this.V.AR
);if(!!this.Xz&&(this.Xz!==5)){this.Mu.L(A._GetAutoObject(A.acj.Assessment).Qt(this.
Xz));this.V.L(A._GetAutoObject(A.acj.Assessment).XI(this.Xz));}else this.Mu.L(this.
Background.AR);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mp=this.AX.CE(Ad,1);var L0=this.AX.Jb(Ad,13);var AlL=this.AX.Jb(Ad,17);var AlT=this.
AX.H6(Ad,11);var Azo=this.AX.Hw(Ad,4);var AfX=A._GetAutoObject(A.Device.Helper).
Mg(Azo,A._GetAutoObject(A.Device.Helper).Dr());this.Xz=A._GetAutoObject(A.Device.
Helper).AMt(L0,AlT,AlL);this.T(Mp.toFixed());if(AfX<100)this.GB.R((AfX.toFixed()+
CJ)+A.aaR(A.acf.AL8));else this.GB.R(A._GetAutoObject(A.acj.KS).AC9(Azo,A._GetAutoObject(
A.Device.Helper).Dr(),AIy));this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Mu={I:this},0);A.acg.AK._Init.call(this.AP={I:this
},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.Text._Init.call(this.GB={I:this
},0);this.__proto__=C.Nd;this.Mu.H(Ati);this.Background.H(AZh);this.V.H(Pb);this.
AP.H(Aot);this.AP.L(A.jb.Bb);this.A_.H(Aou);this.A_.L(A.jb.Bb);this.GB.H(AyI);this.
J(this.Mu,-3);this.J(this.AP,0);this.J(this.A_,0);this.J(this.GB,0);this.GB.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Mu._Done(
);this.AP._Done();this.A_._Done();this.GB._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Mu._ReInit();this.AP._ReInit();this.A_._ReInit(
);this.GB._ReInit();this.GB.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GB
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANk={AjB:null,Oh:null,AP:null,A_:null,Jz:null,AKA:0,A3c:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Oh.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjB.H(this.Oh.M);this.A_.H([this.Oh.M[2]-1,0,this.Oh.M[2]+1,aSize[1]]);
this.Jz.H([this.Oh.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this
,Ae);this.Jz.Dg(this.V.AR);if(this.AKA>0){this.AjB.L(A._GetAutoObject(A.acj.Assessment
).Qt(this.A3c));this.Oh.L(A._GetAutoObject(A.acj.Assessment).XI(this.A3c));}else{
this.AjB.L(this.Background.AR);this.Oh.L(this.V.AR);}},Ci:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var IE=this.AX.CE(Ad,0);var Mp=this.AX.CE(Ad,
1);this.AKA=this.AX.CE(Ad,5);this.A3c=this.AX.Jb(Ad,17);this.T(Mp.toFixed());if(
this.AKA>0)this.Oh.R(A._GetAutoObject(A.Device.Converter).Ak3(this.AKA));else this.
Oh.R(Rt);var Xy=A._GetAutoObject(A.Device.Helper).Z0(6);A._GetAutoObject(A.Device.
Device).SZ(Ad);var A1j=A._GetAutoObject(A.Device.Helper).BjE(A._GetAutoObject(A.
Device.Device).Bt,9,IE,Xy,0);this.Jz.A_t(A1j.Get(3));this.Jz.A_v(A1j.Get(2));this.
Jz.A_u(A1j.Get(1));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AK._Init.call(this.AjB={I:this},0);A.acg.Text._Init.call(this.Oh={I:this},
0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},
0);C.Jz._Init.call(this.Jz={I:this},0);this.__proto__=C.ANk;this.Oh.A4(0x12);this.
Oh.R(Rr);this.Oh.L(A.jb.Text);this.AP.H(Aot);this.AP.L(A.jb.Bb);this.A_.H(Aou);this.
A_.L(A.jb.Bb);this.Jz.H(AZi);this.J(this.AjB,0);this.J(this.Oh,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Jz,0);this.Oh.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.AjB._Done();this.Oh._Done();this.AP.
_Done();this.A_._Done();this.Jz._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.AjB._ReInit();this.Oh._ReInit();this.AP._ReInit();
this.A_._ReInit();this.Jz._ReInit();this.Oh.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Oh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jz={Afw:null,
ColoredCounterAttrSet:null,ACA:0,ACB:0,ACz:0,KY:0,Aj:function(Ae){var B;A.Core.P.
Aj.call(this,Ae);var AKt;var ALO;var AKZ;var Al1=0;if(this.ACz>0){AKt=this.ACz.toFixed(
);Al1+=AKt.length;}else{AKt=AZj;Al1++;}if(this.ACB>0){ALO=this.ACB.toFixed();Al1+=
ALO.length;}else{ALO=AyJ;Al1++;}if(this.ACA>0){AKZ=this.ACA.toFixed();Al1+=AKZ.length;
}else{AKZ=AIm;Al1++;}if(Al1<=4)this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Af));else
if(Al1<=5)this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahv(A.aaL(A.fl.Bg));this.Afw.R(((((AZk+AKt)+AZl)+ALO)+AZm)+AKZ);},A_u:function(E
){if(this.ACA===E)return;this.ACA=E;this.Am();},A_v:function(E){if(this.ACB===E)
return;this.ACB=E;this.Am();},A_t:function(E){if(this.ACz===E)return;this.ACz=E;
this.Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;this.ColoredCounterAttrSet.
Ahs(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuY._Init.call(
this.Afw={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jz;this.H(AIz);this.Afw.A1(0x3F);this.Afw.H(AIz);this.
Afw.R(Rr);this.ColoredCounterAttrSet.BmJ(A.jb.E2);this.ColoredCounterAttrSet.A_j(
A.jb.Ia);this.ColoredCounterAttrSet.A_i(A.jb.Gn);this.ColoredCounterAttrSet.Ahs(
A.jb.Text);this.KY=A.jb.Text;this.J(this.Afw,0);this.Afw.A_d(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A_f(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afw._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afw._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahv(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANj={AtO:null
,Acl:null,Acm:null,Acn:null,Jz:null,AP:null,A_:null,Ec:null,LA:null,AcI:null,KZ:
null,K0:null,AJG:0,AJF:0,AJE:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acl.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcI.H(this.
Acl.M);this.A_.H([this.Acl.M[2]-1,0,this.Acl.M[2]+1,aSize[1]]);this.Acm.H([this.
Acl.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KZ.H(this.Acm.M);this.Ec.H([this.
Acm.M[2]-1,0,this.Acm.M[2]+1,aSize[1]]);this.Acn.H([this.Acm.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.K0.H(this.Acn.M);this.LA.H([this.Acn.M[2]-1,0,this.Acn.
M[2]+1,aSize[1]]);this.Jz.H([this.Acn.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae
){C.A$.Aj.call(this,Ae);this.Jz.Dg(this.V.AR);this.Acl.L(A._GetAutoObject(A.acj.
Assessment).Qt(this.AJE));this.Acm.L(A._GetAutoObject(A.acj.Assessment).Qt(this.
AJF));this.Acn.L(A._GetAutoObject(A.acj.Assessment).Qt(this.AJG));this.AcI.L(A._GetAutoObject(
A.acj.Assessment).XI(this.AJE));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XI(
this.AJF));this.K0.L(A._GetAutoObject(A.acj.Assessment).XI(this.AJG));this.AcI.Z(
!this.AJE);this.KZ.Z(!this.AJF);this.K0.Z(!this.AJG);this.Jz.A_t(this.AtO.Get(3)
);this.Jz.A_v(this.AtO.Get(2));this.Jz.A_u(this.AtO.Get(1));},Ci:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var IE=this.AX.CE(Ad,0);var Mp=this.AX.
CE(Ad,1);this.T(Mp.toFixed());A._GetAutoObject(A.Device.Device).SZ(Ad);this.AJE=
A._GetAutoObject(A.Device.Helper).A2O(A._GetAutoObject(A.Device.Device).Bt,IE,0);
this.AJF=A._GetAutoObject(A.Device.Helper).A2O(A._GetAutoObject(A.Device.Device).
Bt,IE,-1);this.AJG=A._GetAutoObject(A.Device.Helper).A2O(A._GetAutoObject(A.Device.
Device).Bt,IE,-2);this.AtO=A._GetAutoObject(A.Device.Helper).A7f(A._GetAutoObject(
A.Device.Device).Bt,IE,0,0);this.Am();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AK._Init.call(this.Acl={I:this},0);A.acg.AK._Init.call(this.Acm={I:
this},0);A.acg.AK._Init.call(this.Acn={I:this},0);C.Jz._Init.call(this.Jz={I:this
},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.AK._Init.call(this.Ec={I:this},0);A.acg.AK._Init.call(this.LA={I:this
},0);A.acg.Text._Init.call(this.AcI={I:this},0);A.acg.Text._Init.call(this.KZ={I:
this},0);A.acg.Text._Init.call(this.K0={I:this},0);this.__proto__=C.ANj;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ec.L(A.jb.Bb);this.LA.L(A.jb.Bb);this.AcI.R(Aow
);this.KZ.R(Aow);this.K0.R(Aow);this.J(this.Acl,0);this.J(this.Acm,0);this.J(this.
Acn,0);this.J(this.Jz,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ec,0);this.
J(this.LA,0);this.J(this.AcI,0);this.J(this.KZ,0);this.J(this.K0,0);this.AcI.S(A.
aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.AtO=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.Acl._Done();this.Acm._Done();this.Acn._Done();this.Jz._Done();this.AP.
_Done();this.A_._Done();this.Ec._Done();this.LA._Done();this.AcI._Done();this.KZ.
_Done();this.K0._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.Acl._ReInit();this.Acm._ReInit();this.Acn._ReInit();this.Jz._ReInit(
);this.AP._ReInit();this.A_._ReInit();this.Ec._ReInit();this.LA._ReInit();this.AcI.
_ReInit();this.KZ._ReInit();this.K0._ReInit();this.AcI.S(A.aaL(A.fl.Af));this.KZ.
S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.AtO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Am3={H_:null,XL:false,Bl:function(aSize){var
B;this.H_.H([(aSize[0]-((B=this.H_.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H_.M[0]-10,40]);C.TO.Bl.call(this,aSize);},Aj:function(Ae){C.TO.Aj.call(
this,Ae);if(this.XL)this.H_.Cx(1);else this.H_.Cx(0);},Ki:function(G){if(this.XL
)C.TO.Ki.call(this,G);},Kd:function(G){if(this.XL)C.TO.Kd.call(this,G);},Tz:function(
AH){C.TO.Tz.call(this,AH);if(!!AH){this.H(A.abI(this.M,80));this.XL=true;this.ZH(
true);}else{this.H(A.abI(this.M,40));this.XL=false;this.ZH(false);}},_Init:function(
aArg){C.TO._Init.call(this,aArg);A.acg.Ap._Init.call(this.H_={I:this},0);this.__proto__=
C.Am3;this.V.A4(0x11);this.H_.H(AHW);this.H_.Cx(0);this.J(this.H_,0);this.V.Cm(A.
aaL(A.fl.Bg));this.H_.Ax(A.aaL(A.ach.AqU));},_Done:function(){this.__proto__=C.TO;
this.H_._Done();C.TO._Done.call(this);},_ReInit:function(){C.TO._ReInit.call(this
);this.H_._ReInit();this.V.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.TO._Mark.
call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGi={_Init:function(aArg){C.Axv._Init.call(this,aArg);this.__proto__=C.AGi;}
,_className:"Application::OptionsOverlaySeparator"};C.AkH={DM:A.jV,Bw:true,_Init:
function(aArg){C.Axv._Init.call(this,aArg);this.__proto__=C.AkH;},_className:"Application::OptionsOverlayNode"
};C.ZJ={AQ:null,_Init:function(aArg){C.AkH._Init.call(this,aArg);this.__proto__=
C.ZJ;},_Mark:function(D){var B;C.AkH._Mark.call(this,D);if((B=this.AQ)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANQ={Aj:function(Ae){C.O4.Aj.call(this,Ae);var FY=A.jb.CL;var GZ=A.jb.Text;if(
this.Hm){FY=A.jb.Text;GZ=A.jb.Bm;}this.Background.L(FY);this.V.L(GZ);},_Init:function(
aArg){C.O4._Init.call(this,aArg);this.__proto__=C.ANQ;},_className:"Application::DarkThemeTextItem"
};C.O4={Background:null,BY:null,V:null,AqB:0,Hm:false,Init:function(aArg){},Bl:function(
aSize){C.Hj.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BY.H(A.abK(this.BY.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Aj:function(
Ae){C.Hj.Aj.call(this,Ae);this.BY.L(this.AqB);},T:function(E){if(this.DM===E)return;
this.DM=E;this.V.R(E);},Bh:function(E){if(this.Hm===E)return;this.Hm=E;this.Am();
},AnD:function(E){if(this.AqB===E)return;this.AqB=E;this.Am();},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);A.acg.
BY._Init.call(this.BY={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.O4;this.H(BF);this.Background.H(AIA);this.BY.H(BF);this.BY.Nx(2);this.BY.L(A.jb.
Rk);this.V.H(AZn);this.AqB=A.jb.Rk;this.J(this.Background,0);this.J(this.BY,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.
fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);this.BY._Done();this.V._Done();C.Hj._Done.call(this);},_ReInit:function(){C.Hj.
_ReInit.call(this);this.Background._ReInit();this.BY._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APR={Et:null,IV:null
,_Init:function(aArg){C.EC._Init.call(this,aArg);A.acg.Text._Init.call(this.Et={
I:this},0);A.acg.Text._Init.call(this.IV={I:this},0);this.__proto__=C.APR;this.H(
Ol);this.Background.H(Ol);this.Et.H(AIB);this.Et.R(A.aaR(A.acf.GP));this.Et.A4(0x11
);this.Et.L(A.jb.Text);this.IV.A1(0x3F);this.IV.H(AIC);this.IV.Ho(5);this.IV.A4(
0x14);this.IV.R(A.aaR(A.acf.AG2));this.IV.L(A.jb.Text);this.J(this.Et,0);this.J(
this.IV,0);this.Et.S(A.aaL(A.fl.Af));this.IV.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EC;this.Et._Done();this.IV._Done();C.EC._Done.call(this);},_ReInit:
function(){C.EC._ReInit.call(this);this.Et._ReInit();this.IV._ReInit();this.Et.R(
A.aaR(A.acf.GP));this.IV.R(A.aaR(A.acf.AG2));this.Et.S(A.aaL(A.fl.Af));this.IV.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.Et).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DT={Sw:null,Sx:null,AeK:null,Ag_:null,QP:null
,KY:0,LastTemperature:0,AqH:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sw.Ax(A.aaL(A.ach.AvL));this.Sx.Ax(A.aaL(A.ach.AvL));}break;case 2:{this.Sw.Ax(A.
aaL(A.ach.AvO));this.Sx.Ax(A.aaL(A.ach.AvO));}break;default:{this.Sw.Ax(A.aaL(A.
ach.AeF));this.Sx.Ax(A.aaL(A.ach.AeF));}}this.Sw.L(A._GetAutoObject(A.acj.Assessment
).Qt(this.AqH));var ApR;if(this.IsWatch)ApR=A.aaL(A.ach.AQV);else if(this.IsFever
){ApR=A.aaL(A.ach.AQU);switch(A._GetAutoObject(A.Device.Converter).Ajo(this.LastTemperature
,this.AnimalType)){case 3:this.QP.L(A.jb.Gn);break;case 2:this.QP.L(A.jb.Ia);break;
case 1:this.QP.L(A.jb.E2);break;case 0:this.QP.L(A.jb.AfA);break;default:;}}else
if(this.IsAlarm){ApR=A.aaL(A.ach.AQT);if(!this.AqH||(this.AqH===5))this.QP.L(A.jb.
Gn);else this.QP.L(0xFF000000);}else ApR=null;this.AeK.Ax(ApR);this.Ag_.Ax(ApR);
this.QP.Ax(ApR);if(A._GetAutoObject(A.acj.Assessment).Qt(this.AqH)===A.jb.E2)this.
Sx.L(this.KY);},ED:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFi:function(E){if(this.AqH===E)return;this.AqH=E;this.Am();},Dg:function(
E){if(this.KY===E)return;this.KY=E;this.Am();},Afa:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uy:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae9:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Afc:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},FE:function(){this.ED(0);this.AFi(0);this.Ae9(false);this.Uy(false
);this.Afa(false);this.Afc(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sw={I:this},0);A.acg.Ap._Init.call(
this.Sx={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.Ag_={I:this},0);A.acg.Ap._Init.call(this.QP={I:this},0);this.__proto__=C.DT;
this.H(All);this.Sw.A1(0x3F);this.Sw.H(All);this.Sw.L(A.jb.CL);this.Sw.A4(0x12);
this.Sw.Cx(0);this.Sx.A1(0x3F);this.Sx.H(All);this.Sx.L(0xFF000000);this.Sx.A4(0x12
);this.Sx.Cx(1);this.AeK.A1(0x3F);this.AeK.H(All);this.AeK.L(0xFF000000);this.AeK.
Cx(0);this.Ag_.A1(0x3F);this.Ag_.H(All);this.Ag_.Cx(1);this.QP.A1(0x3F);this.QP.
H(All);this.QP.L(A.jb.CV);this.QP.Cx(2);this.KY=A.jb.Text;this.J(this.Sw,0);this.
J(this.Sx,0);this.J(this.AeK,0);this.J(this.Ag_,0);this.J(this.QP,0);this.Sw.Ax(
A.aaL(A.ach.AeF));this.Sx.Ax(A.aaL(A.ach.AeF));},_Done:function(){this.__proto__=
A.Core.P;this.Sw._Done();this.Sx._Done();this.AeK._Done();this.Ag_._Done();this.
QP._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sw._ReInit();this.Sx._ReInit();this.AeK._ReInit();this.Ag_._ReInit();
this.QP._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANg={Ci:function(Ad){C.AjD.Ci.call(this,Ad);if(!!this.AX){var BAL=this.AX.H6(
Ad,12);var ByX=this.AX.Ss(Ad,15);this.Abp.R(A._GetAutoObject(A.Device.Helper).Mg(
ByX,A._GetAutoObject(A.Device.Helper).Dr()).toFixed());this.Sy.Z(BAL);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANg;},_className:
"Application::CalfListAlarmItem"};C.ADA={D1:null,MF:null,_Init:function(aArg){C.
T4._Init.call(this,aArg);A.acg.Text._Init.call(this.D1={I:this},0);A.acg.Ap._Init.
call(this.MF={I:this},0);this.__proto__=C.ADA;this.D1.H(Aov);this.D1.Lx(true);this.
D1.R(A.aaR(A.acf.A6v));this.D1.L(A.jb.Text);this.MF.H(AZo);this.MF.Jg(false);this.
MF.L(A.jb.Text);this.MF.A4(0x12);this.J(this.D1,-2);this.J(this.MF,0);this.D1.S(
A.aaL(A.fl.Ak));this.MF.Ax(A.aaL(A.ach.ADZ));},_Done:function(){this.__proto__=C.
T4;this.D1._Done();this.MF._Done();C.T4._Done.call(this);},_ReInit:function(){C.
T4._ReInit.call(this);this.D1._ReInit();this.MF._ReInit();this.D1.R(A.aaR(A.acf.
A6v));this.D1.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T4._Mark.call(this,D
);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MF)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kp={Background:null,BY:
null,AC1:0,ACe:0,Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Background.L(this.
AC1);this.BY.L(this.ACe);},AwQ:function(E){if(this.AC1===E)return;this.AC1=E;this.
Am();},AFb:function(E){if(this.ACe===E)return;this.ACe=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BY={I:this},0);this.__proto__=C.Kp;this.H(Aox);this.
Background.A1(0x3C);this.Background.H(Aox);this.Background.Cx(1);this.BY.A1(0x3C
);this.BY.H(Aox);this.AC1=A.jb.E2;this.ACe=A.jb.Text;this.J(this.Background,0);this.
J(this.BY,0);this.Background.Ax(A.aaL(A.ach.Kp));this.BY.Ax(A.aaL(A.ach.Kp));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BY._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BY._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BY)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmL={Q:null,Pw:
null,A7W:false,Bl:function(aSize){C.MB.Bl.call(this,aSize);this.V.H([].concat(this.
Pw.M[2]-this.V.Text.Jj,this.V.M.slice(1,4)));},Aj:function(Ae){C.MB.Aj.call(this
,Ae);this.Pw.L(this.V.AR);},AwV:function(E){if(this.A7W===E)return;this.A7W=E;if(
E)this.Pw.R(AZp);else this.Pw.R(AID);},Hg:function(G){var F;if(!!this.Q)this.AwV((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)
A.pe([this,this.Hg],this);},_Init:function(aArg){C.MB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pw={I:this},0);this.__proto__=C.AmL;this.Pw.A1(0x34);this.Pw.
H(Xm);this.Pw.R(AID);this.J(this.Pw,0);this.Pw.S(A.aaL(A.fl.AOK));},_Done:function(
){this.__proto__=C.MB;this.Pw._Done();C.MB._Done.call(this);},_ReInit:function(){
C.MB._ReInit.call(this);this.Pw._ReInit();},_Mark:function(D){var B;C.MB._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO9={DY:function(G){C.Kv.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad5(4));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.AO9;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Dv:function(){return 3;},C8:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BU(aIndex);},D0:function(A9){return A9;},H7:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APS={Gr:null,Lq:null,Y2:null,Init:function(aArg){this.Lq.R(A._GetAutoObject(
A.acj.Temperature).AlQ());},_Init:function(aArg){C.EC._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gr={I:this},0);A.acg.Text._Init.call(this.Lq={I:this},0);A.
acg.Text._Init.call(this.Y2={I:this},0);this.__proto__=C.APS;this.Background.L(A.
jb.Text);this.Gr.H(AIE);this.Gr.A4(0x11);this.Gr.R(A.aaR(A.acf.Date));this.Gr.L(
A.jb.Bm);this.Lq.H(AZq);this.Lq.A4(0x12);this.Lq.L(A.jb.Bm);this.Y2.H(AZr);this.
Y2.A4(0x12);this.Y2.R(A.aaR(A.acf.Bq));this.Y2.L(A.jb.Bm);this.J(this.Gr,0);this.
J(this.Lq,0);this.J(this.Y2,0);this.Gr.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af
));this.Y2.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EC;this.Gr._Done();this.Lq._Done();this.Y2._Done();C.EC._Done.call(this);},_ReInit:
function(){C.EC._ReInit.call(this);this.Gr._ReInit();this.Lq._ReInit();this.Y2._ReInit(
);this.Gr.R(A.aaR(A.acf.Date));this.Y2.R(A.aaR(A.acf.Bq));this.Gr.S(A.aaL(A.fl.Af
));this.Lq.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EC._Mark.call(this,D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TI={Lk:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.Bcf],[B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIY
],0);this.AGV(this);A.pe([this,this.AoC],this);},DG:function(G){var D8=(A.Core.BG.
isPrototypeOf(G)?G:null);switch(D8.CP){case 6:this.Ox(this);break;case 7:this.M8(
this);break;default:D8.Mz=true;}},CC:function(G){var B;if(!!this.Lk)this.Lk.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lk)this.Lk.E4(this);C.AB.
E4.call(this,G);},Ant:function(G){A._GetAutoObject(C.A5).FA();},AGV:function(G){
var B;if(!!this.Lk){this.Lk.E4(this);this.HQ(this.Lk);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).Ea){case 0:this.Lk=A._NewObject(C.AMA,0);break;case 1:this.Lk=A.
_NewObject(C.AMB,0);break;case 3:this.Lk=A._NewObject(C.AMz,0);break;case 2:this.
Lk=A._NewObject(C.AMC,0);break;default:throw new Error(AIF);}else switch(A._GetAutoObject(
A.Device.Device).Ea){case 0:this.Lk=A._NewObject(C.AMD,0);break;case 1:this.Lk=A.
_NewObject(C.AMM,0);break;case 3:this.Lk=A._NewObject(C.AMG,0);break;case 2:this.
Lk=A._NewObject(C.AMR,0);break;default:throw new Error(AIF);}this.HR(this);this.
J(this.Lk,0);this.Lk.H(Fd);this.Lk.ZE([this,this.A07]);this.Lk.CC(this);this.Ba(
this.Lk);},Bcf:function(s){this.AGV(s);},BoB:function(G){A._GetAutoObject(A.Device.
Device).Ae3(0);},AUa:function(G){A._GetAutoObject(A.Device.Device).Ae3(1);},AT$:
function(G){A._GetAutoObject(A.Device.Device).Ae3(3);},AUb:function(G){A._GetAutoObject(
A.Device.Device).Ae3(2);},HR:function(G){this.N.C4(A.aaL(A.ach.E3));this.N.Hz(A.
jV);this.N.CF=[this,this.Ant];this.N.AFo(A.aaL(A.fl.Ak));},AoC:function(s){this.
HR(s);},Bnl:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.Bcf],this
);},A$u:function(G){this.Bnl(!this.AjR);},BoE:function(G){A._GetAutoObject(A.Device.
Device).AZ(31,true,A.jV,0,null);},M8:function(G){},BHm:function(s){this.M8(s);},
Ox:function(G){},BHl:function(s){this.Ox(s);},BfF:function(G){var FW=A._GetAutoObject(
A.Device.Device).Ea;FW=FW+1;if(FW>=4)FW=0;A._GetAutoObject(A.Device.Device).Ae3(
FW);},BBF:function(G){var FW=A._GetAutoObject(A.Device.Device).Ea;FW=FW-1;if(FW<
0)FW=3;A._GetAutoObject(A.Device.Device).Ae3(FW);},Age:function(G){},A07:function(
s){this.Age(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TI;this.Background.H(Cg);this.N.Z(true);this.N.OX(true);this.N.OY(true);this.Ds(
C.APH);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.Ea={AQ:null,AttrSet:null,Do:null,CC:function(G){},AIX:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyU:function(s){
this.E4(s);},ZE:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;this.Do.BH=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BG._Init.call(this.Do={I:this},0);this.__proto__=
C.Ea;this.H(U5);this.AttrSet.A_j(A.jb.Gn);this.AttrSet.A_i(A.jb.Ia);this.AttrSet.
Ahs(A.jb.Text);this.Do.Filter=1;this.AttrSet.Ahv(A.aaL(A.fl.Ak));this.AttrSet.A_f(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Ahv(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMD={R1:
null,Aa8:null,TH:null,TG:null,R5:null,QF:null,R6:null,R3:null,R4:null,R2:null,CQ:
function(){var B;this.R1.Ci(this);this.Aa8.Ci(this);this.TH.Ci(this);this.TG.Ci(
this);this.R5.Ci(this);this.QF.Ci(this);this.R6.Ci(this);this.R3.Ci(this);this.R4.
Ci(this);this.R2.Ci(this);},GJ:function(G){C.R7.GJ.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.R1.Z(true);this.Aa8.Z(false);
this.R3.Z(false);this.R4.Z(false);this.R2.Z(false);this.R5.Z(true);this.QF.Z(true
);this.R6.Z(true);}break;case 1:{this.R1.Z(false);this.Aa8.Z(true);this.R3.Z(true
);this.R4.Z(true);this.R2.Z(true);this.R5.Z(false);this.QF.Z(false);this.R6.Z(false
);}break;default:A.ab5("%s%e",Alg,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.M3],this);},_Init:function(aArg){C.R7._Init.call(this,aArg);C.
R1._Init.call(this.R1={I:this},0);C.AMy._Init.call(this.Aa8={I:this},0);C.TH._Init.
call(this.TH={I:this},0);C.TG._Init.call(this.TG={I:this},0);C.R5._Init.call(this.
R5={I:this},0);C.QF._Init.call(this.QF={I:this},0);C.R6._Init.call(this.R6={I:this
},0);C.R3._Init.call(this.R3={I:this},0);C.R4._Init.call(this.R4={I:this},0);C.R2.
_Init.call(this.R2={I:this},0);this.__proto__=C.AMD;this.R1.H(BF);this.R1.Ai(true
);this.R1.Bh(false);this.Aa8.H(I2);this.Aa8.Ai(true);this.Aa8.Bh(false);this.TH.
H(Qe);this.TH.Ai(true);this.TH.Bh(true);this.TG.H(Aaq);this.TG.Ai(true);this.TG.
Bh(false);this.R5.H(Alj);this.R5.Ai(true);this.R5.Bh(true);this.QF.H(Aoq);this.QF.
Ai(true);this.QF.Bh(false);this.R6.H(Atc);this.R6.Ai(true);this.R6.Bh(true);this.
R3.H(U6);this.R3.Ai(true);this.R3.Bh(true);this.R4.H(AZs);this.R4.Ai(true);this.
R4.Bh(false);this.R2.H(AZt);this.R2.Ai(true);this.R2.Bh(true);this.J(this.R1,0);
this.J(this.Aa8,0);this.J(this.TH,0);this.J(this.TG,0);this.J(this.R5,0);this.J(
this.QF,0);this.J(this.R6,0);this.J(this.R3,0);this.J(this.R4,0);this.J(this.R2,
0);},_Done:function(){this.__proto__=C.R7;this.R1._Done();this.Aa8._Done();this.
TH._Done();this.TG._Done();this.R5._Done();this.QF._Done();this.R6._Done();this.
R3._Done();this.R4._Done();this.R2._Done();C.R7._Done.call(this);},_ReInit:function(
){C.R7._ReInit.call(this);this.R1._ReInit();this.Aa8._ReInit();this.TH._ReInit();
this.TG._ReInit();this.R5._ReInit();this.QF._ReInit();this.R6._ReInit();this.R3.
_ReInit();this.R4._ReInit();this.R2._ReInit();this.CQ();},_Mark:function(D){var B;
C.R7._Mark.call(this,D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMR={AkV:function(L$){if(!L$)return;var Fx=A._NewObject(
A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CY(HY);var Ade=A._NewObject(
A.Device.Int32FilterCriterion,0);Ade.Initialize(8,2,0,true);Fx.CY(Ade);L$.Bk(Fx);
},AEc:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var RS=A.
_GetAutoObject(A.Device.Device).Bt.B_();if(RS<2)return false;var BC6=A._GetAutoObject(
A.Device.Device).Bt.Hw(0,6);var BC7=A._GetAutoObject(A.Device.Device).Bt.Hw(RS-1
,6);var A2D=A._NewObject(A.Core.Bq,0);A2D.Initialize(BC6);var A4J=A._NewObject(A.
Core.Bq,0);A4J.Initialize(BC7);if((A2D.Ab8()!==A4J.Ab8())||(A2D.Year!==A4J.Year)
)return true;else return false;},_Init:function(aArg){C.Aa_._Init.call(this,aArg
);this.__proto__=C.AMR;this.ATB(C.AHu);this.ATC(C.ADG);this.ATr(C.QF);this.ArW(A.
aaR(A.acf.AV$));this.Dl(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa_._ReInit.call(
this);this.ArW(A.aaR(A.acf.AV$));this.Dl(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMM={AkV:function(L$){if(!L$)return;var Fx=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CY(HY);var ABs=A._NewObject(A.Device.Int32FilterCriterion
,0);ABs.Initialize(7,2,0,true);Fx.CY(ABs);L$.Bk(Fx);},AEc:function(){return A._GetAutoObject(
A.Device.Device).Bt.B_()>0;},_Init:function(aArg){C.Aa_._Init.call(this,aArg);this.
__proto__=C.AMM;this.ATB(C.AVv);this.ATC(C.APS);this.ATr(C.TH);this.ArW(A.aaR(A.
acf.A8i));this.Dl(A.aaR(A.acf.ArC));},_ReInit:function(){C.Aa_._ReInit.call(this
);this.ArW(A.aaR(A.acf.A8i));this.Dl(A.aaR(A.acf.ArC));},_className:"Application::AnimalTemperatures"
};C.AUA={VM:null,VN:null,X8:null,AgL:null,KF:null,AP:null,A_:null,Ec:null,LA:null
,AnZ:null,KZ:null,K0:null,ZX:null,ZY:null,Init:function(aArg){},Bl:function(aSize
){C.A$.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KF.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A_.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VM.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ec.H([this.
VM.M[2]-1,0,this.VM.M[2]+1,aSize[1]]);this.VN.H([this.VM.M[2],0,this.VM.M[2]+22,
aSize[1]]);this.LA.H([this.VN.M[2]-1,0,this.VN.M[2]+1,aSize[1]]);this.X8.H([this.
VN.M[2],0,this.VN.M[2]+22,aSize[1]]);this.AnZ.H([this.X8.M[2]-1,0,this.X8.M[2]+1
,aSize[1]]);this.AgL.H([this.X8.M[2],0,aSize[0],aSize[1]]);this.KZ.H(this.VM.M);
this.K0.H(this.VN.M);this.ZX.H(this.X8.M);this.ZY.H(this.AgL.M);},Aj:function(Ae
){C.A$.Aj.call(this,Ae);this.KF.L(this.V.AR);},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var A1T=this.AX.Jb(Ad,3);var A2z=
this.AX.Jb(Ad,2);var A2y=this.AX.Jb(Ad,5);var A4x=this.AX.Jb(Ad,4);this.T(A._GetAutoObject(
A.acj.KS).AC8(AlH));this.KF.R(A._GetAutoObject(A.acj.KS).A6$(AlH));this.VM.L(A._GetAutoObject(
A.acj.Assessment).Qt(A1T));this.VN.L(A._GetAutoObject(A.acj.Assessment).Qt(A2z));
this.X8.L(A._GetAutoObject(A.acj.Assessment).Qt(A2y));this.AgL.L(A._GetAutoObject(
A.acj.Assessment).Qt(A4x));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XI(A1T));
this.K0.L(A._GetAutoObject(A.acj.Assessment).XI(A2z));this.ZX.L(A._GetAutoObject(
A.acj.Assessment).XI(A2y));this.ZY.L(A._GetAutoObject(A.acj.Assessment).XI(A4x));
this.KZ.Z(A1T===5);this.K0.Z(A2z===5);this.ZX.Z(A2y===5);this.ZY.Z(A4x===5);this.
Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(this.
VM={I:this},0);A.acg.AK._Init.call(this.VN={I:this},0);A.acg.AK._Init.call(this.
X8={I:this},0);A.acg.AK._Init.call(this.AgL={I:this},0);A.acg.Text._Init.call(this.
KF={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.
A_={I:this},0);A.acg.AK._Init.call(this.Ec={I:this},0);A.acg.AK._Init.call(this.
LA={I:this},0);A.acg.AK._Init.call(this.AnZ={I:this},0);A.acg.Text._Init.call(this.
KZ={I:this},0);A.acg.Text._Init.call(this.K0={I:this},0);A.acg.Text._Init.call(this.
ZX={I:this},0);A.acg.Text._Init.call(this.ZY={I:this},0);this.__proto__=C.AUA;this.
V.H(Pb);this.VM.H(AZu);this.VN.H(AZv);this.X8.H(AZw);this.AgL.H(AZx);this.KF.R(Rr
);this.KF.L(A.jb.Text);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ec.L(A.jb.Bb);
this.LA.L(A.jb.Bb);this.AnZ.L(A.jb.Bb);this.KZ.H(AZy);this.KZ.R(Rt);this.K0.H(AZz
);this.K0.R(Rt);this.ZX.H(AZA);this.ZX.R(Rt);this.ZY.H(AZB);this.ZY.R(Rt);this.J(
this.VM,0);this.J(this.VN,0);this.J(this.X8,0);this.J(this.AgL,0);this.J(this.KF
,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ec,0);this.J(this.LA,0);this.
J(this.AnZ,0);this.J(this.KZ,0);this.J(this.K0,0);this.J(this.ZX,0);this.J(this.
ZY,0);this.KF.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af
));this.ZX.S(A.aaL(A.fl.Af));this.ZY.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.VM._Done();this.VN._Done();this.X8._Done();this.AgL._Done(
);this.KF._Done();this.AP._Done();this.A_._Done();this.Ec._Done();this.LA._Done(
);this.AnZ._Done();this.KZ._Done();this.K0._Done();this.ZX._Done();this.ZY._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.VM._ReInit(
);this.VN._ReInit();this.X8._ReInit();this.AgL._ReInit();this.KF._ReInit();this.
AP._ReInit();this.A_._ReInit();this.Ec._ReInit();this.LA._ReInit();this.AnZ._ReInit(
);this.KZ._ReInit();this.K0._ReInit();this.ZX._ReInit();this.ZY._ReInit();this.KF.
S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.ZX.S(
A.aaL(A.fl.Af));this.ZY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VN)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APQ={Gr:null,Y8:null,Y4:null,Y5:null,Y6:null,Y7:
null,_Init:function(aArg){C.EC._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gr={I:this},0);A.acg.Text._Init.call(this.Y8={I:this},0);A.acg.Text._Init.call(this.
Y4={I:this},0);A.acg.Text._Init.call(this.Y5={I:this},0);A.acg.Text._Init.call(this.
Y6={I:this},0);A.acg.Text._Init.call(this.Y7={I:this},0);this.__proto__=C.APQ;this.
Background.L(A.jb.Text);this.Gr.H(AIE);this.Gr.A4(0x11);this.Gr.R(A.aaR(A.acf.Date
));this.Gr.L(A.jb.Bm);this.Y8.H(AIw);this.Y8.A4(0x12);this.Y8.R(A.aaR(A.acf.Bq));
this.Y8.L(A.jb.Bm);this.Y4.H(AZC);this.Y4.A4(0x12);this.Y4.R(A.aaR(A.acf.AUC));this.
Y4.L(A.jb.Bm);this.Y5.H(AZD);this.Y5.A4(0x12);this.Y5.R(A.aaR(A.acf.AUD));this.Y5.
L(A.jb.Bm);this.Y6.H(AZE);this.Y6.A4(0x12);this.Y6.R(A.aaR(A.acf.AOG));this.Y6.L(
A.jb.Bm);this.Y7.H(AZF);this.Y7.A4(0x12);this.Y7.R(A.aaR(A.acf.ANG));this.Y7.L(A.
jb.Bm);this.J(this.Gr,0);this.J(this.Y8,0);this.J(this.Y4,0);this.J(this.Y5,0);this.
J(this.Y6,0);this.J(this.Y7,0);this.Gr.S(A.aaL(A.fl.Af));this.Y8.S(A.aaL(A.fl.Af
));this.Y4.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af));
this.Y7.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EC;this.Gr._Done();
this.Y8._Done();this.Y4._Done();this.Y5._Done();this.Y6._Done();this.Y7._Done();
C.EC._Done.call(this);},_ReInit:function(){C.EC._ReInit.call(this);this.Gr._ReInit(
);this.Y8._ReInit();this.Y4._ReInit();this.Y5._ReInit();this.Y6._ReInit();this.Y7.
_ReInit();this.Gr.R(A.aaR(A.acf.Date));this.Y8.R(A.aaR(A.acf.Bq));this.Y4.R(A.aaR(
A.acf.AUC));this.Y5.R(A.aaR(A.acf.AUD));this.Y6.R(A.aaR(A.acf.AOG));this.Y7.R(A.
aaR(A.acf.ANG));this.Gr.S(A.aaL(A.fl.Af));this.Y8.S(A.aaL(A.fl.Af));this.Y4.S(A.
aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af));this.Y7.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.Gr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMG={AkV:function(L$){if(!L$)return;
var Fx=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CY(HY);var
AA$=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA$.Initialize(3,5,0,true
);Fx.CY(AA$);L$.Bk(Fx);},AEc:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B_()>0;},_Init:function(
aArg){C.Aa_._Init.call(this,aArg);this.__proto__=C.AMG;this.ATB(C.AUA);this.ATC(
C.APQ);this.ATr(C.TG);this.ArW(A.aaR(A.acf.AxA));this.Dl(A.aaR(A.acf.Anr));},_ReInit:
function(){C.Aa_._ReInit.call(this);this.ArW(A.aaR(A.acf.AxA));this.Dl(A.aaR(A.acf.
Anr));},_className:"Application::AnimalRatings"};C.IL={B9:null,Y:null,V:null,UC:
5,T:function(E){C.I_.T.call(this,E);this.V.R(E);},Dg:function(E){C.I_.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B9===E)return;this.B9=E;this.V.S(this.B9
);},Au1:function(G){var B;var NN=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NN)return;
if(((B=NN.Dd(0x1))[2]-B[0])>((B=NN.M)[2]-B[0]))this.S(A.aaL(A.fl.HK));},KA:function(
E){if(this.UC===E)return;this.UC=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AA5:function(G){A.pe([this,this.Au1],this);},_Init:function(aArg){C.I_._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IL;this.Y.A1(0x3F);this.Y.H(AIG);this.Y.A$b(5);this.
Y.J3(3);this.V.A1(0x34);this.V.H(Xq);this.V.Jg(true);this.V.A4(0x11);this.V.L(A.
jb.Text);this.V.Ai(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Eo=[this,this.
AA5];this.V.S(A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.I_;this.Y._Done(
);this.V._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));},_Mark:function(D){
var B;C.I_._Mark.call(this,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.R1={AfX:0,Aj:function(Ae){C.Fz.
Aj.call(this,Ae);this.T(A.aaR(A.acf.RX));if(this.AfX>=0)this.KC((this.AfX.toFixed(
)+CJ)+A.aaR(A.acf.Kq));else this.KC(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fz.
Ci.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfX=-1;
else this.AfX=A._GetAutoObject(A.Device.Helper).W.RX();this.Am();},_Init:function(
aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.R1;},_className:"Application::AnimalInfoItemAge"
};C.R5={A5d:0,Aj:function(Ae){C.Fz.Aj.call(this,Ae);this.T(A.aaR(A.acf.AfB));if(
this.A5d>0)this.KC((A._GetAutoObject(A.Device.Converter).Ak_(this.A5d)+CJ)+A._GetAutoObject(
A.acj.DV).Af_());else this.KC(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fz.Ci.call(
this,G);this.A5d=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.R5;},_className:
"Application::AnimalInfoItemWeight"};C.TH={Y:null,Ek:null,Ez:null,Fc:null,P2:null
,Fb:null,P3:null,Ajj:0,Po:0,CQ:function(){this.Am();},Aj:function(Ae){C.JU.Aj.call(
this,Ae);this.T(A.aaR(A.acf.BiF));this.Fc.R(this.Ajj.toFixed());this.Fb.R(this.Po.
toFixed());if(!!this.Ajj||!!this.Po)this.P3.R(AZG+(this.Ajj+this.Po).toFixed());
else this.P3.R(A.aaR(A.acf.ASx));},Ci:function(G){C.JU.Ci.call(this,G);var Ak2;Ak2=
A._GetAutoObject(A.Device.Helper).BjF(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajj=Ak2.Get(2);this.Po=Ak2.Get(1);this.Am();},Dg:
function(E){C.JU.Dg.call(this,E);this.P2.L(E);this.P3.L(E);},AsU:function(G){if(
!!this.Ajj||!!this.Po){this.Fc.Z(true);this.P2.Z(true);this.Fb.Z(true);}else{this.
Fc.Z(false);this.P2.Z(false);this.Fb.Z(false);}this.Ek.H(this.Fc.M);this.Ek.Z(this.
Fc.Fp());this.Ez.H(this.Fb.M);this.Ez.Z(this.Fb.Fp());},Au1:function(G){var B;var
NN=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NN)return;if(((B=NN.Dd(0x1))[2]-B[0])>((
B=NN.M)[2]-B[0])){this.Fb.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.Fc.S(
A.aaL(A.fl.Ak));this.P3.S(A.aaL(A.fl.Ak));}},AA5:function(G){A.pe([this,this.Au1
],this);},_Init:function(aArg){C.JU._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Ek={I:this},0);A.acg.AK._Init.call(this.Ez={
I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
P2={I:this},0);A.acg.Text._Init.call(this.Fb={I:this},0);A.acg.Text._Init.call(this.
P3={I:this},0);this.__proto__=C.TH;this.Y.H(Atj);this.Y.Boj(0);this.Y.J3(3);this.
Ek.H(AZH);this.Ek.L(A.jb.Ia);this.Ez.H(AyI);this.Ez.L(A.jb.Gn);this.Fc.A1(0x34);
this.Fc.H(Xq);this.Fc.Ho(2);this.Fc.Jg(true);this.Fc.R(U8);this.Fc.L(A.jb.Text);
this.Fc.Ai(true);this.P2.A1(0x34);this.P2.H(Xq);this.P2.Jg(true);this.P2.R(AIn);
this.P2.L(A.jb.Text);this.P2.Ai(true);this.Fb.A1(0x34);this.Fb.H(Xq);this.Fb.Ho(
2);this.Fb.Jg(true);this.Fb.R(U8);this.Fb.L(A.jb.Bm);this.Fb.Ai(true);this.P3.A1(
0x34);this.P3.H(Xq);this.P3.Jg(true);this.P3.R(Rr);this.P3.L(A.jb.Text);this.P3.
Ai(true);this.J(this.Y,0);this.J(this.Ek,0);this.J(this.Ez,0);this.J(this.Fc,0);
this.J(this.P2,0);this.J(this.Fb,0);this.J(this.P3,0);this.Y.Eo=[this,this.AA5];
this.Fc.Q9([this,this.AsU]);this.Fc.S(A.aaL(A.fl.Af));this.P2.S(A.aaL(A.fl.Af));
this.Fb.Q9([this,this.AsU]);this.Fb.S(A.aaL(A.fl.Af));this.P3.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JU;this.Y._Done();this.Ek._Done();this.Ez._Done(
);this.Fc._Done();this.P2._Done();this.Fb._Done();this.P3._Done();C.JU._Done.call(
this);},_ReInit:function(){C.JU._ReInit.call(this);this.Y._ReInit();this.Ek._ReInit(
);this.Ez._ReInit();this.Fc._ReInit();this.P2._ReInit();this.Fb._ReInit();this.P3.
_ReInit();this.Fc.S(A.aaL(A.fl.Af));this.P2.S(A.aaL(A.fl.Af));this.Fb.S(A.aaL(A.
fl.Af));this.P3.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.JU._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QF={F$:0,Ig:0
,A23:false,Aj:function(Ae){C.Fz.Aj.call(this,Ae);this.T(AZI+A.aaR(A.acf.AHp));if(
this.A23){this.KC((A._GetAutoObject(A.Device.Converter).Th(this.F$,2,true)+CJ)+A.
_GetAutoObject(A.acj.DV).AaF());this.Background.L(A._GetAutoObject(A.acj.DV).Az2(
this.F$,this.Ig));this.Dg(A._GetAutoObject(A.acj.DV).Az4(this.F$,this.Ig));}else{
this.KC(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CL);this.Dg(A.jb.Text);}},Ci:
function(G){C.Fz.Ci.call(this,G);var LN=A._GetAutoObject(A.Device.Helper).Mg(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LN){this.A23=true;this.F$=A._GetAutoObject(A.acj.DV).AlE(LN,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A23=false;this.F$=0;}this.Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.QF;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TG={Y:null,Ga:null,Ek:
null,Ez:null,MT:null,Fc:null,Fb:null,O6:null,AaG:0,Ajj:0,Po:0,CQ:function(){this.
Am();},Aj:function(Ae){C.JU.Aj.call(this,Ae);this.T(A.aaR(A.acf.AxA));this.MT.R(
this.AaG.toFixed());this.Fc.R(this.Ajj.toFixed());this.Fb.R(this.Po.toFixed());}
,Ci:function(G){C.JU.Ci.call(this,G);var Ak2;Ak2=A._GetAutoObject(A.Device.Helper
).A7f(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaG=Ak2.Get(3);this.Ajj=Ak2.Get(2);this.Po=Ak2.Get(1);this.Am();},AsU:
function(G){if((!!this.AaG||!!this.Ajj)||!!this.Po){this.MT.Z(true);this.Fc.Z(true
);this.Fb.Z(true);this.O6.Z(false);}else{this.MT.Z(false);this.Fc.Z(false);this.
Fb.Z(false);this.O6.Z(true);}this.Ga.H(this.MT.M);this.Ga.Z(this.MT.Fp());this.Ek.
H(this.Fc.M);this.Ek.Z(this.Fc.Fp());this.Ez.H(this.Fb.M);this.Ez.Z(this.Fb.Fp()
);},Au1:function(G){var B;var NN=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NN)return;
if(((B=NN.Dd(0x1))[2]-B[0])>((B=NN.M)[2]-B[0])){this.Fb.S(A.aaL(A.fl.Ak));this.Fc.
S(A.aaL(A.fl.Ak));this.MT.S(A.aaL(A.fl.Ak));}},AA5:function(G){A.pe([this,this.Au1
],this);},_Init:function(aArg){C.JU._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AK._Init.call(this.Ga={I:this},0);A.acg.AK._Init.call(this.Ek={
I:this},0);A.acg.AK._Init.call(this.Ez={I:this},0);A.acg.Text._Init.call(this.MT={
I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
Fb={I:this},0);A.acg.Text._Init.call(this.O6={I:this},0);this.__proto__=C.TG;this.
Y.A1(0x3F);this.Y.H(Atj);this.Y.A$b(5);this.Y.J3(3);this.Ga.H(AZJ);this.Ga.L(A.jb.
E2);this.Ek.H(AZK);this.Ek.L(A.jb.Ia);this.Ez.H(AZL);this.Ez.L(A.jb.Gn);this.MT.
A1(0x3C);this.MT.H(Xq);this.MT.Ho(2);this.MT.Jg(true);this.MT.R(U8);this.MT.L(A.
jb.Text);this.MT.Ai(true);this.Fc.A1(0x3C);this.Fc.H(Xq);this.Fc.Ho(2);this.Fc.Jg(
true);this.Fc.R(U8);this.Fc.L(A.jb.Text);this.Fc.Ai(true);this.Fb.A1(0x3C);this.
Fb.H(Xq);this.Fb.Ho(2);this.Fb.Jg(true);this.Fb.R(U8);this.Fb.L(A.jb.Bm);this.Fb.
Ai(true);this.O6.A1(0x34);this.O6.H(Xq);this.O6.Jg(true);this.O6.A4(0x11);this.O6.
R(A.aaR(A.acf.ASx));this.O6.L(A.jb.Text);this.O6.Ai(true);this.O6.Z(false);this.
J(this.Y,0);this.J(this.Ga,0);this.J(this.Ek,0);this.J(this.Ez,0);this.J(this.MT
,0);this.J(this.Fc,0);this.J(this.Fb,0);this.J(this.O6,0);this.Y.Eo=[this,this.AA5
];this.MT.Q9([this,this.AsU]);this.MT.S(A.aaL(A.fl.Af));this.Fc.Q9([this,this.AsU
]);this.Fc.S(A.aaL(A.fl.Af));this.Fb.Q9([this,this.AsU]);this.Fb.S(A.aaL(A.fl.Af
));this.O6.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JU;this.Y._Done(
);this.Ga._Done();this.Ek._Done();this.Ez._Done();this.MT._Done();this.Fc._Done(
);this.Fb._Done();this.O6._Done();C.JU._Done.call(this);},_ReInit:function(){C.JU.
_ReInit.call(this);this.Y._ReInit();this.Ga._ReInit();this.Ek._ReInit();this.Ez.
_ReInit();this.MT._ReInit();this.Fc._ReInit();this.Fb._ReInit();this.O6._ReInit(
);this.O6.R(A.aaR(A.acf.ASx));this.MT.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.fl.Af)
);this.Fb.S(A.aaL(A.fl.Af));this.O6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(
D){var B;C.JU._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMo={_Init:function(aArg){C.Aqj._Init.call(
this,aArg);this.__proto__=C.AMo;this.A5o=1;this.Rm.Cm(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqj._ReInit.call(this);this.Rm.Cm(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARj={OR:null,IW:null,H9:null,IU:null,Gy:null,Al7:function(G){A.pe([this,this.
BBa],this);},BBa:function(G){A._GetAutoObject(C.A5).Cc(3);},_Init:function(aArg){
C.Ch._Init.call(this,aArg);C.OR._Init.call(this.OR={I:this},0);C.BW._Init.call(this.
IW={I:this},0);C.S0._Init.call(this.H9={I:this},0);C.AGS._Init.call(this.IU={I:this
},0);C.Rd._Init.call(this.Gy={I:this},0);this.__proto__=C.ARj;var B;this.Jh(A.aaR(
A.acf.Bad));this.IW.H(Ah3);this.IW.Ai(true);this.IW.T(A.aaR(A.acf.Language));this.
IW.A_V(100);this.H9.H(U7);this.H9.Ai(true);this.H9.T(A.aaR(A.acf.Date));this.H9.
Bh(true);this.IU.H(Aar);this.IU.Ai(true);this.IU.T(A.aaR(A.acf.Bq));this.Gy.H(Ah2
);this.Gy.Ai(true);this.Gy.Z(true);this.Gy.T(A.aaR(A.acf.AGo));this.Gy.Bh(true);
this.Gy.Ar7(false);this.Gy.A_3(true);this.Iu(this.Y,-1);this.Iu(this.Ay,-1);this.
J(this.IW,0);this.J(this.H9,0);this.J(this.IU,0);this.J(this.Gy,0);this.IW.ZC(A.
aaL(A.fl.H5));this.IW.ZD(A.aaL(A.fl.H5));this.IW.Au([B=this.OR,B.Cb,B.Cd]);this.
IW.CH(this.OR);this.H9.Ab9([B=this.H9,B.F_]);this.H9.FT([this,this.D2,this.Gu]);
this.H9.AkA(A.aaL(A.ach.Edit));this.H9.Acd([B=A._GetAutoObject(A.Device.Helper),
B.U9,B.Va]);this.IU.Ab9([B=this.IU,B.F_]);this.IU.FT([this,this.D2,this.Gu]);this.
IU.AkA(A.aaL(A.ach.Edit));this.IU.Acd([B=A._GetAutoObject(A.Device.Helper),B.U9,
B.Va]);this.Gy.Ab9([B=this.Gy,B.F_]);this.Gy.FT([this,this.D2,this.Gu]);this.Gy.
AkA(A.aaL(A.ach.Edit));this.Gy.Au([B=A._GetAutoObject(A.Device.Device),B.ASZ,B.A0Q
]);},_Done:function(){this.__proto__=C.Ch;this.OR._Done();this.IW._Done();this.H9.
_Done();this.IU._Done();this.Gy._Done();C.Ch._Done.call(this);},_ReInit:function(
){C.Ch._ReInit.call(this);this.OR._ReInit();this.IW._ReInit();this.H9._ReInit();
this.IU._ReInit();this.Gy._ReInit();this.Jh(A.aaR(A.acf.Bad));this.IW.T(A.aaR(A.
acf.Language));this.H9.T(A.aaR(A.acf.Date));this.IU.T(A.aaR(A.acf.Bq));this.Gy.T(
A.aaR(A.acf.AGo));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.OR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa_={Bf:null,FD:null,Am5:null,AmO:null,Sm:null,A7B:A.jV,KT:A.jV,ARO:null,ARP:
null,ADz:null,CC:function(G){var B;C.Ea.CC.call(this,G);A.zX([this,this.A3B],[B=
A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId],0);this.A3B(this);},E4:function(
G){var B;A.z$([this,this.A3B],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId
],0);C.Ea.E4.call(this,G);},ZE:function(E){C.Ea.ZE.call(this,E);if(A.aa0(this.AQ
,E))return;if(!!this.Bf)this.Bf.ZE(E);},ATB:function(E){if(this.ARO===E)return;this.
ARO=E;if(!!this.Bf)this.Bf.N_(E);},ATC:function(E){if(this.ARP===E)return;this.ARP=
E;this.BpP(this);},ATr:function(E){if(this.ADz===E)return;this.ADz=E;A.pe([this,
this.BpO],this);},ArW:function(E){if(this.A7B===E)return;this.A7B=E;this.Sm.R(E);
},Dl:function(E){if(this.KT===E)return;this.KT=E;if(!!this.Bf)this.Bf.Dl(E);},AkV:
function(L$){A.ab5("%s",AZM);},AEc:function(){A.ab5("%s",Alh);return false;},AxI:
function(G){if(!!this.Bf)this.HQ(this.Bf);this.Bf=A._NewObject(C.Gj,0);this.Bf.H(
Atk);this.Bf.ZA(A._GetAutoObject(A.Device.Device).Bt);this.Bf.Dl(this.KT);this.Bf.
N_(this.ARO);this.Bf.ZE(this.AQ);this.J(this.Bf,0);this.Ba(this.Bf);},BpP:function(
G){var B;if(!!this.FD)this.HQ(this.FD);this.FD=(C.EC.isPrototypeOf(B=A._NewObject(
this.ARP,0))?B:null);this.FD.H(I2);this.J(this.FD,0);},BpO:function(G){var B;if(
!!this.Am5)this.HQ(this.Am5);if(!!this.ADz&&this.AEc()){this.Am5=(C.I_.isPrototypeOf(
B=A._NewObject(this.ADz,0))?B:null);this.Am5.H(BF);this.Am5.Bh(false);this.J(this.
Am5,0);this.Sm.Z(false);}else this.Sm.Z(true);},A3B:function(G){this.AkV(A._GetAutoObject(
A.Device.Device).Bt);this.AxI(this);},_Init:function(aArg){C.Ea._Init.call(this,
aArg);A.acg.AK._Init.call(this.AmO={I:this},0);C.CG._Init.call(this.Sm={I:this},
0);this.__proto__=C.Aa_;this.AmO.H(BF);this.AmO.L(A.jb.CL);this.Sm.H(AHV);this.Sm.
A4(0x11);this.Sm.L(A.jb.Text);this.J(this.AmO,0);this.J(this.Sm,0);this.Sm.S(A.aaL(
A.fl.Kt));this.Sm.AY(A.aaL(A.fl.HK));},_Done:function(){this.__proto__=C.Ea;this.
AmO._Done();this.Sm._Done();C.Ea._Done.call(this);},_ReInit:function(){C.Ea._ReInit.
call(this);this.AmO._ReInit();this.Sm._ReInit();this.Sm.S(A.aaL(A.fl.Kt));this.Sm.
AY(A.aaL(A.fl.HK));},_Mark:function(D){var B;C.Ea._Mark.call(this,D);if((B=this.
Bf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Ko={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bdc],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ],0);A.pe([this,this.Bdc],this
);},Dv:function(){return 5;},Ge:function(aIndex){return this.AnimalListContentToString.
BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zy(E);},Bdc:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Ko;this.BJ.Set(0,0);this.BJ.Set(1,14);this.BJ.Set(2,
1);this.BJ.Set(3,2);this.BJ.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AnimalListContentToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARU={IW:null
,Zh:null,Zq:null,Zn:null,Zr:null,Zi:null,Zl:null,Zo:null,Zp:null,Zk:null,OR:null
,_Init:function(aArg){C.Ch._Init.call(this,aArg);C.BW._Init.call(this.IW={I:this
},0);C.Nr._Init.call(this.Zh={I:this},0);C.Nr._Init.call(this.Zq={I:this},0);C.Nr.
_Init.call(this.Zn={I:this},0);C.Nr._Init.call(this.Zr={I:this},0);C.Nr._Init.call(
this.Zi={I:this},0);C.Nr._Init.call(this.Zl={I:this},0);C.Nr._Init.call(this.Zo={
I:this},0);C.Nr._Init.call(this.Zp={I:this},0);C.Nr._Init.call(this.Zk={I:this},
0);C.OR._Init.call(this.OR={I:this},0);this.__proto__=C.ARU;var B;this.Jh(A.aaR(
A.acf.Settings));this.IW.H(Ah3);this.IW.Ai(true);this.IW.T(A.aaR(A.acf.Language)
);this.IW.A_V(100);this.Zh.H(Atl);this.Zh.Ai(true);this.Zh.T(A.aaR(A.acf.ACK));this.
Zh.Nu(16);this.Zq.H(Atm);this.Zq.Ai(true);this.Zq.T(A.aaR(A.acf.AHk));this.Zq.Nu(
22);this.Zn.H(Atn);this.Zn.Ai(true);this.Zn.T(A.aaR(A.acf.Temperature));this.Zn.
Nu(17);this.Zr.H(AyK);this.Zr.Ai(true);this.Zr.T(A.aaR(A.acf.ACH));this.Zr.Nu(42
);this.Zi.H(Aoy);this.Zi.Ai(true);this.Zi.T(A.aaR(A.acf.Device));this.Zi.Nu(18);
this.Zl.H(Aoy);this.Zl.Ai(true);this.Zl.T(A.aaR(A.acf.Ass));this.Zl.Nu(19);this.
Zo.H(AZN);this.Zo.Ai(true);this.Zo.T(A.aaR(A.acf.LinkTransponder));this.Zo.Nu(89
);this.Zp.H(AZO);this.Zp.Ai(true);this.Zp.T(A.aaR(A.acf.UnlinkTransponder));this.
Zp.Nu(95);this.Zk.H(AyC);this.Zk.Ai(true);this.Zk.T(A.aaR(A.acf.ACZ));this.Zk.Nu(
76);this.J(this.IW,0);this.J(this.Zh,0);this.J(this.Zq,0);this.J(this.Zn,0);this.
J(this.Zr,0);this.J(this.Zi,0);this.J(this.Zl,0);this.J(this.Zo,0);this.J(this.Zp
,0);this.J(this.Zk,0);this.IW.ZC(A.aaL(A.fl.H5));this.IW.ZD(A.aaL(A.fl.H5));this.
IW.Au([B=this.OR,B.Cb,B.Cd]);this.IW.CH(this.OR);this.Zh.AQ=[B=this.Zh,B.Ny];this.
Zq.AQ=[B=this.Zq,B.Ny];this.Zn.AQ=[B=this.Zn,B.Ny];this.Zr.AQ=[B=this.Zr,B.Ny];this.
Zi.AQ=[B=this.Zi,B.Ny];this.Zl.AQ=[B=this.Zl,B.Ny];this.Zo.AQ=[B=this.Zo,B.Ny];this.
Zp.AQ=[B=this.Zp,B.Ny];this.Zk.AQ=[B=this.Zk,B.Ny];},_Done:function(){this.__proto__=
C.Ch;this.IW._Done();this.Zh._Done();this.Zq._Done();this.Zn._Done();this.Zr._Done(
);this.Zi._Done();this.Zl._Done();this.Zo._Done();this.Zp._Done();this.Zk._Done(
);this.OR._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.IW._ReInit();this.Zh._ReInit();this.Zq._ReInit();this.Zn._ReInit();this.Zr.
_ReInit();this.Zi._ReInit();this.Zl._ReInit();this.Zo._ReInit();this.Zp._ReInit(
);this.Zk._ReInit();this.OR._ReInit();this.Jh(A.aaR(A.acf.Settings));this.IW.T(A.
aaR(A.acf.Language));this.Zh.T(A.aaR(A.acf.ACK));this.Zq.T(A.aaR(A.acf.AHk));this.
Zn.T(A.aaR(A.acf.Temperature));this.Zr.T(A.aaR(A.acf.ACH));this.Zi.T(A.aaR(A.acf.
Device));this.Zl.T(A.aaR(A.acf.Ass));this.Zo.T(A.aaR(A.acf.LinkTransponder));this.
Zp.T(A.aaR(A.acf.UnlinkTransponder));this.Zk.T(A.aaR(A.acf.ACZ));},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMB={EU:null,Init:function(aArg){this.EU.Ahy(A._NewObject(A.Core.Bq,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.Ag2)));},AUH:function(
){this.EU.Ae6(this.AO4());this.AaI=!this.EU.E0.A0;},AiY:function(G){this.EU.Ahy(
A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(
A.aaR(A.acf.Ag2)));this.AUH();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8I));else this.Dl(A.aaR(A.acf.ArC));this.Am();},AO4:function(
){var BC=A._NewObject(C.Aqz,0);var Qq=A._GetAutoObject(A.Device.Helper).AOl(A._GetAutoObject(
A.Device.Helper).Dr());var Dy=A._GetAutoObject(A.Device.Helper).Aqv(Qq-(86400*this.
MJ));BC.AnG(AZP);BC.Q7([].concat(0,BC.Go.slice(1,4)));BC.Q7(A.abN(BC.Go,(Qq-Dy)|
0));BC.Q7(A.abP(BC.Go,3400));BC.Q7([].concat(BC.Go.slice(0,3),4200));var Gl=A._GetAutoObject(
A.Device.Device).Bt.B_();BC.Aw0(Gl);BC.Yr();if(Gl>0){var O=0;while(O<Gl){var ApZ=
A._GetAutoObject(A.Device.Device).Bt.CE(O,7);var Ap0=A._GetAutoObject(A.Device.Device
).Bt.Hw(O,6)-Dy;if(ApZ>0)BC.Aqk(Ap0,ApZ);O=O+1;}}return BC;},_Init:function(aArg
){C.Le._Init.call(this,aArg);C.Aq3._Init.call(this.EU={I:this},0);this.__proto__=
C.AMB;this.EU.H(AZQ);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFr(C.AG6);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);C.Le._Done.call(this);},_ReInit:function(){C.Le._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMC={Aac:null,O9:null,AgX:null,AaI:false,Init:function(aArg){this.Aac.Ahy(A.
_NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(
A.aaR(A.acf.Ag2)));},Aj:function(Ae){C.Ea.Aj.call(this,Ae);this.AgX.Z(this.AaI);
},CC:function(G){var B;C.Ea.CC.call(this,G);A.zX([this,this.AiY],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.zV([this,this.AiY],A._GetAutoObject(A.Device.Device
).Bt,0);A.zX([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId
],0);A.pe([this,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AiY],[B=A.
_GetAutoObject(A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AiY],A._GetAutoObject(
A.Device.Device).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).
W,B.Ur,B.OnSetId],0);C.Ea.E4.call(this,G);},Amj:function(G){var Fx=A._NewObject(
A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CY(HY);A._GetAutoObject(A.Device.
Device).Bt.Bk(Fx);},AiY:function(G){this.Aac.Ahy(A._NewObject(A.Core.Bq,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.Ag2)));this.Bo_();this.
Am();},Bo_:function(){var B;var Gl=A._GetAutoObject(A.Device.Device).Bt.B_();var
Lc=A._NewObject(C.Aqz,0);var Vz=A._NewObject(C.Aqz,0);var Qq=A._GetAutoObject(A.
Device.Helper).AOl(A._GetAutoObject(A.Device.Helper).Dr());var Dy=A._GetAutoObject(
A.Device.Helper).Aqv(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Lc.Q7([].concat(
0,Lc.Go.slice(1,4)));Lc.Q7(A.abN(Lc.Go,(Qq-Dy)|0));Lc.Q7(A.abP(Lc.Go,0));Lc.Q7([
].concat(Lc.Go.slice(0,3),150000));Lc.AnG(AZR);Vz.Q7([].concat(0,Vz.Go.slice(1,4
)));Vz.Q7(A.abN(Vz.Go,(Qq-Dy)|0));Vz.Q7(A.abP(Vz.Go,0));Vz.Q7([].concat(Vz.Go.slice(
0,3),1500));Vz.AnG(AZS);Lc.Aw0(Gl);Lc.Yr();Vz.Aw0(Gl);Vz.Yr();if(Gl>0){var O=0;var
AaK=0;var AAs=0;var AKi=0;var A2E=0;var BdS=true;while(O<Gl){var Amd=A._GetAutoObject(
A.Device.Device).Bt.CE(O,8);var AaY=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dy;if(Amd>0){Lc.Aqk(AaY,Amd);if(!A2E){A2E=AaY;AKi=Amd;}if(AAs>0){var LN=A._GetAutoObject(
A.Device.Helper).Mg(AAs,AaY);if(!!LN){var F$=A._GetAutoObject(A.acj.DV).AlE(LN,AaK
,Amd);if(BdS){Vz.Aqk(AAs,F$);BdS=false;}Vz.Aqk(AaY,F$);}}AaK=Amd;AAs=AaY;}O=O+1;
}var AdT=A.acf.BhI;var F$=A._GetAutoObject(A.Device.Helper).BjH(A2E,AAs,AKi,AaK);
AdT=A._GetAutoObject(A.Device.Helper).MR(AdT,Pc,F$.toFixed());AdT=A._GetAutoObject(
A.Device.Helper).MR(AdT,Ayp,A._GetAutoObject(A.acj.DV).AaF());this.O9.Io.R(AdT);
}this.AaI=!Lc.A0;if(this.AaI)this.O9.Io.R(A.jV);(C.O9.isPrototypeOf(B=this.O9.EU
)?B:null).AnB([B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.ED]);this.Aac.Ae6(Lc
);this.O9.Ae6(Vz);},_Init:function(aArg){C.Ea._Init.call(this,aArg);C.Aq3._Init.
call(this.Aac={I:this},0);C.Aq3._Init.call(this.O9={I:this},0);C.AkT._Init.call(
this.AgX={I:this},0);this.__proto__=C.AMC;this.Aac.H(AZT);this.Aac.T(A.aaR(A.acf.
AfB));this.Aac.AFr(C.AM9);this.O9.H(AZU);this.O9.T(A.aaR(A.acf.AHp));this.O9.AFr(
C.O9);this.AgX.H(U5);this.AgX.R(A.aaR(A.acf.Akm));this.J(this.Aac,0);this.J(this.
O9,0);this.J(this.AgX,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ea;
this.Aac._Done();this.O9._Done();this.AgX._Done();C.Ea._Done.call(this);},_ReInit:
function(){C.Ea._ReInit.call(this);this.Aac._ReInit();this.O9._ReInit();this.AgX.
_ReInit();this.Aac.T(A.aaR(A.acf.AfB));this.O9.T(A.aaR(A.acf.AHp));this.AgX.R(A.
aaR(A.acf.Akm));},_Mark:function(D){var B;C.Ea._Mark.call(this,D);if((B=this.Aac
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"
};C.AMz={Avo:null,Avn:null,AxC:null,AuW:null,VL:null,Abx:null,Abw:null,Acu:null,
Afn:null,Init:function(aArg){this.VL.Ahy(A._NewObject(A.Core.Bq,0).Initialize(A.
_GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.Ag2)));},A47:function(G
){this.VL.Ace(this.AuW);this.Abx.Ace(this.Avo);this.Abw.Ace(this.Avn);this.Acu.Ace(
this.AxC);},AxB:function(){var Gl=A._GetAutoObject(A.Device.Device).Bt.B_();this.
AuW=A._NewObject(C.Ajw,0);this.Avo=A._NewObject(C.Ajw,0);this.Avn=A._NewObject(C.
Ajw,0);this.AxC=A._NewObject(C.Ajw,0);if(Gl>0){var O=Gl-1;while(O>=0){var D$=A._GetAutoObject(
A.Device.Device).Bt.Hw(O,6);this.AtF(this.AuW,O,3,D$);this.AtF(this.Avo,O,2,D$);
this.AtF(this.Avn,O,5,D$);this.AtF(this.AxC,O,4,D$);O=O-1;}}this.AaI=!(((this.AuW.
A0+this.Avn.A0)+this.Avo.A0)+this.AxC.A0);A.pe([this,this.A47],this);},AtF:function(
A1C,Ad,A1B,Qk){var AlA=A._GetAutoObject(A.Device.Device).Bt.Jb(Ad,A1B);if(!!AlA)
A1C.OC(AlA,Qk);},Acc:function(E){if(this.MJ===E)return;C.Le.Acc.call(this,E);if(
!!this.VL)this.VL.Acc(E);if(!!this.Abx)this.Abx.Acc(E);if(!!this.Abw)this.Abw.Acc(
E);if(!!this.Acu)this.Acu.Acc(E);this.Afn.Acc(E);},AiY:function(G){this.VL.Ahy(A.
_NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(
A.aaR(A.acf.Ag2)));this.AxB();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.Bk7));else this.Dl(A.aaR(A.acf.Anr));this.Am();},_Init:function(
aArg){C.Le._Init.call(this,aArg);C.AhD._Init.call(this.VL={I:this},0);C.AhD._Init.
call(this.Abx={I:this},0);C.AhD._Init.call(this.Abw={I:this},0);C.AhD._Init.call(
this.Acu={I:this},0);C.AUE._Init.call(this.Afn={I:this},0);this.__proto__=C.AMz;
this.Dl(A.aaR(A.acf.Anr));this.VL.H(AIH);this.VL.R(A.aaR(A.acf.AGu));this.Abx.H(
AZV);this.Abx.R(A.aaR(A.acf.Feed));this.Abw.H(AZW);this.Abw.R(A.aaR(A.acf.AGw));
this.Acu.H(AZX);this.Acu.R(A.aaR(A.acf.AGx));this.Afn.H(AZY);this.J(this.VL,-1);
this.J(this.Abx,-1);this.J(this.Abw,-1);this.J(this.Acu,-1);this.J(this.Afn,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.VL._Done();this.Abx.
_Done();this.Abw._Done();this.Acu._Done();this.Afn._Done();C.Le._Done.call(this);
},_ReInit:function(){C.Le._ReInit.call(this);this.VL._ReInit();this.Abx._ReInit(
);this.Abw._ReInit();this.Acu._ReInit();this.Afn._ReInit();this.Dl(A.aaR(A.acf.Anr
));this.VL.R(A.aaR(A.acf.AGu));this.Abx.R(A.aaR(A.acf.Feed));this.Abw.R(A.aaR(A.
acf.AGw));this.Acu.R(A.aaR(A.acf.AGx));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.Avo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avn)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AxC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMA={EU:null,WS:null,Aep:null,A21:false,Init:function(aArg){this.WS.Ahy(A._NewObject(
A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr()).Format(A.aaR(A.acf.
Ag2)));},Bl:function(aSize){C.Le.Bl.call(this,aSize);this.Aep.H(this.EU.M);},Aj:
function(Ae){C.Le.Aj.call(this,Ae);var BCI=!this.AaI&&this.A21;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aep.R(A.aaR(A.acf.A8I));else this.
Aep.R(A.aaR(A.acf.ArC));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.Bk8));else this.Dl(A.aaR(A.acf.Bk9));this.Aep.Z(BCI);},AiY:function(G){this.
WS.Ahy(A._NewObject(A.Core.Bq,0).Initialize(A._GetAutoObject(A.Device.Helper).Dr(
)).Format(A.aaR(A.acf.Ag2)));this.AaI=true;this.A21=true;this.AxB();this.AUH();this.
Am();},AUH:function(){this.EU.Ae6(this.AO4());if(!!this.EU.E0&&(this.EU.E0.A0>0)
){this.AaI=false;this.A21=false;}},AO4:function(){var BC=A._NewObject(C.Aqz,0);var
Qq=A._GetAutoObject(A.Device.Helper).AOl(A._GetAutoObject(A.Device.Helper).Dr());
var Dy=A._GetAutoObject(A.Device.Helper).Aqv(Qq-(86400*this.MJ));BC.AnG(AZZ);BC.
Q7([].concat(0,BC.Go.slice(1,4)));BC.Q7(A.abN(BC.Go,(Qq-Dy)|0));BC.Q7(A.abP(BC.Go
,3400));BC.Q7([].concat(BC.Go.slice(0,3),4200));var Gl=A._GetAutoObject(A.Device.
Device).Bt.B_();BC.Aw0(Gl);BC.Yr();if(Gl>0){var O=0;while(O<Gl){var ApZ=A._GetAutoObject(
A.Device.Device).Bt.CE(O,7);var Ap0=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dy;if(ApZ>0)BC.Aqk(Ap0,ApZ);O=O+1;}}return BC;},BjW:function(){var Gl=A._GetAutoObject(
A.Device.Device).Bt.B_();if(Gl>0){var Bgz=A._NewObject(C.Ajw,0);var O=Gl-1;while(
O>=0){var D6=A._NewObject(A.Device.Rating,0);D6.Fm(O,A._GetAutoObject(A.Device.Device
).Bt);var L0=A._GetAutoObject(A.Device.Helper).ADn(D6);if(!!L0)Bgz.OC(L0,D6.Timestamp
);O=O-1;}return Bgz;}else return null;},AxB:function(){this.WS.Ace(this.BjW());if(
!!this.WS.Ob&&(this.WS.Ob.A0>0))this.AaI=false;},_Init:function(aArg){C.Le._Init.
call(this,aArg);C.Aq3._Init.call(this.EU={I:this},0);C.AhD._Init.call(this.WS={I:
this},0);C.AkT._Init.call(this.Aep={I:this},0);this.__proto__=C.AMA;this.EU.H(Atk
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFr(C.AG6);this.WS.H(AZ0);this.WS.
R(A.aaR(A.acf.Rating));this.Aep.H(Atk);this.J(this.EU,-2);this.J(this.WS,-2);this.
J(this.Aep,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);this.WS._Done();this.Aep._Done();C.Le._Done.call(this);},_ReInit:function(){C.
Le._ReInit.call(this);this.EU._ReInit();this.WS._ReInit();this.Aep._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WS.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Le._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WZ={Q:null,Gz:null,GA:null
,QQ:null,AM:0,Gt:0,Gg:100,FJ:0,Init:function(aArg){},H0:function(G){this.FJ=1;C.
Ei.H0.call(this,G);},Bl:function(aSize){C.Ei.Bl.call(this,aSize);this.QQ.H([0,aSize[
1]-40,40,aSize[1]]);},Aj:function(Ae){C.Ei.Aj.call(this,Ae);this.QQ.Z(this.Gt!==
this.Gg);this.QQ.L(this.V.AR);if((this.FJ===4)||(this.FJ===5))this.QQ.L(A.jb.E2);
},Al8:function(G){this.FJ=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay4],this);
this.Bo.As(false);}this.Bo.As(true);},Qw:function(G){if(this.FJ===5)A.pe([this,this.
Ay4],this);if(this.FJ===4)A.pe([this,this.Ay5],this);if(this.FJ===1)A.pe(this.AQ
,this);this.FJ=0;this.Am();},C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,
F[1].call(F[0])));},Ac2:function(s){this.C6(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.Ac2],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Ac2],E,0);if(!!E)A.pe([this,this.Ac2],this);},Al9:function(G){this.FJ=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay5],this);this.Bo.As(false);}this.Bo.As(true
);},Ki:function(G){this.FJ=0;},Ay5:function(s){this.Ki(s);},Kd:function(G){this.
FJ=0;},Ay4:function(s){this.Kd(s);},By:function(E){if(E<this.Gt)E=this.Gt;if(E>this.
Gg)E=this.Gg;if(this.AM===E)return;this.AM=E;this.Am();},Gh:function(E){if(this.
Gt===E)return;this.Gt=E;this.Am();},EV:function(E){if(this.Gg===E)return;this.Gg=
E;this.Am();},_Init:function(aArg){C.Ei._Init.call(this,aArg);A.Core.BG._Init.call(
this.Gz={I:this},0);A.Core.BG._Init.call(this.GA={I:this},0);A.acg.Ap._Init.call(
this.QQ={I:this},0);this.__proto__=C.WZ;this.H(K4);this.Gz.Filter=5;this.GA.Filter=
4;this.Background.H(K4);this.V.H(Aao);this.V.R(LE);this.QQ.H(AyL);this.J(this.QQ
,0);this.Gz.BH=[this,this.Al8];this.Gz.D3=[this,this.Al8];this.GA.BH=[this,this.
Al9];this.GA.D3=[this,this.Al9];this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak
));this.V.Cm(null);this.QQ.Ax(A.aaL(A.ach.AMX));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ei;this.Gz._Done();this.GA._Done();this.QQ._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Gz._ReInit();this.GA.
_ReInit();this.QQ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
GA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AU5={AC:null,CM:null,HO:
null,Bl:function(aSize){C.WZ.Bl.call(this,aSize);this.CM.H([this.QQ.M[2],this.QQ.
M[1],this.M[2],this.QQ.M[3]]);},Aj:function(Ae){C.WZ.Aj.call(this,Ae);this.CM.AbO(
0,this.CM.A0-1);if(this.Gt!==this.Gg)this.QQ.Z(true);},Init:function(aArg){},C6:
function(G){var F;if(!!this.Q&&!!this.AC)this.By(this.AC.D0((F=this.Q,F[1].call(
F[0]))));},Ki:function(G){var F;var BQ=this.AM;C.WZ.Ki.call(this,G);this.By(this.
AM+1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C8(
this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BQ=this.AM;C.WZ.Kd.call(this
,G);this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},By:function(E){var QC=0;if(this.Gt
!==this.Gg){if(E<this.Gt){E=this.Gg;QC=-this.CM.GQ*this.CM.A0;}if(E>this.Gg){E=this.
Gt;QC=this.CM.GQ;}}C.WZ.By.call(this,E);if(!!QC)this.CM.Gi(QC);this.CM.GU(this.AM
);this.CM.HJ(this.CM.Gv,true,this.HO,null);},Hn:function(G){var B;var Gk=this.CM.
G6;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B9
);CA.AY(A.aaL(A.fl.Af));CA.L(this.V.AR);if(!!this.AC)CA.R(this.AC.Ge(Gk));else CA.
R(Xp);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GQ]));},CH:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gh(0);this.EV(this.AC.Dv()-1);this.CM.
JF(this.AC.Dv());this.CM.AbO(0,this.CM.A0-1);}},_Init:function(aArg){C.WZ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gp._Init.call(this.
HO={I:this},0);this.__proto__=C.AU5;this.H(K4);this.QQ.H(AZ1);this.CM.Afb(40);this.
CM.N_(C.CG);this.HO.WQ(23);this.HO.HP(1);this.HO.Fq(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.CM.Hn=[this,this.Hn];this.Init(
aArg);},_Done:function(){this.__proto__=C.WZ;this.CM._Done();this.HO._Done();C.WZ.
_Done.call(this);},_ReInit:function(){C.WZ._ReInit.call(this);this.CM._ReInit();
this.HO._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WZ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R6={ALI:0
,Aj:function(Ae){C.Fz.Aj.call(this,Ae);this.T(A.aaR(A.acf.AHp));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KC((A._GetAutoObject(A.Device.Converter).Ak_(this.ALI
)+CJ)+A._GetAutoObject(A.acj.DV).Af_());else this.KC(A.aaR(A.acf.Unknown));},Ci:
function(G){C.Fz.Ci.call(this,G);this.ALI=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fz._Init.call(this,aArg);this.__proto__=C.R6;},_className:"Application::AnimalInfoItemWeightGain"
};C.APH={Bb:null,Df:null,Init:function(aArg){var B;A.zX([this,this.NC],[B=A._GetAutoObject(
A.Device.Device),B.AEM,B.AIY],0);},DY:function(G){C.IQ.DY.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhX(A._GetAutoObject(A.Device.Device).Ea));
},_Init:function(aArg){C.IQ._Init.call(this,aArg);A.acg.C9._Init.call(this.Bb={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APH;this.Bb.DE(
Ato);this.Bb.DO(Alm);this.Bb.L(A.jb.Bb);this.Df.H(AZ2);this.Df.L(A.jb.Text);this.
J(this.Bb,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IQ;this.Bb._Done();this.Df._Done();C.IQ._Done.call(this
);},_ReInit:function(){C.IQ._ReInit.call(this);this.Bb._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IQ._Mark.call(this,D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANJ={ZV:null,KG:null,Mw:null,Timer:null,ACy:3,Aj:function(Ae){C.AB.Aj.call(this
,Ae);this.ZV.R(A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.Brr),Pc,this.ACy.
toFixed()));},CC:function(G){this.Timer.As(true);},E4:function(G){this.Timer.As(
false);},BBX:function(G){if(this.ACy>1){this.ACy=this.ACy-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).AxJ();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZV={I:this},0);A.acg.Text.
_Init.call(this.KG={I:this},0);A.acg.Ap._Init.call(this.Mw={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANJ;this.Background.L(A.jb.CV
);this.N.Z(true);this.ZV.H(AZ3);this.ZV.Lx(true);this.ZV.R(A.jV);this.ZV.L(A.jb.
Text);this.KG.H(AZ4);this.KG.Lx(true);this.KG.R(A.aaR(A.acf.A5Y));this.KG.L(A.jb.
Text);this.Mw.H(AII);this.J(this.ZV,0);this.J(this.KG,0);this.J(this.Mw,0);this.
ZV.S(A.aaL(A.fl.Af));this.KG.S(A.aaL(A.fl.Af));this.Mw.Ax(A.aaL(A.ach.AB4));this.
Timer.MN=[this,this.BBX];},_Done:function(){this.__proto__=C.AB;this.ZV._Done();
this.KG._Done();this.Mw._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZV._ReInit();this.KG._ReInit();this.Mw._ReInit(
);this.Timer._ReInit();this.KG.R(A.aaR(A.acf.A5Y));this.ZV.S(A.aaL(A.fl.Af));this.
KG.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANq={KG:null,AmF:null
,QI:null,CQ:function(){this.Am();},Aj:function(Ae){C.Aee.Aj.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Abd<=10)this.KG.R(A.aaR(A.acf.Bh9));else this.KG.R(A.aaR(A.acf.
A5Z));},_Init:function(aArg){C.Aee._Init.call(this,aArg);A.acg.Text._Init.call(this.
KG={I:this},0);A.acg.Ap._Init.call(this.AmF={I:this},0);C.CG._Init.call(this.QI={
I:this},0);this.__proto__=C.ANq;this.S1.H(AZ5);this.Mw.H(AZ6);this.KG.H(AZ7);this.
KG.Lx(true);this.KG.L(A.jb.Text);this.AmF.H(AII);this.QI.H(AZ8);this.QI.Z(true);
this.QI.R(A.aaR(A.acf.AUF));this.QI.L(A.jb.Text);this.J(this.KG,0);this.J(this.AmF
,0);this.J(this.QI,0);this.KG.S(A.aaL(A.fl.Af));this.AmF.Ax(A.aaL(A.ach.AB4));this.
QI.S(A.aaL(A.fl.Af));this.QI.AY(A.aaL(A.fl.Ak));this.QI.Cm(A.aaL(A.fl.Bg));},_Done:
function(){this.__proto__=C.Aee;this.KG._Done();this.AmF._Done();this.QI._Done();
C.Aee._Done.call(this);},_ReInit:function(){C.Aee._ReInit.call(this);this.KG._ReInit(
);this.AmF._ReInit();this.QI._ReInit();this.QI.R(A.aaR(A.acf.AUF));this.KG.S(A.aaL(
A.fl.Af));this.QI.S(A.aaL(A.fl.Af));this.QI.AY(A.aaL(A.fl.Ak));this.QI.Cm(A.aaL(
A.fl.Bg));this.CQ();},_Mark:function(D){var B;C.Aee._Mark.call(this,D);if((B=this.
KG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMm={_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AMm;this.
R0.As(false);this.R0.Ai(false);this.R0.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AV7={_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AV7;this.
Tg.As(false);this.Tg.Ai(false);this.Tg.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO$={DY:function(G){C.Kv.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad5(5));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.AO$;},_className:"Application::HeaderControlListFilter"};C.APJ={DY:function(G){
C.Kv.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad5(6));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APJ;},_className:"Application::HeaderWatchListFilter"
};C.APN={D1:null,Nj:null,_Init:function(aArg){C.T4._Init.call(this,aArg);C.CG._Init.
call(this.D1={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);this.__proto__=
C.APN;this.D1.H(Aov);this.D1.R(A.aaR(A.acf.A6w));this.D1.L(A.jb.Text);this.Nj.H(
AZ9);this.Nj.L(A.jb.Text);this.Nj.A4(0x12);this.J(this.D1,-2);this.J(this.Nj,0);
this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(A.fl.Bg));this.Nj.Ax(A.aaL(A.ach.ADR)
);},_Done:function(){this.__proto__=C.T4;this.D1._Done();this.Nj._Done();C.T4._Done.
call(this);},_ReInit:function(){C.T4._ReInit.call(this);this.D1._ReInit();this.Nj.
_ReInit();this.D1.R(A.aaR(A.acf.A6w));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.T4._Mark.call(this,D);if((B=this.D1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANl={Ci:function(Ad){C.AjD.Ci.call(this,Ad);if(
!!this.AX){var Ou=this.AX.H6(Ad,8);var BDu=this.AX.Ss(Ad,21);this.Abp.R(A._GetAutoObject(
A.Device.Helper).Mg(BDu,A._GetAutoObject(A.Device.Helper).Dr()).toFixed());this.
Sy.Z(Ou);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANl;},_className:"Application::CalfListWatchItem"};C.T4={Ahb:null,Ahd:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ahb={I:this},
0);A.acg.Ap._Init.call(this.Ahd={I:this},0);this.__proto__=C.T4;this.Ahb.H(AZ_);
this.Ahb.L(A.jb.Text);this.Ahb.A4(0x12);this.Ahd.H(AZ$);this.Ahd.L(A.jb.Text);this.
Ahd.A4(0x12);this.Iu(this.DT,-1);this.J(this.Ahb,0);this.J(this.Ahd,0);this.Ahb.
Ax(A.aaL(A.ach.Arh));this.Ahd.Ax(A.aaL(A.ach.Ag9));},_Done:function(){this.__proto__=
C.De;this.Ahb._Done();this.Ahd._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Ahb._ReInit();this.Ahd._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqz={Go:A.wg,ON:A.wf,Q7:function(E){if(A.aaY(this.Go,E))return;this.Go=E;},AnG:
function(E){if(A.aaX(this.ON,E))return;this.ON=E;},_Init:function(aArg){A.acv.ACx.
_Init.call(this,aArg);this.__proto__=C.Aqz;},_className:"Application::BoundCoordList"
};C.AjD={T9:null,WF:null,T_:null,WG:null,Sy:null,Zs:null,Abp:null,AP:null,A_:null
,Ec:null,LA:null,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T9.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WF.H(this.T9.M);this.A_.H([this.T9.
M[2]-1,0,this.T9.M[2]+1,aSize[1]]);this.T_.H([this.T9.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WG.H(this.T_.M);this.Ec.H([this.T_.M[2]-1,0,this.T_.M[2]+1,aSize[
1]]);this.Sy.H([this.T_.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zs.H(this.Sy.
M);this.LA.H([this.Sy.M[2]-1,0,this.Sy.M[2]+1,aSize[1]]);this.Abp.H([this.Sy.M[2
],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);var Lb=this.V.AR;
this.T9.AFb(Lb);this.WF.L(Lb);this.T_.AFb(Lb);this.WG.L(Lb);this.Sy.AFb(Lb);this.
Zs.L(Lb);this.Abp.L(Lb);this.Zs.Z(!this.Sy.Fp());},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mp=this.AX.CE(Ad,1);var Ig=this.AX.Am0(Ad,14);var Auy=this.AX.CE(
Ad,5);var L0=this.AX.Jb(Ad,13);this.T(Mp.toFixed());if(!!L0){this.T9.Z(true);this.
T9.AwQ(A._GetAutoObject(A.acj.Assessment).Bd0(L0));this.WF.Z(false);}else{this.T9.
Z(false);this.WF.Z(true);}if(Auy>0){this.T_.Z(true);this.T_.AwQ(A._GetAutoObject(
A.acj.Assessment).Bd0(A._GetAutoObject(A.Device.Converter).AsM(Ig,Auy)));this.WG.
Z(false);}else{this.T_.Z(false);this.WG.Z(true);}this.Am();},_Init:function(aArg
){C.A$._Init.call(this,aArg);C.Kp._Init.call(this.T9={I:this},0);A.acg.Text._Init.
call(this.WF={I:this},0);C.Kp._Init.call(this.T_={I:this},0);A.acg.Text._Init.call(
this.WG={I:this},0);C.Kp._Init.call(this.Sy={I:this},0);A.acg.Text._Init.call(this.
Zs={I:this},0);A.acg.Text._Init.call(this.Abp={I:this},0);A.acg.AK._Init.call(this.
AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.
Ec={I:this},0);A.acg.AK._Init.call(this.LA={I:this},0);this.__proto__=C.AjD;this.
WF.H(A0a);this.WF.R(Aow);this.WG.H(Aox);this.WG.R(Aow);this.Sy.AwQ(A.jb.Rk);this.
Zs.H(Aox);this.Zs.R(Rt);this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ec.L(A.jb.Bb);
this.LA.L(A.jb.Bb);this.J(this.T9,0);this.J(this.WF,0);this.J(this.T_,0);this.J(
this.WG,0);this.J(this.Sy,0);this.J(this.Zs,0);this.J(this.Abp,0);this.J(this.AP
,0);this.J(this.A_,0);this.J(this.Ec,0);this.J(this.LA,0);this.WF.S(A.aaL(A.fl.Af
));this.WG.S(A.aaL(A.fl.Af));this.Zs.S(A.aaL(A.fl.Af));this.Abp.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.T9._Done();this.WF.
_Done();this.T_._Done();this.WG._Done();this.Sy._Done();this.Zs._Done();this.Abp.
_Done();this.AP._Done();this.A_._Done();this.Ec._Done();this.LA._Done();C.A$._Done.
call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.T9._ReInit();this.WF.
_ReInit();this.T_._ReInit();this.WG._ReInit();this.Sy._ReInit();this.Zs._ReInit(
);this.Abp._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ec._ReInit();this.
LA._ReInit();this.WF.S(A.aaL(A.fl.Af));this.WG.S(A.aaL(A.fl.Af));this.Zs.S(A.aaL(
A.fl.Af));this.Abp.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.T9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LA)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DS={PA:null,Anj:null
,E0:null,DS:null,Aru:0,Arv:0,A70:0,AmR:0,AqM:0,Init:function(aArg){this.ATm(6);this.
ATn(8);this.ATy(A.jb.AV);this.ATz(3);},Aj:function(Ae){var B;A.Core.P.Aj.call(this
,Ae);this.DS.BmN([this.DS.Abl[0],(B=this.DS.M)[3]-B[1]]);this.WT(this);},ATl:function(
E){if(this.PA===E)return;this.PA=E;this.DS.ATl(E);},ATz:function(E){if(this.Arv===
E)return;this.Arv=E;this.DS.ATz(E);},ATy:function(E){if(this.Aru===E)return;this.
Aru=E;this.DS.ATy(E);this.DS.BmR(E);},WT:function(G){var B;while(!!this.DS.Ah)this.
HQ(this.DS.Ah);if(!this.E0)return;this.DS.AnG([((this.E0.ON[0]*((B=this.M)[2]-B[
0]))/(this.E0.Go[2]-this.E0.Go[0]))|0,this.DS.ON[1]]);this.DS.AnG([this.DS.ON[0]
,((this.E0.ON[1]*((B=this.M)[3]-B[1]))/(this.E0.Go[3]-this.E0.Go[1]))|0]);var O;
var Di=this.DS.ON[1];var D$;var A5g=this.E0.Go[1];var Bk6=(((B=this.DS.M)[3]-B[1
])/this.DS.ON[1])|0;for(O=0;O<Bk6;O=O+1){D$=A._NewObject(A.acg.Text,0);D$.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Anj.Ascent+this.Anj.Descent))+2,((B=this.M)[2]-
B[0])-this.Arv,(((B=this.M)[3]-B[1])-(O*Di))+2]);D$.L(this.A70);D$.S(this.Anj);D$.
A4(0x24);if(O>0)D$.R(this.AJW(A5g));else D$.R(this.AKs());A5g=A5g+this.E0.ON[1];
this.J(D$,0);}},BHa:function(s){this.WT(s);},BnH:function(E){if(this.Anj===E)return;
this.Anj=E;this.Am();},AzC:function(A1h){var B;if(!this.E0||(this.E0.Go[3]===this.
E0.Go[1]))return 0;return(((A1h-this.E0.Go[1])*((B=this.M)[3]-B[1]))/(this.E0.Go[
3]-this.E0.Go[1]))|0;},Ae6:function(E){if(this.E0===E)return;this.E0=E;if(!E)this.
DS.Ae6(null);else{var BC=A._NewObject(A.acv.ACx,0);BC.Aw0(this.E0.AEs);BC.Yr();var
JI=E.AlO;while(!!JI){BC.Aqk(this.Bzo(JI.P9),this.Bzp(JI.P_));JI=JI.Ah;}this.DS.Ae6(
BC);this.Am();}},Bzo:function(BxD){var B;if(!this.E0||(this.E0.Go[2]===this.E0.Go[
0]))return 0;return((BxD-this.E0.Go[0])*((B=this.M)[2]-B[0]))/(this.E0.Go[2]-this.
E0.Go[0]);},Bzp:function(A1h){var B;if(!this.E0||(this.E0.Go[3]===this.E0.Go[1])
)return 0;return((A1h-this.E0.Go[1])*((B=this.M)[3]-B[1]))/(this.E0.Go[3]-this.E0.
Go[1]);},AJW:function(AoU){return AoU.toFixed();},AKs:function(){return A.jV;},ATn:
function(E){if(this.AmR===E)return;this.AmR=E;this.DS.ATn(E);},ATm:function(E){if(
this.AqM===E)return;this.AqM=E;this.DS.ATm(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DS._Init.call(this.DS={I:this},0);this.__proto__=C.DS;this.
H(AIJ);this.A70=A.jb.Text;this.DS.A1(0x3F);this.DS.H(AIJ);this.DS.Bn7(A0b);this.
DS.BmB(A.jb.Rk);this.DS.Bno(A.jb.Bb);this.DS.Bos(A.jb.Rk);this.J(this.DS,0);this.
PA=A.aaL(A.acv.ACQ);this.Anj=A.aaL(A.fl.Bg);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DS._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DS._ReInit();this.BnH(A.aaL(A.fl.Bg));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.PA)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E0)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM9={AJW:function(AoU){return A._GetAutoObject(
A.Device.Converter).Ax$(AoU,0);},AKs:function(){return A._GetAutoObject(A.acj.DV
).Af_();},_Init:function(aArg){C.DS._Init.call(this,aArg);this.__proto__=C.AM9;}
,_className:"Application::BodyWeightGraph"};C.O9={JV:null,Ez:null,Ek:null,Ga:null
,IM:null,IN:null,Init:function(aArg){this.ATl(null);},WT:function(G){var B;var F;
C.DS.WT.call(this,G);var AKY=0;var ALN=0;if(!!this.JV){AKY=this.AzC(A._GetAutoObject(
A.Device.Helper).ADm((F=this.JV,F[1].call(F[0]))));ALN=this.AzC(A._GetAutoObject(
A.Device.Helper).ADl((F=this.JV,F[1].call(F[0]))));}this.Ga.H(A.abP(this.Ga.M,0)
);this.Ga.H([].concat(this.Ga.M.slice(0,3),((B=this.M)[3]-B[1])-ALN));this.IM.H(
A.abO(this.IM.M,(this.Ga.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0))-2));this.Ek.H(A.abP(
this.Ek.M,this.Ga.M[3]));this.Ek.H([].concat(this.Ek.M.slice(0,3),((B=this.M)[3]-
B[1])-AKY));this.IN.H(A.abO(this.IN.M,(this.Ek.M[3]-((((B=this.IN.M)[3]-B[1])/2)|
0))+2));this.Ez.H(A.abP(this.Ez.M,this.Ek.M[3]));this.Ez.H([].concat(this.Ez.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJW:function(AoU){return A._GetAutoObject(A.Device.Converter
).Th(AoU,0,true);},AKs:function(){return A._GetAutoObject(A.acj.DV).AaF();},AnB:
function(E){if(A.aaZ(this.JV,E))return;if(!!this.JV)A.z$([this,this.AiQ],this.JV
,0);this.JV=E;if(!!E)A.zX([this,this.AiQ],E,0);if(!!E)A.pe([this,this.AiQ],this);
},AiQ:function(G){this.Am();},_Init:function(aArg){C.DS._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ez={I:this},0);A.acg.AK._Init.call(this.Ek={I:this},0);A.
acg.AK._Init.call(this.Ga={I:this},0);A.acg.AK._Init.call(this.IM={I:this},0);A.
acg.AK._Init.call(this.IN={I:this},0);this.__proto__=C.O9;this.Ez.A1(0xD);this.Ez.
H(Aak);this.Ez.L(A.jb.Gn);this.Ek.A1(0xD);this.Ek.H(Tj);this.Ek.L(A.jb.Ia);this.
Ga.A1(0xD);this.Ga.H(Rq);this.Ga.L(A.jb.E2);this.IM.A1(0xD);this.IM.H(Aam);this.
IM.AwC(A.jb.Ia);this.IM.AwD(A.jb.Ia);this.IM.AwF(A.jb.E2);this.IM.AwE(A.jb.E2);this.
IN.A1(0xD);this.IN.H(Xo);this.IN.AwC(A.jb.Gn);this.IN.AwD(A.jb.Gn);this.IN.AwF(A.
jb.Ia);this.IN.AwE(A.jb.Ia);this.J(this.Ez,-1);this.J(this.Ek,-1);this.J(this.Ga
,-1);this.J(this.IM,-1);this.J(this.IN,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DS;this.Ez._Done();this.Ek._Done();this.Ga._Done();this.IM._Done();this.
IN._Done();C.DS._Done.call(this);},_ReInit:function(){C.DS._ReInit.call(this);this.
Ez._ReInit();this.Ek._ReInit();this.Ga._ReInit();this.IM._ReInit();this.IN._ReInit(
);},_Mark:function(D){var B;C.DS._Mark.call(this,D);if((B=this.JV)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ez)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.Aq3={EU:null,E0:null,Sh:null,Io:
null,Bb:null,AxT:A.jV,DM:A.jV,AO6:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bb.H([].concat([0,aSize[1]-2],aSize));this.Sh.
H([30,0,aSize[0]-2,30]);this.Io.H(this.Sh.M);if(!!this.EU)this.EU.H([30,this.Sh.
M[3],aSize[0],this.Bb.M[1]]);},Ahy:function(E){if(this.AxT===E)return;this.AxT=E;
this.Io.R(E);},T:function(E){if(this.DM===E)return;this.DM=E;this.Sh.R(E);},AFr:
function(E){if(this.AO6===E)return;this.AO6=E;this.BpM(this);},BpM:function(G){var
B;if(!!this.EU)this.HQ(this.EU);this.EU=(C.DS.isPrototypeOf(B=A._NewObject(this.
AO6,0))?B:null);if(!!this.EU){this.EU.H(A0c);this.EU.Ae6(this.E0);this.J(this.EU
,0);}},Ae6:function(E){if(this.E0===E)return;this.E0=E;if(!!this.EU)this.EU.Ae6(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sh={I:this},0);A.acg.Text._Init.call(this.Io={I:this},0);A.acg.AK._Init.call(this.
Bb={I:this},0);this.__proto__=C.Aq3;this.H(AcW);this.As(false);this.Sh.H(A0d);this.
Sh.A4(0x11);this.Sh.R(LE);this.Sh.L(A.jb.Text);this.Io.A4(0x14);this.Io.R(A.jV);
this.Io.L(A.jb.Text);this.Bb.H(AIK);this.Bb.L(A.jb.Bb);this.J(this.Sh,0);this.J(
this.Io,0);this.J(this.Bb,0);this.Sh.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sh._Done();this.
Io._Done();this.Bb._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sh._ReInit();this.Io._ReInit();this.Bb._ReInit();this.
Sh.S(A.aaL(A.fl.Ak));this.Io.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
E0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMI={AgG:null,GU:function(E
){var F;C.Gj.GU.call(this,E);if(!!this.AgG)(F=this.AgG,F[2].call(F[0],E));},A_c:
function(E){if(A.aaZ(this.AgG,E))return;if(!!this.AgG)A.z$([this,this.A3C],this.
AgG,0);this.AgG=E;if(!!E)A.zX([this,this.A3C],E,0);if(!!E)A.pe([this,this.A3C],this
);},A3C:function(G){var F;if(!this.AgG)return;(F=this.AgG,F[2].call(F[0],this.FQ(
)));},_Init:function(aArg){C.Gj._Init.call(this,aArg);this.__proto__=C.AMI;},_Mark:
function(D){var B;C.Gj._Mark.call(this,D);if((B=this.AgG)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUE={Ri:null
,P4:null,X6:null,X7:null,MJ:0,CQ:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Ri.H(A.abI(this.Ri.M,(((B=this.M)[3]-B[1])/2)|
0));this.P4.H(A.abI(this.P4.M,(((B=this.M)[3]-B[1])/2)|0));this.Ri.H(A.abO(this.
Ri.M,(((B=this.M)[3]-B[1])/2)|0));this.P4.H(A.abO(this.P4.M,(((B=this.M)[3]-B[1]
)/2)|0));},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.Ri.R(A._GetAutoObject(
A.Device.Helper).MR(A.aaR(A.acf.Bk0),Pc,this.MJ.toFixed()));},Acc:function(E){if(
this.MJ===E)return;this.MJ=E;this.BCw(this);},BCw:function(G){var B;var AJ3=(((B=
this.M)[2]-B[0])/this.MJ)|0;this.X6.H(A.abM(this.X6.M,(((B=this.M)[2]-B[0])-(this.
MJ*AJ3))+(((AJ3/2)-(((B=this.X6.M)[2]-B[0])/2))|0)));this.X7.H(A.abM(this.X7.M,(((
B=this.M)[2]-B[0])-AJ3)+(((AJ3/2)-(((B=this.X7.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Ri={
I:this},0);A.acg.Text._Init.call(this.P4={I:this},0);A.acg.Text._Init.call(this.
X6={I:this},0);A.acg.Text._Init.call(this.X7={I:this},0);this.__proto__=C.AUE;this.
H(BF);this.Ri.H(A0e);this.Ri.Ho(5);this.Ri.A4(0x11);this.Ri.L(A.jb.Text);this.P4.
H(AIL);this.P4.Ho(5);this.P4.A4(0x14);this.P4.R(A.aaR(A.acf.AhU));this.P4.L(A.jb.
Text);this.X6.H(A0f);this.X6.R(AIM);this.X6.L(A.jb.Text);this.X7.H(AIN);this.X7.
R(AIM);this.X7.L(A.jb.Text);this.J(this.Ri,0);this.J(this.P4,0);this.J(this.X6,0
);this.J(this.X7,0);this.Ri.S(A.aaL(A.fl.Ak));this.P4.S(A.aaL(A.fl.Ak));this.X6.
S(A.aaL(A.fl.H5));this.X7.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=A.
Core.P;this.Ri._Done();this.P4._Done();this.X6._Done();this.X7._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ri._ReInit(
);this.P4._ReInit();this.X6._ReInit();this.X7._ReInit();this.P4.R(A.aaR(A.acf.AhU
));this.Ri.S(A.aaL(A.fl.Ak));this.P4.S(A.aaL(A.fl.Ak));this.CQ();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ri)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Le={Wc:null,AjJ:null,KT:A.jV,MJ:0,AaI:false,Init:function(aArg){var A2h=A._NewObject(
C.Kq,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RX()<A2h.
C8(O))A2h.Anq=O+1;this.Wc.CH(A2h);},Aj:function(Ae){C.Ea.Aj.call(this,Ae);this.AjJ.
Z(this.AaI);if(this.AaI)this.Ba(null);else this.Ba(this.Wc);},CC:function(G){var
B;var F;C.Ea.CC.call(this,G);if(!(F=this.Wc.Q,F[1].call(F[0])))(F=this.Wc.Q,F[2].
call(F[0],this.Wc.AC.C8(0)));A.zX([this,this.AJb],[B=A._GetAutoObject(A.Device.Helper
),B.U9,B.Va],0);A.zV([this,this.AJb],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId],0);A.pe([this
,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AJb],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AJb],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId
],0);C.Ea.E4.call(this,G);},ZE:function(E){if(A.aa0(this.AQ,E))return;C.Ea.ZE.call(
this,E);this.Wc.AQ=E;},Acc:function(E){if(this.MJ===E)return;this.MJ=E;A.pe([this
,this.Amj],this);},Bxc:function(Aq){this.Acc(Aq);},AiY:function(G){},AJb:function(
s){this.AiY(s);},Dl:function(E){if(this.KT===E)return;this.KT=E;this.AjJ.R(E);},
Amj:function(G){var Fx=A._NewObject(A.Device.Filter,0);var AzL=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzL.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhU()-((this.MJ-1)*86400))-1,true);Fx.CY(AzL);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CY(HY);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fx);},BlV:function(){return this.MJ;},_Init:function(aArg
){C.Ea._Init.call(this,aArg);C.AU5._Init.call(this.Wc={I:this},0);C.AkT._Init.call(
this.AjJ={I:this},0);this.__proto__=C.Le;this.Wc.H(BF);this.AjJ.H(U5);this.J(this.
Wc,0);this.J(this.AjJ,0);this.Wc.Au([this,this.BlV,this.Bxc]);this.Init(aArg);},
_Done:function(){this.__proto__=C.Ea;this.Wc._Done();this.AjJ._Done();C.Ea._Done.
call(this);},_ReInit:function(){C.Ea._ReInit.call(this);this.Wc._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.Ea._Mark.call(this,D);if((B=this.Wc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANR={Wj:null,YY:null,RatingMode:null,PM:null,_Init:
function(aArg){C.Ch._Init.call(this,aArg);C.Nr._Init.call(this.Wj={I:this},0);C.
BW._Init.call(this.YY={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iv._Init.call(this.PM={I:this},0);this.__proto__=C.ANR;var B;this.Hk.R(A.
aaR(A.acf.ACH));this.Jh(A.aaR(A.acf.A6q));this.Wj.H(Atp);this.Wj.Ai(true);this.Wj.
T(A.aaR(A.acf.AsZ));this.Wj.Bh(true);this.Wj.Nu(23);this.YY.H(A0g);this.YY.Ai(true
);this.YY.T(A.aaR(A.acf.A$K));this.YY.Bh(false);this.PM.H(A0h);this.PM.Ai(true);
this.PM.T(A.aaR(A.acf.A6l));this.PM.Bh(true);this.PM.Gh(3);this.PM.EV(14);this.PM.
IX(A.aaR(A.acf.Kq)+Atq);this.PM.Ji(A.aaR(A.acf.GN)+Atq);this.J(this.Wj,0);this.J(
this.YY,0);this.J(this.PM,0);this.Wj.AQ=[B=this.Wj,B.Ny];this.YY.Au([B=this.RatingMode
,B.Cb,B.Cd]);this.YY.CH(this.RatingMode);this.PM.Au([B=A._GetAutoObject(A.Device.
Device),B.A9g,B.BbS]);},_Done:function(){this.__proto__=C.Ch;this.Wj._Done();this.
YY._Done();this.RatingMode._Done();this.PM._Done();C.Ch._Done.call(this);},_ReInit:
function(){C.Ch._ReInit.call(this);this.Wj._ReInit();this.YY._ReInit();this.RatingMode.
_ReInit();this.PM._ReInit();this.Hk.R(A.aaR(A.acf.ACH));this.Jh(A.aaR(A.acf.A6q)
);this.Wj.T(A.aaR(A.acf.AsZ));this.YY.T(A.aaR(A.acf.A$K));this.PM.T(A.aaR(A.acf.
A6l));this.PM.IX(A.aaR(A.acf.Kq)+Atq);this.PM.Ji(A.aaR(A.acf.GN)+Atq);},_Mark:function(
D){var B;C.Ch._Mark.call(this,D);if((B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Avc={Init:function(aArg){this.V.Text.A4(0x11);this.V.Text.Ho(10);},Aj:function(
Ae){var B;C.Cp.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20
);var GG=this.Bo.Bw;var FY=A.jb.Aeg;var GZ=A.jb.Bm;if(this.Hm){FY=A.jb.Bm;GZ=A.jb.
Text;}if(!Hf){this.Background.L(FY);this.V.L(A.jb.CL);}else if(GG){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FY);this.V.L(GZ);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;
},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Avc;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cp._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADu={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,
B.PX,B.ED],0);A.pe([this,this.DY],this);},Dg:function(E){C.BS.Dg.call(this,E);this.
Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADr));break;case 1:this.Ap.Ax(A.aaL(A.ach.APr));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APt));break;default:A.ab5("%s%e",AyM,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADu;this.Ap.H(AyN);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADr));this.Init(aArg);},_Done:function(){this.
__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADv={Ap:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Helper).W,B.PX,B.ED],0);A.pe([this,this.DY],this);},Dg:function(E){C.BS.
Dg.call(this,E);this.Ap.L(E);},DY:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADs));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APs));break;case 2:this.Ap.Ax(A.aaL(A.ach.APu));break;default:A.ab5("%s%e"
,AyM,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BS.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADv;
this.Ap.H(AyN);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADs));this.Init(aArg);},
_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.BS._Done.call(this);},_ReInit:
function(){C.BS._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fz={BX:null,Ax6:A.jV,Dg:function(E){C.JU.Dg.call(
this,E);this.BX.L(E);},KC:function(E){if(this.Ax6===E)return;this.Ax6=E;this.BX.
R(E);},_Init:function(aArg){C.JU._Init.call(this,aArg);C.CG._Init.call(this.BX={
I:this},0);this.__proto__=C.Fz;this.BX.A1(0x34);this.BX.H(Atj);this.BX.A4(0x11);
this.BX.L(A.jb.Text);this.J(this.BX,0);this.BX.S(A.aaL(A.fl.Af));this.BX.AY(A.aaL(
A.fl.Ak));this.BX.Cm(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.JU;this.
BX._Done();C.JU._Done.call(this);},_ReInit:function(){C.JU._ReInit.call(this);this.
BX._ReInit();this.BX.S(A.aaL(A.fl.Af));this.BX.AY(A.aaL(A.fl.Ak));this.BX.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.JU._Mark.call(this,D);if((B=this.BX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOP={WJ:function(G){var B;this.AgB();this.AuN(A.aaR(A.acf.Bj9),[this,this.BoI],[
B=A._GetAutoObject(A.Device.Device),B.A9h,B.BbT]);A._GetAutoObject(C.BT).Fy();this.
I9(A.aaR(A.acf.AVG),[this,this.AT4],5);this.I9(A.aaR(A.acf.AVE),[this,this.AT3],
7);this.I9(A.aaR(A.acf.An6),[this,this.Aw3],2);this.I9(A.aaR(A.acf.Ad0),[this,this.
AE9],1);this.I9(A.aaR(A.acf.AuL),[this,this.AE3],0);A._GetAutoObject(C.BT).Fy();
A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.Ank)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DG:function(G){},AbB:function(){return C.ACj;},AbC:function(
){return C.ADC;},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7l());},HR:function(G){var F;C.GL.HR.call(this,G);if(this.Aki(
)===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajs((F=this.Fl,F[1].call(
F[0]))));this.N.Cf=[this,this.Aas];this.N.E6(A.jV);}this.N.OX(false);this.N.OY(false
);},Agn:function(){A._GetAutoObject(C.A5).Cc(44);},BoI:function(G){A._GetAutoObject(
A.Device.Device).AwT(!A._GetAutoObject(A.Device.Device).AqY);this.Aod(this);},Aod:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E_();var Aw=Be.DN(
30,3);if(!!Aw)Be.Nz(Aw);if(A._GetAutoObject(A.Device.Device).AqY){var AAr=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2$=A._GetAutoObject(A.Device.Helper).Dr()-
21600;AAr.Initialize(30,3,A2$,true);Be.CY(AAr);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GL._Init.call(this,aArg);this.__proto__=C.AOP;
var B;this.Ds(C.APn);this.Dl(A.aaR(A.acf.A8F));this.AwY([B=A._GetAutoObject(A.Device.
Device),B.A9f,B.BbR]);},_ReInit:function(){C.GL._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8F));},_className:"Application::FreshCowListScreen"};C.AOO={_Init:function(
aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AOO;this.Li.As(false);this.Li.
Ai(false);this.Li.Z(false);this.Jy.As(false);this.Jy.Ai(false);this.Jy.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APn={DY:function(G){C.Kv.
DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad5(7));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APn;},_className:"Application::HeaderFreshCowListFilter"
};C.ADC={JE:null,D1:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JE={I:this},0);C.CG._Init.call(this.D1={I:this},0);this.__proto__=C.ADC;
this.A_y(1);this.JE.H(A0i);this.JE.R((A.aaR(A.acf.Calving)+AcZ)+A.aaR(A.acf.Bam)
);this.JE.L(A.jb.Text);this.D1.H(A0j);this.D1.R(A.aaR(A.acf.AEk));this.D1.L(A.jb.
Text);this.J(this.JE,0);this.J(this.D1,0);this.JE.S(A.aaL(A.fl.Ak));this.JE.AY(A.
aaL(A.fl.Bg));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.De;this.JE._Done();this.D1._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JE._ReInit();this.D1._ReInit();this.JE.R((
A.aaR(A.acf.Calving)+AcZ)+A.aaR(A.acf.Bam));this.D1.R(A.aaR(A.acf.AEk));this.JE.
S(A.aaL(A.fl.Ak));this.JE.AY(A.aaL(A.fl.Bg));this.D1.S(A.aaL(A.fl.Ak));this.D1.AY(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACj={AG7:null,KW:null,UL:null,AP:null,A_:null
,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UL.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A_.H([this.UL.M[2]-1,0,this.UL.M[2]+1,aSize[
1]]);this.KW.H([this.UL.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(
this,Ae);this.KW.L(this.V.AR);this.UL.Dg(this.V.AR);},Ci:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var IE=this.AX.CE(Ad,0);var Mp=this.AX.CE(Ad,1);
var A2_=this.AX.CE(Ad,29);var AlG=this.AX.Hw(Ad,28);this.T(Mp.toFixed());this.KW.
R(A2_.toFixed());this.UL.Acc(A._GetAutoObject(A.Device.Device).AqX+1);this.UL.Bok(
AlG);this.UL.R(A._GetAutoObject(A.acj.KS).AjN(AlG));A._GetAutoObject(A.Device.Device
).SZ(Ad);this.Ap9(IE);this.AxB();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A47:function(G){this.UL.Ace(this.AG7);},AxB:function(){var Gl=A._GetAutoObject(
A.Device.Device).Bt.B_();this.AG7=A._NewObject(C.Ajw,0);if(Gl>0){var O=Gl-1;while(
O>=0){var D$=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6);this.AtF(this.AG7,O,9,
D$);O=O-1;}}A.pe([this,this.A47],this);},AtF:function(A1C,Ad,A1B,Qk){var AlA=A._GetAutoObject(
A.Device.Device).Bt.Jb(Ad,A1B);if(!!AlA)A1C.OC(AlA,Qk);},Ap9:function(Adb){var Fx=
A._NewObject(A.Device.Filter,0);var AzL=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzL.Initialize(6,2,A._GetAutoObject(A.Device.Helper).Z0(A._GetAutoObject(A.Device.
Device).AqX)-1,true);Fx.CY(AzL);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,Adb,true);Fx.CY(HY);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KW={I:this},0);C.AUz._Init.call(this.UL={I:this},0);A.acg.AK._Init.call(this.AP={
I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);this.__proto__=C.ACj;this.AP.
L(A.jb.Bb);this.A_.L(A.jb.Bb);this.J(this.KW,0);this.J(this.UL,0);this.J(this.AP
,0);this.J(this.A_,0);this.KW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.KW._Done();this.UL._Done();this.AP._Done();this.A_._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.KW._ReInit(
);this.UL._ReInit();this.AP._ReInit();this.A_._ReInit();this.KW.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AG7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUz={AVi:0,Init:function(aArg){},AOW:function(){return A._GetAutoObject(A.Device.
Helper).Aqv(this.AVi);},AOY:function(){return this.AOW()+(this.MJ*86400);},Bok:function(
E){if(this.AVi===E)return;this.AVi=E;A.pe([this,this.WT],this);},_Init:function(
aArg){C.AhD._Init.call(this,aArg);this.__proto__=C.AUz;this.Bb.H(A0k);this.Boh(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dv:function(){if(this.K&&this.K.Dv)return this.K.
Dv.apply(this,arguments);else return C.FactoryResetScope.Bu$.apply(this,arguments
);},Bu$:function(){return 3;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BU(this.C8(aIndex));},_Init:function(aArg
){C.Cn._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BJ.
Set(0,0);this.BJ.Set(1,1);this.BJ.Set(2,2);var Ka=this._variants();if(Ka){this.K={
};Ka._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cn;this.FactoryResetScopeToString._Done();C.Cn._Done.call(this);
},_ReInit:function(){C.Cn._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acq.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bhm:false,Init:function(aArg){this.Bhm=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ex:function(G){if(this.Bet){A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);if(this.Bhm)A._GetAutoObject(A.Device.Device).AZ(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AZ(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ex.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASw={WJ:function(G){this.
AgB();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.Settings),[this,this.A4a]);A._GetAutoObject(
C.BT).Fy();this.AMi();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.ARL)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){},AbB:function(
){return C.AqA;},AbC:function(){return C.Aq7;},Ra:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADe());},HR:function(G){C.
Mq.HR.call(this,G);if(this.Aki()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajs(A._GetAutoObject(A.Device.Converter).AMd(this.L7.ADg())));this.N.Cf=[this,
this.Aas];this.N.E6(A.jV);}this.N.OX(false);this.N.OY(false);},Agn:function(){A.
_GetAutoObject(C.A5).Cc(47);},A4a:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A5).Cc(89);},_Init:function(aArg){C.Mq._Init.call(this,
aArg);this.__proto__=C.ASw;this.Ds(C.ADw);this.Dl(A.aaR(A.acf.A8B));this.ATA(A._GetAutoObject(
C.Av$));},_ReInit:function(){C.Mq._ReInit.call(this);this.Dl(A.aaR(A.acf.A8B));}
,_className:"Application::NoTransponderListScreen"};C.ASv={_Init:function(aArg){
C.I$._Init.call(this,aArg);this.__proto__=C.ASv;this.K1.As(false);this.K1.Ai(false
);this.K1.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADw={DY:function(G){C.Kv.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad5(8));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.ADw;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB3={Au0:null,Ge:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Au0.BU(aIndex);},_Init:
function(aArg){C.D5._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Au0={I:this},0);this.__proto__=C.AB3;},_Done:function(){this.__proto__=
C.D5;this.Au0._Done();C.D5._Done.call(this);},_ReInit:function(){C.D5._ReInit.call(
this);this.Au0._ReInit();},_Mark:function(D){var B;C.D5._Mark.call(this,D);if((B=
this.Au0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AMc={Cp:null,Ad8:null,Init:function(aArg){this.Ba(this.Cp);},Ls:function(){if(
!this.BR){this.BR=A._NewObject(C.N,0);this.BR.CF=[this,this.AaQ];this.BR.Cf=null;
this.BR.Ce=[this,this.A3M];this.BR.CS(A.jV);this.BR.Cu(null);this.BR.C4(A.aaL(A.
ach.AeG));}return this.BR;},AAH:function(G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null
);if(Aa===this.Cp)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad8)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIO);},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ajl._Init.call(this.
Cp={I:this},0);C.Ajl._Init.call(this.Ad8={I:this},0);this.__proto__=C.AMc;this.H(
Rs);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.H(I2);this.Cp.T(A.aaR(A.acf.
AEu));this.Ad8.H(Qe);this.Ad8.T(A.aaR(A.acf.TE));this.J(this.Cp,0);this.J(this.Ad8
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cp.AQ=[this,this.AAH];this.Ad8.AQ=[this,this.
AAH];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Cp._Done();this.
Ad8._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Cp._ReInit();this.Ad8._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.
T(A.aaR(A.acf.AEu));this.Ad8.T(A.aaR(A.acf.TE));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BGv={Undefined:0,BGt:1,BGu:2,IdScanned:3,BFp:4,BEv:5,BE$:6};C.AMq={A$6:function(
){A._GetAutoObject(A.Device.Device).AZ(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfZ]);},_Init:function(aArg){C.AuS._Init.call(
this,aArg);this.__proto__=C.AMq;this.D5.Au(1);this.ATG(true);},_className:"Application::AnimalActionPerishedScreen"
};C.AeA={V6:null,V7:null,V8:null,Ag6:null,Ag7:null,Ag8:null,CF:null,Cf:null,Ce:null
,An7:A.jV,An8:A.jV,An9:A.jV,Ard:0,Are:0,Arf:0,Aho:0,ZM:false,WU:false,Ast:false,
AsH:false,AsG:false,AjC:function(Fe){this.CF=Fe.CF;this.Cf=Fe.Cf;this.Ce=Fe.Ce;this.
An7=Fe.An7;this.An8=Fe.An8;this.An9=Fe.An9;this.Aho=Fe.Aho;this.V6=Fe.V6;this.V7=
Fe.V7;this.V8=Fe.V8;this.Ag6=Fe.Ag6;this.Ag7=Fe.Ag7;this.Ag8=Fe.Ag8;this.AsG=Fe.
AsG;this.AsH=Fe.AsH;this.Ast=Fe.Ast;this.WU=Fe.WU;this.ZM=Fe.ZM;this.Ard=Fe.Ard;
this.Are=Fe.Are;this.Arf=Fe.Arf;},AkR:function(Fe){Fe.CF=this.CF;Fe.Cf=this.Cf;Fe.
Ce=this.Ce;Fe.Hz(this.An7);Fe.E6(this.An8);Fe.CS(this.An9);Fe.AFw(this.Aho);Fe.AFo(
this.V6);Fe.ArU(this.V7);Fe.AnF(this.V8);Fe.C4(this.Ag6);Fe.Cu(this.Ag7);Fe.C5(this.
Ag8);Fe.OX(this.AsG);Fe.OY(this.AsH);Fe.Ast=this.Ast;Fe.WU=this.WU;Fe.ZM=this.ZM;
Fe.Bnq(this.Ard);Fe.ATu(this.Are);Fe.A_K(this.Arf);},_Init:function(aArg){this.__proto__=
C.AeA;this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V6=A.aaL(
A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsD._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Ds(C.ADu);},_className:"Application::NewAnimalSetTransponderScreen"};C.B7={Abm:null
,CountryToString:null,Dv:function(){return 40;},C8:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.LC(aIndex);},D0:function(A9){return A9;
},H7:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abm)(F=this.Abm,F[2].call(F[0],E));},A1$:function(G){var F;if(!!this.Abm)this.Q=(
F=this.Abm,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Cb,this.Cd],0);},AwH:
function(E){if(A.aaZ(this.Abm,E))return;if(!!this.Abm)A.z$([this,this.A1$],this.
Abm,0);this.Abm=E;if(!!this.Abm)A.zX([this,this.A1$],this.Abm,0);A.pe([this,this.
A1$],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.B7;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abm)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O8={AC:null,Q:null,Background:null,Is:null,Ir:null,Nb:
0,AM:0,Gt:0,Gg:0,Agj:function(G){this.Ki(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Aj:function(
Ae){var B;A.Core.P.Aj.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.Background.
L(A.jb.AV);this.C0(256);}else{this.Background.L(this.Nb);this.C0(256);}},Agi:function(
G){this.Kd(this);},CH:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3_],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3_],E,0);if(!!E)A.pe([this
,this.A3_],this);},CW:function(E){if(this.Nb===E)return;this.Nb=E;this.Am();},Ki:
function(G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},Kd:function(
G){var F;var BQ=this.AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C8(this.AM)));A.abo(this.Q,0);}},By:function(
E){if(E<this.Gt)E=this.Gg;if(E>this.Gg)E=this.Gt;if(this.AM===E)return;this.AM=E;
this.Am();},Gh:function(E){if(this.Gt===E)return;this.Gt=E;this.Am();},EV:function(
E){if(this.Gg===E)return;this.Gg=E;this.Am();},C6:function(G){var F;if(!!this.Q)
this.By(this.AC.D0((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},A3_:function(G){var F;if(!!this.
AC){this.Gh(0);this.EV(this.AC.H7());if(!!this.Q)this.By(this.AC.D0((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AK._Init.call(this.Background={I:this},0);A.Core.BG._Init.call(this.Is={
I:this},0);A.Core.BG._Init.call(this.Ir={I:this},0);this.__proto__=C.O8;this.H(AIP
);this.Background.H(Aln);this.Is.Filter=4;this.Ir.Filter=5;this.Nb=A.jb.CL;this.
J(this.Background,0);this.Is.BH=[this,this.Agj];this.Is.D3=[this,this.Agj];this.
Ir.BH=[this,this.Agi];this.Ir.D3=[this,this.Agi];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Is._Done();this.Ir._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Is._ReInit();this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.R2={A12:A.jV,Aj:function(
Ae){C.Fz.Aj.call(this,Ae);this.T(A.aaR(A.acf.A59));this.KC(this.A12);},Ci:function(
G){C.Fz.Ci.call(this,G);var AlG=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlG)this.A12=Xp;else this.A12=A._GetAutoObject(A.acj.KS).AjN(AlG);this.Am();
},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.R2;},_className:
"Application::AnimalInfoItemCalvingDate"};C.R3={A29:0,Aj:function(Ae){C.Fz.Aj.call(
this,Ae);this.T(A.aaR(A.acf.ARJ));if(this.A29>0)this.KC(this.A29.toFixed());else
this.KC(A.aaR(A.acf.Unknown));},Ci:function(G){C.Fz.Ci.call(this,G);this.A29=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fz._Init.call(
this,aArg);this.__proto__=C.R3;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dv:function(){return 5;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Ge:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A2t:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.Cb,
this.Cd],0);},L9:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2t],[B=this.Animal,B.ASN,B.Akw],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2t],[B=this.Animal,B.ASN,B.Akw],0);A.pe([this,this.A2t],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dv:function(){return 99;},C8:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BU(aIndex);},D0:function(A9){return A9;
},H7:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N9(E);},A10:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.Cb,this.Cd],0);},L9:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A10],[B=this.Animal,B.Awe,B.N9],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A10],[B=this.Animal,B.Awe,B.N9],0);A.pe([
this,this.A10],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AR5={Wf:null,YW:null,AeT:null,Init:function(
aArg){this.Ba(this.Wf);},AdA:function(G){var Aa=(C.Cp.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YW)this.ByU();else if(Aa===this.Wf)this.BBM(this);else throw new
Error(Ayv);A._GetAutoObject(A.Device.Device).Dw(0);},BBM:function(G){var B;var F;
var Vv=(C.Amz.isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null
);if(!Vv){A.ab5("%s",A0l);return;}Vv.AKO(this);},ByU:function(){A._GetAutoObject(
A.Device.Helper).W.AGP(true);A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.MB._Init.call(this.Wf={I:this},0);C.MB._Init.call(this.YW={
I:this},0);C.V1._Init.call(this.AeT={I:this},0);this.__proto__=C.AR5;var B;this.
H(AcW);this.Wf.H(Qe);this.Wf.As(true);this.Wf.T(A.aaR(A.acf.A$M));this.Wf.Bh(true
);this.YW.H(I2);this.YW.As(true);this.YW.T(A.aaR(A.acf.A5v));this.YW.Bh(true);this.
AeT.H(BF);this.AeT.T(A.aaR(A.acf.AC4));this.AeT.Bh(true);this.J(this.Wf,0);this.
J(this.YW,0);this.J(this.AeT,0);this.Wf.AQ=[this,this.AdA];this.YW.AQ=[this,this.
AdA];this.AeT.ATh([B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wf._Done();this.YW._Done(
);this.AeT._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wf._ReInit();this.YW._ReInit();this.AeT._ReInit();this.Wf.
T(A.aaR(A.acf.A$M));this.YW.T(A.aaR(A.acf.A5v));this.AeT.T(A.aaR(A.acf.AC4));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.V1={
Aj:function(Ae){C.Uh.Aj.call(this,Ae);var FY=A.jb.CL;var GZ=A.jb.Text;if(this.Hm
){FY=A.jb.Text;GZ=A.jb.Bm;}if(!this.LQ){this.Background.L(FY);this.V.L(A.jb.Am8);
}else if(this.Qx){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KN){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FY);this.V.
L(GZ);}if(this.AmH){this.Mx.Cx(1);this.Mx.L(A.jb.Ia);}else{this.Mx.Cx(0);this.Mx.
L(A.jb.Bm);}},_Init:function(aArg){C.Uh._Init.call(this,aArg);this.__proto__=C.V1;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av5={C_:null,A3:null,AF:
null,Akj:null,Q1:null,EN:null,ASl:LE,Bl:function(aSize){C.Cp.Bl.call(this,aSize);
var FY=A.jb.CL;var GZ=A.jb.Text;if(this.Hm){FY=A.jb.Bm;GZ=A.jb.Text;}this.Background.
L(FY);this.V.L(GZ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Aj:function(Ae){var F,Cv;C.Cp.Aj.call(this
,Ae);this.Akj.L(this.V.AR);this.Q1.L(this.V.AR);this.Q1.R(A0m);this.T(((this.ASl+
A.aaR(A.acf.Colon))+CJ)+A._GetAutoObject(A.Device.Helper).Aoa(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A3d=this.Q1.Afm([(this.Q1.String.length-(F=this.
AF,F[1].call(F[0])))-(Cv=this.A3,Cv[1].call(Cv[0])),0]);var A4z=this.Q1.Afm([this.
Q1.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABt=this.Q1.Dd();this.EN.H([
A3d[0]-1,ABt[1],A4z[0]+1,ABt[3]]);}else this.EN.H(this.Q1.Dd());},DD:function(E){
if(this.C_===E)return;this.C_=E;this.Akj.Ax(E);},OU:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaP],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaP],E,0);if(!!E)A.pe([this,this.AaP],this);},PY:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaR],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaR],E,0);if(!!E)A.pe([this,this.AaR],this);},AaR:function(G){this.Am(
);},AaP:function(G){this.Am();},Ar6:function(E){if(this.ASl===E)return;this.ASl=
E;this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.Q1={I:this},0);A.acg.BY._Init.call(
this.EN={I:this},0);this.__proto__=C.Av5;this.H(K4);this.V.A4(0x11);this.Akj.H(Pa
);this.Q1.H(A0n);this.EN.H(A0o);this.EN.Nx(2);this.EN.L(A.jb.E2);this.J(this.Akj
,0);this.J(this.Q1,0);this.J(this.EN,0);this.Q1.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cp;this.Akj._Done();this.Q1._Done();this.EN._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Akj._ReInit();this.
Q1._ReInit();this.EN._ReInit();this.Q1.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cp._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Q1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUu:0,Init:
function(aArg){var B;A.zX([this,this.Bfj],[B=A._GetAutoObject(A.Device.Device),B.
AEM,B.AIY],0);A.pe([this,this.Bfj],this);},HR:function(G){C.TI.HR.call(this,G);if(
this.AjR)this.N.Cu(A.aaL(A.ach.AD));else this.N.Cu(A.aaL(A.ach.ANr));this.N.C5(A.
aaL(A.ach.Options));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.A$u];this.
N.Ce=[this,this.WJ];this.N.ArU(A.aaL(A.fl.Ak));this.N.AnF(A.aaL(A.fl.Ak));},M8:function(
G){this.BfF(this);},Ox:function(G){this.BBF(this);},AdX:function(Aig,Aih,BxZ){A.
_GetAutoObject(C.BT).ABU(Aig,Aih,[this,this.A9C,this.ATK],BxZ);},WJ:function(G){
if((A._GetAutoObject(A.Device.Device).Ea===3)&&!this.AjR){A._GetAutoObject(C.BT).
TF(A.aaR(A.acf.BiL),[this,this.BoE]);A._GetAutoObject(C.BT).Fy();}this.AdX(A.aaR(
A.acf.Rating),[this,this.AT$],3);this.AdX(A.aaR(A.acf.AfB),[this,this.AUb],2);this.
AdX(A.aaR(A.acf.Temperature),[this,this.AUa],1);this.AdX(A.aaR(A.acf.Ad0),[this,
this.BoB],0);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.BiP
));A._GetAutoObject(A.Device.Device).Dw(6);},ATK:function(E){if(this.AUu===E)return;
this.AUu=E;A.abo([this,this.A9C,this.ATK],0);},Bfj:function(G){this.ATK(A._GetAutoObject(
A.Device.Device).Ea);},A9C:function(){return this.AUu;},_Init:function(aArg){C.TI.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VI:null
,Init:function(aArg){var B;A.zX([this,this.AaO],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);A.pe([this,this.Bhs],this);A.pe([this,this.Ra],this);},CC:function(
G){C.TI.CC.call(this,G);A.pe([this,this.Bhx],this);},AGV:function(G){C.TI.AGV.call(
this,G);if(!!this.Lk)this.AhG(this.Lk,this.VI);},HR:function(G){C.TI.HR.call(this
,G);this.N.Cu(A.aaL(A.ach.ARg));this.N.C5(A.aaL(A.ach.ARh));if(this.AjR)this.N.ATu(
0);else this.N.ATu(1);this.N.A_K(A._GetAutoObject(A.Device.Converter).BhW(A._GetAutoObject(
A.Device.Device).Ea));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Cf=[this,this.Bmr];
this.N.Ce=[this,this.BoG];this.N.ArU(A.aaL(A.fl.Ak));this.N.AnF(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QN()){this.N.IT.C0(100);this.N.Cf=null;
}else this.N.IT.C0(255);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.Lj.
C0(100);this.N.Ce=null;}else this.N.Lj.C0(255);if(A._GetAutoObject(A.Device.Device
).An.B_()<=1){this.N.T6.C0(100);this.N.T7.C0(100);}else{this.N.T6.C0(255);this.N.
T7.C0(255);}},M8:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;
var LM=A._GetAutoObject(A.Device.Helper).W.CR;LM=LM+1;if(LM>=A._GetAutoObject(A.
Device.Device).An.B_())LM=0;A._GetAutoObject(A.Device.Helper).GT(LM);},Ox:function(
G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;var LM=A._GetAutoObject(
A.Device.Helper).W.CR;LM=LM-1;if(LM<0)LM=A._GetAutoObject(A.Device.Device).An.B_(
)-1;A._GetAutoObject(A.Device.Helper).GT(LM);},Age:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A5).Cc(94);},Bmr:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BoG:function(G){this.BfF(this);},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ME());A.pe([this,this.Bhx
],this);},Bhs:function(G){if(!A._GetAutoObject(A.Device.Device).An.B_()){this.VI.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QN()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VI.R(A.aaR(A.acf.AEC));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DN(1,4)){if(A._GetAutoObject(A.Device.Helper).ADf(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VI.R(A.aaR(A.acf.AOh));else this.VI.R(A.aaR(
A.acf.AOg));}else this.VI.R(A.aaR(A.acf.ASs));}else this.VI.Z(false);},Bhx:function(
G){var BCD=A._GetAutoObject(A.Device.Helper).W.Id;var A4C=A._GetAutoObject(A.Device.
Device).An.L3(0,BCD);if(!A._GetAutoObject(A.Device.Device).An.B_())A._GetAutoObject(
A.Device.Helper).GT(-1);else if(A4C<0)A._GetAutoObject(A.Device.Helper).GT(0);},
AaO:function(G){this.Bhs(this);this.HR(this);},_Init:function(aArg){C.TI._Init.call(
this,aArg);C.AkT._Init.call(this.VI={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Ds(C.APG);this.VI.H(Fd);this.J(this.VI,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TI;this.VI._Done();C.TI._Done.call(this);},_ReInit:function(){
C.TI._ReInit.call(this);this.VI._ReInit();},_Mark:function(D){var B;C.TI._Mark.call(
this,D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMF={QV:null,Wg:null,AbQ:null,YZ:null,Init:function(aArg){var B;var F;this.Ba(
this.QV);if(!!A._GetAutoObject(C.A5).Q){var Vv=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vv){A.ab5("%s",AyO);
return;}else{if(Vv.AjR)this.QV.T(A.aaR(A.acf.Bf));else this.QV.T(A.aaR(A.acf.EU)
);var AzH=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzH||A._GetAutoObject(
A.Device.Helper).Arl(AzH))this.YZ.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B_()){this.Wg.As(false);this.QV.As(false);}}}},AdA:function(G){var Aa=(C.Cp.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbQ)A._GetAutoObject(C.A5).Cc(9);else if(Aa===this.Wg)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QV)this.BC8();else if(Aa===this.YZ)this.
A18();else throw new Error(Ayv);},BC8:function(){var B;var F;var Vv=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vv){A.
ab5("%s",AyO);return;}Vv.A$u(this);},A18:function(){var B;var F;var Vv=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A5).Q,F[1].call(F[0])))?B:null);if(!Vv){A.
ab5("%s",AyO);return;}Vv.Ra(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.MB._Init.call(this.QV={I:this},0);C.MB._Init.call(this.Wg={I:this},
0);C.MB._Init.call(this.AbQ={I:this},0);C.MB._Init.call(this.YZ={I:this},0);this.
__proto__=C.AMF;this.H(AfK);this.QV.H(Aaq);this.QV.As(true);this.QV.T(A.aaR(A.acf.
EU));this.QV.Bh(true);this.Wg.H(Qe);this.Wg.As(true);this.Wg.T(A.aaR(A.acf.AUV));
this.Wg.Bh(true);this.AbQ.H(I2);this.AbQ.T(A.aaR(A.acf.AkV));this.AbQ.Bh(true);this.
YZ.H(BF);this.YZ.T(A.aaR(A.acf.ACp));this.YZ.Bh(true);this.J(this.QV,0);this.J(this.
Wg,0);this.J(this.AbQ,0);this.J(this.YZ,0);this.QV.AQ=[this,this.AdA];this.Wg.AQ=[
this,this.AdA];this.AbQ.AQ=[this,this.AdA];this.YZ.AQ=[this,this.AdA];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QV._Done();this.Wg._Done(
);this.AbQ._Done();this.YZ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QV._ReInit();this.Wg._ReInit();this.AbQ.
_ReInit();this.YZ._ReInit();this.QV.T(A.aaR(A.acf.EU));this.Wg.T(A.aaR(A.acf.AUV
));this.AbQ.T(A.aaR(A.acf.AkV));this.YZ.T(A.aaR(A.acf.ACp));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jd={T8:null,EB:null,Yw:null,Background:null,Ap:null,Is:null,Ir:null,Nb:0,AM:
0,Aj:function(Ae){var B;var F;A.Core.P.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C0(256);}else if(Hf){this.Background.L(this.Nb);this.Ap.L(A.jb.Text);this.C0(
256);}else{this.Background.L(this.Nb);this.Ap.L(A.jb.Text);this.C0(128);}if(!this.
AM)this.Ap.Cx(0);else if(this.AM>0){if(A.aaZ(this.T8,[B=A._GetAutoObject(A.Device.
Device),B.Awp,B.Ay1]))this.Ap.Cx(2);else if(A.aaZ(this.T8,[B=A._GetAutoObject(A.
Device.Device),B.Awo,B.Ay0]))this.Ap.Cx(3);else if(!!this.Yw&&((F=this.Yw,F[1].call(
F[0]))===1))this.Ap.Cx(1);else this.Ap.Cx(0);}else if(A.aaZ(this.T8,[B=A._GetAutoObject(
A.Device.Device),B.Awp,B.Ay1]))this.Ap.Cx(6);else if(A.aaZ(this.T8,[B=A._GetAutoObject(
A.Device.Device),B.Awo,B.Ay0]))this.Ap.Cx(7);else if(!!this.Yw&&((F=this.Yw,F[1].
call(F[0]))===1))this.Ap.Cx(5);else this.Ap.Cx(4);},Agj:function(G){this.Ki(this
);},Agi:function(G){this.Kd(this);},Ki:function(G){this.By(1);},Kd:function(G){this.
By(-1);},BnA:function(E){if(A.aaZ(this.T8,E))return;if(!!this.T8)A.z$([this,this.
A3S],this.T8,0);this.T8=E;if(!!E)A.zX([this,this.A3S],this.T8,0);A.pe([this,this.
A3S],this);},Uw:function(E){if(A.aaZ(this.EB,E))return;if(!!this.EB)A.z$([this,this.
Agh],this.EB,0);this.EB=E;if(!!E)A.zX([this,this.Agh],this.EB,0);if(!!E)A.pe([this
,this.Agh],this);},A3S:function(G){var F;if(!!this.T8)this.By((F=this.T8,F[1].call(
F[0])));},Agh:function(G){A.pe([this,this.BDj],this);},CW:function(E){if(this.Nb===
E)return;this.Nb=E;this.Am();},By:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T8)(F=this.T8,F[2].call(F[0],E));this.Am();A.abo([this,this.Uo,this.
By],0);},A_A:function(E){if(A.aaZ(this.Yw,E))return;if(!!this.Yw)A.z$([this,this.
Agh],this.Yw,0);this.Yw=E;if(!!E)A.zX([this,this.Agh],this.Yw,0);if(!!E)A.pe([this
,this.Agh],this);},BDj:function(G){var F,Cv;if(!this.Yw||!this.EB)return;this.BnA(
A._GetAutoObject(A.Device.Helper).Bd7((F=this.Yw,F[1].call(F[0])),(Cv=this.EB,Cv[
1].call(Cv[0]))));this.Am();},Uo:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BG._Init.call(this.Is={I:this},0);
A.Core.BG._Init.call(this.Ir={I:this},0);this.__proto__=C.Jd;this.H(Atr);this.Background.
A1(0x3F);this.Background.H(Atr);this.Ap.A1(0x3C);this.Ap.H(Atr);this.Is.Filter=4;
this.Ir.Filter=5;this.Nb=A.jb.CL;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVk));this.Is.BH=[this,this.Agj];this.Ir.BH=[this,this.Agi];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Is._Done();this.Ir._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Is._ReInit(
);this.Ir._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AMb={WJ:function(G){var B;var F;this.AgB();if(!!A._GetAutoObject(A.Device.Helper
).AOU((F=this.Fl,F[1].call(F[0])),0,true))this.AuN(A.aaR(A.acf.A7C),[this,this.BoH
],[B=A._GetAutoObject(A.Device.Device),B.A8T,B.Bbz]);else A._GetAutoObject(C.BT).
Aa4(A.aaR(A.acf.A7C));A._GetAutoObject(C.BT).Fy();this.I9(A.aaR(A.acf.LinkTransponder
),[this,this.BnR],8);this.I9(A.aaR(A.acf.TE),[this,this.Akt],9);this.I9(A.aaR(A.
acf.BaH),[this,this.Bot],10);this.I9(A.aaR(A.acf.AGs),[this,this.ATP],3);this.I9(
A.aaR(A.acf.An6),[this,this.Aw3],2);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).Ms(A.aaR(A.acf.Ank)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DG:function(G){},AbB:function(){return C.AqA;},AbC:function(){return C.Aq7;
},Ra:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7c((F=this.Fl,F[1].call(F[0]))));},HR:function(G){var F;C.GL.HR.
call(this,G);if(this.Aki()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter
).Ajs((F=this.Fl,F[1].call(F[0]))));this.N.Cf=[this,this.Aas];this.N.E6(A.jV);}this.
N.OX(false);this.N.OY(false);},Agn:function(){A._GetAutoObject(C.A5).Cc(52);},A3X:
function(G){C.GL.A3X.call(this,G);A.pe([this,this.A01],this);},BoH:function(G){A.
_GetAutoObject(A.Device.Device).Awv(!A._GetAutoObject(A.Device.Device).Aqi);this.
Aod(this);},Aod:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E_();A._GetAutoObject(A.Device.Helper).Bpd(Be);if(A._GetAutoObject(A.Device.Device
).Aqi){var A2R=A._GetAutoObject(A.Device.Helper).AOU((F=this.Fl,F[1].call(F[0]))
,21600,true);Be.CY(A2R);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GL._Init.call(this,aArg);this.__proto__=C.AMb;var B;this.Dl(A.aaR(A.acf.
Av9));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A8S,B.Bby]);},_ReInit:function(
){C.GL._ReInit.call(this);this.Dl(A.aaR(A.acf.Av9));},_className:"Application::ActionListScreen"
};C.AMa={_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AMa;},
_className:"Application::ActionListFilterScreen"};C.APG={IS:null,IZ:null,Bb:null
,MO:A.jV,Init:function(aArg){var B;A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9G,B.A_6],0);A.zX([this,this.NC],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);},Dg:function(E){C.IQ.Dg.call(this,E);this.IZ.L(E);},DY:function(
G){C.IQ.DY.call(this,G);var AzH=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzH||A._GetAutoObject(A.Device.Helper).Arl(AzH))this.IS.Z(false);else this.IS.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq4())this.Aw_(((A._GetAutoObject(A.
Device.Helper).W.CR+1).toFixed()+AIQ)+A._GetAutoObject(A.Device.Device).An.B_().
toFixed());else this.Aw_(AIR);},Aw_:function(E){if(this.MO===E)return;this.MO=E;
this.IZ.R(E);},_Init:function(aArg){C.IQ._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IS={I:this},0);A.acg.Text._Init.call(this.IZ={I:this},0);A.acg.C9._Init.call(
this.Bb={I:this},0);this.__proto__=C.APG;this.HT.H(Bry);this.DT.H(Brz);this.IS.H(
BrA);this.IS.L(A.jb.Text);this.IZ.H(BaS);this.IZ.Ho(2);this.IZ.Lx(true);this.IZ.
A4(0x12);this.IZ.R(BaT);this.Bb.DE(Ato);this.Bb.DO(Alm);this.Bb.L(A.jb.Bb);this.
J(this.IS,0);this.J(this.IZ,0);this.J(this.Bb,0);this.IS.Ax(A.aaL(A.ach.AeI));this.
IZ.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IQ;this.
IS._Done();this.IZ._Done();this.Bb._Done();C.IQ._Done.call(this);},_ReInit:function(
){C.IQ._ReInit.call(this);this.IS._ReInit();this.IZ._ReInit();this.Bb._ReInit();
this.IZ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IQ._Mark.call(this,D);if((
B=this.IS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsN={Text:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Aj:function(Ae){var B;var F;C.O8.Aj.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xp);else this.Text.R(this.AC.Ge((F=this.Q,F[1].call(F[0]
))));var IG=((Ae&0x40)===0x40);if(IG)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsN;this.Text.R(Rt);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O8;this.Text._Done();C.O8.
_Done.call(this);},_ReInit:function(){C.O8._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O8._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Ari={C_:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Aj:function(Ae){var B;var F;C.O8.Aj.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.ADa(this.AC.D0((F=this.Q,F[1].call(F[
0])))));this.C_.Cx(this.AC.ADc(this.AC.D0((F=this.Q,F[1].call(F[0])))));}var IG=((
Ae&0x40)===0x40);if(IG)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O8._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ari;this.H(Atr);this.C_.H(AIP);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O8;this.C_._Done();C.O8._Done.call(this);},_ReInit:function(){C.O8._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O8._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au_={V3:null,DirectionOfCountingToString:null,Aen:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return-1;return aIndex;
},Ge:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return A.jV;return this.
DirectionOfCountingToString.BU(aIndex);},D0:function(A9){return A9;},H7:function(
){return this.Dv()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.V3)(F=
this.V3,F[2].call(F[0],E));},ADa:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv(
)))return null;return this.Aen.AsO(aIndex);},ADc:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dv()))return-1;return this.Aen.AsP(aIndex);},A2m:function(G){var F;
if(!!this.V3)this.Q=(F=this.V3,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Cb
,this.Cd],0);},Ae7:function(E){if(A.aaZ(this.V3,E))return;if(!!this.V3)A.z$([this
,this.A2m],this.V3,0);this.V3=E;if(!!this.V3)A.zX([this,this.A2m],this.V3,0);A.pe([
this,this.A2m],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aen._Init.call(this.Aen={I:this},0);this.__proto__=C.Au_;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aen._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aen._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.V3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMx={Hu:null,EB:null,AnimalIdGenerationMethodToString:
null,Ad4:null,Dv:function(){return 4;},C8:function(aIndex){var F;var A9=-1;if((aIndex<
0)||(aIndex>=this.Dv()))return-1;switch(aIndex){case 0:A9=0;break;case 1:A9=1;break;
case 2:A9=this.Bz9((F=this.EB,F[1].call(F[0])));break;case 3:A9=5;break;default:
throw new Error(BrB+aIndex.toFixed());}return A9;},Ge:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dv()))return A.jV;return this.AnimalIdGenerationMethodToString.
BU(this.C8(aIndex));},D0:function(A9){var aIndex=-1;switch(A9){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(BrC+A9.toFixed());}return aIndex;},H7:function(){return this.
Dv()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},ADa:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return null;
return this.Ad4.AsO(this.C8(aIndex));},ADc:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dv()))return-1;return this.Ad4.AsP(this.C8(aIndex));},A1Q:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.Cb
,this.Cd],0);},Bmz:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1Q],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1Q],this.Hu,0);A.pe([
this,this.A1Q],this);},Uw:function(E){if(A.aaZ(this.EB,E))return;if(!!this.EB)A.
z$([this,this.Agh],this.EB,0);this.EB=E;if(!!this.EB)A.zX([this,this.Agh],this.EB
,0);A.pe([this,this.Agh],this);},Agh:function(G){A.pe([this,this.ByW],this);},Bz9:
function(Mb){var Rv=0;switch(Mb){case 0:Rv=2;break;case 1:Rv=3;break;case 2:Rv=4;
break;default:throw new Error(BrD+Mb.toFixed());}return Rv;},ByW:function(G){var
Be7=this.C8(this.D0(this.Q));if(this.Q!==Be7)this.Au(Be7);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Ad4._Init.call(this.
Ad4={I:this},0);this.__proto__=C.AMx;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Ad4._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Ad4._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EB)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGR={FP:null,Aa$:null,Q:null,Fk:null,Fa:null,HI:null,WC:null,AW:null,H3:null
,Kr:null,A8:0,AM:0,Aly:0,Init:function(aArg){var B;A.zX([this,this.Bfi],[B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoA],0);},Aj:function(Ae){C.Ei.Aj.call(this,Ae);if(this.
A8===1){if(this.Hm){this.AW.FS(A.jb.CL);this.HI.CW(A.jb.CL);this.WC.CW(A.jb.CL);
this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.AW.FS(A.jb.CV);this.HI.
CW(A.jb.CV);this.WC.CW(A.jb.CV);this.Background.L(A.jb.CL);this.V.L(A.jb.Text);}
}else{if(this.Hm){this.AW.FS(A.jb.CL);this.HI.CW(A.jb.CL);this.WC.CW(A.jb.CL);}else{
this.AW.FS(A.jb.CV);this.HI.CW(A.jb.CV);this.WC.CW(A.jb.CV);}this.Ba(null);}},H0:
function(G){C.Ei.H0.call(this,G);if(!this.A8)this.F_(this);else this.He(this);},
DL:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(
F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;}break;
default:this.FP.AkR((F=this.N,F[1].call(F[0])));}},F_:function(G){this.Ey(1);},He:
function(G){this.Ey(0);},Ey:function(EO){var F;if(!this.A8&&!!this.N)this.FP.AjC((
F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>1)this.
A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{if(this.AW.A9c())this.Ba(
this.AW);else this.Ba(this.WC);if(!this.AM)this.AW.SY(2);else this.AW.SY(7);}break;
default:throw new Error(Ats+this.A8.toFixed());}this.DL(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},C6:function(G
){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uo,this.
By],0);}},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ox:function(G){this.ABl(2);},M8:function(G){this.ABl(
7);},ABl:function(GC){var B;var AzI=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzI){var AAy=(A.Core.P.isPrototypeOf(B=this.QM(AzI,GC,0x15))?B:null);if(!!AAy){
this.Ba(AAy);return true;}}return false;},Ao4:function(G){A.pe([this,this.Bfi],this
);},A4N:function(G){var B;var F;if(!this.H3.Hu){this.Kr.Ae7(null);return;}switch((
F=this.H3.Hu,F[1].call(F[0]))){case 0:case 1:this.Kr.Ae7(null);break;case 3:this.
Kr.Ae7([B=A._GetAutoObject(A.Device.Device),B.ASL,B.A0I]);break;case 2:this.Kr.Ae7([
B=A._GetAutoObject(A.Device.Device),B.ASM,B.A0J]);break;case 4:case 5:this.Kr.Ae7([
B=A._GetAutoObject(A.Device.Device),B.AER,B.AI2]);break;default:throw new Error(
BrE+(F=this.H3.Hu,F[1].call(F[0])).toFixed());}},Bfi:function(G){var F;if(!this.
H3.Hu)return;A.pe([this,this.A4N],this);var At7=false;switch((F=this.H3.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At7=true;this.AW.A$m(-1);}break;case 0:
case 1:{At7=false;this.AW.A$m(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyG+(F=this.H3.Hu,F[1].call(F[0])).toFixed());}this.AW.As(At7);this.
HI.As(At7);this.HI.Z(At7);if(((F=this.H3.Hu,F[1].call(F[0]))!==this.Aly)||(At7===
false)){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.Helper).AMv((F=this.H3.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BQ){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bkl((F=this.H3.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.KA(A._GetAutoObject(A.Device.Device).A3);else this.AW.KA(0);this.Aly=(
F=this.H3.Hu,F[1].call(F[0]));},A_b:function(E){var B;if(this.Aa$===E)return;if(
!!this.Aa$){A.z$([this,this.Ao4],[B=this.Aa$,B.WI,B.J4],0);A.z$([this,this.Ao4],[
B=this.Aa$,B.Any,B.Nt],0);A.z$([this,this.Ao4],[B=this.Aa$,B.AnA,B.Nv],0);this.H3.
Uw(null);}this.Aa$=E;if(!!E){A.zX([this,this.Ao4],[B=this.Aa$,B.WI,B.J4],0);A.zX([
this,this.Ao4],[B=this.Aa$,B.Any,B.Nt],0);A.zX([this,this.Ao4],[B=this.Aa$,B.AnA
,B.Nv],0);this.H3.Uw([B=this.Aa$,B.WI,B.J4]);}if(!!E)A.pe([this,this.Ao4],this);
},Uo:function(){return this.AM;},_Init:function(aArg){C.Ei._Init.call(this,aArg);
A.Core.BG._Init.call(this.Fk={I:this},0);A.Core.BG._Init.call(this.Fa={I:this},0
);C.Ari._Init.call(this.HI={I:this},0);C.Ari._Init.call(this.WC={I:this},0);C.AvV.
_Init.call(this.AW={I:this},0);C.AMx._Init.call(this.H3={I:this},0);C.Au_._Init.
call(this.Kr={I:this},0);this.__proto__=C.AGR;var B;this.H(Aap);this.V.As(false);
this.V.R(Ath);this.V.L(A.jb.Bm);this.Fk.Filter=6;this.Fa.Filter=7;this.HI.H(BrF);
this.HI.As(false);this.WC.H(BrG);this.AW.H(BrH);this.AW.As(false);this.J(this.HI
,0);this.J(this.WC,0);this.J(this.AW,0);this.FP=A._NewObject(C.AeA,0);this.Fk.BH=[
this,this.Ox];this.Fa.BH=[this,this.M8];this.HI.CH(this.Kr);this.HI.Au([B=this.Kr
,B.Cb,B.Cd]);this.WC.CH(this.H3);this.WC.Au([B=this.H3,B.Cb,B.Cd]);this.AW.Au([this
,this.Uo,this.By]);this.H3.Bmz([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Fk._Done();this.Fa.
_Done();this.HI._Done();this.WC._Done();this.AW._Done();this.H3._Done();this.Kr.
_Done();C.Ei._Done.call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.
Fk._ReInit();this.Fa._ReInit();this.HI._ReInit();this.WC._ReInit();this.AW._ReInit(
);this.H3._ReInit();this.Kr._ReInit();},_Mark:function(D){var B;C.Ei._Mark.call(
this,D);if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WC)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={Az0:null,Fk:null,Fa:null,G2:null,
Gd:null,EN:null,Ng:0,AM$:0,ACf:0,UC:0,BaE:-1,AM_:false,Init:function(aArg){A.pe([
this,this.A1c],this);},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.EN.Z(this.
AM_);this.EN.H(A.wC(this.YB(this.ACf).M,this.YB((this.ACf+this.AM$)-1).M));},Ox:
function(G){var D8=(A.Core.BG.isPrototypeOf(G)?G:null);var A15=this.BgQ(2);if(A15===
false)D8.Mz=true;},M8:function(G){var D8=(A.Core.BG.isPrototypeOf(G)?G:null);var
A15=this.BgQ(7);if(A15===false)D8.Mz=true;},BgQ:function(GC){var B;var DW=(C.DH.
isPrototypeOf(B=this.AV)?B:null);DW=this.Bd9(DW,GC,true);if(!!DW){this.Ba(DW);this.
Az0=(C.DH.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adz:function(
G){A.ab5("%s",Alh);},GY:function(s){this.Adz(s);},FS:function(E){if(this.Ng===E)
return;this.Ng=E;this.Gd.CW(E);this.G2.CW(E);},SY:function(GC){var B;switch(GC){
case 2:this.Ba(this.G2);break;case 7:this.Ba(this.Gd);break;default:A.ab5("%s%e"
,BrI,GC);}this.Az0=(C.DH.isPrototypeOf(B=this.AV)?B:null);},LY:function(G){},A1c:
function(s){this.LY(s);},AFc:function(E){if(this.AM_===E)return;this.AM_=E;this.
Am();},A_h:function(E){if(this.AM$===E)return;this.AM$=E;this.Am();},A_g:function(
E){if(this.ACf===E)return;this.ACf=E;this.Am();},YB:function(HB){var B8=null;switch(
HB){case-1:case 0:B8=this.Gd;break;case 1:B8=this.G2;break;default:A.ab5("%s",Ah4
);}return B8;},KA:function(E){if(this.UC===E)return;this.UC=E;this.Ams();},Ams:function(
){A.ab5("%s",Alh);},Bd9:function(Ac7,GC,LQ){var B;if(!!Ac7){var Be;if(LQ)Be=0x11;
else Be=0x0;switch(GC){case 2:Ac7=(C.DH.isPrototypeOf(B=this.AqS(Ac7,Be))?B:null
);break;case 7:Ac7=(C.DH.isPrototypeOf(B=this.TX(Ac7,Be))?B:null);break;default:
throw new Error(BrJ);}}return Ac7;},A$m:function(E){if(this.BaE===E)return;this.
BaE=E;var DW=this.Gd;var A2u;while(!!DW){A2u=!!E;DW.As(A2u);DW.Z(A2u);if(DW===this.
Az0)this.Ba(DW);DW=this.Bd9(DW,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BG._Init.call(this.Fk={I:this},0);A.Core.BG._Init.
call(this.Fa={I:this},0);C.DH._Init.call(this.G2={I:this},0);C.DH._Init.call(this.
Gd={I:this},0);A.acg.BY._Init.call(this.EN={I:this},0);this.__proto__=C.G5;this.
H(BrK);this.Fk.Filter=6;this.Fa.Filter=7;this.Ng=A.jb.CL;this.G2.H(E7);this.Gd.H(
BaU);this.EN.H(BrL);this.EN.Nx(2);this.EN.L(A.jb.E2);this.J(this.G2,0);this.J(this.
Gd,0);this.J(this.EN,0);this.Fk.BH=[this,this.Ox];this.Fk.D3=[this,this.Ox];this.
Fa.BH=[this,this.M8];this.Fa.D3=[this,this.M8];this.Az0=this.Gd;this.G2.Dk=[this
,this.GY];this.Gd.Dk=[this,this.GY];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fk._Done();this.Fa._Done();this.G2._Done();this.Gd._Done();this.EN.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fk._ReInit();this.Fa._ReInit();this.G2._ReInit();this.Gd._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Az0)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARm={DB:null,CX:null,Cw:null
,FS:function(E){if(this.Ng===E)return;C.HM.FS.call(this,E);this.Cw.CW(E);this.CX.
CW(E);this.DB.CW(E);},YB:function(HB){var B8=null;switch(HB){case-1:case 0:B8=this.
Gd;break;case 1:B8=this.Cw;break;case 2:B8=this.CX;break;case 3:B8=this.DB;break;
case 4:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;},_Init:function(aArg
){C.HM._Init.call(this,aArg);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(
this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARm;this.
H(BrM);this.G2.H(Aln);this.DB.H(BaV);this.CX.H(BaW);this.Cw.H(BaX);this.Gd.H(BrN
);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);this.DB.Dk=[this,this.
GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HM;this.DB._Done();this.CX._Done();this.Cw._Done();C.HM._Done.call(this
);},_ReInit:function(){C.HM._ReInit.call(this);this.DB._ReInit();this.CX._ReInit(
);this.Cw._ReInit();},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.
DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVX={Re:null,AcP:null,AVW:0,CC:function(G){this.AcP.As(true);},E4:function(G
){this.AcP.As(false);},Bor:function(E){if(this.AVW===E)return;this.AVW=E;this.Re.
R((((A.aaR(A.acf.AVV)+AcZ)+E.toFixed())+BrO)+A.aaR(A.acf.Lh));},Bmk:function(){return this.
AVW;},BB2:function(G){A._GetAutoObject(C.A5).Cc(3);A._GetAutoObject(A.Device.Device
).AnC(1);},_Init:function(aArg){C.X$._Init.call(this,aArg);C.CG._Init.call(this.
Re={I:this},0);A.acl.Gp._Init.call(this.AcP={I:this},0);this.__proto__=C.AVX;this.
AeU.H(BrP);this.UJ.R(A.jV);this.Re.H(BrQ);this.Re.R(A.aaR(A.acf.AVV)+BaY);this.Re.
L(A.jb.Text);this.AcP.HP(1);this.AcP.Fq(5000);this.AcP.B4=100;this.J(this.Re,0);
this.Re.S(A.aaL(A.fl.Af));this.Re.AY(A.aaL(A.fl.Ak));this.Re.Cm(A.aaL(A.fl.Bg));
this.AcP.SL=[this,this.BB2];this.AcP.Q=[this,this.Bmk,this.Bor];},_Done:function(
){this.__proto__=C.X$;this.Re._Done();this.AcP._Done();C.X$._Done.call(this);},_ReInit:
function(){C.X$._ReInit.call(this);this.Re._ReInit();this.AcP._ReInit();this.Re.
R(A.aaR(A.acf.AVV)+BaY);this.Re.S(A.aaL(A.fl.Af));this.Re.AY(A.aaL(A.fl.Ak));this.
Re.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.X$._Mark.call(this,D);if((B=this.
Re)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcP)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASg={K_:null,Lp:null,BeW:false,Init:
function(aArg){this.Ba(this.Db);},Ex:function(G){var B;if(!!this.K_)this.K_.Ex(this
);C.WE.Ex.call(this,G);},Agl:function(G){var B;if(!!this.K_)this.K_.Agl(this);C.
WE.Agl.call(this,G);},CC:function(G){var B;if(!this.BeW){this.BeW=true;A.pe([this
,this.A4g],this);}else if(!this.K_){this.K_=A._NewObject(C.ASi,0);this.K_.A_w([this
,this.ABa]);this.LY(this);this.K_.LY(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ex(this);else C.WE.CC.call(this,G);}else C.WE.CC.call(this,G
);},Ap8:function(G){var B;if(!!this.K_)this.K_.Ap8(this);},ABa:function(G){var B;
var F;this.LY(this);this.K_.LY(this);A.pe([this,this.Ac0],this);var Bex=this.L5;
this.Ae4(A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVU(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bex);if(Bex)A._GetAutoObject(
A.Device.Helper).W.Nv(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SS(A._GetAutoObject(A.Device.Helper).AMv((F=this.Dj.H3.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JR(this.Db);},A4g:function(
G){A._GetAutoObject(C.A5).Cc(79);},_Init:function(aArg){C.WE._Init.call(this,aArg
);C.Rd._Init.call(this.Lp={I:this},0);this.__proto__=C.ASg;var B;this.Lp.H(Ali);
this.Lp.Ai(true);this.Lp.T(A.aaR(A.acf.ACG));this.Iu(this.Gq,-1);this.J(this.Lp,-
8);this.Lp.FT([this,this.D2,this.Gu]);this.Lp.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASV,B.AnL]);this.Init(aArg);},_Done:function(){this.__proto__=C.WE;this.Lp.
_Done();C.WE._Done.call(this);},_ReInit:function(){C.WE._ReInit.call(this);this.
Lp._ReInit();this.Lp.T(A.aaR(A.acf.ACG));},_Mark:function(D){var B;C.WE._Mark.call(
this,D);if((B=this.K_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD5={AgT:null,AgU:null,NW:null,NV:null,ET:null,Gc:null,Er:null,DB:null,CX:null,Cw:
null,FS:function(E){if(this.Ng===E)return;C.Ll.FS.call(this,E);this.Cw.CW(E);this.
CX.CW(E);this.DB.CW(E);this.Er.CW(E);this.Gc.CW(E);this.ET.CW(E);this.NV.CW(E);this.
NW.CW(E);this.AgU.CW(E);this.AgT.CW(E);},YB:function(HB){var B8=null;switch(HB){
case-1:case 0:B8=this.Gd;break;case 1:B8=this.Cw;break;case 2:B8=this.CX;break;case
3:B8=this.DB;break;case 4:B8=this.Er;break;case 5:B8=this.Gc;break;case 6:B8=this.
ET;break;case 7:B8=this.NV;break;case 8:B8=this.NW;break;case 9:B8=this.AgU;break;
case 10:B8=this.AgT;break;case 11:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;
},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DH._Init.call(this.AgT={I:this
},0);C.DH._Init.call(this.AgU={I:this},0);C.DH._Init.call(this.NW={I:this},0);C.
DH._Init.call(this.NV={I:this},0);C.DH._Init.call(this.ET={I:this},0);C.DH._Init.
call(this.Gc={I:this},0);C.DH._Init.call(this.Er={I:this},0);C.DH._Init.call(this.
DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.AD5;this.H(BrR);this.G2.H(AIS);this.AgT.H(AyP);this.AgU.H(
A0p);this.NW.H(A0q);this.NV.H(A0r);this.ET.H(A0s);this.Gc.H(A0t);this.Er.H(A0u);
this.DB.H(BaZ);this.CX.H(A0v);this.Cw.H(BrS);this.Gd.H(BrT);this.J(this.AgT,-2);
this.J(this.AgU,-2);this.J(this.NW,-2);this.J(this.NV,-2);this.J(this.ET,-2);this.
J(this.Gc,-2);this.J(this.Er,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.
Cw,-2);this.AgT.Dk=[this,this.GY];this.AgU.Dk=[this,this.GY];this.NW.Dk=[this,this.
GY];this.NV.Dk=[this,this.GY];this.ET.Dk=[this,this.GY];this.Gc.Dk=[this,this.GY
];this.Er.Dk=[this,this.GY];this.DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];
this.Cw.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.Ll;this.AgT._Done(
);this.AgU._Done();this.NW._Done();this.NV._Done();this.ET._Done();this.Gc._Done(
);this.Er._Done();this.DB._Done();this.CX._Done();this.Cw._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.AgT._ReInit();this.AgU._ReInit(
);this.NW._ReInit();this.NV._ReInit();this.ET._ReInit();this.Gc._ReInit();this.Er.
_ReInit();this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit();},_Mark:function(
D){var B;C.Ll._Mark.call(this,D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Er)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HM={Q:null,AM:0,Aj:function(Ae){C.G5.Aj.call(this
,Ae);this.Ams();},Adz:function(G){var B;var F;var IE=A.jV;var B8=this.G2;while(!
!B8){if(B8.EA>0)IE=IE+B8.EA.toFixed();else IE=IE+String.fromCharCode(0x30);B8=(C.
DH.isPrototypeOf(B=this.TX(B8,0x11))?B:null);}var BQ=this.AM;this.By(A.wz(IE,-1,
10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LY:function(G){},Ams:function(){var B;var F;if(!!this.Q){var DW=this.Gd;
var AdI=this.UC;var A9=(F=this.Q,F[1].call(F[0]));while(!!DW){if(A9>0){DW.L_(A9%
10);A9=(A9/10)|0;}else if(AdI>0)DW.L_(0);else DW.L_(-1);DW=(C.DH.isPrototypeOf(B=
this.AqS(DW,0x11))?B:null);AdI=AdI-1;}}},C6:function(G){var F;if(!!this.Q)this.By((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)
A.pe([this,this.C6],this);},By:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HM;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Ll={AM:0,Q:null
,Aj:function(Ae){C.G5.Aj.call(this,Ae);this.Ams();},Adz:function(G){var B;var F;
var IE=A.jV;var B8=this.G2;while(!!B8){if(B8.EA>0)IE=IE+B8.EA.toFixed();else IE=
IE+String.fromCharCode(0x30);B8=(C.DH.isPrototypeOf(B=this.TX(B8,0x11))?B:null);
}var BQ=this.AM;this.By(A.ab0(IE,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LY:function(G){},Ams:function(){var B;
var F;if(!!this.Q){var DW=this.Gd;var AdI=this.UC;var A9=(F=this.Q,F[1].call(F[0
]));while(!!DW){if(A9>0){DW.L_((A9%10)|0);A9=Math.trunc(A9/10);}else if(AdI>0)DW.
L_(0);else DW.L_(-1);DW=(C.DH.isPrototypeOf(B=this.AqS(DW,0x11))?B:null);AdI=AdI-
1;}}},C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);},By:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G5._Init.call(
this,aArg);this.__proto__=C.Ll;},_Mark:function(D){var B;C.G5._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dv:function(){return 2;
},C8:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Ge:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvV={Er:null,DB:null,CX:null,Cw:null,FS:function(E){if(this.Ng===E)return;C.
HM.FS.call(this,E);this.Cw.CW(E);this.CX.CW(E);this.DB.CW(E);this.Er.CW(E);},YB:
function(HB){var B8=null;switch(HB){case-1:case 0:B8=this.Gd;break;case 1:B8=this.
Cw;break;case 2:B8=this.CX;break;case 3:B8=this.DB;break;case 4:B8=this.Er;break;
case 5:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;},_Init:function(aArg
){C.HM._Init.call(this,aArg);C.DH._Init.call(this.Er={I:this},0);C.DH._Init.call(
this.DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={
I:this},0);this.__proto__=C.AvV;this.H(Ayz);this.G2.H(AHX);this.Er.H(AHY);this.DB.
H(AHZ);this.CX.H(AH0);this.Cw.H(AH1);this.Gd.H(AH2);this.EN.H(Ba0);this.J(this.Er
,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);this.Er.Dk=[this,this.
GY];this.DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY
];},_Done:function(){this.__proto__=C.HM;this.Er._Done();this.DB._Done();this.CX.
_Done();this.Cw._Done();C.HM._Done.call(this);},_ReInit:function(){C.HM._ReInit.
call(this);this.Er._ReInit();this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit(
);},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.Er)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AU3={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BpF(0);this.AttributeSet.BpG(1);this.AttributeSet.BpH(4);},Aj:function(Ae){var B;
C.BW.Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var IG=((
Ae&0x40)===0x40);var GG=this.Bo.Bw;var FY=A.jb.CL;var GZ=A.jb.Text;if(this.Hm){FY=
A.jb.Bm;GZ=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CV);this.V.L(A.jb.CL);this.
AttributeSet.Ahs(A.jb.CL);}else if(GG){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahs(A.jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahs(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.
Am8);this.V.L(A.jb.Bm);this.AttributeSet.Ahs(A.jb.Bm);}else{this.Background.L(FY
);this.V.L(GZ);this.AttributeSet.Ahs(GZ);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;this.
Apk=IG;},Hn:function(G){var B;var Gk=this.DC.G6;var CA=(A.acg.AuY.isPrototypeOf(
B=this.DC.Cj)?B:null);CA.A_d(this.AttributeSet);CA.A4(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.Bz0(this.AC.Ge(Gk)));else CA.R(Xp);CA.H(A.abK(CA.M,[this.DC.Wk,(B=this.
DC.M)[3]-B[1]]));},Bz0:function(Byl){var AAW=Byl;AAW=A._GetAutoObject(A.Device.Helper
).MR(AAW,BrU,BrV);AAW=A._GetAutoObject(A.Device.Helper).MR(AAW,BrW,BrX);return BrY+
AAW;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AU3;this.DC.H(BrZ);this.DC.JF(2);
this.DC.N_(A.acg.AuY);this.AttributeSet.Ahs(this.V.AR);this.AttributeSet.Bni(A.aaL(
A.fl.AOL));this.AttributeSet.A_H(A.aaL(A.fl.Ak));this.AttributeSet.Ahv(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_H(A.aaL(A.fl.Ak));this.AttributeSet.Ahv(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsD._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Ds(C.ADv);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dv:function(){return 14;},C8:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Ge:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BU(aIndex
);},D0:function(A9){return A9;},H7:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.O1={FP:null,EnumToCodeset:
null,JD:null,A8:0,Number:0,Aj:function(Ae){C.BW.Aj.call(this,Ae);if(this.A8===1){
if(this.Hm){this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CL);this.V.L(A.jb.Text);}}},By:function(E){C.BW.By.call(this,E);var BA0=this.
EnumToCodeset.AmK(this.Number);var Be6=this.AC.C8(this.AM);if(BA0!==Be6){this.AFL(
this.EnumToCodeset.Aeq(Be6));A.abo([this,this.ASW,this.AFL],0);}},DL:function(G){
var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C4(A.
aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[
this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;}break;default:
this.FP.AkR((F=this.N,F[1].call(F[0])));}},F_:function(G){this.Ey(1);},He:function(
G){this.Ey(0);},Ey:function(EO){var F;if(!this.A8)this.FP.AjC((F=this.N,F[1].call(
F[0])));this.A8=EO;if((this.A8<0)||(this.A8>1))this.A8=0;this.DL(this);if(!this.
A8)this.Ba(null);else this.A2H();this.Am();},AFL:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aq0()>E)E=this.EnumToCodeset.
Aq0();if(this.EnumToCodeset.H7()<E)E=this.EnumToCodeset.H7();}this.Number=E;var BQ=
this.AM;if(!!this.EnumToCodeset){var BzN=this.EnumToCodeset.AmK(E);this.By(this.
AC.D0(BzN));if(this.AM!==BQ){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C8(this.AM)));A.abo(this.Q,0);}}},AnE:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vj:function(G){this.Ey(this.A8+1);},A2H:function(){A.ab5(
"%s",Br0);},ASW:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BG._Init.call(this.JD={I:this},0);this.__proto__=C.O1;this.
JD.Filter=1;this.FP=A._NewObject(C.AeA,0);this.JD.BH=[this,this.Vj];},_Done:function(
){this.__proto__=C.BW;this.JD._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.JD._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JD)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Ae1={Text:null,Aj:function(
Ae){C.En.Aj.call(this,Ae);this.Text.L(this.AC7);},By:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rl(this.AM));this.
Am();},AaR:function(G){A.pe([this,this.Agg],this);},AaP:function(G){A.pe([this,this.
Agg],this);},Al5:function(G){A.pe([this,this.Agg],this);},Agg:function(G){if((!this.
In||!this.A3)||!this.AF)return;},_Init:function(aArg){C.En._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ae1;this.Text.A1(0x3F
);this.Text.H(Atb);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.En;this.Text._Done();C.En.
_Done.call(this);},_ReInit:function(){C.En._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.En._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR$={GK:0,B7:null,AW:null,E$:null,
Jd:null,CountryToString:null,Lf:0,Mi:false,Init:function(aArg){A.zX([this,this.MX
],[this,this.SM,this.Lv],0);},Aj:function(Ae){C.En.Aj.call(this,Ae);this.Jd.Z(this.
Afv);this.AW.FS(this.L1);this.E$.CW(this.L1);this.Jd.CW(this.L1);},DL:function(G
){var F;if(!this.N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BU(this.Lf));(F=this.N,
F[1].call(F[0])).Ce=null;}break;default:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.
E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;}}},Ey:function(EO){var Tv=this.
A8;this.A8=EO;if(this.A8<0)this.A8=0;else if(this.A8>this.RP)this.A8=this.RP;if((
this.A8===1)&&!this.Afv)this.A8=2;switch(this.A8){case 0:{this.Ba(null);if(!this.
GK)this.Lv(0);}break;case 1:this.Ba(this.Jd);break;case 2:this.Ba(this.E$);break;
case 3:{this.Ba(this.AW);if(!this.GK||(Tv>0))this.AW.SY(2);else this.AW.SY(7);}break;
default:throw new Error(Ats+this.A8.toFixed());}C.En.Ey.call(this,this.A8);},Aps:
function(G){this.Jd.Uw(this.EB);},AaR:function(G){var F;this.AW.A_g((F=this.AF,F[
1].call(F[0])));},AaP:function(G){var F;this.AW.A_h((F=this.A3,F[1].call(F[0])));
},By:function(E){if(this.AM===E)return;this.AM=E;this.Mi=true;this.SP(A._GetAutoObject(
A.Device.Helper).TW(E,0,12));this.Lv(A._GetAutoObject(A.Device.Converter).Ta(E));
this.Mi=false;if(!!E)this.AW.KA(12);else this.AW.KA(0);this.Am();},Al5:function(
G){A.pe([this,this.Agg],this);},F_:function(G){var F;if(!this.AM){var BQ=this.AM;
this.By(A._GetAutoObject(A.Device.Helper).ADk());if(this.AM!==BQ){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ey(3);},AjO:function(){return this.
GK;},AjQ:function(){return 999999999999;},Lv:function(E){if(this.Lf===E)return;this.
Lf=E;if(this.Mi===false)A.pe([this,this.Vx],this);A.abo([this,this.SM,this.Lv],0
);},SP:function(E){if(this.GK===E)return;this.GK=E;if(this.Mi===false)A.pe([this
,this.Vx],this);A.abo([this,this.Ab7,this.SP],0);},Vx:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqF(this.Lf),3,10)+A.abm(this.GK,12,10
);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agg:function(G){var F;if((!this.In||
!this.A3)||!this.AF)return;if(!(F=this.In,F[1].call(F[0])))this.AW.AFc(true);else
this.AW.AFc(false);},SM:function(){return this.Lf;},Ab7:function(){return this.GK;
},_Init:function(aArg){C.En._Init.call(this,aArg);C.B7._Init.call(this.B7={I:this
},0);C.AD5._Init.call(this.AW={I:this},0);C.AsN._Init.call(this.E$={I:this},0);C.
Jd._Init.call(this.Jd={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR$;var B;this.RP=3;this.AW.H(Br1);this.E$.H(Ba1);this.
Jd.H(Ba2);this.J(this.AW,0);this.J(this.E$,0);this.J(this.Jd,0);this.B7.AwH([this
,this.SM,this.Lv]);this.AW.Au([this,this.Ab7,this.SP]);this.E$.CH(this.B7);this.
E$.Au([B=this.B7,B.Cb,B.Cd]);this.Jd.A_A([B=A._GetAutoObject(A.Device.Device),B.
Awi,B.AyX]);this.Init(aArg);},_Done:function(){this.__proto__=C.En;this.B7._Done(
);this.AW._Done();this.E$._Done();this.Jd._Done();this.CountryToString._Done();C.
En._Done.call(this);},_ReInit:function(){C.En._ReInit.call(this);this.B7._ReInit(
);this.AW._ReInit();this.E$._ReInit();this.Jd._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.En._Mark.call(this,D);if((B=this.B7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR_={GK:0,B7:null,AW:null,YQ:null,Kw:null,E$:null,Jd:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PD:0,Lf:0,Mi:false,Init:function(aArg){A.
zX([this,this.MX],[this,this.PX,this.ED],0);A.zX([this,this.MX],[this,this.SM,this.
Lv],0);A.zX([this,this.MX],[this,this.Anw,this.Ahw],0);},Aj:function(Ae){C.En.Aj.
call(this,Ae);this.Jd.Z(this.Afv);this.AW.FS(this.L1);this.YQ.FS(this.L1);this.Kw.
FS(this.L1);this.E$.CW(this.L1);this.Jd.CW(this.L1);},DL:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C4(A.aaL(
A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BU(this.Lf));(F=this.N,F[1].call(F[0]
)).Ce=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG0)+A.aaR(A.acf.Colon))+AcZ)+A.aaR(A.
acf.Bif));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG0)+A.aaR(A.
acf.Colon))+AcZ)+A.aaR(A.acf.BpK));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AG0)+A.aaR(A.acf.Colon))+AcZ)+A.aaR(A.acf.Bjg));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG0)+A.aaR(A.acf.Colon))+AcZ)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ce=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0]
)).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0
])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EW)+Ayo)+this.GermanStateToString.LC(
A._GetAutoObject(A.Device.Converter).AC_(this.PD)));(F=this.N,F[1].call(F[0])).Ce=
null;}break;default:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[
1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[
1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Ce=null;}}},Ey:function(EO){var Tv=this.A8;if(EO<
0)EO=0;else if(EO>this.RP)EO=this.RP;if((EO===1)&&!this.Afv)EO=2;switch(EO){case
0:{this.Ba(null);if((!this.GK&&!this.AnimalType)&&!this.PD)this.Lv(0);}break;case
1:this.Ba(this.Jd);break;case 2:this.Ba(this.E$);break;case 3:if(!Tv)A.pe([this,
this.BCe],this);else this.Ba(this.YQ);break;case 4:this.Ba(this.Kw);break;case 5:
if(((Tv===4)&&!this.PD)&&!this.GK)return;else{this.Ba(this.AW);if(!this.GK||(Tv>
0))this.AW.SY(2);else this.AW.SY(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A8=EO;C.En.Ey.call(this,this.A8);},By:function(E){if(this.AM===E)return;
this.AM=E;this.Mi=true;this.SP(A._GetAutoObject(A.Device.Helper).TW(E,0,8));this.
Ahw(A._GetAutoObject(A.Device.Converter).Bar(E));this.ED(A._GetAutoObject(A.Device.
Converter).Baq(E));this.Lv(A._GetAutoObject(A.Device.Converter).Ta(E));this.Mi=false;
if(!!this.AM){this.YQ.KA(2);this.Kw.KA(2);this.AW.KA(8);}else{this.YQ.KA(0);this.
Kw.KA(0);this.AW.KA(0);}this.Am();},Aps:function(G){this.Jd.Uw(this.EB);},AaR:function(
G){var F;this.AW.A_g((F=this.AF,F[1].call(F[0])));},AaP:function(G){var F;this.AW.
A_h((F=this.A3,F[1].call(F[0])));},Al5:function(G){A.pe([this,this.Agg],this);},
F_:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(A.Device.
Helper).ADk());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ey(3);}else this.Ey(this.RP);},AjO:function(){return this.GK;
},AjQ:function(){return 99999999;},Lv:function(E){if(this.Lf===E)return;this.Lf=
E;if(this.Mi===false)A.pe([this,this.Vx],this);A.abo([this,this.SM,this.Lv],0);}
,SP:function(E){if(this.GK===E)return;this.GK=E;if(this.Mi===false)A.pe([this,this.
Vx],this);A.abo([this,this.Ab7,this.SP],0);},Vx:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqF(this.Lf),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PD,2,10))+A.abm(this.GK,8,10);var BQ=this.AM;this.By(A.ab0(aString
,0,10));if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agg:function(G){var F;if((!this.In||!this.A3)||!this.AF)return;if(!(F=this.
In,F[1].call(F[0])))this.AW.AFc(true);else this.AW.AFc(false);},ED:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mi===false)A.pe([this,this.
Vx],this);A.abo([this,this.PX,this.ED],0);},Ahw:function(E){if(this.PD===E)return;
this.PD=E;if(this.Mi===false)A.pe([this,this.Vx],this);A.abo([this,this.Anw,this.
Ahw],0);},BCe:function(G){var F;if(!!this.JV){var Ig=(F=this.JV,F[1].call(F[0]));
var A1R=0;switch(Ig){case 0:case 1:A1R=0;break;case 2:A1R=1;break;default:A.ab5(
"%s%e",Alg,Ig);}this.ED(A1R);}if(!this.PD)this.Ey(4);else this.Ey(5);},SM:function(
){return this.Lf;},Ab7:function(){return this.GK;},PX:function(){return this.AnimalType;
},Anw:function(){return this.PD;},_Init:function(aArg){C.En._Init.call(this,aArg
);C.B7._Init.call(this.B7={I:this},0);C.ARn._Init.call(this.AW={I:this},0);C.AvU.
_Init.call(this.YQ={I:this},0);C.AvU._Init.call(this.Kw={I:this},0);C.AsN._Init.
call(this.E$={I:this},0);C.Jd._Init.call(this.Jd={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR_;var B;this.RP=5;this.AW.H(
Br2);this.YQ.H(Br3);this.YQ.EV(2);this.Kw.H(Br4);this.Kw.EV(16);this.E$.H(Ba1);this.
Jd.H(Ba2);this.J(this.AW,0);this.J(this.YQ,0);this.J(this.Kw,0);this.J(this.E$,0
);this.J(this.Jd,0);this.B7.AwH([this,this.SM,this.Lv]);this.AW.Au([this,this.Ab7
,this.SP]);this.YQ.Au([this,this.PX,this.ED]);this.Kw.Au([this,this.Anw,this.Ahw
]);this.E$.CH(this.B7);this.E$.Au([B=this.B7,B.Cb,B.Cd]);this.Jd.A_A([B=A._GetAutoObject(
A.Device.Device),B.Awi,B.AyX]);this.Init(aArg);},_Done:function(){this.__proto__=
C.En;this.B7._Done();this.AW._Done();this.YQ._Done();this.Kw._Done();this.E$._Done(
);this.Jd._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.En._Done.call(this);},_ReInit:function(){C.En._ReInit.call(this);this.B7._ReInit(
);this.AW._ReInit();this.YQ._ReInit();this.Kw._ReInit();this.E$._ReInit();this.Jd.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.En._Mark.call(this,D);if((B=this.B7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.En={AM:0,Awu:null,OO:null,
Q:null,EB:null,A3:null,AF:null,In:null,N:null,JV:null,Fk:null,Fa:null,AC7:0,L1:0
,A8:0,RP:0,Afv:true,Init:function(aArg){A.pe([this,this.LY],this);},Aj:function(
Ae){A.Core.P.Aj.call(this,Ae);if(!this.A8)this.Ba(null);},Bnk:function(E){if(this.
AC7===E)return;this.AC7=E;this.Am();},WM:function(E){if(this.L1===E)return;this.
L1=E;this.Am();},DL:function(G){A.ab5("%s",Alh);},MX:function(s){this.DL(s);},Ey:
function(EO){A.pe([this,this.MX],this);A.pe(this.Awu,this);if(!EO)A.pe(this.OO,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],this);}
,C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].call(F[0])));},By:function(
E){A.ab5("%s",Aoz);},Ox:function(G){if(this.A8>1)this.Ey(this.A8-1);},M8:function(
G){if((this.A8>0)&&(this.A8<this.RP))this.Ey(this.A8+1);},Uw:function(E){if(A.aaZ(
this.EB,E))return;if(!!this.EB)A.z$([this,this.A05],this.EB,0);this.EB=E;if(!!E)
A.zX([this,this.A05],this.EB,0);A.pe([this,this.A05],this);},Aps:function(G){},A05:
function(s){this.Aps(s);},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A09],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A09],E,0);if(!
!E)A.pe([this,this.A09],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0$],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0$],E,0);if(
!!E)A.pe([this,this.A0$],this);},AaR:function(G){},A0$:function(s){this.AaR(s);}
,AaP:function(G){},A09:function(s){this.AaP(s);},Uu:function(E){if(A.aaZ(this.In
,E))return;if(!!this.In)A.z$([this,this.A08],this.In,0);this.In=E;if(!!E)A.zX([this
,this.A08],E,0);if(!!E)A.pe([this,this.A08],this);},Al5:function(G){},A08:function(
s){this.Al5(s);},F_:function(G){A.ab5("%s",Ba3);},BHp:function(s){this.F_(s);},He:
function(G){this.Ey(0);},AjO:function(){A.ab5("%s",Aoz);return 0;},AjQ:function(
){A.ab5("%s",Aoz);return 0;},LY:function(G){},AnB:function(E){if(A.aaZ(this.JV,E
))return;if(!!this.JV)A.z$([this,this.Ao3],this.JV,0);this.JV=E;if(!!E)A.zX([this
,this.Ao3],this.JV,0);A.pe([this,this.Ao3],this);},Ao3:function(G){},AFs:function(
E){if(A.aa0(this.OO,E))return;this.OO=E;},AFX:function(E){if(this.Afv===E)return;
this.Afv=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BG._Init.call(this.Fk={I:this},0);A.Core.BG._Init.call(this.Fa={I:this},0);this.
__proto__=C.En;this.H(Atb);this.AC7=A.jb.Text;this.L1=A.jb.CV;this.Fk.Filter=6;this.
Fa.Filter=7;this.Fk.BH=[this,this.Ox];this.Fa.BH=[this,this.M8];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fk._Done();this.Fa._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fk._ReInit(
);this.Fa._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OO)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.In)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JV)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rd={AM:0,Dq:null,FP:
null,OO:null,EB:null,A3:null,AF:null,In:null,Q:null,JV:null,AEA:-1,Afv:true,AOf:
false,AUm:false,Asq:true,Init:function(aArg){A.pe([this,this.ABG],this);},Aj:function(
Ae){C.Ei.Aj.call(this,Ae);if(!this.Dq)return;if(this.Dq.A8>0){if(this.Hm){this.Dq.
WM(A.jb.CL);this.Background.L(A.jb.CV);this.V.L(A.jb.Text);}else{this.Dq.WM(A.jb.
CV);this.Background.L(A.jb.CL);this.V.L(A.jb.Text);}}else{if(this.Hm)this.Dq.WM(
A.jb.CL);else this.Dq.WM(A.jb.CV);this.Dq.Bnk(this.V.AR);}},H0:function(G){C.Ei.
H0.call(this,G);if(!this.Dq)return;if(!this.Dq.A8)this.F_(this);else this.He(this
);},FT:function(E){C.Ei.FT.call(this,E);if(!!this.Dq)this.Dq.N=E;},Uw:function(E
){if(A.aaZ(this.EB,E))return;if(!!this.EB)A.z$([this,this.Aps],this.EB,0);this.EB=
E;if(!!E)A.zX([this,this.Aps],this.EB,0);A.pe([this,this.Aps],this);},Aps:function(
G){if(!!this.Dq)this.Dq.Uw(this.EB);},OU:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dq)this.Dq.OU(E);},PY:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PY(E);},Uu:function(E){if(A.aaZ(this.In,E))return;
this.In=E;if(!!this.Dq)this.Dq.Uu(E);},BCJ:function(G){var AAD=0;if(!!this.Dq){AAD=
this.Dq.A8;this.Dq.N=null;this.HQ(this.Dq);}switch(this.AEA){case 0:this.Dq=A._NewObject(
C.Ae1,0);break;case 1:this.Dq=A._NewObject(C.AR$,0);break;case 2:this.Dq=A._NewObject(
C.AR_,0);break;case 3:this.Dq=A._NewObject(C.AUo,0);break;case 4:this.Dq=A._NewObject(
C.AUn,0);break;case 5:this.Dq=A._NewObject(C.ASa,0);break;default:throw new Error(
Br5+this.AEA.toFixed());}this.J(this.Dq,0);this.Dq.AnB(this.JV);this.Dq.H(Br6);this.
Dq.N=this.N;this.Dq.Uw(this.EB);this.Dq.Awu=[this,this.Awu];this.Dq.Au([this,this.
Uo,this.By]);this.Dq.Uu(this.In);this.Dq.OU(this.A3);this.Dq.PY(this.AF);this.Dq.
AFs(this.OO);this.Dq.AFX(this.Afv);if(AAD>0)this.Dq.Ey(AAD);this.Ba(this.Dq);this.
Am();},F_:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FP.AjC((F=this.
N,F[1].call(F[0])));else this.FP=A._NewObject(C.AeA,0);this.Dq.F_(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C6:function(
G){var F;if(!!this.Q){this.By((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uo,this.
By],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C6
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6],
this);},By:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABG],this);},BnZ:function(
E){if(this.AEA===E)return;this.AEA=E;A.pe([this,this.BCJ],this);},Ar7:function(E
){if(this.Asq===E)return;this.Asq=E;A.pe([this,this.ABG],this);},ABG:function(G){
var ApD;if(this.Asq){if(this.AOf)ApD=5;else ApD=0;}else if(this.AUm){if(A._GetAutoObject(
A.Device.Converter).Ta(this.AM)===10)ApD=4;else ApD=3;}else if(A._GetAutoObject(
A.Device.Converter).Ta(this.AM)===10)ApD=2;else ApD=1;this.BnZ(ApD);},Awu:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A8)this.FP.AkR((F=this.N,F[1].call(F[
0])));this.Am();},AnB:function(E){if(A.aaZ(this.JV,E))return;if(!!this.JV)A.z$([
this,this.Ao3],this.JV,0);this.JV=E;if(!!E)A.zX([this,this.Ao3],this.JV,0);A.pe([
this,this.Ao3],this);},Ao3:function(G){if(!!this.Dq)this.Dq.AnB(this.JV);},A_3:function(
E){if(this.AUm===E)return;this.AUm=E;A.pe([this,this.ABG],this);},BmS:function(E
){if(this.AOf===E)return;this.AOf=E;A.pe([this,this.ABG],this);},AFs:function(E){
if(A.aa0(this.OO,E))return;this.OO=E;if(!!this.Dq)this.Dq.AFs(E);},AFX:function(
E){if(this.Afv===E)return;this.Afv=E;if(!!this.Dq)this.Dq.AFX(E);},Uo:function(){
return this.AM;},_Init:function(aArg){C.Ei._Init.call(this,aArg);this.__proto__=
C.Rd;this.H(Aap);this.V.R(Ath);this.V.L(A.jb.Bm);this.FP=A._NewObject(C.AeA,0);this.
Init(aArg);},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EB)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.In
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARn={ET:null,Gc:null,Er:null,DB:null,CX:null
,Cw:null,FS:function(E){if(this.Ng===E)return;C.Ll.FS.call(this,E);this.Cw.CW(E);
this.CX.CW(E);this.DB.CW(E);this.Er.CW(E);this.Gc.CW(E);this.ET.CW(E);},YB:function(
HB){var B8=null;switch(HB){case-1:case 0:B8=this.Gd;break;case 1:B8=this.Cw;break;
case 2:B8=this.CX;break;case 3:B8=this.DB;break;case 4:B8=this.Er;break;case 5:B8=
this.Gc;break;case 6:B8=this.ET;break;case 7:B8=this.G2;break;default:A.ab5("%s"
,Ah4);}return B8;},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DH._Init.call(
this.ET={I:this},0);C.DH._Init.call(this.Gc={I:this},0);C.DH._Init.call(this.Er={
I:this},0);C.DH._Init.call(this.DB={I:this},0);C.DH._Init.call(this.CX={I:this},
0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARn;this.H(Br7);this.G2.
H(AIS);this.ET.H(AyP);this.Gc.H(A0p);this.Er.H(A0q);this.DB.H(A0r);this.CX.H(A0s
);this.Cw.H(A0t);this.Gd.H(A0u);this.EN.H(Ba0);this.J(this.ET,-2);this.J(this.Gc
,-2);this.J(this.Er,-2);this.J(this.DB,-2);this.J(this.CX,-2);this.J(this.Cw,-2);
this.ET.Dk=[this,this.GY];this.Gc.Dk=[this,this.GY];this.Er.Dk=[this,this.GY];this.
DB.Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:
function(){this.__proto__=C.Ll;this.ET._Done();this.Gc._Done();this.Er._Done();this.
DB._Done();this.CX._Done();this.Cw._Done();C.Ll._Done.call(this);},_ReInit:function(
){C.Ll._ReInit.call(this);this.ET._ReInit();this.Gc._ReInit();this.Er._ReInit();
this.DB._ReInit();this.CX._ReInit();this.Cw._ReInit();},_Mark:function(D){var B;
C.Ll._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvU={Q:null,G2:null,Gd:null,EN:null,Is:null,Ir:null,Ng:0,UC:0,AM:0,Gg:99,Init:
function(aArg){A.pe([this,this.LY],this);},Aj:function(Ae){var B;A.Core.P.Aj.call(
this,Ae);this.EN.Z(false);this.EN.H(A.wC(this.YB(0).M,this.YB(-1).M));var IG=((Ae&
0x40)===0x40);if(IG){this.BgS(A.jb.AV);this.BgT(A.jb.Bm);}else{this.BgS(this.Ng);
this.BgT(A.jb.Text);}this.Ams();},FS:function(E){if(this.Ng===E)return;this.Ng=E;
this.Am();},LY:function(G){},YB:function(HB){var B8=null;switch(HB){case-1:case 0:
B8=this.Gd;break;case 1:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;},KA:
function(E){if(this.UC===E)return;this.UC=E;this.Ams();},Ams:function(){var B;var
F;if(!!this.Q){var DW=this.Gd;var AdI=this.UC;var A9=(F=this.Q,F[1].call(F[0]));
while(!!DW){if(A9>0){DW.L_(A9%10);A9=(A9/10)|0;}else if(AdI>0)DW.L_(0);else DW.L_(-
1);DW=(C.EA.isPrototypeOf(B=this.AqS(DW,0x11))?B:null);AdI=AdI-1;}}},Agj:function(
G){var F;var BQ=this.AM;this.By(this.AM+1);if(this.AM!==BQ){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agi:function(G){var F;var BQ=this.
AM;this.By(this.AM-1);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C6:function(G){var F;if(!!this.Q)this.By((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,0);if(!!E)A.pe([this,this.C6
],this);},By:function(E){if(E<0)E=0;if(E>this.Gg)E=this.Gg;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.Gg===E)return;this.Gg=E;this.Am();}
,BgS:function(aColor){this.Gd.CW(aColor);this.G2.CW(aColor);},BgT:function(aColor
){this.Gd.ZB(aColor);this.G2.ZB(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.EA._Init.call(this.G2={I:this},0);C.EA._Init.call(this.Gd={I:this},
0);A.acg.BY._Init.call(this.EN={I:this},0);A.Core.BG._Init.call(this.Is={I:this}
,0);A.Core.BG._Init.call(this.Ir={I:this},0);this.__proto__=C.AvU;this.H(Br8);this.
Ng=A.jb.CL;this.G2.H(AIS);this.Gd.H(AyP);this.EN.H(AyP);this.EN.Nx(2);this.EN.L(
A.jb.E2);this.Is.Filter=4;this.Ir.Filter=5;this.J(this.G2,0);this.J(this.Gd,0);this.
J(this.EN,0);this.Is.BH=[this,this.Agj];this.Is.D3=[this,this.Agj];this.Ir.BH=[this
,this.Agi];this.Ir.D3=[this,this.Agi];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G2._Done();this.Gd._Done();this.EN._Done();this.Is._Done();this.Ir.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G2._ReInit();this.Gd._ReInit();this.EN._ReInit();this.Is._ReInit();this.Ir.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.EA={AgM:
null,Background:null,Text:null,EA:-1,Nb:0,AmU:0,Aqx:false,Aj:function(Ae){A.Core.
P.Aj.call(this,Ae);if(this.EA<0)this.Text.R(Rt);else this.Text.R(this.EA.toFixed(
));this.Background.L(this.Nb);this.Text.L(this.AmU);},L_:function(E){if(this.EA===
E)return;var B8=E;if((B8<0)||(B8>9))B8=-1;this.EA=B8;this.Am();},CW:function(E){
if(this.Nb===E)return;this.Nb=E;this.Am();},Ae5:function(E){if(this.Aqx===E)return;
this.Aqx=E;this.AgM.As(E);if(E===false)this.Text.Z(true);},ZB:function(E){if(this.
AmU===E)return;this.AmU=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TP._Init.call(this.AgM={I:this},0);A.acg.AK._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.EA;var B;
this.H(Aln);this.Nb=A.jb.CL;this.AgM.Fq(750);this.AgM.Ux(750);this.AgM.AkB(750);
this.AmU=A.jb.Text;this.Background.A1(0x3);this.Background.H(Aln);this.Text.A1(0x3
);this.Text.H(Aln);this.Text.R(Rt);this.J(this.Background,0);this.J(this.Text,0);
this.AgM.Q=[B=this.Text,B.Fp,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgM._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgM._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FB={Y:null,Ja:null,AOn:A.jV,ASo:A.jV,Tp:0,AJX:0,A2x:false,A13:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.zX([this,this.MX],[B=A._GetAutoObject(A.Device.
Device).An,B.Fo,B.Fs],0);A.pe([this,this.ABB],this);A.pe([this,this.MX],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);},ByI:function(Me){A._GetAutoObject(A.Device.Helper
).GT(Me);this.Ap9(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap9:function(L$,Ac4){A.ab5("%s",Alh);},Vs:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.BzF],this);else if(!!Ar&&(Ar.PopupState===5)){this.A13=true;this.Ex(this
);}},BzF:function(G){if(this.Tp>0){this.A13=false;this.Adu(this);this.A$r(0);}},
Aiy:function(G){if((this.AJX+1)<this.Tp)this.A$r(this.AJX+1);else A.aaS([this,this.
Bxk],this);},Bxl:function(s){this.Aiy(s);},A$r:function(E){this.AJX=E;if(this.A13===
false){this.ByI(E);A.aaS([this,this.Bxl],this);var XT=(this.AJX/this.Tp)*100;A._GetAutoObject(
A.Device.Device).AZ(49,true,A.abk(XT,0,0),0,[this,this.Vs]);}},AaA:function(G){A.
_GetAutoObject(A.Device.Device).AZ(49,false,Br9,0,[this,this.Vs]);this.A2x=true;
A.pe([this,this.ALx],this);},Bxk:function(s){this.AaA(s);},Adu:function(G){this.
Ja.Z(true);this.A2x=false;this.ALx(this);},BHj:function(s){this.Adu(s);},AAS:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A7i();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ex:function(G){A._GetAutoObject(C.A5).FA();},A3$:function(G){A._GetAutoObject(
C.A5).Cc(84);},DL:function(G){this.N.Z(true);this.N.C4(A.aaL(A.ach.E3));this.N.CF=[
this,this.Ex];this.N.Cu(A.aaL(A.ach.ADU));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arl(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.IT.C0(100);}else{this.N.Cf=[this,this.AAS];this.
N.IT.C0(255);}this.N.C5(A.aaL(A.ach.AeI));this.N.Ce=[this,this.A3$];},MX:function(
s){this.DL(s);},ABB:function(G){this.Tp=A._GetAutoObject(A.Device.Device).An.B_(
);if(this.Tp>0)A._GetAutoObject(A.Device.Device).AZ(49,true,U8,0,[this,this.Vs]);
else{this.Adu(this);this.AaA(this);}},Akz:function(E){if(this.AOn===E)return;this.
AOn=E;A.pe([this,this.ALx],this);},ALx:function(G){var B;if(this.A2x===false){this.
Ja.R(A.jV);return;}var Ape;if(!A._GetAutoObject(A.Device.Device).An.B_()){var Ado=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABB],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);this.AAS(this);if(!A._GetAutoObject(A.Device.Device
).An.QN()||!Ado)Ape=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADf(A._GetAutoObject(A.Device.Device).An.Filter)===1)Ape=A.aaR(
A.acf.AOh);else Ape=A.aaR(A.acf.AOg);A._GetAutoObject(A.Device.Device).An.Bk(Ado
);A.zX([this,this.ABB],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);}else
Ape=this.ASo;Ape=Ape+(A0w+this.AOn);this.Ja.R(Ape);},Afd:function(E){if(this.ASo===
E)return;this.ASo=E;A.pe([this,this.ALx],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkT._Init.call(this.Ja={
I:this},0);this.__proto__=C.FB;this.Ds(C.AbD);this.Y.H(Fd);this.Y.J3(1);this.Ja.
H(Fd);this.J(this.Y,0);this.J(this.Ja,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.Ja._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.Ja._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ja)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7T={Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A7T;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvW={K6:null,M6:null,A0:0,Yr:function(){this.K6=null;this.M6=null;this.A0=0;
},OC:function(A9){var Hi;Hi=A._NewObject(C.A7T,0);Hi.A6=A9;if(!this.K6){this.K6=
Hi;this.M6=Hi;this.A0=1;}else{this.M6.Ah=Hi;this.M6=Hi;this.A0=this.A0+1;}},Am2:
function(){var B;var RT=0;var Or=this.K6;while(!!Or){RT+=Or.A6;Or=Or.Ah;}return RT;
},AjP:function(){if(!this.A0)return 0;return this.Am2()/this.A0;},Aq2:function(){
var B;if(!this.A0)return 0;var A1X=this.AjP();var Adl=0;var Or=this.K6;while(!!Or
){Adl+=Math.pow(Or.A6-A1X,2);Or=Or.Ah;}Adl/=this.A0;Adl=Math.sqrt(Adl);return Adl;
},_Init:function(aArg){this.__proto__=C.AvW;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOo={Gj:null,AeE:null,Yy:null,C9:null,Ja:null,
CQ:function(){this.A4$(this);},Init:function(aArg){A.zV([this,this.A4$],A._GetAutoObject(
A.Device.Device).Pv,0);A.pe([this,this.A4$],this);},Ex:function(G){A._GetAutoObject(
C.A5).FA();},A4$:function(G){this.Yy.Ci(-1);this.Ja.Z(!this.Gj.AX.B_());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gj._Init.call(this.Gj={I:this},0);C.
AeE._Init.call(this.AeE={I:this},0);C.Yy._Init.call(this.Yy={I:this},0);A.acg.C9.
_Init.call(this.C9={I:this},0);C.AkT._Init.call(this.Ja={I:this},0);this.__proto__=
C.AOo;this.N.Z(true);this.Ds(C.APj);this.Gj.H(Atk);this.Gj.N_(C.AmT);this.AeE.H(
I2);this.Yy.H(Atc);this.C9.DE(Br_);this.C9.DO(Br$);this.C9.Nx(3);this.C9.L(A.jb.
Text);this.Ja.H(Ald);this.Ja.R((A.aaR(A.acf.A8D)+A0w)+A.aaR(A.acf.A6W));this.J(this.
Gj,0);this.J(this.AeE,0);this.J(this.Yy,0);this.J(this.C9,0);this.J(this.Ja,0);this.
N.CF=[this,this.Ex];this.N.C4(A.aaL(A.ach.E3));this.Gj.ZA(A._GetAutoObject(A.Device.
Device).Pv);this.Yy.ZA(A._GetAutoObject(A.Device.Device).Pv);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gj._Done();this.AeE._Done();this.Yy._Done();
this.C9._Done();this.Ja._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gj._ReInit();this.AeE._ReInit();this.Yy._ReInit();this.C9.
_ReInit();this.Ja._ReInit();this.Ja.R((A.aaR(A.acf.A8D)+A0w)+A.aaR(A.acf.A6W));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gj)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yy).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ja)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOr={Auk:null,Auj:null,Aum:null,Aul:null,Auo:null,Aun:null,Auq:null,Aup:null
,AaT:null,YH:null,Abv:null,Abu:null,RatedAttribute:0,Init:function(aArg){this.SR(
2);},DG:function(G){var D8=(A.Core.BG.isPrototypeOf(G)?G:null);switch(D8.CP){case
6:switch(this.RatedAttribute){case 2:this.SR(3);break;case 1:this.SR(2);break;case
4:this.SR(1);break;case 3:this.SR(4);break;default:this.SR(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SR(1);break;case 1:this.SR(4);break;case 4:this.
SR(3);break;case 3:this.SR(2);break;default:this.SR(0);}break;default:D8.Mz=true;
}},Ap9:function(L$,Ac4){if(!L$)return;var Fx=A._NewObject(A.Device.Filter,0);var
HY=A._NewObject(A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,Ac4,true);Fx.
CY(HY);var AA$=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA$.Initialize(
3,5,0,true);Fx.CY(AA$);L$.Bk(Fx);},Aiy:function(G){var Ap7=0;var A4t=A._GetAutoObject(
A.Device.Device).Bt.B_();var B3=A._NewObject(A.Device.Rating,0);while(Ap7<A4t){B3.
Fm(Ap7,A._GetAutoObject(A.Device.Device).Bt);this.Bea(B3,0);var BC5=A._GetAutoObject(
A.Device.Helper).Z0(2);this.Bea(B3,BC5);Ap7++;}C.FB.Aiy.call(this,G);},AaA:function(
G){A.pe([this,this.BdP],this);C.FB.AaA.call(this,G);},Adu:function(G){this.Auk=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aup=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FB.Adu.
call(this,G);},DL:function(G){C.FB.DL.call(this,G);this.N.OX(true);this.N.OY(true
);},Bea:function(D6,BcK){if(!D6||(D6.Timestamp<BcK))return;if(!BcK){this.Auk.Set(
D6.Appearance,this.Auk.Get(D6.Appearance)+1);this.Aum.Set(D6.Faeces,this.Aum.Get(
D6.Faeces)+1);this.Auo.Set(D6.Feed,this.Auo.Get(D6.Feed)+1);this.Auq.Set(D6.Respiratory
,this.Auq.Get(D6.Respiratory)+1);}else{this.Auj.Set(D6.Appearance,this.Auj.Get(D6.
Appearance)+1);this.Aul.Set(D6.Faeces,this.Aul.Get(D6.Faeces)+1);this.Aun.Set(D6.
Feed,this.Aun.Get(D6.Feed)+1);this.Aup.Set(D6.Respiratory,this.Aup.Get(D6.Respiratory
)+1);}},SR:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YH.KC(this.AaT.LC(E));A.pe([this,this.BdP],this);},BdP:function(G){var AaU=null;
var AaV=null;switch(this.RatedAttribute){case 2:{AaU=this.Auj;AaV=this.Auk;}break;
case 4:{AaU=this.Aul;AaV=this.Aum;}break;case 1:{AaU=this.Aun;AaV=this.Auo;}break;
case 0:{AaU=A._NewObject(A.Device.Int32ArrayWrapper,0);AaV=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaU=this.Aup;AaV=this.Auq;}break;default:throw new
Error(Bsa+this.RatedAttribute.toFixed());}var AGz=A._NewObject(A.acv.AUG,0);AGz.
OC(AaU.Get(3),A.jb.E2);AGz.OC(AaU.Get(2),A.jb.Ia);AGz.OC(AaU.Get(1),A.jb.Gn);var
AGA=A._NewObject(A.acv.AUG,0);AGA.OC(AaV.Get(3),A.jb.E2);AGA.OC(AaV.Get(2),A.jb.
Ia);AGA.OC(AaV.Get(1),A.jb.Gn);this.Abu.Ace(AGz);this.Abv.Ace(AGA);var A4X=AaU.Am2(
)-AaU.Get(5);var Bgo=0;var Bgm=0;if(A4X>0){Bgo=(AaU.Get(2)/A4X)*100;Bgm=(AaU.Get(
1)/A4X)*100;}var ALk=AaV.Am2()-AaV.Get(5);this.Ja.Z(!ALk);var Bgp=0;var Bgn=0;if(
ALk>0){Bgp=(AaV.Get(2)/ALk)*100;Bgn=(AaV.Get(1)/ALk)*100;}this.Abu.A$p(A.abk(Bgo
,0,0)+AfM);this.Abu.A_5(A.abk(Bgm,0,0)+AfM);this.Abv.A$p(A.abk(Bgp,0,0)+AfM);this.
Abv.A_5(A.abk(Bgn,0,0)+AfM);},_Init:function(aArg){C.FB._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaT={I:this},0);C.NS._Init.call(this.
YH={I:this},0);C.ACX._Init.call(this.Abv={I:this},0);C.ACX._Init.call(this.Abu={
I:this},0);this.__proto__=C.AOr;this.Ds(C.APk);this.Akz(A.aaR(A.acf.A6X));this.Afd(
A.aaR(A.acf.Anr));this.YH.H(I2);this.YH.Ai(true);this.YH.T(A.aaR(A.acf.AxA)+A.aaR(
A.acf.Colon));this.YH.Bh(false);this.YH.BnX(false);this.Abv.H(Bsb);this.Abv.T(A.
aaR(A.acf.AGj));this.Abu.H(Bsc);this.Abu.T(A.aaR(A.acf.A72));this.Ja.H(Ald);this.
J(this.YH,-1);this.J(this.Abv,-1);this.J(this.Abu,-1);this.Auk=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aup=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FB;this.AaT._Done();this.YH._Done();this.Abv._Done();this.Abu.
_Done();C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.
AaT._ReInit();this.YH._ReInit();this.Abv._ReInit();this.Abu._ReInit();this.Akz(A.
aaR(A.acf.A6X));this.Afd(A.aaR(A.acf.Anr));this.YH.T(A.aaR(A.acf.AxA)+A.aaR(A.acf.
Colon));this.Abv.T(A.aaR(A.acf.AGj));this.Abu.T(A.aaR(A.acf.A72));},_Mark:function(
D){var B;C.FB._Mark.call(this,D);if((B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aun)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOs={AeD:null,UU:null,UV:null,AeC:null,UR:null,US:null,AJZ:0,AJY:0,AJD:0,AJC:
0,Adn:false,CQ:function(){this.AaA(this);},Ap9:function(L$,Ac4){if(!L$)return;var
Fx=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,Ac4,true);Fx.CY(HY);var ABs=A._NewObject(A.Device.Int32FilterCriterion
,0);ABs.Initialize(7,2,0,true);Fx.CY(ABs);L$.Bk(Fx);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJZ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJY++;var Ap7=0;var A4t=A._GetAutoObject(
A.Device.Device).Bt.B_();var Aui;var ABN=0;while(Ap7<A4t){this.Adn=true;Aui=A._GetAutoObject(
A.Device.Device).Bt.Jb(Ap7,9);if(Aui===1)ABN=1;else if((Aui===2)&&(ABN!==1))ABN=
2;Ap7++;}if(ABN===1)this.AJC++;else if(ABN===2)this.AJD++;C.FB.Aiy.call(this,G);
},AaA:function(G){var Bgk=0;var Bgl=0;if(this.Tp>0){Bgk=(this.AJZ/this.Tp)*100;Bgl=(
this.AJY/this.Tp)*100;}this.UU.KC(((((((A.abk(Bgk,0,0)+AIT)+this.AJZ.toFixed())+
CJ)+A.aaR(A.acf.AEH))+CJ)+this.Tp.toFixed())+Pd);this.UV.KC(((((((A.abk(Bgl,0,0)+
AIT)+this.AJY.toFixed())+CJ)+A.aaR(A.acf.AEH))+CJ)+this.Tp.toFixed())+Pd);var Bgi=
0;var Bgj=0;if(this.Tp>0){Bgi=(this.AJD/this.Tp)*100;Bgj=(this.AJC/this.Tp)*100;
}this.UR.KC(((((((A.abk(Bgi,0,0)+AIT)+this.AJD.toFixed())+CJ)+A.aaR(A.acf.AEH))+
CJ)+this.Tp.toFixed())+Pd);this.US.KC(((((((A.abk(Bgj,0,0)+AIT)+this.AJC.toFixed(
))+CJ)+A.aaR(A.acf.AEH))+CJ)+this.Tp.toFixed())+Pd);this.Ja.Z(!this.Adn);C.FB.AaA.
call(this,G);},Adu:function(G){this.AJC=0;this.AJD=0;this.AJY=0;this.AJZ=0;this.
Adn=false;C.FB.Adu.call(this,G);},_Init:function(aArg){C.FB._Init.call(this,aArg
);C.AgC._Init.call(this.AeD={I:this},0);C.Ajt._Init.call(this.UU={I:this},0);C.Ajt.
_Init.call(this.UV={I:this},0);C.AgC._Init.call(this.AeC={I:this},0);C.Ajt._Init.
call(this.UR={I:this},0);C.Ajt._Init.call(this.US={I:this},0);this.__proto__=C.AOs;
this.Ds(C.APl);this.Akz(A.aaR(A.acf.A6Y));this.Afd(A.aaR(A.acf.ArC));this.AeD.H(
I2);this.AeD.Ai(true);this.AeD.T(A.aaR(A.acf.A62));this.AeD.Bh(false);this.UU.H(
Qe);this.UU.Ai(true);this.UU.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UU.
Bh(true);this.UU.AkD(2);this.UV.H(Aaq);this.UV.Ai(true);this.UV.T(A.aaR(A.acf.AvE
)+A.aaR(A.acf.Colon));this.UV.Bh(true);this.UV.AkD(1);this.AeC.H(Alj);this.AeC.Ai(
true);this.AeC.T(A.aaR(A.acf.A63));this.AeC.Bh(false);this.UR.H(Aoq);this.UR.Ai(
true);this.UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UR.Bh(true);this.
UR.AkD(2);this.US.H(Atc);this.US.Ai(true);this.US.T(A.aaR(A.acf.AvE)+A.aaR(A.acf.
Colon));this.US.Bh(true);this.US.AkD(1);this.J(this.AeD,0);this.J(this.UU,0);this.
J(this.UV,0);this.J(this.AeC,0);this.J(this.UR,0);this.J(this.US,0);this.UU.S(A.
aaL(A.fl.Ak));this.UV.S(A.aaL(A.fl.Ak));this.UR.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FB;this.AeD._Done();this.UU._Done(
);this.UV._Done();this.AeC._Done();this.UR._Done();this.US._Done();C.FB._Done.call(
this);},_ReInit:function(){C.FB._ReInit.call(this);this.AeD._ReInit();this.UU._ReInit(
);this.UV._ReInit();this.AeC._ReInit();this.UR._ReInit();this.US._ReInit();this.
Akz(A.aaR(A.acf.A6Y));this.Afd(A.aaR(A.acf.ArC));this.AeD.T(A.aaR(A.acf.A62));this.
UU.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UV.T(A.aaR(A.acf.AvE)+A.aaR(
A.acf.Colon));this.AeC.T(A.aaR(A.acf.A63));this.UR.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.US.T(A.aaR(A.acf.AvE)+A.aaR(A.acf.Colon));this.UU.S(A.aaL(A.fl.
Ak));this.UV.S(A.aaL(A.fl.Ak));this.UR.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak
));this.CQ();},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.AeD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeC)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.US)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqR={Lc:null
,Ajh:null,Aji:null,Amt:null,AbH:null,Xb:null,AbE:null,Tc:null,AbF:null,Td:null,AbI:
null,Xc:null,Ay:null,Adi:0,AAE:0,Apy:0,A3a:0,BeI:0,CQ:function(){this.AaA(this);
},DG:function(G){switch(this.Cr.CP){case 4:{if(this.Ja.Fp())return;var QC=this.Y.
Bs[1]+80;this.Y.Gi([this.Y.Bs[0],QC]);this.Y.VH(null,null);}break;case 5:{if(this.
Ja.Fp())return;var QC=this.Y.Bs[1]-80;this.Y.Gi([this.Y.Bs[0],QC]);this.Y.VH(null
,null);}break;default:C.FB.DG.call(this,G);}},Ap9:function(L$,Ac4){if(!L$)return;
var Fx=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(A.Device.Int32FilterCriterion
,0);HY.Initialize(1,0,Ac4,true);Fx.CY(HY);var Ade=A._NewObject(A.Device.Int32FilterCriterion
,0);Ade.Initialize(8,2,0,true);Fx.CY(Ade);L$.Bk(Fx);},Aiy:function(G){if(this.Bey(
)){this.Lc.OC(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arm()){var Qo=A._GetAutoObject(A.Device.Helper).Mg(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qo>0){var A2K=A._GetAutoObject(A.acj.DV).AlE(Qo,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajh.
OC(A2K);}}var A3v=A._GetAutoObject(A.Device.Device).Bt.B_()-2;if(A3v>=0){var BAV=
A._GetAutoObject(A.Device.Device).Bt.ADh(A3v,8);var BAU=A._GetAutoObject(A.Device.
Device).Bt.Hw(A3v,6);var Qo=A._GetAutoObject(A.Device.Helper).Mg(BAU,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qo>0){var A2K=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAV)/Qo)|0;this.Aji.OC(A2K);}}if((A._GetAutoObject(
A.Device.Helper).W.Arm()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RX()<=180)){var ALI=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tw=A._GetAutoObject(A.Device.
Helper).Mg(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BCa=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALI/Tw);this.Amt.OC(BCa);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adi++;this.Apy=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Z0(7)){this.AAE++;this.A3a=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BeI=A._GetAutoObject(A.Device.Helper).Mg(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dr());}}C.FB.Aiy.call(
this,G);},AaA:function(G){var A5i=this.Ajh.AjP()|0;var A5k=this.Aji.AjP()|0;if(this.
Adi>1)A._GetAutoObject(A.Device.Device).AZ(56,true,this.Adi.toFixed(),0,null);if(
this.Adi===1)A._GetAutoObject(A.Device.Device).AZ(53,true,this.Apy.toFixed(),0,null
);if(this.AAE>1)A._GetAutoObject(A.Device.Device).AZ(52,true,this.AAE.toFixed(),
0,null);if(this.AAE===1)A._GetAutoObject(A.Device.Device).AZ(57,true,(this.A3a.toFixed(
)+Atg)+this.BeI.toFixed(),0,null);if(this.Lc.A0>0)this.Xb.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Lc.AjP()|0,1)+AyQ)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Lc.Aq2()|0,1))+CJ)+A._GetAutoObject(A.acj.DV).Af_())+AyR)+this.Lc.A0.
toFixed())+Pd);else this.Xb.T(A.aaR(A.acf.Unknown));if(this.Ajh.A0>0)this.Tc.T(((((((
A._GetAutoObject(A.Device.Converter).Th(A5i,2,true)+AyQ)+A._GetAutoObject(A.Device.
Converter).Th(this.Ajh.Aq2()|0,2,true))+CJ)+A._GetAutoObject(A.acj.DV).AaF())+AyR
)+this.Ajh.A0.toFixed())+Pd);else this.Tc.T(A.aaR(A.acf.Unknown));if(this.Aji.A0>
0)this.Td.T(((((((A._GetAutoObject(A.Device.Converter).Th(A5k,2,true)+AyQ)+A._GetAutoObject(
A.Device.Converter).Th(this.Aji.Aq2()|0,2,true))+CJ)+A._GetAutoObject(A.acj.DV).
AaF())+AyR)+this.Aji.A0.toFixed())+Pd);else this.Td.T(A.aaR(A.acf.Unknown));if(this.
Amt.A0>0)this.Xc.T(((((((A.abk(this.Amt.AjP(),0,1)+AyQ)+A.abk(this.Amt.Aq2(),0,1
))+CJ)+A.aaR(A.acf.BiE))+AyR)+this.Amt.A0.toFixed())+Pd);else this.Xc.T(A.aaR(A.
acf.Unknown));var A5j=0;var A5l=0;var Adn=false;if(this.Lc.A0>0)Adn=true;var Ig=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKf=A._GetAutoObject(A.Device.
Device).An.Filter.DN(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKf)?AKf:null))Ig=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKf)?AKf:null
).A6;}if(this.Ajh.A0>0){Adn=true;A5j=A._GetAutoObject(A.Device.Converter).BaM(A5i
,Ig);}if(this.Aji.A0>0){Adn=true;A5l=A._GetAutoObject(A.Device.Converter).BaM(A5k
,Ig);}this.Tc.AkD(A5j);this.Td.AkD(A5l);this.Ja.Z(!Adn);C.FB.AaA.call(this,G);},
Adu:function(G){this.Lc.Yr();this.Ajh.Yr();this.Aji.Yr();this.Amt.Yr();this.Adi=
0;this.AAE=0;this.Apy=0;this.A3a=0;C.FB.Adu.call(this,G);},Fi:function(G){var B;
this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.
ML(-this.Y.Bs[1]);},Bey:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FB._Init.call(this,aArg);C.AgC._Init.call(this.AbH={I:
this},0);C.IL._Init.call(this.Xb={I:this},0);C.AgC._Init.call(this.AbE={I:this},
0);C.Ajt._Init.call(this.Tc={I:this},0);C.AgC._Init.call(this.AbF={I:this},0);C.
Ajt._Init.call(this.Td={I:this},0);C.AgC._Init.call(this.AbI={I:this},0);C.IL._Init.
call(this.Xc={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqR;
this.Ds(C.AvD);this.Akz(A.aaR(A.acf.A6Z));this.Afd(A.aaR(A.acf.Akm));this.AbH.H(
Atp);this.AbH.Ai(true);this.AbH.T(A.aaR(A.acf.A5T));this.AbH.Bh(false);this.AbH.
KA(5);this.Xb.H(A0x);this.Xb.Ai(true);this.Xb.T(A.jV);this.Xb.Bh(true);this.AbE.
H(Atl);this.AbE.Ai(true);this.AbE.T(A.aaR(A.acf.AL7));this.AbE.Bh(false);this.AbE.
KA(5);this.Tc.H(Atm);this.Tc.Ai(true);this.Tc.T(A.jV);this.Tc.Bh(true);this.Tc.KC(
A.jV);this.AbF.H(Atn);this.AbF.Ai(true);this.AbF.T(A.aaR(A.acf.AuI));this.AbF.Bh(
false);this.AbF.KA(5);this.Td.H(Bsd);this.Td.Ai(true);this.Td.T(A.jV);this.Td.Bh(
true);this.Td.KC(A.jV);this.AbI.H(A0y);this.AbI.Ai(true);this.AbI.T(A.aaR(A.acf.
A51));this.AbI.Bh(false);this.AbI.KA(5);this.Xc.H(Aoy);this.Xc.Ai(true);this.Xc.
T(A.jV);this.Xc.Bh(true);this.Ay.H(Ix);this.J(this.AbH,-1);this.J(this.Xb,-1);this.
J(this.AbE,-1);this.J(this.Tc,-1);this.J(this.AbF,-1);this.J(this.Td,-1);this.J(
this.AbI,-1);this.J(this.Xc,-1);this.J(this.Ay,-1);this.Y.Eo=[this,this.Fi];this.
Lc=A._NewObject(C.AvW,0);this.Ajh=A._NewObject(C.AvW,0);this.Aji=A._NewObject(C.
AvW,0);this.Xb.S(A.aaL(A.fl.Af));this.Tc.S(A.aaL(A.fl.Ak));this.Td.S(A.aaL(A.fl.
Ak));this.Xc.S(A.aaL(A.fl.Ak));this.Amt=A._NewObject(C.A69,0);},_Done:function(){
this.__proto__=C.FB;this.AbH._Done();this.Xb._Done();this.AbE._Done();this.Tc._Done(
);this.AbF._Done();this.Td._Done();this.AbI._Done();this.Xc._Done();this.Ay._Done(
);C.FB._Done.call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.AbH._ReInit(
);this.Xb._ReInit();this.AbE._ReInit();this.Tc._ReInit();this.AbF._ReInit();this.
Td._ReInit();this.AbI._ReInit();this.Xc._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6Z));this.Afd(A.aaR(A.acf.Akm));this.AbH.T(A.aaR(A.acf.A5T));this.AbE.T(A.
aaR(A.acf.AL7));this.AbF.T(A.aaR(A.acf.AuI));this.AbI.T(A.aaR(A.acf.A51));this.Xb.
S(A.aaL(A.fl.Af));this.Tc.S(A.aaL(A.fl.Ak));this.Td.S(A.aaL(A.fl.Ak));this.Xc.S(
A.aaL(A.fl.Ak));this.CQ();},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((
B=this.Lc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aji)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amt)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Td)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.AbD={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.AbD;this.
Df.Ax(A.aaL(A.ach.ADQ));},_className:"Application::HeaderEvaluationFilter"};C.Kv={
CQ:function(){this.Text.R(A.aaR(A.acf.None));},DY:function(G){C.AjS.DY.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad5(A._GetAutoObject(A.Device.
Device).Ko));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kv;},_ReInit:function(){C.AjS._ReInit.call(this);this.CQ();},_className:"Application::HeaderListFilter"
};C.AvD={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DV).Bd5());},_Init:
function(aArg){C.AbD._Init.call(this,aArg);this.__proto__=C.AvD;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APl={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag9));},_Init:function(aArg){C.AbD._Init.call(this,
aArg);this.__proto__=C.APl;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APk={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arh));},_Init:function(aArg){
C.AbD._Init.call(this,aArg);this.__proto__=C.APk;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APj={St:null,Df:null,AP:null,CQ:function(){this.St.R(A.aaR(A.acf.ANn));},Dg:
function(E){C.BS.Dg.call(this,E);this.St.L(E);this.Df.L(E);},_Init:function(aArg
){C.BS._Init.call(this,aArg);C.CG._Init.call(this.St={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C9._Init.call(this.AP={I:this},0);this.__proto__=
C.APj;this.St.H(Bse);this.St.R(A.aaR(A.acf.ANn));this.St.A4(0x11);this.Df.H(Bsf);
this.AP.DE(Bsg);this.AP.DO(Bsh);this.AP.L(A.jb.Bb);this.J(this.St,0);this.J(this.
Df,0);this.J(this.AP,0);this.St.S(A.aaL(A.fl.Af));this.St.AY(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQx));},_Done:function(){this.__proto__=C.BS;this.St._Done();this.
Df._Done();this.AP._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.St._ReInit();this.Df._ReInit();this.AP._ReInit();this.St.R(A.aaR(
A.acf.ANn));this.St.S(A.aaL(A.fl.Af));this.St.AY(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.BS._Mark.call(this,D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AeE={T2:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EC._Init.call(this,aArg);C.CG._Init.
call(this.T2={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.AeE;this.T2.H(Bsi);this.T2.R(A.aaR(A.acf.Year));this.T2.A4(0x11);this.T2.L(A.jb.
Text);this.Aj2.H(Ba4);this.Aj2.L(A.jb.Text);this.AjZ.H(Bsj);this.AjZ.L(A.jb.Text
);this.Aj0.H(Bsk);this.Aj0.L(A.jb.Text);this.J(this.T2,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.T2.S(A.aaL(A.fl.Kt));this.T2.AY(A.aaL(A.fl.
HK));this.Aj2.Ax(A.aaL(A.ach.AQL));this.AjZ.Ax(A.aaL(A.ach.AQK));this.Aj0.Ax(A.aaL(
A.ach.AQS));},_Done:function(){this.__proto__=C.EC;this.T2._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EC._Done.call(this);},_ReInit:function(){C.
EC._ReInit.call(this);this.T2._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.T2.R(A.aaR(A.acf.Year));this.T2.S(A.aaL(A.fl.Kt));this.T2.AY(
A.aaL(A.fl.HK));},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.T2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmT={Ajz:null,AP:null
,A_:null,Ec:null,UO:null,S5:null,Gw:null,XT:0,AtT:0,AlI:0,ABO:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S5.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A_.H([this.S5.M[2]-1,0,this.S5.M[
2]+1,aSize[1]]);this.UO.H([this.S5.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ec.H([this.UO.M[2]-1,0,this.UO.M[2]+1,aSize[1]]);this.Gw.H([this.UO.M[2],0,aSize[
0],aSize[1]]);this.Ajz.H(this.Gw.M);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.
T(this.ABO.toFixed());this.S5.L(this.V.AR);this.S5.R(this.AlI.toFixed());this.UO.
L(this.V.AR);this.UO.R(this.AtT.toFixed());var B3=this.BB$(this.XT);this.Gw.L(A.
_GetAutoObject(A.acj.Assessment).XI(B3));this.Ajz.L(A._GetAutoObject(A.acj.Assessment
).Qt(B3));this.Gw.R(A.abk(this.XT,0,0)+AfM);},Ci:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B_()-Ad)-1;if(!!this.AX){this.AlI=this.AX.CE(Ad,1);this.AtT=
this.AX.CE(Ad,2);this.ABO=this.AX.CE(Ad,0);if(this.AlI>0)this.XT=(this.AtT/this.
AlI)*100;else this.XT=0;this.Am();}},BB$:function(XT){if(XT>=8)return 1;else if(
XT>=4)return 2;else return 3;},_Init:function(aArg){C.A$._Init.call(this,aArg);A.
acg.AK._Init.call(this.Ajz={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.
acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.call(this.Ec={I:this},0);A.
acg.Text._Init.call(this.UO={I:this},0);A.acg.Text._Init.call(this.S5={I:this},0
);A.acg.Text._Init.call(this.Gw={I:this},0);this.__proto__=C.AmT;this.Ajz.H(Aoo);
this.AP.L(A.jb.Bb);this.A_.L(A.jb.Bb);this.Ec.H(Aoo);this.Ec.L(A.jb.Bb);this.UO.
L(A.jb.Text);this.S5.H(Aoo);this.S5.L(A.jb.Text);this.Gw.L(A.jb.Text);this.J(this.
Ajz,0);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ec,0);this.J(this.UO,0);this.
J(this.S5,0);this.J(this.Gw,0);this.UO.S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Af
));this.Gw.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
A$;this.Ajz._Done();this.AP._Done();this.A_._Done();this.Ec._Done();this.UO._Done(
);this.S5._Done();this.Gw._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$.
_ReInit.call(this);this.Ajz._ReInit();this.AP._ReInit();this.A_._ReInit();this.Ec.
_ReInit();this.UO._ReInit();this.S5._ReInit();this.Gw._ReInit();this.UO.S(A.aaL(
A.fl.Af));this.S5.S(A.aaL(A.fl.Af));this.Gw.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajt={
BX:null,Ax6:A.jV,Rating:0,Aj:function(Ae){C.IL.Aj.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qt(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XI(this.Rating));}this.BX.L(this.V.AR);},S:function(
E){C.IL.S.call(this,E);if((E===A.aaL(A.fl.Kt))||(E===A.aaL(A.fl.Af)))this.BX.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HK))||(E===A.aaL(A.fl.Ak)))this.BX.S(A.aaL(
A.fl.Ak));else this.BX.S(E);},KC:function(E){if(this.Ax6===E)return;this.Ax6=E;this.
BX.R(E);},AkD:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IL._Init.call(this,aArg);A.acg.Text._Init.call(this.BX={I:this}
,0);this.__proto__=C.Ajt;this.BX.A1(0x34);this.BX.H(Xq);this.BX.Jg(true);this.BX.
A4(0x11);this.BX.L(A.jb.Text);this.BX.Ai(true);this.J(this.BX,0);this.BX.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IL;this.BX._Done();C.IL._Done.call(
this);},_ReInit:function(){C.IL._ReInit.call(this);this.BX._ReInit();this.BX.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IL._Mark.call(this,D);if((B=this.BX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACX={
Ob:null,SU:null,V:null,AnV:null,AnU:null,Acp:null,Aco:null,DM:LE,BaR:A.jV,A$L:A.
jV,Ace:function(E){if(this.Ob===E)return;this.Ob=E;this.SU.Ace(this.Ob);},T:function(
E){if(this.DM===E)return;this.DM=E;this.V.R(E);},A$p:function(E){if(this.BaR===E
)return;this.BaR=E;this.Acp.R(E);},A_5:function(E){if(this.A$L===E)return;this.A$L=
E;this.Aco.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SU._Init.
call(this.SU={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AK._Init.
call(this.AnV={I:this},0);A.acg.AK._Init.call(this.AnU={I:this},0);A.acg.Text._Init.
call(this.Acp={I:this},0);A.acg.Text._Init.call(this.Aco={I:this},0);this.__proto__=
C.ACX;this.H(Bsl);this.SU.H(Bsm);this.SU.As(false);this.SU.Bn6(360);this.SU.Boe(
0.5);this.V.A1(0x1D);this.V.H(U3);this.V.Lx(true);this.V.R(LE);this.V.L(A.jb.Text
);this.AnV.H(Ba5);this.AnV.L(A.jb.Ia);this.AnU.H(Ba6);this.AnU.L(A.jb.Gn);this.Acp.
A1(0x1D);this.Acp.H(Ba5);this.Acp.L(A.jb.Text);this.Aco.A1(0x1D);this.Aco.H(Ba6);
this.Aco.L(A.jb.CV);this.J(this.SU,0);this.J(this.V,0);this.J(this.AnV,0);this.J(
this.AnU,0);this.J(this.Acp,0);this.J(this.Aco,0);this.SU.Bog(A.aaL(A.acv.AUf));
this.V.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SU._Done();this.V._Done();this.AnV.
_Done();this.AnU._Done();this.Acp._Done();this.Aco._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SU._ReInit();this.V._ReInit(
);this.AnV._ReInit();this.AnU._ReInit();this.Acp._ReInit();this.Aco._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.Aco.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ob)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkT={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkT;this.H(U5);this.Background.A1(0x3F);this.Background.
H(U5);this.Background.L(A.jb.BkG);this.Text.A1(0x3F);this.Text.H(U5);this.Text.A4(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rg={Ak4:null,N3:null,C_:null,AcM:null,JX:null,TemperatureUnit:null,MS:null,P0:
null,Sq:null,UE:null,Ly:null,Jm:null,Aab:null,Aaa:null,Sr:null,HG:null,AjI:null,
Init:function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlQ(
));this.UE.R(A._GetAutoObject(A.acj.Temperature).AlQ());this.Sr.Z(!A._GetAutoObject(
A.Device.Device).AmV);},Aj:function(Ae){C.AB.Aj.call(this,Ae);this.Aoc();this.Ax3(
);this.Z$();this.Ax4();},H0:function(G){this.W2(this);},CC:function(G){var B;C.AB.
CC.call(this,G);A.zX([this,this.AKM],[B=A._GetAutoObject(A.Device.Device),B.AET,
B.AI4],0);A.zX([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI6]
,0);A.zX([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0P],0);A.
zX([this,this.A3Q],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.zX([this
,this.A3J],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A._GetAutoObject(
A.Device.Device).AhQ();if(A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae8(true);A._GetAutoObject(A.Device.Device).AxQ();A.pe([this,this.
A3J],this);A.pe([this,this.AAT],this);A.pe([this,this.A3Q],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhQ();A._GetAutoObject(A.Device.Device
).UA(false);A._GetAutoObject(A.Device.Device).Afg(false);A._GetAutoObject(A.Device.
Device).Ae8(false);A.z$([this,this.AKM],[B=A._GetAutoObject(A.Device.Device),B.AET
,B.AI4],0);A.z$([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI6
],0);A.z$([this,this.AAT],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0P],0);A.
z$([this,this.A3Q],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.z$([this
,this.A3J],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);},AAT:function(G
){this.Am();},Aoc:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CL);this.C_.L(A.jb.Gn);this.JX.L(this.C_.AR);this.
MS.L(this.C_.AR);this.TemperatureUnit.L(this.C_.AR);}break;default:{this.Background.
L(A.jb.CL);this.C_.L(A.jb.AV);this.JX.L(A.jb.Text);this.MS.L(this.JX.AR);this.TemperatureUnit.
L(this.JX.AR);this.HG.L(A.jb.Gn);}}},Ax3:function(){this.Ak4.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JX.R(A.aaR(A.acf.AD7));this.C_.Ax(A.aaL(A.ach.AvP));this.C_.Cx(0);
this.N3.Cx(0);}break;case 1:{this.AVY(A._GetAutoObject(A.Device.Device).LB,false
);this.C_.Ax(A.aaL(A.ach.AvP));this.N3.Cx(0);}break;case 2:{this.Sq.R(A._GetAutoObject(
A.Device.Converter).Ak3(A._GetAutoObject(A.Device.Device).AGn));this.AVY(A._GetAutoObject(
A.Device.Device).LB,false);this.C_.Ax(null);this.N3.Cx(1);this.AcM.Z(true);this.
P0.Z(true);this.Sq.Z(true);this.UE.Z(true);}break;case 3:{this.AU1();this.AVY(A.
_GetAutoObject(A.Device.Device).LB,true);this.AcM.Z(false);this.P0.Z(false);this.
Sq.Z(false);this.UE.Z(false);}break;case 4:{this.JX.R(A.aaR(A.acf.BkU));this.MS.
R(A.aaR(A.acu.Akl));this.C_.Ax(A.aaL(A.ach.AvR));this.C_.Cx(2);this.N3.Cx(0);}break;
default:A.ab5("%s%e",AIa,A._GetAutoObject(A.Device.Device).MeasureState);}},Z$:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).LB<=3240)||(A._GetAutoObject(A.Device.Device).LB>=5460))this.N.
C5(null);else this.N.C5(A.aaL(A.ach.AeH));this.N.Cu(null);}break;default:;}},AsJ:
function(G){A._GetAutoObject(C.A5).FA();},W2:function(G){},A03:function(s){this.
W2(s);},AkY:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBY(this);break;default:;}},A02:function(s){this.AkY(s);},AVY:function(
AoR,BAJ){if(BAJ)this.Ly.L(A.jb.Bm);else this.Ly.L(A.jb.Gn);if(AoR<=3240){this.MS.
Z(false);this.TemperatureUnit.Z(false);this.Ly.Z(true);this.Ly.R(A.aaR(A.acu.AVH
));}else if(AoR>=5460){this.MS.Z(false);this.TemperatureUnit.Z(false);this.Ly.Z(
true);this.Ly.R(A.aaR(A.acu.BqG));}else{this.MS.Z(true);this.TemperatureUnit.Z(true
);this.Ly.Z(false);this.MS.R(A._GetAutoObject(A.Device.Converter).Ak3(AoR));}},Ax4:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).LB<=3240)||(A._GetAutoObject(A.Device.Device
).LB>=5460))this.JX.R(A.aaR(A.acf.AD7));else this.JX.R(A.aaR(A.acf.Bre));break;default:;
}},Ax5:function(){},BqZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Aab.As(true);break;case 4:this.Aaa.As(true);break;default:{this.Aab.
As(false);this.Aaa.As(false);A._GetAutoObject(A.Device.Device).Afg(false);}}},AKM:
function(G){this.Am();this.Ax5();this.BqZ();this.BqX();},A3Q:function(G){if(A._GetAutoObject(
A.Device.Device).AmW){this.Sr.L(A.jb.Ia);this.Sr.Cx(1);}else{this.Sr.L(A.jb.Bm);
this.Sr.Cx(0);}},BBY:function(G){if(!A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae8(!A._GetAutoObject(A.Device.Device).AmW);},BqX:function(){if(
A._GetAutoObject(A.Device.Device).AmV){this.Sr.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae8(true);else A._GetAutoObject(
A.Device.Device).Ae8(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sr.Z(true);else this.Sr.Z(false);},AKO:function(G){this.CC(this);},AU1:function(
){A.ab5("%s",Ba3);},A3J:function(G){if(A._GetAutoObject(A.Device.Device).HG){this.
JX.H(Bsn);this.MS.H(Bso);this.TemperatureUnit.H(Bsp);}else{this.JX.H(Bsq);this.MS.
H(Bsr);this.TemperatureUnit.H(Bss);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Gp._Init.call(this.Ak4={I:this},0);A.acg.Ap._Init.call(this.N3={I:this
},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.Ap._Init.call(this.AcM={I:this
},0);A.acg.Text._Init.call(this.JX={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MS={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Sq={I:this},0);A.acg.Text._Init.call(this.
UE={I:this},0);C.CG._Init.call(this.Ly={I:this},0);A.Device.TP._Init.call(this.Jm={
I:this},0);A.Device.TP._Init.call(this.Aab={I:this},0);A.Device.TP._Init.call(this.
Aaa={I:this},0);A.acg.Ap._Init.call(this.Sr={I:this},0);C.CG._Init.call(this.HG={
I:this},0);A.acl.TP._Init.call(this.AjI={I:this},0);this.__proto__=C.Rg;var B;this.
N.Z(true);this.Ak4.Fq(1000);this.Ak4.B4=2;this.N3.H(Bst);this.N3.L(A.jb.CV);this.
C_.H(Bsu);this.C_.L(A.jb.AV);this.C_.Cx(0);this.C_.Z(true);this.AcM.H(Bsv);this.
AcM.L(A.jb.Text);this.AcM.Z(false);this.JX.Lx(true);this.JX.R(A.aaR(A.acf.AD7));
this.JX.L(A.jb.Text);this.TemperatureUnit.A4(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MS.A4(0x14);this.MS.R(A.aaR(A.acu.Akl));this.MS.L(A.jb.Text);this.P0.H(Bsw
);this.P0.R(A.aaR(A.acf.P0));this.P0.L(A.jb.Text);this.P0.Z(false);this.Sq.H(Bsx
);this.Sq.A4(0x14);this.Sq.R(Bsy);this.Sq.L(A.jb.Text);this.Sq.Z(false);this.UE.
H(Bsz);this.UE.R(BsA);this.UE.L(A.jb.Text);this.UE.Z(false);this.Ly.H(BsB);this.
Ly.R(A.aaR(A.acu.AVH));this.Ly.A4(0x12);this.Ly.L(A.jb.Gn);this.Jm.B4=false;this.
Jm.Cy=true;this.Jm.HP(1);this.Jm.Fq(4000);this.Jm.Ux(0);this.Aab.B4=false;this.Aab.
Cy=true;this.Aab.HP(2);this.Aab.Fq(400);this.Aab.Ux(200);this.Aaa.B4=false;this.
Aaa.Cy=true;this.Aaa.HP(3);this.Aaa.Fq(500);this.Aaa.Ux(250);this.Sr.H(BsC);this.
HG.H(BsD);this.HG.Z(A._GetAutoObject(A.Device.Device).HG);this.HG.R(A.aaR(A.acf.
HG));this.HG.A4(0x12);this.HG.L(A.jb.Gn);this.AjI.As(A._GetAutoObject(A.Device.Device
).HG);this.AjI.Fq(500);this.AjI.Ux(1000);this.J(this.N3,0);this.J(this.C_,0);this.
J(this.AcM,0);this.J(this.JX,0);this.J(this.TemperatureUnit,0);this.J(this.MS,0);
this.J(this.P0,0);this.J(this.Sq,0);this.J(this.UE,0);this.J(this.Ly,0);this.J(this.
Sr,0);this.J(this.HG,0);this.N.CF=[this,this.AsJ];this.N.Cf=[this,this.A02];this.
N.Ce=[this,this.A03];this.N.C4(A.aaL(A.ach.AeG));this.Ak4.Q=[B=this.C_,B.ASP,B.Cx
];this.N3.Ax(A.aaL(A.ach.N3));this.C_.Ax(A.aaL(A.ach.AvP));this.AcM.Ax(A.aaL(A.ach.
AQ7));this.JX.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MS.S(
A.aaL(A.fl.Aez));this.P0.S(A.aaL(A.fl.Af));this.Sq.S(A.aaL(A.fl.EL));this.UE.S(A.
aaL(A.fl.EL));this.Ly.S(A.aaL(A.fl.Aez));this.Ly.AY(A.aaL(A.fl.EL));this.Ly.Cm(A.
aaL(A.fl.Af));this.Jm.Q=[B=A._GetAutoObject(A.Device.Device),B.AS6,B.A0V];this.Aab.
Q=[B=A._GetAutoObject(A.Device.Device),B.AEY,B.AI7];this.Aaa.Q=[B=A._GetAutoObject(
A.Device.Device),B.AEY,B.AI7];this.Sr.Ax(A.aaL(A.ach.AqU));this.HG.S(A.aaL(A.fl.
EL));this.HG.AY(A.aaL(A.fl.Kt));this.HG.Cm(A.aaL(A.fl.HK));this.AjI.Q=[B=this.HG
,B.Fp,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ak4._Done(
);this.N3._Done();this.C_._Done();this.AcM._Done();this.JX._Done();this.TemperatureUnit.
_Done();this.MS._Done();this.P0._Done();this.Sq._Done();this.UE._Done();this.Ly.
_Done();this.Jm._Done();this.Aab._Done();this.Aaa._Done();this.Sr._Done();this.HG.
_Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ak4._ReInit();this.N3._ReInit();this.C_._ReInit();this.AcM._ReInit(
);this.JX._ReInit();this.TemperatureUnit._ReInit();this.MS._ReInit();this.P0._ReInit(
);this.Sq._ReInit();this.UE._ReInit();this.Ly._ReInit();this.Jm._ReInit();this.Aab.
_ReInit();this.Aaa._ReInit();this.Sr._ReInit();this.HG._ReInit();this.AjI._ReInit(
);this.JX.R(A.aaR(A.acf.AD7));this.MS.R(A.aaR(A.acu.Akl));this.P0.R(A.aaR(A.acf.
P0));this.Ly.R(A.aaR(A.acu.AVH));this.HG.R(A.aaR(A.acf.HG));this.JX.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MS.S(A.aaL(A.fl.Aez));this.P0.S(
A.aaL(A.fl.Af));this.Sq.S(A.aaL(A.fl.EL));this.UE.S(A.aaL(A.fl.EL));this.Ly.S(A.
aaL(A.fl.Aez));this.Ly.AY(A.aaL(A.fl.EL));this.Ly.Cm(A.aaL(A.fl.Af));this.HG.S(A.
aaL(A.fl.EL));this.HG.AY(A.aaL(A.fl.Kt));this.HG.Cm(A.aaL(A.fl.HK));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ly)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aab)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::TemperatureScreen"};C.AVw={Z$:function(){C.Rg.Z$.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.
N.Cu(null);this.N.C5(A.aaL(A.ach.AvS));}break;default:;}},W2:function(G){switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).LB>3240)&&(A._GetAutoObject(A.Device.Device).LB<5460)){A._GetAutoObject(
A.Device.Device).AhQ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:case 4:this.AKO(this);break;default:;}},Ax4:function(){C.Rg.Ax4.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JX.R(A.
aaR(A.acf.BkV));break;default:;}},Ax5:function(){C.Rg.Ax5.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WO(16711680
);this.Jm.As(true);}break;default:this.Jm.As(false);}},AU1:function(){this.C_.Ax(
A.aaL(A.ach.AvR));this.C_.Cx(0);this.N3.Cx(0);},_Init:function(aArg){C.Rg._Init.
call(this,aArg);this.__proto__=C.AVw;this.Ds(C.APh);},_className:"Application::TemperatureMeasurementScreen"
};C.APm={Df:null,IS:null,N5:null,AP:null,Ag$:null,A_:null,Dg:function(E){C.BS.Dg.
call(this,E);this.Df.L(E);this.IS.L(E);this.N5.L(E);this.Ag$.L(E);},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap.
_Init.call(this.IS={I:this},0);A.acg.Ap._Init.call(this.N5={I:this},0);A.acg.C9.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag$={I:this},0);A.acg.C9.
_Init.call(this.A_={I:this},0);this.__proto__=C.APm;this.Df.H(AyL);this.IS.H(Ayt
);this.N5.H(AHM);this.AP.DE(Ba7);this.AP.DO(Ba8);this.AP.L(A.jb.Bb);this.Ag$.H(BsE
);this.Ag$.L(A.jb.CV);this.A_.DE(BsF);this.A_.DO(BsG);this.A_.L(A.jb.Bb);this.J(
this.Df,0);this.J(this.IS,0);this.J(this.N5,0);this.J(this.AP,0);this.J(this.Ag$
,0);this.J(this.A_,0);this.Df.Ax(A.aaL(A.ach.ADQ));this.IS.Ax(A.aaL(A.ach.AeI));
this.N5.Ax(A.aaL(A.ach.AvK));this.Ag$.Ax(A.aaL(A.ach.AQw));},_Done:function(){this.
__proto__=C.BS;this.Df._Done();this.IS._Done();this.N5._Done();this.AP._Done();this.
Ag$._Done();this.A_._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.
call(this);this.Df._ReInit();this.IS._ReInit();this.N5._ReInit();this.AP._ReInit(
);this.Ag$._ReInit();this.A_._ReInit();},_Mark:function(D){var B;C.BS._Mark.call(
this,D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"
};C.De={Et:null,DT:null,AGJ:0,ANW:0,Init:function(aArg){A.zV([this,this.ALu],A._GetAutoObject(
A.Device.Device).An,0);A.pe([this,this.ALu],this);},ALu:function(G){var Ad=this.
AGJ;if(Ad<0){this.DT.FE();this.DT.ED(this.ANW);return;}this.DT.ED(A._GetAutoObject(
A.Device.Device).An.Am0(Ad,14));this.DT.AFi(A._GetAutoObject(A.Device.Device).An.
Jb(Ad,13));this.DT.Ae9(A._GetAutoObject(A.Device.Device).An.H6(Ad,8));this.DT.Uy(
A._GetAutoObject(A.Device.Device).An.H6(Ad,11));this.DT.Afa(A._GetAutoObject(A.Device.
Device).An.H6(Ad,12));this.DT.Afc(A._GetAutoObject(A.Device.Device).An.CE(Ad,5));
},A_8:function(E){if(this.AGJ===E)return;this.AGJ=E;A.pe([this,this.ALu],this);}
,A_y:function(E){if(this.ANW===E)return;this.ANW=E;A.pe([this,this.ALu],this);},
A9J:function(){return this.AGJ;},_Init:function(aArg){C.EC._Init.call(this,aArg);
C.CG._Init.call(this.Et={I:this},0);C.DT._Init.call(this.DT={I:this},0);this.__proto__=
C.De;this.Et.H(BsH);this.Et.R(A.aaR(A.acf.GP));this.Et.A4(0x11);this.Et.L(A.jb.Text
);this.DT.H(A0z);this.J(this.Et,0);this.J(this.DT,0);this.Et.S(A.aaL(A.fl.Af));this.
Et.AY(A.aaL(A.fl.Ak));this.Et.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.EC;this.Et._Done();this.DT._Done();C.EC._Done.call(this);},_ReInit:
function(){C.EC._ReInit.call(this);this.Et._ReInit();this.DT._ReInit();this.Et.R(
A.aaR(A.acf.GP));this.Et.S(A.aaL(A.fl.Af));this.Et.AY(A.aaL(A.fl.Ak));this.Et.Cm(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.EC._Mark.call(this,D);if((B=this.Et).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DT)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ku={AgS:null,Text:null,Afr:null,Dg:function(E
){C.BS.Dg.call(this,E);this.AgS.L(E);this.Text.L(E);this.Afr.L(E);},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgS={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afr={I:this},0);this.__proto__=
C.Ku;this.AgS.H(BsI);this.AgS.L(A.jb.Text);this.Text.H(BsJ);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afr.H(BsK);this.Afr.L(A.jb.Text);this.
J(this.AgS,0);this.J(this.Text,0);this.J(this.Afr,0);this.AgS.Ax(A.aaL(A.ach.APo
));this.Text.S(A.aaL(A.fl.Kt));this.Text.AY(A.aaL(A.fl.HK));},_Done:function(){this.
__proto__=C.BS;this.AgS._Done();this.Text._Done();this.Afr._Done();C.BS._Done.call(
this);},_ReInit:function(){C.BS._ReInit.call(this);this.AgS._ReInit();this.Text.
_ReInit();this.Afr._ReInit();this.Text.S(A.aaL(A.fl.Kt));this.Text.AY(A.aaL(A.fl.
HK));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.AgS)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afr
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APf={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APf;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APh={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APh;this.Iu(this.Afr,-2);this.
Afr.Ax(A.aaL(A.ach.Ag9));},_className:"Application::HeaderDeviceTemperature"};C.
Yy={Aj:function(Ae){C.AmT.Aj.call(this,Ae);this.T(A.aaR(A.acf.BqH)+A.aaR(A.acf.Colon
));},Ci:function(Ad){var B;if(!this.AX)return;this.AlI=0;this.AtT=0;this.XT=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B_();O++){this.AlI+=this.AX.CE(O,1);this.AtT+=
this.AX.CE(O,2);}if(this.AlI>0)this.XT=(this.AtT/this.AlI)*100;this.Am();}},_Init:
function(aArg){C.AmT._Init.call(this,aArg);this.__proto__=C.Yy;this.AP.Z(false);
this.A_.Z(false);this.Ec.Z(false);this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.
HK));},_ReInit:function(){C.AmT._ReInit.call(this);this.V.S(A.aaL(A.fl.Kt));this.
V.AY(A.aaL(A.fl.HK));},_className:"Application::EvaluationLossesSumItem"};C.A68={
Ah:null,A6:0,_Init:function(aArg){this.__proto__=C.A68;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A69={K6:null,M6:null,A0:0,Yr:function(){this.K6=null;this.M6=null;this.A0=0;
},OC:function(A9){var Hi;Hi=A._NewObject(C.A68,0);Hi.A6=A9;if(!this.K6){this.K6=
Hi;this.M6=Hi;this.A0=1;}else{this.M6.Ah=Hi;this.M6=Hi;this.A0=this.A0+1;}},Am2:
function(){var B;var RT=0;var Or=this.K6;while(!!Or){RT+=Or.A6;Or=Or.Ah;}return RT;
},AjP:function(){if(!this.A0)return 0;return this.Am2()/this.A0;},Aq2:function(){
var B;if(!this.A0)return 0;var A1X=this.AjP();var Adl=0;var Or=this.K6;while(!!Or
){Adl+=Math.pow(Or.A6-A1X,2);Or=Or.Ah;}Adl/=this.A0;Adl=Math.sqrt(Adl);return Adl;
},_Init:function(aArg){this.__proto__=C.A69;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AgC={Background:null,V:null,KY:0,UC:5,Hm:false
,Aj:function(Ae){C.Hj.Aj.call(this,Ae);if(this.Hm)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CL);},T:function(E){C.Hj.T.call(this,E);this.V.R(E);},Bh:
function(E){if(this.Hm===E)return;this.Hm=E;this.Am();},KA:function(E){if(this.UC===
E)return;this.UC=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.AgC;this.H(BF);this.Background.A1(
0x3F);this.Background.H(BF);this.V.A1(0x3F);this.V.H(AIG);this.V.A4(0x11);this.V.
L(A.jb.Text);this.KY=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.fl.Bg));},_Done:function(
){this.__proto__=C.Hj;this.Background._Done();this.V._Done();C.Hj._Done.call(this
);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.fl.
Bg));},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AOb={WJ:function(G){this.AgB();this.I9(A.aaR(
A.acf.AVG),[this,this.AT4],5);this.I9(A.aaR(A.acf.AVE),[this,this.AT3],7);this.I9(
A.aaR(A.acf.Calving),[this,this.BmD],11);this.I9(A.aaR(A.acf.An6),[this,this.Aw3
],2);this.I9(A.aaR(A.acf.Ad0),[this,this.AE9],1);this.I9(A.aaR(A.acf.AuL),[this,
this.AE3],0);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.Ank
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){}
,AbB:function(){return C.ANi;},AbC:function(){return C.APL;},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADb());},HR:function(G){
var F;C.GL.HR.call(this,G);if(this.Aki()===false){this.N.Cu(A._GetAutoObject(A.Device.
Converter).Ajs((F=this.Fl,F[1].call(F[0]))));this.N.Cf=[this,this.Aas];this.N.E6(
A.jV);}this.N.OX(false);this.N.OY(false);},Agn:function(){A._GetAutoObject(C.A5).
Cc(62);},_Init:function(aArg){C.GL._Init.call(this,aArg);this.__proto__=C.AOb;var
B;this.Ds(C.APi);this.Dl(A.aaR(A.acf.ASn));this.AwY([B=A._GetAutoObject(A.Device.
Device),B.A9b,B.BbO]);},_ReInit:function(){C.GL._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASn));},_className:"Application::DryCowListScreen"};C.AOa={_Init:function(
aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AOa;this.Li.As(false);this.Li.
Ai(false);this.Li.Z(false);this.Jy.As(false);this.Jy.Ai(false);this.Jy.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APi={DY:function(G){C.Kv.DY.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad5(9));},_Init:function(
aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APi;},_className:"Application::HeaderDryCowListFilter"
};C.Abz={Filter:null,L8:null,AHb:A.jV,Es:0,AGh:1,Operator:1,Bl:function(aSize){C.
Acw.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Aj:function(
Ae){C.Acw.Aj.call(this,Ae);this.L8.L(this.V.AR);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mk],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mk],E,0);A.pe([this,this.Mk],this);},Mk:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tz((F=this.Filter,F[1].call(
F[0])).DN(this.Es,this.Operator));else this.Tz(null);},Ns:function(E){if(this.Es===
E)return;this.Es=E;A.pe([this,this.Mk],this);},Tz:function(AH){if(!!AH){var A2B;
if(this.AGh!==1)A2B=this.AGh;else A2B=AH.Operator;this.T((this.AHb+CJ)+A._GetAutoObject(
A.Device.Converter).A64(A2B));this.ZH(false);}else{this.T(this.AHb);this.ZH(true
);}},OW:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mk],this);},AF5:function(E){if(this.AHb===E)return;this.AHb=E;A.pe([this,this.Mk
],this);},A_W:function(E){if(this.AGh===E)return;this.AGh=E;A.pe([this,this.Mk],
this);},_Init:function(aArg){C.Acw._Init.call(this,aArg);C.L8._Init.call(this.L8={
I:this},0);this.__proto__=C.Abz;this.H(Atb);this.AW.H(BsL);this.L8.H(A0A);this.Iu(
this.V,-1);this.J(this.L8,0);},_Done:function(){this.__proto__=C.Acw;this.L8._Done(
);C.Acw._Done.call(this);},_ReInit:function(){C.Acw._ReInit.call(this);this.L8._ReInit(
);},_Mark:function(D){var B;C.Acw._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={L8:null,Aj:function(Ae){C.QH.
Aj.call(this,Ae);this.L8.L(this.V.AR);},Tz:function(AH){if(!!AH){this.H_.Cx(1);this.
ZH(true);this.L8.A_M(false);}else{this.H_.Cx(0);this.ZH(false);this.L8.A_M(true);
}},_Init:function(aArg){C.QH._Init.call(this,aArg);C.L8._Init.call(this.L8={I:this
},0);this.__proto__=C.AjK;this.Jj=20;this.L8.H(A0A);this.J(this.L8,0);},_Done:function(
){this.__proto__=C.QH;this.L8._Done();C.QH._Done.call(this);},_ReInit:function(){
C.QH._ReInit.call(this);this.L8._ReInit();},_Mark:function(D){var B;C.QH._Mark.call(
this,D);if((B=this.L8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACd={Q:null,CQ:function(){this.T(A._GetAutoObject(A.Device.Helper).Am1(this.
TableId,this.Es));},Tz:function(AH){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H_.Cx(1);else this.H_.Cx(0);},Hg:function(G){A.pe([this,this.Mk],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},_Init:
function(aArg){C.QH._Init.call(this,aArg);this.__proto__=C.ACd;},_ReInit:function(
){C.QH._ReInit.call(this);this.CQ();},_Mark:function(D){var B;C.QH._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APL={Y3:null,Jf:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Y3={I:this},0);A.acg.Text._Init.call(this.Jf={I:this},0);this.__proto__=
C.APL;this.A_y(1);this.Y3.H(BsM);this.Y3.Lx(true);this.Y3.R(A.aaR(A.acf.AEk));this.
Y3.L(A.jb.Text);this.Jf.H(Xl);this.Jf.R(((A.aaR(A.acf.RX)+Ba9)+A.aaR(A.acf.BaQ))+
Pd);this.Jf.L(A.jb.Text);this.J(this.Y3,0);this.J(this.Jf,0);this.Y3.S(A.aaL(A.fl.
Ak));this.Jf.S(A.aaL(A.fl.Bg));},_Done:function(){this.__proto__=C.De;this.Y3._Done(
);this.Jf._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.Y3._ReInit();this.Jf._ReInit();this.Y3.R(A.aaR(A.acf.AEk));this.Jf.R(((A.
aaR(A.acf.RX)+Ba9)+A.aaR(A.acf.BaQ))+Pd);this.Y3.S(A.aaL(A.fl.Ak));this.Jf.S(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Y3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANi={Mu:null,KW:null,AdZ:null,AP:null,A_:null
,Xz:0,Init:function(aArg){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mu.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KW.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A_.H([this.KW.M[2]-1,0,this.
KW.M[2]+1,aSize[1]]);this.AdZ.H([this.KW.M[2],0,aSize[0],aSize[1]]);},Aj:function(
Ae){C.A$.Aj.call(this,Ae);this.KW.L(this.V.AR);this.AdZ.L(this.V.AR);if(!!this.Xz&&(
this.Xz!==5)){this.Mu.L(A._GetAutoObject(A.acj.Assessment).Qt(this.Xz));this.V.L(
A._GetAutoObject(A.acj.Assessment).XI(this.Xz));}else this.Mu.L(this.Background.
AR);},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mp=this.AX.
CE(Ad,1);var A2_=this.AX.CE(Ad,29);var Ph=this.AX.Hw(Ad,4);var L0=this.AX.Jb(Ad,
13);var AlL=this.AX.Jb(Ad,17);var AlT=this.AX.H6(Ad,11);this.Xz=A._GetAutoObject(
A.Device.Helper).AMt(L0,AlT,AlL);this.T(Mp.toFixed());this.KW.R(A2_.toFixed());this.
AdZ.R(A._GetAutoObject(A.acj.KS).AC9(Ph,A._GetAutoObject(A.Device.Helper).Dr(),BsN
));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.call(
this.Mu={I:this},0);A.acg.Text._Init.call(this.KW={I:this},0);A.acg.Text._Init.call(
this.AdZ={I:this},0);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(
this.A_={I:this},0);this.__proto__=C.ANi;this.Mu.H(Ati);this.AP.L(A.jb.Bb);this.
A_.L(A.jb.Bb);this.J(this.Mu,-1);this.J(this.KW,0);this.J(this.AdZ,0);this.J(this.
AP,0);this.J(this.A_,0);this.KW.S(A.aaL(A.fl.Af));this.AdZ.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Mu._Done();this.KW._Done(
);this.AdZ._Done();this.AP._Done();this.A_._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Mu._ReInit();this.KW._ReInit();this.AdZ.
_ReInit();this.AP._ReInit();this.A_._ReInit();this.KW.S(A.aaL(A.fl.Af));this.AdZ.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.Mu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R4={AJ1:0,Bev:false,Aj:function(Ae){C.Fz.Aj.call(this,Ae);if(this.Bev){this.
T(A.aaR(A.acf.AN_));this.KC(A.jV);}else{this.T(A.aaR(A.acf.BkB));if(this.AJ1>0)this.
KC(this.AJ1.toFixed());else this.KC(Xp);}},Ci:function(G){C.Fz.Ci.call(this,G);this.
Bev=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlG=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlG>0)this.AJ1=A._GetAutoObject(A.Device.Helper).
Mg(AlG,A._GetAutoObject(A.Device.Helper).Dr());else this.AJ1=0;this.Am();},_Init:
function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=C.R4;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMy={ALE:A.jV,Aj:function(Ae){C.Fz.Aj.call(this,Ae);this.T(A.aaR(A.acf.RX));
this.KC(this.ALE);},Ci:function(G){C.Fz.Ci.call(this,G);var Ph=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALE=A._GetAutoObject(A.acj.KS).AC9(Ph,A._GetAutoObject(
A.Device.Helper).Dr(),((((BsO+A.aaR(A.acf.BhM))+BsP)+A.aaR(A.acf.BhL))+BsQ)+A.aaR(
A.acf.AL8));this.Am();},_Init:function(aArg){C.Fz._Init.call(this,aArg);this.__proto__=
C.AMy;this.ALE=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fz._ReInit.call(this);
this.ALE=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN5={Uk:null,Ww:null,Wz:null,WA:null,SI:null,Init:function(aArg){this.Ba(this.
Uk);A.pe([this,this.MX],this);},AdB:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.El._Init.call(this,aArg);C.Nr._Init.call(this.Uk={
I:this},0);C.Nr._Init.call(this.Ww={I:this},0);C.Nr._Init.call(this.Wz={I:this},
0);C.Ab2._Init.call(this.WA={I:this},0);C.Uh._Init.call(this.SI={I:this},0);this.
__proto__=C.AN5;var B;this.Ds(C.APf);this.Uk.H(I2);this.Uk.Ai(true);this.Uk.T(A.
aaR(A.acf.ACJ));this.Uk.Bh(false);this.Uk.Nu(83);this.Ww.H(Qe);this.Ww.Ai(true);
this.Ww.T(A.aaR(A.acf.Info));this.Ww.Bh(true);this.Ww.Nu(82);this.Wz.H(Aaq);this.
Wz.Ai(true);this.Wz.T(A.aaR(A.acf.AGM));this.Wz.Bh(false);this.Wz.Nu(64);this.WA.
H(Alj);this.WA.Ai(true);this.WA.T(A.aaR(A.acf.TempMeasurement));this.WA.Bh(true);
this.WA.Nu(60);this.SI.H(Aoq);this.SI.Ai(true);this.SI.T(A.aaR(A.acf.AC4));this.
SI.Bh(false);this.J(this.Uk,-1);this.J(this.Ww,-1);this.J(this.Wz,-1);this.J(this.
WA,-1);this.J(this.SI,-1);this.N.Cf=[this,this.AdB];this.N.Cu(A.aaL(A.ach.ADV));
this.Uk.AQ=[B=this.Uk,B.Ny];this.Ww.AQ=[B=this.Ww,B.Ny];this.Wz.AQ=[B=this.Wz,B.
Ny];this.WA.AQ=[B=this.WA,B.Ny];this.SI.AQ=null;this.SI.Ab9([B=this.SI,B.Alo]);this.
SI.FT([this,this.D2,this.Gu]);this.SI.ATh([B=A._GetAutoObject(A.Device.Device),B.
ArF,B.Att]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.Uk._Done(
);this.Ww._Done();this.Wz._Done();this.WA._Done();this.SI._Done();C.El._Done.call(
this);},_ReInit:function(){C.El._ReInit.call(this);this.Uk._ReInit();this.Ww._ReInit(
);this.Wz._ReInit();this.WA._ReInit();this.SI._ReInit();this.Uk.T(A.aaR(A.acf.ACJ
));this.Ww.T(A.aaR(A.acf.Info));this.Wz.T(A.aaR(A.acf.AGM));this.WA.T(A.aaR(A.acf.
TempMeasurement));this.SI.T(A.aaR(A.acf.AC4));},_Mark:function(D){var B;C.El._Mark.
call(this,D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN6={Ui:null,Ab0:null,Wx:null,Init:function(aArg
){this.Ba(this.Ui);},BzR:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Ble:function(G){if(A._GetAutoObject(A.Device.Device).Abd<=20)A._GetAutoObject(
A.Device.Device).AZ(76,true,BsR,0,null);else A._GetAutoObject(A.Device.Device).AZ(
39,true,A.jV,0,[this,this.BzR]);},_Init:function(aArg){C.El._Init.call(this,aArg
);C.Nr._Init.call(this.Ui={I:this},0);C.Cp._Init.call(this.Ab0={I:this},0);C.Ab2.
_Init.call(this.Wx={I:this},0);this.__proto__=C.AN6;var B;this.Ds(C.APg);this.Ui.
H(I2);this.Ui.Ai(true);this.Ui.T(A.aaR(A.acf.A6a));this.Ui.Bh(false);this.Ui.Nu(
65);this.Ab0.H(Qe);this.Ab0.Ai(true);this.Ab0.T(A.aaR(A.acf.A66));this.Ab0.Bh(true
);this.Wx.H(Aaq);this.Wx.Ai(true);this.Wx.T(A.aaR(A.acf.RangeTest));this.Wx.Bh(false
);this.Wx.Nu(15);this.J(this.Ui,-1);this.J(this.Ab0,-1);this.J(this.Wx,-1);this.
Ui.AQ=[B=this.Ui,B.Ny];this.Ab0.AQ=[this,this.Ble];this.Wx.AQ=[B=this.Wx,B.Ny];this.
Init(aArg);},_Done:function(){this.__proto__=C.El;this.Ui._Done();this.Ab0._Done(
);this.Wx._Done();C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this
);this.Ui._ReInit();this.Ab0._ReInit();this.Wx._ReInit();this.Ui.T(A.aaR(A.acf.A6a
));this.Ab0.T(A.aaR(A.acf.A66));this.Wx.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APg={_Init:function(aArg){
C.Ku._Init.call(this,aArg);this.__proto__=C.APg;this.Text.R(A.aaR(A.acf.AGM));},
_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGM));},_className:
"Application::HeaderDeviceServiceMenu"};C.Nr={Nk:null,Aj:function(Ae){C.Ab2.Aj.call(
this,Ae);this.Nk.L(this.V.AR);},_Init:function(aArg){C.Ab2._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Nk={I:this},0);this.__proto__=C.Nr;this.Nk.A1(0x38);this.
Nk.H(BsS);this.J(this.Nk,0);this.V.Cm(A.aaL(A.fl.Bg));this.Nk.Ax(A.aaL(A.ach.Aju
));},_Done:function(){this.__proto__=C.Ab2;this.Nk._Done();C.Ab2._Done.call(this
);},_ReInit:function(){C.Ab2._ReInit.call(this);this.Nk._ReInit();this.V.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.Ab2._Mark.call(this,D);if((B=this.Nk)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.AN1={Ahf:
null,Ahl:null,Ahn:null,Ahj:null,Aj_:null,Ahi:null,Ahh:null,Ahg:null,Aj8:null,Ahe:
null,Aj9:null,Ahm:null,Aj$:null,Ahk:null,Aka:null,Init:function(aArg){this.Ba(this.
Ahf);},_Init:function(aArg){C.El._Init.call(this,aArg);C.PV._Init.call(this.Ahf={
I:this},0);C.PV._Init.call(this.Ahl={I:this},0);C.PV._Init.call(this.Ahn={I:this
},0);C.PV._Init.call(this.Ahj={I:this},0);C.PV._Init.call(this.Aj_={I:this},0);C.
PV._Init.call(this.Ahi={I:this},0);C.PV._Init.call(this.Ahh={I:this},0);C.PV._Init.
call(this.Ahg={I:this},0);C.PV._Init.call(this.Aj8={I:this},0);C.PV._Init.call(this.
Ahe={I:this},0);C.PV._Init.call(this.Aj9={I:this},0);C.PV._Init.call(this.Ahm={I:
this},0);C.PV._Init.call(this.Aj$={I:this},0);C.PV._Init.call(this.Ahk={I:this},
0);C.PV._Init.call(this.Aka={I:this},0);this.__proto__=C.AN1;this.Ds(C.APb);this.
Ahf.H(Atp);this.Ahf.Ai(true);this.Ahf.SQ(1);this.Ahl.H(A0x);this.Ahl.Ai(true);this.
Ahl.Bh(true);this.Ahl.SQ(2);this.Ahn.H(Atl);this.Ahn.Ai(true);this.Ahn.Bh(false);
this.Ahn.SQ(3);this.Ahj.H(Atm);this.Ahj.Ai(true);this.Ahj.Bh(true);this.Ahj.SQ(4
);this.Aj_.H(AyC);this.Aj_.Ai(true);this.Aj_.SQ(5);this.Ahi.H(BsT);this.Ahi.Ai(true
);this.Ahi.Bh(true);this.Ahi.SQ(6);this.Ahh.H(Atn);this.Ahh.Ai(true);this.Ahh.Bh(
false);this.Ahh.SQ(7);this.Ahg.H(AyK);this.Ahg.Ai(true);this.Ahg.Bh(true);this.Ahg.
SQ(8);this.Aj8.H(A0y);this.Aj8.Ai(true);this.Aj8.SQ(9);this.Ahe.H(Aoy);this.Ahe.
Ai(true);this.Ahe.Bh(true);this.Ahe.SQ(10);this.Aj9.H(BsU);this.Aj9.Ai(true);this.
Aj9.SQ(11);this.Ahm.H(BsV);this.Ahm.Ai(true);this.Ahm.Bh(true);this.Ahm.SQ(12);this.
Aj$.H(BsW);this.Aj$.Ai(true);this.Aj$.SQ(13);this.Ahk.H(BsX);this.Ahk.Ai(true);this.
Ahk.Bh(true);this.Ahk.SQ(14);this.Aka.H(BsY);this.Aka.Ai(true);this.Aka.SQ(15);this.
J(this.Ahf,-1);this.J(this.Ahl,-1);this.J(this.Ahn,-1);this.J(this.Ahj,-1);this.
J(this.Aj_,-1);this.J(this.Ahi,-1);this.J(this.Ahh,-1);this.J(this.Ahg,-1);this.
J(this.Aj8,-1);this.J(this.Ahe,-1);this.J(this.Aj9,-1);this.J(this.Ahm,-1);this.
J(this.Aj$,-1);this.J(this.Ahk,-1);this.J(this.Aka,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.El;this.Ahf._Done();this.Ahl._Done();this.Ahn._Done();this.Ahj.
_Done();this.Aj_._Done();this.Ahi._Done();this.Ahh._Done();this.Ahg._Done();this.
Aj8._Done();this.Ahe._Done();this.Aj9._Done();this.Ahm._Done();this.Aj$._Done();
this.Ahk._Done();this.Aka._Done();C.El._Done.call(this);},_ReInit:function(){C.El.
_ReInit.call(this);this.Ahf._ReInit();this.Ahl._ReInit();this.Ahn._ReInit();this.
Ahj._ReInit();this.Aj_._ReInit();this.Ahi._ReInit();this.Ahh._ReInit();this.Ahg.
_ReInit();this.Aj8._ReInit();this.Ahe._ReInit();this.Aj9._ReInit();this.Ahm._ReInit(
);this.Aj$._ReInit();this.Ahk._ReInit();this.Aka._ReInit();},_Mark:function(D){var
B;C.El._Mark.call(this,D);if((B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.APb={_Init:function(aArg){C.Ku._Init.call(this
,aArg);this.__proto__=C.APb;this.Text.R(A.aaR(A.acf.A6D));},_ReInit:function(){C.
Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6D));},_className:"Application::HeaderDeviceCheck"
};C.PV={DeviceComponentToString:null,Kp:null,Au8:0,Bc5:false,CQ:function(){this.
V.R(this.DeviceComponentToString.BU(this.Au8));},Bl:function(aSize){var B;C.Cp.Bl.
call(this,aSize);this.Kp.H(A.abM(this.Kp.M,aSize[0]-((B=this.Kp.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kp.M[0]));},Aj:function(Ae){C.Cp.Aj.call(this,Ae);this.Kp.
AFb(this.V.AR);if(this.Bc5)this.Kp.AwQ(A.jb.E2);else this.Kp.AwQ(A.jb.Gn);},SQ:function(
E){if(this.Au8===E)return;this.Au8=E;this.T(this.DeviceComponentToString.BU(E));
this.DY(this);},DY:function(G){this.Bc5=A._GetAutoObject(A.Device.Device).AJS(this.
Au8);this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kp._Init.call(this.Kp={I:this
},0);this.__proto__=C.PV;this.V.H(BsZ);this.V.A4(0x11);this.Kp.H(Bs0);this.J(this.
Kp,0);},_Done:function(){this.__proto__=C.Cp;this.DeviceComponentToString._Done(
);this.Kp._Done();C.Cp._Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kp._ReInit();this.CQ();},_Mark:function(
D){var B;C.Cp._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sp={Ay:null,DZ:null,Y:null,Init:function(aArg){A.pe([this,this.AAS],this);},
Ba:function(E){C.AB.Ba.call(this,E);this.ALz(this);this.DL(this);},CC:function(G
){A.pe([this,this.MX],this);},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},AAS:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A7i();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MX],this);},Ex:function(G){A._GetAutoObject(C.A5).FA(
);},A3$:function(G){A._GetAutoObject(C.A5).Cc(84);},DL:function(G){this.N.C4(A.aaL(
A.ach.E3));this.N.CF=[this,this.Ex];this.N.Cu(A.aaL(A.ach.ADU));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arl(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.IT.C0(100);}else{this.N.Cf=[this
,this.AAS];this.N.IT.C0(255);}this.N.C5(A.aaL(A.ach.AeI));this.N.Ce=[this,this.A3$
];},MX:function(s){this.DL(s);},ALz:function(G){A.ab5("%s",Bs1);},BHr:function(s
){this.ALz(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sp;this.N.As(false);this.N.Z(true);this.Ds(C.
AbD);this.Ay.H(Ix);this.DZ.A1(0x3F);this.DZ.H(Fd);this.DZ.L(A.jb.CL);this.Y.H(LD
);this.Y.J3(9);this.J(this.Ay,0);this.J(this.DZ,0);this.J(this.Y,0);this.Y.Eo=[this
,this.Fi];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DZ._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DZ._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOp={Yp:null,Yo:null,Yb:null
,TQ:null,DL:function(G){C.Sp.DL.call(this,G);if(this.AV===this.TQ){this.N.Cu(null
);this.N.Cf=null;this.N.C5(null);this.N.Ce=null;}},ALz:function(G){if(this.AV===
this.TQ)this.Ds(C.APm);else this.Ds(C.AbD);},BAd:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQq);case 1:return A.
aaL(A.ach.AQr);default:A.ab5("%s%s",Bs2,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BAe:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQs);case 1:return A.aaL(A.ach.AQt);default:
A.ab5("%s%s",AIU,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ik:function(G){var Cz=(C.Fn.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.
Yp)A._GetAutoObject(C.A5).Cc(66);else if(Cz===this.Yo)A._GetAutoObject(C.A5).Cc(
56);else if(Cz===this.Yb)A._GetAutoObject(C.A5).Cc(58);else if(Cz===this.TQ)A._GetAutoObject(
C.A5).Cc(59);},_Init:function(aArg){C.Sp._Init.call(this,aArg);C.Fn._Init.call(this.
Yp={I:this},0);C.Fn._Init.call(this.Yo={I:this},0);C.Fn._Init.call(this.Yb={I:this
},0);C.Fn._Init.call(this.TQ={I:this},0);this.__proto__=C.AOp;this.Yp.H(Qc);this.
Yp.Ai(true);this.Yp.T(A.aaR(A.acf.AfB));this.Yo.H(J$);this.Yo.Ai(true);this.Yo.T(
A.aaR(A.acf.Temperature));this.Yb.H(Bs3);this.Yb.Ai(true);this.Yb.T(A.aaR(A.acf.
Rating));this.TQ.H(Bs4);this.TQ.Ai(true);this.TQ.T(A.aaR(A.acf.A8o));this.J(this.
Yp,0);this.J(this.Yo,0);this.J(this.Yb,0);this.J(this.TQ,0);this.Yp.AQ=[this,this.
Ik];this.Yp.DD(this.BAe());this.Yo.AQ=[this,this.Ik];this.Yo.DD(this.BAd());this.
Yb.AQ=[this,this.Ik];this.Yb.DD(A.aaL(A.ach.AQo));this.TQ.AQ=[this,this.Ik];this.
TQ.DD(A.aaL(A.ach.AQp));},_Done:function(){this.__proto__=C.Sp;this.Yp._Done();this.
Yo._Done();this.Yb._Done();this.TQ._Done();C.Sp._Done.call(this);},_ReInit:function(
){C.Sp._ReInit.call(this);this.Yp._ReInit();this.Yo._ReInit();this.Yb._ReInit();
this.TQ._ReInit();this.Yp.T(A.aaR(A.acf.AfB));this.Yo.T(A.aaR(A.acf.Temperature)
);this.Yb.T(A.aaR(A.acf.Rating));this.TQ.T(A.aaR(A.acf.A8o));},_Mark:function(D){
var B;C.Sp._Mark.call(this,D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOq={VV:null,Yd:null,Yq:null,ALz:function(G){this.Ds(C.AvD);},BAj:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARc
);case 1:return A.aaL(A.ach.ARd);default:A.ab5("%s%s",AIU,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ik:function(G){var Cz=(C.Fn.isPrototypeOf(
G)?G:null);if(!Cz)return;if(Cz===this.VV)A._GetAutoObject(C.A5).Cc(68);else if(Cz===
this.Yq)A._GetAutoObject(C.A5).Cc(57);else if(Cz===this.Yd)A._GetAutoObject(C.A5
).Cc(67);},BAi:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AQb);case 1:return A.aaL(A.ach.AQc);default:A.ab5("%s%s",AIU
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BAk:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARe
);case 1:return A.aaL(A.ach.ARf);default:A.ab5("%s%s",AIU,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sp._Init.call(
this,aArg);C.Fn._Init.call(this.VV={I:this},0);C.Fn._Init.call(this.Yd={I:this},
0);C.Fn._Init.call(this.Yq={I:this},0);this.__proto__=C.AOq;this.VV.H(Qc);this.VV.
Ai(true);this.VV.T(A.aaR(A.acf.BaI));this.Yd.H(A0B);this.Yd.Ai(true);this.Yd.T(A.
aaR(A.acf.A52));this.Yq.H(Oj);this.Yq.Ai(true);this.Yq.T(A.aaR(A.acf.BaL));this.
J(this.VV,0);this.J(this.Yd,0);this.J(this.Yq,0);this.VV.AQ=[this,this.Ik];this.
VV.DD(this.BAj());this.VV.Acb(A.aaL(A.ach.N4));this.Yd.AQ=[this,this.Ik];this.Yd.
DD(this.BAi());this.Yq.AQ=[this,this.Ik];this.Yq.DD(this.BAk());},_Done:function(
){this.__proto__=C.Sp;this.VV._Done();this.Yd._Done();this.Yq._Done();C.Sp._Done.
call(this);},_ReInit:function(){C.Sp._ReInit.call(this);this.VV._ReInit();this.Yd.
_ReInit();this.Yq._ReInit();this.VV.T(A.aaR(A.acf.BaI));this.Yd.T(A.aaR(A.acf.A52
));this.Yq.T(A.aaR(A.acf.BaL));},_Mark:function(D){var B;C.Sp._Mark.call(this,D);
if((B=this.VV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOt={Bey:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Z0(0));},_Init:function(aArg){C.AqR._Init.call(this,aArg);this.
__proto__=C.AOt;this.Afd(A.aaR(A.acf.A8J));},_ReInit:function(){C.AqR._ReInit.call(
this);this.Afd(A.aaR(A.acf.A8J));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOm={Aik:null,AbG:null,UT:null,Aa9:null,Ps:null,Ajq:null,AgE:null,Ajr:null,AgF:
null,Ay:null,Aa0:null,Adi:0,Apy:0,DG:function(G){switch(this.Cr.CP){case 4:{if(this.
Ja.Fp())return;var QC=this.Y.Bs[1]+80;this.Y.Gi([this.Y.Bs[0],QC]);this.Y.VH(null
,null);}break;case 5:{if(this.Ja.Fp())return;var QC=this.Y.Bs[1]-80;this.Y.Gi([this.
Y.Bs[0],QC]);this.Y.VH(null,null);}break;default:C.FB.DG.call(this,G);}},Ap9:function(
L$,Ac4){if(!L$)return;var Fx=A._NewObject(A.Device.Filter,0);var HY=A._NewObject(
A.Device.Int32FilterCriterion,0);HY.Initialize(1,0,Ac4,true);Fx.CY(HY);var Ade=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ade.Initialize(8,2,0,true);Fx.CY(Ade
);L$.Bk(Fx);},Aiy:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arm()){this.
Aik.OC(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azu=this.BAb(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aa0.Set(Azu,this.Aa0.Get(Azu)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adi++;this.Apy=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FB.Aiy.call(
this,G);},AaA:function(G){if(this.Adi>1)A._GetAutoObject(A.Device.Device).AZ(56,
true,this.Adi.toFixed(),0,null);if(this.Adi===1)A._GetAutoObject(A.Device.Device
).AZ(53,true,this.Apy.toFixed(),0,null);if(this.Aik.A0>0)this.UT.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Aik.AjP()|0,1)+AyQ)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Aik.Aq2()|0,1))+CJ)+A._GetAutoObject(A.acj.DV).Af_())+AyR)+this.Aik.A0.
toFixed())+Pd);else this.UT.T(A.aaR(A.acf.Unknown));var RT=this.Aa0.Am2();var O;
for(O=0;O<this.Aa0.MQ;O++){var Bj=this.BAy(O);if(!!Bj){var CB=this.Aa0.Get(O);Bj.
BmO(CB);if(!RT)Bj.A_2(0);else Bj.A_2(Math.round((CB*100)/RT)|0);Bj.Bou(this.BAx(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adn=false;if(this.Aik.A0>0)
Adn=true;this.Ja.Z(!Adn);C.FB.AaA.call(this,G);},Adu:function(G){this.Aik.Yr();this.
Aa0.FE();this.Adi=0;this.Apy=0;C.FB.Adu.call(this,G);},BAy:function(aIndex){var Bj=
null;switch(aIndex){case 0:Bj=this.Ps;break;case 1:Bj=this.Ajq;break;case 2:Bj=this.
AgE;break;case 3:Bj=this.Ajr;break;case 4:Bj=this.AgF;break;default:throw new Error(
AyS+aIndex.toFixed());}return Bj;},BAx:function(aIndex,AoM){var B;var TA=A.jV;switch(
AoM){case 0:{switch(aIndex){case 0:TA=Bs5;break;case 1:TA=Bs6;break;case 2:TA=Bs7;
break;case 3:TA=Bs8;break;case 4:TA=Bs9;break;default:throw new Error(AyS+aIndex.
toFixed());}TA=TA+(CJ+A.aaR(A.acf.AAl));}break;case 1:{switch(aIndex){case 0:TA=
Bs_;break;case 1:TA=Bs$;break;case 2:TA=Bta;break;case 3:TA=Btb;break;case 4:TA=
Btc;break;default:throw new Error(AyS+aIndex.toFixed());}TA=TA+(CJ+A.aaR(A.acf.A76
));}break;default:A.ab5("%s%e",Ba_,AoM);}return TA;},BAc:function(AJc,AoM){var Adf=
0;switch(AoM){case 0:switch(AJc){case 0:Adf=35000;break;case 1:Adf=40000;break;case
2:Adf=45000;break;case 3:Adf=50000;break;case 4:Adf=2147483647;break;default:throw new
Error(AyS+AJc.toFixed());}break;case 1:switch(AJc){case 0:Adf=36287;break;case 1:
Adf=40823;break;case 2:Adf=45359;break;case 3:Adf=49895;break;case 4:Adf=2147483647;
break;default:throw new Error(AyS+AJc.toFixed());}break;default:A.ab5("%s%e",Ba_
,AoM);}return Adf;},BAb:function(A9,AoM){var Azu=0;var O;for(O=0;O<this.Aa0.MQ;O++
)if(A9<this.BAc(O,AoM)){Azu=O;break;}return Azu;},Fi:function(G){var B;this.Ay.MK((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[
1]);},_Init:function(aArg){C.FB._Init.call(this,aArg);C.AgC._Init.call(this.AbG={
I:this},0);C.IL._Init.call(this.UT={I:this},0);C.Aa9._Init.call(this.Aa9={I:this
},0);C.Ps._Init.call(this.Ps={I:this},0);C.Ps._Init.call(this.Ajq={I:this},0);C.
Ps._Init.call(this.AgE={I:this},0);C.Ps._Init.call(this.Ajr={I:this},0);C.Ps._Init.
call(this.AgF={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.Aa0={I:this},0);this.__proto__=C.AOm;this.Ds(C.AvD);this.Akz(A.aaR(
A.acf.A6V));this.Afd(A.aaR(A.acf.A8C));this.AbG.H(Atp);this.AbG.Ai(true);this.AbG.
T(A.aaR(A.acf.A5R));this.AbG.Bh(false);this.AbG.KA(5);this.UT.H(A0x);this.UT.Ai(
true);this.UT.T(A.jV);this.UT.Bh(true);this.UT.KA(5);this.Aa9.H(Atl);this.Aa9.Ai(
true);this.Ps.H(Atm);this.Ps.Ai(true);this.Ps.Bh(true);this.Ajq.H(Atn);this.Ajq.
Ai(true);this.AgE.H(AyK);this.AgE.Ai(true);this.AgE.Bh(true);this.Ajr.H(A0y);this.
Ajr.Ai(true);this.AgF.H(Aoy);this.AgF.Ai(true);this.AgF.Bh(true);this.Ay.H(Ix);this.
Aa0.ZI(5);this.J(this.AbG,-1);this.J(this.UT,-1);this.J(this.Aa9,-1);this.J(this.
Ps,-1);this.J(this.Ajq,-1);this.J(this.AgE,-1);this.J(this.Ajr,-1);this.J(this.AgF
,-1);this.J(this.Ay,-1);this.Y.Eo=[this,this.Fi];this.Aik=A._NewObject(C.AvW,0);
this.UT.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FB;this.AbG._Done(
);this.UT._Done();this.Aa9._Done();this.Ps._Done();this.Ajq._Done();this.AgE._Done(
);this.Ajr._Done();this.AgF._Done();this.Ay._Done();this.Aa0._Done();C.FB._Done.
call(this);},_ReInit:function(){C.FB._ReInit.call(this);this.AbG._ReInit();this.
UT._ReInit();this.Aa9._ReInit();this.Ps._ReInit();this.Ajq._ReInit();this.AgE._ReInit(
);this.Ajr._ReInit();this.AgF._ReInit();this.Ay._ReInit();this.Aa0._ReInit();this.
Akz(A.aaR(A.acf.A6V));this.Afd(A.aaR(A.acf.A8C));this.AbG.T(A.aaR(A.acf.A5R));this.
UT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FB._Mark.call(this,D);if((B=this.
Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa9={Ic:null,Gw:null
,Bl:function(aSize){C.IL.Bl.call(this,aSize);this.Ic.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gw.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Aj:
function(Ae){C.IL.Aj.call(this,Ae);this.Ic.L(this.V.AR);this.Gw.L(this.V.AR);},_Init:
function(aArg){C.IL._Init.call(this,aArg);A.acg.Text._Init.call(this.Ic={I:this}
,0);A.acg.Text._Init.call(this.Gw={I:this},0);this.__proto__=C.Aa9;this.T(A.aaR(
A.acf.AHo));this.Ic.H(Btd);this.Ic.Lx(true);this.Ic.R(A.aaR(A.acf.AqE));this.Ic.
L(A.jb.Text);this.Gw.H(Ba$);this.Gw.R(AfM);this.Gw.L(A.jb.Text);this.J(this.Ic,0
);this.J(this.Gw,0);this.V.S(A.aaL(A.fl.HK));this.Ic.S(A.aaL(A.fl.HK));this.Gw.S(
A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.IL;this.Ic._Done();this.Gw._Done(
);C.IL._Done.call(this);},_ReInit:function(){C.IL._ReInit.call(this);this.Ic._ReInit(
);this.Gw._ReInit();this.T(A.aaR(A.acf.AHo));this.Ic.R(A.aaR(A.acf.AqE));this.V.
S(A.aaL(A.fl.HK));this.Ic.S(A.aaL(A.fl.HK));this.Gw.S(A.aaL(A.fl.Kt));},_Mark:function(
D){var B;C.IL._Mark.call(this,D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Ps={AP:null,A_:null,P5:null,Ic:null,Gw:null,BaK:A.jV,AqE:0,A$y:0,Bl:function(
aSize){C.IL.Bl.call(this,aSize);this.P5.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P5.M[2]-1,0,this.P5.M[2]+1,aSize[1]]);this.Ic.H([this.P5.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A_.H([this.Ic.M[2]-1,0,this.Ic.M[2]+1,aSize[
1]]);this.Gw.H([this.Ic.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.IL.Aj.call(
this,Ae);this.P5.L(this.V.AR);this.Ic.L(this.V.AR);this.Gw.L(this.V.AR);},Bou:function(
E){if(this.BaK===E)return;this.BaK=E;this.P5.R(E);},BmO:function(E){if(this.AqE===
E)return;this.AqE=E;this.Ic.R(E.toFixed());},A_2:function(E){if(this.A$y===E)return;
this.A$y=E;this.Gw.R(E.toFixed()+As4);},_Init:function(aArg){C.IL._Init.call(this
,aArg);A.acg.AK._Init.call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this
},0);A.acg.Text._Init.call(this.P5={I:this},0);A.acg.Text._Init.call(this.Ic={I:
this},0);A.acg.Text._Init.call(this.Gw={I:this},0);this.__proto__=C.Ps;this.AP.L(
A.jb.Bb);this.A_.L(A.jb.Bb);this.P5.H(Bte);this.P5.R(A.aaR(A.acf.AHo));this.P5.L(
A.jb.Text);this.Ic.R(U8);this.Ic.L(A.jb.Text);this.Gw.R(Btf);this.Gw.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A_,0);this.J(this.P5,0);this.J(this.Ic,0);this.J(
this.Gw,0);this.P5.S(A.aaL(A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gw.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IL;this.AP._Done();this.A_._Done();this.
P5._Done();this.Ic._Done();this.Gw._Done();C.IL._Done.call(this);},_ReInit:function(
){C.IL._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.P5._ReInit();
this.Ic._ReInit();this.Gw._ReInit();this.P5.R(A.aaR(A.acf.AHo));this.P5.S(A.aaL(
A.fl.Af));this.Ic.S(A.aaL(A.fl.Af));this.Gw.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IL._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMK={AK1:
function(){var Be=A._GetAutoObject(A.Device.Helper).ME();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.__proto__=
C.AMK;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARS={R$:null,
Sf:null,R_:null,Sc:null,Pu:null,Sb:null,ALw:function(G){A.pe([this,this.BDr],this
);A.pe([this,this.BDf],this);A.pe([this,this.BDb],this);A.pe([this,this.A46],this
);A.pe([this,this.BDi],this);A.pe([this,this.BDg],this);},Ik:function(G){var Cz=(
C.Q0.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.Sf)A._GetAutoObject(C.A5
).Cc(20);else if(Cz===this.Pu)A._GetAutoObject(C.A5).Cc(14);else if(Cz===this.R$
)A._GetAutoObject(C.A5).Cc(12);else if(Cz===this.Sc)A._GetAutoObject(C.A5).Cc(43
);else if(Cz===this.R_)A._GetAutoObject(C.A5).Cc(51);else if(Cz===this.Sb)A._GetAutoObject(
C.A5).Cc(61);},BDf:function(G){var Be=A._GetAutoObject(A.Device.Helper).ME();var
AzB=A._NewObject(A.Device.BoolFilterCriterion,0);AzB.Initialize(9,0,true,true);Be.
CY(AzB);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pu.ZG(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BDr:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ME();var ABL=A._NewObject(A.Device.BoolFilterCriterion,0);ABL.Initialize(
12,0,true,true);Be.CY(ABL);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sf.ZG(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDb:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).ME();var Azh=A._NewObject(A.Device.BoolFilterCriterion
,0);Azh.Initialize(8,0,true,true);Be.CY(Azh);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R$.ZG(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},A46:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A7c(A._GetAutoObject(A.Device.Device
).ABR);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R_.ZG(A._GetAutoObject(A.
Device.Device).An.B_().toFixed());},BDi:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A7l();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sc.ZG(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BDg:function(G){var Be=A._GetAutoObject(A.
Device.Helper).ADb();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sb.ZG(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},_Init:function(aArg){C.Ud._Init.call(this,
aArg);C.Q0._Init.call(this.R$={I:this},0);C.Q0._Init.call(this.Sf={I:this},0);C.
Q0._Init.call(this.R_={I:this},0);C.Q0._Init.call(this.Sc={I:this},0);C.Q0._Init.
call(this.Pu={I:this},0);C.Q0._Init.call(this.Sb={I:this},0);this.__proto__=C.ARS;
this.R$.H(Qc);this.R$.Ai(true);this.R$.T(A.aaR(A.acf.Alarm));this.R$.Ab_(true);this.
Sf.H(A0B);this.Sf.Ai(true);this.Sf.T(A.aaR(A.acf.Asi));this.Sf.Ab_(true);this.R_.
H(Oj);this.R_.Ai(true);this.R_.T(A.aaR(A.acf.ActionList));this.R_.Ab_(true);this.
Sc.H(Qd);this.Sc.Ai(true);this.Sc.T(A.aaR(A.acf.AOQ));this.Sc.Ab_(true);this.Pu.
H(Ti);this.Pu.As(false);this.Pu.Ai(false);this.Pu.Z(false);this.Pu.T(A.aaR(A.acf.
ACw));this.Pu.Ab_(true);this.Sb.H(UZ);this.Sb.Ai(true);this.Sb.T(A.aaR(A.acf.A6Q
));this.Sb.Ab_(true);this.J(this.R$,-1);this.J(this.Sf,-1);this.J(this.R_,-1);this.
J(this.Sc,-1);this.J(this.Pu,-1);this.J(this.Sb,-1);this.R$.AQ=[this,this.Ac1];this.
R$.DD(A.aaL(A.ach.ADL));this.R$.Acb(A.aaL(A.ach.N4));this.Sf.AQ=[this,this.Ac1];
this.Sf.DD(A.aaL(A.ach.AQ$));this.Sf.Acb(A.aaL(A.ach.N4));this.R_.AQ=[this,this.
Ac1];this.R_.DD(A.aaL(A.ach.APX));this.R_.Acb(A.aaL(A.ach.N4));this.Sc.AQ=[this,
this.Ac1];this.Sc.DD(A.aaL(A.ach.AQv));this.Sc.Acb(A.aaL(A.ach.N4));this.Pu.AQ=[
this,this.Ac1];this.Pu.DD(A.aaL(A.ach.ADL));this.Pu.Acb(A.aaL(A.ach.N4));this.Sb.
AQ=[this,this.Ac1];this.Sb.DD(A.aaL(A.ach.AQl));this.Sb.Acb(A.aaL(A.ach.N4));},_Done:
function(){this.__proto__=C.Ud;this.R$._Done();this.Sf._Done();this.R_._Done();this.
Sc._Done();this.Pu._Done();this.Sb._Done();C.Ud._Done.call(this);},_ReInit:function(
){C.Ud._ReInit.call(this);this.R$._ReInit();this.Sf._ReInit();this.R_._ReInit();
this.Sc._ReInit();this.Pu._ReInit();this.Sb._ReInit();this.R$.T(A.aaR(A.acf.Alarm
));this.Sf.T(A.aaR(A.acf.Asi));this.R_.T(A.aaR(A.acf.ActionList));this.Sc.T(A.aaR(
A.acf.AOQ));this.Pu.T(A.aaR(A.acf.ACw));this.Sb.T(A.aaR(A.acf.A6Q));},_Mark:function(
D){var B;C.Ud._Mark.call(this,D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARR={Sg:null,VU:null,Sd:null,Sa:null,Se:null,ALw:function(G){A.pe([this,this.
BDc],this);A.pe([this,this.BDm],this);A.pe([this,this.BDn],this);A.pe([this,this.
BDs],this);A.pe([this,this.BDo],this);},Ik:function(G){var Cz=(C.Q0.isPrototypeOf(
G)?G:null);if(!Cz)return;if(Cz===this.VU)A._GetAutoObject(C.A5).Cc(90);if(Cz===this.
Sa)A._GetAutoObject(C.A5).Cc(74);if(Cz===this.Sd)A._GetAutoObject(C.A5).Cc(71);if(
Cz===this.Se)A._GetAutoObject(C.A5).Cc(46);if(Cz===this.Sg)A._GetAutoObject(C.A5
).Cc(85);},BDn:function(G){var Be=A._GetAutoObject(A.Device.Helper).ADe();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.Se.ZG(A._GetAutoObject(A.Device.Device).An.B_().
toFixed());},BDs:function(G){var Be=A._GetAutoObject(A.Device.Helper).A7w(Math.max(
A._GetAutoObject(A.Device.Device).Av4,A._GetAutoObject(A.Device.Helper).A7o(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sg.ZG(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDm:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A7r();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.Sd.ZG(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDc:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOR();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.Sa.ZG(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDo:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avz();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VU.ZG(A._GetAutoObject(A.Device.Device).An.B_().toFixed()
);},_Init:function(aArg){C.Ud._Init.call(this,aArg);C.Q0._Init.call(this.Sg={I:this
},0);C.Q0._Init.call(this.VU={I:this},0);C.Q0._Init.call(this.Sd={I:this},0);C.Q0.
_Init.call(this.Sa={I:this},0);C.Q0._Init.call(this.Se={I:this},0);this.__proto__=
C.ARR;this.Sg.H(Btg);this.Sg.Ai(true);this.Sg.T(A.aaR(A.acf.A8u));this.Sg.Ab_(true
);this.VU.H(Bth);this.VU.Ai(true);this.VU.T(A.aaR(A.acf.AGr));this.Sd.H(Bti);this.
Sd.Ai(true);this.Sd.T(A.aaR(A.acf.A8w));this.Sd.Ab_(true);this.Sa.H(Btj);this.Sa.
Ai(true);this.Sa.T(A.aaR(A.acf.ACb));this.Sa.Ab_(true);this.Se.H(Btk);this.Se.Ai(
true);this.Se.T(A.aaR(A.acf.ASt));this.Se.Ab_(true);this.J(this.Sg,-1);this.J(this.
VU,-1);this.J(this.Sd,-1);this.J(this.Sa,-1);this.J(this.Se,-1);this.Sg.AQ=[this
,this.Ac1];this.Sg.DD(A.aaL(A.ach.AQN));this.Sg.Acb(A.aaL(A.ach.N4));this.VU.AQ=[
this,this.Ac1];this.VU.DD(A.aaL(A.ach.AD1));this.Sd.AQ=[this,this.Ac1];this.Sd.DD(
A.aaL(A.ach.AQP));this.Sd.Acb(A.aaL(A.ach.N4));this.Sa.AQ=[this,this.Ac1];this.Sa.
DD(A.aaL(A.ach.AQg));this.Sa.Acb(A.aaL(A.ach.N4));this.Se.AQ=[this,this.Ac1];this.
Se.DD(A.aaL(A.ach.AQR));this.Se.Acb(A.aaL(A.ach.N4));},_Done:function(){this.__proto__=
C.Ud;this.Sg._Done();this.VU._Done();this.Sd._Done();this.Sa._Done();this.Se._Done(
);C.Ud._Done.call(this);},_ReInit:function(){C.Ud._ReInit.call(this);this.Sg._ReInit(
);this.VU._ReInit();this.Sd._ReInit();this.Sa._ReInit();this.Se._ReInit();this.Sg.
T(A.aaR(A.acf.A8u));this.VU.T(A.aaR(A.acf.AGr));this.Sd.T(A.aaR(A.acf.A8w));this.
Sa.T(A.aaR(A.acf.ACb));this.Se.T(A.aaR(A.acf.ASt));},_Mark:function(D){var B;C.Ud.
_Mark.call(this,D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASr={WJ:function(G){this.AgB(
);this.AMi();this.A5t(A.aaR(A.acf.A79),[this,this.Bn$],131072);this.A5t(A.aaR(A.
acf.A78),[this,this.Bn_],16384);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT
).Ms(A.aaR(A.acf.ARL)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DG:function(G){},AbB:function(){return C.AqA;},AbC:function(){return C.Aq7;}
,Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7r());},HR:function(G){C.Mq.HR.call(this,G);if(this.Aki()===false){this.
N.Cu(A._GetAutoObject(A.Device.Converter).Ajs(A._GetAutoObject(A.Device.Converter
).AMd(this.L7.ADg())));this.N.Cf=[this,this.Aas];this.N.E6(A.jV);}this.N.OX(false
);this.N.OY(false);},Agn:function(){A._GetAutoObject(C.A5).Cc(72);},Bn_:function(
G){this.AGO(16384);},Bn$:function(G){this.AGO(131072);},_Init:function(aArg){C.Mq.
_Init.call(this,aArg);this.__proto__=C.ASr;this.Ds(C.APA);this.Dl(A.aaR(A.acf.A8A
));this.ATA(A._GetAutoObject(C.Av_));},_ReInit:function(){C.Mq._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8A));},_className:"Application::NoNaisIdListScreen"};C.ASq={
_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.ASq;this.MH.As(
false);this.MH.Ai(false);this.MH.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APA={DY:function(G){C.Kv.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad5(10));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APA;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkP={OJ:null,Bgt:false
,CQ:function(){A.pe([this,this.AoC],this);},DG:function(G){},CC:function(G){C.GL.
CC.call(this,G);if(this.Bgt)A.pe([this,this.AIW],this);},Agk:function(G){this.A6N(
this);},Agn:function(){A._GetAutoObject(C.A5).Cc(73);},ASz:function(G){throw new
Error(Aoz);},Bbt:function(s){this.ASz(s);},ASA:function(G){throw new Error(Aoz);
},Bbu:function(s){this.ASA(s);},ASE:function(G){throw new Error(Aoz);},AIW:function(
s){this.ASE(s);},A3Y:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?
G:null);if(!!Ar&&(Ar.PopupState===7)){this.Bgt=true;A._GetAutoObject(C.A5).Cc(76
);}},Agm:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar&&(Ar.PopupState===5))A.z$([this,this.XO],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);},XO:function(G){var B;if(A._GetAutoObject(A.Device.Device
).P6.Z_===3){A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agm
]);A.z$([this,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);A.pe([
this,this.AIW],this);}},AJR:function(){throw new Error(Aoz);},A8Q:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);this.A6M(this);},BoJ:function(G){A._GetAutoObject(
A.Device.Device).Dw(0);this.Bi2(this);},Hg:function(G){},A_z:function(E){if(A.aaZ(
this.OJ,E))return;if(!!this.OJ)A.z$([this,this.Hg],this.OJ,0);this.OJ=E;if(!!E)A.
zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},Bhg:function(G){var F,
Cv;if(!this.OJ)return;(Cv=this.OJ,Cv[2].call(Cv[0],!(F=this.OJ,F[1].call(F[0])))
);},_Init:function(aArg){C.GL._Init.call(this,aArg);this.__proto__=C.AkP;this.Dl(
A.aaR(A.acf.A8H));},_ReInit:function(){C.GL._ReInit.call(this);this.Dl(A.aaR(A.acf.
A8H));this.CQ();},_Mark:function(D){var B;C.GL._Mark.call(this,D);if((B=this.OJ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::RegistrationsListScreen"
};C.AUL={_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AUL;},
_className:"Application::RegistrationsListFilterScreen"};C.AeB={_Init:function(aArg
){C.YE._Init.call(this,aArg);this.__proto__=C.AeB;this.Text.H(Btl);this.Text.R(A.
jV);this.Text.A4(0x12);},_className:"Application::HeaderRegistrationsList"};C.ACi={
Jv:0,AP:null,A_:null,Ec:null,IR:null,S8:null,GB:null,Mp:0,Ld:0,Init:function(aArg
){},Bl:function(aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.IR.H([this.V.M[2],0,this.V.M[2]+(((aSize[0]*15
)/100)|0),aSize[1]]);this.A_.H([this.IR.M[2]-1,0,this.IR.M[2]+1,aSize[1]]);this.
S8.H([this.IR.M[2],0,this.IR.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.Ec.H([
this.S8.M[2]-1,0,this.S8.M[2]+1,aSize[1]]);this.GB.H([this.S8.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);this.IR.L(this.V.AR);this.GB.L(this.
V.AR);this.S8.L(this.V.AR);if(A._GetAutoObject(A.Device.Helper).Aj7(this.Ld)){this.
V.S(A.aaL(A.fl.H5));this.T(Bba);this.S8.R(Rt);}else{this.V.S(A.aaL(A.fl.Af));this.
T(this.Mp.toFixed());this.S8.R(A._GetAutoObject(A.Device.Helper).TW(this.Jv,0,5).
toFixed());}},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.Mp=
this.AX.CE(Ad,1);this.Ld=this.AX.AO5(Ad,34);var At1=this.AX.AOX(Ad,7);this.Jv=this.
AX.KU(Ad,26);var Azo=this.AX.Hw(Ad,4);var AfX=A._GetAutoObject(A.Device.Helper).
Mg(Azo,A._GetAutoObject(A.Device.Helper).Dr());this.IR.Ax(A._GetAutoObject(A.Device.
Converter).AmZ(At1));if(AfX<100)this.GB.R((AfX.toFixed()+CJ)+A.aaR(A.acf.AL8));else
this.GB.R(A._GetAutoObject(A.acj.KS).AC9(Azo,A._GetAutoObject(A.Device.Helper).Dr(
),AIy));this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);A.acg.AK._Init.call(this.A_={I:this},0);A.acg.AK._Init.
call(this.Ec={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Text._Init.
call(this.S8={I:this},0);C.CG._Init.call(this.GB={I:this},0);this.__proto__=C.ACi;
this.AP.H(Aot);this.AP.L(A.jb.Bb);this.A_.H(Aou);this.A_.L(A.jb.Bb);this.Ec.H(A0C
);this.Ec.L(A.jb.Bb);this.IR.H(Bbb);this.IR.L(A.jb.Text);this.S8.H(AyI);this.GB.
H(A0D);this.J(this.AP,0);this.J(this.A_,0);this.J(this.Ec,0);this.J(this.IR,0);this.
J(this.S8,0);this.J(this.GB,0);this.S8.S(A.aaL(A.fl.Af));this.GB.S(A.aaL(A.fl.Af
));this.GB.AY(A.aaL(A.fl.Ak));this.GB.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:
function(){this.__proto__=C.A$;this.AP._Done();this.A_._Done();this.Ec._Done();this.
IR._Done();this.S8._Done();this.GB._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.AP._ReInit();this.A_._ReInit();this.Ec._ReInit();
this.IR._ReInit();this.S8._ReInit();this.GB._ReInit();this.S8.S(A.aaL(A.fl.Af));
this.GB.S(A.aaL(A.fl.Af));this.GB.AY(A.aaL(A.fl.Ak));this.GB.Cm(A.aaL(A.fl.Bg));
},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ec)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListBirthRegistrationItem"};C.ADB={Aj4:null,PG:null,Jc:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj4={I:this},
0);A.acg.Ap._Init.call(this.PG={I:this},0);A.acg.Ap._Init.call(this.Jc={I:this},
0);this.__proto__=C.ADB;this.Aj4.H(Btm);this.Aj4.L(A.jb.Text);this.PG.H(Btn);this.
PG.L(A.jb.Text);this.Jc.H(Ba4);this.Jc.L(A.jb.Text);this.J(this.Aj4,0);this.J(this.
PG,0);this.J(this.Jc,0);this.Aj4.Ax(A.aaL(A.ach.ADX));this.PG.Ax(A.aaL(A.ach.AvM
));this.Jc.Ax(A.aaL(A.ach.AvH));},_Done:function(){this.__proto__=C.De;this.Aj4.
_Done();this.PG._Done();this.Jc._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Aj4._ReInit();this.PG._ReInit();this.Jc._ReInit();
},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.APC={IZ:null
,Ag4:null,HT:null,Bb:null,MO:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2,Init:function(
aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.A9G,B.A_6
],0);A.zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.WI,B.J4],0);A.
zX([this,this.DY],[B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,B.SS],0);A.zV([this
,this.DY],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.DY],this);},Dg:
function(E){C.BS.Dg.call(this,E);this.IZ.L(E);this.Ag4.L(E);this.HT.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.
acf.Afj));else this.HT.R(((A.aaR(A.acf.GP)+A.aaR(A.acf.Colon))+CJ)+E.toFixed());
},DY:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq4()){this.Aw_(((A._GetAutoObject(
A.Device.Helper).W.CR+1).toFixed()+AIQ)+A._GetAutoObject(A.Device.Device).An.B_(
).toFixed());this.J4(A._GetAutoObject(A.Device.Helper).W.Gender);this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nw(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts);}else{this.Aw_(AIR);this.J4(2);this.OnSetAnimalId(-1);this.
Nw(0);}},J4:function(E){if(this.Gender===E)return;this.Gender=E;this.Ag4.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(E));},Aw_:function(E){if(this.MO===E)return;this.MO=E;this.
IZ.R(E);},Nw:function(E){if(this.WhereAbouts===E)return;this.WhereAbouts=E;if(A.
_GetAutoObject(A.Device.Helper).Aj7(E))this.HT.Z(false);else this.HT.Z(true);},_Init:
function(aArg){C.BS._Init.call(this,aArg);A.acg.Text._Init.call(this.IZ={I:this}
,0);A.acg.Ap._Init.call(this.Ag4={I:this},0);A.acg.Text._Init.call(this.HT={I:this
},0);A.acg.C9._Init.call(this.Bb={I:this},0);this.__proto__=C.APC;this.IZ.H(BaS);
this.IZ.Ho(2);this.IZ.Lx(true);this.IZ.A4(0x12);this.IZ.R(BaT);this.Ag4.H(Bto);this.
HT.H(Btp);this.HT.A4(0x11);this.HT.R(A.aaR(A.acf.Afj));this.Bb.DE(Ato);this.Bb.DO(
Alm);this.Bb.L(A.jb.Bb);this.J(this.IZ,0);this.J(this.Ag4,0);this.J(this.HT,0);this.
J(this.Bb,0);this.IZ.S(A.aaL(A.fl.Ak));this.Ag4.Ax(A._GetAutoObject(A.Device.Converter
).AmZ(2));this.HT.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.IZ._Done();this.Ag4._Done();this.HT._Done();this.Bb._Done();C.BS._Done.
call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.IZ._ReInit();this.Ag4.
_ReInit();this.HT._ReInit();this.Bb._ReInit();this.HT.R(A.aaR(A.acf.Afj));this.IZ.
S(A.aaL(A.fl.Ak));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BS._Mark.
call(this,D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderRegistrationInfo"
};C.Aba={EaseOfDeliveryToString:null,AgW:null,Ci:function(G){C.NS.Ci.call(this,G
);var AJ_=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;this.KC(this.EaseOfDeliveryToString.
LC(AJ_));this.G3.R(this.AgW.Aeq(AJ_).toFixed());},Dg:function(E){C.NS.Dg.call(this
,E);this.G3.L(E);},_Init:function(aArg){C.NS._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgW._Init.call(this.
AgW={I:this},0);this.__proto__=C.Aba;this.T(A.aaR(A.acf.AgN));},_Done:function(){
this.__proto__=C.NS;this.EaseOfDeliveryToString._Done();this.AgW._Done();C.NS._Done.
call(this);},_ReInit:function(){C.NS._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgW._ReInit();this.T(A.aaR(A.acf.AgN));},_Mark:function(D){var B;
C.NS._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.X3={WhereAboutsToString:null,K3:null,Ci:function(G){C.NS.Ci.call(this,G);var
Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KC(this.WhereAboutsToString.
LC(Ld));this.G3.R(this.K3.Aeq(Ld).toFixed());},Dg:function(E){C.NS.Dg.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NS._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K3._Init.call(this.K3={
I:this},0);this.__proto__=C.X3;this.T(A.aaR(A.acf.Jo));},_Done:function(){this.__proto__=
C.NS;this.WhereAboutsToString._Done();this.K3._Done();C.NS._Done.call(this);},_ReInit:
function(){C.NS._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K3._ReInit(
);this.T(A.aaR(A.acf.Jo));},_Mark:function(D){var B;C.NS._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R7={Cr:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.Ea.CC.
call(this,G);A.zX([this,this.AfN],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.
OnSetId],0);A.zX([this,this.AfN],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]
,0);A.pe([this,this.AfN],this);},E4:function(G){var B;C.Ea.E4.call(this,G);A.z$([
this,this.AfN],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId],0);A.z$([this
,this.AfN],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Fi:function(G){var
B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.
ML(-this.Y.Bs[1]);},DG:function(G){switch(this.Cr.CP){case 6:case 7:this.Cr.Mz=true;
break;case 4:this.BgO(4);break;case 5:this.BgO(5);break;default:;}},BgO:function(
GC){var B;switch(GC){case 5:{var CD=this.Y.Bs[1]-40;if(CD<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gi([this.Y.Bs[0],CD]);}break;case 4:{var CD=this.Y.
Bs[1]+40;if(CD>0)CD=0;this.Y.Gi([this.Y.Bs[0],CD]);}break;default:throw new Error(
Btq);}},GJ:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I_.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ci(this
);}X=X.Ah;}},AfN:function(s){this.GJ(s);},M3:function(G){var B;this.Y.VH(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null);},
_Init:function(aArg){C.Ea._Init.call(this,aArg);A.Core.BG._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R7;this.Cr.Filter=147;this.Y.H(U5);this.Y.J3(1);this.Ay.H(As3
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BH=[this,this.DG];this.Cr.D3=[this,
this.DG];this.Y.Eo=[this,this.Fi];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ea;this.Cr._Done();this.Y._Done();this.Ay._Done();C.Ea._Done.call(this);},_ReInit:
function(){C.Ea._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.Ea._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.X4={Aa6:null,
X0:null,Aa7:null,X1:null,Aba:null,X3:null,_Init:function(aArg){C.R7._Init.call(this
,aArg);C.Aa6._Init.call(this.Aa6={I:this},0);C.X0._Init.call(this.X0={I:this},0);
C.Aa7._Init.call(this.Aa7={I:this},0);C.X1._Init.call(this.X1={I:this},0);C.Aba.
_Init.call(this.Aba={I:this},0);C.X3._Init.call(this.X3={I:this},0);this.__proto__=
C.X4;this.Aa6.H(BF);this.Aa6.Ai(true);this.X0.H(I2);this.X0.Ai(true);this.X0.Bh(
true);this.Aa7.H(Qe);this.Aa7.Ai(true);this.X1.H(Aaq);this.X1.Ai(true);this.X1.Bh(
true);this.Aba.H(Alj);this.Aba.Ai(true);this.X3.H(Aoq);this.X3.Ai(true);this.X3.
Bh(true);this.J(this.Aa6,0);this.J(this.X0,0);this.J(this.Aa7,0);this.J(this.X1,
0);this.J(this.Aba,0);this.J(this.X3,0);},_Done:function(){this.__proto__=C.R7;this.
Aa6._Done();this.X0._Done();this.Aa7._Done();this.X1._Done();this.Aba._Done();this.
X3._Done();C.R7._Done.call(this);},_ReInit:function(){C.R7._ReInit.call(this);this.
Aa6._ReInit();this.X0._ReInit();this.Aa7._ReInit();this.X1._ReInit();this.Aba._ReInit(
);this.X3._ReInit();},_Mark:function(D){var B;C.R7._Mark.call(this,D);if((B=this.
Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.X1={
BreedToString:null,G3:null,Nc:null,Ci:function(G){C.IK.Ci.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BU(Bv));this.G3.
R(this.Nc.Aeq(Bv).toFixed());},Dg:function(E){C.IK.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IK._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
Nc._Init.call(this.Nc={I:this},0);this.__proto__=C.X1;this.BX.H(Btr);this.G3.H(Bts
);this.G3.Ho(5);this.G3.A4(0x14);this.G3.R(Btt);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hx.Ax(A.aaL(A.ach.ADP));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IK;this.BreedToString._Done();this.G3._Done();this.Nc._Done();C.
IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.Nc._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IK._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa7={
Ci:function(G){C.IK.Ci.call(this,G);var AAw=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAw>0)this.T(A._GetAutoObject(A.Device.Converter).Rl(AAw));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IK._Init.call(this,aArg);this.__proto__=
C.Aa7;this.Hx.Ax(A.aaL(A.ach.AQm));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.X0={YJ:null,Ci:function(G){C.IK.Ci.call(this,G);var Ph=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var Af2=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Ph>
0)this.T(A._GetAutoObject(A.acj.KS).AjN(Ph));else this.T(A.aaR(A.acf.Unknown));var
Azq=A.aaL(A.aci.TU);switch(Af2){case 0:Azq=A.aaL(A.ach.ADN);break;case 1:{Azq=A.
aaL(A.ach.AvI);this.YJ.Cx(0);}break;case 2:{Azq=A.aaL(A.ach.AvI);this.YJ.Cx(1);}
break;case 3:{Azq=A.aaL(A.ach.AvI);this.YJ.Cx(2);}break;default:A.ab5("%s%e",Btu
,Af2);}this.YJ.Ax(Azq);},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YJ={I:this},0);this.__proto__=C.X0;this.BX.H(Btv);this.YJ.H(AH4);
this.YJ.L(A.jb.Text);this.J(this.YJ,0);this.Hx.Ax(A.aaL(A.ach.AvH));this.YJ.Ax(A.
aaL(A.ach.ADN));},_Done:function(){this.__proto__=C.IK;this.YJ._Done();C.IK._Done.
call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.YJ._ReInit();},_Mark:
function(D){var B;C.IK._Mark.call(this,D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.Aa6={Jv:0,X2:null,Ld:0
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.X2.H(this.Hx.M);},Aj:function(
Ae){C.IK.Aj.call(this,Ae);this.X2.L(this.BX.AR);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.Ld)){this.T(A.aaR(A.acf.AnimalLoss));this.Hx.Z(false);this.X2.Z(true);
}else if(this.Jv>0){this.T(A._GetAutoObject(A.Device.Converter).Rl(this.Jv));this.
Hx.Z(true);this.X2.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hx.Z(true);this.
X2.Z(false);}},Ci:function(G){C.IK.Ci.call(this,G);this.Jv=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.X2={
I:this},0);this.__proto__=C.Aa6;this.X2.R(Bba);this.J(this.X2,0);this.Hx.Ax(A.aaL(
A.ach.AvM));this.X2.S(A.aaL(A.fl.H5));},_Done:function(){this.__proto__=C.IK;this.
X2._Done();C.IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.
X2._ReInit();},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.X2)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMH={X4:null,Init:function(aArg){var B;A.zX([this,this.AAO],[B=A._GetAutoObject(
A.Device.Device),B.AEO,B.AI0],0);A.pe([this,this.AAO],this);},DG:function(G){var
D8=(A.Core.BG.isPrototypeOf(G)?G:null);switch(D8.CP){case 6:this.Ox(this);break;
case 7:this.M8(this);break;default:D8.Mz=true;}},CC:function(G){var B;this.X4.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.X4.E4(this);C.AB.E4.call(
this,G);},Ant:function(G){A._GetAutoObject(C.A5).FA();},AdB:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M8:function(G){if(A._GetAutoObject(A.Device.
Device).An.B_()<=1)return;var LM=A._GetAutoObject(A.Device.Helper).W.CR;LM=LM+1;
if(LM>=A._GetAutoObject(A.Device.Device).An.B_())LM=0;A._GetAutoObject(A.Device.
Helper).GT(LM);},Ox:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)
return;var LM=A._GetAutoObject(A.Device.Helper).W.CR;LM=LM-1;if(LM<0)LM=A._GetAutoObject(
A.Device.Device).An.B_()-1;A._GetAutoObject(A.Device.Helper).GT(LM);},AAO:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqw)A._GetAutoObject(C.A5).Acg(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.X4._Init.call(this.X4={I:this},0);this.
__proto__=C.AMH;this.Background.H(Cg);this.N.Z(true);this.N.OX(true);this.N.OY(true
);this.Ds(C.APC);this.X4.H(Fd);this.J(this.X4,0);this.N.CF=[this,this.Ant];this.
N.Cf=[this,this.AdB];this.N.C4(A.aaL(A.ach.E3));this.N.Cu(A.aaL(A.ach.AeJ));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.X4._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.X4._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IK={Hx:null,BX:null
,T:function(E){C.I_.T.call(this,E);this.BX.R(this.DM);},Dg:function(E){C.I_.Dg.call(
this,E);this.Hx.L(E);this.BX.L(E);},_Init:function(aArg){C.I_._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hx={I:this},0);C.CG._Init.call(this.BX={I:this},0);this.
__proto__=C.IK;this.Hx.H(Btw);this.Hx.L(A.jb.Text);this.BX.H(Btx);this.BX.A4(0x11
);this.BX.L(A.jb.Text);this.J(this.Hx,0);this.J(this.BX,0);this.Hx.Ax(A.aaL(A.aci.
TU));this.BX.S(A.aaL(A.fl.Af));this.BX.AY(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I_;this.Hx._Done();this.BX._Done();C.I_._Done.call(this);},_ReInit:function(
){C.I_._ReInit.call(this);this.Hx._ReInit();this.BX._ReInit();this.BX.S(A.aaL(A.
fl.Af));this.BX.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I_._Mark.call(this
,D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I_={Background:null
,KY:0,Hm:false,CQ:function(){this.Ci(this);},Init:function(aArg){var B;A.zX([this
,this.Bcg],[B=A._GetAutoObject(A.Device.Helper).W,B.Ur,B.OnSetId],0);A.pe([this,
this.Bcg],this);},Bl:function(aSize){C.Hj.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Aj:function(Ae){C.Hj.Aj.call(this,Ae);if(this.
Hm)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CL);},Ci:function(G){}
,Bcg:function(s){this.Ci(s);},Bh:function(E){if(this.Hm===E)return;this.Hm=E;this.
Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;},_Init:function(aArg){C.Hj.
_Init.call(this,aArg);A.acg.AK._Init.call(this.Background={I:this},0);this.__proto__=
C.I_;this.H(BF);this.Background.H(AIA);this.KY=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);C.Hj._Done.call(this);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background.
_ReInit();this.CQ();},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NS={G3:null,BB1:function(G){this.BX.H(A.abN(this.BX.M,this.G3.M[0]));},_Init:
function(aArg){C.Fz._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NS;this.G3.A1(0xA);this.G3.H(Bty);this.G3.Ho(5);this.G3.Jg(
true);this.G3.A4(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q9([this,this.BB1]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Fz;this.G3._Done();C.Fz._Done.call(this);},_ReInit:function(){C.Fz._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Fz.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axu={ARq:null,_Init:function(aArg){C.ZJ._Init.call(this,aArg);this.__proto__=
C.Axu;},_Mark:function(D){var B;C.ZJ._Mark.call(this,D);if((B=this.ARq)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANP={WH:null,W4:0,AwV:function(E){C.AmL.AwV.call(this,E);if(E)this.Pw.R(Btz);
else this.Pw.R(Bbc);},Bn0:function(E){if(A.aaZ(this.WH,E))return;if(!!this.WH)A.
z$([this,this.A3Z],this.WH,0);this.WH=E;if(!!E)A.zX([this,this.A3Z],E,0);if(!!E)
A.pe([this,this.A3Z],this);},AF0:function(E){var F;if(this.W4===E)return;this.W4=
E;this.AwV(!!this.WH&&((F=this.WH,F[1].call(F[0]))===E));},A3Z:function(G){var F;
this.AwV(!!this.WH&&((F=this.WH,F[1].call(F[0]))===this.W4));},_Init:function(aArg
){C.AmL._Init.call(this,aArg);this.__proto__=C.ANP;this.Pw.R(Bbc);this.Pw.S(A.aaL(
A.fl.H5));},_Mark:function(D){var B;C.AmL._Mark.call(this,D);if((B=this.WH)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axw={WH:null,W4:0,_Init:function(aArg){C.ZJ._Init.call(this,aArg);this.__proto__=
C.Axw;},_Mark:function(D){var B;C.ZJ._Mark.call(this,D);if((B=this.WH)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUp={YU:null,Gy:null,B7:null,_Init:function(aArg){C.Ch._Init.call(this,aArg);
C.BW._Init.call(this.YU={I:this},0);C.Rd._Init.call(this.Gy={I:this},0);C.ANL._Init.
call(this.B7={I:this},0);this.__proto__=C.AUp;var B;this.Jh(A.aaR(A.acf.ACZ));this.
YU.H(AyT);this.YU.Ai(true);this.YU.T(A.aaR(A.acf.B7));this.YU.Bh(false);this.Gy.
H(A0E);this.Gy.Ai(true);this.Gy.Z(true);this.Gy.T(A.aaR(A.acf.AGo));this.Gy.Bh(true
);this.Gy.Ar7(false);this.Gy.A_3(true);this.J(this.YU,0);this.J(this.Gy,0);this.
YU.Au([B=this.B7,B.Cb,B.Cd]);this.YU.CH(this.B7);this.Gy.Ab9([B=this.Gy,B.F_]);this.
Gy.FT([this,this.D2,this.Gu]);this.Gy.AkA(A.aaL(A.ach.Edit));this.Gy.Au([B=A._GetAutoObject(
A.Device.Device),B.ASZ,B.A0Q]);this.B7.AwH([B=A._GetAutoObject(A.Device.Device),
B.A8$,B.BbM]);},_Done:function(){this.__proto__=C.Ch;this.YU._Done();this.Gy._Done(
);this.B7._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this
);this.YU._ReInit();this.Gy._ReInit();this.B7._ReInit();this.Jh(A.aaR(A.acf.ACZ)
);this.YU.T(A.aaR(A.acf.B7));this.Gy.T(A.aaR(A.acf.AGo));},_Mark:function(D){var
B;C.Ch._Mark.call(this,D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::PremisesSettingsScreen"};C.AUn={GK:0,B7:null,AW:null,Kw:
null,E$:null,GermanStateToString:null,CountryToString:null,PD:0,Lf:0,Mi:false,Init:
function(aArg){A.zX([this,this.MX],[this,this.SM,this.Lv],0);A.zX([this,this.MX]
,[this,this.Anw,this.Ahw],0);},Aj:function(Ae){C.En.Aj.call(this,Ae);this.AW.FS(
this.L1);this.Kw.FS(this.L1);this.E$.CW(this.L1);},DL:function(G){var F;if(!this.
N)return;switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(
A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BU(this.Lf));(F=this.N,F[1].call(F[0]
)).Ce=null;}break;case 2:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS((
A.aaR(A.acf.EW)+Ayo)+this.GermanStateToString.LC(A._GetAutoObject(A.Device.Converter
).AC_(this.PD)));(F=this.N,F[1].call(F[0])).Ce=null;}break;default:{(F=this.N,F[
1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.
N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;}}},Ey:function(EO){var Tv=this.A8;if(EO<0)EO=0;else if(EO>this.RP)EO=this.
RP;switch(EO){case 0:{this.Ba(null);if(!this.GK&&!this.PD)this.Lv(0);}break;case
1:this.Ba(this.E$);break;case 2:this.Ba(this.Kw);break;case 3:if(((Tv===2)&&!this.
PD)&&!this.GK)return;else{this.Ba(this.AW);if(!this.GK||(Tv>0))this.AW.SY(2);else
this.AW.SY(7);}break;default:throw new Error(Ats+EO.toFixed());}this.A8=EO;C.En.
Ey.call(this,EO);},By:function(E){if(this.AM===E)return;this.AM=E;this.Mi=true;this.
SP(A._GetAutoObject(A.Device.Helper).TW(E,0,10));this.Ahw(A._GetAutoObject(A.Device.
Helper).TW(E,10,2)|0);this.Lv(A._GetAutoObject(A.Device.Converter).Ta(E));this.Mi=
false;if(!!this.AM){this.Kw.KA(2);this.AW.KA(10);}else{this.Kw.KA(0);this.AW.KA(
0);}this.Am();},F_:function(G){var F;if(!this.AM){var BQ=this.AM;this.By(A._GetAutoObject(
A.Device.Helper).ADk());if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ey(2);}else this.Ey(this.RP);},AjO:function(){return this.
GK;},AjQ:function(){return 9999999999;},Lv:function(E){if(this.Lf===E)return;this.
Lf=E;if(this.Mi===false)A.pe([this,this.Vx],this);A.abo([this,this.SM,this.Lv],0
);},SP:function(E){if(this.GK===E)return;this.GK=E;if(this.Mi===false)A.pe([this
,this.Vx],this);A.abo([this,this.Ab7,this.SP],0);},Vx:function(G){var F;var aString=(
A.abl(A._GetAutoObject(A.Device.Converter).AqF(this.Lf),3,10)+A.abl(this.PD,2,10
))+A.abm(this.GK,10,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==
BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahw:function(
E){if(this.PD===E)return;this.PD=E;if(this.Mi===false)A.pe([this,this.Vx],this);
A.abo([this,this.Anw,this.Ahw],0);},SM:function(){return this.Lf;},Ab7:function(
){return this.GK;},Anw:function(){return this.PD;},_Init:function(aArg){C.En._Init.
call(this,aArg);C.B7._Init.call(this.B7={I:this},0);C.ARk._Init.call(this.AW={I:
this},0);C.AvU._Init.call(this.Kw={I:this},0);C.AsN._Init.call(this.E$={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUn;var B;this.RP=3;this.AW.H(BtA);this.Kw.H(BtB);this.Kw.EV(16);this.E$.H(Bbd
);this.J(this.AW,0);this.J(this.Kw,0);this.J(this.E$,0);this.B7.AwH([this,this.SM
,this.Lv]);this.AW.Au([this,this.Ab7,this.SP]);this.Kw.Au([this,this.Anw,this.Ahw
]);this.E$.CH(this.B7);this.E$.Au([B=this.B7,B.Cb,B.Cd]);this.Init(aArg);},_Done:
function(){this.__proto__=C.En;this.B7._Done();this.AW._Done();this.Kw._Done();this.
E$._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.En._Done.
call(this);},_ReInit:function(){C.En._ReInit.call(this);this.B7._ReInit();this.AW.
_ReInit();this.Kw._ReInit();this.E$._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.En._Mark.call(this,D);
if((B=this.B7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARk={NW:null,NV:null,ET:null,Gc:null,Er:null,DB:null,CX:null,Cw:null,FS:function(
E){if(this.Ng===E)return;C.Ll.FS.call(this,E);this.Cw.CW(E);this.CX.CW(E);this.DB.
CW(E);this.Er.CW(E);this.Gc.CW(E);this.ET.CW(E);this.NV.CW(E);this.NW.CW(E);},YB:
function(HB){var B8=null;switch(HB){case-1:case 0:B8=this.Gd;break;case 1:B8=this.
Cw;break;case 2:B8=this.CX;break;case 3:B8=this.DB;break;case 4:B8=this.Er;break;
case 5:B8=this.Gc;break;case 6:B8=this.ET;break;case 7:B8=this.NV;break;case 8:B8=
this.NW;break;case 9:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;},_Init:
function(aArg){C.Ll._Init.call(this,aArg);C.DH._Init.call(this.NW={I:this},0);C.
DH._Init.call(this.NV={I:this},0);C.DH._Init.call(this.ET={I:this},0);C.DH._Init.
call(this.Gc={I:this},0);C.DH._Init.call(this.Er={I:this},0);C.DH._Init.call(this.
DB={I:this},0);C.DH._Init.call(this.CX={I:this},0);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.ARk;this.H(BtC);this.G2.H(AIS);this.NW.H(AyP);this.NV.H(A0p
);this.ET.H(A0q);this.Gc.H(A0r);this.Er.H(A0s);this.DB.H(A0t);this.CX.H(A0u);this.
Cw.H(BaZ);this.Gd.H(A0v);this.EN.H(A0v);this.J(this.NW,-2);this.J(this.NV,-2);this.
J(this.ET,-2);this.J(this.Gc,-2);this.J(this.Er,-2);this.J(this.DB,-2);this.J(this.
CX,-2);this.J(this.Cw,-2);this.NW.Dk=[this,this.GY];this.NV.Dk=[this,this.GY];this.
ET.Dk=[this,this.GY];this.Gc.Dk=[this,this.GY];this.Er.Dk=[this,this.GY];this.DB.
Dk=[this,this.GY];this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(
){this.__proto__=C.Ll;this.NW._Done();this.NV._Done();this.ET._Done();this.Gc._Done(
);this.Er._Done();this.DB._Done();this.CX._Done();this.Cw._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.NW._ReInit();this.NV._ReInit(
);this.ET._ReInit();this.Gc._ReInit();this.Er._ReInit();this.DB._ReInit();this.CX.
_ReInit();this.Cw._ReInit();},_Mark:function(D){var B;C.Ll._Mark.call(this,D);if((
B=this.NW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUo={
GK:0,B7:null,AW:null,E$:null,CountryToString:null,Lf:0,Mi:false,Init:function(aArg
){A.zX([this,this.MX],[this,this.SM,this.Lv],0);},Aj:function(Ae){C.En.Aj.call(this
,Ae);this.AW.FS(this.L1);this.E$.CW(this.L1);},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3
));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BU(this.Lf));(F=this.N,F[1].call(F[0])).Ce=null;}
break;default:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(
F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(
F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ce=null;}}},Ey:function(EO){var Tv=this.A8;if(EO<0)EO=0;
else if(EO>this.RP)EO=this.RP;switch(EO){case 0:{this.Ba(null);if(!this.GK)this.
Lv(0);}break;case 1:this.Ba(this.E$);break;case 2:{this.Ba(this.AW);if(!this.GK||(
Tv>0))this.AW.SY(2);else this.AW.SY(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A8=EO;C.En.Ey.call(this,EO);},By:function(E){if(this.AM===E)return;this.
AM=E;this.Mi=true;this.SP(A._GetAutoObject(A.Device.Helper).TW(E,0,12));this.Lv(
A._GetAutoObject(A.Device.Converter).Ta(E));this.Mi=false;if(!!this.AM)this.AW.KA(
12);else this.AW.KA(0);this.Am();},F_:function(G){var F;if(!this.AM){var BQ=this.
AM;this.By(A._GetAutoObject(A.Device.Helper).ADk());if(this.AM!==BQ){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ey(this.RP);},AjO:function(
){return this.GK;},AjQ:function(){return 999999999999;},Lv:function(E){if(this.Lf===
E)return;this.Lf=E;if(this.Mi===false)A.pe([this,this.Vx],this);A.abo([this,this.
SM,this.Lv],0);},SP:function(E){if(this.GK===E)return;this.GK=E;if(this.Mi===false
)A.pe([this,this.Vx],this);A.abo([this,this.Ab7,this.SP],0);},Vx:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqF(this.Lf),3,10)+A.abm(
this.GK,12,10);var BQ=this.AM;this.By(A.ab0(aString,0,10));if(this.AM!==BQ){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SM:function(){return this.
Lf;},Ab7:function(){return this.GK;},_Init:function(aArg){C.En._Init.call(this,aArg
);C.B7._Init.call(this.B7={I:this},0);C.AD5._Init.call(this.AW={I:this},0);C.AsN.
_Init.call(this.E$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUo;var B;this.RP=2;this.AW.H(BtD);this.E$.H(Bbd);this.
J(this.AW,0);this.J(this.E$,0);this.B7.AwH([this,this.SM,this.Lv]);this.AW.Au([this
,this.Ab7,this.SP]);this.E$.CH(this.B7);this.E$.Au([B=this.B7,B.Cb,B.Cd]);this.Init(
aArg);},_Done:function(){this.__proto__=C.En;this.B7._Done();this.AW._Done();this.
E$._Done();this.CountryToString._Done();C.En._Done.call(this);},_ReInit:function(
){C.En._ReInit.call(this);this.B7._ReInit();this.AW._ReInit();this.E$._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.En._Mark.call(this,D);
if((B=this.B7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DZ:null,Y:null,Ay:null,Yj:null,Yk:null,Yi:null,Yg:null,Yh:null,DG:function(
G){var B;C.AB.DG.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asw();},Ik:function(G){
var Cz=(C.Fn.isPrototypeOf(G)?G:null);if(!Cz)return;if(Cz===this.Yj)A._GetAutoObject(
C.A5).Cc(28);else if(Cz===this.Yk)A._GetAutoObject(C.A5).Cc(26);else if(Cz===this.
Yi)A._GetAutoObject(C.A5).Cc(54);else if(Cz===this.Yg)A._GetAutoObject(C.A5).Cc(
27);else if(Cz===this.Yh)A._GetAutoObject(C.A5).Cc(78);},A33:function(G){A._GetAutoObject(
C.A5).FA();},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fn._Init.call(this.Yj={I:this
},0);C.Fn._Init.call(this.Yk={I:this},0);C.Fn._Init.call(this.Yi={I:this},0);C.Fn.
_Init.call(this.Yg={I:this},0);C.Fn._Init.call(this.Yh={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CV);this.N.Z(true);this.N.CS(A.jV);this.Em.As(false
);this.Ds(C.Aq6);this.DZ.A1(0x3F);this.DZ.H(Fd);this.DZ.L(A.jb.CL);this.Y.H(Fd);
this.Y.J3(9);this.Ay.H(Ix);this.Yj.H(Qc);this.Yj.Ai(true);this.Yj.T(A.aaR(A.acf.
A8s));this.Yk.H(A0B);this.Yk.Ai(true);this.Yk.T(A.aaR(A.acf.NewAnimals));this.Yi.
H(Oj);this.Yi.Ai(true);this.Yi.T(A.aaR(A.acf.Calving));this.Yg.H(Qd);this.Yg.Ai(
true);this.Yg.T(A.aaR(A.acf.ACg));this.Yh.H(MU);this.Yh.Ai(true);this.Yh.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DZ,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yj,0);this.J(this.Yk,0);this.J(this.Yi,0);this.J(this.Yg,0);this.J(this.Yh,0);this.
N.CF=[this,this.A33];this.N.C4(A.aaL(A.ach.E3));this.Y.Eo=[this,this.Fi];this.Yj.
AQ=[this,this.Ik];this.Yj.DD(A.aaL(A.ach.ADY));this.Yk.AQ=[this,this.Ik];this.Yk.
DD(A.aaL(A.ach.AvQ));this.Yi.AQ=[this,this.Ik];this.Yi.DD(A.aaL(A.ach.AQf));this.
Yg.AQ=[this,this.Ik];this.Yg.DD(A.aaL(A.ach.AQa));this.Yh.AQ=[this,this.Ik];this.
Yh.DD(A.aaL(A.ach.AP5));},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.
Y._Done();this.Ay._Done();this.Yj._Done();this.Yk._Done();this.Yi._Done();this.Yg.
_Done();this.Yh._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DZ._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yj._ReInit(
);this.Yk._ReInit();this.Yi._ReInit();this.Yg._ReInit();this.Yh._ReInit();this.Yj.
T(A.aaR(A.acf.A8s));this.Yk.T(A.aaR(A.acf.NewAnimals));this.Yi.T(A.aaR(A.acf.Calving
));this.Yg.T(A.aaR(A.acf.ACg));this.Yh.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASh={K_:null,EaseOfDelivery:null,BirthType:null,AcS:null
,Lp:null,Co:null,G7:null,Ln:null,AzZ:true,Init:function(aArg){this.Ba(this.Db);A.
pe([this,this.GJ],this);},Ex:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.FE();A._GetAutoObject(C.A5).FA();if(!!this.K_)this.K_.Ex(this);},Agl:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.ED((F=this.B1.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwW(true);if(!!this.K_)this.K_.Agl(this
);if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(A.Device.Helper).
AKu(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApK]);else{this.Ai2();A.
pe([this,this.Ap8],this);}},Aut:function(){this.N.CS(A.jV);this.N.C5(A.aaL(A.ach.
AD2));this.N.Ce=[this,this.Ay6];},CC:function(G){var B;C.H2.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lm()){A._GetAutoObject(A.Device.Device).AZ(41
,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),0,null);this.Ex(this);
}else if(this.AzZ){this.AzZ=false;A.pe([this,this.A4g],this);}else if(!this.K_){
this.K_=A._NewObject(C.ASi,0);this.K_.A_w([this,this.ABa]);A._GetAutoObject(A.Device.
Helper).W.G8();A._GetAutoObject(A.Device.Helper).Aqm(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nw(this.As0.Aeq(6));this.K_.LY(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ex(this);}},Ai2:function(
){A._GetAutoObject(A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);var
Me=A._GetAutoObject(A.Device.Device).An.L3(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SZ(Me);if(A._GetAutoObject(A.Device.Helper
).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.
Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),0,null);else{
var B3=A._NewObject(A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B3.OnSetBodyWeight(this.KQ);B3.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B3.Cs(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7x(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap8:function(G){var B;if(!!this.K_)this.K_.Ap8(this);},GJ:function(G){if(
A._GetAutoObject(A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);},
ApK:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",Atf,Ar.Id);}},ABa:function(G){this.
LY(this);this.Ae4(A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JR(this.Db);},ApL:function(G){var F;C.H2.ApL.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.An3));},A4g:function(G){A._GetAutoObject(
C.A5).Cc(79);},_Init:function(aArg){C.H2._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcS._Init.call(this.AcS={I:this},0);C.Rd._Init.call(this.Lp={I:this
},0);C.S0._Init.call(this.Co={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW.
_Init.call(this.Ln={I:this},0);this.__proto__=C.ASh;var B;this.Ds(C.APz);this.Lp.
H(Ali);this.Lp.Ai(true);this.Lp.T(A.aaR(A.acf.ACG));this.CI.H(AcY);this.Co.H(AcY
);this.Co.Ai(true);this.Co.T(A.aaR(A.acf.Ael));this.Co.AFS(true);this.G7.H(AcY);
this.G7.Ai(true);this.G7.T(A.aaR(A.acf.Arz));this.Ln.H(AcY);this.Ln.Ai(true);this.
Ln.T(A.aaR(A.acf.AgN));this.J(this.Lp,-4);this.J(this.Co,-2);this.Iu(this.Ay,-1);
this.J(this.G7,-1);this.J(this.Ln,-1);this.EaseOfDelivery.L9(A._GetAutoObject(A.
Device.Helper).W);this.BirthType.L9(A._GetAutoObject(A.Device.Helper).W);this.AcS.
L9(A._GetAutoObject(A.Device.Helper).W);this.Lp.FT([this,this.D2,this.Gu]);this.
Lp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ASV,B.AnL]);this.Gq.Au([B=this.AcS
,B.Cb,B.Cd]);this.Gq.CH(this.AcS);this.Co.FT([this,this.D2,this.Gu]);this.Co.Lu([
B=this.Co,B.F_]);this.Co.Kz(A.aaL(A.ach.Edit));this.Co.Acd([B=A._GetAutoObject(A.
Device.Helper).W,B.Awg,B.Q8]);this.G7.Au([B=this.BirthType,B.Cb,B.Cd]);this.G7.CH(
this.BirthType);this.Ln.Au([B=this.EaseOfDelivery,B.Cb,B.Cd]);this.Ln.CH(this.EaseOfDelivery
);this.Init(aArg);},_Done:function(){this.__proto__=C.H2;this.EaseOfDelivery._Done(
);this.BirthType._Done();this.AcS._Done();this.Lp._Done();this.Co._Done();this.G7.
_Done();this.Ln._Done();C.H2._Done.call(this);},_ReInit:function(){C.H2._ReInit.
call(this);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcS._ReInit(
);this.Lp._ReInit();this.Co._ReInit();this.G7._ReInit();this.Ln._ReInit();this.Lp.
T(A.aaR(A.acf.ACG));this.Co.T(A.aaR(A.acf.Ael));this.G7.T(A.aaR(A.acf.Arz));this.
Ln.T(A.aaR(A.acf.AgN));},_Mark:function(D){var B;C.H2._Mark.call(this,D);if((B=this.
K_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMJ={Init:function(aArg){var B;A.zX([this,this.ALy],[B=A._GetAutoObject(A.Device.
Device),B.AEV,B.AI5],0);A.pe([this,this.ALy],this);},AK1:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).Ab3){case 0:Be=A._GetAutoObject(A.Device.
Helper).ADb();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOT();break;case
2:Be=A._GetAutoObject(A.Device.Helper).ME();break;default:throw new Error(A0F+A.
_GetAutoObject(A.Device.Device).Ab3.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALy:function(G){switch(A._GetAutoObject(A.Device.Device).Ab3){case
0:this.Dl(A.aaR(A.acf.ASn));break;case 1:this.Dl(A.aaR(A.acf.Bk5));break;case 2:
this.Dl(A.aaR(A.acf.Av9));break;default:A.ab5("%s",A0F+A._GetAutoObject(A.Device.
Device).Ab3.toFixed());}},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.
__proto__=C.AMJ;this.BnS(C.APP);this.Em.Ab$(A._NewObject(C.APE,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASi={AAw:0,Ado:null
,Au6:null,BeV:0,A4u:0,A3n:0,Init:function(aArg){this.BeV=A._GetAutoObject(A.Device.
Helper).W.Id;this.Ado=A._GetAutoObject(A.Device.Device).An.Filter;this.AAw=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3n=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LY:function(G){A._GetAutoObject(A.Device.Helper).W.AnL(this.AAw);A._GetAutoObject(
A.Device.Helper).W.OV(true);switch(this.A3n){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.ED(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.ED(2);break;default:
A.ab5("%s%e",AyM,this.A3n);}},Ex:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Ado);if(!!this.A4u)this.Bhu();},Agl:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhu:function(){var At8=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.L3(0,this.BeV);At8.Fm(Ad,A._GetAutoObject(
A.Device.Device).An);At8.AwI(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At8.
Ar0(false);At8.AwX(At8.LactationNumber+1);At8.Cs(A._GetAutoObject(A.Device.Device
).An);},Ap8:function(G){this.A4u++;var By2=A._GetAutoObject(A.Device.Converter).
Bic(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4u<By2)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AZ(59,true,A.jV,0,[this,this.Vs]);else this.BdR(
this);},Vs:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdR(this);else if(!!Ar&&(Ar.PopupState===7))this.
ABa(this);},ABa:function(G){var B;var Ig=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var Af2=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Ph=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ_=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au6)(B=this.Au6
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.ED(Ig);A._GetAutoObject(
A.Device.Helper).W.Aku(Af2);A._GetAutoObject(A.Device.Helper).W.N9(Bv);A._GetAutoObject(
A.Device.Helper).W.Q8(Ph);A._GetAutoObject(A.Device.Helper).W.Akw(AJ_);},BdR:function(
G){this.Bhu();A._GetAutoObject(C.A5).FA();A._GetAutoObject(A.Device.Device).An.Bk(
this.Ado);},A_w:function(E){if(A.aa0(this.Au6,E))return;this.Au6=E;},_Init:function(
aArg){this.__proto__=C.ASi;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ado)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMZ={Init:function(aArg){
var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0G],0);
this.Bfg(this);},Cs:function(){A.ab5("%s",BtE);},Fm:function(Ac3){C.VG.Fm.call(this
,Ac3);var O;for(O=16;O>0;O--)this.If.Set(O,this.If.Get(O-1));this.If.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",BtF);},AD9:function(Ej){switch(Ej){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfg:
function(G){this.Fm(A._GetAutoObject(A.Device.Device).AuM);A.we(this,0);},_Init:
function(aArg){C.VG._Init.call(this,aArg);this.__proto__=C.AMZ;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuZ={_Init:function(){C.
AMZ._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JU={C9:null,V:null,A8l:true,T:function(E){C.I_.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I_.Dg.call(this,E);this.V.L(E);},BnX:function(E){if(this.
A8l===E)return;this.A8l=E;this.C9.Z(E);},_Init:function(aArg){C.I_._Init.call(this
,aArg);A.acg.C9._Init.call(this.C9={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JU;this.C9.DE(BtG);this.C9.DO(BtH);this.C9.L(A.jb.Bb);this.V.
A1(0x3F);this.V.H(BtI);this.V.A4(0x11);this.V.L(A.jb.Text);this.J(this.C9,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(A.aaL(A.
fl.Bg));},_Done:function(){this.__proto__=C.I_;this.C9._Done();this.V._Done();C.
I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(this);this.C9._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HK));this.V.Cm(
A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=this.C9).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APE={Ag1:null,Df:null,Aby:null,Fk:null,Fa:
null,Init:function(aArg){var B;A.zX([this,this.A48],[B=A._GetAutoObject(A.Device.
Device),B.AEV,B.AI5],0);A.pe([this,this.A48],this);},Dg:function(E){C.YF.Dg.call(
this,E);this.Df.L(E);},AE1:function(G){A.pe([this,this.A48],this);},ABc:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E_();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DN(1,4))?B:null);if(!!FilterCriterion)Filter.Nz(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C6:function(G){var B;var F;C.YF.C6.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjW));return;}var BzH=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(38,0)
)?B:null);var Bcr=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DN(14,0))?B:null);if(!!BzH)this.Df.Ax(A.aaL(A.ach.ADq));else if(
!!Bcr&&(Bcr.A6===1))this.Df.Ax(A.aaL(A.ach.AQh));else this.Df.Ax(A.aaL(A.ach.AjW
));},A48:function(G){var F;var Filter=null;var AOH;switch(A._GetAutoObject(A.Device.
Device).Ab3){case 0:Filter=A._GetAutoObject(A.Device.Helper).ADb();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOT();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).ME();break;default:throw new Error(A0F+A._GetAutoObject(A.Device.
Device).Ab3.toFixed());}var Ai6=this.Ako();if(Ai6>0){AOH=A._NewObject(A.Device.Int32FilterCriterion
,0);AOH.Initialize(1,4,Ai6,false);Filter.CY(AOH);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.Ae5(false);},Ox:function(G){if(!this.Ako())this.AW.Ae5(true
);this.Ba(this.AW);this.Am();},M8:function(G){this.AW.Ae5(false);this.Ba(this.Ag1
);this.Am();},_Init:function(aArg){C.YF._Init.call(this,aArg);C.Ari._Init.call(this.
Ag1={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Aby._Init.call(this.Aby={
I:this},0);A.Core.BG._Init.call(this.Fk={I:this},0);A.Core.BG._Init.call(this.Fa={
I:this},0);this.__proto__=C.APE;var B;this.H(BtJ);this.AW.H(BtK);this.T$.H(BtL);
this.Gx.Z(false);this.Ag1.H(BtM);this.Df.H(BtN);this.Aby.Au(A._GetAutoObject(A.Device.
Device).Ab3);this.Fk.Filter=6;this.Fa.Filter=7;this.Iu(this.A_,-1);this.J(this.Ag1
,-1);this.J(this.Df,-1);this.Ag1.CH(this.Aby);this.Ag1.Au([B=this.Aby,B.Cb,B.Cd]
);this.Df.Ax(A.aaL(A.ach.AjW));this.Fk.BH=[this,this.Ox];this.Fa.BH=[this,this.M8
];this.Init(aArg);},_Done:function(){this.__proto__=C.YF;this.Ag1._Done();this.Df.
_Done();this.Aby._Done();this.Fk._Done();this.Fa._Done();C.YF._Done.call(this);}
,_ReInit:function(){C.YF._ReInit.call(this);this.Ag1._ReInit();this.Df._ReInit();
this.Aby._ReInit();this.Fk._ReInit();this.Fa._ReInit();},_Mark:function(D){var B;
C.YF._Mark.call(this,D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Aby={Ae0:null
,Init:function(aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device
),B.AEV,B.AI5],0);A.pe([this,this.BeX],this);},Dv:function(){return 3;},Au:function(
E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw4(E);},ADa:function(
aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return null;return this.Ae0.AsO(aIndex
);},ADc:function(aIndex){if((aIndex<0)||(aIndex>=this.Dv()))return-1;return this.
Ae0.AsP(aIndex);},BeX:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ab3;A.
abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.Ae0._Init.call(this.Ae0={I:this},0);this.__proto__=C.Aby;this.BJ.Set(0,
0);this.BJ.Set(1,1);this.BJ.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.Ae0._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(
this);this.Ae0._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=
this.Ae0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APP={Et:null,IV:null,_Init:function(aArg){C.EC._Init.call(this,aArg);C.CG._Init.
call(this.Et={I:this},0);A.acg.Text._Init.call(this.IV={I:this},0);this.__proto__=
C.APP;this.H(Ol);this.Background.H(Ol);this.Et.H(AIB);this.Et.R(A.aaR(A.acf.A7D)
);this.Et.A4(0x12);this.Et.L(A.jb.Text);this.IV.A1(0x3F);this.IV.H(AIC);this.IV.
Ho(5);this.IV.A4(0x14);this.IV.R(A.aaR(A.acf.AG2));this.IV.L(A.jb.Text);this.J(this.
Et,0);this.J(this.IV,0);this.Et.S(A.aaL(A.fl.Af));this.Et.AY(A.aaL(A.fl.HK));this.
Et.Cm(A.aaL(A.fl.Bg));this.IV.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EC;this.Et._Done();this.IV._Done();C.EC._Done.call(this);},_ReInit:function(){
C.EC._ReInit.call(this);this.Et._ReInit();this.IV._ReInit();this.Et.R(A.aaR(A.acf.
A7D));this.IV.R(A.aaR(A.acf.AG2));this.Et.S(A.aaL(A.fl.Af));this.Et.AY(A.aaL(A.fl.
HK));this.Et.Cm(A.aaL(A.fl.Bg));this.IV.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EC._Mark.call(this,D);if((B=this.Et)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J_:null,Bg2:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BfG(this);else A._GetAutoObject(A.Device.Device).AZ(63,true,A.
jV,0,[this,this.Vs]);},BfG:function(G){A._GetAutoObject(C.A5).FA();},Vs:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.BfG(this);},_Init:function(aArg){C.Mr._Init.call(this
,aArg);A.acg.Text._Init.call(this.J_={I:this},0);this.__proto__=C.MotherScanScreen;
this.Ds(C.APD);this.Jn.H(BtO);this.Jn.AkF(2);this.AcG.Z(false);this.ARZ=12;this.
Number.H(BtP);this.Number.R(A.aaR(A.acf.A$0));this.A5C=false;this.J_.H(BtQ);this.
J_.Ho(5);this.J_.Lx(true);this.J_.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.
aaR(A.acf.ABX));this.J_.L(A.jb.Text);this.Iu(this.Jn,-1);this.Iu(this.I0,-1);this.
Iu(this.AcG,-1);this.J(this.J_,0);this.J_.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mr;this.J_._Done();C.Mr._Done.call(this);},_ReInit:function(){C.Mr._ReInit.
call(this);this.J_._ReInit();this.Number.R(A.aaR(A.acf.A$0));this.J_.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.ABX));this.J_.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mr._Mark.call(this,D);if((B=this.J_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APD={_Init:function(aArg){C.Aq5.
_Init.call(this,aArg);this.__proto__=C.APD;this.DT.ED(1);},_className:"Application::HeaderScannedCowId"
};C.Jn={AbU:null,AbT:null,AbS:null,QL:null,CountryToString:null,AsR:0,CQ:function(
){this.Am();},Aj:function(Ae){A.Core.P.Aj.call(this,Ae);this.QL.R(this.CountryToString.
LC(A._GetAutoObject(A.Device.Converter).A71(A._GetAutoObject(A.Device.Device).Language
))+BtR);},AkF:function(E){if(this.AsR===E)return;this.AsR=E;var bitmap=null;var A2r=
BtS;var A2q=null;var A2s=false;switch(E){case 0:bitmap=A.aaL(A.ach.Arg);break;case
1:{bitmap=A.aaL(A.ach.AQW);A2r=BtT;A2q=A.aaL(A.fl.Ak);A2s=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQX);A2r=BtU;A2q=A.aaL(A.fl.Bg);A2s=true;}break;default:throw new Error(
BtV+E.toFixed());}this.AbS.Ax(bitmap);this.AbT.Ax(bitmap);this.AbU.Ax(bitmap);this.
QL.H(A.abJ(this.QL.M,A2r));this.QL.S(A2q);this.QL.Z(A2s);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbU={I:this},0);A.acg.Ap._Init.call(this.AbT={I:this},0);A.acg.Ap._Init.
call(this.AbS={I:this},0);A.acg.Text._Init.call(this.QL={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jn;this.H(AIV);this.
AbU.A1(0x3);this.AbU.H(AIV);this.AbU.L(A.jb.Ia);this.AbU.Cx(2);this.AbT.A1(0x3);
this.AbT.H(AIV);this.AbT.L(A.jb.Aeg);this.AbT.Cx(1);this.AbS.A1(0x3);this.AbS.H(
AIV);this.AbS.L(A.jb.Text);this.AbS.Cx(0);this.QL.A1(0x14);this.QL.H(BtW);this.QL.
L(0xFF020202);this.QL.Z(false);this.J(this.AbU,0);this.J(this.AbT,0);this.J(this.
AbS,0);this.J(this.QL,0);this.AbU.Ax(A.aaL(A.ach.Arg));this.AbT.Ax(A.aaL(A.ach.Arg
));this.AbS.Ax(A.aaL(A.ach.Arg));this.QL.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbU._Done();this.AbT._Done();this.AbS._Done();this.QL._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbU._ReInit();this.AbT._ReInit();this.AbS._ReInit(
);this.QL._ReInit();this.CountryToString._ReInit();this.QL.S(A.aaL(A.fl.Ak));this.
CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsR={Transponder:0,BGV:1,BGW:2};C.APz={Ap:null,Dg:function(E){C.BS.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APz;this.Ap.H(AyN);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APq));},_Done:function(){this.__proto__=C.BS;this.Ap._Done();C.
BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Il:0,AaN:4,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bes()){this.Il=A._GetAutoObject(A.Device.Helper).WW.Id;var AiA=A._GetAutoObject(
A.Device.Helper).A7Z(this.Il,A._GetAutoObject(A.Device.Helper).W);if(AiA){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rl(this.Il),0,[
this,this.Vs]);return;}AiA=A._GetAutoObject(A.Device.Helper).Bku(this.Il,A._GetAutoObject(
A.Device.Helper).W);if(AiA&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Il)){A._GetAutoObject(A.Device.Device).AZ(25,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Il),0,[this,this.Vs]);return;}this.AaN=A._GetAutoObject(A.Device.
Helper).ARy(this.Il);switch(this.AaN){case 0:A._GetAutoObject(A.Device.Device).AZ(
45,true,this.Il.toFixed().length.toFixed(),0,[this,this.Vs]);break;case 1:case 2:{
var BO=A._GetAutoObject(A.Device.Converter).AsT(this.Il);A._GetAutoObject(A.Device.
Device).AZ(46,true,BO.toFixed(),0,[this,this.Vs]);}break;case 3:this.BgU();break;
default:throw new Error(AIp+this.AaN.toFixed());}}},Ex:function(G){A._GetAutoObject(
C.A5).FA();},Vs:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaN===2)this.BgU();else A._GetAutoObject(
A.Device.Device).AhN();break;case 5:this.Ex(this);break;default:;}},BgU:function(
){A._GetAutoObject(A.Device.Helper).W.Nt(this.Il);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.Nv(this.Il);A._GetAutoObject(
A.Device.Helper).W.Cs(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AZ(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ex(this);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Ds(C.IQ);this.Number.R(A.aaR(A.acf.A$U
));this.Jn.H(BtX);this.I0.H(BtY);this.AkF(1);this.N.CF=[this,this.Ex];this.N.C4(
A.aaL(A.ach.E3));},_ReInit:function(){C.Rc._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$U));},_className:"Application::SetSaveNaisIdScreen"};C.AOc={LY:function(
G){C.AqO.LY.call(this,G);A.pe([this,this.BCC],this);},BCC:function(G){this.JR(this.
Eh);},_Init:function(aArg){C.AqO._Init.call(this,aArg);this.__proto__=C.AOc;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UW={Animal:null,WhereAboutsToString:
null,Ge:function(aIndex){return this.WhereAboutsToString.BU(this.C8(aIndex));},Au:
function(E){C.Cn.Au.call(this,E);if(!!this.Animal)this.Animal.Nw(E);},A5e:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
Cb,this.Cd],0);},L9:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A5e],[B=this.Animal,B.Awt,B.Nw],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A5e],[B=this.Animal,B.Awt,B.Nw],0);A.pe([this,this.A5e],this);}
,_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UW;this.BJ.Set(0,1);this.
BJ.Set(1,2);this.BJ.Set(2,3);this.BJ.Set(3,4);this.BJ.Set(4,5);},_Done:function(
){this.__proto__=C.Cn;this.WhereAboutsToString._Done();C.Cn._Done.call(this);},_ReInit:
function(){C.Cn._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UX={Dv:function(){return 6;},_Init:function(aArg){C.UW._Init.call(this,aArg);
this.__proto__=C.UX;this.BJ.Set(0,0);this.BJ.Set(1,1);this.BJ.Set(2,2);this.BJ.Set(
3,3);this.BJ.Set(4,4);this.BJ.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcS={Dv:function(){return 5;},_Init:function(aArg){C.UW._Init.call(this,aArg
);this.__proto__=C.AcS;this.BJ.Set(0,6);this.BJ.Set(1,7);this.BJ.Set(2,8);this.BJ.
Set(3,9);this.BJ.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.Ad1={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bda],[B=A._GetAutoObject(A.Device.
Device),B.ASG,B.A0H],0);A.pe([this,this.Bda],this);},Dv:function(){return 2;},C8:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Ge:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BU(aIndex);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aww(E);},Bda:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgD;A.abo([this,this.Cb,this.Cd],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.Ad1;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGQ={FP:null
,EB:null,EartagNrAssignmentMode:null,Fk:null,Fa:null,HI:null,AW:null,Kr:null,Nl:
null,A8:0,AM:0,Init:function(aArg){},Aj:function(Ae){C.Ei.Aj.call(this,Ae);if(this.
A8===1){if(this.Hm){this.AW.FS(A.jb.CL);this.HI.CW(A.jb.CL);this.Background.L(A.
jb.CV);this.V.L(A.jb.Text);}else{this.AW.FS(A.jb.CV);this.HI.CW(A.jb.CV);this.Background.
L(A.jb.CL);this.V.L(A.jb.Text);}}else{if(this.Hm){this.AW.FS(A.jb.CL);this.HI.CW(
A.jb.CL);}else{this.AW.FS(A.jb.CV);this.HI.CW(A.jb.CV);}this.Ba(null);}this.Nl.L(
this.V.AR);},H0:function(G){C.Ei.H0.call(this,G);if(!this.A8)this.F_(this);else this.
He(this);},DL:function(G){var F;if(!this.N)return;switch(this.A8){case 1:{(F=this.
N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(null);(F=this.
N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;}break;default:this.FP.AkR((F=this.N,F[1].call(F[0])));}},F_:function(G){this.
Ey(1);},He:function(G){this.Ey(0);},Ey:function(EO){var F;if(!this.A8&&!!this.N)
this.FP.AjC((F=this.N,F[1].call(F[0])));this.A8=EO;if(this.A8<0)this.A8=0;else if(
this.A8>1)this.A8=1;switch(this.A8){case 0:this.Ba(null);break;case 1:{this.Ba(this.
AW);if(!this.AM)this.AW.SY(2);else this.AW.SY(7);}break;default:throw new Error(
Ats+this.A8.toFixed());}this.DL(this);this.Am();},By:function(E){if(this.AM===E)
return;this.AM=E;},Ox:function(G){this.ABl(2);},M8:function(G){this.ABl(7);},ABl:
function(GC){var B;var AzI=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzI){
var AAy=(A.Core.P.isPrototypeOf(B=this.QM(AzI,GC,0x15))?B:null);if(!!AAy){this.Ba(
AAy);return true;}}return false;},Af9:function(G){var F;if(!this.EB||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nl.Ax(
A._GetAutoObject(A.Device.Converter).AmZ(2));break;case 1:this.Nl.Ax(A._GetAutoObject(
A.Device.Converter).AmZ((F=this.EB,F[1].call(F[0]))));break;default:throw new Error(
Bbe+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4N],this);},A4N:function(G){var B;var F;if(!this.EB||!this.EartagNrAssignmentMode
){this.Kr.Ae7(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoB]);this.Kr.
Ae7([B=A._GetAutoObject(A.Device.Device),B.AER,B.AI2]);}break;case 1:switch((F=this.
EB,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awj
,B.AyY]);this.Kr.Ae7([B=A._GetAutoObject(A.Device.Device),B.ASL,B.A0I]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyZ]);this.Kr.Ae7([B=
A._GetAutoObject(A.Device.Device),B.ASM,B.A0J]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Anx,B.AoB]);this.Kr.Ae7([B=A._GetAutoObject(A.Device.Device),
B.AER,B.AI2]);}break;default:throw new Error(BtZ+(F=this.EB,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Bbe+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uw:function(E){if(A.aaZ(this.EB,E))return;if(!!this.EB)A.z$([
this,this.Af9],this.EB,0);this.EB=E;if(!!E)A.zX([this,this.Af9],this.EB,0);if(!!
E)A.pe([this,this.Af9],this);},Akv:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af9],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af9],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af9],this);},Uo:function(){return this.AM;},_Init:function(
aArg){C.Ei._Init.call(this,aArg);A.Core.BG._Init.call(this.Fk={I:this},0);A.Core.
BG._Init.call(this.Fa={I:this},0);C.Ari._Init.call(this.HI={I:this},0);C.AvV._Init.
call(this.AW={I:this},0);C.Au_._Init.call(this.Kr={I:this},0);A.acg.Ap._Init.call(
this.Nl={I:this},0);this.__proto__=C.AGQ;var B;this.H(Aap);this.V.As(false);this.
V.R(Ath);this.V.L(A.jb.Bm);this.Fk.Filter=6;this.Fa.Filter=7;this.HI.H(Bt0);this.
AW.H(Bt1);this.Nl.H(Bt2);this.J(this.HI,0);this.J(this.AW,0);this.J(this.Nl,0);this.
FP=A._NewObject(C.AeA,0);this.Fk.BH=[this,this.Ox];this.Fa.BH=[this,this.M8];this.
HI.CH(this.Kr);this.HI.Au([B=this.Kr,B.Cb,B.Cd]);this.AW.Au([this,this.Uo,this.By
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ei;this.Fk._Done();this.Fa.
_Done();this.HI._Done();this.AW._Done();this.Kr._Done();this.Nl._Done();C.Ei._Done.
call(this);},_ReInit:function(){C.Ei._ReInit.call(this);this.Fk._ReInit();this.Fa.
_ReInit();this.HI._ReInit();this.AW._ReInit();this.Kr._ReInit();this.Nl._ReInit(
);},_Mark:function(D){var B;C.Ei._Mark.call(this,D);if((B=this.FP)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN4={Wy:
null,Zm:null,Zj:null,Ug:null,Init:function(aArg){this.Ba(this.Wy);},AEJ:function(
G){var BeT=(C.Anm.isPrototypeOf(G)?G:null);if(!!BeT)A._GetAutoObject(A.Device.Device
).AZ(BeT.AdJ,true,A.jV,0,null);},DG:function(G){if((this.Cr.CP===7)&&(this.AV===
this.Ug))A._GetAutoObject(A.Device.Device).AZ(10,true,A.jV,0,null);else if((this.
Cr.CP===6)&&(this.AV===this.Ug))A._GetAutoObject(C.A5).Cc(91);C.El.DG.call(this,
G);},_Init:function(aArg){C.El._Init.call(this,aArg);C.Anm._Init.call(this.Wy={I:
this},0);C.Anm._Init.call(this.Zm={I:this},0);C.Anm._Init.call(this.Zj={I:this},
0);C.Anm._Init.call(this.Ug={I:this},0);this.__proto__=C.AN4;this.Ds(C.APe);this.
Wy.H(I2);this.Wy.Ai(true);this.Wy.T(A.aaR(A.acf.AhM));this.Wy.Bh(false);this.Wy.
AdJ=79;this.Zm.H(Qe);this.Zm.Ai(true);this.Zm.T(A.aaR(A.acf.Bab));this.Zm.Bh(true
);this.Zm.AdJ=77;this.Zj.H(Aaq);this.Zj.Ai(true);this.Zj.T(A.aaR(A.acf.A7y));this.
Zj.Bh(false);this.Zj.AdJ=78;this.Ug.H(Alj);this.Ug.Ai(true);this.Ug.T(A.aaR(A.acf.
About));this.Ug.Bh(true);this.Ug.AdJ=3;this.J(this.Wy,-1);this.J(this.Zm,-1);this.
J(this.Zj,-1);this.J(this.Ug,-1);this.Wy.AQ=[this,this.AEJ];this.Zm.AQ=[this,this.
AEJ];this.Zj.AQ=[this,this.AEJ];this.Ug.AQ=[this,this.AEJ];this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.Wy._Done();this.Zm._Done();this.Zj._Done();this.
Ug._Done();C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.
Wy._ReInit();this.Zm._ReInit();this.Zj._ReInit();this.Ug._ReInit();this.Wy.T(A.aaR(
A.acf.AhM));this.Zm.T(A.aaR(A.acf.Bab));this.Zj.T(A.aaR(A.acf.A7y));this.Ug.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.Wy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APe={_Init:function(aArg){C.Ku.
_Init.call(this,aArg);this.__proto__=C.APe;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.AN2={FactoryResetScope:null,Uj:null,Wv:null,Ul:null,Init:function(aArg){this.
Ba(this.Uj);A.pe([this,this.MX],this);},Bld:function(G){switch(this.FactoryResetScope.
C8(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AZ(33,true
,A.jV,0,[this,this.A4w]);break;case 0:A._GetAutoObject(A.Device.Device).AZ(7,true
,A.jV,0,[this,this.A4w]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(115,true
,A.jV,0,[this,this.A4w]);break;default:A.ab5("%s%i",Bt3,this.FactoryResetScope.Q
);}},A4w:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bpi();A._GetAutoObject(A.Device.Device).AZ(8,true,A.jV,0,null);A._GetAutoObject(
C.A5).Cc(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bph();A._GetAutoObject(
A.Device.Device).ArX(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).ArZ(0);A._GetAutoObject(A.Device.Device).Ar3(0);A._GetAutoObject(
A.Device.Device).Ar4(0);A._GetAutoObject(A.Device.Device).Ar5(0);A._GetAutoObject(
A.Device.Device).Uu(5);A._GetAutoObject(A.Device.Device).AwL(0);A._GetAutoObject(
A.Device.Device).AwM(0);A._GetAutoObject(A.Device.Device).AwN(0);A._GetAutoObject(
A.Device.Device).Aw5(1);A._GetAutoObject(A.Device.Device).Aw6(1);A._GetAutoObject(
A.Device.Device).Aw7(1);A._GetAutoObject(A.Device.Device).AZ(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bpg();A._GetAutoObject(A.Device.
Device).AZ(116,true,A.jV,0,null);A._GetAutoObject(C.A5).Cc(37);}break;default:A.
ab5("%s%e",AIq,Ar.Id);}},_Init:function(aArg){C.El._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Nr._Init.call(this.Uj={I:this},0
);C.Nr._Init.call(this.Wv={I:this},0);C.BW._Init.call(this.Ul={I:this},0);this.__proto__=
C.AN2;var B;this.Ds(C.APc);this.Uj.H(I2);this.Uj.Ai(true);this.Uj.T(A.aaR(A.acf.
ACI));this.Uj.Bh(false);this.Uj.Nu(93);this.Wv.H(Qe);this.Wv.Ai(true);this.Wv.T(
A.aaR(A.acf.Ad0));this.Wv.Bh(true);this.Wv.Nu(92);this.Ul.H(A0E);this.Ul.Ai(true
);this.Ul.Bmy(true);this.Ul.T(A.aaR(A.acf.A61));this.Ul.Bh(false);this.J(this.Uj
,-1);this.J(this.Wv,-1);this.J(this.Ul,-1);this.Uj.AQ=[B=this.Uj,B.Ny];this.Wv.AQ=[
B=this.Wv,B.Ny];this.Ul.AQ=[this,this.Bld];this.Ul.Au([B=this.FactoryResetScope,
B.Cb,B.Cd]);this.Ul.CH(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.El;this.FactoryResetScope._Done();this.Uj._Done();this.Wv._Done(
);this.Ul._Done();C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uj._ReInit();this.Wv._ReInit();this.Ul._ReInit(
);this.Uj.T(A.aaR(A.acf.ACI));this.Wv.T(A.aaR(A.acf.Ad0));this.Ul.T(A.aaR(A.acf.
A61));},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.APc={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APc;this.Text.R(A.aaR(A.acf.ACJ
));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACJ));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq7={QY:null,Wl:null
,_Init:function(aArg){C.T3._Init.call(this,aArg);C.CG._Init.call(this.QY={I:this
},0);C.CG._Init.call(this.Wl={I:this},0);this.__proto__=C.Aq7;this.QY.H(Bt4);this.
QY.R(A.aaR(A.acf.A$5));this.QY.A4(0x12);this.QY.L(A.jb.Text);this.Wl.H(Ba$);this.
Wl.R(A.aaR(A.acf.Aob));this.Wl.L(A.jb.Text);this.J(this.QY,0);this.J(this.Wl,0);
this.QY.S(A.aaL(A.fl.Af));this.QY.AY(A.aaL(A.fl.Ak));this.QY.Cm(A.aaL(A.fl.Bg));
this.Wl.S(A.aaL(A.fl.Af));this.Wl.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T3;this.QY._Done();this.Wl._Done();C.T3._Done.call(this);},_ReInit:function(){
C.T3._ReInit.call(this);this.QY._ReInit();this.Wl._ReInit();this.QY.R(A.aaR(A.acf.
A$5));this.Wl.R(A.aaR(A.acf.Aob));this.QY.S(A.aaL(A.fl.Af));this.QY.AY(A.aaL(A.fl.
Ak));this.QY.Cm(A.aaL(A.fl.Bg));this.Wl.S(A.aaL(A.fl.Af));this.Wl.AY(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T3._Mark.call(this,D);if((B=this.QY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APK={QZ:null,_Init:function(aArg){C.T3._Init.call(this,aArg);C.CG._Init.call(
this.QZ={I:this},0);this.__proto__=C.APK;this.QZ.H(Bt5);this.QZ.R(A.aaR(A.acf.Un
));this.QZ.A4(0x12);this.QZ.L(A.jb.Text);this.J(this.QZ,0);this.QZ.S(A.aaL(A.fl.
Af));this.QZ.AY(A.aaL(A.fl.Ak));this.QZ.Cm(A.aaL(A.fl.Bg));},_Done:function(){this.
__proto__=C.T3;this.QZ._Done();C.T3._Done.call(this);},_ReInit:function(){C.T3._ReInit.
call(this);this.QZ._ReInit();this.QZ.R(A.aaR(A.acf.Un));this.QZ.S(A.aaL(A.fl.Af)
);this.QZ.AY(A.aaL(A.fl.Ak));this.QZ.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;
C.T3._Mark.call(this,D);if((B=this.QZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.AqA={IR:null,AbK:null,Ec:null
,Bl:function(aSize){C.Nd.Bl.call(this,aSize);this.IR.H([this.GB.M[2],0,this.GB.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ec.H([this.IR.M[2]-1,0,this.IR.M[2]+1
,aSize[1]]);this.AbK.H([this.IR.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.Nd.
Aj.call(this,Ae);this.AbK.L(this.GB.AR);this.IR.L(this.GB.AR);},Ci:function(Ad){
C.Nd.Ci.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ig=this.AX.
Am0(Ad,14);var At1=this.AX.AOX(Ad,7);this.IR.Ax(A._GetAutoObject(A.Device.Converter
).AmZ(At1));this.AbK.Ax(A._GetAutoObject(A.Device.Converter).A5H(Ig));this.Am();
}},_Init:function(aArg){C.Nd._Init.call(this,aArg);A.acg.Ap._Init.call(this.IR={
I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.AK._Init.call(this.Ec={
I:this},0);this.__proto__=C.AqA;this.IR.H(Bbb);this.IR.L(A.jb.Text);this.AbK.H(Bt6
);this.AbK.L(A.jb.Text);this.Ec.H(Bt7);this.Ec.L(A.jb.Bb);this.J(this.IR,0);this.
J(this.AbK,0);this.J(this.Ec,0);this.IR.Ax(A.aaL(A.aci.TU));this.AbK.Ax(A.aaL(A.
aci.TU));},_Done:function(){this.__proto__=C.Nd;this.IR._Done();this.AbK._Done();
this.Ec._Done();C.Nd._Done.call(this);},_ReInit:function(){C.Nd._ReInit.call(this
);this.IR._ReInit();this.AbK._ReInit();this.Ec._ReInit();},_Mark:function(D){var
B;C.Nd._Mark.call(this,D);if((B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANh={ZZ:null,Bl:
function(aSize){C.Nd.Bl.call(this,aSize);this.ZZ.H([this.GB.M[2],0,aSize[0],aSize[
1]]);},Aj:function(Ae){C.Nd.Aj.call(this,Ae);this.ZZ.L(this.GB.AR);},Ci:function(
Ad){C.Nd.Ci.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Jv=this.
AX.KU(Ad,26);if(Jv>0)this.ZZ.R(A.ab2(Jv.toFixed(),5));else this.ZZ.R(Rt);this.Am(
);}},_Init:function(aArg){C.Nd._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZZ={I:this},0);this.__proto__=C.ANh;this.ZZ.H(Bt8);this.J(this.ZZ,0);this.ZZ.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nd;this.ZZ._Done();C.Nd._Done.
call(this);},_ReInit:function(){C.Nd._ReInit.call(this);this.ZZ._ReInit();this.ZZ.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nd._Mark.call(this,D);if((B=this.ZZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ASa={Ap:null,Aj:function(Ae){C.Ae1.Aj.call(this,Ae);this.Ap.L(this.Text.AR);
},_Init:function(aArg){C.Ae1._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ASa;this.Text.H(Bt9);this.Ap.H(A0z);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Ack));},_Done:function(){this.__proto__=C.Ae1;this.Ap._Done(
);C.Ae1._Done.call(this);},_ReInit:function(){C.Ae1._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.Ae1._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.YE={Text:
null,Df:null,AP:null,Gx:null,D4:null,A_:null,Init:function(aArg){var B;A.zX([this
,this.NC],[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ],0);A.zV([this,this.NC
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.NC],this);},Dg:function(
E){C.BS.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gx.L(E);this.D4.ZB(E);}
,WM:function(E){C.BS.WM.call(this,E);this.D4.CW(E);},DY:function(G){this.D4.T(A.
_GetAutoObject(A.Device.Device).An.B_().toFixed());},NC:function(s){this.DY(s);}
,_Init:function(aArg){C.BS._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C9._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gx={I:this},0);C.D4._Init.call(this.D4={I:this},0);
A.acg.C9._Init.call(this.A_={I:this},0);this.__proto__=C.YE;this.Text.H(Bt_);this.
Text.A4(0x11);this.Df.H(AyL);this.AP.DE(Ba7);this.AP.DO(Ba8);this.AP.L(A.jb.Bb);
this.Gx.H(Bt$);this.Gx.L(A.jb.CV);this.D4.A1(0x14);this.D4.H(Bua);this.D4.ZB(A.jb.
Bm);this.D4.CW(A.jb.Rk);this.D4.Ho(2);this.A_.DE(Bub);this.A_.DO(Buc);this.A_.L(
A.jb.Bb);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gx,
0);this.J(this.D4,0);this.J(this.A_,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjW));this.Gx.Ax(A.aaL(A.ach.Gx));this.D4.
S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=C.BS;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gx._Done();this.D4._Done();this.A_.
_Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gx._ReInit();this.D4._ReInit(
);this.A_._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));this.
D4.S(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A_)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acx={FP:null
,J7:null,J6:null,AkN:null,AkO:null,Q_:null,QJ:null,AbJ:null,V$:null,PQ:null,PR:null
,SG:null,Gz:null,GA:null,JD:null,AlS:0,AlW:0,D_:0,DX:0,A8:0,Bl:function(aSize){var
B;this.DC.H([this.Hy.M[2]-10,this.Hy.M[1],this.H8.M[0]+10,this.Hy.M[3]]);this.DC.
AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.DC.Gv,true,null,null);},Aj:function(Ae
){var B;C.BW.Aj.call(this,Ae);var Fv=((Ae&0x20)===0x20);var GG=this.Bo.Bw;if(!!this.
Q)this.GJ(this);if((this.A8===1)||(this.A8===2)){var A1N=this.A2N(this.A8);if(!!
A1N){this.AbJ.Z(true);this.AbJ.H(A1N.M);this.AbJ.L(this.V.AR);this.V$.Z(true);this.
V$.H(A1N.M);}else{this.AbJ.Z(false);this.V$.Z(false);}this.Hy.Z(false);this.H8.Z(
false);}else{this.AbJ.Z(false);this.V$.Z(false);this.Hy.Z(Fv||GG);this.H8.Z(Fv||
GG);}},Qw:function(G){if(!!this.Q){if(this.FJ===1)A.pe([this,this.Vj],this);else
if(this.FJ===4)A.pe([this,this.A06],this);else if(this.FJ===5)A.pe([this,this.A04
],this);}C.BW.Qw.call(this,G);},Ki:function(G){switch(this.A8){case 0:C.BW.Ki.call(
this,G);break;case 2:break;default:this.AdD(this);}},Kd:function(G){switch(this.
A8){case 0:C.BW.Kd.call(this,G);break;default:this.Ais(this);}},A2i:function(G){
var F;if(this.A8===1){var BQ=this.D_;this.D_=this.D_-10;if(this.D_<this.AlW)this.
D_=this.AlW;if(this.D_<A._GetAutoObject(A.Device.Device).AcO)this.D_=A._GetAutoObject(
A.Device.Device).AcO;if(this.DX!==BQ){if(!!this.J7)(F=this.J7,F[2].call(F[0],this.
D_));A.abo(this.J7,0);}}if(this.A8===2){var BQ=this.DX;this.DX=this.DX-10;if(this.
DX<this.D_)this.DX=this.D_;if(this.DX!==BQ){if(!!this.J6)(F=this.J6,F[2].call(F[
0],this.DX));A.abo(this.J6,0);}}this.DL(this);this.Am();},A04:function(s){this.A2i(
s);},Al8:function(G){this.FJ=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A04],this
);this.Bo.As(false);}this.Bo.As(true);},A2U:function(G){var F;if(this.A8===1){var
BQ=this.D_;this.D_=this.D_+10;if(this.D_>this.DX)this.D_=this.DX;if(this.D_!==BQ
){if(!!this.J7)(F=this.J7,F[2].call(F[0],this.D_));A.abo(this.J7,0);}}if(this.A8===
2){var BQ=this.DX;this.DX=this.DX+10;if(this.DX>this.AlS)this.DX=this.AlS;if(this.
DX!==BQ){if(!!this.J6)(F=this.J6,F[2].call(F[0],this.DX));A.abo(this.J6,0);}}this.
DL(this);this.Am();},A06:function(s){this.A2U(s);},Al9:function(G){this.FJ=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A06],this);this.Bo.As(false);}this.Bo.As(true
);return;},Vj:function(G){this.Ey(this.A8+1);},AdD:function(G){this.FJ=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vj],this);this.Bo.As(false);}this.Bo.As(true);}
,GJ:function(G){},AfN:function(s){this.GJ(s);},DL:function(G){var F;if(!this.N)return;
switch(this.A8){case 1:{(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.He];(F=this.
N,F[1].call(F[0])).Cu(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C5(A.aaL(A.ach.AeH));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C4(A.aaL(A.ach.E3));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.He];(F=this.N,F[1].call(F[0])).Cu(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C5(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ce=null;}break;default:this.FP.AkR((F=this.N,F[1].call(F[
0])));}},A_Z:function(E){if(A.aaZ(this.J7,E))return;if(!!this.J7)A.z$([this,this.
A4i],this.J7,0);this.J7=E;if(!!this.J7)A.zX([this,this.A4i],this.J7,0);A.pe([this
,this.A4i],this);},A4i:function(G){var F;this.D_=(F=this.J7,F[1].call(F[0]));this.
Am();},A_Y:function(E){if(A.aaZ(this.J6,E))return;if(!!this.J6)A.z$([this,this.A4h
],this.J6,0);this.J6=E;if(!!this.J6)A.zX([this,this.A4h],this.J6,0);A.pe([this,this.
A4h],this);},A4h:function(G){var F;this.DX=(F=this.J6,F[1].call(F[0]));this.Am();
},F_:function(G){this.Ey(1);},He:function(G){this.Ey(0);},Ey:function(EO){var F;
if(!this.A8)this.FP.AjC((F=this.N,F[1].call(F[0])));this.A8=EO;if((this.A8<0)||(
this.A8>2))this.A8=0;this.DL(this);this.GA.Bw=!!this.A8;this.Gz.Bw=!!this.A8;this.
Am();},Ais:function(G){if(this.A8>1)this.Ey(this.A8-1);},A4v:function(G){},Ay7:function(
s){this.A4v(s);},A36:function(G){},Bcm:function(s){this.A36(s);},A2N:function(AtA
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AK._Init.call(
this.AkN={I:this},0);A.acg.AK._Init.call(this.AkO={I:this},0);A.acg.AK._Init.call(
this.Q_={I:this},0);A.acg.Ap._Init.call(this.QJ={I:this},0);A.acg.AK._Init.call(
this.AbJ={I:this},0);A.acg.BY._Init.call(this.V$={I:this},0);A.acg.Text._Init.call(
this.PQ={I:this},0);A.acg.Text._Init.call(this.PR={I:this},0);A.acg.Text._Init.call(
this.SG={I:this},0);A.Core.BG._Init.call(this.Gz={I:this},0);A.Core.BG._Init.call(
this.GA={I:this},0);A.Core.BG._Init.call(this.JD={I:this},0);this.__proto__=C.Acx;
this.H(AfK);this.T(A.aaR(A.acf.Arx));this.Background.H(AfK);this.V.H(BF);this.V.
R(A.aaR(A.acf.AG$));this.V.A4(0x12);this.AkN.H(Bud);this.AkN.L(A.jb.Gn);this.AkO.
H(Bue);this.AkO.L(A.jb.Ia);this.Q_.H(Buf);this.Q_.L(A.jb.E2);this.QJ.H(Bug);this.
AbJ.H(Buh);this.V$.H(Bui);this.V$.Nx(3);this.V$.L(A.jb.AV);this.V$.Z(false);this.
PQ.H(Buj);this.PQ.Ho(8);this.PQ.Jg(true);this.PQ.A4(0x11);this.PQ.L(0xFF000000);
this.PR.H(Buk);this.PR.Ho(8);this.PR.Jg(true);this.PR.A4(0x11);this.PR.L(0xFF000000
);this.SG.H(Bul);this.SG.Jg(false);this.SG.A4(0x12);this.SG.L(0xFF000000);this.Gz.
Filter=5;this.Gz.Bw=false;this.GA.Filter=4;this.GA.Bw=false;this.JD.Filter=1;this.
Iu(this.V,-1);this.Iu(this.DC,-2);this.J(this.AkN,-1);this.J(this.AkO,-1);this.J(
this.Q_,-1);this.J(this.QJ,-1);this.J(this.AbJ,-1);this.J(this.V$,-1);this.J(this.
PQ,-1);this.J(this.PR,0);this.J(this.SG,0);this.QJ.Ax(A.aaL(A.ach.ADO));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SG.S(A.aaL(A.fl.Ak));this.Gz.BH=[
this,this.Al8];this.Gz.D3=[this,this.A04];this.GA.BH=[this,this.Al9];this.GA.D3=[
this,this.A06];this.JD.BH=[this,this.AdD];this.FP=A._NewObject(C.AeA,0);},_Done:
function(){this.__proto__=C.BW;this.AkN._Done();this.AkO._Done();this.Q_._Done();
this.QJ._Done();this.AbJ._Done();this.V$._Done();this.PQ._Done();this.PR._Done();
this.SG._Done();this.Gz._Done();this.GA._Done();this.JD._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkN._ReInit();this.AkO._ReInit(
);this.Q_._ReInit();this.QJ._ReInit();this.AbJ._ReInit();this.V$._ReInit();this.
PQ._ReInit();this.PR._ReInit();this.SG._ReInit();this.Gz._ReInit();this.GA._ReInit(
);this.JD._ReInit();this.T(A.aaR(A.acf.Arx));this.V.R(A.aaR(A.acf.AG$));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SG.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FP)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J6)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FO={X5:null,Acy:
null,Aof:0,Aog:0,Dv:function(){if(!this.X5)return 0;return this.X5.MQ;},C8:function(
aIndex){if(!this.X5||(aIndex>=this.X5.MQ))return-1;return this.X5.Get(aIndex);},
Ge:function(aIndex){return this.A7h().BU(this.C8(aIndex));},D0:function(A9){if(!
this.X5)return-1;return this.X5.Avy(A9);},H7:function(){if(!this.X5)return-1;return this.
X5.H7();},AnP:function(E){if(this.Aof===E)return;this.Aof=E;A.pe([this,this.AV1]
,this);},A0Z:function(Aq){this.AnP(Aq);},AnQ:function(E){if(this.Aog===E)return;
this.Aog=E;A.pe([this,this.AV2],this);},A00:function(Aq){this.AnQ(Aq);},AV2:function(
G){A.abo([this,this.AS$,this.A00],0);},AV1:function(G){A.abo([this,this.AS_,this.
A0Z],0);},A7h:function(){return this.Acy;},AS_:function(){return this.Aof;},AS$:
function(){return this.Aog;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acy={I:this},0);this.__proto__=C.FO;},_Done:function(
){this.__proto__=C.AC;this.Acy._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acy._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMN={Init:
function(aArg){A.zV([this,this.BfT],A._GetAutoObject(A.Device.Helper).UN,0);A.zV([
this,this.BfR],A._GetAutoObject(A.Device.Helper).UM,0);this.BfT(this);this.BfR(this
);},Au:function(E){C.FO.Au.call(this,E);this.AnQ(A._GetAutoObject(A.Device.Helper
).UN.Get(this.D0(E)));this.AnP(A._GetAutoObject(A.Device.Helper).UM.Get(this.D0(
E)));},AnP:function(E){if(this.Aof===E)return;C.FO.AnP.call(this,E);A._GetAutoObject(
A.Device.Helper).UM.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).UM.
Cs();},AnQ:function(E){if(this.Aog===E)return;C.FO.AnQ.call(this,E);A._GetAutoObject(
A.Device.Helper).UN.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).UN.
Cs();},BfT:function(G){this.Aog=A._GetAutoObject(A.Device.Helper).UN.Get(this.D0(
this.Q));A.pe([this,this.AV2],this);},BfR:function(G){this.Aof=A._GetAutoObject(
A.Device.Helper).UM.Get(this.D0(this.Q));A.pe([this,this.AV1],this);},_Init:function(
aArg){C.FO._Init.call(this,aArg);this.__proto__=C.AMN;this.X5=A._GetAutoObject(A.
Device.Helper).Ad6;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMO={AgI:null,ACa:0,AB_:0,Init:function(aArg){A.zV([this,this.Bf6],A._GetAutoObject(
A.Device.Helper).AfE,0);A.zV([this,this.Bf4],A._GetAutoObject(A.Device.Helper).AfD
,0);A.zV([this,this.Bf2],A._GetAutoObject(A.Device.Helper).AfC,0);A.zV([this,this.
Bf8],A._GetAutoObject(A.Device.Helper).AfF,0);this.Bf6(this);this.Bf4(this);this.
Bf2(this);this.Bf8(this);},Au:function(E){C.FO.Au.call(this,E);this.AnQ(A._GetAutoObject(
A.Device.Helper).AfE.Get(this.D0(E)));this.AnP(A._GetAutoObject(A.Device.Helper).
AfD.Get(this.D0(E)));this.ATe(A._GetAutoObject(A.Device.Helper).AfC.Get(this.D0(
E)));this.ATg(A._GetAutoObject(A.Device.Helper).AfF.Get(this.D0(E)));},AnP:function(
E){if(this.Aof===E)return;C.FO.AnP.call(this,E);A._GetAutoObject(A.Device.Helper
).AfD.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).AfD.Cs();},AnQ:function(
E){if(this.Aog===E)return;C.FO.AnQ.call(this,E);A._GetAutoObject(A.Device.Helper
).AfE.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).AfE.Cs();},A7h:function(
){return this.AgI;},Bf6:function(G){this.Aog=A._GetAutoObject(A.Device.Helper).AfE.
Get(this.D0(this.Q));A.pe([this,this.AV2],this);},Bf4:function(G){this.Aof=A._GetAutoObject(
A.Device.Helper).AfD.Get(this.D0(this.Q));A.pe([this,this.AV1],this);},ATg:function(
E){if(this.ACa===E)return;this.ACa=E;A._GetAutoObject(A.Device.Helper).AfF.Set(this.
D0(this.Q),E);A._GetAutoObject(A.Device.Helper).AfF.Cs();A.pe([this,this.BaD],this
);},ATe:function(E){if(this.AB_===E)return;this.AB_=E;A._GetAutoObject(A.Device.
Helper).AfC.Set(this.D0(this.Q),E);A._GetAutoObject(A.Device.Helper).AfC.Cs();A.
pe([this,this.BaC],this);},BaC:function(G){A.abo([this,this.A86,this.ATe],0);},BaD:
function(G){A.abo([this,this.A88,this.ATg],0);},Bf2:function(G){this.AB_=A._GetAutoObject(
A.Device.Helper).AfC.Get(this.D0(this.Q));A.pe([this,this.BaC],this);},Bf8:function(
G){this.ACa=A._GetAutoObject(A.Device.Helper).AfF.Get(this.D0(this.Q));A.pe([this
,this.BaD],this);},A88:function(){return this.ACa;},A86:function(){return this.AB_;
},_Init:function(aArg){C.FO._Init.call(this,aArg);A.Device.AgI._Init.call(this.AgI={
I:this},0);this.__proto__=C.AMO;this.X5=A._GetAutoObject(A.Device.Helper).AgJ;this.
Init(aArg);},_Done:function(){this.__proto__=C.FO;this.AgI._Done();C.FO._Done.call(
this);},_ReInit:function(){C.FO._ReInit.call(this);this.AgI._ReInit();},_Mark:function(
D){var B;C.FO._Mark.call(this,D);if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMu={RW:null,Init:function(
aArg){var B;A.zX([this,this.AiQ],[B=this.AnimalType,B.Cb,B.Cd],0);A.pe([this,this.
AiQ],this);this.Ba(this.RW);},Bk:function(E){C.I$.Bk.call(this,E);this.RW.By(this.
Jy.AM);},AiQ:function(G){A._GetAutoObject(A.Device.Device).AwO(this.AnimalType.Q
);},_Init:function(aArg){C.I$._Init.call(this,aArg);C.TO._Init.call(this.RW={I:this
},0);this.__proto__=C.AMu;var B;this.Jy.As(false);this.Jy.Ai(false);this.Jy.Z(false
);this.RW.H(AyT);this.RW.Ai(true);this.RW.Ns(14);this.RW.Ahz(0);this.RW.OW(0);this.
J(this.RW,-4);this.RW.AQ=[this,this.AAG];this.RW.Au([B=this.AnimalType,B.Cb,B.Cd
]);this.RW.CH(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I$;this.RW._Done();C.I$._Done.call(this);},_ReInit:function(){C.I$._ReInit.call(
this);this.RW._ReInit();},_Mark:function(D){var B;C.I$._Mark.call(this,D);if((B=
this.RW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TO={Filter:null,Es:0,TableId:0,Operator:1,CQ:function(){var F;this.Tz((F=this.
Filter,F[1].call(F[0])).DN(this.Es,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hy.H(AhZ
);this.H8.H([aSize[0]-40,40,aSize[0],80]);this.DC.H([this.Hy.M[2]-5,this.Hy.M[1]
,this.H8.M[0]+5,this.Hy.M[3]]);this.DC.AFx((B=this.DC.M)[2]-B[0]);this.DC.HJ(this.
DC.Gv,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mk],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mk
],E,0);A.pe([this,this.Mk],this);},Mk:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tz((F=this.Filter,F[1].call(F[0])).DN(this.Es,this.
Operator));else this.Tz(null);},Ahz:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mk],this);},Ns:function(E){if(this.Es===E)return;this.
Es=E;A.pe([this,this.Mk],this);},Tz:function(AH){this.T(A._GetAutoObject(A.Device.
Helper).Am1(this.TableId,this.Es));this.Am();},OW:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mk],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TO;this.H(K4);this.V.A4(0x11);this.V.Cm(A.aaL(A.
fl.Bg));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cm(A.aaL(A.fl.Bg));this.
CQ();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASj={FG:null,LU:null,DZ:null,Y:null,Eh:null,Co:null,CI:null,Db:null,Gq:null,
Eg:null,C$:null,B1:null,Bx:null,Ay:null,Breed:null,Jo:null,AnimalType:null,Gender:
null,Pt:null,K3:null,Jm:null,KV:null,Amo:null,KQ:0,Ne:0,A4E:false,Init:function(
aArg){var B;A.zX([this,this.BBu],[B=A._GetAutoObject(A.Device.Device),B.AES,B.AI3
],0);A.zV([this,this.Aub],this.LU,0);A.zX([this,this.Aub],[B=A._GetAutoObject(A.
Device.Device),B.Aws,B.Ay3],0);A.zX([this,this.GJ],[B=A._GetAutoObject(A.Device.
Device),B.AES,B.AI3],0);A.zV([this,this.GJ],this.LU,0);A.zX([this,this.AiQ],this.
B1.Q,0);A.pe([this,this.AiQ],this);A.pe([this,this.Bfw],this);A.pe([this,this.Aub
],this);A.pe([this,this.GJ],this);A.pe([this,this.A37],this);},Ba:function(E){C.
AB.Ba.call(this,E);A.pe([this,this.Aqa],this);A.pe([this,this.DL],this);},Aj:function(
Ae){var F;C.AB.Aj.call(this,Ae);if(!!(F=this.Eh.Q,F[1].call(F[0])))this.Eh.AnD(A.
jb.E2);else this.Eh.AnD(A.jb.Gn);if(A._GetAutoObject(A.Device.Device).AeV){if(!!(
F=this.Co.Dm,F[1].call(F[0])))this.Co.AnD(A.jb.E2);else this.Co.AnD(A.jb.Gn);}else
this.Co.AnD(A.jb.Rk);A.pe([this,this.DL],this);},DG:function(G){var B;C.AB.DG.call(
this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(this.AV,true,null,null
);},LY:function(G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(
A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HL().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.G8();A._GetAutoObject(A.Device.Helper
).Aqm(A._GetAutoObject(A.Device.Helper).W);this.ApE();},CC:function(G){C.AB.CC.call(
this,G);A._GetAutoObject(A.Device.Device).AFE(0);},E4:function(G){C.AB.E4.call(this
,G);this.Jm.As(false);A._GetAutoObject(A.Device.Device).UA(false);},Ex:function(
G){A._GetAutoObject(A.Device.Helper).W.FE();A._GetAutoObject(C.A5).FA();},Fi:function(
G){var B;this.Ay.MK((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);
this.Ay.ML(-this.Y.Bs[1]);},Aub:function(G){var F,Cv;if(!!A._GetAutoObject(A.Device.
Device).OverlayMenu)return;this.Aqa(this);this.Am();if((this.AV===this.Eh)&&!!(F=
this.Eh.Q,F[1].call(F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aer(26,(F=this.
Eh.Q,F[1].call(F[0])))){A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(
A.Device.Converter).Rl((F=this.Eh.Q,F[1].call(F[0]))),0,[this,this.A3V]);(F=this.
Eh.Q,F[2].call(F[0],0));A.pe([this,this.A3U],this);return;}else if(A._GetAutoObject(
A.Device.Device).AeV)this.JR(this.Co);}var BeM=!!(F=this.Eh.Q,F[1].call(F[0]))&&(
!A._GetAutoObject(A.Device.Device).AeV||!!(Cv=this.Co.Dm,Cv[1].call(Cv[0])));if(
this.LU.AOS()>0){if((this.AV===this.Co)&&BeM)this.Ba(this.Y.TX(this.Co,0x415));return;
}if((A._GetAutoObject(A.Device.Device).AeV&&(this.AV===this.Co))&&!!(F=this.Co.Dm
,F[1].call(F[0])))this.JR(this.Eh);if(BeM)this.Bdx(this);},AdB:function(G){A._GetAutoObject(
A.Device.Device).Dw(13);},Ai2:function(){var F;this.FG.Cs(A._GetAutoObject(A.Device.
Device).An);if(this.LU.MG(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HL().toFixed(),
0,null);else{var Me=A._GetAutoObject(A.Device.Device).An.L3(0,this.FG.Id);A._GetAutoObject(
A.Device.Device).SZ(Me);var B3=A._NewObject(A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(
this.FG.Id);B3.OnSetBodyWeight(this.KQ);B3.OnSetTimestamp(this.FG.DateOfBirth);B3.
Cs(A._GetAutoObject(A.Device.Device).Bt);}}if(this.LU.MG(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HL().toFixed(),0,null);else{var Me=A._GetAutoObject(A.Device.
Device).An.L3(0,this.FG.Id);A._GetAutoObject(A.Device.Device).SZ(Me);var B3=A._NewObject(
A.Device.Rating,0);B3.G8();B3.OnSetAnimalId(this.FG.Id);B3.OnSetBodyWeight(this.
Ne);B3.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dr());B3.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WO(65280);this.Jm.As(true
);(F=A._GetAutoObject(A.Device.Device),F.AFE(F.Av2+1));this.A4E=true;A.pe([this,
this.Aqa],this);this.ApE();},GJ:function(G){this.Co.ATS(A._GetAutoObject(A.Device.
Device).AeV);A._GetAutoObject(A.Device.Helper).JG(this.B1,this.LU.MG(14));A._GetAutoObject(
A.Device.Helper).JG(this.C$,this.LU.MG(23));A._GetAutoObject(A.Device.Helper).JG(
this.CI,this.LU.MG(32));A._GetAutoObject(A.Device.Helper).JG(this.Eg,this.LU.MG(
18));A._GetAutoObject(A.Device.Helper).JG(this.Db,this.LU.MG(7));A._GetAutoObject(
A.Device.Helper).JG(this.Gq,this.LU.MG(34));A._GetAutoObject(A.Device.Helper).JG(
this.Bx,this.LU.MG(22));this.KV.Z(!this.LU.AOS());var O;var Aa=null;var Apk=this.
AV;for(O=0;O<this.LU.AfW.Ni();O++){Aa=this.BAl(this.LU.AfW.OM(O));if(!!Aa)this.ZN(
Aa);}this.JR(Apk);A._GetAutoObject(A.Device.Helper).ANE(this.Y);A.pe([this,this.
A37],this);this.Am();},Ae4:function(E){if(this.KQ===E)return;this.KQ=E;A.abo([this
,this.Awd,this.Ae4],0);},Ahu:function(E){if(this.Ne===E)return;this.Ne=E;A.abo([
this,this.Anv,this.Ahu],0);},Bdx:function(G){this.FG.G8();A._GetAutoObject(A.Device.
Helper).Aqm(this.FG);this.FG.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);
this.FG.Nt(A._GetAutoObject(A.Device.Helper).W.NaisId);this.FG.SS(A._GetAutoObject(
A.Device.Helper).AMv(0,this.FG));this.FG.OV(true);if(this.LU.MG(14))this.FG.ED(A.
_GetAutoObject(A.Device.Helper).W.AnimalType);if(this.LU.MG(32))this.FG.N9(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.LU.MG(7))this.FG.J4(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.LU.MG(34))this.FG.Nw(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);if(this.LU.MG(22))this.FG.Nv(A._GetAutoObject(A.Device.Helper).W.
TransponderId);var Alx=A._GetAutoObject(A.Device.Helper).A16(this.FG,0,A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else A._GetAutoObject(A.Device.Helper).AKu(
this.FG,Alx,0,0,[this,this.ApK]);},ApE:function(){A._GetAutoObject(A.Device.Helper
).W.Nt(0);A._GetAutoObject(A.Device.Helper).W.Nv(0);if(A._GetAutoObject(A.Device.
Device).AeV)A._GetAutoObject(A.Device.Helper).W.Q8(0);this.Ae4(0);this.Ahu(0);this.
JR(this.Eh);this.Am();},ApK:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:this.ApE();break;
case 43:this.JR(this.Eh);break;case 41:break;default:A.ab5("%s%e",Atf,Ar.Id);}},
JR:function(Ag){this.Ba(Ag);this.Y.HJ(Ag,true,null,null);this.Y.VH(null,null);},
Bfw:function(G){this.Eg.Ahx(A._GetAutoObject(A.Device.Helper).W.AhX(1));this.Aub(
this);},AiQ:function(G){this.C$.Ahx(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.
Q));},A37:function(G){var B;var BCA=this.Ay.Background.Fp();var width=(BCA?((B=this.
M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.M)[2]-B[0]);var Aa;var XD=this.Y.TX(
null,0x401);while(!!XD&&(((B=XD)?B.__proto__:null)!==A.Core.Y)){Aa=(C.O4.isPrototypeOf(
XD)?XD:null);if(!!Aa)Aa.H(A.abL(Aa.M,width));XD=this.Y.TX(XD,0x1);}},BAl:function(
Aat){var Aa=null;switch(Aat){case 14:Aa=this.B1;break;case 32:Aa=this.CI;break;case
23:Aa=this.C$;break;case 7:Aa=this.Db;break;case 18:Aa=this.Eg;break;case 34:Aa=
this.Gq;break;case 22:Aa=this.Bx;break;default:A.ab5("%s%e",Bum,Aat);}return Aa;
},BBu:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeV)A._GetAutoObject(
A.Device.Helper).W.Q8(0);else if(!(F=this.Co.Dm,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.Helper).Dr()-A._GetAutoObject(A.
Device.Helper).AmN(A._GetAutoObject(A.Device.Device).AdY));this.Aub(this);},Aqa:
function(G){var B;var AKx=A.jV;var Azn=A.jb.CL;var BdO=A.jb.AV;this.Amo.AxS(this
);if(this.A4E){this.A4E=false;AKx=A._GetAutoObject(A.Device.Helper).MR(A.aaR(A.acf.
Bqd),Pc,A._GetAutoObject(A.Device.Converter).Rl(this.FG.NaisId));A.pe([B=this.Amo
,B.StartTimer],this);Azn=A.jb.E2;BdO=A.jb.Text;}else if((this.AV===this.Eh)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AKx=A.aaR(A.acf.AUS);else if((this.AV===
this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKx=A.aaR(A.acf.Bpt);
this.KV.T(AKx);this.KV.BmK(Azn);this.KV.A_m(BdO);},A3V:function(G){var Ar=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X_();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X_();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cc(76);A.
_GetAutoObject(A.Device.Device).X_();}}}else A._GetAutoObject(A.Device.Device).X_(
);},A3U:function(G){A._GetAutoObject(A.Device.Device).Aqu();},DL:function(G){var
B;if(!this.LU.AOS()){this.N.Lj.C0(255);if(this.AV===this.Eh){this.N.C5(A.aaL(A.ach.
Edit));this.N.Ce=[B=this.Eh,B.F_];}else if(this.AV===this.Co){this.N.C5(A.aaL(A.
ach.Edit));this.N.Ce=[B=this.Co,B.F_];}else{this.N.C5(null);this.N.Ce=null;}}else{
this.N.C5(A.aaL(A.ach.Am7));if((this.Eh.AqB===A.jb.Gn)||(this.Co.AqB===A.jb.Gn)){
this.N.Lj.C0(100);this.N.Ce=null;}else{this.N.Lj.C0(255);this.N.Ce=[this,this.Bdx
];}}},Al4:function(G){A._GetAutoObject(C.A5).Cc(32);},Awd:function(){return this.
KQ;},Anv:function(){return this.Ne;},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.AK._Init.call(this.DZ={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);
C.AU6._Init.call(this.Eh={I:this},0);C.AU2._Init.call(this.Co={I:this},0);C.AxH.
_Init.call(this.CI={I:this},0);C.BW._Init.call(this.Db={I:this},0);C.AsE._Init.call(
this.Gq={I:this},0);C.AkW._Init.call(this.Eg={I:this},0);C.AkW._Init.call(this.C$={
I:this},0);C.BW._Init.call(this.B1={I:this},0);C.Ary._Init.call(this.Bx={I:this}
,0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0
);C.UX._Init.call(this.Jo={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:
this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Nc._Init.call(this.
Pt={I:this},0);A.Device.K3._Init.call(this.K3={I:this},0);A.Device.TP._Init.call(
this.Jm={I:this},0);C.AG_._Init.call(this.KV={I:this},0);A.Core.Timer._Init.call(
this.Amo={I:this},0);this.__proto__=C.ASj;var B;this.Background.L(A.jb.CV);this.
N.Z(true);this.Em.As(false);this.Ds(C.APy);this.DZ.A1(0x3F);this.DZ.H(Fd);this.DZ.
L(A.jb.CL);this.Y.H(Fd);this.Y.J3(9);this.Eh.H(AyT);this.Eh.Ai(true);this.Eh.T(A.
aaR(A.acf.ACT));this.Eh.ATS(true);this.Eh.AFX(false);this.Co.H(A0E);this.Co.Ai(true
);this.Co.T(A.aaR(A.acf.Ael));this.Co.ATS(true);this.Co.AFS(true);this.CI.H(Atd);
this.CI.Ai(true);this.CI.T(A.aaR(A.acf.Breed));this.Db.H(Atd);this.Db.Ai(true);this.
Db.T(A.aaR(A.acf.Afu));this.Gq.H(Bbf);this.Gq.Ai(true);this.Gq.T(A.aaR(A.acf.Jo)
);this.Eg.H(Bun);this.Eg.Ai(true);this.Eg.T(A.aaR(A.acf.Ne));this.Eg.Gh(1000);this.
Eg.EV(999000);this.Eg.Ahx(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.
Q));this.C$.H(Bbf);this.C$.Ai(true);this.C$.T(A.aaR(A.acf.KQ));this.C$.Gh(1000);
this.C$.EV(99000);this.C$.Ahx(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.
Q));this.B1.H(Aos);this.B1.Ai(true);this.B1.T(A.aaR(A.acf.Afz));this.Bx.H(Buo);this.
Bx.Ai(true);this.Bx.T(A.aaR(A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.aaR(A.acf.Ae2));this.Ay.H(Ix);this.Jm.
B4=false;this.Jm.Cy=true;this.Jm.HP(1);this.Jm.Fq(1000);this.Jm.Ux(0);this.KV.H(
Aar);this.KV.Ai(true);this.KV.AnD(A.jb.Text);this.Amo.PZ(3000);this.J(this.DZ,0);
this.J(this.Y,0);this.J(this.Eh,0);this.J(this.Co,0);this.J(this.CI,0);this.J(this.
Db,0);this.J(this.Gq,0);this.J(this.Eg,0);this.J(this.C$,0);this.J(this.B1,0);this.
J(this.Bx,0);this.J(this.Ay,0);this.J(this.KV,0);this.N.CF=[this,this.Ex];this.N.
Cf=[this,this.AdB];this.N.C4(A.aaL(A.ach.E3));this.N.Cu(A.aaL(A.ach.AeJ));this.Y.
Eo=[this,this.Fi];this.Eh.FT([this,this.D2,this.Gu]);this.Eh.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Any,B.Nt]);this.Eh.AFs([this,this.Aub]);this.Eh.ATE([this,this.
A3U]);this.Eh.ATF([this,this.A3V]);this.Co.FT([this,this.D2,this.Gu]);this.Co.Acd([
B=A._GetAutoObject(A.Device.Helper).W,B.Awg,B.Q8]);this.Co.OO=[this,this.Bfw];this.
Co.ATE([this,this.A3U]);this.Co.ATF([this,this.A3V]);this.CI.FT([this,this.D2,this.
Gu]);this.CI.Lu([B=this.CI,B.F_]);this.CI.Kz(A.aaL(A.ach.Edit));this.CI.Au([B=this.
Breed,B.Cb,B.Cd]);this.CI.CH(this.Breed);this.CI.AnE(this.Pt);this.Db.Au([B=this.
Gender,B.Cb,B.Cd]);this.Db.CH(this.Gender);this.Gq.FT([this,this.D2,this.Gu]);this.
Gq.Lu([B=this.Gq,B.F_]);this.Gq.Kz(A.aaL(A.ach.Edit));this.Gq.Au([B=this.Jo,B.Cb
,B.Cd]);this.Gq.CH(this.Jo);this.Gq.AnE(this.K3);this.Eg.Au([this,this.Anv,this.
Ahu]);this.C$.Au([this,this.Awd,this.Ae4]);this.B1.Au([B=this.AnimalType,B.Cb,B.
Cd]);this.B1.CH(this.AnimalType);this.Bx.AQ=[this,this.Al4];this.Bx.Lu([this,this.
Al4]);this.Bx.Kz(A.aaL(A.ach.Ack));this.Bx.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.AnA,B.Nv]);this.Ay.Bn4([this,this.A37]);this.Breed.L9(A._GetAutoObject(A.Device.
Helper).W);this.Jo.L9(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L9(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L9(A._GetAutoObject(A.Device.Helper
).W);this.FG=A._NewObject(A.Device.Animal,0);this.LU=A._GetAutoObject(C.Amw);this.
Jm.Q=[B=A._GetAutoObject(A.Device.Device),B.AS6,B.A0V];this.Amo.MN=[this,this.Aqa
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DZ._Done();this.Y.
_Done();this.Eh._Done();this.Co._Done();this.CI._Done();this.Db._Done();this.Gq.
_Done();this.Eg._Done();this.C$._Done();this.B1._Done();this.Bx._Done();this.Ay.
_Done();this.Breed._Done();this.Jo._Done();this.AnimalType._Done();this.Gender._Done(
);this.Pt._Done();this.K3._Done();this.Jm._Done();this.KV._Done();this.Amo._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DZ._ReInit(
);this.Y._ReInit();this.Eh._ReInit();this.Co._ReInit();this.CI._ReInit();this.Db.
_ReInit();this.Gq._ReInit();this.Eg._ReInit();this.C$._ReInit();this.B1._ReInit(
);this.Bx._ReInit();this.Ay._ReInit();this.Breed._ReInit();this.Jo._ReInit();this.
AnimalType._ReInit();this.Gender._ReInit();this.Pt._ReInit();this.K3._ReInit();this.
Jm._ReInit();this.KV._ReInit();this.Amo._ReInit();this.Eh.T(A.aaR(A.acf.ACT));this.
Co.T(A.aaR(A.acf.Ael));this.CI.T(A.aaR(A.acf.Breed));this.Db.T(A.aaR(A.acf.Afu));
this.Gq.T(A.aaR(A.acf.Jo));this.Eg.T(A.aaR(A.acf.Ne));this.C$.T(A.aaR(A.acf.KQ));
this.B1.T(A.aaR(A.acf.Afz));this.Bx.T(A.aaR(A.acf.AcK));this.Bx.Akx(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AkS));this.Bx.Aky(A.aaR(A.acf.Ae2));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.FG)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Bx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Jo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Amo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsMassRecording"
};C.AsD={SK:null,_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);C.CG._Init.call(this.SK={I:this},0);this.__proto__=C.AsD;this.N.CS(A.aaR(A.acf.
A6R));this.Number.H(Bup);this.Jn.H(Buq);this.I0.H(Bur);this.AkF(2);this.Bdu=false;
this.BeB=true;this.BeC=false;this.SK.H(Bus);this.SK.R(A.aaR(A.acf.Baa));this.SK.
L(A.jb.Text);this.J(this.SK,0);this.N.CF=null;this.N.Ce=[this,this.AI9];this.N.C4(
null);this.SK.S(A.aaL(A.fl.Af));this.SK.AY(A.aaL(A.fl.Ak));this.SK.Cm(A.aaL(A.fl.
Bg));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.SK._Done();C.
SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.SK._ReInit();this.N.CS(A.aaR(A.acf.A6R));this.SK.R(A.aaR(
A.acf.Baa));this.SK.S(A.aaL(A.fl.Af));this.SK.AY(A.aaL(A.fl.Ak));this.SK.Cm(A.aaL(
A.fl.Bg));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.SK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancellableScreen"
};C.AD6={Cw:null,FS:function(E){if(this.Ng===E)return;C.HM.FS.call(this,E);this.
Cw.CW(E);},YB:function(HB){var B8=null;switch(HB){case-1:case 0:B8=this.Gd;break;
case 1:B8=this.Cw;break;case 2:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;
},_Init:function(aArg){C.HM._Init.call(this,aArg);C.DH._Init.call(this.Cw={I:this
},0);this.__proto__=C.AD6;this.H(But);this.Cw.H(BaU);this.Gd.H(Buu);this.J(this.
Cw,-2);this.Cw.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.HM;this.Cw.
_Done();C.HM._Done.call(this);},_ReInit:function(){C.HM._ReInit.call(this);this.
Cw._ReInit();},_Mark:function(D){var B;C.HM._Mark.call(this,D);if((B=this.Cw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsE={G5:null
,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Aj:function(Ae){C.O1.Aj.call(this,Ae);if(this.Hm)this.G5.FS(A.jb.CL);else this.
G5.FS(A.jb.CV);},A2H:function(){this.Ba(this.G5);},_Init:function(aArg){C.O1._Init.
call(this,aArg);C.HM._Init.call(this.G5={I:this},0);this.__proto__=C.AsE;this.G5.
H(Buv);this.J(this.G5,0);this.G5.Au([this,this.ASW,this.AFL]);},_Done:function(){
this.__proto__=C.O1;this.G5._Done();C.O1._Done.call(this);},_ReInit:function(){C.
O1._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxH={G5:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Aj:function(Ae){C.O1.Aj.call(this,Ae);if(this.Hm)this.G5.FS(
A.jb.CL);else this.G5.FS(A.jb.CV);},A2H:function(){this.Ba(this.G5);},_Init:function(
aArg){C.O1._Init.call(this,aArg);C.AD6._Init.call(this.G5={I:this},0);this.__proto__=
C.AxH;this.G5.A1(0x18);this.G5.H(Buw);this.J(this.G5,0);this.G5.Au([this,this.ASW
,this.AFL]);},_Done:function(){this.__proto__=C.O1;this.G5._Done();C.O1._Done.call(
this);},_ReInit:function(){C.O1._ReInit.call(this);this.G5._ReInit();},_Mark:function(
D){var B;C.O1._Mark.call(this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acz={ScreenTypeToString:
null,Dv:function(){return 4;},Ge:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BU(this.C8(aIndex));},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acz;this.BJ.Set(0,3);this.BJ.Set(1,35);this.BJ.Set(2
,34);this.BJ.Set(3,43);},_Done:function(){this.__proto__=C.Cn;this.ScreenTypeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWl={KV:null,HH:null,L2:null,IO:null,KM:A.jV,Aqr:false,ALr:false,A20:false,Init:
function(aArg){var B;A.zX([this,this.Bf1],[B=A._GetAutoObject(A.Device.Device),B.
Ut,B.Vb],0);A.pe([this,this.Bf1],this);A.pe([this,this.Aqa],this);},WJ:function(
G){this.AgB();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.Settings),[this,this.A4a]);A.
_GetAutoObject(C.BT).Fy();this.AMi();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.ARL)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DG:function(G){},H0:function(
G){if((this.Aqr===false)||!this.KM.length){C.Mq.H0.call(this,G);return;}if(!this.
KM.length)this.L2.Mz=true;var FM=A._GetAutoObject(A.Device.AkJ).Bgg(this.KM);this.
KM=A.jV;if(!FM){if((this.KM.length<13)&&!A._GetAutoObject(A.Device.Device).P1)A.
_GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,[this,this.SO]);else A._GetAutoObject(
A.Device.Device).AZ(103,true,A.jV,0,[this,this.SO]);A.pe([this,this.WK],this);return;
}if(A._GetAutoObject(A.Device.Helper).BkK(FM)){A.pe([this,this.A$3],this);A.pe([
this,this.Aas],this);}else{A._GetAutoObject(A.Device.Device).AZ(117,true,A.jV,0,[
this,this.SO]);A.pe([this,this.WK],this);}},CC:function(G){C.Mq.CC.call(this,G);
if(this.A20){this.A20=false;A.pe([this,this.A01],this);}},Agk:function(G){if(this.
Aqr&&(this.KM.length>0)){A.pe([this,this.Alo],this);return;}C.Mq.Agk.call(this,G
);this.A$t(true);},AbB:function(){return C.ACl;},AbC:function(){return C.ADF;},Ra:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7w(Math.max(A._GetAutoObject(A.Device.Device).Av4,A._GetAutoObject(A.Device.Helper
).A7o(A._GetAutoObject(A.Device.Device).An))+1));},HR:function(G){C.Mq.HR.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).Ta(A._GetAutoObject(A.Device.Device
).P1)===10)&&this.ALr)&&!!this.Bf.AX)&&!this.Bf.AX.B_()){this.N.Cu(null);this.N.
E6(A.aaR(A.acf.No));this.N.Cf=[this,this.BBI];this.N.C5(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Ce=[this,this.BBJ];}else if(A._GetAutoObject(A.Device.Helper).ARw(
)){this.N.Cu(A.aaL(A.ach.Ara));this.N.Cf=null;this.N.E6(A.jV);this.N.IT.C0(100);
}else if(this.Aki()===false){this.N.Cu(A._GetAutoObject(A.Device.Converter).Ajs(
A._GetAutoObject(A.Device.Converter).AMd(this.L7.ADg())));this.N.Cf=[this,this.Aas
];this.N.E6(A.jV);}this.N.OX(false);this.N.OY(false);},AaO:function(G){C.Mq.AaO.
call(this,G);this.Bhq(this);},Agn:function(){A._GetAutoObject(C.A5).Cc(86);},ABd:
function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E_();var Azb=
aFilter.DN(26,4);if(!!Azb){aFilter.Nz(Azb);A._GetAutoObject(A.Device.Device).An.
Bk(aFilter);if(!!this.Bf)this.Bf.GU(0);}},A7m:function(){return C.APF;},BgF:function(
){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.
Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_();FilterCriterion=(
A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DN(26,4))?B:null);if(
!!FilterCriterion)Filter.Nz(FilterCriterion);A._GetAutoObject(A.Device.Device).An.
Bk(Filter);}},A4a:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A20=true;
A._GetAutoObject(C.A5).Cc(89);},ALy:function(G){if(A._GetAutoObject(A.Device.Converter
).Ta(A._GetAutoObject(A.Device.Device).P1)===10){if(this.ALr){this.Dl(A.aaR(A.acf.
Bo9));this.Bf.NX.S(A.aaL(A.fl.Bg));}else{this.Dl(A.aaR(A.acf.AED));this.Bf.NX.S(
A.aaL(A.fl.Af));}}else this.Dl(A.aaR(A.acf.AED));},A$t:function(E){if(this.ALr===
E)return;this.ALr=E;A.pe([this,this.AoC],this);A.pe([this,this.ALy],this);},BBJ:
function(G){A._GetAutoObject(C.A5).Acg(90);},BBI:function(G){this.A$t(false);},Bf1:
function(G){this.Bhq(this);},BmC:function(E){if(this.Aqr===E)return;this.Aqr=E;A.
pe([this,this.Z$],this);A.pe([this,this.Aqa],this);},Aqa:function(G){this.KV.Z(this.
Aqr);if(this.Aqr)this.A_Q(Bbg);else this.A_Q(Ald);},AAL:function(G){if(this.KM.length<
17)this.KM=this.KM+String.fromCharCode(this.HH.Dz);},Awa:function(G){if((this.IO.
Dz===0x0D)||(this.IO.Dz===0x0A))this.H0(this);else this.IO.Mz=true;},WK:function(
G){A._GetAutoObject(A.Device.Device).Aqu();A.ab5("%s",Bux);},SO:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X_();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X_();else if(Ar.PopupState===7){A._GetAutoObject(C.A5).Cc(76);A.
_GetAutoObject(A.Device.Device).X_();}}}else A._GetAutoObject(A.Device.Device).X_(
);},Bhq:function(G){this.BmC(A._GetAutoObject(A.Device.Helper).ARw()&&(A._GetAutoObject(
A.Device.Device).An.B_()>0));},_Init:function(aArg){C.Mq._Init.call(this,aArg);C.
AG_._Init.call(this.KV={I:this},0);A.Core.BG._Init.call(this.HH={I:this},0);A.Core.
BG._Init.call(this.L2={I:this},0);A.Core.BG._Init.call(this.IO={I:this},0);this.
__proto__=C.AWl;this.Ds(C.ADw);this.Dl(A.aaR(A.acf.AED));this.KV.H(Aos);this.KV.
T(A.aaR(A.acf.AUS));this.KV.AnD(A.jb.Text);this.KV.A_m(A.jb.AV);this.HH.Filter=143;
this.L2.Filter=149;this.IO.Filter=145;this.J(this.KV,0);this.ATA(A._GetAutoObject(
C.Aya));this.HH.BH=[this,this.AAL];this.L2.BH=[this,this.Alo];this.IO.BH=[this,this.
Awa];this.Init(aArg);},_Done:function(){this.__proto__=C.Mq;this.KV._Done();this.
HH._Done();this.L2._Done();this.IO._Done();C.Mq._Done.call(this);},_ReInit:function(
){C.Mq._ReInit.call(this);this.KV._ReInit();this.HH._ReInit();this.L2._ReInit();
this.IO._ReInit();this.Dl(A.aaR(A.acf.AED));this.KV.T(A.aaR(A.acf.AUS));},_Mark:
function(D){var B;C.Mq._Mark.call(this,D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YoungNoTransponderListScreen"
};C.AWk={_Init:function(aArg){C.I$._Init.call(this,aArg);this.__proto__=C.AWk;this.
K1.As(false);this.K1.Ai(false);this.K1.Z(false);this.BnE(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARo={Sz:null,Q:null,A8G:0,Ng:0,Init:function(aArg){this.ATD(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sz)this.Sz.Au(E);},ATD:function(
E){if(this.A8G===E)return;this.A8G=E;var X;switch(E){case 2:X=A._NewObject(C.HM,
0);break;case 3:X=A._NewObject(C.AD6,0);break;case 4:X=A._NewObject(C.ARl,0);break;
case 5:X=A._NewObject(C.ARm,0);break;case 6:X=A._NewObject(C.AvV,0);break;default:{
X=null;A.ab5("%s%i",Buy,E);}}this.BnD(X);},BnD:function(E){if(this.Sz===E)return;
if(!!this.Sz){this.Sz.Au(null);this.HQ(this.Sz);}this.Sz=E;if(!!this.Sz){this.Sz.
Au(this.Q);this.J(this.Sz,0);}},FS:function(E){if(this.Ng===E)return;this.Ng=E;if(
!!this.Sz)this.Sz.FS(E);},SY:function(GC){if(!!this.Sz)this.Sz.SY(GC);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARo;this.H(Ayz);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARl={CX:null,Cw:null,FS:function(
E){if(this.Ng===E)return;C.HM.FS.call(this,E);this.Cw.CW(E);this.CX.CW(E);},YB:function(
HB){var B8=null;switch(HB){case-1:case 0:B8=this.Gd;break;case 1:B8=this.Cw;break;
case 2:B8=this.CX;break;case 3:B8=this.G2;break;default:A.ab5("%s",Ah4);}return B8;
},_Init:function(aArg){C.HM._Init.call(this,aArg);C.DH._Init.call(this.CX={I:this
},0);C.DH._Init.call(this.Cw={I:this},0);this.__proto__=C.ARl;this.H(Buz);this.G2.
H(Aln);this.CX.H(BaV);this.Cw.H(BaW);this.Gd.H(BaX);this.J(this.CX,-2);this.J(this.
Cw,-2);this.CX.Dk=[this,this.GY];this.Cw.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HM;this.CX._Done();this.Cw._Done();C.HM._Done.call(this);},_ReInit:function(
){C.HM._ReInit.call(this);this.CX._ReInit();this.Cw._ReInit();},_Mark:function(D
){var B;C.HM._Mark.call(this,D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC2={Tb:null,Aj:function(Ae){C.Abz.Aj.call(this,Ae);this.Tb.L(this.V.AR);},_Init:
function(aArg){C.Abz._Init.call(this,aArg);C.CG._Init.call(this.Tb={I:this},0);this.
__proto__=C.AC2;this.V.Z(false);this.AW.H(BuA);this.AW.ATD(4);this.Tb.H(BuB);this.
Tb.R(A.aaR(A.acf.Kq));this.Tb.L(A.jb.Bm);this.J(this.Tb,0);this.Tb.S(A.aaL(A.fl.
Af));this.Tb.AY(A.aaL(A.fl.Ak));this.Tb.Cm(null);},_Done:function(){this.__proto__=
C.Abz;this.Tb._Done();C.Abz._Done.call(this);},_ReInit:function(){C.Abz._ReInit.
call(this);this.Tb._ReInit();this.Tb.R(A.aaR(A.acf.Kq));this.Tb.S(A.aaL(A.fl.Af)
);this.Tb.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abz._Mark.call(this,D);
if((B=this.Tb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L8={Y_:null,Uc:null,AR:0,A7X:false,L:function(E){if(this.AR===E)return;this.
AR=E;this.Y_.L(this.AR);this.Uc.L(this.AR);},A_M:function(E){var B;if(this.A7X===
E)return;this.A7X=E;if(E){this.Y_.Z(true);this.Uc.DE([this.Uc.EE[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y_.Z(false);this.Uc.DE([this.Uc.EE[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C9._Init.call(
this.Y_={I:this},0);A.acg.C9._Init.call(this.Uc={I:this},0);this.__proto__=C.L8;
this.H(A0A);this.Y_.A1(0x2D);this.Y_.DE(Ah1);this.Y_.DO(Bbh);this.Y_.L(A.jb.Text
);this.Uc.A1(0x36);this.Uc.DE(Bbh);this.Uc.DO(BuC);this.Uc.L(A.jb.Text);this.AR=
A.jb.Text;this.J(this.Y_,0);this.J(this.Uc,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y_._Done();this.Uc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y_._ReInit();this.Uc._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Uc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUJ={SF:null,PJ:null,Db:null,B1:null,CI:null,GS:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pt:null,UX:null,K3:null,Je:null,D5:null,Init:function(
aArg){A.zX([this,this.AuU],this.B1.Q,0);A.zX([this,this.ANa],this.CI.Q,0);A.zX([
this,this.Brx],this.SF.Q,0);A.zX([this,this.Avw],this.Db.Q,0);A.zX([this,this.AWh
],this.GS.Q,0);},AuU:function(G){var F;A._GetAutoObject(A.Device.Device).ED((F=this.
B1.Q,F[1].call(F[0])));},Brx:function(G){var F;A._GetAutoObject(A.Device.Device).
Axo((F=this.SF.Q,F[1].call(F[0])));},Avw:function(G){var F;A._GetAutoObject(A.Device.
Device).J4((F=this.Db.Q,F[1].call(F[0])));},AWh:function(G){var F;A._GetAutoObject(
A.Device.Device).Nw((F=this.GS.Q,F[1].call(F[0])));},ANa:function(G){var F;A._GetAutoObject(
A.Device.Device).N9((F=this.CI.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ch._Init.
call(this,aArg);C.BW._Init.call(this.SF={I:this},0);C.Iv._Init.call(this.PJ={I:this
},0);C.BW._Init.call(this.Db={I:this},0);C.BW._Init.call(this.B1={I:this},0);C.AxH.
_Init.call(this.CI={I:this},0);C.AsE._Init.call(this.GS={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Nc._Init.call(this.Pt={I:this},0);C.UX._Init.call(this.UX={I:
this},0);A.Device.K3._Init.call(this.K3={I:this},0);C.ZU._Init.call(this.Je={I:this
},0);C.D5._Init.call(this.D5={I:this},0);this.__proto__=C.AUJ;var B;this.Jh((A.aaR(
A.acf.Ass)+AyJ)+A.aaR(A.acf.AjH));this.SF.H(Ah3);this.SF.Ai(true);this.SF.T(A.aaR(
A.acf.BaN));this.SF.Bh(true);this.SF.By(0);this.PJ.H(Ayx);this.PJ.Ai(true);this.
PJ.Z(true);this.PJ.T(A.aaR(A.acf.AdY));this.PJ.Gh(0);this.PJ.EV(99);this.PJ.IX(A.
aaR(A.acf.Kq));this.PJ.Ji(A.aaR(A.acf.GN));this.Db.H(Aar);this.Db.Ai(true);this.
Db.T(A.aaR(A.acf.Afu));this.Db.Bh(true);this.Db.By(0);this.B1.H(Alk);this.B1.Ai(
true);this.B1.T(A.aaR(A.acf.Afz));this.B1.Bh(true);this.B1.By(0);this.CI.H(AcX);
this.CI.Ai(true);this.CI.T(A.aaR(A.acf.Breed));this.CI.Bh(false);this.GS.H(AcX);
this.GS.Ai(true);this.GS.T(A.aaR(A.acf.Jo));this.GS.Bh(true);this.AnimalType.Au(
A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A._GetAutoObject(
A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(A.Device.
Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);this.UX.Au(
A._GetAutoObject(A.Device.Device).WhereAbouts);this.Je.H(BuD);this.Je.Ai(true);this.
Je.T(A.aaR(A.acf.AGq));this.Je.Bh(false);this.J(this.SF,0);this.J(this.PJ,0);this.
J(this.Db,0);this.J(this.B1,0);this.J(this.CI,0);this.J(this.GS,0);this.J(this.Je
,0);this.SF.Au([B=this.WeightRecordingScope,B.Cb,B.Cd]);this.SF.CH(this.WeightRecordingScope
);this.PJ.Au([B=A._GetAutoObject(A.Device.Device),B.A8Z,B.BbE]);this.Db.Au([B=this.
Gender,B.Cb,B.Cd]);this.Db.CH(this.Gender);this.B1.Au([B=this.AnimalType,B.Cb,B.
Cd]);this.B1.CH(this.AnimalType);this.CI.FT([this,this.D2,this.Gu]);this.CI.Lu([
B=this.CI,B.F_]);this.CI.Kz(A.aaL(A.ach.Edit));this.CI.Au([B=this.Breed,B.Cb,B.Cd
]);this.CI.CH(this.Breed);this.CI.AnE(this.Pt);this.GS.FT([this,this.D2,this.Gu]
);this.GS.Lu([B=this.GS,B.F_]);this.GS.Kz(A.aaL(A.ach.Edit));this.GS.Au([B=this.
UX,B.Cb,B.Cd]);this.GS.CH(this.UX);this.GS.AnE(this.K3);this.Je.FT([this,this.D2
,this.Gu]);this.Je.Kz(A.aaL(A.ach.Edit));this.Je.CH(this.D5);this.Je.Afe([B=A._GetAutoObject(
A.Device.Device),B.Awn,B.BbU]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ch;this.SF._Done();this.PJ._Done();this.Db._Done();this.B1._Done();this.CI._Done(
);this.GS._Done();this.AnimalType._Done();this.WeightRecordingScope._Done();this.
Gender._Done();this.Breed._Done();this.Pt._Done();this.UX._Done();this.K3._Done(
);this.Je._Done();this.D5._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch.
_ReInit.call(this);this.SF._ReInit();this.PJ._ReInit();this.Db._ReInit();this.B1.
_ReInit();this.CI._ReInit();this.GS._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope.
_ReInit();this.Gender._ReInit();this.Breed._ReInit();this.Pt._ReInit();this.UX._ReInit(
);this.K3._ReInit();this.Je._ReInit();this.D5._ReInit();this.Jh((A.aaR(A.acf.Ass
)+AyJ)+A.aaR(A.acf.AjH));this.SF.T(A.aaR(A.acf.BaN));this.PJ.T(A.aaR(A.acf.AdY));
this.PJ.IX(A.aaR(A.acf.Kq));this.PJ.Ji(A.aaR(A.acf.GN));this.Db.T(A.aaR(A.acf.Afu
));this.B1.T(A.aaR(A.acf.Afz));this.CI.T(A.aaR(A.acf.Breed));this.GS.T(A.aaR(A.acf.
Jo));this.Je.T(A.aaR(A.acf.AGq));},_Mark:function(D){var B;C.Ch._Mark.call(this,
D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UX)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.K3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Je)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUI={QT:null,FC:null,Iq:null,Da:null,Dn:null,EM:null,AutoRegistrationMode:null
,Ad1:null,Init:function(aArg){var B;A.zX([this,this.Bh4],this.QT.Q,0);A.zX([this
,this.Bfh],[B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0H],0);A.zX([this,this.
AdC],[B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_],0);A.zX([this,this.AdC],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.Bfh],this);A.pe([
this,this.AdC],this);},Bh4:function(G){var F;A._GetAutoObject(A.Device.Device).Awz((
F=this.QT.Q,F[1].call(F[0])));},Bfh:function(G){switch(A._GetAutoObject(A.Device.
Device).AgD){case 0:A._GetAutoObject(A.Device.Helper).JG(this.Iq,true);break;case
1:A._GetAutoObject(A.Device.Helper).JG(this.Iq,false);break;default:throw new Error(
BuE+A._GetAutoObject(A.Device.Device).AgD.toFixed());}},AdC:function(G){var F,Cv;
if(((F=this.Da.Q,F[1].call(F[0]))+(Cv=this.Dn.Q,Cv[1].call(Cv[0])))>12)(Cv=this.
Dn.Q,Cv[2].call(Cv[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Ch._Init.call(this,aArg);C.BW._Init.call(this.QT={I:this},0);C.BW._Init.call(this.
FC={I:this},0);C.AGQ._Init.call(this.Iq={I:this},0);C.Iv._Init.call(this.Da={I:this
},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av5._Init.call(this.EM={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.Ad1._Init.
call(this.Ad1={I:this},0);this.__proto__=C.AUI;var B;this.Jh(A.aaR(A.acf.Aqq));this.
QT.H(AyT);this.QT.Ai(true);this.QT.T(A.aaR(A.acf.Aqq));this.QT.Bh(false);this.QT.
Gh(-1);this.QT.EV(1);this.FC.H(U7);this.FC.Ai(true);this.FC.Z(true);this.FC.T(A.
aaR(A.acf.Aqn));this.FC.Bh(true);this.Iq.H(Aar);this.Iq.Ai(true);this.Iq.Z(true);
this.Iq.T(A.aaR(A.acf.AEB));this.Iq.Bh(true);this.Da.H(Alk);this.Da.Ai(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqK));this.Da.Bh(false);this.Da.Gh(2);this.Da.EV(
6);this.Da.IX(A.aaR(A.acf.OK));this.Da.Ji(A.aaR(A.acf.EA));this.Dn.H(AcX);this.Dn.
Ai(true);this.Dn.T(A.aaR(A.acf.Zu));this.Dn.Bh(true);this.Dn.Gh(0);this.Dn.EV(12
);this.Dn.IX(A.aaR(A.acf.OK));this.Dn.Ji(A.aaR(A.acf.EA));this.EM.H(BuF);this.EM.
As(true);this.EM.Ai(true);this.EM.Bh(false);this.EM.Ar6(A.aaR(A.acf.Aqp));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QT,0);this.
J(this.FC,0);this.J(this.Iq,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EM
,0);this.QT.Au([B=this.AutoRegistrationMode,B.Cb,B.Cd]);this.QT.CH(this.AutoRegistrationMode
);this.FC.Au([B=this.Ad1,B.Cb,B.Cd]);this.FC.CH(this.Ad1);this.Iq.Uw([B=A._GetAutoObject(
A.Device.Device),B.WI,B.A0K]);this.Iq.Akv([B=A._GetAutoObject(A.Device.Device),B.
Awi,B.AyX]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EM.DD(A.aaL(A.ach.AjY));
this.EM.OU([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.EM.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ch;this.QT._Done();this.FC._Done();this.Iq._Done();this.Da._Done();this.Dn._Done(
);this.EM._Done();this.AutoRegistrationMode._Done();this.Ad1._Done();C.Ch._Done.
call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.QT._ReInit();this.FC.
_ReInit();this.Iq._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EM._ReInit(
);this.AutoRegistrationMode._ReInit();this.Ad1._ReInit();this.Jh(A.aaR(A.acf.Aqq
));this.QT.T(A.aaR(A.acf.Aqq));this.FC.T(A.aaR(A.acf.Aqn));this.Iq.T(A.aaR(A.acf.
AEB));this.Da.T(A.aaR(A.acf.AqK));this.Da.IX(A.aaR(A.acf.OK));this.Da.Ji(A.aaR(A.
acf.EA));this.Dn.T(A.aaR(A.acf.Zu));this.Dn.IX(A.aaR(A.acf.OK));this.Dn.Ji(A.aaR(
A.acf.EA));this.EM.Ar6(A.aaR(A.acf.Aqp));},_Mark:function(D){var B;C.Ch._Mark.call(
this,D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FC)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Iq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVN={OP:null,FC:null,Iq:null,Da:null,Dn:null,EM:null,Afy:null,Init:function(
aArg){var B;A.zX([this,this.BfV],[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0X
],0);A.zX([this,this.AdC],[B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_],0);A.zX([
this,this.AdC],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.
BfV],this);A.pe([this,this.AdC],this);},BfV:function(G){var ALd=false;var AaX=false;
switch(A._GetAutoObject(A.Device.Device).Ak6){case 0:{ALd=false;AaX=false;}break;
case 1:{ALd=true;AaX=false;}break;case 2:{ALd=false;AaX=true;}break;default:throw new
Error(BuG+A._GetAutoObject(A.Device.Device).Ak6.toFixed());}A._GetAutoObject(A.Device.
Helper).JG(this.Iq,ALd);A._GetAutoObject(A.Device.Helper).JG(this.Da,AaX);A._GetAutoObject(
A.Device.Helper).JG(this.Dn,AaX);A._GetAutoObject(A.Device.Helper).JG(this.EM,AaX
);},AdC:function(G){var F,Cv;if(((F=this.Da.Q,F[1].call(F[0]))+(Cv=this.Dn.Q,Cv[
1].call(Cv[0])))>12)(Cv=this.Dn.Q,Cv[2].call(Cv[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Ch._Init.call(this,aArg);C.Iv._Init.call(this.OP={
I:this},0);C.BW._Init.call(this.FC={I:this},0);C.AGQ._Init.call(this.Iq={I:this}
,0);C.Iv._Init.call(this.Da={I:this},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av5.
_Init.call(this.EM={I:this},0);C.Afy._Init.call(this.Afy={I:this},0);this.__proto__=
C.AVN;var B;this.Jh(A.aaR(A.acf.LinkTransponder));this.OP.H(AyT);this.OP.Ai(true
);this.OP.Z(true);this.OP.T(A.aaR(A.acf.A8f));this.OP.Bh(false);this.OP.Gh(1);this.
OP.EV(365);this.OP.IX(A.aaR(A.acf.Kq));this.OP.Ji(A.aaR(A.acf.GN));this.FC.H(U7);
this.FC.Ai(true);this.FC.Z(true);this.FC.T(A.aaR(A.acf.Aqn));this.FC.Bh(true);this.
Iq.H(Aar);this.Iq.Ai(true);this.Iq.Z(true);this.Iq.T(A.aaR(A.acf.AEB));this.Iq.Bh(
false);this.Da.H(Alk);this.Da.Ai(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqK
));this.Da.Bh(false);this.Da.Gh(2);this.Da.EV(6);this.Da.IX(A.aaR(A.acf.OK));this.
Da.Ji(A.aaR(A.acf.EA));this.Dn.H(AcX);this.Dn.Ai(true);this.Dn.T(A.aaR(A.acf.Zu)
);this.Dn.Bh(true);this.Dn.Gh(0);this.Dn.EV(12);this.Dn.IX(A.aaR(A.acf.OK));this.
Dn.Ji(A.aaR(A.acf.EA));this.EM.H(Aor);this.EM.As(true);this.EM.Ai(true);this.EM.
Bh(false);this.EM.Ar6(A.aaR(A.acf.Aqp));this.J(this.OP,0);this.J(this.FC,0);this.
J(this.Iq,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EM,0);this.OP.Au([B=
A._GetAutoObject(A.Device.Device),B.A9v,B.BbX]);this.FC.Au([B=this.Afy,B.Cb,B.Cd
]);this.FC.CH(this.Afy);this.Iq.Uw([B=A._GetAutoObject(A.Device.Device),B.WI,B.A0K
]);this.Iq.Akv([B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyX]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Us,B.U$]);this.EM.DD(A.aaL(A.ach.AjY));this.EM.OU([B=A._GetAutoObject(
A.Device.Device),B.Uq,B.U_]);this.EM.PY([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ch;this.OP._Done();this.
FC._Done();this.Iq._Done();this.Da._Done();this.Dn._Done();this.EM._Done();this.
Afy._Done();C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.
OP._ReInit();this.FC._ReInit();this.Iq._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EM._ReInit();this.Afy._ReInit();this.Jh(A.aaR(A.acf.LinkTransponder));this.
OP.T(A.aaR(A.acf.A8f));this.OP.IX(A.aaR(A.acf.Kq));this.OP.Ji(A.aaR(A.acf.GN));this.
FC.T(A.aaR(A.acf.Aqn));this.Iq.T(A.aaR(A.acf.AEB));this.Da.T(A.aaR(A.acf.AqK));this.
Da.IX(A.aaR(A.acf.OK));this.Da.Ji(A.aaR(A.acf.EA));this.Dn.T(A.aaR(A.acf.Zu));this.
Dn.IX(A.aaR(A.acf.OK));this.Dn.Ji(A.aaR(A.acf.EA));this.EM.Ar6(A.aaR(A.acf.Aqp));
},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.OP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afy={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhj],[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0X],0);A.pe([
this,this.Bhj],this);},Dv:function(){return 3;},Ge:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axj(E);},Bhj:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak6;A.
abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afy;this.BJ.Set(0,0);this.BJ.Set(1,1);this.BJ.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jk={B9:null,I3:null,Cr:null,AmE:null,Sn:null,Ano:null,AjE:null,Text:null,CZ:
null,D9:0,LK:false,Aj:function(Ae){var B;A.acn.Jk.Aj.call(this,Ae);if(((Ae&0x40)===
0x40))this.I3.As(true);else{this.I3.As(false);this.CZ.Z(false);}},A4_:function(G
){var B;var Bd=this.Text.M;var NJ=0;var NK=0;if(this.CZ.Eu[0]<Bd[0])NJ=Bd[0]-this.
CZ.Eu[0];if(this.CZ.Eu[0]>Bd[2])NJ=Bd[2]-this.CZ.Eu[0];if(this.CZ.Eu[1]<Bd[1])NK=
Bd[1]-this.CZ.Eu[1];if(this.CZ.EE[1]>Bd[3])NK=Bd[3]-this.CZ.EE[1];if(!!NJ||!!NK)
this.Text.Gi(A.abf(this.Text.Bs,[NJ,NK]));NJ=this.Text.Bs[0];NK=this.Text.Bs[1];
var C7=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C7[0]<=((B=this.Text.M)[2]-B[0]
))NJ=0;if(C7[1]<=((B=this.Text.M)[3]-B[1]))NK=0;this.Text.Gi([NJ,NK]);},Amr:function(
G){if(!this.B9)return;var A4A=this.Text.AG3(this.D9);var pos=this.Text.Afm(A4A);
this.CZ.DO(A.abe(pos,[0,this.B9.Ascent]));this.CZ.DE(A.abf(pos,[0,this.B9.Descent
]));if(this.I3.Bw){this.I3.As(false);this.I3.As(true);}if(this.LK){A.pe([this,this.
A4_],this);this.LK=false;}},AAJ:function(G){if(!this.B9)return;var EI=this.Text.
AG3(this.D9);if(this.Cr.CP===6){EI=[EI[0]-1,EI[1]];if(this.Text.AnX(EI)===this.D9
){EI=[EI[0],EI[1]-1];EI=[this.Text.ADi(EI[1]).length,EI[1]];}}if(this.Cr.CP===7){
EI=[EI[0]+1,EI[1]];if(this.Text.AnX(EI)===this.D9){EI=[EI[0],EI[1]+1];EI=[0,EI[1
]];}}if(this.Cr.CP===4){var pos=this.Text.Afm(EI);var AaW=(this.B9.Ascent+this.B9.
Descent)+this.B9.Leading;EI=this.Text.AUk(A.abe(pos,[0,AaW]));}if(this.Cr.CP===5
){var pos=this.Text.Afm(EI);var AaW=(this.B9.Ascent+this.B9.Descent)+this.B9.Leading;
EI=this.Text.AUk(A.abf(pos,[0,AaW]));}var Vq=this.Text.AnX(EI);var IC=this.Text.
String.charCodeAt(Vq)||0;if(((IC===0x5E)||(IC===0x7E))||(IC===0x25))Vq=Vq-1;if(Vq
!==this.D9){this.D9=Vq;A.pe([this,this.Amr],this);this.LK=true;}},Bfq:function(G
){if(!this.D9)return;var IC=this.Text.String.charCodeAt(this.D9-1)||0;var CB=1;if(((
IC===0x5E)||(IC===0x7E))||(IC===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D9-CB,CB));this.D9=this.D9-CB;this.LK=true;},AAK:function(G){if(this.D9>=(this.Text.
String.length-1))return;var IC=this.Text.String.charCodeAt(this.D9)||0;var CB=1;
if(IC===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D9,CB));this.LK=true;}
,BfE:function(G){this.Text.R(A.abU(this.Text.String,BuH,this.D9));this.D9=this.D9+
1;this.LK=true;},Bfs:function(G){var IC=this.AjE.Dz;var Auw=String.fromCharCode(
IC);A.ab5("%c",IC);if((((IC===0x5E)||(IC===0x7E))||(IC===0xAD))||(IC===0x25))Auw=
BuI+String.fromCharCode(IC);this.Text.R(A.abU(this.Text.String,Auw,this.D9));this.
D9=this.D9+Auw.length;this.LK=true;},_Init:function(aArg){A.acn.Jk._Init.call(this
,aArg);A.acl.TP._Init.call(this.I3={I:this},0);A.Core.BG._Init.call(this.Cr={I:this
},0);A.Core.BG._Init.call(this.AmE={I:this},0);A.Core.BG._Init.call(this.Sn={I:this
},0);A.Core.BG._Init.call(this.Ano={I:this},0);A.Core.BG._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C9._Init.call(this.CZ={
I:this},0);this.__proto__=C.Jk;var B;this.H(BuJ);this.I3.B4=false;this.I3.Cy=true;
this.I3.Fq(500);this.I3.Ux(500);this.Cr.Filter=147;this.Cr.Bw=false;this.AmE.Filter=
151;this.Sn.Filter=44;this.Ano.Filter=149;this.AjE.Filter=145;this.Text.A1(0x3F);
this.Text.H(BuK);this.Text.Lx(true);this.Text.A4(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CZ.DE(BuL);this.CZ.DO(BuM);this.CZ.A$o(2);this.CZ.A$n(2);this.
CZ.L(0xFF000000);this.CZ.Z(false);this.J(this.Text,0);this.J(this.CZ,0);this.I3.
Q=[B=this.CZ,B.Fp,B.Z];this.Cr.BH=[this,this.AAJ];this.Cr.D3=[this,this.AAJ];this.
AmE.BH=[this,this.Bfq];this.AmE.D3=[this,this.Bfq];this.Sn.BH=[this,this.AAK];this.
Sn.D3=[this,this.AAK];this.Ano.BH=[this,this.BfE];this.Ano.D3=[this,this.BfE];this.
AjE.BH=[this,this.Bfs];this.AjE.D3=[this,this.Bfs];this.Text.Q9([this,this.Amr]);
this.Text.S(A.aaL(A.aci.AC6));this.B9=A.aaL(A.aci.AC6);},_Done:function(){this.__proto__=
A.acn.Jk;this.I3._Done();this.Cr._Done();this.AmE._Done();this.Sn._Done();this.Ano.
_Done();this.AjE._Done();this.Text._Done();this.CZ._Done();A.acn.Jk._Done.call(this
);},_ReInit:function(){A.acn.Jk._ReInit.call(this);this.I3._ReInit();this.Cr._ReInit(
);this.AmE._ReInit();this.Sn._ReInit();this.Ano._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CZ._ReInit();},_Mark:function(D){var B;A.acn.Jk._Mark.call(this
,D);if((B=this.B9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ano)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVB={Jk:null,DG:function(G
){switch(this.Cr.CP){case 6:A._GetAutoObject(A.Device.Device).Aqu();break;case 7:
A._GetAutoObject(A.Device.Device).Aqs();break;case 4:A._GetAutoObject(A.Device.Device
).X_();break;case 5:A._GetAutoObject(A.Device.Device).Aqt();break;default:;}},Ex:
function(G){A._GetAutoObject(C.A5).FA();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jk._Init.call(this.Jk={I:this},0);this.__proto__=C.AVB;this.H(Cg);this.
N.Z(true);this.Ds(C.Aq6);this.Jk.H(Fd);this.J(this.Jk,0);this.Ba(this.Jk);this.N.
CF=[this,this.Ex];this.N.C4(A.aaL(A.ach.E3));},_Done:function(){this.__proto__=C.
AB;this.Jk._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jk._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUr={WJ:function(G){if((!!this.Bf&&!!this.Bf.AX)&&(this.Bf.AX.B_()>0)){A._GetAutoObject(
C.BT).TF(A.aaR(A.acf.ACq),[this,this.Bbu]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).TF(A.aaR(A.acf.AHl),[this,this.A8Q]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).TF(A.aaR(A.acf.A6e),[this,this.Bbt]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).TF(A.aaR(A.acf.UnlinkTransponder),[this,this.BoJ]);}else{A._GetAutoObject(
C.BT).Aa4(A.aaR(A.acf.ACq));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Aa4(
A.aaR(A.acf.AHl));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Aa4(A.aaR(A.
acf.A6e));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.A6F)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BT).Fy();this.AuN(A.aaR(A.acf.A6x),[this,this.Bhg
],this.OJ);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(
A.acf.A6S));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.Ank
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},AbB:function(){return C.
ACm;},AbC:function(){return C.ADD;},Ra:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avz());},HR:function(G){C.AkP.HR.call(
this,G);this.N.Cu(null);this.N.E6(A.aaR(A.acf.A58));if(this.AJR()){this.N.Cf=[this
,this.AIW];this.N.JH.C0(255);}else{this.N.Cf=null;this.N.JH.C0(100);}this.N.C5(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OX(false);this.N.OY(false);this.N.IT.
C0(255);},ASz:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiZ.toFixed(),0,null);},ASA:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6L(this);},ASE:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).B7){A._GetAutoObject(A.Device.Device
).AZ(118,true,A.jV,0,[this,this.A3Y]);return;}if((A._GetAutoObject(A.Device.Device
).B7!==1)&&!A._GetAutoObject(A.Device.Device).P1){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.A3Y]);return;}if(A._GetAutoObject(A.Device.Device
).Aro()===false){A.zX([this,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agm]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).FX,B.SN,B.E5],0);var A4R=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asu(A.
_GetAutoObject(A.Device.Device).B7,2,A4R);},AJR:function(){if(!this.Bf)return false;
var AtR=this.Bf.AX;if(!AtR)return false;if(!AtR.B_())return false;return true;},
Al6:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device).FX.EW){case
0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).FX,B.SN,B.E5],0);break;
case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0])))A._GetAutoObject(A.Device.Device
).BatchResetPurchasedNoticePending();if(A._GetAutoObject(A.Device.Converter).Ta(
A._GetAutoObject(A.Device.Device).P1)===10){this.Dl(A.aaR(A.acf.Bj_));this.Bf.NX.
S(A.aaL(A.fl.Bg));}else this.Dl(A.aaR(A.acf.A$E));A._GetAutoObject(A.Device.Device
).AqI();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(97,true,A.jV,0,null);
A._GetAutoObject(A.Device.Device).FX.FE();}break;default:;}},_Init:function(aArg
){C.AkP._Init.call(this,aArg);this.__proto__=C.AUr;var B;this.Ds(C.APB);this.A_z([
B=A._GetAutoObject(A.Device.Device),B.A9B,B.Bb2]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADD={PG:null,Jc:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PG={I:this},0);A.acg.Ap._Init.call(this.Jc={I:this},0);this.__proto__=
C.ADD;this.Et.Z(false);this.DT.Z(false);this.PG.H(BuN);this.PG.L(A.jb.Text);this.
Jc.H(BuO);this.Jc.L(A.jb.Text);this.J(this.PG,0);this.J(this.Jc,0);this.PG.Ax(A.
aaL(A.ach.AvM));this.Jc.Ax(A.aaL(A.ach.AvH));},_Done:function(){this.__proto__=C.
De;this.PG._Done();this.Jc._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PG._ReInit();this.Jc._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM7={Init:function(aArg){var B;A.zX([this,this.AAO],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.AI0],0);A.pe([this,this.AAO],this);},WJ:function(G){if((!!this.Bf&&
!!this.Bf.AX)&&(this.Bf.AX.B_()>0)){if(this.AJR())A._GetAutoObject(C.BT).TF(A.aaR(
A.acf.AOv),[this,this.AIW]);else A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.AOv));A.
_GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.ACo),[this,this.
Bbu]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.AHl),[this
,this.A8Q]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).TF(A.aaR(A.acf.A6d
),[this,this.Bbt]);}else{A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.AOv));A._GetAutoObject(
C.BT).Fy();A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.ACo));A._GetAutoObject(C.BT).Fy(
);A._GetAutoObject(C.BT).Aa4(A.aaR(A.acf.AHl));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).Aa4(A.aaR(A.acf.A6d));}A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).
Ms(A.aaR(A.acf.A6F)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BT).Fy();this.AuN(A.aaR(
A.acf.A6x),[this,this.Bhg],this.OJ);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).Ms(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BT).Fy();A.
_GetAutoObject(C.BT).Ms(A.aaR(A.acf.A6S));A._GetAutoObject(C.BT).Fy();A._GetAutoObject(
C.BT).Ms(A.aaR(A.acf.Ank)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},AbB:function(){return C.ACi;},AbC:function(){return C.ADB;},Ra:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOR(
));},HR:function(G){C.AkP.HR.call(this,G);this.N.Cu(A.aaL(A.ach.AeJ));this.N.Cf=[
this,this.AdB];this.N.E6(A.jV);this.N.C5(null);this.N.CS((A.aaR(A.acf.A58)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bia));this.N.OX(false);this.N.OY(false);this.N.IT.
C0(255);},ASz:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiZ.toFixed(),0,null);},ASA:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6K(this);},ASE:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).P1){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.A3Y]);return;}if(A._GetAutoObject(A.Device.Device
).Aro()===false){A.zX([this,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agm]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).FX,B.SN,B.E5],0);var A4R=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asu(A.
_GetAutoObject(A.Device.Device).B7,0,A4R);},AJR:function(){var AtR=this.Bf.AX;if(
!AtR)return false;var O;for(O=0;O<AtR.B_();O++)if(A._GetAutoObject(A.Device.Helper
).Aj7(AtR.AO5(O,34))===false)return true;return false;},AdB:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},AAO:function(G){if(A._GetAutoObject(A.Device.
Device).Aqw===1)A.pe([this,this.A6O],this);},Al6:function(G){var B;var F;switch(
A._GetAutoObject(A.Device.Device).FX.EW){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(
A.Device.Device).FX,B.SN,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(
F[0])))A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dl(
A.aaR(A.acf.Bib));A._GetAutoObject(A.Device.Device).AqI();}break;case 4:{A._GetAutoObject(
A.Device.Device).AZ(70,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).FX.FE(
);}break;default:;}},_Init:function(aArg){C.AkP._Init.call(this,aArg);this.__proto__=
C.AM7;var B;this.Ds(C.AO_);this.A_z([B=A._GetAutoObject(A.Device.Device),B.A87,B.
BbJ]);this.Init(aArg);},_className:"Application::BirthRegistrationsListScreen"};
C.AO_={DY:function(G){C.AeB.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad5(11));},_Init:function(aArg){C.AeB._Init.call(this,aArg);this.__proto__=
C.AO_;this.Text.R(A.aaR(A.acf.ACb));},_ReInit:function(){C.AeB._ReInit.call(this
);this.Text.R(A.aaR(A.acf.ACb));},_className:"Application::HeaderBirthRegistrationsList"
};C.APB={DY:function(G){C.AeB.DY.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad5(12));},_Init:function(aArg){C.AeB._Init.call(this,aArg);this.__proto__=
C.APB;this.Text.R(A.aaR(A.acf.AGr));},_ReInit:function(){C.AeB._ReInit.call(this
);this.Text.R(A.aaR(A.acf.AGr));},_className:"Application::HeaderPurchasedAnimalsList"
};C.ACm={Jv:0,AP:null,S4:null,Ph:0,Init:function(aArg){},Bl:function(aSize){C.A$.
Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.
abN(this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S4.H([this.V.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(
this,Ae);this.S4.L(this.V.AR);this.T(A._GetAutoObject(A.Device.Converter).Rl(this.
Jv));this.S4.R(A._GetAutoObject(A.acj.KS).AC8(this.Ph));},Ci:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Jv=this.AX.KU(Ad,26);this.Ph=this.AX.Hw(
Ad,4);this.Am();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AK._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S4={I:this},0);this.__proto__=C.ACm;
this.AP.H(A0C);this.AP.L(A.jb.Bb);this.S4.H(A0D);this.J(this.AP,0);this.J(this.S4
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S4.S(A.aaL(A.fl.Ak));
this.S4.AY(A.aaL(A.fl.Bg));this.S4.Cm(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.AP._Done();this.S4._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AP._ReInit();this.S4._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bg));this.S4.S(A.aaL(A.fl.Ak));this.S4.AY(A.
aaL(A.fl.Bg));this.S4.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AU2={
WK:null,SO:null,TY:null,HH:null,L2:null,IO:null,KM:A.jV,Aj:function(Ae){var F;C.
S0.Aj.call(this,Ae);this.TY.L(this.V.AR);var Apx=false;if((!this.Dm||!(F=this.Dm
,F[1].call(F[0])))&&!this.A8)Apx=true;this.TY.Z(Apx);this.Pz.Z(!Apx);this.V4.Z(!
Apx);this.Q5.Z(!Apx);this.Yv.Z(!Apx);this.P$.Z(!Apx);},AdD:function(G){var B;var
F;if(!this.KM.length){C.S0.AdD.call(this,G);return;}var BQ=this.Gb;var FM=A._GetAutoObject(
A.Device.AkJ).Bgf(this.KM);this.KM=A.jV;if(!FM){A._GetAutoObject(A.Device.Device
).AZ(101,true,A.jV,0,this.SO);A.pe(this.WK,this);return;}if(this.Asr&&(FM>A._GetAutoObject(
A.Device.Helper).Dr())){A._GetAutoObject(A.Device.Device).AZ(102,true,A.jV,0,this.
SO);A.pe(this.WK,this);return;}this.Uv(((B=(FM|0))<0)?B+0x100000000:B);if(this.Gb
!==BQ){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.Gb));A.abo(this.Dm,0);}if(!!this.
OO)A.pe(this.OO,this);},AAL:function(G){if(this.KM.length<10)this.KM=this.KM+String.
fromCharCode(this.HH.Dz);},Awa:function(G){if((this.IO.Dz===0x0D)||(this.IO.Dz===
0x0A))this.AdD(this);else this.IO.Mz=true;},ATE:function(E){if(A.aa0(this.WK,E))
return;this.WK=E;},ATF:function(E){if(A.aa0(this.SO,E))return;this.SO=E;},_Init:
function(aArg){C.S0._Init.call(this,aArg);A.acg.Text._Init.call(this.TY={I:this}
,0);A.Core.BG._Init.call(this.HH={I:this},0);A.Core.BG._Init.call(this.L2={I:this
},0);A.Core.BG._Init.call(this.IO={I:this},0);this.__proto__=C.AU2;this.TY.H(BuP
);this.TY.Jg(true);this.TY.A4(0x12);this.TY.R(A.aaR(A.acf.A6s));this.HH.Filter=143;
this.L2.Filter=149;this.IO.Filter=145;this.J(this.TY,0);this.TY.S(A.aaL(A.fl.EL)
);this.HH.BH=[this,this.AAL];this.L2.BH=[this,this.Bcl];this.IO.BH=[this,this.Awa
];},_Done:function(){this.__proto__=C.S0;this.TY._Done();this.HH._Done();this.L2.
_Done();this.IO._Done();C.S0._Done.call(this);},_ReInit:function(){C.S0._ReInit.
call(this);this.TY._ReInit();this.HH._ReInit();this.L2._ReInit();this.IO._ReInit(
);this.TY.R(A.aaR(A.acf.A6s));this.TY.S(A.aaL(A.fl.EL));},_Mark:function(D){var B;
C.S0._Mark.call(this,D);if((B=this.WK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.L2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AU6={WK:null,SO:null,HH:null,L2:null,IO:null
,KM:A.jV,H0:function(G){var F;if(!this.KM.length){C.Rd.H0.call(this,G);return;}if(
this.Asq)return;if(!this.KM.length)this.L2.Mz=true;var BQ=this.AM;var FM=A._GetAutoObject(
A.Device.AkJ).Bgg(this.KM);this.KM=A.jV;if(!FM){if((this.KM.length<13)&&!A._GetAutoObject(
A.Device.Device).P1)A._GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,this.SO
);else A._GetAutoObject(A.Device.Device).AZ(103,true,A.jV,0,this.SO);A.pe(this.WK
,this);return;}this.By(FM);if(this.AM!==BQ){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OO)A.pe(this.OO,this);},AAL:function(G){if(
this.Asq)return;if(this.KM.length<17)this.KM=this.KM+String.fromCharCode(this.HH.
Dz);},Awa:function(G){if((this.IO.Dz===0x0D)||(this.IO.Dz===0x0A))this.H0(this);
else this.IO.Mz=true;},ATE:function(E){if(A.aa0(this.WK,E))return;this.WK=E;},ATF:
function(E){if(A.aa0(this.SO,E))return;this.SO=E;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);A.Core.BG._Init.call(this.HH={I:this},0);A.Core.BG._Init.call(this.
L2={I:this},0);A.Core.BG._Init.call(this.IO={I:this},0);this.__proto__=C.AU6;this.
Ar7(false);this.HH.Filter=143;this.L2.Filter=149;this.IO.Filter=145;this.HH.BH=[
this,this.AAL];this.L2.BH=[this,this.Alo];this.IO.BH=[this,this.Awa];},_Done:function(
){this.__proto__=C.Rd;this.HH._Done();this.L2._Done();this.IO._Done();C.Rd._Done.
call(this);},_ReInit:function(){C.Rd._ReInit.call(this);this.HH._ReInit();this.L2.
_ReInit();this.IO._ReInit();},_Mark:function(D){var B;C.Rd._Mark.call(this,D);if((
B=this.WK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SO)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APy={Aj3:null,Aj1:null,Gx:null
,Rb:null,SX:null,C9:null,Init:function(aArg){var B;A.zX([this,this.DY],[B=A._GetAutoObject(
A.Device.Device),B.A9t,B.AFE],0);A.pe([this,this.DY],this);},Dg:function(E){C.BS.
Dg.call(this,E);this.Aj3.L(E);this.Aj1.L(E);this.Rb.ZB(E);this.Gx.L(E);this.SX.ZB(
E);},WM:function(E){this.Rb.CW(E);this.SX.CW(E);},DY:function(G){this.Rb.T(A._GetAutoObject(
A.Device.Device).Av2.toFixed());A.pe([this,this.BDq],this);},BDq:function(G){var
XA=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).Avz());this.SX.T(A._GetAutoObject(A.Device.
Device).An.B_().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(XA);},_Init:function(
aArg){C.BS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.
Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.call(this.Gx={I:this},0);C.D4.
_Init.call(this.Rb={I:this},0);C.D4._Init.call(this.SX={I:this},0);A.acg.C9._Init.
call(this.C9={I:this},0);this.__proto__=C.APy;this.Aj3.H(Pa);this.Aj1.H(BuQ);this.
Gx.H(BuR);this.Gx.L(A.jb.CV);this.Rb.A1(0x14);this.Rb.H(BuS);this.Rb.ZB(A.jb.Bm);
this.Rb.CW(A.jb.Rk);this.Rb.Ho(2);this.Rb.BmE(0x11);this.SX.A1(0x14);this.SX.H(BuT
);this.SX.ZB(A.jb.Bm);this.SX.CW(A.jb.Rk);this.SX.Ho(2);this.C9.DE(AhY);this.C9.
DO(BuU);this.C9.L(A.jb.Bb);this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gx,
0);this.J(this.Rb,0);this.J(this.SX,0);this.J(this.C9,0);this.Aj3.Ax(A.aaL(A.ach.
Ara));this.Aj1.Ax(A.aaL(A.ach.AP8));this.Gx.Ax(A.aaL(A.ach.Gx));this.Rb.S(A.aaL(
A.fl.Bg));this.SX.S(A.aaL(A.fl.Bg));this.Init(aArg);},_Done:function(){this.__proto__=
C.BS;this.Aj3._Done();this.Aj1._Done();this.Gx._Done();this.Rb._Done();this.SX._Done(
);this.C9._Done();C.BS._Done.call(this);},_ReInit:function(){C.BS._ReInit.call(this
);this.Aj3._ReInit();this.Aj1._ReInit();this.Gx._ReInit();this.Rb._ReInit();this.
SX._ReInit();this.C9._ReInit();this.Rb.S(A.aaL(A.fl.Bg));this.SX.S(A.aaL(A.fl.Bg
));},_Mark:function(D){var B;C.BS._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.AR3={Abq:null,Aeu:null,V1:null
,Init:function(aArg){this.Ba(this.Abq);},Ls:function(){if(!this.BR){this.BR=A._NewObject(
C.N,0);this.BR.CF=[this,this.AaQ];this.BR.Cf=null;this.BR.Ce=[this,this.A3M];this.
BR.CS(A.jV);this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},AAH:function(
G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null);if(Aa===this.Abq)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aeu)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AIO);},_Init:function(aArg){C.Fr._Init.
call(this,aArg);C.Ajl._Init.call(this.Abq={I:this},0);C.Ajl._Init.call(this.Aeu={
I:this},0);C.AR7._Init.call(this.V1={I:this},0);this.__proto__=C.AR3;var B;this.
H(Rs);this.Text.R(A.aaR(A.acf.ACg));this.Abq.H(I2);this.Abq.T(A.aaR(A.acf.AjH));
this.Aeu.H(Qe);this.Aeu.T(A.aaR(A.acf.AGy));this.V1.H(Aaq);this.V1.T(A.aaR(A.acf.
A50));this.J(this.Abq,0);this.J(this.Aeu,0);this.J(this.V1,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abq.AQ=[this,this.AAH];this.Aeu.AQ=[this,this.AAH];this.V1.ATh([B=
A._GetAutoObject(A.Device.Device),B.AES,B.AI3]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fr;this.Abq._Done();this.Aeu._Done();this.V1._Done();C.Fr._Done.
call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Abq._ReInit();this.
Aeu._ReInit();this.V1._ReInit();this.Text.R(A.aaR(A.acf.ACg));this.Abq.T(A.aaR(A.
acf.AjH));this.Aeu.T(A.aaR(A.acf.AGy));this.V1.T(A.aaR(A.acf.A50));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Abq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.AR2={AnimalTableFields:null,Ay:null,Y:null,JZ:null,CQ:function(){this.AiM(this
);},Init:function(aArg){A.zV([this,this.AiM],this.AnimalTableFields,0);A.pe([this
,this.AiM],this);},DG:function(G){C.Fr.DG.call(this,G);this.M3(this);},Ls:function(
){if(!this.BR){this.BR=A._NewObject(C.N,0);this.BR.CF=[this,this.Ex];this.BR.Cf=[
this,this.A3K];this.BR.Ce=[this,this.A4e];this.BR.C5(A.aaL(A.ach.Arj));this.BR.Cu(
A.aaL(A.ach.Arb));this.BR.C4(A.aaL(A.ach.YK));}return this.BR;},Ex:function(G){this.
ABi();this.AaQ(this);},AiM:function(G){this.Ao6();var O;for(O=0;O<this.AnimalTableFields.
Ni();O=O+1){var Aay=A._GetAutoObject(C.Amw).OM(O);this.A1O(Aay);}this.J(this.JZ,
0);A.aaS([this,this.M3],this);},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},M3:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},A1O:function(Ha){var Azk=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.So,0);Aa.T(Azk.BU(Ha));Aa.Ai(true);Aa.G6=Ha;Aa.A_L(this.
AnimalTableFields.MG(Ha));this.J(Aa,0);this.ZN(Aa);},Ao6:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdR=X;X=X.Ah;if(((AdR.U&0x400)===
0x400))this.HQ(AdR);}},ABi:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JZ)){var Aa=(C.So.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G6);if(Aa.ASQ())this.AnimalTableFields.AUY(Aa.G6);}else A.ab5("%s",AyD);}X=X.Ah;
}this.AnimalTableFields.Cs();},A3K:function(G){var B;var Aa=(C.So.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAz=(C.So.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAz
){this.AhG(AAz,Aa);A.pe([this,this.M3],this);}}},A4e:function(G){var B;var Aa=(C.
So.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA6=(C.So.isPrototypeOf(B=Aa.AI
)?B:null);if(!!AA6){this.AhG(Aa,AA6);A.pe([this,this.M3],this);}}},AqP:function(
G){var B;A._GetAutoObject(A.Device.Device).Asv(this);A.pe([this,this.AiM],this);
},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Avc._Init.call(this.JZ={I:this},0);
this.__proto__=C.AR2;this.H(Rs);this.Text.R(A.aaR(A.acf.AGy));this.Ay.H(Ix);this.
Y.H(Bbi);this.Y.J3(1);this.JZ.H(AyE);this.JZ.Ai(true);this.JZ.T(A.aaR(A.acf.A6G)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JZ,0);this.Y.Eo=[this,this.Fi];
this.JZ.AQ=[this,this.AqP];this.AnimalTableFields=A._GetAutoObject(C.Amw);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fr;this.Ay._Done();this.Y._Done();this.
JZ._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JZ._ReInit();this.Text.R(A.aaR(A.acf.AGy));this.
JZ.T(A.aaR(A.acf.A6G));this.CQ();},_Mark:function(D){var B;C.Fr._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.AR1={Y:null,B1:null,Db:null,CI:null,GS:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UW:null,Init:function(aArg){A.zX([this,this.AuU],this.B1.Q,0);A.zX([
this,this.ANa],this.CI.Q,0);A.zX([this,this.AWh],this.GS.Q,0);A.zX([this,this.Avw
],this.Db.Q,0);this.Ba(this.B1);},DG:function(G){C.Fr.DG.call(this,G);this.M3(this
);},Ls:function(){if(!this.BR){this.BR=A._NewObject(C.N,0);this.BR.CF=[this,this.
AaQ];this.BR.Cf=null;this.BR.Ce=null;this.BR.CS(A.jV);this.BR.Cu(null);this.BR.C4(
A.aaL(A.ach.YK));}return this.BR;},Fi:function(G){var B;this.Ay.MK((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MM((B=this.Y.M)[3]-B[1]);this.Ay.ML(-this.Y.Bs[1]);},M3:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HJ(
this.AV,true,null,null);},AuU:function(G){var F;A._GetAutoObject(A.Device.Device
).ED((F=this.B1.Q,F[1].call(F[0])));},AWh:function(G){var F;A._GetAutoObject(A.Device.
Device).Nw((F=this.GS.Q,F[1].call(F[0])));},Avw:function(G){var F;A._GetAutoObject(
A.Device.Device).J4((F=this.Db.Q,F[1].call(F[0])));},ANa:function(G){var F;A._GetAutoObject(
A.Device.Device).N9((F=this.CI.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fr._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Aa3._Init.call(this.B1={
I:this},0);C.Aa3._Init.call(this.Db={I:this},0);C.Aa3._Init.call(this.CI={I:this
},0);C.Aa3._Init.call(this.GS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UX._Init.call(this.UW={I:
this},0);this.__proto__=C.AR1;var B;this.H(Rs);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(Bbi);this.Y.J3(1);this.B1.H(Ali);this.B1.As(true);this.B1.Ai(true);this.B1.T(
A.aaR(A.acf.Afz));this.Db.H(Ayx);this.Db.As(true);this.Db.Ai(true);this.Db.T(A.aaR(
A.acf.Afu));this.CI.H(Aop);this.CI.As(true);this.CI.Ai(true);this.CI.T(A.aaR(A.acf.
Breed));this.GS.H(Atd);this.GS.As(true);this.GS.Ai(true);this.GS.T(A.aaR(A.acf.Jo
));this.Ay.H(Ix);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UW.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B1,0);this.J(this.Db,0);this.J(this.CI,0);this.J(
this.GS,0);this.J(this.Ay,0);this.Y.Eo=[this,this.Fi];this.B1.ZC(A.aaL(A.fl.H5));
this.B1.ZD(A.aaL(A.fl.H5));this.B1.Au([B=this.AnimalType,B.Cb,B.Cd]);this.B1.CH(
this.AnimalType);this.Db.ZC(A.aaL(A.fl.H5));this.Db.ZD(A.aaL(A.fl.H5));this.Db.Au([
B=this.Gender,B.Cb,B.Cd]);this.Db.CH(this.Gender);this.CI.ZC(A.aaL(A.fl.H5));this.
CI.ZD(A.aaL(A.fl.H5));this.CI.Au([B=this.Breed,B.Cb,B.Cd]);this.CI.CH(this.Breed
);this.GS.ZC(A.aaL(A.fl.H5));this.GS.ZD(A.aaL(A.fl.H5));this.GS.Au([B=this.UW,B.
Cb,B.Cd]);this.GS.CH(this.UW);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Y._Done();this.B1._Done();this.Db._Done();this.CI._Done();this.GS._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UW._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this
);this.Y._ReInit();this.B1._ReInit();this.Db._ReInit();this.CI._ReInit();this.GS.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UW._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.B1.T(A.aaR(
A.acf.Afz));this.Db.T(A.aaR(A.acf.Afu));this.CI.T(A.aaR(A.acf.Breed));this.GS.T(
A.aaR(A.acf.Jo));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B1)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AmA={CB:0,Alz:A.abi(17,0,null),OM:function(HB){return this.Alz.Get(HB);},Ni:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alz.Set(
O,0);this.CB=0;},J:function(Aat){if(this.CB>=17)A.ab5("%s",BuV);else{this.Alz.Set(
this.CB,Aat);this.CB=this.CB+1;}},Cs:function(){},Fm:function(Ah5){var AKa=Ah5.indexOf(
String.fromCharCode(0x2C),0);var A2d=A.jV;var O=0;this.CB=0;while(O<17)if(Ah5===
A.jV)O++;else{if(AKa===-1){A2d=Ah5;Ah5=A.jV;}else{A2d=A.abV(Ah5,AKa);Ah5=A.ab1(Ah5
,0,AKa+1);}var Aay=A.abZ(A2d,0,10)|0;if(this.Bkp(Aay)){this.Alz.Set(this.CB,Aay);
this.CB=this.CB+1;O++;}AKa=Ah5.indexOf(String.fromCharCode(0x2C),0);}if(Ah5!==A.
jV)A.ab5("%s",BuW);},toString:function(){var B;var AAx=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAx=AAx+AIj;AAx=AAx+(((B=this.Alz.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAx;},Contains:function(Aat){var O;for(O=0;O<this.CB;O=O+1)if(this.Alz.
Get(O)===Aat)return true;return false;},Bkp:function(Aat){return true;},_Init:function(
aArg){(this.Alz=[]).__proto__=C.AmA.Alz;this.__proto__=C.AmA;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMh={AfW:null,Init:function(aArg){var B;A.
zX([this,this.Bfl],[B=A._GetAutoObject(A.Device.Device),B.A8V,B.BbB],0);A.zX([this
,this.Bfm],[B=A._GetAutoObject(A.Device.Device),B.A8W,B.BbC],0);A.pe([this,this.
Bfl],this);A.pe([this,this.Bfm],this);},Clear:function(){C.AmA.Clear.call(this);
this.AfW.Clear();},Cs:function(){A._GetAutoObject(A.Device.Device).ArO(this.AfW.
toString());A._GetAutoObject(A.Device.Device).ArP(this.toString());},Bfl:function(
G){this.AfW.Fm(A._GetAutoObject(A.Device.Device).ABS);A.we(this,0);},Bfm:function(
G){this.Fm(A._GetAutoObject(A.Device.Device).ABT);A.we(this,0);},MG:function(Aat
){return this.AfW.Contains(Aat);},AUY:function(Aat){if(!this.MG(Aat))this.AfW.J(
Aat);},AOS:function(){return this.AfW.Ni();},_Init:function(aArg){C.AmA._Init.call(
this,aArg);this.__proto__=C.AMh;this.AfW=A._NewObject(C.AmA,0);this.Init(aArg);}
,_Mark:function(D){var B;C.AmA._Mark.call(this,D);if((B=this.AfW)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amw={_Init:function(){C.AMh._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR7={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A4(0x11);this.V.Text.Ho(10);},Bl:function(aSize){C.Uh.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mx.M[0]));},Aj:function(Ae){var B;C.Uh.
Aj.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var GG=this.
Bo.Bw;var FY=A.jb.Aeg;var GZ=A.jb.Bm;if(this.Hm){FY=A.jb.Bm;GZ=A.jb.Text;}if(!Hf
){this.Background.L(FY);this.V.L(A.jb.CL);}else if(GG){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FY);this.V.L(GZ);}this.LQ=Hf;this.KN=Fv;this.Qx=GG;},_Init:function(
aArg){C.Uh._Init.call(this,aArg);this.__proto__=C.AR7;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM5={Y1:null,Ak9:null,Ls:function(){if(
!this.BR){this.BR=A._NewObject(C.N,0);this.BR.CF=[this,this.AaQ];this.BR.Cf=null;
this.BR.Ce=null;this.BR.CS(A.jV);this.BR.Cu(null);this.BR.C4(A.aaL(A.ach.YK));}return this.
BR;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Aa3._Init.call(this.
Y1={I:this},0);C.AEo._Init.call(this.Ak9={I:this},0);this.__proto__=C.AM5;var B;
this.H(K4);this.Y1.H(K4);this.Y1.T(A.aaR(A.acf.Display));this.Ak9.Au(A._GetAutoObject(
A.Device.Device).Aqw);this.J(this.Y1,0);this.Y1.ZC(A.aaL(A.fl.H5));this.Y1.ZD(A.
aaL(A.fl.H5));this.Y1.Au([B=this.Ak9,B.Cb,B.Cd]);this.Y1.CH(this.Ak9);this.Ak9.BnT([
B=A._GetAutoObject(A.Device.Device),B.AEO,B.AI0]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.Y1._Done();this.Ak9._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y1._ReInit();this.Ak9._ReInit(
);this.Y1.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak9)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEo={AbX:null,ListViewScopeToString:null,Dv:function(){return 2;},C8:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Ge:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BU(aIndex
);},D0:function(A9){return A9;},H7:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbX)(F=this.AbX,F[2].call(F[0],E));},BnT:function(E
){if(A.aaZ(this.AbX,E))return;if(!!this.AbX)A.z$([this,this.A4k],this.AbX,0);this.
AbX=E;if(!!this.AbX)A.zX([this,this.A4k],this.AbX,0);A.pe([this,this.A4k],this);
},A4k:function(G){var F;if(!!this.AbX)this.Q=(F=this.AbX,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEo;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AG_={
ACt:0,ACs:0,Aj:function(Ae){C.O4.Aj.call(this,Ae);this.Background.L(this.ACs);this.
V.L(this.ACt);},A_m:function(E){if(this.ACt===E)return;this.ACt=E;this.Am();},BmK:
function(E){if(this.ACs===E)return;this.ACs=E;this.Am();},_Init:function(aArg){C.
O4._Init.call(this,aArg);this.__proto__=C.AG_;this.As(false);this.ACt=A.jb.Text;
this.ACs=A.jb.CL;},_className:"Application::TextCaptionItem"};C.AHv={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeR],[B=A._GetAutoObject(A.Device.
Device),B.A9u,B.BbW],0);A.pe([this,this.BeR],this);},Dv:function(){return 3;},Ge:
function(aIndex){return this.WeightValuePrecisionToString.BU(this.C8(aIndex));},
Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw1(E);},BeR:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OT;A.abo([this,this.Cb,this.
Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHv;this.
BJ.Set(0,0);this.BJ.Set(1,1);this.BJ.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cn;this.WeightValuePrecisionToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AU4={UK:null,Baf:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UK.H([
0,80,aSize[0],aSize[1]]);},Aj:function(Ae){C.BW.Aj.call(this,Ae);this.UK.L(this.
V.AR);},Bom:function(E){if(this.Baf===E)return;this.Baf=E;this.UK.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CG._Init.call(this.UK={I:this},0);this.__proto__=
C.AU4;this.H(AcW);this.UK.H(BuX);this.J(this.UK,0);this.UK.S(A.aaL(A.fl.Af));this.
UK.AY(A.aaL(A.fl.Ak));this.UK.Cm(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.UK._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.UK._ReInit();this.UK.S(A.aaL(A.fl.Af));this.UK.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Ws={ABW:null,MassDeregistrationCriterionToString:
null,Dv:function(){return 2;},Ge:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A9=this.C8(aIndex);var M_=this.MassDeregistrationCriterionToString.
BU(this.C8(aIndex));if(!!this.ABW&&!A9)M_=A._GetAutoObject(A.Device.Helper).MR(M_
,Pc,(F=this.ABW,F[1].call(F[0])).toFixed());return M_;},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Ws;this.BJ.Set(
0,0);this.BJ.Set(1,1);},_Done:function(){this.__proto__=C.Cn;this.MassDeregistrationCriterionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.ABW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.AN0={Vt:null,Ws:null,Zg:null,J0:null
,Aug:0,Aa5:100,Init:function(aArg){this.Ba(this.Zg);},Aj:function(Ae){C.El.Aj.call(
this,Ae);var BCZ=((A.aaR(A.acf.AqE)+A.aaR(A.acf.Colon))+CJ)+this.Aug.toFixed();this.
J0.Bom(BCZ);},CC:function(G){C.El.CC.call(this,G);A.zX([this,this.ABI],this.J0.Q
,0);A.pe([this,this.ABI],this);},E4:function(G){C.El.E4.call(this,G);A.z$([this,
this.ABI],this.J0.Q,0);},DL:function(G){var F;C.El.DL.call(this,G);this.N.E6(A.jV
);this.N.Cf=null;if((this.AV===this.J0)&&!!this.J0.Q){this.N.Ce=[this,this.BfB];
switch((F=this.J0.Q,F[1].call(F[0]))){case 1:if(!this.Aug)this.N.GX.C0(100);else
this.N.GX.C0(255);break;case 0:{this.N.E6(A.aaR(A.acf.BiG));this.N.Cf=[this,this.
BzA];if(this.Aa5<=1)this.N.GX.C0(100);else this.N.GX.C0(255);this.N.CS(A.aaR(A.acf.
BiH));this.N.Ce=[this,this.BAE];if(this.Aa5>=2147483647)this.N.GX.C0(100);else this.
N.GX.C0(255);this.N.WU=true;}break;default:throw new Error(BuY+(F=this.J0.Q,F[1].
call(F[0])).toFixed());}this.J0.Ab9(this.N.Ce);}},BfB:function(G){if(this.Aug>0)
A._GetAutoObject(A.Device.Device).AZ(108,true,this.Aug.toFixed(),0,[this,this.BBb
]);},ABI:function(G){var F;this.Aug=A._GetAutoObject(A.Device.Helper).BjN((F=this.
J0.Q,F[1].call(F[0])),this.Aa5);this.Am();A.pe([this,this.MX],this);},Bfv:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B_()){A._GetAutoObject(A.Device.
Device).AZ(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Aro(
)===false){this.Vt=[this,this.Bfv];A.zX([this,this.XO],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agm]);return;}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).FX,
B.SN,B.E5],0);A._GetAutoObject(A.Device.Device).Asu(A._GetAutoObject(A.Device.Device
).B7,1,false);},Agm:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===5)){A.z$([this,this.XO],[B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Vb],0);this.Vt=null;}},XO:function(G){var B;if(A._GetAutoObject(
A.Device.Device).P6.Z_===3){A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0
,[this,this.Agm]);A.z$([this,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,
B.Vb],0);if(!!this.Vt)A.pe(this.Vt,this);this.Vt=null;}},BBb:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([
this,this.BCU],this);},BCU:function(G){A._GetAutoObject(A.Device.Helper).By3(this.
Ws.Q,this.Aa5);A._GetAutoObject(A.Device.Device).AZ(109,true,this.Aug.toFixed(),
0,null);A.pe([this,this.MX],this);A.pe([this,this.ABI],this);},Al6:function(G){var
B;switch(A._GetAutoObject(A.Device.Device).FX.EW){case 0:A.z$([this,this.Al6],[B=
A._GetAutoObject(A.Device.Device).FX,B.SN,B.E5],0);break;case 3:A._GetAutoObject(
A.Device.Device).AqI();break;case 4:{A._GetAutoObject(A.Device.Device).AZ(88,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).FX.FE();}break;default:;}},BAE:function(
G){if(this.Aa5<2147483647)this.ATc(this.Aa5+1);},BzA:function(G){if(this.Aa5>1)this.
ATc(this.Aa5-1);},ATc:function(E){if(this.Aa5===E)return;this.Aa5=E;A.pe([this,this.
ABI],this);this.J0.Am();},Bll:function(){return this.Aa5;},_Init:function(aArg){
C.El._Init.call(this,aArg);C.Ws._Init.call(this.Ws={I:this},0);C.Cp._Init.call(this.
Zg={I:this},0);C.AU4._Init.call(this.J0={I:this},0);this.__proto__=C.AN0;var B;this.
Ds(C.APa);this.Zg.H(I2);this.Zg.Ai(true);this.Zg.T(A.aaR(A.acf.A60));this.Zg.Bh(
false);this.J0.H(Bbg);this.J0.Ai(true);this.J0.T(A.aaR(A.acf.Baz));this.J0.Bh(true
);this.J0.A$d(A.aaR(A.acf.Ok));this.J(this.Zg,0);this.J(this.J0,0);this.Ws.ABW=[
this,this.Bll,this.ATc];this.Zg.AQ=[this,this.Bfv];this.J0.AQ=[this,this.BfB];this.
J0.Ab9(this.N.Ce);this.J0.Au([B=this.Ws,B.Cb,B.Cd]);this.J0.CH(this.Ws);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.Ws._Done();this.Zg._Done();this.
J0._Done();C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.
Ws._ReInit();this.Zg._ReInit();this.J0._ReInit();this.Zg.T(A.aaR(A.acf.A60));this.
J0.T(A.aaR(A.acf.Baz));this.J0.A$d(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.
El._Mark.call(this,D);if((B=this.Vt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ws)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.APa={_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APa;this.
Text.R(A.aaR(A.acf.Ad0));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.
R(A.aaR(A.acf.Ad0));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AN3={
Vt:null,Zf:null,Ab1:null,Init:function(aArg){this.Ba(this.Zf);A.pe([this,this.MX
],this);},Bfu:function(G){var B;var AAh=A._GetAutoObject(A.Device.Device).AEa();
switch(AAh){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AZ(91,true,U8,0,[this,this.BfN]);break;
case 2:{this.Vt=[this,this.Bfu];A.zX([this,this.XO],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agm]);}break;default:throw new Error(Bbj+AAh.toFixed());}},Agm:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);this.
Vt=null;}},XO:function(G){var B;if(A._GetAutoObject(A.Device.Device).P6.Z_===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agm]);A.z$([this
,this.XO],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);if(!!this.Vt)A.pe(this.
Vt,this);this.Vt=null;}},BfP:function(G){var B;var AAh=A._GetAutoObject(A.Device.
Device).AEb();switch(AAh){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AZ(95,true,A.jV,0,[this
,this.BBc]);break;case 2:{this.Vt=[this,this.BfP];A.zX([this,this.XO],[B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV
,0,[this,this.Agm]);}break;case 3:A._GetAutoObject(A.Device.Device).AZ(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AZ(93,true,A.jV,0,null
);break;default:throw new Error(Bbj+AAh.toFixed());}},BfN:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.BzE],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
BzG],this);break;default:throw new Error(BuZ+Ar.Id.toFixed());}},BzE:function(G){
if(A._GetAutoObject(A.Device.Device).ACC()){var A3x=A._GetAutoObject(A.Device.Device
).An.QN();A._GetAutoObject(A.Device.Device).AZ(80,true,A3x.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AZ(82,true,A.jV,0,null);A.aaS([this,this.BA9],
this);},BzG:function(G){if(A._GetAutoObject(A.Device.Device).AGC()){var A3x=A._GetAutoObject(
A.Device.Device).An.QN();A._GetAutoObject(A.Device.Device).AZ(81,true,A3x.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AZ(83,true,A.jV,0,null);A.aaS([
this,this.BBO],this);},BBc:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCV],this);},BCV:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,true,U8,0,[this,this.BfN]);},BBO:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,false,A.jV,0,null);},BA9:function(G){
A._GetAutoObject(A.Device.Device).AZ(91,false,A.jV,0,null);},_Init:function(aArg
){C.El._Init.call(this,aArg);C.Cp._Init.call(this.Zf={I:this},0);C.Cp._Init.call(
this.Ab1={I:this},0);this.__proto__=C.AN3;this.Ds(C.APd);this.Zf.H(I2);this.Zf.Ai(
true);this.Zf.T(A.aaR(A.acf.ACC));this.Zf.Bh(false);this.Ab1.H(Qe);this.Ab1.Ai(true
);this.Ab1.T(A.aaR(A.acf.AGC));this.Ab1.Bh(true);this.J(this.Zf,-1);this.J(this.
Ab1,-1);this.Zf.AQ=[this,this.Bfu];this.Ab1.AQ=[this,this.BfP];this.Init(aArg);}
,_Done:function(){this.__proto__=C.El;this.Zf._Done();this.Ab1._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Zf._ReInit();this.Ab1.
_ReInit();this.Zf.T(A.aaR(A.acf.ACC));this.Ab1.T(A.aaR(A.acf.AGC));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Vt)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.APd={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APd;this.Text.R(
A.aaR(A.acf.ACI));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACI));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Mq={L7:null
,AUx:0,AEd:false,AD$:false,AEe:false,Agk:function(G){this.A6J(this);},ATA:function(
E){if(this.L7===E)return;this.L7=E;if(!this.L7)return;this.DR.AutoActions=E;A.zV([
this,this.BgR],this.L7,0);A.zV([this,this.AoC],this.L7,0);A.pe([this,this.BgR],this
);A.pe([this,this.AoC],this);},AMi:function(){this.AMk(A.aaR(A.acf.BaH),[this,this.
BC$],[this,this.A9o,this.AFv]);this.AMk(A.aaR(A.acf.AGs),[this,this.BC9],[this,this.
A9l,this.AFt]);this.AMk(A.aaR(A.acf.An6),[this,this.BC_],[this,this.A9m,this.AFu
]);A._GetAutoObject(C.BT).Fy();A._GetAutoObject(C.BT).Ms(A.aaR(A.acf.BoU)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BT).Fy();},AMk:function(Bxx,ByF,Bx1){if(!this.L7
)return;this.AuN(Bxx,ByF,Bx1);},BC$:function(G){this.AFv(!this.AEe);},BC9:function(
G){this.AFt(!this.AD$);},BC_:function(G){this.AFu(!this.AEd);},A4M:function(Ej,Bx0
){if(!this.L7)return;if(Bx0)this.L7.BhN(Ej);else this.L7.Bpb(Ej);this.L7.Cs();},
A5t:function(Aig,Aih,ByY){A._GetAutoObject(C.BT).ABU(Aig,Aih,[this,this.A9F,this.
ATN],ByY);},AGO:function(Ej){if(!this.L7)return;this.L7.AGO(Ej);this.L7.Cs();},AFv:
function(E){if(this.AEe===E)return;this.AEe=E;this.A4M(256,E);A.abo([this,this.A9o
,this.AFv],0);},AFt:function(E){if(this.AD$===E)return;this.AD$=E;this.A4M(2,E);
A.abo([this,this.A9l,this.AFt],0);},AFu:function(E){if(this.AEd===E)return;this.
AEd=E;this.A4M(1,E);A.abo([this,this.A9m,this.AFu],0);},BgR:function(G){this.AFv(
this.L7.Contains(256));this.AFt(this.L7.Contains(2));this.AFu(this.L7.Contains(1
));if(this.L7.Ni()>0)this.ATN(this.L7.ADg());},ATN:function(E){if(this.AUx===E)return;
this.AUx=E;A.abo([this,this.A9F,this.ATN],0);},A9o:function(){return this.AEe;},
A9l:function(){return this.AD$;},A9m:function(){return this.AEd;},A9F:function(){
return this.AUx;},_Init:function(aArg){C.GL._Init.call(this,aArg);this.__proto__=
C.Mq;},_Mark:function(D){var B;C.GL._Mark.call(this,D);if((B=this.L7)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av1={Q:null,Cs:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AD9:
function(Ej){switch(Ej){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hg:function(G){var F;if(!!this.Q)this.Fm((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,
0);if(!!E)A.pe([this,this.Hg],this);},AGO:function(Ej){if(this.Ni()>0)this.AxF(this.
Ni()-1,Ej);},BhN:function(Ej){if(this.Contains(Ej))return;if(this.CB>=17){A.ab5(
"%s",Ate);return;}var AAa=0;for(;(AAa<=this.Ni())&&(this.OM(AAa)<Ej);AAa++);var ABn=
this.Ni()-1;this.J(this.OM(ABn));for(;ABn>AAa;ABn--)this.AxF(ABn,this.OM(ABn-1));
this.AxF(AAa,Ej);},Bpb:function(Ej){var index=this.D0(Ej);if(index<0)return;for(;
index<(this.Ni()-1);index++)this.AxF(index,this.OM(index+1));this.AxF(index,0);this.
CB--;},ADg:function(){var To=0;if(this.Ni()>0)To=this.OM(this.Ni()-1);return To;
},_Init:function(aArg){C.VG._Init.call(this,aArg);this.__proto__=C.Av1;},_Mark:function(
D){var B;C.VG._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av_={_Init:function(){C.Av1.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9y,B.Bb0
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av$={
_Init:function(){C.Av1._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9z,B.Bb1]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Aya={_Init:function(){C.Av1._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A97,B.Bce]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADF={QX:null,AjX:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QX={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADF;this.Et.H(Bu0);this.DT.H(Bu1);this.QX.H(Bu2);this.
QX.R(A.aaR(A.acf.Un));this.QX.A4(0x11);this.QX.L(A.jb.Text);this.AjX.H(A0z);this.
AjX.L(A.jb.Text);this.J(this.QX,0);this.J(this.AjX,0);this.QX.S(A.aaL(A.fl.Af));
this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cm(A.aaL(A.fl.Bg));this.AjX.Ax(A.aaL(A.ach.AvG
));},_Done:function(){this.__proto__=C.De;this.QX._Done();this.AjX._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QX._ReInit();
this.AjX._ReInit();this.QX.R(A.aaR(A.acf.Un));this.QX.S(A.aaL(A.fl.Af));this.QX.
AY(A.aaL(A.fl.Ak));this.QX.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACl={
AP:null,S6:null,O5:null,AKE:A.jV,Be0:A.jV,Mp:0,Init:function(aArg){},Bl:function(
aSize){C.A$.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O5.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O5.M[2]-1,0,this.O5.M[2]+1,aSize[1]]);this.
S6.H([this.O5.M[2],0,aSize[0],aSize[1]]);},Aj:function(Ae){C.A$.Aj.call(this,Ae);
this.O5.L(this.V.AR);this.S6.L(this.V.AR);this.T(this.AKE);this.O5.R(this.Be0);this.
S6.R(this.Mp.toFixed());},Ci:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Jv=this.AX.KU(Ad,26);var A3p=A._GetAutoObject(A.Device.Converter).Rl(Jv);
this.AKE=A.abV(A3p,A3p.length-5);this.Be0=A.ab2(A3p,5);if((A._GetAutoObject(A.Device.
Converter).Ta(Jv)===10)&&!(Math.trunc(Jv/10000000000)%100))this.AKE=A.ab1(this.AKE
,3,2);this.Mp=this.AX.CE(Ad,1);this.Am();}},_Init:function(aArg){C.A$._Init.call(
this,aArg);A.acg.AK._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S6={I:this
},0);C.CG._Init.call(this.O5={I:this},0);this.__proto__=C.ACl;this.V.H(Bu3);this.
AP.H(A0C);this.AP.L(A.jb.Bb);this.S6.H(A0D);this.O5.H(Bu4);this.J(this.AP,0);this.
J(this.S6,0);this.J(this.O5,0);this.V.S(A.aaL(A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg)
);this.S6.S(A.aaL(A.fl.Ak));this.S6.AY(A.aaL(A.fl.Bg));this.S6.Cm(A.aaL(A.fl.Bg)
);this.O5.S(A.aaL(A.fl.Af));this.O5.AY(A.aaL(A.fl.Bg));this.O5.Cm(A.aaL(A.fl.Bg)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AP._Done();this.S6.
_Done();this.O5._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AP._ReInit();this.S6._ReInit();this.O5._ReInit();this.V.S(A.aaL(
A.fl.Bg));this.V.AY(A.aaL(A.fl.Bg));this.S6.S(A.aaL(A.fl.Ak));this.S6.AY(A.aaL(A.
fl.Bg));this.S6.Cm(A.aaL(A.fl.Bg));this.O5.S(A.aaL(A.fl.Af));this.O5.AY(A.aaL(A.
fl.Bg));this.O5.Cm(A.aaL(A.fl.Bg));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APF={Q:null,Init:function(aArg){var B;this.ABc(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs]);},AE1:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DN(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nz(FilterCriterion);var Ai6=this.Awl();if((Ai6.length>
0)&&(Ai6!==U8)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai6,0,6,false);Filter.CY(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae5(false);},ABc:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DN(26,4))?B:null);if(!!FilterCriterion)Filter.Nz(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C6],E,
0);if(!!E)A.pe([this,this.C6],this);},C6:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATt(A.jV);return;}var Azb=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DN(26,4))?B:null);if(!Azb){this.AW.ATt(
U8);this.AW.Ae5(true);}else this.AW.ATt(Azb.A6);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APF;this.AW.AwU(0);this.AW.BnF(true);this.AW.Dk=[
this,this.AE1];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVQ={FC:null,Da:null,Dn:null,EM:null,AsS:null,Init:function(aArg){var B;A.zX([
this,this.BfW],[B=A._GetAutoObject(A.Device.Device),B.AS9,B.A0Y],0);A.zX([this,this.
AdC],[B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_],0);A.zX([this,this.AdC],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.BfW],this);A.pe([
this,this.AdC],this);},BfW:function(G){var AaX=false;switch(A._GetAutoObject(A.Device.
Device).An$){case 0:AaX=false;break;case 3:AaX=true;break;default:throw new Error(
Bu5+A._GetAutoObject(A.Device.Device).An$.toFixed());}A._GetAutoObject(A.Device.
Helper).JG(this.Da,AaX);A._GetAutoObject(A.Device.Helper).JG(this.Dn,AaX);A._GetAutoObject(
A.Device.Helper).JG(this.EM,AaX);},AdC:function(G){var F,Cv;if(((F=this.Da.Q,F[1
].call(F[0]))+(Cv=this.Dn.Q,Cv[1].call(Cv[0])))>12)(Cv=this.Dn.Q,Cv[2].call(Cv[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Ch._Init.call(this
,aArg);C.BW._Init.call(this.FC={I:this},0);C.Iv._Init.call(this.Da={I:this},0);C.
Iv._Init.call(this.Dn={I:this},0);C.Av5._Init.call(this.EM={I:this},0);C.AVP._Init.
call(this.AsS={I:this},0);this.__proto__=C.AVQ;var B;this.Jh(A.aaR(A.acf.UnlinkTransponder
));this.FC.H(U7);this.FC.Ai(true);this.FC.Z(true);this.FC.T(A.aaR(A.acf.Aqn));this.
FC.Bh(true);this.Da.H(Alk);this.Da.Ai(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqK));this.Da.Bh(false);this.Da.Gh(2);this.Da.EV(6);this.Da.IX(A.aaR(A.acf.OK));
this.Da.Ji(A.aaR(A.acf.EA));this.Dn.H(AcX);this.Dn.Ai(true);this.Dn.T(A.aaR(A.acf.
Zu));this.Dn.Bh(true);this.Dn.Gh(0);this.Dn.EV(12);this.Dn.IX(A.aaR(A.acf.OK));this.
Dn.Ji(A.aaR(A.acf.EA));this.EM.H(Aor);this.EM.As(true);this.EM.Ai(true);this.EM.
Bh(false);this.EM.Ar6(A.aaR(A.acf.Aqp));this.J(this.FC,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EM,0);this.FC.Au([B=this.AsS,B.Cb,B.Cd]);this.FC.CH(this.
AsS);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EM.DD(A.aaL(A.ach.AjY));this.EM.
OU([B=A._GetAutoObject(A.Device.Device),B.Uq,B.U_]);this.EM.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Ch;this.FC._Done();this.Da._Done();this.Dn._Done();this.EM._Done();this.AsS._Done(
);C.Ch._Done.call(this);},_ReInit:function(){C.Ch._ReInit.call(this);this.FC._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EM._ReInit();this.AsS._ReInit();this.
Jh(A.aaR(A.acf.UnlinkTransponder));this.FC.T(A.aaR(A.acf.Aqn));this.Da.T(A.aaR(A.
acf.AqK));this.Da.IX(A.aaR(A.acf.OK));this.Da.Ji(A.aaR(A.acf.EA));this.Dn.T(A.aaR(
A.acf.Zu));this.Dn.IX(A.aaR(A.acf.OK));this.Dn.Ji(A.aaR(A.acf.EA));this.EM.Ar6(A.
aaR(A.acf.Aqp));},_Mark:function(D){var B;C.Ch._Mark.call(this,D);if((B=this.FC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVP={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bho],[B=A._GetAutoObject(A.Device.Device),B.AS9,B.A0Y],0);A.pe([
this,this.Bho],this);},Dv:function(){return 2;},Ge:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BU(this.C8(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axk(E);},Bho:function(G){this.Q=A._GetAutoObject(A.Device.Device).An$;A.
abo([this,this.Cb,this.Cd],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVP;this.BJ.Set(0,0);this.BJ.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C.ANL={Ge:function(aIndex){if((aIndex<0)||(aIndex>=40))return A.jV;return this.CountryToString.
BU(aIndex);},_Init:function(aArg){C.B7._Init.call(this,aArg);this.__proto__=C.ANL;
},_className:"Application::CountryLongName"};
C._Init=function(){C.AMT.__proto__=A.Core.Root;C.AB.__proto__=C.Abs;C.WX.__proto__=
A.Core.P;C.OH.__proto__=A.Core.P;C.ZK.__proto__=A.acl.Gp;C.Em.__proto__=A.Core.P;
C.X$.__proto__=C.AB;C.AVg.__proto__=C.AB;C.AvF.__proto__=C.AB;C.Rc.__proto__=C.AB;
C.Fn.__proto__=C.Hj;C.Ay.__proto__=A.Core.P;C.Ch.__proto__=C.AB;C.Aq6.__proto__=
C.BS;C.BS.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADx.__proto__=C.Am4;C.AG6.
__proto__=C.DS;C.Cp.__proto__=C.O4;C.Dt.__proto__=C.Ei;C.Iv.__proto__=C.Dt;C.BW.
__proto__=C.Dt;C.S0.__proto__=C.Dt;C.OR.__proto__=C.Cn;C.Rh.__proto__=C.AC;C.AVv.
__proto__=C.A$;C.Gj.__proto__=A.Core.P;C.A$.__proto__=C.Cp;C.GL.__proto__=C.AB;C.
ACk.__proto__=C.A$;C.Aee.__proto__=C.AB;C.Mw.__proto__=C.OH;C.AVq.__proto__=C.AB;
C.Aq5.__proto__=C.ADx;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AU7.__proto__=C.Acx;C.EC.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asz.__proto__=A.Core.P;C.AGS.__proto__=C.Dt;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.YE;C.Amz.__proto__=C.Rg;C.AhD.__proto__=A.Core.P;C.El.__proto__=
C.AB;C.AUh.__proto__=C.AB;C.MB.__proto__=C.Cp;C.Anm.__proto__=C.Cp;C.OverlayMenu.
__proto__=C.Abs;C.APV.__proto__=C.OverlayMenu;C.GM.__proto__=A.Core.P;C.Abs.__proto__=
A.Core.P;C.AVa.__proto__=A.acl.Aes;C.Am4.__proto__=C.BS;C.ADy.__proto__=C.Am4;C.
Kq.__proto__=C.AC;C.AU9.__proto__=C.Dt;C.AGt.__proto__=C.AB;C.H2.__proto__=C.AB;
C.WE.__proto__=C.ArB;C.IQ.__proto__=C.ADy;C.I$.__proto__=C.AB;C.AMr.__proto__=C.
AGt;C.AMn.__proto__=C.GL;C.ANH.__proto__=C.GL;C.Aew.__proto__=C.Cp;C.QH.__proto__=
C.Aew;C.API.__proto__=C.BS;C.AjT.__proto__=C.BS;C.DH.__proto__=C.EA;C.AW.__proto__=
A.Core.P;C.D5.__proto__=C.AC;C.ZU.__proto__=C.BW;C.AUy.__proto__=C.AB;C.Ab2.__proto__=
C.Cp;C.Uh.__proto__=C.Cp;C.ANU.__proto__=C.Ch;C.AVx.__proto__=C.Ch;C.AN7.__proto__=
C.Ch;C.AUK.__proto__=C.Ch;C.Xa.__proto__=A.Core.P;C.Q0.__proto__=C.Fn;C.D4.__proto__=
A.Core.P;C.Ud.__proto__=C.AB;C.AV8.__proto__=C.GL;C.AMs.__proto__=C.Ax_;C.AVS.__proto__=
C.Ch;C.AeW.__proto__=C.AC;C.Ax_.__proto__=C.AB;C.AWf.__proto__=C.Ch;C.AU8.__proto__=
C.Acx;C.ABQ.__proto__=A.Graphics.HA;C.Aqj.__proto__=C.AB;C.ARY.__proto__=A.Core.
P;C.Fr.__proto__=C.OverlayMenu;C.Aa3.__proto__=C.BW;C.Ajl.__proto__=C.Cp;C.AL$.__proto__=
C.Fr;C.Cn.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMf.__proto__=C.VG;C.AMg.
__proto__=C.Fr;C.So.__proto__=C.Uh;C.AMY.__proto__=C.VG;C.Wu.__proto__=C.Fn;C.VD.
__proto__=A.Core.P;C.KD.__proto__=A.Core.P;C.ASk.__proto__=C.H2;C.AUB.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cn;C.ANI.__proto__=C.Amz;C.Hj.__proto__=A.
Core.P;C.AV_.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cn;C.Abb.
__proto__=C.D5;C.Ax2.__proto__=C.ABQ;C.AUc.__proto__=C.OverlayMenu;C.AOM.__proto__=
A.Core.P;C.N$.__proto__=A.Core.P;C.AUd.__proto__=A.Core.P;C.AU$.__proto__=A.acl.
Aes;C.AkW.__proto__=C.Iv;C.AmB.__proto__=C.OverlayMenu;C.ACn.__proto__=C.A$;C.YF.
__proto__=C.AjT;C.AqO.__proto__=C.H2;C.Acw.__proto__=C.Dt;C.WeightRecordingScope.
__proto__=C.AC;C.AuS.__proto__=C.AB;C.AU_.__proto__=C.Iv;C.AMp.__proto__=C.AB;C.
ArB.__proto__=C.H2;C.AHq.__proto__=A.Core.P;C.AWb.__proto__=A.Core.P;C.Ei.__proto__=
C.Cp;C.AeY.__proto__=C.Ei;C.Ary.__proto__=C.AeY;C.SetTransponderScreen.__proto__=
C.Rc;C.ADG.__proto__=C.EC;C.AHu.__proto__=C.A$;C.WeightListScreen.__proto__=C.AB;
C.Mr.__proto__=C.Rc;C.AL9.__proto__=C.Mr;C.ManualActionScanScreen.__proto__=C.Mr;
C.AL_.__proto__=A.Core.P;C.APM.__proto__=C.De;C.ADE.__proto__=C.De;C.T3.__proto__=
C.De;C.APO.__proto__=C.De;C.ANm.__proto__=C.A$;C.Nd.__proto__=C.A$;C.ANk.__proto__=
C.A$;C.Jz.__proto__=A.Core.P;C.ANj.__proto__=C.A$;C.Am3.__proto__=C.TO;C.AGi.__proto__=
C.Axv;C.AkH.__proto__=C.Axv;C.ZJ.__proto__=C.AkH;C.ANQ.__proto__=C.O4;C.O4.__proto__=
C.Hj;C.APR.__proto__=C.EC;C.DT.__proto__=A.Core.P;C.ANg.__proto__=C.AjD;C.ADA.__proto__=
C.T4;C.Kp.__proto__=A.Core.P;C.AmL.__proto__=C.MB;C.AO9.__proto__=C.Kv;C.AutoRegistrationMode.
__proto__=C.AC;C.APS.__proto__=C.EC;C.TI.__proto__=C.AB;C.Ea.__proto__=A.Core.P;
C.AMD.__proto__=C.R7;C.AMR.__proto__=C.Aa_;C.AMM.__proto__=C.Aa_;C.AUA.__proto__=
C.A$;C.APQ.__proto__=C.EC;C.AMG.__proto__=C.Aa_;C.IL.__proto__=C.I_;C.R1.__proto__=
C.Fz;C.R5.__proto__=C.Fz;C.TH.__proto__=C.JU;C.QF.__proto__=C.Fz;C.TG.__proto__=
C.JU;C.AMo.__proto__=C.Aqj;C.ARj.__proto__=C.Ch;C.Aa_.__proto__=C.Ea;C.Ko.__proto__=
C.Cn;C.ARU.__proto__=C.Ch;C.AMB.__proto__=C.Le;C.AMC.__proto__=C.Ea;C.AMz.__proto__=
C.Le;C.AMA.__proto__=C.Le;C.WZ.__proto__=C.Ei;C.AU5.__proto__=C.WZ;C.R6.__proto__=
C.Fz;C.APH.__proto__=C.IQ;C.ANJ.__proto__=C.AB;C.ANq.__proto__=C.Aee;C.AMm.__proto__=
C.I$;C.AV7.__proto__=C.I$;C.AO$.__proto__=C.Kv;C.APJ.__proto__=C.Kv;C.APN.__proto__=
C.T4;C.ANl.__proto__=C.AjD;C.T4.__proto__=C.De;C.Aqz.__proto__=A.acv.ACx;C.AjD.__proto__=
C.A$;C.DS.__proto__=A.Core.P;C.AM9.__proto__=C.DS;C.O9.__proto__=C.DS;C.Aq3.__proto__=
A.Core.P;C.AMI.__proto__=C.Gj;C.AUE.__proto__=A.Core.P;C.Le.__proto__=C.Ea;C.ANR.
__proto__=C.Ch;C.Avc.__proto__=C.Cp;C.ADu.__proto__=C.BS;C.ADv.__proto__=C.BS;C.
Fz.__proto__=C.JU;C.AOP.__proto__=C.GL;C.AOO.__proto__=C.I$;C.APn.__proto__=C.Kv;
C.ADC.__proto__=C.De;C.ACj.__proto__=C.A$;C.AUz.__proto__=C.AhD;C.FactoryResetScope.
__proto__=C.Cn;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASw.
__proto__=C.Mq;C.ASv.__proto__=C.I$;C.ADw.__proto__=C.Kv;C.AB3.__proto__=C.D5;C.
AMc.__proto__=C.Fr;C.AMq.__proto__=C.AuS;C.NewAnimalSetTransponderScreen.__proto__=
C.AsD;C.B7.__proto__=C.AC;C.O8.__proto__=A.Core.P;C.R2.__proto__=C.Fz;C.R3.__proto__=
C.Fz;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR5.__proto__=C.OverlayMenu;
C.V1.__proto__=C.Uh;C.Av5.__proto__=C.Cp;C.AnimalSingleInfoScreen.__proto__=C.TI;
C.AnimalMultiInfoScreen.__proto__=C.TI;C.AMF.__proto__=C.OverlayMenu;C.Jd.__proto__=
A.Core.P;C.AMb.__proto__=C.GL;C.AMa.__proto__=C.I$;C.APG.__proto__=C.IQ;C.AsN.__proto__=
C.O8;C.Ari.__proto__=C.O8;C.Au_.__proto__=C.AC;C.AMx.__proto__=C.AC;C.AGR.__proto__=
C.Ei;C.G5.__proto__=A.Core.P;C.ARm.__proto__=C.HM;C.AVX.__proto__=C.X$;C.ASg.__proto__=
C.WE;C.AD5.__proto__=C.Ll;C.HM.__proto__=C.G5;C.Ll.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvV.__proto__=C.HM;C.AU3.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsD;C.ReasonOfLeaving.__proto__=C.AC;C.O1.__proto__=C.BW;C.Ae1.__proto__=
C.En;C.AR$.__proto__=C.En;C.AR_.__proto__=C.En;C.En.__proto__=A.Core.P;C.Rd.__proto__=
C.Ei;C.ARn.__proto__=C.Ll;C.AvU.__proto__=A.Core.P;C.EA.__proto__=A.Core.P;C.FB.
__proto__=C.AB;C.AOo.__proto__=C.AB;C.AOr.__proto__=C.FB;C.AOs.__proto__=C.FB;C.
AqR.__proto__=C.FB;C.AbD.__proto__=C.AjS;C.Kv.__proto__=C.AjS;C.AvD.__proto__=C.
AbD;C.APl.__proto__=C.AbD;C.APk.__proto__=C.AbD;C.APj.__proto__=C.BS;C.AeE.__proto__=
C.EC;C.AmT.__proto__=C.A$;C.Ajt.__proto__=C.IL;C.ACX.__proto__=A.Core.P;C.AkT.__proto__=
A.Core.P;C.Rg.__proto__=C.AB;C.AVw.__proto__=C.Rg;C.APm.__proto__=C.BS;C.De.__proto__=
C.EC;C.Ku.__proto__=C.BS;C.APf.__proto__=C.Ku;C.APh.__proto__=C.Ku;C.Yy.__proto__=
C.AmT;C.AgC.__proto__=C.Hj;C.AOb.__proto__=C.GL;C.AOa.__proto__=C.I$;C.APi.__proto__=
C.Kv;C.Abz.__proto__=C.Acw;C.AjK.__proto__=C.QH;C.ACd.__proto__=C.QH;C.APL.__proto__=
C.De;C.ANi.__proto__=C.A$;C.R4.__proto__=C.Fz;C.AMy.__proto__=C.Fz;C.AN5.__proto__=
C.El;C.AN6.__proto__=C.El;C.APg.__proto__=C.Ku;C.Nr.__proto__=C.Ab2;C.AN1.__proto__=
C.El;C.APb.__proto__=C.Ku;C.PV.__proto__=C.Cp;C.Sp.__proto__=C.AB;C.AOp.__proto__=
C.Sp;C.AOq.__proto__=C.Sp;C.AOt.__proto__=C.AqR;C.AOm.__proto__=C.FB;C.Aa9.__proto__=
C.IL;C.Ps.__proto__=C.IL;C.AMK.__proto__=C.AmB;C.ARS.__proto__=C.Ud;C.ARR.__proto__=
C.Ud;C.ASr.__proto__=C.Mq;C.ASq.__proto__=C.I$;C.APA.__proto__=C.Kv;C.AkP.__proto__=
C.GL;C.AUL.__proto__=C.I$;C.AeB.__proto__=C.YE;C.ACi.__proto__=C.A$;C.ADB.__proto__=
C.De;C.APC.__proto__=C.BS;C.Aba.__proto__=C.NS;C.X3.__proto__=C.NS;C.R7.__proto__=
C.Ea;C.X4.__proto__=C.R7;C.X1.__proto__=C.IK;C.Aa7.__proto__=C.IK;C.X0.__proto__=
C.IK;C.Aa6.__proto__=C.IK;C.AMH.__proto__=C.AB;C.IK.__proto__=C.I_;C.I_.__proto__=
C.Hj;C.NS.__proto__=C.Fz;C.Axu.__proto__=C.ZJ;C.ANP.__proto__=C.AmL;C.Axw.__proto__=
C.ZJ;C.AUp.__proto__=C.Ch;C.AUn.__proto__=C.En;C.ARk.__proto__=C.Ll;C.AUo.__proto__=
C.En;C.NewMenu.__proto__=C.AB;C.ASh.__proto__=C.H2;C.AMJ.__proto__=C.AmB;C.AMZ.__proto__=
C.VG;C.JU.__proto__=C.I_;C.APE.__proto__=C.YF;C.Aby.__proto__=C.Cn;C.APP.__proto__=
C.EC;C.MotherScanScreen.__proto__=C.Mr;C.APD.__proto__=C.Aq5;C.Jn.__proto__=A.Core.
P;C.APz.__proto__=C.BS;C.SetSaveNaisIdScreen.__proto__=C.Rc;C.AOc.__proto__=C.AqO;
C.UW.__proto__=C.Cn;C.UX.__proto__=C.UW;C.AcS.__proto__=C.UW;C.Ad1.__proto__=C.AC;
C.AGQ.__proto__=C.Ei;C.AN4.__proto__=C.El;C.APe.__proto__=C.Ku;C.AN2.__proto__=C.
El;C.APc.__proto__=C.Ku;C.Aq7.__proto__=C.T3;C.APK.__proto__=C.T3;C.AqA.__proto__=
C.Nd;C.ANh.__proto__=C.Nd;C.ASa.__proto__=C.Ae1;C.YE.__proto__=C.BS;C.Acx.__proto__=
C.BW;C.FO.__proto__=C.AC;C.AMN.__proto__=C.FO;C.AMO.__proto__=C.FO;C.AMu.__proto__=
C.I$;C.TO.__proto__=C.BW;C.ASj.__proto__=C.AB;C.AsD.__proto__=C.SetTransponderScreen;
C.AD6.__proto__=C.HM;C.AsE.__proto__=C.O1;C.AxH.__proto__=C.O1;C.Acz.__proto__=C.
Cn;C.AWl.__proto__=C.Mq;C.AWk.__proto__=C.I$;C.ARo.__proto__=A.Core.P;C.ARl.__proto__=
C.HM;C.AC2.__proto__=C.Abz;C.L8.__proto__=A.Core.P;C.AUJ.__proto__=C.Ch;C.AUI.__proto__=
C.Ch;C.AVN.__proto__=C.Ch;C.Afy.__proto__=C.Cn;C.Jk.__proto__=A.acn.Jk;C.AVB.__proto__=
C.AB;C.AUr.__proto__=C.AkP;C.ADD.__proto__=C.De;C.AM7.__proto__=C.AkP;C.AO_.__proto__=
C.AeB;C.APB.__proto__=C.AeB;C.ACm.__proto__=C.A$;C.AU2.__proto__=C.S0;C.AU6.__proto__=
C.Rd;C.APy.__proto__=C.BS;C.AR3.__proto__=C.Fr;C.AR2.__proto__=C.Fr;C.AR1.__proto__=
C.Fr;C.AMh.__proto__=C.AmA;C.AR7.__proto__=C.Uh;C.AM5.__proto__=C.OverlayMenu;C.
AEo.__proto__=C.AC;C.AG_.__proto__=C.O4;C.AHv.__proto__=C.Cn;C.AU4.__proto__=C.BW;
C.Ws.__proto__=C.Cn;C.AN0.__proto__=C.El;C.APa.__proto__=C.Ku;C.AN3.__proto__=C.
El;C.APd.__proto__=C.Ku;C.Mq.__proto__=C.GL;C.Av1.__proto__=C.VG;C.ADF.__proto__=
C.De;C.ACl.__proto__=C.A$;C.APF.__proto__=C.AjT;C.AVQ.__proto__=C.Ch;C.AVP.__proto__=
C.Cn;C.ANL.__proto__=C.B7;};C._ReInit=function(){var B;if((B=C.AxL._this))B._ReInit(
),C.AxL._ReInit.call(B);if((B=C.AxM._this))B._ReInit(),C.AxM._ReInit.call(B);if((
B=C.A5._this))B._ReInit(),C.A5._ReInit.call(B);if((B=C.Pr._this))B._ReInit(),C.Pr.
_ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(
B);if((B=C.Afo._this))B._ReInit(),C.Afo._ReInit.call(B);if((B=C.BT._this))B._ReInit(
),C.BT._ReInit.call(B);if((B=C.WR._this))B._ReInit(),C.WR._ReInit.call(B);if((B=
C.AsF._this))B._ReInit(),C.AsF._ReInit.call(B);if((B=C.An1._this))B._ReInit(),C.
An1._ReInit.call(B);if((B=C.DR._this))B._ReInit(),C.DR._ReInit.call(B);if((B=C.AuZ.
_this))B._ReInit(),C.AuZ._ReInit.call(B);if((B=C.Amw._this))B._ReInit(),C.Amw._ReInit.
call(B);if((B=C.Av_._this))B._ReInit(),C.Av_._ReInit.call(B);if((B=C.Av$._this))
B._ReInit(),C.Av$._ReInit.call(B);if((B=C.Aya._this))B._ReInit(),C.Aya._ReInit.call(
B);};C.DJ=function(D){var B;if((B=C.AxL._this)&&(B._cycle!=D))B._Done(C.AxL._this=
null);if((B=C.AxM._this)&&(B._cycle!=D))B._Done(C.AxM._this=null);if((B=C.A5._this
)&&(B._cycle!=D))B._Done(C.A5._this=null);if((B=C.Pr._this)&&(B._cycle!=D))B._Done(
C.Pr._this=null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions.
_this=null);if((B=C.Afo._this)&&(B._cycle!=D))B._Done(C.Afo._this=null);if((B=C.
BT._this)&&(B._cycle!=D))B._Done(C.BT._this=null);if((B=C.WR._this)&&(B._cycle!=
D))B._Done(C.WR._this=null);if((B=C.AsF._this)&&(B._cycle!=D))B._Done(C.AsF._this=
null);if((B=C.An1._this)&&(B._cycle!=D))B._Done(C.An1._this=null);if((B=C.DR._this
)&&(B._cycle!=D))B._Done(C.DR._this=null);if((B=C.AuZ._this)&&(B._cycle!=D))B._Done(
C.AuZ._this=null);if((B=C.Amw._this)&&(B._cycle!=D))B._Done(C.Amw._this=null);if((
B=C.Av_._this)&&(B._cycle!=D))B._Done(C.Av_._this=null);if((B=C.Av$._this)&&(B._cycle
!=D))B._Done(C.Av$._this=null);if((B=C.Aya._this)&&(B._cycle!=D))B._Done(C.Aya._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */