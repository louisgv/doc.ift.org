---
title: SIMP Compliance
description: This page will describe the neccesary KDEs for completing a SIMP report as well as how to convert the EPCIS XML into the SIMP PGA Records.
---

In this scenario we will cover a single Farm with a single Farm Harvest. We will be building a PGA Record based off the Events below. The Master Data for these events can be found above in the Master Data section.

## Recommended Additonal EPCIS Attributes
There are attributes required by SIMP that are not part of the GDST guidance. Here are recommendations on how these attributes could be recorded in EPCIS in order to meet SIMP requirements.

* **IFTP Number** - This can be recorded as an additional attribute either in the Party or Location master data. The recommended CBV attribute is "urn:gdst:iftp".

## Master Data
In order to not repeat the master data used with each example, I would like to provide the master data used in the examples below. 
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
                    <attribute id="urn:gdst:iftp">1234567890</attribute>
                </VocabularyElement>

                <!-- Jimmy's Processings Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:0048000.000001">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Processings Co.</attribute>
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
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">3165 Pacific Hwy</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92101</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
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

## Required KDEs

In order to fill out a SIMP report for a Aquaculture scenario we will need the following KDEs:
* **Scientific Name** - Pulled from Master Data
* **Farming Country** - Pulled from the Country of Origin in the ILMD data of the Fishing Event
* **Harvest Date** - Pulled from the Event Time of the Offload Event.
* **IFTP Number** - Pulled from the Master Data of the Vessel / Party. In this example we will pull it from the Master Data of the Vessel Owning Party.
* **Farm Name** - Pulled from the Master Data for Owning Party of the BizLocation of event with the disposition of "entering_commerce".
* **Farm Address** - Pulled from the Master Data for the BizLocation of event with the disposition of "entering_commerce".
* **Farm Contact Name** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* **Farm Contact Email** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* **Farm Contact Phone** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* **Product Net Weight** - Pulled from the Net Weight recorded for the Product in the Offload Event
* **Product Form** - Pulled from the Product Form of the Master Data of the Offloaded product.that occurs.
