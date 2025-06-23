"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AyushmaanApplication = () => {
  const [form, setForm] = useState({
    name: "",
    aadhaar: "",
    mobile: "",
    address: "",
    district: "",
    state: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted!\n\n" + JSON.stringify(form, null, 2));
    // Later: send this data to backend or save it
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-3xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Ayushman Bharat Card Application</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
              <Input name="aadhaar" placeholder="Aadhaar Number" value={form.aadhaar} onChange={handleChange} required />
              <Input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
              <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
              <Input name="district" placeholder="District" value={form.district} onChange={handleChange} required />
              <Input name="state" placeholder="State" value={form.state} onChange={handleChange} required />

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AyushmaanApplication;
