import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { FileText, Mail, Lock, Github, Chrome, AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { signInWithGoogle, signInWithGitHub, signInWithEmail, signUpWithEmail } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError(null);

    try {
      const { error } = isSignUp 
        ? await signUpWithEmail(email, password)
        : await signInWithEmail(email, password);

      if (error) {
        setError(error.message);
      } else if (isSignUp) {
        setError('Check your email for the confirmation link!');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGitHub();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-2xl">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">
              Client Notes
            </h1>
            <p className="text-purple-200 text-lg">
              Secure note-taking for professionals
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-purple-200">
                {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl backdrop-blur-sm flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-200 flex-shrink-0" />
                <span className="text-red-100 text-sm">{error}</span>
              </div>
            )}

            {/* SSO Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Chrome className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors" />
                <span className="text-white font-semibold">Continue with Google</span>
              </button>

              <button
                onClick={handleGitHubLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Github className="h-5 w-5 text-white group-hover:text-purple-300 transition-colors" />
                <span className="text-white font-semibold">Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-purple-200">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-purple-300" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder-purple-300 text-white backdrop-blur-sm"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-purple-300" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 placeholder-purple-300 text-white backdrop-blur-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative text-white font-semibold">
                  {loading ? 'Loading...' : isSignUp ? 'Create Account' : 'Sign In'}
                </div>
              </button>
            </form>

            {/* Toggle Sign Up / Sign In */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError(null);
                }}
                className="text-purple-200 hover:text-white transition-colors font-medium"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-purple-300 text-sm">
            <p>Secure • Private • Professional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
