// "use client";
// import { useState } from 'react';
// import { signup } from '../services/authService';

// export const useSignup = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const mutate = async (formData: FormData) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await signup(formData);

//       if (response.errors && response.errors.length > 0) {
//         setError(response.errors[0]);
//         return;
//       }

//       alert(response.message || 'تم إنشاء الحساب بنجاح!');
//       // redirect to login page, e.g.:
//       router.push('/login');
//     } catch (err: any) {
//       const apiError = err.response?.data;

//       if (apiError?.errors?.length > 0) {
//         setError(apiError.errors[0]);
//       } else if (apiError?.message) {
//         setError(apiError.message);
//       } else {
//         setError('حدث خطأ غير متوقع أثناء التسجيل');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { mutate, loading, error };
// };

'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signup } from '../services/authService';

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const mutate = async (formData: FormData) => {
    setLoading(true); setError(null);
    try {
      const res = await signup(formData);
      if (res.data.errors?.length) { setError(res.data.errors[0]); return; }
      router.push('/login');
    } catch (e: any) {
      setError(e.response?.data?.errors?.[0] || 'Signup failed');
    } finally { setLoading(false); }
  };

  return { mutate, loading, error };
};