export type Article = {
  slug: string;
  title: string;
  category: "Habitation" | "Science" | "Technology" | "Human Life" | "Missions";
  date: string;
  author: string;
  readingTime: string;
  excerpt: string;
  content: string;
  heroImage: string;
  tags: string[];
  related?: string[];
};

export const articles: Article[] = [
  {
    slug: "how-first-humans-live-on-mars",
    title: "How Would the First Humans Actually Live on Mars?",
    category: "Habitation",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "6 min read",
    heroImage: "/images/featured-habitat.jpeg",
    tags: ["habitat", "life-support", "radiation", "water", "food"],
    related: ["underground-mars-city", "mars-normal-day"],
    excerpt:
      "The first humans on Mars would live inside carefully engineered habitats designed to create a small pocket of Earth-like conditions in an otherwise hostile environment.",
    content: `Mars would not welcome its first settlers with breathable air, liquid water flowing across the surface, or a comfortable climate.

The first humans on Mars would live inside carefully engineered habitats designed to create a small pocket of Earth-like conditions in an environment that is otherwise extremely hostile to human life.

The Martian atmosphere is far thinner than Earth's and is composed mostly of carbon dioxide. Humans cannot breathe it. Surface temperatures can become extremely cold, and radiation from space reaches the surface far more easily than it does on Earth.

For that reason, the first settlement would probably look less like a traditional city and more like a collection of connected survival systems.

A habitat would need to provide pressure, oxygen, temperature control, water recycling, food, electricity, communications, and protection from radiation.

Every one of those systems would be important.

If one failed, the consequences could be serious.

## Where Would the First Habitat Be Built?

Location would matter enormously.

Scientists would search for regions where water ice is accessible, the terrain is relatively safe, sunlight is available, and construction is practical.

Water is particularly valuable because it could potentially provide drinking water, oxygen, agricultural resources, and hydrogen and oxygen for rocket propellant.

Instead of immediately building huge structures on the open surface, early settlers might construct habitats partially underground or cover them with layers of Martian soil.

The soil could provide additional protection from radiation and extreme temperature changes.

## What Would People Eat?

The first settlers could not depend entirely on food shipments from Earth.

A permanent settlement would eventually need local food production.

Plants could be grown inside controlled environments using carefully managed lighting, water, nutrients, temperature, and atmospheric conditions.

Early agriculture would probably focus on crops that provide significant nutrition while requiring relatively little space and resources.

Food production would therefore become part of the settlement's life-support system rather than simply being a separate industry.

## How Would People Get Water?

Water could become one of the most important resources on Mars.

Although liquid water is not stable on the surface under present Martian conditions, large amounts of water ice exist in the Martian environment.

Settlers could potentially extract ice, purify the resulting water, and recycle it repeatedly.

A Mars settlement would need to treat water as a precious resource.

Water used for drinking could eventually become wastewater, then purified and returned to the system.

The goal would be to lose as little water as possible.

## Would Mars Have Cities?

Eventually, perhaps.

But the first settlement would probably be small.

A realistic early settlement could consist of several connected habitats, laboratories, storage areas, power systems, agricultural modules, robotic construction equipment, landing areas, and scientific facilities.

Over time, additional modules could be added.

The settlement could grow outward only as its population, energy production, food systems, construction capability, and resource availability increased.

A Martian city would therefore probably begin as infrastructure before it became architecture.`,
  },
  {
    slug: "why-mars-dangerous-and-fascinating",
    title: "Why Mars Is Both Fascinating and Extremely Dangerous",
    category: "Science",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "3 min read",
    heroImage: "/images/article-science.jpeg",
    tags: ["atmosphere", "dust storms", "radiation", "climate"],
    related: ["how-first-humans-live-on-mars"],
    excerpt:
      "Mars is Earth's planetary neighbor, but its surface conditions are dramatically different from those humans experience at home.",
    content: `Mars is often described as Earth's planetary neighbour, but its surface conditions are dramatically different from those humans experience at home.

Its atmosphere is extremely thin, its temperatures can be severe, and its surface receives much more radiation than Earth's surface.

Mars also experiences enormous dust storms.

Some storms remain local, while others can expand across huge portions of the planet.

For astronauts, dust would be more than a visual nuisance.

Fine particles could enter equipment, interfere with machinery, affect solar panels, and create engineering problems.

Yet Mars also contains many of the resources future explorers would need.

Water ice, carbon dioxide, minerals, and sunlight could potentially become raw materials for producing water, oxygen, fuel, construction materials, and food.

That combination makes Mars an unusual engineering challenge.

The planet is dangerous, but it may also contain many of the resources needed to reduce dependence on Earth.`,
  },
  {
    slug: "robots-build-mars-settlement",
    title: "Could Robots Build the First Mars Settlement?",
    category: "Technology",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "3 min read",
    heroImage: "/images/article-robots.jpg",
    tags: ["robots", "construction", "autonomous", "infrastructure"],
    related: ["how-first-humans-live-on-mars"],
    excerpt:
      "Before humans arrive, robots could perform some of the most dangerous construction work on Mars.",
    content: `Before humans arrive, robots could perform some of the most dangerous construction work.

Autonomous machines could potentially prepare landing areas, move materials, excavate soil, construct protective structures, deploy power systems, and prepare habitats.

Robotic construction would reduce the amount of work astronauts would need to perform after landing.

It could also allow equipment to be tested before people arrive.

One possible strategy would be to send robotic missions years before the first permanent crew.

Those robots could prepare infrastructure and demonstrate that essential systems are working.

Then humans could arrive at a partially prepared settlement rather than starting from an empty landscape.`,
  },
  {
    slug: "normal-day-on-mars",
    title: "What Would a Normal Day on Mars Feel Like?",
    category: "Human Life",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "3 min read",
    heroImage: "/images/article-day.jpeg",
    tags: ["sol", "routine", "spacesuit", "daily-life"],
    related: ["how-first-humans-live-on-mars"],
    excerpt:
      "A Martian day is surprisingly similar to an Earth day, but almost everything else would be different.",
    content: `A Martian day is surprisingly similar to an Earth day.

A Martian solar day, called a sol, lasts approximately 24 hours and 39 minutes.

That similarity could make scheduling somewhat easier for humans.

But almost everything else would be different.

People would wake inside pressurized habitats.

They would check environmental systems, communications, power production, water reserves, and equipment.

Some people might work in laboratories.

Others might maintain machines, grow food, explore nearby terrain, repair habitats, operate robots, or study the planet.

Going outside would require a spacesuit.

A simple walk outside would actually be a complex expedition.

Before leaving the habitat, astronauts would need to prepare equipment and verify that their suit and life-support systems were functioning correctly.

On Mars, everyday activities would become engineering operations.`,
  },
  {
    slug: "making-oxygen-on-mars",
    title: "How Could Mars Make Its Own Oxygen?",
    category: "Technology",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "3 min read",
    heroImage: "/images/article-oxygen.webp",
    tags: ["ISRU", "oxygen", "MOXIE", "atmosphere"],
    related: ["robots-build-mars-settlement"],
    excerpt:
      "Mars already contains oxygen, but most of it is chemically locked inside rocks and minerals.",
    content: `Mars already contains a huge amount of oxygen — but most of it is chemically locked inside rocks and minerals or exists in carbon dioxide.

The atmosphere itself is mostly carbon dioxide.

If future technology can reliably process that carbon dioxide, oxygen could potentially be produced locally.

Producing oxygen on Mars would be extremely valuable.

It could support human breathing systems and potentially contribute to rocket propellant production.

Local resource utilization could therefore reduce the amount of material that must be transported from Earth.

Instead of treating Mars as a place where every resource has to arrive from Earth, engineers could gradually turn local materials into useful products.`,
  },
  {
    slug: "underground-mars-city",
    title: "Why the First Mars City Might Be Underground",
    category: "Habitation",
    date: "2026-10-01",
    author: "MARS//HABITAT Research",
    readingTime: "3 min read",
    heroImage: "/images/article-underground.jpg",
    tags: ["underground", "radiation", "shielding", "excavation"],
    related: ["how-first-humans-live-on-mars"],
    excerpt:
      "Building underground could provide protection from radiation and extreme temperature fluctuations.",
    content: `Building underground could provide several advantages.

Martian soil could provide protection from radiation and help reduce temperature fluctuations.

Underground structures could also provide additional shielding from the harsh surface environment.

However, excavation on another planet would be extremely difficult.

Heavy machinery would need to operate remotely or under human supervision.

Engineers would also need to ensure that underground structures remain pressurized and structurally stable.

The first underground habitats might therefore begin as relatively small protected spaces before eventually expanding.`,
  },
];