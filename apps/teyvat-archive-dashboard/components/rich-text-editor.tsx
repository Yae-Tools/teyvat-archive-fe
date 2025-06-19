"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Palette } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [showColorPicker, setShowColorPicker] = useState(false)

  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#000080",
  ]

  const fontSizes = ["12px", "14px", "16px", "18px", "20px", "24px", "28px", "32px"]

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const isCommandActive = (command: string) => {
    return document.queryCommandState(command)
  }

  return (
    <div className={`border rounded-md ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-muted/50">
        <Button
          type="button"
          variant={isCommandActive("bold") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("bold")}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={isCommandActive("italic") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("italic")}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={isCommandActive("underline") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("underline")}
        >
          <Underline className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <select
          className="px-2 py-1 text-sm border rounded"
          onChange={(e) => execCommand("fontSize", e.target.value)}
          defaultValue="16px"
        >
          {fontSizes.map((size) => (
            <option key={size} value={size.replace("px", "")}>
              {size}
            </option>
          ))}
        </select>

        <Popover open={showColorPicker} onOpenChange={setShowColorPicker}>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm">
              <Palette className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="grid grid-cols-7 gap-1">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className="w-6 h-6 rounded border"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    execCommand("foreColor", color)
                    setShowColorPicker(false)
                  }}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Separator orientation="vertical" className="h-6" />

        <Button
          type="button"
          variant={isCommandActive("justifyLeft") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("justifyLeft")}
        >
          <AlignLeft className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={isCommandActive("justifyCenter") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("justifyCenter")}
        >
          <AlignCenter className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={isCommandActive("justifyRight") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("justifyRight")}
        >
          <AlignRight className="w-4 h-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Button
          type="button"
          variant={isCommandActive("insertUnorderedList") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("insertUnorderedList")}
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant={isCommandActive("insertOrderedList") ? "default" : "ghost"}
          size="sm"
          onClick={() => execCommand("insertOrderedList")}
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[120px] p-3 focus:outline-none"
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        data-placeholder={placeholder}
        style={{
          minHeight: "120px",
        }}
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
