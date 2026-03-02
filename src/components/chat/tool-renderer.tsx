// src/components/chat/tool-renderer.tsx
import { Contact } from '../contact';
import Crazy from '../crazy';
import Experience from '../experience';
import InternshipCard from '../InternshipCard';
import Me from '../me';
import { Presentation } from '../presentation';
import AllProjects from '../projects/AllProjects';
import RCB from '../rcb';
import Resume from '../resume';
import Skills from '../skills';
import Sports from '../sport';
import Achievements from '../achievements';
import Certifications from '../Certifications';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';

const WebSearchResult = ({ result }: { result: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full overflow-hidden rounded-lg border bg-secondary/10"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between p-3 hover:bg-secondary/20 transition-colors">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-blue-500" />
          <span className="font-medium text-sm">Web Search</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            Results
          </span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="border-t bg-background/50 p-4">
          <div className="prose dark:prose-invert max-w-none text-sm">
            <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-relaxed">
              {typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

interface ToolRendererProps {
  toolInvocations: any[];
  messageId: string;
}

export default function ToolRenderer({ toolInvocations, messageId }: ToolRendererProps) {
  return (
    <div className="w-full transition-all duration-300">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool;

        let parsedResult = null;
        try {
          if (tool.result && typeof tool.result === 'string') {
            parsedResult = JSON.parse(tool.result);
          } else if (tool.result && typeof tool.result === 'object') {
            parsedResult = tool.result;
          }
        } catch (error) {
          console.error(`Error parsing tool result for ${toolName}:`, error);
        }

        switch (toolName) {
          case 'getProjects':
            return (
              <div key={toolCallId} className="w-full overflow-hidden rounded-lg p-2">
                <AllProjects />
              </div>
            );

          case 'getPresentation':
            return (
              <div key={toolCallId} className="w-full overflow-hidden rounded-lg p-2">
                <Presentation />
              </div>
            );

          case 'getResume':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Resume />
              </div>
            );

          case 'getContact':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Contact />
              </div>
            );

          case 'getSkills':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Skills />
              </div>
            );

          case 'getExperience':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Experience />
              </div>
            );

          case 'getAchievements':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Achievements data={parsedResult} />
              </div>
            );

            case 'getCertifications':
  return (
    <div key={toolCallId} className="w-full rounded-lg p-2">
      <Certifications data={parsedResult} />
    </div>
  );

          case 'getSports':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Sports />
              </div>
            );

          case 'getCrazy':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <Crazy />
              </div>
            );

          case 'getInternship':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                <InternshipCard />
              </div>
            );

          case 'getMe':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                {parsedResult ? <Me data={parsedResult.data} /> : <p>Error loading data.</p>}
              </div>
            );

          case 'getRCB':
            return (
              <div key={toolCallId} className="w-full rounded-lg p-2">
                {parsedResult ? <RCB data={parsedResult.data} /> : <p>Error loading data.</p>}
              </div>
            );

          case 'getWebSearch':
            return (
              <WebSearchResult
                key={toolCallId}
                result={typeof tool.result === 'string' ? tool.result : JSON.stringify(tool.result, null, 2)}
              />
            );

          default:
            return (
              <div key={toolCallId} className="bg-secondary/10 w-full rounded-lg p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{toolName}</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                    Tool Result
                  </span>
                </div>
                <div className="mt-2">
                  {parsedResult ? (
                    <pre className="bg-secondary/20 overflow-x-auto rounded p-3 text-sm">
                      {JSON.stringify(parsedResult, null, 2)}
                    </pre>
                  ) : (
                    <p>Error loading tool result.</p>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}