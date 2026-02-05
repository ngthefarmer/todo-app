# RPoint Marketplace - Design Plan

> **Status:** Design Phase
> **Objective:** Minimal, user-friendly real estate marketplace (non-property) with fast listing and efficient discovery

---

## 1. Core Design Philosophy

| Principle | Description |
|---|---|
| **Transaction-type-first** | Split the entire marketplace into BUY / RENT / HIRE before showing categories |
| **3-click rule** | Transaction type → Category group → Subcategory → Listings |
| **Progressive disclosure** | Never show all depth at once; reveal detail on demand |
| **Search-first UX** | Most users search, not browse; global search with auto-category detection |
| **Tags over deep navigation** | Fine granularity (marble vs granite) lives in filters/tags, not in category tree |
| **Adaptive forms** | Seller listing forms change fields based on selected category |
| **Cross-category bundles** | Project-based landing pages combine related items without duplicating data |

---

## 2. Navigation Architecture

### Level 0: Transaction Type (Primary Split)

```
┌─────────────┬─────────────┬─────────────┐
│     BUY     │    RENT     │    HIRE     │
│  Products   │  Equipment  │  Services   │
└─────────────┴─────────────┴─────────────┘
```

This single decision eliminates 60-70% of irrelevant categories for any user.

### Level 1: Category Groups

#### BUY Tab (8 groups)

| Group | Source Categories |
|---|---|
| **Construction & Building** | Construction Materials & Supplies |
| **Furniture** | Furniture & Furnishings |
| **Appliances & Electronics** | Home Appliances & Electronics + Safety & Security Products |
| **Decor & Interiors** | Interior Decor & Accessories |
| **Green & Solar** | Renewable Energy & Sustainability |
| **Heavy Equipment** | Equipment & Machinery (For Sale) |
| **Land & Outdoor** | Land & Plot Essentials |
| **Documents & Legal** | Documentation & Legal |

#### RENT Tab (8 groups)

| Group | Contents |
|---|---|
| **Earthmoving** | Excavators, Bulldozers, Loaders, Trenchers, Graders |
| **Lifting & Handling** | Cranes, Forklifts, Telehandlers, Lifts, Hoists |
| **Concrete & Road** | Mixers, Pumps, Rollers, Pavers, Compactors, Batching Plants |
| **Power Tools** | Generators, Drills, Cutting Machines, Grinders, Compressors, Welding |
| **Scaffolding & Formwork** | Scaffolding Systems, Formwork, Props, Ladders, Barriers |
| **Survey & Testing** | Total Stations, Laser Levels, GPS, Soil/Concrete Testing, NDT |
| **Demolition** | Breakers, Hammers, Robots, Crushers, Wrecking Balls |
| **Temporary Infrastructure** | Fencing, Portable Toilets, Site Cabins, Lighting Towers, Sound Systems |

#### HIRE Tab (4 groups)

| Group | Contents |
|---|---|
| **Design & Planning** | Architecture, Interior Design, Vastu/Feng Shui, 3D Modeling |
| **Construction** | General Contractors, Builders, Engineers, Project Management |
| **Legal & Finance** | Documentation, Valuation, Inspection, Registration, Compliance |
| **Maintenance** | Landscaping, Pest Control, Cleaning, Moving, Property Management |

### Level 2: Subcategories

Shown only after a Level 1 group is selected. Example for **Construction & Building**:

- Flooring
- Doors & Windows
- Paint & Finishing Materials
- Plumbing Fixtures & Supplies
- Sanitary Ware & Bathroom Fittings
- Electrical Fixtures & Supplies
- Roofing Materials
- Hardware & Tools
- Building Materials
- Construction Chemicals
- Glass & Glazing
- Insulation Materials
- Waterproofing & Damp Proofing

### Level 3: Tags/Filters (not navigation)

Fine detail lives as filterable tags on the listing results page:

```
Flooring listings page:
┌─ Filters ──────────────────────────────────────┐
│ Type:      [Tiles] [Hardwood] [Laminate]       │
│            [Carpet] [Vinyl] [Marble] [Granite] │
│ Price:     [Min] ─── [Max]                     │
│ Brand:     [_______________]                   │
│ Condition: [New] [Used]                        │
│ Location:  [Within 25km ▼]                     │
└────────────────────────────────────────────────┘
```

---

## 3. Complete Category Mapping

### BUY > Construction & Building

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Flooring | tiles, hardwood, laminate, carpet, vinyl, marble, granite, mosaic |
| Doors & Windows | wooden doors, UPVC, aluminum, glass doors, sliding doors, french doors, door frames, window grills |
| Paint & Finishing Materials | interior paint, exterior paint, primers, putty, texture paint, wallpaper, wood polish, varnish |
| Plumbing Fixtures & Supplies | pipes, fittings, taps, faucets, showerheads, bathroom fixtures, drainage systems, water tanks |
| Sanitary Ware & Bathroom Fittings | toilets/WCs, wash basins, sinks, bathtubs, shower enclosures, shower panels, bidets, urinals, bathroom accessories, cisterns, flush systems |
| Electrical Fixtures & Supplies | wires, cables, switches, sockets, MCBs, distribution boards, conduits, junction boxes |
| Roofing Materials | roofing sheets, tiles, waterproofing materials, insulation, gutters, flashing |
| Hardware & Tools | locks, hinges, handles, fasteners, nails, screws, adhesives, sealants |
| Building Materials | cement, steel bars, bricks, blocks, sand, aggregates, concrete mix, ready-mix concrete |
| Construction Chemicals | admixtures, bonding agents, curing compounds, epoxy resins, grouts, tile adhesives, joint fillers, concrete repair, corrosion inhibitors, floor hardeners, release agents, plasticizers, waterproofing chemicals, anti-termite treatments |
| Glass & Glazing | tempered glass, laminated glass, frosted glass, mirrors, glass panels |
| Insulation Materials | thermal insulation, sound insulation, foam boards |
| Waterproofing & Damp Proofing | membranes, coatings, sealants, injection systems |

### BUY > Furniture

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Living Room Furniture | sofas, chairs, coffee tables, TV units, recliners, ottomans |
| Bedroom Furniture | beds, mattresses, wardrobes, dressing tables, bedside tables, storage units |
| Dining Furniture | dining tables, dining chairs, sideboards, bar units, crockery units |
| Office Furniture | desks, office chairs, filing cabinets, conference tables, bookshelves |
| Kitchen Cabinets & Fixtures | modular kitchens, countertops, kitchen islands, pantry units |
| Bathroom Furniture | vanity units, storage cabinets, mirror cabinets |
| Outdoor/Garden Furniture | patio sets, garden benches, outdoor dining, loungers, umbrellas |
| Children's Furniture | kids beds, study tables, toy storage, bunk beds |
| Modular Furniture | customizable systems, space-saving furniture |
| Antique & Vintage Furniture | — |

### BUY > Appliances & Electronics

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Kitchen Appliances | refrigerators, microwaves, ovens, dishwashers, chimneys, hobs, mixers, grinders |
| Kitchen Sinks & Faucets | stainless steel sinks, granite sinks, kitchen taps, pull-out faucets, sensor taps |
| HVAC Systems | air conditioners, heaters, fans, ventilation, humidifiers, dehumidifiers |
| Water Heaters & Purifiers | geysers, instant heaters, RO systems, water softeners, UV purifiers |
| Laundry Appliances | washing machines, dryers, ironing systems |
| Smart Home Devices | smart locks, smart thermostats, voice assistants, smart plugs, home automation |
| Security Systems & CCTV | cameras, DVR/NVR, video doorbells, motion sensors, alarm systems, access control |
| Lighting & Fixtures | LED lights, chandeliers, pendant lights, outdoor lighting, emergency lights, solar lights |
| Entertainment Systems | TVs, home theater, projectors, sound systems |
| Vacuum Cleaners & Floor Care | robotic vacuums, wet & dry cleaners, floor polishers |
| Fire Safety Equipment | extinguishers, smoke detectors, fire alarms, sprinkler systems |
| Emergency Lighting & Exit Signs | — |
| Safes & Lockers | — |
| Gates & Barriers | automatic gates, boom barriers |
| Intercom Systems | — |
| Biometric Systems | fingerprint, face recognition |

### BUY > Decor & Interiors

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Curtains & Blinds | drapes, roller blinds, venetian blinds, vertical blinds, roman shades, motorized blinds |
| Wall Art & Paintings | canvas art, framed prints, murals, wall decals, metal art |
| Carpets & Rugs | area rugs, runners, Persian carpets, doormats, carpet tiles |
| Cushions & Soft Furnishings | throw pillows, cushion covers, throws, bedspreads, quilts |
| Lighting Fixtures | table lamps, floor lamps, wall sconces, decorative lights |
| Mirrors & Decorative Items | wall mirrors, decorative mirrors, sculptures, vases, artifacts |
| Plants & Planters | indoor plants, artificial plants, pots, vertical gardens |
| Clocks & Wall Decor | wall clocks, photo frames, shelving units |
| Tableware & Dining Decor | centerpieces, table runners, placemats |
| Bathroom Accessories | towel racks, soap dispensers, bathroom sets, shower curtains |

### BUY > Green & Solar

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Solar Panels & Systems | rooftop solar, solar inverters, batteries |
| Solar Water Heaters | — |
| Rainwater Harvesting Systems | — |
| Biogas Plants | — |
| Wind Energy Systems | small-scale turbines |
| Energy-Efficient Products | — |
| Eco-Friendly Building Materials | recycled materials, sustainable alternatives |
| Green Building Certifications & Consulting | — |

### BUY > Heavy Equipment

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Construction Equipment | excavators, bulldozers, cranes, loaders |
| Earthmoving Equipment | backhoes, trenchers, compactors |
| Concrete Equipment | mixers, vibrators, concrete pumps |
| Survey & Measurement Tools | total stations, laser levels, theodolites, measuring wheels |
| Safety Equipment | helmets, harnesses, safety nets, barricades, scaffolding |
| Generators & Power Tools | portable generators, diesel generators, drills, saws, grinders, compressors |
| Material Handling Equipment | forklifts, hoists, trolleys, conveyors |
| Welding & Cutting Equipment | — |
| Lifting Equipment | cranes, chain hoists, winches |

### BUY > Land & Outdoor

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Fencing Materials | chain link, barbed wire, wooden fencing, compound walls, gates |
| Landscaping Materials | paving stones, gravel, mulch, decorative rocks |
| Soil & Fertilizers | topsoil, compost, organic fertilizers, garden soil |
| Irrigation Systems | drip irrigation, sprinklers, garden hoses, timers |
| Outdoor Lighting | pathway lights, garden lights, security lights, solar lights |
| Boundary Markers & Survey Equipment | — |
| Drainage Solutions | French drains, catch basins, grating |
| Outdoor Structures | gazebos, pergolas, sheds, carports |
| Swimming Pool Equipment | pumps, filters, cleaners, chemicals |

### BUY > Documents & Legal

| Subcategory (L2) | Filter Tags (L3) |
|---|---|
| Property Documents | sale deeds, lease agreements, power of attorney templates |
| Blueprints & Plans | architectural drawings, structural plans, MEP drawings, as-built drawings |
| NOC Certificates | authority NOCs, completion certificates |
| Insurance Products | property insurance, construction insurance, home insurance |
| Loan & Finance Products | home loans, construction finance, mortgage services |
| Registration Services | document registration assistance, stamp duty calculation |
| Compliance & Approvals | building permits, occupancy certificates, environmental clearances |
| Title Search & Due Diligence | encumbrance certificates, title reports |

---

## 4. Seller Listing Flow

### Goal: List an item in under 2 minutes, max 3 screens

#### Screen 1: Transaction Type

```
What do you want to list?

  ( ) Product for Sale
  ( ) Equipment for Rent
  ( ) Professional Service

  [Continue]
```

#### Screen 2: Category Picker (Cascading + Search)

```
Select Category:

  [Construction & Building    ▼]    ← Level 1 dropdown
  [Flooring                   ▼]    ← Level 2 (appears after L1 pick)

  ── OR ──

  Type to search: [marble floor___________]
                    → Construction & Building > Flooring > marble
```

The type-to-search auto-suggests the full category path. Repeat sellers will exclusively use this.

#### Screen 3: Adaptive Listing Form

**Required fields (always shown, max 5-7):**

| Field | Notes |
|---|---|
| Title | Free text, with auto-suggest from category |
| Photos | Up to 8, first photo = thumbnail |
| Price | Number + currency; "Contact for Price" option |
| Location | Auto-detect + manual entry |
| Condition | New / Used / Refurbished (products only) |

**Category-specific fields (shown based on L2 selection):**

| Category Context | Extra Fields |
|---|---|
| Flooring | Material type, Size/dimensions, Quantity, Brand |
| Furniture | Material, Dimensions (LxWxH), Color, Style |
| Equipment (sale) | Make, Model, Year, Hours used |
| Equipment (rental) | Daily/Weekly/Monthly rate, Availability dates, Delivery available |
| Services | Years of experience, Certifications, Availability, Service area |
| Documents | Document type, Jurisdiction |

**Optional fields (expandable "Add more details" section):**

- Detailed description
- Brand
- Warranty information
- Delivery options
- Bulk pricing
- Certifications

---

## 5. Buyer Discovery Flow

### Homepage Layout

```
┌───────────────────────────────────────────────────┐
│  RPoint Marketplace                      [Login]  │
│                                                   │
│  ┌───────────────────────────────────────────┐    │
│  │  Search materials, equipment, services... │    │
│  └───────────────────────────────────────────┘    │
│                                                   │
│  [ BUY ]    [ RENT ]    [ HIRE ]                  │
│  ────────   ─────────   ─────────                 │
│                                                   │
│  Category icons (5-8 based on selected tab)       │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│  │icon │ │icon │ │icon │ │icon │ │icon │  ...   │
│  │name │ │name │ │name │ │name │ │name │        │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘       │
│                                                   │
│  Near You             Trending                    │
│  ┌──────┐ ┌──────┐   ┌──────┐ ┌──────┐          │
│  │ item │ │ item │   │ item │ │ item │          │
│  └──────┘ └──────┘   └──────┘ └──────┘          │
│                                                   │
│  Recently Listed                                  │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ item │ │ item │ │ item │ │ item │            │
│  └──────┘ └──────┘ └──────┘ └──────┘            │
└───────────────────────────────────────────────────┘
```

### Search Results Page

```
Search: "bathroom tiles"

  Products (12)  |  Services (3)  |  Rental (0)

  ┌─ Filters ────────────────────────────────┐
  │ Category: Construction > Flooring (auto) │
  │ Price:    [___] ─── [___]               │
  │ Location: [Within 25km         ▼]       │
  │ Type:     □ Ceramic  □ Porcelain        │
  │           □ Vitrified □ Mosaic          │
  │ Condition: □ New  □ Used                │
  │ Seller:    □ Business  □ Individual     │
  └──────────────────────────────────────────┘

  Sort: [Relevance ▼]  [Newest]  [Price ↑]  [Price ↓]

  ┌──────────────────────────────────────────┐
  │ [Photo]  Italian Marble Floor Tiles      │
  │          Rs 120/sq ft  ·  New            │
  │          Mumbai  ·  Listed 2 days ago    │
  └──────────────────────────────────────────┘
  ┌──────────────────────────────────────────┐
  │ [Photo]  Ceramic Bathroom Tiles 2x2     │
  │          Rs 45/sq ft  ·  New             │
  │          Pune  ·  Listed 5 days ago      │
  └──────────────────────────────────────────┘
```

### Cross-Category Project Bundles

Pre-configured search presets for common projects:

| Bundle Name | Categories Included |
|---|---|
| **Building a Bathroom** | Sanitary Ware, Bathroom Furniture, Water Heaters, Bathroom Accessories, Plumbing Services |
| **Kitchen Remodel** | Kitchen Cabinets, Kitchen Appliances, Kitchen Sinks, Countertops, Interior Design Services |
| **New Construction** | Building Materials, Construction Chemicals, Roofing, Electrical, Plumbing, Contractor Services |
| **Solar Installation** | Solar Panels, Solar Water Heaters, Green Consulting |
| **Landscaping Project** | Landscaping Materials, Irrigation, Outdoor Lighting, Outdoor Structures, Landscaping Services |

These bundles appear as quick links on the homepage or category pages.

---

## 6. Data Model

### Listing Schema

```
Listing {
  id:                 UUID
  transaction_type:   ENUM (BUY, RENT, HIRE)
  category_l1:        STRING  (e.g., "construction_building")
  category_l2:        STRING  (e.g., "flooring")
  tags:               STRING[] (e.g., ["marble", "polished", "italian"])

  // Common fields
  title:              STRING
  description:        TEXT
  price:              DECIMAL (nullable — "Contact for Price")
  price_unit:         STRING (e.g., "per sq ft", "per piece", "per day")
  photos:             STRING[] (URLs, max 8)
  location:           POINT (lat/lng) + STRING (city)
  condition:          ENUM (NEW, USED, REFURBISHED) — nullable for services

  // Category-specific (JSON — schema varies by L2)
  attributes:         JSONB {
    // Flooring example:
    material: "marble",
    size: "2x2 ft",
    quantity: 500,
    brand: "Kajaria"

    // Rental example:
    daily_rate: 5000,
    weekly_rate: 28000,
    monthly_rate: 100000,
    available_from: "2025-02-01",
    delivery_available: true

    // Service example:
    experience_years: 15,
    certifications: ["RERA registered"],
    service_area: "Mumbai Metropolitan Region"
  }

  // Metadata
  seller_id:          UUID
  seller_type:        ENUM (INDIVIDUAL, BUSINESS)
  status:             ENUM (ACTIVE, SOLD, EXPIRED, DRAFT)
  created_at:         TIMESTAMP
  updated_at:         TIMESTAMP
  expires_at:         TIMESTAMP
}
```

### Category Config Schema

```
CategoryConfig {
  transaction_type:   ENUM
  l1_key:             STRING
  l1_label:           STRING
  l1_icon:            STRING
  l2_key:             STRING
  l2_label:           STRING
  tags:               STRING[]  (suggested tags for this L2)
  required_attributes: JSONB    (form fields for seller listing)
  filter_config:      JSONB     (filter UI config for buyer browse)
}
```

This is stored as configuration (seed data/JSON), not user-generated.

---

## 7. Key UX Decisions Summary

| Decision | Rationale |
|---|---|
| 3 transaction tabs, not 11 flat categories | Reduces cognitive load by 70% on first interaction |
| Search auto-detects category | Buyers don't need to know the taxonomy to find things |
| Tags instead of L3 categories | Keeps navigation to max 2 clicks; detail handled via filters |
| Adaptive listing forms | Sellers see only relevant fields; reduces listing time |
| Category-specific attributes as JSONB | Flexible schema; easy to add new categories without migrations |
| Project bundles as saved searches | Cross-category discovery without data duplication |
| Location-first results | Real estate marketplace users care heavily about proximity |

---

## 8. Mobile Considerations

- Transaction type tabs should be **sticky at top** on scroll
- Category icons in a **horizontal scrollable row** (not grid)
- Filters in a **bottom sheet** (not sidebar) on mobile
- Seller listing form as **multi-step wizard** (1 screen per section)
- Photo upload with **camera integration** (not just gallery)
- **Swipe** between listing cards in search results

---

## 9. Implementation Priority

### Phase 1: MVP
1. Transaction type split (BUY/RENT/HIRE)
2. Level 1 + Level 2 category navigation
3. Basic listing creation (common fields only)
4. Search with category auto-detection
5. Location-based filtering

### Phase 2: Enhanced Listing
6. Category-specific form fields (attributes JSONB)
7. Tag-based filtering on results pages
8. Photo upload and gallery

### Phase 3: Discovery
9. Project bundles / cross-category pages
10. "Near You" and "Trending" sections
11. Saved searches and alerts

### Phase 4: Polish
12. Mobile-optimized flows
13. Seller dashboard
14. Analytics and insights
