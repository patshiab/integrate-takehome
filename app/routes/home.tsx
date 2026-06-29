import type { Route } from "./+types/home";
import CenterContainer from "../components/CenterContainer";
import Button from "../components/Button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <CenterContainer>
      <div className="flex flex-col gap-l">
        <div className="flex flex-col gap-xs">
          <p className="font-mono text-[10px] text-cool-400 uppercase tracking-[0.5px]">1 — Default (no id)</p>
          <Button />
        </div>
        <div className="flex flex-col gap-xs">
          <p className="font-mono text-[10px] text-cool-400 uppercase tracking-[0.5px]">2 — Default (with id)</p>
          <Button activeId="2" />
        </div>
        <div className="flex flex-col gap-xs">
          <p className="font-mono text-[10px] text-cool-400 uppercase tracking-[0.5px]">3 — Default (with id, hovered)</p>
          <Button activeId="2" forceHover />
        </div>
        <div className="flex flex-col gap-xs">
          <p className="font-mono text-[10px] text-cool-400 uppercase tracking-[0.5px]">4 — Active with dropdown</p>
          <Button activeId="2" defaultOpen />
        </div>
      </div>
    </CenterContainer>
  );
}
