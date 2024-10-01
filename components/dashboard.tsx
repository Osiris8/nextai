import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PlusIcon,
  SendIcon,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Zap,
  Code,
  PenTool,
} from "lucide-react";

export default function Component() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const conversationStarters = [
    { icon: Zap, text: "Explain quantum computing" },
    { icon: Code, text: "Debug my Python code" },
    { icon: PenTool, text: "Write a poem about AI" },
  ];

  const handleSend = (message = input) => {
    if (message.trim()) {
      setMessages([...messages, { role: "user", content: message }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Here's a simulated response to: "${message}"`,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        {/* User Account Section */}
        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-gray-400">john@example.com</p>
          </div>
        </div>

        <Button className="mb-4 w-full justify-start" variant="ghost">
          <PlusIcon className="mr-2 h-4 w-4" /> New Chat
        </Button>

        <div className="flex-grow overflow-y-auto space-y-2">
          <p className="text-xs text-gray-400 uppercase mb-2">
            AI Conversations
          </p>
          {conversationStarters.map((starter, index) => (
            <Button
              key={index}
              className="w-full justify-start text-left"
              variant="ghost"
              onClick={() => handleSend(starter.text)}
            >
              <starter.icon className="mr-2 h-4 w-4" />
              <span className="truncate">{starter.text}</span>
            </Button>
          ))}
        </div>

        <div className="mt-auto space-y-2">
          <Button className="w-full justify-start" variant="ghost">
            <User className="mr-2 h-4 w-4" /> My Account
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button className="w-full justify-start" variant="ghost">
            <LogOut className="mr-2 h-4 w-4" /> Log out
          </Button>
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-white border-b p-4">
          <h2 className="text-xl font-semibold">AI Assistant</h2>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-sm p-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="p-4 border-t bg-white">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-grow"
            />
            <Button onClick={() => handleSend()}>
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
