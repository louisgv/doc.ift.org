---
title: Wild Harvest Events
description: This page covers the different scenarios around harvesting products from the wild and how those different scenarios are transcribed into GDST EPCIS events.
---

## Master Data
Here is the Master Data that will be used in the scenarios listed below.

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

                <!-- Jimmy's Tender Co. -->
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
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselName">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.1234567</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>
                </VocabularyElement>
        </Vocabulary>
    </VocabularyList>
</EPCISMasterData>
```

## Fishing Events
Fishing Events are used to record when products are harvested from the wild. There are different scenarios that can occur. Each time a vessel harvests products from the water, a fishing event should be recorded. However, it's possible for a vessel to record a single Fishing Event for their entire fishing trip while at sea.

### Vessel Multiple Harvests wan Single Fishing Event
This covers when a single large vessel harvested products from multiple locations while on their fishing trip but only wants to record a single fishing event. In this case, we cannot record a single latitude / longitude for the fishing event, and will just list out all the products captured. in this case we won't record a read point, and will just record a catch area.

In this scenario a fishing vessel named **BING Ship** owned by **Bing Fishing Co.** has gone fishing in **FAO Zone 77**. It has gone trawling in multiple locations for **Tuna**. In this scenario the fishing vessel caught **10,000 Kilograms** of Tuna through out it's fishing trip.

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

### Vessel with Multiple Harvests and Multiple Fishing Events
This covers when a vessel harvests products from multiple locations and will record a fishing event for each time they harvested products. In this case, we will record the latitude and longitude for each fishing event.

In this scenario a fishing vessel named **BING Ship** owned by **Bing Fishing Co.** has gone fishing in **FAO Zone 77**. It has gone trawling in multiple locations for **Tuna**. In this scenario the fishing vessel caught **10,000 Kilograms** of Tuna through out it's fishing trip trawling in 4 different locations. Each time the fishing vessel went trawling, it caught **2,500 Kilograms** at each location and recorded a Fishing Event each time with a latitude and longitude for where the trawling occured.

```xml
<!-- FISHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T2:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>2743D44E-4E20-4237-BA68-1842F3173790</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>
    <readPoint>
        <id>geo:38.288338,-124.018110</id>
    </readPoint>

    <!-- BING Ship -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT1111</epcClass>
                <quantity>2500.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

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

```xml
<!-- FISHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T2:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>2743D44E-4E20-4237-BA68-1842F3173790</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>
    <readPoint>
        <id>geo:38.258151,-123.875288</id>
    </readPoint>

    <!-- BING Ship -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT2222</epcClass>
                <quantity>2500.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

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

```xml
<!-- FISHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T2:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>2743D44E-4E20-4237-BA68-1842F3173790</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>
    <readPoint>
        <id>geo:38.184786,-123.776411</id>
    </readPoint>

    <!-- BING Ship -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT3333</epcClass>
                <quantity>2500.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

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

```xml
<!-- FISHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T2:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>2743D44E-4E20-4237-BA68-1842F3173790</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>
    <readPoint>
        <id>geo:38.115669,-123.655561</id>
    </readPoint>

    <!-- BING Ship -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT4444</epcClass>
                <quantity>2500.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

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

## Transshipment Events
Sometimes after products are harvested they are transferred to other ships before they are offloaded at shore. In this case, a Transshipment event is recorded. Here we are going to build on the previous scenario where a Vessel with Multiple Harvests and Multiple Fishing Events transshipped all 4 catches to a Transshipment Vessel. In this scenario, the Transshipment Vessel, **Jimmy's Tender Vessel** owned by **Jimmy's Tender Co.**, is purchasing the Tuna from the Fishing Vessel, so these products are changing ownership and entering commerce for the first time.

```xml
<!-- TRANSSHIPMENT EVENT -->
<ObjectEvent>
    <eventTime>2019-01-28T18:12:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>EEC77B23-E1BF-484D-BE2C-7CBC4EBB4F9A</eventID>
    </baseExtension>
    <epcList/>
    <action>OBSERVE</action>
    <bizStep>urn:gdst:bizStep:transshipment</bizStep>
    <disposition>urn:gdst:entering_commerce</disposition>
    

    <!-- Jimmy's Tender Vessel -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.019283"</id>
    </bizLocation>

    <!-- The exact coordinates where the Transshipments occured. -->
    <readPoint>
        <id>geo:37.860236,-123.144697</id>
    </readPoint>

    <extension>

        <!-- YELLOW FIN TUNA -->
        <quantityList>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT1111</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT2222</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT3333</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT4444</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <!-- SELLER: Bing Fishing Co.-->
        <sourceList>
            <source type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</source>
        </sourceList>

        <!-- BUYER: Jimmy's Tender Co. -->
        <destinationList>
            <destination type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</destination>
        </destinationList>
    </extension>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Jimmy's Tender Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```
