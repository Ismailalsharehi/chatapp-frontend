// src/pages/login.tsx
"use client";
import React, { useState } from 'react';
import { NextPage } from 'next';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useLogin } from '../features/auth/hooks/useLogin';

const Login: NextPage = () => {
  const { mutate, loading, error } = useLogin();
  const [form, setForm] = useState({
    emailOrusername: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutate(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول</h2>

        <Input
          label="Email or Username"
          name="emailOrusername"
          value={form.emailOrusername}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? 'جاري الدخول...' : 'دخول'}
        </Button>
      </form>
    </div>
  );
};

export default Login;
