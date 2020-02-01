---
title: SIMP Compliance
description: This page will describe the neccesary KDEs for completing a SIMP report as well as how to convert the EPCIS XML into the SIMP PGA Records.
---

## Wild Harvest
In this scenario we will cover a single large vessel. In SIMP, a large vessel is considered a vessel that is either more than 12 meters long, or 20 metric tons. Below I will give an example EPCIS XML that will include Master Data, a Fishing Event, a Transshipment Event, and an Offload Event. THen we will take the EPCIS data and show how it can be converted into PGA Record(s) for filing a SIMP report. 

In order to fill out a SIMP report for a Wild Harvest scenario we will need the following KDEs:
* Scientific Name - Pulled from Master Data
* Catching Country - Pulled from the Vessel Catch information in the ILMD data for the Fishing Event
* FAO Zone - Pulled from the Vessel Catch information in the ILMD data for the Fishing Event
* Offload / Landing Date - Pulled from the Event Time of the Offload Event
* Fishing Method - Pulled from the Vessel Catch information in the ILMD data for the Fishing Event
* Product Form - Pulled from the Master Data
* IFTP Number - ?????
* First Receiver Business Name - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* First Receiver Address - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* First Receiver Contact Name - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* First Receiver Contact Email - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* First Receiver Contact Phone - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce"
* Product Net Weight - Pulled from the Net Weight recorded for the Product in the Offload Event
* Vessel Flag - Pulled from the Master Data for BizLocation of the Fishing Event or from the Vessel Catch information in the ILMD data of the Fishing Event
* Vessel Name - Pulled from the Master Data for BizLocation of the Fishing Event or from the Vessel Catch information in the ILMD data of the Fishing Event
* Transshipment Veesel Country - Pulled from the Master Data for the BizLocation of the Transshipment Event
* Offload Country - Pulled from the Master Data for the BizLocation of the Offload Event

This documentation is not meant to serve as a guide for SIMP and is just mean to be an example of converting GDST EPCIS XML into a SIMP Records. For futher documentation on SIMP please see [here](https://www.cbp.gov/sites/default/files/assets/documents/2017-Oct/Implementation%20Guide%20for%20NMFS%20SIM%209-28-17_v2.pdf).

Here is the Example XML for the GDST EPCIS data.
```xml
ENTER EPCIS XML EXAMPLE HERE
```

Now that we have the EPCIS xml, the PGA Record(s) will look like:
```
ENTER PGA RECORDS HERE
```

## Aggregated Wild Harvest

## Farm Harvest

## Aggregated Farm Harvest
