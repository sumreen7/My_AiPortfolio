'use client';

import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

const MOTION_CONFIG: Omit<HTMLMotionProps<'div'>, 'ref'> = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

export function SimplifiedChatView({
  message,
  isLoading,
  reload,
  addToolResult,
}: SimplifiedChatViewProps) {
  if (message.role !== 'assistant') return null;

  const toolInvocations =
    message.parts
      ?.filter(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state === 'result'
      )
      .map((part) =>
        part.type === 'tool-invocation' ? part.toolInvocation : null
      )
      .filter(Boolean) || [];

  const currentTool = toolInvocations.length > 0 ? [toolInvocations[0]] : [];

  const CARD_TOOLS = new Set([
    'getProjects',
    'getPresentation',
    'getResume',
    'getContact',
    'getSkills',
    'getExperience',
    'getAchievements',
    'getCertifications',
    'getSports',
    'getCrazy',
    'getMe',
  ]);

  const hasTools = currentTool.length > 0;
  const hasCardTool = currentTool.some(
    (tool) => tool && CARD_TOOLS.has(tool.toolName)
  );
  const trimmedContent = message.content.trim();
  const looksLikeJson =
    trimmedContent.startsWith('{') || trimmedContent.startsWith('[');
  const hasTextContent =
    trimmedContent.length > 0 && !hasCardTool && !looksLikeJson;

  console.log('currentTool', currentTool);

  return (
    <motion.div {...MOTION_CONFIG} className="flex h-full w-full flex-col px-4">
      <div className="custom-scrollbar flex h-full w-full flex-col overflow-y-auto">
        {hasTools && (
          <div className="mb-6 w-full">
            <ToolRenderer
              toolInvocations={currentTool}
              messageId={message.id || 'current-msg'}
            />
          </div>
        )}

        {hasTextContent && (
          <div className="w-full">
            <ChatBubble variant="received" className="w-full">
              <ChatBubbleMessage className="w-full">
                <ChatMessageContent
                  message={message}
                  isLast={true}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                  skipToolRendering={true}
                />
              </ChatBubbleMessage>
            </ChatBubble>
          </div>
        )}

        <div className="pb-6"></div>
      </div>
    </motion.div>
  );
}