---
title: REST API Examples for Events
---

# Events
Here we are going to cover how to pull and push EPCIS Events to/from a GDST compliant server. For the sake of the examples here, we will be using the following base URL, https://example.org/GDST/

## XML Schema
Events can be pulled in EPCIS Message format.

## Pulling Events
Here we will have an example of PULLING one or more events using a GET operation against the https://example.org/GDST/events/ REST API path. This REST API method requires that the first path parameter is the EPC for which we want all events pulled.

This is an example Request for pulling one or more EPCIS events in EPCIS format.

**Request**
**URL:** https://example.org/GDST/events/urn:gdst:product:lot:class:123.321
**HTTP Method:** GET

**Response**
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<epcis:EPCISDocument schemaVersion="1.2" creationDate="2013-06-
04T14:59:02.099+02:00"
    xmlns:epcis="urn:epcglobal:epcis:xsd:1"
    xmlns:example="http://ns.example.com/epcis">
    <EPCISBody>
        <EventList>
            <ObjectEvent>
                <eventTime>2017-08-16T13:26:00.000+02:00</eventTime>
                <eventTimeZoneOffset>+02:00</eventTimeZoneOffset>
                <action>OBSERVE</action>
                <bizStep>urn:epcglobal:cbv:bizstep:receiving</bizStep>
                <disposition>urn:epcglobal:cbv:disp:in_transit</disposition>
                <readPoint>
                    <id>geo:34.100389,-117.537468</id>
                </readPoint>
                <bizLocation>
                    <id>urn:epc:id:sgln:0048000.00003.0</id>
                </bizLocation>
                <bizTransactionList>
                    <bizTransaction type="urn:epcglobal:cbv:btt:po">500127042</bizTransaction>
                    <bizTransaction type="urn:epcglobal:cbv:btt:inv">9992332</bizTransaction>
                    <bizTransaction type="urn:epcglobal:cbv:btt:cert">ABC123</bizTransaction>
                </bizTransactionList>
                <extension>
                    <quantityList>
                        <quantityElement>
                            <epcClass>urn:epc:class:lgtin:0048000.363267.YFT123</epcClass>
                            <quantity>5714</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:123.456.789/epcClass>
                            <quantity>1234</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </quantityList>
                </extension>
                <gdst:productOwner>urn:epc:id:pgln:0048000.000001</gdst:productOwner>
                <cbvmda:informationProvider>urn:epc:id:pgln:0048000.00001</cbvmda:informationProvider>
            </ObjectEvent>
        </EventList>
    </EPCISBody>
</epcis:EPCISDocument>
```

## Pushing Events
Events can be posted to a GDST Compliant REST API using the POST Method against the "events" path on the REST API. When posting events, there is also an additional optional HTTP Header called **GDST-Response-URL** that can be used to indicate a GDST Compliant REST API that can be used to look up the Master Data used in the EPCIS Events.


**Request**
**URL:** https://example.org/GDST/events/
**HTTP Method:** POST
**GDST-Response-URL:** https://sender-example.org/GDST/

Request Content
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<epcis:EPCISDocument schemaVersion="1.2" creationDate="2013-06-
04T14:59:02.099+02:00"
    xmlns:epcis="urn:epcglobal:epcis:xsd:1"
    xmlns:example="http://ns.example.com/epcis">
    <EPCISBody>
        <EventList>
            <ObjectEvent>
                <eventTime>2017-08-16T13:26:00.000+02:00</eventTime>
                <eventTimeZoneOffset>+02:00</eventTimeZoneOffset>
                <action>OBSERVE</action>
                <bizStep>urn:epcglobal:cbv:bizstep:receiving</bizStep>
                <disposition>urn:epcglobal:cbv:disp:in_transit</disposition>
                <readPoint>
                    <id>geo:34.100389,-117.537468</id>
                </readPoint>
                <bizLocation>
                    <id>urn:epc:id:sgln:0048000.00003.0</id>
                </bizLocation>
                <bizTransactionList>
                    <bizTransaction type="urn:epcglobal:cbv:btt:po">500127042</bizTransaction>
                    <bizTransaction type="urn:epcglobal:cbv:btt:inv">9992332</bizTransaction>
                    <bizTransaction type="urn:epcglobal:cbv:btt:cert">ABC123</bizTransaction>
                </bizTransactionList>
                <extension>
                    <quantityList>
                        <quantityElement>
                            <epcClass>urn:epc:class:lgtin:0048000.363267.YFT123</epcClass>
                            <quantity>5714</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:123.456.789/epcClass>
                            <quantity>1234</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </quantityList>
                </extension>
                <gdst:productOwner>urn:epc:id:pgln:0048000.000001</gdst:productOwner>
                <cbvmda:informationProvider>urn:epc:id:pgln:0048000.00001</cbvmda:informationProvider>
            </ObjectEvent>
        </EventList>
    </EPCISBody>
</epcis:EPCISDocument>
```

**Response**
No response is received from the server. Simply a status code of 200.