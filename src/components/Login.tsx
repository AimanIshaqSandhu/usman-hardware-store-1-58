
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CORRECT_PIN = '12345678';

export const Login = () => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handlePinChange = async (value: string) => {
    setPin(value);
    
    // Auto-submit when pin is complete
    if (value.length === 8) {
      setIsLoading(true);
      
      // Simulate authentication delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));

      if (value === CORRECT_PIN) {
        login();
      } else {
        toast({
          title: "Access Denied",
          description: "Invalid pin code. Please try again.",
          variant: "destructive"
        });
        setPin('');
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Card className="w-full max-w-md bg-slate-800/40 backdrop-blur-xl border-slate-700/50 shadow-2xl relative z-10">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Secure Access
            </CardTitle>
            <CardDescription className="text-slate-400 mt-2">
              Enter your 8-digit pin code to continue
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Pin Code
              </label>
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="text-slate-400 hover:text-slate-300 transition-colors"
              >
                {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="flex justify-center">
              <InputOTP
                maxLength={8}
                value={pin}
                onChange={handlePinChange}
                disabled={isLoading}
              >
                <InputOTPGroup>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className={`
                        w-12 h-12 text-lg font-mono border-slate-600 bg-slate-800/50 text-white
                        focus:border-purple-500 focus:ring-purple-500/20
                        ${showPin ? '' : '[&>*]:text-transparent [&>*]:after:content-["•"] [&>*]:after:text-white'}
                      `}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Authenticating...
            </div>
          )}

          <div className="text-center">
            <p className="text-xs text-slate-500">
              Secure authentication powered by advanced encryption
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  );
};
