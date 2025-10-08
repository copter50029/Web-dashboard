"use client";

import { Card, CardContent } from "@/components/ui/card";

type Member = {
  name: string;
  img: string;
};

const members: Member[] = [
  { name: "Pup Tubsang", img: "https://picsum.photos/seed/pup/600/600" },
  { name: "Alex Rivera", img: "https://picsum.photos/seed/alex/600/600" },
  { name: "Mina Chai", img: "https://picsum.photos/seed/mina/600/600" },
  { name: "Kenji Ito", img: "https://picsum.photos/seed/kenji/600/600" },
  { name: "Sara Noor", img: "https://picsum.photos/seed/sara/600/600" },
];

export default function page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight mb-6">Our Team</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {members.map((m) => (
          <Card
            key={m.name}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow px-5"
          >
            <CardContent className="p-0">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-medium">{m.name}</p>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                test Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit natus
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-3xl text-center mt-25">Put your text here</div>
    </main>
  );
}
