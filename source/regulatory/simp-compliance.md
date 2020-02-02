---
title: SIMP Compliance
description: This page will describe the neccesary KDEs for completing a SIMP report as well as how to convert the EPCIS XML into the SIMP PGA Records.
---

## Recommended Additonal EPCIS Attributes
There are attributes required by SIMP that are not part of the GDST guidance. Here are recommendations on how these attributes could be recorded in EPCIS in order to meet SIMP requirements.

* **IFTP Number** - This can be recorded as an additional attribute either in the Party or Location master data. The recommended CBV attribute is 
* **Catching Country** - SIMP requires the Catching Country to be recorded. We recommend that 

## Master Data
In order to not repeat the master data used with each example, I would like to provide the master data used in the examples below. 

**Master Data**
```xml
<!-- MASTER DATA -->
<EPCISMasterData>
    <VocabularyList>

        <!-- TRADE ITEMS / PRODUCT DEFINITIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
            <VocabularyElementList>
                
                <!-- YELLOW FIN TUNA -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Yellowfin Tuna</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Thunnus albacares</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">YFT</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">WHL</attribute>
                </VocabularyElement>
            </VocabularyElementList>
        </Vocabulary>

        <!-- TRADING PARTNERS / PARTIES / OWNERS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Party">
            <VocabularyElementList>

                <!-- Bing Fishing Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bing Fishing Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne"/>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"/>
                    <attribute id="urn:epcglobal:cbv:mda#city"/>
                    <attribute id="urn:epcglobal:cbv:mda#state"/>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode"/>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">TW</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact"/>
                    <attribute id="urn:epcglobal:cbv:mda#telephone"/>
                    <attribute id="urn:epcglobal:cbv:mda#email"/>
                </VocabularyElement>

                <!-- Jimmy's Processings Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:0048000.000001">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Tender Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne"/>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"/>
                    <attribute id="urn:epcglobal:cbv:mda#city"/>
                    <attribute id="urn:epcglobal:cbv:mda#state"/>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode"/>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">TW</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact"/>
                    <attribute id="urn:epcglobal:cbv:mda#telephone"/>
                    <attribute id="urn:epcglobal:cbv:mda#email"/>
                </VocabularyElement>
            </VocabularyElementList>
        </Vocabulary>

        <!-- LOCATIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Location">
            <VocabularyElementList>

                <!-- BING Ship -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">BING Ship</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselName">BING Ship</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.9517276</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>
                </VocabularyElement>

                <!-- Jimmy's Tender Vessel -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0048000.JimmysTender001">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselName">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.1234567</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>
                </VocabularyElement>

                <!-- PORT OF San Diego (Owned By: Jimmy's Processings Co.) -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0048000.SDPORT">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>

                    <!-- Philip: I don't know what the port code is for the San Diego port and couldn't find it online -->
                    <attribute id="urn:epcglobal:cbv:mda#unloadingPort">SDPORT</attribute>

                    <attribute id="urn:epcglobal:cbv:mda#name">Port of San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">3165 Pacific Hwy</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92101</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#latitude">32.7355</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#longitude">-117.1772</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>
        </Vocabulary>
    </VocabularyList>
</EPCISMasterData>
```

## Wild Harvest
In this scenario we will cover a single large vessel. In SIMP, a large vessel is considered a vessel that is either more than 12 meters long, or 20 metric tons. Below I will give an example EPCIS XML that will include Master Data, a Fishing Event, a Transshipment Event, and an Offload Event. THen we will take the EPCIS data and show how it can be converted into PGA Record(s) for filing a SIMP report. 

In order to fill out a SIMP report for a Wild Harvest scenario we will need the following KDEs:
* **Scientific Name** - Pulled from Master Data
* **Catching Country** - Pulled from the Country of Origin in the ILMD data of the Fishing Event
* **FAO Zone** - Pulled from the Vessel Catch information in the ILMD data for the Fishing Event
* **Offload / Landing Date** - Pulled from the Event Time of the Offload Event
* **Fishing Method** - Pulled from the Vessel Catch information in the ILMD data for the Fishing Event
* **Product Form** - Pulled from the Master Data
* **IFTP Number** - ?????
* **First Receiver Business Name** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* **First Receiver Address** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* **First Receiver Contact Name** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* **First Receiver Contact Email** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* **First Receiver Contact Phone** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* **Product Net Weight** - Pulled from the Net Weight recorded for the Product in the Offload Event
* **Vessel Flag** - Pulled from the Master Data for BizLocation of the Fishing Event or from the Vessel Catch information in the ILMD data of the Fishing Event
* **Vessel Name** - Pulled from the Master Data for BizLocation of the Fishing Event or from the Vessel Catch information in the ILMD data of the Fishing Event
* **Transshipment Veesel Country** - Pulled from the Master Data for the BizLocation of the Transshipment Event
* **Offload Country** - Pulled from the Master Data for the BizLocation of the Offload Event

This documentation is not meant to serve as a guide for SIMP and is just mean to be an example of converting GDST EPCIS XML into a SIMP Records. For futher documentation on SIMP please see [here](https://www.cbp.gov/sites/default/files/assets/documents/2017-Oct/Implementation%20Guide%20for%20NMFS%20SIM%209-28-17_v2.pdf).

Here is the Example XML for the GDST EPCIS data. This event data will contain a Fishing Event, Transshipment, and Offload Event.

**Fishing Event**
```xml
<!-- FISHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T18:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>CD42262C-844C-403C-85C5-34728F7FCDA5</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- BING Ship -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT123</epcClass>
                <quantity>10000.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

            <!-- Catching Country -->
            <cbvmda:countryOfOrigin>US</cbvmda:countryOfOrigin>

            <!-- CATCH INFORMATION -->
            <cbvmda:vesselCatchInformationList>
                <cbvmda:vesselCatchInformation>

                    <!-- FAO ZONE 77 -->
                    <cbvmda:catchArea>77</cbvmda:catchArea>

                    <!-- GEAR TYPE: Beam Trawls -->
                    <cbvmda:fishingGearTypeCode>TBB</cbvmda:fishingGearTypeCode>
                </cbvmda:vesselCatchInformation>
            </cbvmda:vesselCatchInformationList>

            <!-- WILD HARVEST -->
            <cbvmda:productionMethodCode>MARINE_FISHERY</cbvmda:productionMethodCode>
            
            <cbvmda:harvestStartDate>2020-01-27</cbvmda:harvestStartDate>
            <cbvmda:harvestEndDate>2020-01-27</cbvmda:harvestEndDate>

            <!-- CATCH CERTIFICATE (?) -->
            <cbvmda:certificationList>
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:catch_certificate</gdst:certificateType>
                    <cbvmda:certificationStandard>NM6</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>DFO</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>SIMP.LPCO.2</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>10161781</cbvmda:certificationIdentification>
                </cbvmda:certification>
            </cbvmda:certificationList>
        </ilmd>
    </extension>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Bing Fishing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</cbvmda:informationProvider>
</ObjectEvent>
```

**TransShipment Event**
```xml
<!-- TRANSSHIPMENT EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T18:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>895ED95E-9B4A-4E6A-8C9C-F2EE2611779B</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:gdst:bizStep:transshipment</bizStep>

    <!-- Jimmy's Tender -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.JimmysTender001</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT123</epcClass>
                <quantity>10000.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <!-- SELLER: Bing Fishing Co. -->
        <sourceList>
            <source type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</source>
        </sourceList>

        <!-- BUYER: Jimmy's Processing Co. -->
        <destinationList>
            <destination type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</destination>
        </destinationList>
    </extension>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```

**Offload Event**
```xml
<!-- OFFLOADING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T18:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>CC2BB7E8-0E81-4915-81EB-386BFD15B39C</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:gdst:bizStep:offloading</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- Port of San Diego -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.SDPORT</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT123</epcClass>
                <quantity>10000.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>
    </extension>

    <!-- Jimmy's Processing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0048000.000001</gdst:productOwner>

    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```

Now that we have the EPCIS xml, the PGA Record(s) will look like:
```
PG01001NMFSIMY
PG02
PG05                                                              YFT
PG06HCFUSPAC                 01272020        TRW  NRD
PG142NM4<ENTER IFTP NUMBER HERE>
PG19BY                   Port of San Diego               3165 Pacific Hwy
PG20                                     San Diego            CA US92101       
PG21BY Joe Smith              +1.999-999-9999joe@triunionsf.com
PG31VCRUS                                 KG 10000
PG31VNMBING Ship
PG3213 US
```

Important Notes:
* The FAO Zone 77 is translated into the NMFS Geographic Regin 'PAC'
* The 'Country of Origin' in the ILMD data for the Fishing Event is not required by GDST (as of V4 document). This is added in order to populate the PG06.CountryCode field because catching country is required.
* The 'Product Form' on the Product Definition for the Yellow Tuna is translated into the NMFS Processing Description 'NRD' for the PG06.Processing Description field.
* Right now there is no recommended way for recording an IFTP number for a Party / Vessel. So for now, I have just left this as 'ENTER IFTP NUMBER HERE' in the PGA records.
* The PG32.CountryCode is supposed the be territorial waters where the Transshipment took place. This can be deduced by taking the GDST Transshipment Location At-Sea Geo Coordinates and translating those into the Territorial Water. 


## Aggregated Wild Harvest
This is coming soon.

## Farm Harvest

## Aggregated Farm Harvest
This is coming soon.
