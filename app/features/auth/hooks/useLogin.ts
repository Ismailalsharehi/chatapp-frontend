// // src/features/auth/hooks/useLogin.ts
// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { login, LoginPayload } from '../services/authService';

// export const useLogin = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError]   = useState<string | null>(null);
//   const router = useRouter();

//   const mutate = async (payload: LoginPayload) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await login(payload);

//       // خطأ من الباك
//       if (response.errors && response.errors.length > 0) {
//         setError(response.errors[0]);
//         return;
//       }

//       // تسجيل الدخول ناجح: نحفظ التوكن في localStorage
//       const authData = response.data; // مثلاً { token: "...", user: { ... } }
//       localStorage.setItem('token', authData.token);

//       // توجه للصفحة الرئيسية أو صفحة الدردشة
//       router.push('/');
//     } catch (err: any) {
//       const apiError = err.response?.data;
//       if (apiError?.errors?.length) setError(apiError.errors[0]);
//       else if (apiError?.message) setError(apiError.message);
//       else setError('حدث خطأ أثناء تسجيل الدخول');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { mutate, loading, error };
// };

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../services/authService';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const mutate = async (payload: {emailOrusername:string;password:string;}) => {
    setLoading(true); setError(null);
    try {
      const res = await login(payload);
      if (res.data.errors?.length) { setError(res.data.errors[0]); return; }
      router.push('/dashboard');
    } catch (e: any) {
      setError(e.response?.data?.errors?.[0] || 'Login failed');
    } finally { setLoading(false); }
  };

  return { mutate, loading, error };
};