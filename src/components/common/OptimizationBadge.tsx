import React from 'react';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import type { OptimizationImpact } from '../../types/portfolio';

interface OptimizationBadgeProps {
  impact: OptimizationImpact;
  className?: string;
}

export const OptimizationBadge: React.FC<OptimizationBadgeProps> = ({
  impact,
  className = ''
}) => {
  return (
    <div
      className={`rounded-xl border border-point/20 bg-gradient-to-r from-point/5 via-secondary/60 to-point/5 p-3.5 sm:p-4 space-y-2.5 ${className}`}
      data-testid="optimization-impact-card"
    >
      <div className="flex items-center justify-between flex-wrap gap-1.5">
        <div className="flex items-center space-x-1.5 text-xs font-bold text-point">
          <Zap className="w-3.5 h-3.5" />
          <span>성능 및 UX 최적화 성과</span>
        </div>
        <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-point/15 text-point text-[11px] font-bold border border-point/25">
          <CheckCircle2 className="w-3 h-3" />
          <span>{impact.impact}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs">
        <div className="flex items-center space-x-2 flex-1 min-w-0 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-muted">
          <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-500">
            Before
          </span>
          <span className="truncate font-medium text-main" title={impact.before}>
            {impact.before}
          </span>
        </div>

        <ArrowRight className="w-4 h-4 text-point shrink-0 mx-auto sm:mx-0 rotate-90 sm:rotate-0" />

        <div className="flex items-center space-x-2 flex-1 min-w-0 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-muted">
          <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-500">
            After
          </span>
          <span className="truncate font-medium text-main font-semibold" title={impact.after}>
            {impact.after}
          </span>
        </div>
      </div>
    </div>
  );
};
