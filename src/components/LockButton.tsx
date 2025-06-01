
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useToast } from "@/hooks/use-toast"

export function LockButton() {
  const { logout } = useAuth()
  const { toast } = useToast()

  const handleLock = () => {
    logout()
    toast({
      title: "App Locked",
      description: "Enter your PIN to unlock",
    })
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-8 w-8"
      onClick={handleLock}
    >
      <Lock className="h-4 w-4" />
      <span className="sr-only">Lock app</span>
    </Button>
  )
}
