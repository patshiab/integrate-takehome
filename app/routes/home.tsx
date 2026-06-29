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
      <Button />
    </CenterContainer>
  );
}
