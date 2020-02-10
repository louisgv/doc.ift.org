---
title: Why EPCIS?
description: Here is page that covers why we chose EPCIS as the interoperable data format standard.
---

Event based traceability allows for the expression of KDEs in an ever-expanding manner. Original approaches to Traceability involved a bag of KDEs that was passed foward with each product, such as "Harvest Date", "Freeze Date", etc. However, the limitations to this was that a single Harvest Date could be expressed about a product, when in reality this is not usually the case. Usually a batch of seafood products will come from multiple harvests, in the case of popcorn shrimp, you are talking about hundrends of harvests. With the original apprach, solution providers would have to add multiple "Harvest Date" KDEs to the bag of attributes to express each Harvest Date. This same issue came up with other KDEs. With Event Based traceability, this is not a concern, each indiviudal harvest gets a Farm Harvest or Wild Harvest events. Those events are then connected to future products via Comminlging / Transformation events.

EPCIS is by far the most widespread and well-developed approach to event-based traceability available globally.  Especially when dealing with downstream actors such as retailers and their “tier 1” suppliers in Europe and the United States (and increasingly in Asia and elsewhere), the ability to provide traceability data in EPCIS-compatible format is a great advantage for securing market relationships. Due to this GDST decided to take the approach of using EPCIS to express traceability data.

