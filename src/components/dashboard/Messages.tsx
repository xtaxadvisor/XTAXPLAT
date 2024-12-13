import React, { useState } from 'react';
import { Send, Paperclip, Search, FileText, Download } from 'lucide-react';
import { Button } from '../ui/Button';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  attachments?: { name: string; size: string }[];
}

export function Messages() {
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'John Smith',
      content: "I have reviewed your tax documents. Everything looks good, but I need clarification on the business expenses.",
      timestamp: '10:30 AM',
      isOwn: false,
      attachments: [
        { name: 'Tax_Review_2024.pdf', size: '2.4 MB' }
      ]
    },
    {
      id: '2',
      sender: 'You',
      content: 'Sure, I can provide more details. Which specific expenses need clarification?',
      timestamp: '10:35 AM',
      isOwn: true
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-lg shadow">
      <div className="border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-lg rounded-lg px-4 py-2 ${
                message.isOwn
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium">{message.sender}</span>
                <span className="text-sm opacity-75">{message.timestamp}</span>
              </div>
              <p className="mt-1">{message.content}</p>
              {message.attachments && (
                <div className="mt-2 space-y-2">
                  {message.attachments.map((file, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-2 rounded ${
                        message.isOwn ? 'bg-blue-700' : 'bg-gray-200'
                      }`}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs opacity-75">{file.size}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Download}
                        className={message.isOwn ? 'text-white' : 'text-gray-600'}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <Button
            type="button"
            variant="ghost"
            icon={Paperclip}
            className="text-gray-400 hover:text-gray-600"
          />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Button
            type="submit"
            variant="primary"
            icon={Send}
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}