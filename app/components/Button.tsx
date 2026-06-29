import { useState } from 'react';
import { Icon } from '@iconify-icon/react';

export default function Button() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex gap-s items-center justify-center px-m py-s rounded bg-white hover:bg-default-hover-light cursor-pointer"
        data-node-id="16202:5954"
        data-name="Button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon="boxicons:grid-filled" className="text-cool-700 w-4 h-4" />
        <p className="font-mono font-bold text-[10px] leading-[12px] text-cool-700 text-center tracking-[0.5px] uppercase whitespace-nowrap" data-node-id="I16202:5954;11235:7918">
          example saved view
        </p>
        <Icon icon="boxicons:chevron-down" className="text-cool-700 w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-s left-0 bg-white rounded border border-cool-200 shadow-lg z-10">
          <button className="block w-full px-m py-s text-left font-mono text-[10px] text-cool-700 hover:bg-default-hover-light cursor-pointer" onClick={() => setIsOpen(false)}>
            Example 1
          </button>
          <button className="block w-full px-m py-s text-left font-mono text-[10px] text-cool-700 hover:bg-default-hover-light cursor-pointer" onClick={() => setIsOpen(false)}>
            Example 2
          </button>
          <button className="block w-full px-m py-s text-left font-mono text-[10px] text-cool-700 hover:bg-default-hover-light cursor-pointer" onClick={() => setIsOpen(false)}>
            Example 3
          </button>
          <button className="block w-full px-m py-s text-left font-mono text-[10px] text-cool-700 hover:bg-default-hover-light cursor-pointer" onClick={() => setIsOpen(false)}>
            Example 4
          </button>
        </div>
      )}
    </div>
  );
}
