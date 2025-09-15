import { FileCode2, TerminalSquare } from "lucide-react";

const code = `POST /v1/cards
Content-Type: application/json
Authorization: Bearer <token>

{
  "type": "virtual",
  "currency": "AED",
  "limit": 1000,
  "controls": { "mcc_whitelist": ["5732","4814"] }
}`.trim();

export default function Developers() {
  return (
    <section id="developers" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Built for developers</h2>
            <p className="mt-2 text-zinc-600">Clean, consistent APIs with great docs and webhooks for everything that matters.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><FileCode2 className="h-4 w-4 text-brand-600" /> Type-safe SDKs</li>
              <li className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-brand-600" /> Sandbox in minutes</li>
              <li className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-brand-600" /> Test cards & simulators</li>
            </ul>
          </div>
          <pre className="card p-6 text-sm overflow-auto leading-relaxed">
{code}
          </pre>
        </div>
      </div>
    </section>
  );
}
