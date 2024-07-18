import ListItem from "@/components/list-item";
import Separator from "@/components/separator";
import { Button } from "@/components/ui/button";

const data = [
  { id: 1, title: "Page 1", checked: false },
  { id: 2, title: "Page 2", checked: false },
  { id: 3, title: "Page 3", checked: false },
  { id: 4, title: "Page 4", checked: false },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full grid place-items-center">
      <div
        className="w-[370px] h-[326px] rounded-[6px] border-[1px] border-[#EEEEEE] drop-shadow-card p-[10px_0px_10px_0px]"
        style={{
          boxShadow: "0px 8px 15px 0px #1414141F, 0px 0px 4px 0px #1414141A",
        }}
      >
        <ListItem title="All pages" />
        <Separator />
        {data.map((i) => (
          <ListItem key={i.id} title={i.title} />
        ))}
        <Separator />
        <div className="p-[10px_10px_10px_15px]">
          <Button className="mx-auto">Done</Button>
        </div>
      </div>
    </main>
  );
}
