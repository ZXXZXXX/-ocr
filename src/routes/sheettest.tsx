import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sheettest")({ component: T });

function T() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>查看</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[80vw] sm:max-w-[80vw]">hello</SheetContent>
      </Sheet>
    </div>
  );
}
