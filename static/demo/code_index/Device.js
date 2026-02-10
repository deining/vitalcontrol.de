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
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var A=index;var C={};
var Cg="ERROR: Cannot add criterion, it is already in the list.";var BD="ERROR: BatteryChargeState is read only";
var E6="ERROR: UpdateChargeActive is read only";var Hr="ERROR: ScanState is read only.";
var I0="ERROR: MeasureState is read only.";var Iv="ERROR: Temperature value is read only";
var O8="ERROR: UpdateDataTable called for Undefined data table.";var P_="ERROR: UpdateDataTable called for unknown data table id=";
var P$="ERROR: SyncState is read only.";var CR="ERROR: ScanTransponder is read only.";
var Fc="ERROR: Body weight value is read only";var LA="ERROR: Predicted temperature value is read only";
var Qa="ERROR: TransferProgress is read only";var J_="ERROR: TransferTarget is read only";
var Oh="ERROR: unhandled assessment.";var Qb="Unhandled enum BodyTemperature: ";
var MR="AU";var Tg="AT";var UX="BE";var Aaa="BA";var Xc="BG";var Iw="CA";var UY=
"CN";var Aab="TW";var UZ="HR";var Aac="CY";var Xd="CZ";var Aad="DK";var Aae="EE";
var U0="FI";var Xe="FR";var O9="DE";var Aaf="GR";var Oi="HU";var Rn="IE";var Xf=
"IT";var Xg="JP";var U1="LV";var Xh="LT";var Aag="LU";var Xi="MT";var U2="NL";var
Xj="NO";var Xk="PL";var Xl="PT";var Ro="RO";var Th="RU";var Aah="SK";var AfC="SI";
var Aai="ES";var Xm="SE";var Aaj="CH";var Aak="TR";var AhT="UA";var K2="UK";var Aal=
"US";var LB=".";var AhU="-";var Ak9="ERROR: Unhandled mass unit: ";var Oj=" ";var
Xn="Unhandled gender";var Aoe="Unhandled animal type";var AfD="Unhandled Device::MassUnit.";
var AhV="Unhandled Device::AnimalListContent.";var AcP="Avid";var Aam="Ordicam / IER SA";
var Ax9="Agrident";var Ax_="Datamars";var Ax$="Allflex";var Aya="Texas Instruments";
var Ak_="Nedap";var AsZ="Digital Angel";var Ayb="null";var Ayc="[ ";var O_=", ";
var Rp=" ]";var Ayd="Unhandled language";var U3="Unhandled Device::AnimalListAction.";
var As0="Temperature unit conversion not supported: ";var Aye="->";var Ayf="=";var
Ak$=">";var Ayg="<";var AfE="!=";var Aof="WARNING: Unhandled operator.";var I1="Unknown birth type";
var Aog="Unhandled country: ";var As1="Unhandled Device::Action: ";var AcQ="ERROR: Cannot start transaction";
var As2="ERROR: Table is null, cannot load row (";var As3=")";var As4="Table Id mismatch!";
var Aoh="ERROR: Row index (";var As5=") out of bounds [0,";var Ala="]";var Ayh="ERROR: Table is full. Item limit: ";
var Ayi="Device::ScanTransponder not set";var Ayj="Unhandled TransponderType.";var
As6="Unhandled ScanState.";var Ayk="Could not load animal with transponder";var O$=
"Birth type";var Ayl="Time calving";var AWi="Pend. reg. notice";var AWj="Perished";
var AWk="Rating temp.";var AWl="Location";var AHx=" mother";var AHy="Reason leaving";
var AfF="Time alarm";var Aoi="Time first weighing";var AWm="Time control";var AHz=
"Time temp.";var Alb="Time watch";var AHA="Time weighing";var AHB="Assessment";var
AWn="Time rating";var AWo="ERROR: Unhandled AnimalTable filter field:";var AHC="Field ";
var AWp="ERROR: Unhandled RatingTable filter field:";var AcR="ERROR: Unhandled table ";
var AWq=" filter fields.";var AWr=" [";var AWs="WARNING: Unhandled filter criterion type.";
var AWt="0";var As7="No table specified";var AHD="Invalid animal id generation method: ";
var AHE="Unhandled AnimalIdGenerationMethod: ";var Aym="Invalid gender: ";var AHF=
"Invalid ear tag number assignment mode: ";var Ayn=";";var AWu="Invalid animal creation error code: ";
var AWv="Invalid EartagNrAssignmentMode: ";var AWw="Unsupported exponent: ";var AWx=
"Unknown whereabouts type: ";var AHG="Unhandled Gender: ";var AWy="Unhandled AnimalIdAutoGenerationMethod: ";
var MS="\n";var Ayo="\n\n";var AWz="Bootloader:\nV\xA0";var AWA="Middleware:\nV\xA0";
var AWB="GUI:\nV\xA0";var AWC="Mainboard: ";var AWD="Torchboard: ";var AHH="Operator not supported.";
var AWE="Unhandled Device::TransponderAssignmentIdChangeMethod: ";var Ayp="Unhandled mass deregistration criterion: ";
var AWF="Could not load animal with naisId";var As8="Unhandled enum value ";var Ayq=
"UNDEFINED";var AWG="Boot";var AHI="Charge";var AWH="ChargeWarning";var AHJ="ControlledPowerOff";
var AHK="DeviceMain";var AHL="DeviceService";var AWI="DeviceInfo";var AHM="DeviceDataManagement";
var AWJ="DeviceAnimalDataMenu";var AWK="DeviceDeviceDataMenu";var Rq="DeviceCheck";
var U4="Home";var AWL="Settings";var AWM="DateTimeSettings";var AWN="UnitsSettings";
var AWO="DataAcquisitionSettings";var AWP="RegistrationAutomaticSettings";var AWQ=
"RegistrationPresettingsSettings";var AWR="TransponderAssignmentSettings";var AhW=
"TransponderUnlinkSettings";var AHN="TemperatureSettings";var AWS="WeightGainSettings";
var AWT="DeviceSettings";var AHO="RegistrationSettings";var AHP="InitializationSettings";
var Ayr="PremisesSettings";var Qc="Sleep";var AWU="Sync";var AWV="EditAnimalData";
var AWW="EditAnimalDataNaisId";var As9="AnimalList";var AWX="AnimalListFilter";var
AWY="AlarmListFilter";var AWZ="WatchListFilter";var AW0="AnimalActionActions";var
AW1="AnimalActionTemperature";var AW2="TemperatureMeasurement";var As_="AnimalActionWeighing";
var AW3="AnimalActionRate";var AW4="AnimalActionUnregister";var AW5="AnimalActionPerished";
var AW6="AnimalActionNewBornCare";var AW7="AlarmList";var AW8="ControlMeasure";var
AW9="ControlList";var AW_="RangeTest";var AW$="ListsMain";var AXa="ListsIdManagement";
var AHQ="WatchList";var Alc="EvaluationMenuMain";var AXb="EvaluationMenuWeights";
var AXc="EvaluationLosses";var AXd="EvaluationRatings";var Ays="EvaluationTemperatures";
var Ald="EvaluationWeights";var Ale="EvaluationWeightsRecent";var Ayt="EvaluationBirthWeights";
var Aoj="AnimalEvaluationFilter";var AhX="NewMenu";var AXe="NewAnimals";var Ayu=
"NewAnimalManualData";var AHR="MassRecording";var AfG="NewAnimalTransponderData";
var AHS="NewAnimalLoss";var Aan="AutoActionScanScreen";var Alf="ManualActionScanScreen";
var Aok="SetTransponderScreen";var AXf="SetSaveTransponderScreen";var AXg="NewAnimalSetTransponderScreen";
var AXh="NewAnimalsSetTransponderScreen";var AXi="NewAnimalCalvingDataScreen";var
AXj="WeightListScreen";var As$="AnimalSingleInfoScreen";var AHT="AnimalMultiInfoScreen";
var AHU="AnimalRegistrationDetails";var AXk="FreshCowListScreen";var AXl="FreshCowListFilterScreen";
var AXm="DryCowListScreen";var AXn="DryCowListFilterScreen";var AXo="NoTransponderListScreen";
var AXp="NoTransponderListFilterScreen";var AXq="YoungNoTransponderListScreen";var
AXr="YoungNoTransponderListFilterScreen";var AXs="NoNaisIdListScreen";var AXt="NoNaisIdListFilterScreen";
var AXu="RegistrationsListScreen";var Ayv="RegistrationsListFilterScreen";var AHV=
"ActionListScreen";var AHW="ActionListFilterScreen";var AHX="UpdateScreen";var AHY=
"MotherScanScreen";var AHZ="SetSaveNaisIdScreen";var AH0="PurchasedAnimalsList";
var AXv="TextInput";var AXw="AnimalActions";var AXx="Unhandled display mode: ";var
AXy="None";var AXz="Actions Settings";var AXA="Auto Action";var AXB="Menu Item Settings";
var Ayw="Rating Type";var AH1="Weighing settings";var AXC="Options";var AH2="AnimalSearch";
var AhY="AnimalSearchUnfiltered";var U5="AnimalSearchDriedOff";var AXD="MeasurementReady";
var Aao="AnimalMultiInfoMenu";var AXE="MassRecordingDefaults";var AXF="MassRecordingFields";
var Alg="MassRecordingMenu";var AfH="BirthRegistrationsListMenu";var AhZ="Unhandled overlay menu: ";
var Aol="Error";var Ayx="Idle";var Pa="IdScanned";var AXG="NotFound";var AH3="Progress";
var AH4="Unhandled scan state: ";var AXH="Prediction";var Ayy="Ready";var AH5="Unhandled measure state: ";
var AXI="Unhandled temperature unit: ";var AXJ="Unhandled species: ";var AXK="Bosanski";
var AXL="\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438";var AXM="\u6B63\u9AD4\u5B57/\u7E41\u9AD4\u5B57";
var AXN="Hrvatski";var AXO="\u010Ce\u0161tina";var AXP="Dansk";var AH6="English";
var AXQ="Nederlands";var AH7="Eesti";var AH8="Suomalainen";var Ayz="Fran\xE7ais";
var AXR="Deutsch";var AXS="\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC";var
AXT="Magyar";var AXU="Italiano";var AXV="\u65E5\u672C\u8A9E";var AXW="Latvie\u0161u";
var AXX="Lietuvi\u0161kas";var AXY="Norsk";var Aom="Polski";var Ata="Portugu\xEAs";
var AH9="Rom\xE2n\u0103";var AXZ="\u0420\u0443\u0441\u0441\u043A\u0438\u0439";var
AX0="Sloven\u0161\u010Dina";var AX1="Espa\xF1ol";var AX2="Svenska";var AX3="T\xFCrk\xE7e";
var AX4="\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439";var
AH_="Unhandled language: ";var AX5="BS";var AX6="ZH";var AX7="CS";var AX8="DA";var
AX9="EN";var AX_="ET";var AX$="EL";var AYa="JA";var AH$="SL";var AYb="SV";var AYc=
"Unhandled gender: ";var AIa="Unhandled birth type: ";var AIb="Exporting";var AIc=
"ImportFinish";var AId="ImportStart";var AyA="Importing";var AyB="Init";var AIe=
"Unhandled sync state: ";var AIf="Unhandled rating attribute: ";var AIg="Unhandled assessment: ";
var AyC="Illegal boolean value: ";var AyD="Unhandled popup ID:";var AYd="Unknown";
var AYe="Severe Error";var AYf="ErrorsDeviceDriverCheck";var AYg="Enter Sleep";var
AYh="About";var AYi="InfoSoftwareVersions";var AYj="InfoHardwareVersions";var AYk=
"InfoSerial";var AYl="ShutDown";var AYm="SuccessDataSync";var AYn="SuccessResetFactory";
var AYo="SuccessResetSettings";var AyE="SuccessResetAnimalData";var AYp="SuccessCreateBackup";
var AYq="SuccessRestoreBackup";var AyF="CreateBackupInProgress";var Atb="RestoreBackupInProgress";
var U6="FailedCreateBackup";var Atc="FailedRestoreBackup";var AYr="TechnicalDetails";
var AYs="WarningDataSync";var AYt="WarningFactory";var AIh="WarningResetAnimalData";
var AYu="WarningResetDeviceData";var AIi="WarningRestart";var AYv="WarningAutoAction";
var AYw="WarningAutoActionNotApplicable";var AYx="WarningNoMenuItem";var Atd="WarningEnterDemoMode";
var AYy="NoAnimalsRegistered";var AYz="MaxNumAnimalsReached";var AIj="MaxNumRatingsReached";
var AYA="MaxNumCalfDeregistrationsReached";var AYB="MissingTransponder";var AYC=
"EarTagNumberTooShort";var AYD="NoValidCountryCode";var AcS="WarningOutdatedAnimalWeight";
var AYE="WarningOutdatedAnimalWeights";var AYF="WarningWeightEvaluationSingular";
var AYG="WarningWeightEvaluationPlural";var AYH="ScanError";var AIk="ScanNotFound";
var AYI="ScannedAnimalNotFound";var AYJ="ScannedTransponderNotFound";var AYK="ScannedNaisIdNotFound";
var AYL="AnimalNotFound";var AYM="SuccessUnregister";var AYN="SuccessUnregisterPerished";
var AIl="SuccessCreationNewAnimal";var AYO="SuccessCreationNewAnimals";var AYP="AnimalCreationInProgress";
var AYQ="EvaluationInProgress";var AIm="DataSyncInProgress";var AIn="AddedToAlarm";
var AYR="RemovedFromAlarm";var AYS="AddedToWatch";var AYT="RemovedFromWatch";var
AYU="AddedToDryOff";var Rr="RemovedFromDryOff";var Ate="AnimalIdAlreadyExists";var
AIo="AnimalIdAlreadyExistsContinuable";var AIp="MissingAnimalId";var Aon="MissingAnimalIdMother";
var Aoo="MissingEartagNumber";var AyG="MissingTransponderId";var AYV="TransponderAlreadyRegistered";
var AIq="TransponderAlreadyRegisteredContinuable";var AYW="TransponderAlreadyRegisteredCapturable";
var AYX="HelpAnimalInfoRating";var AYY="WarningReassignTransponder";var AYZ="CannotReassignNaisId";
var AY0="WarningResetToDefaultValue";var AY1="WarningResetThresholds";var AY2="WarningResetTempThresholds";
var AY3="UpdateFirmware";var AY4="UpdateFirmwareBatteryLow";var AY5="ConfirmFirmwareUpdated";
var AY6="ConfirmBootloaderUpdated";var AY7="QuestionAddAnotherCalfMultiples";var
AY8="RemovedAllBirthNoticesPending";var AY9="RemovedAllPurchasedNoticePending";var
AY_="RemovedFromBirthNoticePending";var AY$="RemovedFromPurchasedNoticePending";
var AZa="SuccessClearAnimalLoss";var Aop="RemovedAnimalBirth";var AIr="RemovedAnimalPurchased";
var AZb="WarningNoActionsForAnimalLoss";var AIs="SuccessLinkTransponder";var AIt=
"SuccessChangeTransponder";var AcT="SuccessUnlinkTransponder";var AIu="SuccessLinkNaisId";
var AZc="WarningDataExportHitBirthFailed";var AIv="SuccessDataExportHitBirth";var
AZd="SuccessDataExportHitBirthDownload";var AyH="SuccessDataExportHitBirthResetAdvice";
var AZe="WarningDataExportPurchasedFailed";var AZf="SuccessDataExportPurchased";
var AyI="SuccessDataExportPurchasedDownload";var AZg="SuccessDataExportPurchasedResetAdvice";
var AZh="WarningDataExportAnimalsFailed";var AZi="SuccessDataExportAnimalsRatings";
var AIw="SuccessDataExportAnimalsDownload";var Aoq="WarningNoPremisesID";var AIx=
"WarningNoPremisesCountry";var AZj="WarningNoFlashDrivePresent";var AIy="WarningNoBackupPathPresent";
var AIz="WarningNoBackupFilePresent";var Alh="DemoFunctionNotAvailable";var AZk=
"WarningImpreciseTimeSetting";var Aor="ConfirmationRestoreBackup";var AZl="ConfirmationMassDeregistration";
var AIA="SuccessMassDeregistration";var AIB="WarningParsedDateInFutureInvalid";var
AZm="WarningParsingDateFailed";var AZn="WarningParsingNaisIdFailed";var AIC="WarningParsingShortNaisIdWithoutPremisesId";
var AZo="DataExportInProgress";var AZp="BarcodeScannerConnectedSwitchScreen";var
AZq="BarcodeScannerDisconnectedSwitchScreen";var AZr="AnimalId";var AZs="FarmId";
var AZt="GroupId";var AZu="PersonId";var AZv="Unhandled transponder type: ";var AZw=
"FDX";var AZx="HDX";var AZy="HDX (Urban)";var AZz="Unhandled transponder protocol: ";
var AZA="Illegal RatingMode: ";var AZB="Unhandled mass unit: ";var AID="Max array size is 10";
var Xo="Index out of bounds";var AZC="ERROR: Received more integers than expected!";
var Atf="Unhandled double scan action :";var AZD="Illegal WeightRecordingMode: ";
var AZE="Illegal WeightRecordingScope: ";var AZF="AnimalDataGenderType";var AZG=
"AnimalDataShortNaisId";var AZH="Rating";var AZI="Temperature";var Atg="Weight";
var Ath="Alarm infos";var Ati="Control infos";var Atj="Watch infos";var AyJ="Fresh cow infos";
var Aos="No transponder infos";var AZJ="Dry cow info";var AZK="No nais id infos";
var AZL="Birth registrations infos";var AZM="Purchased registrations infos";var AZN=
"Young no transponder infos";var AZO="Unhandled animal list content:";var AZP="Illegal AutoRegistrationMode: ";
var AZQ="Illegal FactoryResetScope: ";var AIE="??";var AZR="Illegal EaseOfDelivery: ";
var AZS="Illegal Whereabouts: ";var AZT="Illegal breed: ";var AZU="Unisex";var AZV=
"Illegal animalIdGenerationMethod: ";var AZW="Ascending";var AyK="Descending";var
AZX="Illegal directionOfCountingName: ";var Atk="Unhandled direction of counting: ";
var Ali="Unhandled German state: ";var AZY="SH";var AZZ="HH";var AZ0="NI";var AIF=
"HB";var AZ1="NW";var AZ2="HE";var AZ3="RP";var AZ4="BW";var AZ5="BY";var AZ6="BB";
var AZ7="MV";var AZ8="SN";var AIG="ST";var AZ9="TH";var AZ_="One Range Male Female";
var AZ$="Two Ranges Male Female";var AIH="Illegal EartagAssignmentMode: ";var A0a=
"Unhandled code set value ";var AII="Implement in derived class";var A0b="Illegal HIT-Code: ";
var AIJ="Illegal ReasonOfLeaving: ";var AIK="Illegal code: ";var Atl="Undefined";
var A0c="Illegal DeviceComponent: ";var A0d="Unhandled Device::MotherSelectionFilterMode: ";
var Atm="Illegal Device::TimespanDays: ";var AyL="Not connected";var AyM="Host";
var A0e="Device";var A0f="Device CDC";var A0g="Host MSC";var AIL="Host HID";var AIM=
"Host CDC";var Alj="Illegal animalIdAutoGenerationMethod: ";var A0h="Unhandled month: ";
var A0i="Illegal transponderAssignmentIdChangeMethod: ";var A0j="Unhandled animal table field: ";
var A0k="Unhandled list view scope: ";var AyN="1 ";var Atn="100 ";var AIN="10 ";
var AIO="Unhandled weight value precision: ";
C.Action={UNDEFINED:0,TempMeasurement:1,Rating:2,Alarm:4,Watch:8,History:16,AnimalLoss:
32,Unregister:64,Edit:128,Weighing:256,FirstFeeding:512,LinkTransponder:1024,AutoActions:
2048,Calving:4096,DryOff:8192,LinkNaisId:16384,ClearBirthNoticePending:32768,DeleteAnimal:
65536,ScanNaisId:131072,UnlinkTransponder:262144,ClearPurchaseNoticePending:524288
};C.AnimalTableFields={Id:0,VisualId:1,GroupId:2,LocationId:3,DateOfBirth:4,LastTemperature:
5,BirthType:6,Gender:7,IsAlarm:8,IsControl:9,IsRegistered:10,IsFever:11,IsWatch:
12,WorstAssessment:13,AnimalType:14,TimestampAlarm:15,TimestampExpirationFeverAlarm:
16,LastRatingTemperature:17,LastBodyWeight:18,TimestampLastWeighing:19,TimestampLastControl:
20,TimestampLastWatch:21,TransponderId:22,FirstBodyWeight:23,TimestampFirstWeighing:
24,FirstBodyWeightId:25,NaisId:26,IsPerished:27,DateOfLastCalving:28,LactationNumber:
29,TimestampLastTemperature:30,TimestampLastAssessment:31,Breed:32,EaseOfDelivery:
33,WhereAbouts:34,NaisIdMother:35,ReasonOfLeaving:36,IsRegistrationNoticePending:
37,IsDry:38};C.Assessment={None:0,Red:1,Yellow:2,Green:3,Blue:4,Gray:5};C.Filter={
B_:null,B$:null,CY:function(AH){if(!AH)return;var Aw=this.B_;while(!!Aw){if(Aw===
AH)throw new Error(Cg);Aw=Aw.Ah;}AH.AI=this.B$;if(!!this.B$)this.B$.Ah=AH;this.B$=
AH;if(!this.B_)this.B_=AH;},AOR:function(){return this.B_;},AOW:function(Bcr){if(
!!Bcr)return Bcr.Ah;return null;},DN:function(AJf,Ec){var Aw=this.B_;while(!!Aw){
if(Aw.EJ===AJf){if(Ec===1)return Aw;else if(Aw.Operator===Ec)return Aw;}Aw=Aw.Ah;
}return null;},Nw:function(AH){var Aw=this.B_;while(!!Aw){if(Aw===AH){if(!!Aw.AI
)Aw.AI.Ah=Aw.Ah;if(!!Aw.Ah)Aw.Ah.AI=Aw.AI;if(this.B_===Aw)this.B_=Aw.Ah;if(this.
B$===Aw)this.B$=Aw.AI;Aw.Ah=null;Aw.AI=null;return;}Aw=Aw.Ah;}},E9:function(){var
Be=A._NewObject(C.Filter,0);var Aw=this.B_;while(!!Aw){Be.CY(Aw.Abq());Aw=Aw.Ah;
}return Be;},_Init:function(aArg){this.__proto__=C.Filter;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.B_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Filter"};C.FilterCriterion={Ah:null,AI:null,EJ:-1,Operator:
1,YQ:false,Abq:function(){return null;},E9:function(AH){if(!AH)return;this.EJ=AH.
EJ;this.Operator=AH.Operator;this.YQ=AH.YQ;},_Init:function(aArg){this.__proto__=
C.FilterCriterion;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D
))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::FilterCriterion"
};C.Int32FilterCriterion={A6:0,Abq:function(){var Aw=A._NewObject(C.Int32FilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Ec,A9,Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
Int32FilterCriterion;},_className:"Device::Int32FilterCriterion"};C.DeviceClass={
AEz:0,AEy:0,Av5:0,PZ:0,OX:null,SG:null,Q2:null,S7:null,R7:null,P4:null,FU:null,An:
null,Bt:null,AnN:null,Ps:null,AuI:A.jV,AutoActions:A.jV,ABZ:A.jV,AG7:A.jV,AG8:A.
jV,AhH:A.jV,AHr:A.jV,AHs:A.jV,AB0:A.jV,AHq:A.jV,AHv:A.jV,ABS:A.jV,ABT:A.jV,ASl:A.
jV,ASq:A.jV,AWf:A.jV,Aba:100,Ly:0,AM9:75,AcJ:3600,AUp:0,A3:5,AF:0,K0:50000,Po:0,
AGn:0,AdS:0,Aq5:0,Aq4:0,AR_:1,AR9:1,AjR:0,AR$:1,AxV:0,Afs:0,AqR:10,AVb:5,Av0:60,
AvY:0,B6:0,An5:0,OR:1,WhereAbouts:0,Ak1:0,AxN:3,ACW:0,Agy:1,Ab0:0,Aqq:0,AN7:11,Breed:
0,EartagNrAssignmentMode:0,Au7:0,ACP:0,ACO:0,In:5,ABR:2,Aqs:0,AOJ:2,AV2:0,D_:0,AMh:
0,Kn:0,Gender:2,WeightRecordingScope:1,WeightRecordingMode:1,AnimalType:0,MassUnit:
0,AutoRegistrationMode:0,RatingMode:0,SyncState:0,OverlayMenu:0,TemperatureUnit:
0,Language:0,MeasureState:0,ScanState:0,Im:3,AUo:false,AM2:false,AeP:true,ARW:false
,Aqc:true,AqS:false,AmQ:true,HG:false,AVE:false,AmR:false,AV0:false,AsT:false,AEx:
false,AmD:false,UpdateActiveScreen:function(AJ){if(this.Im===AJ)return;this.Im=AJ;
A.abo([this,this.AEL,this.Bbz],0);},Zv:function(E){if(this.K&&this.K.Zv)return this.
K.Zv.apply(this,arguments);else return C.DeviceClass.Bvc.apply(this,arguments);}
,Bvc:function(E){},Bbz:function(Aq){this.Zv(Aq);},UpdateBatteryChargeState:function(
AJ){if(this.Aba===AJ)return;this.Aba=AJ;A.abo([this,this.Av$,this.AyU],0);},Awx:
function(E){if(this.K&&this.K.Awx)return this.K.Awx.apply(this,arguments);else return C.
DeviceClass.Bvn.apply(this,arguments);},Bvn:function(E){A.ab5("%s",BD);},AyU:function(
Aq){this.Awx(Aq);},UpdateChargeActive:function(AJ){if(this.AmD===AJ)return;this.
AmD=AJ;A.abo([this,this.Awc,this.AyV],0);},AFg:function(E){if(this.K&&this.K.AFg
)return this.K.AFg.apply(this,arguments);else return C.DeviceClass.Bvu.apply(this
,arguments);},Bvu:function(E){A.ab5("%s",E6);},AyV:function(Aq){this.AFg(Aq);},UpdateScanState:
function(AJ){var B;if(this.ScanState===AJ)return;this.ScanState=AJ;A.abo([this,this.
ASY,this.A0O],0);A._GetAutoObject(C.Helper).BBJ(this);},Ar4:function(E){if(this.
K&&this.K.Ar4)return this.K.Ar4.apply(this,arguments);else return C.DeviceClass.
Bwa.apply(this,arguments);},Bwa:function(E){A.ab5("%s",Hr);},A0O:function(Aq){this.
Ar4(Aq);},UpdateMeasureState:function(AJ){if(this.MeasureState===AJ)return;this.
MeasureState=AJ;A.abo([this,this.AET,this.AI1],0);},AwY:function(E){if(this.K&&this.
K.AwY)return this.K.AwY.apply(this,arguments);else return C.DeviceClass.BvT.apply(
this,arguments);},BvT:function(E){A.ab5("%s",I0);},AI1:function(Aq){this.AwY(Aq);
},UpdateTempValue:function(AJ){if(this.Ly===AJ)return;this.Ly=AJ;A.abo([this,this.
AEX,this.AI3],0);},Axa:function(E){if(this.K&&this.K.Axa)return this.K.Axa.apply(
this,arguments);else return C.DeviceClass.Bwg.apply(this,arguments);},Bwg:function(
E){A.ab5("%s",Iv);},AI3:function(Aq){this.Axa(Aq);},AnC:function(E){if(this.K&&this.
K.AnC)return this.K.AnC.apply(this,arguments);else return C.DeviceClass.BvN.apply(
this,arguments);},BvN:function(E){},BbQ:function(Aq){this.AnC(Aq);},Axb:function(
E){if(this.K&&this.K.Axb)return this.K.Axb.apply(this,arguments);else return C.DeviceClass.
Bwh.apply(this,arguments);},Bwh:function(E){},Atq:function(Aq){this.Axb(Aq);},AFe:
function(E){if(this.K&&this.K.AFe)return this.K.AFe.apply(this,arguments);else return C.
DeviceClass.Bvt.apply(this,arguments);},Bvt:function(E){},BbH:function(Aq){this.
AFe(Aq);},AFK:function(E){if(this.K&&this.K.AFK)return this.K.AFK.apply(this,arguments
);else return C.DeviceClass.BvV.apply(this,arguments);},BvV:function(E){},A0I:function(
Aq){this.AFK(Aq);},UpdateMonitoring:function(AJ){if(this.AEx===AJ)return;this.AEx=
AJ;A.abo([this,this.ASP,this.A0I],0);},UpdateDataTable:function(Bct){var B;switch(
Bct){case 0:A.pe([B=this.An,B.Ann],this);break;case 1:A.pe([B=this.Bt,B.Ann],this
);break;case 3:A.pe([B=this.Ps,B.Ann],this);break;case 2:A.ab5("%s",O8);break;default:
A.ab5("%s%e",P_,Bct);}},AxM:function(){if(this.K&&this.K.AxM)return this.K.AxM.apply(
this,arguments);else return C.DeviceClass.BwR.apply(this,arguments);},BwR:function(
){},AhL:function(){if(this.K&&this.K.AhL)return this.K.AhL.apply(this,arguments);
else return C.DeviceClass.BwU.apply(this,arguments);},BwU:function(){},AhI:function(
){if(this.K&&this.K.AhI)return this.K.AhI.apply(this,arguments);else return C.DeviceClass.
BwS.apply(this,arguments);},BwS:function(){},AnZ:function(){if(this.K&&this.K.AnZ
)return this.K.AnZ.apply(this,arguments);else return C.DeviceClass.BwV.apply(this
,arguments);},BwV:function(){},UpdateLanguage:function(AJ){if(this.Language===AJ
)return;this.Language=AJ;switch(AJ){case 14:A._SetLanguage(1);break;case 13:A._SetLanguage(
2);break;case 6:A._SetLanguage(3);break;case 25:A._SetLanguage(25);break;case 11:
A._SetLanguage(4);break;case 17:A._SetLanguage(5);break;case 10:A._SetLanguage(6
);break;case 12:A._SetLanguage(7);break;case 5:A._SetLanguage(8);break;case 3:A.
_SetLanguage(9);break;case 1:A._SetLanguage(10);break;case 8:A._SetLanguage(11);
break;case 18:A._SetLanguage(12);break;case 4:A._SetLanguage(13);break;case 19:A.
_SetLanguage(14);break;case 20:A._SetLanguage(15);break;case 26:A._SetLanguage(26
);break;case 15:A._SetLanguage(16);break;case 21:A._SetLanguage(17);break;case 22:
A._SetLanguage(18);break;case 23:A._SetLanguage(19);break;case 9:A._SetLanguage(
20);break;case 27:A._SetLanguage(27);break;case 2:A._SetLanguage(21);break;case 24:
A._SetLanguage(22);break;case 7:A._SetLanguage(23);break;case 16:A._SetLanguage(
24);break;default:A._SetLanguage(0);}A.abo([this,this.A9l,this.BbQ],0);},UpdateTemperatureUnit:
function(AJ){if(this.TemperatureUnit===AJ)return;this.TemperatureUnit=AJ;A.abo([
this,this.ArB,this.Atq],0);},UpdateBrightness:function(AJ){if(this.AM9===AJ)return;
this.AM9=AJ;A.abo([this,this.A86,this.BbH],0);},SetSystemTime:function(Ah7){if(this.
K&&this.K.SetSystemTime)return this.K.SetSystemTime.apply(this,arguments);else return C.
DeviceClass.BwP.apply(this,arguments);},BwP:function(Ah7){},AxF:function(){if(this.
K&&this.K.AxF)return this.K.AxF.apply(this,arguments);else return C.DeviceClass.
Bbn.apply(this,arguments);},Bbn:function(){},AGA:function(){if(this.K&&this.K.AGA
)return this.K.AGA.apply(this,arguments);else return C.DeviceClass.Bbl.apply(this
,arguments);},Bbl:function(){},Bpe:function(){},UpdateOverlayMenu:function(AJ){if(
this.OverlayMenu===AJ)return;this.OverlayMenu=AJ;A.abo([this,this.Awo,this.Ay2],
0);},Dw:function(E){if(this.K&&this.K.Dw)return this.K.Dw.apply(this,arguments);
else return C.DeviceClass.Bv6.apply(this,arguments);},Bv6:function(E){},Ay2:function(
Aq){this.Dw(Aq);},Axi:function(E){if(this.K&&this.K.Axi)return this.K.Axi.apply(
this,arguments);else return C.DeviceClass.Bwr.apply(this,arguments);},Bwr:function(
E){},Bb2:function(Aq){this.Axi(Aq);},UpdateUnderTemp:function(AJ){if(this.AcJ===
AJ)return;this.AcJ=AJ;A.abo([this,this.A9Q,this.Bb2],0);},UpdateSyncState:function(
AJ){if(this.SyncState===AJ)return;this.SyncState=AJ;A.abo([this,this.AS0,this.A0Q
],0);},Acc:function(E){if(this.K&&this.K.Acc)return this.K.Acc.apply(this,arguments
);else return C.DeviceClass.Bwf.apply(this,arguments);},Bwf:function(E){A.ab5("%s"
,P$);},A0Q:function(Aq){this.Acc(Aq);},ADj:function(){if(this.K&&this.K.ADj)return this.
K.ADj.apply(this,arguments);else return C.DeviceClass.Bu6.apply(this,arguments);
},Bu6:function(){return A.jV;},UpdatePopup:function(Jn,A1A,A1v,A1D){this.AZ(Jn,A1A
,A1v,A1D,[this,this.BBp]);},PopupStateChanged:function(Jn,Ae){if(this.K&&this.K.
PopupStateChanged)return this.K.PopupStateChanged.apply(this,arguments);else return C.
DeviceClass.BwE.apply(this,arguments);},BwE:function(Jn,Ae){},AF$:function(E){if(
this.K&&this.K.AF$)return this.K.AF$.apply(this,arguments);else return C.DeviceClass.
Bwt.apply(this,arguments);},Bwt:function(E){},Bb3:function(Aq){this.AF$(Aq);},UpdateVibrationOnKeypressEnabled:
function(AJ){if(this.AsT===AJ)return;this.AsT=AJ;A.abo([this,this.A9R,this.Bb3],
0);},Ae$:function(E){if(this.K&&this.K.Ae$)return this.K.Ae$.apply(this,arguments
);else return C.DeviceClass.Bws.apply(this,arguments);},Bws:function(E){},AI4:function(
Aq){this.Ae$(Aq);},UpdateVibrationOn:function(BcW){if(this.AV0===BcW)return;this.
AV0=BcW;A.abo([this,this.AEY,this.AI4],0);},AZ:function(Jn,A1A,A1v,A1D,A1w){var Ago=
A._NewObject(C.PopupContext,0);Ago.Id=Jn;Ago.Show=A1A;Ago.AkE=A1v;Ago.Ak0=A1D;Ago.
AGg=A1w;this.AnN.Trigger(Ago,false);},BBp:function(G){var Ar=(C.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar)this.PopupStateChanged(Ar.Id,Ar.PopupState);},Aw8:function(E){
if(this.K&&this.K.Aw8)return this.K.Aw8.apply(this,arguments);else return C.DeviceClass.
Bv$.apply(this,arguments);},Bv$:function(E){},A0N:function(Aq){this.Aw8(Aq);},UpdateRatingMode:
function(AJ){if(this.RatingMode===AJ)return;this.RatingMode=AJ;A.abo([this,this.
ASX,this.A0N],0);},Ae1:function(E){if(this.K&&this.K.Ae1)return this.K.Ae1.apply(
this,arguments);else return C.DeviceClass.BvF.apply(this,arguments);},BvF:function(
E){},Atp:function(Aq){this.Ae1(Aq);},UpdateFlashLightOn:function(BcC){if(this.AmR===
BcC)return;this.AmR=BcC;A.abo([this,this.Ary,this.Atp],0);},Uy:function(E){if(this.
K&&this.K.Uy)return this.K.Uy.apply(this,arguments);else return C.DeviceClass.Bwk.
apply(this,arguments);},Bwk:function(E){},A0R:function(Aq){this.Uy(Aq);},UpdateTopLightOn:
function(BcR){if(this.AVE===BcR)return;this.AVE=BcR;A.abo([this,this.AS2,this.A0R
],0);},WM:function(E){if(this.K&&this.K.WM)return this.K.WM.apply(this,arguments
);else return C.DeviceClass.Bv_.apply(this,arguments);},Bv_:function(E){},Bw8:function(
Aq){this.WM(Aq);},UpdateRGBTopLight:function(BcM){if(this.AUp===BcM)return;this.
AUp=BcM;A.abo([this,this.BlV,this.Bw8],0);},Awv:function(E){if(this.K&&this.K.Awv
)return this.K.Awv.apply(this,arguments);else return C.DeviceClass.Bvm.apply(this
,arguments);},Bvm:function(E){},Bw1:function(Aq){this.Awv(Aq);},UpdateAutoRegistrationMode:
function(Bcp){if(this.AutoRegistrationMode===Bcp)return;this.AutoRegistrationMode=
Bcp;A.abo([this,this.Blk,this.Bw1],0);},Ar5:function(E){if(this.K&&this.K.Ar5)return this.
K.Ar5.apply(this,arguments);else return C.DeviceClass.Bwb.apply(this,arguments);
},Bwb:function(E){A.ab5("%s",CR);},A0P:function(Aq){this.Ar5(Aq);},UpdateScanTransponder:
function(Jn,BcT,BcS){if(((this.OX.Id===Jn)&&(this.OX.TransponderType===BcT))&&(this.
OX.TransponderProtocol===BcS))return;this.OX.OnSetId(Jn);this.OX.AT2(BcT);this.OX.
AT1(BcS);A.abo([this,this.ASZ,this.A0P],0);},OS:function(E){if(this.K&&this.K.OS
)return this.K.OS.apply(this,arguments);else return C.DeviceClass.Bvx.apply(this
,arguments);},Bvx:function(E){},U8:function(Aq){this.OS(Aq);},UpdateDigitsID:function(
Bcx){if(this.A3===Bcx)return;this.A3=Bcx;A.abo([this,this.Un,this.U8],0);},PV:function(
E){if(this.K&&this.K.PV)return this.K.PV.apply(this,arguments);else return C.DeviceClass.
Bv5.apply(this,arguments);},Bv5:function(E){},U9:function(Aq){this.PV(Aq);},UpdateOffsetID:
function(BcI){if(this.AF===BcI)return;this.AF=BcI;A.abo([this,this.Uq,this.U9],0
);},AGd:function(E){if(this.K&&this.K.AGd)return this.K.AGd.apply(this,arguments
);else return C.DeviceClass.BwA.apply(this,arguments);},BwA:function(E){A.ab5("%s"
,Fc);},AI5:function(Aq){this.AGd(Aq);},UpdateWeightValue:function(AJ){if(this.K0===
AJ)return;this.K0=AJ;A.abo([this,this.AEZ,this.AI5],0);},AwV:function(E){if(this.
K&&this.K.AwV)return this.K.AwV.apply(this,arguments);else return C.DeviceClass.
BvQ.apply(this,arguments);},BvQ:function(E){},A0H:function(Aq){this.AwV(Aq);},UpdateMassUnit:
function(AJ){if(this.MassUnit===AJ)return;this.MassUnit=AJ;A.abo([this,this.ASO,
this.A0H],0);},ArF:function(E){if(this.K&&this.K.ArF)return this.K.ArF.apply(this
,arguments);else return C.DeviceClass.Bbh.apply(this,arguments);},Bbh:function(E
){},Bbw:function(Aq){this.ArF(Aq);},ArG:function(E){if(this.K&&this.K.ArG)return this.
K.ArG.apply(this,arguments);else return C.DeviceClass.Bbi.apply(this,arguments);
},Bbi:function(E){},A0C:function(Aq){this.ArG(Aq);},UpdateActiveActions:function(
AJ){if(this.Po===AJ)return;this.Po=AJ;A.abo([this,this.A8Q,this.Bbw],0);},UpdateActiveActionsOrder:
function(AJ){if(this.AuI===AJ)return;this.AuI=AJ;A.abo([this,this.ASB,this.A0C],
0);},Akq:function(E){if(this.K&&this.K.Akq)return this.K.Akq.apply(this,arguments
);else return C.DeviceClass.Bbj.apply(this,arguments);},Bbj:function(E){},BbE:function(
Aq){this.Akq(Aq);},UpdateAutoActions:function(AJ){if(this.AutoActions===AJ)return;
this.AutoActions=AJ;A.abo([this,this.A81,this.BbE],0);},AG0:function(){if(this.K&&
this.K.AG0)return this.K.AG0.apply(this,arguments);else return C.DeviceClass.BwT.
apply(this,arguments);},BwT:function(){},AsI:function(){if(this.K&&this.K.AsI)return this.
K.AsI.apply(this,arguments);else return C.DeviceClass.BwX.apply(this,arguments);
},BwX:function(){},EC:function(E){if(this.K&&this.K.EC)return this.K.EC.apply(this
,arguments);else return C.DeviceClass.Bvj.apply(this,arguments);},Bvj:function(E
){},Bw0:function(Aq){this.EC(Aq);},UpdateAnimalType:function(Eo){if(this.AnimalType===
Eo)return;this.AnimalType=Eo;A.abo([this,this.PU,this.Bw0],0);},Axj:function(E){
if(this.K&&this.K.Axj)return this.K.Axj.apply(this,arguments);else return C.DeviceClass.
Bwy.apply(this,arguments);},Bwy:function(E){},Bb8:function(Aq){this.Axj(Aq);},UpdateWeightRecordingMode:
function(BcY){if(this.WeightRecordingMode===BcY)return;this.WeightRecordingMode=
BcY;A.abo([this,this.A9Z,this.Bb8],0);},AFP:function(E){if(this.K&&this.K.AFP)return this.
K.AFP.apply(this,arguments);else return C.DeviceClass.Bv7.apply(this,arguments);
},Bv7:function(E){A.ab5("%s",LA);},A0L:function(Aq){this.AFP(Aq);},UpdatePredictedTempValue:
function(AJ){if(this.AGn===AJ)return;this.AGn=AJ;A.abo([this,this.ASU,this.A0L],
0);},SX:function(Mc){if(this.K&&this.K.SX)return this.K.SX.apply(this,arguments);
else return C.DeviceClass.BwO.apply(this,arguments);},BwO:function(Mc){},AFk:function(
E){if(this.K&&this.K.AFk)return this.K.AFk.apply(this,arguments);else return C.DeviceClass.
Bvw.apply(this,arguments);},Bvw:function(E){},AIY:function(Aq){this.AFk(Aq);},UpdateDemoMode:
function(AJ){if(this.HG===AJ)return;this.HG=AJ;A.abo([this,this.AEQ,this.AIY],0);
},AE5:function(E){if(this.K&&this.K.AE5)return this.K.AE5.apply(this,arguments);
else return C.DeviceClass.Bvd.apply(this,arguments);},Bvd:function(E){},BbA:function(
Aq){this.AE5(Aq);},UpdateAgeRegistration:function(BcH){if(this.AdS===BcH)return;
this.AdS=BcH;A.abo([this,this.A8V,this.BbA],0);},Axk:function(E){if(this.K&&this.
K.Axk)return this.K.Axk.apply(this,arguments);else return C.DeviceClass.Bwz.apply(
this,arguments);},Bwz:function(E){},Bb9:function(Aq){this.Axk(Aq);},UpdateWeightRecordingScope:
function(BcN){if(this.WeightRecordingScope===BcN)return;this.WeightRecordingScope=
BcN;A.abo([this,this.A90,this.Bb9],0);},J1:function(E){if(this.K&&this.K.J1)return this.
K.J1.apply(this,arguments);else return C.DeviceClass.BvJ.apply(this,arguments);}
,BvJ:function(E){},A0G:function(Aq){this.J1(Aq);},UpdateGender:function(L$){if(this.
Gender===L$)return;this.Gender=L$;A.abo([this,this.WG,this.A0G],0);},ArU:function(
E){if(this.K&&this.K.ArU)return this.K.ArU.apply(this,arguments);else return C.DeviceClass.
BvL.apply(this,arguments);},BvL:function(E){},AyY:function(Aq){this.ArU(Aq);},UpdateIDLastUsedMale:
function(Rs){if(this.Aq5===Rs)return;this.Aq5=Rs;A.abo([this,this.Awh,this.AyY],
0);},ArT:function(E){if(this.K&&this.K.ArT)return this.K.ArT.apply(this,arguments
);else return C.DeviceClass.BvK.apply(this,arguments);},BvK:function(E){},AyX:function(
Aq){this.ArT(Aq);},UpdateIDLastUsedFemale:function(Rs){if(this.Aq4===Rs)return;this.
Aq4=Rs;A.abo([this,this.Awg,this.AyX],0);},Zw:function(E){if(this.K&&this.K.Zw)return this.
K.Zw.apply(this,arguments);else return C.DeviceClass.Bvi.apply(this,arguments);}
,Bvi:function(E){},AIW:function(Aq){this.Zw(Aq);},UpdateAnimalListContent:function(
AJ){if(this.Kn===AJ)return;this.Kn=AJ;A.abo([this,this.AEN,this.AIW],0);},AE7:function(
E){if(this.K&&this.K.AE7)return this.K.AE7.apply(this,arguments);else return C.DeviceClass.
Bve.apply(this,arguments);},Bve:function(E){},BbB:function(Aq){this.AE7(Aq);},UpdateAlarmListAction:
function(AJ){if(this.AMh===AJ)return;this.AMh=AJ;A.abo([this,this.A8X,this.BbB],
0);},AFn:function(E){if(this.K&&this.K.AFn)return this.K.AFn.apply(this,arguments
);else return C.DeviceClass.BvE.apply(this,arguments);},BvE:function(E){},BbL:function(
Aq){this.AFn(Aq);},UpdateFlashLightInMeasureState:function(BcD){if(this.AmQ===BcD
)return;this.AmQ=BcD;A.abo([this,this.A8$,this.BbL],0);},AeW:function(E){if(this.
K&&this.K.AeW)return this.K.AeW.apply(this,arguments);else return C.DeviceClass.
Bvh.apply(this,arguments);},Bvh:function(E){},AIV:function(Aq){this.AeW(Aq);},UpdateAnimalInfoContent:
function(AJ){if(this.D_===AJ)return;this.D_=AJ;A.abo([this,this.AEM,this.AIV],0);
},AGc:function(E){if(this.K&&this.K.AGc)return this.K.AGc.apply(this,arguments);
else return C.DeviceClass.Bwu.apply(this,arguments);},Bwu:function(E){},Bb4:function(
Aq){this.AGc(Aq);},UpdateWatchListAction:function(AJ){if(this.AV2===AJ)return;this.
AV2=AJ;A.abo([this,this.A9V,this.Bb4],0);},AFp:function(E){if(this.K&&this.K.AFp
)return this.K.AFp.apply(this,arguments);else return C.DeviceClass.BvG.apply(this
,arguments);},BvG:function(E){},BbN:function(Aq){this.AFp(Aq);},UpdateFreshCowListAction:
function(AJ){if(this.AOJ===AJ)return;this.AOJ=AJ;A.abo([this,this.A9b,this.BbN],
0);},ResetActiveActions:function(G){if(this.K&&this.K.ResetActiveActions)return this.
K.ResetActiveActions.apply(this,arguments);else return C.DeviceClass.BwG.apply(this
,arguments);},BwG:function(G){},BG7:function(s){this.ResetActiveActions(s);},ResetAutoActions:
function(G){if(this.K&&this.K.ResetAutoActions)return this.K.ResetAutoActions.apply(
this,arguments);else return C.DeviceClass.BwI.apply(this,arguments);},BwI:function(
G){},BG9:function(s){this.ResetAutoActions(s);},Awt:function(E){if(this.K&&this.
K.Awt)return this.K.Awt.apply(this,arguments);else return C.DeviceClass.Bvk.apply(
this,arguments);},Bvk:function(E){},BbC:function(Aq){this.Awt(Aq);},Ar8:function(
E){if(this.K&&this.K.Ar8)return this.K.Ar8.apply(this,arguments);else return C.DeviceClass.
Bwi.apply(this,arguments);},Bwi:function(E){},BbZ:function(Aq){this.Ar8(Aq);},Ar9:
function(E){if(this.K&&this.K.Ar9)return this.K.Ar9.apply(this,arguments);else return C.
DeviceClass.Bwj.apply(this,arguments);},Bwj:function(E){},Bb0:function(Aq){this.
Ar9(Aq);},Ast:function(G){if(this.K&&this.K.Ast)return this.K.Ast.apply(this,arguments
);else return C.DeviceClass.BwL.apply(this,arguments);},BwL:function(G){},BHa:function(
s){this.Ast(s);},UpdateTemperaturesLowString:function(AJ){if(this.AG8===AJ)return;
this.AG8=AJ;A.abo([this,this.A9M,this.Bb0],0);},UpdateTemperaturesHighString:function(
AJ){if(this.AG7===AJ)return;this.AG7=AJ;A.abo([this,this.A9L,this.BbZ],0);},UpdateAnimalTypesString:
function(AJ){if(this.ABZ===AJ)return;this.ABZ=AJ;A.abo([this,this.A8Z,this.BbC],
0);},AwP:function(E){if(this.K&&this.K.AwP)return this.K.AwP.apply(this,arguments
);else return C.DeviceClass.BvI.apply(this,arguments);},BvI:function(E){},BbP:function(
Aq){this.AwP(Aq);},UpdateFreshCowsHideMeasured:function(AJ){if(this.AqS===AJ)return;
this.AqS=AJ;A.abo([this,this.A9d,this.BbP],0);},Ar0:function(E){if(this.K&&this.
K.Ar0)return this.K.Ar0.apply(this,arguments);else return C.DeviceClass.Bv1.apply(
this,arguments);},Bv1:function(E){},BbU:function(Aq){this.Ar0(Aq);},UpdateNaisIdLastUsedMale:
function(Qg){if(this.AEz===Qg)return;this.AEz=Qg;A.abo([this,this.A9t,this.BbU],
0);},ArZ:function(E){if(this.K&&this.K.ArZ)return this.K.ArZ.apply(this,arguments
);else return C.DeviceClass.Bv0.apply(this,arguments);},Bv0:function(E){},BbT:function(
Aq){this.ArZ(Aq);},UpdateNaisIdLastUsedFemale:function(Qg){if(this.AEy===Qg)return;
this.AEy=Qg;A.abo([this,this.A9s,this.BbT],0);},Aw2:function(E){if(this.K&&this.
K.Aw2)return this.K.Aw2.apply(this,arguments);else return C.DeviceClass.BvY.apply(
this,arguments);},BvY:function(E){},Ay0:function(Aq){this.Aw2(Aq);},UpdateNaisIdIncrementMale:
function(Als){if(this.AR_===Als)return;this.AR_=Als;A.abo([this,this.Awl,this.Ay0
],0);},Aw1:function(E){if(this.K&&this.K.Aw1)return this.K.Aw1.apply(this,arguments
);else return C.DeviceClass.BvX.apply(this,arguments);},BvX:function(E){},AyZ:function(
Aq){this.Aw1(Aq);},UpdateNaisIdIncrementFemale:function(Als){if(this.AR9===Als)return;
this.AR9=Als;A.abo([this,this.Awk,this.AyZ],0);},UpdateFirmware:function(){if(this.
K&&this.K.UpdateFirmware)return this.K.UpdateFirmware.apply(this,arguments);else
return C.DeviceClass.Bbo.apply(this,arguments);},Bbo:function(){},Anw:function(E
){if(this.K&&this.K.Anw)return this.K.Anw.apply(this,arguments);else return C.DeviceClass.
Bvq.apply(this,arguments);},Bvq:function(E){},BbG:function(Aq){this.Anw(Aq);},UpdateBootloaderMessage:
function(AJ){if(this.Aqs===AJ)return;this.Aqs=AJ;A.abo([this,this.A85,this.BbG],
0);},AE2:function(E){if(this.K&&this.K.AE2)return this.K.AE2.apply(this,arguments
);else return C.DeviceClass.Bu_.apply(this,arguments);},Bu_:function(E){},Bbu:function(
Aq){this.AE2(Aq);},UpdateActionListAction:function(AJ){if(this.ABR===AJ)return;this.
ABR=AJ;A.abo([this,this.A8O,this.Bbu],0);},Awr:function(E){if(this.K&&this.K.Awr
)return this.K.Awr.apply(this,arguments);else return C.DeviceClass.Bu$.apply(this
,arguments);},Bu$:function(E){},Bbv:function(Aq){this.Awr(Aq);},UpdateActionListHideMeasured:
function(AJ){if(this.Aqc===AJ)return;this.Aqc=AJ;A.abo([this,this.A8P,this.Bbv],
0);},Us:function(E){if(this.K&&this.K.Us)return this.K.Us.apply(this,arguments);
else return C.DeviceClass.Bvg.apply(this,arguments);},Bvg:function(E){},Aou:function(
Aq){this.Us(Aq);},UpdateAnimalIdGenerationMethod:function(Bc3){if(this.In===Bc3)
return;this.In=Bc3;A.abo([this,this.Anp,this.Aou],0);},AwH:function(E){if(this.K&&
this.K.AwH)return this.K.AwH.apply(this,arguments);else return C.DeviceClass.Bvy.
apply(this,arguments);},Bvy:function(E){},A0E:function(Aq){this.AwH(Aq);},UpdateDirectionOfCountingFemale:
function(Alm){if(this.ACO===Alm)return;this.ACO=Alm;A.abo([this,this.ASH,this.A0E
],0);},AwI:function(E){if(this.K&&this.K.AwI)return this.K.AwI.apply(this,arguments
);else return C.DeviceClass.Bvz.apply(this,arguments);},Bvz:function(E){},A0F:function(
Aq){this.AwI(Aq);},UpdateDirectionOfCountingMale:function(Alm){if(this.ACP===Alm
)return;this.ACP=Alm;A.abo([this,this.ASI,this.A0F],0);},AwJ:function(E){if(this.
K&&this.K.AwJ)return this.K.AwJ.apply(this,arguments);else return C.DeviceClass.
BvA.apply(this,arguments);},BvA:function(E){},AIZ:function(Aq){this.AwJ(Aq);},UpdateDirectionOfCountingUnisex:
function(Alm){if(this.Au7===Alm)return;this.Au7=Alm;A.abo([this,this.AER,this.AIZ
],0);},ArV:function(E){if(this.K&&this.K.ArV)return this.K.ArV.apply(this,arguments
);else return C.DeviceClass.BvM.apply(this,arguments);},BvM:function(E){},Aov:function(
Aq){this.ArV(Aq);},UpdateIDLastUsedUnisex:function(Rs){if(this.AjR===Rs)return;this.
AjR=Rs;A.abo([this,this.Ans,this.Aov],0);},Ar1:function(E){if(this.K&&this.K.Ar1
)return this.K.Ar1.apply(this,arguments);else return C.DeviceClass.Bv2.apply(this
,arguments);},Bv2:function(E){},A0J:function(Aq){this.Ar1(Aq);},UpdateNaisIdLastUsedUnisex:
function(Qg){if(this.Av5===Qg)return;this.Av5=Qg;A.abo([this,this.ASQ,this.A0J],
0);},Aw3:function(E){if(this.K&&this.K.Aw3)return this.K.Aw3.apply(this,arguments
);else return C.DeviceClass.BvZ.apply(this,arguments);},BvZ:function(E){},Ay1:function(
Aq){this.Aw3(Aq);},UpdateNaisIdIncrementUnisex:function(Als){if(this.AR$===Als)return;
this.AR$=Als;A.abo([this,this.Awm,this.Ay1],0);},Aks:function(E){if(this.K&&this.
K.Aks)return this.K.Aks.apply(this,arguments);else return C.DeviceClass.BvC.apply(
this,arguments);},BvC:function(E){},AyW:function(Aq){this.Aks(Aq);},UpdateEartagNrAssignmentMode:
function(Aln){if(this.EartagNrAssignmentMode===Aln)return;this.EartagNrAssignmentMode=
Aln;A.abo([this,this.Awf,this.AyW],0);},N7:function(E){if(this.K&&this.K.N7)return this.
K.N7.apply(this,arguments);else return C.DeviceClass.Bvs.apply(this,arguments);}
,Bvs:function(E){},Bw3:function(Aq){this.N7(Aq);},UpdateBreed:function(Ac0){if(this.
Breed===Ac0)return;this.Breed=Ac0;A.abo([this,this.Awb,this.Bw3],0);},AFI:function(
E){if(this.K&&this.K.AFI)return this.K.AFI.apply(this,arguments);else return C.DeviceClass.
BvU.apply(this,arguments);},BvU:function(E){},Bw6:function(Aq){this.AFI(Aq);},UpdateMiddlewareVersions:
function(Qi,A1r,A1s,A1z,A1g){this.SG.OnSetTimestamp(Qi);this.SG.AFD(A1r);this.SG.
AFJ(A1s);this.SG.AFT(A1z);this.SG.AFj(A1g);A.abo([this,this.BlP,this.Bw6],0);},AFC:
function(E){if(this.K&&this.K.AFC)return this.K.AFC.apply(this,arguments);else return C.
DeviceClass.BvO.apply(this,arguments);},BvO:function(E){},Bw5:function(Aq){this.
AFC(Aq);},UpdateMainboardVersions:function(Qi,A1p,A1q,A1o,A1F,A1G,A1E){this.Q2.OnSetTimestamp(
Qi);this.Q2.AFA(A1p);this.Q2.AFB(A1q);this.Q2.AFz(A1o);this.Q2.AF7(A1F);this.Q2.
AF8(A1G);this.Q2.AF6(A1E);A.abo([this,this.BlN,this.Bw5],0);},AF9:function(E){if(
this.K&&this.K.AF9)return this.K.AF9.apply(this,arguments);else return C.DeviceClass.
Bwl.apply(this,arguments);},Bwl:function(E){},Bxa:function(Aq){this.AF9(Aq);},UpdateTorchboardVersions:
function(Qi,A1p,A1q,A1o,A1F,A1G,A1E){this.S7.OnSetTimestamp(Qi);this.S7.AFA(A1p);
this.S7.AFB(A1q);this.S7.AFz(A1o);this.S7.AF7(A1F);this.S7.AF8(A1G);this.S7.AF6(
A1E);A.abo([this,this.Bmb,this.Bxa],0);},AFa:function(E){if(this.K&&this.K.AFa)return this.
K.AFa.apply(this,arguments);else return C.DeviceClass.Bvr.apply(this,arguments);
},Bvr:function(E){},Bw2:function(Aq){this.AFa(Aq);},UpdateBootloaderVersions:function(
Qi,A1r,A1s,A1z,A1g){this.R7.OnSetTimestamp(Qi);this.R7.AFD(A1r);this.R7.AFJ(A1s);
this.R7.AFT(A1z);this.R7.AFj(A1g);A.abo([this,this.Bln,this.Bw2],0);},AFl:function(
E){if(this.K&&this.K.AFl)return this.K.AFl.apply(this,arguments);else return C.DeviceClass.
BvB.apply(this,arguments);},BvB:function(E){},BbK:function(Aq){this.AFl(Aq);},UpdateDryCowListAction:
function(AJ){if(this.AN7===AJ)return;this.AN7=AJ;A.abo([this,this.A89,this.BbK],
0);},AJO:function(A1h){if(this.K&&this.K.AJO)return this.K.AJO.apply(this,arguments
);else return C.DeviceClass.Bxm.apply(this,arguments);},Bxm:function(A1h){return false;
},AE_:function(E){if(this.K&&this.K.AE_)return this.K.AE_.apply(this,arguments);
else return C.DeviceClass.Bvo.apply(this,arguments);},Bvo:function(E){},AIX:function(
Aq){this.AE_(Aq);},UpdateBirthListView:function(AJ){if(this.Aqq===AJ)return;this.
Aqq=AJ;A.abo([this,this.AEO,this.AIX],0);},BatchResetBirthNoticePending:function(
){var O;var AiV=0;var Adi=A._GetAutoObject(C.Device).An.Filter;var Be=A._GetAutoObject(
C.Helper).AON();A._GetAutoObject(C.Device).An.Bk(Be);for(O=0;O<A._GetAutoObject(
C.Device).An.B9();O++){A._GetAutoObject(C.Helper).GS(O);A._GetAutoObject(C.Helper
).W.Ae5(false);A._GetAutoObject(C.Helper).W.Cs(A._GetAutoObject(C.Device).An);AiV++;
}A._GetAutoObject(C.Device).An.Bk(Adi);return AiV;},UpdateTransferProgress:function(
AJ){if(this.AxV===AJ)return;this.AxV=AJ;A.abo([this,this.AS3,this.A0S],0);},AF_:
function(E){if(this.K&&this.K.AF_)return this.K.AF_.apply(this,arguments);else return C.
DeviceClass.Bwm.apply(this,arguments);},Bwm:function(E){A.ab5("%s",Qa);},A0S:function(
Aq){this.AF_(Aq);},UpdateTransferTarget:function(AJ){if(this.Afs===AJ)return;this.
Afs=AJ;A.abo([this,this.A9P,this.Bb1],0);},Ar_:function(E){if(this.K&&this.K.Ar_
)return this.K.Ar_.apply(this,arguments);else return C.DeviceClass.Bwn.apply(this
,arguments);},Bwn:function(E){A.ab5("%s",J_);},Bb1:function(Aq){this.Ar_(Aq);},AsH:
function(){if(this.K&&this.K.AsH)return this.K.AsH.apply(this,arguments);else return C.
DeviceClass.BwW.apply(this,arguments);},BwW:function(){},Aw7:function(E){if(this.
K&&this.K.Aw7)return this.K.Aw7.apply(this,arguments);else return C.DeviceClass.
Bv8.apply(this,arguments);},Bv8:function(E){},A0M:function(Aq){this.Aw7(Aq);},UpdatePremisesID:
function(Rs){if(this.PZ===Rs)return;this.PZ=Rs;A.abo([this,this.ASV,this.A0M],0);
},Aw0:function(E){if(this.K&&this.K.Aw0)return this.K.Aw0.apply(this,arguments);
else return C.DeviceClass.BvW.apply(this,arguments);},BvW:function(E){},AI2:function(
Aq){this.Aw0(Aq);},UpdateMotherSelectionDriedOffFilter:function(AJ){if(this.Ab0===
AJ)return;this.Ab0=AJ;A.abo([this,this.AEV,this.AI2],0);},AFq:function(E){if(this.
K&&this.K.AFq)return this.K.AFq.apply(this,arguments);else return C.DeviceClass.
BvH.apply(this,arguments);},BvH:function(E){},BbO:function(Aq){this.AFq(Aq);},UpdateFreshCowSpan:
function(AJ){if(this.AqR===AJ)return;this.AqR=AJ;A.abo([this,this.A9c,this.BbO],
0);},UpdateUSBDevice:function(BcU,BcV,BcL){if(((this.P4.Z7===BcU)&&(this.P4.AsS===
BcV))&&(this.P4.Ask===BcL))return;this.P4.AT3(BcU);this.P4.AT5(BcV);this.P4.ATF(
BcL);A.abo([this,this.Ur,this.U$],0);},Axh:function(E){if(this.K&&this.K.Axh)return this.
K.Axh.apply(this,arguments);else return C.DeviceClass.Bwq.apply(this,arguments);
},Bwq:function(E){A.ab5("%s",E6);},U$:function(Aq){this.Axh(Aq);},AxL:function(){
if(this.K&&this.K.AxL)return this.K.AxL.apply(this,arguments);else return C.DeviceClass.
BwQ.apply(this,arguments);},BwQ:function(){},Ari:function(){if(this.K&&this.K.Ari
)return this.K.Ari.apply(this,arguments);else return C.DeviceClass.Bu9.apply(this
,arguments);},Bu9:function(){return false;},AqC:function(){if(this.K&&this.K.AqC
)return this.K.AqC.apply(this,arguments);else return C.DeviceClass.Bu4.apply(this
,arguments);},Bu4:function(){},AFW:function(E){if(this.K&&this.K.AFW)return this.
K.AFW.apply(this,arguments);else return C.DeviceClass.Bwc.apply(this,arguments);
},Bwc:function(E){},Bw9:function(Aq){this.AFW(Aq);},UpdateSerialNumber:function(
AJ){if(this.AhH===AJ)return;this.AhH=AJ;A.abo([this,this.Bl2,this.Bw9],0);},Aws:
function(E){if(this.K&&this.K.Aws)return this.K.Aws.apply(this,arguments);else return C.
DeviceClass.Bvf.apply(this,arguments);},Bvf:function(E){},A0D:function(Aq){this.
Aws(Aq);},UpdateAnimalIdAutoGenerationMethod:function(Bc2){if(this.Agy===Bc2)return;
this.Agy=Bc2;A.abo([this,this.ASC,this.A0D],0);},ACC:function(){return false;},AGB:
function(){return false;},AFY:function(E){if(this.K&&this.K.AFY)return this.K.AFY.
apply(this,arguments);else return C.DeviceClass.Bwd.apply(this,arguments);},Bwd:
function(E){},BbY:function(Aq){this.AFY(Aq);},UpdateShutdownTimer:function(AJ){if(
this.AVb===AJ)return;this.AVb=AJ;A.abo([this,this.A9I,this.BbY],0);},Asu:function(
G){if(this.K&&this.K.Asu)return this.K.Asu.apply(this,arguments);else return C.DeviceClass.
BwM.apply(this,arguments);},BwM:function(G){},BHb:function(s){this.Asu(s);},Asb:
function(E){if(this.K&&this.K.Asb)return this.K.Asb.apply(this,arguments);else return C.
DeviceClass.Bww.apply(this,arguments);},Bww:function(E){},Bb6:function(Aq){this.
Asb(Aq);},Asc:function(E){if(this.K&&this.K.Asc)return this.K.Asc.apply(this,arguments
);else return C.DeviceClass.Bwx.apply(this,arguments);},Bwx:function(E){},Bb7:function(
Aq){this.Asc(Aq);},UpdateWeightGainsLowString:function(AJ){if(this.AHs===AJ)return;
this.AHs=AJ;A.abo([this,this.A9Y,this.Bb7],0);},UpdateWeightGainsHighString:function(
AJ){if(this.AHr===AJ)return;this.AHr=AJ;A.abo([this,this.A9X,this.Bb6],0);},Awu:
function(E){if(this.K&&this.K.Awu)return this.K.Awu.apply(this,arguments);else return C.
DeviceClass.Bvl.apply(this,arguments);},Bvl:function(E){},BbD:function(Aq){this.
Awu(Aq);},UpdateAnimalTypesWeightGainsString:function(AJ){if(this.AB0===AJ)return;
this.AB0=AJ;A.abo([this,this.A80,this.BbD],0);},Asa:function(E){if(this.K&&this.
K.Asa)return this.K.Asa.apply(this,arguments);else return C.DeviceClass.Bwv.apply(
this,arguments);},Bwv:function(E){},Bb5:function(Aq){this.Asa(Aq);},Asd:function(
E){if(this.K&&this.K.Asd)return this.K.Asd.apply(this,arguments);else return C.DeviceClass.
BwB.apply(this,arguments);},BwB:function(E){},Bb_:function(Aq){this.Asd(Aq);},UpdateWeightValueBirthString:
function(AJ){if(this.AHv===AJ)return;this.AHv=AJ;A.abo([this,this.A91,this.Bb_],
0);},UpdateWeightGainsAverageString:function(AJ){if(this.AHq===AJ)return;this.AHq=
AJ;A.abo([this,this.A9W,this.Bb5],0);},AwK:function(E){if(this.K&&this.K.AwK)return this.
K.AwK.apply(this,arguments);else return C.DeviceClass.BvD.apply(this,arguments);
},BvD:function(E){},Bw4:function(Aq){this.AwK(Aq);},UpdateEvaluationAnimalType:function(
Eo){if(this.ACW===Eo)return;this.ACW=Eo;A.abo([this,this.Blx,this.Bw4],0);},UpdateStartScreen:
function(AJ){if(this.AxN===AJ)return;this.AxN=AJ;A.abo([this,this.Bl3,this.Bw_],
0);},Aw$:function(E){if(this.K&&this.K.Aw$)return this.K.Aw$.apply(this,arguments
);else return C.DeviceClass.Bwe.apply(this,arguments);},Bwe:function(E){},Bw_:function(
Aq){this.Aw$(Aq);},AEa:function(){if(this.K&&this.K.AEa)return this.K.AEa.apply(
this,arguments);else return C.DeviceClass.Bu7.apply(this,arguments);},Bu7:function(
){return 1;},AEb:function(){if(this.K&&this.K.AEb)return this.K.AEb.apply(this,arguments
);else return C.DeviceClass.Bu8.apply(this,arguments);},Bu8:function(){return 1;
},GetCommitCount:function(){return 2242;},GetCommitEpoch:function(){return 1770735487;
},GetCommitHash:function(){return A.kR.Bim;},GetVersionMajor:function(){return 0;
},GetVersionMinor:function(){return 9;},GetVersionRev:function(){return 13;},AFH:
function(E){if(this.K&&this.K.AFH)return this.K.AFH.apply(this,arguments);else return C.
DeviceClass.BvS.apply(this,arguments);},BvS:function(E){},BbS:function(Aq){this.
AFH(Aq);},UpdateMaximumAgeNewOnFarm:function(AJ){if(this.Av0===AJ)return;this.Av0=
AJ;A.abo([this,this.A9r,this.BbS],0);},Axf:function(E){if(this.K&&this.K.Axf)return this.
K.Axf.apply(this,arguments);else return C.DeviceClass.Bwo.apply(this,arguments);
},Bwo:function(E){},A0T:function(Aq){this.Axf(Aq);},UpdateTransponderAssignmentIdChangeMethod:
function(Azd){if(this.Ak1===Azd)return;this.Ak1=Azd;A.abo([this,this.AS4,this.A0T
],0);},BatchResetPurchasedNoticePending:function(){var O;var AiV=0;var Adi=A._GetAutoObject(
C.Device).An.Filter;var Be=A._GetAutoObject(C.Helper).Avv();A._GetAutoObject(C.Device
).An.Bk(Be);for(O=0;O<A._GetAutoObject(C.Device).An.B9();O++){A._GetAutoObject(C.
Helper).GS(O);A._GetAutoObject(C.Helper).W.Ae5(false);A._GetAutoObject(C.Helper).
W.Cs(A._GetAutoObject(C.Device).An);AiV++;}A._GetAutoObject(C.Device).An.Bk(Adi);
return AiV;},BnQ:function(E){},UpdateMassRecordingAutomatic:function(AJ){if(this.
ARW===AJ)return;this.ARW=AJ;A.abo([this,this.BlO,this.BnQ],0);},Nt:function(E){if(
this.K&&this.K.Nt)return this.K.Nt.apply(this,arguments);else return C.DeviceClass.
BwC.apply(this,arguments);},BwC:function(E){},Bxb:function(Aq){this.Nt(Aq);},UpdateWhereAbouts:
function(AfO){if(this.WhereAbouts===AfO)return;this.WhereAbouts=AfO;A.abo([this,
this.Awp,this.Bxb],0);},ArI:function(E){if(this.K&&this.K.ArI)return this.K.ArI.
apply(this,arguments);else return C.DeviceClass.Bva.apply(this,arguments);},Bva:
function(E){},Bbx:function(Aq){this.ArI(Aq);},ArJ:function(E){if(this.K&&this.K.
ArJ)return this.K.ArJ.apply(this,arguments);else return C.DeviceClass.Bvb.apply(
this,arguments);},Bvb:function(E){},Bby:function(Aq){this.ArJ(Aq);},UpdateActiveMassRecordingFields:
function(AJ){if(this.ABS===AJ)return;this.ABS=AJ;A.abo([this,this.A8R,this.Bbx],
0);},UpdateActiveMassRecordingFieldsOrder:function(AJ){if(this.ABT===AJ)return;this.
ABT=AJ;A.abo([this,this.A8S,this.Bby],0);},Asr:function(G){if(this.K&&this.K.Asr
)return this.K.Asr.apply(this,arguments);else return C.DeviceClass.BwH.apply(this
,arguments);},BwH:function(G){},BG8:function(s){this.Asr(s);},AFF:function(E){if(
this.K&&this.K.AFF)return this.K.AFF.apply(this,arguments);else return C.DeviceClass.
BvP.apply(this,arguments);},BvP:function(E){},AI0:function(Aq){this.AFF(Aq);},UpdateMassRecordingDateOfBirthMandatory:
function(AJ){if(this.AeP===AJ)return;this.AeP=AJ;A.abo([this,this.AES,this.AI0],
0);},AFE:function(E){this.UpdateMassRecordingCounter(E);},UpdateMassRecordingCounter:
function(AJ){if(this.AvY===AJ)return;this.AvY=AJ;A.abo([this,this.A9p,this.AFE],
0);},X8:function(){if(this.K&&this.K.X8)return this.K.X8.apply(this,arguments);else
return C.DeviceClass.Bu2.apply(this,arguments);},Bu2:function(){return false;},Aqn:
function(){if(this.K&&this.K.Aqn)return this.K.Aqn.apply(this,arguments);else return C.
DeviceClass.Bu1.apply(this,arguments);},Bu1:function(){return false;},Aqm:function(
){if(this.K&&this.K.Aqm)return this.K.Aqm.apply(this,arguments);else return C.DeviceClass.
Bu0.apply(this,arguments);},Bu0:function(){return false;},Aqo:function(){if(this.
K&&this.K.Aqo)return this.K.Aqo.apply(this,arguments);else return C.DeviceClass.
Bu3.apply(this,arguments);},Bu3:function(){return false;},AwX:function(E){if(this.
K&&this.K.AwX)return this.K.AwX.apply(this,arguments);else return C.DeviceClass.
BvR.apply(this,arguments);},BvR:function(E){},BbR:function(Aq){this.AwX(Aq);},UpdateMaxWeightValuePrecision:
function(AJ){if(this.OR===AJ)return;this.OR=AJ;A.abo([this,this.A9q,this.BbR],0);
},Aw4:function(E){if(this.K&&this.K.Aw4)return this.K.Aw4.apply(this,arguments);
else return C.DeviceClass.Bv3.apply(this,arguments);},Bv3:function(E){},BbV:function(
Aq){this.Aw4(Aq);},UpdateNoNaisIdListActions:function(AJ){if(this.ASl===AJ)return;
this.ASl=AJ;A.abo([this,this.A9u,this.BbV],0);},ResetNoNaisIdListActions:function(
G){if(this.K&&this.K.ResetNoNaisIdListActions)return this.K.ResetNoNaisIdListActions.
apply(this,arguments);else return C.DeviceClass.BwJ.apply(this,arguments);},BwJ:
function(G){},BG_:function(s){this.ResetNoNaisIdListActions(s);},Aw5:function(E){
if(this.K&&this.K.Aw5)return this.K.Aw5.apply(this,arguments);else return C.DeviceClass.
Bv4.apply(this,arguments);},Bv4:function(E){},BbW:function(Aq){this.Aw5(Aq);},UpdateNoTransponderListActions:
function(AJ){if(this.ASq===AJ)return;this.ASq=AJ;A.abo([this,this.A9v,this.BbW],
0);},ResetNoTransponderListActions:function(G){if(this.K&&this.K.ResetNoTransponderListActions
)return this.K.ResetNoTransponderListActions.apply(this,arguments);else return C.
DeviceClass.BwK.apply(this,arguments);},BwK:function(G){},BG$:function(s){this.ResetNoTransponderListActions(
s);},Axm:function(E){if(this.K&&this.K.Axm)return this.K.Axm.apply(this,arguments
);else return C.DeviceClass.BwD.apply(this,arguments);},BwD:function(E){},Bb$:function(
Aq){this.Axm(Aq);},UpdateYoungNoTransponderListActions:function(AJ){if(this.AWf===
AJ)return;this.AWf=AJ;A.abo([this,this.A93,this.Bb$],0);},ResetYoungNoTransponderListActions:
function(G){if(this.K&&this.K.ResetYoungNoTransponderListActions)return this.K.ResetYoungNoTransponderListActions.
apply(this,arguments);else return C.DeviceClass.BwN.apply(this,arguments);},BwN:
function(G){},BHc:function(s){this.ResetYoungNoTransponderListActions(s);},Axg:function(
E){if(this.K&&this.K.Axg)return this.K.Axg.apply(this,arguments);else return C.DeviceClass.
Bwp.apply(this,arguments);},Bwp:function(E){},A0U:function(Aq){this.Axg(Aq);},UpdateTransponderUnlinkIdChangeMethod:
function(Azd){if(this.An5===Azd)return;this.An5=Azd;A.abo([this,this.AS5,this.A0U
],0);},Asq:function(FQ,AoA,AJl){if(this.K&&this.K.Asq)return this.K.Asq.apply(this
,arguments);else return C.DeviceClass.BwF.apply(this,arguments);},BwF:function(FQ
,AoA,AJl){this.FU.FD();this.FU.B6=FQ;this.FU.AgL=AoA;this.FU.AVa=AJl;this.FU.E4(
1);A._GetAutoObject(C.Device).AZ(110,true,A.jV,0,[this,this.BA_]);},BA_:function(
G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))
A.aaS([this,this.BCN],this);},BCN:function(G){this.FU.E4(2);this.AxL();A._GetAutoObject(
C.Device).AZ(110,false,A.jV,0,null);},AE$:function(E){if(this.K&&this.K.AE$)return this.
K.AE$.apply(this,arguments);else return C.DeviceClass.Bvp.apply(this,arguments);
},Bvp:function(E){},BbF:function(Aq){this.AE$(Aq);},UpdateBirthRegistrationsListResetOnExport:
function(AJ){if(this.AM2===AJ)return;this.AM2=AJ;A.abo([this,this.A83,this.BbF],
0);},AFQ:function(E){if(this.K&&this.K.AFQ)return this.K.AFQ.apply(this,arguments
);else return C.DeviceClass.Bv9.apply(this,arguments);},Bv9:function(E){},BbX:function(
Aq){this.AFQ(Aq);},UpdatePurchasedListResetOnExport:function(AJ){if(this.AUo===AJ
)return;this.AUo=AJ;A.abo([this,this.A9x,this.BbX],0);},Bpc:function(){},AwC:function(
E){if(this.K&&this.K.AwC)return this.K.AwC.apply(this,arguments);else return C.DeviceClass.
Bvv.apply(this,arguments);},Bvv:function(E){},BbI:function(Aq){this.AwC(Aq);},UpdateCountry:
function(FQ){if(this.B6===FQ)return;this.B6=FQ;A.abo([this,this.A87,this.BbI],0);
},AEL:function(){return this.Im;},Av$:function(){return this.Aba;},Awc:function(
){return this.AmD;},ASY:function(){return this.ScanState;},AET:function(){return this.
MeasureState;},AEX:function(){return this.Ly;},A9l:function(){return this.Language;
},ArB:function(){return this.TemperatureUnit;},A86:function(){return this.AM9;},
ASP:function(){return this.AEx;},Awo:function(){return this.OverlayMenu;},A9Q:function(
){return this.AcJ;},AS0:function(){return this.SyncState;},A9R:function(){return this.
AsT;},AEY:function(){return this.AV0;},ASX:function(){return this.RatingMode;},Ary:
function(){return this.AmR;},AS2:function(){return this.AVE;},BlV:function(){return this.
AUp;},Blk:function(){return this.AutoRegistrationMode;},ASZ:function(){return this.
OX;},Un:function(){return this.A3;},Uq:function(){return this.AF;},AEZ:function(
){return this.K0;},ASO:function(){return this.MassUnit;},A8Q:function(){return this.
Po;},ASB:function(){return this.AuI;},A81:function(){return this.AutoActions;},PU:
function(){return this.AnimalType;},A9Z:function(){return this.WeightRecordingMode;
},ASU:function(){return this.AGn;},AEQ:function(){return this.HG;},A8V:function(
){return this.AdS;},A90:function(){return this.WeightRecordingScope;},WG:function(
){return this.Gender;},Awh:function(){return this.Aq5;},Awg:function(){return this.
Aq4;},AEN:function(){return this.Kn;},A8X:function(){return this.AMh;},A8$:function(
){return this.AmQ;},AEM:function(){return this.D_;},A9V:function(){return this.AV2;
},A9b:function(){return this.AOJ;},A8Z:function(){return this.ABZ;},A9L:function(
){return this.AG7;},A9M:function(){return this.AG8;},A9d:function(){return this.
AqS;},A9t:function(){return this.AEz;},A9s:function(){return this.AEy;},Awl:function(
){return this.AR_;},Awk:function(){return this.AR9;},A85:function(){return this.
Aqs;},A8O:function(){return this.ABR;},A8P:function(){return this.Aqc;},Anp:function(
){return this.In;},ASH:function(){return this.ACO;},ASI:function(){return this.ACP;
},AER:function(){return this.Au7;},Ans:function(){return this.AjR;},ASQ:function(
){return this.Av5;},Awm:function(){return this.AR$;},Awf:function(){return this.
EartagNrAssignmentMode;},Awb:function(){return this.Breed;},BlP:function(){return this.
SG;},BlN:function(){return this.Q2;},Bmb:function(){return this.S7;},Bln:function(
){return this.R7;},A89:function(){return this.AN7;},AEO:function(){return this.Aqq;
},AS3:function(){return this.AxV;},A9P:function(){return this.Afs;},ASV:function(
){return this.PZ;},AEV:function(){return this.Ab0;},A9c:function(){return this.AqR;
},Ur:function(){return this.P4;},Bl2:function(){return this.AhH;},ASC:function(){
return this.Agy;},A9I:function(){return this.AVb;},A9X:function(){return this.AHr;
},A9Y:function(){return this.AHs;},A80:function(){return this.AB0;},A9W:function(
){return this.AHq;},A91:function(){return this.AHv;},Blx:function(){return this.
ACW;},Bl3:function(){return this.AxN;},A9r:function(){return this.Av0;},AS4:function(
){return this.Ak1;},BlO:function(){return this.ARW;},Awp:function(){return this.
WhereAbouts;},A8R:function(){return this.ABS;},A8S:function(){return this.ABT;},
AES:function(){return this.AeP;},A9p:function(){return this.AvY;},A9q:function(){
return this.OR;},A9u:function(){return this.ASl;},A9v:function(){return this.ASq;
},A93:function(){return this.AWf;},AS5:function(){return this.An5;},A83:function(
){return this.AM2;},A9x:function(){return this.AUo;},A87:function(){return this.
B6;},_Init:function(aArg){C.Table._Init.call(this.An={I:this},0);C.Table._Init.call(
this.Bt={I:this},0);A.Core.Baf._Init.call(this.AnN={I:this},0);C.Table._Init.call(
this.Ps={I:this},0);this.__proto__=C.DeviceClass;this.An.OnSetId(0);this.Bt.OnSetId(
1);this.Ps.OnSetId(3);this.OX=A._NewObject(C.Transponder,0);this.SG=A._NewObject(
C.AxK,0);this.Q2=A._NewObject(C.Avy,0);this.S7=A._NewObject(C.Avy,0);this.R7=A._NewObject(
C.AxK,0);this.P4=A._NewObject(C.AVV,0);this.FU=A._NewObject(C.V0,0);var J$=this.
_variants();if(J$){this.K={};J$._Init.call(this,aArg);}A.h7++;},_Done:function(){
if(this.K)this.K._Done.call(this);this.__proto__=null;this.An._Done();this.Bt._Done(
);this.AnN._Done();this.Ps._Done();A.h7--;},_ReInit:function(){this.An._ReInit();
this.Bt._ReInit();this.AnN._ReInit();this.Ps._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.OX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.SG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q2)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.S7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
R7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.P4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.FU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Bt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.DeviceClass._variants();},K:null,I:null,_cycle:0,_observers:null,
_className:"Device::DeviceClass"};C.Device={_Init:function(){C.DeviceClass._Init.
call(this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null
};C.ScreenType={UNDEFINED:0,Sleep:1,Boot:2,Home:3,Charge:4,Sync:5,Settings:6,EditAnimalData:
7,AnimalList:8,AnimalListFilter:9,AnimalActionTemperature:10,AnimalActionRate:11
,AlarmList:12,ControlMeasure:13,ControlList:14,RangeTest:15,DateTimeSettings:16,
TemperatureSettings:17,DeviceSettings:18,RegistrationSettings:19,WatchList:20,AnimalActionWeighing:
21,UnitsSettings:22,WeightGainSettings:23,AnimalActionActions:24,EvaluationMenuMain:
25,NewAnimals:26,MassRecordingScreen:27,NewAnimalManualData:28,AnimalActionUnregister:
29,AnimalActionNewbornCare:30,NewAnimalTransponderData:31,SetTransponderScreen:32
,WeightListScreen:33,AutoActionScanScreen:34,ManualActionScanScreen:35,AnimalSingleInfoScreen:
36,InitializationSettings:37,ControlledPowerOff:38,ChargeWarning:39,AlarmListFilter:
40,WatchListFilter:41,DataAcquisitionSettings:42,FreshCowList:43,FreshCowListFilter:
44,SetSaveTransponderScreen:45,NoTransponderList:46,NoTransponderListFilter:47,AnimalActionPerished:
48,NewAnimalSetTransponderScreen:49,AnimalMultiInfoScreen:50,ActionList:51,ActionListFilter:
52,Update:53,NewAnimalCalvingData:54,NewAnimalsSetTransponderScreen:55,EvaluationTemperatures:
56,EvaluationWeights:57,EvaluationRatings:58,EvaluationLosses:59,TemperatureMeasurement:
60,DryCowList:61,DryCowListFilter:62,DeviceMain:63,DeviceService:64,DeviceCheck:
65,EvaluationMenuWeights:66,EvaluationBirthWeights:67,EvaluationWeightsRecent:68
,ListsMain:69,ListsIdManagement:70,NoNaisIdList:71,NoNaisIdListFilter:72,RegistrationsListFilter:
73,BirthRegistrationsList:74,AnimalRegistrationDetails:75,PremisesSettings:76,NewMenu:
77,NewAnimalLoss:78,MotherScanScreen:79,SetSaveNaisIdScreen:80,EditAnimalDataNaisId:
81,DeviceInfo:82,DeviceDatamanagement:83,AnimalEvaluationFilter:84,YoungNoTransponderList:
85,YoungNoTransponderListFilter:86,RegistrationPresettingsSettings:87,RegistrationAutomaticSettings:
88,TransponderAssignmentSettings:89,PurchasedAnimalsList:90,TextInput:91,DeviceAnimalDataMenu:
92,DeviceDeviceDataMenu:93,AnimalActions:94,TransponderUnlinkSettings:95,LAST:96
};C.Operator={Equal:0,None:1,Greater:2,Less:3,Contains:4,Unequal:5};C.MeasureState={
Idle:0,Progress:1,Prediction:2,Ready:3,Error:4,LAST:5};C.StringFilterCriterion={
A6:A.jV,Abq:function(){var Aw=A._NewObject(C.StringFilterCriterion,0);Aw.E9(this
);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.StringFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.StringFilterCriterion;},_className:"Device::StringFilterCriterion"
};C.Table={CE:function(Ad,Bc){if(this.K&&this.K.CE)return this.K.CE.apply(this,arguments
);else return C.ITable.CE.apply(this,arguments);},H6:function(Ad,Bc){if(this.K&&
this.K.H6)return this.K.H6.apply(this,arguments);else return C.ITable.H6.apply(this
,arguments);},OnSetId:function(E){if(this.K&&this.K.OnSetId)return this.K.OnSetId.
apply(this,arguments);else return C.ITable.OnSetId.apply(this,arguments);},B9:function(
){if(this.K&&this.K.B9)return this.K.B9.apply(this,arguments);else return C.ITable.
B9.apply(this,arguments);},Bk:function(E){if(this.K&&this.K.Bk)return this.K.Bk.
apply(this,arguments);else return C.ITable.Bk.apply(this,arguments);},V7:function(
Ad,Bc){if(this.K&&this.K.V7)return this.K.V7.apply(this,arguments);else return C.
ITable.V7.apply(this,arguments);},Sq:function(Ad,Bc){if(this.K&&this.K.Sq)return this.
K.Sq.apply(this,arguments);else return C.ITable.Sq.apply(this,arguments);},QE:function(
){if(this.K&&this.K.QE)return this.K.QE.apply(this,arguments);else return C.ITable.
QE.apply(this,arguments);},QI:function(AoN){if(this.K&&this.K.QI)return this.K.QI.
apply(this,arguments);else return C.ITable.QI.apply(this,arguments);},AbK:function(
){if(this.K&&this.K.AbK)return this.K.AbK.apply(this,arguments);else return C.ITable.
AbK.apply(this,arguments);},ZR:function(Ad,Bc,Dx){if(this.K&&this.K.ZR)return this.
K.ZR.apply(this,arguments);else return C.ITable.ZR.apply(this,arguments);},HS:function(
Ad,Bc,Dx){if(this.K&&this.K.HS)return this.K.HS.apply(this,arguments);else return C.
ITable.HS.apply(this,arguments);},ZQ:function(Ad,Bc,Dx){if(this.K&&this.K.ZQ)return this.
K.ZQ.apply(this,arguments);else return C.ITable.ZQ.apply(this,arguments);},Ob:function(
Ad,Bc,Dx){if(this.K&&this.K.Ob)return this.K.Ob.apply(this,arguments);else return C.
ITable.Ob.apply(this,arguments);},LZ:function(aColumn,A9){if(this.K&&this.K.LZ)return this.
K.LZ.apply(this,arguments);else return C.ITable.LZ.apply(this,arguments);},KS:function(
Ad,Bc){if(this.K&&this.K.KS)return this.K.KS.apply(this,arguments);else return C.
ITable.KS.apply(this,arguments);},UF:function(Ad,Bc,Dx){if(this.K&&this.K.UF)return this.
K.UF.apply(this,arguments);else return C.ITable.UF.apply(this,arguments);},Aes:function(
aColumn,A9){if(this.K&&this.K.Aes)return this.K.Aes.apply(this,arguments);else return C.
ITable.Aes.apply(this,arguments);},FD:function(){if(this.K&&this.K.FD)return this.
K.FD.apply(this,arguments);else return C.ITable.FD.apply(this,arguments);},AjH:function(
aColumn,A9){if(this.K&&this.K.AjH)return this.K.AjH.apply(this,arguments);else return C.
ITable.AjH.apply(this,arguments);},Ael:function(aColumn,A9){if(this.K&&this.K.Ael
)return this.K.Ael.apply(this,arguments);else return C.ITable.Ael.apply(this,arguments
);},HL:function(){if(this.K&&this.K.HL)return this.K.HL.apply(this,arguments);else
return C.ITable.HL.apply(this,arguments);},QL:function(){if(this.K&&this.K.QL)return this.
K.QL.apply(this,arguments);else return C.ITable.QL.apply(this,arguments);},_Init:
function(aArg){C.ITable._Init.call(this,aArg);this.__proto__=C.Table;var J$=this.
_variants();if(J$){this.K={};J$._Init.call(this,aArg);}},_Done:function(){if(this.
K)this.K._Done.call(this);this.__proto__=C.ITable;C.ITable._Done.call(this);},_ReInit:
function(){C.ITable._ReInit.call(this);if(this.K)this.K._ReInit.call(this);},_Mark:
function(D){C.ITable._Mark.call(this,D);if(this.K)this.K._Mark(D);},_variants:function(
){return A.acq.Table._variants();},K:null,_className:"Device::Table"};C.TableId={
Animal:0,Rating:1,Undefined:2,CalfDeregistrations:3};C.ScanState={Idle:0,Progress:
1,IdScanned:2,NotFound:3,Error:4,LAST:5};C.RatedAttribute={None:0,Feed:1,Appearance:
2,Respiratory:3,Faeces:4};C.ConverterClass={Na:null,AkY:function(AoL){var BdB;var
Auu=this.AVu(AoL/100,0,A._GetAutoObject(C.Device).TemperatureUnit);BdB=A.abk(Auu
,0,1);return BdB;},Bap:function(NA){if(NA<=0)return 0;else if(NA<=1)return 5;else
if(NA<=2)return 3;else if(NA<=4)return 2;else if(NA<=6)return 1;else if(NA<=8)return 4;
else return 0;},Ad1:function(NA){var a=0;switch(NA){case 3:a=2;break;case 2:a=4;
break;case 1:a=6;break;case 0:a=0;break;case 4:a=8;break;case 5:a=1;break;default:
A.ab5("%s",Oh);}return a;},AsJ:function(Eo,Rw){var NC=A._GetAutoObject(C.Converter
).Ajk(Rw,Eo);switch(NC){case 3:return 1;case 2:return 2;case 1:return 3;case 0:return 4;
default:throw new Error(Qb+NC.toFixed());}},AhP:function(){var B;var D9=A._NewObject(
A.Core.Bq,0).Initialize(A._GetAutoObject(C.Helper).Dr());D9.AnB(0);D9.AnE(0);D9.
AnH(0);return((B=(D9.JZ()|0))<0)?B+0x100000000:B;},A6k:function(Ats){var CN;switch(
Ats){case 36:CN=MR;break;case 40:CN=Tg;break;case 56:CN=UX;break;case 70:CN=Aaa;
break;case 100:CN=Xc;break;case 124:CN=Iw;break;case 156:CN=UY;break;case 158:CN=
Aab;break;case 191:CN=UZ;break;case 196:CN=Aac;break;case 203:CN=Xd;break;case 208:
CN=Aad;break;case 233:CN=Aae;break;case 246:CN=U0;break;case 250:CN=Xe;break;case
276:CN=O9;break;case 300:CN=Aaf;break;case 348:CN=Oi;break;case 372:CN=Rn;break;
case 380:CN=Xf;break;case 392:CN=Xg;break;case 428:CN=U1;break;case 440:CN=Xh;break;
case 442:CN=Aag;break;case 470:CN=Xi;break;case 528:CN=U2;break;case 578:CN=Xj;break;
case 616:CN=Xk;break;case 620:CN=Xl;break;case 642:CN=Ro;break;case 643:CN=Th;break;
case 703:CN=Aah;break;case 705:CN=AfC;break;case 724:CN=Aai;break;case 752:CN=Xm;
break;case 756:CN=Aaj;break;case 792:CN=Aak;break;case 804:CN=AhT;break;case 826:
CN=K2;break;case 840:CN=Aal;break;default:CN=Ats.toFixed();}return CN;},Ak6:function(
MX){var Aay;if((MX<10000)&&(A._GetAutoObject(C.Device).OR===2))Aay=2;else if((MX<
100000)&&!!A._GetAutoObject(C.Device).OR)Aay=1;else Aay=0;return this.Tf(MX,Aay,
false);},Ax7:function(MX,Aay){return this.Tf(MX,Aay,false);},Tf:function(MX,Aay,
BAC){var B;var AlF=A.jV;switch(A._GetAutoObject(C.Device).MassUnit){case 0:if(BAC
)AlF=A.abl(MX,0,0);else{var Be0=MX<0;if(Aay<3)MX=MX+(((Be0?-1:1)*5)*(Math.pow(10
,2-Aay)|0));AlF=(((((B=MX)>-2147483648)?Math.abs(B):B)/1000)|0).toFixed();if(Aay>
0)AlF=AlF+(LB+A.abV(A.abl((((B=MX)>-2147483648)?Math.abs(B):B)%1000,3,10),Aay));
if(Be0)AlF=AhU+AlF;}break;case 1:AlF=A.abk(MX/453.592,0,Aay);break;default:A.ab5(
"%s%s",Ak9,A._GetAutoObject(C.Device).MassUnit.toFixed());}return AlF;},Rj:function(
Iz){var A41=Iz.toFixed();var Bhf=A41.length;if((Bhf>=14)&&(Bhf<=15)){var Az6=this.
AsQ(Iz);var A16=A._GetAutoObject(C.Converter).A6k(Az6);A41=(A16+Oj)+A.abm(A._GetAutoObject(
C.Helper).TT(Iz,0,12),12,10);}return A41;},AmU:function(L$){switch(L$){case 0:return A.
aaL(A.ach.AQI);case 1:return A.aaL(A.ach.ADT);case 2:return A.aaL(A.ach.ADX);default:{
A.ab5("%s%e",Xn,L$);return null;}}},A5D:function(ByT){switch(ByT){case 0:return A.
aaL(A.ach.AvG);case 1:return A.aaL(A.ach.ADP);case 2:return A.aaL(A.ach.AQB);default:
throw new Error(Aoe);}},AdZ:function(AJv){switch(AJv){case 0:case 14:return A.aaL(
A.ach.AjS);case 2:return A.aaL(A.ach.Arb);case 1:return A.aaL(A.ach.Ag4);case 3:
switch(A._GetAutoObject(C.Device).MassUnit){case 0:return A.aaL(A.ach.AD3);case 1:
return A.aaL(A.ach.AD4);default:throw new Error(AfD+A._GetAutoObject(C.Device).MassUnit.
toFixed());}break;case 4:return A.aaL(A.ach.APZ);case 5:return A.aaL(A.ach.AP0);
case 6:return A.aaL(A.ach.AP5);case 7:return A.aaL(A.ach.APl);case 8:case 13:return A.
aaL(A.ach.APs);case 9:return A.aaL(A.ach.ADq);case 10:return A.aaL(A.ach.APr);case
12:return A.aaL(A.ach.APt);case 11:return A.aaL(A.ach.AP$);default:throw new Error(
AhV+AJv.toFixed());}},BhS:function(Azh){switch(Azh){case 0:return A.aaL(A.ach.AQA
);case 3:return A.aaL(A.ach.Arb);case 1:return A.aaL(A.ach.Ag4);case 2:return A.
_GetAutoObject(A.acj.DV).Bd0();default:throw new Error(AhV+Azh.toFixed());}},Bip:
function(Ats){switch(Ats){case 977:return AcP;case 978:return Aam;case 980:return Ax9;
case 981:return Ax_;case 982:return Ax$;case 983:return Aya;case 984:return Ak_;
case 985:return AsZ;default:return A.aaR(A.acf.Unknown);}},BiJ:function(Ac1){switch(
Ac1){case 1:return 0x278A;case 2:return 0x278B;case 3:return 0x278C;case 4:return 0x278D;
case 5:return 0x278E;case 6:return 0x278F;case 7:return 0x2790;case 8:return 0x2791;
case 9:return 0x2792;case 10:return 0x2793;default:return 0x20;}},BqG:function(Iz
){if(!Iz)return-1;return(Iz%100000000)|0;},Bjl:function(AoK,aFilter){var B;if(!aFilter
)return Ayb;var Apc=Ayc;var Aw=aFilter.AOR();while(!!Aw){Apc=Apc+A._GetAutoObject(
C.Helper).A7f(AoK,Aw);Aw=aFilter.AOW(Aw);if(!!Aw)Apc=Apc+O_;}Apc=Apc+Rp;return Apc;
},A7X:function(BcE){var FQ=0;switch(BcE){case 14:FQ=2;break;case 13:FQ=4;break;case
6:FQ=36;break;case 25:FQ=17;break;case 11:FQ=9;break;case 17:FQ=11;break;case 0:
FQ=39;break;case 10:FQ=26;break;case 12:FQ=12;break;case 5:FQ=14;break;case 3:FQ=
15;break;case 1:FQ=10;break;case 8:FQ=16;break;case 18:FQ=18;break;case 4:FQ=20;
break;case 19:FQ=21;break;case 20:FQ=24;break;case 26:FQ=22;break;case 15:FQ=27;
break;case 21:FQ=28;break;case 22:FQ=29;break;case 23:FQ=30;break;case 9:FQ=31;break;
case 27:FQ=33;break;case 2:FQ=13;break;case 24:FQ=32;break;case 7:FQ=35;break;case
16:FQ=37;break;default:A.ab5("%s%e",Ayd,BcE);}return FQ;},BhR:function(Azh){switch(
Azh){case 0:return 1;case 3:return 0;case 1:return 2;case 2:switch(A._GetAutoObject(
C.Device).MassUnit){case 0:return 3;case 1:return 4;default:throw new Error(AfD+
A._GetAutoObject(C.Device).MassUnit.toFixed());}break;default:throw new Error(AhV+
Azh.toFixed());}},Ajo:function(AoV){switch(AoV){case 0:switch(A._GetAutoObject(C.
Device).MassUnit){case 0:return A.aaL(A.ach.APW);case 1:return A.aaL(A.ach.APV);
default:throw new Error(AfD+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;
case 1:return A.aaL(A.ach.AQy);case 9:return A.aaL(A.ach.APS);case 4:return A.aaL(
A.ach.AQV);case 6:return A.aaL(A.ach.AQW);case 8:return A.aaL(A.ach.AP6);case 2:
return A.aaL(A.ach.AQ0);case 3:return A.aaL(A.ach.AQU);case 7:return A.aaL(A.ach.
AQ1);case 5:return A.aaL(A.ach.AQ2);case 10:switch(A._GetAutoObject(C.Device).MassUnit
){case 0:return A.aaL(A.ach.AQ9);case 1:return A.aaL(A.ach.AQ8);default:throw new
Error(AfD+A._GetAutoObject(C.Device).MassUnit.toFixed());}break;case 11:return A.
aaL(A.ach.AQa);case 12:return A.aaL(A.ach.AQC);case 16:return A.aaL(A.ach.AQD);case
19:case 13:case 14:case 18:case 15:case 17:return A.aaL(A.aci.TS);default:throw new
Error(U3+AoV.toFixed());}},ANG:function(Ats){switch(Ats){case 40:return 1;case 56:
return 3;case 70:return 2;case 100:return 4;case 124:return 5;case 156:return 7;
case 158:return 36;case 191:return 17;case 196:return 8;case 203:return 9;case 208:
return 11;case 233:return 12;case 246:return 14;case 250:return 15;case 276:return 10;
case 300:return 16;case 348:return 18;case 372:return 19;case 380:return 20;case
392:return 21;case 428:return 24;case 440:return 22;case 442:return 23;case 470:
return 25;case 528:return 26;case 578:return 27;case 616:return 28;case 620:return 29;
case 642:return 30;case 643:return 31;case 703:return 34;case 705:return 33;case
724:return 13;case 752:return 32;case 756:return 6;case 792:return 35;case 804:return 37;
case 826:return 38;case 840:return 39;default:return 0;}},S_:function(Iz){var Az6=
this.AsQ(Iz);return this.ANG(Az6);},AsQ:function(Iz){return A._GetAutoObject(C.Helper
).TT(Iz,12,3)|0;},BaI:function(AoP,Eo){if(AoP<A._GetAutoObject(C.Helper).ADm(Eo)
)return 1;else if(AoP<A._GetAutoObject(C.Helper).ADl(Eo))return 2;else return 3;
},AC_:function(Byw){switch(Byw){case 1:return 1;case 2:return 2;case 3:return 3;
case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;
case 9:return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;
case 14:return 14;case 15:return 15;case 16:return 16;default:return 0;}},AVu:function(
A9,AJn,AJo){if(AJn===AJo)return A9;if(!AJn&&(AJo===1)){var result=((A9*9)/5)+32;
return result;}if((AJn===1)&&!AJo){var result=((A9-32)*5)/9;return result;}throw new
Error(((As0+AJn.toFixed())+Aye)+AJo.toFixed());},A60:function(Ec){switch(Ec){case
0:return Ayf;case 1:return A.jV;case 2:return Ak$;case 3:return Ayg;case 4:return A.
aaR(A.acf.Contains);case 5:return AfE;default:{A.ab5("%s%e",Aof,Ec);return A.jV;
}}},A52:function(Ac0){return this.Na.Aek(Ac0);},Bj6:function(Ac0){return this.Na.
AmF(Ac0);},Bh9:function(Atr){var AAB=0;switch(Atr){case 0:AAB=1;break;case 1:AAB=
2;break;case 2:AAB=3;break;case 3:AAB=4;break;default:A.ab5("%s%e",I1,Atr);}return AAB;
},Ajk:function(A1a,Eo){if(A1a>=A._GetAutoObject(C.Helper).A7a(Eo))return 3;else if(
A1a>=A._GetAutoObject(C.Helper).AC$(Eo))return 2;else if(A1a<A._GetAutoObject(C.
Device).AcJ)return 0;else return 1;},Aqz:function(FQ){var BN=-1;switch(FQ){case 0:
BN=0;break;case 1:BN=40;break;case 2:BN=70;break;case 3:BN=56;break;case 4:BN=100;
break;case 5:BN=124;break;case 6:BN=756;break;case 7:BN=156;break;case 8:BN=196;
break;case 9:BN=203;break;case 10:BN=276;break;case 11:BN=208;break;case 12:BN=233;
break;case 13:BN=724;break;case 14:BN=246;break;case 15:BN=250;break;case 16:BN=
300;break;case 17:BN=191;break;case 18:BN=348;break;case 19:BN=372;break;case 20:
BN=380;break;case 21:BN=392;break;case 22:BN=440;break;case 23:BN=442;break;case
24:BN=428;break;case 25:BN=470;break;case 26:BN=528;break;case 27:BN=578;break;case
28:BN=616;break;case 29:BN=620;break;case 30:BN=642;break;case 31:BN=643;break;case
32:BN=752;break;case 33:BN=705;break;case 34:BN=703;break;case 35:BN=792;break;case
36:BN=158;break;case 37:BN=804;break;case 38:BN=826;break;case 39:BN=840;break;default:
throw new Error(Aog+FQ.toFixed());}return BN;},Ban:function(Iz){return A._GetAutoObject(
C.Helper).TT(Iz,8,2)|0;},AVK:function(Iz){var BAx=this.Ban(Iz);return this.AC_(BAx
);},AL$:function(Ei){var Ry=19;switch(Ei){case 0:break;case 4:Ry=7;break;case 32:
case 2048:Ry=9;break;case 4096:Ry=11;break;case 32768:Ry=14;break;case 524288:Ry=
18;break;case 65536:Ry=15;break;case 128:Ry=17;break;case 16:Ry=1;break;case 16384:
Ry=12;break;case 1024:Ry=8;break;case 2:Ry=3;break;case 131072:Ry=16;break;case 1:
Ry=2;break;case 8:Ry=5;break;case 256:Ry=10;break;default:throw new Error(As1+Ei.
toFixed());}return Ry;},Bam:function(Iz){return A._GetAutoObject(C.Helper).TT(Iz
,10,2)|0;},_Init:function(aArg){C.Na._Init.call(this.Na={I:this},0);this.__proto__=
C.ConverterClass;A.h7++;},_Done:function(){this.__proto__=null;this.Na._Done();A.
h7--;},_ReInit:function(){this.Na._ReInit();},_Mark:function(D){var B;if((B=this.
Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Device::ConverterClass"};C.Converter={
_Init:function(){C.ConverterClass._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.MinLowTemperature=3000;C.MaxHighTemperature=
5000;C.TemperatureStep=10;C.RatingTableFields={Id:0,AnimalId:1,FeedAssessment:2,
AppearanceAssessment:3,RespiratoryAssessment:4,FaecesAssessment:5,Timestamp:6,Temperature:
7,BodyWeight:8,RatingTemperature:9};C.Animal={TransponderId:0,NaisId:0,NaisIdMother:
0,Id:-1,VisualId:0,GroupId:0,DateOfBirth:0,LocationId:0,LastTemperature:0,TimestampLastControl:
0,TimestampLastWatch:0,TimestampExpirationFeverAlarm:0,TimestampAlarm:0,LastBodyWeight:
0,TimestampLastWeighing:0,FirstBodyWeight:0,TimestampFirstWeighing:0,FirstBodyWeightId:
0,DateOfLastCalving:0,LactationNumber:0,TimestampLastTemperature:0,TimestampLastAssessment:
0,ReasonOfLeaving:0,WhereAbouts:0,EaseOfDelivery:0,Breed:0,AnimalType:0,LastRatingTemperature:
0,WorstAssessment:0,BirthType:0,Gender:2,IsDry:false,IsRegistrationNoticePending:
false,IsPerished:false,IsFever:false,IsWatch:false,IsRegistered:false,IsControl:
false,IsAlarm:false,Fl:function(Ad,AL){var II=C.Row.Fl.call(this,Ad,AL);if(II&&!
!AL){this.OnSetId(AL.CE(Ad,0));this.SQ(AL.CE(Ad,1));this.Ab9(AL.CE(Ad,2));this.AnD(
AL.CE(Ad,3));this.Q6(AL.Hw(Ad,4));this.J1(AL.AOT(Ad,7));this.Akr(AL.BjD(Ad,6));this.
EC(AL.AmV(Ad,14));this.PX(AL.KS(Ad,22));this.Nr(AL.KS(Ad,26));this.Axl(AL.Ja(Ad,
13));this.Ae2(AL.H6(Ad,8));this.Axc(AL.Hw(Ad,15));this.ATW(AL.Hw(Ad,31));this.Ae8(
AL.A7p(Ad,5));this.ATt(AL.Ja(Ad,17));this.Uw(AL.H6(Ad,11));this.ATV(AL.Hw(Ad,16)
);this.ATY(AL.Hw(Ad,30));this.Akx(AL.H6(Ad,9));this.Ae6(AL.H6(Ad,12));this.ATX(AL.
Hw(Ad,20));this.Axe(AL.Hw(Ad,21));this.Ae4(AL.H6(Ad,10));this.AwS(AL.H6(Ad,27));
this.AFy(AL.ADh(Ad,18));this.AF2(AL.Hw(Ad,19));this.AwN(AL.ADh(Ad,23));this.Axd(
AL.Hw(Ad,24));this.ATl(AL.CE(Ad,25));this.AwE(AL.Hw(Ad,28));this.AwT(AL.CE(Ad,29
));this.ArW(AL.H6(Ad,38));this.N7(AL.BjE(Ad,32));this.Akt(AL.BjJ(Ad,33));this.AnF(
AL.KS(Ad,35));this.Nt(AL.AO1(Ad,34));this.Ae5(AL.H6(Ad,37));this.AFR(AL.BjS(Ad,36
));}return II;},Cs:function(AL){var II=C.Row.Cs.call(this,AL);if(II&&!!AL){var Mm=
AL.QE();if(Mm<0)A.ab5("%s",AcQ);else{var AAf=this.Arh();if(AAf)this.CQ=AL.AbK();
else AL.HS(this.CQ,0,this.Id);AL.HS(this.CQ,1,this.VisualId);AL.HS(this.CQ,2,this.
GroupId);AL.HS(this.CQ,3,this.LocationId);AL.Acr(this.CQ,4,this.DateOfBirth);AL.
BpA(this.CQ,7,this.Gender);AL.Bpw(this.CQ,6,this.BirthType);AL.Bpu(this.CQ,14,this.
AnimalType);AL.UF(this.CQ,22,this.TransponderId);AL.UF(this.CQ,26,this.NaisId);AL.
AkP(this.CQ,13,this.WorstAssessment);AL.Ob(this.CQ,8,this.IsAlarm);AL.Acr(this.CQ
,15,this.TimestampAlarm);AL.Ob(this.CQ,11,this.IsFever);AL.Acr(this.CQ,16,this.TimestampExpirationFeverAlarm
);AL.Ob(this.CQ,9,this.IsControl);AL.Ob(this.CQ,12,this.IsWatch);AL.Acr(this.CQ,
20,this.TimestampLastControl);AL.Acr(this.CQ,21,this.TimestampLastWatch);AL.Ob(this.
CQ,10,this.IsRegistered);AL.Ob(this.CQ,27,this.IsPerished);AL.Acr(this.CQ,28,this.
DateOfLastCalving);AL.HS(this.CQ,29,this.LactationNumber);AL.Ob(this.CQ,38,this.
IsDry);AL.Bpy(this.CQ,32,this.Breed);AL.Bpz(this.CQ,33,this.EaseOfDelivery);AL.UF(
this.CQ,35,this.NaisIdMother);AL.BpF(this.CQ,34,this.WhereAbouts);AL.Ob(this.CQ,
37,this.IsRegistrationNoticePending);AL.BpE(this.CQ,36,this.ReasonOfLeaving);II=
AL.QI(Mm);if(AAf&&II)this.OnSetId(AL.CE(this.CQ,0));}}return II;},G8:function(){
C.Row.G8.call(this);this.OnSetId(-2);this.Ae4(true);},FD:function(){C.Row.FD.call(
this);this.OnSetId(-1);this.SQ(0);this.Ab9(0);this.AnD(0);this.Q6(0);this.J1(A._GetAutoObject(
C.Device).Gender);this.Akr(0);this.EC(A._GetAutoObject(C.Device).AnimalType);this.
PX(0);this.Nr(0);this.Axl(0);this.Ae2(false);this.Axc(0);this.ATW(0);this.Ae8(0);
this.ATt(0);this.Uw(false);this.ATY(0);this.ATV(0);this.Akx(false);this.Ae6(false
);this.ATX(0);this.Axe(0);this.Ae4(false);this.AwS(false);this.AFy(0);this.AF2(0
);this.AwN(0);this.Axd(0);this.ATl(-1);this.AwE(0);this.AwT(0);this.ArW(false);this.
N7(0);this.Akt(0);this.AnF(0);this.Nt(0);this.Ae5(false);this.AFR(0);},OnSetId:function(
E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Uo,this.OnSetId],0);},SQ:function(
E){if(this.VisualId===E)return;this.VisualId=E;A.abo([this,this.ArD,this.SQ],0);
},Ab9:function(E){if(this.GroupId===E)return;this.GroupId=E;A.abo([this,this.BlE
,this.Ab9],0);},Q6:function(E){if(this.DateOfBirth===E)return;this.DateOfBirth=E;
A.abo([this,this.Awd,this.Q6],0);},J1:function(E){if(this.Gender===E)return;this.
Gender=E;A.abo([this,this.WG,this.J1],0);},Akr:function(E){if(this.BirthType===E
)return;this.BirthType=E;A.abo([this,this.ASF,this.Akr],0);},AnD:function(E){if(
this.LocationId===E)return;this.LocationId=E;A.abo([this,this.A9o,this.AnD],0);}
,Ae8:function(E){if(this.LastTemperature===E)return;this.LastTemperature=E;A.abo([
this,this.A9n,this.Ae8],0);},Ae2:function(E){if(this.IsAlarm===E)return;this.IsAlarm=
E;A.abo([this,this.A9f,this.Ae2],0);},Akx:function(E){if(this.IsControl===E)return;
this.IsControl=E;A.abo([this,this.BlG,this.Akx],0);},Ae4:function(E){if(this.IsRegistered===
E)return;this.IsRegistered=E;A.abo([this,this.BlJ,this.Ae4],0);},Ae6:function(E){
if(this.IsWatch===E)return;this.IsWatch=E;A.abo([this,this.A9j,this.Ae6],0);},Axl:
function(E){if(this.WorstAssessment===E)return;this.WorstAssessment=E;A.abo([this
,this.A92,this.Axl],0);},Uw:function(E){if(this.IsFever===E)return;this.IsFever=
E;A.abo([this,this.A9g,this.Uw],0);},ATX:function(E){if(this.TimestampLastControl===
E)return;this.TimestampLastControl=E;A.abo([this,this.Bl_,this.ATX],0);},Axe:function(
E){if(this.TimestampLastWatch===E)return;this.TimestampLastWatch=E;A.abo([this,this.
Bma,this.Axe],0);},ATt:function(E){if(this.LastRatingTemperature===E)return;this.
LastRatingTemperature=E;A.abo([this,this.BlM,this.ATt],0);},ATV:function(E){if(this.
TimestampExpirationFeverAlarm===E)return;this.TimestampExpirationFeverAlarm=E;A.
abo([this,this.Bl8,this.ATV],0);},Axc:function(E){if(this.TimestampAlarm===E)return;
this.TimestampAlarm=E;A.abo([this,this.Bl7,this.Axc],0);},EC:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;A.abo([this,this.PU,this.EC],0);},AFy:function(
E){if(this.LastBodyWeight===E)return;this.LastBodyWeight=E;A.abo([this,this.A9m,
this.AFy],0);},AF2:function(E){if(this.TimestampLastWeighing===E)return;this.TimestampLastWeighing=
E;A.abo([this,this.A9O,this.AF2],0);},PX:function(E){if(this.TransponderId===E)return;
this.TransponderId=E;A.abo([this,this.ArC,this.PX],0);},RU:function(){return A._GetAutoObject(
C.Helper).Me(this.DateOfBirth,A._GetAutoObject(C.Helper).Dr());},AwN:function(E){
if(this.FirstBodyWeight===E)return;this.FirstBodyWeight=E;A.abo([this,this.ASK,this.
AwN],0);},Axd:function(E){if(this.TimestampFirstWeighing===E)return;this.TimestampFirstWeighing=
E;A.abo([this,this.AS1,this.Axd],0);},Arg:function(){var Pe=A._NewObject(A.Core.
Bq,0);Pe.Initialize(this.DateOfBirth);var A2B=A._NewObject(A.Core.Bq,0);A2B.Initialize(
this.TimestampFirstWeighing);if(((Pe.Year===A2B.Year)&&(Pe.Ab5()===A2B.Ab5()))&&(
this.FirstBodyWeight>0))return true;else return false;},AhS:function(AJg){var AaH;
var Auz;if(this.TimestampLastWeighing>0){Auz=this.TimestampLastWeighing;AaH=this.
LastBodyWeight;}else{Auz=this.DateOfBirth;AaH=A._GetAutoObject(C.Helper).Abx(this.
AnimalType);}return A._GetAutoObject(C.Helper).AhS(AaH,Auz,AJg,this.AnimalType);
},ATl:function(E){if(this.FirstBodyWeightId===E)return;this.FirstBodyWeightId=E;
A.abo([this,this.BlD,this.ATl],0);},AnU:function(Bc1){this.Ae2(Bc1);if(Bc1){if(!
this.TimestampAlarm)this.Axc(A._GetAutoObject(C.Helper).Dr());}else this.Axc(0);
},Nr:function(E){if(this.NaisId===E)return;this.NaisId=E;A.abo([this,this.Ant,this.
Nr],0);},AGO:function(BcX){this.Ae6(BcX);if(BcX){if(!this.TimestampLastWatch)this.
Axe(A._GetAutoObject(C.Helper).Dr());}else this.Axe(0);},AwE:function(E){if(this.
DateOfLastCalving===E)return;this.DateOfLastCalving=E;A.abo([this,this.Blt,this.
AwE],0);},AwT:function(E){if(this.LactationNumber===E)return;this.LactationNumber=
E;A.abo([this,this.BlL,this.AwT],0);},AwS:function(E){if(this.IsPerished===E)return;
this.IsPerished=E;A.abo([this,this.BlI,this.AwS],0);},ATY:function(E){if(this.TimestampLastTemperature===
E)return;this.TimestampLastTemperature=E;A.abo([this,this.Bl$,this.ATY],0);},ATW:
function(E){if(this.TimestampLastAssessment===E)return;this.TimestampLastAssessment=
E;A.abo([this,this.Bl9,this.ATW],0);},N7:function(E){if(this.Breed===E)return;this.
Breed=E;A.abo([this,this.Awb,this.N7],0);},Akt:function(E){if(this.EaseOfDelivery===
E)return;this.EaseOfDelivery=E;A.abo([this,this.ASJ,this.Akt],0);},Nt:function(E
){if(this.WhereAbouts===E)return;this.WhereAbouts=E;A.abo([this,this.Awp,this.Nt
],0);},AnF:function(E){if(this.NaisIdMother===E)return;this.NaisIdMother=E;A.abo([
this,this.ASR,this.AnF],0);},AFR:function(E){if(this.ReasonOfLeaving===E)return;
this.ReasonOfLeaving=E;A.abo([this,this.BlX,this.AFR],0);},Ae5:function(E){if(this.
IsRegistrationNoticePending===E)return;this.IsRegistrationNoticePending=E;A.abo([
this,this.BlK,this.Ae5],0);},ArW:function(E){if(this.IsDry===E)return;this.IsDry=
E;A.abo([this,this.BlH,this.ArW],0);},Uo:function(){return this.Id;},ArD:function(
){return this.VisualId;},BlE:function(){return this.GroupId;},Awd:function(){return this.
DateOfBirth;},WG:function(){return this.Gender;},ASF:function(){return this.BirthType;
},A9o:function(){return this.LocationId;},A9n:function(){return this.LastTemperature;
},A9f:function(){return this.IsAlarm;},BlG:function(){return this.IsControl;},BlJ:
function(){return this.IsRegistered;},A9j:function(){return this.IsWatch;},A92:function(
){return this.WorstAssessment;},A9g:function(){return this.IsFever;},Bl_:function(
){return this.TimestampLastControl;},Bma:function(){return this.TimestampLastWatch;
},BlM:function(){return this.LastRatingTemperature;},Bl8:function(){return this.
TimestampExpirationFeverAlarm;},Bl7:function(){return this.TimestampAlarm;},PU:function(
){return this.AnimalType;},A9m:function(){return this.LastBodyWeight;},A9O:function(
){return this.TimestampLastWeighing;},ArC:function(){return this.TransponderId;}
,ASK:function(){return this.FirstBodyWeight;},AS1:function(){return this.TimestampFirstWeighing;
},BlD:function(){return this.FirstBodyWeightId;},Ant:function(){return this.NaisId;
},Blt:function(){return this.DateOfLastCalving;},BlL:function(){return this.LactationNumber;
},BlI:function(){return this.IsPerished;},Bl$:function(){return this.TimestampLastTemperature;
},Bl9:function(){return this.TimestampLastAssessment;},Awb:function(){return this.
Breed;},ASJ:function(){return this.EaseOfDelivery;},Awp:function(){return this.WhereAbouts;
},ASR:function(){return this.NaisIdMother;},BlX:function(){return this.ReasonOfLeaving;
},BlK:function(){return this.IsRegistrationNoticePending;},BlH:function(){return this.
IsDry;},_Init:function(aArg){C.Row._Init.call(this,aArg);this.__proto__=C.Animal;
this.TableId=0;},_className:"Device::Animal"};C.Row={CQ:-1,TableId:2,Fl:function(
Ad,AL){if(!AL){A.ab5("%s",(As2+this.CQ.toFixed())+As3);return false;}else if(AL.
Id!==this.TableId)throw new Error(As4);else if((Ad<0)||(Ad>=AL.B9())){A.ab5("%s"
,(((Aoh+this.CQ.toFixed())+As5)+AL.B9().toFixed())+Ala);return false;}this.CQ=Ad;
return true;},Cs:function(AL){if(!AL){A.ab5("%s",(As2+this.CQ.toFixed())+As3);return false;
}else if(AL.Id!==this.TableId)throw new Error(As4);else if(this.Arh()&&AL.Lk()){
A.ab5("%s",Ayh+AL.HL().toFixed());return false;}else if(!this.Arh()&&((this.CQ<0
)||(this.CQ>=AL.B9()))){A.ab5("%s",(((Aoh+this.CQ.toFixed())+As5)+AL.B9().toFixed(
))+Ala);return false;}return true;},G8:function(){this.FD();this.CQ=-1;},Arh:function(
){return this.CQ===-1;},FD:function(){this.CQ=-2;},AqY:function(){return this.CQ
!==-2;},A9C:function(){return this.CQ;},A_2:function(E){this.CQ=E;},_Init:function(
aArg){this.__proto__=C.Row;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Row"};C.Rating={
Temperature:0,Id:-1,AnimalId:-1,Timestamp:0,BodyWeight:0,RatingTemperature:0,Faeces:
0,Respiratory:0,Appearance:0,Feed:0,Fl:function(Ad,AL){var II=C.Row.Fl.call(this
,Ad,AL);if(II&&!!AL){this.OnSetId(AL.CE(Ad,0));this.OnSetAnimalId(AL.CE(Ad,1));this.
OnSetTimestamp(AL.Hw(Ad,6));this.OnSetFeed(AL.Ja(Ad,2));this.OnSetAppearance(AL.
Ja(Ad,3));this.OnSetRespiratory(AL.Ja(Ad,4));this.OnSetFaeces(AL.Ja(Ad,5));this.
OnSetTemperature(AL.A7p(Ad,7));this.OnSetBodyWeight(AL.ADh(Ad,8));this.OnSetRatingTemperature(
AL.Ja(Ad,9));}return II;},Cs:function(AL){if(this.K&&this.K.Cs)return this.K.Cs.
apply(this,arguments);else return C.Rating.Bbm.apply(this,arguments);},Bbm:function(
AL){var II=C.Row.Cs.call(this,AL);if((II&&!!AL)&&(AL.Id===1)){var Mm=AL.QE();if(
Mm<0)A.ab5("%s",AcQ);else{var AAf=this.Arh();if(AAf)this.CQ=AL.AbK();else AL.HS(
this.CQ,0,this.Id);AL.HS(this.CQ,1,this.AnimalId);AL.Acr(this.CQ,6,this.Timestamp
);AL.AkP(this.CQ,2,this.Feed);AL.AkP(this.CQ,3,this.Appearance);AL.AkP(this.CQ,4
,this.Respiratory);AL.AkP(this.CQ,5,this.Faeces);AL.A$Y(this.CQ,7,this.Temperature
);AL.AUW(this.CQ,8,this.BodyWeight);AL.AkP(this.CQ,9,this.RatingTemperature);II=
AL.QI(Mm);if(AAf&&II)this.OnSetId(AL.CE(this.CQ,0));var RA=A._GetAutoObject(C.Device
).An;var Ad=A._GetAutoObject(C.Device).An.LZ(0,this.AnimalId);if(Ad>=0){var CU=A.
_NewObject(C.Animal,0);CU.Fl(Ad,RA);if(this.Temperature>0)CU.Uw(A._GetAutoObject(
C.Helper).A7R(this));if((this.Temperature>0)&&A._GetAutoObject(C.Helper).AGu(this
)){var Os=A._GetAutoObject(C.Helper).ARl(this);CU.Akx(Os);CU.AnU(Os);}else if(this.
Temperature>0){var Os=(A._GetAutoObject(C.Helper).ARl(this)||(CU.WorstAssessment===
2))||(CU.WorstAssessment===1);CU.Akx(Os);CU.AnU(Os);}else{var Os=A._GetAutoObject(
C.Helper).ARl(this)||CU.IsFever;CU.Akx(Os);CU.AnU(Os);}CU.Cs(RA);}}}return II;},
G8:function(){C.Row.G8.call(this);this.OnSetTimestamp(A._GetAutoObject(C.Helper).
Dr());this.OnSetId(-2);},FD:function(){C.Row.FD.call(this);this.OnSetTimestamp(0
);this.OnSetId(-1);this.OnSetAnimalId(-1);this.OnSetFeed(0);this.OnSetAppearance(
0);this.OnSetRespiratory(0);this.OnSetFaeces(0);this.OnSetTemperature(0);this.OnSetBodyWeight(
0);this.OnSetRatingTemperature(0);},OnSetTemperature:function(E){if(this.Temperature===
E)return;this.Temperature=E;A.abo([this,this.Bl6,this.OnSetTemperature],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Uo,this.OnSetId],0);
},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;A.abo([this
,this.Blh,this.OnSetAnimalId],0);},OnSetFeed:function(E){if(this.Feed===E)return;
this.Feed=E;A.abo([this,this.BlA,this.OnSetFeed],0);},OnSetAppearance:function(E
){if(this.Appearance===E)return;this.Appearance=E;A.abo([this,this.Bli,this.OnSetAppearance
],0);},OnSetRespiratory:function(E){if(this.Respiratory===E)return;this.Respiratory=
E;A.abo([this,this.BlY,this.OnSetRespiratory],0);},OnSetFaeces:function(E){if(this.
Faeces===E)return;this.Faeces=E;A.abo([this,this.Bly,this.OnSetFaeces],0);},OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;A.abo([this,this.A9N,this.
OnSetTimestamp],0);},Bpv:function(NB,A9){switch(NB){case 2:this.OnSetAppearance(
A9);break;case 1:this.OnSetFeed(A9);break;case 4:this.OnSetFaeces(A9);break;case
3:this.OnSetRespiratory(A9);break;default:;}},BjB:function(NB){switch(NB){case 2:
return this.Appearance;case 1:return this.Feed;case 4:return this.Faeces;case 3:
return this.Respiratory;default:return 0;}},OnSetRatingTemperature:function(E){if(
this.RatingTemperature===E)return;this.RatingTemperature=E;A.abo([this,this.BlW,
this.OnSetRatingTemperature],0);},OnSetBodyWeight:function(E){if(this.BodyWeight===
E)return;this.BodyWeight=E;A.abo([this,this.Blm,this.OnSetBodyWeight],0);},Bl6:function(
){return this.Temperature;},Uo:function(){return this.Id;},Blh:function(){return this.
AnimalId;},BlA:function(){return this.Feed;},Bli:function(){return this.Appearance;
},BlY:function(){return this.Respiratory;},Bly:function(){return this.Faeces;},A9N:
function(){return this.Timestamp;},BlW:function(){return this.RatingTemperature;
},Blm:function(){return this.BodyWeight;},_Init:function(aArg){C.Row._Init.call(
this,aArg);this.__proto__=C.Rating;this.TableId=1;var J$=this._variants();if(J$){
this.K={};J$._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(
this);this.__proto__=C.Row;C.Row._Done.call(this);},_ReInit:function(){C.Row._ReInit.
call(this);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){C.Row._Mark.call(
this,D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.Rating._variants(
);},K:null,_className:"Device::Rating"};C.HelperClass={WU:null,AhE:null,AUP:null
,AUQ:null,W:null,Av:null,KM:null,S1:null,Ad0:null,UL:null,UK:null,Aen:null,Afz:null
,Afy:null,Afx:null,AfA:null,AgE:null,AG3:0,Init:function(aArg){A.pe([this,this.AUh
],this);},AkA:function(E){this.WU=E;A.abo([this,this.ArA,this.AkA],0);},AFU:function(
E){this.AhE=E;A.abo([this,this.A9D,this.AFU],0);},BBJ:function(G){switch(A._GetAutoObject(
C.Device).ScanState){case 2:{var AuB=A._GetAutoObject(C.Device).OX;if(!AuB)throw new
Error(Ayi);switch(AuB.TransponderType){case 1:this.AkA(AuB);break;case 2:this.ATM(
AuB);break;case 3:this.AFU(AuB);break;case 4:this.ATN(AuB);break;case 0:break;default:
throw new Error(Ayj);}}break;case 4:A._GetAutoObject(C.Device).AZ(11,true,A.jV,2000
,null);break;case 3:A._GetAutoObject(C.Device).AZ(12,true,A.jV,2000,null);break;
case 0:case 1:break;default:throw new Error(As6);}},AkM:function(){this.AkA(null
);this.ATM(null);this.AFU(null);this.ATN(null);},AFZ:function(E){if(this.K&&this.
K.AFZ)return this.K.AFZ.apply(this,arguments);else return C.HelperClass.Bbk.apply(
this,arguments);},Bbk:function(E){A.abo([this,this.U7,this.U_],0);A._GetAutoObject(
C.Device).SetSystemTime(E);},U_:function(Aq){this.AFZ(Aq);},Dr:function(){if(this.
K&&this.K.Dr)return this.K.Dr.apply(this,arguments);else return C.HelperClass.Bbg.
apply(this,arguments);},Bbg:function(){var B;return((B=(this.Av.BdY()|0))<0)?B+0x100000000:
B;},U7:function(){return this.Dr();},Ass:function(){A._GetAutoObject(C.Device).SX(-
1);this.W.FD();A.we(this.W,0);},A77:function(Iz){if(!Iz){A.ab5("%s%U",Ayk,Iz);return false;
}var Bj=A._GetAutoObject(C.Device).An.Aes(22,Iz);return this.GS(Bj);},AmW:function(
AoK,AJf){switch(AoK){case 0:{var Apb=AJf;switch(Apb){case 14:return A.aaR(A.acf.
Afu);case 6:return O$;case 4:return A.aaR(A.acf.Aef);case 28:return Ayl;case 7:return A.
aaR(A.acf.Afp);case 2:return A.aaR(A.acf.P);case 0:return A.aaR(A.acf.GO);case 37:
return AWi;case 8:return A.aaR(A.acf.Alarm);case 9:return A.aaR(A.acf.ACw);case 38:
return A.aaR(A.acf.AN6);case 11:return A.aaR(A.acf.Fever);case 27:return AWj;case
10:return A.aaR(A.acf.Bo8);case 12:return A.aaR(A.acf.Ase);case 29:return A.aaR(
A.acf.ARF);case 18:return A.aaR(A.acf.Weighing);case 17:return AWk;case 5:return A.
aaR(A.acf.Temperature);case 3:return AWl;case 26:return A.aaR(A.acf.Ul);case 35:
return A.aaR(A.acf.Ul)+AHx;case 36:return AHy;case 15:return AfF;case 24:return Aoi;
case 20:return AWm;case 30:return AHz;case 21:return Alb;case 19:return AHA;case
22:return A.aaR(A.acf.Transponder);case 1:return A.aaR(A.acf.GJ);case 34:return A.
aaR(A.acf.Jm);case 13:return AHB;case 31:return AWn;default:{A.ab5("%s",AWo+Apb.
toFixed());return AHC+Apb.toFixed();}}}case 1:{var Apb=AJf;switch(Apb){case 1:return A.
aaR(A.acf.Animal);case 3:return A.aaR(A.acf.AGt);case 8:return A.aaR(A.acf.Afw);
case 5:return A.aaR(A.acf.AGv);case 2:return A.aaR(A.acf.Feed);case 4:return A.aaR(
A.acf.AGw);case 7:return A.aaR(A.acf.Temperature);case 6:return A.aaR(A.acf.Bq);
default:{A.ab5("%s",AWp+Apb.toFixed());return AHC+Apb.toFixed();}}}default:A.ab5(
"%s",(AcR+AoK.toFixed())+AWq);}return A.jV;},A7f:function(AoK,AH){var result=A.jV;
if(!!AH){result=this.AmW(AoK,AH.EJ);result=((result+Oj)+A._GetAutoObject(C.Converter
).A60(AH.Operator))+Oj;if(!!(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null))result=
result+(C.Int32FilterCriterion.isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!
!(C.UInt32FilterCriterion.isPrototypeOf(AH)?AH:null))result=result+(C.UInt32FilterCriterion.
isPrototypeOf(AH)?AH:null).A6.toFixed();else if(!!(C.StringFilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.StringFilterCriterion.isPrototypeOf(AH)?AH:null).A6;
else if(!!(C.BoolFilterCriterion.isPrototypeOf(AH)?AH:null)){if((C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null).A6)result=this.AmW(AoK,AH.EJ);else result=A.jV;}else if(
!!(C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null)){var Bz4=A._NewObject(C.GenderToString
,0);result=result+Bz4.Lz((C.GenderFilterCriterion.isPrototypeOf(AH)?AH:null).A6);
}else if(!!(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null)){var ByV=A._NewObject(
C.AnimalTypeToString,0);result=result+ByV.Lz((C.AnimalTypeFilterCriterion.isPrototypeOf(
AH)?AH:null).A6);}else if(!!(C.AssessmentFilterCriterion.isPrototypeOf(AH)?AH:null
)){var ByY=A._NewObject(C.AssesmentToString,0);result=result+ByY.Lz((C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null).A6);}else if(!!(C.UInt64FilterCriterion.isPrototypeOf(
AH)?AH:null))result=result+(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null).A6.
toFixed();else if(!!(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null)){
var Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);result=(((((result+
Aw.A6)+AWr)+Aw.OI.toFixed())+O_)+Aw.Zs.toFixed())+Ala;}else if(!!(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null)){var BDt=A._NewObject(C.WhereAboutsToString,0);result=
result+BDt.Lz((C.WhereAboutsFilterCriterion.isPrototypeOf(AH)?AH:null).A6);}else
A.ab5("%s",AWs);}return result;},MO:function(aString,BcJ,Bx_){var result=A.jV;var
Bgv=false;var index=0;var Bya=BcJ.length;while(!Bgv){var A4j=aString.indexOf(BcJ
,index);if(A4j!==-1){result=(result+A.abW(aString,index,A4j-index))+Bx_;index=A4j+
Bya;}else{var BcO=aString.length;if(index<BcO)result=result+A.ab2(aString,BcO-index
);Bgv=true;}}return result;},ATM:function(E){this.AUP=E;A.abo([this,this.Bl0,this.
ATM],0);},ATN:function(E){this.AUQ=E;A.abo([this,this.Bl1,this.ATN],0);},Ben:function(
){return((A._GetAutoObject(C.Device).ScanState===2)&&!!A._GetAutoObject(C.Device
).OX)&&(A._GetAutoObject(C.Device).OX.TransponderType===1);},AaL:function(G){if(
!this.W.Arh()&&(this.W.Id>=0))this.BkE(this.W.Id);},AC$:function(Eo){return A._GetAutoObject(
C.Helper).UL.Get(Eo);},A7a:function(Eo){return A._GetAutoObject(C.Helper).UK.Get(
Eo);},A7l:function(){var O=0;var min=32767;while(O<A._GetAutoObject(C.Helper).UL.
MN){if(A._GetAutoObject(C.Helper).UL.Get(O)<min)min=A._GetAutoObject(C.Helper).UL.
Get(O);O=O+1;}return min;},AUh:function(G){A.zV([this,this.AaL],A._GetAutoObject(
C.Device).An,0);},ARl:function(D4){if(!D4)return false;var Bkf=(((this.AAb(D4.Faeces
)||this.AAb(D4.Feed))||this.AAb(D4.Appearance))||this.AAb(D4.Respiratory))||this.
AAb(D4.RatingTemperature);return Bkf||this.A7R(D4);},AAb:function(Bcn){return(Bcn===
2)||(Bcn===1);},A7R:function(D4){return!!D4&&(D4.Temperature>A._GetAutoObject(C.
Helper).AC$(A._GetAutoObject(C.Helper).W.AnimalType));},GS:function(Mc){var A3b=
false;if(Mc>=0){if(Mc!==this.W.CQ)A._GetAutoObject(C.Device).SX(Mc);A3b=this.W.Fl(
Mc,A._GetAutoObject(C.Device).An);if(A3b)A.we(this.W,0);}else{A._GetAutoObject(C.
Device).SX(-1);this.W.FD();A.we(this.W,0);}return A3b;},AhN:function(Ah4){var B;
return(((B=(this.Av.BdY()|0))<0)?B+0x100000000:B)-this.AmI(Ah4);},AsH:function(){
var B;A.pe([B=this.KM,B.AnY],this);},BCU:function(G){A._GetAutoObject(C.Device).
AZ(16,false,AWt,0,null);A._GetAutoObject(C.Device).AZ(5,true,A.jV,0,null);},BoB:
function(G){var Ar=(C.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5))this.AsH();},Bol:function(E){if(this.AG3===E)return;this.AG3=E;A._GetAutoObject(
C.Device).AZ(16,true,this.AG3.toFixed(),0,[this,this.BoB]);},Me:function(BxL,Byo
){var D9;var Bg3=A._NewObject(A.Core.An4,0);var GH=A._NewObject(A.Core.Bq,0);var
K_=A._NewObject(A.Core.Bq,0);GH.Initialize(BxL);K_.Initialize(Byo);D9=K_.BiI(GH);
Bg3.Initialize2(0,D9.ADK,D9.AEw,D9.AGH);if(GH.J(Bg3).GM===GH.GM)return D9.Kp;else
return D9.Kp+1;},BCW:function(G){A._GetAutoObject(C.Device).UpdateMeasureState(3
);},ALb:function(G){var BhT=A._GetAutoObject(C.Helper).AC$(A._GetAutoObject(C.Helper
).W.AnimalType);var BhQ=A._GetAutoObject(C.Helper).A7a(A._GetAutoObject(C.Helper
).W.AnimalType);var Agq=A.abz(BhT-100,BhQ+100);this.BdC(Agq);},AmI:function(Ah4){
return Ah4*86400;},An6:function(Jn){var B;if(!!Jn&&(Jn<(((B=Math.trunc(Math.pow(
10,A._GetAutoObject(C.Device).AF)))<0)?B+0x10000000000000000:B)))return-1;return A.
_GetAutoObject(C.Helper).TT(Jn,A._GetAutoObject(C.Device).AF&0xFF,A._GetAutoObject(
C.Device).A3&0xFF)|0;},AGu:function(D4){if(!D4)return false;return((!!D4.Faeces||
!!D4.Feed)||!!D4.Appearance)||!!D4.Respiratory;},AhS:function(A1m,BcQ,AJg,Eo){var
B;var ApP;if((A1m<650000)&&(BcQ<this.Dr())){var Bdc=this.AgE.Avu(Eo);var Bdb=0;if(
Bdc>=0)Bdb=this.Afx.Get(Bdc);ApP=A1m+(this.Me(BcQ,this.Dr())*Bdb);if(AJg>0){var A2j=
this.ApO(AJg);ApP=(Math.trunc(((((B=ApP)<0)?B+0x10000000000000000:B)+Math.trunc(
A2j/2))/A2j)*A2j)|0;}if(ApP>650000)ApP=650000;}else ApP=A1m;return ApP;},ADn:function(
D4){var Aqb=A._GetAutoObject(C.Converter).Ad1(D4.Faeces);if(Aqb<A._GetAutoObject(
C.Converter).Ad1(D4.Feed))Aqb=A._GetAutoObject(C.Converter).Ad1(D4.Feed);if(Aqb<
A._GetAutoObject(C.Converter).Ad1(D4.Appearance))Aqb=A._GetAutoObject(C.Converter
).Ad1(D4.Appearance);if(Aqb<A._GetAutoObject(C.Converter).Ad1(D4.Respiratory))Aqb=
A._GetAutoObject(C.Converter).Ad1(D4.Respiratory);return A._GetAutoObject(C.Converter
).Bap(Aqb);},AxA:function(D4,NA){if(!!D4){D4.OnSetFaeces(NA);D4.OnSetFeed(NA);D4.
OnSetAppearance(NA);D4.OnSetRespiratory(NA);}},Bjz:function(AL,AJm,Ac7,Xw,AfK){if(
!AL)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApC=AL.Filter;var On=
A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac7;Be.CY(On);
if(Xw>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A6=Xw;Be.CY(Oz);}if(AfK>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=
3;Or.EJ=6;Or.A6=AfK;Be.CY(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZG(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);var Vf;for(O=0;O<AL.B9();O=
O+1){Vf=AL.Ja(O,AJm);Md.Set(Vf,Md.Get(Vf)+1);}AL.Bk(ApC);return Md;},ZX:function(
Ah4){var B;var GH=A._NewObject(A.Core.Bq,0);var Bg2=A._NewObject(A.Core.An4,0);GH.
Initialize(A._GetAutoObject(C.Converter).AhP());Bg2.Initialize2(Ah4,0,0,0);GH=GH.
BpX(Bg2);return((B=(GH.JZ()|0))<0)?B+0x100000000:B;},A7b:function(AL,Ac7,AfK,Xw){
if(!AL)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApC=AL.Filter;var
On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac7;Be.CY(
On);if(Xw>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=
6;Oz.A6=Xw;Be.CY(Oz);}if(AfK>0){var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.
Operator=3;Or.EJ=6;Or.A6=AfK;Be.CY(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZG(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);var Ao2=A._NewObject(C.Rating
,0);var A2b;for(O=0;O<AL.B9();O=O+1){Ao2.Fl(O,AL);if(A._GetAutoObject(C.Helper).
AGu(Ao2)){A2b=A._GetAutoObject(C.Helper).ADn(Ao2);Md.Set(A2b,Md.Get(A2b)+1);}}AL.
Bk(ApC);return Md;},A2K:function(AL,Ac7,Bzt){if(!AL)throw new Error(As7);var Be=
A._NewObject(C.Filter,0);var ApC=AL.Filter;var On=A._NewObject(C.Int32FilterCriterion
,0);On.Operator=0;On.EJ=1;On.A6=Ac7;Be.CY(On);var Xw=A._GetAutoObject(C.Converter
).AhP()+A._GetAutoObject(C.Helper).AmI(Bzt);var AfK=Xw+A._GetAutoObject(C.Helper
).AmI(1);var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.EJ=6;Oz.
A6=Xw;Be.CY(Oz);var Or=A._NewObject(C.UInt32FilterCriterion,0);Or.Operator=3;Or.
EJ=6;Or.A6=AfK;Be.CY(Or);AL.Bk(Be);var Ao2=A._NewObject(C.Rating,0);var Vf;var LW=
0;var O;for(O=0;O<AL.B9();O=O+1){Ao2.Fl(O,AL);if(A._GetAutoObject(C.Helper).AGu(
Ao2)){Vf=A._GetAutoObject(C.Helper).ADn(Ao2);if(A._GetAutoObject(C.Converter).Ad1(
Vf)>A._GetAutoObject(C.Converter).Ad1(LW))LW=Vf;}}AL.Bk(ApC);return LW;},Am5:function(
){if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||(A._GetAutoObject(C.
Device).WeightRecordingScope===1))return true;else return false;},A7U:function(){
if((A._GetAutoObject(C.Device).WeightRecordingScope===2)||!A._GetAutoObject(C.Device
).WeightRecordingScope)return true;else return false;},BjA:function(AL,AJm,Ac7,Xw
,AfK){if(!AL)throw new Error(As7);var Be=A._NewObject(C.Filter,0);var ApC=AL.Filter;
var On=A._NewObject(C.Int32FilterCriterion,0);On.Operator=0;On.EJ=1;On.A6=Ac7;Be.
CY(On);if(Xw>0){var Oz=A._NewObject(C.UInt32FilterCriterion,0);Oz.Operator=2;Oz.
EJ=6;Oz.A6=Xw;Be.CY(Oz);}if(AfK>0){var Or=A._NewObject(C.UInt32FilterCriterion,0
);Or.Operator=3;Or.EJ=6;Or.A6=AfK;Be.CY(Or);}AL.Bk(Be);var Md=A._NewObject(C.Int32ArrayWrapper
,0);Md.ZG(6);var O;for(O=0;O<Md.MN;O=O+1)Md.Set(O,0);if(AL.B9()>0){var Vf=AL.Ja(
0,AJm);var ApU=AL.Hw(O,6);var Ac=A._NewObject(A.Core.Bq,0);Ac.Initialize(ApU);var
Aqa=Vf;var AKd=A._NewObject(A.Core.Bq,0);AKd.Initialize(Ac.JZ());for(O=1;O<AL.B9(
);O=O+1){Vf=AL.Ja(O,AJm);ApU=AL.Hw(O,6);Ac.Initialize(ApU);if((Ac.Ab5()!==AKd.Ab5(
))||(Ac.Year!==AKd.Year)){Md.Set(Aqa,Md.Get(Aqa)+1);AKd.Initialize(Ac.JZ());Aqa=
Vf;}else if(!!Vf&&(Vf<Aqa))Aqa=Vf;}Md.Set(Aqa,Md.Get(Aqa)+1);}AL.Bk(ApC);return Md;
},Aqp:function(L_){var B;var GH=A._NewObject(A.Core.Bq,0);GH.Initialize(L_);GH.AnB(
0);GH.AnE(0);GH.AnH(0);return((B=(GH.JZ()|0))<0)?B+0x100000000:B;},AOh:function(
L_){var B;L_=L_+86400;var GH=A._NewObject(A.Core.Bq,0);GH.Initialize(L_);GH.AnB(
0);GH.AnE(0);GH.AnH(0);return((B=(GH.JZ()|0))<0)?B+0x100000000:B;},BjC:function(
BCS,BzF,Amg,AlG){var Bdx=A._GetAutoObject(C.Helper).Me(BCS,BzF);if(Bdx>0)return((
AlG-Amg)/Bdx)|0;return 0;},Bqy:function(BxM,Byp){var GH=A._NewObject(A.Core.Bq,0
);var K_=A._NewObject(A.Core.Bq,0);GH.Initialize(BxM);K_.Initialize(Byp);return(
GH.Year===K_.Year)&&(GH.Ab5()===K_.Ab5());},A7h:function(){var Be=A._GetAutoObject(
C.Helper).MC();var BeC=A._NewObject(C.UInt32FilterCriterion,0);var Byy=A._GetAutoObject(
C.Helper).ZX(A._GetAutoObject(C.Device).AqR)-1;BeC.Initialize(28,2,Byy,true);Be.
CY(BeC);var Vb=A._NewObject(C.AnimalTypeFilterCriterion,0);Vb.Initialize(14,0,1,
true);Be.CY(Vb);if(A._GetAutoObject(C.Device).AqS){var AAq=A._NewObject(C.UInt32FilterCriterion
,0);var A27=A._GetAutoObject(C.Helper).Dr()-21600;AAq.Initialize(30,3,A27,true);
Be.CY(AAq);}return Be;},Bpd:function(){var Mm=A._GetAutoObject(C.Device).An.QE();
if(Mm<=0)A.ab5("%s",AcQ);else{A._GetAutoObject(C.Device).An.FD();A._GetAutoObject(
C.Device).An.QI(Mm);}Mm=A._GetAutoObject(C.Device).Bt.QE();if(Mm<=0)A.ab5("%s",AcQ
);else{A._GetAutoObject(C.Device).Bt.FD();A._GetAutoObject(C.Device).Bt.QI(Mm);}
Mm=A._GetAutoObject(C.Device).Ps.QE();if(Mm<=0)A.ab5("%s",AcQ);else{A._GetAutoObject(
C.Device).Ps.FD();A._GetAutoObject(C.Device).Ps.QI(Mm);}},BkE:function(Ac7){var Bj=
A._GetAutoObject(C.Device).An.LZ(0,Ac7);return this.GS(Bj);},ARt:function(Iz){var
Aiw=A._GetAutoObject(C.Device).An.Ael(22,Iz);return Aiw;},ADe:function(){var Be=
A._GetAutoObject(C.Helper).MC();var Ai$=A._NewObject(C.UInt64FilterCriterion,0);
Ai$.Initialize(22,0,0,true);Be.CY(Ai$);return Be;},AOQ:function(AoV,BzC,Qf){var Aav=-
1;switch(AoV){case 2:Aav=30;break;case 3:Aav=31;break;case 10:Aav=19;break;default:
A.ab5("%s%e",U3,AoV);}if(Aav<0)return null;var Adj=A._NewObject(C.UInt32FilterCriterion
,0);Adj.Initialize(Aav,3,A._GetAutoObject(C.Helper).Dr()-BzC,Qf);return Adj;},Bo$:
function(aFilter){var AH=aFilter.DN(30,3);if(!!AH)aFilter.Nw(AH);AH=aFilter.DN(31
,3);if(!!AH)aFilter.Nw(AH);AH=aFilter.DN(19,3);if(!!AH)aFilter.Nw(AH);},A12:function(
AfU,Ay7,AL){if(AL.Lk())return 5;if(AfU.VisualId<=0)switch(Ay7){case 0:if(!AfU.NaisId
)return 1;break;case 1:if(!AfU.TransponderId)return 1;break;case 3:case 2:case 5:
case 4:return 1;default:throw new Error(AHD+Ay7.toFixed());}if((!AfU.NaisId&&!AfU.
TransponderId)&&A._GetAutoObject(C.Device).An.AjH(1,AfU.VisualId))return 2;if(!!
AfU.NaisId&&A._GetAutoObject(C.Helper).ARq(AfU.NaisId))return 3;if(!!AfU.TransponderId&&
A._GetAutoObject(C.Helper).ARt(AfU.TransponderId))return 4;return 0;},Aqg:function(
C5){C5.EC(A._GetAutoObject(C.Device).AnimalType);C5.N7(A._GetAutoObject(C.Device
).Breed);C5.Q6(A._GetAutoObject(C.Helper).Dr()-A._GetAutoObject(C.Helper).AmI(A.
_GetAutoObject(C.Device).AdS));C5.J1(A._GetAutoObject(C.Device).Gender);C5.Nt(A.
_GetAutoObject(C.Device).WhereAbouts);},AMr:function(Rt,C5){var FJ=0;switch(Rt){
case 0:FJ=A._GetAutoObject(C.Helper).An6(C5.NaisId);break;case 1:FJ=A._GetAutoObject(
C.Helper).An6(C5.TransponderId);break;case 3:FJ=A._GetAutoObject(C.Device).Aq4;break;
case 2:FJ=A._GetAutoObject(C.Device).Aq5;break;case 4:case 5:FJ=A._GetAutoObject(
C.Device).AjR;break;default:throw new Error(AHE+Rt.toFixed());}return FJ;},Baw:function(
Aln,L$,Bcs,Bxx,Bx5){var B;var Qt=null;var XH=null;switch(Aln){case 0:{Qt=[B=A._GetAutoObject(
C.Device),B.ASQ,B.A0J];XH=[B=A._GetAutoObject(C.Device),B.Awm,B.Ay1];}break;case
1:switch(L$){case 1:{Qt=[B=A._GetAutoObject(C.Device),B.A9s,B.BbT];XH=[B=A._GetAutoObject(
C.Device),B.Awk,B.AyZ];}break;case 0:{Qt=[B=A._GetAutoObject(C.Device),B.A9t,B.BbU
];XH=[B=A._GetAutoObject(C.Device),B.Awl,B.Ay0];}break;case 2:{Qt=[B=A._GetAutoObject(
C.Device),B.ASQ,B.A0J];XH=[B=A._GetAutoObject(C.Device),B.Awm,B.Ay1];}break;default:
throw new Error(Aym+L$.toFixed());}break;default:throw new Error(AHF+Aln.toFixed(
));}if(!!Qt&&!!XH){Qt[2].call(Qt[0],Bcs);if(Bcs>0){if((XH[1].call(XH[0])>0)&&(Bxx<
Bx5))Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XH[1].call(XH[0]));else if(XH[1].call(XH[
0])<0)Qt[2].call(Qt[0],Qt[1].call(Qt[0])+XH[1].call(XH[0]));}return Qt[1].call(Qt[
0]);}return 0;},AVQ:function(C5,Aln,BxF){if(!C5||(BxF===true))return;switch(Aln){
case 0:C5.Nr(A._GetAutoObject(C.Device).Av5);break;case 1:switch(C5.Gender){case
0:C5.Nr(A._GetAutoObject(C.Device).AEz);break;case 1:C5.Nr(A._GetAutoObject(C.Device
).AEy);break;case 2:C5.Nr(A._GetAutoObject(C.Device).Av5);break;default:throw new
Error(Aym+C5.Gender.toFixed());}break;default:throw new Error(AHF+Aln.toFixed());
}},Bkg:function(Rt,C5){var result=false;switch(Rt){case 0:result=!!C5.NaisId;break;
case 1:result=!!C5.TransponderId;break;case 3:case 2:case 4:case 5:result=false;
break;default:throw new Error(AHE+Rt.toFixed());}return result;},AKq:function(C5
,Bcl,Ay7,AtF,AfN){switch(Bcl){case 2:if(AtF<=0)A._GetAutoObject(C.Device).AZ(21,
true,C5.VisualId.toFixed(),0,AfN);else A._GetAutoObject(C.Device).AZ(48,true,(C5.
VisualId.toFixed()+Ayn)+AtF.toFixed(),0,AfN);break;case 3:if(AtF<=0)A._GetAutoObject(
C.Device).AZ(21,true,A._GetAutoObject(C.Converter).Rj(C5.NaisId),0,AfN);else A._GetAutoObject(
C.Device).AZ(48,true,(A._GetAutoObject(C.Converter).Rj(C5.NaisId)+Ayn)+AtF.toFixed(
),0,AfN);break;case 4:if(AtF<=0)A._GetAutoObject(C.Device).AZ(25,true,A._GetAutoObject(
C.Converter).Rj(C5.TransponderId),0,AfN);else A._GetAutoObject(C.Device).AZ(47,true
,(A._GetAutoObject(C.Converter).Rj(C5.TransponderId)+Ayn)+AtF.toFixed(),0,AfN);break;
case 1:switch(Ay7){case 1:A._GetAutoObject(C.Device).AZ(42,true,A.jV,0,AfN);break;
case 0:A._GetAutoObject(C.Device).AZ(43,true,A.jV,0,AfN);break;case 3:case 2:case
5:case 4:A._GetAutoObject(C.Device).AZ(22,true,A.jV,0,AfN);break;default:throw new
Error(AHD+Ay7.toFixed());}break;case 5:A._GetAutoObject(C.Device).AZ(41,true,A._GetAutoObject(
C.Device).An.HL().toFixed(),0,AfN);break;case 0:break;default:throw new Error(AWu+
Bcl.toFixed());}},Bd2:function(Bcz,L$){var B;var AAu=null;switch(Bcz){case 0:AAu=[
B=A._GetAutoObject(C.Device),B.Awm,B.Ay1];break;case 1:switch(L$){case 1:AAu=[B=
A._GetAutoObject(C.Device),B.Awk,B.AyZ];break;case 0:AAu=[B=A._GetAutoObject(C.Device
),B.Awl,B.Ay0];break;case 2:AAu=[B=A._GetAutoObject(C.Device),B.Awm,B.Ay1];break;
default:throw new Error(Aym+L$.toFixed());}break;default:throw new Error(AWv+Bcz.
toFixed());}return AAu;},A7t:function(Qi,Byg){var AaV=A._NewObject(A.Core.Bq,0);
AaV.Initialize(Qi);var ABO=AaV.Year;var Bj=A._GetAutoObject(C.Device).Ps.LZ(0,ABO
);var Ve=A._NewObject(C.CalfDeregistrations,0);if(Bj<0){if(A._GetAutoObject(C.Device
).Ps.Lk())A._GetAutoObject(C.Device).AZ(51,true,A._GetAutoObject(C.Device).Ps.HL(
).toFixed(),0,null);else{Ve.G8();Ve.AkC(ABO);}}else Ve.Fl(Bj,A._GetAutoObject(C.
Device).Ps);Ve.AwG(Ve.Deregistrations+1);if(Byg)Ve.AwF(Ve.Deaths+1);Ve.Cs(A._GetAutoObject(
C.Device).Ps);},AMp:function(LW,AlP,AlH){var AKN=0;if((AlP&&(AlH===1))||(LW===1)
)AKN=1;else if((AlP&&(AlH===2))||(LW===2))AKN=2;else if(!!LW&&(LW!==5))AKN=LW;return AKN;
},BdC:function(Byx){var B;if(A._GetAutoObject(C.Device).MeasureState===1){this.S1.
Cy=A._GetAutoObject(C.Device).AcJ;this.S1.B3=Byx;this.S1.AnW(this);}},ADb:function(
){var Be=this.AOP();var Ber=A._NewObject(C.BoolFilterCriterion,0);Ber.Initialize(
38,0,true,true);Be.CY(Ber);return Be;},A6_:function(Ei){var Be=A._GetAutoObject(
C.Helper).MC();if(A._GetAutoObject(C.Device).Aqc){var A2N=A._GetAutoObject(C.Helper
).AOQ(Ei,21600,true);Be.CY(A2N);}return Be;},A7n:function(){var Be=A._GetAutoObject(
C.Helper).MC();var BeT=A._NewObject(C.UInt64FilterCriterion,0);BeT.Initialize(26
,0,0,true);Be.CY(BeT);return Be;},A7q:function(){var B;var Be=A._GetAutoObject(C.
Helper).MC();var AAA=(C.WhereAboutsFilterCriterion.isPrototypeOf(B=Be.DN(34,3))?
B:null);if(!!AAA)Be.Nw(AAA);var Bgc=A._NewObject(C.BoolFilterCriterion,0);Bgc.Initialize(
37,0,true,true);Be.CY(Bgc);return Be;},TT:function(A9,Aty,A1n){var B;A9=Math.trunc(
A9/this.ApO(Aty));A9%=this.ApO(A1n);return A9;},ApO:function(BcA){switch(BcA){case
0:return 1;case 1:return 10;case 2:return 100;case 3:return 1000;case 4:return 10000;
case 5:return 100000;case 6:return 1000000;case 7:return 10000000;case 8:return 100000000;
case 9:return 1000000000;case 10:return 10000000000;case 11:return 100000000000;
case 12:return 1000000000000;case 13:return 10000000000000;case 14:return 100000000000000;
case 15:return 1000000000000000;default:throw new Error(AWw+BcA.toFixed());}},MC:
function(){var Be=A._NewObject(C.Filter,0);var Bgz=A._NewObject(C.BoolFilterCriterion
,0);Bgz.Initialize(10,0,true,true);Be.CY(Bgz);var AAA=A._NewObject(C.WhereAboutsFilterCriterion
,0);AAA.Initialize(34,3,6,true);Be.CY(AAA);return Be;},Arf:function(aFilter){return!
this.ADf(aFilter);},ADf:function(aFilter){var Jq=0;var Aw=aFilter.AOR();while(!!
Aw){if(Aw.YQ===false)Jq++;Aw=aFilter.AOW(Aw);}return Jq;},AOP:function(){var Be=
this.MC();var Vb=A._NewObject(C.AnimalTypeFilterCriterion,0);Vb.Initialize(14,0,
1,true);Be.CY(Vb);return Be;},ADk:function(){var B;var A4S;var JH=this.BjU();A4S=(((
B=A._GetAutoObject(C.Converter).Aqz(JH))<0)?B+0x10000000000000000:B)*this.ApO(12
);if((JH===10)&&(A._GetAutoObject(C.Device).PZ>0)){var Bz5=A._GetAutoObject(C.Helper
).TT(A._GetAutoObject(C.Device).PZ,10,2)*this.ApO(8);A4S+=Bz5;}return A4S;},BjU:
function(){var JH=0;if(!!A._GetAutoObject(C.Device).B6)JH=A._GetAutoObject(C.Device
).B6;else if(A._GetAutoObject(C.Device).PZ>0)JH=A._GetAutoObject(C.Converter).S_(
A._GetAutoObject(C.Device).PZ);if(!JH)JH=A._GetAutoObject(C.Converter).A7X(A._GetAutoObject(
C.Device).Language);return JH;},ARq:function(Qg){var Aiw=A._GetAutoObject(C.Device
).An.Ael(26,Qg);return Aiw;},Aj3:function(AfO){switch(AfO){case 0:case 1:case 2:
case 3:case 4:case 5:return false;case 6:case 7:case 8:case 9:case 10:return true;
default:throw new Error(AWx+AfO.toFixed());}},BhP:function(Rt,C5){var FJ=0;switch(
Rt){case 1:FJ=A._GetAutoObject(C.Helper).An6(C5.TransponderId);break;case 0:if(!
A._GetAutoObject(C.Device).EartagNrAssignmentMode)FJ=A._GetAutoObject(C.Device).
AjR;else switch(C5.Gender){case 0:FJ=A._GetAutoObject(C.Device).Aq5;break;case 1:
FJ=A._GetAutoObject(C.Device).Aq4;break;case 2:FJ=A._GetAutoObject(C.Device).AjR;
break;default:throw new Error(AHG+C5.Gender.toFixed());}break;default:throw new Error(
AWy+Rt.toFixed());}return FJ;},Bjp:function(){var B;var Az9=(((((((A.aaR(A.acf.AhH
)+A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(C.Device).AhH)+Ayo)+A.aaR(A.acf.BoT))+
A.aaR(A.acf.Colon))+MS)+A._GetAutoObject(A.acj.KQ).Bjn(((B=A._GetAutoObject(C.Device
).Q2.Timestamp)<0)?B+0x100000000:B);return Az9;},Bjq:function(){var B;var Az9=((((((((((((((((((((((((((((
AWz+A._GetAutoObject(C.Device).R7.AEq.toFixed())+LB)+A._GetAutoObject(C.Device).
R7.AEv.toFixed())+LB)+A._GetAutoObject(C.Device).R7.AGC.toFixed())+O_)+A._GetAutoObject(
C.Device).R7.ACD)+O_)+A._GetAutoObject(A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device
).R7.Timestamp)<0)?B+0x100000000:B))+MS)+AWA)+A._GetAutoObject(C.Device).SG.AEq.
toFixed())+LB)+A._GetAutoObject(C.Device).SG.AEv.toFixed())+LB)+A._GetAutoObject(
C.Device).SG.AGC.toFixed())+O_)+A._GetAutoObject(C.Device).SG.ACD)+O_)+A._GetAutoObject(
A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device).SG.Timestamp)<0)?B+0x100000000:B))+
MS)+AWB)+A._GetAutoObject(C.Helper).BjX())+O_)+A._GetAutoObject(C.Device).GetCommitHash(
))+O_)+A._GetAutoObject(C.Device).GetCommitCount().toFixed())+O_)+A._GetAutoObject(
A.acj.KQ).AjJ(A._GetAutoObject(C.Device).GetCommitEpoch());return Az9;},Bjo:function(
){var B;var Az9=(((((((((((((((((((((AWC+A._GetAutoObject(C.Device).Q2.ARS.toFixed(
))+LB)+A._GetAutoObject(C.Device).Q2.ART.toFixed())+LB)+A._GetAutoObject(C.Device
).Q2.ARR.toFixed())+MS)+A.aaR(A.acf.A63))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(
A.acj.KQ).AjJ(((B=A._GetAutoObject(C.Device).Q2.Timestamp)<0)?B+0x100000000:B))+
Ayo)+AWD)+A._GetAutoObject(C.Device).S7.AVG.toFixed())+LB)+A._GetAutoObject(C.Device
).S7.AVH.toFixed())+LB)+A._GetAutoObject(C.Device).S7.AVF.toFixed())+MS)+A.aaR(A.
acf.A63))+A.aaR(A.acf.Colon))+Oj)+A._GetAutoObject(A.acj.KQ).AjJ(((B=A._GetAutoObject(
C.Device).S7.Timestamp)<0)?B+0x100000000:B);return Az9;},A7o:function(A1n){var B;
var O;var AA9=A.jV;for(O=1;O<=A1n;O=O+1)if(!!A.abz(0,2))AA9=AA9+String.fromCharCode(
A.abz(97,104)&0xFFFF);else AA9=AA9+String.fromCharCode(A.abz(48,57)&0xFFFF);return AA9;
},Abx:function(Eo){var Azo=0;if(Eo===1)Eo=0;var Bdh=this.AgE.Avu(Eo);if(Bdh>=0)Azo=
this.AfA.Get(Bdh);return Azo;},ADm:function(Eo){var FZ=0;var ABM=this.AgE.Avu(Eo
);if(ABM>=0)FZ=this.Afz.Get(ABM);return FZ;},ADl:function(Eo){var FZ=0;var ABM=this.
AgE.Avu(Eo);if(ABM>=0)FZ=this.Afy.Get(ABM);return FZ;},A7e:function(){var Be=this.
MC();var Vb=A._NewObject(C.AnimalTypeFilterCriterion,0);Vb.Initialize(14,0,A._GetAutoObject(
C.Device).ACW,true);Be.CY(Vb);return Be;},ARu:function(Jn){var BN=Math.trunc(Jn/
1000000000000)|0;if(!BN)return 0;else if(BN>=900)return 1;else if(!A._GetAutoObject(
C.Converter).ANG(BN))return 2;else return 3;},A7s:function(BAN){var Be=A._GetAutoObject(
C.Helper).ADe();var AfT=A._GetAutoObject(C.Helper).A6$(3,BAN);AfT.YQ=true;Be.CY(
AfT);return Be;},A6$:function(Ec,Bck){var Aw=A._NewObject(C.UInt32FilterCriterion
,0);Aw.EJ=4;switch(Ec){case 2:{Aw.Operator=3;Aw.A6=A._GetAutoObject(C.Helper).ZX(
Bck);}break;case 3:{Aw.Operator=2;Aw.A6=A._GetAutoObject(C.Helper).ZX(Bck-1);}break;
default:A.ab5("%s%e",AHH,Ec);}return Aw;},BjX:function(){return(((A._GetAutoObject(
C.Device).GetVersionMajor().toFixed()+LB)+A._GetAutoObject(C.Device).GetVersionMinor(
).toFixed())+LB)+A._GetAutoObject(C.Device).GetVersionRev().toFixed();},A5A:function(
Rt,C5){var FJ=0;switch(Rt){case 0:FJ=C5.VisualId;break;case 2:FJ=A._GetAutoObject(
C.Helper).An6(C5.TransponderId);break;case 3:if(C5.NaisId>0)FJ=A._GetAutoObject(
C.Helper).An6(C5.NaisId);else FJ=C5.VisualId;break;case 1:if(!A._GetAutoObject(C.
Device).EartagNrAssignmentMode)FJ=A._GetAutoObject(C.Device).AjR;else switch(C5.
Gender){case 0:FJ=A._GetAutoObject(C.Device).Aq5;break;case 1:FJ=A._GetAutoObject(
C.Device).Aq4;break;case 2:FJ=A._GetAutoObject(C.Device).AjR;break;default:throw new
Error(AHG+C5.Gender.toFixed());}break;default:throw new Error(AWE+Rt.toFixed());
}return FJ;},Bax:function(){var B;var I3=null;var To=0;if(!A._GetAutoObject(C.Device
).EartagNrAssignmentMode){I3=[B=A._GetAutoObject(C.Device),B.Ans,B.Aov];To=A._GetAutoObject(
C.Device).Au7;}else switch(A._GetAutoObject(C.Helper).W.Gender){case 1:{I3=[B=A.
_GetAutoObject(C.Device),B.Awg,B.AyX];To=A._GetAutoObject(C.Device).ACO;}break;case
0:{I3=[B=A._GetAutoObject(C.Device),B.Awh,B.AyY];To=A._GetAutoObject(C.Device).ACP;
}break;case 2:{I3=[B=A._GetAutoObject(C.Device),B.Ans,B.Aov];To=A._GetAutoObject(
C.Device).Au7;}break;default:;}if(!!I3)switch(To){case 1:I3[2].call(I3[0],A._GetAutoObject(
C.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(C.Helper).
W.VisualId+1);break;default:;}},A7V:function(Qg,C5){return(C5.NaisId!==Qg)&&this.
ARq(Qg);},Bkp:function(Iz,C5){return(C5.TransponderId!==Iz)&&this.ARt(Iz);},AON:
function(){var Be=A._GetAutoObject(C.Helper).A7q();var AAs=A._NewObject(C.UInt64FilterCriterion
,0);AAs.Initialize(35,5,0,true);Be.CY(AAs);return Be;},Avv:function(){var Be=A._GetAutoObject(
C.Helper).A7q();var AAs=A._NewObject(C.UInt64FilterCriterion,0);AAs.Initialize(35
,0,0,true);Be.CY(AAs);return Be;},J7:function(A1e,Ah3){A1e.Ai(Ah3);A1e.As(Ah3);A1e.
Z(Ah3);},ANA:function(Ah5){var B;var Aa;var A3q=false;var XB=Ah5.TU(null,0x1);while(
!!XB&&(((B=XB)?B.__proto__:null)!==A.Core.Y)){Aa=(A.kR.Cp.isPrototypeOf(XB)?XB:null
);if(!!Aa){Aa.Bh(A3q);A3q=!A3q;}XB=Ah5.TU(XB,0x1);}},Bpb:function(Iz){var Xy=A._GetAutoObject(
C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(null);var A4y=A._GetAutoObject(
C.Device).An.Aes(22,Iz);var CU=A._NewObject(C.Animal,0);CU.Fl(A4y,A._GetAutoObject(
C.Device).An);CU.PX(0);CU.Cs(A._GetAutoObject(C.Device).An);A._GetAutoObject(C.Device
).An.Bk(Xy);},A7c:function(Atx,Aoz){var Be=null;switch(Atx){case 0:Be=this.BjH(Aoz
);break;case 1:Be=this.ADe();break;default:throw new Error(Ayp+Atx.toFixed());}return Be;
},BjH:function(Bxr){var Be=A._GetAutoObject(C.Helper).MC();var AfT=this.A6$(2,Bxr
);Be.CY(AfT);return Be;},ByX:function(Atx,Aoz){var Xy=A._GetAutoObject(C.Device).
An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7c(Atx,Aoz));var CB=A._GetAutoObject(
C.Device).An.B9();var O;for(O=CB-1;O>=0;O--){A._GetAutoObject(C.Helper).GS(O);A.
_GetAutoObject(C.Helper).W.Ae4(false);A._GetAutoObject(C.Helper).W.Cs(A._GetAutoObject(
C.Device).An);}A._GetAutoObject(C.Device).An.Bk(Xy);},BjI:function(Atx,Aoz){var Xy=
A._GetAutoObject(C.Device).An.Filter;A._GetAutoObject(C.Device).An.Bk(this.A7c(Atx
,Aoz));var Gk=A._GetAutoObject(C.Device).An.B9();A._GetAutoObject(C.Device).An.Bk(
Xy);return Gk;},A7k:function(AL){var Xy=AL.Filter;AL.Bk(this.Avv());var O;var A3g=
4294967295;for(O=0;O<AL.B9();O++){var Pe=AL.Hw(O,4);if(Pe<A3g)A3g=Pe;}AL.Bk(Xy);
return A._GetAutoObject(C.Helper).Me(A3g,A._GetAutoObject(C.Helper).Dr());},ARs:
function(){if(A._GetAutoObject(C.Device).P4.Z7!==6)return false;if((A._GetAutoObject(
C.Device).P4.AsS===1529)&&(A._GetAutoObject(C.Device).P4.Ask===16900))return true;
return false;},BkF:function(Qg){if(!Qg){A.ab5("%s%U",AWF,Qg);return false;}var Bj=
A._GetAutoObject(C.Device).An.Aes(26,Qg);return this.GS(Bj);},ArA:function(){return this.
WU;},A9D:function(){return this.AhE;},Bl0:function(){return this.AUP;},Bl1:function(
){return this.AUQ;},Bl4:function(){return this.AG3;},_Init:function(aArg){C.AmN.
_Init.call(this,aArg);C.Animal._Init.call(this.W={I:this},0);A.Core.Bq._Init.call(
this.Av={I:this},0);A.acl.Go._Init.call(this.KM={I:this},0);A.acl.Go._Init.call(
this.S1={I:this},0);C.AML._Init.call(this.Ad0={I:this},0);C.AVw._Init.call(this.
UL={I:this},0);C.AVv._Init.call(this.UK={I:this},0);C.TN._Init.call(this.Aen={I:
this},0);C.AWa._Init.call(this.Afz={I:this},0);C.AV$._Init.call(this.Afy={I:this
},0);C.AV_._Init.call(this.Afx={I:this},0);C.AWc._Init.call(this.AfA={I:this},0);
C.AMM._Init.call(this.AgE={I:this},0);this.__proto__=C.HelperClass;var B;this.KM.
HP(1);this.KM.Fp(3000);this.KM.B3=100;this.S1.AwL(10);this.S1.WN(5);this.S1.HP(1
);this.S1.Fp(4000);this.Aen.B3=false;this.Aen.Cy=true;this.Aen.HP(1);this.Aen.Fp(
100);this.KM.SJ=[this,this.BCU];this.KM.Q=[this,this.Bl4,this.Bol];this.S1.SJ=[this
,this.BCW];this.S1.Q=[B=A._GetAutoObject(C.Device),B.AEX,B.AI3];this.Aen.Q=[B=A.
_GetAutoObject(C.Device),B.AEY,B.AI4];this.Init(aArg);var J$=this._variants();if(
J$){this.K={};J$._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.
call(this);this.__proto__=C.AmN;this.W._Done();this.Av._Done();this.KM._Done();this.
S1._Done();this.Ad0._Done();this.UL._Done();this.UK._Done();this.Aen._Done();this.
Afz._Done();this.Afy._Done();this.Afx._Done();this.AfA._Done();this.AgE._Done();
C.AmN._Done.call(this);},_ReInit:function(){C.AmN._ReInit.call(this);this.W._ReInit(
);this.Av._ReInit();this.KM._ReInit();this.S1._ReInit();this.Ad0._ReInit();this.
UL._ReInit();this.UK._ReInit();this.Aen._ReInit();this.Afz._ReInit();this.Afy._ReInit(
);this.Afx._ReInit();this.AfA._ReInit();this.AgE._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;C.AmN._Mark.call(this,D);if((B=this.WU)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AhE)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AUP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AUQ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.W)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aen)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afz)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Afy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:
function(){return A.acq.HelperClass._variants();},K:null,_className:"Device::HelperClass"
};C.Helper={_Init:function(){C.HelperClass._Init.call(this,0);},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.BoolFilterCriterion={A6:false
,Abq:function(){var Aw=A._NewObject(C.BoolFilterCriterion,0);Aw.E9(this);return Aw;
},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.BoolFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ec,A9,
Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.BoolFilterCriterion;
},_className:"Device::BoolFilterCriterion"};C.UInt32FilterCriterion={A6:0,Abq:function(
){var Aw=A._NewObject(C.UInt32FilterCriterion,0);Aw.E9(this);return Aw;},E9:function(
AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.UInt32FilterCriterion.isPrototypeOf(
AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ec,A9,Qf){this.EJ=Bc;
this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.UInt32FilterCriterion;},_className:"Device::UInt32FilterCriterion"
};C.OverlayMenu={None:0,Home:1,AutoAction:2,MenuItemSettings:3,RatingSettings:4,
WeighingSettings:5,Options:6,AnimalSearch:7,ActionSettings:8,MeasurementReady:9,
AnimalMultiInfoMenu:10,AnimalSearchUnfiltered:11,AnimalSearchDriedOff:12,MassRecordingMenu:
13,MassRecordingDefaults:14,MassRecordingFields:15,BirthRegistrationsListMenu:16
,LAST:17};C.EnumToString={BT:function(A7){throw new Error(As8+A7.toFixed());},Lz:
function(A7){return this.BT(A7);},_Init:function(aArg){this.__proto__=C.EnumToString;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Device::EnumToString"};C.ScreenTypeToString={BT:function(
A7){var AJ4=A7;var BC;switch(AJ4){case 3:BC=A.aaR(A.acf.AvB);break;case 34:BC=A.
aaR(A.acf.TC);break;case 35:BC=A.aaR(A.acf.VC);break;case 43:BC=A.aaR(A.acf.AOM);
break;default:BC=this.Bqz(A7);}return BC;},Bqz:function(A7){var AJ4=A7;var BC=A.
jV;switch(AJ4){case 0:BC=Ayq;break;case 2:BC=AWG;break;case 4:BC=AHI;break;case 39:
BC=AWH;break;case 38:BC=AHJ;break;case 63:BC=AHK;break;case 64:BC=AHL;break;case
82:BC=AWI;break;case 83:BC=AHM;break;case 92:BC=AWJ;break;case 93:BC=AWK;break;case
65:BC=Rq;break;case 3:BC=U4;break;case 6:BC=AWL;break;case 16:BC=AWM;break;case 22:
BC=AWN;break;case 42:BC=AWO;break;case 88:BC=AWP;break;case 87:BC=AWQ;break;case
89:BC=AWR;break;case 95:BC=AhW;break;case 17:BC=AHN;break;case 23:BC=AWS;break;case
18:BC=AWT;break;case 19:BC=AHO;break;case 37:BC=AHP;break;case 76:BC=Ayr;break;case
1:BC=Qc;break;case 5:BC=AWU;break;case 7:BC=AWV;break;case 81:BC=AWW;break;case 8:
BC=As9;break;case 9:BC=AWX;break;case 40:BC=AWY;break;case 41:BC=AWZ;break;case 24:
BC=AW0;break;case 10:BC=AW1;break;case 60:BC=AW2;break;case 21:BC=As_;break;case
11:BC=AW3;break;case 29:BC=AW4;break;case 48:BC=AW5;break;case 30:BC=AW6;break;case
12:BC=AW7;break;case 13:BC=AW8;break;case 14:BC=AW9;break;case 15:BC=AW_;break;case
69:BC=AW$;break;case 70:BC=AXa;break;case 20:BC=AHQ;break;case 25:BC=Alc;break;case
66:BC=AXb;break;case 59:BC=AXc;break;case 58:BC=AXd;break;case 56:BC=Ays;break;case
57:BC=Ald;break;case 68:BC=Ale;break;case 67:BC=Ayt;break;case 84:BC=Aoj;break;case
77:BC=AhX;break;case 26:BC=AXe;break;case 28:BC=Ayu;break;case 27:BC=AHR;break;case
31:BC=AfG;break;case 78:BC=AHS;break;case 34:BC=Aan;break;case 35:BC=Alf;break;case
32:BC=Aok;break;case 45:BC=AXf;break;case 49:BC=AXg;break;case 55:BC=AXh;break;case
54:BC=AXi;break;case 33:BC=AXj;break;case 36:BC=As$;break;case 50:BC=AHT;break;case
75:BC=AHU;break;case 43:BC=AXk;break;case 44:BC=AXl;break;case 61:BC=AXm;break;case
62:BC=AXn;break;case 46:BC=AXo;break;case 47:BC=AXp;break;case 85:BC=AXq;break;case
86:BC=AXr;break;case 71:BC=AXs;break;case 72:BC=AXt;break;case 74:BC=AXu;break;case
73:BC=Ayv;break;case 51:BC=AHV;break;case 52:BC=AHW;break;case 53:BC=AHX;break;case
79:BC=AHY;break;case 80:BC=AHZ;break;case 90:BC=AH0;break;case 91:BC=AXv;break;case
94:BC=AXw;break;default:throw new Error(AXx+AJ4.toFixed());}return BC;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScreenTypeToString;}
,_className:"Device::ScreenTypeToString"};C.OverlayMenuToString={BT:function(A7){
var Bf8=A7;var Ph=A.jV;switch(Bf8){case 0:Ph=AXy;break;case 1:Ph=U4;break;case 8:
Ph=AXz;break;case 2:Ph=AXA;break;case 3:Ph=AXB;break;case 4:Ph=Ayw;break;case 5:
Ph=AH1;break;case 6:Ph=AXC;break;case 7:Ph=AH2;break;case 11:Ph=AhY;break;case 12:
Ph=U5;break;case 9:Ph=AXD;break;case 10:Ph=Aao;break;case 14:Ph=AXE;break;case 15:
Ph=AXF;break;case 13:Ph=Alg;break;case 16:Ph=AfH;break;default:throw new Error(AhZ+
Bf8.toFixed());}return Ph;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.OverlayMenuToString;},_className:"Device::OverlayMenuToString"
};C.ScanStateToString={BT:function(A7){var BgH=A7;var Bp=A.jV;switch(BgH){case 4:
Bp=Aol;break;case 0:Bp=Ayx;break;case 2:Bp=Pa;break;case 3:Bp=AXG;break;case 1:Bp=
AH3;break;default:throw new Error(AH4+BgH.toFixed());}return Bp;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ScanStateToString;},
_className:"Device::ScanStateToString"};C.MeasureStateToString={BT:function(A7){
var BeN=A7;var Bp=A.jV;switch(BeN){case 4:Bp=Aol;break;case 0:Bp=Ayx;break;case 2:
Bp=AXH;break;case 1:Bp=AH3;break;case 3:Bp=Ayy;break;default:throw new Error(AH5+
BeN.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.call(this,
aArg);this.__proto__=C.MeasureStateToString;},_className:"Device::MeasureStateToString"
};C.TemperatureUnit={Celsius:0,Fahrenheit:1,LAST:2};C.TemperatureUnitToString={BT:
function(A7){var Bg7=A7;var Ap5=A.jV;switch(Bg7){case 0:Ap5=A.aaR(A.acf.BqQ);break;
case 1:Ap5=A.aaR(A.acf.BqR);break;default:throw new Error(AXI+Bg7.toFixed());}return Ap5;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TemperatureUnitToString;
},_className:"Device::TemperatureUnitToString"};C.AnimalType={DairyCalf:0,DairyCow:
1,SheepLamb:2,LAST:3};C.AnimalTypeToString={BT:function(A7){var ALc=A7;var type=
A.jV;switch(ALc){case 0:type=A.aaR(A.acf.Bid);break;case 1:type=A.aaR(A.acf.Biq);
break;case 2:type=A.aaR(A.acf.Bkx);break;default:throw new Error(AXJ+ALc.toFixed(
));}return type;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalTypeToString;},_className:"Device::AnimalTypeToString"};C.Language={
Default:0,German:1,Spanish:2,French:3,Italian:4,Finnish:5,Chinese_TW:6,Turkish:7
,Greek:8,Russian:9,Dutch:10,Czech:11,Estonian:12,Bulgarian:13,Bosnian:14,Norwegian:
15,Ukrainian:16,Danish:17,Hungarian:18,Japanese:19,Latvian:20,Polish:21,Portuguese:
22,Romanian:23,Swedish:24,Croatian:25,Lithuanian:26,Slovenian:27,LAST:28};C.LanguageToString={
BT:function(A7){var AAm=A7;var I4=A.jV;switch(AAm){case 14:I4=AXK;break;case 13:
I4=AXL;break;case 6:I4=AXM;break;case 25:I4=AXN;break;case 11:I4=AXO;break;case 17:
I4=AXP;break;case 0:I4=AH6;break;case 10:I4=AXQ;break;case 12:I4=AH7;break;case 5:
I4=AH8;break;case 3:I4=Ayz;break;case 1:I4=AXR;break;case 8:I4=AXS;break;case 18:
I4=AXT;break;case 4:I4=AXU;break;case 19:I4=AXV;break;case 20:I4=AXW;break;case 26:
I4=AXX;break;case 15:I4=AXY;break;case 21:I4=Aom;break;case 22:I4=Ata;break;case
23:I4=AH9;break;case 9:I4=AXZ;break;case 27:I4=AX0;break;case 2:I4=AX1;break;case
24:I4=AX2;break;case 7:I4=AX3;break;case 16:I4=AX4;break;default:throw new Error(
AH_+AAm.toFixed());}return I4;},Lz:function(A7){var AAm=A7;var CN=A.jV;switch(AAm
){case 14:CN=AX5;break;case 13:CN=Xc;break;case 6:CN=AX6;break;case 25:CN=UZ;break;
case 11:CN=AX7;break;case 17:CN=AX8;break;case 0:CN=AX9;break;case 10:CN=U2;break;
case 12:CN=AX_;break;case 5:CN=U0;break;case 3:CN=Xe;break;case 1:CN=O9;break;case
8:CN=AX$;break;case 18:CN=Oi;break;case 4:CN=Xf;break;case 19:CN=AYa;break;case 20:
CN=U1;break;case 26:CN=Xh;break;case 15:CN=Xj;break;case 21:CN=Xk;break;case 22:
CN=Xl;break;case 23:CN=Ro;break;case 9:CN=Th;break;case 27:CN=AH$;break;case 2:CN=
Aai;break;case 24:CN=AYb;break;case 7:CN=Aak;break;case 16:CN=K2;break;default:throw new
Error(AH_+AAm.toFixed());}return CN;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.LanguageToString;},_className:"Device::LanguageToString"
};C.Gender={Male:0,Female:1,Unknown:2,LAST:3};C.BirthType={Single:0,Twins:1,Triplets:
2,Quadruplets:3,LAST:4};C.GenderToString={BT:function(A7){var AtX=A7;var AKj=A.jV;
switch(AtX){case 0:AKj=A.aaR(A.acf.Male);break;case 1:AKj=A.aaR(A.acf.Female);break;
case 2:AKj=A.aaR(A.acf.Unknown);break;default:throw new Error(AYc+AtX.toFixed());
}return AKj;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.GenderToString;},_className:"Device::GenderToString"};C.BirthTypeToString={BT:
function(A7){var type=A7;var AfX=A.jV;switch(type){case 0:AfX=A.aaR(A.acf.BpO);break;
case 1:AfX=A.aaR(A.acf.BqM);break;case 2:AfX=A.aaR(A.acf.Triplets);break;case 3:
AfX=A.aaR(A.acf.Quadruplets);break;default:throw new Error(AIa+type.toFixed());}
return AfX;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BirthTypeToString;},_className:"Device::BirthTypeToString"};C.SyncState={Idle:
0,Init:1,Exporting:2,ImportStart:3,Importing:4,ImportFinish:5,Ready:6,Error:7,LAST:
8};C.SyncStateToString={BT:function(A7){var Bg1=A7;var Bp=A.jV;switch(Bg1){case 7:
Bp=Aol;break;case 0:Bp=Ayx;break;case 6:Bp=Ayy;break;case 2:Bp=AIb;break;case 5:
Bp=AIc;break;case 3:Bp=AId;break;case 4:Bp=AyA;break;case 1:Bp=AyB;break;default:
throw new Error(AIe+Bg1.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.SyncStateToString;},_className:"Device::SyncStateToString"
};C.RatedAttributeToString={BT:function(A7){var AA_=A7;switch(AA_){case 0:return A.
jV;case 1:return A.aaR(A.acf.Bo0);case 4:return A.aaR(A.acf.BoZ);case 3:return A.
aaR(A.acf.Bo1);case 2:return A.aaR(A.acf.BoY);default:throw new Error(AIf+AA_.toFixed(
));}},Lz:function(A7){var AA_=A7;switch(AA_){case 0:return A.jV;case 1:return A.
aaR(A.acf.Feed);case 4:return A.aaR(A.acf.AGv);case 3:return A.aaR(A.acf.AGw);case
2:return A.aaR(A.acf.AGt);default:throw new Error(AIf+AA_.toFixed());}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatedAttributeToString;
},_className:"Device::RatedAttributeToString"};C.AssesmentToString={BT:function(
A7){var Alw=A7;var Azv=A.jV;switch(Alw){case 0:case 5:Azv=A.jV;break;case 3:Azv=
A.aaR(A.acj.BpU);break;case 2:Azv=A.aaR(A.acj.BpW);break;case 1:Azv=A.aaR(A.acj.
BpV);break;default:throw new Error(AIg+Alw.toFixed());}return Azv;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AssesmentToString;},
_className:"Device::AssesmentToString"};C.PopupId={Unknown:0,SevereError:1,EnterSleep:
2,About:3,WarningDataSync:4,SuccessDataSync:5,WarningRestart:6,WarningFactorySettings:
7,SuccessResetFactorySettings:8,ShutDown:9,TechnicalDetails:10,ScanError:11,ScanNotFound:
12,ScannedAnimalNotFound:13,AnimalNotFound:14,SuccessUnregister:15,DataSynchInProgress:
16,AddedToAlarm:17,RemovedFromAlarm:18,AddedToWatch:19,RemovedFromWatch:20,AnimalIdAlreadyExists:
21,MissingAnimalId:22,SuccessCreationNewAnimals:23,AnimalCreationInProgress:24,TransponderAlreadyRegistered:
25,SuccessCreationNewAnimal:26,WarningNoActionDefined:27,WarningNoMenuItemVisible:
28,WarningEnterPresentationMode:29,WarningNoAnimalsRegistered:30,HelpAnimalInfoRating:
31,WarningReassignTransponder:32,WarningResetAnimalData:33,SuccessResetAnimalData:
34,SuccessUnregisterPerished:35,ScannedTransponderNotFound:36,WarningResetWeightSettings:
37,WarningResetTempThresholds:38,UpdateFirmware:39,ConfirmFirmwareUpdated:40,WarningMaxNumAnimalsReached:
41,MissingTransponder:42,MissingEartagNumber:43,WarningResetToDefault:44,WarningEartagNumberTooShort:
45,WarningNoValidCountryCode:46,TransponderAlreadyRegisteredContinuable:47,AnimalIdAlreadyExistsContinuable:
48,EvaluationInProgress:49,WarningMaxNumRatingsReached:50,WarningMaxNumCalfDeregistrationsReached:
51,WarningOutdatedAnimalWeights:52,WarningWeightEvaluationSingular:53,AddedToDryOff:
54,RemovedFromDryOff:55,WarningWeightEvaluationPlural:56,WarningOutdatedAnimalWeight:
57,ErrorsDeviceDriverCheck:58,QuestionAddAnotherCalfMultiples:59,RemovedFromBirthNoticePending:
60,RemovedAnimalBirth:61,RemovedAllBirthNoticesPending:62,MissingAnimalIdMother:
63,WarningActionNotApplicable:64,SuccessClearAnimalLoss:65,WarningNoActionsForAnimalLoss:
66,SuccessLinkTransponder:67,SuccessLinkNaisId:68,CannotReassignNaisId:69,WarningDataExportHitBirthFailed:
70,SuccessDataExportHitBirth:71,SuccessDataExportHitBirthDownload:72,WarningNoPremisesID:
73,WarningNoFlashDrivePresent:74,ConfirmBootloaderUpdated:75,UpdateFirmwareBatteryLow:
76,InfoSoftwareVersions:77,InfoHardwareVersions:78,InfoSerial:79,SuccessCreateBackup:
80,SuccessRestoreBackup:81,FailedCreateBackup:82,FailedRestoreBackup:83,DemoFunctionNotAvailable:
84,MissingTransponderId:85,SuccessUnlinkTransponder:86,WarningImpreciseTimeSetting:
87,WarningDataExportAnimalsFailed:88,SuccessDataExportAnimalsRatings:89,SuccessDataExportAnimalsDownload:
90,CreateBackupInProgress:91,RestoreBackupInProgress:92,WarningNoBackupFilePresent:
93,WarningNoBackupPathPresent:94,ConfirmationRestoreBackup:95,RemovedAllPurchasedNoticesPending:
96,WarningDataExportPurchasedFailed:97,RemovedFromPurchasedNoticePending:98,SuccessDataExportPurchasedDownload:
99,SuccessDataExportPurchased:100,WarningParsingDateFailed:101,WarningParsedDateInFutureInvalid:
102,WarningParsingNaisIdFailed:103,RemovedAnimalPurchased:104,WarningParsingShortNaisIdWithoutPremisesId:
105,SuccessChangeTransponder:106,TransponderAlreadyRegisteredCapturable:107,ConfirmationMassDeregistration:
108,SuccessMassDeregistration:109,DataExportInProgress:110,BarcodeScannerConnectedSwitchScreen:
111,BarcodeScannerDisconnectedSwitchScreen:112,SuccessDataExportHitBirthResetAdvice:
113,SuccessDataExportPurchasedResetAdvice:114,WarningResetDeviceData:115,SuccessResetSettings:
116,ScannedNaisIdNotFound:117,WarningNoPremisesCountry:118,LAST:119};C.PopupState={
Queued:0,Unknown:1,Displayed:2,ClosedAfterTimeOut:3,ClosedWithOk:4,ClosedWithCancel:
5,ClosedByMiddleware:6,ClosedWithYes:7,ClosedWithNo:8,Opened:9};C.PopupContext={
AGg:null,AkE:A.jV,Ak0:0,PopupState:1,Id:0,Show:false,Bn5:function(E){var B;if(this.
PopupState===E)return;this.PopupState=E;if(!!this.AGg)(B=this.AGg)?B[1].call(B[0
],this):null;},_Init:function(aArg){this.__proto__=C.PopupContext;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AGg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::PopupContext"
};C.Boolean={No:0,Yes:1,LAST:2};C.BooleanToYesNo={BT:function(A7){switch(A7){case
0:return A.aaR(A.acf.No);case 1:return A.aaR(A.acf.Yes);default:return AyC+A7.toFixed(
);}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.
BooleanToYesNo;},_className:"Device::BooleanToYesNo"};C.PopupIdToString={BT:function(
A7){var AdD=A7;var At=A.jV;var AJ2;AJ2=A.aaR(A.acf.Bq_)+MS;switch(AdD){case 0:At=
A.aaR(A.acf.Unknown);break;case 1:At=A.aaR(A.acf.SevereError);break;case 58:At=A.
aaR(A.acf.Bjc);break;case 2:At=A.aaR(A.acf.Bja);break;case 3:At=A.aaR(A.acf.BqW);
break;case 77:At=A._GetAutoObject(C.Helper).Bjq();break;case 78:At=A._GetAutoObject(
C.Helper).Bjo();break;case 79:At=A._GetAutoObject(C.Helper).Bjp();break;case 9:At=
A.aaR(A.acf.Brm);break;case 5:At=A.aaR(A.acf.SuccessDataSync);break;case 8:At=A.
aaR(A.acf.SuccessResetFactorySettings);break;case 116:At=A.aaR(A.acf.Bqc);break;
case 34:At=A.aaR(A.acf.SuccessResetAnimalData);break;case 10:At=A._GetAutoObject(
C.Device).ADj();break;case 82:At=A.aaR(A.acf.Bje);break;case 83:At=A.aaR(A.acf.Bjf
);break;case 80:At=A.aaR(A.acf.Bp6);break;case 81:At=A.aaR(A.acf.SuccessRestoreBackup
);break;case 91:At=A.aaR(A.acf.Bh2);break;case 92:At=A.aaR(A.acf.Bpf);break;case
4:At=A.aaR(A.acf.WarningDataSync);break;case 7:At=A.aaR(A.acf.Brk);break;case 33:
At=A.aaR(A.acf.WarningResetAnimalData);break;case 115:At=A.aaR(A.acf.WarningResetDeviceData
);break;case 6:At=A.aaR(A.acf.WarningRestart);break;case 27:At=A.aaR(A.acf.WarningNoActionDefined
);break;case 64:At=A.aaR(A.acf.WarningActionNotApplicable);break;case 28:At=A.aaR(
A.acf.WarningNoMenuItemVisible);break;case 29:At=A.aaR(A.acf.WarningEnterPresentationMode
);break;case 30:At=A.aaR(A.acf.WarningNoAnimalsRegistered);break;case 41:At=((AJ2+
A.aaR(A.acf.AR0))+MS)+A.aaR(A.acf.BkL);break;case 50:At=((AJ2+A.aaR(A.acf.AR0))+
MS)+A.aaR(A.acf.BkN);break;case 51:At=((AJ2+A.aaR(A.acf.AR0))+MS)+A.aaR(A.acf.BkM
);break;case 42:At=A.aaR(A.acf.Bri);break;case 45:At=A.aaR(A.acf.Brc);break;case
46:At=A.aaR(A.acf.WarningNoValidCountryCode);break;case 57:At=A.aaR(A.acf.WarningOutdatedAnimalWeight
);break;case 52:At=A.aaR(A.acf.WarningOutdatedAnimalWeights);break;case 53:At=A.
aaR(A.acf.WarningWeightEvaluationSingular);break;case 56:At=A.aaR(A.acf.WarningWeightEvaluationPlural
);break;case 11:At=A.aaR(A.acf.ScanError);break;case 12:At=A.aaR(A.acf.ScanNotFound
);break;case 13:At=A.aaR(A.acf.BhU);break;case 36:At=A.aaR(A.acf.BqH);break;case
117:At=A.aaR(A.acf.Bro);break;case 14:At=A.aaR(A.acf.AnimalNotFound);break;case 15:
At=A.aaR(A.acf.SuccessUnregister);break;case 35:At=A.aaR(A.acf.SuccessUnregisterPerished
);break;case 26:At=A.aaR(A.acf.SuccessCreationNewAnimal);break;case 23:At=A.aaR(
A.acf.SuccessCreationNewAnimals);break;case 24:At=A.aaR(A.acf.Bit);break;case 49:
At=A.aaR(A.acf.EvaluationInProgress);break;case 16:At=A.aaR(A.acf.Biy);break;case
17:At=A.aaR(A.acf.BpY);break;case 18:At=A.aaR(A.acf.Bqa);break;case 19:At=A.aaR(
A.acf.BpZ);break;case 20:At=A.aaR(A.acf.Bqb);break;case 54:At=A.aaR(A.acf.Bp7);break;
case 55:At=A.aaR(A.acf.Bp_);break;case 21:At=A.aaR(A.acf.BaB);break;case 48:At=(
A.aaR(A.acf.BaB)+MS)+A.aaR(A.acf.A6g);break;case 22:At=A.aaR(A.acf.Bre);break;case
63:At=A.aaR(A.acf.Brf);break;case 85:At=A.aaR(A.acf.Brh);break;case 43:At=A.aaR(
A.acf.Brg);break;case 25:At=A.aaR(A.acf.Bak);break;case 47:At=(A.aaR(A.acf.Bak)+
MS)+A.aaR(A.acf.A6g);break;case 107:At=A.aaR(A.acf.BqS);break;case 31:{var BAw=(((((((((((((((((((
A.aaR(A.acf.Bil)+Ayo)+A.aaR(A.acf.ANC))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bin)
)+MS)+A.aaR(A.acf.AOC))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bjk))+MS)+A.aaR(A.acf.
AUz))+A.aaR(A.acf.Colon))+Oj)+A.aaR(A.acf.Bo3))+MS)+A.aaR(A.acf.AUy))+A.aaR(A.acf.
Colon))+Oj)+A.aaR(A.acf.Bo2);At=BAw;}break;case 32:At=A.aaR(A.acf.BqI);break;case
69:At=A.aaR(A.acf.BkY);break;case 44:At=A.aaR(A.acf.Brl);break;case 37:At=A.aaR(
A.acf.WarningResetWeightSettings);break;case 38:At=A.aaR(A.acf.WarningResetTempThresholds
);break;case 39:At=A.aaR(A.acf.BoU);break;case 76:At=(A.aaR(A.acf.A5V)+MS)+A.aaR(
A.acf.AUB);break;case 40:At=A.aaR(A.acf.Bp8);break;case 75:At=A.aaR(A.acf.Bp0);break;
case 59:At=A.aaR(A.acf.QuestionAddAnotherCalfMultiples);break;case 62:At=A.aaR(A.
acf.Bp2);break;case 96:At=A.aaR(A.acf.Bp3);break;case 60:At=A.aaR(A.acf.Bp4);break;
case 98:At=A.aaR(A.acf.Bp5);break;case 61:At=A.aaR(A.acf.Bqd);break;case 104:At=
A.aaR(A.acf.Bqe);break;case 65:At=A.aaR(A.acf.SuccessClearAnimalLoss);break;case
66:At=A.aaR(A.acf.WarningNoActionsForAnimalLoss);break;case 67:At=A.aaR(A.acf.SuccessLinkTransponder
);break;case 106:At=A.aaR(A.acf.Bp1);break;case 86:At=A.aaR(A.acf.SuccessUnlinkTransponder
);break;case 68:At=A.aaR(A.acf.Bp9);break;case 70:At=A.aaR(A.acf.Bjg);break;case
71:At=A.aaR(A.acf.Bac);break;case 72:At=A.aaR(A.acf.Bqh);break;case 113:At=(A.aaR(
A.acf.Bac)+MS)+A.aaR(A.acf.A7$);break;case 97:At=A.aaR(A.acf.Bji);break;case 100:
At=(A.aaR(A.acf.Bad)+MS)+A.aaR(A.acf.A$A);break;case 114:At=(A.aaR(A.acf.Bad)+MS
)+A.aaR(A.acf.A7$);break;case 99:At=A.aaR(A.acf.Bqi);break;case 88:At=A.aaR(A.acf.
Bjh);break;case 89:At=A.aaR(A.acf.Bqf);break;case 90:At=A.aaR(A.acf.Bqg);break;case
73:At=A.aaR(A.acf.WarningNoPremisesID);break;case 118:At=A.aaR(A.acf.WarningNoPremisesCountry
);break;case 74:At=A.aaR(A.acf.WarningNoFlashDrivePresent);break;case 94:At=A.aaR(
A.acf.WarningNoBackupPathPresent);break;case 93:At=A.aaR(A.acf.WarningNoBackupFilePresent
);break;case 84:At=A.aaR(A.acf.Bjx);break;case 87:At=A.aaR(A.acf.Brp);break;case
95:At=A.aaR(A.acf.Brb);break;case 108:At=A.aaR(A.acf.Brd);break;case 109:At=A.aaR(
A.acf.SuccessMassDeregistration);break;case 102:At=A.aaR(A.acf.WarningParsedDateInFutureInvalid
);break;case 101:At=A.aaR(A.acf.WarningParsingDateFailed);break;case 103:At=A.aaR(
A.acf.WarningParsingNaisIdFailed);break;case 105:At=A.aaR(A.acf.Brj);break;case 110:
At=A.aaR(A.acf.Bic);break;case 111:At=A.aaR(A.acf.Bpq);break;case 112:At=A.aaR(A.
acf.Bpr);break;default:throw new Error(AyD+AdD.toFixed());}return At;},Lz:function(
A7){var AdD=A7;var At=A.jV;switch(AdD){case 0:At=AYd;break;case 1:At=AYe;break;case
58:At=AYf;break;case 2:At=AYg;break;case 3:At=AYh;break;case 77:At=AYi;break;case
78:At=AYj;break;case 79:At=AYk;break;case 9:At=AYl;break;case 5:At=AYm;break;case
8:At=AYn;break;case 116:At=AYo;break;case 34:At=AyE;break;case 80:At=AYp;break;case
81:At=AYq;break;case 91:At=AyF;break;case 92:At=Atb;break;case 82:At=U6;break;case
83:At=Atc;break;case 10:At=AYr;break;case 4:At=AYs;break;case 7:At=AYt;break;case
33:At=AIh;break;case 115:At=AYu;break;case 6:At=AIi;break;case 27:At=AYv;break;case
64:At=AYw;break;case 28:At=AYx;break;case 29:At=Atd;break;case 30:At=AYy;break;case
41:At=AYz;break;case 50:At=AIj;break;case 51:At=AYA;break;case 42:At=AYB;break;case
45:At=AYC;break;case 46:At=AYD;break;case 57:At=AcS;break;case 52:At=AYE;break;case
53:At=AYF;break;case 56:At=AYG;break;case 11:At=AYH;break;case 12:At=AIk;break;case
13:At=AYI;break;case 36:At=AYJ;break;case 117:At=AYK;break;case 14:At=AYL;break;
case 15:At=AYM;break;case 35:At=AYN;break;case 26:At=AIl;break;case 23:At=AYO;break;
case 24:At=AYP;break;case 49:At=AYQ;break;case 16:At=AIm;break;case 17:At=AIn;break;
case 18:At=AYR;break;case 19:At=AYS;break;case 20:At=AYT;break;case 54:At=AYU;break;
case 55:At=Rr;break;case 21:At=Ate;break;case 48:At=AIo;break;case 22:At=AIp;break;
case 63:At=Aon;break;case 43:At=Aoo;break;case 85:At=AyG;break;case 25:At=AYV;break;
case 47:At=AIq;break;case 107:At=AYW;break;case 31:At=AYX;break;case 32:At=AYY;break;
case 69:At=AYZ;break;case 44:At=AY0;break;case 37:At=AY1;break;case 38:At=AY2;break;
case 39:At=AY3;break;case 76:At=AY4;break;case 40:At=AY5;break;case 75:At=AY6;break;
case 59:At=AY7;break;case 62:At=AY8;break;case 96:At=AY9;break;case 60:At=AY_;break;
case 98:At=AY$;break;case 65:At=AZa;break;case 61:At=Aop;break;case 104:At=AIr;break;
case 66:At=AZb;break;case 67:At=AIs;break;case 106:At=AIt;break;case 86:At=AcT;break;
case 68:At=AIu;break;case 70:At=AZc;break;case 71:At=AIv;break;case 72:At=AZd;break;
case 113:At=AyH;break;case 97:At=AZe;break;case 100:At=AZf;break;case 99:At=AyI;
break;case 114:At=AZg;break;case 88:At=AZh;break;case 89:At=AZi;break;case 90:At=
AIw;break;case 73:At=Aoq;break;case 118:At=AIx;break;case 74:At=AZj;break;case 94:
At=AIy;break;case 93:At=AIz;break;case 84:At=Alh;break;case 87:At=AZk;break;case
95:At=Aor;break;case 108:At=AZl;break;case 109:At=AIA;break;case 102:At=AIB;break;
case 101:At=AZm;break;case 103:At=AZn;break;case 105:At=AIC;break;case 110:At=AZo;
break;case 111:At=AZp;break;case 112:At=AZq;break;default:throw new Error(AyD+AdD.
toFixed());}return At;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.PopupIdToString;},_className:"Device::PopupIdToString"};C.PopupParamSeparator=
";";C.RatingMode={Basic:0,Extended:1,LAST:2};C.TransponderType={UNDEFINED:0,AnimalId:
1,FarmId:2,GroupId:3,PersonId:4,LAST:5};C.TransponderProtocol={UNDEFINED:0,FDX:1
,HDX:2,HDX_URBAN:3,LAST:4};C.TransponderTypeToString={BT:function(A7){var Bhi=A7;
var type=A.jV;switch(Bhi){case 1:type=AZr;break;case 2:type=AZs;break;case 3:type=
AZt;break;case 4:type=AZu;break;case 0:type=Ayq;break;default:throw new Error(AZv+
Bhi.toFixed());}return type;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.TransponderTypeToString;},_className:"Device::TransponderTypeToString"
};C.TransponderProtocolToString={BT:function(A7){var Bhg=A7;var AA7=A.jV;switch(
Bhg){case 1:AA7=AZw;break;case 2:AA7=AZx;break;case 3:AA7=AZy;break;case 0:AA7=Ayq;
break;default:throw new Error(AZz+Bhg.toFixed());}return AA7;},_Init:function(aArg
){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderProtocolToString;
},_className:"Device::TransponderProtocolToString"};C.Transponder={Id:0,TransponderProtocol:
0,TransponderType:0,AT2:function(E){if(this.TransponderType===E)return;this.TransponderType=
E;A.abo([this,this.Bme,this.AT2],0);},AT1:function(E){if(this.TransponderProtocol===
E)return;this.TransponderProtocol=E;A.abo([this,this.Bmd,this.AT1],0);},OnSetId:
function(E){if(this.Id===E)return;this.Id=E;A.abo([this,this.Uo,this.OnSetId],0);
},AOZ:function(){return A._GetAutoObject(C.Converter).BqG(this.Id);},BjF:function(
){return A._GetAutoObject(C.Converter).AsQ(this.Id);},Bme:function(){return this.
TransponderType;},Bmd:function(){return this.TransponderProtocol;},Uo:function(){
return this.Id;},_Init:function(aArg){this.__proto__=C.Transponder;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Device::Transponder"};C.RatingModeToString={BT:function(A7){var
Vn=A7;var NF=A.jV;switch(Vn){case 0:NF=A.aaR(A.acf.Basic);break;case 1:NF=A.aaR(
A.acf.Extended);break;default:throw new Error(AZA+Vn.toFixed());}return NF;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.RatingModeToString;
},_className:"Device::RatingModeToString"};C.TableRowsCount={_Init:function(aArg
){this.__proto__=C.TableRowsCount;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::TableRowsCount"
};C.MassUnit={Kilogramm:0,Pound:1,LAST:2};C.MassUnitToString={BT:function(A7){var
BeJ=A7;var Ap5=A.jV;switch(BeJ){case 0:Ap5=A.aaR(A.acf.Bkv);break;case 1:Ap5=A.aaR(
A.acf.Pound);break;default:throw new Error(AZB+BeJ.toFixed());}return Ap5;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.MassUnitToString;
},_className:"Device::MassUnitToString"};C.MinWeightGain=20;C.MaxWeightGain=2000;
C.WeightGainStep=10;C.Int32ArrayWrapper={MN:10,Array:A.abi(10,0,null),ZG:function(
E){if(this.MN===E)return;if(E>10)throw new Error(AID);this.MN=E;},Set:function(aIndex
,AJ){if((aIndex<0)||(aIndex>=this.MN))throw new Error(Xo);this.Array.Set(aIndex,
AJ);},Get:function(aIndex){if((aIndex<0)||(aIndex>=this.MN))throw new Error(Xo);
return this.Array.Get(aIndex);},AmX:function(){var Qz=0;var O;for(O=0;O<this.MN;
O=O+1)Qz=Qz+this.Get(O);return Qz;},toString:function(){var A3o=this.Array.Get(0
).toFixed();var O;for(O=1;O<this.MN;O=O+1)A3o=(A3o+O_)+this.Array.Get(O).toFixed(
);return A3o;},Fl:function(aString){var HB=aString.indexOf(String.fromCharCode(0x2C
),0);var A2a=A.jV;var O=0;while(O<10){if(aString===A.jV)this.Array.Set(O,0);else{
if(HB===-1){A2a=aString;aString=A.jV;}else{A2a=A.abV(aString,HB);aString=A.ab1(aString
,0,HB+1);}this.Array.Set(O,A.wz(A2a,0,10));HB=aString.indexOf(String.fromCharCode(
0x2C),0);}O=O+1;}if(aString!==A.jV)A.ab5("%s",AZC);},Cs:function(){},FD:function(
){var O;for(O=0;O<this.MN;O=O+1)this.Set(O,0);},Avu:function(A9){var O=0;while(O<
this.MN){if(this.Array.Get(O)===A9)return O;O=O+1;}return-1;},H7:function(){var O=
0;var max=-1;while(O<this.MN){if(this.Array.Get(O)>max)max=this.Array.Get(O);O=O+
1;}return max;},_Init:function(aArg){(this.Array=[]).__proto__=C.Int32ArrayWrapper.
Array;this.__proto__=C.Int32ArrayWrapper;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::Int32ArrayWrapper"
};C.ActionToString={BT:function(A7){var AzQ=A7;var E8=A.jV;switch(AzQ){case 4:E8=
A.aaR(A.acf.Alarm);break;case 256:E8=A.aaR(A.acf.Weighing);break;case 128:E8=A.aaR(
A.acf.A6P);break;case 16:E8=A.aaR(A.acf.AMs);break;case 1:E8=A.aaR(A.acf.Temperature
);break;case 32:E8=A.aaR(A.acf.AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;
case 8:E8=A.aaR(A.acf.Ase);break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:
E8=A.aaR(A.acf.ASi);break;case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:
E8=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E8=A.aaR(A.acf.TC);break;case 4096:
E8=A.aaR(A.acf.Calving);break;case 8192:E8=A.aaR(A.acf.DryOff);break;case 16384:
E8=A.aaR(A.acf.A74);break;case 32768:E8=A.aaR(A.acf.ACo);break;case 524288:E8=A.
aaR(A.acf.ACq);break;case 65536:E8=A.aaR(A.acf.Delete);break;case 131072:E8=A.aaR(
A.acf.A75);break;case 0:E8=A.aaR(A.acf.A8r);break;default:throw new Error(Atf+AzQ.
toFixed());}return E8;},Lz:function(A7){var AzQ=A7;var E8=A.jV;switch(AzQ){case 4:
E8=A.aaR(A.acf.Alarm);break;case 256:E8=A.aaR(A.acf.Weighing);break;case 128:E8=
A.aaR(A.acf.A6P);break;case 16:E8=A.aaR(A.acf.AMs);break;case 1:E8=A.aaR(A.acf.Temperature
);break;case 32:E8=A.aaR(A.acf.AnimalLoss);break;case 2:E8=A.aaR(A.acf.Rating);break;
case 8:E8=A.aaR(A.acf.Ase);break;case 64:E8=A.aaR(A.acf.Unregister);break;case 512:
E8=A.aaR(A.acf.ASi);break;case 1024:E8=A.aaR(A.acf.LinkTransponder);break;case 262144:
E8=A.aaR(A.acf.UnlinkTransponder);break;case 2048:E8=A.aaR(A.acf.TC);break;case 4096:
E8=A.aaR(A.acf.Calving);break;case 8192:E8=A.aaR(A.acf.DryOff);break;case 32768:
E8=A.aaR(A.acf.ACo);break;case 524288:E8=A.aaR(A.acf.ACq);break;case 65536:E8=A.
aaR(A.acf.Delete);break;case 16384:case 131072:E8=A.aaR(A.acf.BkC);break;case 0:
E8=A.aaR(A.acf.A8r);break;default:throw new Error(Atf+AzQ.toFixed());}return E8;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ActionToString;
},_className:"Device::ActionToString"};C.ACTIONS_COUNT=19;C.PopupTimeout=2000;C.
ITable={Filter:null,Id:2,CE:function(Ad,Bc){return 0;},Ann:function(G){A.we(this
,0);A.pe([this,this.DY],this);},H6:function(Ad,Bc){return false;},Hw:function(Ad
,Bc){return this.Sq(Ad,Bc);},OnSetId:function(E){if(this.Id===E)return;this.Id=E;
},B9:function(){return 0;},Bk:function(E){if(this.Filter===E)return;this.Filter=
E;A.abo([this,this.Fn,this.Fr],0);},Fr:function(Aq){this.Bk(Aq);},Ja:function(Ad
,Bc){var BB$=this.V7(Ad,Bc);return A._GetAutoObject(C.Converter).Bap(BB$);},V7:function(
Ad,Bc){return 0;},Sq:function(Ad,Bc){return 0;},A7p:function(Ad,Bc){return this.
CE(Ad,Bc);},QE:function(){var Mm=0;var BCV=this.Id;return Mm;},QI:function(AoN){
var II=0;var BCV=this.Id;return II===1;},AbK:function(){return-1;},ZR:function(Ad
,Bc,Dx){return false;},HS:function(Ad,Bc,Dx){return false;},ZQ:function(Ad,Bc,Dx
){return false;},Ob:function(Ad,Bc,Dx){return false;},Acr:function(Ad,Bc,Dx){return this.
ZQ(Ad,Bc,Dx);},AkP:function(Ad,Bc,Dx){var BCa=A._GetAutoObject(C.Converter).Ad1(
Dx);return this.ZR(Ad,Bc,BCa);},A$Y:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);
},AOT:function(Ad,Bc){return this.CE(Ad,Bc);},BjD:function(Ad,Bc){return this.CE(
Ad,Bc);},BpA:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},Bpw:function(Ad,Bc,Dx
){return this.HS(Ad,Bc,Dx);},LZ:function(aColumn,A9){return-1;},AmV:function(Ad,
Bc){return this.CE(Ad,Bc);},Bpu:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},ADh:
function(Ad,Bc){return this.CE(Ad,Bc);},AUW:function(Ad,Bc,MX){return this.HS(Ad
,Bc,MX);},DY:function(G){this.By6();},By6:function(){return-1;},KS:function(Ad,Bc
){return 0;},UF:function(Ad,Bc,Dx){return false;},Aes:function(aColumn,A9){return-
1;},FD:function(){return false;},BjE:function(Ad,Bc){var BCb=this.CE(Ad,Bc);return A.
_GetAutoObject(C.Converter).Bj6(BCb);},BjJ:function(Ad,Bc){return this.CE(Ad,Bc);
},AO1:function(Ad,Bc){return this.CE(Ad,Bc);},Bpy:function(Ad,Bc,Dx){var BCc=A._GetAutoObject(
C.Converter).A52(Dx);return this.HS(Ad,Bc,BCc);},Bpz:function(Ad,Bc,Dx){return this.
HS(Ad,Bc,Dx);},BpF:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},AjH:function(aColumn
,A9){return false;},Ael:function(aColumn,A9){return false;},BjS:function(Ad,Bc){
return this.CE(Ad,Bc);},BpE:function(Ad,Bc,Dx){return this.HS(Ad,Bc,Dx);},Lk:function(
){return this.QL()>=this.HL();},HL:function(){return 0;},QL:function(){return 0;
},Fn:function(){return this.Filter;},_Init:function(aArg){this.__proto__=C.ITable;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::ITable"};C.MaxAutoActionsCount=4;C.WeightRecordingMode={Automatic:0,Manual:
1,LAST:2};C.WeightRecordingModeToString={BT:function(A7){var Vn=A7;var NF=A.jV;switch(
Vn){case 0:NF=A.aaR(A.acf.Automatic);break;case 1:NF=A.aaR(A.acf.Manual);break;default:
throw new Error(AZD+Vn.toFixed());}return NF;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.WeightRecordingModeToString;},_className:
"Device::WeightRecordingModeToString"};C.BooleanToAutoOnOff={BT:function(A7){switch(
A7){case 0:return A.aaR(A.acf.Off);case 1:return A.aaR(A.acf.Aa_);default:return AyC+
A7.toFixed();}},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=
C.BooleanToAutoOnOff;},_className:"Device::BooleanToAutoOnOff"};C.WeightStep=100;
C.WeightRecordingScope={CurrentWeightOnly:0,BirthWeightOnly:1,BirthAndCurrentWeight:
2,NoWeightRecording:3,LAST:4};C.WeightRecordingScopeToString={BT:function(A7){var
BgI=A7;var ABk=A.jV;switch(BgI){case 0:ABk=A.aaR(A.acf.Biv);break;case 1:ABk=A.aaR(
A.acf.Bh_);break;case 2:ABk=A.aaR(A.acf.Bh6);break;case 3:ABk=A.aaR(A.acf.Bk5);break;
default:throw new Error(AZE+BgI.toFixed());}return ABk;},_Init:function(aArg){C.
EnumToString._Init.call(this,aArg);this.__proto__=C.WeightRecordingScopeToString;
},_className:"Device::WeightRecordingScopeToString"};C.BodyTemperature={Undertemperature:
0,Normal:1,Elevated:2,Fever:3,LAST:4};C.Kn={A5z:0,Temperature:1,Rating:2,Afw:3,BDy:
4,BEd:5,BG0:6,BET:7,BFD:8,BEr:9,BFB:10,BF4:11,BF5:12,BG5:13,BDJ:14,LAST:15};C.AnimalListContentToString={
BT:function(A7){var Bc8=A7;var Rz=A.jV;switch(Bc8){case 0:Rz=AZF;break;case 14:Rz=
AZG;break;case 2:Rz=AZH;break;case 1:Rz=AZI;break;case 3:Rz=Atg;break;case 4:Rz=
Ath;break;case 5:Rz=Ati;break;case 6:Rz=Atj;break;case 7:Rz=AyJ;break;case 8:Rz=
Aos;break;case 9:Rz=AZJ;break;case 10:Rz=AZK;break;case 11:Rz=AZL;break;case 12:
Rz=AZM;break;case 13:Rz=AZN;break;default:throw new Error(AZO+Bc8.toFixed());}return Rz;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalListContentToString;
},_className:"Device::AnimalListContentToString"};C.GenderFilterCriterion={A6:0,
Abq:function(){var Aw=A._NewObject(C.GenderFilterCriterion,0);Aw.E9(this);return Aw;
},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.GenderFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},_Init:function(aArg){C.FilterCriterion.
_Init.call(this,aArg);this.__proto__=C.GenderFilterCriterion;},_className:"Device::GenderFilterCriterion"
};C.AnimalTypeFilterCriterion={A6:0,Abq:function(){var Aw=A._NewObject(C.AnimalTypeFilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.AnimalTypeFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;
},Initialize:function(Bc,Ec,A9,Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=
Qf;return this;},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.
__proto__=C.AnimalTypeFilterCriterion;},_className:"Device::AnimalTypeFilterCriterion"
};C.BDL={AuH:0,BDK:1,BFn:2,A$F:3,A5_:4,BGG:5,BEc:6,BGF:7,LinkTransponder:8,TC:9,
Weighing:10,Calving:11,LinkNaisId:12,BF3:13,ClearBirthNoticePending:14,DeleteAnimal:
15,ScanNaisId:16,Edit:17,ClearPurchaseNoticePending:18,UNDEFINED:19};C.AutoRegistrationModeToString={
BT:function(A7){var Vn=A7;var NF=A.jV;switch(Vn){case 0:NF=A.aaR(A.acf.Bio);break;
case 1:NF=A.aaR(A.acf.Bj_);break;case 2:NF=A.aaR(A.acf.Off);break;default:throw new
Error(AZP+Vn.toFixed());}return NF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.AutoRegistrationModeToString;},_className:"Device::AutoRegistrationModeToString"
};C.AutoRegistrationMode={UserConfirmed:0,Background:1,Off:2,LAST:3};C.AssessmentFilterCriterion={
A6:0,Abq:function(){var Aw=A._NewObject(C.AssessmentFilterCriterion,0);Aw.E9(this
);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.AssessmentFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ec,A9,
Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.AssessmentFilterCriterion;
},_className:"Device::AssessmentFilterCriterion"};C.D_={AdU:0,Temperature:1,Afw:
2,Rating:3,LAST:4};C.FactoryResetScope={DeviceAndAnimalData:0,AnimalDataOnly:1,DeviceDataOnly:
2,LAST:3};C.FactoryResetScopeToString={BT:function(A7){switch(A7){case 0:return A.
aaR(A.acf.DeviceAndAnimalData);case 1:return A.aaR(A.acf.AnimalDataOnly);case 2:
return A.aaR(A.acf.DeviceDataOnly);default:return AZQ+A7.toFixed();}},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.FactoryResetScopeToString;
},_className:"Device::FactoryResetScopeToString"};C.AVw={Cs:function(){A._GetAutoObject(
C.Device).Ar9(this.toString());},Init:function(aArg){var B;A.zX([this,this.BfP],[
B=A._GetAutoObject(C.Device),B.A9M,B.Bb0],0);this.BfP(this);},BfP:function(G){this.
Fl(A._GetAutoObject(C.Device).AG8);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper.
_Init.call(this,aArg);this.__proto__=C.AVw;this.ZG(3);this.Init(aArg);},_className:
"Device::TemperaturesLowClass"};C.AVv={Init:function(aArg){var B;A.zX([this,this.
BfN],[B=A._GetAutoObject(C.Device),B.A9L,B.BbZ],0);this.BfN(this);},Cs:function(
){A._GetAutoObject(C.Device).Ar8(this.toString());},BfN:function(G){this.Fl(A._GetAutoObject(
C.Device).AG7);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(
this,aArg);this.__proto__=C.AVv;this.ZG(3);this.Init(aArg);},_className:"Device::TemperaturesHighClass"
};C.AML={Init:function(aArg){var B;A.zX([this,this.Bfi],[B=A._GetAutoObject(C.Device
),B.A8Z,B.BbC],0);this.Bfi(this);},Bfi:function(G){this.Fl(A._GetAutoObject(C.Device
).ABZ);A.we(this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg
);this.__proto__=C.AML;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesClass"
};C.UInt64FilterCriterion={A6:0,Abq:function(){var Aw=A._NewObject(C.UInt64FilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.UInt64FilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:
function(Bc,Ec,A9,Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64FilterCriterion;},_className:"Device::UInt64FilterCriterion"};C.BooleanToAssignedUnassignedString={
BT:function(A7){switch(A7){case 0:return A.aaR(A.acf.Akj);case 1:return A.aaR(A.
acf.BhN);default:return AyC+A7.toFixed();}},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.BooleanToAssignedUnassignedString;},_className:
"Device::BooleanToAssignedUnassignedString"};C.B6={UNDEFINED:0,AT:1,BA:2,BE:3,BDQ:
4,BD5:5,BD6:6,BD7:7,BD8:8,BD9:9,BEh:10,BEi:11,BEs:12,BEt:13,BEI:14,FR:15,GR:16,BEU:
17,BEV:18,BE2:19,BE3:20,BE8:21,BE9:22,BE_:23,BE$:24,BFf:25,BFt:26,BFu:27,BFJ:28,
BFK:29,BF1:30,BF2:31,BGi:32,BGj:33,BGk:34,BGy:35,BGz:36,BGT:37,Baq:38,BGU:39,LAST:
40};C.CountryToString={BT:function(A7){var JH=A7;var FG=A.jV;switch(JH){case 1:FG=
A.aaR(A.acm.BhY);break;case 2:FG=A.aaR(A.acm.Bh$);break;case 3:FG=A.aaR(A.acm.Bh5
);break;case 4:FG=A.aaR(A.acm.Bib);break;case 5:FG=A.aaR(A.acm.Bie);break;case 6:
FG=A.aaR(A.acm.Bqm);break;case 7:FG=A.aaR(A.acm.Bih);break;case 8:FG=A.aaR(A.acm.
Biw);break;case 9:FG=A.aaR(A.acm.Bix);break;case 10:FG=A.aaR(A.acm.Bjy);break;case
11:FG=A.aaR(A.acm.BiE);break;case 12:FG=A.aaR(A.acm.Bjd);break;case 13:FG=A.aaR(
A.acm.BpR);break;case 14:FG=A.aaR(A.acm.Bjm);break;case 15:FG=A.aaR(A.acm.Bju);break;
case 16:FG=A.aaR(A.acm.Bj1);break;case 17:FG=A.aaR(A.acm.Biu);break;case 18:FG=A.
aaR(A.acm.Bj7);break;case 19:FG=A.aaR(A.acm.Bke);break;case 20:FG=A.aaR(A.acm.Bkq
);break;case 21:FG=A.aaR(A.acm.Bks);break;case 22:FG=A.aaR(A.acm.BkD);break;case
23:FG=A.aaR(A.acm.BkH);break;case 24:FG=A.aaR(A.acm.BkA);break;case 25:FG=A.aaR(
A.acm.BkJ);break;case 26:FG=A.aaR(A.acm.BkZ);break;case 27:FG=A.aaR(A.acm.Bk6);break;
case 28:FG=A.aaR(A.acm.BoN);break;case 29:FG=A.aaR(A.acm.BoO);break;case 30:FG=A.
aaR(A.acm.Bpg);break;case 31:FG=A.aaR(A.acm.Bpi);break;case 32:FG=A.aaR(A.acm.Bql
);break;case 33:FG=A.aaR(A.acm.BpQ);break;case 34:FG=A.aaR(A.acm.BpP);break;case
35:FG=A.aaR(A.acm.BqL);break;case 36:FG=A.aaR(A.acm.Bqv);break;case 37:FG=A.aaR(
A.acm.BqP);break;case 38:FG=A.aaR(A.acm.Baq);break;case 39:FG=A.aaR(A.acm.BqO);break;
case 0:FG=A.aaR(A.acf.Unknown);break;default:throw new Error(Aog+JH.toFixed());}
return FG;},Lz:function(A7){var JH=A7;var BN=A.jV;switch(JH){case 1:BN=Tg;break;
case 2:BN=Aaa;break;case 3:BN=UX;break;case 4:BN=Xc;break;case 5:BN=Iw;break;case
6:BN=Aaj;break;case 7:BN=UY;break;case 8:BN=Aac;break;case 9:BN=Xd;break;case 10:
BN=O9;break;case 11:BN=Aad;break;case 12:BN=Aae;break;case 13:BN=Aai;break;case 14:
BN=U0;break;case 15:BN=Xe;break;case 16:BN=Aaf;break;case 17:BN=UZ;break;case 18:
BN=Oi;break;case 19:BN=Rn;break;case 20:BN=Xf;break;case 21:BN=Xg;break;case 22:
BN=Xh;break;case 23:BN=Aag;break;case 24:BN=U1;break;case 25:BN=Xi;break;case 26:
BN=U2;break;case 27:BN=Xj;break;case 28:BN=Xk;break;case 29:BN=Xl;break;case 30:
BN=Ro;break;case 31:BN=Th;break;case 32:BN=Xm;break;case 33:BN=AfC;break;case 34:
BN=Aah;break;case 35:BN=Aak;break;case 36:BN=Aab;break;case 37:BN=AhT;break;case
38:BN=K2;break;case 39:BN=Aal;break;case 0:BN=AIE;break;default:throw new Error(
Aog+JH.toFixed());}return BN;},_Init:function(aArg){C.EnumToString._Init.call(this
,aArg);this.__proto__=C.CountryToString;},_className:"Device::CountryToString"};
C.EaseOfDelivery={Unspecified:0,Easy:1,Moderate:2,Difficult:3,Surgery:4,LAST:5};
C.EaseOfDeliveryToString={BT:function(A7){var BdG=A7;var AtR=A.jV;switch(BdG){case
0:AtR=A.aaR(A.acf.Unspecified);break;case 1:AtR=A.aaR(A.acf.Easy);break;case 2:AtR=
A.aaR(A.acf.Moderate);break;case 3:AtR=A.aaR(A.acf.Difficult);break;case 4:AtR=A.
aaR(A.acf.Surgery);break;default:throw new Error(AZR+BdG.toFixed());}return AtR;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.EaseOfDeliveryToString;
},_className:"Device::EaseOfDeliveryToString"};C.WhereAbouts={UNB:0,EZU:1,EMA:2,
VZU:3,VMA:4,VIV:5,TOT:6,V48:7,V3T:8,MGE:9,VKB:10,LAST:11};C.WhereAboutsToString={
BT:function(A7){var BhB=A7;var AaY=A.jV;switch(BhB){case 0:AaY=A.aaR(A.acf.Unknown
);break;case 1:AaY=A.aaR(A.acf.BqY);break;case 2:AaY=A.aaR(A.acf.BqX);break;case
3:AaY=A.aaR(A.acf.Bq6);break;case 4:AaY=A.aaR(A.acf.Bq5);break;case 5:AaY=A.aaR(
A.acf.Bq3);break;case 6:AaY=A.aaR(A.acf.Bq0);break;case 7:AaY=A.aaR(A.acf.Bq2);break;
case 8:AaY=A.aaR(A.acf.Bq1);break;case 9:AaY=A.aaR(A.acf.BqZ);break;case 10:AaY=
A.aaR(A.acf.Bq4);break;default:throw new Error(AZS+BhB.toFixed());}return AaY;},
_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WhereAboutsToString;
},_className:"Device::WhereAboutsToString"};C.Breed={UNKNOWN:0,SBT:1,RBT:2,JER:3
,BV:4,RVA:5,RV:6,RDN:7,DSN:8,FL:9,GV:10,PIN:11,HIN:12,MW:13,VW:14,LMP:15,DBV:16,
AS:17,VR:18,CHA:19,LIM:20,WBB:21,BA:22,MA:23,SAL:24,MON:25,AU:26,PIE:27,CHI:28,ROM:
29,MAR:30,WP:31,BB:32,DA:33,AA:34,HE:35,SH:36,HLD:37,WB:38,GAL:39,LR:40,BGA:41,LG:
42,BRA:43,NOR:44,UST:45,ZEB:46,GRV:47,DEX:48,WGA:49,LH:50,SD:51,FR:52,TUX:53,TLM:
54,FLF:55,UCK:56,BLA:57,WIT:58,LAK:59,RHV:60,AT:61,GR:62,PIF:63,PS:64,GVF:65,BVF:
66,RBF:67,HWF:68,MWF:69,VWF:70,LPF:71,BRN:72,BAZ:73,AO:74,BE:75,WL:76,BIS:77,YAK:
78,SON:79,TAU:80,IND:81,TIN:82,WAG:83,XFF:84,XFM:85,XMM:86,EVO:87,BLH:88,TLH:89,
MGR:90,WSH:91,MUR:92,EBS:93,ERI:94,PAR:95,XZF:96,XZM:97,XZZ:98,LAST:99};C.BreedToString={
BT:function(A7){var Bv=A7;var BK=A.jV;switch(Bv){case 0:BK=A.aaR(A.acf.Unknown);
break;case 1:BK=A.aaR(A.ack.SBT);break;case 2:BK=A.aaR(A.ack.RBT);break;case 3:BK=
A.aaR(A.ack.JER);break;case 4:BK=A.aaR(A.ack.BV);break;case 5:BK=A.aaR(A.ack.RVA
);break;case 6:BK=A.aaR(A.ack.RV);break;case 7:BK=A.aaR(A.ack.RDN);break;case 8:
BK=A.aaR(A.ack.DSN);break;case 9:BK=A.aaR(A.ack.FL);break;case 10:BK=A.aaR(A.ack.
GV);break;case 11:BK=A.aaR(A.ack.PIN);break;case 12:BK=A.aaR(A.ack.HIN);break;case
13:BK=A.aaR(A.ack.MW);break;case 14:BK=A.aaR(A.ack.VW);break;case 15:BK=A.aaR(A.
ack.LMP);break;case 16:BK=A.aaR(A.ack.DBV);break;case 17:BK=A.aaR(A.ack.AS);break;
case 18:BK=A.aaR(A.ack.VR);break;case 19:BK=A.aaR(A.ack.CHA);break;case 20:BK=A.
aaR(A.ack.LIM);break;case 21:BK=A.aaR(A.ack.WBB);break;case 22:BK=A.aaR(A.ack.BA
);break;case 23:BK=A.aaR(A.ack.MA);break;case 24:BK=A.aaR(A.ack.SAL);break;case 25:
BK=A.aaR(A.ack.MON);break;case 26:BK=A.aaR(A.ack.AU);break;case 27:BK=A.aaR(A.ack.
PIE);break;case 28:BK=A.aaR(A.ack.CHI);break;case 29:BK=A.aaR(A.ack.ROM);break;case
30:BK=A.aaR(A.ack.MAR);break;case 31:BK=A.aaR(A.ack.WP);break;case 32:BK=A.aaR(A.
ack.BB);break;case 33:BK=A.aaR(A.ack.DA);break;case 34:BK=A.aaR(A.ack.AA);break;
case 35:BK=A.aaR(A.ack.HE);break;case 36:BK=A.aaR(A.ack.SH);break;case 37:BK=A.aaR(
A.ack.HLD);break;case 38:BK=A.aaR(A.ack.WB);break;case 39:BK=A.aaR(A.ack.GAL);break;
case 40:BK=A.aaR(A.ack.LR);break;case 41:BK=A.aaR(A.ack.BGA);break;case 42:BK=A.
aaR(A.ack.LG);break;case 43:BK=A.aaR(A.ack.BRA);break;case 44:BK=A.aaR(A.ack.NOR
);break;case 45:BK=A.aaR(A.ack.UST);break;case 46:BK=A.aaR(A.ack.ZEB);break;case
47:BK=A.aaR(A.ack.GRV);break;case 48:BK=A.aaR(A.ack.DEX);break;case 49:BK=A.aaR(
A.ack.WGA);break;case 50:BK=A.aaR(A.ack.LH);break;case 51:BK=A.aaR(A.ack.SD);break;
case 52:BK=A.aaR(A.ack.FR);break;case 53:BK=A.aaR(A.ack.TUX);break;case 54:BK=A.
aaR(A.ack.TLM);break;case 55:BK=A.aaR(A.ack.FLF);break;case 56:BK=A.aaR(A.ack.UCK
);break;case 57:BK=A.aaR(A.ack.BLA);break;case 58:BK=A.aaR(A.ack.WIT);break;case
59:BK=A.aaR(A.ack.LAK);break;case 60:BK=A.aaR(A.ack.RHV);break;case 61:BK=A.aaR(
A.ack.AT);break;case 62:BK=A.aaR(A.ack.GR);break;case 63:BK=A.aaR(A.ack.PIF);break;
case 64:BK=A.aaR(A.ack.PS);break;case 65:BK=A.aaR(A.ack.GVF);break;case 66:BK=A.
aaR(A.ack.BVF);break;case 67:BK=A.aaR(A.ack.RBF);break;case 68:BK=A.aaR(A.ack.HWF
);break;case 69:BK=A.aaR(A.ack.MWF);break;case 70:BK=A.aaR(A.ack.VWF);break;case
71:BK=A.aaR(A.ack.LPF);break;case 72:BK=A.aaR(A.ack.BRN);break;case 73:BK=A.aaR(
A.ack.BAZ);break;case 74:BK=A.aaR(A.ack.AO);break;case 75:BK=A.aaR(A.ack.BE);break;
case 76:BK=A.aaR(A.ack.WL);break;case 77:BK=A.aaR(A.ack.BIS);break;case 78:BK=A.
aaR(A.ack.YAK);break;case 79:BK=A.aaR(A.ack.SON);break;case 80:BK=A.aaR(A.ack.TAU
);break;case 81:BK=A.aaR(A.ack.IND);break;case 82:BK=A.aaR(A.ack.TIN);break;case
83:BK=A.aaR(A.ack.WAG);break;case 84:BK=A.aaR(A.ack.XFF);break;case 85:BK=A.aaR(
A.ack.XFM);break;case 86:BK=A.aaR(A.ack.XMM);break;case 87:BK=A.aaR(A.ack.EVO);break;
case 88:BK=A.aaR(A.ack.BLH);break;case 89:BK=A.aaR(A.ack.TLH);break;case 90:BK=A.
aaR(A.ack.MGR);break;case 91:BK=A.aaR(A.ack.WSH);break;case 92:BK=A.aaR(A.ack.MUR
);break;case 93:BK=A.aaR(A.ack.EBS);break;case 94:BK=A.aaR(A.ack.ERI);break;case
95:BK=A.aaR(A.ack.PAR);break;case 96:BK=A.aaR(A.ack.XZF);break;case 97:BK=A.aaR(
A.ack.XZM);break;case 98:BK=A.aaR(A.ack.XZZ);break;default:throw new Error(AZT+Bv.
toFixed());}return BK;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg
);this.__proto__=C.BreedToString;},_className:"Device::BreedToString"};C.TN={timer:
null,Q:null,Ed:0,Dy:0,JY:0,Pv:1000,PE:1000,Bw:false,Cy:false,B3:true,Ml:function(
G){var F;if(!this.timer)return;if(this.Ed<0){this.Dy=this.timer.Bq;this.Ed=0;}var
Av=(this.timer.Bq-this.Dy)|0;var Ox=this.Pv;var Hh=this.PE+this.Pv;var LL=0;var Jq=
this.Ed;if(!Jq&&(Av>=Ox)){Jq=1;Av=Av-Ox;}if((Jq>0)&&(Av>=Hh)){var Ii=(Av/Hh)|0;Av=
Av-(Ii*Hh);Jq=Jq+Ii;}if((Jq>2)&&!this.JY)Jq=1;if(Jq!==this.Ed){this.Dy=this.timer.
Bq-(((B=Av)<0)?B+0x100000000:B);this.Ed=Jq;}if(Jq>0)LL=this.PE;var KI=(Jq>=this.
JY)&&(this.JY>0);if(!!this.Q){if((!KI&&(Av>=LL))&&((F=this.Q,F[1].call(F[0]))!==
this.Cy))(F=this.Q,F[2].call(F[0],this.Cy));if((KI||((Av<LL)&&(Jq>0)))&&((F=this.
Q,F[1].call(F[0]))!==this.B3))(F=this.Q,F[2].call(F[0],this.B3));}if(KI)this.As(
false);},HP:function(E){if(E<0)E=0;this.JY=E;},Fp:function(E){if(E<100)E=100;this.
Pv=E;},Uv:function(E){if(E<0)E=0;this.PE=E;},As:function(E){if(this.Bw===E)return;
this.Bw=E;if(!E&&!!this.timer){A.z9([this,this.Ml],this.timer,0);this.timer=null;
}if(E){this.timer=A._GetAutoObject(A.acl.Aei);A.zV([this,this.Ml],this.timer,0);
this.Ed=-1;}},_Init:function(aArg){this.__proto__=C.TN;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.timer)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Device::BoolEffect"};C.In={AnimalId:0,TransponderId:
1,BFi:2,BFh:3,BFl:4,BFk:5};C.Au6={BDO:0,BEl:1};C.AnimalIdGenerationMethodToString={
BT:function(A7){var Alu=A7;var AoW=A.jV;switch(Alu){case 0:AoW=A.aaR(A.acf.Ul);break;
case 1:AoW=A.aaR(A.acf.Transponder);break;case 3:AoW=(A.aaR(A.acf.Manual)+Oj)+A.
aaR(A.acf.Male);break;case 2:AoW=(A.aaR(A.acf.Manual)+Oj)+A.aaR(A.acf.Female);break;
case 4:AoW=(A.aaR(A.acf.Manual)+Oj)+A.aaR(A.acf.Unknown);break;case 5:AoW=(A.aaR(
A.acf.Manual)+Oj)+AZU;break;default:throw new Error(AZV+Alu.toFixed());}return AoW;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalIdGenerationMethodToString;
},_className:"Device::AnimalIdGenerationMethodToString"};C.DirectionOfCountingToString={
BT:function(A7){var AzP=A7;var A2h=A.jV;switch(AzP){case 0:A2h=AZW;break;case 1:
A2h=AyK;break;default:throw new Error(AZX+AzP.toFixed());}return A2h;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DirectionOfCountingToString;
},_className:"Device::DirectionOfCountingToString"};C.EnumToIcon={AsL:function(A7
){throw new Error(As8+A7.toFixed());},AsM:function(A7){throw new Error(As8+A7.toFixed(
));},_Init:function(aArg){this.__proto__=C.EnumToIcon;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToIcon"};C.Aeh={AsL:function(A7){return A.aaL(A.ach.AVj);},AsM:function(
A7){var AzP=A7;var RK=-1;switch(AzP){case 0:RK=3;break;case 1:RK=2;break;default:
throw new Error(Atk+AzP.toFixed());}return RK;},_Init:function(aArg){C.EnumToIcon.
_Init.call(this,aArg);this.__proto__=C.Aeh;},_className:"Device::DirectionOfCountingToIcon"
};C.AdY={AsL:function(A7){return A.aaL(A.ach.AVh);},AsM:function(A7){var Alu=A7;
var RK=-1;switch(Alu){case 0:RK=0;break;case 1:RK=6;break;case 3:RK=4;break;case
2:RK=5;break;case 4:RK=2;break;case 5:RK=3;break;default:throw new Error(Atk+Alu.
toFixed());}return RK;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);
this.__proto__=C.AdY;},_className:"Device::AnimalIdGenerationMethodToIcon"};C.PA={
UNDEFINED:0,SH:1,AO4:2,AR4:3,AO3:4,A8m:5,HE:6,A$D:7,A5Q:8,AMW:9,AUL:10,BE:11,BB:
12,A7_:13,AUM:14,AUN:15,AVo:16};C.GermanStateToString={BT:function(A7){var Bp=A7;
var GG=A.jV;switch(Bp){case 1:GG=A.aaR(A.acp.SH);break;case 2:GG=A.aaR(A.acp.AO4
);break;case 3:GG=A.aaR(A.acp.AR4);break;case 4:GG=A.aaR(A.acp.AO3);break;case 5:
GG=A.aaR(A.acp.A8m);break;case 6:GG=A.aaR(A.acp.HE);break;case 7:GG=A.aaR(A.acp.
A$D);break;case 8:GG=A.aaR(A.acp.A5Q);break;case 9:GG=A.aaR(A.acp.AMW);break;case
10:GG=A.aaR(A.acp.AUL);break;case 11:GG=A.aaR(A.acp.BE);break;case 12:GG=A.aaR(A.
acp.BB);break;case 13:GG=A.aaR(A.acp.A7_);break;case 14:GG=A.aaR(A.acp.AUM);break;
case 15:GG=A.aaR(A.acp.AUN);break;case 16:GG=A.aaR(A.acp.AVo);break;case 0:GG=A.
aaR(A.acf.Unknown);break;default:throw new Error(Ali+Bp.toFixed());}return GG;},
Lz:function(A7){var Bp=A7;var GG=A.jV;switch(Bp){case 1:GG=A.aaR(A.acp.Bpj);break;
case 2:GG=A.aaR(A.acp.AO4);break;case 3:GG=A.aaR(A.acp.AR4);break;case 4:GG=A.aaR(
A.acp.AO3);break;case 5:GG=A.aaR(A.acp.BkW);break;case 6:GG=A.aaR(A.acp.HE);break;
case 7:GG=A.aaR(A.acp.BoX);break;case 8:GG=A.aaR(A.acp.Bh1);break;case 9:GG=A.aaR(
A.acp.AMW);break;case 10:GG=A.aaR(A.acp.AUL);break;case 11:GG=A.aaR(A.acp.BE);break;
case 12:GG=A.aaR(A.acp.BB);break;case 13:GG=A.aaR(A.acp.BkI);break;case 14:GG=A.
aaR(A.acp.AUM);break;case 15:GG=A.aaR(A.acp.AUN);break;case 16:GG=A.aaR(A.acp.AVo
);break;case 0:GG=A.aaR(A.acf.Unknown);break;default:throw new Error(Ali+Bp.toFixed(
));}return GG;},BqA:function(A7){var Bp=A7;var Gl=-1;switch(Bp){case 0:Gl=0;break;
case 1:Gl=1;break;case 2:Gl=2;break;case 3:Gl=3;break;case 4:Gl=4;break;case 5:Gl=
5;break;case 6:Gl=6;break;case 7:Gl=7;break;case 8:Gl=8;break;case 9:Gl=9;break;
case 10:Gl=10;break;case 11:Gl=11;break;case 12:Gl=12;break;case 13:Gl=13;break;
case 14:Gl=14;break;case 15:Gl=15;break;case 16:Gl=16;break;default:throw new Error(
Ali+Bp.toFixed());}return Gl;},BqB:function(A7){var Bp=A7;var Gl=A.jV;switch(Bp){
case 1:Gl=AZY;break;case 2:Gl=AZZ;break;case 3:Gl=AZ0;break;case 4:Gl=AIF;break;
case 5:Gl=AZ1;break;case 6:Gl=AZ2;break;case 7:Gl=AZ3;break;case 8:Gl=AZ4;break;
case 9:Gl=AZ5;break;case 10:Gl=AH$;break;case 11:Gl=UX;break;case 12:Gl=AZ6;break;
case 13:Gl=AZ7;break;case 14:Gl=AZ8;break;case 15:Gl=AIG;break;case 16:Gl=AZ9;break;
case 0:Gl=AIE;break;default:throw new Error(Ali+Bp.toFixed());}return Gl;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.GermanStateToString;
},_className:"Device::GermanStateToString"};C.EartagNrAssignmentMode={OneSingleRange:
0,TwoNumberRanges:1,LAST:2};C.EartagNrAssignmentModeToString={Lz:function(A7){var
Vn=A7;var NF=A.jV;switch(Vn){case 0:NF=AZ_;break;case 1:NF=AZ$;break;default:throw new
Error(AIH+Vn.toFixed());}return NF;},BT:function(A7){var Vn=A7;var NF=A.jV;switch(
Vn){case 0:NF=A.aaR(A.acf.BoG);break;case 1:NF=A.aaR(A.acf.BqN);break;default:throw new
Error(AIH+Vn.toFixed());}return NF;},_Init:function(aArg){C.EnumToString._Init.call(
this,aArg);this.__proto__=C.EartagNrAssignmentModeToString;},_className:"Device::EartagNrAssignmentModeToString"
};C.BDH={BFz:0,BFp:1,BEC:2,BED:3,BEE:4,BGB:5};C.EnumToCodeset={AmF:function(Ah2){
throw new Error(A0a+Ah2.toFixed());},Aek:function(A7){throw new Error(As8+A7.toFixed(
));},AqU:function(){A.ab5("%s",AII);return 0;},H7:function(){A.ab5("%s",AII);return 0;
},_Init:function(aArg){this.__proto__=C.EnumToCodeset;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::EnumToCodeset"};C.Na={AmF:function(Ah2){var Bv;switch(Ah2){case 1:Bv=1;
break;case 2:Bv=2;break;case 3:Bv=3;break;case 4:Bv=4;break;case 5:Bv=5;break;case
6:Bv=6;break;case 9:Bv=7;break;case 10:Bv=8;break;case 11:Bv=9;break;case 12:Bv=
10;break;case 13:Bv=11;break;case 14:Bv=12;break;case 15:Bv=13;break;case 16:Bv=
14;break;case 17:Bv=15;break;case 18:Bv=16;break;case 19:Bv=17;break;case 20:Bv=
18;break;case 21:Bv=19;break;case 22:Bv=20;break;case 23:Bv=21;break;case 24:Bv=
22;break;case 25:Bv=23;break;case 26:Bv=24;break;case 27:Bv=25;break;case 28:Bv=
26;break;case 31:Bv=27;break;case 32:Bv=28;break;case 33:Bv=29;break;case 34:Bv=
30;break;case 35:Bv=31;break;case 36:Bv=32;break;case 41:Bv=33;break;case 42:Bv=
34;break;case 43:Bv=35;break;case 44:Bv=36;break;case 45:Bv=37;break;case 46:Bv=
38;break;case 47:Bv=39;break;case 48:Bv=40;break;case 49:Bv=41;break;case 50:Bv=
42;break;case 51:Bv=43;break;case 52:Bv=44;break;case 53:Bv=45;break;case 54:Bv=
46;break;case 55:Bv=47;break;case 56:Bv=48;break;case 57:Bv=49;break;case 58:Bv=
50;break;case 59:Bv=51;break;case 60:Bv=52;break;case 61:Bv=53;break;case 65:Bv=
54;break;case 66:Bv=55;break;case 67:Bv=56;break;case 68:Bv=57;break;case 69:Bv=
58;break;case 70:Bv=59;break;case 71:Bv=60;break;case 72:Bv=61;break;case 73:Bv=
62;break;case 74:Bv=63;break;case 75:Bv=64;break;case 76:Bv=65;break;case 77:Bv=
66;break;case 78:Bv=67;break;case 79:Bv=68;break;case 80:Bv=69;break;case 81:Bv=
70;break;case 82:Bv=71;break;case 83:Bv=72;break;case 84:Bv=73;break;case 85:Bv=
74;break;case 86:Bv=75;break;case 87:Bv=76;break;case 88:Bv=77;break;case 89:Bv=
78;break;case 90:Bv=79;break;case 91:Bv=80;break;case 92:Bv=81;break;case 93:Bv=
82;break;case 94:Bv=83;break;case 97:Bv=84;break;case 98:Bv=85;break;case 99:Bv=
86;break;case 100:Bv=87;break;case 101:Bv=88;break;case 102:Bv=89;break;case 103:
Bv=90;break;case 104:Bv=91;break;case 105:Bv=92;break;case 106:Bv=93;break;case 107:
Bv=94;break;case 108:Bv=95;break;case 109:Bv=96;break;case 110:Bv=97;break;case 111:
Bv=98;break;default:Bv=0;}return Bv;},Aek:function(A7){var Bv=A7;var BM=0;switch(
Bv){case 0:BM=0;break;case 1:BM=1;break;case 2:BM=2;break;case 3:BM=3;break;case
4:BM=4;break;case 5:BM=5;break;case 6:BM=6;break;case 7:BM=9;break;case 8:BM=10;
break;case 9:BM=11;break;case 10:BM=12;break;case 11:BM=13;break;case 12:BM=14;break;
case 13:BM=15;break;case 14:BM=16;break;case 15:BM=17;break;case 16:BM=18;break;
case 17:BM=19;break;case 18:BM=20;break;case 19:BM=21;break;case 20:BM=22;break;
case 21:BM=23;break;case 22:BM=24;break;case 23:BM=25;break;case 24:BM=26;break;
case 25:BM=27;break;case 26:BM=28;break;case 27:BM=31;break;case 28:BM=32;break;
case 29:BM=33;break;case 30:BM=34;break;case 31:BM=35;break;case 32:BM=36;break;
case 33:BM=41;break;case 34:BM=42;break;case 35:BM=43;break;case 36:BM=44;break;
case 37:BM=45;break;case 38:BM=46;break;case 39:BM=47;break;case 40:BM=48;break;
case 41:BM=49;break;case 42:BM=50;break;case 43:BM=51;break;case 44:BM=52;break;
case 45:BM=53;break;case 46:BM=54;break;case 47:BM=55;break;case 48:BM=56;break;
case 49:BM=57;break;case 50:BM=58;break;case 51:BM=59;break;case 52:BM=60;break;
case 53:BM=61;break;case 54:BM=65;break;case 55:BM=66;break;case 56:BM=67;break;
case 57:BM=68;break;case 58:BM=69;break;case 59:BM=70;break;case 60:BM=71;break;
case 61:BM=72;break;case 62:BM=73;break;case 63:BM=74;break;case 64:BM=75;break;
case 65:BM=76;break;case 66:BM=77;break;case 67:BM=78;break;case 68:BM=79;break;
case 69:BM=80;break;case 70:BM=81;break;case 71:BM=82;break;case 72:BM=83;break;
case 73:BM=84;break;case 74:BM=85;break;case 75:BM=86;break;case 76:BM=87;break;
case 77:BM=88;break;case 78:BM=89;break;case 79:BM=90;break;case 80:BM=91;break;
case 81:BM=92;break;case 82:BM=93;break;case 83:BM=94;break;case 84:BM=97;break;
case 85:BM=98;break;case 86:BM=99;break;case 87:BM=100;break;case 88:BM=101;break;
case 89:BM=102;break;case 90:BM=103;break;case 91:BM=104;break;case 92:BM=105;break;
case 93:BM=106;break;case 94:BM=107;break;case 95:BM=108;break;case 96:BM=109;break;
case 97:BM=110;break;case 98:BM=111;break;default:throw new Error(A0b+Bv.toFixed(
));}return BM;},AqU:function(){return 0;},H7:function(){return 111;},_Init:function(
aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.Na;},_className:"Device::BreedToHitCodeset"
};C.ReasonOfLeaving={Unknown:0,A$_:1,RU:2,A$w:3,A7M:4,BFI:5,Bar:6,A8i:7,A59:8,A$s:
9,A8g:10,A6b:11,BFY:12,BFZ:13,LAST:14};C.ReasonOfLeavingToString={BT:function(A7
){var AdE=A7;var Tw=A.jV;switch(AdE){case 0:Tw=A.aaR(A.acf.Unknown);break;case 1:
Tw=A.aaR(A.acf.A$_);break;case 2:Tw=A.aaR(A.acf.RU);break;case 3:Tw=A.aaR(A.acf.
A$w);break;case 4:Tw=A.aaR(A.acf.A7M);break;case 5:Tw=A.aaR(A.acf.BoH);break;case
6:Tw=A.aaR(A.acf.Bar);break;case 7:Tw=A.aaR(A.acf.A8i);break;case 8:Tw=A.aaR(A.acf.
A59);break;case 9:Tw=A.aaR(A.acf.A$s);break;case 10:Tw=A.aaR(A.acf.A8g);break;case
11:Tw=A.aaR(A.acf.A6b);break;case 12:Tw=A.aaR(A.acf.BoS);break;case 13:Tw=A.aaR(
A.acf.BoR);break;default:throw new Error(AIJ+AdE.toFixed());}return Tw;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ReasonOfLeavingToString;
},_className:"Device::ReasonOfLeavingToString"};C.Ahz={AmF:function(Ah2){var Pk;
switch(Ah2){case 1:Pk=1;break;case 2:Pk=2;break;case 3:Pk=3;break;case 4:Pk=4;break;
case 5:Pk=5;break;case 6:Pk=6;break;case 7:Pk=7;break;case 8:Pk=8;break;case 9:Pk=
9;break;case 10:Pk=10;break;case 11:Pk=11;break;case 12:Pk=12;break;case 13:Pk=13;
break;default:Pk=0;}return Pk;},Aek:function(A7){var Pk=A7;var Jp=0;switch(Pk){case
0:Jp=0;break;case 2:Jp=2;break;case 8:Jp=8;break;case 11:Jp=11;break;case 4:Jp=4;
break;case 10:Jp=10;break;case 7:Jp=7;break;case 5:Jp=5;break;case 9:Jp=9;break;
case 3:Jp=3;break;case 12:Jp=12;break;case 13:Jp=13;break;case 1:Jp=1;break;case
6:Jp=6;break;default:throw new Error(AIK+Pk.toFixed());}return Jp;},AqU:function(
){return 0;},H7:function(){return 13;},_Init:function(aArg){C.EnumToCodeset._Init.
call(this,aArg);this.__proto__=C.Ahz;},_className:"Device::ReasonOfLeavingToCodeset"
};C.K1={AmF:function(Ah2){var Lb;switch(Ah2){case 1:Lb=1;break;case 2:Lb=2;break;
case 3:Lb=3;break;case 4:Lb=4;break;case 5:Lb=5;break;case 6:Lb=6;break;case 7:Lb=
7;break;case 8:Lb=8;break;case 9:Lb=9;break;case 10:Lb=10;break;default:Lb=0;}return Lb;
},Aek:function(A7){var Lb=A7;var Jp=0;switch(Lb){case 0:Jp=0;break;case 2:Jp=2;break;
case 1:Jp=1;break;case 9:Jp=9;break;case 6:Jp=6;break;case 8:Jp=8;break;case 7:Jp=
7;break;case 5:Jp=5;break;case 10:Jp=10;break;case 4:Jp=4;break;case 3:Jp=3;break;
default:throw new Error(AIK+Lb.toFixed());}return Jp;},AqU:function(){return 0;}
,H7:function(){return 10;},_Init:function(aArg){C.EnumToCodeset._Init.call(this,
aArg);this.__proto__=C.K1;},_className:"Device::WhereAboutsToCodeset"};C.AmN={_Init:
function(aArg){this.__proto__=C.AmN;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::EmptyClass"
};C.CalfDeregistrationsTableFields={Year:0,Deregistrations:1,Deaths:2};C.CalfDeregistrations={
Deregistrations:0,Deaths:0,Year:-1,Fl:function(Ad,AL){var II=C.Row.Fl.call(this,
Ad,AL);if(II&&!!AL){this.AkC(AL.CE(Ad,0));this.AwG(AL.CE(Ad,1));this.AwF(AL.CE(Ad
,2));}return II;},Cs:function(AL){var II=C.Row.Cs.call(this,AL);if(II&&!!AL){var
Mm=AL.QE();if(Mm<0)A.ab5("%s",AcQ);else{if(this.Arh())this.CQ=AL.AbK();AL.HS(this.
CQ,0,this.Year);AL.HS(this.CQ,1,this.Deregistrations);AL.HS(this.CQ,2,this.Deaths
);AL.QI(Mm);}}return II;},G8:function(){C.Row.G8.call(this);this.AkC(-2);},FD:function(
){C.Row.FD.call(this);this.AkC(-1);this.AwG(0);this.AwF(0);},AwG:function(E){if(
this.Deregistrations===E)return;this.Deregistrations=E;A.abo([this,this.Blw,this.
AwG],0);},AwF:function(E){if(this.Deaths===E)return;this.Deaths=E;A.abo([this,this.
Blu,this.AwF],0);},AkC:function(E){if(this.Year===E)return;this.Year=E;A.abo([this
,this.ArE,this.AkC],0);},Blw:function(){return this.Deregistrations;},Blu:function(
){return this.Deaths;},ArE:function(){return this.Year;},_Init:function(aArg){C.
Row._Init.call(this,aArg);this.__proto__=C.CalfDeregistrations;this.TableId=3;},
_className:"Device::CalfDeregistrations"};C.Au4={Undefined:0,Display:1,A$C:2,A$P:
3,BaK:4,BEW:5,BF$:6,BGM:7,BFg:8,BD_:9,BDw:10,A69:11,A$E:12,BGW:13,A8l:14,BGZ:15};
C.DeviceComponentToString={BT:function(A7){var Bdz=A7;var Qn=A.jV;switch(Bdz){case
0:Qn=Atl;break;case 10:Qn=A.aaR(A.acf.BhC);break;case 9:Qn=A.aaR(A.acf.Big);break;
case 1:Qn=A.aaR(A.acf.Bi5);break;case 11:Qn=A.aaR(A.acf.A69);break;case 5:Qn=A.aaR(
A.acf.Bq7);break;case 8:Qn=A.aaR(A.acf.Bi7);break;case 14:Qn=A.aaR(A.acf.A8l);break;
case 2:Qn=A.aaR(A.acf.A$C);break;case 12:Qn=A.aaR(A.acf.A$E);break;case 6:Qn=A.aaR(
A.acf.BoW);break;case 3:Qn=A.aaR(A.acf.A$P);break;case 7:Qn=A.aaR(A.acf.Bi8);break;
case 13:Qn=A.aaR(A.acf.BiH);break;case 15:Qn=A.aaR(A.acf.Bq$);break;case 4:Qn=A.
aaR(A.acf.BaK);break;default:throw new Error(A0c+Bdz.toFixed());}return Qn;},_Init:
function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.DeviceComponentToString;
},_className:"Device::DeviceComponentToString"};C.AgR={AmF:function(Ah2){return Ah2;
},Aek:function(A7){return A7;},AqU:function(){return 0;},H7:function(){return 4;
},_Init:function(aArg){C.EnumToCodeset._Init.call(this,aArg);this.__proto__=C.AgR;
},_className:"Device::EaseOfDeliveryToCodeset"};C.AeU={AsL:function(A7){return A.
aaL(A.ach.AQe);},AsM:function(A7){var BdL=A7;var RK=-1;switch(BdL){case 0:RK=0;break;
case 1:RK=1;break;case 2:RK=2;break;default:throw new Error(A0d+BdL.toFixed());}
return RK;},_Init:function(aArg){C.EnumToIcon._Init.call(this,aArg);this.__proto__=
C.AeU;},_className:"Device::MotherSelectionFilterModeToIcon"};C.WhereAboutsFilterCriterion={
A6:0,Abq:function(){var Aw=A._NewObject(C.WhereAboutsFilterCriterion,0);Aw.E9(this
);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var Aw=(C.WhereAboutsFilterCriterion.
isPrototypeOf(AH)?AH:null);if(!!Aw)this.A6=Aw.A6;},Initialize:function(Bc,Ec,A9,
Qf){this.EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;return this;},_Init:function(
aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.WhereAboutsFilterCriterion;
},_className:"Device::WhereAboutsFilterCriterion"};C.BFs={AN6:0,BEf:1,APP:2,LAST:
3};C.BGD={GM:0,AV5:1,Hl:2,Year:3,LAST:4};C.TimespanDaysToString={BT:function(A7){
var Bg_=A7;var ABx=A.jV;switch(Bg_){case 0:ABx=A.aaR(A.acf.A6q);break;case 1:ABx=
A.aaR(A.acf.AV5);break;case 2:ABx=A.aaR(A.acf.Hl);break;case 3:ABx=A.aaR(A.acf.Year
);break;default:throw new Error(Atm+Bg_.toFixed());}return ABx;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TimespanDaysToString;
},_className:"Device::TimespanDaysToString"};C.Z7={BFF:0,BEm:1,BEY:2,BE1:3,BE0:4
,BEn:5,BEZ:6,LAST:7};C.USBStateToString={BT:function(A7){var Bhw=A7;var Bp=A.jV;
switch(Bhw){case 0:Bp=AyL;break;case 2:Bp=AyM;break;case 1:Bp=A0e;break;case 5:Bp=
A0f;break;case 3:Bp=A0g;break;case 4:Bp=AIL;break;case 6:Bp=AIM;break;default:throw new
Error(AH4+Bhw.toFixed());}return Bp;},_Init:function(aArg){C.EnumToString._Init.
call(this,aArg);this.__proto__=C.USBStateToString;},_className:"Device::USBStateToString"
};C.AgL={BEX:0,BDI:1,BF0:2};C.AxK={ACD:A.jV,Timestamp:0,AEq:0,AEv:0,AGC:0,OnSetTimestamp:
function(E){if(this.Timestamp===E)return;this.Timestamp=E;},AFD:function(E){if(this.
AEq===E)return;this.AEq=E;},AFJ:function(E){if(this.AEv===E)return;this.AEv=E;},
AFT:function(E){if(this.AGC===E)return;this.AGC=E;},AFj:function(E){if(this.ACD===
E)return;this.ACD=E;},_Init:function(aArg){this.__proto__=C.AxK;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Device::SoftwareVersionInformation"};C.Avy={Timestamp:0,ARS:0,ART:0,AVG:0,AVH:0
,AVF:0,ARR:0,OnSetTimestamp:function(E){if(this.Timestamp===E)return;this.Timestamp=
E;},AFA:function(E){if(this.ARS===E)return;this.ARS=E;},AFB:function(E){if(this.
ART===E)return;this.ART=E;},AF7:function(E){if(this.AVG===E)return;this.AVG=E;},
AF8:function(E){if(this.AVH===E)return;this.AVH=E;},AF6:function(E){if(this.AVF===
E)return;this.AVF=E;},AFz:function(E){if(this.ARR===E)return;this.ARR=E;},_Init:
function(aArg){this.__proto__=C.Avy;A.h7++;},_Done:function(){this.__proto__=null;
A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=
D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::HardwareVersionInformation"
};C.Aqs={Undefined:0,BEN:1,BDW:2};C.Agy={Manual:0,TransponderId:1,LAST:2};C.AnimalIdAutoGenerationMethodToString={
BT:function(A7){var Bc6=A7;var A1L=A.jV;switch(Bc6){case 0:A1L=A.aaR(A.acf.A6f);
break;case 1:A1L=A.aaR(A.acf.A6x);break;default:throw new Error(Alj+Bc6.toFixed(
));}return A1L;},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.
__proto__=C.AnimalIdAutoGenerationMethodToString;},_className:"Device::AnimalIdAutoGenerationMethodToString"
};C.Hl={A50:0,AEf:1,AC0:2,AEr:3,AB1:4,AEt:5,AEh:6,AEg:7,AB8:8,AGK:9,AEG:10,AEE:11
,ACL:12,LAST:13};C.MonthToString={BT:function(A7){var BeP=A7;var XL=A.jV;switch(
BeP){case 1:XL=A.aaR(A.act.AEf);break;case 2:XL=A.aaR(A.act.AC0);break;case 3:XL=
A.aaR(A.act.AEr);break;case 4:XL=A.aaR(A.act.AB1);break;case 5:XL=A.aaR(A.act.AEt
);break;case 6:XL=A.aaR(A.act.AEh);break;case 7:XL=A.aaR(A.act.AEg);break;case 8:
XL=A.aaR(A.act.AB8);break;case 9:XL=A.aaR(A.act.AGK);break;case 10:XL=A.aaR(A.act.
AEG);break;case 11:XL=A.aaR(A.act.AEE);break;case 12:XL=A.aaR(A.act.ACL);break;default:
throw new Error(A0h+BeP.toFixed());}return XL;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MonthToString;},_className:"Device::MonthToString"
};C.V0={FileName:A.jV,AGE:0,B6:0,EV:0,AgL:0,AVa:false,FD:function(){this.E4(0);this.
AgL=1;this.FileName=A.jV;this.AGE=0;this.AVa=false;this.B6=0;},E4:function(E){if(
this.EV===E)return;this.EV=E;A.abo([this,this.SL,this.E4],0);},SL:function(){return this.
EV;},_Init:function(aArg){this.__proto__=C.V0;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::DataExportContext"
};C.AWa={Init:function(aArg){var B;A.zX([this,this.Bf2],[B=A._GetAutoObject(C.Device
),B.A9Y,B.Bb7],0);this.Bf2(this);},Cs:function(){A._GetAutoObject(C.Device).Asc(
this.toString());},Bf2:function(G){this.Fl(A._GetAutoObject(C.Device).AHs);A.we(
this,0);},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AWa;this.ZG(3);this.Init(aArg);},_className:"Device::WeightGainsLowClass"};C.AV$={
Init:function(aArg){var B;A.zX([this,this.Bf0],[B=A._GetAutoObject(C.Device),B.A9X
,B.Bb6],0);this.Bf0(this);},Cs:function(){A._GetAutoObject(C.Device).Asb(this.toString(
));},Bf0:function(G){this.Fl(A._GetAutoObject(C.Device).AHr);A.we(this,0);},_Init:
function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV$;this.
ZG(3);this.Init(aArg);},_className:"Device::WeightGainsHighClass"};C.AWc={Init:function(
aArg){var B;A.zX([this,this.Bf4],[B=A._GetAutoObject(C.Device),B.A91,B.Bb_],0);this.
Bf4(this);},Cs:function(){A._GetAutoObject(C.Device).Asd(this.toString());},Bf4:
function(G){this.Fl(A._GetAutoObject(C.Device).AHv);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AWc;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightValuesBirthClass"};C.AV_={Init:function(
aArg){var B;A.zX([this,this.BfY],[B=A._GetAutoObject(C.Device),B.A9W,B.Bb5],0);this.
BfY(this);},Cs:function(){A._GetAutoObject(C.Device).Asa(this.toString());},BfY:
function(G){this.Fl(A._GetAutoObject(C.Device).AHq);A.we(this,0);},_Init:function(
aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=C.AV_;this.ZG(3);
this.Init(aArg);},_className:"Device::WeightGainsAverageClass"};C.AMM={Init:function(
aArg){var B;A.zX([this,this.Bfj],[B=A._GetAutoObject(C.Device),B.A80,B.BbD],0);this.
Bfj(this);},Bfj:function(G){this.Fl(A._GetAutoObject(C.Device).AB0);A.we(this,0);
},_Init:function(aArg){C.Int32ArrayWrapper._Init.call(this,aArg);this.__proto__=
C.AMM;this.ZG(3);this.Init(aArg);},_className:"Device::AnimalTypesWeightGainsClass"
};C.BFv={BFy:0,BFm:1,BEe:2,BGX:3,Unknown:4};C.BDU={None:0,BFG:1,BFA:2,BFw:3,BFx:
4};C.BGR={A8A:0,Manual:1,TransponderId:2,NaisId:3,LAST:4};C.TransponderLinkageIdChangeMethodToString={
BT:function(A7){var Bhd=A7;var ABz=A.jV;switch(Bhd){case 0:ABz=A.aaR(A.acf.A8A);
break;case 1:ABz=A.aaR(A.acf.A6f);break;case 2:ABz=A.aaR(A.acf.A6x);break;case 3:
ABz=A.aaR(A.acf.BiF);break;default:throw new Error(A0i+Bhd.toFixed());}return ABz;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.TransponderLinkageIdChangeMethodToString;
},_className:"Device::TransponderLinkageIdChangeMethodToString"};C.A$t={Bgb:function(
AoH){var Jt=A.ab0(A.abV(AoH,15),0,10);var JH=A._GetAutoObject(C.Converter).S_(Jt
);if(!!JH){if(JH===10){if((((AoH.length!==16)||!A._GetAutoObject(A.acj.VM).AVW(AoH
))||!!A._GetAutoObject(C.Converter).Bam(Jt))||!A._GetAutoObject(C.Converter).AVK(
Jt))return 0;else return Jt;}else return Jt;}else{JH=A._GetAutoObject(C.Converter
).S_(A._GetAutoObject(C.Device).PZ);if(!!JH&&(JH===10)){if(!A._GetAutoObject(A.acj.
VM).AVW(AoH))return 0;if(AoH.length===12){var Bc5=A.ab0(A.abV(AoH,10),0,10);var AKk=
A._GetAutoObject(C.Converter).AVK(Bc5);if((Bc5>0)&&!!AKk)return(A._GetAutoObject(
C.Converter).Aqz(JH)*1000000000000)+A.ab0(A.abV(AoH,10),0,10);}}}return 0;},Bga:
function(JJ){if(!((JJ.length===8)||((JJ.length===10)&&A._GetAutoObject(A.acj.VM).
AVW(JJ))))return 0;var AA1=A._NewObject(A.Core.Bq,0);var A4u=false;var A4z=A.abW(
JJ,4,4);var AtY=A.wz(A4z,0,10);if((AtY<2000)||(AtY>2100)){A4z=A.abV(JJ,4);AtY=A.
wz(A4z,0,10);A4u=true;}if((AtY<2000)||(AtY>2100))return 0;AA1.Year=AtY;var AK6;var
Az8;if(A4u){AK6=A.abW(JJ,4,2);Az8=A.wz(AK6,0,10);}else{AK6=A.abW(JJ,2,2);Az8=A.wz(
AK6,0,10);}if((Az8<1)||(Az8>12))return 0;AA1.Ux(Az8);var AK5;var Az7;if(A4u){AK5=
A.abW(JJ,6,2);Az7=A.wz(AK5,0,10);}else{AK5=A.abV(JJ,2);Az7=A.wz(AK5,0,10);}if((Az7<
1)||(Az7>AA1.Zu()))return 0;AA1.Lt(Az7);return AA1.JZ();},_Init:function(aArg){this.
__proto__=C.A$t;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Device::ParserClass"};C.AkF={_Init:function(
){C.A$t._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AnimalTableFieldsToString={BT:function(A7){var Aav=A7;var MZ=A.jV;
switch(Aav){case 14:MZ=A.aaR(A.acf.Afu);break;case 32:MZ=A.aaR(A.acf.Breed);break;
case 4:MZ=A.aaR(A.acf.Aef);break;case 28:MZ=A.aaR(A.acf.A55);break;case 33:MZ=A.
aaR(A.acf.AgI);break;case 23:MZ=A.aaR(A.acf.KO);break;case 7:MZ=A.aaR(A.acf.Afp);
break;case 2:MZ=A.aaR(A.acf.P);break;case 0:MZ=A.aaR(A.acf.GO);break;case 8:MZ=A.
aaR(A.acf.Alarm);break;case 9:MZ=A.aaR(A.acf.ACw);break;case 38:MZ=A.aaR(A.acf.Bi6
);break;case 11:MZ=A.aaR(A.acf.Fever);break;case 29:MZ=A.aaR(A.acf.ARF);break;case
18:MZ=A.aaR(A.acf.Nc);break;case 26:MZ=A.aaR(A.acf.Ul);break;case 22:MZ=A.aaR(A.
acf.Transponder);break;case 1:MZ=A.aaR(A.acf.GJ);break;case 34:MZ=A.aaR(A.acf.Jm
);break;case 6:case 25:case 27:case 10:case 37:case 12:case 17:case 5:case 3:case
35:case 36:case 15:case 16:case 24:case 31:case 20:case 30:case 21:case 19:case 13:
MZ=A.jV;break;default:throw new Error(A0j+A7.toFixed());}return MZ;},_Init:function(
aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.AnimalTableFieldsToString;
},_className:"Device::AnimalTableFieldsToString"};C.AEo={Bf:0,BGu:1,LAST:2};C.ListViewScopeToString={
BT:function(A7){var BAJ=A7;var A3a=A.jV;switch(BAJ){case 0:A3a=A.aaR(A.acf.Bf);break;
case 1:A3a=A.aaR(A.acf.BpN);break;default:throw new Error(A0k+A7.toFixed());}return A3a;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.ListViewScopeToString;
},_className:"Device::ListViewScopeToString"};C.AHu={BHo:0,BHn:1,BHm:2,LAST:3};C.
WeightValuePrecisionToString={BT:function(A7){var BDs=A7;var ALH=A.jV;switch(BDs
){case 0:ALH=AyN+A.aaR(A.acf.AAk);break;case 1:ALH=Atn+A.aaR(A.acf.AiB);break;case
2:ALH=AIN+A.aaR(A.acf.AiB);break;default:throw new Error(AIO+A7.toFixed());}return ALH;
},_Init:function(aArg){C.EnumToString._Init.call(this,aArg);this.__proto__=C.WeightValuePrecisionToString;
},_className:"Device::WeightValuePrecisionToString"};C.AgD={BT:function(A7){var ALc=
A7;if(ALc===1)return A.aaR(A.acf.Bj3);else return C.AnimalTypeToString.BT.call(this
,A7);},_Init:function(aArg){C.AnimalTypeToString._Init.call(this,aArg);this.__proto__=
C.AgD;},_className:"Device::AnimalTypeToStringHeifer"};C.Wq={RU:0,BFC:1,LAST:2};
C.MassDeregistrationCriterionToString={BT:function(A7){var BAM=A7;var A3f=A.jV;switch(
BAM){case 0:A3f=A.aaR(A.acf.Bk9);break;case 1:A3f=A.aaR(A.acf.ASp);break;default:
throw new Error(Ayp+A7.toFixed());}return A3f;},_Init:function(aArg){C.EnumToString.
_Init.call(this,aArg);this.__proto__=C.MassDeregistrationCriterionToString;},_className:
"Device::MassDeregistrationCriterionToString"};C.UInt64PartialFilterCriterion={A6:
A.jV,Zs:0,OI:0,Abq:function(){var Aw=A._NewObject(C.UInt64PartialFilterCriterion
,0);Aw.E9(this);return Aw;},E9:function(AH){C.FilterCriterion.E9.call(this,AH);var
Aw=(C.UInt64PartialFilterCriterion.isPrototypeOf(AH)?AH:null);if(!!Aw){this.A6=Aw.
A6;this.Zs=Aw.Zs;this.OI=Aw.OI;}},Initialize:function(Bc,Ec,A9,Aty,AJd,Qf){this.
EJ=Bc;this.Operator=Ec;this.A6=A9;this.YQ=Qf;this.Zs=Aty;this.OI=AJd;return this;
},_Init:function(aArg){C.FilterCriterion._Init.call(this,aArg);this.__proto__=C.
UInt64PartialFilterCriterion;},_className:"Device::UInt64PartialFilterCriterion"
};C.BEj={Idle:0,BF7:1,BGg:2,BGx:3,Error:4};C.AVV={Ask:0,AsS:0,Z7:0,AT3:function(
E){if(this.Z7===E)return;this.Z7=E;A.abo([this,this.Bmf,this.AT3],0);},AT5:function(
E){if(this.AsS===E)return;this.AsS=E;A.abo([this,this.Bmh,this.AT5],0);},ATF:function(
E){if(this.Ask===E)return;this.Ask=E;A.abo([this,this.BlT,this.ATF],0);},Bmf:function(
){return this.Z7;},Bmh:function(){return this.AsS;},BlT:function(){return this.Ask;
},_Init:function(aArg){this.__proto__=C.AVV;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Device::UsbDevice"
};
C._Init=function(){C.Int32FilterCriterion.__proto__=C.FilterCriterion;C.StringFilterCriterion.
__proto__=C.FilterCriterion;C.Table.__proto__=C.ITable;C.Animal.__proto__=C.Row;
C.Rating.__proto__=C.Row;C.HelperClass.__proto__=C.AmN;C.BoolFilterCriterion.__proto__=
C.FilterCriterion;C.UInt32FilterCriterion.__proto__=C.FilterCriterion;C.ScreenTypeToString.
__proto__=C.EnumToString;C.OverlayMenuToString.__proto__=C.EnumToString;C.ScanStateToString.
__proto__=C.EnumToString;C.MeasureStateToString.__proto__=C.EnumToString;C.TemperatureUnitToString.
__proto__=C.EnumToString;C.AnimalTypeToString.__proto__=C.EnumToString;C.LanguageToString.
__proto__=C.EnumToString;C.GenderToString.__proto__=C.EnumToString;C.BirthTypeToString.
__proto__=C.EnumToString;C.SyncStateToString.__proto__=C.EnumToString;C.RatedAttributeToString.
__proto__=C.EnumToString;C.AssesmentToString.__proto__=C.EnumToString;C.BooleanToYesNo.
__proto__=C.EnumToString;C.PopupIdToString.__proto__=C.EnumToString;C.TransponderTypeToString.
__proto__=C.EnumToString;C.TransponderProtocolToString.__proto__=C.EnumToString;
C.RatingModeToString.__proto__=C.EnumToString;C.MassUnitToString.__proto__=C.EnumToString;
C.ActionToString.__proto__=C.EnumToString;C.WeightRecordingModeToString.__proto__=
C.EnumToString;C.BooleanToAutoOnOff.__proto__=C.EnumToString;C.WeightRecordingScopeToString.
__proto__=C.EnumToString;C.AnimalListContentToString.__proto__=C.EnumToString;C.
GenderFilterCriterion.__proto__=C.FilterCriterion;C.AnimalTypeFilterCriterion.__proto__=
C.FilterCriterion;C.AutoRegistrationModeToString.__proto__=C.EnumToString;C.AssessmentFilterCriterion.
__proto__=C.FilterCriterion;C.FactoryResetScopeToString.__proto__=C.EnumToString;
C.AVw.__proto__=C.Int32ArrayWrapper;C.AVv.__proto__=C.Int32ArrayWrapper;C.AML.__proto__=
C.Int32ArrayWrapper;C.UInt64FilterCriterion.__proto__=C.FilterCriterion;C.BooleanToAssignedUnassignedString.
__proto__=C.EnumToString;C.CountryToString.__proto__=C.EnumToString;C.EaseOfDeliveryToString.
__proto__=C.EnumToString;C.WhereAboutsToString.__proto__=C.EnumToString;C.BreedToString.
__proto__=C.EnumToString;C.AnimalIdGenerationMethodToString.__proto__=C.EnumToString;
C.DirectionOfCountingToString.__proto__=C.EnumToString;C.Aeh.__proto__=C.EnumToIcon;
C.AdY.__proto__=C.EnumToIcon;C.GermanStateToString.__proto__=C.EnumToString;C.EartagNrAssignmentModeToString.
__proto__=C.EnumToString;C.Na.__proto__=C.EnumToCodeset;C.ReasonOfLeavingToString.
__proto__=C.EnumToString;C.Ahz.__proto__=C.EnumToCodeset;C.K1.__proto__=C.EnumToCodeset;
C.CalfDeregistrations.__proto__=C.Row;C.DeviceComponentToString.__proto__=C.EnumToString;
C.AgR.__proto__=C.EnumToCodeset;C.AeU.__proto__=C.EnumToIcon;C.WhereAboutsFilterCriterion.
__proto__=C.FilterCriterion;C.TimespanDaysToString.__proto__=C.EnumToString;C.USBStateToString.
__proto__=C.EnumToString;C.AnimalIdAutoGenerationMethodToString.__proto__=C.EnumToString;
C.MonthToString.__proto__=C.EnumToString;C.AWa.__proto__=C.Int32ArrayWrapper;C.AV$.
__proto__=C.Int32ArrayWrapper;C.AWc.__proto__=C.Int32ArrayWrapper;C.AV_.__proto__=
C.Int32ArrayWrapper;C.AMM.__proto__=C.Int32ArrayWrapper;C.TransponderLinkageIdChangeMethodToString.
__proto__=C.EnumToString;C.AnimalTableFieldsToString.__proto__=C.EnumToString;C.
ListViewScopeToString.__proto__=C.EnumToString;C.WeightValuePrecisionToString.__proto__=
C.EnumToString;C.AgD.__proto__=C.AnimalTypeToString;C.MassDeregistrationCriterionToString.
__proto__=C.EnumToString;C.UInt64PartialFilterCriterion.__proto__=C.FilterCriterion;
};C._ReInit=function(){var B;if((B=C.Device._this))B._ReInit(),C.Device._ReInit.
call(B);if((B=C.Converter._this))B._ReInit(),C.Converter._ReInit.call(B);if((B=C.
Helper._this))B._ReInit(),C.Helper._ReInit.call(B);if((B=C.AkF._this))B._ReInit(
),C.AkF._ReInit.call(B);};C.DJ=function(D){var B;if((B=C.Device._this)&&(B._cycle
!=D))B._Done(C.Device._this=null);if((B=C.Converter._this)&&(B._cycle!=D))B._Done(
C.Converter._this=null);if((B=C.Helper._this)&&(B._cycle!=D))B._Done(C.Helper._this=
null);if((B=C.AkF._this)&&(B._cycle!=D))B._Done(C.AkF._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */