import { Link } from "@tanstack/react-router";

import TanchatHeader from "../integrations/tanchat/header-user";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/chat">Chat</Link>
        </div>{" "}
      </nav>

      <div>
        <TanchatHeader />
      </div>
    </header>
  );
}
