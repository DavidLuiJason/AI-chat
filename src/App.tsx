/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h1 className="text-lg font-semibold text-slate-100">Control Plane Orchestration: Stages 1–5</h1>
          <span className="px-2 py-0.5 text-xs rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
            Validated (98/98 Tests)
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Control plane schema integrity, atomic authorization transaction, factual effect ledger, controlled dispatch boundary, and immutable claim-specific evidence ingestion (<code className="text-amber-400">evidence_records</code>) are fully implemented and verified against PostgreSQL.
        </p>
        <ul className="text-xs space-y-1.5 text-slate-300">
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 1: Schema constraints, <code className="text-slate-200">UNIQUE(execution_identity)</code>, distinct correlation IDs, append-only logs (34/34 checks)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 2: Single-transaction atomic authorization, hard internal budget reservation, compare-and-commit fencing (13/13 tests)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 3: Effect Ledger (<code className="text-slate-200">INTENT ≠ EFFECT ≠ ATTEMPT ≠ DISPATCH</code>), repeat mode gating (17/17 tests)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 4: Atomic dispatch claim + attempt state transition (<code className="text-slate-200">RESERVED → DISPATCHED_UNRESOLVED</code>) under row serialization (17/17 tests)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 5: Immutable evidence ingestion (<code className="text-slate-200">evidence_records</code>) protected by DB append-only trigger (17/17 tests)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 5: Contract-defined correlation (<code className="text-slate-200">client_correlation_id</code>, <code className="text-slate-200">provider_assigned_id</code>; never guessing)</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 5: SAFE_REPEAT cycle isolation: shared <code className="text-slate-200">provider_dedup_identity</code> cannot conflate attempts</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-emerald-400 font-bold">✓</span>
            <span>Stage 5: Contradiction preservation: conflicting evidence coexists in history without erasing facts</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
