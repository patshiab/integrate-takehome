import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';

interface SavedView {
  id: string;
  name: string;
}

const savedViews: SavedView[] = [
  { id: '1', name: 'Q1 Revenue' },
  { id: '2', name: 'Top Accounts' },
  { id: '3', name: 'Pipeline by Stage' },
  { id: '4', name: 'Regional Breakdown' },
];

interface ButtonProps {
  activeId?: string;
  forceHover?: boolean;
  defaultOpen?: boolean;
}

export default function Button({ activeId: initialActiveId, forceHover, defaultOpen }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);
  const [activeId, setActiveId] = useState<string | undefined>(initialActiveId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeView = activeId ? savedViews.find((v) => v.id === activeId) : null;
  const hasActive = !!activeView;

  const bgClass = isOpen || forceHover ? 'bg-default-hover-light' : 'bg-white hover:bg-default-hover-light';
  const outlineClass = isOpen ? 'outline outline-1 outline-border-callout' : '';

  return (
    <div className="relative">
      <button
        className={`flex gap-s items-center justify-center px-s-plus py-s rounded-xs cursor-pointer focus-visible:outline-1 focus-visible:outline-border-callout focus-visible:ring-2 focus-visible:ring-border-callout/30 ${bgClass} ${outlineClass}`}
        data-node-id="16202:5954"
        data-name="Button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={hasActive ? `Selected view: ${activeView.name}. Open view selector` : 'No view selected. Open view selector'}
      >
        <Icon
          icon="boxicons:grid-filled"
          className={`w-4 h-4 text-cool-700`}
          aria-hidden="true"
        />
        <p
          className={`font-10-mono-bold uppercase whitespace-nowrap text-center ${!hasActive ? 'opacity-25' : ''}`}
          data-node-id="I16202:5954;11235:7918"
        >
          {hasActive ? activeView.name : 'Unsaved View'}
        </p>
        <Icon
          icon="boxicons:chevron-down"
          className={`w-4 h-4 ${hasActive ? 'text-cool-700' : 'text-cool-400'}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Saved views"
          className="absolute top-full mt-m-plus left-0 bg-white rounded border border-cool-200 shadow-lg z-10 min-w-full"
        >
          {savedViews.map((view) => (
            <button
              key={view.id}
              role="option"
              aria-selected={activeId === view.id}
              className="flex items-center gap-m-plus w-full px-m-plus py-m-plus text-left font-12-mono-reg text-cool-700 hover:bg-default-hover-light cursor-pointer"
              onClick={() => { setActiveId(view.id); setIsOpen(false); }}
            >
              <span className="w-3 shrink-0" aria-hidden="true">
                {activeId === view.id && <Icon icon="boxicons:check" className="w-3 h-3 text-cool-700" />}
              </span>
              {view.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
