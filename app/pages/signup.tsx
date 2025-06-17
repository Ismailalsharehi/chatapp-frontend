"use client";
import React, { useState } from 'react';
import { NextPage } from 'next';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useSignup } from '../features/auth/hooks/useSignup';

const Signup: NextPage = () => {
  const { mutate, loading, error } = useSignup();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', form.username);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('confirmPassword', form.confirmPassword);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    await mutate(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">إنشاء حساب</h2>

        <Input
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? 'جاري التسجيل...' : 'سجل الآن'}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
